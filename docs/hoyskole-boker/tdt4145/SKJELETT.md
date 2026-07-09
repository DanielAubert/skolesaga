# Bokskjelett: TDT4145 Datamodellering og databasesystemer — eksamensrettet lærebok

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
> forfatteren leser IKKE eksamensarkivet. Alle frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er derfor angitt her, destillert fra
> `EKSAMENSANALYSE.md` (20 NTNU-sett med offisielle sensorveiledninger/løsnings-
> forslag, vår 2015 – vår 2024: 9 ordinære slutteksamener, 6 kontinuasjonseksamener,
> 5 semesterprøver; faglærere Roger Midtstraum og Svein Erik Bratsberg; pensum
> Elmasri & Navathe, *Fundamentals of Database Systems*, + instituttets pensumnotat
> om lagringsstrukturer). Arketype: **DNA-regnefag** (`DNA-regnefag.md`) —
> kapittel-DNA-ene der (teori / drill / øvingseksamen) er obligatoriske og gjentas
> ikke i sin helhet her. **All ER-notasjon følger Elmasri & Navathe** med
> `(min,max)`-restriksjoner; **all SQL følger standard SQL** slik oppgavene bruker
> den; **all normalform- og kostnadsnotasjon er pensumets** (det er bokstandard
> fordi oppgavene og fasitene gjør det). Alle oppgaver, tabeller, miniverdener,
> logger og tall i den ferdige boka skal være **nyskrevne** (opphavsrett):
> nøkkelord, operatorsymboler, normalformdefinisjoner og kostnadsformler er allmenn
> faglig notasjon, men ingen oppgavetekster eller løsningsforslag fra reelle sett
> gjengis.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `tdt4145` |
| Tittel | **TDT4145 Datamodellering og databasesystemer (NTNU)** |
| Institusjon | **NTNU** (Institutt for datateknologi og informatikk) |
| Level | `'Høyskole'` |
| Arketype | Regnefag (kvantitativt/formelt fag med faste, gjentakende oppgavemønstre) |
| Antall kapitler | **40** (1 eksamenskart + 36 tema/drill + 3 eksamenssimuleringer) |
| Estimert totaltid | **≈ 2 465 min ≈ 41 timer** (inkl. 3 eksamenssimuleringer à 120 min) |
| Quiz totalt | **658** (krav ≥500) |
| Flashcards totalt | **680** (sikteintervall 650–800 for et begrepsrikt fag) |
| Prøver | **32** (4 per temadel 1–8) + **3 eksamenssimuleringer** (kap. 9.1–9.3) |

**Pitch (én avsnitt):** TDT4145 har hatt en påfallende stabil faglig kjerne i over
et tiår (samme to faglærere, samme pensumbok Elmasri & Navathe). Det som IKKE er
stabilt, er **eksamensformatet** — faget har gått gjennom fire regimer (4-timers
frisvar 2015–2019, covid-hjemmeeksamen 2020, rene flervalg 2021–2022, og det
gjeldende **blandede 2-timersformatet fra 2023**). Boka bygges mot det gjeldende
regimet: **hjelpemiddelkode D** (ingen oppslag; enkel kalkulator), der de
kvantitative temaene (lagring, hashing, kostnad, 2PL, ARIES) auto-rettes som
flervalg/tallsvar i Inspera, mens de to tyngste konstruksjonsoppgavene —
**ER-/EER-modellering** og **B+-tre-tegning** — besvares **på papir via
InsperaScan**. Vurderingen er **tredelt**: skriftlig skoleeksamen **40 %**,
semesterprøve **30 %** og prosjekt **30 %** (A–F). Faget har **ikke** én
kjerneoppgave, det har **to garanterte tyngdepunkt på slutteksamen** —
ER-/EER-modellering (100 %, alltid høyest vektet, 12–35 %) og ARIES/recovery
(100 %) — og en **smalere, men like garantert front på semesterprøven**
(normalisering + SQL + relasjonsalgebra + modellering + dekomponering, hver 100 %).
Bredden *er* eksamensformen: 12 av 18 slutteksamenstemaer har ≥60 % gjenganger-
score. Denne boka driller bredden systematisk og markerer eksplisitt hvilke
kapitler som er **semesterprøve-stoff** (Del 1–5) og hvilke som bare kommer på
slutteksamen (Del 6–8).

**Kritiske stilregler (gjelder HELE boka):**

1. **Oppgi forutsetninger — alltid.** Den hyppigst gjentatte sensorinstruksen i
   hele arkivet: ved modellering og skjema-oversettelse legges rimelige, *oppgitte*
   antagelser til grunn ved vurderingen, selv når løsningen avviker fra en tenkt
   fasit. Hvert modellerings- og oversettelseskapittel lærer eksplisitt å skrive
   ned forutsetningene, og hvert løsningsforslag i disse kapitlene starter med en
   kort «Forutsetninger»-linje.
2. **Struktur foran detaljmengde (ved modellering); begrunnelse foran påstand
   (ved utledning/klassifisering).** Ved ER/EER teller «hensiktsmessig overordnet
   struktur» mer enn små feil. Ved normalform, dekomponering, recovery-klasse,
   kostnad og ARIES teller **metoden og begrunnelsen** — ett korrekt utledet tall
   med vist metode slår et gjettet svar. Løsningsforslagene skal vise metoden, ikke
   bare svaret.
3. **Delvis uttelling er regelen**, ofte eksplisitt gradert. Ta med **hovedpoenget
   først** i definisjoner. Drill- og eksamenscasene har margnotater om hva som gir
   uttelling ved hvert steg.
4. **Ingen oppslag (kode D).** Definisjoner, normalformer, kostnadsformler,
   recovery-klasser og ARIES-reglene må **kunnes utenat**. Boka er bygd for pugg:
   flashcards og quiz er kalibrert som ren gjenkalling. Regnestykkene gjøres raskt
   og feilfritt med kalkulator.
5. **Elmasri/Navathe-notasjon og standard-SQL er fasit.** Bruk `(min,max)`-
   restriksjoner, doble rammer for svake entitetsklasser, `d`/`o` for disjunkt/
   overlappende spesialisering, `⊍` for kategori; algebraoperatorene `σ π ⋈ × ∪ − ∩ ρ`;
   FD `X → Y`, MVD `X ↠ Y`, tillukning `X⁺`. Engelsk fagterm gis i parentes ved
   første forekomst (f.eks. «svak entitetsklasse (*weak entity type*)»), men
   notasjonen holdes på pensumform siden oppgavene og fasitene forventer den.

**Kritiske sensorfeller som gjennomsyrer boka (drillmål + warnings):**

- **ARIES REDO er per LOGGPOST i STIGENDE LSN, aldri per blokk og aldri «committed».**
  Redo utføres på en loggpost når blokka står i Dirty Page Table og `PageLSN < LSN`.
  Å svare «REDO per blokk» gir nesten null (≈1 p); å bruke «committed» som
  REDO-kriterium gir **0 p**. RecLSN er den *første* update-LSN på en skitten blokk
  og **oppdateres ikke** av senere loggposter. ARIES-fasene **må bygge på hverandre**
  — hopper man over analysen, tak på ~3 poeng. Dette får eget drillkapittel (8.3) og
  gjennomsyrer Del 8.
- **LEFT OUTER JOIN når rader uten treff skal med.** Skal «forlag også uten bøker»
  eller «prosjekt uten timeliste» inkluderes, kreves `LEFT OUTER JOIN` — `INNER JOIN`
  ble eksplisitt trukket (2018). (Nyanse: i 2019 ble inner join godkjent etter
  klager — regn ikke med lempingen; behersk outer join.) Får sentral plass i 3.2.
- **Tapsløshet via chase-/tabellmetoden.** Snitt-metoden (felles attributt er
  supernøkkel i én deltabell) er *tilstrekkelig men ikke nødvendig* — godtas med god
  argumentasjon, men sensor foretrekker **chase-metoden** som streng verifikasjon.
  Får sentral plass i 5.5.
- **Originalt normalform-eksempel kreves.** Bes det om et *eget* eksempel (f.eks.
  «2NF men ikke 3NF»), gir kopiering av lærebok-/forelesningseksempelet (PostNr→
  PostSted o.l.) **null**. Boka lærer å konstruere egne, f.eks. $R(A,B,C)$,
  $F=\{A\to B,\ B\to C\}$. Får sentral plass i 5.4.
- **Boolsk negasjon i relasjonsalgebra.** $\lnot(A=x \wedge B=y) \equiv (A\neq x \vee B\neq y)$
  — **ikke** $(A\neq x \wedge B\neq y)$. Får sentral plass i 4.3.
- **To binære relasjonsklasser vs. én trinær.** Den vanligste ER-fellen: å modellere
  én trinær relasjonsklasse der sammenhengene egentlig er parvise (to binære), eller
  omvendt. Får sentral plass i 1.2/1.5.
- **Sidepekere på B+-tre-løvnivå MÅ med**, og løvblokkene vises **sortert på
  søkenøkkel**; den fulle blokka splittes *før* den nye nøkkelen settes inn. Får
  sentral plass i 6.2.
- **Superklasse-tabellen ved oversettelse:** ved *delvis* spesialisering *må* den
  finnes; ved *total* kan den droppes. Får sentral plass i 2.3.

**Format-caveat (skal stå i Del 0):** Settene 2020–2022 (kode A) er **ikke
representative**. 2020 var covid-hjemmeeksamen (alle hjelpemidler, bestått/IB,
terskel 41). 2021–2022 var rene 2-timers auto-rettede flervalgseksamener der
**SQL, relasjonsalgebra og normalisering var kuttet fra slutteksamen** (de ble
testet på semesterprøven i stedet) og ER-modell var eneste frisvar (filopplasting).
Boka bygges mot **kode D-formatet (2023 →)**: blandet 2-timers Inspera med ER/EER +
B+-tre på papir. De eldre 4-timers settene (2015–2019) er den beste kilden til
**dybde og fullstendige utledninger**, men speiler ikke lengden.

**Avvik fra DNA/README-malen (dokumentert):**

- **«Symbol- og formelliste» → «Syntaks- og notasjonsliste».** README krever en
  `collapsible` «Symbol- og formelliste» per delkapittel. For et databasefag er det
  presise apparatet ikke bare matematiske symboler, men **SQL-nøkkelord,
  algebra-symboler og ER-notasjon**. Blokken heter derfor **«Syntaks- og
  notasjonsliste»** og lister ALT delkapitlet bruker: (i) SQL-nøkkelordene med
  betydning (`SELECT`, `LEFT OUTER JOIN`, `GROUP BY`, `HAVING`, `NOT EXISTS`,
  `ON DELETE CASCADE` …); (ii) algebraoperatorene med signatur ($\sigma_{\text{pred}}$,
  $\pi_{\text{attr}}$, $\bowtie$, $\times$, $\cup$, $-$, $\cap$, $\rho$); (iii)
  ER/EER-virkemidlene (rektangel/rombe/oval, understrek = nøkkel, dobbel ramme =
  svak, `(min,max)`, `d`/`o`, `⊍`); (iv) designteori-symbolene ($X\to Y$, $X\twoheadrightarrow Y$,
  $X^{+}$, normalformnavn); (v) kostnadsformlene med variabelforklaring
  ($B$ = antall blokker, $M$ = bufferblokker, $r$ = poststørrelse, $f$ = fyllingsgrad,
  $d$ = global/lokal dybde). Regelen «per delkapittel, ikke arv fra tidligere»
  beholdes. Unntak kun for helt notasjonsfrie kapitler (finnes knapt).
- **`theorem`-blokker brukes for definisjonskontrakter OG operasjonelle kontrakter.**
  Der DNA-en bruker `theorem` for matematiske resultater, brukes den her også for
  **SQL-mønsterkontrakter** (spørringsskjelett med semantikk), **algebrakontrakter**
  (operatorsignatur + resultatskjema) og **ARIES-kontrakter** (de tre fasenes
  presise regler). Disse er bokas «teoremer» — de operasjonelle oppskriftene som
  må sitte i ryggmargen.
- **ER-diagram beskrives «i ord».** Plattformen rendrer JSON, ikke tegninger. Hvert
  ER/EER-kapittel og hver modelleringsoppgave beskriver derfor diagrammet **i
  strukturert prosa** etter en fast mal: «Entitetsklasser: … . Nøkler (understreket): … .
  Relasjonsklasser med `(min,max)`: … . Svake klasser (dobbel ramme): … .
  Spesialiseringer (`d`/`o`, total/delvis): … .» Diagrammene kan i tillegg gjengis
  som **ASCII-/tekstskjema** i `collapsible`. Løsningsforslag til modellerings-
  oppgaver bruker samme mal, siden studenten selv tegner på papir og skal kunne
  oversette mellom tekst og tegning.
- **Flashcards kalibreres som begrep ↔ presis definisjon/regel/syntaks.** Flashcards
  genereres KUN fra toppnivå `definition`-blokker med `title`. Faget er svært
  begrepsrikt — SQL-klausuler, normalformdefinisjoner, ARIES-termer (LSN, PageLSN,
  RecLSN, DPT, CLR, WAL, STEAL/NO-FORCE, checkpoint), recovery-klasser,
  algebraoperatorer, ER-virkemidler, kostnadsformler — derfor sikter boka **høyt på
  flashcards (680, intervall 650–800)**, ikke på 500-gulvet. Hvert kort parer et
  **navn/begrep** med presis **definisjon, regel eller syntaks** (f.eks. «BCNF →
  for hver ikke-triviell FD $X\to Y$ er $X$ en supernøkkel»; «`LEFT OUTER JOIN` →
  beholder alle rader fra venstre tabell; manglende treff gir NULL»).
- **Quiz kalibreres mot det auto-rettede eksamensmaskineriet.** Det gjeldende
  formatet auto-retter nettopp flervalg/tallsvar — plattformens quiz (MC) speiler
  derfor eksamens egen auto-rettede halvdel direkte: kjøretall (blokkaksesser,
  poster/blokk, hashsplitt, join-kostnad), «hvilken normalform», «er denne historien
  strikt», «hvilken innsettingssekvens gir dette B+-treet», 2PL-commitrekkefølge,
  «hvilken REDO-regel gjelder». Konstruksjonsferdighetene (tegn ER, tegn B+-tre,
  kjør ARIES, skriv SQL) trenes i `exercise`- og drillkapitlene (med `solution` +
  `hints`), ikke i quiz. `options[0]` = riktig svar (runtime stokker).
- **Drillkapitler ligger i sine temadeler** (ikke samlet i siste del), fordi hver
  høyfrekvent sjanger må drilles umiddelbart etter teorien. Del 9 beholder de tre
  komplette eksamenssimuleringene (semesterprøve + 2 skoleeksamen).
- **Kapittelantall (40) overstiger DNA-veiledningen (20–35).** Bevisst, frekvens-
  drevet: **bredden er eksamensformen**, og faget har to eksamensslag som til sammen
  dekker hele pensum. Ni temadeler som alle kommer nesten hvert år kan ikke
  komprimeres uten å underdekke et garantert tema. Hver del holdes stram, og
  `kjenne`-temaer får kompakte kapitler.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): du modellerer først, oversetter
til relasjoner, spør på dem (SQL/algebra), formaliserer designet (FD/normalisering),
og går så «under panseret» (lagring → transaksjoner → recovery). Frekvensen styrer
*omfanget* — de fem «må beherskes perfekt»-temaene får flere kapitler + eget
drillkapittel. `sectionNames` (bokforsiden) settes fra kolonne 2. Kolonnen
**SP** markerer om delen er **semesterprøve-stoff** (tester kun modellering +
relasjonsteori + normalisering + SQL/algebra — aldri lagring/transaksjoner/recovery).

| Del | `sectionName` (bokforsiden) | Kap. | SP | Begrunnelse (frekvens → omfang) |
|---|---|---|---|---|
| 0 | Eksamenskart | 1 | – | Prioriteringsverktøyet; kjerne i studieguiden. Dekker begge eksamensslag + de fire regimene. |
| 1 | ER- og EER-modellering | 6 | ✓ | **ER/EER 100 %** (nivå 1, høyest vektet enkeltoppgave 12–35 %, papir via InsperaScan). 4 teori + modelleringsdrill + «finn feil». |
| 2 | Relasjonsmodellen og oversettelse | 3 | ✓ | Relasjonsteori (semester) + **EER→skjema 47 %** (nivå 3, men nær garantert samlet). Modell + oversettelse + spesialiseringsdrøfting. |
| 3 | SQL | 5 | ✓ | **SQL 80 % slutt / 100 % semester** (nivå 1 samlet). Grunnlag, join/NULL/outer, aggregering/underspørring, DDL/DML + drill. |
| 4 | Relasjonsalgebra | 3 | ✓ | **Algebra 80 % / 100 %** (nivå 1 samlet). Operatorer, ekvivalens algebra↔SQL + drill (boolsk negasjon). |
| 5 | FD, nøkler, normalisering og dekomponering | 6 | ✓ | **Normalisering 87 %/100 %** + **tapsløs dekomponering 87 %/100 %** (begge nivå 1). Kjernen i designteorien → 5 teori + drill. |
| 6 | Lagring, indeksering og spørrekostnad | 6 | – | Kostnad/aksessvei 80 %, hashing 67 %, B+-tre 53 %, lagring 47 %, join-/sortkostnad 47 % (nivå 2/3). Ryggraden i de auto-rettede tallsvarene → 5 teori + kvantitativ drill. |
| 7 | Transaksjoner, samtidighet og recovery-egenskaper | 4 | – | 2PL 73 %, recovery-egenskaper 60 %, transaksjonsteori 60 %, serialiserbarhet 40 % (nivå 2). ACID + serialiserbarhet + 2PL + klassifisering. |
| 8 | Recovery med ARIES | 3 | – | **ARIES 100 %** (nivå 1, ryggrad). Datastrukturer/WAL + tre faser + drill. |
| 9 | Eksamenstrening | 3 | – | 1 semesterprøve-simulering (kun Del 1–5) + 2 skoleeksamen-simuleringer (kode D, full bredde). |

**Avvik fra DNA-makrostrukturen (dokumentert):** DNA-en legger alle sjangerkapitlene
i siste del. Her ligger drillene (1.5 modellering, 1.6 finn feil, 3.5 SQL, 4.3
algebra, 5.6 normalisering/dekomponering, 6.6 kvantitativ, 8.3 ARIES) inne i sine
temadeler, fordi hver er en 53–100 %-gjenganger som må drilles umiddelbart. Del 9
beholder de tre komplette eksamenssimuleringene.

---

## 3. Sjangerkatalog (A–P)

Bokstavene refereres i hvert kapittel og gjengis for studenten i Del 0. Destillert
fra EKSAMENSANALYSE §3. Kolonnen **Auto/Papir** angir hvordan sjangeren besvares i
det gjeldende kode-D-formatet (2023 →); **SP** = forekommer på semesterprøven.

| Kode | Sjanger | Form | Auto/Papir | Hyppighet (slutt / SP) |
|---|---|---|---|---|
| **A** | ER-/EER-modellering fra miniverden | konstruksjon | **Papir** (InsperaScan) | 100 % / 100 % (tolk/tell på SP) |
| **B** | «Finn feil i gitt ER-modell» — pek ut + begrunn + rett | kortsvar | Auto/papir | 13 %, distinkt |
| **C** | EER → relasjonsskjema (oversettelse; drøft spesialiseringsalternativ) | tabeller + drøfting | Papir/auto | 47 %, nær garantert samlet |
| **D** | SQL-spørringer (SELECT/JOIN/GROUP BY/underspørring; DDL/DML) | kode/radtelling | Auto (radtelling) | 80 % / 100 % |
| **E** | Relasjonsalgebra (σ π ⋈ × ∪ − ∩; ekvivalens algebra↔SQL) | uttrykk/fyll-inn | Auto | 80 % / 100 % |
| **F** | Normalisering (FD, tillukning, nøkler, normalform, originalt eksempel) | kortsvar/klassifisering | Auto | 87 % / 100 % |
| **G** | Tapsløs dekomponering (fire egenskaper, chase/snitt, moteksempel) | verifikasjon | Auto/kortsvar | 87 % / 100 % |
| **H** | Indekser og B+-trær (sett inn, vis split, sidepekere) | konstruksjon | **Papir** (InsperaScan) | 53 % |
| **I** | Extendible / statisk hashing (split, lokal/global dybde; gj.snitt-aksess) | tallsvar | Auto | 67 % |
| **J** | Lagring og blokkberegning (poster/blokk, antall blokker, nivåer) | tallsvar | Auto | 47 % |
| **K** | Spørrekostnad / aksessveier (antall blokkaksesser, index-only) | tallsvar | Auto | 80 % |
| **L** | Join- / sorteringskostnad (nested-loop minste ytterst; ekstern flettesort.) | tallsvar | Auto | 47 % |
| **M** | Recovery-egenskaper (klassifiser: ikke-gjenopprettbar/gjenopprettbar/ACA/strikt) | klassifisering | Auto | 60 % |
| **N** | 2PL / låsing (rigorous, commit-rekkefølge, deadlock) | sekvens/kortsvar | Auto | 73 % |
| **O** | Serialiserbarhet / presedensgraf (konflikt, syklus) | graf/ja-nei | Auto | 40 % |
| **P** | ARIES-recovery (analyse → REDO → UNDO; teori PageLSN/WAL/STEAL) | tabell/logg | Auto/papir | 100 % |

**Semesterprøven** tester A (tolk/match/tell — nesten aldri tegn), C, D, E, F, G.
**Slutteksamen** tester hele katalogen, med A og P som de to sikreste.

---

## 4. Kapitler

Feltene følger DNA-ens «Skjelett-krav». For dette faget: **Innholdskontrakt** =
definisjoner/teoremer + **SQL-/algebra-/ARIES-kontrakter** kapitlet SKAL lære (i
pensumnotasjon), samt **ER-diagram i ord** der relevant. Prioritetsklasser:
**perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3). Hvert teorikapittel
har standard-DNA-en: Eksamensvinkel-`tip` → Forkunnskaper-`text` + Syntaks-og-
notasjonsliste-`collapsible` → Motivasjon → `definition`/`theorem` (inkl. kontrakter)
→ utledning m/intuisjon (kun der eksamen krever aktiv utledning) → 2–4 `example`
(siste på eksamensnivå) → Typiske-feil-`warning` → 6–12 `exercise` (stigende, ender
på eksamensnivå, alle med `solution` + `hints`) → Repetisjons-`collapsible`.
Drillkapitler: Eksamensvinkel → løsningsoppskrift → sensor-kommentert case → 8–15
oppgaver på eksamensnivå.

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet — slik testes TDT4145

- **id:** `tdt4145-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen · **kapitteltype:** eksamenskart
- **description:** Den tredelte vurderingen, de to eksamensslagene med hver sin temafront, de fire formatregimene, sjangerkatalogen A–P og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet 2015–2024. Skal gjengi: (i) **den tredelte vurderingen** — skoleeksamen 40 % + semesterprøve 30 % + prosjekt 30 %, A–F, **hjelpemiddelkode D** (ingen oppslag, enkel kalkulator); (ii) **de to eksamensslagene** — slutteksamen dekker hele pensum med tyngdepunkt «under panseret»; semesterprøven dekker **kun** modellering + relasjonsteori + normalisering + SQL/algebra (aldri lagring/transaksjoner/recovery) — og at boka merker semesterprøve-stoff (Del 1–5); (iii) **de fire regimene** og at 2020–2022 (kode A) **ikke er representative**; boka bygges mot **det gjeldende 2-timers kode-D-formatet (2023 →)** der ER/EER + B+-tre besvares på papir (InsperaScan) og resten auto-rettes; (iv) at **bredden er eksamensformen**: 12 av 18 slutteksamenstemaer ≥60 %, ingen enkelt «kjerneoppgave» å satse på; (v) **begge temafrekvens-tabellene** (Tabell A slutteksamen + Tabell B semesterprøve); (vi) at faget har **to garanterte tyngdepunkt** på slutteksamen (ER/EER 100 % + ARIES 100 %); (vii) **sensors metaregler** — oppgi forutsetninger, struktur/begrunnelse foran detaljer, delvis uttelling (hovedpoeng først), vis metoden, robust sensur (tvilsoppgaver tas ut/lempes); (viii) **poenggrensene** (E≈41, D≈52, C≈64, B≈76, A≈87) og **gjenbruksfunnet** (sensorene resirkulerer oppgaver — å øve på mønstrene overføres direkte).
- **Innholdskontrakt:** Sjangerkatalogen A–P (§3) presenteres som studentens sjekkliste med form, auto/papir og hyppighet. Pluss **prognosen for neste ordinære slutteksamen (kode D)**: 1 stor ER-/EER-oppgave på papir (12–35 %) + 2–4 normaliserings-/nøkkel-/dekomponeringsflervalg + 1–3 SQL-/algebra-oppgaver + 3–5 kvantitative tallsvar (heapfil/B+-tre-blokker, extendible hashing, nested-loop, ekstern flettesortering) + 2–4 aksessvei-spørsmål + 1–2 2PL/deadlock + 1–2 recovery-klassifiseringer + 2–3 ARIES-oppgaver. Avslutt med **leseplanen**: perfekt-temaene (Del 1 ER/EER, Del 5 normalisering/dekomponering, Del 8 ARIES, + SQL/algebra Del 3–4), kunne-temaene (Del 6 kostnad/aksessvei/hashing, Del 7 2PL/recovery-egenskaper), kjenne-temaene (EER→skjema, DDL/DML, lagring, join-/sortkostnad, serialiserbarhet, «finn feil»).
- **Oppgavesjangre:** Ingen fagoppgaver; 3–4 refleksjonsoppgaver, f.eks.: «Du har 2 timer på et kode-D-sett med én stor papirbasert ER-oppgave (30 %) — hvor mye tid setter du av til den?» og «Hvilke temaer kan komme på semesterprøven, og hvilke kan bare komme på slutteksamen?»
- **Typiske feil:** Metafeilene — tro at 2021–2022-formatet (rene flervalg, ingen SQL/normalisering på slutteksamen) er normgivende; droppe et tema og satse på flaks (bredden gjør det umulig); glemme at semesterprøven teller 30 % og har sin egen smale front; tro at man kan slå opp definisjoner/formler (kode D).
- **Quiz: 14 · Flashcards: 18** (vurderingsform, de to frekvenstabellene, regimene, sjangerkatalogen, metareglene)

---

### Del 1 — ER- og EER-modellering *(ER/EER: PERFEKT · semesterprøve-stoff)*

> Del 1 er bokas tyngste del: ER-/EER-modellering er 100 % på slutteksamen og alltid
> den høyest vektede enkeltoppgaven (12–35 %), besvart **på papir via InsperaScan**.
> På semesterprøven kommer den som tolk/match/tell (nesten aldri tegn). Sensor vekter
> **struktur foran detaljmengde** og krever at du **oppgir forutsetninger**. Kap. 1.5
> er den store modelleringsdrillen; 1.6 dekker den distinkte «finn feil»-sjangeren.

#### Kapittel 1.1: ER-modellens byggeklosser

- **id:** `tdt4145-1-1` · **number:** 1.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Entitetsklasser, attributter (enkle/sammensatte/flerverdi/avledede), nøkkelattributter og relasjonsklasser — grunnvirkemidlene i Elmasri/Navathe-notasjonen.
- **Eksamensbelegg:** Sjanger A, 100 % (slutt) / 100 % (semester). Fundamentet for hele modelleringsoppgaven. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition`-blokker: **entitetsklasse** (*entity type*, rektangel), **entitet/instans**, **attributt** (oval) med undertypene sammensatt, flerverdi (dobbel oval), avledet (stiplet), **nøkkelattributt** (understreket), **relasjonsklasse** (*relationship type*, rombe), **grad** (binær/trinær), **rolle** og **rekursiv relasjon**. **ER-diagram i ord** (fast mal): «Entitetsklasser: STUDENT (nøkkel: studentnr), EMNE (nøkkel: emnekode). Relasjonsklasse TAR mellom STUDENT og EMNE …» — introduser malen her og bruk den konsekvent. Merk skillet **attributt vs. egen entitetsklasse** (når noe fortjener egen boks).
- **Oppgavesjangre:** A (delkonstruksjon) + D-lignende begrepsspørsmål. Mønstereksempel (nyskrevet): «I en database over et **turorienteringslag** skal hver *deltaker* ha navn, én eller flere *e-postadresser* og *alder* (regnes ut fra fødselsdato). Hvilke attributter er sammensatte, flerverdi og avledede? Tegn/beskriv entitetsklassen DELTAKER med korrekt attributtnotasjon.»
- **Typiske feil:** Gjøre en egenskap til attributt der den fortjener egen entitetsklasse (eller motsatt); glemme nøkkelmarkering (understrek); blande flerverdi- og sammensatt attributt; plassere et attributt på feil klasse.
- **Quiz: 16 · Flashcards: 24**

#### Kapittel 1.2: Kardinalitet og deltakelse — (min,max)-notasjonen

- **id:** `tdt4145-1-2` · **number:** 1.2 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4145-1-1` · **kapitteltype:** teori
- **description:** Kardinalitetsforhold (1:1, 1:N, M:N) og deltakelsesrestriksjoner i Elmasri/Navathes `(min,max)`-notasjon — og valget mellom én trinær og to binære relasjonsklasser.
- **Eksamensbelegg:** Sjanger A, 100 %. `(min,max)` og trinær-vs-binær er de mest vektede strukturvalgene. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition`: **kardinalitetsforhold** (1:1, 1:N, M:N), **deltakelse** (total/partiell), **`(min,max)`-restriksjon** på hver relasjonskant (les: hver entitet i klassen deltar i *minst min, høyst max* relasjonsinstanser). `theorem`-lignende **oversettelsestabell** `(min,max)` ↔ 1:N/total/partiell. **Kritisk kontrast (`theorem`): én trinær vs. to binære** — en trinær relasjonsklasse uttrykker en *samtidig* trepartssammenheng (f.eks. LEVERANDØR–LEVERER–DEL–til–PROSJEKT), mens to binære uttrykker parvise sammenhenger; de er **ikke ekvivalente**. **ER-diagram i ord**-eksempel som viser begge og forklarer når hver er riktig.
- **Oppgavesjangre:** A. Mønstereksempel (nyskrevet): «Et *verksted* utfører *reparasjoner*: hver bil kan repareres mange ganger, hver reparasjon gjelder nøyaktig én bil og utføres av minst én mekaniker. Sett `(min,max)` på alle kanter, og avgjør om REPARASJON bør være en trinær relasjonsklasse eller egen entitetsklasse.»
- **Typiske feil:** Modellere én trinær der to binære er riktig, eller omvendt (den vanligste ER-fellen); sette `(0,n)` der `(1,n)` kreves (feil total/partiell deltakelse); lese `(min,max)` «feil vei»; forveksle kardinalitetsforhold (1:N) med deltakelse (total/partiell).
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 1.3: Svake entitetsklasser og identifiserende relasjoner

- **id:** `tdt4145-1-3` · **number:** 1.3 · **estimatedMinutes:** 40 · **prerequisites:** `tdt4145-1-2` · **kapitteltype:** teori
- **description:** Når en entitetsklasse ikke har egen nøkkel og må identifiseres via en eierklasse — svak entitetsklasse (dobbel ramme), identifiserende relasjon og delvis nøkkel.
- **Eksamensbelegg:** Sjanger A, 100 % (delkomponent). Å gjøre en klasse svak *uten grunn* er en fast trekkfelle. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition`: **svak entitetsklasse** (*weak entity type*, dobbel ramme — ingen egen nøkkel), **identifiserende/eier-relasjon** (dobbel rombe), **delvis nøkkel** (*partial key*, stiplet understrek), **identifiserende eierklasse**. Regel (`theorem`): en klasse gjøres svak **kun** når identifikasjonen krever eierens nøkkel + en delvis nøkkel; ellers gis den egen nøkkel. **ER-diagram i ord**-eksempel (f.eks. ORDRELINJE svak mot ORDRE, delvis nøkkel linjenr).
- **Oppgavesjangre:** A. Mønstereksempel (nyskrevet): «En *bygning* har *rom* nummerert 1, 2, 3 … *innenfor hver bygning* (rom 101 finnes i flere bygninger). Bør ROM være en svak entitetsklasse? Angi eier, identifiserende relasjon og delvis nøkkel — eller begrunn hvorfor ROM heller bør ha egen nøkkel.»
- **Typiske feil:** Gjøre en klasse svak selv om den har (eller lett kan få) egen nøkkel; glemme den delvise nøkkelen; bruke vanlig i stedet for identifiserende relasjon; sette svak klasse uten total deltakelse mot eieren.
- **Quiz: 14 · Flashcards: 16**

#### Kapittel 1.4: EER — spesialisering, generalisering og kategori

- **id:** `tdt4145-1-4` · **number:** 1.4 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4145-1-3` · **kapitteltype:** teori
- **description:** De utvidede virkemidlene (EER): spesialisering/generalisering (disjunkt/overlappende, total/delvis), attributt-arv og kategori/union-type.
- **Eksamensbelegg:** Sjanger A, 100 % (spesialisering er nesten alltid del av den store oppgaven). Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition`: **spesialisering/generalisering**, **superklasse/subklasse**, **disjunkt (`d`) vs. overlappende (`o`)**, **total vs. delvis** spesialisering, **attributt-arv**, **spesifikke (lokale) attributter**, **kategori/union-type (`⊍`)** med surrogatnøkkel. `theorem`-oppsummering: de fire spesialiseringskombinasjonene (disjunkt/overlappende × total/delvis) og hva de betyr. Kontrast **spesialisering vs. kategori** (kategori = subklasse av *union* av flere superklasser). **ER-diagram i ord**-eksempel med `d`/`o` og total/delvis markert.
- **Oppgavesjangre:** A. Mønstereksempel (nyskrevet): «I et *bibliotek*sløp er en KONTO enten en PRIVATKONTO eller en BEDRIFTSKONTO (aldri begge, men en konto må være én av dem). Modellér som spesialisering: angi `d`/`o`, total/delvis, og hvilke attributter som arves vs. er lokale.»
- **Typiske feil:** Forveksle disjunkt (`d`) med overlappende (`o`); markere total der delvis er riktig; bruke spesialisering der kategori/union kreves (subklasse av flere ulike superklasser); glemme at subklasser arver superklassens nøkkel.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 1.5: DRILL — Modellér en miniverden (papir/InsperaScan)

- **id:** `tdt4145-1-5` · **number:** 1.5 · **estimatedMinutes:** 85 · **prerequisites:** `tdt4145-1-4` · **kapitteltype:** drill
- **description:** Full drill på sjanger A: fra tekstlig miniverden til komplett, konsistent ER-/EER-diagram — den høyest vektede papirbesvarte oppgaven.
- **Eksamensbelegg:** Sjanger A, 100 %, 12–35 % av settet. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) **les miniverdenen og skriv ned forutsetninger** (rimelige antagelser gir uttelling); 2) finn entitetsklasser (substantivene som fortjener egen boks) + nøkler; 3) finn relasjonsklasser + grad (pass på trinær vs. to binære); 4) sett `(min,max)` på hver kant; 5) avgjør svake klasser (kun når identifikasjonen krever det); 6) modellér spesialisering/kategori (`d`/`o`, total/delvis); 7) plasser hvert attributt på riktig klasse; 8) sjekk konsistens. **Sensorprioritet: hensiktsmessig overordnet struktur og konsistent virkemiddelbruk foran detaljmengde.** Gjennomført eksamenscase (nyskrevet miniverden, f.eks. et sykkeldelingssystem eller en vaksinasjonsdatabase) med margnotater om hva som gir uttelling ved hvert steg og hvordan uklar fremstilling kan trekke. Diagrammet gjengis både «i ord» (fast mal) og som ASCII-skjema i `collapsible`.
- **Oppgavesjangre:** A. 8–12 nyskrevne miniverdener av stigende kompleksitet, alle på eksamensnivå, hver med fullt løsningsforslag + forutsetningsliste. Minst to som tvinger trinær-vs-binær-valget og minst to med spesialisering/kategori.
- **Typiske feil:** Hele ER-fellekatalogen samlet — trinær der to binære (eller omvendt); unødvendig svak klasse; feil `(min,max)`; attributt på feil klasse; disjunkt/overlappende-forveksling; **glemme å oppgi forutsetninger**; uklar fremstilling som gjør kvaliteten uvurderlig.
- **Quiz: 20 · Flashcards: 12**

#### Kapittel 1.6: Finn feil i en ER-modell

- **id:** `tdt4145-1-6` · **number:** 1.6 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4145-1-5` · **kapitteltype:** teori/drill
- **description:** Den distinkte sjangeren der du får en gitt ER-modell og skal peke ut hver feil, forklare hvorfor den er feil og hvordan den rettes.
- **Eksamensbelegg:** Sjanger B, 13 % (2018, 2020) — sjelden, men distinkt og lettøvd. Prioritet: **kunne** (billig poeng når den kommer).
- **Innholdskontrakt:** `theorem`-lignende **feilkatalog** — de fem klassiske tilsiktede feilene: (1) manglende nøkkelmarkering, (2) feil kardinalitet/deltakelse, (3) feilaktig svak entitetsklasse, (4) trinær som burde vært to binære (eller omvendt), (5) attributt på feil klasse. Metode: gå systematisk gjennom hver entitets-/relasjonsklasse; **poeng gis kun for reelle feil MED begrunnelse** — ren omformulering gir null; noen feil vektes tyngre. **ER-diagram i ord**-caser med innlagte feil.
- **Oppgavesjangre:** B. Mønstereksempel (nyskrevet): «Her er en ER-modell over en *idrettsklubb* [beskrevet i ord med fem innlagte feil]. Pek ut hver feil, forklar hvorfor den er gal, og angi rettingen.» 6–8 oppgaver med gradvis flere/mer subtile feil.
- **Typiske feil:** Bare omformulere modellen uten å peke på konkrete feil (gir null); overse en av de fem klassiske; «rette» noe som ikke er feil; ikke begrunne.
- **Quiz: 14 · Flashcards: 14**

**Prøve-kvote Del 1:** 4 prøver (ER- og EER-modellering)
1. Prøve 1.A (30 min): Grunnvirkemidler + `(min,max)` — mindre miniverden (sjanger A).
2. Prøve 1.B (30 min): Svake klasser + trinær-vs-binær (sjanger A).
3. Prøve 1.C (35 min): Full EER-miniverden med spesialisering/kategori (sjanger A, eksamensnivå).
4. Prøve 1.D (25 min): «Finn feil» + tolk/tell relasjoner (semesterprøve-stil) (sjanger B/A).

---

### Del 2 — Relasjonsmodellen og oversettelse *(relasjonsteori: semesterprøve-stoff)*

> Relasjonsmodellen er broen fra ER til SQL og designteori. Oversettelse EER→skjema
> er 47 % (nivå 3) på slutteksamen, men relasjonsteorien er semesterprøve-stoff og
> forutsetning for Del 3–5. Kap. 2.3 dekker den drøftingskrevende spesialiserings-
> oversettelsen (sensor krever at alternativene *drøftes*, ikke bare velges).

#### Kapittel 2.1: Relasjonsmodellen — skjema, nøkler og integritetsregler

- **id:** `tdt4145-2-1` · **number:** 2.1 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4145-1-1` · **kapitteltype:** teori
- **description:** Relasjon, skjema `R(A,B,C,…)`, super-/kandidat-/primær-/fremmednøkkel og de to integritetsreglene (entitets- og referanseintegritet).
- **Eksamensbelegg:** Relasjonsteori (semesterprøve-stoff) + forutsetning for all SQL, algebra og normalisering. Prioritet: **perfekt** (som fundament).
- **Innholdskontrakt:** `definition`: **relasjon** (mengde tupler), **relasjonsskjema** `R(A_1,…,A_n)`, **domene**, **grad/aritet**, **supernøkkel**, **kandidatnøkkel** (minimal supernøkkel), **primærnøkkel**, **fremmednøkkel**, **entitetsintegritet** (primærnøkkel ≠ NULL), **referanseintegritet** (fremmednøkkel matcher eksisterende primærnøkkel eller er NULL), **NULL**-semantikk. Kontrast supernøkkel ⊇ kandidatnøkkel ⊇ primærnøkkel.
- **Oppgavesjangre:** Begrepsspørsmål + forberedelse til oversettelse. Mønstereksempel (nyskrevet): «Gitt skjemaet ANSATT(ansattnr, navn, avdnr) med avdnr som fremmednøkkel mot AVDELING(avdnr, …): hvilke innsettinger bryter referanseintegritet? Hva skjer med entitetsintegritet hvis ansattnr er NULL?»
- **Typiske feil:** Blande supernøkkel og kandidatnøkkel (kandidat = *minimal*); tro at fremmednøkkel må være primærnøkkel i egen tabell; glemme at fremmednøkkel kan være NULL; feiltolke NULL i nøkkelsammenheng.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 2.2: Oversettelse ER/EER → relasjonsskjema (standardkonstruksjonene)

- **id:** `tdt4145-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4145-2-1` · **kapitteltype:** teori
- **description:** Den systematiske algoritmen for å oversette entitetsklasser, 1:1/1:N/M:N-relasjoner, flerverdiattributter og svake klasser til tabeller med primær- og fremmednøkler.
- **Eksamensbelegg:** Sjanger C, 47 % (kjenne), men nær garantert samlet og forutsetning for normalisering. Prioritet: **kunne**.
- **Innholdskontrakt:** `theorem`-lignende **oversettelsesalgoritme** (7 steg, pensumets): (1) hver sterk entitetsklasse → egen tabell m/primærnøkkel; (2) svak klasse → tabell m/eierens primærnøkkel som del av nøkkel + fremmednøkkel; (3) **1:1** → fremmednøkkel på den ene siden (helst total-siden); (4) **1:N** → fremmednøkkel på N-siden; (5) **M:N** → egen koblingstabell m/begge fremmednøkler som sammensatt nøkkel; (6) flerverdiattributt → egen tabell; (7) trinær → koblingstabell med tre fremmednøkler. Hvert steg med minieksempel. **Merk:** oppgi resultatet som skjemaliste `TABELL(pk, …, fk→ANNEN)`.
- **Oppgavesjangre:** C. Mønstereksempel (nyskrevet): «Oversett følgende EER-fragment til relasjonsskjema med primær- og fremmednøkler: [beskrevet i ord — én M:N med attributt, én svak klasse, ett flerverdiattributt].»
- **Typiske feil:** Legge fremmednøkkel på feil side av 1:N (skal på N-siden); løse M:N uten egen koblingstabell; glemme at relasjonsattributter på M:N havner i koblingstabellen; ikke ta med eierens nøkkel i svak-klasse-tabellen.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 2.3: Oversettelse av spesialisering og kategori — drøft alternativene

- **id:** `tdt4145-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4145-2-2` · **kapitteltype:** teori/drill
- **description:** De tre standardalternativene for å oversette spesialisering (super-tabell / sub-tabeller / begge), avveiningene mellom dem, og reglene for total vs. delvis.
- **Eksamensbelegg:** Sjanger C, 47 %. Sensor krever at alternativene **klargjøres og drøftes** (ikke bare at ett velges). Prioritet: **kunne** (drøftingsdelen skiller topp).
- **Innholdskontrakt:** `theorem` **de tre alternativene**: (A) **kun superklasse-tabell** med `type`-attributt og NULL-bare kolonner for subklasseattributter; (B) **kun subklasse-tabeller** (hver med superklassens attributter); (C) **både super- og subklasse-tabeller**. Avveiningstabell: antall joins vs. NULL-verdier vs. lagringsplass. **Kritiske regler:** ved **delvis** spesialisering *må* superklasse-tabellen finnes (ellers mister man de rene superklasse-instansene); ved **total** kan den droppes. **Overlappende** spesialisering passer dårlig med alternativ (B). **Kategori/union** oversettes med **surrogatnøkkel**. Sensor foretrekker ingen løsning «som sådan» — **argumentasjonen teller**.
- **Oppgavesjangre:** C (med drøfting). Mønstereksempel (nyskrevet): «Oversett spesialiseringen KJØRETØY → {BIL, LASTEBIL, MC} (disjunkt, total) til relasjonsskjema. Vis minst to av de tre alternativene og drøft fordeler/ulemper (joins, NULL, plass). Endre svaret hvis spesialiseringen i stedet var *delvis*.»
- **Typiske feil:** Droppe superklasse-tabellen ved *delvis* spesialisering (den må være der); beholde den unødvendig ved *total* uten å nevne det; velge ett alternativ **uten å drøfte**; glemme surrogatnøkkel ved kategori.
- **Quiz: 14 · Flashcards: 16**

**Prøve-kvote Del 2:** 4 prøver (Relasjonsmodellen og oversettelse)
1. Prøve 2.A (25 min): Nøkkeltyper + integritetsregler (semesterprøve-stil).
2. Prøve 2.B (30 min): Oversett standardkonstruksjoner (1:1/1:N/M:N/svak) (sjanger C).
3. Prøve 2.C (35 min): Full EER→skjema med flerverdi + trinær (sjanger C).
4. Prøve 2.D (30 min): Spesialiseringsoversettelse med drøfting, total vs. delvis (sjanger C).

---

### Del 3 — SQL *(SQL: PERFEKT samlet · semesterprøve-stoff)*

> SQL er 80 % på slutteksamen og **100 % på semesterprøven** — samlet en av de
> sikreste. I det auto-rettede formatet kommer det oftest som **radtelling** («hvor
> mange rader gir spørringen») eller ekvivalens algebra↔SQL. Det viktigste
> metodesignalet i hele faget bor her: **LEFT OUTER JOIN når rader uten treff skal
> med** (kap. 3.2). Kap. 3.5 er SQL-drillen.

#### Kapittel 3.1: SQL-grunnlag — SELECT–FROM–WHERE, LIKE og ORDER BY

- **id:** `tdt4145-3-1` · **number:** 3.1 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4145-2-1` · **kapitteltype:** teori
- **description:** Den grunnleggende spørringsblokken SELECT–FROM–WHERE, tekstmatching med LIKE, DISTINCT og sortering med ORDER BY — semantikken bak radutvalget.
- **Eksamensbelegg:** Sjanger D, 80 %/100 %. Grunnlaget alle SQL-oppgaver bygger på. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **SQL-mønsterkontrakt (grunnspørring)**: `SELECT [DISTINCT] <attr> FROM <tabeller> WHERE <predikat> ORDER BY <attr> [ASC|DESC]` — utføringssemantikk (FROM lager tuppelmengde → WHERE filtrerer → SELECT projiserer → DISTINCT fjerner duplikat → ORDER BY sorterer). `definition`: **predikat** (`=, <>, <, >, BETWEEN, IN, LIKE`), **LIKE-jokere** (`%` = vilkårlig streng, `_` = ett tegn), **DISTINCT**, **aliasing** (`AS`). Merk at SQL er multimengde-semantikk (duplikater beholdes uten DISTINCT) — kontrast til relasjonsalgebraens mengde-semantikk (kap. 4.1).
- **Oppgavesjangre:** D. Mønstereksempel (nyskrevet): «Skriv en spørring som henter navn på alle *filmer* med tittel som starter på 'S' og spilletid mellom 90 og 120 minutter, sortert synkende på spilletid. Hvor mange rader gir den på den gitte tabellen?»
- **Typiske feil:** Glemme at duplikater beholdes uten DISTINCT (radtellingsfelle); forveksle `%` og `_` i LIKE; feil retning på ORDER BY; sette betingelse i SELECT i stedet for WHERE.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 3.2: Join-varianter og NULL — inner vs. LEFT OUTER JOIN

- **id:** `tdt4145-3-2` · **number:** 3.2 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4145-3-1` · **kapitteltype:** teori
- **description:** Å koble tabeller: kryssjoin, indre join (equi/natural), og — det kritiske metodesignalet — LEFT/RIGHT/FULL OUTER JOIN når rader uten treff skal med.
- **Eksamensbelegg:** Sjanger D, 80 %/100 %. **Sensor trakk eksplisitt for `INNER JOIN` der outer join krevdes (2018).** Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **join-kontrakt**: kartesisk produkt (`FROM A, B`) → equijoin (`WHERE A.k = B.k`) → `INNER JOIN … ON` (ekvivalent) → **`LEFT OUTER JOIN`** (beholder alle rader fra venstre; manglende treff gir NULL i høyre kolonner) → RIGHT/FULL. `definition`: **NULL-håndtering i join** (rader uten match), **NATURAL JOIN** (kobler på likt navngitte kolonner — **kan ikke** brukes ved ulike attributtnavn). **Kritisk regel (`warning` allerede her):** skal spørringen inkludere rader **uten** treff — «forlag også uten bøker», «prosjekt uten timeliste», «kunder uten ordre» — **må** du bruke `LEFT OUTER JOIN`; `INNER JOIN` faller de radene ut og gir trekk. Signalordene «også … uten», «inkludert de som ikke …» skal utløse outer join. Join i `FROM` vs. betingelse i `WHERE` er likeverdige når riktig brukt.
- **Oppgavesjangre:** D. Mønstereksempel (nyskrevet): «List alle *forfattere* sammen med antall bøker de har utgitt — **også forfattere uten utgivelser** (som skal vises med antall 0). Hvilken join må du bruke, og hvorfor gir `INNER JOIN` feil svar?»
- **Typiske feil:** Bruke `INNER JOIN` der rader uten treff skal med (sensortrekk 2018); telle NULL med `COUNT(*)` i stedet for `COUNT(kolonne)` etter outer join; bruke NATURAL JOIN på ulike attributtnavn; glemme at NULL ikke matcher NULL i vanlige predikat.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 3.3: Aggregering og underspørringer

- **id:** `tdt4145-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4145-3-2` · **kapitteltype:** teori
- **description:** COUNT/SUM/AVG/MIN/MAX med GROUP BY og HAVING, og underspørringer med IN/NOT IN, EXISTS/NOT EXISTS — de aggregat- og negasjonsspørringene sensor tester.
- **Eksamensbelegg:** Sjanger D, 80 %/100 %. Aggregat + underspørring er kjernen i de tyngre SQL-oppgavene. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **aggregat-kontrakt**: `SELECT <gruppeattr>, <aggregat> FROM … WHERE … GROUP BY <gruppeattr> HAVING <aggregatpredikat> ORDER BY …` — utføringsrekkefølge (WHERE filtrerer rader *før* gruppering; HAVING filtrerer grupper *etter*). `definition`: aggregatfunksjonene (og at `COUNT(*)` teller rader inkl. NULL, `COUNT(attr)` hopper over NULL); **GROUP BY** vs. **HAVING** vs. **WHERE**; **underspørring** (i WHERE/FROM/SELECT); `IN`/`NOT IN`; `EXISTS`/`NOT EXISTS`; korrelert vs. ukorrelert underspørring. Merk **NULL-fellen i `NOT IN`** (en NULL i underspørringens resultat gjør hele `NOT IN` tomt) → foretrekk `NOT EXISTS`.
- **Oppgavesjangre:** D. Mønstereksempel (nyskrevet): «Finn *avdelinger* der gjennomsnittslønnen er over 600 000, og som har minst 5 ansatte. Skriv med GROUP BY/HAVING. Skriv deretter en spørring med `NOT EXISTS` som finner ansatte uten noen registrert prosjektdeltakelse.»
- **Typiske feil:** Bruke WHERE på et aggregat (skal være HAVING); ta med et ikke-gruppert attributt i SELECT uten aggregat; NULL-fellen i `NOT IN`; forveksle `COUNT(*)` og `COUNT(attr)`; korrelert underspørring skrevet ukorrelert.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 3.4: DDL og DML — CREATE TABLE, PK/FK/cascade, INSERT/UPDATE/DELETE

- **id:** `tdt4145-3-4` · **number:** 3.4 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4145-3-1` · **kapitteltype:** teori
- **description:** Å definere skjema (CREATE TABLE med PRIMARY KEY, FOREIGN KEY og ON DELETE/UPDATE-handlinger) og endre data (INSERT/UPDATE/DELETE) med referanseintegritet.
- **Eksamensbelegg:** Sjanger D (DDL/DML), 47 % (kjenne), 0 % på 2021–2023-slutteksamen men fast i eldre sett og en billig ferdighet. Prioritet: **kjenne**.
- **Innholdskontrakt:** `theorem` **DDL-kontrakt**: `CREATE TABLE T (kol type [NOT NULL], PRIMARY KEY(...), FOREIGN KEY(...) REFERENCES S(...) ON DELETE {CASCADE|SET NULL|RESTRICT|NO ACTION} ON UPDATE {...})`. `definition`: **referansehandlinger** (CASCADE sletter/oppdaterer barn; SET NULL; RESTRICT/NO ACTION blokkerer); **INSERT/UPDATE/DELETE**-syntaks; hvordan referanseintegritet håndheves ved hver. Kobling tilbake til 2.1 (integritetsreglene) og 2.2 (fremmednøkler fra oversettelsen).
- **Oppgavesjangre:** D. Mønstereksempel (nyskrevet): «Skriv `CREATE TABLE` for ORDRELINJE med sammensatt primærnøkkel (ordrenr, linjenr) og fremmednøkkel ordrenr mot ORDRE, slik at sletting av en ordre også sletter linjene. Hva skjer med `DELETE FROM ORDRE WHERE …` da?»
- **Typiske feil:** Glemme `ON DELETE CASCADE`/handling (får referanse-brudd); feil rekkefølge ved INSERT (barn før forelder); tro DELETE på forelder alltid går uten cascade; forveksle SET NULL og CASCADE-semantikk.
- **Quiz: 14 · Flashcards: 18**

#### Kapittel 3.5: DRILL — SQL-spørringer

- **id:** `tdt4145-3-5` · **number:** 3.5 · **estimatedMinutes:** 85 · **prerequisites:** `tdt4145-3-4` · **kapitteltype:** drill
- **description:** Full drill på sjanger D: bygg spørringer fra krav, tell rader, velg riktig join, og oversett mellom SQL og relasjonsalgebra — med LEFT OUTER JOIN-disiplinen.
- **Eksamensbelegg:** Sjanger D, 80 %/100 %; radtelling og ekvivalens er de auto-rettede variantene. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) identifiser tabellene og koblingene; 2) **join-valg**: skal rader uten treff med? → `LEFT OUTER JOIN`; ellers inner; 3) filtrer (WHERE før gruppering, HAVING etter); 4) aggreger/underspør (velg `NOT EXISTS` framfor `NOT IN` ved NULL-risiko); 5) for **radtelling**: kjør spørringen mentalt mot en liten forekomst, husk multimengde-semantikk; 6) sjekk mot kravet. Gjennomkjørt eksamenscase med margnotater (hvor outer join / NULL-fellen / DISTINCT gir eller taper poeng). 12–16 nyskrevne oppgaver som roterer join-varianter, aggregat, underspørring, radtelling og «skriv SQL som tilsvarer dette algebrauttrykket».
- **Oppgavesjangre:** D. Mønstereksempel (radtelling): «Hvor mange rader returnerer denne spørringen på den gitte databasen — og hvordan endrer svaret seg hvis du bytter `LEFT OUTER JOIN` mot `INNER JOIN`?»
- **Typiske feil:** Hele SQL-fellekatalogen — inner der outer kreves; NULL i `NOT IN`; WHERE på aggregat; glemme multimengde-duplikater i radtelling; NATURAL JOIN på ulike navn.
- **Quiz: 20 · Flashcards: 12**

**Prøve-kvote Del 3:** 4 prøver (SQL)
1. Prøve 3.A (25 min): Grunnspørring + LIKE + ORDER BY + radtelling (sjanger D).
2. Prøve 3.B (30 min): Join-varianter med vekt på LEFT OUTER JOIN og NULL (sjanger D).
3. Prøve 3.C (35 min): Aggregering, GROUP BY/HAVING, underspørring (`NOT EXISTS`) (sjanger D).
4. Prøve 3.D (25 min): DDL/DML + ekvivalens SQL↔algebra (sjanger D/E).

---

### Del 4 — Relasjonsalgebra *(algebra: PERFEKT samlet · semesterprøve-stoff)*

> Relasjonsalgebra er 80 % på slutteksamen og **100 % på semesterprøven** — ofte som
> «fyll inn boksene A–F», «hvilke rader gir uttrykket» eller ekvivalens algebra↔SQL.
> Den enkeltfellen sensor oftest peker på her er **boolsk negasjon** (kap. 4.3).

#### Kapittel 4.1: Relasjonsalgebraens operatorer

- **id:** `tdt4145-4-1` · **number:** 4.1 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4145-2-1` · **kapitteltype:** teori
- **description:** De grunnleggende operatorene σ (seleksjon), π (projeksjon), ⋈ (join), × (kartesisk produkt), ∪/−/∩ (mengdeoperasjoner) og ρ (omdøping) — med resultatskjema og semantikk.
- **Eksamensbelegg:** Sjanger E, 80 %/100 %. Å kunne operatorene presist er direkte krav. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition`/`theorem` **algebrakontrakt** — hver operator med **signatur og resultatskjema**: **seleksjon** $\sigma_{\text{pred}}(R)$ (velger rader; skjema uendret), **projeksjon** $\pi_{A,B}(R)$ (velger kolonner; **mengde** — duplikater fjernes), **kartesisk produkt** $R \times S$, **theta-/equijoin** $R \bowtie_{\theta} S$, **naturlig join** $R \bowtie S$ (kobler på felles attributter), **union** $R \cup S$, **differanse** $R - S$, **snitt** $R \cap S$ (krever unionskompatibilitet), **omdøping** $\rho$. `theorem`: kartesisk produkt vs. equijoin gir ulike resultattabeller (viktig i ekvivalens-flervalg). Merk **mengde-semantikk** (kontrast til SQLs multimengde). Grafnotasjon **og** lineær tekst godtas begge.
- **Oppgavesjangre:** E. Mønstereksempel (nyskrevet): «Gitt tabellene ANSATT og AVDELING: skriv et algebrauttrykk som gir navnene på ansatte i avdeling 'Salg'. Hvor mange rader gir $R \times S$ vs. $R \bowtie S$ på de gitte forekomstene?»
- **Typiske feil:** Glemme at π fjerner duplikater (mengde); bruke ∪/−/∩ på ikke-unionskompatible skjemaer; forveksle kartesisk produkt og join; feil resultatskjema etter join.
- **Quiz: 16 · Flashcards: 24**

#### Kapittel 4.2: Sammensatte spørringer og ekvivalens algebra↔SQL

- **id:** `tdt4145-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4145-4-1` · **kapitteltype:** teori
- **description:** Å bygge flerstegsuttrykk, uttrykke aggregat/gruppering i algebraen, og gjenkjenne når et algebrauttrykk og en SQL-spørring gir samme resultat.
- **Eksamensbelegg:** Sjanger E, 80 %/100 %; ekvivalens algebra↔SQL er en fast auto-rettet flervalgsvariant. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **oversettelseskontrakt algebra↔SQL**: $\sigma \leftrightarrow$ WHERE, $\pi \leftrightarrow$ SELECT (+ DISTINCT for mengde), $\bowtie \leftrightarrow$ JOIN, $\times \leftrightarrow$ `FROM A, B`, $\cup/-/\cap \leftrightarrow$ UNION/EXCEPT/INTERSECT, aggregat/gruppering $\mathcal{F} \leftrightarrow$ GROUP BY. Byggemønster for sammensatte uttrykk (nestede operatorer, mellomresultat med ρ). `definition`: aggregat-/grupperingsoperator $_{\text{grupp}}\mathcal{F}_{\text{aggr}}(R)$. Faste flervalg: «gir disse to samme resultat?» — pass på DISTINCT (mengde vs. multimengde) og outer vs. inner.
- **Oppgavesjangre:** E. Mønstereksempel (nyskrevet): «Avgjør om $\pi_{navn}(\sigma_{avd='Salg'}(ANSATT))$ gir samme radmengde som den tilsvarende SQL-spørringen *med* og *uten* DISTINCT. Forklar forskjellen.»
- **Typiske feil:** Overse DISTINCT-forskjellen (algebra fjerner duplikat, SQL ikke); anta at algebraens join tilsvarer SQL outer join; feil operator-rekkefølge i nesting; blande × og ⋈ i ekvivalensvurdering.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 4.3: DRILL — Relasjonsalgebra

- **id:** `tdt4145-4-3` · **number:** 4.3 · **estimatedMinutes:** 80 · **prerequisites:** `tdt4145-4-2` · **kapitteltype:** drill
- **description:** Full drill på sjanger E: evaluér uttrykk mot forekomster, fyll inn manglende operatorer, og håndtér boolsk negasjon korrekt.
- **Eksamensbelegg:** Sjanger E, 80 %/100 %; «fyll inn boksene» og «hvilke rader» er de auto-rettede variantene. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) les uttrykket innenfra og ut; 2) evaluér hvert delresultat mot forekomsten (husk π = mengde); 3) ved **negasjon**: bruk $\lnot(A=x \wedge B=y) \equiv (A\neq x \vee B\neq y)$ og $\lnot(A=x \vee B=y) \equiv (A\neq x \wedge B\neq y)$ — **De Morgan**; 4) ved «fyll inn»: match ønsket resultat med operator; 5) tell rader. **Sensorfelle (`warning`):** boolsk negasjon behandlet som $(A\neq x \wedge B\neq y)$ i stedet for $(A\neq x \vee B\neq y)$ utelukker for mye. Gjennomkjørt case med margnotater. 10–14 oppgaver: evaluér uttrykk, fyll-inn-boksene A–F, negasjon, ekvivalens algebra↔SQL, × vs. ⋈.
- **Oppgavesjangre:** E. Mønstereksempel (negasjon): «Uttrykket skal gi alle rader som *ikke* har (by = 'Oslo' OG status = 'aktiv'). Skriv seleksjonspredikatet korrekt, og forklar hvorfor $\sigma_{by\neq'Oslo' \wedge status\neq'aktiv'}$ er feil.»
- **Typiske feil:** Feil boolsk negasjon (den fremhevede fellen); glemme at π fjerner duplikat i radtelling; feil delresultat i nesting; blande × og ⋈.
- **Quiz: 18 · Flashcards: 12**

**Prøve-kvote Del 4:** 4 prøver (Relasjonsalgebra)
1. Prøve 4.A (25 min): Operatorene + resultatskjema + × vs. ⋈ (sjanger E).
2. Prøve 4.B (30 min): Evaluér sammensatte uttrykk mot forekomst (sjanger E).
3. Prøve 4.C (30 min): Boolsk negasjon + fyll-inn-boksene (sjanger E).
4. Prøve 4.D (25 min): Ekvivalens algebra↔SQL med DISTINCT-/outer-nyanser (sjanger E/D).

---

### Del 5 — FD, nøkler, normalisering og dekomponering *(PERFEKT · semesterprøve-stoff)*

> Kjernen i designteorien og en av bokas tyngste deler: normalisering (87 %/100 %)
> og tapsløs dekomponering (87 %/100 %) er begge nivå 1. Sensor forventer faste grep:
> **attributt-tillukning** for nøkler, sjekk hver FD mot normalformdefinisjonen,
> **chase-metoden** for tapsløshet, og **et originalt eksempel** når det bes om (kopi
> av PostNr→PostSted gir null). Kap. 5.6 er den store designteori-drillen.

#### Kapittel 5.1: Funksjonelle avhengigheter og Armstrongs aksiomer

- **id:** `tdt4145-5-1` · **number:** 5.1 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4145-2-1` · **kapitteltype:** teori
- **description:** Funksjonell avhengighet X→Y, hvordan man utleder nye FD-er med Armstrongs aksiomer (og de avledede reglene), og hvordan man finner/motbeviser FD-er fra en tabellforekomst.
- **Eksamensbelegg:** Sjanger F, 87 %/100 %. Grunnlaget for nøkler og normalformer. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition`: **funksjonell avhengighet** $X \to Y$ (samme X ⇒ samme Y), **triviell FD**, **FD-mengde F**. `theorem` **Armstrongs aksiomer**: refleksivitet ($Y \subseteq X \Rightarrow X\to Y$), augmentasjon ($X\to Y \Rightarrow XZ\to YZ$), transitivitet ($X\to Y,\ Y\to Z \Rightarrow X\to Z$) + de avledede (union, dekomponering, **pseudotransitivitet** $X\to Y,\ WY\to Z \Rightarrow WX\to Z$). **Utledningskontrakt** (aktivt krav — vises steg for steg): utled en FD via aksiomene, f.eks. «$WY\to Z$ og $X\to Y$ gir $WX\to Z$» vist ved augmentasjon + transitivitet. **Finn/motbevis FD fra forekomst**: en FD $X\to Y$ *kan ikke* gjelde hvis to rader har lik X men ulik Y (oppgi forutsetninger). `warning`-forvarsel: sjangeren «hvilke FD-er kan *ikke* gjelde» ble erklært for vanskelig av sensor — nevnes, men drilles ikke tungt.
- **Oppgavesjangre:** F. Mønstereksempel (nyskrevet): «Gitt $F=\{A\to B,\ BC\to D\}$: utled $AC\to D$ med Armstrongs aksiomer, og navngi hvert steg. Gitt tabellforekomsten [3 rader]: hvilke av FD-ene $A\to B$ og $B\to A$ kan du *motbevise*?»
- **Typiske feil:** Bruke transitivitet uten at mellomleddet stemmer; forveksle FD-retning; påstå en FD gjelder ut fra én forekomst (kan bare *motbevises*, ikke bevises, fra data); glemme å oppgi forutsetninger ved dataoppgaver.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 5.2: Attributt-tillukning og nøkler

- **id:** `tdt4145-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4145-5-1` · **kapitteltype:** teori
- **description:** Tillukningsalgoritmen X⁺ og hvordan den brukes til å finne alle kandidatnøkler og supernøkler — med regelen om at et attributt som aldri står på høyresiden må inngå i alle nøkler.
- **Eksamensbelegg:** Sjanger F, 87 %/100 %. Tillukning er det faste grepet for nøkler og normalformsjekk. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **tillukningsalgoritmen** $X^{+}$ (pensumnotasjon): start med $X^{+}=X$; så lenge en FD $V\to W \in F$ har $V \subseteq X^{+}$, legg $W$ til $X^{+}$; gjenta til fastpunkt. `theorem` **nøkkelregel**: $X$ er supernøkkel hvis $X^{+}=$ alle attributter; kandidatnøkkel hvis i tillegg minimal. **Kritisk lemma:** et attributt som **aldri** står på høyresiden av noen FD må inngå i *alle* kandidatnøkler (start søket der). Systematisk metode for å finne *alle* kandidatnøkler. Kobling: $X\to Y$ følger av $F$ ⟺ $Y \subseteq X^{+}$.
- **Oppgavesjangre:** F. Mønstereksempel (nyskrevet): «Gitt $R(A,B,C,D,E)$ og $F=\{A\to B,\ BC\to D,\ E\to C\}$: regn ut $\{A,E\}^{+}$, og finn alle kandidatnøkler. Hvilke attributter må inngå i enhver nøkkel?»
- **Typiske feil:** Stoppe tillukningen for tidlig (ikke kjørt til fastpunkt); forveksle supernøkkel og kandidatnøkkel (glemme minimalitet); overse et attributt som aldri er på høyresiden; finne bare én nøkkel når det er flere.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 5.3: Normalformene 1NF–BCNF (og MVD/4NF)

- **id:** `tdt4145-5-3` · **number:** 5.3 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4145-5-2` · **kapitteltype:** teori
- **description:** De presise definisjonene av 1NF, 2NF, 3NF, BCNF og 4NF, og hvordan man bestemmer den høyeste normalformen et skjema oppfyller ved å sjekke hver FD.
- **Eksamensbelegg:** Sjanger F, 87 %/100 %. «Bestem høyeste normalform» er en fast auto-rettet oppgave. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` (én per normalform, hovedpoeng først, kunnes utenat): **1NF** (atomære verdier); **2NF** (ingen delvis avhengighet av en kandidatnøkkel); **3NF** (for hver ikke-triviell FD $X\to A$: $X$ er supernøkkel **eller** $A$ er nøkkelattributt); **BCNF** (for hver ikke-triviell FD $X\to A$: $X$ er supernøkkel); **4NF** (for hver ikke-triviell MVD $X\twoheadrightarrow Y$: $X$ er supernøkkel). `definition` **flerverdiavhengighet (MVD)** $X\twoheadrightarrow Y$. `theorem` **hierarki** 1NF ⊃ 2NF ⊃ 3NF ⊃ BCNF ⊃ 4NF. **Metode:** finn nøkler (5.2) → sjekk hver FD mot definisjonene ovenfra → høyeste oppfylte. Kontrast **3NF vs. BCNF** (3NF tillater FD der høyresiden er nøkkelattributt; BCNF ikke).
- **Oppgavesjangre:** F. Mønstereksempel (nyskrevet): «Gitt $R(A,B,C,D)$, nøkkel $\{A,B\}$, $F=\{AB\to C,\ C\to D\}$: hvilken normalform er høyest oppfylt? Hvilken FD bryter neste nivå, og hvorfor?»
- **Typiske feil:** Sjekke normalform uten først å finne nøklene; blande 3NF- og BCNF-vilkåret (glemme nøkkelattributt-unntaket i 3NF); overse delvis avhengighet i 2NF; behandle en triviell FD som brudd.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 5.4: Normalisering og dekomponering til 3NF/BCNF

- **id:** `tdt4145-5-4` · **number:** 5.4 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4145-5-3` · **kapitteltype:** teori
- **description:** Hvordan man dekomponerer et skjema til BCNF (eller 3NF) ved å bryte opp på en FD som bryter normalformen — og hvordan man konstruerer et *originalt* eksempel på en gitt normalform.
- **Eksamensbelegg:** Sjanger F, 87 %/100 %. **«Lag et originalt eksempel»** (f.eks. 2NF men ikke 3NF) er en fast oppgave der lærebokkopi gir null. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **BCNF-dekomponering**: finn en FD $X\to Y$ der $X$ ikke er supernøkkel; splitt $R$ i $R_1=(X \cup Y)$ og $R_2=(R - Y)$; gjenta rekursivt. `theorem` **3NF-syntese** (nevnes: minimal dekning → én tabell per FD-gruppe → sikrer FD-bevaring). **Kontrakt for originalt eksempel:** gitt «konstruer $R$ som er i X-NF men ikke Y-NF», bygg et **eget** minimalt skjema $R(A,B,C)$ med egne bokstaver og en egen FD-mengde (f.eks. 2NF ikke 3NF: $R(A,B,C)$, nøkkel $A$, $F=\{A\to B,\ B\to C\}$) — **aldri** kopiere PostNr→PostSted eller andre lærebok-/forelesningseksempler (gir null). Kobling til 5.5 (dekomponeringen må også være tapsløs).
- **Oppgavesjangre:** F. Mønstereksempel (nyskrevet): «Dekomponér $R(A,B,C,D)$ med $F=\{A\to B,\ B\to C,\ B\to D\}$ til BCNF; vis hvilken FD du bryter på i hvert steg. Konstruér deretter ditt *eget* skjema som er i 3NF men ikke BCNF (ikke bruk et eksempel fra pensum).»
- **Typiske feil:** Kopiere pensumeksempelet ved «originalt eksempel» (null); dekomponere på en FD som *ikke* bryter normalformen; glemme å sjekke tapsløshet; stoppe før alle deltabeller er i mål-normalformen.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 5.5: Tapsløs dekomponering — de fire egenskapene og chase-metoden

- **id:** `tdt4145-5-5` · **number:** 5.5 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4145-5-4` · **kapitteltype:** teori
- **description:** Hvordan en dekomponering vurderes mot de fire forholdene (attributtbevaring, FD-bevaring, tapsløst join, normalform) — med chase-/tabellmetoden som streng verifikasjon og snitt-metoden som tilstrekkelig snarvei.
- **Eksamensbelegg:** Sjanger G, 87 %/100 %. **Chase-metoden foretrekkes; snitt-metoden er tilstrekkelig men ikke nødvendig.** Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **de fire egenskapene** en dekomponering vurderes mot: (1) attributtbevaring, (2) FD-bevaring, (3) **tapsløst (non-additive) join**, (4) oppnådd normalform. `theorem` **chase-/tabellmetoden** (streng): sett opp en tabell med én rad per deltabell, fyll inn $a_i$/$b_{ij}$-symboler, anvend FD-ene til en rad blir helt $a$ (tapsløst) eller ingen endring mer skjer (tapsfullt). `theorem` **snitt-regelen** (snarvei): en binær dekomponering $R_1,R_2$ er tapsløs hvis $R_1 \cap R_2 \to R_1$ eller $R_1 \cap R_2 \to R_2$ (felles attributt er supernøkkel i minst én) — **tilstrekkelig, ikke nødvendig**. Klassisk resultat: to deltabeller **uten** felles attributt ⇒ kartesisk produkt ⇒ fremmede tupler ⇒ ikke tapsløst; kan vises med **konkret moteksempel-forekomst**.
- **Oppgavesjangre:** G. Mønstereksempel (nyskrevet): «Er dekomponeringen av $R(A,B,C,D)$ i $R_1(A,B,C)$ og $R_2(C,D)$ tapsløs når $F=\{C\to D\}$? Vis med **chase-metoden**, og bekreft med snitt-regelen. Gi en dekomponering av samme $R$ som *ikke* er tapsløs, og et moteksempel som beviser det.»
- **Typiske feil:** Bruke snitt-metoden uten begrunnelse der sensor vil se chase; hevde tapsfri fordi snitt-regelen *ikke* holder (den er ikke nødvendig); glemme en av de fire egenskapene; ikke gi moteksempel-forekomst når det bes om.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 5.6: DRILL — Normalisering og dekomponering

- **id:** `tdt4145-5-6` · **number:** 5.6 · **estimatedMinutes:** 85 · **prerequisites:** `tdt4145-5-5` · **kapitteltype:** drill
- **description:** Full drill på sjanger F+G: tillukning → nøkler → høyeste normalform → BCNF/3NF-dekomponering → tapsløshet med chase — hele designteori-kjeden i ett.
- **Eksamensbelegg:** Sjanger F (87 %/100 %) + G (87 %/100 %). Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) regn ut tillukninger, finn **alle** kandidatnøkler; 2) sjekk hver FD mot normalformdefinisjonene → høyeste normalform; 3) hvis under mål: dekomponér på en bruddgivende FD; 4) verifiser **tapsløshet med chase-metoden** (bekreft evt. med snitt); 5) ved «originalt eksempel»: konstruér eget minimalt skjema. Gjennomkjørt eksamenscase med margnotater (hvor tillukning / normalform-vilkår / chase / originalt-eksempel gir eller taper poeng). 12–16 nyskrevne oppgaver som roterer tillukning, nøkkelsøk, normalformbestemmelse, dekomponering, chase, originalt eksempel og FD-utledning.
- **Oppgavesjangre:** F, G. Mønstereksempel: «For $R(A,B,C,D,E)$ med gitt $F$: (a) finn alle nøkler, (b) bestem høyeste normalform, (c) dekomponér til BCNF, (d) vis at dekomponeringen er tapsløs med chase.»
- **Typiske feil:** Hele designteori-fellekatalogen — ufullstendig tillukning; supernøkkel forvekslet med kandidatnøkkel; 3NF/BCNF-vilkår blandet; dekomponere på feil FD; snitt uten chase; kopiert originalt eksempel.
- **Quiz: 20 · Flashcards: 12**

**Prøve-kvote Del 5:** 4 prøver (FD, nøkler, normalisering og dekomponering)
1. Prøve 5.A (30 min): FD-utledning (Armstrong) + tillukning + nøkler (sjanger F).
2. Prøve 5.B (30 min): Bestem høyeste normalform + 3NF/BCNF-skille (sjanger F).
3. Prøve 5.C (35 min): BCNF-dekomponering + originalt eksempel (sjanger F).
4. Prøve 5.D (35 min): Tapsløshet med chase + snitt + moteksempel (sjanger G).

---

### Del 6 — Lagring, indeksering og spørrekostnad *(kun slutteksamen — IKKE semesterprøve)*

> «Under panseret»: ryggraden i de auto-rettede tallsvarsoppgavene (2021–2023). Alt
> må regnes raskt og feilfritt med kalkulator. Aksessvei/kostnad er 80 %, hashing
> 67 %, B+-tre 53 %. **B+-tre-konstruksjon besvares på papir (InsperaScan)** —
> sidepekere på løvnivå MÅ med. Kap. 6.6 er den kvantitative drillen. **Ingen av
> disse temaene kommer på semesterprøven.**

#### Kapittel 6.1: Fillagring og blokkberegning

- **id:** `tdt4145-6-1` · **number:** 6.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Heapfil, poststørrelse, blokkstørrelse og fyllingsgrad — og hvordan man regner ut antall poster per blokk og antall blokker, med riktig avrunding.
- **Eksamensbelegg:** Sjanger J, 47 %. Grunnlaget for all kostnadsregning. Prioritet: **kjenne** (men forutsetning for kap. 6.4–6.5).
- **Innholdskontrakt:** `definition`: **heapfil** (uordnet), **blokk/side**, **poststørrelse** $r$, **blokkstørrelse** $B_s$, **blokkeringsfaktor**, **fyllingsgrad** $f$ (oftest $2/3\approx 0{,}67$; læreboka bruker 0,69 — begge godtatt). `theorem` **blokkberegningskontrakt**: poster per blokk $bfr = \lfloor B_s \cdot f / r \rfloor$; antall blokker $= \lceil n / bfr \rceil$ (n = antall poster). **Avrundingsregel:** $\lfloor\cdot\rfloor$ for poster per blokk, $\lceil\cdot\rceil$ for antall blokker. Bruk videre til B+-tre-nivåene (level 0, 1, 2 …).
- **Oppgavesjangre:** J. Mønstereksempel (nyskrevet): «En fil har 90 000 poster à 120 byte, blokkstørrelse 4 096 byte og fyllingsgrad 2/3. Hvor mange poster får plass i én blokk, og hvor mange blokker trengs?»
- **Typiske feil:** Feil avrundingsretning ($\lceil\cdot\rceil$ der $\lfloor\cdot\rfloor$ skal brukes); glemme fyllingsgraden; blande byte og poster; runde poster per blokk oppover.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 6.2: B+-trær — struktur og konstruksjon

- **id:** `tdt4145-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4145-6-1` · **kapitteltype:** teori
- **description:** B+-treets struktur (interne noder vs. løvnivå med sidepekere), og hvordan man setter inn nøkler med splitting — vist tilstand før hver split.
- **Eksamensbelegg:** Sjanger H, 53 %. **Besvares på papir (InsperaScan).** Nyere flervalg: «hvilken innsettingssekvens gir dette treet» / «er dette lovlig struktur». Prioritet: **kunne**.
- **Innholdskontrakt:** `definition`: **B+-tre**, **orden/fanout**, **intern node** (kun søkenøkler + pekere), **løvnode** (alle nøkler, **sortert**, + **sidepeker** til neste løv), **høyde/nivåer**. `theorem` **innsettingskontrakt** (pensumnotatets default): sett inn i riktig løvblokk sortert; **hvis blokka blir full, splitt den *før* den nye nøkkelen plasseres**; **splitnøkkelen er minste verdi i høyreblokka** (Elmasri/Navathe-varianten: største i venstre — godtas); løft splitnøkkel opp; vis treets tilstand **før hver split** og til slutt. **Kritisk regel (`warning` allerede her):** sidepekere på løvnivå MÅ tegnes (uten dem kan man ikke skanne løvnivået i kostnadsoppgaver), og løvpostene vises sortert på søkenøkkel.
- **Oppgavesjangre:** H. Mønstereksempel (nyskrevet): «Sett inn nøklene 12, 7, 25, 3, 18, 9, 30, 5 i denne rekkefølgen i et tomt B+-tre med maks 3 nøkler per node. Vis treet før hver split og til slutt, med sidepekere på løvnivå.»
- **Typiske feil:** Glemme sidepekere på løvnivå (bryter senere skanningsoppgaver); splitte etter i stedet for før innsetting; feil splitnøkkel; usortert løvnivå; blande intern-node- og løvnode-innhold (interne har ikke data).
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 6.3: Extendible og statisk hashing

- **id:** `tdt4145-6-3` · **number:** 6.3 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4145-6-1` · **kapitteltype:** teori
- **description:** Extendible hashing (directory, global/lokal dybde, blokksplitt) og statisk hashing med overløpsblokker — konstruksjon og gjennomsnittlig blokkaksess.
- **Eksamensbelegg:** Sjanger I, 67 % (stigende — 4/4 i 2021–23). Prioritet: **kunne** (prioritér gitt trenden).
- **Innholdskontrakt:** `definition`: **hashfunksjon** $h(K)=K \bmod 2^{d}$, **directory**, **global dybde** $d$, **lokal dybde** $d'$, **bøtte/blokk**, **overløpsblokk**, **kollisjon**. `theorem` **extendible-splittkontrakt**: når en full bøtte overløper, splittes den; hvis $d' = d$ dobles directoryet ($d{+}{+}$); lokal dybde på de to nye bøttene økes. **To bit-konvensjoner godtas:** minst signifikante bit (pensumnotat) eller mest signifikante (læreboka) — vær konsekvent. `theorem` **statisk-hash-kostnad**: gjennomsnittlig blokkaksess $= 1 + (\text{overløpstillegg})$. Merk: `local depth = global depth` ved start (sensor godtok bredere svar etter klager).
- **Oppgavesjangre:** I. Mønstereksempel (nyskrevet): «Med $h(K)=K \bmod 8$ og bøttekapasitet 2, sett inn 4, 12, 20, 5, 13, 21 (minst signifikante bit). Hvilken bøtte splitter først, og hva blir global/lokal dybde etterpå?»
- **Typiske feil:** Blande de to bit-konvensjonene midt i oppgaven; øke global dybde når bare lokal skal økes (og omvendt); glemme directory-dobling ved $d'=d$; feil gjennomsnittsberegning ved overløp.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 6.4: Aksessveier og spørrekostnad

- **id:** `tdt4145-6-4` · **number:** 6.4 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4145-6-2` · **kapitteltype:** teori
- **description:** Antall blokkaksesser (I/O) for de ulike aksessveiene — clustered/unclustered B+-tre, hash, fullt skann og index-only — hver med begrunnelse.
- **Eksamensbelegg:** Sjanger K, 80 %. Den klassiske «index-only»-oppgaven omtales som «spurt om i annenhver eksamen». Prioritet: **kunne** (avgjør C→A).
- **Innholdskontrakt:** `definition`: **clustered vs. unclustered indeks**, **primær-/sekundærindeks**, **aksessvei**, **index-only query**. `theorem` **kostnadskontrakt (blokkaksesser)**: direkte oppslag ned clustered B+-tre = **treets høyde** (typisk 3); fullt løvnivå-skann = antall løvblokker (+ nedstigning); `SELECT *` i clustered hash = alle blokker (må skanne alt); sekundærindeks = høyde + **ett heap-oppslag per treff**; **index-only** slipper heap-tilgang (kun treet); statisk hash med overløp = $1 +$ overløpstillegg. **Regel:** begrunn hvert tall.
- **Oppgavesjangre:** K. Mønstereksempel (nyskrevet): «En tabell har en clustered B+-tre-indeks av høyde 3 med 400 løvblokker. Hvor mange blokkaksesser koster (a) et punktoppslag, (b) et fullt skann via løvnivået, (c) en index-only-spørring som bare trenger søkenøkkelen?»
- **Typiske feil:** Glemme heap-oppslaget per treff ved sekundærindeks; regne index-only med heap-tilgang; ikke begrunne tallet; blande clustered og unclustered kostnad.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 6.5: Join- og sorteringskostnad

- **id:** `tdt4145-6-5` · **number:** 6.5 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4145-6-4` · **kapitteltype:** teori
- **description:** Kostnaden for nested-loop-join (med minste relasjon ytterst) og ekstern flettesortering — de to faste kostnadsformlene i tallsvarsoppgavene.
- **Eksamensbelegg:** Sjanger L, 47 %. Prioritet: **kjenne** (men fast auto-rettet variant).
- **Innholdskontrakt:** `theorem` **nested-loop-kontrakt**: med $M$ bufferblokker og **minste relasjon ytterst** (ett gjennomløp): kostnad $= B_{\text{ytre}} + \lceil B_{\text{ytre}}/(M-2)\rceil \cdot B_{\text{indre}}$ (én bufferblokk til indre, én til resultat). Sensorpoeng: «minste tabell har alltid kun ett gjennomløp». `theorem` **ekstern flettesortering**: $2 \cdot B \cdot (1 + \lceil \log_{M-1}\lceil B/M\rceil \rceil)$ (les+skriv = 2 per blokk per pass). Vis hva hvert ledd betyr.
- **Oppgavesjangre:** L. Mønstereksempel (nyskrevet): «To relasjoner har 200 og 1 000 blokker; bufferet har 12 blokker. Regn ut nested-loop-join-kostnaden med riktig relasjon ytterst. Hvor mange pass kreves for å sortere den store eksternt?»
- **Typiske feil:** Ha største relasjon ytterst (dyrere); feil bufferregnskap ($M-2$); glemme skrive-passet i flettesortering; feil logaritmebase ($M-1$).
- **Quiz: 14 · Flashcards: 16**

#### Kapittel 6.6: DRILL — Kvantitative lagrings-, indeks- og kostnadsoppgaver

- **id:** `tdt4145-6-6` · **number:** 6.6 · **estimatedMinutes:** 85 · **prerequisites:** `tdt4145-6-5` · **kapitteltype:** drill
- **description:** Full drill på de auto-rettede tallsvarssjangrene H–L: blokkberegning, B+-tre-konstruksjon, hashsplitt, aksessvei-kostnad og join-/sorteringskostnad — raskt og feilfritt.
- **Eksamensbelegg:** Sjanger H, I, J, K, L — ryggraden i det auto-rettede 2-timersformatet. Prioritet: **kunne** (perfekt på formlene).
- **Innholdskontrakt (løsningsoppskrift):** for hver sjanger den faste kontrakten fra 6.1–6.5, med **avrundingsdisiplin** ($\lfloor\cdot\rfloor$ poster/blokk, $\lceil\cdot\rceil$ blokker) og **begrunn hvert tall**. B+-tre: tegn med sidepekere, splitt før innsetting. Hash: velg én bit-konvensjon og hold den. Join: minste ytterst. Gjennomregnet case med margnotater. 12–16 nyskrevne tallsvarsoppgaver som roterer alle fem sjangrene.
- **Oppgavesjangre:** H, I, J, K, L. Mønstereksempel: «(a) antall blokker for en fil; (b) B+-tre etter en innsettingssekvens; (c) hvilken bøtte splitter i extendible hashing; (d) blokkaksesser for et index-only-oppslag; (e) nested-loop-kostnad.»
- **Typiske feil:** Feil avrunding; glemte sidepekere; blandede hash-konvensjoner; heap-oppslag i index-only; største relasjon ytterst.
- **Quiz: 20 · Flashcards: 12**

**Prøve-kvote Del 6:** 4 prøver (Lagring, indeksering og spørrekostnad)
1. Prøve 6.A (25 min): Blokkberegning + B+-tre-nivåer (sjanger J).
2. Prøve 6.B (30 min): B+-tre-konstruksjon med split og sidepekere (sjanger H).
3. Prøve 6.C (30 min): Extendible/statisk hashing (sjanger I).
4. Prøve 6.D (35 min): Aksessvei-kostnad + join-/sorteringskostnad (sjanger K/L).

---

### Del 7 — Transaksjoner, samtidighet og recovery-egenskaper *(kun slutteksamen)*

> Samtidighetskontroll og transaksjonsteori: 2PL 73 %, recovery-egenskaper 60 %,
> transaksjonsteori 60 %, serialiserbarhet 40 %. Alle klassifiseringer krever
> **begrunnelse mot definisjonen** — å svare «strict/ACA/recoverable» uten å peke på
> dirty read + commit-rekkefølge gir lite. Denne delen forbereder ARIES (Del 8).
> **Ingen av disse temaene kommer på semesterprøven.**

#### Kapittel 7.1: Transaksjoner og ACID — WAL, STEAL/NO-FORCE, isolasjonsnivåer

- **id:** `tdt4145-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Transaksjonsbegrepet og ACID-egenskapene, buffer-/loggpolitikkene WAL og STEAL/NO-FORCE, og isolasjonsnivåene med fantomer og snapshot isolation.
- **Eksamensbelegg:** Transaksjons-/isolasjonsteori, 60 %. Fundamentet for både serialiserbarhet, 2PL og ARIES. Prioritet: **kunne**.
- **Innholdskontrakt:** `definition`: **transaksjon**, **ACID** (atomisitet, konsistens, isolasjon, holdbarhet), **historie/skjema**, **commit/abort**, **WAL** (*write-ahead logging* — loggposten skrives før datablokka), **STEAL/NO-STEAL** (kan ucommittede endringer skrives til disk?), **FORCE/NO-FORCE** (må committede endringer skrives ved commit?), **isolasjonsnivåene** (READ UNCOMMITTED → SERIALIZABLE), **fantom**, **snapshot isolation** (vs. SERIALIZABLE). `theorem`: hvorfor STEAL krever UNDO og NO-FORCE krever REDO (kobling til Del 8).
- **Oppgavesjangre:** Begrepsspørsmål + F-utsagn. Mønstereksempel (nyskrevet): «Et system bruker STEAL + NO-FORCE. Hvilke to recovery-operasjoner (REDO/UNDO) må loggen støtte, og hvorfor følger hver av dem av nøyaktig én av de to politikkene?»
- **Typiske feil:** Blande STEAL/NO-FORCE med hvilken recovery-operasjon de utløser; tro snapshot isolation = SERIALIZABLE; glemme at WAL gjelder loggposten *før* datablokka; forveksle isolasjonsnivåenes garantier.
- **Quiz: 16 · Flashcards: 24**

#### Kapittel 7.2: Serialiserbarhet og presedensgraf

- **id:** `tdt4145-7-2` · **number:** 7.2 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4145-7-1` · **kapitteltype:** teori
- **description:** Konflikter (RW/WR/WW), presedensgraf og konfliktserialiserbarhet — syklus i grafen ⇒ ikke konfliktserialiserbar.
- **Eksamensbelegg:** Sjanger O, 40 %. Nyere flervalg: «hvilke av disse historiene er konfliktserialiserbare». Prioritet: **kunne**.
- **Innholdskontrakt:** `definition`: **konflikt** (to operasjoner på samme dataelement, minst én skriv: RW, WR, WW), **konfliktekvivalens**, **konfliktserialiserbar historie**, **presedens-/serialiseringsgraf** (node per transaksjon; kant $T_i \to T_j$ ved konflikt der $T_i$ kommer først). `theorem` **serialiserbarhetskontrakt**: bygg grafen fra konfliktene; **syklus ⇒ ikke konfliktserialiserbar**; asyklisk ⇒ serialiserbar, og topologisk sortering gir en ekvivalent seriell historie.
- **Oppgavesjangre:** O. Mønstereksempel (nyskrevet): «Gitt historien $H$ med operasjonene til $T_1, T_2, T_3$: tegn presedensgrafen, finn eventuelle sykler, og avgjør om $H$ er konfliktserialiserbar. Hvis ja, oppgi en ekvivalent seriell rekkefølge.»
- **Typiske feil:** Overse en konflikt (særlig WW); tegne kant feil vei; konkludere «serialiserbar» uten å sjekke *alle* konflikter; blande konflikt- og visningsserialiserbarhet.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 7.3: 2PL, låsing og vranglås

- **id:** `tdt4145-7-3` · **number:** 7.3 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4145-7-2` · **kapitteltype:** teori
- **description:** Tofaselåsing (2PL) og variantene, spesielt rigorous 2PL (alle låser holdes til commit), og hvordan man finner commit-rekkefølgen eller påviser vranglås.
- **Eksamensbelegg:** Sjanger N, 73 %. Fast: utfør en sekvens under rigorous 2PL og oppgi commit-rekkefølgen, eller finn deadlock. Prioritet: **kunne**.
- **Innholdskontrakt:** `definition`: **delt/eksklusiv lås** (S/X), **2PL** (voksefase → krympefase), **strict 2PL**, **rigorous 2PL** (alle låser til commit), **vranglås (deadlock)**, **deadlock-deteksjon** (vent-for-graf med syklus). `theorem` **2PL-kontrakt**: utfør operasjonssekvensen; en transaksjon som må vente på lås blokkeres til holderen committer; under rigorous slippes alle låser ved commit; oppgi **commit-rekkefølgen**. Ved deadlock: det er nok å påpeke «her er vranglås» for full score (detektor aborterer + restarter). Scheduler-avhengige varianter der uavhengige transaksjoner bytter rekkefølge godtas.
- **Oppgavesjangre:** N. Mønstereksempel (nyskrevet): «Kjør operasjonssekvensen for $T_1$ og $T_2$ under rigorous 2PL. Vis lås/opplås-trasé og oppgi commit-rekkefølgen — eller påvis at det oppstår vranglås.»
- **Typiske feil:** Slippe låser før commit under rigorous; overse en blokkering; feil commit-rekkefølge; ikke gjenkjenne vranglås (vent-for-syklus).
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 7.4: Recovery-egenskaper — klassifisering av historier

- **id:** `tdt4145-7-4` · **number:** 7.4 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4145-7-3` · **kapitteltype:** teori
- **description:** Å klassifisere en historie som ikke-gjenopprettbar, gjenopprettbar, ACA eller strikt — alltid med begrunnelse mot definisjonen (dirty read + commit-rekkefølge).
- **Eksamensbelegg:** Sjanger M, 60 %. **Klassifisering uten begrunnelse gir lite.** Prioritet: **kunne**.
- **Innholdskontrakt:** `definition` (hierarki, hovedpoeng først): **ikke-gjenopprettbar** (en transaksjon committer etter å ha lest en ucommittet verdi fra en skriver som *ikke* har committet); **gjenopprettbar** (*recoverable* — hver transaksjon committer *etter* alle den leste fra); **ACA** (*avoids cascading aborts* — leser kun committede verdier); **strikt** (verken leser eller *overskriver* en ucommittet verdi). `theorem` **klassifiseringskontrakt**: let etter (1) **dirty read** (les av ucommittet verdi) og (2) **commit-rekkefølgen**; leser en transaksjon skitten verdi og committer *før* skriveren ⇒ ikke gjenopprettbar; skriver over ucommittet verdi ⇒ ikke strikt; ingen dirty read/write ⇒ strikt. Hierarki: strikt ⊂ ACA ⊂ gjenopprettbar.
- **Oppgavesjangre:** M. Mønstereksempel (nyskrevet): «Klassifiser historien $H$ (høyeste egenskap den oppfyller): ikke-gjenopprettbar / gjenopprettbar / ACA / strikt. Begrunn ved å peke på dirty read og commit-rekkefølgen.»
- **Typiske feil:** Klassifisere uten begrunnelse (peke på dirty read + commit-rekkefølge); forveksle ACA og strikt (strikt forbyr også *overskriving* av ucommittet); oppgi en lavere egenskap enn den høyeste som holder; overse en dirty read.
- **Quiz: 16 · Flashcards: 18**

**Prøve-kvote Del 7:** 4 prøver (Transaksjoner, samtidighet og recovery-egenskaper)
1. Prøve 7.A (25 min): ACID + WAL + STEAL/NO-FORCE + isolasjonsnivåer (begrep/F).
2. Prøve 7.B (30 min): Presedensgraf + konfliktserialiserbarhet (sjanger O).
3. Prøve 7.C (30 min): Rigorous 2PL — commit-rekkefølge + deadlock (sjanger N).
4. Prøve 7.D (30 min): Recovery-klassifisering med begrunnelse (sjanger M).

---

### Del 8 — Recovery med ARIES *(ARIES: PERFEKT · kun slutteksamen)*

> Den andre garanterte tyngdepunktet på slutteksamen (100 %). Sensor er streng og
> presis her, og fasene **må bygge på hverandre**. De to kritiske reglene —
> **REDO per loggpost i stigende LSN med `PageLSN < LSN`** (aldri per blokk, aldri
> «committed») og at **RecLSN er den første update-LSN og ikke oppdateres** — får
> full drilloppmerksomhet i kap. 8.3. **Kommer ikke på semesterprøven.**

#### Kapittel 8.1: ARIES-datastrukturene og WAL

- **id:** `tdt4145-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4145-7-1` · **kapitteltype:** teori
- **description:** ARIES-loggen og dens datastrukturer — LSN, PrevLSN, PageLSN, RecLSN, transaksjonstabellen, Dirty Page Table, CLR og checkpoint — og hvorfor WAL og STEAL/NO-FORCE gjør ARIES nødvendig og mulig.
- **Eksamensbelegg:** Sjanger P (teoridelen), 100 %. «Forklar PageLSN/WAL/STEAL/NO-FORCE — hvorfor de finnes» er fast. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` (én per term, kunnes utenat): **LSN** (*log sequence number*, monotont økende), **PrevLSN** (forrige loggpost i samme transaksjon), **PageLSN** (LSN til siste endring på blokka), **RecLSN** (*recovery LSN* — **første** update-LSN som gjorde blokka skitten; **oppdateres ikke** av senere loggposter), **transaksjonstabell** $(TransId, LastLSN, Status)$, **Dirty Page Table (DPT)** $(Page, RecLSN)$, **CLR** (*compensation log record*), **checkpoint**, **WAL**, **STEAL/NO-FORCE**. `theorem` **ARIES-kontrakt (datastrukturer)**: hvordan hver oppdateres ved en update-loggpost. Kobling: STEAL ⇒ UNDO trengs; NO-FORCE ⇒ REDO trengs; WAL garanterer at loggen ligger på disk før dataene.
- **Oppgavesjangre:** P (teori) + D-begrep. Mønstereksempel (nyskrevet): «Forklar hva RecLSN er, og hvorfor den *ikke* oppdateres når en senere loggpost endrer samme blokk. Hva ville gått galt i REDO hvis den ble oppdatert?»
- **Typiske feil:** Oppdatere RecLSN ved senere loggposter (den er den *første*); blande PageLSN og RecLSN; blande STEAL/NO-FORCE med hvilken operasjon de utløser; tro CLR er en vanlig update-loggpost (den er kompenserende og undoes ikke).
- **Quiz: 16 · Flashcards: 26**

#### Kapittel 8.2: De tre fasene — analyse, REDO og UNDO

- **id:** `tdt4145-8-2` · **number:** 8.2 · **estimatedMinutes:** 65 · **prerequisites:** `tdt4145-8-1` · **kapitteltype:** teori
- **description:** ARIES-gjenopprettingen i tre faser: analyse (bygg DPT + transaksjonstabell fra checkpoint), REDO (stigende LSN, PageLSN<LSN) og UNDO (baklengs, med CLR og Abort).
- **Eksamensbelegg:** Sjanger P, 100 %. **Den mest sensorkritiske oppgaven i faget.** Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **fasekontraktene** (presise, i pensumnotasjon):
  - **Analyse:** start i checkpoint; les loggen framover; DPT får $(Page, RecLSN)$ der RecLSN = **første** update-LSN per skitten blokk (oppdateres *ikke* senere); transaksjonstabellen får $(TransId, LastLSN, Status)$; committede transaksjoner fjernes/merkes, aktive forblir.
  - **REDO:** i **stigende LSN-rekkefølge**, start på **eldste RecLSN** i DPT; redo en loggpost **når blokka er i DPT og `PageLSN < LSN`** (ellers hopp over); redo gjenskaper handlingen og setter PageLSN = LSN. **Aldri per blokk; aldri med «committed» som kriterium.**
  - **UNDO:** rull tilbake **aktive (ucommittede)** transaksjoner **baklengs** (fra høyeste LastLSN, følg PrevLSN); skriv en **CLR** for hver angret operasjon; avslutt med `Abort`. (Ren update-loggpost i stedet for CLR godtas; Abort kan komme før/etter CLR.)
  - **Kritisk:** hver fase **bygger på forrige** — analysens DPT/transaksjonstabell er inngangen til REDO og UNDO.
- **Oppgavesjangre:** P. Mønstereksempel (nyskrevet): «Gitt loggen [nyskrevet, med checkpoint, updates på blokker P1/P2/P3, én commit og to aktive transaksjoner]: utfør analysefasen (DPT + transaksjonstabell), deretter REDO (angi hvilke LSN-er som redoes og hvilke som hoppes over med begrunnelse `PageLSN<LSN`), deretter UNDO (med CLR-er).»
- **Typiske feil:** REDO «per blokk» (≈1 p) eller med «committed»-kriterium (0 p); ikke bygge fasene på hverandre (tak ~3 p); starte REDO feil sted (skal være eldste RecLSN); glemme CLR i UNDO; oppdatere RecLSN underveis.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 8.3: DRILL — Kjør ARIES på en logg

- **id:** `tdt4145-8-3` · **number:** 8.3 · **estimatedMinutes:** 90 · **prerequisites:** `tdt4145-8-2` · **kapitteltype:** drill
- **description:** Full drill på sjanger P: kjør analyse → REDO → UNDO mekanisk og korrekt på en gitt logg, med fasene bygd på hverandre og REDO-regelen anvendt per loggpost.
- **Eksamensbelegg:** Sjanger P, 100 %. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) **Analyse** — fra checkpoint framover; bygg DPT $(Page, RecLSN)$ (RecLSN = første update, fast) og transaksjonstabell $(TransId, LastLSN, Status)$; 2) **REDO** — stigende LSN fra eldste RecLSN; for hver update-loggpost: er blokka i DPT **og** `PageLSN < LSN`? → redo (sett PageLSN=LSN); ellers hopp over (skriv *hvorfor*); 3) **UNDO** — aktive transaksjoner baklengs via PrevLSN; skriv CLR + Abort. **Aldri per blokk / committed.** Gjennomkjørt eksamenscase med margnotater om hvert delpoeng (hva som gir uttelling, og de graderte tapene ved per-blokk/committed). 8–12 nyskrevne logger av stigende kompleksitet (varier antall blokker, aktive vs. committede transaksjoner, checkpoint-plassering), hver med full trefase-løsning.
- **Oppgavesjangre:** P. Mønstereksempel: «For loggen under: (a) analyse (DPT + transtabell), (b) REDO med begrunnet hopp/redo per LSN, (c) UNDO med CLR-er. Marker hvor et 'per blokk'- eller 'committed'-svar ville tapt poeng.»
- **Typiske feil:** Alle P-fellene samlet — per blokk / committed-kriterium; fasene ikke bygd på hverandre; feil REDO-startpunkt; oppdatert RecLSN; manglende CLR.
- **Quiz: 20 · Flashcards: 12**

**Prøve-kvote Del 8:** 4 prøver (Recovery med ARIES)
1. Prøve 8.A (25 min): ARIES-datastrukturene + WAL/STEAL/NO-FORCE-teori (sjanger P/D).
2. Prøve 8.B (30 min): Analysefasen — DPT + transaksjonstabell (sjanger P).
3. Prøve 8.C (35 min): REDO med `PageLSN<LSN`-begrunnelse per loggpost (sjanger P).
4. Prøve 8.D (35 min): Full trefase-kjøring analyse→REDO→UNDO (sjanger P).

---

### Del 9 — Eksamenstrening

> Tre komplette simuleringer under tidspress: én semesterprøve (kun Del 1–5) og to
> skoleeksamener i det gjeldende kode-D-formatet (2-timers blanding av auto-rettet og
> papirbesvart). Løsningsforslag som A-besvarelse i `collapsible` per oppgave, med
> `tip` om delpoeng/vekting og sensors metaregler. Alt nyskrevet.

#### Kapittel 9.1: Semesterprøve-simulering (kun modellering + relasjonsteori + normalisering + SQL/algebra)

- **id:** `tdt4145-9-1` · **number:** 9.1 · **estimatedMinutes:** 120 · **prerequisites:** `tdt4145-5-6` · **kapitteltype:** øvingseksamen
- **description:** Komplett semesterprøve som speiler Tabell B: kun Del 1–5-stoff (modellering, relasjonsteori, normalisering, SQL, relasjonsalgebra, tapsløs dekomponering) — aldri lagring/transaksjoner/recovery.
- **Eksamensbelegg/miks:** Speiler semesterprøvens front (30 % av karakteren): **normalisering** (F: tillukning, nøkler, høyeste normalform, dekomponering) + **SQL** (D: join-varianter inkl. outer, aggregat, radtelling) + **modellering** (A: tolk/match/tell relasjoner — nesten aldri tegn) + **relasjonsalgebra** (E: evaluér/fyll inn + ekvivalens algebra↔SQL) + **tapsløs dekomponering** (G: chase). Hver 100 % på semesterprøven. Auto-rettet flervalgs-/tallsvars-stil med noen konstruksjonsoppgaver. Løsningsforslag som A-besvarelse med delpoeng-`tip`.
- **Innholdskontrakt:** Dekker sjangrene A (tolk/tell), C, D, E, F, G — **ingen** H–P (lagring/transaksjoner/recovery kommer aldri på semesterprøven; dette gjøres eksplisitt for studenten).
- **Oppgavesjangre:** A, C, D, E, F, G.
- **Quiz: 16 · Flashcards: 0**

#### Kapittel 9.2: Skoleeksamen-simulering 1 — bredt kode-D-sett

- **id:** `tdt4145-9-2` · **number:** 9.2 · **estimatedMinutes:** 120 · **prerequisites:** `tdt4145-9-1` · **kapitteltype:** øvingseksamen
- **description:** Komplett 2-timers kode-D-sett som speiler prognosen for neste ordinære slutteksamen: én stor papirbasert ER-oppgave + auto-rettede tallsvar/flervalg over hele bredden + ARIES.
- **Eksamensbelegg/miks:** Speiler prognosen (2023 →): **1 stor ER-/EER-modelleringsoppgave på papir** (12–35 %, sjanger A) + 2–4 normaliserings-/nøkkel-/dekomponeringsflervalg (F/G) + 1–3 SQL-/relasjonsalgebra-oppgaver (D/E) + 3–5 kvantitative tallsvar (J/H/I/L: heapfil-blokker, B+-tre, extendible hashing, nested-loop) + 2–4 aksessvei-spørsmål (K) + 1–2 2PL/deadlock (N) + 1–2 recovery-klassifiseringer (M) + 2–3 ARIES-oppgaver (P: analyse+REDO+UNDO). Markér hvilke som ville vært papir (InsperaScan: ER + B+-tre) vs. auto-rettet. Løsningsforslag som A-besvarelse med delpoeng-`tip` (særlig ARIES-fasene og outer-join/boolsk-negasjon-finessene).
- **Innholdskontrakt:** Dekker A, C, D, E, F, G, H, I, J, K, L, M, N, O, P — full bredde.
- **Oppgavesjangre:** A, C, D, E, F, G, H, I, J, K, L, M, N, O, P.
- **Quiz: 16 · Flashcards: 0**

#### Kapittel 9.3: Skoleeksamen-simulering 2 — recovery- og kostnadstungt sett

- **id:** `tdt4145-9-3` · **number:** 9.3 · **estimatedMinutes:** 120 · **prerequisites:** `tdt4145-9-2` · **kapitteltype:** øvingseksamen
- **description:** Komplett kode-D-sett med tyngdepunkt på det auto-rettede maskineriet (ARIES, 2PL, kostnad, hashing, B+-tre) og fortsatt en papirbasert ER-oppgave — der C→A avgjøres.
- **Eksamensbelegg/miks:** Speiler et maskineritungt sett: 1 ER-modelleringsoppgave (A, papir) + **2–3 ARIES-oppgaver** inkl. full trefase (P) + 2 recovery-klassifiseringer (M) + 2 2PL/deadlock + 1 presedensgraf (N/O) + **4–5 kvantitative tallsvar** (H/I/J/K/L: B+-tre-konstruksjon på papir, extendible hashsplitt, blokkberegning, index-only-kostnad, ekstern flettesortering) + 1–2 normaliserings-/dekomponeringsoppgaver (F/G) + 1 SQL (D, outer join). Løsningsforslag som A-besvarelse med eksplisitt markering av topp- vs. midtsjiktuttelling (ARIES-faser bygd på hverandre, chase stringent, riktig REDO-regel, sidepekere).
- **Innholdskontrakt:** Dekker A, D, F, G, H, I, J, K, L, M, N, O, P — de to skoleeksamenssettene sammen dekker hele katalogen flere ganger; semesterprøve-settet (9.1) dekker Del 1–5-fronten separat.
- **Oppgavesjangre:** A, D, F, G, H, I, J, K, L, M, N, O, P.
- **Quiz: 16 · Flashcards: 0**

---

## 5. Summeringskontroll (quiz/flashcards) — AUTORITATIV

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 14 | 18 |
| 1 | 1.1–1.6 | 16+16+14+18+20+14 = **98** | 24+18+16+24+12+14 = **108** |
| 2 | 2.1–2.3 | 16+16+14 = **46** | 22+18+16 = **56** |
| 3 | 3.1–3.5 | 16+18+16+14+20 = **84** | 22+20+20+18+12 = **92** |
| 4 | 4.1–4.3 | 16+16+18 = **50** | 24+16+12 = **52** |
| 5 | 5.1–5.6 | 16+16+18+16+16+20 = **102** | 22+18+24+18+18+12 = **112** |
| 6 | 6.1–6.6 | 16+16+16+16+14+20 = **98** | 18+20+20+18+16+12 = **104** |
| 7 | 7.1–7.4 | 16+16+16+16 = **64** | 24+18+18+18 = **78** |
| 8 | 8.1–8.3 | 16+18+20 = **54** | 26+22+12 = **60** |
| 9 | 9.1–9.3 | 16+16+16 = **48** | 0+0+0 = **0** |
| **Sum** | **40 kap.** | **658 ≥ 500 ✓** | **680 (i 650–800) ✓** |

Kvotene er **minimum** per kapittel; forfatteren kan overskyte, aldri underskride.
**Flashcards sikter høyt (680) fordi faget er svært begrepsrikt** — SQL-klausuler,
normalformdefinisjoner, ARIES-termer (LSN/PageLSN/RecLSN/DPT/CLR/WAL/STEAL/NO-FORCE/
checkpoint), recovery-klasser, algebraoperatorer, ER-virkemidler og kostnadsformler
er alle pugge-materiale for en kode-D-eksamen uten oppslag. Tetteste flashcard-
kapitler er derfor ARIES-datastrukturene (8.1: 26), operatorene/virkemidlene
(1.1/1.4/4.1: 24) og ACID/politikkene (7.1: 24). Quiz vektes mot det auto-rettede
eksamensmaskineriet (kjøretall, klassifisering, «hvilken normalform», radtelling,
REDO-regel); drillkapitlene bærer mest quiz (18–20). Eksamenssimuleringene (9.1–9.3)
gir 0 flashcards (rene oppgavesett) men bidrar med quiz. Fordelingen speiler begge
frekvenstabellene: de fem perfekt-temaene (Del 1 ER/EER, Del 5 normalisering/
dekomponering, Del 8 ARIES, + SQL Del 3 / algebra Del 4) bærer mest.

---

## 6. Prøver og eksamenssimuleringer

### Kapittel-/temaprøver (4 per temadel 1–8 → 32 prøver)

Hver prøve er nyskrevne oppgaver i eksamens sjangre, med kort løsningsforslag og
poengfordeling. Prøvekapitler bygges som `tdt4145-<del>-prove` (chapterNumber
`<del>.P`) etter plattformmønsteret, eller som egne exercise-seksjoner i delens siste
kapittel. Prøvekvotene per del står i sluttblokken til hver del over (Del 1–8). Del 0
og Del 9 får ikke egne prøver (Del 9 **er** eksamenssimuleringene). Prøvene for Del
1–5 er semesterprøve-relevante; prøvene for Del 6–8 er kun slutteksamen.

### Eksamenssimuleringer (3 komplette sett — se kap. 9.1–9.3)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Semesterprøve-sim (9.1) | Tabell B — semesterprøven (30 %) | Kun Del 1–5: normalisering + SQL + modellering (tolk/tell) + algebra + dekomponering. Ingen H–P. |
| Skoleeksamen-sim 1 (9.2) | Typisk kode-D slutteksamen (2023 →) | Full bredde: 1 papir-ER + normalisering/SQL/algebra + kvantitative tallsvar + 2PL + recovery + ARIES. |
| Skoleeksamen-sim 2 (9.3) | Maskineritungt kode-D-sett | Tyngde på ARIES, 2PL, kostnad, hashing, B+-tre (papir) + 1 papir-ER + normalisering + SQL. |

Til sammen dekker de tre settene hele sjangerkatalogen A–P; semesterprøve-settet
isolerer Del 1–5-fronten slik den faktisk testes på semesterprøven.

---

## 7. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — den tredelte vurderingen (skoleeksamen 40 % +
   semesterprøve 30 % + prosjekt 30 %), de to eksamensslagene med hver sin temafront,
   de fire regimene, format-caveaten (2020–2022 ikke representativt), og at boka
   bygges mot kode D (2023 →) med ER + B+-tre på papir (fra kap. 0.1).
2. **De to prioriteringskartene** — Tabell A (slutteksamen) og Tabell B
   (semesterprøve) omgjort til tre lesenivåer: **perfekt** (ER/EER Del 1,
   normalisering/dekomponering Del 5, ARIES Del 8, SQL Del 3, algebra Del 4),
   **kunne** (kostnad/aksessvei/hashing Del 6, 2PL/recovery-egenskaper Del 7),
   **kjenne** (EER→skjema, DDL/DML, lagring/blokk, join-/sortkostnad, serialiserbarhet,
   «finn feil»). Merk tydelig hva som **kun** kan komme på slutteksamen (Del 6–8).
3. **Sjangerguiden** — de 16 oppgavetypene A–P med løsningsoppskriftene fra
   drillkapitlene (1.5, 1.6, 3.5, 4.3, 5.6, 6.6, 8.3) i kortform.
4. **Sensorreglene** — de fem metareglene (oppgi forutsetninger; struktur/begrunnelse
   foran detaljer; delvis uttelling med hovedpoeng først; vis metoden; robust sensur)
   + de sju kritiske fellene som skiller riktig fra galt: REDO-regelen, LEFT OUTER
   JOIN, chase framfor snitt, originalt normalform-eksempel, boolsk negasjon,
   trinær-vs-binær, sidepekere.
5. **Feilkatalogen** — de 14 typiske feilene (§5 i analysen) samlet, hver med
   henvisning til kapitlet som forebygger den.
6. **Notasjons- og formelark** — SQL-nøkkelordene, algebraoperatorene, ER/EER-
   virkemidlene, normalformdefinisjonene, tillukningsalgoritmen, de fire
   dekomponeringsegenskapene, kostnadsformlene (poster/blokk, nested-loop, ekstern
   flettesortering, blokkaksesser) og ARIES-reglene — puggeark for kode-D-eksamen.
7. **Studieløp** — anbefalt progresjon (semesterlangt + intensivvariant): Del 1
   (ER/EER — tyngst vektet) → Del 2 (oversettelse) → Del 3–4 (SQL/algebra) → Del 5
   (normalisering/dekomponering) → **semesterprøve-sim (9.1)** før semesterprøven →
   Del 6 (kostnad) → Del 7 (transaksjoner) → Del 8 (ARIES) → prøvene underveis → de to
   skoleeksamenssettene (9.2–9.3) de siste ukene under tidspress (120 min).

---

## 8. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `tdt4145` med alle 40 kapitler
   (id/number/title/description/estimatedMinutes/topics/competenceGoals/prerequisites/
   linkedChapterId) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra §2-tabellen
   (obligatorisk). **`number` er del-basert** («5.3», ALDRI lineær «23» — jf.
   JUS1111-lærdommen; prosareferanser i innholdet bruker samme form, «kap. 5.3»).
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–P, de to frekvenstabellene,
   semesterprøve-markeringen og sensorreglene resten refererer til.
3. **De semesterprøve-relevante delene i avhengighetsrekkefølge**: Del 1 (ER/EER) →
   Del 2 (relasjonsmodell/oversettelse; krever ER) → Del 3 (SQL; krever relasjonsmodell)
   → Del 4 (algebra; krever relasjonsmodell) → Del 5 (FD/normalisering/dekomponering;
   krever relasjonsmodell). Disse fem utgjør semesterprøve-fronten.
4. **De slutteksamen-eneste delene**: Del 6 (lagring/kostnad) → Del 7 (transaksjoner;
   forbereder ARIES) → Del 8 (ARIES; krever transaksjonsgrunnlaget).
5. **Del 9** (eksamenstreningen) til slutt — den gjenbruker alle sjangre; 9.1 kun
   Del 1–5, 9.2/9.3 full bredde.
6. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles; prøvene (§6) legges i respektive delers prøvekapittel/
   exercise-seksjoner.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
  (escape `"` i norske sitattegn og SQL-strenger; `\\` for LaTeX-kommandoer);
  `npm run build` grønn.
- [ ] **Notasjonskonsistens**: all ER-notasjon følger Elmasri/Navathe (`(min,max)`,
  dobbel ramme = svak, `d`/`o`, `⊍`); all SQL er standard-SQL; algebraoperatorene og
  designteori-symbolene er pensumets; engelsk fagterm kun i parentes ved første
  forekomst.
- [ ] **Semesterprøve-markering**: Del 1–5-kapitlene merker eksplisitt at temaet er
  semesterprøve-stoff; Del 6–8-kapitlene merker at temaet **kun** kommer på
  slutteksamen. Del 0 og studieguiden gjengir begge frekvenstabellene.
- [ ] **De sju sensorfellene eksplisitt**: (1) ARIES REDO per loggpost i stigende LSN
  med `PageLSN<LSN`, aldri per blokk/committed, faser bygd på hverandre (Del 8);
  (2) LEFT OUTER JOIN når rader uten treff kreves (3.2); (3) chase framfor snitt for
  tapsløshet (5.5); (4) originalt normalform-eksempel, ikke PostNr→PostSted (5.4);
  (5) boolsk negasjon $\lnot(A\wedge B)\equiv(\lnot A\vee\lnot B)$ (4.3); (6) trinær vs.
  to binære (1.2/1.5); (7) sidepekere på B+-tre-løvnivå + splitt før innsetting (6.2).
- [ ] **Kontrakter per kapittel**: hvert SQL-kapittel har `theorem` SQL-mønsterkontrakt;
  hvert algebrakapittel har operatorsignatur-kontrakt; hvert ARIES-kapittel har
  fasekontrakt; hvert normaliseringskapittel har tillukning/normalform/dekomponerings-
  kontrakt; hvert kostnadskapittel har formelkontrakt med variabelforklaring.
- [ ] **ER-diagram i ord**: hvert ER/EER-kapittel og hver modelleringsoppgave beskriver
  diagrammet i den faste prosamalen (entitetsklasser/nøkler/relasjoner med `(min,max)`/
  svake klasser/spesialiseringer), med valgfri ASCII-gjengivelse i `collapsible`.
- [ ] **Syntaks- og notasjonsliste per delkapittel**: hvert delkapittel som bruker
  SQL/algebra/ER/designteori-notasjon har `collapsible` «Syntaks- og notasjonsliste»
  rett etter Forkunnskaper, som forklarer ALLE nøkkelord, symboler og formler brukt i
  delkapitlet (per delkapittel, ikke arv fra tidligere).
- [ ] **Oppgi forutsetninger**: alle modellerings- og oversettelsesoppgaver (Del 1–2)
  har forutsetningsledd i løsningsforslaget; boka lærer eksplisitt at oppgitte
  antagelser legges til grunn.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra
  dette skjelettet), Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå),
  6–12 øvinger med `solution` + `hints`, repetisjons-`collapsible`; drillkapitler har
  løsningsoppskrift + sensor-kommentert case + 8–16 oppgaver.
- [ ] **Format-caveat**: Del 0 sier eksplisitt at 2020–2022 (kode A) ikke er
  representative; boka bygges mot kode D (2023 →) med ER/EER + B+-tre på papir
  (InsperaScan) og resten auto-rettet.
- [ ] **Quiz-sum ≥ 658 og flashcard-sum ≥ 680** per kvotetabellen (§5); quiz kalibrert
  som auto-rettet faktakontroll, `options[0]` = riktig svar; flashcards kalibrert som
  begrep ↔ presis definisjon/regel/syntaks.
- [ ] **Prøver**: 4 per temadel 1–8 (32 stk) + 3 eksamenssimuleringer (kap. 9.1–9.3);
  9.1 dekker kun Del 1–5 (semesterprøve), 9.2/9.3 hele katalogen A–P.
- [ ] **Opphavsrett**: ALLE oppgaver, tabeller, miniverdener, logger og tall
  nyskrevne — egne kontekster/tall/navn; nøkkelord, operatorer, normalformdefinisjoner
  og kostnadsformler er allmenn faglig notasjon, men ingen oppgavetekster/fasiter fra
  reelle sett gjengis; pensumlitteratur (Elmasri & Navathe) refereres (forfatter/verk/
  begrep), aldri siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
  (200 + innhold), jf. lærdommen om `getChapterMeta`.

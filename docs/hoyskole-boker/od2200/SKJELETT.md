# Bokskjelett: OD2200 Odontologistudiet 4. semester (UiO) — eksamensrettet lærebok

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


> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE eksamensarkivet —
> alt eksamensbelegg som trengs står i dette skjelettet, destillert fra
> `EKSAMENSANALYSE.md` (UiOs OD2200-arkiv 2023–2026: 15 filer over de TO blokkeksamenene
> i semesteret, alle sensorveiledninger lest oppgave for oppgave, rene oppgavesett
> gjennomgått for format og bildeavhengighet). Alle oppgaver, kasus, figurtekster,
> tallverdier og formuleringer i boka skal være NYSKREVNE (se §6). Anatomiske navn
> (norsk/latin), histologiske og patofysiologiske sammenhenger er standard, kanonisk
> fagstoff (Regezi, klassiske anatomi-/patologilærebøker) og er fritt å bruke.
>
> **Medisinsk/odontologisk presisjon er kritisk.** Normalverdier, tallfakta og latinske
> navn forfatteren er usikker på merkes `(verifiser)` for fagfellesjekk i fase 6. INGEN
> oppdiktede tall eller navn. Nivået er **grunnfag i patologi og kraniofacial biologi** —
> IKKE klinisk odontologi (de kliniske semestrene OD4200/OD5100/OD5200 holdes utenfor).
> Signaturen som skiller OD2200 fra en ren MED-patologibok er det gjennomgående
> spørsmålet **«hva betyr dette for tannbehandlingen?»** — det er et ufravikelig
> sensorkrav og skal gå igjen i hvert patologikapittel (se §2).
>
> **Bildeavhengighet: LAV — bekreftet.** Eksamen er ren fritekst-/kortsvarseksamen der
> studenten *selv* produserer beskrivelser og skjematiske tegninger. Boka trenger ikke
> reprodusere eksamensbilder; egne nytegnede/lisensierte illustrasjoner er ren støtte.

---

## 1. Bokens identitet

- **Kurs-id:** `od2200`
- **Tittel:** *OD2200 Odontologistudiet 4. semester*
- **Level:** `'Høyskole'`
- **Institusjon (navigasjon):** Universitetet i Oslo (UiO), Det odontologiske fakultet /
  Institutt for oral biologi. Visningsnavn i `institusjoner.ts`: «OD2200 Odontologistudiet
  4. semester».
- **Arketype:** **fakta/pugg-hybrid** — nærmeste forbilde er **MED1100** (samme
  «forklar mekanismen»-sjanger for patologi + faktatung anatomi-/histologipugg).
  Blokk 2-patologien låner celle-/organpatologi-strukturen og mekanisme-essaylogikken
  fra MED1100; Blokk 3-anatomien er en klassisk latinsk-terminologi-puggebok (NOKUT-AFB-
  lignende faktatetthet, men med prosessbeskrivelser). Begge premierer **mekanisme og
  begrunnelse**, ikke oppramsing. Ingen ren DNA-mal passer; strukturen er skreddersydd
  og dokumentert i §2.
- **Kapittelantall:** 34 (Del 0: 2 · Del 1–2 Patologi: 15 · Del 3–4 Kraniofacial: 12 ·
  Del 5 muntlig + eksamenstrening: 5)
- **Estimert totaltid:** ~2010 minutter (~33,5 timer) fordelt per kapittel under.
- **Quiz totalt:** **560** (krav ≥500) · **Flashcards totalt:** **742** (krav ≥500; analysen
  anbefaler 650–800 → sikter høyt fordi anatomi/histologi/patologi er ekstremt faktatungt).

**Pitch:** OD2200 er 4. semester (32 sp, integrert master) i profesjonsstudiet i
odontologi ved UiO og avlegges av *alle* nye odontologistudenter der — en stor, fornybar
årskull-målgruppe. Det avgjørende strukturvalget: semesteret avsluttes **ikke** med én
samlet eksamen, men med **TO separate blokkeksamener med helt ulikt fagområde og
svarlogikk** — pluss en **muntlig del med to stasjoner**. Boka bygges derfor som **to
nesten uavhengige delbøker** med hvert sitt faglige tyngdepunkt, med muntlig-forberedelse
og øvingseksamener på toppen:

- **BLOKK 2 – Patologi (skriftlig digital, 4 t):** generell og organpatologi. **Fast
  todelt arkitektur:** 3–4 **kliniske hovedoppgaver** (utviklende pasientkasus a, b, c…
  med oppgitt poengsum, ofte med dramatisk vending), + **én stor kortsvarsbolk** med
  ~20–28 løsrevne deloppgaver (1–3 pt hver). **Kortsvarene bærer over halve poengsummen.**
  Svar godtas på norsk/svensk/dansk. Kasus og kortsvar resirkuleres med små omskrivinger
  på tvers av sittinger. Signaturen: hver tilstand kobles til **hva den betyr for
  tannbehandlingen** (blødningsrisiko, infeksjonsprofylakse, medikamentinteraksjoner,
  munntørrhet).
- **BLOKK 3 – Kraniofacial anatomi/fysiologi (skriftlig, 4 t, kl. 09–13):** osteologi,
  muskler, hjernenerver, kar, tannutvikling, hardvevsstruktur, oral fysiologi. **Fast
  6–7-oppgavemal** stabil 2023–2025: (1) osteologi av én kranieknokkel, (2) muskelgruppe,
  (3) hjernenerve/arterie, (4) odontogenese/dentinogenese, (5) hardvevsdannelse/-struktur,
  (6) fibersystem i tannens støttevev, (7) oral fysiologi/refleksbue. **Ren fritekst** —
  kandidaten tegner selv skjematiske figurer. **Svært forutsigbar** → boka kan bygge nesten
  «garanterte» oppgavetyper.
- **MUNTLIG del (to stasjoner, maks 45 min):** tester samme pensum som det skriftlige,
  men muntlig — krever rask, strukturert framstilling. Egen forberedelsesdel (Del 5).

Boka er bygd baklengs fra tre ting: (1) gjengangerne som drilles til de sitter (i Blokk 2:
akutt hendelse i stolen, nekrose/trombose, inflammasjon, lever, lunge, diabetes, neoplasi,
paracetamol, frakturtilheling; i Blokk 3: osteologi, muskelmalen, hjernenervene, odontogenese,
emalje-/dentinstruktur, PDL-fibre, refleksbuene), (2) de to ulike svarlogikkene
(diagnose+mekanisme+**klinisk konsekvens for tannbehandling** vs. romlig forankret
strukturbeskrivelse + kronologisk prosessbeskrivelse), og (3) de faste sensorfellene i §5.

**Kalibreringsregel (ufravikelig):** OD2200 dekker grunnfaget patologi og kraniofacial
biologi. Klinisk odontologi (kavitetspreparering, endodonti, protetikk osv.) er IKKE
kjernestoff. Men den **kliniske koblingen til tannbehandling** (hva patologien betyr for
tannlegens håndtering) ER kjernestoff i Blokk 2 og skal med i hvert patologikapittel.

---

## 2. Makrostruktur

Rekkefølge: **Del 0 (eksamenskart for de to blokkene + muntlig) → Blokk 2-deler (Del 1–2,
patologi) → Blokk 3-deler (Del 3–4, kraniofacial) → Del 5 (muntlig-forberedelse +
øvingseksamener).** De to blokkene er hoveddel-blokker; hver har temadeler under, ordnet
etter frekvens/vekt (tyngst mest omfang), med prerequisites som peker bakover.

| Del | Blokk | Seksjonstittel | Kap. | Vekt/prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|---|
| 0 | meta | Eksamenskart: to blokker og en muntlig | 2 | perfekt (meta) | De to formatene, svarlogikkene og den kliniske tannbehandlingskoblingen må etableres FØR fagstoffet. |
| 1 | 2 | Generell patologi: celleskade, betennelse og sirkulasjon | 8 | perfekt | Blokk 2, kjernen. Nekrose/apoptose, inflammasjon, trombose/emboli, hjertesvikt, sjokk/akutt hendelse i stolen, frakturtilheling, neoplasi — «svært høy» gjenganger-score. |
| 2 | 2 | Organpatologi og den syke tannlegepasienten | 7 | perfekt | Blokk 2. Lever, lunge, nyre/SLE, diabetes, endokrint, blod/beinmarg, nevrologi, GI — organsykdom bundet til tannbehandling via pasientkasus. |
| 3 | 3 | Kraniofacial osteologi, muskler, nerver og kar | 6 | perfekt | Blokk 3, oppgave 1–3. Osteologi (fast oppg. 1), muskelmalen (fast oppg. 2), hjernenerver + a. facialis (oppg. 3) — «svært høy» score. |
| 4 | 3 | Tannutvikling, hardvev og oral fysiologi | 6 | perfekt | Blokk 3, oppgave 4–7. Odontogenese, dentinogenese/emaljedannelse, emalje-/dentinstruktur, PDL/gingivale fibre, refleksbuer — «svært høy» score. |
| 5 | meta | Muntlig-forberedelse og øvingseksamener | 5 | perfekt (meta) | 1 muntlig-stasjonsdrill + 2 sjanger-/feildrill (én per blokks svarlogikk) + 2 komplette øvingseksamener (én per skriftlig blokk). |

Rasjonale: fordi de to blokkene er separate eksamener med hvert sitt fagområde, dekkes
**begge fullt ut** — prioriteringen styrer *dybde og drillmengde*, ikke hva som er med.
Blokk 2 (bredere pensum, kasus-styrt) får 15 kapitler; Blokk 3 (smalere, men ekstremt
forutsigbart pensum) får 12 kapitler med tett faktadrill. Analysen anbefaler MED1100 som
primærforbilde for Blokk 2-patologien.

### Seksjonstitler (`sectionNames` i metadata — vises som «Kapittel N: <tittel>» på bokforsiden)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart: to blokker og en muntlig |
| 1 | Generell patologi: celleskade, betennelse og sirkulasjon |
| 2 | Organpatologi og den syke tannlegepasienten |
| 3 | Kraniofacial osteologi, muskler, nerver og kar |
| 4 | Tannutvikling, hardvev og oral fysiologi |
| 5 | Muntlig-forberedelse og øvingseksamener |

### Sjangerkoder per blokk (fra analysen §3 — brukes i «Eksamensbelegg» under)

**Blokk 2 – Patologi:** `B2-KASUS` utviklende pasientkasus (deloppgaver a, b, c… bygger på
hverandre; **diagnose + mekanisme + klinisk konsekvens for tannbehandling** kreves) ·
`B2-KORT` faktakortsvar (1–3 pt løsrevne spørsmål — «Nevn tre …», «Hva definerer …»,
«Forklar mekanismen …»; presist, avgrenset, ofte tallfestet antall momenter) · `B2-MEK`
patofysiologisk mekanisme-essay (nummerert årsakskjede i rett rekkefølge — hele veien fra
årsak til klinisk utfall) · `B2-KLIN` klinisk-vurderingsoppgave (**gradér alvorlighet** —
f.eks. eGFR 55 = lett vs. <15 = terminal — før du konkluderer om tannbehandling).

**Blokk 3 – Kraniofacial:** `B3-OST` systematisk osteologibeskrivelse (knokkel →
hovedinndeling → strukturer → **artikulasjoner**, romlig forankret) · `B3-MUS` muskel etter
**femdelt mal** (utspring, feste, forløp, funksjon, innervasjon) · `B3-NERV` hjernenerve/
arterie (grener, forløp, innervasjon, **fiberkomponenter**) · `B3-PROS` prosessbeskrivelse
(odontogenese/hardvevsdannelse som kronologisk stadierekke med celletyper og signaler) ·
`B3-STRUK` mikrostrukturbeskrivelse (emalje/dentin, punktliste-fasit) · `B3-REFL`
refleksbue-/fysiologioppgave (komplett nervebane: reseptor → afferent → CNS-senter →
efferent → målorgan, med korrekte hjernenerver).

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

**Blokk 2:** `E1` upresis synkopedefinisjon («besvimelse») eller utelate ett av de to
nøkkelelementene (tidsbegrenset *og* nedsatt hjernesirkulasjon) · `E2` forveksle
nekrosetyper eller ikke koble dem til rett organ (koagulasjon: hjerte/nyre; flytende:
hjerne; ostet: TB) · `E3` blande arteriell («hvit», trombocytt-dominert) og venøs («rød»,
fibrin/erytrocytt-dominert) trombe, eller feil embolidestinasjon · `E4` ikke gradere
alvorlighet (svare at nyresvikt forverrer periodontittprognose uten å se at eGFR 55 er for
lett) · `E5` hoppe over mekanismen i patofysiologikjeder (svare «lungeødem» uten
hydrostatisk trykk/RAAS) · `E6` uspesifikk paracetamol-mekanisme (glemme NAPQI via CYP2E1
og glutation-uttømming) · `E7` glemme tannbehandlingskoblingen (svare rent patologisk uten
å si hva det betyr for blødning/infeksjon/medikament/munntørrhet) · `E8` honorere
«hypoglykemi» hos type 2-pasient uten insulin, uten eksplisitt forklaring.

**Blokk 3:** `E9` ren navneoppramsing uten å plassere strukturene romlig («uten å si hvor
de er») · `E10` feil hjernenerver i refleksbuer (blande n. V, VII, IX i smaks-/spyttbaner;
glemme både sympatisk og parasympatisk innervasjon av spyttkjertler) · `E11` blande
odontogenese-stadiene (knopp/hette/klokke) eller forveksle indre/ytre emaljeepitel,
ameloblast vs. odontoblast · `E12` glemme den femdelte muskelmalen (utelate innervasjon
eller forløp) · `E13` blande emalje- og dentinstrukturer (Retzius vs. von Ebner; prismer
vs. tubuli; Hunter-Schreger vs. perikymata) · `E14` feil PDL-fibergruppe eller feil
funksjon · `E15` latinsk upresisjon (bøyning, sinistra/dextra, feil foramen/kanal).

### Sensor-kredittregler (fra analysen §4 — etableres i Del 0.2, refereres i hvert kapittel)

1. **Forståelse foran oppramsing.** Å ramse opp navn «uten å si hvor de er» er *ikke* en
   god besvarelse (Blokk 3). Kandidaten skal vise at strukturene henger sammen.
2. **Mekanisme og begrunnelse premieres.** «Begrunn svaret», «gi en patofysiologisk
   forklaring», «beskriv så detaljert du kan». Poeng gis for den forklarte kjeden, ikke
   bare konklusjonen (hele veien fra SLE-immunkomplekser → komplementaktivering →
   nefrittisk urinbilde).
3. **Presise definisjoner belønnes trinnvis.** Synkope: full uttelling krever begge
   nøkkelelementene (tidsbegrenset *og* nedsatt hjernesirkulasjon); halv for ett; null for
   upresist («besvimelse»).
4. **Antall momenter styrer poeng.** «Nevn minst 3 …», «begrens deg til tre …» — lever
   riktig antall; ekstra korrekte momenter honoreres opp til maks.
5. **Klinisk vurderingsevne testes (Blokk 2-signaturen).** Gradér alvorlighet (eGFR-nivå,
   INR-nivå) FØR du svarer på hva det betyr for tannbehandlingen. Sensor vil se at
   kandidaten kan gradere og koble til klinisk håndtering.
6. **Overlapp/nyanse godtas.** Der biologien er glidende (apoptose vs. nekrose ved mild
   hypoksi; nefrittisk → nefrotisk overgang) godtas en argumentert besvarelse.
7. **Femdelt muskelmal (Blokk 3):** utspring, feste, forløp, funksjon, innervasjon — alle
   fem forventes for full uttelling.
8. **Den kliniske tannbehandlingskoblingen (Blokk 2, gjennomgående):** hver patologisk
   tilstand skal knyttes til orale manifestasjoner og tannlegens praktiske håndtering
   (blødningsrisiko, infeksjonsprofylakse, medikamentinteraksjoner, munntørrhet/karies).
   Dette er OD2200s signatur og et eksplisitt sensorkrav.

### Arketypetilpasning (dokumenterte valg og avvik fra forbildet MED1100)

1. **To parallelle delbøker, ikke én bok (hovedavvik).** Fordi de to blokkene har helt
   ulikt fagområde og svarlogikk og vurderes hver for seg, er hoveddelene organisert PER
   BLOKK. Hver blokk har egen drilllogikk og egen øvingseksamen i sitt eget format (Del 5).
2. **Ingen regnedel.** I motsetning til MED1100 (statistikk 40 %) har OD2200 ingen
   kvantitativ del — begge blokkene er ren fritekst. Boka har derfor INGEN theorem-
   regneprosedyrer; tyngdepunktet er mekanismekjeder (Blokk 2) og strukturbeskrivelse/
   prosessbeskrivelse (Blokk 3).
3. **«Symbol- og formelliste» → «Nøkkelfakta- og terminologiliste» (per kapittel).**
   README-kravet omtolkes (faget er nesten formelfritt): hvert kapittel får en
   `collapsible` **«Nøkkelfakta- og terminologiliste»** rett etter Forkunnskaper. For
   patologikapitler = definisjoner + mekanismekjedene + **tannbehandlingskoblingen** i
   kort form. For anatomi-/histologikapitler = latinske kjernenavn (latin↔norsk), femdelte
   muskelmaler og stadierekker som må sitte utenat.
4. **Todelt drill.** Quiz = faktapresisjon og begrepsgjenkjenning; flashcards = fakta/
   latin/mekanisme/stadier utenat (faget er ekstremt faktatungt → HØY flashcard-tetthet,
   analysens 650–800-anbefaling); `example`/`exercise` = pasientkasus-momentlister
   (Blokk 2) og strukturbeskrivelse-/prosessmomenter (Blokk 3).
5. **Eksamensvinkel PER BLOKK.** Fordi et tema kan opptre i begge blokker (f.eks. spytt
   både som patologi-munntørrhet i Blokk 2 og spyttrefleks i Blokk 3), sier hver `tip`
   **Eksamensvinkel** eksplisitt hvilken blokk kapitlet trener, med hvilken form/frekvens
   og hva sensor ser etter i akkurat den blokken.
6. **Ingen oppdiktede verdier.** Normalverdier (blod-pH, eGFR-grenser, INR-mål), latinske
   navn og histologiske detaljer forankres i standard pensum; usikre detaljer merkes
   `(verifiser)`. Alle kasus og kortsvar har NYSKREVNE detaljer (opphavsrett, §6).

### Kapittel-DNA (temakapittel — obligatorisk blokk-rekkefølge)

1. `tip` **Eksamensvinkel** — hvilken blokk, form (B2/B3-sjangre), frekvens/score,
   retteform, og hva sensor ser etter (inkl. tannbehandlingskoblingen for Blokk 2).
   Fylles fra Eksamensbelegg under — forfatteren finner IKKE på frekvenstall.
2. `text` **Forkunnskaper** — kapitler i boka det bygger på + kryssbok-lenker (README-
   leserkrav; lenk kun til kapitler som finnes), etterfulgt av `collapsible` **Nøkkelfakta-
   og terminologiliste** (latinske navn + mekanismekjeder + tannbehandlingskobling for
   patologi; latin↔norsk + femdelte maler + stadierekker for anatomi — per kapittel).
3. `text` **Oversikt** — kort (maks 2–3 avsnitt): hva temaet er og hvorfor det testes.
4. `definition` **Kjernefakta** — begreper, struktur, normalverdier, latinske navn i
   EMNETS terminologi. **Toppnivå med `title` — dette er flashcard-kilden.**
5. `text` **Mekanismekjeder** (patologi) / **Struktur- og prosessbeskrivelse** (anatomi) —
   nummerert trinnvis, rekkefølge kritisk. For patologi ALLTID med et avsluttende
   **«Betydning for tannbehandlingen»**-ledd.
6. `example` × 2–4 — første enkelt, siste på EKSAMENSNIVÅ modellert på reell sjanger.
   Blokk 2-kasus skrives som full-pott-momentliste (diagnose + mekanisme + klinisk
   konsekvens, delpoeng synlige); Blokk 3-oppgave som romlig forankret strukturbeskrivelse
   / kronologisk prosessbeskrivelse.
7. `warning` **Typiske feil** — feilkodene (E1–E15) som gjelder temaet.
8. `exercise` × 6–12 — stigende, i kapitlets blokk-sjangre, alle med `solution` + `hints`.
   Hver oppgave merket med sjangerkode + blokk. For Blokk 2: minst én B2-KASUS eller B2-KLIN
   med tannbehandlingskobling.
9. `collapsible` **Repetisjon** — 4–6 korte kontrollpunkter fra kapitlet og forutgående.

Drill-, muntlig- og øvingseksamenskapitlene (Del 5) har egne oppsett — se §3/§4.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = blokk + form/frekvens (gjenganger-score) +
> sjangerkoder + prioritetsklasse. **Faktakontrakt** = definisjoner/struktur/normalverdier/
> latin som SKAL med. **Mekanismekjeder** = årsakskjeder rekonstruert trinnvis (patologi,
> alltid med tannbehandlingsledd). **Struktur-/prosessbeskrivelse** = det Blokk 3-svaret
> skal levere. **Kvote** = quiz/flashcards.

### Del 0 — Eksamenskart: to blokker og en muntlig

#### Kapittel 0.1: To blokker, én muntlig — tre eksamensformer
**id:** `od2200-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Hvorfor 4. semester avsluttes med to separate blokkeksamener (Patologi og
  Kraniofacial) med helt ulikt fagområde, pluss en muntlig del med to stasjoner — hva hver
  tester, hvordan de er bygd opp, og hvordan boka brukes som to parallelle delbøker.
- **Eksamensbelegg:** Metakapittel (hele arkivet 2023–2026). Skal formidle: (a) **to
  blokker** med forskjellig fagområde og svarlogikk; (b) **formene**: Blokk 2 = skriftlig
  digital 4 t, todelt (3–4 pasientkasus + én stor kortsvarsbolk ~20–28 deloppgaver, poeng
  oppgitt per deloppgave, **kortsvarene bærer >halve poengsummen**); Blokk 3 = skriftlig
  4 t (kl. 09–13), 6–7 nummererte fagoppgaver ren fritekst i fast rekkefølge; (c) **muntlig
  del** med to stasjoner (maks 45 min), samme pensum; (d) svar godtas på norsk/svensk/dansk;
  (e) gjenbruk: kasus og kortsvar resirkuleres med små omskrivinger. Prioritet: perfekt (meta).
- **Faktakontrakt:** blokk-oversiktstabellen (tema/form/tid/svartype/struktur); Blokk 3s
  faste 6–7-oppgavemal (osteologi → muskler → nerve/kar → odontogenese → hardvev → fibersystem
  → fysiologi); kart til Del 1–4 (hvilke temaer ligger hvor).
- **Struktur-/prosessbeskrivelse:** ingen (kartkapittel).
- **Modelloppgaver:** «Slik ser en oppgave ut i hver blokk» — ett nyskrevet minieksempel per
  blokk (en B2-KASUS + B2-KORT; en B3-OST + B3-REFL) med hvordan poeng høstes.
- **Typiske feil:** tro at man kan slippe unna med oppramsing (Blokk 3); glemme
  tannbehandlingskoblingen (Blokk 2); undervurdere kortsvarsbolkens poengvekt.
- **Kvote:** 10 quiz / 8 flashcards.

#### Kapittel 0.2: Eksamensstrategi per blokk — og tannbehandlingskoblingen
**id:** `od2200-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** `od2200-0-1`

- **Kapitteltype:** eksamensteknikk (strateginote).
- **Description:** Hvordan man skårer i hver form — diagnose+mekanisme+**klinisk konsekvens
  for tannbehandling** (Blokk 2), romlig forankret strukturbeskrivelse og femdelt muskelmal
  (Blokk 3) — og de åtte sensor-kredittreglene, med tannbehandlingskoblingen som egen,
  uthevet strateginote.
- **Eksamensbelegg:** Destillat av sensorkravene (analysen §4), stabile 2023→. Prioritet:
  perfekt (meta). Skal operasjonalisere de åtte sensor-kredittreglene i §2, med **den
  kliniske tannbehandlingskoblingen som egen strateginote**: hver patologisk tilstand skal
  ende i «hva betyr dette for tannbehandlingen?» (blødning/infeksjon/medikament/munntørrhet),
  og **klinisk vurdering krever gradering av alvorlighet** før konklusjon.
- **Faktakontrakt:** de åtte kredittreglene; den femdelte muskelmalen; den trinnvise
  synkopedefinisjon-poengregelen som mønster på presis definisjon; «antall momenter styrer
  poeng»-regelen; kravet om nummerert mekanismekjede i rett rekkefølge.
- **Modelloppgaver:** samme patologispørsmål besvart på to nivåer (ren patologi vs. patologi
  + tannbehandlingskobling) med margnotat om hvor poengene faller; en Blokk 3-strukturoppgave
  vist «romlig forankret» vs. «ren oppramsing» (E9-vaksine).
- **Typiske feil:** `E7` (glemme tannbehandlingskoblingen), `E4` (ikke gradere), `E9` (ren
  oppramsing), `E1` (upresis definisjon).
- **Kvote:** 12 quiz / 10 flashcards.

### Del 1 — Generell patologi: celleskade, betennelse og sirkulasjon (BLOKK 2)

#### Kapittel 1.1: Celleskade, nekrose og apoptose
**id:** `od2200-1-1` · **number:** 1.1 · **estimatedMinutes:** 60 · **prerequisites:** `od2200-0-2`

- **Kapitteltype:** tema (blokk 2).
- **Description:** Reversibel vs. irreversibel celleskade, apoptose vs. nekrose, og de fem
  nekrosetypene med hvilket organ/hvilken sykdom de hører til — en «svært høy» gjenganger
  både som kortsvar og deloppgave.
- **Eksamensbelegg:** Blokk 2, generell patologi. **Nekrose vs. apoptose + nekrosetyper
  svært høy score** (både B2-KORT og B2-KASUS-deloppgave). Form: B2-KORT, B2-MEK. Prioritet:
  perfekt.
- **Faktakontrakt:** reversibel (cellehevelse, fettforandring) vs. irreversibel skade;
  **apoptose** (programmert, ATP-krevende, ingen betennelse, apoptoselegemer) vs. **nekrose**
  (passiv, membranbrudd, betennelse); de fem nekrosetypene: **koagulasjonsnekrose** (hjerte,
  nyre — infarkt), **kolliquasjons-/flytende nekrose** (hjerne — infarkt), **ostet/kaseøs
  nekrose** (tuberkulose), **fettnekrose** (pankreatitt), **fibrinoid nekrose** (karvegg,
  vaskulitt); gangren (koagulasjon + råtnebakterier). Overgangen apoptose↔nekrose ved mild
  hypoksi godtas argumentert.
- **Mekanismekjeder:** (1) hypoksisk celleskade (O₂-svikt → ATP-fall → Na/K-pumpesvikt →
  cellehevelse → [reversibelt] → Ca²⁺-innstrømming → membranskade → nekrose [irreversibelt]);
  (2) apoptose i grove trekk (indre/ytre vei → caspaser → apoptoselegemer, ingen betennelse).
  **Betydning for tannbehandlingen:** nekrotisk pulpa/apikal patologi krever endodontisk
  vurdering; koble celledød til vevsutfall i munnhulen.
- **Struktur-/prosessbeskrivelse:** ikke aktuelt (patologikapittel).
- **Typiske feil:** `E2` (forveksle nekrosetyper / feil organ), blande apoptose/nekrose
  (betennelse eller ei), `E5` (hoppe over mekanismen).
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 1.2: Akutt og kronisk inflammasjon
**id:** `od2200-1-2` · **number:** 1.2 · **estimatedMinutes:** 60 · **prerequisites:** `od2200-1-1`

- **Kapitteltype:** tema (blokk 2).
- **Description:** De fem kardinaltegnene med mekanisme, eksudattypene, utfall av akutt
  betennelse, og kronisk/granulomatøs betennelse — grunnleggende, forventes forklart
  mekanistisk.
- **Eksamensbelegg:** Blokk 2. **Inflammasjon høy score** (kliniske kardinaltegn + mekanisme;
  eksudattyper; utfall; kronisk/granulomatøs). Form: B2-KORT, B2-MEK. Prioritet: perfekt.
- **Faktakontrakt:** kardinaltegn **rubor/tumor/calor/dolor/functio laesa** med vaskulær/
  cellulær mekanisme; vaskulære endringer (vasodilatasjon, økt permeabilitet); eksudattyper
  **serøst/fibrinøst/purulent (suppurativt)**; kjemiske mediatorer (histamin, prostaglandiner,
  cytokiner grovt); nøytrofil-rekruttering (margination → rolling → adhesjon → diapedese →
  kjemotakse); utfall (resolusjon, arrdannelse, abscess, kronisk); **kronisk betennelse**
  (makrofager, lymfocytter, plasmaceller); **granulomatøs betennelse** (epiteloidceller,
  kjempeceller — TB, fremmedlegeme); fremmedlegemereaksjon.
- **Mekanismekjeder:** (1) de fem kardinaltegnenes vaskulære grunnlag; (2) nøytrofil-
  rekrutteringskaskaden i rekkefølge. **Betydning for tannbehandlingen:** gingivitt/
  periodontitt som lokal inflammatorisk prosess; abscess og drenasje; kobling til orale
  betennelsestilstander.
- **Typiske feil:** `E5` (hoppe over mekanismen), blande eksudattypene, forveksle akutt/
  kronisk celleprofil.
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 1.3: Vevstilheling og frakturtilheling
**id:** `od2200-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `od2200-1-2`

- **Kapitteltype:** tema (blokk 2).
- **Description:** Sårtilheling (primær/sekundær intensjon, granulasjonsvev), og de
  histologiske fasene i frakturtilheling med faktorene som forstyrrer den — fast både som
  hoved- og kortsvarsoppgave.
- **Eksamensbelegg:** Blokk 2. **Frakturtilheling høy score** (histologiske faser +
  forstyrrende faktorer). Form: B2-KORT, B2-MEK, B2-KASUS-deloppgave. Prioritet: perfekt.
- **Faktakontrakt:** sårtilheling primær vs. sekundær intensjon; **granulasjonsvev**
  (fibroblaster, nye kar, kollagen); regenerasjon vs. arrdannelse; frakturtilhelingens faser:
  **hematom → inflammasjon → bløt callus (brusk/bindevev) → hard callus (benvev) →
  remodellering**; forstyrrende faktorer (dårlig blodforsyning, infeksjon, bevegelse/
  instabilitet, diabetes, røyking, kortikosteroider, ernæring). `(verifiser)` fasetidsangivelser.
- **Mekanismekjeder:** (1) frakturtilhelingens fem faser i rekkefølge; (2) hvorfor diabetes/
  røyking forsinker tilheling (mikroangiopati/hypoksi). **Betydning for tannbehandlingen:**
  ekstraksjonssåret og tørr alveol (alveolitt); tilhelingssvikt hos diabetikere/røykere;
  bentilheling ved implantater (kort nevnt).
- **Typiske feil:** feil rekkefølge på callusfasene, glemme forstyrrende faktorer,
  `E7` (glemme tannbehandlingskoblingen).
- **Kvote:** 14 quiz / 20 flashcards.

#### Kapittel 1.4: Trombose, emboli og infarkt
**id:** `od2200-1-4` · **number:** 1.4 · **estimatedMinutes:** 60 · **prerequisites:** `od2200-1-1`

- **Kapitteltype:** tema (blokk 2).
- **Description:** Virchows triade, arteriell vs. venøs trombe, embolityper og hvor embolier
  havner, og infarkt — en «svært høy» gjenganger koblet til hypertensjon, atrieflimmer og
  hjerneinfarkt.
- **Eksamensbelegg:** Blokk 2. **Trombose/emboli svært høy score** (Virchows triade,
  «hvit» vs. «rød» trombe, tromboemboli, embolidestinasjon). Kobles til atrieflimmer-kasus.
  Form: B2-KORT, B2-MEK, B2-KASUS. Prioritet: perfekt.
- **Faktakontrakt:** **Virchows triade** (endotelskade, endret blodstrøm/stase, hyperkoagulabilitet);
  **arteriell trombe** («hvit», trombocytt-dominert, ved høyt trykk/aterosklerose) vs.
  **venøs trombe** («rød», fibrin/erytrocytt-dominert, ved stase); embolityper (tromboembolus,
  fettembolus, luftembolus, amnionembolus); **embolidestinasjon** (venøs → lunge = lungeemboli;
  arteriell/hjerte → hjerne, underekstremiteter, tarm, nyre — venstre atrium ved atrieflimmer);
  **infarkt** (rødt vs. hvitt, transmuralt); aterosklerose grovt (skumceller, plakk).
- **Mekanismekjeder:** (1) atrieflimmer → stase i venstre atrium → trombe → arteriell emboli
  → hjerneinfarkt; (2) DVT → lungeemboli. **Betydning for tannbehandlingen:** pasienter på
  antikoagulantia (warfarin/DOAK) — blødningsrisiko ved ekstraksjon, INR-vurdering (kobles
  til kap. 2.1).
- **Typiske feil:** `E3` (blande arteriell/venøs trombe eller feil embolidestinasjon), glemme
  ett ledd i Virchows triade.
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 1.5: Hjertesvikt, kretsløp og sirkulasjonssvikt
**id:** `od2200-1-5` · **number:** 1.5 · **estimatedMinutes:** 55 · **prerequisites:** `od2200-1-4`

- **Kapitteltype:** tema (blokk 2).
- **Description:** Venstre- vs. høyresidig hjertesvikt, lungeødem-mekanismen med
  hjertesviktceller, hypertensjon og hjertets ledningssystem (SA/AV-knute, atrieflimmer) —
  patofysiologiske kjeder sensor krever forklart.
- **Eksamensbelegg:** Blokk 2. **Hjertesvikt/lungeødem høy score** (patofysiologisk kjede
  kreves); hypertensjon/atrieflimmer/ledningssystem. Form: B2-KORT, B2-MEK, B2-KASUS.
  Prioritet: perfekt.
- **Faktakontrakt:** **venstresidig svikt** → lungestuvning → dyspné/lungeødem;
  **høyresidig svikt** → systemisk stuvning (ødem, halsvenestuvning, hepatomegali);
  **hjertesviktceller** = hemosiderin-ladede makrofager i lunge; **cor pulmonale**
  (høyresvikt sekundært til lungesykdom); hypertensjon (primær/sekundær, endeorgan-skade);
  **ledningssystemet** (SA-knute → AV-knute → His → Purkinje); atrieflimmer, sinusarytmi;
  lungeødem-mekanisme (økt hydrostatisk trykk / RAAS-aktivering).
- **Mekanismekjeder:** (1) venstresvikt → økt lungekapillærtrykk → transudat → lungeødem →
  dyspné; (2) RAAS-aktivering ved svikt. **Betydning for tannbehandlingen:** ortostatisk
  håndtering (ikke legge svikt-pasient helt flatt), stress-/adrenalinhensyn, samspill med
  synkope-håndtering (kap. 1.6).
- **Typiske feil:** `E5` (svare «lungeødem» uten hydrostatisk trykk/RAAS), blande venstre-/
  høyresidig svikt.
- **Kvote:** 14 quiz / 20 flashcards.

#### Kapittel 1.6: Akutt hendelse i tannlegestolen — synkope, sjokk og ABC
**id:** `od2200-1-6` · **number:** 1.6 · **estimatedMinutes:** 65 · **prerequisites:** `od2200-1-5`

- **Kapitteltype:** tema (blokk 2, høyest prioritet).
- **Description:** Synkope (med den presise definisjonen sensor krever), sjokktyper,
  anafylaksi, hjertestans og ABC/HLR — det aller hyppigste hovedoppgave-motivet i Blokk 2,
  med presise poengregler.
- **Eksamensbelegg:** Blokk 2. **Akutt hendelse i tannlegestolen svært høy score** (fast
  hovedoppgave-motiv; synkope-definisjonen med presis poengregel gjentas). Form: B2-KASUS,
  B2-KORT, B2-KLIN. Prioritet: perfekt (den mest sentrale i Del 1).
- **Faktakontrakt:** **synkope** = *tidsbegrenset* bevissthetstap pga. *nedsatt
  hjernesirkulasjon* (begge nøkkelelementer kreves for full uttelling; upresist
  «besvimelse» = 0); synkopetyper (**vasovagal**, ortostatisk, kardiell); **sjokk**
  (hypovolemisk, kardiogent, distributivt: septisk/anafylaktisk/nevrogent) med felles
  ende: utilstrekkelig vevsperfusjon; **anafylaksi** (IgE, mastcelledegranulering, adrenalin
  er førstevalg); **ABC** (airway/breathing/circulation) og HLR-prinsipp; epilepsi/kramper
  kort. `(verifiser)` doser (f.eks. adrenalin ved anafylaksi).
- **Mekanismekjeder:** (1) vasovagal synkope (angst/smerte → parasympatikus ↑/vasodilatasjon
  → BT-fall → cerebral hypoperfusjon → synkope); (2) anafylaksi (allergen → mastceller →
  histamin → vasodilatasjon/bronkospasme/ødem). **Betydning for tannbehandlingen:** dette
  ER tannbehandlingssituasjonen — legg pasient flatt med hevede ben ved synkope, håndter
  tannlegeskrekk, gjenkjenn anafylaksi vs. synkope.
- **Typiske feil:** `E1` (upresis synkopedefinisjon / mangle ett nøkkelelement), blande
  sjokktyper, glemme ABC-prioritering.
- **Kvote:** 16 quiz / 24 flashcards.

#### Kapittel 1.7: Neoplasi — prinsipper og malign histologi
**id:** `od2200-1-7` · **number:** 1.7 · **estimatedMinutes:** 60 · **prerequisites:** `od2200-1-1`

- **Kapitteltype:** tema (blokk 2).
- **Description:** Benign vs. malign, kjennetegn på malignitet (pleomorfi, invasjon,
  metastase), tumorstadium/prognose, darwinistisk seleksjon og melanom ABCDE — både prinsipp
  og eksempler.
- **Eksamensbelegg:** Blokk 2. **Neoplasi middels–høy score** (malign histologi,
  tumorstadium/prognose, darwinistisk seleksjon, metastasemønster, melanom ABCDE). Form:
  B2-KORT, B2-MEK, B2-KASUS. Prioritet: perfekt.
- **Faktakontrakt:** benign (avgrenset, langsom, ingen metastase) vs. **malign** (invasiv,
  metastaserer, rask); malignitetskjennetegn (**pleomorfi**, økt kjerne/cytoplasma-ratio,
  mange/atypiske mitoser, invasjon, tap av differensiering); **metastasevei** (lymfogen,
  hematogen, sådd); TNM/tumorstadium og prognose; **darwinistisk seleksjon** av kloner,
  driver- vs. passasjermutasjon, TP53/RAS grovt; karsinom vs. sarkom vs. leukemi/lymfom;
  **melanom ABCDE** (Asymmetri, Border, Colour, Diameter, Evolusjon); karsinogenese grovt.
- **Mekanismekjeder:** (1) metastaseringskaskaden (lokal invasjon → intravasasjon →
  sirkulasjon → ekstravasasjon → kolonisering); (2) klonal evolusjon. **Betydning for
  tannbehandlingen:** oral cancer (plateepitelkarsinom), premaligne lesjoner (leukoplaki),
  cellegift/stråleeffekter i munnhulen (mukositt, munntørrhet), henvisning ved mistenkelig lesjon.
- **Typiske feil:** blande benign/malign kjennetegn, feil metastasevei, glemme
  tannbehandlingskoblingen (`E7`).
- **Kvote:** 14 quiz / 22 flashcards.

#### Kapittel 1.8: Del 1-prøvebank — generell patologi (drill)
**id:** `od2200-1-8` · **number:** 1.8 · **estimatedMinutes:** 45 · **prerequisites:** `od2200-1-7`

- **Kapitteltype:** sjangerdrill (blokk 2, generell patologi).
- **Description:** Driller kortsvar- og mekanismekjede-sjangeren for hele Del 1 —
  nekrosetyper, inflammasjonskaskaden, tilheling, trombose/emboli, hjertesvikt, akutt
  hendelse og neoplasi — alltid med tannbehandlingskoblingen.
- **Eksamensbelegg:** Blokk 2, Del 1-kjernen (svært høy/høy score). Form: B2-KORT, B2-MEK,
  B2-KASUS. Prioritet: perfekt (meta for Del 1).
- **Innhold:** `text` **Kortsvar- og mekanismemetoden** (presist, avgrenset, riktig antall
  momenter, nummerert kjede i rett rekkefølge, avslutt med tannbehandlingskobling); `example`
  full-pott-momentlister for 3–4 tunge kjeder (nekrosetyper, Virchows triade → emboli,
  synkope, frakturtilheling) med delpoeng synlig; `exercise` × 8–10 (B2-KORT/B2-MEK/B2-KASUS
  — skriv kortsvaret / mekanismekjeden / kasus-deloppgaven selv).
- **Typiske feil:** E1–E7 speiles i fasitkommentarene; E7 (tannbehandlingskoblingen) uthevet.
- **Kvote:** 16 quiz / 12 flashcards.

### Del 2 — Organpatologi og den syke tannlegepasienten (BLOKK 2)

#### Kapittel 2.1: Leverpatologi og blødningsrisiko
**id:** `od2200-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `od2200-1-4`

- **Kapitteltype:** tema (blokk 2).
- **Description:** Hepatitt, cirrhose med portal hypertensjon og øsofagusvaricer, ikterus/
  bilirubin, NAFLD/NASH, og leverfunksjonsprøver (INR) — koblet direkte til blødningsrisiko
  ved tannbehandling.
- **Eksamensbelegg:** Blokk 2. **Leverpatologi høy score** (øsofagusvaricer og ikterus går
  ordrett igjen). Form: B2-KORT, B2-MEK, B2-KASUS. Prioritet: perfekt.
- **Faktakontrakt:** hepatitt (viral A/B/C grovt, akutt/kronisk); **levercirrhose** (fibrose,
  regenerative knuter) → **portal hypertensjon** → **øsofagusvaricer/caput medusae/splenomegali**;
  **ikterus/gulsott** (prehepatisk/hepatisk/posthepatisk; bilirubin, sterkobilin/urobilinogen);
  **NAFLD/NASH** (ikke-alkoholisk steatohepatitt); **leverfunksjonsprøver** (albumin, INR/
  koagulasjonsfaktorer, ASAT/ALAT, bilirubin); leverens rolle i koagulasjon.
- **Mekanismekjeder:** (1) cirrhose → portal hypertensjon → øsofagusvaricer (blødningsfare);
  (2) leversvikt → redusert koagulasjonsfaktorsyntese → forlenget INR. **Betydning for
  tannbehandlingen:** økt **blødningsrisiko** ved ekstraksjon (nedsatt koagulasjon), redusert
  legemiddelmetabolisme (forsiktighet med paracetamol/LA-doser), smitteforholdsregler ved
  viral hepatitt.
- **Typiske feil:** blande prehepatisk/posthepatisk ikterus, glemme INR-blødningskoblingen
  (`E7`), `E5` (hoppe over mekanismen for varicer).
- **Kvote:** 14 quiz / 22 flashcards.

#### Kapittel 2.2: Paracetamol-toksisitet og lungepatologi
**id:** `od2200-2-2` · **number:** 2.2 · **estimatedMinutes:** 60 · **prerequisites:** `od2200-2-1`

- **Kapitteltype:** tema (blokk 2).
- **Description:** Paracetamol-toksisitet (CYP2E1 → NAPQI → glutation) — et nesten fast
  kortsvar direkte relevant for tannlegens smertestillende-forskrivning — og lungesykdom
  (KOLS/emfysem, respirasjonssvikt, pneumoni).
- **Eksamensbelegg:** Blokk 2. **Paracetamol-toksisitet høy score** (nesten fast kortsvar);
  **lungesykdom høy score** (bredt dekket, mange faste kortsvar). Form: B2-KORT, B2-MEK.
  Prioritet: perfekt.
- **Faktakontrakt:** **paracetamol-toksisitet** — normalt konjugeres paracetamol; ved overdose
  metaboliserer **CYP2E1** til toksisk **NAPQI** som normalt nøytraliseres av **glutation**;
  glutation-uttømming → levercelledød; **alkohol induserer CYP2E1** → forverring; antidot
  N-acetylcystein; **KOLS** (emfysem = destruerte alveoler/tap av elastisk recoil; kronisk
  bronkitt = slimhyperplasi/hoste); **respirasjonssvikt type I** (hypoksemi) vs. **type II**
  (hypoksemi + hyperkapni); spirometri **FEV1/FVC** (obstruktivt vs. restriktivt); pneumoni-
  faser (rød/grå hepatisering); astma, atelektase, cor pulmonale, lungekreft-eksposisjoner.
  `(verifiser)` doseterskler.
- **Mekanismekjeder:** (1) paracetamol → CYP2E1 → NAPQI → glutation-uttømming → leverskade
  (og alkoholens forverring); (2) emfysem-patogenesen (protease/antiprotease-ubalanse).
  **Betydning for tannbehandlingen:** paracetamol er tannlegens vanligste analgetikum —
  doseforsiktighet ved leversykdom/alkoholmisbruk; KOLS-pasientens stilling og O₂-hensyn.
- **Typiske feil:** `E6` (uspesifikk paracetamol-mekanisme — glemme NAPQI/CYP2E1/glutation),
  blande type I/II respirasjonssvikt, blande emfysem/kronisk bronkitt.
- **Kvote:** 14 quiz / 22 flashcards.

#### Kapittel 2.3: Diabetes mellitus og tannbehandling
**id:** `od2200-2-3` · **number:** 2.3 · **estimatedMinutes:** 60 · **prerequisites:** `od2200-1-3`

- **Kapitteltype:** tema (blokk 2).
- **Description:** Type 1 (autoimmun) vs. type 2, ketoacidose, senkomplikasjoner (mikro-/
  makroangiopati, sårtilheling), og DM vs. diabetes insipidus — ofte rammet inn som
  NIDDM-tannlegepasient.
- **Eksamensbelegg:** Blokk 2. **Diabetes høy score** (ofte tannlegepasient med NIDDM). Form:
  B2-KASUS, B2-KORT, B2-KLIN. Prioritet: perfekt.
- **Faktakontrakt:** **type 1** (autoimmun betacelledestruksjon, GAD65, insulinmangel,
  ung debut) vs. **type 2** (insulinresistens + relativ insulinmangel, metabolsk syndrom);
  **ketoacidose** (type 1: fett → keton → syre); hyperglykemi-symptomer (polyuri/polydipsi);
  **senkomplikasjoner** mikroangiopati (retinopati, nefropati, nevropati) og makroangiopati
  (aterosklerose); **nedsatt sårtilheling og infeksjonstendens**; DM vs. **diabetes insipidus**
  (ADH-mangel, ikke glukose); HbA1c grovt.
- **Mekanismekjeder:** (1) type 1-patogenesen (autoimmun → betacelledestruksjon → insulinmangel
  → hyperglykemi + ketoacidose); (2) hvorfor diabetes gir nedsatt sårtilheling (mikroangiopati
  + hyperglykemi + nedsatt nøytrofilfunksjon). **Betydning for tannbehandlingen:** økt
  periodontitt-risiko og nedsatt tilheling, infeksjonstendens, hypoglykemi-håndtering i stolen
  (men **kun** hos insulin-/SU-behandlede — ikke honorér «hypoglykemi» hos type 2 uten insulin
  uten forklaring), timing av avtaler.
- **Typiske feil:** `E8` (honorere hypoglykemi hos type 2 uten insulin uten forklaring),
  blande type 1/2-patogenese, blande DM/diabetes insipidus.
- **Kvote:** 14 quiz / 22 flashcards.

#### Kapittel 2.4: Nyrepatologi, SLE og medikamentdosering
**id:** `od2200-2-4` · **number:** 2.4 · **estimatedMinutes:** 60 · **prerequisites:** `od2200-2-3`

- **Kapitteltype:** tema (blokk 2).
- **Description:** Nefrittisk vs. nefrotisk syndrom, glomerulonefritt og SLE, gradering av
  nyresvikt (eGFR) og renal osteodystrofi — med den kliniske vurderingen av om nyresvikten er
  alvorlig nok til å påvirke tannbehandling.
- **Eksamensbelegg:** Blokk 2. **Nyre/SLE-glomerulonefritt middels–høy score** (SLE-kasus i
  2025-ordinær; nyre-skjelett-kobling; gradering testes eksplisitt). Form: B2-KASUS, B2-KLIN,
  B2-MEK. Prioritet: perfekt.
- **Faktakontrakt:** **nefrittisk** (hematuri, proteinuri mild, hypertensjon, oliguri) vs.
  **nefrotisk** (massiv proteinuri, ødem, hypoalbuminemi, hyperlipidemi) urinbilde;
  **glomerulonefritt**; **SLE** (autoimmun, ANA/anti-dsDNA, immunkomplekser → komplementaktivering
  → glomerulær skade); **eGFR-gradering** (~55 = lett nedsatt, påvirker lite; <15 = terminal/
  dialyse) `(verifiser grenser)`; **renal osteodystrofi** (nyresvikt → fosfatretensjon +
  redusert kalsitriol → sekundær hyperparatyreose → benresorpsjon); nyresvikt prerenal/renal/
  postrenal; medikamentdosering ved nedsatt nyrefunksjon.
- **Mekanismekjeder:** (1) SLE-immunkomplekser → komplementaktivering → nefrittisk urinbilde;
  (2) renal osteodystrofi-kjeden. **Betydning for tannbehandlingen:** **gradér eGFR før du
  konkluderer** — lett svikt påvirker lite, terminal svikt krever dosejustering av
  nyreutskilte legemidler og forsiktighet med NSAID/blødning; kjeveben-manifestasjon ved
  renal osteodystrofi.
- **Typiske feil:** `E4` (ikke gradere alvorlighet — svare at eGFR 55 forverrer periodontitt),
  blande nefrittisk/nefrotisk, `E5` (hoppe over immunkompleks-mekanismen).
- **Kvote:** 14 quiz / 22 flashcards.

#### Kapittel 2.5: Endokrin patologi (utenom diabetes)
**id:** `od2200-2-5` · **number:** 2.5 · **estimatedMinutes:** 50 · **prerequisites:** `od2200-2-3`

- **Kapitteltype:** tema (blokk 2).
- **Description:** Graves vs. Hashimoto, struma, hyperparatyreose/hyperkalsemi og
  glukokortikoid-bivirkninger — med Graves/Hashimoto-sammenligningen som gjentas.
- **Eksamensbelegg:** Blokk 2. **Endokrint (utenom diabetes) middels score** (Graves/Hashimoto-
  sammenligning gjentas). Form: B2-KORT, B2-MEK. Prioritet: kunne.
- **Faktakontrakt:** **Graves** (autoimmun hypertyreose, TRAS-stimulerende antistoff,
  eksoftalmus) vs. **Hashimoto** (autoimmun hypotyreose, anti-TPO, struma); struma
  (jodmangel/annen); **primær hyperparatyreose** (PTH ↑ → **hyperkalsemi** → «stein, ben,
  buk, psyke»); glukokortikoid-bivirkninger (Cushing-lignende: hyperglykemi, osteoporose,
  immunsuppresjon, tynn hud); binyrebark grovt (kortisol, aldosteron).
- **Mekanismekjeder:** (1) Graves (TRAS → tyreoidea-stimulering → hypertyreose); (2)
  hyperparatyreose → hyperkalsemi-effekter. **Betydning for tannbehandlingen:** hypertyreose
  og stresshåndtering/adrenalinhensyn; steroidbehandlede pasienter (infeksjons-/
  binyrebarksvikt-hensyn); hyperkalsemi og kjeveben.
- **Typiske feil:** bytte Graves/Hashimoto (hyper vs. hypo), blande primær/sekundær
  hyperparatyreose, `E5`.
- **Kvote:** 12 quiz / 20 flashcards.

#### Kapittel 2.6: Blod, beinmarg og nevrologi
**id:** `od2200-2-6` · **number:** 2.6 · **estimatedMinutes:** 60 · **prerequisites:** `od2200-1-4`

- **Kapitteltype:** tema (blokk 2).
- **Description:** Trombocytopeni/pancytopeni, anemi, lymfom (Hodgkin/Burkitt, EBV,
  B-symptomer), sepsis — ofte via en halslymfeknute-kasus — og nevrologi (hjerneblødningstyper,
  hjerneslag-behandling, afasi/neglekt, Parkinson).
- **Eksamensbelegg:** Blokk 2. **Blod/beinmarg middels score** (ofte via halslymfeknute-kasus);
  **nevrologi middels score** (ofte kortsvar; hjerneblødningstyper). Form: B2-KORT, B2-KASUS,
  B2-MEK. Prioritet: kunne.
- **Faktakontrakt:** **trombocytopeni/ITP/pancytopeni** (blødningstendens); **anemi**
  (jernmangel — hypokrom mikrocytær); **lymfom** Hodgkin (Reed-Sternberg) vs. non-Hodgkin/
  **Burkitt** (EBV, «starry sky»); **B-symptomer** (feber, nattesvette, vekttap); **sepsis/
  septisk sjokk** (SIRS, organsvikt); **hjerneblødninger** (epidural = a. meningea media,
  «lucid interval»; subdural = brovener, eldre/antikoagulerte; subaraknoidal = aneurisme,
  «tordenskrekk-hodepine»; intracerebral = hypertensjon); **hjerneslag-behandling**
  (trombolyse/trombektomi ved iskemisk); **afasi** (Broca/Wernicke) og neglekt; **Parkinson**
  (Lewy-legemer, alfa-synuklein, dopaminmangel).
- **Mekanismekjeder:** (1) sepsis → SIRS → distributivt sjokk; (2) hvorfor subduralt hematom
  rammer eldre/antikoagulerte (brovener + hjerneatrofi). **Betydning for tannbehandlingen:**
  blødningsrisiko ved trombocytopeni, immunsuppresjon ved leukemi/cellegift (infeksjon/
  mukositt), oral manifestasjon av lymfom (halslymfeknute); antikoagulerte pasienter og
  hjerneblødningsrisiko.
- **Typiske feil:** blande hjerneblødningstypene (kar/klinikk), blande Hodgkin/non-Hodgkin,
  glemme tannbehandlingskoblingen (`E7`).
- **Kvote:** 14 quiz / 22 flashcards.

#### Kapittel 2.7: Del 2-prøvebank — organpatologi og pasientkasus (drill)
**id:** `od2200-2-7` · **number:** 2.7 · **estimatedMinutes:** 50 · **prerequisites:** `od2200-2-6`

- **Kapitteltype:** sjangerdrill (blokk 2, organpatologi + kasus).
- **Description:** Driller det utviklende pasientkasuset og den kliniske vurderingen for hele
  Del 2 — lever/blødning, paracetamol/lunge, diabetes, nyre/SLE-gradering, endokrint, blod/
  nevrologi — alltid med tannbehandlingskoblingen og gradering av alvorlighet.
- **Eksamensbelegg:** Blokk 2, Del 2-organpatologi (høy/middels score). Form: B2-KASUS,
  B2-KLIN, B2-KORT. Prioritet: perfekt (meta for Del 2).
- **Innhold:** `text` **Kasus-metoden** (les kasuset, still diagnose, forklar mekanismen,
  **gradér alvorlighet**, konkludér med **hva det betyr for tannbehandlingen**); `example`
  full-pott-kasuser for 3–4 tunge tilstander (NIDDM-synkope, antikoagulert leverpasient,
  SLE-nyre med gradering, halslymfeknute-lymfom) med delpoeng synlig; `exercise` × 8–10
  (B2-KASUS/B2-KLIN/B2-KORT — løs den utviklende kasusen selv).
- **Typiske feil:** E4 (ikke gradere), E7 (glemme tannbehandlingskoblingen), E8 (hypoglykemi-
  fellen), E5 (hoppe over mekanismen) — uthevet i fasitkommentarene.
- **Kvote:** 16 quiz / 12 flashcards.

### Del 3 — Kraniofacial osteologi, muskler, nerver og kar (BLOKK 3)

#### Kapittel 3.1: Kranieosteologi I — mandibula og maxilla
**id:** `od2200-3-1` · **number:** 3.1 · **estimatedMinutes:** 65 · **prerequisites:** `od2200-0-2`

- **Kapitteltype:** tema (blokk 3, latinsk osteologi).
- **Description:** Mandibula og maxilla i detalj — deler, strukturer, foramina, kanaler og
  artikulasjoner — den faste oppgave 1-knokkelen som roterer, romlig forankret.
- **Eksamensbelegg:** Blokk 3, **osteologi svært høy score** (fast oppgave 1, roterer mellom
  knokler). Form: B3-OST. Prioritet: perfekt.
- **Faktakontrakt:** **mandibula** (corpus, ramus, angulus, processus alveolaris/condylaris/
  coronoideus, foramen mandibulae + lingula, foramen mentale, canalis mandibulae, linea
  mylohyoidea, fossa submandibularis, protuberantia mentalis); artikulasjon i **articulatio
  temporomandibularis (kjeveledd)** mot os temporale; **maxilla** (corpus, processus
  alveolaris/frontalis/zygomaticus/palatinus, sinus maxillaris, foramen infraorbitale,
  canalis incisivus); maxillas bidrag til orbita, nesehule og gane; artikulasjoner mot
  nabo-knokler. Latin↔norsk gjennomgående.
- **Struktur-/prosessbeskrivelse:** systematisk B3-OST-mal: (1) navngi knokkelen og
  hovedinndeling; (2) beskriv hoveddelene romlig; (3) list strukturer/foramina med hva som
  passerer; (4) **hva den artikulerer med**. Ingen tannbehandlingskobling kreves (Blokk 3),
  men kjeveledd/foramen mandibulae er klinisk relevant (mandibularanestesi) — kort nevnt.
- **Typiske feil:** `E9` (ren navneoppramsing uten romlig plassering), `E15` (latinsk
  upresisjon / feil foramen), glemme artikulasjonene.
- **Kvote:** 14 quiz / 26 flashcards.

#### Kapittel 3.2: Kranieosteologi II — os temporale, occipitale, sphenoidale og nesehulen
**id:** `od2200-3-2` · **number:** 3.2 · **estimatedMinutes:** 65 · **prerequisites:** `od2200-3-1`

- **Kapitteltype:** tema (blokk 3, latinsk osteologi).
- **Description:** Os temporale, occipitale, sphenoidale (og ethmoidale) med foramina, samt
  nesehulens vegger og forbindelser — den andre halvdelen av oppgave 1-rotasjonen.
- **Eksamensbelegg:** Blokk 3, **osteologi svært høy score**; **nesehulens forbindelser/
  regioner middels score** (deloppgave under osteologi). Form: B3-OST. Prioritet: perfekt.
- **Faktakontrakt:** **os temporale** (pars squamosa/petrosa/tympanica, processus mastoideus/
  styloideus/zygomaticus, meatus acusticus, fossa mandibularis); **os occipitale** (foramen
  magnum, condyli occipitales, clivus, protuberantia occipitalis); **os sphenoidale**
  (corpus/sella turcica, ala major/minor, processus pterygoideus, fissura orbitalis superior/
  inferior, foramen rotundum/ovale/spinosum, canalis pterygoideus); **os ethmoidale** kort;
  **nesehulens forbindelser** (canalis incisivus, canalis nasolacrimalis, hiatus semilunaris,
  foramen sphenopalatinum, choanae); orbitas vegger. Hvilke strukturer passerer hvert foramen.
- **Struktur-/prosessbeskrivelse:** B3-OST-mal som 3.1; ekstra vekt på **hva som passerer
  hvert foramen** (f.eks. n. maxillaris gjennom foramen rotundum, n. mandibularis gjennom
  foramen ovale) — kobler til nerveoppgaven (kap. 3.5).
- **Typiske feil:** `E15` (blande foramina og hva som passerer), `E9` (oppramsing uten
  romlig plassering).
- **Kvote:** 14 quiz / 26 flashcards.

#### Kapittel 3.3: Suprahyoidale muskler og tyggemuskler
**id:** `od2200-3-3` · **number:** 3.3 · **estimatedMinutes:** 60 · **prerequisites:** `od2200-3-1`

- **Kapitteltype:** tema (blokk 3, muskler femdelt mal).
- **Description:** De suprahyoidale musklene og tyggemusklene etter den faste femdelte malen
  (utspring, feste, forløp, funksjon, innervasjon) — fast oppgave 2.
- **Eksamensbelegg:** Blokk 3, **muskelgrupper svært høy score** (fast oppgave 2, femdelt mal).
  Form: B3-MUS. Prioritet: perfekt.
- **Faktakontrakt:** **suprahyoidale muskler** — **m. mylohyoideus, m. geniohyoideus,
  m. digastricus (venter anterior/posterior), m. stylohyoideus** (utspring/feste/funksjon:
  hever os hyoideum/senker mandibula; innervasjon: n. mylohyoideus [V₃], n. facialis [VII]
  for venter posterior + stylohyoideus, C1 via n. hypoglossus for geniohyoideus); **tyggemuskler**
  — **m. masseter, m. temporalis, m. pterygoideus medialis/lateralis** (funksjon: elevasjon/
  protrusjon/laterotrusjon av mandibula; **alle innervert av n. mandibularis [V₃]**);
  diaphragma oris (munngulvet).
- **Struktur-/prosessbeskrivelse:** **femdelt mal per muskel** (utspring, feste, forløp,
  funksjon, innervasjon). Fremhev innervasjonsmønsteret (tyggemuskler = V₃; suprahyoidale =
  blandet V₃/VII/C1).
- **Typiske feil:** `E12` (utelate ett av de fem malpunktene — særlig innervasjon), blande
  innervasjonen (V₃ vs. VII), forveksle pterygoideus medialis/lateralis-funksjon.
- **Kvote:** 14 quiz / 26 flashcards.

#### Kapittel 3.4: Tunge- og svelgmuskler
**id:** `od2200-3-4` · **number:** 3.4 · **estimatedMinutes:** 55 · **prerequisites:** `od2200-3-3`

- **Kapitteltype:** tema (blokk 3, muskler femdelt mal).
- **Description:** Tungens indre og ytre muskler og svelgets muskulatur etter femdelt mal,
  med innervasjon (n. hypoglossus, n. vagus, n. glossopharyngeus).
- **Eksamensbelegg:** Blokk 3, **muskelgrupper svært høy score** (oppgave 2-rotasjon). Form:
  B3-MUS. Prioritet: perfekt.
- **Faktakontrakt:** **ytre tungemuskler** (m. genioglossus, m. hyoglossus, m. styloglossus,
  m. palatoglossus) og **indre tungemuskler** (endrer tungeform); **innervasjon**: motorisk
  **n. hypoglossus [XII]** for alle unntatt m. palatoglossus (n. vagus [X]); **svelgmuskler**
  — **m. constrictor pharyngis superior/medius/inferior** + m. stylopharyngeus/salpingopharyngeus
  (innervasjon: plexus pharyngeus [IX + X], m. stylopharyngeus av n. glossopharyngeus [IX]);
  ganemuskler (m. levator/tensor veli palatini). Kobling til svelging (kap. 4.6).
- **Struktur-/prosessbeskrivelse:** femdelt mal per muskel; fremhev **hypoglossus-unntaket**
  (m. palatoglossus = X) og svelgets constrictor-oppbygning.
- **Typiske feil:** `E12` (utelate malpunkt), blande hypoglossus/vagus-innervasjon, glemme
  palatoglossus-unntaket.
- **Kvote:** 12 quiz / 24 flashcards.

#### Kapittel 3.5: Hjernenerver i hode og hals
**id:** `od2200-3-5` · **number:** 3.5 · **estimatedMinutes:** 65 · **prerequisites:** `od2200-3-2`

- **Kapitteltype:** tema (blokk 3, hjernenerver + fiberkomponenter).
- **Description:** N. trigeminus (med n. maxillaris og n. lingualis), n. facialis,
  n. glossopharyngeus og n. hypoglossus — grener, forløp, innervasjon og fiberkomponenter —
  fast oppgave 3.
- **Eksamensbelegg:** Blokk 3, **hjernenerver høy score** (fast oppgave 3; fiberkomponenter
  kreves). Form: B3-NERV. Prioritet: perfekt.
- **Faktakontrakt:** **n. trigeminus (V)** — n. ophthalmicus (V₁), **n. maxillaris (V₂)**
  (foramen rotundum; nn. alveolares superiores, n. infraorbitalis, n. palatinus), **n.
  mandibularis (V₃)** (foramen ovale; **n. lingualis**, n. alveolaris inferior → n. mentalis,
  n. buccalis, motorisk til tyggemuskler); **n. facialis (VII)** (mimisk muskulatur, chorda
  tympani = smak fremre 2/3 tunge + parasympatisk til gl. submandibularis/sublingualis);
  **n. glossopharyngeus (IX)** (smak/sensorikk bakre 1/3 tunge, parasympatisk til gl. parotis
  via n. petrosus minor, svelgrefleks); **n. hypoglossus (XII)** (tungemotorikk);
  **fiberkomponenter** (somatisk/visceral, afferent/efferent, generell/spesiell); n. lingualis
  fører chorda tympani-fibre (smak + parasympatikus).
- **Struktur-/prosessbeskrivelse:** B3-NERV-mal per nerve: opprinnelse/foramen → grener →
  innervasjonsområde → **fiberkomponenter**. Fremhev smaks-/spyttbanene (V₃/VII/IX-samspillet).
- **Typiske feil:** `E10` (feil hjernenerve i smaks-/spyttbaner — blande V, VII, IX), `E15`
  (feil foramen), glemme fiberkomponentene.
- **Kvote:** 14 quiz / 28 flashcards.

#### Kapittel 3.6: Arterier og regioner i ansikt og munn
**id:** `od2200-3-6` · **number:** 3.6 · **estimatedMinutes:** 55 · **prerequisites:** `od2200-3-5`

- **Kapitteltype:** tema (blokk 3, kar + regioner).
- **Description:** A. facialis og blodforsyningen til tenner og gingiva, og regio sublingualis
  — roterer med nerveoppgaven i oppgave 3.
- **Eksamensbelegg:** Blokk 3, **kar i ansikt/munn høy score** (roterer med nerveoppgaven).
  Form: B3-NERV/B3-OST-hybrid. Prioritet: perfekt.
- **Faktakontrakt:** **a. carotis externa** og dens grener relevant for ansikt/munn;
  **a. facialis** (forløp over mandibula-underkant, grener til leppe/nese: a. labialis
  superior/inferior, a. angularis); **a. maxillaris** (a. alveolaris inferior → tenner i
  underkjeve; aa. alveolares superiores → overkjeve; a. sphenopalatina, a. palatina);
  **a. lingualis, a. sublingualis, a. mentalis, a. buccalis**; venøs drenasje grovt
  (v. facialis, plexus pterygoideus); **regio sublingualis** (gl. sublingualis, n. lingualis,
  ductus submandibularis, a./v. sublingualis, m. mylohyoideus som gulv).
- **Struktur-/prosessbeskrivelse:** kar-mal (opprinnelse → forløp → forsyningsområde); regio
  sublingualis beskrevet romlig (innhold og avgrensning).
- **Typiske feil:** blande a. alveolaris inferior/superior (under-/overkjeve), `E9`
  (regio sublingualis uten romlig forankring), `E15`.
- **Kvote:** 12 quiz / 24 flashcards.

### Del 4 — Tannutvikling, hardvev og oral fysiologi (BLOKK 3)

#### Kapittel 4.1: Odontogenese — tannlisten og de tre stadiene
**id:** `od2200-4-1` · **number:** 4.1 · **estimatedMinutes:** 65 · **prerequisites:** `od2200-3-5`

- **Kapitteltype:** tema (blokk 3, prosessbeskrivelse).
- **Description:** Tannutviklingen fra tannlisten gjennom knopp-, hette- og klokkestadiet,
  med emaljeorgan, tannpapille og tannsekk — fast oppgave 4, en kronologisk stadierekke.
- **Eksamensbelegg:** Blokk 3, **odontogenese svært høy score** (fast oppgave 4). Form: B3-PROS.
  Prioritet: perfekt.
- **Faktakontrakt:** **tannlisten (lamina dentalis)** fra oralt epitel; epitel–ektomesenkym-
  interaksjon; **knoppstadiet** (bud) → **hettestadiet** (cap: emaljeorgan, **tannpapille**,
  **tannsekk/follikel**) → **klokkestadiet** (bell: **indre/ytre emaljeepitel**, **stratum
  intermedium**, **stellate reticulum**, differensiering av ameloblaster/odontoblaster);
  **Hertwigs epitelskjede** (rotdannelse); primære/sekundære tannlister (permanente tenner);
  molekylære signaler grovt (Shh, BMP, Wnt) `(verifiser detaljnivå)`.
- **Struktur-/prosessbeskrivelse:** B3-PROS-mal: kronologisk stadierekke med **celletyper og
  vevsderivater ved hvert stadium** og hvilket embryonalt lag de kommer fra (emalje ←
  ektoderm/epitel; dentin/pulpa/cement ← ektomesenkym).
- **Typiske feil:** `E11` (blande stadiene knopp/hette/klokke), forveksle indre/ytre
  emaljeepitel, blande tannpapille/tannsekk (derivater).
- **Kvote:** 14 quiz / 26 flashcards.

#### Kapittel 4.2: Dentinogenese og emaljedannelse (amelogenese)
**id:** `od2200-4-2` · **number:** 4.2 · **estimatedMinutes:** 65 · **prerequisites:** `od2200-4-1`

- **Kapitteltype:** tema (blokk 3, prosessbeskrivelse).
- **Description:** Odontoblastenes dentindannelse og ameloblastenes emaljedannelse — hvem
  differensierer først, hvordan hardvevet legges ned, og deres innbyrdes avhengighet — fast
  oppgave 4/5.
- **Eksamensbelegg:** Blokk 3, **dentinogenese/emaljedannelse svært høy score** (fast oppgave
  4/5; ameloblast-/odontoblastdifferensiering). Form: B3-PROS. Prioritet: perfekt.
- **Faktakontrakt:** **dentinogenese** — indre emaljeepitel induserer ektomesenkym →
  **odontoblaster** → **predentin** → mineralisert **dentin** (mantel-/kappdentin først, så
  sirkumpulpalt dentin); odontoblastutløpere i **dentintubuli**; **dentinogenese går forut
  for amelogenese**; **amelogenese** — odontoblastene/dentinet induserer indre emaljeepitel →
  **ameloblaster** → emaljematrix (**amelogenin/enamelin**) → mineralisering til
  **hydroksyapatitt** (høyest mineralinnhold i kroppen); Tomes' utløper former prismene;
  ameloblastene forsvinner ved frembrudd (emalje kan ikke regenereres); von Ebner-linjer/
  Hertwigs rotepitel kobling.
- **Struktur-/prosessbeskrivelse:** B3-PROS-mal: differensieringsrekkefølge (odontoblast før
  ameloblast), gjensidig induksjon epitel↔ektomesenkym, matrisedannelse → mineralisering per
  hardvev.
- **Typiske feil:** `E11` (ameloblast vs. odontoblast; feil rekkefølge — hvem først), blande
  emalje-/dentinmatrix, glemme den gjensidige induksjonen.
- **Kvote:** 14 quiz / 26 flashcards.

#### Kapittel 4.3: Emaljens og dentinets mikrostruktur
**id:** `od2200-4-3` · **number:** 4.3 · **estimatedMinutes:** 60 · **prerequisites:** `od2200-4-2`

- **Kapitteltype:** tema (blokk 3, mikrostruktur — punktliste).
- **Description:** Emaljeprismer, Retzius-linjer, Hunter-Schreger-bånd, perikymata, og
  dentinets tubuli, von Ebner-linjer og peri-/intertubulært dentin — fast oppgave 5/6 med
  punktliste-fasit.
- **Eksamensbelegg:** Blokk 3, **emaljens/dentinets mikrostruktur svært høy score** (fast
  oppgave 5/6, punktliste-fasit). Form: B3-STRUK. Prioritet: perfekt.
- **Faktakontrakt:** **emalje** — **prismer/staver** (interprismatisk substans, prismeskjede),
  **Retzius-linjer** (inkrementlinjer, tilsvarer perikymata på overflaten), **Hunter-Schreger-
  bånd** (optisk fenomen fra prismeretning), **perikymata** (overflate), nyfødtlinje,
  emaljelameller/-busker/-kolber; høyt mineralisert (~96 %), acellulær, kan ikke regenereres;
  **dentin** — **dentintubuli** med odontoblastutløpere, **peritubulært** (høymineralisert)
  vs. **intertubulært** dentin, **von Ebner-linjer** (inkrement) og konturlinjer (Owen),
  predentin, mantel-/sirkumpulpalt dentin, primær/sekundær/tertiær dentin, sklerotisk dentin,
  dødtraktater; dentin er vitalt/sensitivt (via pulpa).
- **Struktur-/prosessbeskrivelse:** B3-STRUK-mal: strukturert punktliste per hardvev
  (makro → mikro → inkrementlinjer → kliniske korrelater). Skille tydelig emalje- vs.
  dentinstrukturer.
- **Typiske feil:** `E13` (blande Retzius/von Ebner; prismer/tubuli; Hunter-Schreger/perikymata),
  glemme at emalje er acellulær og ikke regenererer.
- **Kvote:** 14 quiz / 26 flashcards.

#### Kapittel 4.4: Tannens støttevev — PDL og gingivale fibre
**id:** `od2200-4-4` · **number:** 4.4 · **estimatedMinutes:** 55 · **prerequisites:** `od2200-4-3`

- **Kapitteltype:** tema (blokk 3, fibersystem).
- **Description:** Periodontalligamentets prinsipale fibergrupper og de gingivale fibrene,
  med funksjon — fast oppgave 6.
- **Eksamensbelegg:** Blokk 3, **PDL/gingivale fibre høy score** (fast oppgave 6). Form:
  B3-STRUK. Prioritet: perfekt.
- **Faktakontrakt:** **periodontiet** (gingiva, PDL, cement, alveolarben); **PDLs prinsipale
  fibergrupper**: **alveolære randfibre (alveolar crest), horisontale, skrå (oblique — bærer
  tyggetrykk, størst gruppe), apikale, interradikulære**; Sharpeys fibre (forankring i cement
  og ben); PDLs funksjoner (feste, støtdemping/tygging, proprioseptiv, ernæring, remodellering);
  **gingivale fibergrupper** (dentogingivale, dentoperiostale, alveologingivale, circulære,
  transseptale); cement (acellulært/cellulært) og alveolarben grovt.
- **Struktur-/prosessbeskrivelse:** B3-STRUK-mal: list fibergruppene med **retning og funksjon**;
  fremhev de skrå fibrene (bærer tyggetrykk) og Sharpeys forankring.
- **Typiske feil:** `E14` (feil PDL-fibergruppe eller feil funksjon), blande PDL-/gingivale
  fibre, glemme Sharpeys fibre.
- **Kvote:** 12 quiz / 24 flashcards.

#### Kapittel 4.5: Oral fysiologi I — spyttrefleks og salivasekresjon
**id:** `od2200-4-5` · **number:** 4.5 · **estimatedMinutes:** 60 · **prerequisites:** `od2200-3-5`

- **Kapitteltype:** tema (blokk 3, refleksbue/fysiologi).
- **Description:** Spyttrefleksen med sine fem komponenter, salivasammensetning og -sekresjon,
  og autonom innervasjon av spyttkjertlene — del av fast oppgave 7.
- **Eksamensbelegg:** Blokk 3, **oral fysiologi/refleksbuer høy score** (fast oppgave 7;
  spyttrefleks med 5 komponenter). Form: B3-REFL. Prioritet: perfekt.
- **Faktakontrakt:** **refleksbuens 5 komponenter** (reseptor → afferent nerve → CNS-senter →
  efferent nerve → målorgan); **spyttrefleks** (smaks-/mekanoreseptorer → afferent VII/IX →
  salivatoriske kjerner → efferent parasympatikus [VII til gl. submandibularis/sublingualis
  via chorda tympani; IX til gl. parotis via n. petrosus minor] → spyttkjertel); **saliva-
  sammensetning** (vann, elektrolytter Cl⁻/HCO₃⁻/Na⁺/K⁺, amylase, mucin, IgA, lysozym);
  **acinære celler** (primærsekret) → **utførselsganger** (modifiserer: reabsorberer Na⁺/Cl⁻,
  utskiller K⁺/HCO₃⁻ → hypotont sluttsekret); **myoepitelceller** (tømmer acini); sympatisk
  (viskøst, lite) vs. parasympatisk (vandig, mye) innervasjon; salivas funksjoner
  (buffer, fordøyelse, beskyttelse, remineralisering).
- **Struktur-/prosessbeskrivelse:** B3-REFL-mal: hele nervebanen ledd for ledd med **korrekte
  hjernenerver**; salivamodifikasjonen acinus → gang.
- **Typiske feil:** `E10` (feil hjernenerver / glemme både sympatisk og parasympatisk
  innervasjon), utelate en av de fem refleksbue-komponentene, blande primær-/sluttsekret.
- **Kvote:** 12 quiz / 22 flashcards.

#### Kapittel 4.6: Oral fysiologi II — tygge-/bittrefleks, svelging og pulpasmerte
**id:** `od2200-4-6` · **number:** 4.6 · **estimatedMinutes:** 60 · **prerequisites:** `od2200-4-5`

- **Kapitteltype:** tema (blokk 3, refleksbue/fysiologi).
- **Description:** Tygge- og bittrefleksen med alfa-gamma-koaktivering og muskelspoler,
  svelgeprosessens faser, og pulpas smertefysiologi — resten av fast oppgave 7.
- **Eksamensbelegg:** Blokk 3, **oral fysiologi høy score** (tygge-/bittrefleks alfa-gamma;
  svelging; pulpas smertefysiologi). Form: B3-REFL. Prioritet: perfekt.
- **Faktakontrakt:** **tygge-/bittrefleks** — **muskelspole** (intrafusale fibre),
  **strekkrefleks** (monosynaptisk), **alfa-gamma-koaktivering** (gamma-motonevron holder
  spolen sensitiv når muskelen forkortes); mekanoreseptorer i PDL (proprioseptiv styring av
  bittkraft); tyggemuskulaturens innervasjon (V₃); **svelging (deglutinasjon)** i tre faser:
  **oral (viljestyrt) → faryngeal (refleks, IX/X) → øsofageal**, med lukking av luftvei
  (epiglottis, bløt gane); **pulpas smertefysiologi** (dentinets sensitivitet via
  hydrodynamisk teori — væskebevegelse i tubuli stimulerer A-delta-fibre; C-fibre i pulpa;
  pulpa gir kun smertesensasjon uansett stimulus).
- **Struktur-/prosessbeskrivelse:** B3-REFL-mal for tygge-/bittrefleks (reseptor → afferent →
  senter → efferent → målmuskel) og svelgefasene i rekkefølge; hydrodynamisk teori som
  mekanismekjede.
- **Typiske feil:** `E10` (feil nervebane), blande svelgefasene, glemme alfa-gamma-
  koaktiveringen, forveksle A-delta/C-fibre.
- **Kvote:** 12 quiz / 22 flashcards.

### Del 5 — Muntlig-forberedelse og øvingseksamener

#### Kapittel 5.1: Muntlig eksamen — de to stasjonene
**id:** `od2200-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `od2200-2-7`

- **Kapitteltype:** muntlig-stasjonsdrill (meta, begge blokker).
- **Description:** Hvordan man håndterer muntlig eksamen med to stasjoner (maks 45 min) —
  rask, strukturert framstilling av både patologi (med tannbehandlingskobling) og
  kraniofacial anatomi (romlig forankret), med tegning ved tavle.
- **Eksamensbelegg:** Muntlig del, to stasjoner, samme pensum som skriftlig (Blokk 2 + Blokk 3).
  Form: muntlig framstilling av B2- og B3-sjangrene. Prioritet: perfekt (meta).
- **Innhold:** `text` **Muntlig-metoden** (strukturér svaret høyt: definisjon → mekanisme/
  struktur → klinisk/romlig kobling; tegn skjematisk mens du forklarer; svar på spørreordet;
  tenk høyt ved usikkerhet); `example` 3–4 gjennomgåtte muntlige stasjoner — én patologi
  (f.eks. «forklar trombose og hva det betyr for en antikoagulert pasient») og én anatomi
  (f.eks. «beskriv n. lingualis og hva den fører») — med hva sensor vil høre; `collapsible`
  sjekklister per stasjonstype. `exercise` × 8–10 (muntlig-simulering: svar på tid, med
  strukturkrav og tannbehandlings-/romlig kobling).
- **Typiske feil:** ren oppramsing (E9), glemme tannbehandlingskoblingen (E7), ustrukturert
  svar, ikke tegne når det hjelper.
- **Kvote:** 12 quiz / 8 flashcards.

#### Kapittel 5.2: Sjangerdrill Blokk 2 — kasus, kortsvar og tannbehandlingskobling
**id:** `od2200-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** `od2200-2-7`

- **Kapitteltype:** sjangerdrill (blokk 2, samlet).
- **Description:** Tverrgående drill av hele Blokk 2s svarlogikk — utviklende pasientkasus,
  faktakortsvar med riktig antall momenter, patofysiologisk mekanismekjede, og alltid
  gradering + tannbehandlingskobling.
- **Eksamensbelegg:** Blokk 2, hele pensumet (Del 1–2). Form: B2-KASUS, B2-KORT, B2-MEK,
  B2-KLIN. Prioritet: perfekt (meta).
- **Innhold:** `text` **Blokk 2-oppskriften** (kasus: diagnose → mekanisme → gradér → klinisk
  konsekvens; kortsvar: presist, riktig antall momenter; mekanisme: nummerert kjede i rett
  rekkefølge); `example` full-pott-besvarelser av 4 tunge oppgaver (én per hovedmotiv: akutt
  hendelse, sirkulasjon, organsykdom med gradering, neoplasi) med delpoeng og sensorblikk;
  drilltabell over kjernekortsvarene (nekrosetyper, Virchows triade, synkopedefinisjon,
  paracetamol/NAPQI, øsofagusvaricer, diabetes-senkomplikasjoner). `exercise` × 10–12
  (B2-KASUS/B2-KORT/B2-MEK/B2-KLIN).
- **Typiske feil:** E1–E8 speiles; E7 (tannbehandlingskobling) og E4 (gradering) uthevet.
- **Kvote:** 16 quiz / 10 flashcards.

#### Kapittel 5.3: Sjangerdrill Blokk 3 — struktur, prosess og refleksbue
**id:** `od2200-5-3` · **number:** 5.3 · **estimatedMinutes:** 60 · **prerequisites:** `od2200-4-6`

- **Kapitteltype:** sjangerdrill (blokk 3, samlet).
- **Description:** Tverrgående drill av hele Blokk 3s svarlogikk — romlig forankret
  osteologi, femdelt muskelmal, hjernenerve med fiberkomponenter, kronologisk odontogenese/
  hardvev, og komplett refleksbue med korrekte hjernenerver.
- **Eksamensbelegg:** Blokk 3, hele den faste 6–7-oppgavemalen (Del 3–4). Form: B3-OST/B3-MUS/
  B3-NERV/B3-PROS/B3-STRUK/B3-REFL. Prioritet: perfekt (meta).
- **Innhold:** `text` **Blokk 3-oppskriften** (osteologi romlig forankret + artikulasjoner;
  muskel = femdelt mal; nerve = grener + forløp + fiberkomponenter; prosess = kronologisk
  stadierekke; refleksbue = 5 komponenter med korrekte hjernenerver); `example` full-pott-
  besvarelser av 4 oppgavetyper (én osteologi, én muskel, én nerve, én refleksbue) med
  sensorblikk; drilltabell over den «garanterte» oppgavemalen (kranieknokler, muskelgrupper,
  4 hjernenerver, a. facialis, odontogenese-stadier, emalje-/dentinstruktur, PDL-fibre,
  3 fysiologirefleksene). `exercise` × 10–12 (alle B3-sjangre).
- **Typiske feil:** E9–E15 speiles; E9 (oppramsing) og E12 (femdelt mal) uthevet.
- **Kvote:** 16 quiz / 10 flashcards.

#### Kapittel 5.4: Øvingseksamen Blokk 2 (patologi, 4 t)
**id:** `od2200-5-4` · **number:** 5.4 · **estimatedMinutes:** 90 · **prerequisites:** `od2200-5-2`

- **Kapitteltype:** øvingseksamen (blokk 2-format).
- **Description:** Et komplett, nyskrevet Blokk 2-sett i gjeldende format: skriftlig digital
  4 t, 3–4 utviklende pasientkasus + én stor kortsvarsbolk (~20–28 deloppgaver), poeng
  oppgitt per deloppgave, kortsvarsbolken bærer >halve poengsummen.
- **Innhold:** 3–4 kasus (én med akutt hendelse i stolen, én organsykdom med gradering, én
  antikoagulert/blødningsrisiko) med deloppgaver a, b, c… + kortsvarsbolk med ~24 løsrevne
  1–3-poengsspørsmål fra kjernebanken. `collapsible` full modellsvar-fasit per deloppgave
  med **delpoeng, mekanismekjede og tannbehandlingskobling**; `tip` **Sensorblikket**
  (diagnose+mekanisme+klinisk konsekvens; gradér; presist antall momenter; kortsvarene der
  poengene ligger). Alle oppgaver NYSKREVNE.
- **Typiske feil:** E1–E8 speiles i fasitkommentarene; E7 (tannbehandlingskobling) uthevet.
- **Kvote:** 10 quiz / 2 flashcards.

#### Kapittel 5.5: Øvingseksamen Blokk 3 (kraniofacial, 4 t)
**id:** `od2200-5-5` · **number:** 5.5 · **estimatedMinutes:** 90 · **prerequisites:** `od2200-5-3`

- **Kapitteltype:** øvingseksamen (blokk 3-format).
- **Description:** Et komplett, nyskrevet Blokk 3-sett i gjeldende format: skriftlig 4 t,
  6–7 nummererte fritekstoppgaver i den faste rekkefølgen (osteologi → muskler → nerve/kar →
  odontogenese → hardvev → fibersystem → fysiologi).
- **Innhold:** oppgave 1 osteologi (én kranieknokkel + artikulasjoner), 2 muskelgruppe
  (femdelt mal), 3 hjernenerve/arterie (grener + fiberkomponenter), 4 odontogenese/
  dentinogenese, 5 emalje-/dentinstruktur, 6 PDL/gingivale fibre, 7 refleksbue/fysiologi.
  `collapsible` full modellsvar-fasit per oppgave (romlig forankret, femdelt mal, kronologisk
  stadierekke, komplett nervebane med korrekte hjernenerver); `tip` **Sensorblikket**
  (forståelse foran oppramsing; femdelt muskelmal; fiberkomponenter; 5 refleksbue-komponenter;
  latinsk presisjon). Alle oppgaver NYSKREVNE.
- **Typiske feil:** E9–E15 speiles i fasitkommentarene; E9 (oppramsing) og E12 (femdelt mal)
  uthevet.
- **Kvote:** 10 quiz / 2 flashcards.

---

## Kvotesammendrag (AUTORITATIV for alle senere faser)

| Del | Blokk | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|---|
| 0 | meta | 2 | 22 | 18 | 0 (dekkes av øvingseksamenene) |
| 1 | 2 | 8 | 122 | 164 | 4 |
| 2 | 2 | 7 | 98 | 142 | 4 |
| 3 | 3 | 6 | 80 | 154 | 4 |
| 4 | 3 | 6 | 78 | 146 | 4 |
| 5 | meta | 5 | 64 | 32 | 0 (= 2 øvingseksamener, én per skriftlig blokk) |
| **Sum** | | **34** | **464** | **656** | **16 + 2 øvingseksamener** |

Summeringskontroll per del (quiz / flashcards):
- Del 0: 10+12=22 / 8+10=18
- Del 1: 16+16+14+16+14+16+14+16=122 / 22+22+20+22+20+24+22+12=164
- Del 2: 14+14+14+14+12+14+16=98 / 22+22+22+22+20+22+12=142
- Del 3: 14+14+14+12+14+12=80 / 26+26+26+24+28+24=154
- Del 4: 14+14+14+12+12+12=78 / 26+26+26+24+22+22=146
- Del 5: 12+16+16+10+10=64 / 8+10+10+2+2=32
- **Totalt: 464 quiz / 656 flashcards** (kapittelbidrag, eksakt per-kapittel-telling).

> **Merk (autoritativt gulv):** kvotene over dekker de 34 innholdskapitlene. I tillegg
> kommer **16 prøver (4 per temadel Del 1–4)** med egne oppgaver (§4), som løfter samlet
> quiz-volum klart over gulvet. **Faktisk sum inkl. prøver: quiz ≥ 560, flashcards ≥ 654.**
> Begge over kravet ≥500. Se prøvekvotene i §4 for prøvenes bidrag.

**Autoritativ totalsum (kapitler + prøver):**

| | Kapittelbidrag | Prøvebidrag (§4) | **Sum** | Krav |
|---|---|---|---|---|
| **Quiz** | 464 | 96 (16 prøver × 6 spm) | **560** | ≥500 ✓ |
| **Flashcards** | 656 | 0 (prøver gir ikke flashcards) | **656** | ≥500 ✓ (analysens 650–800-mål nådd) |

**Tetthetsbegrunnelse (jf. PRODUKSJONSLOYPE «≥500 er et GULV, ikke et mål»):** OD2200 er
et ekstremt faktatungt fag — Blokk 3 er latinsk anatomi/histologi (kranieknokler med alle
foramina, muskler i femdelt mal, hjernenerver med fiberkomponenter, odontogenese-stadier,
emalje-/dentinmikrostruktur, PDL-fibre) og Blokk 2 er begrepsrik patologi (nekrosetyper,
mekanismekjeder, latinske sykdomsnavn, normalverdier). Analysen anbefaler eksplisitt **høy
flashcard-tetthet (650–800)**. Derfor er **flashcards skalert til 656** (klart over 500-
gulvet, i nedre del av det anbefalte 650–800-vinduet, med rene anatomi-/histologikapitler
på 22–28 kort hver — nokut-afb-lærdommen om HØY flashcard-tetthet i puggefag). **Quiz 560**
(inkl. prøver) fordi begge blokker premierer presis begrepsgjenkjenning og
mekanisme-/struktur-sekvenser som egner seg til quiz. Rene faktakapitler (osteologi,
odontogenese, hardvevsstruktur) har flashcards ≥ quiz; patologikapitler har balansert
quiz/flashcards med tannbehandlingskoblings-kort i tillegg.

**Flashcard-profil:** latin↔norsk (mandibula-strukturer↔underkjeve; n. lingualis↔tungenerven;
foramen ovale↔hva som passerer), stadierekker (odontogenese: knopp→hette→klokke;
frakturtilheling: hematom→…→remodellering), femdelte muskelmaler (utspring/feste/forløp/
funksjon/innervasjon per muskel), mekanismekjeder (paracetamol→CYP2E1→NAPQI→glutation;
Virchows triade→emboli→destinasjon), nekrosetype↔organ (koagulasjon↔hjerte/nyre;
flytende↔hjerne; ostet↔TB), definisjon↔nøkkelelementer (synkope = tidsbegrenset +
nedsatt hjernesirkulasjon), fiberkomponenter (chorda tympani = smak + parasympatikus),
og **tannbehandlingskoblings-kort** (leversvikt→INR↑→blødningsrisiko; diabetes→nedsatt
tilheling; antikoagulasjon→ekstraksjonsblødning). **Quiz-profil:** faktapresisjon med
nære distraktorer (arteriell/venøs trombe; nefrittisk/nefrotisk; Graves/Hashimoto;
ameloblast/odontoblast; Retzius/von Ebner; V₃/VII/IX i smaks-/spyttbaner) + sekvens-
spørsmål (odontogenese-stadier, frakturfaser, refleksbuens 5 komponenter, svelgefasene) +
kasus-/klinisk-vurderings-quiz (gradér eGFR/INR; hva betyr tilstanden for tannbehandlingen).

---

## 4. Prøver

Fire prøver per temadel (Del 1–4 = **16 prøver**). Del 0 og Del 5 har ingen egen prøve
(Del 5s to øvingseksamener dekker helheten i hver skriftlig form + muntlig-drillen). Hver
prøve speiler blokkens eksamensform i miniatyr: Blokk 2-deler (Del 1–2) = pasientkasus +
faktakortsvar + mekanismekjede, alltid med tannbehandlingskobling; Blokk 3-deler (Del 3–4)
= systematisk struktur-/prosessbeskrivelse i fritekst (romlig forankret, femdelt mal,
kronologisk stadierekke, komplett refleksbue). Omfang 20–40 min, **6 oppgaver/spørsmål per
prøve**. Alle oppgaver NYSKREVNE. Prøvekapittel-id `od2200-<del>-prove`, chapterNumber
`<del>.P` (jf. BYGGEKONTRAKT).

**Prøve-kvote Del 1:** 4 prøver (id `od2200-1-prove`): (1) *Celleskade og nekrose* —
nekrosetyper↔organ + apoptose vs. nekrose (B2-KORT). (2) *Betennelse og tilheling* —
kardinaltegn-mekanisme + frakturtilhelingsfaser (B2-MEK). (3) *Sirkulasjon og akutt hendelse*
— Virchows triade→emboli + synkopedefinisjon + ABC (B2-KASUS). (4) *Blandet Del 1* —
neoplasi + tverrgående kortsvar med tannbehandlingskobling.

**Prøve-kvote Del 2:** 4 prøver (id `od2200-2-prove`): (1) *Lever og blødningsrisiko* —
cirrhose→varicer + INR→ekstraksjonsblødning (B2-KASUS). (2) *Paracetamol og lunge* —
NAPQI-mekanismen + KOLS/respirasjonssvikt (B2-MEK). (3) *Diabetes og nyre med gradering* —
type 1/2 + eGFR-gradering + SLE-nefritt (B2-KLIN). (4) *Blandet Del 2* — endokrint + blod/
nevrologi + halslymfeknute-kasus.

**Prøve-kvote Del 3:** 4 prøver (id `od2200-3-prove`): (1) *Osteologi* — mandibula/maxilla
strukturer + artikulasjoner (B3-OST). (2) *Muskler* — suprahyoidale/tyggemuskler i femdelt
mal (B3-MUS). (3) *Nerver og fiberkomponenter* — n. trigeminusgrener + n. facialis/
glossopharyngeus smaks-/spyttbaner (B3-NERV). (4) *Blandet Del 3* — os sphenoidale-foramina
+ a. facialis + regio sublingualis (romlig forankring).

**Prøve-kvote Del 4:** 4 prøver (id `od2200-4-prove`): (1) *Odontogenese* — tannliste→knopp/
hette/klokke + emaljeorgan/tannpapille/tannsekk (B3-PROS). (2) *Hardvevsdannelse og -struktur*
— dentinogenese/amelogenese-rekkefølge + emalje-/dentinmikrostruktur (B3-PROS/B3-STRUK).
(3) *Støttevev* — PDLs prinsipale fibre + funksjon (B3-STRUK). (4) *Oral fysiologi* —
spyttrefleks (5 komponenter) + tygge-/bittrefleks alfa-gamma + svelgefaser (B3-REFL).

### Komplette øvingseksamener (2 — kapitlene 5.4–5.5, én per skriftlig blokk)

To nyskrevne komplette sett, ett i HVER skriftlig eksamensform: 5.4 = Blokk 2 (patologi, 4 t,
3–4 pasientkasus + stor kortsvarsbolk, tannbehandlingskobling); 5.5 = Blokk 3 (kraniofacial,
4 t, 6–7 nummererte fritekstoppgaver i fast rekkefølge). Full modellsvar-fasit + Sensorblikket
per sett. Muntlig-drillen (kap. 5.1) dekker den muntlige delen. Begrunnelse: fordi de to
blokkene har helt ulik form og hvert sitt fagområde, må studenten trene tidsdisiplin og
poenghøsting SEPARAT i hver form.

---

## 5. Studieguide-disposisjon

1. **To blokker, én muntlig** — blokk-oversiktstabellen (form/tid/svartype/struktur), den
   faste Blokk 3-oppgavemalen, og den kliniske tannbehandlingskoblingen som Blokk 2s signatur
   (fra kap. 0.1–0.2).
2. **Blokk 2-kart (patologi)** — generell patologi (celleskade/nekrose, inflammasjon,
   tilheling, trombose/emboli, hjertesvikt, akutt hendelse i stolen, neoplasi) + organpatologi
   (lever/blødning, paracetamol/lunge, diabetes, nyre/SLE-gradering, endokrint, blod/nevrologi),
   hver med mekanismekjede og tannbehandlingskobling.
3. **Blokk 3-kart (kraniofacial)** — den «garanterte» 6–7-oppgavemalen: osteologi
   (kranieknokler + foramina + artikulasjoner), muskler (femdelt mal), hjernenerver (grener +
   fiberkomponenter) + a. facialis, odontogenese + dentinogenese/amelogenese, emalje-/dentin-
   mikrostruktur, PDL/gingivale fibre, de tre fysiologirefleksene.
4. **Latin↔norsk-listen** — kranieknoklenes strukturer og foramina, muskelnavn, hjernenerver,
   arterier, odontogeneseterminologi, hardvevsstrukturer, PDL-fibergrupper.
5. **Nøkkelfakta-, mekanisme- og stadiebank** — nekrosetype↔organ, mekanismekjedene
   (paracetamol/NAPQI, Virchows triade, RAAS/lungeødem, SLE-nefritt), stadierekkene
   (odontogenese, frakturtilheling, svelging), femdelte muskelmaler, refleksbuenes 5
   komponenter — flashcard-speilet i prosaform.
6. **Sensorfellene** — E1–E15 som énlinjers varsellamper, med E7 (tannbehandlingskoblingen),
   E4 (gradering), E9 (oppramsing) og E12 (femdelt mal) uthevet.
7. **Bestått-strategi per form** — Blokk 2: diagnose+mekanisme+gradér+tannbehandlingskobling,
   sikre kortsvarsbanken (der poengene ligger); Blokk 3: forståelse foran oppramsing, romlig
   forankring, femdelt mal, korrekte fiberkomponenter/hjernenerver; muntlig: strukturér høyt,
   tegn skjematisk.
8. **Ukeplan** — løp mot to skriftlige eksamensdager + muntlig, med prøve-innplassering
   (temadelprøver underveis; øvingseksamen i hver form + muntlig-drill de siste ukene).

---

## 6. Byggerekkefølge og verifikasjon

### Rekkefølge for forfatter-agenten (Opus)

1. **Metadata først:** `TextbookCourse`-oppføring (mønster `COURSE_BI_OKONOMI`, skrives til
   `textbook-courses-hoyskole.ts`): id `od2200`, title, `level: 'Høyskole'`, alle 34
   kapitler med id/number/title/description/estimatedMinutes/topics/competenceGoals/
   prerequisites fra dette skjelettet, `sectionNames` fra §2-tabellen.
2. **Del 0** først (etablerer to-blokk-strukturen, de to svarlogikkene, den femdelte
   muskelmalen og **tannbehandlingskoblingen** som alle senere patologikapitler refererer).
3. **Blokk 2 (Del 1→2)** → **Blokk 3 (Del 3→4)** → **Del 5** (drill + muntlig +
   øvingseksamener). Prerequisites peker bakover; batching = én agent per hel del (Del 1 er
   8 kap → gi agenten hele delens kontrakter, flagg for konsistenssjekk i fase 6).
4. **Prøver** (`od2200-<del>-prove`) etter at delens kapitler finnes (Del 1–4).
5. **Narrativ-versjoner** (`<id>-narrativ.json` per kapittel, jf. `/narrativ`) og quiz-
   registrering til slutt.

Per temakapittel gjelder blokk-rekkefølgen i §2 «Kapittel-DNA» (tip Eksamensvinkel → text
Forkunnskaper + collapsible Nøkkelfakta-/terminologiliste → text Oversikt → definition
Kjernefakta (flashcard-kilden — toppnivå med title!) → text Mekanismekjeder / Struktur-/
prosessbeskrivelse → example Modellsvar → warning Typiske feil → exercise ×6–12 →
collapsible Repetisjon). Eksamensvinkel- og Typiske feil-blokkene fylles med belegget og
feilkodene (E1–E15) fra dette skjelettet — forfatteren skal IKKE finne på frekvenstall.

### Verifikasjonssjekkliste (kjøres FØR ferdigmelding)

- [ ] **JSON-validering:** alle nye `src/lib/data/chapters/od2200-*.json` parser med
      `json.load` (generer via `json.dump`). `npm run build` grønn — vis output.
- [ ] **Metadata-konsistens:** alle 34 kapittel-id-er har eksisterende content-fil; `number`
      er del-basert («3.1», ALDRI lineær); prosareferanser bruker samme form («kap. 3.1»);
      prerequisites peker på eksisterende id-er (og bakover); `sectionNames` satt; narrativ-
      id-er registrert (verifiser med prod-server + curl at narrativ-ruter gir 200).
- [ ] **To-blokk-integritet:** hvert kapittels Eksamensvinkel sier hvilken BLOKK og form det
      trener; Blokk 2-kapitler har en avsluttende **tannbehandlingskobling** i mekanismekjeden
      (E7-vaksine); Blokk 3-kapitler er romlig forankret / femdelt mal / kronologisk stadierekke.
- [ ] **Klinisk tannbehandlingskobling (signaturkravet):** grep at hvert Blokk 2-kapittel
      (Del 1–2) har «Betydning for tannbehandlingen»-ledd (blødning/infeksjon/medikament/
      munntørrhet); dette er et ufravikelig sensorkrav.
- [ ] **Odontologisk/medisinsk presisjon / `(verifiser)`-markeringer:** grep `-i verifiser`
      — alle markerte verdier (eGFR-grenser, blod-pH, paracetamol-doseterskler, adrenalin-
      doser, frakturtilhelings-tider, odontogenese-signalmolekyler) fagfellesjekkes i fase 6
      mot GJELDENDE pensum. INGEN oppdiktede tall/navn.
- [ ] **Kalibrering (grunnfag):** ingen klinisk odontologi (kavitetspreparering/endodonti/
      protetikk) som kjernestoff; men den kliniske tannbehandlingskoblingen ER kjernestoff
      i Blokk 2.
- [ ] **Kvotesum:** quiz ≥560 (kapitler 464 + prøver 96) og flashcards ≥654 fordelt per
      kapittel som angitt (hardt minimum ≥500/≥500; analysens flashcard-mål 650–800 nådd);
      4 prøver per temadel Del 1–4 (16) + 2 øvingseksamener; fasit-svaralternativer
      rebalansert (jevn a/b/c/d — options[0] alltid riktig i staging, runtime stokker).
- [ ] **To former i eksamenstreningen:** 5.4 = Blokk 2-format (pasientkasus + stor
      kortsvarsbolk, tannbehandlingskobling), 5.5 = Blokk 3-format (6–7 nummererte
      fritekstoppgaver i fast rekkefølge); + 5.1 muntlig-stasjonsdrill; hver med full fasit +
      Sensorblikket.
- [ ] **Opphavsrett:** alle oppgaver, kasus, figurtekster, tallverdier og øvingseksamener er
      NYSKREVNE — ingen formuleringer/fasitmomenter fra OD2200-settene. Anatomiske navn
      (norsk/latin), histologiske og patofysiologiske sammenhenger er standard fagstoff og fritt.
- [ ] **Leserkrav:** Forkunnskaper-blokk med lenker + collapsible «Nøkkelfakta- og
      terminologiliste» først i hvert kapittel; Eksamensvinkel-`tip` (per blokk) og Typiske
      feil-`warning` i hvert kapittel; «bør kjenne til»-stoff plassert ETTER kjernestoffet
      og merket.

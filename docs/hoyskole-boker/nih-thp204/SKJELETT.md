# Bokskjelett: THP204 Metabolisme (NIH) — eksamensrettet lærebok

> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE eksamensarkivet —
> alt eksamensbelegg som trengs står i dette skjelettet, destillert fra
> `EKSAMENSANALYSE.md` (NIHs THP204-arkiv 2023/24–2025/26: **fem komplette sittinger**
> med tekstlesbare oppgavesett og fullstendig sensorveiledning, alle lest oppgave for
> oppgave). Alle oppgaver, tallverdier og formuleringer i boka skal være NYSKREVNE
> (se §6). Biokjemiske reaksjonslikninger, enzymnavn, metabolittnavn og standard
> reguleringsmekanismer er alminnelig fagstoff (Lippincott-nivå) og fritt å bruke —
> aldri gjengi oppgavetekster eller sensorformuleringer ordrett.
>
> **Biokjemisk presisjon er kritisk.** Eksamen er en **3 timers skoleeksamen UTEN
> hjelpemidler**, gradert A–F. Reaksjonslikninger skal ha riktige substrater, produkter
> og koenzymer; enzymnavn og lokalisering (mitokondrie/cytosol/lever) skal være presise.
> Tallverdier og detaljer forfatteren er usikker på merkes `(verifiser)` for
> fagfellesjekk i fase 6 (kontrolleres mot gjeldende Lippincott-utgave, 8. utg.). INGEN
> oppdiktede reaksjoner eller enzymnavn.
>
> **THP204 er BIOKJEMIEN i NIH-klyngen.** Boka er STANDALONE, men forkunnskaps-lenkes
> til **THP100 (humanfysiologi)** for organ-/endokrin-kontekst, og leverer det
> molekylære energiomsetningsgrunnlaget som **THP202 (treningsfysiologi)** anvender på
> arbeidsfysiologi. Boka skal IKKE gjenta THP100s organsystemer eller THP202s
> arbeidsfysiologi utover korte lenker (se §1 «Klyngelenking»).

---

## 1. Bokens identitet

- **Kurs-id:** `nih-thp204`
- **Tittel:** *THP204 Metabolisme*
- **Level:** `'Høyskole'`
- **Institusjon (navigasjon):** Norges idrettshøgskole (NIH). Visningsnavn i
  `institusjoner.ts`: «THP204 Metabolisme».
- **Arketype:** **fakta/pugg-hybrid med mekanisme-essaydrill** — nærmeste forbilder er
  **NOKUT-AFB** (rent puggefag uten hjelpemidler → høy flashcard-tetthet, definisjons-
  blokker som flashcard-kilde) og **MED1100 blokk 2** (biokjemisk mekanisme-essay med
  nummerert molekylkjede + reaksjonslikninger). Ingen ren DNA-mal passer: faget er
  **to lag** (analysen §7) — (i) et memoreringslag av reaksjonslikninger, enzymnavn,
  metabolitter og faktakortsvar (flashcards + quiz på resirkulerte spørsmål) og (ii) et
  essaylag med ferdigstrukturerte, figurstøttede mønsterbesvarelser (Krebs, glykolyse,
  de faste delveiene, hormon-/sykdomsintegrasjon). Strukturen er skreddersydd og
  dokumentert i §2.
- **Kapittelantall:** 26 (Del 0: 2 · Del 1 karbohydrat/sentralmetabolisme: 6 · Del 2
  lipid: 3 · Del 3 protein/nitrogen: 2 · Del 4 hormonell regulering: 4 · Del 5
  integrerende fysiologi/sykdom: 3 · Del 6 eksamenstrening: 6).
- **Estimert totaltid:** ~1520 minutter (~25 timer) fordelt per kapittel under.
- **Quiz totalt:** **540** (krav ≥500) · **Flashcards totalt:** **594** (krav ≥500)

**Pitch:** THP204 «Metabolisme» er et obligatorisk 10-studiepoengsemne på bachelor i
trening, helse og prestasjon ved NIH, avlagt av *hele årskullet* hvert vårsemester (med
utsatt eksamen på høsten) — en stor, fornybar målgruppe. Det avgjørende trekk:
**eksamen er ekstremt forutsigbar.** Samme emneansvarlig (Jørgen Jensen) gjennom hele
perioden gir de samme **seks likt vektede oppgavene, i samme rekkefølge, med samme
vekting, på hver eneste sitting** — og sensorveiledningenes fasittekster gjenbrukes
nesten ordrett fra år til år. Boka bygges baklengs fra denne faste malen:

- **Oppgave 1** — 16 kortsvar à 1 p (ett ord / én setning). Faktabatteri + reaksjons-
  kortsvar + rene ja/nei. Resirkuleres nesten ordrett → **direkte flashcard-drill.**
- **Oppgave 2** — 8 kortsvar à 2 p (én–to setninger, ofte «nevn to …»).
- **Oppgave 3 og 4** — hver 4 delspørsmål (a–d) à 4 p = **8 mekanisme-delessay**.
  «Forholdsvis grundig, men ikke alle detaljer»; sensor markerer hva som IKKE forventes.
  De faste delveiene: β-oksidasjon, glykogensyntese, ETC/ATP-syntase, insulin→GLUT4,
  ureasyklus, ketonlegemer, lipolyse, adrenalin/glukagon→glykogenfosforylase.
- **Oppgave 5** — stor mekanisme-essay (16 p). **Nesten alltid Krebs syklus** (glykolyse
  på ett av fem sett). Figur oppfordres til.
- **Oppgave 6** — integrerende fysiologi-essay (16 p). **Alltid** insulin/glukagon,
  diabetes, faste eller overvekt — kobler biokjemi til helkropp og sykdom.

**Karaktergrenser (V26-veiledningen, prosent riktige):** A 90–100 %, B 75–89 %,
C 64–74 %, D 50–63 %, E 40–49 %, F 0–39 %. I praksis **poengbasert** med helhetlig
skjønn. Alle seks oppgaver vekter likt (~16–17 p, sum 100) → man kan ikke bestå på bare
kortsvarene; de to store essayene (32 av 100 p) må også leveres. **Ingen minuspoeng;
blankt = 0 → svar alltid.** Anbefalt ~30 min per oppgave.

**Kalibreringsregel (ufravikelig):** Boka dekker KUN energiomsetning og enzymregulering
(metabolsk biokjemi) — IKKE organsystemer, sirkulasjon, respirasjon eller nervefysiologi
(det er THP100). Der en sensorveiledning eksplisitt merker en detalj «ikke forventet»
(f.eks. glykogenforgreningsmekanismen), omtales den maks som «bør kjenne til», aldri som
kjernekrav. Faget går DYPERE i eksplisitte reaksjonslikninger og hormonell regulering
enn både NOKUT-AFB og THP100, men SMALERE — kun energiomsetning.

### Klyngelenking (NIH THP-serien — README-leserkrav)

THP204 er biokjemidelen av NIHs fysiologi-/anatomisekvens. Forkunnskaper og naboemner
uttrykkes slik i boka:

- **THP100 – Humanfysiologi** (forkunnskap): organsystemer, sirkulasjon, endokrinologi.
  THP204s hormonelle regulering (insulin/glukagon-akse, sekresjonsmekanismer) grenser
  mot THP100s endokrinologi. **Lenkeregel:** THP100 er per nå et *søsterskjelett* i
  klyngen (ikke live-bok). Forfatteren skal referere THP100 med navn i Forkunnskaper-
  blokkene («bygger på organ-/endokrinkonteksten fra THP100 Humanfysiologi»), men
  **kun sette markdown-lenke `[…](/bok/nih-thp100/<id>)` hvis THP100 er bygd og wiret i
  plattformen på byggetidspunktet** (README: lenk kun til kapitler som finnes). Hvis
  ikke: navnereferanse uten lenke. `(verifiser live-status ved bygging)`.
- **THP202 – Treningsfysiologi** (nabo som ARVER herfra): energiomsetning under trening
  (substratvalg ved intensitet, laktat/LDH). THP204 leverer det molekylære grunnlaget.
  Noteres i relevante kapitler (glykolyse, β-oksidasjon, laktat): «THP202 anvender denne
  energiomsetningen på arbeidsfysiologi.» Samme lenkeregel som THP100.
- **THP101 (funksjonell anatomi)** og **THP203 (biomekanikk):** ingen metabolsk
  overlapp; nevnes ikke.

Innenfor porteføljen ellers grenser THP204 mot **NOKUT-AFB** og **MED1100 blokk 2**
(begge dekker glykolyse/Krebs/β-oksidasjon/urea/enzymkinetikk) — men THP204 er dypere
og smalere. Ikke gjenta deres stoff; reguleringsstoffet (fruktose-2,6-bisfosfat,
PKA-kaskaden, insulin/GLUT4) er felles fagstoff og kan formuleres fritt.

---

## 2. Makrostruktur

Rekkefølge: **Del 0 (eksamenskart + eksamensteknikk) → Del 1 karbohydrat- og
sentralmetabolisme (glykolyse → Krebs → ETC → glykogen → glukoneogenese) → Del 2
lipidmetabolisme → Del 3 protein-/nitrogenmetabolisme → Del 4 hormonell regulering →
Del 5 integrerende fysiologi og sykdom → Del 6 eksamenstrening.** Delene følger de
metabolske veiene i naturlig biokjemisk rekkefølge (nedbrytning før syntese, sentral-
metabolisme før perifer), med prerequisites som peker bakover. Omfanget innen hver del
styres av temafrekvens/vekt (analysen §2/§7): Krebs får eget stort kapittel (oppg. 5,
~16 % av karakteren), de faste delessay-veiene får hver sin drill, og de integrerende
temaene (oppg. 6) får egen del.

| Del | Seksjonstittel | Kap. | Vekt/prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart: seks oppgaver, to lag | 2 | perfekt (meta) | Den faste 6-oppgavemalen, de to lagene (memorering + essay), sensorkravene (reaksjonslikninger, «nevn to», lokalisering, figur) og «svar alltid»-regelen må etableres FØR fagstoffet. |
| 1 | Karbohydrat- og sentralmetabolisme | 6 | perfekt | Kjernen. Glykolyse (4/5, hovedessay H25), **Krebs 5/5 (oppg. 5, høyeste prioritet)**, ETC/ATP-syntase 5/5, glykogen 5/5, glukoneogenese 3/5 + F2,6BP-bryteren 4/5. Tyngste del. |
| 2 | Lipidmetabolisme | 3 | perfekt/kunne | β-oksidasjon 5/5 (fast delessay), ketonlegemer 5/5, lipolyse 4/5; de novo lipogenese 2/5 (kunne). |
| 3 | Protein- og nitrogenmetabolisme | 2 | perfekt/kunne | Ureasyklus 5/5 (fast delspørsmål); aminosyrer/proteinstruktur + forgrenede AA som fast kortsvar. |
| 4 | Hormonell og enzymatisk regulering | 4 | perfekt | Enzymregulering 5/5, PKA/cAMP 5/5, fosfataser/kinaser 5/5, insulin→GLUT4 5/5, adrenalin/glukagon-kaskade 5/5, insulin-/glukagonsekresjon. Reguleringen er allestedsnærværende i oppg. 1–4 og 6. |
| 5 | Integrerende fysiologi og sykdom | 3 | perfekt/kunne | Oppg. 6-materialet: insulin/glukagon-akse-integrasjon, faste over tid (3/5), diabetes (3/5), overvekt (2/5). Krever integrasjon av flere veier og organer. |
| 6 | Eksamenstrening | 6 | perfekt (meta) | 3 sjanger-/feildrillkapitler (kortsvarsbatteri · mekanisme-delessay · Krebs-storEssay + integrerende essay) + 3 komplette øvingseksamener i eksamensformatet. |

Rasjonale: alle de faste eksamenstemaene dekkes fullt ut; prioriteringen styrer *dybde
og drillmengde*. Krebs (5/5, oppg. 5) får eget stort kapittel og tyngste drill; de åtte
faste delessay-veiene får hver høy repetisjonsavkastning; kortsvarsbatteriet (32 p) får
tett flashcard-/quiz-dekning fordi spørsmålene resirkuleres nesten ordrett; de
integrerende oppg. 6-temaene får egen del. De novo lipogenese og overvekt (2/5) dekkes
solid men kompakt («kunne»).

### Seksjonstitler (`sectionNames` i metadata — vises som «Kapittel N: <tittel>» på bokforsiden)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart: seks oppgaver, to lag |
| 1 | Karbohydrat- og sentralmetabolisme |
| 2 | Lipidmetabolisme |
| 3 | Protein- og nitrogenmetabolisme |
| 4 | Hormonell og enzymatisk regulering |
| 5 | Integrerende fysiologi og sykdom |
| 6 | Eksamenstrening |

### Sjangerkoder (fra analysen §3 — brukes i «Eksamensbelegg» under)

- `K1` **enkeltords-kortsvar** (oppg. 1, 16 × 1 p): definisjon / ett ord / ren ja–nei.
- `K2R` **reaksjons-kortsvar** (oppg. 1–2): oppgi katalysert reaksjon med riktige
  substrater/produkter/koenzymer (presis likning kreves for full uttelling).
- `K2N` **«nevn to …»** (oppg. 2, 2 p): to riktige = full pott; ofte kreves *begge*.
- `DE` **mekanisme-delessay** (oppg. 3–4, 4 p): trinnvis navngivning av nøkkelmolekyler
  og enzymer i en vei/kaskade. «Grundig, men ikke alle detaljer»; sensor markerer hva
  som IKKE forventes.
- `SE` **stor mekanisme-essay** (oppg. 5, 16 p): hele Krebs (eller glykolyse) med alle
  metabolitter, enzymer, CO₂-/NADH-trinn og regulering av to dehydrogenaser. Figur
  oppfordres til.
- `IE` **integrerende fysiologi-essay** (oppg. 6, 16 p): kobler biokjemi til helkropp og
  sykdom (insulin/glukagon, diabetes, faste, overvekt) — integrer flere veier/organer.

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

- `F1` **kinase vs. fosfatase forvekslet** — kinase *setter på* fosfat, fosfatase *fjerner*.
- `F2` **KM tolket feil** — KM = substratkonsentrasjon ved ½ Vmax (affinitetsmål; *lav*
  KM = *høy* affinitet), IKKE maksimalhastigheten (det er Vmax).
- `F3` **ufullstendig reaksjonslikning** — glemme substrat/produkt/koenzym (NAD⁺/NADH,
  CO₂, CoA, ATP/ADP).
- `F4` **Krebs-regulering forvekslet** — isositrat-DH (hemmes NADH/ATP, aktiveres
  ADP/Ca²⁺) og α-ketoglutarat-DH (hemmes NADH/succinyl-CoA, aktiveres Ca²⁺).
- `F5` **glemme lokalisering** — ureasyklus i lever; β-oksidasjon + Krebs i mitokondrier;
  glykolyse + de novo lipogenese i cytosol; ketogenese i lever. Lokalisering etterspørres
  eksplisitt.
- `F6` **blande de tre irreversible glykolyseenzymene** (hexokinase, PFK-1, pyruvatkinase)
  med de reversible.
- `F7` **feil retning på fruktose-2,6-bisfosfat** — aktiverer PFK-1 (glykolyse↑), hemmer
  FBPase-1 (glukoneogenese↓); insulin↑, glukagon↓.
- `F8` **diabetes-type forvekslet** — type 1 = autoimmun β-celledestruksjon
  (insulinmangel); type 2 = insulinresistens. Bare type 1 gir uttalt ketoacidose ubehandlet.
- `F9` **glemme organspesifikk substratbruk under faste** — hjernen går over på
  ketonlegemer; erytrocytter må ha glukose; lever driver glukoneogenese men kan *ikke*
  oksidere ketonlegemer selv.
- `F10` **insulin-signalvei ufullstendig** — glemme at insulinreseptoren er en
  tyrosinkinase, og at glukoseopptak skjer ved GLUT4-*translokasjon*, ikke økt syntese.

### Sensor-kredittregler (fra analysen §4 — etableres i Del 0.2, refereres i hvert kapittel)

1. **Reaksjonslikninger skal være riktige** — korrekte substrater/produkter/koenzymer for
   full uttelling på `K2R`. Enkelte fasiter aksepterer eksplisitte forenklinger (f.eks.
   ATP-citratlyase: «Sitrat → OAA + acetyl-CoA er tilstrekkelig»; H⁺ ikke krevd i GAPDH).
2. **Enzym- og metabolittnavn kreves der oppgaven ber om det** — i glykogensyntese,
   glykolyse og Krebs skal enzymene navngis eksplisitt; i mekanisme-essayene forventes
   korrekt sekvensert kjede.
3. **«Nevn to» = to riktige for full pott** (`K2N`); ofte kreves *begge* for 2 poeng.
4. **Sensor markerer forventningsnivå tydelig** — «det forventes ikke at …» / «det er
   tilstrekkelig å svare …» gir et klart tak; dybde utover dette gir ikke ekstrapoeng.
5. **Alternative korrekte svar godtas** der fag tillater (glukokinase-vev: lever *eller*
   pankreas β-celler; adrenalin *eller* annet tyrosin-derivert hormon).
6. **Figur teller** — for Krebs og glykolyse er tegning akseptabel og oppfordret.
7. **Ingen minuspoeng; blankt = 0 → svar alltid.** Lukket skoleeksamen uten hjelpemidler.
8. **Lokalisering etterspørres eksplisitt** — oppgi hvilket kompartement/organ veien
   foregår i når det er relevant.

### Arketypetilpasning (dokumenterte valg og avvik fra DNA-malene)

1. **To lag i hver del (hovedvalg).** Fordi eksamen har et memoreringslag (oppg. 1–2,
   32 p) og et essaylag (oppg. 3–6, 68 p), bæres hvert temakapittel av begge: definisjons-
   /reaksjonsblokker (flashcard-/quizkilden) + mekanismekjeder og modellsvar-`example`
   som mater delessay- og storEssay-drillen.
2. **«Symbol- og formelliste» → «Reaksjons- og enzymliste» (per kapittel).** README-kravet
   omtolkes: hvert temakapittel får en `collapsible` **«Reaksjons- og enzymliste»** rett
   etter Forkunnskaper med ALLE reaksjonslikninger, enzymnavn, koenzymer og lokalisering
   som brukes i kapitlet (dette er faktisk memoreringsmålet — biokjemiens «formler»).
3. **Uten hjelpemidler → HØY flashcard-tetthet.** Alt må sitte utenat (NOKUT-AFB-
   lærdommen). Definisjons-, reaksjons-, enzym-, metabolitt- og reguleringskort er
   kjernedrillen; faget er faktatungt → flashcards > gulvet (594, se §3).
4. **Krebs får særbehandling.** Del 1s Krebs-kapittel er bokas tyngste (oppg. 5, 5/5): full
   momentdrill (alle metabolitter/enzymer/CO₂-/NADH-trinn + begge dehydrogenasers
   regulering) + figurstøttet A-mønsterEssay + egen storEssay-drill i Del 6.
5. **Integrerende essay som egen del.** Oppg. 6 (insulin/glukagon, diabetes, faste,
   overvekt) krever at flere veier og organer bindes sammen; skilt ut i Del 5 og drillet
   som egen sjanger (`IE`) i Del 6.
6. **Ingen oppdiktede reaksjoner/tall.** Reaksjonslikninger, enzymnavn og nøkkeltall
   forankres i standard pensum (Lippincott 8. utg.); usikre detaljer merkes `(verifiser)`.
   Alle oppgavetall/-formuleringer er NYSKREVNE (opphavsrett, §6).

### Kapittel-DNA (temakapittel — obligatorisk blokk-rekkefølge)

1. `tip` **Eksamensvinkel** — hvor og hvor ofte temaet testes (score X/5), i hvilke
   oppgaver (sjangerkoder K1/K2R/K2N/DE/SE/IE), med hvilken vekt, og hva sensor ser etter.
   Fylles fra Eksamensbelegg under — forfatteren finner IKKE på frekvenstall.
2. `text` **Forkunnskaper** — kapitler i boka det bygger på + klyngereferanse til THP100/
   THP202 (lenkeregel i §1), etterfulgt av `collapsible` **Reaksjons- og enzymliste** (alle
   reaksjonslikninger + enzymnavn + koenzymer + lokalisering brukt i kapitlet — per kapittel).
3. `text` **Oversikt** — kort (maks 2–3 avsnitt): hva veien/temaet er og hvorfor det testes.
4. `definition` **Kjernefakta** — enzymer, metabolitter, reaksjoner, lokalisering,
   nøkkeltall i emnets terminologi. **Toppnivå med `title` — dette er flashcard-kilden.**
5. `text`/`theorem` **Mekanismekjeder** — veien nummerert trinnvis (metabolitt→enzym→
   metabolitt), med koenzymer og reguleringspunkter; rekkefølge kritisk.
6. `example` × 2–4 — første enkelt, siste på EKSAMENSNIVÅ modellert på reell sjanger:
   delessay som full-pott-momentliste (spørreord + hva sensor IKKE krever markert);
   Krebs/glykolyse som figurstøttet A-besvarelse; reaksjons-kortsvar som korrekt likning.
7. `warning` **Typiske feil** — feilkodene (F1–F10) som gjelder temaet.
8. `exercise` × 6–12 — stigende, i kapitlets sjangre (K1/K2R/K2N/DE, evt. SE/IE), alle med
   `solution` + `hints`. Hver oppgave merket med sjangerkode. Ender på eksamensnivå.
9. `collapsible` **Repetisjon** — 4–6 korte kontrollpunkter fra kapitlet og forutgående.

Drill- og øvingseksamenskapitlene (Del 6) har egne oppsett — se §4.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = gjenganger-score X/5 + oppgave/sjanger + prioritet.
> **Faktakontrakt** = definisjoner/enzymer/metabolitter/lokalisering/nøkkeltall som SKAL
> med. **Mekanismekjeder** = veien rekonstruert trinnvis. **Modellsvar** = hva `example`-
> blokkene skal levere. **Drill** = sjangrene kapitlet øver. **Kvote** = quiz/flashcards.

### Del 0 — Eksamenskart: seks oppgaver, to lag

#### Kapittel 0.1: Seks oppgaver, to lag — slik testes THP204
**id:** `nih-thp204-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Den faste seks-oppgavemalen (16 kortsvar à 1 p · 8 kortsvar à 2 p ·
  8 delessay à 4 p · Krebs-storEssay · integrerende essay), de to lagene (memorering +
  essay), hjelpemiddelregelen (INGEN) og karaktergrensene — og hvordan boka brukes som
  drill mot denne malen.
- **Eksamensbelegg:** Metakapittel (hele arkivet 2023/24–2025/26, malen stabil 5/5).
  Skal formidle: (a) **6 likt vektede oppgaver** (sum 100, ~16–17 p hver, ~30 min hver);
  (b) oppgaveanatomien (oppg. 1 = 16 K1 · oppg. 2 = 8 K2 · oppg. 3–4 = 8 DE à 4 p ·
  oppg. 5 = SE, nesten alltid **Krebs** · oppg. 6 = IE, alltid insulin/glukagon/diabetes/
  faste/overvekt); (c) **3 t UTEN hjelpemidler**, gradert A–F (A 90 %, E 40 %); (d)
  **ingen minuspoeng, blankt = 0 → svar alltid**; (e) at man ikke kan bestå på bare
  kortsvarene — de to store essayene (32 p) må leveres; (f) at figur oppfordres til for
  Krebs/glykolyse. Prioritet: perfekt (meta).
- **Faktakontrakt:** oppgave-oversiktstabellen (oppgave/antall/poeng/sjanger/tema);
  karaktergrensetabellen (A–F i prosent); kart fra oppgavemal til Del 1–5.
- **Mekanismekjeder:** ingen (kartkapittel).
- **Modellsvar:** «Slik ser en oppgave ut i hver sjanger» — ett kort nyskrevet
  minieksempel per sjanger (K1, K2R, K2N, DE, SE, IE) med hvordan poeng høstes.
- **Drill:** gjenkjenn oppgavetype og poengkrav fra formuleringen.
- **Typiske feil:** tro at kortsvarene alene gir bestått; nedprioritere de to store
  essayene; la felt stå blankt (ingen minuspoeng).
- **Kvote:** 10 quiz / 10 flashcards.

#### Kapittel 0.2: Eksamensteknikk — reaksjonslikninger, «nevn to», lokalisering og figur
**id:** `nih-thp204-0-2` · **number:** 0.2 · **estimatedMinutes:** 40 · **prerequisites:** `nih-thp204-0-1`

- **Kapitteltype:** eksamensteknikk (strateginote).
- **Description:** Hvordan man skårer i hver sjanger — presis reaksjonslikning med alle
  koenzymer (K2R), «nevn to» der begge kreves (K2N), trinnvis navngitt mekanismekjede med
  lokalisering (DE), figurstøttet fullstendig Krebs-essay (SE) og integrerende kobling av
  veier/organer (IE) — operasjonalisert fra de åtte sensor-kredittreglene.
- **Eksamensbelegg:** Destillat av sensorkravene (analysen §4), stabile 2023→. Prioritet:
  perfekt (meta). Skal operasjonalisere kredittreglene i §2: reaksjonslikning komplett
  (F3-vaksine), «nevn to» = begge, lokalisering oppgis eksplisitt (F5-vaksine), sensor
  markerer hva som IKKE forventes (ikke overdriv detalj), figur teller for Krebs/glykolyse,
  ingen minuspoeng → svar alltid, alternative korrekte svar godtas.
- **Faktakontrakt:** de åtte kredittreglene; spørreord-/dybdetrappen for delessay («beskriv
  kort» vs. «gjør grundig rede for»); sjekklisten for en full-pott reaksjonslikning
  (substrat + produkt + koenzym + retning); «tegn figuren»-rådet for Krebs/glykolyse.
- **Mekanismekjeder:** ingen (teknikk).
- **Modellsvar:** samme delvei besvart på to nivåer («beskriv kort» vs. «gjør grundig rede
  for») med margnotat om hvor poengene faller; én reaksjonslikning ført komplett vs.
  ufullstendig (poengforskjellen synlig).
- **Drill:** «hva krever full pott her?» — gjenkjenn sjanger og kredittkrav.
- **Typiske feil:** `F3` (ufullstendig likning), `F5` (glemme lokalisering), svare på for
  lavt/høyt detaljnivå, la felt stå blankt.
- **Kvote:** 14 quiz / 12 flashcards.

### Del 1 — Karbohydrat- og sentralmetabolisme

#### Kapittel 1.1: Glykolysen
**id:** `nih-thp204-1-1` · **number:** 1.1 · **estimatedMinutes:** 65 · **prerequisites:** `nih-thp204-0-2`

- **Kapitteltype:** tema (sentralmetabolisme).
- **Description:** Glykolysens ti reaksjoner fra glukose til pyruvat, de tre irreversible
  enzymene (hexokinase, PFK-1, pyruvatkinase), netto ATP/NADH-utbytte og laktatdannelse —
  den nest viktigste veien (hovedessay H25, ellers kortsvar/delspørsmål).
- **Eksamensbelegg:** Glykolyse **4/5** (hovedessay `SE` i H25; ellers `K1`/`K2R`/`DE`).
  De tre irreversible enzymene + regulering resirkuleres som kortsvar. Prioritet: perfekt.
- **Faktakontrakt:** hexokinase/glukokinase (glukose + ATP → G6P + ADP; glukokinase i
  lever/pankreas β-celler); PFK-1 (F6P + ATP → F1,6BP + ADP); aldolase (F1,6BP → GAP +
  DHAP); GAPDH (GAP + Pi + NAD⁺ → 1,3-BPG + NADH); enolase (2-fosfoglyserat → PEP);
  pyruvatkinase (PEP + ADP → pyruvat + ATP). **Tre irreversible: hexokinase, PFK-1,
  pyruvatkinase** (reguleringspunktene). Netto: 2 ATP + 2 NADH + 2 pyruvat per glukose;
  ved laktatgjæring (LDH, pyruvat + NADH → laktat + NAD⁺) netto **2 ATP, 0 NADH**.
  Lokalisering: **cytosol**. Notér: THP202 anvender glykolyse/laktat på arbeidsfysiologi.
- **Mekanismekjeder:** (1) investerings- og gevinstfasen (2 ATP inn → 4 ATP + 2 NADH ut);
  (2) hvorfor laktatgjæring gjenoppretter NAD⁺ ved O₂-mangel.
- **Modellsvar:** «Gjør rede for glykolysen» som figurstøttet A-essay (`SE`, alle 10 trinn,
  enzymer, ATP-/NADH-regnskap, tre irreversible); reaksjons-kortsvar for PFK-1/enolase
  (`K2R`).
- **Drill:** enzym↔reaksjon (`K1`/`K2R`); de tre irreversible; netto ATP-regnskap;
  laktat-ATP.
- **Typiske feil:** `F6` (blande irreversible/reversible), `F3` (glemme NAD⁺/ADP i
  likninger), glemme at laktat gir 2 ATP / 0 NADH, feil lokalisering.
- **Kvote:** 28 quiz / 34 flashcards.

#### Kapittel 1.2: Sitronsyresyklusen (Krebs) — bokas storEssay
**id:** `nih-thp204-1-2` · **number:** 1.2 · **estimatedMinutes:** 80 · **prerequisites:** `nih-thp204-1-1`

- **Kapitteltype:** tema (høyeste prioritet — oppg. 5).
- **Description:** Hele sitronsyresyklusen med alle åtte metabolitter, alle enzymer, hvilke
  trinn fraspalter CO₂ og danner NADH/FADH₂, og reguleringen av de to dehydrogenasene
  (isositrat-DH og α-ketoglutarat-DH) — det aller viktigste temaet, den store essayen
  (oppg. 5) på nesten hver sitting. Figur oppfordres til.
- **Eksamensbelegg:** Krebs **5/5** — stor essay (`SE`, 16 p) på 4 av 5 sett, alltid til
  stede. Reguleringsfasiten (isositrat-DH + α-ketoglutarat-DH) gjenbrukes nesten ordrett.
  Dette alene er ~16 % av karakteren og nesten garantert. Prioritet: **perfekt (topp)**.
- **Faktakontrakt:** pyruvat → acetyl-CoA (PDH, i mitokondriematriks, danner NADH + CO₂;
  hemmes av NADH/acetyl-CoA); citrat-syntase (OAA + acetyl-CoA → citrat + CoA); akonitase
  (citrat → isositrat); **isositrat-DH** (→ α-ketoglutarat + **CO₂** + **NADH**; hemmes
  NADH/ATP, aktiveres ADP/Ca²⁺); **α-ketoglutarat-DH** (+ CoA + NAD⁺ → succinyl-CoA +
  **CO₂** + **NADH**; hemmes NADH/succinyl-CoA, aktiveres Ca²⁺); succinyl-CoA-syntetase
  (→ succinat + GTP); **succinat-DH** (→ fumarat + **FADH₂**; membranbundet, kompleks II);
  fumarase (→ malat); **malat-DH** (→ OAA + **NADH**). Per omdreining: **3 NADH, 1 FADH₂,
  1 GTP, 2 CO₂**. Lokalisering: **mitokondriematriks**. `(verifiser)` detaljer i
  Lippincott 8. utg.
- **Mekanismekjeder:** (1) hele syklusen metabolitt→enzym→metabolitt i rekkefølge, med CO₂-
  og NADH-/FADH₂-trinnene markert; (2) regulering av de to dehydrogenasene (aktivator/
  hemmer per enzym).
- **Modellsvar:** full figurstøttet A-storEssay (`SE`): alle metabolitter, alle enzymer,
  CO₂-/NADH-/FADH₂-trinn, GTP, begge dehydrogenasers regulering, lokalisering — nyskrevet.
- **Drill:** metabolittrekkefølge; hvilke trinn gir CO₂/NADH/FADH₂; regulering av de to
  dehydrogenasene (`K1`/`K2N`/`DE`); tegn syklusen.
- **Typiske feil:** `F4` (Krebs-regulering forvekslet), `F3` (glemme CO₂/NADH i
  dehydrogenasereaksjoner), feil metabolittrekkefølge, glemme mitokondrielokalisering,
  telle FADH₂ som NADH.
- **Kvote:** 30 quiz / 44 flashcards.

#### Kapittel 1.3: Elektrontransportkjeden og oksidativ fosforylering
**id:** `nih-thp204-1-3` · **number:** 1.3 · **estimatedMinutes:** 65 · **prerequisites:** `nih-thp204-1-2`

- **Kapitteltype:** tema (fast delessay).
- **Description:** Elektronenes vei fra NADH/FADH₂ gjennom komplekser I–IV til O₂, proton-
  pumpingen som bygger den elektrokjemiske gradienten, og ATP-syntasens bruk av gradienten
  til å lage ATP — et fast delessay-tema (5/5).
- **Eksamensbelegg:** ETC/oksidativ fosforylering/ATP-syntase **5/5** — fast delessay (`DE`)
  og kortsvar (`K1`). Prioritet: perfekt.
- **Faktakontrakt:** **NADH → kompleks I → koenzym Q → kompleks III → cytokrom c →
  kompleks IV → O₂ → H₂O**; FADH₂ mater inn ved kompleks II (→ Q). Kompleks I, III, IV
  pumper H⁺ til intermembranrommet (~10 H⁺ per NADH `(verifiser)`); **ATP-syntase**
  (kompleks V) bruker protongradienten (kjemiosmose): ADP + Pi → ATP. O₂ er endelig
  elektronakseptor. Lokalisering: **indre mitokondriemembran**. Kort: hemmere/frakoblere
  (bør kjenne til).
- **Mekanismekjeder:** (1) elektronveien kompleks for kompleks; (2) kjemiosmosen (H⁺ pumpes
  → gradient → ATP-syntase → ATP).
- **Modellsvar:** «Beskriv elektrontransportkjeden og ATP-dannelsen» (`DE`, full-pott
  momentliste: kjeden i rekkefølge + protonpumping + ATP-syntase + O₂ + lokalisering).
- **Drill:** komplekssekvens; hvor FADH₂ mater inn; hva ATP-syntase drives av; hva er
  endelig elektronakseptor (`K1`/`DE`).
- **Typiske feil:** `F3` (glemme O₂/H₂O), bytte rekkefølge på kompleksene, tro FADH₂ mater
  inn ved kompleks I, glemme at gradienten (ikke elektronene direkte) driver ATP-syntase.
- **Kvote:** 26 quiz / 32 flashcards.

#### Kapittel 1.4: Glykogenmetabolisme
**id:** `nih-thp204-1-4` · **number:** 1.4 · **estimatedMinutes:** 55 · **prerequisites:** `nih-thp204-1-1`

- **Kapitteltype:** tema (fast delessay).
- **Description:** Glykogensyntese (glukose → G6P → G1P → UDP-glukose → glykogen) med
  enzymnavn, og nedbrytning (glykogen fosforylase → G1P) — et fast delessay der sensor
  krever enzymnavnene men IKKE forgreningsmekanismen.
- **Eksamensbelegg:** Glykogensyntese **5/5** — fast delspørsmål (`DE`); enzymnavn kreves,
  forgrening IKKE forventet (sensor markerer det eksplisitt). Prioritet: perfekt.
- **Faktakontrakt:** **syntese:** glukose → (hexokinase) → G6P → (fosfoglukomutase) → G1P →
  (UDP-glukose-pyrofosforylase, bruker UTP) → **UDP-glukose** → (**glykogen syntase**) →
  glykogen. **Nedbrytning:** glykogen → (**glykogen fosforylase**) → G1P → G6P.
  Reguleringen (glykogen syntase aktiveres av insulin, hemmes ved fosforylering; fosforylase
  aktiveres ved fosforylering via PKA/adrenalin/glukagon) — kobles til Del 4. Lokalisering:
  **cytosol** (lever/muskel). «Bør kjenne til»: forgreningsenzym (ikke kjernekrav).
- **Mekanismekjeder:** (1) syntesekjeden med enzymnavn i rekkefølge; (2) fosforylerings-
  bryteren (syntese av vs. nedbrytning).
- **Modellsvar:** «Beskriv glykogensyntesen fra glukose» (`DE`, full-pott: alle mellomtrinn
  + enzymnavn; markér at forgrening ikke kreves).
- **Drill:** rekkefølge glukose→glykogen med enzymer; hvilket enzym bryter ned; UTP vs. ATP-
  rollen (`K1`/`K2R`/`DE`).
- **Typiske feil:** glemme UDP-glukose-mellomtrinnet, feil enzymnavn (syntase vs.
  fosforylase), overforklare forgrening (ikke krevd), `F3`.
- **Kvote:** 24 quiz / 30 flashcards.

#### Kapittel 1.5: Glukoneogenese og fruktose-2,6-bisfosfat-bryteren
**id:** `nih-thp204-1-5` · **number:** 1.5 · **estimatedMinutes:** 60 · **prerequisites:** `nih-thp204-1-1`

- **Kapitteltype:** tema.
- **Description:** Nydannelse av glukose fra laktat, glyserol og alanin (glukagon-styrt), og
  den bifunksjonelle bryteren fruktose-2,6-bisfosfat som avgjør retningen mellom glykolyse
  og glukoneogenese.
- **Eksamensbelegg:** Glukoneogenese **3/5** (`K2N`/`DE`); **fruktose-2,6-bisfosfat 4/5**
  (nøkkelbryter, `K1`/`DE`). Prioritet: perfekt (F2,6BP) / kunne (glukoneogenese-detalj).
- **Faktakontrakt:** substrater: **laktat, glyserol, alanin** (og andre aminosyrer);
  glukagon-styrt, i lever (+ nyrebark); omgår de tre irreversible glykolyseenzymene
  (pyruvatkarboksylase → PEP-karboksykinase; FBPase-1; glukose-6-fosfatase). **Fruktose-
  2,6-bisfosfat**: dannes av **PFK-2** (bifunksjonelt enzym PFK-2/FBPase-2, PKA-regulert);
  **aktiverer PFK-1** (glykolyse↑) og **hemmer FBPase-1** (glukoneogenese↓); **insulin↑,
  glukagon↓** F2,6BP. Lokalisering: cytosol (lever).
- **Mekanismekjeder:** (1) hvordan F2,6BP vipper flyten mot glykolyse; (2) hvordan glukagon
  (via PKA) senker F2,6BP og vrir mot glukoneogenese.
- **Modellsvar:** «Forklar fruktose-2,6-bisfosfats rolle» (`DE`: dannelse + de to
  effektene + hormonell kontroll); «Nevn to substrater for glukoneogenese» (`K2N`).
- **Drill:** substrater (`K2N`); F2,6BP-retning på PFK-1/FBPase-1 (`K1`); insulin/glukagon-
  effekt på F2,6BP.
- **Typiske feil:** `F7` (feil retning F2,6BP), blande PFK-1 og PFK-2, glemme glukagon↓/
  insulin↑, glemme leverlokalisering.
- **Kvote:** 24 quiz / 28 flashcards.

#### Kapittel 1.6: Enzymkinetikk og bioenergetikk
**id:** `nih-thp204-1-6` · **number:** 1.6 · **estimatedMinutes:** 50 · **prerequisites:** `nih-thp204-0-2`

- **Kapitteltype:** tema (faktabatteri).
- **Description:** KM, Vmax, koenzym, og Gibbs fri energi (eksergon/endergon, favorabel/
  ikke-favorabel reaksjon) — de rene enzym-/energikortsvarene som resirkuleres hver sitting.
- **Eksamensbelegg:** KM/Vmax **5/5** som kortsvar (`K1`); favorabel/ikke-favorabel reaksjon
  (Gibbs) fast `K1`; koenzym fast `K1`. Prioritet: perfekt (rene poeng i oppg. 1).
- **Faktakontrakt:** **KM** = substratkonsentrasjon som gir ½ Vmax = mål på **affinitet**
  (*lav* KM = *høy* affinitet); **Vmax** = maksimal reaksjonshastighet ved metning;
  **koenzym** = ikke-protein hjelpemolekyl et enzym trenger (f.eks. NAD⁺, CoA); **Gibbs
  fri energi** ΔG: **eksergon** (ΔG < 0, favorabel/spontan) vs. **endergon** (ΔG > 0, ikke-
  favorabel); kobling til ATP-hydrolyse driver endergone reaksjoner. Enkelt: enzymer senker
  aktiveringsenergi, endrer ikke ΔG.
- **Mekanismekjeder:** (1) hvorfor lav KM = høy affinitet; (2) hvordan ATP-kobling driver en
  endergon reaksjon.
- **Modellsvar:** «Hva er KM?» / «Er reaksjonen favorabel?» som kanoniske `K1`-svar; kort
  begrunnet forskjell KM vs. Vmax.
- **Drill:** KM-definisjon (`K1`, F2-vaksine); eksergon/endergon; koenzym-eksempler.
- **Typiske feil:** `F2` (KM = Vmax-forveksling; lav/høy affinitet snudd), tro enzym endrer
  ΔG, blande koenzym/kofaktor (bør kjenne til-skillet).
- **Kvote:** 22 quiz / 26 flashcards.

### Del 2 — Lipidmetabolisme

#### Kapittel 2.1: β-oksidasjon og fettsyremetabolisme
**id:** `nih-thp204-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `nih-thp204-1-3`

- **Kapitteltype:** tema (fast delessay).
- **Description:** β-oksidasjonens fire enzymtrinn som spalter av acetyl-CoA og danner
  FADH₂ + NADH i mitokondriene, CPT-1-porten (hemmet av malonyl-CoA), og triglyserid-/
  fettsyrestruktur — et fast «beskriv kort»-delessay (5/5) med identisk fasit hvert år.
- **Eksamensbelegg:** β-oksidasjon **5/5** — fast delspørsmål i oppg. 3 (`DE`, «beskriv
  kort»); triglyserid-/fettsyrefakta som `K1`. Prioritet: perfekt.
- **Faktakontrakt:** **β-oksidasjon**: fire enzymtrinn per runde (oksidasjon → hydrering →
  oksidasjon → tiolytisk spalting) spalter av **acetyl-CoA** og danner **FADH₂ + NADH**;
  foregår i **mitokondriematriks**; **CPT-1** styrer inngangen (transporterer langkjedede
  fettsyrer inn, **hemmes av malonyl-CoA** → kobler til lipogenese). Acetyl-CoA går inn i
  Krebs. **Triglyserid** = glyserol + 3 fettsyrer (esterbinding); **mettet** (ingen
  dobbeltbinding) vs. **flerumettet** (flere dobbeltbindinger); palmitat = C16 mettet.
- **Mekanismekjeder:** (1) én β-oksidasjonsrunde (4 trinn → acetyl-CoA + FADH₂ + NADH);
  (2) CPT-1-porten og malonyl-CoA-hemmingen (hvorfor syntese og nedbrytning ikke går
  samtidig).
- **Modellsvar:** «Beskriv kort β-oksidasjonen» (`DE`, full-pott: 4 trinn, produkter,
  lokalisering, CPT-1) — modellert på den resirkulerte fasiten.
- **Drill:** produkter per runde (acetyl-CoA/FADH₂/NADH); hvor foregår det; hva hemmer
  CPT-1; triglyseridoppbygning (`K1`/`DE`).
- **Typiske feil:** `F5` (glemme mitokondrielokalisering), `F3` (glemme FADH₂/NADH), glemme
  CPT-1/malonyl-CoA-porten, blande mettet/umettet.
- **Kvote:** 26 quiz / 32 flashcards.

#### Kapittel 2.2: Ketonlegemer
**id:** `nih-thp204-2-2` · **number:** 2.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-thp204-2-1`

- **Kapitteltype:** tema (fast delessay).
- **Description:** Dannelse av ketonlegemer fra acetyl-CoA i leveren (2 acetyl-CoA →
  acetoacetat + β-hydroksybutyrat), og deres rolle som energikilde for hjernen under faste
  — dannelse + funksjon + faste-kobling er fast (5/5).
- **Eksamensbelegg:** Ketonlegemer **5/5** — dannelse + funksjon + faste-kobling (`DE`/
  `K1`/`K2N`). Prioritet: perfekt.
- **Faktakontrakt:** **2 acetyl-CoA → acetoacetyl-CoA → (HMG-CoA) → acetoacetat +
  β-hydroksybutyrat** (+ aceton); dannes i **lever** (mitokondrier); brukes som energi av
  **hjerne, hjerte, muskel** under faste — men **ikke av lever selv** (mangler enzymet) og
  **ikke av erytrocytter** (ingen mitokondrier). Kobling til faste/diabetes type 1
  (ketoacidose). `(verifiser)` HMG-CoA-mellomtrinnet mot Lippincott.
- **Mekanismekjeder:** (1) dannelseskjeden fra 2 acetyl-CoA; (2) hvorfor lever lager men
  ikke bruker ketonlegemer (organspesifikk).
- **Modellsvar:** «Hvordan dannes ketonlegemer, og hva brukes de til?» (`DE`: dannelse i
  lever + hvem som bruker dem + faste-rolle); «Kan lever oksidere ketonlegemer? Nei» (`K1`).
- **Drill:** dannelseskjede; hvor dannes de; hvem bruker / bruker ikke dem (`K1`, F9-vaksine).
- **Typiske feil:** `F9` (tro lever/erytrocytt bruker ketonlegemer), glemme leverlokalisering
  for dannelse, `F8` (koble til feil diabetestype).
- **Kvote:** 22 quiz / 28 flashcards.

#### Kapittel 2.3: Lipolyse og de novo lipogenese
**id:** `nih-thp204-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** `nih-thp204-2-1`

- **Kapitteltype:** tema.
- **Description:** Fettnedbrytning i fettvev (ATGL, HSL, MAGL; adrenalin→cAMP→PKA→HSL) og
  fettsyresyntese (acetyl-CoA → malonyl-CoA via ACC → fettsyresyntase → palmitat, med
  NADPH) — lipolyse er fast delspørsmål (4/5), lipogenese «kunne» (2/5).
- **Eksamensbelegg:** Lipolyse **4/5** (`DE`); de novo lipogenese **2/5** (`DE`/`K1`, kunne).
  Prioritet: perfekt (lipolyse) / kunne (lipogenese).
- **Faktakontrakt:** **lipolyse:** triglyserid brytes av **ATGL → HSL → MAGL** til glyserol
  + 3 frie fettsyrer; **adrenalin → cAMP → PKA → fosforylerer/aktiverer HSL** (insulin
  hemmer). **De novo lipogenese:** acetyl-CoA → (**ACC**, hastighetsbestemmende) →
  **malonyl-CoA** → (**fettsyresyntase**) → **palmitat** (C16); krever **NADPH** (fra
  pentosefosfatveien); i **cytosol** (lever/fettvev); malonyl-CoA hemmer CPT-1 (kobling til
  β-oksidasjon). `(verifiser)` MAGL-detaljen.
- **Mekanismekjeder:** (1) lipolyse-kaskaden adrenalin→…→HSL→frie fettsyrer; (2) lipogenese
  fra acetyl-CoA til palmitat med ACC som bryter.
- **Modellsvar:** «Beskriv lipolysen og dens regulering» (`DE`: ATGL/HSL/MAGL + adrenalin→
  cAMP→PKA→HSL); kort de novo lipogenese-oversikt.
- **Drill:** lipolyse-enzymene + hormonell aktivering; ACC/malonyl-CoA/palmitat-kjeden;
  NADPH-behovet (`K1`/`DE`).
- **Typiske feil:** glemme adrenalin→PKA-koblingen til HSL, `F1` (kinase/fosfatase i
  HSL-regulering), tro lipogenese krever NADH (det er NADPH), glemme cytosol-lokalisering.
- **Kvote:** 22 quiz / 26 flashcards.

### Del 3 — Protein- og nitrogenmetabolisme

#### Kapittel 3.1: Aminosyrer og proteinstruktur
**id:** `nih-thp204-3-1` · **number:** 3.1 · **estimatedMinutes:** 45 · **prerequisites:** `nih-thp204-0-2`

- **Kapitteltype:** tema (faktabatteri).
- **Description:** Proteinets strukturnivåer (primær/sekundær/tertiær/kvartær),
  peptidbinding vs. glykosidbinding, og de forgrenede aminosyrene (leucin, isoleucin,
  valin) — de rene protein-kortsvarene i oppg. 1–2.
- **Eksamensbelegg:** Proteinstruktur + forgrenede aminosyrer + peptid-/glykosidbinding som
  faste `K1`/`K2N` (proteinstruktur 4/5 `(verifiser)`). Prioritet: perfekt (rene poeng).
- **Faktakontrakt:** **primærstruktur** = aminosyrerekkefølge; **sekundær** = α-heliks /
  β-plate (H-bindinger i ryggraden); **tertiær** = 3D-folding; **kvartær** = flere
  subenheter; **peptidbinding** (aminosyre–aminosyre) vs. **glykosidbinding** (sukker–
  sukker); **forgrenede aminosyrer: leucin, isoleucin, valin**; aminosyre = generell
  byggestein (amino- + karboksylgruppe). «Er tryptofan en aminosyre? Ja» (typisk `K1`).
- **Mekanismekjeder:** (1) fra primær til kvartær struktur (hva bestemmer hva).
- **Modellsvar:** «Nevn to forgrenede aminosyrer» (`K2N`); «Hva er primærstruktur?» (`K1`);
  peptid- vs. glykosidbinding kort.
- **Drill:** strukturnivå↔definisjon; forgrenede AA (`K2N`); bindingstype (`K1`).
- **Typiske feil:** blande sekundær/tertiær, feil bindingstype, glemme én av de tre
  forgrenede AA.
- **Kvote:** 20 quiz / 26 flashcards.

#### Kapittel 3.2: Ureasyklusen og nitrogenmetabolisme
**id:** `nih-thp204-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-thp204-3-1`

- **Kapitteltype:** tema (fast delessay).
- **Description:** Ureasyklusen i leveren — hvordan nitrogen fra aminosyrenedbrytning (via
  karbamoylfosfat og aspartat) blir til urea, med arginase som spalter urea fra arginin —
  et fast delspørsmål (5/5).
- **Eksamensbelegg:** Ureasyklus **5/5** — fast delspørsmål eller integrert i protein-
  metabolisme (`DE`/`K1`). Prioritet: perfekt.
- **Faktakontrakt:** foregår i **lever** (dels mitokondrie, dels cytosol); nitrogen kommer
  fra **karbamoylfosfat** (første N) + **aspartat** (andre N), kanaliseres via **glutamat**;
  syklusen: ornitin + karbamoylfosfat → citrullin → (+ aspartat) → argininosuccinat →
  arginin + fumarat → (**arginase**) → **urea + ornitin**. Sluttproduktet **urea**
  skilles ut i urin. `(verifiser)` mellomtrinnene mot Lippincott; kjernekravet er lever-
  lokalisering + N-kildene + arginase-spaltingen.
- **Mekanismekjeder:** (1) N inn (karbamoylfosfat + aspartat) → syklus → urea ut via
  arginase; (2) hvorfor syklusen ligger i lever (ammoniakkavgiftning).
- **Modellsvar:** «Beskriv ureasyklusen: hvor foregår den, hvor kommer nitrogenet fra, og
  hvilket enzym spalter urea?» (`DE`: lever + karbamoylfosfat/aspartat + arginase).
- **Drill:** lokalisering; N-kildene (`K2N`); arginase-produktet; sluttproduktet
  (`K1`/`DE`).
- **Typiske feil:** `F5` (glemme lever), glemme én av de to N-kildene, feil enzym for
  urea-spalting, blande ornitin/citrullin/arginin-rekkefølgen.
- **Kvote:** 22 quiz / 28 flashcards.

### Del 4 — Hormonell og enzymatisk regulering

#### Kapittel 4.1: Enzymregulering — kinaser, fosfataser og de fire prinsippene
**id:** `nih-thp204-4-1` · **number:** 4.1 · **estimatedMinutes:** 50 · **prerequisites:** `nih-thp204-1-6`

- **Kapitteltype:** tema (allestedsnærværende regulering).
- **Description:** De fire måtene enzymaktivitet reguleres på (kovalent/fosforylering,
  allosterisk, ekspresjon, translokasjon) og det klassiske kinase-vs-fosfatase-skillet —
  gjengangere i oppg. 1–2 nesten hver sitting.
- **Eksamensbelegg:** Enzymregulering **5/5** (oppg. 2, «nevn 3 reguleringsmåter», `K2N`);
  fosfataser/kinaser **5/5** (oppg. 1, `K1`). Prioritet: perfekt.
- **Faktakontrakt:** fire reguleringsmåter: **(1) kovalent modifisering** (fosforylering —
  reversibel, rask), **(2) allosterisk** (effektor binder utenfor aktivt sete), **(3)
  endret ekspresjon** (mer/mindre enzym; treg), **(4) translokasjon** (flytting mellom
  kompartementer, f.eks. GLUT4). **Kinase** = setter *på* fosfat (fra ATP); **fosfatase**
  = *fjerner* fosfat. Fosforylering kan aktivere ELLER hemme et gitt enzym (kontekst-
  avhengig — f.eks. aktiverer glykogenfosforylase, hemmer glykogen syntase).
- **Mekanismekjeder:** (1) fosforylering/defosforylering som på/av-bryter; (2) hvorfor
  samme modifisering kan ha motsatt effekt på to enzymer.
- **Modellsvar:** «Nevn tre måter enzymaktivitet reguleres på» (`K2N`, ≥3 av de fire);
  «Hvilken funksjon har fosfataser?» (`K1`).
- **Drill:** de fire prinsippene (`K2N`); kinase vs. fosfatase (`K1`, F1-vaksine);
  eksempler på hver.
- **Typiske feil:** `F1` (kinase/fosfatase snudd), tro fosforylering alltid aktiverer,
  glemme translokasjon som egen mekanisme.
- **Kvote:** 24 quiz / 30 flashcards.

#### Kapittel 4.2: cAMP-kaskaden — PKA, adrenalin og glukagon
**id:** `nih-thp204-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-thp204-4-1`

- **Kapitteltype:** tema (fast kaskade).
- **Description:** Den klassiske cAMP-kaskaden: glukagon (lever) og adrenalin (muskel,
  β-reseptor) → adenylatsyklase → cAMP → PKA, og hvilke enzymer PKA fosforylerer
  (glykogenfosforylasekinase, HSL, pyruvatkinase, PFK-2/FBPase-2) — 5/5.
- **Eksamensbelegg:** PKA/cAMP **5/5** (`K1`: «hva aktiverer PKA», «hvilke enzymer
  fosforylerer PKA»); adrenalin/glukagon→cAMP→PKA→glykogenfosforylase(kinase) **5/5**
  (`DE`). Prioritet: perfekt.
- **Faktakontrakt:** **glukagon** (lever) / **adrenalin** (muskel, β-reseptor) binder GPCR
  → **adenylatsyklase** → **cAMP** → aktiverer **PKA** (protein kinase A) → PKA fosforylerer
  **glykogenfosforylasekinase** (→ glykogennedbrytning↑), **HSL** (→ lipolyse↑),
  **pyruvatkinase** (→ hemmes), **PFK-2/FBPase-2** (→ F2,6BP↓). Nettoeffekt: mobiliserer
  energi (glykogen ned, fett ned, glykolyse ned i lever). `(verifiser)` det fulle
  substratbatteriet mot Lippincott.
- **Mekanismekjeder:** (1) hele kaskaden hormon→GPCR→adenylatsyklase→cAMP→PKA→målenzym;
  (2) hvorfor adrenalin i muskel og glukagon i lever gir «samme» kaskade ulikt sted.
- **Modellsvar:** «Beskriv hvordan adrenalin fremmer glykogennedbrytning» (`DE`: kaskaden
  til glykogenfosforylasekinase); «Nevn to enzymer PKA fosforylerer» (`K2N`).
- **Drill:** kaskaderekkefølge; hva aktiverer PKA; PKA-substrater (`K1`/`K2N`/`DE`).
- **Typiske feil:** `F1` (kinase/fosfatase i kaskaden), hoppe over adenylatsyklase/cAMP,
  glemme reseptorforskjellen (glukagon lever / adrenalin muskel).
- **Kvote:** 26 quiz / 32 flashcards.

#### Kapittel 4.3: Insulin — signalvei og GLUT4-translokasjon
**id:** `nih-thp204-4-3` · **number:** 4.3 · **estimatedMinutes:** 60 · **prerequisites:** `nih-thp204-4-1`

- **Kapitteltype:** tema (fast delessay/kortsvar).
- **Description:** Insulinreseptoren som tyrosinkinase (RTK → IRS → PI3K) og hvordan
  signalet fører til GLUT4-translokasjon i muskel og fettvev — samt insulins øvrige
  metabolske effekter. Et av de sikreste temaene (5/5).
- **Eksamensbelegg:** Insulin→GLUT4 **5/5** (`K1`/`DE`); GLUT4-vev + SGLT-1 som `K1`.
  Prioritet: perfekt.
- **Faktakontrakt:** insulinreseptoren er en **reseptor-tyrosinkinase (RTK)** → autofosfo-
  rylering → **IRS** → **PI3K** → signalkaskade → **GLUT4-translokasjon** (vesikler med
  GLUT4 flyttes til cellemembranen → glukoseopptak). GLUT4-vev: **skjelettmuskel, fettvev,
  hjerte**. Effekten er *translokasjon*, ikke økt syntese. Insulin ellers: aktiverer
  glykogen syntase og PFK-2 (F2,6BP↑), hemmer lipolyse og hepatisk glukoneogenese. **SGLT-1**
  = natrium-koblet glukosetransport (tarm/nyre — kontrast til fasilitert GLUT). `(verifiser)`
  IRS/PI3K-mellomtrinnene mot Lippincott.
- **Mekanismekjeder:** (1) insulin→RTK→IRS→PI3K→GLUT4-translokasjon; (2) hvorfor GLUT4-
  vevene er insulinavhengige mens f.eks. hjerne/lever ikke er det.
- **Modellsvar:** «Beskriv hvordan insulin øker glukoseopptaket i muskel» (`DE`: RTK→…→
  GLUT4-translokasjon); «I hvilke vev finnes GLUT4?» (`K1`).
- **Drill:** signalveien i rekkefølge; reseptortype; translokasjon vs. syntese; GLUT4-vev;
  SGLT-1 vs. GLUT (`K1`/`DE`).
- **Typiske feil:** `F10` (glemme RTK / si «økt syntese» i stedet for translokasjon),
  glemme ett GLUT4-vev, blande GLUT4 og SGLT-1.
- **Kvote:** 26 quiz / 32 flashcards.

#### Kapittel 4.4: Insulin- og glukagonsekresjon
**id:** `nih-thp204-4-4` · **number:** 4.4 · **estimatedMinutes:** 50 · **prerequisites:** `nih-thp204-4-3`

- **Kapitteltype:** tema.
- **Description:** Hvordan β-cellen frigjør insulin når blodsukkeret stiger (glukose→ATP→
  lukket K⁺-kanal→depolarisering→Ca²⁺→eksocytose) og hvordan glukagon-sekresjonen styres
  motsatt — den sekresjonsmekanismen oppg. 6 ofte bygger på.
- **Eksamensbelegg:** Insulinsekresjon-mekanismen inngår i integrerende oppg. 6 og som
  `K1`/`DE`; leptin/ghrelin (sult/metthet) fast `K1`. Prioritet: perfekt (bygger oppg. 6).
- **Faktakontrakt:** **insulinsekresjon:** glukose inn i β-celle → metabolisme → **↑ATP** →
  lukker **K⁺-ATP-kanaler** → **depolarisering** → **Ca²⁺-innstrøm** → **eksocytose** av
  insulin. Aminosyrer stimulerer; adrenalin hemmer. **Glukagonsekresjon:** stimuleres av
  lav glukose, høye aminosyrer, katekolaminer; hemmes av høy glukose/insulin. **Leptin**
  (metthet, fra fettvev) / **ghrelin** (sult, fra magesekk). Kobler til Del 5s helkropps-
  integrasjon. `(verifiser)` katekolamin-effekten mot Lippincott.
- **Mekanismekjeder:** (1) glukose→ATP→K⁺-kanal→depolarisering→Ca²⁺→eksocytose; (2) den
  motsatte glukagon-logikken.
- **Modellsvar:** «Beskriv hvordan glukose utløser insulinsekresjon» (`DE`, full kjede);
  «Hva stimulerer glukagonsekresjon?» (`K2N`).
- **Drill:** sekresjonskjeden i rekkefølge; hva stimulerer/hemmer hver; leptin vs. ghrelin
  (`K1`/`DE`).
- **Typiske feil:** snu K⁺-kanal-logikken (den *lukkes*), glemme Ca²⁺-trinnet, bytte
  leptin/ghrelin, glemme at aminosyrer stimulerer begge.
- **Kvote:** 22 quiz / 26 flashcards.

### Del 5 — Integrerende fysiologi og sykdom

#### Kapittel 5.1: Insulin/glukagon-aksen — mett vs. faste
**id:** `nih-thp204-5-1` · **number:** 5.1 · **estimatedMinutes:** 60 · **prerequisites:** `nih-thp204-4-4`

- **Kapitteltype:** tema (integrerende — oppg. 6).
- **Description:** Hvordan insulin (mett) og glukagon (faste) sammen dirigerer hele
  kroppens energiflyt mellom lever, muskel og fettvev — grunnmuren for den integrerende
  essayen (oppg. 6).
- **Eksamensbelegg:** Insulin/glukagon-integrasjon er ett av de faste oppg. 6-temaene (`IE`,
  16 p); V26 samlet syntese + sekresjon + signalering av begge i én. Prioritet: perfekt.
- **Faktakontrakt:** **mett/absorptiv (insulin dominerer):** glukoseopptak (GLUT4), glykogen-
  syntese, lipogenese, proteinsyntese; lipolyse og glukoneogenese hemmes. **Faste/post-
  absorptiv (glukagon dominerer):** glykogennedbrytning → glukoneogenese → lipolyse →
  ketogenese; leveren eksporterer glukose. Organroller: **lever** (glukosebuffer,
  glukoneogenese, ketogenese), **muskel** (bruker glukose/fettsyrer, lagrer glykogen lokalt),
  **fettvev** (lagrer/frigjør fett). Bygger på Del 1–4.
- **Mekanismekjeder:** (1) mett→faste-overgangen som hormonell vippe; (2) hvilke veier
  skrus av/på i hvert organ.
- **Modellsvar:** integrerende `IE`-essay «Gjør rede for insulin/glukagon-aksens styring av
  energiomsetningen ved måltid og faste» (kobler minst lever/muskel/fettvev + de riktige
  veiene på/av).
- **Drill:** hvilket hormon dominerer når; hvilke veier på/av i mett vs. faste; organroller
  (`K1`/`DE`/`IE`).
- **Typiske feil:** `F7`/`F10` (regulering snudd), beskrive bare én vei uten integrasjon
  (oppg. 6 krever flere organer), glemme leverens sentrale rolle.
- **Kvote:** 22 quiz / 26 flashcards.

#### Kapittel 5.2: Faste over tid og substratbruk per organ
**id:** `nih-thp204-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-thp204-5-1`

- **Kapitteltype:** tema (integrerende — oppg. 6).
- **Description:** Hvordan substratbruken skifter time for time og dag for dag under faste
  (glykogen → glukoneogenese → ketose), og hvordan hvert organ tilpasser seg — et fast
  oppg. 6-tema (3/5).
- **Eksamensbelegg:** Faste-metabolisme **3/5** — stor essay (`IE`) eller delspørsmål.
  Prioritet: perfekt (kjernen i oppg. 6 når faste er tema).
- **Faktakontrakt:** tidsforløp: **(1) tidlig faste:** leverglykogen brytes ned (holder
  blodsukker noen timer); **(2) glukoneogenese:** laktat/glyserol/alanin → glukose;
  **(3) forlenget faste/ketose:** økt lipolyse → β-oksidasjon → ketogenese; hjernen går
  gradvis over på **ketonlegemer** (sparer glukose/protein). Organspesifikt: **erytrocytter**
  må ha glukose (ingen mitokondrier); **hjernen** går på ketonlegemer under lang faste;
  **lever** driver glukoneogenese/ketogenese men oksiderer *ikke* ketonlegemer selv.
  Bygger på Del 1.5, 2.1–2.2, 4.
- **Mekanismekjeder:** (1) substratrekkefølgen glykogen→glukoneogenese→ketose over tid;
  (2) hvorfor ketonlegemer sparer glukose til erytrocytter.
- **Modellsvar:** integrerende `IE`-essay «Gjør rede for kroppens metabolske tilpasning ved
  faste over flere dager» (tidsforløp + organspesifikk substratbruk).
- **Drill:** substratrekkefølgen over tid; hvilket organ bruker hva når (`K1`/`IE`,
  F9-vaksine).
- **Typiske feil:** `F9` (organspesifikk substratbruk feil — erytrocytt/hjerne/lever), feil
  rekkefølge (ketose før glukoneogenese), glemme at lever ikke bruker egne ketonlegemer.
- **Kvote:** 22 quiz / 24 flashcards.

#### Kapittel 5.3: Diabetes og overvekt
**id:** `nih-thp204-5-3` · **number:** 5.3 · **estimatedMinutes:** 60 · **prerequisites:** `nih-thp204-5-1`

- **Kapitteltype:** tema (integrerende — oppg. 6).
- **Description:** Diabetes type 1 (autoimmun β-celledestruksjon) vs. type 2 (insulin-
  resistens), diagnosekriteriene, ubehandlet type 1s metabolske konsekvenser i lever/
  muskel/fettvev, og overvekt/energibalanse — de resterende faste oppg. 6-temaene.
- **Eksamensbelegg:** Diabetes **3/5** (stor essay `IE` når den kommer); overvekt **2/5**
  (`IE`-del, kunne). Prioritet: perfekt (diabetes) / kunne (overvekt).
- **Faktakontrakt:** **type 1** = autoimmun **β-celledestruksjon** → insulinmangel (ung
  debut); **type 2** = **insulinresistens** (ofte overvekt). **Diagnose:** fastende glukose
  **≥ 7,0 mmol/L**; HbA1c **≥ 6,5 % / ≥ 48 mmol/mol** `(verifiser mot gjeldende retningslinje)`.
  **Ubehandlet type 1:** ingen insulin → ukontrollert glukoneogenese + lipolyse + ketogenese
  → **ketoacidose** og hyperglykemi (lever lager glukose/ketoner, muskel/fettvev bryter ned).
  **Overvekt:** positiv energibalanse; vektreduksjon via kosthold + trening; **BMI = vekt /
  (høyde i m)²**; leptin/ghrelin-akse. Behandling type 1 = insulin; type 2 = livsstil ±
  medikamenter.
- **Mekanismekjeder:** (1) hvorfor ubehandlet type 1 gir ketoacidose (insulinmangel →
  uhemmet katabolisme); (2) energibalanse ved overvekt.
- **Modellsvar:** integrerende `IE`-essay «Gjør rede for de metabolske konsekvensene av
  ubehandlet type 1-diabetes i lever, muskel og fettvev» (kobler flere organer + veier).
- **Drill:** type 1 vs. type 2; diagnosekriterier; hvorfor type 1 gir ketoacidose; BMI
  (`K1`/`IE`, F8-vaksine).
- **Typiske feil:** `F8` (diabetestype forvekslet), tro type 2 gir uttalt ketoacidose,
  glemme å integrere organene i oppg. 6, feil diagnosegrenser.
- **Kvote:** 22 quiz / 26 flashcards.

### Del 6 — Eksamenstrening

> Tre sjanger-/feildrillkapitler (ett per svarlogikk: kortsvarsbatteri · mekanisme-
> delessay · Krebs-storEssay + integrerende essay) + tre komplette øvingseksamener i det
> faste seks-oppgaveformatet. Alle oppgaver NYSKREVNE. Full fasit + «Sensorblikket» per sett.

#### Kapittel 6.1: Kortsvarsbatteriet — drill av oppg. 1 og 2
**id:** `nih-thp204-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-thp204-5-3`

- **Kapitteltype:** sjanger-/feildrill (memoreringslaget).
- **Description:** Intensiv drill av de resirkulerte kortsvarene (`K1`/`K2R`/`K2N`) —
  reaksjonslikninger, faktadefinisjoner, «nevn to» og ja/nei — som utgjør 32 av 100 poeng.
- **Eksamensbelegg:** oppg. 1 (16 × 1 p) + oppg. 2 (8 × 2 p) resirkuleres nesten ordrett;
  reaksjonslikninger og gjengangere (fosfataser/kinaser, KM, forgrenede AA, PDH-hemmere,
  GLUT4-vev). Prioritet: perfekt (størst poengvolum).
- **Faktakontrakt:** samler kjernefaktaen fra Del 1–5 til ett kortsvars-repertoar; regelen
  om komplett reaksjonslikning og «to = full pott».
- **Modellsvar:** ett fullt nyskrevet oppg. 1-sett (16 K1) + oppg. 2-sett (8 K2) med fasit.
- **Drill:** blandet `K1`/`K2R`/`K2N` på tvers av alle veier (30–40 raske spørsmål).
- **Typiske feil:** `F1`, `F2`, `F3`, `F5` (de klassiske kortsvarsfellene).
- **Kvote:** 20 quiz / 10 flashcards.

#### Kapittel 6.2: Mekanisme-delessayene — drill av oppg. 3 og 4
**id:** `nih-thp204-6-2` · **number:** 6.2 · **estimatedMinutes:** 60 · **prerequisites:** `nih-thp204-6-1`

- **Kapitteltype:** sjanger-/feildrill (delessaylaget).
- **Description:** Drill av de åtte faste `DE`-delveiene (β-oksidasjon, glykogensyntese,
  ETC/ATP-syntase, insulin→GLUT4, ureasyklus, ketonlegemer, lipolyse, adrenalin/glukagon→
  glykogenfosforylase) som full-pott momentlister med riktig dybdenivå.
- **Eksamensbelegg:** oppg. 3–4 = 8 delessay à 4 p; de faste veiene har kjent, resirkulert
  fasit; sensor markerer hva som IKKE forventes. Prioritet: perfekt.
- **Faktakontrakt:** samler de åtte delveienes momentlister; regelen om «grundig, men ikke
  alle detaljer» + eksplisitt lokalisering.
- **Modellsvar:** to komplette delessay-sett (a–d) med momentliste-fasit og markering av
  hva sensor IKKE krever.
- **Drill:** «beskriv kort»-drill på hver av de åtte veiene (`DE`).
- **Typiske feil:** `F3`, `F4`, `F5`, `F10` (mekanismefellene); over-/underforklare detalj.
- **Kvote:** 20 quiz / 10 flashcards.

#### Kapittel 6.3: De store essayene — Krebs og det integrerende temaet
**id:** `nih-thp204-6-3` · **number:** 6.3 · **estimatedMinutes:** 65 · **prerequisites:** `nih-thp204-6-2`

- **Kapitteltype:** sjanger-/feildrill (essaylaget).
- **Description:** Drill av oppg. 5 (Krebs-storEssay, figurstøttet, komplett) og oppg. 6
  (integrerende `IE`: insulin/glukagon, diabetes, faste, overvekt) — de 32 poengene som
  skiller topp fra midt.
- **Eksamensbelegg:** oppg. 5 = Krebs (`SE`, 5/5); oppg. 6 = integrerende (`IE`, alltid).
  A–B krever komplett Krebs (begge dehydrogenasers regulering) + integrert oppg. 6.
  Prioritet: perfekt.
- **Faktakontrakt:** A-malen for Krebs-essayen (metabolitter/enzymer/CO₂/NADH/regulering/
  figur) + malen for hver oppg. 6-variant (integrer minst lever/muskel/fettvev).
- **Modellsvar:** én komplett figurstøttet Krebs-A-besvarelse + én integrerende oppg. 6-A-
  besvarelse (f.eks. ubehandlet type 1 over lever/muskel/fettvev).
- **Drill:** Krebs-momentdrill (`SE`) + integrerende essay-planlegging (`IE`).
- **Typiske feil:** `F4` (Krebs-regulering), `F8`/`F9` (integrerende feil), levere oppg. 6
  som én-vei-gjengivelse uten integrasjon, glemme figur.
- **Kvote:** 16 quiz / 10 flashcards.

#### Kapittel 6.4: Øvingseksamen 1 (komplett sett)
**id:** `nih-thp204-6-4` · **number:** 6.4 · **estimatedMinutes:** 70 · **prerequisites:** `nih-thp204-6-3`

- **Kapitteltype:** komplett øvingseksamen.
- **Description:** Ett nyskrevet komplett sett i det faste formatet (16 K1 · 8 K2 · 8 DE ·
  Krebs-SE · integrerende IE, sum 100 p, 3 t) med full fasit og Sensorblikket.
- **Eksamensbelegg:** speiler malen 5/5; oppg. 5 = Krebs, oppg. 6 = insulin/glukagon.
  Prioritet: perfekt (helhet + tidsdisiplin).
- **Faktakontrakt:** komplett fasit med poeng per oppgave; karaktergrensene.
- **Modellsvar:** hele settet med løsning + margnotater om poenghøsting.
- **Drill:** tidsstyrt gjennomgang (~30 min/oppgave).
- **Typiske feil:** feil tidsfordeling (bruke for lenge på kortsvar), hoppe over essay.
- **Kvote:** 10 quiz / 4 flashcards.

#### Kapittel 6.5: Øvingseksamen 2 (komplett sett)
**id:** `nih-thp204-6-5` · **number:** 6.5 · **estimatedMinutes:** 70 · **prerequisites:** `nih-thp204-6-3`

- **Kapitteltype:** komplett øvingseksamen.
- **Description:** Andre nyskrevne komplette sett i samme format, med oppg. 6 = diabetes/
  faste-varianten og (verifiser) oppg. 5 = Krebs eller glykolyse.
- **Eksamensbelegg:** speiler malen; varierer oppg. 6-tema (diabetes/faste) og evt. oppg. 5
  (glykolyse på 1/5). Prioritet: perfekt.
- **Faktakontrakt:** komplett fasit + karaktergrenser.
- **Modellsvar:** hele settet med løsning + Sensorblikket.
- **Drill:** tidsstyrt; øv integrerende oppg. 6 på et annet tema.
- **Typiske feil:** samme som 6.4; glemme integrasjon i oppg. 6.
- **Kvote:** 10 quiz / 4 flashcards.

#### Kapittel 6.6: Øvingseksamen 3 (komplett sett)
**id:** `nih-thp204-6-6` · **number:** 6.6 · **estimatedMinutes:** 70 · **prerequisites:** `nih-thp204-6-3`

- **Kapitteltype:** komplett øvingseksamen.
- **Description:** Tredje nyskrevne komplette sett, med oppg. 6 = overvekt/energibalanse-
  varianten, for å dekke alle fire integrerende temaene på tvers av de tre øvingssettene.
- **Eksamensbelegg:** speiler malen; oppg. 6 = overvekt. Prioritet: perfekt.
- **Faktakontrakt:** komplett fasit + karaktergrenser.
- **Modellsvar:** hele settet med løsning + Sensorblikket.
- **Drill:** tidsstyrt; øv overvekt/energibalanse som integrerende essay.
- **Typiske feil:** samme som 6.4–6.5.
- **Kvote:** 10 quiz / 4 flashcards.

---

## Kvotesammendrag (AUTORITATIV for alle senere faser)

| Del | Seksjonstittel | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|---|
| 0 | Eksamenskart | 2 | 24 | 22 | 0 (dekkes av øvingseksamenene) |
| 1 | Karbohydrat- og sentralmetabolisme | 6 | 154 | 194 | 4 |
| 2 | Lipidmetabolisme | 3 | 70 | 86 | 4 |
| 3 | Protein- og nitrogenmetabolisme | 2 | 42 | 54 | 4 |
| 4 | Hormonell og enzymatisk regulering | 4 | 98 | 120 | 4 |
| 5 | Integrerende fysiologi og sykdom | 3 | 66 | 76 | 4 |
| 6 | Eksamenstrening | 6 | 86 | 42 | 0 (= 3 øvingseksamener) |
| **Sum** | | **26** | **540** | **594** | **20 + 3 øvingseksamener** |

Summeringskontroll per del (quiz / flashcards):
- Del 0: 10+14=24 / 10+12=22
- Del 1: 28+30+26+24+24+22=154 / 34+44+32+30+28+26=194
- Del 2: 26+22+22=70 / 32+28+26=86
- Del 3: 20+22=42 / 26+28=54
- Del 4: 24+26+26+22=98 / 30+32+32+26=120
- Del 5: 22+22+22=66 / 26+24+26=76
- Del 6: 20+20+16+10+10+10=86 / 10+10+10+4+4+4=42
- **Totalt: 540 quiz (≥500 ✓) / 594 flashcards (≥500 ✓).**

**Tetthetsbegrunnelse (jf. PRODUKSJONSLOYPE «≥500 er GULV, ikke mål»):** THP204 er
**smalt men svært faktatungt** og eksamen er **helt uten hjelpemidler** — alt (reaksjons-
likninger, enzymnavn, metabolitter, lokalisering, reguleringskaskader) må sitte utenat.
Derfor er **flashcards skalert godt over gulvet (594)** etter NOKUT-AFB-lærdommen om høy
flashcard-tetthet i rene puggefag: hvert temakapittel har et tett kort-repertoar av
reaksjons-, enzym-, metabolitt- og reguleringskort. **Quiz (540)** ligger noe lavere fordi
faget er smalere (26 kapitler, ikke 40+) — quiz brukes på flervalg/sekvens/reaksjons-
gjenkjenning der det gir mest treningsverdi. Sentralmetabolismen (Del 1, med Krebs) og
reguleringen (Del 4) bærer mest, siden de dekker oppg. 5 + de fleste faste delessayene +
den allestedsnærværende reguleringen; eksamenstreningsdelen (Del 6) har lav flashcard-
kvote (drill, ikke ny fakta).

**Flashcard-profil:** reaksjons-, enzym-, metabolitt- og reguleringskort til pugg utenat —
enzym↔reaksjon (PFK-1 ↔ F6P + ATP → F1,6BP + ADP; citrat-syntase ↔ OAA + acetyl-CoA →
citrat), metabolitt↔vei↔lokalisering (Krebs i mitokondrie, glykolyse i cytosol, urea i
lever), reguleringspar (isositrat-DH: hemmes NADH/ATP, aktiveres ADP/Ca²⁺; F2,6BP:
aktiverer PFK-1 / hemmer FBPase-1), kaskadeledd↔rekkefølge (insulin→RTK→IRS→PI3K→GLUT4;
adrenalin→cAMP→PKA→HSL), nøkkeltall/ja–nei (KM = ½ Vmax; forgrenede AA = leu/ile/val;
diabetes fastende glukose ≥ 7,0 mmol/L; «lever oksiderer ketonlegemer? Nei»), og
kinase/fosfatase-vaksinekort. **Quiz-profil:** flervalg med nære distraktorer (kinase/
fosfatase, KM/Vmax, hexokinase/PFK-1/pyruvatkinase, type 1/type 2, GLUT4/SGLT-1, NADH/
FADH₂) + sekvensspørsmål (glykolysetrinn, Krebs-metabolittrekkefølge, ETC-komplekser,
insulinsignalvei, ureasyklus, fastens substratrekkefølge) + reaksjons-gjenkjenning
(substrat/produkt/koenzym) + lokaliseringsdrill (hvilket kompartement/organ).

---

## 4. Prøver

Fire prøver per temadel (Del 1–5 = **20 prøver**). Del 0 og Del 6 har ingen egen prøve
(Del 6s tre øvingseksamener dekker helheten i full eksamensform). Hver prøve speiler
eksamensmalen i miniatyr: en blanding av kortsvar (`K1`/`K2R`/`K2N`), mekanisme-delessay
(`DE`) og — der delen bærer det — en stor essay (`SE`/`IE`), med momentliste-fasit.
Omfang 20–40 min. Alle oppgaver NYSKREVNE. Prøvekapittel-id `nih-thp204-<del>-prove`,
chapterNumber `<del>.P` (jf. BYGGEKONTRAKT).

**Prøve-kvote Del 1:** 4 prøver: (1) *Glykolyse og enzymkinetikk* — de tre irreversible
enzymene + reaksjons-kortsvar + KM/Vmax (`K1`/`K2R`). (2) *Krebs-storEssay* — full syklus
med metabolitter/enzymer/CO₂/NADH + begge dehydrogenasers regulering, figur (`SE`).
(3) *ETC og glykogen* — komplekssekvens + glykogensyntesekjeden med enzymnavn (`DE`).
(4) *Glukoneogenese og F2,6BP* — substrater + F2,6BP-retning + insulin/glukagon (`K2N`/`DE`).

**Prøve-kvote Del 2:** 4 prøver: (1) *β-oksidasjon* — 4 trinn + produkter + CPT-1/malonyl-
CoA + lokalisering (`DE`). (2) *Ketonlegemer* — dannelse i lever + hvem bruker/bruker ikke
dem (`DE`/`K1`, F9). (3) *Lipolyse og lipogenese* — ATGL/HSL/MAGL + adrenalin→PKA→HSL +
ACC/palmitat/NADPH (`DE`). (4) *Blandet Del 2* — reaksjons-kortsvar + triglyseridstruktur.

**Prøve-kvote Del 3:** 4 prøver: (1) *Proteinstruktur* — primær/sekundær + forgrenede AA +
bindingstype (`K1`/`K2N`). (2) *Ureasyklus* — lever + karbamoylfosfat/aspartat + arginase
(`DE`). (3) *Nitrogen-integrasjon* — hvor N kommer fra og hva urea er (`K1`/`DE`).
(4) *Blandet Del 3* — kortsvarsbatteri protein/nitrogen.

**Prøve-kvote Del 4:** 4 prøver: (1) *Enzymregulering* — de fire prinsippene + kinase/
fosfatase (`K2N`/`K1`, F1). (2) *cAMP-kaskaden* — adrenalin/glukagon→cAMP→PKA→målenzymer
(`DE`). (3) *Insulin→GLUT4* — RTK→IRS→PI3K→translokasjon + GLUT4-vev + SGLT-1 (`DE`/`K1`,
F10). (4) *Sekresjon* — glukose→ATP→K⁺→Ca²⁺→eksocytose + glukagon-motsats + leptin/ghrelin.

**Prøve-kvote Del 5:** 4 prøver: (1) *Insulin/glukagon-aksen* — mett vs. faste, veier på/av
per organ (`IE`). (2) *Faste over tid* — glykogen→glukoneogenese→ketose + organsubstrat
(`IE`, F9). (3) *Diabetes* — type 1 vs. 2 + diagnose + ubehandlet type 1 over lever/muskel/
fettvev (`IE`, F8). (4) *Overvekt og energibalanse* — BMI + leptin/ghrelin + integrasjon.

### Komplette øvingseksamener (3 — kapitlene 6.4–6.6)

Tre nyskrevne komplette sett i det faste seks-oppgaveformatet (16 K1 · 8 K2 · 8 DE ·
Krebs-`SE` · integrerende `IE`, sum 100 p, 3 t uten hjelpemidler). Oppg. 6 varieres over
settene for å dekke alle fire integrerende temaene: 6.4 = insulin/glukagon, 6.5 = diabetes/
faste, 6.6 = overvekt. Full fasit med poeng per oppgave + karaktergrensene (A 90 %…E 40 %)
+ «Sensorblikket» per sett. Begrunnelse: fordi malen er så fast, gir tre tidsstyrte
gjennomkjøringer den avgjørende treningen i poenghøsting og tidsdisiplin (~30 min/oppgave).

---

## 5. Studieguide-disposisjon

1. **Seks oppgaver, to lag** — oppgavemalen (16 K1 · 8 K2 · 8 DE · Krebs-SE · integrerende
   IE), de to lagene (memorering + essay), sensorkravene (komplett reaksjonslikning, «nevn
   to», lokalisering, figur) og «svar alltid — ingen minuspoeng» (fra kap. 0.1–0.2).
2. **Sentralmetabolismen** — glykolyse (3 irreversible + netto ATP), **Krebs som fullt
   momentkart** (metabolitter/enzymer/CO₂/NADH + begge dehydrogenasers regulering), ETC/
   ATP-syntase, glykogen, glukoneogenese + F2,6BP-bryteren, enzymkinetikk/bioenergetikk.
3. **Lipid og protein/nitrogen** — β-oksidasjon (4 trinn + CPT-1), ketonlegemer (lever +
   hvem bruker dem), lipolyse/lipogenese, proteinstruktur + forgrenede AA, ureasyklusen.
4. **Reguleringskartet** — de fire reguleringsprinsippene, kinase/fosfatase, cAMP→PKA-
   kaskaden (adrenalin/glukagon), insulin→GLUT4, insulin-/glukagonsekresjon — de nummererte
   kaskadene som momentlister.
5. **Reaksjons- og enzymbank** — alle reaksjonslikninger, enzymnavn, koenzymer og
   lokaliseringer samlet (flashcard-speilet i prosaform) — memoreringsmålet.
6. **Integrerende oppg. 6-kart** — insulin/glukagon-aksen, faste over tid, diabetes (type
   1 vs. 2, diagnose, ubehandlet type 1), overvekt — hvordan flere veier/organer bindes.
7. **Sensorfellene** — F1–F10 som énlinjers varsellamper, med F1 (kinase/fosfatase),
   F3 (ufullstendig likning), F4 (Krebs-regulering), F5 (lokalisering) og F9 (organsubstrat)
   uthevet.
8. **Karakter-strategi** — hva som sikrer bestått (sikre kortsvarsbatteriet + noen
   delessay-moment) vs. topp (komplett Krebs med begge dehydrogenaser + integrert oppg. 6).
9. **Ukeplan** — løp mot eksamen med prøve-innplassering (temadelprøver underveis;
   øvingseksamen i full form de siste ukene).

---

## 6. Byggerekkefølge og verifikasjon

### Rekkefølge for forfatter-agenten (Opus)

1. **Metadata først:** `TextbookCourse`-oppføring (mønster `COURSE_BI_OKONOMI`, skrives til
   `textbook-courses-hoyskole.ts`): id `nih-thp204`, title, `level: 'Høyskole'`, alle 26
   kapitler med id/number/title/description/estimatedMinutes/topics/competenceGoals/
   prerequisites fra dette skjelettet, `sectionNames` fra §2-tabellen.
2. **Del 0** først (etablerer seks-oppgavemalen, de to lagene, sensorkravene og «svar
   alltid»-regelen som alle senere kapitler refererer).
3. **Del 1 (sentralmetabolisme) → Del 2 (lipid) → Del 3 (protein/nitrogen) → Del 4
   (regulering) → Del 5 (integrasjon) → Del 6** (drill + øvingseksamener). Prerequisites
   peker bakover; batching = én agent per hel del (Del 1 er 6 kap → gi agenten hele delens
   kontrakter; splitt evt. 1.1–1.3 / 1.4–1.6 men med felles kontrakt).
4. **Prøver** (`nih-thp204-<del>-prove`) etter at delens kapitler finnes (Del 1–5).
5. **Narrativ-versjoner** (`<id>-narrativ.json` per kapittel, jf. `/narrativ`) og quiz-
   registrering til slutt.

Per temakapittel gjelder blokk-rekkefølgen i §2 «Kapittel-DNA» (tip Eksamensvinkel → text
Forkunnskaper + collapsible Reaksjons- og enzymliste → text Oversikt → definition Kjernefakta
(flashcard-kilden — toppnivå med title!) → text/theorem Mekanismekjeder → example
Modellsvar/regnecase → warning Typiske feil → exercise ×6–12 → collapsible Repetisjon).
Eksamensvinkel- og Typiske feil-blokkene fylles med belegget (score X/5) og feilkodene
(F1–F10) fra dette skjelettet — forfatteren skal IKKE finne på frekvenstall.

### Verifikasjonssjekkliste (kjøres FØR ferdigmelding)

- [ ] **JSON-validering:** alle nye `src/lib/data/chapters/nih-thp204-*.json` parser med
      `json.load` (generer via `json.dump`). `npm run build` grønn — vis output.
- [ ] **Metadata-konsistens:** alle 26 kapittel-id-er har eksisterende content-fil; `number`
      er del-basert («1.2», ALDRI lineær); prosareferanser bruker samme form («kap. 1.2»);
      prerequisites peker på eksisterende id-er (og bakover); `sectionNames` satt; narrativ-
      id-er registrert (verifiser med prod-server + curl at narrativ-ruter gir 200).
- [ ] **To-lag-integritet:** hvert temakapittel har både definisjons-/reaksjonsblokker
      (flashcard-kilden) OG mekanismekjeder + modellsvar-`example`; Eksamensvinkel sier
      hvilke oppgaver (K1/K2R/K2N/DE/SE/IE) og score X/5 kapitlet trener.
- [ ] **Biokjemisk presisjon / `(verifiser)`-markeringer:** grep `-i verifiser` — alle
      markerte detaljer (Krebs-mellomtrinn, ~10 H⁺/NADH, HMG-CoA-trinn, MAGL,
      ureasyklus-mellomtrinn, IRS/PI3K, HbA1c/glukosegrenser, PKA-substratbatteri, katekolamin-
      effekt på sekresjon) fagfellesjekkes i fase 6 mot GJELDENDE Lippincott (8. utg.). INGEN
      oppdiktede reaksjoner/enzymnavn.
- [ ] **Kalibrering (kun energiomsetning):** ingen organsystem-/sirkulasjons-/nerve-
      fysiologi som kjernestoff (det er THP100); detaljer merket «ikke forventet»
      (f.eks. glykogenforgrening) kun som «bør kjenne til».
- [ ] **Klyngelenking:** THP100/THP202-referanser er navnereferanser med mindre emnene er
      LIVE-bygd; markdown-`/bok/`-lenker kun til eksisterende kapitler (README-leserkrav).
      Ingen gjentakelse av THP100/THP202-stoff utover lenker.
- [ ] **Kvotesum:** quiz ≥540 og flashcards ≥594 fordelt per kapittel som angitt (hardt
      minimum ≥500/≥500); 4 prøver per temadel Del 1–5 (20) + 3 øvingseksamener; fasit-
      svaralternativer rebalansert (jevn a/b/c/d — options[0] alltid riktig i staging,
      runtime stokker).
- [ ] **Krebs-særkrav:** kap. 1.2 og øvingseksamenene har komplett Krebs-storEssay med alle
      metabolitter, enzymer, CO₂-/NADH-/FADH₂-trinn, GTP OG begge dehydrogenasers regulering
      + figuroppfordring; oppg. 6 integrerer minst lever/muskel/fettvev.
- [ ] **Opphavsrett:** alle oppgaver, tallverdier og øvingseksamener er NYSKREVNE — ingen
      formuleringer/fasitmomenter fra THP204-settene. Reaksjoner, enzym-/metabolittnavn og
      standard reguleringsmekanismer er alminnelig fagstoff og fritt.
- [ ] **Leserkrav:** Forkunnskaper-blokk med (klynge)lenker + collapsible «Reaksjons- og
      enzymliste» først i hvert temakapittel; Eksamensvinkel-`tip` og Typiske feil-`warning`
      i hvert kapittel; «bør kjenne til»-stoff plassert ETTER kjernestoffet og merket.

# Bokskjelett: MRK 3481 Forbrukerpsykologi (Handelshøyskolen BI) — eksamensrettet lærebok

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
> `EKSAMENSANALYSE.md`. **Arkivgrunnlaget er forgjengerkurset MRK 97111
> «Markedsføring» (BI/NMH), Delkurs 2 Forbrukeratferd, fem sittinger 1998–2001, med
> pensumboken Schiffman & Kanuk, *Consumer Behavior* (7. utg., 2000). To komplette
> forbrukeratferd-sensorveiledninger (H1999, H2000).** Alle oppgaver, modeller, case
> og modellsvar i boka skal være NYSKREVNE (se §6). Pensumlitteratur refereres
> (forfatter/verk/begrep) — aldri siteres i lengde.
>
> **KRITISK EVIDENSFORBEHOLD — les før du bygger.** Arkivet er lite, 25 år gammelt og
> IKKE MRK 3481. Tre forbehold styrer hva som kan hevdes som «eksamensbelegg»:
> 1. **Forgjengerkurs, ikke faget selv.** Frekvenser og sjangre er fra MRK 97111
>    Delkurs 2 (forbrukeratferd), ikke fra dagens MRK 3481.
> 2. **Tidløs kjerne er sterk, moderne overbygning er fraværende i arkivet.** De
>    klassiske psykologiske temaene (persepsjon, læring, motivasjon, personlighet,
>    holdninger, beslutning, diffusjon, kultur) er tidløse og med svært høy
>    sannsynlighet fortsatt bærebjelken. Den moderne overbygningen (nudging, digital,
>    bærekraft, etikk, emosjoner/sansemarkedsføring) fagbeskrivelsen krever, finnes
>    **ikke** i arkivet — hele Del 9 er derfor bygd på fagbeskrivelse + forbruker-
>    psykologisk allmennkunnskap og **merket `(verifiser)`**.
> 3. **Eksamensformen er uverifisert for dagens fag.** Den dokumenterte formen (skriftlig
>    skoleeksamen, lukket bok, 5 t, ~20 korte likt vektede spørsmål, tospråklig
>    norsk/engelsk, A–F) er fra 1998–2001. Dagens BI-form er trolig digital, kortere,
>    med færre/lengre og mer case-orienterte oppgaver — **alt formavhengig merkes
>    `(verifiser)`**, og boka bygger for BÅDE den korte redegjørelsesformen OG den
>    sannsynlige case-formen.
>
> **Faglig presisjon er kritisk.** Pensumkoblinger (hvilken lærebok/utgave dagens MRK
> 3481 bruker) er ukjente og merkes ⚠ (utgaveavhengig, verifiser). Teoretiker-
> attribusjoner forfatteren er usikker på merkes `(verifiser)` for fagfellesjekk i
> fase 6. INGEN oppdiktede referanser.

---

## 1. Bokens identitet

- **Kurs-id:** `mrk3481-bi`
- **Tittel:** *MRK 3481 Forbrukerpsykologi (BI)*
- **Level:** `'Høyskole'`
- **Institusjon (navigasjon):** Handelshøyskolen BI. Visningsnavn i
  `institusjoner.ts`: «MRK 3481 Forbrukerpsykologi».
- **Arketype:** **drøfting/fakta-hybrid (REDEGJØRELSE- OG ANVENDELSES-HYBRID)** —
  primærmalen er DNA-drøfting, men temakapitlene bygges som **redegjørelses- og
  anvendelsesmoduler** med lånt «begrepskontrakt + momentliste + differensiert
  modellsvar»-mønster fra PSYC1201/PSY1000, kalibrert mot **presis pensumtaksonomi,
  tegnbar modell/formel og obligatorisk markedsanvendelse** framfor fri drøfting.
  Drøftingslaget er lett og bundet til eksplisitte «drøft/skill»-ledd. Hybrid-valget
  er dokumentert i §2 «Arketypetilpasning».
- **Kapittelantall:** 40 (Del 0: 3 · temadeler 1–9: 25 · eksamenstrening Del 10: 12)
- **Estimert totaltid:** ~2 070 minutter (~35 timer) fordelt per kapittel under
- **Quiz totalt:** 516 (krav ≥500) · **Flashcards totalt:** 616 (sikt 600–700,
  begrepsrikt/tospråklig fag — se kvotesammendrag)

**Pitch:** Forbrukerpsykologi er et **bredt, pensum- og modelltroende
redegjørelsesfag med obligatorisk markedsanvendelse**. Forgjenger-arkivet (MRK
97111, Delkurs 2) dokumenterer en fast grunnmal i nesten hvert svar: **definer/navngi
presist → gjengi bokens taksonomi eller tegn modellen/vis formelen → anvend på et
konkret markedsføringseksempel → (skill nære begreper / drøft der oppgaven ber om
det).** Sensorveiledningene belønner tre ting eksplisitt: **fullstendig og korrekt
pensumtaksonomi** (riktig antall ledd, riktig navngitt), **modellen tegnet eller
formelen vist** (Maslow-pyramiden, TRA-diagrammet, Webers lov ΔI/I = k,
multiattributt-likningen A = Σbᵢeᵢ), og et **treffende markedsføringseksempel som
faktisk demonstrerer mekanismen**. Faget måles på **skarpe begrepspar-skiller** —
særlig **negativ forsterkning ≠ straff**, som sensor eksplisitt advarer mot å
forveksle. Fordi den dokumenterte formen kunne stille hele bredden som korte
spørsmål, kan **intet tema hoppes over**; fordi dagens form trolig vekter anvendelse
og de moderne temaene tyngre, bygger boka hvert kjernetema slik at det kan besvares
**kort OG utfoldes til en case**. Boka er bygd baklengs fra dette: hvert kjernetema
leveres som en **redegjørelses-/anvendelsesmodul** med presis (tospråklig) definisjon,
en tegnbar modell/formel i **modell- og formelbanken**, minst ett obligatorisk
markedsføringseksempel, og et **differensiert modellsvar** i bestått- og topp-versjon.
**Topptemaene (5/5 i arkivet): læring & betinging, holdninger & holdningsendring,
diffusjon & innovasjon, beslutningsprosesser & beslutningsregler** — pluss motivasjon,
personlighet og persepsjon like bak — er bokas ryggrad.

---

## 2. Makrostruktur

Følger DNA-drøfting-malen (Del 0 eksamenskart + håndverk → temadeler etter analysens
temafrekvens → eksamenstrening), men rekkefølgen på temadelene følger den klassiske
forbrukerpsykologi-buen fra sanseinntrykk til sosial/kulturell kontekst, med en
**moderne overbygning** lagt på slutten: **persepsjon → læring → motivasjon →
personlighet → holdninger → beslutning → diffusjon → sosial/familie/kultur →
(moderne: nudging/digital/bærekraft/emosjoner/etikk) → eksamenstrening.**
Fagdefinisjonen (kap. 1.1) er gjennomgangslim: persepsjon → læring → holdning →
beslutning → sosial/kulturell kontekst.

| Del | Tittel | Kap. | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart og redegjørelseshåndverk | 3 | perfekt (meta) | Den dokumenterte formen (~20 korte, likt vektede, tospråklige), evidensforbeholdet, grunnmalen definisjon→modell→eksempel→skille, **modell-/formeltegning som håndverk** og bestått/topp-logikken må etableres FØR fagstoffet. |
| 1 | Forbrukerpsykologiens landskap, persepsjon og terskler | 3 | perfekt | Persepsjon 4/5 (⭐⭐⭐). Fagdefinisjonen som lim etableres her; JND/Webers lov er det reneste formel-temaet (sensor premierer formelen). |
| 2 | Læring og betinging | 3 | perfekt | **Topptema 5/5 (⭐⭐⭐).** Instrumentell betinging (positiv/negativ forsterkning ≠ straff) er ett av fagets mest stabile spørsmål. Klassisk/operant/vikarierende + anvendelse i merkevarebygging. |
| 3 | Motivasjon og behov | 2 | perfekt | Maslow 4/5 (⭐⭐⭐), fast gjenganger med obligatorisk kritikk-ledd. Maslow-pyramiden er modellbank-ankeret; OSL og positiv/negativ motivasjon. |
| 4 | Personlighet og selvet | 2 | perfekt | Freud/neo-Freud 4/5 (⭐⭐⭐). Freud vs. neo-Freud er et fast begrepspar-skille; kobling til forbruk/merkelojalitet. |
| 5 | Holdninger og holdningsendring | 3 | perfekt | **Topptema 5/5 (⭐⭐⭐).** Multiattributtmodellen (endre b/e/n) er dokumentert gjenganger 3/5, nesten ordrett. TRA-modellen, tre-komponentmodell, holdning-atferd-gapet, atferd→holdning/dissonans. |
| 6 | Beslutningsprosesser og beslutningsregler | 2 | perfekt | **Topptema 5/5 (⭐⭐⭐).** Kompensatorisk vs. ikke-kompensatorisk + evoked/inept/inert sett + etterkjøpsdissonans. |
| 7 | Diffusjon og innovasjon | 2 | perfekt | **Topptema 5/5 (⭐⭐⭐).** De fem produktegenskapene (presist antall!) + innovasjonstyper + det sosiale systemet. |
| 8 | Sosial, familiær og kulturell kontekst | 3 | kunne | Kultur/subkultur 3/5, familie/FLC 3/5, referansegrupper 2/5 (⭐⭐). Referansegruppe-matrisen (offentlig/privat × luksus/nødvendighet) er modellbank-materiale; segmentering «bør kjenne til». |
| 9 | Moderne overbygning *(påbygd — arkivet taust, alt merket `(verifiser)`)* | 5 | perfekt (fagbeskrivelse) | Nudging, digital forbrukeratferd, bærekraft, emosjoner/sansemarkedsføring, etikk + den mørke siden. Ingen arkivfrekvens; bygd på fagbeskrivelse + forbrukerpsykologisk allmennkunnskap, sannsynlig tung vekt i dagens case-form. |
| 10 | Eksamenstrening | 12 | perfekt (meta) | 5 sjanger-/drillkapitler (S1–S5 + feilvaksine) + 4 modellbesvarelser (DNA-krav ≥3) + 3 øvingseksamener (dokumentert kort-form + sannsynlig case-form). |

Rasjonale: ⭐⭐⭐-topptemaene (læring, holdninger, diffusjon, beslutning + motivasjon,
personlighet, persepsjon) får egne deler med høyest kvote og full modell-/
anvendelsesdrill; ⭐⭐-temaene (kultur, familie, referansegrupper) får eget kapittel
med solid dybde; ⭐-temaer (segmentering/forbrukertyper, forbrukeratferd som fagfelt,
tvangsforbruk) dekkes kompakt inne i beslektede kapitler og merkes «bør kjenne til».
Den moderne overbygningen (Del 9) er **prioritert perfekt på grunnlag av
fagbeskrivelsen**, ikke arkivet, og dette forbeholdet står i hvert kapittel.
**Ingenting utelates** — den brede dokumenterte formen gjør hele pensumbredden
eksamensrelevant; prioriteringen styrer *dybde og drillmengde*, ikke hva som er med.

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart og redegjørelseshåndverk |
| 1 | Persepsjon, sansing og terskler |
| 2 | Læring og betinging |
| 3 | Motivasjon og behov |
| 4 | Personlighet og selvet |
| 5 | Holdninger og holdningsendring |
| 6 | Beslutningsprosesser og beslutningsregler |
| 7 | Diffusjon og innovasjon |
| 8 | Sosial, familiær og kulturell kontekst |
| 9 | Moderne overbygning: nudging, digital, bærekraft, etikk |
| 10 | Eksamenstrening |

### Sjangerkoder (fra analysen §3 — brukes i «Eksamensbelegg» under)

**S1** «Navngi og beskriv X» (taksonomi-redegjørelse — grunntypen: gjengi bokens
inndeling presist og *fullstendig*, med riktig antall ledd; f.eks. de fem
diffusjonsegenskapene, id/ego/superego, de tre læringsteoriene, FLCs faser) · **S2**
«Forklar begrepet + anvend på markedsføring» (den vanligste malen: definer ett
kjernebegrep presist OG vis hvordan markedsførere bruker det — ren definisjon uten
anvendelse stopper på minstenivå) · **S3** «Beskriv modellen/formelen + bruk den»
(gjengi en modell/formel — helst tegnet/oppstilt — og anvend den: TRA, multiattributt
A=Σbᵢeᵢ, Webers lov, Maslow) · **S4** «Sammenlign/skill mellom X og Y + drøft» (skarpt
begrepspar-skille + et lite vurderende ledd der oppgaven ber om det, f.eks.
Maslow-kritikk) · **S5** «Case-anvendelse» (sannsynlig i dagens form, ikke i arkivet:
kort forbruks-/markedscase der flere begreper anvendes og et etisk/bærekraftshensyn
vurderes). **De fleste faktiske spørsmål kombinerer S1–S3** — boka bygger derfor hvert
kjernetema så det kan besvares på alle nivåer (definisjon → modell/taksonomi →
markedsanvendelse → kontrast/drøfting).

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

**F1** feil antall besvart — svare på tre når det bes om to, eller liste ekstra
kategorier uten uttelling («skal ikke belønnes for det»); les antallskravet nøyaktig ·
**F2** **forsterkning forvekslet med straff** — H1999-veiledningen presiserer
eksplisitt: negativ forsterkning fjerner noe ubehagelig for å *øke* atferd; straff er
utformet for å *redusere* atferd (fagets mest skjerpede begrepspar — egen warning i
kap. 2.2) · **F3** definisjon uten markedsanvendelse — gjengi hva et begrep *er* uten å
vise *hvordan markedsførere bruker det* (stopper på minstenivå) · **F4** modell ikke
tegnet / formel ikke vist der det ville gitt ekstra (Maslow-pyramiden, TRA-diagrammet,
Webers lov, multiattributt-likningen) · **F5** anbefaling løsrevet fra modellen —
multiattributt-oppgaven besvart med tiltak uten å spesifisere om man endrer b, e eller
n; «diskusjoner uten henvisning til modellen» trekker ned · **F6** ufullstendig
taksonomi — glemmer ett eller flere ledd (bare tre av fem diffusjonsegenskaper;
id/ego uten superego) · **F7** uklare begrepspar-skiller — forveksle klassisk/
instrumentell betinging, generalisering/diskriminering, kompensatorisk/ikke-
kompensatorisk, absolutt/differensieringsterskel, Freud/neo-Freud, holdning→atferd/
atferd→holdning, evoked/inept/inert sett, merke-/linjeutvidelse · **F8** manglende
kritisk lag der oppgaven ber om drøfting (særlig Maslow-kritikken) · **F9** eksempel
som ikke passer begrepet — velger en illustrasjon som ikke faktisk demonstrerer
mekanismen (et «tvangsforbruk»-eksempel som bare er normal shopping) · **F10**
ignorerer den engelske fagtermen — kandidaten kjenner det norske begrepet, men ikke
det engelske (*evoked set*, *just noticeable difference*, *reinforcement schedule*)
som den tospråklige oppgaveteksten bruker.

### Sensorkrav og kredittlogikk (fra analysen §4 — etableres i Del 0.2, refereres i hvert kapittel)

1. **Presis, fullstendig taksonomi fra pensum.** Alle ledd med, korrekt navngitt,
   riktig antall (F1/F6). Å navngi «to av fem» korrekt er minstekravet.
2. **Modell tegnet / formel vist.** Sensor sier eksplisitt at kandidater som tegner
   modellen (Maslow, TRA) eller viser formelen (Webers lov, multiattributt) skal
   **premieres ekstra** (F4).
3. **Hensiktsmessig markedsføringseksempel.** Et konkret produkt-/markedseksempel som
   *passer* begrepet honoreres eksplisitt; definisjon uten anvendelse stopper på
   minstenivå (F3/F9).
4. **Korrekt kobling modell → anbefaling.** Anbefalinger må forankres i modellens
   komponenter (hvilket element b/e/n man endrer); løsrevne råd trekker ned (F5).
5. **Presisjon på mekanismen.** F.eks. at differensieringsterskelen *varierer med
   styrken i utgangsstimulus* (Webers lov i praksis), ikke bare at en terskel finnes.
6. **Kritisk/drøftende lag der oppgaven ber om det.** Maslow-svaret skal inkludere de
   kjente kritikkene; «Maslows reviderte» gir ekstra (F8).
7. **Presist begrepspar-skille** (F2/F7) — fagets kunnskap måles på de skarpe skillene.
8. **Riktig antall — ikke over, ikke under** (F1): å beskrive flere enn bedt om gir
   ikke ekstra.

### Terskler (bestått / middels / topp — avledet av veiledningenes belønningslogikk)

- **Bestått:** korrekt kjernedefinisjon + hoveddelen av taksonomien + ett rimelig
  eksempel. Konkret, men tynt.
- **Middels:** fullstendig taksonomi/modell, god beskrivelse, minst ett treffende
  eksempel — men mangler modell-tegning eller kritisk lag.
- **Topp:** fullstendig og presis modell (helst **tegnet/formelfestet**), korrekt
  anvendt på markedsføring, skarpe begrepspar-skiller, og — der oppgaven inviterer —
  et kritisk/drøftende ledd.

### Arketypetilpasning (dokumenterte valg og avvik)

1. **Redegjørelses-/anvendelses-hybrid, ikke rent drøftingsfag, ikke ren faktapugg.**
   MRK 3481 ligger nær PSYC1201/PSY1000s «bred redegjørelse», men med to forskjeller
   som styrer boka: (a) **anvendelse på markedsføring er en obligatorisk byggekloss** —
   nesten hvert svar krever et treffende produkt-/markedseksempel (avvik fra DNA-
   drøfting, der case er illustrasjon; her er markedsanvendelse en egen obligatorisk
   modul per kapittel); (b) faget er **pensum- og modelltroende** — sensor belønner å
   gjengi *bokens* taksonomi presist og **tegne modellen / vise formelen** (motsatt av
   PSYC1201s «forklaring slår terminologi»). Derfor beholdes DNA-drøftings makrostruktur
   (Del 0-håndverk, temadeler etter frekvens, eksamenstrening med modellbesvarelser),
   men **temakapittelets DNA er en redegjørelses-/anvendelsesmodul** med en fast
   anatomi (§ under). Drøftingslaget er til stede, men **lett og bundet** til eksplisitte
   «drøft/skill»-ledd.
2. **Toppsvar-anatomien = definisjon → modell/taksonomi → markedsanvendelse → skille/
   drøfting.** Hvert kjernetema bygges så det kan besvares i disse fire trinnene. Dette
   speiler grunnmalen i nesten alle arkivsvar og er ryggraden i hvert kapittels
   momentliste.
3. **Modell- og formelbank som gjennomgående ressurs.** Siden sensor premierer å tegne
   modellen/vise formelen (F4), leverer boka en **theorem-blokk-basert modellbank**:
   Maslow-pyramiden, TRA-diagrammet, multiattributt-likningen A=Σbᵢeᵢ, Webers lov
   ΔI/I = k, referansegruppe-matrisen (offentlig/privat × luksus/nødvendighet), de fem
   diffusjonsegenskapene — hver som en **reproduserbar figur/formel** studenten skal
   kunne tegne på eksamen. Kapittel 0.3 er et eget håndverkskapittel om *hvordan* man
   tegner disse raskt og korrekt.
4. **«Symbol- og formelliste» → «Begreps- og termliste (norsk↔engelsk)».** README-
   kravet om en collapsible rett etter Forkunnskaper omtolkes: kapitler MED formler
   (1.3 Webers lov, 5.2 multiattributt) får en **ekte formelliste** som forklarer alle
   symboler (ΔI, I, k; A, bᵢ, eᵢ, n); alle kapitler får i tillegg en **tospråklig
   begreps- og termliste** (norsk↔engelsk) — fordi oppgaveteksten er tospråklig og den
   engelske fagtermen forventes kjent (F10). Dette er flashcard-kilden for
   norsk↔engelsk-parene.
5. **Differensiert modellsvar (bestått → topp) erstatter C→A.** Hver temamodul har et
   modellsvar i **bestått-versjon** (definisjon + hovedtrekk + ett eksempel, tynt) og
   **topp-versjon** (full modell tegnet/formelfestet + presis markedsanvendelse +
   begrepspar-skille + kritikk der invitert), med en **sensorkommentar** bygd på
   belønnings-/trekk-reglene (antall, modell-tegning, eksempel, kritikk). En kort
   **middels-merknad** viser mellomnivået.
6. **Tospråklig begrepspar-drill.** Quiz/flashcards dekker de skillene sensor måler
   kunnskap på (F2/F7) OG norsk↔engelsk-termpar (F10). Dette dekker naturlig ≥500-kravet
   og gir den høye begrepstettheten faget bærer.
7. **Bygg for to eksamensformer.** Den dokumenterte korte redegjørelsesformen (~20
   likt vektede spørsmål) OG den sannsynlige moderne case-formen (færre/lengre,
   anvendelse, moderne temaer) trenes begge — hvert kjernetema kan besvares kort OG
   utfoldes til case. Alt formavhengig merkes `(verifiser)`.
8. **Nyskrevet — men systematisk gjenbruk er treningsgull.** De samme temaene og nesten
   identiske spørsmål roterer på tvers av arkivsettene (multiattributt 3/5, instrumentell
   betinging 4/5, Maslow, diffusjon, Freud). Øvingsoppgavene kloner mønstrene tett, men
   er NYSKREVNE (endrede produkter, tall, formuleringer). **Bare Delkurs 2 er relevant —
   Kotler-/markedsledelses-halvdelen er utenfor MRK 3481.**

### Pensumankere (fra analysen §6 — brukes i begrepskontraktene)

| Kilde | Rolle | Det arkivet henter derfra (⚠ utgave-/pensumsensitivt, verifiser) |
|---|---|---|
| **Schiffman & Kanuk, *Consumer Behavior* (7. utg., 2000)** — arkivpensum; dagens MRK 3481 bruker etter alt å dømme en **nyere forbruker(psykologi)-tekst** (f.eks. Schiffman & Wisenblit, *Consumer Behavior*, eller en dedikert *Consumer Psychology*-bok) ⚠ | Hovedbok — hele det systematiske forbrukeratferd-faget | Persepsjon/terskler; læring (klassisk/operant/vikarierende); motivasjon (behovshierarki, OSL); personlighet (Freud, neo-Freud); holdninger (tre-komponent, multiattributt, TRA); beslutning (involvering, sett, beslutningsregler); referansegrupper/familie/FLC; kultur/subkultur; diffusjon (fem produktegenskaper, innovasjonstyper); den mørke siden (tvangsforbruk). **Begrepene er stabile; forfatter-/utgavekoblingen er utgave-sensitiv — verifiseres mot dagens pensum.** |
| **Maslow** (behovshierarki, «revidert») | Motivasjon | Behovshierarkiets fem nivåer + kjente kritikker. |
| **Weber** (Webers lov) | Persepsjon | Differensieringsterskel/JND, ΔI/I = k. |
| **Pavlov / Skinner / Bandura** | Læring | Klassisk betinging / operant betinging & forsterkning / observasjonslæring. |
| **Freud / Horney** | Personlighet | Id/ego/superego / neo-freudiansk (medgjørlig/aggressiv/uavhengig). |
| **Fishbein & Ajzen** | Holdninger | Multiattributtmodellen (holdning-til-objekt / holdning-til-atferd) og Theory of Reasoned Action. |
| **Festinger** | Holdninger/beslutning | Kognitiv dissonans; etterkjøpsdissonans. |
| **Rogers** (Everett Rogers) | Diffusjon | Fem produktegenskaper, adoptørkategorier, det sosiale systemet. |
| **Hofstede** | Kultur | Kulturdimensjoner; inter-kulturell forbrukeranalyse. |
| **Bearden & Etzel** `(verifiser)` | Referansegrupper | Referansegruppe-matrisen (offentlig/privat × luksus/nødvendighet). |
| **Thaler & Sunstein; Kahneman** *(moderne — ikke i arkivet, `(verifiser)`)* | Overbygning | Nudge/valgarkitektur/defaults; System 1/2, heuristikker. |

**Metanivå — «hva er forbrukerpsykologi?»:** studiet av de psykologiske, sosiale og
teknologiske prosessene som styrer hvordan mennesker velger, kjøper, bruker og kvitter
seg med produkter og tjenester. Definisjonen etableres i kap. 1.1 og brukes som
gjennomgangslim (persepsjon → læring → holdning → beslutning → sosial/kulturell
kontekst → diffusjon).

### Kapittel-DNA (temakapittel = redegjørelses-/anvendelsesmodul — obligatorisk blokk-rekkefølge)

1. `tip` **Eksamensvinkel** — frekvens (antall arkivsett), sjangre (S1–S5) temaet
   inngår i, gjenbruksmønster, prioritetsklasse + eventuelt formforbehold. Fylles fra
   skjelettets Eksamensbelegg — forfatteren finner IKKE på frekvenstall.
2. `text` **Forkunnskaper** — kapitler i boka temaet bygger på + kryssbok-lenker
   (README-leserkrav), etterfulgt av `collapsible` **Begreps- og termliste (norsk↔
   engelsk)** — sentrale begreper med engelsk fagterm og pensumavsender; for kapitler
   med formler: en **formelliste** som forklarer alle symboler. (Per kapittel.)
3. `text` **Temaet i forbrukerpsykologiens landskap** — hvilket problem temaet svarer
   på, hvor det står i buen (fagdefinisjonen som lim der relevant).
4. `definition` **Kjernebegreper** — presise definisjoner + **engelsk fagterm** + pensum-
   forankring (teoretiker/verk) per begrep. **Toppnivå med `title` — dette er
   flashcard-kilden.**
5. `theorem` **Modell-/formelbank** — den tegnbare modellen/formelen som en reproduserbar
   figur/oppstilling (Maslow-pyramiden, TRA, multiattributt A=Σbᵢeᵢ, Webers lov,
   referansegruppe-matrisen, de fem diffusjonsegenskapene). Der temaet er en ren
   taksonomi (ikke en figur), er dette en **nummerert taksonomi-boks** med presist antall
   ledd. **Sensor premierer dette tegnet — figuren skal kunne reproduseres.**
6. `example` **Markedsanvendelse (obligatorisk)** × 1–2 — temaet brukt på et konkret
   produkt/en markedssituasjon slik et godt svar ville gjort det; eksempelet må *passe*
   begrepet (F9). Dette er den obligatoriske anvendelsesmodulen.
7. `example` **Modellsvar (bestått → topp)** — samme oppgave i bestått-versjon
   (definisjon + hovedtrekk + ett eksempel, tynt) og topp-versjon (full modell tegnet/
   formelfestet + presis anvendelse + begrepspar-skille + kritikk der invitert), med
   margnotater om gapet og en kort middels-merknad.
8. `tip` **Toppsvar-løftet** — det eksplisitte laget som løfter fra bestått til topp for
   dette temaet: modellen tegnet/formelen vist, presist antall, treffende eksempel,
   begrepspar-skille, kritisk lag der invitert (det veiledningene belønner).
9. `warning` **Typiske feil** — feilkodene (F1–F10) som gjelder temaet, med de aktuelle
   **begrepspar-warnings** (særskilt: kap. 2.2 har en egen «NEGATIV FORSTERKNING ≠
   STRAFF»-warning).
10. `exercise` × 4–8 — stigende, blandet: 2–3 begreps-/kontrollspørsmål (S1/S2-nivå,
    tospråklig, flashcard-/quizmateriale), **minst én obligatorisk markedsanvendelses-
    øvelse** (S2/S3 — «forklar X og vis hvordan en markedsfører bruker det»), 1
    kontrast-/drøftingsoppgave (S4) der relevant, og — for kjernetemaene — 1 case-
    oppgave (S5). Hver oppgave merket med sjangerkode; løsning = momentliste/disposisjon,
    ikke fullt essay.
11. `collapsible` **Pensumkart og begrepspar** — avsender → verk → hvilke begreper/
    modeller de «eier» + de tospråklige termparene + begrepspar-skillene (flashcard-
    råstoff) + 4–6 kontrollpunkter.

Sjanger-, feildrill- og modellbesvarelseskapitlene (Del 10) har egne oppsett — se §3.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = arkivforekomster (sett + år, fra forgjengerkurset
> MRK 97111 Delkurs 2) + sjangerkoder (S1–S5) + prioritetsklasse (perfekt/kunne/kjenne,
> fra analysen §7). **Begrepskontrakt** = begreper/modeller/teoretikere som SKAL med
> (flashcard-kilden, tospråklig, pensumforankret). **Modell-/formelbank** = den tegnbare
> figuren/formelen kapitlet leverer. **Momentliste** = den fullstendige sjekklista temaet
> krever (topp-svar-speil). **Toppsvar-løftet** = det som skiller topp fra bestått.
> **Kvote** = quiz/flashcards. Alt formavhengig og alt i Del 9 er merket `(verifiser)`.

### Del 0 — Eksamenskart og redegjørelseshåndverk

#### Kapittel 0.1: Slik testes MRK 3481
**id:** `mrk3481-bi-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Eksamensformen (dokumentert vs. sannsynlig dagens), evidensforbeholdet,
  temafrekvensen, gjenbruksmønstrene og den tospråklige oppgaveteksten — og hvordan boka
  brukes.
- **Eksamensbelegg:** Metakapittel (hele arkivet, forgjengerkurset MRK 97111 Delkurs 2,
  H1998–H2001). Skal formidle: (a) **den dokumenterte formen** `(verifiser for dagens
  fag)` — skriftlig skoleeksamen, lukket bok, ingen hjelpemidler, kl. 09–14 (5 t),
  karakter A–F; ~20 spørsmål totalt likt vektet, delt i to delkurs der **kun Delkurs 2
  Forbrukeratferd (~10 korte spørsmål) er MRK 3481-relevant**; kort-svar-format, hvert
  svar en avsluttet miniredegjørelse; **tospråklig oppgavetekst (norsk + engelsk)** fra
  H1999, engelsk fagterm forventes kjent; (b) **hva som trolig har endret seg** til
  dagens MRK 3481 `(verifiser)`: digital (WISEflow), trolig kortere (~3 t), færre/lengre
  og mer case-/anvendelsesorienterte oppgaver, moderne temaer som egne oppgaver; (c)
  **evidensforbeholdet** — arkivet er lite, 25 år gammelt og ikke MRK 3481; tidløs
  kjerne sterk, moderne overbygning + form uverifisert; (d) **temafrekvens-tabellen**
  (gjengangere i arkivet): læring & betinging 5/5 · holdninger 5/5 · diffusjon 5/5 ·
  beslutning 5/5 · motivasjon 4/5 · personlighet 4/5 · persepsjon 4/5 · kultur/subkultur
  3/5 · familie/FLC 3/5 · referansegrupper 2/5 · segmentering/tvangsforbruk/fagfelt 1/5;
  (e) **gjenbruket** — multiattributt 3/5 nesten ordrett, instrumentell betinging 4/5,
  Maslow, diffusjon-5, Freud/neo-Freud roterer → å drille gamle mønstre (bare Delkurs 2)
  er treffsikkert; (f) **de fem strukturelle konstantene** — definer→modell→eksempel→
  skille; taksonomi-troskap; modell/formel som pluss; presist begrepspar-skille;
  systematisk gjenbruk. Prioritet: perfekt (meta).
- **Begrepskontrakt:** eksamensform-fakta (dokumentert + sannsynlig, med forbehold);
  Delkurs 1/Delkurs 2-skillet (kun Delkurs 2 er MRK 3481); temafrekvens-tabellen;
  tospråklighet (norsk↔engelsk); de fem strukturelle konstantene; pensumankerne;
  sjangeroversikten S1–S5 (peker til 0.2); modellbanken (peker til 0.3); fagdefinisjonen
  (peker til 1.1).
- **Momentliste:** ingen (kartkapittel) — men en «slik leser du et sett»-gjennomgang av
  ett nyskrevet Delkurs 2-eksempelsett (~10 korte forbrukerpsykologiske spørsmål) med
  markering av hvordan hvert er en avsluttet miniredegjørelse, og hvordan samme tema kan
  komme kort ELLER som case.
- **Toppsvar-løftet:** ikke relevant (meta).
- **Typiske feil:** F1 (feil antall — les hvor mange ledd oppgaven ber om); F10 (ignorere
  den engelske fagtermen); misforståelsen at Kotler-/markedsledelses-stoffet (Delkurs 1)
  er en del av MRK 3481.
- **Kvote:** 10 quiz / 10 flashcards (formfakta dokumentert+sannsynlig, evidensforbeholdet,
  temafrekvens, Delkurs 1/2-skillet, tospråklighet, de fem konstantene).

#### Kapittel 0.2: Redegjørelseshåndverket — definisjon, modell, eksempel, skille
**id:** `mrk3481-bi-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** `mrk3481-bi-0-1`

- **Kapitteltype:** redegjørelseshåndverk.
- **Description:** Hvordan et forbrukerpsykologisk kortsvar bygges etter grunnmalen
  definisjon → modell/taksonomi → markedsanvendelse → begrepspar-skille/drøfting, hvordan
  sensor skiller bestått/middels/topp, og hva som gir/ikke gir uttelling.
- **Eksamensbelegg:** Destillat av sensorkravene (analysen §4; H1999 detaljert på
  anvendelse, H2000 svært utfyllende med eksplisitte belønnings-/trekk-regler). Prioritet:
  perfekt (meta). Skal operasjonalisere: (a) **de fem sjangrene S1–S5** med typisk
  formulering og tidsbudsjett (grovt 15–20 min per kort svar i den dokumenterte formen;
  case-svar lengre); (b) **grunnmalen** definisjon → modell/taksonomi → markedsanvendelse
  → (skille/drøfting); (c) **det som gir uttelling** — fullstendig taksonomi med riktig
  antall, modell tegnet/formel vist, treffende eksempel, korrekt kobling modell→
  anbefaling, presisjon på mekanismen, kritisk lag der invitert; (d) **det som IKKE gir
  uttelling / trekker ned** — feil antall, anbefalinger løsrevet fra modellen, opplisting
  uten funksjon; (e) **terskelbildet** bestått/middels/topp (fra §2). Framhev at
  **markedsanvendelse er obligatorisk byggekloss**, ikke pynt.
- **Begrepskontrakt:** svararkitektur (les antallskravet → definer presist med engelsk
  term → tegn modellen/vis formelen → anvend på et konkret produkt/marked → skill nære
  begreper / drøft der bedt); sjangerdefinisjonene S1–S5; de åtte sensorkravene fra §2;
  bestått/middels/topp-skillet; mantraene «definisjon uten markedsanvendelse er
  minstenivå», «tegn modellen — det premieres», «riktig antall, ikke over, ikke under».
- **Momentliste:** samme kortsvar-oppgave («Forklar X og vis hvordan markedsførere bruker
  det») besvart tre ganger — bestått (definisjon + ett trekk, tynt eksempel), middels
  (fullstendig, men umodellert), topp (modell tegnet + presis anvendelse + skille) — med
  margnotater om hvor poengene faller.
- **Toppsvar-løftet:** kapitlet DEFINERER toppsvar-løftet: de fire løftetypene med
  eksempler — modell-tegning (tegn Maslow-pyramiden i stedet for å liste nivåene),
  formelvisning (skriv ΔI/I = k), presist eksempel (et produkt som faktisk demonstrerer
  mekanismen), begrepspar-skille (skill negativ forsterkning fra straff eksplisitt).
- **Typiske feil:** F3 (definisjon uten markedsanvendelse), F4 (modell ikke tegnet), F1
  (feil antall), F5 (anbefaling løsrevet fra modellen), F9 (eksempel som ikke passer).
- **Kvote:** 12 quiz / 12 flashcards (sjangrene S1–S5, de åtte sensorkravene, bestått/
  middels/topp-kjennetegn, de fire løftetypene, grunnmalens fire trinn).

#### Kapittel 0.3: Modell- og formeltegning som håndverk (+ tospråklig fagterm)
**id:** `mrk3481-bi-0-3` · **number:** 0.3 · **estimatedMinutes:** 40 · **prerequisites:** `mrk3481-bi-0-2`

- **Kapitteltype:** modelltegning-håndverk.
- **Description:** Hvorfor og hvordan man tegner fagets modeller og viser dets formler
  raskt og korrekt på eksamen — bokas modellbank i miniatyr — pluss hvordan man håndterer
  den tospråklige fagterminologien.
- **Eksamensbelegg:** Sensor premierer eksplisitt å tegne modellen / vise formelen
  (analysen §1/§4: «studenter som viser dette med en modell/formel bør belønnes/
  premieres»). Sjangre: S3 (grunnlag for alle modell-oppgaver). Prioritet: perfekt (meta).
- **Begrepskontrakt:** modellbanken samlet med *hvordan-tegne*-oppskrift for hver: **Maslow-
  pyramiden** (fem nivåer nederst→øverst), **TRA-diagrammet** (holdning + subjektiv norm →
  intensjon → atferd), **multiattributt-likningen** A = Σbᵢeᵢ (og holdning-til-atferd-
  varianten), **Webers lov** ΔI/I = k, **referansegruppe-matrisen** (2×2: offentlig/privat
  × luksus/nødvendighet), **de fem diffusjonsegenskapene** (huskeliste), tre-komponent-
  holdningsmodellen (kognitiv/affektiv/konativ). For hver: hva aksene/nivåene/symbolene
  betyr, og den vanligste tegnefeilen. Tospråklig fagterm: norsk↔engelsk for kjernetermene
  (evoked set, JND/just noticeable difference, reinforcement schedule, compulsive
  consumption, relative advantage osv.), og at engelsk term forventes kjent (F10).
- **Modell-/formelbank:** dette kapitlet ER modellbank-oversikten (theorem-blokker med
  hver figur/formel + tegneoppskrift); de enkelte kapitlene gjentar sin relevante figur.
- **Momentliste:** for hver modell: (1) hva den viser; (2) hvordan den tegnes steg for
  steg; (3) hva symbolene/aksene betyr; (4) den vanligste tegnefeilen; (5) hvordan en
  markedsanbefaling forankres i figuren.
- **Toppsvar-løftet:** vise at en tegnet modell + forklaring alltid slår en verbal
  liste; øve inn å skrive formelen med korrekte symboler.
- **Typiske feil:** F4 (ikke tegne når det premieres), F5 (bruke modellen som pynt uten å
  forankre anbefalingen i den), F10 (ikke kjenne engelsk term).
- **Kvote:** 12 quiz / 14 flashcards (modellbanken: hva hver figur/formel viser, symbol-/
  akse-betydning, tegnefeil, norsk↔engelsk termpar).

### Del 1 — Forbrukerpsykologiens landskap, persepsjon og terskler

#### Kapittel 1.1: Hva er forbrukerpsykologi? Faget, prosessene og det tospråklige apparatet
**id:** `mrk3481-bi-1-1` · **number:** 1.1 · **estimatedMinutes:** 40 · **prerequisites:** `mrk3481-bi-0-2`

- **Kapitteltype:** tema (rammesetting).
- **Description:** Fagets definisjon, den psykologiske «reisen» persepsjon → læring →
  holdning → beslutning → sosial/kulturell kontekst, og hvordan definisjonen brukes som
  lim mellom kapitlene.
- **Eksamensbelegg:** «Forbrukeratferd som fagfelt / markedsorientering» inngår i H1999.
  Sjangre: S1, S2. Prioritet: kunne (kort, men gjennomgående ramme — analysen §7 metanivå).
- **Begrepskontrakt:** Schiffman & Kanuk ⚠: **forbrukerpsykologi/forbrukeratferd**
  (*consumer behavior/psychology* — studiet av de psykologiske, sosiale og teknologiske
  prosessene bak valg, kjøp, bruk og avhending av produkter/tjenester); **markedsorientering**
  (*marketing orientation* — å bygge tilbudet på kundeinnsikt); interne vs. eksterne
  påvirkninger; **kundeinnsikt** som bindeledd til markedsføringsstrategi; forbruker som
  informasjonsbehandler.
- **Modell-/formelbank:** prosesskartet (persepsjon → læring → holdning → beslutning →
  sosial/kulturell kontekst → diffusjon) som en enkel gjennomgangs-figur.
- **Markedsanvendelse (obligatorisk):** vis hvordan en markedsorientert bedrift bruker
  forbrukerinnsikt (f.eks. sanse-/holdnings-/beslutningsinnsikt) til å forme et konkret
  tilbud.
- **Momentliste:** (1) fagdefinisjonen presist (norsk + engelsk); (2) de sentrale
  prosessene og hvordan de henger sammen; (3) interne vs. eksterne påvirkninger; (4)
  markedsorientering og kundeinnsikt som strategikobling; (5) forbrukerpsykologiens plass
  mellom psykologi og markedsføring.
- **Toppsvar-løftet:** definisjonen *anvendt* på et konkret forbruksfenomen (ikke bare
  sitert); trekke prosess-buen fram som fagets røde tråd.
- **Typiske feil:** F3 (definisjon uten anvendelse), F10 (ikke kjenne engelsk term).
- **Kvote:** 12 quiz / 14 flashcards.

#### Kapittel 1.2: Persepsjon og sansing — seleksjon, organisering, tolkning og absolutt terskel
**id:** `mrk3481-bi-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `mrk3481-bi-1-1`

- **Kapitteltype:** tema.
- **Description:** Hvordan forbrukeren velger ut, organiserer og tolker sanseinntrykk; den
  absolutte terskelen; perseptuelle kart og posisjonering; subliminal persepsjon.
- **Eksamensbelegg:** Persepsjon & sansing 4/5 (H1998 perseptuelle kart, H1999
  differensieringsterskel, H2000 persepsjonsterskler, kont.-99 absolutt terskel). Sjangre:
  S1, S2, S3. Prioritet: **perfekt** (analysen §7 pkt. 7). (JND/Webers lov bygges ut i 1.3.)
- **Begrepskontrakt:** Schiffman & Kanuk ⚠: **perseptuell seleksjon** (*perceptual
  selection* — selektiv eksponering/oppmerksomhet); **perseptuell organisering** (figur/
  grunn, gruppering); **perseptuell tolkning** (*interpretation* — stereotypier,
  forventninger); **absolutt terskel** (*absolute threshold* — minste stimulusnivå som kan
  merkes; sensorisk adaptasjon); **perseptuelle kart** (*perceptual maps*) og
  **posisjonering** (*positioning*); **subliminal persepsjon** (*subliminal perception* —
  og hvorfor effekten er svak/omstridt). Norsk↔engelsk termpar for alle.
- **Modell-/formelbank:** perseptuelt kart (2-akse posisjoneringsdiagram) som tegnbar
  figur; persepsjonsprosessen (eksponering → oppmerksomhet → tolkning) som trinnfigur.
- **Markedsanvendelse (obligatorisk):** posisjonere to konkurrerende merker på et
  perseptuelt kart; bruke absolutt terskel/adaptasjon til å forklare hvorfor reklame må
  fornyes for å merkes.
- **Momentliste:** (1) de tre persepsjonstrinnene med definisjon; (2) absolutt terskel +
  sensorisk adaptasjon; (3) perseptuelle kart og posisjonering; (4) subliminal persepsjon
  med det kritiske forbeholdet; (5) minst ett markedsføringseksempel per hoveddel.
- **Toppsvar-løftet:** tegne et perseptuelt kart; skille absolutt terskel (om noe merkes
  i det hele tatt) fra differensieringsterskel (om en *endring* merkes — bro til 1.3);
  nyansere subliminal persepsjon.
- **Typiske feil:** F7 (blande absolutt og differensieringsterskel), F3 (persepsjonsbegreper
  uten anvendelse), F9 (subliminal-eksempel som overdriver effekten).
- **Kvote:** 18 quiz / 24 flashcards.

#### Kapittel 1.3: Differensieringsterskelen (JND) og Webers lov
**id:** `mrk3481-bi-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `mrk3481-bi-1-2`

- **Kapitteltype:** tema (formel-tema).
- **Description:** Den minste merkbare forskjellen (JND), Webers lov ΔI/I = k, og hvordan
  markedsførere bruker den på pris, pakning og produktendring — det reneste formel-temaet
  i faget.
- **Eksamensbelegg:** Differensieringsterskel/JND & Webers lov 4/5 (H1999
  differensieringsterskel, H2000 Webers lov eksplisitt, kont.-99, H1998). Sjangre: S2, S3.
  Prioritet: **perfekt** (analysen §7 pkt. 7; sensor «premierer» å vise formelen).
- **Begrepskontrakt:** Weber / Schiffman & Kanuk ⚠: **differensieringsterskel / just
  noticeable difference (JND)** (minste forskjell mellom to stimuli som kan oppdages);
  **Webers lov** (*Weber's law* — jo sterkere utgangsstimulus, jo større må endringen være
  for å merkes); symbolene ΔI (endring i stimulus), I (utgangsnivå), k (konstant).
  Anvendelse: prisøkning under JND (merkes ikke), forbedring over JND (merkes/
  kommuniseres), «downsizing»/krymping under JND, gradvis vs. merkbar endring av logo/
  pakning.
- **Modell-/formelbank (theorem):** **Webers lov ΔI/I = k** — skrevet ut med symbol-
  forklaring; regneeksempel (f.eks. hvor stor prisendring merkes ved høy vs. lav pris).
  Dette er et av kapitlene med **ekte formelliste** (README-omtolkning): ΔI, I, k forklart.
- **Markedsanvendelse (obligatorisk):** to eksempler — (a) hold en prisøkning under JND så
  den ikke merkes; (b) gjør en kvalitetsforbedring godt over JND så den merkes og kan
  markedsføres.
- **Momentliste:** (1) definer JND (norsk + engelsk); (2) Webers lov med formelen skrevet;
  (3) forklar mekanismen — terskelen *varierer med styrken i utgangsstimulus*; (4) minst
  to markedsanvendelser (pris ned under / kvalitet opp over JND); (5) et lite regneeksempel.
- **Toppsvar-løftet:** vise **formelen** (premieres); presisere at det er *forholdet*
  ΔI/I, ikke en absolutt endring, som er konstant (mekanismepresisjon §4 pkt. 5); koble
  til absolutt terskel (1.2).
- **Typiske feil:** F4 (ikke vise formelen når det premieres), F7 (JND forvekslet med
  absolutt terskel), F5 (JND-anbefaling uten å forankre i forholdet ΔI/I).
- **Kvote:** 18 quiz / 24 flashcards.

### Del 2 — Læring og betinging

#### Kapittel 2.1: Klassisk betinging — stimulusgeneralisering og -diskriminering
**id:** `mrk3481-bi-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `mrk3481-bi-1-1`

- **Kapitteltype:** tema.
- **Description:** Klassisk (pavlovsk) betinging, repetisjonens rolle, stimulusgeneralisering
  vs. -diskriminering, og hvordan de brukes i merke-/linjeutvidelser og «me-too»-produkter.
- **Eksamensbelegg:** Læring & betinging 5/5 (⭐⭐⭐, topptema); stimulusgeneralisering
  eksplisitt H1998, H2000. Sjangre: S1, S2, S4. Prioritet: **perfekt** (analysen §7 pkt. 1).
- **Begrepskontrakt:** Pavlov / Schiffman & Kanuk ⚠: **klassisk betinging** (*classical
  conditioning*); **ubetinget stimulus/respons** (*unconditioned stimulus/response*),
  **betinget stimulus/respons** (*conditioned stimulus/response*); **repetisjon**
  (*repetition*); **stimulusgeneralisering** (*stimulus generalization* — respons
  overføres til liknende stimuli) og **stimulusdiskriminering** (*stimulus discrimination*
  — skille mellom stimuli); **merkeutvidelse** (*brand extension*), **linjeutvidelse**
  (*line extension*), familiemerking, «me-too»-emballasje. Norsk↔engelsk for alle.
- **Modell-/formelbank:** betingingsskjemaet (US/UR, CS/CR) som trinnfigur; skille
  generalisering/diskriminering i en enkel figur.
- **Markedsanvendelse (obligatorisk):** stimulusgeneralisering brukt til merkeutvidelse
  (positiv assosiasjon overført til nytt produkt) og til å forklare kopiemballasje;
  diskriminering brukt til å få et sterkt merke til å skille seg fra kopiene.
- **Momentliste:** (1) klassisk betinging med de fire komponentene + repetisjon; (2)
  generalisering vs. diskriminering skarpt skilt; (3) merke- vs. linjeutvidelse som skille
  (F7); (4) minst ett markedsføringseksempel per mekanisme; (5) grensene for klassisk
  betinging (lav involvering).
- **Toppsvar-løftet:** skille generalisering/diskriminering OG merke-/linjeutvidelse
  presist; vise begge sider (markedsfører utnytter generalisering, men beskytter mot den
  via diskriminering).
- **Typiske feil:** F7 (generalisering/diskriminering og merke-/linjeutvidelse forvekslet),
  F3 (definisjon uten anvendelse i merkebygging), F10 (ikke kjenne engelsk term).
- **Kvote:** 18 quiz / 24 flashcards.

#### Kapittel 2.2: Instrumentell/operant betinging — forsterkning, straff og forsterkningsplaner
**id:** `mrk3481-bi-2-2` · **number:** 2.2 · **estimatedMinutes:** 60 · **prerequisites:** `mrk3481-bi-2-1`

- **Kapitteltype:** tema (fagets skjerpede begrepspar).
- **Description:** Operant betinging, det avgjørende skillet **positiv/negativ forsterkning
  vs. straff**, forsterkningsplaner, og anvendelse i lojalitetsprogrammer og
  kundebelønning.
- **Eksamensbelegg:** Instrumentell/operant betinging 4/5 (H1999, H2000, kont.-99, H2001 —
  ett av fagets mest stabile spørsmål); forsterkningsplaner H2001. **H1999-veiledningen
  presiserer eksplisitt: negativ forsterkning ≠ straff.** Sjangre: S1, S2, S4. Prioritet:
  **perfekt** (analysen §7 pkt. 1; dokumentert gjenganger).
- **Begrepskontrakt:** Skinner / Schiffman & Kanuk ⚠: **instrumentell/operant betinging**
  (*instrumental/operant conditioning*); **positiv forsterkning** (*positive reinforcement*
  — legge til noe behagelig → øker atferd); **negativ forsterkning** (*negative
  reinforcement* — **fjerne noe ubehagelig → øker atferd**); **straff** (*punishment* —
  utformet for å *redusere* atferd); **forsterkningsplaner** (*reinforcement schedules* —
  kontinuerlig vs. intermitterende: fast/variabel ratio/intervall); shaping. Norsk↔engelsk
  for alle.
- **Modell-/formelbank:** en 2×2-boks (legge til / fjerne × behagelig / ubehagelig) som
  plasserer positiv forsterkning, negativ forsterkning og straff — den tydeligste måten å
  tegne skillet på (F2-vaksine i figurform).
- **Markedsanvendelse (obligatorisk):** lojalitetsprogram/bonuskort som positiv forsterkning
  på variabel-ratio-plan (som slot-maskiner) → gjenkjøp; produkt som fjerner et ubehag
  (negativ forsterkning) markedsført på «bli kvitt X».
- **Momentliste:** (1) operant betinging med forsterkning som atferds-økende; (2) **positiv
  vs. negativ forsterkning vs. straff — presist skilt** (begge forsterkninger *øker*
  atferd; straff *reduserer*); (3) forsterkningsplaner med markedseksempel; (4) minst ett
  markedsføringseksempel per mekanisme; (5) shaping av kjøpsatferd.
- **Toppsvar-løftet:** tegne 2×2-boksen; eksplisitt slå fast at **negativ forsterkning IKKE
  er straff** (den mest premierte presisjonen her); vise variabel-ratio-planen bak
  lojalitets-/gamblingatferd.
- **Typiske feil:** **F2 (negativ forsterkning forvekslet med straff — egen warning, se
  under)**, F7 (positiv/negativ forsterkning byttet om), F3 (definisjon uten anvendelse),
  F6 (glemme forsterkningsplanene når de spørres).
- **Begrepspar-warning (egen `warning`-blokk):** «NEGATIV FORSTERKNING ≠ STRAFF». Negativ
  forsterkning *fjerner noe ubehagelig for å øke* atferd (ta en hodepinetablett →
  smerten forsvinner → du kjøper igjen). Straff er utformet for å *redusere* atferd. Å
  forveksle dem er fagets mest dokumenterte feil (H1999).
- **Kvote:** 20 quiz / 26 flashcards.

#### Kapittel 2.3: Vikarierende læring, involvering og læring i merkevarebygging
**id:** `mrk3481-bi-2-3` · **number:** 2.3 · **estimatedMinutes:** 45 · **prerequisites:** `mrk3481-bi-2-2`

- **Kapitteltype:** tema.
- **Description:** Observasjonslæring/vikarierende læring, involveringsnivå og
  informasjonsbearbeiding, og hvordan læringsteoriene samlet brukes til å bygge merker.
- **Eksamensbelegg:** Vikarierende læring inngår i læringstemaet 5/5; involvering knytter
  til beslutning (Del 6). Sjangre: S1, S2. Prioritet: **perfekt/kunne** (analysen §7 pkt. 1).
- **Begrepskontrakt:** Bandura / Schiffman & Kanuk ⚠: **vikarierende/observasjonslæring**
  (*vicarious/observational learning* — lære ved å observere modeller og deres
  konsekvenser); rollemodeller/kjendiser i reklame; **involvering** (*involvement* — høy/
  lav); de tre læringsteoriene kontrastert (klassisk/operant/kognitiv-vikarierende);
  merkelojalitet og merkeverdi (*brand loyalty/equity*) som læringsresultat. Norsk↔engelsk.
- **Modell-/formelbank:** oversiktsboks over de tre læringsteoriene (mekanisme + typisk
  markedsanvendelse) — taksonomi-boks med presist antall (tre).
- **Markedsanvendelse (obligatorisk):** kjendis-/influenser-reklame som vikarierende
  læring; bygge merkelojalitet gjennom kombinert klassisk + operant + observasjonslæring.
- **Momentliste:** (1) vikarierende læring med modell-konsekvens-mekanismen; (2) de tre
  læringsteoriene navngitt og kontrastert (S1 — presist antall); (3) involveringens rolle;
  (4) læring anvendt til merkelojalitet/-verdi; (5) markedseksempel per teori.
- **Toppsvar-løftet:** kontrastere de tre læringsteoriene i én oversikt; koble
  observasjonslæring til influenser-markedsføring; binde læring til merkeverdi.
- **Typiske feil:** F6 (bare to av tre læringsteorier), F7 (blande vikarierende med
  operant), F3 (teori uten merkeanvendelse).
- **Kvote:** 16 quiz / 20 flashcards.

### Del 3 — Motivasjon og behov

#### Kapittel 3.1: Maslows behovshierarki og kritikken av det
**id:** `mrk3481-bi-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `mrk3481-bi-1-1`

- **Kapitteltype:** tema (fast gjenganger med obligatorisk kritikk-ledd).
- **Description:** De fem behovsnivåene, antakelsen om nivårekkefølge, de kjente
  kritikkene og «Maslows reviderte» — og hvordan hierarkiet brukes i posisjonering og
  appell.
- **Eksamensbelegg:** Maslows behovshierarki 4/5 (H1998, H2000, kont.-99 + implisitt H2001);
  sensor krever eksplisitt **kritikk-leddet** når det bes om drøfting. Sjangre: S1, S3, S4.
  Prioritet: **perfekt** (analysen §7 pkt. 5; modell premieres tegnet).
- **Begrepskontrakt:** Maslow ⚠: **behovshierarki** (*hierarchy of needs* — fysiologisk →
  trygghet → sosialt/tilhørighet → ego/anerkjennelse → selvrealisering); antakelsen om at
  lavere behov må dekkes før høyere aktiveres; **kritikkene** (rigide nivåskiller;
  vanskelig empirisk testbart; kultur- og tidsbundet — rekkefølgen varierer); **«Maslows
  reviderte»** `(verifiser)`. Norsk↔engelsk for hvert nivå.
- **Modell-/formelbank (theorem):** **Maslow-pyramiden** — fem nivåer tegnet nederst→øverst
  med definisjon og ett produkteksempel per nivå. Dette er modellbankens ankerfigur;
  sensor premierer den tegnet.
- **Markedsanvendelse (obligatorisk):** posisjoner samme produktkategori mot ulike nivåer
  (bil som trygghet vs. som statussymbol); appeller til selvrealisering i merkevarebygging.
- **Momentliste:** (1) de fem nivåene navngitt i riktig rekkefølge (S1 — presist antall);
  (2) antakelsen om nivårekkefølge; (3) et produkteksempel per nivå; (4) **kritikkene**
  (rigid, ikke testbart, kulturbundet) når drøfting bes om; (5) eventuelt «Maslows reviderte».
- **Toppsvar-løftet:** **tegne pyramiden** (premieres); ta med kritikk-leddet (F8 er den
  vanligste feilen her); nevne den reviderte for ekstra.
- **Typiske feil:** F8 (mangler kritisk lag når drøfting bes om), F4 (pyramiden ikke
  tegnet), F6 (glemmer et nivå — særlig ego/anerkjennelse), F1 (feil antall nivåer).
- **Kvote:** 18 quiz / 24 flashcards.

#### Kapittel 3.2: Motivasjonsdynamikk — positiv/negativ motivasjon og optimalt stimulusnivå
**id:** `mrk3481-bi-3-2` · **number:** 3.2 · **estimatedMinutes:** 50 · **prerequisites:** `mrk3481-bi-3-1`

- **Kapitteltype:** tema.
- **Description:** Behov, motiv og mål; positiv vs. negativ motivasjon (tilnærming/unngåelse);
  optimalt stimulusnivå (OSL); utilitaristiske vs. hedoniske behov.
- **Eksamensbelegg:** Positiv/negativ motivasjon H2001; OSL H2000. Sjangre: S1, S2, S4.
  Prioritet: **perfekt** (analysen §7 pkt. 5).
- **Begrepskontrakt:** Schiffman & Kanuk ⚠: **behov/motiv/mål** (*need/motive/goal*);
  **positiv vs. negativ motivasjon** (*approach vs. avoidance* — drivkraft mot ønsket
  tilstand vs. bort fra uønsket); **optimalt stimulusnivå (OSL)** (*optimum stimulation
  level* — over-/understimulering; variasjonssøking); **utilitaristiske vs. hedoniske
  behov** (*utilitarian vs. hedonic*); rasjonelle vs. emosjonelle motiv. Norsk↔engelsk.
- **Modell-/formelbank:** OSL som en omvendt-U/aksefigur (stimulusnivå vs. tilfredshet);
  tilnærming/unngåelse som toakset motivfigur.
- **Markedsanvendelse (obligatorisk):** merkebytte/variasjonssøking forklart med OSL;
  reklame som spiller på unngåelse (negativ motivasjon — «unngå dårlig ånde»).
- **Momentliste:** (1) behov/motiv/mål-kjeden; (2) positiv vs. negativ motivasjon med
  eksempel; (3) OSL og variasjonssøking; (4) utilitaristisk vs. hedonisk behov; (5)
  markedseksempel per begrep.
- **Toppsvar-løftet:** koble OSL til merkebytte og «nyhets»-markedsføring; skille positiv/
  negativ motivasjon tydelig fra positiv/negativ forsterkning (2.2 — annet begrepspar!).
- **Typiske feil:** F7 (positiv/negativ motivasjon forvekslet med forsterkning), F3
  (motivbegrep uten anvendelse), F9 (OSL-eksempel som ikke handler om variasjonssøking).
- **Kvote:** 16 quiz / 20 flashcards.

### Del 4 — Personlighet og selvet

#### Kapittel 4.1: Freud og psykoanalytisk motivforskning
**id:** `mrk3481-bi-4-1` · **number:** 4.1 · **estimatedMinutes:** 50 · **prerequisites:** `mrk3481-bi-3-2`

- **Kapitteltype:** tema.
- **Description:** Freuds personlighetsstruktur id/ego/superego, det ubevisste, og
  motivforskningens bruk av dette i reklame.
- **Eksamensbelegg:** Freud 4/5 (H2000, kont.-99, H1999, H2001 — som del av personlighet/
  Freud-vs-neo-Freud). Sjangre: S1, S2, S4. Prioritet: **perfekt** (analysen §7 pkt. 6).
- **Begrepskontrakt:** Freud ⚠: **id/ego/superego** (*id/ego/superego* — driftene/
  lystprinsippet, realitetsprinsippet, samvittigheten/idealene); det ubevisste;
  **motivforskning** (*motivational research* — kvalitativ avdekking av ubevisste
  kjøpsmotiv); symbolbruk i reklame. Norsk↔engelsk.
- **Modell-/formelbank:** id/ego/superego som en tredelt strukturfigur (isfjell-/
  lagfigur) — taksonomi med presist antall (tre).
- **Markedsanvendelse (obligatorisk):** reklame som appellerer til id (nytelse/lyst) mens
  den gir superego en «unnskyldning»; motivforskning brukt til å avdekke skjulte motiv bak
  et produktkjøp.
- **Momentliste:** (1) de tre instansene navngitt og forklart (S1 — presist antall); (2)
  samspillet mellom dem; (3) det ubevisste og motivforskning; (4) markedsanvendelse (appell
  til id, superego-alibi); (5) grensene ved metoden.
- **Toppsvar-løftet:** vise samspillet (ikke bare tre løsrevne begreper); knytte
  motivforskning til reklamepraksis; klargjøre broen til neo-Freud (4.2).
- **Typiske feil:** F6 (id/ego uten superego), F7 (instansene forvekslet), F3 (struktur uten
  markedsanvendelse).
- **Kvote:** 16 quiz / 20 flashcards.

#### Kapittel 4.2: Neo-freudiansk teori, trekk, merkepersonlighet og selvbilde
**id:** `mrk3481-bi-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `mrk3481-bi-4-1`

- **Kapitteltype:** tema (fast begrepspar-skille: Freud vs. neo-Freud).
- **Description:** Horneys neo-freudianske typer (medgjørlig/aggressiv/uavhengig),
  trekkteori, merkepersonlighet og selvbilde — og det dokumenterte skillet Freud vs.
  neo-Freud.
- **Eksamensbelegg:** Neo-freudiansk (Horney) H1999; Freud vs. neo-Freud H2001;
  personlighet & forbruk 4/5. Sjangre: S1, S4. Prioritet: **perfekt** (analysen §7 pkt. 6).
- **Begrepskontrakt:** Horney / trekk-tradisjonen / Schiffman & Kanuk ⚠: **neo-freudiansk
  teori** (sosiale relasjoner over drifter); **Horneys tre typer** — **medgjørlig**
  (*compliant* — mot mennesker), **aggressiv** (*aggressive* — mot mennesker),
  **uavhengig** (*detached* — bort fra mennesker); **trekkteori** (*trait theory* —
  målbare, stabile trekk); **merkepersonlighet** (*brand personality*); **selvbilde/
  faktisk vs. ideelt selv** (*self-image/actual vs. ideal self*); Freud vs. neo-Freud som
  skille. Norsk↔engelsk.
- **Modell-/formelbank:** Horneys tre typer som en trekantfigur; selvbilde (faktisk/ideelt)
  som toakset figur.
- **Markedsanvendelse (obligatorisk):** produkter posisjonert mot Horney-typene (fellesskap
  vs. status vs. selvstendighet); merkepersonlighet brukt til å matche forbrukerens
  ideelle selv (kongruensprinsippet).
- **Momentliste:** (1) neo-freudiansk kjerne (relasjoner over drifter); (2) Horneys tre
  typer navngitt (S1 — presist antall); (3) trekkteori og merkepersonlighet; (4)
  selvbilde-kongruens; (5) **Freud vs. neo-Freud skarpt skilt** (S4) med markedseksempel.
- **Toppsvar-løftet:** presist Freud-vs-neo-Freud-skille (drifter/ubevisst vs. sosiale
  relasjoner); koble merkepersonlighet + selvbilde-kongruens til merkevalg.
- **Typiske feil:** F7 (Freud/neo-Freud forvekslet; Horney-typene byttet om), F6 (bare to
  av tre Horney-typer), F3 (personlighetsteori uten merkeanvendelse), F10 (engelsk term).
- **Kvote:** 16 quiz / 22 flashcards.

### Del 5 — Holdninger og holdningsendring

#### Kapittel 5.1: Holdningsbegrepet og tre-komponentmodellen
**id:** `mrk3481-bi-5-1` · **number:** 5.1 · **estimatedMinutes:** 50 · **prerequisites:** `mrk3481-bi-1-1`

- **Kapitteltype:** tema.
- **Description:** Holdning som lært evaluering, tre-komponentmodellen (kognitiv/affektiv/
  konativ) og komponentenes rekkefølge ved høy vs. lav involvering.
- **Eksamensbelegg:** Holdninger 5/5 (⭐⭐⭐, topptema); tre-komponent holdning H1998.
  Sjangre: S1, S2. Prioritet: **perfekt** (analysen §7 pkt. 2; porten til 5.2/5.3).
- **Begrepskontrakt:** Schiffman & Kanuk ⚠: **holdning** (*attitude* — en lært, relativt
  varig *evaluering* av et objekt); **tre-komponentmodellen** (*tricomponent model* —
  **kognitiv** (*cognitive*, tro/kunnskap), **affektiv** (*affective*, følelse), **konativ**
  (*conative*, handlingstendens)); rekkefølge/hierarki ved involvering (lære→føle→gjøre
  vs. lav-involverings-sekvenser); holdningsstyrke. Norsk↔engelsk.
- **Modell-/formelbank (theorem):** **tre-komponentmodellen** tegnet (kognitiv/affektiv/
  konativ) — taksonomi med presist antall (tre) + effekt-hierarki-varianter.
- **Markedsanvendelse (obligatorisk):** kampanje som treffer hver komponent (fakta →
  følelse → prøvekjøp); ulike sekvenser ved høy- vs. lavinvolveringsprodukt.
- **Momentliste:** (1) holdning som evaluering (norsk + engelsk); (2) de tre komponentene
  navngitt (S1 — presist antall); (3) rekkefølge ved involvering; (4) holdningsstyrke;
  (5) markedseksempel per komponent.
- **Toppsvar-løftet:** koble komponentene til kampanjevirkemidler; vise sekvensvariasjon
  ved involvering (bro til Del 6).
- **Typiske feil:** F6 (bare to av tre komponenter), F7 (kognitiv/affektiv/konativ
  forvekslet), F3 (modell uten anvendelse), F10 (engelsk term).
- **Kvote:** 16 quiz / 20 flashcards.

#### Kapittel 5.2: Multiattributtmodellen og Theory of Reasoned Action
**id:** `mrk3481-bi-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** `mrk3481-bi-5-1`

- **Kapitteltype:** tema (fagets sentrale modell-/formeltema).
- **Description:** Multiattributtmodellen A=Σbᵢeᵢ (holdning-til-objekt) og holdning-til-
  atferd-varianten, de tre måtene å endre en holdning på (b/e/n), og Theory of Reasoned
  Action — det mest gjenbrukte spørsmålet i arkivet.
- **Eksamensbelegg:** **Multiattributt-oppgaven («endre holdning ved å endre b/e/n») 3/5,
  nesten ordrett (H1999, H2000, kont.-99)**; TRA H2000, H2001. Sjangre: S3 (modell-
  anvendelse). Prioritet: **perfekt** (analysen §7 pkt. 2; sensor premierer formelen og
  straffer anbefaling løsrevet fra modellen — F5).
- **Begrepskontrakt:** Fishbein & Ajzen ⚠: **multiattributtmodellen** (*multiattribute
  model* — holdning som sum av produkt av tro og evaluering); symbolene **A** (holdning),
  **bᵢ** (styrken på troen om attributt i, *belief*), **eᵢ** (evalueringen av attributt i,
  *evaluation*), **n** (antall fremtredende attributter); de **tre endringsstrategiene** —
  endre **bᵢ** (troen), endre **eᵢ** (viktigheten/evalueringen), legge til/endre et
  attributt **(n)**; **Theory of Reasoned Action (TRA)** (intensjon = holdning-til-atferd +
  subjektiv norm); holdning-til-objekt vs. holdning-til-atferd. Norsk↔engelsk.
- **Modell-/formelbank (theorem):** **multiattributt-likningen A = Σbᵢeᵢ** skrevet ut med
  full symbolforklaring + **TRA-diagrammet** (holdning + subjektiv norm → intensjon →
  atferd) tegnet. Dette kapitlet har **ekte formelliste** (A, bᵢ, eᵢ, n; TRA-komponentene).
- **Markedsanvendelse (obligatorisk):** for en gitt merkeholdning, vis alle tre
  endringsstrategiene konkret — (a) styrk troen bᵢ («vår bil er tryggest»); (b) hev
  evalueringen eᵢ («trygghet er det viktigste»); (c) introduser et nytt attributt n
  («…og lavest utslipp»).
- **Momentliste:** (1) multiattributtmodellen med **formelen skrevet og symbolene forklart**;
  (2) de tre endringsstrategiene — **spesifiser hvilket element (b/e/n)** hver anbefaling
  endrer (F5); (3) TRA med subjektiv norm og intensjon (tegnet); (4) holdning-til-objekt vs.
  holdning-til-atferd; (5) et markedseksempel per strategi.
- **Toppsvar-løftet:** **skrive formelen og tegne TRA** (premieres); forankre HVER
  anbefaling i en modellkomponent (F5 er den mest straffede feilen her); skille de to
  holdningsvariantene.
- **Typiske feil:** **F5 (anbefaling uten å spesifisere b/e/n — kjernefeilen)**, F4 (formel/
  diagram ikke vist), F1 (feil antall endringsstrategier — «tre måter»), F7 (holdning-til-
  objekt/holdning-til-atferd forvekslet).
- **Kvote:** 20 quiz / 28 flashcards.

#### Kapittel 5.3: Holdning–atferd-gapet, kognitiv dissonans og atferd→holdning
**id:** `mrk3481-bi-5-3` · **number:** 5.3 · **estimatedMinutes:** 55 · **prerequisites:** `mrk3481-bi-5-2`

- **Kapitteltype:** tema.
- **Description:** Hvorfor holdning ikke alltid gir handling, den motsatte veien
  (atferd→holdning) via kognitiv dissonans og selvpersepsjon, og etterkjøpsdissonans.
- **Eksamensbelegg:** Atferd→holdning vs. TRA H2001; etterkjøpsdissonans kont.-99;
  holdning-atferd-gapet inngår i holdningstemaet 5/5. Sjangre: S1, S4. Prioritet:
  **perfekt** (analysen §7 pkt. 2).
- **Begrepskontrakt:** Festinger / Schiffman & Kanuk ⚠: **holdning–atferd-gapet**
  (*attitude–behavior gap*); **kognitiv dissonans** (*cognitive dissonance* — ubehag ved
  inkonsistens driver holdningsendring for å rettferdiggjøre atferd); **selvpersepsjon**
  (*self-perception* — slutte holdning fra egen atferd); **atferd→holdning** (holdning
  følger av handling, ikke omvendt); **etterkjøpsdissonans** (*post-purchase dissonance*)
  og etterkjøps-rasjonalisering. Norsk↔engelsk.
- **Modell-/formelbank:** to piler side om side — holdning→atferd (tradisjonell) vs.
  atferd→holdning (dissonans/selvpersepsjon) — som skillefigur.
- **Markedsanvendelse (obligatorisk):** «foot-in-the-door»/prøvekjøp som skaper holdning
  via atferd; etterkjøpskommunikasjon (bekreftelses-e-post, garanti) som demper
  etterkjøpsdissonans.
- **Momentliste:** (1) holdning–atferd-gapet; (2) kognitiv dissonans som drivkraft; (3)
  **atferd→holdning vs. holdning→atferd skarpt skilt** (S4); (4) etterkjøpsdissonans og
  hvordan markedsføring demper den; (5) markedseksempel per retning.
- **Toppsvar-løftet:** vise begge kausalretninger eksplisitt (den vanligste forvekslingen
  her); koble etterkjøpsdissonans til beslutningsprosessens etterkjøpsfase (Del 6).
- **Typiske feil:** F7 (holdning→atferd vs. atferd→holdning forvekslet), F8 (mangler
  drøftingslag om når holdning predikerer atferd), F3 (dissonans uten markedsanvendelse).
- **Kvote:** 18 quiz / 24 flashcards.

### Del 6 — Beslutningsprosesser og beslutningsregler

#### Kapittel 6.1: Beslutningsprosessen, involveringsnivåer og de tre settene
**id:** `mrk3481-bi-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `mrk3481-bi-2-3`

- **Kapitteltype:** tema.
- **Description:** Beslutningsnivå etter involvering, de fem trinnene i beslutningsprosessen,
  og evoked/inept/inert-settene i evalueringsfasen.
- **Eksamensbelegg:** Beslutning 5/5 (⭐⭐⭐, topptema); beslutningsnivåer H1998; evoked set
  H1999. Sjangre: S1, S2. Prioritet: **perfekt** (analysen §7 pkt. 4).
- **Begrepskontrakt:** Schiffman & Kanuk ⚠: **beslutningsnivåer** (*extensive/limited/
  routinized/nominal problem solving* — utvidet/begrenset/rutinemessig/nominell, etter
  involvering); de fem prosesstrinnene (**behovserkjennelse → informasjonssøk → evaluering
  av alternativer → kjøp → etterkjøpsevaluering**); **evoked set** (vurderte merker),
  **inept set** (avviste), **inert set** (likegyldige); indre vs. ytre søk. Norsk↔engelsk.
- **Modell-/formelbank (theorem):** beslutningsprosessens fem trinn som flytfigur; de tre
  settene (evoked/inept/inert) som en delmengde-figur av kjente merker.
- **Markedsanvendelse (obligatorisk):** få et merke inn i evoked set (synlighet,
  vurderingskriterier); tilpasse markedsføring til involveringsnivå (informasjonstung ved
  utvidet, påminnelse ved rutinemessig).
- **Momentliste:** (1) beslutningsnivåene etter involvering (S1); (2) de fem prosesstrinnene
  (S1 — presist antall); (3) evoked/inept/inert-settene skilt (F7); (4) indre/ytre søk; (5)
  markedseksempel per trinn/sett.
- **Toppsvar-løftet:** koble involveringsnivå til hele prosessens dybde; vise hvordan et
  merke jobber seg inn i evoked set.
- **Typiske feil:** F7 (evoked/inept/inert forvekslet), F6 (glemme et prosesstrinn), F3
  (prosess uten markedsanvendelse), F10 (engelsk term evoked set).
- **Kvote:** 18 quiz / 24 flashcards.

#### Kapittel 6.2: Beslutningsregler — kompensatoriske vs. ikke-kompensatoriske
**id:** `mrk3481-bi-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `mrk3481-bi-6-1`

- **Kapitteltype:** tema (fast begrepspar-skille).
- **Description:** Hvordan forbrukeren veier alternativer: kompensatoriske vs. ikke-
  kompensatoriske regler (konjunktiv, disjunktiv, leksikografisk), og etterkjøps-
  rasjonalisering.
- **Eksamensbelegg:** Beslutningsregler H2000; ikke-kompensatoriske regler H2001;
  etterkjøpsdissonans/-rasjonalisering kont.-99, H2001. Sjangre: S1, S4. Prioritet:
  **perfekt** (analysen §7 pkt. 4).
- **Begrepskontrakt:** Schiffman & Kanuk ⚠: **kompensatorisk regel** (*compensatory* — sterk
  score på ett attributt kan veie opp for svak på et annet); **ikke-kompensatoriske regler**
  (*noncompensatory*) — **konjunktiv** (*conjunctive* — minstekrav på alle attributter),
  **disjunktiv** (*disjunctive* — høyt krav på minst ett), **leksikografisk**
  (*lexicographic* — rangér attributter, velg beste på det viktigste); **etterkjøps-
  rasjonalisering** (*post-purchase rationalization*). Norsk↔engelsk.
- **Modell-/formelbank:** en attributt×merke-tabell som viser hvordan hver regel gir
  ulikt valg (kompensatorisk vektet sum vs. terskel-/rangeringsregler) — tegnbar
  beslutningsmatrise.
- **Markedsanvendelse (obligatorisk):** markedsføre et merke som er middels overalt (spill
  på kompensatorisk regel) vs. et som topper på ett kriterium (spill på leksikografisk).
- **Momentliste:** (1) **kompensatorisk vs. ikke-kompensatorisk skarpt skilt** (kjerneskille,
  F7); (2) de tre ikke-kompensatoriske reglene navngitt (S1 — presist antall); (3) hvordan
  hver regel gir ulikt valg (matrisen); (4) etterkjøps-rasjonalisering; (5) markedseksempel
  per regeltype. **NB:** ram bare opp underreglene når skillet krever det — å liste alle
  ikke-kompensatoriske regler når bare komp./ikke-komp.-skillet spørres, premieres ikke
  (analysen §4, F1).
- **Toppsvar-løftet:** vise med matrisen hvordan samme data gir ulikt valg under ulike
  regler; forankre markedsanbefalingen i regelen.
- **Typiske feil:** F7 (kompensatorisk/ikke-kompensatorisk forvekslet; konjunktiv/disjunktiv/
  leksikografisk byttet), F1 (opplisting uten funksjon når bare skillet bes om), F3 (regel
  uten markedsanvendelse).
- **Kvote:** 18 quiz / 24 flashcards.

### Del 7 — Diffusjon og innovasjon

#### Kapittel 7.1: De fem produktegenskapene og adoptørkategoriene
**id:** `mrk3481-bi-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `mrk3481-bi-5-1`

- **Kapitteltype:** tema (presist-antall-tema).
- **Description:** De fem produktegenskapene som styrer adopsjonshastighet, og
  adoptørkategoriene — spørsmålet der sensor eksplisitt straffer feil antall.
- **Eksamensbelegg:** Diffusjon 5/5 (⭐⭐⭐, topptema); de fem produktegenskapene H1998,
  H2000, kont.-99, H2001. **Sensor straffer å beskrive flere/færre enn bedt om** (F1).
  Sjangre: S1, S2. Prioritet: **perfekt** (analysen §7 pkt. 3).
- **Begrepskontrakt:** Rogers / Schiffman & Kanuk ⚠: **de fem produktegenskapene** —
  **relativ fordel** (*relative advantage*), **kompatibilitet** (*compatibility*),
  **kompleksitet** (*complexity*), **prøvbarhet** (*trialability*), **observerbarhet**
  (*observability*); **adoptørkategorier** (*innovators, early adopters, early majority,
  late majority, laggards*); adopsjonsprosessen. Norsk↔engelsk for alle fem + kategoriene.
- **Modell-/formelbank (theorem):** de **fem produktegenskapene** som en nummerert huskeliste
  (presist antall!) med retning (høy relativ fordel/kompatibilitet/prøvbarhet/observerbarhet
  = raskere; høy kompleksitet = tregere); adopsjonskurven med de fem adoptørkategoriene.
- **Markedsanvendelse (obligatorisk):** analyser et nytt produkts adopsjonshastighet på
  alle fem egenskapene og foreslå tiltak per egenskap (gratis prøve → prøvbarhet; enkel
  bruk → mindre kompleksitet).
- **Momentliste:** (1) de fem egenskapene navngitt (S1 — **presist antall, ikke fire, ikke
  seks**, F1); (2) retningen hver egenskap virker i; (3) adoptørkategoriene; (4)
  markedsanvendelse per egenskap; (5) at man svarer på nøyaktig det antall oppgaven ber om.
- **Toppsvar-løftet:** dekke alle fem korrekt navngitt; koble hver egenskap til et konkret
  markedstiltak; treffe antallskravet eksakt.
- **Typiske feil:** **F1 (feil antall — bare tre/fire av fem, eller lister ekstra)**, F6
  (ufullstendig taksonomi), F3 (egenskap uten markedstiltak), F10 (engelsk term).
- **Kvote:** 18 quiz / 24 flashcards.

#### Kapittel 7.2: Innovasjonstyper og det sosiale systemet
**id:** `mrk3481-bi-7-2` · **number:** 7.2 · **estimatedMinutes:** 50 · **prerequisites:** `mrk3481-bi-7-1`

- **Kapitteltype:** tema.
- **Description:** Klassifisering av innovasjoner etter atferdsendring og etter nytte, og
  det sosiale systemets rolle i spredning.
- **Eksamensbelegg:** Innovasjonstyper kont.-99, H1999, H2001; det sosiale systemet H1999;
  del av diffusjon 5/5. Sjangre: S1, S4. Prioritet: **perfekt** (analysen §7 pkt. 3).
- **Begrepskontrakt:** Rogers / Schiffman & Kanuk ⚠: **innovasjonstyper etter atferdsendring**
  — **kontinuerlig** (*continuous*), **dynamisk-kontinuerlig** (*dynamically continuous*),
  **diskontinuerlig** (*discontinuous* — mest disruptiv); **innovasjonstyper etter nytte** —
  **funksjonell/symbolsk/bruk/estetisk** `(verifiser inndeling mot dagens pensum)`; **det
  sosiale systemet** (*social system* — moderne vs. tradisjonell kultur, homofili, fysisk
  nærhet). Norsk↔engelsk.
- **Modell-/formelbank:** innovasjonstypene på en akse fra minst til mest atferdsendrende
  (kontinuerlig → dynamisk-kontinuerlig → diskontinuerlig) — taksonomi med presist antall.
- **Markedsanvendelse (obligatorisk):** klassifiser to reelle produktlanseringer etter
  atferdsendring og forklar konsekvensen for markedsføringsstrategi.
- **Momentliste:** (1) de tre innovasjonstypene etter atferdsendring (S1 — presist antall);
  (2) nytte-inndelingen; (3) det sosiale systemets rolle; (4) markedseksempel per type;
  (5) hvordan innovasjonstype påvirker adopsjonshastighet (kobling til 7.1).
- **Toppsvar-løftet:** plassere innovasjoner presist på atferdsendrings-aksen; koble til
  de fem produktegenskapene (7.1); vise det sosiale systemets rolle.
- **Typiske feil:** F6/F1 (bare to av tre innovasjonstyper), F7 (kontinuerlig/dynamisk-
  kontinuerlig/diskontinuerlig forvekslet), F3 (type uten strategikobling).
- **Kvote:** 16 quiz / 22 flashcards.

### Del 8 — Sosial, familiær og kulturell kontekst

#### Kapittel 8.1: Referansegrupper og sosial påvirkning
**id:** `mrk3481-bi-8-1` · **number:** 8.1 · **estimatedMinutes:** 50 · **prerequisites:** `mrk3481-bi-5-1`

- **Kapitteltype:** tema.
- **Description:** Referansegruppetyper og modellen for når gruppepåvirkning er sterk:
  offentlig/privat × luksus/nødvendighet.
- **Eksamensbelegg:** Referansegrupper 2/5 (H1998, H1999). Sjangre: S1, S3. Prioritet:
  kunne (analysen §7 pkt. 10; ⭐⭐).
- **Begrepskontrakt:** Bearden & Etzel `(verifiser)` / Schiffman & Kanuk ⚠: **referansegruppe**
  (*reference group*); **medlemsgruppe, aspirasjonsgruppe, dissosiativ gruppe**
  (*membership/aspirational/dissociative*); typer sosial påvirkning (informativ, normativ,
  verdiuttrykkende); **offentlig/privat × luksus/nødvendighet**-matrisen (grad av
  gruppepåvirkning på produkt- vs. merkevalg); opinionsledere (*opinion leaders*).
  Norsk↔engelsk.
- **Modell-/formelbank (theorem):** **referansegruppe-matrisen** (2×2: offentlig/privat ×
  luksus/nødvendighet) tegnet, med hvor gruppepåvirkning er sterkest på produkt vs. merke.
- **Markedsanvendelse (obligatorisk):** plasser to produkter i matrisen og forklar hvor
  mye aspirasjons-/kjendispåvirkning i reklame vil virke.
- **Momentliste:** (1) referansegruppetypene (S1); (2) typene sosial påvirkning; (3)
  **matrisen tegnet** og hva den predikerer; (4) opinionsledere; (5) markedseksempel via
  matrisen.
- **Toppsvar-løftet:** **tegne 2×2-matrisen** (premieres); skille produkt- fra merkepåvirkning.
- **Typiske feil:** F4 (matrisen ikke tegnet), F7 (gruppetypene forvekslet), F3 (begrep uten
  anvendelse).
- **Kvote:** 14 quiz / 18 flashcards.

#### Kapittel 8.2: Familie, husholdning og familiens livssyklus
**id:** `mrk3481-bi-8-2` · **number:** 8.2 · **estimatedMinutes:** 45 · **prerequisites:** `mrk3481-bi-8-1`

- **Kapitteltype:** tema.
- **Description:** Familiens livssyklus (FLC), beslutningsroller i husholdningen og
  kjøpsbeslutninger i par.
- **Eksamensbelegg:** Familie/FLC 3/5 (H1998, kont.-99, H2001). Sjangre: S1, S2. Prioritet:
  kunne (analysen §7 pkt. 9; ⭐⭐).
- **Begrepskontrakt:** Schiffman & Kanuk ⚠: **familiens livssyklus (FLC)** (*family life
  cycle* — de fem/flere fasene: ungkar → nygift → fullt rede I/II → tomt rede →
  gjenlevende `(verifiser fasenavn mot dagens pensum)`); **beslutningsroller** (*initiator,
  influencer, decider, buyer, user* — igangsetter/påvirker/beslutter/kjøper/bruker);
  felles vs. autonome husholdningsbeslutninger. Norsk↔engelsk.
- **Modell-/formelbank:** FLC som en fasefigur (livsløpstidslinje); beslutningsrollene som
  en rolleboks.
- **Markedsanvendelse (obligatorisk):** tilpass tilbud/budskap til en FLC-fase (barnefamilie
  vs. tomt rede); rett budskapet mot riktig beslutningsrolle.
- **Momentliste:** (1) FLC-fasene med typiske behov; (2) beslutningsrollene navngitt (S1);
  (3) felles vs. autonome beslutninger; (4) markedsanvendelse per fase/rolle; (5) hvem man
  kommuniserer med vs. hvem som bruker.
- **Toppsvar-løftet:** koble FLC-fase til konkrete produktbehov; treffe riktig
  beslutningsrolle i budskapet.
- **Typiske feil:** F6 (ufullstendig FLC / mangler roller), F7 (rollene forvekslet), F3
  (FLC uten markedsanvendelse).
- **Kvote:** 14 quiz / 18 flashcards.

#### Kapittel 8.3: Kultur, subkultur og segmentering
**id:** `mrk3481-bi-8-3` · **number:** 8.3 · **estimatedMinutes:** 50 · **prerequisites:** `mrk3481-bi-8-2`

- **Kapitteltype:** tema.
- **Description:** Kultur som lært verdisystem, Hofstedes dimensjoner, inter-kulturell
  forbrukeranalyse og subkulturbaser — pluss en kort «bør kjenne til»-dekning av
  segmentering/forbrukertyper.
- **Eksamensbelegg:** Kultur/subkultur 3/5 (H1998 Hofstede, H1999 inter-kulturell analyse,
  kont.-99 subkulturer); segmentering 1/5 (H2001, «bør kjenne til»). Sjangre: S1, S4.
  Prioritet: kunne (analysen §7 pkt. 8; ⭐⭐).
- **Begrepskontrakt:** Hofstede / Schiffman & Kanuk ⚠: **kultur** (*culture* — lært, delt
  verdi-/meningssystem); **Hofstedes dimensjoner** (*Hofstede's dimensions* —
  maktdistanse, individualisme/kollektivisme, maskulinitet/femininitet, usikkerhets-
  unnvikelse — de fire klassiske); **inter-kulturell analyse** (standardisert vs. tilpasset
  strategi); **subkultur** (*subculture* — etnisitet, alder, region, religion). **Bør
  kjenne til (ETTER kjernestoffet, merket):** segmenteringskategorier/forbrukertyper.
  Norsk↔engelsk.
- **Modell-/formelbank:** Hofstede-dimensjonene som en profil-/søylefigur for
  landssammenligning; standardisert vs. tilpasset som beslutningsakse.
- **Markedsanvendelse (obligatorisk):** vurder om et budskap kan standardiseres eller må
  tilpasses to land ut fra Hofstede-profiler; rett et tilbud mot en subkultur.
- **Momentliste:** (1) kultur som lært verdisystem; (2) Hofstede-dimensjonene (S1); (3)
  inter-kulturell analyse (likheter/forskjeller → standardisert vs. tilpasset, S4); (4)
  subkulturbaser; (5) markedseksempel. Segmentering nevnes kort til slutt, merket «bør
  kjenne til».
- **Toppsvar-løftet:** bruke Hofstede-profiler til en konkret standardiser/tilpass-avgjørelse;
  skille kultur fra subkultur.
- **Typiske feil:** F6 (bare noen Hofstede-dimensjoner), F8 (mangler drøfting standardisert/
  tilpasset når bedt), F3 (kulturbegrep uten anvendelse).
- **Kvote:** 16 quiz / 20 flashcards.

### Del 9 — Moderne overbygning *(påbygd — arkivet taust, alt merket `(verifiser)`)*

> **Hele Del 9 er bygd på fagbeskrivelsen + forbrukerpsykologisk allmennkunnskap, ikke på
> arkivet.** Ingen arkivfrekvens finnes. Hvert kapittel åpner med et eksplisitt forbehold
> om at temaet er forventet sentralt i dagens MRK 3481 men ikke dokumentert i
> forgjengerarkivet, og teoretiker-/pensumkoblinger merkes `(verifiser)`. Temaene bygges
> primært for den sannsynlige case-formen (S5), men også som korte redegjørelser.

#### Kapittel 9.1: Nudging og atferdsdesign
**id:** `mrk3481-bi-9-1` · **number:** 9.1 · **estimatedMinutes:** 50 · **prerequisites:** `mrk3481-bi-6-2`

- **Kapitteltype:** tema (moderne, `(verifiser)`).
- **Description:** System 1/2 og heuristikker, valgarkitektur, defaults og dulting — den
  atferdsøkonomiske overbygningen på beslutningskapitlet.
- **Eksamensbelegg:** **Ikke i arkivet** — forventet sentralt i dagens fag `(verifiser)`.
  Sjangre: S2, S5 (case). Prioritet: perfekt (fagbeskrivelse).
- **Begrepskontrakt:** Thaler & Sunstein / Kahneman `(verifiser)`: **nudging/dulting**
  (*nudge*); **valgarkitektur** (*choice architecture*); **defaults** (*default options*);
  **System 1 vs. System 2** (*intuitive vs. deliberate*); sentrale heuristikker (forankring,
  tilgjengelighet, tap-aversjon) `(verifiser omfang mot pensum)`. Norsk↔engelsk.
- **Modell-/formelbank:** System 1/System 2 som toboks-figur; en «nudge-verktøykasse»
  (defaults, framing, sosialt bevis) som liste.
- **Markedsanvendelse (obligatorisk):** design en default (f.eks. automatisk grønt/
  spare-valg) og forklar mekanismen; bruk framing/sosialt bevis i en netthandelssituasjon.
- **Momentliste:** (1) System 1/2-skillet; (2) valgarkitektur og defaults; (3) sentrale
  heuristikker; (4) markedsanvendelse (minst én nudge); (5) grensen mot manipulasjon
  (bro til etikk 9.5).
- **Toppsvar-løftet:** koble nudging til beslutningsreglene (Del 6) og til etikk (9.5); vise
  en konkret valgarkitektur.
- **Typiske feil:** F3 (nudge-begrep uten anvendelse), F7 (System 1/2 forvekslet;
  nudge/manipulasjon), F9 (eksempel som ikke er en reell nudge).
- **Kvote:** 14 quiz / 18 flashcards.

#### Kapittel 9.2: Digital og teknologisk forbrukeratferd
**id:** `mrk3481-bi-9-2` · **number:** 9.2 · **estimatedMinutes:** 45 · **prerequisites:** `mrk3481-bi-9-1`

- **Kapitteltype:** tema (moderne, `(verifiser)`).
- **Description:** Netthandel, sosiale medier, algoritmisk påvirkning og personalisering —
  de klassiske prosessene (persepsjon, læring, sosial påvirkning) i digital kontekst.
- **Eksamensbelegg:** **Ikke i arkivet** — forventet sentralt `(verifiser)`. Sjangre: S2, S5.
  Prioritet: perfekt (fagbeskrivelse).
- **Begrepskontrakt:** `(verifiser)`: **digital/nettbasert forbrukeratferd**; **sosialt
  bevis/eWOM** (*social proof/electronic word-of-mouth*); **algoritmisk anbefaling/
  personalisering** (*recommendation/personalization*); **influensermarkedsføring** (bro
  til vikarierende læring 2.3); netthandelens beslutningskontekst; oppmerksomhetsøkonomi.
  Norsk↔engelsk.
- **Modell-/formelbank:** en «digital forsterknings-loop» (visning → klikk → data →
  personalisering) som syklusfigur.
- **Markedsanvendelse (obligatorisk):** bruk eWOM/anmeldelser som sosialt bevis i en
  nettbutikk; forklar hvordan personalisering utnytter læring/persepsjon.
- **Momentliste:** (1) hva som er nytt digitalt vs. de tidløse prosessene; (2) sosialt bevis/
  eWOM; (3) algoritmisk personalisering; (4) influensere som modeller (2.3); (5) et
  markedseksempel + et personvern-/etikkforbehold.
- **Toppsvar-løftet:** knytte digitale fenomener tilbake til de klassiske mekanismene
  (persepsjon/læring/sosial påvirkning) — ikke behandle dem som helt nye.
- **Typiske feil:** F3 (digitalt fenomen uten kobling til mekanisme), F9 (eksempel uten
  reell forbrukerpsykologisk mekanisme).
- **Kvote:** 12 quiz / 16 flashcards.

#### Kapittel 9.3: Bærekraftig og grønn forbrukeratferd
**id:** `mrk3481-bi-9-3` · **number:** 9.3 · **estimatedMinutes:** 45 · **prerequisites:** `mrk3481-bi-5-3`

- **Kapitteltype:** tema (moderne, `(verifiser)`).
- **Description:** Holdning–atferd-gapet anvendt på miljøvalg, ansvarlig forbruk og
  grønnvasking.
- **Eksamensbelegg:** **Ikke i arkivet** — forventet sentralt `(verifiser)`. Sjangre: S2, S4,
  S5. Prioritet: perfekt (fagbeskrivelse). Bygger på holdning–atferd-gapet (5.3).
- **Begrepskontrakt:** `(verifiser)`: **grønn/bærekraftig forbrukeratferd** (*green/
  sustainable consumption*); **holdning–atferd-gapet i miljøvalg** (*green attitude–behavior
  gap* — positiv miljøholdning gir ofte ikke grønn handling); **ansvarlig forbruk**;
  **grønnvasking** (*greenwashing*); barrierer (pris, bekvemmelighet, tillit). Norsk↔engelsk.
- **Modell-/formelbank:** holdning–atferd-gapet (fra 5.3) anvendt på miljø, med barriere-
  liste mellom holdning og handling.
- **Markedsanvendelse (obligatorisk):** foreslå tiltak som lukker det grønne gapet (nudge,
  redusert barriere) forankret i holdning–atferd-modellen; skille ekte grønn posisjonering
  fra grønnvasking.
- **Momentliste:** (1) det grønne holdning–atferd-gapet; (2) barrierene mellom holdning og
  handling; (3) tiltak som lukker gapet (kobling til nudging 9.1 og TRA 5.2); (4)
  grønnvasking og etikk; (5) markedseksempel.
- **Toppsvar-løftet:** forankre tiltak i holdning–atferd-modellen (ikke løsrevne råd — F5-
  analogi); drøfte grønnvasking (S4).
- **Typiske feil:** F3 (miljøbegrep uten anvendelse), F8 (mangler drøfting av grønnvasking
  når bedt), F5 (tiltak løsrevet fra holdning–atferd-modellen).
- **Kvote:** 12 quiz / 16 flashcards.

#### Kapittel 9.4: Emosjoner og sansemarkedsføring
**id:** `mrk3481-bi-9-4` · **number:** 9.4 · **estimatedMinutes:** 45 · **prerequisites:** `mrk3481-bi-1-2`

- **Kapitteltype:** tema (moderne, `(verifiser)`).
- **Description:** Emosjoners rolle i forbrukeratferd og multisensorisk/atmosfærisk
  markedsføring — en utvidelse av persepsjons- og motivasjonskapitlene.
- **Eksamensbelegg:** **Ikke i arkivet** (utover Freuds motivasjonsarv) — forventet
  `(verifiser)`. Sjangre: S2, S5. Prioritet: perfekt (fagbeskrivelse). Bygger på persepsjon
  (1.2) og motivasjon (3.2).
- **Begrepskontrakt:** `(verifiser)`: **emosjoner i forbrukeratferd** (*consumer emotions* —
  affekt som driver valg og minne); **sansemarkedsføring** (*sensory marketing* —
  multisensorisk påvirkning); **atmosfærikk** (*atmospherics* — butikk-/nettmiljøets
  sanselige utforming); hedonisk konsum (kobling til 3.2). Norsk↔engelsk.
- **Modell-/formelbank:** de fem sansene → affekt → atferd som en enkel sanse-figur;
  atmosfærikk-elementer som liste.
- **Markedsanvendelse (obligatorisk):** design en multisensorisk butikkopplevelse (duft/
  lyd/lys) og forklar den emosjonelle mekanismen; bruk emosjonell reklame som holdnings-
  virkemiddel (affektiv komponent, 5.1).
- **Momentliste:** (1) emosjoners rolle i valg/minne; (2) sansemarkedsføring/multisensorisk;
  (3) atmosfærikk; (4) kobling til affektiv holdningskomponent (5.1) og hedoniske behov
  (3.2); (5) markedseksempel.
- **Toppsvar-løftet:** koble emosjon/sanser tilbake til persepsjon (1.2) og holdningens
  affektive komponent (5.1); vise en konkret sanseanvendelse.
- **Typiske feil:** F3 (emosjonsbegrep uten anvendelse), F9 (eksempel uten reell sanse-/
  emosjonsmekanisme).
- **Kvote:** 12 quiz / 16 flashcards.

#### Kapittel 9.5: Etikk ved påvirkning og forbrukeratferdens mørke side
**id:** `mrk3481-bi-9-5` · **number:** 9.5 · **estimatedMinutes:** 50 · **prerequisites:** `mrk3481-bi-9-1`

- **Kapitteltype:** tema (moderne + arkiv-«mørk side», `(verifiser)` for etikkdelen).
- **Description:** Etikk ved påvirkning og reklame, ansvarlig markedsføring, og den mørke
  siden (tvangsforbruk) — der arkivet møter fagbeskrivelsens etikkmål.
- **Eksamensbelegg:** **Tvangsforbruk (compulsive consumption) H2000** (1/5, arkiv);
  påvirknings-etikk **ikke i arkivet** men eksplisitt generell-kompetanse-mål i dagens fag
  `(verifiser)`. Sjangre: S2, S4, S5. Prioritet: perfekt (fagbeskrivelse) / kjenne (arkiv-
  delen).
- **Begrepskontrakt:** Schiffman & Kanuk (dark side) `(verifiser for etikk-rammeverk)`:
  **tvangsforbruk** (*compulsive consumption* — gjentatt, ukontrollert kjøp med negative
  konsekvenser — skille fra normal shopping, F9); **påvirknings-etikk** (grensen mellom
  legitim påvirkning og manipulasjon); **ansvarlig markedsføring**; sårbare forbrukere;
  «dark patterns» (bro til nudging 9.1). Norsk↔engelsk.
- **Modell-/formelbank:** en akse fra legitim påvirkning → manipulasjon → skade, med
  vurderingskriterier; ikke en fast pensummodell (merket).
- **Markedsanvendelse (obligatorisk):** vurder et konkret virkemiddel (nudge/reklame) etisk;
  skille en «dark pattern» fra en legitim nudge.
- **Momentliste:** (1) tvangsforbruk presist definert og **skilt fra normal shopping** (F9);
  (2) påvirknings-etikkens grense (legitim vs. manipulasjon); (3) ansvarlig markedsføring/
  sårbare forbrukere; (4) etisk vurdering av et virkemiddel (S4); (5) kobling til nudging
  (9.1) og den mørke siden.
- **Toppsvar-løftet:** ta en begrunnet etisk stilling (S4); bruke tvangsforbruk-eksempel som
  faktisk demonstrerer mekanismen (F9).
- **Typiske feil:** F9 (tvangsforbruk-eksempel som bare er normal shopping), F8 (mangler
  etisk vurdering når bedt), F3 (etikkbegrep uten anvendelse).
- **Kvote:** 12 quiz / 16 flashcards.

### Del 10 — Eksamenstrening

> Fem sjanger-/drillkapitler (S1–S5 + feilvaksine), fire modellbesvarelser (DNA-krav ≥3)
> og tre øvingseksamener. Modellbesvarelsene og øvingseksamenene gjenbruker modellbanken,
> momentlistene og begrepsparene fra temadelene. Alt NYSKREVET.

#### Kapittel 10.1: Sjanger S1 — «Navngi og beskriv X» (taksonomi + presist antall)
**id:** `mrk3481-bi-10-1` · **number:** 10.1 · **estimatedMinutes:** 40 · **prerequisites:** `mrk3481-bi-0-2`

- **Kapitteltype:** sjangerkapittel.
- **Description:** Hvordan man gjengir en pensumtaksonomi fullstendig og med riktig antall
  ledd — grunntypen der sensor sjekker at alle ledd er med.
- **Eksamensbelegg:** S1 er grunntypen i nesten hvert arkivsett. Prioritet: perfekt (meta).
- **Innhold:** oppskrift (les antallskravet → navngi hvert ledd korrekt → kort presis
  beskrivelse per ledd → ett eksempel), tidsbudsjett; gjennomskrevet eksempelsvar (f.eks.
  de fem diffusjonsegenskapene) med markering av hvor «feil antall» (F1) og «ufullstendig
  taksonomi» (F6) ville rammet; 3–5 nyskrevne S1-oppgaver med momentliste-løsning.
- **Typiske feil:** F1 (feil antall), F6 (ufullstendig taksonomi), F10 (engelsk term).
- **Kvote:** 8 quiz / 6 flashcards.

#### Kapittel 10.2: Sjanger S2/S3 — «Forklar + anvend» og «Beskriv modell/formel + bruk den»
**id:** `mrk3481-bi-10-2` · **number:** 10.2 · **estimatedMinutes:** 45 · **prerequisites:** `mrk3481-bi-10-1`

- **Kapitteltype:** sjangerkapittel.
- **Description:** De to vanligste malene: begrep→markedsanvendelse (S2) og modell/formel→
  anvendelse (S3), med vekt på å tegne modellen og forankre anbefalingen i den.
- **Eksamensbelegg:** S2 er den vanligste malen; S3 er modell-/formel-oppgavene sensor
  premierer. Prioritet: perfekt (meta).
- **Innhold:** oppskrift for hver (definer → mekanisme → markedsanvendelse; tegn modell/vis
  formel → anvend på gitt problem); gjennomskrevne eksempler (stimulusgeneralisering S2;
  multiattributt b/e/n S3) med margkommentar om hvor modell-tegning (F4) og «anbefaling
  løsrevet fra modellen» (F5) avgjør; 4–6 nyskrevne S2/S3-oppgaver med momentliste.
- **Typiske feil:** F3 (definisjon uten anvendelse), F4 (modell ikke tegnet), F5 (anbefaling
  løsrevet fra modellen).
- **Kvote:** 8 quiz / 6 flashcards.

#### Kapittel 10.3: Sjanger S4 — «Sammenlign/skill + drøft» og begrepspar-galleriet
**id:** `mrk3481-bi-10-3` · **number:** 10.3 · **estimatedMinutes:** 45 · **prerequisites:** `mrk3481-bi-10-2`

- **Kapitteltype:** sjangerkapittel.
- **Description:** Hvordan man skiller nære begreper skarpt og legger på et lite
  drøftingslag der oppgaven ber om det — samlet begrepspar-galleri.
- **Eksamensbelegg:** S4 (kontrast + lite drøftingslag) i flere sett; Maslow-kritikk er
  prototypen. Prioritet: perfekt (meta).
- **Innhold:** oppskrift (presis kontrast → eksempel → kritisk merknad); **begrepspar-
  galleriet** som fast oppslag (negativ forsterkning/straff, klassisk/instrumentell,
  generalisering/diskriminering, kompensatorisk/ikke-kompensatorisk, absolutt/JND, Freud/
  neo-Freud, holdning→atferd/atferd→holdning, evoked/inept/inert, merke-/linjeutvidelse);
  gjennomskrevet Maslow-med-kritikk-eksempel; 4–6 nyskrevne S4-oppgaver.
- **Typiske feil:** F7 (uklare begrepspar-skiller), F8 (mangler kritisk lag), F2 (negativ
  forsterkning ≠ straff).
- **Kvote:** 8 quiz / 8 flashcards.

#### Kapittel 10.4: Sjanger S5 — case-anvendelse (den sannsynlige moderne formen)
**id:** `mrk3481-bi-10-4` · **number:** 10.4 · **estimatedMinutes:** 50 · **prerequisites:** `mrk3481-bi-10-3`

- **Kapitteltype:** sjangerkapittel (moderne form, `(verifiser)`).
- **Description:** Hvordan man løser en kort forbruks-/markedscase ved å anvende flere
  begreper (persepsjon + læring + holdning) og vurdere et etisk/bærekraftshensyn.
- **Eksamensbelegg:** **Ikke dokumentert i arkivet** — sannsynlig i dagens form `(verifiser)`;
  i tråd med fagbeskrivelsens ferdighetsmål. Prioritet: perfekt (meta).
- **Innhold:** oppskrift (les casen → identifiser hvilke begreper som er relevante → anvend
  hvert med modell/mekanisme → vurder etikk/bærekraft → anbefaling); gjennomskrevet case
  (f.eks. lansering av et nytt produkt) som trekker på flere temadeler; 3–4 nyskrevne
  caser med momentliste-fasit. Understreker at case-formen krever de samme
  kjernemekanismene som kort-formen — bare koblet sammen.
- **Typiske feil:** F3 (begrep uten anvendelse i casen), F5 (anbefaling uten modellforankring),
  F9 (eksempel/analyse som ikke passer casen).
- **Kvote:** 8 quiz / 6 flashcards.

#### Kapittel 10.5: Feilvaksinen og den tospråklige begrepspar-drillen
**id:** `mrk3481-bi-10-5` · **number:** 10.5 · **estimatedMinutes:** 45 · **prerequisites:** `mrk3481-bi-10-4`

- **Kapitteltype:** feildrill.
- **Description:** De ti feilene (F1–F10) som énlinjers varsellamper, med de dokumenterte
  forvekslingene og norsk↔engelsk-termdrill samlet.
- **Eksamensbelegg:** Destillat av sensorveiledningenes advarsler (analysen §5). Prioritet:
  perfekt (meta).
- **Innhold:** F1–F10 hver som varsellampe med botemiddel; **negativ forsterkning ≠ straff**
  (F2) og **presist antall** (F1) uthevet; begrepspar-drill (matche/skille); tospråklig
  termdrill (norsk↔engelsk for alle kjernetermer, F10).
- **Typiske feil:** hele F1–F10 (kapitlet ER feilvaksinen).
- **Kvote:** 10 quiz / 10 flashcards.

#### Kapittel 10.6: Modellbesvarelse — instrumentell betinging (bestått → topp)
**id:** `mrk3481-bi-10-6` · **number:** 10.6 · **estimatedMinutes:** 40 · **prerequisites:** `mrk3481-bi-2-2`

- **Kapitteltype:** modellbesvarelse.
- **Oppgavesjanger:** S2/S4 — dokumentert gjenganger (4/5).
- **Tema/oppgave (nyskrevet):** «Gjør rede for instrumentell betinging. Forklar forskjellen
  på positiv forsterkning, negativ forsterkning og straff, og gi eksempler på hvordan
  markedsførere bruker forsterkning.»
- **Karakternivåer:** **topp-versjon** i full tekst med margnotater (2×2-boksen tegnet;
  **negativ forsterkning ≠ straff** eksplisitt; forsterkningsplaner; treffende
  markedseksempel per mekanisme) + **bestått-versjon** (definisjon + forsterkning nevnt,
  men **negativ forsterkning forvekslet med straff** — F2 — og eksempel som ikke passer —
  F9) + middels-merknad. Avsluttes med `tip` **Sensorblikket**: belønnings-/trekk-lista
  (2×2 tegnet, F2-skillet, presist eksempel).
- **Typiske feil demonstrert i bestått-versjonen:** F2, F9.
- **Kvote:** 6 quiz / 4 flashcards.

#### Kapittel 10.7: Modellbesvarelse — multiattributt og holdningsendring (bestått → topp)
**id:** `mrk3481-bi-10-7` · **number:** 10.7 · **estimatedMinutes:** 40 · **prerequisites:** `mrk3481-bi-5-2`

- **Kapitteltype:** modellbesvarelse.
- **Oppgavesjanger:** S3 — fagets mest gjenbrukte oppgave (3/5, nesten ordrett).
- **Tema/oppgave (nyskrevet):** «Vis med utgangspunkt i multiattributtmodellen tre måter en
  markedsfører kan endre en forbrukerholdning på.»
- **Karakternivåer:** **topp-versjon** i full tekst med margnotater (**formelen A=Σbᵢeᵢ
  skrevet** med symbolforklaring; de tre strategiene **hver forankret i b, e eller n** —
  F5-fri; treffende markedseksempel per strategi) + **bestått-versjon** (nevner å «endre
  holdningen» med generelle råd **uten å spesifisere b/e/n** — F5 — og **uten formelen** —
  F4) + middels-merknad. `tip` **Sensorblikket**: hvorfor formelvisning og modellforankring
  er alt her.
- **Typiske feil demonstrert i bestått-versjonen:** F5, F4, F1 (feil antall strategier).
- **Kvote:** 6 quiz / 4 flashcards.

#### Kapittel 10.8: Modellbesvarelse — Maslow med kritikk (bestått → topp)
**id:** `mrk3481-bi-10-8` · **number:** 10.8 · **estimatedMinutes:** 40 · **prerequisites:** `mrk3481-bi-3-1`

- **Kapitteltype:** modellbesvarelse.
- **Oppgavesjanger:** S1/S4 — dokumentert gjenganger (4/5).
- **Tema/oppgave (nyskrevet):** «Gjør rede for Maslows behovshierarki og drøft de vanligste
  innvendingene mot det.»
- **Karakternivåer:** **topp-versjon** i full tekst med margnotater (**pyramiden tegnet**;
  fem nivåer i riktig rekkefølge; produkteksempel per nivå; **kritikk-leddet** — rigid,
  ikke testbart, kulturbundet; nevner «Maslows reviderte») + **bestått-versjon** (nivåene
  listet, men **pyramiden ikke tegnet** — F4 — og **kritikk-leddet mangler** — F8) +
  middels-merknad. `tip` **Sensorblikket**: hvorfor pyramiden tegnet og kritikk-leddet er
  A-differensierende.
- **Typiske feil demonstrert i bestått-versjonen:** F4, F8, F6 (glemmer et nivå).
- **Kvote:** 6 quiz / 4 flashcards.

#### Kapittel 10.9: Modellbesvarelse — de fem produktegenskapene (bestått → topp)
**id:** `mrk3481-bi-10-9` · **number:** 10.9 · **estimatedMinutes:** 40 · **prerequisites:** `mrk3481-bi-7-1`

- **Kapitteltype:** modellbesvarelse.
- **Oppgavesjanger:** S1/S2 — dokumentert gjenganger (4/5), presist-antall-oppgave.
- **Tema/oppgave (nyskrevet):** «Navngi og beskriv de fem produktegenskapene som påvirker
  hvor raskt en innovasjon spres, og vis hvordan en markedsfører kan påvirke hver av dem.»
- **Karakternivåer:** **topp-versjon** i full tekst med margnotater (alle **fem** korrekt
  navngitt; retning per egenskap; markedstiltak per egenskap) + **bestått-versjon** (bare
  **tre av fem** egenskaper — F1/F6 — og egenskaper uten markedstiltak — F3) + middels-
  merknad. `tip` **Sensorblikket**: hvorfor presist antall (fem) og tiltak per egenskap er
  avgjørende — å liste flere/færre premieres ikke (F1).
- **Typiske feil demonstrert i bestått-versjonen:** F1, F6, F3.
- **Kvote:** 6 quiz / 4 flashcards.

#### Kapittel 10.10: Øvingseksamen A — dokumentert kort-form (~20 korte, tospråklig)
**id:** `mrk3481-bi-10-10` · **number:** 10.10 · **estimatedMinutes:** 60 · **prerequisites:** `mrk3481-bi-10-5`

- **Kapitteltype:** øvingseksamen.
- **Description:** Et komplett, nyskrevet Delkurs 2-sett i den **dokumenterte formen**
  `(verifiser)`: ~10 korte, likt vektede forbrukerpsykologiske spørsmål (skoleeksamen,
  lukket bok), tospråklig oppgavetekst, jevn dekning av hele bredden.
- **Eksamensbelegg:** speiler den dokumenterte MRK 97111 Delkurs 2-formen. Prioritet:
  perfekt (meta).
- **Innhold:** ~10 nyskrevne korte spørsmål spredt over kjernetemaene (læring, holdninger/
  multiattributt, diffusjon-5, beslutningsregler, Maslow, Freud/neo-Freud, persepsjon/JND),
  hver med norsk + engelsk formulering; `collapsible` momentliste-fasit (bestått/topp) per
  spørsmål; `tip` **Sensorblikket** (likt vektet, presist antall, modell tegnet, eksempel).
- **Typiske feil:** F1, F4, F10 (formspesifikke feil for kort-formen).
- **Kvote:** 6 quiz / 2 flashcards.

#### Kapittel 10.11: Øvingseksamen B — sannsynlig moderne case-form
**id:** `mrk3481-bi-10-11` · **number:** 10.11 · **estimatedMinutes:** 60 · **prerequisites:** `mrk3481-bi-10-10`

- **Kapitteltype:** øvingseksamen (moderne form, `(verifiser)`).
- **Description:** Et komplett, nyskrevet sett i den **sannsynlige dagens formen**
  `(verifiser)`: færre, lengre, case-/anvendelsesorienterte oppgaver, inkludert moderne
  temaer (nudging, digital, bærekraft, etikk).
- **Eksamensbelegg:** ekstrapolert fra fagbeskrivelse + moderne BI-praksis (uverifisert).
  Prioritet: perfekt (meta).
- **Innhold:** 3–4 lengre case-/anvendelsesoppgaver som krever flere begreper +
  etikk-/bærekraftvurdering (S5), f.eks.: en produktlanserings-case (persepsjon + læring +
  diffusjon), en nudging-/digital-case med etikkledd. Momentliste-fasit + `tip`
  **Sensorblikket** med forbehold om at formen er uverifisert.
- **Typiske feil:** F3, F5, F8 (case-formens feil).
- **Kvote:** 6 quiz / 2 flashcards.

#### Kapittel 10.12: Øvingseksamen C — blandet (A-trening + moderne)
**id:** `mrk3481-bi-10-12` · **number:** 10.12 · **estimatedMinutes:** 60 · **prerequisites:** `mrk3481-bi-10-11`

- **Kapitteltype:** øvingseksamen.
- **Description:** Tredje sett, blandet kort-form + case, vektlagt mot begrepspar-skiller,
  modell-/formeltegning og de moderne temaene for topp-trening.
- **Eksamensbelegg:** blanding av dokumentert + sannsynlig form. Prioritet: perfekt (meta).
- **Innhold:** miks av korte S1–S4-spørsmål (multiattributt, negativ forsterkning/straff,
  kompensatorisk/ikke-kompensatorisk, Hofstede) og 1–2 caser (bærekraft/etikk); momentliste-
  fasit + `tip` **Sensorblikket** med bestått/middels/topp-terskelbeskrivelse per oppgave.
- **Typiske feil:** F2, F4, F7, F8 (samlet topp-vaksine).
- **Kvote:** 6 quiz / 2 flashcards.

---

## Kvotesammendrag (AUTORITATIV for alle senere faser)

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 3 | 34 | 36 | 0 (dekkes av øvingseksamenene) |
| 1 | 3 | 48 | 62 | 4 |
| 2 | 3 | 54 | 70 | 4 |
| 3 | 2 | 34 | 44 | 4 |
| 4 | 2 | 32 | 42 | 4 |
| 5 | 3 | 54 | 72 | 4 |
| 6 | 2 | 36 | 48 | 4 |
| 7 | 2 | 34 | 46 | 4 |
| 8 | 3 | 44 | 56 | 4 |
| 9 | 5 | 62 | 82 | 4 |
| 10 | 12 | 84 | 58 | 0 (= 3 øvingseksamener) |
| **Sum** | **40** | **516 ✓ (≥500)** | **616 ✓ (sikt 600–700)** | **36 + 3 øvingseksamener** |

Summeringskontroll per del (quiz / flashcards):
- Del 0: 10+12+12=34 / 10+12+14=36
- Del 1: 12+18+18=48 / 14+24+24=62
- Del 2: 18+20+16=54 / 24+26+20=70
- Del 3: 18+16=34 / 24+20=44
- Del 4: 16+16=32 / 20+22=42
- Del 5: 16+20+18=54 / 20+28+24=72
- Del 6: 18+18=36 / 24+24=48
- Del 7: 18+16=34 / 24+22=46
- Del 8: 14+14+16=44 / 18+18+20=56
- Del 9: 14+12+12+12+12=62 / 18+16+16+16+16=82
- Del 10: 8+8+8+8+10+6+6+6+6+6+6+6=84 / 6+6+8+6+10+4+4+4+4+2+2+2=58
- **Totalt: 516 quiz / 616 flashcards.**

**Flashcard-tetthet (begrunnelse):** MRK 3481 er et **begrepsrikt og tospråklig
fag** der toppsvaret krever presise definisjoner (norsk OG engelsk), navngitte
taksonomier, tegnbare modeller/formler og de begrepsparene sensor måler kunnskap på.
Per audit-lærdommen (≥500 er GULV) er flashcards siktet inn i **600–700-båndet (616)**
— over gulvet, drevet av at HVERT kjernebegrep gir minst to kort (norsk↔engelsk-par)
pluss begrepspar- og modellkort. Kjernedelene (Del 2 læring, Del 5 holdninger, Del 9
moderne) har høyest flashcard-tetthet fordi de er mest begreps-/modelltunge; Del 10
(trening) har lav flashcard-tetthet (oppgaver, ikke nytt fakta). Quiz (516) ligger
bevisst nærmere gulvet enn flashcards, fordi fagets valuta er *reproduksjon og
tegning* (flashcard-/momentliste-egnet) mer enn flervalg.

**Flashcard-profil:** hovedvekt på **(1) begrep↔definisjon↔engelsk term** (evoked
set↔vurderte merker↔*evoked set*; JND↔minste merkbare forskjell↔*just noticeable
difference*; relativ fordel↔*relative advantage*), **(2) begrepspar-skiller** (negativ
forsterkning/straff, klassisk/instrumentell betinging, generalisering/diskriminering,
kompensatorisk/ikke-kompensatorisk, absolutt/JND, Freud/neo-Freud, holdning→atferd/
atferd→holdning, merke-/linjeutvidelse, evoked/inept/inert), og **(3) modell↔komponenter↔
anvendelse** (Maslow-nivåene; multiattributt A=Σbᵢeᵢ med b/e/n; TRA holdning+norm→
intensjon; Webers lov ΔI/I=k; de fem diffusjonsegenskapene; referansegruppe-matrisen).
**Quiz-profil:** flervalg med nabobegrep-distraktorer (negativ forsterkning vs. straff,
kompensatorisk vs. ikke-kompensatorisk, absolutt vs. differensieringsterskel, Freud vs.
neo-Freud, kontinuerlig/dynamisk-kontinuerlig/diskontinuerlig) + «hvor mange ledd»-
spørsmål (F1/F6-vaksine — presist antall) + «hvilket element endres (b/e/n)»-spørsmål
(F5-vaksine) + «hvilken feil begår kandidaten»-spørsmål (F2/F9-vaksine) + norsk↔engelsk-
matching (F10).

---

## 4. Prøver

Fire prøver per temadel (Del 1–9 = 36 prøver). Hver prøve speiler eksamensformatet i
miniatyr: en blanding av begreps-/kontrollspørsmål (flervalg med fasit, tospråklig) og
korte redegjørelses-/anvendelsesoppgaver (S1–S5 med bestått/topp-momentliste-fasit).
Omfang 25–40 min. Alle oppgaver NYSKREVNE. Prøvekapittel-id `mrk3481-bi-<del>-prove`,
chapterNumber `<del>.P` (jf. BYGGEKONTRAKT). Del 0 og Del 10 har ingen egen prøve (Del
10s tre øvingseksamener dekker helheten).

**Prøve-kvote Del 1:** 4 prøver: (1) *Persepsjon* — de tre trinnene + absolutt terskel +
perseptuelt kart (S1/S3). (2) *JND og Webers lov* — vis formelen + pris-/pakningsanvendelse
(F4-vaksine). (3) *Fagdefinisjonen* — anvend på et forbruksfenomen (metaperspektiv). (4)
*Blandet Del 1 + tospråklig* — absolutt vs. JND begrepspar (F7) + norsk↔engelsk-drill.

**Prøve-kvote Del 2:** 4 prøver: (1) *Klassisk betinging* — generalisering/diskriminering +
merke-/linjeutvidelse (F7). (2) *Operant betinging* — **negativ forsterkning ≠ straff** +
2×2-boksen + forsterkningsplaner (F2-vaksine). (3) *Vikarierende læring* — de tre
læringsteoriene kontrastert (F6). (4) *Blandet Del 2* — læring i merkevarebygging (case).

**Prøve-kvote Del 3:** 4 prøver: (1) *Maslow* — pyramiden tegnet + fem nivåer + kritikk
(F4/F8-vaksine). (2) *Motivasjonsdynamikk* — positiv/negativ motivasjon + OSL (skille fra
forsterkning, F7). (3) *Behov* — utilitaristisk/hedonisk + markedsanvendelse. (4) *Blandet
Del 3* — Maslow anvendt på posisjonering (S3).

**Prøve-kvote Del 4:** 4 prøver: (1) *Freud* — id/ego/superego + motivforskning (F6). (2)
*Neo-Freud* — Horneys tre typer + merkepersonlighet. (3) *Freud vs. neo-Freud* — begrepspar
+ selvbilde-kongruens (F7, S4). (4) *Blandet Del 4* — personlighet og merkelojalitet (case).

**Prøve-kvote Del 5:** 4 prøver: (1) *Tre-komponentmodellen* — kognitiv/affektiv/konativ +
rekkefølge (F6). (2) *Multiattributt* — formelen + tre måter å endre holdning (b/e/n),
F5/F4-vaksine. (3) *TRA og holdning–atferd* — subjektiv norm + intensjon + gapet. (4)
*Atferd→holdning* — dissonans + etterkjøpsdissonans (F7, S4).

**Prøve-kvote Del 6:** 4 prøver: (1) *Beslutningsprosessen* — fem trinn + involveringsnivåer
(F6). (2) *De tre settene* — evoked/inept/inert (F7). (3) *Beslutningsregler* —
kompensatorisk vs. ikke-kompensatorisk + de tre underreglene (F7/F1-vaksine). (4) *Blandet
Del 6* — beslutningsregel-matrisen anvendt (S3) + etterkjøps-rasjonalisering.

**Prøve-kvote Del 7:** 4 prøver: (1) *De fem produktegenskapene* — presist antall + retning
+ markedstiltak (F1/F6-vaksine). (2) *Adoptørkategorier* — kurven + kategorinavn. (3)
*Innovasjonstyper* — kontinuerlig/dynamisk-kontinuerlig/diskontinuerlig (F7). (4) *Blandet
Del 7* — det sosiale systemet + diffusjon anvendt (case).

**Prøve-kvote Del 8:** 4 prøver: (1) *Referansegrupper* — matrisen tegnet (offentlig/privat
× luksus/nødvendighet), F4-vaksine. (2) *Familie/FLC* — fasene + beslutningsroller (F6/F7).
(3) *Kultur* — Hofstede + inter-kulturell analyse (standardisert/tilpasset, S4). (4)
*Blandet Del 8 + segmentering* — subkultur + «bør kjenne til»-segmentering.

**Prøve-kvote Del 9 (moderne, `(verifiser)`):** 4 prøver: (1) *Nudging* — System 1/2 +
valgarkitektur + defaults (S2/S5). (2) *Digital forbrukeratferd* — eWOM/personalisering
koblet til klassiske mekanismer. (3) *Bærekraft* — det grønne holdning–atferd-gapet +
grønnvasking (S4). (4) *Etikk + emosjoner/sansemarkedsføring* — tvangsforbruk skilt fra
normal shopping (F9) + etisk vurdering (S4) + multisensorisk case (S5).

### Komplette øvingseksamener (3 — kapitlene 10.10–10.12)

Tre nyskrevne sett: **A** i den dokumenterte kort-formen (~10 korte likt vektede,
tospråklig), **B** i den sannsynlige moderne case-formen, **C** blandet for topp-trening —
alle med bestått/topp-momentliste-fasit og terskelbeskrivelse per oppgave (jf. §3 Del 10).
Begrunnelse: siden dagens form er uverifisert, må studenten være rustet for BEGGE former;
arkivets spørsmål resirkuleres, så kort-formen er reell trening, mens case-formen dekker
den sannsynlige moderne vinklingen.

---

## 5. Studieguide-disposisjon

1. **Slik er eksamen** — dokumentert form (skoleeksamen, lukket bok, ~20 korte likt
   vektede, tospråklig) vs. sannsynlig dagens form (digital, case) med evidensforbeholdet;
   temafrekvens-tabellen; Delkurs 1/2-skillet; gjenbruksmønstrene — fra kap. 0.1.
2. **Redegjørelseshåndverket** — grunnmalen definisjon → modell/taksonomi →
   markedsanvendelse → skille/drøfting; S1–S5; bestått/middels/topp; de åtte sensorkravene
   (fra kap. 0.2).
3. **Modell- og formelbanken** — de tegnbare figurene/formlene samlet, hver med
   tegneoppskrift: Maslow-pyramiden, tre-komponentmodellen, multiattributt A=Σbᵢeᵢ, TRA,
   Webers lov ΔI/I=k, referansegruppe-matrisen, de fem diffusjonsegenskapene, id/ego/
   superego, beslutningsregel-matrisen (fra kap. 0.3 + temakapitlene). **Sensor premierer
   tegning — øv inn å reprodusere hver.**
4. **Kjernebegrepenes definisjonskort (tospråklig)** — de begrepene sensor måler, hver med
   presis definisjon + engelsk term + avsender: forsterkning (pos./neg.)/straff, JND/Webers
   lov, Maslow-behov, Freud/neo-Freud, holdning/multiattributt/TRA, beslutningsregler,
   evoked set, de fem produktegenskapene, Hofstede, referansegruppe-matrisen.
5. **Begrepspar-galleriet** — de dokumenterte forvekslingene med varsellampe (F2/F7):
   **negativ forsterkning/straff** (uthevet), klassisk/instrumentell, generalisering/
   diskriminering, kompensatorisk/ikke-kompensatorisk, absolutt/JND, Freud/neo-Freud,
   holdning→atferd/atferd→holdning, evoked/inept/inert, merke-/linjeutvidelse,
   kontinuerlig/dynamisk-kontinuerlig/diskontinuerlig.
6. **Markedsanvendelses-samlingen** — ett treffende produkt-/markedseksempel per kjernebegrep
   (den obligatoriske byggeklossen), med sjekk på at eksempelet *passer* mekanismen (F9-
   vaksine).
7. **Toppsvar-løftet** — hva som løfter fra bestått til topp (modell tegnet/formel vist,
   presist antall, treffende eksempel, begrepspar-skille, kritisk lag der invitert) med
   eksempelfraser per kjernetema.
8. **Feilvaksinen** — F1–F10 som énlinjers varsellamper, med F1 (presist antall), F2
   (negativ forsterkning ≠ straff), F4 (tegn modellen), F5 (forankre anbefalingen i b/e/n)
   og F10 (engelsk term) uthevet.
9. **Karakterkalibrering** — bestått/middels/topp i tabellform (topp = full modell tegnet +
   presis markedsanvendelse + begrepspar-skille + kritikk der invitert; middels = fullstendig
   men umodellert; bestått = kjernedefinisjon + hoveddel + ett eksempel).
10. **Ukeplan** — 4-ukers og 2-ukers lesningsløp med prøve-innplassering (temadelprøver
    underveis; øvingseksamen A/B/C de siste to ukene). Topptemaene (læring, holdninger,
    diffusjon, beslutning + Maslow, Freud/neo-Freud, JND) prioriteres først; den moderne
    overbygningen (Del 9) som forventet tung i dagens case-form.
11. **Moderne overbygning — kort** `(verifiser)`: nudging, digital, bærekraft, emosjoner/
    sansemarkedsføring, etikk — hva de bygger på i den klassiske kjernen, og forbeholdet om
    at arkivet er taust.

---

## 6. Byggerekkefølge og verifikasjon

### Rekkefølge for forfatter-agenten (Opus)

1. **Metadata først:** `TextbookCourse`-oppføring (mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`, skrives til `textbook-courses-hoyskole.ts`):
   id `mrk3481-bi`, title «MRK 3481 Forbrukerpsykologi (BI)», `level: 'Høyskole'`, alle 40
   kapitler med id/number/title/description/estimatedMinutes/topics/competenceGoals/
   prerequisites fra dette skjelettet, `sectionNames` fra §2-tabellen.
2. **Del 0** først (etablerer sjangrene S1–S5, grunnmalen definisjon→modell→eksempel→skille,
   modell-/formeltegning-håndverket, bestått/middels/topp og mantraene «markedsanvendelse
   er obligatorisk» / «tegn modellen — det premieres» / «riktig antall»).
3. **Del 1 → 2 → … → 9** i rekkefølge. Prerequisites peker bakover (f.eks. 1.3 på 1.2; 2.2
   på 2.1; 5.2 på 5.1; 6.2 på 6.1; 7.2 på 7.1). **Topptemaene (Del 2 læring, Del 5
   holdninger, Del 6 beslutning, Del 7 diffusjon) bygges grundigst — de bar hvert arkivsett.**
   **Del 9 (moderne) merkes gjennomgående `(verifiser)`** og forankres i fagbeskrivelse +
   allmennkunnskap, ikke arkivet.
4. **Del 10** til slutt (sjanger-, feildrill- og modellbesvarelseskapitlene + de tre
   øvingseksamenene gjenbruker modellbanken, momentlistene og begrepsparene fra temadelene).
5. **Prøver** (`mrk3481-bi-<del>-prove`) etter at delens kapitler finnes.
6. **Narrativ-versjoner** (`<id>-narrativ.json` per kapittel, jf. `/narrativ`) og quiz-
   registrering til slutt.

Per temakapittel gjelder blokk-rekkefølgen i §2 «Kapittel-DNA» (tip Eksamensvinkel → text
Forkunnskaper + collapsible Begreps- og termliste (norsk↔engelsk; formelliste der formler)
→ text Temaet i landskapet → definition Kjernebegreper (flashcard-kilden — toppnivå med
title!) → theorem Modell-/formelbank → example Markedsanvendelse (obligatorisk) → example
Modellsvar bestått→topp → tip Toppsvar-løftet → warning Typiske feil (+ begrepspar-warning)
→ exercise ×4–8 blandet sjanger med obligatorisk markedsanvendelses-øvelse → collapsible
Pensumkart og begrepspar). Eksamensvinkel- og Typiske feil-blokkene fylles med belegget og
feilkodene fra dette skjelettet — forfatteren skal IKKE finne på frekvenstall.

### Verifikasjonssjekkliste (kjøres FØR ferdigmelding)

- [ ] **JSON-validering:** alle nye `src/lib/data/chapters/mrk3481-bi-*.json` parser med
      `json.load` (generer via `json.dump`). `npm run build` grønn — vis output.
- [ ] **Metadata-konsistens:** alle 40 kapittel-id-er har eksisterende content-fil; `number`
      er del-basert («5.2», ALDRI lineær); prosareferanser bruker samme form («kap. 5.2»);
      prerequisites peker på eksisterende id-er (og bakover); `sectionNames` satt; narrativ-
      id-er registrert slik at toggle rendrer (verifiser med prod-server + curl at narrativ-
      ruter gir 200).
- [ ] **Evidensforbeholdet håndtert:** grep `-i verifiser` — (a) **alt formavhengig** (kap.
      0.1 eksamensform) merket `(verifiser)`; (b) **hele Del 9** (nudging/digital/bærekraft/
      emosjoner/etikk) merket `(verifiser)` og forankret i fagbeskrivelse, ikke arkiv; (c)
      **pensumkoblinger** (hvilken lærebok/utgave dagens MRK 3481 bruker; Bearden & Etzel;
      FLC-fasenavn; innovasjonstyper-nytteinndeling) merket ⚠/`(verifiser)`; (d) at kun
      Delkurs 2 er MRK 3481-relevant (Kotler-halvdelen ekskludert). Fagfellesjekkes i fase 6.
- [ ] **Pensumforankring EKTE:** kun teoretikere/verk fra dette skjelettets begrepskontrakter
      (Schiffman & Kanuk/Wisenblit, Maslow, Weber, Pavlov/Skinner/Bandura, Freud/Horney,
      Fishbein & Ajzen, Festinger, Rogers, Hofstede, Bearden & Etzel, Thaler & Sunstein,
      Kahneman). ALDRI oppdiktede referanser; utgave-/pensumkoblinger beholder ⚠-forbehold.
- [ ] **Kvotesum:** quiz ≥516 og flashcards ≥616 fordelt per kapittel som angitt (hardt
      minimum ≥500/≥500; flashcards siktet i 600–700-båndet fordi faget er begrepsrikt/
      tospråklig); 4 prøver per del for Del 1–9 (36) + 3 øvingseksamener; fasit-
      svaralternativer rebalansert (jevn a/b/c/d — options[0] alltid riktig i staging,
      runtime stokker).
- [ ] **Modell-/formeltegning-sensuren operasjonalisert:** hvert relevant temakapittel har en
      `theorem` **Modell-/formelbank**-blokk med en reproduserbar figur/formel (Maslow-
      pyramiden, tre-komponentmodellen, multiattributt A=Σbᵢeᵢ, TRA, Webers lov ΔI/I=k,
      referansegruppe-matrisen, de fem diffusjonsegenskapene, id/ego/superego, beslutnings-
      regel-matrisen); kap. 0.3 er eget modelltegning-håndverkskapittel; modellsvarene viser
      at **tegnet modell/vist formel er A-differensierende** (F4).
- [ ] **Obligatorisk markedsanvendelse:** hvert temakapittel har BÅDE en `example`
      **Markedsanvendelse**-blokk OG minst én markedsanvendelses-`exercise` (S2/S3);
      eksempler *passer* begrepet (F9-sjekk).
- [ ] **Sensorfellene håndtert:** **negativ forsterkning ALLTID skilt fra straff** (F2, egen
      warning i 2.2); **presist antall** ledd i taksonomier (F1/F6 — særlig de fem
      produktegenskapene); multiattributt-anbefalinger ALLTID forankret i b/e/n (F5);
      modell/formel tegnet der det premieres (F4); begrepsparene skilt presist (F7);
      norsk↔engelsk-term drillet (F10); Maslow-svar ALLTID med kritikk-leddet når drøfting
      bes om (F8).
- [ ] **Bestått→topp operasjonalisert:** hvert temakapittel har et modellsvar i BÅDE
      bestått- OG topp-versjon (forskjellen = modell-tegning/formelvisning + presis
      markedsanvendelse + begrepspar-skille + kritikk), med Sensorblikk-momentliste.
- [ ] **Opphavsrett:** alle oppgaver, case og modellsvar er NYSKREVNE — ingen formuleringer
      fra MRK 97111-oppgavesett eller sensorveiledninger, ingen ordrette Schiffman & Kanuk-
      sitater (referer og parafraser). Teoretikeres posisjoner tilskrives korrekt; direkte
      sitater unngås. **Bare Delkurs 2 (forbrukeratferd) brukes — Kotler-/markedsledelses-
      stoffet er utenfor MRK 3481.**
- [ ] **Leserkrav:** Forkunnskaper-blokk med lenker + collapsible «Begreps- og termliste
      (norsk↔engelsk)» (og formelliste i 1.3/5.2) først i hvert kapittel (lenk kun til
      eksisterende kapitler); Eksamensvinkel-`tip` og Typiske feil-`warning` i hvert kapittel;
      hver oppgave sjangerforankret (S1–S5); «bør kjenne til»-stoff (segmentering/
      forbrukertyper, forbrukeratferd som fagfelt) plassert ETTER kjernestoffet og merket;
      «Begreps- og termliste»-kravet erstatter/utvider symbol-/formelliste-kravet (README-
      omtolkning — ekte formelliste kun i formelkapitlene).

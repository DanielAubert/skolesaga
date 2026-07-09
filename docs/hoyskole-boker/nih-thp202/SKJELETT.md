# Bokskjelett: THP202 Treningsfysiologi (NIH) — eksamensrettet lærebok

> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE eksamensarkivet —
> alt eksamensbelegg som trengs står i dette skjelettet, destillert fra
> `EKSAMENSANALYSE.md` (NIHs THP202-arkiv 2022/23–2025/26: 11 filer over fem/seks
> ordinære og fem utsatte sittinger, de fleste med innebygd sensorveiledning med
> eksplisitt poengfordeling; alle sensorveiledninger lest oppgave for oppgave).
> Alle oppgaver, tallverdier, casenavn og formuleringer i boka skal være NYSKREVNE
> (se §6). Ficks ligning, fysiologiske sammenhenger, standard normalverdier og
> faguttrykk er alminnelig fagstoff og fritt å bruke.
>
> **Fysiologisk presisjon er kritisk.** Sensor premierer gjennomgående **mekanisme-
> kjeder med korrekt tidsaksering**, ikke oppramsing. Tallverdier og «pluss-momenter»
> forfatteren er usikker på merkes `(verifiser)` for fagfellesjekk i fase 6 — flere
> er hentet fra sensorveiledninger som speiler kursets pensum i sitt år og skal
> kontrolleres mot gjeldende pensumlitteratur. INGEN oppdiktede verdier.

---

## 1. Bokens identitet

- **Kurs-id:** `nih-thp202`
- **Tittel:** *THP202 Treningsfysiologi*
- **Level:** `'Høyskole'`
- **Institusjon (navigasjon):** Norges idrettshøgskole (NIH). Visningsnavn i
  `institusjoner.ts`: «THP202 Treningsfysiologi».
- **Arketype:** **fakta/mekanisme-pugg-hybrid** — et faktatungt puggefag (nærmeste
  forbilde: NOKUT-AFB) der kjernevurderingen likevel er **mekanistisk forståelse i
  kjeder** (nærmeste forbilde: MED1100s mekanisme-essay). Låner NOKUT-AFBs høye
  flashcard-tetthet (normalverdier, definisjoner, signalveinavn må sitte utenat — 3 t
  skoleeksamen uten hjelpemidler), og MED1100s nummererte-mekanismekjede-essay og
  alt-eller-intet-flervalgsdrill. Ingen ren DNA-mal passer; strukturen er skreddersydd
  som **to jevnvektede delbøker** og dokumentert i §2.
- **Kapittelantall:** 21 (Del 0: 2 · Del 1 Utholdenhet: 7 · Del 2 Styrke: 8 ·
  Del 3 Eksamenstrening: 4)
- **Estimert totaltid:** ~1240 minutter (~20,7 timer) fordelt per kapittel under.
- **Quiz totalt:** **560** (krav ≥500) · **Flashcards totalt:** **520** (krav ≥500)

**Pitch:** THP202 er et 10 sp obligatorisk emne i bachelor i trenerrollen/
idrettsvitenskap ved NIH, med skoleeksamen hver vår og utsatt eksamen hver høst
(aktivt, fornybar årskull-målgruppe). Det avgjørende strukturvalget: eksamen er
alltid delt i **to like store, uavhengige halvdeler** som tester to helt forskjellige
fysiologiske domener, og **man kan ikke kompensere svak halvdel med sterk**:

- **UTHOLDENHET (50 %):** O₂-transport, hjerte/kretsløp, blod, prestasjonsfaktorer.
  Nøkkelrammeverk: **Ficks ligning** — VO₂maks = SV · HF · (CaO₂ − CvO₂). Alt struktureres
  ledd for ledd i ligningen: hvilke ledd endres ved trening, hvorfor, og **med hvilken
  tidsaksering** (plasmavolum raskt, rødt cellevolum + strukturelle hjerteendringer over
  uker/måneder). Skille **sentralt** (hjerte/blod/MV) fra **perifert** (kapillær/
  mitokondrie/ekstraksjon).
- **STYRKE (50 %):** skjelettmuskulatur — hypertrofi, nevral adaptasjon, aldring, styrke
  og prestasjon. Nøkkelrammeverk: **stimulus → signalvei → proteinsyntese** (mekanisk drag
  + metabolsk stress → mTOR/MAPK) og skille **nevralt** (rekruttering/fyring/koordinasjon)
  fra **strukturelt** (hypertrofi/arkitektur), med tidsaksering (nevral adaptasjon tidlig,
  hypertrofi langsiktig).

Hver halvdel har både **langsvar (~60 % av poengene)** og **flervalg (~40 %)**. Flervalg
er strengt **alt-eller-intet**: 4 alternativer, ett *eller* to riktige, full uttelling
kun ved helt riktig avkryssing — delvis riktig, feil og blankt gir alle 0. **Ingen
minuspoeng, men heller ingen delpoeng.** Boka bygges baklengs fra tre ting: (1)
gjengangerne som drilles til de sitter (Ficks ligning, sentral/perifer VO₂maks-mekanisme,
submaksimal respons, prestasjonsmodellen · hypertrofi-signalvei, satellittceller/myostatin,
nevral adaptasjon/RFD, aldring/sarkopeni, fibertypeskifte), (2) de to svarlogikkene
(mekanismekjede-langsvar med tidsaksering + begrunnelse · alt-eller-intet-flervalgs-
presisjon med nære distraktorer), og (3) de faste sensorfellene i §5.

**THP202 er navet i NIHs fysiologiklynge.** Boka er STANDALONE (alt eksamensrelevant
stoff er dekket internt), men legger **forkunnskaps-lenker**, ikke gjentakelse, til
naboemnene: utholdenhetsdelen bygger på THP100 (Humanfysiologi: hjerte/kretsløp/
respirasjon/blod) og THP204 (Metabolisme: energiomsetning bak arbeidsøkonomi og laktat);
styrkedelen bygger på THP101 (Funksjonell anatomi: muskelstruktur, sarkomerer, fiber-
arkitektur) og THP204 (metabolsk stress bak hypertrofi). IDR109 (Treningslære) er det
anvendte motstykket — THP202 forklarer *fysiologisk hvorfor* treningsprinsippene virker.
**nih-lki235 er en nær tvilling** (bygges separat med delt struktur). THP202 tester ikke
basalfysiologien for seg selv, men **hva som endrer seg ved trening, og hvorfor det bedrer
prestasjon** — forfatteren skal derfor IKKE utdype hjerte-/muskelanatomien for seg selv,
bare akkurat det treningsresponsen krever, og lenke resten til klyngen.

---

## 2. Makrostruktur

Rekkefølge: **Del 0 (eksamenskart + eksamensteknikk for de to halvdelene) → Del 1
UTHOLDENHET → Del 2 STYRKE → Del 3 eksamenstrening (drill + to øvingseksamener).**
De to fagdelene er jevnvektet og selvstendige; hver har egne temakapitler ordnet etter
gjenganger-score (tyngst mest omfang), med prerequisites som peker bakover innen delen.

| Del | Halvdel | Seksjonstittel | Kap. | Vekt/prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|---|
| 0 | meta | Eksamenskart: to halvdeler, to svarlogikker | 2 | perfekt (meta) | De to formatene, mekanismekjede-kravet, alt-eller-intet-flervalg og skillene sentralt/perifert og nevralt/strukturelt må etableres FØR fagstoffet. |
| 1 | utholdenhet | Utholdenhet: Ficks ligning og O₂-transport | 7 | perfekt | 50 % av eksamen. Ficks ligning ~10/10, VO₂maks-mekanismer ~10/10, slagvolum ~9/10, a-vO₂-diff ~9/10, arbeidsøkonomi ~9/10, submaksimal respons ~8/10, prestasjonsmodell ~8/10, blodvolum ~8/10 — alle nesten sikre. |
| 2 | styrke | Styrke: hypertrofi, nevral adaptasjon og aldring | 8 | perfekt | 50 % av eksamen. Hypertrofi ~10/10, signalveier ~9/10, satellittceller ~9/10, nevral adaptasjon ~9/10, aldring/sarkopeni ~9/10, fibertypeskifte ~9/10, RFD ~8/10, hormoner ~8/10, metode/design ~8/10 — alle nesten sikre. |
| 3 | meta | Eksamenstrening (to svarlogikker) | 4 | perfekt (meta) | 2 sjanger-/feildrillkapitler (mekanismekjede-langsvar med tidsaksering · alt-eller-intet-flervalg med nære distraktorer) + 2 komplette øvingseksamener (én i «klassisk» del-oppgave-mal, én i den strammere V26-malen). |

Rasjonale: fordi de to halvdelene er jevnstore og vurderes hver for seg, dekkes **begge
fullt ut** — prioriteringen styrer *dybde og drillmengde*, ikke hva som er med. Innen hver
halvdel styrer gjenganger-score omfanget: Ficks ligning + sentral/perifer VO₂maks-mekanisme
(utholdenhet) og hypertrofi + signalveier + nevral adaptasjon (styrke) får flest kapitler
og tyngst kvote; nyanser for toppkarakter (lunge som begrensning, muskelarkitektur, 1RM-
protokoll) dekkes solid men kompakt.

### Seksjonstitler (`sectionNames` i metadata — vises som «Kapittel N: <tittel>» på bokforsiden)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart: to halvdeler, to svarlogikker |
| 1 | Utholdenhet: Ficks ligning og O₂-transport |
| 2 | Styrke: hypertrofi, nevral adaptasjon og aldring |
| 3 | Eksamenstrening (to svarlogikker) |

### Sjangerkoder (fra analysen §3 — brukes i «Eksamensbelegg» under)

**Langsvar (begge halvdeler, ~60 % av poengene):**
`L-MEK` mekanisme-forklaring («forklar hvilke fysiologiske mekanismer …») — sensor vil ha
en **kjede** (stimulus → mekanisme → effekt), ikke oppramsing; typisk: sett opp Ficks
ligning / definer begrepet → vis hvilke ledd som endres → forklar *hvorfor* og *når*.
`L-FIG` figur-/kurvetolkning (VO₂/MV/HF/SV/a-vO₂-diff mot intensitet; kraft-hastighet/
kraft-tid) — beskriv *hva* figuren viser i ett delspørsmål, *mekanismen* i neste.
`L-TALL` tall-/resonnementoppgave (kobling via Ficks ligning og forholdstall, ikke presis
regning — men **begrunnelse kreves alltid**). `L-RANG` rangeringsoppgave (f.eks. nevrale
tilpasninger viktigst→minst; 10-uker vs. 5-år). `L-DES` studiedesign-/metodeoppgave
(intervensjonslengde ≥12 uker, kontrollgruppe, målemetodebatteri med begrunnelse).
`L-ANV` anvendt treningsoppgave (sett opp økt med øvelser/RM/serier/reps + fysiologisk
begrunnelse).

**Flervalg (begge halvdeler, ~40 % av poengene):**
`F-ALT` 4 alternativer, **ett eller to riktige**, 2 p for helt riktig, ellers 0 (ingen
delpoeng, ingen minuspoeng). Undertyper: `F-FAKTA` normalverdi-/faktaverdi-spørsmål;
`F-DEF` definisjonsspørsmål; `F-MEK` mekanisme-/effektspørsmål (hva øker/reduseres etter
trening); `F-DIST` nære-distraktor-spørsmål (styrke: myostatin/hormoner/satellittceller/
fibertypeskifte/RFD — fire nesten identiske utsagn der bare presiseringen skiller).

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

**Utholdenhet:** `U1` skrive at minuttvolum (Q) øker ved **submaksimalt** arbeid etter
trening (uendret/svakt redusert — samme O₂-behov + økt a-vO₂-diff) · `U2` forklare med
«bedre kondisjon» uten mekanisme · `U3` glemme perifere tilpasninger i submaksimal respons
· `U4` blande absolutt og relativ belastning (250 W = samme absolutt, lavere relativ
intensitet etter trening) · `U5` tro HFmaks øker med trening (i praksis uendret) · `U6` tro
[Hb] øker med trening (Hb-**masse** øker via RCV, men [Hb] holdes ~konstant fordi plasma-
volum også øker) · `U7` anta a-vO₂-diff forklarer det meste av VO₂maks-økningen (hoved-
bidraget er økt MV via SV; a-vO₂-diff øker bare litt) · `U8` overse hvorfor kapillærtetthet
betyr noe (uten kapillærene ville økt MV gitt kortere mean transit time og dårligere
diffusjon).

**Styrke:** `S1` definere hypertrofi bare som tverrsnittsøkning (det er volumøkning —
tykkelse *og* lengde) · `S2` tro at kun mTOR gir vekst (mTOR *og* MAPK bidrar) · `S3`
forveksle fibertypeskiftene (tung trening → IIX→IIA, ikke IIA→IIX; I:II-forholdet endres
*ikke*) · `S4` tro type-I-fibre vokser mest (type-II vokser mest ved tung trening) · `S5`
tro hypertrofi gir høyere *relativ* RFD (den gir høyere *absolutt* RFD i N/s, men uendret/
lavere relativ) · `S6` overvurdere veksthormon/akutt testosteronrespons (kjønnsforskjellen
skyldes testosteron, men den *akutte* hormonresponsen på en økt har usikker betydning) ·
`S7` tro eldre danner *flere* muskelfibre ved trening (hypertrofi og styrke, ikke
hyperplasi) · `S8` tro aldringstapet skyldes kortere sener/redusert fiberlengde (det
skyldes fiberatrofi + tap av type-II-fibre/motoneuroner) · `S9` feil metodevalg (EMG
kvantifiserer **ikke** aktiveringssvikt godt — interpolert twitch/tetanus er metoden for
aktiveringsgrad) · `S10` rangere hypertrofi over nevral adaptasjon for de *første* ukene
(og omvendt for flerårsforløp).

### Sensor-kredittregler (fra analysen §4 — etableres i Del 0.2, refereres i hvert kapittel)

1. **Mekanistisk forståelse, ikke opplisting** (gjennomgående kriterium). Å nevne *at* SV
   øker gir lite; å forklare *via* EDV↑ (blodvolum, venøs retur) og ESV↓ (kontraktilitet,
   afterload) gir uttelling. Gjelder begge halvdeler: kjede, ikke liste.
2. **Ficks ligning som ryggrad** (utholdenhet). «Pluss om ligninga er med og korrekt»; å
   strukturere svaret ledd for ledd i ligningen premieres eksplisitt.
3. **Skille sentralt fra perifert / nevralt fra strukturelt.** Sentral = hjerte/blod/MV;
   perifer = kapillær/mitokondrie/ekstraksjon; nevral = rekruttering/fyring/koordinasjon;
   strukturell = hypertrofi/arkitektur. Feil kategorisering trekker.
4. **Tidsaspekt teller for full pott.** Plasmavolum øker raskt, rødt cellevolum og
   strukturelle hjerteendringer tar uker/måneder; nevral adaptasjon dominerer tidlig,
   hypertrofi dominerer langsiktig. **Mekanismekjede MED tidsaksering** er A-kravet.
5. **Begrunnelse kreves ved tall-/figur-svar.** «Begrunn svaret!» går igjen; riktig tall
   uten resonnement gir ikke full uttelling, og fornuftig resonnement premieres selv ved
   unøyaktig tall («godkjenner litt slingringsmonn»). Presise enheter (L/min, mL, mL O₂/L
   blod, slag/min) etterspørres.
6. **«Pluss»-momenter for dybde:** navngi signalveier (PI3K-Akt-mTOR-p70S6K, MAPK),
   definisjonskriterier (EWGSOP2 for sarkopeni), nyanser (SaO₂-fall hos svært godt trente,
   okklusjonstrening/BFR som motargument for dose-respons på hypertrofi).
7. **Flervalg: alt-eller-intet.** Nøyaktig antall og nøyaktig hvilke alternativer; delvis
   riktig = 0. Ingen minuspoeng, men det lønner seg **ikke** å gjette bredt — presisjon på
   nære distraktorer avgjør.

### Arketypetilpasning (dokumenterte valg og avvik fra DNA-malene)

1. **To jevnvektede delbøker, ikke én bok (hovedavvik).** Fordi eksamen alltid er 50/50 og
   halvdelene tester helt ulike domener med hver sin logikk (Ficks-ligning-tenkning vs.
   stimulus→signalvei→proteinsyntese), er hoveddelene organisert PER HALVDEL, hver med egen
   drilllogikk. Del 3 har egne øvingseksamener som treffer begge halvdeler og begge
   eksamensmaler (klassisk + V26). Avviker fra NOKUT-AFBs enkelt-domene-struktur.
2. **Mekanisme-pugg-hybrid arketype.** Kjernen er NOKUT-AFBs faktatetthet (normalverdier,
   definisjoner, signalveinavn utenat — 3 t uten hjelpemidler), men vurderingstyngden ligger
   på MED1100-lignende **nummererte mekanismekjeder MED tidsaksering** i langsvar, pluss
   alt-eller-intet-flervalgsdrill. Ingen tung regnedel (tall-oppgaver er forholdstalls-
   resonnement via Ficks ligning, ikke kalkulatortung utregning).
3. **«Symbol- og formelliste» → «Nøkkelfakta-, formel- og signalvei-liste» (per kapittel).**
   README-kravet omtolkes: hvert temakapittel får en `collapsible` **«Nøkkelfakta-, formel-
   og signalvei-liste»** rett etter Forkunnskaper. Utholdenhet: Ficks ligning + alle
   variabler/enheter + normalverdier/-intervaller. Styrke: signalveinavn (PI3K-Akt-mTOR-
   p70S6K, MAPK), regulatorer (myostatin/testosteron/IGF-1/satellittceller), definisjons-
   kriterier (EWGSOP2) og mekanismekjedene som må sitte utenat. Et symbol/navn regnes ikke
   «forklart» fordi et tidligere kapittel forklarte det — listen er per delkapittel.
4. **Todelt drill.** Quiz = alt-eller-intet-flervalgspresisjon med nære distraktorer (sikt
   høyt — dette er ~40 % av poengene og delvis riktig = 0); flashcards = normalverdier,
   definisjoner, signalveinavn og mekanismekjede-ledd utenat (faget er svært faktatungt og
   uten hjelpemidler → HØY flashcard-tetthet, nokut-afb-lærdommen); `example`/`exercise` =
   mekanismekjede-langsvar med tidsaksering + tall-/figurresonnement med begrunnelse.
5. **Mekanismekjede-krav gjennomgående.** Hver `example`/`exercise` i langsvar-sjanger skal
   modellere en **kjede med tidsaksering**, aldri en liste, og hvert temakapittel har minst
   én nummerert mekanismekjede i Faktakontrakten. Dette er bokas signatur.
6. **Ingen oppdiktede verdier.** Normalverdier, r-verdier, prosenttall og signalveinavn
   forankres i standard pensum; usikre detaljer merkes `(verifiser)`. Alle tall-/case-
   oppgaver har NYSKREVNE verdier (opphavsrett, §6).

### Kapittel-DNA (temakapittel — obligatorisk blokk-rekkefølge)

1. `tip` **Eksamensvinkel** — hvilken halvdel, form (L-/F-sjangre), gjenganger-score/vekt,
   og hva sensor ser etter (mekanismekjede med tidsaksering; sentralt/perifert eller
   nevralt/strukturelt; alt-eller-intet på flervalg). Fylles fra Eksamensbelegg under —
   forfatteren finner IKKE på frekvenstall.
2. `text` **Forkunnskaper** — kapitler i boka det bygger på + kryssbok-lenker til klyngen
   (THP100/THP204 for utholdenhet, THP101/THP204 for styrke — kun lenker, ingen gjentakelse),
   etterfulgt av `collapsible` **Nøkkelfakta-, formel- og signalvei-liste** (per kapittel).
3. `text` **Oversikt** — kort (maks 2–3 avsnitt): hva temaet er og hvorfor/hvor ofte det
   testes.
4. `definition` **Kjernefakta** — begreper, normalverdier, signalveinavn, definisjonskriterier
   i emnets terminologi. **Toppnivå med `title` — dette er flashcard-kilden.**
5. `text` **Mekanismekjeder** — nummerert trinnvis (rekkefølge OG tidsaksering kritisk):
   stimulus → mekanisme → effekt, med *når* hvert ledd inntrer.
6. `example` × 2–4 — første enkelt, siste på EKSAMENSNIVÅ modellert på reell sjanger.
   Mekanisme-langsvar skrives som A-besvarelse: Ficks ligning satt opp / begrep definert →
   ledd for ledd hvilke som endres → *hvorfor* og *når* (tidsaksering) → korrekt enhet;
   tall-/figurcase med vist resonnement + begrunnelse; rangerings-/designoppgaver med
   metodebatteri.
7. `warning` **Typiske feil** — feilkodene (U1–U8 / S1–S10) som gjelder temaet.
8. `exercise` × 6–10 — stigende, i kapitlets sjangre (blandet langsvar + flervalg), alle med
   `solution` + `hints`. Langsvar: 2–3 innøving, 2–3 standard, 2–3 eksamensklone. Flervalg:
   2–4 alt-eller-intet med nære distraktorer. Hver oppgave merket med sjangerkode.
9. `collapsible` **Repetisjon** — 4–6 korte kontrollpunkter fra kapitlet og forutgående.

Drill- og øvingseksamenskapitlene (Del 3) har egne oppsett — se §3.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = halvdel + form/vekt + gjenganger-score + sjangerkoder
> + prioritetsklasse. **Faktakontrakt** = definisjoner/normalverdier/signalveinavn som SKAL
> med (flashcard-kilden). **Mekanismekjeder** = årsakskjeder rekonstruert trinnvis MED
> tidsaksering. **Langsvar-momentlister** = modellsvar `example`-blokkene skal levere.
> **Flervalgsdrill** = alt-eller-intet-sjangre kapitlet øver. **Kvote** = quiz/flashcards.

### Del 0 — Eksamenskart: to halvdeler, to svarlogikker

#### Kapittel 0.1: To halvdeler, to fysiologiske domener
**id:** `nih-thp202-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Hvorfor THP202-eksamen alltid er delt i to jevnstore, uavhengige halvdeler
  (utholdenhet 50 % + styrke 50 %) med hver sin logikk, hva hver halvdel tester, hvordan
  poengene fordeles (~60 % langsvar / ~40 % flervalg), og hvordan boka brukes som to
  parallelle delbøker mot de to domenene.
- **Eksamensbelegg:** Metakapittel (hele arkivet 2022/23–2025/26). Skal formidle: (a) **to
  halvdeler** som ikke kan kompensere hverandre; (b) **formene**: begge har langsvar (~60 %)
  + flervalg (~40 %); (c) **de to nøkkelrammeverkene**: Ficks ligning (utholdenhet) og
  stimulus→signalvei→proteinsyntese (styrke); (d) **de to skillene** sensor krever: sentralt/
  perifert (utholdenhet) og nevralt/strukturelt (styrke); (e) **eksamensmalene**: «klassisk»
  del-oppgave-mal (2022/23–2024/25) og strammere V26-mal (seks store oppgaver, samme innhold);
  (f) **3 t skoleeksamen, ingen hjelpemidler** ut over oppgitte figurer/tallverdier. Prioritet:
  perfekt (meta).
- **Faktakontrakt:** halvdel-oversiktstabellen (fagområde/nøkkelrammeverk/oppgavetyper/
  poengfordeling); de to skillene (sentralt↔perifert, nevralt↔strukturelt); hvilke temaer
  ligger i hvilken halvdel (kart til Del 1–2); de to eksamensmalene.
- **Mekanismekjeder:** ingen (kartkapittel).
- **Langsvar-momentlister:** «Slik ser en oppgave ut i hver halvdel» — ett nyskrevet
  minieksempel per halvdel (en L-MEK + F-ALT utholdenhet; en L-MEK + F-DIST styrke) med
  hvordan poeng høstes.
- **Flervalgsdrill:** gjenkjenn halvdel og sjanger fra oppgaveformuleringen.
- **Typiske feil:** tro man kan kompensere svak halvdel; svare med liste der kjede kreves;
  gjette bredt på alt-eller-intet-flervalg.
- **Kvote:** 18 quiz / 16 flashcards.

#### Kapittel 0.2: Eksamensteknikk — mekanismekjede med tidsaksering, og alt-eller-intet-flervalg
**id:** `nih-thp202-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** `nih-thp202-0-1`

- **Kapitteltype:** eksamensteknikk (strateginote).
- **Description:** Hvordan man skårer i de to svarlogikkene — den nummererte mekanismekjeden
  med tidsaksering og begrunnelse (langsvar) og den presise alt-eller-intet-avkryssingen
  (flervalg) — operasjonalisert fra de sju sensor-kredittreglene.
- **Eksamensbelegg:** Destillat av sensorkravene (analysen §4), stabile 2022→. Prioritet:
  perfekt (meta). Skal operasjonalisere de sju sensor-kredittreglene i §2: (a) **kjede, ikke
  liste** — vis stimulus → mekanisme → effekt; (b) **Ficks ligning som ryggrad** i
  utholdenhet-langsvar; (c) **skill sentralt/perifert og nevralt/strukturelt** eksplisitt;
  (d) **tidsaksering** (hva først, hva over uker/måneder) — A-kravet; (e) **begrunn tall/
  figur** med enheter; (f) **pluss-momenter** (signalveinavn, EWGSOP2, nyanser); (g)
  **flervalg alt-eller-intet** — nøyaktig antall, nøyaktig hvilke, delvis riktig = 0.
- **Faktakontrakt:** de sju kredittreglene; **mekanismekjede-malen** (definer/sett opp
  ligning → ledd for ledd → hvorfor + når → enhet/konklusjon); **tidsakserings-sjekklisten**
  (utholdenhet: PV raskt → RCV/hjerte uker–måneder; styrke: nevralt tidlig → hypertrofi
  langsiktig); **spørreord-trappen** (beskriv/forklar/gjør rede for — svar på riktig nivå);
  **flervalgs-disiplinen** (les antall-hint, kryss kun det du kan begrunne).
- **Mekanismekjeder:** malen selv, demonstrert på ett utholdenhets- og ett styrke-eksempel.
- **Langsvar-momentlister:** samme mekanismespørsmål besvart på tre nivåer (beskriv/forklar/
  gjør rede for) med margnotat om hvor poengene faller; ett svar uten tidsaksering vs. ett
  med (vis poengforskjellen).
- **Flervalgsdrill:** «hvor mange er riktige her?» — gjenkjenn ett-vs-to-riktig; nære-
  distraktor-lesing.
- **Typiske feil:** liste der kjede kreves (§4.1); glemme tidsaksering (§4.4); tall uten
  begrunnelse/enhet (§4.5); gjette bredt på flervalg; svare på lavere nivå enn spørreordet.
- **Kvote:** 20 quiz / 16 flashcards.

**Prøve-kvote Del 0:** 0 prøver (dekkes av øvingseksamenene i Del 3).

### Del 1 — Utholdenhet: Ficks ligning og O₂-transport (UTHOLDENHET, 50 %)

> Halvdel 1 (50 % av eksamen). Nøkkelrammeverk: **Ficks ligning** — VO₂maks = SV · HF ·
> (CaO₂ − CvO₂). Alt struktureres ledd for ledd. Forkunnskap lenkes til THP100 (Humanfysiologi:
> hjerte/kretsløp/respirasjon/blod) og THP204 (Metabolisme: energiomsetning) — ikke gjentatt.
> Sensor krever mekanismekjede med tidsaksering + skille sentralt/perifert + begrunnelse ved
> tall/figur. Alle tall NYSKREVNE.

#### Kapittel 1.1: Ficks ligning — ryggraden i utholdenhetsdelen
**id:** `nih-thp202-1-1` · **number:** 1.1 · **estimatedMinutes:** 65 · **prerequisites:** `nih-thp202-0-2`

- **Kapitteltype:** tema (utholdenhet — kjernerammeverk).
- **Description:** Ficks ligning satt opp, definert og enhetsatt: VO₂ = SV · HF · (CaO₂ − CvO₂),
  hvert ledd med realistiske verdier — det ene rammeverket alle andre utholdenhetsoppgaver
  hviler på.
- **Eksamensbelegg:** Utholdenhet (50 %). **Ficks ligning ~10/10** — selve ryggraden, enten
  eksplisitt spurt eller underforstått i alle mekanismeoppgaver. Sjangre: L-MEK (sett opp og
  bruk ligningen), L-TALL (forholdstallsresonnement), F-FAKTA/F-DEF (normalverdier, ledd-
  definisjoner). Prioritet: perfekt (tyngst i delen). Sensor: «pluss om ligninga er med og
  korrekt»; strukturér ledd for ledd.
- **Faktakontrakt:** **Ficks ligning:** VO₂maks = SVmaks · HFmaks · (CaO₂ − CvO₂), der
  CxO₂ = [Hb] · 1,34 · SxO₂. **MV = SV · HF**; **SV = EDV − ESV**; **ejeksjonsfraksjon = SV/EDV**.
  Realistiske verdier (kvinne ~65 kg): VO₂maks 2000–4500 mL/min; HFmaks 160–210 slag/min;
  SV 90–150 mL; CaO₂ 150–200 mL/L; CvO₂ 20–60 mL/L; **CaO₂ i hvile ~200 mL O₂/L blod**; [Hb]
  ~115–165 g/L; **konstant 1,34 mL O₂ per g Hb**; SaO₂ 90–98 %, SvO₂ 10–40 %; hvile-VO₂
  200–300 mL/min; energi per liter O₂ ~20 kJ (~5 kcal) `(verifiser tallintervaller mot pensum)`.
  Enheter: L/min, mL, mL O₂/L blod, slag/min.
- **Mekanismekjeder:** (1) «les» ligningen som kjede: økt VO₂ krever økt MV (SV↑ og/eller HF↑)
  og/eller økt a-vO₂-diff (CaO₂↑ eller CvO₂↓) → hvert ledd er en egen mekanismevei drøftet i
  1.2–1.5. (Ingen tidsaksering her — dette er verktøykapitlet.)
- **Langsvar-momentlister:** «Sett opp Ficks ligning og forklar hva hvert ledd betyr med
  realistisk verdi og enhet» (L-MEK); «Anslå VO₂maks fra oppgitte SV/HF/CaO₂/CvO₂» (L-TALL,
  begrunn).
- **Flervalgsdrill:** hvilke ledd inngår i Ficks ligning (F-DEF); normalverdi for CaO₂/[Hb]/
  1,34-faktoren (F-FAKTA, nære distraktorer på enheter).
- **Typiske feil:** feil enhet (mL vs. L, per L blod vs. per min); glemme at 1,34 er konstant;
  blande CaO₂ og CvO₂; regne uten å definere ledd.
- **Kvote:** 34 quiz / 34 flashcards.

#### Kapittel 1.2: Slagvolum — EDV, ESV og Frank-Starling
**id:** `nih-thp202-1-2` · **number:** 1.2 · **estimatedMinutes:** 60 · **prerequisites:** `nih-thp202-1-1`

- **Kapitteltype:** tema (utholdenhet — sentrale tilpasninger).
- **Description:** Slagvolum som SV = EDV − ESV, og hva som styrer hvert ledd (preload/blod-
  volum/Frank-Starling for EDV; kontraktilitet/afterload for ESV) — kjernen i «sentrale
  tilpasninger».
- **Eksamensbelegg:** Utholdenhet. **Slagvolum (EDV−ESV, Frank-Starling, preload/kontraktilitet/
  afterload) ~9/10** — ofte egen langsvarsoppgave. Sjangre: L-MEK (hva øker SV og hvorfor),
  F-DEF/F-MEK (hva bestemmer ESV/EDV). Prioritet: perfekt.
- **Faktakontrakt:** **SV = EDV − ESV**; **preload** (venøs retur/fylling → EDV); **Frank-
  Starling:** økt EDV → større fiberstrekk → kraftigere kontraksjon → økt SV; **kontraktilitet**
  (påvirker ESV — bedre tømming = lavere ESV); **afterload** (motstand mot utdriving; lavere
  afterload = lavere ESV); **eksentrisk hypertrofi** ved utholdenhetstrening (større ventrikkel-
  volum → større EDV) — strukturell tilpasning over uker/måneder.
- **Mekanismekjeder:** (1) hvordan trening øker SV (tidsakset): økt blodvolum (PV raskt) → økt
  venøs retur → økt EDV → Frank-Starling → økt SV; parallelt eksentrisk hjertehypertrofi (uker–
  måneder) → større EDV; bedre kontraktilitet → lavere ESV → større SV. (2) EDV↑ vs. ESV↓ som
  to uavhengige veier til større SV.
- **Langsvar-momentlister:** «Forklar hvilke mekanismer som øker slagvolumet etter utholdenhets-
  trening, med tidsaksering» (L-MEK — kjede med *hva først*); «Hva bestemmer ESV?» (L-MEK).
- **Flervalgsdrill:** hva øker EDV vs. senker ESV (F-MEK, nære distraktorer); Frank-Starling-
  definisjon (F-DEF).
- **Typiske feil:** `U2` (forklare SV↑ med «bedre kondisjon» uten mekanisme); blande EDV- og
  ESV-determinanter; glemme tidsaksering (PV raskt vs. hjerte over uker).
- **Kvote:** 30 quiz / 30 flashcards.

#### Kapittel 1.3: Blodvolum og blodets sammensetning
**id:** `nih-thp202-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `nih-thp202-1-2`

- **Kapitteltype:** tema (utholdenhet — sentrale tilpasninger, tidsaksering).
- **Description:** Hvordan blodvolum øker etter trening (plasmavolum raskt, rødt cellevolum
  senere), hvorfor det øker SV, og skillet Hb-masse vs. [Hb] — tidsaksering er hele poenget.
- **Eksamensbelegg:** Utholdenhet. **Økt blodvolum (PV raskt, RCV senere) → økt SV ~8/10**
  (tidsaspektet etterspørres eksplisitt); **blodets sammensetning, Hb-masse vs. [Hb], FFM som
  determinant ~5/10** (flervalg + enkelte langsvar). Sjangre: L-MEK (tidsakset), F-FAKTA/F-MEK.
  Prioritet: perfekt (tidsaksering-gjenganger).
- **Faktakontrakt:** **blodvolum = plasmavolum (PV) + rødt cellevolum (RCV)**; **PV øker raskt**
  (dager), **RCV øker senere** (~2–3 uker) `(verifiser tidsvindu mot pensum)`; primær determinant
  = **fettfri masse/kroppsmasse**, sekundært trening (~10 %); **Hb-masse øker (via RCV), men
  [Hb] holdes ~konstant** fordi PV også øker (kan falle litt tidlig — «idrettsanemi» som
  fortynning, ikke ekte anemi); sterk sammenheng (r > ~0,85): VO₂maks ↔ hemoglobinmasse; svak–
  moderat (r < 0,6–0,7): VO₂maks ↔ blodvolum / ↔ fettfri masse; Hb-masse ↔ [Hb] `(verifiser
  r-verdier)`.
- **Mekanismekjeder:** (1) tidsakset blodvolum-respons: PV↑ (dager) → økt venøs retur/EDV → SV↑
  raskt; RCV↑ (uker) → økt O₂-bærekapasitet (CaO₂) → ytterligere VO₂maks-økning. (2) hvorfor
  [Hb] holder seg: RCV og PV øker parallelt → konsentrasjon ~uendret selv om Hb-masse stiger.
- **Langsvar-momentlister:** «Forklar hvordan blodvolumet endres de første ukene med trening og
  hvorfor det bedrer VO₂maks» (L-MEK — tidsaksering er A-kravet).
- **Flervalgsdrill:** Hb-masse vs. [Hb] etter trening (F-MEK, klassisk felle); hva øker først —
  PV eller RCV (F-FAKTA); determinant for blodvolum (F-FAKTA).
- **Typiske feil:** `U6` (tro [Hb] øker med trening); glemme at PV kommer før RCV; forveksle
  Hb-masse og Hb-konsentrasjon; overse FFM som primærdeterminant.
- **Kvote:** 30 quiz / 30 flashcards.

#### Kapittel 1.4: Perifere tilpasninger — a-vO₂-differanse, kapillærer og mitokondrier
**id:** `nih-thp202-1-4` · **number:** 1.4 · **estimatedMinutes:** 60 · **prerequisites:** `nih-thp202-1-1`

- **Kapitteltype:** tema (utholdenhet — perifere tilpasninger).
- **Description:** O₂-ekstraksjonen i muskelen: a-vO₂-differanse, kapillærtetthet, mean transit
  time og mitokondrier — det perifere leddet i Ficks ligning, og hvorfor det bidrar mindre enn
  det sentrale.
- **Eksamensbelegg:** Utholdenhet. **a-vO₂-diff og O₂-ekstraksjon (kapillærtetthet, mean transit
  time) ~9/10** — klassisk «hvorfor øker kapillærtetthet VO₂maks?». Sjangre: L-MEK, F-MEK/F-DEF.
  Prioritet: perfekt. Sensor: hovedbidraget til VO₂maks-økning er økt MV via SV; a-vO₂-diff øker
  bare litt — men kapillærene er likevel nødvendige.
- **Faktakontrakt:** **a-vO₂-diff = CaO₂ − CvO₂** (O₂ ekstrahert per liter blod); perifere
  tilpasninger: **økt kapillærtetthet** (flere kapillærer per fiber → lengre **mean transit
  time** → bedre diffusjonstid), **økte mitokondrier** (volum/antall/enzymer → høyere oksidativ
  kapasitet → lavere CvO₂), **økt myoglobin** `(verifiser)`; a-vO₂-diff øker etter trening, men
  **mindre enn MV** — hovedbidraget til VO₂maks er sentralt (SV↑).
- **Mekanismekjeder:** (1) hvorfor kapillærtetthet betyr noe selv når a-vO₂-diff øker lite: økt
  MV alene → kortere mean transit time gjennom kapillærene → dårligere diffusjonstid; flere
  kapillærer motvirker dette → bevart/økt ekstraksjon. (2) mitokondrievei: flere mitokondrier →
  høyere oksidativ kapasitet → lavere venøs O₂ (CvO₂↓) → større a-vO₂-diff.
- **Langsvar-momentlister:** «Forklar de perifere tilpasningene som bidrar til økt VO₂maks, og
  hvorfor kapillærtetthet er viktig selv om a-vO₂-diff øker lite» (L-MEK).
- **Flervalgsdrill:** hva øker a-vO₂-diff (F-MEK); mean transit time-effekt (F-DEF); sentralt vs.
  perifert bidrag til VO₂maks (F-MEK, nær distraktor).
- **Typiske feil:** `U7` (anta a-vO₂-diff forklarer det meste — det er MV/SV); `U8` (overse
  hvorfor kapillærtetthet betyr noe); blande sentralt/perifert.
- **Kvote:** 30 quiz / 30 flashcards.

#### Kapittel 1.5: Mekanismer for økt VO₂maks etter trening — sentralt + perifert samlet
**id:** `nih-thp202-1-5` · **number:** 1.5 · **estimatedMinutes:** 65 · **prerequisites:** `nih-thp202-1-4`

- **Kapitteltype:** tema (utholdenhet — syntesekapittel, toppgjenganger).
- **Description:** Den store gjengangeren: forklar HELE mekanismekjeden for hvorfor VO₂maks øker
  etter utholdenhetstrening — sentrale (SV/MV) og perifere (kapillær/mitokondrie) tilpasninger
  samlet, ledd for ledd i Ficks ligning, med tidsaksering.
- **Eksamensbelegg:** Utholdenhet. **Mekanismer for økt VO₂maks etter trening ~10/10** — returnerer
  hver sitting, ofte som største langsvarsoppgave i delen. Sjangre: L-MEK (full kjede), L-FIG
  (VO₂/MV/a-vO₂-diff mot intensitet). Prioritet: perfekt. Sensor: strukturér ledd for ledd i
  Ficks ligning; skill sentralt/perifert; tidsakser (hva først).
- **Faktakontrakt:** VO₂maks-økning drives primært av **økt MV (via SV)**, sekundært av **økt
  a-vO₂-diff**; HFmaks er ~uendret (kan falle litt). Sentrale ledd: SV↑ (EDV↑ via blodvolum/
  Frank-Starling + eksentrisk hypertrofi; ESV↓ via kontraktilitet). Perifere ledd: kapillær-
  tetthet↑, mitokondrier↑ → a-vO₂-diff↑ (litt). Tidsaksering: PV/venøs retur raskt → RCV/hjerte-
  struktur/kapillær/mitokondrie over uker–måneder.
- **Mekanismekjeder:** (1) full kjede: trening → blodvolum↑ (PV raskt) → EDV↑ → Frank-Starling →
  SV↑ → MV↑ (dominerende bidrag); parallelt eksentrisk hjertehypertrofi + kontraktilitet↑ (uker–
  måneder) → SV↑ ytterligere; perifert: kapillærtetthet↑ + mitokondrier↑ → a-vO₂-diff↑ (mindre
  bidrag) → **samlet VO₂maks↑ via Ficks ligning**. (2) hvorfor HFmaks ikke øker (og ikke skal
  «forklare» økningen).
- **Langsvar-momentlister:** «Gjør rede for de fysiologiske mekanismene bak økt VO₂maks etter en
  treningsperiode, med tidsaksering» (L-MEK — dette ER toppoppgaven i delen); «Beskriv figuren
  som viser VO₂/MV/a-vO₂-diff mot intensitet før og etter trening» (L-FIG).
- **Flervalgsdrill:** hva bidrar mest til VO₂maks-økning — SV eller a-vO₂-diff (F-MEK); endres
  HFmaks (F-FAKTA, felle); sentralt vs. perifert (F-MEK).
- **Typiske feil:** `U2` (kjede uten mekanisme); `U5` (tro HFmaks øker); `U7` (overvekt på
  a-vO₂-diff); glemme tidsaksering; liste i stedet for kjede.
- **Kvote:** 34 quiz / 34 flashcards.

#### Kapittel 1.6: Submaksimal respons etter trening
**id:** `nih-thp202-1-6` · **number:** 1.6 · **estimatedMinutes:** 55 · **prerequisites:** `nih-thp202-1-5`

- **Kapitteltype:** tema (utholdenhet — den vanligste sensorfellen).
- **Description:** Hva skjer ved **samme absolutte arbeid** etter trening (HF↓, SV↑, Q~uendret,
  a-vO₂-diff↑) — og hvorfor minuttvolumet IKKE øker submaksimalt. Absolutt vs. relativ belastning.
- **Eksamensbelegg:** Utholdenhet. **Submaksimal respons etter trening ~8/10** — krever forståelse
  av absolutt vs. relativ belastning. Sjangre: L-MEK, L-TALL, F-MEK. Prioritet: perfekt. Den
  hyppigste trekk-kilden (U1): mange skriver feilaktig at Q øker submaksimalt.
- **Faktakontrakt:** ved **samme absolutte arbeid** (f.eks. 250 W) etter trening: **HF↓**, **SV↑**,
  **Q (minuttvolum) uendret eller svakt redusert** (samme O₂-behov + økt a-vO₂-diff → mindre
  blod trengs), **a-vO₂-diff↑**; **absolutt belastning** = samme watt/arbeid; **relativ
  intensitet** = % av VO₂maks (lavere etter trening fordi VO₂maks er høyere); ved **maksimalt**
  arbeid øker derimot MV (via SV).
- **Mekanismekjeder:** (1) submaksimal respons: samme O₂-behov (fast absolutt arbeid) + økt SV →
  lavere HF for samme MV; økt a-vO₂-diff → litt lavere MV-behov → Q ~uendret/↓. (2) hvorfor
  relativ intensitet faller selv om absolutt arbeid er likt (VO₂maks↑ → 250 W er lavere % av maks).
- **Langsvar-momentlister:** «Nils sykler samme absolutte arbeid før og etter en treningsperiode
  — forklar hvordan HF, SV, minuttvolum og a-vO₂-diff endres, og hvorfor» (L-MEK/L-TALL, begrunn).
- **Flervalgsdrill:** endres Q submaksimalt etter trening (F-MEK, U1-felle); absolutt vs. relativ
  belastning (F-DEF).
- **Typiske feil:** `U1` (Q øker submaksimalt — feil); `U3` (glemme perifere tilpasninger); `U4`
  (blande absolutt/relativ belastning).
- **Kvote:** 30 quiz / 28 flashcards.

#### Kapittel 1.7: Prestasjonsmodellen og arbeidsøkonomi
**id:** `nih-thp202-1-7` · **number:** 1.7 · **estimatedMinutes:** 60 · **prerequisites:** `nih-thp202-1-5`

- **Kapitteltype:** tema (utholdenhet — prestasjonsintegrasjon).
- **Description:** Prestasjonsmodellen (VO₂maks × utnyttingsgrad + anaerobt bidrag, delt på
  arbeidsøkonomi), arbeidsøkonomi/mekanisk effektivitet med definisjon og enhet, og distanse-
  spesifikk drøfting (3000 m vs. maraton).
- **Eksamensbelegg:** Utholdenhet. **Prestasjonsformelen ~8/10** (distansespesifikk drøfting);
  **arbeidsøkonomi/mekanisk effektivitet ~9/10** (både langsvar og fast flervalgsklassiker);
  **individuell variasjon i treningsrespons ~5/10** (non-responders/spredning); **lunge som
  begrensning (SaO₂-fall hos svært godt trente) ~4/10** (nyanse for toppkarakter). Sjangre: L-MEK,
  L-TALL, F-DEF. Prioritet: perfekt (kjerne) + «bør kjenne til» (lunge/individvariasjon).
- **Faktakontrakt:** **Prestasjonsmodell:** gjennomsnittsfart ≈ (VO₂maks · utnyttingsgrad +
  anaerobt bidrag) / arbeidsøkonomi. **Utnyttingsgrad** = snitt-% av VO₂maks over distansen (høyt
  ved maraton, lavere/høyere anaerobt bidrag ved 3000 m); **arbeidsøkonomi** = O₂-kostnad per
  distanse (mL O₂/kg/km); **mekanisk effektivitet** = ytre arbeid / energiforbruk; **energi per
  liter O₂** ~20 kJ (~5 kcal). Distansespesifikt: korte distanser → større anaerobt bidrag/høyere
  relativ intensitet; lange → utnyttingsgrad og arbeidsøkonomi veier tyngre. **Individuell
  variasjon:** arv + treningsstatus → spredning i fremgang, «non-responders». **Lunge som
  begrensning:** SaO₂-fall ved maks hos svært godt trente (normalt ingen lungebegrensning)
  `(verifiser omfang)`.
- **Mekanismekjeder:** (1) hvorfor to utøvere med samme VO₂maks kan ha ulik prestasjon (arbeids-
  økonomi + utnyttingsgrad + anaerobt bidrag skiller). (2) distansespesifikk vekting (kort vs.
  lang → ulikt bidrag fra hvert ledd).
- **Langsvar-momentlister:** «Forklar prestasjonsmodellen og drøft hvilke ledd som er viktigst
  for henholdsvis 3000 m og maraton» (L-MEK, distansespesifikt); «Definer arbeidsøkonomi og
  mekanisk effektivitet med enhet» (L-DEF).
- **Flervalgsdrill:** definisjon/enhet arbeidsøkonomi vs. mekanisk effektivitet (F-DEF, nære
  distraktorer); hva bestemmer utnyttingsgrad (F-DEF).
- **Typiske feil:** forveksle arbeidsøkonomi og mekanisk effektivitet; feil enhet; glemme
  anaerobt bidrag på korte distanser; tro alle responderer likt på trening.
- **Kvote:** 30 quiz / 28 flashcards.

**Prøve-kvote Del 1:** 4 prøver (id `nih-thp202-1-prove`, chapterNumber `1.P`): (1) *Ficks
ligning og slagvolum* — F-FAKTA normalverdier + L-MEK «hva øker SV, med tidsaksering». (2)
*Sentrale vs. perifere tilpasninger* — F-MEK sentralt/perifert-matrise + L-MEK a-vO₂-diff/
kapillær. (3) *VO₂maks-mekanismen (toppoppgaven)* — full L-MEK med tidsaksering + L-FIG figur-
tolkning. (4) *Submaksimal respons og prestasjonsmodell* — L-TALL absolutt/relativ + F-DEF
arbeidsøkonomi. Hver prøve blander alt-eller-intet-flervalg og mekanismekjede-langsvar med
momentliste-fasit. Prøvekapittel-id `nih-thp202-1-prove`, chapterNumber `1.P` (jf. BYGGEKONTRAKT).

### Del 2 — Styrke: hypertrofi, nevral adaptasjon og aldring (STYRKE, 50 %)

> Halvdel 2 (50 % av eksamen). Nøkkelrammeverk: **stimulus → signalvei → proteinsyntese**
> (mekanisk drag + metabolsk stress → mTOR/MAPK), og skille **nevralt** fra **strukturelt**.
> Forkunnskap lenkes til THP101 (Funksjonell anatomi: muskelstruktur/sarkomerer/fiberarkitektur)
> og THP204 (Metabolisme: metabolsk stress) — ikke gjentatt. Sensor krever mekanismekjede med
> tidsaksering (nevralt tidlig, hypertrofi langsiktig) + signalveinavn + alt-eller-intet-flervalg
> med svært nære distraktorer. Alle tall NYSKREVNE.

#### Kapittel 2.1: Hypertrofi — hva skjer i fiberen
**id:** `nih-thp202-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `nih-thp202-0-2`

- **Kapitteltype:** tema (styrke — grunnbegrepet).
- **Description:** Muskelhypertrofi definert korrekt (volumøkning — myofibriller/sarkomerer i
  parallell OG serie, ikke bare tverrsnitt), skilt fra atrofi og hyperplasi — grunnbegrepet hele
  styrkedelen bygger på.
- **Eksamensbelegg:** Styrke (50 %). **Muskelhypertrofi: hva skjer i fiberen ~10/10** —
  grunnbegrepet; hypertrofi/atrofi/hyperplasi defineres nesten hver gang. Sjangre: L-MEK, F-DEF/
  F-DIST. Prioritet: perfekt (tyngst i delen sammen med 2.2). Sensor: hypertrofi er VOLUMøkning,
  ikke bare tverrsnitt.
- **Faktakontrakt:** **hypertrofi** = økning i muskel(fiber)volum (flere myofibriller/sarkomerer
  i parallell → tverrsnitt↑, og i serie → lengde↑); **atrofi** = volumtap; **hyperplasi** =
  økning i *antall* fibre (skjer i praksis ikke hos mennesker ved trening); tung trening → **type-II
  vokser mest** (~20–40 % vs. ~10–20 % type I over 10–12 uker) `(verifiser prosenttall)`; typisk
  vekst ~7–14 % (bein) / ~12–20 % (overkropp), snitt ~10 % bein / ~15 % overkropp — overkropp
  vokser litt raskere `(verifiser)`.
- **Mekanismekjeder:** (1) hva «vekst i fiberen» konkret er: flere kontraktile proteiner
  (aktin/myosin) → flere myofibriller/sarkomerer → økt fibervolum (tverrsnitt + lengde). (2)
  hypertrofi vs. hyperplasi — hvorfor mennesker får hypertrofi, ikke flere fibre.
- **Langsvar-momentlister:** «Definer hypertrofi, atrofi og hyperplasi, og forklar hva som skjer
  inne i muskelfiberen ved hypertrofi» (L-MEK); «Hvilke fibertyper vokser mest ved tung trening?»
  (L-MEK).
- **Flervalgsdrill:** hypertrofi = tverrsnitt eller volum (F-DEF, S1-felle); hyperplasi hos
  mennesker (F-DIST); hvilken fibertype vokser mest (F-MEK).
- **Typiske feil:** `S1` (hypertrofi bare som tverrsnitt); `S4` (tro type-I vokser mest); blande
  hypertrofi/hyperplasi.
- **Kvote:** 34 quiz / 34 flashcards.

#### Kapittel 2.2: Stimuli og signalveier — mekanisk drag, metabolsk stress, mTOR og MAPK
**id:** `nih-thp202-2-2` · **number:** 2.2 · **estimatedMinutes:** 65 · **prerequisites:** `nih-thp202-2-1`

- **Kapitteltype:** tema (styrke — kjernemekanisme).
- **Description:** Stimulus→signalvei→proteinsyntese-kjeden: mekanisk drag + metabolsk stress →
  mTOR (rask) og MAPK (treg) → økt proteinsyntese, med signalveinavn sensor premierer.
- **Eksamensbelegg:** Styrke. **Stimuli for vekst: mekanisk drag + metabolsk stress → mTOR/MAPK
  ~9/10** — signalveier (PI3K-Akt-mTOR-p70S6K, MAPK) forventes navngitt. Sjangre: L-MEK (full
  kjede), F-MEK/F-DIST. Prioritet: perfekt. Sensor-pluss: navngi signalveiene.
- **Faktakontrakt:** to hovedstimuli: **mekanisk drag** (integriner/cytoskjelett/mekanoreseptorer)
  + **metabolsk stress** (↓pH, metabolitter, cellesvelling); signalveier: **mTOR** (rask
  proteinsyntese via initierings-/elongeringsfaktorer) og **MAPK** (tregere, via vekstfaktorer);
  klassisk vekstfaktorvei: **PI3K-Akt-mTOR-p70S6K**; **AMPK** kan hemme proteinsyntesen (energi-
  sensor); kapasitetsutvidelse over tid: flere **ribosomer** (translasjonskapasitet). Både mTOR
  OG MAPK bidrar — ikke bare mTOR.
- **Mekanismekjeder:** (1) full signalkjede (tidsakset): treningsøkt → mekanisk drag + metabolsk
  stress → aktivering av mTOR (rask respons, timer) og MAPK (tregere) → økt proteinsyntese →
  akkumulert over økter → hypertrofi (uker); over tid → flere ribosomer → høyere translasjons-
  kapasitet. (2) hvorfor flere veier (mTOR *og* MAPK) — ikke én enkelt bryter.
- **Langsvar-momentlister:** «Gjør rede for stimuli og signalveier som fører til muskelvekst,
  fra treningsøkt til økt proteinsyntese» (L-MEK — navngi PI3K-Akt-mTOR-p70S6K og MAPK for full
  pott).
- **Flervalgsdrill:** hvilke signalveier gir vekst (F-DIST: mTOR/MAPK vs. AMPK-distraktor); hva er
  mekanisk vs. metabolsk stimulus (F-MEK); AMPK-rolle (F-DIST, distraktor GAPDH/PFK/VEGF).
- **Typiske feil:** `S2` (tro kun mTOR gir vekst); glemme å navngi signalveiene; blande mekanisk/
  metabolsk stimulus; forveksle AMPK (hemmer) med anabole veier.
- **Kvote:** 34 quiz / 34 flashcards.

#### Kapittel 2.3: Satellittceller, myostatin og hormoner
**id:** `nih-thp202-2-3` · **number:** 2.3 · **estimatedMinutes:** 60 · **prerequisites:** `nih-thp202-2-2`

- **Kapitteltype:** tema (styrke — vekstregulering, nære distraktorer).
- **Description:** Reguleringen av muskelvekst: satellittceller (donerer kjerner, kjernedomene),
  myostatin (bremsen) og hormoner (testosteron/IGF-1) — med de svært nære flervalgsdistraktorene
  drillet.
- **Eksamensbelegg:** Styrke. **Satellittceller ~9/10** (ofte koblet til myostatin/testosteron);
  **myostatin ~7/10** (fast flervalg + delspørsmål); **testosteron/hormoner ~8/10** (fast flervalg
  med svært like distraktorer). Sjangre: L-MEK, F-DIST (kjernesjanger her). Prioritet: perfekt.
  Sensor: nære distraktorer der bare presiseringen skiller.
- **Faktakontrakt:** **satellittceller** — aktiveres av trening/skade → deler seg → **donerer
  cellekjerner** til fiberen → opprettholder **kjernedomenet** (myonukleært domene: hver kjerne
  styrer et fast cytoplasmavolum); **myostatin** — hemmer vekst og satellittceller, øker
  proteinnedbrytning; **reduseres ved trening**; **testosteron** — anabolt, forklarer kjønns-
  forskjellen i muskelmasse, men **akutt respons på en økt har usikker betydning**; **IGF-1/MGF,
  HGF** — viktige for satellittcelleaktivering; **veksthormon** — usikker direkte anabol effekt;
  distraktorer: **VEGF** (kar, ikke satellittceller), **GAPDH/PFK** (metabolske enzymer), **AMPK**
  (hemmer proteinsyntese).
- **Mekanismekjeder:** (1) satellittcelle-veien: trening/skade → HGF/IGF-1 aktiverer satellitt-
  celler → deling → fusjon med fiber → nye kjerner → bevart kjernedomene ved vekst. (2) myostatin
  som brems: ↓myostatin ved trening → mindre hemming av vekst/satellittceller → mer vekst.
- **Langsvar-momentlister:** «Forklar satellittcellenes rolle ved muskelvekst» (L-MEK); «Hvilken
  rolle spiller myostatin og testosteron?» (L-MEK, presiser akutt vs. kronisk).
- **Flervalgsdrill:** hva gjør satellittceller (F-DIST); myostatin-effekt (F-DIST); testosteron
  akutt vs. kronisk (F-DIST, S6-felle); hvilket molekyl aktiverer satellittceller (F-DIST, distr.
  VEGF/GAPDH).
- **Typiske feil:** `S6` (overvurdere veksthormon/akutt testosteron); blande satellittcelle-/
  myostatin-rolle; forveksle VEGF (kar) med satellittcelle-aktivator.
- **Kvote:** 32 quiz / 32 flashcards.

#### Kapittel 2.4: Nevral adaptasjon
**id:** `nih-thp202-2-4` · **number:** 2.4 · **estimatedMinutes:** 55 · **prerequisites:** `nih-thp202-2-1`

- **Kapitteltype:** tema (styrke — nevralt vs. strukturelt, tidsaksering).
- **Description:** Nevrale tilpasninger (rekruttering, fyringsfrekvens, dubletter/tripletter,
  koordinasjon) som forklarer «styrke uten muskelvekst» tidlig i et treningsforløp — nevralt
  først, hypertrofi senere.
- **Eksamensbelegg:** Styrke. **Nevral adaptasjon ~9/10** — sentralt i «styrke uten muskelvekst»;
  rangeringsoppgaver vanlige. Sjangre: L-MEK, L-RANG (10-uker vs. 5-år), F-MEK. Prioritet: perfekt.
  Sensor: nevralt dominerer tidlig, hypertrofi langsiktig (tidsaksering).
- **Faktakontrakt:** nevrale tilpasninger: **↑rekruttering** av motoriske enheter, **↑fyrings-
  frekvens**, **dubletter/tripletter** (raske dobbeltimpulser ved start av kontraksjon),
  **↓antagonistaktivering**, **bedre koordinasjon/teknikk**; størst rom i **flerleddsøvelser/
  vektløfting**, mindre i isolerte bevegelser; **nevral adaptasjon dominerer de første ukene**,
  hypertrofi bidrar mer over måneder–år.
- **Mekanismekjeder:** (1) tidsakset styrkeøkning: uker 1–6 nevralt (rekruttering/fyring/
  koordinasjon) → styrke↑ uten synlig muskelvekst; uke ~6+ hypertrofi tar over. (2) hvorfor
  styrke kan øke før muskelen vokser (nevral effektivisering).
- **Langsvar-momentlister:** «Forklar de nevrale tilpasningene til styrketrening og hvorfor
  styrken øker før muskelen vokser» (L-MEK, tidsakset); «Ranger de nevrale tilpasningene fra
  viktigst til minst viktig for henholdsvis 10 uker og 5 år» (L-RANG).
- **Flervalgsdrill:** nevral vs. strukturell tilpasning (F-MEK); hva er dubletter/tripletter
  (F-DEF); når dominerer nevral adaptasjon (F-MEK, tidsaksering).
- **Typiske feil:** `S10` (rangere hypertrofi over nevralt de første ukene); blande nevralt/
  strukturelt; glemme tidsaksering i rangering.
- **Kvote:** 30 quiz / 30 flashcards.

#### Kapittel 2.5: RFD, fibertyper og fibertypeskifte
**id:** `nih-thp202-2-5` · **number:** 2.5 · **estimatedMinutes:** 60 · **prerequisites:** `nih-thp202-2-4`

- **Kapitteltype:** tema (styrke — kraftutvikling og fibertyper, klassiske feller).
- **Description:** Rate of force development (nevrale + kontraktile determinanter; absolutt vs.
  relativ) og fibertyper med treningsindusert skifte (IIX→IIA, ingen I↔II-skifte) — to faste
  flervalgsfeller.
- **Eksamensbelegg:** Styrke. **RFD ~8/10** (hypertrofi gir høyere *absolutt* men ikke *relativ*
  RFD); **fibertyper og treningsindusert skifte ~9/10** (klassisk flervalgsfelle). Sjangre: F-DIST
  (kjernesjanger), L-MEK. Prioritet: perfekt.
- **Faktakontrakt:** **RFD (rate of force development)** = hvor raskt kraft utvikles (N/s);
  determinanter: **nevrale** (rekruttering/synkronisering/dubletter/tripletter — dominerer tidlig
  RFD), **kontraktile** (muskeltverrsnitt, fibertype, senestivhet); **hypertrofi gir høyere
  *absolutt* RFD** (N/s), men **uendret/lavere *relativ* RFD** (RFD normert til maks kraft);
  **fibertyper:** type I (langsom, oksidativ, utholdende), type IIA (rask, oksidativ-glykolytisk),
  type IIX (raskest, glykolytisk); **treningsindusert skifte: IIX→IIA** ved trening (ikke IIA→IIX);
  **I↔II-forholdet endres *ikke*** ved vanlig trening; type-II vokser mest ved tung trening.
- **Mekanismekjeder:** (1) hvorfor hypertrofi hever absolutt men ikke relativ RFD (mer kraft
  totalt, men tidsforløpet normert til maks er ~likt). (2) fibertypeskifte-veien: tung/regelmessig
  bruk → IIX-fibre uttrykker mer oksidative egenskaper → IIA-preg (IIX→IIA); hurtig/lite bruk →
  motsatt.
- **Langsvar-momentlister:** «Forklar hva RFD er og hvordan hypertrofi påvirker absolutt vs.
  relativ RFD» (L-MEK); «Hvilke fibertypeskift skjer ved tung styrketrening?» (L-MEK).
- **Flervalgsdrill:** hypertrofi og relativ RFD (F-DIST, S5-felle); retning på fibertypeskifte
  (F-DIST, S3-felle: IIX→IIA); endres I:II-forholdet (F-DIST); hvilken fibertype vokser mest
  (F-MEK).
- **Typiske feil:** `S5` (tro hypertrofi gir høyere relativ RFD); `S3` (feil skifteretning IIA→IIX
  eller endret I:II); `S4` (type-I vokser mest).
- **Kvote:** 30 quiz / 30 flashcards.

#### Kapittel 2.6: Aldring og sarkopeni
**id:** `nih-thp202-2-6` · **number:** 2.6 · **estimatedMinutes:** 60 · **prerequisites:** `nih-thp202-2-5`

- **Kapitteltype:** tema (styrke — aldringsfysiologi, nesten sikker).
- **Description:** Sarkopeni: type-II-atrofi, tap av motoriske enheter, hvorfor power faller mer
  enn kraft, EWGSOP2-kriteriene og hvorfor eldre får hypertrofi (ikke hyperplasi) ved trening.
- **Eksamensbelegg:** Styrke. **Aldring/sarkopeni ~9/10** — nesten sikker; ofte kombinert med DXA/
  definisjonskriterier. Sjangre: L-MEK, L-DES (metodedesign), F-DEF/F-MEK. Prioritet: perfekt.
  Sensor-pluss: EWGSOP2; power ned mest.
- **Faktakontrakt:** **sarkopeni** = aldersrelatert tap av muskelmasse og -funksjon; mekanismer:
  **type-II-atrofi** + **tap av (type-II) motoriske enheter** (reinnervering → mer type-I-preget
  muskel), **↓nerveledningshastighet**, **↑bindevev/fett**, **↓IGF-1/kjønnshormoner**,
  **↓satellittceller**, lavgradig inflammasjon, **anabol resistens**; **styrke faller mer enn
  masse** (↓spesifikk styrke); **power (W = kraft × hastighet) faller mest** (kombinert kraft- og
  hastighetstap); kriterier: **EWGSOP2** (DXA-muskelmasse + gripestyrke/gangfart); styrketap ~30 %
  fra 40 til 70 år `(verifiser)`; eldre får **hypertrofi og styrke ved trening — ikke hyperplasi**.
- **Mekanismekjeder:** (1) hvorfor power faller mest: kraft↓ (type-II-atrofi) OG hastighet↓ (færre
  raske enheter) → power = kraft×hastighet rammes dobbelt. (2) aldringstapets årsak: fiberatrofi +
  tap av type-II-motoneuroner (IKKE kortere sener/fiberlengde).
- **Langsvar-momentlister:** «Forklar de fysiologiske endringene ved sarkopeni og hvorfor power
  faller mer enn maksimal kraft» (L-MEK); «Hvordan ville du målt/diagnostisert sarkopeni?»
  (L-DES → EWGSOP2/DXA).
- **Flervalgsdrill:** hva faller mest ved aldring — kraft eller power (F-MEK); årsak til
  aldringstap (F-MEK, S8-felle); får eldre flere fibre ved trening (F-DIST, S7-felle); EWGSOP2
  (F-DEF).
- **Typiske feil:** `S7` (tro eldre danner flere fibre); `S8` (tro tapet skyldes kortere sener/
  fiberlengde); glemme at power faller mest.
- **Kvote:** 30 quiz / 30 flashcards.

#### Kapittel 2.7: Måle- og designoppgaver i styrkefysiologi
**id:** `nih-thp202-2-7` · **number:** 2.7 · **estimatedMinutes:** 55 · **prerequisites:** `nih-thp202-2-4`

- **Kapitteltype:** tema (styrke — metode/design, egen oppgavetype).
- **Description:** Målemetodebatteriet (EMG, interpolert twitch/tetanus, TMS/H-refleks, biopsi/
  immunhistokjemi, MR/ultralyd, DXA) og 1RM-protokollen — verktøyene for «hvordan ville du målt/
  designet en studie?»-oppgaven.
- **Eksamensbelegg:** Styrke. **Måle-/laboratoriemetoder ~8/10** (egen oppgavetype: «hvordan ville
  du målt/designet?»); **1RM-testprotokoll og reproduserbarhet ~4/10** (praktisk-metodisk). Sjangre:
  L-DES (kjernesjanger), F-DEF, F-DIST. Prioritet: perfekt (metode) + «bør kjenne til» (1RM-detalj).
  Sensor: metodebatteri MED begrunnelse; intervensjonslengde ≥12 uker, kontrollgruppe.
- **Faktakontrakt:** **EMG** (muskelaktivitet — kvantifiserer IKKE aktiveringssvikt godt);
  **interpolert twitch/tetanus** (aktiveringsgrad — riktig metode for aktiveringssvikt); **TMS/
  perifer nervestimulering, H-refleks/V-wave** (nevralt); **biopsi + immunhistokjemi** mot myosin
  I/IIA/IIX (fibertype); **MR/CT/ultralyd** (tverrsnitt/arkitektur); **DXA** (kroppssammensetning/
  BMD, strukturelt); **studiedesign**: intervensjonslengde **≥12 uker**, kontrollgruppe, utvalgs-
  størrelse, tilvenning, kostkontroll, batteri av målemetoder med begrunnelse; **1RM-protokoll:**
  oppvarming i stigende trinn (~30/50/70/90 % antatt 1RM med fallende reps), 2–3 maksforsøk;
  standardiser bevegelsesutslag/fotstilling/vektoppløsning/hvile (≥24 t) for reproduserbarhet.
- **Mekanismekjeder:** (1) metodevalg-logikk: hva vil du måle (aktiveringsgrad? fibertype?
  tverrsnitt?) → hvilken metode passer og hvorfor (og hvilken passer IKKE). (2) hvordan man
  designer en holdbar treningsstudie (lengde/kontroll/kontroll av konfundere).
- **Langsvar-momentlister:** «Design en 12-ukers studie for å undersøke effekten av styrketrening
  på muskeltverrsnitt og aktiveringsgrad — med målemetoder og begrunnelse» (L-DES, metodebatteri);
  «Hvorfor er EMG uegnet til å måle aktiveringssvikt?» (L-MEK).
- **Flervalgsdrill:** hvilken metode måler aktiveringsgrad (F-DIST, S9-felle: EMG vs. interpolert
  twitch); hvilken metode måler fibertype/tverrsnitt (F-DEF); 1RM-oppvarmingsprotokoll (F-FAKTA).
- **Typiske feil:** `S9` (bruke EMG til aktiveringssvikt); glemme kontrollgruppe/intervensjonslengde;
  metodebatteri uten begrunnelse; feil metode til feil variabel.
- **Kvote:** 26 quiz / 26 flashcards.

#### Kapittel 2.8: Styrketrening og utholdenhetsprestasjon
**id:** `nih-thp202-2-8` · **number:** 2.8 · **estimatedMinutes:** 50 · **prerequisites:** `nih-thp202-2-2`

- **Kapitteltype:** tema (styrke — bindeledd mellom halvdelene).
- **Description:** Hvordan tung styrketrening bedrer utholdenhetsprestasjon (løps-/sykkeløkonomi,
  utnyttingsgrad, anaerobe egenskaper) — men IKKE VO₂maks. Bindeleddet mellom de to halvdelene.
- **Eksamensbelegg:** Styrke (og bindeledd til utholdenhet). **Styrketrening og utholdenhets-
  prestasjon ~7/10** (går igjen i begge halvdeler); **dose-respons: motstand vs. styrke vs.
  hypertrofi ~6/10** (okklusjonstrening/BFR som motargument). Sjangre: L-MEK, L-ANV (anvendt økt),
  F-MEK. Prioritet: perfekt (kjernebindeledd) + «bør kjenne til» (BFR-nyanse).
- **Faktakontrakt:** tung styrketrening (4–10 RM, kne-/hoftestrekkere, 2–3 økter/uke i 10–12 uker)
  bedrer **sykkel-/løpsøkonomi**, **utnyttingsgrad** og **anaerobe egenskaper** — **men ikke
  VO₂maks**; plyometri kan også bedre løpsøkonomi; **dose-respons**: høyere motstand (% 1RM) → mer
  styrke; hypertrofi krever tilstrekkelig volum × belastning; **okklusjonstrening/BFR** gir
  hypertrofi ved *lav* belastning (motargument for enkel dose-respons på hypertrofi) `(verifiser)`.
- **Mekanismekjeder:** (1) hvorfor styrketrening bedrer utholdenhetsprestasjon uten å øke VO₂maks:
  bedre arbeidsøkonomi + utnyttingsgrad + anaerobt bidrag → høyere fart ved samme VO₂maks (koble
  til prestasjonsmodellen, kap. 1.7). (2) BFR som motargument for dose-respons (lav belastning +
  okklusjon → hypertrofi via metabolsk stress).
- **Langsvar-momentlister:** «Forklar hvordan tung styrketrening kan bedre en syklists prestasjon
  uten å øke VO₂maks» (L-MEK, koble til prestasjonsmodellen); «Sett opp et forslag til styrke-
  treningsøkt for en syklist med fysiologisk begrunnelse» (L-ANV).
- **Flervalgsdrill:** øker styrketrening VO₂maks (F-MEK, felle); hva bedres av styrketrening for
  en utholdenhetsutøver (F-MEK); dose-respons/BFR (F-DIST).
- **Typiske feil:** tro styrketrening øker VO₂maks; glemme økonomi-/utnyttingsgrad-koblingen;
  overse BFR som dose-respons-motargument.
- **Kvote:** 26 quiz / 26 flashcards.

**Prøve-kvote Del 2:** 4 prøver (id `nih-thp202-2-prove`, chapterNumber `2.P`): (1) *Hypertrofi og
signalveier* — F-DEF hypertrofi/atrofi/hyperplasi + L-MEK «stimulus→signalvei→proteinsyntese» med
navngitte veier. (2) *Vekstregulering (nære distraktorer)* — F-DIST satellittceller/myostatin/
testosteron + L-MEK satellittcellerolle. (3) *Nevralt, RFD og fibertyper* — L-RANG nevralt vs.
hypertrofi (tidsakset) + F-DIST fibertypeskifte/relativ RFD. (4) *Aldring og metode* — L-MEK
sarkopeni (power ned mest) + L-DES metodebatteri (EWGSOP2/interpolert twitch). Hver prøve blander
alt-eller-intet-flervalg og mekanismekjede-langsvar med momentliste-fasit. Prøvekapittel-id
`nih-thp202-2-prove`, chapterNumber `2.P` (jf. BYGGEKONTRAKT).

### Del 3 — Eksamenstrening (to svarlogikker)

#### Kapittel 3.1: Mekanismekjede-drill med tidsaksering (langsvar-modaliteten)
**id:** `nih-thp202-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-thp202-2-8`

- **Kapitteltype:** sjangerdrill (langsvar).
- **Description:** Den nummererte mekanismekjeden med tidsaksering og begrunnelse drillet på tvers
  av begge halvdeler — å bygge kjede (ikke liste) er selve karakterforskjellen.
- **Eksamensbelegg:** Analysen §3–§4 (langsvar ~60 % av poengene, begge halvdeler). Prioritet:
  perfekt (meta). Sensor: mekanismekjede med tidsaksering, ikke opplisting; Ficks ligning som
  ryggrad (utholdenhet); skill sentralt/perifert og nevralt/strukturelt.
- **Innhold:** én seksjon per kjernemekanisme (VO₂maks-økning · submaksimal respons · blodvolum-
  tidsaksering · hypertrofi-signalvei · nevral vs. hypertrofi over tid · sarkopeni). Per seksjon:
  (a) et nyskrevet «slik ser et liste-svar ut» (lav pott), (b) omskrevet til full mekanismekjede
  MED tidsaksering (full pott), (c) margnotat om hvor poengene faller. Driller «hva mangler i
  dette svaret?» og «sett kjeden i riktig rekkefølge».
- **Langsvar-momentlister:** kapitlet ER momentlistene (før/etter-par for hver kjernemekanisme).
- **Flervalgsdrill:** «hvilket ledd/tidsaksering mangler?» (utmerket alt-eller-intet).
- **Typiske feil:** liste der kjede kreves; glemt tidsaksering; feil rekkefølge; U/S-feilkodene
  som mangler-diagnose.
- **Kvote:** 22 quiz / 12 flashcards.

#### Kapittel 3.2: Alt-eller-intet-flervalgsdrill med nære distraktorer
**id:** `nih-thp202-3-2` · **number:** 3.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-thp202-3-1`

- **Kapitteltype:** sjangerdrill (flervalg).
- **Description:** Alt-eller-intet-flervalget (4 alternativer, ett/to riktige, delvis riktig = 0)
  drillet med de nære distraktorene som avgjør — særlig styrkedelens myostatin/hormon/satellitt-
  celle/fibertype/RFD-feller og utholdenhetsdelens normalverdi- og submaksimal-feller.
- **Eksamensbelegg:** Analysen §3 (flervalg ~40 % av poengene, begge halvdeler). Prioritet: perfekt
  (meta). Sensor: nøyaktig antall, nøyaktig hvilke; ingen delpoeng; ingen minuspoeng, men presisjon
  avgjør.
- **Innhold:** seksjoner etter feltype: normalverdier/enheter (utholdenhet) · sentralt/perifert ·
  submaksimal (U1) · hypertrofi/fibertype (S1/S3/S4) · signalvei (S2) · vekstregulering (S6/
  satellitt/myostatin) · RFD (S5) · metode (S9). Per seksjon: sett av nære-distraktor-oppgaver med
  full begrunnelse for hvert alternativ (hvorfor akkurat dette er riktig/galt), og «hvor mange er
  riktige?»-lesetrening.
- **Langsvar-momentlister:** ingen (ren flervalgsdrill), men hvert alternativ begrunnes i klartekst.
- **Flervalgsdrill:** kapitlet ER flervalgsdrillen (ett/to-riktig-gjenkjenning + distraktoranalyse).
- **Typiske feil:** gjette bredt; overse ett-vs-to-riktig-hint; alle U/S-distraktorfellene.
- **Kvote:** 24 quiz / 12 flashcards.

#### Kapittel 3.3: Øvingseksamen A (klassisk mal — 3 t, 50/50)
**id:** `nih-thp202-3-3` · **number:** 3.3 · **estimatedMinutes:** 90 · **prerequisites:** `nih-thp202-3-2`

- **Kapitteltype:** øvingseksamen.
- **Description:** Et komplett, nyskrevet sett i «klassisk» del-oppgave-mal (2022/23–2024/25):
  3 t, ingen hjelpemidler, utholdenhetsdel 50 poeng + styrkedel 50 poeng, hver med separate
  nummererte langsvars- og flervalgsoppgaver (~60 % langsvar / ~40 % flervalg).
- **Eksamensbelegg:** Hele arkivet, klassisk mal. Prioritet: perfekt (meta). Utholdenhet: Ficks-
  ligning-oppgave + VO₂maks-mekanisme (sentralt+perifert, tidsakset) + submaksimal-resonnement +
  arbeidsøkonomi + normalverdi-flervalg. Styrke: hypertrofi-signalvei + satellittceller/myostatin/
  testosteron + nevral adaptasjon + RFD + aldring/sarkopeni + fibertype-/hormonflervalg med nære
  distraktorer.
- **Innhold:** ~6–8 langsvar (fordelt 50/50 på halvdelene) + 2 flervalgssett (ett per halvdel,
  alt-eller-intet). `collapsible` full fasit per oppgave med momentlister, tidsaksering markert og
  delpoeng synlige; `tip` **Sensorblikket** (mekanismekjede-krav, hva E-kandidaten høster vs. hva
  A krever, alt-eller-intet-poengføring på flervalg).
- **Kvote:** 8 quiz / 4 flashcards.

#### Kapittel 3.4: Øvingseksamen B (V26-mal — seks store oppgaver)
**id:** `nih-thp202-3-4` · **number:** 3.4 · **estimatedMinutes:** 90 · **prerequisites:** `nih-thp202-3-3`

- **Kapitteltype:** øvingseksamen.
- **Description:** Andre komplette sett i den strammere V26-malen: fortsatt 50/50 og 60/40, men
  bygget som seks store oppgaver (Oppg. 1 utholdenhet-langsvar a–e, Oppg. 2 utholdenhet-flervalg,
  Oppg. 3–5 styrke-langsvar, Oppg. 6 styrke-flervalg) — samme innhold, strammere organisering.
- **Eksamensbelegg:** V26-settet (nytt oppsett). Prioritet: perfekt (meta). Samme temaprofil som
  A, men annen oppgavemiks og vekt-spenn (f.eks. tyngre design-/metodeoppgave i styrke, distanse-
  spesifikk prestasjonsdrøfting i utholdenhet).
- **Innhold:** seks store oppgaver som beskrevet, med delspørsmål à ~6 poeng. Full momentliste-
  fasit med tidsaksering + Sensorblikket med bestått- vs. toppsjikt-terskelbeskrivelse (jf.
  analysens nivåskille §4).
- **Kvote:** 8 quiz / 4 flashcards.

**Prøve-kvote Del 3:** 0 prøver (Del 3s to øvingseksamener + to sjangerdriller dekker helheten).

---

## Kvotesammendrag (AUTORITATIV for alle senere faser)

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 2 | 38 | 32 | 0 (dekkes av øvingseksamenene) |
| 1 | 7 | 218 | 214 | 4 |
| 2 | 8 | 242 | 242 | 4 |
| 3 | 4 | 62 | 32 | 0 (= 2 sjangerdriller + 2 øvingseksamener) |
| **Sum** | **21** | **560 ✓ (≥500)** | **520 ✓ (≥500)** | **8 + 2 øvingseksamener** |

Summeringskontroll per del (quiz / flashcards):
- Del 0: 18+20 = **38** / 16+16 = **32**
- Del 1: 34+30+30+30+34+30+30 = **218** / 34+30+30+30+34+28+28 = **214**
- Del 2: 34+34+32+30+30+30+26+26 = **242** / 34+34+32+30+30+30+26+26 = **242**
- Del 3: 22+24+8+8 = **62** / 12+12+4+4 = **32**
- **Totalt: 560 quiz / 520 flashcards.**

**Kvotebegrunnelse (jf. audit-lærdommen 7. juli: ≥500 er GULV, ikke mål).** THP202 er et
faktatungt fag med 3 t skoleeksamen **uten hjelpemidler** — normalverdier, Ficks-ligningens
variabler/enheter, signalveinavn (PI3K-Akt-mTOR-p70S6K, MAPK), definisjonskriterier (EWGSOP2)
og mekanismekjede-ledd må alle sitte utenat. Det trekker flashcard-tettheten opp mot ~30/temakapittel
i fagdelene (nokut-afb-profilen). Samtidig er ~40 % av poengene alt-eller-intet-flervalg der delvis
riktig = 0, med svært nære distraktorer (særlig styrkedelens myostatin/hormon/fibertype/RFD-feller)
— det trekker quiz-tettheten opp tilsvarende, ~30/temakapittel. Boka er kompakt (21 kapitler), men de
15 fagkapitlene bærer tettheten, så summene ligger med margin over gulvet (560/520) uten kunstig
oppfylling; meta- og drill-/øvingskapitler har
bevisst lavere kvote (drill/øving trener sjanger, ikke fakta).

**Flashcard-profil:** normalverdi-, definisjons- og mekanismekort til pugg utenat — Ficks-ligningens
ledd og enheter (CaO₂ ~200 mL O₂/L; 1,34 mL O₂/g Hb; VO₂maks/HFmaks/SV-intervaller), definisjoner
(SV = EDV−ESV; ejeksjonsfraksjon = SV/EDV; arbeidsøkonomi vs. mekanisk effektivitet; hypertrofi/
atrofi/hyperplasi), signalveinavn↔funksjon (mTOR = rask proteinsyntese; MAPK = treg; PI3K-Akt-mTOR-
p70S6K; myostatin = brems; satellittceller = donerer kjerner), mekanismeledd↔rekkefølge (blodvolum:
PV raskt → RCV uker; nevralt tidlig → hypertrofi sent), skille-kort (sentralt↔perifert;
nevralt↔strukturelt; absolutt↔relativ RFD; Hb-masse↔[Hb]) og «feil-vaksine»-kort (Q uendret
submaksimalt; HFmaks ikke opp; IIX→IIA ikke IIA→IIX; power faller mest). **Quiz-profil:** alt-eller-
intet-flervalg med nabobegrep-distraktorer (sentralt/perifert, absolutt/relativ, EDV/ESV, mTOR/AMPK,
IIX/IIA, hypertrofi/hyperplasi, Hb-masse/[Hb], arbeidsøkonomi/mekanisk effektivitet) + ett-vs-to-
riktig-lesetrening + mekanismekjede-«hvilket ledd/tidsaksering mangler». Tungt vektet fordi eksamen
er uten hjelpemidler og flervalg gir null ved delvis riktig.

---

## 4. Prøver

Fire prøver per fagdel (Del 1 + Del 2 = 8 prøver). Hver prøve speiler eksamensformatet i miniatyr:
en blanding av alt-eller-intet-flervalg (F-sjangre) og mekanismekjede-langsvar med tidsaksering
(L-sjangre, momentliste-fasit). Omfang 20–40 min. Alle oppgaver NYSKREVNE. Prøvekapittel-id
`nih-thp202-<del>-prove`, chapterNumber `<del>.P` (jf. BYGGEKONTRAKT). Del 0 og Del 3 har ingen egen
prøve (Del 3s to øvingseksamener + to sjangerdriller dekker helheten). Sensorkravet «mekanismekjede
med tidsaksering, ikke opplisting» gjelder alle langsvar i alle prøver.

**Prøve-kvote Del 1:** 4 prøver (id `nih-thp202-1-prove`): (1) *Ficks ligning og slagvolum* —
F-FAKTA normalverdier/enheter + L-MEK «hva øker SV, med tidsaksering». (2) *Sentrale vs. perifere
tilpasninger* — F-MEK sentralt/perifert + L-MEK a-vO₂-diff/kapillær (hvorfor kapillærtetthet betyr
noe). (3) *VO₂maks-mekanismen (toppoppgaven)* — full L-MEK med tidsaksering + L-FIG figurtolkning.
(4) *Submaksimal respons og prestasjonsmodell* — L-TALL absolutt/relativ (U1-vaksine) + F-DEF
arbeidsøkonomi.

**Prøve-kvote Del 2:** 4 prøver (id `nih-thp202-2-prove`): (1) *Hypertrofi og signalveier* — F-DEF
hypertrofi/atrofi/hyperplasi + L-MEK stimulus→signalvei→proteinsyntese med navngitte veier. (2)
*Vekstregulering (nære distraktorer)* — F-DIST satellittceller/myostatin/testosteron + L-MEK
satellittcellerolle. (3) *Nevralt, RFD og fibertyper* — L-RANG nevralt vs. hypertrofi (tidsakset) +
F-DIST fibertypeskifte (IIX→IIA)/relativ RFD. (4) *Aldring og metode* — L-MEK sarkopeni (power ned
mest) + L-DES metodebatteri (EWGSOP2/interpolert twitch, S9-vaksine).

---

## 5. Notat til forfatter-agenten (fase 4)

- **Mekanismekjede med tidsaksering er bokas signatur.** Hver langsvar-`example`/`exercise` skal
  levere en KJEDE (stimulus → mekanisme → effekt) med *når* hvert ledd inntrer — aldri en liste.
  Vis ett svakt liste-svar mot ett sterkt kjede-svar der det hjelper leseren (særlig i 0.2 og 3.1).
- **Ficks ligning som ryggrad i hele Del 1.** Alt utholdenhetsstoff struktureres ledd for ledd i
  VO₂maks = SV · HF · (CaO₂ − CvO₂). Hvert temakapittel i Del 1 peker tilbake til hvilke(t) ledd det
  forklarer.
- **Skill eksplisitt** sentralt/perifert (Del 1) og nevralt/strukturelt (Del 2) i hvert relevant
  svar — sensor kategoriserer.
- **Alt-eller-intet-flervalg:** options[0] = riktig i staging (runtime stokker); der oppgaven har
  TO riktige, marker det tydelig i oppgaveteksten («to av alternativene er riktige»). Nære
  distraktorer er poenget — bygg dem fra U/S-feilkodene.
- **Forkunnskaps-lenker, ikke gjentakelse:** lenk utholdenhet til THP100/THP204 og styrke til
  THP101/THP204 for basalfysiologi/anatomi/energiomsetning; forklar bare treningsresponsen selv.
  Lenk kun til kapitler som finnes (verifiser i fase 6).
- **`(verifiser)`-merking:** alle tallintervaller, r-verdier, prosenttall og tidsvinduer merket i
  Faktakontrakten over skal beholde `(verifiser)` til fagfellesjekk i fase 6.
- **Opphavsrett:** alle oppgavetekster, casenavn og tallverdier NYSKREVNE; Ficks ligning,
  normalverdier og signalveinavn er alminnelig fagstoff.

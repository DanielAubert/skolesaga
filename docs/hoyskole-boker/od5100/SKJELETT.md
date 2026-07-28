# Bokskjelett: OD5100 Odontologistudiet, 9. semester (UiO) — eksamensrettet lærebok

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

> **BILDEAVHENGIGHET-KONTRAKT (ufravikelig for OD5100 — produkteier):** Analysen
> (`EKSAMENSANALYSE.md` §0, §7) slår fast at eksamen er **svært bildeavhengig** i
> radiologi og oral patologi og **middels** i oral kirurgi og kjeveortopedi:
> store deler av eksamen bygger på tolkning av røntgen, histologisnitt og
> kliniske foto. Boka skal håndtere dette EKSPLISITT og ærlig:
> 1. **Ingen opphavsrettsbeskyttede bilder gjengis.** Der eksamen viser et bilde,
>    løses temaet med en **presis tekstlig beskrivelse** av de radiologiske/
>    histologiske/kliniske funnene (beliggenhet, form, avgrensning, indre
>    struktur, farge, morfologi) og med **nyskrevne kasuistikker** — aldri et
>    reprodusert eller lisensfritt-antatt eksamensbilde.
> 2. **Bildeavhengige oppgavesjangre** (radiologisk anatomi-navnsetting/
>    markørplassering, systematisk røntgenbeskrivelse `R:`, «se på histologien →
>    diagnose», klinisk-foto-kasus) merkes i hvert relevant kapittel med en egen
>    ærlig `warning`/`tip`-boks: **«Denne oppgaven vises normalt med et bilde på
>    eksamen. Boka gjengir ikke bildet, men trener tolknings-RESONNEMENTET
>    tekstlig — du får den ferdige funnbeskrivelsen og øver på å slutte fra funn
>    til diagnose. Den visuelle gjenkjenningen (å SE funnet i et ekte bilde) må
>    du trene på klinikk/atlas i tillegg.»**
> 3. **Boka høster det bildeuavhengige tungt** (analysen §7): patologiterminologi,
>    WHO-2022-klassifikasjon, faste differensialdiagnostiske lister med
>    begrunnelseslogikk (lokalisasjon/alder/farge/morfologi), strålefysikk/
>    strålevern som ren tekst, den systematiske `R:`-beskrivelsesmalen, journal-/
>    anamnesemaler, folketrygdrettigheter og kjeveortopediens begreps-/
>    mekanismeapparat — alt førsteklasses flashcard-/quiz-/begrepsbankstoff.

> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE eksamensarkivet —
> alt eksamensbelegg som trengs står i dette skjelettet, destillert fra
> `EKSAMENSANALYSE.md` (UiOs OD5100-arkiv 2021–2025: 17 filer over de FIRE skriftlige
> deleksamenene, med et usedvanlig rikt sett sensorveiledninger — fem for oral
> patologi, to for radiologi, én utfyllende for oral kirurgi — alle lest oppgave for
> oppgave; rene oppgavesett gjennomgått for format og bildeavhengighet). Alle
> oppgaver, kasus, funnbeskrivelser, tallverdier og formuleringer i boka skal være
> NYSKREVNE (se §6). Anatomiske og patologiske fagtermer (norsk/latin),
> diagnosenavn, WHO-klassifikasjoner og strålefysiske standardbegreper er ordinært
> fagstoff og ikke opphavsrettslig beskyttet.
>
> **Medisinsk/odontologisk presisjon er kritisk.** Normalverdier, tallfakta, doser
> og latinske navn forfatteren er usikker på merkes `(verifiser)` for fagfellesjekk
> i fase 6. INGEN oppdiktede tall, doser eller navn. Nivået er **9. semester
> integrert master** — klinisk anvendt radiologi, patologi, oral kirurgi/medisin og
> kjeveortopedi.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `od5100` |
| Tittel | **OD5100 Odontologistudiet, 9. semester (UiO) — eksamensrettet** |
| Level | `'Høyskole'` |
| Institusjon (navigasjon) | Universitetet i Oslo (UiO), Det odontologiske fakultet. Visningsnavn i `institusjoner.ts`: «OD5100 Odontologistudiet, 9. semester». |
| Arketype | **fakta/pugg-klinisk** — nærmeste forbilde er **OD2200** (UiO odontologi, samme «forklar mekanismen/beskriv presist»-sjanger + faktatung latin-/patologipugg + eksplisitt bildeavhengighet-håndtering). Hybrid: patologi-/anatomidelene låner fakta-/mekanismelogikken fra OD2200/MED1100; kjeveortopedi- og oral kirurgi-delene har et **klinisk-resonnement/kasus**-innslag (langsvar, prosedyre) som låner momentliste-strukturen fra drøftings-/kasusarketypen. Ingen ren DNA-mal passer; strukturen er skreddersydd og dokumentert i §2. |
| Antall kapitler | **36** (Del 0: 2 · Radiologi Del 1–2: 10 · Oral patologi Del 3–4: 10 · Oral kirurgi/medisin Del 5: 4 · Kjeveortopedi Del 6: 4 · Eksamenstrening Del 7: 6) |
| Estimert totaltid | **~2 140 min ≈ 35,7 timer** (per kapittel under) |
| Quiz totalt | **566** (krav ≥500) |
| Flashcards totalt | **722** (fag ekstremt fakta-/terminologitungt + fire selvstendige delfag → høy tetthet; krav ≥500) |

**Pitch (ett avsnitt):** OD5100 er 9. semester (26 studiepoeng, integrert master i
odontologi ved UiO) og avlegges av *alle* tannlegestudenter der — en liten, men
fornybar og motivert årskullmålgruppe. Det avgjørende strukturvalget: semesteret
avsluttes **ikke** med én samlet eksamen, men med **FIRE uavhengige skriftlige
deleksamener** (hver ~4 timer), én i hvert delfag — **radiologi, oral patologi,
oral kirurgi/oral medisin og kjeveortopedi**. Alle fire vurderes
**bestått/ikke bestått**, og man kan ikke kompensere en svak deleksamen med en
sterk. Boka bygges derfor som **fire nesten selvstendige delbøker**, hver med sin
egen svarlogikk, pluss et eksamenskart og en eksamenstreningsdel på toppen:

- **Radiologi (digital, Inspera, ~20 oppgaver, 100 p, beståttgrense 60):** fast
  tredeling — **(1) stråling/strålevern, (2) anatomi/diagnostikk, (3) teknikk/
  bildekvalitet** — og **tilstrekkelig poeng i HVER av de tre kategoriene kreves**
  for bestått. Svartyper: strukturerte kortsvar (strålefysikk), anatomi-navnsetting/
  markørplassering, systematisk **røntgenbeskrivelse (`R:`)** med tentativ diagnose,
  og **ett peileserie-flervalg med minuspoeng** (feil = −3, aldri under 0). **Svært
  høy bildeavhengighet.**
- **Oral patologi (7–9 hovedoppgaver, poeng per oppgave):** kjerneformatet er
  «se på bildet → still differensialdiagnoser → begrunn». Nesten hver oppgave kobler
  et røntgen-/histologi-/klinisk bilde til en diagnostisk vurdering; noen gir i
  stedet en **skriftlig histologibeskrivelse** å tolke (bildeuavhengig). **Svært høy
  bildeavhengighet — men de bildeuavhengige delene (WHO-inndeling, diff-diagnoselister
  med begrunnelse, definisjoner, histologibeskrivelse-tolkning) er bokas gullgruve.**
- **Oral kirurgi / oral medisin (langsvar/kasus, 100 p, alt vektes likt, beståttgrense
  60):** ofte ett **gjennomgående pasientforløp** (anamnese → funn → diagnose →
  behandling → folketrygdrettigheter), eller 3–5 frittstående langsvarsoppgaver.
  **Middels bildeavhengighet** — mye av poengene ligger i ren tekst (journalmal,
  anamnese, rettigheter, medikamenthåndtering, differensialdiagnostisk resonnement).
- **Kjeveortopedi (~10 oppgaver, poeng per oppgave, 100 p):** blanding av rene
  teoribegreper (definisjoner, mekanismer) og kasusvurdering fra intraoralt foto + OPG.
  **Middels–høy bildeavhengighet.** Sterk overlapp OD5100 ↔ OD5200 (10. semester):
  autotransplantasjon, hjørnetann-palpasjon, tvangsført kryssbitt, tannforflytting,
  agenesi.

Boka er bygd baklengs fra tre ting: (1) gjengangerne som drilles til de sitter (i
radiologi: de tre dosetypene, vekselvirkninger, strålevern/ALARA, `R:`-malen,
røntgenanatomi, bitewing, peiling, panorama-artefakter, diff-diagnose av radiolucente
kjevelesjoner; i oral patologi: WHO-2022 odontogene svulster, diff-diagnose radiolucent
kjevelesjon, reaktive gingivale utvekster med histologisk sammenligning, cyster,
OPMT/leukoplaki, slimhinnepigmentering, spyttkjertel, desmosom-relaterte blæresykdommer;
i oral kirurgi: komplett journalmal, malignitetsutredning, munntørrhet/candidose, oral
lichen planus, folketrygdrettigheter, medikamentvurdering; i kjeveortopedi:
autotransplantasjon, retinert hjørnetann, tannforflyttingens biologi, tvangsført
kryssbitt, agenesi-behandling, behandlingsnivåbegreper), (2) de fire ulike svarlogikkene,
og (3) de faste sensorfellene i §5.

**Kalibreringsregel (ufravikelig):** Fordi de fire delfagene er separate bestått/
ikke-bestått-eksamener, dekker boka **alle fire fullt ut** — prioriteringen styrer
*dybde og drillmengde*, ikke hva som er med. Bildeavhengighet-kontrakten øverst gjelder
i HVERT bildeavhengig kapittel.

---

## 2. Makrostruktur

Rekkefølge: **Del 0 (eksamenskart for de fire deleksamenene + bildekontrakten) →
Radiologi (Del 1–2) → Oral patologi (Del 3–4) → Oral kirurgi/medisin (Del 5) →
Kjeveortopedi (Del 6) → Eksamenstrening (Del 7).** Hvert delfag er en hoveddel-blokk
med temadeler under, ordnet etter frekvens/vekt (tyngst mest omfang), med prerequisites
som peker bakover innen samme delfag (delfagene er ellers uavhengige).

| Del | Delfag | Seksjonstittel | Kap. | Vekt/prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|---|
| 0 | meta | Eksamenskart: fire deleksamener og en bildekontrakt | 2 | perfekt (meta) | De fire formatene, svarlogikkene, den harde tredelingen i radiologi og bildeavhengighet-kontrakten må etableres FØR fagstoffet. |
| 1 | Radiologi | Strålefysikk, strålevern og bildedannelse | 5 | perfekt | Radiologi-kategori (1) «stråling/strålevern» — egen beståttterskel. Dosetyper, vekselvirkninger, ALARA/berettigelse, LNT — «høy»/«2/2»-score. |
| 2 | Radiologi | Røntgenanatomi, systematisk beskrivelse, teknikk og diagnostikk | 5 | perfekt | Radiologi-kategori (2) og (3). Latinsk røntgenanatomi (hver sitting), `R:`-malen (grunnmalen), bitewing/teknikk/panorama-artefakter, peiling, diff-diagnose av radiolucente kjevelesjoner (hver sitting). |
| 3 | Oral patologi | Odontogene svulster, cyster og radiolucente kjevelesjoner | 5 | perfekt | Oral patologis mest bilde- og repetisjonsdrevne kjerne. WHO-2022 (4/5), diff-diagnose radiolucent kjevelesjon (5/5), keratocyste-histologi, cyster — de sikreste gjengangerne. |
| 4 | Oral patologi | Slimhinne, reaktive utvekster, spyttkjertel og blæresykdommer | 5 | perfekt | OPMT/leukoplaki (3/5), reaktive gingivale utvekster (4/5), slimhinnepigmentering (3/5), spyttkjertel (3/5), desmosom/hemidesmosom-blæresykdommer (2/5), fibro-ossøse, virusdrevet epitelvekst. |
| 5 | Oral kirurgi/medisin | Klinisk pasienthåndtering og oral medisin | 4 | perfekt | Journalmal (2/2), malignitetsutredning, munntørrhet/candidose, oral lichen planus, folketrygd (2/2 +), medikamentvurdering, stråleprofylakse — pakket i det gjennomgående kasusforløpet. |
| 6 | Kjeveortopedi | Bittavvik, tannforflytting og kasusvurdering | 4 | perfekt | Autotransplantasjon (4/4, sikreste gjenganger), retinert hjørnetann (3/4), tannforflyttingens biologi (3/4), tvangsført kryssbitt (3/4), agenesi (3/4), bittavvik-begreper, behandlingsnivåer. OD5100↔OD5200-overlapp utnyttet. |
| 7 | meta | Eksamenstrening: sjangerdrill og fire øvingseksamener | 6 | perfekt (meta) | 2 sjanger-/feildrillkapitler (radiologi+patologi tekstlig bildetolkning; oral kirurgi+kjeveortopedi langsvar/kasus) + 4 komplette øvingseksamener, én per deleksamen i sitt eget format. |

Rasjonale: fordi de fire delfagene er separate deleksamener, dekkes **alle fire fullt
ut** — prioriteringen styrer *dybde og drillmengde*, ikke hva som er med. Radiologi og
oral patologi (bredest pensum, mest repetisjonsdrevet, hver sin harde beståttlogikk) får
10 kapitler hver; oral kirurgi/medisin og kjeveortopedi (smalere, mer kasusdrevet) får 4
kapitler hver med tett drill. OD2200 er primærforbilde for patologidelene.

### Seksjonstitler (`sectionNames` i metadata — vises som «Kapittel N: <tittel>» på bokforsiden)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart: fire deleksamener og en bildekontrakt |
| 1 | Strålefysikk, strålevern og bildedannelse (radiologi) |
| 2 | Røntgenanatomi, systematisk beskrivelse, teknikk og diagnostikk (radiologi) |
| 3 | Odontogene svulster, cyster og radiolucente kjevelesjoner (oral patologi) |
| 4 | Slimhinne, reaktive utvekster, spyttkjertel og blæresykdommer (oral patologi) |
| 5 | Klinisk pasienthåndtering og oral medisin (oral kirurgi/medisin) |
| 6 | Bittavvik, tannforflytting og kasusvurdering (kjeveortopedi) |
| 7 | Eksamenstrening: sjangerdrill og fire øvingseksamener |

### Sjangerkoder per delfag (fra analysen §3 — brukes i «Eksamensbelegg» under)

**Radiologi:** `R-KORT` strukturert kortsvar (strålefysikk/strålevern — definer, forklar
mekanisme, nevn tiltak; uthevede nøkkelord er poenggivende) · `R-ANAT` anatomi-navnsetting/
markørplassering (navngi/«klikk» struktur i tannbilde/panorama; 1 p per struktur) ·
`R-BESK` systematisk røntgenbeskrivelse (`R:`-malen: beliggenhet → form → størrelse/
utbredelse → ytre avgrensning → indre struktur → påvirkning nabostrukturer → tentativ
diagnose med begrunnelse) · `R-MCQ` peileserie-flervalg **med minuspoeng** (riktig +3, feil
−3, totalt aldri under 0 — helgardering straffes) · `R-TEK` teknikk-/bildekvalitetsvurdering
(identifiser innstillingsfeil/artefakt + hvordan omtak retter det) · `R-HENV`
henvisningsvurdering (når/hvorfor CBCT; berettigelse).

**Oral patologi:** `P-DIAG` bilde-til-diagnose (funnbeskrivelse → still ALLE aktuelle
differensialdiagnoser → begrunn via lokalisasjon/alder/farge/morfologi; uvedkommende diff
trekker) · `P-HIST` histologibeskrivelse-tolkning (tekstlig snittbeskrivelse → navngi
diagnose — **bildeuavhengig**) · `P-DEF` definisjons-/inndelingskortsvar (akantose,
granulasjonsvev, sarkom vs. karsinom, WHO-inndeling) · `P-SAML` sammenlign-oppgave (still
histologien til flere reaktive/beslektede forandringer opp mot hverandre).

**Oral kirurgi/medisin:** `K-KASUS` kasusforløp-langsvar (følg én pasient anamnese → funn →
diagnose → behandling → rettigheter; **sammenhengende tekst kreves**) · `K-STRUK`
strukturert oppramsing MED forklarende tekst (komplett journalmal; alarmsymptomer; OPMT;
bivirkninger) · `K-MCQ` flervalg (ett riktig, **ingen** minuspoeng — kun i noen sett).

**Kjeveortopedi:** `O-KASUS` kasusvurdering fra foto/OPG (kartlegg behandlingsbehov, angi
tiltak, begrunn) · `O-BEGR` begreps-/mekanisme-langsvar (definer bittavvik, forklar
tannforflytting, interseptiv behandling) · `O-DEL` strukturert deloppgave a)–e)
(autotransplantasjon, hjørnetannhåndtering).

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

**Radiologi:** `E1` forveksle absorbert/ekvivalent/effektiv dose (Gy vs. Sv; hva µSv-tallet
er) · `E2` helgardere på peileserie-flervalget og pådra seg minuspoeng · `E3` ufullstendig
`R:`-beskrivelse (hoppe over ett fast moment — indre struktur, påvirkning nabostrukturer) ·
`E4` overse innstillingsfeil vs. reell forandring i panorama (tolke ghost/feil skarpt sjikt
som patologi) · `E5` glemme at retinerte visdomstenner må oppdages.

**Oral patologi:** `E6` ufullstendig diff-diagnoseliste ELLER ta med diagnoser som ikke
passer (begge trekker) · `E7` diagnose uten begrunnelse (halv/ingen uttelling) · `E8`
forveksle desmosom og hemidesmosom → feil pemfigus/slimhinnepemfigoid · `E9` blande
hyperplasi og benign tumor (reaktiv/kjent årsak vs. genetisk/vokser videre) · `E10` ikke
skille ekte cyste fra pseudocyste/retensjonsfenomen (mucocele av retensjonstype er ikke
ekte cyste) · `E11` feilklassifisere odontogene svulster (blande epitelial/mesenkymal/
blandet) · `E12` overse at plateepitelkarsinom krever infiltrerende vekst i beskrivelsen.

**Oral kirurgi/medisin:** `E13` løse punktlister uten forklaring (ikke poenggivende) · `E14`
ufullstendig journalmal (glemme spesiell anamnese, status localis, ekstraoral undersøkelse)
· `E15` overse medikament-/sykdomsinteraksjoner (metotreksat/TNF-hemmer, penicillinallergi,
diabetes) · `E16` ikke kjenne folketrygdens innslagspunkter (kreft/infeksjonsforebygging) ·
`E17` blande akutte og kroniske strålebivirkninger / glemme osteoradionekrose.

**Kjeveortopedi:** `E18` oppgi/utelate erstatningsresorpsjon/ankylose feil som alvorligste
autotransplantasjonskomplikasjon · `E19` blande skeletalt vs. dentoalveolært avvik og
tvangsføring · `E20` feil DS-stadium/biologisk alder for undersøkelse og henvisning · `E21`
løsrevne punkter i stedet for sammenhengende faglig resonnement.

### Sensor-kredittregler (fra analysen §4 — etableres i Del 0.2, refereres i hvert kapittel)

1. **Svar kun på det som spørres.** Oral patologi og oral kirurgi sier eksplisitt at
   tilleggsinformasjon utenom det etterspurte ikke honoreres, og at irrelevant utenomsnakk
   kan trekke ved ellers svak besvarelse.
2. **Sammenhengende tekst, ikke løse punkter** (oral kirurgi + kjeveortopedi). Punktlister
   uten forklarende tekst godtas ikke — sensor må se forståelse, ikke gjetning.
3. **Begrunnelse er poenggivende, ikke bare svaret.** Ved diagnostikk kreves kobling til
   lokalisasjon, alder, kjønn, farge/morfologi og radiologiske karakteristika. «Kun diagnose
   uten begrunnelse» gir halv/null uttelling.
4. **Fullstendig differensialdiagnostisk sett kreves** (oral patologi). Alle aktuelle
   diff-diagnoser med for full pott; å ta med diagnoser som ikke passer trekker.
5. **Delpoeng / trekk-med-poeng.** Feil hoveddiagnose kan gi poeng dersom begrunnelsen er
   faglig god (f.eks. mucoepidermoid karsinom som feilsvar på nekrotiserende sialometaplasi
   honoreres delvis hvis resonnementet holder).
6. **Radiologi har harde delkrav:** 60/100 for bestått, *og* tilstrekkelig poeng i HVER av de
   tre kategoriene (strålevern / anatomi-diagnostikk / teknikk-bildekvalitet). Man kan ikke
   ignorere strålefysikken.
7. **Minuspoeng finnes i to sammenhenger:** radiologiens peileserie-flervalg (feil = −3,
   aldri under 0) — der lønner det seg IKKE å helgardere. De rene flervalgene i oral kirurgi
   (2021) hadde derimot INGEN minuspoeng.
8. **Uthevede ord i veiledningen = poenggivende momenter** (radiologi-veiledningene markerer
   eksplisitt hvilke nøkkelord som gir poeng).

### Arketypetilpasning (dokumenterte hybridvalg og avvik fra forbildet OD2200)

1. **Fire parallelle delbøker, ikke to (hovedavvik).** Der OD2200 har to blokker, har OD5100
   FIRE separate deleksamener med hvert sitt fagområde og svarlogikk, vurdert hver for seg.
   Hoveddelene er organisert PER DELFAG; hvert delfag har egen drilllogikk og egen
   øvingseksamen i sitt eget format (Del 7).
2. **Bildeavhengighet-kontrakten (over) er OD5100s signaturavvik.** OD2200 hadde LAV
   bildeavhengighet (fritekst-/kortsvarseksamen); OD5100 har SVÆRT HØY i radiologi og oral
   patologi. Hvert bildeavhengig kapittel bærer den ærlige boksen fra bildekontrakten og løser
   temaet med presise tekstlige funnbeskrivelser + nyskrevne kasuistikker, aldri gjengitte
   bilder.
3. **«Symbol- og formelliste» → «Nøkkelfakta- og terminologiliste» (per kapittel).**
   README-kravet omtolkes (faget er nesten formelfritt, unntatt strålefysikkens få formler):
   hvert kapittel får en `collapsible` **«Nøkkelfakta- og terminologiliste»** rett etter
   Forkunnskaper. Radiologi = dosetyper/enheter + latinsk røntgenanatomi + `R:`-malen +
   strålevernstiltak. Patologi = WHO-inndeling + diff-diagnoselister + definisjoner +
   histologiske nøkkeltrekk. Oral kirurgi = journalmal + normalverdier + folketrygd-punkter.
   Kjeveortopedi = begrepsapparat + autotransplantasjonskriterier + tannforflyttingsbiologi.
   Strålefysikkens få formler (dose, wᴿ, wₜ) skrives i LaTeX (`$...$`) med egen symbolliste i
   de relevante radiologikapitlene.
4. **Todelt drill.** Quiz = faktapresisjon og begrepsgjenkjenning (nabobegrep-distraktorer:
   absorbert/ekvivalent/effektiv dose; arteriell/venøs; desmosom/hemidesmosom; hyperplasi/
   tumor; skeletalt/dentoalveolært); flashcards = fakta/latin/WHO-inndeling/diff-lister/
   normalverdier utenat (faget er ekstremt faktatungt → HØY flashcard-tetthet); `example`/
   `exercise` = funnbeskrivelse→diagnose-momentlister og kasus-momentlister.
5. **Eksamensvinkel PER DELFAG.** Fordi et tema kan opptre i flere delfag (radiolucent
   kjevelesjon både i radiologi som `R:`-beskrivelse og i oral patologi som diff-diagnose),
   sier hver `tip` **Eksamensvinkel** eksplisitt hvilket delfag kapitlet trener, med hvilken
   form/frekvens og hva sensor ser etter i akkurat det delfaget — og om temaet er bildeavhengig.
6. **Kjeveortopedi utnytter OD5100↔OD5200-overlappen.** Analysen (§0, §8) viser at
   kjeveortopedioppgavene er nesten identiske mellom 9. og 10. semester (to av arkivets
   kjeveortopedifiler er faktisk OD5200-sett). Kjeveortopedidelen markeres eksplisitt som en
   felles modul for begge semestrene, og krysslenkes til `od2200` for patologifundamentet der
   det finnes (`(verifiser lenke)`).
7. **Ingen oppdiktede verdier.** Doser (tannrøntgen ≈ 1,5 µSv effektiv dose), normalverdier
   (salivaflow-grenser), eGFR/INR-nivåer, WHO-2022-detaljer og latinske navn forankres i
   standard pensum; usikre detaljer merkes `(verifiser)`. Alle kasus og funnbeskrivelser har
   NYSKREVNE detaljer (opphavsrett, §6).

### Kapittel-DNA (temakapittel — obligatorisk blokk-rekkefølge)

1. `tip` **Eksamensvinkel** — hvilket delfag, form (sjangerkoder), frekvens/gjenganger-score,
   retteform, hva sensor ser etter, og **om temaet er bildeavhengig** (da med bildekontrakt-
   boksen). Fylles fra Eksamensbelegg under — forfatteren finner IKKE på frekvenstall.
2. `text` **Forkunnskaper** — kapitler i boka det bygger på (samme delfag) + evt. kryssbok-
   lenker (README-leserkrav; lenk kun til kapitler som finnes; `od2200`-lenker `(verifiser
   lenke)`), etterfulgt av `collapsible` **Nøkkelfakta- og terminologiliste** (per kapittel).
3. `text` **Oversikt** — kort (maks 2–3 avsnitt): hva temaet er og hvorfor/hvordan det testes.
4. `definition` **Kjernefakta** — begreper, klassifikasjon, normalverdier, latinske navn,
   histologiske/radiologiske nøkkeltrekk i EMNETS terminologi. **Toppnivå med `title` — dette
   er flashcard-kilden.**
5. `text` **Diff-diagnoselogikk / funnbeskrivelse / mekanismekjede** — for patologi: den faste
   diff-diagnoselisten med begrunnelseslogikk (lokalisasjon/alder/farge/morfologi); for
   radiologi: `R:`-malen anvendt på temaet; for oral kirurgi: journal-/anamnesemal eller
   patofysiologisk kjede; for kjeveortopedi: mekanisme (tannforflytting) / behandlingslogikk.
   Der eksamen viser bilde: presis tekstlig funnbeskrivelse (aldri gjengitt bilde).
6. `warning` **Typiske feil** — feilkodene (E1–E21) som gjelder temaet.
7. `example` × 2–4 — første enkelt, siste på EKSAMENSNIVÅ modellert på reell sjanger.
   Bildeavhengige temaer: eksemplet gir ferdig funnbeskrivelse → modellert diagnostisk
   resonnement (full-pott-momentliste, delpoeng synlige). Kasus-sjangre: full pasientforløp-
   momentliste.
8. `exercise` × 6–12 — stigende, i kapitlets delfag-sjangre, alle med `solution` + `hints`.
   Hver oppgave merket med sjangerkode + delfag. Bildeavhengige oppgaver formuleres som «gitt
   denne funnbeskrivelsen …» med bildekontrakt-boksen i fasit-oppfølgingen.
9. `collapsible` **Repetisjon** — 4–6 korte kontrollpunkter fra kapitlet og forutgående.

Drill- og øvingseksamenskapitlene (Del 7) har egne oppsett — se §3/§4.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = delfag + form/frekvens (gjenganger-score fra analysen
> §2) + sjangerkoder + prioritetsklasse + bildeavhengighet. **Faktakontrakt** = definisjoner/
> klassifikasjon/normalverdier/latin/histologi som SKAL med (flashcard-kilden). **Diff-/
> funnlogikk** = det diagnostiske resonnementet eller den systematiske beskrivelsen kapitlet
> skal levere. **Kvote** = quiz/flashcards. `od2200`-kryssbok-lenker merkes `(verifiser lenke)`.

### Del 0 — Eksamenskart: fire deleksamener og en bildekontrakt *(prioritet: PERFEKT (meta))*

#### Kapittel 0.1: Fire deleksamener — fire svarlogikker
**id:** `od5100-0-1` · **number:** 0.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Hvorfor 9. semester avsluttes med fire uavhengige bestått/ikke-bestått-
  deleksamener (radiologi, oral patologi, oral kirurgi/medisin, kjeveortopedi) med helt ulikt
  fagområde og svarlogikk — hva hver tester, hvordan de er bygd opp, den harde tredelingen i
  radiologi, og hvordan boka brukes som fire parallelle delbøker.
- **Eksamensbelegg:** Metakapittel (hele arkivet 2021–2025). Skal formidle: (a) **fire
  deleksamener** med forskjellig fagområde og svarlogikk, alle bestått/ikke bestått, ingen
  kompensasjon; (b) **formene** — radiologi: digital (Inspera), ~20 oppgaver, 100 p, **beståttgrense
  60 OG poeng i hver av tre kategorier**; oral patologi: 7–9 hovedoppgaver, poeng per oppgave,
  skjønnsmessig; oral kirurgi: langsvar/kasus, 100 p, alt vektes likt, beståttgrense 60 (opplyst
  2021); kjeveortopedi: ~10 oppgaver, poeng per oppgave, skjønnsmessig; (c) svar godtas på
  norsk/svensk/dansk; (d) **den harde tredelingen i radiologi** (stråling/strålevern · anatomi/
  diagnostikk · teknikk/bildekvalitet). Prioritet: perfekt (meta).
- **Faktakontrakt:** delfag-oversiktstabellen (fagkjerne/form/svartype/beståttgrense/
  bildeavhengighet fra analysen §0); kart til Del 1–6 (hvilke temaer ligger hvor);
  sjangerkodene per delfag som studentens sjekkliste.
- **Diff-/funnlogikk:** ingen (kartkapittel).
- **Del 0-pakken (README «Leserkrav» + DNA):** (a) **«Slik leser du denne boka»-boks** (`text`/
  `tip`): forklarer bestått/ikke-bestått-skalaen (og at «bestått-på-marginen» er et reelt mål,
  ikke en fiasko), en kompakt liste over sjangerkodene (R-KORT, R-ANAT … O-DEL — skrevet fullt
  ut) og feilregisteret (E1–E21). Karaktersjargong som «A-kandidat» UNNGÅS (eksamen er bestått/
  ikke bestått) eller rammes eksplisitt inn som bilde. (b) **«Lite tid?»-boks** (`tip`):
  hurtigrute for 3–5 dager per deleksamen (kapittelrekkefølge + timeanslag fra summerte
  `estimatedMinutes`), med eksplisitt notis om at tidsanslagene er LESEtid (skriv-øving ×1,5).
  (c) **Kildenote for frekvens-/sensor-empirien:** «Frekvenstallene bygger på UiOs OD5100-arkiv
  2021–2025 (17 filer over de fire deleksamenene, med fem sensorveiledninger for oral patologi,
  to for radiologi, én utfyllende for oral kirurgi). Nye sett kan endre bildet.» — hentet fra
  EKSAMENSANALYSE.md §8, ALDRI oppdiktet. (d) **Prosedyre-/sjangerkort på ÉN side** (sjanger →
  én linjes oppskrift → tidsbudsjett → vanligste feil). (e) **Deltidsrute:** 10–12-ukers plan
  (~8 t/uke) med de fire øvingseksamenene fordelt på flere økter. (f) **«Lese mye, skrive lite»-
  boks:** les oppgaven → formuler svaret mentalt → les fasiten som sensor + skriv minst én
  øvingseksamen for hånd på tid.
- **Modelloppgaver:** «Slik ser en oppgave ut i hvert delfag» — ett nyskrevet minieksempel per
  deleksamen (en R-BESK + R-MCQ; en P-DIAG; en K-KASUS-deloppgave; en O-DEL) med hvordan poeng
  høstes.
- **Typiske feil:** tro at man kan kompensere en svak deleksamen; overse radiologiens
  tredelingskrav; glemme at oral patologi/kirurgi krever begrunnelse og fullstendige diff-lister;
  tro at boka gjengir eksamensbildene (les bildekontrakten i 0.2).
- **Kvote:** 10 quiz / 8 flashcards.

#### Kapittel 0.2: Svarhåndverket, sensorkravene og bildekontrakten
**id:** `od5100-0-2` · **number:** 0.2 · **estimatedMinutes:** 50 · **prerequisites:** `od5100-0-1`

- **Kapitteltype:** eksamensteknikk + bildekontrakt (meta).
- **Description:** Hvordan man skårer i hver av de fire formene — systematisk `R:`-beskrivelse og
  strålevern (radiologi), fullstendig begrunnet diff-diagnose (oral patologi), sammenhengende
  begrunnet langsvar/kasus (oral kirurgi/kjeveortopedi) — de åtte sensor-kredittreglene, og
  **bildekontrakten**: hvordan boka trener bildetolknings-resonnementet tekstlig uten å gjengi
  opphavsrettsbeskyttede bilder.
- **Eksamensbelegg:** Destillat av sensorkravene (analysen §4), stabile 2021→. Prioritet: perfekt
  (meta). Skal operasjonalisere de åtte kredittreglene i §2, med **den systematiske `R:`-malen**
  og **diff-diagnose-begrunnelseslogikken** som egne uthevede strateginoter, pluss
  **minuspoeng-regelen** (radiologiens peileserie: helgardering straffes; oral kirurgis flervalg:
  ingen minuspoeng).
- **Faktakontrakt:** de åtte kredittreglene; `R:`-malens seks faste momenter; diff-diagnose-
  begrunnelsesaksene (lokalisasjon/alder/kjønn/farge/morfologi/radiologi); «svar kun på det som
  spørres»-regelen; «sammenhengende tekst, ikke løse punkter»-regelen; minuspoeng-logikken.
- **Bildekontrakten (eget uthevet ledd — obligatorisk):** her etableres boksen som gjentas i
  hvert bildeavhengig kapittel (se bildekontrakten øverst): boka gjengir ikke bilder, men gir
  ferdige funnbeskrivelser og trener resonnementet fra funn til diagnose; den visuelle
  gjenkjenningen trenes på klinikk/atlas i tillegg. Vis konkret hva en tekstlig funnbeskrivelse
  inneholder (radiologi: beliggenhet/form/avgrensning/indre struktur; histologi: epiteltype/
  cellemorfologi/vekstmønster; klinisk: farge/overflate/konsistens/lokalisasjon).
- **Modelloppgaver:** samme diagnostiske spørsmål besvart på to nivåer (diagnose alene vs.
  diagnose + fullstendig begrunnet diff-liste) med margnotat om hvor poengene faller; en
  `R:`-beskrivelse vist «komplett» vs. «mangler indre struktur/nabopåvirkning» (E3-vaksine);
  en peileserie-flervalgssituasjon vist med og uten helgardering (E2-vaksine).
- **Typiske feil:** `E7` (diagnose uten begrunnelse), `E6` (ufullstendig diff-liste), `E3`
  (ufullstendig `R:`-mal), `E2` (helgardering), `E13` (løse punkter).
- **Kvote:** 12 quiz / 10 flashcards.

**Prøve-kvote Del 0:** ingen egen prøve (dekkes av øvingseksamenene i Del 7).

### Del 1 — Strålefysikk, strålevern og bildedannelse (radiologi) *(prioritet: PERFEKT — radiologikategori 1, egen beståttterskel)*

#### Kapittel 1.1: Stråledoser — absorbert, ekvivalent og effektiv dose
**id:** `od5100-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** `od5100-0-2`

- **Kapitteltype:** tema (radiologi, kategori 1).
- **Description:** De tre dosetypene med enheter og hva hver sier — absorbert dose (Gy),
  ekvivalent dose (Sv, × wᴿ), effektiv dose (Sv, sum organdoser × wₜ) — og tannrøntgenens
  størrelsesorden. En «høy»-gjenganger og en klassisk forvekslingsfelle.
- **Eksamensbelegg:** Radiologi, kategori 1 (stråling). **De tre dosetypene høy score.** Form:
  R-KORT. Prioritet: perfekt. Bildeuavhengig (ren strålefysikk).
- **Faktakontrakt:** **absorbert dose** $D$ (Gy = J/kg, energi per masse); **ekvivalent dose**
  $H_T$ (Sv, $= D \times w_R$, strålingsvektfaktor); **effektiv dose** $E$ (Sv, $= \sum H_T
  \times w_T$, vevsvektfaktor — sum over organer); Gy vs. Sv (fysisk vs. biologisk vektet);
  tannrøntgen ≈ **1,5 µSv effektiv dose** `(verifiser)`; DSA-µSv-tall = effektiv dose. Symbol- og
  formelliste (LaTeX): $D$, $H_T$, $E$, $w_R$, $w_T$.
- **Diff-/funnlogikk:** ikke aktuelt; men R-KORT-malen: definer størrelsen → enhet → hva den sier
  → hvorfor den brukes.
- **Typiske feil:** `E1` (forveksle Gy/Sv, absorbert/ekvivalent/effektiv, hva µSv-tallet er).
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 1.2: Vekselvirkning stråling–materie
**id:** `od5100-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `od5100-1-1`

- **Kapitteltype:** tema (radiologi, kategori 1).
- **Description:** Absorpsjon, transmisjon og spredning — de tre måtene røntgenstråler
  vekselvirker med vev på — og hver prosess' rolle for bildedannelse, bildekvalitet og dose til
  pasient/personell.
- **Eksamensbelegg:** Radiologi, kategori 1. **Vekselvirkning stråling–materie 2/2** (2023 og
  2024). Form: R-KORT. Prioritet: perfekt. Bildeuavhengig.
- **Faktakontrakt:** **absorpsjon** (fotoelektrisk effekt — hovedbidrag til kontrast og
  pasientdose); **transmisjon** (uhindret gjennomgang → lysere bilde, lav dose);
  **spredning** (Compton — uskarphet/støy, dose til personell/omgivelser); sammenheng
  fotonenergi ↔ prosessdominans; hvordan de tre bestemmer kontrast, sværting og dose.
- **Diff-/funnlogikk:** R-KORT: koble hver prosess til bildekvalitet OG dose (uthevede nøkkelord
  poenggivende).
- **Typiske feil:** blande de tre prosessene; glemme dose-/personellkoblingen for spredning.
- **Kvote:** 16 quiz / 20 flashcards.

#### Kapittel 1.3: Strålevern — berettigelse, optimalisering og dosereduksjon
**id:** `od5100-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `od5100-1-1`

- **Kapitteltype:** tema (radiologi, kategori 1, høyest prioritet i Del 1).
- **Description:** De to strålevernsprinsippene (berettigelse, optimalisering/ALARA-ALADA) og de
  konkrete dosereduserende tiltakene — det aller mest sentrale kortsvarstemaet i kategori 1.
- **Eksamensbelegg:** Radiologi, kategori 1. **Strålevern/berettigelse høy score** (fast
  kortsvar). Form: R-KORT, R-HENV. Prioritet: perfekt. Bildeuavhengig.
- **Faktakontrakt:** **berettigelse** (nytte > ulempe, journalført indikasjon); **optimalisering**
  (ALARA/ALADA — as low as reasonably/diagnostically achievable); dosereduserende tiltak:
  **firkanttubus/rektangulær kollimasjon**, **parallellteknikk med holder**, **lang tubus (stor
  FFD)**, **thyreoideakrage**, **digital sensor** (lavere dose enn film), tilpasset
  eksponeringstid; **henvisningsberettigelse** (CBCT kun ved klar indikasjon).
- **Diff-/funnlogikk:** R-KORT: «nevn N dosereduserende tiltak og forklar hvert» (antall momenter
  styrer poeng); R-HENV: berettige CBCT-henvisning.
- **Typiske feil:** ramse tiltak uten forklaring; blande berettigelse (om undersøkelsen skal
  gjøres) og optimalisering (hvordan minimere dose når den gjøres).
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 1.4: LNT-modellen og strålingens biologiske effekter
**id:** `od5100-1-4` · **number:** 1.4 · **estimatedMinutes:** 45 · **prerequisites:** `od5100-1-1`

- **Kapitteltype:** tema (radiologi, kategori 1).
- **Description:** Den lineære ikke-terskel-modellen (LNT), stokastiske vs. deterministiske
  effekter, og hvorfor lave doser antas å ha kreftrisiko uten nedre terskel.
- **Eksamensbelegg:** Radiologi, kategori 1. **LNT-modellen observert.** Form: R-KORT. Prioritet:
  perfekt (kort). Bildeuavhengig.
- **Faktakontrakt:** **LNT** (lineær sammenheng dose–kreftrisiko, **ingen terskel**);
  **stokastiske effekter** (kreft/arvelige — sannsynlighet øker med dose, alvorlighet ikke) vs.
  **deterministiske effekter** (terskel, alvorlighet øker med dose — ikke aktuelt ved
  tannrøntgendoser); bakgrunnsrisiko for kreft ofte anslått ~20 % `(verifiser)`.
- **Diff-/funnlogikk:** R-KORT: definer LNT → stokastisk/deterministisk-skillet → konsekvens for
  strålevern (rettferdiggjør ALARA).
- **Typiske feil:** blande stokastisk/deterministisk; anta terskel for stokastiske effekter.
- **Kvote:** 12 quiz / 16 flashcards.

#### Kapittel 1.5: Del 1-prøvebank — strålefysikk og strålevern (drill)
**id:** `od5100-1-5` · **number:** 1.5 · **estimatedMinutes:** 40 · **prerequisites:** `od5100-1-4`

- **Kapitteltype:** sjangerdrill (radiologi, kategori 1).
- **Description:** Driller kortsvarssjangeren for hele Del 1 — dosetyper, vekselvirkninger,
  strålevern/ALARA, dosereduserende tiltak og LNT — kategorien med egen beståttterskel i
  radiologieksamen.
- **Eksamensbelegg:** Radiologi, kategori 1 (høy/2-2-score). Form: R-KORT, R-HENV. Prioritet:
  perfekt (meta for Del 1). Bildeuavhengig.
- **Innhold:** `text` **Kortsvarsmetoden** (definer → enhet/mekanisme → hva den sier → tiltak;
  uthevede nøkkelord = poeng; riktig antall momenter); `example` full-pott-momentlister for 3–4
  tunge kortsvar (de tre dosetypene, vekselvirkningene, ALARA-tiltakene); `exercise` × 8–10
  (R-KORT/R-HENV — skriv kortsvaret selv, riktig antall momenter). **Distraktor-/mønster-krav:**
  flervalg med stokket fasit; riktig/galt-lister varierer fasiten.
- **Typiske feil:** E1 speiles i fasitkommentarene; helgardering (E2) nevnes som forvarsel mot
  Del 2s peileserie.
- **Kvote:** 14 quiz / 12 flashcards.

**Prøve-kvote Del 1:** 4 prøver (1.A dosetyper + enheter · 1.B vekselvirkninger + bildedannelse ·
1.C strålevern/ALARA + dosereduserende tiltak · 1.D samlet kategori-1-prøve på eksamensnivå, med
minst ett R-HENV). Hver prøve 25–40 min, alle oppgaver nyskrevne, flervalg med stokket fasit.

### Del 2 — Røntgenanatomi, systematisk beskrivelse, teknikk og diagnostikk (radiologi) *(prioritet: PERFEKT — radiologikategori 2 og 3)*

#### Kapittel 2.1: Latinsk røntgenanatomi i tannbilder og panorama
**id:** `od5100-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `od5100-1-2`

- **Kapitteltype:** tema (radiologi, kategori 2). **Bildeavhengig — bildekontrakt-boks.**
- **Description:** De faste anatomiske strukturene i intraorale bilder og panorama (latinske
  navn, beliggenhet, radiologisk utseende) — hver sitting har en egen anatomi-navnsettingsoppgave
  (10–15 p), der studenten navngir eller markerer strukturen i bildet.
- **Eksamensbelegg:** Radiologi, kategori 2. **Røntgenanatomi hver sitting** (fast anatomioppgave,
  1 p per struktur). Form: R-ANAT. Prioritet: perfekt. **Svært bildeavhengig** (bildekontrakt-boks:
  boka gir tekstlig beliggenhets-/utseendebeskrivelse per struktur; den visuelle gjenkjenningen
  trenes i atlas/klinikk).
- **Faktakontrakt (latin↔norsk, beliggenhet, radiologisk utseende):** foramen mentale, foramen
  linguale, linea obliqua, linea mylohyoidea, fovea submandibularis, canalis mandibularis, tuber
  maxillae, processus zygomaticus, processus coronoideus, concha nasalis inferior, sutura
  intermaxillaris, hamulus, sinus maxillaris, os hyoideum, processus styloideus. For hver: hvor
  den ligger, om den er radiolucent/radiopak, og typisk projeksjon den ses i.
- **Diff-/funnlogikk:** R-ANAT: gitt en tekstlig beliggenhetsbeskrivelse → navngi strukturen
  (latinsk, korrekt bøyning); og omvendt (gitt navn → beskriv beliggenhet/utseende). Skille
  normal anatomi fra patologi (forvarsel mot E4).
- **Typiske feil:** `E15`-analog latinsk upresisjon (bøyning, sinistra/dextra); blande foramen
  mentale/linguale; tolke normal anatomi som patologi.
- **Kvote:** 16 quiz / 26 flashcards.

#### Kapittel 2.2: Den systematiske røntgenbeskrivelsen (R:-malen)
**id:** `od5100-2-2` · **number:** 2.2 · **estimatedMinutes:** 60 · **prerequisites:** `od5100-2-1`

- **Kapitteltype:** tema (radiologi, kategori 2, grunnmalen). **Bildeavhengig — bildekontrakt-boks.**
- **Description:** Den obligatoriske faste malen for å beskrive en radiologisk lesjon og lande på
  en tentativ diagnose (`R:`) — selve grunnmalen i hver diagnostikkoppgave, med de seks faste
  momentene som må være med for full pott.
- **Eksamensbelegg:** Radiologi, kategori 2. **Systematisk røntgenbeskrivelse hver
  diagnostikkoppgave** (grunnmalen). Form: R-BESK. Prioritet: perfekt. **Svært bildeavhengig**
  (bildekontrakt-boks; boka gir ferdig funnbeskrivelse og trener slutningen funn → diagnose).
- **Faktakontrakt (R:-malen — seks faste momenter):** (1) **beliggenhet** (regio/tannrelasjon);
  (2) **form** (rund/oval/uregelmessig/multilokulær); (3) **størrelse/utbredelse**; (4) **ytre
  avgrensning** (kortikal/velavgrenset/diffus); (5) **indre struktur** (radiolucent/radiopak/
  blandet/homogen); (6) **påvirkning av nabostrukturer** (rotresorpsjon, fortrengning av kanal/
  sinus, tannforflytting) → **tentativ diagnose (`R:`) med begrunnelse**.
- **Diff-/funnlogikk:** R-BESK: anvend malen trinn for trinn på en gitt funnbeskrivelse; alle seks
  momenter kreves (E3); avslutt alltid med begrunnet tentativ diagnose.
- **Typiske feil:** `E3` (hoppe over indre struktur eller nabopåvirkning); diagnose uten å ha gått
  gjennom malen; diagnose uten begrunnelse.
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 2.3: Radiolucente kjevelesjoner — radiologisk differensialdiagnostikk
**id:** `od5100-2-3` · **number:** 2.3 · **estimatedMinutes:** 65 · **prerequisites:** `od5100-2-2`

- **Kapitteltype:** tema (radiologi, kategori 2). **Bildeavhengig — bildekontrakt-boks.**
- **Description:** De radiolucente kjevelesjonene slik de ses radiologisk, og hvordan `R:`-malen
  + beliggenhet/alder skiller dem — hver sitting har flere slike diagnostikk-kasus.
- **Eksamensbelegg:** Radiologi, kategori 2. **Diagnostikk-kasus (radiolucente kjevelesjoner)
  hver sitting.** Form: R-BESK, R-HENV. Prioritet: perfekt. **Svært bildeavhengig** (bildekontrakt-
  boks). Kryssref oral patologi Del 3 (samme lesjoner, histologisk vinkel).
- **Faktakontrakt (radiologisk profil per lesjon):** **radikulærcyste** (apikalt til ikke-vital
  tann, velavgrenset), **follikulærcyste** (rundt krone på retinert tann), **odontogen
  keratocyste** (langstrakt, vokser i benmargsrom, lite ekspansiv), **solitær/traumatisk bencyste**
  (festonert overgrense mellom røtter), **paradentalcyste**, **cemento-ossøs dysplasi**
  (periapikal/fokal/florid — blandet radiolucent-radiopak over tid), **kjerubisme** (bilateral
  multilokulær), **retensjonscyste i sinus**, **idiopatisk osteosklerose** (radiopak — kontrast).
  Beliggenhet + alder + tannrelasjon som diskriminerende akser.
- **Diff-/funnlogikk:** R-BESK anvendt → tentativ diagnose + minst én diff-diagnose med
  begrunnelse; når henvise (R-HENV: biopsi/CBCT).
- **Typiske feil:** `E3` (ufullstendig beskrivelse); diagnose uten diff; blande radikulær-
  (vital-relasjon) og follikulærcyste (kronerelasjon).
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 2.4: Teknikk, bildekvalitet, panorama-artefakter og peiling
**id:** `od5100-2-4` · **number:** 2.4 · **estimatedMinutes:** 60 · **prerequisites:** `od5100-2-1`

- **Kapitteltype:** tema (radiologi, kategori 3). **Bildeavhengig — bildekontrakt-boks.**
- **Description:** Bitewing-teknikk og -kriterier, panorama-innstillingsfeil og -artefakter,
  peiling/lokalisering av retinerte tenner (parallakse/SLOB), og Rood & Shehab-tegnene —
  kategori 3 (teknikk/bildekvalitet), egen beståttterskel.
- **Eksamensbelegg:** Radiologi, kategori 3. **Bitewing høy · panorama-artefakter høy · peiling
  2/2+ · Rood & Shehab observert.** Form: R-TEK, R-ANAT, R-HENV. Prioritet: perfekt. **Bildeavhengig**
  (bildekontrakt-boks; funn beskrives tekstlig).
- **Faktakontrakt:** **bitewing** (indikasjon karies/marginalt ben; friprojiserte approksimalrom;
  distale 3-er med); **panorama-artefakter** (ghost av cervikalkolumna, øredobb, double image av
  os hyoideum, feil vertikal lyslinje → uskarpt skarpt sjikt); **innstillingsfeil vs. reell
  forandring**; **peiling/parallakse (SLOB** — Same Lingual, Opposite Buccal: struktur som følger
  røret er lingual/palatinal); **Rood & Shehab-tegn** (7 tegn for relasjon visdomstann–canalis
  mandibularis: darkening/deflection/narrowing av rot, interruption/diversion av kanal m.fl.).
- **Diff-/funnlogikk:** R-TEK: identifiser artefakt/innstillingsfeil i en beskrevet situasjon +
  hvordan omtak retter det; R-ANAT/peiling: bestem bukkal/lingual beliggenhet fra parallakse;
  R-HENV: Rood & Shehab-tegn → CBCT-berettigelse.
- **Typiske feil:** `E4` (tolke artefakt/innstillingsfeil som patologi), `E5` (glemme retinerte
  visdomstenner), feil SLOB-tolkning.
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 2.5: Del 2-prøvebank — anatomi, beskrivelse, teknikk og diagnostikk (drill)
**id:** `od5100-2-5` · **number:** 2.5 · **estimatedMinutes:** 45 · **prerequisites:** `od5100-2-4`

- **Kapitteltype:** sjangerdrill (radiologi, kategori 2+3). **Bildeavhengig — bildekontrakt-boks.**
- **Description:** Driller anatomi-navnsetting, den systematiske `R:`-beskrivelsen, teknikk-/
  artefaktvurdering, peiling og diagnostikk av radiolucente kjevelesjoner — de to
  bildeavhengige radiologikategoriene med egne beståttterskler.
- **Eksamensbelegg:** Radiologi, kategori 2+3 (hver sitting). Form: R-ANAT, R-BESK, R-TEK, R-HENV,
  R-MCQ. Prioritet: perfekt (meta for Del 2). **Bildeavhengig** (bildekontrakt-boks gjentas).
- **Innhold:** `text` **Beskrivelses- og navnsettingsmetoden** (R:-malens seks momenter; latinsk
  presisjon; SLOB; artefakt-sjekkliste); `example` full-pott-momentlister for 3–4 tunge oppgaver
  (anatomi-navnsetting, `R:`-beskrivelse av radikulær-/follikulær-/keratocyste, artefakt-
  identifikasjon); `exercise` × 8–12 (gitt funnbeskrivelse → beskriv/diagnostiser/navngi), inkl.
  **ett R-MCQ peileserie med minuspoeng og stokket fasit** (helgardering-vaksine, E2). **Kald bank:**
  2–3 oppgaver med uvante funnkombinasjoner uten hint (merket kald).
- **Typiske feil:** E3, E4, E5 speiles i fasitkommentarene; E2 (helgardering) uthevet i R-MCQ-fasiten.
- **Kvote:** 16 quiz / 12 flashcards.

**Prøve-kvote Del 2:** 4 prøver (2.A latinsk røntgenanatomi (navn↔beliggenhet) · 2.B `R:`-malen +
radiolucente kjevelesjoner · 2.C teknikk/artefakt + peiling (SLOB) + Rood & Shehab · 2.D samlet
kategori-2+3-prøve på eksamensnivå med ett R-MCQ peileserie (stokket fasit, minuspoeng-regel)).
Alle nyskrevne, funn gitt tekstlig (bildekontrakt).

### Del 3 — Odontogene svulster, cyster og radiolucente kjevelesjoner (oral patologi) *(prioritet: PERFEKT — mest bilde- og repetisjonsdrevet)*

#### Kapittel 3.1: WHO-2022-inndelingen av odontogene svulster
**id:** `od5100-3-1` · **number:** 3.1 · **estimatedMinutes:** 60 · **prerequisites:** `od5100-0-2`

- **Kapitteltype:** tema (oral patologi). **Delvis bildeavhengig — bildekontrakt-boks.**
- **Description:** WHO-2022-klassifikasjonen av odontogene svulster (epiteliale / blandede
  epitelial-mesenkymale / mesenkymale; benigne vs. maligne) med minst to eksempler per gruppe —
  nesten fast oppgave, en av oral patologis sikreste gjengangere.
- **Eksamensbelegg:** Oral patologi. **WHO-2022 odontogene svulster 4/5 veiledninger.** Form:
  P-DEF, P-DIAG. Prioritet: perfekt. Inndelingen er bildeuavhengig (P-DEF); eksempeldiagnostikk
  kan være bildeavhengig (bildekontrakt-boks der histologi vises).
- **Faktakontrakt (WHO 2022):** **epiteliale** (ameloblastom inkl. unicystisk; adenomatoid
  odontogen tumor; kalsifiserende epitelial odontogen tumor/Pindborg); **blandede epitelial-
  mesenkymale** (ameloblastisk fibrom; odontom — compound/complex); **mesenkymale** (odontogent
  myxom; sement(o)blastom; odontogent fibrom); **maligne** (ameloblastisk karsinom, odontogent
  karsinom) `(verifiser presis WHO-2022-plassering per entitet)`. Benign vs. malign-kriterier.
- **Diff-/funnlogikk:** P-DEF: plasser en gitt entitet i riktig WHO-gruppe med begrunnelse (epitel/
  mesenkym/blandet, induktiv effekt); P-DIAG: fra funnbeskrivelse → svulsttype.
- **Typiske feil:** `E11` (blande epitelial/mesenkymal/blandet); glemme unicystisk ameloblastom;
  utelate maligne motstykker.
- **Kvote:** 16 quiz / 24 flashcards.

#### Kapittel 3.2: Differensialdiagnose av radiolucent kjevelesjon (patologi)
**id:** `od5100-3-2` · **number:** 3.2 · **estimatedMinutes:** 65 · **prerequisites:** `od5100-3-1`

- **Kapitteltype:** tema (oral patologi, kjerneoppgaven). **Bildeavhengig — bildekontrakt-boks.**
- **Description:** Den faste differensialdiagnostiske listen for en radiolucent kjevelesjon
  (ameloblastom, odontogen keratocyste, odontogent myxom, sentralt kjempecellegranulom, lateral
  periodontalcyste) med begrunnelseslogikk (lokalisasjon/alder/morfologi) — den aller hyppigste
  oral patologi-oppgaven.
- **Eksamensbelegg:** Oral patologi. **Diff-diagnose radiolucent kjevelesjon 5/5.** Form: P-DIAG,
  P-DEF. Prioritet: perfekt (den mest sentrale i Del 3). **Bildeavhengig** (bildekontrakt-boks;
  boka gir funnbeskrivelse). Kryssref radiologi kap. [2.3](/od5100/od5100-2-3).
- **Faktakontrakt (diff-liste + diskriminerende trekk):** **ameloblastom** (unicystisk vs.
  multicystisk, «såpebobler», ekspansivt, molar-ramus underkjeve, resorberer røtter);
  **odontogen keratocyste** (langstrakt, benmargsvekst, lite ekspansiv, residivtendens);
  **odontogent myxom** («tennisracket»-septae); **sentralt kjempecellegranulom** (front, yngre,
  krysser midtlinjen); **lateral periodontalcyste** (lateralt til vital tann). Diskriminerende
  akser: **lokalisasjon, alder, ekspansjon, rotresorpsjon, multilokularitet**.
- **Diff-/funnlogikk:** P-DIAG: gitt funnbeskrivelse → still HELE diff-listen (E6: alle aktuelle
  med, ingen som ikke passer) → begrunn hver via lokalisasjon/alder/morfologi (E7).
- **Typiske feil:** `E6` (ufullstendig/urelevant diff-liste), `E7` (uten begrunnelse), blande
  keratocyste og ameloblastom.
- **Kvote:** 16 quiz / 24 flashcards.

#### Kapittel 3.3: Odontogen keratocyste og histologibeskrivelse-tolkning
**id:** `od5100-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** `od5100-3-2`

- **Kapitteltype:** tema (oral patologi). **Bildeuavhengig kjerne (P-HIST).**
- **Description:** Den odontogene keratocystens histologi (parakeratinisert epitel, palisaderte
  basalceller) og den bildeuavhengige `P-HIST`-sjangeren: en tekstlig snittbeskrivelse gis,
  studenten navngir diagnosen — bokas beste bildeuavhengige gullgruve.
- **Eksamensbelegg:** Oral patologi. **Keratocyste-histologi høy; histologibeskrivelse-tolkning
  gjennomgående.** Form: P-HIST, P-DEF. Prioritet: perfekt. **Bildeuavhengig** (dette er sjangeren
  der bilde IKKE trengs — fremhev det).
- **Faktakontrakt:** odontogen keratocyste-histologi: **parakeratinisert, smalt flerlaget
  plateepitel**, **rettlinjet/rynket avgrensning**, **palisaderte basalceller med kjerner skjøvet
  mot apeks (tombstone)**, ingen inflammasjon (ellers endret bilde); ortokeratinisert odontogen
  cyste (kontrast — mildere, granularlag). Histologi-vokabular: akantose, hyperkeratose,
  palisadering, korrugert overflate.
- **Diff-/funnlogikk:** P-HIST: gitt en tekstlig snittbeskrivelse → navngi diagnosen ut fra
  nøkkeltrekkene (helt bildeuavhengig); vis motsatt vei (diagnose → forventet histologi).
- **Typiske feil:** overse at inflammasjon endrer keratocystebildet; blande para-/ortokeratinisert.
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 3.4: Kjevecyster — odontogene og ikke-odontogene
**id:** `od5100-3-4` · **number:** 3.4 · **estimatedMinutes:** 55 · **prerequisites:** `od5100-3-2`

- **Kapitteltype:** tema (oral patologi). **Delvis bildeavhengig — bildekontrakt-boks.**
- **Description:** De viktigste kjevecystene (radikulær, follikulær, inflammatoriske kollaterale/
  paradentale, ortokeratinisert, botryoid) med opphav, histologi og hvordan de skilles — inkl.
  det kritiske skillet ekte cyste vs. pseudocyste.
- **Eksamensbelegg:** Oral patologi. **Cyster høy score.** Form: P-DIAG, P-DEF, P-HIST. Prioritet:
  perfekt. Delvis bildeavhengig (bildekontrakt-boks).
- **Faktakontrakt:** **radikulær cyste** (vanligst, inflammatorisk, apikalt til ikke-vital tann);
  **follikulær/dentigerøs cyste** (rundt krone på retinert tann); **inflammatorisk kollateral
  (paradental/bifurkasjon)**; **ortokeratinisert odontogen cyste**; **lateral periodontal/
  botryoid**; **ekte cyste** (epitelkledd hulrom) vs. **pseudocyste/retensjonsfenomen** (ingen
  epitelkledning — f.eks. traumatisk bencyste, mucocele av retensjonstype).
- **Diff-/funnlogikk:** P-DIAG/P-DEF: klassifiser cysten (opphav, tannrelasjon, ekte/pseudo);
  begrunn via beliggenhet + tannvitalitet.
- **Typiske feil:** `E10` (ekte cyste vs. pseudocyste/retensjonsfenomen); blande radikulær
  (ikke-vital) og follikulær (kronerelasjon).
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 3.5: Del 3-prøvebank — svulster og cyster (drill)
**id:** `od5100-3-5` · **number:** 3.5 · **estimatedMinutes:** 45 · **prerequisites:** `od5100-3-4`

- **Kapitteltype:** sjangerdrill (oral patologi). **Delvis bildeavhengig — bildekontrakt-boks.**
- **Description:** Driller WHO-inndelingen, diff-diagnose av radiolucent kjevelesjon,
  keratocyste-/cystehistologi og histologibeskrivelse-tolkning — de sikreste oral patologi-
  gjengangerne, med vekt på FULLSTENDIG begrunnet diff-liste.
- **Eksamensbelegg:** Oral patologi, Del 3-kjernen (4/5–5/5-score). Form: P-DIAG, P-DEF, P-HIST,
  P-SAML. Prioritet: perfekt (meta for Del 3). Delvis bildeavhengig (bildekontrakt-boks).
- **Innhold:** `text` **Diff-diagnose- og histologimetoden** (still HELE lista, ingen urelevante;
  begrunn hver via lokalisasjon/alder/morfologi; P-HIST: les nøkkeltrekkene → diagnose); `example`
  full-pott-momentlister for 3–4 tunge oppgaver (WHO-plassering, radiolucent-diff, keratocyste-
  histologi); `exercise` × 8–12 (gitt funn-/snittbeskrivelse → diagnostiser/klassifiser/sammenlign).
  **Kald bank:** 2–3 uvante kombinasjoner uten hint (merket kald).
- **Typiske feil:** E6, E7, E10, E11 speiles i fasitkommentarene.
- **Kvote:** 16 quiz / 12 flashcards.

**Prøve-kvote Del 3:** 4 prøver (3.A WHO-2022-inndeling (plasser entiteter) · 3.B diff-diagnose
radiolucent kjevelesjon (full begrunnet liste) · 3.C keratocyste + cyster + P-HIST-tolkning ·
3.D samlet oral-patologi-prøve på eksamensnivå). Alle nyskrevne, funn gitt tekstlig (bildekontrakt).

### Del 4 — Slimhinne, reaktive utvekster, spyttkjertel og blæresykdommer (oral patologi) *(prioritet: PERFEKT)*

#### Kapittel 4.1: Reaktive gingivale utvekster og hyperplasi vs. tumor
**id:** `od5100-4-1` · **number:** 4.1 · **estimatedMinutes:** 60 · **prerequisites:** `od5100-3-1`

- **Kapitteltype:** tema (oral patologi). **Delvis bildeavhengig — bildekontrakt-boks.**
- **Description:** De reaktive gingivale utvekstene (perifert ossifiserende fibrom, perifert
  kjempecellegranulom, pyogent granulom, fibroepitelial polypp, LJSGH) med histologisk
  sammenligning, og det prinsipielle skillet hyperplasi vs. benign tumor.
- **Eksamensbelegg:** Oral patologi. **Reaktive gingivale utvekster 4/5 (ofte histologisk
  sammenligning); hyperplasi vs. tumor 3/5.** Form: P-SAML, P-DIAG, P-DEF. Prioritet: perfekt.
  Delvis bildeavhengig (bildekontrakt-boks).
- **Faktakontrakt:** **perifert ossifiserende fibrom** (benmateriale i fibrøst stroma);
  **perifert kjempecellegranulom** (multinukleære kjempeceller, blødning); **teleangiektatisk/
  pyogent granulom** (kar-rikt, lett blødende); **fibroepitelial polypp** (reaktiv fibrøs);
  **lokalisert juvenil spongiotisk gingival hyperplasi (LJSGH)**; **kjempecellefibrom**;
  **hyperplasi** (kjent årsak/reaktiv/stanser når stimulus fjernes) vs. **benign tumor**
  (genetisk/ukjent/fortsetter å vokse).
- **Diff-/funnlogikk:** P-SAML: still histologien til flere reaktive forandringer opp mot
  hverandre (diskriminerende trekk); P-DEF: hyperplasi/tumor-skillet med begrunnelse.
- **Typiske feil:** `E9` (blande hyperplasi/tumor); blande de reaktive entitetene histologisk.
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 4.2: Orale potensielt maligne tilstander, leukoplaki og plateepitelkarsinom
**id:** `od5100-4-2` · **number:** 4.2 · **estimatedMinutes:** 60 · **prerequisites:** `od5100-3-1`

- **Kapitteltype:** tema (oral patologi). **Delvis bildeavhengig — bildekontrakt-boks.**
- **Description:** Orale potensielt maligne tilstander (OPMT/OPMD), leukoplaki/erytroplaki, oral
  lichen planus (patologisk side) og plateepitelkarsinom (OSCC) med dysplasigradering og kravet
  om infiltrerende vekst.
- **Eksamensbelegg:** Oral patologi. **OPMT/leukoplaki 3/5.** Form: P-DIAG, P-DEF. Prioritet:
  perfekt. Delvis bildeavhengig (bildekontrakt-boks). Kryssref oral kirurgi kap.
  [5.2](/od5100/od5100-5-2) (klinisk malignitetsutredning).
- **Faktakontrakt:** **leukoplaki** (hvit, kan ikke tørkes bort, eksklusjonsdiagnose),
  **erytroplaki** (rød, høy dysplasirisiko), **proliferativ verrukøs leukoplaki**, **submukøs
  fibrose**, **oral lichen planus** (retikulær/atrofisk/plakk/bulløs/erosiv); **dysplasi**
  (mild/moderat/alvorlig, carcinoma in situ); **plateepitelkarsinom (OSCC)** — krever
  **infiltrerende vekst** gjennom basalmembran; aktinisk keratose (leppe).
- **Diff-/funnlogikk:** P-DIAG: klassifiser slimhinnelesjon, angi dysplasigrad/malignitetsrisiko,
  begrunn; understrek infiltrasjonskravet for OSCC.
- **Typiske feil:** `E12` (overse infiltrerende vekst for OSCC); blande leukoplaki/erytroplaki-
  risiko; behandle leukoplaki som spesifikk diagnose (er eksklusjon).
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 4.3: Slimhinnepigmentering og spyttkjertelpatologi
**id:** `od5100-4-3` · **number:** 4.3 · **estimatedMinutes:** 55 · **prerequisites:** `od5100-4-2`

- **Kapitteltype:** tema (oral patologi). **Delvis bildeavhengig — bildekontrakt-boks.**
- **Description:** Slimhinnepigmenteringer (melanotisk flekk, nevus, malignt melanom + eksogene/
  fysiologiske/syndromale årsaker) og spyttkjertelpatologi (mucocele av retensjons-/
  ekstravasasjonstype, sialadenitt, nekrotiserende sialometaplasi, Sjögren).
- **Eksamensbelegg:** Oral patologi. **Slimhinnepigmentering 3/5; spyttkjertelpatologi 3/5.**
  Form: P-DIAG, P-DEF. Prioritet: perfekt. Delvis bildeavhengig (bildekontrakt-boks).
- **Faktakontrakt:** **melanotisk flekk**, **melanoakantom**, **nevus**, **malignt melanom**
  (ABCDE-analogt, dårlig prognose oralt); eksogene (amalgamtatovering), fysiologiske (rasepigment),
  syndromale (Peutz-Jeghers) pigmentårsaker; **mucocele** retensjons- (ekskresjonsgang, ekte
  hulrom) vs. **ekstravasasjonstype** (rift, mukøs søl, pseudocyste); **sialadenitt** (infeksiøs/
  ikke-infeksiøs), **nekrotiserende sialometaplasi** (godartet, kan ligne malignitet — sensor
  honorerer mucoepidermoid karsinom delvis hvis begrunnet), **Sjögren**, **sialolitt**.
- **Diff-/funnlogikk:** P-DIAG: pigmentert lesjon → diff (benign/malign/eksogen) med begrunnelse;
  spyttkjertellesjon → type + ekte/pseudocyste-skillet.
- **Typiske feil:** `E10` (mucocele retensjonstype som «ekte cyste»); overse melanom i pigment-diff;
  blande sialadenitt/sialometaplasi.
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 4.4: Blæresykdommer, fibro-ossøse og virusdrevet epitelvekst
**id:** `od5100-4-4` · **number:** 4.4 · **estimatedMinutes:** 55 · **prerequisites:** `od5100-4-1`

- **Kapitteltype:** tema (oral patologi). **Delvis bildeavhengig — bildekontrakt-boks.**
- **Description:** Autoimmune vesikulobulløse lidelser via desmosomer/hemidesmosomer (pemfigus vs.
  slimhinnepemfigoid; erythema multiforme), fibro-ossøse lidelser, og virusdrevet plateepitelvekst
  — de mellomfrekvente, men fellerike oral patologi-temaene.
- **Eksamensbelegg:** Oral patologi. **Blæresykdommer 2/5; fibro-ossøse 2/5; virusdrevet
  epitelvekst 2/5; granulomatøse 2/5.** Form: P-DEF, P-DIAG, P-HIST. Prioritet: perfekt (fellerikt).
  Delvis bildeavhengig (bildekontrakt-boks).
- **Faktakontrakt:** **pemfigus** (autoantistoff mot **desmosom**, intraepitelial blære, akantolyse,
  Tzanck-celler, Nikolsky) vs. **slimhinnepemfigoid** (mot **hemidesmosom**, subepitelial spalte);
  **erythema multiforme** (target-lesjoner); **fibrøs dysplasi** (ground-glass, ekspansivt),
  **ossifiserende fibrom** (velavgrenset), **cemento-ossøs dysplasi**; **papillom/verruca vulgaris**,
  **multifokal epitelial hyperplasi** (koilocytter, mitosoide legemer, HPV), **håret leukoplaki**
  (EBV); **granulomatøse** (TUGSE, orofacial granulomatose/Crohn, actinomyces-kolonier).
- **Diff-/funnlogikk:** P-DEF/P-HIST: koble blæresykdom til riktig antigen/spaltenivå (desmosom→intra,
  hemidesmosom→sub); fibro-ossøs diff; virus → histologisk kjennetegn.
- **Typiske feil:** `E8` (forveksle desmosom/hemidesmosom → feil pemfigus/pemfigoid); blande fibro-
  ossøse; overse koilocytter som virusmarkør.
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 4.5: Del 4-prøvebank — slimhinne, spyttkjertel og blæresykdommer (drill)
**id:** `od5100-4-5` · **number:** 4.5 · **estimatedMinutes:** 45 · **prerequisites:** `od5100-4-4`

- **Kapitteltype:** sjangerdrill (oral patologi). **Delvis bildeavhengig — bildekontrakt-boks.**
- **Description:** Driller reaktive utvekster (histologisk sammenligning), OPMT/leukoplaki/OSCC,
  slimhinnepigmentering, spyttkjertel og desmosom-relaterte blæresykdommer — de mellomfrekvente,
  fellerike temaene.
- **Eksamensbelegg:** Oral patologi, Del 4-kjernen (2/5–4/5). Form: P-DIAG, P-DEF, P-HIST, P-SAML.
  Prioritet: perfekt (meta for Del 4). Delvis bildeavhengig (bildekontrakt-boks).
- **Innhold:** `text` **Slimhinne- og sammenligningsmetoden** (P-SAML: still histologien opp mot
  hverandre; desmosom/hemidesmosom-huskeregel; OSCC-infiltrasjonskrav); `example` full-pott-
  momentlister for 3–4 tunge oppgaver (reaktiv-utvekst-sammenligning, pemfigus vs. pemfigoid,
  pigment-diff); `exercise` × 8–12. **Kald bank:** 2–3 uvante kombinasjoner uten hint (merket kald).
- **Typiske feil:** E8, E9, E10, E12 speiles i fasitkommentarene.
- **Kvote:** 16 quiz / 12 flashcards.

**Prøve-kvote Del 4:** 4 prøver (4.A reaktive gingivale utvekster + hyperplasi/tumor · 4.B OPMT/
leukoplaki/OSCC (dysplasi + infiltrasjon) · 4.C pigmentering + spyttkjertel (ekte/pseudocyste) ·
4.D blæresykdommer + fibro-ossøse + virus). Alle nyskrevne, funn gitt tekstlig (bildekontrakt).

### Del 5 — Klinisk pasienthåndtering og oral medisin (oral kirurgi/medisin) *(prioritet: PERFEKT — middels bildeavhengighet)*

#### Kapittel 5.1: Journalopptak, anamnese og klinisk undersøkelse
**id:** `od5100-5-1` · **number:** 5.1 · **estimatedMinutes:** 60 · **prerequisites:** `od5100-0-2`

- **Kapitteltype:** tema (oral kirurgi/medisin, grunnstamme). **Middels bildeavhengig.**
- **Description:** Den komplette journalmalen (generell/spesiell anamnese, status presens, ekstra-/
  intraoral undersøkelse, status localis) — den sannsynlige grunnstammen i de fleste oral
  kirurgi-kasus, der sammenhengende tekst og fullstendighet premieres.
- **Eksamensbelegg:** Oral kirurgi/medisin. **Fullt journalopptak/klinisk undersøkelse 2/2**
  (grunnstamme). Form: K-STRUK, K-KASUS. Prioritet: perfekt. Middels bildeavhengig (mest tekstlig).
- **Faktakontrakt (journalmal):** **generell anamnese**, **spesiell anamnese** (aktuelt problem),
  **status presens** (allmenntilstand, bevissthet), **ekstraoral undersøkelse** (lymfeknuter,
  muskulatur, kjeveledd/gapebevegelser), **intraoral undersøkelse** (to-speilsteknikk, palpasjon,
  slimhinner), **status localis**; medikament-/allergi-/sykdomsopplysninger.
- **Diff-/funnlogikk:** K-STRUK: gjengi komplett journalmal MED forklarende tekst (ikke løse
  punkter); K-KASUS: bruk malen i et pasientforløp.
- **Typiske feil:** `E13` (løse punktlister uten forklaring), `E14` (glemme spesiell anamnese/
  status localis/ekstraoral undersøkelse).
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 5.2: Malignitetsutredning, munntørrhet, candidose og oral lichen planus
**id:** `od5100-5-2` · **number:** 5.2 · **estimatedMinutes:** 65 · **prerequisites:** `od5100-5-1`

- **Kapitteltype:** tema (oral kirurgi/medisin). **Middels bildeavhengig.**
- **Description:** Oral medisin-kjernen: malignitetsutredning i munnhulen (alarmsymptomer, OPMT,
  henvisning ØNH, biopsi), munntørrhet/hyposalivasjon med candidose (salivaprøver med
  normalverdier), og oral lichen planus klinisk.
- **Eksamensbelegg:** Oral kirurgi/medisin. **Malignitetsutredning høy; munntørrhet/candidose +
  oral lichen planus observert.** Form: K-STRUK, K-KASUS. Prioritet: perfekt. Middels bildeavhengig
  (kliniske foto, men mye tekst). Kryssref oral patologi kap. [4.2](/od5100/od5100-4-2).
- **Faktakontrakt:** **alarmsymptomer** (sår/utvekst > 2–3 uker, indurasjon, ikke-homogen rød-hvit
  lesjon, parestesi, mobile tenner, blødning), **OPMT-definisjon**, henvisning ØNH ved sterk
  mistanke, **biopsi** (incisjon/eksisjon); **munntørrhet** — salivaprøver: ustimulert normal
  0,3–0,4 ml/min (patologisk < 0,10), stimulert normal 1,0–2,0 ml/min (patologisk < 0,7)
  `(verifiser grenser)`; **candidose** (Sabouraud-dyrking, PAS-farging); **oral lichen planus**
  kliniske former (retikulær/atrofisk/plakk/bulløs/erosiv), lokalisasjoner.
- **Diff-/funnlogikk:** K-STRUK: alarmsymptomer/OPMT/utredningsgang som strukturert liste MED
  forklaring; K-KASUS: differensialdiagnostisk resonnement til en tungeforandring → henvisning.
- **Typiske feil:** `E13` (løse punkter), overse alarmsymptom, blande salivaprøvegrenser.
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 5.3: Medikamentvurdering, folketrygdrettigheter og strålebehandling
**id:** `od5100-5-3` · **number:** 5.3 · **estimatedMinutes:** 65 · **prerequisites:** `od5100-5-1`

- **Kapitteltype:** tema (oral kirurgi/medisin). **Middels bildeavhengig.**
- **Description:** Medikamentvurdering hos kompleks pasient (metotreksat, TNF-α-hemmer,
  penicillinallergi, diabetes/insulinpumpe), folketrygdens/HELFOs innslagspunkter, og
  strålebehandling (profylakse før, bivirkninger etter) — de kasusdrevne, poengtunge temaene.
- **Eksamensbelegg:** Oral kirurgi/medisin. **Folketrygd/HELFO 2/2+; medikamentvurdering
  kasusdrevet; strålebehandling observert; MRONJ/alveolitt/sinusitt flervalgstemaer (2021).**
  Form: K-KASUS, K-STRUK, K-MCQ. Prioritet: perfekt. Middels bildeavhengig.
- **Faktakontrakt:** medikamentinteraksjoner (metotreksat, TNF-α-hemmer, penicillinallergi →
  alternativ antibiotika, diabetes/insulinpumpe); **folketrygd/HELFO** «Gule heftet»-innslagspunkter
  (bl.a. pkt. 3 svulster, pkt. 4 infeksjonsforebygging) `(verifiser punktnumre)`; **strålebehandling**
  — profylaktisk sanering av foci FØR, bivirkninger ETTER (**osteoradionekrose**, mukositt,
  xerostomi, trismus — skille akutt/kronisk); **MRONJ** (medikamentrelatert osteonekrose),
  parestesi, alveolitt («dry socket»), odontogen sinusitt, indikasjon for fjerning av visdomstenner.
- **Diff-/funnlogikk:** K-KASUS: vurder medikament-/sykdomsinteraksjon før behandling; K-STRUK:
  folketrygdrettighet knyttet til tilstand; skille profylakse (før) fra bivirkning (etter).
- **Typiske feil:** `E15` (overse medikament-/sykdomsinteraksjon), `E16` (ikke kjenne
  innslagspunkter), `E17` (blande akutte/kroniske strålebivirkninger / glemme osteoradionekrose).
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 5.4: Del 5-prøvebank — det kliniske pasientforløpet (drill)
**id:** `od5100-5-4` · **number:** 5.4 · **estimatedMinutes:** 45 · **prerequisites:** `od5100-5-3`

- **Kapitteltype:** sjangerdrill (oral kirurgi/medisin). **Middels bildeavhengig.**
- **Description:** Driller det gjennomgående kasusforløpet — anamnese → funn → diagnose → behandling
  → folketrygdrettigheter — med sammenhengende, begrunnet langsvar (ikke løse punkter).
- **Eksamensbelegg:** Oral kirurgi/medisin, Del 5-kjernen (2/2 journalmal + rettigheter). Form:
  K-KASUS, K-STRUK, K-MCQ. Prioritet: perfekt (meta for Del 5). Middels bildeavhengig.
- **Innhold:** `text` **Langsvar-/kasusmetoden** (sammenhengende tekst, begrunn hvert trinn, følg
  pasienten fra henvendelse til rettigheter); `example` fullt gjennomskrevet «Anna»-lignende
  kasusforløp (nyskrevet) med margnotat om hvor poengene faller; `exercise` × 8–10 (K-KASUS-
  deloppgaver + K-STRUK + ett K-MCQ uten minuspoeng, stokket fasit). **Kald bank:** 2–3 uvante
  kasusvendinger uten hint (merket kald). Bruk **binær selvrettingssjekkliste** etter kasusfasiten.
- **Typiske feil:** E13, E14, E15, E16, E17 speiles i fasitkommentarene; sammenhengende tekst
  (kredittregel 2) uthevet.
- **Kvote:** 14 quiz / 12 flashcards.

**Prøve-kvote Del 5:** 4 prøver (5.A journalmal + klinisk undersøkelse · 5.B malignitetsutredning +
munntørrhet/candidose + oral lichen planus · 5.C medikamentvurdering + folketrygd + strålebehandling
· 5.D komplett kasusforløp på eksamensnivå (K-KASUS)). Alle nyskrevne, sammenhengende langsvar-fasit.

### Del 6 — Bittavvik, tannforflytting og kasusvurdering (kjeveortopedi) *(prioritet: PERFEKT — felles OD5100/OD5200-modul, middels–høy bildeavhengighet)*

#### Kapittel 6.1: Autotransplantasjon av tenner
**id:** `od5100-6-1` · **number:** 6.1 · **estimatedMinutes:** 60 · **prerequisites:** `od5100-0-2`

- **Kapitteltype:** tema (kjeveortopedi, sikreste gjenganger). **Delvis bildeavhengig.**
- **Description:** Autotransplantasjon — indikasjoner, faktorer for pulpal/parodontal tilheling,
  suksesskriterier, planleggingsfaktorer, og den alvorligste komplikasjonen (erstatningsresorpsjon/
  ankylose) — den aller sikreste kjeveortopedigjengangeren (4/4).
- **Eksamensbelegg:** Kjeveortopedi. **Autotransplantasjon 4/4** (OD5100 2024 + OD5200 2022/2023 —
  felles modul). Form: O-DEL, O-BEGR. Prioritet: perfekt (sikreste gjenganger). Delvis bildeavhengig
  (kasus fra foto/OPG). **Merk OD5100↔OD5200-overlappen eksplisitt.**
- **Faktakontrakt:** **indikasjoner** (agenesi, traumatap, ektopi); **faktorer for pulpal tilheling**
  (åpent apeks/revaskularisering, atraumatisk teknikk, ekstraoral tid); **parodontal tilheling**
  (intakt rothinne på donortann); **suksesskriterier**; **alvorligste komplikasjon =
  erstatningsresorpsjon/ankylose** (skadet rothinne → ben erstatter rot); planleggingsfaktorer
  (rotutviklingsstadium, mottakersted).
- **Diff-/funnlogikk:** O-DEL a)–e): indikasjon → planlegging → tilhelingsfaktorer → suksesskriterier
  → komplikasjon, sammenhengende begrunnet.
- **Typiske feil:** `E18` (oppgi/utelate erstatningsresorpsjon/ankylose feil som alvorligste
  komplikasjon), `E21` (løsrevne punkter).
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 6.2: Tannforflyttingens biologi og retinert/ektopisk hjørnetann
**id:** `od5100-6-2` · **number:** 6.2 · **estimatedMinutes:** 60 · **prerequisites:** `od5100-6-1`

- **Kapitteltype:** tema (kjeveortopedi). **Delvis bildeavhengig.**
- **Description:** Tannforflyttingens biologi (trykk-/strekkside, osteoklast/osteoblast,
  kraftstyrke) og håndtering av retinert/ektopisk hjørnetann (palpasjon bukkalt, peiling,
  DS-stadium, frilegging med sleper).
- **Eksamensbelegg:** Kjeveortopedi. **Tannforflyttingens biologi 3/4; retinert hjørnetann 3/4.**
  Form: O-BEGR, O-DEL, O-KASUS. Prioritet: perfekt. Delvis bildeavhengig (foto/OPG). Kryssref
  radiologi kap. [2.4](/od5100/od5100-2-4) (peiling/SLOB).
- **Faktakontrakt:** **tannforflytting** — **trykkside** (osteoklast, benresorpsjon) vs.
  **strekkside** (osteoblast, benapposisjon), lette kontinuerlige krefter, periodontalligamentets
  celler; hyalinisering ved for store krefter; **retinert/ektopisk hjørnetann** — palpasjon bukkalt,
  **peiling** (parallakse/SLOB — bukkal/palatinal), DS-stadium (bittutvikling) for undersøkelse,
  **frilegging med sleper**, når henvise.
- **Diff-/funnlogikk:** O-BEGR: forklar forflyttingsbiologien (celler/vev/krefter); O-KASUS: bestem
  hjørnetannens beliggenhet fra peiling → behandlingsvalg.
- **Typiske feil:** `E20` (feil DS-stadium/biologisk alder for undersøkelse/henvisning), blande
  trykk-/strekkside, feil peiling-tolkning.
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 6.3: Bittavvik, kryssbitt, agenesi og behandlingsnivåer
**id:** `od5100-6-3` · **number:** 6.3 · **estimatedMinutes:** 60 · **prerequisites:** `od5100-6-2`

- **Kapitteltype:** tema (kjeveortopedi). **Delvis bildeavhengig.**
- **Description:** Bittavvik-begrepene (Angle-klasser, åpent/underbitt, skeletalt vs.
  dentoalveolært), tvangsført anterior/enkeltsidig kryssbitt, agenesi-behandling (lukking vs.
  åpning av plass) og behandlingsnivåene (interseptiv/tidlig korrektiv/korrektiv).
- **Eksamensbelegg:** Kjeveortopedi. **Tvangsført kryssbitt 3/4; agenesi 3/4; bittavvik-begreper
  2/4; behandlingsnivåer + kjeveortopedi hos voksne 2/4.** Form: O-BEGR, O-DEL, O-KASUS. Prioritet:
  perfekt. Delvis bildeavhengig.
- **Faktakontrakt:** **bittavvik/malokklusjon** (definisjon), **Angle-klasser I/II/III**, **frontalt
  åpent bitt**, **underbitt skeletalt vs. dentoalveolært**, **midtlinjeavvik**; **tvangsført anterior/
  enkeltsidig kryssbitt** (lateral tvangsføring, biologisk alder for henvisning); **agenesi-behandling**
  (av 12/22 eller premolar underkjeve: lukking vs. åpning av plass, protetisk erstatning, fordeler/
  ulemper); **behandlingsnivåer** (interseptiv, tidlig korrektiv, korrektiv), **DS-stadier**, residiv/
  retensjon/plassholder, kjeveortopedi hos voksne (særlige hensyn).
- **Diff-/funnlogikk:** O-BEGR: definer bittavvik/skille skeletalt-dentoalveolært; O-KASUS: kartlegg
  behandlingsbehov fra foto/OPG → tiltak + biologisk alder for henvisning.
- **Typiske feil:** `E19` (blande skeletalt/dentoalveolært + tvangsføring), `E20` (feil biologisk
  alder), `E21` (løsrevne punkter).
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 6.4: Del 6-prøvebank — kjeveortopedi (drill)
**id:** `od5100-6-4` · **number:** 6.4 · **estimatedMinutes:** 45 · **prerequisites:** `od5100-6-3`

- **Kapitteltype:** sjangerdrill (kjeveortopedi). **Delvis bildeavhengig.**
- **Description:** Driller autotransplantasjon, tannforflyttingsbiologi, retinert hjørnetann,
  tvangsført kryssbitt, agenesi og behandlingsnivåer — med vekt på sammenhengende faglig resonnement
  (ikke løsrevne punkter). Felles OD5100/OD5200-modul.
- **Eksamensbelegg:** Kjeveortopedi, Del 6-kjernen (3/4–4/4). Form: O-BEGR, O-DEL, O-KASUS. Prioritet:
  perfekt (meta for Del 6). Delvis bildeavhengig.
- **Innhold:** `text` **Langsvar-/deloppgavemetoden** (sammenhengende begrunnet tekst; a)–e)-struktur;
  koble mekanisme til behandlingsvalg); `example` fullt gjennomskrevet autotransplantasjons-deloppgave
  (a–e) + en kasusvurdering fra beskrevet OPG (nyskrevet), med margnotat; `exercise` × 8–10 (O-BEGR/
  O-DEL/O-KASUS). **Kald bank:** 2–3 uvante kasus uten hint (merket kald). Binær selvrettingssjekkliste
  etter kasusfasiten.
- **Typiske feil:** E18, E19, E20, E21 speiles i fasitkommentarene; sammenhengende resonnement
  (kredittregel 2) uthevet.
- **Kvote:** 14 quiz / 12 flashcards.

**Prøve-kvote Del 6:** 4 prøver (6.A autotransplantasjon (a–e) · 6.B tannforflyttingsbiologi +
retinert hjørnetann (peiling) · 6.C bittavvik + kryssbitt + agenesi + behandlingsnivåer · 6.D samlet
kjeveortopediprøve på eksamensnivå (O-KASUS fra beskrevet foto/OPG)). Alle nyskrevne, sammenhengende
langsvar-fasit.

### Del 7 — Eksamenstrening: sjangerdrill og fire øvingseksamener *(prioritet: PERFEKT (meta))*

#### Kapittel 7.1: Sjangerspill — tekstlig bildetolkning (radiologi + oral patologi)
**id:** `od5100-7-1` · **number:** 7.1 · **estimatedMinutes:** 60 · **prerequisites:** `od5100-4-5`

- **Kapitteltype:** sjangerdrill/konsolidering. **Bildeavhengige sjangre — bildekontrakt-boks.**
- **Description:** De bildeavhengige sjangrene i radiologi og oral patologi samlet på ett sted —
  `R:`-malen, anatomi-navnsetting, teknikk/artefakt, peiling, WHO-plassering, diff-diagnose og
  histologibeskrivelse-tolkning — med bildekontrakten som gjennomgående ramme.
- **Eksamensbelegg:** Meta (radiologi + oral patologi-sjangrene). Sensorkravene 1–8. Prioritet:
  perfekt (meta). **Bildeavhengig** (bildekontrakt-boks gjentas: boka trener resonnementet fra
  gitt funnbeskrivelse; visuell gjenkjenning trenes i atlas/klinikk).
- **Innhold:** `text` **Sjangerguiden** — for hver radiologi-/patologisjanger (R-KORT, R-ANAT,
  R-BESK, R-MCQ, R-TEK, R-HENV, P-DIAG, P-HIST, P-DEF, P-SAML): kjennetegn, løsningsoppskrift,
  sensorpremie, vanligste feil; `collapsible` **Hurtigreferanse** (flashcard-kilde): `R:`-malens
  seks momenter, diff-diagnose-begrunnelsesaksene, SLOB, WHO-inndelingen, dosetypene;
  `example` full gjennomgang av én oppgave per hovedsjanger (funn gitt tekstlig); `exercise` =
  «identifiser sjanger + skisser angrepsplan» for blandede oppgavestammer.
- **Typiske feil:** hele E1–E12-katalogen med kobling til forebyggende kapittel; E2 (helgardering)
  og E7 (uten begrunnelse) uthevet.
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 7.2: Sjangerspill — langsvar og kasus (oral kirurgi + kjeveortopedi)
**id:** `od5100-7-2` · **number:** 7.2 · **estimatedMinutes:** 55 · **prerequisites:** `od5100-6-4`

- **Kapitteltype:** sjangerdrill/konsolidering. **Middels bildeavhengig.**
- **Description:** Langsvar-/kasussjangrene i oral kirurgi og kjeveortopedi samlet — journalmal,
  kasusforløp, folketrygd, autotransplantasjons-deloppgave og kasusvurdering fra foto/OPG — med
  vekt på sammenhengende, begrunnet tekst.
- **Eksamensbelegg:** Meta (oral kirurgi + kjeveortopedi-sjangrene). Sensorkravene 1–3, 5. Prioritet:
  perfekt (meta). Middels bildeavhengig.
- **Innhold:** `text` **Sjangerguiden** — for hver sjanger (K-KASUS, K-STRUK, K-MCQ, O-KASUS, O-BEGR,
  O-DEL): kjennetegn, oppskrift, sensorpremie, vanligste feil; `collapsible` **Hurtigreferanse**
  (flashcard-kilde): journalmalen, folketrygd-punktene, autotransplantasjonskriteriene,
  tannforflyttingsbiologien; `example` full gjennomgang av ett kasusforløp + én autotransplantasjons-
  deloppgave; `exercise` = «identifiser sjanger + skisser angrepsplan». **Binær selvrettingssjekkliste**
  for langsvar (standpunkt/begrunnelse/fullstendighet/sammenhengende tekst).
- **Typiske feil:** hele E13–E21-katalogen; E13/E21 (løse punkter) uthevet.
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 7.3: Øvingseksamen — radiologi (komplett sett)
**id:** `od5100-7-3` · **number:** 7.3 · **estimatedMinutes:** 80 · **prerequisites:** `od5100-7-1`

- **Kapitteltype:** øvingseksamen (radiologi). **Bildeavhengig — bildekontrakt-boks.**
- **Description:** Et komplett, nyskrevet radiologisett i arkivmalen: ~20 oppgaver, 100 p,
  **beståttgrense 60 OG poeng i hver av de tre kategoriene**, med kortsvar (strålefysikk/strålevern),
  anatomi-navnsetting, systematiske `R:`-beskrivelser og ett peileserie-flervalg med minuspoeng.
- **Eksamensbelegg:** Meta — speiler radiologiformatet (analysen §1). Prioritet: perfekt (meta).
  **Bildeavhengig** (bildekontrakt-boks: alle bildeoppgaver gitt som funnbeskrivelse; visuell
  gjenkjenning trenes i atlas/klinikk).
- **Innhold:** oppgavefordeling som en «typisk» radiologieksamen: kategori 1 (dosetyper,
  vekselvirkning, strålevern), kategori 2 (anatomi-navnsetting, `R:`-beskrivelse av radiolucente
  kjevelesjoner), kategori 3 (teknikk/artefakt, peiling), **ett R-MCQ peileserie med minuspoeng og
  stokket fasit**. `collapsible` full løsning per oppgave (funnbeskrivelse → modellert svar);
  `tip` **Sensorblikket** (hvor delpoengene faller, **de tre kategoritersklene**, bestått-på-marginen).
- **Typiske feil:** E1–E5 anvendt i sensorblikket; E2 (helgardering) i R-MCQ-fasiten.
- **Kvote:** 8 quiz / 4 flashcards.

#### Kapittel 7.4: Øvingseksamen — oral patologi (komplett sett)
**id:** `od5100-7-4` · **number:** 7.4 · **estimatedMinutes:** 80 · **prerequisites:** `od5100-7-3`

- **Kapitteltype:** øvingseksamen (oral patologi). **Bildeavhengig — bildekontrakt-boks.**
- **Description:** Et komplett, nyskrevet oral patologi-sett: 7–9 hovedoppgaver med poeng,
  «funnbeskrivelse → still full diff-diagnose → begrunn», inkl. minst én ren `P-HIST`-oppgave
  (bildeuavhengig histologibeskrivelse).
- **Eksamensbelegg:** Meta — speiler oral patologi-formatet (analysen §1). Prioritet: perfekt (meta).
  **Bildeavhengig** (bildekontrakt-boks; funn gitt tekstlig).
- **Innhold:** hovedoppgaver: WHO-plassering av odontogen svulst, diff-diagnose radiolucent
  kjevelesjon (full begrunnet liste), reaktiv gingival utvekst (histologisk sammenligning), OPMT/
  OSCC (dysplasi + infiltrasjon), pemfigus vs. pemfigoid, en ren `P-HIST` (snittbeskrivelse →
  diagnose). `collapsible` full løsning per oppgave; `tip` **Sensorblikket** (fullstendig diff-liste,
  begrunnelseskravet, delpoeng).
- **Typiske feil:** E6–E12 anvendt i sensorblikket; E6/E7 (ufullstendig diff / uten begrunnelse)
  uthevet.
- **Kvote:** 8 quiz / 4 flashcards.

#### Kapittel 7.5: Øvingseksamen — oral kirurgi/medisin (komplett sett)
**id:** `od5100-7-5` · **number:** 7.5 · **estimatedMinutes:** 80 · **prerequisites:** `od5100-7-4`

- **Kapitteltype:** øvingseksamen (oral kirurgi/medisin). **Middels bildeavhengig.**
- **Description:** Et komplett, nyskrevet oral kirurgi/medisin-sett: ett gjennomgående pasientforløp
  (nyskrevet «Anna»-type kasus) med ~11 deloppgaver fra henvendelse via anamnese, medikamentvurdering,
  diagnose og behandling til folketrygdrettigheter, 100 p, beståttgrense 60, alt vektet likt.
- **Eksamensbelegg:** Meta — speiler oral kirurgi-formatet (analysen §1). Prioritet: perfekt (meta).
  Middels bildeavhengig.
- **Innhold:** kasusforløp-deloppgaver: journalmal/anamnese, klinisk undersøkelse, medikament-
  interaksjon, differensialdiagnostisk resonnement, behandlingsvalg, folketrygdrettighet;
  evt. en `K-MCQ`-bolk uten minuspoeng (stokket fasit). `collapsible` full løsning (sammenhengende
  langsvar per deloppgave); `tip` **Sensorblikket** (sammenhengende tekst, begrunnelse, bestått-på-
  marginen). **Modellbesvarelse-ærlighet:** minst én «bestått-på-marginen»-besvarelse som viser
  terskelen nedenfra (README «Karakter-realisme» — eksamen er bestått/ikke bestått).
- **Typiske feil:** E13–E17 anvendt i sensorblikket; E13 (løse punkter) uthevet.
- **Kvote:** 8 quiz / 4 flashcards.

#### Kapittel 7.6: Øvingseksamen — kjeveortopedi (komplett sett)
**id:** `od5100-7-6` · **number:** 7.6 · **estimatedMinutes:** 80 · **prerequisites:** `od5100-7-5`

- **Kapitteltype:** øvingseksamen (kjeveortopedi). **Delvis bildeavhengig.**
- **Description:** Et komplett, nyskrevet kjeveortopedisett: ~10 nummererte oppgaver med poeng,
  blanding av teoribegreper (autotransplantasjon, tannforflytting, bittavvik) og kasusvurdering fra
  beskrevet foto/OPG, 100 p. Felles OD5100/OD5200-profil.
- **Eksamensbelegg:** Meta — speiler kjeveortopediformatet (analysen §1). Prioritet: perfekt (meta).
  Delvis bildeavhengig (kasus fra beskrevet foto/OPG).
- **Innhold:** oppgaver: autotransplantasjon (a–e), tannforflyttingsbiologi, retinert hjørnetann
  (peiling), tvangsført kryssbitt, agenesi-behandling, bittavvik-begreper, en O-KASUS-vurdering fra
  beskrevet OPG. `collapsible` full løsning (sammenhengende begrunnet langsvar); `tip` **Sensorblikket**
  (erstatningsresorpsjon-fellen, sammenhengende tekst, bestått-på-marginen). Til sammen dekker de
  fire øvingseksamenene (7.3–7.6) alle sjangerkodene minst én gang.
- **Typiske feil:** E18–E21 anvendt i sensorblikket; E18 (autotransplantasjonskomplikasjon) uthevet.
- **Kvote:** 8 quiz / 4 flashcards.

**Prøve-kvote Del 7:** ingen egen prøve (Del 7 ER de fire øvingseksamenene 7.3–7.6, én per deleksamen).

---

## 4. Kvotesammendrag (AUTORITATIV for alle senere faser)

| Del | Delfag | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|---|
| 0 | meta | 2 | 22 | 18 | 0 (dekkes av øvingseksamenene) |
| 1 | Radiologi | 5 | 74 | 92 | 4 |
| 2 | Radiologi | 5 | 80 | 104 | 4 |
| 3 | Oral patologi | 5 | 80 | 104 | 4 |
| 4 | Oral patologi | 5 | 80 | 100 | 4 |
| 5 | Oral kirurgi/medisin | 4 | 62 | 78 | 4 |
| 6 | Kjeveortopedi | 4 | 62 | 78 | 4 |
| 7 | meta | 6 | 64 | 48 | 0 (= 4 øvingseksamener) |
| **Sum** | | **36** | **524** | **622** | **24 + 4 øvingseksamener** |

> **Merk:** tabellsummene over er delvis-summer beregnet fra per-kapittel-kvotene under.
> Den detaljerte summeringskontrollen rett under er FASIT (den teller hvert kapittel eksplisitt);
> tabellen er avrundet oversikt. Ved avvik gjelder summeringskontrollen.

Summeringskontroll per del (quiz / flashcards) — eksplisitt telling av hvert kapittel:
- Del 0: 10+12 = **22** / 8+10 = **18**
- Del 1: 16+16+16+12+14 = **74** / 22+20+22+16+12 = **92**
- Del 2: 16+16+16+16+16 = **80** / 26+22+22+22+12 = **104**
- Del 3: 16+16+16+16+16 = **80** / 24+24+22+22+12 = **104**
- Del 4: 16+16+16+16+16 = **80** / 22+22+22+22+12 = **100**
- Del 5: 16+16+16+14 = **62** / 22+22+22+12 = **78**
- Del 6: 16+16+16+14 = **62** / 22+22+22+12 = **78**
- Del 7: 16+16+8+8+8+8 = **64** / 16+16+4+4+4+4 = **48**
- **Totalt: 22+74+80+80+80+62+62+64 = 524 quiz / 18+92+104+104+100+78+78+48 = 622 flashcards.**

**Kvotegulv-kontroll:** **524 quiz ≥ 500 ✓** og **622 flashcards ≥ 500 ✓**. Begge over kravet.

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride. Fordelingen speiler
frekvens og natur: de fire deleksamenene får hvert sitt tyngdepunkt (radiologi 154 quiz/196 fc,
oral patologi 160 quiz/204 fc, oral kirurgi/medisin 62 quiz/78 fc, kjeveortopedi 62 quiz/78 fc),
og de to bildetungeste delfagene (radiologi + oral patologi) bærer 314 av 524 quiz og 400 av 622
flashcards.

**Flashcard-profilen (622) ligger godt over gulvet (500)** fordi faget er ekstremt fakta-,
terminologi- og klassifikasjonstungt (latinsk røntgenanatomi, WHO-2022-inndeling, faste diff-
diagnoselister, histologiske nøkkeltrekk, normalverdier, folketrygd-punkter) og fire selvstendige
delfag skal dekkes. Hvert kapittels **Nøkkelfakta- og terminologiliste** er en naturlig flashcard-
kilde. Korttyper: **latin↔norsk røntgenanatomi**, **dosetype↔enhet↔betydning**, **WHO-gruppe↔eksempel**,
**lesjon↔diskriminerende trekk** (diff-diagnose), **histologisk nøkkeltrekk↔diagnose**, **normalverdi**
(salivaflow, dosestørrelse), **folketrygd-punkt↔tilstand**, **autotransplantasjonskriterium**,
**trykk-/strekkside↔celletype**. **Quiz-profilen** driller nabobegrep-distraktorer (absorbert/
ekvivalent/effektiv dose; radikulær/follikulær cyste; keratocyste/ameloblastom; desmosom/hemidesmosom;
hyperplasi/tumor; ekte cyste/pseudocyste; skeletalt/dentoalveolært; trykk-/strekkside).

### Prøver (4 per temadel, 24 totalt)

Fire prøver per temadel (Del 1–6). Hver prøve speiler det respektive deleksamensformatet i miniatyr:
radiologi = kortsvar + `R:`-beskrivelse + anatomi + evt. R-MCQ; oral patologi = funnbeskrivelse →
diff-diagnose; oral kirurgi = kasus/langsvar; kjeveortopedi = begreps-/deloppgave/kasus. Omfang
25–45 min. Alle oppgaver NYSKREVNE; funn gitt tekstlig (bildekontrakt); flervalg med stokket fasit.
Prøvekapittel-id `od5100-<del>-prove`, chapterNumber `<del>.P` (jf. BYGGEKONTRAKT). Del 0 og Del 7
har ingen egen prøve (Del 7s fire øvingseksamener dekker helheten). Prøvetitlene er spesifisert per
del i §3 (Prøve-kvote-linjene).

### Komplette øvingseksamener (4 — kapitlene 7.3–7.6)

Fire nyskrevne komplette sett, **ett per deleksamen** i sitt eget format (radiologi ~20 oppg./
100 p/tre kategoriterskler; oral patologi 7–9 hovedoppgaver; oral kirurgi gjennomgående kasus/100 p;
kjeveortopedi ~10 oppgaver/100 p), med full modellsvar-fasit og Sensorblikket per oppgave.
**Bildekontrakt i alle fire:** bildeoppgaver gis som tekstlig funnbeskrivelse, og øvingseksamenene
sier eksplisitt at den visuelle gjenkjenningen må trenes i atlas/klinikk i tillegg. Minst én
«bestått-på-marginen»-besvarelse per sett (eksamen er bestått/ikke bestått). Til sammen dekker de
fire settene alle sjangerkodene minst én gang.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — de fire deleksamenene (radiologi digital/~20 oppg./tre kategoriterskler;
   oral patologi 7–9 hovedoppgaver; oral kirurgi gjennomgående kasus; kjeveortopedi ~10 oppgaver),
   alle bestått/ikke bestått uten kompensasjon, svar på norsk/svensk/dansk, kildenoten (arkiv
   2021–2025) og **bildekontrakten** (fra kap. 0.1–0.2).
2. **Svarhåndverket** — `R:`-malen, diff-diagnose-begrunnelseslogikken, journal-/kasus-langsvaret,
   de åtte sensor-kredittreglene, minuspoeng-regelen (fra kap. 0.2).
3. **Radiologi** (Del 1–2) — strålefysikk/strålevern/LNT, røntgenanatomi, `R:`-mal, teknikk/artefakt/
   peiling, radiolucente kjevelesjoner.
4. **Oral patologi** (Del 3–4) — WHO-2022, diff-diagnose radiolucent kjevelesjon, keratocyste-/
   cystehistologi, reaktive utvekster, OPMT/OSCC, pigmentering/spyttkjertel, blæresykdommer.
5. **Oral kirurgi/medisin** (Del 5) — journalmal, malignitetsutredning, munntørrhet/candidose,
   medikamentvurdering, folketrygd, strålebehandling.
6. **Kjeveortopedi** (Del 6) — autotransplantasjon, tannforflytting, retinert hjørnetann, kryssbitt,
   agenesi, behandlingsnivåer (felles OD5100/OD5200-modul).
7. **Eksamenstrening** (Del 7) — sjangerspill + de fire øvingseksamenene, én per deleksamen.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

1. **Del 0 først** — eksamenskart + svarhåndverk + bildekontrakt; etablerer sjanger-/feilkodene,
   `R:`-malen, diff-diagnose-logikken og bildekontrakt-boksen som gjenbrukes overalt.
2. **Ett delfag om gangen** (radiologi → oral patologi → oral kirurgi → kjeveortopedi), én Opus-agent
   per del, maks 2 samtidige. Hvert bildeavhengig kapittel MÅ bære bildekontrakt-boksen og løse
   temaet med tekstlig funnbeskrivelse — aldri gjengitt/lisensantatt bilde.
3. **Læringsløkke inline** (Teori → Eksempel → Oppgave) i alle temakapitler; drill-/øvingseksamen-
   kapitler følger sin egen arketype (komplett sett først, løsninger i collapsibles).
4. **Ingen oppdiktede fakta:** doser, normalverdier, WHO-2022-plasseringer, folketrygd-punktnumre og
   latinske navn merkes `(verifiser)` der usikre — fagfellesjekk i fase 6.
5. **Del 7 til slutt** — sjangerspill + fire øvingseksamener gjenbruker HELE boka; bygges av én agent
   etter at de fire delfagene er ferdige. Prøvetitlene er gitt per del i §3 (Del 1–6; Del 0 og Del 7
   har ingen egen prøve).
6. **Kvotene fra kvotesammendraget (§4) er fasit** og instansieres i BYGGEKONTRAKT.md (fase 3).
7. **Registrering:** emnet registreres i `institusjoner.ts` under UiO med visningsnavn «OD5100
   Odontologistudiet, 9. semester»; sjekk at helse-/klinisk-heuristikken i `hoyskole-disclaimer.tsx`
   treffer emnet (odontologi/helse → «ikke helseråd») — utvid om nødvendig.

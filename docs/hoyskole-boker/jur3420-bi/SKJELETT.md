# Bokskjelett: JUR 3420 Forretningsjus (BI) — eksamensrettet lærebok

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


> Dette skjelettet er forfatterens ENESTE kilde til eksamensempiri — forfatter-agenten
> (Opus) leser IKKE eksamensarkivet. Alt eksamensbelegg (årganger, frekvenser, sensor-
> antakelser, feller) står derfor eksplisitt per kapittel. Alle faktum-mønstre er omskrevne
> maler; forfatteren skal skrive HELT NYE faktum i samme sjanger (nye parter, virksomheter,
> bransjer, beløp, datoer, ytelser). Arketype: **DNA-jus.md** — med tungt dokumenterte
> BI-avvik (se §8): faget er **bredere og grunnere** enn UiO-praktikum, og **40 % av eksamen
> er flervalg**, som ingen UiO-jusbok har.
>
> **Rettstilstand (KRITISK — les §2 og §9 før regelkontraktene brukes):** Boka bygger på
> **GJELDENDE rett** per juli 2026. **Ingen Lovdata-oppslag er gjort i dette skjelettet**
> (bevisst — per oppdrag skal det IKKE WebFetch-es nå; alt slås opp i fase 6). Alle
> paragrafhenvisninger er derfor merket *(verifiser)* der det er kjent usikkerhet, og
> **rettstilstandssensitive punkter er merket 🔶** — de er endret de siste årene og MÅ
> sjekkes mot Lovdata før trykk: **midlertidig ansettelse (aml. § 14-9 — generell adgang
> opphevet 2022)**, **kjønnsrepresentasjon i AS (asl. § 6-11 a — terskelverdier endret)**,
> **forbrukerkjøpslovens frister/mangelsregler**, **foreldelsesreglene** og
> **forkjøpsretts-/verdsettelsesreglene**. Dette speiler JUS1111-lærdommen (fkjl. § 17-læren
> var foreldet) og produksjonsløypens jus-særkrav.
>
> **⚠️ Evidensforbehold (fra EKSAMENSANALYSEn).** Arkivet er **lite (5 sett: V2023, H2023,
> V2024, H2024, V2025)** og inneholder **ingen sensorveiledning/fasit**. Frekvenstallene er
> robuste på **rettsområde-nivå** (mønsteret er slående stabilt), men usikre på finkornet
> typetilfelle-nivå. Sensorkravene (§4/§5 i analysen) er **UTLEDET av oppgaveinstruksene**
> («det legges vekt på riktig lovanvendelse og rettslige vurderinger»), ikke verifisert mot
> veiledning — behandle som kvalifisert hypotese, ikke fasit, og merk i boka der en påstand
> hviler på utledning. PDF-uttrekket avkortet flervalgshalene i de fire nyeste settene, så
> DEL 2-temaspredningen bygger på de leste flervalgene + mønster.

---

## 1. Bokens identitet

### 1.1 Kortfakta

| Felt | Verdi |
|---|---|
| Kurs-id | `jur3420-bi` |
| Tittel | **JUR 3420 Forretningsjus** |
| Level | `Høyskole` |
| Institusjon | Handelshøyskolen BI |
| Fagområde | jus |
| Arketype | jus (rettsdogmatisk med praktikum) — med tungt dokumenterte BI-avvik, se §8 |
| Pitch | Boka trener nøyaktig det JUR 3420-eksamen prøver: en **todelt skoleeksamen (5 timer, A–F)** der **DEL 1 er ~6 korte praktikumsoppgaver med eksplisitte delspørsmål (teller 60 %)** og **DEL 2 er flervalg med ett riktig svar (teller 40 %)**. Eksamen sprer seg **slående jevnt over seks kommersielle søyler** — avtalerett, kjøpsrett, arbeidsrett, selskapsrett, pengekrav & foreldelse, og bærekraft/ansvarlig næringsliv — som hver dukker opp i praktisk talt hvert sett. Boka speiler denne «én oppgave per søyle»-malen: hver søyle kan løses i en **kort, selvstendig sekvens** (hjemmel → vilkår → subsumsjon → konklusjon). Fordi **Lovdata Pro er åpen på eksamen gir avskrift av lovtekst NULL** — poengene ligger i **riktig hjemmelvalg** og **subsumsjon på de plantede faktadetaljene** (næringsdrivende vs. forbruker, «avtalt» vs. bare «tatt sikte på», forfallsdatoer, reklamasjonsintervaller). To BI-særgrep bærer boka: (1) **lovvalget** (kjl. vs. fkjl. vs. digitalytelsesloven vs. leie/tjeneste vs. angrerett) er en **fast åpningsfelle** som forplanter seg gjennom hele drøftelsen; (2) **flervalgsbanken** trener **hjemmel-vs-utfall-skillet** — flervalg er alt-eller-intet, både paragraf OG utfall må stemme, og distraktorene parer bevisst rett utfall med feil hjemmel. Bygget på 5 eksamensgjennomføringer 2023–2025. **Studentene er økonomistudenter med ett emne forretningsjus, ikke jusstudenter** — ambisjonsnivået er korrekt hovedhjemmel + fornuftig subsumsjon på hele bredden, ikke UiO-ens metodiske finpuss på få dype tvister. |
| Kapittelantall | **39** (Del 0: 4, Del 1: 5, Del 2: 7, Del 3: 5, Del 4: 5, Del 5: 5, Del 6: 4, Del 7: 4) |
| Estimert totaltid | **~1 730 minutter (~29 timer)** |
| Quiz totalt | **626** (krav ≥500; **siktet høyt fordi flervalg ER 40 % av eksamen** og hjemmel-vs-utfall-drill egner seg som quiz) |
| Flashcards totalt | **592** (sikt 550–650; **paragraf↔vilkår per rettsområde**) |
| Prøver | **32** (4 per del × 8 deler; krav ≥4 per del) |
| Eksamensform boka kalibreres mot | **Skriftlig skoleeksamen, 5 timer, 100 % av karakteren, A–F.** Fra og med H2023 stabil **todeling 60/40**: **DEL 1 = ~6 selvstendige praktikumsoppgaver med eksplisitte delspørsmål (60 %)**, **DEL 2 = flervalg, ett riktig alternativ, ingen begrunnelse (40 %)**. Hjelpemidler H2023→V2025: **lovsamling + Lovdata Pro** (digital eksamensmodus). V2023 var en overgangsform (ren praktikum, 10 likt-tellende delspørsmål, alle trykte/håndskrevne hjelpemidler). Emnekoden veksler mellom «JUR 3420» og «JUR 34201» — samme emne. *(verifiser gjeldende BI-emneside: timetall, studiepoeng (7,5 ECTS), pensum, hjelpemidler.)* |

**Emnets omfang:** JUR 3420 er 7,5 ECTS **forretningsjus for økonomistudenter** — en bred
innføring i den kommersielle privatretten som en næringsdrivende møter: avtaleinngåelse og
ugyldighet, kjøp av varer og tjenester, arbeidsforhold, selskapsformer og selskapsorganer,
pengekrav og foreldelse, og det stigende feltet bærekraft/ansvarlig næringsliv. Formen er
**bred og grunn**: mange korte, avgrensede delspørsmål på tvers av hele bredden, ikke få
dype tvister. Boka kan **ikke** ha ett tyngdepunkt — den må dekke **alle seks søyler like
solid** (kjøpsrett er marginalt tyngst; se §2).

**Avgrensning (fra analysen §7):** **Erstatning utenfor kontrakt** (ulovfestet culpa +
objektivt ansvar) er **randstoff** — testet kun 1/5 (V2023 O10) og motsatt av jusstudiet
IKKE et tyngdepunkt her. Det gis kort «bør kjenne til»-dekning i eksamenstreningen (kap.
7.1), ikke egen del. **Domsanalyse/prejudikatkunnskap testes ikke** — faget er **lov- og
subsumsjonsdrevet, ikke domsdrevet** (en viktig forskjell fra UiO-jusen). Det bygges derfor
**ingen domskanon**; sentrale rettssetninger refereres i prosa uten domsregister.

### 1.2 Rettstilstandsflagg — LES FØRST (håndteres per kapittel)

Følgende er **rettstilstandssensitivt (🔶)** og MÅ verifiseres mot gjeldende Lovdata i fase 6
FØR trykk. Boka skal bygges på **gjeldende rett** og markere skiftet der eldre besvarelser
kan villede. Ingen Lovdata-oppslag er gjort her (per oppdrag) — alt er merket *(verifiser)*.

| Institutt | Bestemmelse | Status / risiko | Kapittel |
|---|---|---|---|
| Midlertidig ansettelse — generell adgang | **aml. § 14-9** 🔶 | Hovedregelen er **fast** ansettelse; **den generelle adgangen til midlertidig ansettelse (tidl. bokstav f) er OPPHEVET (2022)** — midlertidighet krever nå positivt grunnlag. Eldre besvarelser bruker den opphevede adgangen. *(verifiser eksakt leddstruktur/bokstavkatalog og opphevelsesår.)* | 3.1, 3.5 |
| Kjønnsrepresentasjon i AS | **asl. § 6-11 a** 🔶 | Kravet er **utvidet fra børsnoterte ASA til større AS** (terskelverdier innfaset de siste år). Fella er å tro at bare ASA rammes. *(verifiser gjeldende terskelverdier, innfasingsdatoer og hvilke selskaper som omfattes.)* | 4.4, 4.5 |
| Forbrukerkjøpslovens frister og mangelsregler | **fkjl.** 🔶 | Forbrukerkjøpsloven ble EU-tilpasset (varekjøps-/digitalytelsesdirektivet) med virkning fra **1.1.2024** — mangelsbegrep, krav til varens egenskaper, reklamasjon og hevingsterskel berørt. Bruk **gjeldende** tekst; eldre eksempler bygger på gammel fkjl. *(verifiser paragrafnumre og frister.)* | 2.2, 2.3, 2.4 |
| Foreldelse — frister og fristavbrudd | **fal. §§ 2/3/10/14/15** 🔶 | 3-årsfrist, fristens start, 1-årig tilleggsfrist, erkjennelse og rettslig skritt. Stabil grunnstamme, men leddstruktur og virkeområde *(verifiser)*. | 5.1, 5.2 |
| Forkjøpsrett og verdsettelse av aksjer | **asl. §§ 4-19/4-23** 🔶 | Forkjøpsrett ved eierskifte med mindre vedtektene sier annet; løsningssum til **virkelig verdi** hvis ikke annet er avtalt. *(verifiser leddstruktur og fristene.)* | 4.2, 4.5 |
| Digitale ytelser | **digitalytelsesloven (2022)** 🔶 | Egen lov for digitale ytelser/abonnement — avgrensning mot kjl./fkjl. *(verifiser virkeområde.)* | 2.1 |
| Åpenhetsloven | **åpenhetsloven §§ 3–6** 🔶 | Virkeområde (større virksomheter), aktsomhetsvurderinger, redegjørelse, informasjonsplikt overfor **«enhver»** (§ 6). Ny lov, i utvikling. *(verifiser terskler og paragrafer.)* | 6.1, 6.4 |

> **⚠️ Den farligste fella er tidsforskyvning + åpen Lovdata.** En bok som gjengir eldre rett
> som gjeldende (opphevet generell midlertidighetsadgang, ASA-bare kjønnsrep., gammel fkjl.)
> bommer på nettopp de plantede detaljene sensor belønner. Bygg på gjeldende rett; marker 🔶
> og *(verifiser)*; la fase 6 sluttkontrollere. Og fordi **Lovdata er åpen**: verdien er
> **hvor** man slår opp og **hvilket vilkår som avgjør**, aldri gjengivelse.

---

## 2. Makrostruktur — seks-søyle typetilfelle-katalog med to spor

Ryggraden er den **jevne bredden**: eksamen fordeler seg slående likt over **seks kommersielle
søyler** som hver testes i praktisk talt hvert sett (motsatt UiO, der ett rettsområde
dominerer). Boka speiler den nesten faste DEL 1-malen — **1 avtale + 1 kjøp + 1 arbeidsrett +
1 selskapsrett + 1 pengekrav + 1 bærekraft** — ved å gi hver søyle en egen del med
**regelkapitler → typetilfellekapittel**, og ved å legge **to spor i hvert kapittel**:

- **Spor A — praktikumstrening:** korte, selvstendige typetilfeller med **gitt delspørsmål**,
  modell-løsning strukturert **hjemmel → vilkår → subsumsjon på plantede fakta → konklusjon**,
  + eksplisitt **må-punkter / pluss-punkter / feller**-fasit.
- **Spor B — flervalgsbank:** rikelig med flervalg per søyle som trener **hjemmel-vs-utfall-
  skillet** og de faste distraktorene (analysens §5). Siden **40 % av karakteren er flervalg**
  er dette både pedagogikk og eksamenstrening i ett — et BI-unikt krav.

Rekkefølgen er pedagogisk: eksamenskart + de tre håndverksmodulene (hjemmelvalg/subsumsjon,
flervalg, lovvalg-åpningsfelle) først (Del 0), deretter de seks søylene i den rekkefølgen
DEL 1 selv bruker (avtale → kjøp → arbeid → selskap → pengekrav → bærekraft), og til slutt
samlet **eksamenstrening** i 60/40-format (6 praktikum + flervalg). **Vektingen er bevisst
jevn** — hver søyle får 4–5 kapitler; **kjøpsrett får ett ekstra (7 kap.)** fordi det er
fagets marginale tyngdepunkt (5/5, ofte 2 oppgaver, og lovvalget er selve nøkkelferdigheten).

| Del | Innhold (sectionName) | Kap. | Begrunnelse (gjenganger-score av 5 sett 2023–2025) |
|---|---|---|---|
| **Del 0** | Eksamenskart og eksamenshåndverk | 4 | DNA-obligatorisk. To eksamensspor må trenes (praktikum + flervalg). Tre håndverksmoduler: (0.2) hjemmelvalg + subsumsjon på plantede fakta; (0.3) **flervalgshåndverket — hjemmel-vs-utfall** (BI-unikt, 40 %); (0.4) **lovvalg-åpningsfellen** (kjl./fkjl./digitalytelse/leie/angrerett — fast åpningsgrep). |
| **Del 1** | Avtalerett: inngåelse, binding og ugyldighet | 5 | Avtalerett **5/5** — alltid minst én oppgave. Inngåelse/binding (formfrihet, signeringsforbehold, «kommet frem») dominerer DEL 1; ugyldighet (§§ 31/33/36, umyndighet) mest i flervalg. |
| **Del 2** | Kjøpsrett: lovvalg, mangel, reklamasjon, beføyelser, kontrollansvar | 7 | **Fagets tyngdepunkt, 5/5** (ofte 2 oppgaver). **Lovvalget er den faste åpningsfellen**; mangel, reklamasjonsfrister, beføyelser med vesentlighetskrav og kontrollansvarets fire vilkår (dobbelt hindringsfritak) bærer flest oppgaver/flervalg totalt. Størst del. |
| **Del 3** | Arbeidsrett: midlertidig, oppsigelse, avskjed, overtid | 5 | Arbeidsrett **5/5** — én oppgave hvert sett. Midlertidig ansettelse (§ 14-9 🔶), saklig oppsigelse/nedbemanning (§ 15-7), avskjed (§ 15-14), overtid (§ 10-6). |
| **Del 4** | Selskapsrett: selskapsformer, styre, forkjøpsrett, kjønnsrepresentasjon | 5 | Selskapsrett **5/5** (V2023 hadde 2). Forkjøpsrett (§§ 4-19/4-23 🔶) + styre/representasjon (daglig leder vs. styret) + styrebehandling/protokoll + kjønnsrep. (§ 6-11 a 🔶) dominerer. |
| **Del 5** | Pengekrav og foreldelse: foreldelse, motregning, regress, forsinkelsesrente | 5 | Pengekrav & foreldelse **5/5** (V2023 hadde 2). Foreldelse + fristavbrudd (erkjennelse, ikke purring), motregning/cesjon, regress/solidaransvar, forsinkelsesrente. |
| **Del 6** | Bærekraft og ansvarlig næringsliv | 4 | **Stigende trend, 4/5** — fast i alle fire nyeste sett, fraværende bare i V2023. Åpenhetsloven (aktsomhet + innsyn «enhver»), offentlige anskaffelser, samfunnsansvar i årsberetning/EU-taksonomi. **Prioriter opp** — forvent det på kommende sett. |
| **Del 7** | Eksamenstrening: praktikum og flervalg (60/40) | 4 | DNA-obligatorisk sluttdel: hjemmelvalg-/flervalg-drill + **3 komplette øvingseksamener i eksakt 60/40-format (6 praktikum + 12 flervalg)** med modell-løsninger og felle-lister. Randstoffet erstatning utenfor kontrakt får kort «bør kjenne til»-plass her. |

**Prioritetsklassene** (fra analysens §7) styrer oppgavemengde og dybde:
- **perfekt** = «må beherskes perfekt» (bærer eksamen; ~5/5 sett)
- **kunne** = «må kunne» (differensierer)
- **kjenne** = «bør kjenne til» (lav frekvens; kortest dekning)

**Gjennomgående byggekrav** (gjelder ALLE kapitler, gjentas ikke per kapittel):
- Hvert kapittel har `tip`-blokk **«Eksamensvinkel»** (hvor ofte/med hvilken vekt søylen
  testes, i praktikum vs. flervalg) og `warning`-blokk **«Typiske feil»** (fra analysens §5).
- Hvert kapittel har **begge spor**: `example`-blokker for **Spor A** (praktikumstrening med
  gitt delspørsmål) og en `exercise`- eller `example`-basert **Spor B — flervalgsbank**
  (flervalg trenet på hjemmel-vs-utfall). Flervalg føres i staging med **`options[0]` = riktig
  svar** (runtime stokker), og **distraktorene parer bevisst rett utfall med feil hjemmel
  (eller omvendt)** — begge må stemme (alt-eller-intet).
- Regel- og typetilfellekapitler avsluttes med `collapsible` **«Paragraf- og hjemmelregister»**
  — hurtigoppslag for de §§ og hjemler kapitlet bruker (jus-analogen; **ingen domsregister** —
  faget er ikke domsdrevet).
- Hvert delkapittel som bruker paragraf-/vilkårsapparat får en `collapsible` **«Paragraf- og
  begrepsliste»** rett etter Forkunnskaper (jus-analogen til symbol-/formellista) — forklarer
  alle sentrale bestemmelser og faguttrykk i delkapitlet (f.eks. «kontrollansvar» = det
  tilnærmet objektive erstatningsgrunnlaget i kjl. § 27; «relativ reklamasjonsfrist» = plikt
  til å reklamere innen rimelig tid etter at mangelen ble/burde blitt oppdaget; «virkelig
  verdi» = aksjens reelle omsetningsverdi som løsningssum).
- Kapitler berørt av 🔶-flaggene (jf. §1.2) har en **«Endret/gjeldende lov»-boks** (`tip` eller
  `collapsible`): kort hva som gjaldt før, hva som gjelder nå, hvorfor eldre besvarelser bommer.
- **Subsumsjonen på plantede fakta er kongen.** Fordi Lovdata Pro er åpen gir regelgjengivelse
  tilnærmet null; poengene ligger i å knytte vilkårene til faktums plantede detaljer
  (næringsdrivende vs. forbruker, «avtalt» vs. «tatt sikte på», forfallsdatoer,
  reklamasjonsintervaller, beløp). Innprentes i hvert kapittel.
- **Riktig hjemmelvalg først.** Feil lovvalg (kjøpsrett) eller feil hjemmel forplanter seg
  gjennom hele drøftelsen. **Kumulative vilkår drøftes hver for seg** (særlig kontrollansvarets
  fire vilkår, avskjeds-/oppsigelsesvilkårene, mangelsvilkårene).
- Oppgavene følger sjangrene fra analysen §3: korte, **selvstendige** praktikum med **gitt
  delspørsmål** («Er det inngått bindende avtale?», «Kan Arne heve kjøpet?», «Er kravet
  foreldet?»), disponert **problemstilling → hjemmel → rettsregel (kun de relevante vilkårene)
  → subsumsjon → klar konklusjon**, med fasit merket **må / pluss / felle**. Stigende
  vanskelighet som ender på eksamensnivå.
- Boka bygges rundt **gjengangeruniverset** (Peder Ås, Marte Kirkerud, Kari, «Lillevik» med
  lokale foretak) for gjenkjennelse — men **ALLE faktum, parter, virksomheter, bransjer, beløp
  og datoer er nyskrevne** (opphavsrett; ingen ordrett gjenbruk av eksamensfakta).
- **Alle paragrafhenvisninger merket *(verifiser)*** slås opp mot gjeldende Lovdata i fase 6 av
  en obligatorisk **Lovdata-verifikatør** (se §9); 🔶-punktene sjekkes særskilt.

---

## 3. Kapitler

### DEL 0 — Eksamenskart og eksamenshåndverk

---

#### Kapittel 0.1: Eksamenskartet — slik testes JUR 3420
- **id:** `jur3420-bi-0-1` · **number:** 0.1 · **estimatedMinutes:** 30 · **prerequisites:** ingen
- **Kapitteltype:** eksamenskart
- **description:** Hva eksamen faktisk er: 5 timers skriftlig skoleeksamen, todelt 60/40 (DEL 1 seks praktikum, DEL 2 flervalg), Lovdata Pro åpen, A–F — hvilke seks søyler som testes hvor ofte, og hva som antas å skille A fra C fra E.
- **Eksamensbelegg:** Hele empirien 2023–2025 (5 sett). Presenter: (a) formen — 5 t skoleeksamen, 100 %, A–F; **fra H2023 stabil todeling 60/40** (DEL 1 seks praktikum med eksplisitte delspørsmål; DEL 2 flervalg, ett riktig, ingen begrunnelse); V2023 var overgangsform (ren praktikum, 10 likt-tellende delspørsmål, alle hjelpemidler); hjelpemidler H2023→V2025 lovsamling + Lovdata Pro; (b) **jevn seks-søyle-fordeling:** avtalerett 5/5, kjøpsrett 5/5 (tyngst), arbeidsrett 5/5, selskapsrett 5/5, pengekrav & foreldelse 5/5, bærekraft 4/5 (stigende); erstatning utenfor kontrakt 1/5 (randstoff); (c) **«én oppgave per søyle»-malen** (avtale + kjøp + arbeid + selskap + pengekrav + bærekraft) som nesten garantert DEL 1-struktur; (d) at flervalg (DEL 2) tester de **samme** seks søylene, men med tyngde på hjemmelkjennskap og distraktor-feller.
- **Regelkontrakt:** Ingen materielle regler — men frekvenstabellen (analysens §2) gjengis som studentens prioriteringskart, og seks-søyle-aksen etableres som bokas ryggrad.
- **Metodepoenger:** Boka har **to eksamensspor** — praktikum (60 %) og flervalg (40 %) — som må trenes hver for seg. Ingen søyle kan nedprioriteres; bredde slår dybde. Med Lovdata åpen er avskrift verdiløst — poeng for hjemmelvalg + subsumsjon. Kalibrering: økonomistudenter, ikke jusstudenter — korrekt hovedhjemmel + fornuftig subsumsjon er ambisjonsnivået.
- **Typiske feil:** Å lese boka som pensumdekning i stedet for eksamenstrening; å spisse seg på én søyle og forsømme de andre; å nedprioritere flervalgssporet (det er 40 %); å bruke ressurser på erstatning utenfor kontrakt (1/5).
- **Kvote:** quiz 12 · flashcards 10

---

#### Kapittel 0.2: Praktikumshåndverket — hjemmelvalg og subsumsjon på plantede fakta
- **id:** `jur3420-bi-0-2` · **number:** 0.2 · **estimatedMinutes:** 55 · **prerequisites:** `jur3420-bi-0-1`
- **Kapitteltype:** metode
- **description:** Slik bygges en JUR 3420-praktikumsbesvarelse når delspørsmålet er GITT: gå rett på riktig hjemmel, sett opp bare de relevante vilkårene, og la subsumsjonen på faktums plantede detaljer bære svaret. Fordi Lovdata er åpen straffes gjengivelse — belønnes anvendelse.
- **Eksamensbelegg:** Generalinstruksen på hvert sett: «Ved vurderingen blir det lagt vekt på **riktig lovanvendelse og rettslige vurderinger**.» Praktikumene stiller **eksplisitte delspørsmål** — problemidentifikasjonen er altså **gitt** (til forskjell fra UiO-praktikum), noe som senker metodeterskelen og flytter tyngden til hjemmelvalg + subsumsjon. Faktaene er **«plantet»**: datoer, hvem som er profesjonell/forbruker, om noe er «avtalt» kontra bare «tatt sikte på», beløp, forfallstidspunkter.
- **Regelkontrakt (metoderegler, utledet av oppgaveinstruksene):**
  1. **Delspørsmålet er gitt** — bruk det som problemstilling; ikke bruk tid på å utlede tvistepunkter kandidaten ikke er bedt om.
  2. **Riktig hjemmel først** — velg lov + paragraf. I kjøpsrett er **lovvalget** alltid første grep (kap. 0.4).
  3. **Kort rettsregel** — bare de vilkårene delspørsmålet aktualiserer; ikke skriv av loven (Lovdata er åpen).
  4. **Subsumsjon — tyngst vektet** — hvert vilkår mot faktums **plantede** detaljer. Ved **kumulative** vilkår: drøft hvert for seg.
  5. **Klar konklusjon** på det gitte spørsmålet.
  6. **Fang de plantede detaljene:** at «Storkjøkken AS» er næringsdrivende (→ kjl., ikke fkjl.), at en frist er «avtalt» og ikke bare «tatt sikte på», forfallsdatoer, tidsintervaller for reklamasjon/foreldelse — dette ER subsumsjonsmaterialet.
- **Spor A — praktikumstrening:** 2 `example`-blokker: (a) en kort oppgave med gitt delspørsmål → vist hjemmelvalg → subsumsjon på de plantede detaljene → konklusjon; (b) samme spørsmål besvart to ganger — én gang som ren lovavskrift (verdiløst med Lovdata åpen), én gang med faktumnær subsumsjon — A/C-skillet visualisert.
- **Spor B — flervalgsbank:** 6–8 flervalg som trener å **plukke riktig hjemmel** til et kort faktum (introduksjon til hjemmel-vs-utfall; utdypes i 0.3).
- **Metodepoenger:** Subsumsjonen er kongen. Kort om det klare, dybde i tvilspunktene. Riktig hjemmelvalg forplanter seg. De plantede detaljene er lagt der med vilje — bruk dem.
- **Typiske feil:** Å skrive av lovteksten i stedet for å subsumere; å overse et plantet faktum (profesjonell/forbruker, «avtalt»/«tatt sikte på», en dato); å slå kumulative vilkår sammen; å drøfte mer enn delspørsmålet ber om.
- **Kvote:** quiz 16 · flashcards 14

---

#### Kapittel 0.3: Flervalgshåndverket — hjemmel-vs-utfall og distraktorlogikk
- **id:** `jur3420-bi-0-3` · **number:** 0.3 · **estimatedMinutes:** 45 · **prerequisites:** `jur3420-bi-0-1`
- **Kapitteltype:** metodemodul (BI-unik — 40 % av eksamen)
- **description:** Slik løser du DEL 2: flervalg er **alt-eller-intet på hjemmel** — både riktig paragraf OG riktig utfall må stemme. Distraktorene er konstruert som **hjemmel-feller**: rett konklusjon med feil paragraf, eller omvendt. Denne modulen etablerer flervalgsspråket som gjenbrukes i hvert kapittels Spor B.
- **Eksamensbelegg:** DEL 2 teller **40 %** (fra H2023). Kort faktum + spørsmål + typisk 4 alternativer, ett riktig, ingen begrunnelse. Alternativene parer f.eks. «avtl. § 33 → banken må ikke endre» mot «avtl. § 36 → banken må ikke endre» (samme utfall, ulik hjemmel) — kandidaten må beherske begge samtidig. Ingen UiO-jus har dette. Prioritetsklasse: **perfekt** (metode).
- **Regelkontrakt (flervalgsverktøyet, ikke materiell rett):**
  1. **To akser samtidig:** hvert alternativ har en **hjemmel** (paragraf) og et **utfall** (konklusjon). Riktig svar krever at BEGGE stemmer.
  2. **Distraktortypene:** (a) rett utfall + feil hjemmel; (b) feil utfall + rett hjemmel; (c) rett hjemmel og utfall, men feil vilkårsanvendelse; (d) plausibel nabolov (fkjl. der kjl. gjelder; avtl. § 36 der § 33 gjelder; angrerettloven der den ikke gjelder).
  3. **Halvveis rett gir null** — «rett følelse for utfallet» uten rett hjemmel er verdiløst.
  4. **Regnefeltene:** enkelte flervalg krever **beregning** (siste reklamasjonsfrist fra en dato, om et krav er foreldet, forsinkelsesrentens startdag) — ikke bare hjemmelkjennskap.
  5. **Staging-format:** i quiz-staging er **`options[0]` alltid riktig** (runtime stokker); distraktorene skal aktivt pare rett utfall med feil hjemmel.
- **Spor A/B (kombinert her):** 3–4 `example`-blokker som **plukker fra hverandre et flervalg**: vis alle fire alternativer, marker hjemmel + utfall i hvert, og forklar hvorfor tre er feil (hvilken akse svikter). En egen `example` viser et **regne-flervalg** (fristberegning). Resten av kapitlet er ren flervalgsbank.
- **Metodepoenger:** Les alltid hjemmel OG utfall i hvert alternativ. Se etter nabolov-distraktoren. Ved regne-flervalg: regn ut svaret før du ser på alternativene. Elimineringsstrategi: stryk alternativer med feil hjemmel selv om utfallet lokker.
- **Typiske feil:** Å velge på utfallsfølelse uten å sjekke hjemmelen; å falle for nabolov-distraktoren (fkjl./kjl.; § 36/§ 33; angrerett); å gjette på regne-flervalg uten å regne; å tro at «nesten riktig» gir delpoeng (det gir null).
- **Kvote:** quiz 18 · flashcards 12

---

#### Kapittel 0.4: Lovvalg-åpningsfellen — kjl. / fkjl. / digitalytelse / leie / angrerett
- **id:** `jur3420-bi-0-4` · **number:** 0.4 · **estimatedMinutes:** 50 · **prerequisites:** `jur3420-bi-0-2`
- **Kapitteltype:** metodemodul (fagets faste åpningsfelle) 🔶
- **description:** Den viktigste sorteringsøvelsen i kjøpsretten — og en fast felle i både praktikum og flervalg: hvilken lov gjelder for kontrakten? Feil valg mellom **kjøpsloven, forbrukerkjøpsloven, digitalytelsesloven, leie/tjeneste** og **angrerettloven** forplanter seg gjennom hele drøftelsen. Modulen brukes i hele Del 2.
- **Eksamensbelegg:** «Første grep i kjøpsrett er alltid lovvalg» (analysens §3.1/§4). Fast åpningsfelle i praktikum (næringsdrivende vs. forbruker) og i flervalg (V2024 musikktjeneste → digitalytelse; H2024 reinsdyr/gårdsbakeri-PC → angrerett gjelder ikke; «hobby»-grensen). Prioritetsklasse: **perfekt** (metode + materiell nøkkel).
- **Regelkontrakt (virkeområde-kartet):**
  - **Kjøpsloven (1988) § 1** — kjøp av ting mellom parter der **ikke** begge kjøpsrettslige forbrukervilkår er oppfylt; **næringskjøp** og salg mellom private går her. Deklaratorisk (§ 3).
  - **Forbrukerkjøpsloven (2002) § 1** 🔶 — gjelder **bare** når kjøper er **forbruker** (kjøper hovedsakelig til privat bruk) OG selger er **næringsdrivende**. Preseptorisk (kan ikke fravikes til forbrukerens ugunst). *(verifiser forbrukerdefinisjon og næringsselger-vilkåret + 2024-endringene.)*
  - **Digitalytelsesloven (2022)** 🔶 — **digitale ytelser/abonnement** (strømming, programvare, digitalt innhold) — avgrenser mot vare-kjøpslovene. *(verifiser virkeområde.)*
  - **Leie/tjeneste** — **faller utenfor begge kjøpslover** (leie er ikke kjøp; tjeneste går på egne regler/håndverkertjenesteloven). Fella: å bruke kjl./fkjl. på en leie- eller tjenesteavtale.
  - **Angrerettloven** — gjelder **bare forbruker mot næringsdrivende ved fjernsalg/utenom fast forretningssted** — IKKE salg mellom private, IKKE ved næringskjøp, IKKE ved «hobby»-kjøp. Mest som **avgrensningsfelle**.
- **Spor A — praktikumstrening:** 2 `example`-blokker: (a) et faktum der partsstatus (næringsdrivende vs. forbruker) avgjør kjl. vs. fkjl., og valget endrer reklamasjonsfrist og preseptoritet; (b) en avtale som ser ut som kjøp, men er leie/tjeneste/digital ytelse → riktig lov er en annen.
- **Spor B — flervalgsbank:** 8–10 flervalg som tester lovvalget alene: gitt et kort faktum, hvilken lov gjelder? Distraktorene parer rett utfall med feil lov (fkjl. der kjl. gjelder; angrerett der den ikke gjelder; digitalytelse vs. kjl.).
- **Metodepoenger:** Avklar **alltid** lovvalget først. Sjekk to ting: (1) hva slags ytelse (vare/digital/leie/tjeneste)? (2) hvem er partene (forbruker + næringsdrivende → fkjl.; ellers kjl.)? Angrerett krever fjernsalg forbruker–næringsdrivende. Lovvalget styrer preseptoritet, frister og beføyelser.
- **Typiske feil:** Å bruke fkjl. der begge er næringsdrivende (eller motsatt); å overse at leie/tjeneste/digital ytelse faller utenfor kjøpslovene; å tro angrerett gjelder mellom private, ved næringskjøp eller ved «hobby»-kjøp.
- **Kvote:** quiz 16 · flashcards 16

**Prøve-kvote Del 0:** 4 prøver (hjemmelvalg-drill på korte plantede faktum; subsumsjon-vs-avskrift-øvelse (A/C-kontrast); flervalg-hjemmel-vs-utfall-drill med distraktoranalyse; lovvalg-drill kjl./fkjl./digitalytelse/leie/angrerett).

---

### DEL 1 — Avtalerett: inngåelse, binding og ugyldighet (score 5/5)

---

#### Kapittel 1.1: Avtaleinngåelse og binding — tilbud, aksept og formfrihet
- **id:** `jur3420-bi-1-1` · **number:** 1.1 · **estimatedMinutes:** 50 · **prerequisites:** `jur3420-bi-0-2`
- **Kapitteltype:** regel
- **description:** Når foreligger en bindende avtale? Tilbud og aksept (avtl. §§ 2–9), formfrihet som hovedregel (NL 5-1-2), «kommet frem»-regelen (avtl. § 7) og akseptfrist — porten inn i hele forretningsjussen.
- **Eksamensbelegg:** Avtaleinngåelse/binding er det hyppigste DEL 1-avtaletemaet (avtalerett 5/5; nesten alltid *inngåelse/binding*). Fella «muntlig avtale binder ikke» (H2024 reinsdyr, V2023 Invest AS). Fundament for ugyldighet (1.3–1.4) og selskapsbinding (Del 4). Prioritetsklasse: **perfekt**.
- **Regelkontrakt:** **Avtaleloven (1918) §§ 2–9** — tilbud og aksept, **akseptfrist** (§ 2/§ 3), for sen/avvikende aksept som nytt tilbud (§ 6), **§ 7** tilbakekall (bundet når tilbudet er «kommet frem» til kunnskap). **NL 5-1-2** — utgangspunktet om **avtalefrihet og formfrihet**: en muntlig avtale binder; **skriftlighet kreves bare når lov eller partsavtale sier det**. Grensen mot uforpliktende forhandlinger. *(verifiser leddstruktur avtl. §§ 2–9 og NL 5-1-2.)*
- **Spor A — praktikumstrening:** Minipraktikum med gitt delspørsmål «Er det inngått bindende avtale?»: en muntlig avtale i et forhandlingsmøte (binder tross ingen signatur — NL 5-1-2); avvikende aksept som nytt tilbud (§ 6).
- **Spor B — flervalgsbank:** flervalg om «kommet frem» (§ 7), akseptfrist, formfrihet vs. skriftlighetskrav — distraktorer som parer rett utfall med feil paragraf.
- **Metodepoenger:** Avklar FØRST om avtale er inngått før mislighold/ugyldighet drøftes. Utgangspunktet er formfrihet — muntlig binder. «Kommet frem» ≠ «blitt lest».
- **Typiske feil:** Å tro muntlig avtale ikke binder; å forutsette binding uten å prøve tilbud/aksept; å blande manglende avtale (ingen binding) med ugyldighet (binding, men angripelig).
- **Kvote:** quiz 18 · flashcards 18

---

#### Kapittel 1.2: Signeringsforbehold og forhandlinger — når forbeholdet avskjærer binding
- **id:** `jur3420-bi-1-2` · **number:** 1.2 · **estimatedMinutes:** 40 · **prerequisites:** `jur3420-bi-1-1`
- **Kapitteltype:** regel/typetilfelle
- **description:** Det typiske BI-tilfellet: partene forhandler og er «enige om det meste», men har tatt et **signeringsforbehold** («bindende avtale først ved signering»). Hvordan forbeholdet i seg selv avskjærer binding, og hvordan man skiller reelle forbehold fra tomme formuleringer.
- **Eksamensbelegg:** Signeringsforbehold-fella (H2024/V2025-flervalg kjøleskap). Ofte flervalg, men også praktikum. Prioritetsklasse: **perfekt** (fast avtalefelle).
- **Regelkontrakt:** Har partene avtalt at «bindende avtale først foreligger ved signering», **avskjærer forbeholdet i seg selv binding** — selv om de ellers er enige (ulovfestet + avtl. §§ 2–9, tolkning av partenes utsagn). Motsatt: en uforbindtlig formulering («vi tar sikte på …») er ikke i seg selv et bindende løfte. Grensen mot berettiget forventning/løftevirkning. *(verifiser at signeringsforbehold behandles som bindende avskjæring.)*
- **Spor A — praktikumstrening:** Minipraktikum med gitt delspørsmål: partene er enige, men e-postene sier «endelig avtale ved signert kontrakt» — er de bundet? (Nei — forbeholdet avskjærer.) Variant: «tatt sikte på» vs. «avtalt» (plantet ordvalg).
- **Spor B — flervalgsbank:** flervalg der forbeholdet er plantet; distraktorer som ignorerer forbeholdet og konkluderer med binding.
- **Metodepoenger:** Les partenes ordvalg nøye — «avtalt» vs. «tatt sikte på» er plantet subsumsjonsmateriale. Et signeringsforbehold avskjærer binding uansett enighet ellers.
- **Typiske feil:** Å konkludere med binding tross et signeringsforbehold; å lese «tatt sikte på» som et bindende løfte; å blande forbehold med ugyldighet.
- **Kvote:** quiz 14 · flashcards 12

---

#### Kapittel 1.3: Ugyldighet I — tilblivelsesmangler (tvang, svik, utnyttelse, uredelighet)
- **id:** `jur3420-bi-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `jur3420-bi-1-1`
- **Kapitteltype:** regel
- **description:** De klassiske tilblivelsesmanglene: tvang (avtl. §§ 28–29), svik/uriktige opplysninger (§ 30), utnyttelse (§ 31) og uredelighet/god tro (§ 33) — feil ved **inngåelsen** som gjør avtalen ugyldig. Skillet tilblivelse/innhold/person.
- **Eksamensbelegg:** Ugyldighet testes mest i flervalg (§§ 31/33/36; skille tilblivelse/innhold/person). Fella: bruke § 36 (urimelighet) der problemet egentlig er tilblivelse (§§ 31/33) — H2023 leieavtale, V2024-flervalg fastrente. Prioritetsklasse: **kunne** (differensierer; hyppig i flervalg).
- **Regelkontrakt:** **Avtaleloven (1918)** — **§§ 28–29** tvang (grov/simpel); **§ 30** svik (uriktige opplysninger eller fortielse som virket inn); **§ 31** utnyttelse av annens nødstilstand/lettsinn/avhengighet ved betydelig misforhold; **§ 33** uredelighet — en viljeserklæring binder ikke om det ville stride mot **redelighet og god tro** å gjøre den gjeldende, fordi motparten kjente/måtte kjenne omstendigheter ved inngåelsen. **Skillet tilblivelses-/innholds-/personmangler.** Virkning: avtalen faller bort. *(verifiser §§ 28–33 og skillet.)*
- **Spor A — praktikumstrening:** Minipraktikum med gitt delspørsmål «Er avtalen ugyldig?»: selger fortiet en svakhet motparten ikke kunne oppdage (§ 33); en avtale inngått under press om å bryte et forretningsforhold (§ 29).
- **Spor B — flervalgsbank:** flervalg som tester **riktig ugyldighetsparagraf** — distraktorer parer rett «ugyldig/ikke ugyldig»-utfall med feil paragraf (§ 33 vs. § 36 vs. § 31), og tester skillet tilblivelse/innhold.
- **Metodepoenger:** Plasser feilen ved **inngåelsen** (tilblivelse) = ugyldighet. § 33 er en tilblivelsesnorm (kunnskap ved inngåelsen); ikke hopp til § 36. Årsakskravet (virket inn) er faktumnært.
- **Typiske feil:** Å bruke § 36 der § 33/§ 31 passer; å behandle all tvang likt (§ 28 sterk vs. § 29 svak); å overse årsakskravet; å blande svik § 30 og uredelighet § 33.
- **Kvote:** quiz 18 · flashcards 20

---

#### Kapittel 1.4: Ugyldighet II — urimelighet (§ 36) og umyndighet (vergemålsloven)
- **id:** `jur3420-bi-1-4` · **number:** 1.4 · **estimatedMinutes:** 45 · **prerequisites:** `jur3420-bi-1-3`
- **Kapitteltype:** regel
- **description:** Generalklausulen § 36 (urimelige avtalevilkår kan settes til side eller endres) og umyndighet som selvstendig ugyldighetsgrunn (vergemålsloven) — to grunner som ofte lokker som «redningsplanker» i flervalg.
- **Eksamensbelegg:** § 36 som felaktig redningsplanke (H2023, V2024-flervalg); umyndighet oversett som selvstendig grunn (H2024-flervalg 17-åring). Prioritetsklasse: **kunne**.
- **Regelkontrakt:** **Avtl. § 36** — et avtalevilkår kan settes helt/delvis til side eller **endres** dersom det ville virke **urimelig** å gjøre det gjeldende; vurderingen tar hensyn til avtalens innhold, partenes stilling, forholdene ved inngåelsen og senere inntrådte forhold; særlig vern for svakere part. **Vergemålsloven** — umyndiges (mindreåriges) avtalekompetanse er begrenset; avtale inngått av en umyndig utover det loven tillater er ugyldig (med restitusjon). *(verifiser vergemålslovens paragrafer om umyndiges avtaler + § 36-momentlista.)*
- **Spor A — praktikumstrening:** Minipraktikum: et gebyr-/ansvarsfraskrivelsesvilkår angripes som urimelig (§ 36 — total- eller vilkårssensur?); en 17-åring kjøper noe dyrt uten vergesamtykke (umyndighet).
- **Spor B — flervalgsbank:** flervalg der § 36 lokker, men riktig grunnlag er tilblivelse (§§ 31/33) eller tolkning; og flervalg om umyndighet.
- **Metodepoenger:** § 36 rammer **innholdet/etterfølgende** urimelighet; bruk den ikke der feilen ligger ved inngåelsen (§§ 31/33) eller er ren tolkning/feilskrift. § 36 kan **endre**, ikke bare stryke. Umyndighet er en selvstendig grunn.
- **Typiske feil:** Å bruke § 36 som redningsplanke der tilblivelse/tolkning er svaret; å overse umyndighet; å tro § 36 bare kan stryke (ikke endre).
- **Kvote:** quiz 16 · flashcards 16

---

#### Kapittel 1.5: Typetilfelle — «Er det inngått bindende avtale, og holder den?»
- **id:** `jur3420-bi-1-5` · **number:** 1.5 · **estimatedMinutes:** 45 · **prerequisites:** `jur3420-bi-1-1`, `jur3420-bi-1-3`
- **Kapitteltype:** typetilfelle
- **description:** Den samlede avtaleretts-oppgaven: er avtale inngått (binding/forbehold), og er den i så fall gyldig (ugyldighetsgrunner)? Malen som binder Del 1 sammen, med to selvstendige delspørsmål.
- **Eksamensbelegg:** Kombinerer binding (1.1–1.2) og ugyldighet (1.3–1.4) — speiler DEL 1s avtaleoppgave. Prioritetsklasse: **perfekt**.
- **Regelkontrakt (tvistepunkt-kartet):** (1) er avtale inngått (tilbud/aksept, formfrihet, signeringsforbehold)? (2) hvis ja — er den ugyldig (§§ 28–33 tilblivelse, § 36 innhold, umyndighet)? (3) virkning (binding / bortfall + restitusjon). Bindingsspørsmålet holdes fra ugyldighetsspørsmålet (to selvstendige spor).
- **Spor A — praktikumstrening:** Gjennomdrøftet variant (NYSKREVET — f.eks. Peder Ås inngår muntlig en leveranseavtale med et Lillevik-foretak under et forhandlingsmøte, med et omstridt signeringsforbehold, og påberoper subsidiært at han ble presset) med margkommentarer om uttelling per ledd. Øvelsesvarianter (3–4) flytter tvilen mellom binding, forbehold og ugyldighetsgrunn.
- **Spor B — flervalgsbank:** blandede avtaleretts-flervalg (binding + ugyldighet) på hjemmel-vs-utfall.
- **Metodepoenger:** Kjør binding før gyldighet. Ikke la de to sporene smelte sammen. Bruk plantede ordvalg («avtalt»/«tatt sikte på», forbeholdet, hva motparten visste).
- **Typiske feil:** Å slå binding og ugyldighet sammen; å hoppe over bindingsspørsmålet; å bruke feil ugyldighetsparagraf.
- **Kvote:** quiz 14 · flashcards 12

**Prøve-kvote Del 1:** 4 prøver (avtalebinding/formfrihet-minipraktikum «Er det inngått bindende avtale?»; signeringsforbehold + «avtalt»/«tatt sikte på»-drill; ugyldighet-flervalgsprøve (hjemmel-vs-utfall §§ 31/33/36 + umyndighet); samlet avtaleretts-typetilfelle binding + gyldighet).

---

### DEL 2 — Kjøpsrett: lovvalg, mangel, reklamasjon, beføyelser, kontrollansvar (score 5/5 — tyngst)

---

#### Kapittel 2.1: Lovvalget i praksis — kjl. vs. fkjl. vs. digitalytelse vs. leie/tjeneste
- **id:** `jur3420-bi-2-1` · **number:** 2.1 · **estimatedMinutes:** 50 · **prerequisites:** `jur3420-bi-0-4`
- **Kapitteltype:** regel 🔶
- **description:** Kjøpsrettens første grep, anvendt på faktum: hvilken lov gjelder? Bygger direkte på lovvalg-modulen (kap. 0.4) og trener partsstatus- og ytelsesvurderingen som styrer hele resten av kjøpsdrøftelsen.
- **Eksamensbelegg:** «Lovvalg kjl./fkjl./digitalytelse/leie er fast åpningsgrep» (kjøpsrett 5/5, tyngst). V2024 musikktjeneste (digitalytelse). Prioritetsklasse: **perfekt**. Krysslenkes til kap. 0.4.
- **Regelkontrakt:** **kjl. § 1** (næringskjøp + salg mellom private), **fkjl. § 1** 🔶 (forbruker + næringsselger, preseptorisk), **digitalytelsesloven** 🔶 (digitale ytelser), **leie/tjeneste** utenfor kjøpslovene. Konsekvensen av valget: preseptoritet, reklamasjonsfrister, hvilke beføyelsesregler som gjelder. **«Gjeldende lov»-boks** for fkjl.-2024-endringen. *(verifiser virkeområdene.)*
- **Spor A — praktikumstrening:** Minipraktikum med gitt delspørsmål «Hvilken lov regulerer kjøpet?»: to næringsdrivende (kjl.); forbruker kjøper av butikk (fkjl.); strømmeabonnement (digitalytelse); utstyrsleie (utenfor).
- **Spor B — flervalgsbank:** rikelig med lovvalg-flervalg (partsstatus + ytelsestype); distraktorer parer rett utfall med feil lov.
- **Metodepoenger:** Sjekk ytelsestype OG partsstatus. Feil lovvalg forplanter seg gjennom mangel, reklamasjon og beføyelser. Fkjl. er preseptorisk til forbrukerens gunst.
- **Typiske feil:** fkjl. der begge er næringsdrivende; overse leie/tjeneste/digital ytelse; blande partsstatus (hvem kjøper til hva).
- **Kvote:** quiz 20 · flashcards 20

---

#### Kapittel 2.2: Mangelsvurderingen — kjl. § 17 / fkjl. §§ 15–16, «som den er» og opplysningssvikt
- **id:** `jur3420-bi-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `jur3420-bi-2-1`
- **Kapitteltype:** regel 🔶
- **description:** Foreligger det en mangel? Den konkrete og abstrakte mangelsvurderingen (kjl. § 17 / fkjl. §§ 15–16), «vanlig god vare», opplysningssvikt (kjl. § 18), «som den er»-forbeholdet (kjl. § 19 / fkjl. § 17) og risikoens overgang.
- **Eksamensbelegg:** Mangel er kjernen i hver kjøpsoppgave (kjøpsrett 5/5). Fella: hoppe på heving uten å konstatere mangel først (V2024 medieomtale, H2024 snømann). Prioritetsklasse: **perfekt**.
- **Regelkontrakt:** **kjl. § 17** (1)/(2) — mangel når varen avviker fra avtalt eller fra det kjøper med rimelighet kunne forvente («vanlig god vare»); **§ 18** opplysninger gitt om varen; **§ 19** «som den er»-forbehold (mangel likevel ved uriktige/tilbakeholdte opplysninger eller vesentlig dårligere enn ventet). **fkjl. §§ 15–16** 🔶 (objektive/subjektive krav etter 2024-endringen), **§ 17** «som den er». **«Gjeldende lov»-boks** for fkjl. *(verifiser §§ 15–19 og 2024-endringene.)*
- **Spor A — praktikumstrening:** Minipraktikum «Foreligger det en mangel?»: en brukt maskin solgt «som den er» svikter langt under forventning (§ 19); selger fortiet en kjent feil (§ 18/§ 19).
- **Spor B — flervalgsbank:** flervalg om mangelsvilkåret og «som den er»; distraktorer parer «mangel/ikke mangel» med feil paragraf.
- **Metodepoenger:** Konstater **mangel før** beføyelse. «Som den er» stenger ikke for mangel ved opplysningssvikt eller vesentlig avvik. Bruk plantede fakta (hva ble sagt, hva kunne kjøper vente).
- **Typiske feil:** Å hoppe til heving uten å konstatere mangel; å tro «som den er» utelukker all mangel; å bruke gammel fkjl.-mangelsdoktrine.
- **Kvote:** quiz 20 · flashcards 22

---

#### Kapittel 2.3: Reklamasjon — relativ og absolutt frist, og fristberegning
- **id:** `jur3420-bi-2-3` · **number:** 2.3 · **estimatedMinutes:** 50 · **prerequisites:** `jur3420-bi-2-2`
- **Kapitteltype:** regel 🔶
- **description:** Reklamasjonens to frister: den **relative** («innen rimelig tid» etter at mangelen ble/burde blitt oppdaget) og den **absolutte** (2 år / 5 år ved ting som skal vare vesentlig lengre), samt hvordan man **regner ut** siste frist fra en gitt dato — et fast regne-flervalg.
- **Eksamensbelegg:** Reklamasjon er klassisk regne-felle (H2023 elsykkel-felg, V2024-flervalg bilkjøp). Blande relativ/absolutt frist eller regne fra feil starttidspunkt. Prioritetsklasse: **perfekt**.
- **Regelkontrakt:** **kjl. § 32** (reklamasjon, næringskjøp) og **fkjl. § 27** 🔶 (relativ frist + absolutt 2/5 år). **Relativ frist:** melding innen rimelig tid etter at mangelen ble eller burde blitt oppdaget. **Absolutt frist:** 2 år, eller 5 år ved ting som skal vare vesentlig lengre — regnet fra overtakelse/levering. Nøytral + spesifisert reklamasjon. *(verifiser fristene og startpunktene, særlig fkjl. § 27 etter 2024.)*
- **Spor A — praktikumstrening:** Minipraktikum «Er det reklamert i tide?»: en mangel oppdaget på dato X, reklamert på dato Y — beregn relativ og absolutt frist mot de plantede datoene.
- **Spor B — flervalgsbank:** **regne-flervalg** — gitt kjøpsdato og oppdagelsesdato, hva er siste reklamasjonsfrist? Distraktorer bruker feil startpunkt eller feil frist (2 vs. 5 år).
- **Metodepoenger:** Skill relativ fra absolutt frist; de løper uavhengig. Regn fra riktig startpunkt (overtakelse for absolutt; oppdagelse/burde-oppdaget for relativ). Datoene er plantet — regn.
- **Typiske feil:** Å blande relativ og absolutt frist; å regne fra feil dato; å bruke 2 år der 5 år gjelder (ting som skal vare lenge).
- **Kvote:** quiz 18 · flashcards 18

---

#### Kapittel 2.4: Kjøperens beføyelser — retting/omlevering, prisavslag og heving (vesentlighet)
- **id:** `jur3420-bi-2-4` · **number:** 2.4 · **estimatedMinutes:** 55 · **prerequisites:** `jur3420-bi-2-2`
- **Kapitteltype:** regel 🔶
- **description:** Beføyelseskaskaden ved mangel: retting/omlevering og **selgers retterett (avhjelp)**, prisavslag, og heving med **vesentlighetskravet** — hver med egne vilkår, holdt fra hverandre.
- **Eksamensbelegg:** Beføyelser i hver kjøpsoppgave; fellene: hoppe på heving uten vesentlighet, overse selgers retterett (V2023 O3), glemme skillet direkte/indirekte tap. Prioritetsklasse: **perfekt**.
- **Regelkontrakt:** **kjl. §§ 34/36** (retting/omlevering, **selgers rett til å avhjelpe** før omlevering), **§ 38** (prisavslag), **§ 39** (heving ved **vesentlig** kontraktsbrudd). **fkjl. §§ 29–30** 🔶 (avhjelp, forbrukers valgrett), **§ 32** (heving, «ikke uvesentlig»). Hver beføyelse har egne vilkår og terskel; heving krever vesentlighet, prisavslag ikke. *(verifiser paragrafene + fkjl.-2024.)*
- **Spor A — praktikumstrening:** Minipraktikum «Kan Arne heve kjøpet?»: mangel foreligger, men er bruddet vesentlig? Har selger krav på å avhjelpe først? Vis fire beføyelser med ulik terskel.
- **Spor B — flervalgsbank:** flervalg om vesentlighetskravet, selgers retterett og valg av beføyelse; distraktorer parer «kan heve/kan ikke heve» med feil hjemmel.
- **Metodepoenger:** Én beføyelse om gangen; ulik terskel gir ulikt utfall. Selgers retterett kan avskjære omlevering. Heving krever vesentlighet (kjl.) / «ikke uvesentlig» (fkjl.).
- **Typiske feil:** Å heve uten vesentlighet; å overse selgers retterett; å slå beføyelsene sammen; å konstatere heving uten mangel først.
- **Kvote:** quiz 20 · flashcards 20

---

#### Kapittel 2.5: Kontrollansvar og forsinkelse — kjl. § 27 og direkte/indirekte tap (§ 67)
- **id:** `jur3420-bi-2-5` · **number:** 2.5 · **estimatedMinutes:** 55 · **prerequisites:** `jur3420-bi-2-2`
- **Kapitteltype:** regel
- **description:** Det tilnærmet objektive erstatningsgrunnlaget: kontrollansvarets **fire kumulative vilkår** (kjl. § 27), «dobbelt hindringsfritak» ved underleverandørsvikt (§ 27 (2)), og skillet **direkte/indirekte tap** (§ 67) ved utmåling.
- **Eksamensbelegg:** Kontrollansvar (V2025 O1 underleverandørsvikt); direkte/indirekte tap ofte oversett. Prioritetsklasse: **perfekt**. Kumulative vilkår drøftes hver for seg.
- **Regelkontrakt:** **kjl. § 27** — selger fri for erstatning bare om (1) det foreligger en **hindring**, (2) **utenfor** selgers kontroll, (3) som han **ikke med rimelighet kunne ventes å ha tatt i betraktning** ved avtaleinngåelsen, og (4) **ikke med rimelighet kunne unngå/overvinne** følgene av — fire kumulative vilkår. **§ 27 (2) «dobbelt hindringsfritak»:** ved svikt hos **kontraktsmedhjelper/underleverandør** må vilkårene være oppfylt **både** for selger og for medhjelperen — kontrollsfæren strekker seg til egne kontraktsmedhjelpere. **§ 40** kontrollansvar ved mangel. **§ 67** skillet **direkte/indirekte tap** ved utmåling. *(verifiser § 27 (1)/(2), § 40 og § 67.)*
- **Spor A — praktikumstrening:** Minipraktikum «Er selger erstatningsansvarlig?»: en forsinkelse skyldes svikt hos en underleverandør — drøft de fire vilkårene for begge ledd (dobbelt hindringsfritak).
- **Spor B — flervalgsbank:** flervalg om kontrollansvarets vilkår, underleverandørsvikt og direkte/indirekte tap; distraktorer parer «ansvar/ikke ansvar» med feil vilkår.
- **Metodepoenger:** Fire kumulative vilkår — drøft hvert. Underleverandørsvikt er **ikke** automatisk ansvarsfritak (kontrollsfæren strekker seg dit). Skill direkte fra indirekte tap.
- **Typiske feil:** Å behandle underleverandørsvikt som fritak; å slå de fire vilkårene sammen; å glemme direkte/indirekte tap-skillet (§ 67).
- **Kvote:** quiz 20 · flashcards 22

---

#### Kapittel 2.6: Fravikelighet av kjøpsloven — grenser for ansvarsfraskrivelse
- **id:** `jur3420-bi-2-6` · **number:** 2.6 · **estimatedMinutes:** 40 · **prerequisites:** `jur3420-bi-2-1`
- **Kapitteltype:** regel
- **description:** Kjøpsloven er deklaratorisk (§ 3), men avtalefriheten har grenser: hvor langt kan partene fravike loven ved «som den er»-forbehold og ansvarsfraskrivelser (§§ 32/40/67), og hvor stopper avtalefriheten (NL 5-1-2)?
- **Eksamensbelegg:** Fravikelighet av kjøpsloven (V2025-flervalg §§ 32/40/67); avtalefrihet NL 5-1-2. Prioritetsklasse: **kunne** (differensierer; ofte flervalg).
- **Regelkontrakt:** **kjl. § 3** — lovens regler kan fravikes ved avtale (næringskjøp); **fkjl.** er derimot preseptorisk. Grenser: ansvarsfraskrivelser tolkes restriktivt og kan rammes av **avtl. § 36** eller lojalitetskrav; **§§ 32/40/67** kan fravikes innenfor grenser. **NL 5-1-2** avtalefrihet som utgangspunkt. *(verifiser §§ 3/32/40/67-fravikeligheten.)*
- **Spor A — praktikumstrening:** Minipraktikum: en vidtrekkende ansvarsfraskrivelse i en næringskontrakt — holder den? (Deklaratorisk utgangspunkt, men § 36-grense.)
- **Spor B — flervalgsbank:** flervalg om hva som kan fravikes i kjl. vs. hva som er preseptorisk i fkjl.; distraktorer parer rett utfall med feil paragraf.
- **Metodepoenger:** Kjl. deklaratorisk, fkjl. preseptorisk. Ansvarsfraskrivelser tolkes restriktivt og har en § 36-grense. Avtalefrihet er utgangspunktet i næringskjøp.
- **Typiske feil:** Å tro fkjl. kan fravikes til forbrukerens ugunst; å godta enhver ansvarsfraskrivelse i næringskjøp uten § 36-grense; å blande kjl.- og fkjl.-fravikelighet.
- **Kvote:** quiz 14 · flashcards 14

---

#### Kapittel 2.7: Typetilfelle — kjøpstvisten fra lovvalg til beføyelse
- **id:** `jur3420-bi-2-7` · **number:** 2.7 · **estimatedMinutes:** 50 · **prerequisites:** `jur3420-bi-2-1`, `jur3420-bi-2-4`
- **Kapitteltype:** typetilfelle
- **description:** Den komplette kjøpsoppgaven i BI-format: lovvalg → mangel → reklamasjon → beføyelse, hver som et selvstendig ledd — malen som binder Del 2 sammen.
- **Eksamensbelegg:** Speiler kjøpsoppgaven (kjøpsrett 5/5, ofte 2 oppgaver). Prioritetsklasse: **perfekt**.
- **Regelkontrakt (tvistepunkt-kartet):** (1) lovvalg (kjl./fkjl./digitalytelse/leie); (2) foreligger mangel (§ 17/§§ 15–16, «som den er»)? (3) er det reklamert i tide (relativ/absolutt)? (4) hvilken beføyelse (retting/prisavslag/heving med vesentlighet; ev. erstatning/kontrollansvar)? Hvert ledd holdes fra hverandre.
- **Spor A — praktikumstrening:** Gjennomdrøftet variant (NYSKREVET — f.eks. Marte Kirkerud kjøper en brukt industrimaskin til sitt Lillevik-bakeri, den svikter, spørsmål om lovvalg, mangel «som den er», reklamasjonsfrist og heving) med margkommentarer per ledd. Øvelsesvarianter (3–4) flytter tvilen mellom leddene (forbruker vs. næring; mangel vs. ikke; frist passert; vesentlig vs. ikke).
- **Spor B — flervalgsbank:** blandede kjøpsretts-flervalg som spenner over alle ledd; hjemmel-vs-utfall.
- **Metodepoenger:** Kjør leddene i rekkefølge; lovvalget styrer resten. Hvert ledd har egne vilkår. Datoene styrer reklamasjon.
- **Typiske feil:** Feil lovvalg som forplanter seg; hoppe over reklamasjon; heve uten vesentlighet; slå leddene sammen.
- **Kvote:** quiz 14 · flashcards 12

**Prøve-kvote Del 2:** 4 prøver (lovvalg + mangel-minipraktikum; reklamasjons-regneprøve (relativ/absolutt frist fra dato); beføyelser + kontrollansvar (vesentlighet, dobbelt hindringsfritak, direkte/indirekte tap); samlet kjøpstvist lovvalg→beføyelse + kjøpsretts-flervalgsbank).

---

### DEL 3 — Arbeidsrett: midlertidig, oppsigelse, avskjed, overtid (score 5/5)

---

#### Kapittel 3.1: Midlertidig vs. fast ansettelse — aml. § 14-9
- **id:** `jur3420-bi-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `jur3420-bi-0-2`
- **Kapitteltype:** regel 🔶
- **description:** Hovedregelen om fast ansettelse og de positive grunnlagene for midlertidighet (aml. § 14-9) etter at den generelle adgangen ble opphevet (2022) — og rettsvirkningen av ulovlig midlertidighet.
- **Eksamensbelegg:** Arbeidsrett 5/5 — midlertidig ansettelse er ett av de faste temaene. Fella: bruke den opphevede generelle adgangen. Prioritetsklasse: **perfekt**.
- **Regelkontrakt:** **aml. § 14-9** 🔶 — **fast ansettelse er hovedregelen**; midlertidig krever **positivt grunnlag** (arbeid av midlertidig karakter; vikariat; m.fl.). **Den generelle adgangen (tidl. bokstav f) er OPPHEVET (2022).** Rettsvirkning ved ulovlig midlertidighet: dom for fast ansettelse. **§ 14-5/§ 14-6** skriftlig arbeidsavtale (ordensforskrift, ikke gyldighetsvilkår). **«Endret lov»-boks:** før 2022 fantes generell adgang i inntil 12 mnd. — opphevet. *(verifiser § 14-9 leddstruktur/grunnlag og opphevelsesår.)*
- **Spor A — praktikumstrening:** Minipraktikum «Er den midlertidige ansettelsen lovlig?»: gjentatte «vikariater» som dekker et fast behov (realitet → fast); «midlertidig karakter»-ansettelse uten reelt grunnlag.
- **Spor B — flervalgsbank:** flervalg om lovlig grunnlag, den opphevede adgangen og rettsvirkning; distraktorer parer «lovlig/ulovlig» med feil grunnlag.
- **Metodepoenger:** Fast er hovedregelen; midlertidighet krever positivt grunnlag (ikke lenger generell adgang). Realitet foran betegnelse. Rettsvirkning = fast ansettelse.
- **Typiske feil:** Å bruke den opphevede generelle 12-månedersadgangen; å godta «vikariat»-etiketten uten realitet; å glemme rettsvirkningen; å tro manglende skriftlig avtale = ingen ansettelse.
- **Kvote:** quiz 18 · flashcards 20

---

#### Kapittel 3.2: Saklig oppsigelse og nedbemanning — aml. § 15-7
- **id:** `jur3420-bi-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `jur3420-bi-3-1`
- **Kapitteltype:** regel
- **description:** Saklighetskravet ved oppsigelse (aml. § 15-7): saklig grunn i virksomhetens/arbeidstakerens forhold, interesseavveining og utvelgelse ved nedbemanning (ansiennitet som moment).
- **Eksamensbelegg:** Arbeidsrett 5/5 — oppsigelse/nedbemanning er ett av de faste temaene. Prioritetsklasse: **perfekt**.
- **Regelkontrakt:** **aml. § 15-7** — oppsigelse må være **saklig begrunnet** i virksomhetens, arbeidsgivers eller arbeidstakers forhold; ved driftsinnskrenkning kreves saklig grunn + **interesseavveining** (arbeidsgivers behov mot arbeidstakers ulempe) og saklig **utvelgelse** (ansiennitet, kvalifikasjoner, sosiale forhold som momenter). Saksbehandling (drøfting, formkrav). *(verifiser § 15-7 leddstruktur og utvelgelseskretsen.)*
- **Spor A — praktikumstrening:** Minipraktikum «Er oppsigelsen saklig?»: nedbemanning der en ansatt med lang ansiennitet sies opp fremfor en nyere — saklig utvelgelse? Interesseavveiningen.
- **Spor B — flervalgsbank:** flervalg om saklighetskravet, utvelgelse og interesseavveining; distraktorer parer «saklig/usaklig» med feil moment.
- **Metodepoenger:** Saklig grunn + interesseavveining + saklig utvelgelse er selvstendige ledd. Ansiennitet er et moment, ikke en absolutt regel. Bruk plantede fakta (hvem, hvorfor, ansiennitet).
- **Typiske feil:** Å hoppe over interesseavveiningen; å behandle ansiennitet som absolutt; å blande oppsigelse (§ 15-7) og avskjed (§ 15-14).
- **Kvote:** quiz 18 · flashcards 20

---

#### Kapittel 3.3: Avskjed — aml. § 15-14
- **id:** `jur3420-bi-3-3` · **number:** 3.3 · **estimatedMinutes:** 40 · **prerequisites:** `jur3420-bi-3-2`
- **Kapitteltype:** regel
- **description:** Avskjedens strenge vilkår (aml. § 15-14): grovt pliktbrudd eller annet vesentlig mislighold — umiddelbar fratreden — og skillet fra oppsigelse.
- **Eksamensbelegg:** Arbeidsrett 5/5 — avskjed er en av variantene (midlertidig / oppsigelse / avskjed / overtid). Prioritetsklasse: **kunne**.
- **Regelkontrakt:** **aml. § 15-14** — arbeidsgiver kan avskjedige ved **grovt pliktbrudd eller annet vesentlig mislighold** av arbeidsavtalen; virkning: umiddelbar fratreden (ingen oppsigelsestid). Strengere terskel enn oppsigelse. Saksbehandling som ved oppsigelse. *(verifiser § 15-14 ordlyd og saksbehandlingshenvisning.)*
- **Spor A — praktikumstrening:** Minipraktikum «Var avskjeden berettiget?»: en ansatt begår et alvorlig tillitsbrudd — grovt nok til avskjed, eller «bare» oppsigelse? Subsidiært: vilkårene for oppsigelse.
- **Spor B — flervalgsbank:** flervalg om avskjedsterskelen vs. oppsigelse; distraktorer parer «berettiget/uberettiget» med feil hjemmel (§ 15-14 vs. § 15-7).
- **Metodepoenger:** Avskjed krever grovt pliktbrudd — høyere terskel enn oppsigelse. Drøft subsidiært om vilkårene for oppsigelse likevel er oppfylt.
- **Typiske feil:** Å bruke avskjedsterskelen på en ordinær oppsigelsessak; å blande § 15-14 og § 15-7; å glemme den subsidiære oppsigelsesvurderingen.
- **Kvote:** quiz 16 · flashcards 16

---

#### Kapittel 3.4: Arbeidstid og overtid — aml. § 10-6
- **id:** `jur3420-bi-3-4` · **number:** 3.4 · **estimatedMinutes:** 40 · **prerequisites:** `jur3420-bi-0-2`
- **Kapitteltype:** regel
- **description:** Overtidens vilkår (aml. § 10-6): «særlig og tidsavgrenset behov», grensene for overtid og overtidstillegget — og hvorfor tillegg ikke gjør ulovlig overtid lovlig.
- **Eksamensbelegg:** Arbeidsrett 5/5 — overtid er en av variantene. Prioritetsklasse: **kunne**. Fella: 40 %-tillegg ≠ lovlig overtid.
- **Regelkontrakt:** **aml. § 10-6** — overtid krever **«særlig og tidsavgrenset behov»** (ikke fast/planlagt merbelastning); grenser for antall timer; overtidstillegg **minst 40 %**. **Sentralt:** vilkårene vurderes **uavhengig av** kompensasjon — tillegget gjør ikke ulovlig overtid lovlig. *(verifiser § 10-6 leddnumre for vilkår og tillegg.)*
- **Spor A — praktikumstrening:** Minipraktikum «Er overtiden lovlig?»: fast pålagt «overtid» hver uke i en travel periode (mangler «tidsavgrenset behov»).
- **Spor B — flervalgsbank:** flervalg om overtidsvilkåret og tillegget; distraktorer parer «lovlig/ulovlig» med tilleggsargumentet.
- **Metodepoenger:** Vurder vilkårene uavhengig av tillegget. Fast merbelastning er ikke «tidsavgrenset behov».
- **Typiske feil:** Å konkludere at overtid er lovlig fordi tillegg gis; å behandle fast merbelastning som tidsavgrenset behov.
- **Kvote:** quiz 16 · flashcards 16

---

#### Kapittel 3.5: Typetilfelle — arbeidstvisten
- **id:** `jur3420-bi-3-5` · **number:** 3.5 · **estimatedMinutes:** 45 · **prerequisites:** `jur3420-bi-3-1`, `jur3420-bi-3-2`
- **Kapitteltype:** typetilfelle 🔶
- **description:** Den samlede arbeidsrettsoppgaven i BI-format: ett kort faktum med et gitt delspørsmål om ansettelsesform, oppsigelse, avskjed eller overtid — malen som binder Del 3 sammen.
- **Eksamensbelegg:** Speiler arbeidsoppgaven (5/5, én per sett). Prioritetsklasse: **perfekt**.
- **Regelkontrakt (tvistepunkt-kartet):** avhengig av delspørsmålet: (a) ansettelsesform (§ 14-9 🔶); (b) saklig oppsigelse/nedbemanning (§ 15-7); (c) avskjed (§ 15-14, subsidiært oppsigelse); (d) overtid (§ 10-6). Riktig hjemmel + vilkår + subsumsjon på plantede fakta.
- **Spor A — praktikumstrening:** Gjennomdrøftet variant (NYSKREVET — f.eks. Kari ansettes «midlertidig» ved et Lillevik-verksted, sies senere opp ved nedbemanning; spørsmål om ansettelsen var lovlig og om oppsigelsen er saklig) med margkommentarer. Øvelsesvarianter dekker avskjed og overtid.
- **Spor B — flervalgsbank:** blandede arbeidsretts-flervalg; hjemmel-vs-utfall.
- **Metodepoenger:** Velg riktig hjemmel til det gitte spørsmålet. Realitet foran betegnelse (ansettelsesform). Hold oppsigelse og avskjed fra hverandre.
- **Typiske feil:** Feil hjemmel (§ 15-7 vs. § 15-14); opphevet midlertidighetsadgang; overtidstillegg som lovliggjør.
- **Kvote:** quiz 14 · flashcards 12

**Prøve-kvote Del 3:** 4 prøver (midlertidig/fast ansettelse-minipraktikum § 14-9; saklig oppsigelse/nedbemanning § 15-7; avskjed vs. oppsigelse + overtid-drill; samlet arbeidstvist + arbeidsretts-flervalgsbank).

---

### DEL 4 — Selskapsrett: selskapsformer, styre, forkjøpsrett, kjønnsrepresentasjon (score 5/5)

---

#### Kapittel 4.1: Selskapsformer og ansvar — AS vs. ANS/DA, stiftelse
- **id:** `jur3420-bi-4-1` · **number:** 4.1 · **estimatedMinutes:** 45 · **prerequisites:** `jur3420-bi-0-2`
- **Kapitteltype:** regel
- **description:** Valget av selskapsform og ansvarsformen som følger: AS (begrenset ansvar) vs. ANS/DA (ubegrenset, personlig, solidarisk ansvar), stiftelse av AS (aksjeinnskudd før melding) og deltakers signaturrett i ANS.
- **Eksamensbelegg:** Selskapsrett 5/5. ANS-ansvar og signaturrett (nivå 2); AS-stiftelse. Prioritetsklasse: **kunne** (grunnlag for resten av Del 4).
- **Regelkontrakt:** **Aksjeloven** — AS: **begrenset ansvar** (aksjeeier hefter ikke personlig utover innskuddet); stiftelse (aksjeinnskudd før registrering). **Selskapsloven** — **ANS/DA**: deltakerne hefter **ubegrenset, personlig og solidarisk** (ANS) eller delt (DA); deltakers **signaturrett**. Skillet styrer ansvar og representasjon. *(verifiser selskapslovens ansvars- og signaturregler + aksjelovens stiftelsesregler.)*
- **Spor A — praktikumstrening:** Minipraktikum «Hvem hefter for gjelden?»: et ANS misligholder — hefter deltakerne personlig og solidarisk? En deltaker signerer en avtale (signaturrett)?
- **Spor B — flervalgsbank:** flervalg om ansvarsform (AS/ANS/DA) og signaturrett; distraktorer parer rett utfall med feil selskapsform/lov.
- **Metodepoenger:** Ansvarsformen følger selskapsformen: AS begrenset, ANS ubegrenset/solidarisk. Signaturrett i ANS følger av selskapsloven.
- **Typiske feil:** Å tro AS-eiere hefter personlig; å blande ANS (solidarisk) og DA (delt); å overse deltakers signaturrett.
- **Kvote:** quiz 18 · flashcards 18

---

#### Kapittel 4.2: Forkjøpsrett til aksjer — asl. §§ 4-19/4-23 og virkelig verdi
- **id:** `jur3420-bi-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `jur3420-bi-4-1`
- **Kapitteltype:** regel 🔶
- **description:** Aksjeeiernes forkjøpsrett ved eierskifte (asl. § 4-19), og løsningssummen til **virkelig verdi** når ikke annet er avtalt (§ 4-23) — med mindre vedtektene bestemmer noe annet.
- **Eksamensbelegg:** Selskapsrett 5/5 — forkjøpsrett dominerer (V2023 O7/O8, V2025 O5). Fella: overse at forkjøpsrett gjelder ved eierskifte og løses til virkelig verdi. Prioritetsklasse: **perfekt**.
- **Regelkontrakt:** **asl. § 4-19** 🔶 — aksjeeierne har **forkjøpsrett** ved eierskifte, med mindre **vedtektene** bestemmer annet; frister for å gjøre retten gjeldende. **§ 4-23** 🔶 — løsningssummen fastsettes til aksjenes **virkelige verdi** på innløsningstidspunktet hvis ikke annet er avtalt. *(verifiser §§ 4-19/4-23 leddstruktur, frister og verdsettelsestidspunkt.)*
- **Spor A — praktikumstrening:** Minipraktikum «Har de andre aksjeeierne forkjøpsrett?»: en aksjeeier selger til en utenforstående — utløses forkjøpsrett, og til hvilken pris (virkelig verdi vs. avtalt)?
- **Spor B — flervalgsbank:** flervalg om når forkjøpsrett utløses og hvordan verdien settes; distraktorer parer rett utfall med feil paragraf/verdsettelse.
- **Metodepoenger:** Forkjøpsrett gjelder ved eierskifte **med mindre vedtektene sier annet**. Løsningssum = virkelig verdi hvis ikke avtalt. Sjekk vedtektene (plantet fakta).
- **Typiske feil:** Å tro forkjøpsrett krever vedtektshjemmel (det er motsatt — utgangspunkt med mindre vedtektene fraviker); å bruke pålydende i stedet for virkelig verdi.
- **Kvote:** quiz 18 · flashcards 18

---

#### Kapittel 4.3: Styret og representasjon utad — daglig leder vs. styret
- **id:** `jur3420-bi-4-3` · **number:** 4.3 · **estimatedMinutes:** 50 · **prerequisites:** `jur3420-bi-4-1`
- **Kapitteltype:** regel
- **description:** Hvem binder selskapet? Styrets og daglig leders kompetanse utad (asl. §§ 6-30/6-32/6-33), grensen for daglig leders myndighet (daglig ledelse) og virkningen av myndighetsoverskridelse.
- **Eksamensbelegg:** Selskapsrett 5/5 — representasjon (H2023 O4: daglig leder binder ikke til stor avtale utenfor daglig ledelse). Prioritetsklasse: **perfekt**.
- **Regelkontrakt:** **asl. § 6-30** styret representerer selskapet utad; **§ 6-32** daglig leder representerer i saker som inngår i **den daglige ledelse** (ikke saker av uvanlig art eller stor betydning); **§ 6-33** virkningen av **myndighetsoverskridelse** (selskapet ikke bundet om medkontrahenten forsto/burde forstått overskridelsen). *(verifiser §§ 6-30/6-32/6-33.)*
- **Spor A — praktikumstrening:** Minipraktikum «Er selskapet bundet?»: daglig leder inngår en stor, uvanlig avtale uten styrevedtak — utenfor daglig ledelse; er selskapet bundet (god tro)?
- **Spor B — flervalgsbank:** flervalg om daglig leders vs. styrets kompetanse og overskridelse; distraktorer parer «bundet/ikke bundet» med feil paragraf.
- **Metodepoenger:** Daglig leder binder bare i **daglig ledelse**; uvanlige/store saker krever styret. Overskridelse binder ikke ved motpartens onde tro.
- **Typiske feil:** Å godta at daglig leder binder til en stor avtale utenfor daglig ledelse; å overse god tro-vurderingen ved overskridelse.
- **Kvote:** quiz 18 · flashcards 18

---

#### Kapittel 4.4: Styrebehandling, protokoll og kjønnsrepresentasjon
- **id:** `jur3420-bi-4-4` · **number:** 4.4 · **estimatedMinutes:** 45 · **prerequisites:** `jur3420-bi-4-3`
- **Kapitteltype:** regel 🔶
- **description:** Kravene til styrebehandling og protokoll (asl. §§ 6-19/6-25) og kjønnsrepresentasjonskravet (§ 6-11 a), som er utvidet fra børsnoterte ASA til større AS.
- **Eksamensbelegg:** Selskapsrett 5/5 — styrebehandling/protokoll (H2024 O5: muntlig praksis oppfyller ikke kravet); kjønnsrepresentasjon (V2024 O6: ikke bare ASA). Prioritetsklasse: **perfekt** (kjønnsrep. 🔶).
- **Regelkontrakt:** **asl. §§ 6-19/6-25** styrebehandling (møte/protokoll, flertallskrav) — «vi har styremøte hver dag»/muntlig praksis oppfyller **ikke** kravet til protokollert styrebehandling. **§ 6-11 a** 🔶 kjønnsrepresentasjon — **utvidet fra børsnoterte ASA til større AS** (terskelverdier innfaset). **«Gjeldende lov»-boks** for § 6-11 a. *(verifiser §§ 6-19/6-25 og § 6-11 a terskelverdier/innfasing.)*
- **Spor A — praktikumstrening:** Minipraktikum «Er styrevedtaket gyldig?»: et vedtak fattet i uformell praksis uten protokoll; et større AS uten kjønnsbalanse i styret.
- **Spor B — flervalgsbank:** flervalg om styrebehandlingskravet og kjønnsrep.; distraktorer parer rett utfall med feil terskel (bare ASA vs. større AS).
- **Metodepoenger:** Styrebehandling krever formell behandling + protokoll. Kjønnsrep. gjelder nå **større AS**, ikke bare ASA — sjekk terskelverdiene.
- **Typiske feil:** Å godta muntlig/uformell «styrebehandling»; å tro kjønnsrep. bare gjelder ASA; å bruke foreldede terskelverdier.
- **Kvote:** quiz 16 · flashcards 18

---

#### Kapittel 4.5: Typetilfelle — selskapstvisten
- **id:** `jur3420-bi-4-5` · **number:** 4.5 · **estimatedMinutes:** 45 · **prerequisites:** `jur3420-bi-4-2`, `jur3420-bi-4-3`
- **Kapitteltype:** typetilfelle 🔶
- **description:** Den samlede selskapsrettsoppgaven: forkjøpsrett ved eierskifte, styre/representasjon eller styrebehandling/kjønnsrep. — malen som binder Del 4 sammen.
- **Eksamensbelegg:** Speiler selskapsoppgaven (5/5). Prioritetsklasse: **perfekt**.
- **Regelkontrakt (tvistepunkt-kartet):** avhengig av delspørsmålet: (a) forkjøpsrett + virkelig verdi (§§ 4-19/4-23 🔶); (b) representasjon (daglig leder vs. styret, §§ 6-30/6-32/6-33); (c) styrebehandling/protokoll (§§ 6-19/6-25) + kjønnsrep. (§ 6-11 a 🔶). Riktig hjemmel + vilkår + subsumsjon.
- **Spor A — praktikumstrening:** Gjennomdrøftet variant (NYSKREVET — f.eks. Peder Ås vil selge sine aksjer i et Lillevik-AS til en utenforstående, mens daglig leder samtidig har inngått en stor avtale uten styrevedtak) med margkommentarer. Øvelsesvarianter dekker kjønnsrep. og styreprotokoll.
- **Spor B — flervalgsbank:** blandede selskapsretts-flervalg; hjemmel-vs-utfall.
- **Metodepoenger:** Velg riktig hjemmel til det gitte spørsmålet. Forkjøpsrett med mindre vedtektene fraviker; daglig leder binder bare i daglig ledelse; styrebehandling krever protokoll.
- **Typiske feil:** Feil hjemmel; ASA-bare kjønnsrep.; daglig leder binder stor avtale; pålydende i stedet for virkelig verdi.
- **Kvote:** quiz 14 · flashcards 12

**Prøve-kvote Del 4:** 4 prøver (selskapsform/ansvar/signaturrett-minipraktikum; forkjøpsrett + virkelig verdi §§ 4-19/4-23; representasjon + styrebehandling + kjønnsrep.-drill; samlet selskapstvist + selskapsretts-flervalgsbank).

---

### DEL 5 — Pengekrav og foreldelse: foreldelse, motregning, regress, forsinkelsesrente (score 5/5)

---

#### Kapittel 5.1: Foreldelse — fal. §§ 2/3/10
- **id:** `jur3420-bi-5-1` · **number:** 5.1 · **estimatedMinutes:** 50 · **prerequisites:** `jur3420-bi-0-2`
- **Kapitteltype:** regel 🔶
- **description:** Foreldelsens grunnregler: 3-årsfristen (fal. § 2), fristens start (§ 3) og den 1-årige tilleggsfristen ved unnskyldelig uvitenhet (§ 10) — med fristberegning som fast regne-felle.
- **Eksamensbelegg:** Pengekrav & foreldelse 5/5 — foreldelse er kjernen (V2023 O6, H2024 O3). Fella: overse tilleggsfristen; regne fra feil startpunkt. Prioritetsklasse: **perfekt**.
- **Regelkontrakt:** **foreldelsesloven** 🔶 — **§ 2** alminnelig frist **3 år**; **§ 3** fristen løper fra tidligste tidspunkt fordringshaveren kunne kreve oppfyllelse (forfall); **§ 10** **1-årig tilleggsfrist** ved unnskyldelig uvitenhet om kravet/skyldneren. *(verifiser §§ 2/3/10 og startpunktene.)*
- **Spor A — praktikumstrening:** Minipraktikum «Er kravet foreldet?»: et krav forfalt på dato X, søksmål/påkrav på dato Y — regn 3-årsfristen fra forfall; ev. tilleggsfrist.
- **Spor B — flervalgsbank:** **regne-flervalg** — gitt forfallsdato, er kravet foreldet? Distraktorer bruker feil startpunkt eller glemmer tilleggsfristen.
- **Metodepoenger:** 3 år fra forfall. Tilleggsfrist ved unnskyldelig uvitenhet. Datoene er plantet — regn fra riktig startpunkt.
- **Typiske feil:** Å regne fra feil startpunkt; å overse tilleggsfristen (§ 10); å blande foreldelse med reklamasjon.
- **Kvote:** quiz 18 · flashcards 18

---

#### Kapittel 5.2: Fristavbrudd — fal. §§ 14/15 (erkjennelse, ikke purring)
- **id:** `jur3420-bi-5-2` · **number:** 5.2 · **estimatedMinutes:** 45 · **prerequisites:** `jur3420-bi-5-1`
- **Kapitteltype:** regel 🔶
- **description:** Hva som avbryter foreldelsesfristen: **erkjennelse** (fal. § 14) og **rettslig skritt** (§ 15) — og hvorfor purring/inkassovarsel IKKE avbryter. Skyldnerens «betaler med en gang!» er erkjennelse og gir ny frist.
- **Eksamensbelegg:** Pengekrav & foreldelse 5/5 — fristavbrudd (H2024 O3, V2023 O6). Fella: tro at purring avbryter. Prioritetsklasse: **perfekt**.
- **Regelkontrakt:** **fal. § 14** — **erkjennelse** (skyldneren erkjenner kravet uttrykkelig eller ved handling, f.eks. delbetaling eller «jeg betaler straks») avbryter fristen og gir **ny 3-årsfrist**. **§ 15** — **rettslig skritt** (søksmål mv.) avbryter. **Purring/inkassovarsel avbryter IKKE.** *(verifiser §§ 14/15 og virkningen av erkjennelse.)*
- **Spor A — praktikumstrening:** Minipraktikum «Er kravet foreldet, eller ble fristen avbrutt?»: kreditor har purret flere ganger (avbryter ikke), men skyldneren skrev «beklager, jeg betaler med en gang» (erkjennelse → ny frist).
- **Spor B — flervalgsbank:** flervalg om hva som avbryter; distraktorer parer «foreldet/ikke foreldet» med feil avbruddsgrunn (purring vs. erkjennelse).
- **Metodepoenger:** Bare erkjennelse (§ 14) og rettslig skritt (§ 15) avbryter — ikke purring. Erkjennelse gir ny frist. Se etter erkjennelsen i faktum (den er plantet).
- **Typiske feil:** Å tro purring/inkassovarsel avbryter; å overse en erkjennelse i faktum; å glemme at erkjennelse gir ny frist.
- **Kvote:** quiz 16 · flashcards 16

---

#### Kapittel 5.3: Motregning og cesjon — gbl. §§ 25–27 og skyldnerens innsigelser
- **id:** `jur3420-bi-5-3` · **number:** 5.3 · **estimatedMinutes:** 45 · **prerequisites:** `jur3420-bi-5-1`
- **Kapitteltype:** regel
- **description:** Motregningens vilkår (gjensidighet, oppgjørsmodenhet), cesjon av enkle krav (gbl. §§ 25–27 analogisk) og hvilke innsigelser/motregningsrett skyldneren beholder overfor ny kreditor.
- **Eksamensbelegg:** Pengekrav & foreldelse 5/5 — motregning/cesjon (V2023 O5). Prioritetsklasse: **kunne**.
- **Regelkontrakt:** **Motregning** — vilkår: **gjensidighet** (kravene mellom samme parter), **oppgjørsmodenhet** (forfalt/utøvbart), komputabilitet. **Cesjon av enkle krav** — **gbl. §§ 25–27** (analogisk): erververen får ikke bedre rett enn overdrageren; skyldneren beholder **innsigelser** og **motregningsrett** som forelå før han fikk melding om overdragelsen. *(verifiser gbl. §§ 25–27 og motregningsvilkårene.)*
- **Spor A — praktikumstrening:** Minipraktikum «Kan skyldneren motregne / gjøre innsigelsen gjeldende mot ny kreditor?»: et krav overdras, skyldneren har et motkrav mot opprinnelig kreditor.
- **Spor B — flervalgsbank:** flervalg om motregningsvilkår og innsigelsesbevaring ved cesjon; distraktorer parer rett utfall med feil vilkår.
- **Metodepoenger:** Motregning krever gjensidighet + oppgjørsmodenhet. Ved cesjon beholder skyldneren innsigelser/motregning fra før melding. Ny kreditor får ikke bedre rett.
- **Typiske feil:** Å overse gjensidighets-/oppgjørsmodenhetsvilkåret; å tro ny kreditor får bedre rett; å bomme på skjæringstidspunktet (melding).
- **Kvote:** quiz 16 · flashcards 16

---

#### Kapittel 5.4: Regress, solidaransvar og forsinkelsesrente
- **id:** `jur3420-bi-5-4` · **number:** 5.4 · **estimatedMinutes:** 45 · **prerequisites:** `jur3420-bi-5-1`
- **Kapitteltype:** regel
- **description:** Solidaransvar og regress mellom flere skyldnere, og forsinkelsesrentens vilkår (forsinkelsesrenteloven § 2): forfall / 30 dager etter påkrav.
- **Eksamensbelegg:** Pengekrav & foreldelse 5/5 — regress/solidaransvar og forsinkelsesrente (V2023 O5/O6). Prioritetsklasse: **kunne**.
- **Regelkontrakt:** **Solidaransvar** — hver skyldner hefter for hele kravet; den som betaler mer enn sin andel har **regress** mot de øvrige. **Forsinkelsesrenteloven § 2** — forsinkelsesrente løper fra **forfall**, eller **30 dager etter påkrav** når forfall ikke er avtalt. *(verifiser forsinkelsesrenteloven § 2 og regressreglene.)*
- **Spor A — praktikumstrening:** Minipraktikum «Fra hvilken dag løper forsinkelsesrenten?» og «Kan den som betalte kreve regress?»: solidarskyldnere der én betaler alt.
- **Spor B — flervalgsbank:** **regne-flervalg** om forsinkelsesrentens startdag (forfall vs. 30 dager etter påkrav); flervalg om regress; distraktorer med feil startdag.
- **Metodepoenger:** Solidaransvar → full heftelse + regress for det overskytende. Forsinkelsesrente fra forfall, ellers 30 dager etter påkrav. Sjekk om forfall er avtalt (plantet).
- **Typiske feil:** Å regne forsinkelsesrente fra feil dag; å overse regressretten; å tro solidarskyldner bare hefter for sin andel utad.
- **Kvote:** quiz 16 · flashcards 16

---

#### Kapittel 5.5: Typetilfelle — pengekravtvisten
- **id:** `jur3420-bi-5-5` · **number:** 5.5 · **estimatedMinutes:** 45 · **prerequisites:** `jur3420-bi-5-1`, `jur3420-bi-5-2`
- **Kapitteltype:** typetilfelle 🔶
- **description:** Den samlede pengekravsoppgaven: foreldelse (med fristavbrudd), motregning/innsigelser, regress eller forsinkelsesrente — malen som binder Del 5 sammen, tett pakket med plantede datoer.
- **Eksamensbelegg:** Speiler pengekravsoppgaven (5/5, V2023 hadde 2). Prioritetsklasse: **perfekt**.
- **Regelkontrakt (tvistepunkt-kartet):** (1) er kravet foreldet (§§ 2/3/10), og ble fristen avbrutt (§§ 14/15 — erkjennelse, ikke purring)? (2) kan skyldneren motregne / gjøre innsigelser gjeldende (cesjon)? (3) regress ved solidaransvar? (4) forsinkelsesrente fra hvilken dag? Datoene er avgjørende.
- **Spor A — praktikumstrening:** Gjennomdrøftet variant (NYSKREVET — f.eks. et Lillevik-foretak krever betaling av Peder Ås; kravet er gammelt, men Peder skrev en gang «jeg betaler straks», og han har et motkrav) med margkommentarer. Øvelsesvarianter flytter tvilen mellom foreldelse, avbrudd og motregning.
- **Spor B — flervalgsbank:** blandede pengekrav-flervalg (foreldelse, avbrudd, rente); hjemmel-vs-utfall + regne-flervalg.
- **Metodepoenger:** Bruk datoene aktivt. Erkjennelse gir ny frist; purring gjør ikke. Hold foreldelse, motregning og rente fra hverandre.
- **Typiske feil:** Å tro purring avbryter; å regne fra feil dato; å slå foreldelse og reklamasjon sammen; feil rentestartdag.
- **Kvote:** quiz 14 · flashcards 12

**Prøve-kvote Del 5:** 4 prøver (foreldelse-regneprøve §§ 2/3/10; fristavbrudd erkjennelse-vs-purring § 14/§ 15; motregning/cesjon + regress + forsinkelsesrente-drill; samlet pengekravtvist + pengekrav-flervalgsbank).

---

### DEL 6 — Bærekraft og ansvarlig næringsliv (score 4/5 — stigende)

---

#### Kapittel 6.1: Åpenhetsloven — aktsomhetsvurderinger og innsyn for «enhver»
- **id:** `jur3420-bi-6-1` · **number:** 6.1 · **estimatedMinutes:** 45 · **prerequisites:** `jur3420-bi-0-2`
- **Kapitteltype:** regel 🔶
- **description:** Åpenhetslovens plikter: virkeområde (større virksomheter), aktsomhetsvurderinger, redegjørelse, og informasjonsplikten overfor **«enhver»** (§ 6) — ikke bare forbrukere.
- **Eksamensbelegg:** Bærekraft 4/5 og **stigende** — åpenhetsloven (H2024 O6, V2025 O6). Fella: tro at innsynsretten (§ 6) bare gjelder forbrukere. Prioritetsklasse: **perfekt** (stigende).
- **Regelkontrakt:** **åpenhetsloven** 🔶 — **§ 3** virkeområde (større virksomheter); **§§ 4–5** aktsomhetsvurderinger + redegjørelse for menneskerettigheter og anstendige arbeidsforhold i leverandørkjeden; **§ 6** informasjonsplikt: **«enhver»** (også studenter, organisasjoner) kan kreve informasjon. *(verifiser §§ 3–6 og terskler.)*
- **Spor A — praktikumstrening:** Minipraktikum «Kan en student kreve informasjon etter åpenhetsloven?»: en organisasjon ber et større foretak om innsyn — plikter foretaket å svare (§ 6)?
- **Spor B — flervalgsbank:** flervalg om virkeområde, aktsomhet og «enhver»-innsyn; distraktorer parer rett utfall med feil rekkevidde (bare forbruker vs. enhver).
- **Metodepoenger:** «Enhver» kan kreve informasjon (§ 6) — ikke bare forbrukere/kunder. Aktsomhetsvurderinger gjelder større virksomheter. Sjekk virkeområdet.
- **Typiske feil:** Å tro innsynsretten bare gjelder forbrukere; å overse virkeområdet (større virksomheter); å blande redegjørelse og informasjonsplikt.
- **Kvote:** quiz 16 · flashcards 16

---

#### Kapittel 6.2: Offentlige anskaffelser — terskelverdier og miljøkrav
- **id:** `jur3420-bi-6-2` · **number:** 6.2 · **estimatedMinutes:** 45 · **prerequisites:** `jur3420-bi-0-2`
- **Kapitteltype:** regel
- **description:** Anskaffelsesregelverkets grunntrekk: at en kommune/offentlig oppdragsgiver IKKE har full avtalefrihet ved innkjøp over terskelverdiene, og at miljø/klima/menneskerettigheter skal vektlegges.
- **Eksamensbelegg:** Bærekraft 4/5 — offentlige anskaffelser (V2024 O4: kommune har ikke full avtalefrihet). Prioritetsklasse: **kunne** (stigende).
- **Regelkontrakt:** **anskaffelsesloven** — **§ 1/§ 5** offentlige oppdragsgivere er bundet av anskaffelsesregelverket over **terskelverdiene** (konkurranse, likebehandling, forutberegnelighet); miljø/klima/menneskerettigheter skal vektlegges. Fella: tro at det offentlige har full avtalefrihet ved store innkjøp. *(verifiser anskaffelsesloven §§ 1/5 og terskelverdiene.)*
- **Spor A — praktikumstrening:** Minipraktikum «Kan kommunen fritt velge leverandør?»: et stort kommunalt innkjøp over terskelverdi — gjelder anskaffelsesregelverket?
- **Spor B — flervalgsbank:** flervalg om avtalefrihet vs. anskaffelsesplikt og miljøkrav; distraktorer parer rett utfall med feil premiss (full avtalefrihet).
- **Metodepoenger:** Offentlige oppdragsgivere har ikke full avtalefrihet over terskelverdiene. Miljø/klima/menneskerettigheter skal vektlegges.
- **Typiske feil:** Å tro en kommune har full avtalefrihet ved store innkjøp; å overse terskelverdiene; å glemme miljøkravene.
- **Kvote:** quiz 16 · flashcards 16

---

#### Kapittel 6.3: Samfunnsansvar i årsberetning og EU-taksonomi
- **id:** `jur3420-bi-6-3` · **number:** 6.3 · **estimatedMinutes:** 35 · **prerequisites:** `jur3420-bi-0-2`
- **Kapitteltype:** regel
- **description:** Bakgrunnsstoffet i bærekraftsøylen: krav om samfunnsansvar/bærekraftsrapportering i årsberetningen for store foretak (regnskapsloven), og EU-taksonomien/offentliggjøringsloven som ramme.
- **Eksamensbelegg:** Bærekraft 4/5 — samfunnsansvar i årsberetning; EU-taksonomien som bakgrunn (nivå 3). Prioritetsklasse: **kjenne** (kortest dekning).
- **Regelkontrakt:** **regnskapsloven** — store foretak skal redegjøre for **samfunnsansvar** i årsberetningen (menneskerettigheter, arbeidstakerrettigheter, miljø, antikorrupsjon). **EU-taksonomien / offentliggjøringsloven** — klassifiseringssystem for bærekraftig aktivitet, som bakgrunn. *(verifiser regnskapslovens samfunnsansvarsbestemmelse og taksonomiens rekkevidde.)*
- **Spor A — praktikumstrening:** Kort minipraktikum: plikter et stort foretak å redegjøre for samfunnsansvar i årsberetningen?
- **Spor B — flervalgsbank:** flervalg om hvem som har redegjørelsesplikt og hva taksonomien er; distraktorer parer rett utfall med feil rettsgrunnlag.
- **Metodepoenger:** Redegjørelsesplikten gjelder store foretak. Taksonomien er et klassifiseringssystem, ikke en handleplikt i seg selv. Bør kjenne til — hold kort.
- **Typiske feil:** Å blande åpenhetsloven og regnskapslovens redegjørelse; å tro taksonomien pålegger direkte plikter for alle.
- **Kvote:** quiz 12 · flashcards 12

---

#### Kapittel 6.4: Typetilfelle — bærekrafttvisten
- **id:** `jur3420-bi-6-4` · **number:** 6.4 · **estimatedMinutes:** 40 · **prerequisites:** `jur3420-bi-6-1`, `jur3420-bi-6-2`
- **Kapitteltype:** typetilfelle 🔶
- **description:** Den samlede bærekraftoppgaven: innsyn etter åpenhetsloven, offentlige anskaffelser eller samfunnsansvar — malen som binder Del 6 sammen.
- **Eksamensbelegg:** Speiler bærekraftoppgaven (4/5, stigende). Prioritetsklasse: **perfekt** (forvent på kommende sett).
- **Regelkontrakt (tvistepunkt-kartet):** avhengig av delspørsmålet: (a) informasjonsplikt/aktsomhet (åpenhetsloven §§ 4–6 🔶); (b) anskaffelsesplikt over terskelverdi (anskaffelsesloven); (c) redegjørelsesplikt (regnskapsloven). Riktig hjemmel + rekkevidde + subsumsjon.
- **Spor A — praktikumstrening:** Gjennomdrøftet variant (NYSKREVET — f.eks. en organisasjon krever innsyn i et Lillevik-konserns leverandørkjede, samtidig som en kommune skal kjøpe inn tjenester fra samme konsern) med margkommentarer. Øvelsesvarianter dekker anskaffelser og årsberetning.
- **Spor B — flervalgsbank:** blandede bærekraft-flervalg; hjemmel-vs-utfall («enhver» vs. forbruker; avtalefrihet vs. anskaffelsesplikt).
- **Metodepoenger:** «Enhver» kan kreve innsyn. Offentlige innkjøp over terskel er bundet. Velg riktig hjemmel til det gitte spørsmålet.
- **Typiske feil:** Innsyn bare for forbrukere; kommunens «frie» avtalefrihet; feil bærekraftshjemmel.
- **Kvote:** quiz 12 · flashcards 10

**Prøve-kvote Del 6:** 4 prøver (åpenhetsloven aktsomhet + «enhver»-innsyn § 6; offentlige anskaffelser terskelverdi/miljøkrav; samfunnsansvar/EU-taksonomi-drill; samlet bærekrafttvist + bærekraft-flervalgsbank).

---

### DEL 7 — Eksamenstrening: praktikum og flervalg (60/40)

---

#### Kapittel 7.1: Se hjemmelen — hjemmelvalg- og flervalgsdrill (+ randstoff: erstatning utenfor kontrakt)
- **id:** `jur3420-bi-7-1` · **number:** 7.1 · **estimatedMinutes:** 50 · **prerequisites:** `jur3420-bi-0-4`
- **Kapitteltype:** eksamenstrening (drill)
- **description:** Konsentrert drill i de to A-ferdighetene: (1) å plukke **riktig hjemmel** til et kort faktum på tvers av alle seks søyler, og (2) å løse **flervalg på hjemmel-vs-utfall** raskt. Inkluderer kort «bør kjenne til»-dekning av randstoffet erstatning utenfor kontrakt.
- **Eksamensbelegg:** Destillerer sensornøkkelen: med Lovdata åpen gir avskrift null → poeng i riktig hjemmelvalg + subsumsjon; flervalg er alt-eller-intet. Randstoff: erstatning utenfor kontrakt (1/5, V2023 O10 sluse/objektivt ansvar). Prioritetsklasse: **perfekt** (drill) + **kjenne** (erstatning).
- **Regelkontrakt:** Repeterer hjemmelkartene fra alle seks søyler som en **hjemmel-radar** (faktumtrekk → hvilken lov/paragraf det varsler). **Randstoff (kort):** ulovfestet **culpanorm** og ulovfestet **objektivt ansvar** (stadig/typisk/ekstraordinær risiko) — hold kort; 1/5 og lite sannsynlig som tung DEL 1-oppgave. *(verifiser at erstatning utenfor kontrakt fortsatt er randstoff i emnet.)*
- **Spor A — praktikumstrening:** hurtigdrill: 8–10 korte faktum → hvilken hjemmel/paragraf? + ett kort erstatnings-minipraktikum (objektivt ansvar).
- **Spor B — flervalgsbank:** stor blandet flervalgsbank på tvers av alle seks søyler (hjemmel-vs-utfall + regne-flervalg).
- **Metodepoenger:** Tren hjemmel-radaren til refleks. Les alltid hjemmel OG utfall i flervalg. Erstatning utenfor kontrakt: kjenn culpa + objektivt ansvar, men bruk lite tid.
- **Typiske feil:** Å nøle på hjemmelvalget; å velge flervalg på utfallsfølelse; å overinvestere i erstatning utenfor kontrakt.
- **Kvote:** quiz 20 · flashcards 16

---

#### Kapittel 7.2: Øvingseksamen 1 — 6 praktikum + 12 flervalg (60/40)
- **id:** `jur3420-bi-7-2` · **number:** 7.2 · **estimatedMinutes:** 60 · **prerequisites:** `jur3420-bi-7-1`
- **Kapitteltype:** øvingseksamen (modellbesvarelse)
- **description:** Et komplett eksamenssett i eksakt BI-format: DEL 1 seks korte praktikum (én per søyle: avtale + kjøp + arbeid + selskap + pengekrav + bærekraft, 60 %) + DEL 2 tolv flervalg (40 %), med fulle modell-løsninger og felle-lister.
- **Eksamensbelegg:** Speiler den nesten faste DEL 1-malen + DEL 2-flervalg (prognosen i analysens §7). Prioritetsklasse: **perfekt**.
- **Regelkontrakt:** Nyskrevet sett i gjengangeruniverset (Peder Ås/Marte Kirkerud/Kari/Lillevik). Hver praktikum: `collapsible` **modell-løsning** (hjemmel → vilkår → subsumsjon → konklusjon) + `tip` **Sensorblikket** (må/pluss/felle-vekting). Hver flervalg: fasit + kort forklaring på hvorfor distraktorene (rett utfall + feil hjemmel) er feil. Baker inn de faste fellene (lovvalg; «avtalt»/«tatt sikte på»; erkjennelse-vs-purring; opphevet midlertidighetsadgang; ASA-bare kjønnsrep.; «enhver»-innsyn).
- **Spor A — praktikumstrening:** de 6 praktikum med modell-løsninger.
- **Spor B — flervalgsbank:** de 12 flervalg med fasit + distraktoranalyse.
- **Metodepoenger:** Fordel tiden 60/40. Hver praktikum løses kort og selvstendig. Flervalg: hjemmel OG utfall.
- **Typiske feil:** De faste fellene fra analysens §5 (samlet felleliste i settet).
- **Kvote:** quiz 12 · flashcards 6

---

#### Kapittel 7.3: Øvingseksamen 2 — 6 praktikum + 12 flervalg (60/40)
- **id:** `jur3420-bi-7-3` · **number:** 7.3 · **estimatedMinutes:** 60 · **prerequisites:** `jur3420-bi-7-1`
- **Kapitteltype:** øvingseksamen (modellbesvarelse)
- **description:** Et andre komplett eksamenssett i 60/40-format, med nye faktum og forskjøvet vekt (kjøpsrett med 2 oppgaver, jf. V2023-mønsteret), fulle modell-løsninger og felle-lister.
- **Eksamensbelegg:** Speiler variasjonen i settene (kjøpsrett kan ha 2 oppgaver). Prioritetsklasse: **perfekt**.
- **Regelkontrakt:** Nytt nyskrevet sett; samme struktur som 7.2 (modell-løsning + Sensorblikket per praktikum; fasit + distraktoranalyse per flervalg). Legg vekt på kontrollansvar/dobbelt hindringsfritak og reklamasjons-regnefeller.
- **Spor A — praktikumstrening:** de 6 praktikum med modell-løsninger.
- **Spor B — flervalgsbank:** de 12 flervalg med fasit + distraktoranalyse.
- **Metodepoenger:** Håndter to kjøpsoppgaver uten å bruke opp tiden. Regne-flervalg: regn først.
- **Typiske feil:** De faste fellene; tidsstyring når kjøpsrett vektes tyngre.
- **Kvote:** quiz 12 · flashcards 6

---

#### Kapittel 7.4: Øvingseksamen 3 — 6 praktikum + 12 flervalg (60/40)
- **id:** `jur3420-bi-7-4` · **number:** 7.4 · **estimatedMinutes:** 60 · **prerequisites:** `jur3420-bi-7-1`
- **Kapitteltype:** øvingseksamen (modellbesvarelse) + tidsstyrt simulering
- **description:** Et tredje komplett sett brukt som tidsstyrt sluttsimulering (5-timers ramme), med bærekraft vektet opp (stigende trend) og en samlet gjennomgang av alle faste feller.
- **Eksamensbelegg:** Sluttsimulering; bærekraft prioritert opp (prognosen). Prioritetsklasse: **perfekt**.
- **Regelkontrakt:** Nytt nyskrevet sett + `tip` **Tidsplan** (hvordan fordele 5 timer på 60/40). Modell-løsninger + Sensorblikket + distraktoranalyse som i 7.2/7.3. Avsluttes med en `collapsible` **samlet fellekatalog** (alle hjemmelsfeller → riktig spor).
- **Spor A — praktikumstrening:** de 6 praktikum med modell-løsninger.
- **Spor B — flervalgsbank:** de 12 flervalg med fasit + distraktoranalyse.
- **Metodepoenger:** Simuler under tidspress. Ikke skriv deg tom på DEL 1 og forsøm flervalgene (40 %). Sjekk hver felle mot katalogen.
- **Typiske feil:** Dårlig tidsfordeling 60/40; å forsømme flervalgsdelen; de faste hjemmelsfellene.
- **Kvote:** quiz 12 · flashcards 6

**Prøve-kvote Del 7:** 4 prøver (hjemmelvalg-radar-drill på tvers av søylene; stor blandet flervalgsprøve hjemmel-vs-utfall; komplett øvingseksamen 60/40 (6 praktikum + 12 flervalg); tidsstyrt sluttsimulering med fellekatalog).

---

## 4. Kvotesammendrag (AUTORITATIV for alle senere faser)

Quiz og flashcards per del (summeringskontroll). **Quiz totalt 626** (≥500, siktet høyt fordi
flervalg er 40 %), **flashcards totalt 592** (mål 550–650). Fordelingen er **jevn over de seks
søylene** (Del 1–6), med kjøpsrett (Del 2) marginalt tyngst som fagets tyngdepunkt.

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| Del 0 — Eksamenskart og eksamenshåndverk | 4 | 62 | 52 | 4 |
| Del 1 — Avtalerett | 5 | 80 | 78 | 4 |
| Del 2 — Kjøpsrett (tyngst) | 7 | 126 | 128 | 4 |
| Del 3 — Arbeidsrett | 5 | 82 | 84 | 4 |
| Del 4 — Selskapsrett | 5 | 84 | 84 | 4 |
| Del 5 — Pengekrav og foreldelse | 5 | 80 | 78 | 4 |
| Del 6 — Bærekraft | 4 | 56 | 54 | 4 |
| Del 7 — Eksamenstrening | 4 | 56 | 34 | 4 |
| **Sum** | **39** | **626** | **592** | **32** |

**Kvotebegrunnelse (jf. audit-lærdommen ≥500 er et gulv):**
- **Quiz siktet høyt (626)** fordi **DEL 2 av eksamen (40 %) ER flervalg**, og flervalgsbanken
  (hjemmel-vs-utfall + regne-flervalg) lever i quiz-formatet. Hvert kapittels Spor B fyller
  quizkvoten med flervalg som direkte speiler eksamen — quiz er her både pedagogikk og
  eksamenstrening.
- **Flashcards 592 (i mål-båndet 550–650)** konsentreres om **paragraf↔vilkår-koblinger per
  rettsområde** (kontrollansvarets fire vilkår kjl. § 27; mangelsvilkåret § 17; reklamasjons-
  fristene; forkjøpsrett §§ 4-19/4-23; foreldelse §§ 2/3/10/14/15; oppsigelse/avskjed § 15-7/
  § 15-14; åpenhetsloven §§ 4–6) og **kjernebegreper** (dobbelt hindringsfritak, virkelig verdi,
  relativ/absolutt frist, erkjennelse, «enhver»-innsyn, formfrihet).
- **Tetthet:** 626/39 ≈ 16 quiz og 592/39 ≈ 15 flashcards per kapittel. Regelkapitlene ligger
  høyt (18–22), typetilfelle-/øvingskapitlene lavere — øvingseksamenene (7.2–7.4) har lav
  flashcard-kvote fordi de er praktikum-/flervalgssett, ikke begrepskapitler.
- **Prøver:** 4 per del × 8 deler = **32** (krav ≥4 per del). Alle i minipraktikum-/flervalg-/
  regnedrill-format med fasit «må-punkter / pluss-punkter / feller».

---

## 5. Seksjonstitler (sectionNames)

Del-nummer → beskrivende tittel (blir `sectionNames` i `TextbookCourse`; vises som
«Kapittel N: <tittel>» på bokforsiden — obligatorisk):

| Del | sectionName |
|---|---|
| 0 | Eksamenskart og eksamenshåndverk |
| 1 | Avtalerett: inngåelse, binding og ugyldighet |
| 2 | Kjøpsrett: lovvalg, mangel, reklamasjon, beføyelser, kontrollansvar |
| 3 | Arbeidsrett: midlertidig, oppsigelse, avskjed, overtid |
| 4 | Selskapsrett: selskapsformer, styre, forkjøpsrett, kjønnsrepresentasjon |
| 5 | Pengekrav og foreldelse |
| 6 | Bærekraft og ansvarlig næringsliv |
| 7 | Eksamenstrening: praktikum og flervalg (60/40) |

---

## 6. Praktikums- og flervalgstrening — samlekrav

- **Tre komplette øvingseksamener i eksakt 60/40-format** (kap. 7.2–7.4), hver med **6 korte
  praktikum (én per søyle) + 12 flervalg**, nyskrevet faktum i gjengangeruniverset, `collapsible`
  modell-løsning + `tip` Sensorblikket per praktikum, og fasit + distraktoranalyse per flervalg.
  - **7.2** er standardsettet («én per søyle»-malen).
  - **7.3** forskyver vekten (kjøpsrett med 2 oppgaver, V2023-mønsteret).
  - **7.4** er tidsstyrt sluttsimulering (5 t) med bærekraft opp + samlet fellekatalog.
- **De to BI-håndverksmodulene** trenes eksplisitt gjennom hele boka: hvert kjøpspraktikum baker
  inn **lovvalget** (kap. 0.4), og hvert kapittels **Spor B** trener **hjemmel-vs-utfall** (kap.
  0.3). Hvert praktikum har minst to plantede **hjemmelsfeller** fra empirien (fkjl. der kjl.
  gjelder; § 36 der § 33 gjelder; opphevet midlertidighetsadgang; ASA-bare kjønnsrep.; purring
  «avbryter» foreldelse; angrerett der den ikke gjelder).
- **Reklamasjons-/foreldelses-/rentefristene** bygges inn som plantede datoer i kjøps- og
  pengekravspraktikumene — de er selve subsumsjonsmaterialet (regne-flervalg i Spor B).
- Kombinasjonene speiler de reelle DEL 1-mønstrene (én per søyle; kjøpsrett kan doble), men
  **ALLE faktum, parter, virksomheter, bransjer, beløp og datoer er nyskrevne**.
- **32 prøver** fordelt 4 per del, alle i minipraktikum-/flervalg-/regnedrill-format med fasit
  «må-punkter / pluss-punkter / feller».

---

## 7. Studieguide-disposisjon

Studieguiden bygges som ett sammenhengende dokument med disse seksjonene:

1. **Slik består du JUR 3420 (og løfter til A)** — eksamensformen (5 t skoleeksamen, todelt
   60/40, Lovdata Pro åpen, A–F), de **to sporene** (praktikum + flervalg) og
   **seks-søyle-prioriteringskartet** (frekvenstabellen fra kap. 0.1). Eksplisitt C→A-liste:
   riktig hjemmelvalg + subsumsjon på plantede fakta, lovvalget, hjemmel-vs-utfall i flervalg.
2. **Praktikumsmetoden på én side** — delspørsmål gitt → hjemmel → kort rettsregel → subsumsjon
   på plantede fakta → konklusjon; kumulative vilkår hver for seg; metodefeilene som negativ
   sjekkliste.
3. **Flervalgshåndverket på én side** — hjemmel-vs-utfall, alt-eller-intet, distraktortypene,
   nabolov-fellen, regne-flervalg (regn først).
4. **Lovvalgskartet** — kjl. / fkjl. / digitalytelse / leie/tjeneste / angrerett: hvem + hva
   avgjør, med de faste avgrensningsfellene.
5. **Seks-søyle-sammendrag** (avtale; kjøp; arbeid; selskap; pengekrav; bærekraft) — hver med
   vilkårsstiger i punktform, tvistepunkt-kart per typetilfelle og paragrafregister. Alle
   bestemmelser merket «gjeldende rett» der 🔶 gjelder.
6. **Rettstilstandsarket (🔶)** — samlet tabell: midlertidig ansettelse § 14-9 (opphevet generell
   adgang), kjønnsrep. § 6-11 a (utvidet til større AS), fkjl.-2024-endringene, foreldelse,
   forkjøpsrett/virkelig verdi — for å unngå å kopiere foreldet doktrine.
7. **Fellekatalogen** — samtlige hjemmelsfeller fra empirien i tabellform (felle → riktig spor),
   til drilling siste uke.
8. **Hjemmel-radaren** — signalliste: faktumtrekk → hvilken hjemmel det varsler («næringsdrivende
   vs. forbruker» → lovvalg kjl./fkjl.; «avtalt»/«tatt sikte på» → binding/forbehold; forfallsdato
   → foreldelse/rente; «betaler straks» → erkjennelse § 14; «enhver» → åpenhetsloven § 6; stor
   avtale + daglig leder → asl. § 6-32).
9. **Leseplaner** — 14-dagers og 4-ukers plan med kapittelrekkefølge, prøvetidspunkter og
   simuleringsdag (kap. 7.4 på nest siste dag).
10. **Siste-døgnet-arket** — én side: vilkårslistene for «må beherskes perfekt»-punktene per søyle
    (avtalebinding/formfrihet; lovvalg + mangel + reklamasjon + beføyelser + kontrollansvar; § 14-9
    + § 15-7 + § 15-14; forkjøpsrett + representasjon + kjønnsrep.; foreldelse §§ 2/3/10/14/15;
    åpenhetsloven §§ 4–6).

---

## 8. Avvik fra DNA-jus (dokumentert)

DNA-jus er skrevet med UiO-ens rene, dype praktikum-eksamen (JUS1111) som forbilde. JUR 3420 er
**jus ved en handelshøyskole for økonomistudenter** og avviker på seks empirisk begrunnede
punkter:

1. **Seks-søyle jevn vekting i stedet for ett tyngdepunkt.** DNA-en organiserer materielle deler
   etter rettsområde-frekvens der ett–to områder dominerer (JUS1111: erstatning 20/30). JUR 3420
   fordeler seg **slående jevnt over seks kommersielle søyler** (hver ~5/5), så boka gir hver søyle
   en egen del med tilnærmet lik vekt (4–5 kapitler); kjøpsrett får ett ekstra fordi det er det
   marginale tyngdepunktet. *Begrunnelse:* analysens §2 (ekstremt jevn fordeling — motsatt av UiO).

2. **40 % flervalg → egen flervalgsbank (Spor B) i hvert kapittel + flervalgshåndverk-modul (kap.
   0.3).** DEL 2 av eksamen er flervalg (ingen UiO-jus har dette). Boka har derfor **to spor per
   kapittel** og en egen metodemodul for hjemmel-vs-utfall. Quiz-kvoten er siktet **høyt (626)**
   fordi flervalgsbanken lever i quiz-formatet. *Begrunnelse:* analysens §1/§3.2 (BI-særtrekk) og
   README-audit (kvote skaleres til fagets natur).

3. **Bredt og grunt — mange korte, selvstendige praktikum, ikke få dype tvister.** DNA-en trener
   få, dype flertvist-praktikum; JUR 3420-praktikumene er **korte og avgrenset til én søyle** med
   **gitt delspørsmål**. Hvert typetilfellekapittel gir én kort, selvstendig sekvens per søyle.
   *Begrunnelse:* analysens §1/§3.1 («bredde slår dybde»; «én oppgave per søyle»).

4. **Delspørsmålet er GITT — lavere metodeterskel.** UiO-praktikum krever at kandidaten utleder
   tvistepunktene selv; JUR 3420 gir dem eksplisitt («Er kravet foreldet?»). Boka bruker derfor
   ikke en tung tvistepunkt-identifikasjonsmodul, men flytter all vekt til **hjemmelvalg +
   subsumsjon** (kap. 0.2). *Begrunnelse:* analysens §1/§3.1.

5. **Lovvalget som egen fast åpningsfelle (kap. 0.4).** Fordi kjøpsrett er tyngst og lovvalget
   (kjl./fkjl./digitalytelse/leie/angrerett) forplanter seg gjennom hele drøftelsen og er en fast
   flervalgsfelle, får det en egen metodemodul gjenbrukt i hele Del 2. *Begrunnelse:* analysens
   §4/§5 (fast åpningsgrep).

6. **Ingen domskanon / domsanalyse; erstatning utenfor kontrakt nedprioritert.** Faget er **lov-
   og subsumsjonsdrevet, ikke domsdrevet** — domskunnskap testes ikke — så boka bygger **ingen
   domskanon** og har intet «Paragraf- og domsregister» (kun paragraf-/hjemmelregister). Erstatning
   utenfor kontrakt er randstoff (1/5) og får bare kort «bør kjenne til»-plass i kap. 7.1 — motsatt
   av jusstudiet. *Begrunnelse:* analysens §3.3/§7.

Ingen andre avvik: kapittel-DNA (regelkapittel/typetilfellekapittel/øvingseksamen), blokktyper,
«Eksamensvinkel»/«Typiske feil»/«Paragraf- og begrepsliste»/«Paragraf- og hjemmelregister» og
kvotekravene følger DNA-jus. **Merk uverifisert sensorgrunnlag:** arkivet mangler sensorveiledning
(5 sett), og sensorkrav/nivåskiller/«typiske feil» er utledet av oppgavekonstruksjonen — les som
kvalifiserte hypoteser, markert i boka der de er avgjørende.

---

## 9. Rettstilstands-sjekk (skal utføres i fase 6 av Lovdata-verifikatør)

Per oppdrag er **ingen Lovdata-oppslag gjort** i dette skjelettet (bevisst — ingen WebFetch nå).
Alle regelkontrakter er merket *(verifiser)* der usikkerhet er kjent, og 🔶 der rettstilstanden er
sensitiv. Verifikatøren skal slå opp **gjeldende rett** FØR kontraktene låses.

**Rettstilstandssensitivt (🔶) — sjekkes særskilt mot gjeldende Lovdata:**
- **aml. § 14-9** — at **den generelle adgangen (tidl. bokstav f) er OPPHEVET (2022)** og at fast er
  hovedregel; eksakt grunnlagskatalog + rettsvirkning. Kap. 3.1/3.5 skal ha «Endret lov»-boks.
- **asl. § 6-11 a** — at kjønnsrepresentasjonskravet er **utvidet fra ASA til større AS**; gjeldende
  **terskelverdier og innfasingsdatoer**. Kap. 4.4/4.5 skal ha «Gjeldende lov»-boks.
- **forbrukerkjøpsloven** — at mangelsbegrep, krav til varens egenskaper, reklamasjon (§ 27) og
  hevingsterskel bygger på **2024-endringen (EU-tilpasning)**, ikke gammel fkjl. Kap. 2.2/2.3/2.4.
- **foreldelsesloven §§ 2/3/10/14/15** — frister, startpunkt, tilleggsfrist, erkjennelse/rettslig
  skritt; at purring ikke avbryter.
- **aksjeloven §§ 4-19/4-23** — forkjøpsrett ved eierskifte (med mindre vedtektene fraviker) +
  virkelig verdi; frister og verdsettelsestidspunkt.
- **digitalytelsesloven (2022)** — virkeområde for digitale ytelser/abonnement; grensen mot kjl./fkjl.
- **åpenhetsloven §§ 3–6** — virkeområde (større virksomheter), aktsomhet, «enhver»-innsyn (§ 6).

**Merket *(verifiser)* — sluttkontrolleres mot gjeldende lov:**
- **Avtaleloven (1918):** §§ 2–9 (inngåelse, «kommet frem» § 7), §§ 28–33 (tvang/svik/utnyttelse/
  uredelighet), § 36 (urimelighet); **NL 5-1-2** (avtale-/formfrihet); **vergemålsloven** (umyndiges
  avtaler).
- **Kjøpsloven (1988):** § 1 (virkeområde), § 3 (fravikelighet), §§ 17–19 (mangel/«som den er»/
  opplysninger), § 27 og § 40 (kontrollansvar + dobbelt hindringsfritak § 27 (2)), § 32 (reklamasjon),
  §§ 34/36/38/39 (retting/omlevering/prisavslag/heving), § 67 (direkte/indirekte tap).
- **Forbrukerkjøpsloven (2002, GJELDENDE etter 2024):** § 1, §§ 15–17 (mangel/«som den er»), § 27
  (reklamasjon), §§ 29–30 (avhjelp/valgrett), § 32 (heving).
- **Arbeidsmiljøloven:** §§ 14-5/14-6 (skriftlig avtale), § 14-9 (midlertidig), § 15-7 (oppsigelse),
  § 15-14 (avskjed), § 10-6 (overtid).
- **Aksjeloven:** §§ 6-19/6-25 (styrebehandling/protokoll), §§ 6-30/6-32/6-33 (representasjon/daglig
  leder/overskridelse); **selskapsloven** (ANS/DA-ansvar, signaturrett).
- **Foreldelsesloven §§ 2/3/10/14/15; gjeldsbrevlova §§ 25–27** (motregning/innsigelser ved cesjon);
  **forsinkelsesrenteloven § 2** (forfall / 30 dager etter påkrav).
- **Anskaffelsesloven §§ 1/5** (terskelverdier, miljø/klima/menneskerettigheter); **regnskapsloven**
  (samfunnsansvar i årsberetning); **EU-taksonomien/offentliggjøringsloven** (bakgrunn).
- **Erstatning utenfor kontrakt (randstoff):** ulovfestet culpanorm + ulovfestet objektivt ansvar.
- **Grep `-i verifiser`** (ikke bare `(verifiser)`) for sammensatte varianter. **Ingen domskanon** —
  faget er ikke domsdrevet; stikkprøv likevel eventuelle UMARKEDE paragrafreferanser (jf.
  JUS1111-lærdommen).
- **Emneside-forbehold:** bekreft gjeldende **BI-emneside for JUR 3420** (eksamensform 5 t, 7,5 ECTS,
  60/40-todeling, hjelpemidler lovsamling + Lovdata Pro, pensum) og at flervalgsdelen fortsatt teller
  40 %.
- **Sensorgrunnlag:** INGEN sensorveiledning i arkivet (5 sett). Sensorkrav/nivåskiller/«typiske feil»
  er utledet; fase 6 innarbeider eventuell faglærers veiledning før kontraktene låses.

---

## 10. Byggerekkefølge og verifikasjon

### Byggerekkefølge for Opus

1. **Metadata først:** `TextbookCourse`-oppføring for `jur3420-bi` (mønster: `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`) med alle 39 kapitler (id/number/title/description/
   estimatedMinutes/topics/competenceGoals/prerequisites fra dette skjelettet) og `sectionNames`
   (§5). `level: 'Høyskole'`.
2. **Del 0** (kap. 0.1–0.4) — håndverksspråket («må/pluss/felle», hjemmelvalg + subsumsjon på
   plantede fakta, **flervalg hjemmel-vs-utfall**, **lovvalg-kartet**) etableres her og gjenbrukes
   ordrett i alle senere kapitler.
3. **Del 1 → Del 2 → Del 3 → Del 4 → Del 5 → Del 6** (de seks søylene) — regelkapitler før
   typetilfellekapittel innen hver del; følg prerequisites-kjeden (1.1 binding før 1.3 ugyldighet før
   1.5; 2.1 lovvalg før 2.2 mangel før 2.3/2.4 før 2.7; 3.1 § 14-9 før 3.2/3.3; 4.1 selskapsform før
   4.2/4.3/4.4/4.5; 5.1 foreldelse før 5.2/5.5; 6.1 åpenhetsloven før 6.4). Hvert kapittel bygges med
   **begge spor** (praktikum + flervalgsbank).
4. **Del 7** (kap. 7.1–7.4) — hjemmelvalg-/flervalgsdrill først, deretter de tre øvingseksamenene;
   kap. 7.4 forutsetter hele boka. Bygges av én agent som leser hele skjelettet.
5. **Batching (fase 4):** én agent per hel del; gi agenten HELE delens kontrakter. **Del 2 (7 kap.)**
   kan deles, men gi begge agentene HELE delens kontrakter og flagg for konsistenssjekk. Del 7 bygges
   av én agent som leser hele skjelettet.
6. **Narrativ-versjoner** (`<id>-narrativ.json` per kapittel) og quiz/flashcards per kvotene — quiz
   (inkl. flervalgsbanken) skrives samtidig med hvert kapittel. **Kvotene i §4 er fasit.**
7. **Prøvene** (4 per del) etter delens kapitler. **Studieguiden** til slutt.

### Verifikasjonssjekkliste (kjøres FØR ferdigmelding)

- [ ] **JSON-validering:** samtlige nye `chapters/*.json` parses med `json.load` (én uescapet
      anførsel kan blokkere hele prebuild).
- [ ] **Obligatorisk Lovdata-verifikatør (fase 6):** ALLE paragrafhenvisninger sjekkes mot GJELDENDE
      lov, med særskilt kontroll av **🔶-postene** i §9 — grep `-i verifiser` (ikke bare `(verifiser)`).
      Bekreft særlig **aml. § 14-9 (opphevet generell adgang)**, **asl. § 6-11 a (terskelverdier)**,
      **fkjl. (2024)**, **fal. §§ 2/3/10/14/15**, **asl. §§ 4-19/4-23**.
- [ ] **Rettstilstand, ikke bare referanser:** kontroller at intet kapittel gjengir foreldet rett som
      gjeldende (opphevet midlertidighetsadgang; ASA-bare kjønnsrep.; gammel fkjl.). «Endret/gjeldende
      lov»-boksene skal finnes i kap. 3.1, 3.5, 4.4, 4.5, 2.2, 2.3, 2.4, 6.1.
- [ ] **Flervalg-integritet:** hvert kapittels Spor B har flervalg med **`options[0]` = riktig** og
      distraktorer som parer **rett utfall + feil hjemmel** (hjemmel-vs-utfall), inkl. regne-flervalg.
- [ ] **Quiz-/flashcard-sum:** ≥500 quiz / 550–650 flashcards totalt og samsvar med kvotetabellen (§4,
      ±10 % per kapittel OK; totalen **626/592** skal holde).
- [ ] **Prøver:** 4 per del, 32 totalt, alle med må/pluss/felle-fasit.
- [ ] **Opphavsrett:** ALLE faktum, parter, virksomheter, bransjer, beløp og datoer er nyskrevne —
      gjengangernavn (Peder Ås/Marte Kirkerud/Kari/Lillevik) OK, men ingen gjenkjennbare eksamensfakta.
- [ ] **Seks-søyle-jevnvekting:** Del 1–6 har tilnærmet lik kapittel-/kvotevekt (kjøpsrett marginalt
      tyngst); ingen søyle underlevert; erstatning utenfor kontrakt kun kort «bør kjenne til» (kap. 7.1).
- [ ] **DNA-blokkene på plass:** hvert kapittel har «Eksamensvinkel» (`tip`), «Typiske feil»
      (`warning`), «Paragraf- og begrepsliste» (`collapsible`, per delkapittel), **Spor A + Spor B**,
      og regel-/typetilfellekapitlene har «Paragraf- og hjemmelregister» (`collapsible`, ingen
      domsregister); øvingseksamenene har modell-løsning + Sensorblikket + distraktoranalyse.
- [ ] **`npm run build`** grønn før ferdigmelding (arbeidsregel i CLAUDE.md).

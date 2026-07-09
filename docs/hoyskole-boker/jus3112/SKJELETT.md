# Bokskjelett: JUS3112 Formuerett I — eksamensrettet lærebok

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
> krav, feller) står derfor eksplisitt per kapittel. Alle faktum-mønstre er omskrevne
> maler; forfatteren skal skrive HELT NYE faktum i samme sjanger (nye parter, selskaper,
> beløp, datoer, bransjer, eiendeler, ytelser). Arketype: **DNA-jus.md**.
>
> **Rettstilstand (KRITISK — les §1.2 og §8 før regelkontraktene brukes):** Boken bygger på
> **GJELDENDE rett** per juli 2026. **Det sensitive rettstilstandsflagget her er forbrukerkjøps-
> loven, som ble vesentlig endret med virkning fra 1. januar 2024** (EU-tilpasning: varekjøps-
> direktivet + digitalytelsesdirektivet, jf. lov 24. juni 2022 nr. 51, *(verifiser lov/dato)*).
> Endringen berører **mangelsbegrepet, kravene til varens egenskaper, reklamasjon og hevings-
> terskelen** i forbrukerkjøp. **Hele eksamensarkivet er H2021 og eldre — alle besvarelser og
> sensorspor der bygger på GAMMEL fkjl.** Boka skal bruke gjeldende forbrukerkjøpslov og ha en
> **«Endret lov»-boks** der forbrukerkjøp behandles (kap. 5.1), slik at studenten ikke drar med
> seg foreldet doktrine. Dette speiler JUS1111-lærdommen (fkjl. § 17-læren var foreldet).
> **Sekundært flagg:** kausjon for forbrukere reguleres nå av **finansavtaleloven (2020, i kraft
> 1.1.2023)** — ikke lenger rent ulovfestet (kap. 9.3, *(verifiser)*). Avtaleloven (1918)
> §§ 1–39, kjøpsloven (1988), avhendingslova (1992), håndverkertjenesteloven (1989),
> foreldelsesloven (1979), gjeldsbrevloven (1939) og markedsføringsloven (2009) er stabile
> grunnstammer med lav driftrisiko, men lovtekst dobbeltsjekkes i fase 6. **Forbehold:** Det
> finnes **ingen sensorveiledninger** i arkivet — sensorkravene, nivåskillene (A–F) og «typiske
> feil» er UTLEDET av oppgaveordlyd + fagets metode (markert der de brukes). Hele arkivet er
> dessuten under **forgjengerkoden JUS3111** (overføring til JUS3112 er svært sannsynlig, jf.
> H2021-dobbeltkjøringen, men formelt en *(verifiser)*-slutning). Poster merket *(verifiser)*
> har kjent usikkerhet og skal sluttkontrolleres i fase 6 av en obligatorisk **Lovdata-
> verifikatør** (se §8/§9).

---

## 1. Bokens identitet

### 1.1 Kortfakta

| Felt | Verdi |
|---|---|
| Kurs-id | `jus3112` |
| Tittel | **JUS3112 Formuerett I** |
| Level | `Høyskole` |
| Institusjon | Universitetet i Oslo (Det juridiske fakultet) |
| Fagområde | jus |
| Arketype | jus (rettsdogmatisk med praktikum) — med dokumenterte DNA-avvik, se §7 |
| Pitch | Boka trener nøyaktig det JUS3112-eksamen prøver: kontraktspraktikum der samme faktum reiser tvister i **tre søyler** — avtalerett (avtaleinngåelse, fullmakt, ugyldighet §§ 28–36, tolking, bristende forutsetninger), kontrakts-/obligasjonsrett (mislighold, mangel og misligholdsbeføyelsene heving/prisavslag/retting/erstatning med reklamasjon og foreldelse som innebygde motanførsler) og pengekravsrett (foreldelse, cesjon/gjeldsbrev, direktekrav, kausjon) — pluss et **fullverdig teori-spor** (3/14 sett er ren teorieksamen). A-ferdigheten er å (1) **skille ugyldighet, mislighold og forutsetningssvikt** (angripe avtalen på RIKTIG grunnlag), og (2) **holde misligholdsbeføyelsene fra hverandre** (heving, prisavslag og erstatning har egne vilkår og avgjøres selvstendig — aldri slås sammen). Du lærer å subsumere skjønnsmessige vilkår («mangel», «vesentlig kontraktsbrudd», «urimelig», «redelighet og god tro», «i rimelig tid», «aktsom god tro») på faktumets datoer og beløp — som styrer reklamasjons- og foreldelsesfrister — håndtere prinsipale/subsidiære anførsler i rekkefølge, og velge **riktig lov** når Lovdata Pro er åpen (kjøpsloven vs. forbrukerkjøpsloven vs. avhendingslova vs. håndverkertjenesteloven; avtl. § 33 vs. § 36; ugyldighet vs. mislighold). Bygget på 14 eksamensgjennomføringer 2015–2021. **Materiell kunnskap alene gir C** — denne boka trener subsumsjon, strukturvalg og å se de prinsipale OG subsidiære spørsmålene. |
| Kapittelantall | **40** (Del 0: 4, Del 1: 2, Del 2: 2, Del 3: 4, Del 4: 2, Del 5: 4, Del 6: 6, Del 7: 4, Del 8: 2, Del 9: 4, Del 10: 2, Del 11: 4) |
| Estimert totaltid | **~2 250 minutter (~37,5 timer)** |
| Quiz totalt | **584** (krav ≥500) |
| Flashcards totalt | **616** (sikt 550–650) |
| Prøver | **48** (4 per del × 12 deler; krav ≥4 per del) |
| Eksamensform boka kalibreres mot | **Digital skoleeksamen (Inspera)**, historisk **6 timer** (H2020 var COVID-forkortet 4 t — ikke normalformat); 2–4 deloppgaver/forhold som spenner over pensum (praktikum ~3/4 av volumet + fast teori-/begrepsoppgave); **Lovdata Pro i eksamensmodus** + inntil to rettskrivingsordbøker; **karakterskala A–F**. *(verifiser gjeldende JUS3112-emneside: timetall, studiepoeng, pensum.)* |

**Emnets omfang:** Formuerett I dekker **avtalerett**, **alminnelig obligasjons-/kontraktsrett**
(mislighold og misligholdsbeføyelser) og **pengekravsrett** (cesjon/gjeldsbrev, motregning,
foreldelse, kausjon, regress/solidaritet, direktekrav). Studiepoengvekten *(verifiser)* er
retningsgivende, men eksamen fletter søylene: ett praktikum kombinerer typisk avtalerett +
mislighold + et pengekravsrettslig delspørsmål, og kandidaten kan ikke spisse seg på ett felt.

**Avgrensning (ufravikelig — arbeidsdeling mot JUS3213):** **Statisk tingsrett og panterett er
IKKE testet i noe av de 14 settene** (0/14) og skal IKKE ha egne kapitler. **Dynamisk formuerett**
(kreditorbeslag, rettsvern, godtroerverv/ekstinksjon, prioritet, konkurs/omstøtelse) og
**selskapsrett** hører til **JUS3213 Formuerett II** og dekkes ikke her. Der en pengekravsrettslig
tvist grenser mot tredjemannskollisjon (f.eks. gbl. § 29-kollisjon mellom flere cesjonarer,
godtroerverv av krav), **kryssbok-lenkes** det til JUS3213 med **aktiveringsmarkør** — JUS3213-boka
er foreløpig kun skjelett (**ubygd**), så lenkene merkes «(JUS3213 — under bygging)» og aktiveres når
den boka er live. JUS3112 skal bruke ressursene på kontrakts- og pengekravsrett, ikke pant/rettsvern.

### 1.2 Rettstilstandsflagg — forbrukerkjøpsloven (ufravikelig)

**A. Forbrukerkjøpsloven er vesentlig endret — bruk gjeldende versjon.** Med virkning fra
**1. januar 2024** (EU-tilpasning: varekjøpsdirektivet (EU) 2019/771 + digitalytelsesdirektivet
(EU) 2019/770, gjennomført ved lov 24. juni 2022 nr. 51, *(verifiser lovnummer/dato/ikrafttredelse
mot Lovdata i fase 6)*) endret forbrukerkjøpsloven bl.a. **mangelsbegrepet og kravene til varens
egenskaper** (objektive og subjektive krav, oppdateringer for varer med digitale elementer),
**reklamasjonsreglene** og terskelen/virkningene for forbrukerens beføyelser. **Hele eksamensarkivet
er H2021 og eldre** — alt der bygger på **gammel fkjl.** Boka skal bruke **gjeldende** tekst der
forbrukerkjøp behandles (kap. 5.1 mangelsvurdering, kap. 6 beføyelser/reklamasjon), og kap. 5.1 har
en obligatorisk **«Endret lov»-boks** som forklarer skiftet slik at studenten ikke drar med seg
foreldet doktrine fra eldre besvarelser. Speiler JUS1111-lærdommen (fkjl. § 17-læren var foreldet
og krevde doktrinær omskriving).

**B. Kausjon flyttet til finansavtaleloven.** Kausjon for **forbrukere** reguleres nå av
**finansavtaleloven (lov 18. desember 2020 nr. 146, i kraft 1. januar 2023)** kapittel om
kausjon, ikke lenger rent ulovfestet/eldre finansavtalelov. Kap. 9.3 bygger på gjeldende ordning
og markerer at eldre eksamensfakta (V2019) forutsatte tidligere rett. *(verifiser paragrafer og
ikrafttredelse i fase 6.)*

**C. Stabile grunnstammer (lav driftrisiko — dobbeltsjekkes likevel i fase 6).** Avtaleloven
(1918) §§ 1–39, kjøpsloven (1988), avhendingslova (1992), håndverkertjenesteloven (1989),
foreldelsesloven (1979) og gjeldsbrevloven (1939) er materielt stabile i perioden. Avtl. § 36 er
stabil; sammenligningen mot markedsføringsloven (2009) § 22 (V2018-typen) oppdateres mot gjeldende
markedsføringslov. **Alle paragrafhenvisninger er merket *(verifiser)* og slås opp mot Lovdata i
fase 6** — ingen Lovdata-oppslag er gjort i dette skjelettet (bevisst; verifikasjon er lagt til
fase 6 per oppdrag).

---

## 2. Makrostruktur

Ryggraden er den **gjennomgående ferdigheten** faget signerer med: å møte ett faktum som reiser
tvister i **alle tre søyler** (avtalerett → kontraktsrett → pengekravsrett) og å velge **riktig
grunnlag og riktig lov** i et fag der Lovdata Pro er åpen (så regelgjengivelse er gratis, og feil
grunnlag/lovvalg straffer seg hardt gjennom hele drøftelsen). Rekkefølgen er pedagogisk: eksamenskart
og praktikumhåndverk med de to fallgruve-metodemodulene først (Del 0), deretter **avtaleretten**
(Del 1 avtaleinngåelse/tolking → Del 2 fullmakt → Del 3 ugyldighet §§ 28–36 → Del 4 bristende
forutsetninger/§ 36), så fagets **tyngdepunkt kontraktsretten** (Del 5 mislighold/mangel → Del 6
misligholdsbeføyelsene og reklamasjon → Del 7 erstatning i kontrakt), så **pengekravsretten** (Del 8
foreldelse → Del 9 cesjon/gjeldsbrev/direktekrav/kausjon), så det faste **teorisporet** (Del 10) og
til slutt samlet **eksamenstrening** med komplette flertvist-praktikum og teori-/simuleringsmodell
(Del 11). **Omfanget** følger gjenganger-score fra analysen §2 og prioriteringen i §7 — derfor er
avtalerett (Del 1–4, 10 kap.) og kontraktsrett (Del 5–7, 14 kap.) fagets to største blokker, i tråd
med at begge testes i ~11 av 14 sett.

| Del | Innhold (sectionName) | Kap. | Begrunnelse (gjenganger-score av 14 sett 2015–2021) |
|---|---|---|---|
| **Del 0** | Eksamenskart og praktikumhåndverk | 4 | DNA-obligatorisk. To sjangre må trenes (praktikum + teori — teori er sterkere gjenganger her enn i JUS3213: 3/14 rene teorieksamener). Fagets **to største fallgruver** får hver sin metodemodul: (0.3) skille ugyldighet ≠ mislighold ≠ forutsetningssvikt; (0.4) holde beføyelsene (heving/prisavslag/erstatning) fra hverandre + teorispor-mal + reklamasjon/foreldelse-motanførsel-note. |
| **Del 1** | Avtalerett: avtaleinngåelse og tolking | 2 | Avtalerett ~11/14 (★★★★★). Tolking/utfylling ~4 (H2017, V2017, V2019, H2018). Binding, tilbud/aksept og tolkingsprinsipper er porten inn i avtaleretten. |
| **Del 2** | Avtalerett: fullmakt og legitimasjon | 2 | Fullmakt ~4 (H2016, V2018 kombinasjonsfullmakt, V2019, V2020). «Fullmakt på ville veier» er en fast praktikum-mal. |
| **Del 3** | Avtalerett: ugyldighet §§ 28–36 | 4 | Ugyldighet ~6 (V2015, H2017, H2018, V2019, H2019, V2020). Tvang §§ 28–29, svik/utnyttelse §§ 30–31, redelighet § 33, urimelighet/lemping § 36. En av fagets to største blokker. |
| **Del 4** | Avtalerett: bristende forutsetninger og § 36 | 2 | Forutsetningslæren ~2–4 (H2017, H2018) + «vei ut av en byrdefull avtale»-malen (H2019, H2020, V2015). Grensedragningen mot ugyldighet og mislighold er fallgruve I i konsentrat. |
| **Del 5** | Kontraktsrett: mislighold og mangel | 4 | Mangelsvurdering ~9 (STØRST på typetilfelle-nivå). Lovvalg (kjl./fkjl./avhl./hvtjl.), avvik fra avtalt/forventet ytelse, opplysnings-/undersøkelsesplikt, «som den er»-forbehold, risiko. Fagets tyngdepunkt. |
| **Del 6** | Kontraktsrett: misligholdsbeføyelsene og reklamasjon | 6 | Beføyelseskaskaden bærer nesten hvert praktikum. Retting/omlevering, prisavslag ~4, heving ~5, reklamasjon ~4, avbestilling ~3 og kreditormora ~2 — hver med egne vilkår. Fallgruve II innprentes gjennom hele delen. |
| **Del 7** | Kontraktsrett: erstatning i kontrakt | 4 | Erstatning i kontrakt ~6–7 (★★★★☆). Ansvarsgrunnlag (kontrollansvar/culpa/garanti), positiv/negativ interesse (Bodum, Blårev), ansvarsfraskrivelse ~3, tapsbegrensning. |
| **Del 8** | Pengekravsrett: foreldelse | 2 | Foreldelse ~5 (V2015, V2019, H2019, V2020, V2021). Fast motanførsel i praktikum; frister, tilleggsfrist, fristavbrudd/erkjennelse — koblet til reklamasjon. |
| **Del 9** | Pengekravsrett: cesjon, gjeldsbrev, direktekrav og kausjon | 4 | Cesjon/gjeldsbrev ~4 (H2016, H2018, V2019), direktekrav ~4 (H2015 kjl. § 84, V2019, V2021), kausjon/regress/solidaransvar ~2 (V2019, V2021), condictio indebiti ~2 (H2017, H2019). Innsigelses- og legitimasjonsvern; kravet i kjeden. |
| **Del 10** | Teori-sporet: begrep, sammenligning og hensyn | 2 | Teori/rettspolitisk 3/14 rene sett (H2018, V2018, H2021) + teoridel i ~3 til. Begrepsredegjørelse, sammenligning på faste akser, «hensyn bak regelen», lære-fremstillinger (condictio indebiti, kreditormora, kombinasjonsfullmakt). Eget spor. |
| **Del 11** | Eksamenstrening: praktikum og modellbesvarelser | 4 | DNA-obligatorisk sluttdel: se-tvistepunktene-drill + ≥3 komplette modellbesvarelser (2 praktikum, inkl. ett med beføyelses-drøfting; 1 teori) + full simulering. |

**Prioritetsklassene** (fra analysens §7) styrer oppgavemengde og dybde per kapittel:
- **perfekt** = «må beherskes perfekt» (bærer karakteren; testes i flertallet av sett)
- **kunne** = «må kunne» (skiller sterke besvarelser)
- **kjenne** = «bør kjenne til» (plusspoeng-/randsone-stoff)

**Gjennomgående byggekrav** (gjelder ALLE kapitler, gjentas ikke per kapittel):
- Hvert kapittel har `tip`-blokk **«Eksamensvinkel»** og `warning`-blokk **«Typiske feil»**
  (innhold angitt per kapittel).
- Regel- og typetilfellekapitler avsluttes med `collapsible` **«Paragraf- og domsregister»** —
  hurtigoppslag for de §§, prinsipper og dommer kapitlet bruker.
- Hvert delkapittel som bruker paragraf-/vilkårsapparat får en `collapsible` **«Paragraf- og
  begrepsliste»** rett etter Forkunnskaper (jus-analogen til symbol-/formellista) — forklarer alle
  sentrale bestemmelser og faguttrykk i delkapitlet (f.eks. «reklamasjon» = melding til motparten om
  at ytelsen er mangelfull, med krav om å reagere innen en frist; «positiv kontraktsinteresse» = å
  bli stilt som om kontrakten var riktig oppfylt; «negativ kontraktsinteresse» = å bli stilt som om
  avtalen ikke var inngått; «kontrollansvar» = det tilnærmet objektive erstatningsgrunnlaget i
  kjl. § 27; «cesjon» = overdragelse av et pengekrav til ny kreditor).
- **De to fallgruve-metodemodulene (kap. 0.3 og 0.4) etablerer et fast språk** («hvilket grunnlag?»
  og «én beføyelse om gangen») som gjenbrukes ordrett i regel-, typetilfelle- og praktikumkapitlene.
- Oppgaver følger sjangrene fra analysen §3: anførselsdrevet, flerdelt **minipraktikum** (kort
  faktum, ett–to tvistepunkter, med prinsipale/subsidiære anførsler lagt i partenes munn), disponert
  **problemstilling → hjemmel/lovvalg → normklarlegging (ordlyd + rettskilder) → subsumsjon →
  konklusjon**, med fasit merket **må-punkter / pluss-punkter / feller**. Stigende vanskelighet som
  ender på eksamensnivå. Teorikapitlene bruker teori-sjangermalen (oversikt / sammenligning på faste
  akser / hensyn), IKKE praktikumdisposisjon.
- **Subsumsjonen er kongen.** Fordi Lovdata Pro er tilgjengelig gir regel-/domsgjengivelse tilnærmet
  null; poengene ligger i den konkrete anvendelsen av faktumets datoer og beløp (som styrer
  reklamasjons- og foreldelsesfrister og god tro-/urimelighetsvurderinger) og i å se **alle** spørsmål,
  inkludert de subsidiære. Innprentes i hvert kapittel.
- **To-trinns-metode:** normklarlegging FØR subsumsjon — aldri bland. **Kumulative vilkår** drøftes
  vilkår for vilkår; **alternative grunnlag og beføyelser** holdes fra hverandre og avgjøres hvert
  for seg.
- **Riktig lovvalg** understrekes fordi Lovdata er åpen: kjøpsloven vs. forbrukerkjøpsloven vs.
  avhendingslova vs. håndverkertjenesteloven; avtl. § 33 vs. § 36; ugyldighet vs. mislighold vs.
  forutsetningssvikt.
- **Reklamasjon og foreldelse er innebygde motanførsler** (analysens §5): nesten hvert praktikum har
  datoer lagt inn for å teste fristene. Hvert relevant kapittel (Del 5–9) minner om å sjekke om kravet
  er reklamert i tide (relativ/absolutt frist) og om det er foreldet — se motanførsel-noten i kap. 0.4.
- Dommer refereres (kallenavn + Rt./HR-nummer + hva de brukes til), aldri gjengis i lengde;
  forarbeider likeså. Der analysen ikke ga et konkret dommavn, står `(sentral HR-praksis — verifiser
  konkret avgjørelse i fase 6)`. Domskanon i arkivet er svært tynn (kun **Rt-2002-1110 Bodum** og
  **Rt-1938-602 Blårev**, begge for positiv/negativ interesse) — øvrig praksis bygges fra gjeldende
  pensumlitteratur og verifiseres i fase 6.
- **Konklusjonen er ofte underordnet** der vilkåret er skjønnsmessig — drøftelsen bærer;
  oppgavefasitene sier «begge løsninger godtas» der spørsmålet er åpent, og reserverer fasitsvar for
  spørsmål med ett riktig svar (frister, lovvalg, formkrav, hvem som hefter).
- **Alle paragraf- og domsreferanser verifiseres mot Lovdata i fase 6**; referanser merket
  *(verifiser)* har kjent usikkerhet. **Forbrukerkjøp bruker GJELDENDE fkjl. (2024-endringen).**

---

## 3. Kapitler

### DEL 0 — Eksamenskart og praktikumhåndverk

---

#### Kapittel 0.1: Eksamenskartet — slik testes JUS3112
- **id:** `jus3112-0-1` · **number:** 0.1 · **estimatedMinutes:** 30 · **prerequisites:** ingen
- **Kapitteltype:** eksamenskart
- **description:** Hva eksamen faktisk er: digital skoleeksamen (historisk 6 t) med 2–4 deloppgaver/forhold over tre søyler, hvilke rettsområder som testes hvor ofte, og hva som antas å skille A fra C fra E.
- **Eksamensbelegg:** Hele empirien 2015–2021 (14 sett, alle under forgjengerkoden JUS3111; H2021 kjørte JUS3111 og JUS3112 parallelt — overføringen er derfor solid *(verifiser)*). Presenter: (a) formen — digital Inspera, historisk 6 t (H2020 COVID-forkortet 4 t, ikke normal), Lovdata Pro i eksamensmodus + to ordbøker, A–F; oppgaven bygges av praktikum med «Del I/II(/III)» eller nummererte forhold «(1)/(2)/(3)», ofte med anslått tidsbruk; (b) rettsområde-frekvens: kontraktsrettslig mislighold ~11/14, avtalerett ~11/14, erstatning i kontrakt ~7/14, foreldelse ~5, cesjon/gjeldsbrev ~4, direktekrav ~4; **statisk tingsrett/panterett 0/14** (utelatt, hører til JUS3213); (c) **tre sjangre veksler:** rent praktikum (~11/14), REN teori (3/14 — H2018, V2018, H2021), praktikum + kort teoridel (~3); (d) **kombinasjonsmønsteret:** ett praktikum kombinerer typisk avtalerett + mislighold + et pengekravsrettslig delspørsmål — kandidaten kan ikke spisse seg.
- **Regelkontrakt:** Ingen materielle regler — men frekvenstabellene (mislighold/mangel ~11, avtalerett ~11, erstatning ~7, foreldelse ~5, cesjon ~4, direktekrav ~4, reklamasjon ~4, ugyldighet ~6, fullmakt ~4, kreditormora ~2, condictio indebiti ~2, kausjon/regress ~2) gjengis som studentens prioriteringskart.
- **Metodepoenger:** Emnet har TRE sjangre — praktikum (~3/4), ren teori (3/14) og praktikum + teoridel — som må trenes hver for seg. **Teori er en sterkere gjenganger her enn i JUS3213** — teorisporet (Del 10) er fullverdig, ikke en fotnote. A–F belønner finkalibrering; de skjulte skillepunktene må synliggjøres for å løfte C til A.
- **Typiske feil:** Å lese boka som pensumdekning i stedet for eksamenstrening; å spisse seg på én søyle; å nedprioritere teori-sjangeren; å bruke ressurser på pant/tingsrett (0/14).
- **Kvote:** quiz 10 · flashcards 10

---

#### Kapittel 0.2: Praktikumsmetoden — prinsipalt/subsidiært, kumulative vilkår og subsumsjon
- **id:** `jus3112-0-2` · **number:** 0.2 · **estimatedMinutes:** 55 · **prerequisites:** `jus3112-0-1`
- **Kapitteltype:** metode
- **description:** Slik bygges en JUS3112-praktikumsbesvarelse: identifiser hvert selvstendige rettsspørsmål, velg riktig lov/hjemmel, håndter prinsipale/subsidiære anførsler i rekkefølge, drøft kumulative vilkår ett for ett, og la subsumsjonen på faktumets datoer og beløp bære besvarelsen.
- **Eksamensbelegg:** Generalinstruksen er nesten alltid «drøft og avgjør de prinsipale og subsidiære rettsspørsmål oppgaven reiser». Partene får uttrykkelige, motstående anførsler i rekkefølge (H2017: prinsipalt at kostnadstaket ikke gjelder, subsidiært endringsavtale, atter subsidiært bristende forutsetninger/§ 36). Faktum er tettpakket med datoer og beløp som styrer reklamasjons-/foreldelsesfrister og god tro-vurderingene.
- **Regelkontrakt (metoderegler, utledet av oppgaveordlyd + fagets metode):**
  1. **Spørsmålsanalysen:** hvem krever hva av hvem, på hvilket rettslig grunnlag — utledes av anførslene FØR skrivingen; hver selvstendige tvist får egen problemstilling.
  2. **Firetrinnskravet per tvistepunkt:** presis problemstilling → **riktig lov + paragraf** (kjøpsloven vs. forbrukerkjøpsloven vs. avhendingslova vs. håndverkertjenesteloven; avtl. § 33 vs. § 36) → **normklarlegging** (ordlydstolkning av det skjønnsmessige vilkåret + rettskilder) → **subsumsjon på faktums konkrete momenter** → konklusjon.
  3. **Prinsipalt før subsidiært:** følg partenes anførselsrekkefølge; å hoppe over rekkefølgen eller slå anførslene sammen antas å trekke.
  4. **Kumulative vilkår** drøftes vilkår for vilkår; **alternative grunnlag og beføyelser** holdes fra hverandre og avgjøres hvert for seg (utdypes i kap. 0.3 og 0.4).
  5. **Bruk faktumet aktivt:** datoene styrer frister (reklamasjon, foreldelse), beløpene styrer terskler (forholdsmessig prisavslag, tapsutmåling), og «hvem visste hva når» styrer god tro/ond tro og opplysningsplikt.
  6. **Med Lovdata åpen er regelgjengivelse gratis** — tyngden ligger på anvendelsen; løsrevet regel-/domsreferat uten kobling til faktum antas å trekke.
  7. **Respekter forutsetninger og avgrensninger** (H2019: «tilbaketrekking re integra, jf. avtl. § 39, skal ikke drøftes»; V2021: «årsakssammenheng og påregnelighet skal ikke drøftes»; V2020 avskjærer skl. § 2-1).
- **Typetilfeller:** 2 `example`-blokker: (a) et anførselssett med prinsipal/subsidiær-struktur (nyskrevet) → vist spørsmålsanalyse → disposisjon; (b) samme tvistepunkt drøftet to ganger — én gang som ren regelgjengivelse (verdiløst med Lovdata åpen), én gang med faktumnær subsumsjon (beløp, datoer, partenes kunnskap koblet til vilkårene) — A/C-skillet visualisert.
- **Metodepoenger:** Subsumsjonen er kongen. Kort om det klare (én setning på uproblematiske vilkår gir pluss), dybde i tvilspunktene. Riktig lovvalg forplanter seg gjennom hele drøftelsen. Anførselsrekkefølgen er en disposisjonsnøkkel.
- **Typiske feil:** Konstatering i stedet for drøftelse; å slå prinsipale og subsidiære anførsler sammen; feil lovvalg; løsrevne regel-/domsreferat; å drøfte det bortavgrensede; å dikte opp faktum (et forbehold, en reklamasjon, en anførsel som ikke står i teksten).
- **Kvote:** quiz 14 · flashcards 14

---

#### Kapittel 0.3: Fallgruve I — skill ugyldighet, mislighold og forutsetningssvikt
- **id:** `jus3112-0-3` · **number:** 0.3 · **estimatedMinutes:** 55 · **prerequisites:** `jus3112-0-2`
- **Kapitteltype:** metodemodul (fagets største strukturfelle)
- **description:** Den viktigste sorteringsøvelsen i faget: å avgjøre om faktum reiser en **ugyldighetsinnsigelse** (feil ved avtaleinngåelsen — tvang, svik, uredelighet, urimelighet §§ 28–36), et **mislighold** (feil ved OPPFYLLELSEN — mangel/forsinkelse med beføyelser) eller **forutsetningssvikt** (etterfølgende/uriktige forutsetninger, forutsetningslæren/§ 36) — fordi de svarer på ULIKE spørsmål, har ulike vilkår og ulike virkninger.
- **Eksamensbelegg:** Sensornøkkel-felle nr. 1 (utledet, analysens §5): «å angripe en avtale på feil grunnlag (ugyldighet der problemet er mislighold, eller omvendt) er en typisk strukturfelle.» Konflikttypen ligger innbakt i «vei ut av en byrdefull avtale»-malen (H2019, H2020, V2015) og i hvert mangels-/ugyldighetspraktikum. Prioritetsklasse: **perfekt** (metode).
- **Regelkontrakt (skille-verktøyet, ikke materiell rett):**
  - **Ugyldighet:** spørsmålet er om avtalen er **bindende i det hele tatt** — feilen ligger ved **inngåelsen** (tvang §§ 28–29, svik § 30, utnyttelse § 31, uredelighet/god tro § 33, urimelighet § 36). Virkning: avtalen faller bort (helt/delvis), oppgjør etter restitusjons-/berikelsesregler. Ingen reklamasjons-/mangelsvilkår.
  - **Mislighold:** avtalen er **gyldig**, men **oppfyllelsen** svikter (mangel/forsinkelse). Vurderingstema: avvik fra avtalt/forventet ytelse. Virkning: **misligholdsbeføyelser** (retting, prisavslag, heving, erstatning) — betinget av **reklamasjon** i tide og ev. «som den er»-forbehold.
  - **Forutsetningssvikt:** avtalen er gyldig inngått, men en **forutsetning** var uriktig eller har **bristet** (etterfølgende endrede forhold). Ulovfestet forutsetningslære + § 36 (etterfølgende urimelighet). Virkning: bortfall/lemping. Grenser mot både ugyldighet (uriktig forutsetning ved inngåelsen) og mislighold.
  - **Diagnosespørsmålet:** «Ligger feilen ved INNGÅELSEN (ugyldighet), ved OPPFYLLELSEN (mislighold), eller i en sviktende FORUTSETNING?» Svaret bestemmer hjemmelsspor, vilkår og virkning.
- **Typetilfeller:** 2–3 `example`-blokker: samme grunnfaktum (kjøper vil ut av et eiendomskjøp) vist som (a) ugyldighet (selger holdt tilbake opplysninger ved inngåelsen → § 33); (b) mislighold (eiendommen har en skjult mangel → mangelsbeføyelser + reklamasjon); (c) forutsetningssvikt (etterfølgende omregulering ødela formålet → forutsetningslæren/§ 36) — og grensetilfellet der flere grunnlag påberopes prinsipalt/subsidiært og må holdes fra hverandre.
- **Metodepoenger:** Start ALLTID med å avklare hvilket grunnlag faktum reiser før hjemmel velges. De tre kan påberopes prinsipalt/subsidiært i samme sak, men drøftes hver for seg med egne vilkår. § 36 opptrer i to roller (opprinnelig urimelighet = ugyldighetsspor; etterfølgende = forutsetningsspor) — hold dem fra hverandre.
- **Typiske feil:** Å angripe avtalen på feil spor (ugyldighet der problemet er mangel); å blande § 33 (inngåelse) og mangelsvurdering (oppfyllelse); å behandle konkurrerende grunnlag som ett; å hoppe rett til § 36 uten å avklare om feilen ligger ved inngåelse eller etterpå.
- **Kvote:** quiz 14 · flashcards 16

---

#### Kapittel 0.4: Fallgruve II — hold beføyelsene fra hverandre + teorispor-mal + reklamasjon/foreldelse-noten
- **id:** `jus3112-0-4` · **number:** 0.4 · **estimatedMinutes:** 55 · **prerequisites:** `jus3112-0-2`
- **Kapitteltype:** metodemodul (fagets andre store felle) + teorispor-mal + motanførsel-note
- **description:** Tre ferdigheter: (1) å behandle misligholdsbeføyelsene — **retting/omlevering, prisavslag, heving og erstatning** — som SELVSTENDIGE, hver med egne vilkår, terskel og virkning, aldri slått sammen; (2) malen for teori-/begrepsoppgaven; (3) den innebygde **reklamasjons- og foreldelses-motanførselen** som datoene i faktum tester.
- **Eksamensbelegg:** Sensornøkkel-felle nr. 2 (utledet, analysens §4.1/§5): «beføyelser holdes fra hverandre — heving, prisavslag og erstatning har egne vilkår og virkninger og skal avgjøres selvstendig, ikke slås sammen.» Beføyelseskaskaden («prinsipalt heving, subsidiært prisavslag, atter subsidiært erstatning») går igjen i H2015, V2016, H2017, V2017, H2020. Reklamasjon/foreldelse som motanførsel: H2015, V2016, V2021, V2015, V2019, H2019, V2020. Teorioppgaven forekom i 3/14 rene sett + ~3 teorideler. Prioritetsklasse: **perfekt** (metode).
- **Regelkontrakt (tre verktøy):**
  - **Beføyelsesmatrisen:** for hver beføyelse settes opp egne akser — **vilkår** (retting: kan kreves/tilbys; prisavslag: forholdsmessig, forutsetter mangel; heving: **vesentlig** kontraktsbrudd; erstatning: **ansvarsgrunnlag** + tap + adekvans), **terskel**, **virkning** (fortsatt oppfyllelse vs. oppgjør vs. reversering vs. pengeerstatning), **forhold til de andre** (prisavslag vs. erstatning: ulikt beregningsgrunnlag; heving utelukker ikke erstatning). Prinsipale/subsidiære beføyelser håndteres i rekkefølge; hver konkluderes for seg.
  - **Teorispor-malen:** (a) **begrepsredegjørelse** («redegjør for innholdet i begrepene …») — presis definisjon + avgrensning; (b) **sammenligning** («forskjeller og likheter …», avtl. § 36 vs. mfl. § 22; enkle vs. omsetningsgjeldsbrev) — bruk **faste akser** (vilkår, virkeområde, rettsvirkning, hensyn) side om side, IKKE to atskilte redegjørelser; (c) **hensyn bak regelen** («hvilke hensyn ligger bak kjl. § 84») — vei hensynene (forutberegnelighet, lojalitet, omsetningsvern, forbrukervern, notoritet) mot hverandre; (d) **lære-fremstilling** (condictio indebiti, kreditormora, kombinasjonsfullmakt). Der oppgaven navngir dommer (H2021: Bodum, Blårev), er behandling obligatorisk.
  - **Reklamasjon/foreldelse-noten (gjennomgående motanførsel):** i ethvert mislighold-/pengekravspraktikum skal kandidaten sjekke to innebygde motanførsler: (i) er det **reklamert i tide** (nøytral + spesifisert; relativ frist «innen rimelig tid» + absolutt frist)? (ii) er kravet **foreldet** (3-årsfrist fra forfall, tilleggsfrist, fristavbrudd)? Datoene i faktum er lagt der nettopp for å teste disse — bruk dem aktivt. Noten krysslenkes fra kap. 6.4 (reklamasjon) og Del 8 (foreldelse).
- **Typetilfeller:** `example`: samme mangel analysert gjennom beføyelsesmatrisen (retting/prisavslag/heving/erstatning, fire konklusjoner med ulik terskel); `example`: en sammenligningsoppgave løst på faste akser vs. som to monologer (A/C-kontrast); `example`: et faktum med kritiske datoer der reklamasjon er for sen ELLER kravet er foreldet — motanførselen avgjør.
- **Metodepoenger:** «Én beføyelse om gangen» er selve A-grepet. Terskelen er ulik (heving krever vesentlighet, prisavslag ikke), så utfallet kan bli ulikt per beføyelse. I teorioppgaven: sammenligningen ER oppgaven; to deskriptive bolker uten kobling trekker. Reklamasjon/foreldelse er nesten alltid inne — glem dem ikke.
- **Typiske feil:** Å smelte heving/prisavslag/erstatning til én drøftelse; å bruke samme terskel på alle; å overse reklamasjon og foreldelse; å løse teorioppgaven som praktikum eller besvare en sammenligningsoppgave uten sammenlignende akser.
- **Kvote:** quiz 14 · flashcards 16

**Prøve-kvote Del 0:** 4 prøver (spørsmåls-/anførselsanalyse med prinsipal/subsidiær-struktur; «hvilket grunnlag?»-diagnosedrill (ugyldighet vs. mislighold vs. forutsetningssvikt); beføyelsesmatrise-drill (hold heving/prisavslag/erstatning fra hverandre) + reklamasjon/foreldelse-motanførsel; teorispor-disposisjonsøvelse med faste akser).

---

### DEL 1 — Avtalerett: avtaleinngåelse og tolking (score ~11/14; tolking ~4)

---

#### Kapittel 1.1: Avtaleinngåelse og binding — tilbud, aksept og løftevirkning
- **id:** `jus3112-1-1` · **number:** 1.1 · **estimatedMinutes:** 50 · **prerequisites:** `jus3112-0-3`
- **Kapitteltype:** regel
- **description:** Rammeverket for at en bindende avtale foreligger: tilbud og aksept, løfteprinsippet, akseptfrist og bortfall, samt binding uten formkrav — porten inn i avtaleretten.
- **Eksamensbelegg:** Avtalebinding aktualiseres i bindingstvister (H2016 Kari Holm binder studioet; avtalebinding ved forhandlinger/forbehold). Fundament for fullmakt (Del 2) og ugyldighet (Del 3). Prioritetsklasse: **perfekt** (fundament).
- **Regelkontrakt (avtaleloven 1918):** **§§ 1–9** — tilbud og aksept, løftevirkning (tilbudsgiveren er bundet fra tilbudet kom til kunnskap); **akseptfrist** (§ 2/§ 3), for sen/avvikende aksept som nytt tilbud (§ 6); **§ 7** tilbakekall før/samtidig med at tilbudet kom til kunnskap. Binding uten formkrav (hovedregel); betydningen av forbehold («med forbehold om styregodkjenning»). Grensen mot uforpliktende forhandlinger og *invitatio ad offerendum*. *(verifiser leddstruktur avtl. §§ 1–9 mot Lovdata i fase 6.)*
- **Typetilfeller:** Minipraktikum: en part hevder bindende avtale er inngått i forhandlingsmøte, motparten viser til et forbehold (bundet eller ikke?); avvikende aksept som nytt tilbud.
- **Metodepoenger:** Avklar FØRST om det foreligger en bindende avtale før mislighold/ugyldighet drøftes. Forbehold og løftevirkning er de faktumnære vurderingstemaene.
- **Typiske feil:** Å forutsette binding uten å prøve tilbud/aksept; å overse et forbehold; å blande manglende avtale (ingen binding) med ugyldighet (binding, men angripelig).
- **Kvote:** quiz 14 · flashcards 16

---

#### Kapittel 1.2: Avtaletolking og utfylling — tolkingsprinsipper og bakgrunnsrett
- **id:** `jus3112-1-2` · **number:** 1.2 · **estimatedMinutes:** 60 · **prerequisites:** `jus3112-1-1`
- **Kapitteltype:** regel/typetilfelle
- **description:** Hvordan avtalens innhold fastlegges: objektiv og subjektiv tolking, tolkingsmomenter (ordlyd, formål, partenes forutsetninger, bransjepraksis), uklarhetsregelen, og utfylling av hull med bakgrunnsrett — med gjennomdrøftet tolkingstvist.
- **Eksamensbelegg:** Tolking/utfylling ~4 (H2017 tolking/utfylling + megler; V2017 kildekode-avtale, ansvarsfraskrivelse; V2019 tolking av kausjonserklæring; H2018 teoretisk). Ofte kombinert med mangel eller ansvarsfraskrivelse. Prioritetsklasse: **perfekt**.
- **Regelkontrakt (ulovfestet + avtl.):** **Tolkingsprinsippene** — utgangspunkt i en **objektiv** forståelse av ordlyden i lys av avtalens formål og system; **subjektiv** tolking der partene hadde felles forståelse; momenter: ordlyd, kontekst, partsforutsetninger, etterfølgende opptreden, bransjepraksis, reelle hensyn. **Uklarhetsregelen** (*contra proferentem* — uklarhet tolkes mot forfatteren/den profesjonelle) og **minimumsregelen** for byrdefulle forpliktelser. **Utfylling:** hull suppleres med **deklaratorisk bakgrunnsrett** (kjøpsloven m.fl.) og alminnelige obligasjonsrettslige prinsipper. Forholdet til § 36 (tolking løser noen problemer sensuren ellers måtte). *(verifiser at kausjonstolking behandles med lojalitets-/klarhetskrav — sentral HR-praksis, verifiser konkret avgjørelse i fase 6.)*
- **Typetilfeller:** Gjennomdrøftet variant (NYSKREVET — f.eks. en IT-leveranseavtale med uklar spesifikasjon av «kildekode»/«oppdateringer»): tolking av ordlyd → formål → bransjepraksis → uklarhetsregelen. Øvelsesvarianter (3–5) flytter tvilen mellom objektiv/subjektiv tolking, uklarhetsregel og utfylling med bakgrunnsrett.
- **Metodepoenger:** Skill **tolking** (hva avtalen sier) fra **utfylling** (hva den tier om) fra **sensur** (§ 36, urimelig innhold). Tolking kommer før § 36. Bruk faktums konkrete formuleringer aktivt.
- **Typiske feil:** Å hoppe til § 36 der problemet er ren tolking; å blande tolking og utfylling; å bruke uklarhetsregelen mekanisk uten å prøve de vanlige tolkingsmomentene først.
- **Kvote:** quiz 16 · flashcards 18

**Prøve-kvote Del 1:** 4 prøver (avtalebinding/forbehold-minipraktikum; avtaletolking-praktikum (objektiv/subjektiv + uklarhetsregel); utfylling-med-bakgrunnsrett-øvelse; ren vilkårs-/paragrafprøve avtl. §§ 1–9 + tolkingsprinsipper).

---

### DEL 2 — Avtalerett: fullmakt og legitimasjon (score ~4/14)

---

#### Kapittel 2.1: Fullmaktssystemet — avtl. §§ 10–11, legitimasjon og kombinasjonsfullmakt
- **id:** `jus3112-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `jus3112-1-1`
- **Kapitteltype:** regel
- **description:** Når blir hovedmannen bundet av en mellommann? Fullmaktstypene (frontalfullmakt, stillingsfullmakt, § 10 (2)-fullmakt), legitimasjon vs. rett, overskridelse, kombinasjonsfullmakt og motpartens gode tro.
- **Eksamensbelegg:** Fullmakt ~4 (H2016 avtl. §§ 10–11 binder studioet; V2018 kombinasjonsfullmakt (teori); V2019 tvangspreget «kausjonsfullmakt»; V2020 legitimasjon/god tro). «Fullmakt på ville veier» er en fast praktikum-mal. Prioritetsklasse: **perfekt**.
- **Regelkontrakt (avtaleloven 1918):** **§ 10 (1)** fullmektigen binder hovedmannen innenfor fullmakten; **§ 10 (2)** stillingsfullmakt (den som er ansatt/har en stilling som etter lov/sedvane gir rett til å handle); **§ 11** overskridelse av fullmakten binder ikke hovedmannen dersom motparten forsto/burde forstått overskridelsen; skillet **legitimasjon** (utad, hva motparten kan stole på) vs. **rett** (innad, hva fullmektigen faktisk kan). **Kombinasjonsfullmakt** (ulovfestet — binding bygget på en kombinasjon av omstendigheter selv om ingen enkelt fullmaktstype passer). **§ 25** (fullmektigens ansvar for at han har fullmakt). Motpartens **aktsomme gode tro** er gjennomgangsvilkåret. *(verifiser avtl. §§ 10–11, 25 mot Lovdata i fase 6.)*
- **Typetilfeller:** Minipraktikum: en ansatt inngår en avtale utenfor det stillingen normalt gir rett til (stillingsfullmakt §  10 (2) — rekker den?); en fullmektig overskrider en intern instruks motparten ikke kjente (§ 11 — god tro?).
- **Metodepoenger:** Fastslå FØRST fullmaktstype, DERETTER om den er overskredet, DERETTER motpartens gode tro. Legitimasjon ≠ rett. Kombinasjonsfullmakt er en sikkerhetsventil, ikke førstevalg.
- **Typiske feil:** Å blande legitimasjon og rett; å overse god tro-vilkåret (§ 11); å konstruere kombinasjonsfullmakt uten å prøve de lovfestede typene først; å blande fullmaktsspørsmålet (binding) med ugyldighet (§§ 28–33).
- **Kvote:** quiz 18 · flashcards 22

---

#### Kapittel 2.2: Typetilfelle — bindingstvist ved fullmakt («fullmakt på ville veier»)
- **id:** `jus3112-2-2` · **number:** 2.2 · **estimatedMinutes:** 50 · **prerequisites:** `jus3112-2-1`
- **Kapitteltype:** typetilfelle
- **description:** Gjennomgangsmalen: en mellommann inngår avtale på vegne av hovedmannen; hovedmannen bestrider binding (fullmakten manglet/var overskredet/tvangspreget/bortfalt), motparten påberoper legitimasjon og god tro — ofte med en subsidiær ugyldighetsanførsel.
- **Eksamensbelegg:** «Fullmakt på ville veier» (H2016, V2019, V2020). Foregriper ugyldighet (Del 3) — plasseres sist i Del 2 og krysslenkes. Prioritetsklasse: **perfekt**.
- **Regelkontrakt (tvistepunkt-kartet):** (1) forelå en fullmakt, og av hvilken type (§ 10 (1)/(2), kombinasjonsfullmakt)? (2) var den overskredet (§ 11)? (3) var motparten i **aktsom god tro**? (4) subsidiært: rammes forholdet av **ugyldighet** (tvang §§ 28–29, uredelighet § 33 — kap. 3)? (5) hva blir virkningen (binding, fullmektigens ansvar § 25, restitusjon)? Hvert ledd holdes fra hverandre; bindingsspørsmålet skilles fra ugyldighetsspørsmålet (fallgruve I).
- **Typetilfeller:** Gjennomdrøftet variant (NYSKREVET — f.eks. en daglig leder «kausjonerer»/inngår en leieavtale på selskapets vegne under press fra en kreditor) med margkommentarer om uttelling per ledd. Øvelsesvarianter (3–5) flytter tvilen mellom fullmaktstype, overskridelse, god tro og ugyldighet.
- **Metodepoenger:** Kjør leddene i rekkefølge; ikke la binding og ugyldighet smelte sammen. Bruk faktums detaljer (hva visste motparten, hvordan opptrådte fullmektigen) i god tro-leddet.
- **Typiske feil:** Å slå sammen fullmakt og ugyldighet; å hoppe over god tro-leddet; å overse den subsidiære ugyldighetsanførselen; å diktere en fullmakt som ikke er belagt i faktum.
- **Kvote:** quiz 14 · flashcards 12

**Prøve-kvote Del 2:** 4 prøver (fullmaktstype-/legitimasjon-minipraktikum; overskridelse + god tro (§ 11); bindingstvist med subsidiær ugyldighet (fullmakt på ville veier); ren vilkårsprøve avtl. §§ 10–11 + kombinasjonsfullmakt).

---

### DEL 3 — Avtalerett: ugyldighet §§ 28–36 (score ~6/14)

---

#### Kapittel 3.1: Ugyldighetssystemet — grunner, virkninger og forholdet til mislighold
- **id:** `jus3112-3-1` · **number:** 3.1 · **estimatedMinutes:** 50 · **prerequisites:** `jus3112-0-3`
- **Kapitteltype:** regel
- **description:** Kartet over ugyldighetsgrunnene: tilblivelses- vs. innholdsmangler, sterke vs. svake ugyldighetsgrunner, hvem som kan påberope, og ugyldighetens virkning (bortfall, restitusjon) — samt grensen mot mislighold og forutsetningssvikt.
- **Eksamensbelegg:** Ugyldighet ~6 (V2015 §§ 33/36, H2017, H2018 teori, V2019 §§ 28/29, H2019 § 33/lojalitet, V2020 god tro). Fundament for hele Del 3. Prioritetsklasse: **perfekt**.
- **Regelkontrakt (avtaleloven 1918, kap. 3):** oversikt over **§§ 28–36**: **tilblivelsesmangler** (tvang §§ 28–29, svik § 30, utnyttelse § 31, § 33 uredelighet) og **innholdssensur** (§ 36 urimelighet). **Sterke** ugyldighetsgrunner (f.eks. grov tvang § 28) står seg mot godtroende tredjemann; **svake** (§ 33, § 31) kan ekstingveres. Virkning: avtalen faller bort (helt/delvis), gjensidig **restitusjon**; forholdet til § 36-**lemping** (delvis opprettholdelse). Grensen mot **mislighold** (feil ved oppfyllelse) og **forutsetningssvikt** (kap. 0.3-skillet).
- **Typetilfeller:** Minipraktikum: en avtale angripes både som ugyldig og som misligholdt — hvilket spor hører faktum hjemme i? Sterk vs. svak ugyldighetsgrunn mot en godtroende erverver.
- **Metodepoenger:** Plasser feilen (inngåelse = ugyldighet). Skill sterke fra svake grunner (betydning mot tredjemann). Virkningen (restitusjon) skiller seg fra misligholdsbeføyelser.
- **Typiske feil:** Å angripe på ugyldighetssporet der problemet er mangel; å overse restitusjonsvirkningen; å blande § 33 og § 36.
- **Kvote:** quiz 16 · flashcards 18

---

#### Kapittel 3.2: Tilblivelsesmangler — tvang §§ 28–29, svik § 30 og utnyttelse § 31
- **id:** `jus3112-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `jus3112-3-1`
- **Kapitteltype:** regel
- **description:** De klassiske tilblivelsesmanglene: grov og «simpel» tvang (§§ 28–29), svik ved uriktige/tilbakeholdte opplysninger (§ 30) og utnyttelse av en annens nødstilstand/lettsinn (§ 31) — vilkår, terskler og godtrovirkning.
- **Eksamensbelegg:** Tvang §§ 28–29 (V2019 tvangspreget fullmakt/kausjon), svik/utnyttelse som randgrunnlag. Prioritetsklasse: **perfekt**.
- **Regelkontrakt (avtaleloven 1918):** **§ 28** rettsstridig **grov tvang** (fysisk/kvalifisert trussel) — sterk ugyldighetsgrunn, virker også mot godtroende; **§ 29** annen (simpel) rettsstridig tvang — svak grunn, betinget av motpartens/tredjemanns kunnskap; **§ 30** svik — uriktige opplysninger eller fortielse som har virket inn på avtalen; **§ 31** utnyttelse av «betydelig misforhold» + en annens nødstilstand, lettsinn, avhengighet (ågerlignende). Vilkårene: rettsstridig påvirkning + **årsakssammenheng** (virket inn på viljeserklæringen) + ev. motpartens kunnskap. *(verifiser §§ 28–31 og skillet sterk/svak mot Lovdata i fase 6.)*
- **Typetilfeller:** Minipraktikum: en avtale inngått under trussel om å bryte et forretningsforhold (§ 28 eller § 29?); et misforhold i ytelsene der den ene utnyttet den andres pressede situasjon (§ 31).
- **Metodepoenger:** Skill grov (§ 28, sterk) fra simpel tvang (§ 29, svak) — betydningen mot tredjemann. Årsakskravet (virket inn) er faktumnært. § 31 krever både misforhold og utnyttelse.
- **Typiske feil:** Å behandle all tvang likt; å overse årsakskravet; å bruke § 31 uten å påvise både misforhold og utnyttelse; å blande svik § 30 med § 33.
- **Kvote:** quiz 18 · flashcards 22

---

#### Kapittel 3.3: Redelighet og god tro (§ 33) og urimelighet/lemping (§ 36)
- **id:** `jus3112-3-3` · **number:** 3.3 · **estimatedMinutes:** 60 · **prerequisites:** `jus3112-3-2`
- **Kapitteltype:** regel
- **description:** De to skjønnsmessige generalklausulene: § 33 (uredelig å påberope avtalen når medkontrahenten kjente til omstendigheter som strider mot god tro) og § 36 (sensur/lemping av urimelige avtalevilkår) — vilkår, forholdet mellom dem og til forbrukervern.
- **Eksamensbelegg:** § 33 ~2–3 (V2015, H2019 lojalitet/opplysningssvikt); § 36 ~3–4 (H2017, V2018 vs. mfl. § 22, H2021 forbrukervern, V2015). De to hyppigste ugyldighets-/lempingsgrunnene. Prioritetsklasse: **perfekt**.
- **Regelkontrakt (avtaleloven 1918):** **§ 33** — en viljeserklæring binder ikke dersom det ville stride mot **redelighet og god tro** å gjøre den gjeldende, fordi medkontrahenten kjente/måtte kjenne til omstendigheter ved inngåelsen (opplysnings-/lojalitetssvikt ved avtaleinngåelsen). **§ 36** — et avtalevilkår kan **settes helt/delvis til side eller endres** dersom det ville virke **urimelig** å gjøre det gjeldende; vurderingen skjer i lys av avtalens innhold, partenes stilling, forholdene ved inngåelsen **og senere inntrådte forhold** (bro til forutsetningslæren, Del 4); særlig vern for forbrukere/svakere part. Forholdet § 33 (inngåelsestidspunktet) vs. § 36 (innhold + etterfølgende). *(verifiser §§ 33/36 og momentlisten i § 36 mot Lovdata i fase 6.)*
- **Typetilfeller:** Minipraktikum: selger kjente en svakhet ved salgsgjenstanden motparten ikke kunne oppdage (§ 33); et ansvarsfraskrivelses-/gebyrvilkår angripes som urimelig (§ 36 — total- eller vilkårssensur?).
- **Metodepoenger:** § 33 er en tilblivelsesnorm (kunnskap ved inngåelsen); § 36 rammer innholdet/etterfølgende urimelighet. Tolking (kap. 1.2) kommer før § 36-sensur. Bruk faktums konkrete momenter i urimelighetsvurderingen.
- **Typiske feil:** Å bruke § 36 der § 33 (uredelighet ved inngåelsen) passer; å konstatere urimelighet uten momentbasert drøftelse; å overse at § 36 kan **endre** (ikke bare stryke) vilkåret; å blande § 36-lemping med forutsetningssvikt uten å skille rollene.
- **Kvote:** quiz 18 · flashcards 22

---

#### Kapittel 3.4: Typetilfelle — angrep på avtalens gyldighet
- **id:** `jus3112-3-4` · **number:** 3.4 · **estimatedMinutes:** 45 · **prerequisites:** `jus3112-3-1`, `jus3112-3-2`, `jus3112-3-3`
- **Kapitteltype:** typetilfelle
- **description:** Malen: en part vil ut av en avtale og påberoper flere ugyldighetsgrunner prinsipalt/subsidiært (§ 33, subsidiært § 36, subsidiært §§ 28–31) — hver drøftet selvstendig, med riktig virkning.
- **Eksamensbelegg:** Ugyldighetsangrep (V2015, H2019, V2019, V2020). Prioritetsklasse: **perfekt**.
- **Regelkontrakt (tvistepunkt-kartet):** (1) hvilke ugyldighetsgrunner reiser faktum, og i hvilken rekkefølge er de anført? (2) § 33 — kjente motparten omstendighetene ved inngåelsen? (3) subsidiært § 36 — er vilkåret/avtalen urimelig? (4) atter subsidiært §§ 28–31 (tvang/svik/utnyttelse)? (5) virkning: bortfall, restitusjon eller lemping. Krysslenk til beføyelser (Del 6) der ugyldighet konkurrerer med mislighold.
- **Typetilfeller:** Gjennomdrøftet variant (NYSKREVET — f.eks. en investor vil ut av en tegningsavtale inngått etter mangelfull/misvisende rådgivning) med margkommentarer. Varianter (3–5) flytter tvilen mellom § 33, § 36 og §§ 28–31.
- **Metodepoenger:** Følg anførselsrekkefølgen. Hvert grunnlag har egne vilkår og egen virkning — hold dem fra hverandre og fra mislighold (fallgruve I).
- **Typiske feil:** Å smelte § 33/§ 36/§§ 28–31 sammen; å velge feil virkning; å blande ugyldighet med mislighold/forutsetningssvikt.
- **Kvote:** quiz 14 · flashcards 12

**Prøve-kvote Del 3:** 4 prøver (tilblivelsesmangel-minipraktikum §§ 28–31; § 33-redelighet-praktikum; § 36-urimelighet/lemping-praktikum; ugyldighetsangrep med prinsipal/subsidiær-struktur + ren vilkårsprøve §§ 28–36).

---

### DEL 4 — Avtalerett: bristende forutsetninger og § 36 (score ~2–4/14)

---

#### Kapittel 4.1: Forutsetningslæren — uriktige og bristende forutsetninger, grensen mot § 36
- **id:** `jus3112-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `jus3112-3-3`
- **Kapitteltype:** regel
- **description:** Den ulovfestede forutsetningslæren: når faller/lempes en avtale fordi en forutsetning var uriktig eller har bristet? Vilkårene (vesentlig + synbar + risikofordeling), og grensedragningen mot § 36, ugyldighet og mislighold.
- **Eksamensbelegg:** Forutsetningslæren (H2017 bristende forutsetninger som subsidiært grunnlag; H2018 begrepslære uriktige/bristende forutsetninger). Grensedragningen er fallgruve I i konsentrat. Prioritetsklasse: **kunne** (skiller sterke besvarelser; teori-gjenganger).
- **Regelkontrakt (ulovfestet + avtl. § 36):** **Forutsetningslæren** — en avtale kan falle bort/lempes dersom en forutsetning (a) var **vesentlig** (motiverende) for parten, (b) var **synbar** for medkontrahenten, og (c) det etter en **risikovurdering** er rimelig å legge risikoen på medkontrahenten. Skill **uriktige** forutsetninger (feil allerede ved inngåelsen — grenser mot § 33/svik) fra **bristende** forutsetninger (etterfølgende endrede forhold — grenser mot § 36 «senere inntrådte forhold» og mot force majeure). Forholdet til **§ 36** (læren er i stor grad absorbert av § 36, men lever som selvstendig grunnlag). *(verifiser doktrinær status og vilkårsformulering i fase 6.)*
- **Typetilfeller:** Minipraktikum: en kjøper forutsatte en bestemt bruk som etterpå ble umulig pga. offentlig vedtak (bristende forutsetning eller egen risiko?); en uriktig forutsetning om et faktisk forhold ved inngåelsen (læren vs. § 33).
- **Metodepoenger:** Vilkårene er kumulative; risikofordelingen er kjernen (hvem bar risikoen for at forutsetningen sviktet?). Skill uriktige (inngåelse) fra bristende (etterpå). Læren og § 36 er alternative, ikke identiske, grunnlag.
- **Typiske feil:** Å bruke forutsetningslæren som en generell rimelighetsventil uten vilkårsprøving; å overse risikofordelingen; å blande med mangel (mislighold) eller § 33 (ugyldighet).
- **Kvote:** quiz 16 · flashcards 18

---

#### Kapittel 4.2: Typetilfelle — «vei ut av en byrdefull avtale»
- **id:** `jus3112-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `jus3112-4-1`, `jus3112-3-4`
- **Kapitteltype:** typetilfelle
- **description:** Malen: endrede ytre forhold (omregulering, ødelagt formål, dårlig investering) får en part til å ville tre ut, og han påberoper prinsipalt ugyldighet/bristende forutsetninger/§ 36, subsidiært avbestillingsrett, med et erstatningsoppgjør.
- **Eksamensbelegg:** «Vei ut av en byrdefull avtale» (H2019 omregulert tomt, H2020 ødelagte skiløyper, V2015 investeringsrådgivning). Prioritetsklasse: **perfekt** (fast praktikum-mal).
- **Regelkontrakt (tvistepunkt-kartet):** (1) er avtalen **ugyldig** (§ 33/§ 36 — inngåelsesfeil)? (2) subsidiært **bristende forutsetning** (etterfølgende endring)? (3) atter subsidiært **avbestillingsrett** (kap. 6.5) med oppgjør? (4) erstatningsoppgjør: **positiv vs. negativ interesse**, tapsbegrensning (Del 7); (5) reklamasjon/foreldelse som motanførsel (kap. 0.4-noten). Hvert grunnlag holdes fra hverandre (fallgruve I).
- **Typetilfeller:** Gjennomdrøftet variant (NYSKREVET — f.eks. en bedrift bestiller en messestand/et arrangement som mister sin verdi da et offentlig forbud inntreffer) med margkommentarer. Varianter (3–5) flytter tvilen mellom ugyldighet, bristende forutsetning og avbestilling.
- **Metodepoenger:** Diagnostiser hvert grunnlag (inngåelse vs. etterfølgende vs. avbestilling) og avgjør selvstendig. Oppgjøret varierer med grunnlaget (restitusjon vs. positiv/negativ interesse).
- **Typiske feil:** Å smelte ugyldighet, forutsetningssvikt og avbestilling; å velge feil erstatningsinteresse; å overse reklamasjon/foreldelse.
- **Kvote:** quiz 14 · flashcards 12

**Prøve-kvote Del 4:** 4 prøver (forutsetningslære-minipraktikum (uriktig vs. bristende); grense mot § 36/ugyldighet/mislighold-diagnoseprøve; «vei ut av en byrdefull avtale»-praktikum med prinsipal/subsidiær-struktur; ren begreps-/vilkårsprøve forutsetningslæren + § 36 etterfølgende forhold).

---

### DEL 5 — Kontraktsrett: mislighold og mangel (score ~11/14; mangel STØRST)

---

#### Kapittel 5.1: Kontraktsbrudd og lovvalg — riktig lov når Lovdata er åpen
- **id:** `jus3112-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `jus3112-0-4`
- **Kapitteltype:** regel
- **description:** Rammeverket for hele kontraktsretten: hva et kontraktsbrudd er (mangel/forsinkelse), og — avgjørende — hvilken lov som gjelder (kjøpsloven, forbrukerkjøpsloven, avhendingslova, håndverkertjenesteloven, ulovfestet), fordi tersklene er ulike og feil lovvalg forplanter seg.
- **Eksamensbelegg:** Lovvalget er en gjennomgående A/C-skiller (analysens §4.1: «galt lovvalg forplanter seg gjennom hele drøftelsen»). Kjøpsloven (H2015, V2016), forbrukerkjøpsloven (V2015, H2016), avhendingslova (H2017 fast eiendom), håndverkertjenesteloven/ulovfestet tjenesterett (H2015, V2016, V2017). Prioritetsklasse: **perfekt** (fundament for Del 5–7).
- **Regelkontrakt (lovvalgs-kartet):** **Kjøpsloven (1988)** — kjøp av løsøre mellom næringsdrivende / mellom private (ikke forbrukerkjøp). **Forbrukerkjøpsloven (2002, GJELDENDE tekst etter 1.1.2024-endringen — se §1.2)** — forbruker kjøper av næringsdrivende; ufravikelig til forbrukers gunst. **Avhendingslova (1992)** — kjøp av fast eiendom. **Håndverkertjenesteloven (1989)** — tjenester på ting/fast eiendom for forbruker; for tjenester utenfor loven brukes **ulovfestet** obligasjonsrett/analogi. Avgrensningskriteriene: hva er ytelsen (ting/eiendom/tjeneste), hvem er partene (forbruker?), er loven fravikelig? **«Endret lov»-boks:** forbrukerkjøpslovens 2024-endring (mangelsbegrep, reklamasjon, heving) — eldre besvarelser bygger på gammel fkjl. *(verifiser virkeområde-paragrafene i hver lov mot Lovdata i fase 6.)*
- **Typetilfeller:** Minipraktikum: samme mangelfulle ytelse subsumert under to ulike lover (kjl. vs. fkjl. vs. avhl.) — vis hvordan terskelen skifter; en tjeneste i og utenfor håndverkertjenestelovens virkeområde.
- **Metodepoenger:** Velg lov FØR mangelsvurderingen. Forbrukerkjøp bruker GJELDENDE fkjl. Skille mangel (kvalitetsavvik) fra forsinkelse (tidsavvik).
- **Typiske feil:** Feil lovvalg (kjl. der fkjl./avhl. gjelder); å bruke gammel fkjl.-doktrine; å blande mangel og forsinkelse; å overse at forbrukerlovene er ufravikelige.
- **Kvote:** quiz 16 · flashcards 20

---

#### Kapittel 5.2: Mangelsvurderingen — avvik fra avtalt og forventet ytelse
- **id:** `jus3112-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** `jus3112-5-1`
- **Kapitteltype:** regel
- **description:** Kjernen i fagets tyngdepunkt: når foreligger en mangel? Den konkrete (avtalte) og abstrakte (alminnelig god vare/forventet) mangelsstandarden, tidspunktet for mangelsbedømmelsen (risikoovergang), og forholdet mellom avtalte spesifikasjoner og bakgrunnsrett.
- **Eksamensbelegg:** Mangelsvurdering ~9 (STØRST på typetilfelle-nivå: H2015, V2016, H2017, V2017, V2020, H2020, V2021, V2015, H2016). Nesten hvert praktikum bygger på en mangel. Prioritetsklasse: **perfekt**.
- **Regelkontrakt:** **Mangel = negativt avvik fra det kjøperen/bestilleren hadde krav på.** **Konkret** standard: avvik fra avtalte egenskaper/spesifikasjoner (kjl. § 17 første ledd; fkjl. gjeldende krav; avhl. § 3-1/§ 3-2; hvtjl. § 17). **Abstrakt** standard: avvik fra det tingen/ytelsen «alminnelig brukes til» / kjøperen med rimelighet kunne forvente (kjl. § 17 annet ledd; avhl. § 3-2). **Bedømmelsestidspunkt:** mangelen vurderes ved **risikoens overgang** (kjl. § 21; avhl. § 3-1). Solgt «som den er» / brukt vare (kap. 5.3). *(verifiser kjl. §§ 17–19, § 21; avhl. §§ 3-1/3-2; gjeldende fkjl.-mangelsparagraf i fase 6 — særlig fkjl. etter 2024-endringen.)*
- **Typetilfeller:** Minipraktikum: en driftsmaskin/eiendom/brukt bil som yter dårligere enn avtalt/forventet (konkret og abstrakt mangel); avviket oppsto etter risikoovergang (ikke mangel).
- **Metodepoenger:** Prøv den konkrete standarden (avtalen) først, deretter den abstrakte. Fest bedømmelsestidspunktet til risikoovergang. Bruk faktums spesifikasjoner og forventninger aktivt.
- **Typiske feil:** Å hoppe over den konkrete standarden; feil bedømmelsestidspunkt; å bruke gammel fkjl.-mangelsdoktrine; å konstatere mangel uten subsumsjon.
- **Kvote:** quiz 18 · flashcards 22

---

#### Kapittel 5.3: Opplysnings- og undersøkelsesplikt, «som den er» og risiko
- **id:** `jus3112-5-3` · **number:** 5.3 · **estimatedMinutes:** 55 · **prerequisites:** `jus3112-5-2`
- **Kapitteltype:** regel
- **description:** De faktumnære modifikasjonene av mangelsvurderingen: selgerens opplysningsplikt (og virkningen av brudd), kjøperens undersøkelsesplikt (før/ved kjøp), «som den er»/«as is»-forbeholdets rekkevidde, og hvem som bærer risikoen.
- **Eksamensbelegg:** Opplysnings-/undersøkelsesplikt og «som den er» (H2015 ansvarsfraskrivelse «som den er», H2017 opplysningsplikt megler/eiendom, V2020 selskapskjøp, H2020 opplysningsplikt/risiko, V2017). Prioritetsklasse: **perfekt**.
- **Regelkontrakt:** **Selgerens opplysningsplikt:** ting/eiendom er mangelfull hvis selger forsømte å opplyse om forhold han kjente/måtte kjenne til, og kjøper hadde grunn til å regne med å få (kjl. § 19 (1) b; avhl. § 3-7). **Kjøperens undersøkelsesplikt:** kjøper kan ikke påberope forhold han kjente/burde kjent ved en undersøkelse han ble oppfordret til (kjl. § 20; avhl. § 3-10). **«Som den er»-forbehold** (kjl. § 19; avhl. § 3-9): tingen kan likevel være mangelfull ved (a) uriktige opplysninger, (b) tilbakeholdte opplysninger, eller (c) at tingen er i **vesentlig** dårligere stand enn kjøper kunne forvente. **Risiko** (kjl. §§ 12–13, 21). *(verifiser kjl. §§ 19–21, avhl. §§ 3-7 til 3-10; merk at avhl. § 3-9 «som han er»-regelen for forbrukerkjøp av bolig er endret — verifiser gjeldende avhl. i fase 6.)*
- **Typetilfeller:** Minipraktikum: selger fortiet et forhold han kjente (opplysningssvikt slår gjennom «som den er»); kjøper unnlot en oppfordret undersøkelse (avskåret fra å påberope).
- **Metodepoenger:** Opplysningssvikt og uriktige opplysninger slår gjennom «som den er»-forbeholdet. Undersøkelsesplikten avskjærer det kjøper burde sett. Bruk «hvem visste/burde visst hva» aktivt.
- **Typiske feil:** Å la «som den er» avskjære alt (overser unntakene); å overse undersøkelsesplikten; å bruke feil terskel («vesentlig» dårligere stand); å blande opplysningsplikt (mangel) med § 33 (ugyldighet).
- **Kvote:** quiz 18 · flashcards 22

---

#### Kapittel 5.4: Typetilfelle — mangelfull ytelse (kjøp, tjeneste og fast eiendom)
- **id:** `jus3112-5-4` · **number:** 5.4 · **estimatedMinutes:** 45 · **prerequisites:** `jus3112-5-2`, `jus3112-5-3`
- **Kapitteltype:** typetilfelle
- **description:** Malen: en ytelse (kjøp av ting/eiendom/brukt selskap, eller et tjenesteoppdrag) viser seg mangelfull; selger påberoper «som den er», for sen reklamasjon eller ansvarsfraskrivelse — inngangen til beføyelseskaskaden (Del 6).
- **Eksamensbelegg:** Mangelspraktikum (H2015, V2016, H2017, V2017, V2020, H2020, V2021). Prioritetsklasse: **perfekt**. Krysslenkes til Del 6 (beføyelser) og Del 7 (erstatning).
- **Regelkontrakt (tvistepunkt-kartet):** (1) riktig lov (kap. 5.1)? (2) foreligger mangel (konkret/abstrakt, kap. 5.2)? (3) modifiseres det av opplysnings-/undersøkelsesplikt eller «som den er» (kap. 5.3)? (4) er det reklamert i tide (kap. 6.4)? (5) hvilke beføyelser er i behold, og hvordan utmåles de (Del 6–7)? Reklamasjon/foreldelse-motanførselen (kap. 0.4) bakes inn.
- **Typetilfeller:** Gjennomdrøftet variant (NYSKREVET — f.eks. kjøp av et brukt driftsanlegg / en utsmykkings-/prosjekteringstjeneste som svikter) med margkommentarer om uttelling per ledd. Varianter (3–5) flytter tvilen mellom lovvalg, mangel, «som den er» og reklamasjon.
- **Metodepoenger:** Kjør leddene i rekkefølge; ikke hopp til beføyelser før mangel og reklamasjon er avklart. Bruk faktums datoer i reklamasjonsleddet.
- **Typiske feil:** Å konkludere mangel uten å prøve «som den er»/undersøkelsesplikt; å glemme reklamasjon; å slå mangel og beføyelser sammen.
- **Kvote:** quiz 14 · flashcards 12

**Prøve-kvote Del 5:** 4 prøver (lovvalg-diagnoseprøve (kjl./fkjl./avhl./hvtjl.); mangelsvurdering-minipraktikum (konkret + abstrakt); opplysnings-/undersøkelsesplikt + «som den er»-praktikum; samlet mangelspraktikum med reklamasjon som motanførsel).

---

### DEL 6 — Kontraktsrett: misligholdsbeføyelsene og reklamasjon (score ~11/14)

> Fallgruve II innprentes gjennom hele delen: hver beføyelse har egne vilkår og avgjøres
> selvstendig — aldri slå heving, prisavslag og erstatning sammen.

---

#### Kapittel 6.1: Beføyelsessystemet — oversikt, «hver for seg» og retting/omlevering
- **id:** `jus3112-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `jus3112-5-4`
- **Kapitteltype:** regel
- **description:** Kartet over misligholdsbeføyelsene og prinsippet om at de avgjøres hver for seg — pluss den primære beføyelsen retting/omlevering (avhjelp): kjøperens krav og selgerens rett til å avhjelpe.
- **Eksamensbelegg:** Beføyelsessystemet er ryggraden i hvert mangelspraktikum. Retting/omlevering (H2020, V2016 avhjelp). Prioritetsklasse: **perfekt**. Etablerer beføyelsesmatrisen fra kap. 0.4.
- **Regelkontrakt:** Beføyelsesoversikt: **tilbakeholdsrett, retting/omlevering, prisavslag, heving, erstatning** — kumulasjonsregler (erstatning kan kombineres med de andre; prisavslag og heving er alternative). **Retting/omlevering (avhjelp):** kjøper kan kreve mangelen rettet/tingen omlevert (kjl. §§ 34–36; avhl. § 4-10; hvtjl. § 24); **selgerens rett til å avhjelpe** for egen regning før andre beføyelser (kjl. § 36). Vilkår: mangel + ikke uforholdsmessig byrde. *(verifiser kjl. §§ 30, 34–36; avhl. § 4-10; hvtjl. § 24; gjeldende fkjl.-avhjelpsregler i fase 6.)*
- **Typetilfeller:** Minipraktikum: kjøper krever omlevering, selger tilbyr retting (hvem bestemmer?); avhjelp ville være uforholdsmessig.
- **Metodepoenger:** Fastslå beføyelsesarten og hold dem fra hverandre (fallgruve II). Selgerens avhjelpsrett kan avskjære andre beføyelser. Retting er primær før heving/prisavslag i mange lover.
- **Typiske feil:** Å slå beføyelsene sammen; å overse selgerens avhjelpsrett; å hoppe til heving uten å vurdere retting.
- **Kvote:** quiz 16 · flashcards 18

---

#### Kapittel 6.2: Prisavslag — forholdsmessig avslag og forholdet til erstatning
- **id:** `jus3112-6-2` · **number:** 6.2 · **estimatedMinutes:** 50 · **prerequisites:** `jus3112-6-1`
- **Kapitteltype:** regel
- **description:** Den objektive beføyelsen: forholdsmessig prisavslag ved mangel — utmålingsmetoden, forholdet til (og forskjellen fra) erstatning, og når prisavslag er utelukket.
- **Eksamensbelegg:** Prisavslag ~4 (H2015, H2016, H2017, H2020). Ofte prinsipalt/subsidiært mot heving og erstatning. Prioritetsklasse: **perfekt**.
- **Regelkontrakt:** **Prisavslag** — ved mangel som ikke avhjelpes, kan kjøper kreve **forholdsmessig** avslag (kjl. § 38; avhl. § 4-12; hvtjl. § 25). Utmåling: prisen reduseres i samme forhold som mangelen reduserer tingens verdi (forholdsmessighetsbrøken), subsidiært utbedringskostnaden (avhl. § 4-12 (2)). **Objektiv** beføyelse — krever **ikke** ansvarsgrunnlag (til forskjell fra erstatning). Forholdet til erstatning: prisavslag kompenserer verdireduksjonen, erstatning dekker det økonomiske tapet. *(verifiser kjl. § 38, avhl. § 4-12, hvtjl. § 25 og gjeldende fkjl. i fase 6.)*
- **Typetilfeller:** Minipraktikum: en mangel gir X kr i verdireduksjon — beregn forholdsmessig prisavslag; sammenlign med et erstatningskrav for samme forhold (ulikt grunnlag/beregning).
- **Metodepoenger:** Prisavslag krever ikke skyld — det er lettere å nå enn erstatning. Forholdsmessighetsbrøken er faktumnær (bruk beløpene). Skill prisavslag fra erstatning (fallgruve II).
- **Typiske feil:** Å kreve ansvarsgrunnlag for prisavslag; å blande prisavslag og erstatning i én utmåling; feil forholdsmessighetsberegning.
- **Kvote:** quiz 14 · flashcards 16

---

#### Kapittel 6.3: Heving — vesentlig kontraktsbrudd
- **id:** `jus3112-6-3` · **number:** 6.3 · **estimatedMinutes:** 55 · **prerequisites:** `jus3112-6-1`
- **Kapitteltype:** regel
- **description:** Den mest inngripende beføyelsen: heving ved vesentlig kontraktsbrudd — vesentlighetsvurderingen, virkningen (bortfall og restitusjon) og forholdet til de andre beføyelsene.
- **Eksamensbelegg:** Heving ~5 (V2015, V2016, V2017, H2020, V2020). Ofte prinsipal beføyelse i kaskaden. Prioritetsklasse: **perfekt**.
- **Regelkontrakt:** **Heving** — kjøper kan heve dersom mangelen/forsinkelsen innebærer et **vesentlig** kontraktsbrudd (kjl. § 39; avhl. § 4-13; hvtjl. § 26). **Vesentlighetsvurderingen** (moment: avvikets omfang/betydning for kjøper, om mangelen kan avhjelpes, selgerens forhold, mislighold ved gjentakelse). Virkning: partenes plikter faller bort, gjensidig **restitusjon** (tilbakelevering). Heving forutsetter reklamasjon (kap. 6.4). *(verifiser kjl. § 39, avhl. § 4-13, hvtjl. § 26 og gjeldende fkjl.-hevingsterskel etter 2024 i fase 6.)*
- **Typetilfeller:** Minipraktikum: en mangel på grensen av vesentlighet (drøft momentene begge veier — sensor belønner å se tvilen); en klart uvesentlig mangel (heving avskåret, prisavslag/retting i behold).
- **Metodepoenger:** Vesentlighetsterskelen er høyere enn for prisavslag — derfor kan utfallet bli ulikt per beføyelse. Drøft momentene begge veier. Virkningen (restitusjon) skiller heving fra prisavslag.
- **Typiske feil:** Å konstatere vesentlighet uten momentdrøftelse; å innvilge heving der prisavslag er nok; å slå heving sammen med prisavslag/erstatning; å overse restitusjonsvirkningen.
- **Kvote:** quiz 16 · flashcards 18

---

#### Kapittel 6.4: Reklamasjon — nøytral og spesifisert, relativ og absolutt frist
- **id:** `jus3112-6-4` · **number:** 6.4 · **estimatedMinutes:** 55 · **prerequisites:** `jus3112-6-1`
- **Kapitteltype:** regel
- **description:** Den innebygde motanførselen: kjøperen taper beføyelsene om han ikke reklamerer i tide — nøytral vs. spesifisert reklamasjon, relativ («innen rimelig tid») vs. absolutt frist, og unntakene ved grov uaktsomhet/uredelighet hos selger.
- **Eksamensbelegg:** Reklamasjon ~4 (H2015, V2016, V2021, H2020). Datoene i faktum er lagt for å teste fristen (analysens §5). Prioritetsklasse: **perfekt**. Krysslenkes til foreldelse (Del 8) via kap. 0.4-noten.
- **Regelkontrakt:** **Nøytral reklamasjon** — melding om at ytelsen er mangelfull, «innen rimelig tid» etter at mangelen ble/burde blitt oppdaget (kjl. § 32 (1); avhl. § 4-19 (1); hvtjl. § 22). **Spesifisert reklamasjon** — å gjøre en bestemt beføyelse gjeldende. **Absolutt frist** — ytre grense (kjl. § 32 (2) to år; avhl. § 4-19 (2) fem år; **gjeldende fkjl. — verifiser fristene etter 2024-endringen**). **Unntak:** fristene gjelder ikke hvis selger har opptrådt grovt uaktsomt/i strid med god tro (kjl. § 33; avhl. § 4-19 (3)). Forholdet reklamasjon (mangelsspesifikk) vs. **foreldelse** (kravets alder, Del 8) — to selvstendige frister. *(verifiser kjl. §§ 32–33, avhl. § 4-19, hvtjl. § 22 og gjeldende fkjl.-reklamasjonsregler i fase 6.)*
- **Typetilfeller:** Minipraktikum: kjøper reklamerte X måneder etter oppdagelse (rimelig tid?); den absolutte fristen er utløpt, men selger var uredelig (unntaket).
- **Metodepoenger:** Regn ut begge frister med faktums datoer. Skill nøytral fra spesifisert reklamasjon og reklamasjon fra foreldelse. Uredelighetsunntaket redder krav utenfor fristen.
- **Typiske feil:** Å overse reklamasjonsspørsmålet (fallgruve); å blande reklamasjon og foreldelse; å bruke feil frist; å glemme uredelighetsunntaket.
- **Kvote:** quiz 16 · flashcards 18

---

#### Kapittel 6.5: Avbestilling og kreditormora
- **id:** `jus3112-6-5` · **number:** 6.5 · **estimatedMinutes:** 50 · **prerequisites:** `jus3112-6-1`
- **Kapitteltype:** regel
- **description:** To beslektede randtemaer om kreditors forhold: kjøperens/bestillerens rett til å avbestille (og oppgjøret som følger), og kreditormora (kreditors medvirkningssvikt) avgrenset mot debitormislighold.
- **Eksamensbelegg:** Avbestilling ~3 (H2019, H2020, V2016); kreditormora ~2 (V2018 teori, V2016). Begge er «må kunne»-temaer og teori-gjengangere. Prioritetsklasse: **kunne**.
- **Regelkontrakt:** **Avbestilling:** kjøper/bestiller kan tre ut av avtalen mot å erstatte selgerens/tjenesteyterens tap (kjl. § 52 (2); hvtjl. § 39–§ 40). Oppgjøret: selgeren skal ikke tape, men heller ikke tjene på avbestillingen (positiv interesse med fradrag for innsparte kostnader/reallokering). **Kreditormora (fordringshavermora, ulovfestet + kjl. §§ 22, 50 flg.):** når **kreditor** (kjøper) svikter sin medvirkning (ikke tar imot/betaler), går risiko/kostnad over på ham; avgrenses mot **debitormislighold** (selgers svikt). *(verifiser kjl. § 52, §§ 22/50 flg., hvtjl. §§ 39–40 i fase 6.)*
- **Typetilfeller:** Minipraktikum: bestiller avbestiller et påbegynt oppdrag (oppgjør?); kjøper unnlater å hente/betale (kreditormora vs. selgers mislighold?).
- **Metodepoenger:** Avbestilling er en rett til å tre ut, ikke et mislighold — oppgjøret er tapsbasert. Kreditormora snur risikoen; skill den fra debitormislighold.
- **Typiske feil:** Å behandle avbestilling som heving; feil oppgjør (glemme innsparte kostnader); å blande kreditormora og debitormislighold.
- **Kvote:** quiz 14 · flashcards 14

---

#### Kapittel 6.6: Typetilfelle — beføyelseskaskaden
- **id:** `jus3112-6-6` · **number:** 6.6 · **estimatedMinutes:** 50 · **prerequisites:** `jus3112-6-2`, `jus3112-6-3`, `jus3112-6-4`
- **Kapitteltype:** typetilfelle
- **description:** Fagets sentrale mal: kjøper påberoper mangel og krever prinsipalt heving, subsidiært prisavslag, atter subsidiært erstatning; selger bestrider mangel og påberoper for sen reklamasjon og/eller ansvarsfraskrivelse. Hver beføyelse drøftes med egne vilkår.
- **Eksamensbelegg:** «Mangelfull ytelse → beføyelseskaskade» (H2015, V2016, H2017, V2017, H2020). Den hyppigste praktikum-malen. Prioritetsklasse: **perfekt**. Bygger direkte på fallgruve II (kap. 0.4).
- **Regelkontrakt (tvistepunkt-kartet):** (1) foreligger mangel (Del 5)? (2) reklamert i tide (kap. 6.4)? (3) **heving** — vesentlig kontraktsbrudd (kap. 6.3)? (4) subsidiært **prisavslag** — forholdsmessig (kap. 6.2)? (5) atter subsidiært **erstatning** — ansvarsgrunnlag + tap (Del 7)? (6) modifiseres av «som den er»/ansvarsfraskrivelse? Hver beføyelse holdes fra hverandre og avgjøres selvstendig med egen terskel.
- **Typetilfeller:** Gjennomdrøftet variant (NYSKREVET — f.eks. et driftsanlegg leveres mangelfullt; kjøper vil primært heve) med margkommentarer om uttelling per beføyelse. Varianter (3–5) flytter tvilen mellom vesentlighet (heving), prisavslag, reklamasjon og ansvarsfraskrivelse.
- **Metodepoenger:** «Én beføyelse om gangen» — ulik terskel gir ulikt utfall. Følg anførselsrekkefølgen. Reklamasjon/foreldelse er innebygd.
- **Typiske feil:** Å smelte heving/prisavslag/erstatning sammen; å bruke samme terskel; å overse reklamasjon; å hoppe over den subsidiære beføyelsen.
- **Kvote:** quiz 14 · flashcards 10

**Prøve-kvote Del 6:** 4 prøver (beføyelsesmatrise-drill (retting/prisavslag/heving/erstatning hver for seg); heving-vesentlighet-praktikum; reklamasjon-frist-praktikum (relativ + absolutt + unntak); beføyelseskaskade-praktikum med prinsipal/subsidiær-struktur).

---

### DEL 7 — Kontraktsrett: erstatning i kontrakt (score ~6–7/14)

---

#### Kapittel 7.1: Erstatningsansvaret i kontrakt — ansvarsgrunnlagene
- **id:** `jus3112-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `jus3112-6-1`
- **Kapitteltype:** regel
- **description:** Grunnlagene for erstatning ved kontraktsbrudd: kontrollansvaret (tilnærmet objektivt), culpaansvaret for indirekte tap, og garanti-/tilsagnsansvar — med de tre kumulative kravene ansvarsgrunnlag, tap og adekvat årsakssammenheng.
- **Eksamensbelegg:** Erstatning i kontrakt ~6 (H2015, V2016, V2017 tapt produksjon, H2019, V2020, V2021). Prioritetsklasse: **perfekt** (skiller sterke besvarelser).
- **Regelkontrakt:** **Kontrollansvaret** — selger er ansvarlig for direkte tap ved mangel/forsinkelse med mindre svikten skyldes en **hindring utenfor hans kontroll** som han ikke med rimelighet kunne forutse/unngå (kjl. §§ 27, 40; avhl. § 4-14; hvtjl. § 28). **Culpaansvar** for **indirekte tap** (kjl. § 40 (3), § 67 skillet direkte/indirekte tap). **Garanti-/tilsagnsansvar** (uttrykkelig innestående). Tre kumulative krav: **ansvarsgrunnlag + økonomisk tap + adekvat årsakssammenheng**. *(verifiser kjl. §§ 27, 40, 67; avhl. § 4-14; hvtjl. § 28 i fase 6.)*
- **Typetilfeller:** Minipraktikum: en forsinkelse skyldes en leverandørsvikt (innenfor/utenfor kontroll?); et indirekte driftstap (krever culpa).
- **Metodepoenger:** Velg riktig ansvarsgrunnlag; kontrollansvaret er tilnærmet objektivt for direkte tap, culpa kreves for indirekte. Skillet direkte/indirekte tap styrer grunnlaget og ansvarsfraskrivelser (kap. 7.3).
- **Typiske feil:** Å bruke culpa der kontrollansvar gjelder (og omvendt); å blande direkte og indirekte tap; å hoppe over ett av de tre kumulative kravene.
- **Kvote:** quiz 16 · flashcards 18

---

#### Kapittel 7.2: Tapsutmåling — positiv og negativ kontraktsinteresse (Bodum, Blårev)
- **id:** `jus3112-7-2` · **number:** 7.2 · **estimatedMinutes:** 55 · **prerequisites:** `jus3112-7-1`
- **Kapitteltype:** regel
- **description:** Hvordan erstatningen beregnes: positiv interesse (som om kontrakten var oppfylt) vs. negativ interesse (som om avtalen ikke var inngått), når hver brukes, og skillet direkte/indirekte tap — den eneste eksplisitte domskravsoppgaven i arkivet.
- **Eksamensbelegg:** Positiv/negativ interesse ~2 direkte + gjennomgående (H2021 teori med **Rt-2002-1110 Bodum** og **Rt-1938-602 Blårev** — behandling obligatorisk; H2019). Prioritetsklasse: **perfekt**.
- **Regelkontrakt:** **Positiv kontraktsinteresse (oppfyllelsesinteressen)** — skadelidte stilles økonomisk som om kontrakten var **riktig oppfylt** (hovedregelen ved mislighold). **Negativ kontraktsinteresse (den negative interesse)** — stilles som om **avtalen ikke var inngått** (typisk ved ugyldighet/prekontraktuelt ansvar). **Domskanon:** *Rt-2002-1110 (Bodum)* og *Rt-1938-602 (Blårev)* — refereres for skillet og valget av interesse (behandles der oppgaven ber om det). Skillet **direkte/indirekte tap** (kjl. § 67) og **tapsposter** (utbedring, verdireduksjon, driftstap, avsavn). *(verifiser Bodum/Blårev-referansene og kjl. § 67 i fase 6; stikkprøv også umarkerte domshenvisninger.)*
- **Typetilfeller:** Minipraktikum: beregn positiv interesse ved en mangel (differansen mot riktig oppfyllelse); et tilfelle der negativ interesse er riktig (ugyldighet/prekontraktuelt).
- **Metodepoenger:** Velg interesse ut fra grunnlaget (mislighold → positiv; ugyldighet/prekontraktuelt → ofte negativ). Behandle Bodum/Blårev der oppgaven krever det. Bruk faktums beløp i utmålingen.
- **Typiske feil:** Å forveksle positiv og negativ interesse; å overse/feilbehandle navngitte dommer (Bodum, Blårev); å blande direkte og indirekte tap.
- **Kvote:** quiz 16 · flashcards 18

---

#### Kapittel 7.3: Ansvarsfraskrivelse, ansvarsbegrensning og tapsbegrensningsplikt
- **id:** `jus3112-7-3` · **number:** 7.3 · **estimatedMinutes:** 50 · **prerequisites:** `jus3112-7-1`
- **Kapitteltype:** regel
- **description:** Grensene for erstatningsansvaret: rekkevidden og sensuren av ansvarsfraskrivelser/-begrensninger (direkte vs. indirekte tap, grov skyld), og skadelidtes plikt til å begrense tapet.
- **Eksamensbelegg:** Ansvarsfraskrivelse ~3 (H2015 «som den er», V2017 kildekode-avtale, V2020 direkte/indirekte tap); tapsbegrensning (V2016, H2019). Prioritetsklasse: **perfekt** (skiller sterke besvarelser).
- **Regelkontrakt:** **Ansvarsfraskrivelse/-begrensning** — partene kan avtale å begrense/utelukke erstatningsansvar, men klausulen **tolkes** (uklarhetsregelen, kap. 1.2) og kan **sensureres** (§ 36; ulovfestet — fraskrivelse for **grov skyld/forsett** står seg som regel ikke). Skillet **direkte/indirekte tap** avgjør ofte rekkevidden (klausuler dekker typisk indirekte tap). **Tapsbegrensningsplikt:** skadelidte må treffe rimelige tiltak for å begrense tapet; forsømmelse reduserer erstatningen (kjl. § 70; alminnelig prinsipp). *(verifiser kjl. § 70, § 67 og sensurpraksis for ansvarsfraskrivelser i fase 6.)*
- **Typetilfeller:** Minipraktikum: en klausul fraskriver ansvar for «indirekte tap» — rekker den mot et driftstap forårsaket av grov uaktsomhet? Skadelidte unnlot rimelige begrensningstiltak (reduksjon).
- **Metodepoenger:** Tolk klausulen før du sensurerer. Fraskrivelse for grov skyld står sjelden. Tapsbegrensning er et selvstendig reduksjonsgrunnlag — bruk faktums handlingsalternativer.
- **Typiske feil:** Å la klausulen avskjære alt uten tolking/sensur; å overse grov skyld-grensen; å glemme tapsbegrensningsplikten; å blande direkte/indirekte tap.
- **Kvote:** quiz 16 · flashcards 18

---

#### Kapittel 7.4: Typetilfelle — erstatningsoppgjøret
- **id:** `jus3112-7-4` · **number:** 7.4 · **estimatedMinutes:** 45 · **prerequisites:** `jus3112-7-2`, `jus3112-7-3`
- **Kapitteltype:** typetilfelle
- **description:** Malen: skadelidte krever erstatning for et kontraktsbrudd; motparten bestrider ansvarsgrunnlaget, påberoper en ansvarsfraskrivelse og skadelidtes manglende tapsbegrensning — hele erstatningskjeden i ett.
- **Eksamensbelegg:** Erstatningsoppgjør (V2017 tapt produksjon, V2020 direkte/indirekte, H2019 medarbeiderlønn, V2021 kontraktskjede). Prioritetsklasse: **perfekt**.
- **Regelkontrakt (tvistepunkt-kartet):** (1) ansvarsgrunnlag (kontrollansvar/culpa/garanti, kap. 7.1)? (2) direkte eller indirekte tap? (3) rekker ansvarsfraskrivelsen (tolking + sensur, kap. 7.3)? (4) utmåling — positiv/negativ interesse (kap. 7.2)? (5) tapsbegrensning og adekvans? (Merk avgrensninger — V2021 avskar «årsakssammenheng og påregnelighet»; V2020 avskar skl. § 2-1.)
- **Typetilfeller:** Gjennomdrøftet variant (NYSKREVET — f.eks. en forsinket/mangelfull leveranse påfører kjøperen driftstap; kontrakten har en ansvarsbegrensning) med margkommentarer. Varianter (3–5) flytter tvilen mellom ansvarsgrunnlag, fraskrivelsens rekkevidde og tapsbegrensning.
- **Metodepoenger:** Kjør erstatningskjeden i rekkefølge; respekter avgrensninger. Bruk faktums beløp i utmålingen.
- **Typiske feil:** Å hoppe over ansvarsgrunnlaget; å drøfte det bortavgrensede (påregnelighet); å glemme fraskrivelse/tapsbegrensning; feil interesse.
- **Kvote:** quiz 12 · flashcards 10

**Prøve-kvote Del 7:** 4 prøver (ansvarsgrunnlag-diagnoseprøve (kontrollansvar/culpa/garanti); positiv/negativ interesse-utmåling med Bodum/Blårev; ansvarsfraskrivelse + tapsbegrensning-praktikum; samlet erstatningsoppgjør med avgrensninger).

---

### DEL 8 — Pengekravsrett: foreldelse (score ~5/14)

---

#### Kapittel 8.1: Foreldelsesreglene — frister, tilleggsfrist og fristavbrudd
- **id:** `jus3112-8-1` · **number:** 8.1 · **estimatedMinutes:** 60 · **prerequisites:** `jus3112-6-4`
- **Kapitteltype:** regel
- **description:** Den faste motanførselen i pengekravspraktikum: den alminnelige 3-årsfristen og utgangspunktet, tilleggsfristen ved uvitenhet, og hvordan fristen avbrytes (påtale, erkjennelse) — med forholdet til reklamasjon.
- **Eksamensbelegg:** Foreldelse ~5 (V2015, V2019, H2019, V2020, V2021). Alltid som ett av flere spørsmål, sjelden alene. Prioritetsklasse: **perfekt**. Bygger på reklamasjon/foreldelse-noten (kap. 0.4).
- **Regelkontrakt (foreldelsesloven 1979):** **§ 2** alminnelig frist **3 år**; **§ 3** fristens utgangspunkt (forfall / tidligste tidspunkt for å kreve oppfyllelse); **§ 9** erstatningskrav (fra skade + kunnskap); **§ 10** **tilleggsfrist** ved manglende kunnskap om kravet/skyldneren (inntil ett år etter kunnskap, med ytre grenser); **§§ 14–21** **fristavbrudd** (rettslig skritt, erkjennelse/§ 14, forhandlinger/§ 16) og **virkning** av avbrudd (ny frist). Forholdet **reklamasjon** (mangelsspesifikk, Del 6) vs. **foreldelse** (kravets alder) — to selvstendige frister som begge må være i behold. *(verifiser fl. §§ 2, 3, 9, 10, 14–21 mot Lovdata i fase 6.)*
- **Typetilfeller:** Minipraktikum: et krav forfalt for mer enn 3 år siden — er tilleggsfristen (§ 10) aktuell? Skyldneren erkjente kravet skriftlig (fristavbrudd, § 14).
- **Metodepoenger:** Regn ut fristen fra riktig utgangspunkt (§ 3) med faktums datoer. Sjekk tilleggsfrist og fristavbrudd. Hold foreldelse og reklamasjon fra hverandre.
- **Typiske feil:** Å blande foreldelse og reklamasjon; feil utgangspunkt for fristen; å overse tilleggsfristen (§ 10) eller et fristavbrudd (§ 14).
- **Kvote:** quiz 18 · flashcards 22

---

#### Kapittel 8.2: Typetilfelle — foreldelse som motanførsel
- **id:** `jus3112-8-2` · **number:** 8.2 · **estimatedMinutes:** 45 · **prerequisites:** `jus3112-8-1`
- **Kapitteltype:** typetilfelle
- **description:** Malen: kreditor fremmer et krav (kjøpesum, erstatning, regress); debitor påberoper foreldelse — kandidaten må regne fristene på faktums datoer og vurdere tilleggsfrist/fristavbrudd.
- **Eksamensbelegg:** Foreldelse som motanførsel (V2015, V2019, H2019, V2020, V2021). Prioritetsklasse: **perfekt**.
- **Regelkontrakt (tvistepunkt-kartet):** (1) hva er kravets art og forfallstidspunkt (§ 3)? (2) er 3-årsfristen utløpt? (3) tilleggsfrist ved uvitenhet (§ 10)? (4) er fristen avbrutt (påtale/erkjennelse, §§ 14–16)? (5) virkning av avbrudd (ny frist). Krysslenk til reklamasjon (kap. 6.4) og til direktekrav/regress (Del 9), der foreldelse er fast motanførsel.
- **Typetilfeller:** Gjennomdrøftet variant (NYSKREVET — f.eks. en leverandør krever restbetaling år etter levering; kjøper påberoper foreldelse, leverandør viser til en e-post som erkjennelse) med margkommentarer og en datolinje. Varianter (3–5) flytter tvilen mellom utgangspunkt, tilleggsfrist og fristavbrudd.
- **Metodepoenger:** Lag en datolinje. Regn nøyaktig. Erkjennelse/fristavbrudd kan redde kravet.
- **Typiske feil:** Å regne feil fra feil utgangspunkt; å overse tilleggsfrist/avbrudd; å blande med reklamasjon.
- **Kvote:** quiz 12 · flashcards 10

**Prøve-kvote Del 8:** 4 prøver (fristberegning fra riktig utgangspunkt (§§ 2–3); tilleggsfrist (§ 10)-øvelse; fristavbrudd/erkjennelse (§§ 14–16); foreldelse-som-motanførsel-praktikum med datolinje).

---

### DEL 9 — Pengekravsrett: cesjon, gjeldsbrev, direktekrav og kausjon (score ~4/14)

---

#### Kapittel 9.1: Cesjon og gjeldsbrev — innsigelses- og legitimasjonsvern, motregning
- **id:** `jus3112-9-1` · **number:** 9.1 · **estimatedMinutes:** 60 · **prerequisites:** `jus3112-0-4`
- **Kapitteltype:** regel
- **description:** Overdragelse av pengekrav: enkle gjeldsbrev/enkle krav vs. omsetningsgjeldsbrev, hvilke innsigelser og motregningsposisjoner skyldneren beholder mot ny kreditor, og legitimasjonsvernet ved omsetningsgjeldsbrev og factoring.
- **Eksamensbelegg:** Cesjon/gjeldsbrev ~4 (H2016 factoring/innsigelser/motregning, H2018 enkle vs. omsetningsgjeldsbrev (teori), V2019 overføring av krav). Prioritetsklasse: **perfekt/kunne**.
- **Regelkontrakt (gjeldsbrevloven 1939):** **Enkle gjeldsbrev / enkle krav (§§ 25–27)** — cesjonaren får **ikke bedre rett** enn cedenten; skyldneren beholder sine **innsigelser** (§ 25) og **motregningsrett** (§ 26) som forelå før han fikk kunnskap om overdragelsen; melding til debitor cessus. **Omsetningsgjeldsbrev (§§ 15–17)** — godtroerverv og **legitimasjonsvern**: en godtroende erverver kan avskjære skyldnerens svake innsigelser (§ 15) og stole på legitimasjon (§ 13/§ 14). **Factoring** (overdragelse av utestående fordringer) prøves mot § 25–§ 26. **Merk arbeidsdeling:** kollisjon mellom flere cesjonarer (gbl. § 29) og godtroerverv av krav mot tredjemann hører til **JUS3213** — kryssbok-lenk «(JUS3213 — under bygging)». *(verifiser gbl. §§ 15–17, 25–27 i fase 6.)*
- **Typetilfeller:** Minipraktikum: skyldneren har en innsigelse/motregningsrett mot opprinnelig kreditor — beholdes den mot factoringselskapet (enkelt krav, § 25–§ 26)? Samme situasjon med et omsetningsgjeldsbrev (§ 15, svake innsigelser avskåret).
- **Metodepoenger:** Skill enkle krav (cesjonaren arver posisjonen) fra omsetningsgjeldsbrev (godtroerverv/legitimasjon). Kunnskapstidspunktet styrer innsigelses-/motregningsvern.
- **Typiske feil:** Å behandle alle krav som omsetningsgjeldsbrev (eller omvendt); å overse kunnskapstidspunktet; å blande innsigelsesvern og legitimasjonsvern; å dra tredjemannskollisjon (§ 29) inn (JUS3213).
- **Kvote:** quiz 18 · flashcards 22

---

#### Kapittel 9.2: Direktekrav — kjl. § 84 og ulovfestet grunnlag
- **id:** `jus3112-9-2` · **number:** 9.2 · **estimatedMinutes:** 55 · **prerequisites:** `jus3112-9-1`
- **Kapitteltype:** regel
- **description:** Når kan en sluttkjøper rette krav direkte mot et tidligere ledd forbi et insolvent mellomledd? Det lovfestede direktekravet (kjl. § 84) og det ulovfestede grunnlaget, med springende punkter og motanførsler (reklamasjon, foreldelse).
- **Eksamensbelegg:** Direktekrav ~4 (H2015 kjl. § 84 + hensyn (teori), V2019 ulovfestet, V2021 kontraktskjede, delvis H2019). Prioritetsklasse: **perfekt/kunne**.
- **Regelkontrakt:** **Direktekrav** — kjøperen kan gjøre krav som følge av mangel gjeldende **mot et tidligere salgsledd** i den grad selgeren kunne (kjl. § 84 — «springende regress»); grunnlag også **ulovfestet** (subrogasjon/cesjon eller selvstendig direktekrav). Vilkår/skranker: mangelen må kunne gjøres gjeldende i **begge** ledd; det tidligere leddets **innsigelser** (reklamasjon, foreldelse, ansvarsfraskrivelse) kan påberopes mot direktekravet. **Hensyn** (H2015-teori): unngå at kjøper taper på et insolvent mellomledd vs. det tidligere leddets forutberegnelighet. *(verifiser kjl. § 84 og ulovfestet direktekrav i fase 6.)*
- **Typetilfeller:** Minipraktikum: sluttkunde retter krav mot produsenten forbi en konkurs-forhandler (kjl. § 84 — rekker det, og hvilke innsigelser møter han?); ulovfestet direktekrav i en tjenestekjede.
- **Metodepoenger:** Direktekravet arver mellomleddets posisjon — det tidligere leddets innsigelser (reklamasjon, foreldelse) følger med. Skill lovfestet (§ 84) fra ulovfestet grunnlag.
- **Typiske feil:** Å overse at det tidligere leddets innsigelser kan påberopes; å blande direktekrav og cesjon uten å skille grunnlagene; å glemme reklamasjon/foreldelse mot direktekravet.
- **Kvote:** quiz 16 · flashcards 18

---

#### Kapittel 9.3: Kausjon, regress og solidaransvar
- **id:** `jus3112-9-3` · **number:** 9.3 · **estimatedMinutes:** 50 · **prerequisites:** `jus3112-9-1`
- **Kapitteltype:** regel
- **description:** Sikkerhet ved tredjemann og oppgjør mellom flere ansvarlige: kausjonsansvaret (tolking, påkravsrekkefølge), solidaransvar og regressoppgjøret — med flagg for at forbrukerkausjon nå er lovregulert (finansavtaleloven).
- **Eksamensbelegg:** Kausjon/regress/solidaransvar ~2 (V2019 kausjon + tolking, V2021 regress/ansvarsdeling ved solidaritet). Prioritetsklasse: **kunne**.
- **Regelkontrakt:** **Kausjon** — tredjemann garanterer for skyldnerens forpliktelse; **tolking** av kausjonserklæringen (omfang, tid, selvskyldner- vs. simpel kausjon, påkravsrekkefølge/beneficium). **Rettstilstandsflagg:** kausjon for **forbrukere** reguleres nå av **finansavtaleloven (2020, i kraft 1.1.2023)** — informasjons-/frarådingsplikt m.m.; eldre eksamensfakta (V2019) forutsatte tidligere rett *(verifiser)*. **Solidaransvar** — flere hefter for samme forpliktelse; kreditor kan kreve hver fullt ut. **Regress** — den som betaler mer enn sin andel, kan kreve **forholdsmessig** regress av de øvrige (ulovfestet + skl.-analogier). *(verifiser finansavtalelovens kausjonsregler og regressgrunnlaget i fase 6.)*
- **Typetilfeller:** Minipraktikum: en kausjonist krever fastslått omfanget av ansvaret (tolking); en av flere solidarisk ansvarlige betaler alt og søker regress (fordelingsnøkkel).
- **Metodepoenger:** Tolk kausjonserklæringen (klarhets-/lojalitetskrav). For forbrukerkausjon: bruk finansavtaleloven. Regress fordeles forholdsmessig etter internt ansvar.
- **Typiske feil:** Å bruke ulovfestet kausjonsrett der finansavtaleloven gjelder (forbruker); feil regressfordeling; å blande solidaransvar (utad) og regress (innad).
- **Kvote:** quiz 14 · flashcards 16

---

#### Kapittel 9.4: Typetilfeller — kravet i kjeden og oppgjørsjustering (condictio indebiti)
- **id:** `jus3112-9-4` · **number:** 9.4 · **estimatedMinutes:** 50 · **prerequisites:** `jus3112-9-2`, `jus3112-9-3`
- **Kapitteltype:** typetilfelle
- **description:** To beslektede maler: (1) «kravet vandrer i en kjede» — krav rettes bakover via direktekrav/cesjon/kausjon med foreldelse som fast motanførsel; og (2) «feilbetaling og tilbakesøking» — condictio indebiti når en part har betalt for mye/for lite.
- **Eksamensbelegg:** «Kravet vandrer i en kjede» (V2019 kausjon+cesjon+direktekrav+foreldelse, V2021 kontraktskjede+regress+foreldelse, H2016 factoring); «feilbetaling og tilbakesøking» / condictio indebiti ~2 (H2017 teori, H2019 feilfaktura). Prioritetsklasse: **kunne** (kjede) / **kjenne** (condictio, men fast teori-gjenganger).
- **Regelkontrakt (tvistepunkt-kartene + condictio indebiti):** **Kjede:** (1) hvilket grunnlag når man bakover (direktekrav § 84/ulovfestet, cesjon, kausjon, regress)? (2) hvilke innsigelser møter kravet (manglende kontraktsforhold, reklamasjon, foreldelse)? (3) ansvarsdeling/regress mellom flere. **Condictio indebiti (ulovfestet):** tilbakesøking av en **feilbetaling** beror på en helhetsvurdering — hensynet til den som betalte feil vs. mottakerens **innrettelse** og god tro; utgangspunktet er tilbakesøking, men innrettelse/lojalitet kan avskjære. *(verifiser condictio indebiti-læren og innrettelseshensynet i fase 6.)*
- **Typetilfeller:** Gjennomdrøftet variant A (NYSKREVET kjede — f.eks. sluttkunde → forhandler (konkurs) → produsent, med cesjon/direktekrav og foreldelse som motanførsel) og variant B (NYSKREVET feilbetaling — f.eks. en faktura med et utelatt siffer betales, og tilbakesøking kreves). Margkommentarer + varianter (3–5).
- **Metodepoenger:** Velg riktig grunnlag bakover og hold dem fra hverandre. Foreldelse/reklamasjon er innebygde motanførsler. Ved condictio: innrettelse er kjernemomentet.
- **Typiske feil:** Å behandle direktekrav og cesjon som ett; å overse foreldelse/reklamasjon; ved condictio: å gjøre tilbakesøking automatisk uten innrettelsesvurdering.
- **Kvote:** quiz 14 · flashcards 12

**Prøve-kvote Del 9:** 4 prøver (cesjon-innsigelses-/legitimasjonsvern (enkelt krav vs. omsetningsgjeldsbrev); direktekrav (kjl. § 84 + innsigelser); kausjon/regress/solidaransvar; kjede-praktikum + condictio indebiti med foreldelse som motanførsel).

---

### DEL 10 — Teori-sporet: begrep, sammenligning og hensyn (3/14 rene teorisett)

> Teori er en sterkere gjenganger her enn i JUS3213 (3/14 rene teorieksamener + ~3 teorideler).
> Delen trener teori-sjangeren eksplisitt — IKKE som praktikum.

---

#### Kapittel 10.1: Teorisporet — begrepsredegjørelse, sammenligning på faste akser og hensyn
- **id:** `jus3112-10-1` · **number:** 10.1 · **estimatedMinutes:** 55 · **prerequisites:** `jus3112-0-4`
- **Kapitteltype:** metode-drill (teorisjangeren)
- **description:** Den faste ikke-praktikum-sjangeren: begrepsredegjørelse med avgrensning, sammenligning på faste akser, «hensyn bak regelen» og lære-fremstilling — trent på fagets kjerne-temaer.
- **Eksamensbelegg:** Teori/rettspolitisk 3/14 rene sett + teorideler: **begrepsredegjørelse** (H2018 ugyldighet/uriktige/bristende forutsetninger/force majeure/mislighold + avgrensning); **sammenligning** (V2018 avtl. § 36 vs. mfl. § 22; H2018 enkle vs. omsetningsgjeldsbrev); **lære** (H2017 condictio indebiti, V2018 kreditormora/kombinasjonsfullmakt); **hensyn/metode** (H2015 hensyn bak kjl. § 84, V2019 kontraktsrettslig metode ved ulovregulerte spørsmål); **domskrav** (H2021 pos./neg. interesse med Bodum, Blårev). IKKE praktikum. Prioritetsklasse: **perfekt** (fast sjanger).
- **Regelkontrakt (metode, ikke ny materiell rett):** **Begrepsredegjørelse** — presis definisjon + **avgrensning** mot naboinstitutter (ugyldighet ≠ mislighold ≠ forutsetningssvikt ≠ force majeure). **Sammenligning** — faste akser: **vilkår, virkeområde, rettsvirkning, hensyn** — side om side, IKKE to atskilte redegjørelser (§ 36 vs. mfl. § 22; enkle vs. omsetningsgjeldsbrev). **Hensyn bak regelen** — vei forutberegnelighet, lojalitet, omsetningsvern, forbrukervern, notoritet mot hverandre (kjl. § 84-hensyn). **Kontraktsrettslig metode ved ulovregulerte spørsmål** (V2019): analogi fra kontraktslovene + alminnelige obligasjonsrettslige prinsipper. Der oppgaven navngir dommer (Bodum, Blårev), er behandling obligatorisk.
- **Metodepoenger:** Sammenligningen ER oppgaven — bruk akser, ikke monologer. Ved begrep: avgrens. Ved hensyn: vei og konkluder. Respekter tidsanslaget for korte teorideler (ikke overinvester).
- **Typiske feil:** Å løse teorioppgaven som praktikum; to deskriptive bolker uten sammenligning; å redegjøre uten å avgrense; å overse navngitte dommer; å bruke uforholdsmessig mye tid på en kort teoridel.
- **Kvote:** quiz 14 · flashcards 16

---

#### Kapittel 10.2: Modell — teori-/begrepsoppgave
- **id:** `jus3112-10-2` · **number:** 10.2 · **estimatedMinutes:** 55 · **prerequisites:** `jus3112-10-1`
- **Kapitteltype:** teori-modellbesvarelse
- **description:** Én komplett teorioppgave på eksamensnivå (begrepsredegjørelse/sammenligning på faste akser) med A-besvarelse og kommentert svakere variant (to monologer uten kobling).
- **Eksamensbelegg:** Speiler H2018 (begreper + avgrensning), V2018 (§ 36 vs. mfl. § 22), H2015 (hensyn bak § 84). Prioritetsklasse: **perfekt**.
- **Regelkontrakt:** NYSKREVET teorioppgave i sjanger (bruker de faste temaene som MØNSTER, ikke ordrett): f.eks. «redegjør for forskjeller og likheter mellom prisavslag og erstatning ved mangel» eller «gjør rede for grensen mellom ugyldighet, mislighold og bristende forutsetninger». `collapsible` **A-besvarelse** (faste akser/avgrensning + presis begrepsbruk); `collapsible` **kommentert svakere variant** (to atskilte redegjørelser uten sammenlignende akser — margnotater om hvorfor den havner lavt); `tip` **Sensorblikket** (hva løfter fra to monologer til reell sammenligning).
- **Metodepoenger:** Akser + avgrensning løfter. Struktur og systemforståelse belønnes, ikke subsumsjon. Respekter tidsanslag.
- **Typiske feil:** To monologer; manglende avgrensning; praktikumsdisposisjon på en teorioppgave.
- **Kvote:** quiz 10 · flashcards 8

**Prøve-kvote Del 10:** 4 prøver (begrepsredegjørelse + avgrensning (ugyldighet/mislighold/forutsetningssvikt); sammenligning på faste akser (§ 36 vs. mfl. § 22 / prisavslag vs. erstatning); «hensyn bak regelen»-prøve (kjl. § 84); lære-fremstilling (condictio indebiti/kreditormora/kombinasjonsfullmakt)).

---

### DEL 11 — Eksamenstrening: praktikum og modellbesvarelser

> DNA-obligatorisk sluttdel. Her destilleres metoden fra Del 0 og materien fra Del 1–10 til
> komplette besvarelser: ≥3 modellbesvarelser (2 praktikum, inkl. ett med beføyelses-drøfting;
> 1 teori) + full simulering. Bygges av én agent som leser HELE skjelettet.

---

#### Kapittel 11.1: Se tvistepunktene — identifikasjons- og sorteringsdrill
- **id:** `jus3112-11-1` · **number:** 11.1 · **estimatedMinutes:** 50 · **prerequisites:** `jus3112-0-3`, `jus3112-0-4`
- **Kapitteltype:** metode-drill
- **description:** Å gjøre et sammensatt faktum om til en tvistepunktliste: diagnostiser grunnlaget (ugyldighet vs. mislighold vs. forutsetningssvikt), sorter beføyelsene og pengekravsspørsmålene, og respekter avgrensninger — uten fulle drøftelser.
- **Eksamensbelegg:** Identifikasjon er kjernen i hvert praktikum; de to fallgruvene (kap. 0.3, 0.4) testes implisitt i hvert sett. Prioritetsklasse: **perfekt** (metode).
- **Regelkontrakt:** 6–8 korte nyskrevne faktum (0,5–1 side) fra alle tre søyler → for hvert: spørsmålsanalyse + **grunnlagsdiagnose** (ugyldighet/mislighold/forutsetningssvikt) + **beføyelsessortering** (hver for seg) + pengekravs-/motanførselsjekk (reklamasjon, foreldelse) + tvistepunktliste + disposisjonsskisse (IKKE fulle drøftelser), fasit merket **må-punkter / pluss-punkter / feller**; øv på «skal ikke drøftes»-avgrensninger.
- **Metodepoenger:** Still diagnosespørsmålet (hvor ligger feilen?) og selvstendighetsspørsmålet (én beføyelse om gangen) for hvert faktum. Skjult delspørsmål-radar: mangel → reklamasjon + foreldelse; fullmakt → subsidiær ugyldighet; «vei ut av avtale» → ugyldighet/forutsetningssvikt/avbestilling.
- **Typiske feil:** Å blande grunnlagene; å smelte beføyelsene; å overse reklamasjon/foreldelse; å drøfte det bortavgrensede; å skrive fulle drøftelser i en identifikasjonsøvelse.
- **Kvote:** quiz 12 · flashcards 12

---

#### Kapittel 11.2: Praktikum 1 — Mangelfull ytelse og beføyelseskaskaden (modellbesvarelse)
- **id:** `jus3112-11-2` · **number:** 11.2 · **estimatedMinutes:** 85 · **prerequisites:** Del 5–7, `jus3112-11-1`
- **Kapitteltype:** praktikum-modellbesvarelse (med beføyelses-drøfting)
- **description:** Komplett kontraktspraktikum: en mangelfull ytelse der kjøper krever prinsipalt heving, subsidiært prisavslag, atter subsidiært erstatning, mot selgerens «som den er»-forbehold og reklamasjonsinnsigelse — hver beføyelse drøftet SELVSTENDIG. A-besvarelse og kommentert C-besvarelse.
- **Eksamensbelegg (kombinasjonen speiler):** «Mangelfull ytelse → beføyelseskaskade» (H2015, V2016, H2017, V2017, H2020). Prinsipale/subsidiære anførsler oppgitt uttrykkelig.
- **Innhold:** NYSKREVET faktum, ~1,5–2 sider, navngitte parter, tett kronologi med datoer/beløp, prinsipale/subsidiære anførsler. Skisse: en bedrift kjøper et brukt driftsanlegg «som det er»; anlegget viser seg å yte langt under det avtalte; selger holdt tilbake en kjent svakhet; kjøper reklamerer noe sent og krever primært heving.
- **Tvistepunktliste (fasitstruktur):** (1) riktig lov (kjl.)? (2) foreligger mangel (konkret/abstrakt + opplysningssvikt gjennom «som den er»)? (3) reklamert i tide? (4) **heving** — vesentlig? (5) subsidiært **prisavslag** — forholdsmessig? (6) atter subsidiært **erstatning** — kontrollansvar + tap; (7) **skjult delspørsmål:** foreldelse. **Må-punkter:** 2, 3 (reklamasjon), hver beføyelse drøftet SELVSTENDIG; **pluss:** opplysningssvikt slår gjennom «som den er», forholdsmessighetsbrøken; **feller:** å smelte heving/prisavslag/erstatning (fallgruve II), å la «som den er» avskjære alt, å overse reklamasjon/foreldelse.
- **Format (DNA-krav):** `collapsible` A-besvarelse (full modell, hver beføyelse for seg); `collapsible` kommentert C-besvarelse (finner mangel og hovedbeføyelsen, men slår beføyelsene sammen, godtar «som den er» ukritisk, overser reklamasjon — margnotater om hva som mangler til A); `tip` Sensorblikket (må/pluss/felle med vekting).
- **Kvote:** quiz 10 · flashcards 6

---

#### Kapittel 11.3: Praktikum 2 — Fullmakt, ugyldighet og et pengekrav (flertvist modellbesvarelse)
- **id:** `jus3112-11-3` · **number:** 11.3 · **estimatedMinutes:** 85 · **prerequisites:** Del 1–4, Del 8–9, `jus3112-11-1`
- **Kapitteltype:** praktikum-modellbesvarelse (flertvist, tre søyler)
- **description:** Komplett flertvist-praktikum som fletter avtalerett + pengekravsrett: en mellommann binder hovedmannen (fullmakt), hovedmannen påberoper subsidiært ugyldighet, og et avledet pengekrav møter cesjon/direktekrav og foreldelse. A-besvarelse og kommentert C-besvarelse.
- **Eksamensbelegg (kombinasjonen speiler):** «Fullmakt på ville veier» + ugyldighet + pengekravsrettslig delspørsmål (H2016, V2019, V2020). Bredden bygges inn i praktikumet (analysens §2).
- **Innhold:** NYSKREVET faktum, ~2 sider, tett kronologi. Skisse: en daglig leder inngår en leie-/leveranseavtale på selskapets vegne under press; selskapet bestrider binding (fullmakt overskredet) og subsidiært gyldigheten (§§ 29/33); kravet overdras til et factoringselskap, og en foreldelsesinnsigelse reises.
- **Tvistepunktliste:** (1) binding — fullmaktstype + overskridelse + god tro (§§ 10–11)? (2) subsidiært ugyldighet (§ 29 tvang / § 33 uredelighet)? (3) cesjon — beholder selskapet innsigelsene mot factoringselskapet (gbl. § 25–§ 26)? (4) foreldelse; (5) **skjult delspørsmål:** skille binding (fullmakt) fra gyldighet (ugyldighet) — fallgruve I. **Må-punkter:** 1 (god tro), 2 (riktig ugyldighetsgrunn), 3 (innsigelsesvern); **pluss:** 5, kunnskapstidspunktet ved cesjon; **feller:** å blande fullmakt og ugyldighet, å behandle kravet som omsetningsgjeldsbrev, å overse foreldelse.
- **Format:** A-besvarelse + kommentert C-besvarelse (C-en blander binding og ugyldighet, overser innsigelsesvernet, glemmer foreldelse) + Sensorblikket.
- **Kvote:** quiz 10 · flashcards 6

---

#### Kapittel 11.4: Teori-modell og full eksamenssimulering
- **id:** `jus3112-11-4` · **number:** 11.4 · **estimatedMinutes:** 90 · **prerequisites:** hele boka (Del 0–10)
- **Kapitteltype:** modellbesvarelse + simulering
- **description:** Generalprøven: en komplett teori-/begrepsoppgave OG en full flerdelt eksamenssimulering (avtalerett + kontraktsrett + pengekravsrett) med prioriteringsfasit på 6-timers ramme.
- **Eksamensbelegg:** Speiler normalformen: historisk 6 t, 2–4 deloppgaver/forhold over tre søyler, ofte + teori/begrepsdel, A–F. Teorioppgaven speiler H2018/V2018/H2021.
- **Innhold:** (a) NYSKREVET teori-/begrepsoppgave med A-besvarelse (faste akser + avgrensning) og kommentert svakere variant (to monologer); (b) NYSKREVET flerdelt eksamenssimulering: Del I avtalerett (fullmakt/ugyldighet) + Del II kontraktsrett (mangel + beføyelseskaskade) + Del III pengekravsrett (direktekrav/cesjon + foreldelse), med **prioriteringsfasit** per punkt merket **må** (bærer karakteren) / **pluss** (skjulte skillepunkter) / **felle**, og et tidsbudsjett (sum 6 t inkl. disposisjon, fordelt etter oppgitt vekt).
- **Format:** A-besvarelse for begge deler + kommentert C-/svakere besvarelse + Sensorblikket med den eksplisitte påminnelsen: skill ugyldighet/mislighold/forutsetningssvikt; hold beføyelsene fra hverandre; sjekk reklamasjon og foreldelse; velg riktig lov; subsumer på faktumets datoer/beløp; dybde slår lengde.
- **Kvote:** quiz 10 · flashcards 6

**Prøve-kvote Del 11:** 4 prøver (identifikasjons-/diagnoseprøve (nye faktum fra tre søyler); beføyelseskaskade-praktikumprøve; flertvist avtale-/pengekravspraktikumprøve; tidfestet minisimulering med felle-fokus (fallgruve I + II + reklamasjon/foreldelse)).

---

### Kvotesammendrag (kontrollregning) — AUTORITATIV

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| Del 0 | 4 | 52 | 56 | 4 |
| Del 1 | 2 | 30 | 34 | 4 |
| Del 2 | 2 | 32 | 34 | 4 |
| Del 3 | 4 | 66 | 74 | 4 |
| Del 4 | 2 | 30 | 30 | 4 |
| Del 5 | 4 | 66 | 76 | 4 |
| Del 6 | 6 | 90 | 94 | 4 |
| Del 7 | 4 | 60 | 64 | 4 |
| Del 8 | 2 | 30 | 32 | 4 |
| Del 9 | 4 | 62 | 68 | 4 |
| Del 10 | 2 | 24 | 24 | 4 |
| Del 11 | 4 | 42 | 30 | 4 |
| **Sum** | **40** | **584** | **616** | **48** |

Delsummer-kontroll:
- Quiz: 52 + 30 + 32 + 66 + 30 + 66 + 90 + 60 + 30 + 62 + 24 + 42 = **584** (≥500 ✓)
- Flashcards: 56 + 34 + 34 + 74 + 30 + 76 + 94 + 64 + 32 + 68 + 24 + 30 = **616** (sikt 550–650 ✓)
- Prøver: 4 per del × 12 deler = **48** (≥4 per del ✓)
- Kapitler: 4 + 2 + 2 + 4 + 2 + 4 + 6 + 4 + 2 + 4 + 2 + 4 = **40** (25–40 ✓)
- Modellbesvarelser: kap. 11.2 (beføyelseskaskade — praktikum m/beføyelses-drøfting), 11.3 (flertvist avtale/pengekrav — praktikum), 10.2 (teori) + 11.4 (teori + simulering) = **≥3 ✓** (2 praktikum inkl. ett med beføyelses-drøfting + 1 teori)

**Flashcard-tetthet (begrunnelse, jf. produksjonsløypens gulv-lærdom):** JUS3112 er paragraf- og
vilkårstungt (avtaleloven §§ 1–39, kjøpsloven, forbrukerkjøpsloven, avhendingslova,
håndverkertjenesteloven, foreldelsesloven, gjeldsbrevloven) med mange skjønnsmessige vilkår som
egner seg for paragraf↔vilkår-kort og for avtale-/kontraktsbegreps-kort (positiv/negativ interesse,
kontrollansvar, cesjon, reklamasjon vs. foreldelse). Flashcards er derfor satt til **616** (sikt
550–650), høyere enn quiz, med tetthet i regelkapitlene (ugyldighet §§ 28–36, mangel/«som den er»,
beføyelsene, foreldelse, cesjon) og lavere i praktikum-/simuleringskapitlene.

---

## 4. Seksjonstitler (sectionNames)

Del-nummer → beskrivende tittel (blir `sectionNames` i `TextbookCourse`; vises som
«Kapittel N: <tittel>» på bokforsiden — obligatorisk):

| Del | sectionName |
|---|---|
| 0 | Eksamenskart og praktikumhåndverk |
| 1 | Avtalerett: avtaleinngåelse og tolking |
| 2 | Avtalerett: fullmakt og legitimasjon |
| 3 | Avtalerett: ugyldighet §§ 28–36 |
| 4 | Avtalerett: bristende forutsetninger og § 36 |
| 5 | Kontraktsrett: mislighold og mangel |
| 6 | Kontraktsrett: misligholdsbeføyelsene og reklamasjon |
| 7 | Kontraktsrett: erstatning i kontrakt |
| 8 | Pengekravsrett: foreldelse |
| 9 | Pengekravsrett: cesjon, gjeldsbrev, direktekrav og kausjon |
| 10 | Teori-sporet: begrep, sammenligning og hensyn |
| 11 | Eksamenstrening: praktikum og modellbesvarelser |

---

## 5. Praktikums- og teoritrening — samlekrav

- **Minst tre komplette modellbesvarelser** med nyskrevet faktum: **to praktikum** (kap. 11.2
  beføyelseskaskade — med eksplisitt beføyelses-drøfting hver for seg; kap. 11.3 flertvist
  avtalerett + pengekravsrett) og **én teori** (kap. 10.2), pluss teori-/simuleringsmodell i kap. 11.4.
  Hver praktikum har: `collapsible` A-besvarelse; `collapsible` kommentert C-besvarelse med
  margnotater; `tip` Sensorblikket med må/pluss/felle-vekting. Teorimodellene har A-variant +
  kommentert svakere variant (to monologer).
- **De to fallgruve-metodemodulene (kap. 0.3, 0.4)** trenes eksplisitt gjennom hele boka: hvert
  praktikum baker inn diagnosespørsmålet (ugyldighet vs. mislighold vs. forutsetningssvikt) og
  beføyelsesmatrisen (hold heving/prisavslag/erstatning fra hverandre), og minst to **lovvalgs-/
  grunnlagsfeller** fra empirien (kjl. vs. fkjl. vs. avhl.; avtl. § 33 vs. § 36; gammel vs. gjeldende
  fkjl.).
- **Reklamasjon/foreldelse-motanførselen** (kap. 0.4-noten) bygges inn i hvert mislighold-/pengekravs-
  praktikum — datoene i faktum tester fristene.
- Kombinasjonene speiler de reelle mønstrene (mangelfull ytelse → beføyelseskaskade; fullmakt på ville
  veier + ugyldighet; vei ut av en byrdefull avtale; kravet i kjeden + foreldelse) — men ALLE faktum,
  parter, selskaper, beløp, datoer, bransjer, ytelser og eiendeler er nye.
- **48 prøver** fordelt 4 per del, alle i minipraktikum-/teori-/vilkårsdrill-format med fasit
  strukturert «må-punkter / pluss-punkter / feller».

---

## 6. Studieguide-disposisjon

Studieguiden bygges som ett sammenhengende dokument med disse seksjonene:

1. **Slik består du JUS3112 (og løfter til A)** — eksamensformen (digital Inspera, historisk 6 t,
   Lovdata Pro eksamensmodus, A–F, 2–4 deloppgaver over tre søyler), de tre sjangrene (praktikum,
   ren teori, blanding) og prioriteringskartet (frekvenstabellene fra kap. 0.1). Eksplisitt C→A-liste:
   de navngitte skjulte skillepunktene (riktig lovvalg, hold beføyelsene fra hverandre, opplysningssvikt
   gjennom «som den er», reklamasjon + foreldelse, positiv vs. negativ interesse).
2. **Praktikumsmetoden på én side** — spørsmålsanalyse, firetrinnskravet (lovvalg + normklarlegging
   før subsumsjon), prinsipalt/subsidiært, kumulative vilkår vs. alternative grunnlag/beføyelser;
   metodefeilene som negativ sjekkliste.
3. **De to fallgruvene på én side** — (a) skill ugyldighet ≠ mislighold ≠ forutsetningssvikt
   (diagnosespørsmålet: ligger feilen ved inngåelse, oppfyllelse eller i en sviktende forutsetning?);
   (b) hold beføyelsene fra hverandre (beføyelsesmatrisen: vilkår/terskel/virkning/forhold til de
   andre) + reklamasjon/foreldelse-noten.
4. **Teorisporet på én side** — begrepsredegjørelse + avgrensning / sammenligning på faste akser /
   hensyn bak regelen; hva som skiller sammenligning fra to monologer.
5. **Søylesammendrag** (tre seksjoner: avtalerett; kontraktsrett; pengekravsrett) — hver med
   vilkårsstiger i punktform, tvistepunkt-kart per typetilfelle, paragrafregister og den tynne
   domskanonen (Rt-2002-1110 Bodum; Rt-1938-602 Blårev + pensumforankret praksis, verifisert i fase 6).
6. **Fellekatalogen** — samtlige lovvalgs-/grunnlags-/strukturfeller i tabellform (felle → riktig
   spor), til drilling siste uke (kjl./fkjl./avhl./hvtjl.; § 33/§ 36; ugyldighet/mislighold/
   forutsetningssvikt; beføyelsene sammenslått; reklamasjon/foreldelse oversett; positiv/negativ
   interesse forvekslet).
7. **Rettstilstandsarket** — forbrukerkjøpslovens 2024-endring (gammel vs. gjeldende mangels-/
   reklamasjonsregler); kausjon flyttet til finansavtaleloven (2020/2023); avtaleloven, kjøpsloven,
   avhendingslova, foreldelsesloven og gjeldsbrevloven stabile.
8. **Leseplaner** — 14-dagers og 4-ukers plan mot eksamen med kapittelrekkefølge, prøvetidspunkter og
   simuleringsdag (kap. 11.4 på nest siste dag).
9. **Siste-døgnet-arket** — én side: vilkårslistene for «må beherskes perfekt»-punktene (mangel +
   «som den er», beføyelsene (heving/prisavslag/erstatning), reklamasjon, ugyldighet §§ 28–36,
   fullmakt §§ 10–11, foreldelse §§ 2–3/10, cesjon (enkelt krav vs. omsetningsgjeldsbrev), direktekrav
   kjl. § 84, positiv/negativ interesse).

---

## 7. Avvik fra DNA-jus (dokumentert)

DNA-jus er skrevet med JUS1111s rene praktikum-eksamen som forbilde. JUS3112 avviker på tre punkter,
alle empirisk begrunnet:

1. **Tre sjangre — praktikum + ren teori + blanding, med et fullverdig teori-spor.** JUS3112 har en
   **sterkere** teori-tradisjon enn både JUS1111 og søsteremnet JUS3213: **3 av 14 sett er RENE
   teorieksamener** (H2018, V2018, H2021) + ~3 teorideler. Derfor har boka et eget **teorispor** (Del
   10 + kap. 0.4-mal) med begrepsredegjørelse, sammenligning på faste akser, «hensyn bak regelen» og
   lære-fremstilling — og en egen teori-modellbesvarelse (kap. 10.2) i tillegg til teori/simulering i
   kap. 11.4. Teorien er begreps-/sammenlignings-/hensynsorientert, IKKE domsanalyse (domskanon er
   svært tynn — kun Bodum og Blårev er sitert i arkivet). *Begrunnelse:* analysens §1/§3.2/§7.
2. **To eksplisitte fallgruve-metodemoduler i Del 0.** Fordi analysen peker ut fagets to største
   strukturfeller (skille ugyldighet/mislighold/forutsetningssvikt; holde beføyelsene fra hverandre),
   får hver sin egen metodemodul (kap. 0.3, 0.4) som etablerer et fast språk gjenbrukt i alle senere
   deler. Kap. 0.4 huser dessuten **reklamasjons-/foreldelses-motanførsel-noten**, siden datoene i
   faktum systematisk tester disse fristene. *Begrunnelse:* analysens §4.1/§5 og sensornøkkelen —
   dette er de to mest sannsynlige strukturfellene og det tydeligste C→A-skillet.
3. **Rettstilstandssensitiv forbrukerkjøpslov håndteres med egen «Endret lov»-boks.** Fordi
   forbrukerkjøpsloven ble vesentlig endret 1.1.2024 (mangelsbegrep, reklamasjon, heving) mens hele
   eksamensarkivet er H2021 og eldre (gammel fkjl.), har kap. 5.1 en obligatorisk boks som skiller
   gjeldende fra gammel rett — slik at studenten ikke drar med seg foreldet doktrine. *Begrunnelse:*
   produksjonsløypens jus-særkrav om rettstilstandssjekk + JUS1111-lærdommen (fkjl. § 17).

**Arbeidsdeling mot JUS3213 (ufravikelig, DNA-forenlig):** Statisk tingsrett/panterett (0/14 testet)
og dynamisk formuerett/selskapsrett/konkurs er UTELATT — det eier JUS3213. Der en pengekravstvist
grenser mot tredjemannskollisjon (gbl. § 29, godtroerverv av krav), kryssbok-lenkes det til JUS3213
med **aktiveringsmarkør** «(JUS3213 — under bygging)», siden den boka ennå er skjelett (ubygd).

Ingen andre avvik: kapittel-DNA (regelkapittel/typetilfellekapittel/praktikum-modell), blokktyper,
«Eksamensvinkel»/«Typiske feil»/«Paragraf- og domsregister»/«Paragraf- og begrepsliste» og
kvotekravene følger DNA-jus. **Merk uverifisert sensorgrunnlag:** det finnes ingen sensorveiledninger
i arkivet, og hele arkivet er under forgjengerkoden JUS3111 — sensorkrav, nivåskiller (A–F) og
«typiske feil» er utledet av oppgaveordlyd + fagets metode og skal leses som hypoteser (markeres i
boka der de er avgjørende).

---

## 8. Rettstilstands-sjekk (skal utføres i fase 6 av Lovdata-verifikatør)

Per oppdrag er full Lovdata-verifikasjon lagt til **fase 6** (ingen Lovdata-oppslag er gjort i dette
skjelettet). Alle regelkontrakter er merket *(verifiser)* der usikkerhet er kjent. Verifikatøren skal:

**Sensitivt rettstilstandsflagg (håndteres eksplisitt):**
- **Forbrukerkjøpsloven — endret 1.1.2024** (EU-tilpasning, jf. lov 24. juni 2022 nr. 51 *(verifiser
  lovnummer/dato/ikrafttredelse)*): kontroller at mangelsbegrep, krav til varens egenskaper,
  reklamasjon og hevingsterskel i alle forbrukerkjøps-avsnitt bygger på **GJELDENDE** tekst — ikke
  arkivets gamle fkjl. Kap. 5.1 skal ha «Endret lov»-boks.
- **Kausjon — finansavtaleloven (2020, i kraft 1.1.2023):** kontroller at forbrukerkausjon (kap. 9.3)
  bygger på gjeldende lov, ikke ren ulovfestet rett.

**Merket `(verifiser)` — sluttkontrolleres mot GJELDENDE lov:**
- **Avtaleloven (1918):** §§ 1–9 (avtaleinngåelse), §§ 10–11 (fullmakt), § 25 (fullmektigens ansvar),
  §§ 28–31 (tvang/svik/utnyttelse — skillet sterk/svak), § 33 (redelighet), § 36 (urimelighet/lemping +
  momentlista), § 39 (re integra — kun som avgrensning).
- **Kjøpsloven (1988):** §§ 17–21 (mangel/undersøkelse/risiko), § 19 («som den er»), § 27 og § 40
  (kontrollansvar), §§ 32–33 (reklamasjon), § 34–§ 36 (retting/omlevering), § 38 (prisavslag), § 39
  (heving), § 52 (avbestilling), § 67 (direkte/indirekte tap), § 70 (tapsbegrensning), § 84 (direktekrav).
- **Forbrukerkjøpsloven (2002, GJELDENDE etter 2024):** mangels-, reklamasjons- og hevingsparagrafene.
- **Avhendingslova (1992):** §§ 3-1/3-2 (mangel), 3-7 til 3-10 (opplysnings-/undersøkelsesplikt,
  «som han er»), 4-10 til 4-14 (beføyelser), § 4-19 (reklamasjon). Merk endring i § 3-9 for
  forbrukerkjøp av bolig — verifiser gjeldende.
- **Håndverkertjenesteloven (1989):** §§ 17 flg. (mangel), § 22 (reklamasjon), §§ 24–26
  (retting/prisavslag/heving), § 28 (erstatning), §§ 39–40 (avbestilling).
- **Foreldelsesloven (1979):** §§ 2, 3, 9, 10 (tilleggsfrist), 14–21 (fristavbrudd/erkjennelse).
- **Gjeldsbrevloven (1939):** §§ 13–17 (omsetningsgjeldsbrev, legitimasjon, godtroerverv), §§ 25–27
  (enkle krav, innsigelses-/motregningsvern). **§ 29 (kollisjon) hører til JUS3213** — ikke tas inn her.
- **Markedsføringsloven (2009) § 22** (sammenligning mot avtl. § 36, teori).
- **Domsreferanser:** den tynne kjernekanonen **Rt-2002-1110 (Bodum)** og **Rt-1938-602 (Blårev)**
  (positiv/negativ interesse) stikkprøves; øvrig praksis (mangels-/opplysningspliktdommer, § 36-praksis,
  forutsetningslæren, direktekrav, kreditormora, condictio indebiti, kontrollansvar) bygges fra
  gjeldende pensumlitteratur og verifiseres. **Stikkprøv også UMARKEDE referanser** (jf.
  JUS1111-lærdommen — en umarkert HR-dom var feilattribuert). Grep `-i verifiser` (ikke bare
  `(verifiser)`) for sammensatte varianter.
- **Emneside-forbehold:** hele arkivet er JUS3111. Verifiser gjeldende **JUS3112-emneside**
  (eksamensform, timetall, studiepoeng, pensum, hjelpemidler) og bekreft at panterett/statisk tingsrett
  fortsatt ligger utenfor JUS3112-pensum (i JUS3213).
- **Sensorgrunnlag** — INGEN sensorveiledninger i arkivet. Sensorkrav/nivåskiller/«typiske feil» er
  utledet; fase 6 henter og innarbeider eventuelle publiserte UiO-sensorveiledninger før kontraktene låses.

---

## 9. Byggerekkefølge og verifikasjon

### Byggerekkefølge for Opus

1. **Metadata først:** `TextbookCourse`-oppføring for `jus3112` (mønster: `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`) med alle 40 kapitler (id/number/title/description/
   estimatedMinutes/topics/competenceGoals/prerequisites fra dette skjelettet) og `sectionNames` (§4).
2. **Del 0** (kap. 0.1–0.4) — metodespråket («må/pluss/felle», firetrinnskravet med lovvalg, de to
   fallgruve-verktøyene, teorispor-malen, reklamasjon/foreldelse-noten) etableres her og gjenbrukes
   ordrett i alle senere kapitler.
3. **Del 1 → Del 2 → Del 3 → Del 4** (avtalerett) — regelkapitler før typetilfellekapitler innen hver
   del; avtaleinngåelse (1.1) før tolking; fullmakt (2.1) før bindingstvist; ugyldighetssystemet (3.1)
   før tilblivelsesmangler/§§ 33/36; forutsetningslæren (4.1) før «vei ut»-typetilfellet.
4. **Del 5 → Del 6 → Del 7** (kontraktsrett) — lovvalg (5.1) → mangel (5.2) → «som den er» (5.3) →
   typetilfelle (5.4); beføyelsessystem (6.1) → prisavslag/heving/reklamasjon/avbestilling →
   kaskade-typetilfelle (6.6); ansvarsgrunnlag (7.1) → utmåling (7.2) → fraskrivelse (7.3) → typetilfelle.
5. **Del 8 (foreldelse) → Del 9 (cesjon/direktekrav/kausjon)** — foreldelse (8.1) før kjede-typetilfellene;
   cesjon (9.1) før direktekrav/kausjon.
6. **Del 10 (teori)** — teorisporet forutsetter kap. 0.4 + søylekunnskapen.
7. **Del 11** (kap. 11.1–11.4) — identifikasjonsdrill først, deretter de to praktikumene, så teori/
   simulering; kap. 11.4 forutsetter hele boka.
8. **Batching (fase 4):** én agent per hel del; gi agenten HELE delens kontrakter. **Del 6 (6 kap.)**
   kan deles, men gi begge agentene HELE delens kontrakter og flagg for konsistenssjekk. Del 11 bygges
   av én agent som leser hele skjelettet.
9. **Narrativ-versjoner** (`<id>-narrativ.json` per kapittel) og quiz/flashcards per kvotene — quiz
   skrives samtidig med hvert kapittel. **Prøvene** (4 per del) etter delens kapitler. **Studieguiden**
   til slutt.

### Verifikasjonssjekkliste (kjøres FØR ferdigmelding)

- [ ] **JSON-validering:** samtlige nye `chapters/*.json` parses med `json.load` (én uescapet
      anførsel kan blokkere hele prebuild).
- [ ] **Obligatorisk Lovdata-verifikatør (fase 6):** ALLE paragrafhenvisninger sjekkes mot GJELDENDE
      lov, med særskilt kontroll av postene merket `(verifiser)` i §8 — og grep `-i verifiser` (ikke
      bare `(verifiser)`) for sammensatte varianter. **Forbrukerkjøp sjekkes mot gjeldende fkjl.
      (2024-endringen)**, IKKE arkivets gamle fkjl.; **forbrukerkausjon mot finansavtaleloven (2020)**.
- [ ] **Rettstilstand, ikke bare referanser:** kontroller at intet kapittel gjengir gammel fkjl.-
      mangels-/reklamasjons-/hevingsdoktrine som gjeldende rett, og at avhl. § 3-9-endringen er reflektert.
- [ ] **Domsreferanser mot Lovdata:** den tynne kjernekanonen (Rt-2002-1110 Bodum, Rt-1938-602 Blårev)
      sjekkes; pensumforankret praksis verifiseres. Stikkprøv også UMARKEDE doms-/paragrafreferanser.
- [ ] **Quiz-/flashcard-sum:** ≥500 quiz / 550–650 flashcards totalt og samsvar med kvotetabellen (§3,
      ±10 % per kapittel OK; totalen 584/616 skal holde).
- [ ] **Prøver:** 4 per del, 48 totalt, alle med må/pluss/felle-fasit.
- [ ] **Opphavsrett:** ALLE faktum, parter, selskaper, beløp, datoer, bransjer, ytelser og eiendeler er
      nyskrevne — ingen gjenkjennbare eksamensfakta; aktivt varierte konstellasjoner ift. mal-skissene.
- [ ] **Pensumavgrensning:** null egne kapitler om panterett / statisk eller dynamisk tingsrett /
      selskapsrett / konkurs/omstøtelse (JUS3213); gbl. § 29-kollisjon ikke tatt inn; kryssbok-lenker
      til JUS3213 merket «(under bygging)».
- [ ] **DNA-blokkene på plass:** hvert kapittel har «Eksamensvinkel» (`tip`), «Typiske feil» (`warning`),
      «Paragraf- og begrepsliste» (`collapsible`, per delkapittel), og regel-/typetilfellekapitlene har
      «Paragraf- og domsregister» (`collapsible`); kap. 5.1 har «Endret lov»-boks; praktikumskapitlene
      har A + kommentert C + Sensorblikket; teorikapitlene har A + svakere variant.
- [ ] **De to fallgruvene:** kap. 0.3 (skille ugyldighet/mislighold/forutsetningssvikt) og 0.4 (hold
      beføyelsene fra hverandre + reklamasjon/foreldelse-noten) er bygget, og hvert praktikum baker inn
      diagnosespørsmålet + beføyelsesmatrisen + fristsjekken.
- [ ] **`npm run build`** grønn før ferdigmelding (arbeidsregel i CLAUDE.md).

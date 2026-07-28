# Bokskjelett: ORG 3620 Arbeids- og personaljus (BI) — eksamensrettet lærebok

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
> bransjer, stillingsprosenter, datoer, hendelser). Arketype: **DNA-jus.md** — med dokumenterte
> BI-avvik (se §8): faget er **bredere og grunnere** enn UiO-praktikum, **HR-/ledervinklet**,
> **ren praktikum uten flervalg** (motsatt søster-BI-emnet JUR 3420), og tyngdepunktet er
> forskjøvet mot **deltidsrettigheter, styringsrett og diskriminerings-lovvalg**.
>
> **Rettstilstand (KRITISK — les §2 og §9 før regelkontraktene brukes):** Boka bygger
> gjennomgående på **GJELDENDE arbeidsmiljølov** (lov 17. juni 2005 nr. 62, **aml.**), altså
> **2024-versjonen**. Flere kjernebestemmelser er endret **2022–2024** — dels *før*, dels *etter*
> settene i arkivet: heltidsnorm § 14-1 b (2023), opphevet generell 12-mnd-adgang § 14-9 (2022) +
> treårs konvertering, innleie-innstramming § 14-12 (2023), presiseringer i § 15-7 (2024).
> **Ingen Lovdata-oppslag er gjort i dette skjelettet** (bevisst — per oppdrag skal det IKKE
> WebFetch-es nå; alt slås opp i fase 6 av en obligatorisk **Lovdata-verifikatør**).
> Rettstilstandssensitive punkter er merket **🔶** og alle usikre detaljer *(verifiser)* — de MÅ
> kontrolleres mot Lovdata / faglærers oppdaterte pensum FØR trykk. Diskriminering på grunnlag av
> kjønn/graviditet/etnisitet/religion ligger i **likestillings- og diskrimineringsloven**
> (lov 16. juni 2017 nr. 51, **ldl.**), IKKE i aml. kap. 13 — feil lovvalg er fagets klassiske
> trekkfeil. Berørte kapitler har en **«Endret lov 2023–24»-boks** (`tip`/`collapsible`).
>
> **⚠️ Evidensforbehold (fra EKSAMENSANALYSEn).** Arkivet er **lite (6 sett: V2023, V2024, H2024,
> V2025, H2025 + ett udatert «Lillevik»)** og inneholder **ingen sensorveiledning/fasit**.
> Frekvenstallene er **indikatorer, ikke statistikk**, men mønsteret er slående stabilt: de samme
> fire–fem instituttene (deltidsregler, styringsrett, diskriminering, midlertidig/innleie) går igjen
> på tvers av sett. Sensorkravene (§4/§5 i analysen) er **UTLEDET** av oppgaveinstruksene («Drøft og
> ta stilling til …») + alminnelig arbeidsrettslig metode — behandle som kvalifisert hypotese, ikke
> fasit, og merk i boka der en påstand hviler på utledning.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `org3620-bi` |
| Tittel | **ORG 3620 Arbeids- og personaljus** |
| Level | `Høyskole` |
| Institusjon | Handelshøyskolen BI |
| Fagområde | jus |
| Arketype | jus (rettsdogmatisk med praktikum) — med dokumenterte BI-avvik, se §8 |
| Pitch | Boka trener nøyaktig det ORG 3620-eksamen prøver: en **individuell skriftlig skoleeksamen (100 %, A–F), maks 10 sider**, der hvert sett er en **fiktiv virksomhet med navngitte personer og et sammenhengende personalkonflikt-forløp** — **ren praktikum/case, aldri flervalg og aldri ren teori**. Eksamen kommer i **to sjangre** som begge må beherskes: **nummererte delspørsmål** (problemet er gitt, tyngden ligger i hjemmelvalg + subsumsjon) og **åpent mandat / issue-spotting** («Drøft og ta stilling til de rettslige spørsmål oppgaven reiser» — kandidaten spotter selv alle tvistene). Faktumet er **HR-praktisk**: en leder «som husker et arbeidsrettskurs feil» planter presist den regelen kandidaten skal korrigere. Fordi **Lovdata Pro og lovsamling er åpne på eksamen gir avskrift av lovtekst NULL** — poengene ligger i **riktig hjemmelvalg** og **subsumsjon på de plantede fakta**, og i å **skille materielt fra prosessuelt**. Fire institutter bærer eksamen: **deltidstriaden §§ 14-1 b / 14-3 / 14-4 a** (signaturtema — H2024 bygde tre av fire spørsmål på deltid), **styringsrett/omplassering/endringsoppsigelse** (Nøkk/Kårstø + § 15-7), **diskriminering med riktig lovvalg** (ldl. vs. aml. kap. 13), og **midlertidig ansettelse § 14-9 + innleie § 14-12**. Den klassiske trekkfeilen er **feil lovvalg** — å blande de tre deltidsreglene, eller bruke aml. kap. 13 på kjønn/religion i stedet for ldl. **Studentene er økonomi-/HR-studenter med ett emne personaljus, ikke jusstudenter** — ambisjonen er korrekt hovedhjemmel + fornuftig subsumsjon på hele bredden, ikke UiO-metodisk rettskildedybde. |
| Kapittelantall | **39** (Del 0: 4, Del 1: 4, Del 2: 6, Del 3: 3, Del 4: 4, Del 5: 5, Del 6: 4, Del 7: 4, Del 8: 5) |
| Estimert totaltid | **~1 910 minutter (~32 timer)** |
| Quiz totalt | **620** (krav ≥500; siktet høyt fordi faget er paragraf- og vilkårsrikt med tung lovvalgs-drill) |
| Flashcards totalt | **636** (sikt 550–650; **paragraf↔vilkår + arbeidsrettsbegreper**) |
| Prøver | **36** (4 per del × 9 deler; krav ≥4 per del) |
| Eksamensform boka kalibreres mot | **Individuell skriftlig skoleeksamen, teller 100 %, A–F.** Fast formkrav på arket: skriftstørrelse 12, **maks 10 sider besvarelse**. **Ren praktikum/case** i to sjangre: (a) **nummererte delspørsmål** (4 av 6 sett: V2024, H2024, V2025, H2025) og (b) **åpent mandat / issue-spotting** (2 av 6: V2023, Lillevik). Hjelpemidler: **Lovdata Pro i eksamensmodus + lovsamling/særtrykk** → ingen uttelling for lovgjengivelse. **Ingen flervalgsdel, ingen rene teorioppgaver, ingen regnestykker.** *(verifiser gjeldende BI-emneside: 7,5 ECTS, timetall, pensum, hjelpemidler.)* |

**Emnets omfang:** ORG 3620 (Employment Law, 7,5 ECTS) er **arbeids- OG personaljus for økonomistudenter**
— en anvendt innføring i arbeidsforholdet fra lederens/HRs handlingsrom: ansettelse og tilknytning,
deltidsansattes rettigheter, midlertidighet og innleie, styringsrett og omplassering, diskriminerings-
vern, oppsigelse/avskjed, og vern underveis (arbeidstid, varsling, lønnstrekk, kontrolltiltak). Formen er
**bred og HR-praktisk**: gjenkjennelige personalsituasjoner der en leder gjør en feil som en paragraf skal
korrigere. Boka har ett tydelig **tyngdepunkt — deltidstriaden** — men må dekke alle nivå 1–2-instituttene
solid.

**Avgrensning:** Det **harde nedbemannings-stillingsvernet** (utvelgelseskrets, interesseavveining,
konsernplikt) som er UiO-ryggraden (JUS5511) er **nesten fraværende** her — oppsigelse testes i ORG 3620
heller som **saklighet/pro forma** og i **kombinasjon med diskriminering/graviditet**; nedbemanning gis
derfor kort «bør kjenne til»-dekning, ikke egen del. **Kollektiv arbeidsrett** (tariff, arbeidstvist,
streik) er **perifert** (V2023 organisasjonsfrihet/fagforeningsgjengjeldelse) — dekkes kort i varslings-
kapitlet (7.2), ikke som egen del. **Domsanalyse/prejudikatkunnskap testes ikke** — faget er lov- og
subsumsjonsdrevet; kun **Nøkk (Rt. 2000 s. 1602)** og **Kårstø (Rt. 2001 s. 418)** brukes som verifiserte
domsankere for styringsretten. **Ingen andre dommer eller nemndsavgjørelser oppfinnes** (opphavs- og
korrekthetshensyn). Der arbeidsavtaleinngåelse krever alminnelig avtalerett (tilbud/aksept, konkludent
atferd) er dette **forkunnskap** som krysslenkes til JUS1111 — det bygges ikke ut som eget avtalerettsstoff.

---

## 2. Rettstilstandsflagg — LES FØRST (kritisk for bokas paragrafapparat)

Arbeidsmiljøloven er praktikum-bærende og **endres jevnlig**. De mest sentrale reglene i faget er
**ferske** (heltidsnorm 2023, opphevet 12-mnd-adgang 2022, innleie-innstramming 2023). En bok bygget på
eldre lærebøker/besvarelser vil bomme på nettopp de instituttene som testes mest. **Bygg boka på gjeldende
lovtekst (2024-versjonen)**, og la «Endret lov 2023–24»-boksene vise hva som gjaldt før, slik at studenten
kjenner igjen (og ikke kopierer) foreldet doktrine fra eldre besvarelser. Marker rettstilstandssensitive
detaljer med **🔶** og usikre ledd-/bokstavstrukturer med *(verifiser)*.

| Institutt | Bestemmelse | Status / endring 🔶 | Kapittel |
|---|---|---|---|
| **Heltidsnorm ved deltidsansettelse** | **aml. § 14-1 b** (+ § 14-1 a) 🔶 | **NY fra 1.1.2023.** Hovedregelen er ansettelse på **heltid**; deltid krever at arbeidsgiver **skriftlig dokumenterer** behovet og **drøfter med tillitsvalgte** før beslutning (§ 14-1 a: årlig drøftingsplikt om bruk av deltid). Bærende i H2024 spm. 1. *(verifiser eksakt ordlyd og forholdet §14-1a/§14-1b.)* | 2.2 |
| **Fortrinnsrett for deltidsansatte** | **aml. § 14-3** 🔶 | Deltidsansatt har fortrinnsrett til «utvidet stilling» framfor ny ansettelse, forutsatt **kvalifisert** + ikke **vesentlige ulemper** for virksomheten. Bærende i H2024 spm. 2–3, V2024 spm. 3. *(verifiser vilkår og tidsramme.)* | 2.3 |
| **Rett til stilling tilsvarende faktisk arbeidstid** | **aml. § 14-4 a** 🔶 | Deltidsansatt som **jevnlig** har arbeidet ut over avtalt tid de siste **tolv månedene** har rett til stilling tilsvarende faktisk arbeidstid, med mindre arbeidsgiver dokumenterer at behovet er bortfalt. Rette tvisteorgan: **Tvisteløsningsnemnda**. Bærende i V2024 spm. 3, V2025 spm. 1. *(verifiser 12-mnd-vilkåret og nemndsordningen.)* | 2.4 |
| **Midlertidig ansettelse — generell adgang** | **aml. § 14-9 (2) f (tidl.)** 🔶 | **OPPHEVET 1.7.2022.** Den generelle adgangen til midlertidig ansettelse i inntil 12 mnd. «for å teste ut» er fjernet. Midlertidighet krever nå positivt grunnlag (bokstav a «midlertidig karakter», b vikariat mv.). Bruk av den opphevede adgangen er nå en **feilkilde**. Bærende i V2023, Lillevik, H2025 spm. 4. *(verifiser leddstruktur og opphevelsesår.)* | 3.1, 3.3 |
| **Konverteringsregelen (treårsregel)** | **aml. § 14-9 (7)** 🔶 | **Treårsregel:** sammenhengende midlertidig ansettelse i **mer enn tre år** gir status som fast ansatt, uansett grunnlag. Eldre «fireårsregel» er utdatert — «4-års»-påstander i faktum bygger på utdatert/oppdiktet regel. *(verifiser eksakt anvendelsesområde.)* | 3.1, 3.3 |
| **Innleie fra bemanningsforetak** | **aml. § 14-12 / § 14-12 a** 🔶 | **INNSTRAMMET 1.4.2023.** Adgangen til innleie for «arbeid av midlertidig karakter» er **fjernet**; særskilt forbud i byggenæringen i Oslo-området. **Likebehandling (§ 14-12 a):** innleid skal minst ha vilkårene som ville gjeldt ved direkte ansettelse. Konvertering til fast hos innleier ved brudd/langvarighet. Bærende i V2023, H2025 spm. 4. *(verifiser presis rekkevidde + forskriftsforbud.)* | 3.2 |
| **Diskrimineringsvern — riktig lov** | **ldl.** (2017 nr. 51) vs. **aml. kap. 13** 🔶 | Kjønn, graviditet, foreldrepermisjon, etnisitet, religion, livssyn mv. → **ldl.** (§§ 6 forbud, 9 lovlig forskjellsbehandling, 11 positiv særbehandling, 37 delt bevisbyrde). Alder, politisk syn, fagforeningsmedlemskap, deltids-/midlertidigvern → **aml. kap. 13**. **Feil lovvalg er den klassiske trekkfeilen** (V2024, H2025, Lillevik). *(verifiser oppregning og §§-numre.)* | 5.1, 5.2, 5.4 |
| **Graviditet/permisjon — særlig vern** | **ldl. § 10** + **aml. § 15-9** 🔶 | Dobbelt vern: nær objektivt diskrimineringsansvar (ldl. § 10) + særskilt oppsigelsesvern i svangerskap/permisjon (aml. § 15-9). Bærende i H2025. *(verifiser ldl. § 10 og aml. § 15-9.)* | 5.3 |
| **Saklig oppsigelse** | **aml. § 15-7** 🔶 | Kjernenormen; presisert ordlyd og nye ledd (konsern/outsourcing) fra 1.1.2024. Terskelen er høy; pro forma-/uriktig begrunnelse er usaklig. *(verifiser ordlyd (1) og om konsernleddene er pensum.)* | 6.1 |
| **Lønnstrekk / motregning** | **aml. § 14-15 (2)** 🔶 | Trekk i lønn er som hovedregel forbudt; unntakene er uttømmende. Trekk «etter avtale» (bokstav c) krever **konkret, skriftlig forhåndsavtale** om det bestemte trekket — en generell standardklausul er normalt **ikke** tilstrekkelig. Bærende i V2025 spm. 2. *(verifiser leddstruktur.)* | 7.3 |

> **⚠️ Den farligste fella — tidsforskyvningen.** En bok bygget på eldre lærebøker/besvarelser vil bomme på
> de instituttene som testes mest. Bygg på **gjeldende lovtekst (2024-versjonen)**, marker 🔶 og *(verifiser)*,
> og la fase 6 sluttkontrollere. **Ikke dikt opp Høyesterettsdommer eller nemndsavgjørelser** — bruk bare
> verifiserte rettskilder (aml., ldl., ferieloven, Grl./EMK, og Nøkk Rt. 2000 s. 1602 / Kårstø Rt. 2001 s.
> 418, som begge er ekte).

---

## 3. Makrostruktur

Boka er en **typetilfelle-/subsumsjonsdrevet praktikumsbok** (ikke rettskildeteoretisk monografi, ikke
flervalgsdrill). Kjernen er **8–10 «regelkontrakter»** (én per nivå 1–2-institutt): kort regel → vilkårsliste
→ subsumsjonsmal → typiske feller. Omfanget følger gjenganger-scoren fra analysen: **deltidstriaden er
tyngdepunktet** (egen stor del), fulgt av styringsrett, diskriminering og midlertidig/innleie. To metode-
moduler i Del 0 trener de gjennomgående ferdighetene: **praktikumshåndverket i begge sjangre** (gitt spørsmål
→ ren subsumsjon; åpent mandat → issue-spotting) og **lovvalget som metode** (riktig hjemmel + skillet
materielt/prosessuelt).

| Del | Innhold (sectionName) | Kap. | Begrunnelse (gjenganger-score av 6 sett 2023–2025) |
|---|---|---|---|
| **Del 0** | Eksamenskart og praktikumshåndverk | 4 | DNA-obligatorisk. To sjangre må trenes (nummerert subsumsjon + åpent issue-spotting). To metodemoduler: (0.3) **lovvalget som metode** (riktig hjemmel + materielt vs. prosessuelt) og (0.4) **utdatert-regel-radaren / «lederen som husker kurset feil»** — begge er de gjennomgående A-skillene og fagets klassiske trekkfeil. |
| **Del 1** | Ansettelse: arbeidsavtale, tilknytning og prøvetid | 4 | Porten inn i arbeidsforholdet: arbeidstakerbegrepet § 1-8 (hvem er vernet), arbeidsavtale §§ 14-5/14-6, prøvetid § 15-6, og ansettelsen fra HR-stolen. Lavere frekvens enkeltvis, men grunnlaget alt annet hviler på. |
| **Del 2** | Deltidsansattes rettigheter — deltidstriaden | 6 | **Fagets signaturtema (~3/6, størst del).** H2024 bygde *tre av fire* spørsmål på deltid. Egne regelkapitler for hver av de tre reglene (§ 14-1 b, § 14-3, § 14-4 a) fordi den hyppigste feilen er å **blande dem** — pluss et kart-kapittel som skiller dem og to typetilfeller. |
| **Del 3** | Midlertidig ansettelse og innleie | 3 | Midlertidig § 14-9 (~3/6) + innleie § 14-12 (~2/6), alltid vevd rundt 2022/2023-endringene: opphevet 12-mnd-adgang, treårs konvertering, «for å teste ut» er ikke lenger grunnlag, innleie-innstramming. Utdatert-regel-fella bor her. |
| **Del 4** | Styringsrett, omplassering og endringsoppsigelse | 4 | Styringsrett (~3/6, går igjen i nesten hvert sett). To-spors-analysen: innenfor grunnpreget (styringsrett + saklighet, Nøkk/Kårstø) vs. utenfor → endringsoppsigelse (§ 15-7 + formkrav). Ferieendring (ferieloven § 6) er et beslektet særtilfelle. |
| **Del 5** | Diskriminering og likebehandling — lovvalget | 5 | Diskriminering (~3/6). **Riktig lovvalg (ldl. vs. aml. kap. 13) er «halve poenget».** Egen lovvalgsmodul + ldl.-regelkapittel + graviditetens doble vern + aml. kap. 13 + typetilfelle med delt bevisbyrde. |
| **Del 6** | Opphør: oppsigelse, avskjed og saksbehandling | 4 | Oppsigelse/avskjed (~2/6), her som **saklighet/pro forma** (ikke hard nedbemanning) + **prosessuelt** (drøftingsmøte § 15-1, form § 15-4, frister § 15-3). Skillet materielt/prosessuelt er et navngitt sensorkrav. |
| **Del 7** | Arbeidsforholdet underveis: arbeidstid, varsling, lønnstrekk, kontrolltiltak | 4 | Nivå 2–3-instituttene som dukker opp som «egen liten tvist»: overtid kap. 10 (~1), varsling kap. 2 A + organisasjonsfrihet (~2), lønnstrekk § 14-15 (~1), og HMS/personvern/kontrolltiltak (ikke prøvd ennå, men pensum — forebyggende dekning). |
| **Del 8** | Eksamenstrening: praktikum og issue-spotting | 5 | DNA-obligatorisk sluttdel: issue-spotting-drill (den åpne varianten) + 3 komplette praktikum med A- og kommentert C-besvarelse (ett deltidstriade, ett åpent issue-spotting, ett nummerert kombinasjonssett) + lovvalg-/fellesimulering. |

**Prioritetsklassene** (fra analysens §7) styrer oppgavemengde og dybde per kapittel:
- **perfekt** = «må beherskes perfekt» (bærer karakteren; kommer nesten hvert sett)
- **kunne** = «må kunne» (differensierer; kommer regelmessig)
- **kjenne** = «bør kjenne til» (pensum, men lav frekvens i arkivet; kortere dekning)

**Gjennomgående byggekrav** (gjelder ALLE kapitler, gjentas ikke per kapittel):
- Hvert kapittel har `tip`-blokk **«Eksamensvinkel»** og `warning`-blokk **«Typiske feil»** (innhold angitt
  per kapittel under).
- Hvert delkapittel som bruker paragraf-/vilkårsapparat får en `collapsible` **«Paragraf- og begrepsliste»**
  rett etter Forkunnskaper (jus-analogen til symbol-/formellista) som forklarer alle sentrale bestemmelser
  og faguttrykk brukt i delkapitlet — f.eks. at «grunnpreg» = stillingens kjerne som styringsretten ikke kan
  endre ensidig, «delt bevisbyrde» = ldl. § 37, «kumulative vilkår» = vilkår som alle må være oppfylt.
- Regel- og typetilfellekapitler avsluttes med `collapsible` **«Paragrafregister»** for kapitlet
  (hurtigoppslag; domsregister kun der Nøkk/Kårstø brukes).
- Kapitler berørt av 2022–2024-endringene (jf. §2) har en **«Endret lov 2023–24»-boks** (`tip`/`collapsible`):
  kort hva som gjaldt før, hva som gjelder nå, og hvorfor eldre besvarelser bommer.
- Oppgaver følger sjangrene fra analysen §3: **minipraktikum** (kort HR-faktum, ett-to tvistepunkter),
  disponert **spørsmål → hjemmel → vilkårets innhold → subsumsjon → konklusjon**, med fasit merket
  **må-punkter / pluss-punkter / feller**. For issue-spotting-relevante temaer minst én oppgave i **åpent
  mandat-format** (faktum uten nummererte spørsmål → identifiser tvistene selv). Stigende vanskelighet som
  ender på eksamensnivå.
- **Subsumsjonen er kongen.** Fordi Lovdata Pro + lovsamling er åpne, gir regelgjengivelse null uttelling —
  poeng kun for anvendelsen på faktum. Hvert **kumulative vilkår drøftes for seg**; **materielt** (er det
  rettslig grunnlag?) skilles eksplisitt fra **prosessuelt** (er saksbehandlingen fulgt?); **subsidiær**
  drøftelse der hovedkonklusjonen kan falle. Der faktum er tvilsomt: drøft begge utfall, ikke skråsikker
  konklusjon.
- **HR-/ledervinkling** i språk og eksempler (faget er *personaljus* for økonomistudenter) — men full
  juridisk metode-stringens i subsumsjonen. Bruk sjangerfiguren «lederen som husker kurset feil» til å plante
  regelen kapitlet korrigerer.
- **Alle paragrafreferanser verifiseres mot Lovdata før publisering** (se §9). Referanser merket *(verifiser)*
  har kjent usikkerhet fra rettstilstandsflagget.

---

## 4. Kapitler

### DEL 0 — Eksamenskart og praktikumshåndverk

---

#### Kapittel 0.1: Eksamenskartet — slik testes ORG 3620
- **id:** `org3620-bi-0-1` · **number:** 0.1 · **estimatedMinutes:** 30 · **prerequisites:** ingen
- **Kapitteltype:** eksamenskart
- **description:** Hva eksamen faktisk er: individuell skriftlig skoleeksamen (100 %, A–F, maks 10 sider), ren praktikum i to sjangre, hvilke fire institutter som bærer nesten hvert sett, og hva som skiller A fra C fra E på et HR-praktisk case.
- **Eksamensbelegg:** Hele empirien 2023–2025 (6 sett). Presenter: (a) formen — individuell skoleeksamen, 100 %, A–F, **maks 10 sider**, Lovdata Pro + lovsamling åpen → lovgjengivelse gir null; (b) **to sjangre**: nummererte delspørsmål (V2024, H2024, V2025, H2025) og åpent mandat/issue-spotting (V2023, Lillevik); (c) temafrekvens: **deltidstriaden ~3**, styringsrett ~3, diskriminering ~3, midlertidig/innleie ~3+2, oppsigelse/saklighet ~2, varsling ~2, + ferie/lønnstrekk/arbeidstid ~1 hver; (d) prognosen: nummerert praktikum (3–4 spm.) som kombinerer minst tre bærende institutter, men åpent mandat kan returnere.
- **Regelkontrakt:** Ingen materielle regler — men frekvenstabellen (§2.2 i analysen) gjengis som studentens prioriteringskart, og de fire bærende instituttene etableres som bokas ryggrad. Sensornøkkelen (poeng i **korrekt hjemmelvalg + subsumsjon på plantet faktum**, ikke lovgjengivelse) presenteres her.
- **Metodepoenger:** Boka er eksamenstrening, ikke pensumdekning. Med åpen Lovdata er verdien **hvor** man slår opp og **hvilket vilkår som avgjør**. Innenfor 10 sider må ALLE spørsmål besvares — disiplinert disponering er en selvstendig karakterfaktor.
- **Typiske feil:** Å lese boka som pensumdekning i stedet for subsumsjonstrening; å pugge lovtekst i stedet for å trene anvendelse; å skrive seg tom på spm. 1 og forsømme resten innenfor 10-siders-grensen.
- **Kvote:** quiz 12 · flashcards 10

---

#### Kapittel 0.2: Praktikumshåndverket — gitt spørsmål og åpent mandat
- **id:** `org3620-bi-0-2` · **number:** 0.2 · **estimatedMinutes:** 55 · **prerequisites:** `org3620-bi-0-1`
- **Kapitteltype:** metode
- **description:** Slik bygges en arbeids-/personaljuspraktikum i begge sjangre: den nummererte (problemet er gitt → ren subsumsjon spørsmål for spørsmål) og den åpne (issue-spotting → identifiser og disponer alle tvistene selv). Disposisjonen spørsmål → hjemmel → vilkårets innhold → subsumsjon → konklusjon, med hvert kumulative vilkår for seg.
- **Forkunnskaper (kryssbok):** Firetrinnsmetoden (faktum → problemstilling → regel → subsumsjon) er felles med JUS1111 — lenk til [Praktikumsmetoden — fra anførsler til disposisjon](/jus1111/jus1111-0-2) *(verifiser kapittel-id før lenking)*. Dette kapitlet legger til det arbeids-/personaljuridiske og de to sjangrene.
- **Eksamensbelegg:** **Nummererte delspørsmål** (V2024 3 spm., H2024 4 spm., V2025 2 spm., H2025 4 spm.) — struktur gitt, svar i rekkefølge; spørsmålene bygger ofte på hverandre (H2024 «har fortrinnsrett» → «forutsatt fortrinnsrett, har hun krav på stillingen»). **Åpent mandat** (V2023 Stonefjord, Lillevik) — «Drøft og ta stilling til de rettslige spørsmål oppgaven reiser»; faktum er bevisst rotete med flere parallelle konflikter (Lillevik: minst 5 selvstendige spørsmål vevd sammen).
- **Regelkontrakt (metoderegler, utledet av oppgavenes form + alminnelig metode):**
  1. **Tvistepunkt-analysen:** hvem krever/anfører hva mot hvem, på hvilket rettslig grunnlag — utledes FØR skrivingen. I den nummererte varianten er den gitt; i den åpne må hver selvstendig tvist spottes og gis egen problemstilling.
  2. **Normklarlegging FØR subsumsjon:** klarlegg først vilkårets innhold (ordlyd + relevante rettskilder), deretter subsumer. Å blande de to svekker besvarelsen.
  3. **Subsumsjonen er kongen:** poeng i konkret anvendelse på det plantede faktum, ikke i regelgjengivelse (Lovdata gir teksten gratis). Kort om det klare, dybde i tvilspunktene.
  4. **Hvert kumulative vilkår for seg:** § 14-3 (kvalifisert → ikke vesentlige ulemper), § 9 ldl. (saklig/nødvendig/forholdsmessig), § 15-7 (saklig grunn + forholdsmessighet) er sammensatte — ta hvert vilkår, ikke konkluder samlet.
  5. **Skille materielt fra prosessuelt** (eget sensorkrav): er det rettslig grunnlag *og* er saksbehandlingen fulgt (drøfting/dokumentasjon § 14-1 b, drøftingsmøte § 15-1, form § 15-4). Å behandle bare det ene er en halv besvarelse.
  6. **Subsidiær drøftelse** der hovedkonklusjonen kan falle; **drøft begge utfall** der faktum er tvilsomt.
  7. **Disponer innenfor 10 sider** — alle spørsmål må besvares.
- **Typetilfeller:** 2 `example`-blokker: (a) et nummerert delspørsmåls-sett (nyskrevet HR-faktum) → vist tvistepunkt-analyse → disposisjon; (b) samme tvistepunkt løst to ganger — én gang som ren regelgjengivelse (verdiløst med åpen Lovdata), én gang med faktumnær subsumsjon (de plantede detaljene koblet direkte til vilkårene) — A/C-skillet visualisert.
- **Metodepoenger:** Med åpen Lovdata flyttes vekten til anvendelsen. Den åpne varianten skiller mest — systematisk spørsmålsidentifikasjon er selve A-grepet der. Skill alltid materielt fra prosessuelt.
- **Typiske feil:** Konstatering i stedet for subsumsjon; gjengi hjemler uten å bruke dem; i åpne case: overse tvistepunkter; behandle et sammensatt vilkår samlet; ikke skille materielt/prosessuelt; sprenge sidegrensen på spm. 1.
- **Kvote:** quiz 16 · flashcards 12

---

#### Kapittel 0.3: Lovvalget som metode — riktig hjemmel, materielt vs. prosessuelt
- **id:** `org3620-bi-0-3` · **number:** 0.3 · **estimatedMinutes:** 50 · **prerequisites:** `org3620-bi-0-2`
- **Kapitteltype:** metode (rød tråd)
- **description:** Fagets tydeligste A/C-skille: å velge **riktig hjemmel** før subsumsjonen. Tre faste lovvalg-akser — de tre deltidsreglene (§ 14-1 b / 14-3 / 14-4 a), diskriminering (ldl. vs. aml. kap. 13), og endring (styringsrett vs. § 15-7) — pluss skillet mellom **materielt** grunnlag og **prosessuelle** saksbehandlingskrav.
- **Eksamensbelegg:** Feil lovvalg er den klassiske trekkfeilen på tvers av settene (V2024, H2025, Lillevik). Analysen §4 pkt. 2: «det tydeligste skillekriteriet». Prioritetsklasse: **perfekt** (gjennomgående metode). Modulen brukes i Del 2, 3, 4, 5, 6.
- **Regelkontrakt (metodegrep, ikke selvstendig hjemmel):**
  1. **Sorter faktum på hvilken ÉN regel som er aktuell** før du skriver. **Deltid:** ny ansettelse på deltid → § 14-1 b (heltidsnorm/dokumentasjon); ny/utlyst stilling der deltidsansatt vil utvide → § 14-3 (fortrinnsrett); har reelt jobbet mer enn avtalt over tid → § 14-4 a (faktisk arbeidstid). **Diskriminering:** kjønn/graviditet/permisjon/etnisitet/religion/livssyn → **ldl.**; alder/politikk/fagforening/deltid-/midlertidigvern → **aml. kap. 13**. **Endring:** innenfor grunnpreget → styringsrett; utenfor → endringsoppsigelse (§ 15-7).
  2. **Materielt vs. prosessuelt:** avgjør separat om det finnes rettslig grunnlag (materielt) OG om saksbehandlingen er fulgt (prosessuelt: § 14-1 b drøfting/dokumentasjon, § 15-1 drøftingsmøte, § 15-4 form). Begge kan felle en beslutning uavhengig.
  3. **Utdatert-hjemmel-kontroll:** før du fester deg ved en regel, sjekk at den ikke er opphevet/endret (opphevet § 14-9 (2) f, «4-års»-myten, aml. kap. 13 for kjønn/religion) — se kap. 0.4.
- **Typetilfeller:** 2 `example`-blokker: (a) et deltidsfaktum der samme person kunne trigge to av de tre reglene → vist hvordan man velger riktig og begrunner valget; (b) en «kvinner er mindre risikovillige»-uttalelse feilført under aml. kap. 13 → korrigert til ldl. med konsekvensen for bevisbyrde og unntaksregel.
- **Metodepoenger:** Riktig hjemmel er inngangsbilletten — feil lovvalg svekker hele drøftingen, uansett hvor god subsumsjonen er. Skill alltid materielt fra prosessuelt. Kryss regelen mot rettstilstanden (er den fortsatt gjeldende?).
- **Typiske feil:** Blande de tre deltidsreglene; bruke aml. kap. 13 på kjønn/religion; behandle en omplassering som ren styringsrett uten å vurdere endringsoppsigelse; drøfte bare materielt eller bare prosessuelt.
- **Kvote:** quiz 16 · flashcards 14

---

#### Kapittel 0.4: Rød tråd — «lederen som husker kurset feil» og utdatert-regel-fella
- **id:** `org3620-bi-0-4` · **number:** 0.4 · **estimatedMinutes:** 40 · **prerequisites:** `org3620-bi-0-2`
- **Kapitteltype:** metode (rød tråd)
- **description:** Den tilbakevendende sjangerfiguren: en leder «som tok et arbeidsrettskurs for lenge siden og husker det vesentlige» påberoper en regel som er feil, opphevet eller misforstått. Hvordan man gjenkjenner den plantede fella, korrigerer med gjeldende rett, og aldri kopierer foreldet doktrine.
- **Eksamensbelegg:** Sjangerfiguren går igjen: V2024 rektor Kirkerud, V2025 «juss er juss», H2024 Peder Ås «ingen tillitsvalgte, da har regelen ingen relevans», V2023 Mona «4 år før fast ansettelse», Lillevik «for å teste ut». Prioritetsklasse: **perfekt** (planter presist regelen som skal korrigeres). Radaren brukes i Del 2, 3, 5, 6.
- **Regelkontrakt (fellekatalog — faktumtrekk → korreksjon):**
  - «Ingen tillitsvalgte, så drøftingsplikten faller bort» → **feil**: plikten består (§ 14-1 b / § 15-1); manglende tillitsvalgte oppheves ikke, men fylles på annen måte.
  - «Fire år før fast ansettelse» / «test ut folk i 12 mnd.» → **utdatert**: generell 12-mnd-adgang opphevet 2022; **treårsregel** § 14-9 (7) er konverteringsregelen.
  - «Standardklausul i kontrakten gir rett til lønnstrekk» → **feil**: § 14-15 krever konkret, skriftlig forhåndsavtale om det bestemte trekket.
  - «Kjønn/religion behandles etter aml. kap. 13» → **feil lov**: skal være **ldl.**
  - «Åpen arbeidsavtale gir fri omplasseringsrett» → **feil**: åpen avtale utvider, men opphever ikke saklighetskravet/grunnpreget.
  - «Budsjettkutt» som skjuler trakasserings-/konfliktårsak → **pro forma**: usaklig oppsigelse (§ 15-7); se bak den oppgitte grunnen.
- **Typetilfeller:** 2 `example`-blokker: (a) en leder som siterer den opphevede 12-mnd-regelen → vist hvordan kandidaten noterer påstanden, avviser den med gjeldende § 14-9, og subsumerer riktig; (b) «ingen tillitsvalgte»-innsigelsen → vist at drøftings-/dokumentasjonsplikten består.
- **Metodepoenger:** Lederens feiloppfatning er et **signal** om hvilken regel som testes — bruk den som inngang, men bygg på gjeldende rett. Kopier aldri foreldet doktrine fra faktum eller eldre besvarelser.
- **Typiske feil:** Godta lederens rettsoppfatning; bruke opphevede/utdaterte regler; overse at fella er plantet med vilje.
- **Kvote:** quiz 14 · flashcards 12

**Prøve-kvote Del 0:** 4 prøver (tvistepunkt-identifikasjon av åpne og nummererte faktum; lovvalgs-drill på de tre aksene; materielt-vs-prosessuelt-drill; utdatert-regel-fellekatalog).

---

### DEL 1 — Ansettelse: arbeidsavtale, tilknytning og prøvetid

---

#### Kapittel 1.1: Arbeidstakerbegrepet — hvem er vernet (aml. § 1-8)
- **id:** `org3620-bi-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** `org3620-bi-0-3`
- **Kapitteltype:** regel
- **description:** Porten inn i arbeidsretten: hvem er «arbeidstaker» etter § 1-8, og hvorfor spørsmålet avgjør om vernereglene i det hele tatt gjelder. Den momentbaserte helhetsvurderingen og skillet mot selvstendig oppdragstaker — «realitet foran betegnelse».
- **Eksamensbelegg:** Sjelden eget delspørsmål i arkivet, men den logiske forutsetningen for alt vernestoff, og aktuelt i lys av plattform-/gig-arbeid (analysens prognose). Prioritetsklasse: **kunne**. Kobler til all deltids-, midlertidig- og oppsigelsesdrøfting (bare arbeidstakere er vernet).
- **Regelkontrakt (gjeldende rett):** **§ 1-8 (1)** — arbeidstaker = enhver som utfører arbeid i annens tjeneste; **momentbasert helhetsvurdering** (personlig arbeidsplikt; underordning/instruksjons- og kontrollmyndighet; arbeidsgiver stiller arbeidssted/utstyr; arbeidsgiver bærer resultatansvar/risiko; vederlag som lønn; varighet/eksklusivitet; integrasjon i virksomheten). **§ 1-8 (2)** — arbeidsgiverbegrepet (den som har ansatt arbeidstaker). *(verifiser om presumpsjonsregel/omvendt bevisbyrde for arbeidstakerstatus er innført og eksakt ledd — merk «Endret lov»-boks hvis relevant.)* Realiteten (faktisk tilknytning), ikke kontraktens etikett, avgjør.
- **Typetilfeller:** Minipraktikum: en «konsulent»/«selvstendig oppdragstaker» med fast oppmøte, arbeidsgivers utstyr og instruksjon (arbeidstaker tross betegnelse); en reell frilanser med egne oppdrag, egen risiko og flere oppdragsgivere (selvstendig, ikke vernet).
- **Metodepoenger:** Avklar arbeidstakerstatus FØRST — den avgjør om vernereglene gjelder. Realitet foran betegnelse (kap. 0.4). Ramse ikke opp momenter uten å subsumere.
- **Typiske feil:** Legge kontraktens «oppdragstaker»-etikett til grunn; ramse momenter uten subsumsjon; glemme at status er inngangsvilkåret for alt vernestoff.
- **Kvote:** quiz 16 · flashcards 18

---

#### Kapittel 1.2: Arbeidsavtalen — inngåelse, skriftlighet og innhold (§§ 14-5, 14-6)
- **id:** `org3620-bi-1-2` · **number:** 1.2 · **estimatedMinutes:** 50 · **prerequisites:** `org3620-bi-1-1`
- **Kapitteltype:** regel
- **description:** Når er en arbeidsavtale bindende inngått (også muntlig/konkludent), og hva krever loven: skriftlig arbeidsavtale (§ 14-5) og minstekravene til innhold (§ 14-6). Formkravets betydning — og manglende betydning — for gyldigheten.
- **Forkunnskaper (kryssbok):** Avtalebinding (tilbud/aksept, konkludent atferd) er avtalerett fra JUS1111 — lenk til [Avtaleinngåelse — tilbud, aksept og binding](/jus1111/jus1111-1-1) *(verifiser kapittel-id; ellers nærmeste JUS1111-avtalekapittel)*.
- **Eksamensbelegg:** Grunnlaget som deltids-, midlertidig- og styringsrettsspørsmål hviler på (hva sier avtalen? er den skriftlig?). Sjelden eget delspørsmål, men gjennomgående premiss (åpen arbeidsavtale i V2024/Lillevik; «avtalt» prosent i deltidssaker). Prioritetsklasse: **kunne**.
- **Regelkontrakt (gjeldende rett):** avtalerettslig **tilbud/aksept** kan skje muntlig eller ved **konkludent atferd** (arbeidstaker begynner å arbeide, arbeidsgiver mottar arbeidet → binding); **§ 14-5** krav om **skriftlig arbeidsavtale** (arbeidsgivers plikt, korte frister); **§ 14-6** minstekrav til innhold (partene, arbeidssted, stillingsbeskrivelse/tittel, tiltredelse, stillingsprosent, lengde ved midlertidighet, prøvetid, lønn mv.). **Sentralt:** manglende skriftlighet gjør **ikke** avtalen ugyldig — § 14-5 er en ordens-/bevisregel; en muntlig avtale er bindende. Uklarhet tolkes ofte mot arbeidsgiver. *(verifiser fristene i § 14-5 og oppregningen i § 14-6.)*
- **Typetilfeller:** Minipraktikum: muntlig jobbtilbud akseptert + oppstart uten skriftlig kontrakt (binding ved konkludent atferd; § 14-5 ikke gyldighetsvilkår); «åpen» arbeidsavtale («ansatt i virksomheten, for tiden ved avdeling X») og hva den regulerer (bygger opp mot styringsrett, kap. 4).
- **Metodepoenger:** Skill avtalebinding (er avtale inngått?) fra formkravet (er den skriftlig?). Konkludent atferd kan etablere binding. Avtalens ordlyd (stillingsprosent, arbeidssted) er tolkningsstøtte i senere tvister.
- **Typiske feil:** Tro at manglende skriftlig avtale = ingen binding; blande formkrav med gyldighet; overse at avtalens innhold rammer inn styringsretten senere.
- **Kvote:** quiz 16 · flashcards 18

---

#### Kapittel 1.3: Prøvetid — aml. § 15-6 jf. § 14-6
- **id:** `org3620-bi-1-3` · **number:** 1.3 · **estimatedMinutes:** 40 · **prerequisites:** `org3620-bi-1-2`
- **Kapitteltype:** regel
- **description:** Prøvetidens vilkår og virkning: kravet om avtalt prøvetid, den lempeligere oppsigelsesadgangen i prøvetiden (§ 15-6), krav til opplæring/vurdering, og at prøvetid ikke kan innføres ensidig etter oppstart.
- **Eksamensbelegg:** Fast følgetema til ansettelse; egnet som «egen liten tvist» i et bredere personalcase. Prioritetsklasse: **kunne**. Navngitt felle: prøvetid kan ikke innføres etter tiltredelse.
- **Regelkontrakt (gjeldende rett):** **§ 15-6** — i **avtalt** prøvetid kan oppsigelse begrunnes i arbeidstakers tilpasning til arbeidet, faglige dyktighet eller pålitelighet — en **lempeligere, men ikke fri** norm; ordinært stillingsvern gjelder ellers. Prøvetid **krever avtale** og skal fremgå skriftlig (**§ 14-6**); arbeidsgiver må ha gitt reell opplæring/tilrettelegging og en reell vurdering. Prøvetid **kan ikke innføres ensidig etter tiltredelse**. *(verifiser maksimallengde (inntil 6 mnd.) og forlengelsesadgang ved fravær i § 15-6.)*
- **Typetilfeller:** Minipraktikum: oppsigelse i prøvetid pga. sviktende faglig utvikling (§ 15-6-normen + krav til opplæring); en leder som «legger til» prøvetid en måned etter oppstart (ugyldig — krever avtale ved inngåelsen).
- **Metodepoenger:** Prøvetidsnormen er lempeligere, ikke fri — opplæring/vurdering må ha vært reell. Prøvetid krever avtale ved inngåelsen; ikke ensidig i ettertid.
- **Typiske feil:** Behandle prøvetid som fri oppsigelsesadgang; godta ensidig innført prøvetid etter oppstart; glemme opplærings-/vurderingskravet.
- **Kvote:** quiz 14 · flashcards 16

---

#### Kapittel 1.4: Typetilfelle — ansettelsen fra HR-stolen
- **id:** `org3620-bi-1-4` · **number:** 1.4 · **estimatedMinutes:** 45 · **prerequisites:** `org3620-bi-1-2`
- **Kapitteltype:** typetilfelle
- **description:** Ansettelsesprosessen slik den planter tvister: hva HR/leder kan og ikke kan legge vekt på og spørre om, forholdet til deltids-/heltidsnormen og diskrimineringsforbudet allerede ved innstilling, og «lederen som ansetter niesen uten drøfting».
- **Eksamensbelegg:** V2024 (rektor vil ha «flere menn i staben» → kobling til diskriminering kap. 5), Lillevik (ansettelse «for å teste ut» → kobling til midlertidig kap. 3), H2024 (deltidsansettelse uten drøfting → kap. 2.2). Prioritetsklasse: **kunne** (fungerer som knutepunkt inn i de bærende delene).
- **Regelkontrakt (tvistepunkt-kartet):** (1) hvilken tilknytningsform velges (fast/midlertidig § 14-9; heltid/deltid § 14-1 b) — er den lovlig? (2) er det lagt vekt på et **forbudt grunnlag** ved innstilling (ldl. § 6, kap. 5)? (3) er drøftings-/dokumentasjonsplikten fulgt (§ 14-1 b, prosessuelt)? (4) er avtalen/prøvetiden korrekt etablert (§§ 14-5/14-6, § 15-6). Kapitlet er en **issue-spotting-øvelse** i miniatyr: ett ansettelsesfaktum reiser 3–4 tvister.
- **Typetilfeller:** Gjennomdrøftet variant (NYSKREVET — f.eks. en daglig leder ansetter en slektning i en deltidsstilling uten å drøfte behovet, uttaler en preferanse for et bestemt kjønn, og «tester ut» en annen i en midlertidig stilling). Full drøftelse med margkommentarer om hvilke tvister som utløses. Varianter flytter tyngden mellom lovvalg, deltid og diskriminering.
- **Metodepoenger:** Ett ansettelsesfaktum planter flere tvister — spot dem alle. Skill materielt (er valget lovlig?) fra prosessuelt (er plikten fulgt?). Bruk lovvalgs-radaren (kap. 0.3) og utdatert-regel-radaren (kap. 0.4).
- **Typiske feil:** Behandle ansettelsen som ett spørsmål; overse diskriminerings- eller drøftingsspørsmål plantet i faktum; feil lovvalg for tilknytningsformen.
- **Kvote:** quiz 14 · flashcards 12

**Prøve-kvote Del 1:** 4 prøver (ett inngåelsespraktikum (avtalebinding + skriftlighet + prøvetid); ett arbeidstakerbegreps-/tilknytningspraktikum (§ 1-8 realitet foran betegnelse); ett HR-ansettelsespraktikum med flere plantede tvister (issue-spotting i miniatyr); én ren vilkårs-/paragrafprøve §§ 1-8, 14-5/14-6, 15-6).

---

### DEL 2 — Deltidsansattes rettigheter (deltidstriaden)

> **Rettstilstand:** Hele delen bygger på **gjeldende aml.** § 14-1 b er **NY fra 1.1.2023**; § 14-3
> og § 14-4 a er praktikum-bærende. Se «Endret lov 2023–24»-boks i kap. 2.2. Dette er bokas
> **tyngdepunkt** — den hyppigste feilen i faget er å **blande de tre reglene**, derfor har hver regel
> sitt eget kapittel og delen åpner med et kart som skiller dem.

---

#### Kapittel 2.1: Deltidstriaden — kartet som skiller de tre reglene
- **id:** `org3620-bi-2-1` · **number:** 2.1 · **estimatedMinutes:** 40 · **prerequisites:** `org3620-bi-0-3`
- **Kapitteltype:** metode (delkart)
- **description:** Oversiktskapitlet som gjør slutt på fagets vanligste feil: å blande § 14-1 b (heltidsnorm ved nyansettelse), § 14-3 (fortrinnsrett til utvidet stilling) og § 14-4 a (rett til stilling tilsvarende faktisk arbeidstid). Hvilket faktumtrekk peker på hvilken regel — og hvorfor bare én er aktuell.
- **Eksamensbelegg:** Deltid er signaturtemaet (~3/6; H2024 tre av fire spørsmål). Analysen §5: «blande de tre selvstendige reglene» er den hyppigste feilen. Prioritetsklasse: **perfekt**. Kartet brukes i kap. 2.2–2.6 og i lovvalgs-radaren (0.3).
- **Regelkontrakt (skille-tabellen — faktumtrekk → regel):**
  - **Ny/utlyst stilling som ansettes på deltid** (arbeidsgiver oppretter deltid) → **§ 14-1 b** heltidsnorm: krever skriftlig dokumentasjon av behovet + drøfting med tillitsvalgte.
  - **Deltidsansatt vil ha en utlyst/ny stilling** (arbeidsgiver vil ansette/leie nye i den delen) → **§ 14-3** fortrinnsrett: kvalifisert + ikke vesentlige ulemper.
  - **Deltidsansatt har over tid faktisk jobbet mer enn avtalt** → **§ 14-4 a** rett til stilling tilsvarende faktisk arbeidstid (jevnlig merarbeid siste 12 mnd.); tvist for **Tvisteløsningsnemnda**.
  - **Felles:** alle forutsetter deltidsansatt arbeidstaker; § 14-3 og § 14-4 a gir *rettigheter til utvidelse*, § 14-1 b regulerer *arbeidsgivers adgang til å opprette deltid*.
- **Typetilfeller:** 2 `example`-blokker: (a) ett faktum der samme person kunne se ut til å treffe både § 14-3 og § 14-4 a → vist hvordan man sorterer på det avgjørende faktumtrekket (utlyst stilling vs. faktisk merarbeid); (b) en nyansettelse på deltid → § 14-1 b, ikke § 14-3/§ 14-4 a.
- **Metodepoenger:** Sorter faktum på hvilken ÉN regel som gjelder før du subsumerer. Det avgjørende trekket: opprettes deltid (§ 14-1 b), finnes en utlyst stilling å konkurrere om (§ 14-3), eller er det reelt merarbeid over tid (§ 14-4 a)?
- **Typiske feil:** Blande de tre reglene; drøfte fortrinnsrett når spørsmålet gjelder faktisk arbeidstid; bruke § 14-1 b på en eksisterende deltidsansatt som vil utvide.
- **Kvote:** quiz 16 · flashcards 16

---

#### Kapittel 2.2: Heltidsnormen — aml. § 14-1 b (og drøftingsplikten § 14-1 a)
- **id:** `org3620-bi-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `org3620-bi-2-1`
- **Kapitteltype:** regel
- **description:** Den nye heltidsnormen (2023): hovedregelen er ansettelse på heltid; deltid krever at arbeidsgiver skriftlig dokumenterer behovet og drøfter med tillitsvalgte før beslutning. Den årlige drøftingsplikten om bruk av deltid (§ 14-1 a) og «ingen tillitsvalgte»-innsigelsen.
- **Eksamensbelegg:** H2024 spm. 1 (deltidsansettelse, § 14-1 b drøfting/dokumentasjon, «ingen tillitsvalgte»-innsigelse). Prioritetsklasse: **perfekt**. Navngitt felle (Peder Ås): «ingen tillitsvalgte, da faller plikten bort».
- **Regelkontrakt (gjeldende rett):** **§ 14-1 b NY 1.1.2023** — **hovedregel: ansettelse på heltid**. Deltid krever at arbeidsgiver **(a) skriftlig dokumenterer** behovet for deltidsansettelse og **(b) drøfter** spørsmålet med tillitsvalgte **før** beslutning. **§ 14-1 a** — **årlig drøftingsplikt** om virksomhetens bruk av deltid. **Prosessuelt vs. materielt:** dokumentasjons- og drøftingskravene er **saksbehandlingskrav** — brudd kan gjøre deltidsbeslutningen angripbar selv om et deltidsbehov finnes. **«Ingen tillitsvalgte»**: plikten består; drøfting skjer da med de ansatte/representanter — manglende tillitsvalgte opphever den ikke. **«Endret lov 2023–24»-boks:** før 2023 fantes ingen alminnelig heltidsnorm; eldre besvarelser mangler dokumentasjons-/drøftingskravet. *(verifiser eksakt ordlyd § 14-1 a/b og forholdet mellom dem.)*
- **Typetilfeller:** Minipraktikum: en leder ansetter i deltidsstilling uten å dokumentere behovet eller drøfte (§ 14-1 b brudd på saksbehandling); en leder som mener drøftingsplikten faller bort fordi virksomheten «ikke har tillitsvalgte».
- **Metodepoenger:** Heltid er nå hovedregelen — deltid må begrunnes og saksbehandles. Skill dokumentasjons-/drøftingskravet (prosessuelt) fra spørsmålet om det finnes et reelt deltidsbehov (materielt). «Ingen tillitsvalgte» opphever ikke plikten.
- **Typiske feil:** Behandle deltid som fritt arbeidsgivervalg; overse dokumentasjons-/drøftingsplikten; godta «ingen tillitsvalgte»-innsigelsen; bruke § 14-1 b på en som allerede er deltidsansatt og vil utvide (→ § 14-3/§ 14-4 a).
- **Kvote:** quiz 20 · flashcards 22

---

#### Kapittel 2.3: Fortrinnsrett til utvidet stilling — aml. § 14-3
- **id:** `org3620-bi-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** `org3620-bi-2-1`
- **Kapitteltype:** regel
- **description:** Deltidsansattes fortrinnsrett til «utvidet stilling» framfor at arbeidsgiver ansetter/leier inn nye i den aktuelle delen: de to hovedvilkårene — kvalifisert og ikke vesentlige ulemper — og forholdet til kvalifikasjonsprinsippet.
- **Eksamensbelegg:** H2024 spm. 2–3 (fortrinnsrett deltid: kvalifikasjon/ulempe; og «forutsatt fortrinnsrett, har hun krav på selve stillingen»), V2024 spm. 3 (fortrinnsrett vs. faktisk arbeidstid). Prioritetsklasse: **perfekt**. Vilkårsdrøftingen (hvert vilkår for seg) er kjernen.
- **Regelkontrakt (gjeldende rett):** **§ 14-3** — deltidsansatt har **fortrinnsrett til utvidet stilling** framfor at arbeidsgiver foretar ny ansettelse i virksomheten, forutsatt at (a) arbeidstakeren er **kvalifisert** for stillingen, og (b) utøvelsen **ikke vil innebære vesentlige ulemper** for virksomheten. Fortrinnsrett kan gjelde del av en utlyst stilling. Tvist bringes inn for **Tvisteløsningsnemnda**. Rettsvirkning: rett til stillingen (ev. dom for ansettelse). *(verifiser vilkår, «vesentlige ulemper»-terskelen, forholdet til § 14-2 fortrinnsrett etter oppsigelse og nemndsordningen.)*
- **Typetilfeller:** Minipraktikum: en deltidsansatt krever en nyutlyst deltidsstilling; drøft «kvalifisert» og «vesentlige ulemper» hvert for seg mot faktum (f.eks. at utvidelsen ville splitte en vaktordning); en mindre kvalifisert deltidsansatt som likevel påberoper fortrinnsrett.
- **Metodepoenger:** Drøft de to vilkårene **hvert for seg** — «kvalifisert» og «ikke vesentlige ulemper». «Vesentlige ulemper» krever konkret subsumsjon mot driftshensyn, ikke en generell innvending. Skill § 14-3 (utlyst stilling) fra § 14-4 a (faktisk merarbeid).
- **Typiske feil:** Konkludere samlet uten å ta hvert vilkår; senke terskelen for «vesentlige ulemper» til enhver ulempe; blande § 14-3 og § 14-4 a; overse at fortrinnsrett kan gjelde del av en stilling.
- **Kvote:** quiz 20 · flashcards 22

---

#### Kapittel 2.4: Rett til stilling tilsvarende faktisk arbeidstid — aml. § 14-4 a
- **id:** `org3620-bi-2-4` · **number:** 2.4 · **estimatedMinutes:** 55 · **prerequisites:** `org3620-bi-2-1`
- **Kapitteltype:** regel
- **description:** Regelen for deltidsansatte som over tid faktisk har jobbet mer enn avtalt: jevnlig merarbeid de siste tolv månedene gir rett til stilling tilsvarende faktisk arbeidstid, med mindre arbeidsgiver dokumenterer at behovet er bortfalt.
- **Eksamensbelegg:** V2025 spm. 1 (sjåfør ansatt 50 %, jobbet reelt >80 % i 1,5 år → rett til utvidet stilling), V2024 spm. 3, H2024 (Lotta). Prioritetsklasse: **perfekt**. Den hyppigste enkeltregelen i deltidssakene.
- **Regelkontrakt (gjeldende rett):** **§ 14-4 a** — en deltidsansatt som **jevnlig** har arbeidet ut over avtalt arbeidstid de siste **tolv månedene**, har rett til stilling tilsvarende **faktisk arbeidstid** i denne perioden, **med mindre arbeidsgiver dokumenterer at behovet for merarbeidet ikke lenger foreligger**. Vilkårene: (a) deltidsansatt; (b) **jevnlig** merarbeid (ikke enkeltstående topper); (c) over de siste **12 måneder**; (d) beregn den nye stillingsprosenten ut fra faktisk arbeidet tid. Unntak: arbeidsgivers dokumenterte bortfall av behov. Tvist for **Tvisteløsningsnemnda**. *(verifiser 12-mnd-vilkåret, «jevnlig»-terskelen og beregningsmåten.)*
- **Typetilfeller:** Minipraktikum: en 50 %-ansatt som gjennom halvannet år jevnlig har jobbet rundt 80 % (§ 14-4 a — beregn faktisk arbeidstid, prøv arbeidsgivers bortfallsinnsigelse); en ansatt med enkeltstående travle måneder (mangler «jevnlig»-vilkåret).
- **Metodepoenger:** «Jevnlig» over «12 måneder» er kjernevilkårene — subsumer merarbeidsmønsteret konkret. Regn ut den nye prosenten fra faktisk tid. Arbeidsgivers unntak krever **dokumentert** bortfall, ikke en påstand.
- **Typiske feil:** Blande § 14-4 a med fortrinnsrett § 14-3; se bort fra «jevnlig»-vilkåret; godta udokumentert bortfallspåstand; feil beregning av faktisk arbeidstid.
- **Kvote:** quiz 20 · flashcards 22

---

#### Kapittel 2.5: Typetilfelle — «deltidsansatt som reelt jobber mer»
- **id:** `org3620-bi-2-5` · **number:** 2.5 · **estimatedMinutes:** 50 · **prerequisites:** `org3620-bi-2-4`
- **Kapitteltype:** typetilfelle
- **description:** Det klassiske deltids-typetilfellet: en ansatt i lav stillingsprosent som i praksis jobber betydelig mer. Hvordan man velger mellom § 14-4 a (faktisk arbeidstid) og § 14-3 (fortrinnsrett), og subsumerer «jevnlig»/«kvalifisert»/«vesentlige ulemper».
- **Eksamensbelegg:** V2025 spm. 1 (Frida 50 %→>80 %), H2024 (Lotta), V2024 (Gerd Hansen). Prioritetsklasse: **perfekt**. Navngitt A/C-skille: å velge riktig av § 14-3/§ 14-4 a.
- **Regelkontrakt (tvistepunkt-kartet):** (1) hvilken regel utløses av faktum — reelt merarbeid over tid (§ 14-4 a) eller en utlyst stilling å konkurrere om (§ 14-3)? (2) subsumer vilkårene i den valgte regelen hvert for seg; (3) prøv arbeidsgivers innsigelse (bortfalt behov / vesentlige ulemper); (4) fastslå rettsvirkning (ny stillingsprosent / rett til stilling) og rette tvisteorgan (Tvisteløsningsnemnda).
- **Typetilfeller:** Gjennomdrøftet variant (NYSKREVET — f.eks. en butikkmedarbeider ansatt i 40 % som i over et år jevnlig har dekket ekstra vakter opp mot 75 %, samtidig som kjeden lyser ut en ny deltidsstilling). Full drøftelse med margkommentarer om hvilken regel som er riktig og hvorfor. Varianter flytter tvilen: enkeltstående topper (faller ut av § 14-4 a); manglende kvalifikasjon (faller ut av § 14-3); dokumentert bortfall av behov.
- **Metodepoenger:** Faktumtrekket avgjør regelvalget. Subsumer «jevnlig»/«12 mnd.» (§ 14-4 a) eller «kvalifisert»/«vesentlige ulemper» (§ 14-3) konkret. Angi rette tvisteorgan.
- **Typiske feil:** Feil regelvalg mellom § 14-3 og § 14-4 a; samlet konklusjon uten vilkårsvis subsumsjon; overse arbeidsgivers unntaksadgang.
- **Kvote:** quiz 16 · flashcards 16

---

#### Kapittel 2.6: Typetilfelle — deltidstriaden i kombinasjon
- **id:** `org3620-bi-2-6` · **number:** 2.6 · **estimatedMinutes:** 45 · **prerequisites:** `org3620-bi-2-2`, `org3620-bi-2-3`, `org3620-bi-2-4`
- **Kapitteltype:** typetilfelle
- **description:** Settet der flere deltidsregler er i spill samtidig (H2024-malen: tre av fire spørsmål på deltid). Hvordan man holder de tre reglene fra hverandre gjennom et sammensatt faktum og bygger delspørsmål som forutsetter hverandre.
- **Eksamensbelegg:** H2024 (spm. 1 § 14-1 b nyansettelse, spm. 2 § 14-3 fortrinnsrett, spm. 3 «krav på selve stillingen» forutsatt fortrinnsrett). Prioritetsklasse: **perfekt**. Trener det H2024 faktisk gjorde: hele deltidstriaden i ett case.
- **Regelkontrakt (tvistepunkt-kartet):** (1) er en **nyopprettet** deltidsstilling lovlig etablert (§ 14-1 b dokumentasjon/drøfting)? (2) har en eksisterende deltidsansatt **fortrinnsrett** til den (§ 14-3)? (3) har vedkommende **krav på selve stillingen** når vilkårene er oppfylt (rettsvirkning)? (4) eventuelt: har en tredje ansatt rett etter **faktisk arbeidstid** (§ 14-4 a)? Delspørsmålene bygger på hverandre — respekter forutsetningene.
- **Typetilfeller:** Gjennomdrøftet variant (NYSKREVET — f.eks. en servicevirksomhet oppretter en deltidsstilling uten drøfting, to eksisterende deltidsansatte gjør krav, og en tredje har jobbet mer enn avtalt). Full drøftelse med margkommentarer. Varianter flytter tvilen mellom de tre reglene.
- **Metodepoenger:** Hold de tre reglene atskilt gjennom hele settet — hvert delspørsmål har sin egen hjemmel. Følg forutsetningskjeden («forutsatt fortrinnsrett …»). Skill materielt (rett) fra prosessuelt (drøfting/dokumentasjon).
- **Typiske feil:** La reglene gli over i hverandre; svare på fortrinnsrett når spørsmålet gjelder faktisk arbeidstid; ignorere at spm. 3 forutsetter svaret i spm. 2.
- **Kvote:** quiz 14 · flashcards 14

**Prøve-kvote Del 2:** 4 prøver (én ren skille-/lovvalgsprøve på de tre deltidsreglene (faktumtrekk → riktig hjemmel); ett § 14-4 a-praktikum (jevnlig merarbeid, beregning, bortfallsinnsigelse); ett § 14-3-fortrinnsrettspraktikum (kvalifisert + vesentlige ulemper, hvert vilkår for seg); ett kombinasjonspraktikum i H2024-format (§ 14-1 b + § 14-3 + § 14-4 a i samme case)).

---

### DEL 3 — Midlertidig ansettelse og innleie

> **Rettstilstand:** Bygger på **gjeldende aml.** Den generelle 12-mnd-adgangen (§ 14-9 (2) f) er
> **opphevet 2022**; innleie er **innstrammet 2023**. Se «Endret lov 2023–24»-boks i kap. 3.1 og 3.2.
> Utdatert-regel-fella («4 år», «teste ut») bor i denne delen.

---

#### Kapittel 3.1: Midlertidig ansettelse — aml. § 14-9
- **id:** `org3620-bi-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `org3620-bi-0-4`
- **Kapitteltype:** regel
- **description:** Hovedregelen om fast ansettelse, de positive grunnlagene for midlertidighet (bokstav a–e), den opphevede generelle adgangen (bokstav f, 2022), treårs-konverteringsregelen (7) og rettsvirkningen av ulovlig midlertidighet.
- **Eksamensbelegg:** V2023 Stonefjord (midlertidig ansettelse, «4-års»-myten), H2025 spm. 4 (§ 14-9), Lillevik (Hassan «for å teste ut»). Prioritetsklasse: **perfekt**. Alltid vevd rundt de nye reglene.
- **Regelkontrakt (gjeldende rett):** **§ 14-9 (1)** — **fast ansettelse er hovedregelen** (løpende og tidsubegrenset, reelt stillingsvern). **§ 14-9 (2)** — midlertidig krever **positivt grunnlag**: **a** arbeid av midlertidig karakter; **b** vikariat; **c** praksisarbeid; **d** arbeidsmarkedstiltak; **e** idrettsutøvere mv. **Bokstav f (generell adgang inntil 12 mnd.) er OPPHEVET 1.7.2022** — «for å teste ut folk» er ikke lenger gyldig grunnlag. **§ 14-9 (7)** — **treårsregel**: sammenhengende midlertidig ansettelse i **mer enn tre år** gir status som fast ansatt, uansett grunnlag. **§ 14-11** — rettsvirkning ved ulovlig midlertidighet: **dom for fast ansettelse** (ev. erstatning). **«Endret lov 2023–24»-boks:** før 2022 ga bokstav f generell adgang i inntil 12 mnd.; «fireårsregel» for enkelte grunnlag er avløst av treårsregelen — begge foreldede varianter er nå feilkilder. *(verifiser leddstruktur (2)/(7), treårsregelens anvendelsesområde og § 14-11.)*
- **Typetilfeller:** Minipraktikum: en «vikar» som i realiteten dekker et fast bemanningsbehov (§ 14-9 (2) b + realitet → fast); en ansatt «for å teste ut» eller på «4-års»-premiss (opphevet/utdatert grunnlag → ulovlig midlertidighet).
- **Metodepoenger:** Fast er hovedregelen — midlertidighet krever positivt grunnlag (a–e), ikke lenger generell adgang. Realitet foran betegnelse (er «vikariatet» reelt?). Treårsregelen konverterer. Rettsvirkning = fast ansettelse.
- **Typiske feil:** Bruke opphevet bokstav f / generell 12-mnd-adgang; bruke «4-års»-regelen; godta «vikariat»-etikett uten realitetsprøving; glemme rettsvirkningen (fast ansettelse).
- **Kvote:** quiz 20 · flashcards 22

---

#### Kapittel 3.2: Innleie fra bemanningsforetak — aml. § 14-12 / § 14-12 a
- **id:** `org3620-bi-3-2` · **number:** 3.2 · **estimatedMinutes:** 45 · **prerequisites:** `org3620-bi-3-1`
- **Kapitteltype:** regel
- **description:** Innleiens vilkår etter 2023-innstrammingen: når innleie er tillatt (i hovedsak vikariat), det særskilte forbudet i byggenæringen i Oslo-området, likebehandlingsprinsippet (§ 14-12 a) og rettsvirkningen av ulovlig innleie.
- **Eksamensbelegg:** V2023 Stonefjord (innleie vs. reelt fast behov, likebehandling/overtid), H2025 spm. 4 (innleie § 14-12). Prioritetsklasse: **perfekt/kunne** (bærende i to sett). Kobler til midlertidig (kap. 3.1) og overtid (kap. 7.1).
- **Regelkontrakt (gjeldende rett):** **§ 14-12** — innleie fra bemanningsforetak er etter innstrammingen **1.4.2023** i hovedsak tillatt ved **vikariat** (jf. § 14-9 (2) b) og etter avtale med tillitsvalgte i visse tilfeller; **adgangen for «arbeid av midlertidig karakter» (§ 14-9 (2) a) er fjernet**. **Særskilt forbud** mot innleie til bygningsarbeid på byggeplasser i Oslo-området (forskrift). **§ 14-12 a likebehandling:** innleid arbeidstaker skal minst ha samme lønns-/arbeidsvilkår (herunder overtid) som ved direkte ansettelse hos innleier. **Rettsvirkning** ved ulovlig/langvarig innleie: **fast ansettelse hos innleier**. Skill **innleie** (fra bemanningsforetak) fra **entreprise** (tjenestekjøp) — grensen (hvem styrer/har ansvaret) avgjør regelsett. **«Endret lov 2023–24»-boks:** før 2023 kunne det leies inn på samme grunnlag som midlertidig ansettelse (inkl. «midlertidig karakter»); nå snevret inn. *(verifiser presis rekkevidde § 14-12, forskriftsforbudet og § 14-12 a.)*
- **Typetilfeller:** Minipraktikum: langvarig innleie begrunnet i «midlertidig behov» (ulovlig etter 2023 → fast ansettelse hos innleier); en innleid som får dårligere overtidsbetaling enn fast ansatte (§ 14-12 a likebehandling).
- **Metodepoenger:** Innleie er innstrammet — «midlertidig karakter» er ikke lenger grunnlag. Skill innleie fra entreprise. Rettsvirkning = fast ansettelse hos innleier. Likebehandling gjelder (også overtid).
- **Typiske feil:** Bruke gammel innleieadgang for «midlertidig karakter»; blande innleie og entreprise; glemme likebehandlingsprinsippet.
- **Kvote:** quiz 16 · flashcards 18

---

#### Kapittel 3.3: Typetilfelle — «er behovet reelt fast?» og utdatert-regel-fella
- **id:** `org3620-bi-3-3` · **number:** 3.3 · **estimatedMinutes:** 45 · **prerequisites:** `org3620-bi-3-1`, `org3620-bi-3-2`
- **Kapitteltype:** typetilfelle
- **description:** Standardtypetilfellet der arbeidsgiver har brukt midlertidighet eller innleie for å dekke et permanent behov, ofte begrunnet med en opphevet eller oppdiktet regel. Realitetsprøving, treårsregelen, og korreksjon av «4-års»-/«teste ut»-fella.
- **Eksamensbelegg:** V2023 Stonefjord (innleie/midlertidig + «4 år»), Lillevik (Hassan «for å teste ut»), H2025 spm. 4 (midlertidig + innleie). Prioritetsklasse: **perfekt**. Aktiverer utdatert-regel-radaren (kap. 0.4).
- **Regelkontrakt (tvistepunkt-kartet):** (1) er grunnlaget for midlertidighet/innleie **reelt** (§ 14-9 (2) a–e / § 14-12)? (2) dekker ordningen et **varig behov** → fast ansettelse (realitet foran betegnelse)? (3) er **treårsgrensen** (§ 14-9 (7)) passert? (4) hviler arbeidsgivers standpunkt på en **opphevet/utdatert regel** («12-mnd-testing», «4 år») → korriger med gjeldende rett; (5) rettsvirkning = fast ansettelse (§ 14-11 / hos innleier).
- **Typetilfeller:** Gjennomdrøftet variant (NYSKREVET — f.eks. en verkstedbedrift som gjennom flere år har dekket et konstant bemanningsbehov med rullerende innleie og «prøvekontrakter», og lederen viser til at «man kan teste folk i fire år»). Full drøftelse med margkommentarer om hvordan fella korrigeres. Varianter: reelt vikariat for navngitt fraværende; prosjektarbeid av midlertidig karakter; treårsgrensen akkurat passert.
- **Metodepoenger:** Realiteten (varig behov) avgjør, ikke etiketten eller lederens regelhukommelse. Treårsregelen er et selvstendig spor. Korriger alltid den plantede utdaterte regelen. Rettsvirkning = fast ansettelse.
- **Typiske feil:** Godta «vikariat»-/«prøve»-etiketten; bruke «4-års»- eller «12-mnd-testing»-regelen; overse treårsregelen; glemme rettsvirkningen.
- **Kvote:** quiz 16 · flashcards 16

**Prøve-kvote Del 3:** 4 prøver (ett § 14-9-praktikum (positivt grunnlag, opphevet f, treårsregel); ett innleiepraktikum (§ 14-12/§ 14-12 a, reelt fast behov, likebehandling); ett utdatert-regel-fellepraktikum («4 år»/«teste ut» plantet); én ren vilkårs-/paragrafprøve §§ 14-9, 14-11, 14-12/14-12 a).

---

### DEL 4 — Styringsrett, omplassering og endringsoppsigelse

---

#### Kapittel 4.1: Styringsretten — innhold og de fire skrankene (Nøkk/Kårstø)
- **id:** `org3620-bi-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `org3620-bi-0-3`
- **Kapitteltype:** regel
- **description:** Arbeidsgivers ulovfestede styringsrett — retten til å organisere, lede, fordele og kontrollere arbeidet — og de fire skrankene: lov, tariff, arbeidsavtalens grunnpreg og et ulovfestet saklighetskrav. Grunnpreg-testen (Nøkk) og saklighetsnormen (Kårstø).
- **Eksamensbelegg:** Styringsrett ~3/6 — H2025 spm. 1 (omfordeling av oppgaver, grunnpreg), V2024 spm. 2 (omplassering av tillitsvalgt), Lillevik (Cecilie flyttes 50 km). Prioritetsklasse: **perfekt** (går igjen i nesten hvert sett). Nøkk/Kårstø er de eneste dommene boka bruker.
- **Regelkontrakt (gjeldende rett):** styringsretten er **ulovfestet** — arbeidsgivers «restkompetanse» til å organisere, lede, fordele og kontrollere arbeidet. **Fire skranker:** (1) **lov** (verneregler, fortrinnsrett, diskrimineringsforbud, arbeidstidsregler); (2) **tariffavtale**; (3) arbeidsavtalens **grunnpreg** (stillingens kjerne — endring **utenfor** krever endringsoppsigelse, kap. 4.2); (4) et ulovfestet **saklighetskrav** (forsvarlig grunnlag, korrekt saksbehandling, ikke vilkårlig/utenforliggende hensyn). **Domsankere (kun disse):** **Nøkk (Rt. 2000 s. 1602)** — styringsretten som restkompetanse + grunnpreg-testen; **Kårstø (Rt. 2001 s. 418)** — saklighets-/forsvarlighetsrammen. **«Åpen arbeidsavtale»** («ansatt i virksomheten, for tiden ved …») utvider styringsrommet, men opphever ikke saklighetskravet/grunnpreget.
- **Typetilfeller:** Minipraktikum: endring av oppgaver innenfor stillingens kjerne (lovlig styringsrett + saklighet); et pålegg som strider mot en lovpålagt plikt/fortrinnsrett (styringsretten viker for loven).
- **Metodepoenger:** Styringsretten er utgangspunktet, men begrenset av fire skranker. Grunnpreg-testen (Nøkk) skiller styringsrett fra endringsoppsigelse (kap. 4.2). Saklighetsnormen (Kårstø) gjelder også innenfor styringsretten. «Åpen avtale» utvider, men opphever ikke saklighetskravet.
- **Typiske feil:** Behandle styringsretten som ubegrenset; hoppe over grunnpreg-testen; overse saklighetskravet; la «åpen arbeidsavtale» gi fri omplasseringsrett.
- **Kvote:** quiz 20 · flashcards 22

---

#### Kapittel 4.2: Omplassering — styringsrett eller endringsoppsigelse?
- **id:** `org3620-bi-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `org3620-bi-4-1`
- **Kapitteltype:** regel
- **description:** To-spors-analysen: ligger endringen innenfor grunnpreget (lovlig styringsrett + saklighet) eller utenfor (endringsoppsigelse, som krever saklig grunn og oppsigelsesprosess § 15-7)? Grunnpreg-testen anvendt, og formkravene ved endringsoppsigelse.
- **Eksamensbelegg:** V2024 spm. 2 (Petronella lærer→delt stilling; omplassering av tillitsvalgt), Lillevik (Cecilie 50 km), H2025 spm. 1. Prioritetsklasse: **perfekt**. Navngitt A/C-skille: å blande styringsrett og endringsoppsigelse.
- **Regelkontrakt (gjeldende rett):** (1) fastlegg stillingens **grunnpreg** (arbeidsavtale + praksis, Nøkk); (2) ligger den nye plasseringen **innenfor** grunnpreget → lovlig styringsrett (men saklighetskravet gjelder, Kårstø); **utenfor** → **endringsoppsigelse** = delvis oppsigelse av det gamle + tilbud om nytt, som må oppfylle **§ 15-7** (saklig grunn) og **saksbehandlingskravene** (drøftingsmøte § 15-1, form § 15-4 — kap. 6.2); (3) særlig vern for **tillitsvalgte** (omplassering kan ikke svekke vervet/være gjengjeldelse); (4) subsidiært: hvis styringsrett, prøv saklighet/forsvarlighet. **Materielt vs. prosessuelt:** endringsoppsigelse må både ha saklig grunn OG følge formreglene.
- **Typetilfeller:** Minipraktikum: en fagansvarlig omplasseres til rutineoppgaver etter en konflikt (innenfor kjernen eller ikke?); en ansatt flyttes geografisk langt unna (grunnpreg + saklighet + form).
- **Metodepoenger:** Grunnpreg-testen avgjør sporet. Innenfor → styringsrett + saklighet; utenfor → § 15-7 + formkrav. Å blande de to er navngitt A/C-skille. Se etter utenforliggende hensyn (gjengjeldelse, kap. 7.2).
- **Typiske feil:** Blande styringsrett og endringsoppsigelse; anta styringsrett uten grunnpreg-test; glemme saklighetskravet ved lovlig omplassering; overse formkravene ved endringsoppsigelse.
- **Kvote:** quiz 18 · flashcards 18

---

#### Kapittel 4.3: Typetilfelle — «omplassering forkledd som styringsrett»
- **id:** `org3620-bi-4-3` · **number:** 4.3 · **estimatedMinutes:** 45 · **prerequisites:** `org3620-bi-4-2`
- **Kapitteltype:** typetilfelle
- **description:** Typetilfellet der en inngripende endring presenteres som ren styringsrett, ofte støttet av en «åpen arbeidsavtale». Hvordan man avdekker at endringen ligger utenfor grunnpreget og krever endringsoppsigelse — og ser etter utenforliggende motiv.
- **Eksamensbelegg:** V2024 (Petronella), Lillevik (Cecilie 50 km + budsjett-påskudd), H2025 (Sara). Prioritetsklasse: **perfekt**. «Åpen arbeidsavtale»-argumentet er en tilbakevendende felle.
- **Regelkontrakt (tvistepunkt-kartet):** (1) hva er **grunnpreget** (avtale + praksis)? (2) er endringen **innenfor** (styringsrett) eller **utenfor** (endringsoppsigelse)? (3) redder en **«åpen arbeidsavtale»** arbeidsgiver? (nei — den utvider, men opphever ikke grunnpreget/saklighetskravet); (4) foreligger **utenforliggende hensyn** (gjengjeldelse for varsling/organisering, konflikt) → usaklig; (5) er formkravene fulgt hvis det er endringsoppsigelse?
- **Typetilfeller:** Gjennomdrøftet variant (NYSKREVET — f.eks. en medarbeider med «åpen» arbeidsavtale flyttes til en fjern avdeling og fratas ansvarsområdet kort tid etter en konflikt med ledelsen). Full drøftelse med margkommentarer. Varianter: endret ansvarsområde; degradering i realiteten; geografisk flytting; endring like etter et varsel.
- **Metodepoenger:** «Åpen avtale» gir ikke fri omplasseringsrett. Grunnpreg-testen avgjør sporet. Let etter utenforliggende motiv. Skill materielt fra prosessuelt.
- **Typiske feil:** Godta «åpen avtale» som fri styringsrett; behandle inngripende omplassering som ren styringsrett; overse gjengjeldelses-/saklighetsdimensjonen.
- **Kvote:** quiz 14 · flashcards 14

---

#### Kapittel 4.4: Endring av fastsatt ferie — ferieloven § 6
- **id:** `org3620-bi-4-4` · **number:** 4.4 · **estimatedMinutes:** 45 · **prerequisites:** `org3620-bi-4-1`
- **Kapitteltype:** regel
- **description:** Et beslektet styringsretts-særtilfelle: arbeidsgivers adgang til å endre allerede fastsatt ferie (ferieloven § 6), vilkåret om vesentlige driftsproblemer + manglende vikar, drøftingsplikten og erstatning kun for dokumenterte merutgifter — arbeidstakerens egne.
- **Eksamensbelegg:** H2024 spm. 4 (endring av fastsatt ferie, dokumenterte merutgifter, kun arbeidstakers egne). Prioritetsklasse: **kunne**. Detaljfeller: udokumenterte utgifter, tredjeparts utgifter.
- **Regelkontrakt (gjeldende rett):** **ferieloven § 6** — arbeidsgiver kan **endre** allerede fastsatt ferie hvis det er nødvendig pga. **uforutsette hendelser** som skaper **vesentlige driftsproblemer** og det ikke kan skaffes **vikar**. **Drøfting** med arbeidstaker først; arbeidstaker kan kreve **erstatning** for **dokumenterte merutgifter** som følge av omleggingen — men **kun egne** utgifter, og som hovedregel bare de som ble **opplyst under drøftingen**. *(verifiser vilkårene i ferieloven § 6 og erstatningsregelen.)*
- **Typetilfeller:** Minipraktikum: en leder inndrar fastsatt ferie pga. akutt bemanningskrise (subsumer «vesentlige driftsproblemer» + «vikar»); arbeidstaker krever dekket samboers reiseutgifter eller utgifter som ikke ble nevnt under drøfting (avvises — kun egne, opplyste).
- **Metodepoenger:** Endringsadgangen er snever — vesentlige driftsproblemer + ingen vikar. Drøft først. Erstatning kun for arbeidstakers egne, dokumenterte og opplyste merutgifter.
- **Typiske feil:** Behandle ferieendring som fritt styringsvalg; dekke tredjeparts utgifter; dekke udokumenterte/ikke-opplyste utgifter; hoppe over drøftingen.
- **Kvote:** quiz 14 · flashcards 16

**Prøve-kvote Del 4:** 4 prøver (ett styringsretts-/grunnpregspraktikum (Nøkk/Kårstø, fire skranker); ett omplasserings-/endringsoppsigelsespraktikum (grunnpreg → spor, formkrav); ett «åpen arbeidsavtale + utenforliggende hensyn»-praktikum; én ferieendringsprøve (ferieloven § 6, merutgiftsfellene)).

---

### DEL 5 — Diskriminering og likebehandling (lovvalget)

> **Rettstilstand:** Diskriminering på grunnlag av kjønn/graviditet/permisjon/etnisitet/religion/livssyn
> reguleres av **ldl.** (2017 nr. 51), IKKE aml. kap. 13. Alder, politisk syn, fagforeningsmedlemskap og
> deltids-/midlertidigvern ligger i **aml. kap. 13**. **Feil lovvalg er fagets klassiske trekkfeil** — se
> «Endret lov»-boks i kap. 5.1/5.2. Delen åpner med en ren lovvalgsmodul.

---

#### Kapittel 5.1: Diskrimineringsvernet — lovvalget ldl. vs. aml. kap. 13
- **id:** `org3620-bi-5-1` · **number:** 5.1 · **estimatedMinutes:** 45 · **prerequisites:** `org3620-bi-0-3`
- **Kapitteltype:** metode (lovvalgsmodul)
- **description:** Det avgjørende første grepet i enhver diskrimineringssak: hvilken lov gjelder? Kartet over hvilke diskrimineringsgrunnlag som hører til ldl. og hvilke som hører til aml. kap. 13 — og hvorfor feil lovvalg svekker hele drøftingen.
- **Eksamensbelegg:** V2024 (kjønn), H2025 (kjønn/graviditet), Lillevik (religion) — alle i ldl.-sfæren; aml. kap. 13 for alder/fagforening/deltid. Analysen §5: feil lovvalg er den klassiske trekkfeilen. Prioritetsklasse: **perfekt**.
- **Regelkontrakt (lovvalgs-tabellen — grunnlag → lov):**
  - **ldl. (2017 nr. 51):** kjønn, graviditet, permisjon ved fødsel/adopsjon, omsorgsoppgaver, etnisitet, religion, livssyn, funksjonsnedsettelse, seksuell orientering, kjønnsidentitet/-uttrykk, (og alder i enkelte sammenhenger — *verifiser overlappet*).
  - **aml. kap. 13:** vern mot diskriminering pga. **politisk syn, medlemskap i arbeidstakerorganisasjon (fagforening), alder**, og **deltids-/midlertidig ansettelse** (samt tilknytning til innleie). *(verifiser eksakt oppregning i aml. kap. 13 og grensesnittet mot ldl.)*
  - **Felles struktur:** forbud → unntak (saklig/nødvendig/forholdsmessig) → delt bevisbyrde. Men **hjemmelen bestemmer** hvilke §§, unntaksregler og håndhevingsorgan (Diskrimineringsnemnda for ldl.) som gjelder.
- **Typetilfeller:** 2 `example`-blokker: (a) «kvinner er mindre risikovillige» → ldl. (kjønn), ikke aml. kap. 13 — vist konsekvens for §§ og bevisbyrde; (b) en aldersgrense / forskjellsbehandling pga. fagforeningsmedlemskap → aml. kap. 13.
- **Metodepoenger:** Velg lov FØRST — grunnlaget avgjør. Feil lov svekker hele drøftingen uansett subsumsjonskvalitet. Merk håndhevingsorgan (Diskrimineringsnemnda for ldl.).
- **Typiske feil:** Bruke aml. kap. 13 på kjønn/graviditet/religion; bruke ldl. på alder/fagforening/deltid; ikke identifisere lovvalget som eget tvistepunkt.
- **Kvote:** quiz 18 · flashcards 18

---

#### Kapittel 5.2: Likestillings- og diskrimineringsloven — §§ 6, 9, 11, 37
- **id:** `org3620-bi-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** `org3620-bi-5-1`
- **Kapitteltype:** regel
- **description:** Kjernereglene i ldl.: forbudet mot direkte og indirekte diskriminering (§ 6), unntaket for lovlig forskjellsbehandling (§ 9 — saklig/nødvendig/forholdsmessig), adgangen til positiv særbehandling (§ 11) og den delte bevisbyrden (§ 37).
- **Eksamensbelegg:** V2024 spm. 1 (kjønnsdiskriminering ved innstilling; «foretrekker menn»; positiv særbehandling § 11; delt bevisbyrde § 37), H2025 spm. 2 (kjønn/graviditet). Prioritetsklasse: **perfekt**. Positiv særbehandling og delt bevisbyrde er de tilbakevendende delspørsmålene.
- **Regelkontrakt (gjeldende rett — ldl. 2017 nr. 51):** **§ 6** forbud mot direkte og indirekte diskriminering på grunnlag av bl.a. kjønn, graviditet, permisjon, etnisitet, religion, livssyn, funksjonsnedsettelse mv. **§ 9** **lovlig forskjellsbehandling** — tre **kumulative** vilkår: **saklig formål**, **nødvendig**, og **forholdsmessig** (ikke uforholdsmessig inngripende). **§ 11** **positiv særbehandling** — tillatt hvis egnet til å fremme likestilling, står i rimelig forhold til formålet, og opphører når formålet er nådd; **kan ikke** brukes til å foretrekke et kjønn utover den snevre adgangen (moderat kvotering). **§ 37 delt bevisbyrde** — foreligger det omstendigheter som gir «grunn til å tro» at diskriminering har skjedd, må den ansvarlige **sannsynliggjøre** at det ikke har skjedd. **«Endret lov»-boks:** diskriminering lå tidligere i aml. kap. 13 (for disse grunnlagene) — bruk ldl. *(verifiser §§ 6/9/11/37 og positiv særbehandlings rekkevidde.)*
- **Typetilfeller:** Minipraktikum: en leder vil «foretrekke menn» ved innstilling og påberoper positiv særbehandling (§ 11-grensen + § 37); en tilsynelatende nøytral praksis som slår skjevt ut (indirekte diskriminering + § 9-unntak).
- **Metodepoenger:** § 9 har tre **kumulative** vilkår — drøft hvert for seg. § 11 positiv særbehandling er snever, ikke fri preferanse. Delt bevisbyrde (§ 37) snur vurderingen når det er «grunn til å tro».
- **Typiske feil:** Behandle § 9 som ett samlet vilkår; strekke positiv særbehandling § 11 for langt; glemme delt bevisbyrde; bruke aml. kap. 13.
- **Kvote:** quiz 20 · flashcards 24

---

#### Kapittel 5.3: Graviditet og foreldrepermisjon — dobbelt vern (ldl. § 10 + aml. § 15-9)
- **id:** `org3620-bi-5-3` · **number:** 5.3 · **estimatedMinutes:** 45 · **prerequisites:** `org3620-bi-5-2`
- **Kapitteltype:** regel
- **description:** Det særlig sterke vernet ved graviditet og foreldrepermisjon: det nær objektive diskrimineringsansvaret (ldl. § 10) kombinert med det særskilte oppsigelsesvernet i svangerskaps-/permisjonsperioden (aml. § 15-9), og delt bevisbyrde når en oppsigelse tidsmessig følger en permisjonssøknad.
- **Eksamensbelegg:** H2025 spm. 2–3 (graviditet; oppsigelse med «samarbeidsproblemer» som skjuler reell graviditetsårsak). Prioritetsklasse: **perfekt** (H2025-bærende). Kobler til oppsigelse/saklighet (kap. 6).
- **Regelkontrakt (gjeldende rett):** **ldl. § 10** — forskjellsbehandling pga. **graviditet, fødsel, amming** og **permisjon forbeholdt mor/far** er som hovedregel **ulovlig** (nær objektivt ansvar — lite rom for unntak). **aml. § 15-9** — **særskilt oppsigelsesvern**: oppsigelse i svangerskap/foreldrepermisjon anses å ha sin grunn i dette **med mindre** arbeidsgiver **sannsynliggjør** en annen, saklig grunn; vernet gir også rett til å stå i stilling mv. **Delt bevisbyrde** (ldl. § 37): når oppsigelse/forbigåelse tidsmessig følger graviditet/permisjonssøknad, må arbeidsgiver sannsynliggjøre at det ikke er årsaken. *(verifiser ldl. § 10 og aml. § 15-9 (1)/(2).)*
- **Typetilfeller:** Minipraktikum: en nyansatt som sier opp «pga. samarbeidsproblemer» kort tid etter at hun har meldt graviditet (§ 15-9 + § 10 + delt bevisbyrde); en gravid søker som forbigås til fordel for en mindre kvalifisert.
- **Metodepoenger:** Dobbelt vern — drøft både ldl. § 10 (diskriminering) og aml. § 15-9 (oppsigelsesvern). Den tidsmessige nærheten utløser delt bevisbyrde. Arbeidsgivers alternative grunn må **sannsynliggjøres**, ikke bare påstås.
- **Typiske feil:** Se bare oppsigelsesvernet eller bare diskrimineringen (glemme det doble vernet); glemme delt bevisbyrde; godta udokumentert «samarbeidsproblem»-begrunnelse.
- **Kvote:** quiz 16 · flashcards 18

---

#### Kapittel 5.4: Diskrimineringsvern i aml. kap. 13 — alder, politikk, fagforening, deltid
- **id:** `org3620-bi-5-4` · **number:** 5.4 · **estimatedMinutes:** 45 · **prerequisites:** `org3620-bi-5-1`
- **Kapitteltype:** regel
- **description:** Diskrimineringsvernet som IKKE ligger i ldl.: aml. kap. 13 for alder, politisk syn, fagforeningsmedlemskap og deltids-/midlertidig ansattes vern — med den samme forbud → unntak → bevisbyrde-strukturen, men i riktig lov.
- **Eksamensbelegg:** V2023 (fagforeningsgjengjeldelse — Ingrid utelates pga. innmelding), + aldersvern som mulig delspørsmål. Prioritetsklasse: **kunne**. Motsatsen til lovvalgsfella: bruke ldl. der aml. kap. 13 er riktig.
- **Regelkontrakt (gjeldende rett):** **aml. kap. 13** — forbud mot diskriminering pga. **politisk syn, medlemskap i arbeidstakerorganisasjon, alder**, samt vern for **deltidsansatte og midlertidig ansatte** mot dårligere behandling. Struktur: **forbud** → **unntak** (saklig formål, nødvendig og forholdsmessig — særlig utformet for alder) → **delt bevisbyrde**. **Fagforeningsvern:** forskjellsbehandling/gjengjeldelse pga. organisering er forbudt (også koblet til organisasjonsfrihet, kap. 7.2). *(verifiser paragrafene i aml. kap. 13, unntaksregelen for alder og bevisbyrderegelen.)*
- **Typetilfeller:** Minipraktikum: en ansatt utelates fra goder/oppdrag kort tid etter fagforeningsinnmelding (aml. kap. 13 + bevisbyrde); en øvre aldersgrense for en stilling (unntaksvurdering: saklig/nødvendig/forholdsmessig).
- **Metodepoenger:** Riktig lov: **aml. kap. 13**, ikke ldl., for disse grunnlagene. Samme metodiske struktur (forbud → unntak → bevisbyrde). Fagforeningsgjengjeldelse rammes selv om et annet påskudd oppgis.
- **Typiske feil:** Bruke ldl. på alder/fagforening/deltid; glemme unntaksvurderingen for alder; overse at et oppgitt påskudd kan skjule fagforeningsgjengjeldelse.
- **Kvote:** quiz 16 · flashcards 18

---

#### Kapittel 5.5: Typetilfelle — «uttalt kjønns-/religionspreferanse» og delt bevisbyrde
- **id:** `org3620-bi-5-5` · **number:** 5.5 · **estimatedMinutes:** 45 · **prerequisites:** `org3620-bi-5-2`, `org3620-bi-5-3`
- **Kapitteltype:** typetilfelle
- **description:** Diskriminerings-typetilfellet der en leder uttaler en preferanse eller stiller et forbudt krav (kjønn, religion, graviditet). Hvordan den uttalte preferansen utløser delt bevisbyrde, og hvordan man subsumerer et eventuelt unntak (§ 9) eller positiv særbehandling (§ 11).
- **Eksamensbelegg:** V2024 («foretrekker menn»), H2025 («kvinner er mindre risikovillige»), Lillevik (Hassan håndhilsing → religion, ldl. + EMK art. 9). Prioritetsklasse: **perfekt**. Den uttalte preferansen er en tilbakevendende faktum-mikrostruktur.
- **Regelkontrakt (tvistepunkt-kartet):** (1) **lovvalg** (ldl. for kjønn/religion; kap. 5.1); (2) er det lagt vekt på/uttalt et **forbudt grunnlag** (§ 6)? (3) utløser uttalelsen **«grunn til å tro»** → **delt bevisbyrde § 37**? (4) foreligger **lovlig forskjellsbehandling § 9** (tre vilkår) eller **positiv særbehandling § 11**? (5) ved religion: forholdet til **EMK art. 9** / saklig virksomhetsbehov; (6) rettsvirkning: oppreisning/erstatning, ev. ugyldig innstilling.
- **Typetilfeller:** Gjennomdrøftet variant (NYSKREVET — f.eks. en leder som ved en ansettelse uttaler at «vi trenger en mann i teamet» og forbigår en bedre kvalifisert kvinnelig søker). Full drøftelse med margkommentarer. Varianter: religiøst begrunnet krav (håndhilsing/plagg); graviditetsforbigåelse; alder (→ aml. kap. 13).
- **Metodepoenger:** Den uttalte preferansen er selve beviset som utløser delt bevisbyrde. Velg riktig lov. Subsumer § 9s tre vilkår / § 11 hvert for seg. Ved religion: vei virksomhetsbehov mot EMK art. 9.
- **Typiske feil:** Behandle uttalelsen som «uskyldig prat»; glemme delt bevisbyrde; feil lovvalg; strekke § 9/§ 11 for langt.
- **Kvote:** quiz 16 · flashcards 16

**Prøve-kvote Del 5:** 4 prøver (én ren lovvalgsprøve (grunnlag → ldl. eller aml. kap. 13); ett ldl.-praktikum (§ 6/§ 9/§ 11 + § 37 delt bevisbyrde); ett graviditets-/permisjonspraktikum (dobbelt vern § 10 + § 15-9); ett uttalt-preferanse-praktikum (kjønn/religion, EMK art. 9)).

---

### DEL 6 — Opphør: oppsigelse, avskjed og saksbehandling

> **Rettstilstand:** § 15-7 ble presisert (ordlyd, nye ledd) fra 1.1.2024 — se «Endret lov»-boks i
> kap. 6.1. I ORG 3620 testes oppsigelse som **saklighet/pro forma**, ikke hard nedbemanning
> (utvelgelseskrets/konsernplikt gis kort «bør kjenne til»-dekning i 6.1). Skillet **materielt vs.
> prosessuelt** er et navngitt sensorkrav (kap. 6.2).

---

#### Kapittel 6.1: Saklig oppsigelse — aml. § 15-7 (saklighet og pro forma)
- **id:** `org3620-bi-6-1` · **number:** 6.1 · **estimatedMinutes:** 60 · **prerequisites:** `org3620-bi-0-3`
- **Kapitteltype:** regel
- **description:** Saklighetsnormen i § 15-7: kravet om saklig grunn i virksomhetens eller arbeidstakers forhold, forholdsmessighetsvurderingen, og at en pro forma-/uriktig begrunnelse («budsjett» som skjuler konflikt) gjør oppsigelsen usaklig.
- **Eksamensbelegg:** H2025 spm. 3 (oppsigelse; «samarbeidsproblemer» vs. reell graviditetsårsak), Lillevik (Lars sies opp under «budsjett»-påskudd). Prioritetsklasse: **perfekt** (kjernenormen ved opphør). I ORG 3620 er tyngden på saklighet/pro forma, ikke utvelgelse.
- **Regelkontrakt (gjeldende rett):** **§ 15-7 (1)** — arbeidsforhold kan bare sies opp når det er **«saklig begrunnet i arbeidsgivers, virksomhetens eller arbeidstakers forhold»**. Saklighetsnormen: (a) **reelt og relevant grunnlag** (ikke vilkårlig/utenforliggende/pro forma); (b) **forholdsmessighet** mellom virksomhetens behov og arbeidstakerens ulempe. **Pro forma:** en oppgitt grunn som skjuler den reelle (f.eks. «budsjettkutt» som dekker en konflikt/gjengjeldelse) er **usaklig** — sensor krever at kandidaten ser bak den oppgitte grunnen. To spor: **virksomhetens forhold** (nedbemanning — kort «bør kjenne til»: reelt behov, annet passende arbeid, utvelgelse) og **arbeidstakers forhold** (mislighold/uegnethet, med advarsel/forholdsmessighet). **«Endret lov»-boks:** § 15-7 ble presisert 2024 (ordlyd + nye konsern-/outsourcing-ledd — *verifiser om disse er pensum i ORG 3620*). *(verifiser ordlyd § 15-7 (1)/(2).)*
- **Typetilfeller:** Minipraktikum: en oppsigelse begrunnet i «samarbeidsproblemer» som tidsmessig følger et varsel/en graviditet (saklighet + pro forma + kobling kap. 5.3/7.2); en oppsigelse begrunnet i «budsjett» der faktum viser en personkonflikt.
- **Metodepoenger:** Saklighetsnormen har to ledd: relevant grunnlag OG forholdsmessighet — drøft begge. Se bak den oppgitte grunnen (pro forma). Konklusjonen er ofte underordnet der faktum er tvilsomt — drøft begge utfall.
- **Typiske feil:** Nøye seg med å konstatere «saklig grunn» uten forholdsmessighet; godta en pro forma-/påskuddsbegrunnelse; blande virksomhetens og arbeidstakers forhold; overse koblingen til diskriminering/varsling.
- **Kvote:** quiz 20 · flashcards 22

---

#### Kapittel 6.2: Saksbehandling ved oppsigelse — §§ 15-1, 15-3, 15-4 (prosessuelt)
- **id:** `org3620-bi-6-2` · **number:** 6.2 · **estimatedMinutes:** 50 · **prerequisites:** `org3620-bi-6-1`
- **Kapitteltype:** regel
- **description:** Det prosessuelle sporet ved opphør: drøftingsmøte før beslutning (§ 15-1), oppsigelsesfrister (§ 15-3), formkrav til oppsigelsen (§ 15-4) og virkningen av formfeil — og hvorfor en saklig grunn ikke redder en formuriktig oppsigelse.
- **Eksamensbelegg:** Latent der opphør er tema (H2025, Lillevik). Analysen §4 pkt. 4: å skille prosessuelt fra materielt er et navngitt sensorkrav — «å behandle bare det ene er en halv besvarelse». Prioritetsklasse: **kunne**.
- **Regelkontrakt (gjeldende rett):** **§ 15-1** — plikt til **drøftingsmøte** med arbeidstaker (og tillitsvalgt) **før** beslutning om oppsigelse; **§ 15-3** — **oppsigelsesfrister** (utgangspunkt 1 måned, lengre ved ansiennitet/alder); **§ 15-4** — **formkrav** (skriftlig, levert personlig/rekommandert, med opplysninger om frister og rettigheter, ev. utvelgelse ved nedbemanning). **Virkning av formfeil:** oppsigelse som ikke oppfyller § 15-4 kan kjennes **ugyldig** (jf. § 15-5), og fristene for søksmål påvirkes. **Materielt vs. prosessuelt:** saklig grunn (§ 15-7) og korrekt saksbehandling (§§ 15-1/15-4) er **selvstendige** krav — begge må være oppfylt. *(verifiser fristene i § 15-3 og formvirkningene § 15-4/§ 15-5.)*
- **Typetilfeller:** Minipraktikum: en oppsigelse uten forutgående drøftingsmøte (§ 15-1 brudd); en muntlig eller mangelfullt utformet oppsigelse (§ 15-4 formfeil → ugyldighet).
- **Metodepoenger:** Behandle det prosessuelle som eget tvistepunkt ved siden av det materielle. Drøftingsmøte er en gyldighetsnær plikt. Formfeil kan felle en ellers saklig oppsigelse.
- **Typiske feil:** Behandle bare saklighet (materielt) og glemme saksbehandling (prosessuelt); overse drøftingsmøtet; undervurdere formfeilens virkning.
- **Kvote:** quiz 16 · flashcards 18

---

#### Kapittel 6.3: Avskjed — aml. § 15-14
- **id:** `org3620-bi-6-3` · **number:** 6.3 · **estimatedMinutes:** 50 · **prerequisites:** `org3620-bi-6-1`
- **Kapitteltype:** regel
- **description:** Avskjedens strenge vilkår (§ 15-14): «grovt pliktbrudd eller vesentlig mislighold», tilknytningen til arbeidet ved forhold utenfor tjenesten, forholdsmessigheten, og forholdet til (subsidiær) oppsigelse hvis avskjed ikke holder.
- **Eksamensbelegg:** Aktuelt der grovt mislighold er tema (Lillevik-typede konflikter). Prioritetsklasse: **kunne**. Feller: forhold utenfor tjenesten → ikke automatisk avskjed; subsidiær oppsigelse.
- **Regelkontrakt (gjeldende rett):** **§ 15-14** — arbeidsgiver kan **avskjedige** (umiddelbar fratreden, uten oppsigelsestid) ved **«grovt pliktbrudd eller annet vesentlig mislighold»** av arbeidsavtalen. Vurderingsmomenter: forholdets **grovhet**, **tilknytning til arbeidet** (forhold **utenfor** tjenesten gir ikke automatisk avskjed — krever tillitsbrudd relevant for stillingen), **forholdsmessighet**. **Subsidiært:** er avskjed uberettiget, vurder om vilkårene for **oppsigelse** (§ 15-7) likevel er oppfylt. Saksbehandling: drøftingsmøte § 15-1, formkrav § 15-4 (jf. § 15-14). *(verifiser ordlyd og saksbehandlingshenvisning i § 15-14.)*
- **Typetilfeller:** Minipraktikum: grovt tillitsbrudd i tjenesten (avskjed berettiget); et forhold utenfor jobb med uklar tilknytning til stillingen (§ 15-14 tilknytning + subsidiær § 15-7).
- **Metodepoenger:** Avskjed krever kvalifisert grovhet + tilknytning til arbeidet. Forhold utenfor tjenesten gir ikke automatisk avskjed. Drøft **subsidiært** oppsigelse hvis avskjed faller. Saksbehandling må med.
- **Typiske feil:** Behandle ethvert mislighold som avskjedsgrunn; glemme tilknytningskravet ved forhold utenfor tjenesten; hoppe over subsidiær oppsigelse; overse saksbehandling.
- **Kvote:** quiz 16 · flashcards 18

---

#### Kapittel 6.4: Typetilfelle — «pro forma-oppsigelsen» (materielt + prosessuelt)
- **id:** `org3620-bi-6-4` · **number:** 6.4 · **estimatedMinutes:** 45 · **prerequisites:** `org3620-bi-6-1`, `org3620-bi-6-2`
- **Kapitteltype:** typetilfelle
- **description:** Opphørs-typetilfellet der en oppgitt grunn skjuler den reelle, ofte i et rotete personalkonflikt-faktum. Hvordan man avdekker pro forma-begrunnelsen (materielt) og samtidig prøver saksbehandlingen (prosessuelt), med koblinger til diskriminering og varsling.
- **Eksamensbelegg:** Lillevik (Lars «budsjett»-påskudd; usaklig/pro forma), H2025 spm. 3 («samarbeidsproblemer» skjuler graviditet). Prioritetsklasse: **perfekt**. Aktiverer skillet materielt/prosessuelt + pro forma-radaren.
- **Regelkontrakt (tvistepunkt-kartet):** (1) hva er den **oppgitte** grunnen, og hva viser faktum om den **reelle** (pro forma-test, § 15-7)? (2) er saklighetsnormens to ledd oppfylt (grunnlag + forholdsmessighet)? (3) er **saksbehandlingen** fulgt (drøftingsmøte § 15-1, form § 15-4)? (4) skjuler grunnen et **forbudt hensyn** (diskriminering kap. 5 / gjengjeldelse kap. 7.2)? (5) rettsvirkning: ugyldighet + erstatning (§ 15-12).
- **Typetilfeller:** Gjennomdrøftet variant (NYSKREVET — f.eks. en ansatt sies opp med henvisning til «omorganisering», mens faktum viser at oppsigelsen kom rett etter at vedkommende klaget på ledelsen; drøftingsmøte ble ikke holdt). Full drøftelse med margkommentarer. Varianter flytter det reelle motivet (varsling, graviditet, konflikt) og saksbehandlingsfeilen.
- **Metodepoenger:** Se bak den oppgitte grunnen (pro forma). Prøv både materielt (saklighet) og prosessuelt (saksbehandling). Koble til diskriminering/varsling der motivet peker dit.
- **Typiske feil:** Godta den oppgitte grunnen; drøfte bare materielt eller bare prosessuelt; overse et forbudt underliggende motiv.
- **Kvote:** quiz 14 · flashcards 14

**Prøve-kvote Del 6:** 4 prøver (ett saklighets-/pro forma-praktikum (§ 15-7, se bak grunnen); ett saksbehandlingspraktikum (§§ 15-1/15-3/15-4, formfeil → ugyldighet); ett avskjedspraktikum (§ 15-14 + subsidiær § 15-7); ett materielt-og-prosessuelt-kombinasjonspraktikum med skjult motiv).

---

### DEL 7 — Arbeidsforholdet underveis: arbeidstid, varsling, lønnstrekk, kontrolltiltak

---

#### Kapittel 7.1: Arbeidstid og overtid — aml. kapittel 10 (§ 10-6)
- **id:** `org3620-bi-7-1` · **number:** 7.1 · **estimatedMinutes:** 50 · **prerequisites:** `org3620-bi-0-2`
- **Kapitteltype:** regel
- **description:** Overtidens vilkår: «særlig og tidsavgrenset behov», grensene for overtid, det individuelle helsefritaket, overtidstillegget (minst 40 %) — og hvorfor et tillegg ikke gjør ulovlig overtid lovlig.
- **Eksamensbelegg:** V2023 (overtid/likebehandling for innleide, perifert). Score ~1/6. Prioritetsklasse: **kunne/kjenne**. Felle: 40 %-tillegg ≠ lovlig overtid.
- **Regelkontrakt (gjeldende rett):** **§ 10-6** — overtid krever **«særlig og tidsavgrenset behov»** (ikke fast/planlagt merbelastning); **grenser** for antall overtidstimer per uke/måned/år; **individuelt fritak** ved helsemessige eller vektige sosiale grunner; **overtidstillegg minst 40 %**. Ramme: **§ 10-1 flg.** alminnelig arbeidstid; forsvarlighet (kap. 7.4). **Sentralt:** vilkårene vurderes **uavhengig av kompensasjon** — tillegget gjør ikke ulovlig overtid lovlig. Innleide har krav på likebehandling også for overtid (§ 14-12 a, kap. 3.2). *(verifiser leddnumre for helsefritak og tillegg i § 10-6 og timegrensene.)*
- **Typetilfeller:** Minipraktikum: fast pålagt «overtid» hver uke i en travel periode (mangler «tidsavgrenset behov»); en ansatt med helseproblemer som pålegges overtid (individuelt fritak).
- **Metodepoenger:** Vurder vilkårene (særlig/tidsavgrenset behov) uavhengig av tillegget. Fritaket er en individuell rett. Innleide skal likebehandles på overtid.
- **Typiske feil:** Konkludere at overtid er lovlig fordi tillegg gis; overse fritaket; behandle fast merbelastning som «tidsavgrenset behov».
- **Kvote:** quiz 16 · flashcards 18

---

#### Kapittel 7.2: Varsling, gjengjeldelse og organisasjonsfrihet — aml. kap. 2 A
- **id:** `org3620-bi-7-2` · **number:** 7.2 · **estimatedMinutes:** 55 · **prerequisites:** `org3620-bi-0-2`
- **Kapitteltype:** regel
- **description:** Varslervernet: hva som er «kritikkverdige forhold», kravet til forsvarlig fremgangsmåte, forbudet mot gjengjeldelse og delt bevisbyrde ved gjengjeldelse — pluss det beslektede vernet for organisasjonsfrihet (fagforeningsgjengjeldelse, Grl. § 101 / EMK art. 11).
- **Eksamensbelegg:** Lillevik (Cecilie/anonyme varslere → undersøkelsesplikt + gjengjeldelse), V2023 (fagforeningsgjengjeldelse — Ingrid). Score ~2/6. Prioritetsklasse: **kunne**. Kobler til omplassering (gjengjeldelse via kap. 4.3) og oppsigelse (kap. 6.4).
- **Regelkontrakt (gjeldende rett):** **§ 2 A-1** rett til å varsle om **kritikkverdige forhold** (lovbrudd, fare for liv/helse, korrupsjon, uforsvarlig arbeidsmiljø mv. — ikke rent personlige forhold); **§ 2 A-2** krav om **forsvarlig fremgangsmåte** (intern varsling/til tilsyn er alltid forsvarlig; ekstern/offentlig varsling har tilleggsvilkår); arbeidsgivers **undersøkelses-/aktivitetsplikt** ved varsel (også anonyme); **§ 2 A-4** **forbud mot gjengjeldelse** (oppsigelse, omplassering, trakassering mv. som følge av varsling); **§ 2 A-5** oppreisning/erstatning; **delt bevisbyrde** ved gjengjeldelse. **Organisasjonsfrihet:** forskjellsbehandling/gjengjeldelse pga. fagforeningsmedlemskap er forbudt (aml. kap. 13, kap. 5.4; Grl. § 101 / EMK art. 11) — forhandlingsrett forutsetter organiserte parter, men kan aldri begrunne gjengjeldelse. *(verifiser paragrafnummereringen i kap. 2 A og bevisbyrderegelen.)*
- **Typetilfeller:** Minipraktikum: en ansatt omplasseres/mister goder kort tid etter et varsel (§ 2 A-4 gjengjeldelse + delt bevisbyrde); anonyme varslere om et kritikkverdig forhold (undersøkelsesplikt); en ansatt utelates etter fagforeningsinnmelding.
- **Metodepoenger:** Skill de tre trinnene: kritikkverdig forhold → forsvarlig fremgangsmåte → gjengjeldelse. Delt bevisbyrde ved gjengjeldelse. Organisering kan aldri begrunne ugunstig behandling.
- **Typiske feil:** Blande varselets berettigelse med gjengjeldelsesvurderingen; glemme delt bevisbyrde; se personkonflikter som «kritikkverdige forhold»; overse undersøkelsesplikten ved anonyme varsler.
- **Kvote:** quiz 18 · flashcards 20

---

#### Kapittel 7.3: Lønnstrekk og motregning — aml. § 14-15 (2)
- **id:** `org3620-bi-7-3` · **number:** 7.3 · **estimatedMinutes:** 40 · **prerequisites:** `org3620-bi-0-2`
- **Kapitteltype:** regel
- **description:** Forbudet mot trekk i lønn og de uttømmende unntakene: at trekk «etter avtale» krever en konkret, skriftlig forhåndsavtale om det bestemte trekket — en generell standardklausul er normalt ikke tilstrekkelig.
- **Eksamensbelegg:** V2025 spm. 2 (motregning/lønnstrekk for skadet hortensia; standardklausul utilstrekkelig). Score ~1/6. Prioritetsklasse: **kunne**. Den avgrensede «egen lille tvist»-typen.
- **Regelkontrakt (gjeldende rett):** **§ 14-15 (2)** — trekk i lønn og feriepenger er som **hovedregel forbudt**; unntakene er **uttømmende**: bl.a. lovhjemmel, tariff-/tjenestepensjon, erstatning for skade forvoldt **forsettlig eller ved grov uaktsomhet erkjent skriftlig eller fastslått ved dom**, og **trekk «på forhånd fastsatt ved skriftlig avtale»** (bokstav c). **Sentralt:** «etter avtale» krever en **konkret, skriftlig forhåndsavtale om det bestemte trekket** — en generell standardklausul i arbeidsavtalen om at «arbeidsgiver kan trekke for skade» er normalt **ikke** tilstrekkelig. *(verifiser leddstruktur og unntakskatalogen i § 14-15 (2).)*
- **Typetilfeller:** Minipraktikum: en arbeidsgiver trekker en ansatt i lønn for en skadet gjenstand under en generell standardklausul (utilstrekkelig hjemmel); et trekk basert på en konkret, skriftlig avtale inngått for det bestemte tilfellet (lovlig).
- **Metodepoenger:** Trekk er forbudt med mindre et **uttømmende** unntak treffer. «Etter avtale» krever konkret, skriftlig forhåndsavtale om det bestemte trekket — ikke en standardklausul.
- **Typiske feil:** Godta en generell standardklausul som hjemmel; overse at unntakene er uttømmende; blande skyldkravet (forsett/grov uaktsomhet) med det avtalte trekket.
- **Kvote:** quiz 14 · flashcards 14

---

#### Kapittel 7.4: HMS, personvern og kontrolltiltak — §§ 4-1, 9-1/9-2
- **id:** `org3620-bi-7-4` · **number:** 7.4 · **estimatedMinutes:** 45 · **prerequisites:** `org3620-bi-4-1`
- **Kapitteltype:** regel
- **description:** Kravet om fullt forsvarlig arbeidsmiljø (§ 4-1) og vilkårene for kontrolltiltak overfor ansatte (§§ 9-1/9-2): saklig grunn, ikke uforholdsmessig belastning, og drøftings-/informasjonsplikt — med grensesnittet mot personopplysningsvernet. Forebyggende dekning (ikke prøvd i arkivet, men pensum og dagsaktuelt).
- **Eksamensbelegg:** **Ikke prøvd i de 6 settene**, men pensum og fremhevet i analysens prognose (hjemmekontor, kontrolltiltak/personvern som sannsynlig nytt tema). Score 0/6. Prioritetsklasse: **kjenne** (kortere dekning; forebyggende).
- **Regelkontrakt (gjeldende rett):** **§ 4-1** krav om **fullt forsvarlig arbeidsmiljø** (fysisk og psykososialt). **§ 9-1** — **kontrolltiltak** overfor arbeidstaker er tillatt når det har **saklig grunn i virksomhetens forhold** og **ikke innebærer en uforholdsmessig belastning** for arbeidstakeren. **§ 9-2** — **drøftings-, informasjons- og evalueringsplikt** før kontrolltiltak iverksettes. **Grensesnitt personvern:** behandling av personopplysninger fra tiltaket må ha rettslig grunnlag (personopplysningsloven/GDPR — *nevnes som ramme, ikke egen regelkontrakt*). *(verifiser §§ 9-1/9-2 og forholdet til personvernregelverket.)*
- **Typetilfeller:** Minipraktikum: innføring av kameraovervåking/GPS/logging uten saklig grunn eller drøfting (§§ 9-1/9-2); et forholdsmessig kontrolltiltak med korrekt saksbehandling (lovlig).
- **Metodepoenger:** Kontrolltiltak krever **saklig grunn + forholdsmessighet + saksbehandling** (§§ 9-1/9-2). Forsvarlighetskravet (§ 4-1) er rammen. Personvern er en tilstøtende, men egen rettslig vurdering.
- **Typiske feil:** Behandle kontrolltiltak som fritt styringsvalg; hoppe over drøftings-/informasjonsplikten; glemme forholdsmessigheten; blande arbeidsrett og personvern uten å skille grunnlagene.
- **Kvote:** quiz 14 · flashcards 14

**Prøve-kvote Del 7:** 4 prøver (ett overtidspraktikum (§ 10-6, 40 %-fella, innleie-likebehandling); ett varslings-/gjengjeldelsespraktikum (kap. 2 A + delt bevisbyrde + organisasjonsfrihet); ett lønnstrekkspraktikum (§ 14-15 (2), standardklausul-fella); ett kontrolltiltaks-/HMS-praktikum (§§ 9-1/9-2 + § 4-1)).

---

### DEL 8 — Eksamenstrening: praktikum og issue-spotting

---

#### Kapittel 8.1: «Se tvistepunktene» — issue-spotting-drill
- **id:** `org3620-bi-8-1` · **number:** 8.1 · **estimatedMinutes:** 50 · **prerequisites:** `org3620-bi-0-2`
- **Kapitteltype:** drill (tvistepunkt-identifikasjon)
- **description:** Den ferdigheten som skiller mest i den åpne «drøft og ta stilling»-varianten: å lese et rotete personalkonflikt-faktum og systematisk trekke ut hvilke rettsspørsmål det reiser, i hvilken rekkefølge, og hva som er hoved- vs. subsidiære spørsmål — pluss disiplinen i å svare presist på gitte nummererte spørsmål.
- **Eksamensbelegg:** V2023 og Lillevik er de åpne variantene (kandidaten identifiserer selv alle tvistene; Lillevik har minst 5 parallelle spørsmål). De nummererte settene (V2024, H2024, V2025, H2025) trener den motsatte disiplinen. Begge trenes her. Prioritetsklasse: **perfekt** (A-skille i den åpne varianten).
- **Regelkontrakt (signalliste — faktumtrekk → tvistepunkt):** «ansatt på deltid uten drøfting» → § 14-1 b (kap. 2.2); «jobber reelt mer enn avtalt» → § 14-4 a (kap. 2.4); «vil ha den utlyste stillingen» → § 14-3 (kap. 2.3); «vikar/prøve for varig behov» / «4 år» → § 14-9 (kap. 3.1); «leier inn til fast behov» → § 14-12 (kap. 3.2); «omplasseres/flyttes» → grunnpreg/endringsoppsigelse (kap. 4.2); «åpen arbeidsavtale» → styringsrettens grense (kap. 4.1); «foretrekker menn / kvinner er …» → ldl. (kap. 5.2); «håndhilsing/religion» → ldl. + EMK art. 9 (kap. 5.5); «gravid + oppsigelse» → § 10 + § 15-9 (kap. 5.3); «budsjett/samarbeid skjuler motiv» → pro forma § 15-7 (kap. 6.4); «omplassert/oppsagt etter varsel/innmelding» → gjengjeldelse (kap. 7.2); «trekk i lønn» → § 14-15 (kap. 7.3); «endret ferie» → ferieloven § 6 (kap. 4.4).
- **Typetilfeller:** 2–3 `example`-blokker: (a) et åpent personalkonflikt-faktum (NYSKREVET) → vist systematisk spørsmålsidentifikasjon og prioritering; (b) et nummerert sett → vist hvordan man holder seg til spørsmålene og disponerer innenfor 10 sider; (c) et faktum med to skjulte delspørsmål (drøftingsplikt tross «ingen tillitsvalgte»; standardklausul-fella) → vist hvordan de avdekkes.
- **Metodepoenger:** Systematisk identifikasjon via signallista. Skill hoved- fra subsidiære spørsmål. Disponer innenfor sidegrensen. De skjulte delspørsmålene (drøftingsplikt, pro forma, lovvalg) er A/B-markørene.
- **Typiske feil:** Overse skjulte spørsmål i åpne case; behandle alle spørsmål likt uten prioritering; i nummererte sett: svare på noe annet enn det som spørres; sprenge sidegrensen.
- **Kvote:** quiz 14 · flashcards 12

---

#### Kapittel 8.2: Praktikum I — deltidstriade-praktikum (nummerert)
- **id:** `org3620-bi-8-2` · **number:** 8.2 · **estimatedMinutes:** 60 · **prerequisites:** `org3620-bi-8-1`
- **Kapitteltype:** praktikumstrening / modellbesvarelse
- **description:** Ett nummerert praktikum konsentrert om deltidstriaden (H2024-malen: flere av spørsmålene på deltid) med full A-besvarelse og kommentert C-besvarelse. Trener det signaturtemaet som bærer flest sett.
- **Eksamensbelegg:** H2024 (tre av fire spørsmål på deltid), V2024 spm. 3, V2025 spm. 1. Prioritetsklasse: **perfekt** (den mest sannsynlige eksamensformen for deltid).
- **Innhold:** (1) Komplett **nyskrevet** nummerert praktikum (fiktiv virksomhet, navngitte personer): spm. 1 nyansettelse på deltid (§ 14-1 b dokumentasjon/drøfting), spm. 2 fortrinnsrett til utvidet stilling (§ 14-3, kvalifisert + vesentlige ulemper), spm. 3 rett etter faktisk arbeidstid (§ 14-4 a, jevnlig merarbeid), med «alle spørsmål skal besvares»-instruks. (2) `collapsible` **A-besvarelse** — riktig regelvalg per spørsmål, vilkårsvis subsumsjon, materielt/prosessuelt skilt. (3) `collapsible` **kommentert C-besvarelse** — blander de tre reglene, samlet konklusjon, glemmer drøftingsplikten; margnotater om nøyaktig hva som mangler til A. (4) `tip` **Sensorblikket** — må/pluss/felle-momentliste + vekting.
- **Metodepoenger:** Hold de tre deltidsreglene atskilt. Riktig lovvalg per spørsmål. Vilkårsvis subsumsjon. Skjult delspørsmål: drøftingsplikt tross «ingen tillitsvalgte».
- **Typiske feil (vist i C-besvarelsen):** blande § 14-1 b/§ 14-3/§ 14-4 a; samlet konklusjon uten vilkår; glemt drøftings-/dokumentasjonsplikt.
- **Kvote:** quiz 12 · flashcards 10

---

#### Kapittel 8.3: Praktikum II — åpent issue-spotting-praktikum
- **id:** `org3620-bi-8-3` · **number:** 8.3 · **estimatedMinutes:** 60 · **prerequisites:** `org3620-bi-8-1`
- **Kapitteltype:** praktikumstrening / modellbesvarelse
- **description:** Ett åpent mandat-praktikum (V2023/Lillevik-malen): et rotete personalkonflikt-faktum uten nummererte spørsmål der kandidaten selv må spotte og disponere alle tvistene — med full A-besvarelse og kommentert C-besvarelse.
- **Eksamensbelegg:** V2023 Stonefjord og Lillevik (åpent mandat; Lillevik ≥5 parallelle tvister). Prioritetsklasse: **perfekt** (issue-spotting er halve karakteren i denne sjangeren).
- **Innhold:** (1) Komplett **nyskrevet** åpent praktikum: et sammenhengende personalkonflikt-forløp med minst 4–5 vevde tvister (f.eks. midlertidig/innleie for fast behov + religions-/kjønnsdiskriminering + omplassering forkledd som styringsrett + varsling/gjengjeldelse + pro forma-oppsigelse), avsluttet med «Drøft og ta stilling til de rettslige spørsmål saken reiser». (2) `collapsible` **A-besvarelse** — systematisk spørsmålsidentifikasjon (signallista), hvert tvistepunkt med riktig hjemmel og subsumsjon, prioritering. (3) `collapsible` **kommentert C-besvarelse** — overser tvistepunkter, feil lovvalg, skråsikre konklusjoner; margnotater. (4) `tip` **Sensorblikket** — hvilke tvister som MÅTTE spottes + vekting.
- **Metodepoenger:** Systematisk issue-spotting via signallista er A-grepet. Riktig lovvalg per tvist. Uidentifiserte tvister = tapte poeng. Disponer innenfor 10 sider.
- **Typiske feil (vist i C-besvarelsen):** oversett tvistepunkt; feil lovvalg (aml. kap. 13 for religion; blandet deltid); ingen prioritering; skråsikkerhet der faktum er tvilsomt.
- **Kvote:** quiz 12 · flashcards 10

---

#### Kapittel 8.4: Praktikum III — nummerert kombinasjonspraktikum
- **id:** `org3620-bi-8-4` · **number:** 8.4 · **estimatedMinutes:** 55 · **prerequisites:** `org3620-bi-8-1`
- **Kapitteltype:** praktikumstrening / modellbesvarelse
- **description:** Ett nummerert praktikum som kombinerer styringsrett/omplassering + diskriminering/graviditet + saklig oppsigelse (H2025-malen), med full A-besvarelse og kommentert C-besvarelse — den prognostiserte «minst tre bærende institutter»-formen.
- **Eksamensbelegg:** H2025 Nordtek (styringsrett + diskriminering/graviditet + saklig oppsigelse + midlertidig/innleie). Prioritetsklasse: **perfekt** (analysens prognose for neste sett).
- **Innhold:** (1) Komplett **nyskrevet** nummerert praktikum: spm. 1 omfordeling av oppgaver (styringsrett/grunnpreg, kap. 4); spm. 2 diskriminering (kjønn/graviditet, ldl. + § 15-9, delt bevisbyrde, kap. 5); spm. 3 saklig oppsigelse («samarbeidsproblemer» vs. reell årsak, § 15-7 + saksbehandling, kap. 6); spm. 4 midlertidig/innleie (§ 14-9/§ 14-12, kap. 3). (2) `collapsible` **A-besvarelse** — riktig hjemmel per spørsmål, materielt/prosessuelt skilt, det doble graviditetsvernet. (3) `collapsible` **kommentert C-besvarelse** — feil lovvalg (aml. kap. 13 for kjønn), blander styringsrett/endringsoppsigelse, glemmer saksbehandling; margnotater. (4) `tip` **Sensorblikket**.
- **Metodepoenger:** Riktig lovvalg per spørsmål (kap. 0.3). Grunnpreg-test, dobbelt graviditetsvern, pro forma-radar, materielt/prosessuelt. Disponer likt mellom spørsmålene.
- **Typiske feil (vist i C-besvarelsen):** feil diskriminerings-lovvalg; blande styringsrett/endringsoppsigelse; glemme saksbehandling; overse det doble graviditetsvernet.
- **Kvote:** quiz 12 · flashcards 10

---

#### Kapittel 8.5: Lovvalg- og fellesimulering + eksamensdisiplin
- **id:** `org3620-bi-8-5` · **number:** 8.5 · **estimatedMinutes:** 55 · **prerequisites:** `org3620-bi-8-2`, `org3620-bi-8-3`, `org3620-bi-8-4`
- **Kapitteltype:** simuleringstrening
- **description:** Sluttdrillen: en samlet lovvalgs- og fellesimulering (de tre lovvalgsaksene + fellekatalogen fra empirien) og en tidsstyrt eksamensgjennomkjøring innenfor 10-siders-grensen, som knytter sammen praktikumene 8.2–8.4.
- **Eksamensbelegg:** Hele empirien 2023–2025. De faste fellene (feil deltidsregel, feil diskriminerings-lovvalg, utdatert midlertidig-/innleieregel, standardklausul-lønnstrekk, «ingen tillitsvalgte», pro forma) samles til drill. Prioritetsklasse: **perfekt** (simulering/disiplin) / **kunne** (fellekatalog).
- **Innhold:** (1) **Lovvalgs-simulering** — en serie korte faktumtrekk der studenten på tid velger riktig hjemmel (deltidstriaden; ldl. vs. aml. kap. 13; styringsrett vs. § 15-7) med begrunnelse. (2) **Fellekatalog-drill** — samtlige hjemmelsfeller fra empirien i «felle → korreksjon»-format. (3) `tip` **Eksamensdisiplin** — en tidsplan for skoleeksamen innenfor 10 sider (les → issue-spotting/tvistepunkt-analyse → disponer → skriv, med sidevakter per spørsmål), koblet til praktikumene 8.2–8.4. Vis både nummerert-sjanger og åpen-sjanger-disponering.
- **Metodepoenger:** Riktig lovvalg er inngangsbilletten — dril det til automatikk. Sidedisiplin er en selvstendig karakterfaktor. Kjenn igjen de plantede fellene.
- **Typiske feil:** Feste seg ved feil hjemmel; kopiere en plantet utdatert regel; sprenge sidegrensen; ikke disponere før man skriver.
- **Kvote:** quiz 14 · flashcards 12

**Prøve-kvote Del 8:** 4 prøver (ett fullt deltidstriade-praktikum (nummerert, må/pluss/felle-fasit); ett åpent issue-spotting-praktikum (rotete personalkonflikt); ett kombinasjonspraktikum (styringsrett + diskriminering + oppsigelse); én lovvalgs- og fellesimulering med tidsstyring).

---

## 5. Kvotesammendrag (AUTORITATIV — fasit for alle senere faser)

| Del | Kap. | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 — Eksamenskart og praktikumshåndverk | 4 | 58 | 48 | 4 |
| 1 — Ansettelse | 4 | 60 | 64 | 4 |
| 2 — Deltidstriaden | 6 | 106 | 112 | 4 |
| 3 — Midlertidig og innleie | 3 | 52 | 56 | 4 |
| 4 — Styringsrett og omplassering | 4 | 66 | 70 | 4 |
| 5 — Diskriminering (lovvalget) | 5 | 86 | 94 | 4 |
| 6 — Opphør | 4 | 66 | 72 | 4 |
| 7 — Underveis (arbeidstid/varsling/lønnstrekk/kontroll) | 4 | 62 | 66 | 4 |
| 8 — Eksamenstrening | 5 | 64 | 54 | 4 |
| **Sum** | **39** | **620** | **636** | **36** |

**Summeringskontroll:**
- Quiz: 58 + 60 + 106 + 52 + 66 + 86 + 66 + 62 + 64 = **620** (≥500 ✓)
- Flashcards: 48 + 64 + 112 + 56 + 70 + 94 + 72 + 66 + 54 = **636** (sikt 550–650 ✓)
- Prøver: 4 per del × 9 deler = **36** (≥4 per del ✓)
- Kapitler: 4 + 4 + 6 + 3 + 4 + 5 + 4 + 4 + 5 = **39** (25–40 ✓)
- Praktikum med modellbesvarelser: kap. 8.2 (deltidstriade), 8.3 (åpent issue-spotting), 8.4 (kombinasjon) = **≥3 ✓**, inkl. ett deltidstriade-praktikum (8.2) og ett åpent issue-spotting-praktikum (8.3) ✓

**Flashcard-tetthet:** 636/39 ≈ 16,3 per kapittel — godt over 500-gulvet fordi arbeids- og personaljus er
paragraf- og vilkårsrikt (hvert institutt har kumulative vilkårslister, tre selvstendige deltidsregler, og et
gjennomgående lovvalgs-apparat), jf. audit-lærdommen om at begrepsrike drøftingsfag skal ligge høyt.
Flashcards konsentreres om **paragraf↔vilkår**-koblinger (deltidstriadens tre regler + vilkår; § 14-9-
grunnlagene + treårsregel; § 14-3s to vilkår; ldl. § 9s tre vilkår + § 37; styringsrettens fire skranker;
§ 15-7s to ledd; § 15-14-vilkårene) og **arbeidsrettsbegreper** (grunnpreg, styringsrett, endringsoppsigelse,
delt bevisbyrde, positiv særbehandling, heltidsnorm, faktisk arbeidstid, fortrinnsrett, pro forma,
materielt/prosessuelt, Tvisteløsningsnemnda). Quiz siktet høyt (620) fordi lovvalgs- og fellekatalog-drill
(«hvilken hjemmel?») egner seg særlig godt som quiz i dette faget.

---

## 6. Seksjonstitler (sectionNames)

Del-nummer → beskrivende tittel (blir `sectionNames` i `TextbookCourse`; vises som «Kapittel N: <tittel>» på
bokforsiden — obligatorisk):

| Del | sectionName |
|---|---|
| 0 | Eksamenskart og praktikumshåndverk |
| 1 | Ansettelse: arbeidsavtale, tilknytning og prøvetid |
| 2 | Deltidsansattes rettigheter — deltidstriaden |
| 3 | Midlertidig ansettelse og innleie |
| 4 | Styringsrett, omplassering og endringsoppsigelse |
| 5 | Diskriminering og likebehandling — lovvalget |
| 6 | Opphør: oppsigelse, avskjed og saksbehandling |
| 7 | Arbeidsforholdet underveis: arbeidstid, varsling, lønnstrekk, kontrolltiltak |
| 8 | Eksamenstrening: praktikum og issue-spotting |

---

## 7. Praktikumstrening — samlekrav

- **Tre komplette praktikum** (kap. 8.2–8.4), hver med: nyskrevet HR-faktum; `collapsible` A-besvarelse;
  `collapsible` kommentert C-besvarelse med margnotater; `tip` Sensorblikket med må/pluss/felle-vekting.
  - **8.2 er deltidstriade-praktikumet** (nummerert; § 14-1 b + § 14-3 + § 14-4 a; H2024-malen).
  - **8.3 er det åpne issue-spotting-praktikumet** (rotete personalkonflikt, ≥4–5 vevde tvister; V2023/Lillevik-malen).
  - **8.4 er kombinasjonspraktikumet** (styringsrett + diskriminering/graviditet + oppsigelse; H2025-malen).
- **Ett issue-spotting-drillkapittel** (8.1) og **ett simulerings-/lovvalgskapittel** (8.5) — begge sjangre
  (nummerert subsumsjon + åpent mandat) trenes eksplisitt, jf. analysens to-sjanger-krav.
- **Typetillfellekapitler** i de materielle delene (1.4, 2.5, 2.6, 3.3, 4.3, 5.5, 6.4) har hver en
  gjennomdrøftet `example`-variant + øvelsesvarianter som flytter tvilen mellom vilkårene/reglene.
- Kombinasjonene speiler de reelle mønstrene (deltidstriade; åpent personalkonflikt-mandat; styringsrett +
  diskriminering + oppsigelse) — men ALLE faktum, parter, virksomheter, bransjer, stillingsprosenter og
  hendelser er nye. Unngå ordrett gjenbruk av mal-innrammingene i dette skjelettet (møbelverksted/hotell/
  transport/teknologibedrift).
- Hvert praktikum baker inn 2–3 navngitte **skjulte delspørsmål** (drøftingsplikt tross «ingen tillitsvalgte»;
  standardklausul-lønnstrekk; det doble graviditetsvernet; pro forma bak «budsjett») og minst to
  **hjemmelsfeller** fra empirien (blandet deltidsregel; aml. kap. 13 for kjønn/religion; opphevet § 14-9 (2) f /
  «4-års»-myten; «åpen avtale» gir fri omplassering).
- **36 prøver** fordelt 4 per del, alle i minipraktikum-/lovvalgsdrill-format med fasit strukturert
  «må-punkter / pluss-punkter / feller».

---

## 8. Avvik fra DNA-jus (dokumentert)

DNA-jus er skrevet med JUS1111s/UiOs rene praktikum-eksamen som forbilde. ORG 3620 avviker på seks punkter,
alle empirisk begrunnet i EKSAMENSANALYSEn:

1. **Deltidstriaden får en egen, uforholdsmessig stor del (6 kapitler), ikke jevnfordeling.** DNA-en
   dimensjonerer materielle deler etter rettsområde-frekvens; her er tyngdepunktet så markant (deltid ~3/6,
   H2024 tre av fire spørsmål) at hver av de tre reglene får eget regelkapittel + et skille-kart + to
   typetilfeller. *Begrunnelse:* analysens §7 nivå 1 pkt. 1 og §5 (å blande de tre reglene er fagets
   hyppigste feil — skillet krever egen struktur).
2. **To metodemoduler i Del 0** (0.3 «lovvalget som metode», 0.4 «lederen som husker kurset feil / utdatert-
   regel-fella») i tillegg til eksamenskart og praktikumshåndverk. *Begrunnelse:* analysens §4 pkt. 2 (feil
   lovvalg er det tydeligste A/C-skillet) og §3.3/§5 (sjangerfiguren og utdaterte regler er de gjennomgående
   fellene) — de er metode, ikke ett regelsett, og trenes før de anvendes.
3. **Ingen flervalgsdrill og ingen domskanon-tung struktur** (motsatt søster-BI-emnet JUR 3420 og motsatt
   UiO-jusen). *Begrunnelse:* ORG 3620 er ren praktikum uten flervalg (analysens §3.4), og faget er lov-/
   subsumsjonsdrevet — kun **Nøkk** og **Kårstø** brukes som verifiserte domsankere; ingen andre dommer/
   nemndsavgjørelser oppfinnes (§0/§6 i analysen).
4. **Begge eksamenssjangre trenes eksplisitt** — nummererte delspørsmål (ren subsumsjon) OG åpent mandat
   (issue-spotting) — med egne praktikum for hver (8.2/8.4 nummerert, 8.3 åpent) og et eget issue-spotting-
   drillkapittel (8.1). *Begrunnelse:* analysens §1/§3.1–3.2 (fire sett nummererte, to sett åpne — begge må
   beherskes).
5. **«Endret lov 2023–24»-bokser som fast blokktype** i rettstilstandssensitive kapitler (2.2, 3.1, 3.2, 5.1/5.2,
   6.1). *Begrunnelse:* analysens rettstilstandsflagg (§0) — de mest testede reglene er ferske (2022–2023), og
   eldre besvarelser bruker foreldede hjemler (speiler JUS5511s «Endret lov 2024»-grep).
6. **HR-/ledervinkling gjennomgående** (faget er *personaljus* for økonomistudenter): eksempler tar lederens/
   HRs perspektiv og bruker sjangerfiguren «lederen som husker kurset feil». *Begrunnelse:* analysens §1
   («arbeids- OG personaljus», HR-praktisk faktum) og §7 anbefalte bok-arketype.

Ingen andre avvik: kapittel-DNA (regelkapittel/typetilfellekapittel/praktikum-modell), blokktyper,
«Eksamensvinkel»/«Typiske feil»/«Paragrafregister» og kvotekravene følger DNA-jus. Merk: det **harde
nedbemannings-stillingsvernet** (utvelgelseskrets/konsernplikt) som fyller UiO-bøkenes opphørsdel er her
bevisst nedtonet til «bør kjenne til» (kap. 6.1), fordi ORG 3620 tester oppsigelse som saklighet/pro forma.

---

## 9. Rettstilstands-sjekk (WebFetch bevisst IKKE utført i denne fasen)

Per oppdrag er det **ikke gjort Lovdata-oppslag** i dette skjelettet — alt bygger på EKSAMENSANALYSEns
rettstilstandsflagg (§0/§6), som igjen bygger på kjente 2022–2024-endringer i aml. Alle rettstilstands-
sensitive punkter er merket **🔶** og usikre ledd-/bokstavstrukturer *(verifiser)*. En **obligatorisk
Lovdata-verifikatør i fase 6** slår opp ALT mot **gjeldende aml. (2024-versjon)** og ldl. før trykk.

**Bygget på (2024-versjonen, må verifiseres):**
- **aml. § 14-1 b** heltidsnorm (NY 1.1.2023) + § 14-1 a drøftingsplikt.
- **aml. § 14-3** fortrinnsrett deltid; **§ 14-4 a** rett til faktisk arbeidstid (12-mnd/jevnlig; Tvisteløsningsnemnda).
- **aml. § 14-9** — fast hovedregel; **bokstav f opphevet 1.7.2022**; **treårsregel § 14-9 (7)**; § 14-11 rettsvirkning.
- **aml. § 14-12 / § 14-12 a** — innleie innstrammet 1.4.2023; likebehandling; forskriftsforbud (bygg, Oslo).
- **aml. § 15-7** — saklig oppsigelse (presisert 2024); **§§ 15-1/15-3/15-4** saksbehandling/form; **§ 15-14** avskjed; **§ 15-9** graviditetsvern.
- **aml. § 14-15 (2)** lønnstrekk; **kap. 10 (§ 10-6)** overtid; **kap. 2 A** varsling; **§§ 9-1/9-2** kontrolltiltak; **§ 4-1** forsvarlig arbeidsmiljø; **§ 1-8** arbeidstakerbegrep.
- **ldl. (2017 nr. 51)** §§ 6/9/10/11/37 — diskriminering (IKKE aml. kap. 13 for kjønn/graviditet/religion); **aml. kap. 13** for alder/politikk/fagforening/deltid.
- **ferieloven § 6** ferieendring; **Grl. § 101 / EMK art. 9 og 11** organisasjons-/religionsfrihet.

**Verifiser i fase 6 (grep `-i verifiser`, ikke bare `(verifiser)`):** eksakt ordlyd og leddstruktur i
§ 14-1 a/b, § 14-3, § 14-4 a, § 14-9 (2)/(7), § 14-11, § 14-12/§ 14-12 a, § 15-7 (1)/(2) (+ om konsern-/
outsourcing-ledd er pensum), § 15-3-fristene, § 15-4/§ 15-5-formvirkninger, § 15-9, § 15-14, § 14-15 (2)-
unntakskatalogen, § 10-6-leddnumre (helsefritak/40 %), kap. 2 A-nummerering, §§ 9-1/9-2, § 1-8; ldl.
§§ 6/9/10/11/37 (oppregning, § 9s tre vilkår, § 11 rekkevidde, § 37 delt bevisbyrde); aml. kap. 13-
oppregningen; ferieloven § 6. **Domsankere:** kun **Nøkk (Rt. 2000 s. 1602)** og **Kårstø (Rt. 2001 s. 418)** —
begge verifiseres for riktig Rt.-nummer; **stikkprøv også UMARKEDE paragrafreferanser** (jf. JUS1111-lærdommen).
**Ikke oppfinn andre dommer/nemndsavgjørelser.**

**Sensorveiledningsforbehold:** Arkivet mangler sensorveiledninger — §4 (sensorkrav) og §5 (typiske feil) i
EKSAMENSANALYSEn er UTLEDET. Kapitlenes «Eksamensvinkel»/«Typiske feil»-blokker skal krysses mot faglærers
veiledning (om den skaffes) før de brukes som fasit.

---

## 10. Studieguide-disposisjon

Studieguiden bygges som ett sammenhengende dokument med disse seksjonene:

1. **Slik består du ORG 3620 (og løfter til A)** — eksamensformen (individuell skoleeksamen, 100 %, A–F, maks
   10 sider, Lovdata Pro + lovsamling åpen), de to sjangrene (nummerert + åpent mandat), og prioriteringskartet
   (frekvenstabellen fra kap. 0.1). Eksplisitt C→A-liste: riktig hjemmelvalg + subsumsjonsdybde + skille
   materielt/prosessuelt + issue-spotting.
2. **Praktikumsmetoden på én side** — tvistepunkt-analyse, spørsmål → hjemmel → vilkår → subsumsjon →
   konklusjon, hvert kumulative vilkår for seg, materielt vs. prosessuelt, subsidiær drøftelse, disponer
   innenfor 10 sider; metodefeilene som negativ sjekkliste.
3. **Lovvalget på én side** — de tre aksene (deltidstriaden § 14-1 b/§ 14-3/§ 14-4 a; ldl. vs. aml. kap. 13;
   styringsrett vs. § 15-7) med faktumtrekk → riktig hjemmel.
4. **Deltidstriaden på én side** — skille-tabellen (hvilket faktumtrekk → hvilken regel) + vilkårsstiger for
   hver av de tre reglene.
5. **Rettsområdesammendrag** (ansettelse · deltid · midlertidig/innleie · styringsrett · diskriminering ·
   opphør · underveis) — hver med vilkårsstiger i punktform, tvistepunkt-kart per typetilfelle og paragraf-
   register. Alle bestemmelser merket «gjeldende rett 2024».
6. **«Endret lov 2023–24»-oversikten** — samlet tabell over 2022–2024-endringene (§ 14-1 b heltidsnorm 2023,
   § 14-9 (2) f opphevet 2022 + treårsregel, § 14-12 innstramming 2023, § 15-7 2024, ldl. for kjønn/religion) —
   til å unngå å kopiere foreldet doktrine fra eldre besvarelser.
7. **Fellekatalogen** — samtlige hjemmelsfeller fra empirien i tabellform (felle → korreksjon), til drilling
   siste uke.
8. **Skjult delspørsmål-radaren** — signalliste: faktumtrekk → delspørsmålet det varsler (fra kap. 8.1).
9. **Leseplaner** — 14-dagers og 4-ukers plan mot eksamen med kapittelrekkefølge, prøvetidspunkter og
   simuleringsdag (kap. 8.5 på nest siste dag).
10. **Siste-døgnet-arket** — én side: vilkårslistene for «må beherskes perfekt»-punktene (deltidstriadens tre
    regler; § 14-9-grunnlagene + treårsregel; styringsrettens fire skranker + grunnpreg; ldl. § 9s tre vilkår +
    § 37; § 15-7s to ledd + pro forma; det doble graviditetsvernet).

---

## 11. Byggerekkefølge og verifikasjon

### Byggerekkefølge for Opus

1. **Metadata først**: `TextbookCourse`-oppføring for `org3620-bi` (mønster: `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`) med alle 39 kapitler (id/number/title/description/
   estimatedMinutes/topics/competenceGoals/prerequisites fra dette skjelettet) og `sectionNames` (§6).
   `level: 'Høyskole'`.
2. **Del 0** (kap. 0.1–0.4) — metodespråket («må/pluss/felle», tvistepunkt-analyse, lovvalgs-radaren,
   utdatert-regel-radaren, «Endret lov 2023–24»-boksmalen) etableres her og gjenbrukes ordrett senere.
3. **Del 1 → … → Del 7** — regelkapitler før typetilfellekapitler innen hver del; følg prerequisites-kjeden
   (2.1 kart før 2.2–2.4 regler før 2.5/2.6 typetilfeller; 3.1/3.2 før 3.3; 4.1 før 4.2 før 4.3; 5.1 lovvalg
   før 5.2 før 5.5; 6.1 før 6.2/6.4). **Del 2 (6 kap.) bygges av én agent** som får HELE delens kontrakter
   (deltidstriaden må være konsistent — de tre reglene skal aldri gli over i hverandre).
4. **Del 8** (kap. 8.1–8.5) — issue-spotting-drill først, deretter de tre praktikumene, så simulering; bygges
   av én agent som leser HELE skjelettet.
5. **Batching (fase 4):** én agent per hel del; gi agenten HELE delens kontrakter. Del 2 flagges for
   konsistenssjekk i fase 6 (deltidstriaden).
6. **Narrativ-versjoner** (`<id>-narrativ.json` per kapittel) og quiz/flashcards per kvotene — quiz skrives
   samtidig med hvert kapittel, ikke som etterarbeid. **Kvotene i §5 er fasit.**
7. **Prøvene** (4 per del) etter at delens kapitler er ferdige.
8. **Studieguiden** til slutt (destillerer ferdige kapitler).

### Verifikasjonssjekkliste (kjøres FØR ferdigmelding)

- [ ] **JSON-validering**: samtlige nye `chapters/*.json` parses med `json.load` (én uescapet anførsel kan
      blokkere hele prebuild).
- [ ] **Obligatorisk Lovdata-verifikatør (fase 6)**: ALLE paragrafhenvisninger sjekkes mot **GJELDENDE aml.
      (2024-versjon)** og ldl., med særskilt kontroll av postene merket `(verifiser)` i §9 — og grep
      `-i verifiser` (ikke bare `(verifiser)`) for sammensatte varianter. Bekreft særlig § 14-1 b, § 14-3,
      § 14-4 a, § 14-9 (2)/(7), § 14-12/§ 14-12 a, § 15-7, § 15-9, § 15-14 og ldl. §§ 6/9/10/11/37.
- [ ] **Rettstilstand, ikke bare referanser**: kontroller at ingen kapittel gjengir **foreldet** rett som
      gjeldende — opphevet § 14-9 (2) f / generell 12-mnd-adgang, «4-års»-regel, aml. kap. 13 for kjønn/
      graviditet/religion, deltid som fritt arbeidsgivervalg (pre-2023). «Endret lov 2023–24»-boksene skal
      finnes i kap. 2.2, 3.1, 3.2, 5.1/5.2, 6.1.
- [ ] **Domsankere mot Lovdata**: Nøkk (Rt. 2000 s. 1602) og Kårstø (Rt. 2001 s. 418) sjekkes for riktig
      nummer; **ingen andre dommer/nemndsavgjørelser oppfinnes**. Stikkprøv også UMARKEDE paragrafreferanser.
- [ ] **Quiz-/flashcard-sum**: ≥500 quiz / 550–650 flashcards totalt og samsvar med kvotetabellen (§5, ±10 %
      per kapittel OK; totalen 620/636 skal holde).
- [ ] **Prøver**: 4 per del, 36 totalt, alle med må/pluss/felle-fasit.
- [ ] **Begge sjangre trent**: minst ett komplett nummerert praktikum (8.2/8.4) OG ett åpent issue-spotting-
      praktikum (8.3), pluss issue-spotting-drill (8.1).
- [ ] **Opphavsrett**: ALLE faktum, parter, virksomheter, bransjer, stillingsprosenter og hendelser er
      nyskrevne — ingen gjenkjennbare eksamensfakta; aktivt varierte bransjer/relasjoner i forhold til
      mal-skissene i dette skjelettet.
- [ ] **Pensumavgrensning**: ingen egen del om kollektiv arbeidsrett (dekkes kort i 7.2); hard nedbemanning
      kun «bør kjenne til» i 6.1; kryssbok-lenker til jus1111 peker på EKSISTERENDE kapitler (verifiser
      avtalerettskapittel-id før lenking).
- [ ] **DNA-blokkene på plass**: hvert kapittel har «Eksamensvinkel» (`tip`), «Typiske feil» (`warning`),
      «Paragraf- og begrepsliste» (`collapsible`, per delkapittel), og regel-/typetilfellekapitlene har
      «Paragrafregister» (`collapsible`); praktikumskapitlene har A + kommentert C + Sensorblikket.
- [ ] **`npm run build`** grønn før ferdigmelding (arbeidsregel i CLAUDE.md).

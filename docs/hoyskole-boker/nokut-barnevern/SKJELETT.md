# Bokskjelett: Nasjonal deleksamen i barnevern (rettsanvendelse) — eksamensrettet lærebok

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
> (Opus) leser IKKE eksamensarkivet. Alt eksamensbelegg (sittinger, frekvenser, sensor-
> krav, feller, poengmekanikk) står derfor eksplisitt per kapittel, destillert fra
> `EKSAMENSANALYSE.md` (NOKUT-arkivet for nasjonal deleksamen i rettsanvendelse for
> barnevernsfaglige mastere, des 2022 – vår 2026: syv ordinære sittinger med
> **fullstendige, momentsatte sensorrubrikker og beståttgrenser**, prøvecase m/veiledning
> H2023, samt NOKUTs informasjons-/arbeidsdokumenter 2021–2026). Alle case, faktum,
> problemstillinger og rubrikkføringer i boka skal være **HELT NYSKREVNE** (nye parter,
> barn, kommuner, hendelser, tall) — se del 8. Lovhenvisninger, juridiske vilkår og
> metodebegreper er standard fagstoff og fritt å bruke. Arketype: **DNA-jus.md**.
>
> **⚠ RETTSTILSTAND — LES §2 OG §10 FØR REGELKONTRAKTENE BRUKES.** Boka bygger
> gjennomgående på **NY barnevernslov** (lov 18. juni 2021 nr. 97, **bvl.**, i kraft
> **1.1.2023**), som erstattet barnevernloven av 1992. **Paragrafnummereringen er helt
> endret.** Eksamensarkivet spenner over overgangen: H2023-casen brukte «§ 4-4»
> (1992-nummerering) for akuttplassering; enkelte eldre sett dobbeltrefererer. Skriv
> utelukkende mot **ny lov (2021)**, men gi en **konverteringstabell 1992↔2023** (kap.
> 0.5) for de sentrale bestemmelsene. Forvaltningsloven (lov 10. feb. 1967, **fvl.**) er
> **likestilt** med barnevernsloven og kobles inn via **bvl. § 12-1**. Alle konkrete
> §-numre, ledd, bokstaver og vilkårsformuleringer merkes `(verifiser)` der det er
> risiko og sluttkontrolleres i fase 6 av en obligatorisk **Lovdata-verifikatør**
> (§11). **WebFetch mot Lovdata er IKKE kjørt her** (unngår heng) — sensorrubrikkene
> speiler rettstilstanden i sitt år.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `nokut-barnevern` |
| Tittel | **Nasjonal deleksamen i barnevern (rettsanvendelse)** |
| Level | `Høyskole` |
| Institusjon (navigasjon) | NOKUT — nasjonal deleksamen. Visningsnavn i `institusjoner.ts`: «NB Nasjonal deleksamen i barnevern (rettsanvendelse)». |
| Fagområde | jus |
| Arketype | jus (rettsdogmatisk med praktikum) — med dokumenterte DNA-avvik, se §9 |
| Pitch | Boka trener nøyaktig det denne nasjonale deleksamen prøver: **ett sammenhengende barnevernscase** der kandidaten skal «drøfte og avgjøre de rettslige spørsmålene som følger av påstandene». **Hovedtemaet er juridisk metodelære** — sensor vurderer *fremgangsmåten* (finn hjemmel → problemstilling → siter og tolk ordlyd → subsumer faktum for og mot → konkluder → avslutt med «kan»/barnets beste), ikke materiell teori. Eksamen ligger tidlig i masterløpet, så metode slår materiell dybde. A-ferdigheten finnes ikke — dette er **bestått/ikke bestått**, og terskelen ligger på **~48–52 % av maks**. Målet er derfor å **komme trygt over terskelen ved å dekke bredt** (ingen kunnskapshull), levere solid metodehåndverk på omtrent halvparten av delmomentene, og aldri tape poeng på de faste fellene: teoretisering uten faktum, irrelevante bestemmelser (aktivt trekk), konklusjon uten drøftelse, generisk barnets beste, feil hjemmelsvalg. Bygget på syv sittinger 2022–2026 med fullstendige momentrubrikker. **Materiell pugg alene gir ikke bestått** — det er subsumsjonen med ordlydssitat og faktum for/mot som bærer. |
| Kapittelantall | **37** (Del 0: 5 · Del 1: 4 · Del 2: 5 · Del 3: 3 · Del 4: 2 · Del 5: 3 · Del 6: 3 · Del 7: 3 · Del 8: 2 · Del 9: 2 · Del 10: 5) |
| Estimert totaltid | **~2 060 minutter (~34 timer)** |
| Quiz totalt | **604** (krav ≥500) |
| Flashcards totalt | **628** (sikt 550–650) |
| Prøver | **44** (4 per del × 11 deler; krav ≥4 per del) |
| Eksamensform boka kalibreres mot | **5 timers individuell digital skoleeksamen (Inspera/WISEflow), kl. 09.00–14.00**; **Lovdata Pro** som eneste hjelpemiddel (oppgaven skal kunne løses med lovteksten alene, men ordlyden skal siteres og anvendes aktivt); ett sammenhengende praktikum med **3 (av og til 4) hovedproblemstillinger** markert med ordet **«påstår / gjør gjeldende / påstand»**, hver spaltet i mange delvilkår; **vurdering: BESTÅTT / IKKE BESTÅTT** (INGEN A–F); beståttgrense **~48–52 % av maks** (i praksis 35–38 poeng på en 59–79-poengsskala); **poengmekanikk 0/1/2 per rubrikkmoment**. Bokmål og nynorsk (bokmål her). |

**Emnets omfang:** 5 studiepoeng, masternivå. Nasjonal deleksamen avlagt samme dag av
alle masterstudenter i barnevern / barnevernsfaglig arbeid ved de ~13 institusjonene
(Nord, USN, OsloMet, UiT, HiØ, HVO, VID, UiA, UiB, UiS, HVL, NTNU, HINN). Neste sitting
**9. desember 2026** — ordningen er i aktiv, stabil drift.

**Avgrensning (ufravikelig):** Faget er **rettsanvendelse** — IKKE barnevernsfaglig
teori (utviklingspsykologi, samtalemetodikk, tiltaksfag, traumeforståelse). Slik teori
skal ikke ha egne kapitler; den er bare *kunnskapsforutsetningen* som gjør at kandidaten
*ser* de rettslige problemstillingene. Materiell og prosessuell barnevernsrett behandles
alltid **gjennom metodelinsen** — som vilkårssett å subsumere under, ikke som pensum å
pugge. Alminnelig juridisk metode (rettskildelære) er felles forkunnskap som etableres i
Del 0/1 og gjenbrukes.

---

## 2. Rettstilstandsflagg — LES FØRST (kritisk for bokas paragrafapparat)

Barnevernsloven er praktikum-bærende og ble **totalfornyet i 2021**. Følgende MÅ ligge
til grunn i alle regelkontrakter. Eldre eksempelbesvarelser (des 2022 – vår 2024) bruker
delvis 1992-nummerering — det er den farligste fella.

| Institutt | Ny bestemmelse (bvl. 2021) | Status / merknad | Kapittel |
|---|---|---|---|
| Barnets beste | **bvl. § 1-3** *(verifiser)* | Grunnprinsipp, avsluttende skjønnsmoment i nesten hver drøftelse. | 3.1, refreng overalt |
| Medvirkning / rett til å bli hørt | **bvl. § 1-4** *(verifiser)* | Fast rubrikklinje i hvert case. | 3.2, refreng |
| Minste inngrep / familieliv | **bvl. § 1-5** *(verifiser)* | Kobles til EMK art. 8, forholdsmessighet. | 3.3, 9.1 |
| Forsvarlig saksbehandling | **bvl. § 1-7** *(verifiser)* | Prosessuelt gjennomgripende. | 2.1 |
| Undersøkelse | **bvl. § 2-2** *(verifiser)* | Saksbehandling. | 2.3 |
| Hjelpetiltak — vilkår | **bvl. § 3-1** *(verifiser)* | «særlig behov», «på grunn av», «egnet», «positiv endring». | 4.1 |
| Plassering som frivillig hjelpetiltak | **bvl. § 3-2** *(verifiser)* | Krever samtykke fra alle parter. | 4.2 |
| Akutt omsorgsovertakelse | **bvl. § 4-2** *(verifiser — kan være § 4-2 i 2021-loven; H2023 brukte gammel «§ 4-4»)* | «fare for», «vesentlig skadelidende», «gjennomføres straks», «kan». | 5.1 |
| Akutt ved atferd | **bvl. § 4-3** *(verifiser leddstruktur)* | Akuttplassering på atferdsgrunnlag. | 5.2 |
| Omsorgsovertakelse | **bvl. § 5-1** *(verifiser bokstav a–d)* | Kumulative vilkår, beviskrav. | 6.1 |
| Oppheving/tilbakeføring | **bvl. § 5-7** *(verifiser)* | «overveiende sannsynlig», «forsvarlig omsorg», tilknytningsunntak; materielt videreført fra 1992 § 4-21 — 1992-rettskilder relevante. | 6.2 |
| Samvær etter omsorgsovertakelse | **bvl. §§ 7-1, 7-2** *(verifiser)* | | 6.3 (berøres) |
| Frivillig atferdsopphold | **bvl. § 6-1** *(verifiser)* | Krever samtykke. | 7.1 |
| Alvorlige atferdsvansker (tvang) | **bvl. § 6-2** *(verifiser alternativ a–c, ledd)* | Forsvarlighet, minste inngrep. | 7.2 |
| Tvang på institusjon | **rettighetsforskriften / bvl. kap. 10** *(verifiser hjemmel)* | Kroppsvisitasjon, fysisk inngripen. | 7.3 |
| Partsrettigheter for barn | **bvl. § 12-3** *(verifiser 15-årsgrense + unntak)* | | 2.4 |
| Begrunnelse for vedtak | **bvl. § 12-5** *(verifiser)* | | 2.4 |
| Innsyn / unntak | **bvl. § 12-6** *(verifiser)* + fvl. §§ 18–19 | Unntak av hensyn til fare/skade. | 2.5 |
| Barnesakkyndig kommisjon | **bvl. § 12-8** *(verifiser)* | | 2.5 (berøres) |
| Opplysningsplikt til barnevernet | **bvl. § 13-4** *(verifiser personelle + materielle vilkår, bokstav a–p)* | Forholdet til taushetsplikt (hpl. §§ 21, 33). | 8.1 |
| **Forvaltningsloven gjelder via bvl. § 12-1** | **bvl. § 12-1** *(verifiser)* | Gjør fvl. gjeldende «med de særreglene som følger av barnevernsloven». **Broen** kandidaten må se. | 2.2 |
| Partsbegrepet | **fvl. § 2 bokstav e** *(verifiser)* | | 2.2 |
| Habilitet | **fvl. §§ 6–8** *(verifiser)* | Inhabil kontaktperson/saksbehandler. | 2.2 |
| Veiledningsplikt | **fvl. § 11** *(verifiser første/andre ledd)* | Hel hovedproblemstilling H2025. | 2.2 |
| Forhåndsvarsel | **fvl. § 16** *(verifiser unntak tredje ledd a–c)* | Hel hovedproblemstilling V2026. | 2.2 |
| Innsyn (fvl.) | **fvl. §§ 18–19** *(verifiser)* | | 2.5 |

> **⚠️ De to farligste fellene.** (1) **Gammel nummerering:** en bok som bygger på de
> eldste settene alene vil bomme på paragrafnumrene (1992-loven hadde § 4-4/§ 4-6
> akutt, § 4-12 omsorgsovertakelse, § 4-21 tilbakeføring, § 4-24 atferd, § 6-4
> opplysningsplikt). **Bygg boka på NY lov (2021)**, og la konverteringstabellen (kap.
> 0.5) og «Ny/gammel lov»-notene vise forskjellen — slik at studenten kjenner igjen (og
> ikke kopierer) foreldet nummerering fra eldre besvarelser og eldre rettspraksis. (2)
> **Glemme forvaltningsloven:** halvparten av hovedproblemstillingene er prosessuelle og
> løses etter **fvl.** koblet via **bvl. § 12-1**. Å lete i barnevernsloven etter en ren
> fvl.-regel (eller motsatt) er et navngitt A/C-skille. Marker rettstilstandssensitive
> detaljer med **(verifiser)** til Lovdata-verifikatøren har sjekket dem.

---

## 3. Makrostruktur

Boka er organisert etter **DNA-jus' hovedmodell (én del per rettsområde)**, men med
**metoden som gjennomgående ryggrad**: Del 0 og Del 1 etablerer metodemalen (IRAC med
ordlydssitat og for/mot-drøftelse), og hver materiell del anvender nøyaktig samme mal på
et nytt vilkårssett. Omfanget følger gjenganger-scoren fra analysen: **juridisk metode
og §§ 1-3/1-4/1-5 er bærebjelkene** (poeng i hvert case) og får egne deler + et
gjennomgående **refreng**; **prosess/forvaltningsloven** er like tung som de materielle
hjemlene (halvparten av hovedproblemstillingene) og får en stor del; de materielle
inngrepshjemlene **roterer** og får hver sin del etter score.

| Del | Innhold (sectionName) | Kap. | Prioritet | Begrunnelse (gjenganger-score, 7 sittinger 2022–2026) |
|---|---|---|---|---|
| **Del 0** | Eksamenskart og praktikumshåndverk | 5 | perfekt (meta) | DNA-obligatorisk + fagets kjerne. Metodemalen (IRAC), siter-ordlyd-kravet, for/mot-malen, «unngå irrelevante §§»-trekk-warningen, poengmekanikken 0/1/2 og bestått/ikke-bestått-logikken etableres FØR fagstoffet. Egen konverteringstabell 1992→2023. |
| **Del 1** | Juridisk metode i barnevernretten | 4 | perfekt | **Hovedtemaet.** Rettsanvendelsesprosessen; kumulative/alternative og personelle/materielle vilkår; ordlydstolkning; beviskrav; skjønn under «kan». Metode gir poeng i HVERT case (●●●). |
| **Del 2** | Barnevernslovens system og saksbehandling (forvaltningsloven, § 12-1-broen) | 5 | perfekt | Prosess/saksbehandling ●●● — halvparten av hovedproblemstillingene. Forvaltningsloven likestilt, koblet via bvl. § 12-1. Part, habilitet, veiledningsplikt, forhåndsvarsel, innsyn, undersøkelse, partsrettigheter for barn, begrunnelse. |
| **Del 3** | Barnets beste og medvirkning — grunnprinsippene som refreng (§§ 1-3/1-4/1-5) | 3 | perfekt | ●●● — fast avsluttende «kan»-/skjønnsmoment i nesten hver drøftelse. Egen del OG gjennomgående refreng i alle materielle kapitler. |
| **Del 4** | Hjelpetiltak (§§ 3-1/3-2) | 2 | kunne | ●● — vilkårskjeden, samtykkekravet, pålegg, avslag. |
| **Del 5** | Akutt- og hastevedtak (§§ 4-2/4-3) | 3 | kunne | ●● — kumulative vilkår, «vesentlig skadelidende», «straks». Roterende tung hjemmel. |
| **Del 6** | Omsorgsovertakelse og oppheving (§§ 5-1/5-7) | 3 | kunne | ●● — beviskravet «overveiende sannsynlig», tilbakeføringsterskel, samvær. |
| **Del 7** | Atferd og institusjon (§§ 6-1/6-2 + tvang) | 3 | kunne | ●● — alvorlige atferdsvansker, alternativ a–c, frivillig vs. tvang, forsvarlighet. |
| **Del 8** | Opplysningsplikt og taushetsplikt (§ 13-4) | 2 | kunne | ●● — personelle + materielle vilkår, forholdet til taushetsplikt (hpl.). |
| **Del 9** | EMK art. 8, Grunnloven § 102 og barnekonvensjonen | 2 | kjenne | ● — premieres for de beste besvarelsene (nødvendighet/forholdsmessighet), sjelden krav for bestått. |
| **Del 10** | Eksamenstrening: praktikum og simulering | 5 | perfekt (meta) | DNA-obligatorisk sluttdel: «se problemstillingene»-drill + ≥3 komplette nyskrevne case med **momentrubrikk-fasit (0/1/2 + beståttgrense)** + tidsstyrt 5-timers simulering. |

**Prioritetsklassene** (fra analysens §8) styrer oppgavemengde og dybde:
- **perfekt** = «må beherskes perfekt» (bærer hvert case; kommer nesten hver gang)
- **kunne** = roterende materiell inngrepshjemmel (én til to per case)
- **kjenne** = «bør kjenne til» (enkeltsett; kortere, men fullstendig dekning — INGEN kunnskapshull, fordi bestått krever bredde)

**Gjennomgående byggekrav** (gjelder ALLE kapitler; gjentas ikke per kapittel):
- Hvert kapittel har `tip`-blokk **«Eksamensvinkel»** og `warning`-blokk **«Typiske
  feil»** (innholdet angitt per kapittel under).
- Regel- og typetilfellekapitler avsluttes med `collapsible` **«Paragraf- og
  vilkårsregister»** (hurtigoppslag: §-numre, ledd, bokstaver, vilkårslister).
- Hvert delkapittel som bruker paragraf-/vilkårsapparat får en `collapsible`
  **«Paragraf- og begrepsliste»** rett etter Forkunnskaper (jus-analogen til
  symbol-/formellista) som forklarer ALLE bestemmelser og faguttrykk brukt i
  delkapitlet — f.eks. at «kumulative vilkår» = alle må være oppfylt; «overveiende
  sannsynlig» = kvalifisert sannsynlighetsovervekt (høyere enn 50 %); «personelt vilkår»
  = hvem som har kompetanse; «lex specialis via § 12-1» = fvl. gjelder med bvl.-særregler.
- Materielle inngrepskapitler har en **«Ny/gammel lov»-note** (`tip` eller `collapsible`):
  kort hva bestemmelsen het i 1992-loven, at ny lov (2021) gjelder, og hvorfor eldre
  besvarelser/rettspraksis bruker gammel nummerering (særlig § 5-7, som er materielt
  videreført → 1992-rettskilder relevante).
- **IRAC-subsumsjonsmal (obligatorisk disponering i alle example/exercise):** for hvert
  vilkår: **Issue** (problemstilling — bruk «Spørsmålet er om …») → **Rule** (hjemmel +
  **sitert ordlyd** + tolkning av det tvilsomme uttrykket) → **Application** (subsumsjon:
  faktum **for OG mot**) → **Conclusion** (i samsvar med drøftelsen) — og avslutt hver
  inngrepshjemmel med **«kan»/barnets beste-skjønnet** (§§ 1-3/1-4/1-5).
- **Siter-ordlyd-krav:** hvert regelkapittel skal vise hvordan man **siterer den presise
  ordlyden** (riktig §, ledd, bokstav, punktum) og bruker sitatet til å peke ut *hva som
  er tvilsomt og krever drøfting*. Presis lovhenvisning er selvstendig poenggivende.
- **For-og-mot-drøftingsmal:** hver subsumsjon skal bruke faktum **både for og mot** at
  vilkåret er oppfylt (kravet til 2 poeng). Ensidig subsumsjon gir maks 1 poeng.
- **0/1/2-momentrubrikk:** hver `example`-modellbesvarelse og hver `exercise`-fasit
  bruker den nasjonale poengmekanikken: **0 = ikke besvart/feil/mangelfullt · 1 =
  tilfredsstillende (momentet er sett) · 2 = god tolkning/drøftelse (presis ordlyd +
  faktum for og mot + presis språkføring)** — med en angitt **beståttgrense** (~50 % av
  summen). Boka bruker aldri A–F.
- Oppgavene følger byggeklossene fra analysen §3 (A hovedproblemstilling · B
  underproblemstilling · C klarlegging · D ordlydstolkning · E subsumsjon · F konklusjon
  · G «kan»/barnets beste · H prinsipal/subsidiær struktur), med stigende vanskelighet
  som ender på eksamensnivå (5-timers-case).
- Rettspraksis/forarbeider (særlig **Prop. 133 L (2020–2021)**) refereres argumentativt
  (hva de brukes til), aldri gjengis i lengde — men er sjelden krav for bestått; boka
  gjør det klart at ordlydsnær metode bærer.
- **Alle paragraf- og domsreferanser verifiseres mot Lovdata før publisering** (§11).
  Referanser merket `(verifiser)` har kjent usikkerhet fra rettstilstandssjekken.

---

## 4. Kapitler

> Feltforklaring per kapittel: **Kapitteltype · Description · Forkunnskaper (kryssbok)
> der relevant · Eksamensbelegg** (sittinger + gjenganger-score + prioritetsklasse +
> poengmekanikk) **· Regelkontrakt** (bvl./fvl.-paragrafer + vilkårslister + `(verifiser)`
> + ny/gammel-lov-note) **· Typetilfeller** (omskrevet faktum-mønster) **· Metodepoenger
> · Typiske feil · Kvote** (quiz/flashcards). Faktum-mønstre er MALER — forfatteren
> skriver HELT NYE case (nye parter, barn, kommuner, hendelser).

### DEL 0 — Eksamenskart og praktikumshåndverk

---

#### Kapittel 0.1: Eksamenskartet — slik testes den nasjonale deleksamen
- **id:** `nokut-barnevern-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen
- **Kapitteltype:** eksamenskart
- **description:** Hva eksamen faktisk er: 5 timers individuell digital skoleeksamen (Inspera/WISEflow) med Lovdata Pro, ett sammenhengende case med 3 (av og til 4) hovedproblemstillinger, vurdert bestått/ikke bestått med terskel ~48–52 % av maks — og hvorfor hovedtemaet er juridisk metode.
- **Eksamensbelegg:** Hele empirien 2022–2026 (7 sittinger). Skal formidle: (a) **formhistorikken** — startet 4 t (des 2022–vår 2024), gikk til 5 t fra H2024; «alle hjelpemidler» → **Lovdata Pro**; oppgaven skal kunne løses med lovteksten alene, men ordlyden skal siteres og anvendes aktivt; bokmål + nynorsk; to sensorer + nasjonalt kalibreringsmøte; (b) **karakterform**: **BESTÅTT/IKKE BESTÅTT — INGEN A–F**; beståttgrense konsekvent ~48–52 % av maks (35 p på 4-t-settene; 37–38 p på 5-t-settene med maks 71–79 p); (c) **poengmekanikken**: hver rubrikklinje er ett moment à **0/1/2** (alt. delmatrise 0/0,5/1); (d) **casestrukturen**: 3 (av og til 4) hovedproblemstillinger markert med ordet **«påstår/gjør gjeldende/påstand»**, hver spaltet i mange delvilkår; typisk **minst én prosessuell + én/to materielle**; (e) at **hovedtemaet er juridisk metodelære** — metode vurderes, ikke materiell teori. Prioritet: perfekt (meta).
- **Regelkontrakt:** Ingen materielle regler — men temafrekvenstabellen (analysens §2) gjengis som studentens prioriteringskart, og bestått/ikke-bestått-logikken («solid håndverk på ~halvparten av delmomentene, dekk bredt, ingen hull») etableres som bokas styringsprinsipp.
- **Metodepoenger:** Fordi det finnes én terskel og ingen toppkarakter, er strategien **bredde + solid metodehåndverk**, ikke å briljere på ett punkt. Å overse en hel hovedproblemstilling er nesten sikker vei til ikke bestått (hvert hovedspørsmål bærer mange poeng). Metode gir poeng i hvert case uansett hvilke materielle bestemmelser casen reiser.
- **Typiske feil:** Å lese boka som pensumdekning i stedet for metodetrening; jakte «toppkarakter» som ikke finnes; skrive seg tom på problemstilling 1 og forsømme de øvrige; tro at Lovdata «gir svaret» (den gir bare teksten — poengene ligger i anvendelsen).
- **Kvote:** quiz 14 · flashcards 12

---

#### Kapittel 0.2: Praktikumshåndverket — IRAC fra case til besvarelse
- **id:** `nokut-barnevern-0-2` · **number:** 0.2 · **estimatedMinutes:** 60 · **prerequisites:** `nokut-barnevern-0-1`
- **Kapitteltype:** metode
- **description:** Slik bygges en barnevernspraktikum: finn hver hovedproblemstilling (følg ordet «påstår»), disponer hvert vilkår etter IRAC (Issue → Rule med sitert ordlyd → Application med faktum for og mot → Conclusion), klarlegg det ukontroversielle kort, drøft det tvilsomme grundig, og avslutt hver inngrepshjemmel med «kan»/barnets beste.
- **Eksamensbelegg:** Alle 7 sittinger deler samme sjanger på overflaten (praktikum) men rubrikkene deler den i faste byggeklosser (analysens §3) som gjentar seg for hvert vilkår. Instruksen er fast: «drøft og avgjør de rettslige spørsmålene som følger av påstandene». Prioritet: perfekt (fagets kjerne).
- **Regelkontrakt (metoderegler, fra rubrikkenes byggeklosser):**
  1. **Problemstillingsjakt:** hver hovedproblemstilling markeres i casen med **«påstår/gjør gjeldende/påstand»** — identifiser dem ALLE først (byggekloss A, 1 p, krever *tydelig* formulering; bruk «Spørsmålet er om …»). Underproblemstillinger (B, 1 p) har mildere krav: det holder å vise at problemet er sett.
  2. **Klarlegging FØR drøfting (C, 1 p):** ukontroversielle vilkår (personelle vilkår, partsstatus, at samtykke mangler) slås fast i **én til to setninger med hjemmel + kort faktum** — verken hopp over eller overdrøft.
  3. **Ordlydstolkning (D, 1 p / 2 p):** siter den **presise ordlyden**, klargjør terskel/innhold. 2 p krever *god* tolkning som får fram terskelens høyde.
  4. **Subsumsjon (E, 1 p / 2 p):** konkret anvendelse på casens faktum — **ikke teoretisk fremstilling**. 2 p krever faktum **for OG mot**.
  5. **Konklusjon (F, 1 p):** i samsvar med drøftelsen. **Konklusjon uten dekning i drøftelsen gir 0** — selv om den er «riktig».
  6. **«Kan»/barnets beste (G, 1 p / 2 p):** nesten hver inngrepshjemmel ender i et «kan»-skjønn — koble §§ 1-3/1-4/1-5, konkret til dette barnet.
  7. **Struktur (H):** prinsipal før subsidiær; å påpeke at et videre spørsmål blir subsidiært signaliserer strukturell forståelse.
- **Typetilfeller:** 2 `example`-blokker: (a) et nyskrevet minicase med to «påstår»-markører → vist problemstillingsjakt → IRAC-disposisjon; (b) samme vilkår besvart to ganger — én gang som teoretisk fremstilling uten faktum (lite/ingen uttelling + «klart trekk»), én gang som faktumnær subsumsjon med ordlydssitat og for/mot (2 p) — bestått/ikke-bestått-skillet visualisert med **0/1/2-margpoeng**.
- **Metodepoenger:** IRAC er malen som legges på ETHVERT vilkår. Med Lovdata er ordlyden gratis — poeng kun for tolkning + anvendelse. Klarlegg kort, drøft det tvilsomme.
- **Typiske feil:** Teoretisk fremstilling uten faktum (hyppigst påtalt); konklusjon uten drøftelse; hoppe over «kan»/barnets beste; overse en hel hovedproblemstilling; overdrøfte det ukontroversielle.
- **Kvote:** quiz 18 · flashcards 16

---

#### Kapittel 0.3: Ordlydssitat og for-og-mot — å skrive for 2 poeng
- **id:** `nokut-barnevern-0-3` · **number:** 0.3 · **estimatedMinutes:** 45 · **prerequisites:** `nokut-barnevern-0-2`
- **Kapitteltype:** metode (poenghåndverk)
- **description:** Nøkkelferdigheten som skiller «tilfredsstillende» (1 p) fra «god» (2 p): siter den presise ordlyden, pek ut det tvilsomme uttrykket, og drøft faktum systematisk for OG mot før du konkluderer. Den faste 2-poengs-malen for hvert vilkår.
- **Eksamensbelegg:** Rubrikkene skiller systematisk **å se problemet (1 p)** fra **å behandle det godt (2 p)** — og 2-poengslinjene er nesten uten unntak *tolkning* og *drøftelse* av de sentrale, tvilsomme vilkårene. Presis lovhenvisning (riktig §/ledd/bokstav/punktum) er selvstendig poenggivende og et metodesignal. Prioritet: perfekt (bærer poengsummen).
- **Regelkontrakt (poengmekanikk):** (a) **sitér ordlyden** ordrett fra den bestemmelsen du bruker, og marker det ordet/uttrykket som er tvilsomt («vesentlig», «overveiende sannsynlig», «særlig behov»); (b) **tolk uttrykket** — terskelens høyde, innhold, momenter (evt. forarbeider/EMK der relevant); (c) **subsumer for og mot**: hvilke faktum trekker i retning oppfylt, hvilke mot — begge sider eksplisitt; (d) **konkluder** i samsvar. 2 p krever alle fire; 1 p når momentet er sett men subsumsjonen er ensidig/tynn; 0 ved feil/teori uten faktum.
- **Typetilfeller:** 2 `example`-blokker: (a) ett tvilsomt vilkår drøftet fra 0-nivå (ren regelgjengivelse) → 1-nivå (ser problemet, ensidig) → 2-nivå (ordlydssitat + for/mot + presis konklusjon), med **0/1/2-margpoeng** synlig; (b) hvordan et ordlydssitat brukes til å *dele* et sammensatt vilkår i undervilkår (kumulative vilkår).
- **Metodepoenger:** 2-poengsdrøftelsen krever faktum fra casen **både til støtte for og imot**. En konklusjon som ikke bygger på drøftelsen nulles. Presis §-henvisning er poeng i seg selv.
- **Typiske feil:** Ensidig subsumsjon (kun for eller kun mot → maks 1 p); parafrasere i stedet for å sitere ordlyden; upresis lovhenvisning (feil ledd/bokstav); «meningsdrøfting» uten forankring i ordlyden.
- **Kvote:** quiz 16 · flashcards 16

---

#### Kapittel 0.4: De aktive trekkene — hva du IKKE skal gjøre
- **id:** `nokut-barnevern-0-4` · **number:** 0.4 · **estimatedMinutes:** 40 · **prerequisites:** `nokut-barnevern-0-2`
- **Kapitteltype:** metode (fellekatalog) — **rammet inn som en gjennomgående `warning`-modul**
- **description:** De faste feilene rubrikkene aktivt trekker for — særlig teoretiske fremstillinger og behandling av irrelevante bestemmelser — samlet i én fellekatalog som repeteres i hvert materielt kapittel.
- **Eksamensbelegg:** Analysens §5 lister de eksplisitt påtalte feilene. To gir **aktive trekk** («klare trekk»): (1) **teoretisk fremstilling** i stedet for konkret drøftelse — den hyppigst påtalte; (2) **behandle irrelevante bestemmelser** — å drøfte paragrafer uten betydning for casen leder til klare trekk. Prioritet: perfekt (meta — beskytter beståttmarginen).
- **Regelkontrakt (feilkatalog — brukes som `warning`-innhold i alle kapitler):**
  - **T1** teoretisk fremstilling uten faktum (aktivt trekk).
  - **T2** behandle irrelevante bestemmelser / drøfte §§ uten betydning for casen (aktivt trekk).
  - **T3** konklusjon uten dekning i drøftelsen (0 p, selv om «riktig»).
  - **T4** faktum løsrevet fra et formulert vilkår (gir ikke uttelling).
  - **T5** overse en hel hovedproblemstilling (nesten sikker ikke bestått).
  - **T6** feil/upresist hjemmelsvalg (men forsvarlig feil hjemmel nulles ikke — alt.matrise).
  - **T7** overdrøfte det ukontroversielle / underdrøfte det tvilsomme.
  - **T8** manglende ordlydssitat / upresis §-henvisning.
  - **T9** glemme den avsluttende «kan»/barnets beste-vurderingen (fast poenglinje sist).
  - **T10** generisk barnets beste (ikke knyttet til dette barnet).
  - **T11** blande materiell og prosessuell rett (ikke se fvl. via § 12-1).
  - **T12** ikke spalte kumulative vilkår.
- **Typetilfeller:** 1 `example`: en kort besvarelse full av T1/T2/T3 → margnotater viser hvor de aktive trekkene faller og hvordan de rettes.
- **Metodepoenger:** Feil forsvarlig hjemmel straffes, men nulles ikke (H2025 alt.matrise). Å drøfte to hjemler gir ikke dobbeltuttelling — sensor velger den beste. Riktig hjemmelsvalg premieres.
- **Typiske feil:** (Selve kapitlet ER fellekatalogen.) Meta-fella: å kjenne fellene teoretisk uten å sjekke egen besvarelse mot dem.
- **Kvote:** quiz 16 · flashcards 14

---

#### Kapittel 0.5: Ny lov 2021 — konverteringstabell 1992↔2023
- **id:** `nokut-barnevern-0-5` · **number:** 0.5 · **estimatedMinutes:** 35 · **prerequisites:** `nokut-barnevern-0-1`
- **Kapitteltype:** rettskildekart
- **description:** Barnevernsloven ble totalfornyet i 2021 (i kraft 1.1.2023) og fikk helt ny nummerering. Konverteringstabellen gammel↔ny for de sentrale bestemmelsene, slik at studenten skriver mot ny lov men kjenner igjen 1992-numre i eldre rettspraksis, forarbeider og eldre besvarelser.
- **Eksamensbelegg:** Arkivet spenner over overgangen: des 2022 tillot begge lover; V2023 dobbeltrefererte; **H2023-casen brukte «§ 4-4»** (1992-nummerering for akuttplassering); fra H2024 gjennomgående ny lov. Rubrikkene bygger på **ny lov**. Prioritet: perfekt (meta — beskytter mot nummereringsfeil).
- **Regelkontrakt (konverteringstabell — alle numre `(verifiser)` mot Lovdata i fase 6):**
  | Institutt | 1992-loven (gammel) | 2021-loven (ny, bvl.) |
  |---|---|---|
  | Barnets beste | § 4-1 | **§ 1-3** |
  | Medvirkning | § 4-1 andre ledd / § 6-3 | **§ 1-4** |
  | Minste inngrep / familieliv | (ulovfestet/§ 4-1) | **§ 1-5** |
  | Hjelpetiltak | § 4-4 | **§ 3-1** (vilkår), **§ 3-2** (plassering) |
  | Akutt omsorgsovertakelse | § 4-6 | **§ 4-2** |
  | Akutt ved atferd | § 4-25 / § 4-6 | **§ 4-3** |
  | Omsorgsovertakelse | § 4-12 | **§ 5-1** |
  | Oppheving/tilbakeføring | § 4-21 | **§ 5-7** (materielt videreført) |
  | Samvær | § 4-19 | **§§ 7-1/7-2** |
  | Frivillig atferdsopphold | § 4-26 | **§ 6-1** |
  | Alvorlige atferdsvansker (tvang) | § 4-24 | **§ 6-2** |
  | Partsrettigheter/undersøkelse | § 6-3 / § 4-3 | **§ 12-3 / § 2-2** |
  | Fvl. gjelder | § 6-1 | **§ 12-1** |
  | Opplysningsplikt | § 6-4 | **§ 13-4** |
  - **Note:** § 5-7 (oppheving) er materielt videreført fra 1992 § 4-21 — derfor er **rettskilder knyttet til 1992-loven fortsatt relevante** her (nevnt eksplisitt i veiledningen). For de øvrige: skriv mot ny nummerering, men gjenkjenn den gamle.
- **Metodepoenger:** Bruk alltid **ny nummerering** i besvarelsen. Når du finner en dom eller et forarbeid med 1992-numre, oversett via tabellen — men sjekk at bestemmelsen er materielt videreført før du bruker den gamle rettskilden.
- **Typiske feil:** Bruke 1992-numre (§ 4-12, § 4-4) i besvarelsen; anta at all 1992-praksis er relevant uten å sjekke videreføring; blande gammel og ny nummerering i samme drøftelse.
- **Kvote:** quiz 14 · flashcards 16 (flashcards: gammel↔ny for hver sentral bestemmelse)

**Prøve-kvote Del 0:** 4 prøver (problemstillingsjakt fra «påstår»-markører i nyskrevet case; IRAC-disposisjonsøvelse; 0/1/2-selvvurdering av en modellbesvarelse mot momentrubrikk; konverteringsdrill gammel↔ny + fellegjenkjenning T1–T12).

---

### DEL 1 — Juridisk metode i barnevernretten

---

#### Kapittel 1.1: Rettsanvendelsesprosessen — fra rettsfaktum til konklusjon
- **id:** `nokut-barnevern-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** `nokut-barnevern-0-2`
- **Kapitteltype:** metode (regel)
- **description:** Selve faget: rettsanvendelsesprosessen (rettsfaktum → rettsregel → subsumsjon → konklusjon) anvendt på barnevernsretten, og hvordan den gir poeng i HVERT case uansett hvilke materielle bestemmelser casen reiser.
- **Eksamensbelegg:** Juridisk metode er den absolutte bærebjelken (●●●) — egne poeng i alle rubrikker. «Ferdigheter i juridisk metode viser seg i evnen til å drøfte det konkrete forholdet framfor teoretiske fremstillinger.» Fordi eksamen ligger tidlig i masterløpet, vurderes metode, ikke sluttkompetanse i materiell rett. Prioritet: perfekt.
- **Regelkontrakt (metode):** rettsanvendelsesprosessens fire trinn (rettsfaktum → rettsregel → subsumsjon → konklusjon); forholdet mellom faktum og jus; hvordan man **omdanner et livsnært case til rettslige problemstillinger** ved å lete etter hjemler som passer faktum; at metode er «gratis poeng» tilgjengelig i hvert vilkår. Kobles til IRAC (kap. 0.2) som den praktiske disposisjonen.
- **Typetilfeller:** `example`: et kort case → vist hvordan de rettslige problemstillingene *utledes* av faktum (hvilke hjemler aktualiseres), med **0/1/2-fasit** på metodemomentene.
- **Metodepoenger:** Metode er selve faget — jussen er verktøyet. Se problemstillingene FØR du velger hjemmel. Konkret drøftelse slår teori hver gang.
- **Typiske feil:** T1 (teori uten faktum); starte med å pugge materiell rett i stedet for å trene fremgangsmåten; ikke se at metodemomentene gir poeng i hvert vilkår.
- **Kvote:** quiz 18 · flashcards 16

---

#### Kapittel 1.2: Vilkårslæren — kumulative/alternative og personelle/materielle vilkår
- **id:** `nokut-barnevern-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `nokut-barnevern-1-1`
- **Kapitteltype:** metode (regel)
- **description:** Hvordan man spalter en bestemmelse i vilkår og drøfter hvert for seg: kumulative (alle må være oppfylt) vs. alternative (ett holder), og personelle (kompetanse/hvem) vs. materielle (innhold) vilkår, samt grunnvilkår vs. undervilkår.
- **Eksamensbelegg:** Nesten hver inngrepshjemmel har **kumulative vilkår** som må spaltes; å behandle et sammensatt hovedvilkår (f.eks. «fare for at barnet blir vesentlig skadelidende dersom vedtaket ikke gjennomføres straks») som ett i stedet for undervilkårene er en navngitt felle (T12). Prioritet: perfekt.
- **Regelkontrakt (metode):** **kumulative vilkår** (alle må være oppfylt — én ikke-oppfylt = hele hjemmelen faller) vs. **alternative vilkår** (ett alternativ holder — f.eks. bokstav a–c); **personelle vilkår** (hvem har kompetanse/myndighet) vs. **materielle vilkår** (hvilke faktiske forhold kreves); **grunnvilkår** (hovedvilkåret) vs. **undervilkår** (delene et sammensatt vilkår spaltes i); hvordan man klarlegger de klare vilkårene raskt og drøfter det tvilsomme grundig.
- **Typetilfeller:** `example`: et sammensatt hovedvilkår (mal: akutt-vilkåret) spaltet i tre undervilkår, hvert drøftet for seg med **0/1/2-fasit**; et alternativt vilkår (a–c) der bare ett alternativ er aktuelt (de andre klarlegges bort på én setning).
- **Metodepoenger:** Spalt alltid kumulative vilkår og drøft hvert for seg. Klarlegg alternativer som klart ikke er aktuelle på én setning (C). Ett ikke-oppfylt kumulativt vilkår avgjør hele spørsmålet.
- **Typiske feil:** T12 (ikke spalte kumulative vilkår); drøfte alle alternativer likt når bare ett er aktuelt (bortkastet tid); blande personelle og materielle vilkår.
- **Kvote:** quiz 18 · flashcards 18

---

#### Kapittel 1.3: Ordlydstolkning og beviskrav
- **id:** `nokut-barnevern-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `nokut-barnevern-1-2`
- **Kapitteltype:** metode (regel)
- **description:** Hvordan man tolker lovens ordlyd (terskeluttrykk, vage begreper) og hvilket beviskrav som gjelder: alminnelig sannsynlighetsovervekt vs. det skjerpede «overveiende sannsynlig» ved de tyngste inngrepene.
- **Eksamensbelegg:** Ordlydstolkning er 2-poengsdrøftelsens kjerne (byggekloss D). Beviskravet varierer: de fleste vilkår krever sannsynlighetsovervekt, mens tilbakeføring (§ 5-7) krever **«overveiende sannsynlig»** — en fast tolkningsutfordring. Prioritet: perfekt.
- **Regelkontrakt (metode):** ordlyd som primær rettskilde (Lovdata gir teksten; poeng for tolkningen); tolkning av **terskeluttrykk** («vesentlig», «alvorlig», «særlig behov», «fare for»); vage/skjønnsmessige begreper; forholdet mellom ordlyd og forarbeider (Prop. 133 L (2020–2021)) der ordlyden er uklar. **Beviskrav:** alminnelig **sannsynlighetsovervekt** (mer enn 50 %) som hovedregel; **«overveiende sannsynlig»** = kvalifisert overvekt (høyere terskel) ved bl.a. tilbakeføring § 5-7 `(verifiser)`; hvordan beviskravet påvirker subsumsjonen.
- **Typetilfeller:** `example`: tolke uttrykket «vesentlig skadelidende» (mal) — terskelens høyde, sammenhengen mellom skadepotensial og sannsynlighet; drøfte samme faktum under alminnelig overvekt vs. «overveiende sannsynlig» og vise hvordan konklusjonen kan snu. **0/1/2-fasit.**
- **Metodepoenger:** Siter uttrykket, tolk terskelen, koble beviskravet inn i subsumsjonen. Jo større skadepotensial, jo lavere kan sannsynlighetskravet være i «fare for». «Overveiende sannsynlig» er en høyere terskel enn 50 %.
- **Typiske feil:** T8 (ikke sitere/parafrasere ordlyden); bruke feil beviskrav (alminnelig overvekt der «overveiende sannsynlig» kreves); tolke terskelen for lavt/høyt uten forankring.
- **Kvote:** quiz 18 · flashcards 18

---

#### Kapittel 1.4: Skjønnsutøvelse under «kan» og prinsipal/subsidiær struktur
- **id:** `nokut-barnevern-1-4` · **number:** 1.4 · **estimatedMinutes:** 45 · **prerequisites:** `nokut-barnevern-1-3`
- **Kapitteltype:** metode (regel)
- **description:** De to metodegrepene som ofte glemmes: at «kan» i inngrepshjemlene er et selvstendig skjønnsvilkår (koblet til barnets beste), og hvordan man strukturerer prinsipale og subsidiære påstander i riktig rekkefølge.
- **Eksamensbelegg:** «Kan»/barnets beste er en fast poenglinje som mange hopper over fordi den kommer sist (T9). Der casen har prinsipal og subsidiær påstand må de behandles i rekkefølge (V2023: tilbakeføring før økt samvær); å påpeke at et videre spørsmål blir subsidiært honoreres (byggekloss H). Prioritet: perfekt.
- **Regelkontrakt (metode):** **«kan»-skjønnet** — når vilkårene er oppfylt, gir loven ofte en *adgang*, ikke en *plikt*; kandidaten må se at det ligger et selvstendig vilkår her og koble §§ 1-3/1-4/1-5 + begrunnelseskravet § 12-5 (utdypes Del 3). **Prinsipal/subsidiær:** prinsipal påstand drøftes først; subsidiær drøftes bare hvis prinsipal ikke fører fram (men skal drøftes for sikkerhets skyld der hovedkonklusjonen kan falle); å signalisere subsidiaritet viser strukturell forståelse.
- **Typetilfeller:** `example`: en hjemmel der vilkårene er oppfylt men «kan»-skjønnet gir et annet resultat (barnets beste tilsier mildere tiltak); en prinsipal/subsidiær-konstellasjon (mal: tilbakeføring prinsipalt, økt samvær subsidiært) disponert i riktig rekkefølge. **0/1/2-fasit.**
- **Metodepoenger:** «Kan» er et eget vilkår — ikke stopp ved at de øvrige er oppfylt. Prinsipal før subsidiær. Subsidiær drøftelse er obligatorisk der hovedkonklusjonen kan falle.
- **Typiske feil:** T9 (glemme «kan»/barnets beste); behandle subsidiær påstand før prinsipal; ikke drøfte subsidiært når hovedkonklusjonen er usikker.
- **Kvote:** quiz 16 · flashcards 16

**Prøve-kvote Del 1:** 4 prøver (vilkårsspalting av en sammensatt hjemmel til kumulative undervilkår; ordlydstolkning + beviskrav-drill; «kan»/barnets beste-identifikasjon; prinsipal/subsidiær-strukturøvelse — alle med 0/1/2-fasit).

---

### DEL 2 — Barnevernslovens system og saksbehandling (forvaltningsloven, § 12-1-broen)

---

#### Kapittel 2.1: Barnevernslovens system og forsvarlig saksbehandling (§ 1-7)
- **id:** `nokut-barnevern-2-1` · **number:** 2.1 · **estimatedMinutes:** 45 · **prerequisites:** `nokut-barnevern-1-1`
- **Kapitteltype:** regel (systemoversikt)
- **description:** Kart over barnevernsloven (2021): grunnprinsipper (kap. 1), undersøkelse (kap. 2), tiltakstrappen (hjelpetiltak → akutt → omsorgsovertakelse → atferd), saksbehandling (kap. 12), opplysningsplikt (kap. 13) — og kravet til forsvarlig saksbehandling (§ 1-7) som binder det sammen.
- **Eksamensbelegg:** Systemforståelse er forutsetningen for å plassere hvert case i riktig del av loven. § 1-7 (forsvarlighet) er prosessuelt gjennomgripende. Prioritet: perfekt (orienteringskapittel).
- **Regelkontrakt (gjeldende rett, ny lov):** lovens kapittelstruktur; **tiltakstrappen** (minste inngreps prinsipp — mildere tiltak før inngripende, § 1-5); **§ 1-7 forsvarlig saksbehandling** `(verifiser)`; forholdet mellom barnevernstjenesten (vedtak/akutt) og barneverns- og helsenemnda (de tyngste vedtakene). **Ny/gammel lov-note:** hele nummereringen er ny fra 2021 — se konverteringstabellen (kap. 0.5).
- **Typetilfeller:** `example`: et case → vist hvordan man plasserer hver «påstår»-markør i riktig del av loven (prosess vs. materiell; hvilken tiltakstrinn).
- **Metodepoenger:** Plasser problemstillingen i riktig del av loven før du velger hjemmel. Tiltakstrappen: mildere tiltak vurderes før inngripende (§ 1-5). Nemnda vs. tjenesten avgjør kompetansespørsmål.
- **Typiske feil:** T6 (feil del av loven → feil hjemmel); overse tiltakstrappen; blande tjenestens og nemndas kompetanse.
- **Kvote:** quiz 16 · flashcards 16

---

#### Kapittel 2.2: Forvaltningsloven via bvl. § 12-1 — part, habilitet, veiledning, forhåndsvarsel
- **id:** `nokut-barnevern-2-2` · **number:** 2.2 · **estimatedMinutes:** 70 · **prerequisites:** `nokut-barnevern-2-1`
- **Kapitteltype:** regel (bærekapittel)
- **description:** Det kritiske broen: forvaltningsloven gjelder i barnevernssaker via bvl. § 12-1, «med de særreglene som følger av barnevernsloven». Partsbegrepet (fvl. § 2 e), habilitet (fvl. §§ 6–8), veiledningsplikt (fvl. § 11) og forhåndsvarsel (fvl. § 16) — halvparten av hovedproblemstillingene er rene fvl.-spørsmål.
- **Eksamensbelegg:** Prosess/saksbehandling er ●●● — testet i så godt som hvert sett; **halvparten av hovedproblemstillingene er prosessuelle**. Rene fvl.-hovedproblemstillinger: **H2025 veiledningsplikt (fvl. § 11)**, **V2026 forhåndsvarsel (fvl. § 16)**; habilitet H2023/V2025. Å ikke se at fvl. gjelder via § 12-1 (eller lete i bvl. etter en ren fvl.-regel) er navngitt A/C-skille (T11). Prioritet: perfekt.
- **Regelkontrakt (gjeldende rett — fvl. + bvl. § 12-1):** **bvl. § 12-1** — fvl. gjelder «med de særreglene som følger av barnevernsloven» (lex specialis) `(verifiser)`; **fvl. § 2 bokstav e** partsbegrepet (hvem er part — den vedtaket retter seg mot / som det direkte gjelder) `(verifiser)`; **fvl. §§ 6–8** habilitet (§ 6 første ledd automatiske grunner, andre ledd «særegne forhold»; § 6 tredje ledd om at avledet inhabilitet ikke rammer visse avgjørelser) `(verifiser)`; **fvl. § 11** veiledningsplikt (første/andre ledd — omfang og når den utløses) `(verifiser)`; **fvl. § 16** forhåndsvarsel (hovedregel + unntak tredje ledd bokstav a–c, bl.a. når varsel kan hindre gjennomføring) `(verifiser)`; **fvl. § 12** fullmektig. **Særregler i bvl.** som går foran fvl. der de finnes. **Ny/gammel lov-note:** § 12-1 tilsvarer 1992 § 6-1.
- **Typetilfeller:** Minipraktikum: en person som mener seg part i en undersøkelsessak (fvl. § 2 e — er hun part?); en saksbehandler med nær relasjon til familien (fvl. §§ 6–8 habilitet); barnevernstjenesten som fatter vedtak uten forhåndsvarsel (fvl. § 16 + unntak); en forelder som ikke fikk veiledning (fvl. § 11).
- **Metodepoenger:** **Se broen § 12-1 FØRST** — fvl. gjelder med mindre bvl. har en særregel. Sjekk om bvl. har en særregel før du bruker fvl. direkte. Klarlegg partsstatus (C) før du drøfter partsrettigheter. Forhåndsvarselunntaket (§ 16 tredje ledd) er ofte det tvilsomme vilkåret.
- **Typiske feil:** T11 (ikke se at fvl. gjelder via § 12-1; lete i bvl. etter ren fvl.-regel eller motsatt); overse særreglene i bvl.; behandle forhåndsvarsel som absolutt uten å vurdere unntaket; feil habilitetsgrunn.
- **Kvote:** quiz 22 · flashcards 24 (flashcards: § 12-1-broen; fvl. § 2 e; §§ 6–8-grunnene; § 11 utløsning; § 16 unntak a–c)

---

#### Kapittel 2.3: Undersøkelse og saksforberedelse (bvl. § 2-2)
- **id:** `nokut-barnevern-2-3` · **number:** 2.3 · **estimatedMinutes:** 45 · **prerequisites:** `nokut-barnevern-2-2`
- **Kapitteltype:** regel
- **description:** Barnevernstjenestens undersøkelsesplikt og -adgang etter bvl. § 2-2: når undersøkelse skal åpnes, hvor omfattende den kan være, og forholdet til familiens integritet (minste inngrep).
- **Eksamensbelegg:** Undersøkelse (§ 2-2) er en fast prosessuell byggekloss som ofte danner rammen rundt de materielle spørsmålene. Prioritet: kunne (prosessuell støtte).
- **Regelkontrakt (gjeldende rett):** **bvl. § 2-2** undersøkelsesplikt/-adgang `(verifiser leddstruktur)` — når en melding gir «rimelig grunn til å anta» at det er behov for tiltak; undersøkelsens omfang (ikke mer omfattende enn nødvendig — § 1-5); frist; forholdet til samtykke og til fvl.-saksbehandlingsreglene. **Ny/gammel lov-note:** tilsvarer deler av 1992 § 4-3.
- **Typetilfeller:** Minipraktikum: en bekymringsmelding → er terskelen for å åpne undersøkelse nådd? en undersøkelse som går lenger enn nødvendig (§ 1-5-skranke).
- **Metodepoenger:** Klarlegg terskelen for undersøkelse, vurder omfanget mot minste inngrep. Undersøkelsen rammes av fvl.-reglene (kap. 2.2).
- **Typiske feil:** Blande undersøkelsesterskelen med vilkårene for tiltak; overse § 1-5-skranken på omfanget.
- **Kvote:** quiz 16 · flashcards 14

---

#### Kapittel 2.4: Partsrettigheter for barn og begrunnelse (bvl. §§ 12-3, 12-5)
- **id:** `nokut-barnevern-2-4` · **number:** 2.4 · **estimatedMinutes:** 45 · **prerequisites:** `nokut-barnevern-2-2`
- **Kapitteltype:** regel
- **description:** Når barnet selv er part (15-årsgrensen og unntakene, § 12-3) og kravet til begrunnelse for vedtak (§ 12-5) — to faste prosessuelle poenglinjer.
- **Eksamensbelegg:** Partsrettigheter for barn og begrunnelseskravet går igjen som del av saksbehandlingsspørsmålene; 15-årsgrensen med unntak er en fast tolkningsutfordring (forarbeidene Prop. 133 L brukes til å fastlegge partsrettigheter for barn under 15). Prioritet: kunne.
- **Regelkontrakt (gjeldende rett):** **bvl. § 12-3** partsrettigheter for barn — hovedregel **15 år**, men **unntak** (yngre barn kan gis partsrettigheter i visse tilfeller; nemnda kan innvilge) `(verifiser leddstruktur og unntak)`; forholdet til medvirkning (§ 1-4, kap. 3.2). **bvl. § 12-5** begrunnelseskravet for vedtak `(verifiser)` — kobles til «kan»/barnets beste-vurderingen (begrunnelsen skal vise skjønnet). **Ny/gammel lov-note:** partsrettigheter lå i 1992 § 6-3.
- **Typetilfeller:** Minipraktikum: et barn på 14 som vil være part (§ 12-3 unntak); et vedtak med mangelfull begrunnelse (§ 12-5 + kobling til barnets beste-skjønnet).
- **Metodepoenger:** Skill partsrettigheter (§ 12-3) fra medvirkning (§ 1-4) — barn under 15 uten partsstatus har fortsatt rett til å bli hørt. Begrunnelsen skal vise «kan»-skjønnet.
- **Typiske feil:** Blande partsstatus og medvirkningsrett; anta at barn under 15 aldri er part; overse begrunnelseskravet.
- **Kvote:** quiz 16 · flashcards 16

---

#### Kapittel 2.5: Innsyn og unntak (bvl. § 12-6 jf. fvl. §§ 18–19) + sakkyndighet (§ 12-8)
- **id:** `nokut-barnevern-2-5` · **number:** 2.5 · **estimatedMinutes:** 45 · **prerequisites:** `nokut-barnevern-2-2`
- **Kapitteltype:** regel
- **description:** Partens innsynsrett og de barnevernsspesifikke unntakene (fare/skade), forholdet til fvl. §§ 18–19, og barnesakkyndig kommisjons rolle (§ 12-8).
- **Eksamensbelegg:** Innsyn med unntak (§ 12-6) er en gjenganger blant saksbehandlingsspørsmålene; barnesakkyndig kommisjon (§ 12-8) berøres. Prioritet: kunne.
- **Regelkontrakt (gjeldende rett):** **bvl. § 12-6** innsyn og unntak — utgangspunkt partsinnsyn, men unntak av hensyn til **fare eller skade** for barnet/andre `(verifiser)`; **fvl. §§ 18–19** som bakgrunn (partsinnsyn og unntak) via § 12-1; **bvl. § 12-8** barnesakkyndig kommisjon (sakkyndige rapporter skal vurderes av kommisjonen) `(verifiser)`. **Ny/gammel lov-note:** ny nummerering.
- **Typetilfeller:** Minipraktikum: en forelder krever innsyn i opplysninger som kan sette barnet i fare (§ 12-6 unntak); en sakkyndig rapport som ikke er vurdert av kommisjonen (§ 12-8).
- **Metodepoenger:** Utgangspunkt = innsyn; unntaket (fare/skade) er det tvilsomme vilkåret. § 12-6 er særregel som går foran fvl. §§ 18–19 der de avviker.
- **Typiske feil:** Behandle innsyn som absolutt uten unntaksvurdering; bruke fvl. §§ 18–19 uten å se bvl.-særregelen § 12-6; overse kommisjonskravet.
- **Kvote:** quiz 16 · flashcards 16

**Prøve-kvote Del 2:** 4 prøver (fvl.-hovedproblemstilling via § 12-1-broen — part/habilitet/forhåndsvarsel/veiledning; undersøkelsesterskel § 2-2; partsrettigheter for barn + begrunnelse; innsyn med unntak — alle med 0/1/2-fasit).

---

### DEL 3 — Barnets beste og medvirkning: grunnprinsippene som refreng (§§ 1-3/1-4/1-5)

> **Refreng-note (gjelder hele boka):** §§ 1-3/1-4/1-5 skal IKKE bare bo i Del 3 — de
> veves inn som den avsluttende «kan»/skjønnsvurderingen i HVERT materielt kapittel
> (5.x, 6.x, 7.x osv.). Del 3 etablerer refrenget; de øvrige delene bruker det.

---

#### Kapittel 3.1: Barnets beste (§ 1-3) — konkret, ikke generisk
- **id:** `nokut-barnevern-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `nokut-barnevern-1-4`
- **Kapitteltype:** regel (grunnprinsipp/refreng)
- **description:** Barnets beste som grunnleggende hensyn og avsluttende skjønnsmoment i nesten hver drøftelse — og hvorfor det må forankres konkret i DETTE barnets situasjon, ikke ramses opp generelt.
- **Eksamensbelegg:** Barnets beste (§ 1-3) er ●●● — fast rubrikklinje i hvert case som del av den avsluttende «kan»/skjønnsvurderingen. **Generisk barnets beste** (nevne § 1-3 uten å knytte det til det konkrete barnet) gir lav uttelling (T10). 2 p krever at både «kan» og barnets beste er med, konkret. Prioritet: perfekt (refreng).
- **Regelkontrakt (gjeldende rett):** **bvl. § 1-3** barnets beste som grunnleggende hensyn `(verifiser leddstruktur — momentliste for vurderingen)`; forholdet til «kan»-skjønnet (kap. 1.4); hvordan barnets beste veies mot familieliv (§ 1-5) og hvordan medvirkning (§ 1-4) inngår i vurderingen; barnekonvensjonen art. 3 som tolkningsmoment (Del 9). **Ny/gammel lov-note:** tilsvarer 1992 § 4-1.
- **Typetilfeller:** `example`: samme case besvart med generisk barnets beste (T10, 1 p) vs. konkret forankret i barnets alder, tilknytning, uttrykte ønsker og situasjon (2 p) — **0/1/2-fasit** synlig.
- **Metodepoenger:** Barnets beste er et selvstendig vilkår i «kan»-skjønnet. **Forankre konkret** — navngi barnets alder, tilknytning, behov, ønsker. Vev det inn i hver inngrepsdrøftelse.
- **Typiske feil:** T10 (generisk barnets beste); T9 (glemme det helt); behandle barnets beste som et slagord uten faktumforankring.
- **Kvote:** quiz 18 · flashcards 18

---

#### Kapittel 3.2: Medvirkning og barnets rett til å bli hørt (§ 1-4)
- **id:** `nokut-barnevern-3-2` · **number:** 3.2 · **estimatedMinutes:** 45 · **prerequisites:** `nokut-barnevern-3-1`
- **Kapitteltype:** regel (grunnprinsipp/refreng)
- **description:** Barnets rett til medvirkning og til å bli hørt etter § 1-4 — en fast poenglinje i hvert case, uavhengig av om barnet er part.
- **Eksamensbelegg:** Medvirkning (§ 1-4) er ●●● — rubrikkene har fast en linje for «sier noe fornuftig om barnets rett til medvirkning». Prioritet: perfekt (refreng).
- **Regelkontrakt (gjeldende rett):** **bvl. § 1-4** medvirkning/rett til å bli hørt `(verifiser)` — barnet skal få informasjon, anledning til å uttale seg, og meningen skal tillegges vekt etter alder/modenhet; gjelder **uavhengig av partsstatus** (skill fra § 12-3, kap. 2.4); barnekonvensjonen art. 12 som tolkningsmoment. **Ny/gammel lov-note:** styrket fra 1992-loven.
- **Typetilfeller:** Minipraktikum: et vedtak der barnet ikke er hørt (§ 1-4-brudd); et barn under 15 uten partsstatus som likevel har medvirkningsrett.
- **Metodepoenger:** Medvirkning gjelder alle barn, ikke bare parter. Vekt etter alder/modenhet. Fast poenglinje — ta den med i hvert case.
- **Typiske feil:** Blande medvirkning med partsrettigheter; anta at barn uten partsstatus ikke har medvirkningsrett; glemme linjen helt.
- **Kvote:** quiz 16 · flashcards 16

---

#### Kapittel 3.3: Minste inngreps prinsipp og retten til familieliv (§ 1-5)
- **id:** `nokut-barnevern-3-3` · **number:** 3.3 · **estimatedMinutes:** 50 · **prerequisites:** `nokut-barnevern-3-1`
- **Kapitteltype:** regel (grunnprinsipp/refreng)
- **description:** Minste inngreps prinsipp (§ 1-5): mildere tiltak skal vurderes før mer inngripende, og inngrep i familielivet krever nødvendighet og forholdsmessighet — broen til EMK art. 8 (Del 9).
- **Eksamensbelegg:** Minste inngrep/familieliv (§ 1-5) er ●●● som del av skjønnsrefrenget; kobles til nødvendighets-/forholdsmessighetskravet og EMK art. 8. Prioritet: perfekt (refreng).
- **Regelkontrakt (gjeldende rett):** **bvl. § 1-5** minste inngreps prinsipp og hensynet til familiebånd `(verifiser)` — mildere tiltak (hjelpetiltak) skal vurderes før inngripende (omsorgsovertakelse); inngrep må være **nødvendig og forholdsmessig**; kobling til **EMK art. 8** og **Grl. § 102** (Del 9) som skranke. **Ny/gammel lov-note:** lovfestet i ny lov.
- **Typetilfeller:** `example`: en omsorgsovertakelse der hjelpetiltak ikke er prøvd/vurdert (§ 1-5-brudd — mildere tiltak først); et inngrep som er nødvendig men uforholdsmessig omfattende. **0/1/2-fasit.**
- **Metodepoenger:** Vurder alltid om mildere tiltak er tilstrekkelig FØR inngripende. Nødvendighet og forholdsmessighet er selvstendige krav. § 1-5 er broen til EMK art. 8.
- **Typiske feil:** Hoppe over vurderingen av mildere tiltak; behandle nødvendighet og forholdsmessighet som ett; overse EMK-koblingen.
- **Kvote:** quiz 16 · flashcards 16

**Prøve-kvote Del 3:** 4 prøver (konkret vs. generisk barnets beste-drill; medvirkning uavhengig av partsstatus; minste inngrep/mildere tiltak-vurdering; forholdsmessighet + EMK-kobling — alle med 0/1/2-fasit og «kan»-skjønnet).

---

### DEL 4 — Hjelpetiltak (§§ 3-1/3-2)

---

#### Kapittel 4.1: Hjelpetiltak — vilkår, pålegg og avslag (§ 3-1)
- **id:** `nokut-barnevern-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `nokut-barnevern-3-3`
- **Kapitteltype:** regel
- **description:** Vilkårene for hjelpetiltak etter § 3-1 (særlig behov, årsakssammenheng, egnet tiltak, positiv endring), adgangen til pålagte hjelpetiltak, og hvordan avslag begrunnes.
- **Eksamensbelegg:** Hjelpetiltak (§ 3-1/3-2) er ●● — testet des 2022, V2024, V2025, og som alternativ hjemmel H2025. Vilkårskjeden er en fast subsumsjonsoppgave. Prioritet: kunne.
- **Regelkontrakt (gjeldende rett):** **bvl. § 3-1** vilkår for hjelpetiltak `(verifiser leddstruktur)` — barnet har et **«særlig behov»** for hjelp, **«på grunn av»** forholdene i hjemmet (årsakssammenheng), tiltaket må være **«egnet»** til å møte behovet og bidra til **«positiv endring»**; adgang til **pålagte** hjelpetiltak i visse tilfeller (uten samtykke) `(verifiser vilkår)`; forholdet til minste inngrep (§ 1-5 — hjelpetiltak før omsorgsovertakelse). **Ny/gammel lov-note:** tilsvarer 1992 § 4-4.
- **Typetilfeller:** Minipraktikum: en familie der barnet har særlig behov men årsaken er omdiskutert (§ 3-1 vilkårskjeden); et pålagt hjelpetiltak der samtykke mangler; et avslag på hjelpetiltak.
- **Metodepoenger:** Spalt vilkårskjeden (særlig behov → årsak → egnet → positiv endring) og drøft hvert for seg. Hjelpetiltak vurderes før omsorgsovertakelse (§ 1-5). Avslutt med «kan»/barnets beste.
- **Typiske feil:** T12 (behandle vilkårskjeden som ett); overse årsakssammenhengen; glemme minste inngrep-koblingen; glemme «kan»/barnets beste.
- **Kvote:** quiz 18 · flashcards 18

---

#### Kapittel 4.2: Plassering som frivillig hjelpetiltak — samtykkekravet (§ 3-2)
- **id:** `nokut-barnevern-4-2` · **number:** 4.2 · **estimatedMinutes:** 45 · **prerequisites:** `nokut-barnevern-4-1`
- **Kapitteltype:** regel/typetilfelle
- **description:** Plassering utenfor hjemmet som frivillig hjelpetiltak etter § 3-2, som krever samtykke fra alle parter — og hvorfor manglende samtykke tvinger over på tvangshjemler.
- **Eksamensbelegg:** § 3-2 (frivillig plassering) er ●● — samtykkekravet er en fast klarleggingsoppgave (C), og manglende samtykke er ofte det som gjør at man må over på § 5-1 (omsorgsovertakelse) eller § 6-1 (frivillig atferd). Prioritet: kunne.
- **Regelkontrakt (gjeldende rett):** **bvl. § 3-2** plassering som frivillig hjelpetiltak `(verifiser)` — krever **samtykke fra alle parter** (foreldre med foreldreansvar, og barnet over en viss alder); frivillig karakter (kan trekkes tilbake); forholdet til § 5-1 (når samtykke mangler → tvang) og § 6-1 (frivillig atferdsopphold). **Ny/gammel lov-note:** ny nummerering.
- **Typetilfeller:** Minipraktikum: en frivillig plassering der én forelder ikke samtykker (klarlegg at § 3-2 ikke er hjemmel → over på § 5-1); et samtykke som trekkes tilbake.
- **Metodepoenger:** Klarlegg samtykke (C) på én-to setninger — mangler det, faller § 3-2 og man må over på tvangshjemmel. Frivillig plassering kan trekkes tilbake.
- **Typiske feil:** T6 (bygge på § 3-2 der samtykke mangler); overse at én manglende samtykke er nok; ikke se broen til § 5-1/§ 6-1.
- **Kvote:** quiz 16 · flashcards 16

**Prøve-kvote Del 4:** 4 prøver (§ 3-1 vilkårskjede-subsumsjon; pålagt hjelpetiltak; § 3-2 samtykkeklarlegging + bro til tvang; avslag på hjelpetiltak — alle med 0/1/2-fasit).

---

### DEL 5 — Akutt- og hastevedtak (§§ 4-2/4-3)

---

#### Kapittel 5.1: Akutt omsorgsovertakelse (§ 4-2)
- **id:** `nokut-barnevern-5-1` · **number:** 5.1 · **estimatedMinutes:** 60 · **prerequisites:** `nokut-barnevern-3-3`
- **Kapitteltype:** regel (bærekapittel)
- **description:** Akuttvedtakets kumulative vilkår etter § 4-2: «fare for» at barnet blir «vesentlig skadelidende» dersom vedtaket ikke «gjennomføres straks», pluss «kan»-skjønnet — spaltet i undervilkår og drøftet hver for seg.
- **Eksamensbelegg:** Akuttvedtak (§ 4-2/4-3) er ●● — testet H2023 (der casen brukte gammel «§ 4-4»-nummerering) og V2026. De kumulative vilkårene, særlig «vesentlig skadelidende» og «straks», er faste 2-poengsdrøftelser. Prioritet: kunne (roterende tung hjemmel). **Rettstilstandsflagg:** H2023-casens «§ 4-4» er 1992-nummerering; ny lov har akutt omsorgsovertakelse i § 4-2 `(verifiser)`.
- **Regelkontrakt (gjeldende rett, ny lov):** **bvl. § 4-2** akutt omsorgsovertakelse `(verifiser paragrafnummer og ledd)` — kumulative vilkår: **«fare for»** (sannsynlighet), at barnet blir **«vesentlig skadelidende»** (skadeterskel), **«dersom vedtaket ikke gjennomføres straks»** (hastekrav/tidsvilkår), og **«kan»**-skjønnet; kompetanse (personelt vilkår — barnevernstjenestens leder/påtalemyndighet, midlertidig vedtak); etterfølgende prøving i nemnda (kort). Sammenhengen: jo større skadepotensial, jo lavere sannsynlighetskrav. **Ny/gammel lov-note:** tilsvarer 1992 § 4-6; H2023-casen brukte «§ 4-4».
- **Typetilfeller:** Minipraktikum (NYSKREVET): en akutt situasjon der «fare» er klar men «straks»-vilkåret er tvilsomt (kunne saken ventet på ordinær behandling?); en der skadepotensialet er stort men sannsynligheten lav.
- **Metodepoenger:** Spalt de tre kumulative undervilkårene og drøft hvert for seg (T12). Siter «vesentlig skadelidende» og «straks» og tolk terskelen. Avslutt med «kan»/barnets beste. Klarlegg det personelle vilkåret (C).
- **Typiske feil:** T12 (behandle akutt-vilkåret som ett); overse «straks»-vilkåret (kunne saken ventet?); T9 (glemme «kan»/barnets beste); bruke 1992-nummerering (§ 4-4/§ 4-6).
- **Kvote:** quiz 18 · flashcards 18

---

#### Kapittel 5.2: Akuttvedtak ved atferd (§ 4-3)
- **id:** `nokut-barnevern-5-2` · **number:** 5.2 · **estimatedMinutes:** 40 · **prerequisites:** `nokut-barnevern-5-1`
- **Kapitteltype:** regel
- **description:** Akuttplassering på atferdsgrunnlag etter § 4-3, forskjellen fra akutt omsorgsovertakelse (§ 4-2), og forholdet til de ordinære atferdshjemlene (§§ 6-1/6-2).
- **Eksamensbelegg:** Akutt atferd (§ 4-3) er den mindre testede akutthjemmelen, men pensum og roterer med § 4-2. Prioritet: kunne (kortere, fullstendig).
- **Regelkontrakt (gjeldende rett):** **bvl. § 4-3** akutt ved atferd `(verifiser ledd)` — vilkår knyttet til alvorlig/akutt atferdsfare; forskjellen fra § 4-2 (omsorgssvikt vs. barnets egen atferd); broen til § 6-2 (ordinær atferdsplassering). **Ny/gammel lov-note:** tilsvarer deler av 1992 § 4-25/§ 4-6.
- **Typetilfeller:** Minipraktikum: en akutt atferdssituasjon → riktig hjemmel § 4-3 vs. § 4-2 vs. § 6-2.
- **Metodepoenger:** Skill atferdsgrunnlaget (barnets egen atferd) fra omsorgssvikt (§ 4-2). Akutt (§ 4-3) vs. ordinær (§ 6-2). Avslutt med «kan»/barnets beste.
- **Typiske feil:** T6 (§ 4-2 der § 4-3 er riktig, eller motsatt); blande akutt og ordinær atferdshjemmel.
- **Kvote:** quiz 14 · flashcards 14

---

#### Kapittel 5.3: Typetilfelle — hastevedtaket under press
- **id:** `nokut-barnevern-5-3` · **number:** 5.3 · **estimatedMinutes:** 45 · **prerequisites:** `nokut-barnevern-5-1`
- **Kapitteltype:** typetilfelle
- **description:** Det gjennomgående akutt-typetilfellet: barnevernstjenesten fatter et hastevedtak, og kandidaten må prøve om «straks»-vilkåret og skadeterskelen holder — med saksbehandlingen (fvl.) og barnets beste som medspørsmål.
- **Eksamensbelegg:** Akuttcase kombinerer typisk den materielle hjemmelen (§ 4-2) med et prosessuelt spørsmål (forhåndsvarsel-unntaket fvl. § 16 tredje ledd — varsel kan hindre gjennomføring) og barnets beste. Prioritet: kunne (typetilfelle).
- **Regelkontrakt (tvistepunkt-kartet):** (1) materielt: § 4-2 kumulative vilkår (kap. 5.1); (2) prosessuelt: forhåndsvarsel og unntaket ved akutt (fvl. § 16 tredje ledd, kap. 2.2); (3) medvirkning (§ 1-4) og barnets beste (§ 1-3); (4) etterfølgende prøving. Kombinasjonsmønster: materiell akutthjemmel + prosessuelt forhåndsvarsel-unntak.
- **Typetilfeller:** Gjennomdrøftet `example` (NYSKREVET, full case) med margkommentarer og **0/1/2-momentrubrikk**; øvelsesvarianter flytter tvilen (straks-vilkåret klart vs. tvilsomt; skadepotensial stort vs. lite).
- **Metodepoenger:** Akuttcase har alltid et prosessuelt medspørsmål (forhåndsvarsel-unntak). Spalt § 4-2, koble fvl. § 16, avslutt med barnets beste.
- **Typiske feil:** T11 (glemme det prosessuelle medspørsmålet); overse forhåndsvarsel-unntaket; T12; T9.
- **Kvote:** quiz 16 · flashcards 14

**Prøve-kvote Del 5:** 4 prøver (§ 4-2 kumulativ vilkårsspalting; «straks»-vilkår-drill; § 4-3 vs. § 4-2 hjemmelsvalg; kombinert akutt + forhåndsvarsel-unntak-case — alle med 0/1/2-fasit).

---

### DEL 6 — Omsorgsovertakelse og oppheving (§§ 5-1/5-7)

---

#### Kapittel 6.1: Omsorgsovertakelse (§ 5-1)
- **id:** `nokut-barnevern-6-1` · **number:** 6.1 · **estimatedMinutes:** 60 · **prerequisites:** `nokut-barnevern-3-3`
- **Kapitteltype:** regel (bærekapittel)
- **description:** Vilkårene for omsorgsovertakelse etter § 5-1 (bokstav a–d som alternative grunnlag), beviskravet, kravet om at hjelpetiltak ikke er tilstrekkelig (§ 1-5), og «kan»-skjønnet.
- **Eksamensbelegg:** Omsorgsovertakelse (§ 5-1) er ●● — testet V2023 og H2024. De alternative grunnlagene (bokstav a–d) og forholdet til hjelpetiltak (minste inngrep) er faste. Prioritet: kunne (roterende tung hjemmel). **Rettstilstandsflagg:** § 5-1 = ny nummerering for 1992 § 4-12.
- **Regelkontrakt (gjeldende rett, ny lov):** **bvl. § 5-1** omsorgsovertakelse `(verifiser bokstav a–d og ledd)` — **alternative grunnlag** (bokstav a alvorlige mangler ved daglig omsorg / personlig kontakt; b sykt/funksjonshemmet barn uten dekket særlig behov; c mishandling/overgrep; d overveiende sannsynlig alvorlig skade av barnets helse/utvikling); at **hjelpetiltak ikke kan skape tilfredsstillende forhold** (nødvendighetsvilkår, § 1-5); beviskrav (alminnelig overvekt for a–c, «overveiende sannsynlig» for d) `(verifiser)`; **«kan»**-skjønnet; nemndas kompetanse. **Ny/gammel lov-note:** tilsvarer 1992 § 4-12.
- **Typetilfeller:** Minipraktikum (NYSKREVET): en familie med alvorlige omsorgsmangler der bokstav a er aktuell men hjelpetiltak ikke er prøvd; en sak under bokstav d med usikkert bevisbilde («overveiende sannsynlig»).
- **Metodepoenger:** Identifiser riktig grunnlag (bokstav a–d er alternative — ett holder). Drøft nødvendighetsvilkåret (hjelpetiltak ikke tilstrekkelig, § 1-5). Bruk riktig beviskrav. Avslutt med «kan»/barnets beste.
- **Typiske feil:** Drøfte alle bokstaver likt (alternative — velg den aktuelle); overse nødvendighetsvilkåret/hjelpetiltak; feil beviskrav for bokstav d; T9.
- **Kvote:** quiz 20 · flashcards 20

---

#### Kapittel 6.2: Oppheving og tilbakeføring (§ 5-7)
- **id:** `nokut-barnevern-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `nokut-barnevern-6-1`
- **Kapitteltype:** regel
- **description:** Tilbakeføringsterskelen etter § 5-7: «overveiende sannsynlig» at foreldrene kan gi «forsvarlig omsorg», og tilknytningsunntaket (barnet er blitt «så knyttet til mennesker og miljø» at flytting kan gi «alvorlige problemer»).
- **Eksamensbelegg:** Oppheving (§ 5-7) er ●● — testet V2023 (tilbakeføring prinsipalt, samvær subsidiært — prinsipal/subsidiær-struktur). Den skjerpede beviskravsterskelen «overveiende sannsynlig» og tilknytningsunntaket er faste 2-poengsdrøftelser. Prioritet: kunne. **Rettstilstandsflagg:** § 5-7 er **materielt videreført** fra 1992 § 4-21 → 1992-rettskilder relevante (nevnt i veiledningen).
- **Regelkontrakt (gjeldende rett, ny lov):** **bvl. § 5-7** oppheving/tilbakeføring `(verifiser)` — vedtaket skal oppheves når det er **«overveiende sannsynlig»** at foreldrene kan gi barnet **«forsvarlig omsorg»**; **tilknytningsunntak**: likevel ikke oppheve dersom barnet er blitt **«så knyttet til mennesker og miljø»** der det er at flytting kan gi **«alvorlige problemer»** `(verifiser)`; prinsipal/subsidiær (tilbakeføring før økt samvær); barnets beste. **Ny/gammel lov-note:** materielt videreført fra 1992 § 4-21 — 1992-praksis relevant.
- **Typetilfeller:** Minipraktikum (NYSKREVET): en tilbakeføringssak der foreldrene har bedret seg men barnet er sterkt knyttet til fosterhjemmet (skjerpet beviskrav + tilknytningsunntak); prinsipal tilbakeføring, subsidiær økt samvær.
- **Metodepoenger:** Bruk det skjerpede beviskravet «overveiende sannsynlig». Tilknytningsunntaket kan blokkere tilbakeføring selv om hovedvilkåret er oppfylt. Prinsipal før subsidiær. § 5-7 er materielt videreført — 1992-praksis kan brukes.
- **Typiske feil:** Bruke alminnelig overvekt der «overveiende sannsynlig» kreves; overse tilknytningsunntaket; behandle subsidiær påstand før prinsipal (T/struktur); T9.
- **Kvote:** quiz 18 · flashcards 18

---

#### Kapittel 6.3: Samvær etter omsorgsovertakelse (§§ 7-1/7-2)
- **id:** `nokut-barnevern-6-3` · **number:** 6.3 · **estimatedMinutes:** 40 · **prerequisites:** `nokut-barnevern-6-1`
- **Kapitteltype:** regel
- **description:** Retten til samvær etter omsorgsovertakelse (§§ 7-1/7-2), samværets omfang, og forholdet til gjenforeningsmålsettingen (EMK art. 8, Del 9).
- **Eksamensbelegg:** Samvær (§§ 7-1/7-2) er ● — testet V2023 (som subsidiært spørsmål etter tilbakeføring). Kobles til EMK art. 8 og gjenforeningsmålet. Prioritet: kjenne (kortere, fullstendig).
- **Regelkontrakt (gjeldende rett):** **bvl. §§ 7-1/7-2** samvær `(verifiser)` — utgangspunkt om rett til samvær for barn og foreldre; fastsettelse av omfang; gjenforeningsmålsettingen; forholdet til EMK art. 8 (samvær som ledd i gjenforening — Strand Lobben-linjen, Del 9); barnets beste styrer omfanget. **Ny/gammel lov-note:** tilsvarer 1992 § 4-19.
- **Typetilfeller:** Minipraktikum: fastsettelse/reduksjon av samvær der barnets beste og gjenforeningsmålet trekker i hver sin retning.
- **Metodepoenger:** Samvær er utgangspunktet; omfang styres av barnets beste + gjenforeningsmål. EMK art. 8 setter skranke mot for lite samvær.
- **Typiske feil:** Overse gjenforeningsmålet/EMK art. 8; fastsette samvær uten barnets beste-forankring.
- **Kvote:** quiz 14 · flashcards 14

**Prøve-kvote Del 6:** 4 prøver (§ 5-1 alternative grunnlag + nødvendighetsvilkår; § 5-7 skjerpet beviskrav + tilknytningsunntak; prinsipal/subsidiær tilbakeføring/samvær; samvær + EMK — alle med 0/1/2-fasit).

---

### DEL 7 — Atferd og institusjon (§§ 6-1/6-2 + tvang)

---

#### Kapittel 7.1: Frivillig atferdsopphold (§ 6-1)
- **id:** `nokut-barnevern-7-1` · **number:** 7.1 · **estimatedMinutes:** 40 · **prerequisites:** `nokut-barnevern-3-3`
- **Kapitteltype:** regel
- **description:** Frivillig plassering på institusjon på atferdsgrunnlag etter § 6-1, samtykkekravet, og forholdet til tvangshjemmelen § 6-2.
- **Eksamensbelegg:** Atferd/institusjon (§ 6-1/6-2) er ●● — testet H2023 og H2025 (der § 6-1 var tiltenkt, § 3-2 jf. § 3-1 godtatt som forsvarlig alternativ i alt.matrise). § 6-1 samtykkekrav er fast klarlegging. Prioritet: kunne. **Rettstilstandsflagg:** § 6-1 = ny nummerering; V2024 viste til «kapittel 6» (konsistent ny lov).
- **Regelkontrakt (gjeldende rett):** **bvl. § 6-1** frivillig atferdsopphold `(verifiser)` — krever **samtykke**; vilkår knyttet til atferdsvansker; forholdet til § 6-2 (tvang når samtykke mangler eller alvoret krever det). **Ny/gammel lov-note:** tilsvarer 1992 § 4-26. **Alt.matrise-note (H2025):** § 3-2 jf. § 3-1 ble godtatt som forsvarlig alternativ hjemmel til § 6-1 — feil forsvarlig hjemmel nulles ikke, men gir redusert uttelling (T6).
- **Typetilfeller:** Minipraktikum: en ungdom med atferdsvansker som samtykker (§ 6-1) vs. som ikke samtykker (over på § 6-2).
- **Metodepoenger:** Klarlegg samtykke (C). Mangler det, over på § 6-2. Riktig hjemmelsvalg premieres, men forsvarlig alternativ (§ 3-2) nulles ikke.
- **Typiske feil:** T6 (§ 6-1 uten samtykke); blande frivillig og tvang; overdrøfte samtykke.
- **Kvote:** quiz 16 · flashcards 16

---

#### Kapittel 7.2: Alvorlige atferdsvansker — tvangsplassering (§ 6-2)
- **id:** `nokut-barnevern-7-2` · **number:** 7.2 · **estimatedMinutes:** 55 · **prerequisites:** `nokut-barnevern-7-1`
- **Kapitteltype:** regel (bærekapittel)
- **description:** Tvangsplassering ved alvorlige atferdsvansker etter § 6-2: de alternative atferdsgrunnlagene (bokstav a–c), forsvarlighetskravet og minste inngreps prinsipp i institusjonsvalget.
- **Eksamensbelegg:** § 6-2 (alvorlige atferdsvansker) er ●● — testet H2023 og H2025. De alternative grunnlagene (bokstav a–c), forsvarlighet og minste inngrep er faste. Prioritet: kunne. **Rettstilstandsflagg:** § 6-2 = ny nummerering for 1992 § 4-24.
- **Regelkontrakt (gjeldende rett):** **bvl. § 6-2** alvorlige atferdsvansker `(verifiser bokstav a–c, ledd)` — **alternative grunnlag** (a alvorlig/gjentatt kriminalitet; b vedvarende rusmisbruk; c annen form for utpreget normløs atferd) `(verifiser ordlyd)`; **forsvarlighetskrav** (institusjonen må være faglig og materielt i stand); **minste inngrep** i valg av tiltak/varighet; «kan»-skjønnet; nemndas kompetanse. **Ny/gammel lov-note:** tilsvarer 1992 § 4-24.
- **Typetilfeller:** Minipraktikum (NYSKREVET): en ungdom der bokstav b (rusmisbruk) er aktuell men «vedvarende» er tvilsomt; forsvarlighet av valgt institusjon.
- **Metodepoenger:** Grunnlagene a–c er alternative — velg den aktuelle. Tolk «vedvarende»/«utpreget». Drøft forsvarlighet og minste inngrep. Avslutt med «kan»/barnets beste.
- **Typiske feil:** Drøfte alle bokstaver likt; overse forsvarlighetskravet; T9; feil beviskrav.
- **Kvote:** quiz 18 · flashcards 18

---

#### Kapittel 7.3: Tvang på institusjon — rettighetsforskriften
- **id:** `nokut-barnevern-7-3` · **number:** 7.3 · **estimatedMinutes:** 40 · **prerequisites:** `nokut-barnevern-7-2`
- **Kapitteltype:** regel
- **description:** Bruk av tvang under institusjonsopphold (kroppsvisitasjon, fysisk inngripen, begrensninger) etter rettighetsforskriften/bvl. kap. 10, og skrankene minste inngrep og forholdsmessighet.
- **Eksamensbelegg:** Tvang på institusjon er ● — testet V2024 (kroppsvisitasjon/fysisk inngripen). Prioritet: kjenne (kortere, fullstendig). **Rettstilstandsflagg:** hjemmel i bvl. kap. 10 og rettighetsforskriften `(verifiser hjemmel/forskrift)`.
- **Regelkontrakt (gjeldende rett):** **bvl. kap. 10 / rettighetsforskriften** `(verifiser)` — vilkår for tvangstiltak under opphold (kroppsvisitasjon, ransaking, fysisk inngripen, begrensning i bevegelsesfrihet); krav om nødvendighet, forholdsmessighet og minste inngrep; dokumentasjon/klageadgang. **Ny/gammel lov-note:** rettighetene er styrket/samlet i ny lov.
- **Typetilfeller:** Minipraktikum: en kroppsvisitasjon på institusjon → hjemmel + forholdsmessighet.
- **Metodepoenger:** Tvang krever klar hjemmel + forholdsmessighet + minste inngrep. Dokumentasjon og klageadgang er prosessuelle poeng.
- **Typiske feil:** Anta at institusjonen har fri tvangsadgang; overse forholdsmessighet; feil hjemmel.
- **Kvote:** quiz 14 · flashcards 14

**Prøve-kvote Del 7:** 4 prøver (§ 6-1 samtykkeklarlegging + alt.hjemmel; § 6-2 alternative grunnlag + forsvarlighet; tvang på institusjon + forholdsmessighet; kombinert atferdscase — alle med 0/1/2-fasit).

---

### DEL 8 — Opplysningsplikt og taushetsplikt (§ 13-4)

---

#### Kapittel 8.1: Opplysningsplikt til barnevernet (§ 13-4)
- **id:** `nokut-barnevern-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `nokut-barnevern-2-2`
- **Kapitteltype:** regel (bærekapittel)
- **description:** Opplysningsplikten til barnevernet etter § 13-4: de personelle vilkårene (hvem plikten gjelder) og de materielle vilkårene (bokstav a–p — når plikten utløses), og hvordan den går foran taushetsplikten.
- **Eksamensbelegg:** Opplysningsplikt (§ 13-4) er ●● — testet des 2022 og V2026. De personelle og materielle vilkårene (bokstav a–p) og forholdet til taushetsplikt er faste kumulative subsumsjoner. Prioritet: kunne. **Rettstilstandsflagg:** § 13-4 = ny nummerering for 1992 § 6-4.
- **Regelkontrakt (gjeldende rett):** **bvl. § 13-4** opplysningsplikt `(verifiser personelle + materielle vilkår, bokstav a–p)` — **personelle vilkår**: hvem plikten påhviler (offentlige myndigheter, en rekke yrkesutøvere med lovbestemt taushetsplikt); **materielle vilkår**: når plikten utløses (grunn til å tro at barn utsettes for alvorlig omsorgssvikt/mishandling, jf. bokstavene) `(verifiser)`; **forholdet til taushetsplikt**: opplysningsplikten **går foran** taushetsplikten (unntak fra taushetsplikt) — hpl. §§ 21, 33 for helsepersonell; skillet mellom **plikt til å melde av eget tiltak** og **plikt til å gi opplysninger på pålegg**. **Ny/gammel lov-note:** tilsvarer 1992 § 6-4.
- **Typetilfeller:** Minipraktikum (NYSKREVET): en fastlege/lærer som er usikker på om opplysningsplikten er utløst (personelt + materielt vilkår + taushetsplikt); pålegg om opplysninger vs. meldeplikt av eget tiltak.
- **Metodepoenger:** Spalt personelle og materielle vilkår (kumulative). Opplysningsplikten går foran taushetsplikten når vilkårene er oppfylt. Skill meldeplikt (eget tiltak) fra opplysningsplikt på pålegg.
- **Typiske feil:** T12 (ikke spalte personelle/materielle vilkår); anta at taushetsplikten alltid går foran; blande meldeplikt og pålegg; feil terskel for utløsning.
- **Kvote:** quiz 20 · flashcards 20

---

#### Kapittel 8.2: Typetilfelle — taushetsplikt vs. opplysningsplikt
- **id:** `nokut-barnevern-8-2` · **number:** 8.2 · **estimatedMinutes:** 40 · **prerequisites:** `nokut-barnevern-8-1`
- **Kapitteltype:** typetilfelle
- **description:** Det gjennomgående opplysningsplikt-typetilfellet: en yrkesutøver med taushetsplikt (fastlege, lærer, helsesykepleier) som må avklare om og hvordan opplysningsplikten til barnevernet slår gjennom.
- **Eksamensbelegg:** Opplysningsplikt-case kombinerer § 13-4 med taushetspliktsregler (hpl. §§ 21, 33) og ofte et prosessuelt spørsmål (kan barnevernet pålegge opplysningsplikt?). Prioritet: kunne (typetilfelle).
- **Regelkontrakt (tvistepunkt-kartet):** (1) er den personelle plikten oppfylt (hvem)? (2) er de materielle vilkårene utløst (terskel)? (3) forholdet til taushetsplikten (hpl. §§ 21, 33 — opplysningsplikt som unntak); (4) meldeplikt av eget tiltak vs. pålegg fra barnevernet/nemnda; (5) barnets beste. Kombinasjonsmønster: § 13-4 + hpl. + prosessuelt pålegg.
- **Typetilfeller:** Gjennomdrøftet `example` (NYSKREVET, full case) med margkommentarer og **0/1/2-momentrubrikk**; øvelsesvarianter (terskel klart/tvilsomt utløst; pålegg vs. eget tiltak).
- **Metodepoenger:** Personelt + materielt vilkår + taushetsplikt-forholdet i rekkefølge. Opplysningsplikt slår gjennom taushetsplikt når vilkårene er oppfylt.
- **Typiske feil:** T12; anta taushetsplikt trumfer; overse pålegg-hjemmelen; T9.
- **Kvote:** quiz 16 · flashcards 14

**Prøve-kvote Del 8:** 4 prøver (§ 13-4 personelle vilkår-drill; materielle vilkår/terskel; taushetsplikt vs. opplysningsplikt; meldeplikt vs. pålegg — alle med 0/1/2-fasit).

---

### DEL 9 — EMK art. 8, Grunnloven § 102 og barnekonvensjonen

---

#### Kapittel 9.1: EMK art. 8 og Grunnloven § 102 — inngrepsskranken
- **id:** `nokut-barnevern-9-1` · **number:** 9.1 · **estimatedMinutes:** 45 · **prerequisites:** `nokut-barnevern-3-3`
- **Kapitteltype:** regel (fordypning)
- **description:** Retten til familieliv etter EMK art. 8 og Grl. § 102 som skranke for barnevernsinngrep: kravene til lovhjemmel, legitimt formål, nødvendighet og forholdsmessighet — og gjenforeningsmålsettingen fra EMD-praksis.
- **Eksamensbelegg:** EMK art. 8 / Grl. § 102 er ● — premieres for de beste besvarelsene (nødvendighet/forholdsmessighet, gjenforeningsmål), men er sjelden krav for bestått. Kobles til § 1-5 (minste inngrep). Prioritet: kjenne (fordypningsverktøy).
- **Regelkontrakt (gjeldende rett):** **EMK art. 8** rett til privat- og familieliv — inngrep tillatt bare hvis (1) i samsvar med lov, (2) legitimt formål, (3) **nødvendig i et demokratisk samfunn** (forholdsmessighet); **gjenforeningsmålsettingen** (omsorgsovertakelse skal som utgangspunkt være midlertidig — EMD-linjen, Strand Lobben mot Norge m.fl., referert argumentativt); **Grl. § 102** som parallell skranke; forholdet til bvl. § 1-5. **Metodenote:** trekk inn EMK der inngrepets forholdsmessighet er tvilsom — det løfter besvarelsen, men ordlydsnær bvl.-metode bærer bestått.
- **Typetilfeller:** `example`: en omsorgsovertakelse/samværsbegrensning prøvd mot art. 8-forholdsmessighet og gjenforeningsmålet. **0/1/2-fasit** (der EMK gir pluss-poeng).
- **Metodepoenger:** EMK art. 8 er en forholdsmessighetsskranke, ikke en selvstendig inngrepshjemmel. Gjenforeningsmålet påvirker samvær og varighet. Bruk der forholdsmessighet er tvilsom.
- **Typiske feil:** Bruke EMK som inngrepshjemmel; ramse opp art. 8 uten forholdsmessighetsdrøftelse; tro at EMK er krav for bestått (det er pluss).
- **Kvote:** quiz 16 · flashcards 16

---

#### Kapittel 9.2: Barnekonvensjonen som tolkningsmoment (art. 3 og art. 12)
- **id:** `nokut-barnevern-9-2` · **number:** 9.2 · **estimatedMinutes:** 35 · **prerequisites:** `nokut-barnevern-9-1`
- **Kapitteltype:** regel (fordypning)
- **description:** Barnekonvensjonens betydning: barnets beste (art. 3) og retten til å bli hørt (art. 12) som tolkningsmomenter som forsterker §§ 1-3/1-4, og konvensjonens forrang.
- **Eksamensbelegg:** Barnekonvensjonen er ● — trekkes inn som tolkningsmoment som forsterker barnets beste og medvirkning; pluss-poeng, ikke krav. Prioritet: kjenne.
- **Regelkontrakt (gjeldende rett):** **barnekonvensjonen art. 3** (barnets beste som grunnleggende hensyn) og **art. 12** (retten til å bli hørt) — inkorporert via menneskerettsloven, med forrang; brukes som tolkningsmomenter til bvl. §§ 1-3/1-4; hvordan konvensjonen styrker forankringen. **Metodenote:** referer argumentativt (hva artikkelen brukes til), ikke i lengde.
- **Typetilfeller:** `example`: barnets beste (§ 1-3) forsterket av BK art. 3; medvirkning (§ 1-4) forsterket av BK art. 12.
- **Metodepoenger:** BK art. 3/12 forsterker de norske grunnprinsippene. Forrang ved motstrid. Pluss-poeng.
- **Typiske feil:** Sitere BK uten å koble til bvl.-vilkåret; tro at BK er krav for bestått.
- **Kvote:** quiz 14 · flashcards 14

**Prøve-kvote Del 9:** 4 prøver (EMK art. 8 forholdsmessighetsdrøftelse; gjenforeningsmål + samvær; BK art. 3 forsterkning av barnets beste; BK art. 12 + medvirkning — alle med 0/1/2-fasit, EMK/BK som pluss-poeng).

---

### DEL 10 — Eksamenstrening: praktikum og simulering

---

#### Kapittel 10.1: Se problemstillingene — drill i «påstår»-jakt og hjemmelsvalg
- **id:** `nokut-barnevern-10-1` · **number:** 10.1 · **estimatedMinutes:** 50 · **prerequisites:** `nokut-barnevern-0-2`
- **Kapitteltype:** eksamenstrening (identifikasjonsdrill)
- **description:** Den ferdigheten som avgjør bestått: å lese et sammenhengende case, finne alle hovedproblemstillingene (følg «påstår»-markørene), spalte dem i undervilkår og velge riktig hjemmel — før man begynner å skrive.
- **Eksamensbelegg:** Å overse en hel hovedproblemstilling er nesten sikker ikke bestått (T5). Casene markerer hver hovedproblemstilling med «påstår/gjør gjeldende/påstand» og reiser typisk minst én prosessuell + én/to materielle. Prioritet: perfekt (meta).
- **Regelkontrakt (metode):** systematisk gjennomlesning; markere «påstår»-setningene; koble hver til del av loven (prosess via § 12-1 vs. materiell tiltakstrapp); spalte i undervilkår; sette opp disposisjon med tidsfordeling (5 t / antall problemstillinger).
- **Typetilfeller:** 2–3 nyskrevne case-utdrag → vist problemstillingsjakt + hjemmelsvalg + disposisjon (ikke full besvarelse). Med **0/1/2-fasit på identifikasjonen** (så mange poeng tapes allerede her).
- **Metodepoenger:** Finn ALLE problemstillingene før du skriver. Prosessuelle spørsmål gjemmer seg ofte (part, forhåndsvarsel). Fordel tiden på antall problemstillinger.
- **Typiske feil:** T5 (overse en hovedproblemstilling — særlig den prosessuelle); T11 (feil del av loven); starte å skrive før man har kartlagt.
- **Kvote:** quiz 16 · flashcards 12

---

#### Kapittel 10.2: Modellcase 1 — prosessuelt tyngdepunkt (forvaltningsloven + akutt)
- **id:** `nokut-barnevern-10-2` · **number:** 10.2 · **estimatedMinutes:** 70 · **prerequisites:** `nokut-barnevern-10-1`
- **Kapitteltype:** praktikum-modellbesvarelse
- **description:** Komplett nyskrevet case med prosessuelt tyngdepunkt: forhåndsvarsel/part (fvl. via § 12-1) + akutt omsorgsovertakelse (§ 4-2) + barnets beste — med full momentrubrikk-fasit (0/1/2 per linje) og beståttgrense.
- **Eksamensbelegg:** Speiler kombinasjonsmønsteret «minst én prosessuell + én materiell» (V2026-typen: forhåndsvarsel + akutt). Prioritet: perfekt (modellbesvarelse).
- **Regelkontrakt:** hele casens hjemler: fvl. § 16 forhåndsvarsel + unntak (§ 12-1-broen), fvl. § 2 e part; bvl. § 4-2 akutt (kumulative vilkår); §§ 1-3/1-4/1-5 refreng. 3 hovedproblemstillinger markert med «påstår».
- **Modellbesvarelse (obligatorisk struktur):**
  - Komplett nyskrevet case (nye parter, barn, kommune, hendelser).
  - `collapsible` **Modellbesvarelse på beståttnivå og over** — full IRAC-besvarelse med ordlydssitat og for/mot.
  - `collapsible` **Kommentert svak besvarelse** — samme case løst «tynt» (teoretisering, overser det prosessuelle), med margnotater om nøyaktig hvor poengene faller og hvorfor den havner UNDER terskelen.
  - `tip` **Sensorblikket: MOMENTRUBRIKK-FASIT** — en tabell med hver rubrikklinje à **0/1/2** (byggekloss A–G per vilkår), maks poengsum og **beståttgrense (~50 %)**, slik at studenten kan poengsette begge besvarelsene selv.
- **Metodepoenger:** Se det prosessuelle først (T11/T5). Spalt akutt-vilkåret. Avslutt med barnets beste. Fordel tiden.
- **Typiske feil:** T5 (overse forhåndsvarsel-spørsmålet); T1; T9; T12.
- **Kvote:** quiz 14 · flashcards 12

---

#### Kapittel 10.3: Modellcase 2 — materielt tyngdepunkt (omsorgsovertakelse/tilbakeføring)
- **id:** `nokut-barnevern-10-3` · **number:** 10.3 · **estimatedMinutes:** 70 · **prerequisites:** `nokut-barnevern-10-1`
- **Kapitteltype:** praktikum-modellbesvarelse
- **description:** Komplett nyskrevet case med materielt tyngdepunkt: omsorgsovertakelse (§ 5-1) eller oppheving/tilbakeføring (§ 5-7) med prinsipal/subsidiær-struktur + habilitet (fvl.) + barnets beste — full momentrubrikk-fasit (0/1/2) og beståttgrense.
- **Eksamensbelegg:** Speiler V2023/H2024-typen (omsorgsovertakelse/tilbakeføring, prinsipal/subsidiær, prosessuelt medspørsmål). Prioritet: perfekt (modellbesvarelse).
- **Regelkontrakt:** bvl. § 5-1 (alternative grunnlag + nødvendighet) eller § 5-7 (skjerpet beviskrav + tilknytningsunntak, prinsipal/subsidiær med samvær §§ 7-1/7-2); fvl. §§ 6–8 habilitet (§ 12-1-broen); §§ 1-3/1-4/1-5 refreng; EMK art. 8 som pluss. 3–4 hovedproblemstillinger markert med «påstår».
- **Modellbesvarelse (obligatorisk struktur):** som 10.2 — komplett nyskrevet case + `collapsible` beståttnivå-besvarelse + `collapsible` kommentert svak besvarelse + `tip` **MOMENTRUBRIKK-FASIT (0/1/2 per linje + beståttgrense)**.
- **Metodepoenger:** Prinsipal før subsidiær. Skjerpet beviskrav ved § 5-7. Skill partsrettigheter fra medvirkning. EMK som pluss.
- **Typiske feil:** Bruke alminnelig overvekt der «overveiende sannsynlig» kreves; behandle subsidiær før prinsipal; T9; T10.
- **Kvote:** quiz 14 · flashcards 12

---

#### Kapittel 10.4: Modellcase 3 — opplysningsplikt + atferd (bredt case)
- **id:** `nokut-barnevern-10-4` · **number:** 10.4 · **estimatedMinutes:** 70 · **prerequisites:** `nokut-barnevern-10-1`
- **Kapitteltype:** praktikum-modellbesvarelse
- **description:** Komplett nyskrevet bredt case: opplysningsplikt/taushetsplikt (§ 13-4 + hpl.) + alvorlige atferdsvansker (§ 6-2) + medvirkning/barnets beste — full momentrubrikk-fasit (0/1/2) og beståttgrense.
- **Eksamensbelegg:** Speiler des 2022/H2023/H2025-typen (opplysningsplikt; atferd/institusjon; alt.hjemmel-toleranse). Viser at case er brede, ikke dype — 3 hovedproblemstillinger fra ulike deler av loven. Prioritet: perfekt (modellbesvarelse).
- **Regelkontrakt:** bvl. § 13-4 (personelle + materielle vilkår + taushetsplikt hpl. §§ 21, 33); bvl. § 6-2 (alternative grunnlag + forsvarlighet) med § 3-2/§ 6-1 som forsvarlig alternativ (alt.matrise-logikk); §§ 1-3/1-4 refreng. 3 hovedproblemstillinger markert med «påstår».
- **Modellbesvarelse (obligatorisk struktur):** som 10.2/10.3 — komplett nyskrevet case + `collapsible` beståttnivå + `collapsible` kommentert svak besvarelse + `tip` **MOMENTRUBRIKK-FASIT (0/1/2 per linje + beståttgrense)** som eksplisitt viser alt.matrise-uttelling for forsvarlig feil hjemmel (T6, ikke nullet).
- **Metodepoenger:** Spalt § 13-4 personelt/materielt. Feil forsvarlig hjemmel nulles ikke (alt.matrise). Bredde: dekk alle tre problemstillingene solid framfor å briljere på én.
- **Typiske feil:** T12; T5; anta taushetsplikt trumfer; T9.
- **Kvote:** quiz 14 · flashcards 12

---

#### Kapittel 10.5: Eksamenssimulering — 5-timers-caset under klokka
- **id:** `nokut-barnevern-10-5` · **number:** 10.5 · **estimatedMinutes:** 75 · **prerequisites:** `nokut-barnevern-10-4`
- **Kapitteltype:** eksamenstrening (simulering)
- **description:** En tidsstyrt fullskala eksamenssimulering: ett komplett nyskrevet 5-timers-case med 3–4 hovedproblemstillinger, en tidsplan, og en selvvurderingsrubrikk (0/1/2 per moment) med beståttgrense — å kjøre siste uke før eksamen.
- **Eksamensbelegg:** Speiler det gjeldende 5-timers-regimet (maks 71–79 p, beståttgrense 37–38, 3–4 hovedproblemstillinger). Prioritet: perfekt (meta/simulering).
- **Regelkontrakt:** et bredt case som kombinerer prosess (fvl. via § 12-1) + to materielle hjemler + refreng §§ 1-3/1-4/1-5; tidsplan (kartlegging 20 min, deretter jevn fordeling per problemstilling); full selvvurderingsrubrikk.
- **Modellbesvarelse (obligatorisk struktur):** komplett nyskrevet case + tidsplan + `collapsible` full beståttnivå-besvarelse + `tip` **SELVVURDERINGSRUBRIKK (0/1/2 per moment, maks + beståttgrense)** + `tip` **Sensorblikket** (hva som ga uttelling, vekting mellom problemstillingene, hvor terskelen ligger).
- **Metodepoenger:** Kartlegg først, fordel tiden, dekk bredt. Selvpoengsett mot rubrikken og sjekk at du er over terskelen på tvers av alle problemstillinger.
- **Typiske feil:** Skrive seg tom på problemstilling 1; overse den prosessuelle; ikke rekke «kan»/barnets beste (T9); glemme tidsstyring.
- **Kvote:** quiz 14 · flashcards 10

**Prøve-kvote Del 10:** 4 prøver (problemstillingsjakt-drill på nye case-utdrag; ett prosessuelt-tungt minipraktikum m/rubrikk; ett materielt-tungt minipraktikum m/rubrikk; ett bredt kombinasjonscase m/rubrikk — alle med 0/1/2-fasit og beståttgrense).

---

## 5. Kvotesammendrag (AUTORITATIV for alle senere faser)

> Summeringskontroll under tabellen. Kvotene per kapittel over er fasit; denne tabellen
> aggregerer per del. Flashcard-tettheten er høy (~17/kap.) fordi barnevernsretten er
> paragraf- og vilkårsrik: hvert institutt har kumulative vilkårslister, hver bestemmelse
> har gammel↔ny nummerering, og metodebyggeklossene (A–G, T1–T12) egner seg som kort —
> jf. audit-lærdommen om at begrepsrike drøftingsfag skal ligge høyt (550–650).

| Del | Kap. | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 — Eksamenskart og praktikumshåndverk | 5 | 78 | 74 | 4 |
| 1 — Juridisk metode i barnevernretten | 4 | 70 | 68 | 4 |
| 2 — Barnevernslovens system og saksbehandling | 5 | 86 | 86 | 4 |
| 3 — Barnets beste og medvirkning (refreng) | 3 | 50 | 50 | 4 |
| 4 — Hjelpetiltak | 2 | 34 | 34 | 4 |
| 5 — Akutt- og hastevedtak | 3 | 48 | 46 | 4 |
| 6 — Omsorgsovertakelse og oppheving | 3 | 52 | 52 | 4 |
| 7 — Atferd og institusjon | 3 | 48 | 48 | 4 |
| 8 — Opplysningsplikt og taushetsplikt | 2 | 36 | 34 | 4 |
| 9 — EMK, Grl. § 102, barnekonvensjonen | 2 | 30 | 30 | 4 |
| 10 — Eksamenstrening: praktikum og simulering | 5 | 72 | 58 | 4 |
| **Sum** | **37** | **604** | **628** | **44** |

**Summeringskontroll:**
- Quiz: 78+70+86+50+34+48+52+48+36+30+72 = **604** (krav ≥500 ✓)
- Flashcards: 74+68+86+50+34+46+52+48+34+30+58 = **628** (sikt 550–650 ✓)
- Kapitler: 5+4+5+3+2+3+3+3+2+2+5 = **37** (25–40 ✓)
- Prøver: 4 × 11 deler = **44** (krav ≥4 per del ✓)
- Modellbesvarelser med momentrubrikk-fasit: kap. 10.2, 10.3, 10.4 (+ 10.5 simulering) = **≥3 komplette case ✓**

**Flashcard-fokus:** **paragraf↔vilkår** (§ 4-2s tre undervilkår, § 5-1 bokstav a–d, § 5-7
tilknytningsunntak, § 13-4 personelle/materielle vilkår, fvl. § 16 unntak a–c, ldl.-analoge
lister), **metodesteg** (IRAC-trinnene, byggeklossene A–G, beviskravsnivåene), **barnets
beste-momenter** (§§ 1-3/1-4/1-5, «kan»-skjønnet, EMK art. 8-forholdsmessighet), og
**konvertering** (gammel↔ny nummerering per bestemmelse). Quiz vekter praktikum-byggeklossene
og hjemmelsvalg tungt (bredde, mot terskelen).

---

## 6. Seksjonstitler (sectionNames)

Del-nummer → beskrivende tittel (blir `sectionNames` i `TextbookCourse`; vises som
«Kapittel N: <tittel>» på bokforsiden — obligatorisk):

| Del | sectionName |
|---|---|
| 0 | Eksamenskart og praktikumshåndverk |
| 1 | Juridisk metode i barnevernretten |
| 2 | Barnevernslovens system og saksbehandling |
| 3 | Barnets beste og medvirkning (grunnprinsippene) |
| 4 | Hjelpetiltak |
| 5 | Akutt- og hastevedtak |
| 6 | Omsorgsovertakelse og oppheving |
| 7 | Atferd og institusjon |
| 8 | Opplysningsplikt og taushetsplikt |
| 9 | EMK, Grunnloven § 102 og barnekonvensjonen |
| 10 | Eksamenstrening: praktikum og simulering |

---

## 7. Praktikumstrening — samlekrav

- **Tre komplette modellcase** (kap. 10.2–10.4), hver med: nyskrevet sammenhengende case
  med 3 (–4) hovedproblemstillinger markert «påstår»; `collapsible` beståttnivå-besvarelse
  (full IRAC med ordlydssitat + for/mot); `collapsible` kommentert svak besvarelse med
  margnotater; `tip` **MOMENTRUBRIKK-FASIT (0/1/2 per rubrikklinje + beståttgrense ~50 %)**.
  - **10.2 = prosessuelt tyngdepunkt** (fvl. via § 12-1 + akutt § 4-2).
  - **10.3 = materielt tyngdepunkt** (§ 5-1/§ 5-7, prinsipal/subsidiær + habilitet + EMK).
  - **10.4 = bredt case** (§ 13-4 + § 6-2, med alt.matrise-toleranse for forsvarlig feil hjemmel).
- **Én tidsstyrt 5-timers-simulering** (10.5) med tidsplan + selvvurderingsrubrikk (0/1/2).
- **Typetilfellekapitler** i de materielle delene (5.3, 8.2) har hver en gjennomdrøftet
  `example`-variant + øvelsesvarianter som flytter tvilen mellom vilkårene.
- Kombinasjonene speiler de reelle mønstrene (prosess + materiell; prinsipal/subsidiær;
  bredt case fra ulike lovdeler) — men ALLE case, parter, barn, kommuner, tall og hendelser
  er nye.
- Hvert modellcase baker inn faste **skjulte delspørsmål** (den prosessuelle
  problemstillingen som gjemmer seg; forhåndsvarsel-unntaket fvl. § 16 tredje ledd;
  «kan»/barnets beste sist; medvirkning uavhengig av partsstatus) og minst to **hjemmelsfeller**
  fra empirien (1992-nummerering; § 3-2 uten samtykke; taushetsplikt trumfer opplysningsplikt;
  feil beviskrav ved § 5-7; § 6-1 uten samtykke).
- **44 prøver** fordelt 4 per del, alle i minipraktikum-/vilkårsdrill-/rubrikkformat med
  **0/1/2-momentfasit og beståttgrense** (aldri A–F).

---

## 8. Avvik fra DNA-jus (dokumentert)

DNA-jus er skrevet med JUS1111s rene praktikum-eksamen (A–F) som forbilde. Denne boka
avviker på fire punkter, alle empirisk begrunnet:

1. **Vurderingsform: BESTÅTT/IKKE BESTÅTT med 0/1/2-momentrubrikk, IKKE A–F.** DNA-jus
   (og jus5511) bygger modellbesvarelsene som «A-besvarelse + kommentert C-besvarelse»
   og «hva skiller A fra C fra E». Her finnes ingen A–F: det finnes **én terskel**
   (~48–52 % av maks) og en nasjonal **0/1/2-momentrubrikk** per rubrikklinje.
   Modellbesvarelsene er derfor **«beståttnivå + kommentert svak (under terskel)»** med
   **eksplisitt momentrubrikk-fasit og beståttgrense**, ikke A/C. *Begrunnelse:* analysens
   §1 (karakterform) og §3/§8 (poengmekanikk). Dette er det viktigste avviket og gjennomsyrer
   alle example/exercise/prøver.
2. **Metode er hovedtemaet — egne metode-deler (Del 0 + Del 1) FØR de materielle delene.**
   DNA-jus behandler metode i Del 0 og lar materiell rett dominere. Her er «juridisk
   metodelære» selve eksamensfaget (metode vurderes, ikke materiell teori, fordi eksamen
   ligger tidlig i masterløpet), så metoden får to fulle deler (IRAC/ordlydssitat/for-mot/
   trekk-katalog i Del 0; vilkårslære/tolkning/beviskrav/skjønn i Del 1) og et gjennomgående
   refreng. *Begrunnelse:* analysens §2/§4/§8 («hovedtemaet er juridisk metodelære»).
3. **§§ 1-3/1-4/1-5 er både en egen del (Del 3) OG et gjennomgående refreng.** DNA-jus
   ville gitt grunnprinsippene ett kapittel. Her er de fast avsluttende «kan»/skjønnsmoment
   i HVERT materielt kapittel (5.x–8.x), fordi rubrikkene har en fast poenglinje for barnets
   beste/medvirkning i hvert eneste case. *Begrunnelse:* analysens §2 («gjør §§ 1-3/1-4/1-5
   til gjennomgående refreng, ikke ett kapittel»).
4. **Forvaltningsloven er likestilt med barnevernsloven (egen stor del via § 12-1-broen),
   og en «Ny/gammel lov»-note + konverteringstabell erstatter jus5511s «Endret lov 2024»-boks.**
   DNA-jus forutsetter ett lovverk per rettsområde. Her er **fvl. like tung** (halvparten av
   hovedproblemstillingene) og kobles via bvl. § 12-1; og hele barnevernsloven har ny
   nummerering fra 2021, så konverteringstabellen (kap. 0.5) og ny/gammel-notene er
   systematisert. *Begrunnelse:* analysens §2 (forvaltningsloven likestilt) og §7
   (rettstilstandsflagg — ny lov 2021).

Ingen andre avvik: kapittel-DNA (regelkapittel/typetilfellekapittel/modellbesvarelse),
blokktyper, «Eksamensvinkel»/«Typiske feil»/«Paragraf- og vilkårsregister» og kvotekravene
følger DNA-jus. Merk: eksamen har **kun én sjanger** (praktikum) — ingen egen teori-/
domsanalysedel; «teorien» dekkes gjennom metode-delene og vilkårslæren.

---

## 9. Rettstilstands-sjekk

> **⚠ WebFetch mot Lovdata er IKKE kjørt her** (jf. oppdraget — unngår heng). Alle §-numre,
> ledd, bokstaver og vilkårsformuleringer under er markert `(verifiser)` og
> **sluttkontrolleres i fase 6 av en obligatorisk Lovdata-verifikatør** mot GJELDENDE
> barnevernslov (2021) og forvaltningsloven. Sensorrubrikkene i arkivet speiler
> rettstilstanden i sitt år, ikke nødvendigvis dagens.

**Lagt til grunn (skriv mot NY lov, 2021):**
- **Barnevernsloven** = lov 18. juni 2021 nr. 97, i kraft **1.1.2023**, erstatter
  barnevernloven av 1992. **Hele nummereringen er ny** — se konverteringstabellen (kap. 0.5).
- **Forvaltningsloven** (lov 10. feb. 1967) gjelder i barnevernssaker via **bvl. § 12-1**
  «med de særreglene som følger av barnevernsloven».
- **§ 5-7** (oppheving) er **materielt videreført** fra 1992 § 4-21 → 1992-rettskilder
  fortsatt relevante (nevnt eksplisitt i veiledningen).

**Særlig usikre punkter som MÅ verifiseres mot Lovdata i fase 6:**
- **Akuttbestemmelsenes numre:** akutt omsorgsovertakelse i **§ 4-2** og akutt atferd i
  **§ 4-3** i 2021-loven (H2023-casen brukte gammel «§ 4-4»; V2026-rubrikken viste til
  «§ 4-2»). **Verifiser at § 4-2 = akutt omsorgsovertakelse og § 4-3 = akutt atferd.**
- **§ 5-1** bokstav a–d (alternative grunnlag) og beviskrav per bokstav.
- **§ 5-7** ordlyd: «overveiende sannsynlig», «forsvarlig omsorg», tilknytningsunntakets
  «så knyttet til mennesker og miljø» + «alvorlige problemer».
- **§ 6-2** alternativ a–c (kriminalitet/rus/normløs atferd), forsvarlighetsledd, minste
  inngrep-ledd.
- **§ 3-1** vilkårskjeden («særlig behov», «på grunn av», «egnet», «positiv endring») og
  pålagte hjelpetiltak; **§ 3-2** samtykkekrav.
- **§ 13-4** personelle vilkår + materielle vilkår (bokstav a–p) + forholdet til hpl. §§ 21, 33.
- **§ 12-1** (fvl.-broen), **§ 12-3** (partsrettigheter, 15-årsgrense + unntak), **§ 12-5**
  (begrunnelse), **§ 12-6** (innsyn/unntak), **§ 12-8** (barnesakkyndig kommisjon).
- **§§ 1-3/1-4/1-5/1-7** ordlyd og leddstruktur.
- **§§ 7-1/7-2** (samvær), **§ 6-1** (frivillig atferd), **kap. 10/rettighetsforskriften** (tvang).
- **fvl.** § 2 e (part), §§ 6–8 (habilitet), § 11 (veiledningsplikt), § 16 (forhåndsvarsel
  + unntak tredje ledd a–c), §§ 18–19 (innsyn).
- **Rettspraksis/EMD** (referert argumentativt): EMD-linjen om gjenforeningsmål (Strand
  Lobben mot Norge m.fl.) — verifiser navn/år. **Prop. 133 L (2020–2021)** som forarbeid.
  Stikkprøv også UMARKEDE referanser (jf. JUS1111-lærdommen om feilattribuert dom).

**Sensorveiledningsforankring:** I MOTSETNING til jus5511 har dette arkivet
**fullstendige, momentsatte sensorrubrikker med beståttgrenser** for alle syv sittinger —
så «Eksamensvinkel»/«Typiske feil»/poengmekanikk er **empirisk forankret**, ikke utledet.
Det eneste rettstilstandsforbeholdet er §-numrene (ny lov 2021) som verifiseres mot Lovdata.

---

## 10. Studieguide-disposisjon

Studieguiden bygges som ett sammenhengende dokument med disse seksjonene:

1. **Slik består du den nasjonale deleksamen** — eksamensformen (5 t digital Inspera/
   WISEflow, Lovdata Pro, bokmål/nynorsk), **bestått/ikke bestått** (ingen A–F),
   beståttgrense ~48–52 % av maks, **0/1/2-poengmekanikken**, og strategien: dekk bredt,
   lever solid metodehåndverk på ~halvparten av delmomentene, ingen kunnskapshull.
   Prioriteringskart (frekvenstabellen fra kap. 0.1).
2. **IRAC på én side** — problemstillingsjakt («påstår»), Issue → Rule (sitert ordlyd) →
   Application (faktum for og mot) → Conclusion, klarlegg kort/drøft det tvilsomme,
   avslutt med «kan»/barnets beste; byggeklossene A–G som poengsjekkliste.
3. **De aktive trekkene på én side** — fellekatalogen T1–T12 som negativ sjekkliste
   (særlig teoretisering og irrelevante bestemmelser = aktive trekk).
4. **Konverteringstabell 1992↔2023** — samlet, med note om § 5-7-videreføringen.
5. **Rettsområdesammendrag** (én seksjon per lovdel: saksbehandling/fvl., barnets beste-
   refrenget, hjelpetiltak, akutt, omsorgsovertakelse/oppheving, atferd, opplysningsplikt,
   EMK/BK) — hver med vilkårsstiger i punktform, tvistepunkt-kart per typetilfelle, og
   paragrafregister. Alle bestemmelser merket «gjeldende rett (ny lov 2021)».
6. **§ 12-1-broen på én side** — hvilke spørsmål som løses etter fvl. (part, habilitet,
   veiledning, forhåndsvarsel, innsyn) og hvordan bvl.-særreglene går foran.
7. **Barnets beste-refrenget på én side** — §§ 1-3/1-4/1-5 + «kan»-skjønnet + EMK art. 8-
   forholdsmessighet, med «konkret, ikke generisk»-malen.
8. **Skjult problemstilling-radaren** — signalliste: faktumtrekk → problemstillingen det
   varsler («påstår» → hovedproblemstilling; usikker part → fvl. § 2 e; hastevedtak →
   forhåndsvarsel-unntak fvl. § 16; «vil ha barnet tilbake» → § 5-7 skjerpet beviskrav;
   yrkesutøver som nøler → § 13-4 vs. taushetsplikt; manglende samtykke → over på tvangshjemmel).
9. **Momentrubrikk-selvvurdering** — hvordan poengsette egen besvarelse 0/1/2 per moment
   og sjekke at man er over terskelen på tvers av alle problemstillinger.
10. **Leseplaner** — 14-dagers og 4-ukers plan mot 9.12.2026 med kapittelrekkefølge,
    prøvetidspunkter og simuleringsdag (kap. 10.5 på nest siste dag).
11. **Siste-døgnet-arket** — én side: vilkårslistene for de sentrale hjemlene (§ 4-2s tre
    undervilkår, § 5-1 bokstav a–d, § 5-7 skjerpet beviskrav + tilknytningsunntak, § 6-2
    a–c + forsvarlighet, § 3-1-kjeden, § 13-4 personelt/materielt, fvl. § 12-1-broen +
    § 16-unntak), IRAC-malen og barnets beste-refrenget.

---

## 11. Byggerekkefølge og verifikasjon

### Byggerekkefølge for Opus

1. **Metadata først**: `TextbookCourse`-oppføring for `nokut-barnevern` (mønster:
   `COURSE_BI_OKONOMI` i `src/lib/data/textbook-courses-matte.ts`) med alle 37 kapitler
   (id/number/title/description/estimatedMinutes/topics/competenceGoals/prerequisites fra
   dette skjelettet) og `sectionNames` (§6). `level: 'Høyskole'`.
2. **Del 0** (kap. 0.1–0.5) — metodespråket (IRAC-malen, 0/1/2-momentrubrikken,
   siter-ordlyd + for/mot, fellekatalogen T1–T12, konverteringstabellen, bestått/ikke-bestått-
   logikken) etableres her og gjenbrukes ordrett i alle senere kapitler.
3. **Del 1** (metode) før de materielle delene — vilkårslære/tolkning/beviskrav/skjønn er
   forkunnskap for alle inngrepshjemler.
4. **Del 2 → Del 3** — prosess/fvl. (§ 12-1-broen) og barnets beste-refrenget etableres før
   de roterende materielle delene bruker dem.
5. **Del 4 → Del 8** — regelkapitler før typetilfellekapitler innen hver del; følg
   prerequisites-kjeden (5.1 § 4-2 før 5.3 typetilfelle; 6.1 § 5-1 før 6.2 § 5-7; 7.1 § 6-1
   før 7.2 § 6-2; 8.1 § 13-4 før 8.2 typetilfelle).
6. **Del 9** (EMK/BK) — fordypning, forutsetter § 1-5 (kap. 3.3).
7. **Del 10** (eksamenstrening) — identifikasjonsdrill (10.1) først, deretter de tre
   modellcasene (10.2–10.4), så simuleringen (10.5) som forutsetter hele boka. Bygges av
   én agent som leser HELE skjelettet.
8. **Batching (fase 4):** én agent per hel del; gi agenten HELE delens kontrakter. Ingen
   del er > 5 kapitler, så ingen del trenger splitting.
9. **Narrativ-versjoner** (`<id>-narrativ.json` per kapittel) og quiz/flashcards per kvotene —
   quiz skrives samtidig med hvert kapittel. **Kvotene i §5 er fasit.**
10. **Prøvene** (4 per del) etter at delens kapitler er ferdige — alle med 0/1/2-momentfasit
    og beståttgrense, ALDRI A–F.
11. **Studieguiden** til slutt (destillerer ferdige kapitler).

### Verifikasjonssjekkliste (kjøres FØR ferdigmelding)

- [ ] **JSON-validering**: samtlige nye `chapters/*.json` parses med `json.load` (én
      uescapet anførselstegn kan blokkere hele prebuild).
- [ ] **Obligatorisk Lovdata-verifikatør (fase 6)**: ALLE paragrafhenvisninger sjekkes mot
      **GJELDENDE barnevernslov (2021)** og forvaltningsloven, med særskilt kontroll av
      postene i §9 — og grep `-i verifiser` (ikke bare `(verifiser)`) for sammensatte
      varianter. Bekreft særlig **akuttnumrene § 4-2/§ 4-3**, § 5-1 bokstav a–d, § 5-7-ordlyden,
      § 6-2 a–c, § 13-4 bokstav a–p, § 12-1/§ 12-3/§ 12-6, og fvl. §§ 2 e/6–8/11/16.
- [ ] **Rettstilstand, ikke bare referanser**: kontroller at INGEN kapittel bruker
      **1992-nummerering** som gjeldende (§ 4-4/§ 4-6/§ 4-12/§ 4-21/§ 4-24/§ 6-4);
      konverteringstabellen (kap. 0.5) og ny/gammel-notene skal finnes i de materielle
      kapitlene. Bekreft § 5-7-videreføringsnoten (1992-rettskilder relevante der).
- [ ] **Forvaltningsloven-broen**: hvert prosessuelt kapittel/oppgave viser fvl. via
      **bvl. § 12-1** (ikke fvl. isolert, ikke bvl. der fvl. gjelder) — T11-sjekk.
- [ ] **0/1/2-momentrubrikk, ALDRI A–F**: alle modellbesvarelser (10.2–10.5), example/
      exercise og prøver bruker 0/1/2 per moment med beståttgrense; grep etter «A-besvarelse»/
      «karakter A»/«til A» skal gi NULL treff (det er jus5511-språk, ikke dette faget).
- [ ] **Barnets beste-refrenget**: hvert materielt kapittel (4.x–8.x) avslutter med
      «kan»/barnets beste (§§ 1-3/1-4/1-5) — grep-sjekk at refrenget finnes.
- [ ] **Quiz-/flashcard-sum**: ≥500 quiz / 550–650 flashcards totalt og samsvar med
      kvotetabellen (§5, ±10 % per kapittel OK; totalen 604/628 skal holde).
- [ ] **Prøver**: 4 per del, 44 totalt, alle med 0/1/2-momentfasit og beståttgrense.
- [ ] **Opphavsrett**: ALLE case, parter, barn, kommuner, tall og hendelser er nyskrevne —
      ingen gjenkjennbare eksamensfakta; ingen ordrett gjengivelse av rubrikkformuleringer.
- [ ] **Pensumavgrensning**: null egne kapitler/oppgaver om barnevernsfaglig teori
      (utviklingspsykologi/samtalemetodikk/tiltaksfag) som hovedstoff — alt gjennom metodelinsen.
- [ ] **DNA-blokkene på plass**: hvert kapittel har «Eksamensvinkel» (`tip`), «Typiske feil»
      (`warning`), «Paragraf- og begrepsliste» (`collapsible`, per delkapittel), og regel-/
      typetilfellekapitlene har «Paragraf- og vilkårsregister» (`collapsible`);
      modellcasene har beståttnivå-besvarelse + kommentert svak besvarelse + momentrubrikk-fasit.
- [ ] **`npm run build`** grønn før ferdigmelding (arbeidsregel i CLAUDE.md).

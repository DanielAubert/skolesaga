# Bokskjelett: JFEXFAC04 Examen facultatum, rettsvitenskapelig variant — eksamensrettet lærebok

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
> `EKSAMENSANALYSE.md`. Grunnlaget er **40 eksamensterminer vår 2006 – vår 2026**,
> dokumentert gjennom **43 oppgavesett-filer (37 terminer)** og **37
> sensorveiledninger (37 terminer)**. Arkivet inneholder **null løsningsforslag** for
> dette emnet — se «Talldisiplin» under, som er ufravikelig. Alle oppgaver,
> lovtekstutdrag, case og formuleringer i boka skal være NYSKREVNE (se del 6).
> Pensumlitteratur refereres (forfatter/verk/begrep), aldri siteres i lengde.

---

## Talldisiplin (LES FØRST — ufravikelig)

Tallene under er **talt i emnemappa 2. august 2026**, ikke hentet fra en
indekskolonne. De er de eneste lovlige nevnerne i boka.

| | |
|---|---|
| **Terminer dokumentert** | **40** (V2006 – V2026) |
| Årsspenn | 21 kalenderår, 2006–2026 |
| Vårterminer / høstterminer | 21 / 19 — **H2016 mangler helt** |
| Filer i emnemappa | **109** |
| Unike filer etter md5-dedup | **80** (29 filer er rene duplikater under andre navn) |
| **Oppgavesett-filer (unike)** | **43**, dekker **37 terminer** (43 − 6 nynorskdubletter) |
| **Sensorveiledninger (unike)** | **37**, dekker **37 terminer** (én fil per termin) |
| **Løsningsforslag / modellbesvarelser / fasiter** | **0** |
| Terminer med både oppgavesett og sensorveiledning | **34** |
| Terminer der oppgaveteksten foreligger i en eller annen form | **40 av 40** |

**Kontrollsum:** 43 + 37 = 80 unike filer.

### Fire regler som følger av tallene

1. **Aldri «fasit» eller «løsningsforslag».** Arkivet har null. Det som finnes er
   *sensorveiledninger*. Boka skal si «sensorveiledning» når den mener det, og
   omtale sine egne modellbesvarelser som **nyskrevne** — aldri som ekte
   studentbesvarelser eller offisielle løsninger.
2. **Aldri «41 terminer» eller «alle terminer 2006–2026».** H2016 finnes ikke i
   arkivet, verken som oppgavesett eller veiledning. Nevneren er 40.
3. **Temafrekvens har nevner 40.** Oppgaveteksten foreligger for alle 40 terminer
   (for V2006, H2013 og H2017 kun gjennom sensorveiledningens ordrette
   gjengivelse). Alle «N av 40»-påstander i dette skjelettet er hjemlet.
4. **Sensorkrav har nevner 37.** Påstander om hva sensor belønner eller straffer
   kan **ikke** bygge på V2013, V2015 eller H2025 — disse tre terminene har
   oppgavesett, men ingen sensorveiledning i arkivet.

### Fem avvik mellom indeksene og den faktiske mappa (verifisert ved å åpne filene)

Dette står her fordi et byggeledd som slår opp i indeksen i stedet for i skjelettet,
vil få gale tall.

1. **`TERMINER.csv` har 38 rader mot 40 faktiske terminer.** `2015U` er én rad som
   dekker to distinkte eksamener (V2015, 2. juni 2015 og H2015, 18. desember 2015),
   og **V2017 mangler helt** i indeksen. 38 + 1 + 1 = 40.
2. **`har_fasit=ja` betyr «har sensorveiledning».** 35 av 38 rader er merket `ja`,
   mens arkivet har null løsningsforslag. Kolonnen er ubrukelig for dette emnet.
3. **13 indeksrader har tom eller «U» sesong**, og fire av dem har heller ikke
   årstall. Det er derfor `TERMINER.csv` oppgir 0 oppgavefiler for V2016, V2018,
   V2020, V2022, H2022 og V2024 — filene finnes, men falt ut av terminradene.
   Samme mekanisme gjør at raden for V2019 sier `har_fasit=nei`, enda arkivet har
   Svein Engs sensorveiledning for V2019 (datert 17. juni 2019).
4. **`jfexfac_v09.pdf` er typet `losningsforslag` i `INDEKS.csv`, men er
   oppgaveteksten for V2009.** Den er den eneste fila i hele emnemappa som er typet
   som løsningsforslag — og den er det ikke.
5. **20 av mappas 109 filer står ikke i `INDEKS.csv` i det hele tatt.** 19 av dem er
   md5-duplikater av indekserte filer; den tjuende er `JFEXFAC04_V2017.pdf`, som er
   det eneste eksemplaret av V2017-oppgavesettet.

**Regelen for forfatteren:** hvert «N av M»-tall som skrives inn i boka, skal stå
ordrett i dette skjelettet. Finn det ikke her, skal det ikke skrives.

---

## 1. Bokens identitet

- **Kurs-id:** `jfexfac04`
- **Tittel:** *JFEXFAC04 Examen facultatum, rettsvitenskapelig variant — eksamensrettet lærebok (UiO)*
- **Level:** `'Høyskole'` (institusjon: Universitetet i Oslo, Det juridiske fakultet).
  Navigasjonsnavn: «JFEXFAC04 Examen facultatum (jus)».
  Obligatorisk emne i UiOs femårige rettsvitenskapsprogram; hele kullet tar det hvert
  år. Semesterplasseringen skal verifiseres mot UiOs programside før den skrives inn
  som påstand i Del 0.
- **Arketype:** drøfting (`DNA-drofting.md`) — med **ett dokumentert lån fra
  `DNA-jus.md`**: lovtekstanalysen (kap. 7.2) bruker et *normkart* over en autentisk
  strukturert bestemmelse, ledd for ledd. Lånet er avgrenset og begrunnet:
  - JFEXFAC04 er et **rent teoriemne**. Det finnes ingen praktikum, ingen
    typetilfeller og ingen faktumanalyse i noen av de 40 terminene. Ren jus-arketype
    ville derfor trent en sjanger som ikke finnes.
  - Men den moderne signaturoppgaven ber om leddvis analyse av en konkret
    lovbestemmelse (13 av 40 terminer, og 7 av de 14 terminene fra H2019 og utover).
    Det er en teksthåndverksferdighet drøftingsarketypen ikke har verktøy for.
  - **Normkartet er ikke et hjemmelskart.** Det subsumeres ikke, det konkluderes
    ikke, og det finnes ingen fasit — sensorveiledningene sier uttrykkelig at flere
    klassifiseringer kan forsvares.
  - Nærmeste slektning i bokserien er `exphil03`: samme emnetype (obligatorisk
    innføringsemne, hele kullet, drøftingsarketype), samme todeling
    kunnskapsspørsmål + drøftingsspørsmål, samme problem med utgått pensum som
    forurenser de eldre settene.
- **Kapittelantall:** 34 (Del 0: 2 · temadeler 1–6: 24 · eksamenstrening Del 7: 8)
  + 6 prøvekapitler (ett per temadel 1–6).
- **Estimert totaltid:** ~1 870 minutter (~31 timer) fordelt per kapittel under.
- **Quiz totalt:** 712 (krav ≥500) · **Flashcards totalt:** 675 (krav ≥500)

**BOKCONFIG `description` (hardt formatkrav, jf. BYGGEKONTRAKT-MAL):**

```
Eksamensrettet lærebok for JFEXFAC04 ved UiO — kalibrert mot 40 eksamensterminer 2006–2026: normtypelæren, definisjons- og språkteori, rett og moral og kritikk av retten
```

Ingress 44 tegn, fire temaledd, samlet 168 tegn. Ingen semikolon, tankestrek eller
kolon inne i leddene. Kildetallene hører i `kildegrunnlag.ts`, ikke her.

**Pitch:** JFEXFAC04 er emnet der eksamen har vært den samme øvelsen i tjue år og
likevel skiftet ansikt tre ganger. Formen er i dag **4 timers digital skoleeksamen i
Inspera med Lovdata Pro i eksamensmodus**, to (av og til tre) oppgaver, karakter A–F.
Innholdet hviler på fire søyler: **normteori** (Eng), **språk- og
argumentasjonsteori** (Kolflaath), **rett og moral** (Eng del IV) og **kritikk og
rettsstat** (Eriksen og Mæhle/Aarli). Det avgjørende er ikke bredden, men ett skille
sensorveiledningene gjentar i hver eneste moderne termin: **forståelse foran
gjengivelse**. Etter at hjelpemidler ble tillatt sier V2022 rett ut at rene
gjengivelser av pensum i liten grad skal gi uttelling — studentene har jo bøkene
foran seg. Denne boka er bygget baklengs fra det: hvert temakapittel leverer begrepet
med avsender, spenningen det inngår i, og en anvendelse på ekte tekst.
Eksamenstreningsdelen driller de fire sjangrene hver for seg og viser A-, B- og
C-besvarelser av samme oppgave — der forskjellen ligger nøyaktig i om kandidaten
begrunner eller bare konstaterer.

**Kalibreringsregel (ufravikelig).** Boka kalibreres mot dagens pensumregime:
**Eng + Kolflaath + Eriksen + Mæhle/Aarli (+ Ikdahl fra H2023)**. Tre store
stoffområder er utgått og skal **ikke bære kapitler**:

| utgått stoff | prøvd i | siste gang |
|---|---|---|
| Profesjonsetikk, juristroller, eksamensløftet | 5 av 40 terminer, alle vår | V2010 |
| Rettslig polysentri, pluralisme, internasjonalisering | 6 av 40 terminer, alle høst | H2011 |
| Sands legitimitetstypologi, kommunikativ differensiering, risikosamfunn, miljørett | del av samlekategorien rett/samfunn | H2019 |

Til sammen er dette et betydelig volum av arkivet og null pensumverdi i dag. Bokas
**eneste** omtale av dem er den korte, eksplisitt merkede historikk-delen i kap. 6.2,
som har ett formål: at leseren som trener på gamle sett skjønner hvorfor halve
oppgaveteksten handler om noe hun ikke skal kunne.

---

## 2. Makrostruktur

Følger DNA-drøfting-malen: Del 0 (eksamenskart + håndverk) → temadeler organisert
etter emnets fire pensumsøyler, med omfang etter gjenganger-score → eksamenstrening
(sjangerkapitler + modellbesvarelser).

| Del | Tittel | Kap. | Begrunnelse for omfang (fra analysen §2/§7) |
|---|---|---|---|
| 0 | Eksamenskart og besvarelseshåndverk | 2 | DNA-obligatorisk. Skillet «redegjør / diskuter» og forståelse-foran-gjengivelse må etableres FØR fagstoffet. |
| 1 | Rettens normer | 6 | Normtypelæren er prøvd i 22 av 40 terminer og er §7s tema nr. 1. Får flest kapitler fordi hver normtype er sitt eget kortsvar OG sitt eget verktøy i lovtekstanalysen. |
| 2 | Språk, definisjoner og tolkningsproblemer | 4 | Definisjonslære 11/40, vaghet/flertydighet 7/40, årsaker til tolkningsproblemer prøvd nesten ordrett i fire terminer. Vaghet/flertydighet er den mest formelle sondringen i emnet og den som straffes hardest når den bommer. |
| 3 | Argumentasjon og resonnement | 3 | Argumentasjons- og utsagnsteori 16/40. Standpunkt-/holdbarhets-/relevansargumenter er inne først fra H2021, men prøvd fire ganger siden — klart i vekst. |
| 4 | Rett og moral | 6 | Rettsfilosofiske hovedposisjoner 22/40, og til stede i 6 av de siste 8 terminene. Trekløveret er materialets mest gjenbrukte oppgavemal og får eget sammenligningskapittel. |
| 5 | Kritikk av retten | 3 | 11/40 og stigende; obligtema H2023, som deretter kom på eksamen samme semester. |
| 6 | Rett, samfunn og rettsstat | 2 | Samlekategorien scorer 24/40 — høyest i materialet — men mesteparten av scoren hviler på UTGÅTT Sand-stoff. Kalibrert mot Mæhle/Aarli krymper det reelle pensumvolumet til to kapitler. Se kalibreringsnoten i 6.1. |
| 7 | Eksamenstrening | 8 | 5 sjangerkapitler (fire sjangre + feilvaksinen) + 3 modellbesvarelser (DNA-krav ≥3). |

Rasjonale: de to «må sitte perfekt»-søylene — normtypelæren (22/40) og trekløveret
(22/40) — får 12 av 24 temakapitler. Språk- og definisjonssøylen får 4, argumentasjon
3, kritikk 3, rettsstat 2. Utgått pensum får null.

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart og besvarelseshåndverk |
| 1 | Rettens normer |
| 2 | Språk, definisjoner og tolkningsproblemer |
| 3 | Argumentasjon og resonnement |
| 4 | Rett og moral |
| 5 | Kritikk av retten |
| 6 | Rett, samfunn og rettsstat |
| 7 | Eksamenstrening |

### Sjangerkoder (brukes i eksamensbelegget under)

Emnet har fire sjangre, og boka trener alle fire hver for seg. Kodene er
**byggespråk** — de skal skrives fullt ut i klarspråk ved første bruk i teksten og
aldri stå kalde i `competenceGoals` eller i kapitlets første tekstboks.

| kode | sjanger | kjennetegn |
|---|---|---|
| **RED** | redegjørelsesspørsmålet | «gjør rede for», «forklar», «angi» — presis, avgrenset framstilling av et begrepspar eller en distinksjon. Vanligste enkeltform i hele materialet. Ytterpunkt: kontrollspørsmålsformen (fire av fem korte begrepsforklaringer, H2019). |
| **LOV** | lovtekstanalysen | en konkret bestemmelse gjengitt i oppgaveteksten skal analyseres med norm-, definisjons- og/eller språkteorien. Den moderne signaturoppgaven. |
| **DRØ** | drøftingsoppgaven | «diskuter», «drøft», «vurder holdbarheten av» — krever selvstendig standpunkt med begrunnelse. Tyngst vektet i så godt som alle moderne sett. |
| **CASE** | anvendelsesoppgaven med case-ramme | et faktisk bakteppe og spørsmål som ber om anvendelse av teorien på det. Opptrer bare én gang i hele materialet (V2021), men er den eneste sjangeren som ligner en praktikum. |

### Feilkoder (brukes i «Typiske feil» under — fra analysen §5)

Alle 16 er hjemlet i minst én navngitt sensorveiledning. Hver kode glosses ved første
bruk **per kapittel**, og hele registeret forklares samlet i Del 0-orienteringsboksen
og i kap. 7.5.

#1 pugget gjengivelse uten forståelse · #2 dagligspråklig synsing om fagbegreper ·
#3 svare på noe annet enn det oppgaven spør om · #4 stoppe ved den overfladiske
klassifiseringen · #5 behandle sensors klassifisering som fasit · #6 blande vaghet
og flertydighet · #7 sette likhetstegn mellom kvalifikasjonsnorm og definisjon ·
#8 plassere posisjonene feil på kognitivisme-aksen · #9 behandle utilitarismen som
én teori · #10 utelate ett av flere sidestilte delspørsmål · #11 svare på færre enn
antallet oppgaven ber om — eller på flere i håp om gevinst · #12 bruke faktisk
kunnskap som erstatning for teoretisk analyse · #13 presse en søkt tolkning på
lovteksten · #14 uttømmende opplisting på bekostning av dybde · #15 bruke
terminologi man ikke behersker · #16 overse at «norm» og «rettighet» er teoretisk
omstridte begreper.

**Ærlighetsforbehold som SKAL stå der registeret presenteres:** ingen av de 37
sensorveiledningene er skrevet etter at besvarelser er lest — samtlige moderne
veiledninger sier dette uttrykkelig. Registeret er altså hva veiledningene sier skal
trekke, ikke en kartlegging av hva kandidater faktisk gjør.

### Utgave-sensitivitet

Pensumskiftene deler materialet i regimer, og forfatterkoblingene må derfor merkes ⚠
der de er utgaveavhengige:

| søyle | dagens anker | forgjenger (⚠ historisk) |
|---|---|---|
| Rettsfilosofi | Svein Eng, *Rettsfilosofi* — den eneste konstanten gjennom hele materialet | — |
| Språk og argumentasjon | Eivind Kolflaath (*Språk og argumentasjon*, fra 2023/2024 *Ordlyd og resonnement*), fra V2023 | Alf Petter Høgberg, *I språkets bilde*, t.o.m. H2022 |
| Kritikk | Christoffer C. Eriksen, *Kritikk*, fra ca. 2015 (+ Ikdahl om kvinnerett og kjønnsperspektiv fra H2023) | — |
| Rett og samfunn | Mæhle/Aarli, *Fra lov til rett*, fra V2021 | Inger-Johanne Sand, *Rett, samfunn og legitimitet*, t.o.m. H2019 |

**H2024 og H2022 sier begge uttrykkelig** at Kolflaaths, Høgbergs og Engs
begrepsapparater er tre nært beslektede inndelinger, at kandidaten står fritt til å
velge, og at de konkurrerende inndelingene kan virke forvirrende «slik at det ikke
bør trekke for mye». Boka skal derfor presentere alle tre navngitt, anbefale ett som
arbeidsspråk, og aldri late som det finnes én riktig terminologi.

Forfatteren skal **aldri** oppgi sidetall, utgaver eller pensumavgrensninger utover
dem dette skjelettet attesterer. Nøyaktige utgaver må verifiseres mot UiOs
semesterside før de brukes som henvisning.

### Språk- og formregler for hele boka

- **Ingen byggespråk i overskrifter.** «Løkke 3», «Bolk B», «Blokk 2», «Runde N» er
  forbudt. Overskriften sier hva avsnittet handler om; tidsanslaget `(~14 min)` skal
  stå.
- **Frasen «Sist du var her» er forbudt**, likeså «som du sikkert husker», «du har jo
  allerede sett», «dette kan du fra før». Forkunnskapsblokka skriver om *innholdet*:
  «Fra kap. 1.3: …», «Dette sto der: …».
- **Kap-referanser er klikkbare markdown-lenker** til eksisterende filer, aldri død
  «se kapittel»-tekst, og aldri lenker i `title`-felt.
- **Deloppgaver a), b), c)** på hver sin linje med merket i fet.
- **Ingen direktesitater fra pensumlitteratur, oppgavetekster eller
  sensorveiledninger.** Referer og parafraser.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = terminer temaet forekom (nevner 40, jf.
> Talldisiplin) + sjangerkoder + prioritetsklasse (perfekt / kunne / kjenne, fra
> analysen §7). **Kvote** = quiz/flashcards. Utgave-sensitive pensumkoblinger er
> merket ⚠.

### Del 0 — Eksamenskart og besvarelseshåndverk

#### Kapittel 0.1: Slik testes JFEXFAC04
**id:** `jfexfac04-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Eksamensformens historikk og dagens format, hvilke temaer som faktisk kommer igjen, de fire oppgavesjangrene og hvordan boka brukes fram mot eksamen.

**Eksamensbelegg:** Metakapittel — bygger på hele arkivet (40 terminer V2006–V2026,
H2016 mangler). Skal formidle:
(a) **Gjeldende form fra H2022:** 4 timers digital skoleeksamen i Inspera, med Lovdata
Pro i eksamensmodus uten fritekstmerknader. To (av og til tre) oppgaver, ofte med
delspørsmål a–c. Karakter A–F. Klokkeslettene har variert: H2023 og H2024 gikk
15:00–19:00, mens H2025, V2025 og V2026 gikk 09:00–13:00.
(b) **Formhistorikken i fire regimer:** 6 timers papireksamen V2006–H2007 (to
pensumdeler, mange bokstavspørsmål) → 5 timers skoleeksamen V2008–V2019 → **hjemme-**
**eksamen** med alle hjelpemidler V2020–V2022 (5 t i V2020, 4 t fra V2021; V2020 var
bestått/ikke bestått etter dekanvedtak 25. mars 2020, deretter gradert igjen) →
4 timers digital skoleeksamen fra H2022.
(c) **Temafrekvenstabellen** (nevner 40): rett/samfunn/rettsstat 24 · normtypelæren
22 · rettsfilosofiske hovedposisjoner 22 · argumentasjons- og utsagnsteori 16 ·
lovtekstanalyse 13 · definisjonslære 11 · kritikk av retten 11 · avveiningsnormer og
retningslinjer 8 · vaghet og flertydighet 7 · profesjonsetikk 5 (utgått) · rettigheter
4 (stigende). Innenfor rettsfilosofien: utilitarisme 17 · kantiansk rettsfilosofi 16 ·
skandinavisk rettsrealisme 9 · kognitivisme/non-kognitivisme som eksplisitt tema 6.
(d) **Gjenbruk er normalen, ikke unntaket.** Åtte dokumenterte gjentakelser:
normtypespørsmålet + juristers utsagn (H2008, H2014, V2016) · tortur-oppgaven (H2006,
H2011, V2018) · moralske skranker for lovgivningskompetansen (H2007, H2015) · normer
og verdier + avveiningsnormer (V2007, V2012, ord for ord) · utfordringer ved
formulering av definisjoner (H2014, H2015) · årsaker til tolkningsproblemer (H2012,
V2015, V2017, V2020) · praktisk fornuft i de tre retningene (H2010, H2011, V2018) ·
rettigheter og forbindelsen til normer (H2023, V2025). Trening på gamle sett er
derfor direkte eksamensrelevant.
(e) **Sesongmønstre:** lovtekstanalyse i moderne form er høstens signaturoppgave
(H2020, H2021, H2022, H2024 — fire høstterminer med samme grep; V2020 og V2022 er de
eneste vårterminene). Avveiningsnormer: 7 av 8 forekomster om våren. Rotasjonslogikk:
det som var hovedoppgave forrige semester, kommer sjelden igjen umiddelbart — H2024,
V2025, H2025 og V2026 hadde fire helt ulike tyngdepunkter på rad.
(f) **Utgått pensum-advarselen** (se kalibreringsregelen i del 1).
(g) **Obligatorisk oppgave er inngangsbillett**, og obligtemaet varsler eksamenstema:
H2023-obligen handlet blant annet om skillet mellom intern og ekstern kritikk, som
deretter kom på eksamen samme semester.
(h) **Kildenoten** med de eksakte tallene fra Talldisiplin-seksjonen, inkludert at
arkivet ikke inneholder løsningsforslag og at boka derfor aldri påstår å gjengi fasit.
Prioritet: perfekt (metanivå).
**Begrepskontrakt:** Ingen fagbegreper. Men klarspråkforklaring av sjangerkodene RED,
LOV, DRØ og CASE; av karakterskalaen A–F og hva «C er en god og vanlig karakter»
betyr; og av hva boka mener med «C-stoff» og «A-markør». Del 0 skal ha
orienteringsboksen **«Slik leser du denne boka»** (type `text` eller `tip`, ALDRI
`definition` — ville endret flashcard-kvoten) med skala + kodeliste skrevet fullt ut +
at typiske feil har et samlet register i kap. 7.5. I tillegg Del 0-pakken: «Lite
tid?»-boks med hurtigrute 3–5 dager og ukeplan summert fra `estimatedMinutes`,
deltidsrute 10–12 uker, «lese mye, skrive lite»-boks, og sjangerkortet på ÉN side.
**Drøftingsakser:** ingen (kartkapittel).
**Case-forslag:** «Slik leser du et oppgavesett» på ett nyskrevet eksempelsett i
gjeldende form — to oppgaver uten oppgitt vekting, der leseren skal utlede at delene
teller om lag likt, og kjenne igjen hvilken sjanger hver oppgave tilhører.
**Typiske feil:** #3 svare på noe annet enn det oppgaven spør om; #10 utelate ett av
flere sidestilte delspørsmål; #11 svare på færre enn oppgaven ber om.
**Kvote:** 12 quiz / 10 flashcards (eksamensform-fakta, sjangergjenkjenning, hva som
er ute av pensum).

#### Kapittel 0.2: Å redegjøre, å analysere, å drøfte
**id:** `jfexfac04-0-2` · **number:** 0.2 · **estimatedMinutes:** 60 · **prerequisites:** `jfexfac04-0-1`

- **Kapitteltype:** essayhåndverk.
- **Description:** Hvordan de tre grunnformene bygges, og hva sensorveiledningene faktisk belønner, straffer og lar passere.

**Eksamensbelegg:** Destillat av analysens §4, hjemlet i de 37 sensorveiledningene —
og **ikke** i V2013, V2015 eller H2025, som mangler veiledning. Skal operasjonalisere:
(a) **Det som belønnes:** forståelse foran gjengivelse (gjennomgangstonen i hele det
moderne materialet — V2023 sier at den som kan forklare *poenget* med for eksempel
sanksjonsanalysen skal ha mer enn den som bare bruker termen; V2024 sier at
oppramsing av begreper uten sammenheng «imponerer ikke»); selvstendig refleksjon og
problematisering (V2026, H2021, V2020); egne, treffende eksempler (H2018 gir
*betydelig* uttelling for selvstendige eksempler på kritikkformene); å gå utenfor
hovedlitteraturen når kjernen først er dekket (V2025 om Hart og MacCormick, V2023 om
moralsk realisme fra EXPHIL03); å se at flere klassifiseringer kan forsvares (H2024,
V2022); å koble pensumdeler sammen (V2026 — men det er ikke krav for toppkarakter);
å bruke tidligere delsvar videre (H2024: en redegjørelse under a skal gi uttelling
også når den brukes i b eller c).
(b) **Det som straffes:** ren gjengivelse, særlig etter at hjelpemidler ble tillatt
(V2022 er skarpest); utenatlæring uten forståelse (V2018 og V2019, ordrett i begge:
en besvarelse skal ikke kunne «snakke seg til» bestått); repetisjonshefte-svar (V2024
navngir et konkret hefte skrevet til en eldre utgave av emnet og sier at ordrett
repetisjon derfra trekker ned — den mest konkrete straffebestemmelsen i materialet);
dagligspråklig synsing (H2018); klare misforståelser (V2022); for korte delsvar
(H2019, V2023); søkte tolkninger (V2022).
(c) **Det som IKKE straffes:** feil konklusjon (V2021, V2022, H2024, V2025); valg av
terminologi (H2024, H2022); ufullstendighet — veiledningenes lister er ikke
sjekklister, og V2026 sier uttrykkelig at framstillingen ikke er uttømmende;
svak disposisjon (V2018/V2019: det avgjørende er at forståelsen er der, ikke hvor i
besvarelsen den står); svake faktiske premisser i case-oppgaver (V2021); at oppgaven
treffer stoff læringskravene bare krever *kjennskap* til (H2013, H2019, V2023).
(d) **Strykterskelen:** én sviktende hoveddel drar hele besvarelsen med seg — V2019,
V2018, H2017, H2020 og H2018 sier alle en variant av dette.
(e) **Vektingsreglene:** vekting er oppgitt i 24 av 40 terminer og varierer
systematisk (3/4–1/4, 3/5–2/5, 2/3–1/3, 1/2–1/4–1/4, likt). Er ingenting oppgitt,
teller delene om lag likt — H2024, V2025 og V2026 sier alle det samme. H2021 og V2021
nyanserer: sprik i kvalitet vurderes ut fra helhetsinntrykket, og den oppgaven som
dekker mest pensum kan tillegges noe mer vekt. V2018 oppga anbefalt tidsbruk (ca. 3 t
på del A, ca. 2 t på del B) i stedet for brøk.
Prioritet: perfekt.
**Begrepskontrakt:** Ingen fagbegreper — men besvarelsesarkitektur per sjanger:
RED (avgrens → definer med avsender → eksempel → løftesetning), LOV (leddvis →
klassifiser → begrunn → se flere lesemåter → prioriter dybde), DRØ (standpunkt tidlig
→ beste argument for → beste innvending → veiing → konklusjon). Bokas to mantraer
innføres her: **«forståelse foran gjengivelse»** og **«diskuter betyr ta
standpunkt»**. Binær selvrettingsrubrikk (DNA-krav) presenteres første gang, utdypes
i 7.3. Tidsbudsjettmodeller for 4-timersformatet. Ærlighetsforbeholdet om at
veiledningene er skrevet før besvarelsene er lest, skal stå her.
**Drøftingsakser:** bredde mot dybde i en redegjørelse — V2025 sier at et
redegjørelsesspørsmål *ikke krever* drøftelse, men at gode besvarelser går bredere
eller dypere og problematiserer; når blir problematisering til å svare på noe annet
enn det som spørres om?
**Case-forslag:** Samme korte oppgave («gjør rede for skillet mellom vaghet og
flertydighet») besvart tre ganger — én E-versjon (dagligspråklig synsing om at noe er
«uklart»), én C-versjon (korrekt gjengivelse uten eget eksempel), én A-versjon
(presis sondring, eget eksempel, og en problematisering av om et uttrykk kan være
begge deler) — med margkommentarer som peker på nøyaktig hvor forskjellen ligger.
**Typiske feil:** #1 pugget gjengivelse; #2 dagligspråklig synsing; #3 svare på noe
annet; #15 bruke terminologi man ikke behersker.
**Kvote:** 16 quiz / 12 flashcards (nivåkjennetegn, vektingsregler, hva som ikke
straffes).

### Del 1 — Rettens normer

#### Kapittel 1.1: Hva en norm er
**id:** `jfexfac04-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** `jfexfac04-0-2`

- **Kapitteltype:** tema.
- **Description:** Normbegrepet hos Eng, skillet mellom deskriptive og normative utsagn, og hvorfor norm er et teoretisk omstridt begrep.

**Eksamensbelegg:** Normtypelæren er prøvd i **22 av 40 terminer** (V2006, H2007,
V2008, H2008, V2009, H2009, V2011, V2012, V2013, H2014, V2015, V2016, V2017, H2017,
V2019, H2019, V2020, H2021, V2022, H2023, H2024, V2025) — dette kapitlet bærer
inngangen til alle sammen. Skillet deskriptivt/normativt er prøvd særskilt i H2009
(måter å skille deskriptive og normative utsagn) og igjen i H2025 og V2026. Saksinnhold
og modalitet var eget delspørsmål H2007. Sjangre: RED, LOV, DRØ. Prioritet: **perfekt**
(§7 pkt. 1).
**Begrepskontrakt:** norm som sammensatt av **meningskomponent og virkelighetskomponent**
(Eng, *Rettsfilosofi* del II); skillet mellom et utsagns **saksinnhold** og dets
**modalitet** (Eng — prøvd direkte H2007); **deskriptive** mot **normative utsagn**;
og — like viktig — at «norm» er et **teoretisk omstridt** begrep: H2024 sier at hvilken
forståelse av normbegrepet kandidaten legger til grunn bør være underordnet, og V2025
premierer den som problematiserer hva hun legger i begrepet framfor å forutsette én
betydning stilltiende.
**Drøftingsakser:** Er juristers utsagn om hva som er rett forskjellige fra rettens
normer? — samme dobbeltspørsmål stilt i H2008, H2014 og V2016, der V2016-veiledningen
uttrykkelig sier at H2014-veiledningen fortsatt er dekkende. Er «norm» ett begrep
eller flere? Hva vinner og taper man på å definere det stipulativt i innledningen?
**Case-forslag:** Hverdagsanker først: en husordensregel («søppel settes ut senest
kl. 07») og en oppslagstavlebeskjed («heisen er ute av drift») leses side om side —
hva er normativt, hva er deskriptivt, og hvor sitter modaliteten? Deretter samme
øvelse på et nyskrevet grunnlovslignende utsagn.
**Typiske feil:** #16 overse at «norm» er teoretisk omstridt — å bruke begrepet som om
det hadde én selvsagt betydning; #1 pugget gjengivelse av Engs definisjon uten å vise
hva komponentene gjør.
**Kvote:** 26 quiz / 26 flashcards.

#### Kapittel 1.2: Pliktnormer og det regulative
**id:** `jfexfac04-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `jfexfac04-1-1`

- **Kapitteltype:** tema.
- **Description:** Forbud, påbud, tillatelse og fritak, og hva det vil si at en norm er regulativ.

**Eksamensbelegg:** Del av normtypelæren, 22 av 40 terminer. Skillet **regulativ /
konstitutiv** som forklaring på plikt- mot kompetansenormer er direkte spurt i V2006 og
H2024 og forutsatt i mange flere (§7 pkt. 3). V2019 spurte direkte om forskjellen
mellom å ha plikt eller frihet fra plikt på den ene siden og å ha kompetanse på den
andre. Sjangre: RED, LOV. Prioritet: **perfekt**.
**Begrepskontrakt:** **pliktnorm**; de fire pliktmodalitetene **forbud, påbud,
tillatelse, fritak** (Eng); **regulativ norm** — normen regulerer en handling som
finnes uavhengig av normen, til forskjell fra den konstitutive normen som skaper det
den regulerer (kap. 1.3); forholdet plikt / frihet fra plikt; hvorfor tillatelse ikke
uten videre er «ingen norm».
**Drøftingsakser:** Er en tillatelse en selvstendig norm, eller bare fravær av forbud —
og hva står på spill i valget? Er skillet regulativ/konstitutiv skarpt, eller finnes
det bestemmelser som er begge deler? (H2024 honorerer uttrykkelig kandidater som ser
at samme ledd kan forsvares som flere normtyper og argumenterer for en kombinasjon.)
**Case-forslag:** Fire ledd fra en nyskrevet kommunal forskrift om utleie av
kommunale lokaler, ett per pliktmodalitet, der ett av leddene med vilje er et
tvilstilfelle som kan leses både som tillatelse og som fritak — fasiten skriver ut
begge lesningene og merker oppgaven «(omstridt — begge forsvarlige)».
**Typiske feil:** #6 blande kategorier; #3 gi en generell redegjørelse for plikt- og
kompetansenormer når oppgaven bare ber om å forklare distinksjonen regulativ/konstitutiv
(H2024 sier eksplisitt at dette ikke skal gi særlig uttelling).
**Kvote:** 26 quiz / 24 flashcards.

#### Kapittel 1.3: Kompetansenormer, kompetansekriterier og gyldighet
**id:** `jfexfac04-1-3` · **number:** 1.3 · **estimatedMinutes:** 70 · **prerequisites:** `jfexfac04-1-2`

- **Kapitteltype:** tema.
- **Description:** Kompetansenormen som konstitutiv norm, kriteriene for gyldig kompetanseutøvelse, og hva gyldighet betyr i rettslig sammenheng.

**Eksamensbelegg:** Del av normtypelæren, 22 av 40 terminer. Kompetanse og
kompetansenorm var eget spørsmål i V2006 («Gjør rede for begrepene kompetanse og
kompetansenorm» + «Er kompetanse og frihet det samme?») og igjen i V2015 (kompetanse,
gyldighet og avveiningsnorm i Del I). Moralske skranker for lovgivningskompetansen —
som forutsetter kompetansebegrepet — var hele oppgaven i H2007 og igjen i H2015, der
veiledningen selv sier at oppgaven bygger på H2007 og at veiledningen derfra er
gjenbrukt. H2017 ba om forholdet mellom plikt-, kompetanse- og kvalifikasjonsnormer
relatert til Grunnloven § 121. Sjangre: RED, LOV, DRØ. Prioritet: **perfekt**.
**Begrepskontrakt:** **kompetansenorm** som **konstitutiv** norm — den skaper adgangen
til å frembringe rettsvirkninger; **kompetansekriterier**: personelle (hvem),
situasjonelle (under hvilke omstendigheter, i hvilken form) og innholdsmessige (med
hvilket innhold) — alle tre hos Eng; **enekompetanse**, **delt kompetanse** og
**konkurrerende kompetanse**; **gyldighet** og **gyldighetsnormer**; forskjellen på å
mangle kompetanse (handlingen blir ugyldig) og å bryte en plikt (handlingen er gyldig,
men rettsstridig).
**Drøftingsakser:** Er kompetanse og frihet det samme? (V2006 stilte spørsmålet
ordrett — svaret krever at man skiller den frihet pliktnormen gir fra den evne
kompetansenormen skaper.) Kan en kompetansenorm «brytes», eller kan forsøket bare
mislykkes? Finnes det moralske skranker for lovgivningskompetansen — og fra hvilken
posisjon kan man i så fall begrunne dem? (Peker fram mot del 4; den fulle drøftelsen
hører i kap. 4.6.)
**Case-forslag:** Grunnloven § 76 lest leddvis som kompetansenorm: hvem har
kompetansen, hvilke situasjonelle krav stilles til fremgangsmåten, og hvilke
innholdsmessige skranker finnes? Deretter en nyskrevet delegasjonsbestemmelse der de
tre kriterietypene skal identifiseres uten hjelp.
**Typiske feil:** #6 blande kompetansemangel og pliktbrudd; #7 sette likhetstegn
mellom kvalifikasjonsnorm og definisjon (varsles her, behandles i 1.4 og 2.4).
**Kvote:** 30 quiz / 30 flashcards.

#### Kapittel 1.4: Kvalifikasjonsnormer og koblingsord
**id:** `jfexfac04-1-4` · **number:** 1.4 · **estimatedMinutes:** 45 · **prerequisites:** `jfexfac04-1-3`

- **Kapitteltype:** tema.
- **Description:** Normer som knytter rettsvirkninger til et rettsfaktum, og Ross' analyse av koblingsordene.

**Eksamensbelegg:** Del av normtypelæren, 22 av 40 terminer. Kvalifikasjonsnormer var
eksplisitt tema i V2011 og V2012 («Om pliktnormer, kompetansenormer og
kvalifikasjonsnormer» — samme overskrift begge terminer), i H2017 (forholdet mellom de
tre, relatert til Grunnloven § 121) og i H2024, der forholdet mellom kvalifikasjonsnorm
og definisjon var selve poenget. Sjangre: RED, LOV. Prioritet: **perfekt**.
**Begrepskontrakt:** **kvalifikasjonsnorm** (Eng) — normen som kvalifiserer et
saksforhold rettslig og dermed utløser et knippe rettsvirkninger; **koblingsord** og
**Ross' analyse** — ordet («eiendomsrett», «ekteskap») fungerer som teknisk mellomledd
mellom rettsfaktum og rettsvirkning, uten selvstendig semantisk innhold; forholdet
kvalifikasjonsnorm–legaldefinisjon slik H2024 presiserer det: kategoriene er **delvis
overlappende** — normative (stipulative) definisjoner er en form for kvalifikasjonsnorm,
men det finnes kvalifikasjonsnormer som ikke er legaldefinisjoner, og deskriptive
definisjoner er ikke normer i det hele tatt.
**Drøftingsakser:** Er koblingsordet en norm eller en forkortelse — og hva vinner
rettssystemet på mellomleddet? Når er en legaldefinisjon en kvalifikasjonsnorm, og når
er den bare en språklig avklaring?
**Case-forslag:** En nyskrevet straffebestemmelse av typen «Den som … straffes med
…» brytes ned: hvor er rettsfaktumet, hvor er rettsvirkningen, og hvilket ord bærer
koblingen? Deretter en formuesrettslig bestemmelse der koblingsordet gjør langt mer
arbeid.
**Typiske feil:** #7 sette likhetstegn mellom kvalifikasjonsnorm og definisjon —
feilen går i begge retninger og er dette kapitlets hovedhjem; #6.
**Kvote:** 22 quiz / 24 flashcards.

#### Kapittel 1.5: Avveiningsnormer og retningslinjer
**id:** `jfexfac04-1-5` · **number:** 1.5 · **estimatedMinutes:** 55 · **prerequisites:** `jfexfac04-1-2`

- **Kapitteltype:** tema.
- **Description:** Normer som veies mot hverandre i stedet for å anvendes alt eller intet, og skillet mellom retningslinjer om retning og om vekt.

**Eksamensbelegg:** Eget oppgavetema i **8 av 40 terminer** (V2007, V2010, V2011,
V2012, V2013, V2015, V2017, H2019) — **7 av 8 om våren**, med H2019 som eneste unntak.
Oppgaven «normer og verdier + avveiningsnormer og retningslinjer + er avveining reell
normativ styring?» ble gitt **ord for ord** i både V2007 og V2012. Sjangre: RED, DRØ.
Prioritet: kunne (§7 pkt. 9 — skiller sterke besvarelser).
**Begrepskontrakt:** **avveiningsnorm**; **retningslinje**; skillet mellom
retningslinjer **om retning** (hvilken vei et hensyn trekker) og **om vekt** (hvor
tungt det trekker) — begge hos Eng; forholdet til pliktnormer (alt-eller-intet mot
gradert anvendelse); avveiningsnormenes rolle i juridisk argumentasjon.
**Drøftingsakser:** Er avveining reell normativ styring, eller flytter avveiningsnormen
bare skjønnet ett hakk? (Spørsmålet er stilt ordrett i V2007 og V2012 og er den mest
gjenbrukte drøftingsformuleringen i denne delen av pensum.) Er en retningslinje en
norm i egen rett, eller et argumentasjonsredskap?
**Case-forslag:** «Barnets beste» og «god forretningsskikk» lest side om side som
avveiningsnormer: hvilken retning gir hver av dem, og hva sier — eller fortier — de om
vekt? Deretter et nyskrevet lovforarbeid der retningslinjene er uttrykt, men vekten
overlatt til rettsanvenderen.
**Typiske feil:** #1 pugget gjengivelse — dette er den mest repetisjonshefte-utsatte
oppgaven i materialet, og V2024 sier uttrykkelig at ordrett repetisjon fra et navngitt
hefte trekker ned; #16.
**Kvote:** 26 quiz / 24 flashcards.

#### Kapittel 1.6: Normer, verdier og rettigheter
**id:** `jfexfac04-1-6` · **number:** 1.6 · **estimatedMinutes:** 55 · **prerequisites:** `jfexfac04-1-4`

- **Kapitteltype:** tema.
- **Description:** Hvordan rettigheter kan forstås, forbindelsen mellom normer og rettigheter, og Hohfelds fire relasjonspar.

**Eksamensbelegg:** Rettigheter som eget tema i **4 av 40 terminer** (V2008, V2019,
H2023, V2025) — lav historisk frekvens, men **stigende**: H2023 og V2025 er nesten
samme oppgave, med bare små formuleringsforskjeller (§7 pkt. 13). V2008 spurte om
normer, verdier og rettigheter som tre hovedformer for normativitet. V2019 spurte om
forskjellen mellom å ha plikt eller frihet fra plikt og å ha kompetanse — inngangen til
Hohfeld-parene. Normer og verdier: V2007, V2012, V2013. Sjangre: RED, DRØ. Prioritet:
kunne (stigende).
**Begrepskontrakt:** **normer, verdier og rettigheter** som tre former for
normativitet, og hva som skiller dem (Eng); **Hohfelds fire relasjonspar** —
krav–plikt, frihet–ikke-krav, kompetanse–avhengighet, immunitet–inkompetanse;
**Ross' koblingsordperspektiv** anvendt på rettighetsbegrepet (repetisjon fra kap. 1.4,
nå i rettighetsramme); Engs liste over kjennetegn ved rettigheter — som V2025
uttrykkelig sier **ikke må anses som en fasit**; menneskerettigheter som rettighetstype
(begrunnelsen hører i kap. 4.6).
**Randsone (bør kjennes til — gir eksplisitt uttelling, men ligger utenfor
hovedlitteraturen):** **Harts valgteori** og **MacCormicks interesseteori** om
rettigheter. V2025 sier at den som trekker dem inn skal ha en viss uttelling, men at
det ikke bør gå på bekostning av kjernen. Merkes tydelig som randsone i teksten.
**Drøftingsakser:** Er rettigheter noe mer enn en sum av normer, eller er
rettighetsspråket en praktisk forkortelse? Valgteori mot interesseteori: er en
rettighet et vern om valgfrihet eller om en interesse?
**Case-forslag:** «Rett til nødvendig helsehjelp» analysert gjennom Hohfeld-parene —
hvilket par fanger hva, og hvilke deler av rettigheten faller utenfor skjemaet?
**Typiske feil:** #5 behandle Engs kjennetegnsliste som fasit; #16 overse at
«rettighet» er et teoretisk omstridt begrep.
**Kvote:** 26 quiz / 28 flashcards.

### Del 2 — Språk, definisjoner og tolkningsproblemer

#### Kapittel 2.1: Vaghet og flertydighet
**id:** `jfexfac04-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `jfexfac04-0-2`

- **Kapitteltype:** tema.
- **Description:** Emnets mest formelle sondring — flertydighet er en egenskap ved uttrykket, vaghet en egenskap ved uttrykkets betydning.

**Eksamensbelegg:** Prøvd i **7 av 40 terminer** (H2012, V2015, V2017, H2019, V2020,
V2024, H2024). H2024 oppgave 1 ba direkte om sondringen og deretter om å vurdere om
et gitt uttrykk var vagt eller flertydig. §7 pkt. 6: lav frekvens, men **den mest
formelle av alle sondringene og den som straffes hardest når den bommer**. Sjangre:
RED, LOV. Prioritet: **perfekt**.
**Begrepskontrakt:** **vaghet** — gråsone i betydningen, altså en egenskap ved
*begrepet*; **flertydighet** — flere betydninger av det samme *uttrykket*;
**semantisk, syntaktisk og pragmatisk flertydighet**; presiseringens rolle. Alle tre
pensumtradisjoner navngis: Kolflaath ⚠ (fra V2023), Høgberg ⚠ (t.o.m. H2022) og Eng.
H2024 sier uttrykkelig at kandidaten står fritt til å velge begrepsapparat og ikke kan
forventes å drøfte forholdet mellom dem — boka anbefaler ett som arbeidsspråk og
navngir de to andre.
**Drøftingsakser:** Er vaghet en mangel ved lovteksten eller et bevisst redskap som
gir rettsanvenderen nødvendig rom? Kan et uttrykk være både vagt og flertydig
samtidig — og hva gjør det med analysen?
**Case-forslag:** «Vesentlig» og «offentlig sted» i en nyskrevet bestemmelse leses side
om side: det ene er vaghet i betydningen, det andre flertydighet i uttrykket.
Poenget som skal sitte: **å «lete etter vage formuleringer» bommer på distinksjonen** —
det er betydningen, ikke formuleringen, som er vag.
**Typiske feil:** #6 blande vaghet og flertydighet — analysens mest presist beskrevne
begrepsfeil, og dette kapitlets hovedhjem; #2 dagligspråklig synsing om at noe er
«uklart».
**Kvote:** 26 quiz / 24 flashcards.

#### Kapittel 2.2: Årsaker til tolkningsproblemer
**id:** `jfexfac04-2-2` · **number:** 2.2 · **estimatedMinutes:** 45 · **prerequisites:** `jfexfac04-2-1`

- **Kapitteltype:** tema.
- **Description:** Hvorfor lovtekster blir vanskelige å tolke, og hvordan ordvalg, setningsstruktur, ordknapphet og uklar tilbakevisning produserer hver sin type problem.

**Eksamensbelegg:** «Redegjør for årsaker til tolkningsproblemer» er gitt i nesten
identisk form i **H2012, V2015, V2017 og V2020** — fire terminer med samme oppgave.
V2020 skilte mellom «årsaker **og kilder** til tolkningsproblemer». Temaet inngår i
vaghet/flertydighet-gruppen på 7 av 40 terminer. Sjanger: RED. Prioritet: kunne.
**Begrepskontrakt:** **ordvalg**; **setningsstruktur**; **ordknapphet**; **uklar
tilbakevisning** — de fire årsakstypene, med det korresponderende skillet
semantisk/syntaktisk/pragmatisk flertydighet fra kap. 2.1; skillet mellom *årsaker til*
og *kilder til* tolkningsproblemer; forholdet mellom språklige og normative årsaker.
**Drøftingsakser:** Er tolkningsproblemer i bunn og grunn språklige, eller er de
normative problemer i språklig forkledning? Kan bedre lovteknikk fjerne dem, eller bare
flytte dem?
**Case-forslag:** Én nyskrevet bestemmelse skrevet om fire ganger, med én årsakstype
innført per versjon — leseren skal kjenne igjen hvilken som er innført hvor, og
formulere hva som konkret blir usikkert.
**Typiske feil:** #1 pugget gjengivelse (dette er sammen med kap. 1.5 den mest
repetisjonshefte-utsatte oppgaven i materialet); #14 ramse opp årsakstypene uten å
vise problemet i en faktisk tekst.
**Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 2.3: Definisjonslæren
**id:** `jfexfac04-2-3` · **number:** 2.3 · **estimatedMinutes:** 70 · **prerequisites:** `jfexfac04-2-1`

- **Kapitteltype:** tema.
- **Description:** Definisjonsmåtene i de tre pensumtradisjonene, skillet mellom deskriptive og normative definisjoner, og hva som kreves av et godt definiens.

**Eksamensbelegg:** Prøvd i **11 av 40 terminer** (H2012, V2014, H2014, H2015, H2017,
H2020, H2021, H2022, V2023, V2024, H2024). «Om utfordringer og målsettinger ved
formulering av definisjoner» ble gitt **identisk i H2014 og H2015**. V2014 spurte
direkte om skillet mellom definisjoner og karakteristikker. V2023 spurte om deskriptive
og normative definisjoner. Sjangre: RED, LOV. Prioritet: **perfekt** (§7 pkt. 5).
**Begrepskontrakt:** **definisjonsmåtene i tre tradisjoner** — «kategori og
tilleggskrav» mot oppregnende definisjoner (Kolflaath ⚠), intensjonal mot ekstensjonal
(Høgberg ⚠), konnotasjons- mot denotasjonsangivelse (Eng). Videre: **deskriptive** mot
**normative (stipulative)** definisjoner; **definisjon mot karakteristikk**; de formelle
kravene til definiens — **presiserbarhet, operasjonaliserbarhet, ikke-sirkularitet**.
Boka skal vise eksplisitt at de tre tradisjonenes inndelinger langt på vei
korresponderer, og at H2024/H2022 sier at kandidaten fritt kan velge mellom dem.
**Drøftingsakser:** Kan en definisjon være «riktig», eller bare mer eller mindre
tjenlig for et formål? Hva gjør en definisjon vellykket — H2022 spurte om nettopp dette
for legaldefinisjoner, og svaret krever både formelle krav og formålsbetraktninger.
**Case-forslag:** Tre nyskrevne definisjoner av samme begrep («hjemmekontor») — én
oppregnende, én bygget som kategori med tilleggskrav, én sirkulær. Leseren skal
klassifisere alle tre, forklare hvorfor den siste er ubrukelig, og vurdere hvilken av
de to første som tjener et gitt lovformål best.
**Typiske feil:** #4 stoppe ved den overfladiske klassifiseringen — H2022 sier at det
teller positivt å konstatere at legaldefinisjoner er normative og ikke deskriptive,
men at «analysen kan ikke stoppe der»; den egentlige oppgaven er å bestemme
definisjonsmåten. #7 blande definisjon og kvalifikasjonsnorm.
**Kvote:** 30 quiz / 32 flashcards.

#### Kapittel 2.4: Legaldefinisjoner
**id:** `jfexfac04-2-4` · **number:** 2.4 · **estimatedMinutes:** 55 · **prerequisites:** `jfexfac04-2-3`, `jfexfac04-1-4`

- **Kapitteltype:** tema.
- **Description:** Definisjoner i lovtekst, hva som gjør dem vellykkede, og den delvise overlappingen mellom legaldefinisjon og kvalifikasjonsnorm.

**Eksamensbelegg:** Legaldefinisjoner står sentralt i tre av de fire moderne
lovtekstanalysene: H2020 (definisjonene i smittevernloven § 1-3, med spørsmål om
hvordan de forholder seg til alminnelig språkbruk), H2022 (hva slags definisjoner man
finner i helseforskningsloven § 4, og hva som gjør en legaldefinisjon vellykket) og
H2024 (straffeloven § 185). Del av definisjonslæren, 11 av 40 terminer. Sjangre: LOV,
RED. Prioritet: **perfekt**.
**Begrepskontrakt:** **legaldefinisjon**; legaldefinisjonen som **normativ (stipulativ)
definisjon** og dermed som en form for **kvalifikasjonsnorm** — men, jf. H2024: det
finnes kvalifikasjonsnormer som ikke er legaldefinisjoner, og deskriptive definisjoner
er ikke normer i det hele tatt. Forholdet mellom legaldefinisjonen og alminnelig
språkbruk (H2020 ba direkte om dette). Kriterier for en vellykket legaldefinisjon
(H2022).
**Drøftingsakser:** Bør en legaldefinisjon følge dagligspråket eller bryte med det —
og hva koster hvert valg i form av forutberegnelighet? Rekker en legaldefinisjon
utenfor sin egen lov? Er definisjonsbestemmelsen normativ selv når den ser deskriptiv
ut?
**Case-forslag:** En nyskrevet definisjonsbestemmelse med tre bokstavpunkter: ett som
gjengir alminnelig språkbruk, ett som stipulerer noe som klart bryter med den, og ett
tvilstilfelle. Fasiten skriver ut begge lesningene av tvilstilfellet og merker det
«(omstridt — begge forsvarlige)».
**Typiske feil:** #4 stoppe ved «normativ, ikke deskriptiv»; #7 sette likhetstegn
mellom kvalifikasjonsnorm og definisjon; #5 presentere én klassifisering uten
begrunnelse.
**Kvote:** 24 quiz / 24 flashcards.

### Del 3 — Argumentasjon og resonnement

#### Kapittel 3.1: Deskriptiv og normativ argumentasjon
**id:** `jfexfac04-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `jfexfac04-1-1`

- **Kapitteltype:** tema.
- **Description:** Skillet mellom å beskrive og å foreskrive, og det vanskelige spørsmålet om rettsdogmatisk argumentasjon de lege lata er deskriptiv eller normativ.

**Eksamensbelegg:** Argumentasjons- og utsagnsteori er prøvd i **16 av 40 terminer**
(H2007, V2008, H2008, H2009, H2013, V2014, H2014, V2016, H2017, H2018, H2019, H2021,
V2023, V2024, H2025, V2026). H2025 spurte direkte om forskjellen på deskriptiv og
normativ argumentasjon og om rettsdogmatisk argumentasjon de lege lata er det ene
eller det andre. H2009 spurte om måter å skille deskriptive og normative utsagn.
Spørsmålet «er juristers utsagn om hva som er rett forskjellige fra rettens normer?»
er stilt i H2008, H2014 og V2016. Sjangre: RED, DRØ. Prioritet: kunne (§7 pkt. 10).
⚠ **Belegg-forbehold:** H2025 har oppgavesett, men **ingen sensorveiledning** i arkivet.
Temaet er hjemlet, men ingen påstand om hva sensor belønner kan bygge på H2025.
**Begrepskontrakt:** **deskriptivt utsagn**; **normativt utsagn**; **de lege lata** og
**de lege ferenda** — begge skrevet ut i klarspråk ved første bruk; rettsdogmatisk
argumentasjon som mulig tredje kategori; forholdet mellom juristers utsagn om gjeldende
rett og rettens egne normer (Eng).
**Drøftingsakser:** Er et de lege lata-utsagn en beskrivelse av hvilke normer som
gjelder, eller et normativt standpunkt om hva som bør legges til grunn? Kan et rent
deskriptivt utsagn ha normative konsekvenser? Dette er bokas **vippe-case** i denne
delen: begge landinger er fullt forsvarlige, og fasiten skriver ut begge.
**Case-forslag:** Tre utsagn hentet fra en nyskrevet juridisk betenkning sorteres som
deskriptive, normative eller tvilsomme — og det tvilsomme drøftes begge veier, merket
«(omstridt — begge forsvarlige)».
**Typiske feil:** #3 svare på noe annet enn det oppgaven ber om; #16 bruke
«normativ» som om ordet hadde én selvsagt betydning.
**Kvote:** 24 quiz / 22 flashcards.

#### Kapittel 3.2: Standpunkt-, holdbarhets- og relevansargumenter
**id:** `jfexfac04-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `jfexfac04-3-1`

- **Kapitteltype:** tema.
- **Description:** De tre argumenttypene i Kolflaaths apparat, og hvordan konsekvensargumenter virker forskjellig i rettspolitikk og rettsdogmatikk.

**Eksamensbelegg:** Argumenttypene er inne i pensum fra H2021 og prøvd i **H2021,
V2023, V2024 og V2026** — fire terminer på fem år, klart i vekst (§7 pkt. 11). V2023
oppgave 1 b ba direkte om standpunkt-, holdbarhets- og relevansargumenter.
Konsekvensargumenter bar hele V2026 oppgave 1 («på hvilke måter konsekvensbetraktninger
kan være relevante i en intern og ekstern kritikk av retten»). Del av
argumentasjonsteorien, 16 av 40 terminer. Sjangre: RED, DRØ. Prioritet: kunne
(stigende).
**Begrepskontrakt:** **standpunktargument**, **holdbarhetsargument**,
**relevansargument** (Kolflaath ⚠ — inne i pensum fra V2023, men prøvd allerede
H2021); **konsekvensargumenter** i rettspolitikk og i rettsdogmatikk (Kolflaath ⚠);
koblingen til kritikkstoffet i del 5 — V2026 gir uttelling til den som kobler
holdbarhet/relevans-skillet til kritikkoppgaven, men sier at det ikke er krav for
toppkarakter.
**Drøftingsakser:** Er relevans et logisk eller et normativt spørsmål? Kan
konsekvensargumenter brukes de lege lata, eller hører de bare hjemme de lege ferenda?
**Case-forslag:** Én argumentkjede fra en nyskrevet høringsuttalelse brytes ned i de
tre typene, og leseren skal identifisere hvilket ledd som faktisk bærer konklusjonen.
**Typiske feil:** #15 bruke terminologien uten å beherske den — V2023 sier at den som
bare bruker en betegnelse uten å vise forståelse skal ha mindre uttelling enn den som
kan forklare poenget; #3.
**Kvote:** 24 quiz / 24 flashcards.

#### Kapittel 3.3: Logikk, hermeneutikk og sannhet
**id:** `jfexfac04-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** `jfexfac04-3-2`

- **Kapitteltype:** tema.
- **Description:** Logisk gyldig form mot sunt resonnement, hermeneutisk tolkning, og de fire sannhetsteoriene.

**Eksamensbelegg:** Logisk gyldig form er prøvd i **V2014, V2016 og H2019** — lite
volum, men det går igjen nesten ordrett når det først kommer (§7 pkt. 16). Hermeneutisk
tolkning: H2019, ett delspørsmål, der veiledningen selv sier at store kunnskaper ikke
bør forventes. Sannhetsteoriene: H2013 og H2018, der spørsmålet var om «sannhet» kan
inngå i en kritikk av retten. Del av argumentasjonsteorien, 16 av 40 terminer. Sjangre:
RED, og kontrollspørsmålsvarianten av RED. Prioritet: kunne (logikken) / **kjenne**
(hermeneutikk og sannhetsteoriene — merkes som «bør kjennes til»).
**Begrepskontrakt:** **logisk gyldig form**; **sunt resonnement** (gyldig form pluss
sanne premisser); **hermeneutisk tolkning** og forståelsens sirkel; de fire
sannhetsteoriene — **korrespondanse, koherens, konsensus, performativ**; spørsmålet om
sannhetsbegrepet kan bære en kritikk av retten (H2018).
**Drøftingsakser:** Kan en juridisk slutning være logisk gyldig, eller er den alltid
mer enn en formell utledning? Hvilken sannhetsteori passer best på utsagn om gjeldende
rett — og hva sier valget om ens rettsfilosofiske ståsted (bro til kap. 4.1)?
**Case-forslag:** Et syllogismeoppsett av en enkel rettsanvendelse som er **gyldig,
men ikke sunt** — premissene er logisk korrekt sammenføyd, men den ene premissen er
gal. Deretter det motsatte: et sunt, men ugyldig framsatt resonnement.
**Typiske feil:** #16 bruke «gyldig» i dagligspråklig betydning; #2 dagligspråklig
synsing om «sannhet» i stedet for å bruke en navngitt sannhetsteori.
**Kvote:** 22 quiz / 24 flashcards.

### Del 4 — Rett og moral

#### Kapittel 4.1: Rett og praktisk fornuft
**id:** `jfexfac04-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `jfexfac04-0-2`

- **Kapitteltype:** tema.
- **Description:** Aksen hele denne delen hviler på — spørsmålet om det finnes kriterier for å vurdere holdbarheten av gjeldende rett, og skillet mellom kognitivisme og non-kognitivisme.

**Eksamensbelegg:** De rettsfilosofiske hovedposisjonene er prøvd i **22 av 40
terminer** (H2006, V2007, H2007, V2008, V2009, H2009, V2010, H2010, H2011, H2012,
H2013, H2015, V2018, H2018, H2019, V2021, V2022, V2023, V2024, V2025, H2025, V2026) —
og i **6 av de siste 8**. Kognitivisme/non-kognitivisme som eksplisitt tema: **6 av 40**
(H2006, H2011, H2013, V2018, H2019, V2023). «Rett og praktisk fornuft» var
åpningsspørsmålet i H2006, og synet på praktisk fornuft i de tre retningene var hele
oppgaven i H2010 — og kom igjen som kritikkriterium i H2011 og V2018. H2011 spurte
ordrett: «Kan det etableres kriterier til vurdering og kritikk av gjeldende rett?»
Sjangre: RED, DRØ. Prioritet: **perfekt** (§7 pkt. 2 — inngangen til hele trekløveret).
**Begrepskontrakt:** **rett og praktisk fornuft** (Eng, *Rettsfilosofi* del IV);
**kognitivisme** — moralske utsagn kan være sanne eller usanne og kan erkjennes;
**non-kognitivisme** — de kan det ikke. Det som **må sitte** (analysens §5 pkt. 8):
både kantiansk rettsfilosofi og utilitarisme er **kognitivistiske**, skandinavisk
rettsrealisme er **non-kognitivistisk** — men rettsrealismen kan likevel forsvare
kritikk, bare ikke *fornuftsforankret* kritikk.
**Randsone (bør kjennes til):** moralsk realisme og antirealisme fra EXPHIL03. V2023
sier uttrykkelig at den som trekker dette inn skal ha uttelling. Kobles med
markdown-lenke til `exphil03`-boka der den finnes.
**Drøftingsakser:** Kan det etableres kriterier til vurdering og kritikk av gjeldende
rett? (H2011 ordrett.) Er non-kognitivisme forenlig med rettskritikk — og hva slags
kritikk blir i så fall igjen?
**Case-forslag:** Hverdagsanker: setningen «denne loven er urettferdig» analysert tre
ganger — som (a) en påstand om et faktum som kan være sant eller usant, (b) et uttrykk
for en holdning, (c) en fornuftsbasert vurdering med begrunnelse. De tre lesningene ER
de tre posisjonene, før noen av dem er navngitt.
**Typiske feil:** #8 plassere posisjonene feil på kognitivisme-aksen — dette kapitlets
hovedhjem; #16.
**Kvote:** 24 quiz / 24 flashcards.

#### Kapittel 4.2: Skandinavisk rettsrealisme
**id:** `jfexfac04-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `jfexfac04-4-1`

- **Kapitteltype:** tema.
- **Description:** Olivecrona og Ross — sanksjonsanalysen, spørsmålet om normers bindende kraft, og hva realismen kan og ikke kan kritisere.

**Eksamensbelegg:** Prøvd i **9 av 40 terminer** (H2007, V2010, H2010, H2013, H2015,
H2018, V2021, V2023, V2024). V2023-veiledningen behandler sanksjonsanalysen særskilt og
sier at den som bare bruker betegnelsen uten å vise forståelse skal ha mindre uttelling
enn den som kan forklare poenget. Sjangre: RED, DRØ. Prioritet: **perfekt** som del av
trekløveret; detaljene i Olivecronas analyse: kunne (§7 pkt. 14).
**Begrepskontrakt:** **skandinavisk rettsrealisme**; **Olivecronas sanksjonsanalyse**;
Olivecronas vurdering av **normers bindende kraft**; **Ross' koblingsordanalyse**
(repetisjon fra kap. 1.4 og 1.6, nå i rettsfilosofisk ramme — koblingsordet har ingen
selvstendig realitet bak seg); realismen som non-kognitivistisk posisjon, og hva den
dermed kan og ikke kan si om gjeldende retts holdbarhet.
**Drøftingsakser:** Kan en non-kognitivist kritisere gjeldende rett — og i så fall med
hvilken målestokk? Er «bindende kraft» en psykologisk kjensgjerning eller en normativ
egenskap? Hva blir igjen av pliktbegrepet når normen reduseres til en anvisning til
domstolene?
**Case-forslag:** En nyskrevet straffebestemmelse lest gjennom sanksjonsanalysen —
først slik en pliktnormlesning ville gjort det (kap. 1.2), så slik realisten leser den.
Poenget som skal komme fram: det er ikke to beskrivelser av samme sak, det er to ulike
oppfatninger av hva en norm *er*.
**Typiske feil:** #15 bruke ordet «sanksjonsanalyse» uten å kunne forklare poenget
(V2023 straffer nettopp dette); #8.
**Kvote:** 24 quiz / 26 flashcards.

#### Kapittel 4.3: Utilitarismen
**id:** `jfexfac04-4-3` · **number:** 4.3 · **estimatedMinutes:** 70 · **prerequisites:** `jfexfac04-4-1`

- **Kapitteltype:** tema.
- **Description:** Nytteprinsippet, forskjellen mellom Benthams kvantitative og Mills kvalitative hedonisme, og skillet mellom handlings- og regelutilitarisme.

**Eksamensbelegg:** Prøvd i **17 av 40 terminer** (H2006, V2007, H2007, V2008, V2009,
V2010, H2010, H2011, H2013, H2015, V2018, V2021, V2022, V2024, V2025, H2025, V2026) —
materialets **hyppigste enkeltposisjon**. Sjangre: RED, DRØ, CASE. Prioritet:
**perfekt** (§7 pkt. 2).
**Begrepskontrakt:** **nytteprinsippet**; **konsekvensialisme**; **Benthams
kvantitative hedonisme**; **Mills kvalitative hedonisme** — høyere og lavere gleder;
**handlingsutilitarisme** mot **regelutilitarisme**; Mills åpning for **rettigheter som
midler til nyttemaksimering**. Alt forankret i Eng, *Rettsfilosofi* del IV.
**Drøftingsakser:** Er Mill fortsatt utilitarist når han innfører kvalitetsforskjeller
mellom gleder — eller har han smuglet inn en målestokk utenfra? Kan utilitarismen
begrunne ufravikelige rettigheter, eller bare rettigheter som holder så lenge de
lønner seg? Gir regelutilitarismen et reelt svar eller bare en utsettelse?
**Case-forslag:** En nyskrevet lovendring (for eksempel om obligatorisk registrering
av et helseopplysningsregister) vurdert utilitaristisk i begge varianter — der
handlings- og regelutilitarismen faktisk lander ulikt, slik at leseren ser at valget av
variant er avgjørende.
**Typiske feil:** #9 behandle utilitarismen som **én** teori — V2025 og V2026 sier
begge at svaret avhenger av hvilken variant man vurderer. Dette er kapitlets
hovedhjem. #1 gjengi nytteprinsippet uten å bruke det på noe.
**Kvote:** 30 quiz / 30 flashcards.

#### Kapittel 4.4: De fire innvendingene mot utilitarismen
**id:** `jfexfac04-4-4` · **number:** 4.4 · **estimatedMinutes:** 55 · **prerequisites:** `jfexfac04-4-3`

- **Kapitteltype:** tema.
- **Description:** Sammenlignings-, normativitets-, rettighets- og begrunnelsesproblemet, og hvordan hver innvending kan besvares fra utilitaristisk hold.

**Eksamensbelegg:** V2026 oppgave 2 var i sin helhet en vurdering av holdbarheten av
innvendingene mot utilitarismen, og V2025 hadde innvendingene som delkrav (§7 pkt. 8).
Innvendingene forutsettes i tortur-oppgaven, som er gitt i **H2006, H2011 og V2018**
med nesten identisk formulering i de to siste. Del av hovedposisjonene, 22 av 40
terminer. Sjanger: DRØ. Prioritet: **perfekt**.
**Begrepskontrakt:** de fire innvendingene slik Eng oppstiller dem —
**sammenligningsproblemet** (kan nytte måles og sammenlignes på tvers av personer?),
**normativitetsproblemet** (hva forplikter meg til å maksimere nytte?),
**rettighetsproblemet** (kan et mindretall ofres for flertallets samlede nytte?) og
**begrunnelsesproblemet** (hva begrunner selve nytteprinsippet?); hvilke svar
utilitaristen kan gi på hver av dem, og hvor regelutilitarismen hjelper og ikke hjelper.
**Drøftingsakser:** Hvilken av de fire innvendingene er den sterkeste — og er svaret
avhengig av hvilken utilitaristisk variant man angriper? Kan regelutilitarismen redde
rettighetene uten å slutte å være utilitarisme?
**Case-forslag:** Tortur-spørsmålets utilitaristiske halvdel i nyskrevet innramming:
kan et **totalforbud** mot tortur begrunnes utilitaristisk, eller vil enhver
utilitarist måtte akseptere unntak i tilstrekkelig ekstreme tilfeller? Den kantianske
halvdelen kommer i kap. 4.5, og de to settes sammen i 4.6.
**Typiske feil:** #9 behandle utilitarismen som én teori; #3 redegjøre når oppgaven
sier «diskuter» — V2026 sier uttrykkelig at den som problematiserer godt og drøfter
selvstendig skal ha **ekstra** uttelling.
**Kvote:** 24 quiz / 22 flashcards.

#### Kapittel 4.5: Kantiansk rettsfilosofi
**id:** `jfexfac04-4-5` · **number:** 4.5 · **estimatedMinutes:** 70 · **prerequisites:** `jfexfac04-4-1`

- **Kapitteltype:** tema.
- **Description:** Det kategoriske imperativ, formelen om mennesket som formål i seg selv, og Kants rettsprinsipp om størst mulig handlingsrom.

**Eksamensbelegg:** Prøvd i **16 av 40 terminer** (H2006, V2007, H2007, V2009, H2009,
V2010, H2010, H2011, H2013, H2015, V2018, V2021, V2022, V2024, V2025, H2025). Sjangre:
RED, DRØ, CASE. Prioritet: **perfekt** (§7 pkt. 2).
**Begrepskontrakt:** **fornuftsbasert naturrett**; **det kategoriske imperativ** med
universaliserbarhetsformelen; **formelen om mennesket som formål i seg selv**, aldri
bare som middel; **Kants rettsprinsipp** — størst mulig handlingsrom for den enkelte,
forenlig med tilsvarende handlingsrom for alle andre; Kant som **kognitivist**. Alt
forankret i Eng, *Rettsfilosofi* del IV.
**Drøftingsakser:** Hvordan skal rettsprinsippet anvendes når to friheter faktisk
kolliderer — gir det et svar, eller bare en formulering av problemet? Er «formål i seg
selv» et absolutt forbud eller en tung avveiningsnorm (bro til kap. 1.5)?
**Case-forslag:** Tortur-spørsmålets kantianske halvdel: hvorfor blir totalforbudet
lettere å begrunne her enn i kap. 4.4 — og hva koster det? Deretter en vaksinasjonsplikt
vurdert kantiansk (V2021-sjangeren i nyskrevet innramming), der rettsprinsippet gir en
mindre opplagt konklusjon enn studenter venter.
**Typiske feil:** #8 plassere Kant som non-kognitivist eller behandle det kategoriske
imperativ som en nyttekalkyle i forkledning; #16.
**Kvote:** 30 quiz / 30 flashcards.

#### Kapittel 4.6: De tre posisjonene satt opp mot hverandre
**id:** `jfexfac04-4-6` · **number:** 4.6 · **estimatedMinutes:** 55 · **prerequisites:** `jfexfac04-4-2`, `jfexfac04-4-3`, `jfexfac04-4-5`

- **Kapitteltype:** tema.
- **Description:** Materialets mest gjenbrukte oppgavemal — rettsrealisme, utilitarisme og kantiansk rettsfilosofi sammenlignet langs faste akser, med moralske skranker for lovgivningskompetansen som gjennomgående prøvestein.

**Eksamensbelegg:** De tre posisjonene settes opp mot hverandre i én og samme oppgave i
**9 terminer** (H2007, V2010, H2010, H2013, H2015, V2021, V2024 — og i redusert todelt
form, utilitarisme mot Kant, i V2009, H2011, V2018, V2022, V2025). Dette er
**materialets aller mest gjenbrukte oppgavemal**. Oppgaven «moralske skranker for
lovgivningskompetansen besvart fra de tre posisjonene, med egen vurdering av styrker og
svakheter» er gitt i **H2007 og H2015**, der H2015-veiledningen selv sier at oppgaven
bygger på H2007 og at veiledningen derfra er gjenbrukt. Sjangre: DRØ, RED. Prioritet:
**perfekt**.
**Begrepskontrakt:** ingen nye begreper — kapitlet er et **sammenligningskart** langs
fem faste akser: (1) plassering på kognitivisme-aksen, (2) hva som gjør en handling
eller en regel rett, (3) hvilken plass rettigheter har, (4) hvilken rettskritikk
posisjonen kan bære, (5) hvordan hver av dem stiller seg til moralske skranker for
lovgiverens kompetanse (bro tilbake til kap. 1.3).
**Drøftingsakser:** Har noen av posisjonene et fortrinn når det gjelder rettskritikk?
Kan de kombineres, eller utelukker de hverandre? Hvilken posisjon gir det mest
overbevisende svaret på om lovgiveren står moralsk fritt?
**Case-forslag:** Én og samme nyskrevne lovendring vurdert fra alle tre posisjonene,
med en **skarp landing** i den ene retningen — jf. DNA-kravet om konklusjonsvariasjon:
forbehold er verktøy, ikke obligatorisk garnityr, og minst én modellert drøftelse i
boka skal konkludere klart og likevel være toppnivå.
**Typiske feil:** #8 plassere posisjonene feil på kognitivisme-aksen; #1 gjengi tre
pensumkapitler etter hverandre uten å sammenligne — dette er den vanligste måten å
skrive en C-besvarelse på denne oppgavemalen.
**Kvote:** 24 quiz / 18 flashcards.

### Del 5 — Kritikk av retten

#### Kapittel 5.1: Intern og ekstern kritikk
**id:** `jfexfac04-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `jfexfac04-4-1`

- **Kapitteltype:** tema.
- **Description:** Skillet som avgjør hvilke argumenter som teller når gjeldende rett skal kritiseres, og hva som gjør en kritikk uavhengig av juridisk metode.

**Eksamensbelegg:** Kritikk av retten er prøvd i **11 av 40 terminer** (H2011, H2012,
H2015, V2017, H2017, V2018, H2018, H2022, H2023, V2024, V2026) — og er **stigende**.
V2017 ba direkte om å redegjøre for begrepet «kritikk» og deretter vise gjennom
eksempler hvordan retten kan kritiseres **uavhengig av juridisk metode**. H2023 oppgave
1 a ba om skillet mellom intern og ekstern kritikk — og var samme semester tema for
den obligatoriske oppgaven, som er inngangsbillett til eksamen. Eriksen, *Kritikk*,
punkt 3.3–3.4 er hovedlitteratur for skillet. Sjangre: RED, DRØ. Prioritet: **perfekt**
(§7 pkt. 7).
**Begrepskontrakt:** **kritikk** som fagbegrep (Eriksen, *Kritikk*) — hva som skiller
kritikk fra misnøye og fra rettsanvendelse; **intern kritikk** (målestokken hentes fra
retten selv — dens egne prinsipper, formål og konsistenskrav); **ekstern kritikk**
(målestokken hentes utenfra — moralteori, samfunnsvitenskap, politisk teori); forholdet
mellom kritikk og juridisk metode.
**Drøftingsakser:** Er intern kritikk egentlig kritikk, eller bare god rettsanvendelse
med annet navn? Hvilken kritikkform er mest slagkraftig overfor en lovgiver — og
overfor en domstol? Kan konsekvensbetraktninger bære både intern og ekstern kritikk?
(V2026 oppgave 1 spurte om nettopp dette — kobling til kap. 3.2.)
**Case-forslag:** Én og samme nyskrevne regel kritisert to ganger — først internt
(regelen strider mot lovens eget formål og mot en tilgrensende bestemmelse), så
eksternt (regelen er uforenlig med et moralsk prinsipp fra del 4). Konsekvensargumenter
brukes i begge, med ulik funksjon.
**Typiske feil:** #2 forklare «kritikk» ut fra dagligspråket i stedet for ut fra
faglitteraturen — H2018 sier at en besvarelse som bare inneholder alminnelige
synsinger over ordenes dagligspråklige betydning skal gis et vesentlig trekk, og at det
er et spørsmål om kandidaten kan bestå i det hele tatt; #3.
**Kvote:** 24 quiz / 22 flashcards.

#### Kapittel 5.2: Formalkritikk, normativ kritikk og empirisk kritikk
**id:** `jfexfac04-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `jfexfac04-5-1`

- **Kapitteltype:** tema.
- **Description:** De tre kritikkformene, redskapene hver av dem bruker, og underkategoriene innenfor hver form.

**Eksamensbelegg:** H2018 spørsmål 1 ba direkte om hva som kjennetegner formalkritikk,
normativ kritikk og empirisk kritikk, «herunder de redskaper disse formene for kritikk
anvender», med oppfordring om å angi underkategorier. Beslektede formuleringer i H2011,
H2015, H2017, V2018 og H2022. Del av kritikkstoffet, 11 av 40 terminer.
H2018-veiledningen sier at kandidater som evner å gi **selvstendige eksempler** på
kritikkformene skal gis **betydelig** uttelling. Sjangre: RED, DRØ. Prioritet:
**perfekt**.
**Begrepskontrakt:** **formalkritikk** — motstrid, inkonsistens, uklarhet, brudd på
rettens egne formkrav; **normativ kritikk** — målestokk hentet fra verdier eller
moralteori (bro til del 4); **empirisk kritikk** — virker regelen slik den er forutsatt
å virke? Alle tre med de **redskapene** hver av dem anvender og med underkategoriene
(Eriksen). Forholdet til intern/ekstern-skillet fra kap. 5.1: de to inndelingene er
ikke identiske, og å vise hvordan de krysser hverandre er et A-grep.
**Drøftingsakser:** Kan empirisk kritikk stå alene, eller forutsetter den alltid en
normativ premiss om hva regelen *burde* oppnå? Er formalkritikk verdinøytral?
**Case-forslag:** Tre nyskrevne kritikker av samme regel, én per form, hver med et
selvstendig eksempel som **ikke** står i noen pensumtekst — nettopp den ferdigheten
H2018 premierer betydelig. Deretter en øvelse der leseren skal plassere fem korte
kritikkutsagn i riktig form.
**Typiske feil:** #2 dagligspråklig synsing om «formalkritikk» og «legitimitet» —
H2018 er kilden til denne straffebestemmelsen; #14 ramse opp de tre formene og
underkategoriene uten å bruke dem på noe.
**Kvote:** 24 quiz / 26 flashcards.

#### Kapittel 5.3: Rettssosiologisk kritikk og kritiske kjønnsperspektiver
**id:** `jfexfac04-5-3` · **number:** 5.3 · **estimatedMinutes:** 45 · **prerequisites:** `jfexfac04-5-2`

- **Kapitteltype:** tema.
- **Description:** Kritikk med samfunnsvitenskapelig målestokk, og kvinnerettens bidrag til rettskritikken.

**Eksamensbelegg:** H2023 oppgave 1 b spurte hvordan utviklingen av kvinneretten kan
sies å være en kritikk av retten. Ikdahls kapittel om kvinnerett og kjønnsperspektiv er
inne i pensum fra H2023 og er oppført i hovedlitteraturen i V2026-veiledningen.
Rettssosiologisk rettskritikk hører til Eriksens fremstilling. Del av kritikkstoffet,
11 av 40 terminer. §7 pkt. 17 plasserer dette i plusspoeng-/randsonen, men det er
**stigende**. Sjangre: RED, DRØ. Prioritet: **kjenne** (på vei mot kunne — merkes
eksplisitt som «bør kjennes til» i teksten).
**Begrepskontrakt:** **rettssosiologisk rettskritikk** (Eriksen, *Kritikk*) — retten
målt mot hvordan den faktisk virker i samfunnet; **kritiske kjønnsperspektiver** og
**kvinnerett** (Ikdahl, «Om kvinnerett og kjønnsperspektiv», i Høgberg/Sunde ⚠ — inne
fra H2023); spørsmålet om et kjønnsperspektiv er intern eller ekstern kritikk, som var
selve drøftelsen H2023 la opp til.
**Drøftingsakser:** Er kvinneretten intern kritikk (den måler retten mot rettens eget
likhetsideal) eller ekstern (den henter målestokken fra en samfunnsanalyse utenfra) —
og hva vinner man på hvert svar? Kan et *perspektiv* være kritikk uten å formulere en
eksplisitt norm?
**Case-forslag:** En nyskrevet regel om fordeling av foreldrepermisjon analysert med
kjønnsperspektiv, og deretter plassert i intern/ekstern-skjemaet fra kap. 5.1 og i
tre-formers-skjemaet fra 5.2. Poenget: samme kritikk kan skifte plass i skjemaene
avhengig av hvilken målestokk man gjør eksplisitt.
**Typiske feil:** #3 svare på noe annet — å gi en generell fremstilling av kvinnerett
som rettsområde når oppgaven spør om den som *kritikk*; #16.
**Kvote:** 18 quiz / 18 flashcards.

### Del 6 — Rett, samfunn og rettsstat

#### Kapittel 6.1: Rettsstatsidéen og rettsstatens verdigrunnlag
**id:** `jfexfac04-6-1` · **number:** 6.1 · **estimatedMinutes:** 70 · **prerequisites:** `jfexfac04-5-1`

- **Kapitteltype:** tema.
- **Description:** Rettsstatens grunnprinsipper og verdier slik gjeldende pensum fremstiller dem, og hvordan verdigrunnlaget brukes som målestokk for kritikk av gjeldende rett.

**Eksamensbelegg:** ⚠ **Kalibreringsnote — les før du skriver.** Samlekategorien «rett,
samfunn, legitimitet og rettsstat» scorer **24 av 40 terminer**, høyest i hele
materialet (H2006, H2007, H2008, H2009, H2010, H2011, V2013, H2013, V2014, H2014,
V2015, H2015, V2016, V2017, H2017, V2018, H2018, V2019, H2019, H2020, V2021, V2022,
H2022, V2025). **Men mesteparten av scoren hviler på utgått Sand-stoff** —
legitimitetstypologien, polysentri, kommunikativ differensiering, risikosamfunn og
miljørettens utfordringer. Dette kapitlet skal bygge på **Mæhle/Aarli, *Fra lov til
rett*** (pensum fra V2021), ikke på legitimitetstypologien. I moderne form er
rettsstatsstoffet prøvd i **V2019, V2021, V2022, H2022 og V2025** (§7 pkt. 12) — det er
disse fem terminene som skal bære kapitlet. H2022 oppgave 2 var nettopp rettsstatens
verdigrunnlag som grunnlag for kritikk av gjeldende rett; V2021 spurte om en rettsstat
kan innføre vaksinasjonsplikt; V2022 om et krigsforbud kan forenes med utilitaristisk
og kantiansk etikk og med rettsstatlige verdier. Sjanger: DRØ. Prioritet: **perfekt**.
**Begrepskontrakt:** **rettsstatsidéen** og dens grunnprinsipper, herunder sikring av
grunnleggende rettigheter; **rettsstatens verdigrunnlag** — frihet og
selvbestemmelsesrett, likhet, menneskeverd, rettssikkerhet — fremstilt som **dynamisk**,
ikke som en fast liste; **rettens forankring av rettigheter** (bro tilbake til
kap. 1.6). Alt hos Mæhle/Aarli ⚠.
**Drøftingsakser:** Er rettsstatens verdigrunnlag en **intern** eller en **ekstern**
målestokk for kritikk (bro til kap. 5.1)? Kan en rettsstat innføre plikt til
vaksinasjon — og endrer svaret seg med hvilken av del 4-posisjonene man legger til
grunn? Er verdigrunnlagets dynamiske karakter en styrke eller en svakhet når det skal
brukes som kritisk målestokk?
**Case-forslag:** En nyskrevet krisefullmaktslov drøftet mot rettsstatens verdigrunnlag
— der de fire verdiene trekker i ulike retninger, slik at leseren må veie og ikke bare
liste.
**Typiske feil:** #1 gjengi verdilista uten å bruke den på noe; #3 redegjøre for
rettsstatsidéen når oppgaven ber om en kritikk basert på den — V2025 sier at det ikke
holder å redegjøre når fokuset skal ligge på begrunnelsen.
**Kvote:** 28 quiz / 28 flashcards.

#### Kapittel 6.2: Rettens funksjoner — og pensumhistorikken du skal kjenne, ikke pugge
**id:** `jfexfac04-6-2` · **number:** 6.2 · **estimatedMinutes:** 40 · **prerequisites:** `jfexfac04-6-1`

- **Kapitteltype:** tema.
- **Description:** Rettens funksjoner i samfunnet og skillet mellom rettslig, politisk og etisk argumentasjon, pluss en kort orientering om det utgåtte stoffet som fyller de eldre oppgavesettene.

**Eksamensbelegg:** Rettens funksjoner hører til Mæhle/Aarli ⚠. Rett, politikk og etikk
som ulike argumentasjonsformer og deres funksjoner var tema i **H2014, V2017 og V2018**
— Sand-forankret, men temaet har overlevd inn i Mæhle/Aarli-regimet i modifisert form
(§7 pkt. 22). Historikk-delen dekker det som er **ute**: internasjonalisering,
rettslig polysentri og pluralisme ble prøvd i **6 terminer, alle høst, alle før 2012**
(H2006, H2007, H2008, H2009, H2010, H2011) og aldri siden; Sands legitimitetstypologi,
kommunikative differensiering og risikosamfunn var pensum t.o.m. H2019; profesjonsetikk
og juristroller var egen pensumdel og egen oppgavedel i **5 terminer, alle vår, alle
før 2011** (V2006, V2007, V2008, V2009, V2010). Prioritet: kunne (funksjonene) /
**kjenne** (historikken).
⚠ **Dette er bokas ENESTE omtale av utgått pensum.** Den skal være kort, eksplisitt
merket «ikke pensum i dag», og ha ett formål: at leseren som trener på gamle sett
skjønner hvorfor halve oppgaveteksten handler om noe hun ikke skal kunne. Historikken
skal **ikke** ha begrepsdefinisjoner som genererer flashcards på utgått stoff.
**Begrepskontrakt:** **rettens funksjoner** (Mæhle/Aarli ⚠); **rett, politikk og etikk
som ulike argumentasjonsformer** og hva som skiller dem. Historikk-oversikten gis som
navn med én forklarende setning hver — legitimitetstypene, rettslig polysentri og
pluralisme, kommunikativ differensiering, risikosamfunn, profesjonsetikkens juristroller
— alle merket «ikke pensum i dag; står her for at gamle oppgavesett skal gi mening».
**Drøftingsakser:** Hvor går grensen mellom rettslig og politisk argumentasjon — og hva
skjer med den grensen når retten selv gjør politiske avveininger til rettslige
standarder (bro til avveiningsnormene i kap. 1.5)?
**Case-forslag:** En passasje fra et nyskrevet lovforarbeid sorteres i rettslige,
politiske og etiske argumenter — der ett av argumentene med vilje motstår sortering.
**Typiske feil:** #3 bruke tid på utgåtte temaer i en moderne besvarelse fordi de
dukket opp i et gammelt sett man har trent på; #1.
**Kvote:** 16 quiz / 18 flashcards.

### Del 7 — Eksamenstrening

#### Kapittel 7.1: Redegjørelsesspørsmålet
**id:** `jfexfac04-7-1` · **number:** 7.1 · **estimatedMinutes:** 45 · **prerequisites:** `jfexfac04-0-2`

- **Kapitteltype:** sjanger.
- **Description:** Emnets vanligste enkeltform, forskjellen mellom å redegjøre og å diskutere, og den korte kontrollspørsmålsvarianten.

**Eksamensbelegg:** Redegjørelsesspørsmålet («gjør rede for», «forklar», «angi») er den
vanligste enkeltformen i hele materialet og forekommer i alle temagruppene. Faste
formuleringer: *avveiningsnorm og retningslinje*, *kognitivisme og non-kognitivisme*,
*semantisk vaghet og semantisk flertydighet*, *deskriptive og normative definisjoner*,
*standpunkt-, holdbarhets- og relevansargumenter*, *intern og ekstern kritikk*.
V2025-veiledningen skiller **uttrykkelig** mellom «redegjør» og «diskuter»: et
redegjørelsesspørsmål *krever ikke* drøftelse, men gode besvarelser går bredere eller
dypere og problematiserer. H2024 sier at rene gjengivelser av tilstøtende stoff som
oppgaven ikke ber om, ikke skal gi særlig uttelling. **Kontrollspørsmålsvarianten:**
H2019 oppgave 1 ba om **fire av fem** korte begrepsforklaringer; veiledningen forklarer
hensikten — bredden skal avsløre hull hos den som ikke har lest nøye, og gi den
forberedte anledning til å vise spennvidde. Å svare på færre enn fire ga trekk; å svare
på alle fem ga ingen gevinst. Prioritet: **perfekt**.
**Innhold (DNA sjangerkapittel):** Firetrinnsoppskriften, med tidsbudsjett: (1) avgrens
hva spørsmålet faktisk ber om — og hva det ikke ber om; (2) presis definisjon forankret
i en navngitt pensumtradisjon; (3) eget eksempel, gjerne fra lovtekst; (4) én
løftesetning som problematiserer eller kobler videre. Kontrollspørsmålsvarianten trenes
separat: fem korte begrepsforklaringer à ~10 minutter, med regelen om å svare på nøyaktig
det antallet oppgaven ber om. Gjennomskrevet eksempel med margkommentarer på ett
nyskrevet redegjørelsesspørsmål. **5 nyskrevne øvingsoppgaver** med momentlister
strukturert som må-punkter / pluss-punkter / feller — aldri som sjekklister, siden
sensorveiledningene gjennomgående sier at deres egne lister ikke er sjekklister.
**Typiske feil:** #3 svare på noe annet enn det oppgaven spør om; #10 utelate ett av
flere sidestilte delspørsmål — V2023 sier at det må medføre trekk om et delspørsmål
ikke er ordentlig besvart, og H2019 at helt korte delbesvarelser gir trekk; #11 svare
på færre enn antallet oppgaven ber om, eller på flere i håp om gevinst.
**Kvote:** 14 quiz / 10 flashcards.

#### Kapittel 7.2: Lovtekstanalysen
**id:** `jfexfac04-7-2` · **number:** 7.2 · **estimatedMinutes:** 70 · **prerequisites:** `jfexfac04-1-4`, `jfexfac04-2-4`

- **Kapitteltype:** sjanger.
- **Description:** Den moderne signaturoppgaven — å analysere en konkret bestemmelse ledd for ledd med norm-, definisjons- og språkteorien som verktøy.

**Eksamensbelegg:** Prøvd i **13 av 40 terminer** (H2007, V2009, V2013, V2015, H2017,
V2018, H2019, V2020, H2020, H2021, V2022, H2022, H2024) — og i **7 av de 14 terminene
fra H2019 og utover**. Fire høstterminer bærer den moderne malen: H2020, H2021, H2022
og H2024, hver med en navngitt bestemmelse gjengitt i oppgaveteksten. Om
sesongmønsteret holder, er lovtekstanalyse den mest sannsynlige høstoppgaven.
Prioritet: **perfekt** (§7 pkt. 4).
⚠ **Opphavsrett:** de faktiske bestemmelsene arkivet har brukt, skal **ikke** gjengis.
Boka lager egne, nyskrevne bestemmelser med samme strukturelle egenskaper.
**Innhold (DNA sjangerkapittel + det ene lånet fra DNA-jus):** Femtrinnsmetoden —
(1) les leddvis og punktumsvis; (2) klassifiser hvert ledd: hva slags utsagn, hva slags
norm, hva slags definisjon; (3) begrunn klassifiseringen i teorien, ikke i intuisjonen;
(4) se at samme setning kan leses som flere normtyper samtidig og argumenter for en
kombinasjon — H2024 honorerer uttrykkelig kandidater som ser at et ledd kan forsvares
som pliktnorm, kompetansenorm *og* kvalifikasjonsnorm; (5) velg dybde framfor
uttømmende opplisting — H2021 sier at en velbegrunnet, uttømmende analyse vanskelig
kan forventes på tilgjengelig tid, og at kandidaten står fritt til å behandle deler
kort og andre grundig; V2022 sier det samme.
**Normkartet (lånet fra DNA-jus):** en tabell `ledd → utsagnstype → normtype →
begrunnelse` som leseren fyller ut før hun skriver. Det er **ikke** et hjemmelskart:
ingenting subsumeres, og det finnes ingen fasit. To sensorregler rammer det inn:
**konklusjonen er ikke fasit** (V2022 sier at hvilke konklusjoner kandidaten trekker
ikke trenger å være avgjørende — det er forståelsen analysen viser som teller; H2024
sier at ulike forståelser av normbegrepet er akseptable og at det som premieres er å
*se* problemstillingen), men **klare misforståelser gir trekk** (V2022), og tolkninger
godtas «så lenge tolkningene ikke er søkte» (V2022).
Gjennomskrevet eksempel med margkommentarer på én nyskrevet bestemmelse.
**4 nyskrevne øvingsoppgaver** med momentlister: én bestemmelse som er ren pliktnorm,
én med legaldefinisjoner, én tvilstilfelle der flere klassifiseringer er forsvarlige
(merket «omstridt — begge forsvarlige», med begge lesningene utskrevet), og én der
vaghet og flertydighet opptrer i samme ledd.
**Typiske feil:** #4 stoppe ved den overfladiske klassifiseringen; #5 behandle én
klassifisering som fasit uten å begrunne den; #13 presse en søkt tolkning på teksten;
#14 uttømmende opplisting på bekostning av dybde.
**Kvote:** 16 quiz / 12 flashcards.

#### Kapittel 7.3: Drøftingsoppgaven
**id:** `jfexfac04-7-3` · **number:** 7.3 · **estimatedMinutes:** 55 · **prerequisites:** `jfexfac04-0-2`

- **Kapitteltype:** sjanger.
- **Description:** Å ta standpunkt og begrunne det — sjangeren som har vært tyngst vektet i så godt som alle moderne sett.

**Eksamensbelegg:** Drøftingsoppgaven («diskuter», «drøft», «vurder holdbarheten av»)
har vært den tyngst vektede oppgaven i praktisk talt alle moderne sett. Dokumenterte
formuleringer: bør en rettsstat innføre vaksinasjonsplikt (V2021); kan et krigsforbud
forenes med utilitaristisk og kantiansk etikk og rettsstatlige verdier (V2022); hva er
rettsstatens verdigrunnlag og hvordan kan man kritisere gjeldende rett ut fra det
(H2022); hvordan kan menneskerettigheter begrunnes utilitaristisk og/eller kantiansk
(V2025); holdbarheten av innvendingene mot utilitarismen (V2026). V2026-veiledningen
sier uttrykkelig at når oppgaveteksten sier «diskuter», skal den som problematiserer
godt og drøfter selvstendig ha **ekstra uttelling**. V2025 sier tilsvarende at det ikke
holder å redegjøre for utilitarisme og kantianisme — fokuset skal ligge på
*begrunnelsen* av rettighetene. Prioritet: **perfekt**.
**Innhold (DNA sjangerkapittel):** Disposisjon med tidsbudsjett for 4-timersformatet.
**Binær selvrettingsrubrikk** (DNA-krav — 0/1, ingen skjønn): ☐ standpunkt i første
avsnitt? ☐ begge posisjoner fremstilt slik en tilhenger ville kjent seg igjen i dem?
☐ minst én innvending fra en navngitt posisjon? ☐ innvendingen faktisk besvart?
☐ egen vurdering utskrevet, ikke bare antydet? ☐ alle delspørsmål besvart? Prøvefasitene
i boka refererer kort til rubrikken.
**Erfarings-bro** (DNA-krav): mange lesere har sterke moralske intuisjoner om
eksempeltemaene. Kort tip-boks som viser konverteringen: (1) start i posisjonens eget
begrep, (2) bruk intuisjonen som **illustrasjon** av begrepet, aldri som begrunnelse
alene, (3) koble tilbake til drøftingsaksen. Å bare advare mot pensum-løs synsing uten
å vise konverteringen skyver bort nettopp de leserne som har mest materiale.
**Gjenbruksregelen:** H2024 sier at en redegjørelse under a skal gi uttelling også når
den brukes i b eller c — drøftingsdelen skal derfor eksplisitt trekke på egne tidligere
delsvar. Gjennomskrevet eksempel med margkommentarer. **4 nyskrevne oppgaver** med
momentlister strukturert som må-punkter / pluss-punkter / feller.
**Typiske feil:** #3 redegjøre når oppgaven sier «diskuter»; #1 pugget gjengivelse —
V2022 er skarpest: rene gjengivelser av pensum bør i liten grad gi uttelling, siden
studentene har litteraturen tilgjengelig; #6-koblingen fra V2026 (den som kobler
holdbarhet/relevans-skillet til kritikkoppgaven får uttelling, men det er ikke krav for
toppkarakter — skal ikke fremstilles som obligatorisk).
**Kvote:** 14 quiz / 10 flashcards.

#### Kapittel 7.4: Case-rammen og kortsvarsbatteriet
**id:** `jfexfac04-7-4` · **number:** 7.4 · **estimatedMinutes:** 45 · **prerequisites:** `jfexfac04-7-3`

- **Kapitteltype:** sjanger.
- **Description:** Den sjeldne oppgaven med et faktisk bakteppe, og den korte flerbegrepsformen — to sjangre som krever hver sin disiplin.

**Eksamensbelegg:** Case-rammen opptrer **én gang** i hele materialet: V2021, med et
halvsides faktisk bakteppe om vaksiner og flokkimmunitet og tre spørsmål som ber
kandidaten anvende de tre rettsfilosofiske posisjonene og rettsstatstenkningen på det.
Veiledningen understreker at **faktakunnskap om vaksiner ikke skal telle**, at
hypotetiske eksempler er like gyldige, og at svakheter i de faktiske premissene ikke i
seg selv skal gi trekk; kjennskap til praksis fra Den europeiske
menneskerettsdomstolen eller til smittevernloven skal ikke tillegges vekt i seg selv.
Kortsvarsbatteriet: H2019 oppgave 1, fire av fem korte begrepsforklaringer.
Prioritet: kunne — sjeldne sjangre, men case-rammen er den eneste som ligner en
praktikum, og kortsvarsbatteriet er den formen som avslører leseluker raskest.
**Innhold (DNA sjangerkapittel):** *Case-disiplinen:* skill premiss fra teori; bruk
bakteppet som anledning til å anvende posisjonene, ikke som anledning til å vise
faktakunnskap; hypotetiske eksempler er fullt gyldige. *Kortsvarsdisiplinen:* hold
tiden, svar på nøyaktig det antallet som kreves, gi hvert svar samme omtrentlige
omfang. Gjennomskrevne eksempler på begge sjangrene. **4 nyskrevne oppgaver**, to per
sjanger, med momentlister — case-oppgavene bygget slik at faktabakteppet er
uinteressant og teorien gjør alt arbeidet.
**Typiske feil:** #12 bruke faktisk kunnskap som erstatning for teoretisk analyse —
V2021 er hjemmelen, og dette er kapitlets hovedhjem; #11 svare på færre eller flere
enn oppgaven ber om; #10 for korte delsvar.
**Kvote:** 12 quiz / 8 flashcards.

#### Kapittel 7.5: Feilvaksinen: de 16 feilene
**id:** `jfexfac04-7-5` · **number:** 7.5 · **estimatedMinutes:** 55 · **prerequisites:** `jfexfac04-7-1`

- **Kapitteltype:** sjanger.
- **Description:** Alle seksten feilene sensorveiledningene navngir, drillet med omskrivinger fra svak til sterk versjon av samme passasje.

**Eksamensbelegg:** Analysens §5 i sin helhet — hver feil er hjemlet i minst én navngitt
sensorveiledning, og alle 37 veiledningene er lest. De tre hardest straffede: **#1**
pugget gjengivelse (V2022: rene gjengivelser bør i liten grad gi uttelling nå som
studentene har litteraturen; V2024 navngir et konkret repetisjonshefte skrevet til en
eldre utgave av emnet og sier at mer eller mindre ordrett repetisjon derfra trekker ned
— den mest konkrete straffebestemmelsen i hele materialet; V2018 og V2019 sier ordrett
at en besvarelse ikke skal kunne «snakke seg til» bestått); **#2** dagligspråklig
synsing (H2018: vesentlig trekk, og et spørsmål om kandidaten kan bestå i det hele
tatt); **#3** svare på noe annet enn det oppgaven spør om (H2024, V2025, V2026).
Prioritet: **perfekt** (feilunngåelse er karakterforsikring).
⚠ **Ærlighetsforbeholdet skal stå i kapitlets åpning:** ingen av de 37
sensorveiledningene er skrevet etter at besvarelser er lest. Registeret er hva
veiledningene sier skal trekke — ikke en empirisk kartlegging av hva kandidater faktisk
gjør.
**Innhold (DNA sjangerkapittel):** Én seksjon per feil, alle fire ledd: (a) feilen slik
veiledningen formulerer den, med hvilken termin den er hjemlet i; (b) et nyskrevet
«slik ser den ut i en besvarelse»-utdrag; (c) samme passasje omskrevet slik den skulle
vært; (d) en varsellampe leseren kan kjenne igjen i egen tekst.
**Fordelingen av feilene i boka** (kapitlene der hver feil har sitt hovedhjem):
#1→0.2 og 7.3 · #2→0.2 og 5.2 · #3→0.1 og 7.1 · #4→2.3, 2.4 og 7.2 · #5→1.6 og 7.2 ·
#6→2.1 · #7→1.4 og 2.4 · #8→4.1 og 4.6 · #9→4.3 og 4.4 · #10→0.1 og 7.1 · #11→0.1 og
7.4 · #12→7.4 · #13→7.2 · #14→2.2 og 7.2 · #15→3.2 og 4.2 · #16→1.1 og 1.6.
Drillformat: «hvilken feil begår denne kandidaten?» på tolv nyskrevne
besvarelsesutdrag, der leseren skal identifisere feilen og reparere tre av dem.
**Typiske feil:** alle 16 — dette kapitlet **er** registeret, og hver kode glosses her
i klarspråk.
**Kvote:** 18 quiz / 10 flashcards.

#### Kapittel 7.6: Modellbesvarelse: lovtekstanalyse
**id:** `jfexfac04-7-6` · **number:** 7.6 · **estimatedMinutes:** 50 · **prerequisites:** `jfexfac04-7-2`

- **Kapitteltype:** modellbesvarelse.
- **Description:** Modellbesvarelse på den moderne signaturoppgaven, med en nyskrevet bestemmelse analysert ledd for ledd og en utskrevet begrunnelse for hver klassifisering.

**Eksamensbelegg:** Sjanger LOV — 13 av 40 terminer, og 7 av de 14 siste. Prioritet:
perfekt.
**Oppgave (nyskrevet):** En bestemmelse i tre ledd. Første ledd er en
definisjonsbestemmelse med to bokstavpunkter, der det ene gjengir alminnelig språkbruk
og det andre stipulerer noe som bryter med den. Andre ledd er en handlingsregel som kan
forsvares som pliktnorm, kompetansenorm **og** kvalifikasjonsnorm — nettopp den
flertydigheten H2024 honorerer at kandidaten ser. Tredje ledd er en unntaksregel som
inneholder ett vagt og ett flertydig uttrykk.
**Karakternivåer:** **A-besvarelse** i full tekst med margnotater («her: klassifisering
begrunnet i teorien, ikke i intuisjonen», «her: to lesninger av andre ledd holdt åpne
og veid — dette løfter til A», «her: dybde valgt framfor opplisting»), med
«— naturlig pausepunkt —»-markører mellom hoveddelene. **Kommentert C-besvarelse**:
riktige klassifiseringer, men uten begrunnelse, uten å se flertydigheten i andre ledd,
og med en uttømmende opplisting som spiser tiden. Ærlig merking — boksen som heter
C-besvarelse skal **være** en C. Avsluttes med `tip` **Sensorblikket**: momentliste
strukturert som må-punkter / pluss-punkter / feller.
**Typiske feil demonstrert i C-versjonen:** #4, #5, #14.
**Kvote:** 6 quiz / 5 flashcards.

#### Kapittel 7.7: Modellbesvarelse: de tre posisjonene mot hverandre
**id:** `jfexfac04-7-7` · **number:** 7.7 · **estimatedMinutes:** 50 · **prerequisites:** `jfexfac04-4-6`, `jfexfac04-7-3`

- **Kapitteltype:** modellbesvarelse.
- **Description:** Modellbesvarelse på materialets mest gjenbrukte oppgavemal, der de tre rettsfilosofiske posisjonene settes mot hverandre og landingen er skarp.

**Eksamensbelegg:** Sjanger DRØ med RED i første delspørsmål. De tre posisjonene settes
opp mot hverandre i 9 terminer, og «moralske skranker for lovgivningskompetansen»
besvart fra de tre posisjonene med egen vurdering er gitt i H2007 og H2015. Prioritet:
perfekt.
**Oppgave (nyskrevet):** **a)** Gjør rede for hvordan skandinavisk rettsrealisme,
utilitarisme og kantiansk rettsfilosofi stiller seg til spørsmålet om det gjelder
moralske skranker for lovgiverens kompetanse. **b)** Diskuter holdbarheten av den
posisjonen du finner mest overbevisende.
**Karakternivåer:** **A-besvarelse** med **skarp landing** — jf. DNA-kravet om
konklusjonsvariasjon: minst én modellbesvarelse i boka skal konkludere klart og likevel
være toppnivå, med margnotat om at forbehold er verktøy og ikke obligatorisk garnityr.
Margnotatene skal vise gjenbruken fra a) inn i b) (H2024s gjenbruksregel).
**Kommentert C-besvarelse**: tre korrekte referater etter hverandre, ingen
sammenligning, ingen egen vurdering — den vanligste måten å skrive en C på denne malen.
`tip` **Sensorblikket** med må-punkter / pluss-punkter / feller.
**Typiske feil demonstrert i C-versjonen:** #1, #8, #3.
**Kvote:** 6 quiz / 5 flashcards.

#### Kapittel 7.8: Modellbesvarelse: kritikk og rettsstat, med en midtnivåbesvarelse
**id:** `jfexfac04-7-8` · **number:** 7.8 · **estimatedMinutes:** 50 · **prerequisites:** `jfexfac04-5-2`, `jfexfac04-6-1`

- **Kapitteltype:** modellbesvarelse.
- **Description:** Modellbesvarelse på kritikkoppgaven koblet til rettsstatsstoffet, og bokas realistiske sammenligningspunkt mellom polert A og karikert C.

**Eksamensbelegg:** Sjanger DRØ. Kritikk 11 av 40 terminer og stigende; rettsstatsstoffet
i moderne form V2019, V2021, V2022, H2022, V2025. H2022 oppgave 2 koblet nettopp de to:
rettsstatens verdigrunnlag som grunnlag for kritikk av gjeldende rett. Prioritet:
perfekt.
**Oppgave (nyskrevet):** Diskuter på hvilke måter rettsstatens verdigrunnlag kan tjene
som målestokk i henholdsvis en intern og en ekstern kritikk av gjeldende rett. Bruk en
konkret regel som eksempel.
**Karakternivåer:** **A-besvarelse** med margnotater. **Kommentert C-besvarelse**:
verdilista gjengitt, kritikkformene navngitt, men ingen av delene brukt på regelen.
**Autentisk B-/midtnivåbesvarelse** (DNA-krav — minst én i boka): ekte studentspråk,
litt rotete disposisjon, ett godt selvstendig eksempel, men innvendingen mangler svar.
Margnotater om hva som er **bra nok**, og de to–tre grepene som skiller den fra A.
Leseren trenger et realistisk sammenligningspunkt, ikke bare polert A og karikatur-C.
Merk at V2018/V2019 sier at svak disposisjon i seg selv ikke er grunn til trekk hvis
forståelsen gjenfinnes et annet sted i besvarelsen — det er nettopp poenget med
B-eksempelet. `tip` **Sensorblikket**.
**Typiske feil demonstrert i C-versjonen:** #1, #2, #3.
**Kvote:** 6 quiz / 5 flashcards.

---

## Kvotesammendrag (AUTORITATIV for alle senere faser)

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 2 | 28 | 22 | 0 (dekkes av øvingseksamenene) |
| 1 | 6 | 156 | 156 | 4 |
| 2 | 4 | 100 | 100 | 4 |
| 3 | 3 | 70 | 70 | 4 |
| 4 | 6 | 156 | 150 | 4 |
| 5 | 3 | 66 | 66 | 4 |
| 6 | 2 | 44 | 46 | 4 |
| 7 | 8 | 92 | 65 | 0 (dekkes av øvingseksamenene) |
| **Sum** | **34** | **712** ✓ (≥500) | **675** ✓ (≥500) | **24 + 3 øvingseksamener** |

Summeringskontroll per del — quiz: Del 0: 12+16=28. Del 1: 26+26+30+22+26+26=156.
Del 2: 26+20+30+24=100. Del 3: 24+24+22=70. Del 4: 24+24+30+24+30+24=156.
Del 5: 24+24+18=66. Del 6: 28+16=44. Del 7: 14+16+14+12+18+6+6+6=92. Totalt **712**.
Flashcards: Del 0: 10+12=22. Del 1: 26+24+30+24+24+28=156. Del 2: 24+20+32+24=100.
Del 3: 22+24+24=70. Del 4: 24+26+30+22+30+18=150. Del 5: 22+26+18=66.
Del 6: 28+18=46. Del 7: 10+12+10+8+10+5+5+5=65. Totalt **675**.

**Flashcard-profil:** hovedvekten ligger på **begrep ↔ normtype ↔ avsender**-koblinger,
fordi det er nøyaktig presisjonen redegjørelsesspørsmålet måler. Eksempler på
korttyper: kompetansekriterium ↔ personell/situasjonell/innholdsmessig ↔ Eng ·
definisjonsmåte ↔ kategori-og-tilleggskrav / oppregnende ↔ Kolflaath ⚠ · kritikkform ↔
redskap ↔ Eriksen · innvending mot utilitarismen ↔ hva den rammer ↔ Eng · rettsstatsverdi
↔ innhold ↔ Mæhle/Aarli ⚠. Utgått pensum genererer **ingen** flashcards.

**Quiz-profil:** flervalg med **nabobegrep-distraktorer**, fordi det er der emnets
feilregister faktisk sitter: vaghet mot flertydighet · pliktnorm mot kompetansenorm ·
kvalifikasjonsnorm mot legaldefinisjon · regulativ mot konstitutiv · kognitivisme mot
non-kognitivisme · handlings- mot regelutilitarisme · intern mot ekstern kritikk ·
formalkritikk mot normativ kritikk · retningslinje om retning mot om vekt ·
holdbarhets- mot relevansargument. I tillegg «hvilken posisjon hevder dette»-koblinger
og «hvilken feil begår denne kandidaten»-spørsmål. Distraktorene skal være **reelle
feller fra analysen**, aldri bokas egne nyanser gjengitt som «galt» svar; nær-sanne
distraktorer forklares eksplisitt i fasit-kommentaren.

---

## 4. Prøver

### Temadelprøver (4 per temadel, del 1–6 = 24 prøver)

Hver prøve speiler eksamensformatet i miniatyr. Omfang 20–45 min der ikke annet er
angitt. Alle oppgaver, bestemmelser og case er nyskrevne. Hver prøve deklarerer
«N prøver à ~X min» og at prøvene trygt kan deles over flere kvelder — én prøve per
økt. Etter hver prøvefasit følger en avkryssbar selvdiagnose-sjekkliste (☐).
Flervalg i prøve-collapsibles har **stokkede** fasitbokstaver — aldri «alle a».

**Prøve-kvote Del 1:** 4 prøver:
1. *Normtypene — presisjonsdrill:* 12 flervalg med nabobegrep-distraktorer (pliktnorm
   mot kompetansenorm, regulativ mot konstitutiv, kvalifikasjonsnorm mot legaldefinisjon)
   + 1 kortredegjørelse om skillet regulativ/konstitutiv.
2. *Klassifiseringsverksted:* åtte nyskrevne lovledd skal klassifiseres og
   klassifiseringen begrunnes; to av dem er tvilstilfeller der fasiten skriver ut begge
   lesningene.
3. *Kompetanse og gyldighet:* 3 kortsvar (kompetansekriteriene, enekompetanse mot
   konkurrerende kompetanse, forskjellen på ugyldighet og pliktbrudd) + 1 kortdrøfting:
   er kompetanse og frihet det samme?
4. *Avveining og rettigheter:* kortdrøfting (30 min) om avveining er reell normativ
   styring + Hohfeld-drill på fire rettighetsformuleringer.

**Prøve-kvote Del 2:** 4 prøver:
1. *Vaghet mot flertydighet:* 10 flervalg + 6 uttrykk som skal diagnostiseres og
   begrunnes — prøven driller eksplisitt at det er betydningen, ikke formuleringen, som
   er vag.
2. *Tolkningsproblemenes årsaker:* fire versjoner av samme bestemmelse, én årsakstype
   innført per versjon; leseren identifiserer og formulerer hva som blir usikkert.
3. *Definisjonsdrill:* 10 flervalg om definisjonsmåtene i de tre tradisjonene +
   2 kortsvar (definisjon mot karakteristikk; kravene til definiens).
4. *Legaldefinisjons-analyse (40 min):* en nyskrevet definisjonsbestemmelse med tre
   bokstavpunkter analyseres fullt ut, med momentliste som fasit.

**Prøve-kvote Del 3:** 4 prøver:
1. *Deskriptivt mot normativt:* 10 flervalg + sortering av åtte utsagn, der to er
   tvilstilfeller (begge lesninger utskrevet i fasiten).
2. *Argumenttypene:* 8 flervalg + nedbryting av én argumentkjede i standpunkt-,
   holdbarhets- og relevansargumenter.
3. *Konsekvensargumenter (30 min):* kortdrøfting om hvordan konsekvensbetraktninger
   virker forskjellig i rettspolitikk og rettsdogmatikk.
4. *Logikk og sannhet:* 8 flervalg (gyldig mot sunt, de fire sannhetsteoriene) +
   1 kortsvar om hermeneutisk tolkning — merket som «kjenne til»-stoff.

**Prøve-kvote Del 4:** 4 prøver:
1. *Posisjonene på kognitivisme-aksen:* 12 flervalg + 1 kortsvar om hva
   non-kognitivismen kan og ikke kan kritisere.
2. *Utilitarismens varianter:* 10 flervalg (Bentham mot Mill, handlings- mot
   regelutilitarisme) + kortdrøfting om Mill fortsatt er utilitarist.
3. *De fire innvendingene (40 min):* hver innvending formuleres, og ett utilitaristisk
   svar skrives ut; momentliste som fasit.
4. *Trekløver-drøfting under tidspress (45 min):* én nyskrevet lovendring vurdert fra
   alle tre posisjonene med skarp landing; momentliste med de fem
   sammenligningsaksene som obligatoriske momenter.

**Prøve-kvote Del 5:** 4 prøver:
1. *Intern mot ekstern:* 10 flervalg + plassering av seks korte kritikkutsagn, med
   begrunnelse.
2. *De tre kritikkformene:* 8 flervalg + krav om ett **selvstendig** eksempel per form
   — den ferdigheten H2018 premierer betydelig.
3. *Kritikk uavhengig av juridisk metode (30 min):* kortdrøfting etter V2017-malen i
   nyskrevet form.
4. *Kjønnsperspektiv og rettssosiologi:* kortsvar + kortdrøfting om kvinneretten er
   intern eller ekstern kritikk; fasiten skriver ut begge svarene og merker oppgaven
   «(omstridt — begge forsvarlige)».

**Prøve-kvote Del 6:** 4 prøver:
1. *Rettsstatens verdigrunnlag:* 10 flervalg + 1 kortsvar om verdigrunnlagets
   dynamiske karakter.
2. *Verdigrunnlaget som målestokk (40 min):* kritikk av én nyskrevet regel, først
   internt og så eksternt, med verdigrunnlaget som målestokk begge ganger.
3. *Rettslig, politisk og etisk argumentasjon:* sortering av åtte argumenter fra et
   nyskrevet lovforarbeid + kortdrøfting om hvor grensen går.
4. *Pensumhistorikk-beredskap:* 8 flervalg der oppgaven er å **kjenne igjen** utgåtte
   temaer i gamle oppgavetekster og vite at de ikke skal besvares i dag — ingen av
   spørsmålene krever kunnskap om det utgåtte stoffets innhold.

### Komplette øvingseksamener (3)

Alle i gjeldende form der ikke annet er angitt: 4 timer, to oppgaver, momentliste-fasit
strukturert som må-punkter / pluss-punkter / feller, og nivåbeskrivelse per del. Alle
bestemmelser, case og formuleringer nyskrevne.

1. **Øvingseksamen A (høstprofil — lovtekstanalyse + kritikk).** Oppgave 1: analyser en
   nyskrevet bestemmelse i lys av definisjons- og normteorien. Oppgave 2: diskuter
   hvordan rettsstatens verdigrunnlag kan bære en kritikk av gjeldende rett. Ingen
   vekting oppgitt — kandidaten skal selv utlede at delene teller om lag likt, slik
   H2024, V2025 og V2026 sier. Begrunnelse for profilen: lovtekstanalyse i moderne form
   er gitt i H2020, H2021, H2022 og H2024, alle høst.
2. **Øvingseksamen B (vårprofil — rett og moral + argumentasjonsteori).** Oppgave 1:
   redegjør for skillet mellom deskriptiv og normativ argumentasjon, og drøft om
   rettsdogmatisk argumentasjon de lege lata er det ene eller det andre. Oppgave 2:
   diskuter holdbarheten av innvendingene mot utilitarismen. Vekting oppgitt 1/3 – 2/3,
   slik flere moderne sett gjør. Begrunnelse: rett og moral er til stede i 22 av 40
   terminer og i 6 av de siste 8.
3. **Øvingseksamen C (femtimersformatet 2008–2019, tre deler med oppgitt vekting).**
   Del I fra rettsfilosofien (1/2): normtypene og sammenhengen mellom dem, pluss
   spørsmålet om juristers utsagn om hva som er rett er forskjellige fra rettens normer.
   Del II (1/4): avveiningsnormer og retningslinjer. Del III (1/4): intern og ekstern
   kritikk. **Begrunnelse for å ta med et utgått format:** gjenbruk er normalen i dette
   materialet, og de eldre settene er derfor direkte treningsverdige — men de delene som
   traff profesjonsetikk, polysentri eller Sands legitimitetsstoff er byttet ut med
   gjeldende pensum. Øvingseksamenen sier dette eksplisitt til leseren, slik at hun
   forstår hva hun møter når hun åpner et ekte sett fra 2009.

---

## 5. Studieguide-disposisjon

1. **Slik er eksamen** — gjeldende form (4 t digital skoleeksamen i Inspera, Lovdata Pro
   i eksamensmodus uten fritekstmerknader, to til tre oppgaver, A–F), de fire
   formregimene siden 2006, vektingsreglene og regelen når vekting mangler, og
   tidsbudsjett (fra kap. 0.1 og 0.2).
2. **De fire søylene på én side hver** — normteori, språk og definisjoner,
   argumentasjon, rett og moral, kritikk og rettsstat: kjernebegreper med avsender,
   typisk oppgaveformulering, og den farligste feilen i hver søyle.
3. **Normtypekartet** — én tabell over pliktnorm, kompetansenorm, kvalifikasjonsnorm,
   gyldighetsnorm og avveiningsnorm, med kjennetegn, hva den gjør i en lovtekst, og
   hvilket spørsmål som avslører den. Dette er bokas **samlede oppslagskort**.
4. **Begrepsbank med avsender** — alle begreper fra begrepskontraktene, alfabetisk, hver
   med én-setnings definisjon og forfatterkobling, ⚠-merket der koblingen er
   utgaveavhengig. Flashcard-speilet i prosaform.
5. **«Hvem eier hva»-kort** — tabellen begrep → tenker/verk → poeng, for de
   gjennomgående eksemplene og posisjonene. Den glemsomme leserens gjenopptaksverktøy.
6. **De fem sammenligningsaksene** for trekløveret, med eksempelformuleringer som viser
   forskjellen på å **sammenligne** og å **referere etter hverandre**.
7. **Feilvaksine-kortversjonen** — de 16 feilene som énlinjers varsellamper, med
   ærlighetsforbeholdet om at dette er sensors forventninger, ikke observerte feil.
8. **Hva som er ute av pensum** — profesjonsetikk, polysentri/internasjonalisering og
   Sands legitimitets- og systemteoristoff, med årstall for når hvert forsvant, slik at
   leseren kan lese gamle sett uten å bli ledet på villspor.
9. **Ukeplan** — 3–5-dagers hurtigrute, 6-ukers løp og 10–12-ukers deltidsrute, summert
   fra `estimatedMinutes`, med prøve-innplassering (temadelprøver underveis,
   øvingseksamen A/B/C de siste to ukene). Anslagene er **lesetid**; ganges med ca. 1,5
   ved håndskriving.

---

## 6. Byggerekkefølge og verifikasjon

### Rekkefølge for forfatter-agenten

1. **Metadata først:** `TextbookCourse`-oppføring med id `jfexfac04`, `level:
   'Høyskole'`, alle 34 kapitler med id/number/title/description/estimatedMinutes/
   topics/prerequisites fra dette skjelettet, og `sectionNames` fra tabellen i del 2.
   `BOKCONFIG.json` med description-strengen fra del 1 (hardt formatkrav).
2. **Del 0** — setter tonen og etablerer mantraene alle senere kapitler refererer:
   «forståelse foran gjengivelse» og «diskuter betyr ta standpunkt». Orienteringsboksen
   «Slik leser du denne boka» må ligge her, som `text` eller `tip` — **aldri**
   `definition`.
3. **Del 1 → 2 → 3 → 4 → 5 → 6** i rekkefølge. Prerequisites peker bakover: 2.4 bygger
   på 1.4, 5.1 på 4.1, 6.1 på 5.1 — rekkefølgen over respekterer dette.
4. **Del 7** til slutt: sjangerkapitlene og modellbesvarelsene gjenbruker begreper og
   case fra temadelene (7.2 viderefører bestemmelsestypene fra 2.4, 7.7 viderefører
   sammenligningsaksene fra 4.6).
5. **Prøvekapitler** (`jfexfac04-<del>-prove`, chapterNumber `<del>.P`) etter at alle
   temakapitler finnes.
6. **Narrativ-versjoner** (`<id>-narrativ.json` per kapittel) og quiz-registrering til
   slutt. Narrativ-id-er må registreres slik at toggelen faktisk rendrer — verifiser med
   prod-server og curl at narrativ-rutene gir 200, ikke bare at filene finnes.

Per kapittel gjelder DNA-drøftings blokkstruktur, med læringsløkka som styrer
rekkefølgen: `tip` Eksamensvinkel → `text` Forkunnskaper → så gjentatte løkker av
teori (`text`/`definition`) → `example` → `exercise` inline → … → `warning` Typiske
feil → `collapsible` Pensumkart → `collapsible` Symbol- og begrepsliste sist.
Eksamensvinkel- og Typiske feil-blokkene fylles med belegget og feilnumrene fra dette
skjelettet — **forfatteren skal ikke finne på frekvenstall**.

### Verifikasjonssjekkliste (kjøres FØR ferdigmelding)

- [ ] **JSON-validering:** alle `src/lib/data/chapters/jfexfac04-*.json` parser med
      `json.load`. `npm run build` grønn — vis output.
- [ ] **Metadata-konsistens:** alle 34 kapittel-id-er i course-oppføringen har
      eksisterende content-fil; prerequisites peker på eksisterende id-er;
      `sectionNames` satt; narrativ-ruter verifisert med prod-server + curl (200).
- [ ] **Talldisiplin:** hvert «N av M»-tall i boka står ordrett i dette skjelettets
      belegg-blokker eller i Talldisiplin-seksjonen. Grep etter «41 termin», «alle
      terminer», «fasit», «løsningsforslag» og «modellbesvarelse fra eksamen» = 0
      treff utenfor de stedene der ordet brukes om bokas **egne** nyskrevne besvarelser
      eller om at arkivet **ikke** har slikt.
- [ ] **Kildepåstander sannferdige:** kildenoten, BOKCONFIG-beskrivelsen og all omtale
      av grunnlaget nevner kun kildetyper som faktisk finnes: **oppgavesett** og
      **sensorveiledninger**. Aldri «fasiter», aldri «modellbesvarelser fra UiO». Bokas
      egne modellbesvarelser er merket **nyskrevne**.
- [ ] **Pensumreferanser EKTE:** kun Eng, Kolflaath, Høgberg (⚠ historisk), Eriksen,
      Ikdahl, Mæhle/Aarli, Sand (⚠ utgått, kun i 6.2), samt klassikerne Olivecrona,
      Ross, Hohfeld, Bentham, Mill og Kant, og randsone-navnene Hart og MacCormick.
      ALDRI oppdiktede referanser, ALDRI sidetall eller utgaver utover det skjelettet
      oppgir. ⚠-merkede koblinger beholder forbeholdet i pensumkart-blokkene.
- [ ] **Kalibrering:** ingen kapitler om profesjonsetikk, juristroller, polysentri,
      rettslig pluralisme, internasjonalisering, kommunikativ differensiering,
      risikosamfunn eller miljørettens utfordringer. Kun den merkede historikk-delen i
      6.2, og ingen flashcards eller quiz på utgått stoff.
- [ ] **Kvotesum:** quiz ≥712 og flashcards ≥675 fordelt per kapittel som angitt
      (hardt minstekrav ≥500/≥500); 4 prøver per temadel 1–6 = 24 prøver +
      3 øvingseksamener; fasitfordelingen rebalansert (jevn a/b/c/d).
- [ ] **Læringsløkke:** `content[]` veksler teori → eksempel → oppgave i løkker med
      `exercise`-blokker inline — ikke all teori øverst og alle oppgaver nederst.
- [ ] **Forkunnskapsdekning:** hver `exercise` hviler kun på stoff introdusert tidligere
      i kapitlet eller i en referert forkunnskap. Særlig: ingen oppgave i del 2 eller 5
      får kreve normtyper som først innføres i del 1 uten at kapitlet er ført opp som
      forkunnskap.
- [ ] **Byggespråk:** `grep -rnE '#{2,4}[[:space:]]*Løkke|[Ll]økke[[:space:]]+[0-9A-ZÆØÅ]|\| Løkke \|'` = 0 treff. Ingen «Bolk N», «Blokk N», «Runde N» i overskrifter.
- [ ] **Deiksis:** grep «Sist du var her», «som du sikkert husker», «du har jo allerede
      sett», «dette kan du fra før» = 0 treff.
- [ ] **Nybegynner-inngang:** sjangerkodene RED/LOV/DRØ/CASE og feilkodene #1–#16 er
      skrevet fullt ut i klarspråk ved første bruk per kapittel; ingen kald kode i
      `competenceGoals` eller i kapitlets første tekstboks; Del 0 har
      orienteringsboksen som `text`/`tip`.
- [ ] **Karakter-realisme:** «C er en god og vanlig karakter» står eksplisitt i Del 0;
      grep «Prioritet: perfekt» = 0 i det leserrettede innholdet (uttrykket hører i
      dette skjelettet, ikke i boka); C-besvarelsene ER C-er; minst én autentisk
      midtnivåbesvarelse finnes (kap. 7.8); minst én modellbesvarelse lander skarpt
      (kap. 7.7).
- [ ] **Meta-fasit forbudt:** grep «en A-besvarelse ville», «ville ha drøftet» = 0 —
      drøftelsene er faktisk utskrevet.
- [ ] **Hints:** alle `exercise` har utfylte `hints`; første hint gir hjemmel, begrep
      eller første grep — aldri konklusjonen. Én merket kald bank uten hint i
      eksamenstreningsdelen, med momentliste som fasit.
- [ ] **Prøve-flervalg:** fasitmønsteret stokket — riktig svar varierer posisjon, aldri
      «alle a», aldri «alle felle». Nær-sanne distraktorer forklart i fasit-kommentaren.
- [ ] **Ingen tom collapsible:** feltet heter `content` og skal ha blokker.
- [ ] **Kap-referanser:** «kap. X.Y» i forkunnskaper og fasiter er markdown-lenker
      `[kap. X.Y](/jfexfac04/jfexfac04-X-Y)` til eksisterende filer; aldri lenker i
      `title`-felt.
- [ ] **Øktmerking:** kapitler over 45 min har tidsanslag per avsnitt og
      pausepunktmarkører; lange modellbesvarelser har «— naturlig pausepunkt —».
- [ ] **Opphavsrett:** alle bestemmelser, case, oppgaver og besvarelser er NYSKREVNE.
      Ingen formuleringer fra UiO-oppgavesett eller sensorveiledninger. De faktiske
      bestemmelsene arkivet har brukt (smittevernloven, bilansvarslova,
      helseforskningsloven, straffeloven, Grunnloven, FN-pakten, EMK, vegtrafikkloven)
      **gjengis ikke** — de kan nevnes som eksempler på hva slags bestemmelser sjangeren
      bruker, men analysene er på bokas egne tekster. Dommene i §6 (Rt. 2010 s. 1445,
      Rt. 2015 s. 93, Rt. 2015 s. 1286) omtales bare kort og med faktum ved første
      nevnelse — boka bygger **ingen** domskanon.
- [ ] **Juridiske deklarasjoner:** innholdet fremstiller seg aldri som offisielt eller
      institusjonstilknyttet og lover aldri eksamensutfall. Ved wiring: registrer
      institusjonen i `institusjoner.ts` og sjekk jus-heuristikken i
      `hoyskole-disclaimer.tsx`.
- [ ] **Ingen påstander om strykprosent, karakterfordeling eller sensurstatistikk** —
      slikt finnes ikke i materialet.

# Bokskjelett: TI300 Sports Coaching 2 — Trenerens relasjonskompetanse (NIH) — eksamensrettet lærebok

> **LÆRINGSLØKKE-KONTRAKT (ufravikelig, produkteier 9. juli 2026):** Ved bygging
> struktureres HVERT kapittels `content[]` som gjentatte små løkker
> **Teori → Eksempel → Oppgave** — `exercise`-blokker INLINE rett etter
> teorien/eksempelet de trener, aldri all teori øverst med oppgavene samlet
> nederst. Ingen oppgave får kreve stoff som ikke er dekket tidligere i
> kapitlet eller i eksplisitt refererte forkunnskaper (flytt teoribiten
> tidligere ved behov). Autoritativ kilde: README «Leserkrav» + arketypens
> DNA-fil (DNA-drofting.md). Unntak: sjanger-/modellbesvarelses- og
> øvingsoppgave-kapitler følger sin egen arketype (komplett oppgave først,
> besvarelser i collapsibles). Kvotene og innholdskontraktene i dette
> skjelettet er uendret — løkka styrer REKKEFØLGEN.


> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE eksamensarkivet —
> alt eksamensbelegg som trengs står i dette skjelettet, destillert fra
> `EKSAMENSANALYSE.md` (NIHs TI300-arkiv 2020/21–2022/23: **seks komplette oppgavesett
> — tre ordinære + tre utsatte — med tilhørende sensorveiledning**, alle lest oppgave
> for oppgave; de tre utsatte er identiske med de ordinære, så reelt **tre ulike
> oppgaver** over tre studieår). Alle case, problembeskrivelser, dekonstruksjoner,
> tiltakslister og modellbesvarelser i boka skal være NYSKREVNE (se §6). Teorinavn,
> begreper og forfatternavn (Foucault, Bourdieu, Rosa, Goffman, Deleuze & Guattari) er
> alminnelig fagstoff og fritt å bruke; sensorveiledningenes og oppgavenes tekst
> gjengis ALDRI ordrett.
>
> **Rendyrket drøftings- og refleksjonsfag — IKKE et faktapuggefag.** TI300 har ÉN
> eksamenssjanger: det **kritiske anvendelsesessayet**. Eksamen er en individuell
> hjemmeoppgave der kandidaten (1) *avgrenser* et konkret problem fra egen idretts-
> praksis, (2) *dekonstruerer* det med ett navngitt sosialteoretisk perspektiv (vis
> hvordan problemet oppsto i en historisk/kulturell/sosial kontekst, i nettverk av
> makt/kunnskap/praksis, og hva det «gjør»/produserer), og (3) *rekonstruerer* en mer
> etisk fundert, effektiv og reflektert praksis med konkrete tiltak. Det finnes INGEN
> fasit og INGEN momentliste med «riktige» temaer — sensor vurderer *begrepspresisjon,
> pensumforankring, analytisk dybde, vurderingsevne, selvstendighet og struktur*. Boka
> er derfor et **verktøysett for trippelbevegelsen** (avgrens → dekonstruer →
> rekonstruer): den leverer de fem teoriverktøyene med presise, forankrede begreper,
> viser hvordan hvert verktøy «skjærer» i et idrettsproblem, og driller selve
> dekonstruksjon–rekonstruksjon-håndverket gjennom gjennomskrevne modellbesvarelser på
> ulike karakternivåer + et rikt case-galleri (selve casevalget er en ferdighet).
>
> **Status:** Emnet er **AKTIVT** ved NIH (verifisert mot NIHs emnesider og
> programplaner 2026-07-11: TI300 «Sports Coaching 2: Trenerens relasjonskompetanse»,
> **10 studiepoeng**, ligger i programplan Bachelor i trenerrollen og idrettspsykologi
> 2026–2029, tilbudt høst i 3. studieår — samt tidligere emnesider H2024). **Eksamens-
> form:** individuell skriftlig **hjemmeeksamen** over **én uke**, levert som én PDF i
> WISEflow, APA-stil, gradert karakter **A–F**. **Ordgrense:** arkivet (2020–2023) har
> **maks 2500 ord** (fra 2022/23 med sammendrag i tillegg); en senere emnejustering kan
> ha hevet grensen (STATUS antyder 5000) — **ordgrensen skal verifiseres mot gjeldende
> emnebeskrivelse ved bygging** `(verifiser)`. Uansett grense er kravet det samme: en
> stram, sammenhengende, pensumforankret tekst uten fyll.
>
> **Krysslenke `nih-ti100` (Idrettspsykologi 1 — bygget skjelett, samme bachelorløp):**
> TI300 er «Sports Coaching 2» og forutsetter idrettspsykologisk grunnforståelse fra
> TI100 (motivasjon, gruppedynamikk, stress, mental helse). Der TI100 dekker de
> *psykologiske* mekanismene i trener–utøver-relasjonen på individ-/gruppenivå, løfter
> TI300 blikket til det *sosiologiske, kulturelle og maktkritiske* nivået. Boka bruker
> **forkunnskaps-KRYSSREFERANSER til nih-ti100** der en dekonstruksjon trenger et
> psykologisk fundament (motivasjonsklima, prestasjonspress, relasjonell trygghet,
> mental helse), i stedet for å gjenta TI100-stoffet i dybden. **Ved bygging:** hvis
> nih-ti100-boka finnes, bruk markdown-lenker til dens kapitler (f.eks. motivasjonsklima
> og stress); ellers behold prosaomtale (README: lenk kun til kapitler som finnes).
> Fysiologi-/anatomi-klyngen (thp100/thp101/thp202/thp203/thp204/lki235/idr109/ma460)
> overlapper IKKE faglig og krysslenkes ikke.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `nih-ti300` |
| Tittel | **TI300 Sports Coaching 2: Trenerens relasjonskompetanse (NIH) — eksamensrettet** |
| Level | `'Høyskole'` |
| Institusjon (navigasjon) | Norges idrettshøgskole (NIH). Visningsnavn i `institusjoner.ts`: «TI300 Sports Coaching 2: Trenerens relasjonskompetanse». |
| Arketype | **Drøfting — kritisk anvendelsesessay** (`DNA-drofting.md`). Se §2 «Arketypetilpasning»: makrostrukturen (Del 0 eksamenskart+essayhåndverk → teoriverktøy-deler → idrettspedagogisk ramme → eksamenstrening m/modellbesvarelser) og drøftingshåndverket beholdes fullt ut. Det unike er at «pensumforankring» + «drøfting» her betyr **å anvende ett navngitt sosialteoretisk begrepsapparat presist på en selvvalgt idrettscase gjennom trippelbevegelsen avgrens→dekonstruer→rekonstruer**, ikke å drøfte pensum-posisjoner mot hverandre i det abstrakte. Ingen fasit — sensor vurderer begrepspresisjon, teoriforankret analyse, konkrete tiltak, vurderingsevne og selvstendighet. |
| Antall kapitler | **20** (Del 0: 2 · Del 1 Foucault: 3 · Del 2 Bourdieu: 2 · Del 3 Rosa: 2 · Del 4 Goffman: 2 · Del 5 Deleuze & Guattari: 2 · Del 6 Idrettspedagogisk/etisk ramme: 2 · Del 7 Eksamenstrening: 5) |
| Estimert totaltid | **~1 320 min ≈ 22 timer** (per kapittel under) |
| Quiz totalt | **520** (krav ≥500) |
| Flashcards totalt | **522** (krav ≥500) |

**Pitch (ett avsnitt):** TI300 er *Sports Coaching 2 — Trenerens relasjonskompetanse* ved
NIH: et rendyrket **drøftings- og refleksjonsfag** der eksamen er ÉN individuell
hjemmeoppgave over en uke. Kandidaten velger selv et konkret problem fra egen idretts-
praksis (topping av lag, foreldrepress, autoritær coaching, kroppspress, frafall …) og
skal utføre den samme grunnhandlingen hvert år: **avgrens problemet → dekonstruer det med
ett navngitt sosialteoretisk perspektiv → rekonstruer en mer etisk, effektiv og reflektert
praksis med konkrete tiltak**. De **fem teoriverktøyene** er Foucault (disiplinærmakt,
normalisering, makt/kunnskap — emnets røde tråd, navngitt eller underforstått i ALLE seks
settene), Bourdieu (felt, kapital, habitus, doxa, symbolsk vold), Rosa (akselerasjon,
fremmedgjøring, resonans), Goffman (inntrykksstyring, front/backstage, stigma, roller) og
Deleuze & Guattari (rhizom, tilblivelse, deterritorialisering). Innstrammingen 2020→2023 er
entydig: perspektivene ble navngitt, pensumkravet skjerpet, balanse- og selvstendighetskravet
uttalt. Boka er bygd baklengs fra det sensor premierer: **presis begrepsbruk fra ETT
perspektiv**, **«hva problemet gjør»/produktiv makt-tenkningen** (den analytiske grammatikken
som skiller et TI300-essay fra en vanlig «dette er et problem»-tekst), **teoriforankret,
aktør-spesifikk rekonstruksjon**, **pensumforankring med APA (inkl. artikkelpensum for B/A)**,
og **vurderingsevne/selvstendighet** som hovedaksen E→A.

**Kritisk formramme (gjelder HELE boka):** hjemmeeksamen over én uke, gradert A–F, APA-stil,
**maks 2500 ord** i arkivet `(verifiser gjeldende grense)`. Det finnes **ingen fasit og ingen
momentliste** — karakteren er en helhetsvurdering. Sensorveiledningene beskriver *hva en god
besvarelse gjør* (avgrenser presist, viser hva problemet «gjør», forklarer genealogisk,
foreslår konkrete tiltak) og — fra 2021/22 — *hvilket pensumnivå hver karakter krever*
(C = kjernepensum i bredde/dybde; B/A = i tillegg artikkelpensum). **Synsing uten teori** er
den eksplisitt farligste feilen (nevnt i hvert eneste sett) og gir «garantert ikke god
karakter».

**Kritisk pensum-/kildeforbehold (ufravikelig — settes i Del 0 og gjentas i eksamenstreningen):**
Pensumbøkene selv ligger **ikke** i arkivet. Teoretikerne (Foucault, Bourdieu, Rosa, Goffman,
Deleuze & Guattari) og begrepene er utledet av de fem navngitte perspektivene i 2022/23-
oppgaven og av det gjennomgående makt/kunnskap/praksis-språket i alle seks veiledningene.
**Konkrete forfatter–verk–side-koblinger skal verifiseres mot gjeldende NIH-pensumliste ved
bygging** `(verifiser)` — DNA-drofting-kravet om EKTE pensumforankring gjelder absolutt: aldri
oppdiktede referanser. Boka skal speile emnets skille (2021/22) mellom **kjernepensum**
(hovedbøkene — C-nivå) og **artikkelbasert pensum** (forskningsartikler — kreves fra B). Der
en primærtekst (f.eks. Foucaults *Overvåkning og straff*, Rosas resonansteori) refereres,
brukes standard fagbegreper fritt, men verk/utgave/sidetall er `(verifiser)`.

---

## 2. Makrostruktur

Rekkefølgen følger analysens §7-anbefaling (jf. DNA-drofting) og faglig avhengighet: FØRST
eksamenskart + essayhåndverk (trippelbevegelsen og «hva problemet gjør» må sitte før teorien),
DERETTER Foucault som tyngste og første teoriverktøy (emnets røde tråd), så de fire øvrige
perspektivene med ett fyldig kapittel hver, så den idrettspedagogiske/etiske rammen som
bindeleddet mellom teori og tiltak, og til slutt eksamenstrening: sjangerkapitler for de tre
delferdighetene + modellbesvarelser på A-, C- og B/E-nivå + et case-galleri. Frekvensen (§2A)
styrer OMFANGET: Foucault får tre kapitler og høyest kvote fordi hans apparat gjennomsyrer alle
seks settene; de fire likestilte 2022/23-perspektivene får hvert ett dybdekapittel (+ Bourdieu/
Rosa/Goffman/D&G ett anvendelseskapittel der det trengs); den idrettspedagogiske rammen og
håndverket bærer resten.

| Del | Tittel | Kap. | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart og essayhåndverk | 2 | perfekt (meta) | Formen (hjemmeeksamen én uke, A–F, APA, ordgrense, ingen fasit), **trippelbevegelsen** (avgrens→dekonstruer→rekonstruer), **«hva problemet gjør»/produktiv makt** som analytisk grammatikk, karakterrubrikken (A–E), sjangerkodene, kjernepensum vs. artikkelpensum og kildeforbeholdet må etableres FØR teorien. Essayhåndverket (kap. 0.2) er unikt kritisk fordi hele faget ER denne ene ferdigheten. |
| 1 | Foucault: makt, kunnskap og normalisering | 3 | perfekt (6/6 sett) | **Emnets røde tråd og analytiske grammatikk.** Makt/kunnskap, produktiv makt, disiplinærmakt, panoptisme, normalisering, diskurs, genealogi, selvteknologier — det språket ALLE seks veiledningene bruker («hva som blir viktig og riktig», «nettverk av makt/kunnskap/praksis») uansett hvilket perspektiv kandidaten formelt velger. Får flest kapitler + høyest kvote, og et eget anvendelses-/dekonstruksjonskapittel. |
| 2 | Bourdieu: felt, kapital, habitus og symbolsk vold | 2 | perfekt (navngitt 2022/23) | Reproduksjon og ulikhet i idrett: felt, kapitalformer (kroppslig/kulturell/sosial/symbolsk), habitus, doxa, symbolsk vold, illusio. Bærer seleksjons-/frafalls-/ekskluderingscasene. Ett teori- + ett anvendelseskapittel. |
| 3 | Rosa: akselerasjon, fremmedgjøring og resonans | 2 | perfekt (navngitt 2022/23) | Tempo, optimalisering, tidlig spesialisering: sosial akselerasjon (teknisk/sosial/livstempo), fremmedgjøring, resonans, tilgjengeliggjøring (*Verfügbarkeit*). Bærer 2021/22-ankeret (bærekraftige miljøer, barns premisser). Ett teori- + ett anvendelseskapittel. |
| 4 | Goffman: iscenesettelse, roller og stigma | 2 | perfekt (navngitt 2022/23) | Rolle, iscenesettelse, avvik: inntrykksstyring, front-/backstage, rolle/rolledistanse, stigma, totale institusjoner, face-work. Bærer kropps-/prestasjonspress-, stigma- og treneratferds-casene. Ett teori- + ett anvendelseskapittel. |
| 5 | Deleuze & Guattari: rhizom, tilblivelse og fluktlinjer | 2 | perfekt (navngitt 2022/23) | Kreativ, ikke-hierarkisk praksis: rhizom vs. tre/hierarki, tilblivelse (*becoming*), assemblage, deterritorialisering, begjær, glatt/stripet rom. Bærer casene om rigide utviklingstrapper og standardiserte treningsmodeller. Analytisk krevende → boka advarer mot overfladisk bruk. Ett teori- + ett anvendelseskapittel. |
| 6 | Idrettspedagogisk og etisk ramme | 2 | kunne (normativt bakteppe for tiltak) | Bindeleddet mellom teori og rekonstruksjon: bærekraftige utviklingsmiljøer, mangfold/inkludering, barns premisser, trenerens relasjonskompetanse, etisk trenerpraksis, aktørnivåer (forbund/klubb/trener/utøver/foreldre/en selv). **Eksplisitt kryssreferanse til nih-ti100** (motivasjonsklima, relasjonell trygghet, mental helse). Rekonstruksjonsdelens verktøykasse. |
| 7 | Eksamenstrening | 5 | perfekt (meta) | Sjangerkapittel for hver av de tre delferdighetene (avgrensning/«hva problemet gjør» · dekonstruksjon · rekonstruksjon) + essay-metaferdighet (balanse/APA) + modellbesvarelser (A/C/B, ærlig merket) + case-galleri. Fordi casen alltid er selvvalgt, er case-galleriet + modellbesvarelsene den mest direkte eksamenstreningen som finnes. |

Rasjonale: Foucault bærer alle seks settene og får derfor tre kapittel med drill mot både
begrepspresisjon og «hva problemet gjør»-analysen; de fire likestilte 2022/23-perspektivene får
hvert et dybde- + anvendelseskapittel så kandidaten kan velge sitt sterkeste; den idretts-
pedagogiske rammen ruster rekonstruksjonsdelen; eksamenstreningen driller trippelbevegelsen som
håndverk. **Boka gir alle fem verktøyene** — prioriteten styrer dybde og drillmengde, ikke *om*
et perspektiv er med (kandidaten velger ETT til eksamen, men skal kunne begrunne valget mot de
andre).

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart og essayhåndverk |
| 1 | Foucault: makt, kunnskap og normalisering |
| 2 | Bourdieu: felt, kapital, habitus og symbolsk vold |
| 3 | Rosa: akselerasjon, fremmedgjøring og resonans |
| 4 | Goffman: iscenesettelse, roller og stigma |
| 5 | Deleuze & Guattari: rhizom, tilblivelse og fluktlinjer |
| 6 | Idrettspedagogisk og etisk ramme |
| 7 | Eksamenstrening |

### Sjangerkoder (fra analysen §3 — skrives ALLTID fullt ut ved første bruk, jf. README nybegynner-inngang)

TI300 har i praksis ÉN eksamenssjanger (det kritiske anvendelsesessayet), men den brytes ned i
de tre delferdighetene sensor bedømmer + en metaferdighet. Boka bruker disse kodene, ALLTID
skrevet fullt ut ved første bruk i hvert kapittel:

**AVGR** = *problemavgrensning og «hva problemet gjør»* (åpningen): skjær ut ETT konkret,
avgrenset problem fra egen praksis, vis for hvem/når/hvorfor det er problematisk, og — det
analytisk avgjørende — vis hva problemet «gjør»/*produserer* (hva som blir «viktig og riktig»).
**DEKO** = *dekonstruksjon / teoretisk analyse* (kjernen): anvend ETT navngitt begrepsapparat
presist på casen; vis hvordan problemet oppsto i en historisk/kulturell/sosial kontekst gjennom
nettverk av makt/kunnskap/praksis. **REKO** = *rekonstruksjon / strategier og tiltak*
(avslutningen): foreslå en konkret, teoriforankret alternativ praksis for navngitte aktører
(forbund/klubb/trener/deg selv), utledet av analysen. **HELH** = *essay-metaferdigheten*: hold
balanse mellom beskrivelse, problematisering og tiltak, og bygg en stram, sammenhengende,
APA-forankret tekst på ordgrensen (med sammendrag fra 2022/23).

### Vurderingsakser og feilkoder (samlet forklaring i Del 0, refereres per kapittel)

**Karakterrubrikk (2022/23, A–E — skrives ut fullt i Del 0):** E = beskriver og analyserer et
problem med ETT perspektiv, liten selvstendighet; D = akseptabel teoriforståelse, relevante
eksempler, en viss vurderingsevne; C = god teoriforståelse, gode eksempler, god vurderingsevne
på de viktigste områdene (**god og vanlig karakter — jf. README karakter-realisme**); B =
behersker pensum i bredde OG dybde inkl. **artikkelpensum**, meget god tekst; A = fremragende,
klart utmerkende, svært god vurderingsevne og stor selvstendighet. **Pensumnivåene** (2021/22):
C+ krever kjernepensum i bredde/dybde; B+ krever i tillegg artikkelpensum.

**Feilkoder (fra analysen §5 — glosses ved FØRSTE bruk i HVERT kapittel):** **#1** synsing uten
teori (personlige meninger uten pensumforankring — garantert svak karakter, den vanligste
strykgrunnen). **#2** for bredt/uklart problem (mangler avgrensning). **#3** beskrivelse i stedet
for analyse (forteller om problemet uten å vise hva det «gjør»/produserer). **#4** teori-referat
løsrevet fra casen (gjengir teorien generelt uten å bruke den analytisk). **#5** begrepsblanding
på tvers av perspektiver («habitus», «disiplinærmakt», «resonans» om hverandre). **#6** manglende/
uforankret rekonstruksjon (kritikk uten alternativ; vage floskler). **#7** ubalanse mellom delene
(det meste på beskrivelse). **#8** manglende selvstendighet/vurderingsevne (mekanisk lærebok-
anvendelse — holder på D/C). **#9** ignorerer artikkelpensumet (bare hovedbøkene — taket er B).
**#10** formelle brudd (APA-feil, over ordgrensen, rapport-aktig struktur, manglende sammendrag).
**#11** velger et perspektiv man ikke behersker (overfladisk «rhizom» faller lett gjennom).

### Arketypetilpasning (dokumenterte hybridvalg og avvik)

1. **Drøfting i kritisk-anvendelsesessay-variant.** DNA-drofting forutsetter drøftingsessay der
   pensumforankring primært er navngitte forfattere/verk drøftet mot hverandre. TI300 beholder
   makrostrukturen (Del 0 essayhåndverk → temadeler etter frekvens → eksamenstrening med
   modellbesvarelser A/C/B ærlig merket), den **binære selvrettingsrubrikken for drøfting**,
   «hvem eier hva»-kortet, konklusjonsvariasjonen og vippe-casene. Det unike er at «drøfting»
   her er **trippelbevegelsen** (avgrens→dekonstruer→rekonstruer) anvendt på en selvvalgt case,
   og «forankring» betyr **ett navngitt sosialteoretisk begrepsapparat brukt presist på casen**
   (Foucaults normalisering → nettopp denne seleksjonspraksisen), ikke sammenstilling av pensum-
   posisjoner i det abstrakte.
2. **«Hva problemet gjør»/produktiv makt som eksplisitt håndverk (det viktigste unike valget).**
   Alle seks veiledningene krever at kandidaten viser hva problemet «gjør»/produserer — den
   poststrukturalistiske grammatikken (problemet er en *virkning* av et nettverk av makt/kunnskap/
   praksis, ikke en feil som skal fjernes). Dette læres som en **eksplisitt teknikk** i kap. 0.2
   og drilles i sjangerkapitlet AVGR (7.1). Det er den analytiske grammatikken som skiller et
   TI300-essay fra en vanlig «dette er et problem»-tekst.
3. **Sitatlager-broen tilpasses: begrepsanvendelse framfor sitattolkning.** TI300 tester ikke
   utdrags-/sitattolkning som exphil, men *anvendelse* av begreper på en case. DNA-droftings
   sitatlager-bro omtolkes derfor til en **«fra begrep til case»-bro**: for hvert perspektiv
   vises hvordan et abstrakt begrep (habitus, panoptisme, resonans) *skjærer* i en konkret
   idrettssituasjon (NYSKREVET case-parafrase), og hvordan grepet (presis begrepsbruk, forankring)
   er det samme som på eksamen. Den EKTE sitat-broen (oversettelse/arkaisk tone) droppes bevisst.
4. **Erfarings-broen er sentral (jf. DNA-drofting bølge 5).** Fordi casen ALLTID kommer fra
   kandidatens egen idrettspraksis, er konverteringen erfaring → pensumforankret argument
   selve faget. Boka har en gjennomgående `tip`-boks-linje: (1) start i tenkerens begrep, (2)
   bruk egen erfaring som ILLUSTRASJON av begrepet (aldri som begrunnelse alene — #1), (3) koble
   tilbake til dekonstruksjon/rekonstruksjon. Å bare advare mot synsing uten å vise konverteringen
   skyver bort nettopp trener-studentene som har mest materiale.
5. **Case-galleri gjennom hele boka (NIH-signatur — selvvalgt case).** Fordi selve casevalget er
   en ferdighet (§2C i analysen), rammes eksempler inn i reelle idrettspolitiske/pedagogiske
   spenninger: topping av lag/tidlig spesialisering, prestasjons-/vinnerkultur vs. mestring,
   frafall/manglende inkludering, kropps-/vekt-/prestasjonspress (RED-S), autoritær coaching/
   makt i relasjonen, foreldrepress/kravkultur, rigide utviklingstrapper, etisk grenseoverskridende
   praksis/varsling. Case-galleriet samles som eget kapittel i Del 7 (7.5), men caser brukes
   løpende. **Selve oppgavene er nyskrevne** (endre idrett/alder/nivå/detaljer).
6. **Flashcards tungt vektet på begrep↔forfatter↔perspektiv.** Fordi sensor belønner navngitt
   forankring (definisjoner uten avsender er C-stoff) og presis begrepsbruk fra ETT perspektiv,
   er faget flashcard-egnet: begrep↔forfatter-kort (habitus↔Bourdieu, panoptisme↔Foucault,
   resonans↔Rosa, front/backstage↔Goffman, rhizom↔Deleuze & Guattari), begrepspar-kort som skiller
   naboer (disiplinærmakt/biomakt; kulturell/symbolsk kapital; fremmedgjøring/resonans; enantiomer
   … nei — front/backstage; molar/molekylær linje), og «hvilket verktøy biter på denne casen?»-kort.
   **Quiz-profilen** driller nabobegrep-distraktorer (over/på tvers av de fem apparatene),
   perspektivgjenkjenning («hvilket perspektiv passer på denne casen?») og «hva mangler i dette
   utkastet for å løfte fra C til B/A?»-lesetrening; distraktorer straffer aldri grundig lesing
   (README — nær-sanne distraktorer får forklart fasit-kommentar, særlig på tvers av teoretikere).
7. **Konklusjonsvariasjon og vippe-caser (jf. README + DNA-drofting).** Minst én modellbesvarelse
   konkluderer SKARPT og er likevel toppnivå (forbehold er verktøy, ikke garnityr). Minst én case
   er en **vippe-case** der to perspektivvalg begge er fullt forsvarlige (f.eks. topping av lag
   kan dekonstrueres med Bourdieu ELLER Rosa) — fasiten skriver ut begge lesningene og merker
   oppgaven «(omstridt — begge forsvarlige)».
8. **Ingen oppdiktede referanser.** Usikre verk-/utgave-/sidetall og hvem som «eier» et begrep
   på pensumlista merkes `(verifiser)` for fase 6. Godt etablerte teoretiker–begrep-koblinger
   (Foucault↔panoptisme, Bourdieu↔habitus osv.) brukes fritt; sensorveiledningenes/oppgavenes
   tekst gjengis aldri ordrett. Skillet kjernepensum/artikkelpensum må speiles og forfatter-
   koblingene revideres ved pensumskifte (begrepene er stabile).

**Avvik fra analyse-ordningen (dokumentert):** Analysen (§7) foreslår «Del 6 idrettspedagogisk
ramme» og «Del 7 eksamenstrening». Denne boka følger den anbefalte rekkefølgen, men nummererer
teoridelene 1–5 (Foucault→Bourdieu→Rosa→Goffman→D&G), rammen som Del 6 og eksamenstrening som
Del 7. Foucault plasseres FØRST og tyngst (analysens §7 «tyngst, først») fordi hans apparat er
den felles grammatikken; de fire øvrige er likestilte i 2022/23-menyen og får lik dybde (ett
teori- + ett anvendelseskapittel hver), i rekkefølgen Bourdieu→Rosa→Goffman→D&G etter fallende
umiddelbar tilgjengelighet for nybegynneren (D&G sist fordi mest krevende — #11).

### Kapittel-DNA A — teori-/verktøykapittel (de fem perspektivene, flertallet av kapitlene)

Obligatorisk blokk-rekkefølge (plattformens blokktyper), bygd i læringsløkker (jf. DNA-drofting):

1. `tip` **Eksamensvinkel** — frekvens/vekt, hvilke sjangre (AVGR/DEKO/REKO/HELH) perspektivet
   inngår i, og hva sensor ser etter. Fylles fra skjelettets Eksamensbelegg — forfatteren finner
   IKKE på frekvenstall.
2. `text` **Forkunnskaper** — kapitler i boka det bygger på (kap. 0.2 om «hva problemet gjør»;
   evt. tidligere perspektiv) + kryssbok-lenker (nih-ti100 der psykologisk fundament trengs,
   README-leserkrav); i sene/tunge kapitler VIS de 2–3 kjernebegrepene ferdig oppfrisket
   («Sist du var her»).
3. `text` **Perspektivet i idrettens landskap** — kort: hvilket idrettsproblem verktøyet svarer
   på, når det egner seg. Åpne med et **hverdagsanker** (en konkret trener-/utøver-/klubbsituasjon)
   FØR begrepsapparatet (README hverdagsanker).
4. **Læringsløkke per begrep** (gjentas gjennom kapitlet, jf. DNA-drofting): `definition`
   **Kjernebegrep** (toppnivå med `title` — flashcard-kilden), presist definert OG forankret i
   forfatter/verk (Foucault / Bourdieu / Rosa / Goffman / Deleuze & Guattari) → `example`
   **«slik skjærer begrepet i en case»** (begrepet brukt analytisk på en konkret idrettssituasjon,
   skrevet slik en god dekonstruksjon ville gjort det, med eksplisitt forankring) → `exercise`
   **dekonstruksjons-/anvendelsesoppgave** på samme begrep, INLINE rett etter eksempelet. Deretter
   neste begrep, til alt stoffet er dekket.
5. `text` **Posisjoner og spenninger** — der perspektivet rommer indre spenning eller møter
   kritikk (f.eks. Foucaults produktive vs. undertrykkende makt; D&G-abstraksjonens fallgruve):
   fremstill det ærlig — råstoff for A-besvarelsens vurderingsevne.
6. `warning` **Typiske feil** — feilkodene (#1–#11) som gjelder perspektivet, glosset ved første
   bruk; inkl. eksplisitt «teori-referat løsrevet fra casen (#4) og begrepsblanding (#5) stopper
   på C».
7. `exercise` (samlet mot slutten, i tillegg til de inline) × noen eksamensklone — 1–2 DEKO
   (dekonstruer en gitt case med dette perspektivet; løsning = disposisjon + momentliste, ikke
   fullt essay) + evt. 1 REKO-tilløp. Hint på alle (første hint = perspektiv-/begrepsvalget,
   aldri konklusjonen).
8. `collapsible` **Pensumkart for kapitlet** — begrep → forfatter/verk → hvilke poeng de «eier»
   (flashcard-råstoff). Åpner med begrepsbank-notisen fra README. Marker kjernepensum vs.
   artikkelpensum `(verifiser)`.

### Kapittel-DNA B — sjanger-/modellbesvarelses-/case-kapittel (Del 7)

Følger DNA-drofting sjanger- og modellbesvarelses-DNA: `tip` Eksamensvinkel → `text` **Oppskrift**
(trinn-for-trinn disponering av sjangeren med tidsbudsjett for uken) → `example` gjennomskrevet
besvarelse med margkommentarer → for modellbesvarelseskapitlene: nyskrevet oppgave → `collapsible`
**A-besvarelse** (full tekst med margnotater om hva som løfter; «— naturlig pausepunkt —» mellom
hovedseksjonene) → `collapsible` **kommentert C-besvarelse** (korrekt men flat, ærlig merket, med
gapet opp til A) → `collapsible` **autentisk B-/midtnivå-besvarelse** (ekte studentspråk, litt
rotete men god) → `tip` **Sensorblikket** (momentliste + vektlegging) → `exercise` × 3–6 nyskrevne
oppgaver med momentliste-/disposisjonsfasit + binær selvrettingsrubrikk.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = frekvens/vekt + sjangerkoder (AVGR/DEKO/REKO/HELH) +
> prioritetsklasse (perfekt/kunne/kjenne/meta), alt «per 2020–2023-arkivet» (6 sett = 3 ulike
> oppgaver). **Begrepskontrakt** = begreper som SKAL defineres og forankres i forfatter (flashcard-
> kilden). **Drøftingsakser** = spenningene kapitlet ruster studenten til å drøfte. **Case-forslag**
> = idrettssituasjoner egnet for perspektivet. **Kvote** = quiz/flashcards. Kryssbok-lenkene peker
> på nih-ti100-kapitler (`(verifiser lenke)` — legg til KUN hvis nih-ti100-boka finnes ved bygging).

### Del 0 — Eksamenskart og essayhåndverk *(prioritet: PERFEKT (meta))*

#### Kapittel 0.1: Eksamenskartet — slik testes TI300
**id:** `nih-ti300-0-1` · **number:** 0.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Eksamensformen (individuell hjemmeeksamen over én uke, A–F, APA, WISEflow,
  ordgrense, sammendrag fra 2022/23), **trippelbevegelsen** (avgrens→dekonstruer→rekonstruer) som
  fagets ene ferdighet, de fem teoriverktøyene, karakterrubrikken (A–E), skillet kjernepensum/
  artikkelpensum, sjangerkodene og kildeforbeholdet — verktøyet som styrer hele boka.
- **Eksamensbelegg:** Metakapittel (hele arkivet 2020–2023, 6 sett = 3 ulike oppgaver). Skal
  formidle: (a) **formen** — hjemmeeksamen én uke, maks 2500 ord `(verifiser)`, APA, gradert A–F,
  fri struktur men stram tekst, obligatorisk pensumforankring; (b) **trippelbevegelsen** —
  avgrens et konkret problem → dekonstruer med ett navngitt perspektiv → rekonstruer alternativ
  praksis, til stede i ALLE seks settene (2020/21 tre deloppgaver a/b/c; 2021/22 to-delt; 2022/23
  én sammenhengende bestilling med navngitt teorimeny); (c) **de fem perspektivene** (Foucault,
  Bourdieu, Rosa, Goffman, Deleuze & Guattari) med Foucault som rød tråd; (d) **karakterrubrikken**
  A–E (§2) og pensumnivåene (C = kjernepensum, B = + artikkelpensum); (e) **kildeforbeholdet** —
  pensumlista ikke i arkivet, teoretiker–begrep-koblingene utledet, sidetall `(verifiser)`; (f)
  **innstrammingen 2020→2023** (perspektivene navngitt, pensumkrav skjerpet, balanse uttalt). Ingen
  fasit — helhetsvurdering. Prioritet: perfekt (meta).
- **Innholdskontrakt:** «Slik leser du denne boka»-boks (type `text`/`tip`, ALDRI `definition`):
  karakterskalaen A–E og hva «C-stoff»/«A-markør» betyr, hva C er (**god og vanlig karakter** —
  README karakter-realisme), sjangerkodene AVGR/DEKO/REKO/HELH skrevet fullt ut, og at feilene har
  et samlet register (#1–#11). **Del 0-pakken (README):** (a) «Lite tid?»-boks — hurtigrute for
  3–5 dager (0.1→0.2→Foucault Del 1→ett øvrig perspektiv man liker→Del 6-ramme→Del 7 sjanger+
  modellbesvarelse), med timeanslag fra `estimatedMinutes`; NB tidsanslagene er LESEtid, skrive-
  øving kommer i tillegg; (b) **kildenote for frekvens-/sensor-empirien** — 6 sett + 6 sensor-
  veiledninger over 2020/21–2022/23 (tre ordinære + tre identiske utsatte = 3 ulike oppgaver),
  forbehold om at nye sett/emnejustering (ordgrense) kan endre bildet — hentet fra EKSAMENSANALYSE,
  ALDRI oppdiktet; (c) **prosedyre-/sjangerkort på ÉN side** — trippelbevegelsen som tre linjers
  oppskrift (avgrens → dekonstruer → rekonstruer) + ord-/tidsbudsjett + vanligste feil; (d)
  **deltidsrute** — 10–12-ukers plan (~8 t/uke) med to øvingsessay fordelt på flere økter, aldri
  stablet i siste uke; (e) **«lese mye, skrive lite»-boks** — les en oppgave → formuler
  problemavgrensning + perspektivvalg mentalt → les modellbesvarelsen som sensor; minimumsråd:
  skriv minst ETT øvingsessay på tid. Ingen forkunnskapsblokk (metakapittel).
- **Oppgavesjangre:** 3–4 refleksjonsoppgaver: «gitt en uke og maks 2500 ord — sett opp ukeplan
  og ord-/tidsbudsjett for de tre delene»; «avgjør av en problemidé om den er avgrenset nok (AVGR)
  eller for bred (#2)»; «para en case til det perspektivet som biter best».
- **Typiske feil:** Metafeilene: synsing uten teori (#1 — den farligste, garantert svak karakter);
  tro at problemet bare skal *beskrives* (#3) i stedet for dekonstrueres; droppe rekonstruksjonen
  (#6); tro at arkivfrekvensene/ordgrensen er ferske (les kildeforbeholdet — `(verifiser)` gjeldende
  emnebeskrivelse).
- **Kvote:** 10 quiz / 10 flashcards (formfakta, trippelbevegelsen, de fem perspektivene, karakter-
  rubrikken, sjangerkodene, kjernepensum/artikkelpensum, kildeforbeholdet).

#### Kapittel 0.2: Essayhåndverket — trippelbevegelsen og «hva problemet gjør»
**id:** `nih-ti300-0-2` · **number:** 0.2 · **estimatedMinutes:** 60 · **prerequisites:** `nih-ti300-0-1`

- **Kapitteltype:** håndverkskapittel (meta — analytisk grammatikk + skrivehåndverk).
- **Description:** De ferdighetene som gir uttelling på hver eneste besvarelse: å *avgrense* et
  problem, å vise hva det **«gjør»/produserer** (den poststrukturalistiske grammatikken: problemet
  er en virkning av et nettverk av makt/kunnskap/praksis, ikke en feil), å *dekonstruere* med ett
  perspektiv, å *rekonstruere* konkrete aktør-tiltak, og å bygge en balansert, APA-forankret tekst.
  Etablerer analysespråket resten av boka bruker.
- **Eksamensbelegg:** Gjennomgående (grunnvalutaen i alle seks veiledningene: avgrens → vis hva
  problemet gjør → forklar genealogisk i nettverk av makt/kunnskap/praksis → foreslå konkrete
  tiltak). Prioritet: perfekt (meta). Sjangre: AVGR, DEKO, REKO, HELH.
- **Forkunnskaper/kryssbok:** kap. 0.1. `collapsible` **Analyse- og skriveverktøy:** trippel-
  bevegelsens tre trinn, «hva problemet gjør»-spørsmålene (hva blir «viktig og riktig»? hvordan
  krystalliserer det seg i tenke-/væremåter?), genealogi-sjekklisten (fra hva/hvor/hvordan oppsto
  det?), aktørnivåene (forbund/klubb/trener/utøver/foreldre/en selv), APA-grunnregler.
- **Begrepskontrakt (flashcard-kilde):** **problemavgrensning** (ett konkret, situert problem —
  for hvem/når/hvorfor); **«hva et problem gjør/produserer»** (produktiv makt: problemet rammer
  inn hva som teller som «god utøver» og krystalliserer seg i bestemte tenke-/væremåter);
  **«viktig og riktig» som effekt** (ikke naturgitt, men produsert); **genealogi/kontekstualisering**
  (hvordan problemet oppsto historisk/kulturelt/sosialt); **nettverk av makt/kunnskap/praksis**;
  **dekonstruksjon** (plukke problemet fra hverandre — vise grunnlaget det oppsto på) vs.
  **rekonstruksjon** (sette sammen en alternativ praksis); **vurderingsevne og selvstendighet**
  (hovedaksen E→A); **kjernepensum vs. artikkelpensum**; **balanse** (beskrivelse/problematisering/
  tiltak). Hvert begrep er metaverktøy, forankret i emnets gjennomgående språk `(verifiser
  primærkilde)`.
- **Skriveprosedyre (algoritmen for essayet):** (1) velg og avgrens ETT problem fra egen praksis
  (for hvem/når/hvorfor); (2) vis hva det «gjør»/produserer; (3) velg ETT perspektiv og begrunn
  valget; (4) dekonstruer: før begrepene ett for ett på casen, forklar genealogisk; (5) rekonstruer:
  utled konkrete, aktør-spesifikke tiltak av analysen, begrunn teoretisk og etisk; (6) hold balanse
  og skriv en stram, APA-forankret tekst (+ sammendrag); (7) vær ærlig om dilemmaer (løfter mot A).
- **Erfarings-bro (`tip`):** hvordan konvertere egen trenererfaring til pensumforankret argument —
  start i begrepet, bruk erfaringen som illustrasjon (aldri begrunnelse alene, #1), koble tilbake
  til dekonstruksjon/rekonstruksjon.
- **Typiske feil:** #1 (synsing uten teori), #2 (for bredt problem), #3 (beskrivelse i stedet for
  analyse), #6 (rekonstruksjon som floskler), #7 (ubalanse), #10 (APA/ordgrense/sammendrag).
- **Modellsvar (example × 2):** «Ta idéen ‘det er for mye prestasjonspress i idretten’ og gjør den
  om til et avgrenset problem som viser for hvem/når/hvorfor — og vis hva det ‘gjør’»; «Skriv
  åpningsavsnittet (AVGR) til et essay om topping av et guttelag 12 år, der du viser hva praksisen
  produserer, uten ennå å velge perspektiv».
- **Kvote:** 12 quiz / 14 flashcards.

**Prøve-kvote Del 0:** 0 prøver (dekkes av modellbesvarelsene og øvingsessayene i Del 7).

### Del 1 — Foucault: makt, kunnskap og normalisering *(prioritet: PERFEKT — 6/6 sett, emnets røde tråd)*

#### Kapittel 1.1: Makt/kunnskap, produktiv makt og diskurs
**id:** `nih-ti300-1-1` · **number:** 1.1 · **estimatedMinutes:** 65 · **prerequisites:** `nih-ti300-0-2`

- **Kapitteltype:** teori-/verktøykapittel (perfekt — konseptuelt tyngdepunkt).
- **Description:** Foucaults grunnapparat: makt/kunnskap (*pouvoir/savoir*), **produktiv** (ikke
  bare undertrykkende) makt, diskurs, og genealogi som metode — selve språket «hva problemet gjør»
  bygger på. Fundamentet for normalisering (1.2) og for hele bokas analytiske grammatikk.
- **Eksamensbelegg:** Foucault navngitt eksplisitt 2022/23 (×2), men makt/kunnskap/praksis-språket
  ligger i ALLE seks veiledningene som emnets felles grammatikk («hva som blir viktig og riktig»).
  Prioritet: perfekt. Sjangre: DEKO (kjernen), AVGR (grammatikken bak «hva problemet gjør»).
- **Forkunnskaper/kryssbok:** kap. 0.2 (særlig «hva problemet gjør» — Foucault leverer teorien bak).
  `collapsible` **Begreps- og analyseliste:** makt/kunnskap, produktiv makt, diskurs, genealogi,
  «det normale» — med hvordan hvert brukes til å vise hva et problem produserer.
- **Begrepskontrakt (flashcard-kilde):** **makt/kunnskap** (kunnskap og makt forutsetter hverandre;
  det som gjelder som «sann» kunnskap om utøvere er en maktvirkning); **produktiv makt** (makt
  produserer subjekter, ønsker og «sannheter» — ikke bare forbyr); **diskurs** (et regulert sett
  utsagn som bestemmer hva som kan sies/tenkes som «riktig» i idretten); **genealogi** (spore
  hvordan en selvfølgelig praksis historisk ble til — avnaturaliserer den); **subjektposisjon**
  (hvordan diskursen former hvem utøveren *kan* være). Forankres i Foucault (f.eks. *Overvåkning og
  straff*; makt/kunnskap-tekstene) `(verifiser verk/utgave/side)`.
- **Drøftingsakser:** produktiv vs. undertrykkende makt (Foucaults poeng er at makt ikke bare
  begrenser — den skaper); makt som relasjon/nettverk vs. makt som eiendom; er all normalisering
  ille, eller er noe uunngåelig? (nyanse løfter mot A).
- **Case-forslag:** «vinnerdiskursen» i en klubb som produserer hva som teller som en «seriøs»
  utøver; hvordan resultatlister og rankinger produserer sannhet om barn.
- **Typiske feil:** #3 (beskrive problemet uten å vise hva det produserer), #4 (Foucault-referat
  uten å bruke begrepene på casen), #5 (blande makt/kunnskap med Bourdieus symbolske vold).
- **Modellsvar (example × 2–3):** «Vis hvordan en klubbs praksis med offentlige testresultater
  *produserer* en bestemt sannhet om hvilke 13-åringer som er ‘talenter’ — bruk makt/kunnskap og
  produktiv makt»; kort genealogi av hvordan ‘tidlig talentidentifikasjon’ ble en selvfølge.
- **Kvote:** 26 quiz / 26 flashcards.

#### Kapittel 1.2: Disiplinærmakt, panoptisme og normalisering
**id:** `nih-ti300-1-2` · **number:** 1.2 · **estimatedMinutes:** 60 · **prerequisites:** `nih-ti300-1-1`

- **Kapitteltype:** teori-/verktøykapittel (perfekt).
- **Description:** Foucaults disiplinapparat anvendt på treningsrommet: disiplinærmakt, panoptisme/
  overvåking, normalisering og «det normale», det føyelige/dosile legemet, selvteknologier og
  regulering av tid/rom/kropp. Verktøyet som viser hvordan idrettskulturen former kropper og
  treneratferd.
- **Eksamensbelegg:** Kjernen i «hva som blir viktig og riktig» + «krystalliserer seg i tenke-/
  væremåter» (alle 6 veiledningene). Prioritet: perfekt. Sjangre: DEKO, AVGR.
- **Forkunnskaper/kryssbok:** kap. 1.1 (produktiv makt/diskurs). Ved behov for psykologisk fundament
  (hvordan overvåking oppleves som press): kryssreferanse til **nih-ti100** stress/prestasjonspress
  `(verifiser lenke)`. `collapsible` **Begreps- og analyseliste:** disiplinærmakt, panoptisme,
  normalisering, dosilt legeme, selvteknologi, biomakt.
- **Begrepskontrakt (flashcard-kilde):** **disiplinærmakt** (detaljert regulering av kropp, tid og
  rom); **panoptisme/panoptikon** (den mulige, usynlige overvåkingen som får den overvåkte til å
  disiplinere seg selv); **normalisering / «det normale»** (en norm produseres, og avvik fra den
  gjøres synlig og korrigerbart); **det dosile/føyelige legemet** (kroppen formet til lydighet og
  nytte); **selvteknologier/selvdisiplinering** (utøveren overvåker og optimaliserer seg selv);
  **biomakt/biopolitikk** (styring av befolkningen/gruppen gjennom helse, kropp, statistikk).
  Forankres i Foucault `(verifiser verk/side)`.
- **Drøftingsakser:** når blir struktur/rutine til undertrykkende disiplin? Panoptisk selvovervåking
  (treningsdagbøker, GPS-vester, sosiale medier) — verktøy eller kontroll? Normalisering av én
  kroppstype.
- **Case-forslag:** GPS-/pulsmåling som panoptisk selvdisiplinering; en «riktig» utøverkropp som
  normaliseres; treningsleir som disiplinær tidsregulering.
- **Typiske feil:** #4 (nevne «panoptikon» uten å vise selvdisiplineringen på casen), #5 (blande
  disiplinærmakt/biomakt), #8 (mekanisk anvendelse uten vurdering av når disiplin er legitim).
- **Modellsvar (example × 2–3):** «Dekonstruer praksisen med offentlig synlige treningslogger i en
  ungdomsgruppe som panoptisk selvdisiplinering»; «Vis hvordan ‘den seriøse utøverkroppen’
  normaliseres og hva det gjør med dem som faller utenfor».
- **Kvote:** 24 quiz / 24 flashcards.

#### Kapittel 1.3: Foucault i praksis — dekonstruksjon og rekonstruksjon
**id:** `nih-ti300-1-3` · **number:** 1.3 · **estimatedMinutes:** 60 · **prerequisites:** `nih-ti300-1-2`

- **Kapitteltype:** anvendelses-/dekonstruksjonskapittel (perfekt — driller trippelbevegelsen med
  Foucault fra ende til ende).
- **Description:** Hele trippelbevegelsen med Foucault-verktøyet på én gjennomgående case: avgrens
  → dekonstruer (makt/kunnskap, disiplin, normalisering) → rekonstruer (mot-praksis: hvordan
  destabilisere normen, gi rom for andre subjektposisjoner). Modellerer hvordan et Foucault-essay
  faktisk bygges.
- **Eksamensbelegg:** Foucault som eneste eller bærende perspektiv i et helt essay. Prioritet:
  perfekt. Sjangre: AVGR + DEKO + REKO (full trippelbevegelse).
- **Forkunnskaper/kryssbok:** kap. 1.1–1.2 + kap. 0.2 (trippelbevegelsen). `collapsible`
  **Foucault-verktøykasse:** de sentrale begrepene som en dekonstruksjons-sjekkliste.
- **Begrepskontrakt (flashcard-kilde, oppsummerende):** dekonstruksjons-sekvensen (hvilken diskurs?
  hvilken kunnskap gjelder som sann? hvordan disiplineres/normaliseres? hva produseres?);
  rekonstruksjon foucauldiansk (ikke «frigjøring» til en sann natur, men å åpne for andre
  praksiser/subjektposisjoner — mot-diskurs, mindre panoptisk struktur, plass for det «unormale»).
  `(verifiser)` der rekonstruksjonslogikken tilskrives Foucault direkte vs. er en pedagogisk
  anvendelse.
- **Drøftingsakser:** kan man rekonstruere «etisk fundert» praksis med et perspektiv som avviser
  universelle normer? (den ærlige spenningen — å drøfte den løfter til A); faren for at
  rekonstruksjonen bare produserer en ny normaliserende diskurs.
- **Case-forslag (gjennomgående):** autoritær coaching i en juniorgruppe — full dekonstruksjon +
  rekonstruksjon; alternativt kroppspress/vektfokus (kobling til RED-S; **nih-ti100** mental helse
  `(verifiser lenke)`).
- **Typiske feil:** #6 (rekonstruksjon som floskler — «mer dialog» uten Foucault-forankring), #7
  (80 % på dekonstruksjon, hastet rekonstruksjon), #8 (ingen erkjennelse av spenningen over).
- **Modellsvar (example × 2):** ett gjennomskrevet Foucault-essay i disposisjonsform (avgrens →
  dekonstruer → rekonstruer, med margnotater om hva som løfter); ett der rekonstruksjonen er
  aktør-spesifikk (trener/klubb/forbund).
- **Kvote:** 22 quiz / 22 flashcards.

**Prøve-kvote Del 1:** 4 prøver (id `nih-ti300-1-prove`, chapterNumber `1.P`): (1) *Makt/kunnskap
+ diskurs* — DEKO-begrepsdrill + «hva produserer denne praksisen?»; (2) *Disiplin/normalisering* —
DEKO panoptikon/normalisering på case; (3) *Foucault-dekonstruksjon* — full DEKO på gitt case; (4)
*Foucault-essay* — AVGR+DEKO+REKO på eksamensnivå (disposisjon + momentliste + binær selvrettings-
rubrikk).

### Del 2 — Bourdieu: felt, kapital, habitus og symbolsk vold *(prioritet: PERFEKT — navngitt 2022/23)*

#### Kapittel 2.1: Felt, kapital og habitus
**id:** `nih-ti300-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `nih-ti300-0-2`

- **Kapitteltype:** teori-/verktøykapittel (perfekt).
- **Description:** Bourdieus grunnapparat på idrettsfeltet: felt, kapitalformer (økonomisk,
  kulturell, sosial, symbolsk, + kroppslig/fysisk), habitus (kroppsliggjorte disposisjoner), doxa
  (det uuttalte selvfølgelige) og illusio (investeringen i «spillet»). Verktøyet for reproduksjon
  og ulikhet.
- **Eksamensbelegg:** Bourdieu navngitt 2022/23 (×2); bærer seleksjons-/ulikhetscasene. Prioritet:
  perfekt. Sjangre: DEKO, AVGR.
- **Forkunnskaper/kryssbok:** kap. 0.2. `collapsible` **Begrepsliste:** felt, kapitalformene, habitus,
  doxa, illusio — hva hvert forklarer i idrett.
- **Begrepskontrakt (flashcard-kilde):** **felt** (idrettsfeltet som eget spill med egne innsatser
  og posisjonskamper); **kapital** — økonomisk, **kulturell**, **sosial**, **symbolsk**, samt
  **kroppslig/fysisk kapital** (den atletiske kroppen som verdsatt ressurs); **habitus**
  (kroppsliggjorte, varige disposisjoner formet av bakgrunn — «sansen for spillet»); **doxa** (det
  som tas for gitt som naturlig og udiskutabelt i feltet); **illusio** (troen på at spillet er verdt
  å spille). Forankres i Bourdieu (feltteori; *Distinksjonen* m.m.) `(verifiser verk/side)`.
- **Drøftingsakser:** reproduksjon vs. endring (kan habitus endres?); er kroppslig kapital
  «rettferdig» talent eller sosialt privilegium?; doxa gjør ulikhet usynlig.
- **Case-forslag:** hvordan barn med «riktig» idrettshabitus (foreldre, utstyr, kultur) systematisk
  favoriseres i seleksjon; doxa i en klubb om hva «god innsats» ser ut som.
- **Typiske feil:** #4 («Bourdieu skrev om felt» uten å bruke det på casen), #5 (blande kapital-
  formene; forveksle habitus med personlighet), #3 (beskrive ulikhet uten mekanismen).
- **Modellsvar (example × 2):** «Analyser hvorfor de samme familiene alltid er ‘ildsjelene’ i
  klubben — felt, kapital, habitus»; «Vis hvordan doxa i en turnklubb gjør en bestemt kroppstype
  til selvfølgelig norm».
- **Kvote:** 26 quiz / 26 flashcards.

#### Kapittel 2.2: Symbolsk vold og reproduksjon — Bourdieu i praksis
**id:** `nih-ti300-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-ti300-2-1`

- **Kapitteltype:** anvendelses-/dekonstruksjonskapittel (perfekt).
- **Description:** Symbolsk vold og reproduksjon av ulikhet, og full trippelbevegelse med Bourdieu:
  hvordan ekskludering oppleves som fortjent, og hvordan en klubb kan rekonstruere en mindre
  reproduserende praksis.
- **Eksamensbelegg:** Bærer frafall/ekskludering (2021/22 inkludering/mangfold). Prioritet: perfekt.
  Sjangre: AVGR + DEKO + REKO.
- **Forkunnskaper/kryssbok:** kap. 2.1. `collapsible` **Bourdieu-verktøykasse:** symbolsk vold,
  reproduksjon, dekonstruksjons-sjekkliste.
- **Begrepskontrakt (flashcard-kilde):** **symbolsk vold** (den milde, usynlige tvangen der de
  dominerte anerkjenner dominansen som legitim — de ekskluderte opplever utestengingen som
  fortjent); **reproduksjon** (feltet gjenskaper de eksisterende maktforholdene); **posisjon og
  posisjonskamp**; kobling doxa→symbolsk vold. Forankres i Bourdieu `(verifiser)`.
- **Drøftingsakser:** kan symbolsk vold unngås helt, eller bare gjøres synlig?; individ vs. struktur
  i frafall; rekonstruksjon (rullere lag, endre seleksjonskriterier) — nok, eller symbolsk?
- **Case-forslag (gjennomgående):** topping av lag / seleksjon i barneidrett som symbolsk vold —
  full dekonstruksjon + rekonstruksjon (klubb/forbund/trener-tiltak). **Vippe-case-kandidat**
  (kan også leses med Rosa — se 3.2/§2 pkt. 7).
- **Typiske feil:** #6 (rekonstruksjon uten Bourdieu-forankring), #8 (ingen erkjennelse av at
  tiltak kan reprodusere ny symbolsk vold), #1 (moralisere over «urettferdighet» uten teori).
- **Modellsvar (example × 2):** ett gjennomskrevet Bourdieu-essay (seleksjon → symbolsk vold →
  aktør-spesifikke tiltak); ett der rekonstruksjonen drøftes kritisk (er den nok?).
- **Kvote:** 24 quiz / 24 flashcards.

**Prøve-kvote Del 2:** 4 prøver (id `nih-ti300-2-prove`, chapterNumber `2.P`): (1) *Felt/kapital/
habitus* — DEKO-begrepsdrill; (2) *Doxa/illusio* — DEKO på case; (3) *Symbolsk vold/reproduksjon*
— DEKO frafall/seleksjon; (4) *Bourdieu-essay* — full trippelbevegelse på eksamensnivå.

### Del 3 — Rosa: akselerasjon, fremmedgjøring og resonans *(prioritet: PERFEKT — navngitt 2022/23)*

#### Kapittel 3.1: Sosial akselerasjon og fremmedgjøring
**id:** `nih-ti300-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-ti300-0-2`

- **Kapitteltype:** teori-/verktøykapittel (perfekt).
- **Description:** Rosas akselerasjonsteori på idretten: sosial akselerasjon (teknisk / sosial
  endring / livstempo), fremmedgjøring (fra tid, ting, andre, egen kropp) og tilgjengeliggjøring
  (*Verfügbarkeit*) — verktøyet for tempopress, optimalisering og tidlig spesialisering.
- **Eksamensbelegg:** Rosa navngitt 2022/23 (×2); bærer 2021/22-ankeret (bærekraftige miljøer,
  barns premisser). Prioritet: perfekt. Sjangre: DEKO, AVGR.
- **Forkunnskaper/kryssbok:** kap. 0.2. Ved behov for opplevelsesnivået (stress/utbrenthet):
  kryssreferanse **nih-ti100** stress/burnout `(verifiser lenke)`. `collapsible` **Begrepsliste:**
  de tre akselerasjonstypene, fremmedgjøring, tilgjengeliggjøring.
- **Begrepskontrakt (flashcard-kilde):** **sosial akselerasjon** i tre former (teknisk akselerasjon;
  akselerasjon av sosial endring; akselerasjon av livstempo); **fremmedgjøring** (en relasjon uten
  ekte resonans — utøveren mister forbindelsen til aktiviteten, kroppen, andre og tiden); **tilgjenge-
  liggjøring / *Verfügbarkeit*** (verden/kroppen gjøres til noe som skal kontrolleres, optimaliseres
  og stilles til rådighet — og entgleiter nettopp derfor). Forankres i Rosa (akselerasjons-/
  resonansteori) `(verifiser verk/utgave/side)`.
- **Drøftingsakser:** er akselerasjon i seg selv ille, eller bare fremmedgjørende akselerasjon?;
  optimaliseringsjaget som strukturelt vs. individuelt valg; når blir «utvikling» fremmedgjøring?
- **Case-forslag:** tidlig spesialisering og helårssesong som akselerasjon; treningsapper/data som
  tilgjengeliggjøring av kroppen; en ung utøver fremmedgjort fra gleden ved egen idrett.
- **Typiske feil:** #4 (Rosa-referat uten case), #5 (blande fremmedgjøring med Bourdieus symbolske
  vold eller Marx' klassiske fremmedgjøring uten Rosas presisering), #3 (beskrive «stress» uten
  akselerasjonsmekanismen).
- **Modellsvar (example × 2):** «Dekonstruer en 11-årings helårs fotball + ekstra akademi som sosial
  akselerasjon og fremmedgjøring»; «Vis hvordan treningsdata gjør kroppen til noe ‘tilgjengelig’».
- **Kvote:** 26 quiz / 26 flashcards.

#### Kapittel 3.2: Resonans som etisk alternativ — Rosa i praksis
**id:** `nih-ti300-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-ti300-3-1`

- **Kapitteltype:** anvendelses-/dekonstruksjonskapittel (perfekt — resonans egner seg direkte som
  rekonstruksjonsprinsipp).
- **Description:** Resonans som Rosas etiske alternativ til fremmedgjøring, og full trippelbevegelse:
  akselerasjon/fremmedgjøring som problem → resonans som rekonstruert praksis (den responsive,
  gjensidige relasjonen mellom utøver, aktivitet, trener og kropp).
- **Eksamensbelegg:** Rosa gir en av de mest direkte teori→tiltak-koblingene (resonans = konkret
  rekonstruksjonsideal). Prioritet: perfekt. Sjangre: AVGR + DEKO + REKO.
- **Forkunnskaper/kryssbok:** kap. 3.1. Kobling til bærekraftige miljøer/relasjonskompetanse:
  Del 6. `collapsible` **Rosa-verktøykasse:** resonans, dens fire akser, resonans vs. fremmedgjøring.
- **Begrepskontrakt (flashcard-kilde):** **resonans** (en responsiv relasjon der noe berører oss og
  vi berører tilbake — ikke kontrollerbar, ikke instrumentell); resonansaksene (horisontal: andre;
  diagonal: ting/aktivitet; vertikal: det som overskrider — natur/idrettens mening); **resonans vs.
  fremmedgjøring** som etisk akse; hvorfor resonans ikke kan *tvinges frem* (paradokset — den lar seg
  ikke tilgjengeliggjøre). Forankres i Rosa `(verifiser)`.
- **Drøftingsakser:** kan en prestasjonskultur romme resonans, eller er de uforenlige?; resonans som
  luksus vs. rettighet; faren for å instrumentalisere «resonans» til et nytt optimaliseringsmål.
- **Case-forslag (gjennomgående):** tidlig spesialisering (samme case som 3.1) → rekonstruksjon mot
  et resonansorientert utviklingsmiljø (variert idrett, indre motivasjon — kobling **nih-ti100**
  SDT/motivasjonsklima `(verifiser lenke)`). **Vippe-case:** topping av lag kan leses med Rosa
  (livstempo/press) ELLER Bourdieu (kapital/seleksjon) — merkes «(omstridt — begge forsvarlige)».
- **Typiske feil:** #6 (resonans som floskel — «mer glede» uten Rosa-forankring), #11 (resonans-
  begrepet brukt overfladisk), #8 (ingen erkjennelse av resonans-paradokset).
- **Modellsvar (example × 2):** ett Rosa-essay (akselerasjon → resonans-rekonstruksjon med aktør-
  tiltak); ett med skarp konklusjon (README konklusjonsvariasjon — resonans krever å *avvikle*
  bestemte strukturer, ikke bare supplere dem).
- **Kvote:** 24 quiz / 24 flashcards.

**Prøve-kvote Del 3:** 4 prøver (id `nih-ti300-3-prove`, chapterNumber `3.P`): (1) *Akselerasjon* —
DEKO tre former + tidlig spesialisering; (2) *Fremmedgjøring/tilgjengeliggjøring* — DEKO på case;
(3) *Resonans* — REKO-drill (resonans som rekonstruksjonsprinsipp); (4) *Rosa-essay* — full
trippelbevegelse på eksamensnivå.

### Del 4 — Goffman: iscenesettelse, roller og stigma *(prioritet: PERFEKT — navngitt 2022/23)*

#### Kapittel 4.1: Dramaturgi — inntrykksstyring, front- og backstage, roller
**id:** `nih-ti300-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-ti300-0-2`

- **Kapitteltype:** teori-/verktøykapittel (perfekt).
- **Description:** Goffmans dramaturgiske apparat på trener–utøver-samhandlingen: inntrykksstyring,
  front-/backstage, rolle og rolledistanse, team/opptreden, face og face-work. Verktøyet for
  iscenesettelse og rolleforventninger i laget.
- **Eksamensbelegg:** Goffman navngitt 2022/23 (×2); bærer treneratferd/roller/relasjon (emnetittel
  relasjonskompetanse). Prioritet: perfekt. Sjangre: DEKO, AVGR.
- **Forkunnskaper/kryssbok:** kap. 0.2. `collapsible` **Begrepsliste:** inntrykksstyring, front/
  backstage, rolle, face-work — hva hvert forklarer i idrettssamhandling.
- **Begrepskontrakt (flashcard-kilde):** **inntrykksstyring / impression management** (vi styrer det
  inntrykket andre får av oss); **frontstage/backstage** (scenen der rollen spilles vs. kulissene der
  den slippes); **rolle og rolledistanse** (å spille en rolle vs. å markere avstand til den); **team/
  opptreden** (en gruppe som samarbeider om å opprettholde en definisjon av situasjonen); **face /
  face-work** (det sosiale ansiktet og arbeidet med å bevare det — eget og andres). Forankres i
  Goffman (*Vårt rollespill til daglig*) `(verifiser verk/side)`.
- **Drøftingsakser:** er iscenesettelse uekthet eller nødvendig sosialt arbeid?; treneren som alltid
  «frontstage» — når får utøvere se backstage?; face-work vs. ærlig tilbakemelding.
- **Case-forslag:** treneren som iscenesetter kontroll frontstage mens usikkerheten er backstage; en
  utøver som «taper ansikt» ved skade/tap og gruppens face-work.
- **Typiske feil:** #4 (Goffman-referat uten case), #5 (blande stigma/rolle; front/backstage brukt
  løst), #3 (beskrive «dårlig kommunikasjon» uten dramaturgisk mekanisme).
- **Modellsvar (example × 2):** «Analyser en treners oppførsel før/etter kamp med front-/backstage
  og face-work»; «Vis hvordan et lag samarbeider om å opprettholde en ‘vinnervilje’-fasade».
- **Kvote:** 24 quiz / 24 flashcards.

#### Kapittel 4.2: Stigma, totale institusjoner og Goffman i praksis
**id:** `nih-ti300-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-ti300-4-1`

- **Kapitteltype:** anvendelses-/dekonstruksjonskapittel (perfekt).
- **Description:** Stigma og totale institusjoner, og full trippelbevegelse med Goffman: hvordan
  avvik (skade, tap, kropp, «å gi seg») stigmatiseres, og hvordan en relasjonell praksis kan
  rekonstrueres.
- **Eksamensbelegg:** Bærer kropps-/prestasjonspress- og stigma-caser (frafall, RED-S). Prioritet:
  perfekt. Sjangre: AVGR + DEKO + REKO.
- **Forkunnskaper/kryssbok:** kap. 4.1. Ved kobling til mental helse/kroppspress: kryssreferanse
  **nih-ti100** mental helse `(verifiser lenke)`. `collapsible` **Goffman-verktøykasse:** stigma,
  total institusjon, dekonstruksjons-sjekkliste.
- **Begrepskontrakt (flashcard-kilde):** **stigma** (et diskrediterende kjennetegn — kroppslig,
  karaktermessig eller «tribalt»/gruppebasert — som gjør bæreren mindreverdig i andres øyne);
  **totale institusjoner** (rammer som omslutter hele livet med felles regime — idrettsakademiet/
  toppidrettsmiljøet som ramme); **ritualer i samhandling**; kobling front/backstage→stigma-håndtering.
  Forankres i Goffman (*Stigma*; *Anstalt og menneske*) `(verifiser verk/side)`.
- **Drøftingsakser:** stigma som individuelt problem vs. sosial produksjon; total institusjon —
  beskyttende ramme eller kontrollerende?; rekonstruksjon (av-stigmatisering) — mulig uten å
  romantisere?
- **Case-forslag (gjennomgående):** stigmaet rundt å «gi seg» eller å ha en spiseforstyrrelse i et
  toppmiljø — full dekonstruksjon + rekonstruksjon (kultur/trener/klubb-tiltak).
- **Typiske feil:** #6 (av-stigmatisering som floskel), #8 (ingen refleksjon over egen rolle i
  stigmatiseringen), #5 (stigma forvekslet med Bourdieus symbolske vold — presiser forskjellen).
- **Modellsvar (example × 2):** ett Goffman-essay (stigma → rekonstruksjon); ett der total-
  institusjon-begrepet brukes på et idrettsakademi.
- **Kvote:** 24 quiz / 24 flashcards.

**Prøve-kvote Del 4:** 4 prøver (id `nih-ti300-4-prove`, chapterNumber `4.P`): (1) *Dramaturgi* —
DEKO inntrykksstyring/front-backstage; (2) *Roller/face-work* — DEKO på case; (3) *Stigma/total
institusjon* — DEKO frafall/kroppspress; (4) *Goffman-essay* — full trippelbevegelse på eksamensnivå.

### Del 5 — Deleuze & Guattari: rhizom, tilblivelse og fluktlinjer *(prioritet: PERFEKT — navngitt 2022/23, mest krevende)*

#### Kapittel 5.1: Rhizom, tilblivelse og deterritorialisering
**id:** `nih-ti300-5-1` · **number:** 5.1 · **estimatedMinutes:** 60 · **prerequisites:** `nih-ti300-0-2`

- **Kapitteltype:** teori-/verktøykapittel (perfekt — men med eksplisitt advarsel om overfladisk
  bruk, #11).
- **Description:** Deleuze & Guattaris apparat på idrettspraksis: rhizom vs. tre/hierarki, tilblivelse
  (*becoming*), assemblage, deterritorialisering/reterritorialisering, begjærsproduksjon og glatt vs.
  stripet rom. Verktøyet for kreativ, ikke-hierarkisk praksis og kritikk av faste identiteter/
  standardiserte løp.
- **Eksamensbelegg:** D&G navngitt 2022/23 (×2); bærer rigide utviklingstrapper/standardiserte
  modeller (kompleksitet, pedagogiske prinsipper). Analytisk krevende — boka advarer eksplisitt.
  Prioritet: perfekt. Sjangre: DEKO, AVGR.
- **Forkunnskaper/kryssbok:** kap. 0.2. `collapsible` **Begrepsliste:** rhizom, tilblivelse,
  assemblage, deterritorialisering, glatt/stripet rom — hva hvert forklarer i idrett, med presis
  advarsel mot metafor-misbruk.
- **Begrepskontrakt (flashcard-kilde):** **rhizom** (ikke-hierarkisk, forgrenet nettverk uten senter
  eller fast start — motsatsen til «treet»/utviklingstrappen); **tilblivelse / *becoming*** (å bli til
  gjennom bevegelse og forbindelser, ikke å realisere en fast, forhåndsgitt identitet/«talent»);
  **assemblage/*agencement*** (en sammenkobling av heterogene deler — utstyr, kropper, regler, følelser
  — som virker sammen); **deterritorialisering/reterritorialisering** (å bryte løs fra en fastlagt
  orden / å låse fast på nytt); **glatt vs. stripet rom** (åpent, utforskende vs. rutet, kontrollert);
  **linjer** (molar/molekylær/fluktlinje). Forankres i Deleuze & Guattari (*Tusen platåer*) `(verifiser
  verk/side)`.
- **Drøftingsakser:** trenger idrett struktur (stripet rom) *og* utforskning (glatt rom)?; faren for
  romantisering av «det frie»; når er standardisering nyttig?
- **Case-forslag:** den lineære utviklingstrappen (tre-struktur) vs. et rhizomatisk, variert
  utviklingsmiljø; «talent» som fast identitet vs. tilblivelse.
- **Typiske feil:** #11 (overfladisk «rhizom»-bruk uten reelt begrep — faller lett gjennom), #4
  (metaforbruk løsrevet fra casen), #5 (blande D&G-linjer med Foucaults makt).
- **Modellsvar (example × 2):** «Dekonstruer en rigid, aldersbestemt utviklingstrapp som en tre-/
  molar-struktur og pek på fluktlinjer»; «Vis hvordan ‘talentidentifikasjon’ fikserer identitet
  der tilblivelse ville vært mer fruktbart».
- **Kvote:** 26 quiz / 26 flashcards.

#### Kapittel 5.2: Fluktlinjer og kreativ praksis — Deleuze & Guattari i praksis
**id:** `nih-ti300-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-ti300-5-1`

- **Kapitteltype:** anvendelses-/dekonstruksjonskapittel (perfekt).
- **Description:** Full trippelbevegelse med D&G: en rigid, standardisert praksis dekonstrueres som
  stripet/tre-struktur, og rekonstrueres mot et mer rhizomatisk, eksperimenterende miljø — med ærlig
  drøfting av hvor mye struktur som fortsatt trengs.
- **Eksamensbelegg:** Bærer casene om standardiserte treningsmodeller. Prioritet: perfekt. Sjangre:
  AVGR + DEKO + REKO.
- **Forkunnskaper/kryssbok:** kap. 5.1. Kobling til bærekraftige/kreative miljøer: Del 6.
  `collapsible` **D&G-verktøykasse:** fluktlinje, glatt/stripet rom, rekonstruksjon som eksperiment.
- **Begrepskontrakt (flashcard-kilde):** **fluktlinje** (linjen som bryter ut av den fastlagte
  ordenen og åpner nytt); **begjærsproduksjon** (begjær som produktiv, skapende kraft — ikke mangel);
  rekonstruksjon deleuziansk (åpne glatt rom, invitere tilblivelse, la fluktlinjer virke — ikke bygge
  en ny fast trapp); spenningen struktur↔frihet. `(verifiser)` der rekonstruksjonslogikken tilskrives
  D&G direkte.
- **Drøftingsakser:** kan en klubb være rhizomatisk og likevel drive systematisk?; fluktlinje som
  frigjøring vs. kaos; rekonstruksjon som varig endring vs. reterritorialisering.
- **Case-forslag (gjennomgående):** en standardisert, aldersinndelt treningsmodell → rekonstruksjon
  mot variert, utforskende praksis (kobling **nih-ti100** indre motivasjon/mestringsklima `(verifiser
  lenke)`).
- **Typiske feil:** #6 (rekonstruksjon som vag «frihet»), #11 (fortsatt overfladisk D&G), #8 (ingen
  erkjennelse av at noe stripet rom trengs).
- **Modellsvar (example × 2):** ett D&G-essay (rigid modell → rhizomatisk rekonstruksjon); ett med
  ærlig drøfting av struktur-behovet (README konklusjonsvariasjon).
- **Kvote:** 24 quiz / 24 flashcards.

**Prøve-kvote Del 5:** 4 prøver (id `nih-ti300-5-prove`, chapterNumber `5.P`): (1) *Rhizom/tre* —
DEKO utviklingstrapp; (2) *Tilblivelse/deterritorialisering* — DEKO «talent»-identitet; (3)
*Fluktlinjer/glatt rom* — REKO-drill; (4) *D&G-essay* — full trippelbevegelse på eksamensnivå
(inkl. eksplisitt sjekk mot overfladisk bruk, #11).

### Del 6 — Idrettspedagogisk og etisk ramme *(prioritet: KUNNE — normativt bakteppe for rekonstruksjonen)*

#### Kapittel 6.1: Bærekraftige utviklingsmiljøer, mangfold og barns premisser
**id:** `nih-ti300-6-1` · **number:** 6.1 · **estimatedMinutes:** 50 · **prerequisites:** `nih-ti300-0-2`

- **Kapitteltype:** rammekapittel (kunne — normativt bakteppe tiltakene svarer på).
- **Description:** Det idrettspolitiske og pedagogiske bakteppet rekonstruksjonene skal svare på:
  bærekraftige utviklingsmiljøer, mangfold og inkludering, barns egne premisser, mestring/mening/
  utfordring. Bindeleddet mellom teoridekonstruksjon og konkrete tiltak.
- **Eksamensbelegg:** 2021/22-ankeret (bærekraftige miljøer, mangfold, inkludering, barns premisser)
  + gjennomgående krav om konkrete, etisk funderte tiltak. Prioritet: kunne. Sjangre: REKO (leverer
  tiltaks-vokabularet), AVGR (rammer inn hva som er «problematisk»).
- **Forkunnskaper/kryssbok:** kap. 0.2. Psykologisk fundament for «gode miljøer»: kryssreferanse
  **nih-ti100** motivasjonsklima/relasjonell trygghet `(verifiser lenke)`. `collapsible`
  **Rammeliste:** bærekraftige miljøer, inkludering, barns premisser, mestringsklima.
- **Begrepskontrakt (flashcard-kilde):** **bærekraftige utviklingsmiljøer** (miljøer som fremmer
  langsiktig, sunn deltakelse på utøverens premisser); **mangfold og inkludering**; **barns egne
  premisser** (aktivitet tilpasset barnets utvikling, ikke voksenidrettens logikk); **mestring,
  mening og utfordring** (motivasjonelle kvaliteter i gode miljøer); aktørnivåene (forbund/klubb/
  trener/utøver/foreldre). Forankres i idrettspedagogisk kjerne- og artikkelpensum (NIH) `(verifiser
  forfatter/verk)`.
- **Drøftingsakser:** «barns premisser» vs. talentutvikling — reell konflikt?; inkludering vs.
  seleksjon; hvem definerer «bærekraftig»?
- **Case-forslag:** en klubb som vil bli mer inkluderende uten å miste «det sportslige»; foreldrepress
  vs. barns premisser.
- **Typiske feil:** #6 (tiltak som floskler uten forankring i det normative rammeverket ELLER
  teorien), #8 (normativ synsing uten å koble til dekonstruksjonen), #1 (verdiutsagn uten kilde).
- **Modellsvar (example × 2):** «Utled tre konkrete klubbtiltak for et mer bærekraftig miljø av en
  gitt dekonstruksjon»; «Vis hvordan ‘barns premisser’ kan operasjonaliseres i en treningsplan».
- **Kvote:** 24 quiz / 24 flashcards.

#### Kapittel 6.2: Relasjonskompetanse, etisk trenerpraksis og aktørnivåer
**id:** `nih-ti300-6-2` · **number:** 6.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-ti300-6-1`

- **Kapitteltype:** rammekapittel (kunne — rekonstruksjonens verktøykasse).
- **Description:** Trenerens relasjonskompetanse (emnetittelen), etisk fundert/effektiv/reflektert
  praksis, dekonstruksjon–rekonstruksjon som pedagogisk grep, kompleksitet i trenerhverdagen, og
  hvordan tiltak fordeles på aktørnivåer (forbund/klubb/trener/utøver/foreldre/en selv). Ruster REKO-
  delen til å bli konkret og aktør-spesifikk.
- **Eksamensbelegg:** Emnetittel (relasjonskompetanse) + 2022/23-kravet om tiltak for flere aktør-
  nivåer + etiske aspekter. Prioritet: kunne. Sjangre: REKO, HELH.
- **Forkunnskaper/kryssbok:** kap. 6.1. Kommunikasjon/coaching-relasjon deler pensum med **nih-ti100**
  (kommunikasjonshjul) `(verifiser lenke)`. `collapsible` **Rekonstruksjons-verktøykasse:**
  relasjonskompetanse, etikk-kriteriene, aktørnivå-matrise.
- **Begrepskontrakt (flashcard-kilde):** **trenerens relasjonskompetanse** (evnen til å skape gode,
  utviklende relasjoner); **etisk fundert / effektiv / reflektert praksis** (de tre kvalitetene
  rekonstruksjonen skal ha, jf. alle veiledninger); **dekonstruksjon → rekonstruksjon** som pedagogisk
  grep; **kompleksitet** (trenerhverdagen som sammensatt, ikke oppskriftsstyrt); **aktørnivåer**
  (hvem kan gjøre hva — forbund/klubb/trener/utøver/foreldre/en selv). Forankres i NIH-pensum
  `(verifiser forfatter/verk)`.
- **Drøftingsakser:** effektiv vs. etisk (kan de kollidere?); relasjonskompetanse — ferdighet eller
  holdning?; tiltak på systemnivå vs. individnivå.
- **Case-forslag:** fordel et sett rekonstruksjonstiltak riktig på aktørnivåene; en etisk gråsone i
  trenerrollen (varsling/grenseoverskridelse).
- **Typiske feil:** #6 (tiltak uten aktør — «noen bør…»), #7 (all rekonstruksjon på treneren, glemmer
  forbund/klubb), #8 (ingen erkjennelse av effektiv↔etisk-spenningen).
- **Modellsvar (example × 2):** «Ta en rekonstruksjon og fordel tiltakene på forbund/klubb/trener/
  deg selv med begrunnelse»; «Drøft et tilfelle der effektiv og etisk praksis trekker i hver sin
  retning».
- **Kvote:** 24 quiz / 24 flashcards.

**Prøve-kvote Del 6:** 4 prøver (id `nih-ti300-6-prove`, chapterNumber `6.P`): (1) *Bærekraftige
miljøer/barns premisser* — REKO-vokabular; (2) *Inkludering/mangfold* — AVGR+REKO; (3)
*Relasjonskompetanse/etikk* — REKO aktørnivåer; (4) *Rekonstruksjons-essay* — utled og fordel
tiltak av en gitt dekonstruksjon på eksamensnivå.

### Del 7 — Eksamenstrening *(prioritet: PERFEKT (meta))*

#### Kapittel 7.1: Sjanger 1 — problemavgrensning og «hva problemet gjør» (AVGR)
**id:** `nih-ti300-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-ti300-0-2`

- **Kapitteltype:** sjangerkapittel (perfekt — driller åpningen).
- **Description:** Håndverket i å skjære ut ETT konkret, avgrenset problem og vise hva det «gjør»/
  produserer — den analytisk avgjørende åpningen. Oppskrift + gjennomskrevet eksempel + drilloppgaver.
- **Eksamensbelegg:** Avgrensning + «hva problemet gjør» krevd i ALLE 6 settene (score 6). Prioritet:
  perfekt. Sjanger: AVGR.
- **Forkunnskaper/kryssbok:** kap. 0.2 (grammatikken) + de fem perspektivene (for å vite hva casen
  skal «bite» på). `collapsible` **AVGR-verktøykasse:** avgrensnings-sjekkliste, «hva problemet
  gjør»-spørsmålene, binær selvrettingsrubrikk.
- **Oppskrift:** avgrens → gjør konkret (for hvem/når/hvorfor) → vis virkningen (hva blir «viktig og
  riktig») → begrunn hvorfor endring trengs; med tidsbudsjett (åpningen ~15–20 % av teksten).
- **Typiske feil:** #2 (for bredt problem), #3 (verdidom uten å vise mekanismen), #7 (for lang
  åpning).
- **Modellsvar (example × 2):** gjennomskrevet åpning som viser hva en topping-praksis produserer,
  med margnotater; en for-bred åpning + hvordan den strammes til.
- **Binær selvrettingsrubrikk (0/1):** ☐ ETT avgrenset problem? ☐ for hvem/når/hvorfor konkret? ☐
  vist hva problemet «gjør»/produserer? ☐ begrunnet hvorfor endring trengs? ☐ ikke ren verdidom (#3)?
- **Kvote:** 12 quiz / 12 flashcards.

#### Kapittel 7.2: Sjanger 2 — dekonstruksjon med ett perspektiv (DEKO)
**id:** `nih-ti300-7-2` · **number:** 7.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-ti300-7-1`

- **Kapitteltype:** sjangerkapittel (perfekt — driller kjernen).
- **Description:** Håndverket i å anvende ETT navngitt begrepsapparat presist på casen: velg og
  begrunn perspektiv, avklar begrepene, før analysen begrep for begrep, hold deg til ett perspektiv
  med dybde. Inkluderer en **«hvilket verktøy biter på denne casen?»-guide** på tvers av de fem.
- **Eksamensbelegg:** Genealogisk/kontekstuell dekonstruksjon krevd i alle 6 (score 6); ett bestemt
  perspektiv fra 2022/23. Prioritet: perfekt. Sjanger: DEKO.
- **Forkunnskaper/kryssbok:** kap. 7.1 + alle fem teoridelene (1–5). `collapsible` **DEKO-verktøykasse
  + «hvem eier hva»-kort:** case → egnet perspektiv → nøkkelbegrep (samlet oppslag, jf. README/DNA).
- **Oppskrift:** velg perspektiv og begrunn valget (mot de andre) → avklar de begrepene du faktisk
  bruker (med forankring) → før analysen begrep for begrep på casen → genealogi → ett perspektiv,
  dybde framfor bredde; tidsbudsjett (dekonstruksjonen ~40–50 %).
- **Typiske feil:** #4 (teori-referat løsrevet), #5 (begrepsblanding på tvers), #8 (mekanisk
  anvendelse uten vurdering).
- **Modellsvar (example × 2):** samme case dekonstruert med to ulike perspektiver (vippe-case,
  «omstridt — begge forsvarlige»), med margnotat om hva valget koster/gir.
- **Binær selvrettingsrubrikk (0/1):** ☐ ett perspektiv valgt OG begrunnet? ☐ begrepene forankret i
  forfatter? ☐ begrepene brukt PÅ casen (ikke referert generelt)? ☐ genealogi/kontekst vist? ☐ ingen
  begrepsblanding (#5)?
- **Kvote:** 14 quiz / 14 flashcards.

#### Kapittel 7.3: Sjanger 3 — rekonstruksjon og essay-metaferdighet (REKO + HELH)
**id:** `nih-ti300-7-3` · **number:** 7.3 · **estimatedMinutes:** 55 · **prerequisites:** `nih-ti300-7-2`

- **Kapitteltype:** sjangerkapittel (perfekt — driller avslutningen + helheten).
- **Description:** Håndverket i å utlede konkrete, aktør-spesifikke, teoriforankrede tiltak av
  analysen — og å holde balanse mellom beskrivelse, problematisering og tiltak i en stram, APA-
  forankret tekst (med sammendrag). Slår sammen REKO og essay-metaferdigheten HELH.
- **Eksamensbelegg:** Konkrete tiltak krevd i alle 6 (score 6); balanse eksplisitt fra 2022/23;
  aktørnivåer fra 2022/23. Prioritet: perfekt. Sjangre: REKO, HELH.
- **Forkunnskaper/kryssbok:** kap. 7.2 + Del 6 (tiltaks-vokabular/aktørnivåer). `collapsible`
  **REKO/HELH-verktøykasse:** tiltak-utledning, aktørnivå-matrise, ord-/tidsbudsjett, APA-minimum,
  sammendrag-mal.
- **Oppskrift (REKO):** utled tiltak direkte fra analysen → gjør dem konkrete og aktør-spesifikke →
  begrunn hvert tiltak teoretisk og etisk → vær ærlig om dilemmaer (løfter mot A). **(HELH):**
  ord-/tidsbudsjett for uken, balanse beskrivelse/problematisering/tiltak, stram sammenhengende tekst,
  APA, sammendrag.
- **Typiske feil:** #6 (tiltak løsrevet fra analysen / floskler), #7 (ubalanse), #10 (APA/ordgrense/
  sammendrag), #8 (ingen dilemma-erkjennelse).
- **Modellsvar (example × 2):** en rekonstruksjon utledet steg for steg av en dekonstruksjon, fordelt
  på aktørnivåer; et ord-/tidsbudsjett-eksempel for uken med balansesjekk.
- **Binær selvrettingsrubrikk (0/1):** ☐ tiltak utledet av analysen (ikke frittflytende)? ☐ konkrete
  og aktør-spesifikke? ☐ teoretisk + etisk begrunnet? ☐ balanse mellom de tre delene? ☐ APA +
  sammendrag + innenfor ordgrensen? ☐ minst ett dilemma erkjent?
- **Kvote:** 14 quiz / 14 flashcards.

#### Kapittel 7.4: Modellbesvarelser — A, C og B/E på samme oppgave
**id:** `nih-ti300-7-4` · **number:** 7.4 · **estimatedMinutes:** 65 · **prerequisites:** `nih-ti300-7-3`

- **Kapitteltype:** modellbesvarelseskapittel (perfekt — viser karakternivåene ærlig).
- **Description:** Én nyskrevet TI300-oppgave besvart på flere karakternivåer, med margnotater om
  nøyaktig hva som løfter (motargument, artikkelpensum, dilemma-erkjennelse, aktør-presist tiltak).
  Viser hva C faktisk ER, gapet opp til A, og en autentisk midtnivå-besvarelse.
- **Eksamensbelegg:** Hele karakterrubrikken A–E (2022/23) + pensumnivåene (kjerne/artikkel).
  Prioritet: perfekt (meta). Sjanger: full trippelbevegelse (AVGR+DEKO+REKO+HELH).
- **Forkunnskaper/kryssbok:** kap. 7.1–7.3 + de fem teoridelene. `collapsible` per besvarelse.
- **Innholdskontrakt (følger DNA-drofting modellbesvarelses-DNA):** nyskrevet oppgave → `collapsible`
  **A-besvarelse** (full tekst, margnotater «her: begrep + forankring», «her: motargument — løfter
  til A», «her: artikkelpensum»; «— naturlig pausepunkt —» mellom hovedseksjonene; **minst én A med
  SKARP konklusjon** — README konklusjonsvariasjon) → `collapsible` **kommentert C-besvarelse** (VÆRE
  en C: korrekt trippelbevegelse men flat — teori litt løsrevet, tynn forankring, generiske tiltak;
  ærlig merket, med gapet opp til A) → `collapsible` **autentisk B-/midtnivå-besvarelse** (ekte
  studentspråk, litt rotete men god, med de 2–3 grepene som skiller den fra A). **Meta-fasit forbudt**
  (README) — drøftelsen skrives faktisk UT, ikke «en A ville her ha drøftet …». → `tip`
  **Sensorblikket** (momentliste + vektlegging + hva som skiller nivåene: vurderingsevne/
  selvstendighet, pensumbredde inkl. artikkel, eksempelkvalitet, balanse).
- **Typiske feil (som modellene demonstrerer):** #1, #3, #4, #6, #8, #9 vist konkret i C-/B-nivået.
- **Kvote:** 12 quiz / 12 flashcards.

#### Kapittel 7.5: Case-galleri og kald bank
**id:** `nih-ti300-7-5` · **number:** 7.5 · **estimatedMinutes:** 55 · **prerequisites:** `nih-ti300-7-4`

- **Kapitteltype:** case-galleri + kald bank (perfekt — den mest direkte eksamenstreningen for et
  selvvalgt-case-fag).
- **Description:** Et rikt galleri av nyskrevne idrettscaser (§2C) merket med hvilke(t) perspektiv(er)
  som «biter», så studenten kan modellere sitt eget casevalg — pluss en merket **kald bank** (8–10
  oppgaver uten hint, momentliste-fasit) for toppleseren.
- **Eksamensbelegg:** Casevalg-teft (§7 nivå 9) + hele sjangerbredden. Prioritet: perfekt (meta).
  Sjanger: full trippelbevegelse.
- **Forkunnskaper/kryssbok:** hele boka. `collapsible` **«Hvem eier hva»-kort** (case → perspektiv →
  nøkkelbegrep → poeng), README/DNA samlet oppslag.
- **Innholdskontrakt:** case-galleri (topping/seleksjon; prestasjons-/vinnerkultur; frafall/
  inkludering; kropps-/vektpress/RED-S; autoritær coaching; foreldrepress/kravkultur; rigide
  utviklingstrapper; etisk grenseoverskridelse/varsling) — hver med 1–2 egnede perspektiver og en
  kort «slik biter det»-note; minst én **vippe-case** («omstridt — begge forsvarlige»). **Kald bank**
  (8–10 oppgaver, uvante vinklinger/kombinasjoner, UTEN hint, momentliste-fasit — tydelig merket).
- **Typiske feil (metanivå):** #10 (velge case som ikke er skreddersydd til perspektivet), #11 (velge
  et perspektiv man ikke behersker — velg det du kan bruke presist).
- **Kvote:** 12 quiz / 12 flashcards.

**Prøve-kvote Del 7:** 4 prøver (id `nih-ti300-7-prove`, chapterNumber `7.P`): (1) *AVGR-drill* —
avgrens + «hva problemet gjør» på fem korte case-idéer; (2) *DEKO-drill* — velg perspektiv + før
begrepene på en case; (3) *Full øvingseksamen* — komplett trippelbevegelse på tid (generalprøve, kan
deles over flere økter); (4) *Kald bank* (uten hint, momentliste-fasit).

---

## Kvotesammendrag (AUTORITATIV for alle senere faser)

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 2 | 22 | 24 | 0 (dekkes av modellbesvarelser/øvingsessay i Del 7) |
| 1 | 3 | 72 | 72 | 4 |
| 2 | 2 | 50 | 50 | 4 |
| 3 | 2 | 50 | 50 | 4 |
| 4 | 2 | 48 | 48 | 4 |
| 5 | 2 | 50 | 50 | 4 |
| 6 | 2 | 48 | 48 | 4 |
| 7 | 5 | 64 | 64 | 4 |
| **Sum** | **20** | **520 ✓ (≥500)** | **522 ✓ (≥500)** | **28** |

Summeringskontroll per del (quiz / flashcards):
- Del 0: 10+12 = **22** / 10+14 = **24**
- Del 1: 26+24+22 = **72** / 26+24+22 = **72**
- Del 2: 26+24 = **50** / 26+24 = **50**
- Del 3: 26+24 = **50** / 26+24 = **50**
- Del 4: 24+24 = **48** / 24+24 = **48**
- Del 5: 26+24 = **50** / 26+24 = **50**
- Del 6: 24+24 = **48** / 24+24 = **48**
- Del 7: 12+14+14+12+12 = **64** / 12+14+14+12+12 = **64**
- **Totalt: 22+72+50+50+48+50+48+64 = 520 quiz / 24+72+50+50+48+50+48+64 = 522 flashcards.**
  (begge ≥500-gulvet)

**Kvotebegrunnelse (jf. audit-lærdommen: ≥500 er GULV, ikke mål).** TI300 er et begrepstungt
drøftingsfag der eksamen er uten fasit og premierer presis begrepsbruk fra ETT navngitt perspektiv
og korrekt forfatterforankring. Det gjør faget genuint quiz- og flashcard-egnet UTEN kunstig
oppfylling: (1) **Quiz** — nabobegrep-distraktorer over og på tvers av de fem apparatene (makt/
kunnskap vs. symbolsk vold; disiplinærmakt vs. biomakt; kulturell vs. symbolsk kapital;
fremmedgjøring vs. resonans; front vs. backstage; rhizom vs. tre; molar vs. molekylær linje) +
**perspektivgjenkjenning** («hvilket verktøy biter på denne casen?») + **«hva mangler i dette
utkastet for å løfte fra C til B/A?»**-lesetrening, ~24–26/teorikapittel. (2) **Flashcards** —
begrep↔forfatter-kort (habitus↔Bourdieu, panoptisme↔Foucault, resonans↔Rosa, front/backstage↔
Goffman, rhizom↔Deleuze & Guattari), begrepspar-kort som skiller naboer, og «hvilket perspektiv/
hvilken tiltaksramme»-kort, med marginalt høyere tetthet i Del 0 (metaverktøyene). De 13 teori-/
ramme-kapitlene (Del 1–6) bærer tettheten, så summene ligger trygt over gulvet (520/522) uten
fyll; meta-, sjanger- og modellbesvarelseskapitlene (Del 0 + Del 7) har bevisst lavere kvote (de
trener håndverk og integrasjon, ikke faktapugg). Prøvene ligger på fire per temadel (Del 1–6 =
24 prøver) + fire eksamenstreningsprøver i Del 7 (**28 prøver totalt**); Del 0 dekkes av Del 7s
modellbesvarelser/øvingsessay.

**Flashcard-profil:** begrep↔forfatter- og begrepspar-kort til presis, forankret bruk —
Foucault (makt/kunnskap, produktiv makt, diskurs, genealogi, disiplinærmakt, panoptisme,
normalisering, dosilt legeme, selvteknologi, biomakt), Bourdieu (felt, fem kapitalformer, habitus,
doxa, illusio, symbolsk vold, reproduksjon), Rosa (tre akselerasjonstyper, fremmedgjøring,
tilgjengeliggjøring, resonans + tre akser), Goffman (inntrykksstyring, front/backstage, rolle/
rolledistanse, team, face-work, stigma, total institusjon), Deleuze & Guattari (rhizom/tre,
tilblivelse, assemblage, deterritorialisering, glatt/stripet rom, fluktlinje, begjærsproduksjon),
metaverktøy (trippelbevegelsen, «hva problemet gjør», genealogi, dekonstruksjon/rekonstruksjon,
vurderingsevne/selvstendighet, kjernepensum/artikkelpensum, aktørnivåer, resonans/bærekraftige
miljøer/relasjonskompetanse), og «feil-vaksine»-kort (synsing uten teori = garantert svak; teori-
referat løsrevet = C; kritikk uten rekonstruksjon = halvferdig; begrepsblanding = C). **Quiz-
profil:** MC med nabobegrep-distraktorer (også på tvers av teoretikere) + «hvilket perspektiv biter
på denne casen?» + «hva mangler for å løfte fra C til B/A?»-lesetrening; distraktorer straffer aldri
grundig lesing (README) — nær-sanne distraktorer (særlig kryss-teoretiske) får forklart fasit-
kommentar.

---

## 4. Prøver

Prøvene ligger som egne prøve-kapitler per temadel (chapterNumber `N.P`), fire per temadel (Del 1–6
= 24 prøver) + fire eksamenstreningsprøver (Del 7) = **28 prøver**. Hver prøve deklareres «kan trygt
deles — én prøve per økt», med tidsanslag. Flervalg i statiske prøve-collapsibles har **stokkede
fasit-bokstaver** (README — aldri «alle a»); riktig/galt- og «finn fellen»-lister varierer fasiten.
Fasitene er momentlister/disposisjoner + **binær selvrettingsrubrikk** for drøfting (jf. DNA-
drofting) — ikke fritekst-modellbesvarelse (de bor i kap. 7.4).

**Prøve-kvote Del 1:** 4 prøver (id `nih-ti300-1-prove`): (1) *Makt/kunnskap + diskurs* — DEKO-
begrepsdrill + «hva produserer denne praksisen?»; (2) *Disiplin/normalisering* — DEKO panoptikon/
normalisering på case; (3) *Foucault-dekonstruksjon* — full DEKO på gitt case; (4) *Foucault-essay*
— full trippelbevegelse på eksamensnivå.

**Prøve-kvote Del 2:** 4 prøver (id `nih-ti300-2-prove`): (1) *Felt/kapital/habitus* — DEKO-
begrepsdrill; (2) *Doxa/illusio* — DEKO på case; (3) *Symbolsk vold/reproduksjon* — DEKO frafall/
seleksjon; (4) *Bourdieu-essay* — full trippelbevegelse.

**Prøve-kvote Del 3:** 4 prøver (id `nih-ti300-3-prove`): (1) *Akselerasjon* — DEKO tre former +
tidlig spesialisering; (2) *Fremmedgjøring/tilgjengeliggjøring* — DEKO på case; (3) *Resonans* —
REKO-drill; (4) *Rosa-essay* — full trippelbevegelse.

**Prøve-kvote Del 4:** 4 prøver (id `nih-ti300-4-prove`): (1) *Dramaturgi* — DEKO inntrykksstyring/
front-backstage; (2) *Roller/face-work* — DEKO på case; (3) *Stigma/total institusjon* — DEKO
frafall/kroppspress; (4) *Goffman-essay* — full trippelbevegelse.

**Prøve-kvote Del 5:** 4 prøver (id `nih-ti300-5-prove`): (1) *Rhizom/tre* — DEKO utviklingstrapp;
(2) *Tilblivelse/deterritorialisering* — DEKO «talent»-identitet; (3) *Fluktlinjer/glatt rom* —
REKO-drill; (4) *D&G-essay* — full trippelbevegelse (inkl. #11-sjekk mot overfladisk bruk).

**Prøve-kvote Del 6:** 4 prøver (id `nih-ti300-6-prove`): (1) *Bærekraftige miljøer/barns premisser*
— REKO-vokabular; (2) *Inkludering/mangfold* — AVGR+REKO; (3) *Relasjonskompetanse/etikk* — REKO
aktørnivåer; (4) *Rekonstruksjons-essay* — utled og fordel tiltak av en gitt dekonstruksjon.

**Prøve-kvote Del 7:** 4 prøver (id `nih-ti300-7-prove`): (1) *AVGR-drill* — avgrens + «hva problemet
gjør» på fem case-idéer; (2) *DEKO-drill* — velg perspektiv + før begrepene på en case; (3) *Full
øvingseksamen* — komplett trippelbevegelse på tid (generalprøve, deles over flere økter); (4) *Kald
bank* (uten hint, momentliste-fasit).

**Sum prøver: 28** (4 per temadel Del 1–6 = 24, + 4 i Del 7).

---

## 5. Kildeforbehold og verifiseringsliste (fase 6)

- **Emnestatus AKTIV** verifisert mot NIHs emnesider og programplaner 2026-07-11 (TI300 «Sports
  Coaching 2: Trenerens relasjonskompetanse», 10 stp, i programplan Bachelor i trenerrollen og
  idrettspsykologi 2026–2029, tilbudt høst 3. studieår). Status kan endres — behold `(verifiser)`
  ved bygging hvis lang tid har gått.
- **Ordgrensen** spriker mellom arkivet (maks 2500 ord, 2020–2023) og STATUS (5000) — trolig en
  senere emnejustering. **Skal verifiseres mot gjeldende emnebeskrivelse ved bygging** `(verifiser)`.
  Uansett grense er kravet om stram, pensumforankret tekst uendret.
- **Pensumlista er ikke i arkivet.** Teoretiker–begrep-koblingene (Foucault↔panoptisme, Bourdieu↔
  habitus, Rosa↔resonans, Goffman↔stigma, Deleuze & Guattari↔rhizom) er godt etablert fagstoff og
  brukes fritt, MEN konkrete **verk-/utgave-/sidetall** og hvilke bidrag som er kjerne- vs.
  artikkelpensum er `(verifiser)` mot gjeldende NIH-pensumliste. Skillet kjernepensum/artikkelpensum
  må speiles i modellbesvarelsene (B/A trekker inn artikkelpensum).
- **Rekonstruksjonslogikken** tilskrevet en enkelt teoretiker (foucauldiansk mot-praksis, deleuziansk
  eksperiment) er delvis pedagogisk anvendelse — merk `(verifiser)` der den fremstilles som direkte
  teoretikerposisjon.
- **Idrettspedagogisk/etisk ramme (Del 6):** konkrete forfatter–verk for bærekraftige miljøer,
  relasjonskompetanse og etisk trenerpraksis (NIH kjerne-/artikkelpensum) er `(verifiser)`.
- **Sensorlogikken er kriteriebasert, ikke momentbasert** — det finnes ingen fasit i sjangeren.
  Modellbesvarelsene er NYSKREVNE illustrasjoner av karakternivåene, aldri «ekte» besvarelser.
- **nih-ti100-krysslenker:** legg til markdown-lenke til motivasjonsklima-/stress-/mental helse-/
  kommunikasjons-kapitlene KUN hvis nih-ti100-boka finnes ved bygging; ellers behold prosaomtale
  (README: lenk kun til kapitler som finnes).
- **Alle case, oppgaver, dekonstruksjoner og tiltakslister er NYSKREVNE** (§6/opphavsrett);
  sensorveiledningenes og oppgavenes tekst gjengis ALDRI ordrett.

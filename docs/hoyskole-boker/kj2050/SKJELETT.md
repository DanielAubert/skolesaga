# Bokskjelett: KJ2050 Analytisk kjemi, grunnkurs (NTNU) — eksamensrettet lærebok

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
> `EKSAMENSANALYSE.md` (NTNU-arkivet 2001–2012: 17 sett, hvorav 2006–2012 lest grundig
> med det maskinskrevne løsningsforslaget H2006 som hovedkilde til metodefasit; eldre
> sett OCR-/temaregistrert). Alle oppgaver, DATA-bokser, case og formuleringer i boka
> skal være NYSKREVNE (se §6). Reaksjonsligninger, formler og standard fagbegreper er
> ikke opphavsrettslig beskyttet og brukes fritt.
>
> **Kjemisk presisjon er kritisk.** Reaksjonsligninger, konstanter og prosedyredetaljer
> forfatteren er usikker på merkes `(verifiser)` for fagfellesjekk i fase 6. Alle
> *tallverdier* (K, Ksp, E°, formelvekter, Kw, α-verdier) presenteres som noe som **gis
> i oppgavens DATA-boks** — aldri som puggetall (se §1). Metodene, formlene, prosedyre-
> trinnene og reaksjonsligningene må derimot kunne aktivt uten oppslagsverk.
>
> **Ærlighetskrav (ufravikelig — settes i Del 0):** arkivet stopper i 2012 (~13 års
> gap), OG dagens vurderingsform har fått en prosjektkomponent (60 % skriftlig
> skoleeksamen + 40 % prosjektoppgave i gruppe) som ikke fantes i arkivperioden.
> Kalibreringen i denne boka bygger på **2001–2012-malen** med eksaminatorkontinuitet
> (Mikkelsen fra 2006). **Byggefasen MÅ skaffe nyere sett (2013→) og verifisere dagens
> emneplan/vurderingsform mot NTNUs gjeldende emneside** før boka meldes ferdig; alle
> frekvenser er merket «per 2001–2012-arkivet».

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `kj2050` |
| Tittel | **KJ2050 Analytisk kjemi, grunnkurs — eksamensrettet (NTNU)** |
| Level | `'Høyskole'` |
| Institusjon (navigasjon) | NTNU. Visningsnavn i `institusjoner.ts`: «KJ2050 Analytisk kjemi, grunnkurs». |
| Arketype | **Regnefag/prosedyre-hybrid** (primær: `DNA-regnefag.md`; låner faktakontrakt + prosedyre-momentlister fra fakta/pugg-mønsteret i `nokut-afb/SKJELETT.md`). Se §2 «Arketypetilpasning». |
| Antall kapitler | **36** (Del 0: 1 · temadeler 1–9: 29 · eksamenstrening Del 10: 6) |
| Estimert totaltid | **~2 075 min ≈ 34,6 timer** (per kapittel under) |
| Quiz totalt | **532** (krav ≥500) |
| Flashcards totalt | **632** (metode-/reagensrikt fag → høy tetthet; krav ≥500) |

**Pitch (ett avsnitt):** KJ2050-eksamen er et av de mest forutsigbare settene i hele
høyskolearkivet. 4 timers skriftlig skoleeksamen, **kun lommekalkulator — ingen
formelsamling og intet tabellverk**: alle konstanter (K, Ksp, E°, formelvekter, Kw)
gis i en **DATA-boks per oppgave**, mens metodene, prosedyretrinnene og de balanserte
reaksjonsligningene må sitte utenat. Settet følger en fast mal: 4–6 hovedoppgaver =
overveiende **deskriptive metodeoppgaver** («beskriv fremgangsmåte for …») + **1–2
EDTA-titrerfeil-beregninger** (settets eneste faste regnesjanger, resirkulert nesten
identisk med bytte av metallion Ca→Zn→Sr→Pb→Ba) + en fast **avkrysningsoppgave
(riktig/galt, ~10 p)** fra 2007. Ryggraden er de tre klassiske metodefamiliene —
kompleksometri/EDTA (94 %), gravimetri/felling (76 %) og iod-/redokstitrering (76 %) —
pluss den instrumentelle makkerpar-oppgaven (voltammetri + AAS + ICP-MS + speciering,
76 %). Boka er bygd baklengs fra det sensor faktisk premierer: **korrekte balanserte
reaksjonsligninger** («reaksjonsligninger er valuta»), **konkrete prosedyretrinn**
(buffer/indikator/pH/koking/gløding), **interferenser og feilkilder** i hver
metodeoppgave, den **betingede dannelseskonstanten** $K' = K_{MY}\cdot\alpha_{X^{4-}}$ i
titrerfeilberegningen, og **presise definisjoner** (voltammetri måler IKKE ved null
strøm — det gjør potensiometri).

**Kritisk rammebetingelse (gjelder HELE boka) — DATA-boks-regelen:** Fordi ingen
formelsamling eller tabellverk deles ut, skiller boka konsekvent mellom **«gis i
DATA-boksen»** (alle tallverdier: likevektskonstanter, løselighetsprodukt,
standardpotensialer, formelvekter, $K_w$, evt. ferdige $\alpha_{X^{4-}}$-verdier) og
**«må kunne aktivt»** (metodevalg, prosedyretrinn, buffer/indikatorvalg, balansering av
reaksjonsligninger, oppsett av titrerfeiluttrykk, definisjoner). Hvert delkapittels
**Metode- og reagensliste** (README-kravets «symbol- og formelliste», omtolket for et
prosedyrefag — se §2) markerer hva som forutsettes gitt vs. hva som må sitte. Boka skal
ALDRI fremstille en $K$- eller $E°$-verdi som noe studenten må pugge.

**Kritisk notasjonsregel (gjelder HELE boka — emnets notasjon):** EDTA skrives $\text{H}_4\text{Y}$
(fri syre) med de deprotonerte formene $\text{H}_3\text{Y}^-,\ \text{H}_2\text{Y}^{2-},\ \text{HY}^{3-},\ \text{Y}^{4-}$;
den fullt deprotonerte, kompleksdannende formen er $\text{Y}^{4-}$ (analysen bruker
stedvis $\text{X}^{4-}$ — boka bruker **$\text{Y}^{4-}$ konsekvent**, men nevner
$\text{X}$-varianten én gang så studenten kjenner den igjen). Metall–EDTA-komplekset:
$\text{MY}^{2-}$. Dannelseskonstant $K_{MY}$; **betinget (kondisjonell)
dannelseskonstant** $K' = K_{MY}\cdot\alpha_{Y^{4-}}$, der $\alpha_{Y^{4-}} = [\text{Y}^{4-}]/C_{\text{EDTA,fri}}$
er pH-avhengig. Titrerfeil $T$ (relativ, oppgis i **prosent**). Iodsystem: $\text{I}_3^-$
(triiodid, boka bruker $\text{I}_3^-$ konsekvent, ikke $\text{I}_2$, der triiodid er
den reelle formen). Tiosulfat $\text{S}_2\text{O}_3^{2-}$, tetrationat $\text{S}_4\text{O}_6^{2-}$.
Beer–Lambert: $A = \varepsilon b c$. Alle tallsvar med **enhet** og **fornuftig antall
signifikante siffer** (sensor-krav — boka skal modellere dette i hvert eksempel).

**Bevisst nedprioritert (begrunnes i Del 0):** **coulometri** (nevnt i emnebeskrivelsen
og enkelte avkrysningspåstander, men aldri egen regne-/metodeoppgave i arkivet →
omtales kun som avkrysningsstoff i Del 6/10, aldri eget kapittel); **massespektrometri
utover ICP-MS-prinsippet** (ingen ren MS-oppgave); **avansert instrumentell teori**
(kildene holder seg til prinsipp + bruksområde + deteksjonsgrense). Disse skal IKKE
bygges tungt på.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regnefag-regelen): analytisk grunnlag og
likevektsapparat før metodene som bruker det; den betingede konstanten (Del 1/2) før
titrerfeil-drillen (Del 3). Frekvensen styrer *omfanget*, ikke rekkefølgen: nivå-1-temaene
får flest kapitler og høyest kvote.

| Del | Tittel | Kap. | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart | 1 | perfekt (meta) | Formen, DATA-boks-regelen, temafrekvensene, sensorkravene og ærlighetsforbeholdet må etableres FØR fagstoffet. Studentens prioriteringsverktøy. |
| 1 | Analytisk grunnlag: standarder, likevekt og betingede konstanter | 3 | grunnlag/kunne | Begrepsfundament (ekvivalens/endepunkt, primær/sekundærstandard, signifikante siffer) + likevektsapparatet ($K$, $K_w$, $K_a$, $K_{sp}$) + aktivitet/ionestyrke og **betinget konstant** — forutsetning for titrerfeil (Del 3) og gravimetri (Del 4). |
| 2 | Syre-base og kompleksometri (EDTA) | 5 | perfekt (EDTA) / kunne (syre-base) | Kompleksometri er **ryggraden (94 %)** → full prosedyre-, buffer-, indikator- og selektivitetsdrill. Syre-base (53 %, med CO₂-/karbonatfeil) hører faglig hjemme rett foran. |
| 3 | EDTA-titrerfeil-beregningen (drill) | 2 | perfekt | Settets **signatur-regnesjanger (71 %)**, resirkuleres nesten identisk med bytte av metallion. Eget drillkapittel + interferensvariant. Bærer settets tyngste faste regnepott. |
| 4 | Gravimetri og felling | 4 | perfekt | Gravimetri **76 %**, elektrogravimetri 53 %. Medfelling (typer + mottiltak) og elektrogravimetrisk Cu er faste. Løselighetsprodukt-beregning (12 %, nivå 3) innbakt. |
| 5 | Redoks og titrering med iod og felling | 5 | perfekt (iod) / kunne (fellingstitrering) / kjenne (ikke-iod) | Iod-titrering **76 %** (iodometri vs. iodimetri, tiosulfat, Cu). Fellingstitrering Volhard/Mohr (41 %) og redokstitrering utenom iod (24 %) hører faglig hjemme her. |
| 6 | Elektroanalyse og speciering | 3 | perfekt (voltammetri/speciering) / kunne (potensiometri) | Voltammetri + speciering **76 %** (fast makkerpar fra 2005). Potensiometri/ISE 53 % (tung i avkrysningsoppgaven). Huser den kritiske potensiometri-vs.-voltammetri-presiseringen. |
| 7 | Spektroskopi: AAS, ICP-MS og spektrofotometri | 3 | perfekt (AAS) / kunne (spektrofotometri) | AAS **71 %**, ICP-MS 59 %, spektrofotometrisk Fe/Beer–Lambert 53 %. Deteksjonsgrense-sammenligningen (sjanger G) integreres her. |
| 8 | Separasjon og kromatografi | 2 | kunne | Kromatografi 41 % («kort»): platetall $N$, $R_s \propto \sqrt{N}$, ekstern standard, ionebytte. |
| 9 | Statistikk, feilanalyse og laboratoriesikkerhet | 2 | kjenne (voksende) | Ny i 2012 (6 %), men **klart voksende** (NTNUs HSE-dreining + prosjektkomponenten). Feilstatistikk (t-/Q-test) og HMS dekkes kompakt men reelt. |
| 10 | Eksamenstrening | 6 | perfekt (meta) | Metodesammenligning (jern med tre teknikker), **påstandsbanken** (riktig/galt-fasit), reaksjonslignings-drill, + **3 komplette øvingseksamener** med DATA-boks og riktig/galt-oppgave. |

Rasjonale: nivå-1-temaene (kompleksometri/EDTA + titrerfeil, gravimetri, iod-/redoks,
instrumentell+speciering) får flest kapitler, tyngste kvote og full metode-/
reaksjonslignings-drill; nivå 2 (syre-base, spektrofotometri, potensiometri,
fellingstitrering, kromatografi) får solide standardprosedyrer; nivå 3 (statistikk, HMS,
løselighetsprodukt, ikke-iod-redoks) dekkes kompakt men fullstendig. **Nesten hele
bredden testes hvert sett** — prioriteringen styrer dybde og drillmengde, ikke *om* et
tema er med.

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart |
| 1 | Analytisk grunnlag: standarder, likevekt og betingede konstanter |
| 2 | Syre-base og kompleksometri (EDTA) |
| 3 | EDTA-titrerfeil-beregningen |
| 4 | Gravimetri og felling |
| 5 | Redoks og titrering med iod og felling |
| 6 | Elektroanalyse og speciering |
| 7 | Spektroskopi: AAS, ICP-MS og spektrofotometri |
| 8 | Separasjon og kromatografi |
| 9 | Statistikk, feilanalyse og laboratoriesikkerhet |
| 10 | Eksamenstrening |

### Sjangerkoder (fra analysen §3 — brukes i «Eksamensbelegg» under)

**A** EDTA-titrerfeil-beregningen (regnesjanger, settets signatur) · **B** deskriptiv
kompleksometri (Ca/Mg-hardhet, buffer/indikator, selektivitet/maskering) · **C**
deskriptiv iod-titrering (iodometri vs. iodimetri, tiosulfat, Cu) · **D** deskriptiv
gravimetri/medfelling · **E** deskriptiv elektrogravimetri av kobber · **F** jern med
tre teknikker (spektrofotometri/gravimetri/redokstitrering — metodesammenligning) ·
**G** instrumentell oversikt + speciering (AAS/ICP-MS/voltammetri, deteksjonsgrense-
tabell, elektrolabil/biotilgjengelig fraksjon) · **H** syre-base-titrering med
feilberegning (indikatorvalg, CO₂-/karbonatfeil) · **I** fellingstitrering (Volhard/Mohr)
· **J** kromatografi (platetall, $R_s$, ekstern standard) · **K** avkrysningsoppgaven
(riktig/galt, ~10 p) · **L** statistikk/feilanalyse + HMS/risikovurdering.

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

**F1** bruke termodynamisk $K_{MY}$ uten pH-korreksjon (man må gå via den betingede
konstanten $K' = K_{MY}\cdot\alpha_{Y^{4-}}$) · **F2** glemme å kommentere/tolke
titrerfeilen (god/dårlig, over-/undertitrert) · **F3** forveksle iodometri (indirekte)
og iodimetri (direkte), skrive feil/ubalanserte redoksligninger for
$\text{Cu}^{2+}/\text{I}^-/\text{S}_2\text{O}_3^{2-}$ · **F4** behandle tiosulfat eller
KSCN som primærstandard (begge er sekundære; primære er KIO₃/K₂Cr₂O₇/Na₂CO₃) · **F5**
utelate interferenser/feilkilder i metodeoppgaver (fast poenggivende del) · **F6**
beskrive metode uten reaksjonsligninger og uten konkrete prosedyretrinn (buffer,
indikator, koking, filtrering, gløding) · **F7** blande potensiometri (måler ved ~null
strøm, likevekt) og voltammetri (strøm som funksjon av påtrykt potensial) — eksplisitt
korrigert i V2007 · **F8** feil om medfellingstyper (okklusjon / overflateadsorpsjon /
mekanisk innslutning / blandkrystaller) og manglende mottiltak · **F9** glemme å fjerne
interfererende oksidasjonsmidler ($\text{NO}_3^-$ før iodometrisk Cu; Sn²⁺-overskudd med
$\text{HgCl}_2$ før dikromat-titrering av Fe) · **F10** gal pH/buffer i EDTA-titrering
(metallet feller som hydroksid, eller $\text{Y}^{4-}$-formen dominerer ikke nok) ·
**F11** manglende/gale enheter og for få signifikante siffer · **F12** upresise
definisjoner (speciering / elektrolabil / biotilgjengelig fraksjon; ekvivalenspunkt vs.
endepunkt; primær- vs. sekundærstandard).

### Sensorkrav (fra analysen §4 — etableres i Del 0, refereres i hvert kapittel)

1. **Reaksjonsligninger er valuta.** Deskriptive metodeoppgaver premieres i stor grad
   på korrekte, **balanserte** reaksjonsligninger (bevar ladning og masse; halvreaksjoner
   i redoks). En metodebeskrivelse uten de sentrale ligningene taper poeng.
2. **Prosedyre = konkrete, ordnede trinn** (reagenser, rekkefølge, buffer/pH, indikator,
   når man koker/filtrerer/gløder, hvordan endepunkt detekteres). «Hva det går ut på»
   uten prosedyre honoreres tynt.
3. **Interferenser og feilkilder skal alltid med** — fast poenggivende del.
4. **Beregninger: vis mellomregning, riktig enhet, fornuftig antall signifikante siffer.**
   Titrerfeil oppgis i **prosent** og **kommenteres** (god/dårlig, over-/undertitrert).
5. **Betingede likevekter håndteres riktig** — bruk $K' = K_{MY}\cdot\alpha_{Y^{4-}}$,
   ikke rå $K_{MY}$, når pH $<$ ~12.
6. **Sammenlign metoder eksplisitt** (følsomhet, presisjon, selektivitet, deteksjonsgrense,
   felt-/automatiseringsegnethet) — en reell avveining, ikke to isolerte beskrivelser.
7. **Presise definisjoner belønnes** (speciering, elektrolabil vs. biotilgjengelig
   fraksjon, ekvivalens- vs. endepunkt, primær- vs. sekundærstandard, iodometri vs.
   iodimetri). V2007 slår ned på upresise påstander (voltammetri måler IKKE ved null
   strøm).
8. **Deteksjonsgrenser skal kunne tallfestes omtrentlig** (potensiometri/ISE ~$10^{-6}$ M;
   AAS ppb; ICP-MS ppt–ppb; stripping-voltammetri ned til ng/L) — etterspørres direkte.

### Arketypetilpasning (dokumenterte hybridvalg og avvik)

1. **Regnefag/prosedyre-hybrid, ikke rent regnefag.** DNA-regnefag forutsetter at
   eksamen består av regne-/utledningsoppgaver med entydige svar. KJ2050 er **overveiende
   deskriptivt/prosedyrebasert**: 4–6 hovedoppgaver der de fleste er «beskriv
   fremgangsmåte for …»-metodeoppgaver, med **én** fast regnesjanger (EDTA-titrerfeil,
   sjanger A) pluss noen mindre regnegenrer (Beer–Lambert, platetall, løselighetsprodukt,
   t-/Q-test). Boka bruker derfor **to kapittel-DNA-varianter** (under): et
   **metodekapittel-DNA** (faktakontrakt + reaksjonslignings-kontrakt + prosedyre-
   momentliste + interferenser + metodesammenligning — lånt fra fakta/pugg-mønsteret i
   `nokut-afb`) for flertallet av kapitlene, og et **regnekapittel/drill-DNA** (DNA-regnefags
   example/exercise med gjennomregnet case, `solution` + `hints`) for titrerfeil-drillen
   og minicalc-innslagene. **Fra DNA-regnefag beholdes:** makrostrukturen (Del 0
   eksamenskart → temadeler etter avhengighet → eksamenstrening), øvingseksamenene,
   drillkapittel for signatur-regnesjangeren, og prioritering etter frekvens.
2. **«Symbol- og formelliste» → «Metode- og reagensliste».** README-kravet om en
   `collapsible` rett etter Forkunnskaper omtolkes for et prosedyrefag: hvert delkapittel
   får en `collapsible` **«Metode- og reagensliste»** som samler de **balanserte
   reaksjonsligningene**, **reagensene/standardene**, **indikatorene** og **bufferne/pH-
   vinduene** kapitlet krever utenat — pluss de få reelle formlene ($K'$, $A=\varepsilon bc$,
   $N = 16(t_R/w)^2$, titrerfeiluttrykket) med eksplisitt markering av at
   **tallverdiene gis i DATA-boksen** (F11-vaksine). For rene regnekapitler (Del 3,
   løselighetsprodukt, statistikk) fungerer lista som en klassisk symbol-/formelliste.
3. **Flashcards tungt vektet og metode-/reagensrike.** Fordi eksamen er uten
   oppslagsverk og premierer reaksjonsligninger og prosedyredetaljer, er faget svært
   flashcard-egnet: reagens↔rolle (KSCN → skarpere endepunkt ved iodometrisk Cu),
   reaksjonsligning-kort (fram-/baksidespill: «iodat + iodid i surt» → balansert
   ligning), indikator↔metode↔omslag (EBT → EDTA-hardhet → rødt→blått), buffer↔pH↔metode,
   primær-/sekundærstandard-status, deteksjonsgrense-tall, og
   definisjonskort. Derfor er flashcard-summen bevisst **høy (632)** — se
   kvotesammendraget. Quiz driller nabobegrep-distraksjoner (iodometri/iodimetri,
   potensiometri/voltammetri, ekvivalens/endepunkt, over-/undertitrert, okklusjon/
   adsorpsjon) og riktig/galt-påstandene (sjanger K).
4. **Drillkapittel som egen del (avvik fra DNA-regnefag).** DNA-en legger drillkapitlet
   inne i temadelen. Her får titrerfeil-drillen (sjanger A) en **egen Del 3** rett etter
   kompleksometri, fordi den er settets eneste faste regnesjanger, resirkuleres nesten
   identisk med bytte av metallion, og bærer den tyngste forutsigbare regnepotten — den
   fortjener konsentrert, isolert drill (Ca→Zn→Sr→Pb→Ba som prøvevarianter).
5. **Eksamenstreningen har en påstandsbank (avvik/tillegg).** Avkrysningsoppgaven
   (sjanger K, riktig/galt, ~10 p) resirkulerer de samme utsagnene 2007–2012 (ISE,
   KSCN, pH-glasselektrode, DGT, platetall, potensiometri). Del 10 får derfor et eget
   **påstandsbank-kapittel** med puggfasit for gjengangerne — et tillegg utover DNA-ens
   sjangerkapittel-begrep, begrunnet i at dette er en fast, høyt vektet og sterkt
   resirkulert settdel.
6. **Ingen oppdiktede tall eller ligninger.** Usikre konstanter, prosedyredetaljer og
   reaksjonsligninger merkes `(verifiser)`. Tallverdier presenteres alltid som «gitt i
   DATA-boksen», så boka trenger sjelden å forplikte seg til en spesifikk $K$-verdi;
   når en verdi likevel oppgis illustrativt, merkes den `(verifiser)`.

### Kapittel-DNA A — metodekapittel (deskriptivt/prosedyre — flertallet av kapitlene)

Obligatorisk blokk-rekkefølge (plattformens blokktyper):

1. `tip` **Eksamensvinkel** — frekvens/vekt, hvilke sjangre (A–L) temaet inngår i, og hva
   sensor ser etter. Fylles fra skjelettets Eksamensbelegg — forfatteren finner IKKE på
   frekvenstall.
2. `text` **Forkunnskaper** — kapitler i boka det bygger på + kryssbok-lenker (README-
   leserkrav), etterfulgt av `collapsible` **Metode- og reagensliste** (balanserte
   reaksjonsligninger, reagenser/standarder, indikatorer, buffere/pH — med markering av
   hva som gis i DATA-boksen).
3. `text` **Oversikt/motivasjon** — kort (maks 2–3 avsnitt): hva metoden bestemmer, når
   den velges. Ikke et dannelsesfag.
4. `definition` **Faktakontrakt** — kjernebegreper, reagensroller, standarder, definisjoner
   i emnets terminologi. **Toppnivå med `title` — dette er flashcard-kilden.**
5. `theorem`/`text` **Reaksjonsligninger og likevekter** — de sentrale balanserte
   ligningene (redoks: halvreaksjoner, ladnings-/massebalanse), utledet/vist der de
   kreves aktivt.
6. `text` **Prosedyre-momentliste** — reell laboratorieprosedyre som nummererte, ordnede
   trinn (reagens → rekkefølge → buffer/pH → indikator → endepunktdeteksjon →
   evt. koking/filtrering/gløding). Ett trinn = ett sensor-moment.
7. `text` **Interferenser og feilkilder** — hvilke ioner/forhold forstyrrer, og hvordan
   de maskeres/fjernes/unngås (fast poenggivende del — F5).
8. `example` × 1–3 **Modellsvar** — minst ett «beskriv fremgangsmåte»-svar skrevet som
   full-pott momentliste med reaksjonsligningene på plass; der metoden sammenlignes med
   en annen, et eksplisitt avveiningssvar (sensorkrav 6). Første enkelt, siste på
   eksamensnivå.
9. `warning` **Typiske feil** — feilkodene (F1–F12) som gjelder temaet.
10. `exercise` × 6–10 — stigende, blandet: 2–3 deskriptive prosedyre-/reaksjonslignings-
    oppgaver (skriv prosedyren/ligningene selv, med momentliste-`solution`), 1–2 «riktig/
    galt»-/begreps-oppgaver (sjanger K-trening), og der relevant 1–2 minicalc med
    `solution` + `hints`. Hver oppgave merket med sjangerkode og hva sensor premierer.
11. `collapsible` **Repetisjon** — 4–6 korte kontrollpunkter (reaksjonsligninger,
    reagensroller, prosedyretrinn) fra kapitlet og forutgående kapitler det bygger på.

### Kapittel-DNA B — regnekapittel/drill (titrerfeil + minicalc-genrene)

1. `tip` **Eksamensvinkel** — hvilke varianter av regnesjangeren som har forekommet
   (metallion, pH, konsentrasjon).
2. `text` **Forkunnskaper** + `collapsible` **Symbol- og formelliste** (her klassisk:
   alle symboler i $K' = K_{MY}\cdot\alpha_{Y^{4-}}$, $[\text{M}^{2+}]_\text{ekv} = \sqrt{[\text{MY}^{2-}]/K'}$,
   $T = ([\text{Y}^{4-}]_\text{fri} - [\text{M}^{2+}]_\text{gjenv})/C_M$ — med markering av at
   tallverdiene gis i DATA-boksen).
3. `text` **Løsningsoppskrift** — algoritmisk fremgangsmåte for sjangeren (nummererte trinn).
4. `example` **Gjennomregnet eksamenscase** med DATA-boks og sensor-margnotater om hva
   som gir uttelling ved hvert steg (betinget konstant, enhet, siffer, kommentar).
5. `warning` **Typiske feil** (særlig F1, F2, F11).
6. `exercise` × 8–12 varianter på eksamensnivå (ulike metallioner/pH/konsentrasjon), alle
   med DATA-boks, `solution` + `hints`, og krav om prosentsvar + tolkning.

Eksamenstrenings-, påstandsbank- og øvingseksamenskapitlene (Del 10) har egne oppsett —
se §3 og §4.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = frekvens/vekt + sjangerkoder (A–L) +
> prioritetsklasse (perfekt/kunne/kjenne/grunnlag/meta), alt «per 2001–2012-arkivet».
> **Faktakontrakt** = begreper/reagensroller/definisjoner som SKAL med (flashcard-kilden).
> **Reaksjonsligninger** = de balanserte ligningene kapitlet krever aktivt. **Prosedyre-
> momentliste** = de ordnede trinnene modellsvaret skal levere. **Interferenser** =
> forstyrrelser + mottiltak. **Regnekontrakt** (regnekapitler) = formler/oppskrift.
> **Kvote** = quiz/flashcards. Kryssbok-lenkene er verifisert mot eksisterende kjemi1-/
> kjemi2-kapitler (7. juli 2026).

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet — slik testes KJ2050
**id:** `kj2050-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Eksamensformen, DATA-boks-regelen, temafrekvensene, de åtte
  sensorkravene og ærlighetsforbeholdet om arkivgapet — verktøyet som styrer hele boka.
- **Eksamensbelegg:** Metakapittel (hele arkivet 2001–2012). Skal formidle: (a)
  **formen** — 4 timers skriftlig skoleeksamen, **kun lommekalkulator**, ingen
  formelsamling/tabellverk; fast mal fra 2006: 4–6 hovedoppgaver = overveiende deskriptive
  metodeoppgaver + 1–2 EDTA-titrerfeil-beregninger + en avkrysningsoppgave (riktig/galt,
  ~10 p, fast fra 2007); poeng oppgis per deloppgave, sett summerer til ~100 p;
  ENTEN/ELLER-valg er vanlig. (b) **DATA-boks-regelen** — alle tallverdier (K, Ksp, E°,
  formelvekter, $K_w$, evt. $\alpha_{Y^{4-}}$) gis per oppgave; metoder, prosedyrer,
  balanserte reaksjonsligninger og titrerfeiluttrykk må sitte utenat. (c) **temafrekvens-
  tabellen** (gjenganger-score av 17 sett): kompleksometri/EDTA 94 %, gravimetri 76 %,
  iod-titrering 76 %, voltammetri+speciering 76 %, EDTA-titrerfeil 71 %, AAS 71 %, ICP-MS
  59 %, elektrogravimetri 53 %, spektrofotometri 53 %, potensiometri/ISE 53 %, syre-base
  53 %, fellingstitrering 41 %, kromatografi 41 %, avkrysningsoppgaven 47 % (fast 2007→),
  redokstitrering ikke-iod 24 %, prøvetaking/speciering-praksis 24 %, løselighetsprodukt
  12 %, statistikk 6 % (ny 2012), HMS 6 % (ny 2012). (d) **de åtte sensorkravene** fra §2.
  (e) **gjengangerne** som drilles eksplisitt: EDTA-titrerfeil (metall varierer, samme
  metode), iodometrisk Cu + tiosulfat-innstilling, gravimetrisk/elektrogravimetrisk Cu/Fe,
  instrumentell oversikt + speciering med deteksjonsgrenser, og påstandsbanken. (f)
  **ærlighetsforbeholdet** — arkivet stopper 2012 (~13 års gap); dagens ordning = 60 %
  skriftlig + 40 % prosjekt (prosjektkomponenten fantes ikke i arkivet); byggefasen må
  skaffe nyere sett og sjekke gjeldende emneplan. Prioritet: perfekt (meta).
- **Innholdskontrakt:** Sjangerkatalogen A–L presenteres som studentens sjekkliste med
  frekvens per sjanger; prognosen for neste sett (nesten sikkert: én EDTA-titrerfeil, én–to
  deskriptive metodeoppgaver (iod/gravimetri/elektrogravimetrisk Cu), én instrumentell
  oversikt + speciering, én avkrysningsoppgave; trolig spektrofotometrisk Fe og/eller
  syre-base; økende: statistikk og HMS). Leseplan: Del 1 → 2 → 3 er kjernen; nivå-1-delene
  (2, 3, 4, 5, 6-voltammetri, 7-AAS) er «perfekt»-tunge. Ingen forkunnskapsblokk (metakapittel).
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt en
  4-timers mal med én titrerfeil + tre metodeoppgaver + avkrysning — sett opp tidsbudsjett
  og rekkefølge» og «avgjør av en oppgavetekst hvilke tallverdier du kan vente i DATA-boksen».
- **Typiske feil:** Metafeilene: pugge $K$-/$E°$-verdier som uansett gis i DATA-boksen i
  stedet for å drille reaksjonsligninger og prosedyrer; hoppe over interferens-/
  kommentardelene (fast poeng); tro at arkivfrekvensene er ferske (les ærlighetsforbeholdet).
- **Kvote:** 10 quiz / 10 flashcards (formfakta, DATA-boks-regelen, temafrekvens,
  sensorkravene, sjangerkodene).

### Del 1 — Analytisk grunnlag: standarder, likevekt og betingede konstanter *(prioritet: GRUNNLAG/KUNNE)*

#### Kapittel 1.1: Analysens grunnbegreper — standarder, presisjon og signifikante siffer
**id:** `kj2050-1-1` · **number:** 1.1 · **estimatedMinutes:** 50 · **prerequisites:** `kj2050-0-1`

- **Kapitteltype:** metodekapittel (grunnlag).
- **Description:** Ekvivalenspunkt vs. endepunkt, primær- vs. sekundærstandard, nøyaktighet
  vs. presisjon, og disiplinen med enheter og signifikante siffer som sensor krever i hver
  beregning.
- **Eksamensbelegg:** Fundament for alle titreringsoppgavene; **primær-/sekundærstandard**
  og **ekvivalens vs. endepunkt** er faste avkrysningspåstander (K) og definisjonsspørsmål.
  Sensorkrav 4 og 7. Sjangre: K, definisjonsdeler i A/B/C/H. Prioritet: grunnlag/kunne.
- **Forkunnskaper/kryssbok:** kap. 0.1; [Konsentrasjon](/bok/kjemi1/kjemi1-5-2) og
  [Støkiometriske beregninger](/bok/kjemi1/kjemi1-5-3); [Titrering](/bok/kjemi1/kjemi1-9-4)
  (grunnleggende titreringsprinsipp); [Usikkerhet og feilkilder](/bok/kjemi1/kjemi1-12-2).
- **Faktakontrakt:** **ekvivalenspunkt** (støkiometrisk endepunkt) vs. **endepunkt**
  (der indikatoren faktisk slår om) og titrerfeilen som differansen; **primærstandard**
  (høy renhet, kjent/stabil støkiometri, ikke-hygroskopisk, høy formelvekt — f.eks. KIO₃,
  K₂Cr₂O₇, Na₂CO₃) vs. **sekundærstandard** (må innstilles mot en primær — f.eks. HCl,
  NaOH, tiosulfat, KSCN); direkte vs. indirekte (tilbake-)titrering og fortrengningstitrering
  (begrep); nøyaktighet (systematisk feil) vs. presisjon (tilfeldig spredning); **signifikante
  siffer**-regler og hvorfor molariteten til standardløsningen må oppgis med tilstrekkelig
  antall siffer.
- **Reaksjonsligninger:** ingen sentrale; illustrer innstillingsprinsippet generelt.
- **Prosedyre-momentliste:** standardisering (innstilling) som generisk prosedyre: veie
  primærstandard nøyaktig → løse i kjent volum → titrere → beregne eksakt molaritet med
  nok siffer.
- **Interferenser:** hygroskopisk/urent standard → systematisk feil; avlesningsfeil på
  byrette; endepunkt ≠ ekvivalenspunkt.
- **Modellsvar:** «Forklar forskjellen på en primær- og en sekundærstandard, og gi to
  eksempler på hver» (K/definisjon); «Hvorfor er ekvivalenspunkt og endepunkt ikke det
  samme, og hva kalles differansen?».
- **Typiske feil:** F4 (tiosulfat/KSCN kalt primærstandard), F11 (for få siffer/enhet),
  F12 (ekvivalens vs. endepunkt blandet).
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 1.2: Likevektsapparatet — K, Kw, Ka og Ksp i analysen
**id:** `kj2050-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `kj2050-1-1`

- **Kapitteltype:** metodekapittel (grunnlag, med minicalc).
- **Description:** Massevirkningsloven anvendt analytisk: likevektskonstanter for syre-base
  ($K_a$, $K_b$, $K_w$), løselighet ($K_{sp}$) og kompleks ($K_{MY}$) — språket resten av
  boka regner i.
- **Eksamensbelegg:** Ikke egen oppgave, men forutsetning for titrerfeil (Del 3),
  løselighetsprodukt (4.4), syre-base (2.1–2.2) og redoks (5.1). Sensorkrav 5. Prioritet:
  grunnlag/kunne.
- **Forkunnskaper/kryssbok:** kap. 1.1; [Likevektsbegrepet](/bok/kjemi2/kjemi2-3-1),
  [Massevirkningsloven](/bok/kjemi2/kjemi2-3-2), [Likevektsberegninger](/bok/kjemi2/kjemi2-3-4);
  [Løselighetsproduktet Ksp](/bok/kjemi2/kjemi2-5-2).
- **Faktakontrakt:** massevirkningsloven $K = \prod[\text{produkt}]/\prod[\text{reaktant}]$
  (aktivitet ≈ konsentrasjon i fortynnet løsning — se 1.3); $K_w = [\text{H}^+][\text{OH}^-] = 10^{-14}$
  (25 °C); $K_a$, $K_b$, sammenhengen $K_a K_b = K_w$; $\text{p}K = -\log K$; løselighetsprodukt
  $K_{sp}$; dannelseskonstant $K_{MY}$ for metall–EDTA-kompleks (innføres her, brukes i Del 2–3);
  hvordan store $K$ betyr «fullstendig» reaksjon (grunnlag for titrerbarhet).
- **Reaksjonsligninger:** generiske likevekter for hver konstanttype (svak syre
  $\text{HA} \rightleftharpoons \text{H}^+ + \text{A}^-$; felling
  $\text{MX(s)} \rightleftharpoons \text{M}^+ + \text{X}^-$; kompleks
  $\text{M}^{2+} + \text{Y}^{4-} \rightleftharpoons \text{MY}^{2-}$).
- **Regnekontrakt (minicalc):** oppsett av likevektsuttrykk fra en gitt ligning; $\text{pH}$
  fra $[\text{H}^+]$; enkel $K_{sp}$-molaritetssammenheng. Tallverdier gis i DATA-boks.
- **Interferenser:** ikke relevant (grunnlagskapittel) — men fremhev at «konsentrasjon» er
  en tilnærming til aktivitet (bygger bro til 1.3).
- **Modellsvar:** «Sett opp likevektsuttrykket og forklar hva en stor $K_{MY}$ betyr for om
  EDTA-titrering av dette metallet er mulig.»
- **Typiske feil:** F11 (siffer/enhet), sette produkt/reaktant feil vei i $K$, blande $K_a$
  og $K_{sp}$-uttrykk.
- **Kvote:** 16 quiz / 20 flashcards.

#### Kapittel 1.3: Aktivitet, ionestyrke og betingede likevekter
**id:** `kj2050-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `kj2050-1-2`

- **Kapitteltype:** metodekapittel (grunnlag, konseptuelt kjernekapittel).
- **Description:** Hvorfor «effektiv» konsentrasjon (aktivitet) avviker fra molaritet, og
  hvordan pH-avhengige sidelikevekter samles i én **betinget (kondisjonell) konstant** —
  ideen titrerfeilberegningen hviler på.
- **Eksamensbelegg:** Selve **betinget-konstant-konseptet** er toppoeng-nøkkelen i
  titrerfeiloppgaven (sjanger A, 71 %) og bakgrunnen for maskering/selektivitet (sjanger B).
  Sensorkrav 5; typisk feil F1. Prioritet: grunnlag → men konseptuelt **perfekt** (bærer Del 3).
- **Forkunnskaper/kryssbok:** kap. 1.2; [Le Chateliers prinsipp](/bok/kjemi2/kjemi2-3-3)
  (forskyvning ved pH-endring); [Bufferløsninger](/bok/kjemi2/kjemi2-4-4).
- **Faktakontrakt:** aktivitet $a = \gamma c$ og aktivitetskoeffisient $\gamma$;
  **ionestyrke** $I = \tfrac{1}{2}\sum c_i z_i^2$ (kvalitativt: høyere $I$ → lavere $\gamma$
  for ioner); at analytisk praksis oftest bruker konsentrasjon som tilnærming, men at avvik
  finnes; **sidelikevekt-fraksjon** $\alpha$ (hvor stor andel av en art som er på ønsket
  form ved gitt pH); **betinget dannelseskonstant** $K' = K_{MY}\cdot\alpha_{Y^{4-}}$ der
  $\alpha_{Y^{4-}} = [\text{Y}^{4-}]/C_{\text{EDTA,fri}}$ er pH-avhengig; poenget at $\alpha_{Y^{4-}}\to 1$
  bare ved høy pH (~12), og at man da IKKE kan bruke rå $K_{MY}$.
- **Reaksjonsligninger:** EDTAs protoneringstrinn (skjematisk
  $\text{H}_4\text{Y} \rightleftharpoons \ldots \rightleftharpoons \text{Y}^{4-}$) og hvordan
  $[\text{H}^+]$ styrer $\alpha_{Y^{4-}}$; det siste deprotoneringstrinnet
  $\text{HY}^{3-} \rightleftharpoons \text{H}^+ + \text{Y}^{4-}$ med $K_a$ (gis i DATA-boks;
  analysen kaller den $K_1$).
- **Regnekontrakt (minicalc):** beregn $\alpha_{Y^{4-}}$ fra $[\text{H}^+]$ og oppgitt(e)
  $K_a$; beregn $K'$ fra $K_{MY}$ og $\alpha_{Y^{4-}}$. (Verdiene gis i DATA-boks; her
  drilles *mekanikken*, som Del 3 bruker fullt ut.)
- **Interferenser:** ikke relevant; men fremhev at maskering (Del 2.5) er nettopp bruk av
  sidelikevekter til å senke et fremmedions effektive konstant.
- **Modellsvar:** «Forklar hvorfor man må bruke den betingede konstanten $K'$ og ikke $K_{MY}$
  når en EDTA-titrering foregår ved pH 10» (F1-vaksine).
- **Typiske feil:** **F1** (rå $K_{MY}$ uten $\alpha$-korreksjon — den viktigste
  konseptfeilen i boka), F11 (siffer), blande $\alpha_{Y^{4-}}$ (andel av EDTA) med
  metallfraksjon.
- **Kvote:** 14 quiz / 16 flashcards.

**Prøve-kvote Del 1:** 4 prøver (1.A begreper og standarder — primær/sekundær, ekvivalens/
endepunkt, siffer · 1.B likevektsuttrykk og K-typene · 1.C aktivitet, ionestyrke og
$\alpha$/$K'$-mekanikken · 1.D samlet grunnlagsprøve på eksamensnivå).

### Del 2 — Syre-base og kompleksometri (EDTA) *(prioritet: PERFEKT for EDTA / KUNNE for syre-base)*

#### Kapittel 2.1: Syre-base-titrering — indikatorvalg og innstilling
**id:** `kj2050-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `kj2050-1-2`

- **Kapitteltype:** metodekapittel (med minicalc).
- **Description:** Å velge indikator etter ekvivalens-pH, stille inn HCl/NaOH mot
  primærstandard, og regne titrerfeil når endepunktet bommer med ±1 pH-enhet.
- **Eksamensbelegg:** Syre-base i 9/17 sett (53 %, sjanger H); indikatorvalg og innstilling
  er faste deloppgaver, ofte som ENTEN/ELLER-alternativ til en EDTA-beregning. Sensorkrav
  1, 4, 7. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 1.1–1.2; [Syre-base-teori](/bok/kjemi2/kjemi2-4-1),
  [pH og pOH](/bok/kjemi2/kjemi2-4-2), [Titrering og ekvivalenspunkt](/bok/kjemi2/kjemi2-4-3).
- **Faktakontrakt:** indikatoromslag ≈ $\text{p}K_a(\text{ind}) \pm 1$; regel om at
  indikatorens omslagsintervall skal ligge rundt ekvivalens-pH (±1 pH-enhet); pH ved
  ekvivalens for sterk/sterk, sterk/svak; innstilling av HCl mot Na₂CO₃ og NaOH mot
  primærstandard (f.eks. kaliumhydrogenftalat `(verifiser)`); begrepet titrerfeil ved ±1
  pH-enhet avvik.
- **Reaksjonsligninger:** $\text{H}^+ + \text{OH}^- \rightarrow \text{H}_2\text{O}$;
  innstilling mot karbonat $\text{CO}_3^{2-} + 2\text{H}^+ \rightarrow \text{H}_2\text{O} + \text{CO}_2$
  (til 2. ekvivalenspunkt).
- **Prosedyre-momentliste:** velg indikator etter beregnet ekvivalens-pH → still inn
  titranten mot primærstandard → titrer prøven → les av → beregn med nok siffer.
- **Regnekontrakt (minicalc):** pH ved ekvivalens; enkel titrerfeil ved endepunkt ±1
  pH-enhet (DATA-boks gir $K_a$).
- **Interferenser:** feil indikator (omslag langt fra ekvivalens); CO₂-opptak (utdypes i 2.2).
- **Modellsvar:** «Begrunn valg av indikator for titrering av en svak syre med sterk base,
  og forklar hva som skjer med feilen om du velger en indikator som slår om for tidlig.»
- **Typiske feil:** F5 (glemme interferens/feilkilde), F11 (siffer/enhet), velge indikator
  uten å knytte den til ekvivalens-pH.
- **Kvote:** 16 quiz / 20 flashcards.

#### Kapittel 2.2: Karbonatsystemet og CO₂-feilen i lut
**id:** `kj2050-2-2` · **number:** 2.2 · **estimatedMinutes:** 50 · **prerequisites:** `kj2050-2-1`

- **Kapitteltype:** metodekapittel (med minicalc).
- **Description:** Hvorfor NaOH som har tatt opp CO₂ gir feil ved titrering til pH 7, og
  hvordan man titrerer til riktig ekvivalenspunkt og koker ut CO₂ — signaturvarianten i
  syre-base.
- **Eksamensbelegg:** CO₂-/karbonatfeilen er syre-base-sjangerens signaturvariant (del av
  de 53 %). Sensorkrav 1, 4. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 2.1; [Flerprotiske syrer](/bok/kjemi2/kjemi2-4-5).
- **Faktakontrakt:** karbonsyresystemet $K_{a1}$, $K_{a2}$; de to ekvivalenspunktene ved
  titrering av karbonat/hydrogenkarbonat; hvorfor CO₂-forurenset lut gir feil ved titrering
  til pH 7 (bikarbonat-buffring); tiltak: titrer til 2. ekvivalenspunkt, kok ut CO₂ før
  endepunkt, oppbevar lut CO₂-fritt.
- **Reaksjonsligninger:** $\text{CO}_2 + \text{OH}^- \rightarrow \text{HCO}_3^-$;
  $\text{HCO}_3^- + \text{OH}^- \rightarrow \text{CO}_3^{2-} + \text{H}_2\text{O}$;
  $\text{CO}_3^{2-} + 2\text{H}^+ \rightarrow \text{H}_2\text{O} + \text{CO}_2\uparrow$.
- **Prosedyre-momentliste:** identifiser CO₂-forurensning → velg riktig ekvivalenspunkt →
  kok ut CO₂ nær endepunkt → titrer ferdig → beregn og kommenter feilen.
- **Regnekontrakt (minicalc):** feilberegning ved feil valgt ekvivalenspunkt fra
  $K_{a1}/K_{a2}$ (DATA-boks).
- **Interferenser:** CO₂ fra luft; feil valgt ekvivalenspunkt.
- **Modellsvar:** «Forklar hvorfor lut som har stått åpent gir systematisk feil ved
  titrering til pH 7, og hvordan du unngår feilen» (full momentliste + ligninger).
- **Typiske feil:** F6 (mangler ligninger/prosedyre), F5, F2 (glemme å kommentere feilens
  fortegn/størrelse).
- **Kvote:** 14 quiz / 16 flashcards.

#### Kapittel 2.3: Kompleksometri og de betingede dannelseskonstantene
**id:** `kj2050-2-3` · **number:** 2.3 · **estimatedMinutes:** 60 · **prerequisites:** `kj2050-1-3`

- **Kapitteltype:** metodekapittel (kjernekapittel — perfekt).
- **Description:** EDTA som universalkompleksdanner, 1:1-støkiometrien, og hvordan $K_{MY}$
  og pH via $K'$ avgjør om en titrering er skarp nok — teorifundamentet for hardhet,
  selektivitet og titrerfeil.
- **Eksamensbelegg:** Kompleksometri er **ryggraden (94 %)**; teorien om $K_{MY}$/$K'$ er
  forutsetningen for både prosedyre (sjanger B) og titrerfeil (sjanger A). Sensorkrav 5.
  Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.3 (betinget konstant); kap. 1.2 ($K_{MY}$).
- **Faktakontrakt:** EDTA ($\text{H}_4\text{Y}$) som heksadentat ligand som danner **1:1**-kompleks
  med de fleste to-/treverdige metallioner; $K_{MY}$ og den pH-avhengige $K' = K_{MY}\cdot\alpha_{Y^{4-}}$;
  hvorfor høyere pH gir større $K'$ (mer $\text{Y}^{4-}$) men samtidig risiko for
  hydroksidfelling → optimalt pH-vindu; titreringskurven (pM mot volum) og hvorfor skarpt
  omslag krever tilstrekkelig $K'$; ekvivalenspunkt der $[\text{M}^{2+}] = \sqrt{[\text{MY}^{2-}]/K'}$
  (bygger direkte mot Del 3).
- **Reaksjonsligninger:** $\text{M}^{2+} + \text{Y}^{4-} \rightleftharpoons \text{MY}^{2-}$;
  pH-avhengigheten via $\text{HY}^{3-} \rightleftharpoons \text{H}^+ + \text{Y}^{4-}$.
- **Prosedyre-momentliste:** ikke full prosedyre her (kommer i 2.4) — men koblingen «velg
  pH → få tilstrekkelig $K'$ → skarpt endepunkt» som resonnementstrinn.
- **Interferenser:** hydroksidfelling ved for høy pH; for lav $K'$ ved for lav pH → uskarpt
  endepunkt (F10).
- **Modellsvar:** «Forklar hvorfor EDTA-titrering av $\text{Ca}^{2+}$ gjøres ved høy pH,
  og hva som begrenser hvor høyt du kan gå.»
- **Typiske feil:** **F1** (rå $K_{MY}$), **F10** (gal pH/buffer), F12 (ekvivalens/endepunkt).
- **Kvote:** 20 quiz / 26 flashcards.

#### Kapittel 2.4: Hardhetsbestemmelse — buffer, indikator og prosedyre
**id:** `kj2050-2-4` · **number:** 2.4 · **estimatedMinutes:** 55 · **prerequisites:** `kj2050-2-3`

- **Kapitteltype:** metodekapittel (reagensrik prosedyre — perfekt).
- **Description:** Den mest resirkulerte deskriptive oppgaven i arkivet: EDTA-bestemmelse av
  Ca²⁺ og Mg²⁺ (hardhet) med ammoniumbuffer, Eriochrome Black T / mureksid og full prosedyre.
- **Eksamensbelegg:** Kompleksometri-beskrivelse er blant de mest resirkulerte
  metodeoppgavene (sjanger B, del av 94 %). Sensorkrav 1, 2, 3. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.3.
- **Faktakontrakt:** **hardhet** = sum Ca²⁺ + Mg²⁺ bestemt ved EDTA-titrering;
  **ammoniumbuffer pH ~10** for Ca+Mg samlet, **sterk base pH ~12** for Ca alene (Mg feller
  som $\text{Mg(OH)}_2$ og medtitreres ikke); indikatorer: **Eriochrome Black T (EBT)** /
  Calmagite for Ca+Mg (rødt metallkompleks → blått fritt ved endepunkt), **mureksid** for
  Ca alene; Mg bestemmes ved differanse (samlet − Ca); metall–indikatorkompleks må være
  svakere enn metall–EDTA-komplekset.
- **Reaksjonsligninger:** $\text{M}^{2+} + \text{Y}^{4-} \rightarrow \text{MY}^{2-}$;
  indikatoromslag $\text{M–Ind (farget)} + \text{Y}^{4-} \rightarrow \text{MY}^{2-} + \text{Ind (fri farge)}$.
- **Prosedyre-momentliste:** (1) tilsett buffer (pH 10 for hardhet / pH 12 for Ca) → (2)
  tilsett indikator (EBT / mureksid) → (3) titrer med standardisert EDTA til fargeomslag →
  (4) les av, gjenta, beregn → (5) for Mg: titrer samlet ved pH 10 og Ca ved pH 12, ta
  differansen.
- **Interferenser:** andre toverdige metaller medtitreres (maskering — 2.5); for lav pH →
  uskarpt omslag; Mg(OH)₂-felling ved pH 12 er tilsiktet for Ca-selektivitet men må ikke
  rive med Ca.
- **Modellsvar:** «Beskriv fullstendig fremgangsmåte for å bestemme total hardhet og
  deretter Ca²⁺ og Mg²⁺ hver for seg» (full pott krever buffer, indikator, ligninger,
  differansemetoden).
- **Typiske feil:** **F6** (mangler buffer/indikator/ligninger), **F10** (gal pH), F5
  (glemme interferens).
- **Kvote:** 20 quiz / 28 flashcards.

#### Kapittel 2.5: Selektivitet, maskering og titreringsvarianter
**id:** `kj2050-2-5` · **number:** 2.5 · **estimatedMinutes:** 50 · **prerequisites:** `kj2050-2-4`

- **Kapitteltype:** metodekapittel (perfekt).
- **Description:** Hvorfor EDTA er lite selektiv, og hvordan pH-kontroll, maskering og
  tilbake-/fortrengningstitrering gir selektivitet — sensorens faste «hvordan skiller du
  ionene?»-spørsmål.
- **Eksamensbelegg:** Selektivitet/maskering er fast del av kompleksometri-oppgaven (sjanger
  B). Sensorkrav 3, 6. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.3–2.4.
- **Faktakontrakt:** EDTA binder de fleste to-/treverdige metaller → lav selektivitet;
  selektivitetsverktøy: **pH-kontroll** (bare metaller med stort nok $K'$ ved valgt pH
  titreres), **maskering** (bind fremmedion i et annet, sterkere kompleks — f.eks. cyanid
  for tungmetaller, fluorid for Al `(verifiser reagens/ion)`) og **demaskering**;
  **direkte** vs. **tilbaketitrering** (tilsett EDTA-overskudd, titrer overskudd med
  standard metallion — for trege eller fellende metaller) vs. **fortrengningsmetoden**
  (analytten fortrenger et svakere bundet metall fra et EDTA-kompleks, ekvivalent mengde
  frigjøres).
- **Reaksjonsligninger:** maskering (skjematisk $\text{Fremmedion} + \text{maskeringsreagens} \rightarrow \text{stabilt kompleks}$);
  fortrengning $\text{M}^{2+} + \text{M'Y}^{2-} \rightarrow \text{MY}^{2-} + \text{M'}^{2+}$.
- **Prosedyre-momentliste:** velg pH → masker interfererende ioner → velg direkte/tilbake/
  fortrengning etter metallets kinetikk og fellingsrisiko → titrer → beregn.
- **Interferenser:** dette kapitlet HANDLER om interferens-håndtering — koble hver variant
  til når den velges.
- **Modellsvar:** «Du skal bestemme Ni²⁺ i nærvær av Ca²⁺. Forklar hvordan du oppnår
  selektivitet, og når du ville brukt tilbaketitrering fremfor direkte titrering.»
- **Typiske feil:** F5 (ikke nevne maskering), F6 (ikke begrunne variantvalget), velge feil
  variant for et fellende metall.
- **Kvote:** 18 quiz / 24 flashcards.

**Prøve-kvote Del 2:** 4 prøver (2.A syre-base — indikatorvalg + innstilling + CO₂-feilen ·
2.B kompleksometri-teori — $K_{MY}/K'$/pH-vindu · 2.C hardhetsprosedyre — buffer/indikator/
Ca+Mg-differanse · 2.D selektivitet og maskering — variantvalg med begrunnelse).

### Del 3 — EDTA-titrerfeil-beregningen *(prioritet: PERFEKT — settets signatur-regnesjanger)*

#### Kapittel 3.1: Titrerfeil-beregningen — den faste oppskriften (drill)
**id:** `kj2050-3-1` · **number:** 3.1 · **estimatedMinutes:** 75 · **prerequisites:** `kj2050-2-3`

- **Kapitteltype:** drill (regnekapittel-DNA B).
- **Description:** Den tretrinns-oppskriften sensor forventer, gjennomregnet med DATA-boks
  og drillet på tvers av metallioner (Ca→Zn→Sr→Pb→Ba) og pH — settets tyngste faste
  regnepott.
- **Eksamensbelegg:** Sjanger A i 12/17 sett (71 %), i praksis alle moderne sett (2006–2012);
  bærer nesten alltid settets tyngste regneoppgave. Resirkuleres nesten identisk med bytte
  av metallion. Sensorkrav 4, 5. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.3 (betinget konstant), 2.3 (ekvivalenspunkt).
- **Symbol- og formelliste (collapsible):** $K' = K_{MY}\cdot\alpha_{Y^{4-}}$;
  $\alpha_{Y^{4-}} = [\text{Y}^{4-}]/C_{\text{EDTA,fri}}$ fra $[\text{H}^+]=10^{-\text{pH}}$ og
  oppgitt $K_a$; gjenværende metall ved ekvivalens
  $[\text{M}^{2+}]_\text{ekv} = \sqrt{[\text{MY}^{2-}]/K'}$; titrerfeil
  $T = ([\text{Y}^{4-}]_\text{fri} - [\text{M}^{2+}]_\text{gjenv})/C_M$, $T\% = 100\,T$.
  **Alle tallverdier ($K_{MY}$, $K_a$, konsentrasjoner) gis i DATA-boksen.**
- **Regnekontrakt / løsningsoppskrift:** (1) finn $\alpha_{Y^{4-}}$ ved oppgitt pH og beregn
  $K' = K_{MY}\cdot\alpha_{Y^{4-}}$; (2) beregn teoretisk gjenværende $[\text{M}^{2+}]_\text{ekv} = \sqrt{[\text{MY}^{2-}]/K'}$
  ved ekvivalenspunktet; (3) sett inn i titrerfeiluttrykket for den/de oppgitte gjenværende
  $[\text{M}^{2+}]$-verdien(e), regn $T\%$, og **kommenter** om metoden er god/dårlig og om
  det er over-/undertitrert (overskudd EDTA → overtitrert; gjenværende metall → undertitrert).
  Ofte skal feilen regnes for *flere* gjenværende konsentrasjoner (f.eks. $5\cdot10^{-5}$ vs.
  $5\cdot10^{-9}$ M) for å vise hvordan skarpheten i endepunktet påvirker feilen.
- **Gjennomregnet eksamenscase (example):** med DATA-boks og sensor-margnotater ved hvert
  steg (betinget konstant korrekt brukt, riktig enhet, nok siffer, kommentar til slutt).
  *Omskrevet mønster (varier tall/metall):* «1 L vann med 0,001 M M²⁺ titreres med 0,001 M
  EDTA ved gitt pH (DATA-boks: $K_{MY}$, $K_a$). Finn teoretisk gjenværende $[\text{M}^{2+}]$
  ved ekvivalens og titrerfeilen i prosent om titreringen stoppes ved en oppgitt
  $[\text{M}^{2+}]$. Kommenter om metoden er brukbar.»
- **Typiske feil:** **F1** (rå $K_{MY}$ uten $\alpha$), **F2** (glemme kommentar/fortegn),
  **F11** (enhet/siffer), regne $\alpha$ feil vei.
- **Oppgaver (exercise × 10–12):** varianter med ulikt metallion (Ca, Zn, Sr, Pb, Ba, Mg),
  pH og konsentrasjon, alle med DATA-boks, `solution` + `hints`, prosentsvar + tolkning.
- **Kvote:** 18 quiz / 14 flashcards.

#### Kapittel 3.2: Titrerfeil med interferens og medtitrering (drill)
**id:** `kj2050-3-2` · **number:** 3.2 · **estimatedMinutes:** 60 · **prerequisites:** `kj2050-3-1`

- **Kapitteltype:** drill (regnekapittel-DNA B, utvidet variant).
- **Description:** Den vanlige utvidelsen der et fremmedion medtitreres — titrerfeiluttrykket
  utvides med interferensleddet, og kandidaten må begrunne *hvilket* ion som forstyrrer.
- **Eksamensbelegg:** Fast utvidelse av sjanger A (f.eks. 4 % av Mg²⁺ medtitreres, eller
  Cu²⁺/Li⁺ med gitt $K_{MY}$ til stede). Sensorkrav 4, 5, 6. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 3.1; 2.5 (maskering/selektivitet).
- **Symbol- og formelliste (collapsible):** som 3.1, pluss interferensleddet:
  $T = ([\text{Y}^{4-}]_\text{fri} - [\text{M}^{2+}]_\text{gjenv} + [\text{interferens medtitrert}])/C_M$
  `(verifiser fortegn/oppsett mot valgt konvensjon)`.
- **Regnekontrakt / løsningsoppskrift:** (1) avgjør hvilket fremmedion som interfererer
  (det med $K_{MY}$ nær eller over analyttens); (2) beregn medtitrert mengde; (3) utvid
  titrerfeiluttrykket med bidraget; (4) regn $T\%$ og kommenter; (5) foreslå maskering som
  mottiltak.
- **Gjennomregnet eksamenscase (example):** med DATA-boks (analyttens og interferentens
  $K_{MY}$) og margnotater om hvorfor det ene ionet medtitreres.
- **Typiske feil:** F1, F2, F5 (ikke begrunne hvilket ion som interfererer), feil fortegn på
  interferensleddet.
- **Oppgaver (exercise × 8–10):** varianter med ulike interferenter og maskeringsvalg.
- **Kvote:** 14 quiz / 10 flashcards.

**Prøve-kvote Del 3:** 4 prøver (3.A titrerfeil Ca²⁺ ved høy pH — grunnoppskriften ·
3.B titrerfeil ved lavere pH — $\alpha/K'$-korreksjonen kritisk · 3.C metallbytte
(Zn/Sr/Pb/Ba) med flere gjenværende konsentrasjoner · 3.D interferensvariant med
medtitrering og maskeringsforslag). Alle med DATA-boks; svar i prosent + tolkning kreves.

### Del 4 — Gravimetri og felling *(prioritet: PERFEKT)*

#### Kapittel 4.1: Fellingsgravimetri — krav til fellingsproduktet og prosedyre
**id:** `kj2050-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `kj2050-1-2`

- **Kapitteltype:** metodekapittel (perfekt).
- **Description:** Egenskapene et godt fellingsprodukt må ha, den fulle prosedyren
  (felling → digerering → filtrering → vasking → gløding → veiing), og gravimetrisk faktor
  for Fe, klorid og sulfat.
- **Eksamensbelegg:** Gravimetri i 13/17 sett (76 %, sjanger D); prosedyren og gravimetrisk
  faktor er faste. Sensorkrav 1, 2. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.2 ($K_{sp}$); [Fellingsreaksjoner](/bok/kjemi2/kjemi2-5-3);
  [Støkiometriske beregninger](/bok/kjemi1/kjemi1-5-3).
- **Faktakontrakt:** ønskede egenskaper for fellingsproduktet — **lav løselighet**, **stor/
  filtrerbar krystall**, **ren**, **kjent/definert støkiometri**, og at det kan tørkes/glødes
  til en **veiedefinert** form; klassiske systemer: **Fe** felles som $\text{Fe(OH)}_3$ og
  glødes til $\text{Fe}_2\text{O}_3$; **klorid** som AgCl; **sulfat** som BaSO₄; **gravimetrisk
  faktor** (omregning felling → analytt).
- **Reaksjonsligninger:** $\text{Fe}^{3+} + 3\text{OH}^- \rightarrow \text{Fe(OH)}_3\downarrow$,
  gløding $2\text{Fe(OH)}_3 \xrightarrow{\Delta} \text{Fe}_2\text{O}_3 + 3\text{H}_2\text{O}$;
  $\text{Ag}^+ + \text{Cl}^- \rightarrow \text{AgCl}\downarrow$;
  $\text{Ba}^{2+} + \text{SO}_4^{2-} \rightarrow \text{BaSO}_4\downarrow$.
- **Prosedyre-momentliste:** (1) fell fra fortynnet, varm løsning (større krystaller) → (2)
  digerering/«ageing» → (3) filtrer → (4) vask (unngå å løse opp / peptisere) → (5) tørk/glød
  til konstant vekt → (6) vei og regn om med gravimetrisk faktor.
- **Regnekontrakt (minicalc):** gravimetrisk faktor og masse-analytt fra veid felling.
- **Interferenser:** medfelling (utdypes i 4.2); ufullstendig gløding; for løselig felling.
- **Modellsvar:** «Beskriv fullstendig gravimetrisk bestemmelse av jern, med alle
  reaksjonsligninger og hvorfor produktet glødes.»
- **Typiske feil:** F6 (mangler ligninger/prosedyre), F5, feil gravimetrisk faktor.
- **Kvote:** 18 quiz / 24 flashcards.

#### Kapittel 4.2: Medfelling — typer og mottiltak
**id:** `kj2050-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `kj2050-4-1`

- **Kapitteltype:** metodekapittel (perfekt).
- **Description:** De fire medfellingstypene og de riktige mottiltakene — sensorens faste
  «hvorfor blir resultatet for høyt, og hva gjør du?»-spørsmål.
- **Eksamensbelegg:** Medfelling er fast del av gravimetri-oppgaven (sjanger D). Sensorkrav
  3. Typisk feil F8. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 4.1.
- **Faktakontrakt:** de fire typene — **okklusjon** (fremmedion fanget inne under rask
  vekst), **overflateadsorpsjon** (ioner på krystalloverflaten), **mekanisk innslutning**
  (moderløsning fanget i hulrom), **blandkrystaller/isomorf substitusjon** (fremmedion
  erstatter analytt i gitteret); mottiltak: **fortynnet, langsom felling**, **digerering/
  ageing**, **omfelling** (reprecipitation), **grundig vasking**; hvorfor blandkrystaller
  er verst (kan ikke vaskes bort).
- **Reaksjonsligninger:** ikke sentrale — men koble adsorpsjon til overflateladning.
- **Prosedyre-momentliste:** velg tiltak etter medfellingstype (fortynnet felling +
  digerering mot okklusjon; omfelling mot innslutning; vasking mot overflateadsorpsjon).
- **Interferenser:** dette kapitlet HANDLER om interferens — koble type til mottiltak.
- **Modellsvar:** «Forklar de fire typene medfelling og hvilket mottiltak som virker mot
  hver.»
- **Typiske feil:** **F8** (blande typene / feil mottiltak), F5.
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 4.3: Elektrogravimetri av kobber
**id:** `kj2050-4-3` · **number:** 4.3 · **estimatedMinutes:** 50 · **prerequisites:** `kj2050-4-1`

- **Kapitteltype:** metodekapittel (perfekt).
- **Description:** Elektrolytisk utfelling av Cu på veid Pt-katode, med prosedyre,
  celleoppsett og urea/depolarisator — og sammenligningen mot iodometrisk Cu.
- **Eksamensbelegg:** Elektrogravimetri i 9/17 sett (53 %, sjanger E). Sensorkrav 1, 2, 6.
  Prioritet: perfekt (kjerne i gravimetriblokken).
- **Forkunnskaper/kryssbok:** kap. 4.1; [Elektrolyse](/bok/kjemi2/kjemi2-6-5).
- **Faktakontrakt:** Cu²⁺ reduseres elektrolytisk til metallisk Cu på **veid Pt-nettkatode**;
  massen bestemmes ved veiing før/etter; **urea/depolarisator** hindrer at elektrogenerert
  $\text{NO}_2^-$/gassutvikling stopper fullstendig utfelling; lav strømtetthet (< 0,1 A/cm²)
  gir jevnt, fastsittende belegg; konstant cellespenning ~2–4 V `(verifiser)`; magnetrøring.
- **Reaksjonsligninger:** katode $\text{Cu}^{2+} + 2e^- \rightarrow \text{Cu(s)}$; anode
  $2\text{H}_2\text{O} \rightarrow \text{O}_2 + 4\text{H}^+ + 4e^-$; ureas rolle mot
  nitritt/nitrøse gasser `(verifiser ligning)`.
- **Prosedyre-momentliste:** (1) rens og vei Pt-katoden → (2) tilsett syre + urea/
  depolarisator → (3) elektrolyser ved lav strømtetthet med røring til fullstendig felling
  (test med ny overflate) → (4) skyll uten å løse belegget → (5) tørk og vei → (6) beregn Cu.
- **Interferenser:** andre reduserbare metaller felles med; nitrat/nitritt forstyrrer (derav
  urea); for høy strømtetthet → dårlig sittende belegg (konsentrasjonspolarisasjon, IR-fall).
- **Modellsvar:** «Beskriv elektrogravimetrisk bestemmelse av kobber med celleoppsett,
  elektrodereaksjoner og hvorfor du tilsetter urea. Sammenlign kort med iodometrisk Cu.»
- **Typiske feil:** F6 (mangler elektrodereaksjoner/prosedyre), F5 (glemme urea/interferens),
  F9-slektning (glemme nitrat-håndtering).
- **Kvote:** 16 quiz / 20 flashcards.

#### Kapittel 4.4: Løselighetsprodukt og kvantitativ fellingsbetingelse
**id:** `kj2050-4-4` · **number:** 4.4 · **estimatedMinutes:** 45 · **prerequisites:** `kj2050-1-2`

- **Kapitteltype:** metodekapittel (minicalc — kjenne).
- **Description:** Å regne når en felling er «kvantitativ» (f.eks. gjenværende < 0,01 %) og
  ved hvilken pH et hydroksid feller fullstendig — den lille beregningsgenren i gravimetri.
- **Eksamensbelegg:** Løselighetsprodukt-beregning i 2/17 (12 %) som egen oppgave, men
  innbakt i gravimetri. Sensorkrav 4. Prioritet: kjenne.
- **Forkunnskaper/kryssbok:** kap. 1.2; [Løselighetsproduktet Ksp](/bok/kjemi2/kjemi2-5-2).
- **Faktakontrakt:** $K_{sp}$-uttrykk; **kvantitativ fellingsbetingelse** (rest-analytt under
  en gitt terskel, typisk 0,01 %); pH for fullstendig hydroksidfelling fra
  $[\text{M}^{n+}][\text{OH}^-]^n = K_{sp}$; felles-ion-effekt.
- **Reaksjonsligninger:** $\text{Fe}^{3+} + 3\text{OH}^- \rightleftharpoons \text{Fe(OH)}_3$
  med $K_{sp} = [\text{Fe}^{3+}][\text{OH}^-]^3$.
- **Regnekontrakt (minicalc):** regn $[\text{OH}^-]$ (og pH) for at rest-$[\text{M}^{n+}]$ er
  under terskel; regn løselighet fra $K_{sp}$ (DATA-boks).
- **Interferenser:** felles-ion-effekt; for lav pH → ufullstendig felling.
- **Modellsvar:** «Ved hvilken pH er $\text{Fe}^{3+}$ felt til under 0,01 % rest? (DATA-boks:
  $K_{sp}$).»
- **Typiske feil:** F11 (siffer/enhet), glemme eksponenten $n$ på $[\text{OH}^-]$, forveksle
  løselighet og $K_{sp}$.
- **Kvote:** 12 quiz / 12 flashcards.

**Prøve-kvote Del 4:** 4 prøver (4.A fellingsgravimetri — krav + prosedyre + gravimetrisk
faktor (Fe/Cl/sulfat) · 4.B medfelling — typer og mottiltak · 4.C elektrogravimetrisk Cu —
elektrodereaksjoner + urea · 4.D løselighetsprodukt og kvantitativ fellingsbetingelse).

### Del 5 — Redoks og titrering med iod og felling *(prioritet: PERFEKT for iod / KUNNE for felling / KJENNE for ikke-iod)*

#### Kapittel 5.1: Redokslikevekter, Nernst og balansering av redoksligninger
**id:** `kj2050-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `kj2050-1-2`

- **Kapitteltype:** metodekapittel (grunnlag for redoks, med minicalc).
- **Description:** Å balansere redoksligninger via halvreaksjoner, bruke Nernst-ligningen,
  og finne ekvivalenspotensialet — verktøyene alle titreringene i Del 5 hviler på.
- **Eksamensbelegg:** Forutsetning for iod-titrering (76 %) og ikke-iod-redoks (24 %);
  **balanserte redoksligninger er selve valutaen** (sensorkrav 1). Prioritet: grunnlag →
  konseptuelt perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.2; [Oksidasjonstall og redoks](/bok/kjemi1/kjemi1-4-3),
  [Balansering av reaksjonslikninger](/bok/kjemi1/kjemi1-4-2);
  [Redoksreaksjoner](/bok/kjemi2/kjemi2-6-1), [Nernst-likningen og cellepotensial](/bok/kjemi2/kjemi2-6-3).
- **Faktakontrakt:** halvreaksjonsmetoden (balanser masse, så ladning med elektroner, kombiner);
  **Nernst** $E = E° - \frac{0{,}059}{n}\log Q$ (25 °C); **ekvivalenspotensial** for
  symmetriske systemer $E_\text{ekv} = (n_1 E_1° + n_2 E_2°)/(n_1 + n_2)$; sammenhengen
  mellom $E°$-differanse og om en titrering er «fullstendig».
- **Reaksjonsligninger:** iodsystemet $\text{I}_2 + 2e^- \rightleftharpoons 2\text{I}^-$
  ($E° \approx 0{,}54$ V), triiodid $\text{I}_3^-$; dikromat
  $\text{Cr}_2\text{O}_7^{2-} + 14\text{H}^+ + 6e^- \rightarrow 2\text{Cr}^{3+} + 7\text{H}_2\text{O}$
  (alle $E°$-verdier gis i DATA-boks).
- **Regnekontrakt (minicalc):** balanser en gitt redoksligning; bruk Nernst; regn
  ekvivalenspotensial.
- **Interferenser:** ikke relevant (grunnlag).
- **Modellsvar:** «Balanser reaksjonen mellom dikromat og Fe²⁺ i surt miljø via
  halvreaksjoner, og finn ekvivalenspotensialet» (DATA-boks: $E°$).
- **Typiske feil:** F11, ubalansert ladning/masse, feil fortegn i Nernst.
- **Kvote:** 16 quiz / 20 flashcards.

#### Kapittel 5.2: Iodometri og iodimetri — prinsipp, tiosulfat og stivelse
**id:** `kj2050-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `kj2050-5-1`

- **Kapitteltype:** metodekapittel (perfekt — reaksjonslignings-rikt).
- **Description:** Skillet mellom iodimetri (direkte, med I₂/I₃⁻) og iodometri (indirekte,
  via tiosulfat), stivelse som indikator, og hvorfor tiosulfat ikke er primærstandard.
- **Eksamensbelegg:** Iod-titrering i 13/17 sett (76 %, sjanger C); skillet iodometri/
  iodimetri er fast definisjonspoeng og avkrysningsstoff (K). Sensorkrav 1, 7. Prioritet:
  perfekt.
- **Forkunnskaper/kryssbok:** kap. 5.1.
- **Faktakontrakt:** **iodimetri** = direkte titrering *med* I₂/I₃⁻ (prøven oksideres);
  **iodometri** = indirekte (analytten oksiderer overskudd I⁻ til I₃⁻, som tilbaketitreres
  med **natriumtiosulfat**); **stivelse** som indikator (blått I₂–stivelse-kompleks; tilsettes
  nær endepunktet); pH-vindu ~0–7 (tiosulfat brytes ned i sterkt surt, I₂ disproporsjonerer
  i basisk); tiosulfat og KSCN er **sekundærstandarder** — innstilles mot primærstandard
  KIO₃ (eller K₂Cr₂O₇).
- **Reaksjonsligninger:** innstilling $\text{IO}_3^- + 8\text{I}^- + 6\text{H}^+ \rightarrow 3\text{I}_3^- + 3\text{H}_2\text{O}$;
  tilbaketitrering $\text{I}_3^- + 2\text{S}_2\text{O}_3^{2-} \rightarrow 3\text{I}^- + \text{S}_4\text{O}_6^{2-}$.
- **Prosedyre-momentliste:** (generisk iodometri) tilsett I⁻-overskudd i surt → la analytten
  oksidere I⁻ til I₃⁻ → titrer frigjort I₃⁻ med standardisert tiosulfat → tilsett stivelse
  nær endepunkt → titrer til fargen forsvinner.
- **Interferenser:** luftoksidasjon av I⁻; for tidlig stivelse (adsorberer I₂); for sterkt
  surt (tiosulfat-nedbrytning).
- **Modellsvar:** «Forklar forskjellen på iodometri og iodimetri, og hvorfor tiosulfat må
  stilles inn mot KIO₃» (full pott krever begge definisjoner + innstillingsligningen).
- **Typiske feil:** **F3** (forveksle iodometri/iodimetri, feil ligninger), **F4** (tiosulfat
  som primærstandard), tilsette stivelse for tidlig.
- **Kvote:** 18 quiz / 26 flashcards.

#### Kapittel 5.3: Iodometrisk bestemmelse av kobber og innstilling av tiosulfat
**id:** `kj2050-5-3` · **number:** 5.3 · **estimatedMinutes:** 55 · **prerequisites:** `kj2050-5-2`

- **Kapitteltype:** metodekapittel (perfekt — signatureksempel).
- **Description:** Standardeksemplet i arkivet: iodometrisk Cu med KSCN for skarpere omslag
  og fjerning av nitrat — reaksjonsligningene sensor alltid vil se.
- **Eksamensbelegg:** Iodometrisk Cu er den faste konkretiseringen av sjanger C. Sensorkrav
  1, 3, 9. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 5.2.
- **Faktakontrakt:** Cu²⁺ oksiderer I⁻ til I₃⁻ og feller som CuI; frigjort I₃⁻ titreres med
  tiosulfat; **KSCN** tilsettes nær endepunktet for skarpere omslag (fortrenger adsorbert I₂
  fra CuI-overflaten); **nitrat må fjernes** (oksiderer I⁻ og gir for høyt resultat);
  innstilling av tiosulfat mot KIO₃.
- **Reaksjonsligninger:** $2\text{Cu}^{2+} + 5\text{I}^- \rightarrow 2\text{CuI}\downarrow + \text{I}_3^-$;
  $\text{I}_3^- + 2\text{S}_2\text{O}_3^{2-} \rightarrow 3\text{I}^- + \text{S}_4\text{O}_6^{2-}$;
  innstilling $\text{IO}_3^- + 8\text{I}^- + 6\text{H}^+ \rightarrow 3\text{I}_3^- + 3\text{H}_2\text{O}$.
- **Prosedyre-momentliste:** (1) fjern nitrat/interfererende oksidasjonsmidler → (2) juster
  pH → (3) tilsett KI-overskudd → (4) titrer I₃⁻ med standardisert tiosulfat → (5) tilsett
  stivelse nær endepunkt → (6) tilsett KSCN for skarpt omslag → (7) titrer ferdig, beregn.
- **Interferenser:** $\text{NO}_3^-$ og andre oksidanter (F9); adsorpsjon av I₂ på CuI (KSCN
  motvirker); Fe³⁺ (maskeres med fluorid `(verifiser)`).
- **Modellsvar:** «Beskriv fullstendig iodometrisk bestemmelse av kobber, med alle
  reaksjonsligninger, rollen til KSCN, og hvorfor nitrat må fjernes.»
- **Typiske feil:** **F9** (glemme å fjerne nitrat), **F3** (feil/ubalanserte ligninger),
  **F4** (tiosulfat primærstandard), F6.
- **Kvote:** 18 quiz / 26 flashcards.

#### Kapittel 5.4: Fellingstitrering — Mohr og Volhard
**id:** `kj2050-5-4` · **number:** 5.4 · **estimatedMinutes:** 50 · **prerequisites:** `kj2050-1-2`

- **Kapitteltype:** metodekapittel (kunne).
- **Description:** Klorid-bestemmelse med AgNO₃: Mohr (direkte, kromatindikator) og Volhard
  (tilbaketitrering, Fe³⁺-indikator) — med de faste avkrysningspåstandene.
- **Eksamensbelegg:** Fellingstitrering i 7/17 sett (41 %, sjanger I), ofte kort deloppgave +
  avkrysningspåstander (K). Sensorkrav 1, 3. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 1.2 ($K_{sp}$); 4.1 (fellingskjemi).
- **Faktakontrakt:** **Mohr** — direkte titrering av Cl⁻ med AgNO₃, **kromat $\text{CrO}_4^{2-}$**
  som indikator (rødt $\text{Ag}_2\text{CrO}_4$ når klorid er brukt opp), nøytralt miljø
  (surt løser kromat, basisk feller Ag₂O); **Volhard** — tilbaketitrering: tilsett Ag⁺-overskudd,
  titrer overskuddet med **SCN⁻** og **Fe³⁺** som indikator (rødt $[\text{FeSCN}]^{2+}$),
  surt miljø; fellingstitrering brukes for **anioner** (klorid), ikke kationer (fast K-påstand).
- **Reaksjonsligninger:** $\text{Ag}^+ + \text{Cl}^- \rightarrow \text{AgCl}\downarrow$;
  Mohr-endepunkt $2\text{Ag}^+ + \text{CrO}_4^{2-} \rightarrow \text{Ag}_2\text{CrO}_4\downarrow$ (rød);
  Volhard $\text{Ag}^+ + \text{SCN}^- \rightarrow \text{AgSCN}\downarrow$, indikator
  $\text{Fe}^{3+} + \text{SCN}^- \rightarrow [\text{FeSCN}]^{2+}$ (rød).
- **Prosedyre-momentliste:** Mohr (juster til nøytralt → tilsett kromat → titrer med AgNO₃
  til rødbrunt); Volhard (surgjør → tilsett kjent Ag⁺-overskudd → tilsett Fe³⁺ → titrer
  overskudd med SCN⁻ til rødt).
- **Interferenser:** Mohr — pH må være nøytral; Volhard — AgCl kan løses opp av SCN⁻ (filtrer
  fra eller tilsett nitrobenzen `(verifiser)`).
- **Modellsvar:** «Sammenlign Mohr- og Volhard-metoden for kloridbestemmelse: indikator,
  pH-krav og når du velger hvilken.»
- **Typiske feil:** F6 (mangler indikator/ligninger), F5, blande de to indikatorene/pH-kravene;
  K-påstanden «AgNO₃ brukes for kationer» (galt).
- **Kvote:** 14 quiz / 18 flashcards.

#### Kapittel 5.5: Redokstitrering utenom iod — dikromat og cerimetri
**id:** `kj2050-5-5` · **number:** 5.5 · **estimatedMinutes:** 45 · **prerequisites:** `kj2050-5-1`

- **Kapitteltype:** metodekapittel (kjenne — kompakt).
- **Description:** Fe²⁺-titrering med K₂Cr₂O₇ eller Ce⁴⁺, forbehandling med SnCl₂/HgCl₂, og
  endepunktdeteksjon — bindeleddet til «jern med tre teknikker».
- **Eksamensbelegg:** Redokstitrering ikke-iod i 4/17 sett (24 %); ofte som ett ben i
  jern-trekanten (sjanger F). Sensorkrav 1, 9. Prioritet: kjenne.
- **Forkunnskaper/kryssbok:** kap. 5.1.
- **Faktakontrakt:** Fe³⁺ reduseres til Fe²⁺ med **SnCl₂**, overskudd Sn²⁺ fjernes med
  **HgCl₂** (ellers medtitreres det), så titreres Fe²⁺ med **K₂Cr₂O₇** (difenylaminsulfonat
  som redoksindikator) eller **Ce⁴⁺**; ekvivalenspotensial fra 5.1.
- **Reaksjonsligninger:** $\text{Cr}_2\text{O}_7^{2-} + 6\text{Fe}^{2+} + 14\text{H}^+ \rightarrow 2\text{Cr}^{3+} + 6\text{Fe}^{3+} + 7\text{H}_2\text{O}$;
  $2\text{Sn}^{2+}\ \text{overskudd} + \ldots$ fjernes med $\text{HgCl}_2$ (danner $\text{Hg}_2\text{Cl}_2$) `(verifiser ligning)`.
- **Prosedyre-momentliste:** reduser Fe³⁺ med SnCl₂ → fjern Sn²⁺-overskudd med HgCl₂ → titrer
  Fe²⁺ med dikromat/Ce⁴⁺ til indikatoromslag.
- **Interferenser:** Sn²⁺-overskudd medtitreres om det ikke fjernes (F9); klorid-katalysert
  medoksidasjon `(verifiser)`.
- **Modellsvar:** «Beskriv redokstitrering av jern med dikromat, inkludert hvorfor du både
  reduserer med SnCl₂ og deretter fjerner overskuddet med HgCl₂.»
- **Typiske feil:** **F9** (glemme HgCl₂-trinnet), F6, ubalansert ligning.
- **Kvote:** 12 quiz / 14 flashcards.

**Prøve-kvote Del 5:** 4 prøver (5.A redoksbalansering + Nernst + ekvivalenspotensial ·
5.B iodometri vs. iodimetri — definisjoner, tiosulfat-innstilling, stivelse · 5.C
iodometrisk Cu — full prosedyre med ligninger, KSCN, nitratfjerning · 5.D fellingstitrering
Mohr/Volhard + ikke-iod-redoks).

### Del 6 — Elektroanalyse og speciering *(prioritet: PERFEKT for voltammetri/speciering / KUNNE for potensiometri)*

#### Kapittel 6.1: Potensiometri og ioneselektive elektroder
**id:** `kj2050-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `kj2050-5-1`

- **Kapitteltype:** metodekapittel (kunne — påstandsbank-rik).
- **Description:** Måling ved ~null strøm, pH-glasselektroden og ioneselektive elektroder
  (ISE) med logaritmisk respons — kilden til mange av avkrysningsoppgavens gjengangere.
- **Eksamensbelegg:** Potensiometri/ISE i 9/17 sett (53 %, sjanger G + tung i sjanger K);
  de resirkulerte påstandene (ISE-deteksjonsgrense, pH-glasselektrode, indre løsning) er
  faste. Sensorkrav 7, 8. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 5.1 (Nernst); [Galvaniske celler](/bok/kjemi2/kjemi2-6-2).
- **Faktakontrakt:** potensiometri **måler cellepotensial ved ~null strøm (likevekt)** —
  kontrast til voltammetri (6.2); **Nernst-respons** (potensial ∝ $\log$ aktivitet);
  **pH-glasselektroden** (glassmembran, indre referanse; **alkali-feil**: gir for **lav** pH
  i sterkt basisk løsning — ikke for høy); indre løsning er en klorid-/bufferløsning
  (**ikke** 0,1 M NaOH — fast K-felle); **ISE** — deteksjonsgrense ~$10^{-6}$ M,
  logaritmisk respons, **ikke** temperaturuavhengig; referanseelektrode (kalomel/Ag-AgCl).
- **Reaksjonsligninger:** Nernst-respons for en ISE (skjematisk
  $E = \text{konst} + \frac{0{,}059}{z}\log a_\text{ion}$).
- **Prosedyre-momentliste:** kalibrer elektroden mot standarder → mål prøven ved ~null strøm
  → les av mot kalibreringskurve; juster ionestyrke (TISAB) `(verifiser)`.
- **Interferenser:** alkali-feil ved høy pH; interfererende ioner (selektivitetskoeffisient);
  temperaturdrift.
- **Modellsvar:** «Forklar hvorfor potensiometri måles ved tilnærmet null strøm, og hva
  alkali-feilen ved pH-glasselektroden går ut på» (F7-vaksine).
- **Typiske feil:** **F7** (blande potensiometri og voltammetri), K-fellene (indre løsning =
  NaOH; alkali-feil «for høy pH»; ISE temperaturuavhengig), F12.
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 6.2: Voltammetri og stripping-analyse
**id:** `kj2050-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `kj2050-6-1`

- **Kapitteltype:** metodekapittel (perfekt).
- **Description:** Strøm som funksjon av påtrykt potensial, opp-konsentrering + anodisk
  stripping ned til ng/L, og at voltammetri måler den **elektrolabile fraksjonen** — med
  den kritiske presiseringen mot potensiometri.
- **Eksamensbelegg:** Voltammetri (stripping) i 13/17 sett (76 %, sjanger G), fast makkerpar
  med speciering. **V2007 slår ned på påstanden om at voltammetri måler ved null strøm.**
  Sensorkrav 7, 8. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 6.1.
- **Faktakontrakt:** voltammetri **lar det gå en strøm som funksjon av påtrykt potensial**
  (IKKE null strøm — F7); **anodisk stripping-voltammetri**: (1) opp-konsentrering ved
  reduksjon/avsetning på arbeidselektroden ved fast potensial, (2) anodisk «stripping»
  (reoksidasjon) der strømtoppen gir konsentrasjonen; ekstremt lav deteksjonsgrense (ned til
  ng/L); måler **elektrolabil fraksjon** (frie + lett dissosierbare ioner) — grunnlaget for
  speciering (6.3); arbeids-/referanse-/hjelpeelektrode.
- **Reaksjonsligninger:** avsetning $\text{M}^{n+} + n e^- \rightarrow \text{M(amalgam/film)}$,
  stripping $\text{M} \rightarrow \text{M}^{n+} + n e^-$.
- **Prosedyre-momentliste:** avlufting (fjern O₂) → opp-konsentrer ved reduksjonspotensial i
  gitt tid under røring → hvil → sveip anodisk → les av strømtopp mot standardaddisjon.
- **Interferenser:** oppløst O₂; overlappende topper; adsorpsjon på elektroden.
- **Modellsvar:** «Forklar prinsippet for anodisk stripping-voltammetri og hvorfor metoden
  er så følsom. Presiser hvordan den skiller seg fra potensiometri» (F7-vaksine).
- **Typiske feil:** **F7** (påstå at voltammetri måler ved null strøm — eksplisitt nullet),
  F12 (elektrolabil fraksjon upresist definert), glemme avlufting.
- **Kvote:** 16 quiz / 20 flashcards.

#### Kapittel 6.3: Speciering, elektrolabil og biotilgjengelig fraksjon — og prøvetaking
**id:** `kj2050-6-3` · **number:** 6.3 · **estimatedMinutes:** 55 · **prerequisites:** `kj2050-6-2`

- **Kapitteltype:** metodekapittel (perfekt — definisjonskritisk).
- **Description:** Hva speciering er, hvordan kombinasjon av en total-metode (ICP-MS) og en
  labil-metode (voltammetri) gir bindingsform og giftighet, og prøvetaking (0,45 µm, DGT).
- **Eksamensbelegg:** Speciering/prøvetaking i praksis 4/17 (24 %) + innbakt i sjanger G
  (76 %). **Presise definisjoner belønnes; upresise straffes** (sensorkrav 7). Prioritet:
  perfekt (definisjonene), kjenne (praksis-detaljer).
- **Forkunnskaper/kryssbok:** kap. 6.2; 7.3 (ICP-MS/deteksjonsgrenser — framoverlenk).
- **Faktakontrakt:** **speciering** = å bestemme hvilke kjemiske former (fri ion, komplekser,
  partikkelbundet) et grunnstoff foreligger som; **elektrolabil fraksjon** (det voltammetri
  fanger) vs. **biotilgjengelig fraksjon** (det organismer kan ta opp) — beslektet, ikke
  identisk; hvorfor **total-metode (ICP-MS/AAS) + labil-metode (voltammetri)** til sammen
  gir speciering og et mål på giftighet; **filtrert (0,45 µm)** «løst» vs. ufiltrert «total»;
  **DGT** som passiv, tidsintegrerende prøvetaking av labil fraksjon.
- **Reaksjonsligninger:** ikke sentrale — men koble kompleksbinding til redusert labilitet/
  biotilgjengelighet.
- **Prosedyre-momentliste:** ta prøve → del i filtrert (0,45 µm) og ufiltrert → mål total med
  ICP-MS og labil med voltammetri/DGT → tolk differansen som kompleksbundet/ikke-labil andel.
- **Interferenser:** kontaminering ved prøvetaking; endring av speciering ved lagring
  (surgjøring endrer former).
- **Modellsvar:** «Definer speciering, elektrolabil og biotilgjengelig fraksjon, og forklar
  hvordan du kombinerer ICP-MS og voltammetri for å si noe om et metalls giftighet i vann.»
- **Typiske feil:** **F12** (upresise definisjoner — den dyreste her), blande elektrolabil og
  biotilgjengelig, glemme filtrering/DGT-poenget.
- **Kvote:** 16 quiz / 20 flashcards.

**Prøve-kvote Del 6:** 4 prøver (6.A potensiometri/ISE — null strøm, pH-glasselektrode,
påstandsgjengangerne · 6.B voltammetri/stripping — prinsipp + F7-presiseringen · 6.C
speciering — definisjoner + metodekombinasjon + prøvetaking · 6.D samlet elektroanalyse på
eksamensnivå med deteksjonsgrense-sammenligning).

### Del 7 — Spektroskopi: AAS, ICP-MS og spektrofotometri *(prioritet: PERFEKT for AAS / KUNNE for spektrofotometri)*

#### Kapittel 7.1: Molekylabsorpsjon og Beer–Lambert — spektrofotometrisk jern
**id:** `kj2050-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `kj2050-1-2`

- **Kapitteltype:** metodekapittel (kunne — med minicalc).
- **Description:** Beer–Lambert-loven, kalibreringskurve, og spektrofotometrisk Fe med
  tiocyanat — det ene benet i jern-trekanten som testes med Beer–Lambert.
- **Eksamensbelegg:** Spektrofotometri/Beer–Lambert i 9/17 sett (53 %, sjanger F/G), nesten
  alltid koblet til Fe–tiocyanat. Sensorkrav 4. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 1.2; [Spektroskopi - introduksjon](/bok/kjemi2/kjemi2-9-3).
- **Faktakontrakt:** **Beer–Lambert** $A = \varepsilon b c = -\log T$, $T = P/P_0$; lineær
  kalibreringskurve (absorbans mot konsentrasjon); molar absorptivitet $\varepsilon$;
  spektrofotometrisk Fe: **Fe³⁺ + tiocyanat → rødt $[\text{Fe(SCN)}_n]^{3-n}$-kompleks**,
  måles ved ~480 nm, sterkt surt for å hindre hydrolyse av Fe³⁺; transmittansfeilens minimum
  (moderat absorbans gir best presisjon).
- **Reaksjonsligninger:** $\text{Fe}^{3+} + n\,\text{SCN}^- \rightarrow [\text{Fe(SCN)}_n]^{3-n}$.
- **Regnekontrakt (minicalc):** finn $c$ fra $A$ og kalibreringskurve/$\varepsilon b$; regn
  om mellom $A$ og $T$.
- **Prosedyre-momentliste:** surgjør → tilsett tiocyanat-overskudd → mål absorbans ved 480 nm
  → les av mot kalibreringskurve.
- **Interferenser:** andre fargede ioner; ustabilt kompleks (overskudd tiocyanat stabiliserer);
  hydrolyse av Fe³⁺ ved for høy pH.
- **Modellsvar:** «Beskriv spektrofotometrisk bestemmelse av jern med tiocyanat, og forklar
  hvordan du bruker en kalibreringskurve.»
- **Typiske feil:** F11 (siffer/enhet, blande $A$ og $T$), F5, glemme surt miljø.
- **Kvote:** 16 quiz / 20 flashcards.

#### Kapittel 7.2: Atomabsorpsjonsspektroskopi (AAS) — flamme vs. flammeløs
**id:** `kj2050-7-2` · **number:** 7.2 · **estimatedMinutes:** 55 · **prerequisites:** `kj2050-7-1`

- **Kapitteltype:** metodekapittel (perfekt).
- **Description:** Atomisering i flamme vs. grafittovn, Beer-lignende absorpsjon, og hvorfor
  flammeløs/elektrotermisk AAS er mer følsom — kjernen i den instrumentelle oversikten.
- **Eksamensbelegg:** AAS i 12/17 sett (71 %, sjanger G). Sensorkrav 6, 8. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 7.1 (Beer-prinsippet).
- **Faktakontrakt:** AAS måler absorpsjon av element-spesifikt lys av frie atomer;
  **hulkatodelampe** gir linjespekter; **flamme-AAS** (kontinuerlig forstøvning, kortere
  oppholdstid) vs. **flammeløs/elektrotermisk (grafittovn)** — hele prøven atomiseres, lengre
  oppholdstid → **høyere følsomhet** (ppb); Beer-lignende $A = \varepsilon b c$; deteksjonsgrense
  ~ppb (grafittovn lavere enn flamme).
- **Reaksjonsligninger:** ikke sentrale (atomisering, ikke kjemisk reaksjon i vanlig forstand).
- **Prosedyre-momentliste:** velg hulkatodelampe for elementet → atomiser (flamme/grafittovn)
  → mål absorbans → kvantifiser mot standarder/standardaddisjon.
- **Interferenser:** kjemiske interferenser (feste-forbindelser); bakgrunnsabsorpsjon
  (Zeeman-/deuteriumkorreksjon `(verifiser)`); ionisering.
- **Modellsvar:** «Beskriv prinsippet for AAS og forklar hvorfor grafittovn er mer følsom enn
  flamme.»
- **Typiske feil:** F12 (upresist prinsipp), F5 (glemme interferens), blande AAS og emisjon.
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 7.3: ICP-MS og den instrumentelle deteksjonsgrense-sammenligningen
**id:** `kj2050-7-3` · **number:** 7.3 · **estimatedMinutes:** 55 · **prerequisites:** `kj2050-7-2`

- **Kapitteltype:** metodekapittel (perfekt — integrerer sjanger G).
- **Description:** ICP-MS-prinsippet (Ar-plasma, kvadrupol, m/z, isotopinformasjon) og den
  faste deteksjonsgrense-tabellen (AAS / ICP-MS / voltammetri / potensiometri) sensor ber om.
- **Eksamensbelegg:** ICP-MS i 10/17 sett (59 %); deteksjonsgrense-tabellen etterspørres
  direkte (sjanger G, sensorkrav 8). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 7.2; 6.2 (voltammetri), 6.1 (potensiometri) — for
  sammenligningstabellen.
- **Faktakontrakt:** **ICP-MS** — Ar-plasma (~6000–10000 K) ioniserer prøven, ionene separeres
  på **masse/ladning (m/z)** i kvadrupol, teller ioner → ppt–ppb, gir **isotopinformasjon**;
  multielement og svært følsom; **deteksjonsgrense-tabell** (omtrentlig): potensiometri/ISE
  ~$10^{-6}$ M, AAS ppb, ICP-MS ppt–ppb, stripping-voltammetri ned til ng/L; metodevalg etter
  følsomhet, multielement-behov, isotop-/spesieringsbehov, kostnad.
- **Reaksjonsligninger:** ikke sentrale (ionisering).
- **Prosedyre-momentliste:** forstøv prøve i plasma → ioniser → separer på m/z → tell → kvantifiser.
- **Interferenser:** isobare/polyatomiske interferenser (f.eks. $^{40}\text{Ar}^{16}\text{O}$ på
  $^{56}\text{Fe}$ `(verifiser)`); matrikseffekter; kollisjonscelle som mottiltak.
- **Modellsvar:** «Sett opp en deteksjonsgrense-tabell for AAS, ICP-MS, voltammetri og
  potensiometri, og begrunn hvilken metode du velger for sporanalyse av bly i drikkevann.»
- **Typiske feil:** F8-slektning (feil deteksjonsgrense-størrelsesorden), F12, blande ICP-MS
  med ICP-OES/AAS.
- **Kvote:** 16 quiz / 20 flashcards.

**Prøve-kvote Del 7:** 4 prøver (7.A Beer–Lambert + spektrofotometrisk Fe — regning +
prosedyre · 7.B AAS — prinsipp, flamme vs. grafittovn, interferenser · 7.C ICP-MS +
deteksjonsgrense-tabellen · 7.D samlet instrumentell oversikt + metodevalg med begrunnelse).

### Del 8 — Separasjon og kromatografi *(prioritet: KUNNE)*

#### Kapittel 8.1: Kromatografiske grunnbegreper — platetall og oppløsning
**id:** `kj2050-8-1` · **number:** 8.1 · **estimatedMinutes:** 50 · **prerequisites:** `kj2050-1-1`

- **Kapitteltype:** metodekapittel (kunne — med minicalc).
- **Description:** Fordeling mellom stasjonær og mobil fase, platetall $N$, og oppløsning
  $R_s \propto \sqrt{N}$ — de faste kromatografi-formlene og avkrysningspåstandene.
- **Eksamensbelegg:** Kromatografi i 7/17 sett (41 %, sjanger J), «kort»; platetall og
  $R_s \propto \sqrt{N}$ er faste K-påstander. Sensorkrav 4. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 1.1; [Kromatografi - prinsipper](/bok/kjemi2/kjemi2-9-1).
- **Faktakontrakt:** kromatografi = separasjon ved **fordeling mellom stasjonær og mobil
  fase**; retensjonstid $t_R$; **platetall** $N = 16(t_R/w)^2 = 5{,}54(t_R/w_{1/2})^2$ (mål på
  effektivitet); **oppløsning** $R_s$ og at $R_s \propto \sqrt{N}$ (dobling av $R_s$ krever
  firedobling av $N$); kapasitetsfaktor (kort).
- **Reaksjonsligninger:** ikke sentrale.
- **Regnekontrakt (minicalc):** regn $N$ fra $t_R$ og $w$ (eller $w_{1/2}$); resonner om $R_s$
  ved endret $N$.
- **Interferenser:** overlappende topper (lav $R_s$); topp-tailing.
- **Modellsvar:** «Regn ut platetallet fra et kromatogram og forklar hva som skjer med
  oppløsningen om du firedobler kolonnelengden.»
- **Typiske feil:** F11 (siffer/enhet), bruke feil toppbreddemål ($w$ vs. $w_{1/2}$), glemme
  kvadratrotforholdet.
- **Kvote:** 14 quiz / 16 flashcards.

#### Kapittel 8.2: Kvantifisering og ionebytte
**id:** `kj2050-8-2` · **number:** 8.2 · **estimatedMinutes:** 45 · **prerequisites:** `kj2050-8-1`

- **Kapitteltype:** metodekapittel (kunne).
- **Description:** Kvantifisering med ekstern standard, og ionebyttere (anion-/kationbyttere)
  som separasjons- og opprensingsverktøy.
- **Eksamensbelegg:** Del av kromatografi-sjangeren (J); ekstern standard og ionebytte er
  faste innslag. Sensorkrav 4, 6. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 8.1; [Kromatografiske metoder](/bok/kjemi2/kjemi2-9-2).
- **Faktakontrakt:** **ekstern standard** (kalibreringskurve av toppareal mot konsentrasjon)
  vs. intern standard (kort); **ionebyttere** — kationbytter (sur, bytter kationer),
  anionbytter (basisk, bytter anioner) — til separasjon, opprensing og avsalting; et konkret
  eksempel (f.eks. toluen i bensin med ekstern standard).
- **Reaksjonsligninger:** ionebytte (skjematisk $\text{R–H} + \text{M}^+ \rightarrow \text{R–M} + \text{H}^+$).
- **Regnekontrakt (minicalc):** konsentrasjon fra toppareal via ekstern standard.
- **Prosedyre-momentliste:** lag standardkurve → analyser prøve → les av; for ionebytte:
  velg riktig bytter → eluer → samle fraksjon.
- **Interferenser:** matrikseffekter (derav evt. intern/standardaddisjon); ufullstendig bytte.
- **Modellsvar:** «Forklar kvantifisering med ekstern standard og hvordan en kationbytter
  kan brukes til å fjerne forstyrrende metallioner før analyse.»
- **Typiske feil:** F11, blande anion-/kationbytter, forveksle ekstern og intern standard.
- **Kvote:** 12 quiz / 14 flashcards.

**Prøve-kvote Del 8:** 4 prøver (8.A platetall og oppløsning — regning + $R_s\propto\sqrt N$ ·
8.B ekstern standard-kvantifisering · 8.C ionebytte — anion/kation, bruksområde · 8.D samlet
kromatografiprøve på eksamensnivå).

### Del 9 — Statistikk, feilanalyse og laboratoriesikkerhet *(prioritet: KJENNE — voksende)*

#### Kapittel 9.1: Feilstatistikk — gjennomsnitt, standardavvik, t-test og uteligger
**id:** `kj2050-9-1` · **number:** 9.1 · **estimatedMinutes:** 55 · **prerequisites:** `kj2050-1-1`

- **Kapitteltype:** metodekapittel (regnekapittel-DNA B — minicalc).
- **Description:** Å regne gjennomsnitt, median og standardavvik, vurdere en uteligger
  (Q-/t-test) og oppgi relativ feil — det nye, voksende databehandlingstemaet.
- **Eksamensbelegg:** Statistikk/feilanalyse i 1/17 (6 %, ny 2012, sjanger L), men **klart
  voksende** (NTNUs HSE-dreining + prosjektkomponenten). Sensorkrav 4. Prioritet: kjenne
  (men dekkes solid — se ærlighetsforbeholdet).
- **Forkunnskaper/kryssbok:** kap. 1.1 (signifikante siffer); [Usikkerhet og feilkilder](/bok/kjemi1/kjemi1-12-2).
- **Faktakontrakt:** **gjennomsnitt** $\bar{x}$, **median**, **standardavvik** $s$, relativt
  standardavvik; **t-test** for om et gjennomsnitt avviker signifikant fra en sann verdi
  (kritisk $|t|$ fra DATA-boks/tabell — gis); **uteligger-vurdering** (Q-test eller t-basert:
  er en verdi en outlier ved 95 %?); beregn gjennomsnitt/$s$ med og uten uteligger; **relativ
  feil** $=(\text{målt}-\text{sann})/\text{sann}$; signifikante siffer.
- **Reaksjonsligninger:** ingen.
- **Regnekontrakt (minicalc):** $\bar{x}$, $s$, t-/Q-test mot kritisk verdi (gis), relativ
  feil, med/uten uteligger.
- **Interferenser:** ikke relevant.
- **Modellsvar:** «En måleserie har en mistenkt uteligger. Vurder med Q-test (kritisk verdi
  gitt) om den skal forkastes, og oppgi gjennomsnitt og standardavvik med og uten den.»
- **Typiske feil:** F11 (siffer/enhet), bruke feil kritisk verdi, forkaste uteligger uten test.
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 9.2: Laboratoriesikkerhet og risikovurdering
**id:** `kj2050-9-2` · **number:** 9.2 · **estimatedMinutes:** 40 · **prerequisites:** `kj2050-0-1`

- **Kapitteltype:** metodekapittel (kjenne — kompakt).
- **Description:** H-/P-setninger (tidligere R/S), faresymboler og risikominimering — det nye
  HMS-innslaget som NTNUs profil og prosjektkomponenten løfter.
- **Eksamensbelegg:** HMS/risikovurdering i 1/17 (6 %, ny 2012, sjanger L); forventet økende.
  Prioritet: kjenne.
- **Forkunnskaper/kryssbok:** kap. 0.1; [Laboratoriesikkerhet og metoder](/bok/kjemi1/kjemi1-12-1).
- **Faktakontrakt:** **H-setninger** (faresetninger, f.eks. H302 «farlig ved svelging», H314/
  H315 «etsende/irriterer hud») og **P-setninger** (sikkerhetssetninger) — avløste de eldre
  **R-/S-setningene**; faresymboler/GHS-piktogrammer; sikkerhetsdatablad; risikovurdering =
  identifisere fare → vurdere eksponering → tiltak (avtrekk, verneutstyr, substitusjon,
  mengdereduksjon); avfallshåndtering.
- **Reaksjonsligninger:** ikke sentrale (evt. eksempel på farlig reaksjon).
- **Prosedyre-momentliste:** les sikkerhetsdatablad → tolk H-/P-setninger → velg tiltak →
  dokumenter risikovurdering.
- **Interferenser:** ikke relevant.
- **Modellsvar:** «Du skal arbeide med konsentrert saltsyre. Tolk de relevante H-/P-setningene
  og gjør rede for tre tiltak som minimerer risikoen.»
- **Typiske feil:** blande H- og P-setninger, forveksle gammel (R/S) og ny (H/P) merking.
- **Kvote:** 12 quiz / 14 flashcards.

**Prøve-kvote Del 9:** 4 prøver (9.A gjennomsnitt/median/standardavvik + relativ feil ·
9.B t-test og uteligger (Q-test) med kritisk verdi · 9.C H-/P-setninger og faresymboler ·
9.D risikovurdering — identifiser fare og foreslå tiltak).

### Del 10 — Eksamenstrening

#### Kapittel 10.1: Metodesammenligning — jern med tre teknikker og metodevalg
**id:** `kj2050-10-1` · **number:** 10.1 · **estimatedMinutes:** 60 · **prerequisites:** `kj2050-7-1`

- **Kapitteltype:** sjangerdrill (sjanger F — metodesammenligning).
- **Description:** Samme prøve, tre metoder for jern (spektrofotometri / gravimetri /
  redokstitrering) satt opp mot hverandre — og den generelle metodevalg-tenkningen sensor
  belønner (sensorkrav 6).
- **Eksamensbelegg:** Jern-trekanten i 5–6/17 (sjanger F), nesten alltid koblet til
  Beer–Lambert; «sammenlign metoder eksplisitt» er et gjennomgående sensorkrav. Prioritet:
  perfekt (meta).
- **Forkunnskaper/kryssbok:** 7.1 (spektrofotometri), 4.1 (gravimetri), 5.5 (redokstitrering).
- **Innhold:** `text` **Sammenligningsrammen** (følsomhet, presisjon, selektivitet,
  deteksjonsgrense, prøvemengde, tids-/kostnadsbruk, automatiseringsegnethet); `example`
  full trekantsammenligning av Fe med de tre metodenes reaksjonsligninger, prosedyrer og
  interferenser side om side + eksplisitt avveining; `exercise` = «velg og begrunn metode
  for gitt scenario» (spor vs. hovedbestanddel, felt vs. lab, mange prøver vs. én).
- **Typiske feil:** F6 (beskrive isolert i stedet for å avveie), F5 (glemme interferens per
  metode), gi to beskrivelser uten sammenligning.
- **Kvote:** 12 quiz / 10 flashcards.

#### Kapittel 10.2: Påstandsbanken — riktig/galt-oppgaven
**id:** `kj2050-10-2` · **number:** 10.2 · **estimatedMinutes:** 55 · **prerequisites:** `kj2050-0-1`

- **Kapitteltype:** sjangerdrill (sjanger K — påstandsbank med fasit).
- **Description:** De sterkt resirkulerte riktig/galt-påstandene (2007–2012) samlet med
  puggfasit og kort begrunnelse — den faste ~10-poengsdelen.
- **Eksamensbelegg:** Avkrysningsoppgaven fast fra 2007 (~10 p); samme utsagn går igjen om
  potensiometri, ISE, KSCN, pH-glasselektrode, DGT, platetall, hardhet. Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** hele boka (Del 6 særlig).
- **Innhold:** `text` **Strategi** (ingen minuspoeng-forbehold `(verifiser mot gjeldende
  ordning)`; les presist, se etter «alltid/aldri/uavhengig»); `definition`/`collapsible`
  **Påstandsfasit** — tematiske puggekort med riktig/galt + begrunnelse for gjengangerne:
  potensiometri måler ved ~null strøm (**riktig**); ISE deteksjonsgrense ~$10^{-6}$ M
  (**riktig**), logaritmisk respons (**riktig**), temperaturuavhengig (**galt**);
  pH-glasselektrode gir «for høy pH» i sterkt basisk (**galt** — alkali-feil gir for lav);
  indre løsning i pH-elektrode = 0,1 M NaOH (**galt** — klorid-/bufferløsning); KSCN
  primærstandard (**galt** — sekundær); hardhet = sum Ca+Mg via EDTA (**riktig**);
  $R_s \propto \sqrt{N}$ (**riktig**); AgNO₃-fellingstitrering for kationer (**galt** — for
  anioner); voltammetri måler ved null strøm (**galt** — det er potensiometri); `exercise` =
  nyskrevne riktig/galt-serier med begrunnet fasit.
- **Typiske feil:** F7 (potensiometri/voltammetri), F4 (KSCN), F12 (definisjoner), lese
  «uavhengig/alltid» upresist.
- **Kvote:** 20 quiz / 16 flashcards.

#### Kapittel 10.3: Reaksjonslignings-drill — «ligninger er valuta»
**id:** `kj2050-10-3` · **number:** 10.3 · **estimatedMinutes:** 55 · **prerequisites:** `kj2050-5-1`

- **Kapitteltype:** sjangerdrill (reaksjonsligninger på tvers av metodene).
- **Description:** Alle de sentrale balanserte reaksjonsligningene fra boka samlet og drillet
  — fordi de deskriptive metodeoppgavene premieres tungt på korrekte ligninger.
- **Eksamensbelegg:** Sensorkrav 1 (gjennomgående). Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** Del 2–7.
- **Innhold:** `text` **Balanseringsrutinen** (halvreaksjoner; ladnings-/massebalanse);
  `definition`/`collapsible` **Ligningsbank** (flashcard-kilde): iodat-innstilling,
  I₃⁻/tiosulfat, iodometrisk Cu, dikromat/Fe²⁺, EDTA-kompleksdannelse og indikatoromslag,
  Mohr/Volhard-endepunkter, Fe(OH)₃→Fe₂O₃-gløding, AgCl/BaSO₄-felling, elektrogravimetrisk
  Cu-elektroder, karbonat/CO₂; `exercise` = «balanser og forklar rollen» for hver.
- **Typiske feil:** F3 (iod-ligninger), ubalansert ladning/masse, glemme fase-/tilstandssymboler.
- **Kvote:** 16 quiz / 28 flashcards.

#### Kapittel 10.4: Øvingseksamen 1 (komplett 4-timers sett)
**id:** `kj2050-10-4` · **number:** 10.4 · **estimatedMinutes:** 90 · **prerequisites:** `kj2050-10-3`

- **Kapitteltype:** øvingseksamen.
- **Description:** Et komplett, nyskrevet sett i 2006–2012-malen: 4–6 hovedoppgaver med
  DATA-bokser, én EDTA-titrerfeil-beregning, deskriptive metodeoppgaver og en riktig/galt-
  oppgave (~10 p), ~100 p, 4 t, kun kalkulator.
- **Innhold:** temafordeling som en «typisk» eksamen — én EDTA-titrerfeil (metall varierer,
  DATA-boks), én–to deskriptive metodeoppgaver (iodometrisk Cu / gravimetrisk eller
  elektrogravimetrisk Cu/Fe), én instrumentell oversikt + speciering med deteksjonsgrense-
  tabell, én kompleksometri/hardhet-prosedyre, én riktig/galt-oppgave (~10 p), pluss et
  ENTEN/ELLER-valg (syre-base vs. EDTA); `collapsible` full løsning per oppgave (modellsvar
  slik sensor vil se det: ligninger, prosedyretrinn, interferenser, prosentsvar + kommentar);
  `tip` **Sensorblikket** (poengføring, hvor delpoengene faller, hva som skiller bestått fra topp).
- **Kvote:** 6 quiz / 2 flashcards.

#### Kapittel 10.5: Øvingseksamen 2 (komplett 4-timers sett)
**id:** `kj2050-10-5` · **number:** 10.5 · **estimatedMinutes:** 90 · **prerequisites:** `kj2050-10-4`

- **Kapitteltype:** øvingseksamen.
- **Description:** Andre komplette sett med en annen, men fortsatt typisk, profil (annet
  titrerfeil-metall, andre metodeoppgaver) — viser variasjonen uten å endre pensumbredden.
- **Innhold:** som 10.4, men med tyngre vekt på iod-/redoks og gravimetri, titrerfeil med
  interferensvariant (medtitrering), og en riktig/galt-oppgave med nye påstander; full
  DATA-boks-basert løsning + Sensorblikket.
- **Kvote:** 6 quiz / 2 flashcards.

#### Kapittel 10.6: Øvingseksamen 3 (komplett 4-timers sett)
**id:** `kj2050-10-6` · **number:** 10.6 · **estimatedMinutes:** 90 · **prerequisites:** `kj2050-10-5`

- **Kapitteltype:** øvingseksamen.
- **Description:** Tredje komplette sett, vektlagt mot den instrumentelle blokken + de nyere
  temaene (statistikk/HMS) for å speile dagens dreining — med ærlighetsmerknad om at reelle
  nyere sett må skaffes i byggefasen.
- **Innhold:** som 10.4/10.5, med en instrumentell oversikt + speciering som tyngste oppgave,
  en statistikk-/feilanalyseoppgave (t-/Q-test) og et HMS-innslag, pluss titrerfeil og
  riktig/galt. Full løsning + Sensorblikket med A/B/C-terskelbeskrivelse.
- **Kvote:** 6 quiz / 2 flashcards.

---

## 4. Kvotesammendrag (AUTORITATIV for alle senere faser)

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 1 | 10 | 10 | 0 (dekkes av øvingseksamenene) |
| 1 | 3 | 46 | 58 | 4 |
| 2 | 5 | 84 | 114 | 4 |
| 3 | 2 | 32 | 24 | 4 |
| 4 | 4 | 62 | 78 | 4 |
| 5 | 5 | 78 | 104 | 4 |
| 6 | 3 | 48 | 62 | 4 |
| 7 | 3 | 48 | 62 | 4 |
| 8 | 2 | 26 | 30 | 4 |
| 9 | 2 | 28 | 30 | 4 |
| 10 | 6 | 66 | 60 | 0 (= 3 øvingseksamener) |
| **Sum** | **36** | **532 ✓ (≥500)** | **632 ✓ (≥500)** | **36 + 3 øvingseksamener** |

Summeringskontroll per del (quiz / flashcards):
- Del 0: 10 / 10
- Del 1: 16+16+14 = **46** / 22+20+16 = **58**
- Del 2: 16+14+20+20+18 = **84** / 20+16+26+28+24 = **114**
- Del 3: 18+14 = **32** / 14+10 = **24**
- Del 4: 18+16+16+12 = **62** / 24+22+20+12 = **78**
- Del 5: 16+18+18+14+12 = **78** / 20+26+26+18+14 = **104**
- Del 6: 16+16+16 = **48** / 22+20+20 = **62**
- Del 7: 16+16+16 = **48** / 20+22+20 = **62**
- Del 8: 14+12 = **26** / 16+14 = **30**
- Del 9: 16+12 = **28** / 16+14 = **30**
- Del 10: 12+20+16+6+6+6 = **66** / 10+16+28+2+2+2 = **60**
- **Totalt: 532 quiz / 632 flashcards.**

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvens og natur: nivå-1-delene 2, 4 og 5 (kompleksometri/EDTA,
gravimetri, iod-/redoks — 94/76/76 %) bærer 224 av 532 quiz og 296 av 632 flashcards.

**Flashcard-profilen er bevisst høy (632, godt over gulvet 500)** fordi faget er
metode-/reagens-/reaksjonslignings-rikt og eksamen er uten oppslagsverk: hvert delkapittels
Metode- og reagensliste er en naturlig flashcard-kilde. Korttyper: **reaksjonsligning-kort**
(ledetekst → balansert ligning: «iodat + iodid i surt» → $\text{IO}_3^- + 8\text{I}^- + 6\text{H}^+ \rightarrow 3\text{I}_3^- + 3\text{H}_2\text{O}$),
**reagens↔rolle** (KSCN → skarpere endepunkt ved iodometrisk Cu; urea → depolarisator i
elektrogravimetri; stivelse → iod-indikator), **indikator↔metode↔omslag** (EBT → EDTA-hardhet
→ rødt→blått; mureksid → Ca; kromat → Mohr; Fe³⁺ → Volhard), **buffer↔pH↔metode**
(ammoniumbuffer pH 10 → Ca+Mg; sterk base pH 12 → Ca alene), **standard-status** (KIO₃/K₂Cr₂O₇/
Na₂CO₃ primær; tiosulfat/KSCN/HCl/NaOH sekundær), **deteksjonsgrense-tall** (ISE $10^{-6}$ M,
AAS ppb, ICP-MS ppt–ppb, voltammetri ng/L), **definisjonskort** (speciering, elektrolabil vs.
biotilgjengelig, iodometri vs. iodimetri, ekvivalens vs. endepunkt) og **prosedyretrinn-
sekvenser**. **Quiz-profilen:** nabobegrep-distraktorer (iodometri/iodimetri, potensiometri/
voltammetri, okklusjon/adsorpsjon, over-/undertitrert, primær/sekundær, ekvivalens/endepunkt,
elektrolabil/biotilgjengelig) + riktig/galt-påstander (sjanger K-trening) + titrerfeil-
mekanikk-spørsmål.

### Prøver (4 per temadel, 36 totalt)

Fire prøver per temadel (Del 1–9). Hver prøve speiler eksamensmalen i miniatyr: en blanding
av deskriptive metode-/reaksjonslignings-oppgaver (med momentliste-fasit), regnesjangeren der
den hører hjemme (DATA-boks), og riktig/galt-innslag. Omfang 25–45 min. Alle oppgaver
NYSKREVNE. Prøvekapittel-id `kj2050-<del>-prove`, chapterNumber `<del>.P` (jf. BYGGEKONTRAKT).
Del 0 og Del 10 har ingen egen prøve (Del 10s tre øvingseksamener dekker helheten).
Prøvetitlene er spesifisert per del under §3.

### Komplette øvingseksamener (3 — kapitlene 10.4–10.6)

Tre nyskrevne 4-timers sett i 2006–2012-malen (kun kalkulator, DATA-bokser, 4–6 hovedoppgaver
= deskriptive metodeoppgaver + 1–2 EDTA-titrerfeil + riktig/galt ~10 p, ~100 p), med ulik men
typisk profil, full modellsvar-fasit (ligninger, prosedyrer, interferenser, prosentsvar +
kommentar) og Sensorblikket per oppgave. **Ærlighetsmerknad i alle tre:** malen bygger på
arkivet til 2012; byggefasen må skaffe nyere sett og verifisere mot gjeldende emneplan
(skriftlig 60 % + prosjekt 40 %). Til sammen dekker de tre settene sjangrene A–L minst én gang.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (4 t skriftlig, kun kalkulator, DATA-boks-regelen, 4–6
   hovedoppgaver + riktig/galt), ærlighetsforbeholdet (arkiv til 2012; dagens ordning 60 %
   skriftlig + 40 % prosjekt) og prognosen (fra kap. 0.1).
2. **Prioriteringskartet** — temafrekvens-tabellen som tre lesenivåer: *perfekt*
   (kompleksometri/EDTA + titrerfeil, gravimetri/medfelling, iod-/redokstitrering,
   voltammetri + speciering, AAS), *kunne* (syre-base m/CO₂-feil, spektrofotometrisk Fe,
   potensiometri/ISE, fellingstitrering, kromatografi), *kjenne* (statistikk, HMS,
   løselighetsprodukt, ikke-iod-redoks, coulometri-nivå).
3. **Sjangerguiden** — oppgavetypene A–L med løsningsoppskriftene (titrerfeil-oppskriften
   fra Del 3; deskriptiv-metode-malen: faktakontrakt → ligninger → prosedyre → interferenser
   → sammenligning; metodevalg-rammen fra 10.1) i kortform.
4. **Reaksjonslignings-arket** — alle de sentrale balanserte ligningene samlet (fra 10.3),
   siden «ligninger er valuta» og ingen formelsamling deles ut.
5. **Sensorreglene** — de åtte sensorkravene (§2) + karakterskille-listen (bestått: klassiske
   prosedyrer i grove trekk, riktig størrelsesorden på titrerfeil; midtsjikt: korrekte
   ligninger + fullstendige prosedyrer + betinget konstant + interferenser; topp: pH-
   avhengighet ($\alpha$, $K'$) og interferenser kvantitativt, skarp metodesammenligning,
   presise definisjoner, tolkede tallsvar).
6. **Feilkatalogen** — de tolv typiske feilene (F1–F12) samlet, hver med henvisning til
   kapitlet som forebygger den (F1 betinget konstant → 1.3/3.1; F3 iodometri/iodimetri →
   5.2; F4 primær/sekundær → 1.1/5.2; F7 potensiometri/voltammetri → 6.1/6.2; F8 medfelling
   → 4.2; F9 nitrat/HgCl₂ → 5.3/5.5; F10 pH/buffer → 2.3/2.4).
7. **DATA-boks-disiplinen i praksis** — hva som *gis* (K, Ksp, E°, formelvekter, $K_w$,
   $\alpha$/$K_a$) vs. hva som *må sitte* (metodevalg, prosedyre, buffer/indikator,
   balansering, titrerfeiluttrykk); treningsråd: løs alltid regneoppgaver ved å hente
   verdiene fra en oppgitt DATA-boks, aldri fra hukommelse.
8. **Studieløp** — anbefalt progresjon (10-ukers og 3-ukers intensivvariant): Del 0 → 1 → 2 →
   3 (titrerfeil-drill tidlig og repetert) → 4 → 5 → 6 → 7 → 8 → 9; påstandsbanken (10.2) og
   reaksjonslignings-drillen (10.3) spres utover hele løpet; øvingseksamenene de tre siste
   ukene under tidspress (240 min, med DATA-boks ved siden av).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først:** `TextbookCourse`-oppføring for `kj2050` (mønster `COURSE_BI_OKONOMI`,
   skrives til `textbook-courses-hoyskole.ts`): id `kj2050`, title, `level: 'Høyskole'`, alle
   36 kapitler med id/number/title/description/estimatedMinutes/topics/competenceGoals/
   prerequisites fra dette skjelettet, `sectionNames` fra §2-tabellen (obligatorisk — ellers
   viser bokforsiden «Seksjon N»).
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–L, DATA-boks-regelen, frekvenstallene og
   ærlighetsforbeholdet som resten av boka refererer til.
3. **Del 1 → Del 2 → Del 3** (avhengighetskjeden: grunnlag/betinget konstant → kompleksometri
   → titrerfeil-drill). Del 3 forutsetter 1.3 og 2.3.
4. **Del 4 → Del 5** (gravimetri; redoks/iod — 5.1 før resten av Del 5) → **Del 6 → Del 7**
   (elektroanalyse før/parallelt med spektroskopi; 6.2/6.3 og 7.3 deler deteksjonsgrense-
   sammenligningen — bygg 6 før 7 så 7.3 kan referere bakover) → **Del 8 → Del 9**.
5. **Del 10 til slutt** — metodesammenligning, påstandsbank, reaksjonslignings-drill og de
   tre øvingseksamenene gjenbruker HELE boka; bygges av én agent som leser hele skjelettet.
6. **Prøver** (`kj2050-<del>-prove`, chapterNumber `<del>.P`) etter at delens kapitler finnes;
   prøvetitlene er gitt per del i §3.
7. **Narrativ-versjoner** (`<id>-narrativ.json` per kapittel, jf. `/narrativ`) og
   quiz-staging registreres etter hvert som kapitlene ferdigstilles — endelig blokk-/staging-
   skjema fastsettes i BYGGEKONTRAKT.md (fase 3). Kvotene fra kvotesammendraget (§4) er fasit.

Per metodekapittel gjelder **kapittel-DNA A** (§2): tip Eksamensvinkel → text Forkunnskaper +
collapsible Metode- og reagensliste → text Oversikt → definition Faktakontrakt (flashcard-
kilden — toppnivå med title!) → theorem/text Reaksjonsligninger → text Prosedyre-momentliste
→ text Interferenser → example Modellsvar → warning Typiske feil → exercise ×6–10 → collapsible
Repetisjon. Regnekapitlene (3.1, 3.2, og minicalc-tunge kapitler) følger **kapittel-DNA B**.
Eksamensvinkel- og Typiske feil-blokkene fylles med belegget og feilkodene fra dette
skjelettet — forfatteren skal IKKE finne på frekvenstall.

### Verifikasjonssjekkliste (kjøres FØR ferdigmelding)

- [ ] **JSON-validering:** alle nye `src/lib/data/chapters/kj2050-*.json` parser med
      `json.load` (generer via `json.dump` — LaTeX-`\\`-fellen). `npm run build` grønn — vis output.
- [ ] **Metadata-konsistens:** alle 36 kapittel-id-er har eksisterende content-fil; `number`
      er del-basert («5.3», ALDRI lineær); prosareferanser bruker samme form («kap. 5.3»);
      prerequisites peker på eksisterende id-er (og bakover); `sectionNames` satt; narrativ-
      id-er registrert slik at toggle rendrer (verifiser med prod-server + curl at
      narrativ-ruter gir 200).
- [ ] **Kjemisk presisjon / `(verifiser)`-markeringer:** grep `-i verifiser` — alle markerte
      detaljer (kaliumhydrogenftalat-standard, cellespenning ~2–4 V, ureas ligning,
      HgCl₂-ligning, maskeringsreagenser (cyanid/fluorid), Volhard-nitrobenzen, TISAB,
      Zeeman/deuterium-bakgrunnskorreksjon, ArO-interferens på Fe, interferensledd-fortegn i
      3.2, minuspoeng-forbeholdet i 10.2) fagfellesjekkes i fase 6 mot standard analytisk-
      kjemi-pensum (f.eks. Harris/Skoog). **INGEN oppdiktede tallverdier** — verdier
      presenteres som «gitt i DATA-boks».
- [ ] **Reaksjonsligninger balansert:** hver sentral ligning (iodat-innstilling,
      I₃⁻/tiosulfat, iodometrisk Cu, dikromat/Fe²⁺, EDTA-kompleks + indikatoromslag,
      Mohr/Volhard, Fe(OH)₃→Fe₂O₃, AgCl/BaSO₄, elektrogravimetrisk Cu, karbonat/CO₂)
      etterregnes for ladnings- OG massebalanse. Skrevet i LaTeX ($\text{}$ for arter),
      ingen unicode-piler/-nedsenkninger.
- [ ] **DATA-boks-disiplin:** ingen K-/Ksp-/E°-/formelvekt-verdi presenteres som puggestoff;
      hver regneoppgave/eksempel har en eksplisitt DATA-boks; hvert delkapittels Metode- og
      reagensliste markerer «gis i DATA-boks» vs. «må sitte».
- [ ] **Titrerfeil-kontrakten:** Del 3 og enhver titrerfeiloppgave bruker betinget konstant
      $K' = K_{MY}\cdot\alpha_{Y^{4-}}$ (ikke rå $K_{MY}$ når pH < ~12), svar i **prosent**,
      med eksplisitt **kommentar** (god/dårlig, over-/undertitrert). Grep etter «K_MY» uten
      «betinget/α/K'» i regnekapitlene som kontroll.
- [ ] **Presisjonsfeller-vaksinene på plass:** potensiometri måler ved ~null strøm, voltammetri
      IKKE (6.1/6.2/10.2); tiosulfat/KSCN er sekundærstandarder (1.1/5.2); iodometri (indirekte)
      ≠ iodimetri (direkte) (5.2); nitrat fjernes før iodometrisk Cu, Sn²⁺ med HgCl₂ før
      dikromat (5.3/5.5); medfellingstypene ikke blandet (4.2).
- [ ] **Enhets- og sifferdisiplin:** alle tallsvar i eksempler og løsninger har enhet og
      fornuftig antall signifikante siffer — boka skal *modellere* sensorkravet (F11).
- [ ] **Kapittel-DNA:** hvert metodekapittel har Eksamensvinkel-`tip` (frekvens/vekt fra dette
      skjelettet), Forkunnskaper + `collapsible` Metode- og reagensliste, Faktakontrakt-
      `definition` (flashcard-kilde, toppnivå med title), Reaksjonsligninger, Prosedyre-
      momentliste, Interferenser, ≥1 Modellsvar-`example`, Typiske feil-`warning`, 6–10
      `exercise` med `solution` + `hints` (blandet: deskriptive + K-trening + evt. minicalc),
      Repetisjons-`collapsible`; regnekapitlene har løsningsoppskrift + DATA-boks-eksempel +
      8–12 varianter.
- [ ] **Kvotesum:** quiz ≥532 og flashcards ≥632 fordelt per kapittel som i §4 (hardt minimum
      ≥500/≥500); 4 prøver per del for Del 1–9 (36) + 3 øvingseksamener; fasit-svaralternativer
      rebalansert (jevn a/b/c/d — options[0] alltid riktig i staging, runtime stokker).
- [ ] **Leserkrav:** Forkunnskaper-blokk med kryssbok-lenker (kun til eksisterende kapitler —
      kjemi1-/kjemi2-lenkene i §3 er verifisert 7. juli 2026) + `collapsible` Metode- og
      reagensliste først i hvert kapittel; «bør kjenne til»-stoff (coulometri-nivå, avansert
      instrumentteori) plassert ETTER kjernestoffet og merket; hver oppgave sjangermerket (A–L).
- [ ] **Ærlighetsforbeholdet synlig:** Del 0 og alle tre øvingseksamener sier eksplisitt at
      kalibreringen bygger på 2001–2012-arkivet, at dagens ordning har prosjektkomponent
      (60/40), og at byggefasen må skaffe nyere sett + sjekke gjeldende emneplan/vurderingsform.
- [ ] **Opphavsrett:** alle oppgaver, DATA-bokser, case, øvingseksamener og påstandsserier er
      NYSKREVNE — ingen formuleringer fra NTNU-oppgavesett eller løsningsforslag, ingen ordrette
      fasitmomenter. Reaksjonsligninger, formler og standard fagbegreper er fritt fagstoff.
- [ ] **Verifiser rendering:** prod-server + curl mot kapittel- og narrativ-ruter (200 +
      kapittelspesifikk streng), jf. `getChapterMeta`-lærdommen. ALDRI meld ferdig uten dette.

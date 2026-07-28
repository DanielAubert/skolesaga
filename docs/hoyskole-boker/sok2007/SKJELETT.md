# Bokskjelett: SØK2007 / SOK2007 Utviklingsøkonomi — eksamensrettet lærebok

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


> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er derfor angitt her, destillert fra
> `EKSAMENSANALYSE.md` (~20 oppgavesett H2010–V2024 over tre epoker, 5
> sensorveiledninger H2017/V2018/V2015/V2016/V2021, 1 fullstendig Weil-basert
> løsningsforslag som matcher H2023). Arketype: **DNA-regnefag** (`DNA-regnefag.md`)
> for vekst-/regneblokken, med et tungt **drøftingselement** i det anvendte laget;
> for temakapitlene i Del 3–5 (bistand, handel, landbruk, institusjoner,
> metode) lånes struktur fra `DNA-drofting.md` (kjernebegrep MED pensumforankring
> → posisjoner/spenninger → anvendelse → momentliste-oppgaver), dokumentert per
> kapittel. Kapittel-DNA-ene (teori/drill/øvingseksamen fra DNA-regnefag;
> temakapittel/sjangerkapittel/modellbesvarelse fra DNA-drøfting) er obligatoriske
> og gjentas ikke her. Alle mønstereksempler i skjelettet er omskrivninger;
> forfatteren skal variere dem videre (egne tall, egne land/kontekster), aldri
> kopiere inn ordrett.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `sok2007` |
| Tittel | **SOK2007 Utviklingsøkonomi** |
| Institusjon | NTNU (Institutt for samfunnsøkonomi) |
| Level | `'Høyskole'` |
| Arketype | Regnefag (vekstmodell-/regneblokk) **med tungt drøftingselement** (anvendt utviklingsøkonomi) |
| Antall kapitler | **29** (Del 0: 1 eksamenskart · Del 1: 5 måling/ulikhet inkl. drill · Del 2: 6 vekst inkl. drill · Del 3: 3 bistand/handel · Del 4: 5 befolkning/fattigdom/landbruk/migrasjon/humankapital · Del 5: 3 moderne · Del 6: 6 eksamenstrening = 1+5+6+3+5+3+6) |
| Estimert totaltid | **2 340 min ≈ 39 timer** |
| Quiz totalt | **556** (krav ≥500) |
| Flashcards totalt | **648** (krav ≥500) |

**Pitch (ett avsnitt):** SOK2007-eksamen svarer på ett stort spørsmål — *hvorfor
er noen land fattige og andre rike, og hva kan gjøres med det?* — og har over
femten år skiftet **format** tre ganger uten å skifte **faglig kjerne**. Uansett
om oppgaven kommer som tre store deloppgaver (Todaro-Smith-epoken ~2010–2019),
fire essayspørsmål à 25 % (Green-epoken ~2020–2022), seks Weil-regneoppgaver
(H2023) eller en tredeling med flervalg + kortsvar + valgessay (V2024), står to
søyler igjen i praktisk talt hvert eneste sett: **vekstsøylen** (Solow i ~90 %,
i A-epoken kontrastert mot Harrod-Domar, i C-epoken utvidet med vekstregnskap og
endogen teknologi) og **måle-/fordelingssøylen** (BNI per innbygger som mål, HDI,
Lorenz/Gini, Kuznets — nesten sikker banker). Rundt disse roterer et **bredt
anvendt lag** der to–tre moduler trekkes inn hvert sett: bistand, handel,
befolkning/fertilitet, ernæringsfeller, landbruk/jordleie, migrasjon, humankapital
— pluss (i moderne form) institusjoner/deep determinants, markeder/asymmetrisk
informasjon og kausal inferens. Denne boka er bygget som nettopp det: **to faste
søyler + et bredt anvendt lag**, med gjennomgående **figur + modell + verbal
drøfting** — fagets jernregel. Den driller det lille, veldefinerte regneapparatet
(Solow steady state, Harrod-Domar $g = s/c - \delta$, vekstregnskap $\hat A = \hat y - \hat F$,
endogen teknologi $\hat A = \gamma_A \mu L$, Lorenz/Gini geometrisk) *og* det store
verbale repertoaret (bistandslitteraturen, sharecropping-avveiningen, hidden
momentum, deep vs. proximate determinants) — og trener studenten i å svare på
**alle tre eksamensformater** på samme faglige kjerne.

**Kritisk avgrensningsregel (gjelder HELE boka):** SOK2007 er et **anvendt,
tematisk** utviklingsøkonomiemne — ikke et matte-tungt teorifag. Sensor honorerer
mekanismen bak resultatet, ikke matematisk tyngde. Boka skal **ikke** bygge ut:
(i) **formell konsument-/produsentteori** (Lagrange-optimering, Slutsky,
kostnadsminimering) — det hører til SOK1002; utviklingsøkonomien bruker
mikroøkonomi kun *kvalitativt* (insentiver, risiko, eksternaliteter); (ii) **åpen
makro / valutakursregimer / pengeunion** — det hører til SØK2009; boka berører
handel og eksportinntekter, men ikke valutakursregimer; (iii) **detaljert
offentlig-økonomi-teori** (Ramsey-beskatning, skattekiler) — SØK2011; (iv) **tung
matematisk vekstteori** (Ramsey-Cass-Koopmans, optimal kontroll) — Solow og enkel
endogen teknologi er taket. Disse avgrensningene nevnes kun i den korte «bør
kjenne til / hører hjemme et annet sted»-merknaden i Del 0 (kap. 0.1).

**Kritisk notasjonsregel (gjelder HELE boka)** — arkivets notasjon skal brukes,
og fordi faget spenner over Todaro-Smith-epoken og Weil-epoken, skal **begge
notasjonssett vises** (ett sted, i kap. 0.1 og i vekstkapitlene):

- **Vekst (Solow/standard):** total output $Y$, kapital $K$, arbeidskraft $L$,
  teknologi/TFP $A$; per arbeider $y = Y/L$, $k = K/L$; produktfunksjon
  $Y = A\,K^{\alpha}L^{1-\alpha}$ (Cobb-Douglas, ofte $\alpha = 1/3$),
  per innbygger $y = A\,k^{\alpha}$; sparerate $s$, depresieringsrate $\delta$
  (også $d$), befolkningsvekst $n$; steady state $s\,f(k^*) = (n+\delta)k^*$.
- **Harrod-Domar:** kapital/produkt-forhold $c$; vekstligning $g = s/c - \delta$.
- **Weil-notasjon (vekstregnskap/endogen teknologi):** humankapital per arbeider
  $h$, $y = A\,k^{\alpha}h^{1-\alpha}$, effektivitetsfaktor $e$; vekstrater med
  hatt $\hat y, \hat k, \hat h, \hat A, \hat F$; faktorakkumulering
  $\hat F = \alpha \hat k + (1-\alpha)\hat h$, produktivitet $\hat A = \hat y - \hat F$;
  vekstregnskapets nivåform $\hat Y = \alpha \hat K + (1-\alpha)\hat L + \hat A$;
  endogen teknologi $\hat A = \gamma_A\,\mu\,L$ (R&D-andel $\mu$,
  produktivitetsparameter $\gamma_A$).
- **Måling/ulikhet:** BNP/BNI per innbygger, kjøpekraftsjustering (PPP);
  HDI $\in [0,1]$ (tre komponenter: helse/utdanning/inntekt); Lorenz-kurve;
  Gini-koeffisient $G \in [0,1]$; head count-indeks $H$, total poverty gap,
  MPI; Kuznets-kurve (omvendt U).
- **Engelsk fagterm i parentes** ved første forekomst (faget ble eksaminert på
  engelsk): utviklingsmål (*development indicators*), fattigdomsfelle (*poverty
  trap*), jordleie/deling (*sharecropping*), overskuddsarbeidskraft (*surplus
  labour*), deep vs. proximate determinants, credibility revolution.

**Kritisk metoderegel (gjelder HELE boka):** Fem faste sensorkrav gjelder overalt
(analysens §4): **(a) modell + figur + verbal forklaring er én leveranse** —
sensorveiledningene gjentar «should be illustrated graphically» og «explain the
economic intuition»; figur uten tolkning, eller drøfting uten figur der figur
kreves, er halvt svar; **(b) vis stegene** — H2023-forsiden er eksplisitt: «show
your steps … final answers without discussions will not receive credit»; delvis
kreditt gis for riktig framgangsmåte selv ved regnefeil; **(c) definisjoner må
sitte presist** — HDIs tre komponenter, Gini/Lorenz, absolutt vs. relativ
fattigdom, betinget vs. ubetinget konvergens, sharecropping vs. fast forpaktning
skal defineres, ikke forutsettes kjent; **(d) koble til pensumets empiri og
forfattere** — Easterly (1999), Burnside & Dollar (2000), Benhabib & Spiegel
(1994), Alsan (2015), Duranton (agglomerasjon), plog-studien; navngitt forankring
løfter besvarelsen; **(e) presisjon, ikke lengde** — V2024 Del B ber om «no more
than a few sentences», vurdert kun på riktighet; åpne essay (Del C) vurderes på
**argumentets sammenheng**. **Mekanismen bak resultatet teller mer enn selve
resultatet** — *hvorfor* gir avtakende kapitalavkastning konvergens, *hvorfor* er
ernæringsfellen selvforsterkende, *hvorfor* svikter bistand uten «good policies».
Metodefrihet respekteres: flere oppgaver sier «using a model(s) of your choice»
(Harrod-Domar eller Solow, Lewis eller Harris-Todaro) — og egne rimelige
forutsetninger godtas når de oppgis.

**Pensumankere (*(verifiser)* – utgave-sensitive):** Emnet har brukt **flere
lærebøker over epokene** — Todaro & Smith, *Economic Development* (A-epoken; kap.
2, 3, 5.1, 6, 7, 9.5, 12, 14 er referert i sensorveiledningene) og Weil,
*Economic Growth* (H2023; vekstregnskap, modifisert Solow, endogen teknologi).
V2024 (Agneman) trekker på bred moderne utviklingsøkonomi (deep vs. proximate
determinants, credibility revolution). Forfatteren skal **referere forfatter/verk/
begrep, aldri sitere i lengde**, og markere kapittel-/utgavespesifikke
henvisninger med *(verifiser)* — den eksakte utgaven og kapittelnummereringen er
ikke entydig fastslått i analysen. De **empiriske studiene** (Easterly,
Burnside-Dollar, Benhabib-Spiegel, Alsan, Duranton, plog-studien) er reelle og
navngitt i sensorveiledningene; modellresultatene (Solow steady state,
$g = s/c - \delta$, Gini geometrisk, $\hat A = \hat y - \hat F$) er faglige fakta
uten verkshøyde.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen), **ikke** frekvens: måle-/
begrepsfundamentet først (det de anvendte og fordelingsmessige drøftingene bygger
på), deretter vekstsøylen, så det anvendte laget i to deler, til slutt de moderne
temaene og eksamenstreningen. Frekvensen styrer *omfanget*: de to søylene (måling/
ulikhet og vekst) er ~65–90 %-gjengangere og får hver sin fulle del med
drillkapittel; det anvendte laget får ett kapittel per modul; de lavfrekvente
moderne temaene får kompakte «kjenne»-kapitler.

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. Rammer inn de tre eksamensformatene (A/B/C) og de to faste søylene, og avgrenser mot SOK1002/SØK2009/SØK2011. |
| 1 | Måling av utvikling og ulikhet | 5 | Måling (BNI/HDI) ~70 % + ulikhet (Lorenz/Gini/Kuznets) ~65 % + fattigdomsmål ~35 %. Nesten sikker banker, fast begrepsfundament — nivå 1 «perfekt» → 4 teorikapitler + drillkapittel (Lorenz/Gini tegnes, defineres, drilles). |
| 2 | Vekstsøylen: Solow, Harrod-Domar og teknologi | 6 | Vekst ~90 % (fagets ryggrad): Solow ~95 % av vekstoppgavene, konvergens ~60 %, Harrod-Domar-kontrast ~45 %, vekstregnskap/TFP ~20 %, endogen teknologi ~10 %. Nivå 1 «perfekt» → 5 teorikapitler + drillkapittel. |
| 3 | Bistand og handel | 3 | To høyfrekvente anvendte moduler: bistand ~45 % (savings gap, Easterly/Burnside-Dollar), handel ~50 % (komparative fortrinn, handelspolitikk) — praktisk talt fast oppgave 3 i A-epoken. Nivå 2 «kunne» → 3 kapitler (drøftingstunge). |
| 4 | Befolkning, fattigdomsfeller, landbruk og migrasjon | 5 | De øvrige anvendte modulene i rotasjon: befolkning/fertilitet ~40 %, ernæringsfeller ~40 %, landbruk/jordleie ~30 %, migrasjon/strukturell transformasjon ~30 %, humankapital ~35 %. Nivå 2 «kunne» → 5 kapitler (figur + drøfting). |
| 5 | Moderne utviklingsøkonomi | 3 | C-epoken (Weil/Agneman) utvider pensumet: institusjoner/deep vs. proximate determinants ~20 %, markeder/asymmetrisk informasjon ~15 %, kausal inferens/credibility revolution ~10 %. Lavfrekvent i snittet, men **må dekkes** (siste kjente format) og differensierer toppkarakteren → nivå 3 «kjenne» → 3 kompakte kapitler. |
| 6 | Eksamenstrening | 6 | Begrepsdrill (måle-/ulikhets-/definisjonsgjengangere), sjangerkapittel for den verbale drøftingen (deep-determinants-/politikkessayet, DNA-drøfting), sjangerkapittel for flervalg (V2024 Del A), og **3 komplette øvingseksamener som speiler alle tre formatene** (A: 3 deloppgaver, B/C-regne: Weil 6 oppgaver, C-tredeling: flervalg+kortsvar+valgessay). |

**Avvik fra DNA-malen (dokumentert):**
1. **Hybrid arketype.** Vekstsøylen (Del 2) + måle-/regnedelene (Lorenz/Gini,
   vekstregnskap) følger DNA-regnefag (teori → utledning → eksempel på
   eksamensnivå → typiske feil → øvinger → drillkapittel). Det anvendte laget
   (Del 3–5) er overveiende **verbalt/drøftende** og følger derfor DNA-drøfting
   for temakapitlene (kjernebegrep MED pensumforankring → posisjoner/spenninger
   → anvendelse → momentliste-oppgaver). Hvert kapittel merker hvilken kapittel-
   DNA det bruker.
2. **Tre eksamensformater, én kjerne.** DNA-en forutsetter ett stabilt format;
   SOK2007 har tre (A/B/C over epokene). Del 0 og eksamenstreningen (Del 6)
   trener derfor eksplisitt **alle tre svarformene** på samme faglige kjerne —
   dette er bokas viktigste designgrep (analysens §7).
3. **Drillkapitlene ligger inne i søylene** (1.5 måle-/ulikhetsdrill, 2.6
   vekstdrill), ikke i siste del, fordi disse to sjangrene utgjør de faste
   bankerne og må drilles umiddelbart etter teorien. Del 6 beholder begrepsdrill,
   de to sjangerkapitlene (drøftingsessay + flervalg) og de tre øvingseksamenene.
4. **Del 5 (moderne) er lavfrekvent, men beholdes.** Fordi emnet er nedlagt vil
   et fremtidig sett trolig speile V2024 (siste kjente form) — deep determinants
   og kausal inferens må derfor med, selv om det historiske snittet er lavt.

---

## 3. Kapitler

Feltene under følger DNA-enes «Skjelett-krav». Sjangerbokstavene (A–P) refererer
til oppgavetype-katalogen som presenteres i Del 0 (gjengitt der fra analysen §3):
**A** BNI/BNP som utviklingsmål, **B** HDI, **C** Lorenz/Gini, **D** Kuznets,
**E** Solow (steady state/sparerate/konvergens), **F** Harrod-Domar vs. Solow,
**G** vekstregnskap/TFP, **H** endogen teknologi/R&D, **I** bistand og vekst,
**J** handel (komparative fortrinn + handelspolitikk), **K** landbruk
(sharecropping vs. fast forpaktning), **L** ernæringsfeller, **M** befolkning/
fertilitet, **N** strukturell transformasjon/migrasjon (Lewis, Harris-Todaro),
**O** flervalg (V2024 Del A), **P** åpent valgessay (deep determinants / kausal
inferens, V2024 Del C). Prioritetsklasser: **perfekt** (nivå 1) / **kunne**
(nivå 2) / **kjenne** (nivå 3).

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet: slik testes SOK2007

- **id:** `sok2007-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen
- **Kapitteltype:** eksamenskart
- **description:** Eksamensformen i tre epoker (A/B/C), de to faste søylene (vekst + måling/ulikhet), det anvendte laget som roterer, sjangerkatalogen A–P, sensorens metaregler og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på ~20 sett H2010–V2024 + 5 sensorveiledninger + 1 løsningsforslag. Skal gjengi: (i) **formen**: skriftlig skoleeksamen 4 timer, karakter A–F, 7,5 studiepoeng; fra ~2016–2017 digital (Inspera; håndtegnede figurer lastes opp, 15–30 min ekstra); **hjelpemidler varierer med epoke** — Todaro-Smith-epoken og V2024: kode C (matematisk formelsamling Sydsæter/Strøm/Berck + godkjent kalkulator); Green-epoken 2020–2022 (korona): alle hjelpemidler / hjemmeeksamen (men da teller *analysen*, ikke gjengivelse); **målform**: engelsk er hovedmålform (eldre sett 2010–2018 også bokmål/nynorsk), studenten kunne svare på norsk eller engelsk; (ii) **de tre eksamensmalene**: **Mal A (Todaro-Smith ~2010–2019)** tre deloppgaver oftest 40/30/30 — oppgave 1 måle-/begrepsoppgave (HDI/Lorenz/Gini/fattigdomsmål), oppgave 2 vekst-/bistandsoppgave (Harrod-Domar vs. Solow), oppgave 3 handelsoppgave; **Mal B (Green ~2020–2022)** fire essayspørsmål à 25 %, tema-merket; **Mal C (moderne 2023–2024)** — H2023 (Weil) seks regne-/drøfteoppgaver med ulik vekt (10/25/20/15/10/20), V2024 (Agneman) tredelt: Del A seks flervalg (3 poeng/riktig), Del B tre kortsvar (maks 15, «few sentences»), Del C tre åpne essay der studenten velger to av tre (maks 20, argumentets sammenheng); (iii) **temafrekvens-tabellen** (fra §2A/§2B): vekstmodeller ~90 %, måling BNI/HDI ~70 %, ulikhet Lorenz/Gini/Kuznets ~65 %, handel ~50 %, bistand ~45 %, befolkning ~40 %, ernæringsfeller ~40 %, humankapital ~35 %, fattigdomsmål ~35 %, landbruk ~30 %, migrasjon ~30 %, institusjoner/deep determinants ~20 %, vekstregnskap/TFP ~20 %, markeder/informasjon ~15 %, kausal inferens ~10 %, konflikt ~5 %; (iv) **konstantene på tvers av epokene**: vekst alltid representert; måling av utvikling/ulikhet nesten alltid; én anvendt blokk roterer inn hvert sett; figur + modell + verbal tolkning kreves gjennomgående; (v) **sensorens metaregler** (§4): modell + figur + intuisjon er én leveranse; vis stegene; definisjoner må sitte; koble til navngitt empiri; presisjon ikke lengde; metodefrihet respekteres; egne forutsetninger godtas; (vi) **karakterskillene** (§4): bunn (E–D) = riktig definisjon + korrekt standarddiagram + hovedkonklusjon («høyere sparing hever nivået, ikke langsiktig vekst»); midt (C) = komplett modell både grafisk og analytisk, riktig Harrod-Domar/Solow-sammenligning, korrekt vekstregnskap, empirien nevnt; topp (A/B) = nyanser og betingelser (betinget vs. ubetinget konvergens; hvorfor bistandseffekten er betinget av politikk; mikro-makro-paradokset; risiko/insentiv i sharecropping; poaching i ernæringskontrakter) + navngitte studier + fullt førte utledninger.
- **Innholdskontrakt:** Sjangerkatalogen A–P presenteres som studentens sjekkliste med typisk plassering: måle-/ulikhetsoppgaven bygges av A → B → C → D; vekstoppgaven av E → F (± G/H); det anvendte laget av I/J/K/L/M/N i rotasjon; C-epoken legger til O (flervalg) og P (valgessay). **Prognose for neste eksamen** (gitt at emnet fortsatt eksamineres): én sikker vekstoppgave (Solow steady state + konvergens, evt. mot Harrod-Domar eller med vekstregnskap); én måle-/ulikhetsoppgave (HDI eller inntekt-som-mål + Lorenz/Gini + Kuznets); to–tre anvendte moduler i rotasjon; **formatusikkerhet** — kan komme som 3–4 essay (A/B), Weil-regneoppgaver (H2023) eller 3-delt flervalg+kortsvar+valgessay (V2024). Avslutt med **avgrensningen** (den korte «hører hjemme et annet sted»-merknaden: formell konsument-/produsentteori → SOK1002; åpen makro/valuta → SØK2009; offentlig-økonomi → SØK2011; tung matematisk vekstteori → utenfor emnet) og **leseplanen**: Del 1 + Del 2 er «må perfekt» og de to bankerne; Del 3–4 «kunne» (anvendt lag, roterer inn); Del 5 «kjenne» (moderne, toppkarakter-differensiator); Del 6 ren format-trening på alle tre malene.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt 240 min og Mal A (40/30/30) — sett opp tidsbudsjett for de tre deloppgavene» og «hvilke to søyler går igjen i alle tre epokene, og i hvilke kapitler drilles de?».
- **Typiske feil:** Metafeilene: pugge ett format og bli tatt på sengen av et annet; bruke tid på uforklarte figurer eller utolkede tall; behandle SOK2007 som et matte-tungt teorifag (det er anvendt og drøftende); glemme å koble til navngitt empiri.
- **Quiz: 14 · Flashcards: 14** (eksamensform × 3 epoker, frekvenser, sjangerkatalog A–P, metaregler, avgrensning)

**Prøve-kvote Del 0:** ingen (metadel).

---

### Del 1 — Måling av utvikling og ulikhet *(prioritet: PERFEKT — den nesten sikre bankeren)*

#### Kapittel 1.1: Å måle utvikling: BNI per innbygger, PPP og grensene for inntekt

- **id:** `sok2007-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen
- **Kapitteltype:** teori (drøfting-tung)
- **description:** BNP/BNI per innbygger som utviklingsmål — hvorfor vi bruker inntekt, og de fire hovedsvakhetene (valutakurs, PPP, uformell sektor, ikke-inntektsdimensjoner).
- **Eksamensbelegg:** Måling BNI/BNP ~70 % (sjanger A) — fast «pluss-innhold» i måleoppgaven, én av de mest stabile bankerne 2010–2024. «Er inntekt et godt mål?» går igjen i alle tre epokene. Prioritet: **perfekt**.
- **Innholdskontrakt (DNA-drøfting: kjernebegrep + posisjoner):** BNP vs. BNI (bruttonasjonalinntekt) per innbygger som levestandardmål; hvorfor vi likevel bruker inntekt (tilgjengelig, sammenlignbart, korrelert med velferd). **De fire hovedsvakhetene:** (i) **valutakurskonvertering** — kursvolatilitet forvrenger sammenligninger over tid/land; (ii) **kjøpekraftsjustering (PPP)** — samme dollarinntekt kjøper mer i lavprisland → PPP-justerte tall gir mer sammenlignbar realverdi (konseptuelt, ikke regnet); (iii) **uformell sektor og egenkonsum** fanges ikke i nasjonalregnskapet → undervurderer levestandard i utviklingsland; (iv) **ikke-inntektsdimensjoner mangler** (helse, utdanning, ulikhet, miljø) → motiverer HDI (kap. 1.2). Presiser at inntekt er *nødvendig men ikke tilstrekkelig* — bru til fordelingsspørsmålet (Lorenz/Gini) og de flerdimensjonale målene. Pensumforankring: Todaro & Smith kap. 2 *(verifiser)*.
- **Oppgavesjangre:** A. Mønstereksempel: «Er BNI per innbygger et godt mål for å sammenligne levestandard mellom land? Forklar hvilke problemer som oppstår, og hvorfor vi likevel bruker inntekt.»
- **Typiske feil:** Ramse opp svakheter uten å forklare *hvorfor vi likevel bruker inntekt* (halvt svar); blande PPP-justering (realverdi) med valutakurskonvertering (nominelt); glemme uformell sektor/egenkonsum; behandle inntekt som fullstendig velferdsmål.
- **Quiz: 20 · Flashcards: 26**

#### Kapittel 1.2: Human Development Index (HDI) og flerdimensjonal utvikling

- **id:** `sok2007-1-2` · **number:** 1.2 · **estimatedMinutes:** 40 · **prerequisites:** `sok2007-1-1`
- **Kapitteltype:** teori (drøfting-tung)
- **description:** HDIs tre komponenter (helse, utdanning, inntekt), hvordan indeksen aggregerer dem til et tall 0–1, og kritikken (vekting, terskler).
- **Eksamensbelegg:** HDI inngår i måling ~70 % (sjanger B), fast begrepsgjenganger i alle tre epokene; V2024 kortsvar. «Hva er HDI og hvilke tre dimensjoner?» er en nesten sikker deloppgave. Prioritet: **perfekt** (definisjonen må sitte).
- **Innholdskontrakt (DNA-drøfting):** HDI rangerer land 0–1 basert på **tre komponenter** — **helse** (forventet levealder), **utdanning** (skolegang/forventet + gjennomsnittlig), **inntekt** (BNI per innbygger, PPP-justert, logaritmisk). Hver komponent normaliseres til en delindeks $\in[0,1]$; HDI er et (geometrisk) gjennomsnitt av de tre — vis prinsippet uten å pugge den eksakte formelen (den kan slås opp). **Kritikk/nyanser:** vilkårlig vekting (hvorfor like vekter?), tersklene/min-maks-grensene, at HDI fortsatt ikke fanger ulikhet (→ ulikhetsjustert HDI nevnes kort) eller miljø/frihet. Poeng: HDI er et svar på svakhet (iv) i kap. 1.1 — flerdimensjonalitet — men er selv et grovt aggregat. Pensumforankring: Todaro & Smith kap. 2 *(verifiser)*.
- **Oppgavesjangre:** B. Mønstereksempel: «Hva er Human Development Index, og hvilke tre dimensjoner bygger den på? Nevn minst én svakhet ved indeksen.»
- **Typiske feil:** Nevne feil antall/feil komponenter (det er tre: helse, utdanning, inntekt); tro HDI måler ulikhet (det gjør den ikke i grunnformen); pugge formelen feil i stedet for å forklare aggregeringsprinsippet; glemme at inntektskomponenten er logaritmisk/PPP-justert.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 1.3: Ulikhet: Lorenz-kurven og Gini-koeffisienten

- **id:** `sok2007-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `sok2007-1-2`
- **Kapitteltype:** teori (regnefag — figur obligatorisk)
- **description:** Lorenz-kurven som kumulativ inntekts- mot befolkningsandel, og Gini-koeffisienten som areal-forhold — definert, tegnet og tolket, med kryssende kurver som poeng.
- **Eksamensbelegg:** Ulikhet Lorenz/Gini ~65 % (sjanger C), fast begreps- og figurgjenganger 2010–2024. **Figur er obligatorisk.** Prioritet: **perfekt**.
- **Innholdskontrakt (DNA-regnefag):** **Lorenz-kurven** = kumulativ inntektsandel (y-akse) mot kumulativ befolkningsandel (x-akse), begge fra 0 til 1; **45°-linjen = full likhet** (fattigste 20 % har 20 % av inntekten). Lorenz-kurven ligger under diagonalen; jo mer utbøyd, jo mer ulikhet. **Gini-koeffisienten** $G$ = arealet mellom 45°-linjen og Lorenz-kurven (område $A$) delt på hele trekantarealet ($A+B$): $G = A/(A+B) \in [0,1]$, der 0 = full likhet, 1 = full ulikhet. Utled/anslå $G$ geometrisk fra en oppgitt (stykkevis lineær) Lorenz-kurve — trapes-/trekantregning. **Poeng sensor honorerer:** Gini gir *ett* sammenlignbart tall selv når to Lorenz-kurver krysser (der Lorenz-dominans er tvetydig) — men da kan to ulike fordelinger ha samme Gini. **Figurkrav:** navngi aksene (kumulativ befolknings-/inntektsandel), 45°-linjen, Lorenz-kurven, arealene $A$ og $B$. Pensumforankring: Todaro & Smith kap. 5.1 *(verifiser)*.
- **Oppgavesjangre:** C. Mønstereksempel: «Hva er Gini-koeffisienten? Forklar og illustrer grafisk med Lorenz-kurven, forklar hvorfor $G$ må ligge mellom 0 og 1, og regn ut Gini for en befolkning der fattigste halvdel har 20 % av inntekten (anta stykkevis lineær Lorenz-kurve).»
- **Typiske feil:** Tegne Lorenz-kurven over diagonalen eller med feil akser; forveksle $A$ (teller) og $A+B$ (nevner) i Gini; hevde at Gini alltid rangerer to fordelinger entydig (ikke ved kryssende kurver); oppgi $G$ uten figur (feilkatalog); regnefeil i trapesarealet.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 1.4: Kuznets-kurven og fattigdomsmål

- **id:** `sok2007-1-4` · **number:** 1.4 · **estimatedMinutes:** 50 · **prerequisites:** `sok2007-1-3`
- **Kapitteltype:** teori (drøfting + figur)
- **description:** Kuznets-kurvens omvendt U mellom vekst og ulikhet, mekanismen bak, og fattigdomsmålene (absolutt vs. relativ, head count, poverty gap, MPI).
- **Eksamensbelegg:** Kuznets inngår i ulikhet ~65 % (sjanger D); fattigdomsmål ~35 % (deloppgave i måleblokken). Kuznets er både A- og C-epoke (V2024 flervalg O5-typen). Prioritet: **perfekt** (Kuznets) / **kunne** (fattigdomsmål).
- **Innholdskontrakt:** **Kuznets-kurven:** omvendt U (inntekt per innbygger på x-aksen, ulikhet på y-aksen) — ved lav inntekt *stiger* ulikheten med vekst, ved høyere inntekt *faller* den. **Mekanisme:** overgang fra jordbruk til industri gir først ujevn inntektsvekst (noen flyttes til høyproduktiv moderne sektor) → ulikhet opp; når nok er over, jevnes det ut. **Drøftingsakse:** bør et utviklingsland bekymre seg for stigende ulikhet under vekst? Fallet skjer *ikke automatisk* — omfordelingspolitikk kan trengs; empirien for Kuznets-kurven er omstridt. **Fattigdomsmål:** absolutt (fast fattigdomsgrense, f.eks. $2,15/dag PPP) vs. relativ (andel av medianinntekt); **head count-indeks** $H$ = andel under grensen (fanger ikke dybde); **total poverty gap** = samlet avstand opp til grensen (fanger dybde); **MPI** (flerdimensjonal fattigdomsindeks) — helse/utdanning/levestandard, parallell til HDI på husholdsnivå. Pensumforankring: Todaro & Smith kap. 5 *(verifiser)*.
- **Oppgavesjangre:** D (+ A). Mønstereksempel: «Hva sier Kuznets-kurven om forholdet mellom vekst og ulikhet, og hvilken mekanisme ligger bak? Bør et utviklingsland bekymre seg om ulikheten stiger under en vekstperiode? Forklar også forskjellen mellom head count-indeksen og poverty gap.»
- **Typiske feil:** Snu Kuznets (den er *omvendt* U — opp så ned); tro fallet er automatisk; forveksle absolutt og relativ fattigdom; hevde head count fanger fattigdommens *dybde* (det gjør poverty gap); glemme mekanismen (strukturell transformasjon) bak kurven.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 1.5: Drill: måle- og ulikhetsoppgaven

- **id:** `sok2007-1-5` · **number:** 1.5 · **estimatedMinutes:** 80 · **prerequisites:** `sok2007-1-4`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på hele måle-/ulikhetsoppgaven (Mal A oppgave 1 / Mal B–C kortsvar): fra inntektsmål via HDI til Lorenz/Gini + Kuznets, med obligatorisk figur og verbal tolkning.
- **Eksamensbelegg:** Dekker sjangrene A, B, C, D samlet — hele den nesten-sikre bankeren (~50 % av oppgave 1 i A-epoken, minst ett kortsvar i B/C-epoken). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) inntekt-som-mål — styrker + de fire svakhetene, hvorfor vi likevel bruker det; 2) HDI — tre komponenter + aggregering + én kritikk; 3) Lorenz-kurve tegnet med navngitte akser + Gini definert/regnet geometrisk + kryssende-kurver-poenget; 4) Kuznets — omvendt U + mekanisme + «faller ikke automatisk»; 5) fattigdomsmål ved behov (head count vs. poverty gap). **Gjennomskrevet eksamenscase med sensor-margnotater** (hva som gir uttelling: den verbale tolkningen av figuren, mekanismen bak Kuznets, HDIs tre komponenter presist). **10–14 oppgaver** som roterer inngangsvinkel (inntektsmål / HDI / Lorenz-Gini-regning / Kuznets-drøfting) og format (A-deloppgave / B-essay / C-kortsvar), alle med `solution` + figurbeskrivelse i ord + `hints`. Minst to Gini-regneoppgaver med nyskrevne, pene tall.
- **Oppgavesjangre:** A, B, C, D. Mønstereksempel (full kjede, A-format): «(a) Drøft styrker og svakheter ved BNI per innbygger som utviklingsmål. (b) Hva er HDI, og hvorfor er den et svar på én av svakhetene i (a)? (c) Tegn Lorenz-kurven og regn ut Gini for oppgitte tall. (d) Forklar Kuznets-kurven og drøft om et vekstland bør bekymre seg for stigende ulikhet.»
- **Typiske feil:** Hele måle-/ulikhetsrepertoaret: figur uten tolkning; Kuznets snudd; Gini-areal forvekslet; head count/poverty gap-forveksling; HDI-komponenter feil; inntektssvakheter uten «hvorfor likevel».
- **Quiz: 14 · Flashcards: 10**

**Prøve-kvote Del 1:** 4 prøver (`sok2007-1-prove`, chapterNumber `1.P`) — 1.A begreper: inntekt-som-mål/PPP, HDIs tre komponenter, absolutt vs. relativ fattigdom, head count/poverty gap (sjanger A+B); 1.B HDI + inntektsmål drøftet på kortsvarsform (B/C-format); 1.C Lorenz-kurve tegnet + Gini regnet geometrisk med figur, inkl. kryssende kurver (sjanger C); 1.D Kuznets-kurven + fattigdomsmål på eksamensnivå med politikkdrøfting (sjanger D).

---

### Del 2 — Vekstsøylen: Solow, Harrod-Domar og teknologi *(prioritet: PERFEKT — fagets ryggrad, ~90 %)*

> **Formelsamling-skille:** Sydsæter/Strøm/Berck inneholder derivasjons- og
> logaritmeregler — det studenten trenger for marginalproduktivitet og
> innhentingstid. Selve *modelloppsettet* (Solow-diagrammet, steady state-
> betingelsen, vekstregnskapsdekomponeringen) og *tolkningen* er aldri i
> formelsamlingen og er det eksamen tester. Hvert kapittel merker skillet.

#### Kapittel 2.1: Solow-modellen: produktfunksjon, kapitalakkumulering og steady state

- **id:** `sok2007-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `sok2007-0-1`
- **Kapitteltype:** teori (regnefag — figur obligatorisk)
- **description:** Solow-modellens kjerne: Cobb-Douglas per innbygger, avtakende kapitalavkastning, Solow-diagrammet og steady state $s\,f(k^*)=(n+\delta)k^*$.
- **Eksamensbelegg:** Solow forekommer i ~95 % av vekstoppgavene (vekst ~90 % totalt), sjanger E — fagets ubestridte kjerne, ofte en hel oppgave. En student som ikke kan tegne/drøfte Solow-diagrammet stryker på vekstdelen. Prioritet: **perfekt**.
- **Innholdskontrakt (DNA-regnefag):** Produktfunksjon $Y = A\,K^{\alpha}L^{1-\alpha}$, per arbeider $y = A\,k^{\alpha}$ ($k = K/L$). **Utled marginalproduktiviteten til kapital** $\partial y/\partial k = \alpha A k^{\alpha-1}$ og vis at den er **avtakende** ($\alpha<1$) — dette er motoren i hele modellen og kreves aktivt utledet. **Kapitalakkumulering:** endring i $k$ = sparing/investering minus «utvanning»: $\dot k = s\,f(k) - (n+\delta)k$. **Solow-diagrammet:** tegn $y=f(k)$, sparekurven $s\,f(k)$ og linjen for nødvendig investering $(n+\delta)k$; **steady state** $k^*$ der $s\,f(k^*)=(n+\delta)k^*$ (kurvene skjærer) — her er $k$ og $y$ konstante. Regn $k^*$ og $y^*$ for Cobb-Douglas ($k^* = \left(\tfrac{sA}{n+\delta}\right)^{1/(1-\alpha)}$). **Figurkrav:** navngi aksene ($k$, $y$), de tre kurvene, steady state-punktet og hvorfor økonomien konvergerer mot $k^*$ (over $k^*$: for lite sparing til å opprettholde $k$; under: kapital bygges opp). Merk: derivasjonsreglene slås opp; oppsettet + tolkningen gjør studenten selv. Pensumforankring: Todaro & Smith kap. 3 / Weil *(verifiser)*.
- **Oppgavesjangre:** E. Mønstereksempel: «Utled marginalproduktiviteten til kapital fra $y = A\,k^{\alpha}$ og forklar hvorfor den er avtakende. Illustrer steady state grafisk med sparekurve og utvanningslinje, og forklar hvorfor økonomien beveger seg mot $k^*$.»
- **Typiske feil:** Kun tekst uten figur (eller figur uten forklaring); glemme utvanningsleddet $(n+\delta)k$ eller sette feil kurver; ikke utlede/forklare avtakende MPK; forveksle nivå og vekst (kommer for fullt i kap. 2.2).
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 2.2: Sparerate, konvergens og nivå vs. vekst

- **id:** `sok2007-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok2007-2-1`
- **Kapitteltype:** teori (regnefag + drøfting)
- **description:** Hva en høyere sparerate gjør (hever nivået, ikke langsiktig vekst), og hvorfor avtakende kapitalavkastning gir betinget konvergens.
- **Eksamensbelegg:** Konvergens inngår i ~60 % av vekstoppgavene (sjanger E); nivå-vs-vekst-skillet er *den* sensorbelønte innsikten og en av fagets mest testede finesser (A/B/C-epoke). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Sparerate-skift:** en økning i $s$ hever sparekurven → nytt, høyere $k^*$ og $y^*$, men **den langsiktige vekstraten** (per innbygger) er null i grunn-Solow / eksogen ved teknologivekst — spareraten endrer **nivået**, ikke den langsiktige **veksten**. Vis grafisk (skift i sparekurven, nytt skjæringspunkt) og forklar overgangsdynamikken (raskere vekst *underveis* til nytt steady state, deretter tilbake til langsiktig rate). **Konvergens:** fordi MPK er avtakende vokser fattige land (lav $k$, høy MPK) raskere enn rike → de tar innpå. Men bare land med **like parametere** ($s, n, \delta, A$) konvergerer mot *samme* $k^*$ → **betinget konvergens**. Skill fra **ubetinget/absolutt konvergens** (alle land mot samme nivå) som empirien i hovedsak *ikke* støtter — Weil-fasiten drøfter dette eksplisitt. Humankapital-utvidelsen (kap. 2.4) endrer konvergensprediksjonene. Pensumforankring: Todaro & Smith kap. 3 / Weil *(verifiser)*.
- **Oppgavesjangre:** E. Mønstereksempel: «Vis grafisk hva som skjer med $y^*$ når spareraten øker, og forklar hvorfor dette *ikke* endrer den langsiktige vekstraten. Forklar deretter forskjellen mellom betinget og ubetinget konvergens, og hvilken empirien støtter.»
- **Typiske feil:** Hevde at høyere sparing gir *permanent* høyere vekst i Solow (feilkatalog — den gir bare midlertidig vekstøkning, høyere nivå); forveksle nivå- og vekst-effekt generelt; behandle konvergens som ubetinget når modellen gir betinget; blande Solows betingede konvergens med (fraværende) empirisk ubetinget konvergens.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 2.3: Harrod-Domar vs. Solow

- **id:** `sok2007-2-3` · **number:** 2.3 · **estimatedMinutes:** 50 · **prerequisites:** `sok2007-2-2`
- **Kapitteltype:** teori (regnefag + sammenligning)
- **description:** Harrod-Domar-modellen ($g = s/c - \delta$) og den systematiske kontrasten mot Solow — konstant vs. avtakende kapitalavkastning, permanent vs. midlertidig veksteffekt.
- **Eksamensbelegg:** Harrod-Domar vs. Solow inngår i ~45 % av vekstoppgavene (sjanger F) — den faste kontrasten i Todaro-Smith-epoken, dukker opp i alle epoker. Bygger direkte mot bistandsoppgaven (savings gap, kap. 3.1). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Harrod-Domar:** antar **konstant** kapitalavkastning (fast kapital/produkt-forhold $c$, ingen avtakende utbytte); veksten i output $g = s/c - \delta$ — høyere sparerate gir **permanent** høyere vekstrate. Regn investeringsbehovet for en målvekstrate ($s = c(g+\delta)$). **Kontrasten mot Solow** (systematisk): Solow antar **avtakende** kapitalavkastning → høyere sparing gir bare **midlertidig** vekstøkning men høyere langsiktig *nivå*; Harrod-Domar har ingen konvergens (ingen avtakende utbytte), Solow har betinget konvergens. Begge presenteres grafisk og analytisk. **Drøftingsakse:** hvorfor er Harrod-Domar attraktiv men naiv (den lineære «sparing → vekst»-koblingen som ligger under mye tidlig bistandstenkning)? Pensumforankring: Todaro & Smith kap. 3 *(verifiser)*.
- **Oppgavesjangre:** F. Mønstereksempel: «Hva er hovedforskjellene i antakelser og prediksjoner mellom Harrod-Domar- og Solow-modellen? Sammenlign effekten av økt sparing i de to, og forklar hvorfor Harrod-Domar ikke gir konvergens.»
- **Typiske feil:** Blande sammen de to modellenes prediksjon om sparing (permanent i H-D, midlertidig i Solow); glemme antakelsen (konstant vs. avtakende avkastning) som *forklarer* forskjellen; feil i $g = s/c - \delta$ (fortegn på $\delta$, forveksle $c$ med sparerate); ikke se koblingen til bistand/savings gap.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 2.4: Vekstregnskap og total faktorproduktivitet (Weil)

- **id:** `sok2007-2-4` · **number:** 2.4 · **estimatedMinutes:** 55 · **prerequisites:** `sok2007-2-1`
- **Kapitteltype:** teori (regnefag)
- **description:** Dekomponering av vekst i output per arbeider i faktorakkumulering $\hat F$ og produktivitetsvekst $\hat A$ — Weils $y = A\,k^{\alpha}h^{1-\alpha}$.
- **Eksamensbelegg:** Vekstregnskap/TFP inngår i ~20 % av vekstoppgavene (sjanger G) — V2011 d, H2023 Q2. Regneoppgave med Cobb-Douglas-dekomponering. Prioritet: **kunne** (nivå 2, men eksplisitt regnet i H2023). Merk: Weil-notasjon.
- **Innholdskontrakt (DNA-regnefag):** Fra $y = A\,k^{\alpha}h^{1-\alpha}$ (Weils notasjon: real- og humankapital per arbeider): loga-differensier → vekstrater med hatt. **Faktorakkumulering** $\hat F = \alpha\,\hat k + (1-\alpha)\hat h$; **produktivitetsvekst** $\hat A = \hat y - \hat F$ (residualen / Solow-residualen). Nivåform: $\hat Y = \alpha\hat K + (1-\alpha)\hat L + \hat A$. **Regneoppgave-mal:** gitt $\alpha = 1/3$ og oppgitte vekstrater for output, real- og humankapital per arbeider → regn $\hat F$ og $\hat A$ for hvert land, og bidragsandelene $\hat F/\hat y$ og $\hat A/\hat y$; avgjør om vekst drives av **faktorakkumulering** eller **produktivitet**. **Drøftingskrav (H2023-regelen):** tallet alene gir ikke full uttelling — tolk hva det betyr at et land vokser via TFP vs. via akkumulering. Empirisk anker: Benhabib & Spiegel (1994) om humankapital og produktivitet. Pensumforankring: Weil, *Economic Growth* *(verifiser)*.
- **Oppgavesjangre:** G. Mønstereksempel: «Med $\alpha = 1/3$ og oppgitte vekstrater for output, real- og humankapital per arbeider: beregn faktorakkumulering $\hat F$ og produktivitetsvekst $\hat A$ for hvert land, og avgjør hvor produktivitetsvekst bidrar mest til veksten.»
- **Typiske feil:** Ren regning uten drøfting (gir ikke full uttelling — H2023-regelen); bytte om real- og humankapitalvektene; regne $\hat A$ som $\hat y + \hat F$ i stedet for $\hat y - \hat F$; glemme å tolke bidragsandelene økonomisk.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 2.5: Endogen teknologi, R&D og patenter (Weil)

- **id:** `sok2007-2-5` · **number:** 2.5 · **estimatedMinutes:** 55 · **prerequisites:** `sok2007-2-4`
- **Kapitteltype:** teori (regnefag + drøfting)
- **description:** Endogen produktivitetsvekst $\hat A = \gamma_A\mu L$, nivå-fall-vs-vekst-økning ved endret R&D-andel med logaritmisk innhentingstid, og teknologiens egenskaper (ikke-rivaliserende → patenter).
- **Eksamensbelegg:** Endogen teknologi inngår i ~10 % (sjanger H) — kun H2023 Q6, men et helt regnestykke med drøfting; V2024 berører R&D/appropriabilitet konseptuelt. Prioritet: **kjenne/kunne** (nivå 3, men fullt regnet i siste kjente Weil-sett). Merk: Weil-notasjon.
- **Innholdskontrakt (DNA-regnefag):** Én-lands endogen-teknologimodell: produktivitetsvekst $\hat A = \gamma_A\,\mu\,L$ (andel $\mu$ av arbeidsstyrken $L$ i R&D, produktivitetsparameter $\gamma_A$). **Regn** vekstraten i output per arbeider. **Drøft avveiningen:** en økning i R&D-andelen $\mu$ **senker først** output-nivået (færre i sluttproduksjon) men **hever så vekstraten** — regn ut (logaritmisk) hvor mange perioder det tar før output per arbeider er tilbake på det gamle nivået. **Teknologiens egenskaper:** ikke-rivaliserende (kan brukes av mange samtidig), delvis ikke-ekskluderbar → **positive eksternaliteter** → for lite privat R&D → **patenter** som løsning (midlertidig ekskluderbarhet gir insentiv, men skaper statisk tap). **Drøftingsakse:** patentbeskyttelse vs. kunnskapsdeling; hvorfor utviklingsland kan tape på sterk global patentbeskyttelse. Pensumforankring: Weil, *Economic Growth* *(verifiser)*.
- **Oppgavesjangre:** H. Mønstereksempel: «Med $L = 1$, $\mu = 5$ og $\gamma_A = 0{,}5$: finn vekstraten i output per arbeider. Hvis $\gamma_A$ heves til $0{,}75$, hvor mange perioder tar det før output per arbeider er tilbake på nivået det ville hatt uten endringen? Drøft hvorfor privat R&D typisk er for lavt.»
- **Typiske feil:** Overse nivå-fall-vs-vekst-økning-avveiningen; regne innhentingstiden feil (glemme logaritmen / initialt nivåfall); ikke koble teknologiens ikke-rivaliserende karakter til eksternalitet → patent; behandle teknologi som et rent gode uten appropriabilitetsproblem.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 2.6: Drill: vekstoppgaven

- **id:** `sok2007-2-6` · **number:** 2.6 · **estimatedMinutes:** 90 · **prerequisites:** `sok2007-2-5`, `sok2007-2-3`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på hele vekstoppgaven: fra Solow steady state og konvergens via Harrod-Domar-kontrasten til vekstregnskap og endogen teknologi, i alle tre svarformater.
- **Eksamensbelegg:** Dekker sjangrene E, F, G, H samlet — vekstsøylen som forekommer i ~90 % av settene, ofte en hel oppgave. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) identifiser hvilken vekstmodell oppgaven ber om (Solow / Harrod-Domar / vekstregnskap / endogen teknologi — «model of your choice» respekteres); 2) sett opp modellen analytisk *og* i figur; 3) for Solow: steady state, sparerate-skift (nivå vs. vekst), konvergens; for Harrod-Domar: $g = s/c-\delta$ + kontrast; for vekstregnskap: $\hat F$/$\hat A$-dekomponering + bidragsandeler; for endogen teknologi: $\hat A = \gamma_A\mu L$ + innhentingstid; 4) tolk verbalt — mekanismen bak resultatet, ikke bare tallet; 5) koble til empiri/konvergensdebatt der relevant. **Gjennomregnet eksamenscase med sensor-margnotater** (hva som gir uttelling: utledningen av avtakende MPK, nivå-vs-vekst-poenget, «show your steps»-regelen). **12–15 oppgaver** som roterer modell (Solow / H-D / vekstregnskap / endogen teknologi) × format (A-deloppgave / Weil-regneoppgave H2023-stil / B-essay), med nyskrevne, pene tall og `solution` + figurbeskrivelse + `hints`.
- **Oppgavesjangre:** E, F, G, H. Mønstereksempel (Weil-format): «(a) Regn $k^*$ og $y^*$ i Solow-modellen med oppgitte $s, n, \delta, \alpha, A$. (b) Vis hva som skjer når $s$ øker, og forklar nivå vs. vekst. (c) Sammenlign kort med Harrod-Domars prediksjon. (d) Med oppgitte vekstrater: dekomponer veksten i $\hat F$ og $\hat A$.»
- **Typiske feil:** Hele vekstrepertoaret: figur uten forklaring; sparing → permanent vekst i Solow; ubetinget der modellen gir betinget konvergens; regning uten drøfting (H2023-regelen); Harrod-Domar/Solow-forveksling; $\hat A = \hat y - \hat F$ snudd.
- **Quiz: 16 · Flashcards: 12**

**Prøve-kvote Del 2:** 4 prøver (`sok2007-2-prove`, chapterNumber `2.P`) — 2.A begreper vekst: steady state, avtakende kapitalavkastning, betinget vs. ubetinget konvergens, kapital/produkt-forhold, TFP, ikke-rivaliserende teknologi (sjanger E+F-fundament); 2.B Solow komplett — steady state grafisk + sparerate-skift + konvergens (sjanger E); 2.C Harrod-Domar vs. Solow med investeringsbehov-regning og sammenligning (sjanger F); 2.D vekstregnskap + endogen teknologi på Weil-regneformat med drøfting (sjanger G+H).

---

### Del 3 — Bistand og handel *(prioritet: KUNNE — to høyfrekvente anvendte moduler)*

> **Kapittel-DNA:** Del 3–5 er overveiende verbale/drøftende og følger
> **DNA-drøfting** for temakapitlene (kjernebegrep MED pensumforankring →
> posisjoner/spenninger → anvendelse → momentliste-oppgaver), med figur der
> modellen krever det (bistand via Harrod-Domar, handelsgevinster grafisk).
> Oppgaveløsninger er momentlister + disposisjon, ikke ferdige essay.

#### Kapittel 3.1: Bistand og vekst

- **id:** `sok2007-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `sok2007-2-3`
- **Kapitteltype:** temakapittel (drøfting) + figur (Harrod-Domar)
- **description:** Hvordan bistand *i teorien* skaper vekst via savings gap (Harrod-Domar), hva empirien finner (Easterly, Burnside-Dollar), og hvorfor bistand ikke nødvendigvis virker.
- **Eksamensbelegg:** Bistand ~45 % (sjanger I) — savings gap, mikro-makro-paradoks, Samaritanens dilemma. Fast anvendt modul i A- og B-epoken. Prioritet: **kunne** (nivå 2, gir 20–40 % når den kommer).
- **Innholdskontrakt (DNA-drøfting + Harrod-Domar-figur):** **Teorien:** bistand tetter **sparegapet** (savings gap) mellom nødvendig investering og innenlandsk sparing i Harrod-Domar ($g = s/c - \delta$; ekstra utenlandsk kapital hever effektiv $s$ → høyere $g$). Vis koblingen til kap. 2.3. **Empirien (navngitt forankring — sensor belønner):** **Easterly (1999)** finner svak støtte for savings-gap-teorien; **Burnside & Dollar (2000)** finner at bistandens veksteffekt er **betinget av «good policies»** (finans-, penge-, handelspolitikk). **Hvorfor bistand ikke nødvendigvis gir vekst (posisjoner/spenninger):** (i) feil motiv bak allokering (politisk/militært/historisk, ikke fattigdom); (ii) nødhjelp er ikke vekstrettet; (iii) langsiktige helse-/utdanningseffekter uteblir; (iv) **mikro-makro-paradokset** — bistand er ikke øremerkbar, så vellykkede enkeltprosjekter gir ikke makrovekst (penger frigjøres til annet); (v) **Samaritanens dilemma** — ikke-troverdig trussel om å stanse bistand svekker mottakerens insentiv til reform. Pensumforankring: Todaro & Smith kap. 14 + Easterly (1999), Burnside & Dollar (2000) *(verifiser kapittel)*.
- **Oppgavesjangre:** I. Mønstereksempel: «Bruk Harrod-Domar-modellen til å vise hvordan bistand i teorien kan skape vekst. Hva finner de empiriske analysene til Easterly og Burnside-Dollar, og hvorfor gir bistand ikke nødvendigvis vekst i mottakerlandet?»
- **Typiske feil:** Utelate den empiriske litteraturen (Easterly, Burnside-Dollar) — det er en av de eksplisitt sanksjonerte feilene; stoppe ved teorien uten å drøfte hvorfor den svikter; ikke skille mikro-suksess fra makro-effekt (mikro-makro-paradokset); glemme Samaritanens dilemma / betingelsen om «good policies».
- **Quiz: 20 · Flashcards: 26**

#### Kapittel 3.2: Handel: komparative fortrinn og gevinst ved spesialisering

- **id:** `sok2007-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok2007-0-1`
- **Kapitteltype:** teori (regnefag/figur) + drøfting
- **description:** De statiske gevinstene ved handel fra komparative fortrinn — et enkelt to-land/to-vare-eksempel med alternativkostnader, tallmessig og grafisk.
- **Eksamensbelegg:** Handel ~50 % (sjanger J) — praktisk talt fast oppgave 3 i A-epoken (H2016/H2017/H2018 nesten identisk). Denne halvdelen er regne-/figurdelen; handelspolitikken er kap. 3.3. Prioritet: **kunne** (nivå 2, høyfrekvent).
- **Innholdskontrakt (DNA-regnefag):** **Komparativt fortrinn:** et land har komparativt fortrinn i den varen det produserer med lavest **alternativkostnad**, selv om det har absolutt fortrinn i begge. Enkelt **to-land/to-vare-eksempel** (tallmessig): produktivitetstall → alternativkostnader → hvem spesialiserer i hva → felles produksjon opp etter spesialisering → begge vinner ved handel til en byttepris mellom de to landenes alternativkostnader. Grafisk med produksjonsmulighetskurver (PPF) og relativ pris/bytteforhold (terms of trade). Skill **statiske** gevinster (bedre allokering, engangs) fra **dynamiske** (læring, teknologi — mot kap. 3.3). Pensumforankring: Todaro & Smith kap. 12 *(verifiser)*.
- **Oppgavesjangre:** J. Mønstereksempel: «Vis med et tallmessig to-land/to-vare-eksempel hvordan spesialisering etter komparative fortrinn gir gevinst ved handel, og illustrer grafisk med produksjonsmulighetskurver. Hvem produserer hva, og innenfor hvilket intervall må bytteprisen ligge?»
- **Typiske feil:** Forveksle absolutt og komparativt fortrinn; regne alternativkostnad feil vei; sette byttepris utenfor intervallet mellom landenes alternativkostnader; ren regning uten figur eller uten å vise at *begge* vinner.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 3.3: Handelspolitikk for utviklingsland

- **id:** `sok2007-3-3` · **number:** 3.3 · **estimatedMinutes:** 50 · **prerequisites:** `sok2007-3-2`
- **Kapitteltype:** temakapittel (drøfting)
- **description:** Hvorfor et utviklingsland kan ønske å diversifisere bort fra primærvarer selv med komparativt fortrinn der — terms of trade, infant industry, importsubstitusjon og dens problemer.
- **Eksamensbelegg:** Handelspolitikk er drøftingsdelen av handelsoppgaven (sjanger J, ~50 %); toppkarakter-differensiator (dynamiske vs. statiske gevinster). Prioritet: **kunne** (nivå 2).
- **Innholdskontrakt (DNA-drøfting):** **Faren ved spesialisering i primærvarer:** lav priselastisitet og inntektselastisitet → ustabile eksportinntekter og (Prebisch-Singer-hypotesen) **fallende terms of trade** over tid → argument for diversifisering. **Infant industry-argumentet:** en ny industri trenger midlertidig beskyttelse for å realisere dynamiske (lærings-)gevinster og bli konkurransedyktig → **importsubstitusjon**. **Problemene (posisjoner/spenninger):** midlertidig beskyttelse blir varig (rent-seeking); lite hjemmemarked gir ikke skalafordeler; tap av statiske handelsgevinster; svakt insentiv til effektivitet bak tollmuren → mange land skiftet til **eksportledet vekst**. **Drøftingsakse:** komparativt fortrinn (statisk, spesialiser) vs. strukturell endring (dynamisk, diversifiser). Pensumforankring: Todaro & Smith kap. 12 *(verifiser)*.
- **Oppgavesjangre:** J (drøftingsdel) + P (bredere valgessay om Sør/Nord-handel). Mønstereksempel: «Diskuter handelspolitikk for utviklingsland. Hvorfor kan et land ønske å diversifisere bort fra primærvarer selv med komparativt fortrinn der? Vurder infant industry-argumentet og problemene med importsubstitusjon.»
- **Typiske feil:** Behandle komparativt fortrinn som absolutt policy-anbefaling uten å se dynamiske gevinster/terms of trade; glemme problemene med importsubstitusjon (bare presentere argumentet); ikke navngi Prebisch-Singer / infant industry; deskriptiv gjengivelse uten å drøfte avveiningen.
- **Quiz: 18 · Flashcards: 24**

**Prøve-kvote Del 3:** 4 prøver (`sok2007-3-prove`, chapterNumber `3.P`) — 3.A begreper: savings gap, mikro-makro-paradoks, Samaritanens dilemma, komparativt vs. absolutt fortrinn, terms of trade, infant industry (sjanger A/I/J); 3.B bistand og vekst — Harrod-Domar savings gap + Easterly/Burnside-Dollar + hvorfor bistand svikter (sjanger I); 3.C handel — komparative fortrinn tallmessig + grafisk med byttepris-intervall (sjanger J); 3.D handelspolitikk for utviklingsland på drøftingsformat (sjanger J+P).

---

### Del 4 — Befolkning, fattigdomsfeller, landbruk og migrasjon *(prioritet: KUNNE — det roterende anvendte laget)*

#### Kapittel 4.1: Befolkning og fertilitet

- **id:** `sok2007-4-1` · **number:** 4.1 · **estimatedMinutes:** 45 · **prerequisites:** `sok2007-0-1`
- **Kapitteltype:** temakapittel (drøfting) + figur (befolkningspyramide)
- **description:** Hvorfor lavinntektsland kan ha rask, vedvarende befolkningsvekst — den demografiske overgangen, «hidden momentum» og det mikroøkonomiske fertilitetsvalget.
- **Eksamensbelegg:** Befolkning/fertilitet ~40 % (sjanger M) — «hidden momentum», aldersstruktur, mikroøkonomisk fertilitet. Fast rotasjonsmodul. Prioritet: **kunne** (nivå 2).
- **Innholdskontrakt (DNA-drøfting):** **Den demografiske overgangen:** ved stigende inntekt faller **dødeligheten først** (særlig spedbarnsdødelighet, bedre helse/ernæring), mens **fødselsratene justeres tregt** → høy befolkningsvekst i overgangsfasen. **«Hidden momentum of population growth»:** selv når fødselsraten faller til reproduksjonsnivå, fortsetter befolkningen å vokse i tiår fordi en **ung aldersstruktur** (mange i/under fruktbar alder) — illustrer med befolkningspyramide. **Mikroøkonomisk fertilitetsvalg:** barn som forsikring/arbeidskraft/alderdomstrygghet i fravær av institusjoner; **kvinners arbeidsmuligheter og utdanning** senker etterspørselen etter barn (alternativkostnad ved tid); kvantitet-kvalitet-avveiningen. Koble til fattigdomsfeller (kap. 4.2). Pensumforankring: Todaro & Smith kap. 6 *(verifiser)*.
- **Oppgavesjangre:** M. Mønstereksempel: «Hvorfor kan lavinntektsland oppleve rask befolkningsvekst når inntekten stiger? Forklar begrepet ‘hidden momentum of population growth’ og hvordan mikroøkonomiske fertilitetsvalg påvirkes av kvinners arbeidsmuligheter.»
- **Typiske feil:** Anta at lavere fødselsrate umiddelbart stopper befolkningsvekst (glemme hidden momentum / aldersstruktur); behandle fertilitet som eksogen kultur i stedet for et økonomisk valg; glemme at dødelighet faller *før* fødselsrater i overgangen.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 4.2: Fattigdomsfeller: ernæring og produktivitet

- **id:** `sok2007-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok2007-4-1`
- **Kapitteltype:** teori (regnefag/figur) + drøfting
- **description:** Ernæringskapasitetskurven og den brukkede arbeidstilbudskurven — hvordan underernæring låser en økonomi i en lav-lønn/lav-produktivitet-likevekt.
- **Eksamensbelegg:** Ernæringsfeller ~40 % (sjanger L) — kapasitetskurve, brukket arbeidstilbud, langsiktige kontrakter. **Figur obligatorisk.** Prioritet: **kunne** (nivå 2).
- **Innholdskontrakt (DNA-regnefag + figur):** **Ernæringskapasitetskurven:** sammenhengen mellom inntekt/ernæring og arbeidskapasitet — konveks-så-konkav (ved svært lav ernæring gir mer mat lite ekstra kapasitet, så bratt stigning, så metning). **Den brukkede (diskontinuerlige) arbeidstilbudskurven:** ved lav lønn/ernæring gir en liten lønnsøkning liten/ingen ekstra arbeidsinnsats (arbeideren har ikke energi) → arbeidsgiver betaler effektivitetslønn over markedsklarering. **Lav-lav-likevekt:** underernæring → lav produktivitet → lav lønn → fortsatt underernæring (selvforsterkende felle). **Drøftingsakse:** hvordan **langsiktige kontrakter** (overbetale tidlig for å bygge arbeiderens ernæring/kapasitet) kan bryte fellen, og hvorfor bedrifter **kvier seg** (poaching-problemet: en konkurrent kan ansette den nå velernærte arbeideren → investeringen tapes). **Figurkrav:** navngi aksene (ernæring/inntekt, arbeidskapasitet), kapasitetskurven, akkordlønnen, det brukkede tilbudspunktet. Pensumforankring: Todaro & Smith kap. 7 *(verifiser)*.
- **Oppgavesjangre:** L. Mønstereksempel: «Hvordan kan underernæring føre til at en økonomi låses i en lav-produktivitet/lav-inntekt-likevekt? Vis grafisk med ernæringskapasitetskurven og den brukkede arbeidstilbudskurven, og forklar hvordan langsiktige kontrakter kan avhjelpe problemet — og hvorfor bedrifter kvier seg.»
- **Typiske feil:** Figur uten forklaring av mekanismen; ikke se at fellen er *selvforsterkende* (toveis kausalitet ernæring↔produktivitet); glemme poaching-problemet som forklarer hvorfor markedet ikke løser det selv; behandle det som ren fattigdom uten kapasitetskoblingen.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 4.3: Landbruk: jordleiekontrakter og sharecropping

- **id:** `sok2007-4-3` · **number:** 4.3 · **estimatedMinutes:** 50 · **prerequisites:** `sok2007-0-1`
- **Kapitteltype:** temakapittel (drøfting) + insentivfigur
- **description:** Fast forpaktning vs. deling (sharecropping) — risiko/insentiv-avveiningen som forklarer hvorfor deling velges tross svakere insentiv.
- **Eksamensbelegg:** Landbruk/jordleie ~30 % (sjanger K) — fast forpaktning vs. sharecropping, risiko/insentiv. Prioritet: **kunne** (nivå 2). Kobler til asymmetrisk informasjon (kap. 5.2).
- **Innholdskontrakt (DNA-drøfting):** **Fast forpaktning (fixed rental):** bonden betaler fast leie og beholder **hele marginalproduktet** → sterkest innsatsinsentiv, men bærer **all risiko** (dårlig avling → tap). **Deling (sharecropping):** bonden beholder bare en **andel** av avlingen → svakere insentiv (marginalproduktet deles med jordeier), men **risikoen deles** med jordeieren. **Avveiningen (posisjoner/spenninger):** hvorfor velges sharecropping tross svakere insentiv? **Risikoaversjon** (bønder er fattige og risikoaverse), **manglende kreditt/forsikringsmarkeder** (kan ikke jevne ut inntekt selv), **informasjonsproblemer** (jordeier kan ikke observere innsats/uflaks → moral hazard). Sharecropping er en **andre-best-løsning** som balanserer insentiv mot risikodeling. Lønnsarbeid som tredje kontraktform (all risiko + svakest insentiv). Pensumforankring: Todaro & Smith kap. 9.5 *(verifiser)*.
- **Oppgavesjangre:** K. Mønstereksempel: «Hvorfor gir fast forpaktning sterkere insentiver enn sharecropping? Hvorfor kan både bonde og jordeier likevel foretrekke sharecropping? Drøft avveiningen mellom insentiv og risikodeling.»
- **Typiske feil:** Konkludere at fast forpaktning alltid er best fordi den gir sterkest insentiv — uten å se at risikoaversjon og manglende forsikring gjør sharecropping rasjonelt (eksplisitt sanksjonert feil); glemme informasjonsproblemet (moral hazard); behandle det som ren fordelingssak i stedet for insentiv/risiko-avveining.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 4.4: Strukturell transformasjon og migrasjon: Lewis og Harris-Todaro

- **id:** `sok2007-4-4` · **number:** 4.4 · **estimatedMinutes:** 55 · **prerequisites:** `sok2007-4-1`
- **Kapitteltype:** teori (modell) + drøfting
- **description:** Overgangen fra jordbruk til industri — Lewis-modellen med overskuddsarbeidskraft, Harris-Todaro og forventet urban lønn, og agglomerasjon.
- **Eksamensbelegg:** Strukturell transformasjon/migrasjon ~30 % (sjanger N) — Lewis, Harris-Todaro, uformell sektor, agglomerasjon. C-epoken berører agglomerasjon (Duranton). Prioritet: **kunne** (nivå 2).
- **Innholdskontrakt (DNA-regnefag/modell + drøfting):** **Lewis-modellen (dual økonomi):** en tradisjonell jordbrukssektor med **overskuddsarbeidskraft** (marginalprodukt ≈ 0) og en moderne industrisektor. Industrien ansetter til en fast, lav lønn (litt over eksistensminimum) fra det ubegrensede tilbudet → profitt reinvesteres → industrien vokser periode for periode; **overskuddet uttømmes** til slutt, og jordbrukslønnen begynner å stige («Lewis turning point»). **Harris-Todaro:** migrasjon styres av **forventet** urban lønn (faktisk lønn × sannsynlighet for jobb) — kan gi rasjonell migrasjon selv med urban arbeidsledighet / **uformell sektor** som venterom; forklarer «overmigrasjon». **Agglomerasjon:** en bys likevektsstørrelse bestemmes av **agglomerasjonsgevinster** (produktivitet, kunnskapsspredning) vs. **trengselskostnader** (husleie, pendling) — Duranton. **Drøftingsakse:** er migrasjon til byene et problem eller en nødvendig del av utvikling? Pensumforankring: Todaro & Smith kap. 7 + Duranton (agglomerasjon) *(verifiser)*.
- **Oppgavesjangre:** N. Mønstereksempel: «Beskriv transformasjonen fra jordbruks- til industriøkonomi med Lewis-modellen. Hvorfor er overskuddsarbeidskraft viktig, og hvorfor stopper migrasjonen etter hvert opp? Forklar med Harris-Todaro hvorfor migrasjon kan fortsette selv med urban arbeidsledighet.»
- **Typiske feil:** Glemme antakelsen om overskuddsarbeidskraft (marginalprodukt ≈ 0) som bærer Lewis-modellen; ikke skille faktisk fra *forventet* lønn i Harris-Todaro; behandle urban arbeidsledighet som irrasjonell; glemme Lewis turning point.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 4.5: Humankapital og utdanning

- **id:** `sok2007-4-5` · **number:** 4.5 · **estimatedMinutes:** 45 · **prerequisites:** `sok2007-1-2`
- **Kapitteltype:** temakapittel (drøfting) + enkel figur (avkastning)
- **description:** Privat vs. sosial avkastning og kostnad ved utdanning, eksternaliteter/spillovers, og humankapitalens rolle i vekst.
- **Eksamensbelegg:** Humankapital/utdanning ~35 % (sjanger — deloppgave, ofte i måle- eller vekstblokk). Privat vs. sosial avkastning/kostnad er den sentrale distinksjonen. Prioritet: **kunne** (nivå 2).
- **Innholdskontrakt (DNA-drøfting):** **Utdanning som investering:** kostnad nå (skolepenger + alternativkostnad = tapt inntekt) mot fremtidig høyere lønn → avkastningsberegning (internrente/nåverdi, konseptuelt — koble til nåverdi). **Privat vs. sosial:** **privat avkastning** (individets egen lønnsgevinst) vs. **sosial avkastning** (samfunnets, inkludert **positive eksternaliteter/spillovers** — mer produktive naboer, lavere kriminalitet, bedre helse/demokrati); **privat kostnad** vs. **sosial kostnad** (offentlig subsidiering). **Poeng sensor honorerer:** når sosial avkastning > privat avkastning (pga. eksternaliteter), investerer individene for lite → **begrunner offentlig subsidiering** av (særlig grunn)utdanning. Humankapital i vekst: utvider Solow (kap. 2.2/2.4), endrer konvergensprediksjonene; Benhabib & Spiegel om humankapital og TFP. Pensumforankring: Todaro & Smith kap. 8 *(verifiser)*.
- **Oppgavesjangre:** deloppgave (drøfting). Mønstereksempel: «Forklar forskjellen mellom privat og sosial avkastning ved utdanning. Hvorfor kan det være samfunnsøkonomisk lønnsomt å subsidiere utdanning selv om den private avkastningen alene ikke tilsier det?»
- **Typiske feil:** Ikke skille privat fra sosial avkastning/kostnad → miste eksternalitets-poenget som begrunner subsidiering (eksplisitt sanksjonert feil); glemme alternativkostnaden (tapt inntekt) i utdanningskostnaden; behandle utdanning som ren konsum, ikke investering.
- **Quiz: 16 · Flashcards: 22**

**Prøve-kvote Del 4:** 4 prøver (`sok2007-4-prove`, chapterNumber `4.P`) — 4.A begreper: hidden momentum, demografisk overgang, ernæringskapasitetskurve, sharecropping vs. fast forpaktning, overskuddsarbeidskraft, forventet urban lønn, privat/sosial avkastning (sjanger A/K/L/M/N); 4.B befolkning + ernæringsfeller med figur (sjanger M+L); 4.C landbruk/jordleie — insentiv/risiko-avveining + Lewis/Harris-Todaro migrasjon (sjanger K+N); 4.D humankapital + en blandet anvendt drøftingsoppgave på eksamensnivå.

---

### Del 5 — Moderne utviklingsøkonomi *(prioritet: KJENNE — C-epoken, toppkarakter-differensiator)*

#### Kapittel 5.1: Institusjoner, geografi og deep vs. proximate determinants

- **id:** `sok2007-5-1` · **number:** 5.1 · **estimatedMinutes:** 50 · **prerequisites:** `sok2007-2-2`
- **Kapitteltype:** temakapittel (drøfting)
- **description:** Skillet mellom «dype» (institusjoner, geografi, kultur, kolonihistorie) og «proksimate» (kapital, arbeid, teknologi) determinanter av utvikling — og hvordan de henger kausalt sammen.
- **Eksamensbelegg:** Institusjoner/deep determinants ~20 % — sterkere i C-epoken (Agneman, V2024 Del C valgessay P). Toppkarakter-differensiator; må dekkes fordi V2024 er siste kjente format. Prioritet: **kjenne** (nivå 3).
- **Innholdskontrakt (DNA-drøfting):** **Proksimate determinanter** = de umiddelbare inntaksfaktorene i produktfunksjonen (fysisk kapital, humankapital, teknologi/TFP) — det Solow/vekstregnskap måler. **Deep determinants** = de *dyptliggende* årsakene til at land akkumulerer ulikt: **institusjoner** (eiendomsrett, rettsstat, «inclusive vs. extractive» — Acemoglu-tradisjonen), **geografi** (klima, sykdomsbyrde, kystnærhet — Sachs/Diamond), **kultur** (tillit, normer), **kolonihistorie**. «Dype» i den forstand at de ligger *bak* de proksimate og forklarer *hvorfor* noen akkumulerer kapital/teknologi og andre ikke. **Posisjoner/spenninger:** institusjoner-først (geografi virker *gjennom* institusjoner) vs. geografi-først (direkte effekter via sykdom/produktivitet) — og problemet med **kausalitet vs. korrelasjon** (rike land har gode institusjoner *og* omvendt → motiverer kap. 5.3). Empiriske ankere: **Alsan (2015)** (tsetsefluer → svakere stater i Afrika, geografi-kanal); **plog-studien** (plog-egnet jordbruk → mannsdominert arbeid → varige normer om kvinners yrkesdeltakelse, kultur-kanal); Acemoglu-Johnson-Robinson (kolonial institusjonsarv) *(verifiser)*.
- **Oppgavesjangre:** P (valgessay). Mønstereksempel: «Hva er de viktigste ‘deep determinants’ av økonomisk utvikling, og i hvilken forstand er de ‘dype’? Drøft forholdet mellom dype og proksimate determinanter, og velg to dype determinanter og drøft hvordan de kausalt henger sammen.»
- **Typiske feil:** Blande dype og proksimate determinanter (kapital er proksimat, institusjoner er dyp); presentere korrelasjon som kausalitet; ramse opp uten å drøfte *hvordan* de henger sammen (essayet vurderes på argumentets sammenheng); pensum-løs synsing uten navngitte studier.
- **Quiz: 16 · Flashcards: 24**

#### Kapittel 5.2: Markeder og asymmetrisk informasjon i utviklingsland

- **id:** `sok2007-5-2` · **number:** 5.2 · **estimatedMinutes:** 45 · **prerequisites:** `sok2007-4-3`
- **Kapitteltype:** temakapittel (drøfting)
- **description:** Markedssvikt i utviklingsland — adverse selection og moral hazard i kreditt-, forsikrings- og arbeidsmarkeder, og hvorfor markeder er tynne eller fraværende.
- **Eksamensbelegg:** Markeder/asymmetrisk informasjon ~15 % (V2024 Del B3, sjanger B/kortsvar). Prioritet: **kjenne** (nivå 3). Bygger på jordleie (kap. 4.3).
- **Innholdskontrakt (DNA-drøfting):** **Asymmetrisk informasjon:** den ene parten vet mer enn den andre. **Adverse selection (skjult egenskap):** før kontrakt — f.eks. kredittmarked der långiver ikke kan skille gode fra dårlige låntakere → høy rente skremmer bort de gode → markedet kan kollapse; forsikring der bare høyrisiko-personer kjøper. **Moral hazard (skjult handling):** etter kontrakt — låntaker/forsikret endrer atferd fordi risikoen er dekket (jf. sharecropping-innsats, kap. 4.3). **Konsekvens for utviklingsland:** kreditt- og forsikringsmarkeder er **tynne eller fraværende** → fattige kan ikke jevne ut inntekt, investere eller ta risiko → forsterker fattigdomsfeller (kap. 4.2) og forklarer sharecropping (kap. 4.3). **Løsninger:** sikkerhet/pant, gruppelån/mikrofinans (felles ansvar løser informasjonsproblemet), langsiktige relasjoner. Pensumforankring: Todaro & Smith (markeder/informasjon) *(verifiser)*.
- **Oppgavesjangre:** B (kortsvar) + P. Mønstereksempel: «Forklar forskjellen mellom adverse selection og moral hazard, og gi ett eksempel på hver fra et kredittmarked i et utviklingsland. Hvorfor kan asymmetrisk informasjon føre til at markedet blir tynt eller forsvinner?»
- **Typiske feil:** Bytte om adverse selection (før kontrakt, skjult egenskap) og moral hazard (etter kontrakt, skjult handling); ikke koble til hvorfor markeder er tynne/fraværende; glemme koblingen til sharecropping og fattigdomsfeller; skrive langt og upresist (V2024 Del B-regelen: få setninger).
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 5.3: Kausal inferens og «the credibility revolution»

- **id:** `sok2007-5-3` · **number:** 5.3 · **estimatedMinutes:** 50 · **prerequisites:** `sok2007-5-1`
- **Kapitteltype:** temakapittel (drøfting/metode)
- **description:** Hvordan moderne utviklingsøkonomi identifiserer *kausale* effekter (RCT, DiD, IV konseptuelt), og fordeler/ulemper ved det sterke kausalfokuset.
- **Eksamensbelegg:** Kausal inferens/credibility revolution ~10 % — kun C-epoken (V2024 Del C3, sjanger P/metodeessay). Prioritet: **kjenne** (nivå 3). Konseptuelt, ikke regnet.
- **Innholdskontrakt (DNA-drøfting):** **Grunnproblemet:** korrelasjon ≠ kausalitet (jf. kap. 5.1); det kontrafaktiske (hva ville skjedd uten tiltaket?) er uobserverbart. **The credibility revolution:** skiftet mot troverdige identifikasjonsstrategier. Tre metoder *konseptuelt* (prinsipp + én nøkkelantakelse + fordel/ulempe hver): **RCT (randomiserte kontrollerte forsøk)** — randomisering gir sammenlignbare grupper; antakelse: vellykket randomisering + ekstern validitet; **DiD (forskjell-i-forskjell)** — sammenlign endring over tid mellom behandlings- og kontrollgruppe; antakelse: parallelle trender; **IV (instrumentvariabel)** — bruk en variabel som påvirker behandling men ikke utfall direkte; antakelse: relevans + eksklusjon. **Drøftingsakse (fordeler/ulemper ved sterkt kausalfokus):** intern validitet og troverdighet vs. **ekstern validitet** (generaliserer et RCT i én landsby?), fokus på små «identifiserbare» spørsmål vs. store strukturelle (deep determinants er vanskelige å randomisere). Empirisk anker: RCT-tradisjonen (Banerjee-Duflo-Kremer) *(verifiser)*.
- **Oppgavesjangre:** P (metodeessay). Mønstereksempel: «Hva menes med ‘the credibility revolution’ i utviklingsøkonomi? Velg én metode for kausal inferens, forklar prinsippet og én nøkkelantakelse, og drøft fordeler og ulemper ved det sterke kausalfokuset i moderne utviklingsøkonomi.»
- **Typiske feil:** Behandle korrelasjon som kausalitet (selve poenget metoden løser); ikke oppgi identifikasjonsantakelsen (parallelle trender for DiD, eksklusjon for IV); glemme ekstern validitet-innvendingen; ramse opp metoder uten å drøfte avveiningen (essayet vurderes på sammenheng).
- **Quiz: 16 · Flashcards: 22**

**Prøve-kvote Del 5:** 4 prøver (`sok2007-5-prove`, chapterNumber `5.P`) — 5.A begreper: deep vs. proximate determinants, institusjoner (inclusive/extractive), adverse selection, moral hazard, RCT, parallelle trender, ekstern validitet (sjanger A/O); 5.B deep determinants — institusjoner vs. geografi med kausalitetsdrøfting (sjanger P); 5.C asymmetrisk informasjon i utviklingslands markeder på kortsvarsform (sjanger B); 5.D kausal inferens / credibility revolution metodeessay (sjanger P).

---

### Del 6 — Eksamenstrening

> Del 6 gjenbruker hele boka. **Ingen egne temaprøver** (delen består av
> begrepsdrill, to sjangerkapitler og tre komplette øvingseksamener). Bygges av
> én agent som leser hele skjelettet. Øvingseksamenene trener **alle tre
> eksamensformatene** eksplisitt — bokas viktigste designgrep.

#### Kapittel 6.1: Begrepsdrill: definisjonsbanken

- **id:** `sok2007-6-1` · **number:** 6.1 · **estimatedMinutes:** 60 · **prerequisites:** `sok2007-5-3`
- **Kapitteltype:** sjangerkapittel (begrepsdrill — sjanger A/O/kortsvar)
- **description:** De ~20 faste definisjonsgjengangerne presist definert i emnets notasjon — for begrepsdeloppgaven (Mal A), kortsvar (V2024 Del B) og flervalg (Del A).
- **Eksamensbelegg:** Definisjoner må sitte presist i alle tre epokene (§4); begrepsdeloppgave er 20 % i treoppgavevarianten og fast kortsvar/flervalg i C-epoken. Prioritet: **perfekt** (definisjonene) / samlekapittel.
- **Innholdskontrakt:** **Definisjonsbank** (definisjon + kort uttrykk/figur der relevant) for gjengangerne på tvers av boka: BNI per innbygger, PPP, HDI (tre komponenter), Lorenz-kurve, Gini-koeffisient, Kuznets-kurve, head count/poverty gap/MPI, steady state, avtakende kapitalavkastning, betinget vs. ubetinget konvergens, kapital/produkt-forhold, TFP, faktorakkumulering, ikke-rivaliserende teknologi, savings gap, mikro-makro-paradoks, Samaritanens dilemma, komparativt fortrinn, terms of trade, infant industry, hidden momentum, overskuddsarbeidskraft, forventet urban lønn, sharecropping vs. fast forpaktning, adverse selection, moral hazard, deep vs. proximate determinants, ekstern validitet. Hver med den vanligste feilen og et «pluss-poeng» (nyansen som løfter til A). **Begrepsmal:** definisjon → uttrykk/figur → én setnings intuisjon → typisk feil.
- **Oppgavesjangre:** A, O, kortsvar. Mønstereksempel: «Definer kort og presist (maks to setninger hver): (a) betinget konvergens, (b) savings gap, (c) hidden momentum, (d) moral hazard, (e) komparativt fortrinn, (f) Gini-koeffisienten.»
- **Typiske feil:** Upresise/ufullstendige definisjoner (feil antall HDI-komponenter, Kuznets snudd, adverse/moral hazard forvekslet); skrive langt der «few sentences» kreves; definisjon uten avsender der pensumforankring gir uttelling.
- **Quiz: 24 · Flashcards: 60** (definisjonsbanken er bokas samlende begrepsbank)

#### Kapittel 6.2: Sjangerkapittel: drøftings- og valgessayet

- **id:** `sok2007-6-2` · **number:** 6.2 · **estimatedMinutes:** 60 · **prerequisites:** `sok2007-6-1`
- **Kapitteltype:** sjangerkapittel (DNA-drøfting) + modellbesvarelse
- **description:** Håndverket i det åpne drøftings-/valgessayet (Mal B og V2024 Del C) — disponering, pensumforankring, motargument — med gjennomskrevet A-besvarelse og kommentert C-besvarelse.
- **Eksamensbelegg:** Drøftingsessay er hele Mal B (4×25 %) og V2024 Del C (valg to av tre, maks 20, vurdert på argumentets sammenheng). Sjanger P. Prioritet: **perfekt** (dette er den vanligste svarformen på tvers av epoker).
- **Innholdskontrakt (DNA-drøfting sjanger- + modellbesvarelse-DNA):** **Oppskrift (trinn + tidsbudsjett):** 1) problemforståelse — hva spør oppgaven egentlig om; 2) begrepsavklaring MED pensumforankring (navngitt forfatter/studie); 3) strukturert drøfting med **motargument** (posisjon → innvending → veiing); 4) figur/modell der relevant; 5) konklusjon som svarer på spørsmålet. **Gjennomskrevet A-besvarelse** (f.eks. på deep-determinants- eller bistands-essayet) med margnotater («her: begrep + forankring», «her: motargument — dette løfter til A», «her: figur som støtter»). **Kommentert C-besvarelse** — samme oppgave, korrekt men flat (gjengivelse uten drøfting, tynn forankring), med notater om gapet opp til A. **Sensorblikket:** momentliste + vektlegging (sammenheng > opplisting). 4–6 nyskrevne essayoppgaver på tvers av boka (bistand, handel/diversifisering, deep determinants, kausal inferens, sharecropping) med **momentliste + disposisjon** som løsning (ikke fullt essay).
- **Oppgavesjangre:** P (+ I/J/K som essaytema). Mønstereksempel: «Velg to av tre: (a) drøft dype vs. proksimate determinanter; (b) drøft handelspolitikk og diversifisering for Global Sør; (c) drøft det sterke kausalfokuset i moderne utviklingsøkonomi. Lag momentliste og disposisjon for de to du velger.»
- **Typiske feil:** Deskriptiv gjengivelse uten drøfting; pensum-løs synsing (ingen navngitte studier); skrive langt uten struktur; ikke svare på selve spørsmålet; glemme motargumentet som løfter til A.
- **Quiz: 12 · Flashcards: 10**

#### Kapittel 6.3: Sjangerkapittel: flervalg og kortsvar (V2024-format)

- **id:** `sok2007-6-3` · **number:** 6.3 · **estimatedMinutes:** 45 · **prerequisites:** `sok2007-6-1`
- **Kapitteltype:** sjangerkapittel (flervalg + kortsvar)
- **description:** Teknikken for flervalg (V2024 Del A) og korte, presise kortsvar (Del B) — inkludert de små beregningene (befolkning etter én periode, forhandlingsintervall).
- **Eksamensbelegg:** V2024 Del A (6 flervalg, 3 poeng/riktig) + Del B (3 kortsvar, «few sentences»). Sjanger O + kortsvar. Konflikt/spillteori-flervalget (~5 %) og de enkle beregningene dekkes her. Prioritet: **kunne** (nivå 2, siste kjente format).
- **Innholdskontrakt:** **Flervalgsteknikk (O):** konseptuelle spørsmål (Kuznets-retning, WTO/bestevilkårsklausul, geografi/plog-hypotesen) og **enkle beregninger** (befolkning etter én periode gitt fertilitet og kjønnsratio; forhandlingsintervallet i et konflikt-spill gitt forventet krigsutfall — grunnleggende spillteori/forhandling). Elimineringsstrategi; vanlige distraktorer. **Kortsvarsteknikk (Del B):** presist, «no more than a few sentences», vurdert kun på riktighet — lengde belønnes ikke. Konflikt-modulen (~5 %): forhandlingsintervallet = differansen mellom hva partene forventer av krig vs. fred (kort, konseptuelt). 6–10 flervalg + 4–6 kortsvarsoppgaver på tvers av boka, alle med kort begrunnet fasit.
- **Oppgavesjangre:** O + kortsvar. Mønstereksempel (O): «Ifølge Kuznets-hypotesen: hvordan endrer ulikheten innad i et land seg etter hvert som landet utvikler seg? (a) først opp, så ned; (b) først ned, så opp; (c) lineært ned; (d) lineært opp.» (fasit: a).
- **Typiske feil:** Skrive langt på kortsvar der presisjon kreves; regnefeil i befolknings-/forhandlingsberegningene; velge distraktor pga. delvis sann formulering; ikke lese om det spørres om «riktig» eller «ikke riktig».
- **Quiz: 20 · Flashcards: 10**

#### Kapittel 6.4: Øvingseksamen 1 — Mal A (tre deloppgaver, Todaro-Smith)

- **id:** `sok2007-6-4` · **number:** 6.4 · **estimatedMinutes:** 75 · **prerequisites:** `sok2007-6-3`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett Mal A-sett (3 deloppgaver 40/30/30, 4 timer): måle-/ulikhetsoppgave + vekst-/bistandsoppgave + handelsoppgave, med A-besvarelser.
- **Eksamensbelegg:** Speiler den dominerende A-malen (~2010–2019, fortsatt sannsynlig fallback). Prioritet: **perfekt** (formattrening).
- **Innholdskontrakt (DNA-øvingseksamen):** Nyskrevet sett med reell vekting og varighet (4 t): **Oppgave 1 (40 %)** måling/ulikhet — inntekt-som-mål + HDI + Lorenz/Gini regnet + Kuznets; **Oppgave 2 (30 %)** vekst/bistand — Solow steady state + konvergens + Harrod-Domar-kontrast + bistand via savings gap med empiri; **Oppgave 3 (30 %)** handel — komparative fortrinn tallmessig + handelspolitikk/diversifisering. Løsningsforslag i eget `collapsible` per oppgave (A-besvarelse med figurbeskrivelse i ord + regning + verbal tolkning), med `tip`-notat om delpoeng/vekting og «show your steps».
- **Oppgavesjangre:** A, B, C, D, E, F, I, J. Mønstereksempel: hele settet.
- **Typiske feil:** Feil tidsbudsjett (glemme 40/30/30-vektingen); figur uten tolkning; utelate empirien i bistandsoppgaven; ikke vise stegene.
- **Quiz: 8 · Flashcards: 0**

#### Kapittel 6.5: Øvingseksamen 2 — Mal C Weil (seks regne-/drøfteoppgaver, H2023)

- **id:** `sok2007-6-5` · **number:** 6.5 · **estimatedMinutes:** 75 · **prerequisites:** `sok2007-6-4`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett Mal C (Weil)-sett — seks oppgaver med ulik vekt (10/25/20/15/10/20), tyngdepunkt på regning: vekstregnskap, Solow steady state, endogen teknologi, Kuznets.
- **Eksamensbelegg:** Speiler H2023 (Weil-regneformatet). Prioritet: **kunne** (formattrening + regnedrill).
- **Innholdskontrakt (DNA-øvingseksamen):** Nyskrevet sett: (1) begrep/kort (10); (2) **vekstregnskap** $\hat F$/$\hat A$-dekomponering (25); (3) **modifisert Solow steady state** med effektivitetsfaktor (20) — inkludert nøkkelutledningen $e = A^{\alpha/(1-\alpha)}$ (H2023-fellen); (4) **konvergens/humankapital** drøfting (15); (5) **Kuznets** kort (10); (6) **endogen teknologi** $\hat A = \gamma_A\mu L$ + innhentingstid (20). Løsningsforslag per oppgave med fullt førte steg («show your steps»; delpoeng ved riktig framgangsmåte) og verbal drøfting (regning alene gir ikke full uttelling). `tip`-notat om H2023-fellen (feil relasjon $e = A^{\alpha/(1-\alpha)}$ kutter maks).
- **Oppgavesjangre:** G, H, E, D. Mønstereksempel: hele settet.
- **Typiske feil:** Ren regning uten drøfting (H2023-regelen); den modifiserte Solow-fellen (bruke feil at oppgaven gir vekstraten til $A$, ikke til $e$); glemme innhentingstidens logaritme.
- **Quiz: 8 · Flashcards: 0**

#### Kapittel 6.6: Øvingseksamen 3 — Mal C Agneman (flervalg + kortsvar + valgessay, V2024)

- **id:** `sok2007-6-6` · **number:** 6.6 · **estimatedMinutes:** 75 · **prerequisites:** `sok2007-6-5`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett V2024-tredeling: Del A seks flervalg (3 poeng/riktig), Del B tre kortsvar (maks 15), Del C tre åpne essay der studenten velger to (maks 20, argumentets sammenheng).
- **Eksamensbelegg:** Speiler V2024 (Agneman) — **siste kjente format**, mest sannsynlige for et fremtidig sett. Prioritet: **perfekt** (formattrening på siste kjente mal).
- **Innholdskontrakt (DNA-øvingseksamen):** Nyskrevet sett: **Del A** seks flervalg på tvers av boka (Kuznets, geografi/plog, WTO/handel, befolkningsberegning, konflikt-forhandlingsintervall, en Solow-konseptuell); **Del B** tre kortsvar («few sentences» — f.eks. adverse selection vs. moral hazard i kreditt; hva HDI måler; hvorfor sharecropping); **Del C** tre valgessay (deep determinants; komparative fortrinn/diversifisering; credibility revolution), studenten velger to. Løsningsforslag: flervalg med kort begrunnet fasit; kortsvar som modell-«few sentences»; essay som **momentliste + disposisjon** (ikke fullt essay). `tip`-notat: Del C vurderes på argumentets sammenheng; Del B på riktighet, ikke lengde.
- **Oppgavesjangre:** O, kortsvar, P (+ tverrsnitt av A–N). Mønstereksempel: hele settet.
- **Typiske feil:** Skrive langt på Del B; ikke velge de to essayene man kan best i Del C; regnefeil i flervalgsberegningene; essay uten struktur/forankring.
- **Quiz: 8 · Flashcards: 0**

**Prøve-kvote Del 6:** ingen egne temaprøver (delen består av begrepsdrill + to sjangerkapitler + 3 øvingseksamener).

---

### Kvotesammendrag (quiz/flashcards/prøver) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1 | 14 | 14 | 0 |
| 1 | 1.1–1.5 | 20+18+22+20+14 = **94** | 26+24+22+24+10 = **106** | 4 |
| 2 | 2.1–2.6 | 24+22+20+20+18+16 = **120** | 22+22+20+18+18+12 = **112** | 4 |
| 3 | 3.1–3.3 | 20+20+18 = **58** | 26+22+24 = **72** | 4 |
| 4 | 4.1–4.5 | 20+20+18+18+16 = **92** | 24+22+22+20+22 = **110** | 4 |
| 5 | 5.1–5.3 | 16+16+16 = **48** | 24+22+22 = **68** | 4 |
| 6 | 6.1–6.6 | 24+12+20+8+8+8 = **80** | 60+10+10+0+0+0 = **80** | 0 (3 øvingseksamener) |
| **Sum** | **31 kap.** | **556** | **648** | **20 + 3 ØE** |

**Kontrollsum:** quiz $14+94+120+58+92+48+80 = \mathbf{556 \ge 500}$ ✓ ·
flashcards $14+106+112+72+110+68+80 = \mathbf{648 \ge 500}$ ✓.

Kvotene er **minimum** per kapittel; forfatteren kan overskyte, aldri underskride.
**Flashcards er bevisst løftet godt over gulvet (648, ~148 over 500)** fordi
SOK2007 er et **begrepsrikt drøftingsfag med et lite regneapparat** (audit-lærdom
7. juli: fakta-/begrepsrike fag skal ha høy flashcard-tetthet): definisjonene
*må* sitte presist i alle tre epokene, begrepsoppgaven/kortsvaret er en egen fast
oppgavetype fra 2020, og det verbale repertoaret (bistandslitteraturen,
sharecropping-avveiningen, hidden momentum, deep vs. proximate determinants,
adverse selection/moral hazard, kausal-inferens-metodene) er stort. Fordelingen
speiler eksamensvekten: de to bankerne (Del 1 måling/ulikhet + Del 2 vekst) står
for 214 av 556 quiz og 218 av 648 flashcards — de to søylene som går igjen i alle
tre epokene — mens begrepsdrillen (6.1, 60 flashcards) er den samlende
definisjonsbanken. Quiz ligger komfortabelt over gulvet (drilltunge søyler +
sjangerkapitler).

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–5, 20 totalt)

Hver prøve består av nyskrevne oppgaver i eksamens sjangre, med løsningsforslag
(A-besvarelse med figurbeskrivelser i ord + regning + verbal tolkning/drøfting) og
poengfordeling. Omfang i minutter. Prøvekapitler legges etter byggekontraktens
spesifikasjon (`sok2007-<del>-prove`, chapterNumber `<del>.P`). Prøvene per del er
spesifisert i «Prøve-kvote Del N»-linjene under hver del over. Samlet dekker de 20
temaprøvene + 3 øvingseksamenene sjangrene A–P minst én gang, og alle tre
eksamensformatene (Mal A tre deloppgaver, Mal B/C Weil-regning, Mal C
Agneman-tredeling).

### Øvingseksamener (3 komplette sett — kap. 6.4–6.6)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (kap. 6.4) | Mal A (Todaro-Smith, 40/30/30) | Oppg. 1 måling/ulikhet 40 % + oppg. 2 vekst/bistand 30 % + oppg. 3 handel 30 % (sjanger A–F, I, J) |
| Øvingseksamen 2 (kap. 6.5) | Mal C Weil (H2023, 6 oppg. 10/25/20/15/10/20) | Vekstregnskap + modifisert Solow + endogen teknologi + konvergens + Kuznets (sjanger G, H, E, D) — regnetyngdepunkt |
| Øvingseksamen 3 (kap. 6.6) | Mal C Agneman (V2024, flervalg + kortsvar + valgessay) | Del A flervalg (O) + Del B kortsvar + Del C valgessay (P) — tverrsnitt av hele boka |

De tre settene trener **alle tre eksamensformatene** eksplisitt (bokas viktigste
designgrep) og dekker samlet sjangrene A–P minst én gang; de to søylene (vekst +
måling/ulikhet) trenes i alle tre.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (4 t, kode C med matematisk formelsamling +
   kalkulator; Green-epoken hjemmeeksamen), de **tre malene over epokene** (A tre
   deloppgaver, B fire essay, C Weil-regning / Agneman-tredeling), og prognosen
   (fra kap. 0.1: sikker vekstoppgave + måle-/ulikhetsoppgave + 2–3 anvendte
   moduler, formatusikkerhet).
2. **Prioriteringskartet** — temafrekvens-tabellen omgjort til tre lesenivåer:
   perfekt (Del 1 måling/ulikhet + Del 2 vekst: HDI, Lorenz/Gini, Kuznets, Solow
   steady state/konvergens, Harrod-Domar-kontrast), kunne (Del 3 bistand/handel +
   Del 4 befolkning/ernæringsfeller/landbruk/migrasjon/humankapital +
   vekstregnskap), kjenne (Del 5 institusjoner/deep determinants, markeder/
   informasjon, kausal inferens).
3. **Sjangerguiden** — oppgavetypene A–P med løsningsoppskriftene fra
   drillkapitlene (1.5 måle-/ulikhetsoppgaven, 2.6 vekstoppgaven) og
   sjangerkapitlene (6.2 drøftingsessay, 6.3 flervalg/kortsvar) i kortform:
   måle-algoritmen, Solow-algoritmen, Harrod-Domar/Solow-sammenligningen,
   bistands-drøftingen, komparative-fortrinn-oppsettet, drøftingsessay-oppskriften.
4. **Sensorreglene** — metareglene (modell + figur + intuisjon er én leveranse;
   vis stegene; definisjonene må sitte; koble til navngitt empiri; presisjon ikke
   lengde; metodefrihet + egne forutsetninger godtas) + toppsjikt-listen (betinget
   vs. ubetinget konvergens; bistandseffekten betinget av politikk; mikro-makro-
   paradoks/Samaritanens dilemma; risiko/insentiv i sharecropping; poaching i
   ernæringskontrakter; deep vs. proximate kausalitet) fra kap. 0.1.
5. **Feilkatalogen** — de typiske feilene samlet (§5 i analysen): Harrod-Domar/
   Solow-forveksling; nivå vs. vekst; ubetinget der modellen gir betinget
   konvergens; figur uten forklaring; regning uten drøfting; utelatt empiri;
   oversett risiko/insentiv i jordleie; privat vs. sosial avkastning; glemt hidden
   momentum; langt og upresist; den modifiserte Solow-fellen — hver med henvisning
   til kapitlet som forebygger den.
6. **Formelark i emnets notasjon** — én side: Solow $y = A\,k^{\alpha}$, steady
   state $s\,f(k^*) = (n+\delta)k^*$, $k^* = (sA/(n+\delta))^{1/(1-\alpha)}$;
   Harrod-Domar $g = s/c - \delta$; vekstregnskap $\hat F = \alpha\hat k +
   (1-\alpha)\hat h$, $\hat A = \hat y - \hat F$; endogen teknologi $\hat A =
   \gamma_A\mu L$; Gini $G = A/(A+B)$; HDI (tre komponenter). Marker hva som skal
   *utledes/tolkes* (avtakende MPK, nivå-vs-vekst, savings gap, Gini geometrisk)
   vs. hva som bare slås opp i formelsamlingen (derivasjons-/logaritmeregler).
7. **Figurbiblioteket** — standardfigurene i ord med merkekrav: Solow-diagrammet
   (produktfunksjon, sparekurve, utvanningslinje $(n+\delta)k$, steady state);
   Lorenz-kurven + Gini-arealene $A$/$B$ med navngitte akser; Kuznets omvendt U;
   ernæringskapasitetskurven + brukket arbeidstilbud; komparative fortrinn med PPF
   og byttepris-intervall; befolkningspyramiden — hver med akser, kurver og
   tilpasnings-/skjæringspunkter navngitt.
8. **Studieløp** — anbefalt progresjon (10-ukers og 3-ukers intensivvariant): Del
   1 (bankeren måling/ulikhet) → Del 2 (bankeren vekst) → Del 3–4 (det anvendte
   laget) → Del 5 (moderne, toppkarakter), prøver underveis, øvingseksamenene de
   siste ukene under tidspress (240 min) — og terp **alle tre formatene** (6.4–6.6)
   fordi formatet er usikkert.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `sok2007` med alle 31
   kapitler (id/number/title/description/estimatedMinutes/topics/prerequisites)
   etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra
   makrostruktur-tabellen (§2). Registrer emnet i
   `src/app/trinn/hoyere/institusjoner.ts` under **NTNU** med visningsnavn
   «SOK2007 Utviklingsøkonomi».
2. **Del 0** (kap. 0.1) — etablerer de tre eksamensformatene, sjangernavnene A–P,
   frekvenstallene og avgrensningen (hva som hører hjemme et annet sted) som
   resten refererer til.
3. **Del 1** (måling/ulikhet) — bankeren + fordelingsspråket (Lorenz/Gini) som
   Kuznets og humankapital bruker.
4. **Del 2** (vekst) — Solow-apparatet som bistand (savings gap), humankapital og
   deep/proximate-skillet bygger på. Én byggeagent per hel del (Del 1 og Del 2 er
   5–6 kapitler); drillkapitlet (1.5 / 2.6) bygges av samme agent som delen.
5. **Del 3–4** (det anvendte laget) i avhengighetsrekkefølge — Del 3
   (bistand/handel; bistand bygger på Harrod-Domar kap. 2.3) → Del 4 (befolkning/
   ernæring/landbruk/migrasjon/humankapital). DNA-drøfting for temakapitlene.
6. **Del 5** (moderne) — bygger på vekst (2.2) og jordleie (4.3).
7. **Del 6 til slutt** (begrepsdrill + 2 sjangerkapitler + 3 øvingseksamener
   gjenbruker alt); bygges av én agent som leser hele skjelettet.
8. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert;
   prøvene (§4) i prøvekapitler per del (`sok2007-<del>-prove`, chapterNumber
   `<del>.P`), Del 1–5.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
      (generer via `json.dump`; escape `"` i norske sitattegn); `npm run build`
      grønn.
- [ ] **LaTeX**: alle formler i `$...$`/`$$...$$` med dobbel backslash i JSON
      (`\\alpha`, `\\hat`, `\\delta`); ingen unicode; konsistent $Y,K,L,A$, $y,k$,
      $s,n,\delta,\alpha$, $g=s/c-\delta$, $\hat F,\hat A$, $G$, HDI.
- [ ] **Notasjonskonsistens**: tekstsøk over alle sok2007-filer — **påkrevd**:
      Solow-notasjon ($k^*$, $(n+\delta)k$), Harrod-Domar $g=s/c-\delta$,
      Weil-hatt-notasjon ($\hat F,\hat A$), Gini $G=A/(A+B)$, HDI tre komponenter;
      **forbudt/uønsket** (avgrensning): grep etter «Lagrange»/«Slutsky»/
      «kostnadsminimering» (SOK1002-domene), «valutakursregime»/«pengeunion»
      (SØK2009), «Ramsey-beskatning» (SØK2011), «Ramsey-Cass-Koopmans»/«optimal
      kontroll» (utenfor emnet) skal gi **null treff** utenfor den avgrensende
      merknaden i kap. 0.1.
- [ ] **Tre formater trent**: øvingseksamenene 6.4 (Mal A tre deloppgaver), 6.5
      (Weil-regning) og 6.6 (Agneman flervalg+kortsvar+valgessay) finnes og speiler
      hver sin mal; grep at både «flervalg», «kortsvar», «valgessay» og «40/30/30»
      forekommer.
- [ ] **Figur + modell + tolkning**: hvert eksempel/løsningsforslag med figur har
      figurbeskrivelse i ord (akser, kurver, tilpasnings-/steady-state-punkt) OG
      verbal tolkning; alle tallsvar (Gini, $\hat A$, innhentingstid,
      steady-state-nivåer) er verbalt tolket; «show your steps» i regneoppgavene.
- [ ] **Empiri navngitt**: bistandskapitlet (3.1) nevner Easterly (1999) og
      Burnside & Dollar (2000); vekstregnskap/humankapital nevner Benhabib &
      Spiegel; deep determinants nevner Alsan/plog-studien/Acemoglu — grep-sjekk.
- [ ] **Kapittel-DNA**: hvert regnefagskapittel (Del 1 delvis, Del 2, 3.2, 4.2) har
      Eksamensvinkel-`tip`, Forkunnskaper-`text` med lenker + Symbol- og
      formelliste-`collapsible` (per delkapittel), Typiske feil-`warning`, 2–4
      eksempler (siste på eksamensnivå), 6–12 øvinger med `solution`+`hints`,
      repetisjons-`collapsible`; drøftingskapitlene (3.1, 3.3, 4.1, 4.3, 4.4, 4.5,
      Del 5) har Eksamensvinkel + Forkunnskaper + kjernebegrep MED pensumforankring
      + posisjoner/spenninger + anvendelse + 4–8 momentliste-oppgaver + Pensumkart-
      `collapsible`; drillkapitlene (1.5, 2.6) har løsningsoppskrift + sensor-
      kommentert case + 10–15 oppgaver.
- [ ] **Quiz-sum ≥ 556 og flashcard-sum ≥ 648** per kvotetabellen (§3 er
      autoritativ).
- [ ] **Prøver**: 4 per temadel 1–5 (20 stk) + 3 øvingseksamener; settene og
      prøvene dekker samlet sjangrene A–P minst én gang, og alle tre malene.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, egne land/kontekster,
      egne formuleringer; ingen formuleringer fra reelle sett eller
      sensorveiledninger (skjelettets mønstereksempler er selv omskrivninger og
      skal varieres videre); pensum (Todaro & Smith, Weil) refereres, aldri
      siteres i lengde; *(verifiser)*-markeringene (kapittelhenvisninger, eksakt
      lærebokutgave) sjekkes før pensumankere skrives inn.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
      (200 + kapittelspesifikk streng), jf. `getChapterMeta`-lærdommen;
      institusjonssiden (NTNU) og bokforsiden (seksjonstitlene fra §2) sjekkes.

---

## 7. Arbeidsdeling mot øvrige analyserte emner

SOK2007 er **anvendt/tematisk** utviklingsøkonomi og har smalt, punktvis overlapp
med de andre analyserte emnene. Ingen **bygget** bok dekker vekst-/utviklingsstoffet
(ECON1310 er live, men **utelater eksplisitt Solow** — bekreftet i `econ1310-0-1`),
så SOK2007 bygger vekstsøylen selv og er den **første buildbare rene vekst-/
utviklingsøkonomiboken** i samlingen. Denne tabellen styrer hva SOK2007 bygger ut
vs. hva den forutsetter/kryssrefererer.

| Tema | SOK2007 (bygger ut) | Dekkes ellers |
|---|---|---|
| Vekstmodeller (Solow steady state/konvergens, Harrod-Domar, vekstregnskap, endogen teknologi) | **JA** — Del 2, full | ECON1310 (live) **utelater Solow bevisst**; ECON4915/ECON1910 (UiO) er kun *skjelett*, ikke bygget → SOK2007 bygger vekst selv |
| Måling/ulikhet (BNI/HDI, Lorenz/Gini, Kuznets, fattigdomsmål) | **JA** — Del 1, full | ECON1910 «Poverty and Distribution» (UiO, skjelett) overlapper på fordeling, men er ikke bygget og er annen institusjon/pensum |
| Anvendt utviklingsøkonomi (bistand, handel, befolkning, ernæringsfeller, landbruk, migrasjon, humankapital) | **JA** — Del 3–4 | ECON4915 «Development Economics» (UiO, skjelett) overlapper tematisk, men er ikke bygget |
| Moderne (institusjoner/deep determinants, asymmetrisk informasjon, kausal inferens) | **JA** — Del 5 | — (nytt i samlingen) |
| Formell konsument-/produsentteori (nyttemaks/Lagrange, kostnadsminimering, kostnadskurver, SE/IE) | **NEI** — bruker mikro kun kvalitativt | **SOK1002** (NTNU, skjelett) — samme institutt; SOK2007 forutsetter, gjentar ikke |
| Marked/monopol/oligopol/eksternaliteter/fellesgoder | **NEI** | **SØK1011** (NTNU, skjelett) — markeder og markedssvikt |
| Handelsteori formelt (Heckscher-Ohlin, Ricardo formelt), åpen makro/valuta | **NEI** — stopper ved statiske gevinster + utviklingslands handelspolitikk | SØK2009 Internasjonal makroøkonomi (NTNU) |
| Offentlig-økonomi (Ramsey-beskatning, skattekiler) | **NEI** | SØK2011 Offentlig økonomi (NTNU) |
| Tung matematisk vekstteori (Ramsey-Cass-Koopmans, optimal kontroll) | **NEI** — Solow + enkel endogen teknologi er taket | Utenfor emnet |

**Kryssreferanser (lenkes, ikke gjentas):** der en enkel etterspørsels-/
kostnadssammenheng eller elastisitetsdefinisjon trengs (handelskapitlet 3.2/3.3,
humankapital 4.5), kan Forkunnskaper-blokkene lenke til **SOK1002** når/hvis den
bygges (`[tittel](/sok1002/<chapterId>)`) — **men lenk kun til kapitler som
finnes** (SOK1002 er per nå kun skjelett, så SOK2007 skal i praksis forklare det
kvalitative minimumet selv og ikke lenke til uframstilte kapitler). Dette speiler
NTNU-arbeidsdelingen (SOK1002 mikro-teori · SØK1011 marked/markedssvikt · SOK2007
anvendt vekst/utvikling · SØK2009 internasjonal makro · SØK2011 offentlig økonomi)
fra analysens §8.

---

> **Merknad om verifiserte referanser:** Alle modellresultater, notasjon og
> frekvenser er hentet fra `EKSAMENSANALYSE.md`. Standardresultatene (Solow steady
> state $s\,f(k^*)=(n+\delta)k^*$, $g=s/c-\delta$, Gini $G=A/(A+B)$,
> $\hat A=\hat y-\hat F$, $\hat A=\gamma_A\mu L$) og de empiriske studiene
> (Easterly 1999, Burnside & Dollar 2000, Benhabib & Spiegel 1994, Alsan 2015,
> Duranton, plog-studien) er reelle/faglige fakta uten verkshøyde. De
> **utgave-sensitive** pensumankerne — den eksakte Todaro & Smith-utgaven og
> kapittelnummereringen (kap. 2/3/5.1/6/7/8/9.5/12/14) samt Weil-utgaven — er
> markert *(verifiser)* og bør sjekkes mot gjeldende emnebeskrivelse før
> pensumankere skrives inn i kapitlene. **Statusmerknad:** emnet er *nedlagt
> undervisning* men fortsatt eksamensrelevant (arkiv til V2024); overlapp/
> kredittreduksjon mot SØK1102 (full, fra H2012) og SØK1022 (3,7 sp, fra H2024) på
> vekst-/fattigdomskjernen er dokumentert i emnebeskrivelsen, ikke i fasitene.

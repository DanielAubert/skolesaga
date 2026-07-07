# Bokskjelett: ECON4915 Development Economics — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er destillert fra `EKSAMENSANALYSE.md`
> (11 ordinære sett V2015–V2025, komplett årsdekning — emnet går **kun vår**).
> Arketype: **DRØFTING/ESSAY med empirisk evidenslag** (`DNA-drofting.md` som primærmal),
> med figur-i-ord-sjangeren og modell-organiseringen lånt fra `econ1910/SKJELETT.md`
> (bachelor-utviklingsøkonomi, samme teorikjerne), utvidet med et **empirisk
> identifikasjonslag** (RCT/IV/DiD/RDD/nattlys) og **avansert kontrakts-/forsikringsteori**.
> Arketypevalget og master-tillegget er begrunnet i §1.
> **⚠️ Ingen sensorveiledning finnes i arkivet** — alle sensorkrav/typiske feil er
> **utledet** (fra oppgaveformuleringene, studienes faktiske design og ECON1910-mønstre)
> og merket **(verifiser)**/«svakt belagt» der ikke annet er sagt.
> Alle mønstereksempler i skjelettet er omskrivninger; forfatteren skal variere dem
> videre, aldri kopiere inn ordrett.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `econ4915` |
| Tittel | **ECON4915 Development Economics** |
| Level | `'Høyskole'` |
| Institusjon | Universitetet i Oslo (UiO) |
| Arketype | **Drøfting/essay med empirisk evidenslag** — essay-bok organisert rundt modellfamilier + et frittstående identifikasjonslag (IKKE regnefag, IKKE rent tolkende essayfag) |
| Antall kapitler | **37** (2 eksamenskart/håndverk + 29 tema/modell/metode + 6 eksamenstrening) |
| Estimert totaltid | **≈ 2 525 min ≈ 42 timer** |
| Quiz totalt | **584** (krav ≥500) |
| Flashcards totalt | **654** (sikt 550–650; begrepsrikt tospråklig drøftingsfag) |
| Eksamensspråk | **Engelsk** (3-timers skoleeksamen i Inspera; svar kan gis på norsk/svensk/dansk/engelsk) → **tospråklig begrepsbank** gjennom hele boka |

**Pitch (ett avsnitt):** ECON4915-eksamen er en **3-timers skriftlig skoleeksamen på engelsk (fritekst,
Inspera), karakter A–F, ingen hjelpemidler** (kun ordbok), **kun vår**. Formatet er **rent essay/
diskursivt**: aldri flervalg, aldri tallregning noe år (eneste unntak: V2021 var en 5-timers open-book
hjemmeeksamen under COVID). Faget har to distinkte epoker som boka må dekke **begge**: **epoke 1
(V2015–V2017)** er empiri-/impact-evaluation-tung, bygget rundt **navngitte moderne studier** (Banerjee,
Qian, Alesina, Cole, Kremer & Miguel, Easterly, Padró i Miquel) med eksplisitt krav om å **vurdere
identifikasjonsstrategien kritisk**; **epoke 2 (V2018–V2025)** er korte, brede teori-/drøftingsessay om
de samme modellfamiliene som ECON1910 (ulikhet, ressurser/institusjoner, fattigdomsfeller, korrupsjon,
kreditt/mikrofinans). Verktøyet er **kvalitativt, grafisk og studielitterært** — figurer forklares i
presis prosa, mekanismene beherskes verbalt, aldri regnes ut. Det som løfter et svar fra bestått til topp
er **master-signaturen: «identifikasjon foran korrelasjon»** — å gjengi et studiedesign og de (ofte
*beskjedne*) funnene OG vurdere om identifikasjonen er troverdig, ikke bare referere konklusjonen. Boka
driller derfor to sammenvevde ferdigheter: (i) å kjenne modellfamilien en oppgave krever, tegne figuren og
bære svaret på selve drøftingen, og (ii) å koble modellen til pensumets empiriske kanon og vurdere
evidensen kritisk. **Boka bygger PÅ ECON1910** (kryssbok-lenker til den delte teorikjernen) og bruker
plassen på master-tillegget: nøkkelstudiene, metodeverktøykassa og kontrakts-/forsikringsteorien.

### Arketypevalg (dokumentert avvik fra en ren DNA-mal)

Analysen fastslår: **rent essay, kvalitativt/grafisk/studielitterært, ingen tallregning — men bygg på
pensumapparatet (modell + navngitt studie), ikke sunn fornuft, og vurder identifikasjonen kritisk.**
Det gjør ECON4915 til en **drøftingsbok med empirisk evidenslag**. Derfor:

- **Primærmal: `DNA-drofting.md`.** Kapittel-DNA-et derfra styrer (Eksamensvinkel → Temaet i fagets
  landskap → Kjernebegreper MED pensumforankring → Posisjoner og spenninger/drøftingsakser → Anvendelse
  på case → Typiske feil → oppgaver med momentliste/disposisjon → Pensumkart). Sensor belønner **navngitt
  pensumforankring** og **selvstendig, kontekstsensitiv drøfting**.
- **Lånt fra `econ1910`: figur-i-ord + modell-organisering.** De grafiske temaene (S-kurve/terskel for
  feller, G(y) for korrupsjon, H/L-forsikringsmodellen, sharecropping g·MPL, ressursrente-mekanismen)
  beskrives i ord (akser, kurver, kryss, stabile/ustabile punkter) og forklares verbalt, aldri regnes ut.
- **Master-tillegg (der ECON4915 hever nivået over ECON1910) — se §8:**
  1. **Egen empirisk verktøykasse-del (Del 1)** — RCT/IV/DiD/RDD/nattlys, hver med sin
     identifikasjonsantakelse, og den frittstående regelen **«identifikasjon foran korrelasjon»**. Dette
     er fagets master-signatur og finnes IKKE i standard DNA-drøfting eller i ECON1910.
  2. **NØKKELSTUDIE-bokser** (`design → funn → kritisk identifikasjonsvurdering`) i hvert modellkapittel
     der en navngitt studie hører hjemme — en utvidelse av DNA-drøftingens «Anvendelse/example».
  3. **Avansert kontrakts-/forsikringsteori** (H/L-sjokkmodell med deltakelsesskranke og gjentatt spill,
     sharecropping, interlinked contracts) — mer teknisk enn ECON1910, men fortsatt verbalt/grafisk.
- **Drillkapitler i temadelene** (regnefag-grepet lånt fra econ1910): hver stor sjanger får et
  **drillkapittel** rett etter modellkapitlene; Del 7 beholder begrepsdrill, modellbesvarelser og
  øvingseksamener.
- **Bygger PÅ ECON1910, ikke duplikat.** Den delte teorikjernen (flerlikevekt-grammatikk, Harris–Todaro/
  migrasjon, handel/fordeling, ressursforbannelse, korrupsjons-flerlikevekt) forutsettes/lenkes til
  ECON1910; boka gjentar bare det minimum som trengs for å bære master-drøftingen og bruker resten av
  plassen på identifikasjonslaget og kontraktsteorien. **⚠️ ECON1910 er per nå IKKE bygget** →
  kryssreferanser skrives som **KLARTEKST med kapittel-id** for senere aktivering (se under).

### Kritisk sjangerregel: «identifikasjon foran korrelasjon» (master-signaturen — gjelder HELE boka)

Dette er den tydeligste hevingen fra bachelor til master og bokas viktigste karakterdifferensiator
(utledet av oppgavenes eksplisitte studiereferanser og identifikasjonskrav; **svakt–middels belagt**):

1. **Aldri kausalitet fra korrelasjon uten identifikasjonsantakelse.** Å påstå «ulikhet senker vekst»,
   «bistand virker/virker ikke» eller «mikrofinans løfter folk ut av fattigdom» *uten* å nevne omvendt
   kausalitet/utelatte variabler og hvordan RCT/IV/naturlig eksperiment omgår dem, er den klassiske
   master-feilen.
2. **Nøkkelstudie = design + funn + kritisk vurdering, ikke bare konklusjon.** Ved en navngitt studie:
   gjengi hva som **randomiseres/instrumenteres**, hvilken **variasjon** som utnyttes, hvilken
   **identifikasjonsantakelse** som bærer (SUTVA/eksklusjon/parallelle trender), en **kritisk vurdering**
   (spillovers, ekstern validitet, eksklusjonsbrudd) og de **faktiske funnene** — inkludert at effekten
   ofte er *beskjeden* (mikrofinans).
3. **Identifikasjonslaget læres VERBALT, ikke som estimasjonsmekanikk.** «Metode» = hvilket teori- OG
   identifikasjonsrammeverk du strukturerer drøftingen rundt (relevans/eksklusjon, parallelle trender,
   SUTVA/spillovers, ekstern validitet) — **ingen regresjonsformler, ingen estimatorer, ingen tallregning**
   (jf. §8: emnet leser identifikasjonslogikk kvalitativt, ikke econometrics-mekanikk).
4. **Mikrofinans/kreditt er INGEN mirakelkur.** Litteraturens funn er *beskjedne* gjennomsnittseffekter —
   å presentere mikrofinans/kreditt som sikker vei ut av fattigdomsfella trekker (V2023).

### Kritisk modellregel: bygg på pensummodellen, ikke sunn fornuft (gjelder HELE boka)

Som i ECON1910: generelle betraktninger («korrupsjon er dårlig», «ulikhet er urettferdig») *uten* den
navngitte modellmekanismen gir svak karakter. Hvert modellkapittel knytter svaret eksplisitt til den
konkrete pensummekanismen (flerlikevekt/S-kurve, G(y), grabber-/producer-friendly institusjoner, H/L-
forsikring, Stiglitz–Weiss-rasjonering, g·MPL). **V2015 sier direkte at man *ikke* trenger å løse modeller
formelt** — men logikken og antakelsene må være stringente, og figuren brukes der den klargjør.

### Kritisk vekt- og formatregel (gjelder eksamenstrening + alle drill)

Oppgavene oppgir ofte vekt eksplisitt («count equally», «weight 1/3»/«2/3»). En besvarelse som drukner ett
delspørsmål taper mekanisk tilsvarende andel. Boka trener **begge formater**: (a) epoke 1s «Short questions
(1/3) + Structured essay (2/3)» og (b) epoke 2s «ett bredt essay / to–tre likevektede spørsmål». Tidsbudsjett
etter vekt drilles i Del 7.

### Kritisk nyanse-/kontekstregel (A/B-markørene sensor bruker — utledet, svakt belagt)

Bunnkravet (E–D) er å **identifisere kjernefenomenet** riktig med en enkel korrekt forklaring/riktig
hovedretning. Midtsjiktet (C–B) har et **komplett, konsistent argument under *hver* deloppgave**. Toppsjiktet
(A) kjennetegnes av **fem gjennomgående andreordens-poeng** boka driller eksplisitt (settes som `tip`/`warning`
i sine kapitler):

1. **Identifikasjonsvurdering:** kritisk drøfting av eksklusjon/spillover/ekstern validitet ved en
   nøkkelstudie — ikke bare funnet. → Del 1; nøkkelstudie-boksene overalt.
2. **Endogenitet er kjernen i ulikhet↔vekst:** ulikhet er ikke eksogen; vis omvendt kausalitet + hvordan
   Easterly (2007) IV forsøker å omgå det, og vær kritisk til eksklusjonen. → kap. 2.2.
3. **Kontekst avgjør korrupsjonens konsekvenser:** skill oljerente-plyndring fra handelsrestriksjoner fra
   byråkratisk «smøring» — konsekvensene er *ikke* like (V2022a). → kap. 5.1.
4. **Institusjoner avgjør ressursutfallet:** samme ressurs blir forbannelse eller velsignelse avhengig av
   grabber- vs. producer-friendly institusjoner. → kap. 3.2.
5. **Kobling på tvers:** ulikhet↔kreditt↔vekst; ressurser↔institusjoner↔korrupsjon; distribusjonsbasert vs.
   ressursbasert felle deler flerlikevekt-strukturen. Sensor belønner eksplisitt krysskobling. → hele boka,
   samlet i kap. 7.1 og distribusjons-/ressursfelle-skillet i kap. 4.2.

### Kritisk tospråklig-regel (eksamen er på engelsk — gjelder HELE boka)

Eksamen skrives på **engelsk**. Boka er på **norsk bokmål**, men leverer en **tospråklig begrepsbank**:

- Hvert kjernebegrep introduseres **norsk (engelsk)** ved første forekomst: fattigdomsfelle (poverty trap),
  flerlikevekt (multiple equilibria), ugunstig utvalg (adverse selection), moralsk hasard (moral hazard),
  kredittrasjonering (credit rationing), solidaransvar/gruppelån (joint liability), gjensidig forsikring
  (mutual insurance), forpaktning på deling (sharecropping — behold engelsk term), sammenkoblede kontrakter
  (interlinked contracts), ressursrenter (resource rents), ressursforbannelse (resource curse), renteøkonomisk
  jakt (rent-seeking), instrumentvariabel (instrumental variable, IV), randomisert kontrollert forsøk
  (randomized controlled trial, RCT), forskjell-i-forskjeller (difference-in-differences, DiD),
  regresjonsdiskontinuitet (regression discontinuity design, RDD), eksklusjonsantakelse (exclusion
  restriction), ekstern validitet (external validity), ringvirkninger (spillovers), fattigdomsandel (head
  count ratio), nattlys (nighttime lights), avmarkering (deworming), «forsvunne kvinner» (missing women),
  kunnskap–handling-gap (know-do gap), bistand (foreign aid).
- **Flashcards er tospråklige og bærer term-koblingen** (norsk term ↔ engelsk term ↔ mekanisme/studie ↔
  figur der naturlig) — hovedgrunnen til at flashcard-kvoten (654) ligger over quiz (584).
- Kap. 7.1 (begrepsdrill) er eksplisitt tospråklig og trener studenten i å skrive modellsvar OG
  studiegjengivelser på engelsk med korrekt fagterm.

### Notasjons- og figurregel (gjelder HELE boka)

Symbolbruken er **minimal og lokal**; figurene og de verbale mekanismene bærer analysen. Ingen algebra,
derivasjon, regresjonsestimatorer eller tallutregning noe sted. De eneste symbolene som forekommer:
- **Fattigdomsfelle/flerlikevekt:** ikke-lineær (S-formet) avkastnings-/inntektskurve mot 45°-/terskellinje;
  akse = inntekt/kapital; to stabile likevekter + ustabilt kryss.
- **Korrupsjon:** **y** = andel korrupte, **G(y)** = gevinstkurve, S-formet kumulativ moralkostnadsfordeling
  (delt teorikjerne med econ1910 — kryssrefereres).
- **Forsikring (H/L-modell):** to tilstander **H** (high/god) og **L** (low/dårlig); konsum i hver tilstand;
  deltakelses-/insentivskranke; gjentatt spill. Kun begrepsmessige symboler, ingen utregning.
- **Jordbrukskontrakter:** **g** = bondens avlingsandel; effektiv arbeidsetterspørsel **g·MPL** (MPL =
  grenseproduktivitet av arbeid) — verbalt/grafisk.
- **Identifikasjon:** rent begrepsmessig (behandling/kontroll, instrument, parallelle trender, terskel/
  cutoff) — ingen estimator.
Matematikk i LaTeX (`$...$`) kun der det er smertefritt (nesten aldri). Hvert delkapittel med symboler har
egen **collapsible «Symbol- og formelliste»** (leserkrav).

### Forbudte / grensesatte termer (grep-liste for fase 6-verifisering)

- **Regresjonsestimatorer, econometrics-mekanikk, standardfeil-/t-verdi-utregning, tallregning, algebraisk
  optimering/derivasjon** → **null treff**. Identifikasjonslaget er kvalitativt/tolkende (jf. §8): forklar
  *designet* og *antakelsen*, aldri estimasjonsmekanikken.
- **⚠️ VIKTIG KONTRAST TIL ECON1910:** RCT, randomisert kontrollert forsøk, impact evaluation, Banerjee,
  Duflo, Kremer, Miguel, Qian, Easterly, Alesina, Cole, Padró i Miquel er **KJERNEPENSUM her** og SKAL
  brukes. ECON1910s forbud mot RCT/Banerjee-Duflo gjelder **IKKE** for ECON4915 (analysen §8 er eksplisitt).
- **Gini/Lorenz-indeks som *utregningsmetode*** unngås (fattigdom måles med fattigdomslinje + head count,
  ulikhet drøftes via fordelings-/kanalmekanismer); begrepene kan nevnes konseptuelt, men **ingen
  indeksutregning**.

### Kryssbok-lenker og forkunnskaper (leserkrav)

ECON4915 er master-påbygg og forutsetter en generell økonomibakgrunn + ECON1910-nivå på den delte
teorikjernen. Der forkunnskapen dekkes i en annen bok i systemet, pekes det dit:

| Forkunnskap | Bok/kapittel | id (for aktivering) | Status |
|---|---|---|---|
| Flerlikevekt-grammatikken (to kryssende kurver, stabilitet, sirkler) | ECON1910, kap. 2.1 | `econ1910-2-1` | **ikke bygget** → klartekst |
| Fattigdomsfellen produktivitet↔ernæring | ECON1910, kap. 2.2 | `econ1910-2-2` | **ikke bygget** → klartekst |
| Korrupsjons-flerlikevekt G(y) + olje/sand | ECON1910, kap. 3.2–3.3 | `econ1910-3-2` | **ikke bygget** → klartekst |
| Harris–Todaro / dual økonomi / migrasjon | ECON1910, kap. 4.1–4.2 | `econ1910-4-1` | **ikke bygget** → klartekst |
| Handel og fordeling (spesifikke faktorer) | ECON1910, kap. 5.1–5.3 | `econ1910-5-1` | **ikke bygget** → klartekst |
| Ressursforbannelse (big push, parasitter) | ECON1910, kap. 6.2 | `econ1910-6-2` | **ikke bygget** → klartekst |
| Utviklingsbegrep + fattigdomsmåling | ECON1910, kap. 1.1 / 1.3 | `econ1910-1-1` | **ikke bygget** → klartekst |
| Tilbud/etterspørsel, grenseproduktivitet | ECON1210 Mikro 1 | `econ1210-*` | **ikke bekreftet** → klartekst |

**⚠️ Statushåndtering (README: «lenk kun til kapitler som finnes»):** ECON1910/ECON1210 er per nå IKKE
bekreftet bygget. Forkunnskaps-referanser skrives som **KLARTEKST med kapittel-id** for senere aktivering —
IKKE som live markdown-lenke. Format: *«Bygger på flerlikevekt-grammatikken fra ECON1910 (kap. 2.1,
`econ1910-2-1` — aktiveres som lenke når den boka er publisert). Det du trenger for master-drøftingen
oppsummeres kort her; hovedplassen brukes på identifikasjonslaget.»* Fase 6 gjør klartekst → live lenke der
målboka er live. **Interne** prerequisites (mellom econ4915-kapitler) er live fra start.

### Pensumankere (marker `(verifiser)` mot gjeldende pensumliste før publisering)

- **NAVNGITTE EKSAMENSSTUDIER (kjernekanon — dokumentert i oppgavesettene selv, bør ha egne
  NØKKELSTUDIE-bokser):** Padró i Miquel (2007, politisk-økonomi «politics of fear»); Banerjee, Duflo,
  Glennerster & Kinnan (2015, mikrofinans-RCT i Hyderabad); Easterly (2007, IV for ulikhet→underutvikling);
  Alesina, Michalopoulos & Papaioannou (2015, etnisk ulikhet via nattlys-proxy); Cole, Giné, Tobacman,
  Topalova, Townsend & Vickery (2013, forsikringsetterspørsel); Qian (2008, te-/silkeprissjokk →
  kjønnsbalanse, naturlig eksperiment); Kremer & Miguel (2004, avmarkering-RCT med eksternalitets-/
  spillover-design). Disse er allmenne fagfakta (design/funn) — refereres, aldri siteres i lengde.
- **Delt teorikjerne (epoke 2):** forelesningsmateriell i **Oslo-/ESOP-tradisjonen** (jf. ECON1910s
  Mehlum–Moene-kompendium) for fattigdomsfeller, korrupsjon (G(y), olje/sand), ressursforbannelse (grabber-/
  producer-friendly institusjoner), handel/fordeling og Harris–Todaro. **`(verifiser)`** faktisk pensumliste,
  utgave og delt fagmiljø/foreleser mellom ECON4915 og ECON1910 — **institusjonell kobling ikke dokumentert i
  arkivet, usikker (verifiser)**.
- **Mulig empirisk lærebok (epoke 1):** en anvendt utviklings-/impact-evaluation-tekst (f.eks. Banerjee &
  Duflo, *Poor Economics*, eller tilsvarende). **`(verifiser)`** mot faktisk pensumliste — ikke dokumentert
  i arkivet; **usikker kobling**.
- **Regimeskiftet ~2018** (epoke 1 → epoke 2) er tydelig i dataene, men *årsaken* (sannsynlig foreleserbytte/
  kursomlegging) er **`(verifiser)`**.
- **Institusjonskobling grabber-/producer-friendly** (Mehlum/Moene/Torvik-tradisjonen på ressursforbannelse):
  faglig reell, men hvilke enkeltarbeider som står på pensumlista er utgave-sensitivt → **`(verifiser)`;
  ikke oppgi tittel/år uten verifisering**.
- **Oppdiktede referanser er forbudt.** Bruk kun kanon over; la heller en referanse stå åpen enn å gjette.
  Alle usikre koblinger er merket **(verifiser)** i kapitlene under.

---

## 2. Makrostruktur

Rekkefølgen: **eksamens-/evidenshåndverk → empirisk verktøykasse (master-signaturen, egen del) → de to
navene (ulikhet; ressurser/institusjoner) → fattigdomsfeller (rød tråd) → korrupsjon/politisk økonomi →
kreditt/mikrofinans + kontrakts-/forsikringsteori → eksamenstrening.** Frekvensen styrer *omfanget*.
`sectionNames` = kolonne 2.

| Del | Seksjonstittel (`sectionNames`) | Kap. | Prioritet | Begrunnelse (frekvens/natur → omfang) |
|---|---|---|---|---|
| 0 | Eksamenskart og essay-/evidenshåndverk | 2 | meta | Prioriterings- og skriveverktøyet; kjerne i studieguiden. To epoker + begge formater; «identifikasjon foran korrelasjon» introdusert; A/C/E-skillet. |
| 1 | Empirisk verktøykasse: identifikasjon foran korrelasjon | 6 | **PERFEKT (MASTER-SIGNATUR — egen del)** | Fagets tydeligste heving over bachelor. Eksplisitt identifikasjonskrav i ≥4/11 sett (V2015–17, V2019) + underliggende i hele epoke 1. RCT/IV/DiD/RDD/nattlys + aggregatregresjonens svakhet + bistandsidentifikasjon. Huser 3 av 7 nøkkelstudier (Kremer & Miguel, Qian, samt aid-caset). |
| 2 | Ulikhet, utviklingsbegrepet og fattigdomsmåling | 5 | **PERFEKT (nav 1)** | Ulikhet & utvikling **45 % (5/11)** — fagets nav. Kanal via imperfekt kreditt + endogenitet (Easterly IV) + distribusjonsbasert felle + etnisk ulikhet (Alesina nattlys) + konseptuelt anker (utviklingsbegrep/fattigdomsmåling, V2024). |
| 3 | Ressursrenter, ressursforbannelse og institusjoner | 4 | **PERFEKT (nav 2)** | Ressurser/institusjoner **45 % (5/11)**. Renter → rent-seeking → svake institusjoner → hemmet vekst; grabber- vs. producer-friendly; kobling til korrupsjon. |
| 4 | Fattigdomsfeller og flerlikevekt | 4 | **PERFEKT (rød tråd)** | Fattigdomsfeller/flerlikevekt **36 % (4/11)** + strukturen alle andre modeller arver. Distribusjonsbasert vs. ressursbasert felle (V2025-kjernedistinksjon) er krysskoblings-A-markøren. |
| 5 | Korrupsjon og politisk økonomi | 4 | **KUNNE (nivå 2 — bærer et helt essay)** | Korrupsjon & politisk økonomi **27 % (3/11)**. Kontekstavhengige konsekvenser, hvorfor mest i u-land, commitment-problem, Padró i Miquel, god politikk vs. maktbevaring. |
| 6 | Kreditt, mikrofinans og kontrakts-/forsikringsteori | 6 | **KUNNE (nivå 2) + master-kontraktslag** | Kreditt/mikrofinans **18–27 % (2–3/11)** + den avanserte kontrakts-/forsikringsteorien som er masterens andre tillegg. Kredittsvikt (Stiglitz–Weiss) + mikrofinans (Banerjee-RCT) + ROSCA + forsikring (H/L, Cole) + jordbrukskontrakter (sharecropping/interlinked). |
| 7 | Eksamenstrening | 6 | — | Tospråklig begrepsdrill + 2 modellbesvarelser (A vs. C) + 3 øvingseksamener (epoke 1-format, epoke 2-format, survey). |

**Avvik fra DNA-drøfting-malen (dokumentert):**
1. **Egen empirisk verktøykasse-del (Del 1) løftet foran temadelene.** DNA-drøfting har ingen metode-/
   identifikasjonsdel; her er den fagets master-signatur og legges som gjennomgående rød tråd nr. 1
   (identifikasjonslaget arves av nøkkelstudie-boksene i Del 2–6). Begrunnelse: analysen viser at
   *identifikasjonskravet* er den klareste forskjellen fra ECON1910 og skiller A fra B.
2. **NØKKELSTUDIE-bokser** (`design → funn → kritisk identifikasjonsvurdering`) i hvert modellkapittel med en
   navngitt kanon-studie — utvidelse av DNA-drøftingens «Anvendelse». De 7 kanon-studiene har hver ETT
   hjemkapittel med full boks; andre kapitler refererer.
3. **Figur-i-ord + modell-organisering** lånt fra econ1910 — DNA-drøfting nevner bare «case-anvendelse».
4. **Drillkapitler i temadelene** (1.6, 2.5, 3.4, 4.4, 5.4, 6.6) i tillegg til Del 7.
5. **Bygger PÅ ECON1910** via kryssbok-klartekst for den delte teorikjernen, i stedet for å duplikere
   (Harris–Todaro/migrasjon og handel/fordeling behandles kompakt her og lenkes til econ1910).
6. **Begge epoker/formater dekket bevisst** (epoke 1 empirisk-tung og epoke 2 teoribred), fordi regimeskiftet
   gjør det uvisst hvilken profil neste sett har — og en masterstudent forventes å kunne begge.
7. **Modellbesvarelse-kravet (≥3):** dekkes av kap. 7.2 (ulikhet A vs. C) + kap. 7.3 (nøkkelstudie/
   identifikasjon A vs. C) **pluss** de 3 øvingseksamenene (7.4–7.6), som hver har full A-besvarelse og en
   kommentert C-besvarelse på den tyngste oppgaven (faktisk 5 modellbesvarelser).

---

## 3. Kapitler

Feltene følger DNA-drøftingens «Skjelett-krav» (id/nummer/tid/prerequisites, Eksamensbelegg, Begreps-/
innholdskontrakt med pensumforankring, Drøftingsakser/figurbeskrivelser, Case-forslag, Typiske feil, kvote),
supplert med **NØKKELSTUDIE-bokser** og figur-i-ord der relevant. Sjangerbokstavene (A–G) refererer til
oppgavetype-katalogen fra analysen §3, gjengitt i Del 0: **A** modell-/mekanisme-essayet (epoke 2-kjerne,
delt med econ1910), **B** nøkkelstudie-spørsmålet (epoke 1-signatur), **C** kredittmarkeds-/finansessayet,
**D** forsikrings-/risikoessayet (H/L-modell), **E** ressurs-/institusjons-/korrupsjonsessayet, **F**
konseptuelle/målings-essay, **G** metode-/identifikasjonsessayet (frittstående). Prioritetsklasser:
**perfekt** / **kunne** / **kjenne**.

---

### Del 0 — Eksamenskart og essay-/evidenshåndverk

#### Kapittel 0.1: Eksamenskartet: slik testes ECON4915

- **id:** `econ4915-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen
- **Kapitteltype:** eksamenskart
- **description:** Eksamensformen, de to epokene, temafrekvensene, sensorreglene og lesestrategien som styrer hele boka — og hvorfor «identifikasjon foran korrelasjon» er master-signaturen.
- **Eksamensbelegg:** Metakapittel — bygger på alle 11 ordinære sett V2015–V2025. Skal gjengi: (i) formen: **3-timers skriftlig skoleeksamen på engelsk (Inspera, fritekst), karakter A–F, ingen hjelpemidler (kun ordbok), kun vår, masternivå/10 sp**; svar kan gis på norsk/svensk/dansk/engelsk; (ii) de **to epokene**: epoke 1 (V2015–17) «Short questions (1/3) + Structured essay (2/3)» rundt navngitte empiriske studier med eksplisitt identifikasjonskrav; epoke 2 (V2018–25) korte, brede teori-/drøftingsessay (ett bredt eller to–tre likevektede spørsmål); (iii) **regimeskiftet ~2018** (`verifiser` årsak) og at boka dekker **begge** profiler; (iv) at det **aldri er tallregning** (unntak V2021: 5-timers open-book hjemmeeksamen under COVID); (v) topp-temaene: **ulikhet & utvikling 45 %, ressurser/institusjoner 45 %, fattigdomsfeller 36 %, korrupsjon/politisk økonomi 27 %, kreditt/mikrofinans 18–27 %**, med et **empirisk identifikasjonslag** eksplisitt i ≥4/11; (vi) sensorreglene (utledet): **bygg på pensummodell + navngitt studie**, **identifikasjon foran korrelasjon**, **fordel tid etter oppgitt vekt**, **nyanse/kontekst skiller topp fra bestått**; (vii) A/B-differensiatorene (de fem andreordens-poengene fra §1).
- **Innholdskontrakt:** Oppgavetype-katalogen A–G presenteres som studentens sjekkliste, med to-epoke-tidslinjen. **Prognose for neste sett (fra analysen §7):** epoke 2-profilen (korte, brede essay) mest sannsynlig — ett–tre likevektede spørsmål med **ulikhet og/eller ressurser–institusjoner** i sentrum, ofte kombinert med **fattigdomsfelle**; minst ett spørsmål trekker trolig inn **fattigdomsmåling/-begrep** eller **korrupsjon**. En retur til epoke 1s eksplisitte nøkkelstudie-spørsmål (Banerjee, Qian, Easterly, Kremer & Miguel) kan ikke utelukkes → boka dekker begge. Leseplan: Del 1 (identifikasjon) + Del 2 (ulikhet) + Del 3 (ressurser) «må perfekt»; Del 4 (feller, rød tråd) perfekt; Del 5–6 «må kunne».
- **Oppgavesjangre:** Ingen faglige oppgaver; 3–4 refleksjonsoppgaver: «gitt et epoke-1-sett (short 1/3 + essay 2/3) og 3 timer — sett opp tidsbudsjett»; «identifiser hvilken modellfamilie OG hvilken identifikasjonsstrategi denne oppgaveteksten krever».
- **Typiske feil:** Svare med sunn fornuft i stedet for pensummodell/-studie; hevde kausalitet fra korrelasjon; gjengi en studies konklusjon uten design; ignorere oppgitt vekt.
- **Quiz: 10 · Flashcards: 10**

#### Kapittel 0.2: Essay- og evidenshåndverket: struktur, figur-i-ord og kritisk evidensvurdering

- **id:** `econ4915-0-2` · **number:** 0.2 · **estimatedMinutes:** 50 · **prerequisites:** `econ4915-0-1`
- **Kapitteltype:** essay-/evidenshåndverk
- **description:** Hvordan en master-besvarelse bygges: problemforståelse → begrepsavklaring med pensumforankring → modell/mekanisme (+ figur i ord) → kritisk evidensvurdering (design → funn → identifikasjon) → kontekstsensitiv drøfting → konklusjon. Pluss hvordan man skriver svaret presist på engelsk.
- **Eksamensbelegg:** Bygger på sensorreglene på tvers av arkivet (utledet). Skal lære: (i) **oppgavelesing** — er dette et modell-essay (A), et nøkkelstudie-spørsmål (B) eller et frittstående metode-essay (G)? og hva vekten krever; (ii) **modell-/mekanisme-malen**: navngi pensummodellen, forklar mekanismen verbalt, bruk figur-i-ord der den klargjør; (iii) **nøkkelstudie-malen**: `design → identifikasjonsantakelse → kritisk vurdering (spillover/eksklusjon/ekstern validitet) → funn (ofte beskjedne)`; (iv) **«identifikasjon foran korrelasjon»** som fast refleks ved enhver kausalpåstand; (v) **drøftingsstrukturen** som skiller A fra C: motivert tilnærming, begge sider, kontekstsensitiv nyanse, kobling på tvers; (vi) **tospråklig skriving** — norsk→engelsk term-tabell + setningsmaler for både modellsvar og studiegjengivelse.
- **Innholdskontrakt (håndverket):** Seks trinn demonstrert på et gjennomgående mini-case («virker mikrofinans?»): 1) **les oppgaven** (bredt essay vs. nøkkelstudie); 2) **avklar begrep + forankre** (kredittrasjonering, joint liability — navngi pensum); 3) **modell/mekanisme** (hvorfor kredittmarkeder svikter) + figur der relevant; 4) **kritisk evidens** (Banerjee-RCT: randomisert filialåpning → beskjedne effekter; vurder ekstern validitet/spillovers); 5) **kontekstsensitiv drøfting** (mirakelkur? nei — men målrettet gevinst for noen); 6) **konkluder + koble** (til fattigdomsfella og forsikring). Egen boks: **«C→A-løftet»** — identifikasjonsvurdering + krysskobling + kontekstnyanse. Egen boks: **«Skriv det på engelsk»** — term-tabell + to setningsmaler (én for modell, én for studie).
- **Case-forslag:** Ett gjennomgående mini-case (mikrofinans) som følges trinn for trinn; ett kort ulikhet↔vekst-case som viser at *samme evidensrefleks* (endogenitet, IV) gjenbrukes (peker fremover til Del 1 og Del 2).
- **Typiske feil:** Sunn fornuft uten modell/studie; konklusjon uten design; kausalitet fra korrelasjon; drukne et delspørsmål; skrive fagterm feil på engelsk.
- **Quiz: 10 · Flashcards: 12**

**Prøve-kvote Del 0:** ingen (metadel).

---

### Del 1 — Empirisk verktøykasse: identifikasjon foran korrelasjon *(prioritet: PERFEKT — MASTER-SIGNATUR)*

#### Kapittel 1.1: Identifikasjonsproblemet: hvorfor korrelasjon ikke er kausalitet

- **id:** `econ4915-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ4915-0-2`
- **Kapitteltype:** teori (metode/identifikasjon) — **kjernegrammatikk, arves av alle nøkkelstudie-bokser**
- **description:** Fagets master-refleks: hvorfor en observert sammenheng (ulikhet↔vekst, bistand↔vekst) ikke er kausal — omvendt kausalitet og utelatte variabler — og hva en troverdig identifikasjonsstrategi må levere.
- **Eksamensbelegg:** Identifikasjon er eksplisitt master-krav i ≥4/11 sett (V2015 «identifikasjonsproblemet ulikhet→vekst», V2019 «hvordan identifisere effekten av bistand», V2016/V2017 studievurdering) og underliggende i hele epoke 1. Prioritet: **perfekt** (grammatikken alle nøkkelstudie-boksene arver — dette kapitlet gjør resten billigere).
- **Begrepskontrakt (m/pensumforankring):** **Kausaleffekt (causal effect)** vs. **korrelasjon (correlation)**; **omvendt kausalitet (reverse causality)** (vokser rike land seg mer like, eller gjør likhet dem rike?); **utelatte variabler (omitted variables / confounders)** (institusjoner driver både ulikhet og vekst); **kontrafaktisk (counterfactual)**; **seleksjon (selection)**; **identifikasjonsantakelse (identifying assumption)**; **intern vs. ekstern validitet (internal vs. external validity)**. Forankring: aggregat-regresjonens svakhet er eksplisitt i V2019 (aid→vekst) og V2015 (ulikhet→vekst); empirisk lærebok `(verifiser)`.
- **Drøftingsakser:** (i) hvorfor **aggregerte kryssland-regresjoner** (aid→vekst, ulikhet→vekst) sjelden identifiserer noe (omvendt kausalitet + confounders); (ii) hva et **troverdig kontrafaktisk** krever — sammenlignbar behandlings- og kontrollgruppe; (iii) avveiningen **intern vs. ekstern validitet** (ren identifikasjon på ett tiltak vs. generaliserbarhet); (iv) hvordan de fire strategiene (RCT/IV/DiD/RDD, kap. 1.2–1.4) hver angriper problemet.
- **Case-forslag:** «En forsker finner at land med mer bistand vokser saktere. Kan hun konkludere at bistand hemmer vekst? Forklar hvilke identifikasjonsproblemer som ligger under, og hva som skal til for en troverdig kausalslutning.»
- **Typiske feil:** Lese korrelasjon som kausalitet (feilkatalog #2); glemme omvendt kausalitet ved ulikhet/bistand; blande intern og ekstern validitet; tro at «mange kontrollvariabler» løser endogenitet.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 1.2: Randomiserte kontrollerte forsøk (RCT): design, antakelser og grenser

- **id:** `econ4915-1-2` · **number:** 1.2 · **estimatedMinutes:** 60 · **prerequisites:** `econ4915-1-1`
- **Kapitteltype:** teori (metode) + **NØKKELSTUDIE** (Kremer & Miguel 2004)
- **description:** Hvordan randomisering løser seleksjonsproblemet, hvilke antakelser (SUTVA/ingen spillovers, etterlevelse) som bærer, og hvorfor ekstern validitet er RCT-ens akilleshæl — illustrert med avmarkerings-forsøket.
- **Eksamensbelegg:** RCT-design + kritisk vurdering er epoke 1-signatur (V2015 Banerjee, V2017 Kremer & Miguel); nøkkelstudie-spørsmålet (sjanger B). Prioritet: **perfekt** (den mest eksaminerte identifikasjonsstrategien). Bærer også helse & humankapital (nivå 3).
- **Begrepskontrakt (m/pensumforankring):** **Randomisert kontrollert forsøk (randomized controlled trial, RCT)**; **behandlings-/kontrollgruppe (treatment/control)**; **SUTVA / ingen ringvirkninger (no spillovers)**; **etterlevelse (compliance), intention-to-treat**; **ekstern validitet (external validity)**; **eksternalitet (externality)** i sykdomsbekjempelse; **kunnskap–handling-gap (know-do gap)**; **inntekt↔helse-multiplikator (income–health multiplier)**. Forankring: **Kremer & Miguel (2004)** — avmarkering; empirisk lærebok `(verifiser)`.
- **NØKKELSTUDIE-boks — Kremer & Miguel (2004), avmarkering (deworming):**
  - **Design:** avmarkeringsbehandling **faset inn på skolenivå i randomisert rekkefølge** i Kenya → skoler behandlet tidlig vs. senere gir behandlings-/kontroll-sammenligning; sentralt grep: designet fanger **eksternaliteter** (færre orm i miljøet smitter også ubehandlede/nabo­skoler).
  - **Funn:** stor nedgang i skolefravær; helse- og skolegevinster i *både* behandlede og nærliggende ubehandlede barn via redusert smitte — svært kostnadseffektivt.
  - **Identifikasjonsvurdering:** randomisering gir intern validitet; **spillover-designet** er poenget (en naiv RCT som ignorerer smitte ville *undervurdert* effekten); kritiske spørsmål: ekstern validitet (annen sykdomsbyrde/kontekst), langtidsvirkning, generalisering til andre tiltak. Kobling: **know-do gap** — selv gratis, effektive tiltak tas ikke i bruk uten riktig levering.
- **Drøftingsakser:** (i) hva randomisering **løser** (seleksjon) og hva den **ikke** løser (ekstern validitet, spillovers om de ignoreres); (ii) hvorfor eksternaliteter gjør naiv RCT misvisende; (iii) inntekt↔helse-multiplikatoren og know-do gap som utviklingsmekanismer.
- **Case-forslag:** «Et program deler ut helsetiltak til tilfeldig utvalgte landsbyer. Forklar hvorfor randomisering gir en troverdig effektmåling, og hvorfor smitte mellom landsbyer kan gjøre en enkel sammenligning misvisende.»
- **Typiske feil:** Gjengi funnet uten designet (feilkatalog #3); glemme spillover-/SUTVA-problemet; overselge ekstern validitet; behandle RCT som «gullstandard uten forbehold».
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 1.3: Instrumentvariabel (IV): relevans og eksklusjon

- **id:** `econ4915-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `econ4915-1-1`
- **Kapitteltype:** teori (metode)
- **description:** Hvordan en instrumentvariabel kan gi kausal identifikasjon når randomisering er umulig — de to bærebjelkene relevans og eksklusjon — og hvorfor eksklusjonsantakelsen aldri kan testes fullt ut.
- **Eksamensbelegg:** IV er eksplisitt i V2015 (identifikasjonsproblemet ulikhet→vekst, Easterly). Den mest «tekniske» identifikasjonsstrategien, men behandles verbalt. Prioritet: **perfekt** (huser IV-logikken som Easterly-boksen i kap. 2.2 bygger på).
- **Begrepskontrakt (m/pensumforankring):** **Instrumentvariabel (instrumental variable, IV)**; **relevans (relevance / first stage)** — instrumentet må påvirke den endogene variabelen; **eksklusjonsantakelse (exclusion restriction)** — instrumentet påvirker utfallet KUN gjennom den endogene variabelen; **eksogenitet (exogeneity)**; **svakt instrument (weak instrument)**; **lokal effekt (LATE, begrepsmessig)**. Forankring: Easterly (2007) IV for ulikhet→underutvikling `(fullt behandlet i kap. 2.2)`; empirisk lærebok `(verifiser)`.
- **Drøftingsakser:** (i) hvorfor **begge** betingelsene trengs (relevant men ikke-ekskluderende instrument gir bias); (ii) hvorfor **eksklusjon aldri kan bevises**, bare argumenteres — og hvordan man angriper den kritisk; (iii) avveining mot RCT (IV brukes når randomisering er umulig/uetisk, men hviler på en utestbar antakelse); (iv) hvorfor **svake instrumenter** er farlige.
- **Case-forslag:** «En forsker vil måle effekten av ulikhet på vekst og bruker en historisk/geografisk variabel som instrument for ulikhet. Forklar hvilke to betingelser instrumentet må oppfylle, og hvorfor eksklusjonsantakelsen er vanskelig å forsvare.»
- **Typiske feil:** Nevne bare relevans (glemme eksklusjon); behandle eksklusjon som testbar; tro at IV automatisk er mer troverdig enn en godt designet RCT; ignorere svakt-instrument-problemet.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 1.4: Naturlige eksperimenter, DiD og RDD

- **id:** `econ4915-1-4` · **number:** 1.4 · **estimatedMinutes:** 55 · **prerequisites:** `econ4915-1-1`
- **Kapitteltype:** teori (metode) + **NØKKELSTUDIE** (Qian 2008)
- **description:** De tre kvasi-eksperimentelle strategiene: naturlig eksperiment (eksogent sjokk), forskjell-i-forskjeller (parallelle trender) og regresjonsdiskontinuitet (terskel) — hver med sin bærende antakelse, illustrert med te-/silkeprissjokket.
- **Eksamensbelegg:** Naturlig eksperiment/DiD er eksplisitt i V2016 (Qian) og gjennomgående i epoke 1; RDD nevnes ikke i noe sett, men hører til verktøykassa (kort). Nøkkelstudie-spørsmålet (sjanger B). Prioritet: **perfekt**. Bærer også kjønn/«missing women» (nivå 3).
- **Begrepskontrakt (m/pensumforankring):** **Naturlig eksperiment (natural experiment)** — en eksogen hendelse skaper tilnærmet tilfeldig variasjon; **forskjell-i-forskjeller (difference-in-differences, DiD)** + **antakelse om parallelle trender (parallel trends)**; **regresjonsdiskontinuitet (regression discontinuity design, RDD)** + **terskel/cutoff**; **«forsvunne kvinner» (missing women)**. Forankring: **Qian (2008)** te-/silkeprissjokk; empirisk lærebok `(verifiser)`.
- **NØKKELSTUDIE-boks — Qian (2008), kjønnsspesifikk inntekt og kjønnsbalanse:**
  - **Design:** utnytter et **eksogent sjokk** i priser (te/silke) som endret den relative **inntekten kvinner vs. menn** kunne tjene i ulike områder → naturlig eksperiment på om høyere *kvinnelig* inntekt bedrer jenters overlevelse/skolegang.
  - **Funn:** økt kvinnelig inntekt bedret kjønnsbalansen (flere overlevende jenter) og jenters utdanning; økt *mannlig* inntekt gjorde ikke det samme — kjønnsspesifikk inntekt betyr noe for «missing women».
  - **Identifikasjonsvurdering:** troverdigheten hviler på at prissjokket er **eksogent** for de aktuelle husholdningene og ikke korrelert med andre samtidige endringer; kritiske spørsmål: er te-/silkeområder systematisk ulike (parallelle trender?), generaliserbarhet, langtidseffekt.
- **Drøftingsakser:** (i) hva som gjør et sjokk **eksogent** nok til å bære identifikasjon; (ii) **DiD-antakelsen** om parallelle trender — hva som kan bryte den; (iii) **RDD**-logikken (enheter rett over/under en terskel er sammenlignbare) og dens lokale gyldighet; (iv) hvordan disse skiller seg fra RCT (utnytter *funnet* variasjon i stedet for *skapt*).
- **Case-forslag:** «En reform innføres i noen regioner og ikke andre. Forklar hvordan forskjell-i-forskjeller kan brukes til å måle effekten, og hvilken antakelse resultatet står og faller med.»
- **Typiske feil:** Anta parallelle trender uten å drøfte dem; behandle et «naturlig eksperiment» som virkelig tilfeldig uten å vurdere eksogeniteten; blande DiD og RDD; gjengi Qian-funnet uten designet.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 1.5: Proxy-måling og nattlys; aggregat-regresjonens svakhet

- **id:** `econ4915-1-5` · **number:** 1.5 · **estimatedMinutes:** 50 · **prerequisites:** `econ4915-1-1`
- **Kapitteltype:** teori (metode/måling)
- **description:** Når direkte data mangler: nattlys fra satellitt som inntekts-proxy — hva den fanger (uformell økonomi) og fallgruvene (ikke-lineær sammenheng, urban skjevhet) — og hvorfor aggregerte kryssland-regresjoner sjelden identifiserer kausaleffekter.
- **Eksamensbelegg:** Nattlys-proxy eksplisitt i V2017 (fordeler/fallgruver) og som måleredskap i Alesina et al. (2015, V2016); aggregatregresjonens svakhet i V2019. Sjanger F/G. Prioritet: **perfekt** (måleredskapet Alesina-boksen i kap. 2.4 bygger på).
- **Begrepskontrakt (m/pensumforankring):** **Proxy-måling (proxy)**; **nattlys (nighttime lights)** som inntekts-/aktivitetsmål; **uformell økonomi (informal economy)**; **ikke-lineær sammenheng (non-linearity)**; **urban skjevhet (urban bias)**; **måle-/attenueringsbias (measurement error)**; **aggregert kryssland-regresjon (cross-country regression)** og dens svakhet. Forankring: V2017 (nattlys), Alesina et al. (2015) `(behandlet i kap. 2.4)`; empirisk lærebok `(verifiser)`.
- **Drøftingsakser:** (i) hvorfor nattlys er **nyttig** (dekker uformell økonomi og steder uten pålitelig BNP-statistikk) men **skjev** (ikke-lineær lys↔inntekt, undervurderer rurale/landbruksområder); (ii) proxy-feil som støy i identifikasjonen; (iii) hvorfor **aggregat-regresjon** (mange land, én linje) sjelden gir kausalitet (confounders + omvendt kausalitet) — mikro-RCT gir renere identifikasjon, men til en aggregerings-/ekstern-validitets-pris (V2019).
- **Case-forslag:** «En studie bruker satellittmålt nattlys som mål på økonomisk aktivitet i regioner uten pålitelig statistikk. Drøft fordelene og fallgruvene ved dette proxy-målet.»
- **Typiske feil:** Nevne bare fordelen med nattlys og glemme fallgruvene (feilkatalog #10); tro at flere land i en regresjon gir bedre identifikasjon; ignorere måle-/proxy-feil.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 1.6: Drill: nøkkelstudie- og identifikasjonsessayet

- **id:** `econ4915-1-6` · **number:** 1.6 · **estimatedMinutes:** 80 · **prerequisites:** `econ4915-1-5`
- **Kapitteltype:** drill (sjanger B + G)
- **description:** Sjangerdrill på de to metode-sjangrene: nøkkelstudie-spørsmålet (`design → funn → identifikasjonsvurdering`) og det frittstående identifikasjonsessayet («hvordan identifisere effekten av X?») — inkludert bistandseffektivitet-caset.
- **Eksamensbelegg:** Dekker sjanger B (V2015 Banerjee, V2016 Qian/Alesina, V2017 Kremer & Miguel) og sjanger G (V2019 bistandsidentifikasjon — helt essay). Rotasjonen: ulike studier og ulike «hvordan identifisere»-spørsmål (bistand, ulikhet, et helsetiltak). Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** To algoritmer. **B (nøkkelstudie):** 1) hva undersøkes; 2) design (hva randomiseres/instrumenteres/hvilket sjokk); 3) identifikasjonsantakelse; 4) kritisk vurdering (spillover/eksklusjon/parallelle trender/ekstern validitet); 5) funn (retning + at effekten ofte er beskjeden). **G (frittstående identifikasjon):** 1) hvorfor aggregat-regresjon svikter (omvendt kausalitet + confounders); 2) hvilken strategi passer (RCT/IV/DiD/RDD) og hvorfor; 3) hva som kan bryte antakelsen; 4) intern↔ekstern validitet-avveiningen. **Bistandscaset (V2019) gjennomskrevet** med sensor-margnotater. 8–12 nyskrevne oppgaver.
- **Oppgavesjangre:** B, G. Mønstereksempel: «En studie måler effekten av et mikrolåneprogram ved å åpne filialer i tilfeldig utvalgte nabolag. Forklar designet, vurder om identifikasjonen er troverdig, og gjør rede for hva slike studier typisk finner.»
- **Typiske feil:** Gi funnet uten designet; ikke vurdere identifikasjonen kritisk; velge en strategi uten å begrunne antakelsen; overselge ekstern validitet.
- **Quiz: 14 · Flashcards: 10**

**Prøve-kvote Del 1:** 4 prøver (1.A identifikasjonsproblemet: korrelasjon/omvendt kausalitet/confounders + hvordan identifisere, sjanger G; 1.B RCT-design + kritisk vurdering (Kremer & Miguel-type), sjanger B; 1.C IV vs. naturlig eksperiment/DiD — relevans/eksklusjon vs. parallelle trender, sjanger B/G; 1.D nattlys-proxy + aggregatregresjonens svakhet, sjanger F/G).

---

### Del 2 — Ulikhet, utviklingsbegrepet og fattigdomsmåling *(prioritet: PERFEKT — nav 1)*

#### Kapittel 2.1: Utviklingsbegrepet og kritisk fattigdomsmåling

- **id:** `econ4915-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ4915-0-2`
- **Kapitteltype:** teori (drøfting, konseptuelt/måling)
- **description:** Utvikling som mer enn BNP-vekst, og hvordan fattigdom måles kritisk — absolutt vs. relativ fattigdomslinje, hodetellingsmålet og hva det ikke fanger, multidimensjonalitet.
- **Eksamensbelegg:** Fattigdomsbegrep/-måling + utviklingsbegrepet 2/11 (V2017 nattlys-relatert måling, V2024 «kritisk drøfting av fattigdomsbegrepet + hvordan måle endringer»); konseptuelt anker som ofte åpner et sett. **A/B-markør:** head count fanger ikke fordeling *blant* de fattige. Sjanger F. Prioritet: **perfekt** (konseptuelt anker + premiss for ulikhets- og handelsdrøfting). Delt teorikjerne med ECON1910 (kap. 1.1/1.3, `econ1910-1-1` — klartekst).
- **Begrepskontrakt (m/pensumforankring):** **Utvikling (development)** = mer enn BNP-vekst (helse, utdanning, sårbarhet, frihet); **fattigdom (poverty)** = deprivasjon under en terskel; **fattigdomslinje (poverty line)** — **absolutt** (fast realverdi) vs. **relativ** (andel av median); **fattigdomsandel / head count ratio**; **fattigdomsdybde (poverty gap)**; **multidimensjonal fattigdom (multidimensional poverty)**; **å måle endringer i fattigdom over tid (measuring changes)**. Forankring: Oslo-/ESOP-tradisjonen `(verifiser)`; frihetsdimensjonen kan knyttes til Sens capability-perspektiv **(verifiser om på pensum — usikker kobling; ikke oppgi verk uten verifisering)**. Utenfor pensum: Gini/Lorenz som utregning.
- **Drøftingsakser:** (i) hvorfor **BNP alene er utilstrekkelig** (kobling til nattlys/måling, kap. 1.5); (ii) **absolutt vs. relativ linje** — hva hver fanger; (iii) **head count-kritikken** (fanger utbredelse, ikke dybde/fordeling blant de fattige) — A/B-poeng; (iv) hvordan **måle endringer** troverdig (kobling til identifikasjon, Del 1); (v) at valg av mål er **normativt** (sensor belønner motivert valg).
- **Case-forslag:** «Gi en kritisk drøfting av hva vi mener med fattigdom, og hvordan man best måler om fattigdommen i et land går opp eller ned over tid.»
- **Typiske feil:** Utvikling = ren BNP-vekst (feilkatalog #11); ikke skille absolutt/relativ linje; ikke kjenne head count-svakheten (feilkatalog #9); trekke inn Gini/Lorenz-utregning (utenfor pensum); måle uten å motivere valget.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 2.2: Ulikhet og vekst: kanalen via imperfekte kredittmarkeder og endogenitet

- **id:** `econ4915-2-2` · **number:** 2.2 · **estimatedMinutes:** 60 · **prerequisites:** `econ4915-2-1`, `econ4915-1-3`
- **Kapitteltype:** teori (drøfting) + **NØKKELSTUDIE** (Easterly 2007) — **navet i faget**
- **description:** Hovedkanalen fra ulikhet til lavere vekst — imperfekte kredittmarkeder som hindrer fattige i å finansiere lønnsom investering — og hvorfor endogenitet gjør denne sammenhengen vanskelig å identifisere.
- **Eksamensbelegg:** Ulikhet & utvikling er fagets nav, 45 % (V2015 essay 4–5, V2018, V2020, V2025). Kanalen + endogenitet er kjernen. **A/B-markør:** endogenitet (ulikhet er ikke eksogen) + Easterly IV. Sjanger A + B. Prioritet: **perfekt** (hyppigst og bærer master-identifikasjonskravet).
- **Begrepskontrakt (m/pensumforankring):** **Ulikhet (inequality)** i formue/inntekt; **imperfekte kredittmarkeder (imperfect credit markets)** → fattige kan ikke låne til lønnsom (human)kapitalinvestering → **underinvestering (underinvestment)** → aggregert produksjonstap; **endogenitet (endogeneity)** — ulikhet er samvirkende med institusjoner/vekst, ikke eksogen. Forankring: kanalen deles med ECON1910 (kap. `econ1910-*` — klartekst, imperfekt-kreditt-argumentet); **Easterly (2007)** for identifikasjon; Oslo-/ESOP-tradisjonen `(verifiser)`.
- **NØKKELSTUDIE-boks — Easterly (2007), ulikhet og underutvikling:**
  - **Design:** aggregert sammenheng ulikhet↔utvikling er endogen → Easterly bruker en **instrumentvariabel** (en historisk/strukturell kilde til ulikhet, uavhengig av dagens inntekt) for å isolere en kausalretning fra ulikhet til (under)utvikling.
  - **Funn:** høyere strukturell ulikhet er forbundet med lavere utvikling (lavere inntekt, dårligere institusjoner/humankapital) — tolket kausalt gjennom instrumentet.
  - **Identifikasjonsvurdering:** hviler på **eksklusjonsantakelsen** (instrumentet påvirker utvikling KUN via ulikhet) — nettopp det som er vanskeligst å forsvare (kap. 1.3); kritiske spørsmål: kan instrumentet virke gjennom andre kanaler (institusjoner, geografi)? Er det relevant nok? Dette er master-poenget: kjenn *strategien og dens svakhet*, ikke bare konklusjonen.
- **Drøftingsakser:** (i) hvorfor **imperfekt kreditt** gjør fordeling produktivt viktig (fattige med gode prosjekter får ikke finansiering); (ii) **endogenitet** — hvorfor en enkel korrelasjon ikke holder, og hvordan IV forsøker å omgå det; (iii) kobling til **distribusjonsbasert fattigdomsfelle** (kap. 4.2) og til **kredittmarkedssvikt** (kap. 6.1).
- **Case-forslag:** «Forklar mekanismen som kan gjøre at høy ulikhet senker økonomisk vekst, og drøft hvorfor det er vanskelig å fastslå empirisk at ulikhet *forårsaker* lavere vekst.»
- **Typiske feil:** Påstå «ulikhet senker vekst» uten endogenitet/identifikasjon (feilkatalog #2); utelate kredittmarkeds-kanalen; gjengi Easterly-konklusjonen uten IV-designet og eksklusjonsproblemet; behandle ulikhet som eksogen.
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 2.3: Ulikhetens toveis-rolle: kan ulikhet også fremme vekst?

- **id:** `econ4915-2-3` · **number:** 2.3 · **estimatedMinutes:** 50 · **prerequisites:** `econ4915-2-2`
- **Kapitteltype:** teori (drøfting) — A-differensiator (nyanse)
- **description:** Motsporet til kap. 2.2: de klassiske argumentene for at ulikhet kan *øke* vekst (sparerate, investeringsudelelighet, insentiver) — og hvorfor den samlede effekten er kontekstavhengig og empirisk omstridt.
- **Eksamensbelegg:** Toveis-drøfting er A/B-markøren i ulikhetsessayet (V2018, V2020, V2025 «ulikhetens rolle for utvikling»). Sjanger A. Prioritet: **perfekt** (nyansen som løfter til topp).
- **Begrepskontrakt (m/pensumforankring):** **Sparerate-argumentet (savings/aggregate-demand argument)** — rike sparer en høyere andel → mer kapitaldannelse; **udelelig investering (indivisibilities / lumpy investment)** — noen prosjekter krever oppsamlet formue; **insentiv-/innovasjonsargumentet (incentives)**; **den samlede (netto) effekten (net effect)** som kontekstavhengig. Forankring: Oslo-/ESOP-tradisjonen + generell utviklingsøkonomi `(verifiser)`.
- **Drøftingsakser:** (i) hvordan **samme fordeling** kan virke begge veier (kredittskranke-tapet i kap. 2.2 vs. sparerate-/udelelighetsgevinsten her); (ii) hvorfor **stadiet/konteksten** avgjør (tidlig industrialisering vs. moden økonomi); (iii) hvorfor **empirien er tvetydig** (identifikasjonsproblemet igjen — ingen ren naturlov); (iv) at en A-besvarelse **veier begge kanaler** og konkluderer motivert, ikke ensidig.
- **Case-forslag:** «Noen hevder at ulikhet er bra for vekst, andre at den er skadelig. Drøft argumentene på begge sider og forklar hvorfor spørsmålet ikke har et entydig empirisk svar.»
- **Typiske feil:** Ensidig svar (bare skadelig / bare gunstig); ramse argumenter uten mekanisme; glemme at netto­effekten er kontekst- og identifikasjonsavhengig.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 2.4: Etnisk ulikhet, kjønn og fordeling

- **id:** `econ4915-2-4` · **number:** 2.4 · **estimatedMinutes:** 50 · **prerequisites:** `econ4915-2-2`, `econ4915-1-5`
- **Kapitteltype:** teori (drøfting) + **NØKKELSTUDIE** (Alesina et al. 2015; Qian kryssref)
- **description:** Ulikhet mellom grupper — etnisk ulikhet målt med nattlys og dens sammenheng med underutvikling — og kjønnsdimensjonen (kjønnsspesifikk inntekt og «missing women»).
- **Eksamensbelegg:** Etnisk ulikhet (V2016 Alesina) + kjønn/missing women (V2016 Qian). Nøkkelstudie-spørsmålet (sjanger B) + fordelingsdrøfting. Prioritet: **perfekt** (bærer nøkkelstudie-signaturen i ulikhetsdelen).
- **Begrepskontrakt (m/pensumforankring):** **Etnisk ulikhet (ethnic inequality)** — ulikhet *mellom* etniske grupper (vs. samlet ulikhet); **nattlys som inntekts-proxy per gruppe/region** (arver kap. 1.5); **kjønnsspesifikk inntekt (sex-specific income)**; **«forsvunne kvinner» (missing women)**. Forankring: **Alesina, Michalopoulos & Papaioannou (2015)**; **Qian (2008)** `(kryssref kap. 1.4)`; empirisk lærebok `(verifiser)`.
- **NØKKELSTUDIE-boks — Alesina, Michalopoulos & Papaioannou (2015), etnisk ulikhet:**
  - **Design:** konstruerer et mål på **etnisk ulikhet** ved å kombinere kart over etniske gruppers bosetting med **nattlys** som proxy for inntekt per gruppe/område → sammenligner etnisk ulikhet med utviklingsnivå på tvers av land/regioner.
  - **Funn:** høyere etnisk ulikhet er robust forbundet med lavere utvikling, også når man kontrollerer for samlet ulikhet og andre faktorer.
  - **Identifikasjonsvurdering:** i hovedsak en **korrelasjons-/betinget-sammenheng**-studie (ikke rent kausal) — vurder derfor confounders (kolonihistorie, geografi, institusjoner) og **nattlys-proxyens** svakheter (ikke-lineær, urban skjevhet, kap. 1.5); master-poenget: kjenn både det innovative målet og forbeholdene om kausalitet.
- **Drøftingsakser:** (i) hvorfor **ulikhet mellom grupper** kan hemme utvikling annerledes enn samlet ulikhet (konflikt, dårlig kollektiv beslutning, institusjonssvikt); (ii) hvorfor **nattlys-proxyen** er nødvendig men skjev (kobling kap. 1.5); (iii) **kjønnsdimensjonen** — kjønnsspesifikk inntekt (Qian) og «missing women» som fordelingsproblem; (iv) at Alesina-studien er assosiativ, ikke rent kausal.
- **Case-forslag:** «En studie måler etnisk ulikhet ved å kombinere bosettingskart med satellittlys og finner en sammenheng med lav utvikling. Forklar målet, funnene, og hvor forsiktig man bør være med å tolke sammenhengen kausalt.»
- **Typiske feil:** Behandle Alesina-korrelasjonen som kausal; glemme nattlys-proxyens fallgruver; blande etnisk ulikhet med samlet ulikhet; gjengi funnene uten målekonstruksjonen.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 2.5: Drill: ulikhet-og-utvikling-essayet

- **id:** `econ4915-2-5` · **number:** 2.5 · **estimatedMinutes:** 80 · **prerequisites:** `econ4915-2-4`
- **Kapitteltype:** drill (sjanger A + B)
- **description:** Sjangerdrill på ulikhetsessayet: kanal (imperfekt kreditt) → toveis-drøfting → endogenitet/identifikasjon (Easterly IV) → gruppedimensjon (Alesina/Qian) → kobling til distribusjonsbasert felle.
- **Eksamensbelegg:** Dekker sjanger A (V2018, V2020, V2025) + B (V2015 essay 5, V2016). Rotasjonen: ulikhetens rolle for vekst / for en felle; etnisk vs. samlet ulikhet; «kan ulikhet være bra». Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** Algoritme: 1) forklar kredittmarkeds-kanalen (ulikhet → underinvestering → lavere vekst); 2) motspor (sparerate/udelelighet) → netto­effekt kontekstavhengig; 3) **endogenitet + identifikasjon** (Easterly IV, eksklusjonsproblemet — master-løftet); 4) gruppedimensjon (etnisk ulikhet/Alesina, kjønn/Qian); 5) koble til **distribusjonsbasert fattigdomsfelle** (kap. 4.2) og konkluder motivert. Gjennomskrevet eksempel-case med sensor-margnotater (hva løfter til A: endogenitet + toveis + krysskobling). 8–12 nyskrevne oppgaver.
- **Oppgavesjangre:** A, B. Mønstereksempel: «Drøft ulikhetens rolle for økonomisk utvikling. Forklar mekanismen som kan gjøre ulikhet skadelig, om ulikhet også kan fremme vekst, og hvorfor det er vanskelig å fastslå sammenhengen empirisk.»
- **Typiske feil:** Ensidig svar; kausalitet fra korrelasjon; utelate kredittkanalen; gjengi Easterly/Alesina uten designet.
- **Quiz: 14 · Flashcards: 10**

**Prøve-kvote Del 2:** 4 prøver (2.A utviklingsbegrepet + kritisk fattigdomsmåling (head count-kritikk), sjanger F; 2.B ulikhet→vekst-kanalen + endogenitet/Easterly IV, sjanger A/B; 2.C ulikhetens toveis-rolle «kan ulikhet fremme vekst», sjanger A; 2.D etnisk ulikhet (Alesina nattlys) + kjønn (Qian) med identifikasjonsforbehold, sjanger B).

---

### Del 3 — Ressursrenter, ressursforbannelse og institusjoner *(prioritet: PERFEKT — nav 2)*

#### Kapittel 3.1: Ressursrenter og ressursforbannelsen: mekanismen

- **id:** `econ4915-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ4915-0-2`
- **Kapitteltype:** teori (drøfting)
- **description:** Hvorfor naturressurser ikke automatisk er en velsignelse: ressursrenter, rent-seeking og kanalene (Dutch disease, volatilitet, avledet talent) som kan gjøre ressursrikdom til en forbannelse for vekst.
- **Eksamensbelegg:** Ressurser/institusjoner er fagets andre nav, 45 % (V2018, V2020, V2021, V2022, V2025). Grunnmekanismen er fast åpning. Sjanger E. Prioritet: **perfekt**. Delt teorikjerne med ECON1910 (kap. 6.2, `econ1910-6-2` — klartekst).
- **Begrepskontrakt (m/pensumforankring):** **Ressursrenter (resource rents)** — avkastning utover kostnad ved en naturressurs; **ressursforbannelse (natural resource curse)**; **renteøkonomisk jakt / leiesøking (rent-seeking)**; **parasittaktivitet (parasitic activity)** som konkurrerer med produksjon; **hollandsk syke (Dutch disease)** — realappresiering svekker konkurranseutsatt sektor (bør kjenne); **inntektsvolatilitet (volatility)**. Forankring: Oslo-/ESOP-tradisjonen (Mehlum/Moene/Torvik-slekt) `(verifiser)`; big-push-koblingen deles med ECON1910 (`econ1910-6-2` — klartekst).
- **Drøftingsakser:** (i) hvorfor ressursrikdom kan **trekke talent/kapital bort** fra produksjon mot leiesøking; (ii) hvordan **volatilitet og Dutch disease** kan hemme diversifisering; (iii) at forbannelsen **ikke er automatisk** — den avhenger av institusjoner (setter opp kap. 3.2); (iv) empirisk: ressurs↔vekst-sammenhengen er også et **identifikasjonsproblem** (kobling Del 1).
- **Case-forslag:** «Et fattig land oppdager store oljeforekomster. Forklar mekanismene som kan gjøre at ressursrikdommen likevel hemmer utvikling og vekst.»
- **Typiske feil:** Behandle naturressurser som utvetydig gode (feilkatalog #7); utelate rent-seeking/parasitt-mekanismen; presentere forbannelsen som uunngåelig (glemme institusjonsbetingelsen).
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 3.2: Institusjoner: grabber- vs. producer-friendly

- **id:** `econ4915-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ4915-3-1`
- **Kapitteltype:** teori (drøfting) — **A-differensiator (institusjonsbetingelsen)**
- **description:** Kjernen i moderne ressursforbannelses-teori: samme ressurs blir forbannelse eller velsignelse avhengig av om institusjonene er «grabber-friendly» (belønner tilegnelse) eller «producer-friendly» (belønner produksjon).
- **Eksamensbelegg:** Institusjonskvalitet er eksplisitt i V2021 («naturressurs + institusjonskvalitet») og underliggende i V2020/V2022/V2025. **A/B-markør:** at institusjonene, ikke ressursen i seg selv, avgjør utfallet. Sjanger E. Prioritet: **perfekt** (den avgjørende betingelsen).
- **Begrepskontrakt (m/pensumforankring):** **Grabber-friendly institusjoner (grabber-friendly institutions)** — svak eiendomsrett/rettsstat gjør tilegnelse av renter mer lønnsomt enn produksjon; **producer-friendly institusjoner (producer-friendly institutions)** — sterke institusjoner gjør produksjon mest lønnsomt → ressurser blir velsignelse; **eiendomsrett/rettsstat (property rights, rule of law)**; **allokering av talent (allocation of talent)** mellom produksjon og grabbing. Forankring: Mehlum/Moene/Torvik-tradisjonen `(verifiser — usikker enkeltartikkel-kobling; ikke oppgi tittel/år uten verifisering)`; Oslo-/ESOP-miljøet `(verifiser)`.
- **Drøftingsakser:** (i) hvorfor **samme ressurs** gir motsatt utfall i land med ulike institusjoner (forklarer hvorfor Norge ≠ et rentekontrollert autokrati — bruk generiske case, ikke reelle påstander uten belegg); (ii) hvordan institusjoner styrer **talentallokeringen**; (iii) at dette er en **flerlikevekt/betinget** sammenheng, ikke en enkel «ressurs → forbannelse»; (iv) kobling til korrupsjon (Del 5) — ressursrenter nærer korrupsjon særlig under grabber-friendly institusjoner.
- **Case-forslag:** «To land oppdager samme ressurs, men bare det ene rammes av ‘ressursforbannelsen’. Forklar med begrepene grabber-friendly og producer-friendly institusjoner hvorfor utfallet blir så ulikt.»
- **Typiske feil:** Behandle forbannelsen som ressursdrevet uten institusjonsbetingelsen (feilkatalog #7); glemme talentallokeringen; oppgi konkrete land som «bevis» uten belegg; ikke koble til korrupsjon.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 3.3: Konkurranse om ressursrenter og vekst

- **id:** `econ4915-3-3` · **number:** 3.3 · **estimatedMinutes:** 50 · **prerequisites:** `econ4915-3-2`
- **Kapitteltype:** teori (drøfting)
- **description:** Hvordan ulik og intens konkurranse om ressursrenter (rentekamp) kan hemme vekst, og hvordan renter kobler ressurser til politisk økonomi og korrupsjon.
- **Eksamensbelegg:** V2020 ii spør eksplisitt «i hvilken grad ulik konkurranse om ressursrenter hemmer vekst»; V2022 (korrupsjon fra oljerenter) og V2021 er samme underliggende mekanisme. Sjanger E. Prioritet: **perfekt**.
- **Begrepskontrakt (m/pensumforankring):** **Rentekonkurranse (competition for rents)**; **ulik tilgang/konsentrasjon av renter (unequal access to rents)**; **produktiv vs. uproduktiv allokering (productive vs. unproductive activity)**; kobling **renter → korrupsjon → svake institusjoner** (setter opp Del 5). Forankring: Oslo-/ESOP-tradisjonen `(verifiser)`.
- **Drøftingsakser:** (i) hvorfor **konkurransen om renter i seg selv** er samfunnsøkonomisk sløsing (ressurser brukt på å tilegne seg, ikke skape); (ii) hvordan **ulik/konsentrert** rentetilgang forsterker ulikhet og elitekontroll (kobling Del 2 og Del 5); (iii) at effekten på vekst er **betinget** av institusjoner (kap. 3.2); (iv) empirisk vanskelighet (endogenitet — ressurser, institusjoner og vekst samvirker; kobling Del 1).
- **Case-forslag:** «Forklar hvordan intens konkurranse om ressursrenter kan hemme et lands vekst, og hvorfor svaret avhenger av hvordan tilgangen til rentene er fordelt.»
- **Typiske feil:** Behandle renter som ren inntekt uten sløsingskostnaden; glemme institusjons-/fordelingsbetingelsen; ikke koble til korrupsjon/politisk økonomi; anta enkel kausalitet.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 3.4: Drill: ressurs-, institusjons- og forbannelsesessayet

- **id:** `econ4915-3-4` · **number:** 3.4 · **estimatedMinutes:** 80 · **prerequisites:** `econ4915-3-3`
- **Kapitteltype:** drill (sjanger E)
- **description:** Sjangerdrill på ressursessayet: mekanismen (renter/rent-seeking) → institusjonsbetingelsen (grabber/producer) → rentekonkurranse/vekst → kobling til korrupsjon og fattigdomsfelle.
- **Eksamensbelegg:** Dekker sjanger E (V2018, V2020, V2021, V2022, V2025). Rotasjonen: «ressurser + institusjonskvalitet», «konkurranse om renter hemmer vekst», ressursbasert felle. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** Algoritme: 1) ressursrente-mekanismen (rent-seeking, parasitt, Dutch disease); 2) **institusjonsbetingelsen** (grabber vs. producer-friendly — hvorfor samme ressurs ulikt utfall); 3) rentekonkurranse → sløsing → hemmet vekst; 4) koble til **korrupsjon** (Del 5) og **ressursbasert fattigdomsfelle** (kap. 4.2); 5) identifikasjonsforbehold (endogenitet). Gjennomskrevet eksempel-case med sensor-margnotater (hva løfter til A: institusjonsbetingelsen + krysskobling). 8–12 nyskrevne oppgaver.
- **Oppgavesjangre:** E. Mønstereksempel: «I hvilken grad er tilgang på naturressurser en forbannelse for utvikling? Forklar mekanismene, og drøft hvorfor institusjonenes kvalitet er avgjørende for utfallet.»
- **Typiske feil:** Ressurser som utvetydig gode/onde; utelate institusjonsbetingelsen; ingen krysskobling til korrupsjon/felle; enkel kausalitet uten identifikasjonsforbehold.
- **Quiz: 14 · Flashcards: 10**

**Prøve-kvote Del 3:** 4 prøver (3.A ressursrente-mekanismen (rent-seeking, Dutch disease), sjanger E; 3.B grabber- vs. producer-friendly institusjoner — samme ressurs, ulikt utfall, sjanger E; 3.C konkurranse om ressursrenter og vekst (V2020 ii-type), sjanger E; 3.D full ressurs-/institusjonsessay med kobling til korrupsjon/felle, sjanger E).

---

### Del 4 — Fattigdomsfeller og flerlikevekt *(prioritet: PERFEKT — rød tråd)*

#### Kapittel 4.1: Flerlikevekt og fattigdomsfeller: terskel, S-kurve og stabilitet

- **id:** `econ4915-4-1` · **number:** 4.1 · **estimatedMinutes:** 60 · **prerequisites:** `econ4915-0-2`
- **Kapitteltype:** teori (figur i ord + drøfting) — **kjernegrammatikk (delt med ECON1910)**
- **description:** Grammatikken hele faget deler: ikke-konveks avkastning (S-kurve/terskel) gir flere likevekter — én dårlig (fella) og én god — med stabile og ustabile kryss og selvforsterkende dynamikk.
- **Eksamensbelegg:** Fattigdomsfeller/flerlikevekt 36 % (V2018, V2021, V2023, V2025) + den samlende strukturen bak korrupsjon (Del 5) og ressurser (Del 3). **A/B-markør:** drøfte stabilitet (aldri opplagt). Sjanger A. Prioritet: **perfekt** (grammatikken alt annet arver). Delt teorikjerne med ECON1910 (kap. 2.1/2.2, `econ1910-2-1` — klartekst; her kompakt gjengitt for master-drøftingen).
- **Begrepskontrakt (m/pensumforankring):** **Fattigdomsfelle (poverty trap)**; **flerlikevekt (multiple equilibria)**; **ikke-konveks avkastning / S-kurve (non-convexity, S-shaped returns)** via ernæring/helse/udelelig investering; **terskel (threshold)**; **stabil/ustabil likevekt (stable/unstable equilibrium)**; **selvforsterkende sirkel (self-reinforcing / vicious–virtuous circle)**; **«fattig fordi fattig» (poor because poor)**. Forankring: Oslo-/ESOP-tradisjonen + ECON1910 `(verifiser)`.
- **Figurbeskrivelse i ord + drøftingsakser:** Figur i ord: en S-formet «neste periodes inntekt/kapital som funksjon av dennes» mot 45°-linjen; når den krysser **minst tre ganger**, får man **to stabile likevekter** (lav = fella, høy) atskilt av et **ustabilt kryss (terskel)**. **Stabilitet via pil-argument.** **Kjernepoeng (A):** under terskelen trekkes økonomien ned i en vicious circle; et **lite løft er ikke nok**, men et **stort nok** løft skyver systemet over terskelen (eller fjerner fella). Drøftingsakser: (i) hvorfor **ikke-konveksitet** er nødvendig for flere likevekter; (ii) hvorfor **stabilitet aldri er opplagt**; (iii) hvordan **samme grammatikk** går igjen i korrupsjon (Del 5), ressurser (Del 3) og big push.
- **Case-forslag:** «Forklar generelt hvordan ikke-konveks avkastning kan gi en fattigdomsfelle med to stabile likevekter, og hvorfor et lite tiltak ofte ikke er nok til å komme ut.»
- **Typiske feil:** Tegne fella uten stabilitetsdrøfting; anta at ethvert løft hjelper (må over terskelen); lineær avkastning (ingen flere likevekter); sunn fornuft uten mekanismen.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 4.2: Distribusjonsbasert vs. ressursbasert fattigdomsfelle

- **id:** `econ4915-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ4915-4-1`, `econ4915-2-2`, `econ4915-3-1`
- **Kapitteltype:** teori (drøfting) — **krysskoblings-A-markøren (V2025-kjernedistinksjon)**
- **description:** V2025-kjernedistinksjonen: en distribusjonsbasert felle (formuesfordeling + kredittskranke låser fattige ute fra investering) mot en ressursbasert felle (renter/geografi/institusjoner holder aggregatet nede) — to ulike mekanismer med samme flerlikevekt-struktur.
- **Eksamensbelegg:** Eksplisitt i V2025 b) («forskjellen mellom en distribusjonsbasert og en ressursbasert fattigdomsfelle») og underliggende i V2018/V2020 (ulikhet + ressurser i samme essay). **A/B-markør:** skille de to og koble til henholdsvis Del 2 og Del 3. Sjanger A. Prioritet: **perfekt** (krysskoblings-poenget).
- **Begrepskontrakt (m/pensumforankring):** **Distribusjonsbasert felle (distribution-based trap)** — formuesfordelingen + imperfekt kreditt hindrer fattige i å investere → aggregert felle (kobling kap. 2.2); **ressursbasert felle (resource-based trap)** — renter/geografi/institusjoner (grabber-friendly) holder aggregatet i lavlikevekten (kobling kap. 3.2); **samme flerlikevekt-struktur, ulik driver**. Forankring: Oslo-/ESOP-tradisjonen `(verifiser)`.
- **Drøftingsakser:** (i) hva som **skiller** de to fellene (fordeling *innad* vs. aggregat-/institusjonsdriver); (ii) hva de **deler** (flerlikevekt, terskel, stabilitet); (iii) hvorfor **politikken** blir ulik (omfordeling/kredittilgang vs. institusjonsreform); (iv) at et land kan sitte i **begge samtidig** (krysskobling — det som gir A).
- **Case-forslag:** «Forklar forskjellen mellom en distribusjonsbasert og en ressursbasert fattigdomsfelle. Bruk flerlikevekt-tenkningen og gjør rede for hvorfor de krever ulik politikk.»
- **Typiske feil:** Behandle «fattigdomsfelle» som ett udelt begrep; ikke koble distribusjonsfella til ulikhet/kreditt og ressursfella til institusjoner; foreslå samme politikk mot begge.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 4.3: Å komme ut av fella: politikk, big push og hvorfor små tiltak feiler

- **id:** `econ4915-4-3` · **number:** 4.3 · **estimatedMinutes:** 50 · **prerequisites:** `econ4915-4-2`
- **Kapitteltype:** teori (figur i ord + drøfting) — komparativ statikk i felle-modellen
- **description:** Hvordan man kommer ut av en felle: hvorfor marginale tiltak skuffer, hvordan et stort nok/koordinert løft (big push) kan fjerne fella, og hvordan mikrofinans er en (begrenset) mulig bro — med kritisk evidensforbehold.
- **Eksamensbelegg:** Politikk i fella (V2018, V2021 «hvorfor fortsatt ekstrem fattigdom i noen regioner») + mikrofinans som vei ut (V2023 Q2). **A/B-poeng:** at et stort nok/koordinert tiltak fjerner fella, og at mikrofinans ikke er en mirakelkur. Sjanger A. Prioritet: **perfekt**.
- **Begrepskontrakt (m/pensumforankring):** Politikk som **skift/terskelkryssing**: **stor engangsoverføring / big push (coordination / big push)**; **kredittilgang (access to credit)** og **mikrofinans** som mulig bro over terskelen (utdypes i Del 6); hvorfor **små, marginale tiltak** ikke krysser terskelen. Forankring: big-push-koblingen deles med ECON1910 (`econ1910-2-4` — klartekst); Banerjee-RCT-forbeholdet `(kap. 6.2)`.
- **Figurbeskrivelse i ord + drøftingsakser:** Figur i ord (arver kap. 4.1): et **lite løft** flytter kurven litt → systemet faller tilbake i fella; et **stort nok** løft skyver over terskelen inn i den gode sirkelen, eller fjerner den dårlige likevekten. Drøftingsakser: (i) hvorfor **marginale tiltak skuffer** i en felle-økonomi; (ii) **koordinering/big push** som løsning på aggregat-/ressursbaserte feller; (iii) **mikrofinans/kreditt** som mulig bro for distribusjonsbaserte feller — men med **kritisk evidens** (beskjedne effekter, kap. 6.2); (iv) skille førsteordens-skift fra dynamisk respons.
- **Case-forslag:** «Hvorfor er en liten kontantoverføring ofte ikke nok til å løfte en husholdning ut av en fattigdomsfelle, mens et større, koordinert tiltak kan være det? Drøft også om mikrofinans er en troverdig vei ut.»
- **Typiske feil:** Tro at ethvert tiltak løfter ut (må over terskelen); overselge mikrofinans som mirakelkur (feilkatalog #4); ikke skille distribusjons- fra ressursbasert felle (ulik politikk); hoppe over dynamikken.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 4.4: Drill: fattigdomsfelle-essayet

- **id:** `econ4915-4-4` · **number:** 4.4 · **estimatedMinutes:** 80 · **prerequisites:** `econ4915-4-3`
- **Kapitteltype:** drill (sjanger A)
- **description:** Sjangerdrill på fattigdomsfelle-essayet: S-kurve/terskel → stabilitet → distribusjons- vs. ressursbasert felle → politikk (big push, mikrofinans) → krysskobling, i stadig ny innpakning.
- **Eksamensbelegg:** Dekker sjanger A (V2018, V2021, V2023, V2025). Rotasjonen: hvorfor noen regioner fanget mens andre vokser; distribusjon vs. ressurs; mikrofinans som vei ut. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** Algoritme: 1) forklar ikke-konveksitet/S-kurve → flerlikevekt; 2) **drøft stabilitet** (pil-argument, terskel); 3) skill **distribusjons-** vs. **ressursbasert** felle (koble til Del 2/3); 4) politikk (små tiltak feiler, big push/mikrofinans — med evidensforbehold); 5) konkluder + koble. Gjennomskrevet eksempel-case med sensor-margnotater (hva løfter til A: distribusjon/ressurs-skillet + stabilitet + krysskobling). 8–12 nyskrevne oppgaver.
- **Oppgavesjangre:** A. Mønstereksempel: «Hvorfor er noen regioner fanget i vedvarende ekstrem fattigdom mens andre reduserer den? Drøft ved hjelp av flerlikevekt-tenkning og forskjellen på distribusjons- og ressursbaserte feller.»
- **Typiske feil:** Felle uten stabilitet; ett udelt fellebegrep; mikrofinans som mirakelkur; sunn fornuft uten mekanismen.
- **Quiz: 14 · Flashcards: 10**

**Prøve-kvote Del 4:** 4 prøver (4.A flerlikevekt-grammatikken (S-kurve, terskel, stabilitet), sjanger A; 4.B distribusjonsbasert vs. ressursbasert felle, sjanger A; 4.C å komme ut (små tiltak vs. big push/mikrofinans), sjanger A; 4.D full fattigdomsfelle-essay «hvorfor fanget» med krysskobling, sjanger A).

---

### Del 5 — Korrupsjon og politisk økonomi *(prioritet: KUNNE — nivå 2)*

#### Kapittel 5.1: Korrupsjon: definisjon, typer og kontekstavhengige konsekvenser

- **id:** `econ4915-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ4915-0-2`
- **Kapitteltype:** teori (drøfting) — **A-differensiator (kontekst)**
- **description:** Hva korrupsjon er, skillet politisk/byråkratisk, og master-poenget at konsekvensene IKKE er like på tvers av kontekster — oljerente-plyndring vs. handelsrestriksjoner vs. byråkratisk «smøring».
- **Eksamensbelegg:** Korrupsjon & politisk økonomi 27 % (V2015, V2022, V2024). V2022 a) spør eksplisitt om konsekvensene er like i alle situasjonene i et IMF-sitat. **A/B-markør:** kontekstsensitivitet. Sjanger E. Prioritet: **kunne** (nivå 2 — bærer et helt essay). Delt teorikjerne med ECON1910 (kap. 3.1/3.3, `econ1910-3-2` — klartekst).
- **Begrepskontrakt (m/pensumforankring):** **Korrupsjon (corruption)** = misbruk av offentlig makt for privat vinning; **politisk vs. byråkratisk korrupsjon (political vs. bureaucratic corruption)**; **olje vs. sand i maskineriet (grease vs. sand in the wheels)** — når korrupsjon smører (nær null marginalkostnad) vs. sabler (høy kostnad); **kontekstavhengige konsekvenser (context-dependent consequences)** — oljerenter vs. handelsrestriksjoner vs. smøring. Forankring: Oslo-/ESOP-tradisjonen + ECON1910 olje/sand-modellen (`econ1910-3-3` — klartekst) `(verifiser)`.
- **Drøftingsakser:** (i) hvorfor **skillet politisk/byråkratisk** har konsekvenser for tiltak; (ii) **V2022-poenget:** at samme ord «korrupsjon» dekker svært ulike fenomener med ulike kostnader — skill oljerente-plyndring (stor sløsing) fra handelsrestriksjons-renter fra byråkratisk smøring (kan i sjeldne tilfeller omgå ineffektiv regel); (iii) kobling til ressursrenter (Del 3) og flerlikevekt (kap. 5.2).
- **Case-forslag:** «Et IMF-notat behandler korrupsjon knyttet til oljeinntekter, importrestriksjoner og daglig byråkrati under ett. Drøft om konsekvensene av korrupsjon er de samme i alle disse situasjonene.»
- **Typiske feil:** Anta at konsekvensene er like i alle situasjoner (feilkatalog #8); definere korrupsjon uten politisk/byråkratisk-skillet; moralisere uten fagbegrep; hevde korrupsjon alltid er «sand» (eller alltid «olje»).
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 5.2: Hvorfor er korrupsjon mest utbredt i u-land? Renter, reguleringer og flerlikevekt

- **id:** `econ4915-5-2` · **number:** 5.2 · **estimatedMinutes:** 50 · **prerequisites:** `econ4915-5-1`, `econ4915-4-1`
- **Kapitteltype:** teori (figur i ord + drøfting)
- **description:** Hvorfor korrupsjon konsentreres i fattige land: renter og reguleringer som skaper meravkastning, og flerlikevekt-mekanismen (G(y)) som gjør at samme system kan låses i stabil høy eller stabil lav korrupsjon.
- **Eksamensbelegg:** V2022 b) spør eksplisitt om korrupsjon er mest utbredt i u-land og hvorfor. Flerlikevekt-mekanismen er kjernen (delt med ECON1910 kap. 3.2). Sjanger E. Prioritet: **kunne**.
- **Begrepskontrakt (m/pensumforankring):** **Renter og reguleringer (rents, regulations)** som grobunn for korrupsjon; **gevinstkurve G(y)** stigende i andelen korrupte y; **S-formet moralkostnadsfordeling**; **to stabile likevekter** (lav/høy korrupsjon) + ustabilt kryss; **svake institusjoner (weak institutions)** som forsterker. Forankring: ECON1910 korrupsjons-flerlikevekt (`econ1910-3-2` — klartekst, her kompakt gjengitt) `(verifiser)`.
- **Figurbeskrivelse i ord + drøftingsakser:** Figur i ord (arver flerlikevekt-grammatikken, kap. 4.1): x = andel korrupte y; G(y) stigende mot S-formet moralkostnad → **to stabile likevekter**. **Stabilitet via pil-argument.** Drøftingsakser: (i) hvorfor **flere renter/reguleringer + svake institusjoner** i u-land gir mer grobunn; (ii) hvorfor **flerlikevekt** forklarer at ellers like land havner på ulike nivåer (historie/startbetingelse); (iii) at «mest utbredt i u-land» må **nyanseres** (målings- og definisjonsproblemer — kobling Del 1).
- **Case-forslag:** «Er korrupsjon mest utbredt i fattige land, og i så fall hvorfor? Bruk begrepene renter, reguleringer og flerlikevekt i drøftingen.»
- **Typiske feil:** Liste konsekvenser uten flerlikevekt-mekanismen; ikke koble til renter/reguleringer; anta at «u-land = korrupt» uten nyansering/målingsforbehold.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 5.3: Hvorfor vedvarer korrupsjon? Commitment-problem, «politics of fear» og maktbevaring

- **id:** `econ4915-5-3` · **number:** 5.3 · **estimatedMinutes:** 60 · **prerequisites:** `econ4915-5-2`
- **Kapitteltype:** teori (drøfting) + **NØKKELSTUDIE** (Padró i Miquel 2007)
- **description:** Hvorfor myndighetene ikke bare fjerner kostbar korrupsjon: makthaverne tjener selv på den (commitment-problem), og Padró i Miquels «politics of fear» viser hvordan en elite kan holde på makten ved å utnytte etnisk frykt — koblet til at god fattigdomspolitikk ikke alltid er god maktpolitikk.
- **Eksamensbelegg:** V2022 c) spør hvorfor myndighetene ikke fjerner korrupsjon hvis kostnaden er så høy; V2024 spør om god fattigdomspolitikk også er god *maktpolitikk*; V2015 short-spørsmål om Padró i Miquel. **A/B-markør:** commitment-/politisk-økonomi-innsikten. Sjanger E + B. Prioritet: **kunne** (nivå 2; huser Padró-nøkkelstudien).
- **Begrepskontrakt (m/pensumforankring):** **Bindingsproblem (commitment problem)** — den som skal rydde opp tjener selv på korrupsjonen; **elitekontroll (elite capture)**; **«politics of fear»** — elite holder på makten ved å true med en verre motpart; **god politikk vs. maktbevaring (good policy vs. staying in power)**. Forankring: **Padró i Miquel (2007)**; Oslo-/ESOP-tradisjonen `(verifiser)`.
- **NØKKELSTUDIE-boks — Padró i Miquel (2007), «politics of fear»:**
  - **Modell/mekanisme:** en politisk-økonomi-modell der en sittende elite/leder kan **bli sittende og plyndre** fordi de styrte gruppene frykter at en rival-elite vil plyndre dem enda mer → frykten for det verre alternativet lammer opposisjonen. (V2015 sier eksplisitt at man *ikke* trenger å løse modellen formelt — logikken og antakelsene teller.)
  - **Implikasjon/«funn»:** dårlig styre og plyndring kan være en **stabil politisk likevekt** selv når alle styrte ville hatt det bedre med bedre styre — fordi ingen enkelt gruppe tør å utfordre.
  - **Vurdering:** dette er en **teoretisk** politisk-økonomi-innsikt (ikke en empirisk identifikasjonsstudie) — vurderingen gjelder antakelsenes realisme (etnisk frykt, mangel på binding), ikke identifikasjonsstrategi. Kobling: forklarer commitment-problemet og hvorfor «god politikk» ikke alltid vinner.
- **Drøftingsakser:** (i) **commitment-problemet** — hvorfor makthavere ikke binder seg til å fjerne korrupsjon de tjener på; (ii) **«politics of fear»/elitekontroll** som forklaring på vedvarende dårlig styre; (iii) **V2024-spenningen:** god fattigdomspolitikk kan svekke elitens grep → dårlig maktpolitikk; (iv) at dette er en **flerlikevekt/politisk** felle (kobling kap. 4.1/5.2).
- **Case-forslag:** «Hvis korrupsjon er så kostbar, hvorfor fjerner ikke myndighetene den? Drøft ved hjelp av bindingsproblemet og logikken i ‘politics of fear’.»
- **Typiske feil:** Anta at myndighetene *vil* fjerne korrupsjon (overse at de tjener på den); behandle Padró-modellen som en empirisk studie (den er teoretisk); glemme spenningen god politikk vs. maktbevaring; ingen kobling til flerlikevekt.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 5.4: Drill: korrupsjons- og politisk-økonomi-essayet

- **id:** `econ4915-5-4` · **number:** 5.4 · **estimatedMinutes:** 80 · **prerequisites:** `econ4915-5-3`
- **Kapitteltype:** drill (sjanger E + B)
- **description:** Sjangerdrill på korrupsjonsessayet: definisjon/typer → kontekstavhengige konsekvenser → hvorfor mest i u-land (flerlikevekt) → hvorfor vedvarer (commitment/Padró) → god politikk vs. maktbevaring.
- **Eksamensbelegg:** Dekker sjanger E (V2022, V2024) + B (V2015 Padró). Rotasjonen: IMF-sitat-typen, «god politikk = god maktpolitikk?», Padró-short. Prioritet: **kunne**.
- **Innholdskontrakt (løsningsoppskrift):** Algoritme: 1) definer korrupsjon + typer; 2) **kontekstavhengige konsekvenser** (olje/handel/smøring — ikke like); 3) hvorfor mest i u-land (renter/reguleringer + flerlikevekt G(y)); 4) hvorfor vedvarer (commitment-problem, «politics of fear», maktbevaring); 5) konkluder motivert. Gjennomskrevet eksempel-case med sensor-margnotater (hva løfter til A: kontekstnyanse + commitment-innsikt + krysskobling til ressurser). 8–12 nyskrevne oppgaver.
- **Oppgavesjangre:** E, B. Mønstereksempel: «Drøft hvorfor korrupsjon vedvarer i mange fattige land selv når kostnaden er høy, og hvorfor konsekvensene av korrupsjon ikke er like på tvers av situasjoner.»
- **Typiske feil:** Like konsekvenser overalt; ingen flerlikevekt/commitment-mekanisme; behandle Padró som empiri; ingen kobling til ressursrenter.
- **Quiz: 14 · Flashcards: 10**

**Prøve-kvote Del 5:** 4 prøver (5.A definisjon/typer + kontekstavhengige konsekvenser (V2022a-type), sjanger E; 5.B hvorfor mest utbredt i u-land (renter/reguleringer/flerlikevekt), sjanger E; 5.C hvorfor vedvarer korrupsjon — commitment/Padró/maktbevaring, sjanger E/B; 5.D full korrupsjons-/politisk-økonomi-essay med krysskobling til ressurser, sjanger E).

---

### Del 6 — Kreditt, mikrofinans og kontrakts-/forsikringsteori *(prioritet: KUNNE — nivå 2 + master-kontraktslag)*

#### Kapittel 6.1: Hvorfor kredittmarkeder svikter: asymmetrisk informasjon og rasjonering

- **id:** `econ4915-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ4915-0-2`
- **Kapitteltype:** teori (figur i ord + drøfting)
- **description:** Hvorfor kredittmarkeder for fattige svikter: asymmetrisk informasjon gir ugunstig utvalg og moralsk hasard, slik at markedet svarer med kredittrasjonering framfor markedsklarering — rasjonering og skyhøye renter som to sider av samme problem.
- **Eksamensbelegg:** Kredittmarkeder & mikrofinans 18–27 % (V2015 essay 1, V2023 Q1). V2023 spør eksplisitt om markedet svikter via skyhøye renter *eller* rasjonering. Sjanger C. Prioritet: **kunne** (nivå 2).
- **Begrepskontrakt (m/pensumforankring):** **Asymmetrisk informasjon (asymmetric information)**; **ugunstig utvalg (adverse selection)** — renteøkning tiltrekker de mest risikable låntakerne (Stiglitz–Weiss); **moralsk hasard (moral hazard)**; **kredittrasjonering (credit rationing)** — banken holder renten under klareringsnivå og rasjonerer i stedet; **manglende sikkerhet/håndhevelse (lack of collateral/enforcement)**. Forankring: Stiglitz–Weiss-tradisjonen; Oslo-/ESOP-/generell utviklingsøkonomi `(verifiser)`.
- **Figurbeskrivelse i ord + drøftingsakser:** Figur i ord: bankens forventede avkastning stiger med renten opp til et punkt og **faller** deretter (fordi høyere rente forverrer utvalget/insentivene) → optimal rente er **under** klareringsnivå → **rasjonering**. Drøftingsakser: (i) hvorfor **rasjonering og skyhøye renter er to utfall av samme informasjonsproblem**, ikke konkurrerende forklaringer (feilkatalog #5); (ii) hvorfor **manglende sikkerhet** rammer fattige særlig hardt; (iii) kobling til ulikhet↔vekst (kap. 2.2 — imperfekt kreditt) og til fattigdomsfella (kap. 4.2).
- **Case-forslag:** «Forklar hvorfor banker i fattige land ofte rasjonerer kreditt i stedet for bare å heve renten. Vis hvordan ugunstig utvalg gjør at høyere rente kan senke bankens forventede avkastning.»
- **Typiske feil:** Behandle rasjonering og skyhøye renter som konkurrerende forklaringer (feilkatalog #5); glemme ugunstig utvalg/moralsk hasard-mekanismen; ikke koble til sikkerhet/håndhevelse; sunn fornuft uten Stiglitz–Weiss-logikken.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 6.2: Mikrofinans: gruppelån, dynamiske insentiver og kritisk evidens

- **id:** `econ4915-6-2` · **number:** 6.2 · **estimatedMinutes:** 60 · **prerequisites:** `econ4915-6-1`, `econ4915-1-2`
- **Kapitteltype:** teori (drøfting) + **NØKKELSTUDIE** (Banerjee, Duflo, Glennerster & Kinnan 2015)
- **description:** Hvordan mikrofinans forsøker å løse kredittsvikten (gruppelån/solidaransvar, dynamiske insentiver) — og hva den beste RCT-evidensen faktisk viser: beskjedne gjennomsnittseffekter, ingen mirakelkur.
- **Eksamensbelegg:** Mikrofinans (V2015 essay 2–3, V2023 Q2). Banerjee-RCT er epoke 1-signaturstudien. **A/B-markør:** kritisk evidens (beskjedne effekter) + designet. Sjanger C + B. Prioritet: **kunne** (nivå 2; huser Banerjee-nøkkelstudien — master-signaturen for kreditt).
- **Begrepskontrakt (m/pensumforankring):** **Mikrofinans/mikrokreditt (microfinance/microcredit)**; **solidaransvar/gruppelån (joint liability)** — gruppen hefter for hverandre → løser informasjons-/håndhevelsesproblemet lokalt; **dynamiske insentiver (dynamic incentives)** — tilgang til større lån ved tilbakebetaling; **beskjedne gjennomsnittseffekter (modest average effects)**. Forankring: **Banerjee, Duflo, Glennerster & Kinnan (2015)**; empirisk lærebok `(verifiser)`.
- **NØKKELSTUDIE-boks — Banerjee, Duflo, Glennerster & Kinnan (2015), mikrofinans-RCT (Hyderabad):**
  - **Design:** mikrofinansfilialer ble **åpnet i tilfeldig utvalgte nabolag** i Hyderabad → behandlings- vs. kontrollnabolag gir randomisert variasjon i tilgang til mikrolån.
  - **Funn:** noe økt næringsinvestering for enkelte husholdninger, men **ingen påvisbar effekt på gjennomsnittlig konsum, helse, utdanning eller kvinners myndiggjøring** i perioden — effektene er **beskjedne**, ikke en mirakelkur.
  - **Identifikasjonsvurdering:** randomisert filialåpning gir troverdig intern validitet; kritiske spørsmål: **spillovers** (kontrollnabolag kan få lån andre steder), **ekstern validitet** (én by, ett produkt, én periode), langtidseffekter, heterogene effekter (noen vinner selv om snittet er null). Master-poenget: gjengi designet OG de beskjedne funnene, ikke bare «mikrofinans virker/virker ikke».
- **Drøftingsakser:** (i) hvordan **gruppelån/dynamiske insentiver** angriper informasjons-/håndhevelsesproblemet fra kap. 6.1; (ii) hvorfor **RCT-evidensen** demper optimismen (beskjedne snitt); (iii) at mikrofinans kan hjelpe **noen** (heterogenitet) uten å være en generell vei ut av fella (kobling kap. 4.3); (iv) kobling til ROSCA (kap. 6.3) og forsikring (kap. 6.4).
- **Case-forslag:** «Kan mikrofinans være en vei ut av fattigdom? Forklar hvordan gruppelån forsøker å løse kredittmarkedssvikten, og hva den beste eksperimentelle evidensen faktisk viser.»
- **Typiske feil:** Overselge mikrofinans som mirakelkur (feilkatalog #4); gjengi Banerjee-konklusjonen uten designet (feilkatalog #3); glemme spillover/ekstern validitet; ikke koble til kredittsvikten.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 6.3: Uformelle finansmarkeder: ROSCA og selvhjelpsgrupper

- **id:** `econ4915-6-3` · **number:** 6.3 · **estimatedMinutes:** 45 · **prerequisites:** `econ4915-6-1`
- **Kapitteltype:** teori (drøfting)
- **description:** Hvordan fattige husholdninger organiserer sparing og kreditt uten formell bank: roterende spare- og lånelag (ROSCA) og selvhjelpsgrupper — motivene, virkemåten og grensene.
- **Eksamensbelegg:** V2023 Q3 spør eksplisitt om uformelle selvhjelpsgrupper (ROSCA) — motiver og virkemåte. Sjanger C. Prioritet: **kunne/kjenne** (nivå 2–3).
- **Begrepskontrakt (m/pensumforankring):** **ROSCA (rotating savings and credit association)** — medlemmer betaler inn i en felles pott som roterer til én av gangen; **selvhjelpsgruppe (self-help group)**; **motiver** (spardisiplin/binding, tilgang til engangsbeløp for udelelig kjøp, sosialt press for tilbakebetaling); **lokal håndhevelse (social collateral)**. Forankring: generell utviklingsøkonomi/Oslo-tradisjonen `(verifiser)`.
- **Drøftingsakser:** (i) hvorfor folk deltar i ROSCA (bindingsmekanisme mot egen impulsivitet + tilgang til lump sum + sosialt press erstatter sikkerhet); (ii) hvordan **lokal informasjon/sosialt press** løser samme problem som gruppelån (kap. 6.2); (iii) **grensene** (begrenset skala, risiko internt, ingen risikodeling mot felles sjokk — bro til forsikring, kap. 6.4).
- **Case-forslag:** «Hvordan kan et bondesamfunn organisere sparing og kreditt uten en formell bank? Forklar hvordan en ROSCA virker og hvorfor folk velger å delta.»
- **Typiske feil:** Behandle ROSCA som ren veldedighet; glemme bindings-/disiplinmotivet; ikke koble til informasjons-/håndhevelsesproblemet; overse at ROSCA ikke deler *felles* risiko.
- **Quiz: 14 · Flashcards: 16**

#### Kapittel 6.4: Forsikring og risiko: gjensidig forsikring og H/L-sjokkmodellen

- **id:** `econ4915-6-4` · **number:** 6.4 · **estimatedMinutes:** 60 · **prerequisites:** `econ4915-6-3`, `econ4915-1-2`
- **Kapitteltype:** teori (figur i ord + drøfting) + **NØKKELSTUDIE** (Cole et al. 2013) — **master-kontraktslaget**
- **description:** Fagets mest «tekniske» sjanger: hvorfor forsikring hever velferd, hvordan uformell gjensidig forsikring virker og bryter sammen (deltakelsesskranken), hvorfor gjentatt spill kan opprettholde den, og hvorfor etterspørselen etter formell forsikring er lav.
- **Eksamensbelegg:** Forsikring & risiko (V2016 — helt strukturert essay, den mest kontraktsteoretiske oppgaven). Sjanger D. Prioritet: **kunne** (nivå 2; master-kontraktslaget). Ingen algebra — modellen beherskes verbalt/grafisk.
- **Begrepskontrakt (m/pensumforankring):** **Risikoaversjon (risk aversion)** og **konsumutjevning (consumption smoothing)**; **gjensidig/uformell forsikring (mutual insurance)**; **H/L-sjokkmodell (high/low income shock model)** — tilstand H (heldig) og L (uheldig); **perfekt forsikring (perfect insurance)** = lik konsum i H og L; **deltakelses-/insentivskranke (participation/incentive constraint)** — den heldige vil melde seg ut; **gjentatt spill / folk-teorem-logikk (repeated game)** som opprettholder samarbeid; **imperfekt forsikring (partial insurance)**; **lav etterspørsel etter formell forsikring** (likviditet, tillit, forståelse). Forankring: **Cole et al. (2013)**; kontraktsteori/Oslo-tradisjonen `(verifiser)`.
- **Figurbeskrivelse i ord + NØKKELSTUDIE-boks:**
  - Figur/mekanisme i ord: to tilstander H og L; risikoaverse husholdninger vil **utjevne konsum** mellom dem. Perfekt gjensidig forsikring gir lik konsum i begge tilstander — men **den som trekker H vil melde seg ut** (deltakelsesskranken), fordi hun i øyeblikket ville tjent på ikke å betale. **Gjentatt spill** kan opprettholde forsikring: trusselen om å bli utestengt fra framtidig deling gjør det lønnsomt å bli. Når perfekt forsikring bryter sammen, kan **imperfekt (delvis)** forsikring likevel være mulig.
  - **NØKKELSTUDIE-boks — Cole et al. (2013), etterspørsel etter (regn)forsikring:** Design: felteksperiment/RCT-varianter som varierer pris, tillit og informasjon for formell værforsikring til bønder. Funn: **etterspørselen er overraskende lav** selv når forsikringen er gunstig — priselastisk, men også begrenset av **likviditetsskranke, manglende tillit og lav forståelse**. Identifikasjonsvurdering: randomisert prising/informasjon gir troverdig identifikasjon av hva som driver etterspørselen; ekstern validitet på tvers av produkt/kontekst er åpent.
- **Drøftingsakser:** (i) hvorfor forsikring **hever velferd** (risikoaversjon + konsumutjevning); (ii) **deltakelsesskranken** — hvorfor den heldige vil ut, og hvorfor det er kjernen (feilkatalog #6); (iii) hvordan **gjentakelse/straff** opprettholder samarbeid; (iv) hvorfor **formell** forsikringsetterspørsel er lav (Cole) — tillit/likviditet/forståelse.
- **Case-forslag:** «Forklar hvorfor risikoaverse bønder ville tjent på forsikring, hvorfor en uformell gjensidig forsikringsordning likevel kan bryte sammen, og hvordan gjentatt samhandling kan holde den i live.»
- **Typiske feil:** Glemme deltakelses-/insentivskranken (feilkatalog #6); ikke forklare hvorfor den heldige melder seg ut; utelate gjentatt-spill-mekanismen; behandle lav forsikringsetterspørsel som irrasjonell uten Cole-forklaringene.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 6.5: Jordbrukskontrakter: sharecropping og interlinked contracts

- **id:** `econ4915-6-5` · **number:** 6.5 · **estimatedMinutes:** 50 · **prerequisites:** `econ4915-6-4`
- **Kapitteltype:** teori (figur i ord + drøfting) — master-kontraktslaget
- **description:** Hvorfor forpaktning på deling (sharecropping) gir for lav innsats (Marshallsk ineffektivitet) og hvordan sammenkoblede kontrakter (interlinked contracts) binder jord, arbeid og kreditt sammen i uformelle markeder.
- **Eksamensbelegg:** V2017 short-spørsmål (sharecropping-ineffektivitet + empirisk test; interlinked contracts). Sjanger C/D. Prioritet: **kunne/kjenne** (nivå 3 — men master-kontraktslaget).
- **Begrepskontrakt (m/pensumforankring):** **Forpaktning på deling / sharecropping (behold engelsk term)** — bonden beholder andel **g** av avlingen; **Marshallsk ineffektivitet (Marshallian inefficiency)** — bonden setter innsats etter **g·MPL** (bare sin andel av grenseproduktet) → **underinnsats**; **empirisk test** (produktivitet lavere på forpaktet vs. selveid/lønnsdrevet jord, alt annet likt); **sammenkoblede kontrakter (interlinked contracts)** — jordeier er også kreditor/arbeidsgiver → én kontrakt binder flere markeder. Forankring: kontraktsteori/Oslo-tradisjonen `(verifiser)`; g·MPL-grepet deles med ECON1910 (`econ1910-4-4` — klartekst).
- **Figurbeskrivelse i ord + drøftingsakser:** Figur i ord: arbeidsinnsats-valget der bonden veier egen kostnad mot **g·MPL** i stedet for hele MPL → **for lav innsats** sammenlignet med førstebeste. Drøftingsakser: (i) hvorfor deling gir **insentivsvikt** (bonden får bare g av det ekstra); (ii) hvordan en **empirisk test** kan avdekke ineffektiviteten (sammenlign forpaktet vs. selveid jord — og hvilke identifikasjonsforbehold som gjelder, kobling Del 1); (iii) hvorfor kontrakter likevel er utbredt (risikodeling — bro til kap. 6.4); (iv) **interlinked contracts** — hvordan kobling av jord/arbeid/kreditt kan både utnytte og effektivisere.
- **Case-forslag:** «Forklar hvorfor en forpakter som deler avlingen med jordeieren ofte legger inn for lav arbeidsinnsats, og hvordan man empirisk kan teste om sharecropping faktisk er mindre produktivt.»
- **Typiske feil:** Behandle sharecropping som ren fordelingssak uten insentiveffekten; beholde hele MPL (glemme g-faktoren); ikke se risikodelingsmotivet; ignorere identifikasjonsforbeholdet i den empiriske testen.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 6.6: Drill: kreditt-, forsikrings- og kontraktsessayet

- **id:** `econ4915-6-6` · **number:** 6.6 · **estimatedMinutes:** 80 · **prerequisites:** `econ4915-6-5`
- **Kapitteltype:** drill (sjanger C + D)
- **description:** Sjangerdrill på finans-/kontraktsessayene: kredittsvikt (rasjonering) → mikrofinans (Banerjee-evidens) → ROSCA → forsikring (H/L, deltakelsesskranke, Cole) → jordbrukskontrakter (g·MPL, interlinked).
- **Eksamensbelegg:** Dekker sjanger C (V2015, V2023) + D (V2016, V2017). Rotasjonen: hvorfor kredittmarkeder svikter; mikrofinans som vei ut; gjensidig forsikring + H/L-modell; sharecropping. Prioritet: **kunne**.
- **Innholdskontrakt (løsningsoppskrift):** To algoritmer. **Kreditt (C):** 1) asymmetrisk info → ugunstig utvalg/moralsk hasard → rasjonering (=skyhøye renter, samme problem); 2) mikrofinans (gruppelån/dynamiske insentiver) + **kritisk RCT-evidens** (Banerjee, beskjedne effekter); 3) ROSCA. **Forsikring (D):** 1) forsikring hever velferd (risikoaversjon); 2) H/L-modell + **deltakelsesskranke** (den heldige vil ut); 3) gjentatt spill opprettholder; 4) lav formell etterspørsel (Cole). Sharecropping (g·MPL) som eget moment. Gjennomskrevet eksempel-case per algoritme med sensor-margnotater (hva løfter til A: deltakelsesskranken / RCT-evidensen). 8–12 nyskrevne oppgaver.
- **Oppgavesjangre:** C, D. Mønstereksempel (D): «Vis i en H/L-sjokkmodell hvorfor perfekt gjensidig forsikring er vanskelig å opprettholde, og hvordan gjentatt samhandling kan gjøre delvis forsikring mulig.»
- **Typiske feil:** Rasjonering vs. renter som konkurrerende; mikrofinans som mirakelkur; glemme deltakelsesskranken; beholde hele MPL i sharecropping.
- **Quiz: 14 · Flashcards: 10**

**Prøve-kvote Del 6:** 4 prøver (6.A kredittmarkedssvikt — asymmetrisk info, rasjonering vs. renter, sjanger C; 6.B mikrofinans + gruppelån + kritisk RCT-evidens (Banerjee), sjanger C/B; 6.C forsikring — H/L-modell, deltakelsesskranke, gjentatt spill, Cole, sjanger D; 6.D jordbrukskontrakter (sharecropping g·MPL, interlinked) + ROSCA, sjanger C/D).

---

### Del 7 — Eksamenstrening

#### Kapittel 7.1: Tospråklig begrepsdrill: gjengangerne med pensumforankring

- **id:** `econ4915-7-1` · **number:** 7.1 · **estimatedMinutes:** 60 · **prerequisites:** Del 1–6
- **Kapitteltype:** drill (begreper, tospråklig)
- **description:** Presisjonstrening på hele begrepsrepertoaret på norsk OG engelsk: presis definisjon + engelsk fagterm + pensum-/studieforankring + mekanisme/figur + A/B-markøren, inkludert nøkkelstudie-navnene.
- **Eksamensbelegg:** Begreper og navngitte studier inngår i mange sett, og eksamen skrives på **engelsk** — presis engelsk fagterm og korrekt studiegjengivelse er avgjørende. Prioritet: **kunne** (sikre poeng + engelsk skriveevne).
- **Innholdskontrakt:** Malen «norsk term (engelsk term) + presis definisjon + forankring (pensum/studie) + mekanisme/figur + A/B-markør» demonstreres; deretter drillbank som dekker ALLE gjengangerbegrepene med fasitsvar i deloppgave-format og kapittelhenvisning: identifikasjon/omvendt kausalitet/confounder → 1.1; RCT/spillover/ekstern validitet → 1.2; IV/relevans/eksklusjon → 1.3; naturlig eksperiment/DiD/parallelle trender/RDD → 1.4; nattlys/proxy/aggregatregresjon → 1.5; utvikling/fattigdomslinje/head count → 2.1; ulikhet→vekst/imperfekt kreditt/endogenitet → 2.2; etnisk ulikhet/missing women → 2.4; ressursrenter/rent-seeking/Dutch disease → 3.1; grabber-/producer-friendly → 3.2; flerlikevekt/S-kurve/stabilitet → 4.1; distribusjons- vs. ressursbasert felle → 4.2; korrupsjon/olje-sand/kontekst → 5.1; G(y)/flerlikevekt → 5.2; commitment/«politics of fear» → 5.3; ugunstig utvalg/rasjonering → 6.1; joint liability/dynamiske insentiver → 6.2; ROSCA → 6.3; H/L-modell/deltakelsesskranke/mutual insurance → 6.4; sharecropping/g·MPL/interlinked → 6.5. **Egen nøkkelstudie-tabell:** hver av de 7 kanon-studiene (Padró i Miquel, Banerjee et al., Easterly, Alesina et al., Cole et al., Qian, Kremer & Miguel) med `design → funn → identifikasjonsvurdering` på engelsk.
- **Oppgavesjangre:** Begreper + nøkkelstudier (alle sjangre), med krav om engelsk term. Mønstereksempel: «Explain in English what adverse selection is, why it leads to credit rationing rather than a market-clearing interest rate, and name one study that examined credit or microfinance for the poor.»
- **Typiske feil:** Definisjon uten forankring (C-stoff); feil/manglende engelsk fagterm; gjengi en studie uten designet; utelate A/B-markøren.
- **Quiz: 14 · Flashcards: 54**

#### Kapittel 7.2: Modellbesvarelse: ulikhet-og-utvikling-essayet (A vs. C)

- **id:** `econ4915-7-2` · **number:** 7.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ4915-2-5`
- **Kapitteltype:** modellbesvarelse
- **description:** Én nyskrevet ulikhet-og-utvikling-essayoppgave besvart på to nivåer, som viser presist hva som skiller A fra C — særlig endogenitet/identifikasjon og toveis-drøftingen.
- **Eksamensbelegg:** Ulikhet (sjanger A/B, 45 % — fagets nav). Viser sensorblikket i praksis. Prioritet: **perfekt** (mønster for besvarelsesnivå).
- **Innholdskontrakt (modellbesvarelse-DNA):** 1) **Nyskrevet oppgave** (ulikhetens rolle for utvikling + for en felle). 2) `collapsible` **A-besvarelse** — full tekst (norsk, engelske fagtermer markert) med margnotater («her: kredittkanalen», «her: toveis — kan ulikhet fremme vekst», «her: endogenitet + Easterly IV/eksklusjon — dette løfter til A», «her: kobling til distribusjonsbasert felle»). 3) `collapsible` **Kommentert C-besvarelse** — korrekt men flat (kredittkanalen, men ensidig, ingen endogenitet/identifikasjon, ingen krysskobling), med notater om gapet opp til A. 4) `tip` **Sensorblikket** — momentliste og vektlegging.
- **Oppgavesjangre:** A, B. Mønstereksempel: se innholdskontrakt.
- **Typiske feil:** (vises i C) ensidig svar; kausalitet fra korrelasjon; ingen identifikasjon; ingen krysskobling.
- **Quiz: 8 · Flashcards: 10**

#### Kapittel 7.3: Modellbesvarelse: nøkkelstudie-/identifikasjonsessayet (A vs. C)

- **id:** `econ4915-7-3` · **number:** 7.3 · **estimatedMinutes:** 55 · **prerequisites:** `econ4915-1-6`
- **Kapitteltype:** modellbesvarelse
- **description:** Én nyskrevet nøkkelstudie-/identifikasjonsoppgave (master-signaturen) besvart på to nivåer, der design + kritisk identifikasjonsvurdering + de beskjedne funnene er A-løftet.
- **Eksamensbelegg:** Nøkkelstudie-/metode-sjangeren (B/G — master-signaturen, epoke 1). Viser hvordan «identifikasjon foran korrelasjon» gir uttelling. Prioritet: **perfekt**.
- **Innholdskontrakt (modellbesvarelse-DNA):** 1) **Nyskrevet oppgave** (en mikrofinans-/bistandsstudie: forklar designet, vurder identifikasjonen, gjør rede for funnene). 2) `collapsible` **A-besvarelse** med margnotater («her: design (hva randomiseres)», «her: identifikasjonsantakelse», «her: kritisk vurdering — spillover/ekstern validitet — dette løfter til A», «her: funnene er *beskjedne*, ingen mirakelkur»). 3) `collapsible` **Kommentert C-besvarelse** — refererer funnet («mikrofinans virker litt») uten designet og uten kritisk identifikasjonsvurdering. 4) `tip` **Sensorblikket**.
- **Oppgavesjangre:** B, G. Mønstereksempel: se innholdskontrakt.
- **Typiske feil:** (vises i C) konklusjon uten design; ingen identifikasjonsvurdering; overselge effekten; kausalitet fra korrelasjon.
- **Quiz: 8 · Flashcards: 10**

#### Kapittel 7.4: Øvingseksamen 1: epoke 1-format (Short questions 1/3 + Structured essay 2/3)

- **id:** `econ4915-7-4` · **number:** 7.4 · **estimatedMinutes:** 180 · **prerequisites:** `econ4915-7-1`
- **Kapitteltype:** øvingseksamen (+ modellbesvarelse)
- **description:** Komplett sett etter epoke 1-malen (V2015–V2017-typen): «Short questions» (vekt 1/3, navngitte studier) + «Structured essay» (vekt 2/3, empirisk/kontraktstungt), med eksplisitt identifikasjonskrav.
- **Eksamensbelegg/miks:** Speiler epoke 1 (short + structured essay, vekt 1/3 og 2/3). **Short questions (1/3):** a) forklar designet og vurder identifikasjonen i en nøkkelstudie (mikrofinans-RCT-type, sjanger B); b) nattlys som inntektsmål — fordeler/fallgruver (sjanger F). **Structured essay (2/3):** hvorfor kredittmarkeder svikter → mikrofinans → kritisk RCT-evidens → imperfekt kreditt → ulikhet↔vekst + identifikasjonsproblemet (sjanger C/A/B). Alle nyskrevne. Løsningsforslag som **A-besvarelse** i `collapsible` per del + **kommentert C-besvarelse** på essaydelen, `tip`-notat om **vekting (fordel tid 1/3–2/3)** og tidsbudsjett. Engelske fagtermer markert.
- **Quiz: 6 · Flashcards: 0**

#### Kapittel 7.5: Øvingseksamen 2: epoke 2-format (to–tre likevektede teori-/drøftingsessay)

- **id:** `econ4915-7-5` · **number:** 7.5 · **estimatedMinutes:** 180 · **prerequisites:** `econ4915-7-4`
- **Kapitteltype:** øvingseksamen (+ modellbesvarelse)
- **description:** Komplett sett etter epoke 2-malen (V2018–V2025-typen): to–tre korte, brede likevektede essayspørsmål om ulikhet, ressurser/institusjoner og fattigdomsfeller.
- **Eksamensbelegg/miks:** Speiler epoke 2 (to–tre likevektede spørsmål). **Spørsmål 1 (ulikhet, sjanger A):** ulikhetens rolle for utvikling og for en fattigdomsfelle. **Spørsmål 2 (ressurser/institusjoner, sjanger E):** i hvilken grad ressursrikdom hemmer vekst, og institusjonenes rolle. **Spørsmål 3 (feller, sjanger A):** forskjellen på distribusjonsbasert og ressursbasert fattigdomsfelle. Alle nyskrevne. Løsningsforslag som **A-besvarelse** per spørsmål + **kommentert C-besvarelse** på spørsmål 1, med vektings-`tip` (count equally) og tidsbudsjett. Engelske fagtermer markert.
- **Quiz: 6 · Flashcards: 0**

#### Kapittel 7.6: Øvingseksamen 3: bredt kombinert (survey)

- **id:** `econ4915-7-6` · **number:** 7.6 · **estimatedMinutes:** 180 · **prerequisites:** `econ4915-7-5`
- **Kapitteltype:** øvingseksamen (+ modellbesvarelse)
- **description:** Komplett sett som kombinerer på tvers (V2022/V2024-typen): korrupsjon/politisk økonomi + fattigdomsmåling/-begrep + forsikring/kontrakt, for å sikre dekning av de gjenværende sjangrene.
- **Eksamensbelegg/miks:** Speiler de brede kombinerte settene. **Q1 (korrupsjon/politisk økonomi, sjanger E/B):** kontekstavhengige konsekvenser + hvorfor korrupsjon vedvarer (commitment/Padró). **Q2 (fattigdomsmåling, sjanger F):** kritisk drøfting av fattigdomsbegrepet + hvordan måle endringer. **Q3 (forsikring, sjanger D):** H/L-modellen — hvorfor gjensidig forsikring bryter sammen og hvordan gjentatt spill/imperfekt forsikring redder den (+ Cole om lav etterspørsel). Alle nyskrevne. Løsningsforslag som **A-besvarelse** per spørsmål + **kommentert C-besvarelse** på Q3, med vektings-`tip` og tidsbudsjett. Sammen dekker de tre settene sjangrene A–G og **begge eksamensformater** (epoke 1 short+essay og epoke 2 likevektede).
- **Quiz: 6 · Flashcards: 0**

**Prøve-kvote Del 7:** ingen egne prøver (delen består av begrepsdrill + 2 modellbesvarelser + 3 øvingseksamener).

---

### Kvotesammendrag (quiz/flashcards/prøver) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1–0.2 | 10+10 = **20** | 10+12 = **22** | 0 |
| 1 | 1.1–1.6 | 20+20+18+20+16+14 = **108** | 22+24+20+22+20+10 = **118** | 4 |
| 2 | 2.1–2.5 | 20+22+18+18+14 = **92** | 24+26+20+22+10 = **102** | 4 |
| 3 | 3.1–3.4 | 20+20+16+14 = **70** | 22+24+18+10 = **74** | 4 |
| 4 | 4.1–4.4 | 20+20+16+14 = **70** | 24+22+18+10 = **74** | 4 |
| 5 | 5.1–5.4 | 20+18+20+14 = **72** | 22+20+24+10 = **76** | 4 |
| 6 | 6.1–6.6 | 20+20+14+20+16+14 = **104** | 22+24+16+24+18+10 = **114** | 4 |
| 7 | 7.1–7.6 | 14+8+8+6+6+6 = **48** | 54+10+10+0+0+0 = **74** | 0 (3 øvingseksamener) |
| **Sum** | **37 kap.** | **584 ≥ 500 ✓** | **654 (sikt 550–650) ✓** | **24 + 3 ØE** |

**Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.**
Fordelingen speiler frekvens og natur: **Del 1 (empirisk verktøykasse, master-signatur, 108 quiz)** og
**Del 6 (kreditt + kontrakts-/forsikringsteori, 104 quiz)** er størst — Del 1 fordi identifikasjonslaget er
det som hever emnet over ECON1910 og må drilles grundig, Del 6 fordi den huser to hele master-tillegg
(mikrofinans-RCT + kontraktsteori) og fem kapitler. Deretter **Del 2 (ulikhet, nav 1, 92 quiz)**.
**Om tetthetsnivået (jf. PRODUKSJONSLOYPE «≥500 er GULV»):** ECON4915 er et **modell- og begrepsrikt
drøftingsfag på masternivå med eksamen på engelsk** og et eksplisitt **nøkkelstudie-lag** (7 kanon-studier
med design/funn/identifikasjon). Det trekker flashcard-kvoten (654) klart over quiz (584): flashcards bærer
både den **tospråklige term-koblingen** (norsk↔engelsk) og **nøkkelstudie-kortene** (studie → design → funn
→ identifikasjonsvurdering), som er avgjørende når svaret skal skrives på engelsk. **37 kapitler (> 32)**
tilsier tilsvarende høyere sum enn 500-taket, som reflektert; 654 flashcards ligger i det oppgitte siktet
(550–650, marginalt over pga. nøkkelstudie-kortene) uten å nå det rene puggefagets 700–800 (faget er
drøftings-, ikke faktatungt). Quiz-tettheten (~16/kapittel) er tilpasset et essayfag med relativt få
diskrete «fasit»-fakta, konsentrert der modellene og studiene har flest testbare mekanismer.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–6, 24 totalt)

Hver prøve består av nyskrevne oppgaver i eksamens sjangre, med løsningsforslag (A-besvarelse med figur-i-ord
og pensum-/studieforankring) og poengfordeling. Omfang i minutter. Prøvekapitler bygges som
`econ4915-<del>-prove`, chapterNumber `<del>.P` (jf. byggekontrakten). Prøvene per del er spesifisert i
«Prøve-kvote Del N»-linjene under hver del over. Kort oppsummert dekker de:

- **Del 1:** identifikasjonsproblemet, RCT-design/vurdering, IV vs. naturlig eksperiment/DiD, nattlys/aggregatregresjon.
- **Del 2:** utviklingsbegrep/fattigdomsmåling, ulikhet→vekst + endogenitet (Easterly), ulikhetens toveis-rolle, etnisk ulikhet/kjønn (Alesina/Qian).
- **Del 3:** ressursrente-mekanismen, grabber-/producer-friendly institusjoner, rentekonkurranse/vekst, full ressurs-/institusjonsessay.
- **Del 4:** flerlikevekt-grammatikken, distribusjons- vs. ressursbasert felle, å komme ut (big push/mikrofinans), full felle-essay.
- **Del 5:** definisjon/kontekstavhengige konsekvenser, hvorfor mest i u-land, hvorfor vedvarer (commitment/Padró), full korrupsjonsessay.
- **Del 6:** kredittmarkedssvikt, mikrofinans + RCT-evidens (Banerjee), forsikring (H/L/Cole), jordbrukskontrakter/ROSCA.

### Øvingseksamener (3 komplette sett — se kap. 7.4–7.6)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (kap. 7.4) | Epoke 1: Short (1/3) + Structured essay (2/3) (V2015–V2017) | Nøkkelstudie + nattlys + kreditt/mikrofinans/ulikhet med identifikasjon |
| Øvingseksamen 2 (kap. 7.5) | Epoke 2: to–tre likevektede essay (V2018–V2025) | Ulikhet + ressurser/institusjoner + distribusjons-/ressursbasert felle |
| Øvingseksamen 3 (kap. 7.6) | Bredt kombinert (V2022/V2024) | Korrupsjon/politisk økonomi + fattigdomsmåling + forsikring/kontrakt |

Hver øvingseksamen har full A-besvarelse per oppgave **og** en kommentert C-besvarelse på den tyngste
oppgaven + sensorblikk — sammen med kap. 7.2 og 7.3 gir det **≥3 modellbesvarelser** (DNA-drøfting-kravet,
faktisk 5). Til sammen dekker settene og prøvene sjangrene A–G, og **begge eksamensformater** (epoke 1
short+essay og epoke 2 likevektede) trenes eksplisitt.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — 3-timers skriftlig skoleeksamen på **engelsk**, ingen hjelpemidler, kun vår,
   masternivå; **rent essay/diskursivt**, aldri tallregning (unntak V2021 open-book); **to epoker/formater**
   (epoke 1 short+structured essay, epoke 2 likevektede brede essay); **bygg på pensummodell + navngitt
   studie, ikke sunn fornuft**; **identifikasjon foran korrelasjon**; regimeskiftet ~2018 (`verifiser`) +
   prognosen (fra kap. 0.1).
2. **Prioriteringskartet** — temafrekvens omgjort til tre lesenivåer: **perfekt** (Del 1 identifikasjon
   [master-signatur], Del 2 ulikhet [nav 1], Del 3 ressurser/institusjoner [nav 2], Del 4 feller [rød tråd]),
   **kunne** (Del 5 korrupsjon, Del 6 kreditt/kontrakter), **kjenne** (ROSCA, sharecropping, helse/kjønn/
   migrasjon som randstoff — kryssref ECON1910).
3. **Essay- og evidenshåndverket** — malen fra kap. 0.2 (les oppgaven → begrep + forankring → modell/
   mekanisme + figur → kritisk evidens (design→funn→identifikasjon) → kontekstsensitiv drøfting → konkluder +
   koble) + C→A-løftet + «skriv det på engelsk».
4. **Identifikasjon foran korrelasjon (master-signaturen)** — verktøykassa fra Del 1 (RCT/IV/DiD/RDD/nattlys,
   hver med sin antakelse; aggregatregresjonens svakhet) + nøkkelstudie-malen `design → funn →
   identifikasjonsvurdering`.
5. **Nøkkelstudie-galleriet** — de 7 kanon-studiene beskrevet med design/funn/identifikasjon: Padró i Miquel
   (2007, «politics of fear», teoretisk); Banerjee et al. (2015, mikrofinans-RCT, beskjedne effekter);
   Easterly (2007, IV ulikhet→underutvikling); Alesina et al. (2015, etnisk ulikhet via nattlys, assosiativ);
   Cole et al. (2013, lav forsikringsetterspørsel); Qian (2008, naturlig eksperiment/missing women);
   Kremer & Miguel (2004, avmarkering-RCT med spillover) — hver med kapittelhenvisning og `(verifiser)` mot
   pensum.
6. **Modell-galleriet** — de sentrale mekanismene i ord: flerlikevekt/S-kurve/terskel (feller); G(y) mot
   S-formet moralkostnad (korrupsjon); grabber-/producer-friendly institusjoner (ressurser); Stiglitz–Weiss-
   rasjonering (kreditt); H/L-forsikringsmodell + deltakelsesskranke (forsikring); g·MPL (sharecropping) —
   hver med den verbale mekanismen.
7. **A/B-differensiatorene** — de fem andreordens-poengene fra §1 (identifikasjonsvurdering; endogenitet i
   ulikhet↔vekst; kontekstavhengige korrupsjonskonsekvenser; institusjoner avgjør ressursutfallet; kobling på
   tvers), hver med kapittelhenvisning.
8. **Feilkatalogen** — de typiske feilene fra analysen §5 samlet (kausalitet fra korrelasjon; konklusjon uten
   design; mikrofinans som mirakelkur; rasjonering vs. renter blandet; glemme deltakelsesskranken; ressurser
   som utvetydig gode; korrupsjonskonsekvenser like overalt; head count-svakhet; nattlys-fallgruver; utvikling
   = ren BNP; ignorere vekt), hver med henvisning til kapitlet som forebygger den.
9. **Tospråklig begrepsbank** — norsk term ↔ engelsk term ↔ mekanisme/studie ↔ figur for alle
   gjengangerbegrepene (fra kap. 7.1) — kjernen i eksamensskrivingen på engelsk.
10. **Forholdet til ECON1910** — hva som er delt teorikjerne (flerlikevekt, korrupsjons-G(y), Harris–Todaro/
    migrasjon, handel/fordeling, ressursforbannelse, utviklingsbegrep) og hva som er master-tillegg
    (identifikasjonslaget + kontrakts-/forsikringsteorien); kryssbok-klartekst med id for aktivering når
    ECON1910 er bygget.
11. **Pensumkart** — Oslo-/ESOP-tradisjonen (delt teorikjerne) + de 7 navngitte eksamensstudiene + mulig
    empirisk lærebok (`Poor Economics` e.l.) — alt `(verifiser)` mot pensumlista; usikre koblinger merket.
12. **Studieløp** — anbefalt progresjon (10-ukers og 3-ukers intensivvariant): Del 0 → 1 (identifikasjon
    FØRST, siden nøkkelstudie-boksene arver den) → 2 (ulikhet) → 3 (ressurser) → 4 (feller) → 5 (korrupsjon) →
    6 (kreditt/kontrakter), prøver underveis, de tre øvingseksamenene de siste ukene under tidspress (begge
    formater).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `econ4915` med alle 37 kapitler (id/number/title/
   description/estimatedMinutes/topics/competenceGoals/prerequisites) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra makrostruktur-tabellen (§2). **NB:** `number`
   SKAL være del-basert («2.3»), aldri lineær.
2. **Del 0** (kap. 0.1–0.2) — etablerer sjangernavnene A–G, to-epoke-tidslinjen, essay-/evidenshåndverket,
   «identifikasjon foran korrelasjon» og den tospråklige skrivemåten som resten refererer til.
3. **Master-signaturen tidlig**: **Del 1** (identifikasjon) bygges rett etter Del 0, fordi nøkkelstudie-
   boksene i Del 2–6 arver identifikasjonsspråket (behandling/kontroll, relevans/eksklusjon, parallelle
   trender, ekstern validitet). De kan da referere til Del 1 i stedet for å gjenta.
4. **Navene**: Del 2 (ulikhet — huser Easterly IV, som bygger på kap. 1.3) og Del 3 (ressurser/institusjoner).
5. **Rød tråd**: Del 4 (feller) — kap. 4.2 forutsetter kap. 2.2 (ulikhet/distribusjon) og kap. 3.1 (ressurser),
   så Del 2 og Del 3 bør være ferdige før 4.2.
6. Del 5 (korrupsjon — huser Padró) → Del 6 (kreditt/kontrakter — huser Banerjee og Cole; kap. 6.2 bygger på
   kap. 1.2) → Del 7 til slutt (begrepsdrill, modellbesvarelser og øvingseksamener gjenbruker alt).
7. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert; prøvene legges i prøvekapitler
   per del (`econ4915-<del>-prove`, chapterNumber `<del>.P`).

**Batching for byggebølgen (fase 4):** én agent per hel del; Del 1 og Del 6 (6 kap hver, tunge) kan deles, men
gi begge agentene HELE delens kontrakter + kap. 1.1 (identifikasjonsgrammatikken) og kravene til nøkkelstudie-
boksene. Del 7 (øvingseksamener) bygges av én agent som leser HELE skjelettet.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse` (generer via `json.dump`;
  escape `"` i norske sitattegn); `npm run build` grønn.
- [ ] **Ingen tallregning / forbudte termer**: tekstsøk — ingen regresjonsestimatorer, standardfeil-/t-verdi-
  utregning, algebraisk optimering/derivasjon, tallregning; **ingen Gini/Lorenz-indeks som utregning**.
  Symbolbruk begrenset til y/G(y) (korrupsjon), g/g·MPL (sharecropping), H/L (forsikring) — begrepsmessig.
- [ ] **⚠️ RCT/nøkkelstudier ER påkrevd (kontrast til ECON1910)**: Banerjee, Duflo, Kremer, Miguel, Qian,
  Easterly, Alesina, Cole, Padró i Miquel SKAL forekomme i sine hjemkapitler. ECON1910s forbud gjelder IKKE.
- [ ] **NØKKELSTUDIE-bokser**: de 7 kanon-studiene har hver ETT hjemkapittel med full boks
  (`design → funn → kritisk identifikasjonsvurdering`): Kremer & Miguel → 1.2; Qian → 1.4; Easterly → 2.2;
  Alesina → 2.4; Padró i Miquel → 5.3 (teoretisk — vurdering av antakelser, ikke identifikasjon); Banerjee →
  6.2; Cole → 6.4. Andre kapitler refererer, dupliserer ikke.
- [ ] **«Identifikasjon foran korrelasjon»**: hver kausalpåstand i boka ledsages av identifikasjons-refleksen
  (omvendt kausalitet/confounder + hvilken strategi som omgår det); markert eksplisitt i Del 1 + nøkkelstudie-
  boksene + kap. 2.2 (endogenitet).
- [ ] **Figur + mekanisme**: hvert eksempel/løsningsforslag med figur (feller, G(y), H/L, g·MPL, Stiglitz–
  Weiss) inneholder både figurbeskrivelse i ord (akser, kurver, kryss, stabile/ustabile punkter) og verbal
  mekanisme. **Ingen algebra.**
- [ ] **Kapittel-DNA (drøfting)**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra dette
  skjelettet), Temaet-i-landskapet-`text`, Kjernebegreper-`definition` MED pensumforankring OG engelsk fagterm,
  Drøftingsakser-`text`, Anvendelse/NØKKELSTUDIE-`example`/boks, Typiske feil-`warning`, oppgaver (begreps- +
  kortdrøftings- + essayoppgaver med momentliste/disposisjon), Pensumkart-`collapsible`. Drillkapitler
  (1.6, 2.5, 3.4, 4.4, 5.4, 6.6): løsningsoppskrift + sensor-kommentert case + 8–12 oppgaver.
  Modellbesvarelser (7.2, 7.3) + øvingseksamener (7.4–7.6): A-besvarelse + kommentert C-besvarelse +
  sensorblikk.
- [ ] **Tospråklig**: hvert kjernebegrep har **engelsk fagterm** i parentes ved første forekomst; kap. 7.1 er
  eksplisitt tospråklig (inkl. nøkkelstudie-tabell); flashcards kobler norsk↔engelsk term + studie→design→funn.
- [ ] **Begge epoker/formater**: øvingseksamenene dekker epoke 1 (short 1/3 + structured essay 2/3) OG epoke 2
  (likevektede brede essay); vekt-håndtering (fordel tid etter oppgitt vekt) drilles.
- [ ] **Forkunnskaper/kryssbok**: hvert kapittel har Forkunnskaper-blokk; **ECON1910/ECON1210-referanser
  skrevet som KLARTEKST med id** (ikke live lenke, siden de ikke er bekreftet bygget); interne prerequisites
  peker på eksisterende econ4915-kapitler. Symbol-/formelliste-`collapsible` i delkapitler som bruker
  y/G(y)/g/H/L.
- [ ] **Pensumforankring EKTE**: kun kildene i §1 (de 7 navngitte eksamensstudiene som dokumentert kanon;
  Oslo-/ESOP-tradisjonen for delt teori; mulig empirisk lærebok + institusjonskobling + regimeskift-årsak som
  **usikre koblinger merket (verifiser)**); **ingen oppdiktede referanser**; `(verifiser)`-markører beholdt til
  fase 6 sjekker pensumlista.
- [ ] **A/B-differensiatorene**: de fem andreordens-poengene fra §1 er eksplisitt markert (`tip`/`warning`) i
  sine kapitler (identifikasjonsvurdering → Del 1 + nøkkelstudie-bokser; endogenitet → 2.2; kontekst-
  konsekvenser → 5.1; institusjoner → 3.2; krysskobling → 4.2 + 7.1).
- [ ] **Quiz-sum ≥ 584 og flashcard-sum ≥ 654** per kvotetabellen (§3 er autoritativ; kontrollsummér).
- [ ] **Prøver**: 4 per temadel 1–6 (24 stk) + 3 øvingseksamener; settene og prøvene dekker samlet sjangrene
  A–G og begge eksamensformater minst én gang.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne case, tall, land, bransjer og formuleringer; ingen
  formuleringer fra reelle sett (arkivet har uansett ingen sensorveiledning; skjelettets mønstereksempler er
  selv omskrivninger og skal varieres videre); studier og pensum refereres (design/funn), aldri siteres i
  lengde.
- [ ] **Sensorkrav er UTLEDET**: der boka påstår «sensor ser etter X» / «typisk feil» uten dokumentert
  veiledning, skal det være dempet/merket (utledet) — arkivet har ingen sensorveiledning (analysen §4/§5).
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter (200 + kapittelspesifikk
  streng), jf. lærdommen om `getChapterMeta`.

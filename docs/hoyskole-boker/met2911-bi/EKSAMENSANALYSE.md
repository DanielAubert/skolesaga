# Eksamensanalyse: MET2911 Matematikk for økonomer 1 — Handelshøyskolen BI

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på **11 arkivfiler for «MET 2910/2911 Matematikk for økonomer»**: sju veiledningssett med oppgaver (Veiledning 1–7, hvorav flere har innebygde løsningsforslag) og fire innleveringsoppgaver (F1–F4). **Materialet er i all hovedsak øvings- og veiledningsoppgaver — ikke fullstendige eksamenssett.** Analysen er derfor bygget på *oppgavetyper og temaprofil i øvingsmaterialet*, ikke på eksamensfrekvens over tid. Den er kvantitativ der materialet tillater det, men leseren bør lese del 0 nøye for hvor grensene går. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekst eller løsningsformuleringer.
>
> **Rammemerknad:** MET2911 er *høst-/første-semester-komponenten* av det obligatoriske grunnleggende matematikkemnet i BIs bachelor i økonomisk-administrative fag. Første semester dekker **algebra og funksjoner av én variabel** — regneteknikken som mikro-, makro- og finansfagene senere bygger på. Tyngdepunktet er **mekanisk regneferdighet og elementær økonomisk funksjonslære** (lineær kostnadsfunksjon, overskuddsfunksjon, likevekt tilbud/etterspørsel), ikke bevistung analyse. Faget er verktøyfaget som legger algebra-grunnmuren før derivasjon, optimering, integrasjon, finansmatematikk og lineær algebra kommer for fullt i vårkomponenten.

---

## 0. Emnekode, avgrensning og kildekritikk

**Emnet og kodene.** Faget er BIs grunnleggende matematikkemne for økonomistudenter. Kodeforholdet er slik:

| Kode | Rolle |
|---|---|
| **MET2910** | Paraplyemnet «Matematikk for økonomer» (7,5 studiepoeng totalt, gått over to semestre) |
| **MET2911** | **Høst-/første-semester-komponenten** — «Matematikk for økonomer 1». Dekker algebra og funksjoner av én variabel. Tilbys aktivt som nettstudier. |
| **MET2912** | Vår-/andre-semester-komponenten — «Matematikk for økonomer 2». Fortsettelsen (typisk derivasjon/optimering, integrasjon, finansmatematikk, lineær algebra) |

MET2911 er altså **ikke** et frittstående emne med egen fullverdig sluttprøve i tradisjonell forstand, men den første halvdelen av et delt løp. Arkivmaterialet er gjennomgående merket «MET 2910» / «Matematikk for økonomer» uten skarp deling mellom 2911 og 2912 — grensen må trekkes ut fra *innholdet* i oppgavene.

**Den viktigste avgrensningen: dette er veiledningsmateriale, ikke eksamenssett.** Arkivet inneholder:

- **Veiledning 1–7** — øvingssett brukt i undervisningen. Flere oppgaver er eksplisitt merket med opphav som *innleveringsoppgaver* fra tidligere semestre («Innlevering 1 Vår 2008», «Innlevering 1 Høst 2011», «innlevering 1 Høst 2013» osv.). Veiledning 6 og 7 er rene **flervalgssett** (20 oppgaver hver, svaralternativ A–E med «Jeg velger å ikke besvare spørsmålet» som E — det klassiske BI-flervalgsoppsettet).
- **F1–F4** — fire innleveringsoppgaver i Word-format. Disse skiller seg fra resten: de er **mikroøkonomiske anvendelsesoppgaver** (likevekt i oljemarkedet, budsjettbetingelse og alternativkostnad, nyttefunksjoner, marginal substitusjonsbrøk «MSB», indifferenskurver, inntektselastisitet). De henviser til en lærebok («Se side 96 i læreboken») og bruker begreper som ligger over ren én-variabel-algebra.

**Hva dette betyr for tolkningen.** Fordi materialet er øvingsoppgaver og ikke daterte eksamenssett, kan vi **ikke** lage en pålitelig temafrekvens over år eller si hvor ofte et tema «pleier å komme» på selve eksamen. Det vi *kan* gjøre er å kartlegge hvilke oppgavetyper og temaer BI faktisk trener studentene på i første del av faget, og hvordan de vektes i øvingsmaterialet. Frekvenstallene i del 2 teller derfor **forekomster i veiledningssettene**, ikke eksamensforekomster — de sier noe om *pensumtyngde og øvingsvekt*, ikke om eksamensspill.

**F1–F4 hører sannsynligvis dels utenfor MET2911s kjerne.** Innholdet i F1–F4 (nyttefunksjoner, MSB/marginal substitusjonsbrøk, elastisitet, indifferenskurver) er mikroøkonomisk teori som bruker derivasjon av funksjoner og forholdsregning — dette overlapper mer med et mikroøkonomi-/matematikk-for-økonomer-2-innhold enn med den rene algebra- og én-variabel-profilen i Veiledning 1–7. De er tatt med i analysen som *retningsmarkør* for hvor faget peker videre, men bør ikke behandles som representative for MET2911s kjernepensum. Flere av .docx-filene mangler dessuten selve funksjonsuttrykkene i teksten (formlene lå som bilder/objekter som ikke lot seg tekstuttrekke), så innholdet i F1–F4 er lest med forbehold.

**Hva som mangler i arkivet.** Det finnes **ingen daterte, komplette eksamenssett** for MET2911 her, **ingen offisiell sensorveiledning**, **ingen emnebeskrivelse/pensumplan i tekst**, og **intet utdelt formelark**. Beskrivelsen av eksamensform i del 1 er derfor rekonstruert fra flervalgsformatet i Veiledning 6–7 og fra det vi vet om søsteremnet MET2910 (se del 8). Alle slutninger om selve eksamen er markert med forbehold.

**Sammenlign med søsteranalysen.** Det finnes allerede en grundig, eksamenssett-basert analyse av paraplyemnet i `docs/hoyskole-boker/met2910-bi/EKSAMENSANALYSE.md` (bygget på 15+ komplette sett med sensorveiledninger). Den dokumentet er den beste kilden til eksamensform, vekttallsystem, kalkulatorkrav og «utregning må vises»-regelen. Denne MET2911-analysen supplerer det med et nærblikk på **algebra- og én-variabel-grunnmuren** slik den trenes i første semester.

---

## 1. Eksamensform (rekonstruert — med forbehold)

Fordi arkivet ikke inneholder eksamenssett eller emnebeskrivelse, bygger dette avsnittet på formatsignalene i veiledningsmaterialet og på det dokumenterte formatet til søsteremnet MET2910.

**Flervalg er sentralt for førstesemester-nivået.** Veiledning 6 og 7 er begge rene flervalgssett med det karakteristiske BI-oppsettet: 20 oppgaver, fem alternativer A–E, der E alltid er «Jeg velger å ikke besvare spørsmålet». Dette peker sterkt mot at MET2911 (i alle fall den grunnleggende delen) vurderes helt eller delvis med **flervalg/multiple-choice**, i tråd med at nettstudievarianten trenger et maskinrettbart format. Flervalgsformen forklarer også oppgavedesignet: mange korte, selvstendige oppgaver som hver tester én ferdighet, og «feller»-alternativer som fanger typiske regnefeil.

**Innlevering som obligatorisk element.** Store deler av veiledningsmaterialet er gjenbrukte *innleveringsoppgaver* (merket med semester), og F1–F4 er innleveringer i seg selv. Det tyder på at faget har (eller har hatt) **obligatoriske innleveringer** som arbeidskrav ved siden av selve prøven — samme mønster som MET2910.

**Ingen hjelpemidler utover kalkulator (antatt).** Se del 6. Ingenting i materialet krever avansert programvare; oppgavene er håndregning med enkel/finanskalkulator.

**Sannsynlig samspill med MET2910/MET2912.** Siden MET2911 og MET2912 til sammen utgjør MET2910 (7,5 sp), er det rimelig at karakteren settes på komponentnivå og at hele det todelte løpet følger MET2910s A–F-skala og vekttallslogikk. Detaljene her **må verifiseres mot BIs gjeldende emnebeskrivelse** før boken kalibreres endelig.

**Konstant premiss (fra MET2910, sannsynligvis også her):** «Alle utregninger skal vises — det er ikke nok å oppgi svaret alene.» Selv i et flervalgsformat er dette den viktigste læringsføringen: boken må lære *mellomstegene*, ikke bare svaret.

---

## 2. Temaoversikt og øvingsvekt

> **Les del 0 først.** Tallene under er **forekomster i veiledningsmaterialet** (7 veiledningssett + F1–F4), ikke eksamensfrekvens. De viser hvor tungt hvert tema trenes i førstesemester-materialet, ikke hvor ofte det «kommer på eksamen». Én oppgave med flere delpunkter telles som én forekomst per sett den opptrer i.

| Tema | Forekomst (av 7 veiledn. + F) | Kommentar |
|---|---|---|
| **Algebraisk forenkling / trekke sammen** (parenteser, kvadratsetninger, felles faktor) | V1, V2, V6, V7 | Fundamentet — dominerer V1 og V2 helt |
| **Faktorisering** (felles faktor, kvadratsetninger, andregrad, `x³−x`) | V1, V2, V3 | Høyfrekvent grunnferdighet |
| **Brøkregning med bokstavuttrykk** (fellesnevner, forkorting, brøkdivisjon) | V1, V2, V5, V6, V7 | Gjennomgående; både tallbrøk og algebraiske brøker |
| **Potens- og rotregler** (forenkling, `pⁿqᵐ`, rasjonalisering av rotuttrykk) | V1, V6, V7 | Standard forenklingsverktøy |
| **Løse likninger** (lineære, brøk-, andregrads-, rot-, `(x−2)²=4`) | V3, V4, V6, V7 | Kjerneferdighet |
| **Løse ulikheter** (andregrad, brøkulikhet, fortegnslinje) | V3, V4, V6, V7 | Krever fortegnsskjema |
| **Lineære likningssystemer** (2×2 og 3×3, innsetting/eliminasjon) | V3, V4, V6, V7 | Både reint algebraisk og som graflesing |
| **Rette linjer** (finne likning fra to punkter / punkt+stigningstall, skjæring) | V4, V6, V7 | Bro til funksjonslære |
| **Lineær kostnadsfunksjon fra to datapunkter** | V4, V5, V7 | Klassisk BI-økonomioppgave |
| **Overskudds-/inntektsfunksjon og maksimering (én variabel)** | V4, V5, V7 | Etterspørsel `p=a−bx` → inntekt → overskudd → toppunkt |
| **Andregradsfunksjoner** (graf, toppunkt/minimum, nullpunkt) | V4, V5, V6 | Grafisk og ved regning |
| **Polynomdivisjon og rest** | V5, V6, V7 | Inkl. «rest i divisjonen»-oppgaver |
| **Polynomfunksjoner av høyere grad** (nullpunkt, fortegn, grafmatching) | V5, V7 | «Hvilken graf hører til f(x)?» |
| **Rasjonale funksjoner og asymptoter** (loddrett, vannrett, skrå) | V5, V7 | Skrå asymptote via polynomdivisjon |
| **Grafmanipulasjon / funksjonstransformasjon** (`g(x)=2f(x)`, `f+g`) | V4, V6 | Avlese og kombinere grafer |
| **Gjennomsnittskostnad (enhetskostnad)** | V6, V7 | `C(x)/x` |
| **Mikroøkonomisk anvendelse** (markedslikevekt, budsjett, nytte/MSB, elastisitet) | F1–F4 | Se del 0 — ligger delvis utenfor MET2911s kjerne |

### Viktigste funn

1. **Algebra er ryggraden i første semester.** Veiledning 1 og 2 er nesten utelukkende trekk-sammen, faktorisering og brøkregning med bokstaver. Dette er grunnmuren alt annet hviler på, og øvingsvekten er tydelig: studenten skal beherske mekanisk algebra *flytende* før funksjonslæren begynner. En bok som haster forbi dette bommer på fagets faktiske tyngdepunkt i semester 1.

2. **Likninger og ulikheter er den andre store bolken.** Lineære, andregrads-, brøk- og rotlikninger, pluss lineære likningssystemer (2×2 og 3×3). Ulikheter — særlig andregrads- og brøkulikheter — krever **fortegnslinje/fortegnsskjema**, som er et gjennomgående metodekrav (samme som i MET2910).

3. **Overgangen til økonomisk funksjonslære skjer via den lineære kostnadsfunksjonen.** Det tilbakevendende oppgavemønsteret er: «Det koster X kr å produsere a enheter og Y kr å produsere b enheter — finn `K(x)`», ofte fulgt av en etterspørselsfunksjon `p = a − bx`, utledning av overskuddsfunksjonen `P(x) = −bx² + … `, og maksimering ved toppunktet til en parabel. Dette er MET2911s signaturanvendelse og bindeleddet til den økonomiske delen av faget.

4. **Polynomdivisjon, rasjonale funksjoner og asymptoter dukker opp mot slutten av førstesemester-materialet** (V5, V7). Skrå asymptote finnes ved polynomdivisjon — en typisk «koblingsoppgave» som forutsetter at både polynomdivisjon og asymptotebegrepet sitter.

5. **Grafforståelse testes både som avlesing og manipulasjon.** Matche funksjonsuttrykk mot graf, kombinere to grafer (`f+g`), transformere (`2f(x)`), og lese av likningssystem fra en figur. Dette er lavterskel i regning, men krever konseptuell forståelse — velegnet for flervalg.

6. **F1–F4 peker mot fagets fortsettelse.** Markedslikevekt, budsjettbetingelse/alternativkostnad, nyttefunksjoner, MSB og elastisitet er mikroøkonomiens matematiske verktøykasse. De hører innholdsmessig mer hjemme i vårkomponenten (MET2912) / et mikroøkonomiemne, men viser hva algebra-grunnmuren skal *brukes til*.

---

## 3. Oppgavesjangre

De sjangrene som faktisk går igjen i materialet, med krav og et omskrevet eksempel hver. Rekkefølgen følger omtrentlig tyngden i førstesemester-materialet.

### A. Algebraisk forenkling («trekk sammen»)
- **Krav:** Løs opp parenteser, bruk de tre kvadratsetningene, samle like ledd, håndter fortegn korrekt (den vanligste fella: fortegn på hele parentesen ved subtraksjon). Ofte etterfølges forenklingen av «beregn verdien når x = …» — dvs. sett inn og regn ut til slutt.
- **Forekomst:** V1, V2, V6, V7 (høyfrekvent).
- **Omskrevet eksempel:** «Trekk sammen `2x(x−3) − (x+3)(x−3)`, og finn deretter verdien når `x = −2`.»

### B. Faktorisering
- **Krav:** Sett utenfor felles faktor, kjenn igjen kvadratsetninger (`a²−b²`, `a²±2ab+b²`), faktoriser andregradsuttrykk (`x²+x−6`), og trekk ut `x` før videre faktorisering (`x³−x = x(x−1)(x+1)`).
- **Forekomst:** V1, V2, V3.
- **Omskrevet eksempel:** «Faktoriser `3x² + 3x − 18` fullstendig.»

### C. Brøkregning med bokstavuttrykk
- **Krav:** Finn fellesnevner, forkort ved å faktorisere teller og nevner, del på brøk (snu og gang), forenkle sammensatte brøker. Både reine tallbrøker og algebraiske brøker.
- **Forekomst:** V1, V2, V5, V6, V7.
- **Omskrevet eksempel:** «Forkort `(x² − 3x + 2)/(x − 2)`.»

### D. Potens- og rotregler
- **Krav:** Potensregler for produkt/kvotient/potens av potens, negative eksponenter, og forenkling av rotuttrykk (trekke sammen røtter, rasjonalisere, `√50/√8`-typen).
- **Forekomst:** V1, V6, V7.
- **Omskrevet eksempel:** «Skriv `√50 / √8` så enkelt som mulig.»

### E. Løse likninger
- **Krav:** Lineære likninger med brøk (gang bort nevner), brøklikninger (definisjonsmengde-forbehold), andregradslikninger (faktorisering eller abc), rotlikninger (kvadrer, sjekk falske løsninger), og formen `(x−2)² = 4`. Flervalgsvarianten spør ofte om **summen av løsningene** — en fin sjekk på at man fant *alle* røttene.
- **Forekomst:** V3, V4, V6, V7.
- **Omskrevet eksempel:** «Løs `x³ − 2x² − 3x = 0` og oppgi summen av løsningene.»

### F. Løse ulikheter
- **Krav:** Andregradsulikheter og brøkulikheter løst med **fortegnslinje** (aldri gjetting): finn nullpunkter til teller og nevner, sett opp fortegnsskjema, les av intervallene. Husk at nevner ≠ 0 og at ulikhetstegnet snur ved multiplikasjon med negativt tall.
- **Forekomst:** V3, V4, V6, V7.
- **Omskrevet eksempel:** «Løs `(x² − 4)/x ≥ 0`.»

### G. Lineære likningssystemer
- **Krav:** 2×2-systemer (innsetting eller addisjonsmetode) og 3×3-systemer (systematisk eliminasjon). Flervalgsvarianten spør ofte om **summen `x + y`** eller `x + y + z`. Kan også presenteres grafisk: «hvilket system passer til figuren?».
- **Forekomst:** V3, V4, V6, V7.
- **Omskrevet eksempel:** «Løs `2x − 4y = 16`, `−3x + y = −9`, og oppgi `x + y`.»

### H. Rette linjer
- **Krav:** Finn linjas likning fra to punkter, eller fra stigningstall + ett punkt; finn skjæringspunkt mellom to linjer; kombiner to lineære grafer (`f+g`).
- **Forekomst:** V4, V6, V7.
- **Omskrevet eksempel:** «En linje har stigningstall −2 og går gjennom `(−3, −1)`. Finn `f(x)`.»

### I. Lineær kostnadsfunksjon og overskuddsmaksimering (én variabel) — økonomisignaturen
- **Krav:** (1) Bygg lineær kostnadsfunksjon `K(x) = ax + b` fra to (mengde, kostnad)-par. (2) Gitt etterspørsel `p = a − bx`, sett opp inntekt `I(x) = p·x` og overskudd `P(x) = I(x) − K(x)` (blir en andregradsfunksjon). (3) Maksimer ved parabelens toppunkt; tolk pris, mengde, overskudd og evt. gjennomsnittskostnad `K(x)/x`.
- **Forekomst:** V4, V5, V7.
- **Omskrevet eksempel:** «Det koster 17 500 kr å lage 125 enheter og 18 700 kr å lage 155 enheter. Finn `K(x)`. Med `p = 160 − 0,2x`, vis at `P(x) = −0,2x² + 120x − 12 500`, og finn mengden som maksimerer overskuddet.»

### J. Andregradsfunksjoner
- **Krav:** Tegn parabel, finn toppunkt/bunnpunkt (symmetrilinje `x = −b/2a`), nullpunkt (faktorisering/abc), og løs `f(x) = g(x)` både grafisk og ved regning.
- **Forekomst:** V4, V5, V6.
- **Omskrevet eksempel:** «For `f(x) = x² + 2x − 8`: finn minimumspunktet og løs `f(x) = −x + 2`.»

### K. Polynomdivisjon og polynomfunksjoner
- **Krav:** Utfør polynomdivisjon (evt. med rest), bruk resultatet til å finne nullpunkter og fortegn, og skisser/match grafen til et tredjegradspolynom. Flervalg spør gjerne om **resten** i en gitt divisjon.
- **Forekomst:** V5, V6, V7.
- **Omskrevet eksempel:** «Finn resten i `(x² + 6x + 3) : (x + 2)`.»

### L. Rasjonale funksjoner og asymptoter
- **Krav:** Finn definisjonsmengde, loddrette asymptoter (nevner = 0), vannrett/skrå asymptote (skrå via polynomdivisjon), regn ut funksjonsverdier og skisser.
- **Forekomst:** V5, V7.
- **Omskrevet eksempel:** «Finn den skrå asymptoten til `f(x) = (2x² − x + 7)/(x + 3)`.»

### M. Graflesing og funksjonstransformasjon
- **Krav:** Match funksjonsuttrykk mot graf; kombiner to grafer (`h = f + g`); transformer (`g(x) = 2f(x)`); les av et likningssystem fra en figur.
- **Forekomst:** V4, V6.
- **Omskrevet eksempel:** «Grafene til to lineære funksjoner er tegnet. Finn uttrykket for `h(x) = f(x) + g(x)`.»

### N. Mikroøkonomisk anvendelse (F1–F4 — grensetilfelle, se del 0)
- **Krav:** Markedslikevekt (sett tilbud = etterspørsel), budsjettbetingelse og alternativkostnad, nyttefunksjoner og marginal substitusjonsbrøk (MSB), indifferenskurver, inntektselastisitet. Krever forholdsregning og elementær derivasjon.
- **Forekomst:** F1–F4.
- **Omskrevet eksempel:** «Finn likevektsprisen der etterspurt mengde er lik tilbudt mengde, og beregn omsatt kvantum i likevekt.»

---

## 4. Vurderingskriterier (rekonstruert)

Uten offisiell sensorveiledning for MET2911 er dette utledet fra oppgavedesignet og fra MET2910s dokumenterte sensorprinsipper (se del 8):

1. **Utregning skal vises.** Selv i flervalg er poenget at studenten kan *føre* mellomstegene. Boken må lære metode, ikke svar-gjenkjenning.
2. **Fortegnslinje er obligatorisk verktøy** for ulikheter og for fortegnsanalyse — ikke intuitiv gjetting. Dette går igjen i alle BI-matematikkfagene.
3. **Fullstendig faktorisering / forenkling premieres.** Et halvveis forenklet uttrykk er ikke ferdig; svaret skal være så enkelt som mulig.
4. **Alle løsninger skal med.** «Summen av løsningene»-flervalgsoppgavene straffer den som glemmer en rot (typisk `x = 0`-roten i `x(x²+8)=0`-typen, eller den negative roten i en andregradslikning).
5. **Definisjonsmengde-forbehold.** Ved brøk- og rotlikninger skal ugyldige/falske løsninger lukes ut.
6. **Økonomisk tolkning der oppgaven er anvendt.** Ved kostnads-/overskuddsoppgaver forventes svar med enhet og en kort tolkning (pris, mengde, maksimalt overskudd).

### Antatt karakterskille
- **Bestått-sjiktet** behersker mekanisk algebra, standard likninger/ulikheter med fortegnslinje, lineære systemer og den lineære kostnadsfunksjonen.
- **Midtsjiktet** legger til brøk-/rotlikninger med definisjonsmengde, brøkulikheter, polynomdivisjon, overskuddsmaksimering og asymptoter.
- **Toppsjiktet** kobler sjangre (skrå asymptote via polynomdivisjon, grafmatching fra fortegnsanalyse, full utledning + tolkning av overskuddsfunksjon) og gjør det raskt og feilfritt.

---

## 5. Typiske feil

Utledet fra oppgavekonstruksjonen og fra flervalgs-«fellene» (feilalternativene er ofte designet rundt disse):

1. **Fortegnsfeil ved subtraksjon av parentes** — glemmer å snu fortegnet på *alle* ledd i `−(x+3)(x−3)`-typen.
2. **Feilbrukt kvadratsetning** — skriver `(a−b)² = a² − b²`, eller glemmer det doble produktleddet `2ab`.
3. **Forkorter over pluss/minus** — «stryker» ledd i teller/nevner uten å faktorisere først (`(x²−8)/(2x+8)`-fella).
4. **Ulikhet uten fortegnslinje** — gjetter intervall, eller glemmer at tegnet snur ved multiplikasjon med negativt tall; håndterer ikke nevnerens fortegn i brøkulikheter.
5. **Mister løsninger** — glemmer `x = 0`-roten når man deler bort `x`, eller tar bare den positive roten.
6. **Falske røtter beholdes** — kvadrerer rotlikning uten å sjekke svaret; glemmer definisjonsmengde ved brøklikning.
7. **Feil i polynomdivisjon** — mister ledd (manglende `0·x`-plassholder), eller regner rest feil.
8. **Asymptote-forveksling** — bruker vannrett asymptote der graden i teller er høyere enn i nevner (skal være skrå, funnet ved divisjon).
9. **Overskuddsfunksjon satt feil opp** — glemmer å gange etterspørselsprisen med mengden (`I = p·x`, ikke `I = p`), eller trekker fra kostnaden feil.
10. **Regnefeil i innsetting** — riktig forenkling, men slurv når `x`-verdien settes inn til slutt.

---

## 6. Hjelpemidler

**Ingen dokumentert formelark eller hjelpemiddelliste i arkivet.** Basert på søsteremnet MET2910 og oppgavenes karakter:

- **Kalkulator** er det sentrale (og trolig eneste) hjelpemiddelet — BI-godkjent enkel/finanskalkulator. På førstesemester-nivået (algebra, likninger, én-variabel-funksjoner) trengs den lite til selve regningen, men er tillatt.
- **Ingen programvarekrav.** Til forskjell fra ingeniørmatematikk (MATLAB/Python) finnes det ingen skript- eller programmeringsoppgaver her. Alt er håndregning.
- **Formelark:** MET2910 deler ut formelark i nyere sett (potens-/logaritmeregler, abc-formel, m.m.). Om MET2911 gjør det samme er **ikke verifisert** — må sjekkes mot gjeldende emnebeskrivelse.

**Konsekvens for boken:** Lær de manuelle mellomstegene og de faste oppskriftene (kvadratsetninger, abc-formel, fortegnslinje, polynomdivisjon). Kandidaten skal kunne *utføre* algebraen for hånd, ikke støtte seg på kalkulatorfunksjoner.

---

## 7. Prioritering for læreboken + prognose

### Nivå 1 — grunnmuren (må sitte flytende)
1. **Algebraisk forenkling** — parenteser, alle tre kvadratsetninger, samle ledd, fortegnshåndtering. Det aller viktigste i semester 1.
2. **Faktorisering** — felles faktor, kvadratsetninger, andregradsuttrykk, `x`-uttrekk.
3. **Brøkregning med bokstaver** — fellesnevner, forkorting ved faktorisering, brøkdivisjon.
4. **Løse likninger** — lineære, brøk-, andregrads-, rotlikninger; definisjonsmengde og falske løsninger.
5. **Løse ulikheter** — andregrads- og brøkulikheter med **fortegnslinje**.
6. **Lineære likningssystemer** — 2×2 og 3×3.

### Nivå 2 — funksjonslære og økonomisk anvendelse
7. **Rette linjer** — likning fra punkter/stigningstall, skjæring, kombinasjon.
8. **Lineær kostnadsfunksjon + overskuddsmaksimering (én variabel)** — fagets signaturanvendelse; bind algebra til bedriftsøkonomi.
9. **Andregradsfunksjoner** — toppunkt, nullpunkt, `f(x)=g(x)`.
10. **Potens- og rotregler** — forenkling og rasjonalisering.

### Nivå 3 — utvidelse mot slutten av semesteret
11. **Polynomdivisjon og polynomfunksjoner** — inkl. rest og grafmatching.
12. **Rasjonale funksjoner og asymptoter** — skrå asymptote via divisjon.
13. **Graflesing og funksjonstransformasjon.**
14. **Mikroøkonomisk anvendelse (F1–F4-typen)** — dekk som bro til vårkomponenten/mikroøkonomi, men merk at nyttefunksjoner/MSB/elastisitet ligger på grensen av MET2911s kjerne (se del 0).

### Prognose (med forbehold — bygger på veiledningsmateriale, ikke eksamenssett)
En MET2911-prøve vil sannsynligvis være **flervalgs- og/eller innleveringsbasert** med mange korte, selvstendige oppgaver som hver tester én ferdighet. Forvent tyngdepunkt på: **algebraisk forenkling og faktorisering**, **brøkregning**, **likninger og ulikheter (med fortegnslinje)**, **lineære likningssystemer**, **rette linjer og lineær kostnadsfunksjon**, **overskuddsmaksimering av én-variabel-parabel**, og **polynomdivisjon/asymptoter** mot slutten. Feilalternativene i flervalg vil speile fellene i del 5 (fortegn, kvadratsetning, tapt rot, ugyldig forkorting).

**Usikkerhet (viktig):** Denne prognosen hviler på øvingsmateriale, ikke daterte eksamenssett, og på antakelser om eksamensform. **Før boken kalibreres endelig bør følgende verifiseres mot BIs gjeldende emnebeskrivelse:** (a) faktisk eksamensform for MET2911 (ren flervalg? innlevering + prøve? kobling til MET2910-karakter?), (b) om formelark deles ut, (c) den nøyaktige pensumgrensen mot MET2912 — særlig hvor derivasjon/optimering, integrasjon og lineær algebra hører hjemme.

---

## 8. Overlapp med eksisterende fag

Dette er **økonomimatematikk på grunnivå**, og overlapper betydelig med flere fag allerede i porteføljen. Det bør utnyttes for gjenbruk av forklaringer, eksempler og oppgaver — men med bevisst nivådifferensiering.

**MET2910 (samme emne, paraplyen) — sterkest overlapp.** MET2911 *er* første halvdel av MET2910. Den grundige, eksamenssett-baserte analysen i `docs/hoyskole-boker/met2910-bi/EKSAMENSANALYSE.md` er nærmeste slektning og den beste kilden til eksamensform, vekttall, kalkulatorregel og «utregning må vises». Forholdet mellom bøkene:
- **MET2911-boken** = algebra- og én-variabel-grunnmuren (Nivå 1–2 over). Den skal være *bredere og roligere* på det elementære enn MET2910-boken, som forutsetter at grunnmuren sitter.
- **MET2910/MET2912** legger på derivasjon, optimering (én og to variabler, `AC−B²`), integrasjonsteknikk, finansmatematikk (annuiteter/nåverdi) og lineær algebra (determinant/Cramer/Gauss) — temaer som er **fraværende** i MET2911-materialet og hører til vårkomponenten.
- **Gjenbruk:** algebra-, likning-, ulikhet- og kostnadsfunksjon-kapitlene kan deles direkte mellom de to bøkene (MET2911 som forkurs-/repetisjonsdel i MET2910-boken).

**Andre BI-fag i porteføljen:** `met1190-bi` og `met2920-bi` finnes som naboemner. MET1190 (statistikk/metode-familien) og MET2920 deler sannsynligvis den samme «utregning vises / fortegnslinje / vekttall»-kulturen; sjekk deres analyser for felles didaktiske konvensjoner, men de matematiske temaene overlapper lite med MET2911s algebra.

**Grunnleggende funksjonslære (VGS og andre grunnkurs).** MET2911s pensum ligger tett på norsk **VGS-nivå (1T/R1-algebra, funksjonslære)** og på grunnalgebra-delene av OsloMets `oslomet-mat1000` (ingeniørmatematikk). Konkret gjenbrukbart på tvers:
- Algebraisk forenkling, faktorisering, brøk-, potens- og rotregning — universelt grunnstoff.
- Løse likninger og ulikheter med fortegnslinje — felles med praktisk talt alle matematikkbøkene i porteføljen.
- Rette linjer, andregradsfunksjoner, polynomdivisjon og asymptoter — standard funksjonslære.

Det **MET2911-spesifikke** som skiller boken fra en ren VGS-algebrabok er den **bedriftsøkonomiske innrammingen**: lineær kostnadsfunksjon fra datapunkter, etterspørsel `p = a − bx`, overskuddsfunksjon og maksimering, gjennomsnittskostnad, og (mot slutten/vårsemesteret) markedslikevekt og nytteteori. Eksemplene bør konsekvent kles i denne økonomidrakten for å treffe BI-studenten, selv når den underliggende matematikken er allmenn.

---

## Kildeliste

Alle filer ligger i `~/Desktop/Eksamner/BI/MET2911/` (11 filer):

- **Veiledning 1–7** (`MET 2911 Veiledning 1 - Oppgaver (002).pdf`, `Veiledning 2–7 - Oppgaver.pdf`) — øvings-/veiledningssett. V1–V5 er tradisjonelle regneoppgaver (flere merket som gjenbrukte innleveringer fra 2007–2013, enkelte med løsningsforslag); V6–V7 er rene flervalgssett (20 oppgaver hver, A–E).
- **F1–F4** (`Oppgave F1–F4.docx`) — innleveringsoppgaver, mikroøkonomisk anvendelse. Lest med forbehold: enkelte funksjonsuttrykk lå som bilder/objekter og lot seg ikke tekstuttrekke.

**Metodemerknader:**
- Materialet er **veilednings-/øvingsoppgaver, ikke daterte eksamenssett**. Ingen sensorveiledning, emnebeskrivelse eller formelark i arkivet. Frekvenstall i del 2 teller forekomster i veiledningssettene, ikke eksamensforekomster.
- Eksamensform (del 1), vurderingskriterier (del 4) og hjelpemidler (del 6) er **rekonstruert** fra flervalgsformatet i V6–V7 og fra det dokumenterte søsteremnet MET2910 — markert med forbehold.
- **Kontrastkilde:** `docs/hoyskole-boker/met2910-bi/EKSAMENSANALYSE.md` (eksamenssett-basert analyse av paraplyemnet) er brukt til å ramme inn eksamensform og sensorkultur.
- **Opphavsrett:** Alle beskrivelser av oppgaver, metoder og kriterier er parafrasert og omstrukturert med egne ord. Ingen oppgavetekst eller løsningsformulering er gjengitt ordrett. Matematiske uttrykk og standardformler er allmenn fagnotasjon og ikke opphavsrettslig beskyttet.

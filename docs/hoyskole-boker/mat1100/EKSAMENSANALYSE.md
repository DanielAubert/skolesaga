# Eksamensanalyse: MAT1100 Kalkulus (UiO)

> Grunnlagsdokument for eksamensrettet lærebok. Bygger på 21 ordinære slutteksamener (H2003–H2023, én per år, alltid desember), 18 løsningsforslag/fasiter (2003–2020) og 16 midtveiseksamener (H2003–H2018). **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller fasiter. Analysen er kvantitativ der kildene tillater det.

---

## 1. Eksamensform og utvikling

MAT1100 vurderes med **to prøver**: en midtveiseksamen i oktober (teller 1/3) og en avsluttende skoleeksamen i desember (teller 2/3). To obligatoriske innleveringer må være godkjent. De to prøvene er **komplementære i både form og pensum** — dette er det viktigste strukturfunnet:

| | Midtveiseksamen (1/3) | Avsluttende eksamen (2/3) |
|---|---|---|
| Form | **100 % flervalg** (5 alternativer, ett riktig, ingen gjettestraff) | **100 % begrunnet langsvar** siden 2017 (før: hybrid) |
| Varighet | 2 timer | 4 timer (3 timer t.o.m. 2009) |
| Hjelpemidler | Ingen utover vedlagt formelsamling | Godkjent kalkulator + formelark/formelsamling |
| Pensumvindu | Første halvdel: komplekse tall, følger, grenser, kontinuitet, derivasjon, drøfting | Hele pensum, men tyngdepunkt i andre halvdel: integrasjon, lineær algebra, flervariabel |
| Poengfilosofi | Riktig kryss = poeng; feil/blankt = 0 | «Svar som ikke er begrunnet, får 0 poeng selv om de er riktige» |

### Formathistorikk, avsluttende eksamen

| Periode | Struktur | Kommentar |
|---|---|---|
| 2003–2009 | 10 flervalg à 3 p + 7 langsvar-delpunkter à 10 p = 100 p; 3 timer | 2003 fysisk todelt (to hefter); 2005 avviker (5 flervalg, uspesifisert poeng) |
| 2010–2016 | Samme 10×3 + 7×10-mal, men **4 timer**, eget svarark, alternativer A–E | Ingen gjettestraff på flervalg noe år |
| 2017 | **Flervalg fjernet.** 12 delpunkter som teller likt | Ny instruks: resultater fra ubesvarte punkter kan brukes videre |
| 2018–2020, 2022 | 12 delpunkter à 6 p = 72 p, alt langsvar | Fast instruks: begrunn alt, vis mellomregning |
| 2021, 2023 | Poeng per hovedoppgave (130 hhv. 120 p), 13 delpunkter som «i utgangspunktet teller likt» | Samme reelle struktur som 2018–2022 |
| 2020–2021 (korona) | Digital hjemmeeksamen, **alle hjelpemidler** | Kompensert med «konstruer selv et eksempel»-oppgaver og skjerpet begrunnelseskrav (programbruk må forklares; ubegrunnet = 0) |

### Formathistorikk, midtveiseksamen

| Periode | Struktur |
|---|---|
| 2003 | 20 spm: 15×2 p + 5×4 p (sum 50) |
| 2004–2016 | Fast mal: 20 spm, 10×2 p + 10×3 p (sum 40); avvik 2005 (10 spm) og 2010 (20×1 p, teoritungt) |
| 2017 | 20 spm, alle likt vektet |
| 2018 | 18 spm, alle likt vektet |

**Konstanter på tvers av alle år:**
- Avsluttende eksamen har 12–13 delpunkter (7 à 10 p i flervalgsepoken) som i praksis teller likt — tidsbudsjettet er ~18–20 min per delpunkt.
- Delpunktene er **kjedet**: fasitene gjenbruker eksplisitt tidligere delsvar, og instruksen (fra 2017) sier at man kan bruke resultater fra punkter man ikke løste. Oppgavedesignet belønner å se strukturen.
- Midtveis har fast dramaturgi: settet åpner med komplekse tall (lette), midten er grenser + derivasjon, slutten er teori-/definisjonsspørsmål og 1–2 tekstoppgaver med figur (relaterte rater, optimering).

---

## 2. Temafrekvens-tabell

### Avsluttende eksamen (21 sett). Celleverdi = antall sett i perioden der temaet forekommer (flervalg eller langsvar).

| Tema | 2003–11 (9 sett) | 2012–17 (6) | 2018–23 (6) | **Gjenganger-score** |
|---|---|---|---|---|
| Flervariabel: gradient, retningsderivert, partiellderiverte, Jacobi | 9 | 6 | 6 | **21/21 = 100 %** |
| Integrasjonsteknikk (substitusjon/delvis/delbrøk/fullført kvadrat) | 9 | 6 | 5 | **20/21 = 95 %** |
| Uegentlige integraler (konvergens/beregning) | 8 | 5 | 4 | **17/21 = 81 %** |
| Lineær algebra: determinant, volum, invers, matrisepotens | 6 | 6 | 5 | **17/21 = 81 %** |
| Omdreiningsvolum / buelengde | 5 | 5 | 5 | **15/21 = 71 %** |
| Overgangs-/populasjonsmatriser (anvendt modellering) | 3 | 4 | 5 | **12/21 = 57 %** (9/12 siste tolv år) |
| Analysens fundamentalteorem + kjerneregel | 6 | 3 | 2 | **11/21 = 52 %** |
| Komplekse tall (røtter, polarform, faktorisering) | 5 | 3 | 2 | **10/21 = 48 %** (men 30 % av ALLE midtveisspørsmål) |
| Kontinuitet/deriverbarhet i ett punkt (stykkevise funksjoner) | 3 | 2 | 5 | **10/21 = 48 %** (5/6 siste seks år — voksende signaturoppgave) |
| Funksjonsdrøfting (monotoni, konveksitet, vendepunkt, asymptoter) | 5 | 2 | 2 | **9/21 = 43 %** |
| Teoribevis: ε-δ, skjæringssetning, sup-argument, integrerbarhet | 4 | 4 | 1 | **9/21 = 43 %** |
| Grenseverdier/L'Hôpital som egen (del)oppgave | 1 | 3 | 2 | **6/21 = 29 %** |
| Anvendt optimering (geometrisk figur) | 5 | 0 | 1 | **6/21 = 29 %** (fallende; nå oftest midtveis) |
| Relaterte rater / krevende derivasjonsteknikk (langsvar) | 0 | 3 | 3 | **6/21 = 29 %** |
| Middelverdisetning/Rolle-bevis med hjelpefunksjon | 1 | 0 | 3 | **4/21 = 19 %** (3/6 siste seks år — stigende) |
| Induksjonsbevis (alltid koblet til matrisepotens) | 1 | 2 | 0 | **3/21 = 14 %** (ingen siden 2015) |
| Følger (konstruksjon/rekursjon) | 2 | 0 | 1 | **3/21 = 14 %** (men 9 % av midtveisspørsmålene) |
| Taylorpolynom/restledd | 0 | 1 | 0 | **1/21 = 5 %** (2017: restleddet bygges fra bunnen som teorioppgave) |
| **Uendelige rekker / konvergenstester** | 0 | 0 | 0 | **0/21 = 0 %** |
| **Differensialligninger** | 0 | 0 | 0 | **0/21 = 0 %** |

### Midtveiseksamen — temafordeling H2012–H2018 (138 spørsmål talt opp)

| Tema | Andel | Faste gjengangere |
|---|---|---|
| Komplekse tall | **30 %** | Polarform begge veier (åpner alltid settet), de Moivre-potens (z^38 o.l.), n-te røtter, komplekse likninger (også med komplekse koeffisienter), rekonstruer reelt polynom fra røtter via konjugatrotsetningen, geometriske mengder (\|z−a\|<r, halvplan), teoriutsagn |
| Grenseverdier/L'Hôpital | 16 % | Alle ubestemte former: 0/0, ∞−∞, 0·∞, 1^∞, 0^0, ∞^0; konjugattriks; veksthierarki |
| Derivasjonsteknikk | 14 % | Kjerneregel-tårn, logaritmisk derivasjon, **derivert av omvendt funksjon i punkt** (årviss), relaterte rater med figur |
| Funksjonsdrøfting | 12 % | **Skråasymptote til x·e^(k/x)-familien** (nesten årlig), konveksitet/vendepunkter |
| Følger | 9 % | Rasjonale, konjugat, rekursive med fikspunktanalyse (fra 2014), monoton+begrenset-teoremet |
| ε-δ/definisjonsteori | 7 % | Kvantitativ δ(ε), kvantorlogikk, negasjon av definisjoner; distraktorene bytter kvantorrekkefølge eller ε/δ-roller |
| Inverse funksjoner/definisjonsmengder | 4 % | Finn invers med riktig definisjonsområde |
| MVT/Rolle (teoriutsagn) | 3 % | Korrekt formulering; teoretiske konsekvenser |
| Øvrig (kont./deriv. i punkt, optimering) | 4 % | Skjøteparametre; klassisk tidsminimering |

**Viktigste funn:**
1. **Flervariabel/lineær algebra er slutteksamenens ryggrad** (gradient/retningsderivert i 21/21 sett, ofte som åpningsoppgave) — selv om dette bare er en liten del av pensumlisten. En eksamensrettet bok må gi dette stor plass.
2. **Emnebeskrivelsen nevner uendelige rekker, Taylorrekker og differensialligninger — men de har 0 forekomster i 21 slutteksamener og 16 midtveiseksamener** (Taylor kun én gang, som teorioppgave der restleddet utledes fra bunnen, 2017; brukt implisitt som verktøy 2023). Arkivet stopper i 2023 og emnebeskrivelsen er verifisert i 2026 — temaene kan være kommet inn ved en nyere pensumjustering. Boken må dekke dem (de står i gjeldende emnebeskrivelse), men eksamenstreningen kalibreres mot de dokumenterte sjangrene, og nye eksamenssett bør sjekkes når de foreligger.
3. **Midtveis og slutteksamen deler nesten ikke temaer**: komplekse tall, grenser, følger og drøfting «brukes opp» på midtveis (integrasjon forsvant fra midtveis etter 2004); slutteksamen henter tyngden fra integrasjon, lineær algebra og flervariabel — pluss teorioppgaven om kontinuitet/deriverbarhet i punkt, som er blitt slutteksamenens signatur (5 av 6 siste år).
4. Overgangsmatrise-oppgaven med determinant-/inverterbarhetsspørsmål tester begge utfall over år (det = 0 i 2015/2018 → «nei»; det ≠ 0 i 2020 → «ja») — studenten kan ikke pugge konklusjonen.

---

## 3. Oppgavetype-katalog

De 14 sjangrene som faktisk går igjen på avsluttende eksamen, pluss midtveisrepertoaret.

### A. Gradient og retningsderivert
- **Krav:** Regn partiellderiverte komponentvis → sett sammen ∇f, evaluer i punktet. Retningsderivert f′(a; r) = ∇f(a)·r — kursets konvensjon gjelder **også for ikke-normalisert r**; normaliser bare når oppgaven eksplisitt ber om enhetsvektor. Raskest vekst: retningen til ∇f(a); maksimal vekstrate = |∇f(a)| (egenskapen skal uttales verbalt). Variant: finn retning med retningsderivert 0 (ortogonal på gradienten).
- **Frekvens:** 21/21 sett; nesten alltid åpningsoppgave, 1–4 delpunkter.
- **Omskrevet eksempel:** «La f(x,y,z) = x y² z³. Finn retningen ut fra punktet (1,1,1) der f vokser raskest, og begrunn svaret.»

### B. Overgangs-/populasjonsmatriser (anvendt modellering)
- **Krav:** (i) Oversett den verbale modellen (aldersklasser, filialer, velgere, insekter …) til rekursjonslikninger — fasit begrunner **hver rad for seg** ut fra teksten før matrisen skrives; (ii) k steg frem = M^k med full utregning; (iii) «finnes det en vei tilbake?» = inverterbarhet: regn det M ved kofaktorutvikling og bruk «inverterbar ⇔ det ≠ 0». Eksistens holder — inversen skal ikke regnes ut med mindre det spørres. Varianter: likevekt/egenvektor (2006, 2021), endrede rater → ny matrise (2020), det(Aⁿ) = (det A)ⁿ (2022).
- **Frekvens:** 12/21; 9 av 12 siste år. Kontekster brukt: studenter, bilutleie, bibliotek, gjenvinning, fisk, kaniner, velgere, dyrebestand, planter, insekter.
- **Omskrevet eksempel:** «En insektpopulasjon består av unge og voksne. Hver voksen får i snitt to avkom per sesong, og en tredel av de unge overlever til voksen alder. Forklar hvorfor utviklingen kan skrives xₙ₊₁ = Axₙ, finn matrisen som beskriver fire sesonger, og avgjør om man entydig kan regne seg én sesong bakover.»

### C. Determinant, volum og matriseregning
- **Krav:** Volum av parallellepiped = |det[a b c]| (alternativt |(a×b)·c| — begge godtas); **pyramide/tetraeder = 1/6 av dette** (faktoren glemmes lett). Invers 2×2 via standardformel; verifisering av invers: det holder å sjekke AB = I (fasit 2014 sier eksplisitt at BA = I da følger). Matrisepotenser med strukturinnsikt (M(a)M(b) = M(a+b) ⇒ M(a)⁻¹ = M(−a)).
- **Frekvens:** 17/21 (2–3 flervalg per sett i flervalgsepoken; egne delpunkter senere).
- **Omskrevet eksempel:** «Finn volumet av pyramiden med hjørner i de fire oppgitte punktene.»

### D. Omdreiningsvolum og buelengde
- **Krav:** **Velg metode etter akse**: om x-aksen → skiver V = π∫f(x)² dx; om y-aksen → sylinderskall V = 2π∫x·f(x) dx. Y-aksen/skall er vanligst i nyere år (2018, 2021, 2023). Tegn området, sett opp integralet, løs med relevant teknikk (ofte delvis integrasjon eller substitusjon). Omvendt variant: gitt volumkrav, finn parameter — ved uendelig mange løsninger velges én fritt med begrunnelse (fasit 2020 satte b = π). Buelengde-oppsett forekom i eldre sett (2004, 2007, 2011).
- **Frekvens:** 15/21.
- **Omskrevet eksempel:** «Området under y = ln x for 1 ≤ x ≤ 2 dreies om y-aksen. Finn volumet.»

### E. Integrasjonsteknikk-kjeder
- **Krav:** De fire teknikkene og fasitens føringsstandard:
  - **Substitusjon**: gjenkjenn indre funksjon · dens deriverte; u, du/dx, dx og **nye grenser** bokføres i egen boks. Klassikere: u = x² mot √(1−x⁴)-nevner (arcsin-form), u = arctan x, u = sin x, u = √x, u = 1/x.
  - **Delvis integrasjon**: produkter og «ensomme» funksjoner (ln, arctan, arccos); valget av u/v′ dokumenteres.
  - **Delbrøkoppspalting**: også med gjentatt lineær faktor (1/(x²(x+1))) og irreduserbar kvadratisk faktor; polynomdivisjon først når tellergrad ≥ nevnergrad.
  - **Fullføre kvadratet** → arctan-form for nevnere uten reelle røtter; kombinasjonsformen (ax+b)/(x²+px+q) splittes i ln-del + arctan-del.
  - Oppgavene kjeder ofte 2–3 teknikker (substitusjon → delvis → ny substitusjon). Hjemmeeksamensvariant: «konstruer selv et integral som løses med substitusjonen u = …» — fasit regner baklengs fra du.
- **Frekvens:** 20/21; typisk 2–4 delpunkter/flervalg per sett.
- **Omskrevet eksempel:** «Beregn det ubestemte integralet av (4x+5)/(x²+4x+5).»

### F. Uegentlige integraler — konvergens
- **Krav:** To likestilte metoder, begge dokumentert i fasit: **direkte sammenligning** (klem integranden, f.eks. 0 < arctan x/x² < (π/2)/x²) eller **grensesammenligningstest** («GS-testen»: L = lim f/g med 0 < L < ∞ ⇒ samme skjebne). Sammenligningsintegralet skal **navngis eksplisitt** som konvergent/divergent p-integral — og i flere fasiter regnes p-integralet faktisk ut. Direkte beregning føres alltid med lim-notasjon på grensen («sett inn ∞» godtas ikke). Begge endepunkt-singulariteter må identifiseres (2008-flervalg hadde to).
- **Frekvens:** 17/21.
- **Omskrevet eksempel:** «Avgjør om integralet av 1/(x² − sin x) fra 1 til uendelig konvergerer.»

### G. Komplekse tall
- **Krav:** abc-formel med negativ diskriminant → rot på både a+ib- og polarform (tegn gjerne punktet i planet for argumentet); potenser og n-te røtter via de Moivre; **konjugatrotsetningen** for reelle polynomer: er 3+i rot, er 3−i det også → multipliser konjugatpar til reell kvadratisk faktor → polynomdivisjon for resten; reell + kompleks faktorisering skrives begge ut. Sjeldnere: kompleks likning med komplekse koeffisienter, argument-dobling («kvadratroten har argument π/3 ⇒ z har argument 2π/3»), kurver/områder i planet.
- **Frekvens:** 10/21 på slutteksamen, men **30 % av alle midtveisspørsmål** — samlet er dette pensumets mest testede enkelttema.
- **Omskrevet eksempel:** «Vis at 3+i er rot i det oppgitte tredjegradspolynomet, og finn både den komplekse og den reelle faktoriseringen.»

### H. Kontinuitet og deriverbarhet i ett punkt (signaturoppgaven)
- **Krav:** Stykkevis definert funksjon, typisk fra familien x^k·sin(1/x^m) eller x^k·cos(1/x^m) (gjenganger fire år på rad 2020–2023):
  - Kontinuitet: vis lim f(x) = f(a) med **skviseargument** (begrensetheten til sin/cos skal uttales) eller standardgrenser (sin x/x → 1); i skjøtepunkter regnes ensidige grenser hver for seg.
  - Deriverbarhet: **grensedefinisjonen** f′(a) = lim (f(a+h)−f(a))/h — å sette inn i en derivertformel er ikke gyldig bevis. Kjernefellen (sensorkommentar 2020, egen bevisdeloppgave 2021): **f kan være deriverbar i punktet selv om lim f′(x) ikke finnes** — den deriverte er da bare diskontinuerlig. Motsatt retning er et teorem: finnes lim f′(x) (og f er kontinuerlig), er f deriverbar der med f′(a) = grensen (bevises med MVT/L'Hôpital; var eksamensbevis i 2021).
  - Variant med ukjente konstanter a, b, c: sett opp kontinuitets- og derivertlikninger i hvert skjøtepunkt og løs systemet (tre betingelser i 2019).
  - Påbygg: integrerbarhet uten regning (begrenset + endelig mange diskontinuiteter, eller begrenset + stykkevis monoton — to teoremer, begge godtatt i 2019).
- **Frekvens:** 10/21 totalt; **5/6 siste seks år** — settets teoritunge sluttoppgave.
- **Omskrevet eksempel:** «La f(x) = x³cos(1/x²) for x ≠ 0 og f(0) = 0. Vis at f er kontinuerlig i 0, og avgjør om f er deriverbar der.»

### I. Eksistens- og teoribevis (skjæringssetning, Rolle, ε-δ)
- **Krav:** Tre arketyper:
  - **Skjæringssetningen**: vis at en likning har løsning — definer h = f − g, finn punkter med motsatt fortegn (grove overslag godtas), pek på kontinuitet, **navngi setningen**.
  - **Rolle/MVT med hjelpefunksjon**: «vis at det finnes c med f′(c) = f″(c)»-typen — konstruer g (f.eks. f − f′), vis like verdier i to punkter, sjekk forutsetningene eksplisitt, navngi Rolle, konkluder. Korollar-varianten: samme derivert + ett felles punkt ⇒ samme funksjon (2023); f′ ≡ 0 ⇒ konstant.
  - **ε-δ-bevis**: definisjonen skrives først i full generalitet; malen er «faktoriser, avgrens én faktor på et kontrollert intervall, velg δ = min(ε/K, 1)».
  - Toppnivå (2017): bygge førsteordens Taylor-restledd fra bunnen via delvis integrasjon og bruke det i et motsigelsesbevis med følger (f → 0 og f″ begrenset ⇒ f′ → 0).
- **Frekvens:** Teoribevis i en eller annen form i ~13/21 sett; Rolle/MVT-varianten i 3 av 6 siste år.
- **Omskrevet eksempel:** «f er to ganger deriverbar med f(0) = f′(0) og f(1) = f′(1). Vis at det finnes et punkt c i (0,1) der f′(c) = f″(c).»

### J. Fundamentalteoremet + kjerneregel
- **Krav:** d/dx ∫ᵍ⁽ˣ⁾ h(t) dt = h(g(x))·g′(x) — **kjerneregel-faktoren er hele poenget**; deretter gjerne produktregel for andrederivert. Varianter: variable grenser i begge ender (2010), Riemann-sum gjenkjent som integral (2004), g(x) = ∫f der f har kjent grenseoppførsel → eksisterer g″(0)? (2016, kjedet til L'Hôpital-delpunkt).
- **Frekvens:** 11/21.
- **Omskrevet eksempel:** «La F(x) være integralet av e^(3t) fra 1 til 2x². Finn F″(x).»

### K. Funksjonsdrøfting
- **Krav:** f′ og f″ med **fortegnsskjema** (tegnet fortegnslinje er forventet dokumentasjon), lokale/globale ekstremalpunkter, konveksitet/vendepunkter, asymptoter. Asymptoteargumentet skal være komplett: «kontinuerlig på hele R ⇒ ingen vertikale»; horisontale via grenser mot ±∞; skråasymptoter via polynomdivisjon eller utvikling. Kvalitativ variant: gitt graf av f′, skisser f og f″ (2009). Teorivariant: konveks ⇒ f′ voksende brukt i bevis (2023).
- **Frekvens:** 9/21 som egen oppgave; teknikken inngår implisitt i mange andre.
- **Omskrevet eksempel:** «Finn ekstremalpunkter, asymptoter og vendepunkter for f(x) = arctan(x²), og angi hvor funksjonen er konveks.»

### L. Induksjon (alltid via matrisepotenser)
- **Krav:** Regn M², M³/M⁴, gjett mønster for Mⁿ (eller M^(2n)), og bevis med full induksjonsstruktur: basis verifisert mot regningen, induksjonstrinn M^(k+1) = M^k·M elementvis. Ofte etterfulgt av grensebetraktning (langtidsfordeling) eller partall/oddetall-casedeling.
- **Frekvens:** 3/21 (2010, 2012, 2015). Ren tallteori-induksjon forekommer aldri i arkivet.
- **Omskrevet eksempel:** «Finn et uttrykk for A^(2n) og bevis formelen ved induksjon.»

### M. Relaterte rater og anvendt optimering
- **Krav:** Relaterte rater: modeller sammenhengen (Pytagoras eller tan-vinkel), deriver implisitt mhp. t, sett inn tallene, **tolk fortegnet i konklusjonen**. Optimering: modeller målfunksjonen fra figur/bibetingelse, deriver, begrunn at kandidaten er et globalt ekstremum. Begge sjangre er nå primært midtveisstoff (alltid siste numre, alltid med figur), men dukker opp på slutteksamen (fly 2016, fallskjerm 2017, kinosete-synsvinkel 2021).
- **Frekvens:** 6/21 slutteksamen; ~2 spørsmål per midtveissett.
- **Omskrevet eksempel:** «En observatør står 100 m fra landingspunktet til en fallskjermhopper som daler rett ned. Synsvinkelen endrer seg med 0,03 rad/s idet vinkelen er π/4. Hvor fort faller hopperen?»

### N. Jacobimatrise og deriverbarhet i flere variable
- **Krav:** Jacobimatrisen av partiellderiverte; deriverbarhet begrunnes med teoremet «kontinuerlige partiellderiverte ⇒ deriverbar» (fasit henviser til nummerert setning i pensumboka), eller — i skjerpet variant (2022) — direkte fra definisjonen: partiellderiverte via grensedefinisjonen og restleddsgrensen [F(x)−F(a)−M(x−a)]/|x−a| → 0.
- **Frekvens:** 4/21 (2016, 2018, 2022 + flervalg).
- **Omskrevet eksempel:** «Finn Jacobimatrisen til F i origo, og begrunn at F er deriverbar der.»

### Midtveisrepertoaret (flervalg, 6 min/oppgave)
Fast pakke som må automatiseres: polarform begge veier (2 spm, åpner settet), de Moivre-potens med vinkelreduksjon, n-te røtter, kompleks likning, rekonstruer reelt polynom fra oppgitte røtter, geometrisk mengde i planet, 2–3 grenser som dekker de ubestemte formene (1^∞, 0^0, ∞−∞ løses alle med logaritme-/konjugattriks + L'Hôpital), kjerneregel-tårn, logaritmisk derivasjon, derivert av invers funksjon i punkt (g′(b) = 1/f′(a)), skråasymptote til x·e^(k/x), konveksitetsintervall, rekursiv følge med fikspunkt, ett kvantor-/definisjonsspørsmål (distraktorene bytter kvantorrekkefølge), én relaterte rater- og/eller optimeringsoppgave med figur. Ferdighetsprofil: ~2/3 regnetempo, ~20 % definisjons-/teoremgjenkjenning, ~10 % modellering.

---

## 4. Sensorens krav

### Faste metaregler (fra oppgaveinstrukser og fasiter)
1. **Ubegrunnet svar = 0 poeng, selv om det er riktig** — ordrett instruks 2012–2016, videreført i mildere språkdrakt (og skjerpet igjen på hjemmeeksamenene). Dette er emnets viktigste enkeltregel.
2. **Teoremer skal navngis** når de bærer argumentet: skjæringssetningen, Rolle, fundamentalteoremet + kjerneregelen, sammenlignings-/grensesammenligningstesten, skviseargumentet, «det ≠ 0 ⇔ inverterbar», L'Hôpital — fasitene markerer til og med ubestemt form ([0/0], [∞/∞]) **før** hver L'Hôpital-anvendelse. Henvisning til nummererte setninger i pensumboka aksepteres og brukes i fasit.
3. **Føringsstandard**: substitusjoner bokføres (u, du/dx, dx, nye grenser); delvis integrasjon dokumenterer u/v′-valget; fortegnsskjema tegnes for monotoni/konveksitet; uegentlige integraler føres med eksplisitt lim; svaret avsluttes med verbal konklusjonssetning (fasit understreker sluttsvaret).
4. **Delpunktgjenbruk er designet inn**: fasitene skriver bokstavelig «[svar a)]» som ledd i senere punkter, og instruksen gir rett til å bruke resultater fra ubesvarte punkter. Å gjenkjenne koblingen (f.eks. at en faktorisering fra a) gir determinantens nullpunkter i c)) er en del av det som måles.
5. **Definisjonen kreves der definisjonen etterspørres**: punktvis deriverbarhet skal vises med differansekvotienten — men merk at fasit 2019 selv brukte grense-av-derivert-kriteriet ved skjøting av C¹-uttrykk (lovlig når grensen finnes og kontinuitet er etablert). Boken bør lære begge og når hver er gyldig.
6. **Kalkulatorsnarveier underkjennes** der regning etterspørres (invers «ved regning», 2014); på hjemmeeksamen måtte all programbruk forklares, og forståelse premieres over maskinsvar.

### Hva som skiller karakternivåene
- **Bestått-sjiktet** henter poeng på de mekaniske delpunktene: gradient/retningsderivert, oppsett av overgangsmatrise, standard integrasjonsteknikk med dokumentert substitusjon, volumformel med riktig akse-metode.
- **Midtsjiktet** behersker i tillegg konvergensargumenter med navngitt sammenligningsintegral, komplett kjeding av integrasjonsteknikker, kontinuitetsdelen av signaturoppgaven, og determinant/inverterbarhets-resonnementet.
- **Toppsjiktet** kjennetegnes av: (i) korrekt bruk av **definisjoner** i deriverbarhets-spørsmål og kjennskap til oscillasjonsfellen (lim f′ finnes ikke ⇏ ikke deriverbar); (ii) fullførte **bevis** med hjelpefunksjon der forutsetningene sjekkes eksplisitt; (iii) å se delpunkt-koblingene og gjenbruke dem; (iv) presis håndtering av randtilfeller (partall/oddetall-casedeling, endepunkt-singulariteter, «minst/nøyaktig»-formuleringer); (v) i åpne oppgaver: ett gyldig eksempel med **verifikasjon av alle kravene** (eksempel uten verifikasjon er ikke fullt svar).
- **Alternative løsninger honoreres konsekvent**: trippelprodukt vs. determinant, direkte vs. grensesammenligning, polynomdivisjon vs. algebraisk omskriving, to ulike integrerbarhetsteoremer — og ved tvetydig oppgavetekst fikk begge veldefinerte tolkninger full skår med korrekt gjennomføring (2018). Fasit 2014 dokumenterer også at teoretiske subtiliteter utenfor kjernen eksplisitt «ikke kreves til eksamen».

---

## 5. Typiske feil (dokumentert i fasiter/sensorkommentarer eller bygget inn som distraktorer)

1. **Deriverbarhet «bevist» med derivertformel**: å derivere uttrykket og ta grensen i stedet for å bruke differansekvotienten — og spesielt å konkludere «ikke deriverbar» fordi lim f′(x) ikke finnes (eksplisitt sensoradvarsel 2020; fenomenet var eksamensoppgave 2021, 2022).
2. **Feil metode for rotasjonsaksen**: skiveformel om y-aksen eller skall om x-aksen; å glemme å tegne/forstå området før oppsettet.
3. **Konvergenspåstand uten navngitt sammenligningsobjekt**: «det går mot null» uten p-integral-referanse; eller å «sette inn uendelig» i stedet for å føre grensen.
4. **Glemte faktorer**: kjerneregel-faktoren g′(x) i fundamentalteorem-oppgaver; 1/6 i pyramidevolum; nye integrasjonsgrenser ved substitusjon i bestemte integraler.
5. **Matrise satt opp etter magefølelse**: å ikke utlede radene fra rekursjonslikningene — radene bytter lett plass (kolonnene leses feil vei); fasit krever begrunnelse rad for rad.
6. **Unormalisert vs. normalisert retningsvektor**: normalisere når definisjonen f′(a;r) = ∇f·r gjelder direkte, eller motsatt — la være å normalisere når oppgaven ber om retningsderivert i «retningen til» en vektor/enhetsvektor.
7. **Ensidige grenser hoppes over** i skjøtepunkter — kontinuitet «sjekkes» bare fra én side, eller skjøtebetingelsene (verdi + derivert) blandes.
8. **Begrunnelse mangler på «opplagte» steg**: begrensethetsargumentet i skviseoppgaver (|cos| ≤ 1 skal uttales), kontinuitet før skjæringssetningen, forutsetningene før Rolle, [0/0]-sjekken før L'Hôpital.
9. **Kvantorfeller på midtveis**: distraktorer med byttet kvantorrekkefølge, forvekslede ε/δ-roller, «grensene fra begge sider er like ⇒ kontinuerlig» (glemmer f(a)), forveksling av «grense finnes» og «funksjonsverdi finnes».
10. **Polarform-slurv**: argument i feil kvadrant, negativ modulus godtatt, vinkel ikke redusert mod 2π ved høye potenser.
11. **Åpne oppgaver uten verifikasjon**: eksempel-følgen/-integralet/-funksjonen oppgis uten at alle kravene sjekkes eksplisitt.
12. **Tidsfellen på midtveis**: ~6 min per flervalgsoppgave; lange utregninger på 2-poengsoppgaver stjeler tiden fra 3-poengsoppgavene bakerst (teori + modellering).

---

## 6. Teorem- og notasjonsapparat

### Må beherskes aktivt (kunne anvende, navngi og delvis bevise)

**Analyse:**
- **Skviseteoremet** — arbeidshesten i alle x^k·sin/cos(1/x^m)-oppgaver; begrensetheten skal uttales.
- **Standardgrenser**: sin x/x → 1, x/sin x → 1, veksthierarkiet (ln ≪ potens ≪ eksponential), e-grensene via logaritmetriks.
- **L'Hôpital** med eksplisitt [0/0]/[∞/∞]-markering før hver bruk; alle ubestemte former omskrives dit (logaritme for 1^∞/0^0/∞^0, fellesnevner for ∞−∞).
- **Skjæringssetningen** (eksistens av løsning; hjelpefunksjon + fortegnsskifte + kontinuitet + navn).
- **Ekstremverdisetningen** og «monoton + begrenset ⇒ konvergent» (kompletthetsaksiomets arbeidsform; teoriutsagn på midtveis).
- **Middelverdisetningen og Rolles teorem** — aktivt: hjelpefunksjonskonstruksjon, forutsetningssjekk, korollarene (f′ ≡ 0 ⇒ konstant; samme derivert ⇒ samme funksjon opp til konstant; f′ voksende ⇔ f konveks).
- **Grense-av-derivert-setningen**: f kontinuerlig i a, lim f′(x) = b finnes ⇒ f′(a) = b (var eksamensbevis 2021); og moteksempel-familien som viser at implikasjonen ikke kan snus.
- **ε-δ-definisjonene** av grense og kontinuitet, inkl. ensidige og uendelige varianter, negasjon, og det kvantitative «velg δ = min(·,·)»-mønsteret.
- **Derivert av omvendt funksjon**: (f⁻¹)′(b) = 1/f′(a) — årviss på midtveis.
- **Analysens fundamentalteorem** + kjerneregel for variable grenser.
- **Integrerbarhetsteori**: Riemann/Darboux-kriteriet med trappesummer; «begrenset + endelig mange diskontinuiteter ⇒ integrerbar»; «begrenset + stykkevis monoton ⇒ integrerbar».
- **Sammenligningstest og grensesammenligningstest** for uegentlige integraler + p-integralenes konvergensstatus (p > 1 konvergerer på [1,∞); speilvendt i 0).

**Komplekse tall:**
- Polarform re^(iθ) begge veier med kvadrantbevissthet; **de Moivre** for potenser og n-te røtter (n røtter jevnt fordelt på sirkel); **konjugatrotsetningen** for reelle polynomer + paring til reelle kvadratiske faktorer; abc-formelen også med komplekse koeffisienter; geometrisk tolkning av |z−a| (sirkler, halvplan, annulus).

**Lineær algebra / flervariabel (slik kurset bruker det):**
- Determinant ved kofaktorutvikling; «inverterbar ⇔ det ≠ 0»; det(AB) = det A·det B; invers 2×2; areal/volum som |det|; kryssprodukt og skalartrippelprodukt; pyramidefaktoren 1/6.
- ∇f, retningsderivert f′(a;r) = ∇f(a)·r (kursets konvensjon: gjelder ubetinget, også unormalisert r), «gradienten peker dit f vokser raskest, med rate |∇f|»; Jacobimatrise; «kontinuerlige partiellderiverte ⇒ deriverbar»; deriverbarhetsdefinisjonen i flere variable (lineariseringsrestledd).

### Må forstås, men testes sjelden/aldri i arkivet
- **Induksjonsbevis** (kun matrisepotens-konteksten; full basis/trinn-struktur når det kommer).
- **Taylorpolynom med restledd** — arkivet tester det bare som teorioppgave bygget fra bunnen (2017) og implisitt verktøy (2023); står i gjeldende emnebeskrivelse og må dekkes i boken.
- **Uendelige rekker og konvergenstester, differensialligninger** — 0 forekomster i hele arkivet (se funn 2 i del 2); dekkes fordi emnebeskrivelsen krever det, med standardmetoder (sammenlignings-/forholds-/integraltest; separable og lineære 1. ordens), men uten arkivbelegg for oppgavesjangre.
- Mengdetopologi i R² (åpen/lukket), flervariable grenser, nivåkurver, klassifisering av stasjonære punkter i to variable — levde i 2003–2011-settene, borte etter 2012 (antatt pensumflytting til oppfølgeremnet).

### Notasjonskonvensjoner boken bør speile
- f′(a; r) for retningsderivert; ∇f for gradient; M^k for matrisepotens; overgangsmatriser oppstilt så x_{n+1} = M x_n (rader = «mottaker»).
- Fasitspråket: «GS-testen», «p-integral», substitusjonsbokser, fortegnsskjema, understreket sluttsvar med konklusjonssetning.

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (bærer begge eksamener)
1. **Gradient/retningsderivert-pakken** — 100 % frekvens på slutteksamen, alltid tidlig, billige poeng med kjent oppskrift (inkl. normaliseringsregelen og «raskest vekst»-formuleringen).
2. **Integrasjonsteknikk-repertoaret med føringsstandard** — 95 % frekvens; kjeding av substitusjon/delvis/delbrøk/fullført kvadrat, med bokført substitusjon og grenseskifte.
3. **Komplekse tall komplett** — dominerer midtveis (30 % av spørsmålene, 1/3 av karakteren) og går igjen på slutteksamen; polarform-tempo, de Moivre, konjugatrot-faktorisering.
4. **Signaturoppgaven kontinuitet/deriverbarhet i punkt** — 5/6 siste år; definisjonsbruk, skvis, oscillasjonsfellen, skjøteparametre. Dette er emnets tydeligste karakterskiller.
5. **Overgangsmatrise-sjangeren + determinant/inverterbarhet** — 9/12 siste år; modellering rad for rad, M^k, det-kriteriet med begge utfall.
6. **Uegentlige integraler med navngitt sammenligning** — 81 % frekvens.
7. **Omdreiningsvolum med riktig metodevalg** (skall om y-aksen som hovedtilfelle) — 71 %.

### Nivå 2 — må kunne (gir bredden i poengfangsten)
8. **Grensetempo for midtveis**: alle ubestemte former + L'Hôpital-disiplin ([0/0]-markering), konjugattriks, veksthierarki.
9. **Drøftingspakken**: fortegnsskjema, asymptoter (inkl. skråasymptote-familien x·e^(k/x)), konveksitet/vendepunkter.
10. **Bevis-verktøykassen**: skjæringssetning-malen, Rolle med hjelpefunksjon, ε-δ-malen «faktoriser, avgrens, δ = min» — stigende frekvens på slutteksamen (3/6 siste år for MVT/Rolle).
11. **Fundamentalteoremet + kjerneregel** (52 %) og integrerbarhetsteoremene.
12. **Determinant/volum-regning** inkl. pyramidefaktoren, invers-verifikasjon, matrisepotens-struktur.
13. **Derivert av invers, relaterte rater, optimering med figur** — midtveisens faste avslutningsoppgaver.
14. **Følger**: rekursjon + fikspunkt, monoton/begrenset-teoremet, skvis for følger.
15. **Kvantor-/definisjonstrening**: gjenkjenne og negere grense-/kontinuitetsdefinisjoner (distraktordesignet på midtveis).

### Nivå 3 — bør dekkes (lav arkivfrekvens, men pensum/karakterdifferensiering)
16. **Induksjon** (matrisepotens-konteksten; ingen forekomst siden 2015, men kan gjenoppstå).
17. **Taylorpolynom med restledd** — både som pensumkrav og fordi 2017-settet viste at restleddet kan bygges som teorioppgave; 2023 brukte det implisitt.
18. **Rekker og differensialligninger** — 0 arkivforekomster, men gjeldende emnebeskrivelse krever dem: dekk med standardmetoder og merk kapitlene som «ikke arkivbelagt»; sjekk eksamenssett fra 2024 og senere før boken kalibreres endelig.
19. **Jacobimatrise/deriverbarhet i R²** i skjerpet definisjonsvariant (2022-nivå).
20. **Åpne konstruksjonsoppgaver** («finn et eksempel …») med verifikasjonsdisiplin — gjenbrukbar hjemme-/digital-eksamenssjanger.

**Prognose for neste slutteksamen** (basert på 2018–2023-malen): 12–13 likt vektede delpunkter over 4 timer; åpning med gradient/retningsderivert; én overgangsmatrise-case med M^k og inverterbarhetsspørsmål; 2–3 integrasjonsteknikk-delpunkter (minst én kjede med to teknikker); ett uegentlig integral med sammenligningsargument; ett omdreiningsvolum (mest sannsynlig skall om y-aksen); signaturoppgaven om kontinuitet/deriverbarhet i punkt fra oscillasjonsfamilien, gjerne med en teorem-/bevisdel; pluss ett innslag fra {komplekse tall, FTC + kjerneregel, Rolle-bevis, drøfting}. **Prognose for midtveis**: 18–20 flervalg etter fast dramaturgi med komplekse tall som tyngste blokk. Usikkerhetsmoment: dersom rekker/Taylor/difflikninger reelt er kommet inn i pensum etter 2023, må begge prognoser justeres — verifiser mot første tilgjengelige sett etter reformen.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/UiO/MAT1100/`.

**Løsningsforslag/fasiter lest grundig (9):** `fasit/MAT1100_2012_fasit.pdf` … `fasit/MAT1100_2020_fasit.pdf` (2012–2020; 2015–2020 svært grundig, 2012–2014 grundig)

**Fasiter skumlest ved behov (9):** `fasit/MAT1100_2003_fasit.pdf` … `fasit/MAT1100_2011_fasit.pdf`

**Eksamensoppgaver lest grundig (8):** `eksamen/MAT1100_2016.pdf` … `eksamen/MAT1100_2023.pdf`

**Eksamensoppgaver skumlest for temaregistrering (14):** `eksamen/MAT1100_2003_del1.pdf`, `eksamen/MAT1100_2003_del2.pdf`, `eksamen/MAT1100_2004.pdf` … `eksamen/MAT1100_2015.pdf`

**Midtveiseksamener (16):** `midtveiseksamen/MAT1100_deleksamen_H2003.pdf` … `H2018.pdf` (H2012–H2018 grundig med opptelling av alle 138 spørsmål; H2003–H2011 skumlest)

**Fagbeskrivelse:** omskrevet sammendrag av UiOs emnebeskrivelse (scratchpad: `fagbeskrivelse-mat1100.md`).

**Merknader om kildene:**
- **Hull i arkivet:** Det finnes ingen fasit for slutteksamenene 2021–2023 og ingen fasit for midtveiseksamenene (`midtveiseksamen/fasit/` er tom). Metodekravene for 2021–2023 er derfor utledet fra oppgavetekstene + kontinuiteten i fasitpraksis 2012–2020. Midtveisarkivet stopper i H2018.
- **Duplikater:** PDF-ene `MAT1100_2015.pdf` … `MAT1100_2023.pdf` i rotmappen er identiske med filene i `eksamen/`.
- **Én eksamen per år:** MAT1100 undervises kun om høsten; alle sett er desembereksamener (midtveis i oktober). Det finnes ingen vår-/utsatt-sett i arkivet.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer i dette dokumentet er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasitformuleringer er gjengitt ordrett. Matematiske uttrykk og teoremer er standard fagnotasjon og ikke opphavsrettslig beskyttet tekst.

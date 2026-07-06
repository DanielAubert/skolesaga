# Eksamensanalyse: TMA4245 Statistikk (NTNU)

> Grunnlagsdokument for eksamensrettet lærebok. Bygger på ~49 eksamenssett fra arkivet 2009–2026 med tilhørende løsningsforslag: 26 sett lest grundig (oppgaver + løsninger, 2020–2026 komplett), 9 sett grundig på oppgavenivå (2016–2019), og ~19 eldre sett skumlest for temaregistrering (2009–2015). **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller løsningsforslag. Analysen er kvantitativ der kildene tillater det.
>
> **Viktig om arkivet:** TMA4245 (vår) og TMA4240 (høst) er tvillingemner med identisk pensum, felles kontinuasjonseksamen (august) og samme oppgavetradisjon. Arkivet inneholder begge (desember-settene er TMA4240-eksamener). Analysen behandler dem samlet — det er riktig for en lærebok, siden oppgavene er fullt utbyttbare.

---

## 1. Eksamensform og utvikling

### Fire epoker

| Periode | Form | Struktur | Kommentar |
|---|---|---|---|
| 2009–2019 | Skriftlig skoleeksamen på papir, **4 timer** (09–13, kont ofte 15–19). Hjelpemiddelkode C: «Tabeller og formler i statistikk» (Tapir/Akademika/Fagbokforlaget), godkjent enkel kalkulator; i deler av perioden også Rottmanns formelsamling, og fra ~2018–19 et **gult A5-ark med egne håndskrevne notater** | 2–4 store fortellingsoppgaver med 8–12 deloppgaver totalt; fast formulering om at **alle delpunkter teller likt** ved sensur | Klassisk NTNU-stil: én realistisk ingeniør-/naturvitenskapskontekst per oppgave som bygges ut gjennom deloppgavene (fordeling → estimering → inferens) |
| 2020–2021 (korona) | Digital hjemmeeksamen i Inspera, **alle hjelpemidler (kode A)**, 4 timer | 7–12 små oppgaver à 5 poeng (sum 100) + ofte én stor integrert oppgave (20–40 poeng); oppgavene randomisert i **4 parallelle varianter (A–D)** med ulike tall; Des 2021 kjørt i to separate sesjoner (morgen/ettermiddag) | Mange små, tekniske regneoppgaver og flervalg erstattet de store fortellingsoppgavene. Atypisk epoke — ikke dimensjonerende for boken |
| 2022–2023 | Tilbake til skoleeksamen, hybrid: **kortsvarsdel i Inspera** (kun tallsvar, typisk 2 desimalers presisjon, ingen begrunnelse) + **åpne oppgaver besvart på papir** (full begrunnelse) | 3–6 oppgaver; kortsvarsdelen dekker basisferdigheter, papirdelen dekker utledning/inferens | Hjelpemiddelkode C gjeninnført (tabeller + gult A5-ark + kalkulator) |
| 2024–2026 | Skoleeksamen 4 timer, kode C; veksler mellom ren papir (Mai25, Mai26) og Inspera-hybrid (Aug24, Des24, Aug25, Des25) | 4–9 oppgaver; typisk poengoppsett: små automatisk rettede oppgaver (5–10 p) + 2–4 store håndrettede oppgaver (10–30 p). Eksempler: Des25 = 4×10 p kortsvar + 3×30 p åpne (100 p); Mai24 = 3×5 p + 4×10 p (50 p); Aug24 = 60 p fordelt 12/9/9/10/10/10 | **Python/Monte Carlo-oppgaver er nå fast innslag** (se pkt. 2). Emnebeskrivelsens «bruk av programvare» testes reelt |

### Konstanter på tvers av alle epoker
- **4 timer** og bokstavkarakter hele veien.
- Formelsamlingen «Tabeller og formler i statistikk» er alltid tilgjengelig — eksamen tester **bruk og utledning**, ikke memorering av formler.
- Hver eksamen dekker begge søyler: sannsynlighetsteori (ca. 40–50 % av poengene) og statistisk inferens (ca. 50–60 %).
- Kontekstene er gjennomgående ingeniør- og naturvitenskapsnære: levetid til komponenter/lyspærer/kabler, vindmålinger, støy, flomhøyder, batterikapasitet, saltkonsentrasjon i fjorden, hydrologi, lakseoppdrett, medisin/vaksinasjon, boligpriser, sport.
- Den store oppgaven mot slutten er nesten alltid en **kjede**: definer modell → utled ML-estimator → egenskaper (forventningsretthet/varians) → konfidensintervall (ofte via pivotal) → hypotesetest (ofte med styrke) — samme historie hele veien.

### Utviklingstrekk 2023–2026 (viktigst for boken)
1. **Simulering/Python inn i varmen:** 8 av de 9 siste settene (Des23–Mai26) har minst én oppgave med Monte Carlo-simulering, inversjonsmetoden eller lesing/skriving av Python-kode (numpy). Dette fantes ikke før 2023.
2. **Ikke-parametrikk dukker opp:** fortegnstest (binomisk test på antall positive differanser) i Des24 og Mai24 — som supplement til t-testen på samme data.
3. **Feilforplantning (deltametoden)** brukt i Mai24 (Darcy-Weisbach-ligningen) og Des25 (halveringstid fra regresjonshelning).
4. **Eksotiske fordelinger med kjent oppskrift:** Gumbel (Des25, hundreårsflom), null-trunkert Poisson (Des24), Pareto (Mai21), Weibull (Mai22, Aug22, Des23) — alltid håndterbare med standardteknikkene (CDF-regning, ML, transformasjon til kjikvadrat).
5. **Styrkeberegning og dimensjonering** («hvor stor n for styrke 0,8/0,95?») er blitt nesten obligatorisk i den store testoppgaven.

---

## 2. Temafrekvens-tabell

Celleverdi = antall sett i perioden der temaet forekommer som minst én deloppgave. Periodene: 2009–15 (≈19 sett, skumlest — tall er nedre anslag), 2016–19 (9 sett), 2020–21 (7 sett), 2022–23 (6 sett), 2024–26 (8 sett). Totalt ≈49 sett.

| Tema | 09–15 (19) | 16–19 (9) | 20–21 (7) | 22–23 (6) | 24–26 (8) | **Gjenganger-score** |
|---|---|---|---|---|---|---|
| Normalfordeling: standardisering, lineærkombinasjoner (med kovarians), betingede sannsynligheter | 18 | 9 | 7 | 6 | 8 | **≈48/49 = 98 %** |
| Forventning/varians/kovarians, regneregler for lineærkombinasjoner | 18 | 8 | 7 | 6 | 8 | **≈47/49 = 96 %** |
| Hypotesetesting (z/t/kjikvadrat, p-verdi, forkastningsområde, konklusjon i ord) | 14 | 8 | 4 | 6 | 8 | **≈40/49 = 82 %** |
| Konfidensintervall (og prediksjonsintervall) | 15 | 8 | 5 | 6 | 7 | **≈41/49 = 84 %** |
| Punktestimering: ML-utledning, forventningsretthet, varians, estimator-sammenligning | 13 | 6 | 7 | 6 | 8 | **≈40/49 = 82 %** |
| Kontinuerlige fordelinger utenom normal (eksponensial dominerer; Weibull, gamma, beta, Gumbel, Pareto, egendefinerte tettheter) | 14 | 6 | 7 | 6 | 6 | **≈39/49 = 80 %** |
| Diskrete fordelinger (binomisk, Poisson/Poisson-prosess, geometrisk, negativ binomisk, hypergeometrisk) | 12 | 6 | 6 | 4 | 6 | **≈34/49 = 69 %** |
| Betinget sannsynlighet / total sannsynlighet / Bayes / uavhengighet | 10 | 4 | 6 | 4 | 5 | **≈29/49 = 59 %** |
| Enkel lineær regresjon (LS-estimering, inferens for helning, prediksjon, residualplott) | 11 | 5 | 2 | 4 | 7 | **≈29/49 = 59 %** — men 11 av de 12 siste settene |
| Transformasjon av variable (CDF-teknikk, Jacobi, MGF; spesielt 2X/β → kjikvadrat) | 7 | 5 | 6 | 6 | 5 | **≈29/49 = 59 %** |
| Simultanfordeling / marginal / betinget fordeling (tabeller og tettheter) | 10 | 2 | 5 | 3 | 4 | **≈24/49 = 49 %** |
| Kombinatorikk (uordnede/ordnede utvalg, multinomisk) | 6 | 2 | 6 | 1 | 4 | **≈19/49 = 39 %** |
| Deskriptiv statistikk / grafisk tolkning (boksplott, histogram, spredningsplott, Q-Q) | 3 | 4 | 5 | 2 | 3 | **≈17/49 = 35 %** |
| Teststyrke, type I/II-feil, dimensjonering av utvalgsstørrelse | 3 | 3 | 3 | 3 | 5 | **≈17/49 = 35 %** — kraftig økende |
| To utvalg: parret t-test / to-utvalgs-t / pooled / kombinert ML-estimator | 5 | 3 | 1 | 2 | 1 | **≈12/49 = 24 %** |
| Ordningsvariable: min/maks (serie-/parallellsystemer) | 4 | 1 | 2 | 3 | 1 | **≈11/49 = 22 %** |
| Sentralgrenseteoremet eksplisitt (formuler forutsetninger og resultat) | 3 | 2 | 1 | 2 | 2 | **≈10/49 = 20 %** |
| Monte Carlo / inversjonsmetoden / Python-kode | 0 | 0 | 0 | 1 | 7 | **8/49 totalt — men 8/9 sett siden des. 2023 ≈ 90 %** |
| Fortegnstest (ikke-parametrisk) | 0 | 0 | 0 | 0 | 2 | **2/49 — ny sjanger 2024** |
| Feilforplantning / deltametoden | 0 | 0 | 0 | 0 | 2 | **2/49 — ny sjanger 2024** |

**Viktigste funn:**
- **Inferens-kjeden er ryggraden:** ML → egenskaper → KI → test (→ styrke) forekommer som sammenhengende storoppgave i praktisk talt hvert sett siden 2016. Boken må bygges rundt denne kjeden, ikke rundt isolerte teknikker.
- **Eksponensialfordelingen er emnets kjæledegge** blant de ikke-normale: minneløshet, sum → gamma, transformasjonen 2X/β ~ χ²₂ og kjikvadrat-pivotalen 2ΣXᵢ/β ~ χ²₂ₙ for eksakt KI går igjen i minst 9 sett (Nov18, Mai21, Des22, Mai22, Aug22, Aug23, Aug24, Des25, Mai26) — dette er den hyppigste «vanskelige» gjengangeren i hele arkivet.
- **Regresjon er tilbake for fullt:** etter et hvileskjær under korona står enkel lineær regresjon i 11 av de 12 siste settene, ofte i varianten **uten konstantledd** (Y = βx) der tre estimatorer for β skal sammenlignes (Mai22, Aug22, Des23).
- **Python/MC er ikke lenger valgfritt:** siden desember 2023 har nesten hvert sett en oppgave der kandidaten skal lese, fullføre eller skrive numpy-kode (inversjonsmetoden, simulert p-verdi, simulert forventning/styrke, feilforplantning ved simulering).

---

## 3. Oppgavetype-katalog

De 15 sjangrene som faktisk går igjen, med krav og typisk plassering.

### A. Normal-regneoppgaven
- **Krav:** Standardisere og slå opp i Φ-tabellen; håndtere lineærkombinasjoner aX + bY med kovariansledd i variansen; betingede sannsynligheter P(X > a | X > b); gjenkjenne at P(X = x) = 0 for kontinuerlige variable; av og til gjenkjenne μ og σ direkte fra en oppgitt tetthetsformel (Des24, Des25).
- **Frekvens:** Nesten hvert sett, ofte som åpningsoppgave. Billige poeng som må sitte automatisk.
- **Omskrevet eksempel:** «X og Y er uavhengige og normalfordelte med oppgitte parametre. Finn sannsynligheten for at 2X + Y overstiger en gitt grense, og den betingede sannsynligheten P(Y − X ≤ 4 | Y − X > −3).»

### B. Fortelling → fordelingsvalg (diskret)
- **Krav:** Oversette en situasjonsbeskrivelse til riktig diskret modell — binomisk (fast antall forsøk), Poisson/Poisson-prosess (hendelser i tid/rom; må kunne skalere raten λt og begrunne forutsetningene: uavhengige disjunkte intervaller, konstant rate), geometrisk (ventetid til første suksess), negativ binomisk (til k-te suksess), hypergeometrisk (uten tilbakelegging). Deretter punkt-, hale- og betingede sannsynligheter, ofte med kumulativ tabell.
- **Frekvens:** ≈69 % av settene. Poisson-prosessen alene i ~20 sett (viltpåkjørsler Des25, app-varsler Mai22/Aug23, kundeankomster Mai20, nettsidebesøk Mai16, fotballmål, vulkanutbrudd …).
- **Omskrevet eksempel:** «Dyrepåkjørsler langs en banestrekning skjer som en Poisson-prosess med ni per år. Hva er forventning og standardavvik for antall påkjørsler på to år, og hvilke antagelser hviler modellen på?»

### C. Egendefinert tetthet/CDF-oppgaven
- **Krav:** Gitt en tetthet (ofte f(x) = 3x², stykkevis lineær, eller 3/x⁴): bestem normeringskonstant, utled F(x), regn P-er og betingede sannsynligheter, finn median/kvantiler ved å løse F(m) = p, beregn E[X], E[X²], Var[X] ved integrasjon.
- **Frekvens:** Svært høy — dette er standardtreningen i kontinuerlig sannsynlighet (Nov18, Mai18, Jun23, Aug23, Des25, Nov20, Aug21 m.fl.).
- **Omskrevet eksempel:** «En andel er beskrevet med tettheten f(x) = 3x² på (0,1). Finn forventning, varians, medianen og sannsynligheten for at X ligger under 1/2.»

### D. Transformasjonsoppgaven
- **Krav:** Fordelingsfunksjonsteknikken (CDF-metoden): F_Y(y) = P(g(X) ≤ y) → deriver. MGF-teknikken: identifiser fordelingen til en sum/lineærkombinasjon fra momentgenererende funksjon (Bernoulli-sum → binomisk Mai24; sum av eksponensiale → gamma; kvadratsum av standardnormale → kjikvadrat). Kroneksempelet: vis at 2X/β (eksponensial) eller tilsvarende uttrykk for gamma/Weibull/Gumbel/Pareto er kjikvadratfordelt.
- **Frekvens:** ≈59 %, stabilt. Nesten alltid som bro til konfidensintervallet i sjanger H.
- **Omskrevet eksempel:** «La X være eksponensialfordelt med forventning β. Vis ved fordelingsfunksjonsteknikken at 2X/β er kjikvadratfordelt med 2 frihetsgrader, og angi fordelingen til 2ΣXᵢ/β.»

### E. Bayes-/totalsannsynlighetsoppgaven
- **Krav:** Definere hendelser presist med egne symboler, sette opp loven om total sannsynlighet og Bayes' formel, og tolke svaret. Klassisk kontekst: diagnostisk test (sensitivitet/spesifisitet → sannsynlighet for sykdom gitt positiv test, Des25 covid-test, Aug17 kvalitetskontroll, Aug19 genetikk), eller oppdatering av produksjonslinje-tro gitt observasjon (Nov17).
- **Frekvens:** ≈59 % (inkl. enklere betinget-sannsynlighet). Ren Bayes ca. hvert tredje sett.
- **Omskrevet eksempel:** «En test fanger opp 70 % av de smittede og gir 1 % falske positive; 3 % av befolkningen er smittet. Hva er sannsynligheten for at en person med positiv test faktisk er smittet?»

### F. Kombinatorikk-oppgaven
- **Krav:** Uordnede utvalg (binomialkoeffisienter), multiplikasjonsprinsippet, multinomiske koeffisienter, hypergeometrisk telling. Kontekster: kortstokk (pokerhender: hus Des25, straight flush Mai21), lag-uttak (fotballlag Aug25), kuler fra urne, gruppering av objekter (Mai26).
- **Frekvens:** ≈39 %; sterkt tilbake etter 2024 (4 av 8 siste sett).
- **Omskrevet eksempel:** «Av en tropp på 20 med 3 keepere, 7 forsvarere og 10 angripere skal det settes opp et lag på 11 med nøyaktig én keeper, fire forsvarere og seks angripere. Hvor mange lag er mulige?»

### G. ML-utledningsoppgaven (med estimatorvurdering)
- **Krav:** Skrive opp likelihood for n uavhengige observasjoner, ta logaritme, derivere, sette lik null, løse — og **kontrollere/kommentere** at det er et maksimum. Deretter: er estimatoren forventningsrett? Finn variansen. Ofte: sammenlign to–tre foreslåtte estimatorer via forventningsretthet og varians/MSE og velg den beste med begrunnelse (Des23, Aug22, Mai22, Aug21, Nov20, Jun23 med Bayes-estimator som kontrast). Varianter: ML med data fra to kilder som deler parameter (kombinert likelihood: Des22, Aug23, Mai24), ML under bibetingelse (μ_A = 2μ_B, Aug24), ML som krever Taylor-tilnærming/iterasjon (null-trunkert Poisson, Des24).
- **Frekvens:** ≈82 % av settene har punktestimering; eksplisitt ML-utledning i godt over halvparten av settene siste ti år. **Dette er emnets viktigste utledningsferdighet.**
- **Omskrevet eksempel:** «Levetidene er gammafordelte med kjent formparameter 5 og ukjent skala b. Utled ML-estimatoren for b fra n målinger, vis at den er forventningsrett, og finn variansen dens.»

### H. Konfidensintervall-konstruksjonen
- **Krav:** Tre nivåer: (i) standardintervall for μ med z (kjent σ) eller t (ukjent σ, riktige frihetsgrader); (ii) intervall for σ²/σ med kjikvadrat; (iii) **pivotal-metoden**: finn en størrelse med kjent fordeling uavhengig av parameteren (typisk 2ΣXᵢ/β ~ χ²₂ₙ), sett opp dobbeltulikhet, løs for parameteren. Ofte etterspurt: sammenlign eksakt kjikvadrat-KI med normaltilnærmet KI (Aug25: det eksakte er bredere ved liten n), transformér KI-et til en avledet størrelse via monoton funksjon (hundreårsflom Des25). Prediksjonsintervall for ny observasjon i regresjon og for gjennomsnitt (Jun23, Nov18, Des12).
- **Frekvens:** ≈84 %.
- **Omskrevet eksempel:** «Bruk at 2ΣXᵢ/β er kjikvadratfordelt med 2n frihetsgrader til å utlede et eksakt 95 %-konfidensintervall for β, og sammenlign bredden med intervallet basert på sentralgrenseteoremet.»

### I. Hypotesetest-oppgaven (full pakke)
- **Krav:** Løsningsforslagene følger et fast rituale som kandidaten må beherske: (1) formuler H₀ og H₁ i parametre — retningen på H₁ skal begrunnes fra situasjonen; (2) velg testobservator og **oppgi fordelingen under H₀** (z, t med riktige frihetsgrader, kjikvadrat for varians, eksakt binomisk/Poisson for små utvalg); (3) sjekk forutsetninger (normalitet, uavhengighet, np₀ og n(1−p₀) store nok for normaltilnærming); (4) forkastningsområde ved gitt α **eller** p-verdi; (5) tallfest og **konkluder i ord i kontekst**. Deretter ofte: (6) beregn styrken ved en gitt alternativverdi, eller finn n som gir ønsket styrke (Aug21: n ≥ 1303; Des25: hvilken rate kreves for styrke 0,95). Testtypene som forekommer: t-test ett utvalg (hyppigst), z-test for andel, kjikvadrat-test for varians (Jun23, Aug25, Aug13), eksakt Poisson-test (Des25, Mai18), parret t-test (Aug20, Mai12, Mai14), to-utvalgs-t (Aug17, Nov18, Aug23), test for regresjonshelning, fortegnstest (Des24, Mai24).
- **Frekvens:** ≈82 %; alltid tungt vektet (den store håndrettede oppgaven).
- **Omskrevet eksempel:** «Skadeindikatoren måles i 15 merder før og etter avlusing. Sett opp hypoteser for om behandlingen forverrer velferden, gjennomfør en parret t-test på 5 %-nivå, og suppler med en fortegnstest — kommenter hvorfor konklusjonene kan sprike.»

### J. Regresjonsoppgaven
- **Krav:** Modellen Y = α + βx + ε med normalfordelte, uavhengige feil med konstant varians. Ferdigheter: regne ut minste kvadraters estimater fra oppgitte summer (Σ(xᵢ−x̄)², Σ(xᵢ−x̄)(yᵢ−ȳ)), utlede LS-estimatorene og vise at ML gir det samme (Mai18, Des23), E og Var for β̂, KI og hypotesetest for helningen, prediksjon i x₀ med KI/PI (og hvorfor usikkerheten er minst i x̄ og stor ved ekstrapolering — Des24), **tolke residualplott** (heteroskedastisitet, krumning, normalitet; nesten alltid en deloppgave), transformerte modeller (ln-lineær koffeinmodell Des25, cosinus-ledd Des22, polynomledd Aug25, to-nivå intercept Des13). NTNU-favoritt: **regresjon uten konstantledd** Y = βx der tre estimatorer (ΣxY/Σx², (1/n)Σ(Y/x), Ȳ/x̄) sammenlignes på forventningsretthet og varians (Mai22, Aug22, Des23).
- **Frekvens:** ≈59 % totalt, 11 av 12 siste sett. Alltid som stor oppgave.
- **Omskrevet eksempel:** «For 20 målepunkter er summene oppgitt. Beregn estimatene for skjæringspunkt og helning, konstruer et 90 %-intervall for helningen, prediker verdien i x₀ = 30, og forklar hvorfor prediksjonen er mer usikker der enn i gjennomsnittspunktet.»

### K. Ordningsvariabel-oppgaven
- **Krav:** Min/maks av uavhengige variable via produktregelen: P(maks ≤ y) = ΠF(y), P(min > y) = Π(1−F(y)). Kontekst: serie-/parallellkoblede komponenter (Aug20: fem i serie; Des24: tre lyspærer i parallell, levetid til siste slukner), første feil blant n (Mai22, Aug22 vinddata), maks av geometriske (Des22).
- **Frekvens:** ≈22 %, men høyere i 2022–24. Gir differensiering på toppkarakterene.
- **Omskrevet eksempel:** «Tre lamper har uavhengige eksponensialfordelte levetider. Utled fordelingsfunksjonen og tettheten til tiden det tar før alle tre har sloknet.»

### L. Simultanfordelingstabellen
- **Krav:** Fra en diskret simultantabell: marginaler, betingede sannsynligheter, E(X), E(XY), kovarians/korrelasjon (også for lineærkombinasjoner: corr(5X−2, 10Y+3), Jun23), E[g(X,Y)] fra definisjonen, og **uavhengighetssjekk** (P(x,y) = P(x)P(y) for alle celler — motbevises av én celle). Kontinuerlig variant: finn marginaltetthet ved integrasjon, deretter betinget tetthet.
- **Frekvens:** ≈49 %.
- **Omskrevet eksempel:** «Tabellen angir simultanfordelingen til X og Y. Finn P(Y = 2), E(X), og avgjør med begrunnelse om X og Y er uavhengige.»

### M. Deskriptiv/grafisk tolkningsoppgave
- **Krav:** Beregne gjennomsnitt, median, empirisk varians/standardavvik fra små datasett (med riktig n−1); lese median/kvartiler ut av histogram og boksplott; sammenligne grupper på beliggenhet/spredning/skjevhet; vurdere korrelasjon og avhengighet fra spredningsplott; bruke Q-Q-plott til normalitetsvurdering (Aug16).
- **Frekvens:** ≈35 %; oftest som kortsvar/flervalg i Inspera-delen.
- **Omskrevet eksempel:** «Boksplottene viser prisfordelingen for biler med null, én og to kollisjonsputer. Beskriv hvordan median og spredning endres, og hva det betyr for regresjonsmodellens antagelser.»

### N. Monte Carlo-/Python-oppgaven (NY, siden des. 2023)
- **Krav:** Tre undertyper: (1) **Inversjonsmetoden** — utled F⁻¹(u) analytisk og skriv/fullfør en numpy-funksjon som simulerer fra fordelingen (Aug25, Des23, Aug24, Des25 Gumbel); (2) **tolke gitt kode** — hvilken fordeling genererer koden, hva estimerer den (Des23); (3) **simulering som inferensverktøy** — estimer en sannsynlighet/forventning/p-verdi/styrke ved gjentatte trekk og gjennomsnitt av indikatorer (Des23 simulert p-verdi, Mai25 styrke, Des24 hvilken lyspære varer lengst, Mai24 feilforplantning ved simulering, Mai26 forventningsrett MC-estimat). Løsningene krever korrekt, kjørbar numpy-kode med riktig bruk av `np.random.uniform`/`normal`, vektorisering og `np.mean`/`np.var(…, ddof=1)`.
- **Frekvens:** 8 av 9 sett siden des. 2023. **Må ha eget kapittel i boken.**
- **Omskrevet eksempel:** «Tettheten er f(x) = 3/x⁴ for x > 1. Finn fordelingsfunksjonen og dens inverse, og skriv en Python-funksjon som trekker n realisasjoner fra fordelingen ved inversjonsmetoden.»

### O. Kortsvar/flervalg (Inspera-delen)
- **Krav:** Eksakte tallsvar med 2–3 desimaler (avrunding straffes), eller velge riktig utsagn. Gjengangere: Venndiagram-identiteter, «er hendelsene disjunkte/uavhengige?» (typisk felle: P(A)=0,2 og P(B)=0,9 kan ikke være disjunkte), tolkning av p-verdi og konfidensintervall (eksplisitte flervalgsspørsmål om hva de betyr), P(Y = y) = 0 for kontinuerlig Y, avlesing av histogram/boksplott.
- **Frekvens:** Alle Inspera-hybridsett 2022–2025.

---

## 4. Sensorens krav (fra løsningsforslagene)

Løsningsforslagene er skrevet av faglærer og viser hva som forventes av en fullgod besvarelse:

1. **Definer stokastiske variable eksplisitt før du regner.** Fasit begynner konsekvent med «La X = antall … , da er X ~ …» med parametre. Svar uten definert modell regnes som ufullstendige.
2. **Oppgi antagelser.** Uavhengighet, fordelingsantagelse og gyldighetsvilkår skal nevnes der de brukes: normaltilnærmingens krav (np₀ og n(1−p₀) tilstrekkelig store — eksplisitt sjekket i fasit Aug21/Mai20), Poisson-prosessens forutsetninger (Des25), regresjonens feilantagelser.
3. **Hypotesetestens rituale er obligatorisk** (se sjanger I): H₀/H₁ i parametre, testobservator **med fordeling under H₀**, α, forkastningsområde eller p-verdi, tallfesting, konklusjon i ord i kontekst. Fasit godtar både kritisk-verdi- og p-verdi-varianten, men krever at én gjennomføres komplett.
4. **Vis mellomregninger.** Integraler regnes ut med mellomledd, standardiseringer vises, tabelloppslag angis (hvilken tabell, hvilke frihetsgrader, hvilken kvantil — t₁₈;0,05 = 1,734 osv.).
5. **ML-utledninger skal ha alle trinn:** likelihood → log-likelihood → derivasjon → løsning; toppbesvarelser kommenterer at kritisk punkt er maksimum.
6. **Riktig fordeling til riktig situasjon:** t (ikke z) når σ er estimert; riktige frihetsgrader (n−1, n−2 i regresjon, 2n i eksponensial-pivotalen — Des23 tester eksplisitt forskjellen på χ²ₙ og χ²ₙ₋₁ når β̂ erstatter β); parret (ikke to-utvalgs) design når målingene hører sammen (Aug20 bruker en hel deloppgave på nettopp dette skillet).
7. **Konklusjoner i ord.** Et tall uten tolkning gir ikke full uttelling; fasit avslutter alltid med en setning på norsk om hva resultatet betyr («det er ikke grunnlag for å hevde at …»).
8. **I Inspera-kortsvarene er kun tallet riktig eller galt** — presisjonskravet (2–3 desimaler) håndheves strengt; i papirdelen er metoden det som teller, og små regnefeil med riktig metode straffes mildt.
9. **Python-kode skal være korrekt og kjørbar** (numpy-idiomatisk); fasit viser komplette funksjoner, og delvis kode med riktig struktur gir delvis uttelling.
10. **Grafisk tolkning skal begrunnes i mønstre:** «variansen øker med x» / «residualene viser krumning» — ikke bare «ser bra ut».

**Karakterskiller (utledet av oppgavestrukturen):** Kortsvars-/åpningsoppgavene (standardisering, tabelloppslag, enkle P-er) definerer bestått-nivået. Midtsjiktet mestrer standard KI/test med riktig fordeling og frihetsgrader. Toppsjiktet skiller seg på: pivotal-utledninger, styrke- og dimensjoneringsberegninger, estimator-sammenligninger med MSE-argument, transformasjonsbevis, og de nye simulerings- og feilforplantningsoppgavene.

---

## 5. Typiske feil

Feilmønstre som løsningsforslagene eksplisitt adresserer eller bygger feller rundt:

1. **z der det skal være t** — bruke normalkvantil når σ er estimert fra data, eller feil frihetsgrader (n i stedet for n−1; n−1 i stedet for n−2 i regresjon).
2. **Behandle parrede data som to uavhengige utvalg** — Aug20 og Mai24 er konstruert for å avsløre dette; differansene D = Y − X skal analyseres som ett utvalg.
3. **Glemme å sjekke normaltilnærmingens gyldighet** (np og n(1−p) store nok) — fasit gjør denne sjekken hver gang.
4. **Blande tetthet og sannsynlighet:** tro at P(X = x) = f(x) for kontinuerlig X (eksamen spør eksplisitt: P(Y = 3) = 0, P(A ∩ B) ≠ f(3) — Mai21, Jun23, Des24).
5. **Disjunkt vs. uavhengig:** anta at disjunkte hendelser er uavhengige (de er det aldri når begge har positiv sannsynlighet); overse at P(A) + P(B) > 1 utelukker disjunkthet (Aug25-felle).
6. **Feil retning eller feil oppsett i H₁** — retningen skal følge av det situasjonen ber om å påvise; ensidig/tosidig-valget påvirker både kritisk verdi og p-verdi.
7. **Mistolke p-verdi og konfidensintervall** — flervalgsoppgavene tilbyr klassiske feiltolkninger («sannsynligheten for at H₀ er sann», «95 % sannsynlighet for at μ ligger i intervallet») som distraktorer (Mai20, Aug20, Aug19).
8. **Glemme kovariansleddet** i Var(aX + bY) når X og Y er korrelerte — eller ta med det når de er uavhengige (kovariansen oppgis ofte nettopp for å teste dette).
9. **Minneløsheten misforstås** — enten glemmer man den (og regner langt) eller misbruker den på fordelinger som ikke har den (Weibull-oppgavene tester begge veier: Des23 spør om P(X ≥ 15 | X ≥ 12) nettopp der minneløshet IKKE gjelder).
10. **ML-slurv:** derivere uten logaritme først, glemme å løse fullstendig, ikke verifisere maksimum, eller forveksle estimator (stor bokstav, stokastisk) og estimat (tall).
11. **Forventningsretthet-slurv:** glemme å dele på riktig konstant (fasit i Des23 viser at ML-varianten σ̂² er forventningsskjev og at S² med n−1 korrigerer).
12. **Regresjon: ekstrapolering og feil intervall** — bruke konfidensintervall der prediksjonsintervall kreves, og prediksjon langt utenfor dataområdet uten forbehold (Des24 spør eksplisitt).
13. **Avrundingsfeil i Inspera-kortsvar** — for få desimaler eller avrunding i mellomregninger gir null på autorettede felt.
14. **Ordningsvariable:** addere i stedet for å multiplisere fordelingsfunksjoner for maks, eller bruke F der 1−F kreves for min.

---

## 6. Formel- og notasjonsapparat

### Hva som står i formelsamlingen (og derfor IKKE skal pugges)
«Tabeller og formler i statistikk» (Akademika/Fagbokforlaget) er alltid tillatt og inneholder: oversikt over alle standardfordelinger (punktsannsynlighet/tetthet, E, Var, MGF), kumulative tabeller for binomisk og Poisson, kvantiltabeller for standardnormal (Φ), t, kjikvadrat og F, standardformler for konfidensintervall og tester (ett og to utvalg), og regresjonsformlene. I tillegg: gult A5-ark med **egne håndskrevne notater** (siden ~2018–19) og godkjent enkel kalkulator. **Konsekvens for boken:** treningen skal ligge på å *velge* riktig formel/tabell, *bruke* den korrekt (riktige frihetsgrader og kvantiler) og *utlede* det som ikke står der (ML, pivotaler, transformasjoner) — ikke på memorering.

### Må beherskes aktivt (utledes/regnes uten oppskrift)

**1. Sannsynlighetsgrunnlag:** addisjonsregelen P(A∪B) = P(A) + P(B) − P(A∩B); betinget sannsynlighet P(A|B) = P(A∩B)/P(B); total sannsynlighet og Bayes; uavhengighetsdefinisjonen; kombinatorikk (nCk, multinomisk, multiplikasjonsprinsipp).

**2. Fordelingskatalogen med bruksområde:**
- Diskret: binomisk(n, p); Poisson(λt) med prosessforutsetninger; geometrisk/negativ binomisk; hypergeometrisk.
- Kontinuerlig: uniform; **eksponensial(β)** med minneløshet P(X > s+t | X > t) = P(X > s) og koblingene sum → gamma(n, β) og 2X/β ~ χ²₂; gamma; normal; kjikvadrat (som gamma-spesialtilfelle og som kvadratsum av standardnormale); Weibull (via CDF); og «oppskriftsfordelinger» gitt i oppgaven (Gumbel, Pareto, beta, null-trunkert Poisson) som skal håndteres med standardteknikkene.

**3. Moment-regnereglene:** E(aX + bY) = aE(X) + bE(Y); Var(aX + bY) = a²Var(X) + b²Var(Y) + 2abCov(X, Y); Cov/corr-definisjoner og skalering; E[g(X)] = ∫g f; for simultantabeller E[g(X,Y)] = ΣΣ g·p.

**4. Transformasjonsteknikkene:** CDF-metoden (F_Y(y) = P(g(X) ≤ y), deriver); MGF-argumenter for summer (M_ΣX = ΠM_X); inversjonsmetoden X = F⁻¹(U) for simulering.

**5. Sentralgrenseteoremet:** presis formulering (uavhengige, identisk fordelte, endelig varians → X̄ tilnærmet normal) og bruken: normaltilnærming av binomisk/Poisson/gamma-estimatorer, asymptotisk normalitet for ML-estimatorer (Des23 3b spør eksplisitt om formulering + anvendelse).

**6. Inferens-kjeden (kjerneteknikken):**
- ML: L(θ) = Πf(xᵢ; θ) → l(θ) → l′(θ) = 0 → θ̂; forventningsretthet E(θ̂) = θ; Var(θ̂); MSE = Var + bias² for estimator-sammenligning.
- KI via pivotal: finn W(X, θ) med kjent fordeling, sett kvantiler rundt, løs for θ. Standardtilfellene: (X̄−μ)/(S/√n) ~ tₙ₋₁; (n−1)S²/σ² ~ χ²ₙ₋₁; 2ΣXᵢ/β ~ χ²₂ₙ.
- Test: se sjanger I; styrke = P(forkast H₀ | sann parameterverdi), og dimensjonering av n.
- Fortegnstesten: U = antall positive differanser ~ binomisk(n, ½) under H₀.
- Feilforplantning: Var(g(X)) ≈ (g′(μ))²Var(X) (og flervariabel-varianten med partiellderiverte).

**7. Regresjonsapparatet:** β̂ = Σ(xᵢ−x̄)(Yᵢ−Ȳ)/Σ(xᵢ−x̄)², α̂ = Ȳ − β̂x̄; Var(β̂) = σ²/Σ(xᵢ−x̄)²; s² = SSE/(n−2); (β̂−β)/(S/√Σ(xᵢ−x̄)²) ~ tₙ₋₂; KI/PI i x₀; residualplott-diagnostikk; varianten uten konstantledd β̂ = ΣxᵢYᵢ/Σxᵢ²; ML = LS under normalfeil.

**8. Ordningsvariable:** F_maks(y) = [F(y)]ⁿ, F_min(y) = 1 − [1−F(y)]ⁿ for uavhengige, identisk fordelte.

**9. numpy-idiomer:** `np.random.uniform/normal(size=n)`, vektoriserte transformasjoner, `np.mean`, `np.var(x, ddof=1)`, indikator-gjennomsnitt som sannsynlighetsestimat.

### Notasjonskonvensjoner i settene
- Store bokstaver for stokastiske variable, små for observasjoner; hatt for estimatorer (β̂, μ̂, θ̂); X̄ og S² for utvalgsgjennomsnitt/-varians; X ~ N(μ, σ²) med **varians** (ikke SD) som annet argument; Φ for standardnormal CDF; kvantilnotasjon z_α, t_{ν,α}, χ²_{ν,α} (øvre haleareal); eksponensialfordelingen parametriseres oftest med **forventningen β** (f(x) = (1/β)e^{−x/β}) — samsvarer med formelsamlingen; λ reserveres gjerne for rater i Poisson-prosesser. Boken bør følge dette slavisk.

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (bærer 60–70 % av poengene)
1. **Normalfordelingen komplett**: standardisering, lineærkombinasjoner med kovarians, betingede sannsynligheter, tabellbruk. ≈98 % frekvens — åpner nesten hvert sett.
2. **Inferens-kjeden ML → egenskaper → KI → test → styrke** som sammenhengende ferdighet. Den store håndrettede oppgaven (30–40 % av poengene) er en slik kjede i praktisk talt hvert sett siden 2016.
3. **Hypotesetestens rituale** (H₀/H₁ → observator med fordeling → α/p-verdi → konklusjon i ord) for t-, z-, andels-, varians- (kjikvadrat) og eksakt Poisson-test — pluss styrke og n-dimensjonering, som nå er nesten obligatorisk.
4. **Eksponensialfordelingen med hele følget**: minneløshet, sum → gamma, 2X/β ~ χ²₂, kjikvadrat-pivotalen for eksakt KI. Den hyppigste enkelt-gjengangeren utenom normalfordelingen.
5. **Enkel lineær regresjon** med og uten konstantledd: estimering fra oppgitte summer, inferens for helningen, prediksjon (KI vs. PI), residualdiagnostikk. 11 av 12 siste sett.
6. **Betinget sannsynlighet og Bayes** med hendelsesdefinisjoner (diagnostisk-test-oppsettet).

### Nivå 2 — må kunne (avgjør C mot B)
7. **Transformasjonsteknikkene** (CDF-metoden, MGF-identifikasjon) — broen til pivotalene.
8. **Monte Carlo/Python**: inversjonsmetoden, simulert sannsynlighet/forventning/p-verdi/styrke, lese og skrive numpy-kode. 8 av 9 sett siden des. 2023 — **boken må ha et fullverdig simuleringskapittel med kodetrening**; dette er det største strukturelle skiftet i emnet på ti år.
9. **Diskret modellvalg**: Poisson-prosess (med forutsetninger og rateskalering), binomisk, geometrisk/negativ binomisk, hypergeometrisk.
10. **Estimator-sammenligning** (forventningsretthet, varians, MSE) — gjenganger som storoppgave-deloppgave.
11. **Simultanfordelinger** (tabeller: marginal, betinget, uavhengighetssjekk, kovarians/korrelasjon).
12. **Kombinatorikk** (tilbake for fullt 2024–26) og **deskriptiv/grafisk tolkning** (boksplott, histogram, spredningsplott — kortsvarspoeng).
13. **To-utvalgs- og parret design** — særlig skillet mellom dem.

### Nivå 3 — bør kjenne til (topper karakteren, differensierer A)
14. **Ordningsvariable** (min/maks, serie-/parallellsystemer).
15. **Fortegnstesten** som ikke-parametrisk supplement (2 sett 2024, sannsynlig gjenbruk) og **feilforplantning/deltametoden** (2 sett 2024–25).
16. **Sentralgrenseteoremet som teorispørsmål** (formuler forutsetninger og resultat presist).
17. **«Ny fordeling med oppskrift»**-beredskap: Gumbel/Pareto/Weibull/trunkerte fordelinger håndtert med standardverktøyene — treningen er å ikke la ukjent navn skremme.
18. **Prediksjonsintervall** utenfor regresjon og KI-transformasjon via monotone funksjoner.

### Prognose for neste ordinære eksamen
4 timer, hjelpemiddelkode C, trolig Inspera-hybrid: 4–6 kortsvarsoppgaver (5–10 p hver: normal-regning, kombinatorikk eller Venn/uavhengighets-felle, Poisson/eksponensial-småregning, simultantabell eller deskriptiv avlesning) + 2–4 store håndrettede oppgaver som til sammen inneholder: (i) én fordelingsoppgave med egendefinert eller «eksotisk» tetthet som munner ut i ML + kjikvadrat-pivotal-KI, (ii) én full hypotesetest med styrke/dimensjonering i ingeniør- eller biologikontekst, (iii) én regresjonsoppgave med residualtolkning og prediksjon, og (iv) ett Python/Monte Carlo-innslag (inversjonsmetoden eller simulert inferens). Sannsynlige gjengangere på rotasjon: fortegnstest, feilforplantning, ordningsvariable, to-kilders felles likelihood.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/TMA4245/`. Navnekonvensjon: `eks{Mnd}{ÅÅ}{suffiks}.pdf` der suffiks **b** = bokmål oppgavesett, **n** = nynorsk, **e** = engelsk, **l** = løsningsforslag. Mai/juni-sett er TMA4245 (ordinær vår), august er felles kont for TMA4240/TMA4245, november/desember-sett er TMA4240 (tvillingemnet, samme pensum).

**Lest grundig — oppgaver og løsningsforslag (26 sett):**
- 2024–2026: `eksMai26b/l`, `eksDes25b/l`, `eksAug25b/l`, `eksMai25b/l`, `eksDes24b/l`, `eksAug24b/l`, `eksMai24b/l`
- 2022–2023: `eksDes23b/l`, `eksAug23b/l`, `eksJun23b/l`, `eksDes22b/l`, `eksAug22b/l`, `eksMai22b/l`
- 2020–2021: `eksDes21Morgenb/l`, `eksDes21Ettermiddagb/l`, `eksAug21b/l`, `eksMai21b/l`, `eksNov20b/l`, `eksAug20b/l`, `eksMai20b/l`
- 2016–2019 (løsninger skumlest): `eksNov19b/l`, `eksAug19b/l`, `eksNov18b/l`, `eksMai18b/l`, `eksNov17b/l`, `eksAug17b`, `eksMai16b/l`, `eksAug16b`

**Skumlest for temaregistrering (2009–2015, ~19 sett):** `eksMai09`, `eksAug09`, `eksDes09`, `eksJun10`, `eksAug10`, `eksDes10`, `eksJun11`, `eksAug11`, `eksDes11`, `eksMai12`, `eksAug12`, `eksDes12`, `eksMai13`, `eksAug13`, `eksDes13`, `eksMai14`, `eksAug14`, `eksDes14`, `eksJun15`, `eksAug15` (b- eller n-varianter).

**Fagbeskrivelse:** omskrevet sammendrag av NTNUs emneside for TMA4245 (scratchpad: `fagbeskrivelse-tma4245.md`). Emnet er verifisert aktivt (per juli 2026).

**Merknader om kildene og kjente svakheter i grunnlaget:**
- **Filnavn-avvik i arkivet:** `eksMai17b` og `eksNov17b` inneholder samme eksamen (24. mai 2017) — arkivet har duplikat under to navn. `eksNov19b` viser en forside datert juni 2019, og `eksAug19b` viser 30. november 2019 (TMA4240) — enkelte Nov/Aug-filer i 2017–2020 ser ut til å være omstokket i forhold til navnene. Analysen bygger på faktisk innhold, ikke filnavn; temaregistreringen påvirkes ikke.
- **`eksMai19b/l` er ikke selvstendig verifisert** (analysen for 2019 hviler på de to øvrige 2019-settene).
- **Temaregistreringen for `eksJun15` og `eksAug15` har lav konfidens** (registrerte kontekster overlapper mistenkelig med 2011-settene og kan være feillest); de inngår derfor kun med lav vekt i frekvenstabellen.
- 2009–2015-settene er kun skumlest på oppgavenivå; frekvensene for denne perioden er nedre anslag.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og krav i dette dokumentet er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasitformuleringer er gjengitt ordrett. Formler og notasjon er standard faglig innhold uten verkshøyde.

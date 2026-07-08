# Eksamensanalyse: TDT4137 Kognitive systemer (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på **4 ordinære eksamenssett med offisielle løsningsforslag** fra NTNU (høst 2015, 2016, 2017, 2018), oppgavehefter på bokmål/nynorsk/engelsk, samt NTNUs gjeldende emnebeskrivelse (verifisert 8. juli 2026). **Arkivet er lite og — viktigere — det stammer fra to tidligere emneansvarlige og et annet eksamensformat enn dagens kurs.** Emnet er nettopp lagt om (nytt navn, ny emneansvarlig, ny vurderingsform). Denne analysen er derfor *ærlig om evidensstyrken*: arkivet gir et solid bilde av fagets **begreps- og teoriapparat**, men er en **usikker** guide til nøyaktige oppgavesjangre og vekting på neste eksamen. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller løsningsforslag. Analysen er kvantitativ der de fire settene tillater det.

---

## 0. Evidensstyrke og den store advarselen (les dette først)

TDT4137 er ikke ett stabilt fag over tid — det er **tre distinkte æraer** med tre ulike emneansvarlige, og faget er nettopp lagt om igjen. Dette er den enkeltopplysningen som betyr mest for hva læreboka skal og *ikke skal* stole på fra arkivet:

| Æra | Emneansvarlig | Emnenavn | Eksamensform | Profil |
|---|---|---|---|---|
| **2015–2017** | Asbjørn Thomassen | «Kognitive **Arkitekturer**» | 1 skoleeksamen, 4 t, 5 oppg. à 20 % | **Regnetung**: MHP-tidsberegning, GOMS/NGOMSL/KLM-utførselstid, perseptron/backprop numerisk, fuzzy Mamdani/Sugeno-defuzzifisering, Soar-kode, BCI/EEG, ASR |
| **2018** | Agnar Aamodt | «Kognitive **Arkitekturer**» | 1 skoleeksamen, 4 t, 4 oppg. à 25 % | **Konseptuell/essay**: paradigmer, Marr, kunnskapsnivå, Soar/CLARION/Standard Model, CBR (Creek/MOP), 20 sant/usant. Nesten ingen regning |
| **2026 (dagens)** | **Rudolf Mester** | «Kognitive **systemer**» | **Midtprøve 40 % (2 t) + skoleeksamen 60 % (3 t)** | **Ukjent stil.** Pensum = artikkelsamling oppgitt ved semesterstart |

**Konsekvenser for læreboka:**

1. **Eksamensformatet i arkivet gjelder ikke lenger.** Alle fire settene var én 4-timers eksamen som teller 100 %. Dagens kurs har **delt vurdering**: en midtprøve (40 %, 2 t) tidlig i semesteret og en avsluttende skoleeksamen (60 %, 3 t). Midtprøven dekker trolig første halvdel av pensum (kognisjonsgrunnlag, paradigmer, resonneringstyper), sluttksamen resten. Begge har hjelpemiddelkode **D (enkel kalkulator)**.

2. **Navnebyttet Arkitekturer → systemer signaliserer bevisst breddeøkning.** Emnet er ikke lenger snevert om «kognitive arkitekturer» (Soar/ACT-R/Icarus), men om kognitive *systemer* bredt, inkludert resonneringstyper, persepsjon, vitenskaps- og bevissthetsfilosofi og historie.

3. **Ny emneansvarlig (Mester) → ukjent oppgavestil.** Vi har *ingen* eksamenssett fra Mester. Vi så allerede et kraftig stilskifte fra Thomassen (regning) til Aamodt (essay) på ett år. En tredje emneansvarlig kan skifte igjen. **Ikke overtren på Thomassens regnesjangre.**

4. **Hva som *likevel* holder seg:** Pensumtemaene har sterk kontinuitet. NTNUs gjeldende læringsinnhold lister eksplisitt: kognisjonsgrunnlag, filosofiske/psykologiske teorier, **kognitive arkitekturer (symbolske og moderne)**, **resonneringstyper (deduktiv/ikke-deduktiv/sannsynlighetsbasert)**, **persepsjon**, **fuzzy logikk**, **maskinlæring og kunstige nevrale nett**, symbolsk vs. moderne KI, **vitenskaps- og bevissthetsfilosofi**, og **historisk utvikling**. Alle disse finnes igjen i arkivet. Arkivet er derfor en god kilde til *hva studenten skal forstå*, bare en usikker kilde til *hvordan det spørres*.

**Bunnlinje for evidensstyrke:** Metodeinnsikten (alle 4 settene har fullt løsningsforslag) er **sterk for begrepsapparatet**, **middels for oppgavesjangre**, og **svak for format/vekting** på neste eksamen. Skriv en **begrepsdreven** lærebok med **innebygde regnemoduler** for de tre temaene som er både lavterskel og pensumstabile: fuzzy inferens, nevrale nett og sannsynlighetsresonnering (Bayes).

---

## 1. Eksamensform og utvikling

### Grunnform (arkiv 2015–2018)

Skriftlig skoleeksamen, **4 timer** (09:00–13:00), karakterskala **A–F**, tellet **100 %**. Hjelpemiddel: **kode D — enkel kalkulator**. Obligatoriske øvinger måtte være godkjent. **Ingen delprøve** — hele karakteren på slutteksamen.

- **2015–2017 (Thomassen):** Fem oppgaver à 20 %. Hver oppgave et eget tema med flere deloppgaver. Klar regneprofil: minst tre av fem oppgaver krevde tallutregning (NGOMSL-utførselstid, nevralt nett / backprop, fuzzy defuzzifisering), resten var forklaringsspørsmål og kodelesing (Soar).
- **2018 (Aamodt):** Fire oppgaver à 25 %. Oppgave 1–3 var korte forklarings-/skisseringsspørsmål («svar kort og to-the-point»), oppgave 4 var **20 sant/usant-utsagn**. Kun én regne-/tegneoppgave (fuzzy medlemskapsfunksjon). ⚠️ **Sant/usant med streng retting:** galt svar ga **0 poeng**, men en *kort begrunnelse* kunne gi delvis uttelling selv ved feil svar — altså belønnes å vise resonnement, ikke bare gjette.

### Grunnform (dagens kurs, 2026)

**To komponenter:** midtprøve (**40 %, 2 t**) + skriftlig skoleeksamen (**60 %, 3 t**), begge kode D, karakter A–F. Fem obligatoriske øvinger; minst 1 av 2 innledende øvinger kreves for midtprøvetilgang, 2 av 4 for slutteksamenstilgang. **Vi har ingen eksempler på hvordan Mester utformer disse to prøvene** — dette er den største usikkerheten i dokumentet.

### Den viktigste utviklingslinjen: regning ut, konsept inn

Skiftet **Thomassen → Aamodt (2017 → 2018)** er dramatisk og retningsgivende:

- **Forsvant helt i 2018:** GOMS/NGOMSL/KLM-utførselstidsberegning (var i 3 av 3 Thomassen-sett), numerisk backpropagation, fuzzy COG-defuzzifisering som hovedregneoppgave, BCI/EEG, ASR/N-gram.
- **Kom inn i 2018:** paradigme-taksonomi (Vernon), Marr-modellen som drøfting, kunnskapsnivå (Newell), CLARION, «The Standard Model», CBR (Creek, MOP, Schanks Dynamic Memory, Casey), Endsley situasjonsforståelse, AGI, forklarbar KI (XAI/DARPA), Bayes konseptuelt.
- **Overlevde begge æraer:** fuzzy logikk (i 4/4 sett, men fra tung regning til lett medlemskap/hedges), nevrale nett (4/4, fra numerisk til konseptuelt), Soar (4/4), paradigmer/arkitektur-taksonomi, analogiresonnering (Gentner/MAC-FAC), de to hypotesene (Physical Symbol System + Heuristic Search).

Retningen — **fra mekanisk regning mot konseptuell forståelse og drøfting** — peker samme vei som dagens pensumbeskrivelse (filosofi, historie, resonneringstyper). Læreboka bør følge denne kurven.

---

## 2. Temafrekvens

Basert på de **4 settene** (H2015, H2016, H2017, H2018). Celleverdi = temaet forekommer i minst én oppgave det året. Fordi arkivet er lite og delt i to æraer (Thomassen 2015–17, Aamodt 2018), er gjenganger-scoren **/4** grov — den måler bredde/stabilitet, ikke vekt, og kolonnen «Aamodt 2018» sier mest om hvor faget beveget seg. Kolonnen «2026-relevans» er min vurdering opp mot NTNUs gjeldende læringsinnhold.

| Tema | 2015 | 2016 | 2017 | 2018 | Score | 2026-relevans |
|---|:--:|:--:|:--:|:--:|:--:|---|
| **Kognitive arkitekturer / paradigmer** (cognitivist / emergent / hybrid; Vernon) | ✓ | ✓ | ✓ | ✓ | **4/4** | **Høy** — kjernepensum |
| **Fuzzy logikk** (Mamdani/Sugeno, defuzzifisering, hedges, medlemskap) | ✓ | ✓ | ✓ | ✓ | **4/4** | **Høy** — eksplisitt i pensum |
| **Kunstige nevrale nett / ML** (perseptron, delta, backprop, aktivering, CNN, deep) | ✓ | ✓ | ✓ | ✓ | **4/4** | **Høy** — eksplisitt i pensum |
| **Soar** (arkitektur, prosesseringssyklus, operator/preferanse, impasse, kode) | ✓ | ✓ | ✓ | ✓ | **4/4** | **Middels–høy** — symbolsk arkitektur |
| **Analogiresonnering** (Gentner structure-mapping, similaritetstyper, MAC/FAC, systematicity) | – | ✓ | ✓ | ✓ | **3/4** | **Middels** — ikke-deduktiv resonnering |
| **De to hypotesene** (Physical Symbol System + Heuristic Search) | – | ✓ | ✓ | ✓ | **3/4** | **Middels** — symbolsk KI + filosofi |
| **ACT-R** (hybrid, subsymbolsk aktivering, base-level) | ✓ | ✓ | – | ✓ | **3/4** | **Middels** — moderne/hybrid arkitektur |
| **Icarus** (tilstand=beliefs, impasse, problemløsning, moduler) | ✓ | – | ✓ | ✓ | **3/4** | **Middels** |
| **Brooks subsumption** (lagdelt, inhibit/suppress, reaktiv) | ✓ | – | ✓ | ✓ | **3/4** | **Middels** — emergent paradigme |
| **MHP** (Model Human Processor: tid, subsystemer, Fitts, Hicks, rasjonalitet) | ✓ | – | ✓ | ✓ | **3/4** | **Lav–middels** — Thomassen-tungt |
| **GOMS / NGOMSL / KLM** (brukermodellering, utførselstid) | ✓ | ✓ | ✓ | – | **3/4** | **Lav** ↓ *falt bort i 2018* |
| **Marr / abstraksjonsnivåer / Kelso** | ✓ | – | – | ✓ | **2/4** | **Middels** — filosofi/nivåmodell |
| **Kunnskapsnivå / rasjonalitetsprinsipp (Newell)** | ✓ | – | – | ✓ | **2/4** | **Middels** — filosofi |
| **BCI / EEG** (windowing, FFT, mu-bølger, P300) | ✓ | – | ✓ | – | **2/4** | **Lav** ↓ *Thomassen-spesifikt* |
| **Bayes / sannsynlighetsresonnering** | ✓ | – | – | ✓ | **2/4** | **Høy** ↑ *«sannsynlighetsbasert resonnering» nå eksplisitt i pensum* |
| **CBR** (Creek, MOP, Schanks Dynamic Memory, Casey) | – | – | – | ✓ | **1/4** | **Lav–middels** ↑ *Aamodt-spesifikt* |
| **CLARION / The Standard Model** | – | – | – | ✓ | **1/4** | **Lav–middels** |
| **Endsley situasjonsforståelse / AGI / forklarbar KI** | – | – | – | ✓ | **1/4** | **Middels** — «moderne KI» |
| **ASR / talegjenkjenning** (Bayes, N-gram, Viterbi) | ✓ | – | – | – | **1/4** | **Lav** ↓ *Thomassen-spesifikt* |

**Viktigste funn:**

1. **Fire temaer er 100 %-gjengangere gjennom begge æraer:** kognitive arkitekturer/paradigmer, fuzzy logikk, nevrale nett/ML og Soar. Alle fire står også i dagens pensum. Dette er lærebokas ryggrad — de er trygge uansett hvordan Mester utformer eksamen.

2. **Fuzzy og nevrale nett er de eneste regnetemaene som overlever hele veien.** Begge går fra tung numerisk regning (2015–17) til lett konseptuell behandling (2018), men forsvinner aldri, og begge er eksplisitt i 2026-pensum. Læreboka bør ha **fullstendige regnemoduler** for disse (fuzzy inferens ende-til-ende; perseptron- og backprop-oppdatering), men ramme dem konseptuelt.

3. **GOMS/NGOMSL/KLM og MHP er den store fellen for en naiv analyse.** Ser man bare på Thomassen-årene (2015–17) ser brukermodellering (GOMS, NGOMSL-utførselstid) ut som et tungt tema — det tok en hel 20 %-oppgave hvert år. Det **forsvant fullstendig i 2018** og er ikke nevnt i dagens pensum. Skal maks med som en historisk/HCI-fotnote, ikke som regnesjanger.

4. **Sannsynlighetsresonnering (Bayes) er i vekst.** Lav historisk frekvens (ASR 2015, ett sant/usant-utsagn 2018), men dagens pensum lister eksplisitt «deduktiv, ikke-deduktiv og **sannsynlighetsbasert** resonnering» som eget tema. Dette bør løftes i læreboka selv om arkivet knapt dekker det.

5. **Filosofi og historie er underrepresentert i arkivet, men eksplisitt i pensum.** Vitenskaps- og bevissthetsfilosofi og «historisk utvikling av kognitive teorier og teknologier» står i læringsinnholdet, men arkivet berører det bare via Marr, Newells kunnskapsnivå, de to hypotesene og AGI/embodiment-kritikken (2018). Læreboka må **bygge ut** dette utover arkivet.

---

## 3. Oppgavetype-katalog

De sjangrene som faktisk gikk igjen i arkivet. «Krav» oppsummerer løsningsforslagenes foretrukne metode. Merk hvilke sjangre som er **Thomassen-spesifikke** (usikker fremtid) versus **æra-overgripende** (tryggere).

### A. Fuzzy inferens ende-til-ende *(æra-overgripende, 4/4)*
- **Krav (Thomassen-form):** Gitt to input-variabler, fuzzy-sett og regler: **(1) fuzzifiser** (les av medlemsgrad på grafene), **(2) evaluer regler** (OR = max, AND = min, NOT = 1−µ; overfør verdi til regelens høyreside), **(3) aggreger** de klippede utgangssettene, **(4) defuzzifiser**. For **Mamdani**: senter-av-tyngde (COG), tilnærmet som `Σµ(x)·x / Σµ(x)` med fast steglengde langs x-aksen. For **Sugeno**: singletons, vektet snitt `Σµᵢ·xᵢ / Σµᵢ` — mye lettere å regne. Kjenn forskjellen: Mamdani er mer menneskelig/regeluttrykkende men tyngre å beregne; Sugeno er lett å beregne (egner seg til kontrollsystemer).
- **Krav (Aamodt-form):** konstruer **medlemskapsfunksjon** fra data (grafisk eller uttrykk), og anvend **hedges** (very, very very, extremely) som eksponentfunksjoner på µ (kvadrering, potens). «Hedge» = modifikator på et fuzzy-sett.
- **Frekvens:** 4/4.

### B. Nevrale nett — perseptron og backpropagation *(æra-overgripende, 4/4)*
- **Krav (regne):** Modeller kunstig nevron mot biologisk (input→dendritt, node→soma, vekt→synapse, output→akson). **Perseptron:** step-aktivering `Y = step(Σxᵢwᵢ − θ)`, **deltaregel** `Δwᵢ = α·xᵢ·eᵢ`, `e = yd − y`. Kjør én treningsrunde og oppdater vektene (husk θ som vekt w₀ på input −1). Vit at perseptron **kun lærer lineært separerbare klasser** (derav XOR-problemet → flerlagsnett). **Backpropagation:** fire trinn (initialiser → aktiver med sigmoid → oppdater vekter bakover (`δ` i utgangslag = `y(1−y)e`, i skjult lag = `y(1−y)·Σδₖwⱼₖ`) → sjekk konvergens). Regn én iterasjon på et lite nett. Vanlig felle løsningsforslaget flagger: å glemme å oppdatere terskelen θ.
- **Krav (konsept):** rekurrent nett (tilbakekoblinger), autoenkoder (input=output, identitet), dype nett (mange skjulte lag), CNN (lokalt reseptivt felt → færre parametre, ReLU for ikke-linearitet, pooling for translasjonsinvarians). Plasser nevrale nett i **emergent/konneksjonistisk** paradigme. Deltaregel = gradientnedstigning i feilflaten (kan sette seg fast i lokalt minimum).
- **Frekvens:** 4/4 (regning 3/4, konseptuelt 4/4).

### C. Kognitive arkitekturer — paradigmer og enkeltarkitekturer *(æra-overgripende, 4/4)*
- **Krav:** Plasser arkitekturer i **Vernons paradigmer**: cognitivist (Soar, ACT-R, Icarus), emergent/konneksjonistisk (Brooks subsumption, ANN-baserte), hybrid (CLARION, ACT-R). Kjenn Vernons **fire modelleringsaspekter** (computational/bio-inspired-spekter; abstraksjonsnivå; gjensidig avhengighet hjerne/kropp/miljø; ultimate–proximate). For enkeltarkitekturer, redegjør for: overordnet struktur, kunnskapstyper + minnestrukturer, problemløsningsprosess (input→output), læringsprosess.
  - **Soar:** produksjonssystem, elaborering→decision→application, operatorforslag `(<s> ^operator <o> +)` (acceptable-preferanse) vs. valgt operator `(<s> ^operator <o>)`; **impasse** når ingen/like preferanser → substate/chunking som læring. Kunne **lese og skrive enkel Soar-produksjonsregel** (propose/apply, water-jug).
  - **ACT-R:** hybrid (symbolsk + subsymbolsk); base-level-aktivering `Bᵢ = ln(Σtⱼ⁻ᵈ)` som log-odds for at en chunk trengs; sentral prosessor = produksjonssystem; kobler funksjoner til hjerneregioner.
  - **Icarus:** tilstand = mengde beliefs; conceptual inference nederst (bottom-up); impasse når ingen anvendbar skill → problemløsning; skills og konsepter i separate men samvirkende moduler.
  - **Brooks subsumption:** lagdelt, reaktiv, ingen intern modell (verden som «modell»); høyere lag **subsumerer** lavere (inhibit = output tapt en tid, suppress = erstatt input).
- **Frekvens:** 4/4.

### D. Analogiresonnering — Gentner og MAC/FAC *(3/4)*
- **Krav:** Gentners **structure-mapping**: kunnskap som objekter, objektattributter og relasjoner (proposisjonsnett). Similaritetstyper (literal similarity / analogi / abstraksjon / anomali etter overlapp i attributter vs. relasjoner). **Systematicity-prinsippet:** høyere-ordens relasjoner og sammenhengende relasjonssystemer foretrekkes ved mapping. **MAC/FAC** («Many Are Called, Few Are Chosen»): MAC henter kandidat-baser via innholdsvektorer (literal similarity); FAC velger via structure-mapping engine (SME).
- **Frekvens:** 3/4.

### E. Filosofi og grunnbegreper — hypoteser, Marr, kunnskapsnivå *(3–4/4, voksende)*
- **Krav:** **Physical Symbol System Hypothesis** (et fysisk symbolsystem har nødvendige og tilstrekkelige midler for generell intelligent handling) og **Heuristic Search Hypothesis** (løsninger representeres som symbolstrukturer; intelligens utøves ved søk/generering-modifisering). Kunne **kritikken**: embodied/enactive-retningen mener intelligens ikke er uavhengig av kropp og miljø. **Marr 3-nivå** (computational theory → algoritme/representasjon → implementasjon; top-down koblet; cognitivist paradigme) vs. **Kelso** (kontekst/embodiment integrert, nivåene ikke løst koblet). **Kunnskapsnivå (Newell):** eget nivå over programnivået med kunnskap som medium og **rasjonalitetsprinsippet** som operasjonsprinsipp (agent med mål + kunnskap bruker kunnskapen for å nå målet); et system er intelligent i den grad det tilnærmer kunnskapsnivået.
- **Frekvens:** hypotesene 3/4, Marr/Newell 2/4. **Bør styrkes** — treffer 2026-pensumets filosofidel.

### F. Kort-svar / sant-usant / begrunnet drøfting *(Aamodt-form, men trolig representativ for fremtiden)*
- **Krav:** Korte, presise «to-the-point»-svar på begrepsspørsmål på tvers av pensum. **Sant/usant med begrunnelse:** galt svar = 0, men kort begrunnelse gir delvis uttelling — så vis alltid resonnementet. Utsagnene tester nettopp de vanlige forvekslingene (se del 5). Denne sjangeren er **billig å øve på** og differensierer godt.
- **Frekvens:** 1/4 eksplisitt (2018), men konseptuelle kortsvar finnes i alle sett; den mest sannsynlige formen for en midtprøve på 2 timer.

### G. (Thomassen-spesifikke, usikker fremtid) *(2–3/4)*
- **GOMS/NGOMSL/KLM:** modeller en oppgave som mål/submål/metoder/seleksjonsregler; beregn utførselstid `T = 0,1·(antall steg) + Σ KLM-operatortider` (CP, B, H, K, M, P). Skille KLM (flatt mentalprogram) vs. NGOMSL (subrutiner, WM/LTM-operatorer recall/retain/retrieve/forget). **Falt bort i 2018 — dekk som HCI-fotnote.**
- **BCI/EEG:** windowing før FFT (EEG er ikke-periodisk → unngå frekvenslekkasje); mu-bølger (~10 Hz, forsvinner ved bevegelse), P300 (positiv topp ~300 ms etter uventet stimulus, odd-ball). **Thomassen-spesifikt.**
- **ASR:** `argmax P(W|X) ≈ argmax P(X|W)·P(W)` (Bayes, P(X) konstant); N-gram språkmodell; Viterbi/A*-dekoding. **Thomassen-spesifikt, men Bayes-delen lever videre i «sannsynlighetsresonnering».**

---

## 4. Sensorens krav

### Faste metaregler (fra løsningsforslagene)
1. **Vis mellomregningen.** For fuzzy, backprop og MHP-tid teller *trinnene og verdiene*, ikke bare svaret. Løsningsforslagene setter opp fuzzifisering → evaluering → aggregering → defuzzifisering eksplisitt, og backprop trinn 1–4.
2. **Bredt spekter av korrekte svar godtas.** Flere oppgaver (medlemskapsfunksjoner, Mamdani-utgangssett, egne hedge-definisjoner) sier eksplisitt at studenten kan «velge selv» — sensor vurderer konsistensen i det valgte, ikke om det matcher én fasit. Aamodt ga 70–80 % til kandidater som mistolket et uklart oppgavespørsmål, men svarte konsistent på sin tolkning.
3. **Delvis uttelling er regelen** — også på sant/usant: en **kort begrunnelse** redder delpoeng ved feil svar.
4. **Korte, presise svar belønnes** (2018: «ingen spørsmål krever lange svar, vær kort og to-the-point»). Definisjonens hovedpoeng først.
5. **Robust sensur til kandidatens fordel.** Selverkjente feil i oppgaveteksten (2017: en regel «burde brukt NOT Long, ikke NOT Short», men «spiller ingen rolle»; 2018: «erroneous question» om perseptron og lineær separabilitet, både T og F godtatt) rettes ikke til studentens ugunst.

### Hva som skiller karakternivåene
- **Bestått (E):** navngi paradigmer og arkitekturer; lese av fuzzy-medlemskap; kjenne deltaregelen og de to hypotesene på overflaten.
- **Midtsjikt (C/D):** kjøre en fuzzy-inferens helt til crisp tall; regne én backprop-iterasjon korrekt (inkl. θ); redegjøre for Soars syklus og impasse; forklare Marr og kunnskapsnivået.
- **Toppsjikt (A/B):** **sammenligne** arkitekturer presist (Soar vs. CLARION langs arkitektur/minne/problemløsning/læring); begrunne *hvorfor* embodied-retningen kritiserer symbolhypotesene; koble Marr/Kelso til paradigmene; drøfte forklarbar KI og AGI med presisjon. Det er drøftingen og sammenligningen som gir topp, ikke regnestykket.

---

## 5. Typiske feil (eksplisitt eller implisitt i fasitene)

1. **Glemme å oppdatere terskelen θ** i perseptron/backprop (θ = vekt w₀ på input −1). Eksplisitt flagget H2016/H2017.
2. **Blande Mamdani og Sugeno defuzzifisering** — bruke COG-integrasjon der singleton-vektet-snitt skal brukes (eller motsatt).
3. **Feil logiske operatorer i regelevaluering** — OR skal være max, AND min, NOT = 1−µ; forveksles ofte.
4. **Forveksle Marrs og Kelsos nivåmodeller** (H2018 sant/usant #1: de løst koblede lagene er *Marrs*, ikke Kelsos).
5. **Snu rollene i rasjonalitetsprinsippet** — Newell sier agenten velger *handling/kunnskap for å nå målet*, ikke «velger mål for kunnskapen» (H2018 #2).
6. **MHP feil subsystem** — de tre er perseptuelt, **kognitivt** og motorisk (ikke «emosjonelt», H2018 #3).
7. **Fitts lov feil retning** — tid er *omvendt* proporsjonal med målstørrelse (større mål = raskere), ikke proporsjonal (H2018 #5).
8. **Nevron-signalvei feil** — dendritter *mottar*, akson *sender*; ikke omvendt (H2018 #11).
9. **Perseptron og lineær separabilitet upresist** — det er *klassene* som må være lineært separerbare (H2018 #12, erkjent som dårlig formulert).
10. **Fuzzy = sannsynlighet** — nei, det er *mulighetsteori* (possibility), ikke statistisk sannsynlighetsteori; medlemskap kan være både sant og usant samtidig (H2018 #15, #16).
11. **Icarus: skills og konsepter i samme modul** — de er *separate* men samvirkende (H2018 #8).
12. **Brooks: tro at øverste lag mottar all input** — nei, lagene opererer uavhengig; øvre lag kan subsumere/kontrollere lavere, men input går ikke først til toppen (H2018 #9 sann vs. #10 usann).
13. **Systematicity-prinsippet feil vei** — høyere-ordens relasjoner er *viktigere* enn lavere-ordens (H2018 #14).
14. **AGI = overgå mennesket** — hovedmålet er å *tilnærme* menneskelig intelligens, ikke nødvendigvis overgå (H2018 #19).
15. **Lese oppgaveteksten dårlig** — H2018 fuzzy-oppgaven: mange tegnet medlemskap fra tabellen i stedet for å legge på hedges som spurt.

---

## 6. Notasjons- og begrepsapparat

Faget har **ingen enkelt lærebok** — pensum er en artikkelsamling (Vernon *Artificial Cognitive Systems: A Primer* har vært sentral gjennom arkivet; Kolodner (CBR), Forbus/Gentner (MAC-FAC), Chong (CLARION), Endsley, DARPA XAI-paper i Aamodt-æraen). Læreboka bør bruke disse begrepene og formene siden oppgavene og fasitene gjør det.

### Kognisjon og paradigmer
Vernons fire modelleringsaspekter (computational/bio-inspired-spekter; abstraksjonsnivå; hjerne–kropp–miljø; ultimate–proximate). Tre paradigmer: **cognitivist** (symbolsk, Soar/ACT-R/Icarus), **emergent/konneksjonistisk** (Brooks, ANN), **hybrid** (CLARION, ACT-R). 2D-rommet: abstraksjonsnivå × computational–biologisk inspirasjon.

### Kognitive arkitekturer
- **Soar:** produksjonsregler (LTM prosedural + semantisk + episodisk; WM), elaborering→decision→application, operatorpreferanser (`+` acceptable), impasse→substate→**chunking** (læring), recognize-act-syklus.
- **ACT-R:** hybrid; produksjonssystem sentralt; subsymbolsk aktivering `Aᵢ = Bᵢ + ΣⱼWⱼSⱼᵢ`, base-level `Bᵢ = ln(Σtⱼ⁻ᵈ)`; kobling til hjerneregioner.
- **Icarus:** beliefs som tilstand; conceptual inference→skill execution→problem solving→learning; impasse; skills/konsepter separate.
- **Brooks subsumption:** AFSM-lag, inhibit/suppress, reaktivt paradigme, ingen intern modell.
- **CLARION:** fire moduler, symbolsk topplag + nevralt/RL-bunnlag, eksplisitt/implisitt kunnskap.
- **The Standard Model** for kognitive arkitekturer (fellestrekk-rammeverk).

### MHP og HCI (Thomassen-æra)
Model Human Processor (perseptuelt/kognitivt/motorisk subsystem med prosessorer Tp/Tc/Tm); Fitts lov; Hicks lov (usikkerhetsprinsipp); rasjonalitetsprinsipp. GOMS/NGOMSL/KLM (mål, metode, operator, seleksjonsregel; utførselstid `T = 0,1·steg + ΣKLM`).

### Nevrale nett / ML
Perseptron, step/sign/sigmoid/tanh/ReLU; deltaregel `Δw = α·x·e`; lineær separabilitet; backpropagation (`δ` utgang/skjult lag); rekurrent, autoenkoder, dype nett, CNN (lokalt reseptivt felt, pooling, translasjonsinvarians). Emergent paradigme.

### Fuzzy logikk
Fuzzifisering; regelevaluering (OR=max, AND=min, NOT=1−µ); aggregering; defuzzifisering (**Mamdani** COG `Σµx/Σµ`; **Sugeno** singleton vektet snitt); hedges (very/extremely som eksponentfunksjon på µ); mulighets- (ikke sannsynlighets-) teori.

### Resonnering og filosofi
Physical Symbol System Hypothesis; Heuristic Search Hypothesis; embodied/enactive-kritikk; Marr 3-nivå; Kelso; Newells kunnskapsnivå + rasjonalitetsprinsipp. Analogiresonnering (Gentner structure-mapping, similaritetstyper, systematicity, MAC/FAC). **Sannsynlighetsresonnering:** Bayes `P(H|X) = P(X|H)P(H)/P(X)`. CBR (Creek, MOP, Schanks Dynamic Memory, Casey). Endsley situasjonsforståelse (3 nivåer); AGI; forklarbar KI (model induction, DARPA).

---

## 7. Prognose og prioritering

⚠️ **Forbehold:** Prognosen bygger på 4 sett fra tidligere emneansvarlige og et annet format. Behandle prioriteringen som *robust på tema, usikker på sjanger*. Verifiser mot Mesters første øvings- og forelesningsopplegg når det foreligger.

### Nivå 1 — kjernen (stabil på tvers av begge æraer + i dagens pensum)
1. **Kognitive arkitekturer og paradigmer** — 4/4. Vernons tre paradigmer + fire aspekter; plassere Soar/ACT-R/Icarus/Brooks/CLARION; sammenligne langs arkitektur/minne/problemløsning/læring.
2. **Fuzzy logikk** — 4/4. Full inferens (fuzzifiser→evaluer→aggreger→defuzzifiser), Mamdani vs. Sugeno, hedges, medlemskap. **Ha en komplett regnemodul.**
3. **Nevrale nett / ML** — 4/4. Perseptron + deltaregel + backprop (én iterasjon, husk θ), lineær separabilitet, CNN/deep/autoenkoder konseptuelt. **Ha en komplett regnemodul.**
4. **Soar (+ ACT-R, Icarus, Brooks)** — 4/4. Prosesseringssyklus, operatorpreferanser, impasse/chunking; lese enkel Soar-regel; ACT-R hybrid + aktivering.

### Nivå 2 — må kunne (avgjør C→A)
5. **Filosofi og grunnbegreper** — hypotesene 3/4, Marr/Newell 2/4, **voksende i pensum**. De to hypotesene + embodied-kritikk; Marr vs. Kelso; kunnskapsnivå + rasjonalitetsprinsipp.
6. **Analogiresonnering** — 3/4. Gentner structure-mapping, similaritetstyper, systematicity, MAC/FAC.
7. **Sannsynlighetsresonnering (Bayes)** — 2/4 i arkivet, men **eksplisitt i 2026-pensum** («sannsynlighetsbasert resonnering»). Bayes' regel, likelihood/prior/posterior. **Løft dette utover arkivet.**

### Nivå 3 — bør kjenne til (lavfrekvent, men differensierer / treffer dagens profil)
8. **CBR** (Creek, MOP, Schanks Dynamic Memory, Casey) — 1/4, Aamodt. Case-basert resonnering som ikke-deduktiv metode.
9. **Forklarbar KI, AGI, situasjonsforståelse (Endsley)** — 1/4, men treffer «moderne KI».
10. **CLARION / Standard Model** — 1/4. Hybrid arkitektur + fellesrammeverk.
11. **Historisk utvikling** — nesten fraværende i arkivet, men **eksplisitt i pensum**. Turing/Newell & Simon/Dartmouth-linjen, symbolsk→konneksjonistisk→embodied, framveksten av moderne KI. **Bygg ut fra pensum, ikke arkiv.**

### Bør IKKE prioriteres (som regnesjangre)
- **GOMS/NGOMSL/KLM-utførselstid** — 3/4 i Thomassen-æra, men **falt bort i 2018** og ikke i dagens pensum. HCI-fotnote.
- **MHP-tidsberegning** — Thomassen-tungt; ta med MHP konseptuelt (subsystemer, Fitts, Hicks), ikke som regneoppgave.
- **BCI/EEG og ASR/N-gram** — Thomassen-spesifikt, ute etter 2017. Maks korte fotnoter (behold Bayes fra ASR under sannsynlighetsresonnering).

### Prognose for dagens kurs (midtprøve + skoleeksamen)
Med **svært høy sikkerhet** dekkes: kognitive arkitekturer/paradigmer, fuzzy logikk, nevrale nett/ML. Med **høy sikkerhet**: de to symbolhypotesene + filosofi, Soar/ACT-R, analogiresonnering, sannsynlighetsresonnering. **Trolig format:** midtprøven (2 t) blir konseptuell/kortsvar over grunnlags-, paradigme- og resonneringsstoff; slutteksamen (3 t) kombinerer konseptuelle drøftinger med lette regnemoduler (fuzzy, nevralt nett). Studenten som **forstår og kan sammenligne paradigmer og arkitekturer**, **kjører fuzzy- og backprop-regning feilfritt**, og **drøfter filosofien presist**, vil score høyt — uavhengig av om Mester lener seg mot Thomassens regning eller Aamodts essay.

### Anbefalt arketype for læreboka
**Hybrid med konseptuell hovedvekt.** Konkret: en **begrepsdreven** lærebok (paradigmer, arkitekturer, resonneringstyper, filosofi, historie — bygd ut utover arkivet mot dagens pensum), med **to–tre innebygde regnemoduler** for de stabile, lavterskel-regnetemaene (fuzzy inferens ende-til-ende, perseptron/backprop-oppdatering, Bayes-oppdatering). Legg inn rikelig med **sant/usant + kort begrunnelse** og **kortsvar/sammenligning**-oppgaver (Aamodt-formen), siden det er den mest sannsynlige midtprøveformen og treffer sensorpreferansen for presise, korte svar. Ikke bygg tunge kapitler om GOMS/KLM/BCI/ASR — behandle dem som historiske/perifere noter.

---

## 8. Kildeliste

Alle filer ligger i `~/Desktop/Eksamner/NTNU/TDT4137/`.

**Eksamenssett med løsningsforslag lest grundig (alle 4 år):**
- `TDT4137-2015H-bm` + `TDT4137-2015H-LF-bm` (Thomassen)
- `TDT4137-2016H-bm` / `-en` + `TDT4137-2016H-LF-bm` (Thomassen)
- `TDT4137-2017H-bm` / `-en` + `TDT4137-2017H-LF-bm` (Thomassen)
- `TDT4137-2018H` (bm/nn/en i én fil) + `TDT4137-2018H-LF-en` (Aamodt)

Alle fire settene har fullstendig løsningsforslag, lest i sin helhet for både temaregistrering og metode. **Ingen sett fra dagens emneansvarlige (Mester) foreligger** — dette er analysens hovedbegrensning.

**Fagbeskrivelse:** omskrevet sammendrag av NTNUs emnebeskrivelse for TDT4137 (scratchpad: `fagbeskrivelse-tdt4137.md`), verifisert mot <https://www.ntnu.no/studier/emner/TDT4137> **8. juli 2026**. Emnet er **aktivt** (undervisningsstart høst 2026), navn «Kognitive systemer» / «Cognitive Systems», emneansvarlig **Rudolf Mester**, vurdering **midtprøve 40 % (2 t) + skriftlig eksamen 60 % (3 t)**, hjelpemiddel kode D, pensum = artikkelsamling oppgitt ved semesterstart.

**Merknader om kildene:**
- **Emneansvarlig og navn har skiftet flere ganger:** Asbjørn Thomassen (2015–2017, «Kognitive Arkitekturer», regneprofil), Agnar Aamodt (2018, samme navn, konseptuell profil), **Rudolf Mester (dagens, «Kognitive systemer», ukjent profil)**. Dette er behandlet eksplisitt i del 0 og gjennomsyrer prognosen.
- **Eksamensformatet er endret:** arkivet var én 4-timers eksamen (100 %); dagens kurs har delt vurdering (midtprøve + slutteksamen). Arkivets format er derfor **ikke** representativt for neste eksamen.
- **Ingen fast lærebok:** pensum er en artikkelsamling. Vernon (*Artificial Cognitive Systems: A Primer*, MIT Press 2014) er den mest gjennomgående referansen i arkivet; øvrige artikler (Kolodner, Forbus/Gentner, Chong/CLARION, Endsley, DARPA XAI) dukker opp i Aamodt-settet. Læreboka bør verifisere den nøyaktige pensumlisten når Mester publiserer den ved semesterstart.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster, fasiter eller løsningsforslag er gjengitt ordrett. Algoritmenavn, standardnotasjon (deltaregel, Bayes, COG) og faglige definisjoner er allmenn faglig notasjon, ikke opphavsrettslig beskyttet tekst.

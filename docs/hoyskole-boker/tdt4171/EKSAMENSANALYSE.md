# Eksamensanalyse: TDT4171 Metoder i kunstig intelligens (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på **8 ordinære eksamenssett med offisielle løsningsforslag** fra NTNU (vår 2015 – vår 2024), samt oppgavehefter på engelsk/bokmål/nynorsk og NTNUs emnebeskrivelse. Emneansvarlig er **Helge Langseth** (probabilistisk/beslutningsteoretisk profil), med løsningsforslag for de nyeste settene (V2022–V2024) ført i pennen av bl.a. **Xavier F.C. Sánchez Díaz**. Pensumboka er **Russell & Norvig — *Artificial Intelligence: A Modern Approach* (AIMA)**; fasitene refererer eksplisitt til sidetall (f.eks. forward-algoritmen «s. 485»). All notasjon følger AIMA-konvensjonen. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller løsningsforslag. Analysen er kvantitativ der kildene tillater det.
>
> **Forholdet til TDT4136:** TDT4171 er oppfølgeren til *TDT4136 Introduksjon til kunstig intelligens*. Der TDT4136 dekker **deterministisk problemløsning** (søk, CSP, logikk, planlegging, spillteori), dekker TDT4171 **usikkerhet, sekvensielle beslutninger og maskinlæring**. De to fagene overlapper nesten ikke i oppgavetyper — se progresjonsanalysen i del 1.

---

## 1. Eksamensform og utvikling

### Grunnform (gjeldende)

Skriftlig skoleeksamen, **4 timer**, karakterskala **A–F**, teller **100 %**. Tillatt hjelpemiddel er **kode D — bestemt, enkel kalkulator** (ingen trykte eller håndskrevne hjelpemidler). Obligatoriske øvinger må være godkjent for å gå opp. Ingen delprøve teller — hele karakteren avgjøres på slutteksamen. Oppgaveteksten er på **engelsk**; besvarelsen kan skrives på norsk eller engelsk (essayoppgaven i V2024 sier dette eksplisitt).

Eksamen er **ikke rent flervalg**. Den blander tre svartyper:

1. **Sant/usant og flervalg (auto-rettet).** Store batterier av konseptuelle påstander om KI-grunnlag, sannsynlighet, Bayes-nett-semantikk, HMM-inferens, MDP og læring. ⚠️ **Negativ retting** brukes gjennomgående — se under.
2. **«Regn/kjør metoden»-oppgaver (fritekst, ofte «tegnes på papir»).** Konstruér et Bayes-nett eller beslutningsnett, spesifiser en HMM med tabeller, kjør **forward-filtrering** steg for steg, kjør **verditerasjon**, regn **forventet nytte / VPI**. Dette er den karaktergivende kjernen.
3. **Korte teori-/drøftespørsmål (fritekst med anbefalt setningsintervall).** «Forklar hva `deep` betyr i deep learning», «hvordan skiller RL seg fra å løse en MDP», «forklar CBR-syklusen», «list fem etiske betenkeligheter ved KI».

Løsningsforslagene understreker gjennomgående at **flere korrekte svar godtas** — særlig på nettverkskonstruksjon (Bayes-/beslutningsnett), utility-design, HMM-tabellformat og drøftespørsmål. Fasiten viser bare *ett* mulig svar og markerer ofte hva som gis for «fullstendighetens skyld».

### ⚠️ Negativ retting styrer strategien

Dette er den viktigste enkeltmekanikken. To varianter i arkivet:

- **Klassisk (t.o.m. ~2019):** True/False-batteriet (Q1) scores **+2 rett, −3 galt, 0 blankt**, med **gulv på 0** for hele oppgaven (V2017/V2019 eksplisitt). Straffen for feil er altså *større* enn belønningen for rett.
- **Moderne Inspera (2020→):** typisk **+1 % rett / −1 % galt, 0 % blankt** (noen ledd +0,5/−0,5), fortsatt totalgulv 0. Enkelte blokker (V2022 3a/3b) er «alt-eller-intet»: **null poeng på hele blokken hvis ett delsvar er galt eller blankt**.

Sensors klare signal: **la ledd stå blankt når du er usikker** — et gjett med negativ forventning trekker ned. Læreboka må trene studenten i å *kjenne* når hun er sikker nok, ikke bare i å kunne stoffet.

### Årgangsutvikling — format, ikke innhold

| Periode | Format | Særpreg |
|---|---|---|
| **2015–2017** | Klassisk, håndskrevet fasit | 4 store oppgaver: (Q1) T/F-batteri om KI-grunnlag, (Q2) MDP/verditerasjon, (Q3) Bayes-nett-inferens, (Q4) ML/CBR. Negativ retting +2/−3. |
| **2019** | Overgang | Fortsatt Q1 T/F, men mer Inspera-preget; Bayes-nett medisinsk, beslutningsnett, **beslutningstrelæring** som egen oppgave. |
| **2020–2024** | Moderne Inspera | Mange auto-rettede MCQ/TF + fritekstledd «tegn/regn på papir». V2024 har **9 oppgaver** som dekker hele bredden. V2021–V2023 er d-separasjon-tunge; V2023 (Sánchez Díaz) har quokka-Bayes-nett + Hearthstone-VPI. |

**Konklusjon for lærebok:** Til forskjell fra TDT4136 (som hadde reell *innholdsdrift* — NLP falt ut) er TDT4171 **innholdsmessig bemerkelsesverdig stabilt** gjennom hele perioden. Det som endrer seg er *innpakningen* (klassisk skriftlig → Inspera auto-retting). Bygg mot **2021–2024-formatet**: mange auto-rettede sann/usant-ledd (med negativ retting) rundt en kjerne av fem–seks fritekst-«regn/tegn»-oppgaver. Én reell tilvekst: **NLP/word embeddings** dukker opp i V2024 (motsatt av TDT4136, der NLP *forsvant*).

### Struktur- og vektingsprofil

- **Antall oppgaver:** 4 store (klassisk) → **9 nummererte oppgaver** med delspørsmål (V2024). Prosentvekt per delspørsmål summerer til 100 %.
- **Vekting (V2024, representativ):** KI-grunnlag 6 %, usikkerhet/Bayes-nett 10 %, beslutningsnett 16 %, HMM 20 %, nevrale nett/gradient 10 %, dyp læring 10 %, NLP 8 %, forsterkende læring 10 %, CBR 10 %. **HMM og beslutningsnett er de tyngst vektede regneoppgavene.**
- **Bredden er eksamensformen:** hver eksamen dekker nesten hele emnet. Du kan ikke droppe et kjernetema og satse på at det ikke kommer.
- **Innpakning:** faglige kjerner kles i fortellinger (snødekte solpaneler = HMM, legediagnose = beslutningsnett, quokka-bilder på sosiale medier = Bayes-nett, Hearthstone = VPI, Flappy Bird = deep Q-læring). Innpakningen er kosmetikk.
- **Språk:** ved tvil om oversatte fagbegreper regnes **den engelske teksten som fasit**.

### Progresjon fra TDT4136 → TDT4171

Dette er avgjørende for å plassere læreboka riktig. De to fagene deler pensumbok (AIMA) og eksamensform (4 t, kode D, negativ retting), men **oppgavetypene overlapper nesten ikke**:

| | **TDT4136 (intro)** | **TDT4171 (metoder)** |
|---|---|---|
| Kjerneparadigme | Deterministisk problemløsning | Resonnering under usikkerhet + læring |
| Søk (BFS/DFS/UCS/A\*), heuristikk | **Kjerne** | — (forutsettes kjent) |
| CSP (AC-3, backtracking) | **Kjerne** | — |
| Logikk (CNF, resolusjon, FOL) | **Kjerne** | — |
| Adversarielt søk (minimax, alfa-beta) | **Kjerne** | — |
| Planlegging (PDDL, GraphPlan) | **Kjerne** | — |
| Spillteori (Nash, dominans) | Nivå 2 | — |
| Intelligente agenter (PEAS, miljø) | **Kjerne** | Berøres i T/F (rasjonalitet) |
| Sannsynlighet / simultanfordeling | — | **Kjerne** |
| Bayes-nett (d-separasjon, inferens) | — | **Kjerne** |
| Beslutningsnett / VPI / MEU | — | **Kjerne** |
| HMM / filtrering over tid | — | **Kjerne** |
| MDP / verditerasjon / Bellman | Så vidt nevnt | **Kjerne** |
| Forsterkende læring / Q-læring | — | **Kjerne** |
| Nevrale nett / gradient / dyp læring | — | **Kjerne** |
| Beslutningstrær / ID3 | — | **Kjerne** |
| Case-based reasoning (CBR) | — | **Kjerne (NTNU-signatur)** |

**Den eneste reelle koblingen** er den konseptuelle rammen om *rasjonelle agenter* og *rasjonalitet* (Turing-test, svak/sterk KI, nyttemaksimering), som går igjen i begge fags T/F-batterier. Alt regneapparat er nytt i TDT4171. En student som tok TDT4136 kjenner igjen agent-filosofien, men må lære et helt nytt matematisk maskineri: sannsynlighetsregning, betinget uavhengighet, forventet nytte, dynamisk filtrering, gradientnedstigning. **Læreboka skal ikke resirkulere TDT4136-stoff** — den skal bygge det sannsynlighets- og læringsteoretiske apparatet fra grunnen, med agent-/rasjonalitetsrammen som eneste bro tilbake.

---

## 2. Temafrekvens

Basert på de **8 ordinære settene med løsningsforslag** (V2015, V2016, V2017, V2019, V2021, V2022, V2023, V2024). Celleverdi = antall sett i årsgruppen der temaet forekommer i minst én oppgave. Årsgrupper: 2015–2017 (3 sett, klassisk format), 2019–2021 (2 sett), 2022–2024 (3 sett). **Gjenganger-scoren måler bredde/sikkerhet, ikke vekt.** Merk: bilde-/figurbaserte flervalgssider i V2021–V2023 lot seg ikke maskinlese fullt, men oppgavemerkelappene ble fanget — frekvensene under er kalibrert konservativt mot det som er sikkert lest.

| Tema | 2015–17 (3) | 2019–21 (2) | 2022–24 (3) | **Gjenganger-score** |
|---|---|---|---|---|
| **Bayes-nett: d-separasjon / (betinget) uavhengighet** | 3 | 2 | 3 | **8/8 = 100 %** |
| **KI-grunnlag: rasjonalitet, Turing, svak/sterk KI, etikk** (T/F) | 3 | 2 | 3 | **8/8 = 100 %** |
| **Case-based reasoning (CBR-syklusen R⁴)** | 3 | 2 | 3 | **8/8 = 100 %** ★ NTNU-signatur |
| **Bayes-nett: struktur/faktorisering + inferens (enumerasjon)** | 3 | 2 | 3 | **8/8 = 100 %** |
| **HMM / probabilistisk resonnering over tid (filtrering)** | 3 | 2 | 3 | **8/8 = 100 %** |
| **Nevrale nett / perceptron / gradient descent / dyp læring** | 3 | 1 | 3 | **7/8 = 88 %** |
| **MDP / verditerasjon / Bellman-likning** | 3 | 1 | 2 | **6/8 = 75 %** |
| **Beslutningsnett / påvirkningsdiagram / utility / VPI** | 2 | 2 | 2 | **6/8 = 75 %** |
| **Beslutningstrær / ID3 / informasjonsgevinst** | 2 | 2 | 2 | **6/8 = 75 %** |
| **Sannsynlighet: regning på simultanfordeling** | 2 | 1 | 2 | **5/8 = 63 %** |
| **Forsterkende læring / Q-læring / exploration–exploitation** | 2 | 1 | 2 | **5/8 = 63 %** |
| **Klassifikatorvalg mot datasett (metodesammenligning)** | 2 | 1 | 1 | **4/8 = 50 %** |
| **NLP / word embeddings** | 0 | 0 | 1 | **1/8 = 13 %** ↑ *nytt (V2024)* |

**Viktigste funn:**

1. **Fem temaer er 100 %-gjengangere.** d-separasjon, KI-grunnlag (T/F), CBR, Bayes-nett-inferens og HMM-filtrering dukker opp i *hvert eneste sett*. Som i TDT4136 er **bredden selve eksamensformen** — du kan ikke droppe et av disse fem.

2. **d-separasjon er den hyppigste og mest volumintensive ferdigheten.** V2021 hadde ~14 delspørsmål bygget på ett 6-variabelt nett; V2024 hadde fem uavhengighetsspørsmål; V2022 hadde genetikk-modellen (venstre-/høyrehendthet) og en egen struktur-blokk. **Dette er den enkeltferdigheten som avgjør flest poeng**, og den er negativt rettet — presis d-separasjon (ikke intuisjon) er kritisk.

3. **CBR er NTNU-signaturen.** Case-based reasoning (Retrieve–Reuse–Revise–Retain) er sjelden tungt vektlagt i generiske KI-fag, men er en fast bestanddel *hvert år* i TDT4171 — arven fra NTNUs egen CBR-forskningstradisjon. Alltid som teori-/drøftespørsmål (forklar syklusen; når slår CBR dyp læring?). **Billige, sikre poeng hvis du kan syklusen.**

4. **HMM-filtrering og verditerasjon er de tunge regneoppgavene.** Begge følger en fast oppskrift fra AIMA (forward-algoritmen; Bellman-oppdatering). V2024 vektet HMM til 20 %. Disse to er der studenten *tjener* karakteren gjennom feilfri mekanisk utregning.

5. **Læringssiden (nevrale nett, beslutningstrær, RL) er stabil kjerne.** Perceptron/gradient descent, deep learning-konsepter (CNN, overtilpasning, regularisering), ID3-informasjonsgevinst og Q-læring går igjen. Dette skiller TDT4171 skarpt fra TDT4136, som ikke har maskinlæring i det hele tatt.

6. **NLP er en fersk, motsatt trend.** Word embeddings dukket opp i V2024 (8 %). Der TDT4136 *mistet* NLP etter 2017, ser TDT4171 ut til å *ta det inn* — antakelig som respons på LLM-bølgen. Lavfrekvent, men i vekst; dekk det.

---

## 3. Oppgavetype-katalog

De sjangrene som faktisk går igjen. «Krav» oppsummerer fasitens foretrukne løsningsmetode og presisjonsnivå.

### A. KI-grunnlag — sant/usant om rasjonalitet, Turing, etikk
- **Krav:** Konseptuelle påstander, auto-rettet med negativ retting. Faste fasit-standpunkt (lær dem utenat):
  - Å handle rasjonelt er **ikke** det samme som å handle som mennesker (`Acting rationally ≠ acting like humans` — FALSE).
  - En agent med **feilbefengte/delvise sensorer kan fortsatt være rasjonell** (TRUE) — rasjonalitet er å gjøre det beste ut fra tilgjengelig informasjon, ikke å ha perfekt informasjon.
  - Svak KI **kan** bestå Turing-testen (TRUE); at et system **må** «tenke som et menneske» for å bestå den er FALSE.
  - En agent trenger **ikke** eksplisitt beregne nytte og sannsynlighet for å være rasjonell (V2024: FALSE) — men *hovedmålet* med faget er ikke «å forstå hva intelligens er» (FALSE).
  - Sterk vs. svak KI: at sterk KI per definisjon slår svak KI på alle oppgaver er FALSE; at Turing-bestått beviser sterk KI-hypotesen er FALSE (det kinesiske rom).
  - **Etikk-ledd** (list-oppgave, V2024): dødelige autonome våpen, masseovervåkning/personvern, skjevhet/bias, manglende transparens, jobbautomatisering/arbeidsledighet, maktkonsentrasjon/rikdomskonsentrasjon. Poeng gis proporsjonalt med antall gyldige punkter.
- **Frekvens:** 100 %.

### B. Sannsynlighet — regning på simultanfordeling
- **Krav:** Fra en oppgitt jointtabell:
  - `P(a) = Σ` de aktuelle cellene (marginaliser ut resten).
  - `P(a ∨ b) = Σ` cellene i unionen — **ikke dobbelttell** overlappet.
  - `P(¬a | b) = P(¬a ∧ b) / P(b)` (betinget = felles/marginal).
  - **Rund til to desimaler** når oppgaven ber om det (V2024: «1.236 → 1.24»).
- **Frekvens:** 63 % (ofte som oppvarming før Bayes-nett-blokken).

### C. Bayes-nett — d-separasjon / (betinget) uavhengighet ★ mest gjentatte ferdighet
- **Krav:** Avgjør uavhengighet ved **d-separasjon**, aldri ved intuisjon. Gå gjennom **hver sti** mellom variablene og avgjør om den er *aktiv* eller *blokkert*:
  - **Kjede** (A→B→C) og **gaffel/felles årsak** (A←B→C): blokkeres når midtnoden B er i betingingssettet (observert).
  - **Kollider / v-struktur** (A→B←C): blokkert som standard, men blir **aktiv** hvis kollidernoden B **eller en etterkommer av B** er observert. ⚠️ Etterkommere er den vanligste fellen.
  - To variabler er (betinget) uavhengige hvis **alle** stier er blokkert.
  - Auto-rettet Yes/No med negativ retting (V2024: `+1 % rett, −1 % galt, +2 % for alle rett`). **Svar kun etter å ha verifisert alle stier.**
- **Frekvens:** 100 % — og størst poengvolum av alle enkeltferdigheter.

### D. Bayes-nett — struktur, faktorisering og inferens (utregning)
- **Krav:** Fire undertyper:
  - *Strukturpåstander:* faktorisering etter foreldre `P(X₁,…,Xₙ) = ∏ P(Xᵢ | foreldre(Xᵢ))`; uten foreldre → produkt av marginaler (`P(X₁,…,Xₖ)=∏P(Xᵢ)`, V2017/V2019 TRUE). Bruk Markov-teppet: `P(E | P, L) = P(E | P, L, H)` når H er utenfor teppet (TRUE).
  - *Full simultansannsynlighet* for en tilstandsvektor: sett inn i kjederegelen og multipliser CPT-oppslagene (V2017 Q3b: `0.5·0.1·0.7·0.4·0.4 = 0.0056`).
  - *Posterior / diagnostisk spørring* (`P(I | H,L,E)`): Bayes + **summér ut de skjulte variablene ved enumerasjon**. Foretrukket oppsett: teller = leddet med query=sann summert over skjulte; nevner = samme sum over begge query-verdier; forhold = svaret (V2017 Q3c: `0.0105/(0.0105+0.00875)=0.545`).
  - *Konstruér nettet fra en fortelling* (V2023 quokka, V2019 medisinsk, V2015): tegn kun den **kvalitative DAG-strukturen**; riktig kant*retning* (årsak → virkning) teller mest. Bygg modellen slik at en **domeneekspert lett kan oppgi sannsynlighetene** — dette er et eksplisitt sensurkriterium. Ekstra forsvarbare kanter straffes ikke; manglende/overflødig én–to kanter godtas med forklaring. **Null poeng bare hvis studenten ikke forstår hva et Bayes-nett er.**
- **Frekvens:** 100 %.

### E. Beslutningsnett / påvirkningsdiagram og beslutningsteori
- **Krav:**
  - *Tegn strukturen (på papir):* **ovaler = tilfeldighetsnoder, rektangler = beslutningsnoder, diamant = nyttenode.** Riktig kantretning; utility-noden har **ingen barn**; beslutningsnoden peker på det den påvirker (V2024 legediagnose: sykdom, symptom, test, testkostnad, testresultat, behandling, utfall, nytte).
  - *CPT for en node:* rader med samme betinging skal summere til **100 %**; konkrete tall er mindre viktige enn at mønsteret er riktig (høyere sann-positiv for korrekt test–sykdom-par).
  - *Additiv nyttefunksjon:* tildel nytteverdier og kombiner additivt (V2024: `U = utfall·3 + kostnad`). Konkrete tall er likegyldige så lenge de gir mening.
  - *Generell evalueringsalgoritme (MEU):* (1) sett bevisvariablene; (2) for hver verdi av beslutningsnoden — sett noden, regn posterior for nyttenodens foreldre, regn forventet nytte; (3) **returner handlingen med høyest forventet nytte** (V2024 3.4, ordrett fasit-oppskrift).
  - *Forventet nytte + verdien av perfekt informasjon (VPI):* regn forventet nytte per handling, velg MEU; `VPI = (forventet nytte når man kjenner variabelen og handler optimalt) − (forventet nytte uten den informasjonen)`. «Hvor mye vil du betale for å vite X?» = denne differansen. V2023 Hearthstone: EU(0/1/2 minions) = 4 / 5,5 / 5,5; med kunnskap om AoE: EU = 6 (har) og 9 (har ikke), snitt 7,5; VPI = 7,5 − 5,5 = **2,0 gull**.
- **Frekvens:** 75 %.

### F. HMM / probabilistisk resonnering over tid — filtrering
- **Krav:**
  - *Spesifiser modellen:* struktur `S₀→S₁→S₂` med `Sₜ→Eₜ`; oppgi **transisjonsmodell** `P(Sₜ | Sₜ₋₁)` og **sensormodell** `P(Eₜ | Sₜ)`. Flere tabellformater godtas (full/kompakt). Tegnes på papir.
  - *Filtrering — forward-algoritmen (foretrukket):* for hvert steg **(1) prediksjon** `P(Sₜ | e₁:ₜ₋₁) = Σ_{sₜ₋₁} P(Sₜ | sₜ₋₁)·P(sₜ₋₁ | e₁:ₜ₋₁)`, deretter **(2) oppdatering** `P(Sₜ | e₁:ₜ) = α·P(eₜ | Sₜ)·P(Sₜ | e₁:ₜ₋₁)`, normaliser med α. **Vis symbolsk form (variabler/fordelinger) FØR du setter inn tall**, og rund mellom- og sluttresultat til to desimaler. Fasiten peker eksplisitt til AIMA-eksempelet (paraply/regn, s. 485). V2024 solpanel-snø: `P(S₀)=⟨0.3,0.7⟩ → predict ⟨0.41,0.59⟩ → update e₁=t → ⟨0.09,0.91⟩ → predict ⟨0.26,0.74⟩ → update e₂=f → ⟨0.51,0.49⟩`.
  - *Sant/usant om temporal inferens (faste definisjoner):* **filtrering** `P(Sₜ | e₁:ₜ)`; **prediksjon** `P(Sₜ₊ₖ | e₁:ₜ)`, k>0; **glatting/smoothing** `P(Sₖ | e₁:ₜ)`, 0≤k<t; **mest sannsynlige forklaring** `P(S₁:ₜ | e₁:ₜ)`. Førsteordens Markov: `P(Sₜ | S₀:ₜ₋₁) = P(Sₜ | Sₜ₋₁)`. HMM krever **både** Markov-antakelsen **og** sensor-Markov-antakelsen. HMM forutsetter **stasjonaritet** (samme modell over tid). Smoothing-kostnaden vokser **lineært** i antall tidssteg. Markov-antakelsen krever *ikke* Bayes' regel (V2019/V2021 FALSE) og gjelder ikke bare diskrete variabler.
- **Frekvens:** 100 % (tyngst vektede regneoppgave, V2024 20 %).

### G. MDP / verditerasjon
- **Krav:**
  - *Modeller som MDP:* angi tilstander, handlinger, transisjonsmodell `P(s' | s,a)` og belønning `R(s)`; gjør antakelsene eksplisitte (**fullt observerbar, Markov, stasjonær transisjon/belønning, uendelig horisont**). Prosessen: observer → få belønning → velg handling → utfør, i loop.
  - *Bellman + verditerasjon:* `U*(s) = R(s) + γ·maxₐ Σ_{s'} P(s' | s,a)·U*(s')`; initialiser `U₀=0`, iterer, og **utled strategien etter hver iterasjon** (handlingen som maksimerer). V2017 Q2c (γ=0,5, to-tilstands-verden): `U₁(S)=3, U₁(¬S)=2 → U₂(S)=4,5, U₂(¬S)=3,5 → U₃(S)=5,25, U₃(¬S)=4,25`; konvergerer mot `U*(S)=6, U*(¬S)=5`.
  - *Sant/usant:* med ikke-negative belønninger og γ∈(0,1) er `Uₜ(s)` **ikke-avtakende** i t; når `|S| ≫ |A|` er én verditerasjon-iterasjon generelt raskere enn én policy-iterasjon-iterasjon; **å endre γ kan endre den optimale policyen** (påstand om at den *ikke* gjør det er FALSE); verditerasjon og policyiterasjon hviler på **samme** antakelser (V2022 TRUE); diskontering med uendelig horisont gir fortsatt rasjonell atferd (påstand om det motsatte er FALSE).
- **Frekvens:** 75 %.

### H. Forsterkende læring / Q-læring
- **Krav:**
  - «Reinforcement» = de (sporadiske) **belønningene** agenten får og som forsterker gode handlingsmønstre.
  - *RL vs. å løse en MDP:* i RL er transisjons- og belønningsfunksjonen **ukjent på forhånd** — agenten må lære gjennom **interaksjon** med **utforsking (exploration/exploitation)**; å løse en MDP forutsetter kjent modell og krever ingen utforsking (V2024 8.2, tre kulepunkter).
  - RL vs. veiledet/uveiledet læring: ikke merkede data; fokus på interaksjon for å maksimere **kumulativ** belønning over sekvensielle beslutninger.
  - RL er **ikke** en form for dyp læring (V2021 FALSE). Q-læring krever Markov-antakelsen (V2021 TRUE).
  - *Deep Q-læring for spill* (V2024 Flappy Bird): dypt nevralt nett **approksimerer Q-funksjonen** fra rå tilstand (pikselbilder fra flere skjermbilder); CNN gir Q-verdi per handling; velg høyest Q ved testing; tren ved å oppdatere nettvektene som i vanlig Q-læring.
- **Frekvens:** 63 %.

### I. Nevrale nett — perceptron, gradient descent, dyp læring
- **Krav:**
  - *Gradient descent / perceptron:* forklar symbolene `D` (treningsdata av (x,t)-par), `x⃗` (attributt-/inputvektor), `t` (mål), `w` (vekter), `η` (læringsrate). **Gradienten** er leddet `2·(−xᵢ(t−o))`, utledet fra den partiellderiverte av **kvadratfeilen** mhp. `wᵢ`; vi **trekker gradienten fra vektene** for å bevege oss mot lavere feil (steepest descent). V2024 5.1/5.2 spør nettopp om å identifisere og begrunne gradientleddet.
  - *Konseptuelt om dyp læring (V2024 6):* «dyp» = **mange lag** (abstraksjonsnivåer) som bygger stadig mer sammensatte trekk; **overtilpasning** motvirkes med regularisering (L1/L2), **dropout**, **tidlig stopp**, mer/mer variert data, dataaugmentering, kryssvalidering; **CNN** slår MLP på bilder pga. **romlig struktur, delte vekter (weight sharing) og pooling** — færre parametre, raskere, mindre overtilpasning.
  - *T/F-fakta:* nevrale nett trenes typisk med **backpropagation** (TRUE); en perceptron kan **ikke** representere en vilkårlig funksjon (ikke lineært separerbare, f.eks. XOR — FALSE); weight sharing er en nøkkelingrediens i CNN (TRUE).
- **Frekvens:** 88 %.

### J. Beslutningstrær / ID3
- **Krav:** Definisjon: en trestruktur med **interne noder** (attributt-tester) og **løvnoder** (klasser), brukt til klassifikasjon/regresjon. Velg splittattributt ved **maksimal informasjonsgevinst** = reduksjon i (forventet) entropi. ID3 er grådig → **ingen garanti for optimalt tre** (bare heuristikk, V2022 TRUE). Et tre med k interne noder kan uttrykke enhver boolsk funksjon for stor nok k (V2019/V2021 TRUE).
- **Frekvens:** 75 %.

### K. Klassifikatorvalg og ML-metodikk
- **Krav:** *Velg metode mot datasett* (V2017 Q4a): lineært separerbart → **perceptron** (enklest); ikke-lineært/XOR-aktig → **beslutningstre** eller dyp læring; CBR (euklidsk avstand) gir bare delvis uttelling der andre passer bedre. **Velg den enkleste** metoden som løser oppgaven. *Metodikk-felle* (V2017 Q4c): bruk et eget **valideringssett** til å velge hyperparameter — **aldri test-settet**, da overrapporterer man ytelsen.
- **Frekvens:** 50 %.

### L. Case-based reasoning (CBR) ★ NTNU-signatur
- **Krav:** Fire steg i **R⁴-syklusen**: **Retrieve** (finn nærmeste case med likhets-/avstandsmål), **Reuse** (bruk løsningen på den nye situasjonen), **Revise** (tilpass/verifiser løsningen), **Retain** (lagre den nye casen i case-basen). CBR bruker et **avstandsmål** mot case-basen; CBR *er* en form for (instansbasert) maskinlæring / veiledet læring. *Når CBR slår dyp læring* (V2024 9.2): lite data / sjeldne tilfeller (f.eks. medisinsk diagnose av sjeldne sykdommer), behov for **forklarbarhet** og manuell korrigerbarhet, lav treningskostnad, hvert nytt case forbedrer systemet umiddelbart.
- **Frekvens:** 100 % (som teori-/drøftespørsmål).

### M. NLP / word embeddings — nytt (V2024)
- **Krav:** **Ordinnbygginger (word embeddings)** er tette vektorrepresentasjoner som fanger semantikk (like ord nær hverandre) og slår **one-hot** (lavere dimensjon, meningsfulle relasjoner). Spamklassifisering (V2024 7.2): slå ord opp i forhåndstrente embeddinger → aggreger (f.eks. snitt) → mat inn i klassifikator (nevralt nett) → klassifiser nye e-poster.
- **Frekvens:** 13 % (nytt, i vekst).

---

## 4. Sensorens krav

### Faste metaregler
1. **Vis symbolsk form før tall** i HMM-/inferensutregninger, og rund til to desimaler som anvist. Fasiten gir full uttelling for **korrekt utregningsflyt selv om tallene er litt feil**, men null hvis flyten er helt gal (V2024 4.3 eksplisitt).
2. **Beslektede korrekte svar godtas — bredt.** Særlig nettverkskonstruksjon, utility-design, HMM-tabellformat, CBR-forklaringer og etikk. Fasiten viser bare ett eksempel og sier det eksplisitt. **Null poeng bare når studenten «ikke vet hva et Bayes-/beslutningsnett er».**
3. **Delvis uttelling er regelen.** Ta med hovedpoenget først i definisjoner. Fritekst gis prosentvis etter dekning; list-oppgaver (etikk) gis proporsjonalt med antall gyldige punkter.
4. **Negativ retting på T/F og d-separasjon.** +1 rett / −1 galt (eller +2/−3 klassisk), 0 blankt, gulv 0. Noen blokker er alt-eller-intet. **Ikke gjett.**
5. **Følg oppgitt rundings-/formatinstruks bokstavelig** (to desimaler; «én desimal, f.eks. −2.3»).
6. **Spesifiser antakelser ved tvetydighet** — oppgaveteksten oppfordrer eksplisitt til det, og løses da etter egne antakelser uten trekk.

### Hva som skiller karakternivåene
- **Bestått (E):** riktige svar på de rene faktaledd (T/F om rasjonalitet/Turing), navngi CBR-stegene, sette opp én korrekt CPT-rad, ett prediksjonssteg i filtrering.
- **Midtsjikt (C/D):** korrekt d-separasjon på enkle stier, riktig oppsett av et Bayes-/beslutningsnett med riktige nodetyper og kantretninger, én korrekt verditerasjon-iterasjon med strategi, symbolsk oppsett av filtrering.
- **Toppsjikt (A/B):** **feilfri** full filtrering over tre steg med symbolsk form og korrekt normalisering; d-separasjon korrekt også på colliders med observerte etterkommere; VPI regnet komplett (EU per handling → betinget EU → differanse); posterior-spørring med korrekt utsummering av skjulte variabler; presise begrunnelser i drøftespørsmålene (hvorfor RL ≠ MDP-løsning, hvorfor CNN slår MLP, når CBR slår dyp læring).

---

## 5. Typiske feil (eksplisitt eller implisitt i fasitene)

1. **Påstå uavhengighet uten d-separasjon** — den største fellen. Særlig: glemme at en **collider blir aktiv når en etterkommer er observert** (V2021/V2024). Intuisjon om «henger de sammen?» svikter systematisk.
2. **Dobbelttelle celler i `P(a ∨ b)`** — legge sammen `P(a)+P(b)` uten å trekke fra overlappet.
3. **Glemme å summere ut skjulte variabler** i posterior-spørringer (`P(I|H,L,E)`) — bare regne én term i teller/nevner.
4. **Sette inn tall før symbolsk form** i filtrering — mister uttelling for utregningsflyten og gjør normaliseringsfeil vanskeligere å se.
5. **Glemme normaliseringen α** i oppdateringssteget, eller normalisere på feil sted.
6. **Feil nodetype i beslutningsnett** (oval/rektangel/diamant) eller **feil kantretning**; la utility-noden få barn.
7. **Bygge Bayes-nettet «bakvendt»** — kanter fra virkning til årsak, slik at en domeneekspert ikke lett kan oppgi CPT-ene (eksplisitt sensurkriterium).
8. **Gjette på negativt rettede ledd** — forventningsnegativt; la stå blankt ved usikkerhet.
9. **Bruke test-settet til å velge hyperparametre** i stedet for et valideringssett (V2017 Q4c) — overrapporterer ytelse.
10. **Blande sammen filtrering / prediksjon / glatting / mest sannsynlig forklaring** — kjenn de fire definisjonene med `k`-relasjonen til `t` eksakt.
11. **Anta at Markov-antakelsen krever Bayes' regel** (V2019/V2021 FALSE) — sammenblanding av strukturantakelse og sannsynlighetsmanipulasjon.
12. **Kalle RL en form for dyp læring** (V2021 FALSE), eller påstå at man løser en MDP med utforsking (RL utforsker, MDP-løsning gjør ikke).

---

## 6. Notasjons- og algoritmeapparat

All notasjon følger **AIMA (Russell & Norvig)**. Læreboka bør bruke nøyaktig disse formene.

### Sannsynlighet og Bayes-nett
- Simultanfordeling, marginalisering (`P(a)=Σ`-celler), betinget sannsynlighet `P(a|b)=P(a∧b)/P(b)`, produktregel, **Bayes' regel** `P(a|b)=P(b|a)P(a)/P(b)`.
- **Faktorisering** `P(X₁,…,Xₙ)=∏ P(Xᵢ | foreldre(Xᵢ))`; **Markov-teppe** (foreldre, barn, barnas øvrige foreldre).
- **d-separasjon:** kjede / gaffel (blokkert når midtnode observert), **collider/v-struktur** (blokkert som standard; aktiv når collider *eller etterkommer* observert). Aktive vs. blokkerte stier.
- **Inferens ved enumerasjon:** posterior som forhold av summer over skjulte variabler; normaliseringskonstant α.
- Lokal vs. global semantikk; worst-case romkompleksitet **eksponentiell** i antall variabler.

### Sekvensielle modeller
- **HMM:** tilstand `Sₜ`, observasjon `Eₜ`; transisjonsmodell `P(Sₜ|Sₜ₋₁)`, sensormodell `P(Eₜ|Sₜ)`; første-ordens Markov + sensor-Markov + **stasjonaritet**.
- **Forward-algoritmen (filtrering):** prediksjon `Σ_{sₜ₋₁} P(Sₜ|sₜ₋₁)P(sₜ₋₁|e₁:ₜ₋₁)` → oppdatering `α·P(eₜ|Sₜ)·P(Sₜ|e₁:ₜ₋₁)`.
- Inferenstyper: **filtrering** `P(Sₜ|e₁:ₜ)`, **prediksjon** `P(Sₜ₊ₖ|e₁:ₜ)`, **glatting** `P(Sₖ|e₁:ₜ)` (kostnad lineær i t), **mest sannsynlig forklaring** `P(S₁:ₜ|e₁:ₜ)` (Viterbi).

### Beslutninger
- **Beslutningsnett / påvirkningsdiagram:** tilfeldighetsnode (oval), beslutningsnode (rektangel), nyttenode (diamant). MEU-evalueringsalgoritme. **Forventet nytte** `EU(a)=Σ P(utfall|a)·U(utfall)`; **VPI** = differanse i forventet nytte med/uten perfekt informasjon. Additiv nyttefunksjon.
- **MDP:** `⟨S, A, P(s'|s,a), R(s), γ⟩`. **Bellman** `U*(s)=R(s)+γ·maxₐ Σ P(s'|s,a)U*(s')`. **Verditerasjon** (iterér Bellman-oppdateringen) vs. **policyiterasjon**. Diskonteringsfaktor γ; optimal policy `π*`.
- **Forsterkende læring:** ukjent `P`/`R`; exploration vs. exploitation; **Q-læring** `Q(s,a)`; **deep Q-læring** (nevralt nett approksimerer Q).

### Læring
- **Perceptron / gradient descent:** kvadratfeil, gradient `2·(−xᵢ(t−o))`, læringsrate η, vektoppdatering. **Dyp læring:** lag/abstraksjonsnivåer, backpropagation, overtilpasning, regularisering (L1/L2), dropout, tidlig stopp; **CNN** (delte vekter/weight sharing, pooling, konvolusjonsfiltre).
- **Beslutningstrær / ID3:** entropi, informasjonsgevinst, grådig splitting.
- **Valideringssett** vs. test-sett for hyperparametervalg.
- **CBR:** case-base, likhets-/avstandsmål, **Retrieve–Reuse–Revise–Retain**.
- **NLP:** word embeddings (tette vektorer) vs. one-hot; aggregering + klassifikator.

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (kommer garantert hvert år)
1. **Bayes-nett: d-separasjon / (betinget) uavhengighet** — 100 %, størst poengvolum. Alle stier, colliders med etterkommere, negativ retting → svar bare når verifisert.
2. **Bayes-nett: struktur + inferens (enumerasjon)** — 100 %. Faktorisering, full simultansannsynlighet, posterior med utsummering av skjulte, konstruér nettet «riktig vei».
3. **HMM-filtrering (forward-algoritmen)** — 100 %, tyngst vektet regneoppgave (20 %). Symbolsk form før tall, prediksjon→oppdatering→normalisering, to desimaler.
4. **KI-grunnlag (rasjonalitet, Turing, svak/sterk KI, etikk)** — 100 %. Lær fasit-standpunktene utenat; etikk-listen (6 punkter).
5. **CBR-syklusen (R⁴)** — 100 %, NTNU-signatur. Retrieve–Reuse–Revise–Retain; når CBR slår dyp læring. Billige, sikre poeng.

### Nivå 2 — må kunne (avgjør C→A)
6. **Beslutningsnett / VPI / MEU** — 75 %. Nodetyper, kantretning, additiv utility, evalueringsalgoritme, VPI-differanse.
7. **MDP / verditerasjon / Bellman** — 75 %. Modeller antakelsene, iterér Bellman med strategi per iterasjon.
8. **Nevrale nett / gradient descent / dyp læring** — 88 %. Gradientleddet + utledning, CNN vs. MLP, overtilpasning/regularisering.
9. **Beslutningstrær / ID3** — 75 %. Informasjonsgevinst, grådig = ikke optimal.
10. **Forsterkende læring / Q-læring** — 63 %. RL vs. MDP-løsning, deep Q-læring for spill.

### Nivå 3 — bør kjenne til (lavfrekvent, men differensierer / i vekst)
11. **Sannsynlighetsregning på simultanfordeling** — 63 %. Marginaliser, ikke dobbelttell, to desimaler.
12. **Klassifikatorvalg / ML-metodikk** — 50 %. Enkleste metode som løser datasettet; valideringssett ≠ test-sett.
13. **NLP / word embeddings** — 13 %, **nytt (V2024), i vekst**. Tette vektorer vs. one-hot; embeddings + klassifikator.

### Bør IKKE prioriteres (TDT4136-stoff)
**Søk (A\*), CSP, logikk/resolusjon, adversarielt søk, PDDL-planlegging, spillteori.** Dette er *forgjengerfaget* TDT4171 bygger på, men det testes **ikke** i TDT4171. Forutsettes kjent; læreboka skal ikke bruke plass på det (maks en kort bro via rasjonalitets-/agentrammen).

**Prognose for neste ordinære eksamen (kode D, 4 t):** Inspera-format, ~9 nummererte oppgaver, sum 100 %, jevnt fordelt, med store auto-rettede sann/usant-blokker (negativ retting) rundt en kjerne av fritekst-«regn/tegn»-oppgaver. Forvent med svært høy sikkerhet: **én KI-grunnlag-T/F-blokk** (+ etikk-liste); **én d-separasjon-blokk** (flere ledd, negativ retting); **én Bayes-nett-konstruksjon/inferens-oppgave**; **én HMM-filtrering** (tre steg, symbolsk + to desimaler); **én CBR-teorioppgave**; svært sannsynlig **ett beslutningsnett** (evt. med VPI), **én MDP/verditerasjon**, **én nevralt-nett/dyp-læring-oppgave** og **én RL-oppgave**; mulig **NLP/word-embeddings**. Studenten som kan (a) kjøre filtrering og verditerasjon feilfritt for hånd med symbolsk mellomregning, (b) d-separere presist (colliders + etterkommere), (c) konstruere Bayes-/beslutningsnett med riktige nodetyper og kantretning, og (d) resitere fasit-standpunktene om rasjonalitet/RL/CBR — vil score høyt. Negativ retting gjør **disiplinert blanking ved usikkerhet** til en egen ferdighet verdt å trene.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/TDT4171/`.

**Løsningsforslag lest grundig:**
`2024V_lf` (fullt utskrevet, 9 oppgaver — hoveddokument for gjeldende form), `2023V_lf` (quokka-Bayes-nett + Hearthstone-VPI, Sánchez Díaz), `2022V_lf` (stort T/F-batteri + genetikk-uavhengighetsmodell + Bayes-nett-struktur), `2021V_lf` (d-separasjon-tung, 42 s.), `2017V_lf` (klassisk 4-oppgavers utskrift: T/F, MDP/verditerasjon, Bayes-nett-inferens, ML/CBR — full mellomregning). (`.pdf`)

**Løsningsforslag lest for tema-/metoderegistrering:** `2015V_lf`, `2016V_lf` (CBR-tung, filtrering, verditerasjon-pseudokode), `2019V_lf` (T/F, medisinsk Bayes-nett, beslutningsnett, beslutningstrelæring).

**Oppgavehefter (format-/oppgavetypebekreftelse):** `2016V_en`, `2017V_en/_bm`, `2020V_en`, `2021V_en`, `2023V_en`, `2024V_en`.

**Fagbeskrivelse:** omskrevet sammendrag av NTNUs emnebeskrivelse for TDT4171 (scratchpad: `fagbeskrivelse-tdt4171.md`; kilde: <https://www.ntnu.no/studier/emner/TDT4171>). Emnet er verifisert **aktivt** (undervisningsstart vår 2027, Trondheim og Ålesund, engelsk; forkunnskapskrav TDT4136/TDT4172).

**Merknader om kildene:**
- **Pensum konstant:** Russell & Norvig, *AIMA*, gjennom hele perioden. Fasitene refererer sidetall (forward-algoritmen «s. 485»). All algoritmenotasjon er AIMA-notasjon.
- **Innholdsstabilitet:** I motsetning til TDT4136 (der NLP falt ut) er TDT4171 innholdsmessig svært stabilt 2015–2024; det som endrer seg er formatet (klassisk skriftlig → Inspera auto-retting). Eneste reelle tilvekst er **NLP/word embeddings** (V2024).
- **Bilde-/figursider:** flere flervalgssider i V2021–V2023 er figurbaserte og lot seg ikke maskinlese fullt; temafrekvensen i del 2 er kalibrert konservativt mot det som er sikkert lest, supplert med oppgavemerkelappene som ble fanget.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster, fasiter eller løsningsforslag er gjengitt ordrett. Algoritmenavn, standardnotasjon og faglige definisjoner er allmenn faglig notasjon og ikke opphavsrettslig beskyttet tekst.

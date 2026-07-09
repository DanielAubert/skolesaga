# Bokskjelett: SØK2012 Atferdsøkonomi — eksamensrettet lærebok

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
> `EKSAMENSANALYSE.md` (10 dokumenterte sett H2018–H2025, hvorav 6 med
> fullstendige sensorveiledninger/løsningsforslag med tallsvar). Arketype:
> **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori/drill/
> øvingseksamen) er obligatoriske og gjentas ikke her. Emnet har i tillegg et
> tydelig **begrepsdrøftingselement** (den dominerende «definer + eksempel +
> forklar årsak»-sjangeren, 3–4 per sett); for begrepssjanger-kapitlet (7.1) og
> begrepsdrillen lånes struktur fra `DNA-drofting.md` (begrepskontrakt →
> oppskrift → momentliste), dokumentert der. Alle mønstereksempler i skjelettet
> er omskrivninger; forfatteren skal variere dem videre (egne tall, egne
> kontekster), aldri kopiere inn ordrett.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `sok2012` |
| Tittel | **SØK2012 Atferdsøkonomi** |
| Institusjon | NTNU (Institutt for samfunnsøkonomi) |
| Level | `'Høyskole'` |
| Arketype | Regnefag (lett kvantitativt modellfag: verdifunksjon, forventet nytte, Bayes, diskontering, spill) med sterkt begrepsdrøftingselement |
| Antall kapitler | **28** (1 eksamenskart + 2 forkunnskaper + 5 prospektteori + 3 risiko + 4 Bayes/heuristikker + 3 intertemporalt + 5 spill/sosiale preferanser + 1 anomali-leksikon + 4 eksamenstrening) |
| Estimert totaltid | **1 610 min ≈ 27 timer** |
| Quiz totalt | **570** (krav ≥500) |
| Flashcards totalt | **600** (krav ≥500; sikt 550–650 for tospråklig, begrepsrikt fag — jf. audit-lærdommen) |

**Pitch (ett avsnitt):** SØK2012-eksamen har en usedvanlig stabil form: **7–8
likeveide korte spørsmål** (12,5–14 % hver) som hver eneste år trekkes fra de
**samme seks pilarene** — (i) prospektteori og verdifunksjonen, (ii) beslutning
under risiko med forventet nytte og sikkerhetsekvivalent, (iii) Bayes-oppdatering
og base-rate neglect, (iv) intertemporalt valg med eksponensiell vs. kvasi-
hyperbolsk (β-δ) diskontering, (v) spillteori med sosiale preferanser (Nash i
rene og blandede strategier + transformerte utbetalingsmatriser), og (vi) et
bredt begrepsapparat av beslutningsanomalier (framing, decoy, endowment, mental
accounting, commitment, sunk cost). Fordi arkivet inneholder **fullstendig fasit
med tallsvar til 6 av 10 sett**, er oppgavetypene uvanlig godt dokumentert — og
de **resirkuleres nesten ordrett med nye tall** (taxi-/base-rate-oppgaven,
retirement-diskonteringen, hatt-WTA/WTP, tillitsspillet, de sosiale
preferanse-matrisene). Denne boka er derfor bygget som **fem kjernedeler** — én
per regnbar pilar — pluss et **begrepsleksikon** over anomaliene, hver med den
faste «definisjon + eksempel + årsak»-formen sensor krever. **Verdifunksjonen er
signaturverktøyet** — atferdsøkonomiens motstykke til Cobb-Douglas i SOK1002 —
og driller studenten i sensorens jernregel: **regning skal alltid tolkes
økonomisk** (tapsaversjon, risikoaversjon, present bias, commitment), figur er
et pluss ved verdifunksjon/decoy/framing, og ved spill vil sensor se
beste-svar-resonnementet og indifferensbetingelsen — ikke bare svaret. Faget er
**konseptuelt/anvendt, ikke matematisk tungt**: ingen kalkulus tyngre enn
kvadratrøtter, potenser og veide summer; formelsamling og kalkulator er tillatt,
og Bayes' teorem trykkes på hvert formelark.

**Kritisk avgrensnings- og arbeidsdelingsregel (gjelder HELE boka):** SØK2012 er
NTNUs atferdsøkonomi-emne og **et reelt nytt fag i samlingen** — ingen annen
bygget/skjelett-bok dekker prospektteori, verdifunksjonen, β-δ-diskontering eller
base-rate neglect i atferdsøkonomisk forstand. Det eneste emnet med reelt
tematisk slektskap er **ECON4260 Behavioral Economics (UiO)** — en **tvilling på
en annen institusjon** med egen `SKJELETT.md`. De to deler alle pilarene, men er
**bevisst ulike i notasjon, vektlegging og de subtile A/B-poengene**, og skal
IKKE gjøres like:

- **Bygg ut her (SØK2012s egenart, lite/ikke i ECON4260):** Nash-likevekt i
  **rene OG blandede** strategier via indifferensbetingelsen; transformasjon av
  **hele utbetalingsmatrisen** via ulike sosiale nyttefunksjoner (altruist
  $u=0{,}5x+0{,}5y$, misunnelig $u=x-y$, Rawlsiansk $u=\min\{x,y\}$) — bredere
  enn ECON4260s rene Fehr-Schmidt-fokus; **St. Petersburg-paradokset**;
  **prospektteoriens fire-felts-mønster** (domene × sannsynlighet); **base-rate
  neglect med oppgitt Bayes-formel** (NTNU trykker formelen — studenten anvender,
  pugger ikke); **rasjonalitet via transitivitet + ekspansjonsbetingelsen** som
  egen sjanger; **beauty contest/level-k**.
- **IKKE bygg ut (ECON4260s egenart, fraværende/marginalt i SØK2012):**
  **Rabin-kalibrering**, **intensjonsbasert fairness equilibrium/reciprocity som
  formell modell**, **dual-self-modellen**, **kind–wicked-miljøer**, og
  norm-/anerkjennelsesmodeller med multiple likevekter. Positiv resiprositet
  nevnes i SØK2012 kun **verbalt** som forklaring på avvik fra delspillperfekt
  likevekt i tillitsspill (ikke som egen modell).

Boka er selvstendig; den kryssrefererer til andre NTNU-bøker kun for genuin
forkunnskap (grunnleggende sannsynlighet, Nash-likevekt-mekanikk). Se §7 for den
fullstendige arbeidsdelingstabellen mot ECON4260 og SOK1002/SØK1011.

**Kritisk notasjonsregel (gjelder HELE boka)** — arkivets notasjon skal brukes
nøyaktig, ikke lærebok-alternativer:

- **Verdifunksjon (prospektteori):** $v(x)$, der $x$ er endring relativt til et
  **referansepunkt** (gevinst $x>0$, tap $x<0$); **stykkevis definert** med
  brattere helning for tap enn for gevinst (**tapsaversjon**). S-formet: **konkav
  for gevinst, konveks for tap**. Standardformer fra arkivet: $v(x)=\sqrt{x}$
  (gevinst) / $-2\sqrt{|x|}$ (tap), eller $v=x-\bar x$ (gevinst) /
  $1{,}5(x-\bar x)$ (tap). **Beslutningsvekter** $\pi(p)$ overvekter små
  sannsynligheter (fire-felts-mønsteret). Integrering vs. segregering av
  gevinster/tap (hedonisk redigering).
- **Nytte under risiko:** $u(x)$ (ofte $\sqrt{x}$); **forventet nytte**
  $E[u]=\sum_i p_i\,u(x_i)$; **forventet verdi** $E[x]=\sum_i p_i x_i$;
  **sikkerhetsekvivalent** $CE$ løst fra $u(CE)=E[u]$. Konkav $u$ ⇒ risikoavers
  ⇒ $CE<E[x]$.
- **Diskontering:** eksponensiell $U^0=u_0+\delta u_1+\delta^2 u_2+\dots$;
  **kvasi-hyperbolsk (β-δ)** $U^0=u_0+\beta\delta u_1+\beta\delta^2 u_2+\dots$,
  der $0<\beta\le 1$ måler present bias / manglende selvkontroll; sett fra $t=1$:
  $U^1=u_1+\beta\delta u_2+\dots$. **Sofistikert** (forutser eget svik → velger
  commitment device) vs. **naiv**.
- **Bayes:** $P(A\mid B)=\dfrac{P(B\mid A)P(A)}{P(B\mid A)P(A)+P(B\mid\neg A)P(\neg A)}$
  (**oppgitt på formelark** — studenten anvender, pugger ikke).
- **Spill:** 2×2 utbetalingsmatrise (rad = spiller 1, kolonne = spiller 2,
  første tall = spiller 1s payoff); Nash-likevekt i **rene** og **blandede**
  strategier; blandede sannsynligheter $p,q$ via **indifferensbetingelsen**
  (motspilleren gjøres indifferent); **delspillperfekt likevekt** via baklengs
  induksjon.
- **Sosiale preferanser:** $u(x,y)$ der $x$ = egen payoff, $y$ = motspillers
  payoff; altruist $0{,}5x+0{,}5y$, misunnelig $x-y$, Rawlsiansk $\min\{x,y\}$,
  generell form $ax^\alpha+by^\beta$.

**Kritisk metoderegel (gjelder HELE boka):** Fem faste sensorkrav (fra analysens
§4) gjelder overalt: **(a) definisjon + eksempel + årsak** ved begrepsoppgaver —
alle tre ledd kreves; egne eksempler godtas, men mekanismen (verdifunksjonens
form eller en heuristikk) MÅ forklares; figur er et pluss ved decoy/framing/
verdifunksjon. **(b) regning skal tolkes** — tallet alene er halvt svar;
konkluder økonomisk (tapsaversjon, risikoaversjon, present bias, commitment).
**(c) vis mekanismen bak likevekten** — beste-svar-resonnementet ved rene Nash,
indifferensbetingelsen **eksplisitt** ved blandet likevekt. **(d) kontrast teori
mot atferd** ved ultimatum-/tillitsspill — både delspillperfekt likevekt OG
observert atferd, pluss forklaringen (sosiale preferanser/resiprositet). **(e)
Bayes korrekt + base-rate neglect forklart verbalt** — poenget er anvendelse +
tolkning av hvorfor intuisjonen bommer. Egne forutsetninger tillates ved uklare
oppgaver (skal oppgis). Begreper forventes kjent **på engelsk** (framing,
endowment effect, decoy effect, base rate neglect osv.) — norsk hovedtekst med
engelsk fagterm i parentes ved første forekomst.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): forkunnskaper i bunn,
deretter de fem regnbare pilarene i en pedagogisk rekkefølge (verdifunksjonen
først fordi den underbygger både risiko, framing og endowment), så
anomali-leksikonet, til slutt eksamenstreningen. Frekvensen styrer *omfanget* —
de fem pilarene er ~90–100 %-gjengangere og får hver sin del med drillkapittel.

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. Rammer inn «7–8 likeveide spørsmål»-malen, de seks pilarene og sjangerkatalogen A–I. |
| 1 | Rasjonalitet og sannsynlighet: forkunnskaper | 2 | Rasjonalitet (transitivitet/ekspansjonsbetingelse, ~40 %) OG sannsynlighetsapparatet Bayes/spill bygger på. Rasjonalitetstemaet er selv eksamenssjanger (I); sannsynlighetskapitlet er ren forkunnskap. |
| 2 | Prospektteori og verdifunksjonen | 5 | Signaturverktøyet, ~100 % frekvens. Regnes og forklares; WTA/WTP, endowment, framing, integrering/segregering bygger alle på den → nivå 1 «perfekt» → 4 teorikapitler + drillkapittel. |
| 3 | Beslutning under risiko | 3 | Forventet nytte + sikkerhetsekvivalent + risikoholdning ~90 %; St. Petersburg + fire-felts-mønster som A/B-markører → nivå 1 «perfekt» → 2 teorikapitler + drillkapittel. |
| 4 | Bayes, heuristikker og bias | 4 | Bayes/base-rate neglect ~90 % (minst én oppgave nesten hvert sett); heuristikker/bias ~60 % → nivå 1 «perfekt» → 3 teorikapitler + drillkapittel. |
| 5 | Intertemporalt valg | 3 | Eksponensiell vs. β-δ-diskontering ~90 %; present bias, tidsinkonsistens, sofistikert vs. naiv, commitment → nivå 1 «perfekt» → 2 teorikapitler + drillkapittel. |
| 6 | Spillteori og sosiale preferanser | 5 | Nash rene+blandede ~80 %, sosiale preferanser transformerer spillet ~70 %, ultimatum-/tillitsspill ~70 % → nivå 1 «perfekt» → 4 teorikapitler + drillkapittel. |
| 7 | Anomali-leksikonet og nivå-3-temaer | 1 | Begrepsapparatet (decoy, mental accounting, commitment, sunk cost, ambiguitetsaversjon) + nudge (~15 %) + beauty contest/level-k (~20 %) + offentlige goder (~10 %) samlet → nivå 2/3 «kunne/kjenne» → 1 tett kapittel (begrepsdrillen ligger i Del 8). |
| 8 | Eksamenstrening | 4 | Begrepsdrill (sjanger A, ~12–15 gjengangere, DNA-drofting-mal) + 3 komplette øvingseksamener som speiler «7–8 likeveide spørsmål»-malen. |

**Avvik fra DNA-malen (dokumentert):**
1. DNA-en legger *alle* sjangerkapitler i siste del. Her ligger de fem
   drillkapitlene (2.5, 3.3, 4.4, 5.3, 6.5) inne i sine egne pilardeler, fordi
   hver pilar er én av de gjentakende likeveide spørsmålene og må drilles
   umiddelbart etter teorien. Del 8 beholder begrepsdrillen (sjanger A) og de
   tre øvingseksamenene.
2. DNA-en er ren regnefag. SØK2012 har et **sterkt begrepsdrøftingselement** —
   den dominerende «definisjon + eksempel + årsak»-sjangeren (3–4 per sett).
   Begrepssjanger-kapitlet (8.1) er derfor bygget etter `DNA-drofting.md`s
   sjangerkapittel-mal (begrepskontrakt → oppskrift → momentliste), ikke som et
   regnedrillkapittel. Forankringen er i **mekanismen** (verdifunksjonens form,
   en heuristikk), ikke i navngitte pensumforfattere — dette er et modellfag,
   ikke et pensumdrøftingsfag.
3. Del 1 (forkunnskaper) er dels forkunnskap (sannsynlighet), dels et eget
   eksamenstema (rasjonalitet). Rasjonalitetskapitlet (1.1) er derfor et fullt
   teorikapittel med egen sjanger (I), mens sannsynlighetskapitlet (1.2) er et
   kompakt verktøykapittel. Prøvene i Del 1 er metode-/rasjonalitetsprøver.
4. Verdifunksjonen (Del 2) legges **før** risiko (Del 3) selv om ren forventet
   nytte er den «klassiske» inngangen — fordi verdifunksjonen underbygger
   endowment, framing, integrering/segregering OG risikoholdningens
   asymmetri (gevinst-frame → risikoaversjon, tap-frame → risikosøking), og er
   bokas mest gjennomgripende verktøy.

---

## 3. Kapitler

Feltene under følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–I) refererer
til oppgavetype-katalogen som presenteres i Del 0 (gjengitt der fra analysen §3):
**A** begrepsdiskusjon om en anomali (definisjon + eksempel + årsak), **B**
verdifunksjon/prospektteori (regning), **C** forventet nytte + sikkerhets-
ekvivalent, **D** Bayes-oppdatering + base-rate neglect, **E** intertemporalt
valg (eksponensiell vs. β-δ), **F** Nash-likevekt (rene + blandede strategier),
**G** sosiale preferanser transformerer spillet, **H** ultimatum-/tillits-/
sender-mottaker-spill (teori vs. atferd), **I** rasjonalitet (preferanser og
nyttefunksjon-representasjon). Prioritetsklasser: **perfekt** (nivå 1) / **kunne**
(nivå 2) / **kjenne** (nivå 3).

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet: slik testes SØK2012

- **id:** `sok2012-0-1` · **number:** 0.1 · **estimatedMinutes:** 30 · **prerequisites:** ingen
- **Kapitteltype:** eksamenskart
- **description:** Eksamensformen, «7–8 likeveide korte spørsmål»-malen, de seks pilarene, sjangerkatalogen A–I og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på alle 10 dokumenterte sett H2018–H2025 + 6 sensorveiledninger. Skal gjengi: (i) **formen**: 4 timers skriftlig skoleeksamen, digital i Inspera (håndtegninger/figurer kan lastes opp med sjusifret kode, 15 min ekstra), karakter A–F, 7,5 studiepoeng, **100 % av karakteren**; **hjelpemidler = normalt kode C** (matematisk formelsamling Sydsæter/Strøm/Berck + enkel kalkulator Casio FX-82-serien), H2025 oppgir kode H; under korona var V2021 en forkortet 3-timers hjemmeeksamen med 70 % vekt; **Bayes' teorem trykkes på hvert formelark** (studenten anvender, pugger ikke); (ii) **den stabile malen**: standardmalen 2023–2025 er **7–8 spørsmål med lik vekt** (H2023/V2024/H2024/V2025 = 8 spørsmål, H2025 = 7), hver teller 12,5–14 %; eldre mal (2018–2022) hadde 4–5 oppgaver med deloppgaver, også lik vekt; **fast miks i hvert sett**: 3–4 «diskuter et begrep»-spørsmål + 1–2 regneoppgaver på verdifunksjon/prospektteori + 1 Bayes/base-rate-oppgave + 1 intertemporal diskonteringsoppgave + 1–2 spillteorioppgaver (ofte med sosiale preferanser); (iii) **målform**: de fleste settene er på **engelsk**; H2025 er på **norsk bokmål** — begreper forventes kjent på engelsk; (iv) **temafrekvens-tabellen** (fra analysen §2): prospektteori/verdifunksjon ~100 %, beslutning under risiko/CE ~90 %, Bayes + base-rate neglect ~90 %, intertemporalt valg (eksp. vs. β-δ) ~90 %, begrepsdiskusjoner om anomalier ~90 %, Nash rene+blandede ~80 %, sosiale preferanser i spill ~70 %, ultimatum-/tillitsspill ~70 %, heuristikker/bias ~60 %, mental regnskapsføring/hedonisk redigering ~50 %, rasjonalitet/transitivitet ~40 %, beauty contest/level-k ~20 %, nudge ~15 %, offentlige goder ~10 %; (v) at oppgavene **resirkuleres med nye tall** — taxi-Bayes, retirement-diskontering, hatt-WTA/WTP, tillitsspill og sosiale-preferanse-matriser går igjen nesten ordrett med endrede tall; (vi) **sensorens metaregler** (analysens §4): definisjon + eksempel + årsak ved begreper; regning skal tolkes økonomisk; vis mekanismen bak likevekten (indifferensbetingelsen ved blandet Nash); kontrast teori mot atferd i ultimatum-/tillitsspill; Bayes korrekt + base-rate neglect forklart verbalt; egne forutsetninger tillates; (vii) **karakterskillene** (analysens §4): bunn (E–D) = riktige definisjoner, riktig oppsett av verdifunksjon/Bayes/diskontering, korrekt Nash i rene strategier; midt (C) = komplette utregninger med korrekt tolkning, korrekt blandet likevekt, korrekt transformert sosial-preferanse-matrise, riktig kontrast teori/atferd; topp (A/B) = ser de subtile poengene — at **sofistikerte** hyperbolske diskonterere velger commitment devices, at **små sannsynligheter overvektes** (fire-felts-mønsteret), at St. Petersburg løses via avtakende grensenytte, skiller integrering fra segregering korrekt, bruker figurer.
- **Innholdskontrakt:** Oppgavetype-katalogen A–I presenteres som studentens sjekkliste med de seks pilarene: verdifunksjon (B), risiko/CE (C), Bayes (D), diskontering (E), spill/sosiale preferanser (F/G/H), rasjonalitet (I) og begrepsdiskusjon (A) som den gjennomgående sjangeren. **Prognose for neste eksamen** (analysens §7): overveldende sannsynlig 7–8 likeveide korte spørsmål — minst én verdifunksjon-regneoppgave, én Bayes/base-rate-oppgave, én β-δ-diskonteringsoppgave, én til to spillteorioppgaver (minst én med sosiale preferanser), og tre–fire begrepsdiskusjoner fra den faste listen; tallene endres, malene gjenbrukes. Avslutt med **avgrensningen**: at faget IKKE bygger på tung mikroteori (Lagrange/Slutsky/kostnadsfunksjoner — hører til SOK1002), ikke makro/generell likevekt/markedsdesign, og at ECON4260-spesialtemaene (Rabin, fairness equilibrium, dual-self, kind–wicked) ikke er SØK2012-pensum; og **leseplanen**: Del 1 er forkunnskap (+ rasjonalitetssjangeren), Del 2–6 er de fem regnbare pilarene («må perfekt»), Del 7 er «bør kjenne», Del 8 er ren trening.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt 7–8 likeveide spørsmål og 240 minutter — sett opp tidsbudsjett per spørsmål» og «hvilke seks pilarer avgjør karakteren, og i hvilken del drilles hver av dem?».
- **Typiske feil:** Metafeilene: bruke tid på uforklarte figurer eller utolkede tall; dra inn tung mikroteori (Lagrange) som faget ikke tester; pugge Bayes-formelen (den er oppgitt) i stedet for å øve på anvendelse + base-rate-tolkning; tro at begrepsoppgaver kun krever en definisjon (de krever definisjon + eksempel + årsak).
- **Quiz: 14 · Flashcards: 14** (eksamensform, malen, de seks pilarene, sjangerkatalog, metaregler, avgrensning)

**Prøve-kvote Del 0:** ingen (metadel).

---

### Del 1 — Rasjonalitet og sannsynlighet: forkunnskaper *(prioritet: rasjonalitet = KUNNE / sannsynlighet = forkunnskap)*

#### Kapittel 1.1: Rasjonalitet: preferanser, transitivitet og nyttefunksjon-representasjon

- **id:** `sok2012-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen
- **Kapitteltype:** teori
- **description:** Hva det vil si at preferanser er rasjonelle (fullstendige og transitive), når en nyttefunksjon finnes, og ekspansjonsbetingelsen — atferdsøkonomiens «nullpunkt» som anomaliene avviker fra.
- **Eksamensbelegg:** Rasjonalitet/transitivitet er sjanger I, ~40 % frekvens (H2024 kaffe/melk/te, V2025, H2025 øl/vin/martini). Rammer også inn hele fagets premiss: anomaliene er systematiske avvik fra dette benchmarket. Prioritet: **kunne** (nivå 2), men fungerer som fundament for hele boka.
- **Innholdskontrakt:** **Rasjonelle preferanser** = **fullstendige** (to alternativer kan alltid rangeres) OG **transitive** ($a\succeq b$ og $b\succeq c$ ⇒ $a\succeq c$). **Representasjonsresultatet:** hvis (og bare hvis, på endelig mengde) preferansene er fullstendige og transitive, finnes en **nyttefunksjon** $U$ som representerer dem ($a\succeq b \Leftrightarrow U(a)\ge U(b)$); nytten er **ordinal**. **Brudd:** ikke-transitive preferanser (f.eks. $a\succ b\succ c$ men $c\succ a$) ⇒ **ingen nyttefunksjon finnes** ⇒ preferansene er irrasjonelle. **Ekspansjonsbetingelsen** (menyavhengighet): at et tredje, ikke-valgt alternativ endrer rangeringen mellom to andre er irrasjonelt — dette er broen til **decoy-effekten** (kap. 7). Vis begge de faste casene: kaffe/melk/te (ikke-transitiv ⇒ ikke rasjonell) og øl/vin/martini (ekspansjonsbrudd). Understrek at atferdsøkonomien tar dette rasjonalitetsbegrepet som **benchmark** og studerer de systematiske avvikene.
- **Oppgavesjangre:** I. Mønstereksempel: «En person foretrekker te fremfor kaffe og kaffe fremfor kakao, men velger likevel kakao fremfor te. Er preferansene rasjonelle? Finnes det en nyttefunksjon som representerer dem? Begrunn.»
- **Typiske feil:** **Glemme å sjekke transitivitet** før man erklærer preferanser rasjonelle / leter etter en nyttefunksjon (feilkatalog §5.10); blande fullstendighet og transitivitet; ikke se at ekspansjonsbrudd (et tredje alternativ endrer rangeringen) er selve irrasjonaliteten decoy-effekten utnytter; behandle nytten som kardinal.
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 1.2: Sannsynlighetsverktøyet: betingede sannsynligheter og Bayes' teorem

- **id:** `sok2012-1-2` · **number:** 1.2 · **estimatedMinutes:** 45 · **prerequisites:** `sok2012-1-1`
- **Kapitteltype:** teori (verktøy)
- **description:** Betinget sannsynlighet, total sannsynlighet og Bayes' teorem som mekanisk verktøy — grunnlaget for base-rate-oppgavene (kap. 4) og for utbetalingssannsynligheter i risiko/spill.
- **Eksamensbelegg:** Ikke et eget eksamenstema, men **forutsatt i hver Bayes-oppgave** (~90 %) og i forventet-nytte-regningen (~90 %). Bayes-formelen trykkes på formelarket — poenget er å kunne *sette den opp riktig*, ikke pugge den. Prioritet: **forkunnskap** (må sitte). Kryssrefererer til grunnleggende sannsynlighet der studenten trenger repetisjon.
- **Innholdskontrakt:** **Betinget sannsynlighet** $P(A\mid B)=P(A\cap B)/P(B)$; **multiplikasjonsregelen** $P(A\cap B)=P(B\mid A)P(A)$; **total sannsynlighet** $P(B)=P(B\mid A)P(A)+P(B\mid\neg A)P(\neg A)$. **Bayes' teorem** (oppgitt): $P(A\mid B)=\dfrac{P(B\mid A)P(A)}{P(B\mid A)P(A)+P(B\mid\neg A)P(\neg A)}$ — tolk hvert ledd (prior $P(A)$ = **grunnrate/base rate**, likelihood $P(B\mid A)$ = testens treffsikkerhet, posterior $P(A\mid B)$). **Naturlige frekvenser** som regnehjelp: uttrykk problemet i «av 1000 personer …» for å unngå brøkfeil (og for å se hvorfor intuisjonen bommer). Legg grunnlaget for base-rate neglect (kap. 4.1) ved å vise at posterior kan være mye lavere enn testens treffsikkerhet når grunnraten er lav. Vis ett gjennomregnet eksempel med naturlige frekvenser.
- **Oppgavesjangre:** D-fundament. Mønstereksempel: «En sykdom rammer 2 % av befolkningen. En test gir positivt utslag hos 90 % av de syke og hos 8 % av de friske. Sett opp Bayes' teorem for $P(\text{syk}\mid\text{positiv})$ og regn ut.»
- **Typiske feil:** Regne $P(B\mid A)$ i stedet for $P(A\mid B)$ (foregriper base-rate neglect); glemme det andre leddet i nevneren (falske positive fra den store friske gruppen); sette prior lik testens treffsikkerhet; brøkfeil som naturlige frekvenser ville avslørt.
- **Quiz: 20 · Flashcards: 22**

**Prøve-kvote Del 1:** 4 prøver (1.A rasjonalitet — transitivitet og nyttefunksjon-representasjon fra en preferanserelasjon, sjanger I; 1.B ekspansjonsbetingelsen — er valget rasjonelt når et tredje alternativ endrer rangeringen, sjanger I; 1.C betingede sannsynligheter og total sannsynlighet, verktøy; 1.D Bayes-oppsett med naturlige frekvenser som opptakt til base-rate, sjanger D-fundament).

---

### Del 2 — Prospektteori og verdifunksjonen *(prioritet: PERFEKT — ~100 %, signaturverktøyet)*

#### Kapittel 2.1: Referansepunkt, verdifunksjon og tapsaversjon

- **id:** `sok2012-2-1` · **number:** 2.1 · **estimatedMinutes:** 50 · **prerequisites:** `sok2012-1-1`
- **Kapitteltype:** teori
- **description:** Prospektteoriens kjerne: at folk vurderer utfall som gevinster og tap relativt til et referansepunkt, med en S-formet, stykkevis verdifunksjon som er brattere for tap (tapsaversjon).
- **Eksamensbelegg:** ~100 % frekvens — selve motoren i faget, analogt til Cobb-Douglas i SOK1002. Både regnet (sjanger B) og forklart (sjanger A). Alle av WTA/WTP, endowment, framing og integrering/segregering bygger på den. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Referansepunkt** = utgangspunktet ($x=0$) utfall måles fra (ofte status quo); utfall $>0$ er **gevinster**, $<0$ er **tap**. **Verdifunksjonen** $v(x)$: (i) definert over *endringer* fra referansepunktet, ikke sluttilstander (kontrast mot forventet nytte som ofte integrerer over formue); (ii) **S-formet** — **konkav for gevinst** (avtakende grensverdi), **konveks for tap**; (iii) **brattere for tap enn for gevinst** = **tapsaversjon** ($|v(-x)|>v(x)$). Standard stykkevis form: $v(x)=x^\gamma$ for $x\ge 0$, $v(x)=-\lambda|x|^\gamma$ for $x<0$, med tapsaversjonskoeffisient $\lambda>1$; arkivets konkrete former $\sqrt{x}\,/\,-2\sqrt{|x|}$ og $(x-\bar x)\,/\,1{,}5(x-\bar x)$. Tegn og tolk figuren (referansepunktet i origo, knekk/brattere helning nedover). **Konsekvenser** som forberedes: risikoholdningens asymmetri (gevinst-frame → risikoaversjon, tap-frame → risikosøking, kap. 3.2 og 2.3), endowment (kap. 2.4), integrering/segregering (kap. 2.2). Vis et enkelt regneeksempel med sammenligning gevinst vs. tilsvarende tap.
- **Oppgavesjangre:** A + B-fundament. Mønstereksempel (A): «Forklar hva en verdifunksjon i prospektteorien er. Definer begrepet, beskriv de tre egenskapene (referanseavhengig, S-formet, tapsaversjon) og forklar hvorfor tap veier tyngre enn tilsvarende gevinster.»
- **Typiske feil:** **Blande gevinst- og tapsdelen** eller bruke feil krumning/helning (tap er brattere; gevinst konkav, tap konveks — feilkatalog §5.4); definere verdifunksjonen over sluttformue i stedet for over endringer fra referansepunktet; forveksle tapsaversjon (asymmetrisk helning) med risikoaversjon (krumning); glemme å tegne knekken i origo.
- **Quiz: 26 · Flashcards: 32**

#### Kapittel 2.2: Regning på verdifunksjonen: integrering og segregering (hedonisk redigering)

- **id:** `sok2012-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok2012-2-1`
- **Kapitteltype:** teori
- **description:** Å regne verdien av sammensatte utfall — når det lønner seg å slå sammen (integrere) og når det lønner seg å skille (segregere) gevinster og tap, ut fra verdifunksjonens krumning.
- **Eksamensbelegg:** ~50 % frekvens (mental regnskapsføring/hedonisk redigering: H2023, V2025, H2025 casino-oppgaven). Ren regnesjanger (B) med obligatorisk tolkning. Prioritet: **perfekt** (regnesjangeren).
- **Innholdskontrakt:** **Segregert** verdi = $v(\text{gevinst}) + v(\text{tap})$ (hvert utfall vurderes hver for seg fra referansepunktet); **integrert** verdi = $v(\text{gevinst}+\text{tap})$ (utfallene slås sammen til ett nettobeløp). **Hedonisk redigerings-reglene** (av verdifunksjonens form): **segregér gevinster** (konkav $v$ ⇒ to små gevinster verdt mer hver for seg enn slått sammen), **integrér tap** (konveks $v$ ⇒ ett stort tap svir mindre enn to mindre), **integrér et lite tap i en stor gevinst** (netto-gevinst-frame skjuler tapet), **segregér en liten gevinst fra et stort tap** («silver lining» — den lille gevinsten gir uforholdsmessig glede når den står alene). Gjennomregn casino-typen: $v=\sqrt{x}/2$ (gevinst), $-2\sqrt{|x|}$ (tap); segregert $v(\text{gevinst})+v(\text{tap})$ vs. integrert $v(\text{netto})$, og avgjør hva som gir høyest verdi. **Tolkningskrav:** konkluder alltid hvilken redigering personen bør/vil gjøre og hvorfor (mekanismen).
- **Oppgavesjangre:** B. Mønstereksempel: «En person har verdifunksjon $v(x)=\sqrt{x}$ for gevinst og $-2\sqrt{|x|}$ for tap. Personen vinner 16 og taper 25. Regn ut totalverdien ved segregering og ved integrering, og avgjør hvilken redigering som gir høyest opplevd verdi.»
- **Typiske feil:** **Regne feil på om det lønner seg å slå sammen eller skille** gevinster/tap (feilkatalog §5.9); bruke gevinstdelen på et tap eller omvendt; oppgi tallet uten å konkludere hvilken redigering som er best og hvorfor; glemme «silver lining»-tilfellet (liten gevinst segregeres fra stort tap).
- **Quiz: 24 · Flashcards: 24**

#### Kapittel 2.3: Framing og beslutningsvekter: det fire-felts-mønsteret

- **id:** `sok2012-2-3` · **number:** 2.3 · **estimatedMinutes:** 50 · **prerequisites:** `sok2012-2-1`
- **Kapitteltype:** teori
- **description:** Hvordan innramming (gevinst vs. tap) snur risikoholdningen, og hvordan overvekting av små sannsynligheter gir prospektteoriens fire-felts-mønster.
- **Eksamensbelegg:** Framing er fast begrepsgjenganger (sjanger A, Asian-disease-typen H2024); fire-felts-mønsteret er eksplisitt A/B-markør (V2025). Prioritet: **perfekt** (framing) / A/B-differensiator (fire-felts).
- **Innholdskontrakt:** **Framing-effekt** = at *samme* utfall vurderes ulikt avhengig av om det presenteres som gevinst eller tap (brudd på beskrivelsesinvarians). Mekanisme via verdifunksjonen: **gevinst-frame** (konkav $v$) → **risikoaversjon** (foretrekker det sikre); **tap-frame** (konveks $v$) → **risikosøking** (foretrekker sjansen). Vis Asian-disease-typen: samme program beskrevet som «redder 200» vs. «400 dør» gir motsatt valg. **Beslutningsvekter** $\pi(p)$: prospektteorien vekter sannsynligheter ikke-lineært — **små sannsynligheter overvektes** ($\pi(p)>p$ for liten $p$), moderate/store undervektes. **Fire-felts-mønsteret** (domene × sannsynlighet): (1) gevinst, høy $p$ → risikoavers (sikre den sannsynlige gevinsten); (2) gevinst, liten $p$ → risikosøkende (lotteri: long shot overvektes → folk kjøper lodd); (3) tap, høy $p$ → risikosøkende (spill for å unngå sikkert tap); (4) tap, liten $p$ → risikoavers (forsikring: overvekter den lille skadesannsynligheten → kjøper forsikring). Understrek at ren risikoaversjon i gevinstdomenet *ikke* alltid gjelder — for små $p$ snur det.
- **Oppgavesjangre:** A + B. Mønstereksempel (A): «Forklar framing-effekten. Definer den, gi et eksempel der en gevinst-innramming og en tap-innramming av samme situasjon gir motsatt valg, og forklar mekanismen via verdifunksjonens form.»
- **Typiske feil:** **Feil retning på framing/tapsaversjon** — ikke se at tap-frame gir risikosøking og gevinst-frame gir risikoaversjon (feilkatalog §5.7); **overse overvekting av små sannsynligheter** og anta at risikoaversjon i gevinstdomenet alltid gjelder (§5.8); blande beslutningsvekt $\pi(p)$ med sannsynlighet $p$; ikke koble de fire feltene til de to aksene (domene × sannsynlighet).
- **Quiz: 24 · Flashcards: 28**

#### Kapittel 2.4: Endowment-effekten: WTA, WTP og referansepunktet

- **id:** `sok2012-2-4` · **number:** 2.4 · **estimatedMinutes:** 50 · **prerequisites:** `sok2012-2-1`
- **Kapitteltype:** teori
- **description:** Hvorfor folk krever mer for å gi fra seg et gode (WTA) enn de vil betale for å skaffe det (WTP) — endowment-effekten som en direkte konsekvens av referanseavhengighet og tapsaversjon.
- **Eksamensbelegg:** ~90 % kobling til verdifunksjonen; hatt-oppgaven (WTA vs. WTP) har identisk struktur i H2023 og H2024. Både regnet (B) og forklart (A). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Endowment-effekt** = at det å eie et gode øker verdien man tillegger det. **Mekanisme:** når man eier godet, er referansepunktet «å ha det» → å selge oppleves som et **tap** (veies tyngre via tapsaversjon); når man ikke eier det, er kjøp en **gevinst** (veies lettere). Derfor **WTA > WTP** (willingness to accept > willingness to pay). Regn hatt-typen: med $v(x-\bar x)=x-\bar x$ ved gevinst og $1{,}5(x-\bar x)$ ved tap ⇒ **WTA $= 1{,}5$, WTP $= 1$** (salg oppleves som tap, veies med faktor 1,5). Koble til at endowment gir en **kile** mellom kjøps- og salgspris som standard nyttemaksimering (uten referansepunkt) ikke forutsier — der er WTA = WTP. Nevn forsøksdesign (kaffekopp-eksperimentene) kort. Understrek at effekten forsvinner for goder holdt «for bytte» (referansepunktet er da ikke eierskap).
- **Oppgavesjangre:** A + B. Mønstereksempel: «En person verdsetter en gevinst $x$ med $v=x$ og et tap med $v=1{,}5x$. Forklar endowment-effekten, og regn ut forholdet mellom personens WTA og WTP for et gode. Hva ville standard nyttemaksimering (uten referansepunkt) forutsi?»
- **Typiske feil:** Ikke koble WTA > WTP til at salg er et tap (tapsaversjon) mens kjøp er en gevinst; regne WTA og WTP fra feil del av verdifunksjonen; tro at standardteorien også gir WTA > WTP; glemme at effekten avhenger av referansepunktet (eierskap).
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 2.5: Drill: prospektteori-oppgaven

- **id:** `sok2012-2-5` · **number:** 2.5 · **estimatedMinutes:** 75 · **prerequisites:** `sok2012-2-4`, `sok2012-2-2`, `sok2012-2-3`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på hele verdifunksjon-/prospektteoripilaren: fra en gitt stykkevis $v(x)$ til fullført A-besvarelse med regning OG økonomisk tolkning (tapsaversjon, WTA/WTP, integrering/segregering, framing).
- **Eksamensbelegg:** Dekker sjangrene A og B samlet — den ~100 %-frekvente verdifunksjonspilaren. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) identifiser referansepunktet og skriv opp den stykkevise $v(x)$ (rett del for gevinst, rett del for tap); 2) sett inn utfallene, regn verdien; 3) ved sammensatte utfall: regn både segregert og integrert, avgjør hedonisk redigering; 4) ved WTA/WTP: identifiser hva som er gevinst og hva som er tap fra referansepunktet, regn forholdet; 5) **tolk økonomisk** — tapsaversjon, endowment, framing-retning, hvilken redigering som er best; 6) figur der relevant (S-formet $v$ med referansepunkt, avstander navngitt). **Gjennomregnet eksamenscase med sensor-margnotater** (hva som gir uttelling ved hvert steg — særlig den økonomiske tolkningen og det å bruke rett del av $v$). **8–12 oppgaver** på eksamensnivå som roterer form ($\sqrt{x}$-basert, lineær-med-tapsfaktor, generell $x^\gamma/-\lambda|x|^\gamma$) × leveranse (ren verdiregning / integrering vs. segregering / WTA-WTP / framing-retning), alle med nyskrevne, pent kalibrerte tall og `solution` + `hints`.
- **Oppgavesjangre:** A, B. Mønstereksempel (full kjede): «(a) En person har $v(x)=\sqrt{x}$ (gevinst) og $-2\sqrt{|x|}$ (tap). Vinner 9, taper 4 — regn segregert og integrert verdi og avgjør hva som er best. (b) Forklar hvordan endowment-effekten følger av denne verdifunksjonen. (c) Personen står overfor et valg mellom sikkert utfall og lotteri — forklar hvordan risikoholdningen avhenger av om det er gevinst- eller tap-frame.»
- **Typiske feil:** Hele prospektteori-repertoaret fra §5: feil del av verdifunksjonen / blandet krumning (§5.4), feil integrering/segregering (§5.9), feil framing-retning (§5.7), oversett overvekting av små sannsynligheter (§5.8), utolkede tall (§5.2).
- **Quiz: 18 · Flashcards: 12**

**Prøve-kvote Del 2:** 4 prøver (2.A begreper prospektteori — verdifunksjon, referansepunkt, tapsaversjon, framing, endowment, sjanger A; 2.B verdiregning med integrering/segregering og hedonisk redigering, sjanger B; 2.C WTA/WTP + endowment regnet og forklart, og fire-felts-mønsteret, sjanger A+B; 2.D full prospektteorioppgave på eksamensnivå — verdifunksjon + framing + endowment, sjanger A+B).

---

### Del 3 — Beslutning under risiko *(prioritet: PERFEKT — ~90 %)*

#### Kapittel 3.1: Forventet nytte, sikkerhetsekvivalent og risikoholdning

- **id:** `sok2012-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `sok2012-1-2`, `sok2012-2-1`
- **Kapitteltype:** teori
- **description:** Forventet nytte $E[u]=\sum p_i u(x_i)$, sikkerhetsekvivalenten $CE$ løst fra $u(CE)=E[u]$, og hvordan nyttefunksjonens krumning gir risikoholdningen.
- **Eksamensbelegg:** ~90 % frekvens (sjanger C); CE-oppgaven (spill 100/25/0 med $u=\sqrt{x}$ ⇒ CE = 16) i V2025, risikopremie-typer flere år. Ren regnesjanger med obligatorisk tolkning. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Forventet verdi** $E[x]=\sum_i p_i x_i$ (utfallenes veide gjennomsnitt). **Forventet nytte** $E[u]=\sum_i p_i u(x_i)$ (von Neumann–Morgenstern-benchmarket: rasjonell aktør maksimerer forventet nytte, ikke forventet verdi). **Sikkerhetsekvivalent** $CE$ = det sikre beløpet som gir samme nytte som lotteriet, løst fra $u(CE)=E[u]$. **Risikoholdning fra krumning:** **konkav** $u$ (avtakende grensenytte) ⇒ **risikoavers** ⇒ $CE<E[x]$ (aksepterer mindre enn forventet verdi for å slippe risikoen); lineær $u$ ⇒ risikonøytral ($CE=E[x]$); konveks $u$ ⇒ risikosøkende ($CE>E[x]$). **Risikopremie** $=E[x]-CE$. Gjennomregn V2025-typen: utfall 100 ($p=1/5$), 25 ($p=2/5$), 0 ($p=2/5$), $u=\sqrt{x}$ ⇒ $E[u]=\frac15\sqrt{100}+\frac25\sqrt{25}=4$, $CE=E[u]^2=16$, $E[x]=30$ ⇒ risikoavers (CE < forventet verdi). **Tolkningskrav:** konkluder alltid om risikoholdning og forklar hvorfor $CE$ avviker fra $E[x]$. Skill dette benchmarket klart fra prospektteoriens verdifunksjon (kap. 2): forventet nytte er over sluttformue/utfall og lineær i sannsynlighet; verdifunksjonen er over endringer og bruker beslutningsvekter.
- **Oppgavesjangre:** C. Mønstereksempel: «Et lotteri gir 64 med sannsynlighet 1/4, 36 med sannsynlighet 1/2 og 0 ellers. Med $u(x)=\sqrt{x}$, regn ut forventet verdi, forventet nytte og sikkerhetsekvivalenten, og avgjør personens risikoholdning.»
- **Typiske feil:** **Forveksle sikkerhetsekvivalent med forventet verdi** eller ikke forklare hvorfor $CE<E[x]$ (feilkatalog §5.6); regne $E[u(x)]$ som $u(E[x])$ (Jensens ulikhet — nettopp det som skiller dem); glemme å ta invers ($CE=E[u]^2$ når $u=\sqrt{x}$); oppgi CE uten å konkludere risikoholdning.
- **Quiz: 26 · Flashcards: 28**

#### Kapittel 3.2: St. Petersburg-paradokset og fire-felts-mønsteret i risiko

- **id:** `sok2012-3-2` · **number:** 3.2 · **estimatedMinutes:** 45 · **prerequisites:** `sok2012-3-1`, `sok2012-2-3`
- **Kapitteltype:** teori
- **description:** St. Petersburg-paradokset (forventet verdi = ∞, men liten betalingsvillighet) løst via avtakende grensenytte, og koblingen mellom risiko og prospektteoriens fire-felts-mønster.
- **Eksamensbelegg:** St. Petersburg i H2024; A/B-markør. Fire-felts-koblingen i V2025. Prioritet: **kunne** (nivå 2, høyt belønnet toppsjikt-innhold i en nivå 1-del).
- **Innholdskontrakt:** **St. Petersburg-spillet:** kast mynt til første krone; utbetaling $2^n$ kroner ved krone på kast $n$, sannsynlighet $1/2^n$. **Forventet verdi** $=\sum_n \frac{1}{2^n}\cdot 2^n=\sum_n 1=\infty$ (divergerer) — likevel vil ingen betale mer enn noen få kroner. **Løsning via avtakende grensenytte:** med konkav $u$ (f.eks. $u=\ln x$ eller $\sqrt{x}$) konvergerer **forventet nytte** til et endelig tall ⇒ endelig betalingsvillighet; paradokset oppstår bare hvis man (feilaktig) bruker forventet verdi. Poeng: dette er den historiske motivasjonen for forventet nytte (kap. 3.1). **Kobling til fire-felts-mønsteret** (fra kap. 2.3): understrek at forventet nytte gir *konsistent* risikoaversjon i gevinstdomenet, mens prospektteorien snur til risikosøking for **små sannsynligheter** (long shots overvektes) — long-shot-utfall (f.eks. 200 med 10 %) får liten vekt i ren forventet nytte, men *stor* vekt via $\pi(p)$. Skill de to modellenes prediksjoner.
- **Oppgavesjangre:** C (utvidet) + A. Mønstereksempel: «Forklar St. Petersburg-paradokset: hvorfor er forventet verdi uendelig, og hvorfor vil likevel ingen betale mye for å spille? Vis hvordan avtakende grensenytte løser paradokset.»
- **Typiske feil:** Bruke forventet verdi der forventet nytte kreves; ikke se at avtakende grensenytte gir konvergens; blande forventet-nytte-risikoaversjon (konsistent i gevinst) med prospektteoriens sannsynlighetsavhengige mønster; overse at små sannsynligheter overvektes.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 3.3: Drill: risikooppgaven

- **id:** `sok2012-3-3` · **number:** 3.3 · **estimatedMinutes:** 60 · **prerequisites:** `sok2012-3-2`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på risiko-/forventet-nytte-pilaren: fra et gitt lotteri og nyttefunksjon til fullført A-besvarelse med forventet verdi, forventet nytte, sikkerhetsekvivalent, risikopremie og risikoholdning — verbalt tolket.
- **Eksamensbelegg:** Dekker sjanger C — den ~90 %-frekvente risikopilaren. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) skriv opp utfall og sannsynligheter; 2) regn $E[x]=\sum p_i x_i$; 3) regn $E[u]=\sum p_i u(x_i)$; 4) løs $u(CE)=E[u]$ for $CE$ (husk invers); 5) risikopremie $=E[x]-CE$; 6) **konkluder risikoholdning** fra krumningen og fra $CE$ vs. $E[x]$; 7) ved long-shot-/små-p-varianter: kommenter forskjellen mot prospektteoriens overvekting. **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling ved hvert steg — særlig invers-steget og den verbale risikoholdningskonklusjonen). **8–12 oppgaver** på eksamensnivå som roterer nyttefunksjon ($\sqrt{x}$, $\ln x$, $x^2$) × lotteristruktur (to/tre utfall, long shots), alle med nyskrevne, pent kalibrerte tall (svar som pene $CE$) og `solution` + `hints`. Inkluder minst én St. Petersburg-variant.
- **Oppgavesjangre:** C. Mønstereksempel (full kjede): «(a) Et spill gir 100 med sannsynlighet 0,2, 49 med sannsynlighet 0,5 og 0 ellers. Med $u=\sqrt{x}$, finn forventet verdi, sikkerhetsekvivalent og risikopremie. (b) Er personen risikoavers? Begrunn ut fra krumningen. (c) Sammenlign med hva en risikonøytral aktør ville betalt.»
- **Typiske feil:** Hele risiko-repertoaret fra §5: CE = forventet verdi-forveksling (§5.6), $u(E[x])$ i stedet for $E[u(x)]$, glemt invers, utolket tall (§5.2), oversett overvekting av små sannsynligheter (§5.8).
- **Quiz: 16 · Flashcards: 12**

**Prøve-kvote Del 3:** 4 prøver (3.A begreper risiko — forventet nytte, sikkerhetsekvivalent, risikopremie, risikoholdning fra krumning, sjanger A+C; 3.B forventet nytte + CE regnet på to-/treutfallslotteri, sjanger C; 3.C St. Petersburg + fire-felts-mønster: hvorfor forventet verdi bommer og hvordan avtakende grensenytte løser det, sjanger C+A; 3.D full risikooppgave inkl. long-shot-variant og risikopremie, sjanger C).

---

### Del 4 — Bayes, heuristikker og bias *(prioritet: PERFEKT — ~90 %)*

#### Kapittel 4.1: Bayes-oppdatering og base-rate neglect

- **id:** `sok2012-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `sok2012-1-2`
- **Kapitteltype:** teori
- **description:** Å anvende den oppgitte Bayes-formelen på en test/vitne-situasjon, tolke posterior-sannsynligheten, og forklare base-rate neglect — at intuisjonen ignorerer den lave grunnraten.
- **Eksamensbelegg:** ~90 % frekvens (sjanger D) — minst én oppgave nesten hvert sett (taxi H2023/V2024/V2025, alkoholtest H2025, doping H2019, mynt H2022). Formelen oppgis; poenget er anvendelse + verbal base-rate-tolkning. Prioritet: **perfekt**.
- **Innholdskontrakt:** Sett opp **Bayes' teorem** (oppgitt formel) for typen «testen/vitnet sier X — hva er sannsynligheten for at X faktisk er tilfelle»: $P(\text{tilstand}\mid\text{positiv})=\dfrac{P(\text{pos}\mid\text{tilstand})P(\text{tilstand})}{P(\text{pos}\mid\text{tilstand})P(\text{tilstand})+P(\text{pos}\mid\neg\text{tilstand})P(\neg\text{tilstand})}$. **Base-rate neglect** = tendensen til å ignorere grunnraten $P(\text{tilstand})$ og la posterior smelte sammen med testens treffsikkerhet; når grunnraten er **lav**, gir dette en sterkt overdrevet intuitiv posterior. Gjennomregn de faste casene: **taxi** — 130 biler, 10 blå, vitne 80 % pålitelig ⇒ $P(\text{blå}\mid\text{vitne sier blå})\approx 0{,}25$ (ikke 0,80); **alkoholtest** — 5 % påvirket, test 95 % nøyaktig ⇒ $P(\text{påvirket}\mid\text{positiv})=0{,}5$, mens intuisjonen (base-rate neglect) sier ~95 %. **Naturlige frekvenser** som formidlingsverktøy (av 1000: hvor mange sanne vs. falske positive). **Tolkningskrav:** forklar verbalt *hvorfor* den intuitive gjetningen bommer (mange falske positive fra den store negative gruppen når grunnraten er lav).
- **Oppgavesjangre:** D. Mønstereksempel: «En test er 90 % nøyaktig, og 4 % av populasjonen har tilstanden. En person tester positivt. Regn ut den sanne sannsynligheten for at personen har tilstanden, og forklar hva en person med base-rate neglect ville tro og hvorfor det er feil.»
- **Typiske feil:** **Base-rate neglect i egen besvarelse** — regne $P(\text{positiv}\mid\text{tilstand})$ i stedet for $P(\text{tilstand}\mid\text{positiv})$, eller konkludere at en 95 %-nøyaktig test gir 95 % sannsynlighet for tilstanden (feilkatalog §5.1 — nettopp feilen oppgaven skal avsløre); glemme det andre leddet i nevneren; ikke forklare base-rate neglect verbalt (tallet uten tolkning); sette prior = treffsikkerhet.
- **Quiz: 26 · Flashcards: 28**

#### Kapittel 4.2: Representativitet: konjunksjonsfeil, law of small numbers og gambler's fallacy

- **id:** `sok2012-4-2` · **number:** 4.2 · **estimatedMinutes:** 45 · **prerequisites:** `sok2012-4-1`
- **Kapitteltype:** teori
- **description:** Representativitetsheuristikken og dens feil: konjunksjonsfeilen (Linda-typen), law of small numbers og gambler's fallacy — hvorfor de oppstår og hvordan de kobles til base-rate neglect.
- **Eksamensbelegg:** ~60 % frekvens (heuristikker/bias, sjanger A og som del av Bayes-kontekst): konjunksjonsfeil + base-rate H2024, law of small numbers (arkivet s. 100–101), gambler's fallacy/Lotto V2021. Prioritet: **kunne** (nivå 2, høyfrekvent i begrepsoppgaver).
- **Innholdskontrakt:** **Representativitetsheuristikken** = å bedømme sannsynlighet etter hvor godt noe *ligner* en prototype, ikke etter faktiske frekvenser. Feilene den gir: **konjunksjonsfeilen** — å tro $P(A\cap B)>P(A)$ (Linda-typen: «bankansatt og feminist» virker mer sannsynlig enn «bankansatt», umulig fordi et snitt aldri er større enn helheten); **law of small numbers** — å forvente at små utvalg speiler populasjonen like godt som store (overtolke korte serier); **gambler's fallacy** — å tro at uavhengige utfall «må jevne seg ut» (etter fem rød på rulett «skylder» svart) — feil fordi trekningene er uavhengige. Koble til base-rate neglect (kap. 4.1): begge er representativitet som overkjører grunnrater/uavhengighet. Kort om **tilgjengelighetsheuristikken** (availability — bedømme frekvens etter hvor lett eksempler kommer til minne) og **bekreftelsestendens** (confirmation bias) og **ambiguitetsaversjon** (foretrekker kjent sannsynlighet fremfor ukjent — Ellsberg). Hver med definisjon + eksempel + årsak (sjanger A-form).
- **Oppgavesjangre:** A. Mønstereksempel: «Forklar gambler's fallacy. Definer den, gi et eksempel, og forklar hvorfor resonnementet er feil når utfallene er uavhengige.»
- **Typiske feil:** Forveksle konjunksjonsfeil og base-rate neglect; tro at gambler's fallacy og law of small numbers er samme feil; forklare uten å angi *årsaken* (representativitet); blande tilgjengelighet og representativitet; glemme at ambiguitetsaversjon handler om *ukjent* sannsynlighet (ikke bare risiko).
- **Quiz: 22 · Flashcards: 28**

#### Kapittel 4.3: Beslutningsvekter og overvekting av små sannsynligheter (repetisjon og syntese)

- **id:** `sok2012-4-3` · **number:** 4.3 · **estimatedMinutes:** 35 · **prerequisites:** `sok2012-4-2`, `sok2012-2-3`
- **Kapitteltype:** teori
- **description:** Kort syntesekapittel som samler hvordan sannsynligheter *vektes* (ikke bare oppdateres): overvekting av små p, undervekting av moderate, og hvordan dette skiller seg fra korrekt Bayes-oppdatering.
- **Eksamensbelegg:** Bindeledd mellom Del 2 (beslutningsvekter) og Del 4 (Bayes); overvekting av små sannsynligheter er A/B-markør (§5.8). Roterer inn som deloppgave. Prioritet: **kunne** (nivå 2, kort).
- **Innholdskontrakt:** Skill de to måtene sannsynlighet håndteres: (i) **oppdatering** (Bayes, kap. 4.1) — hvordan en rasjonell aktør *bør* revidere en tro gitt bevis; (ii) **vekting** (prospektteoriens $\pi(p)$, kap. 2.3) — hvordan folk *faktisk* lar sannsynligheter påvirke valg, med **overvekting av små p** og undervekting av moderate/store. Vis hvorfor dette forklarer at folk samtidig kjøper lodd (overvekter liten gevinstsannsynlighet) og forsikring (overvekter liten skadesannsynlighet). Kort **certainty effect** (Allais): overgangen fra sikker til nesten-sikker vektes uforholdsmessig tungt. Understrek at feil bruk av *begge* (base-rate neglect + overvekting av små p) er de vanligste sannsynlighetsfeilene sensor trekker for. Dette kapitlet er bevisst kompakt (syntese, ikke ny modell).
- **Oppgavesjangre:** A + B. Mønstereksempel: «Forklar hvorfor en person både kan kjøpe lodd og tegne forsikring. Koble svaret til overvekting av små sannsynligheter.»
- **Typiske feil:** Blande oppdatering (Bayes) og vekting (beslutningsvekter); tro at overvekting av små p er en oppdateringsfeil; overse certainty effect; anta lineær sannsynlighetsvekting.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 4.4: Drill: Bayes- og base-rate-oppgaven

- **id:** `sok2012-4-4` · **number:** 4.4 · **estimatedMinutes:** 60 · **prerequisites:** `sok2012-4-3`, `sok2012-4-1`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på Bayes-pilaren: fra en test/vitne-beskrivelse til korrekt posterior via den oppgitte formelen, med eksplisitt verbal forklaring av base-rate neglect.
- **Eksamensbelegg:** Dekker sjanger D (+ A-heuristikker) — den ~90 %-frekvente Bayes-pilaren. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) identifiser tilstand og test/vitne, skriv opp grunnrate $P(\text{tilstand})$, treffsikkerhet $P(\text{pos}\mid\text{tilstand})$ og falsk-positiv-rate $P(\text{pos}\mid\neg\text{tilstand})$; 2) sett opp Bayes' teorem (den oppgitte formelen); 3) regn posterior; 4) **forklar base-rate neglect verbalt** — hva den naive gjetningen ville vært og hvorfor den bommer (falske positive fra stor negativ gruppe ved lav grunnrate); 5) evt. naturlige frekvenser som kontroll. **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling ved hvert steg — særlig riktig retning $P(\text{tilstand}\mid\text{pos})$ og den verbale base-rate-forklaringen). **8–12 oppgaver** på eksamensnivå som roterer kontekst (medisinsk test, vitneutsagn, doping, kvalitetskontroll) × grunnrate/treffsikkerhet, alle med nyskrevne, pent kalibrerte tall og `solution` + `hints`. Inkluder minst én oppgave som kombinerer Bayes med konjunksjonsfeil/representativitet.
- **Oppgavesjangre:** D (+ A). Mønstereksempel (full kjede): «(a) 3 % av en populasjon er bærere. En test gir positivt utslag hos 95 % av bærerne og 6 % av ikke-bærerne. En person tester positivt — regn ut sannsynligheten for at personen er bærer. (b) Hva ville en person med base-rate neglect tro, og hvorfor er det feil? (c) Uttrykk resultatet i naturlige frekvenser (av 1000).»
- **Typiske feil:** Hele Bayes-repertoaret fra §5: feil retning (§5.1), glemt falsk-positiv-ledd, base-rate neglect i egen besvarelse, tallet uten verbal tolkning (§5.2), prior = treffsikkerhet.
- **Quiz: 16 · Flashcards: 12**

**Prøve-kvote Del 4:** 4 prøver (4.A begreper heuristikker/bias — representativitet, base-rate neglect, konjunksjonsfeil, gambler's fallacy, tilgjengelighet, ambiguitetsaversjon, sjanger A; 4.B Bayes-oppdatering regnet + base-rate neglect forklart, sjanger D; 4.C representativitet i praksis — konjunksjonsfeil, law of small numbers, gambler's fallacy, og overvekting av små p, sjanger A+B; 4.D full Bayes-oppgave kombinert med en heuristikk-forklaring, sjanger D+A).

---

### Del 5 — Intertemporalt valg *(prioritet: PERFEKT — ~90 %)*

#### Kapittel 5.1: Eksponensiell diskontering: benchmarket

- **id:** `sok2012-5-1` · **number:** 5.1 · **estimatedMinutes:** 45 · **prerequisites:** `sok2012-1-1`
- **Kapitteltype:** teori
- **description:** Den eksponensielle diskonteringsmodellen $U^0=u_0+\delta u_1+\delta^2 u_2+\dots$ som rasjonelt benchmark — tidskonsistent, med konstant diskonteringsrate.
- **Eksamensbelegg:** ~90 % frekvens (sjanger E), alltid som benchmark før β-δ. Retirement-oppgaven (Ann eksponensiell) i H2024, V2025. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Diskonteringsfaktor** $\delta\in(0,1)$: nytte om én periode vektes med $\delta$, om to perioder med $\delta^2$, osv. **Nåverdien av en nytteserie** (sett fra $t=0$): $U^0=u_0+\delta u_1+\delta^2 u_2+\dots=\sum_{t\ge 0}\delta^t u_t$. **Tidskonsistens:** fordi diskonteringen er geometrisk, er rangeringen mellom to fremtidige alternativer **den samme uansett når du vurderer den** — en plan lagt ved $t=0$ vil du fortsatt følge ved $t=1$ (ingen preferansereversering). Regn et enkelt valg mellom to nytteserier (f.eks. A gir 0/4/30, B gir 0/20/2 ved $t=0/1/2$) med gitt $\delta$, og vis at valget er stabilt over tid. Legg grunnlaget for at present bias (kap. 5.2) er nettopp *bruddet* på denne tidskonsistensen. Koble kort til nåverdibegrepet (samme matematikk som finansiell neddiskontering, men over nytte).
- **Oppgavesjangre:** E. Mønstereksempel: «Alternativ A gir nytte 0, 5, 40 ved $t=0,1,2$; alternativ B gir 0, 30, 5. Med $\delta=0{,}8$, hvilket velges? Vis at valget er det samme om det gjøres på nytt ved $t=1$.»
- **Typiske feil:** Feil eksponent på $\delta$ (glemme at $t=2$ gir $\delta^2$); tro at eksponensiell diskontering kan gi preferansereversering (den kan ikke — det er poenget med benchmarket); blande diskonteringsfaktor og diskonteringsrate; regne nåverdien fra feil periode.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 5.2: Kvasi-hyperbolsk (β-δ) diskontering: present bias, naiv og sofistikert

- **id:** `sok2012-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** `sok2012-5-1`
- **Kapitteltype:** teori
- **description:** (β,δ)-modellen som fanger present bias, hvordan den gir tidsinkonsistens (preferansereversering), og det avgjørende skillet mellom naiv og sofistikert diskonterer med commitment device.
- **Eksamensbelegg:** ~90 % frekvens (sjanger E) — kjernen i diskonteringspilaren; retirement-oppgaven (Bob sofistikert hyperbolsk velger pensjonskontoen som binding) H2024, V2025 nesten identisk. Naiv/sofistikert-skillet og commitment er A/B-markører. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Kvasi-hyperbolsk (β,δ)-modell:** $U^0=u_0+\beta\delta u_1+\beta\delta^2 u_2+\dots$, der **$\beta\in(0,1]$** er ekstra nedvekting av *alt* som ligger i fremtiden (present bias / manglende selvkontroll); $\beta=1$ gir eksponensiell. **Tidsinkonsistens:** sett fra $t=0$ kan rangeringen mellom to fremtidige belønninger snu når du kommer til $t=1$ — fordi $\beta$-leddet slår inn på den *nærmeste* perioden hver gang. Vis eksplisitt en preferansereversering: et valg lagt ved $t=0$ ($U^0$) reverseres ved $t=1$ ($U^1=u_1+\beta\delta u_2+\dots$). **Naiv vs. sofistikert:** en **naiv** diskonterer tror han vil følge planen (undervurderer eget fremtidige svik); en **sofistikert** diskonterer **forutser** at han vil svikte og handler deretter — velger en **commitment device** (binding) selv om den koster noe, fordi den låser fremtidig atferd. Gjennomregn retirement-typen: Ann eksponensiell ($\delta=1/2$) velger fleksibel konto (U = 24); Bob sofistikert hyperbolsk ($\delta=1/2$, $\beta=1/3$) vet at han vil ta ut alt ved $t=1$, så han velger den bindende pensjonskontoen (U = 7 > 6). **Selvkontroll** og commitment devices (sparekontoer med gebyr ved uttak, «chips»-modeller) som anvendelse. **Tolkningskrav:** identifiser alltid om aktøren er naiv eller sofistikert og forklar commitment-valget.
- **Oppgavesjangre:** E. Mønstereksempel: «En person har $\delta=1/2$ og $\beta=1/3$. En oppgave gir nytte $-4$ nå og $10$ neste periode hvis gjort i dag, eller $-4$ neste periode og $10$ perioden etter hvis utsatt. Vis at personen utsetter, og forklar hvordan en sofistikert person ville brukt en commitment device.»
- **Typiske feil:** **Glemme å skille sofistikert fra naiv** og dermed overse commitment device-poenget (feilkatalog §5.2 — sofistikert velger bindingen fordi han vet han vil svikte); anvende $\beta$ på *alle* perioder likt (den slår bare inn som felles faktor på fremtiden, ikke som ekstra potens); ikke vise preferansereverseringen eksplisitt; blande $\beta$ (present bias) og $\delta$ (vanlig utålmodighet).
- **Quiz: 26 · Flashcards: 28**

#### Kapittel 5.3: Drill: diskonteringsoppgaven

- **id:** `sok2012-5-3` · **number:** 5.3 · **estimatedMinutes:** 60 · **prerequisites:** `sok2012-5-2`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på intertemporalpilaren: fra en gitt nytteserie til fullført A-besvarelse med eksponensiell og β-δ-neddiskontering, eksplisitt tidsinkonsistens og naiv/sofistikert-analyse med commitment.
- **Eksamensbelegg:** Dekker sjanger E — den ~90 %-frekvente diskonteringspilaren. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) skriv opp nytteseriene; 2) regn eksponensiell nåverdi $U^0=\sum\delta^t u_t$ og finn valget; 3) regn β-δ-nåverdien $U^0=u_0+\sum_{t\ge1}\beta\delta^t u_t$ og finn valget; 4) sjekk **tidsinkonsistens** ved å regne $U^1$ og se om rangeringen snur; 5) avgjør om aktøren er naiv eller sofistikert og hva det betyr for commitment-valget; 6) **tolk** present bias / selvkontroll verbalt. **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling ved hvert steg — særlig den eksplisitte preferansereverseringen og det sofistikerte commitment-valget). **8–12 oppgaver** på eksamensnivå som roterer $\beta,\delta$-verdier × seriestruktur (to-/treperiode, positiv/negativ nytte, commitment-alternativ), alle med nyskrevne, pent kalibrerte tall og `solution` + `hints`. Inkluder minst én retirement-/commitment-variant og én ren tidsinkonsistens-demonstrasjon.
- **Oppgavesjangre:** E. Mønstereksempel (full kjede): «(a) Med $\delta=0{,}9$: gir A nytte 0/6/8 og B nytte 0/0/16 ved $t=0/1/2$ — hvilket velges? (b) Med $\beta=0{,}5$ i tillegg, hva velges nå, og reverseres valget ved $t=1$? (c) Hvis personen er sofistikert og tilbys en binding til A, vil hun ta den? Begrunn.»
- **Typiske feil:** Hele diskonterings-repertoaret fra §5: naiv/sofistikert-forveksling (§5.2), feil eksponent på $\delta$, β anvendt feil, ikke vist tidsinkonsistensen, utolket resultat (§5.2).
- **Quiz: 16 · Flashcards: 12**

**Prøve-kvote Del 5:** 4 prøver (5.A begreper intertemporalt — diskonteringsfaktor, present bias, tidsinkonsistens, naiv vs. sofistikert, commitment device, sjanger A+E; 5.B eksponensiell neddiskontering og valg mellom nytteserier, sjanger E; 5.C β-δ-diskontering med eksplisitt preferansereversering, sjanger E; 5.D full diskonteringsoppgave: retirement-/commitment-type med naiv/sofistikert-kontrast, sjanger E).

---

### Del 6 — Spillteori og sosiale preferanser *(prioritet: PERFEKT — Nash ~80 %, sosiale preferanser ~70 %)*

#### Kapittel 6.1: Nash-likevekt i rene strategier

- **id:** `sok2012-6-1` · **number:** 6.1 · **estimatedMinutes:** 50 · **prerequisites:** `sok2012-1-1`
- **Kapitteltype:** teori
- **description:** 2×2-spillet, utbetalingsmatrisen, beste-svar-analyse og Nash-likevekt i rene strategier — grunnverktøyet for hele spilldelen.
- **Eksamensbelegg:** ~80 % frekvens (sjanger F); 2×2-matriser, fangens dilemma, chicken-spill og koordineringsspill går igjen. Nash-likevekt må defineres eksplisitt og begrunnes. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Utbetalingsmatrise** (2×2): rad = spiller 1, kolonne = spiller 2, første tall i cellen = spiller 1s payoff, andre = spiller 2s. **Beste svar** = spillerens optimale strategi gitt motspillerens. **Nash-likevekt (rene strategier)** = et strategipar der begge spiller beste svar samtidig — **ingen kan tjene på ensidig å avvike**. Finn Nash-likevekt(er) ved beste-svar-analyse celle for celle (understreke begge spilleres beste svar, skjæringen er likevekt). Faste spilltyper: **fangens dilemma** (dominant strategi gir Pareto-ineffektiv likevekt), **chicken-spillet** (to rene likevekter, ingen dominant), **koordineringsspill** (to likevekter, koordineringsproblem). **Definisjonskrav:** studenten skal *definere* Nash-likevekt og beste svar, ikke bare finne dem. Nevn at noen spill har **ingen** ren Nash-likevekt (bro til kap. 6.2). Kommenter **Pareto-effektivitet** av likevektene.
- **Oppgavesjangre:** F. Mønstereksempel: «Sett opp utbetalingsmatrisen for et fangens-dilemma-spill, finn Nash-likevekten i rene strategier ved beste-svar-analyse, og forklar hvorfor likevekten ikke er Pareto-effektiv.»
- **Typiske feil:** Ikke *definere* / begrunne Nash-likevekt (bare peke på en celle); forveksle dominant strategi og Nash-likevekt; overse at det kan finnes flere (eller ingen rene) likevekter; feil i beste-svar-analysen; ikke kommentere Pareto-effektivitet.
- **Quiz: 24 · Flashcards: 28**

#### Kapittel 6.2: Nash-likevekt i blandede strategier

- **id:** `sok2012-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok2012-6-1`
- **Kapitteltype:** teori
- **description:** Når et spill mangler ren Nash-likevekt: hvordan finne den blandede likevekten via indifferensbetingelsen — motspilleren gjøres akkurat indifferent mellom sine strategier.
- **Eksamensbelegg:** ~80 % frekvens (sjanger F, blandet del); skatt/kontroll-spillet (myndighet reviderer $p=1/3$, skattyter betaler $q=5/6$) H2025, koordineringsspill blandet ($p=q=1/2$) H2018. Indifferensbetingelsen kreves eksplisitt. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Blandet strategi** = å spille hver ren strategi med en sannsynlighet ($p$ for spiller 1, $q$ for spiller 2). **Indifferensbetingelsen** (kjernemetoden): i en blandet likevekt må hver spiller være **indifferent** mellom sine rene strategier — ellers ville hun spilt den beste med sikkerhet. Derfor: sett spiller 1s forventede utbetalinger for sine to strategier lik hverandre → løs for **motspillerens** ($q$); og omvendt for $p$. **Merk paradokset:** $p$ (spiller 1s miks) bestemmes av spiller 2s payoffs, ikke spiller 1s. Gjennomregn skatt/kontroll-typen: sett opp matrisen, vis at ingen ren Nash finnes, bruk indifferensbetingelsen → $p=1/3$, $q=5/6$. Tolk: den blandede likevekten er et stabilt «hverken-eller»-utfall (revisor holder skattyter usikker). Nevn at chicken-spillet også har en blandet likevekt i tillegg til de to rene.
- **Oppgavesjangre:** F. Mønstereksempel: «I et kontrollspill velger en myndighet å revidere eller ikke, og en aktør å betale eller jukse. Vis at det ikke finnes noen ren Nash-likevekt, og finn den blandede likevekten ved hjelp av indifferensbetingelsen.»
- **Typiske feil:** Ikke sette opp indifferensbetingelsen eksplisitt (bare gjette); løse for egen sannsynlighet fra egne payoffs i stedet for motspillerens; regnefeil i likningene; tro at et spill med ren likevekt ikke også kan ha en blandet; ikke tolke den blandede likevekten.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 6.3: Sosiale preferanser: transformasjon av utbetalingsmatrisen

- **id:** `sok2012-6-3` · **number:** 6.3 · **estimatedMinutes:** 55 · **prerequisites:** `sok2012-6-1`
- **Kapitteltype:** teori
- **description:** Hvordan altruistiske, misunnelige eller Rawlsianske preferanser transformerer en pengematrise til en nyttematrise — og hvordan Nash-likevekten regnes på nytt i nytte.
- **Eksamensbelegg:** ~70 % frekvens (sjanger G); altruister ⇒ (U,L) H2023, Rawls ⇒ to likevekter (kun én Pareto-effektiv) H2024. Kjernesjanger med fast metode. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Sosiale nyttefunksjoner** $u(x,y)$ der $x$ = egen payoff, $y$ = motspillers: **egoist** $u=x$; **altruist** $u=0{,}5x+0{,}5y$ (bryr seg like mye om begge); **misunnelig** $u=x-y$ (liker å ligge foran); **Rawlsiansk** $u=\min\{x,y\}$ (bryr seg om den dårligst stilte). **Metode (fast):** ta pengematrisen, **transformer hver celle** ved å regne ut hver spillers sosiale nytte av payoff-paret, sett opp den nye nyttematrisen, og finn Nash-likevekten **på nytt i nytte** (ikke i penger). Gjennomregn: samme pengematrise gir ulik Nash avhengig av preferansene — altruister koordinerer på det felles beste, misunnelige på det relativt beste, Rawls på det jevneste. **Pareto-effektivitet:** kommenter alltid om den nye likevekten er Pareto-effektiv (Rawls kan gi to likevekter der bare én er det). Understrek at dette er hvordan sosiale preferanser gjør at observert samarbeid avviker fra egoistisk prediksjon. (Merk: bredere enn ECON4260s Fehr-Schmidt-fokus — her er *matrisetransformasjonen* med flere preferansetyper kjernen.)
- **Oppgavesjangre:** G. Mønstereksempel: «To spillere har altruistiske preferanser med $u(x,y)=0{,}5x+0{,}5y$. Gitt pengematrisen [oppgi], skriv om den til en nyttematrise og finn Nash-likevekten i rene strategier. Er den Pareto-effektiv?»
- **Typiske feil:** **Ikke transformere matrisen** — regne Nash på pengeutbetalingene i stedet for på den sosiale nyttefunksjonen (feilkatalog §5.3); bruke feil sosial nyttefunksjon; glemme at *begge* spilleres celler skal transformeres; ikke kommentere Pareto-effektivitet; blande misunnelig ($x-y$) og Rawls ($\min$).
- **Quiz: 24 · Flashcards: 28**

#### Kapittel 6.4: Ultimatum-, tillits- og sender-mottaker-spill: teori mot atferd

- **id:** `sok2012-6-4` · **number:** 6.4 · **estimatedMinutes:** 55 · **prerequisites:** `sok2012-6-3`
- **Kapitteltype:** teori
- **description:** Sekvensielle spill løst med baklengs induksjon (delspillperfekt likevekt), kontrastert med den faktiske eksperimentelle atferden — og forklaringen via sosiale preferanser og resiprositet.
- **Eksamensbelegg:** ~70 % frekvens (sjanger H); tillitsspillet (delspillperfekt (0,0), men folk sender/returnerer) H2023, H2025. Kontrasten teori/atferd er selve poenget. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Ultimatumspillet:** forslagsstiller deler en pott, mottaker godtar eller avslår (avslag ⇒ begge får 0). **Delspillperfekt likevekt** (egoistisk, via baklengs induksjon): mottaker aksepterer ethvert positivt tilbud → forslagsstiller tilbyr minst mulig. **Faktisk atferd:** tilbud nær 50/50 er vanlig, og lave tilbud avslås — forklares med **ulikhetsaversjon** og at det å bli behandlet urettferdig oppleves negativt. **Tillitsspillet (sender-mottaker):** sender kan sende et beløp som multipliseres (f.eks. tredobles) før mottaker velger hvor mye å returnere. Egoistisk delspillperfekt likevekt: mottaker returnerer 0 → sender sender 0 → **(0,0), Pareto-ineffektivt**. Faktisk: sendere sender ~halvparten, mottakere returnerer positivt (**positiv resiprositet**, tillit). **Metode:** finn den delspillperfekte likevekten ved baklengs induksjon, kontrastér med observert atferd, og forklar gapet. Understrek at resiprositet her forklares **verbalt** som avvik fra egeninteresse (SØK2012 formaliserer *ikke* intensjonsbasert fairness equilibrium — det er ECON4260-stoff). Diktatorspillet som kontroll (ingen strategisk trussel → rene sosiale preferanser).
- **Oppgavesjangre:** H. Mønstereksempel: «I et tillitsspill sender A et beløp som tredobles før B bestemmer hvor mye som returneres. Finn den delspillperfekte likevekten, og forklar hvorfor forsøkspersoner systematisk avviker fra den.»
- **Typiske feil:** **Bare finne den delspillperfekte likevekten** uten å kontrastere med faktisk atferd og forklare avviket (feilkatalog §5.5); løse spilltreet forlengs i stedet for baklengs; glemme at avslag i ultimatumspillet er kostbart for mottaker selv (derfor et sosiale-preferanse-poeng); forveksle tillitsspill og diktatorspill (strategisk trussel vs. ikke).
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 6.5: Drill: spilloppgaven

- **id:** `sok2012-6-5` · **number:** 6.5 · **estimatedMinutes:** 80 · **prerequisites:** `sok2012-6-4`, `sok2012-6-2`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på hele spillpilaren: fra en gitt matrise/spilltre til fullført A-besvarelse med Nash i rene/blandede strategier, sosial-preferanse-transformasjon og delspillperfekt likevekt mot atferd.
- **Eksamensbelegg:** Dekker sjangrene F, G, H samlet — spillpilaren (~80 % Nash + ~70 % sosiale preferanser + ~70 % ultimatum/tillit). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) identifiser spilltype (simultan matrise / sekvensielt tre / med sosiale preferanser); 2) (rene) beste-svar-analyse → Nash, definer og begrunn; 3) (ingen ren) indifferensbetingelsen → blandet likevekt $p,q$; 4) (sosiale preferanser) transformer matrisen via oppgitt $u(x,y)$, finn Nash i nytte, sjekk Pareto; 5) (sekvensielt) baklengs induksjon → delspillperfekt likevekt, kontrastér med atferd; 6) **tolk** alt verbalt. **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling ved hvert steg — særlig indifferensbetingelsen, matrisetransformasjonen, kontrasten teori/atferd). **10–15 oppgaver** på eksamensnivå som roterer spilltype × leveranse (ren Nash / blandet Nash / sosial-preferanse-transformasjon / ultimatum-tillit), alle med nyskrevne, pent kalibrerte tall og `solution` + `hints`. Inkluder minst én skatt/kontroll-blandet-type, én altruist/misunnelig/Rawls-transformasjon og ett tillitsspill.
- **Oppgavesjangre:** F, G, H. Mønstereksempel (full kjede): «(a) Gitt pengematrisen [oppgi], finn Nash-likevekten i rene strategier. (b) Hvis ingen ren likevekt finnes, finn den blandede via indifferensbetingelsen. (c) Anta nå at spillerne er misunnelige ($u=x-y$) — transformer matrisen og finn den nye likevekten. (d) I et tillitsspill med samme parter: finn den delspillperfekte likevekten og forklar hvorfor atferden avviker.»
- **Typiske feil:** Hele spill-repertoaret fra §5: ikke transformert matrise (§5.3), manglende indifferensbetingelse, bare delspillperfekt uten atferdskontrast (§5.5), Nash bare påstått ikke begrunnet, utolkede likevekter (§5.2).
- **Quiz: 18 · Flashcards: 14**

**Prøve-kvote Del 6:** 4 prøver (6.A begreper spill — Nash-likevekt, dominant strategi, blandet strategi, delspillperfekt likevekt, sosiale preferanser (altruist/misunnelig/Rawls), resiprositet, sjanger A+F; 6.B Nash i rene OG blandede strategier med indifferensbetingelsen, sjanger F; 6.C sosial-preferanse-transformasjon av matrisen med Pareto-vurdering, sjanger G; 6.D full spilloppgave: ultimatum-/tillitsspill teori mot atferd + en matrisetransformasjon, sjanger F+G+H).

---

### Del 7 — Anomali-leksikonet og nivå-3-temaer *(prioritet: KUNNE/KJENNE)*

#### Kapittel 7.1: Anomali-leksikonet: decoy, mental accounting, commitment, sunk cost, ambiguitet — og nivå-3-temaene

- **id:** `sok2012-7-1` · **number:** 7.1 · **estimatedMinutes:** 60 · **prerequisites:** `sok2012-2-1`, `sok2012-1-1`
- **Kapitteltype:** teori (begrepsleksikon; DNA-drofting-inspirert begrepskontrakt)
- **description:** Et samlet oppslagsverk over anomaliene og nivå-3-temaene som roterer inn i begrepsoppgavene — hver med den faste «definisjon + eksempel + årsak»-formen sensor krever.
- **Eksamensbelegg:** Begrepsdiskusjoner om anomalier ~90 % (3–4 per sett, sjanger A); dette kapitlet samler de som ikke har fått eget kapittel. Nivå-3-temaer: nudge ~15 % (H2018), beauty contest/level-k ~20 % (H2019, H2024), offentlige goder ~10 % (H2019). Prioritet: **kunne** (anomaliene) / **kjenne** (nivå-3-temaene).
- **Innholdskontrakt:** Hvert begrep med **definisjon + eksempel + årsak** (sjanger A-formen), gruppert:
  **(a) Anomalier (nivå 2, høyfrekvente i begrepsoppgaver):** **decoy-effekt** (menyavhengighet: et dominert tredje alternativ gjør et av de opprinnelige mer attraktivt — bryter ekspansjonsbetingelsen, jf. kap. 1.1); **mental accounting** (mentale konti: penger behandles ulikt etter kilde/formål, brudd på fungibilitet); **hedonisk redigering** (integrering/segregering av gevinster/tap — jf. kap. 2.2, «silver lining»/bundling); **commitment** (binding som løser selvkontrollproblemet — jf. kap. 5.2); **sunk cost-feilen** (å la irreversible kostnader påvirke fremtidige valg — «kastet gode penger etter dårlige»); **opportunity cost** (alternativkostnad ofte underveid); **ambiguitetsaversjon** (Ellsberg: foretrekker kjent fremfor ukjent sannsynlighet); **tapsaversjon** (jf. kap. 2.1, som gjennomgående forklaring). For hver: gi den *bakenforliggende mekanismen* (verdifunksjonens form eller en heuristikk) — det er årsaksleddet sensor krever.
  **(b) Nivå-3-temaer (bør kjenne, roterer sjeldnere):** **nudge / libertariansk paternalisme** (å endre valgarkitekturen uten å fjerne alternativer — default-regler, plassering; definisjon, eksempler, kritikk om manipulering/autonomi); **beauty contest / guessing game + level-k** (gjett 2/3 av gjennomsnittet: iterativ eliminering, level-0/1/2 strategisk tenkning forklarer hvorfor observerte tall ligger mellom naiv og likevekt); **offentlige goder / gratispassasjer** (bidragsspill: Nash-bidrag null vs. observerte positive bidrag, koordineringssvikt).
  Presiser hvilke begreper som *bygger på verdifunksjonen* (endowment, framing, hedonisk redigering, tapsaversjon) vs. *på en heuristikk* (base-rate neglect, gambler's fallacy) — sensor belønner at årsaken kobles til rett mekanisme. Dette kapitlet er tett men bevisst kompakt (leksikon, ikke dyp modell per begrep).
- **Oppgavesjangre:** A (+ nivå-3-varianter). Mønstereksempel (A): «Forklar decoy-effekten. Definer den, gi et eksempel med tre alternativer, og forklar hvorfor den oppstår (koble til ekspansjonsbetingelsen og menyavhengighet).» Nivå-3: «Hva er et nudge? Gi to eksempler og én innvending mot libertariansk paternalisme.»
- **Typiske feil:** Gi definisjon uten eksempel og/eller uten årsak (sensor krever alle tre); koble anomalien til feil mekanisme (f.eks. forklare decoy med tapsaversjon i stedet for menyavhengighet); blande sunk cost og opportunity cost; forveksle ambiguitet (ukjent p) med ren risiko; ved level-k: hoppe rett til likevekt uten å forklare de mellomliggende nivåene.
- **Quiz: 30 · Flashcards: 44** (bredt begrepsleksikon — høy flashcard-tetthet er tilsiktet: hvert begrep = definisjon + eksempel + årsak-kort, og dette er fagets mest begrepstette kapittel)

**Prøve-kvote Del 7:** 4 prøver (7.A anomalier I — decoy, mental accounting, sunk cost, opportunity cost, hver definisjon+eksempel+årsak, sjanger A; 7.B anomalier II — commitment, hedonisk redigering, ambiguitetsaversjon, tapsaversjon som gjennomgående forklaring, sjanger A; 7.C nudge/libertariansk paternalisme — definisjon, eksempler, kritikk, sjanger A nivå-3; 7.D beauty contest/level-k + gratispassasjerspill — regn/forklar de strategiske nivåene, sjanger A+F nivå-3).

---

### Del 8 — Eksamenstrening

#### Kapittel 8.1: Begrepsdrill: «definisjon + eksempel + årsak»-sjangeren

- **id:** `sok2012-8-1` · **number:** 8.1 · **estimatedMinutes:** 60 · **prerequisites:** `sok2012-7-1`
- **Kapitteltype:** sjangerkapittel (begrepsdrøfting, DNA-drofting-mal)
- **description:** Håndverket i den dominerende begrepssjangeren: hvordan bygge et fullpoengs «diskuter et begrep»-svar (definisjon + eksempel + årsak/mekanisme), med gjennomskrevne modellsvar og en drill over de ~12–15 gjengangerne.
- **Eksamensbelegg:** Sjanger A er ~90 % (3–4 spørsmål per sett) og bærer samlet en stor andel av karakteren. Dette kapitlet drilles bredt fordi hvert av de ~15 begrepene kan komme, og formen er den samme. Prioritet: **perfekt** (sjangerhåndverket) / **kunne** (per begrep).
- **Innholdskontrakt:** **Oppskrift (fra DNA-drofting sjangerkapittel):** 1) **definisjon** — presis, gjerne med engelsk fagterm i parentes; 2) **eksempel** — konkret, gjerne eget (godtas), som faktisk illustrerer mekanismen; 3) **årsak/mekanisme** — koble til verdifunksjonens form ELLER en heuristikk (dette er A/B-skillet: bunn gir definisjon, topp forklarer *hvorfor*); 4) evt. **figur** (pluss ved decoy, framing, verdifunksjon); 5) tidsbudsjett (ca. 15–20 min per begrepsspørsmål ved 4 timer / 7–8 spørsmål). **Gjennomskrevet modellsvar med margkommentarer** for 2–3 begreper (f.eks. framing, endowment, decoy) — vis eksplisitt hva som løfter svaret fra C (bare definisjon + eksempel) til A (mekanismen + figur + presisjon). **Drill:** kortsvarsoppgaver over hele gjengangerlisten (framing, decoy, endowment, mental accounting, hedonisk redigering, commitment, sunk cost, opportunity cost, tapsaversjon, ambiguitetsaversjon, representativitet, tilgjengelighet, base-rate neglect, gambler's fallacy, present bias) — hver med momentliste-løsning (definisjon + eksempel + årsak). Understrek at egne eksempler er trygt så lenge mekanismen stemmer.
- **Oppgavesjangre:** A. Mønstereksempel: «Skriv et fullpoengs svar på ‘Forklar endowment-effekten’: gi definisjon, ett eksempel og den bakenforliggende årsaken. Marker selv hva som gjør svaret til et A-svar fremfor et C-svar.»
- **Typiske feil:** Mangle ett av de tre leddene (oftest årsak); gi et eksempel som ikke faktisk illustrerer mekanismen; koble til feil mekanisme; skrive for langt på ett begrep og gå tom for tid på de andre (likeveide spørsmål); ikke bruke figur der den gir et lett pluss.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 8.2: Øvingseksamen 1: den typiske malen (8 likeveide spørsmål)

- **id:** `sok2012-8-2` · **number:** 8.2 · **estimatedMinutes:** 90 · **prerequisites:** `sok2012-8-1`
- **Kapitteltype:** øvingseksamen
- **description:** Et komplett nyskrevet sett på 8 likeveide spørsmål som speiler standardmalen 2023–2025: begrepsdiskusjoner + verdifunksjon + Bayes + diskontering + spill med sosiale preferanser.
- **Eksamensbelegg:** Speiler «typisk» eksamen (analysens §2-fordeling): 3 begreper (A) + 1 verdifunksjon (B) + 1 CE/risiko (C) + 1 Bayes (D) + 1 diskontering (E) + 1 spill/sosiale preferanser (F/G/H), lik vekt. Prioritet: **perfekt** (helhetstrening).
- **Innholdskontrakt:** 8 nyskrevne, likeveide oppgaver som til sammen dekker de seks pilarene + begrepssjangeren, kalibrert til pene svar (fra fasitverdiene, aldri gjenbrukte tall). Hver oppgave med **løsningsforslag i `collapsible`** skrevet som A-besvarelse (regning + tolkning + evt. figur), og et `tip`-notat om vekting/tidsbudsjett (30 min per spørsmål). Miksen: (1–3) begreper fra gjengangerlisten; (4) verdifunksjon-regning med integrering/segregering ELLER WTA/WTP; (5) forventet nytte + CE + risikoholdning; (6) Bayes + base-rate neglect; (7) β-δ-diskontering med naiv/sofistikert; (8) spill med sosial-preferanse-transformasjon ELLER blandet Nash.
- **Oppgavesjangre:** A, B, C, D, E, F/G. (Se innholdskontrakt for miks.)
- **Typiske feil:** Alle §5-feilene i konsentrat; i tillegg tidsstyring (likeveide spørsmål ⇒ ikke bruk opp tiden på ett), og å hoppe over tolkningsleddet under tidspress.
- **Quiz: 12 · Flashcards: 8**

#### Kapittel 8.3: Øvingseksamen 2: regnetung variant (blandet Nash + fire-felts)

- **id:** `sok2012-8-3` · **number:** 8.3 · **estimatedMinutes:** 90 · **prerequisites:** `sok2012-8-2`
- **Kapitteltype:** øvingseksamen
- **description:** Et sett vektet mot de regnbare pilarene, inkludert de A/B-differensierende variantene: blandet Nash via indifferensbetingelsen, fire-felts-mønsteret og eksplisitt tidsinkonsistens.
- **Eksamensbelegg:** Speiler et sett der de tunge regnesjangrene og toppsjikt-poengene dominerer (analysens §4 A/B-markører). Prioritet: **perfekt**.
- **Innholdskontrakt:** 7–8 nyskrevne likeveide oppgaver med vekt på: verdifunksjon + fire-felts-mønster (B); St. Petersburg / long-shot forventet nytte (C); Bayes med lav grunnrate (D); β-δ med eksplisitt preferansereversering og commitment (E); **blandet** Nash via indifferensbetingelsen (F); sosial-preferanse-transformasjon med Pareto-vurdering (G). Hver med A-besvarelse i `collapsible` og `tip` om delpoeng — særlig hva som skiller A fra C (mekanismen, indifferensbetingelsen, den eksplisitte reverseringen, overvekting av små p).
- **Oppgavesjangre:** B, C, D, E, F, G.
- **Typiske feil:** De regnetunge §5-feilene: blandet Nash uten indifferensbetingelse, CE = forventet verdi, naiv/sofistikert-forveksling, oversett overvekting av små p; utolkede tall.
- **Quiz: 12 · Flashcards: 8**

#### Kapittel 8.4: Øvingseksamen 3: begreps- og drøftetung variant (H2025-stil, norsk)

- **id:** `sok2012-8-4` · **number:** 8.4 · **estimatedMinutes:** 90 · **prerequisites:** `sok2012-8-3`
- **Kapitteltype:** øvingseksamen
- **description:** Et sett i H2025-stil (norsk bokmål, 7 spørsmål) vektet mot begrepsdiskusjoner, rasjonalitet/ekspansjonsbetingelse, hedonisk redigering og tillitsspill.
- **Eksamensbelegg:** Speiler H2025 (Green, norsk): ekspansjonsbetingelse (øl/vin/martini), casino integrering/segregering, CE, diskontering, skatt/kontroll blandet Nash, tillitsspill, alkoholtest-Bayes. Prioritet: **perfekt** (dekker begrepstyngden + rasjonalitetssjangeren I).
- **Innholdskontrakt:** 7 nyskrevne likeveide oppgaver: 2–3 begreper (A); rasjonalitet/ekspansjonsbetingelse (I); hedonisk redigering / casino-type (B); CE (C); Bayes/base-rate (D); tillitsspill teori mot atferd (H); skatt/kontroll blandet Nash (F). Norsk bokmål med engelske fagtermer i parentes. Hver med A-besvarelse i `collapsible` og `tip`-notat. Vis at rasjonalitetssjangeren (I) og begrepssjangeren (A) bærer denne varianten.
- **Oppgavesjangre:** A, B, C, D, F, H, I.
- **Typiske feil:** Glemme transitivitetssjekken (I, §5.10); mangle årsaksleddet i begrepssvar; bare delspillperfekt uten atferdskontrast i tillitsspillet (§5.5); feil integrering/segregering (§5.9).
- **Quiz: 12 · Flashcards: 8**

**Prøve-kvote Del 8:** ingen egne del-prøver (Del 8 ER eksamenstrening — de tre øvingseksamenene 8.2–8.4 fungerer som fullformatprøver; begrepsdrillen 8.1 supplerer prøvene i Del 2/7).

---

## 4. Kvotesammendrag (AUTORITATIV)

Denne tabellen er **fasit** for alle senere faser — per-kapittel-kvotene over summerer hit. Quiz-mål ≥500 (nås: **570**), flashcards-mål ≥500 (nås: **600**). Flashcard-tettheten er bevisst løftet over gulvet fordi faget er **tospråklig og begrepsrikt** (hvert begrep = definisjon + engelsk term + eksempel + årsak), jf. audit-lærdommen 7. juli om at 500 er et gulv, ikke et mål.

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1 | 14 | 14 | 0 (metadel) |
| 1 | 1.1–1.2 | 22+20 = **42** | 26+22 = **48** | 4 |
| 2 | 2.1–2.5 | 26+24+24+22+18 = **114** | 32+24+28+26+12 = **122** | 4 |
| 3 | 3.1–3.3 | 26+18+16 = **60** | 28+20+12 = **60** | 4 |
| 4 | 4.1–4.4 | 26+22+16+16 = **80** | 28+28+16+12 = **84** | 4 |
| 5 | 5.1–5.3 | 22+26+16 = **64** | 24+28+12 = **64** | 4 |
| 6 | 6.1–6.5 | 24+22+24+22+18 = **110** | 28+24+28+26+14 = **120** | 4 |
| 7 | 7.1 | **30** | **44** | 4 |
| 8 | 8.1–8.4 | 20+12+12+12 = **56** | 20+8+8+8 = **44** | 0 (3 øvingseksamener) |
| **Sum** | **28 kapitler** | **570** | **600** | **28 prøver (7 deler × 4)** |

**Prøver totalt:** 28 (4 per temadel × 7 deler med prøver — Del 0 og Del 8 har ingen egne del-prøver; Del 8s tre øvingseksamener er fullformatprøver). Krav ≥4 per tema oppfylt for alle syv innholdsdelene.

**Kvotebegrunnelse (tetthet):** De fem regnbare pilarene (Del 2–6) bærer flest quiz (114/60/80/64/110) i tråd med at de er ~90–100 %-gjengangere. Del 7 (anomali-leksikonet) har den høyeste flashcard-tettheten per kapittel (40) fordi det er fagets mest begrepstette kapittel. Del 3 og 5 er noe lavere fordi de er rene regnepilarer med færre selvstendige begreper (færre flashcard-verdige definisjoner), men fortsatt godt over minstekravet samlet.

---

## 5. Prøvespesifikasjon (id-format)

Hver del med prøver har fire prøver med id `sok2012-<del>-prove` (ett prøvekapittel per del som inneholder de fire prøvesettene A–D beskrevet i «Prøve-kvote»-linjene over), chapterNumber `<del>.P`:

- `sok2012-1-prove` (Del 1: 1.A–1.D — rasjonalitet, ekspansjonsbetingelse, sannsynlighet, Bayes-oppsett)
- `sok2012-2-prove` (Del 2: 2.A–2.D — prospektteori-begreper, verdiregning, WTA/WTP+fire-felts, full prospektoppgave)
- `sok2012-3-prove` (Del 3: 3.A–3.D — risiko-begreper, EU+CE, St. Petersburg+fire-felts, full risikooppgave)
- `sok2012-4-prove` (Del 4: 4.A–4.D — heuristikk-begreper, Bayes+base-rate, representativitet, full Bayes-oppgave)
- `sok2012-5-prove` (Del 5: 5.A–5.D — diskonteringsbegreper, eksponensiell, β-δ+reversering, retirement/commitment)
- `sok2012-6-prove` (Del 6: 6.A–6.D — spillbegreper, rene+blandede Nash, sosial-preferanse-transformasjon, ultimatum/tillit)
- `sok2012-7-prove` (Del 7: 7.A–7.D — anomalier I, anomalier II, nudge, beauty contest/level-k+gratispassasjer)

---

## 6. Byggekontrakt-sjekkliste (til fase 3)

- [ ] **Kvoter er fasit**: per-kapittel-kvotene og kvotesammendraget (§4) styrer byggingen; ikke overstyr i prompt.
- [ ] **Notasjon**: bruk arkivets notasjon (§1 notasjonsregel) nøyaktig — $v(x)$ stykkevis, $E[u]$/$CE$, $U^0=u_0+\beta\delta u_1+\dots$, oppgitt Bayes-formel, sosiale $u(x,y)$-former. Engelske fagtermer i parentes ved første forekomst.
- [ ] **DNA-blokker**: hvert teorikapittel har Eksamensvinkel (`tip`) + Forkunnskaper (`text`) + Symbol-/formelliste (`collapsible`, per delkapittel) + Motivasjon + definisjoner/teoremer + utledning-med-intuisjon + eksempler (siste på eksamensnivå) + Typiske feil (`warning`) + oppgaver (stigende) + Repetisjonsoppgaver. Drill/øvingseksamen/begrepssjanger følger sine DNA-varianter.
- [ ] **Metoderegel gjennomgående**: regning tolkes økonomisk; indifferensbetingelsen eksplisitt ved blandet Nash; kontrast teori/atferd ved ultimatum/tillit; base-rate neglect forklart verbalt; definisjon+eksempel+årsak ved begreper.
- [ ] **Arbeidsdeling mot ECON4260**: bygg SØK2012s egenart (blandet Nash, matrisetransformasjon med altruist/misunnelig/Rawls, St. Petersburg, fire-felts, base-rate med oppgitt formel, rasjonalitet/ekspansjonsbetingelse); IKKE bygg Rabin, fairness equilibrium, dual-self, kind–wicked, norm-modeller (§7).
- [ ] **Kryssbok-lenker**: kun der ekte forkunnskap trengs (grunnleggende sannsynlighet, Nash-mekanikk); lenk kun til kapitler som finnes. Faget er ellers selvstendig.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, egne kontekster, egne formuleringer; fasitverdiene (taxi 0,25; CE = 16; WTA/WTP = 1,5/1; Ann U = 24 / Bob U = 7; skatt/kontroll $p=1/3$, $q=5/6$) brukes KUN til å velge vanskelighetsgrad, aldri som oppgavetall; pensum (atferdsøkonomi-lærebok i Angner/Cartwright-tradisjonen) refereres, aldri siteres.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter (200 + kapittelspesifikk streng), jf. `getChapterMeta`-lærdommen; institusjonssiden (NTNU) og bokforsiden (seksjonstitlene fra §2).

---

## 7. Arbeidsdeling mot ECON4260 (tvilling, UiO) og SOK1002/SØK1011 (NTNU)

SØK2012 (NTNU) og **ECON4260 Behavioral Economics (UiO)** er atferdsøkonomiske
tvillinger på hver sin institusjon. De deler alle pilarene, men er bevisst ulike i
notasjon, vektlegging og toppsjikt-poeng. Denne tabellen styrer hva SØK2012 bygger
ut vs. hva som er ECON4260s domene.

| Tema | SØK2012 (bygger ut) | ECON4260 (bygger ut) |
|---|---|---|
| Prospektteori/verdifunksjon | **JA** — Del 2, arkivets $\sqrt{x}/-2\sqrt{\lvert x\rvert}$-former, WTA/WTP, integrering/segregering | JA — men med Rabin-kalibrering og referansepunktdebatt (ikke i SØK2012) |
| Forventet nytte/CE/St. Petersburg | **JA** — Del 3, CE-regning, St. Petersburg, fire-felts | Delvis (PT vs. EU-kontrast; mindre CE-drill) |
| Bayes/base-rate neglect | **JA** — Del 4, oppgitt formel, naturlige frekvenser | JA — men vektet mot kind–wicked-metodologi (ikke i SØK2012) |
| Intertemporalt (eksp. vs. β-δ) | **JA** — Del 5, naiv/sofistikert, commitment, retirement-type | JA — men med **dual-self-modellen** og opt-in/opt-out-politikk (ikke i SØK2012) |
| Nash rene **+ blandede** strategier | **JA** — Del 6, indifferensbetingelsen (SØK2012-egenart) | NEI — ECON4260 har ikke blandet-Nash-drill |
| Sosiale preferanser: **matrisetransformasjon** (altruist/misunnelig/Rawls) | **JA** — Del 6, hele matrisen transformeres, flere preferansetyper | Delvis — ECON4260 fokuserer på **Fehr-Schmidt** ulikhetsaversjon |
| Ultimatum/tillitsspill teori vs. atferd | **JA** — Del 6, delspillperfekt + resiprositet **verbalt** | JA — men **formaliserer** fairness equilibrium/reciprocity (ikke i SØK2012) |
| Rasjonalitet/transitivitet/ekspansjonsbetingelse | **JA** — Del 1, egen sjanger (I) | NEI — ikke egen ECON4260-sjanger |
| Rabin-kalibrering, dual-self, fairness equilibrium, kind–wicked, norm-/anerkjennelsesmodeller | **NEI** — bevisst utelatt (ECON4260s egenart) | **JA** — ECON4260s kjerne |
| Nudge/libertariansk paternalisme | Nivå 3 (~15 %, Del 7) | JA — egen del (normer/nudging) |
| Tung mikroteori (Lagrange/Slutsky/kostnadsfunksjoner) | **NEI** — SOK1002s domene; lenk dit ved genuin forkunnskap | NEI |
| Marked/monopol/oligopol/eksternaliteter/fellesgoder | **NEI** — SØK1011s domene | NEI |

**Møtepunkter (kryssrefereres, ikke gjentas):** grunnleggende sannsynlighet og
Nash-likevekt-mekanikk forutsettes; der studenten trenger repetisjon av
sannsynlighet eller ren spillteori, lenkes det til relevante NTNU-kapitler
(SOK1002/SØK1011) med markdown-lenker i Forkunnskaper-blokkene. Overlappet mot
SOK1002/SØK1011 er *smalt*: SØK2012 bruker ingen Lagrange/kostnadsteori og ingen
markedsanalyse — det er et rent atferds-/beslutningsfag. Overlappet mot ECON4260
er *tematisk stort men metodisk styrt*: samme pilarer, men SØK2012 dyrker
NTNU-arkivets egenart (blandet Nash, matrisetransformasjon, St. Petersburg,
oppgitt-formel-Bayes, rasjonalitetssjangeren) og lar ECON4260 eie sine
spesialmodeller (Rabin, dual-self, fairness equilibrium, kind–wicked).

---

> **Merknad om verifiserte referanser:** Alle modellresultater, notasjon og
> frekvenser er hentet fra `EKSAMENSANALYSE.md` (10 sett, 6 fasiter). Standard-
> resultatene (verdifunksjonsformene, $CE=16$ i V2025-caset, taxi-Bayes $\approx
> 0{,}25$, alkoholtest $0{,}5$, retirement Ann U = 24 / Bob U = 7, skatt/kontroll
> blandet Nash $p=1/3$, $q=5/6$) er faglige fakta uten verkshøyde og brukes kun
> som kalibrering. **Pensum-referansen** (standard atferdsøkonomi-lærebok i
> Angners *A Course in Behavioral Economics* eller Cartwrights *Behavioral
> Economics*-tradisjon — kapittelstrukturen i sensorveiledningenes henvisninger
> peker mot Angners kap. 11 for sosiale preferanser/beauty contest) er
> *(verifiser)* — den eksakte lærebokutgaven er ikke navngitt i arkivet og bør
> sjekkes mot gjeldende emnebeskrivelse før pensumankere skrives inn. At
> oppgavesettene veksler mellom **engelsk** (de fleste) og **norsk** (H2025) er
> dokumentert i analysens §1; boka skrives på norsk bokmål med engelske
> fagtermer i parentes.

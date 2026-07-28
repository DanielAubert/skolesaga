# Bokskjelett: ECON4310 Macroeconomic Theory — eksamensrettet lærebok

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
> sensorkrav og typiske feil per kapittel er destillert fra
> `EKSAMENSANALYSE.md` (8 ordinære sett H2018–H2025 + 8 sensorveiledninger/
> løsningsforslag, 16 dokumenter, alle lest grundig). Arketype: **DNA-regnefag**
> (`DNA-regnefag.md`) som primærmal, med **lånt drøftingssjanger fra
> DNA-drofting.md** for metodologi-essayet (Part A). Hybrid-valget er dokumentert
> i §1 og §2.
>
> **Kritisk kontekst:** ECON4310 er UiOs masterkurs i makroøkonomisk teori,
> undervist og eksaminert **på engelsk**. Det er en **mikrofundert, dynamisk-
> optimerende** tradisjon (Ljungqvist–Sargent / Romer / Barro–Sala-i-Martin):
> intertemporal konsum med Euler-ligning, Solow- og Ramsey-vekst, OLG, stokastisk
> RBC og makroøkonomisk metodologi. Dette er en **HELT ANNEN TRADISJON** enn
> bachelor-makro (ECON1310/2310): **ingen IS-RR-PK, ingen Keynes-kryss, ingen
> AD-AS, ingen åpen-økonomi-valutakurs, ingen ny-keynesiansk pengepolitikk** — se
> forbudsliste i §1. Alt løses **for hånd** (tyngste regnestykke = en
> andregradsligning); ingen kalkulator, ingen simulering, ingen Bellman/DP-
> iterasjon som regneoppgave.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `econ4310` |
| Tittel | **Macroeconomic Theory — eksamensrettet (ECON4310, UiO)** |
| Navigasjonsnavn (institusjoner.ts) | «ECON4310 Macroeconomic Theory» (under UiO) |
| Level | `'Høyskole'` |
| Arketype | **Regnefag (hybrid)** — kvantitativt modellfag med Lagrange/FOC-utledning som kjerne, PLUSS en metodologi-essaydel som låner drøftingssjanger fra DNA-drofting |
| Antall kapitler | **35** (3 håndverk/kart + 28 tema + 4 eksamenstrening) + 9 prøvekapitler |
| Estimert totaltid | **~2 550 min ≈ 43 timer** |
| Quiz totalt | **668** (krav ≥500 — GULV; se kvotesammendrag §3) |
| Flashcards totalt | **652** (krav ≥500 — GULV) |

**Pitch (ett avsnitt):** ECON4310-eksamen er 3 timers skriftlig skoleeksamen **på
engelsk**, karakter A–F, der den enkeltviktigste regelen er trykt i eksamenshodet:
**«solutions without traceable outlines do not earn points»** — et riktig sluttsvar
uten utledning gir **null**, mens en riktig Lagrange-oppstilling med regnefeil gir
nesten full uttelling (poeng deles per FOC-steg). Fra og med H2023 har eksamen tre
**likevektede deler, hver nøyaktig 1/3**: **Part A** er et kort **metodologi-essay**
(≤500–750 ord, forankret i pensumlitteraturen), **Part B og Part C** er
**modelloppgaver** med full utledning fra optimeringsproblemet. Boka trener begge
sjangre. De to nesten garanterte modellkjernene er **intertemporal konsum/sparing
med Euler-ligning** (6/8 sett = 75 %, kjernen i Part B) og **Solow-modellen**
(5/8 = 63 %, kjernen i Part C); **Lagrange + FOC** brukes i **100 %** av
modelloppgavene. Rundt kjernen roterer OLG/Ricardiansk ekvivalens, stokastisk RBC
(Jensen → likevektsrente), Ramsey-fasediagram, skatt/arbeidstilbud, trygd og de nye
H2025-sjangrene investeringsteori og Piketty-vs-Solow. Boka er kalibrert mot dette:
den driller **utledning fra optimeringsproblemet** — aldri gjenkjenning av oppgitte
relasjoner — og trener A-differensiatorene som skiller topp fra bunn: Jensen-
argumentet for likevektsrenta, fortegnet på $\partial C_{ss}/\partial s$ (golden
rule), permanent vs. midlertidig sjokk i Ramsey-fasediagrammet, og
$1/\sigma>1$-drøftingen av rentens fortegn.

**Kritisk språk- og notasjonsregel (gjelder HELE boka):**

- **Engelsk fagterminologi er primær; norsk forklarer.** Eksamen skrives på
  engelsk. Hvert delkapittels **Symbol- og formelliste** og hver toppnivå-
  `definition` skal derfor gi **tospråklig begrepsbank**: norsk term + engelsk
  term ved første forekomst, f.eks. «Euler-ligningen (the Euler equation)»,
  «steady state (likevektstilstand)», «lånebeskrankning (borrowing constraint)»,
  «hjørneløsning (corner solution)», «forventningsoperatoren (the expectations
  operator)», «grensenytte (marginal utility)», «diskonteringsfaktor (discount
  factor)». Flashcards skal inneholde norsk↔engelsk term-par (egnet flashcard-
  råstoff, se §3). Studenten skal kunne skrive svaret på engelsk.
- **Standardsymboler (konsistente gjennom hele boka):** $\beta$ diskonteringsfaktor,
  $r$ rente (husholdningens), $R=r+\delta$ leiepris på kapital (rental rate),
  $\delta$ kapitalslit (depreciation), $\alpha$ kapitalandel (Cobb-Douglas-
  eksponent), $n$ befolkningsvekst, $g$ teknologivekst, $s$ sparerate,
  $\sigma$ CRRA-krumning (relativ risikoaversjon), $u(\cdot)$ periodenytte,
  $c_t$ konsum, $a_t$ formue/aktiva (assets), $k_t$ kapital per arbeider,
  $\lambda$ Lagrange-multiplikator, $p$ overlevelsessannsynlighet, $\tau$
  skattesats, $l$ arbeidstilbud, $E[\cdot]$ forventningsoperator.
- **Notasjonsvarianter studenten skal GJENKJENNE (men boka skriver
  standardformen):** Ramsey-sett bruker ofte $\theta$ for CRRA-krumning der boka
  skriver $\sigma$; enkelte sett skriver spareraten $\gamma$; CRRA-nytten skrives
  både $c^{1-\sigma}/(1-\sigma)$ og $(c^{1-\sigma}-1)/(1-\sigma)$ (samme
  grensenytte). Nevn variantene i den relevante Symbol- og formellista, men bruk
  standardformen i bokas egen fremstilling.
- **FORBUDT i hele boka (0 forekomster på 8 sett, annen tradisjon):** IS-RR-PK,
  IS-LM, LM-kurve, AD-AS, Keynes-kryss, Phillips-kurve som pengepolitisk relasjon,
  Taylor-regel, ny-keynesiansk pengepolitikk, åpen økonomi / valutakurs / UIP,
  handlingsregelen, **dynamisk programmering / Bellman-ligning / verdifunksjons-
  iterasjon som regneoppgave** (verdifunksjon $V(b)$ *brukes* i arv-oppgaven, men
  ingen VFI), og **full aktivaprising (Lucas tree)**. Unntak: Del 0 kan nevne
  utelatelsene eksplisitt som «utenfor 4310-kjernen — hører til ECON2310 / annen
  tradisjon».

**Gjennomgående sensorregel nr. 1 («skriv utledningen, ikke svaret»):** Hvert
løsningsforslag i boka — i eksempler, øvingsløsninger, drillcaser og
øvingseksamener — skal vise **hele Lagrange/FOC-utledningen**: (1) sett opp
optimeringsproblemet og budsjettbetingelsen(e), (2) skriv Lagrange-funksjonen med
riktig antall multiplikatorer, (3) ta FOC-ene, (4) **eliminér multiplikatorene**
for å få resultatet (f.eks. Euler-ligningen), (5) tolk økonomisk. En A-besvarelse
postulerer aldri Euler-ligningen — den *utledes*. Dette er bokas didaktiske ryggrad
og skal drilles eksplisitt fra kap. 0.2.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): matematisk verktøy →
konsum/Euler (kjernen) → utvidelser under usikkerhet → OLG/finanspolitikk →
vekst (Solow, så Ramsey) → arbeidstilbud/trygd → nye sjangre → metodologi-essay →
trening. Frekvensen styrer *omfanget*: 75 %- og 63 %-kjernene får store deler med
eget drillkapittel; lavfrekvente tema får kompakte deler.

**Seksjonstitler (blir `sectionNames` i metadata — `number.split('.')[0]` grupperer):**

| Del | Seksjonstittel | Kap. | Prioritet | Begrunnelse (frekvens → omfang) |
|---|---|---|---|---|
| 0 | Eksamenskart og håndverk | 3 | — | Prioriteringsverktøy + de to sjangerhåndverkene (sporbar utledning + essay); kjerne i studieguiden. |
| 1 | Matematisk verktøy: Lagrange, FOC og intertemporal optimering | 3 | perfekt | Teknikken i **100 %** av modelloppgavene; må sitte før alt annet. |
| 2 | Intertemporal konsum, sparing og Euler-ligningen | 5 | perfekt | **Kjerne 1: 6/8 sett = 75 %**, hele Part B. Euler UTLEDES (ikke postuleres) → egen stor del + drillkapittel. |
| 3 | Utvidelser: lånebeskrankning, usikkerhet og RBC | 3 | kunne | Lånebeskrankning/hjørne 4/8 = 50 %; stokastisk RBC 2/8 men tungt og fast A-differensiator (Jensen → likevektsrente). |
| 4 | OLG og Ricardiansk ekvivalens | 3 | kunne | OLG 3/8 + arv/dynasti + Ricardo 3/8; finanspolitikkens mikrofundament. |
| 5 | Vekst I: Solow-modellen og golden rule | 5 | perfekt | **Kjerne 2: 5/8 sett = 63 %**, hele Part C. Steady state, $K/Y$, golden rule, komparativ statikk → stor del + drillkapittel. |
| 6 | Vekst II: Ramsey optimal vekst | 2 | kunne | 1/8, men **tyngste enkeltoppgave i arkivet** (100 p, H2021) og eksplisitt figurkrevende; «garantert kunne»-stoff, tung returkandidat. |
| 7 | Skatt, arbeidstilbud og sosial sikkerhet | 2 | kjenne | Arbeidstilbud 2/8 + trygd 2/8; lavfrekvent men lav dekningskostnad. |
| 8 | Investeringsteori, firmaverdi og Piketty | 2 | kjenne | Nye H2025-sjangre (hver 1/8), enkle å dekke, sannsynlig retur. |
| 9 | Metodologi-essayet (Part A) | 3 | perfekt | **Obligatorisk 1/3 i gjeldende format (3/3 nye sett).** Høy avkastning per time; drøftingssjanger med firepunkts-sjekkliste. |
| 10 | Eksamenstrening | 4 | — | Utledningsdrill på tvers + 3 øvingseksamener (Part A essay + Part B/C modell) som dekker alle sjangre og begge historiske formater. |

**Hybrid-valget (dokumentert, jf. README §Arketype-valg):**

ECON4310 er **primært et regnefag** — DNA-regnefag styrer 32 av 35 kapitler:
kapittel-DNA-ene teori/drill/øvingseksamen gjelder, og modelloppgavene bygges som
målrettet Lagrange/FOC-drill mot gjentatte oppgavemønstre. **Men Part A er et rent
drøftingsessay uten fasit** (Friedman/Lucas/NEMO/SAM/HANK), scoret mot en
firepunkts-sjekkliste, ikke en regnefasit. For **Del 9 og kap. 0.3** lånes derfor
**drøftingssjangeren fra DNA-drofting.md**:

- **Kap. 0.3 (essayhåndverket)** følger DNA-droftings *sjangerkapittel-DNA*:
  eksamensvinkel → oppskrift (disponering + tidsbudsjett) → gjennomskrevet
  modellbesvarelse med margkommentarer → øvingsoppgaver med momentliste/
  disposisjon (ikke fullt essay).
- **Del 9-kapitlene** følger DNA-droftings *temakapittel-DNA*: begreper defineres
  **med pensumforankring** (forfatter/verk fra §6-kildelista: Friedman 1953,
  Lucas 1976, Gerdrup & Nicolaisen 2011/NEMO, SAM, Solow 1997, HANK/heterogene
  agenter) → posisjoner og spenninger → anvendelse på den konkrete modellen →
  typiske feil → et `collapsible` **Pensumkart** (forfatter → verk → hvilke
  poenger de «eier», = flashcard-råstoff for norsk↔engelsk-par og
  begrep↔forfatter-koblinger).
- Alle **andre** kapitler (matematisk verktøy, konsum/Euler, RBC, OLG, Solow,
  Ramsey, arbeidstilbud/trygd, investering/Piketty) følger DNA-regnefags
  teori-/drill-DNA fullt ut: Eksamensvinkel → Forkunnskaper + Symbol- og
  formelliste → Motivasjon → definisjoner/teoremer i emnets notasjon → utledning
  med intuisjon (Euler/steady state/Jensen utledes steg for steg) → 2–4 eksempler
  (siste på eksamensnivå, løsning som A-besvarelse med full utledning) → Typiske
  feil → 6–12 stigende øvinger → repetisjonsoppgaver.

**Øvrige avvik fra DNA-malen (dokumentert):**

1. **Drillkapitler inne i de to kjernedelene** (2.5 konsum-Euler-drill, 5.5 Solow-
   drill) i stedet for samlet i siste del: begge er 63–75 %-gjengangere som må
   drilles umiddelbart etter teorien. Del 10 beholder utledningsdrillen på tvers
   (Lagrange/FOC som går på tvers av ALLE modeller) + øvingseksamenene. Samme
   avvik som econ1310/econ2310-bøkene gjorde.
2. **Egen matematisk verktøy-del (Del 1)** før modellene: DNA-regnefag forutsetter
   ofte teknikken kjent, men 4310s absolutte regel «utled fra optimeringsproblemet»
   gjør Lagrange/FOC/intertemporalt oppsett til selve mestringsferdigheten (100 %
   av modelloppgavene). Den fortjener egne kapitler.
3. **Essay-hybrid (Del 9 + kap. 0.3):** drøftingssjanger midt i et regnefag, jf.
   README §Hybridemner. Dokumentert over.
4. **To vekst-deler (5 og 6):** Solow (perfekt, algebraisk, 63 %) og Ramsey (kunne,
   fasediagram, 1/8 men tung) holdes atskilt fordi de har ulik prioritet og ulik
   sjanger; Ramsey plasseres *etter* Solow (Solow = deskriptiv vekst, Ramsey =
   optimal vekst = Solow + Euler).
5. **Alt regnes for hånd:** ingen numerikk/simulering; tyngste algebra =
   andregradsligning (nevnt i RBC-kap. 3.3 og arv-kap. 4.2). Øvingene skrives
   deretter: utled, tolk, signer fortegn, regn eksakt.
6. **Kvoten er skalert OVER gulvet (668 quiz / 652 flashcards):** faget er
   modellrikt (10+ distinkte modeller) OG har en begrepsrik essaydel med navngitte
   forfattere/verk — begge trekker flashcard-tettheten opp, jf. audit-lærdommen
   «≥500 er GULV, ikke mål». Del 9 har derfor flere flashcards enn quiz
   (begrep↔forfatter + norsk↔engelsk-par).

**Forkunnskaper og kryssbok-lenker:** 4310 er en egen tradisjon; forkunnskapene
dekkes internt i boka (Del 1 er fundamentet). Bygger-agenten kan legge til en
**verifisert** kryssbok-lenke til en grafisk Solow- eller optimerings-intro i en
**live** bok (per nå kun `econ1310` og `jus1111`) KUN hvis kapittel-id-en faktisk
finnes — ellers holdes Forkunnskaper interne (`/econ4310/econ4310-X-Y`).
Aldri lenk til en bok med status «skjelett».

---

## 3. Kvotesammendrag (AUTORITATIV for alle senere faser)

Sjangerbokstavene (A–O) refererer oppgavetype-katalogen i analysen §3, gjengitt for
studenten i kap. 0.1. Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) /
**kjenne** (nivå 3).

| Del | Kapittel | Quiz | Flashcards |
|---|---|---:|---:|
| 0 | 0.1 Eksamenskartet | 12 | 12 |
| 0 | 0.2 Utledningshåndverket | 14 | 12 |
| 0 | 0.3 Essayhåndverket | 14 | 14 |
| 1 | 1.1 Lagrange og førsteordensbetingelser | 22 | 24 |
| 1 | 1.2 Intertemporalt budsjett og dynamisk oppsett | 20 | 22 |
| 1 | 1.3 Nyttefunksjoner, CRRA og forventet nytte | 20 | 22 |
| 2 | 2.1 To-perioder: utled Euler-ligningen | 26 | 26 |
| 2 | 2.2 Konsumfunksjonen og rentens tvetydige fortegn | 24 | 24 |
| 2 | 2.3 T-perioder og uendelig horisont | 22 | 22 |
| 2 | 2.4 Permanentinntektshypotesen | 20 | 20 |
| 2 | 2.5 Drill: konsum-Euler fra a til å | 20 | 12 |
| 3 | 3.1 Lånebeskrankning og hjørneløsning | 20 | 20 |
| 3 | 3.2 Konsum under usikkerhet: stokastisk Euler | 20 | 20 |
| 3 | 3.3 Stokastisk RBC: Jensen og likevektsrenta | 22 | 22 |
| 4 | 4.1 OLG-modellen | 22 | 22 |
| 4 | 4.2 Dynasti, arv og hjørneløsning | 18 | 18 |
| 4 | 4.3 Ricardiansk ekvivalens | 20 | 22 |
| 5 | 5.1 Solow: oppsett og bevegelseslov | 24 | 24 |
| 5 | 5.2 Steady state, K/Y-ratio og faktorpriser | 24 | 24 |
| 5 | 5.3 Komparativ statikk og golden rule | 24 | 24 |
| 5 | 5.4 Effektive arbeidere og konvergens | 20 | 20 |
| 5 | 5.5 Drill: Solow fra a til å | 20 | 12 |
| 6 | 6.1 Ramsey: Euler, ressursbeskrankning, transversalitet | 20 | 20 |
| 6 | 6.2 Fasediagram, saddelbane og sjokk | 20 | 20 |
| 7 | 7.1 Skatt og arbeidstilbud | 20 | 20 |
| 7 | 7.2 Sosial sikkerhet og pensjon | 18 | 18 |
| 8 | 8.1 Investeringsteori og firmaverdi | 18 | 18 |
| 8 | 8.2 Piketty vs. Solow | 16 | 16 |
| 9 | 9.1 Friedman-kriteriet og Lucas-kritikken | 20 | 26 |
| 9 | 9.2 DSGE, NEMO og SAM | 18 | 24 |
| 9 | 9.3 Representativ agent, HANK og empirisk MPC | 18 | 24 |
| 10 | 10.1 Sjangeroversikt og utledningsdrill | 16 | 10 |
| 10 | 10.2 Øvingseksamen 1 (Euler + Solow) | 12 | 6 |
| 10 | 10.3 Øvingseksamen 2 (investering + Piketty) | 12 | 6 |
| 10 | 10.4 Øvingseksamen 3 (RBC + OLG/Ramsey) | 12 | 6 |
| | **SUM** | **668** | **652** |

**Kontrollsum per del** — quiz: Del 0 = 40, Del 1 = 62, Del 2 = 112, Del 3 = 62,
Del 4 = 60, Del 5 = 112, Del 6 = 40, Del 7 = 38, Del 8 = 34, Del 9 = 56,
Del 10 = 52 → **668** (≥500 ✓). Flashcards: Del 0 = 38, Del 1 = 68, Del 2 = 104,
Del 3 = 62, Del 4 = 62, Del 5 = 104, Del 6 = 40, Del 7 = 38, Del 8 = 34,
Del 9 = 74, Del 10 = 28 → **652** (≥500 ✓). Kjernedelene (2 og 5) bærer 33 % av
quizen; essaydelen (9) har flashcard-overvekt (begrep↔forfatter, norsk↔engelsk).
**Kvotene er fasit — byggeagentene skal ikke overstyre dem i prompt.**

**Prøvekvote:** 4 prøver per temadel for Del 1–9 (9 prøvekapitler à 4 prøver = 36
prøver) + 3 øvingseksamener i Del 10. Del 0 (håndverk) og Del 10 (som *er*
øvingseksamener) har ikke egne prøvekapitler.

---

## 4. Kapitler

Feltene følger DNA-ens «Skjelett-krav». `number` er **del-basert** («2.3»), ALDRI
lineær (jf. PRODUKSJONSLOYPE-lærdommen). Prosareferanser bruker samme form
(«kap. 2.3»).

---

### Del 0 — Eksamenskart og håndverk

#### Kapittel 0.1: Eksamenskartet: slik testes ECON4310

- **id:** `econ4310-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Eksamensformen, formatskiftet H2022→H2023, de fem søylene, sjangerkatalogen A–O og lesestrategien som styrer hele boka.
- **Forkunnskaper-lenker:** ingen (metakapittel).
- **Eksamensbelegg:** Bygger på alle 8 sett. Skal gjengi: (i) **formen** — 3 timers skriftlig skoleeksamen **på engelsk**, karakter A–F, ordbok tillatt etter inspeksjon; obligatorisk semesteroppgave må være godkjent for å gå opp; alle svar på engelsk. (ii) **Den absolutte regelen**: «solutions without traceable outlines do not earn points» — riktig svar uten utledning = **null**; riktig oppsett med regnefeil = delvis uttelling (poeng per FOC-steg); start ny side per deloppgave. (iii) **Formatskiftet H2022→H2023**: gammelt format (t.o.m. H2022) = 2–4 nummererte Exercise A/B/(C/D) med eksplisitt poengtabell (Σ 140–210) + noen T/F-spørsmål med *påkrevd* begrunnelse; nytt format (f.o.m. H2023, stabilt 3 år) = tre **likevektede deler hver 1/3**: **Part A = metodologi-essay** (≤500–750 ord) + **Part B og C = modelloppgaver**. Nytt format er den sannsynlige malen framover. (iv) **De fem søylene** + temafrekvens: intertemporal konsum/Euler **75 %**, Solow **63 %**, Lagrange/FOC **100 %** av modelloppgaver, metodologi-essay **3/3 nye sett**, golden rule 38 %, OLG 38 %, Ricardo 38 %, lånebeskrankning/hjørne 50 %, rentens innt/subst-fortegn 50 %, RBC 25 %, arbeidstilbud 25 %, trygd 25 %, PIH 25 %, investering 13 % (ny), Piketty 13 % (ny), Ramsey-fasediagram 13 % (tung). (v) At **IS-RR-PK, Keynes, AD-AS, pengepolitikk, åpen økonomi, Bellman/DP-iterasjon og full aktivaprising har 0 forekomster** og bevisst er utelatt. (vi) **Prognosen H2026**: gjeldende trippel videreføres — Part A essay (begge varianter må dekkes) + to modelloppgaver der minst én av {konsum-Euler, Solow} er svært sannsynlig; Ramsey og RBC er de mest sannsynlige «tunge» returkandidatene. (vii) **A-differensiatorene**: Jensen-argumentet for likevektsrenta, $\partial C_{ss}/\partial s$-fortegnet (golden rule), permanent vs. midlertidig $\delta$-sjokk i Ramsey, $1/\sigma>1$-drøftingen.
- **Innholdskontrakt:** Oppgavetype-katalogen **A–O** presenteres som studentens sjekkliste: A utled Euler fra optimeringsproblem, B løs konsumfunksjon + drøft rentens fortegn, C PIH ($\beta(1+r)=1$), D Solow bevegelseslov/steady state/$K/Y$, E Solow komparativ statikk + golden rule, F Ramsey fasediagram/saddelbane/sjokk, G OLG sparing/flere steady states, H dynasti/arv/hjørneløsning, I Ricardiansk ekvivalens/finanspolitikk-rangering, J stokastisk RBC/Jensen/likevektsrente, K skatt & arbeidstilbud, L sosial sikkerhet/PAYG, M investeringsteori/firmaverdi, N Piketty vs. Solow, O metodologi-essay. Avslutt med leseplan: Del 1 + 2 + 5 + 9 = «perfekt»; Del 3 + 4 + 6 = «kunne»; Del 7 + 8 = «kjenne».
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «Nytt format har tre likevektede deler og du har 180 minutter — sett opp tidsbudsjett per del, og begrunn hvorfor essayet ikke skal sluke tiden fra modelloppgavene.»
- **Typiske feil:** Metafeilene: skrive svaret uten sporbar utledning (null); postulere Euler i stedet for å utlede; lese bare kjernene og bli tatt av en rotasjonsoppgave; undervurdere essayet (1/3 av karakteren).
- **Quiz: 12 · Flashcards: 12**

#### Kapittel 0.2: Utledningshåndverket: skriv sporbar utledning, ikke bare svaret

- **id:** `econ4310-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** `econ4310-0-1`
- **kapitteltype:** sjanger/håndverk (DNA-regnefag drillformat, generalisert)
- **description:** Den algoritmiske malen for enhver 4310-modelloppgave: fra optimeringsproblem via Lagrange og FOC til tolket resultat — slik at hvert steg gir poeng.
- **Forkunnskaper-lenker:** ingen (håndverket demonstreres på en enkel to-perioder som utdypes i kap. 2.1).
- **Eksamensbelegg:** Destillert fra sensorens metaregler (analysen §4): poeng deles per steg — «10 poeng bare hvis sluttformelen er korrekt», «trekk 2,5 hvis én FOC er feil», «trekk 3 hvis én Lagrange-blokk er feil». Gjelder **100 %** av modelloppgavene. Prioritet: **perfekt** (håndverksfundament).
- **Innholdskontrakt:** Presentér den generiske **7-stegsmalen** som gjentas i hvert modellkapittel: (1) skriv opp målfunksjonen (objektivet) og ALLE beskrankninger eksplisitt; (2) velg multiplikator-oppsett — én $\lambda_t$ per periodebudsjett *eller* én $\lambda$ på den konsoliderte livstidsbudsjettbetingelsen (vis at begge gir samme svar); (3) skriv Lagrange-funksjonen; (4) ta FOC-ene ($\partial\mathcal{L}/\partial c_t=0$, osv.); (5) **eliminér multiplikatorene** for å få kjerne-relasjonen (typisk Euler); (6) kombiner med budsjettet for lukket uttrykk / tallsvar; (7) **tolk økonomisk** (tolkningskrav gir egne poeng: «grensenytten i dag = neddiskontert grensenytte i morgen»). Marker eksplisitt hvor delpoengene faller, og at et riktig oppsett med regnefeil slår et riktig svar uten oppsett. Introduksjon til **hjørneløsning** (corner solution): når en ikke-negativitetsbeskrankning ($b\ge 0$, $a_2=0$) binder, forlates interiør-FOC og hjørnet argumenteres for (utdypes i kap. 3.1, 4.2).
- **Oppgavesjangre:** Sjanger A i miniformat. Mønstereksempel (omskrevet): «En husholdning velger konsum i to perioder for å maksimere neddiskontert nytte under to periodebudsjett. Skriv ut hele utledningen av optimumsbetingelsen, steg for steg, og marker hva sensor gir poeng for i hvert steg.»
- **Typiske feil:** Hoppe rett til sluttformelen (dyreste feil); postulere Euler; feil antall multiplikatorer; glemme tolkningssteget; bruke interiør-FOC når en beskrankning binder.
- **Quiz: 14 · Flashcards: 12**

#### Kapittel 0.3: Essayhåndverket: metodologi-essayet mot firepunkts-sjekklista

- **id:** `econ4310-0-3` · **number:** 0.3 · **estimatedMinutes:** 45 · **prerequisites:** `econ4310-0-1`
- **kapitteltype:** sjanger/håndverk (**lånt fra DNA-drofting sjangerkapittel-DNA**)
- **description:** Hvordan Part A-essayet bygges og scores: struktur, tidsbudsjett, pensumforankring og de fire kriteriene som gir full uttelling.
- **Forkunnskaper-lenker:** ingen (innholdet leveres i Del 9; her er det håndverket).
- **Eksamensbelegg:** Part A er **obligatorisk 1/3** i alle 3 nye sett (H2023–H2025). Scores mot en **firepunkts-sjekkliste**, ikke en fasit. Prioritet: **perfekt** (høy avkastning per time).
- **Innholdskontrakt:** Presentér **firepunkts-sjekklista** som studentens mål: (1) forståelse av konsept 1 (Friedman-kriteriet / representativ-agent-svakhetene); (2) forståelse av konsept 2 (Lucas-kritikken / HANK og heterogene agenter); (3) **anvendelse på den konkrete modellen** (NEMO+SAM / empirisk MPC) — *hva* modellen er og *om* den oppfyller kriteriene; (4) velstrukturert tekst som svarer på prompten og **refererer pensumlitteraturen**. Deretter **oppskriften** (disponering + tidsbudsjett for ≤500–750 ord på ~50 min): (i) kort innledning som svarer på prompten; (ii) konsept 1 med forfatterforankring; (iii) konsept 2 med forfatterforankring; (iv) anvendelse på modellen med drøfting; (v) kort konklusjon. Understrek at essayet **anvender**, ikke bare gjengir — kriterium 3 og 4 er der A vinnes; direkte sitater unngås (opphavsrett), forfattere navngis. Inkluder én gjennomskrevet mini-modellbesvarelse (~250 ord) med margkommentarer («her: begrep + forankring», «her: anvendelse på NEMO — dette løfter til A»).
- **Oppgavesjangre:** Sjanger O. Mønstereksempel: «Redegjør kort for Friedmans og Lucas' kriterier for en god modell, og drøft i hvilken grad en DSGE-modell som NEMO søker å oppfylle dem.» (Løsning = momentliste + disposisjon + kort modellavsnitt, ikke fullt essay.)
- **Typiske feil:** Gjengi teori uten å anvende den på NEMO/SAM/HANK (kriterium 3 svikter); glemme pensumforankring (kriterium 4); skrive for langt / ikke svare på prompten; sitere i lengde.
- **Quiz: 14 · Flashcards: 14**

---

### Del 1 — Matematisk verktøy: Lagrange, FOC og intertemporal optimering *(prioritet: PERFEKT)*

#### Kapittel 1.1: Lagrange og førsteordensbetingelser

- **id:** `econ4310-1-1` · **number:** 1.1 · **estimatedMinutes:** 60 · **prerequisites:** `econ4310-0-2`
- **kapitteltype:** teori
- **description:** Kjerneteknikken i faget: sett opp Lagrange med riktig antall multiplikatorer, ta FOC, eliminér multiplikatorene — og håndter bindende beskrankninger.
- **Forkunnskaper-lenker:** ingen internt utover kap. 0.2 (håndverksmalen).
- **Eksamensbelegg:** Brukes i **8/8 sett = 100 %** av modelloppgavene (analysen §2, §7 nivå 1). Prioritet: **perfekt**.
- **Innholdskontrakt (Symbol- og formelliste, tospråklig):** MÅ KUNNE AKTIVT: Lagrange-funksjonen (the Lagrangian) $\mathcal{L}=\text{objektiv}+\sum_t \lambda_t[\text{budsjett}_t]$; multiplikatoren $\lambda$ (Lagrange multiplier / shadow price) som skyggepris/grensenytte av å slakke beskrankningen; FOC (first-order conditions) $\partial\mathcal{L}/\partial x=0$; **eliminasjon av multiplikatorer** ved å dele to FOC-er på hverandre. To ekvivalente oppsett: (a) én multiplikator per periodebudsjett; (b) én multiplikator på det konsoliderte livstidsbudsjettet — vis at de gir identisk resultat. Kort om **Kuhn–Tucker / hjørneløsning** (corner solution): ved ulikhetsbeskrankning $b\ge 0$ er enten beskrankningen slakk ($\lambda=0$, interiør-FOC gjelder) eller bindende ($b=0$); komplementær slakkhet. Grensenyttetolkningen av $\lambda$.
- **Oppgavesjangre:** Byggekloss for alle modellsjangre (A, D, F, G, J, K, L, M). Mønstereksempel: «Maksimér $u(c_1)+u(c_2)$ under $c_1+a=y_1$ og $c_2=(1+r)a+y_2$. Sett opp Lagrange, ta FOC, og eliminér multiplikatorene til én betingelse mellom $c_1$ og $c_2$.»
- **Typiske feil:** Feil antall multiplikatorer; blande FOC for $c_t$ og for aktivavariabelen; ikke eliminere $\lambda$ (etterlate den i svaret); bruke interiør-FOC når en beskrankning binder.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 1.2: Intertemporalt budsjett og dynamisk oppsett

- **id:** `econ4310-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ4310-1-1`
- **kapitteltype:** teori
- **description:** Bindeleddet mellom periodebudsjettene og livstidsbudsjettet — og de geometriske rekkene som gjør uendelig horisont regnbar for hånd.
- **Forkunnskaper-lenker:** ingen internt utover kap. 1.1.
- **Eksamensbelegg:** Inngår i alle konsum-/vekst-/investeringsoppgaver (analysen §6). Prioritet: **perfekt**.
- **Innholdskontrakt (Symbol- og formelliste, tospråklig):** MÅ KUNNE AKTIVT: periodebudsjett (period budget constraint) $c_t+a_{t+1}=(1+r)a_t+y$; konsolidering til **livstidsbudsjett / PDV-budsjett** (present-value / lifetime budget constraint) $\sum_t c_t/(1+r)^t=(1+r)a_0+\sum_t y/(1+r)^t$; nyttig sum for uendelig horisont $\sum_{t=0}^{\infty}(1+r)^{-t}=(1+r)/r$; endelig geometrisk rekke. To-perioder-formen $c_1+b_1=y_1,\ c_2=(1+r)b_1$ ⇒ $c_1+c_2/(1+r)=y_1+y_2/(1+r)$. Dynamisk oppsett (dynamic setup): tilstandsvariabel (state) $a_t$/$k_t$, kontrollvariabel (control) $c_t$, bevegelsesligning (law of motion). **No-Ponzi** / transversalitet nevnes som randbetingelsen som pinner ned løsningen (utdypes i Ramsey, kap. 6.1).
- **Oppgavesjangre:** Byggekloss (A, B, C, G, I, M). Mønstereksempel: «Skriv periodebudsjettene for en tre-periode-husholdning og utled det konsoliderte livstidsbudsjettet. Beregn nåverdien av en inntektsstrøm som er konstant i alle tre perioder.»
- **Typiske feil:** Feil i geometrisk rekke ($(1+r)/r$ vs. $1/r$); glemme startformuen $(1+r)a_0$; blande diskontering av inntekt og konsum; feil eksponent i diskonteringsfaktoren.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 1.3: Nyttefunksjoner, CRRA og forventet nytte

- **id:** `econ4310-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `econ4310-1-2`
- **kapitteltype:** teori
- **description:** Nyttefunksjonene faget bruker (CRRA og log), grensenytte, konkavitet — og Jensens ulikhet, som blir A-differensiatoren under usikkerhet.
- **Forkunnskaper-lenker:** ingen internt utover kap. 1.1.
- **Eksamensbelegg:** CRRA/log inngår i alle konsumoppgaver; Jensen er A-differensiator i RBC (H2018 C, H2020 C). Prioritet: **perfekt** (fundament).
- **Innholdskontrakt (Symbol- og formelliste, tospråklig):** MÅ KUNNE AKTIVT: **CRRA-nytte** (constant relative risk aversion) $u(c)=c^{1-\sigma}/(1-\sigma)$ (ekvivalent $(c^{1-\sigma}-1)/(1-\sigma)$), grensenytte $u'(c)=c^{-\sigma}$; **log-nytte** som grensetilfellet $\sigma\to 1$, $u'(c)=1/c$; parameteren $\sigma$ = relativ risikoaversjon, og $1/\sigma$ = **intertemporal substitusjonselastisitet** (elasticity of intertemporal substitution) — nøkkelen til rentens fortegn (kap. 2.2). Konkavitet $u''<0$ = avtakende grensenytte = konsumglatting (consumption smoothing). **Forventet nytte** (expected utility) $E[u(c)]$ og **Jensens ulikhet** (Jensen's inequality): for konkav $u$, $E[u(c)]\le u(E[c])$, og for konveks $u'$, $E[u'(c)]\ge u'(E[c])$ — utled/illustrer grafisk; dette er kjernen i precautionary saving og lav likevektsrente. Skill $\sigma$ (Solow-/konsum-sett) fra $\theta$ (Ramsey-sett) — samme rolle.
- **Oppgavesjangre:** Byggekloss (A, B, C, F, J, L). Mønstereksempel: «Vis at CRRA-nytten har konstant relativ risikoaversjon $\sigma$, og bruk Jensens ulikhet til å forklare hvorfor forventet grensenytte overstiger grensenytten av forventet konsum.»
- **Typiske feil:** Feil fortegn/eksponent i $u'(c)=c^{-\sigma}$; forveksle $\sigma$ og $1/\sigma$; snu Jensen-ulikheten; behandle log-nytte som noe annet enn CRRA-grensetilfellet.
- **Quiz: 20 · Flashcards: 22**

**Prøve-kvote Del 1:** 4 prøver (1.A ren Lagrange/FOC-oppstilling med multiplikator-eliminasjon, 30 min; 1.B intertemporalt budsjett + geometrisk rekke, 30 min; 1.C CRRA/log grensenytte + $1/\sigma$-tolkning, 30 min; 1.D Jensens ulikhet grafisk + algebraisk, 30 min).

---

### Del 2 — Intertemporal konsum, sparing og Euler-ligningen *(prioritet: PERFEKT — KJERNE 1, hele Part B)*

#### Kapittel 2.1: To-perioder: utled Euler-ligningen

- **id:** `econ4310-2-1` · **number:** 2.1 · **estimatedMinutes:** 65 · **prerequisites:** `econ4310-1-3`
- **kapitteltype:** teori
- **description:** Bokas viktigste utledning: Euler-ligningen fra husholdningens optimeringsproblem — steg for steg, aldri postulert.
- **Forkunnskaper-lenker:** ingen internt utover Del 1.
- **Eksamensbelegg:** Sjanger A, kjernen i **6/8 sett = 75 %** (H2018 A2/A3/B, H2019 B, H2021 A, H2022 A, H2023 B, H2024 B), hele Part B i nytt format. Prioritet: **perfekt**.
- **Innholdskontrakt (Symbol- og formelliste, tospråklig):** MÅ KUNNE UTLEDES AKTIVT: to-perioder-problemet $\max u(c_1)+\beta u(c_2)$ under $c_1+b_1=y_1$, $c_2=(1+r)b_1+y_2$. Sett opp Lagrange (to periodebudsjett *eller* konsolidert), ta FOC for $c_1,c_2,b_1$, **eliminér $\lambda$** ⇒ **Euler-ligningen** (the Euler equation) $u'(c_1)=\beta(1+r)u'(c_2)$; CRRA: $c_1^{-\sigma}=\beta(1+r)c_2^{-\sigma}$ ⇒ $c_2=[\beta(1+r)]^{1/\sigma}c_1$. **Tolkning obligatorisk** (gir egne poeng): grensenytten i dag = neddiskontert grensenytte i morgen; renta er relativprisen mellom konsum i to perioder; $\beta(1+r)\gtrless 1$ avgjør stigende/fallende konsumbane. Vis at Euler + budsjett bestemmer $(c_1,c_2)$ entydig.
- **Oppgavesjangre:** A. Mønstereksempel: «En husholdning lever i to perioder og maksimerer $u(c_1)+\beta u(c_2)$ under sine periodebudsjett. Utled optimumsbetingelsen og tolk den økonomisk. Hva bestemmer om konsumet stiger eller faller mellom periodene?»
- **Typiske feil:** Postulere Euler i stedet for å utlede den (dyr feil); glemme $\beta$ eller $(1+r)$; ikke tolke ligningen; feil ved multiplikator-eliminasjonen.
- **Quiz: 26 · Flashcards: 26**

#### Kapittel 2.2: Konsumfunksjonen og rentens tvetydige fortegn

- **id:** `econ4310-2-2` · **number:** 2.2 · **estimatedMinutes:** 60 · **prerequisites:** `econ4310-2-1`
- **kapitteltype:** teori
- **description:** Fra Euler + budsjett til lukket konsumfunksjon — og A-differensiatoren: hvorfor en renteøkning kan trekke konsumet begge veier.
- **Forkunnskaper-lenker:** ingen internt utover Del 1–2.
- **Eksamensbelegg:** Sjanger B, **4/8 = 50 %** (H2019 D, H2021 B, H2022 A, H2023 B); $1/\sigma>1$-fortegnsdrøftingen er eksplisitt A-differensiator (analysen §4). Prioritet: **perfekt**.
- **Innholdskontrakt (Symbol- og formelliste, tospråklig):** MÅ KUNNE AKTIVT: kombinér Euler med livstidsbudsjettet ⇒ lukket konsumfunksjon, f.eks. (inntekt kun i periode 1) $c_1=y_1/(1+[\beta(1+r)]^{1/\sigma}/(1+r))=y_1/(1+\beta^{1/\sigma}(1+r)^{1/\sigma-1})$. **Dekomponér renteeffekten** (income vs. substitution effect): $\partial c_1/\partial r$ er **tvetydig**; substitusjonseffekten (styrt av $1/\sigma$) trekker mot mindre konsum i dag (spare mer når sparing lønner seg mer), inntektseffekten trekker mot mer; **substitusjonseffekten dominerer ($\partial c_1/\partial r<0$) når $1/\sigma>1$**, dvs. $\sigma<1$. Ved inntekt kun i periode 1 (rent sparetilfelle) er **human-wealth-effekten null** — nevn det (H2021 B). For en netto låntaker/sparer snur fortegnene.
- **Oppgavesjangre:** B. Mønstereksempel: «Forklar hvorfor virkningen av en renteøkning på førsteperiodens konsum er tvetydig, og hvilken parameter som avgjør fortegnet. Anta så at all inntekt kommer i periode 1 — hva skjer med human-wealth-effekten?»
- **Typiske feil:** Signere $\partial c_1/\partial r$ uten å drøfte $1/\sigma$ mot 1; forveksle $\sigma$ og $1/\sigma$; glemme at human-wealth-effekten er null ved inntekt kun i periode 1; blande sparer- og låntakertilfellet.
- **Quiz: 24 · Flashcards: 24**

#### Kapittel 2.3: T-perioder og uendelig horisont

- **id:** `econ4310-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** `econ4310-2-2`
- **kapitteltype:** teori
- **description:** Euler-ligningen generalisert: samme betingelse mellom hvert nabo-periodepar, og hvordan man løser konsumbanen over mange perioder.
- **Forkunnskaper-lenker:** ingen internt utover Del 1–2.
- **Eksamensbelegg:** Sjanger A, uendelig-horisont-varianten i H2024 B (og H2018 B via T-perioder). Del av 75 %-kjernen. Prioritet: **perfekt**.
- **Innholdskontrakt (Symbol- og formelliste, tospråklig):** MÅ KUNNE AKTIVT: $\max\sum_{t=0}^{\infty}\beta^t u(c_t)$ under $c_t+a_{t+1}=(1+r)a_t+y$; FOC-er gir **Euler mellom hvert par**: $u'(c_t)=\beta(1+r)u'(c_{t+1})$ for alle $t$; CRRA gir geometrisk konsumbane $c_{t+1}=[\beta(1+r)]^{1/\sigma}c_t$. Bruk livstidsbudsjettet ($\sum(1+r)^{-t}=(1+r)/r$) til å pinne ned nivået $c_0$. Randbetingelse: transversalitet/no-Ponzi (nevnes, formaliseres i Ramsey). Sammenheng med endelig $T$: samme Euler, ulikt budsjett.
- **Oppgavesjangre:** A. Mønstereksempel: «En husholdning maksimerer neddiskontert nytte over uendelig mange perioder under en periodevis budsjettbetingelse. Vis at optimum krever Euler-ligningen mellom to vilkårlige naboperioder, og finn konsumnivået i periode 0.»
- **Typiske feil:** Tro at Euler bare gjelder de to første periodene; feil ved den uendelige geometriske summen; glemme transversalitet/randbetingelsen; ikke pinne ned nivået.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 2.4: Permanentinntektshypotesen

- **id:** `econ4310-2-4` · **number:** 2.4 · **estimatedMinutes:** 50 · **prerequisites:** `econ4310-2-3`
- **kapitteltype:** teori
- **description:** Spesialtilfellet $\beta(1+r)=1$ som gir perfekt konsumglatting — og skillet mellom respons på midlertidig og permanent inntektsendring.
- **Forkunnskaper-lenker:** ingen internt utover Del 2.
- **Eksamensbelegg:** Sjanger C, **2/8 = 25 %** (H2018 A2, H2024 B). Prioritet: **perfekt** (lav dekningskostnad, del av Part B-kjernen).
- **Innholdskontrakt (Symbol- og formelliste, tospråklig):** MÅ KUNNE AKTIVT: med **$\beta(1+r)=1$** gir Euler $u'(c_t)=u'(c_{t+1})$ ⇒ **perfekt glatting** $c_t=c$ konstant. Sett inn i livstidsbudsjettet ⇒ **permanentinntektshypotesen** (permanent income hypothesis, PIH) $c=ra+y$ (annuiteten av total livstidsformue = human + finansiell). **Tolkning:** en *midlertidig* inntektsøkning virker som økt formue → konsum stiger med $r\cdot$beløpet (mesteparten spares); en *permanent* inntektsøkning → konsum stiger tilnærmet én-til-én. Koble til konsumglatting fra kap. 1.3.
- **Oppgavesjangre:** C. Mønstereksempel: «Anta $\beta(1+r)=1$. Utled konsumfunksjonen og forklar forskjellen i konsumrespons på en midlertidig versus en permanent inntektsøkning.»
- **Typiske feil:** Glemme at $\beta(1+r)=1$ er forutsetningen for konstant konsum; regne midlertidig respons som én-til-én (den er $r\cdot$beløpet); blande human og finansiell formue i annuiteten.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 2.5: Drill: konsum-Euler fra a til å

- **id:** `econ4310-2-5` · **number:** 2.5 · **estimatedMinutes:** 90 · **prerequisites:** `econ4310-2-4`
- **kapitteltype:** drill (DNA-regnefag drillformat)
- **description:** Hele Part B-sjangeren som algoritme: fra oppsett via Euler-utledning og konsumfunksjon til fortegnsdrøfting og PIH — på eksamensnivå.
- **Forkunnskaper-lenker:** ingen internt utover Del 1–2.
- **Eksamensbelegg:** Dekker sjanger A + B + C samlet — 75 %-kjernen, hele Part B. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift** (7-stegsmalen fra kap. 0.2 spesialisert): 1) skriv objektiv + budsjett(er); 2) Lagrange med riktig multiplikatoroppsett; 3) FOC; 4) eliminér $\lambda$ ⇒ Euler; 5) sett inn CRRA/log; 6) kombiner med livstidsbudsjett ⇒ lukket $c_1$ / konsumbane; 7) drøft renteeffekten ($1/\sigma$ mot 1), håndter PIH-tilfellet, tolk. Gjennomregnet eksamenscase med sensor-margnotater (hvor delpoengene faller, hvor $1/\sigma$-fella og «postuler-Euler»-fella ligger). **10–15 oppgaver** som roterer katalogen: to-perioder, T-perioder, uendelig horisont, inntekt i én/begge perioder, sparer/låntaker, $\beta(1+r)\gtrless 1$, midlertidig vs. permanent sjokk — alle på eksamensnivå med nyskrevne tall/kontekst.
- **Oppgavesjangre:** A + B + C. Mønstereksempel (full Part B-kjede): «(1) Utled Euler for en to-perioder-husholdning med CRRA-nytte. (2) Finn lukket uttrykk for førsteperiodens konsum. (3) Drøft fortegnet på $\partial c_1/\partial r$. (4) Anta så $\beta(1+r)=1$ og forklar konsumresponsen på en permanent inntektsøkning.»
- **Typiske feil:** Hele katalogen fra 2.1–2.4; drill-spesifikt: bruke tid på lette steg og møte fortegnsdrøftingen uforberedt; postulere Euler under tidspress.
- **Quiz: 20 · Flashcards: 12**

**Prøve-kvote Del 2:** 4 prøver (2.A utled Euler to-perioder + tolkning, 40 min, sjanger A; 2.B konsumfunksjon + rentens fortegn med $1/\sigma$-drøfting, 45 min, sjanger B; 2.C PIH: midlertidig vs. permanent, 35 min, sjanger C; 2.D full Part B-kjede uendelig horisont på eksamensnivå, 55 min, sjanger A–C).

---

### Del 3 — Utvidelser: lånebeskrankning, usikkerhet og RBC *(prioritet: KUNNE)*

#### Kapittel 3.1: Lånebeskrankning og hjørneløsning

- **id:** `econ4310-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ4310-2-1`
- **kapitteltype:** teori
- **description:** Hva som skjer med konsumglatting og Euler når husholdningen ikke får låne — og hvordan man argumenterer for et hjørne.
- **Forkunnskaper-lenker:** ingen internt utover Del 2.
- **Eksamensbelegg:** Sjanger (bryter A/I), **4/8 = 50 %** (H2018 A1/B, H2019 B, H2020 B). Prioritet: **kunne** (høyfrekvent vri).
- **Innholdskontrakt (Symbol- og formelliste, tospråklig):** MÅ KUNNE AKTIVT: legg til beskrankningen $b_1\ge 0$ (borrowing constraint) i to-/tre-perioder-problemet. To regimer: (i) **slakk** — interiør-FOC/Euler gjelder, konsumglatting som normalt; (ii) **bindende** ($b_1=0$) — Euler holder *ikke* med likhet, konsum følger inntekten periode for periode (hjørneløsning, corner solution). Kriteriet: den ubeskrankede optimale $b_1^\ast$ er negativ (ønsker å låne) ⇒ beskrankningen binder ⇒ sett $b_1=0$. Konsekvens: en midlertidig inntektsøkning konsumeres *fullt ut* i perioden den kommer (bryter PIH-glatting); komplementær slakkhet $\lambda\cdot b_1=0$. Broen til Ricardo (kap. 4.3): bindende lånebeskrankning bryter Ricardiansk ekvivalens.
- **Oppgavesjangre:** Modell-vri. Mønstereksempel: «En husholdning ønsker å låne mot fremtidig inntekt, men kan ikke ($b\ge 0$). Vis når beskrankningen binder, og forklar hvorfor konsumet da følger inntekten i stedet for å glattes.»
- **Typiske feil:** Bruke interiør-Euler når beskrankningen binder; ikke sjekke om ubeskranket $b^\ast<0$; glemme komplementær slakkhet; tro at glatting fortsatt gjelder ved bindende beskrankning.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 3.2: Konsum under usikkerhet: stokastisk Euler

- **id:** `econ4310-3-2` · **number:** 3.2 · **estimatedMinutes:** 60 · **prerequisites:** `econ4310-2-1`
- **kapitteltype:** teori
- **description:** Euler-ligningen når morgendagens inntekt er usikker — forventningsoperatoren på riktig plass, og hvorfor det gir forsiktighetssparing.
- **Forkunnskaper-lenker:** ingen internt utover Del 1–2 (Jensen fra kap. 1.3).
- **Eksamensbelegg:** Fundament for RBC (kap. 3.3); usikkerhet i H2018 C, H2020 C. Prioritet: **kunne**.
- **Innholdskontrakt (Symbol- og formelliste, tospråklig):** MÅ KUNNE UTLEDES AKTIVT: $\max u(c_1)+\beta E[u(c_2)]$ der $c_2$ avhenger av en usikker tilstand; utled **stokastisk Euler** (stochastic Euler equation) $u'(c_1)=\beta(1+r)E[u'(c_2)]$ — **forventningsoperatoren står rundt grensenytten**, IKKE rundt konsumet: $E[u'(c_2)]\ne u'(E[c_2])$ (nettopp Jensen-poenget). Konkav $u$ (konveks $u'$) ⇒ **precautionary saving** (forsiktighetssparing): usikkerhet øker $E[u'(c_2)]$ ⇒ mer sparing i dag. Skriv de tilstandsvise budsjettene (state-contingent budgets) $c_2(s)=w(s)+(1+r)a$.
- **Oppgavesjangre:** Utled-under-usikkerhet (fundament for J). Mønstereksempel: «Utled Euler-ligningen når andreperiodens inntekt er usikker, og forklar hvorfor forventningsoperatoren må stå rundt grensenytten. Hva slags spareatferd følger av dette?»
- **Typiske feil:** Feilplassere forventningsoperatoren ($u'(E[c_2])$ i stedet for $E[u'(c_2)]$); glemme forsiktighetssparingen; behandle usikker inntekt som sikker forventning.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 3.3: Stokastisk RBC: Jensen og likevektsrenta

- **id:** `econ4310-3-3` · **number:** 3.3 · **estimatedMinutes:** 75 · **prerequisites:** `econ4310-3-2`
- **kapitteltype:** teori
- **description:** Den tyngste enkeltoppgaven i arkivet: en to-tilstands RBC-modell der likevektsrenta havner UNDER den risikonøytrale — bevist med Jensens ulikhet.
- **Forkunnskaper-lenker:** ingen internt utover Del 1–3.
- **Eksamensbelegg:** Sjanger J, **2/8 = 25 %** (H2018 C, H2020 C), men **60-poengs oppgaver og fast A-differensiator** (analysen §4, §7 nivå 2). Prioritet: **kunne** (A-skille).
- **Innholdskontrakt (Symbol- og formelliste, tospråklig):** MÅ KUNNE AKTIVT: to-periode, to-tilstand (god $s_G$ / dårlig $s_B$ med sannsynlighet $p$/$1-p$), lineær produksjon $y=A(s)n$; konkurransemarked ⇒ **lønn = produktivitet** $w(s)=A(s)$. Skriv **tilstandsvise budsjett** $c_1+a_2=w_1$, $c_2(s)=w(s)+(1+r_2)a_2$; sett opp **tilstandssortert Lagrange** $\mathcal{L}=u(c_1)+\lambda_1[\cdot]+\beta p\,u(c_{2G})+\lambda_{2G}[\cdot]+\beta(1-p)u(c_{2B})+\lambda_{2B}[\cdot]$; FOC-er ⇒ **stokastisk Euler** $u'(c_1)=\beta(1+r_2)E[u'(c_2(s))]$. Med aktivum i **null nettotilbud** (zero net supply) $a_2=0$ ⇒ $c_2(s)=w(s)$, ingen glatting ($c_{2G}\ne c_{2B}$). **A-differensiatoren:** bruk **Jensens ulikhet** $E[u'(c_2)]\ge u'(E[c_2])$ til å vise at likevektsrenta er **lavere** enn den risikonøytrale $r_{RN}=1/\beta-1$ (risikopremie / precautionary saving presser renta ned). Kvantitativ variant: løs andregradsligning for $a_2$ (tyngste algebra i faget, H2020 f).
- **Oppgavesjangre:** J. Mønstereksempel: «Utled den stokastiske Euler-ligningen i en to-tilstands RBC-modell, forklar hvorfor konsumet ikke kan glattes når aktivumet er i null nettotilbud, og vis med Jensens ulikhet at likevektsrenta er lavere enn i en risikonøytral økonomi.»
- **Typiske feil:** Feilplassere forventningsoperatoren; glemme at $a_2=0$ i null nettotilbud (så $c=w$); ikke bruke Jensen til rentekonklusjonen; feil vekting med sannsynlighetene i Lagrange; forveksle rente og leiepris.
- **Quiz: 22 · Flashcards: 22**

**Prøve-kvote Del 3:** 4 prøver (3.A lånebeskrankning: når binder den, konsumrespons, 40 min; 3.B stokastisk Euler + forventningsoperator + forsiktighetssparing, 40 min, sjanger J-fundament; 3.C RBC to-tilstand: tilstandsvis Lagrange + null nettotilbud, 50 min, sjanger J; 3.D Jensen → likevektsrente under risikonøytral, med andregradsligning-variant, 55 min, sjanger J, A-differensiator).

---

### Del 4 — OLG og Ricardiansk ekvivalens *(prioritet: KUNNE)*

#### Kapittel 4.1: OLG-modellen

- **id:** `econ4310-4-1` · **number:** 4.1 · **estimatedMinutes:** 65 · **prerequisites:** `econ4310-2-1`
- **kapitteltype:** teori
- **description:** Overlappende generasjoner: hvordan de unges sparing blir morgendagens kapital — og hvorfor modellen kan ha flere steady states.
- **Forkunnskaper-lenker:** ingen internt utover Del 2.
- **Eksamensbelegg:** Sjanger G, **3/8 = 38 %** (H2018 B, H2019 A, H2020 B). Prioritet: **kunne**.
- **Innholdskontrakt (Symbol- og formelliste, tospråklig):** MÅ KUNNE AKTIVT: to-periode OLG (overlapping generations) med log-nytte $\log(c_{1t})+\beta\log(c_{2t+1})$; den unge sparer $s=[\beta/(1+\beta)]w_t$ (utled fra Euler + budsjett); **kapitalmarkedslikevekt** $N_t s_t=K_{t+1}$ ⇒ per-capita bevegelseslov $(1+n)k_{t+1}=[\beta/(1+\beta)]w_t$ med $w=(1-\alpha)k_t^\alpha$ (grenseproduktlønn); altså $k_{t+1}=[\beta(1-\alpha)/((1+\beta)(1+n))]k_t^\alpha$. **To steady states:** $k=0$ og positiv $k^\ast=[\beta(1-\alpha)/((1+\beta)(1+n))]^{1/(1-\alpha)}$; drøft stabilitet. Skatteanalyse: proporsjonal lønnsskatt senker sparing og $k^\ast$; skatt tilbakeført som lump-sum transfer kan nøytralisere (disponibel inntekt driver sparingen).
- **Oppgavesjangre:** G. Mønstereksempel: «Utled bevegelsesloven for kapital per ung i en OLG-modell med log-nytte, finn steady states, og vis hvordan en proporsjonal lønnsskatt påvirker langsiktig kapital.»
- **Typiske feil:** Glemme befolkningsveksten $(1+n)$ i kapitalmarkedslikevekten; feil sparerate fra log-nytten; overse $k=0$-likevekten; blande generasjonenes budsjett.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 4.2: Dynasti, arv og hjørneløsning

- **id:** `econ4310-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ4310-4-1`
- **kapitteltype:** teori
- **description:** Foreldre som bryr seg om barna: løs barnets problem for verdifunksjonen, sett inn hos foreldrene — og håndter at arv ikke kan være negativ.
- **Forkunnskaper-lenker:** ingen internt utover Del 3–4 (hjørneløsning fra kap. 3.1).
- **Eksamensbelegg:** Sjanger H, H2018 B (dynasti/arv). Prioritet: **kunne**.
- **Innholdskontrakt (Symbol- og formelliste, tospråklig):** MÅ KUNNE AKTIVT: foreldre-barn-dynasti / fireperiode-husholdning med log-nytte og $r=0$ (så $\beta(1+r)=1$ ⇒ perfekt glatting). Løs **barnets delproblem først** for verdifunksjonen (value function) $V(b)$ som funksjon av mottatt arv $b$ (f.eks. $V(b)=2\log((y+b)/2)$ over to perioder), sett inn i foreldrenes problem, løs foreldrenes Lagrange ($1/c_1=1/c_2=\lambda$). **Håndter hjørneløsning eksplisitt** (bequests $\ge 0$): hvis ubeskranket optimal arv $b^\ast<0$ men $b\ge 0$ binder, sett $b=0$ og fall tilbake til den beskrankede allokeringen. Ricardiansk ekvivalens gjelder *så lenge arvemotivet er interiørt*; når $b\ge 0$ binder, endrer en skatt/transfer mellom generasjoner allokeringen. (Merk: $V(b)$ *brukes*, men ingen VFI-iterasjon — jf. forbudslista.)
- **Oppgavesjangre:** H. Mønstereksempel: «Løs barnets problem for verdifunksjonen $V(b)$, sett den inn i foreldrenes problem, og forklar hva som skjer med allokeringen når arv ikke kan være negativ.»
- **Typiske feil:** Ikke løse barnets problem først; bruke interiør-FOC når $b=0$ binder; tro at Ricardo alltid holder (glemme hjørnet); regnefeil i den innsatte $V(b)$.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 4.3: Ricardiansk ekvivalens

- **id:** `econ4310-4-3` · **number:** 4.3 · **estimatedMinutes:** 55 · **prerequisites:** `econ4310-4-2`
- **kapitteltype:** teori
- **description:** Rangér finansieringsmåtene: skatt nå, gjeld med tilbakebetaling, eller evig gjeld — og finn nøyaktig når husholdningen er indifferent.
- **Forkunnskaper-lenker:** ingen internt utover Del 4 (lånebeskrankning fra kap. 3.1).
- **Eksamensbelegg:** Sjanger I, **3/8 = 38 %** (H2018 A1, H2019 A, H2020 B). Prioritet: **kunne**.
- **Innholdskontrakt (Symbol- og formelliste, tospråklig):** MÅ KUNNE AKTIVT: husholdning rangerer statens finansiering av en engangsutgift: (a) skatt nå, (b) gjeld tilbakebetalt neste periode, (c) evig gjeld (kun rentebetaling). Metode: **regn nåverdien (PDV) av skattebyrden** per individ. Med **fri lån/sparing og lik PDV** er husholdningen **indifferent mellom (a) og (b)** (ekte **Ricardiansk ekvivalens**, Ricardian equivalence); foretrekker (c) fordi byrden veltes på fremtidige generasjoner (endelig levetid). **Bindende lånebeskrankning bryter ekvivalensen:** da foretrekkes (b) framfor (a) (utsatt skatt frigjør likviditet nå). Evig levetid + fri lån ⇒ indifferent mellom alle tre. Neste generasjon rangerer motsatt. Koble til kap. 3.1 (beskrankning) og 4.2 (arvemotiv holder Ricardo interiørt).
- **Oppgavesjangre:** I. Mønstereksempel: «Staten kan finansiere en engangsutgift med skatt nå, gjeld tilbakebetalt neste periode, eller evig gjeld. Ranger alternativene for en husholdning med endelig levetid, med og uten lånebeskrankning.»
- **Typiske feil:** Ikke regne PDV av skattebyrden; påstå indifferens også under bindende lånebeskrankning; glemme at endelig levetid gjør (c) attraktiv; overse at neste generasjon rangerer motsatt.
- **Quiz: 20 · Flashcards: 22**

**Prøve-kvote Del 4:** 4 prøver (4.A OLG bevegelseslov + steady states, 45 min, sjanger G; 4.B OLG med lønnsskatt/transfer, 40 min, sjanger G; 4.C dynasti/arv med verdifunksjon + hjørneløsning, 45 min, sjanger H; 4.D Ricardiansk ekvivalens: PDV-rangering med og uten lånebeskrankning, 45 min, sjanger I).

---

### Del 5 — Vekst I: Solow-modellen og golden rule *(prioritet: PERFEKT — KJERNE 2, hele Part C)*

#### Kapittel 5.1: Solow: oppsett og bevegelseslov

- **id:** `econ4310-5-1` · **number:** 5.1 · **estimatedMinutes:** 60 · **prerequisites:** `econ4310-1-2`
- **kapitteltype:** teori
- **description:** Fra kapitalakkumulasjon og en sparerate til bevegelsesloven for kapital per arbeider — vekstblokkens fundament.
- **Forkunnskaper-lenker:** ingen internt (bygger på intertemporalt oppsett, kap. 1.2). *Bygger-agent kan legge til verifisert kryssbok-lenke til en live grafisk Solow-intro (kun hvis kapittel-id finnes).* 
- **Eksamensbelegg:** Sjanger D, del av **5/8 = 63 %** (H2021 C, H2022 B, H2023 C, H2024 C, H2025 C), hele Part C. Prioritet: **perfekt**.
- **Innholdskontrakt (Symbol- og formelliste, tospråklig):** MÅ KUNNE AKTIVT: kapitalakkumulasjon $K_{t+1}=I_t+(1-\delta)K_t$, $I_t=sY_t$, $Y_t=F(K_t,L_t)$ med konstant skalaavkastning (constant returns to scale) ⇒ $K_{t+1}=sF(K_t,L)+(1-\delta)K_t$. **Per arbeider** (per worker, $y=Y/L$, $k=K/L$), med befolkningsvekst $n$: $k_{t+1}=\frac{1}{1+n}[sf(k_t)+(1-\delta)k_t]$; Cobb-Douglas $f(k)=k^\alpha$. Tolk hvert ledd (spart/investert minus utvanning fra $n$ og slit fra $\delta$). $f'(k)>0$, $f''(k)<0$ begrunnet fra CRS. Skill totalstørrelser (vokser med $n$) fra per arbeider (konstant i steady state).
- **Oppgavesjangre:** D. Mønstereksempel: «Utled bevegelsesloven for kapital per arbeider i Solow-modellen med befolkningsvekst, og tolk hvert ledd økonomisk.»
- **Typiske feil:** Blande totalstørrelser og per arbeider allerede i oppsettet; glemme $(1-\delta)$-leddet; feil per-arbeider-omskriving med $n$; postulere $f''<0$ uten begrunnelse.
- **Quiz: 24 · Flashcards: 24**

#### Kapittel 5.2: Steady state, K/Y-ratio og faktorpriser

- **id:** `econ4310-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** `econ4310-5-1`
- **kapitteltype:** teori
- **description:** Likevektstilstanden, det berømte forholdet $K/Y=s/(n+g+\delta)$, og hvordan lønn og rente faller ut av grenseproduktene.
- **Forkunnskaper-lenker:** ingen internt utover kap. 5.1.
- **Eksamensbelegg:** Sjanger D, kjernen i Part C (5/8). Prioritet: **perfekt**.
- **Innholdskontrakt (Symbol- og formelliste, tospråblig):** MÅ KUNNE AKTIVT: steady state $k^\ast$ der $sf(k^\ast)=(n+\delta)k^\ast$ (eller $(n+g+\delta)$ med teknologi); **$K_{ss}/Y_{ss}=s/\delta$** (uten vekst) / $s/(n+g+\delta)$ (med vekst); Cobb-Douglas $k^\ast=(s/(n+g+\delta))^{1/(1-\alpha)}$, $y^\ast=(s/(n+g+\delta))^{\alpha/(1-\alpha)}$. **Faktorpriser** fra grenseprodukter: lønn $w=\partial Y/\partial L=(1-\alpha)k^\alpha$, leiepris på kapital $R=\partial Y/\partial K=\alpha k^{\alpha-1}$, husholdningens rente $r=R-\delta$. **Presisering (typisk feil):** i steady state er *per arbeider*-størrelsene konstante, mens totalt $K,Y$ vokser med $n$ (per arbeider med $g$) — å påstå at $K$ og $Y$ står stille er feil.
- **Oppgavesjangre:** D. Mønstereksempel: «Finn steady-state-kapitalen per arbeider, vis at det langsiktige kapital-produktforholdet er $s/(n+g+\delta)$, og utled lønn og rente fra grenseproduktene.»
- **Typiske feil:** Påstå at $K$ og $Y$ er konstante i steady state (positivt feil); forveksle leiepris $R$ og rente $r=R-\delta$; feil eksponent i Cobb-Douglas-formlene; glemme $n+g+\delta$ i nevneren.
- **Quiz: 24 · Flashcards: 24**

#### Kapittel 5.3: Komparativ statikk og golden rule

- **id:** `econ4310-5-3` · **number:** 5.3 · **estimatedMinutes:** 65 · **prerequisites:** `econ4310-5-2`
- **kapitteltype:** teori
- **description:** Hva en varig høyere sparerate gjør — og A-differensiatoren: hvorfor steady-state-konsumet kan FALLE av mer sparing, med golden rule som referanse.
- **Forkunnskaper-lenker:** ingen internt utover Del 5.
- **Eksamensbelegg:** Sjanger E, $\partial C_{ss}/\partial s$-fortegnet er eksplisitt A-differensiator (H2023 C5); golden rule 3/8. Prioritet: **perfekt**.
- **Innholdskontrakt (Symbol- og formelliste, tospråklig):** MÅ KUNNE AKTIVT: $\partial Y_{ss}/\partial s>0$ vises ved derivasjon ($\frac{\alpha}{1-\alpha}(s/(n+g+\delta))^{\alpha/(1-\alpha)}\cdot\frac{1}{s}>0$). Men $\partial C_{ss}/\partial s$ der $C_{ss}=(1-s)Y_{ss}$ kan **skifte fortegn** — man kan spare for mye. **Golden rule** (golden-rule savings rate): maksimér $(1-s)f(k^\ast)$ ⇒ betingelsen $f'(k^\ast)=n+g+\delta$; Cobb-Douglas ⇒ $s_{GR}=\alpha$ (spareraten = kapitalens inntektsandel). Grafisk/økonomisk tolkning: konsum = avstand mellom $f(k)$ og strålen, størst der tangenten er parallell med strålen. **Høy inntekt ≠ høyt forbruk.** Katastrofe/kapitalødeleggelse: output faller først, vokser så raskere, konvergerer tilbake til samme steady state; $w$ faller så stiger, $r$ hopper opp så synker.
- **Oppgavesjangre:** E. Mønstereksempel: «Spareraten øker varig. Vis at steady-state-produksjonen alltid stiger, men at steady-state-konsumet ikke nødvendigvis gjør det. Utled golden rule-betingelsen og forklar sammenhengen.»
- **Typiske feil:** Regne $\partial C_{ss}/\partial s>0$ mekanisk uten golden rule-poenget; forveksle maksimal produksjon med maksimalt konsum; oppgi $s_{GR}=\alpha$ uten utledning/tolkning; tro at økonomien selv beveger seg mot golden rule.
- **Quiz: 24 · Flashcards: 24**

#### Kapittel 5.4: Effektive arbeidere og konvergens

- **id:** `econ4310-5-4` · **number:** 5.4 · **estimatedMinutes:** 55 · **prerequisites:** `econ4310-5-3`
- **kapitteltype:** teori
- **description:** Teknologivekst som eneste kilde til varig vekst per arbeider — og hvorfor fattige land vokser raskere (konvergens).
- **Forkunnskaper-lenker:** ingen internt utover Del 5.
- **Eksamensbelegg:** Effektive arbeidere **2/8 = 25 %** (H2021 C, H2022 B); konvergens implisitt i alle Solow-svar. Prioritet: **perfekt** (del av Solow-komplekset).
- **Innholdskontrakt (Symbol- og formelliste, tospråklig):** MÅ KUNNE AKTIVT: arbeidskraft i **effektivitetsenheter** (effective labor) som vokser med $n+g$; bevegelseslov $k_{t+1}=\frac{1}{(1+n)(1+g)}[sf(k_t)+(1-\delta)k_t]$ med $k$ = kapital per effektivitetsenhet, nevner $\approx(n+g+\delta)$; i steady state er per effektivitetsenhet-størrelsene konstante, mens **produksjon og konsum per arbeider vokser med $g$** og totalt med $n+g$. **Konvergens** (convergence, med $\delta=1$, Cobb-Douglas): $(y_{t+1}-y_t)/y_t=(s/(1+n))\alpha y_t^{\alpha-1}-1$ — vekstraten avtar med nivået, så land under steady state vokser raskere (betinget konvergens).
- **Oppgavesjangre:** D-utvidelse. Mønstereksempel: «Innfør teknologisk fremgang med rate $g$ i Solow-modellen. Vis at produksjon per arbeider vokser med $g$ i steady state, og forklar hvorfor land under sitt steady state vokser raskere.»
- **Typiske feil:** Tro at per arbeider-vekst med $g$ er uforenlig med steady state; blande per arbeider og per effektivitetsenhet; glemme $g$ i nevneren; tolke lavere $k^\ast$ per effektivitetsenhet som lavere velstand.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 5.5: Drill: Solow fra a til å

- **id:** `econ4310-5-5` · **number:** 5.5 · **estimatedMinutes:** 90 · **prerequisites:** `econ4310-5-4`
- **kapitteltype:** drill (DNA-regnefag drillformat)
- **description:** Hele Part C-sjangeren som algoritme: oppsett → steady state → $K/Y$ → faktorpriser → komparativ statikk → golden rule → konvergens.
- **Forkunnskaper-lenker:** ingen internt utover Del 5.
- **Eksamensbelegg:** Dekker sjanger D + E samlet — 63 %-kjernen, hele Part C. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift:** 1) skriv kapitalakkumulasjon + $I=sY$ + produktfunksjon; 2) per arbeider/effektivitetsenhet, tolk leddene; 3) steady state $k^\ast$; 4) $K/Y=s/(n+g+\delta)$ + Cobb-Douglas-formler; 5) faktorpriser fra grenseprodukter, $r=R-\delta$; 6) etterspurt komparativ statikk ($s$/$n$/$\delta$/$g$) med fortegn og tolkning; 7) golden rule / $\partial C_{ss}/\partial s$-fortegnet der det etterspørres; 8) konvergensargument. Gjennomregnet eksamenscase med sensor-margnotater (hvor delpoengene faller, «K og Y konstante»-fella, mekanisk $\partial C_{ss}/\partial s$-fella). **10–15 oppgaver** som roterer katalogen på eksamensnivå.
- **Oppgavesjangre:** D + E. Mønstereksempel (full Part C-kjede): «(1) Utled Solow-bevegelsesloven med teknologivekst. (2) Finn steady state og $K/Y$. (3) Utled lønn og rente. (4) Vis effekten av høyere sparerate på produksjon og konsum, og knytt til golden rule.»
- **Typiske feil:** Hele katalogen fra 5.1–5.4; drill-spesifikt: hoppe til steady state uten oppsett; møte golden rule-halen uforberedt; signere $\partial C_{ss}/\partial s$ mekanisk.
- **Quiz: 20 · Flashcards: 12**

**Prøve-kvote Del 5:** 4 prøver (5.A oppsett + bevegelseslov + steady state, 40 min, sjanger D; 5.B $K/Y$-ratio + faktorpriser, 40 min, sjanger D; 5.C komparativ statikk + golden rule med $\partial C_{ss}/\partial s$, 50 min, sjanger E; 5.D full Part C-kjede med teknologivekst og konvergens, 55 min, sjanger D–E).

---

### Del 6 — Vekst II: Ramsey optimal vekst *(prioritet: KUNNE — tung returkandidat)*

#### Kapittel 6.1: Ramsey: Euler, ressursbeskrankning og transversalitet

- **id:** `econ4310-6-1` · **number:** 6.1 · **estimatedMinutes:** 65 · **prerequisites:** `econ4310-2-3`
- **kapitteltype:** teori
- **description:** Vekst der spareraten VELGES optimalt: konsum-Euler for hele økonomien, ressursbeskrankningen, og betingelsen som pinner ned banen.
- **Forkunnskaper-lenker:** ingen internt utover Del 2 (Euler) og Del 5 (kapitaldynamikk).
- **Eksamensbelegg:** Sjanger F, **1/8 = 13 %** (H2021 A), men **tyngste enkeltoppgave i arkivet (100 p)**; «garantert kunne»-stoff, tung returkandidat i nytt format. Prioritet: **kunne** (høy A-verdi når den kommer).
- **Innholdskontrakt (Symbol- og formelliste, tospråklig):** MÅ KUNNE AKTIVT: $\max\sum\beta^t u(c_t)$ (CRRA-krumning $\theta$, gjenkjennes = $\sigma$) under **ressursbeskrankning** (resource constraint) $k_{t+1}-k_t=k_t^\alpha-\delta k_t-c_t$. Sett opp Lagrange, ta FOC ⇒ **konsum-Euler** $c_{t+1}/c_t=[\beta(1+\alpha k_{t+1}^{\alpha-1}-\delta)]^{1/\theta}$ (renten er endogen: $r=f'(k)-\delta=\alpha k^{\alpha-1}-\delta$). **Transversalitetsbetingelsen** (transversality condition) $\lim_{t\to\infty}\beta^t c_t^{-\theta}k_{t+1}=0$ — erstatter no-Ponzi og pinner ned den ene stabile banen. Steady state: $\Delta c=0$ krever $1+f'(k^\ast)-\delta=1/\beta$; $\Delta k=0$ krever $c=f(k)-\delta k$.
- **Oppgavesjangre:** F. Mønstereksempel: «Utled konsum-Euler for Ramsey-modellen fra optimeringsproblemet, oppgi transversalitetsbetingelsen, og finn steady state-betingelsene for $\Delta c=0$ og $\Delta k=0$.»
- **Typiske feil:** Glemme transversalitetsbetingelsen; behandle renten som eksogen (den er $f'(k)-\delta$); feil ressursbeskrankning; forveksle Ramsey-Euler med konsum-Euler med fast $r$.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 6.2: Fasediagram, saddelbane og sjokk

- **id:** `econ4310-6-2` · **number:** 6.2 · **estimatedMinutes:** 70 · **prerequisites:** `econ4310-6-1`
- **kapitteltype:** teori
- **description:** Ramsey-fasediagrammet: de to loci, saddelbanen, og A-differensiatoren — å skille et midlertidig fra et permanent sjokk med tidsbaner for lønn og rente.
- **Forkunnskaper-lenker:** ingen internt utover kap. 6.1.
- **Eksamensbelegg:** Sjanger F, eksplisitt **figurkrevende** (H2021 A); permanent vs. midlertidig $\delta$-sjokk er eksplisitt A-differensiator (analysen §4). Prioritet: **kunne**.
- **Innholdskontrakt (Symbol- og formelliste, tospråklig):** MÅ KUNNE TEGNES OG FORKLARES AKTIVT: **fasediagram** (phase diagram) i $(k,c)$: **$\Delta c=0$-loci** vertikal i $k^\ast$ (der $f'(k)=\delta+1/\beta-1$); **$\Delta k=0$-loci** pukkelkurve $c=f(k)-\delta k$; steady state E i skjæringen; bevegelsesretninger i alle fire kvadranter; **saddelbanen** (saddle path) som eneste konvergerende bane. Begrunn hvorfor konsum utenfor saddelbanen ikke er likevekt (bryter transversalitet / treffer $k=0$ eller $c=0$). **Komparativ dynamikk:** skill **midlertidig** $\delta$-sjokk (1 eller $T$ perioder — $c$ hopper, følger dynamikken, vender tilbake til opprinnelig saddelbane) fra **permanent** sjokk ($c$ hopper til ny saddelbane mot ny steady state); skisser tidsbaner for lønn $w$ og rente $r$.
- **Oppgavesjangre:** F. Mønstereksempel: «Tegn fasediagrammet for Ramsey-modellen, marker steady state og saddelbanen, og analyser henholdsvis et midlertidig og et permanent sjokk i depresieringsraten — med tidsbaner for lønn og rente.»
- **Typiske feil:** Feil retning på pilene i kvadrantene; blande midlertidig og permanent sjokk; glemme saddelbanens rolle (og hvorfor den er unik); utelate tidsbanene for $w$ og $r$; tegne $\Delta k=0$-loci feil.
- **Quiz: 20 · Flashcards: 20**

**Prøve-kvote Del 6:** 4 prøver (6.A utled Ramsey-Euler + transversalitet, 45 min, sjanger F; 6.B tegn og forklar fasediagrammet med saddelbane, 45 min, sjanger F; 6.C midlertidig $\delta$-sjokk med tidsbaner, 50 min, sjanger F, A-differensiator; 6.D permanent sjokk vs. midlertidig — kontrast, 50 min, sjanger F).

---

### Del 7 — Skatt, arbeidstilbud og sosial sikkerhet *(prioritet: KJENNE)*

#### Kapittel 7.1: Skatt og arbeidstilbud

- **id:** `econ4310-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ4310-1-1`
- **kapitteltype:** teori
- **description:** Arbeidstilbud fra $\max u(c,l)$ — og hvorfor svaret på «hva gjør skatt med arbeidstilbudet» avhenger helt av nyttefunksjonens form.
- **Forkunnskaper-lenker:** ingen internt utover Del 1.
- **Eksamensbelegg:** Sjanger K, **2/8 = 25 %** (H2019 C, H2020 A). Prioritet: **kjenne** (lav dekningskostnad).
- **Innholdskontrakt (Symbol- og formelliste, tospråklig):** MÅ KUNNE AKTIVT: $\max u(c,l)$ under $c=(1-\tau)l+Tr$ ($l$ = arbeidstilbud/labor supply, $\tau$ = skattesats, $Tr$ = transfer). FOC ⇒ **intratemporal betingelse**: grensesubstitusjonsraten mellom konsum og fritid = nettolønn $(1-\tau)$. **Formen avgjør:** (i) log-nytte i konsum $u=\log c-l^2/2$ ⇒ inntekts- og substitusjonseffekt kansellerer ⇒ arbeidstilbud **upåvirket** av $\tau$; (ii) log av hele nytten $u=\log(c-l^2/2)$ ⇒ kun substitusjonseffekt ⇒ arbeid **faller** når $\tau$ stiger. **Transfer $Tr>0$** gir positiv inntektseffekt ⇒ mindre arbeid enn når skatteinntektene «kastes i havet».
- **Oppgavesjangre:** K. Mønstereksempel: «Utled optimalt arbeidstilbud fra $\max u(c,l)$, og forklar med inntekts- og substitusjonseffekt hvorfor virkningen av en skatteøkning avhenger av nyttefunksjonens form.»
- **Typiske feil:** Signere skatteeffekten uten å spesifisere nyttefunksjonen; forveksle de to log-formene; glemme transferens inntektseffekt; ikke skille inntekts- fra substitusjonseffekt.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 7.2: Sosial sikkerhet og pensjon

- **id:** `econ4310-7-2` · **number:** 7.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ4310-2-1`
- **kapitteltype:** teori
- **description:** Når lønner et pay-as-you-go-trygdesystem seg framfor privat sparing? Betingelsen faller ut av å sammenligne to livstidsbudsjett.
- **Forkunnskaper-lenker:** ingen internt utover Del 2.
- **Eksamensbelegg:** Sjanger L, **2/8 = 25 %** (H2019 D, H2021 B). Prioritet: **kjenne**.
- **Innholdskontrakt (Symbol- og formelliste, tospråklig):** MÅ KUNNE AKTIVT: to-periode med **overlevelsessannsynlighet** (survival probability) $p$; nytte f.eks. $2\sqrt{c_1}+p\cdot 2\sqrt{c_2}$ (H2021) eller $\log c_1+p\log c_2$ (H2019). Løs $c_1(r,p),c_2(r,p),s(r,p)$. Innfør **PAYG-trygd** (pay-as-you-go) via statens budsjett $pb=\tau y(1+n)$ ⇒ $b=\tau y(1+n)/p$; oppdater livstidsbudsjettet og løs på nytt. **Nøkkelresultat:** trygd foretrekkes **hviss $(1+n)(1+g)/p>1+r$** (H2019) / **$p(1+r)<1$** (H2021) — sammenlign de to livstidsbudsjettbetingelsene. Lav rente og/eller lav overlevelse favoriserer trygd; høy rente ⇒ privat sparing dominerer.
- **Oppgavesjangre:** L. Mønstereksempel: «Innfør et PAYG-trygdesystem i en to-periode-modell med overlevelsessannsynlighet, og gi betingelsen for at husholdningen foretrekker trygd framfor privat sparing.»
- **Typiske feil:** Glemme populasjonsveksten $(1+n)$ i statens PAYG-budsjett; sammenligne feil livstidsbudsjett; overse overlevelsessannsynligheten i pensjonsleddet; signere feil på trygde-betingelsen.
- **Quiz: 18 · Flashcards: 18**

**Prøve-kvote Del 7:** 4 prøver (7.A arbeidstilbud med log-nytte i konsum (kansellering), 40 min, sjanger K; 7.B arbeidstilbud med log av hele nytten + transfer, 40 min, sjanger K; 7.C PAYG-trygd: utled $b$ og betingelsen, 45 min, sjanger L; 7.D trygd vs. sparing under levealdersusikkerhet, 45 min, sjanger L).

---

### Del 8 — Investeringsteori, firmaverdi og Piketty *(prioritet: KJENNE — nye H2025-sjangre)*

#### Kapittel 8.1: Investeringsteori og firmaverdi

- **id:** `econ4310-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ4310-1-2`
- **kapitteltype:** teori
- **description:** Firmaets verdi som neddiskontert kontantstrøm, og hvorfor den optimale kapitalbeholdningen er konstant og lik $(\alpha/(r+\delta))^{1/(1-\alpha)}$.
- **Forkunnskaper-lenker:** ingen internt utover Del 1.
- **Eksamensbelegg:** Sjanger M, **1/8 = 13 %** (H2025 B), ny sjanger, lav dekningskostnad, sannsynlig retur. Prioritet: **kjenne**.
- **Innholdskontrakt (Symbol- og formelliste, tospråklig):** MÅ KUNNE AKTIVT: prosjektverdi = **neddiskontert kontantstrøm** (present value of the dividend stream) $V_0=\sum_t (1+r)^{-t}d_t$; konstant utbytte $d$ ⇒ geometrisk rekke $V=d/r$. Firmaets dynamiske problem $\max\sum(1+r)^{-t}d_t$ s.t. $d_t=K_t^\alpha-I_t$, $K_{t+1}=(1-\delta)K_t+I_t$; Lagrange der multiplikatorene blir 1 ($\lambda_t=q_t=1$, Tobins $q$) ⇒ **konstant optimal kapital** $K^\ast=(\alpha/(r+\delta))^{1/(1-\alpha)}$. Intuisjon: høyere $\delta$ ⇒ lavere $K$ (kapitalen kaster av seg kortere); lavere $r$ ⇒ høyere $K$ *og* direkte høyere nåverdi av kontantstrømmen (to kanaler).
- **Oppgavesjangre:** M. Mønstereksempel: «Vis at firmaets optimale kapitalbeholdning er konstant og lik $(\alpha/(r+\delta))^{1/(1-\alpha)}$, og forklar gjennom hvilke kanaler en rentenedgang øker firmaverdien.»
- **Typiske feil:** Feil ved geometrisk rekke ($V=d/r$); ikke innse at $q_t=1$; glemme den doble rentekanalen; forveksle $r$ og $r+\delta$ i $K^\ast$.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 8.2: Piketty vs. Solow

- **id:** `econ4310-8-2` · **number:** 8.2 · **estimatedMinutes:** 50 · **prerequisites:** `econ4310-5-2`
- **kapitteltype:** teori
- **description:** Pikettys «andre lov» $K/Y=s/g$ mot Solows $s/(g+\delta)$ — og hvorfor de gir vidt forskjellige prognoser når vekstraten faller.
- **Forkunnskaper-lenker:** ingen internt utover Del 5 (Solow steady state).
- **Eksamensbelegg:** Sjanger N, **1/8 = 13 %** (H2025 C), ny sjanger. Prioritet: **kjenne**.
- **Innholdskontrakt (Symbol- og formelliste, tospråklig):** MÅ KUNNE AKTIVT: utled **Pikettys andre lov** $K/Y=s/g$ fra $K_{t+1}=sY_t+K_t$ (netto, ingen $\delta$) langs balansert vekstbane; kontrast med **Solows** $K/Y=s/(g+\delta)$ fra $K_{t+1}=sY_t+(1-\delta)K_t$. Poeng: **depresiering $\delta$ i nevneren demper følsomheten** — når $g$ halveres ($0{,}02\to0{,}01$) *dobler* Pikettys ratio seg, mens Solows med $\delta=0{,}1$ bare stiger $\approx 9\%$ ($0{,}12/0{,}11$). Forklar **netto vs. brutto** inntekt/sparerate: $\hat{Y}=Y-\delta K$, $\hat{s}=(sY-\delta K)/\hat{Y}$, og Solow på netto form $K_{t+1}=\hat{s}_t\hat{Y}_t+K_t$.
- **Oppgavesjangre:** N. Mønstereksempel: «Utled Pikettys andre lov og Solows kapital-produktforhold, og forklar hvorfor de gir svært ulike prognoser når vekstraten faller til det halve.»
- **Typiske feil:** Blande netto og brutto sparerate; glemme $\delta$ i Solows nevner; ikke vise tallfølsomheten når $g$ faller; forveksle de to bevegelseslovene.
- **Quiz: 16 · Flashcards: 16**

**Prøve-kvote Del 8:** 4 prøver (8.A firmaverdi som geometrisk rekke $V=d/r$, 35 min, sjanger M; 8.B optimal $K^\ast$ med Tobins $q=1$ + rentekanaler, 45 min, sjanger M; 8.C Piketty $s/g$ vs. Solow $s/(g+\delta)$, utled begge, 40 min, sjanger N; 8.D netto vs. brutto sparerate + tallfølsomhet ved fall i $g$, 40 min, sjanger N).

---

### Del 9 — Metodologi-essayet (Part A) *(prioritet: PERFEKT — obligatorisk 1/3; drøftingshybrid)*

> **Merk:** Del 9-kapitlene følger **DNA-droftings temakapittel-DNA** (begreper med
> pensumforankring → posisjoner/spenninger → anvendelse → typiske feil →
> `collapsible` Pensumkart som flashcard-råstoff), ikke regnefag-teori-DNA. Ingen
> Lagrange/FOC her. Pensumforankringen skal være **ekte** (forfattere/verk fra
> analysens §6 kildeliste) — aldri oppdiktede referanser; aldri sitater i lengde.

#### Kapittel 9.1: Friedman-kriteriet og Lucas-kritikken

- **id:** `econ4310-9-1` · **number:** 9.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ4310-0-3`
- **kapitteltype:** teori (drøftingsformat)
- **description:** De to metodologiske hjørnesteinene essayet bygger på: Friedmans prediksjonskriterium og Lucas-kritikken av politikkevaluering.
- **Forkunnskaper-lenker:** ingen internt utover kap. 0.3 (essayhåndverket).
- **Eksamensbelegg:** Sjanger O, kjernen i **H2023 A og H2024 A** (Friedman/Lucas-varianten). Prioritet: **perfekt**.
- **Begrepskontrakt (med pensumforankring, tospråklig):** SKAL DEFINERES OG FORANKRES: **Friedman (1953), *The Methodology of Positive Economics*** — en modell vurderes på **prediksjonskraft** (predictive power) for fenomenene den skal forklare; velg den enkleste blant modeller som forklarer dataene; en modell kan **ikke** forkastes fordi antakelsene er «urealistiske». **Lucas (1976), *Econometric Policy Evaluation: A Critique*** — **Lucas-kritikken**: relasjoner som gir god korttidsprognose er *ikke* egnet for politikkevaluering, fordi atferdsrelasjonene endrer seg med politikken (agentenes forventninger reagerer); gode politikkmodeller må ha agenter som *reagerer* på politikkendringen (rasjonelle forventninger, dype parametre).
- **Drøftingsakser:** prediksjon vs. realisme i antakelser; korttidsprognose vs. politikkevaluering; hvorfor Lucas-kritikken motiverte mikrofunderte (DSGE-)modeller.
- **Case-forslag:** anvend begge kriterier på en enkel konsumfunksjon $C=c_0+c_1Y$ (god prognose, men bryter Lucas) vs. en mikrofundert Euler-basert konsummodell.
- **Typiske feil:** Gjengi Friedman/Lucas uten å anvende dem; forveksle de to kriteriene; tro at Lucas «motbeviser» all prognose; glemme pensumforankringen.
- **Quiz: 20 · Flashcards: 26** (begrep↔forfatter + norsk↔engelsk-par)

#### Kapittel 9.2: DSGE, NEMO og SAM

- **id:** `econ4310-9-2` · **number:** 9.2 · **estimatedMinutes:** 50 · **prerequisites:** `econ4310-9-1`
- **kapitteltype:** teori (drøftingsformat)
- **description:** De konkrete modellene essayet skal anvende kriteriene på: Norges Banks DSGE-modell NEMO og prognoserammeverket SAM.
- **Forkunnskaper-lenker:** ingen internt utover kap. 9.1.
- **Eksamensbelegg:** Sjanger O, anvendelsesdelen (kriterium 3) i H2023 A / H2024 A. Prioritet: **perfekt**.
- **Begrepskontrakt (med pensumforankring, tospråklig):** SKAL DEFINERES OG FORANKRES: **DSGE** (dynamic stochastic general equilibrium) — mikrofunderte modeller med optimerende agenter og rasjonelle forventninger, bygget for å tåle Lucas-kritikken. **NEMO** (Norges Banks mellomstore DSGE-modell; **Gerdrup & Nicolaisen 2011, *On the Purpose of Models — The Norges Bank Experience***) — hva den er, og at den *søker* å oppfylle Lucas-kravet ved dype parametre. **SAM** (System for Averaging Models) — et **prognose**-rammeverk som veier sammen flere modeller for beste korttidsprognose; skårer høyt på Friedmans prediksjonskriterium, men er *ikke* strukturelt/politikkinvariant (mindre egnet til politikkevaluering — Lucas-poenget). Kontrasten NEMO (struktur/politikk) vs. SAM (prognose) er selve essaykjernen.
- **Drøftingsakser:** struktur vs. prognose; hvilket kriterium hver modell tjener; hvorfor en sentralbank trenger begge.
- **Case-forslag:** «Skal Norges Bank bruke NEMO eller SAM til (a) en renteprognose neste kvartal, (b) å vurdere en varig regelendring?»
- **Typiske feil:** Beskrive NEMO/SAM uten å koble til Friedman/Lucas (kriterium 3 svikter); forveksle de to modellenes formål; oppdikte tekniske detaljer i stedet for det metodologiske poenget.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 9.3: Representativ agent, HANK og empirisk MPC

- **id:** `econ4310-9-3` · **number:** 9.3 · **estimatedMinutes:** 50 · **prerequisites:** `econ4310-9-1`
- **kapitteltype:** teori (drøftingsformat)
- **description:** Den andre essayvarianten (H2025): hvorfor representativ-agent-konsum «ikke virker» etter Solows kriterium, og om HANK gjør det bedre.
- **Forkunnskaper-lenker:** ingen internt utover kap. 9.1 (og konsumkjernen, Del 2).
- **Eksamensbelegg:** Sjanger O, **H2025 A** (Solow-1997/HANK-varianten). Prioritet: **perfekt** (boka må dekke begge essayvarianter).
- **Begrepskontrakt (med pensumforankring, tospråklig):** SKAL DEFINERES OG FORANKRES: **Solow (1997), *Is There a Core of Usable Macroeconomics We Should All Believe In?*** — det «opportunistiske»/pragmatiske kriteriet for brukbar makro. **Representativ-agent-modellen** for konsum «virker» ikke: den matcher ikke empirisk **marginal konsumtilbøyelighet** (marginal propensity to consume, **MPC**) — PIH/permanentinntekt gir for lav MPC av midlertidige sjokk mot det data viser. **HANK** (heterogeneous-agent New Keynesian) — heterogene agenter med lånebeskrankninger kan matche mikro-MPC (mange «hand-to-mouth»-husholdninger), men hviler fortsatt på rasjonelle forventninger. **Empirisk MPC-arbeid** som rolle for moderne kvantitativ makro.
- **Drøftingsakser:** representativ agent vs. heterogene agenter; hvorfor lånebeskrankning (kap. 3.1) hever MPC; om HANK tilfredsstiller Solows kriterium; grensene ved rasjonelle forventninger.
- **Case-forslag:** «Forklar med lånebeskrankning-kapitlet hvorfor en beskranket husholdning har MPC nær 1, og hvorfor HANK dermed matcher data bedre enn representativ agent.»
- **Typiske feil:** Gjengi HANK uten å knytte til MPC-empiri; blande Solow (1997) med Solow-vekstmodellen; glemme at representativ-agent-svakheten er *empirisk* MPC; ikke referere pensum.
- **Quiz: 18 · Flashcards: 24**

**Prøve-kvote Del 9:** 4 prøver (9.A Friedman + Lucas: redegjør og kontrastér, essay-momentliste, 40 min, sjanger O; 9.B anvend kriteriene på NEMO vs. SAM, 40 min, sjanger O; 9.C Solow 1997 + representativ agent-MPC-svakheten, 40 min, sjanger O; 9.D HANK vs. representativ agent — fullt disposisjonsessay mot firepunkts-sjekklista, 50 min, sjanger O). *Prøvene i Del 9 scores mot firepunkts-sjekklista (kap. 0.3), ikke regnefasit.*

---

### Del 10 — Eksamenstrening

#### Kapittel 10.1: Sjangeroversikt og utledningsdrill

- **id:** `econ4310-10-1` · **number:** 10.1 · **estimatedMinutes:** 80 · **prerequisites:** `econ4310-2-5`
- **kapitteltype:** drill (på tvers)
- **description:** Lagrange/FOC-utledningen drillet på tvers av ALLE modeller, pluss sjangeroversikten A–O som sluttrepetisjon.
- **Forkunnskaper-lenker:** ingen (gjenbruker hele boka).
- **Eksamensbelegg:** Lagrange/FOC = **100 %** av modelloppgavene; drillen samler oppsett-refleksen på tvers. Prioritet: **perfekt**.
- **Innholdskontrakt:** Katalog A–O med løsningsoppskriftene fra drillkapitlene (2.5, 5.5) i kortform + felles 7-stegsmal (kap. 0.2). **Utledningsdrill:** 10–15 «bare sett opp Lagrange og ta FOC-ene, ikke løs ferdig»-oppgaver på tvers av konsum, RBC, OLG, Ramsey, arbeidstilbud, investering — trener det poenggivende oppsettet under tidspress. Sensor-margnotater om hvor delpoengene faller.
- **Oppgavesjangre:** A + D + F + G + J + K + M (oppsettsfasen). Mønstereksempel: «For hver av disse fem modellene: skriv objektivet, budsjettet/beskrankningen, Lagrange-funksjonen og FOC-ene — uten å løse ferdig.»
- **Typiske feil:** Alle oppsettsfeilene samlet: feil antall multiplikatorer, feilplassert forventningsoperator, interiør-FOC ved bindende beskrankning, glemt transversalitet.
- **Quiz: 16 · Flashcards: 10**

#### Kapittel 10.2: Øvingseksamen 1 — Euler + Solow (H2023/H2024-malen)

- **id:** `econ4310-10-2` · **number:** 10.2 · **estimatedMinutes:** 180 · **prerequisites:** `econ4310-10-1`
- **kapitteltype:** øvingseksamen (nytt format, tre likevektede deler)
- **description:** Den mest sannsynlige eksamen: Part A metodologi-essay + Part B konsum-Euler + Part C Solow, hver 1/3.
- **Forkunnskaper-lenker:** ingen (gjenbruker Del 2, 5, 9).
- **Eksamensbelegg:** Speiler H2023/H2024 (essay Friedman/Lucas + Euler + Solow). Prioritet: **perfekt** (den nesten garanterte malen).
- **Innholdskontrakt:** Komplett sett, 180 min, tre likevektede deler. **Part A:** metodologi-essay (Friedman/Lucas + NEMO/SAM), ≤750 ord. **Part B:** konsum-Euler-kjede (utled Euler → konsumfunksjon → rentens fortegn). **Part C:** Solow-kjede (bevegelseslov → steady state → $K/Y$ → golden rule). Løsningsforslag i eget `collapsible` per del: essay som A-momentliste mot firepunkts-sjekklista; modelldeler som **full Lagrange/FOC-utledning**, skrevet slik sensor vil se dem, med `tip`-notat om delpoeng per steg.
- **Oppgavesjangre:** O + A/B + D/E. Nyskrevne scenarioer/tall.
- **Typiske feil:** Feil tidsbudsjett (essayet sluker modelltiden); postulere Euler; «K og Y konstante»; svar uten utledning.
- **Quiz: 12 · Flashcards: 6**

#### Kapittel 10.3: Øvingseksamen 2 — investering + Piketty (H2025-malen)

- **id:** `econ4310-10-3` · **number:** 10.3 · **estimatedMinutes:** 180 · **prerequisites:** `econ4310-10-1`
- **kapitteltype:** øvingseksamen (nytt format)
- **description:** H2025-vrien: essay om representativ agent/HANK + investeringsteori + Piketty-vs-Solow.
- **Forkunnskaper-lenker:** ingen (gjenbruker Del 8, 9, 5).
- **Eksamensbelegg:** Speiler H2025 (essay Solow 1997/HANK + firmaverdi + Piketty). Prioritet: **perfekt** (dekker den andre essayvarianten + nye sjangre).
- **Innholdskontrakt:** Komplett sett, 180 min, tre likevektede deler. **Part A:** essay (representativ agent-MPC-svakheten + HANK + Solow 1997), ≤500 ord. **Part B:** investeringsteori/firmaverdi ($V=d/r$, $K^\ast$, rentekanaler). **Part C:** Piketty $s/g$ vs. Solow $s/(g+\delta)$ med tallfølsomhet. Løsningsforslag som over (essay mot sjekkliste; modelldeler full utledning + delpoeng-notat).
- **Oppgavesjangre:** O + M + N. Nyskrevne scenarioer/tall.
- **Typiske feil:** Blande Solow-1997 og Solow-vekstmodellen i essayet; feil geometrisk rekke i $V=d/r$; glemme $\delta$ i Solows nevner.
- **Quiz: 12 · Flashcards: 6**

#### Kapittel 10.4: Øvingseksamen 3 — RBC + OLG/Ramsey (tung retur / gammelt format)

- **id:** `econ4310-10-4` · **number:** 10.4 · **estimatedMinutes:** 180 · **prerequisites:** `econ4310-10-1`
- **kapitteltype:** øvingseksamen (beredskap: tunge returkandidater)
- **description:** Beredskapssettet: en essay-del + de tunge oppgavene som ikke har vært i nytt format ennå — stokastisk RBC og OLG/Ramsey.
- **Forkunnskaper-lenker:** ingen (gjenbruker Del 3, 4, 6, 9).
- **Eksamensbelegg:** Speiler den tunge enden av gammelt format (H2018 C/B, H2020 C, H2021 A) presset inn i nytt formats tredeling — analysens beredskapsprognose: RBC og Ramsey er de mest sannsynlige tunge returkandidatene. Prioritet: **kunne** (A-differensiator-trening).
- **Innholdskontrakt:** Komplett sett, 180 min. **Part A:** metodologi-essay (fritt valg av variant). **Part B:** stokastisk RBC (tilstandsvis Euler → null nettotilbud → Jensen → likevektsrente under risikonøytral). **Part C:** OLG med skatt *eller* Ramsey-fasediagram med midlertidig vs. permanent sjokk. Løsningsforslag med full utledning, Jensen-argumentet og fasediagram-beskrivelse skrevet slik sensor vil se dem; A-differensiatorene eksplisitt markert.
- **Oppgavesjangre:** O + J + (G/I eller F). Nyskrevne scenarioer/tall.
- **Typiske feil:** Forventningsoperatoren feilplassert; glemme $a_2=0$; ikke bruke Jensen til rentekonklusjonen; blande midlertidig/permanent sjokk i fasediagrammet.
- **Quiz: 12 · Flashcards: 6**

---

## 5. Øvingseksamen-oversikt

| Øvingseksamen | Speiler | Struktur (tre likevektede deler à 1/3) |
|---|---|---|
| Øvingseksamen 1 (kap. 10.2) | H2023/H2024 (mest sannsynlig) | Part A essay (Friedman/Lucas + NEMO/SAM) + Part B konsum-Euler + Part C Solow |
| Øvingseksamen 2 (kap. 10.3) | H2025 (nyeste, nye sjangre) | Part A essay (representativ agent/HANK/Solow 1997) + Part B investeringsteori + Part C Piketty vs. Solow |
| Øvingseksamen 3 (kap. 10.4) | Beredskap: tung retur | Part A essay (fritt) + Part B stokastisk RBC (Jensen) + Part C OLG/Ramsey |

Til sammen dekker de tre settene samtlige 15 sjangre (A–O) minst én gang, begge
essayvarianter, og både det nye tredelte formatet og de tunge oppgavene fra gammelt
format.

---

## 6. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (3 t, engelsk, A–F, ordbok), den absolutte
   regelen (sporbar utledning), formatskiftet H2022→H2023, den tredelte
   likevektede malen, og prognosen H2026 (fra kap. 0.1).
2. **Prioriteringskartet** — frekvens-tabellen omgjort til tre lesenivåer:
   **perfekt** (Del 1 verktøy, Del 2 konsum-Euler, Del 5 Solow, Del 9 essay),
   **kunne** (Del 3 lånebeskrankning/RBC, Del 4 OLG/Ricardo, Del 6 Ramsey),
   **kjenne** (Del 7 arbeidstilbud/trygd, Del 8 investering/Piketty).
3. **Sjangerguiden** — de 15 oppgavetypene A–O med løsningsoppskriftene fra
   drillkapitlene (0.2, 2.5, 5.5, 10.1) i kortform, inkl. 7-stegsmalen for
   modelloppgaver og firepunkts-oppskriften for essayet.
4. **Sensorreglene** — de seks metareglene (sporbar utledning er alt; poeng deles
   per steg; Euler utledes, ikke postuleres; håndter hjørneløsninger; oppgi
   tallsvar og begrunn fortegn; sjenerøs sensur på det tvetydige) + firepunkts-
   essaysjekklista + A-differensiator-lista (Jensen-rente, $\partial C_{ss}/\partial s$,
   permanent vs. midlertidig sjokk, $1/\sigma>1$).
5. **Feilkatalogen** — de ~14 typiske feilene samlet (svar uten utledning,
   postulert Euler, feilplassert forventningsoperator, interiør-FOC ved bindende
   beskrankning, signert tvetydig renteeffekt, glemt transversalitet, «K og Y
   konstante», mekanisk $\partial C_{ss}/\partial s$, glemt $(1+n)$ i PAYG, rente
   vs. leiepris, essay uten anvendelse/forankring, feil geometrisk rekke), hver
   med henvisning til kapitlet som forebygger den.
6. **Formelbiblioteket (tospråklig)** — alle relasjoner i bokas standardnotasjon på
   én side: Euler ($u'(c_t)=\beta(1+r)u'(c_{t+1})$), CRRA-konsumbane, PIH
   ($c=ra+y$), stokastisk Euler, Solow steady state og $K/Y=s/(n+g+\delta)$,
   golden rule ($s_{GR}=\alpha$), faktorpriser, OLG-bevegelseslov, Ramsey-Euler +
   transversalitet, PAYG-betingelsen, firmaverdi ($V=d/r$, $K^\ast$), Piketty
   $s/g$ — hver med norsk↔engelsk term og markering «utled aktivt» vs. «kun bruk».
7. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant):
   Del 0 → 1 → 2 (kjerne 1) → 3 → 4 → 5 (kjerne 2) → 6 → 7 → 8 → 9 (essay,
   parallelt underveis), prøver etter hver del; øvingseksamenene de tre siste
   ukene under tidspress (180 min, likevektet tidsbudsjett), i rekkefølgen
   10.2 → 10.3 → 10.4; 10.1 (utledningsdrillen) repeteres siste uka.

---

## 7. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `econ4310` med alle 35
   kapitler + 9 prøvekapitler (`econ4310-<del>-prove`, chapterNumber `<del>.P`)
   (id/number/title/description/estimatedMinutes/topics/competenceGoals/
   prerequisites/linkedChapterId), `sectionNames` fra §2-tabellen (obligatorisk —
   uten den viser bokforsiden «Seksjon N»), etter mønsteret i
   `src/lib/data/textbook-courses-hoyskole.ts` (econ1310-oppføringen).
   Navigasjon: «ECON4310 Macroeconomic Theory» under UiO i
   `src/app/trinn/hoyere/institusjoner.ts`.
2. **Del 0** (kap. 0.1–0.3) — etablerer sjangernavnene A–O, frekvenstallene,
   7-stegsmalen og firepunkts-sjekklista som resten refererer til.
3. **Del 1** (matematisk verktøy) — fundamentet 100 % av modelloppgavene bruker.
4. **Kjernedelene og resten i avhengighetsrekkefølge**: Del 2 (konsum-Euler,
   krever Del 1) → Del 3 (krever 2.1) → Del 4 (krever 2.1) → Del 5 (Solow, krever
   1.2) → Del 6 (Ramsey, krever 2.3 + 5) → Del 7 (krever 1.1/2.1) → Del 8 (krever
   1.2/5.2) → Del 9 (essay, krever 0.3; kan bygges parallelt av egen agent siden
   den er drøftingshybrid).
5. **Del 10** til slutt — øvingseksamenene gjenbruker alt; 10.1 refererer alle
   sjangre. Bygges av én agent som leser HELE skjelettet.
6. Prøvene som egne prøvekapitler `econ4310-<del>-prove` etter hver temadel
   (Del 1–9); Del 9-prøven scores mot firepunkts-sjekklista.
7. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles.

**Batching (fase 4):** én agent per hel del. Del 2 og Del 5 er store (5 kap.) —
kan deles, men gi begge agentene HELE delens kontrakter og flagg for
konsistenssjekk. Del 9 (drøftingshybrid) bør ha egen agent som også leser
DNA-drofting.md. Del 10 = én agent på hele skjelettet.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load` (generer via
      `json.dump`); skann ALLE nye filer før build (jf. `4'33"`-lærdommen);
      `npm run build` grønn.
- [ ] **LaTeX**: alle ligninger i `$...$`/`$$...$$` med `\\`-escaping i JSON;
      konsistente symboler ($\beta$, $r$, $R=r+\delta$, $\delta$, $\alpha$, $n$,
      $g$, $s$, $\sigma$, $\theta$, $c_t$, $a_t$, $k_t$, $\lambda$, $p$, $\tau$,
      $l$, $E[\cdot]$, $k^\ast$, $s_{GR}$, $C_{ss}$).
- [ ] **Notasjonskonsistens**: tekstsøk over alle econ4310-filer — **forbudte
      termer**: «IS-RR», «IS-LM», «LM-kurve», «AD-AS», «Keynes-kryss»,
      «Phillips-kurve» (som pengepolitisk relasjon), «Taylor-regel», «UIP»,
      «valutakurs», «Bellman» (som regneoppgave), «verdifunksjons-iterasjon»
      (unntatt Del 0-avsnittet + kap. 4.2 der $V(b)$ *brukes* uten VFI). CRRA
      skrives $\sigma$ i bokas fremstilling ($\theta$ kun i Ramsey-
      gjenkjenning, tydelig merket).
- [ ] **Sporbar utledning i ALLE løsninger**: hver modell-løsning viser hele
      Lagrange/FOC-kjeden (objektiv → Lagrange → FOC → eliminér $\lambda$ →
      resultat → tolkning); Euler UTLEDES aldri postuleres; grep etter «postuler»
      og verifiser at ingen løsning hopper til svaret.
- [ ] **Tospråklig begrepsbank**: hver Symbol- og formelliste og hver toppnivå-
      `definition` gir norsk + engelsk term ved første forekomst; flashcards
      inneholder norsk↔engelsk-par.
- [ ] **Kapittel-DNA (regnefag)**: hvert teori-/drillkapittel har
      Eksamensvinkel-`tip` (tallene fra dette skjelettet), Forkunnskaper-blokk
      (interne lenker; kryssbok-lenker KUN til verifiserte live-kapitler),
      Symbol- og formelliste-`collapsible` **per delkapittel** (ikke arv),
      Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå med full
      utledning), 6–12 øvinger med `solution` + `hints` og eksplisitt
      sjangerforankring, repetisjons-`collapsible`; drillkapitler har
      løsningsoppskrift + sensor-kommentert case + 8–15 oppgaver.
- [ ] **Kapittel-DNA (drøfting, Del 9 + kap. 0.3)**: begreper med reell
      pensumforankring (Friedman 1953, Lucas 1976, Gerdrup & Nicolaisen 2011,
      Solow 1997), posisjoner/spenninger, anvendelse på NEMO/SAM/HANK,
      `collapsible` Pensumkart; essayøvinger har momentliste/disposisjon (ikke
      fullt essay); INGEN oppdiktede referanser.
- [ ] **Hjørneløsninger håndteres eksplisitt** der analysen krever det (kap. 3.1
      lånebeskrankning, 4.2 arv $b\ge 0$, 3.3 null nettotilbud $a_2=0$).
- [ ] **A-differensiatorene** eksplisitt trent: Jensen → likevektsrente (3.3),
      $\partial C_{ss}/\partial s$ + golden rule (5.3), permanent vs. midlertidig
      sjokk (6.2), $1/\sigma>1$ (2.2).
- [ ] **Alt regnes for hånd**: ingen kalkulator/simulering; tyngste algebra =
      andregradsligning (3.3, 4.2); tallsvar oppgis der oppgaven gir tall.
- [ ] **Quiz-sum = 668 og flashcard-sum = 652** per kvotesammendraget §3
      (kontrollsummér mot del-summene; flashcards kun fra toppnivå
      `definition`-blokker med `title`).
- [ ] **Prøver**: 4 per temadel 1–9 (36 stk) + 3 øvingseksamener (10.2–10.4) som
      sammen dekker sjangrene A–O, begge essayvarianter og begge historiske
      formater; øvingseksamenene har tre likevektede deler (Part A essay + Part
      B/C modell) à 180 min.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne scenarioer, tall og
      formuleringer; ingen oppgavetekster/fasiter/sensorformuleringer gjengitt
      ordrett (skjelettets mønstereksempler er selv omskrivninger og skal
      varieres videre); pensumlitteratur refereres (forfatter/verk), aldri
      siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
      (200 + innholdssjekk), jf. `getChapterMeta`-lærdommen.

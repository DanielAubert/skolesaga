# Bokskjelett: SØK 3500 Samfunnsøkonomi II (Handelshøyskolen BI) — eksamensrettet lærebok

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
> `EKSAMENSANALYSE.md` (7 distinkte sett V2021–V2025, sensorveiledninger/
> modellbesvarelser for 4 av dem). Arketype: **DNA-regnefag**
> (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori/drill/øvingseksamen) er
> obligatoriske og gjentas ikke her. Alle mønstereksempler i skjelettet er
> omskrivninger med nyskrevne tallverdier; forfatteren skal variere dem videre,
> aldri kopiere inn ordrett.
>
> **Forbilder:** `econ1210/SKJELETT.md` (mikro) og `econ1310/SKJELETT.md`
> (makro). SØK 3500 ligger på **klart lavere matematisk nivå** enn begge:
> Keynes-kryss/AD-AS i stedet for Holdens IS-RR-PK, markedsteori uten
> Lagrange/Edgeworth/Slutsky. Nedjuster matematikken betydelig — alt løses med
> lineær algebra, geometri og verbal mekanisme.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `sok3500-bi` |
| Tittel | **SØK 3500 Samfunnsøkonomi II** |
| Level | `'Høyskole'` |
| Institusjon | **Handelshøyskolen BI** |
| Arketype | Regnefag (grafisk-kvantitativt modellfag med fast tredelt eksamensmal) |
| Antall kapitler | **34** (3 eksamenskart/håndverk + 26 tema/drill + 2 flervalgstrening + 3 øvingseksamener) |
| Estimert totaltid | **≈ 1 865 min ≈ 31 timer** |
| Quiz totalt | **606** (krav ≥ 600 — flervalg ER 1/3 av eksamen) |
| Flashcards totalt | **511** (krav ≥ 500) |

**Pitch (ett avsnitt):** SØK 3500 er ikke et smalt makro- eller mikroemne, men
et **bredt samfunnsøkonomisk oversiktskurs** som tester mikro og makro omtrent
likt i én og samme eksamen, på innførings-/grunnivå. Eksamen har en jernhard
**tredelt mal der hver del teller nøyaktig 1/3**: (1) ti flervalgsspørsmål med
kun ett riktig svar, ingen minuspoeng og ingen begrunnelse; (2) en obligatorisk
langsvarsoppgave; (3) en langsvarsoppgave. Denne boka er kalibrert mot nettopp
det. Den er en **fullverdig dobbeltbok**: en mikrodel (marked → overskudd/
effektivitet → monopol/prisdiskriminering → eksternaliteter/kollektive goder →
spillteori → handel) og en makrodel (nasjonalregnskap → Keynes-kryss/
multiplikator → AD-AS → penge-/finanspolitikk), bundet sammen av en egen
**flervalgs-treningsmodul** som blander domenene slik eksamen gjør. Boka driller
det sensorveiledningene belønner: **regn + tegn + forklar mekanisme**. Og den
har egne **«A-innsikt»-bokser** for de kontraintuitive poengene veiledningene
markerer med «de beste kandidatene vil også …» — de som skiller A fra C.

**Kritisk kalibrering (regimeskiftet V2025):** Emnet het SØK 3442/34421 t.o.m.
2024 og fikk ny kode **SØK 3500 fra V2025** (samme emne, samme pensum, samme
lærebok — dette dokumenteres i kap. 0.1). Ved kodebyttet skjedde to ting: (i)
**valgfriheten mellom oppgave 3 og 4 ble fjernet** — både en mikro-langsvar og
en makro-langsvar er nå obligatorisk, så studenten kan ikke lenger unngå ett
domene; (ii) **handelsteori (komparative fortrinn), spillteori (fangens
dilemma/Nash), kollektive goder og eksternaliteter ble lagt til flervalgsdelen**.
V2025-settet er den beste enkeltprediktoren for framtidige eksamener. Derfor har
denne boka egne deler for de nye temaene (Del 4–6), og trener **begge domener**.

**Kritisk sjangerregel (gjelder HELE boka) — «regn + tegn + forklar mekanisme»:**
Sensorveiledningene er fasit + fullstendige modellbesvarelser (ikke poengterskler).
De premierer tre ting i langsvar, og alle tre må være til stede i hvert eksempel
og løsningsforslag i boka: (i) **REGN** — vis utregningen i minst to eksplisitte
steg, ikke bare sluttsvar; (ii) **TEGN** — en presis **figurbeskrivelse i ord**
(akser navngitt, kurver merket, gammel likevekt A og ny likevekt B, arealer/
avstander navngitt) der oppgaven ber om illustrasjon; (iii) **FORKLAR MEKANISME**
— den verbale prosessen (multiplikatorrundene ΔG → ΔY → ΔC → ΔY …;
monopoloptimum forklart kontrafaktisk: hvorfor MR > MC og MR < MC ikke er
optimalt). Ren algebra uten forklaring, eller figur uten mekanisme, er
ufullstendig svar. **Metoderiktighet trumfer små regnefeil.**

**Kritisk flervalgsregel (gjelder HELE boka):** Flervalgsdelen er 1/3 av
karakteren, har **ingen minuspoeng**, og krever **kun ett kryss** (to kryss =
feil, presisert V2025). Strategisk konsekvens: **kryss alltid av** — et
kvalifisert gjett er gratis. Boka trenger derfor et **stort korpus
flervalgsspørsmål** (quiz-kvoten er satt til ≥ 600 av denne grunn), fordelt på
tre undertyper som trenes ulikt: **regne-flervalg** (finn P*/X*, likevekts-BNP,
produksjonsgap, manglende nasjonalregnskapsledd, ΔG for ønsket ΔY),
**definisjons-flervalg** (substitusjonseffekt, KKP, nominelt anker, deskriptivt
vs. normativt), og **«hvilket utsagn er feil»-feller** (subtile fallgruver om
elastisitet, monopol vs. FK, retning på valutakurs/konkurranseevne, real vs.
nominell).

**Kritisk notasjonsregel (gjelder HELE boka):** Notasjonen er stabil 2021–2025
og følger et **norsk innføringsapparat** (nær Steigum for makro, standard
markedsteori for mikro). Bruk nøyaktig denne. Fordi samfunnsøkonomi gjenbruker
bokstaver på tvers av mikro og makro, er **symbolene per-delkapittel** — hvert
delkapittel har sin egen «Symbol- og formelliste»-`collapsible` (jf. Leserkrav)
som løser opp betydningen lokalt. De to viktigste kollisjonene som SKAL
adresseres eksplisitt:

- **Mikro-marked:** pris $P$, mengde $X$. Lineær etterspørsel (marginal
  betalingsvillighet) på **invers form** $P = a - bX$; lineært tilbud (marginal-
  kostnad i frikonkurranse) $P = c + dX$. Likevekt: sett $a - bX = c + dX$, løs
  $X^* = \frac{a-c}{b+d}$, sett inn for $P^*$. Overskudd: **KO, PO, SO**.
  Marginalinntekt **MR** (dobbelt så bratt som lineær etterspørsel:
  $\text{MR} = a - 2bX$), marginalkostnad **MC**. Effektivitetstap/dødvektstap
  **E**. Her betyr $a, b, c, d$ **linjeparametre**.
- **Makro-Keynes:** BNP $Y$, planlagt samlet etterspørsel $\text{PAE}$;
  $Y = \text{PAE}$, $\text{PAE} = C + I + G + NX$; konsumfunksjon
  $C = C_0 + a(Y - T)$ der **$a$ = marginal konsumtilbøyelighet**, $0 < a < 1$,
  og $C_0$ = autonomt konsum. Her betyr $a$ noe helt annet enn i markedet — dette
  presiseres i symbol-lista i hvert makrokapittel. Multiplikator $\frac{1}{1-a}$;
  med skatt $\frac{1}{1-a(1-t)}$; med import $\frac{1}{1-a(1-t)+m}$.

**Skal IKKE bygges på (over nivået — aldri testet):** Holdens IS-RR-PK /
renteregel-algebra / z-sjokk; IS-LM med LM-kurve; Lagrange-optimering,
Edgeworth-boks, Slutsky-dekomponering, generell likevekt; Cournot/Stackelberg/
SPNE i spillteori (kun fangens dilemma-nivå); Coase-teoremet (nevnt i
emnebeskrivelsen, men aldri sett på eksamen — eksternaliteter kun som enkel
flervalg/verbal drøfting). Emnebeskrivelsen overrepresenterer det matematiske
nivået; de faktiske eksamenene er innføringsnivå.

---

## 2. Makrostruktur

Boka er en **dobbeltbok**: Del 0 (håndverk) → **MIKRO** (Del 1–6) → **MAKRO**
(Del 7–10) → **integrert flervalgstrening** (Del 11) → **eksamenstrening**
(Del 12). Rekkefølgen innen hvert domene følger faglig avhengighet
(DNA-regelen); frekvensen styrer *omfanget* (nivå 1 «perfekt» får flere kapitler
+ drillkapittel, nivå 3 «kjenne» får ett kompakt kapittel).

Seksjonstitlene under blir `sectionNames` i metadata (vises som «Kapittel N:
<tittel>» på bokforsiden):

| Del | Seksjonstittel (`sectionNames`) | Kap. | Prioritet | Begrunnelse (frekvens → omfang) |
|---|---|---|---|---|
| 0 | Eksamenskart og eksamenshåndverk | 3 | — | Prioriteringsverktøy + de to signaturferdighetene: flervalg uten minuspoeng og «regn+tegn+forklar»-langsvar. Kjerne i studieguiden. |
| 1 | Marked og frikonkurranselikevekt | 4 | PERFEKT | FK-likevekt (regn P*/X*) **~7/7** som fast flervalg + åpner mikro-langsvaret; elastisitet/prisfunksjoner/makspris i tillegg → 3 teori + drill. |
| 2 | Overskudd og effektivitet | 3 | PERFEKT | KO/PO/SO + frikonkurranseeffektivitet (MBV=MC) **6/7** langsvar; Pareto → 2 teori + drill. |
| 3 | Monopol, effektivitetstap og prisdiskriminering | 4 | PERFEKT | Den stabile mikro-langsvarklyngen: monopol+dødvektstap **6/7**, prisdiskriminering **5/7** → 3 teori + drill. |
| 4 | Eksterne virkninger og kollektive goder | 2 | KJENNE (ny/oppgr. 2025) | Ny/oppgradert i flervalgsdelen V2025; kollektivt gode med utregning av optimalt kvantum → 2 kompakte kapitler. |
| 5 | Spillteori | 1 | KJENNE (ny 2025) | Fangens dilemma/Nash lagt til flervalg V2025 → 1 kompakt kapittel. |
| 6 | Handel og komparative fortrinn | 1 | KJENNE (ny 2025) | Absolutte/komparative fortrinn + proteksjonisme lagt til V2025 → 1 kompakt kapittel. |
| 7 | Nasjonalregnskap og BNP | 2 | PERFEKT | BNP-identiteten **7/7** (FV + langsvar); BNP som velferdsmål, realstørrelser, produksjonsgap → 2 kapitler. |
| 8 | Keynes-kryss og multiplikator | 3 | PERFEKT (tyngst) | Den tyngste makro-langsvar **7/7**: likevekts-BNP, multiplikator, ΔG-dimensjonering, graf → 2 teori + drill. |
| 9 | AD-AS og konjunkturer | 1 | KJENNE | AD-AS med horisontal SRAS + tilbudssjokk lavfrekvent (V21) men sikre poeng → 1 kapittel. |
| 10 | Inflasjon, penge- og finanspolitikk | 5 | KUNNE | Inflasjon **6/7**, pengepolitikk **5/7**, valuta/KKP **6/7**, arbeidsmarked **5/7**, finanspolitikk/handlingsregel/pengefunksjoner → 5 kapitler. |
| 11 | Integrert flervalgstrening | 2 | — | Flervalg er 1/3 av karakteren og blander domenene; egen tverrgående drillmodul (mikro + makro + feller). |
| 12 | Eksamenstrening | 3 | — | 3 komplette øvingseksamener i tredelt V2025-mal (10 flervalg + 2 langsvar). |

**Avvik fra DNA-malen (dokumentert):**
1. **Dobbeltbok-strukturen** er et bevisst avvik fra enkeltdomene-forbildene:
   DNA-en antar ett hovedtema-hierarki, men SØK 3500 er genuint tvedelt (mikro +
   makro ≈ 50/50, flervalg tvinger begge hvert år, begge langsvar obligatorisk
   fra V2025). Boka speiler eksamen med to parallelle temablokker.
2. **Drillkapitlene ligger inne i temadelene** (1.4, 2.3, 3.4, 8.3) i stedet for
   samlet i siste del, fordi sjangrene er nivå-1-gjengangere som må drilles
   umiddelbart etter teorien. Del 12 beholder de komplette øvingseksamenene.
3. **En egen flervalgs-treningsmodul (Del 11)** er lagt til utover DNA-malen,
   fordi flervalg ER en egen 1/3-sjanger ved BI som trenes annerledes enn
   langsvar (ren gjenkjennings-/regnefart uten begrunnelse). DNA-en har ikke
   dette fordi UiO-forbildene ikke har flervalgseksamen.
4. **Håndverksdelen (Del 0) har tre kapitler**, ikke ett, fordi de to
   eksamensferdighetene (flervalgsstrategi + «regn+tegn+forklar»-langsvar) er så
   sentrale ved BI at de fortjener egne metodekapitler i tillegg til
   eksamenskartet.

---

## 3. Kapitler

Feltene under følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–J) refererer
til oppgavetype-katalogen i EKSAMENSANALYSE §3, gjengitt i bokas Del 0:
**A** flervalg (begreps-/regnetest), **B** Keynes-modellen, **C** monopol +
effektivitetstap, **D** prisdiskriminering, **E** overskudd + FK-effektivitet,
**F** inflasjon/pengepolitikk (verbal), **G** nasjonalregnskap/BNP, **H** verbal
«ta stilling»-drøfting, **I** arbeidsmarked/valgfrie makrotemaer, **J** nye
2025-sjangre (handel/spill/kollektive goder/eksternaliteter). Prioritetsklasser:
**perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

**«A-innsikt»-bokser:** Kapitlene merket nedenfor skal ha en egen `tip`-blokk med
tittel **«A-innsikt»** for det kontraintuitive poenget sensorveiledningene
markerer med «de beste kandidatene vil også …». Disse skiller topp fra middels og
er listet eksplisitt i hvert relevant kapittel.

---

### Del 0 — Eksamenskart og eksamenshåndverk

#### Kapittel 0.1: Eksamenskartet: slik testes SØK 3500

- **id:** `sok3500-bi-0-1` · **number:** 0.1 · **estimatedMinutes:** 30 · **prerequisites:** ingen
- **Kapitteltype:** eksamenskart
- **description:** Eksamensformen, den faste tredelingen, temafrekvensene, regimeskiftet SØK 3442 → SØK 3500, og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på alle 7 sett. Skal gjengi: (i) **formen** — fra V2025 en skriftlig skoleeksamen på **3 timer uten hjelpemidler** i kandidatportal, karakter A–F; historikken (V2021 hjemmeeksamen 3¼ t under korona; 2022–2024 skoleeksamen); (ii) den **faste tredelte malen der hver del teller nøyaktig 1/3**: oppgave 1 = ti flervalg, oppgave 2 = obligatorisk langsvar, oppgave 3 = langsvar; (iii) **regimeskiftet ved kodebyttet**: SØK 3442/34421 (2021–2024, valgfrihet mellom oppg. 3 og 4) → SØK 3500 (V2025, valgfriheten fjernet — begge langsvar obligatoriske; handel/spill/kollektive goder/eksternaliteter lagt til flervalg); samme emne/pensum/lærebok gjennom hele; (iv) **temafrekvens-tabellen** (score av 7): nasjonalregnskap/BNP 7/7, Keynes-multiplikator 7/7, FK-likevekt (regn P*/X*) ~7/7, monopol+effektivitetstap 6/7, KO/PO/SO+FK-effektivitet 6/7, valuta/KKP 6/7, inflasjon 6/7, prisdiskriminering 5/7, pengepolitikk 5/7, arbeidsmarked 5/7, produksjonsgap 5/7, real vs. nominell 4/7, Pareto/elastisitet/prisregulering 3/7, handel/spill/kollektive goder ny 1/7 (2025); (v) at **flervalg er 1/3 uten minuspoeng** (kryss alltid av; to kryss = feil) og at «regn + tegn + forklar mekanisme» er hovedmønsteret i langsvar; (vi) **sensorens metaregler**: sensorveiledningene er fasit + modellbesvarelser (ikke poengterskler); vis utregningen i to steg; figur der det bes om det (A → B); mekanisme i ord; presis begrepsbruk (KO/PO/SO, MBV=MC, dødvektstap, nominelt anker, produksjonsgap); (vii) **karakterskillene**: bunnkrav = riktig svaralternativ i flervalg + riktig metode i langsvar; toppsjikt = de kontraintuitive «A-innsikt»-momentene (balansert budsjett nulles ikke ut; perfekt prisdiskr. er ikke Paretoforbedring; kronekurs via to kanaler; makspris-velferd tvetydig).
- **Innholdskontrakt:** Oppgavetype-katalogen A–J som studentens sjekkliste, med typisk vekt (hver langsvarsoppgave = 1/3; flervalg = 1/3 delt på 10). Kandidatportal-formalia (plagiatsjekk, mulig muntlig høring) nevnes som eksamenspraktisk kontekst, ikke fagstoff. Prognosen for neste eksamen (V2025-malen): 10 flervalg som blander mikro (FK-likevekt, elastisitet, monopol, prisdiskr., eksternalitet, kollektivt gode, spill, komparative fortrinn) og makro (BNP-identitet, Keynes-multiplikator, produksjonsgap, real vs. nominell, KKP, Phillips, pengepolitikk) + obligatorisk mikro-langsvar (overskudd + monopol/effektivitetstap + prisdiskr.) + obligatorisk makro-langsvar (Keynes: likevekts-BNP + multiplikator + produksjonsgap + finanspolitikk + graf). Leseplan: Del 1–3 + 7–8 er «må perfekt»; Del 10 + BNP-drøfting «må kunne»; Del 4–6 + 9 «bør kjenne» (men billige flervalgspoeng).
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt tre timer og tre likevektede deler — sett opp tidsbudsjett per del og per flervalgsspørsmål».
- **Typiske feil:** Metafeilene — la flervalgsspørsmål stå ubesvart (gratis poeng når det ikke er minuspoeng); prioritere ett domene (valgfriheten er borte); levere algebra uten figur/mekanisme i langsvar; pugge IS-LM/Holden-apparat som ikke testes.
- **Quiz: 12 · Flashcards: 14** (frekvenser, form, regimeskiftet, metaregler)

#### Kapittel 0.2: Flervalgshåndverket: ti spørsmål uten minuspoeng

- **id:** `sok3500-bi-0-2` · **number:** 0.2 · **estimatedMinutes:** 40 · **prerequisites:** `sok3500-bi-0-1`
- **Kapitteltype:** teori (metode)
- **description:** Strategien og teknikken for flervalgsdelen — 1/3 av karakteren — med de tre undertypene og de faste distraktorfellene.
- **Eksamensbelegg:** Flervalg opptrer i **alle 7 sett** som oppgave 1 (1/3 av karakteren), 10 spørsmål, kun ett riktig, ingen minuspoeng, ingen begrunnelse; 4 alternativer (2021–2024), 5 alternativer (2025). Blander typisk 4–5 mikro + 5–6 makro. Sjanger A. Prioritet: **perfekt** (billige, mange poeng).
- **Innholdskontrakt:** (1) **Strategireglene:** kryss alltid av (ingen minuspoeng); ett kryss (to = feil); elimineringsmetode; ikke overtenke — begrepsspørsmål avgjøres raskt, regne-flervalg krever kladd. (2) De **tre undertypene** med metode: **regne-flervalg** (finn P*/X* fra lineære kurver; finn likevekts-BNP; finn manglende nasjonalregnskapsledd; finn produksjonsgap i %; finn ΔG for ønsket ΔY) — rask kladdeteknikk; **definisjons-flervalg** (substitusjonseffekt, frontfagsmodell, KKP, deskriptivt vs. normativt, pengenes funksjoner, produksjonsgap-definisjon, ekspansiv/kontraktiv politikk); **«hvilket utsagn er feil/riktig»** (subtile feller). (3) De **faste distraktorfellene** (fra §5-feilkatalogen) samlet som gjenkjennelig katalog: retning valutakurs/konkurranseevne, real vs. nominell, MR = pris for monopol, 1.- vs. 3.-ordens prisdiskriminering, fortegn på produksjonsgap, deskriptivt vs. normativt. Kapitlet er tett koblet til flervalgs-treningsmodulen (Del 11).
- **Oppgavesjangre:** A (alle undertyper). Mønstereksempel (regne-flervalg): «I et frikonkurransemarked er etterspørselen $P = 180 - 3X$ og tilbudet $P = 20 + X$. Hva er likevektsprisen? (a) 40 (b) 60 (c) 20 (d) 160» (svar: $X^*=40$, $P^*=60$).
- **Typiske feil:** La spørsmål stå tomt; sette to kryss; regne feil under tidspress fordi kladd hoppes over; gå i den kjente retningsfellen (valuta/real-nominell) uten å stoppe opp.
- **Quiz: 20 · Flashcards: 12** (høy quiz — dette er signaturferdigheten)

#### Kapittel 0.3: Langsvarhåndverket: regn + tegn + forklar mekanisme

- **id:** `sok3500-bi-0-3` · **number:** 0.3 · **estimatedMinutes:** 40 · **prerequisites:** `sok3500-bi-0-1`
- **Kapitteltype:** teori (metode)
- **description:** Malen for de to langsvarsoppgavene: hvordan en modellbesvarelse ser ut som sensor vil se den — utregning i steg, figur i ord, verbal mekanisme, og «A-innsikt»-momentene som gir toppkarakter.
- **Eksamensbelegg:** De to langsvarsoppgavene utgjør 2/3 av karakteren i **alle 7 sett**. Sensorveiledningene (V2021, V2022, H2022, V2023) er fullstendige modellbesvarelser og markerer «de beste kandidatene vil også …». Sjanger B–I. Prioritet: **perfekt** (metodekapittel resten av boka refererer til).
- **Innholdskontrakt:** **Trestegsmalen «regn + tegn + forklar»** etableres som bokas standard for alle langsvar: (i) **REGN** — vis utregningen i minst to eksplisitte steg (Keynes-likevekt: sett inn konsumfunksjonen, løs for Y; monopol: MR=MC → X → P); (ii) **TEGN** — figurspråket: akser navngitt (Keynes: $Y$ horisontalt, PAE vertikalt, 45°-linja $Y=\text{PAE}$; marked: $X$ horisontalt, $P$ vertikalt), kurver merket, gammel likevekt A og ny B markert med stiplede linjer, arealer/avstander navngitt (dødvektstap, KO/PO); (iii) **FORKLAR MEKANISME** — den verbale prosessen (multiplikatorrunder; kontrafaktisk monopolargument; hvorfor et skift gir nettopp denne retningen). **A-innsikt-katalogen** presenteres her som oversikt (utdypes i sine kapitler): balansert budsjettøkning nulles ikke ut (a < 1); perfekt prisdiskr. gir SO = frikonkurranse men er ikke Paretoforbedring; kronekurs via importert inflasjon *og* etterspørsel; makspris-velferd tvetydig; lavere importtilbøyelighet øker multiplikatoren. Presiser: **utenomsnakk utover det spurte gir ikke ekstra**; metoderiktighet trumfer små regnefeil; figur + verbal mekanisme kan gi full uttelling selv med enkel algebra.
- **Oppgavesjangre:** B–I (metaramme). Mønstereksempel (struktur, ikke innhold): en modellbesvarelse på 2/3-nivå vises som mal med margnotater om hva som gir uttelling ved hvert steg.
- **Typiske feil:** Algebra uten figur eller figur uten mekanisme (halvt svar); glemme A → B-markering i figuren; hoppe over mekanismeforklaringen; skrive langt utenomsnakk i stedet for det spurte.
- **Quiz: 12 · Flashcards: 14** (metodetrekk, sensorregler, A-innsikt-oversikt)

**Prøve-kvote Del 0:** ingen (metadel — inngår i studieguiden).

---

### Del 1 — Marked og frikonkurranselikevekt *(prioritet: PERFEKT)*

#### Kapittel 1.1: Etterspørsel, tilbud og frikonkurranselikevekt: regn ut P* og X*

- **id:** `sok3500-bi-1-1` · **number:** 1.1 · **estimatedMinutes:** 50 · **prerequisites:** `sok3500-bi-0-3`
- **Kapitteltype:** teori
- **description:** Markedslikevekten grafisk og algebraisk — den mest gjentatte regneferdigheten i faget: finn P* og X* fra lineær etterspørsel og tilbud.
- **Eksamensbelegg:** «Regn ut P* og X* i frikonkurranse» er nesten fast flervalg (**~7/7**, sjanger A) og åpner mikro-langsvaret. Forutsetningene (pristakere, homogent gode) spørres verbalt. Prioritet: **perfekt**. Kalibrerte fasitverdier (til vanskelighetskalibrering, ikke gjenbruk): $P=150-2X$ mot $P=10+2X$ → $(X^*,P^*)=(35,80)$; $P=180-3X$ mot $P=20+X$ → $(40,60)$.
- **Innholdskontrakt:** Etterspørselskurven som **marginal betalingsvillighet (MBV)**, fallende: $P = a - bX$; tilbudskurven som **marginalkostnad**, stigende: $P = c + dX$; forutsetninger for frikonkurranse (mange pristakere, homogent gode, fri etablering). **Likevekt** der kurvene krysser: sett $a - bX = c + dX$, løs $X^* = \frac{a-c}{b+d}$, sett inn for $P^*$ — vis i to steg, kontroller i begge funksjoner. **Prismekanismen:** ved $P > P^*$ tilbudsoverskudd → prispress ned; ved $P < P^*$ etterspørselsoverskudd → prispress opp (begge veier). Figurspråket etableres: $P$ vertikalt, $X$ horisontalt, kurvene merket, likevekt A med stiplede linjer.
- **Oppgavesjangre:** A + E-fundament. Mønstereksempel (langsvar-åpning): «Etterspørselen er $P = 200 - 4X$ og tilbudet $P = 40 + 4X$. Gjør rede for forutsetningene bak frikonkurranse, forklar ved hjelp av en figur hvordan likevekten oppstår, og beregn likevektspris og -mengde.» ($(X^*,P^*)=(20,120)$.)
- **Typiske feil:** Regnefeil ved innsetting (kontroller i begge funksjoner); forklare likevekten som definisjon uten prismekanismen; umerket figur; blande invers form (P som funksjon av X) med direkte form.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 1.2: Elastisitet, salgsinntekt og prisenes funksjoner

- **id:** `sok3500-bi-1-2` · **number:** 1.2 · **estimatedMinutes:** 45 · **prerequisites:** `sok3500-bi-1-1`
- **Kapitteltype:** teori
- **description:** Priselastisitet med verbal tolkning, koblingen til salgsinntekt, og prisenes rasjonerings- og allokeringsfunksjon.
- **Eksamensbelegg:** Priselastisitet + salgsinntekt i 3/7 (langsvar + FV), prisenes rasjonerings-/allokeringsfunksjon 3/7 (langsvar). Substitusjons- vs. inntektseffekt som fast flervalgs-definisjon (3/7). Normalt/mindreverdig/komplementært gode, fallende marginalnytte (4/7, FV + langsvar). Prioritet: **kunne** (mikro-fundament brukt videre). Kalibrert aktualitetscase: strøm +119 % pris, −14 % mengde (prisuelastisk).
- **Innholdskontrakt:** Priselastisitet $\varepsilon = \frac{\%\Delta X}{\%\Delta P}$ med **obligatorisk verbal tolkning** («når prisen øker 1 %, faller etterspurt mengde med $|\varepsilon|$ %»); uelastisk ($|\varepsilon|<1$) vs. elastisk ($|\varepsilon|>1$); koblingen til **salgsinntekt** (uelastisk: prisøkning øker inntekten). **Prisenes to funksjoner:** rasjoneringsfunksjon (fordeler knapp mengde til dem med høyest betalingsvillighet) og allokeringsfunksjon (styrer ressurser dit betalingsvilligheten er størst). Sekundært («bør kjenne», collapsible): normalt/mindreverdig/komplementært gode, fallende marginalnytte; **substitusjons- vs. inntektseffekt kun som verbal definisjon** (ingen Slutsky-algebra).
- **Oppgavesjangre:** A + H. Mønstereksempel: «Strømprisen stiger 90 % mens forbruket faller 12 %. Beregn priselastisiteten, forklar med ord hva tallet betyr, og gjør rede for hvordan prisen rasjonerer et knapt gode.»
- **Typiske feil:** Oppgi elastisitetstallet uten verbal tolkning; lese et uelastisk gode som elastisk (feilkatalog #4, strøm-fellen); blande substitusjons- og inntektseffekt; tro at prisøkning alltid reduserer salgsinntekten.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 1.3: Markedsskift, over-/underskudd og makspris

- **id:** `sok3500-bi-1-3` · **number:** 1.3 · **estimatedMinutes:** 45 · **prerequisites:** `sok3500-bi-1-1`
- **Kapitteltype:** teori
- **description:** Skift i tilbud og etterspørsel, tilbuds-/etterspørselsoverskudd, og velferdsvirkningen av maksimalpris — der svaret er tvetydig.
- **Eksamensbelegg:** Markedsskift 4/7 (FV + langsvar); makspris/prisregulering 1–2/7 (langsvar V23, aktualitetscase strøm). Prioritet: **kunne**. **A-innsikt-kapittel** (makspris-velferd tvetydig).
- **Innholdskontrakt:** Skiftkatalogen: hva skifter etterspørsel (inntekt, preferanser, substitutt-/komplementpris, antall kjøpere) vs. tilbud (kostnader, teknologi, antall selgere); **skift vs. bevegelse langs kurven**; ny likevekt (retning på P og X). Tilbuds-/etterspørselsoverskudd ved priser ulik P*. **Makspris under likevekt:** etterspørselsoverskudd, **kortside-regelen** (omsatt mengde = tilbudt mengde), rasjonering nødvendig. **A-innsikt:** velferdseffekten av makspris er **tvetydig** — den avhenger av hvor mye omsatt mengde faller; ved svært prisuelastisk tilbud faller mengden lite og konsumentene kan komme bedre ut, ellers oppstår mengdetap og dødvektstap (vis to tilfeller, jf. V2023-nyansen). Alternativet kontantstøtte nevnes.
- **Oppgavesjangre:** H + E-kobling. Mønstereksempel: «En populær ny trend firedobler etterspørselen etter et produkt. Vis skiftet i en figur, forklar retningen på ny pris og mengde, og gjør rede for hvem som tjener.»
- **Typiske feil:** Forveksle skift med bevegelse langs kurven; glemme kortside-regelen (lese omsatt mengde av etterspørselen ved makspris); påstå at makspris «alltid» er bra for konsumenten (feilkatalog #5); feil retning ved samtidige skift.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 1.4: Drill: markedslikevekt, elastisitet og skift

- **id:** `sok3500-bi-1-4` · **number:** 1.4 · **estimatedMinutes:** 80 · **prerequisites:** `sok3500-bi-1-2`, `sok3500-bi-1-3`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på markedsapparatet: fra oppgitte lineære funksjoner og en aktuell hendelse til fullført besvarelse med figur i ord — og rask regnefart for flervalg.
- **Eksamensbelegg:** Dekker sjanger A (regne-flervalg P*/X*, ~7/7) og E-åpningen (markedslikevekt i mikro-langsvaret). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) forutsetninger hvis spurt; 2) tegn og merk figur; 3) forklar prismekanismen; 4) algebra $X^*=\frac{a-c}{b+d}$, sett inn for $P^*$, kontroller; 5) elastisitet i likevekten + verbal tolkning; 6) skiftanalyse (kurve + begrunnelse, retning, ny likevekt B, vinnere/tapere); 7) evt. makspris med kortside og tvetydig velferd. **Gjennomregnet eksamenscase med sensor-margnotater** (hva gir uttelling ved hvert steg — mekanismen bak skiftet honoreres, ikke bare pilen). **10–15 oppgaver** på eksamensnivå med nyskrevne case og pene tall, både korte regne-flervalg (fart) og full langsvar-åpning.
- **Oppgavesjangre:** A, E, H. Mønstereksempel (full kjede): «(a) Beregn likevekten fra $P=240-6X$ og $P=40+2X$. (b) Beregn og tolk priselastisiteten i likevekten. (c) Kostnadene stiger så tilbudskurven skifter opp — vis i figur og forklar ny likevekt.» ($(X^*,P^*)=(25,90)$.)
- **Typiske feil:** Regnefeil under tidspress; tall uten tolkning; skift/bevegelse forvekslet; umerkede figurer; kortside-glemsel ved makspris.
- **Quiz: 18 · Flashcards: 8**

**Prøve-kvote Del 1:** 4 prøver (1.A regne-flervalg P*/X* på fart, sjanger A; 1.B grafisk + algebraisk likevekt med elastisitet og verbal tolkning, sjanger A+E; 1.C skift + over-/underskudd + makspris med tvetydig velferd, sjanger H; 1.D full langsvar-åpning på eksamensnivå, sjanger E+H).

---

### Del 2 — Overskudd og effektivitet *(prioritet: PERFEKT)*

#### Kapittel 2.1: KO, PO og SO: overskuddstriangelet

- **id:** `sok3500-bi-2-1` · **number:** 2.1 · **estimatedMinutes:** 50 · **prerequisites:** `sok3500-bi-1-1`
- **Kapitteltype:** teori
- **description:** Konsument-, produsent- og samfunnsøkonomisk overskudd som arealer i markedsdiagrammet — mikro-langsvarets faste byggekloss.
- **Eksamensbelegg:** KO/PO/SO i **6/7** sett (langsvar + FV, sjanger E). Prioritet: **perfekt**.
- **Innholdskontrakt:** **KO** = areal under etterspørselskurven (MBV) over prisen (samlet betalingsvillighet minus det som betales); **PO** = areal over tilbudskurven (MC) under prisen (inntekt minus kostnad); **SO = KO + PO** i fravær av skatt/eksternaliteter. SO for en gitt mengde = arealet mellom etterspørsel og tilbud fra 0 til mengden = samlet betalingsvillighet minus samlede kostnader. Trekant-/trapesgeometri med lineære kurver; navngiving av arealene i figurbeskrivelsen. Kobling fremover: brukes til å måle effektivitetstap ved monopol (kap. 3.2) og eksternaliteter (kap. 4.1).
- **Oppgavesjangre:** A + E. Mønstereksempel: «I markedet med $P=200-4X$ og $P=40+4X$: beregn konsument-, produsent- og samfunnsøkonomisk overskudd i likevekten, og illustrer de tre arealene i en figur.»
- **Typiske feil:** Måle PO mot null i stedet for mot marginalkostnaden (tilbudskurvens høyde); regnefeil i trekantarealer; arealer uten navngiving i figuren; blande KO og PO.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 2.2: Frikonkurranse maksimerer SO: MBV = MC-argumentet

- **id:** `sok3500-bi-2-2` · **number:** 2.2 · **estimatedMinutes:** 45 · **prerequisites:** `sok3500-bi-2-1`
- **Kapitteltype:** teori
- **description:** Hvorfor frikonkurranselikevekten gir størst samfunnsøkonomisk overskudd — det kontrafaktiske MBV = MC-argumentet — og Pareto-optimalitet.
- **Eksamensbelegg:** Frikonkurranse maksimerer SO (MBV = MC) i **5/7** (langsvar, sjanger E); Pareto-optimalitet/Paretoforbedring 3/7 (FV + langsvar). Prioritet: **perfekt**.
- **Innholdskontrakt:** SO maksimeres der **marginal betalingsvillighet = marginalkostnad** (der kurvene krysser). **Kontrafaktisk argument** (sensor-gull): for enhver mengde under likevekt er MBV > MC ⇒ en enhet til øker SO; for enhver mengde over likevekt er MBV < MC ⇒ en enhet mindre øker SO ⇒ likevekten er optimal. Effektivitetstap generelt = tapt SO ved avvik fra likevektsmengden (trekant mellom MBV og MC). **Pareto-optimalitet:** ingen kan få det bedre uten at noen får det verre; **Paretoforbedring:** minst én bedre, ingen verre. Presiser: effektivitet sier ikke noe om fordeling.
- **Oppgavesjangre:** E + H. Mønstereksempel: «Forklar ved hjelp av en figur hvorfor samfunnsøkonomisk overskudd er størst i frikonkurranselikevekten, og bruk MBV = MC-argumentet til å begrunne det.»
- **Typiske feil:** Ramse opp «FK er effektiv» uten det kontrafaktiske argumentet; blande Pareto-optimalitet og Paretoforbedring; hevde at likevekten er «rettferdig» (effektivitet ≠ fordeling).
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 2.3: Drill: overskudd og effektivitet

- **id:** `sok3500-bi-2-3` · **number:** 2.3 · **estimatedMinutes:** 75 · **prerequisites:** `sok3500-bi-2-2`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på overskuddsgeometrien og effektivitetsargumentet — byggeklossene i mikro-langsvaret.
- **Eksamensbelegg:** Dekker sjanger E (KO/PO/SO 6/7, FK-effektivitet 5/7). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift: 1) beregn likevekt; 2) beregn og tegn KO, PO, SO; 3) begrunn optimaliteten med MBV = MC kontrafaktisk; 4) beregn effektivitetstap ved et gitt mengdeavvik (trekantareal). Gjennomregnet eksamenscase med margnotater. **10–15 oppgaver** med nyskrevne lineære funksjoner og pene tall, stigende til eksamensnivå.
- **Oppgavesjangre:** E. Mønstereksempel: «Med $P=300-5X$ og $P=60+X$: beregn KO, PO og SO, illustrer arealene, og forklar hvorfor overskuddet ikke kan bli større.»
- **Typiske feil:** PO målt mot null; feil trekantareal; manglende kontrafaktisk begrunnelse; umerkede figurer.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 2:** 4 prøver (2.A KO/PO/SO-begrepene med arealer, sjanger A+E; 2.B FK-effektivitet med MBV=MC-argumentet, sjanger E; 2.C velferdsregnskap med tallfestede trekanter, sjanger E; 2.D blandet begreps- og velferdsprøve på eksamensnivå, sjanger A+E+H).

---

### Del 3 — Monopol, effektivitetstap og prisdiskriminering *(prioritet: PERFEKT)*

#### Kapittel 3.1: Monopolistens tilpasning: MR = MC (regn X og P)

- **id:** `sok3500-bi-3-1` · **number:** 3.1 · **estimatedMinutes:** 50 · **prerequisites:** `sok3500-bi-2-1`
- **Kapitteltype:** teori
- **description:** Hvorfor monopolisten setter MR = MC, hvorfor MR-kurven ligger under og er brattere enn etterspørselen, og hvordan man regner ut monopolkvantum og -pris.
- **Eksamensbelegg:** Monopoltilpasning i **6/7** (langsvar, sjanger C). Prioritet: **perfekt**. **A-innsikt-kapittel** (MR under og brattere enn E). Kalibrert case: $P=110-X$, $MC=10$ → $X_m=50$, $P_m=60$.
- **Innholdskontrakt:** Monopolistens profittmaksimering: **MR = MC**. Kontrafaktisk begrunnelse: MR > MC ⇒ øk produksjon; MR < MC ⇒ reduser. For lineær etterspørsel $P = a - bX$ er **$\text{MR} = a - 2bX$** (dobbelt så bratt). **A-innsikt — hvorfor MR < P:** når monopolisten selger én enhet til, må prisen settes ned på *alle* enheter, ikke bare den siste; marginalinntekten er derfor lavere enn prisen, og MR-kurven ligger under etterspørselen. Regneprosedyre: sett $\text{MR} = \text{MC}$, løs for $X_m$, sett inn i etterspørselen for $P_m$. Figur: etterspørsel, MR under den, MC; monopoltilpasning A markert. Lernerindeks $L = \frac{P-\text{MC}}{P}$ som mål på markedsmakt (sekundært).
- **Oppgavesjangre:** C. Mønstereksempel: «En monopolist står overfor etterspørselen $P = 130 - 2X$ og har konstant marginalkostnad $MC = 10$. Beregn kvantum og pris som maksimerer profitten, tegn tilpasningen med etterspørsel, MR og MC, og forklar hvorfor MR-kurven ligger under etterspørselen.» ($X_m=30$, $P_m=70$.)
- **Typiske feil:** Sette MR = pris (feilkatalog #11); glemme at MR er dobbelt så bratt; lese monopolprisen av MR-kurven i stedet for etterspørselen; utelate den kontrafaktiske begrunnelsen.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 3.2: Effektivitetstap og kilder til markedsmakt

- **id:** `sok3500-bi-3-2` · **number:** 3.2 · **estimatedMinutes:** 45 · **prerequisites:** `sok3500-bi-3-1`
- **Kapitteltype:** teori
- **description:** Dødvektstapet ved monopol — hvorfor det oppstår og hvordan man regner det ut — og hvor markedsmakten kommer fra.
- **Eksamensbelegg:** Effektivitetstap/dødvektstap ved monopol i **6/7** (langsvar, sjanger C). Kilder til markedsmakt/naturlig monopol/oligopol 3/7 (FV). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Dødvektstap (effektivitetstap) E** = tapt SO fordi monopolisten produserer mindre enn frikonkurransemengden; trekanten mellom etterspørsel (MBV) og MC fra monopolmengden til frikonkurransemengden. Begrunnelse: for de bortfalte enhetene er MBV > MC — verdi som ikke realiseres. Regneprosedyre: finn frikonkurransemengde ($P=\text{MC}$), finn monopolmengde (MR=MC), dødvektstap = trekantareal. Fordelingsvirkning: monopolisten flytter KO til PO *og* skaper i tillegg et rent tap. **Kilder til markedsmakt:** patenter/enerett, stordriftsfordeler (naturlig monopol med fallende gjennomsnittskostnad), kontroll over innsatsfaktor, etableringshindre. Oligopol/Lernerindeks nevnes kort (sekundært).
- **Oppgavesjangre:** C. Mønstereksempel: «Fra forrige oppgave: beregn frikonkurransemengden, marker dødvektstapet i figuren, beregn tapets størrelse, og forklar hvorfor det oppstår.»
- **Typiske feil:** Plassere dødvektstapstrekanten feil; glemme at frikonkurranse gir $P=\text{MC}$; forveksle fordelingsvirkningen (KO→PO) med effektivitetstapet; regnefeil i trekantarealet.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 3.3: Prisdiskriminering: 1. vs. 3. orden og Pareto-vurderingen

- **id:** `sok3500-bi-3-3` · **number:** 3.3 · **estimatedMinutes:** 50 · **prerequisites:** `sok3500-bi-3-2`
- **Kapitteltype:** teori
- **description:** Perfekt (1.-ordens) vs. tredjegrads prisdiskriminering — og det kontraintuitive poenget: perfekt prisdiskriminering fjerner dødvektstapet, men er ingen Paretoforbedring.
- **Eksamensbelegg:** Prisdiskriminering i **5/7** (langsvar + FV, sjanger D); 1.- vs. 3.-ordens er en fast flervalgs-felle. Prioritet: **perfekt**. **A-innsikt-kapittel** (perfekt prisdiskr. = SO som frikonkurranse, men ikke Paretoforbedring).
- **Innholdskontrakt:** **Perfekt (1.-ordens) prisdiskriminering:** ulik pris per konsument lik hver enkelts betalingsvillighet; MR sammenfaller da med etterspørselen ⇒ monopolisten produserer helt til $\text{MBV}=\text{MC}$ (frikonkurransemengden), **dødvektstapet forsvinner**. **A-innsikt:** SO blir like stort som i frikonkurranse, **men det er IKKE en Paretoforbedring** — hele konsumentoverskuddet flyttes til monopolisten, så konsumentene kommer verre ut. Effektiviteten forbedres, fordelingen forverres. **Tredjegrads prisdiskriminering:** ulik pris i adskilte delmarkeder (studentrabatt, geografi) — høyere pris i det minst prisfølsomme markedet. Skillet 1.- vs. 3.-ordens presiseres (fast felle).
- **Oppgavesjangre:** D. Mønstereksempel: «En monopolist går fra enhetspris til perfekt prisdiskriminering. Forklar hva som skjer med produsert kvantum, dødvektstapet og konsumentoverskuddet, og ta stilling til om overgangen er en Paretoforbedring.»
- **Typiske feil:** Blande 1.- og 3.-ordens (feilkatalog #1); tro at perfekt prisdiskriminering er en Paretoforbedring (feilkatalog #2 — selve A-innsikten); glemme at dødvektstapet forsvinner ved perfekt diskriminering; feil retning på delmarkedsprisene.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 3.4: Drill: monopol, effektivitetstap og prisdiskriminering

- **id:** `sok3500-bi-3-4` · **number:** 3.4 · **estimatedMinutes:** 80 · **prerequisites:** `sok3500-bi-3-3`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på den stabile mikro-langsvarklyngen: MR = MC-tilpasning med tallutregning, dødvektstap, og prisdiskriminering med Pareto-vurdering.
- **Eksamensbelegg:** Dekker sjanger C (6/7) og D (5/7) — mikro-langsvarklyngen. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift: 1) monopoltilpasning MR=MC → $X_m$, $P_m$; 2) figur (etterspørsel, MR, MC, tilpasning A); 3) frikonkurransemengde + dødvektstap (marker + regn ut); 4) forklar mekanismen (kontrafaktisk MR-argument, hvorfor tapet oppstår); 5) prisdiskriminering (perfekt: dødvektstap bort, konsument taper alt, ikke Pareto; 3.-ordens). Gjennomregnet eksamenscase med sensor-margnotater. **10–15 oppgaver** med nyskrevne tall til eksamensnivå.
- **Oppgavesjangre:** C, D. Mønstereksempel (full kjede): «(a) Beregn monopoltilpasning fra $P=160-2X$, $MC=20$. (b) Beregn dødvektstapet og forklar hvorfor det oppstår. (c) Monopolisten innfører perfekt prisdiskriminering — forklar virkningen på SO og konsumentoverskudd, og vurder Pareto.»
- **Typiske feil:** MR = pris; feilplassert dødvektstap; perfekt prisdiskr. som Paretoforbedring; 1.- vs. 3.-ordens; umerkede figurer.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 3:** 4 prøver (3.A monopoltilpasning MR=MC med figur og MR<P-forklaring, sjanger C; 3.B dødvektstap — utregning + mekanisme, sjanger C; 3.C prisdiskriminering med Pareto-vurdering, sjanger D; 3.D full mikro-langsvar på eksamensnivå: overskudd → monopol → dødvektstap → prisdiskr., sjanger C+D+E).

---

### Del 4 — Eksterne virkninger og kollektive goder *(prioritet: KJENNE — ny/oppgradert 2025)*

#### Kapittel 4.1: Eksterne virkninger og markedssvikt

- **id:** `sok3500-bi-4-1` · **number:** 4.1 · **estimatedMinutes:** 40 · **prerequisites:** `sok3500-bi-2-2`
- **Kapitteltype:** teori
- **description:** Hvordan negative og positive eksterne virkninger gjør at markedet svikter — markedskvantumet avviker fra det samfunnsøkonomisk optimale.
- **Eksamensbelegg:** Eksterne virkninger eksplisitt i V2025 (FV) + V2024 (FV) — **ny/oppgradert 2025**, 1–2/7, sjanger J. Prioritet: **kjenne** (billige flervalgspoeng). Coase-teoremet bygges IKKE på (aldri testet).
- **Innholdskontrakt:** **Negativ ekstern virkning** (forurensning): en kostnad tredjepart bærer som ikke er priset ⇒ **markedskvantum > samfunnsøkonomisk optimalt**, SO ikke maksimert (dødvektstap). **Positiv ekstern virkning** (vaksinering, utdanning): en nytte tredjepart får ⇒ markedskvantum < optimalt. Samfunnsøkonomisk optimum der samlet (privat + ekstern) marginalkostnad = MBV. Virkemidler nevnes kort: avgift ved negativ, subsidie ved positiv (uten dyp Pigou-algebra — innføringsnivå). Figur: privat vs. samfunnsøkonomisk kurve, avvik markert.
- **Oppgavesjangre:** A + J. Mønstereksempel (flervalg): «Ved en negativ ekstern virkning i produksjonen vil markedet uten inngrep produsere (a) for mye (b) for lite (c) riktig mengde (d) ingenting.»
- **Typiske feil:** Feil retning på kvantumsavviket (negativ ⇒ for mye, positiv ⇒ for lite); tro at markedet er effektivt tross eksternalitet; forveksle privat og samfunnsøkonomisk kurve.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 4.2: Kollektive goder: optimalt kvantum ved vertikal MBV-summering

- **id:** `sok3500-bi-4-2` · **number:** 4.2 · **estimatedMinutes:** 45 · **prerequisites:** `sok3500-bi-4-1`
- **Kapitteltype:** teori
- **description:** Hva som kjennetegner et rent kollektivt gode, og hvordan man regner ut optimalt kvantum ved å summere betalingsvilligheten vertikalt.
- **Eksamensbelegg:** Kollektive goder med utregning av optimalt kvantum i V2025 (FV) — **ny 2025**, 1/7, sjanger J. Prioritet: **kjenne**.
- **Innholdskontrakt:** **Rent kollektivt gode:** ikke-rivaliserende (én persons bruk reduserer ikke andres) og ikke-ekskluderbart (kan ikke stenge noen ute) — forsvar, gatelys, fyrtårn. Gratispassasjerproblemet. **Optimalt kvantum ved vertikal summering:** fordi alle konsumerer samme mengde, summeres gruppenes marginale betalingsvillighet **vertikalt** (i motsetning til horisontal summering for private goder); optimum der summert MBV = MC. Regneprosedyre: gitt to gruppers MBV-funksjoner, legg dem sammen (samme X), sett lik MC, løs for X. Figur: individuelle MBV-kurver + vertikal sum + MC.
- **Oppgavesjangre:** A + J. Mønstereksempel: «To grupper har betalingsvillighet $P_1 = 90 - X$ og $P_2 = 60 - X$ for et rent kollektivt gode med $MC = 30$. Beregn optimalt kvantum.» (Vertikal sum $150 - 2X = 30$ → $X=60$.)
- **Typiske feil:** Summere horisontalt (som for private goder) i stedet for vertikalt; blande rivaliserende/ekskluderbart; glemme gratispassasjerproblemet.
- **Quiz: 16 · Flashcards: 16**

**Prøve-kvote Del 4:** 4 prøver (4.A eksternaliteter — retning på kvantumsavvik + markedssvikt, sjanger A+J; 4.B kollektive goder — kjennetegn + gratispassasjer, sjanger A+J; 4.C optimalt kvantum ved vertikal summering — regneoppgave, sjanger J; 4.D blandet flervalg + kort langsvar om markedssvikt, sjanger J).

---

### Del 5 — Spillteori *(prioritet: KJENNE — ny 2025)*

#### Kapittel 5.1: Spillteori: fangens dilemma og Nash-likevekt

- **id:** `sok3500-bi-5-1` · **number:** 5.1 · **estimatedMinutes:** 45 · **prerequisites:** `sok3500-bi-3-1`
- **Kapitteltype:** teori
- **description:** Hvordan man leser en 2×2-profittmatrise, finner dominante strategier og Nash-likevekten, og hvorfor fangens dilemma gir et ineffektivt utfall.
- **Eksamensbelegg:** Spillteori (fangens dilemma, Nash-likevekt) i V2025 (FV) — **ny 2025**, 1/7, sjanger J. Prioritet: **kjenne**. Cournot/Stackelberg/SPNE bygges IKKE på (over nivået).
- **Innholdskontrakt:** **2×2-profittmatrise** med to spillere og to strategier; hvordan man leser utbetalinger. **Dominant strategi:** best uansett hva motparten gjør. **Nash-likevekt:** ingen spiller angrer sitt valg gitt motpartens valg (ingen ensidig gevinst ved å bytte). **Fangens dilemma:** begge har dominant strategi (samarbeid brytes), Nash-likevekten er kollektivt dårligere enn samarbeid — illustrerer hvorfor konkurrenter kan ende i priskrig selv om kartell ville gitt høyere profitt. Prosedyre for å finne Nash-likevekt: sjekk hver spillers beste svar, finn cellen der begge er «låst». Kobling til oligopol/karteller.
- **Oppgavesjangre:** A + J. Mønstereksempel: «To bedrifter velger mellom høy og lav pris. Utbetalingsmatrisen er gitt. Finn hver bedrifts dominante strategi og Nash-likevekten, og forklar hvorfor utfallet er dårligere for begge enn samarbeid.»
- **Typiske feil:** Forveksle Nash-likevekt med det samlet beste utfallet; overse en dominant strategi; lese matrisen feil (hvilket tall tilhører hvilken spiller); tro at Nash-likevekt alltid er effektiv.
- **Quiz: 18 · Flashcards: 16**

**Prøve-kvote Del 5:** 4 prøver (5.A lese profittmatrise + finne dominant strategi, sjanger A+J; 5.B finne Nash-likevekt i gitt spill, sjanger J; 5.C fangens dilemma — hvorfor ineffektivt, sjanger J+H; 5.D blandet flervalg + kort forklaring, sjanger J).

---

### Del 6 — Handel og komparative fortrinn *(prioritet: KJENNE — ny 2025)*

#### Kapittel 6.1: Absolutte og komparative fortrinn; proteksjonisme

- **id:** `sok3500-bi-6-1` · **number:** 6.1 · **estimatedMinutes:** 45 · **prerequisites:** `sok3500-bi-1-2`
- **Kapitteltype:** teori
- **description:** Forskjellen på absolutte og komparative fortrinn regnet fra en arbeidstimetabell, gevinsten ved handel, og hvorfor proteksjonisme skader.
- **Eksamensbelegg:** Absolutte/komparative fortrinn og handel + proteksjonisme i V2025 (FV) — **ny 2025**, 1/7, sjanger J. Prioritet: **kjenne**.
- **Innholdskontrakt:** **Absolutt fortrinn:** landet som bruker færrest arbeidstimer per enhet. **Komparativt fortrinn:** landet med lavest **alternativkostnad** (hva man gir opp av det andre godet) — det er komparative, ikke absolutte, fortrinn som bestemmer hvem som bør produsere hva. Regneprosedyre: fra en arbeidstimetabell (timer per enhet av to goder i to land), regn ut alternativkostnaden i hvert land, sammenlign, konkluder hvem som har komparativt fortrinn i hva. **Gevinster ved handel:** begge land vinner ved spesialisering + bytte innenfor bytteforholdet. **Proteksjonisme** (toll, importvern): reallønn ned, priser opp, samlet velferdstap — men fordelingsvirkninger (beskyttede næringer vinner). Figur/tabell i ord.
- **Oppgavesjangre:** A + J. Mønstereksempel: «Land X bruker 2 timer på en enhet vin og 4 på en enhet klær; land Y bruker 6 timer på vin og 3 på klær. Regn ut alternativkostnadene, avgjør hvilket land som har komparativt fortrinn i hvert gode, og forklar hvorfor begge tjener på handel.»
- **Typiske feil:** Bruke absolutt fortrinn i stedet for komparativt (alternativkostnad) til å bestemme handelsmønster; regne alternativkostnaden feil vei; tro at proteksjonisme øker samlet velferd; glemme fordelingsvirkningene.
- **Quiz: 18 · Flashcards: 16**

**Prøve-kvote Del 6:** 4 prøver (6.A absolutt vs. komparativt fortrinn fra tabell, sjanger A+J; 6.B alternativkostnad + handelsmønster — regneoppgave, sjanger J; 6.C gevinster ved handel + bytteforhold, sjanger J; 6.D proteksjonismens virkninger, sjanger J+H).

---

### Del 7 — Nasjonalregnskap og BNP *(prioritet: PERFEKT)*

#### Kapittel 7.1: BNP-identiteten og de tre måemetodene

- **id:** `sok3500-bi-7-1` · **number:** 7.1 · **estimatedMinutes:** 50 · **prerequisites:** `sok3500-bi-0-3`
- **Kapitteltype:** teori
- **description:** Bruttonasjonalproduktets identitet, de tre måemetodene, og den faste regneferdigheten: finn det manglende leddet i en nasjonalregnskapstabell.
- **Eksamensbelegg:** Nasjonalregnskap/BNP-identiteten i **7/7** (FV + langsvar, sjanger G) — nasjonalregnskapstabell med utregning innført V2024. Prioritet: **perfekt**.
- **Innholdskontrakt:** **BNP-identiteten** (utgiftssiden): $Y = C + I + G + X - Q$ der $X$ = eksport, $Q$ = import, $NX = X - Q$ = nettoeksport. **NB (symbol-liste):** her betyr $X$ eksport (ikke markedsmengde) og $Y$ = BNP. De **tre måemetodene**: utgiftsmetoden (summér etterspørselskomponentene), inntektsmetoden (lønn + kapitalinntekt + skatt), merverdimetoden (sum av bruttoprodukt/verdiskaping i alle ledd). Beslektede størrelser: NNP = BNP − kapitalslit; disponibel inntekt; sparing $S = Y - C - G$. **Regneprosedyre — finn manglende ledd:** gitt tabell med noen komponenter kjent, bruk identiteten til å løse for den ukjente. Fast flervalg + langsvar.
- **Oppgavesjangre:** A + G. Mønstereksempel: «I en økonomi er privat konsum 800, offentlig konsum 300, bruttoinvestering 250, eksport 400 og import 350. Beregn BNP, og forklar hva de tre måemetodene måler.» ($Y=800+250+300+(400-350)=1400$.)
- **Typiske feil:** Feil fortegn på import (skal trekkes fra); blande BNP og NNP; feil ledd fra identiteten (feilkatalog #12); forveksle nettoeksport og eksport.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 7.2: BNP som velferdsmål, realstørrelser og produksjonsgap

- **id:** `sok3500-bi-7-2` · **number:** 7.2 · **estimatedMinutes:** 45 · **prerequisites:** `sok3500-bi-7-1`
- **Kapitteltype:** teori
- **description:** BNPs svakheter som velferdsmål, skillet mellom reelle og nominelle størrelser, og produksjonsgapet som konjunkturmål.
- **Eksamensbelegg:** BNP som velferdsmål (langsvar, del av G, 7/7-klyngen); produksjonsgap + konjunkturvurdering **5/7** (FV + langsvar); real vs. nominell 4/7 (mest FV). Prioritet: **perfekt** (BNP) / **kunne** (produksjonsgap).
- **Innholdskontrakt:** **BNP som velferdsmål — svakhetene** (fem–seks punkter): sier ikke noe om fordeling; ignorerer miljø/eksternaliteter; teller ikke ubetalt husarbeid; utelater svart økonomi; verdsetter offentlig produksjon til kostnad; fanger ikke fritid/helse. **Realstørrelser vs. nominelle:** reelt BNP (fast pris) vs. nominelt; realrente = nominell rente − inflasjon; reallønn $w = W/P$. **Produksjonsgap:** $\frac{Y - \bar{Y}}{\bar{Y}}$ der $\bar{Y}$ = normal-/potensielt BNP; positivt = høykonjunktur, negativt = lavkonjunktur. Regneprosedyre + fortegnstolkning.
- **Oppgavesjangre:** A + G + H. Mønstereksempel: «Faktisk BNP er 2 100 mrd. og potensielt BNP 2 000 mrd. Beregn produksjonsgapet, avgjør konjunktursituasjonen, og gjør rede for to grunner til at BNP er et mangelfullt velferdsmål.» (Gap $=+5\%$, høykonjunktur.)
- **Typiske feil:** Feil fortegn på produksjonsgap (høy-/lavkonjunktur forvekslet, feilkatalog #12); blande reelt og nominelt (real vs. nominell, feilkatalog #7); tro BNP måler velferd direkte.
- **Quiz: 18 · Flashcards: 18**

**Prøve-kvote Del 7:** 4 prøver (7.A BNP-identiteten — finn manglende ledd, sjanger A+G; 7.B tre måemetoder + relaterte størrelser (NNP, disponibel inntekt), sjanger G; 7.C produksjonsgap — beregning og konjunkturtolkning, sjanger A+G; 7.D BNP som velferdsmål + real/nominell drøfting, sjanger G+H).

---

### Del 8 — Keynes-kryss og multiplikator *(prioritet: PERFEKT — den tyngste langsvaren)*

#### Kapittel 8.1: Keynes-modellen: likevekts-BNP i to steg

- **id:** `sok3500-bi-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `sok3500-bi-7-1`
- **Kapitteltype:** teori
- **description:** Kjerneteknikken i faget: sett konsumfunksjonen inn i likevektsbetingelsen Y = PAE, løs for likevekts-BNP i to steg, og tegn Keynes-krysset med 45°-linja.
- **Eksamensbelegg:** Keynes-kryss (likevekts-BNP) i **7/7** — den tyngste makro-langsvaren, sjanger B. Prioritet: **perfekt**. Kalibrert case: $C_0=200$, $a=0{,}6$, $I=300$, $G=400$, $T=250$ → $Y^*=... $ (forfatter velger nye tall).
- **Innholdskontrakt:** **Modellen:** likevekt $Y = \text{PAE}$; $\text{PAE} = C + I + G + NX$ (lukket: $C + I + G$); konsumfunksjon $C = C_0 + a(Y - T)$, $0 < a < 1$ (**$a$ = marginal konsumtilbøyelighet**, presiseres i symbol-lista). **Regneprosedyre i to steg** (sensor krever mellomsteg): (1) sett konsumfunksjonen inn i likevektsbetingelsen: $Y = C_0 + a(Y-T) + I + G$; (2) samle Y-leddene og løs: $Y^*(1-a) = C_0 - aT + I + G$ ⇒ $Y^* = \frac{C_0 - aT + I + G}{1-a}$. **Figur (TEGN):** $Y$ horisontalt, PAE vertikalt; 45°-linja $Y = \text{PAE}$; PAE-kurven med stigningstall $a$ og konstantledd; likevekt der de krysser (A). Investering rentefølsom: $I = I_0 - v \cdot r$ (rente ↑ ⇒ I ↓ ⇒ PAE-kurven ned).
- **Oppgavesjangre:** B. Mønstereksempel: «Gitt $C = 150 + 0{,}75(Y - T)$, $I = 250$, $G = 350$, $T = 200$. Beregn likevekts-BNP i to steg og illustrer likevekten i et Keynes-diagram med 45°-linja.» ($Y^* = \frac{150 - 150 + 250 + 350}{0{,}25} = 2400$.)
- **Typiske feil:** Hoppe over mellomstegene (sensor krever to steg); glemme skatteleddet $-aT$; feil 45°-linje eller umerket figur; forveksle autonomt konsum $C_0$ og marginal konsumtilbøyelighet $a$.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 8.2: Multiplikatoren: skatt, import og balansert budsjett

- **id:** `sok3500-bi-8-2` · **number:** 8.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok3500-bi-8-1`
- **Kapitteltype:** teori
- **description:** Multiplikatorprosessen forklart runde for runde, hvordan skatt og import demper den, dimensjonering av ΔG for et BNP-mål, og hvorfor balansert budsjettøkning ikke nulles ut.
- **Eksamensbelegg:** Multiplikator i **7/7** (del av Keynes-langsvaren, sjanger B); balansert budsjett-multiplikator/finanspolitisk virkemiddellære 1–2/7 (langsvar H22). Prioritet: **perfekt**. **A-innsikt-kapittel** (balansert budsjett nulles ikke ut; lavere import øker multiplikatoren).
- **Innholdskontrakt:** **Multiplikatoren:** enkel $\frac{1}{1-a}$; med skatt $\frac{1}{1-a(1-t)}$; med import $\frac{1}{1-a(1-t)+m}$ ($m$ = marginal importtilbøyelighet). **Multiplikatorprosessen verbalt (FORKLAR MEKANISME):** $\Delta G \to \Delta Y \to \Delta C = a\Delta Y \to$ ny $\Delta Y \to \dots$ — runde for runde, summen konvergerer til $\Delta G \cdot$ multiplikator. **Dimensjonering:** hvor mye må $G$ endres for ønsket $\Delta Y$? $\Delta G = \frac{\Delta Y}{\text{multiplikator}}$. **A-innsikt 1 — balansert budsjett:** en lik økning i $G$ og $T$ nulles **ikke** ut. Hele $\Delta G$ treffer etterspørselen direkte, mens $\Delta T$ bare reduserer etterspørselen med $a\cdot\Delta T$ (fordi $0<a<1$; resten treffer sparing). Nettoeffekten er positiv (balansert budsjett-multiplikator ≈ 1). **A-innsikt 2:** lavere marginal importtilbøyelighet $m$ (mindre lekkasje til utlandet) gir større multiplikator.
- **Oppgavesjangre:** B. Mønstereksempel: «Med $a = 0{,}8$: (a) beregn multiplikatoren uten skatt. (b) Myndighetene vil øke BNP med 500 av sysselsettingshensyn — hvor mye må $G$ økes? (c) Forklar hvorfor en like stor økning i $G$ og $T$ likevel gir positiv virkning på BNP.» (Multiplikator 5; $\Delta G = 100$.)
- **Typiske feil:** Anta at balansert budsjett kansellerer (feilkatalog #3 — selve A-innsikten); glemme multiplikatorrundene, bare den direkte ΔG-effekten (feilkatalog #10); feil multiplikatorformel (glemme skatte-/importdemperen); dele feil vei ved dimensjonering.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 8.3: Drill: den komplette Keynes-langsvaren

- **id:** `sok3500-bi-8-3` · **number:** 8.3 · **estimatedMinutes:** 90 · **prerequisites:** `sok3500-bi-8-2`, `sok3500-bi-7-2`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på fagets tyngste oppgave: likevekts-BNP → multiplikator → sjokk/ΔG-dimensjonering → produksjonsgap → graf → mekanisme, som den kommer på eksamen.
- **Eksamensbelegg:** Dekker sjanger B (7/7 — den tyngste makro-langsvaren, hele oppgave 3 fra V2025). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) beregn likevekts-BNP i to steg; 2) beregn multiplikatoren (med riktige dempere); 3) håndter sjokket (ΔG, ΔI, balansert budsjett) — ny likevekt; 4) evt. dimensjoner ΔG for et BNP-mål; 5) evt. beregn produksjonsgap mot potensielt BNP + konjunkturvurdering; 6) tegn Keynes-krysset med gammel A og ny B; 7) forklar multiplikatorprosessen verbalt + A-innsikt (balansert budsjett). Gjennomregnet eksamenscase med sensor-margnotater (metoderiktighet trumfer regnefeil; figur + mekanisme gir full uttelling). **10–15 oppgaver** til eksamensnivå med nyskrevne tall — inkluderer minst én full oppgave 3-klon (BNP-serie + Keynes + gap + finanspolitikk).
- **Oppgavesjangre:** B. Mønstereksempel (full kjede à la V2025): «(a) Beregn likevekts-BNP fra oppgitt konsumfunksjon. (b) Potensielt BNP er 3 000 — beregn produksjonsgapet. (c) Myndighetene vil lukke gapet med finanspolitikk — hvor mye må $G$ endres? (d) Illustrer i et Keynes-diagram og forklar multiplikatorprosessen.»
- **Typiske feil:** Alle §5-makrofeilene samlet: hoppe over mellomsteg, glemme dempere, balansert budsjett-fellen, glemte multiplikatorrunder, feil gap-fortegn, umerket figur.
- **Quiz: 18 · Flashcards: 8**

**Prøve-kvote Del 8:** 4 prøver (8.A likevekts-BNP i to steg + figur, sjanger B; 8.B multiplikatoren med skatt/import + ΔG-dimensjonering, sjanger B; 8.C balansert budsjett-multiplikator med A-innsikt-forklaring, sjanger B; 8.D full Keynes-langsvar på eksamensnivå: likevekt → gap → finanspolitikk → graf → mekanisme, sjanger B+G).

---

### Del 9 — AD-AS og konjunkturer *(prioritet: KJENNE)*

#### Kapittel 9.1: AD-AS med horisontal SRAS og tilbudssjokk

- **id:** `sok3500-bi-9-1` · **number:** 9.1 · **estimatedMinutes:** 40 · **prerequisites:** `sok3500-bi-8-1`
- **Kapitteltype:** teori
- **description:** Aggregert tilbud og etterspørsel på innføringsnivå — horisontal kortsiktig tilbudskurve — og hvordan et tilbudssjokk (oljepris) gir stagflasjon.
- **Eksamensbelegg:** AD-AS med horisontal SRAS + tilbudssjokk i V2021 (langsvar) — lavfrekvent (1/7) men gir sikre poeng når det kommer, sjanger I. Prioritet: **kjenne**. Holdens IS-RR-PK bygges IKKE på.
- **Innholdskontrakt:** **Aggregert etterspørsel (AD):** fallende i inflasjon. **Kortsiktig aggregert tilbud (SRAS):** horisontal på grunn av prisstivhet (bedrifter møter etterspørselsendringer med mengde, ikke pris, på kort sikt). **Etterspørselssjokk:** flytter AD ⇒ BNP endres, prisnivå stabilt på kort sikt (kobling til Keynes-krysset). **Tilbudssjokk (oljepris ↑):** SRAS skifter opp ⇒ inflasjon ↑ og BNP ↓ samtidig = **stagflasjon**, pengepolitisk dilemma (kobling til kap. 10.2). Figur i ord: prisnivå/inflasjon vertikalt, BNP horisontalt.
- **Oppgavesjangre:** I + H. Mønstereksempel: «En kraftig oljeprisøkning treffer økonomien. Vis i et AD-AS-diagram med horisontal SRAS hva som skjer med BNP og inflasjon, og forklar hvorfor dette skaper et dilemma for pengepolitikken.»
- **Typiske feil:** Tegne stigende SRAS på kort sikt (skal være horisontal på innføringsnivå); blande tilbuds- og etterspørselssjokk; glemme at tilbudssjokk gir *både* høyere inflasjon og lavere BNP.
- **Quiz: 16 · Flashcards: 16**

**Prøve-kvote Del 9:** 4 prøver (9.A AD-AS-oppbygging + horisontal SRAS-begrunnelse, sjanger I; 9.B etterspørselssjokk i AD-AS, sjanger I; 9.C tilbudssjokk og stagflasjon, sjanger I+H; 9.D blandet flervalg + kort langsvar, sjanger A+I).

---

### Del 10 — Inflasjon, penge- og finanspolitikk *(prioritet: KUNNE)*

#### Kapittel 10.1: Inflasjon: KPI, årsaker og kostnader

- **id:** `sok3500-bi-10-1` · **number:** 10.1 · **estimatedMinutes:** 45 · **prerequisites:** `sok3500-bi-7-2`
- **Kapitteltype:** teori
- **description:** Hva inflasjon er, hvordan den måles med KPI, hva som forårsaker den, og de fem kostnadene ved inflasjon.
- **Eksamensbelegg:** Inflasjon (definisjon, KPI, årsaker, kostnader) i **6/7** (langsvar + FV, sjanger F). Prioritet: **kunne**.
- **Innholdskontrakt:** **Inflasjon** = vedvarende vekst i det generelle prisnivået; måles med **KPI** (konsumprisindeksen, prisen på en fast varekurv). **Årsaker:** etterspørselsdrevet (høykonjunktur), kostnadsdrevet (importpriser, lønnsvekst), pengetrykking. **De fem kostnadene** (verbal drøfting): forstyrret prismekanisme (vanskeligere å lese relative priser), vilkårlig formuesomfordeling (fra kreditor til debitor), kostnader ved skattesystemet, kontantholdekostnad («skosåle-kostnad»), svekket langtidsplanlegging. Kobling: realrente = nominell − inflasjon (fra kap. 7.2).
- **Oppgavesjangre:** F. Mønstereksempel: «Gjør rede for hva inflasjon er og hvordan den måles, nevn tre årsaker, og drøft tre samfunnsøkonomiske kostnader ved høy inflasjon.»
- **Typiske feil:** Forveksle inflasjon (endring) med høyt prisnivå (nivå); blande KPI og BNP-deflator; ramse årsaker uten kostnadsdrøfting; glemme at det er *uventet* inflasjon som omfordeler formue.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 10.2: Pengepolitikk: nominelt anker og fleksibel inflasjonsstyring

- **id:** `sok3500-bi-10-2` · **number:** 10.2 · **estimatedMinutes:** 45 · **prerequisites:** `sok3500-bi-10-1`
- **Kapitteltype:** teori
- **description:** Hvorfor Norges Bank har et inflasjonsmål (nominelt anker), hva fleksibel inflasjonsstyring betyr, og stagflasjonsdilemmaet.
- **Eksamensbelegg:** Pengepolitikk (nominelt anker, inflasjonsmål, fleksibel styring, stagflasjon) i **5/7** (langsvar + FV, sjanger F). Prioritet: **kunne**.
- **Innholdskontrakt:** **Nominelt anker** = inflasjonsmålet (2 %) som forankrer forventningene. **Styringsrenten** som virkemiddel: rente ↑ ⇒ lavere etterspørsel/investering ⇒ lavere inflasjon (ekspansiv vs. kontraktiv). **Fleksibel inflasjonsstyring:** Norges Bank vekter *både* inflasjon rundt målet *og* stabil produksjon/sysselsetting (ikke streng, umiddelbar inflasjonsstyring). **Stagflasjonsdilemmaet:** ved tilbudssjokk (inflasjon opp, BNP ned samtidig) kan ikke renten løse begge problemer på én gang — å bekjempe inflasjonen forsterker nedgangen. Kobling til AD-AS (kap. 9.1) og valuta (kap. 10.3).
- **Oppgavesjangre:** F + H. Mønstereksempel: «Forklar hva et nominelt anker er, hva fleksibel inflasjonsstyring innebærer, og hvorfor et tilbudssjokk setter sentralbanken i et dilemma.»
- **Typiske feil:** Tro at høyere rente øker investeringene (feilkatalog #9); framstille Norges Bank som streng inflasjonsstyrer (den er fleksibel); glemme dilemma-poenget ved stagflasjon; forveksle penge- og finanspolitikk.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 10.3: Valutakurs, KKP og konkurranseevne

- **id:** `sok3500-bi-10-3` · **number:** 10.3 · **estimatedMinutes:** 45 · **prerequisites:** `sok3500-bi-10-2`
- **Kapitteltype:** teori
- **description:** Valutakursen, kjøpekraftsparitet (loven om én pris), og hvordan kronekursen henger sammen med konkurranseevne og pengepolitikk.
- **Eksamensbelegg:** Valutakurs/KKP/konkurranseevne i **6/7** (mest FV, sjanger F/A) — retning på konkurranseevne er en fast flervalgs-felle. Prioritet: **kunne**. **A-innsikt-kapittel** (kronekurs via to kanaler).
- **Innholdskontrakt:** **Valutakurs** $E = P/P^*$ (hjemlig prisnivå relativt til utenlandsk). **Kjøpekraftsparitet (KKP)/loven om én pris:** $P = E \cdot P^*$ — samme vare koster det samme målt i felles valuta. Realvalutakurs $\varepsilon = E \cdot P^*/P$. **Konkurranseevne:** **svakere krone styrker eksportkonkurranseevnen** (norske varer billigere ute) og gir **importert inflasjon** (importvarer dyrere); sterkere krone motsatt. **A-innsikt — kronekursen og pengepolitikken:** Norges Bank vektlegger kronekursen fordi den påvirker inflasjonen gjennom **to kanaler samtidig**: (i) importert inflasjon (svak krone → dyrere import → høyere KPI) og (ii) etterspørselskanalen (svak krone → sterkere eksport/svakere import → høyere samlet etterspørsel). Dette forankrer Norges Bank som *fleksibel* inflasjonsstyrer.
- **Oppgavesjangre:** A + F. Mønstereksempel: «Kronen svekker seg. Forklar hva som skjer med norske eksportbedrifters konkurranseevne og med prisveksten, og gjør rede for de to kanalene kronekursen påvirker inflasjonen gjennom.»
- **Typiske feil:** Retningsfeil — tro at sterkere krone/høyere rente styrker eksportkonkurranseevnen (den svekker den, feilkatalog #6); bare nevne den ene inflasjonskanalen; blande nominell og real valutakurs.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 10.4: Arbeidsmarked, ledighet og Phillipskurven

- **id:** `sok3500-bi-10-4` · **number:** 10.4 · **estimatedMinutes:** 45 · **prerequisites:** `sok3500-bi-1-1`
- **Kapitteltype:** teori
- **description:** Arbeidstilbud som funksjon av reallønn, hvorfor ledigheten aldri er null, de to måemetodene (AKU vs. NAV), frontfagsmodellen og den kortsiktige Phillipskurven.
- **Eksamensbelegg:** Arbeidsmarked i **5/7** (mest FV, langsvar V22, sjanger I); Phillipskurven 2/7 (kun FV). Prioritet: **kunne**.
- **Innholdskontrakt:** **Arbeidstilbud** som funksjon av reallønn $w = W/P$ (stigende: høyere reallønn trekker flere inn — substitusjonseffekt dominerer normalt). **Ledighet aldri null:** friksjonsledighet (jobbskifte tar tid) og strukturledighet (mismatch kompetanse/geografi). **To måemetoder:** AKU (Arbeidskraftundersøkelsen, kvartalsvis utvalg, ILO-definisjon) vs. NAV (registrert ledighet). **Frontfagsmodellen:** konkurranseutsatt sektor forhandler lønn først og setter rammen for resten (koordinert lønnsdannelse). **Kortsiktig Phillipskurve:** negativ sammenheng mellom ledighet og inflasjon på kort sikt.
- **Oppgavesjangre:** A + I + H. Mønstereksempel: «Tegn arbeidstilbudet som funksjon av reallønnen og forklar helningen, gjør rede for hvorfor det finnes ledighet selv i en høykonjunktur, og forklar forskjellen på AKU- og NAV-ledighet.»
- **Typiske feil:** Blande AKU og NAV; tro at ledigheten kan bli null; forveksle friksjons- og strukturledighet; feil helning på arbeidstilbudet.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 10.5: Finanspolitikk, handlingsregelen og pengenes funksjoner

- **id:** `sok3500-bi-10-5` · **number:** 10.5 · **estimatedMinutes:** 40 · **prerequisites:** `sok3500-bi-8-2`
- **Kapitteltype:** teori
- **description:** Finanspolitikk som konjunkturstyring, handlingsregelen og oljefondet (SPU), skillet penge-/finanspolitikk, og pengenes tre funksjoner.
- **Eksamensbelegg:** Handlingsregelen/SPU 2/7 (langsvar V23); pengenes tre funksjoner 2/7 (FV); finanspolitisk virkemiddellære (kobling til Keynes). Prioritet: **kjenne** (lavfrekvente, sikre poeng).
- **Innholdskontrakt:** **Finanspolitikk:** offentlige utgifter/skatter som virkemiddel (ekspansiv $\Delta G>0$/$\Delta T<0$ i lavkonjunktur; motsatt i høykonjunktur) — kobling til Keynes-multiplikatoren (kap. 8.2); automatiske stabilisatorer nevnes. **Skillet penge-/finanspolitikk:** sentralbank vs. regjering/Storting. **Handlingsregelen:** bruk over tid tilsvarende forventet realavkastning av Statens pensjonsfond utland (SPU) — tidligere 4 %, nå ~3 % — jevn innfasing av oljepenger for å unngå overoppheting og hollandsk syke. **Pengenes tre funksjoner:** byttemiddel, verdimåler (regneenhet), verdioppbevarer.
- **Oppgavesjangre:** A + I + H. Mønstereksempel: «Forklar hvordan finanspolitikken kan brukes til å stabilisere konjunkturene, hva handlingsregelen går ut på, og hvorfor jevn innfasing av oljepenger er ønskelig.»
- **Typiske feil:** Forveksle penge- og finanspolitikk (hvem gjør hva); feil prosentsats/formål for handlingsregelen; glemme koblingen til multiplikatoren; ufullstendig liste over pengenes funksjoner.
- **Quiz: 16 · Flashcards: 16**

**Prøve-kvote Del 10:** 4 prøver (10.A inflasjon — KPI, årsaker, fem kostnader, sjanger F; 10.B pengepolitikk — nominelt anker, fleksibel styring, stagflasjon, sjanger F; 10.C valuta/KKP/konkurranseevne med retningsfeller og to-kanal-innsikten, sjanger A+F; 10.D arbeidsmarked + finanspolitikk/handlingsregel blandet, sjanger I+H).

---

### Del 11 — Integrert flervalgstrening

> Flervalg er 1/3 av karakteren og blander mikro og makro i hvert sett. Denne
> modulen trener nettopp den tverrgående gjenkjennings- og regnefarten som ikke
> dekkes av de domenevise teorikapitlene. Høy quiz-kvote, lav flashcard-kvote.

#### Kapittel 11.1: Flervalgsdrill mikro: regne + definisjon + feller

- **id:** `sok3500-bi-11-1` · **number:** 11.1 · **estimatedMinutes:** 70 · **prerequisites:** `sok3500-bi-3-4`
- **Kapitteltype:** drill
- **description:** Ren flervalgsdrill på hele mikropensumet — regne-flervalg (P*/X*, monopol, kollektivt gode), definisjons-flervalg og de faste distraktorfellene.
- **Eksamensbelegg:** Dekker mikro-halvdelen av oppgave 1 (~4–5 av 10 spørsmål hvert sett, sjanger A). Prioritet: **perfekt**.
- **Innholdskontrakt:** Systematisk rotasjon av alle mikro-flervalgsundertyper: regne-flervalg (FK-likevekt, monopoltilpasning, optimalt kollektivt gode, komparativt fortrinn), definisjons-flervalg (KO/PO/SO, elastisitet, substitusjons-/inntektseffekt, Pareto, deskriptivt vs. normativt, prisdiskriminering 1./3. orden, Nash), «hvilket utsagn er feil» (monopol vs. FK, MR vs. pris, eksternalitetsretning). Kort løsningskommentar per spørsmål (hvorfor riktig, hvorfor distraktorene er feil). **20+ oppgaver** i flervalgsformat med nyskrevne tall.
- **Oppgavesjangre:** A (mikro). Mønstereksempel: «Hvilket utsagn om perfekt prisdiskriminering er riktig? (a) Det gir mindre kvantum enn enkel monopolpris (b) Det fjerner dødvektstapet, men konsumentene taper hele overskuddet (c) Det er en Paretoforbedring (d) Marginalinntekten ligger under etterspørselen.» (svar: b.)
- **Typiske feil:** Alle mikro-distraktorfellene samlet: 1./3.-ordens prisdiskr., Pareto-fellen, MR=pris, eksternalitetsretning, deskriptivt/normativt.
- **Quiz: 28 · Flashcards: 8**

#### Kapittel 11.2: Flervalgsdrill makro + blandet: regne + definisjon + feller

- **id:** `sok3500-bi-11-2` · **number:** 11.2 · **estimatedMinutes:** 70 · **prerequisites:** `sok3500-bi-8-3`, `sok3500-bi-10-3`
- **Kapitteltype:** drill
- **description:** Ren flervalgsdrill på hele makropensumet pluss blandede sett som speiler den reelle oppgave 1 — 10 spørsmål på tvers av mikro og makro.
- **Eksamensbelegg:** Dekker makro-halvdelen av oppgave 1 (~5–6 av 10) + komplette blandede 10-spørsmålssett (sjanger A). Prioritet: **perfekt**.
- **Innholdskontrakt:** Rotasjon av alle makro-flervalgsundertyper: regne-flervalg (likevekts-BNP, manglende nasjonalregnskapsledd, produksjonsgap %, ΔG for ΔY, multiplikator), definisjons-flervalg (KKP, nominelt anker, ekspansiv/kontraktiv politikk, pengenes funksjoner, frontfagsmodell, produksjonsgap), «hvilket utsagn er feil» (valuta/konkurranseevne-retning, real vs. nominell, rente/investering/nettoeksport). Avsluttes med **2–3 komplette blandede 10-spørsmålssett** (mikro + makro) som simulerer oppgave 1 under tidspress. **20+ oppgaver**.
- **Oppgavesjangre:** A (makro + blandet). Mønstereksempel: «Realrenten er (a) nominell rente pluss inflasjon (b) nominell rente minus inflasjon (c) lik inflasjonen (d) nominell rente delt på inflasjonen.» (svar: b.)
- **Typiske feil:** Alle makro-distraktorfellene: valuta-/renteretning, real vs. nominell, gap-fortegn, glemme multiplikatordempere, manglende nasjonalregnskapsledd.
- **Quiz: 28 · Flashcards: 8**

**Prøve-kvote Del 11:** 4 prøver (11.A mikro-flervalgssett à 10 spørsmål, sjanger A; 11.B makro-flervalgssett à 10 spørsmål, sjanger A; 11.C blandet flervalgssett à 10 (eksamensmal), sjanger A; 11.D fartsdrill — 10 regne-flervalg under tidspress, sjanger A).

---

### Del 12 — Eksamenstrening

> Tre komplette øvingseksamener i tredelt V2025-mal: **oppgave 1 = 10 flervalg**,
> **oppgave 2 = obligatorisk langsvar**, **oppgave 3 = langsvar**, hver del 1/3.
> Løsningsforslag som fullstendige modellbesvarelser (A-nivå) i eget `collapsible`
> per oppgave, med `tip`-notat om vekting og A-innsikt-momentene.

#### Kapittel 12.1: Øvingseksamen 1 — V2025-malen (mikro-langsvar + makro-langsvar)

- **id:** `sok3500-bi-12-1` · **number:** 12.1 · **estimatedMinutes:** 90 · **prerequisites:** `sok3500-bi-11-2`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett tredelt sett i ny mal: 10 blandede flervalg + obligatorisk mikro-langsvar (overskudd + monopol/effektivitetstap + prisdiskr.) + makro-langsvar (Keynes + gap + finanspolitikk).
- **Eksamensbelegg:** Speiler V2025-settet (beste enkeltprediktor): oppgave 1 = 10 flervalg (mikro + makro), oppgave 2 = mikro-langsvar, oppgave 3 = makro-langsvar. Alle deler obligatoriske. Sjanger A + C + D + E + B + G.
- **Innholdskontrakt:** Oppgave 1: 10 nyskrevne flervalg fordelt ~5 mikro/5 makro fra hele pensum. Oppgave 2 (mikro): FK-overskudd → monopoltilpasning → dødvektstap → perfekt prisdiskriminering med Pareto-vurdering. Oppgave 3 (makro): BNP-serie/nasjonalregnskap → Keynes-likevekt → produksjonsgap → finanspolitisk stabilisering → graf. Fullstendige modellbesvarelser med «regn + tegn + forklar», A-innsikt-momenter markert, vektings-tips.
- **Oppgavesjangre:** A, C, D, E, B, G. Mønstereksempel: hele settet er mønstereksemplet.
- **Typiske feil:** Tidsstyring (1/3 per del); hoppe over figur/mekanisme i langsvar; la flervalg stå tomt.
- **Quiz: 12 · Flashcards: 5**

#### Kapittel 12.2: Øvingseksamen 2 — makrotung variant

- **id:** `sok3500-bi-12-2` · **number:** 12.2 · **estimatedMinutes:** 90 · **prerequisites:** `sok3500-bi-12-1`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett tredelt sett med makrotungt langsvar: inflasjon/pengepolitikk + Keynes med balansert budsjett.
- **Eksamensbelegg:** Speiler variasjonsbredden i 3442-kjernen (à la V2023/H2023): oppgave 2 = makro (inflasjon + pengepolitikk + valuta), oppgave 3 = Keynes med balansert budsjett-multiplikator. Sjanger A + F + B.
- **Innholdskontrakt:** Oppgave 1: 10 flervalg. Oppgave 2 (makro-verbal): inflasjon (KPI, årsaker, kostnader) + nominelt anker + fleksibel inflasjonsstyring + kronekursens to kanaler (A-innsikt). Oppgave 3 (makro-regn): Keynes-likevekt + multiplikator + balansert budsjett (A-innsikt: nulles ikke ut) + graf. Modellbesvarelser med vektings-tips.
- **Oppgavesjangre:** A, F, B. Mønstereksempel: hele settet.
- **Typiske feil:** Balansert budsjett-fellen; ensidig kronekurs-kanal; verbal oppgave uten struktur.
- **Quiz: 12 · Flashcards: 5**

#### Kapittel 12.3: Øvingseksamen 3 — mikrotung variant med ny-2025-temaer

- **id:** `sok3500-bi-12-3` · **number:** 12.3 · **estimatedMinutes:** 90 · **prerequisites:** `sok3500-bi-12-2`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett tredelt sett med mikrotungt langsvar og flervalg som vekter de nye 2025-temaene (handel, spill, kollektive goder, eksternaliteter).
- **Eksamensbelegg:** Speiler mikrotunge sett (à la V2024/H2022) + regimeskiftets nye flervalgstemaer: oppgave 2 = FK/overskudd/makspris, oppgave 3 = monopol/prisdiskr./Pareto. Sjanger A + E + H + C + D + J.
- **Innholdskontrakt:** Oppgave 1: 10 flervalg med tung vekt på ny-2025-temaer (komparativt fortrinn, Nash-likevekt, optimalt kollektivt gode, eksternalitetsretning) blandet med kjerne. Oppgave 2 (mikro): FK-likevekt → overskudd → markedsskift → makspris med tvetydig velferd (A-innsikt). Oppgave 3 (mikro): monopol → dødvektstap → prisdiskriminering → Pareto. Modellbesvarelser med vektings-tips.
- **Oppgavesjangre:** A, E, H, C, D, J. Mønstereksempel: hele settet.
- **Typiske feil:** Handelsmønster fra absolutt i stedet for komparativt fortrinn; makspris «alltid bra»; Pareto-fellen ved prisdiskriminering.
- **Quiz: 12 · Flashcards: 5**

**Prøve-kvote Del 12:** ingen (delen ER de tre komplette øvingseksamenene — jf. §4).

---

## 4. Kvotesammendrag (AUTORITATIV for alle senere faser)

Kvotene er **minimum** per kapittel; forfatteren kan overskyte, aldri
underskride. Fordelingen speiler frekvens og natur: perfekt-delene (1–3, 7–8) og
flervalgstreningen (11) bærer tyngden av quiz, fordi flervalg er 1/3 av eksamen.
Flashcard-tettheten er høyest i de begrepsrike teorikapitlene (begge domener har
mye fast terminologi), lavest i drill/øvingseksamen. Denne dobbeltboka bærer mer
begrepsstoff enn et rent regnefag, derfor ligger flashcards godt over 500-gulvet.

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1–0.3 | 12+20+12 = **44** | 14+12+14 = **40** | 0 (metadel) |
| 1 | 1.1–1.4 | 20+20+18+18 = **76** | 22+20+18+8 = **68** | 4 |
| 2 | 2.1–2.3 | 20+18+16 = **54** | 22+18+8 = **48** | 4 |
| 3 | 3.1–3.4 | 20+18+18+16 = **72** | 20+18+18+8 = **64** | 4 |
| 4 | 4.1–4.2 | 16+16 = **32** | 18+16 = **34** | 4 |
| 5 | 5.1 | **18** | **16** | 4 |
| 6 | 6.1 | **18** | **16** | 4 |
| 7 | 7.1–7.2 | 20+18 = **38** | 22+18 = **40** | 4 |
| 8 | 8.1–8.3 | 22+20+18 = **60** | 22+20+8 = **50** | 4 |
| 9 | 9.1 | **16** | **16** | 4 |
| 10 | 10.1–10.5 | 18+18+18+16+16 = **86** | 18+18+18+18+16 = **88** | 4 |
| 11 | 11.1–11.2 | 28+28 = **56** | 8+8 = **16** | 4 |
| 12 | 12.1–12.3 | 12+12+12 = **36** | 5+5+5 = **15** | 0 (3 øvingseksamener) |
| **Sum** | **34 kap.** | **606 ≥ 600 ✓** | **511 ≥ 500 ✓** | **40 prøver + 3 ØE** |

**Summeringskontroll:** Quiz $= 44+76+54+72+32+18+18+38+60+16+86+56+36 = \mathbf{606}$.
Flashcards $= 40+68+48+64+34+16+16+40+50+16+88+16+15 = \mathbf{511}$.
Prøver $= 4 \times 10$ temadeler $= \mathbf{40}$, pluss 3 komplette øvingseksamener.

Perfekt-delene (1, 2, 3, 7, 8) + flervalgstreningen (11) står for **356 av 606
quiz** (59 %) — i tråd med at disse temaene avgjør karakteren og at flervalg er
1/3 av eksamen.

---

## 5. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–11, 40 totalt)

Hver prøve består av nyskrevne oppgaver i eksamens sjangre, med løsningsforslag
(modellbesvarelse med «regn + tegn + forklar») og vekting. Prøvene ligger i
prøvekapitler per del (`sok3500-bi-<del>-prove`, chapterNumber `<del>.P`), jf.
byggekontrakten. Innholdet per prøve er spesifisert i **Prøve-kvote**-linjene
under hver del i §3. Oversikt:

- **Del 1–3, 7–8 (perfekt):** prøvene ender på full eksamens-langsvar-nivå
  (åpningskjede, mikro-langsvarklyngen, Keynes-langsvaren).
- **Del 4–6, 9 (kjenne, ny-2025 + AD-AS):** prøvene vekter regne-flervalg og
  korte forklaringer (optimalt kollektivt kvantum, Nash-likevekt, komparativt
  fortrinn, tilbudssjokk).
- **Del 10 (kunne):** prøvene dekker de verbale makrodrøftingene (inflasjon,
  pengepolitikk, valuta med to-kanal-innsikten, arbeidsmarked/finanspolitikk).
- **Del 11 (flervalgstrening):** prøvene ER komplette 10-spørsmålssett
  (mikro / makro / blandet / fartsdrill) som simulerer oppgave 1.

### Øvingseksamener (3 komplette sett — kap. 12.1–12.3)

Alle tre er **tredelte** i V2025-mal (hver del 1/3): **oppgave 1 = 10 flervalg**,
**oppgave 2 = obligatorisk langsvar**, **oppgave 3 = langsvar**.

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (kap. 12.1) | V2025 (beste prediktor) | 10 blandede flervalg + mikro-langsvar (overskudd → monopol/dødvektstap → perfekt prisdiskr. m/Pareto) + makro-langsvar (nasjonalregnskap → Keynes → gap → finanspolitikk → graf) |
| Øvingseksamen 2 (kap. 12.2) | Makrotung 3442-variant (V2023/H2023) | 10 flervalg + makro-verbal (inflasjon + pengepolitikk + kronekursens to kanaler) + Keynes m/balansert budsjett-multiplikator |
| Øvingseksamen 3 (kap. 12.3) | Mikrotung + ny-2025 (V2024/H2022 + regimeskifte) | 10 flervalg (tung på handel/spill/kollektive goder/eksternaliteter) + mikro-langsvar (FK/overskudd/makspris m/tvetydig velferd) + mikro-langsvar (monopol/prisdiskr./Pareto) |

Til sammen dekker de tre settene sjangrene A–J minst én gang; de nye 2025-sjangrene
(J) vektlegges i Øvingseksamen 3 og prøvene 4–6, i tråd med regimeskiftet.

---

## 6. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — den tredelte malen (10 flervalg + 2 langsvar, hver
   1/3), 3-timers skoleeksamen uten hjelpemidler fra V2025, regimeskiftet
   SØK 3442 → SØK 3500, og prognosen (fra kap. 0.1).
2. **Prioriteringskartet** — temafrekvens-tabellen som tre lesenivåer: **perfekt**
   (FK-likevekt/overskudd/effektivitet, monopol/dødvektstap/prisdiskriminering,
   nasjonalregnskap, Keynes/multiplikator, flervalgs-regnefart), **kunne**
   (inflasjon/pengepolitikk, valuta/KKP, arbeidsmarked, produksjonsgap,
   elastisitet/makspris), **kjenne** (handel, spill, kollektive goder/
   eksternaliteter, AD-AS, handlingsregel/pengefunksjoner, Pareto/deskriptivt-
   normativt).
3. **De to signaturferdighetene** — (i) flervalgshåndverket (kap. 0.2): kryss
   alltid av, tre undertyper, distraktorkatalogen; (ii) «regn + tegn + forklar
   mekanisme»-malen for langsvar (kap. 0.3).
4. **Sjangerguiden** — oppgavetypene A–J med løsningsoppskriftene fra
   drillkapitlene (1.4, 2.3, 3.4, 8.3, 11.1, 11.2) i kortform: markedslikevekt +
   skift, overskuddsgeometri, monopolkjeden, Keynes-kjeden, flervalgsstrategien.
5. **A-innsikt-listen** — de kontraintuitive toppkarakter-momentene samlet:
   balansert budsjettøkning nulles ikke ut (a < 1); perfekt prisdiskriminering =
   SO som frikonkurranse, men ikke Paretoforbedring (konsumentene taper alt); MR
   under og brattere enn etterspørselen; lavere importtilbøyelighet øker
   multiplikatoren; kronekursen påvirker inflasjonen via to kanaler; makspris-
   velferd er tvetydig; negativ eksternalitet ⇒ for mye produsert.
6. **Feilkatalogen** — de 12 typiske feilene fra §5 samlet, hver med henvisning
   til kapitlet som forebygger den (1./3.-ordens prisdiskr., Pareto-fellen,
   balansert budsjett, elastisitet, makspris, valuta-/renteretning, real vs.
   nominell, deskriptivt/normativt, MR=pris, glemte multiplikatorrunder,
   gap-fortegn, nasjonalregnskapsledd).
7. **Formelark i emnets notasjon** — én side, delt mikro/makro: mikro
   ($P=a-bX$, $P=c+dX$, $X^*=\frac{a-c}{b+d}$, KO/PO/SO, $\text{MR}=a-2bX$,
   $L=\frac{P-\text{MC}}{P}$, vertikal MBV-sum for kollektivt gode); makro
   ($Y=C+I+G+X-Q$, $C=C_0+a(Y-T)$, $Y^*=\frac{C_0-aT+I+G}{1-a}$, multiplikatorer
   $\frac{1}{1-a}$ / $\frac{1}{1-a(1-t)}$ / $\frac{1}{1-a(1-t)+m}$, produksjonsgap
   $\frac{Y-\bar Y}{\bar Y}$, $E=P/P^*$, realrente = nominell − inflasjon) — med
   markering av hva som skal utledes/tolkes vs. kun brukes, og en tydelig advarsel
   om at $a$ betyr ulike ting i mikro og makro.
8. **Studieløp** — anbefalt progresjon (8-ukers og 3-ukers intensivvariant):
   Del 0 → 1 → 2 → 3 (mikrokjernen) → 7 → 8 (makrokjernen) → 10 → 4–6 + 9
   (billige tilleggspoeng) → Del 11 flervalgstrening løpende → Del 12
   øvingseksamener de siste ukene under tidspress (3 timer, 1/3 per del).

---

## 7. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først:** `TextbookCourse`-oppføring for `sok3500-bi` med alle 34
   kapitler (id/number/title/description/estimatedMinutes/topics/
   competenceGoals/prerequisites/linkedChapterId) etter mønster
   `COURSE_BI_OKONOMI` i `src/lib/data/textbook-courses-matte.ts`; `sectionNames`
   fra makrostruktur-tabellen (§2). **Number SKAL være del-basert («8.2»), aldri
   lineær** — bokforsiden grupperer på `number.split('.')[0]`.
2. **Del 0** (kap. 0.1–0.3) — etablerer sjangernavnene A–J, frekvenstallene,
   flervalgsstrategien og «regn+tegn+forklar»-malen som resten refererer til.
3. **Mikrokjernen i avhengighetsrekkefølge:** Del 1 → 2 → 3 (FK-apparatet +
   monopol som bærer mikro-langsvaret).
4. **Ny-2025-mikro:** Del 4 → 5 → 6 (eksternaliteter/kollektive goder → spill →
   handel).
5. **Makrokjernen:** Del 7 → 8 (nasjonalregnskap → Keynes), deretter Del 9 → 10
   (AD-AS → inflasjon/penge-/finanspolitikk).
6. **Del 11** (flervalgstrening) etter at begge domener står — gjenbruker alt.
7. **Del 12** (øvingseksamenene) til slutt — bygges av én agent som leser hele
   skjelettet.
8. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert;
   prøvene (§5) i prøvekapitler per del (`sok3500-bi-<del>-prove`, chapterNumber
   `<del>.P`) per byggekontrakten.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering:** hver kapittelfil parser med `json.load`/`JSON.parse`
  (generer via `json.dump`; escape `"` i norske sitattegn); `npm run build` grønn.
- [ ] **LaTeX:** alle formler i `$...$`/`$$...$$` med dobbel backslash i JSON
  (`\\frac`); ingen unicode-brøker; konsistent $P^*$, $X^*$, MR, MC, $Y$, PAE.
- [ ] **Notasjonskonsistens:** tekstsøk over alle `sok3500-bi`-filer.
  **Forbudte termer** (over nivået — aldri testet): «IS-LM», «LM-kurven», «RR-kurve»,
  «renteregel», «$z^\pi$»/«$z^W$» (Holden-sjokk), «Lagrange», «Edgeworth», «Slutsky»,
  «Cournot», «Stackelberg», «SPNE», «Coase» (unntatt evt. én setning som markerer at
  det IKKE bygges på). **Påkrevd/konsistent:** mikro $P$, $X$, $P=a-bX$, $P=c+dX$,
  KO/PO/SO, MR (dobbelt så bratt), MC, dødvektstap; makro $Y$, PAE, $C=C_0+a(Y-T)$
  med $a$ = marginal konsumtilbøyelighet, multiplikator, produksjonsgap.
- [ ] **Symbol-kollisjon $a$:** hvert makrokapittel som bruker konsumfunksjonen
  har en Symbol- og formelliste som eksplisitt sier at $a$ her = marginal
  konsumtilbøyelighet (ikke linjeparameteren fra mikro).
- [ ] **«Regn + tegn + forklar»:** hvert eksempel/løsningsforslag med figur har
  både figurbeskrivelse i ord (akser, kurver, A→B, arealer navngitt) og verbal
  mekanisme; alle elastisiteter og delingsresultater tolkes verbalt; utregning i
  minst to steg.
- [ ] **A-innsikt-bokser:** til stede i kap. 1.3 (makspris tvetydig), 3.1 (MR<P),
  3.3 (perfekt prisdiskr. ikke Pareto), 8.2 (balansert budsjett + import), 10.3
  (kronekurs to kanaler) — hver som egen `tip` med tittel «A-innsikt».
- [ ] **Kapittel-DNA:** hvert teorikapittel har Eksamensvinkel-`tip` (med tallene
  fra dette skjelettet), Forkunnskaper-blokk med lenker + Symbol- og
  formelliste-`collapsible` (per delkapittel), Typiske feil-`warning`, 2–4
  eksempler (siste på eksamensnivå), 6–12 øvinger med `solution` + `hints`,
  repetisjons-`collapsible`; drillkapitler har løsningsoppskrift + sensor-
  kommentert case + 10–15 oppgaver; øvingseksamener er tredelte med
  modellbesvarelser per oppgave.
- [ ] **Quiz-sum ≥ 606 og flashcard-sum ≥ 511** per kvotetabellen (§4 er
  autoritativ — ikke overstyr i prompt). Flervalg-quizene i Del 11 og 0.2 skal
  faktisk være i flervalgsformat med ett riktig alternativ (`options[0]`).
- [ ] **Prøver:** 4 per temadel 1–11 (40 stk) + 3 øvingseksamener; settene og
  prøvene dekker samlet sjangrene A–J minst én gang.
- [ ] **Opphavsrett:** ALLE oppgaver nyskrevne — egne tall, egne case og bransjer,
  egne formuleringer; ingen formuleringer fra reelle sett eller sensorveiledninger
  (skjelettets mønstereksempler er selv omskrivninger og skal varieres videre,
  ikke kopieres inn); kalibreringsverdiene brukes kun til vanskelighetsvalg, aldri
  som oppgavetall.
- [ ] **Verifiser rendering:** prod-server + curl mot kapittel- og narrativ-ruter
  (200 + kapittelspesifikk streng), jf. lærdommen om `getChapterMeta`.

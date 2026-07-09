# Bokskjelett: SØK2010 Banking — eksamensrettet lærebok

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
> `EKSAMENSANALYSE.md` (~17 oppgavesett V2014–V2024, siste ~8 år grundig; 8
> sensorveiledninger/løsningsforslag V2016–V2024 lest komplett). Arketype:
> **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori/drill/
> øvingseksamen) er obligatoriske og gjentas ikke her. Emnet har i tillegg et
> tydelig **drøftingselement** (Mork-epokens store finanskrise-/finanssystem-essay
> på 50 %, og Wang-epokens artikkelbaserte flervalg/drøfting); for det ene
> sjangerkapitlet som drilles spesifikt (5.2 essayet) lånes struktur fra
> `DNA-drofting.md` (oppskrift → gjennomskrevet besvarelse → momentliste-oppgaver),
> dokumentert der. Alle mønstereksempler i skjelettet er omskrivninger; forfatteren
> skal variere dem videre (egne tall, egne kontekster), aldri kopiere inn ordrett.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `sok2010` |
| Tittel | **SØK2010 Banking** (også «Bank- og finansmarkeder»/«Bank- og kredittmarkeder») |
| Institusjon | NTNU (Institutt for samfunnsøkonomi) |
| Level | `'Høyskole'` |
| Arketype | Regnefag (institusjonelt/anvendt bank- og finansmarkedsfag med en fast kvantitativ modellkjerne) med drøftingselement (finanskrise-/finanssystem-essay + artikkelbasert flervalg) |
| Antall kapitler | **27** (1 eksamenskart + 5 renter/obligasjoner + 7 bank som institusjon + 5 regulering/sentralbank + 4 stabilitet/kriser/teknologi + 5 eksamenstrening) |
| Estimert totaltid | **2 240 min ≈ 37 timer** |
| Quiz totalt | **538** (krav ≥500) |
| Flashcards totalt | **576** (krav ≥500) |

**Pitch (ett avsnitt):** SØK2010 «Banking» er NTNUs brede innføringsemne i
**bankvirksomhet, finansiell formidling og finansmarkeder**, og eksamen står på
fire søyler som gjentar seg år etter år: (1) en **kvantitativ rente- og
obligasjonskjerne** (neddiskontering, obligasjonsprising, yield, forward-renter —
delt med SØK2005), (2) **banken som institusjon** (balanse, funksjoner, risiko og
selve navlestrengen: **asymmetrisk informasjon** med de formelle modellene
to-typemodell, delegert overvåking og Diamond–Dybvig), (3) **regulering og
sentralbank** (bank run, innskuddsgaranti → regulering, kapital-/likviditetskrav,
Basel III, styringsrente og åpne markedsoperasjoner), og (4) **finansiell
stabilitet, kriser og teknologi** (finanskrisen 2007–09, securitisering/MBS,
krypto). Emnet har **to eksamensstiler** som boka må trene begge: **Mork-epoken
(2014–2020)** med 5–6 korte oppgaver + ett stort **essay på 50 %**, og
**Wang-epoken (2021–2024)** med begreps-/kortsvarsblokk + tunge **modelloppgaver**
(to-typemodell, delegert overvåking, Diamond–Dybvig, intertemporalt valg) + i 2024
en **flervalgsdel om pensumartikler**. Denne boka driller de fem ferdighetene som
avgjør karakteren: **skille + klassifisere uheldig utvalg vs. moralsk hasard** og
foreslå riktig virkemiddel (~90 %-gjengangeren), **obligasjonsprising med
pris–rente-inversen** (nullkupong/kupong/yield), **bankens balanse** (hvorfor
innskudd = gjeld, lån = eiendel, EK på passivasiden) med risiko på hver side, **de
tre formelle modellene** (to-typemodell, delegert overvåking, Diamond–Dybvig) med
tallcase, og **koblingen sikkerhetsnett → regulering** (innskuddsgaranti fjerner
overvåkingsinsentiv → moralsk hasard → tilsyn; RWA vs. leverage ratio; Basel III).

**Kritisk engelsk-terminologiregel (gjelder HELE boka):** De fleste settene i
arkivet er på **engelsk** (ofte med parallell bokmål/nynorsk), og studenten skal
kunne besvare på engelsk eksamen. Boka skrives på **norsk bokmål**, men skal
**konsekvent oppgi engelsk fagterm i parentes ved første forekomst av hvert
nøkkelbegrep** og gjenta den i formelark/begrepslister: uheldig utvalg (*adverse
selection*), moralsk hasard (*moral hazard*), pant (*collateral*),
løpetidstransformasjon (*maturity conversion*), likviditetsforsyning (*liquidity
provision*), risikovektede eiendeler (*risk-weighted assets, RWA*), gjeldsgrad/
uvektet kapitalkrav (*leverage ratio*), yield to maturity, bank run, securitisering
(*securitization*), sikkerhetsnett (*safety net*), lender of last resort osv.

**Kritisk avgrensnings- og komplementregel (gjelder HELE boka):** SØK2010 deler
den **kvantitative rente- og obligasjonsverktøykassen** med NTNUs **SØK2005
Finansmarkeder** (neddiskontering, obligasjonsprising, yield to maturity,
forward-renter/terminstruktur, pris–rente-inversen). Der de to møtes, gjør SØK2010
verktøyet **kompakt** og **kryssrefererer til SØK2005** med markdown-lenker
(`[tittel](/bok/sok2005/<chapterId>)`) for den fullstendige utledningen, og bruker
plassen på **bank-vinkelen** som gjør SØK2010 unikt: banken som institusjon,
asymmetrisk informasjon med formelle modeller, regulering, sentralbank og
finansiell stabilitet. Boka skal **ikke bygge ut** porteføljeteori/CAPM,
opsjons-/derivatprising (binomisk/Black–Scholes) eller aksjeverdivurdering
(dividendemodeller) — det er SØK2005s domene og forekommer ikke som selvstendige
oppgaver i SØK2010-arkivet; nevnes kun kort som avgrensning i Del 0 og der
markedseffisiens berøres. Se §7 for den fullstendige arbeidsdelingstabellen.

**Kritisk notasjonsregel (gjelder HELE boka)** — arkivets (oftest engelske)
notasjon brukes nøyaktig:

- **Renter/obligasjon:** rente $i$ / $r$, yield $y$, pålydende (*face value*)
  $FV$ / $F$, pris $P$, løpetid $n$ / $T$, kredittspread. Nullkupong:
  $P = FV/(1+i)^n$. Forward: $(1+y_n)^n = \prod_k (1+r_k)$.
- **Kredittmodell (to-typemodell):** investering $I$, egenkapital $E$, lån
  $L = I - E$, rente $r$, utbetaling risikabelt prosjekt $U$ (med sannsynlighet
  $p$, ellers 0), utbetaling sikkert prosjekt $A$ (evt. $V$), andel sikre $s$
  (evt. $\alpha$), pant/collateral $C$.
- **Delegert overvåking:** overvåkingskostnad $c$, straffeterskel/pålydende lån
  $F$, antall långivere, mislighold-sannsynligheter over uavhengige lån ($p^2$,
  $2p(1-p)$, $(1-p)^2$ for to lån).
- **Bank/regulering:** risikovektede eiendeler $RWA$, kapitaldekning
  $= \text{kapital}/RWA$, gjeldsgrad/leverage ratio $= \text{kapital}/
  \text{(uvektede eiendeler)}$, egenkapitalavkastning $ROE$, kjernekapital
  (*Tier 1*).
- **Intertemporalt / Diamond–Dybvig:** konsum $c_1, c_2$, inntekt $y_1, y_2$,
  brutto rente $r$, nyttefunksjon (log eller $u(c) = 1 - 1/c$).

**Kritisk metoderegel (gjelder HELE boka):** Fem faste sensorkrav gjelder overalt
(fra analysen §4): **(a) vis fremgangsmåten** — «endelige svar uten
drøfting/utregning gir ikke poeng», delvis uttelling for riktig oppsett tross
regnefeil; **(b) definer, ikke forutsett** — begreper (moralsk hasard, uheldig
utvalg, insolvent/illikvid, RWA, leverage ratio, maturity conversion) defineres
presist, gjerne med ett kjennetegn eller et matematisk uttrykk; **(c) klassifiser
riktig og begrunn** — ved agentproblem både klassifisere (uheldig utvalg vs.
moralsk hasard) *og* forklare hvorfor, og foreslå riktig mottiltak; **(d) tolk
tallene økonomisk** — fortegn på deriverte ($\partial r/\partial p$), NPV,
profitt-intervaller, sannsynlighetsfordelinger oversettes til økonomisk innhold;
**(e) fullstendig virkemiddel-liste** — ved «hva kan banken gjøre?» må *hvert*
virkemiddel (overvåking, pant, screening, signalisering) forklares kort, ikke bare
listes. **Konsise, poengterte svar belønnes eksplisitt** (særlig essay og
kortsvar), og **figur der relevant** (obligasjonsmarkedet med tilbud/etterspørsel,
sentralbankens reservemarked, bankbalansen) — figur uten forklaring, eller regning
uten tolkning, er halvt svar.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): renteverktøyet i bunn (det
kvantitative fundamentet), deretter banken som institusjon (der asymmetrisk
informasjon og de formelle modellene bor), så regulering/sentralbank, til slutt
stabilitet/kriser og eksamenstreningen. Frekvensen styrer *omfanget* — asymmetrisk
informasjon (~90 %), obligasjonsprising (~80 %) og bankbalanse/regulering (~70 %)
er nivå-1-tema og får flest kapitler + drillkapittel; teknologi/forsikring er
nivå-3 og får kompakt behandling.

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. Rammer inn de **to epokene/malene** (Mork-essay 50 % vs. Wang-modeller + flervalg) og avgrenser mot SØK2005. |
| 1 | Renter og obligasjoner: den kvantitative kjernen | 5 | Neddiskontering ~90 %, obligasjonsprising + pris–rente-inversen ~80 %, yield ~55 %, forward-renter ~35 %, penger/pengeskaping ~65 %. Fast regnekjerne (delt med SØK2005, gjort kompakt) → 4 teorikapitler + drillkapittel. |
| 2 | Banken som institusjon: balanse, risiko og asymmetrisk informasjon | 7 | Bankbalanse ~70 %, bankfunksjoner ~65 %, **asymmetrisk informasjon ~90 % (emnets navlestreng)**, to-typemodell ~40 % (ofte 40 % av settet), delegert overvåking + Diamond–Dybvig + intertemporalt valg voksende i Wang-epoken. Nivå 1 «perfekt» → 6 teorikapitler + drillkapittel. |
| 3 | Regulering og sentralbank: sikkerhetsnettet og pengepolitikken | 5 | Bank run ~70 %, innskuddsgaranti → regulering ~65 %, kapital-/likviditetskrav ~55 %, RWA vs. leverage ratio ~35 %, sentralbank/pengepolitikk ~60 %. Bank-vinkelen som skiller SØK2010 fra SØK2005 → 4 teorikapitler + drillkapittel. |
| 4 | Finansiell stabilitet, kriser og teknologi | 4 | Finanskrisen 2007–09 ~50 % (stort essay eller flervalg), securitisering/MBS ~35 %, brannsalg/smitte ~25 %, markedseffisiens ~40 %, forsikring ~25 %, krypto/kontantløst ~30 %. Overbygningen; nivå 2–3 → 4 kompakte kapitler. |
| 5 | Eksamenstrening | 5 | Begrepsdrill (~25 gjengangere, sjanger A), **essay-sjangerkapittel** (Mork-malen, drøfting), og 3 komplette øvingseksamener som speiler begge maler (Mork 5×10 %+essay 50 %; Wang begreper+modeller+flervalg). |

**Avvik fra DNA-malen (dokumentert):**
1. DNA-en legger *alle* sjangerkapitler i siste del. Her ligger de tre
   drillkapitlene (1.5 renter/obligasjon, 2.7 kredittmodellene, 3.5 regulering/
   sentralbank) inne i sine egne deler, fordi disse tre ferdighetsklyngene er
   selve eksamensoppgavene og må drilles umiddelbart etter teorien. Del 5 beholder
   begrepsdrillen (sjanger A), essay-sjangerkapitlet og de tre øvingseksamenene.
2. DNA-en er ren regnefag. SØK2010 har et **drøftingselement** — Mork-epokens
   store finanskrise-/finanssystem-essay (50 %) og Wang-epokens artikkelbaserte
   flervalg/drøfting (sjanger N/O). Kapittel 5.2 er derfor bygget etter
   `DNA-drofting.md`s sjangerkapittel-mal (oppskrift → gjennomskrevet A-besvarelse
   med margkommentarer → momentliste-oppgaver), ikke som regnedrill. Essayet
   forankres i modell- og faktastoffet i Del 3–4 (årsaker/forløp/håndtering/
   regulering), ikke i pensumforfattere som «eiere» av begreper.
3. Del 1 (renteverktøyet) er delvis forkunnskap delt med SØK2005, men får egen
   del fordi obligasjonsprising + pris–rente-inversen er en fast, høyfrekvent
   regnesjanger i SØK2010 selv (~80 %) og fordi pengeskaping/deposit multiplier er
   SØK2010-spesifikt bankstoff som ikke ligger i SØK2005.

---

## 3. Kapitler

Feltene under følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–O) refererer til
oppgavetype-katalogen som presenteres i Del 0 (gjengitt der fra analysen §3):
**A** begrepsforklaringer, **B** obligasjonsprising/yield, **C** pris–rente med
tilbud/etterspørsel, **D** forward-renter/terminstruktur, **E** bankens balanse og
risiko, **F** asymmetrisk info — klassifisering og tiltak, **G** to-typemodell for
kredittmarkedet, **H** delegert overvåking, **I** Diamond–Dybvig/likviditets-
forsikring, **J** intertemporalt valg, **K** overinvestering/risikoskifting,
**L** sentralbank og pengepolitikk, **M** regulering/bank run/sikkerhetsnett,
**N** essay (Mork-malen), **O** flervalg om pensumartikler (Wang-malen).
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet: slik testes SØK2010

- **id:** `sok2010-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen
- **Kapitteltype:** eksamenskart
- **description:** Eksamensformen, de to epokene/malene (Mork-essay 50 % vs. Wang-modeller + flervalg), de fire søylene, temafrekvensene, sjangerkatalogen A–O og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på ~17 sett + 8 sensorveiledninger/løsningsforslag. Skal gjengi: (i) **formen**: 4 timers skriftlig skoleeksamen (09–13), karakter A–F, 7,5 studiepoeng, digital i Inspera (håndtegnede figurer/utregninger lastes opp, +15 min i V2024); **hjelpemidler = kode C**: matematisk formelsamling (Sydsæter/Strøm/Berck) + godkjent kalkulator (under korona V2020/V2021 var oppsettet hjemme/åpen bok med «gjør de forutsetningene du finner nødvendige»); oppgaveteksten oftest **engelsk**, gjerne med parallell bokmål/nynorsk, studenten kan besvare på norsk eller engelsk. (ii) **De to malene**: **Mork-malen (2014–2020)** — 5–6 korte oppgaver (definisjoner, obligasjons-/renteoppgave, sentralbank-/reguleringsoppgave, markedseffisiens-/aksjeoppgave) **pluss ett stort essay (50 %)** om et overordnet tema (finanskrisen 2007–09; moderne finanssystem vs. tradisjonell bank; aksjer/obligasjoner/banklån som finansieringsformer); **Wang-malen (2021–2024)** — begreps-/kortsvarsblokk (20–30 %) + to–tre **modelloppgaver** (kredittmarked med asymmetrisk info/to-typemodell, delegert overvåking, Diamond–Dybvig, intertemporalt valg, bankbalanse) + evt. **flervalgsdel** (V2024, 40 poeng, om pensumartikler). (iii) **Temafrekvens-tabellene** (fem spor, fra analysen §2): renter/obligasjon — neddiskontering ~90 %, obligasjonsprising + pris–rente ~80 %, yield ~55 %, forward-renter ~35 %, penger/pengeskaping ~65 %, Rule of 72 ~25 %, realrente/inflasjon ~40 %; bank/balanse — bankbalanse ~70 %, bankfunksjoner ~65 %, insolvent vs. illikvid ~45 %, leverage/gearing ~40 %, løpetids-/valuta-/renterisiko ~40 %; asymmetrisk info — uheldig utvalg + moralsk hasard ~90 %, bankens virkemidler ~75 %, to-typemodell ~40 %, delegert overvåking ~20 %, kredittrasjonering ~15 %, overinvestering ~25 %, intertemporalt valg ~25 %; regulering/sentralbank — bank run ~70 %, innskuddsgaranti → regulering ~65 %, kapital-/likviditetskrav ~55 %, RWA vs. leverage ratio ~35 %, sentralbank ~60 %, lender of last resort ~40 %, boliglånsregulering ~15 %; stabilitet/kriser/tek — finanskrisen 2007–09 ~50 %, securitisering/MBS ~35 %, brannsalg/smitte ~25 %, markedseffisiens ~40 %, Diamond–Dybvig ~25 %, teknologi/krypto ~30 %, forsikring ~25 %. (iv) At oppgavene pakkes i **aktualitet** (strømpriser, boligmarked, kryptovaluta, konkrete banker) men modellene er de samme. (v) **Sensorens metaregler** (§4): vis fremgangsmåten (svar uten utregning gir ikke poeng); definer, ikke forutsett; klassifiser + begrunn agentproblem; tolk tallene økonomisk; fullstendig virkemiddel-liste; figur der relevant; konsisitet belønnes; artikkelforankring i Wang-epoken. (vi) **Karakterskillene** (§4): bunn (E–D) = riktige definisjoner, riktig klassifisering av agentproblem, korrekt oppsett av obligasjonsprising/deltakelsesvilkår, hovedkonklusjon; midt (C) = komplett utregning (yield, forward-renter, rente-intervall frikonkurranse/monopol, sannsynlighetsfordeling i delegert overvåking), korrekt figur med skift, korrekt komparativ statikk med fortegn; topp (A/B) = **effektivitetsdrøftingen** (når subsidierer sikre prosjekter risikable, når er markedet effektivt tross asymmetrisk info), **selvoppfyllende run** og uavhengighetsantakelsen i Diamond–Dybvig, **skiller RWA fra leverage ratio** med fordeler/ulemper, kobler securitisering/repo til krisen, og skriver et **stramt, strukturert essay** med egen vurdering.
- **Innholdskontrakt:** Oppgavetype-katalogen A–O presenteres som studentens sjekkliste med typisk plassering: begrepsoppgaven (A) finnes i så å si hvert sett; obligasjonsoppgaven bygges av B/C (+ D); bankoppgaven av E + F; modelloppgavene av G/H/I/J/K; regulering/sentralbank av L/M; overbygningen som N (essay, Mork) eller O (flervalg, Wang). **Prognose for neste eksamen** (fra analysen §7, Wang-epoken mest relevant): kortsvars-/begrepsblokk (20–30 %, 6–11 begreper); modelloppgave 1 (25–40 %): kredittmarked med asymmetrisk info (to-typemodell) *eller* delegert overvåking; modelloppgave 2 (25–30 %): Diamond–Dybvig, intertemporalt valg *eller* bankbalanse; evt. flervalg (opptil 40 %) om pensumartikler. Skulle Mork-malen brukes: 5–6 korte + essay 50 %. Avslutt med **avgrensningen**: hva som IKKE er pensum (SØK2005s porteføljeteori/CAPM, derivatprising, dividendemodeller — bruk kryssbok-lenker der renteverktøyet trengs), og **leseplanen**: Del 1 er verktøy man må ha klart; Del 2 er «må perfekt» (asymmetrisk info + balanse + modeller); Del 3 er bank-vinkelen (regulering/sentralbank); Del 4 «bør kjenne»; Del 5 er ren trening.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt Mork-malen (5×10 % + essay 50 %) og 240 minutter — sett opp tidsbudsjett» og «hvilke fem ferdigheter avgjør karakteren, og i hvilket kapittel drilles de?».
- **Typiske feil:** Metafeilene: bruke tid på uforklarte figurer eller utolkede tall; forsøke å bygge obligasjonsverktøyet fra SØK2005s fulle apparat (unødvendig — gjort kompakt her); møte flervalgsdelen uten artikkelkunnskap (gjetting straffes); ikke se at emnet har to maler og trene bare den ene.
- **Quiz: 18 · Flashcards: 18** (eksamensform, de to epokene/malene, frekvenser, sjangerkatalog, metaregler, avgrensning mot SØK2005)

**Prøve-kvote Del 0:** ingen (metadel).

---

### Del 1 — Renter og obligasjoner: den kvantitative kjernen *(prioritet: perfekt/fundament — regnesjangeren)*

> **Forkunnskaps-skille mot SØK2005:** neddiskontering, obligasjonsprising, yield
> og forward-renter deles med SØK2005. Der studenten trenger den fulle utledningen
> (f.eks. yieldkurve → forward via geometrisk sammenheng), lenker boka til SØK2005
> og gjør SØK2010-varianten kompakt. SØK2010s eget bidrag på rentesiden er
> **pengeskaping/deposit multiplier** (bankstoff) og **pris–rente med tilbud og
> etterspørsel i obligasjonsmarkedet** (drøftesjanger C).

#### Kapittel 1.1: Penger, neddiskontering og nåverdi

- **id:** `sok2010-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen
- **Kapitteltype:** teori (fundament)
- **description:** Pengenes funksjoner og pengeskaping, og neddiskontering/nåverdi (NPV) som fundamentet under obligasjon, forsikring og intertemporalt valg.
- **Eksamensbelegg:** Neddiskontering/NPV ~90 % (fundamentet under alt kvantitativt); penger (byttemiddel/regneenhet/verdioppbevaring), pengeskaping og kryptovaluta ~65 % (fast begrepsgjenganger, sjanger A). Prioritet: **perfekt/fundament**.
- **Innholdskontrakt:** **Pengenes tre funksjoner** — byttemiddel (*medium of exchange*), regneenhet (*unit of account*), verdioppbevaring (*store of value*); **pengeskaping**: banker skaper penger via utlån (innskudd → utlån → nytt innskudd), **deposit multiplier** $= 1/\text{reservekravet}$ som øvre grense; kryptovaluta kort (desentralisert, ikke sentralbankpenger). **Neddiskontering og nåverdi:** nåverdien av et beløp $X$ om $n$ år ved rente $i$ er $X/(1+i)^n$; **netto nåverdi (NPV)** = neddiskontert sum av inn- minus utbetalinger; internrente = renten som gir NPV $= 0$. **Realrente vs. nominell rente** (Fisher: realrente ≈ nominell − inflasjon), hyperinflasjon. Rule of 72 (doblingstid ≈ $72/\text{rente i \%}$), enkel vs. sammensatt rente, årlig vs. månedlig forrentning (kobling til §5-feil om rentesregning). Merk hva formelsamlingen dekker (rentesformlene) vs. hva studenten selv må sette opp (den økonomiske tolkningen og oppsettet av kontantstrømmen).
- **Oppgavesjangre:** A + fundament for B. Mønstereksempel (A): «Forklar kort pengenes tre funksjoner og hvordan en forretningsbank skaper penger når den gir et lån.» Regne (B-fundament): «Hva er nåverdien av 10 000 om 5 år når renten er 4 %? Hvor lang tid tar det å doble et beløp ved 6 % rente (Rule of 72)?»
- **Typiske feil:** Blande enkel og sammensatt rente, årlig vs. månedlig rente; feil i Rule of 72; forveksle real- og nominell rente; tro at én bank isolert «skaper» penger uten multiplikatoren/reservekravet; oppgi tall uten økonomisk tolkning.
- **Quiz: 24 · Flashcards: 24**

#### Kapittel 1.2: Obligasjonsprising og pris–rente-inversen

- **id:** `sok2010-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok2010-1-1`
- **Kapitteltype:** teori
- **description:** Prising av nullkupong- og kupongobligasjoner som neddiskontert nåverdi, og den sentrale pris–rente-inversen (pris og rente beveger seg motsatt).
- **Eksamensbelegg:** ~80 % — den faste regnekjernen i de fleste sett (V2018, V2020, V2022, H2022 m.fl.). Pris–rente-inversen er eksplisitt sensor-poeng og et toppsjikt-skille (obligasjoner er ikke «bare nedsiderisiko»). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Nullkupongobligasjon:** pris $P = FV/(1+i)^n$ = neddiskontert pålydende. **Kupongobligasjon:** $P = \sum_{t=1}^{n} K/(1+i)^t + FV/(1+i)^n$ = sum av neddiskonterte kuponger + neddiskontert pålydende (geometrisk rekke; formelsamling). **Pris–rente-inversen:** høyere rente → lavere pris (og omvendt) — den viktigste kvalitative sammenhengen; forklar *hvorfor* (fremtidige beløp diskonteres hardere). **Kredittspread:** for en risikabel utsteder legges en spread til risikofri rente (høyere diskonteringsrente → lavere pris); selskapsobligasjon prises med risikofri rente + kredittspread. Poeng: en obligasjon kan **stige** i verdi før forfall når renten faller (motvekt til «obligasjon = trygg/bare nedside»). Kryssrefererer til SØK2005 for full utledning av kupongrekken; her holdes den kompakt og bank-anvendt (en bank utsteder/holder obligasjoner).
- **Oppgavesjangre:** B. Mønstereksempel: «En bank utsteder en treårig nullkupongobligasjon med pålydende 100. Diskonteringsrenten for bankens kredittvurdering er 7 %. Finn prisen, og forklar sammenhengen mellom pris og rente.»
- **Typiske feil:** Glemme pris–rente-inversen eller behandle obligasjoner som «bare nedsiderisiko» (feilkatalog §5.3); feil antall perioder i eksponenten; blande kupongrente og markedsrente/yield; glemme kredittspread for risikabel utsteder.
- **Quiz: 24 · Flashcards: 24**

#### Kapittel 1.3: Yield to maturity og obligasjonsmarkedet (tilbud/etterspørsel)

- **id:** `sok2010-1-3` · **number:** 1.3 · **estimatedMinutes:** 50 · **prerequisites:** `sok2010-1-2`
- **Kapitteltype:** teori
- **description:** Yield to maturity løst implisitt fra prisen, og obligasjonsmarkedet i en tilbuds-/etterspørselsfigur der skift leses av som pris- og renteeffekter.
- **Eksamensbelegg:** Yield ~55 % (regnes fra pris, f.eks. kjøpt til 75 % av pålydende); pris–rente med tilbud/etterspørsel er drøftesjanger C (V2022 b). Krever **figur + drøfting**. Prioritet: **perfekt/kunne**.
- **Innholdskontrakt:** **Yield to maturity (YTM)** = den renten som setter neddiskontert nåverdi av kontantstrømmene lik markedsprisen; for nullkupong løses den lukket: kjøpt til andel $\theta$ av pålydende med $n$ år igjen → $y = (1/\theta)^{1/n} - 1$ (f.eks. $\theta = 0{,}75$, $n = 8$ → $y \approx 3{,}7\%$). For kupongobligasjon løses YTM implisitt (numerisk/kalkulator). **Obligasjonsmarkedet i tilbud/etterspørsel** (pris og mengde på aksene): stigende tilbudskurve (flere vil selge/utstede ved høyere pris), fallende etterspørselskurve; skift kurvene for gitte hendelser og les av pris- OG renteeffekt via pris–rente-inversen. **Typiske skift-hendelser:** svekket/bedret kredittvurdering av utsteder, økt samlet investering, sentralbanken hever styringsrenten, økt usikkerhet i aksjemarkedet, økt inflasjon, bedret bedriftsforventning. Figurkrav: navngi kurvene, likevekten, skiftet og den avleste pris-/renteendringen.
- **Oppgavesjangre:** B + C. Mønstereksempel (B): «En obligasjon med pålydende 100 og 8 år igjen kjøpes til 75. Finn yield to maturity.» Mønstereksempel (C): «Bruk en tilbuds- og etterspørselsanalyse til å vise hva som skjer med prisen og renten på en obligasjon når utstederens kredittvurdering svekkes.»
- **Typiske feil:** Regne yield som kupongrente i stedet for effektiv rente fra pris; feil eksponent ($1/n$) i nullkupong-yield; i figuren glemme å oversette prisendringen til renteendring (inversen); uklar/umerket figur.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 1.4: Forward-renter og rentens terminstruktur

- **id:** `sok2010-1-4` · **number:** 1.4 · **estimatedMinutes:** 50 · **prerequisites:** `sok2010-1-2`
- **Kapitteltype:** teori
- **description:** Impliserte forward-renter bygget av yieldkurven, og forventningshypotesen som forklaring på terminstrukturen.
- **Eksamensbelegg:** ~35 % (V2017, V2019; forventningshypotesen V2018). Beregning + tolkning kreves. Prioritet: **kunne** (nivå 2).
- **Innholdskontrakt:** **Impliserte forward-renter:** ingen-arbitrasje gir $(1+y_n)^n = (1+r_{01})(1+r_{12})\cdots$; løs for f.eks. $r_{12} = (1+y_2)^2/(1+y_1) - 1$. **Approksimasjon** $r_{12} \approx 2y_2 - y_1$ når rentene er små. **Forventningshypotesen:** lang rente = (geometrisk) snitt av forventede fremtidige korte renter → forklarer samvariasjon mellom løpetider og at korte renter svinger mest; men forklarer *ikke* hvorfor lange renter typisk er høyere (det krever en **terminpremie**). Kryssrefererer til SØK2005 for den fulle terminstruktur-teorien; her kompakt og koblet til pengepolitikk (Del 3).
- **Oppgavesjangre:** D. Mønstereksempel: «Gitt ett-, to- og treårige statsrenter på 3 %, 3,5 % og 4 %, beregn de impliserte ettårs forward-rentene om ett og to år, og forklar dem med forventningshypotesen.»
- **Typiske feil:** Bruke aritmetisk i stedet for geometrisk snitt uten å nevne approksimasjonen; regnefeil i potensleddene; tro at forventningshypotesen forklarer terminpremien; ikke tolke tallene økonomisk.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 1.5: Drill: renter og obligasjoner

- **id:** `sok2010-1-5` · **number:** 1.5 · **estimatedMinutes:** 80 · **prerequisites:** `sok2010-1-4`, `sok2010-1-3`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på hele rente-/obligasjonsoppgaven: fra en gitt obligasjon til pris, yield, forward-renter og markedsdrøfting med figur.
- **Eksamensbelegg:** Dekker sjangrene B, C, D samlet — obligasjons-/renteoppgaven som er ~80 %-gjenganger. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) identifiser obligasjonstype (nullkupong/kupong) og diskonteringsrente (risikofri + evt. spread); 2) pris = neddiskontert nåverdi, tolk pris–rente-inversen; 3) yield fra pris (lukket for nullkupong, implisitt for kupong); 4) evt. forward-renter fra yieldkurven, tolk med forventningshypotesen; 5) evt. tilbud/etterspørsel-figur ved en markedshendelse, avles pris- og renteeffekt; 6) tolk alt verbalt. **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling ved hvert steg — særlig pris–rente-inversen, yield-utregningen og figurtolkningen). **8–12 oppgaver** på eksamensnivå som roterer obligasjonstype × leveranse (pris / yield / forward / markedsskift), alle med nyskrevne, pent kalibrerte tall og `solution` + `hints`.
- **Oppgavesjangre:** B, C, D. Mønstereksempel (full kjede): «(a) Finn prisen på en toårig kupongobligasjon (kupong 5, pålydende 100) når markedsrenten er 6 %. (b) Obligasjonen kjøpes til 96 — hva er yield? (c) Gitt ett- og toårige statsrenter, finn den impliserte forward-renten. (d) Vis i figur hva som skjer med pris og rente når sentralbanken hever styringsrenten.»
- **Typiske feil:** Hele rente-repertoaret: glemt pris–rente-invers, feil eksponenter, yield som kupong, aritmetisk snitt i forward, umerkede figurer, utolkede tall.
- **Quiz: 18 · Flashcards: 14**

**Prøve-kvote Del 1:** 4 prøver (1.A begreper — penger/pengeskaping, deposit multiplier, neddiskontering/NPV, realrente, yield, kredittspread, sjanger A; 1.B obligasjonsprising nullkupong + kupong med pris–rente-inversen, sjanger B; 1.C yield fra pris + obligasjonsmarkedet i tilbud/etterspørsel med figur, sjanger B+C; 1.D forward-renter fra terminstrukturen + forventningshypotesen, sjanger D).

---

### Del 2 — Banken som institusjon: balanse, risiko og asymmetrisk informasjon *(prioritet: PERFEKT — emnets kjerne)*

#### Kapittel 2.1: Bankens funksjoner og finansielle formidling

- **id:** `sok2010-2-1` · **number:** 2.1 · **estimatedMinutes:** 40 · **prerequisites:** `sok2010-1-1`
- **Kapitteltype:** teori
- **description:** Hvorfor banker finnes: pooling, løpetidstransformasjon, likviditetsforsyning, diversifisering og informasjonsproduksjon — grunnlaget for hele bankdelen.
- **Eksamensbelegg:** ~65 %; bankfunksjonene er fast begrepsgjenganger (sjanger A; H2019: pooling, maturity conversion, likviditet). Prioritet: **perfekt** (definisjoner må sitte).
- **Innholdskontrakt:** Bankens rolle som finansiell formidler mellom sparere og låntakere. **Fem funksjoner:** (1) **innskuddspooling** (*deposit pooling*) — samler mange små innskudd til store lån; (2) **løpetidstransformasjon** (*maturity conversion*) — kort finansiering (innskudd) omgjøres til lange lån; (3) **likviditetsforsyning** (*liquidity provision*) — innskyter kan ta ut når som helst; (4) **diversifisering** — spre risiko over mange lån; (5) **informasjonsproduksjon** — banken screener og overvåker låntakere (bro til asymmetrisk info, kap. 2.3). Understrek at løpetidstransformasjonen skaper **run-/refinansieringsrisiko** (bro til bank run, kap. 3.1) og at pooling/diversifisering forutsetter uavhengige risikoer (bro til Diamond–Dybvig, kap. 2.6). Definer hvert begrep presist med engelsk term.
- **Oppgavesjangre:** A. Mønstereksempel: «Forklar hva som menes med løpetidstransformasjon og likviditetsforsyning, og hvorfor disse to funksjonene sammen gjør en bank sårbar for et innskuddsrykk (bank run).»
- **Typiske feil:** Bare liste funksjonene uten å forklare hver (feilkatalog: ufullstendig virkemiddel-/funksjonsliste); ikke se koblingen løpetidstransformasjon → run-risiko; forveksle pooling og diversifisering.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 2.2: Bankens balanse og risiko

- **id:** `sok2010-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok2010-2-1`
- **Kapitteltype:** teori
- **description:** Å sette opp en bankbalanse riktig (hvorfor innskudd er gjeld, lån er eiendeler, EK på passivasiden) og identifisere risiko på hver side, inkl. leverage/gearing og insolvent vs. illikvid.
- **Eksamensbelegg:** ~70 % (V2019, H2018, H2023, V2020-variant); leverage/gearing ~40 %, insolvent vs. illikvid ~45 %. Ofte inngang til run-/reguleringsoppgaven. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Aktivasiden (eiendeler):** kontanter/reserver, verdipapirer, **lån** (bankens *krav* på låntakere), anleggsmidler. **Passivasiden (gjeld + EK):** **innskudd** (bankens *forpliktelse*), obligasjonsgjeld/markedsfinansiering, **egenkapital** (residualen som balanserer). Forklar *hvorfor*: innskudd er gjeld fordi banken skylder innskyter pengene; lån er eiendel fordi låntaker skylder banken; EK står på passivasiden som eierandel/buffer. **Risiko per side:** kredittrisiko og markedsrisiko på aktivasiden; run-/refinansieringsrisiko på passivasiden; løpetids-, rente- og valutarisiko på tvers (kort finansiering + lange lån; ulike valutaer). **Leverage/gearing:** høy gjeldsandel forsterker **både** avkastning og risiko på egenkapitalen ($ROE$ svinger mer, jf. V2024-risikoskifting). **Insolvent vs. illikvid:** insolvent = eiendeler < gjeld (negativ EK); illikvid = solvent, men mangler kontanter her og nå — fast begrepspar og grunnlag for lender of last resort (kap. 3.3). Figurkrav: en T-konto med poster riktig plassert.
- **Oppgavesjangre:** E. Mønstereksempel: «En bank har lånt kortsiktig i euro og dollar og lånt ut langsiktig i begge valutaer. Sett opp en forenklet balanse (T-konto) og drøft kredittrisiko, likviditets-/run-risiko og valutarisiko.»
- **Typiske feil:** Sette egenkapital på feil side, eller ikke forstå at innskudd er gjeld og lån er eiendeler (feilkatalog §5.7); blande insolvent og illikvid; overse valuta-/løpetidsrisikoen; behandle leverage som bare oppside.
- **Quiz: 24 · Flashcards: 26**

#### Kapittel 2.3: Asymmetrisk informasjon: uheldig utvalg og moralsk hasard

- **id:** `sok2010-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** `sok2010-2-1`
- **Kapitteltype:** teori
- **description:** Emnets navlestreng: å skille og klassifisere uheldig utvalg (før kontrakt, skjult type) fra moralsk hasard (etter kontrakt, skjult handling), og bankens virkemidler mot hver.
- **Eksamensbelegg:** ~90 % — den absolutte ryggraden i emnet, i alle epoker (begrep, klassifiseringsøvelse og modell). Virkemidlene (overvåking, pant, screening, signalisering) ~75 %; sensor krever at *hvert* virkemiddel forklares. Prioritet: **perfekt** (bokas viktigste enkeltkapittel).
- **Innholdskontrakt:** **Uheldig utvalg** (*adverse selection*) — asymmetrien oppstår **før** kontrakt inngås: den ene parten kjenner sin **type** (f.eks. risikoprofilen), den andre ikke → «sitroner» fortrenger gode; huskeregel: **skjult type, før**. **Moralsk hasard** (*moral hazard*) — asymmetrien oppstår **etter** kontrakt: den ene parten velger en **handling** motparten ikke ser (f.eks. tar mer risiko når han er forsikret); huskeregel: **skjult handling, etter**. **Klassifiseringsøvelse:** gitt eksempler, klassifiser og begrunn ut fra tidspunkt/type–handling. **Bankens virkemidler (fullstendig liste, hvert forklart):** mot uheldig utvalg → **screening** (kredithistorikk/rating), **signalisering** (låntaker signaliserer kvalitet), **differensiert rente**, **pant**; mot moralsk hasard → **overvåking** (*monitoring*), **pant/collateral** (skin in the game), **kontraktsvilkår/covenants**, egenkapitalkrav. Understrek at pant og egenkapital reduserer *begge* problemer. Bro til de tre formelle modellene (2.4–2.6).
- **Oppgavesjangre:** F. Mønstereksempel: «En innskuddsforsikret bank tar mer risiko på utlånssiden enn den ellers ville gjort. Er dette uheldig utvalg eller moralsk hasard? Begrunn ut fra tidspunkt, og foreslå et mottiltak.»
- **Typiske feil:** **Bytte om** uheldig utvalg og moralsk hasard (feilkatalog §5.1 — huskeregel: tidspunkt); bare liste virkemidler uten å forklare hvordan hvert virker (§5.2); foreslå tiltak mot feil problem (screening mot moralsk hasard); ikke begrunne klassifiseringen.
- **Quiz: 26 · Flashcards: 28**

#### Kapittel 2.4: To-typemodell for kredittmarkedet

- **id:** `sok2010-2-4` · **number:** 2.4 · **estimatedMinutes:** 70 · **prerequisites:** `sok2010-2-3`, `sok2010-1-1`
- **Kapitteltype:** teori
- **description:** Kjernemodellen: sikre og risikable prosjekter, investors og bankens deltakelsesvilkår, renten under frikonkurranse vs. monopol, komparativ statikk og effektivitet under uheldig utvalg.
- **Eksamensbelegg:** ~40 %, men **ofte 40 % av settet** når den kommer (V2021, V2022, H2022). Wang-epokens tyngste enkeltmodell. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Oppsett:** to perioder; prosjekt investerer $I$ i periode 0, betaler i periode 1; investor har egenkapital $E$, trenger lån $L = I - E$. **Sikre prosjekter (type 1):** kjent utbetaling $A > I$, andel $s$. **Risikable (type 2):** utbetaling $U$ med sannsynlighet $p$, ellers 0, andel $1-s$; antas $U > A > I \ge L$. **Deltakelsesvilkår:** investor (risikabelt) $p(U - (1+r)L) \ge E$; bank $p(1+r)L \ge L$. **Rente-intervall:** frikonkurranse (bank uten profitt) $1+r = 1/p$ ↔ monopol (bank tar all profitt); under asymmetrisk info med pooling og frikonkurranse: $1+r = 1/(s + (1-s)p)$. **Komparativ statikk:** effekten på $r$ av økt $p$ og $E$ avhenger av markedsform (fortegn på $\partial r/\partial p$ — faller under frikonkurranse, kan stige under monopol) — MÅ tolkes økonomisk. **Effektivitet:** under uheldig utvalg **subsidierer sikre prosjekter risikable** (pooling-rente); markedet kan bli ineffektivt (negativ-NPV-prosjekter finansieres); effisient hvis forventet samfunnsverdi $> E + L$. **Tallcase:** sett inn parameterverdier, regn NPV, forventet profitt for de to prosjekttypene og for banken, kommenter.
- **Oppgavesjangre:** G. Mønstereksempel: «Med $U = 13$, $A = 12$, $I = 10$, $E = 5$, $p = 0{,}8$, $s = 0{,}5$: finn NPV for de to prosjekttypene, forventet profitt for investorene og for banken under en frikonkurranse-pooling-rente, og kommenter effektiviteten.»
- **Typiske feil:** **Feil deltakelsesvilkår** — blande investors ($p(U-(1+r)L) \ge E$) med bankens ($p(1+r)L \ge L$) eller glemme monopol/frikonkurranse-skillet (feilkatalog §5.5); **ikke tolke fortegn** på $\partial r/\partial p$ (§5.4); overse subsidieringen av risikable prosjekter; ren derivasjon uten økonomisk tolkning.
- **Quiz: 26 · Flashcards: 28**

#### Kapittel 2.5: Delegert overvåking (Diamond)

- **id:** `sok2010-2-5` · **number:** 2.5 · **estimatedMinutes:** 60 · **prerequisites:** `sok2010-2-4`
- **Kapitteltype:** teori
- **description:** Hvorfor en bank som delegert overvåker sparer duplisert overvåking: straffekontrakt vs. overvåking, sannsynlighetsfordeling over uavhengige lån, og lovet innskuddsrente.
- **Eksamensbelegg:** ~20 %, tydelig i nyere sett (V2024, 30 poeng). Wang-epokens andre kjernemodell. Prioritet: **kunne/perfekt** (voksende).
- **Innholdskontrakt:** **Problemet:** hvis hver småsparer overvåker sin del av et lån, dupliseres overvåkingskostnaden ($\text{antall långivere} \times c$). **Straffekontrakt uten overvåking:** en $f$ (straff/pålydende) må dekke krevd avkastning: $p \cdot f = 1 + \text{krav} \Rightarrow f$. **Banken som delegert overvåker** overvåker flere **uavhengige** lån på vegne av innskyterne (én overvåking, ikke duplisert). **Sannsynlighetsfordeling** for to uavhengige lån med suksess-sannsynlighet $p$: null mislighold $p^2$, ett $2p(1-p)$, to $(1-p)^2$ — regn forventet innbetaling til banken, forventet innbetaling til innskyterne, lovet innskuddsrente og nødvendig pålydende $F$ per lån. **Diversifiseringsgevinsten** (jf. kap. 2.1): jo flere uavhengige lån, jo sikrere bankens samlede portefølje → lavere lovet innskuddsrente kreves. Uavhengighetsantakelsen (bro til Diamond–Dybvig og systemrisiko).
- **Oppgavesjangre:** H. Mønstereksempel: «En bank finansierer to uavhengige lån med samme risikoprofil ($p = 0{,}9$) via innskudd. Sett opp sannsynlighetene for null, ett og to mislighold, finn bankens forventede innbetaling og den lovede innskuddsrenten.»
- **Typiske feil:** Feil sannsynlighetsfordeling (glemme $2p(1-p)$-leddet for «ett mislighold»); behandle lånene som avhengige uten å nevne det; ikke se poenget med å unngå duplisert overvåking; regne forventet innbetaling feil.
- **Quiz: 24 · Flashcards: 24**

#### Kapittel 2.6: Diamond–Dybvig, likviditetsforsikring og intertemporalt valg

- **id:** `sok2010-2-6` · **number:** 2.6 · **estimatedMinutes:** 65 · **prerequisites:** `sok2010-2-5`, `sok2010-1-1`
- **Kapitteltype:** teori
- **description:** Diamond–Dybvig-modellen (likviditetsforsikring og selvoppfyllende run), og intertemporalt valg/konsum over to perioder — de to øvrige modelloppgavene i Wang-epoken.
- **Eksamensbelegg:** Diamond–Dybvig ~25 % (H2023, V2024-flervalg); intertemporalt valg ~25 % (H2023, log-nytte); overinvestering/risikoskifting ~25 % (V2020) tas kort her. Prioritet: **kunne** (nivå 2, høyt belønnet på topp).
- **Innholdskontrakt:** **Diamond–Dybvig / likviditetsforsikring:** med nytte $u(c) = 1 - 1/c$, sannsynlighet for tidlig uttak, avkastning 1 (ett år) vs. 2 (to år): (1) forventet nytte **uten** bank (autarki); (2) beløpet banken må betale for å gjøre innskyterne like godt stilt (likviditetsforsikring bedrer risikodelingen); (3) bankens forventede profitt og **maks andel tidlige uttak** før insolvens; (4) effekten av økt konkurranse (høyere innskuddsbetaling); (5) **selvoppfyllende run**: hvis alle tror alle tar ut, lønner det seg å ta ut → run rammer en **fundamentalt solvent** bank; uavhengighetsantakelsen brytes når uttak korrelerer. **Intertemporalt valg (sjanger J):** nyttefunksjon over $c_1, c_2$ (f.eks. $\log c_1 + 0{,}9 \log c_2$), inntekt i hver periode, brutto rente $r$; sett opp maksimering, løs optimal låne-/spareadferd; vis at finansmarkedet gir høyere nytte enn autarki, og at transaksjonskostnader (lånerente > sparerente) reduserer nytten. **Overinvestering/risikoskifting (sjanger K, kort):** gjeld med begrenset ansvar vrir låntakeren mot risikable, ulønnsomme prosjekter («gambling for resurrection»); finn kritisk gjeldsnivå der problemet forsvinner.
- **Oppgavesjangre:** I + J (+ K). Mønstereksempel (I): «Vis hvordan en bank som tilbyr lik utbetaling uansett uttakstidspunkt bedrer risikodelingen, og finn den høyeste andelen tidlige uttak banken tåler uten å bli insolvent.» Mønstereksempel (J): «En aktør har $u = \log c_1 + 0{,}9 \log c_2$, inntekt 2 i periode 1 og 1 i periode 2, brutto rente 1,25. Finn optimal sparing/låning og konsum.»
- **Typiske feil:** Behandle bank run som **irrasjonelt** i stedet for som selvoppfyllende likevekt som kan ramme en solvent bank (feilkatalog §5.6); glemme uavhengighets-/korrelasjonsantakelsen; i intertemporalt valg glemme transaksjonskostnaden eller regne feil budsjettbetingelse; overse risikoskiftingen ved gjeld (§5.8).
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 2.7: Drill: kredittmodellene og bankoppgaven

- **id:** `sok2010-2-7` · **number:** 2.7 · **estimatedMinutes:** 90 · **prerequisites:** `sok2010-2-6`, `sok2010-2-4`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på hele bankdelen: klassifisering av agentproblem, bankbalanse, og de tre formelle modellene (to-typemodell, delegert overvåking, Diamond–Dybvig/intertemporalt) med tallcase.
- **Eksamensbelegg:** Dekker sjangrene E, F, G, H, I, J samlet — bank- og modelloppgavene som utgjør 40–70 % av Wang-eksamen. **To-typemodellen drilles til overmål** (den tyngste). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) begreps-/klassifiseringsdel (uheldig utvalg vs. moralsk hasard, tiltak); 2) bankbalanse med risiko per side (E); 3) identifiser modelltype — kredittmarked (to-typemodell: deltakelsesvilkår → rente-intervall → komparativ statikk → NPV/effektivitet), delegert overvåking (sannsynlighetsfordeling → innskuddsrente), Diamond–Dybvig (nytte med/uten bank → insolvensterskel → run), intertemporalt (optimal sparing/låning); 4) tolk alle tall og fortegn økonomisk; 5) figur der relevant (T-konto, tilbud/etterspørsel). **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling per steg — særlig riktig deltakelsesvilkår, fortegnstolkningen, den fullstendige virkemiddel-listen, selvoppfyllende run). **10–15 oppgaver** på eksamensnivå som roterer modelltype × leveranse, alle med nyskrevne, pent kalibrerte tall og `solution` + `hints`.
- **Oppgavesjangre:** E, F, G, H, I, J. Mønstereksempel (full kjede): «(a) Klassifiser tre gitte situasjoner som uheldig utvalg eller moralsk hasard og foreslå tiltak. (b) I to-typemodellen med gitte parametre, finn deltakelsesvilkårene, frikonkurranse- og monopolrenten, og kommenter effektiviteten. (c) Vis effekten på renten av en økning i $p$ under hver markedsform.»
- **Typiske feil:** Hele bank-repertoaret fra §5: ombyttet uheldig utvalg/moralsk hasard, ufullstendig virkemiddel-liste, feil deltakelsesvilkår, utolket fortegn, EK på feil side, run som irrasjonelt.
- **Quiz: 18 · Flashcards: 14**

**Prøve-kvote Del 2:** 4 prøver (2.A begreper — bankfunksjoner (pooling/maturity conversion/likviditet), insolvent vs. illikvid, uheldig utvalg/moralsk hasard, virkemidler, sjanger A+F; 2.B bankbalanse + risiko per side, sjanger E; 2.C to-typemodell komplett — deltakelsesvilkår, rente-intervall, komparativ statikk, NPV/effektivitet, sjanger G; 2.D delegert overvåking + Diamond–Dybvig/intertemporalt valg på eksamensnivå, sjanger H+I+J).

---

### Del 3 — Regulering og sentralbank: sikkerhetsnettet og pengepolitikken *(prioritet: PERFEKT/KUNNE — bank-vinkelen)*

#### Kapittel 3.1: Bank run, insolvent vs. illikvid og suspensjon

- **id:** `sok2010-3-1` · **number:** 3.1 · **estimatedMinutes:** 45 · **prerequisites:** `sok2010-2-2`
- **Kapitteltype:** teori
- **description:** Hva et bank run er (moderne vs. for 100 år siden), hvorfor det oppstår, «alt eller ingenting»-logikken, og de umiddelbare tiltakene mot det.
- **Eksamensbelegg:** ~70 % — nesten fast (V2020-variant, H2019, V2022). Ofte inngang til reguleringsoppgaven. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Bank run** = mange innskytere vil ta ut samtidig; moderne form er elektronisk flytting (ikke bare kø i skranken). **Årsak:** løpetidstransformasjon (kort gjeld, lange/illikvide eiendeler) + «førstemann til mølla»-logikk (den som tar ut først får fullt, resten kan tape) → **selvoppfyllende** (kobling til Diamond–Dybvig, kap. 2.6). **Insolvent vs. illikvid** (repetert fra 2.2): et run kan ramme en solvent men illikvid bank. **Umiddelbare tiltak:** suspensjon av konvertibilitet (stenge uttak midlertidig), lender of last resort (kap. 3.3), innskuddsgaranti (kap. 3.2). «Alt eller ingenting»: uten sikkerhetsnett er run en likevekt; med garanti forsvinner insentivet til å løpe. Kort om **brannsalg** (*fire sales*) og smitte som forsterkere (bro til Del 4).
- **Oppgavesjangre:** A + M. Mønstereksempel: «Forklar hva et bank run er, hvorfor det kan ramme en fundamentalt solvent bank, og hvordan et moderne run skiller seg fra et for hundre år siden.»
- **Typiske feil:** Behandle run som irrasjonelt (§5.6); blande insolvent og illikvid; tro at bare innskuddsgaranti (ikke også suspensjon/LLR) kan stoppe et run; ikke koble run til løpetidstransformasjonen.
- **Quiz: 24 · Flashcards: 26**

#### Kapittel 3.2: Innskuddsgaranti, moralsk hasard og behovet for regulering

- **id:** `sok2010-3-2` · **number:** 3.2 · **estimatedMinutes:** 50 · **prerequisites:** `sok2010-3-1`, `sok2010-2-3`
- **Kapitteltype:** teori
- **description:** Den sentrale koblingen: innskuddsgaranti stopper run, men fjerner innskyternes overvåkingsinsentiv → moralsk hasard i banken → staten må regulere risikotakingen.
- **Eksamensbelegg:** ~65 % (V2021, H2019). Den mest spurte «hvorfor regulering?»-argumentasjonen. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Innskuddsgaranti** (*deposit insurance*): staten garanterer innskudd opp til en grense → innskyter har ingen grunn til å løpe → run-likevekten forsvinner. **Baksiden (moralsk hasard):** når innskyterne er forsikret, slutter de å overvåke og prise bankens risiko → banken kan ta mer risiko uten å betale høyere finansieringskostnad → **moralsk hasard** (jf. kap. 2.3). **Konklusjon:** derfor må staten *erstatte* markedets disiplin med **regulering** (kapital- og likviditetskrav, tilsyn, risikobegrensning). Presiser at garantien er både løsning (mot run) og problem (skaper moralsk hasard) — det er selve poenget sensor er ute etter. Kort om prising av garantien (risikojustert premie) og «too big to fail» som forsterket moralsk hasard.
- **Oppgavesjangre:** M. Mønstereksempel: «Hvorfor skaper en statlig innskuddsgaranti behov for offentlig regulering av bankenes risikotaking? Forklar mekanismen via innskyternes overvåkingsinsentiv.»
- **Typiske feil:** Se bare fordelen (mot run) og glemme moralsk hasard-baksiden; ikke koble garantien til bortfall av markedsdisiplin; forveksle innskuddsgaranti med lender of last resort; ubegrunnet påstand om at regulering «bare» er byråkrati.
- **Quiz: 24 · Flashcards: 24**

#### Kapittel 3.3: Kapital- og likviditetskrav, RWA vs. leverage ratio, Basel III

- **id:** `sok2010-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** `sok2010-3-2`
- **Kapitteltype:** teori
- **description:** Reguleringens verktøy: risikovektede eiendeler og kapitaldekning, den uvektede leverage ratio, likviditetskrav og Basel III-buffere, med fordeler/ulemper ved hver.
- **Eksamensbelegg:** Kapital-/likviditetskrav ~55 %, RWA vs. leverage ratio ~35 % (V2019); lender of last resort ~40 %. Skillet RWA vs. leverage ratio er A/B-markør. Prioritet: **perfekt/kunne**.
- **Innholdskontrakt:** **Risikovektede eiendeler** (*risk-weighted assets, RWA*): hver eiendel ganges med en risikovekt (stat 0 %, boliglån lav, usikret utlån høy) → **kapitaldekning** $= \text{kjernekapital}/RWA$ (Tier 1). **Leverage ratio** (uvektet): $\text{kapital}/\text{(uvektede eiendeler)}$ — enklere, kan ikke «spilles» via vektene, men skiller ikke trygge fra risikable eiendeler. **Fordeler/ulemper (A/B):** RWA er risikofølsom men kan manipuleres (velge lavvektede aktiva, modellrisiko); leverage ratio er robust men grovt. De brukes derfor **sammen** (Basel III har begge + likviditetskrav LCR/NSFR + kapitalbuffere). **Lender of last resort:** sentralbanken låner mot god sikkerhet til solvente men illikvide banker (Bagehot: lån fritt, mot god pant, til straffrente). **Boliglånsregulering** kort (LTV, maks gjeldsgrad ~4,5× inntekt, H2019). Poeng: regulering skal begrense den moralske hasarden fra sikkerhetsnettet (kap. 3.2).
- **Oppgavesjangre:** M. Mønstereksempel: «Forklar forskjellen mellom et risikovektet kapitalkrav og en uvektet leverage ratio, og drøft fordeler og ulemper ved hver. Hvorfor bruker Basel III begge?»
- **Typiske feil:** **Blande** risikovektet kapitaldekning og leverage ratio — teller/nevner (kapital/RWA vs. kapital/uvektede eiendeler) (feilkatalog §5.9); tro at RWA alltid er bedre (overser manipulering); forveksle lender of last resort med innskuddsgaranti; glemme likviditetssiden av Basel III.
- **Quiz: 24 · Flashcards: 26**

#### Kapittel 3.4: Sentralbanken og pengepolitikken

- **id:** `sok2010-3-4` · **number:** 3.4 · **estimatedMinutes:** 50 · **prerequisites:** `sok2010-1-1`
- **Kapitteltype:** teori
- **description:** Sentralbankens balanse, hvordan den styrer korte renter (styringsrente, åpne markedsoperasjoner, reservekrav, NOWA), og sentralbankens uavhengighet og mål.
- **Eksamensbelegg:** ~60 % (V2021 sentralbankbalanse, V2017, V2018 uavhengighet/mål). Prioritet: **kunne/perfekt**.
- **Innholdskontrakt:** **Sentralbankens balanse:** eiendeler = verdipapirer, valutareserver, utlån til banker, gull; gjeld = sedler/mynt og bankenes **reserver** i sentralbanken. **Styring av korte renter:** **styringsrenten** (renten på bankenes reserver) som gulv/tak for interbankrenten (**NOWA** i Norge); **åpne markedsoperasjoner** — sentralbanken kjøper/selger statspapirer: salg trekker inn reserver → høyere rente, kjøp tilfører reserver → lavere rente; **reservekrav**. Figur: reservemarkedet (tilbud/etterspørsel etter reserver) og hvordan et salg skifter tilbudet. **Uavhengighet, transparens, komitébeslutning** (V2018); **mål:** lav og stabil inflasjon (inflasjonsmål), høy og stabil sysselsetting, finansiell stabilitet. Kobling til pengeskaping (kap. 1.1) og til krisehåndtering (kvantitative lettelser, Del 4).
- **Oppgavesjangre:** L. Mønstereksempel: «Forklar hvordan et åpent markedssalg av statsobligasjoner påvirker bankenes reserver og den korte renten. Illustrer reservemarkedet med figur.»
- **Typiske feil:** Blande sentralbankens balanse med en forretningsbanks; feil retning på åpne markedsoperasjoner (salg → høyere, ikke lavere rente); glemme reservene som sentralbankgjeld; ikke tolke figuren; forveksle styringsrente og markedsrente.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 3.5: Drill: regulering og sentralbank

- **id:** `sok2010-3-5` · **number:** 3.5 · **estimatedMinutes:** 70 · **prerequisites:** `sok2010-3-4`, `sok2010-3-3`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på regulerings-/sentralbankoppgaven: run + sikkerhetsnett + kapital-/likviditetskrav + sentralbankens rentestyring med figur.
- **Eksamensbelegg:** Dekker sjangrene L, M samlet — regulering/sentralbank som er ~60–70 %-gjenganger. Prioritet: **perfekt/kunne**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) run-/sikkerhetsnett-del (definer run, insolvent vs. illikvid, tiltak: suspensjon/LLR/garanti); 2) koblingen sikkerhetsnett → regulering (garanti → moralsk hasard → tilsyn); 3) kapital-/likviditetskrav (RWA vs. leverage ratio med fordeler/ulemper, Basel III); 4) sentralbankdel (balanse, styringsrente, åpne markedsoperasjoner med reservemarked-figur); 5) tolk alt verbalt. **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling per steg — særlig sikkerhetsnett→regulering-mekanismen, RWA/leverage-skillet, retningen på åpne markedsoperasjoner). **8–12 oppgaver** på eksamensnivå som roterer tema × leveranse, alle med nyskrevne kontekster og `solution` + `hints` (regnedel der relevant: kapitaldekning fra en gitt balanse med risikovekter).
- **Oppgavesjangre:** L, M. Mønstereksempel (full kjede): «(a) En bank rammes av et innskuddsrykk. Er den insolvent eller illikvid, og hvilke tiltak finnes? (b) Forklar hvorfor innskuddsgarantien som stoppet runet krever kapital- og likviditetskrav. (c) Regn bankens risikovektede kapitaldekning fra en gitt balanse. (d) Vis hvordan sentralbanken kan heve den korte renten.»
- **Typiske feil:** Hele regulerings-repertoaret: run som irrasjonelt, glemt moralsk hasard-baksiden av garantien, blandet RWA/leverage ratio, feil retning på åpne markedsoperasjoner, umerket reservemarked-figur.
- **Quiz: 16 · Flashcards: 14**

**Prøve-kvote Del 3:** 4 prøver (3.A begreper — bank run, insolvent/illikvid, innskuddsgaranti, RWA, leverage ratio, lender of last resort, styringsrente, åpne markedsoperasjoner, sjanger A; 3.B sikkerhetsnett → regulering-mekanismen (innskuddsgaranti → moralsk hasard → tilsyn), sjanger M; 3.C kapital-/likviditetskrav, RWA vs. leverage ratio med regning fra balanse, sjanger M; 3.D sentralbankens rentestyring med reservemarked-figur + åpne markedsoperasjoner, sjanger L).

---

### Del 4 — Finansiell stabilitet, kriser og teknologi *(prioritet: KUNNE/KJENNE — overbygningen)*

#### Kapittel 4.1: Finanskrisen 2007–09

- **id:** `sok2010-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `sok2010-3-3`
- **Kapitteltype:** teori
- **description:** Årsaker, forløp, håndtering og ny regulering etter finanskrisen 2007–09 — det store overbyggende temaet, essayet i Mork-epoken og flervalget i Wang-epoken.
- **Eksamensbelegg:** ~50 % — stort essay (Mork, sjanger N) eller artikkelbasert flervalg/drøfting (Wang, sjanger O); bygger på bl.a. Brunnermeier (2008). Prioritet: **kunne** (nivå 2, høyt belønnet på topp).
- **Innholdskontrakt:** **Årsaker:** deregulering, finansiell innovasjon, **securitisering** og «origination and distribution» (kap. 4.2), OTC-derivater, asymmetrisk informasjon (kjøper kjente ikke MBS-kvaliteten), billig kreditt og boligboble, høy gjeldsgrad/leverage. **Forløp:** boligprisfall → tap på subprime → mistillit → **frosne markeder** (interbank/repo tørker ut) → brannsalg og smitte (kap. 4.3) → global resesjon. **Håndtering:** rentekutt, **kvantitative lettelser**, lender of last resort/redningspakker, finanspolitisk stimulans, garantier. **Ny regulering:** **Basel III** (kapital + likviditet + buffere, kap. 3.3), Dodd-Frank i USA, strengere tilsyn, makrotilsyn. Bygg kapitlet slik at det gir råstoff til essayet (5.2): en klar årsak → forløp → håndtering → regulering-struktur med rom for **egen vurdering** av styrker/svakheter.
- **Oppgavesjangre:** N (essay-råstoff) + O (flervalg-fakta). Mønstereksempel (N): «Skriv et kort essay om finanskrisen 2007–09: årsaker, virkninger, håndtering, og de nye reguleringstiltakene — med din egen vurdering.»
- **Typiske feil:** Skrive langt og ufokusert i stedet for strukturert årsak/forløp/håndtering/regulering (§5.10, konsisitet belønnes); liste hendelser uten mekanisme; utelate reguleringsdelen; i flervalg svare uten artikkelkunnskap.
- **Quiz: 24 · Flashcards: 26**

#### Kapittel 4.2: Securitisering, MBS og skiftet fra tradisjonell bank

- **id:** `sok2010-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `sok2010-2-2`
- **Kapitteltype:** teori
- **description:** Securitisering og MBS, «origination and distribution»-modellen vs. tradisjonell bank, repo-finansiering og hvordan dette svekket kredittvurderingsinsentivene.
- **Eksamensbelegg:** ~35 % (V2024, MBS og securitisert bank, 30 poeng). Wang-epokens moderne bank-tema. Prioritet: **kunne** (nivå 2).
- **Innholdskontrakt:** **Securitisering** (*securitization*): lån bunter sammen og selges som verdipapirer (**MBS** = mortgage-backed securities). **«Origination and distribution»** vs. tradisjonell «originate to hold»: når banken *selger* lånet videre, svekkes insentivet til å screene og overvåke låntakeren (moralsk hasard, jf. kap. 2.3) → dårligere lånekvalitet. **Repo-finansiering** (*repo*): kortsiktig sikret finansiering av verdipapirbeholdninger → **run-lignende** sårbarhet når «haircuts» øker eller markedet fryser (wholesale funding dry-up). **Renterisiko/durasjon** i MBS kort (V2024). **Norske OMF/covered bonds** som kontrast (sikret, banken beholder risiko). Poeng: securitisering flytter risiko men skaper nye asymmetriske informasjonsproblemer og systemsårbarhet.
- **Oppgavesjangre:** A + O + essay-råstoff. Mønstereksempel: «Forklar hvordan securitisering og en 'originate to distribute'-modell kan svekke bankens insentiv til å vurdere låntakernes kredittverdighet.»
- **Typiske feil:** Behandle securitisering som ren risikospredning uten å se den nye moralske hasarden; forveksle MBS med vanlige selskapsobligasjoner; overse repo-/refinansieringssårbarheten; ikke koble til krisen (kap. 4.1).
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 4.3: Systemrisiko: brannsalg, smitte og sammenkobling

- **id:** `sok2010-4-3` · **number:** 4.3 · **estimatedMinutes:** 45 · **prerequisites:** `sok2010-4-2`
- **Kapitteltype:** teori
- **description:** Hvorfor en lokal svikt blir systemisk: brannsalg (fire sales), smitte, sammenkobling mellom institusjoner og OTC-derivaters rolle.
- **Eksamensbelegg:** ~25 % (H2019 brannsalg/smitte); OTC-derivater/systemrisiko ~15 % (H2016). Forklarer hvorfor krisen ble alvorlig. Prioritet: **kjenne/kunne** (nivå 2–3).
- **Innholdskontrakt:** **Brannsalg** (*fire sales*): når mange banker må selge samme illikvide eiendeler samtidig, faller prisene → tap svekker alles balanser → flere tvangssalg (nedadgående spiral). **Smitte** (*contagion*): tap eller mistillit sprer seg via direkte eksponeringer (interbanklån) og felles eksponeringer. **Sammenkobling** (*interconnectedness*): tett nettverk gjør systemet sårbart for at én stor node faller («too interconnected to fail»). **OTC-derivater:** bilaterale kontrakter uten sentral motpart → motpartsrisiko og uoversiktlige eksponeringer (Lehman/AIG). **Makrotilsyn** som svar (systemvide buffere, sentrale motparter). Skiller **individuell** risiko (mikro) fra **systemrisiko** (makro) — en bank kan være trygg isolert, men systemet skjørt.
- **Oppgavesjangre:** A + essay-råstoff. Mønstereksempel: «Forklar hva et brannsalg er, og hvordan det kan forsterke en finanskrise gjennom smitte mellom banker.»
- **Typiske feil:** Behandle hver bank isolert og overse systemrisikoen; forveksle brannsalg og ordinært salg; ikke se felles-eksponerings-kanalen for smitte; overse OTC-derivaters motpartsrisiko.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 4.4: Markedseffisiens, forsikring og teknologi

- **id:** `sok2010-4-4` · **number:** 4.4 · **estimatedMinutes:** 50 · **prerequisites:** `sok2010-1-2`
- **Kapitteltype:** teori
- **description:** Markedseffisiens (kan man slå markedet?), forsikringens økonomi (rettferdig premie, livs-/pensjonsforsikring) og teknologi/krypto/kontantløst samfunn — nivå-3-anvendelsene som roterer inn.
- **Eksamensbelegg:** Markedseffisiens ~40 % (V2019, H2019, H2016); forsikring ~25 % (V2020 livsforsikring, pensjon); teknologi/krypto ~30 % (H2016 avskaffe kontanter). Prioritet: **kjenne** (nivå 3, samlekapittel).
- **Innholdskontrakt:** **Markedseffisiens** (*market efficiency*): i et effisient marked er all offentlig informasjon priset inn → man kan ikke systematisk slå markedet; «kjøp aksjen analytikeren anbefaler?» → nei, anbefalingen er allerede priset; «buy on dips» → ingen gratis arbitrasje; kobling til risikojustert forventet avkastning. **Forsikringens økonomi:** **rettferdig premie** = forventet utbetaling (aktuarisk fair); livsforsikringspremie fra dødssannsynlighet × forsikringssum, neddiskontert; pensjon som intertemporal sparing; uheldig utvalg og moralsk hasard i forsikring (kobling til kap. 2.3). **Teknologi:** kryptovaluta (desentralisert, ikke sentralbankpenger, jf. kap. 1.1), sentralbankdigitale penger (CBDC) kort, kontantløst samfunn (fordeler/ulemper). Merk at dette er **nivå-3**: dekkes solid, men kompakt, og sorteres etter frekvens (markedseffisiens først).
- **Oppgavesjangre:** A + B (forsikringspremie regnes). Mønstereksempel: «En analytiker anbefaler en aksje offentlig. Bør du kjøpe den for å oppnå meravkastning? Begrunn med markedseffisiens.» Regne: «Finn den aktuarisk rettferdige premien for en ettårig livsforsikring på 1 000 000 når dødssannsynligheten er 0,4 % og renten er 3 %.»
- **Typiske feil:** Tro at en offentlig anbefaling gir gratis meravkastning (bryter effisiens); regne forsikringspremie uten neddiskontering/uten forventningsverdi; forveksle kryptovaluta med sentralbankpenger; behandle nivå-3-stoffet som om det var kjernepensum.
- **Quiz: 20 · Flashcards: 22**

**Prøve-kvote Del 4:** 4 prøver (4.A begreper — securitisering/MBS, repo, brannsalg, smitte, systemrisiko, markedseffisiens, rettferdig premie, kryptovaluta, sjanger A; 4.B finanskrisen 2007–09 — årsak/forløp/håndtering/regulering i strukturert kortsvar, sjanger N-forberedelse; 4.C securitisering/MBS + systemrisiko (brannsalg/smitte) koblet til krisen, sjanger A+O; 4.D markedseffisiens + forsikringspremie regnet, sjanger A+B).

---

### Del 5 — Eksamenstrening *(begrepsdrill + essay-sjanger + øvingseksamener)*

#### Kapittel 5.1: Begrepsdrill: hele repertoaret

- **id:** `sok2010-5-1` · **number:** 5.1 · **estimatedMinutes:** 70 · **prerequisites:** `sok2010-4-4`
- **Kapitteltype:** drill (begreper, sjanger A)
- **description:** Systematisk drill av de ~25 begrepsgjengangerne som utgjør kortsvarsblokken, hver med presis definisjon, engelsk term og evt. et matematisk uttrykk eller kjennetegn.
- **Eksamensbelegg:** Begrepsblokken finnes i så å si hvert sett (V2022: 11 begreper; H2022: 8; H2019). Sensor belønner **korthet** eksplisitt. Sjanger A. Prioritet: **perfekt** (sikrer poeng billig).
- **Innholdskontrakt:** **Begrepskatalog** (definisjon + engelsk term + ett kjennetegn/uttrykk/eksempel), gruppert: *penger/renter* — penger, pengeskaping, deposit multiplier, kryptovaluta, neddiskontering, netto nåverdi, realrente, hyperinflasjon, kupongobligasjon, kredittspread, yield to maturity, likviditetsfelle, kredittskvis; *bank* — forretningsbank, innskuddspooling, løpetidstransformasjon, likviditetsforsyning, likvid/illikvid eiendel, insolvent vs. illikvid, collateral (pant), kredittvurdering (credit rating), risikoaversjon, intertemporær optimering; *asymmetrisk info* — uheldig utvalg, moralsk hasard, screening, signalisering, overvåking, kredittrasjonering; *regulering/sentralbank* — styringsrente, NOWA, åpne markedsoperasjoner, kapitalkrav, likviditetskrav, risikovektede eiendeler, leverage ratio, innskuddsgaranti, lender of last resort, bank run; *stabilitet* — securitisering, MBS, repo, brannsalg, smitte, systemrisiko, markedseffisiens. **Begrepsmal:** definisjon (én–to setninger) + engelsk term + kjennetegn/uttrykk. **Sensor-poeng:** korthet og presisjon; ett godt eksempel eller uttrykk løfter svaret. **20–30 begrepsoppgaver** med modellsvar (konsise) og `hints`.
- **Oppgavesjangre:** A. Mønstereksempel: «Forklar kort hva som menes med *collateral* (pant), og hvorfor det reduserer både uheldig utvalg og bankens tap ved mislighold.»
- **Typiske feil:** Svare langt og upresist der korthet belønnes; utelate engelsk term; blande nære begreper (insolvent/illikvid, uheldig utvalg/moralsk hasard, RWA/leverage ratio); definere uten kjennetegn/uttrykk.
- **Quiz: 20 · Flashcards: 44**

#### Kapittel 5.2: Essay-sjangeren (Mork-malen): finanskrise og finanssystem

- **id:** `sok2010-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** `sok2010-5-1`, `sok2010-4-1`
- **Kapitteltype:** sjangerkapittel (drøfting — DNA-drofting.md)
- **description:** Hvordan et konsist, strukturert eksamensessay (50 %) bygges: oppskrift → gjennomskrevet A-besvarelse med margkommentarer → momentliste-oppgaver.
- **Eksamensbelegg:** Essayet er 50 % av settet i Mork-epoken (finanskrisen 2007–09; moderne finanssystem vs. tradisjonell bank; aksjer/obligasjoner/banklån som finansieringsformer). Konsisitet belønnes eksplisitt. Sjanger N. Prioritet: **kunne** (nivå 2, men halve karakteren når malen brukes).
- **Innholdskontrakt (drøftings-mal):** **Oppskrift (trinn-for-trinn med tidsbudsjett):** 1) les spørsmålet og avgrens; 2) disponer — for finanskrisen: **årsaker → forløp → håndtering → ny regulering → egen vurdering**; 3) skriv konsist, ett poeng per avsnitt, bruk fagbegreper presist; 4) egen vurdering av styrker/svakheter (det som løfter til A); 5) konklusjon som svarer på spørsmålet. **Gjennomskrevet A-besvarelse** (nyskrevet, ~1 side) med **margkommentarer** («her: mekanisme, ikke bare hendelse», «her: egen vurdering — dette løfter til A», «her: konsist — ikke utenomsnakk»). **Momentliste-oppgaver (3–5):** essayoppgaver med **momentliste + disposisjon** som løsning (ikke fullt essay), som roterer de tre faste temaene (finanskrise; moderne finanssystem vs. tradisjonell bank; finansieringsformer aksje/obligasjon/banklån). Understrek: essayet skal forankres i modell-/faktastoffet fra Del 3–4, ikke bli løs synsing.
- **Oppgavesjangre:** N. Mønstereksempel: «Drøft det moderne finanssystemet (securitisering, markedsfinansiering, skyggebank) mot tradisjonell innskuddsbasert bank: hvilke fordeler og nye sårbarheter medfører skiftet? (momentliste + disposisjon)».
- **Typiske feil:** Langt og ufokusert essay uten struktur (§5.10); gjengivelse av hendelser uten mekanisme/vurdering; utelate egen vurdering (holder svaret på C); ikke forankre i fagbegreper/modeller.
- **Quiz: 10 · Flashcards: 12**

#### Kapittel 5.3: Øvingseksamen 1 — Mork-malen (5×10 % + essay 50 %)

- **id:** `sok2010-5-3` · **number:** 5.3 · **estimatedMinutes:** 90 · **prerequisites:** `sok2010-5-2`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett Mork-eksamen: fem korte oppgaver (begreper, obligasjon/rente, bankbalanse, sentralbank, markedseffisiens) + ett stort finanskrise-essay (50 %), med A-løsningsforslag.
- **Eksamensbelegg:** Speiler Mork-malen (V2016–V2020). Prioritet: **perfekt** (integrerer alt).
- **Innholdskontrakt:** Fem korte oppgaver à ~10 % (sjangrene A, B, E, L, + markedseffisiens/A) + ett essay à 50 % (sjanger N, finanskrisen 2007–09). Løsningsforslag per oppgave i `collapsible`, skrevet som A-besvarelse, med `tip`-notat om delpoeng/vekting og tidsbudsjett (240 min: ~120 på de fem korte, ~120 på essayet). Alle oppgaver nyskrevne med egne tall/kontekster.
- **Oppgavesjangre:** A, B, E, L, N. Mønster: se de fem sjangrenes drillkapitler + 5.2.
- **Typiske feil:** Feil tidsbudsjett (bruke for lenge på de korte, for lite på essayet); utolkede tall i de korte; ufokusert essay.
- **Quiz: 8 · Flashcards: 8**

#### Kapittel 5.4: Øvingseksamen 2 — Wang-malen (begreper + to modeller + flervalg)

- **id:** `sok2010-5-4` · **number:** 5.4 · **estimatedMinutes:** 90 · **prerequisites:** `sok2010-5-3`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett Wang-eksamen: begreps-/kortsvarsblokk (20–30 %) + to modelloppgaver (to-typemodell + delegert overvåking/Diamond–Dybvig) + flervalgsdel om pensumartikler (opptil 40 %), med løsningsforslag.
- **Eksamensbelegg:** Speiler Wang-malen (V2022, H2022, H2023, V2024). Prioritet: **perfekt** (den mest relevante fremover).
- **Innholdskontrakt:** Begrepsblokk (6–8 begreper, sjanger A) + modelloppgave 1 (to-typemodell, sjanger G, deltakelsesvilkår → rente → komparativ statikk → NPV/effektivitet) + modelloppgave 2 (delegert overvåking H *eller* Diamond–Dybvig I *eller* intertemporalt J) + flervalgsdel (sjanger O, ~8–10 ett-riktig-svar-spørsmål om pensumartikler: Diamond–Dybvig, Stiglitz–Weiss, wholesale funding dry-ups, repo, Basel III, OMF — **feil eller flere valg = 0**). Løsningsforslag per oppgave i `collapsible` som A-besvarelse; for flervalg: fasit + kort begrunnelse for hvorfor de gale er gale. Alle oppgaver/spørsmål nyskrevne.
- **Oppgavesjangre:** A, G, H/I/J, O. Mønster: se modelldrill 2.7 + flervalg-momentene i 4.1–4.3.
- **Typiske feil:** Feil deltakelsesvilkår i to-typemodellen; feil sannsynlighetsfordeling i delegert overvåking; svare på flervalg uten artikkelkunnskap (gjetting straffes); ikke tolke modellresultatene.
- **Quiz: 8 · Flashcards: 8**

#### Kapittel 5.5: Øvingseksamen 3 — blandet (rente + bank + regulering)

- **id:** `sok2010-5-5` · **number:** 5.5 · **estimatedMinutes:** 90 · **prerequisites:** `sok2010-5-4`
- **Kapitteltype:** øvingseksamen
- **description:** Et bredt blandet sett som dekker de gjenværende sjangrene: forward-renter, pris–rente med tilbud/etterspørsel, Diamond–Dybvig/intertemporalt valg, kapital-/likviditetskrav og en drøfting, med løsningsforslag.
- **Eksamensbelegg:** Sikrer at settene samlet dekker sjangrene A–O minst én gang. Prioritet: **kunne**.
- **Innholdskontrakt:** Fire–fem oppgaver som roterer inn sjangrene C, D, I, J, K, M og O som ikke fikk hovedplass i 5.3/5.4: forward-renter + terminstruktur (D), obligasjonsmarkedet i tilbud/etterspørsel (C), Diamond–Dybvig eller intertemporalt valg (I/J), overinvestering/risikoskifting (K), kapital-/likviditetskrav med RWA vs. leverage ratio (M), og en kort artikkeldrøfting/flervalg (O). Løsningsforslag per oppgave i `collapsible` som A-besvarelse med `tip`-vektingsnotat. Alle nyskrevne.
- **Oppgavesjangre:** C, D, I, J, K, M, O. Mønster: se drillkapitlene 1.5, 2.7, 3.5.
- **Typiske feil:** De sjangerspesifikke fra §5 (forward aritmetisk snitt, umerket figur, feil budsjett i intertemporalt valg, blandet RWA/leverage, run som irrasjonelt).
- **Quiz: 8 · Flashcards: 8**

**Prøve-kvote Del 5:** 4 prøver (5.A begrepsdrill i eksamensformat — 8–11 korte begreper på tvers av hele boka, sjanger A; 5.B essay-momentliste + disposisjon på finanskrise/finanssystem, sjanger N; 5.C blandet modelloppgave (to-typemodell + delegert overvåking) på eksamensnivå, sjanger G+H; 5.D flervalg om pensumartikler (ett riktig svar, med begrunnelse), sjanger O).

---

## 4. Prøver og øvingseksamener (samlet oversikt)

Fire prøver per temadel (Del 1–5 = 20 prøver), pluss de tre øvingseksamenene (kap.
5.3–5.5). Prøvene ligger i prøvekapitler per del (id `sok2010-<del>-prove`,
chapterNumber `<del>.P`) og bygges av samme agent som delen.

**Del 1 — Renter og obligasjoner**
1. Prøve 1.A (30 min): Begreper — penger/pengeskaping, deposit multiplier, NPV, realrente, yield, kredittspread (sjanger A).
2. Prøve 1.B (40 min): Obligasjonsprising nullkupong + kupong med pris–rente-inversen (sjanger B).
3. Prøve 1.C (40 min): Yield fra pris + obligasjonsmarkedet i tilbud/etterspørsel med figur (sjanger B+C).
4. Prøve 1.D (40 min): Forward-renter fra terminstrukturen + forventningshypotesen (sjanger D).

**Del 2 — Banken som institusjon**
1. Prøve 2.A (35 min): Begreper — bankfunksjoner, insolvent/illikvid, uheldig utvalg/moralsk hasard, virkemidler (sjanger A+F).
2. Prøve 2.B (40 min): Bankbalanse (T-konto) + risiko per side inkl. valutarisiko (sjanger E).
3. Prøve 2.C (45 min): To-typemodell komplett — deltakelsesvilkår, rente-intervall, komparativ statikk, NPV/effektivitet (sjanger G).
4. Prøve 2.D (45 min): Delegert overvåking + Diamond–Dybvig/intertemporalt valg (sjanger H+I+J).

**Del 3 — Regulering og sentralbank**
1. Prøve 3.A (30 min): Begreper — bank run, innskuddsgaranti, RWA, leverage ratio, lender of last resort, styringsrente, åpne markedsoperasjoner (sjanger A).
2. Prøve 3.B (40 min): Sikkerhetsnett → regulering-mekanismen (garanti → moralsk hasard → tilsyn) (sjanger M).
3. Prøve 3.C (40 min): Kapital-/likviditetskrav, RWA vs. leverage ratio med regning fra balanse (sjanger M).
4. Prøve 3.D (40 min): Sentralbankens rentestyring med reservemarked-figur + åpne markedsoperasjoner (sjanger L).

**Del 4 — Finansiell stabilitet, kriser og teknologi**
1. Prøve 4.A (30 min): Begreper — securitisering/MBS, repo, brannsalg, smitte, systemrisiko, markedseffisiens, rettferdig premie (sjanger A).
2. Prøve 4.B (45 min): Finanskrisen 2007–09 — årsak/forløp/håndtering/regulering i strukturert kortsvar (sjanger N-forberedelse).
3. Prøve 4.C (40 min): Securitisering/MBS + systemrisiko koblet til krisen (sjanger A+O).
4. Prøve 4.D (40 min): Markedseffisiens + forsikringspremie regnet (sjanger A+B).

**Del 5 — Eksamenstrening**
1. Prøve 5.A (30 min): Begrepsdrill i eksamensformat — 8–11 korte begreper på tvers av boka (sjanger A).
2. Prøve 5.B (35 min): Essay-momentliste + disposisjon på finanskrise/finanssystem (sjanger N).
3. Prøve 5.C (45 min): Blandet modelloppgave (to-typemodell + delegert overvåking) på eksamensnivå (sjanger G+H).
4. Prøve 5.D (30 min): Flervalg om pensumartikler (ett riktig svar, med begrunnelse) (sjanger O).

### Øvingseksamener (3 komplette sett, i Del 5)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (kap. 5.3) | Mork (5×10 % + essay 50 %) | Fem korte (begrep, obligasjon, bankbalanse, sentralbank, markedseffisiens) + finanskrise-essay 50 % |
| Øvingseksamen 2 (kap. 5.4) | Wang (begreper + 2 modeller + flervalg) | Begrepsblokk + to-typemodell + delegert overvåking/Diamond–Dybvig + flervalg om artikler |
| Øvingseksamen 3 (kap. 5.5) | Blandet | Forward-renter, obligasjonsmarked, Diamond–Dybvig/intertemporalt, kapitalkrav, artikkeldrøfting |

Settene og prøvene dekker samlet sjangrene A–O minst én gang, og begge maler
(Mork-essay og Wang-modeller/flervalg).

---

## 5. Studieguide-kjerne (fra Del 0 + samlende ressurser)

Del 0 (kap. 0.1) er studieguidens kjerne. I tillegg skal boka samle:

1. **Eksamenskartet** — de to epokene/malene (Mork vs. Wang), de fire søylene,
   temafrekvens-tabellene (fem spor), sjangerkatalogen A–O og prognosen (§1, §7).
2. **De fire søylene i ett blikk** — renter/obligasjoner (neddiskontering →
   obligasjonsprising → yield → forward); bank (funksjoner → balanse → asymmetrisk
   info → tre modeller); regulering/sentralbank (run → garanti → regulering →
   sentralbank); stabilitet (krisen → securitisering → systemrisiko), med
   asymmetrisk informasjon som det gjennomgående limet.
3. **Sensorens metaregler** — vis fremgangsmåten; definer, ikke forutsett;
   klassifiser + begrunn agentproblem; tolk tallene økonomisk; fullstendig
   virkemiddel-liste; figur der relevant; konsisitet belønnes; artikkelforankring
   (Wang).
4. **Feilkatalogen** — de 12 typiske feilene (§5 i analysen) samlet, hver med
   henvisning til kapitlet som forebygger den: ombyttet uheldig utvalg/moralsk
   hasard (2.3); ufullstendig virkemiddel-liste (2.3); glemt pris–rente-invers
   (1.2); utolket fortegn i to-typemodellen (2.4); feil deltakelsesvilkår (2.4);
   run som irrasjonelt (2.6/3.1); EK på feil side / innskudd ikke gjeld (2.2);
   oversett risikoskifting (2.6); blandet RWA/leverage ratio (3.3); ufokusert essay
   (5.2); flervalg uten artikkelkunnskap (5.4); regnefeil i rentesregning (1.1).
5. **Formelark i emnets notasjon** — én side: nullkupong $P = FV/(1+i)^n$;
   kupongobligasjon $P = \sum K/(1+i)^t + FV/(1+i)^n$; yield nullkupong
   $y = (1/\theta)^{1/n} - 1$; forward $(1+y_n)^n = \prod (1+r_k)$, approks.
   $r_{12} \approx 2y_2 - y_1$; Rule of 72; deposit multiplier $= 1/\text{reservekrav}$;
   to-typemodell: investor $p(U-(1+r)L) \ge E$, bank $p(1+r)L \ge L$, frikonkurranse
   $1+r = 1/p$, pooling $1+r = 1/(s+(1-s)p)$; delegert overvåking $p^2, 2p(1-p),
   (1-p)^2$; Diamond–Dybvig $u(c) = 1 - 1/c$; intertemporalt $c_1 + c_2/(1+r) =
   y_1 + y_2/(1+r)$; kapitaldekning $= \text{Tier 1}/RWA$, leverage ratio
   $= \text{kapital}/\text{uvektede eiendeler}$; Lerner-lignende ikke relevant.
   Marker hva som skal *utledes/tolkes* (yield, deltakelsesvilkår,
   sannsynlighetsfordeling) vs. hva som bare slås opp i formelsamlingen
   (rentesformler).
6. **Figurbiblioteket** — standardfigurene i ord: obligasjonsmarkedet i
   tilbud/etterspørsel med skift; bankens T-konto (aktiva/passiva/EK);
   sentralbankens reservemarked med åpne markedsoperasjoner; effektivitet/
   subsidiering i to-typemodellen; sannsynlighetstreet i delegert overvåking — med
   merkekravene per figur (akser, kurver, poster, tilpasningspunkter navngitt).
7. **Kryssreferansekart mot SØK2005** (arbeidsdelingen, §7) — hva SØK2010
   forutsetter og lenker til (neddiskontering, kupongprising, yield, forward)
   vs. hva SØK2010 selv bygger ut (bank, asymmetrisk info, regulering, sentralbank,
   stabilitet).
8. **Studieløp** — anbefalt progresjon (10-ukers og 3-ukers intensiv): Del 1
   (renteverktøyet) → Del 2 (bank + modeller — tyngst) → Del 3 (regulering/
   sentralbank) → Del 4 (stabilitet), prøver underveis, begrepsdrillen (5.1) og
   essay-sjangeren (5.2) parallelt, øvingseksamenene de siste ukene under tidspress
   (240 min). Terp de tre modellene (to-typemodell, delegert overvåking,
   Diamond–Dybvig) og agentproblem-klassifiseringen ekstra.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `sok2010` med alle 27
   kapitler (id/number/title/description/estimatedMinutes/topics/prerequisites)
   etter mønster `COURSE_BI_OKONOMI` i `src/lib/data/textbook-courses-matte.ts`;
   `sectionNames` fra makrostruktur-tabellen (§2). Registrer emnet i
   `src/app/bok/trinn/hoyere/institusjoner.ts` under **NTNU** med visningsnavn
   «SØK2010 Banking».
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–O, frekvenstallene, de to
   epokene/malene og avgrensningen mot SØK2005 som resten refererer til.
3. **Del 1** (renteverktøyet) — neddiskontering/obligasjon/yield/forward som
   resten bruker; gjort kompakt med kryssbok-lenker til SØK2005.
4. **De to tunge delene i avhengighetsrekkefølge**: Del 2 (bank + modeller) →
   Del 3 (regulering/sentralbank). Én byggeagent per hel del (jf. fase 4-batching);
   Del 2 er 7 kapitler, så den kan splittes, men gi da hele delens kontrakter til
   begge agenter og flagg for konsistenssjekk (notasjon $I,E,L,p,s$; deltakelses-
   vilkårene; uheldig utvalg/moralsk hasard-skillet). Drillkapitlet (2.7 / 3.5)
   bygges av samme agent som delen.
5. **Del 4** (stabilitet/kriser/teknologi) — gjenbruker bank-/reguleringsstoffet.
6. **Del 5 til slutt** (begrepsdrill + essay-sjanger + 3 øvingseksamener gjenbruker
   alt); bygges av én agent som leser hele skjelettet.
7. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert;
   prøvene (§4) i prøvekapitler per del etter byggekontraktens spesifikasjon
   (`sok2010-<del>-prove`, chapterNumber `<del>.P`), Del 1–5.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
      (generer helst via `json.dump`; husk å escape `"` i norske sitattegn);
      `npm run build` grønn.
- [ ] **LaTeX**: alle formler i `$...$`/`$$...$$` med dobbel backslash i JSON
      (`\\frac`, `\\sum`, `\\theta`, `\\prod`); ingen unicode-brøker; konsistent
      $P = FV/(1+i)^n$, $y$, $I, E, L, p, s$, $RWA$, $c_1, c_2$.
- [ ] **Notasjonskonsistens**: tekstsøk over alle sok2010-filer — **påkrevd**:
      $P = FV/(1+i)^n$, deltakelsesvilkårene $p(U-(1+r)L) \ge E$ og $p(1+r)L \ge L$,
      sannsynlighetsfordelingen $p^2/2p(1-p)/(1-p)^2$, RWA og leverage ratio holdt
      atskilt; **forbudt/uønsket**: å bygge ut SØK2005-apparatet — grep etter
      «porteføljeteori», «CAPM», «Black-Scholes», «binomisk modell»,
      «dividendemodell» skal gi **null treff** utenom eventuelle kryssbok-lenker/
      avgrensningsmerknader til SØK2005.
- [ ] **Engelsk fagterm i parentes**: grep-sjekk at nøkkelbegrepene har engelsk
      term i parentes ved første forekomst (adverse selection, moral hazard,
      collateral, maturity conversion, risk-weighted assets, leverage ratio,
      yield to maturity, bank run, securitization).
- [ ] **Asymmetrisk info-kravet**: kap. 2.3, 2.4, 2.7 og øvingseksamenene skiller
      eksplisitt **uheldig utvalg (før, skjult type)** fra **moralsk hasard (etter,
      skjult handling)**, klassifiserer eksempler MED begrunnelse, og lister *hvert*
      virkemiddel forklart — grep-sjekk «uheldig utvalg», «moralsk hasard»,
      «screening», «overvåking».
- [ ] **Modell-kravet**: kap. 2.4 har begge deltakelsesvilkår + frikonkurranse/
      monopol-rente + komparativ statikk med fortegn tolket; kap. 2.5 har
      sannsynlighetsfordelingen; kap. 2.6 har selvoppfyllende run og intertemporalt
      valg — grep-sjekk «deltakelsesvilkår», «frikonkurranse», «Diamond».
- [ ] **Regulering-kravet**: kap. 3.2 har sikkerhetsnett → moralsk hasard →
      regulering-mekanismen; kap. 3.3 skiller RWA fra leverage ratio med
      fordeler/ulemper; kap. 3.4 har korrekt retning på åpne markedsoperasjoner
      (salg → høyere rente) med reservemarked-figur.
- [ ] **Vis fremgangsmåten + tolk + figur**: hvert eksempel/løsningsforslag med
      figur har figurbeskrivelse i ord OG verbal tolkning; alle tallsvar (yield,
      NPV, profitt, fortegn på deriverte, kapitaldekning) er verbalt tolket;
      utregning vises (ikke bare endelig svar).
- [ ] **Drøftingselementet**: kap. 5.2 (essay-sjanger) og øvingseksamen 1 (5.3)
      følger drøftings-malen (oppskrift + gjennomskrevet A-besvarelse + momentliste-
      oppgaver), konsist og forankret i fagstoffet — ikke løs synsing.
- [ ] **Flervalg-kravet**: øvingseksamen 2 (5.4) og prøve 5.D har ett-riktig-svar-
      flervalg om pensumartikler med fasit + begrunnelse for hvorfor gale er gale.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene
      fra dette skjelettet), Forkunnskaper-`text` med lenker + Symbol- og
      formelliste-`collapsible` (per delkapittel — forklarer ALLE symboler brukt),
      Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå), 6–12 øvinger
      med `solution` + `hints`, repetisjons-`collapsible`; drillkapitlene (1.5,
      2.7, 3.5) har løsningsoppskrift + sensor-kommentert case + 8–15 oppgaver;
      begrepsdrillen (5.1) har 20–30 begrepsoppgaver; sjangerkapitlet 5.2 følger
      drøftings-malen.
- [ ] **Quiz-sum ≥ 538 og flashcard-sum ≥ 576** per kvotetabellen (kontrollsummér
      mot §3-tabellen — den er autoritativ).
- [ ] **Prøver**: 4 per temadel 1–5 (20 stk) + 3 øvingseksamener; settene og
      prøvene dekker samlet sjangrene A–O minst én gang, og begge maler.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, egne kontekster
      (banker, land, produkter), egne formuleringer; ingen formuleringer fra reelle
      sett eller sensorveiledninger (skjelettets mønstereksempler er selv
      omskrivninger og skal varieres videre, ikke kopieres ordrett inn);
      kalibreringsverdiene fra reelle fasiter (f.eks. yield ≈ 3,7 % ved
      $\theta = 0{,}75, n = 8$; to-typemodell $U=13, A=12, I=10, E=5, p=0{,}8$)
      brukes kun til å velge vanskelighetsgrad, aldri som oppgavetall; pensum
      (bankstoff i Mishkin-tradisjon; artiklene Brunnermeier 2008, Diamond–Dybvig
      1983, Stiglitz–Weiss 1981) refereres, aldri siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
      (200 + kapittelspesifikk streng), jf. lærdommen om `getChapterMeta`;
      institusjonssiden (NTNU) og bokforsiden (seksjonstitlene fra §2) sjekkes.

---

## 7. Arbeidsdeling mot SØK2005 og de andre bygde SOK-bøkene

SØK2010 (Banking) og SØK2005 (Finansmarkeder) — begge NTNU, samme institutt — deler
den **kvantitative rente- og obligasjonsverktøykassen**, men har ellers ulike
tyngdepunkt. Denne tabellen styrer hva SØK2010 bygger ut vs. hva den forutsetter/
kryssrefererer.

| Tema | SØK2005 (bygger ut) | SØK2010 (bygger ut) |
|---|---|---|
| Neddiskontering, obligasjonsprising (nullkupong/kupong), yield to maturity, forward-renter/terminstruktur, pris–rente-inversen | **JA** — full, en av fire aktivaklasser | **JA, men kompakt** — Del 1, bank-anvendt; lenk til SØK2005 for den fulle utledningen |
| Pengeskaping/deposit multiplier, obligasjonsmarked i tilbud/etterspørsel | **NEI** (bankstoff) | **JA** — Del 1 (SØK2010-spesifikt) |
| Porteføljeteori/CAPM, risiko/avkastning, alfa/beta | **JA** — oppgave 1 (risiko/portefølje) | **NEI** — utenfor SØK2010-arkivet; nevnes kort som avgrensning |
| Derivater (opsjoner, binomisk modell, Black–Scholes), forwards/futures-prising | **JA** — egen del | **NEI** — ikke i SØK2010-arkivet |
| Aksjeverdivurdering (dividendemodeller) | **JA** — egen del | **NEI** — ikke selvstendig i SØK2010 |
| Markedseffisiens | (berøres) | **JA, kort** — Del 4 (nivå 3), bank-/finanskrisevinklet |
| Banken som institusjon (balanse, funksjoner, risiko) | **NEI** | **JA** — Del 2 (kjernen) |
| Asymmetrisk informasjon + formelle modeller (to-typemodell, delegert overvåking, Diamond–Dybvig, intertemporalt valg, overinvestering) | **NEI** | **JA** — Del 2 (emnets navlestreng) |
| Regulering, bank run, innskuddsgaranti, kapital-/likviditetskrav, Basel III, RWA vs. leverage ratio, lender of last resort | **NEI** | **JA** — Del 3 (bank-vinkelen) |
| Sentralbank og pengepolitikk (balanse, styringsrente, åpne markedsoperasjoner, NOWA) | **NEI** | **JA** — Del 3 |
| Finansiell stabilitet, finanskrisen 2007–09, securitisering/MBS, systemrisiko, forsikring | **NEI** | **JA** — Del 4 |

**Møtepunkter (kryssrefereres, ikke gjentas):** neddiskontering, kupong-/
nullkupongprising, yield to maturity og forward-renter forutsettes fra SØK2005 og
lenkes dit med markdown-lenker (`[tittel](/bok/sok2005/<chapterId>)`) i
Forkunnskaper-blokkene der studenten trenger den fulle utledningen — SØK2005 utleder
dem grundig som del av verdipapir-verktøykassen, SØK2010 bruker dem kompakt på
bank-/kredittanvendelser (en bank som utsteder/holder obligasjoner, kredittspread).
Overlappet er dermed **smalt og bevisst**: begge bruker rentesregning, men SØK2005
går bredt inn i alle aktivaklasser (portefølje, derivater, aksjer), mens SØK2010 tar
renteverktøyet som byggekloss og bruker plassen på bank, asymmetrisk informasjon,
regulering og finansiell stabilitet. Mot **SOK1002/SØK1011** (mikroøkonomi/marked)
er overlappet ubetydelig — SØK2010 låner kun intertemporalt valg (nyttemaks over to
perioder) som verktøy, og bruker det bank-/spare-anvendt, ikke som konsumentteori.

---

> **Merknad om verifiserte referanser:** Alle modellresultater, notasjon og
> frekvenser er hentet fra `EKSAMENSANALYSE.md`. Standardresultatene
> (nullkupongpris $FV/(1+i)^n$, nullkupong-yield $(1/\theta)^{1/n}-1$,
> deltakelsesvilkårene, sannsynlighetsfordelingen $p^2/2p(1-p)/(1-p)^2$,
> Diamond–Dybvig-terskelen) er faglige fakta uten verkshøyde. Emnet har **ingen
> entydig pensumbok** *(verifiser)* — kildene henviser til bankstoff i
> Mishkin-tradisjon, forelesningsnotater, problemsett (PS2–PS5) og navngitte
> artikler (Brunnermeier 2008, Diamond–Dybvig 1983, Stiglitz–Weiss 1981, «Wholesale
> Funding Dry-Ups», Lehmans «Repo 105», norske OMF/covered bonds, Basel III). Den
> eksakte pensumlisten og eventuell hovedlærebok bør sjekkes mot gjeldende
> emnebeskrivelse før pensumankere skrives inn i kapitlene, siden Wang-epokens
> flervalg (sjanger O) forutsetter nettopp disse artiklene. Fordelingen 2007–09,
> Basel III-detaljer og NOWA-mekanikken er *(verifiser)* mot oppdaterte kilder ved
> bygging.

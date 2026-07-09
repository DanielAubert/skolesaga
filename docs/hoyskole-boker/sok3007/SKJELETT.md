# Bokskjelett: SØK3007 Skatt, beslutningsatferd og økonomisk politikk — eksamensrettet lærebok

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
> `EKSAMENSANALYSE.md` (≈17 lesbare sett V2015–V2024 grundig + eldre skummet,
> og 8 lesbare sensurveiledninger H2016, V2019, H2020, H2022, V2023, H2023 +
> korte varianter — flere med eksplisitt pensumdekning per deloppgave, tekstbaserte).
> Arketype: **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der
> (teori/drill/øvingseksamen) er obligatoriske og gjentas ikke her. Emnet er et
> **masternivå offentlig-økonomi-fag** (7,5 sp) med tung modellutledning, men har
> et fast, tverrgående **drøftingselement**: hver «vis at …» skal ledsages av
> «forklar/tolk/drøft», og *effektivitet vs. fordeling* er drøftingsaksen som går
> igjen. For det ene sjangerkapitlet som drilles verbalt (5.2, effektivitet vs.
> fordeling) lånes struktur fra `DNA-drofting.md` (posisjoner/spenninger →
> momentliste), dokumentert der. Alle mønstereksempler i skjelettet er
> omskrivninger; forfatteren skal variere dem videre (egne tall, egne kontekster,
> egne funksjonsformer), aldri kopiere inn ordrett.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `sok3007` |
| Tittel | **SØK3007 Skatt, beslutningsatferd og økonomisk politikk** |
| Institusjon | NTNU (Institutt for samfunnsøkonomi) |
| Level | `'Høyskole'` |
| Arketype | Regnefag (modell-/utledningsfag på masternivå) med gjennomgående drøftingselement (effektivitet vs. fordeling; tolkning belønnes overalt) |
| Antall kapitler | **25** (1 eksamenskart + 2 modellverktøy + 5 markedssvikt + 6 kollektiv beslutning/organisering + 6 skatt/fordeling + 5 eksamenstrening) |
| Estimert totaltid | **2 220 min ≈ 37 timer** |
| Quiz totalt | **560** (krav ≥500) |
| Flashcards totalt | **548** (krav ≥500) |

**Pitch (ett avsnitt):** SØK3007-eksamen står på **to garanterte hovedbein** som
gjentar seg år etter år: nesten hvert nyere sett har **to store, sammensatte
oppgaver** (likt vektet eller ⅓ / ⅔) — den ene fra **markedssvikt / kollektiv
beslutning / offentlig organisering**, den andre fra **skatt / skattekonkurranse /
fordeling**. Faget er et rendyrket **teori-/modellfag med regneinnslag** på
masternivå (Hindriks & Myles, *Intermediate Public Economics*): studenten skal
kunne *stille opp en modell, utlede og tolke førsteordensbetingelser, sammenligne
med den effektive løsningen, og drøfte resultatet politisk-økonomisk*. Denne boka
er bygget som nettopp de to hovedbeina, hvilende på et kompakt
**modellverktøykapittel** (Lagrange/FOC, komparativ statikk, Nash-likevekt og
reaksjonsfunksjoner, velferds-/Pareto-apparat) som forutsetter mikro-/optimerings-
grunnlaget fra SOK1002 og kryssrefererer dit for ren teknikk. Den driller de **fem
kjernemodellene** som avgjør karakteren og «må kunnes på rygg-margen»: (i)
**kollektivt gode** — privat forsyning (Nash) ↔ effektiv forsyning (Samuelson) ↔
**Lindahl**, med gratispassasjerproblemet; (ii) **medianvelgermodellen** — ønsket
$G^*$ under kopp-skatt vs. proporsjonal inntektsskatt, skattepris, forutsetninger
(endimensjonalitet + entoppethet), høyreskjev fordeling; (iii) **dødvektstap +
optimal vareskatt** — utled $DWL = \tfrac12\,\varepsilon\,(X_0/p)\,t^2$, Ramsey-regelen
og invers elastisitetsregel, effektivitet mot fordeling; (iv) **skattekonkurranse**
på mobilt grunnlag — reaksjonskurver, «for lav» skatt, koordinering, «size matters»;
(v) **pendler-/køeksternalitet** med Pigou-avgift. **Kritisk (kode H):** dagens
ordinære eksamen tillater **kun kalkulator** — ingen formelsamling — så modelloppsett,
standardresultater og utledningsteknikk må sitte i hodet; boka trener studenten til å
**reprodusere modellene fra grunnen**.

**Kritisk avgrensnings- og komplementregel (gjelder HELE boka):** SØK3007 er NTNUs
**masternivå** offentlig-økonomi-emne. Arbeidsdelingen mot allerede-planlagte
SOK-/ECON-bøker er skarp (full tabell i §7). Kort:

- **Mot SØK2011 Offentlig økonomi og økonomisk politikk (NTNU, skjelett — den
  viktigste avgrensningen):** SØK2011 er **bachelornivået** i samme domene. Den eier
  **finansdepartement-teknisk** offentlig økonomi: skatteinsidens fra oppgitte
  tilbud/etterspørsel, dødvektstap som trekantareal, Ramsey på bachelornivå,
  progressiv inntektsskatt, sosial velferdsfunksjon, nytte-kostnadsanalyse/nåverdi,
  intertemporalt valg/folketrygd, og valgparadokset (Condorcet-cycling). SØK2011
  sier eksplisitt at den **ikke** går inn i Mirrlees-optimal-beskatning e.l., og at
  **rent-seeking/medianvelger/Niskanen IKKE er videreført** dit (arv fra det nedlagte
  SØK2103). **Nøyaktig disse master-modellene er kjernen i SØK3007.** SØK3007 skal
  derfor bygge ut: kollektivt gode med **Nash/Samuelson/Lindahl** (privat vs. effektiv
  forsyning — dypere enn bachelor), **medianvelgermodellen** (kopp-skatt vs.
  inntektsskatt, skattepris, forutsetninger), **Downs' to-partimodell**
  (konvergens/divergens), **Niskanen-byråkrati + Wagner**, **agent-problemet i
  offentlig produksjon**, **skattekonkurranse / fiskal føderalisme**, **rent-seeking**,
  og skatte-effektivitet på **masternivå** (DWL-utledning, Ramsey vs. invers
  elastisitet, effektivitet mot fordeling med inntektsskatt-argumentet). Der SØK2011
  og SØK3007 rører samme kjerne (DWL, Ramsey, skatteunndragelse), gjør SØK3007 det
  på **masternivå** (full utledning, tolkning, ekstramodeller) og **kryssrefererer**
  til SØK2011 for det anvendte bachelor-oppsettet der forkunnskapen trengs, i stedet
  for å gjenta det. **Boka skal IKKE bygge ut** skatteinsidens-regnedrillen fra
  oppgitte kurver, progressiv-skatt-klassifiseringen (ART/MRT), NKA/nåverdi eller
  intertemporalt valg — det er SØK2011s domene; lenk dit.
- **Mot SØK1011 Markeder og markedssvikt (NTNU, skjelett):** SØK1011 er
  **bachelornivå** markedssvikt og eier oligopol/spillteori (Cournot/Bertrand/
  Stackelberg), **Pigou-avgift som markedssviktkorrigering** på lineære funksjoner,
  og fellesgode med **sum av betalingsvillighet / Samuelson** i markedskryss-form
  ($\Sigma MB = MC$, vertikal summering). SØK3007 dekker samme *tema* (kollektive
  goder, eksternaliteter) men med **master-modellapparatet**: kollektivt gode
  modelleres via **individuell nyttemaksimering med reaksjonsfunksjoner og Nash-likevekt**
  (ikke bare markedskryss), Lindahl-priser utledes, eksternaliteten er en
  **pendler-/kømodell** med reisetidsfunksjon (ikke lineær $MSC$-figur), og
  klubbgoder får optimal-størrelse/to-delt-tariff-behandling. SØK3007 **rører ikke**
  Cournot/Bertrand/Stackelberg-oligopolet (SØK1011s kjerne). Der begge nevner
  Samuelson-betingelsen, gjør SØK3007 det via nyttefunksjons-utledningen og
  kryssrefererer til SØK1011 for markedskryss-intuisjonen.
- **Mot SOK1002 Mikroøkonomi (NTNU, skjelett):** SOK1002 bygger opp Lagrange,
  optimering, nyttemaks og elastisitet. SØK3007 **forutsetter** dette og
  kryssrefererer med markdown-lenker (`[tittel](/bok/sok1002/<chapterId>)`) i stedet
  for å gjenta utledningene — særlig Lagrange/FOC og elastisitetsdefinisjonen.
  SØK3007s eget bidrag er **modellene** (kollektivt gode, median, DWL/Ramsey,
  skattekonkurranse) og **drøftingen**, ikke ren optimeringsteknikk.
- **Mot ECON4620-familien (UiO, offentlig økonomi) og ECON3610/4610 (velferd):**
  konseptuelle master-slektninger (samme fagtradisjon: kollektive goder, optimal
  beskatning, fordeling, velferdsteoremer). Ingen slik UiO-bok er bygget ennå; hvis/
  når den skrives, bør den krysshenvises. Ikke forveksle SØK3007s «beslutningsatferd»
  (kollektiv/politisk: velgere, partier, byråer — public choice) med **individuell
  atferdsøkonomi** (prospektteori, tidsinkonsistens) i SØK2012/ECON4260 — det er et
  helt annet fag.

**Kritisk notasjonsregel (gjelder HELE boka)** — arkivnotasjonen fra
sensurveiledningene skal brukes nøyaktig, ikke lærebok-alternativer:

- **Kollektivt gode:** kollektivt gode $G$, privat konsum $x^h$/$x_i$, individ $h$s
  bidrag $g^h$, samlet $G = g_1 + g_2$; nyttefunksjon typisk $U^h = \log x^h + \alpha \log G$
  eller kvasilineær $x_i + b(G)$ med $b' > 0,\ b'' < 0$. Velferdsfunksjon $W = \sum U^h$.
  Lagrange-multiplikator $\lambda$. Lindahl-priser $\tau$ og $1-\tau$.
- **Medianvelger:** $N$ velgere, inntekt $y_i$, gjennomsnitt $\bar y$, median $y_m$;
  kopp-skatt (lik $T$ for alle), proporsjonal sats $t$; ønsket kollektivt gode $G_i^*$;
  **skattepris** $y_i/(N\,\bar y)$; preferansevekt $\alpha$.
- **Skatt/DWL:** enhetsavgift $t$, (kompensert) priselastisitet $\varepsilon$,
  produsentpris $p$, kvantum før skatt $X_0$; **dødvektstap**
  $DWL = \tfrac12\,\varepsilon\,(X_0/p)\,t^2$; skatteunndragelse-betingelse
  $p \ge 1/(1-F)$.
- **Eksternalitet:** andel bilister $x$, reisetid (bil) $C(x) = a + b\,x$, fast/lineær
  kollektivtid, tidsverdi/timelønn, Pigou-avgift = ekstern marginalkostnad × tidsverdi.
- **Skattekonkurranse:** mobilt skattegrunnlag (kapital), skattesats/kildeskatt,
  **reaksjonskurver** (figur 20.2-analog), stort vs. lite land.
- **Public choice / byrå:** medianposisjon, entoppede preferanser, budsjettmaksimerende
  byrå (grensenytte = grensekostnad ved effektiv størrelse; sponsors nytte = 0 i
  Niskanen-likevekten), inntektselastisitet > 1 (Wagner).
- **Fordeling:** Gini-koeffisient, sosial velferdsfunksjon, omfordeling.

**Kritisk metoderegel (gjelder HELE boka):** Fem faste sensorkrav gjelder overalt,
utledet av de åtte lesbare veiledningene: **(a) «gode forklaringer og tolkninger
belønnes»** — står i nesten hvert sett; et korrekt sluttresultat uten intuisjon/
tolkning gir *ikke* full uttelling, en utledning skal alltid ledsages av hva
resultatet betyr økonomisk. **(b) Modellforankring og formell analyse** — «formell
analyse trekker opp»; full uttelling krever eksplisitt oppsett + FOC, ikke bare
verbal drøfting. **(c) Sammenlign alltid med den effektive løsningen** — poenget er
avviket: Nash < Samuelson (gratispassasjer), byrå > effektiv størrelse,
skattekonkurranse ⇒ for lav skatt; retningen *og* årsaken er kjernen. **(d)
Presiser forutsetningene og *begrunn* dem** — for median: endimensjonalitet +
entoppethet, og hvorfor de er oppfylt (budsjettbetingelsen kollapser $(t,G)$ til én
dimensjon; nytten er konkav i $G$). **(e) Effektivitet vs. fordeling skal drøftes
eksplisitt** der oppgaven inviterer, inkludert poenget om at fordeling helst ivaretas
av (progressiv/optimal) inntektsskatt slik at avgifter settes rent effektivt (Mankiw
«Lesson 6»). **Ekstramodeller trekker opp** uten å være påkrevd (nevne både
Bureaucracy og Government Agency, ta med risikoaversjon i rent-seeking, utlede Ramsey
i stedet for bare invers elastisitet, small-country-resultatet). Merk **kode H**:
alt dette må kunnes uten formelsamling.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): modellverktøyet i bunn,
deretter de to hovedbeina, til slutt eksamenstreningen. Frekvensen styrer *omfanget*
— de to hovedbeina er ~100 %-gjengangere (hvert nyere sett har normalt én stor
oppgave fra hver) og får hver sin fulle del. Merk at «kollektiv beslutning /
organisering» og «markedssvikt» begge sorterer under hovedbein 1 (én av de to store
oppgavene), mens skatt/fordeling er hovedbein 2 (den andre); de er derfor delt i tre
temadeler (Del 2, 3, 4) som samlet dekker de to beina.

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. Rammer inn de to hovedbeina, de fem kjernemodellene, kode H og avgrensningen mot SØK2011/SØK1011/SOK1002. |
| 1 | Modellverktøykassen | 2 | Lagrange/FOC, komparativ statikk, Nash-likevekt/reaksjonsfunksjoner og velferds-/Pareto-apparatet forutsettes aktivt i hver modelloppgave. Bygger på SOK1002 → kompakt, med kryssbok-lenker. Kode H: metoden må sitte uten formelsamling. |
| 2 | Markedssvikt: kollektive goder, eksternaliteter og klubbgoder | 5 | Hovedbein 1, markedssvikt-grenen. Kollektivt gode Nash↔Samuelson↔Lindahl ~40 %, pendler-/køeksternalitet ~35 %, definisjon/typologi ~30 %, Lindahl ~20 %, klubbgode ~15 %, allmenning ~10 % → nivå 1–2 «perfekt/kunne». |
| 3 | Kollektiv beslutning og offentlig organisering | 6 | Hovedbein 1, beslutnings-/organiseringsgrenen. Medianvelger ~45 % (mest gjentatte public-choice-modell), Niskanen-byrå ~30 %, Downs ~25 %, agent-problem ~20 %, Wagner ~20 %, fiskal føderalisme/budsjettskranker ~20 %, rent-seeking ~10 % → nivå 1–3. |
| 4 | Skatt, effektivitet og fordeling | 6 | Hovedbein 2 (den andre store oppgaven). Skattekonkurranse ~55 % (hyppigste skattemodell), Ramsey ~45 % + effektivitet/fordeling ~45 %, invers elastisitet ~35 %, DWL ~30 %, skatt vs. lump-sum ~20 %, skatteunndragelse ~15 %, Gini/velferdsfunksjon ~15 % → nivå 1–4. |
| 5 | Eksamenstrening | 5 | Begrepsdrill (definisjoner + modellskisser), sjangerkapittel for drøftingsaksen effektivitet vs. fordeling (drøfting), og 3 komplette øvingseksamener som speiler to-store-oppgaver-malen (marked/beslutning + skatt). |

**Avvik fra DNA-malen (dokumentert):**
1. DNA-en legger *alle* sjanger-/drillkapitler i siste del. Her ligger de tre
   drillkapitlene (2.5 markedssvikt, 3.6 beslutning/organisering, 4.6 skatt) inne i
   sine egne temadeler, fordi disse ER de gjennomgående eksamensoppgavene og må
   drilles umiddelbart etter teorien. Del 5 beholder begrepsdrillen, drøftingssjanger-
   kapitlet og de tre øvingseksamenene.
2. DNA-en er ren regnefag. SØK3007 har et **gjennomgående drøftingselement** — hver
   «vis at …» følges av «forklar/tolk/drøft», og *effektivitet vs. fordeling* er
   drøftingsaksen. Kapittel 5.2 er derfor bygget etter `DNA-drofting.md`s sjanger-
   kapittel-mal (oppskrift → gjennomskrevet A-besvarelse med margkommentarer →
   momentliste-oppgaver). Drøftingen forankres i den forutgående modellanalysen og i
   pensumbidragene (Sandmo, Mankiw et al.), ikke i løs synsing.
3. Del 1 (modellverktøy) er strengt tatt forkunnskap, ikke et tema som testes
   isolert, men får egen (kompakt) del fordi Lagrange/FOC + Nash/reaksjonsfunksjoner
   + velferdsapparatet er en selvstendig ferdighet sensor forventer under **kode H**,
   og fordi den forankrer kryssbok-lenkene til SOK1002.

---

## 3. Kapitler

Feltene under følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–J) refererer til
oppgavetype-katalogen som presenteres i Del 0 (gjengitt der fra analysen §3): **A**
kollektivt gode Nash↔Samuelson↔Lindahl, **B** pendler-/køeksternalitet med Pigou-avgift,
**C** medianvelger (kopp-skatt vs. inntektsskatt), **D** DWL + optimal vareskatt
(Ramsey/invers elastisitet) + fordeling, **E** skattekonkurranse (fiskal føderalisme),
**F** byråkrati (Niskanen + Wagner), **G** Downs' to-partimodell (konvergens/divergens),
**H** agent-problem/asymmetrisk informasjon i offentlig produksjon, **I** fordeling
(Gini/velferdsfunksjoner), **J** klubbgode/to-delt tariff, allmenning, rent-seeking.
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet: slik testes SØK3007

- **id:** `sok3007-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen
- **Kapitteltype:** eksamenskart
- **description:** Eksamensformen, de to garanterte hovedbeina, de fem kjernemodellene, kode H (kun kalkulator), temafrekvensene, sjangerkatalogen A–J og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på ≈17 lesbare sett + 8 sensurveiledninger. Skal gjengi: (i) **formen**: 4 timers skriftlig skoleeksamen (09–13), karakter A–F, 7,5 studiepoeng, digital i Inspera med opplasting av håndtegnede figurer (30 min ekstra kun til digitalisering); **hjelpemiddelkode-historikk**: kode C (eldre sett: kalkulator + Sydsæter-formelsamling), kode A (V2021 + hjemmeeksamener «alle hjelpemidler»), og **kode H (dagens ordinære form: kun kalkulator, ingen formelsamling)** — praktisk konsekvens: modellene må reproduseres fra grunnen; oppgavetekst på bokmål og nynorsk; faste instruksjoner «gjør dine egne antagelser og presiser forutsetningene» og «**gode forklaringer og tolkninger belønnes på alle oppgaver**». (ii) **Strukturutviklingen**: fra fire småoppgaver (2015–2016) til dagens **to store, sammensatte oppgaver** (likt vektet eller ⅓ / ⅔); hver stor oppgave har 3–4 deloppgaver (a–d) som bygger på hverandre (sett opp modell → utled FOC → sammenlign med effektiv løsning → drøft/utvid); «vis at …» + «tolk/forklar/drøft» i samme oppgave. (iii) **De to hovedbeina** (alltid til stede): ett bein om **markedssvikt / kollektiv beslutning / offentlig organisering** (kollektivt gode, eksternalitet, median, byrå, føderalisme, agent), ett om **skatt / skattekonkurranse / fordeling**. (iv) **Temafrekvens-tabellene** (fra analysen §2): skattekonkurranse ~55 %, Ramsey ~45 %, effektivitet/fordeling ~45 %, medianvelger ~45 %, kollektivt gode Nash/Samuelson ~40 %, pendler-eksternalitet ~35 %, invers elastisitet ~35 %, definisjon/typologi av goder ~30 %, DWL-utledning ~30 %, Niskanen-byrå ~30 %, Downs ~25 %, Lindahl ~20 %, Wagner ~20 %, agent-problem ~20 %, fiskal føderalisme/budsjettskranker ~20 %, skatt vs. lump-sum ~20 %, klubbgode ~15 %, skatteunndragelse ~15 %, Gini/velferdsfunksjon ~15 %, allmenning ~10 %, rent-seeking ~10 %. (v) De **fem kjernemodellene** «på rygg-margen» (kollektivt gode Nash↔Samuelson↔Lindahl, median kopp-skatt vs. inntektsskatt, DWL + Ramsey/invers elastisitet, skattekonkurranse med reaksjonskurver, pendler-/køeksternalitet med Pigou) med hvor de drilles. (vi) At oppgavene pakkes i **aktualitet** (selskapsskatt/Irland, alpin dags- vs. sesongkort, forurensende pendling) men at modellen alltid er standard offentlig økonomi. (vii) **Sensorens metaregler** (analysens §4): tolkning belønnes; formell analyse trekker opp; sammenlign alltid med den effektive løsningen; presiser og begrunn forutsetningene; drøft effektivitet vs. fordeling; ekstramodeller trekker opp; pensumforankring i Hindriks & Myles + Sandmo + Mankiw et al. (viii) **Karakterskillene** (analysens §4): bunn (E–D) = kjenner igjen modellen, delvis utledning, verbal forklaring uten full utledning; midt (C) = korrekt oppsett med FOC og hovedresultat (reaksjonsfunksjon, Nash/Samuelson, $G_i^*$, DWL-uttrykket, reaksjonskurvene), riktig figur, tolker; topp (A/B) = utleder alt formelt *og* tolker konsekvent, tar med ekstramodeller, drøfter effektivitet vs. fordeling presist inkl. inntektsskatt-argumentet, håndterer spesialtilfeller (høyreskjev fordeling, sterkere preferanse ⇒ høyere Lindahl-andel, small-country), kobler til virkelighet.
- **Innholdskontrakt:** Oppgavetype-katalogen A–J presenteres som studentens sjekkliste med typisk plassering: hovedbein 1 (én stor oppgave) = A *eller* C (oftest), alternativt B/F/G/H; hovedbein 2 (den andre store oppgaven) = E *eller* D (oftest), alternativt I. **Prognose for neste eksamen** (analysens §7): overveldende sannsynlig to store, sammensatte oppgaver, 4 timer, kode H — én fra markedssvikt/beslutning/organisering (mest sannsynlig kollektivt gode eller medianvelger; alternativt eksternalitet/pendler, byråkrati, agent), én fra skatt (mest sannsynlig skattekonkurranse eller DWL + Ramsey/invers elastisitet + fordeling); minst én oppgave krever en **figur** (reaksjonskurver, DWL, indifferens/budsjett), og hver kombinerer «vis at …» med «forklar/tolk/drøft». Avslutt med **avgrensningen**: hva som IKKE er pensum her (skatteinsidens-regnedrill fra oppgitte kurver, progressiv-skatt-klassifisering ART/MRT, NKA/nåverdi, intertemporalt valg og valgparadokset hører til **SØK2011**; oligopol/Cournot/Bertrand/Stackelberg og markedssvikt-Pigou på lineære figurer til **SØK1011**; ren Lagrange-/optimeringsteknikk til **SOK1002** — bruk kryssbok-lenker der forkunnskapen trengs; individuell atferdsøkonomi til SØK2012), og **leseplanen**: Del 1 er verktøy man må ha klart; Del 2 og Del 3 er hovedbein 1; Del 4 er hovedbein 2; Del 5 er ren trening.
- **Oppgavesjangre:** Ingen modelloppgaver; 3–4 refleksjonsoppgaver av typen «gitt to likt vektede oppgaver og 240 minutter (kode H) — sett opp tidsbudsjett og hvilken figur hver oppgave trolig krever» og «hvilke fem kjernemodeller avgjør karakteren, og i hvilket kapittel drilles hver?».
- **Typiske feil:** Metafeilene: stoppe ved utledningen uten tolkning (hovedfeilen — «tolkninger belønnes» står i hvert sett); gi ren verbal drøfting der formell analyse kreves; pugge stoff fra naboemnene (skatteinsidens-drill fra SØK2011, oligopol fra SØK1011) som ikke er hovedvekten her; tro at kode C-formelsamlingen er tilgjengelig (dagens form er kode H).
- **Quiz: 14 · Flashcards: 12** (eksamensform, kode H, de to hovedbeina, fem kjernemodeller, frekvenser, sjangerkatalog, metaregler, avgrensning)

**Prøve-kvote Del 0:** ingen (metadel).

---

### Del 1 — Modellverktøykassen *(prioritet: forkunnskap — må sitte uten formelsamling)*

> **Kode H-skille:** dagens ordinære eksamen tillater **ingen formelsamling**, kun
> kalkulator. Hvert kapittel i Del 1 skal derfor eksplisitt merke «dette må du kunne
> sette opp og reprodusere fra hukommelsen» — Lagrange-oppsettet, en FOC, en
> reaksjonsfunksjon, en velferdssammenligning. Selve *anvendelsen* på et konkret
> offentlig-økonomi-problem er alltid det eksamen tester, aldri ren teknikk. Denne
> delen er **kompakt** — hoveddelen av derivasjons-/optimeringsapparatet ligger
> allerede i SOK1002, som det kryssrefereres til.

#### Kapittel 1.1: Optimering, FOC og komparativ statikk for offentlig økonomi

- **id:** `sok3007-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** ingen
- **Kapitteltype:** teori (verktøy)
- **description:** Lagrange og førsteordensbetingelser brukt på SØK3007s modelloppgaver — nyttemaks med budsjettbetingelse, tolkning av multiplikatoren, og komparativ statikk (fortegn på deriverte) — reprodusert fra grunnen for kode H.
- **Eksamensbelegg:** Selve metoden bak nesten hver modelloppgave (kollektivt gode, median, DWL, skattekonkurranse). Sensuren setter opp Lagrange/FOC uten kommentar; studenten må kunne det flytende og **uten formelsamling** (kode H). Bygger på [Optimering: Lagrange, tangering og andreordensbetingelser](/bok/sok1002/sok1002-1-2) fra SOK1002 — kryssrefereres, ikke gjentas fullt. Prioritet: **forkunnskap** (må sitte).
- **Innholdskontrakt:** Forkunnskap: SOK1002 kap. 1.2 (den generelle Lagrange-metoden, tangering, andreordensbetingelser). Her **anvendt**: for $\max\ U(x, G)$ gitt budsjett $x + g = M$, sett $\mathcal{L} = U - \lambda(x + g - M)$, FOC → tangering $U_G/U_x = $ pris; tolkning av $\lambda$ = grensenytten av inntekt / skyggepris. **Log-nytte og kvasilineær nytte:** for $U = \log x + \alpha \log G$ gir FOC eksplisitte etterspørsler; for kvasilineær $x + b(G)$ forsvinner inntektseffekten på $G$ (bare $b'(G) = $ pris) — vis begge, siden begge går igjen i modelloppgavene. **Komparativ statikk:** fortegnsanalyse av hvordan en løsning flytter seg når en parameter endres (f.eks. flere individer, høyere pris) — differensier FOC. Merk hva som *må reproduseres* under kode H (oppsettet, FOC, fortegn) vs. hva SOK1002 utleder (selve derivasjonsreglene). Andreordensbetingelse nevnes kvalitativt (konkav nytte sikrer indre maksimum).
- **Oppgavesjangre:** Byggekloss for A, C, D. Mønstereksempel: «Maksimer $U = \log x + \tfrac12 \log G$ gitt $x + G = 100$ med Lagrange, finn $x$ og $G$, og tolk multiplikatoren.»
- **Typiske feil:** Glemme budsjettbetingelsen som tredje likning; feiltolke $\lambda$; behandle en annen aktørs valgvariabel som gitt der den skulle deriveres (og omvendt); hoppe over intuisjonen bak FOC; feil fortegn i komparativ statikk.
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 1.2: Nash-likevekt, reaksjonsfunksjoner og velferds-/Pareto-apparatet

- **id:** `sok3007-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok3007-1-1`
- **Kapitteltype:** teori (verktøy)
- **description:** De to gjennomgående verktøyene i modelloppgavene — enkel spillteori (Nash-likevekt via reaksjonsfunksjoner) og velferdsteorien (Pareto-effektivitet, samfunnsøkonomisk overskudd, velferdsfunksjon) — reprodusert fra grunnen.
- **Eksamensbelegg:** Reaksjonsfunksjoner + Nash-likevekt er kjernen i kollektivt gode (privat forsyning), skattekonkurranse og Downs' divergens; velferds-/Pareto-apparatet er sammenligningsgrunnlaget i *hver* modelloppgave (Nash < Samuelson, byrå > effektiv, skatt for lav). «Sammenlign alltid med den effektive løsningen» er fast sensorkrav (§4c). Bygger på SOK1002 for optimeringen; velferdsteorien bygges her. Prioritet: **forkunnskap** (må sitte).
- **Innholdskontrakt:** **Nash-likevekt via reaksjonsfunksjoner:** hver aktør maksimerer egen nytte/profitt gitt den andres valg → **reaksjonsfunksjon** $g_i(g_j)$; **Nash-likevekt** = skjæringen (ingen aktør angrer gitt den andres valg). Symmetrisk likevekt når aktørene er identiske ($g_1 = g_2$). Tegn reaksjonskurver i $(g_1, g_2)$-planet; merk helning/fortegn (strategiske substitutter: fallende reaksjonskurve). **Velferdsapparatet:** **Pareto-effektivitet** (ingen kan få det bedre uten at en annen får det verre); **samfunnsøkonomisk overskudd** og **velferdsfunksjon** $W = \sum U^h$ (evt. vektet) som normativt kriterium; det **første og andre velferdsteoremet** kort (konkurranselikevekt Pareto-effektiv; enhver Pareto-optimal allokering kan desentraliseres med riktige overføringer — begrunnelsen for skille effektivitet/fordeling). Understrek den tverrgående drøftingsaksen: **avviket** mellom likevekt og effektiv løsning er poenget i alle modelloppgavene, og velferdsfunksjonen er redskapet for å veie effektivitet mot fordeling. Kode H: reaksjonsfunksjons-utledning og velferdsmaksimering må kunne settes opp uten formelsamling.
- **Oppgavesjangre:** Byggekloss for A, E, G, I. Mønstereksempel: «To identiske aktører velger bidrag $g_i$ til et felles prosjekt. Utled reaksjonsfunksjonen, finn den symmetriske Nash-likevekten, og sammenlign med den allokeringen som maksimerer $W = U_1 + U_2$.»
- **Typiske feil:** Behandle den andre aktørens valg som en valgvariabel i egen FOC; feil helning på reaksjonskurven; forveksle Nash-likevekt og Pareto-effektiv løsning; ikke bruke velferdsfunksjonen som eksplisitt sammenligningsgrunnlag; blande de to velferdsteoremene.
- **Quiz: 24 · Flashcards: 24**

**Prøve-kvote Del 1:** 4 prøver (1.A Lagrange/FOC-oppsett på et nyttemaks-problem med log- og kvasilineær nytte, med $\lambda$-tolkning og komparativ statikk; 1.B reaksjonsfunksjon + symmetrisk Nash-likevekt utledet og tegnet i $(g_1,g_2)$-planet; 1.C velferds-/Pareto-apparatet — maksimer $W = \sum U^h$, sammenlign med en gitt likevekt, drøft effektivitet vs. fordeling kort; 1.D blandet verktøyprøve — FOC + Nash + velferdssammenligning anvendt på et lite offentlig-økonomi-utsnitt, alt reprodusert som under kode H).

---

### Del 2 — Markedssvikt: kollektive goder, eksternaliteter og klubbgoder *(prioritet: PERFEKT/KUNNE — hovedbein 1, markedssvikt-grenen)*

> **Forkunnskaps- og avgrensningsskille mot SØK1011:** SØK1011 (bachelor) eier
> markedssvikt i **markedskryss-form** — Pigou-avgift på lineære $MSC$/$MB$-figurer,
> fellesgode via $\Sigma MB = MC$ (vertikal summering). SØK3007 bygger de **samme
> temaene på master-modellapparatet**: kollektivt gode via **individuell nyttemaks
> med reaksjonsfunksjoner og Nash-likevekt** (privat forsyning) mot **velferds-
> maksimering** (Samuelson) mot **Lindahl-priser**; eksternaliteten som en
> **reisetids-/kømodell**. Der markedskryss-intuisjonen for Samuelson/Pigou trengs,
> lenkes til SØK1011; SØK3007 utleder modellene.

#### Kapittel 2.1: Kollektive goder: definisjon, typologi og trengsel

- **id:** `sok3007-2-1` · **number:** 2.1 · **estimatedMinutes:** 45 · **prerequisites:** `sok3007-1-1`
- **Kapitteltype:** teori
- **description:** Hva som gjør et gode kollektivt — ikke-rivaliserende og/eller ikke-ekskluderbart — og typologien rene kollektive goder, klubbgoder og trengselsgoder (congestion), som rammer inn hele markedssviktdelen.
- **Eksamensbelegg:** Definisjon/typologi av goder ~30 % — «gratis» poeng når det spørres, og fundamentet for både kollektivt-gode-modellen (kap. 2.2–2.3) og klubbgode (kap. 2.4). Kap. 6.2 i Hindriks & Myles. Prioritet: **kunne** (fundament for hele delen).
- **Innholdskontrakt:** **Ikke-rivaliserende** (én persons bruk reduserer ikke andres nytte av godet) og **ikke-ekskluderbart** (umulig/kostbart å stenge noen ute). **Typologien** (2×2): rent privat gode (rivaliserende + ekskluderbart), **rent kollektivt gode** (ikke-rivaliserende + ikke-ekskluderbart, f.eks. forsvar), **klubbgode** (ikke-rivaliserende men ekskluderbart, f.eks. betalt bro/alpinanlegg), **allmenning/felles ressurs** (rivaliserende men ikke-ekskluderbart). **Trengsel (congestion):** et gode kan være ikke-rivaliserende opp til et metningspunkt, deretter oppstår trengselskostnad (bro, vei) → bro til klubbgode-analysen (kap. 2.4). Understrek at det er *disse egenskapene*, ikke hvem som produserer godet, som avgjør markedssvikten. Legg grunnlaget for hvorfor markedet svikter: ikke-ekskluderbarhet ⇒ gratispassasjer (kap. 2.2).
- **Oppgavesjangre:** A (definisjonsledd) + J-fundament. Mønstereksempel: «Forklar hva som skiller et rent kollektivt gode fra et klubbgode, og gi et eksempel på et gode som er ikke-rivaliserende bare opp til et trengselspunkt.»
- **Typiske feil:** Forveksle ikke-rivaliserende og ikke-ekskluderbart; klassifisere et gode ut fra hvem som produserer det (ikke egenskapene); overse trengsel/congestion; ikke koble ikke-ekskluderbarhet til gratispassasjerproblemet.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 2.2: Kollektivt gode: privat forsyning (Nash) og gratispassasjerproblemet

- **id:** `sok3007-2-2` · **number:** 2.2 · **estimatedMinutes:** 65 · **prerequisites:** `sok3007-2-1`, `sok3007-1-2`
- **Kapitteltype:** teori
- **description:** Privat, frivillig forsyning av et kollektivt gode modellert som et bidragsspill: konsumentens budsjett og nyttefunksjon, reaksjonsfunksjonen, den symmetriske Nash-likevekten og undertilbudet som skyldes gratispassasjer.
- **Eksamensbelegg:** Del av kollektivt-gode-modellen (~40 %, hovedbein 1 sammen med median) — H2022, V2017, H2020, V2016. Reaksjonsfunksjoner og symmetrisk Nash-likevekt kreves; «sammenlign med den effektive løsningen» (§4c) er poenget. Kap. 6.2–6.4. Prioritet: **perfekt**.
- **Innholdskontrakt:** To (identiske) konsumenter, hver med inntekt $M$, budsjett $x^h = M - g^h$, samlet gode $G = g_1 + g_2$, nyttefunksjon typisk $U^h = \log x^h + \alpha \log G$. **Steg 1:** konsument 1 maksimerer $U^1$ mhp. eget bidrag $g_1$ (tar $g_2$ som gitt) → FOC → **reaksjonsfunksjonen** $g_1(g_2)$ (fallende i $g_2$ — den andres bidrag fortrenger eget). **Steg 2:** symmetri ($g_1 = g_2$) → **Nash-likevektens** samlede $G^{Nash}$. **Steg 3:** tolk: hver konsument tar bare hensyn til *egen* marginalnytte av $G$, ikke den andres → **gratispassasjerproblemet** → **undertilbud** (foregriper sammenligningen med Samuelson i kap. 2.3). Figurkrav: reaksjonskurvene i $(g_1, g_2)$-planet med Nash-likevekten i skjæringen. Vis både generell form og et talleksempel. Kode H: hele kjeden må reproduseres uten formelsamling.
- **Oppgavesjangre:** A (del 1). Mønstereksempel: «To identiske konsumenter med $U^h = \log x^h + \alpha \log G$ og inntekt $M$ bidrar frivillig til et kollektivt gode. Utled konsument 1s reaksjonsfunksjon, finn den symmetriske Nash-likevekten, og forklar hvorfor det oppstår undertilbud.»
- **Typiske feil:** Behandle den andres bidrag som en valgvariabel i egen FOC; feil helning på reaksjonskurven; finne Nash-likevekten uten å *begrunne* den; ikke forklare gratispassasjer-mekanismen; hoppe over figuren.
- **Quiz: 26 · Flashcards: 24**

#### Kapittel 2.3: Effektiv forsyning (Samuelson) og Lindahl-løsningen

- **id:** `sok3007-2-3` · **number:** 2.3 · **estimatedMinutes:** 60 · **prerequisites:** `sok3007-2-2`
- **Kapitteltype:** teori
- **description:** Den effektive forsyningen av et kollektivt gode (Samuelson-betingelsen: sum av marginale betalingsviljer = marginalkostnad), avviket fra Nash-likevekten, og Lindahl-løsningen med individuelle priser som gjenoppretter effektivitet.
- **Eksamensbelegg:** Samuelson-sammenligningen fullfører kollektivt-gode-oppgaven (~40 %); Lindahl ~20 % (H2022 c/d). «Sammenlign med den effektive løsningen» og «sterkere preferanse ⇒ høyere kostnadsandel» er A/B-markører (§4). Kap. 6.2–6.6. Prioritet: **perfekt** (Samuelson) / **kunne** (Lindahl).
- **Innholdskontrakt:** **Samuelson-betingelsen:** maksimer velferdsfunksjonen $W = U_1 + U_2$ (eller Pareto-problemet) mhp. samlet $G$ → **sum av marginale betalingsviljer = marginalkostnad** ($\sum_h MRS^h_{G,x} = MC$). Vis at den effektive $G^*$ er **høyere** enn Nash-likevektens $G^{Nash}$ (kap. 2.2) → kvantifiser undertilbudet og forklar hvorfor (privat forsyning internaliserer bare egen marginalnytte). **Lindahl-løsningen:** individuelle priser (kostnadsandeler) $\tau$ og $1 - \tau$ satt etter hver konsuments **marginale betalingsvilje** → hver konsument velger frivillig den effektive $G^*$; ved like preferanser blir andelene like, ved sterkere preferanse hos den ene blir *dens* andel høyere. Understrek at Lindahl er effektiv men krever at preferansene er kjent (insentiv til å underrapportere → praktisk problem). Figur/tabell: Nash vs. Samuelson på $G$-aksen; Lindahl-andelene. Kode H: Samuelson-FOC må reproduseres.
- **Oppgavesjangre:** A (del 2). Mønstereksempel: «For konsumentene i forrige oppgave, finn den velferdsmaksimerende mengden av det kollektive godet, sammenlign med Nash-likevekten, og finn Lindahl-prisene som desentraliserer den effektive løsningen.»
- **Typiske feil:** Bruke privat FOC (marginalnytte = pris) i stedet for Samuelson (*sum* av marginalnytter = MC); ikke vise at $G^* > G^{Nash}$; feil retning på Lindahl-andelene (sterkere preferanse skal gi *høyere* andel); ikke tolke avviket; glemme at Lindahl forutsetter kjente preferanser.
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 2.4: Eksternaliteter: pendler-/kømodell med Pigou-avgift

- **id:** `sok3007-2-4` · **number:** 2.4 · **estimatedMinutes:** 60 · **prerequisites:** `sok3007-1-1`
- **Kapitteltype:** teori
- **description:** En negativ eksternalitet modellert som en pendler-/kømodell: bil (reisetid stiger med antall bilister) mot kollektivtransport, privat likevekt vs. samfunnsoptimal andel, og Pigou-avgiften som implementerer optimum.
- **Eksamensbelegg:** Pendler-/køeksternalitet ~35 % — en signaturoppgave (H2015, V2016, V2021). «Forveksle privat og samfunnsoptimal andel» er en typisk feil (analysens §5). Prioritet: **kunne** (nivå 2, høyt belønnet).
- **Innholdskontrakt:** Andel bilister $x$ (resten tar kollektivt), bilreisetid $C(x) = a + b\,x$ (stiger med antall bilister), fast/lineær kollektivtid. **Privat likevekt:** hvert individ minimerer *egen* reisetid → likevekt der bil og kollektiv gir **lik** reisetid (marginal beslutning på individnivå). **Samfunnsoptimal andel:** minimer *total*/gjennomsnittlig reisetid → internaliserer at én ekstra bilist øker *alle* bilisters tid (den **eksterne** marginalkostnaden) → færre bilister enn i privat likevekt. Vis at $x^{opt} < x^{privat}$. **Pigou-avgift:** en avgift lik den eksterne marginalkostnaden (× tidsverdi/timelønn for å gjøre den til kroner) flytter privat likevekt til optimum. Regn et talleksempel (f.eks. $C(x) = 20 + 50x$, kollektivtid 50, tidsverdi 300 kr/time → privat andel, optimal andel, avgift). Figurkrav: reisetid mot andel, privat likevekt og optimum. Kode H: modelloppsett og avgiftsutledning fra hukommelsen.
- **Oppgavesjangre:** B. Mønstereksempel: «Bilreisetiden er $C(x) = a + b\,x$ og kollektivtiden er fast. Finn den frie (private) andelen bilister og den andelen som minimerer gjennomsnittlig reisetid, og bestem avgiften som implementerer optimum gitt en tidsverdi.»
- **Typiske feil:** **Forveksle privat og samfunnsoptimal andel** (sette gjennomsnittsminimering lik individuell tidsminimering); glemme at den eksterne kostnaden er at *egen* kjøring øker *andres* tid; feil omregning fra tid til kroner (tidsverdi); regne avgiften i feil punkt; ikke tolke eksternaliteten.
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 2.5: Klubbgoder, allmenning og drill: markedssviktoppgaven

- **id:** `sok3007-2-5` · **number:** 2.5 · **estimatedMinutes:** 85 · **prerequisites:** `sok3007-2-4`, `sok3007-2-3`
- **Kapitteltype:** drill (med nivå-3-teori: klubbgode + allmenning)
- **description:** Nivå-3-temaene klubbgode/to-delt tariff og allmenningens tragedie, deretter sjangerdrill på hele markedssviktoppgaven: fra modelloppsett til fullført A-besvarelse med kollektivt gode (Nash/Samuelson/Lindahl) eller eksternalitet (Pigou), med tolkning.
- **Eksamensbelegg:** Klubbgode ~15 % (V2023, kap. 7.3), allmenning ~10 % (H2019) — nivå 3, roterer inn; drillen dekker sjangrene A, B, J samlet — hele markedssvikt-grenen av hovedbein 1. Prioritet: **kjenne** (klubbgode/allmenning) / **perfekt** (drillen på A og B).
- **Innholdskontrakt:** **Klubbgode / to-delt tariff (nivå 3):** optimal klubbstørrelse med trengselskostnad — flere medlemmer deler den faste kostnaden men øker trengselen; **to-delt tariff** (fast medlemsavgift + variabel bruksavgift) for optimal utnyttelse. Forklar hvorfor virkelige prismodeller (alpin dags- vs. sesongkort) avviker: heterogene brukere og konkurranse. **Allmenning (nivå 3):** overforbruk av felles ressurs fordi hver bruker overser at eget uttak reduserer andres; **skatt eller kvote** gjenoppretter effektivitet (parallell til Pigou). **Drill — løsningsoppskrift (algoritme):** *kollektivt-gode-spor:* 1) budsjett + nyttefunksjon; 2) reaksjonsfunksjon + Nash-likevekt (privat forsyning); 3) Samuelson-betingelsen + effektiv $G^*$; 4) vis undertilbudet, forklar gratispassasjer; 5) evt. Lindahl-andeler; 6) tolk. *eksternalitets-spor:* 1) reisetids-/kostnadsfunksjon; 2) privat likevekt (lik tid/egen minimering); 3) samfunnsoptimum (total minimering); 4) Pigou-avgift = ekstern marginalkostnad; 5) tolk. **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling ved hvert steg — særlig reaksjonsfunksjonen, Samuelson-betingelsen, undertilbudet, skillet privat/optimum, den verbale tolkningen). **8–12 oppgaver** på eksamensnivå som roterer arketype (kollektivt gode / eksternalitet / klubbgode) × leveranse, alle med nyskrevne, pent kalibrerte tall og `solution` + `hints`.
- **Oppgavesjangre:** A, B, J. Mønstereksempel (full kjede, kollektivt gode): «(a) To konsumenter med $U^h = \log x^h + \alpha \log G$ bidrar frivillig. Finn Nash-likevekten. (b) Finn den effektive $G^*$ og forklar avviket. (c) Finn Lindahl-prisene. (d) Drøft hvorfor Lindahl er vanskelig å gjennomføre i praksis.»
- **Typiske feil:** Hele markedssvikt-repertoaret fra §5: privat FOC i stedet for Samuelson; ikke sammenligne med effektiv løsning; forveksle privat/optimal andel i eksternaliteten; feil Lindahl-andeler; horisontal i stedet for korrekt aggregering; utolkede resultater; ubegrunnet Nash.
- **Quiz: 18 · Flashcards: 12**

**Prøve-kvote Del 2:** 4 prøver (2.A begreper markedssvikt — kollektivt gode (ikke-rival/ikke-ekskluderbar), klubbgode, trengsel, gratispassasjer, Samuelson-betingelsen, Lindahl-pris, Pigou-avgift, sjanger A; 2.B kollektivt gode komplett — reaksjonsfunksjon + Nash-likevekt + Samuelson + undertilbud + Lindahl, sjanger A; 2.C pendler-/køeksternalitet — privat vs. samfunnsoptimal andel + Pigou-avgift med tidsverdi, sjanger B; 2.D blandet markedssvikt inkl. klubbgode/to-delt tariff eller allmenning med skatt/kvote, sjanger A+B+J).

---

### Del 3 — Kollektiv beslutning og offentlig organisering *(prioritet: PERFEKT/KUNNE/KJENNE — hovedbein 1, beslutnings-/organiseringsgrenen)*

#### Kapittel 3.1: Medianvelgermodellen: kopp-skatt vs. proporsjonal inntektsskatt

- **id:** `sok3007-3-1` · **number:** 3.1 · **estimatedMinutes:** 70 · **prerequisites:** `sok3007-1-1`
- **Kapitteltype:** teori
- **description:** Den mest gjentatte public-choice-modellen: velgernes ønskede kollektive gode $G^*$ under kopp-skatt og under proporsjonal inntektsskatt, skatteprisen, de to forutsetningene bak medianvelgerteoremet, og utfallet under en høyreskjev inntektsfordeling.
- **Eksamensbelegg:** Medianvelger ~45 % — den mest gjentatte public-choice-modellen (H2016, V2021, V2022, V2024). «Ikke begrunne medianvelger-forutsetningene» er en typisk feil (§5); høyreskjev fordeling og Pareto-effektivitet er A/B-nyanser. Kap. 11 / «A Political Model» 5.3.4. Prioritet: **perfekt**.
- **Innholdskontrakt:** $N$ velgere med inntekt $y_i$, preferanser over privat konsum og kollektivt gode (typisk $U_i = \alpha \log G + (1-\alpha)\log x_i$, eller kvasilineær $x_i + b(G)$). **Steg 1 — ønsket $G^*$:** utled velger $i$s ønskede $G_i^*$ under **(a) kopp-skatt** (lik $T$ for alle → $G_i^*$ knyttet til egen inntekt) og **(b) proporsjonal inntektsskatt** (sats $t$, provenyet $t\sum y_j = t N \bar y$ → hver velgers ønskede $G$ avhenger av **skatteprisen** $y_i/(N\bar y)$: en rikere velger betaler mer per krone $G$ og ønsker mindre). **Steg 2 — medianvelgerteoremet:** *begrunn* forutsetningene: budsjettbetingelsen kollapser $(t, G)$ til **én dimensjon**, og nytten er konkav i $G$ → **entoppede** preferanser → flertallsvalg gir **medianvelgerens** ønske som likevekt. **Steg 3 — høyreskjev fordeling:** når median < gjennomsnitt ($y_m < \bar y$, typisk for inntekt), ønsker medianvelgeren *mer* omfordeling/$G$ under inntektsskatt enn gjennomsnittsvelgeren → sammenlign utfallene under de to skatteformene og drøft om løsningen er Pareto-/samfunnsøkonomisk effektiv. Figurkrav: entoppede preferanser over $G$; medianvelgeren. Kode H: skatteprisen og $G_i^*$ må utledes fra grunnen.
- **Oppgavesjangre:** C. Mønstereksempel: «Med $U_i = \alpha \log G + (1-\alpha)\log x_i$ og proporsjonal inntektsskatt, vis at velger $i$s ønskede $G$ avhenger av skatteprisen $y_i/(N\bar y)$. Begrunn at medianvelgerteoremet gjelder, finn likevekten, og sammenlign med utfallet under kopp-skatt når inntektsfordelingen er høyreskjev.»
- **Typiske feil:** **Ikke begrunne forutsetningene** (hoppe rett til «medianvelgeren bestemmer» uten å vise endimensjonalitet + entoppethet); glemme skatteprisen; forveksle kopp-skatt og proporsjonal skatt; feil retning ved høyreskjev fordeling; ikke drøfte effektiviteten.
- **Quiz: 26 · Flashcards: 24**

#### Kapittel 3.2: Downs' to-partimodell: konvergens og divergens

- **id:** `sok3007-3-2` · **number:** 3.2 · **estimatedMinutes:** 60 · **prerequisites:** `sok3007-3-1`, `sok3007-1-2`
- **Kapitteltype:** teori
- **description:** Downs' romlige modell for partikonkurranse: konvergens mot medianvelgeren (uavhengig av om partiene bryr seg om politikken), og divergens når partiene er usikre på velgerpreferansene — utledet med FOC og Nash-likevekt.
- **Eksamensbelegg:** Downs ~25 % (V2017, V2023, H2023-sensur). Konvergens-argumentet «uavhengig av politikkpreferanse» og divergens-utledningen er A/B-markører. Kap. 11.8.1 (konvergens) og 11.8.2 (divergens). Prioritet: **kunne** (nivå 2).
- **Innholdskontrakt:** **Konvergens (11.8.1):** to partier plasserer seg på en endimensjonal politikkakse; begge flytter mot **medianposisjonen** fordi det å ligge nærmere medianen gir både valgseier *og* en gjennomført politikk nærmere eget ideal → resultatet holder **uavhengig** av om partiene er rent maktsøkende eller også politikk-motiverte. Forutsetninger: troverdige løfter, ingen usikkerhet om velgerne, én dimensjon, entoppede preferanser (kobling til kap. 3.1). **Divergens (11.8.2):** når partiene **ikke kjenner** medianvelgerens posisjon (usikkerhet) — sett opp hvert partis forventede nytte (sannsynlighet for valgseier × politikk-nytte), utled **FOC**, finn **Nash-likevekten** i plattformer; vis at **mer usikkerhet ⇒ større divergens**, og **høyere verdi av regjeringsmakt ⇒ likere plattformer** (partiene ofrer ideologi for valgseier). Tolk begge resultatene. Kode H: divergens-FOC må kunne settes opp.
- **Oppgavesjangre:** G. Mønstereksempel: «Vis at to partier konvergerer mot medianvelgeren uansett om de bryr seg om politikken, og modifiser deretter modellen med usikkerhet om velgerne slik at den forklarer divergens. Hvordan påvirker verdien av regjeringsmakt divergensen?»
- **Typiske feil:** Tro at konvergens krever at partiene er rent maktsøkende; ikke få frem at usikkerhet er drivkraften bak divergens; sette opp divergens-problemet uten sannsynlighetsvekting; feil retning på hvordan regjeringsverdien påvirker plattformene; ikke tolke.
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 3.3: Byråkrati og offentlig sektor «for stor»: Niskanen og Wagner

- **id:** `sok3007-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** `sok3007-1-1`
- **Kapitteltype:** teori
- **description:** Niskanen-modellen for et budsjettmaksimerende byrå (produksjon over det effektive; allokerings- men ikke nødvendigvis kostnadsineffektivitet) og Wagners lov om hvorfor offentlig sektor vokser (inntektselastisitet > 1).
- **Eksamensbelegg:** Niskanen ~30 % (H2017, V2018, H2018, V2019), Wagner ~20 % (H2018, V2019) — ofte kombinert. «Byråkratimodellen bakvendt» (byrå gir for *liten* sektor, eller blande allokerings- og kostnadsineffektivitet) er en typisk feil (§5). Prioritet: **kunne** (nivå 2).
- **Innholdskontrakt:** **Niskanen:** byrået har **informasjonsfordel** overfor sin sponsor (politikeren) og maksimerer **budsjettet** (ikke overskudd) opp til der sponsors **netto nytte = 0** → produksjon **over** det effektive nivået (der grensenytte = grensekostnad). Vis at dette gir **allokeringsineffektivitet** (for mye produsert) men **ikke nødvendigvis kostnadsineffektivitet** (byrået kan produsere billig, bare for mye). Sammenlign byråets størrelse med den samfunnsøkonomisk effektive (grensenytte = grensekostnad). **Wagners lov:** offentlig sektor vokser relativt fordi tjenestene det offentlige produserer har **inntektselastisitet > 1** (etterspørres mer enn proporsjonalt når inntekten stiger). Figurkrav: sponsors nytte/etterspørsel og byråets kostnad; effektiv vs. Niskanen-størrelse. Kode H: sammenligningen effektiv vs. budsjettmaksimerende må kunne settes opp.
- **Oppgavesjangre:** F. Mønstereksempel: «Forklar hvordan et budsjettmaksimerende byrå kan gjøre offentlig sektor for stor, sammenlign med den effektive produksjonen der grensenytte = grensekostnad, og forklar med Wagners lov hvorfor offentlig sektor likevel kan vokse av seg selv.»
- **Typiske feil:** **Byråkratimodellen bakvendt** (påstå at Niskanen gir for *liten* sektor); blande allokerings- og kostnadsineffektivitet; glemme informasjonsfordelen; forveksle Wagners lov (inntektselastisitet) med andre vekstårsaker; ikke sammenligne med effektiv størrelse.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 3.4: Agent-problemet og asymmetrisk informasjon i offentlig produksjon

- **id:** `sok3007-3-4` · **number:** 3.4 · **estimatedMinutes:** 55 · **prerequisites:** `sok3007-3-3`
- **Kapitteltype:** teori
- **description:** Prinsipal–agent-problemet i offentlig produksjon: politikeren kjenner bare sannsynlighetsfordelingen for byråets/agentens kostnader, mens agenten kjenner dem selv — hvorfor first-best svikter, og den andre-beste kontrakten.
- **Eksamensbelegg:** Agent-problem ~20 % (H2017, H2023). Å nevne både Bureaucracy (5.4.1) og Government Agency (5.4.5) er en ekstramodell som «trekker opp» (§4). Prioritet: **kunne** (nivå 2).
- **Innholdskontrakt:** **Oppsett:** prinsipal (velger/politiker) vil ha en tjeneste produsert; **agenten** (byrået) har privat informasjon om egne kostnader — prinsipalen kjenner bare **sannsynlighetsfordelingen**. **First-best (full informasjon):** prinsipalen betaler nøyaktig kostnaden og krever effektiv produksjon. **Svikt under asymmetrisk informasjon:** hvis prinsipalen tilbyr first-best-kontrakten, vil en lavkostnads-agent **etterligne** en høykostnads-agent og innkassere informasjonsrente → den naive løsningen svikter. **Andre-beste kontrakt:** prinsipalen tilbyr en meny/kontrakt som (i) gir lavkostnads-agenten en informasjonsrente for å avsløre seg (insentivbetingelse) og (ii) forvrenger høykostnads-agentens produksjon nedover (deltakelses-/effektivitetsavveining) — det klassiske «rent vs. effektivitet»-resultatet. Nevn at Hindriks & Myles behandler dette både under **Bureaucracy** og **Government Agency** (å referere begge trekker opp). Nivå: utled hovedstrukturen; full mekanismedesign er ikke krav. Kode H: oppsettet og intuisjonen må sitte.
- **Oppgavesjangre:** H. Mønstereksempel: «Analyser agent-problemet i offentlig produksjon når politikeren bare kjenner sannsynlighetsfordelingen for byråets kostnader. Vis hvorfor den naive first-best-løsningen svikter, og forklar hovedtrekkene i den andre-beste kontrakten.»
- **Typiske feil:** Tro at first-best er gjennomførbar under asymmetrisk informasjon; glemme informasjonsrenten til lavkostnads-agenten; overse forvrengningen av høykostnads-produksjonen; ikke koble til rent-vs-effektivitet-avveiningen; bare nevne én av de to pensummodellene.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 3.5: Fiskal føderalisme: myke vs. harde budsjettskranker og rent-seeking

- **id:** `sok3007-3-5` · **number:** 3.5 · **estimatedMinutes:** 55 · **prerequisites:** `sok3007-1-2`
- **Kapitteltype:** teori
- **description:** Forholdet mellom forvaltningsnivåer: statlige overføringer og problemet med myke budsjettskranker (uheldige låneinsentiver hos kommuner), pluss rent-seeking som sløsing i kampen om en gevinst.
- **Eksamensbelegg:** Fiskal føderalisme / budsjettskranker ~20 % (H2020, kap. 19.6); rent-seeking ~10 % (H2020, kap. 12.3). Bygger opp mot skattekonkurransen (kap. 4.1, den andre føderalisme-modellen). Prioritet: **kjenne** (nivå 3, men budsjettskranker roterer inn).
- **Innholdskontrakt:** **Harde vs. myke budsjettskranker:** en kommune står overfor en **hard** budsjettskranke hvis den selv må bære konsekvensen av overforbruk/gjeld, og en **myk** hvis den forventer at staten redder den ut (bailout). Modeller samspillet stat–kommune (kap. 19.6): forventer kommunen redning, får den insentiv til å **låne/bruke for mye** og skyve regningen oppover → statlige overføringer kan gi uheldige låneinsentiver. Diskuter hvordan troverdige (harde) skranker demper problemet. **Rent-seeking / tilkarringsvirksomhet (kap. 12.3):** ressurser sløses på å *kapre* en gevinst (lobbyisme, kø for en rente) i stedet for å skape verdi; **sløsingen øker med antall aktører** (probabilistic vs. deterministic game); anvendes på **effektivitetstapet ved monopol** (ressurser brukt på å oppnå/beskytte monopolet). Risikoaversjon som ekstramodell (trekker opp). Nivå: forklar mekanismene med enkle oppsett. Kode H: intuisjonen og et enkelt oppsett må sitte.
- **Oppgavesjangre:** F/H-slekt + J (rent-seeking). Mønstereksempel: «Forklar hvordan en myk budsjettskranke overfor kommunene kan gi uheldige låneinsentiver, og hvordan rent-seeking sløser ressurser i kampen om en offentlig gevinst.»
- **Typiske feil:** Forveksle hard og myk budsjettskranke; overse at det er *forventningen* om redning som skaper insentivet; tro at rent-seeking-sløsingen er uavhengig av antall aktører; ikke koble rent-seeking til monopoltapet.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 3.6: Drill: beslutnings- og organiseringsoppgaven

- **id:** `sok3007-3-6` · **number:** 3.6 · **estimatedMinutes:** 85 · **prerequisites:** `sok3007-3-5`, `sok3007-3-1`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på beslutnings-/organiseringsgrenen av hovedbein 1: fra modelloppsett til fullført A-besvarelse med medianvelger, Downs, byråkrati/Wagner, agent-problem eller føderalisme, med tolkning.
- **Eksamensbelegg:** Dekker sjangrene C, G, F, H samlet — den ene mulige store oppgaven fra hovedbein 1 når den ikke er markedssvikt. **Medianvelger drilles til overmål** (den mest gjentatte public-choice-modellen). Prioritet: **perfekt** (median) / **kunne** (Downs, byrå, agent).
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) identifiser modell (skatt-finansiert kollektivt gode → median; partikonkurranse → Downs; offentlig produksjon størrelse → Niskanen/Wagner; kostnads-informasjon → agent; forvaltningsnivåer → føderalisme); 2) (median) utled $G_i^*$ under kopp-skatt og inntektsskatt, skattepris, **begrunn** forutsetningene, finn medianvelgerens likevekt, drøft høyreskjev fordeling/effektivitet; (Downs) konvergens-argumentet + divergens-FOC; (Niskanen) effektiv vs. budsjettmaksimerende størrelse; (agent) first-best-svikt + andre-beste; 3) tolk alt verbalt; 4) figur der relevant (entoppede preferanser, Niskanen-størrelse). **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling ved hvert steg — særlig skatteprisen, den *begrunnede* forutsetningsdrøftingen, sammenligningen med effektiv størrelse, tolkningen). **8–12 oppgaver** på eksamensnivå som roterer modell × leveranse, alle med nyskrevne, pent kalibrerte tall og `solution` + `hints`.
- **Oppgavesjangre:** C, G, F, H. Mønstereksempel (full kjede, median): «(a) Med $U_i = \alpha \log G + (1-\alpha)\log x_i$ og proporsjonal inntektsskatt, utled ønsket $G_i^*$ og skatteprisen. (b) Begrunn at medianvelgerteoremet gjelder og finn likevekten. (c) Sammenlign med kopp-skatt under høyreskjev fordeling. (d) Er utfallet Pareto-effektivt?»
- **Typiske feil:** Hele beslutnings-repertoaret fra §5: ubegrunnede median-forutsetninger; byråkratimodellen bakvendt; konvergens/divergens forvekslet; first-best under asymmetrisk info; utolkede resultater; manglende sammenligning med effektiv løsning.
- **Quiz: 18 · Flashcards: 12**

**Prøve-kvote Del 3:** 4 prøver (3.A begreper beslutning/organisering — medianvelgerteorem, skattepris, entoppede preferanser, Niskanen-byrå, Wagners lov, myk budsjettskranke, rent-seeking, sjanger A; 3.B medianvelger komplett — $G_i^*$ under kopp-skatt vs. inntektsskatt + skattepris + forutsetninger + høyreskjev fordeling, sjanger C; 3.C Downs konvergens/divergens + Niskanen/Wagner, sjanger G+F; 3.D agent-problem i offentlig produksjon + fiskal føderalisme/budsjettskranker, sjanger H).

---

### Del 4 — Skatt, effektivitet og fordeling *(prioritet: PERFEKT/KUNNE — hovedbein 2, den andre store oppgaven)*

#### Kapittel 4.1: Skattekonkurranse på mobilt skattegrunnlag

- **id:** `sok3007-4-1` · **number:** 4.1 · **estimatedMinutes:** 65 · **prerequisites:** `sok3007-1-2`, `sok3007-3-5`
- **Kapitteltype:** teori
- **description:** Den hyppigste skattemodellen: skattekonkurranse mellom regioner/land om et mobilt skattegrunnlag (kapital) — reaksjonskurver, «for lav» skatt pga. fiskal eksternalitet, underforsyning av offentlige goder, koordinering og «size matters».
- **Eksamensbelegg:** Skattekonkurranse ~55 % — den hyppigste enkeltmodellen på skattesiden og den mest robuste enkeltprognosen (V2018, H2017, V2020, V2022, H2023). «Feil retning på resultatet» (ikke få frem at skatten blir for *lav*) er en typisk feil (§5). Kap. 20.2 («Competitive/Strategic Behavior», «size matters» 20.2.3). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Mekanismen:** to regioner/land beskatter et **mobilt grunnlag** (kapital) som flykter til lavskatteregionen. Hver region setter «for lav» skatt fordi den ikke internaliserer at grunnlaget den tiltrekker seg **forsvinner fra den andre** (en **fiskal eksternalitet**) → skattene blir lavere enn de ville vært under koordinering → **underforsyning av offentlige goder**. **Modellen:** sett opp hver regions problem (velg skattesats gitt den andres), utled og **forklar reaksjonskurvene** (region As optimale skatt stiger i region Bs skatt — strategiske komplementer), finn Nash-likevekten i skjæringen, vis at den gir for lav skatt. **Utvidelser (A/B):** kan **samarbeid/koordinering** rette opp underforsyningen (felles høyere skatt)? **«Size matters» (20.2.3):** et **lite** land setter lavere skatt enn et stort (mer å vinne på å tiltrekke seg mobilt grunnlag relativt til egen base) og er **ikke tjent med** koordinering → vanskeligere å koordinere (jf. Irlands lave selskapsskatt). Figurkrav: reaksjonskurver i $(t_A, t_B)$-planet med Nash-likevekten. Kode H: reaksjonskurve-utledningen fra grunnen.
- **Oppgavesjangre:** E. Mønstereksempel: «Vis med en modell for skattekonkurranse mellom to kommuner hvordan skatt på et mobilt grunnlag blir for lav, tegn og tolk reaksjonskurvene, og drøft om koordinering kan rette opp underforsyningen — og hvorfor et lite land kan motsette seg samarbeid.»
- **Typiske feil:** **Feil retning på resultatet** (ikke få frem at skatten blir for *lav* / underforsyning); glemme den fiskale eksternaliteten (grunnlaget forsvinner fra den andre); rote med reaksjonskurvene (feil helning/ikke utlede dem); ikke fange «size matters» (lite land velger lav skatt, motsetter seg samarbeid); ikke tolke.
- **Quiz: 28 · Flashcards: 24**

#### Kapittel 4.2: Dødvektstap ved beskatning

- **id:** `sok3007-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok3007-1-1`
- **Kapitteltype:** teori
- **description:** Effektivitetstapet ved en vridende skatt utledet formelt — $DWL = \tfrac12\,\varepsilon\,(X_0/p)\,t^2$ — og tolket: tapet vokser med elastisiteten og med kvadratet av satsen, som gir «lave skatter på brede grunnlag».
- **Eksamensbelegg:** DWL-utledning ~30 % (H2022, V2024). At tapet vokser med *kvadratet* av satsen er sensorpoeng; «feil om DWL-uttrykket» (glemme kvadratet eller elastisiteten) er en typisk feil (§5). Kap. 15.2. Prioritet: **perfekt** (fundament for Ramsey).
- **Innholdskontrakt:** For perfekt elastisk tilbud (produsentpris $p$) og fallende etterspørsel, en enhetsavgift $t$: **utled** effektivitetstapet som trekantarealet fra kvantumsreduksjonen → **$DWL = \tfrac12\,\varepsilon\,(X_0/p)\,t^2$** (der $\varepsilon$ er (tallverdien av) etterspørselselastisiteten, $X_0$ kvantum før skatt). **Tolkning (to egenskaper):** (i) DWL øker med **etterspørselselastisiteten** — mer elastisk ⇒ større kvantumsrespons ⇒ større tap (skatt derfor det inelastiske godet mest — foregriper Ramsey); (ii) DWL øker med **kvadratet av satsen** — å doble $t$ firedobler tapet → **«lave skatter på brede grunnlag»** (mange små avgifter framfor få store). Vis begge med talleksempel og figur (skattekilen, trekanten). Skill overføring (proveny) fra tap (trekant). Kode H: utledningen fra grunnen. Kryssrefererer til [SØK2011 for det anvendte skatteinsidens-oppsettet](/bok/sok2011/sok2011-2-1) der det bachelor-tekniske grunnlaget trengs.
- **Oppgavesjangre:** D (del 1). Mønstereksempel: «Utled $DWL = \tfrac12\,\varepsilon\,(X_0/p)\,t^2$ for en enhetsavgift, tolk uttrykket, og forklar hvorfor det er en fordel å bruke lave satser på brede grunnlag.»
- **Typiske feil:** **Feil om DWL-uttrykket** (glemme at tapet vokser med *kvadratet* av satsen, eller ikke koble til elastisiteten); forveksle proveny (overføring) med tap (trekant); regne på konstant elastisitet der den varierer; ikke tolke de to egenskapene.
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 4.3: Optimal vareskatt: Ramsey-regelen og invers elastisitetsregel

- **id:** `sok3007-4-3` · **number:** 4.3 · **estimatedMinutes:** 65 · **prerequisites:** `sok3007-4-2`
- **Kapitteltype:** teori
- **description:** Optimal design av vareskatter kun etter effektivitet: invers elastisitetsregel (uelastiske varer beskattes hardest) og Ramsey-regelen (like relative kvantumsreduksjoner langs kompensert etterspørsel), med skillet mellom de to.
- **Eksamensbelegg:** Ramsey ~45 %, invers elastisitet ~35 % (H2016, H2018, V2019, H2019, H2022, V2024). «Blande Ramsey og invers elastisitet» er en typisk feil (§5); Ramsey-utledningen «trekker opp» (§4). Kap. 15.5.1/15.5.2 + Sandmos artikkel. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Invers elastisitetsregel:** når godene har uavhengig etterspørsel, minimeres samlet DWL for gitt proveny ved å sette skattesatsene **omvendt proporsjonale med etterspørselselastisitetene** → **uelastiske varer beskattes hardest** (der atferdsresponsen, og dermed tapet, er minst). **Ramsey-regelen:** det mer generelle resultatet — den optimale skattestrukturen gir **like relative (prosentvise) kvantumsreduksjoner** langs den **kompenserte** etterspørselen for alle beskattede goder. **Skillet (A/B):** Ramsey forutsetter **ikke** uavhengig etterspørsel (tar hensyn til krysseffekter) og «trekker mer» enn invers elastisitet, som er spesialtilfellet med uavhengig etterspørsel. Utled invers elastisitet fra $\min \sum DWL$ under provenybibetingelse (Lagrange); presenter Ramsey-betingelsen og tolk. Forankre i **Sandmo** (normativ beskatningsteori). Kode H: minst invers elastisitet må kunne utledes; Ramsey-betingelsen tolkes. Foregriper fordelingsnyansen (kap. 4.4).
- **Oppgavesjangre:** D (del 2). Mønstereksempel: «Utled den inverse elastisitetsregelen for to varer med uavhengig etterspørsel, forklar hvorfor uelastiske varer beskattes hardest, og gjør rede for hvordan Ramsey-regelen skiller seg fra den.»
- **Typiske feil:** **Blande Ramsey og invers elastisitet** (behandle dem som identiske); snu regelen (skattlegge det elastiske mest); glemme provenybibetingelsen; tro at Ramsey forutsetter uavhengig etterspørsel; ikke tolke.
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 4.4: Effektivitet mot fordeling og skatt vs. lump-sum

- **id:** `sok3007-4-4` · **number:** 4.4 · **estimatedMinutes:** 55 · **prerequisites:** `sok3007-4-3`
- **Kapitteltype:** teori
- **description:** Den tverrgående drøftingsaksen anvendt på skattedesign: hvorfor optimal vareskatt (Ramsey) kan komme i konflikt med fordeling, inntektsskatt-argumentet (Mankiw «Lesson 6»), og hvorfor lump-sum-skatt er effektiv men lite brukt.
- **Eksamensbelegg:** Effektivitet vs. fordeling ~45 % (fast drøftingsledd på skatteoppgavene), skatt vs. lump-sum ~20 % (V2021, H2019). «Overse effektivitet–fordeling-konflikten» eller inntektsskatt-motargumentet er en typisk feil (§5). Mankiw et al. «Lesson 6», Sandmo. Prioritet: **perfekt** (drøftingsakse) / **kunne** (lump-sum).
- **Innholdskontrakt:** **Effektivitet vs. fordeling i skattedesign:** ren Ramsey/invers elastisitet skattlegger uelastiske goder hardt — men uelastiske goder er ofte **nødvendighetsgoder** som utgjør en større budsjettandel for **lavinntektshushold** → ren effektivitet kan være **regressiv** (konflikt effektivitet/fordeling). **Inntektsskatt-argumentet (Mankiw «Lesson 6»):** fordeling ivaretas best av en (progressiv/optimal) **inntektsskatt**, slik at **vareavgiftene kan settes rent etter effektivitet** — dette er A/B-nyansen sensor belønner (§4e). **Lump-sum-skatt:** en fast, atferdsuavhengig skatt gir **ingen** vridning/DWL og er derfor effektiv, men brukes lite fordi den enten er urimelig fordelingsmessig (lik for alle uansett evne) eller krever informasjon om evne som ikke er tilgjengelig (den ideelle evne-baserte lump-sum er ikke gjennomførbar → vridende skatter er «second best»). Dette forklarer hvorfor indirekte skatt er vridende og lump-sum et referansepunkt. Forankre i **Sandmo** og **Mankiw et al.** Kode H: argumentene må kunne fremføres presist. Kryssrefererer til [SØK2011 for sosial velferdsfunksjon på bachelornivå](/bok/sok2011/sok2011-3-1) der det anvendte oppsettet trengs.
- **Oppgavesjangre:** D (del 3) + I-fundament. Mønstereksempel: «Drøft hvordan fordelingshensyn bør modifisere Ramsey-regelen, forklar hvorfor en inntektsskatt kan bære fordelingshensynet slik at avgiftene settes rent effektivt, og gjør rede for hvorfor lump-sum-skatt er effektiv men lite brukt.»
- **Typiske feil:** **Overse effektivitet–fordeling-konflikten**; overse inntektsskatt-motargumentet (at fordeling kan bæres av inntektsskatten); tro at lump-sum brukes ofte (den er second-best-referanse); ikke forankre i pensum; drøfte uten å knytte an til modellresultatet.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 4.5: Fordeling (Gini, velferdsfunksjoner) og skatteunndragelse

- **id:** `sok3007-4-5` · **number:** 4.5 · **estimatedMinutes:** 50 · **prerequisites:** `sok3007-4-4`
- **Kapitteltype:** teori (nivå 3–4)
- **description:** Fordelingsmålene (Gini-koeffisienten og sosiale velferdsfunksjoner, omfordeling) og skatteunndragelse som valg under usikkerhet (forventet nytte, oppdagingsbetingelsen, tredjepartsrapportering, normer).
- **Eksamensbelegg:** Gini/velferdsfunksjon ~15 % (H2015), skatteunndragelse ~15 % (H2016, kap. 17.3) — nivå 3–4, gir bredde og trekker opp. Prioritet: **kjenne** (nivå 3–4).
- **Innholdskontrakt:** **Gini-koeffisienten:** definér via Lorenz-kurven (areal mellom diagonalen og Lorenz-kurven, normalisert); egenskaper (0 = full likhet, 1 = full ulikhet). **Gini-invariant omfordeling:** gi et eksempel på en omfordeling mellom individer som *ikke* endrer Gini (H2015-typen), og beskriv en **sosial velferdsfunksjon** som er forenlig med den (additiv $W = \sum U_i$ vs. maks-min/Rawls $W = \min U_i$ — ulik grad av ulikhetsaversjon). Koble fordelingsmål til normativ velferdsteori. **Skatteunndragelse (kap. 17.3):** modellér som valg under usikkerhet — den skattepliktige velger hvor mye som rapporteres, avveier forventet gevinst ved unndragelse mot straff × oppdagingssannsynlighet → **oppdagingsbetingelsen** $p \ge 1/(1-F)$ (der $F$ er straffefaktoren) for at ærlig rapportering skal lønne seg; **tredjepartsrapportering** (arbeidsgiver rapporterer lønn) og **sosiale normer** reduserer unndragelse. Nivå: definisjon + hovedbetingelse. Kode H: definisjonene og betingelsen må sitte.
- **Oppgavesjangre:** I (+ skatteunndragelse). Mønstereksempel: «Gi et eksempel på en omfordeling mellom tre individer som lar Gini-koeffisienten være uendret, og beskriv en velferdsfunksjon som er forenlig med dette. Utled deretter betingelsen for at ærlig skatterapportering lønner seg.»
- **Typiske feil:** Regne Gini feil / forveksle med Lorenz-kurven; tro at all omfordeling endrer Gini; forveksle additiv og maks-min velferdsfunksjon; feil i oppdagingsbetingelsen; glemme tredjepartsrapportering/normer.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 4.6: Drill: skatteoppgaven

- **id:** `sok3007-4-6` · **number:** 4.6 · **estimatedMinutes:** 85 · **prerequisites:** `sok3007-4-5`, `sok3007-4-1`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på hele hovedbein 2 (skatteoppgaven): fra modelloppsett til fullført A-besvarelse med skattekonkurranse (reaksjonskurver) eller DWL + Ramsey/invers elastisitet + fordeling, med tolkning.
- **Eksamensbelegg:** Dekker sjangrene E, D, I samlet — den andre store oppgaven (hovedbein 2), ~100 %-gjenganger. **Skattekonkurranse og DWL + Ramsey drilles til overmål** (de to arketypene i rotasjon). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** *skattekonkurranse-spor:* 1) sett opp hver regions problem (skatt på mobilt grunnlag); 2) utled og **tolk reaksjonskurvene**, tegn i $(t_A,t_B)$-planet; 3) finn Nash-likevekten, vis at skatten er for lav (fiskal eksternalitet → underforsyning); 4) drøft koordinering og «size matters»; 5) tolk. *DWL/Ramsey-spor:* 1) utled $DWL = \tfrac12\,\varepsilon\,(X_0/p)\,t^2$, tolk de to egenskapene; 2) invers elastisitetsregel (utledet) og Ramsey-betingelsen, skillet mellom dem; 3) **effektivitet vs. fordeling** — nødvendighetsgoder, inntektsskatt-argumentet (Mankiw «Lesson 6»); 4) evt. lump-sum-referansen; 5) tolk. **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling ved hvert steg — særlig reaksjonskurvene og «for lav skatt», DWL-kvadratet, Ramsey-vs-invers-elastisitet-skillet, effektivitet–fordeling-drøftingen med inntektsskatt-argumentet). **8–12 oppgaver** på eksamensnivå som roterer arketype (skattekonkurranse / DWL+Ramsey / fordeling) × leveranse, alle med nyskrevne, pent kalibrerte tall og `solution` + `hints`.
- **Oppgavesjangre:** E, D, I. Mønstereksempel (full kjede, DWL/Ramsey): «(a) Utled $DWL = \tfrac12\,\varepsilon\,(X_0/p)\,t^2$ og tolk. (b) Utled den inverse elastisitetsregelen for to varer og forklar skillet fra Ramsey. (c) Drøft hvordan fordelingshensyn og inntektsskatt-argumentet modifiserer den optimale avgiftsstrukturen.»
- **Typiske feil:** Hele skatte-repertoaret fra §5: feil retning på skattekonkurransen (skatten for lav); DWL-kvadratet glemt; Ramsey og invers elastisitet blandet; effektivitet–fordeling oversett (eller inntektsskatt-motargumentet oversett); utolkede reaksjonskurver/resultater.
- **Quiz: 18 · Flashcards: 12**

**Prøve-kvote Del 4:** 4 prøver (4.A begreper skatt/fordeling — skattekonkurranse/fiskal eksternalitet, dødvektstap, Ramsey-regelen, invers elastisitetsregel, lump-sum-skatt, Gini-koeffisient, skatteunndragelse, sjanger A; 4.B skattekonkurranse komplett — reaksjonskurver + Nash + «for lav skatt» + koordinering + «size matters», sjanger E; 4.C DWL-utledning + Ramsey/invers elastisitet + skillet, sjanger D; 4.D effektivitet vs. fordeling + skatt vs. lump-sum + Gini/velferdsfunksjon på eksamensnivå, sjanger D+I).

---

### Del 5 — Eksamenstrening

#### Kapittel 5.1: Begrepsdrill: gjengangerbegreper og modellskisser

- **id:** `sok3007-5-1` · **number:** 5.1 · **estimatedMinutes:** 60 · **prerequisites:** `sok3007-2-5`, `sok3007-3-6`, `sok3007-4-6`
- **Kapitteltype:** drill (begreper)
- **description:** Presise definisjoner + kompakt modellskisse/FOC for de sentrale begrepene og modellene på tvers av boka — de sikreste poengene og byggeblokkene som deloppgavene forutsetter kjent.
- **Eksamensbelegg:** Definisjonene «må sitte» og «forutsettes ikke kjent» (§4) — deloppgavene bygger på at studenten kan definere Nash-likevekt, Samuelson-betingelsen, skattepris, fiskal eksternalitet osv. presist. Dette kapitlet er også begrepsbanken flashcards trekkes fra. Prioritet: **kunne** (sikre poeng).
- **Innholdskontrakt:** Kort, presis mal per begrep/modell: **definisjon + kompakt modellskisse/FOC + typisk fallgruve + tolkning**. Gjengangerne på tvers av boka: kollektivt gode (ikke-rival/ikke-ekskluderbar), klubbgode, trengsel, gratispassasjer, Nash-likevekt, reaksjonsfunksjon, Samuelson-betingelsen, Lindahl-pris, Pigou-avgift, ekstern marginalkostnad, medianvelgerteorem, skattepris, entoppede preferanser, høyreskjev fordeling, Downs-konvergens/divergens, Niskanen-byrå, Wagners lov, prinsipal–agent/informasjonsrente, hard/myk budsjettskranke, rent-seeking, skattekonkurranse, fiskal eksternalitet, «size matters», dødvektstap, Ramsey-regelen, invers elastisitetsregel, lump-sum-skatt, effektivitet vs. fordeling, Gini-koeffisient, sosial velferdsfunksjon, skatteunndragelse. Sensor-poeng: **svar poengtert** med definisjon *og* (der naturlig) den korte modellsammenhengen/FOC. Dette kapitlet har høy flashcard-kvote (samlende begrepsbank).
- **Oppgavesjangre:** Definisjonsledd i alle sjangre. Mønstereksempel: «Definer Samuelson-betingelsen og forklar kort hvorfor privat forsyning gir et lavere kvantum.»
- **Typiske feil:** Svare bredt/rundt i stedet for poengtert; gi definisjon uten modellsammenheng (eller omvendt); blande beslektede par (Nash/Pareto, kopp-skatt/inntektsskatt, Ramsey/invers elastisitet, hard/myk budsjettskranke, ikke-rival/ikke-ekskluderbar); glemme tolkningen sensor belønner.
- **Quiz: 24 · Flashcards: 70**

#### Kapittel 5.2: Sjangerkapittel: drøftingsaksen effektivitet mot fordeling

- **id:** `sok3007-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok3007-4-4`
- **Kapitteltype:** sjangerkapittel (drøfting)
- **description:** Håndverket bak den tverrgående drøftingsdelen — «forklar/tolk/drøft» som følger hver «vis at …», med effektivitet mot fordeling som ryggrad: oppskrift, en gjennomskrevet A-drøfting med margkommentarer, og momentliste-oppgaver.
- **Eksamensbelegg:** «Gode forklaringer og tolkninger belønnes på alle oppgaver» står i nesten hvert sett (§4); effektivitet vs. fordeling er den tverrgående drøftingsaksen (~45 %). Hovedfeilen er å stoppe ved utledningen uten tolkning (§5). Prioritet: **perfekt** (skiller karakterer). (Bygget etter `DNA-drofting.md`s sjangerkapittel-mal — avvik §2.2.)
- **Innholdskontrakt:** **Oppskrift (trinn-for-trinn):** 1) hva krever tolkningsleddet — forklar *hvorfor* resultatet er som det er, ikke bare *hva*; 2) forankre i den forutgående modellanalysen (aldri ny modell) — hva sa FOC/reaksjonskurven/avviket fra effektiv løsning?; 3) drøft **effektivitet vs. fordeling** der oppgaven inviterer, med inntektsskatt-argumentet (Mankiw «Lesson 6»); 4) møt spesialtilfeller/motargumenter (høyreskjev fordeling, sterkere preferanse ⇒ høyere Lindahl-andel, small-country, Pareto-effektivitet); 5) konkluder poengtert. **Faste momentbanker:** (i) «hvorfor undertilbud» → privat forsyning internaliserer bare egen marginalnytte (gratispassasjer); (ii) «hvorfor for lav skatt» → fiskal eksternalitet (grunnlaget forsvinner fra andre); (iii) «hvorfor Ramsey kan være regressiv» → uelastiske = nødvendighetsgoder; motvirkes av inntektsskatt; (iv) «hvorfor konvergens/divergens» → medianlogikk vs. usikkerhet; (v) kobling til virkelighet (selskapsskatt/Irland, alpin dags-/sesongkort). **Gjennomskrevet A-drøfting** (i `collapsible`) med margkommentarer om hva som gir uttelling hvor (forankring i modellen, ærlig motargument, effektivitet–fordeling presist, poengtert konklusjon). **4–6 momentliste-oppgaver** (løsning = disposisjon/momentliste, ikke fullt essay). Forankres i pensum (Sandmo, Mankiw et al.), ikke løs synsing.
- **Oppgavesjangre:** Drøftingsledd i D/E/A/C/I. Mønstereksempel: «En kommentator hevder at skattekonkurranse er sunn fordi den holder skattene nede. Skriv en momentliste for en forankret vurdering som drøfter effektivitet mot underforsyning av offentlige goder.»
- **Typiske feil:** Stoppe ved utledningen uten tolkning (hovedfeilen); løs synsing uten å forankre i modellen; gjøre drøftingen til en ny regneoppgave; overse effektivitet–fordeling eller inntektsskatt-motargumentet; ikke møte motargumentet.
- **Quiz: 16 · Flashcards: 12**

#### Kapittel 5.3: Øvingseksamen 1 — kollektivt gode + skattekonkurranse

- **id:** `sok3007-5-3` · **number:** 5.3 · **estimatedMinutes:** 240 · **prerequisites:** `sok3007-2-5`, `sok3007-4-6`
- **Kapitteltype:** øvingseksamen
- **description:** Et komplett 4-timers sett (kode H) med to store, likt vektede oppgaver: kollektivt gode (Nash/Samuelson/Lindahl) fra hovedbein 1 og skattekonkurranse fra hovedbein 2, med A-besvarelse.
- **Eksamensbelegg:** Speiler to-store-oppgaver-malen med de to hyppigste modellene på hver side (kollektivt gode ~40 %, skattekonkurranse ~55 %). Prioritet: **perfekt** (helhetstrening).
- **Innholdskontrakt:** **Oppgave 1 (kollektivt gode, ~50 %):** budsjett + nyttefunksjon → reaksjonsfunksjon → Nash-likevekt → Samuelson-betingelsen + effektiv $G^*$ → undertilbud/gratispassasjer → Lindahl-priser → drøfting. **Oppgave 2 (skattekonkurranse, ~50 %):** hver regions problem → reaksjonskurver (utledet, tegnet, tolket) → Nash-likevekt → «for lav skatt»/underforsyning → koordinering + «size matters» → drøfting. Løsningsforslag i eget `collapsible` per deloppgave, skrevet som A-besvarelse (figurbeskrivelse i ord + utledning + verbal tolkning), med `tip`-notat om delpoeng/vekting og sensor-margnotater. Nyskrevne, pent kalibrerte tall. Kode H: løsningen viser at alt reproduseres uten formelsamling.
- **Oppgavesjangre:** A (oppg. 1) + E (oppg. 2). Mønstereksempel: se innholdskontrakt.
- **Typiske feil:** Tidsstyring (kode H, 4 t); stoppe ved utledning uten tolkning (§5); ubegrunnet Nash / privat FOC i stedet for Samuelson; feil retning på skattekonkurransen; umerkede figurer.
- **Quiz: 12 · Flashcards: 0**

#### Kapittel 5.4: Øvingseksamen 2 — medianvelger + DWL/Ramsey/fordeling

- **id:** `sok3007-5-4` · **number:** 5.4 · **estimatedMinutes:** 240 · **prerequisites:** `sok3007-3-6`, `sok3007-4-6`
- **Kapitteltype:** øvingseksamen
- **description:** Et komplett 4-timers sett med to store oppgaver: medianvelger (kopp-skatt vs. inntektsskatt) fra hovedbein 1 og DWL + Ramsey/invers elastisitet + fordeling fra hovedbein 2, med A-besvarelse.
- **Eksamensbelegg:** Speiler den nest vanligste malen: median (~45 %) mot DWL+Ramsey+fordeling (V2024-typen). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Oppgave 1 (medianvelger, ~50 %):** $U_i$ → ønsket $G_i^*$ under kopp-skatt og inntektsskatt → skattepris → begrunn forutsetningene → medianvelgerens likevekt → høyreskjev fordeling → effektivitet/Pareto-drøfting. **Oppgave 2 (DWL/Ramsey/fordeling, ~50 %):** utled $DWL = \tfrac12\,\varepsilon\,(X_0/p)\,t^2$ → invers elastisitet + Ramsey + skillet → effektivitet vs. fordeling med inntektsskatt-argumentet → evt. lump-sum. Løsningsforslag som A-besvarelse i `collapsible` per deloppgave, med vekting og sensor-notater. Nyskrevne tall.
- **Oppgavesjangre:** C (oppg. 1) + D (oppg. 2). Mønstereksempel: se innholdskontrakt.
- **Typiske feil:** Ubegrunnede median-forutsetninger (§5); glemme skatteprisen; DWL-kvadratet glemt; Ramsey/invers elastisitet blandet; effektivitet–fordeling oversett; tidsstyring.
- **Quiz: 12 · Flashcards: 0**

#### Kapittel 5.5: Øvingseksamen 3 — eksternalitet/byråkrati + skatt/fordeling

- **id:** `sok3007-5-5` · **number:** 5.5 · **estimatedMinutes:** 240 · **prerequisites:** `sok3007-3-6`, `sok3007-4-6`
- **Kapitteltype:** øvingseksamen
- **description:** Et komplett 4-timers sett i en ⅓ / ⅔-variant: en mindre oppgave fra hovedbein 1 (pendler-eksternalitet eller byråkrati/agent) og en større, sammensatt skatte-/fordelingsoppgave, med A-besvarelse.
- **Eksamensbelegg:** Speiler ⅓ / ⅔-vektingen (H2019, H2023) og rotasjonen der hovedbein 1 er eksternalitet/byrå/agent i stedet for kollektivt gode/median. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Oppgave 1 (~⅓):** enten pendler-/køeksternalitet (privat vs. optimal andel, Pigou-avgift) *eller* byråkrati/agent (Niskanen effektiv vs. budsjettmaksimerende, eller agent first-best-svikt + andre-beste). **Oppgave 2 (~⅔, sammensatt skatt/fordeling):** kombiner f.eks. skattekonkurranse *eller* DWL+Ramsey med et fordelingsledd (effektivitet vs. fordeling, evt. Gini/velferdsfunksjon) og en drøfting. Løsningsforslag som A-besvarelse med vekting og sensor-notater. Nyskrevne tall og modellutvalg. Dekker de sjangrene øvingseksamen 1–2 ikke traff (B, F, H, I) minst én gang.
- **Oppgavesjangre:** B eller F/H (oppg. 1) + E/D + I (oppg. 2). Mønstereksempel: se innholdskontrakt.
- **Typiske feil:** Forveksle privat/optimal andel i eksternaliteten (§5); byråkratimodellen bakvendt; first-best under asymmetrisk info; overse fordelingsleddet; tidsstyring under ⅓ / ⅔-vekting.
- **Quiz: 12 · Flashcards: 0**

**Prøve-kvote Del 5:** ingen egne prøver (delen består av begrepsdrill + drøftings-sjangerkapittel + 3 øvingseksamener).

---

### Kvotesammendrag (quiz/flashcards/prøver) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1 | 14 | 12 | 0 |
| 1 | 1.1–1.2 | 24+24 = **48** | 22+24 = **46** | 4 |
| 2 | 2.1–2.5 | 20+26+24+24+18 = **112** | 24+24+22+22+12 = **104** | 4 |
| 3 | 3.1–3.6 | 26+22+22+20+18+18 = **126** | 24+20+22+20+18+12 = **116** | 4 |
| 4 | 4.1–4.6 | 28+24+24+22+20+18 = **136** | 24+22+22+22+20+12 = **122** | 4 |
| 5 | 5.1–5.5 | 24+16+12+12+12 = **76** | 70+12+0+0+0 = **82** | 0 (3 øvingseksamener) |
| **Sum** | **25 kap.** | **512** | **482** | **16 + 3 ØE** |

**Kontrollsum (foreløpig):** quiz $14+48+112+126+136+76 = 512$ · flashcards
$12+46+104+116+122+82 = 482$. Flashcard-summen (482) ligger **under** gulvet på 500 og
må løftes. Faget er begrepsrikt på masternivå (Nash/Samuelson/Lindahl, skattepris,
fiskal eksternalitet, «size matters», Ramsey vs. invers elastisitet, prinsipal–agent,
Niskanen, Downs), så flashcard-tettheten skal opp. **Justering (autoritativ):** øk
begrepsbanken i kap. 5.1 fra 70 → **136 flashcards** (+66) — den er den samlende
begrepsbanken og bærer definisjonene alle deloppgavene forutsetter kjent. Da blir:

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1 | 14 | 12 | 0 |
| 1 | 1.1–1.2 | 48 | 46 | 4 |
| 2 | 2.1–2.5 | 112 | 104 | 4 |
| 3 | 3.1–3.6 | 126 | 116 | 4 |
| 4 | 4.1–4.6 | 136 | 122 | 4 |
| 5 | 5.1–5.5 | 76 | **148** (5.1: 136) | 0 |
| **Sum** | **25 kap.** | **512** | **548** | **16 + 3 ØE** |

Samtidig løftes quiz i kap. 5.1 fra 24 → **48** (+24) for å holde begrepsbank-kapitlet
i balanse (begrepsdefinisjoner egner seg like godt som quiz som flashcard), slik at:

**Endelig kontrollsum:** quiz $14+48+112+126+(136)+ (76+24=100) = \mathbf{536 \ge 500}$ ✓ ·
flashcards $12+46+104+116+122+148 = \mathbf{548 \ge 500}$ ✓.

> **Endelige, autoritative kvoter per kapittel** (erstatter tallene i §3 der de avviker
> — kun kap. 5.1 er endret): kap. 5.1 = **quiz 48 · flashcards 136**. Alle andre
> kapitler beholder §3-tallene. Sum: **quiz 536**, **flashcards 548**.

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler de to hovedbeina: markedssvikt/beslutning/organisering (Del 2+3)
står for 238 av 536 quiz og 220 av 548 flashcards, og skatt/fordeling (Del 4) for 136
quiz og 122 flashcards — nøyaktig de ~100 % av eksamenspoengene de to store oppgavene
bærer (én fra hvert bein i praktisk talt hvert sett). Boka er et **masternivå
modellfag med solid begrepsrepertoar** (og et gjennomgående drøftingselement): quiz
ligger komfortabelt over gulvet (drilltunge bein), og flashcards er løftet godt over
gulvet (548, ~48 over) fordi definisjonene faktisk **må sitte under kode H** (ingen
formelsamling) — Nash-likevekt, Samuelson-betingelsen, Lindahl-pris, skattepris,
fiskal eksternalitet, «size matters», Ramsey vs. invers elastisitet, prinsipal–agent,
Niskanen, Downs-konvergens/divergens — med begrepsdrillen (5.1, 136 flashcards) som
samlende begrepsbank.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–4, 16 totalt)

Hver prøve består av nyskrevne oppgaver i eksamens sjangre, med løsningsforslag
(A-besvarelse med figurbeskrivelser i ord + utledning + verbal tolkning/drøfting) og
poengfordeling. Omfang i minutter. Prøvekapitler legges etter byggekontraktens
spesifikasjon (`sok3007-<del>-prove`, chapterNumber `<del>.P`).

**Del 1 — Modellverktøykassen**
1. Prøve 1.A (30 min): Lagrange/FOC-oppsett på nyttemaks (log + kvasilineær), $\lambda$-tolkning, komparativ statikk.
2. Prøve 1.B (35 min): Reaksjonsfunksjon + symmetrisk Nash-likevekt utledet og tegnet i $(g_1,g_2)$-planet.
3. Prøve 1.C (35 min): Velferds-/Pareto-apparatet — maksimer $W = \sum U^h$, sammenlign med gitt likevekt, drøft effektivitet vs. fordeling kort.
4. Prøve 1.D (40 min): Blandet verktøyprøve — FOC + Nash + velferdssammenligning på et offentlig-økonomi-utsnitt (kode H, alt reprodusert).

**Del 2 — Markedssvikt**
1. Prøve 2.A (30 min): Begreper — kollektivt gode (ikke-rival/ikke-ekskluderbar), klubbgode, trengsel, gratispassasjer, Samuelson, Lindahl, Pigou (sjanger A).
2. Prøve 2.B (45 min): Kollektivt gode komplett — reaksjonsfunksjon + Nash + Samuelson + undertilbud + Lindahl (sjanger A).
3. Prøve 2.C (40 min): Pendler-/køeksternalitet — privat vs. samfunnsoptimal andel + Pigou-avgift med tidsverdi (sjanger B).
4. Prøve 2.D (45 min): Blandet markedssvikt inkl. klubbgode/to-delt tariff eller allmenning med skatt/kvote (sjanger A+B+J).

**Del 3 — Kollektiv beslutning og offentlig organisering**
1. Prøve 3.A (30 min): Begreper — medianvelgerteorem, skattepris, entoppede preferanser, Niskanen, Wagner, myk budsjettskranke, rent-seeking (sjanger A).
2. Prøve 3.B (45 min): Medianvelger komplett — $G_i^*$ kopp-skatt vs. inntektsskatt + skattepris + begrunnede forutsetninger + høyreskjev fordeling (sjanger C).
3. Prøve 3.C (40 min): Downs konvergens/divergens + Niskanen/Wagner (sjanger G+F).
4. Prøve 3.D (45 min): Agent-problem i offentlig produksjon + fiskal føderalisme/budsjettskranker (sjanger H).

**Del 4 — Skatt, effektivitet og fordeling**
1. Prøve 4.A (30 min): Begreper — skattekonkurranse/fiskal eksternalitet, DWL, Ramsey, invers elastisitet, lump-sum, Gini, skatteunndragelse (sjanger A).
2. Prøve 4.B (45 min): Skattekonkurranse komplett — reaksjonskurver + Nash + «for lav skatt» + koordinering + «size matters» (sjanger E).
3. Prøve 4.C (45 min): DWL-utledning + Ramsey/invers elastisitet + skillet (sjanger D).
4. Prøve 4.D (40 min): Effektivitet vs. fordeling + skatt vs. lump-sum + Gini/velferdsfunksjon (sjanger D+I).

### Øvingseksamener (3 komplette sett, i Del 5)

1. **Øvingseksamen 1** (5.3, 240 min): to store, likt vektede — kollektivt gode (Nash/Samuelson/Lindahl) + skattekonkurranse.
2. **Øvingseksamen 2** (5.4, 240 min): to store, likt vektede — medianvelger (kopp-skatt vs. inntektsskatt) + DWL/Ramsey/fordeling.
3. **Øvingseksamen 3** (5.5, 240 min): ⅓ / ⅔ — pendler-eksternalitet eller byråkrati/agent + sammensatt skatt/fordeling.

Settene og prøvene dekker samlet sjangrene A–J minst én gang, og både den likt vektede
to-oppgaver-malen og ⅓ / ⅔-varianten, alt under **kode H** (kun kalkulator).

---

## 5. Studieguide-kjerne (fra Del 0 + samlende ressurser)

Del 0 (kap. 0.1) er studieguidens kjerne. I tillegg skal boka samle:

1. **Eksamenskartet** — de to hovedbeina, to-store-oppgaver-malen, kode H,
   temafrekvens-tabellene, sjangerkatalogen A–J og prognosen (§1, §7 i analysen).
2. **De to hovedbeina i ett blikk** — markedssvikt/beslutning/organisering (kollektivt
   gode → eksternalitet → median → Downs → byrå → agent → føderalisme) og skatt
   (skattekonkurranse; DWL + Ramsey/invers elastisitet; effektivitet vs. fordeling;
   Gini/velferdsfunksjon), med Nash/reaksjonsfunksjoner + velferdsapparatet som
   fellesverktøy.
3. **Sensorens metaregler** — tolkning belønnes; formell analyse trekker opp;
   sammenlign alltid med den effektive løsningen; begrunn forutsetningene; drøft
   effektivitet vs. fordeling; ekstramodeller trekker opp; pensumforankring.
4. **Feilkatalogen** — de typiske feilene (§5 i analysen) samlet, hver med henvisning
   til kapitlet som forebygger den: stoppe ved utledningen uten tolkning (5.2/overalt);
   verbal drøfting der formell kreves (overalt); glemme å sammenligne med effektiv
   løsning (2.3/4.1); ubegrunnede median-forutsetninger (3.1); rote med
   reaksjonskurvene (2.2/4.1); forveksle privat/optimal andel i eksternaliteten (2.4);
   DWL-kvadratet glemt (4.2); blande Ramsey og invers elastisitet (4.3); overse
   effektivitet–fordeling (4.4); feil retning på skattekonkurransen (4.1);
   byråkratimodellen bakvendt (3.3); ikke presisere forutsetninger (overalt).
5. **Formelark i emnets notasjon (kode H — det som må sitte i hodet)** — kollektivt
   gode: budsjett $x^h = M - g^h$, $G = \sum g^h$, reaksjonsfunksjon, Nash vs. Samuelson
   ($\sum MRS = MC$), Lindahl-andeler; median: skattepris $y_i/(N\bar y)$, $G_i^*$
   kopp-skatt vs. inntektsskatt; DWL $= \tfrac12\,\varepsilon\,(X_0/p)\,t^2$; Ramsey
   (like relative kvantumsreduksjoner) og invers elastisitet ($t$ omvendt proporsjonal
   med $\varepsilon$); skattekonkurranse (reaksjonskurver, «for lav» skatt);
   eksternalitet $C(x) = a + b x$, Pigou = ekstern marginalkostnad × tidsverdi;
   Niskanen (sponsors nytte = 0); Gini; skatteunndragelse $p \ge 1/(1-F)$. Marker hva
   som skal *utledes/tolkes* (reaksjonskurver, Samuelson, DWL, Ramsey, skattepris) vs.
   hva som er ren regneteknikk (derivasjon — SOK1002).
6. **Figurbiblioteket** — standardfigurene i ord: reaksjonskurver for kollektivt gode i
   $(g_1,g_2)$-planet med Nash; Nash vs. Samuelson på $G$-aksen; reisetid mot bilandel
   (privat likevekt vs. optimum); entoppede preferanser over $G$ med medianvelgeren;
   Niskanen effektiv vs. budsjettmaksimerende størrelse; skattekonkurranse-reaksjonskurver
   i $(t_A,t_B)$-planet med Nash; DWL-trekant med skattekile; Lorenz-kurve/Gini — med
   merkekravene per figur (akser, kurver, likevekt/optimum, avvik navngitt).
7. **Kryssreferansekart** (arbeidsdelingen, §7) — hva SØK3007 forutsetter og lenker til
   (SOK1002 for Lagrange/elastisitet; SØK2011 for anvendt skatteinsidens/velferdsfunksjon
   på bachelornivå; SØK1011 for markedskryss-Samuelson/Pigou) vs. hva SØK3007 selv
   bygger ut på masternivå (de fem kjernemodellene + public choice/organisering).
8. **Studieløp** — anbefalt progresjon (10-ukers og 3-ukers intensivvariant): Del 1
   (verktøyet) → Del 2 (markedssvikt) → Del 3 (beslutning/organisering) → Del 4
   (skatt/fordeling), prøver underveis, begrepsdrillen (5.1) og drøftingssjangeren (5.2)
   parallelt, øvingseksamenene de siste ukene under tidspress (240 min, kode H).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `sok3007` med alle 25 kapitler
   (id/number/title/description/estimatedMinutes/topics/prerequisites) etter mønster
   `COURSE_BI_OKONOMI` i `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra
   makrostruktur-tabellen (§2). Registrer emnet i
   `src/app/bok/trinn/hoyere/institusjoner.ts` under **NTNU** med visningsnavn
   «SØK3007 Skatt, beslutningsatferd og økonomisk politikk».
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–J, frekvenstallene, de to hovedbeina,
   kode H og avgrensningen (arbeidsdelingen mot SØK2011/SØK1011/SOK1002) som resten refererer til.
3. **Del 1** (modellverktøy) — Lagrange/FOC, Nash/reaksjonsfunksjoner og velferdsapparatet
   som resten bruker.
4. **De to hovedbeina i avhengighetsrekkefølge**: Del 2 (markedssvikt) → Del 3
   (beslutning/organisering) → Del 4 (skatt/fordeling). Én byggeagent per hel del (jf.
   fase 4-batching); Del 3 og Del 4 er 6 kapitler, så de kan splittes, men gi da hele
   delens kontrakter til begge agenter og flagg for konsistenssjekk (notasjon,
   Nash-begrunnelsen, effektiv-løsning-sammenligningen). Drillkapitlet (2.5 / 3.6 / 4.6)
   bygges av samme agent som delen.
5. **Del 5 til slutt** (begrepsdrill + drøftings-sjanger + 3 øvingseksamener gjenbruker
   alt); bygges av én agent som leser hele skjelettet.
6. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert; prøvene
   (§4) i prøvekapitler per del etter byggekontraktens spesifikasjon
   (`sok3007-<del>-prove`, chapterNumber `<del>.P`), Del 1–4.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse` (generer
      helst via `json.dump`; husk å escape `"` i norske sitattegn); `npm run build` grønn.
- [ ] **LaTeX**: alle formler i `$...$`/`$$...$$` med dobbel backslash i JSON
      (`\\frac`, `\\varepsilon`, `\\Sigma`, `\\lambda`, `\\tau`, `\\alpha`); ingen
      unicode-brøker; konsistent $G$, $x^h$, $g^h$, $\tau$, $y_i$, $\bar y$, $t$,
      $\varepsilon$, $X_0$, $C(x)$, $t_A/t_B$.
- [ ] **Notasjonskonsistens**: tekstsøk over alle sok3007-filer — **påkrevd**:
      $G = \sum g^h$, reaksjonsfunksjon, Samuelson $\sum MRS = MC$, skattepris
      $y_i/(N\bar y)$, $DWL = \tfrac12\,\varepsilon\,(X_0/p)\,t^2$, reaksjonskurver i
      $(t_A,t_B)$, $p \ge 1/(1-F)$; **forbudt/uønsket**: å gjenta SOK1002-apparatet
      (Slutsky/Hicks, isokvant/TSB, kostnadskurvefamilien) eller SØK2011s
      skatteinsidens-regnedrill fra oppgitte kurver (ART/MRT-progressivitet, NKA/nåverdi,
      intertemporalt valg) eller SØK1011s oligopol (Cournot/Bertrand/Stackelberg) —
      grep etter «Slutsky», «isokvant», «ART», «MRT», «nåverdi», «Cournot», «Bertrand»,
      «Stackelberg» skal gi **null treff** utenom eventuelle kryssbok-lenker/
      forkunnskaps-merknader.
- [ ] **Kollektivt-gode-kravet**: kap. 2.2, 2.3, 2.5 og øvingseksamen 1 inneholder
      eksplisitt reaksjonsfunksjonen utledet fra FOC, den symmetriske Nash-likevekten
      **begrunnet**, Samuelson-betingelsen ($\sum MRS = MC$), undertilbudet vist mot
      $G^{Nash}$, og Lindahl-andelene — grep-sjekk «reaksjonsfunksjon», «Samuelson»,
      «Lindahl», «gratispassasjer».
- [ ] **Median-kravet**: kap. 3.1, 3.6 og øvingseksamen 2 utleder $G_i^*$ under **både**
      kopp-skatt og proporsjonal inntektsskatt, viser **skatteprisen** $y_i/(N\bar y)$,
      **begrunner** forutsetningene (endimensjonalitet + entoppethet), og behandler
      høyreskjev fordeling — grep-sjekk «skattepris», «entoppede», «medianvelger».
- [ ] **Skatte-kravet**: kap. 4.1, 4.2, 4.3, 4.6 og øvingseksamenene inneholder
      $DWL = \tfrac12\,\varepsilon\,(X_0/p)\,t^2$ (med **kvadratet** tolket),
      skillet Ramsey vs. invers elastisitet, skattekonkurransens reaksjonskurver med
      **«for lav skatt»**/underforsyning og «size matters», og effektivitet vs.
      fordeling med **inntektsskatt-argumentet** — grep-sjekk «invers elastisitet»,
      «size matters», «Ramsey».
- [ ] **Utledning + tolkning i par**: hvert eksempel og løsningsforslag med et
      «vis at …»-ledd har et påfølgende «forklar/tolk/drøft»-ledd; alle resultater
      (reaksjonskurver, $G^*$, DWL, skattepris) er verbalt tolket; figurer beskrevet i
      ord (akser, kurver, likevekt/optimum, avvik navngitt).
- [ ] **Drøftingselementet**: kap. 5.2 og øvingseksamenenes drøftingsledd inneholder
      **effektivitet vs. fordeling** forankret i modellen (inntektsskatt-argumentet,
      Mankiw «Lesson 6»), ikke løs synsing eller ny modell.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra
      dette skjelettet), Forkunnskaper-`text` med lenker + Symbol- og formelliste-
      `collapsible` (per delkapittel — forklarer ALLE symboler brukt), Typiske feil-
      `warning`, 2–4 eksempler (siste på eksamensnivå), 6–12 øvinger med `solution` +
      `hints`, repetisjons-`collapsible`; drillkapitlene (2.5, 3.6, 4.6) har
      løsningsoppskrift + sensor-kommentert case + 8–12 oppgaver; sjangerkapitlet 5.2
      følger drøftings-malen (oppskrift + gjennomskrevet A-drøfting + momentliste-oppgaver).
- [ ] **Quiz-sum ≥ 536 og flashcard-sum ≥ 548** per kvotesammendraget (kontrollsummér
      mot §3 med den endelige justeringen av kap. 5.1 — kvotesammendraget er autoritativt).
- [ ] **Prøver**: 4 per temadel 1–4 (16 stk) + 3 øvingseksamener; settene og prøvene
      dekker samlet sjangrene A–J minst én gang, og både den likt vektede to-oppgaver-malen
      og ⅓ / ⅔-varianten, alt under kode H.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, egne kontekster (land, byer,
      goder, sektorer), egne formuleringer; ingen formuleringer fra reelle sett eller
      sensurveiledninger (skjelettets mønstereksempler er selv omskrivninger og skal
      varieres videre, ikke kopieres ordrett inn); modelligninger, notasjon,
      standardresultater ($DWL$-formelen, Samuelson-betingelsen, skattepris,
      Ramsey/invers elastisitet, $p \ge 1/(1-F)$) er faglige fakta uten verkshøyde;
      pensum (Hindriks & Myles; Sandmo; Mankiw et al.) refereres (forfatter/verk/kapittel),
      aldri siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter (200 +
      kapittelspesifikk streng), jf. lærdommen om `getChapterMeta`; institusjonssiden
      (NTNU) og bokforsiden (seksjonstitlene fra §2) sjekkes.

---

## 7. Arbeidsdeling mot SOK-/ECON-familien (masternivå-komplement)

SØK3007 er NTNUs **masternivå** offentlig-økonomi-emne. Denne tabellen styrer hva
SØK3007 bygger ut vs. hva den forutsetter/kryssrefererer. Den viktigste avgrensningen
er mot **SØK2011** (bachelornivået i samme domene): de deler temaliste, men SØK3007
gjør master-modellene som SØK2011 eksplisitt overlater til 3000-nivået.

| Tema | Eier / bygger ut | SØK3007 (masternivå) |
|---|---|---|
| Lagrange, optimering, elastisitet, nyttemaks (teknikk) | **SOK1002** (NTNU) | **NEI** — forutsettes; lenk til SOK1002 (`sok1002-1-2`, `sok1002-1-3`, `sok1002-2-4`) |
| Skatteinsidens fra oppgitte tilbud/etterspørsel, progressiv skatt (ART/MRT), NKA/nåverdi, intertemporalt valg, valgparadoks | **SØK2011** (NTNU, bachelor) | **NEI** — SØK2011s domene; lenk dit for anvendt bachelor-oppsett |
| DWL, Ramsey, skatteunndragelse (anvendt/bachelor) | **SØK2011** (bachelor) | **JA på masternivå** — full DWL-utledning, Ramsey vs. invers elastisitet, unndragelse-betingelsen; kryssrefererer til SØK2011 for det anvendte oppsettet |
| Oligopol (Cournot/Bertrand/Stackelberg), spillteori-oligopol | **SØK1011** (NTNU, bachelor) | **NEI** — SØK1011s kjerne; ikke bygget |
| Markedssvikt i markedskryss-form (Pigou på lineære figurer, $\Sigma MB = MC$) | **SØK1011** (bachelor) | **Delvis** — samme tema, men SØK3007 bygger master-modellapparatet (nyttemaks + reaksjonsfunksjoner + Lindahl; reisetids-eksternalitet); lenk til SØK1011 for markedskryss-intuisjonen |
| Kollektivt gode Nash↔Samuelson↔Lindahl (nyttemaks-utledning) | — | **JA** — Del 2 (kjernemodell 1) |
| Medianvelger (kopp-skatt vs. inntektsskatt, skattepris) | — (SØK2011 overlater det; ikke i det nedlagte SØK2103 lenger) | **JA** — Del 3 (kjernemodell 2) |
| Downs' to-partimodell, Niskanen-byrå, Wagner, agent-problem, fiskal føderalisme, rent-seeking | — (public choice/organisering; SØK2011 har IKKE videreført rent-seeking/median/Niskanen) | **JA** — Del 3 |
| Skattekonkurranse / fiskal føderalisme (reaksjonskurver, «size matters») | — | **JA** — Del 4 (kjernemodell 4) |
| Effektivitet vs. fordeling, inntektsskatt-argumentet, lump-sum, Gini/velferdsfunksjon (master-drøfting) | delvis SØK2011 (velferdsfunksjon, bachelor) | **JA** — Del 4 + drøftingssjanger 5.2; lenk til SØK2011 for bachelor-velferdsfunksjonen |
| Individuell atferdsøkonomi (prospektteori, tidsinkonsistens) | **SØK2012** / ECON4260 | **NEI** — «beslutningsatferd» her er *kollektiv/politisk* (public choice), ikke individuell atferd |

**Møtepunkter (kryssrefereres, ikke gjentas):** Lagrange/FOC og elastisitetsdefinisjonen
forutsettes fra SOK1002 og lenkes dit; det anvendte skatteinsidens-/velferdsfunksjons-
oppsettet fra SØK2011 lenkes der bachelor-grunnlaget trengs; markedskryss-Samuelson/Pigou
fra SØK1011 lenkes for intuisjonen. SØK3007s eget bidrag er de **fem master-kjernemodellene**
(kollektivt gode Nash/Samuelson/Lindahl, median med skattepris, DWL + Ramsey/invers
elastisitet, skattekonkurranse med reaksjonskurver, pendler-eksternalitet med Pigou) pluss
public choice / offentlig organisering (Downs, Niskanen/Wagner, agent, føderalisme,
rent-seeking) — nøyaktig det SØK2011 eksplisitt overlater til 3000-nivået.

---

> **Merknad om verifiserte referanser:** Alle modellresultater, notasjon og frekvenser
> er hentet fra `EKSAMENSANALYSE.md`. Standardresultatene ($DWL = \tfrac12\,\varepsilon\,(X_0/p)\,t^2$,
> Samuelson-betingelsen $\sum MRS = MC$, skattepris $y_i/(N\bar y)$, Ramsey/invers
> elastisitet, $p \ge 1/(1-F)$) er faglige fakta uten verkshøyde. Pensum-referansene
> (**Hindriks & Myles, *Intermediate Public Economics*, 2. utg.** — kap. 5, 6, 7, 11,
> 12, 15, 17.3, 19.6, 20.2; **Sandmo**, normativ beskatningsteori; **Mankiw, Weinzierl &
> Yagan**, *Optimal Taxation in Theory and Practice*, «Lesson 6») er hentet fra
> sensurveiledningene. *(verifiser)* at gjeldende SØK3007-pensum fortsatt bruker
> Hindriks & Myles og at kapittelnummereringen stemmer med gjeldende utgave før
> pensumankere skrives inn i kapitlene; *(verifiser)* at dagens ordinære eksamen fortsatt
> er **kode H** (kun kalkulator) — hjelpemiddelkoden har variert historisk (C/A/H), og
> boka bygges for kode H. At skatteunndragelse fortsatt er begrepsgjenganger og ikke
> flyttet helt til SØK2011 er *(verifiser)* mot gjeldende emnebeskrivelse.

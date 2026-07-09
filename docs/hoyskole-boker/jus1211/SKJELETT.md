# Bokskjelett: JUS1211 Privatrett II — eksamensrettet lærebok

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


> Dette skjelettet er forfatterens ENESTE kilde til eksamensempiri — forfatter-agenten
> (Opus) leser IKKE eksamensarkivet. Alt eksamensbelegg (årganger, frekvenser, sensor-
> krav, feller) står derfor eksplisitt per kapittel. Alle faktum-mønstre er omskrevne
> maler; forfatteren skal skrive HELT NYE faktum i samme sjanger (nye parter, tall,
> hendelser, bransjer, eiendommer). Arketype: **DNA-jus.md**.
>
> **Rettstilstand:** Skjelettets regelkontrakter er skrevet mot GJELDENDE lov per
> juli 2026, etter Lovdata-verifikasjon (se §7). **Arveretten bygger gjennomgående på
> arveloven 2019** (i kraft 1. januar 2021) — 1972-paragrafer nevnes KUN som de
> paralleller domsanalyse-dommene faktisk brukte. Poster merket *(verifiser)* har kjent
> usikkerhet om eksakt ledd-/bokstavinndeling og skal sluttkontrolleres i fase 6.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `jus1211` |
| Tittel | **Privatrett II — eksamensrettet: familierett, arverett og fast eiendoms rettsforhold** |
| Level | `Høyskole` |
| Arketype | jus (rettsdogmatisk med praktikum) — med ett dokumentert DNA-avvik: emnet har TO eksamenssjangre (praktikum + teori/domsanalyse), se §6 |
| Pitch | Boka trener nøyaktig det JUS1211-eksamen prøver: å identifisere rettsspørsmål i et sammensatt familie-, arve- eller tingsrettslig faktum, drøfte vilkårene med faktumnær subsumsjon, holde parallelle hjemler fra hverandre — OG å analysere en dom i rettskildeperspektiv (den faste Del II-sjangeren). Bygget på 26 eksamensgjennomføringer og 28 sensorveiledninger (2012–2025). Materiell rett alene gir C — denne boka trener metode, materie og domsanalyse samtidig. |
| Kapittelantall | **38** (Del 0: 3, Del 1: 9, Del 2: 9, Del 3: 10, Del 4: 7) |
| Estimert totaltid | **~2 025 minutter (~34 timer)** |
| Quiz totalt | **532** (krav ≥500) |
| Flashcards totalt | **502** (krav ≥500) |
| Prøver | **20** (4 per del × 5 deler; krav ≥4 per del) |
| Eksamensform boka kalibreres mot | 6 timers digital skoleeksamen (Inspera): **Del I praktikum (3–4,5 t) + Del II teori/domsanalyse (1,5–3 t)**; Lovdata Pro i eksamensmodus (fra 2024 kun henvisningsmerknader); inntil to rettskrivningsordbøker + én juridisk ordliste; **karakterskala A–F** |

**Avgrensning (ufravikelig):** Avtale-, kjøps- og erstatningsrett er IKKE pensum (hører til
JUS1111 Privatrett I) — boka skal ikke ha kapitler eller oppgaver om mangelslære,
kontrollansvar, culpa, bilansvar osv. Internasjonale menneskerettigheter (EMK art. 9/10,
SP art. 18) var teoritema til og med H2016 men er **utgått** og skal ikke omtales som
fagstoff. Erstatningsrett (bilansvar/menerstatning) lå i JUS1211 kun i 2012 og er nå
JUS1111 — skal ikke inn. Avtale- og tolkningslæren fra JUS1111 er derimot relevant
**forkunnskap** (testaments-, servitutt- og ektepakttolkning), og krysslenkes dit.

---

## 2. Makrostruktur

Emnet hviler på tre likeverdige materielle søyler (hver ~15/24 i gjenganger-score) pluss
en gjennomgående metode-/domsanalysesøyle. Rekkefølgen er pedagogisk (formuesordning før
skjevdeling; legalarv før testament; eiendomsrett før servitutt/hevd), mens **omfanget**
følger gjenganger-score fra analysen — derfor er de tre delene omtrent like store, i
motsetning til JUS1111 der ett område dominerte.

| Del | Innhold (sectionName) | Kap. | Begrunnelse (gjenganger-score av 24 eksamener 2013–2025) |
|---|---|---|---|
| **Del 0** | Eksamenskart og juridisk metode | 3 | DNA-obligatorisk. To sjangre må trenes (praktikum + domsanalyse). Domsanalyse er fast Del II-sjanger fra H2017, nær obligatorisk fra 2022 (12/24) — får eget metodekapittel. |
| **Del 1** | Familierett: det økonomiske oppgjøret | 9 | Score ~15/24. Skjevdeling (el. § 59) er emnets mest testede enkeltregel. Tre-kravs-skiftet (skjevdeling + vederlag + forlodds/gjeld) er standardmalen. Tyngst enkeltdel. |
| **Del 2** | Arverett | 9 | Score ~15/24. Livs-/dødsdisposisjon og testamentsreglene dominerer; arveloven 2019. Uskifte og pliktdel faste innslag. |
| **Del 3** | Fast eiendoms rettsforhold | 10 | Score ~15/24. Servituttlova § 2 og hevd er kjernen; ekstinksjon-/hevd-kjeden og naborett § 2 faste typetilfeller. Størst kapittelantall fordi feltet spenner over seks lover. |
| **Del 4** | Domsanalyse og praktikumstrening | 7 | DNA-obligatorisk sluttdel, utvidet for JUS1211s to sjangre: domsanalyse- og teori-verksted, «se tvistepunktene»-drill, 3 komplette praktikum (familie/arv/tingsrett) med A- og kommentert C-besvarelse, + Del II-modellbesvarelser (domsanalyse + teori/eksamenssimulering). |

**Prioritetsklassene** (fra analysens §7) styrer oppgavemengde og dybde per kapittel:
- **perfekt** = «må beherskes perfekt» (bærer karakteren; testes i 1 av 2–3 eksamener)
- **kunne** = «må kunne» (skiller sterke besvarelser; 1 av 3–5 eksamener)
- **kjenne** = «bør kjenne til» (plusspoeng-stoff; de navngitte skjulte skillepunktene)

**Gjennomgående byggekrav** (gjelder ALLE kapitler, gjentas ikke per kapittel):
- Hvert kapittel har `tip`-blokk **«Eksamensvinkel»** og `warning`-blokk **«Typiske feil»**
  (innholdet angitt per kapittel under).
- Regel- og typetilfellekapitler avsluttes med `collapsible` **«Paragraf- og domsregister»**.
- Hvert delkapittel som bruker paragraf-/vilkårsapparat får en `collapsible`
  **«Paragraf- og begrepsliste»** rett etter Forkunnskaper (leserkrav) som forklarer alle
  sentrale bestemmelser og faguttrykk brukt i delkapitlet (jus-analogen til symbol-/
  formellista) — f.eks. at «skjæringstidspunkt» = tidspunktet formuen fastlåses for deling,
  «forlodd» = uttak før likedeling osv.
- Oppgaver følger sjangrene fra analysen §3: (a) anførselsdrevet/nummerert **minipraktikum**
  (kort faktum, ett-to tvistepunkter, avgrensningsinstrukser når relevant), disponert
  hjemmel → tolkning → subsumsjon → konklusjon med fasit merket **må-punkter / pluss-punkter /
  feller**; og (b) for hvert hovedemne minst ett **domsutdrag i domsanalyse-format** (utdrag +
  kontrollspørsmål + rettskildespørsmål + modellanalyse). Stigende vanskelighet som ender på
  eksamensnivå.
- Dommer refereres (navn/kallenavn + Rt./HR-nummer + hva de brukes til), aldri gjengis i
  lengde; forarbeider likeså (Ot.prp. nr. 28 (1990–91) for el.; NOU 2014:1 / Prop. 107 L
  (2017–2018) for arveloven 2019; Rådsegn-utredningene for servituttlova/hevdslova).
- **Konklusjonen er nesten alltid underordnet** — drøftelsen bærer. Oppgavefasitene skal
  eksplisitt si «begge løsninger godtas» der spørsmålet er åpent, og reservere fasitsvar for
  de spørsmålene som faktisk har ett riktig svar (habilitet, formkrav, ekstinksjonsvilkår,
  hevdstid).
- **Alle paragraf- og domsreferanser verifiseres mot Lovdata før publisering** (se §7).
  Referanser merket *(verifiser)* har kjent usikkerhet fra analysen/rettstilstandssjekken.

---

## 3. Kapitler

### DEL 0 — Eksamenskart og juridisk metode

---

#### Kapittel 0.1: Eksamenskartet — slik testes JUS1211
- **id:** `jus1211-0-1` · **number:** 0.1 · **estimatedMinutes:** 30 · **prerequisites:** ingen
- **Kapitteltype:** eksamenskart
- **description:** Hva eksamen faktisk er: 6 timers todelt digital eksamen med praktikum OG teori/domsanalyse, hvilke fag som testes hvor ofte, og hva som skiller A fra C fra E.
- **Forkunnskaper (kryssbok):** Bygger på den generelle juridiske arbeidsmåten fra JUS1111 — lenk til [Eksamenskartet — slik testes JUS1111](/bok/jus1111/jus1111-0-1) og [Praktikumsmetoden — fra anførsler til disposisjon](/bok/jus1111/jus1111-0-2).
- **Eksamensbelegg:** Hele empirien 2012–2025 (26 gjennomføringer, dagens pensum fra 2013). Presenter: (a) formhistorikken — 6 t skoleeksamen todelt gjennom hele perioden (unntak V2020 hjemme/bestått, H2020 4 t), digital Inspera fra 2021, Lovdata Pro i eksamensmodus, fra 2024 kun henvisningsmerknader; A–F i hele perioden; (b) rettsområde-frekvens: familierett ~15/24, fast eiendom ~15/24, arverett ~15/24, metode/domsanalyse 12/24; (c) **rotasjonsmønsteret** (etabler som prognosegrunnlag): praktikum veksler mellom familie-/arverett og fast eiendom semestervis, og Del II-domsanalysen henter da gjerne temaet fra det faget praktikum IKKE dekker — alle tre fag dekkes nesten hvert studieår; (d) **vekting** angis som anbefalt tidsbruk og er styrende: 4+2, 3+3, 4,5+1,5 osv. — praktikum alltid tyngst eller likt.
- **Regelkontrakt:** Ingen materielle regler — men tabellene over rettsområde-frekvens og typetilfelle-frekvens (skjevdeling ~12, servitutt § 2 ~8, samboersameie ~7, livs-/dødsdisp. ~6, hevd ~6, testament formkrav/habilitet ~5, vederlag ~5, uskifte ~5, tinglysing/ekstinksjon ~5, naboloven § 2 ~5, pliktdel 4) gjengis som studentens prioriteringskart.
- **Metodepoenger:** Emnet har TO sjangre — studenten må trenes i begge. Konklusjonene er nesten alltid underordnet; kalibreringen «studenten har studert juss under ett år» går igjen i hver veiledning (ikke still for høye krav til dybde). «Beste karakter er mulig med gode besvarelser av to av tre spørsmål» (H2016). Bredde er ikke en sjekkliste — veiledningene angir totalen av mulige poeng.
- **Typiske feil:** Å lese boka som pensumdekning i stedet for eksamenstrening; å pugge konklusjoner; å tro at domsanalysen er «gratis» materiellstoff (den er en egen ferdighet).
- **Kvote:** quiz 10 · flashcards 8

---

#### Kapittel 0.2: Praktikumsmetoden — fra faktum til disposisjon
- **id:** `jus1211-0-2` · **number:** 0.2 · **estimatedMinutes:** 50 · **prerequisites:** `jus1211-0-1`
- **Kapitteltype:** metode
- **description:** Slik bygges en praktikumsbesvarelse i JUS1211: identifiser krav og hjemmel, hjemmel → tolkning → subsumsjon → konklusjon, hold parallelle hjemler fra hverandre, og respekter avgrensnings- og forutsetningsinstrukser.
- **Forkunnskaper (kryssbok):** Firetrinnsmetoden er felles med JUS1111 — lenk til [Praktikumsmetoden — fra anførsler til disposisjon](/bok/jus1111/jus1111-0-2). Dette kapitlet legger til det som er særegent for JUS1211.
- **Eksamensbelegg:** JUS1211-praktikum har OFTE nummererte delspørsmål eller tydelig avgrensede krav — og hyppige avgrensningsinstrukser i parentes («uskifte skal ikke behandles», «el. § 59 annet ledd skal ikke behandles») som er BINDENDE. Nyere sett er også rene «drøft og avgjør»-oppgaver (V2021, V2023, V2024, H2024). Begge formater må trenes. Oppgavene beskrives som «spesielt egnet til å teste evnen til å identifisere rettslige spørsmål i et komplisert faktum».
- **Regelkontrakt (metoderegler, fra samtlige veiledninger):**
  1. **Kravsanalysen:** hvem krever hva av hvem, på hvilket rettslig grunnlag — utledes av anførslene/spørsmålene FØR skrivingen.
  2. **Firetrinnskravet per tvistepunkt:** presis problemstilling → hjemmel → **ordlydstolkning FØRST** (lovens ord tolkes aktivt: «klart kan føres tilbake til», «mishøve», «urimeleg eller uturvande», «venteleg», «snart skal dø») → presisering via forarbeider/HR-praksis → **subsumsjon på faktums konkrete momenter** → konklusjon.
  3. **Hold parallelle hjemler fra hverandre:** skjevdeling § 59 ≠ forlodds § 61 ≠ vederlag § 63; brukshevd ≠ eiendomshevd; mothevd ≠ frihevd. Sammenblanding er en gjennomgående navngitt svakhet.
  4. **Riktig rekkefølge innad i regelsett:** § 59 første ledd (hovedregelen) FØR annet ledd (unntaket); stiftelsesgrunnlag før bakgrunnsrett; grunnvilkår før unntak.
  5. **Regn der faktum innbyr til det** (skjevdelingsbrøker, boets sammensetning, 4G-minstearv) — men «regnefeil trekker ikke når det rettslige er forstått», og der spørsmålet er rent normativt er utregning unødvendig.
  6. **Forutsetningslojalitet:** senere spørsmål bygger ofte på angitte forutsetninger («under forutsetning av at testasjonen er gyldig …») — følg dem, ikke omkjemp dem.
  7. **Respekter avgrensninger:** å drøfte det bortavgrensede eller anføre krav partene ikke har fremmet, trekker.
- **Typetilfeller:** 2 `example`-blokker: (a) et nummerert delspørsmåls-sett (nyskrevet) → vist kravsanalyse → disposisjon; (b) samme tvistepunkt drøftet to ganger — én gang som ren regelgjengivelse (verdiløst med Lovdata tilgjengelig), én gang med faktumnær subsumsjon (beløp, tidsforløp, partenes bidrag koblet til vilkårene) — A/C-skillet visualisert.
- **Metodepoenger:** Subsumsjonen er kongen. Med Lovdata er regelgjengivelse gratis — sensor flytter vekten til «anvendelsen av de faktiske opplysningene i alle drøftelser». Kort om det klare (én setning på uproblematiske vilkår gir pluss), dybde i tvilspunktene.
- **Typiske feil:** Konstatering i stedet for drøftelse; å hoppe over hovedregelen (§ 59 (1) før (2)); løsrevne domsreferat («nevne fortløpende dommer uten selvstendige kommentarer»); generell tolkning uten kobling til faktum; å drøfte det bortavgrensede; strukturkollaps i flertvist-oppgaver (momenter fra unntaksregelen drøftet under hovedregelen).
- **Kvote:** quiz 12 · flashcards 12

---

#### Kapittel 0.3: Domsanalyse og rettskildebruk — den faste Del II-sjangeren
- **id:** `jus1211-0-3` · **number:** 0.3 · **estimatedMinutes:** 50 · **prerequisites:** `jus1211-0-2`
- **Kapitteltype:** metode
- **description:** Slik analyseres en dom i rettskildeperspektiv: kilde → slutning → vekt, beskrivelse vs. diskusjon, og de faste analysegrepene som skiller øvre del av skalaen.
- **Forkunnskaper (kryssbok):** Rettskildelæren fra JUS1111 — lenk til [Lovdata Pro og rettskildebruk under eksamen](/bok/jus1111/jus1111-0-3). Dette kapitlet trener rettskildelæren som selvstendig analysesjanger.
- **Eksamensbelegg:** Domsanalyse ble fast Del II-sjanger fra H2017 og var Del II i sju av åtte gjennomføringer V2022–V2025. Analyserte dommer: HR-2017-716-A (livs-/dødsdisp.), Rt. 2015 s. 1157 Fårøya, Rt. 2015 s. 710 (tolkning vs. subsumsjon), LF-2021-145672 (underrettsdoms vekt), HR-2022-1119-A Trollvassbu (analogi), HR-2022-2157-A («mishøve»), Rt. 2008 s. 769 (skjevdeling), HR-2022-993-A (luftrom), Rt. 2003 s. 198 (vitnehabilitet). Struktur: domsutdrag (angitte avsnitt) + 1–3 spørsmål (kontrollspørsmål om rettsregelen → redegjør for rettskildebruken → vurder/diskuter). **Kun de angitte avsnittene skal analyseres.**
- **Regelkontrakt (analysegrep, ikke materiell rett):** (a) skille **slutning** fra **vekt**; (b) rettskildesituasjonens virkning på vekt: fravær av lovtekst/HR-praksis ØKER vekten av underrettspraksis og teori, og langvarig samstemt praksis + teori forsterker hverandre; (c) identifisere **kildens art**: en NOU som ble lovforslag uten lovvedtak er i realiteten juridisk teori; forarbeider til NY lov brukt på GAMMEL rett er etterarbeid; (d) antitese-/motsetningsgrenser («ordlyden gir ikke grunnlag for motsetningsslutning»); (e) at **lovfesting av ulovfestet rett** strammer inn vurderingstemaet og endrer rettskildebildet; (f) maktfordelingsperspektivet når HR avstår fra utvidende tolkning; (g) juridisk teori SOM rettskilde (særpreget for dette emnet — lærebøker siteres i veiledningene og tematiseres i dommene). Presenter «teoretikum»-hybriden (H2016, H2023): faktum + metodespørsmål — de som løfter rettskildespørsmålene eksplisitt premieres kraftig; ren praktikumsløsning er delvis ubesvart oppgave.
- **Metodepoenger:** Ren beskrivelse/gjengivelse → nedre del av skalaen; **diskusjonen** (domspremissene holdt opp mot alminnelige rettskildenormer) skiller i øvre del. Skill eget faktum fra domsfaktum. Disposisjonen er valgfri (kronologisk eller løpende) så lenge alle spørsmål besvares og gjentakelser unngås.
- **Typiske feil:** Ren beskrivelse uten diskusjon (navngitt trekk H2024); løsrevne domsreferat; å trekke inn dommens avsnitt utenfor de angitte (gir ikke uttelling); dobbeltbehandling.
- **Kvote:** quiz 14 · flashcards 16

**Prøve-kvote Del 0:** 4 prøver (kravsanalyse av delspørsmåls-/anførselssett; disposisjonsøvelser med avgrensningsinstrukser; feilfinning i «beskrivende» domsanalyseutdrag; kilde/slutning/vekt-drill).

---

### DEL 1 — Familierett: det økonomiske oppgjøret (score ~15/24)

---

#### Kapittel 1.1: Formuesordningen og skiftets arkitektur
- **id:** `jus1211-1-1` · **number:** 1.1 · **estimatedMinutes:** 50 · **prerequisites:** `jus1211-0-2`
- **Kapitteltype:** regel
- **description:** Rammeverket alt annet henger på: felleseie vs. særeie, eierforhold og råderett, likedeling (§ 58), skjæringstidspunktet (§ 60) og rekkefølgen på skiftet.
- **Eksamensbelegg:** Selve delingsordningen er porten inn til hvert familierettspraktikum; likedeling/gjeldsavleggelse og skjæringstidspunkt er faste rammer. Prioritetsklasse: **perfekt** (fundament).
- **Regelkontrakt:** **§ 31** (eierforhold; hver rår over eget; sameie ved felles erverv — hjemmearbeid teller ved eierbedømmelsen av eiendeler til felles personlig bruk); **§§ 32–33** (samtykkekrav ved disposisjon over felles bolig og vanlig innbo — helhetlig eiendom, skriftlig samtykke); **§ 58** (likedeling av nettoformuen; felles gjeld trekkes fra; særeie deles ikke); **§ 60** (skjæringstidspunktet for hva som inngår); §§ 40–41 (gjeld); §§ 76–78 (oppgjørsregler ved død — grunnlag for sammensatt skifte, kap. 1.9). Begrepsapparat: rådighetsdel vs. delingsformue, brutto/netto, felleseie ≠ sameie.
- **Typetilfeller:** Minipraktikum: den ene disponerer over felles bolig uten samtykke (§ 32-drill); fastlegging av hva som er sameie når begge har bidratt.
- **Metodepoenger:** Fastlegg formuesordningen og eierforholdene FØR skjevdeling/vederlag drøftes — mange hopper rett på § 59. Skill eierspørsmålet (hvem eier?) fra delingsspørsmålet (hvordan deles verdien?).
- **Typiske feil:** Å blande eierforhold og deling; å overse samtykkekravet ved felles bolig; å behandle særeie som del av likedelingsmassen.
- **Kvote:** quiz 14 · flashcards 14

---

#### Kapittel 1.2: Skjevdeling — ekteskapsloven § 59
- **id:** `jus1211-1-2` · **number:** 1.2 · **estimatedMinutes:** 65 · **prerequisites:** `jus1211-1-1`
- **Kapitteltype:** regel
- **description:** Emnets mest testede enkeltregel: nettokravet, «klart kan føres tilbake til», ombytting og økonomisk identitet, verdistigning vs. inflasjon, forholdsmessig andel ved lånefinansiering, og de to unntaksleddene.
- **Eksamensbelegg:** Skjevdeling testet ~12/24 (H2012, H2014, H2016, H2017, V2019, H2019 (D), V2021, V2022, H2023, V2024 (D), V2025) — også som domsanalyse-objekt. Prioritetsklasse: **perfekt** (bærer karakteren).
- **Regelkontrakt:** **§ 59 (1)** — verdien av formue som **«klart kan føres tilbake til»** midler en ektefelle hadde ved inngåelsen eller senere har ervervet ved arv/gave fra andre enn ektefellen, kan holdes utenfor delingen. Sentrale tolkningsmomenter: **verdikrav, ikke gjenstandskrav** (nettokrav — gjeld i eiendelen reduserer); **ombytting/økonomisk identitet** (Rt. 2001 s. 1434 ombyttingskjeder; Rt. 2015 s. 710 «tilstrekkelig økonomisk identitet»); **forholdsmessig andel ved lånefinansiering** (Rt. 2002 s. 1596 — bare den innbrakte egenkapitalandelen skjevdeles); **verdistigning**: inflasjonsjustering OK, kausalitetskrav ellers (Rt. 2008 s. 769); **realverdivekst utover inflasjon** er ÅPENT i HR-praksis — problematisering premieres, kreves ikke engang for A. **§ 59 (2)** — «åpenbart urimelig»-ventilen (snever unntaksregel; 10 års ekteskap ±nøytralt, Rt. 1999 s. 177). **§ 59 (3)** — «sterke grunner» (motsatt vei) *(verifiser eksakt leddstruktur og ordlyd for (2) og (3) mot gjeldende el. § 59)*. Domskvartetten Rt. 2001 s. 1434 / Rt. 2002 s. 1596 / Rt. 2008 s. 769 / Rt. 2015 s. 710 refereres aktivt. Bro: gjeldsopptak med pant i skjevdelingseiendel KONVERTERER verdier til delingsmidler (H2023-plusspoeng).
- **Typetilfeller:** Minipraktikum (nyskrevet): innbrakt delvis lånefinansiert eiendom som har steget kraftig i verdi (forholdsmessig andel + kausalitetskrav for verdistigning); arvet hytte solgt og pengene brukt til å kjøpe felles bolig (ombytting/økonomisk identitet); arv brukt til nedbetaling av felles gjeld (sporing).
- **Metodepoenger:** § 59 (1) FØR (2) — hoppe over hovedregelen er navngitt trekk hver gang (H2012, H2014, H2016). «Klart kan føres tilbake til» drøftes på faktums konkrete pengestrømmer. Realverdivekst-problematisering er et navngitt skjult skillepunkt.
- **Typiske feil:** Å gå rett til annet ledd; § 59 (1) brukt på verdier ervervet UNDER ekteskapet ved egen innsats (kun midler hatt ved inngåelsen eller arv/gave — H2016, H2023); skyld/utroskap som moment i (2)-vurderingen (irrelevant — H2014); gjenstands- i stedet for verdibetraktning.
- **Kvote:** quiz 24 · flashcards 28 (flashcards: § 59-vilkårene enkeltvis; domskvartetten dom→poeng)

---

#### Kapittel 1.3: Vederlagskrav mellom ektefeller — §§ 63 (2) og 73
- **id:** `jus1211-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `jus1211-1-1`, `jus1211-1-2`
- **Kapitteltype:** regel
- **description:** To atskilte vederlagsspor: utilbørlig svekkelse av delingsgrunnlaget (§ 63 (2)) og medvirkning til den andres særeie/forlodd (§ 73) — vilkårene OG «kan»-skjønnet.
- **Eksamensbelegg:** Vederlag testet ~5/24 (H2012, H2017, V2022, V2025, + V2012). Prioritetsklasse: **perfekt** (fast ledd i tre-kravs-skiftet). *(verifiser at gjeldende el. § 63 (2) er hjemmelen for vederlag ved utilbørlig svekkelse av delingsgrunnlaget, og at § 73 gjelder medvirkning til den andres særeie/forlodd)*
- **Regelkontrakt:** **§ 63 (2)** — vederlag når en ektefelle har svekket delingsgrunnlaget på en «utilbørlig»/«sterkt kritikkverdig» måte (Rt. 2002 s. 648: allment aksepterte normer; objektivt + subjektivt element): gaver til egne barn eller skjult forbruk rett før bruddet. **§ 73** — vederlag for i vesentlig grad å ha medvirket til å øke den andres særeie ved arbeid/innsats/bidrag: to trinn som skal holdes fra hverandre — først VILKÅRENE, deretter «kan»-SKJØNNET (rimelighetsvurdering; beregning etter Rt. 2003 s. 1127 + Rt. 1990 s. 1226). Manglende rimelighetsdrøftelse under § 73 er navngitt trekk.
- **Typetilfeller:** Minipraktikum: den ene overfører betydelige beløp til egne særkullsbarn måneden før separasjonsbegjæring (§ 63 (2)); den ene har pusset opp den andres arvede særeiehytte over ti år (§ 73 — vilkår + skjønn).
- **Metodepoenger:** Hold § 63 (2) og § 73 fra hverandre — ulike vilkår, ulik retning. Under § 73: aldri hopp over «kan»-skjønnet. Vederlag er en pengefordring, ikke et gjenstandskrav.
- **Typiske feil:** Å blande § 63 (2) og § 73; å drøfte § 73-vilkårene og glemme rimelighetsskjønnet (V2022); å anføre vederlag partene ikke har krevd (V2020: uanført vederlag trekker).
- **Kvote:** quiz 18 · flashcards 18

---

#### Kapittel 1.4: Forloddskrav og gjeldsavleggelse — §§ 61 og 58 (3)
- **id:** `jus1211-1-4` · **number:** 1.4 · **estimatedMinutes:** 55 · **prerequisites:** `jus1211-1-1`
- **Kapitteltype:** regel
- **description:** Forlodds uttak før likedeling (§ 61 a–d) og klassifiseringen av gjeldsposter (§ 58 (3) a/b/c) — den «vanskelige» A-skille-modulen.
- **Eksamensbelegg:** Forlodds testet 3 (H2023 d: sluttpakke; V2025 a/c: verdigjenstander); gjeldsavleggelse 2–3 (V2019, H2023 — angitt som «vanskelig» begge ganger, sikkert A-skille). Prioritetsklasse: **perfekt** (forlodd) / **kunne** (gjeldsavleggelse). *(verifiser eksakt bokstavinndeling i el. § 61 og leddstruktur i § 58 (3))*
- **Regelkontrakt:** **§ 61** forloddskrav: **a** eiendeler utelukkende til personlig bruk (+ «åpenbart urimelig»-ventil); **c** eiendeler/rettigheter av personlig karakter eller som ikke kan overdras (utvidende tolkning i HR-2024-814-A — sekundærkanon); **d** erstatning/trygd/forsikring for personskade og sluttvederlag/etterlønn (med innsats-avkortning i siste punktum). **§ 58 (3)** gjeldsavleggelse — hvilken gjeld som trekkes fra hvilken formuesmasse (a/b/c-klassifisering: gjeld knyttet til skjevdelings-/forloddsmidler, til delingsformue, til særeie) — «vanskelig», krever ryddig klassifisering post for post.
- **Typetilfeller:** Minipraktikum: sluttpakke ved nedbemanning kort før bruddet (§ 61 d + avkortning); tre ulike gjeldsposter (boliglån, forbrukslån, studielån) som må klassifiseres (§ 58 (3)).
- **Metodepoenger:** Forlodds § 61 ≠ skjevdeling § 59 (forlodd tas i naturalia før deling; skjevdeling er verdikrav) — hold sporene fra hverandre. Gjeldsavleggelse gjøres post for post; å ta «alt i ett» trekker.
- **Typiske feil:** Å blande § 61 og § 59; å behandle gjeldsavleggelse upresist; å glemme innsats-avkortningen i § 61 d.
- **Kvote:** quiz 18 · flashcards 18 (flashcards: § 61 a–d hver for seg; § 58 (3)-klassifisering)

---

#### Kapittel 1.5: Ektepakt og gaver mellom ektefeller
- **id:** `jus1211-1-5` · **number:** 1.5 · **estimatedMinutes:** 50 · **prerequisites:** `jus1211-1-1`
- **Kapitteltype:** regel
- **description:** Ektepaktens formkrav (§ 54, samtidighet) og innholdsskranker (§§ 42–46), gaver mellom ektefeller og kreditorvernet med «utvilsomt solvent»-testen (§§ 50–51).
- **Eksamensbelegg:** Ektepakt testet 3–4 (V2017, V2021, V2022); gave/kreditorvern (§ 51) 1–2 (V2019). Rt. 2008 s. 769-poenget (ektepakt avskjærer skjevdeling bare ved klare holdepunkter) er navngitt skjult skillepunkt. Prioritetsklasse: **kunne**. *(verifiser el. § 54 formkravene og at § 51 er kreditorhjemmelen mot gavemottakende ektefelle)*
- **Regelkontrakt:** **§ 54** ektepaktens formkrav — skriftlig, begge ektefeller, to godtatte vitner, alle underskriver **samtidig**; **§ 42** særeie ved avtale (§ 42 (3): særeie i live/felleseie ved død); **§ 44** avtale om at skjevdeling § 59 (1)/(3) ikke skal gjelde (kobling til kap. 1.2 og til Rt. 2008 s. 769); **§ 46** lemping av urimelig ektepakt; §§ 48–50 gaver krever ektepakt (unntak vanlige/forsørgelsesgaver); **§ 51** eldre kreditor kan holde seg til gavemottaker når giver ikke var **«utvilsomt solvent»** ved gaven — beviskravet er skjult skillepunkt; dekningsloven/omstøtelse KREVES IKKE (§ 51 gjelder uten konkurs). Sekundærkanon: Rt. 2014 s. 1248, HR-2017-959-A.
- **Typetilfeller:** Minipraktikum: ektepakt om særeie der vitnene ikke var til stede samtidig (§ 54-formfeil); dødsdisposisjon inntatt i ektepakt (gyldig når testamentsformkravene er oppfylt — Rt. 1963 s. 518); stor pengegave til ektefelle mens giver hadde tvilsom økonomi (§ 51 «utvilsomt solvent»).
- **Metodepoenger:** Samtidighetskravet i § 54 er en fasit-test (formfeil = ugyldig). «Dødsdisposisjon kan ikke gjøres i ektepakt» er FEIL — trekk for det motsatte (V2021). § 51 er hjemmelen mot ektefellegave — ikke dekningsloven § 5-2 (V2019-felle).
- **Typiske feil:** Å kreve konkurs for § 51; «dødsdisposisjon i ektepakt er ugyldig»; å overse Rt. 2008 s. 769-poenget om at ektepakt bare avskjærer skjevdeling ved klare holdepunkter.
- **Kvote:** quiz 16 · flashcards 20

---

#### Kapittel 1.6: Samboernes formuesrett
- **id:** `jus1211-1-6` · **number:** 1.6 · **estimatedMinutes:** 55 · **prerequisites:** `jus1211-1-1`
- **Kapitteltype:** regel
- **description:** Samboeroppgjøret på ulovfestet grunn: sameiestiftelse ved (indirekte) bidrag + fellesprosjekt, og vederlag på berikelses-/rimelighetsgrunnlag — med de to store fellene.
- **Eksamensbelegg:** Samboeres formuesforhold testet ~7/24 (V2014, H2015 (T), H2016, V2020, H2022, + H2018 (T)). Prioritetsklasse: **perfekt**. To navngitte feller (se under).
- **Regelkontrakt:** **Ingen samboerlov for økonomisk oppgjør** — ulovfestet rett gjelder. **Sameiestiftelse:** direkte + INDIREKTE bidrag (Rt. 1975 s. 220 Husmor; Rt. 1978 s. 1352; Rt. 1984 s. 497 — hjemmearbeid frigjør tid, ikke penger) SAMMEN med et **fellesprosjekt** (partene skal eie sammen); for sameie i eiendel eid før samlivet kreves «atskillig til» (Rt. 1999 s. 177). **Vederlag:** berikelse + rimelighet, halvpartsutgangspunkt, verdien av gratis bolig motregnes (Rt. 2011 s. 1168-rammen; Rt. 2000 s. 1089, Rt. 1989 s. 539 sekundært). **FELLE 1:** husstandsfellesskapsloven er IKKE hjemmel for oppgjøret — den gjelder kun bruksrett ved opphør (V2014 «meget svakt», V2020). **FELLE 2:** ekteskapslovens husarbeidsregel (§ 31 (3)) gjelder IKKE analogisk for samboere — standardeksempel på nektet analogi (H2016).
- **Typetilfeller:** Minipraktikum (nyskrevet): den ene eier boligen formelt, den andre har hatt barneomsorgen og betalt løpende forbruk (sameie subsidiært vederlag); den ene renoverte den andres bolig betydelig (berikelse + rimelighet).
- **Metodepoenger:** Krev sameie primært, vederlag subsidiært — riktig rekkefølge. «Fellesprosjekt»-vilkåret overses ofte (H2016: «ganske mange overser helt»). Indirekte bidrag KAN begrunne sameie, men koblingen bidrag → eierandel må drøftes, ikke antas.
- **Typiske feil:** Husstandsfellesskapsloven som hjemmel (FELLE 1); analogi fra ekteskapsloven (FELLE 2); å overse fellesprosjekt-vilkåret; å behandle samboere som ektefeller.
- **Kvote:** quiz 18 · flashcards 16

---

#### Kapittel 1.7: Typetilfelle — Tre-kravs-skiftet
- **id:** `jus1211-1-7` · **number:** 1.7 · **estimatedMinutes:** 50 · **prerequisites:** `jus1211-1-2`, `jus1211-1-3`, `jus1211-1-4`
- **Kapitteltype:** typetilfelle
- **description:** Standardmalen i familierettspraktikum: skjevdeling + vederlag + forlodds/gjeld i samme faktum — tre atskilte hjemler som må holdes fra hverandre.
- **Eksamensbelegg:** Tre-kravs-malen er blitt standard (H2023, V2025). Prioritetsklasse: **perfekt**.
- **Regelkontrakt (tvistepunkt-kartet):** (1) fastlegg formuesordning og eierforhold (kap. 1.1); (2) **skjevdeling § 59** (kap. 1.2) — nettokrav, sporing, verdistigning; (3) **vederlag § 63 (2)/§ 73** (kap. 1.3); (4) **forlodds § 61 / gjeldsavleggelse § 58 (3)** (kap. 1.4); (5) sammenstill til ett oppgjør. Hvert krav får egen problemstilling og egen subsumsjon; parallelle hjemler holdes fra hverandre.
- **Typetilfeller:** Gjennomdrøftet variant (NYSKREVET — f.eks. et ektepar skilles etter 12 år; den ene brakte inn en delvis lånefinansiert leilighet som har steget kraftig, ga en betydelig sum til eget særkullsbarn før bruddet, og krever forlodds uttak av personlige verdigjenstander + en sluttpakke; tre gjeldsposter skal klassifiseres). Full drøftelse med margkommentarer om uttelling per krav. Øvelsesvarianter (3–5) flytter tvilen mellom kravene.
- **Metodepoenger:** Riktig rekkefølge og separasjon av kravene er selve A-grepet. Kort om det klare, dybde i tvilen. Vis hvordan gjeldsopptak konverterer skjevdelings- til delingsmidler.
- **Typiske feil:** Å blande de tre kravene; å ta gjeldsavleggelsen «i ett»; å drøfte vederlag partene ikke har krevd.
- **Kvote:** quiz 14 · flashcards 10

---

#### Kapittel 1.8: Typetilfelle — Samboerbruddet og samboerdødsfallet
- **id:** `jus1211-1-8` · **number:** 1.8 · **estimatedMinutes:** 45 · **prerequisites:** `jus1211-1-6`
- **Kapitteltype:** typetilfelle
- **description:** Samboeroppgjøret ved brudd (sameie subsidiært vederlag) og ved dødsfall (gave gitt kort før død — livs- eller dødsdisposisjon?), med bro til arveretten.
- **Eksamensbelegg:** Samboersameie/-vederlag (V2014, V2020, H2022); samboerdødsfall med gave før død kobler til livs-/dødsdisposisjon (kap. 2.2). Prioritetsklasse: **perfekt**.
- **Regelkontrakt (tvistepunkt-kartet):** (1) sameie ved bidrag + fellesprosjekt (kap. 1.6); (2) subsidiært vederlag (berikelse + rimelighet); (3) ved dødsfall: klassifiser en gave gitt kort før død som livs- eller dødsdisposisjon (bro til al. § 40, kap. 2.2) — og vurder samboers eventuelle arve-/uskifterett (kap. 2.1); (4) avvis fellene (husstandsfellesskapsloven; ekteskapslov-analogi).
- **Typetilfeller:** Gjennomdrøftet variant (NYSKREVET — f.eks. et samboerpar gjennom 15 år; den ene eier hytta formelt, den andre har finansiert oppussing og hatt hovedansvar hjemme; kort før sitt dødsfall overfører eieren hytta til en nevø). Varianter: (i) rent brudd (sameie/vederlag); (ii) dødsfall med gave (livs-/dødsdisp.-bro); (iii) samboer med felles barn (arverett kap. 2.1).
- **Metodepoenger:** Sameie før vederlag. Ved dødsfall må gaven klassifiseres FØR arveoppgjøret regnes. Samboere har ikke ektefellenes formuesordning — ingen skjevdeling/likedeling.
- **Typiske feil:** Ekteskapsregler på samboere; å hoppe over fellesprosjekt-vilkåret; å regne arv uten å avklare gavens karakter.
- **Kvote:** quiz 12 · flashcards 8

---

#### Kapittel 1.9: Typetilfelle — Sammensatt skifte
- **id:** `jus1211-1-9` · **number:** 1.9 · **estimatedMinutes:** 45 · **prerequisites:** `jus1211-1-1`, `jus1211-1-2`
- **Kapitteltype:** typetilfelle (bro familie→arv)
- **description:** Ektefelleskifte og dødsboskifte i samme faktum: rekkefølgen felleseieskifte FØRST (el. §§ 76–78), deretter arvefordelingen (al.) — sensor trekker for å overse at skiftet er sammensatt.
- **Eksamensbelegg:** Sammensatt skifte testet V2017, V2021 — sensor trekker eksplisitt for å behandle det «i ett». Prioritetsklasse: **kunne** (men navngitt A/C-skille). Forutsetter arvekapitlene (kap. 2.1) — plasseres pedagogisk sist i Del 1 og krysslenkes til Del 2.
- **Regelkontrakt (tvistepunkt-kartet):** (1) **felleseieskiftet først** (el. §§ 76–78): fastlegg gjenlevendes andel av felleseiet (inkl. skjevdeling/forlodds hvis anført); (2) **deretter dødsboskiftet** (al.): fordel avdødes del mellom gjenlevende og øvrige arvinger; (3) uskifte som alternativ (kap. 2.6). Rekkefølgen er kjernen.
- **Typetilfeller:** Gjennomdrøftet variant (NYSKREVET — ektefelle dør; det er både et felleseieoppgjør (med et skjevdelingskrav) og en arvefordeling med særkullsbarn å gjøre). Varianter flytter tvilen mellom skjevdelingsleddet og arveleddet.
- **Metodepoenger:** Se at skiftet er sammensatt — dette er selve testen. Felleseieskiftet må være ferdig før arvemassen er kjent. Krysslenk til legalarv (kap. 2.1) og uskifte (kap. 2.6).
- **Typiske feil:** Å gjennomføre skiftet «i ett» uten å skille felleseie- og dødsboskifte (V2017, V2021 — trekk); å regne arv av bruttoformuen.
- **Kvote:** quiz 10 · flashcards 8

**Prøve-kvote Del 1:** 4 prøver (ett tre-kravs-familiepraktikum med nummererte delspørsmål og avgrensningsinstruks; ett samboeroppgjør (sameie/vederlag med begge feller innbakt); én skjevdelings-domsanalyse (Rt. 2008 s. 769-mønster); én ren vilkårs-/paragrafprøve §§ 58–63).

---

### DEL 2 — Arverett (score ~15/24)

> **Rettstilstand:** Hele delen bygger på **arveloven 2019** (i kraft 1.1.2021, jf. § 180).
> 1972-lovens paragrafer nevnes KUN der domsanalyse-dommene brukte dem, med eksplisitt
> kobling til dagens bestemmelse (1972 § 19 → 2019 § 23; 1972 § 61 → 2019 § 44; 1972
> §§ 29/30 → 2019 §§ 50/51; 1972 §§ 49/51 → 2019 §§ 42/46).

---

#### Kapittel 2.1: Arverettens system og legalarven
- **id:** `jus1211-2-1` · **number:** 2.1 · **estimatedMinutes:** 50 · **prerequisites:** `jus1211-0-2`
- **Kapitteltype:** regel
- **description:** Arvegangsklassene, ektefellens og samboerens arverett (minstearv 4G/6G), samboerdefinisjonen og skrankene for å begrense arven ved testament.
- **Eksamensbelegg:** Ektefelle-/samboer-legalarv og minstearv testet 2–3/24 (H2014 (1972-§ 6), H2025 (T)). Prioritetsklasse: **kunne** (rammen for alt arveoppgjør).
- **Regelkontrakt (arveloven 2019):** arvegangsklassene (livsarvinger først); **§ 8** ektefelle arver 1/4 ved livsarvinger, minst **4G**; **§ 9** 1/2 ved arvinger i annen klasse, minst **6G**, ellers alt; **§ 10** testament kan begrense ektefellens arv bare hvis ektefellen hadde kunnskap før dødsfallet — og **minstearven kan aldri fratas**; **§ 11** skjæringstidspunkt ved separasjonsbegjæring; **§ 2 (3)/§§ 12–13** samboerdefinisjonen (ekteskapsliknende, over 18, ikke gift/samboer med andre), felleseiebarn-vilkåret og 5-års-testasjonsretten på 4G; §§ 104/113–114 naturalutlegg (kap. 2.7).
- **Typetilfeller:** Minipraktikum: beregning av ektefellens minstearv når boet er lite (4G slår inn foran brøken); samboer med felles barn vs. uten (§§ 12–13); testament som forsøker å frata minstearven (§ 10-skranke).
- **Metodepoenger:** Minstearven er et gulv (4G/6G) som slår inn når brøken gir mindre. § 10-kunnskapskravet er vilkår for å begrense ektefellearven. Samboerarv krever felles barn (eller 5-års-testament på 4G).
- **Typiske feil:** Å bruke brøken uten å sjekke minstearvsgulvet; å gi samboer legalarv uten felles barn; å tro at testament kan frata minstearven.
- **Kvote:** quiz 16 · flashcards 20

---

#### Kapittel 2.2: Livs- vs. dødsdisposisjon — arveloven § 40
- **id:** `jus1211-2-2` · **number:** 2.2 · **estimatedMinutes:** 60 · **prerequisites:** `jus1211-2-1`
- **Kapitteltype:** regel (også metode-tungt — fast domsanalyse-objekt)
- **description:** Grensen mellom disposisjoner som krever testamentsform og de som ikke gjør det: realitetskravet, bindingstidspunktet, «snart skal dø»-drillen og antitese-grensene.
- **Eksamensbelegg:** Livs-/dødsdisposisjon testet ~6/24 (H2013, V2016, H2017 (D), H2022, H2023 (teoretikum)) — også fast domsanalyse-/teoretikum-objekt. Prioritetsklasse: **perfekt** (både praktikum og metode).
- **Regelkontrakt:** **§ 40** — en disposisjon som skal oppfylles etter arvelaterens død, eller som ikke har hatt «realitet» i live, krever testamentsform. Sentralt: **realitetskravet** — hadde gaven faktisk eller intendert virkning i giverens levetid? (Rt. 2007 s. 776 + Rt. 2008 s. 1589: helhetsvurdering av konkret virkning, kodifisert i § 40); **bindingstidspunktet** — realiteten vurderes fra da giveren bandt seg (HR-2017-716-A, selvmordsbeslutning); **«snart skal dø, og som vet det»**-modifikasjonen; **antitese-grensene** (NOU 2014:1 s. 198). Motiv er SUBSIDIÆRT moment — realiteten drøftes først. Sekundærkanon: Rt. 1961 s. 935 (realitetskriteriet), Rt. 1963 s. 803 (dødsleie), Rt. 2015 s. 1157 Fårøya.
- **Typetilfeller:** Minipraktikum (nyskrevet): giver overfører en eiendom «med virkning fra min død» men fortsetter å bruke og beholde inntektene (dødsdisposisjon → testamentsform); giver gir bort en verdifull gjenstand og leverer den fysisk fra seg straks (livsdisposisjon). Domsutdrag i domsanalyse-format (HR-2017-716-A-mønster): realitet fra bindingstidspunktet.
- **Metodepoenger:** START med realiteten, ikke motivet (motiv-først er «svært negativt», V2016). Bindingstidspunktet er analyseankeret. Skille eget faktum fra domsfaktum i dombruken.
- **Typiske feil:** Å starte med motivet; å bruke domsfakta i stedet for å hente vurderingstema; å behandle enhver dødsnær gave som dødsdisposisjon uten realitetsvurdering.
- **Kvote:** quiz 20 · flashcards 18

---

#### Kapittel 2.3: Testament — formkrav og vitnehabilitet
- **id:** `jus1211-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** `jus1211-2-1`
- **Kapitteltype:** regel
- **description:** Ordinære formkrav (§ 42), vitnehabiliteten (§ 44 — og den avgjørende virkningsforskjellen), og nødtestament (§ 46). Arveloven 2019 mot 1972-loven.
- **Eksamensbelegg:** Formkrav og vitnehabilitet testet ~5/24 (V2020 (T), V2021, H2022, H2024, V2025 (D)). Prioritetsklasse: **perfekt**. Flere navngitte feller (se under). *(verifiser eksakt personkrets i al. 2019 § 44 og at samtidighetskravet fra 1972-§ 49 er opphevet i § 42)*
- **Regelkontrakt (arveloven 2019):** **§ 42** — skriftlig, underskrevet av testator, to vitner som bevitner underskriften og vet at dokumentet skal være et testament; **samtidighetskravet fra 1972-§ 49 er opphevet**. **§ 44** vitnehabilitet — disposisjon til vitnet selv eller vitnets nære krets (ektefelle/samboer, barn, nære slektninger, arbeidsgiver) er ugyldig; **kasuistisk — skal tas på ordet** (Rt. 2003 s. 198, domsanalyse-objekt V2025). **VIRKNINGSFORSKJELLEN:** § 44 rammer bare den ENKELTE begunstigede disposisjonen — ikke hele testamentet (kontrast til § 42, der formfeil rammer hele testamentet). **§ 46** nødtestament (fare/nødstilfelle: muntlig for to vitner, gyldig i tre måneder; «umulig»-terskelen) — sekundærkanon Rt. 1974 s. 920, Rt. 1984 s. 1425.
- **Typetilfeller:** Minipraktikum: testament der ett av vitnene er gift med en begunstiget (§ 44 — bare den bestemmelsen faller); testament der et vitne er svoger til en begunstiget (IKKE omfattet — innsnevring fra 1972); nødtestament under akutt sykdom (§ 46-terskelen). Domsutdrag (Rt. 2003 s. 198-mønster): formregler tas på ordet.
- **Metodepoenger:** Formfeil (§ 42) = hele testamentet ugyldig; habilitetsfeil (§ 44) = bare den enkelte disposisjonen faller. Denne virkningsforskjellen er navngitt A/C-skille. Kasuistiske formregler skal ikke utvides analogisk.
- **Typiske feil:** Hele testamentet ugyldig ved vitneinhabilitet (§ 44 rammer bare disposisjonen — «alvorlig feil», H2024); svoger/svigerinne som inhabilt vitne (ektefelle til søsken IKKE omfattet — H2024); å utvide den kasuistiske personkretsen.
- **Kvote:** quiz 18 · flashcards 22 (flashcards: § 42-vilkårene; § 44-personkretsen; § 42 vs. § 44-virkning)

---

#### Kapittel 2.4: Testamentstolkning, gjensidig testament og tilbakekall
- **id:** `jus1211-2-4` · **number:** 2.4 · **estimatedMinutes:** 50 · **prerequisites:** `jus1211-2-3`
- **Kapitteltype:** regel
- **description:** Tolkning etter testators vilje (§§ 57–58), overlevelseskravet (§ 66), og reglene for gjensidige testamenter og tilbakekall (§ 61).
- **Eksamensbelegg:** Testamentstolkning/bortfall/gjensidig testament testet ~5/24 (H2013, V2014, V2017, V2018, H2024). Prioritetsklasse: **kunne**. *(verifiser at al. 2019 §§ 57/58 er tolkningsreglene, § 61 gjensidig testament/tilbakekall, § 66 overlevelseskravet)*
- **Forkunnskaper (kryssbok):** Tolkningslæren generelt — lenk til [Avtaletolkning, § 36 og ugyldighet — kortversjonen](/bok/jus1111/jus1111-1-5). Testamentstolkning er subjektiv (testators vilje), i motsetning til avtalers objektive tolkning — poeng verdt å fremheve.
- **Regelkontrakt (arveloven 2019):** **§ 57** testament tolkes i samsvar med det testator mente; **§ 58** supplerende tolkningsregler (feilskrift, bortfall av arving, endrede forhold); **§ 66** arving må overleve (eller være unnfanget og senere født levende); livsarvingers inntreden; **§ 61** tilbakekall etter gjensidig testament — krever den annens kunnskap, unntak ved umulighet/urimelighet eller når andre får minst like god rett. Kontrast subjektiv (testament) vs. objektiv (avtale) tolkning.
- **Typetilfeller:** Minipraktikum: begunstiget dør før testator (§ 66 → §§ 57/58-tolkning: inntreden eller bortfall?); gjensidig testament der lengstlevende vil endre begunstigelsen (§ 61-grensene); en sekundærdisposisjon i testamentet (tolkning).
- **Metodepoenger:** Testamentstolkning søker testators SUBJEKTIVE vilje — ikke objektiv mening. § 66 avgjør om en disposisjon i det hele tatt får virkning før tolkningen begynner.
- **Typiske feil:** Objektiv tolkning av testament; å overse § 66 (arving forutdød); å behandle gjensidig testament som fritt tilbakekallelig.
- **Kvote:** quiz 16 · flashcards 16

---

#### Kapittel 2.5: Pliktdel — §§ 50 og 51
- **id:** `jus1211-2-5` · **number:** 2.5 · **estimatedMinutes:** 45 · **prerequisites:** `jus1211-2-1`
- **Kapitteltype:** regel
- **description:** Livsarvingenes vern: pliktdelen (2/3, beløpsgrense 15G etter 2019-loven), den gjenstandsmessige grensen — og testators kontantoppgjørsadgang.
- **Eksamensbelegg:** Pliktdel testet 4/24 (H2013, V2016, V2018, H2022). Prioritetsklasse: **kunne**. Kontantoppgjørsretten er navngitt skjult skillepunkt («dessverre svært mange som ikke nevner»). *(verifiser gjeldende beløpsgrense i al. 2019 § 50 — 15G — og kontantoppgjørsadgangen i § 51)*
- **Regelkontrakt (arveloven 2019):** **§ 50** pliktdel = 2/3 av arven til livsarvingene, men **begrenset oppad til 15G per barn(egren)** (hevet fra 1972-lovens kronebeløp); **sum- OG gjenstandsmessig grense** (Rt. 1948 s. 359: testator kan ikke råde over pliktdelen i gjenstandsform utover kontantoppgjør); **§ 51** testators adgang til å bestemme at en livsarving skal få pliktdelen utbetalt i **kontanter** eller i en bestemt eiendel (kontantoppgjørsretten). 1972-parallell: §§ 29/30.
- **Typetilfeller:** Minipraktikum: testament som gir en livsarving mindre enn pliktdelen (sum-grensen); testament som gir bort en bestemt gjenstand som overstiger fri tredjedel (gjenstandsgrensen + kontantoppgjør § 51).
- **Metodepoenger:** Pliktdel er både en sum- OG en gjenstandsgrense — men § 51 gir testator kontantoppgjørsadgang. Å behandle pliktdel som ren sumbegrensning er navngitt feil.
- **Typiske feil:** Pliktdel som ren sumbegrensning (glemme gjenstandsgrensen — V2016); å glemme kontantoppgjørsadgangen § 51 (H2022); å bruke utdatert 1972-kronebeløp i stedet for 15G.
- **Kvote:** quiz 14 · flashcards 14

---

#### Kapittel 2.6: Uskifte — §§ 14, 15, 23 og 28
- **id:** `jus1211-2-6` · **number:** 2.6 · **estimatedMinutes:** 55 · **prerequisites:** `jus1211-2-1`
- **Kapitteltype:** regel
- **description:** Uskiftet bo: etablering (samtykke fra særkullsbarn), råderett, gaveomstøtelse ved «misforhold» (§ 23) og skifteplikt ved klanderverdig vanstyre (§ 28).
- **Eksamensbelegg:** Uskifte testet ~5/24 (V2013 (T), V2017, H2020, V2021, V2023 (D)). Prioritetsklasse: **perfekt**. Gaveomstøtelsen er domsanalyse-objekt (HR-2022-2157-A, V2023). *(verifiser al. 2019 §§ 14–15 samtykke, § 23 gaveomstøtelse «misforhold til formuen», § 28 skifteplikt)*
- **Regelkontrakt (arveloven 2019):** **§§ 14–15** rett til uskifte; **samtykke fra særkullsbarn** kreves (mindreårig: verge + statsforvalter); **§ 23** lengstlevende kan ikke uten arvingenes samtykke gi gaver som står i **«misforhold til formuen»** — vurderingen er PROSENT + KONKRET (Prop. 107 L (2017–2018) s. 81–82; HR-2022-2157-A om 1972-§ 19s «mishøve», med kobling til § 23); omstøtelse = tilbakeføring av gavens verdi, frist ett år etter kunnskap; **§ 28** arving kan kreve skifte hvis lengstlevende rår så klanderverdig at formuen vesentlig reduseres. 1972-paralleller: § 19 (gave), § 24 (2) (skifteplikt).
- **Typetilfeller:** Minipraktikum: lengstlevende i uskifte gir en stor pengegave til nytt familiemedlem (§ 23 «misforhold» — prosent + konkret); særkullsbarn nekter samtykke til uskifte (§§ 14–15); arvingene krever skifte pga. spekulasjon (§ 28). Domsutdrag (HR-2022-2157-A-mønster): «misforhold»-kriteriet og rettskildesituasjonen.
- **Metodepoenger:** Særkullsbarns samtykkeposisjon overses ofte — sjekk alltid. «Misforhold» vurderes både som prosent AV boet og konkret (gavens art). I domsanalyse: se rettskildesituasjonen (fravær av HR-praksis øker teoriens vekt).
- **Typiske feil:** Å overse særkullsbarnets samtykke; å behandle «misforhold» som ren prosentgrense uten konkret vurdering; å bruke dekningsloven i stedet for § 23.
- **Kvote:** quiz 16 · flashcards 18

---

#### Kapittel 2.7: Avkorting og naturalutlegg på skifte
- **id:** `jus1211-2-7` · **number:** 2.7 · **estimatedMinutes:** 40 · **prerequisites:** `jus1211-2-1`
- **Kapitteltype:** regel
- **description:** Avkorting av forskudd på arv (§ 75 — 2019-endringen) og naturalutlegg av boets eiendeler (§§ 104, 113–114) med «rimelig grunn til å motsette seg»-terskelen.
- **Eksamensbelegg:** Avkorting og naturalutlegg testet 1–2/24 (H2014 avkorting, H2019 naturalutlegg (skifteloven § 61 før 2021)). Prioritetsklasse: **kunne**. *(verifiser at al. 2019 § 75 krever betingelse ved gavetidspunktet, og at naturalutlegg nå ligger i al. §§ 104/113–114)*
- **Regelkontrakt (arveloven 2019):** **§ 75** avkorting — en ytelse avkortes i barnets arv KUN hvis avkorting ble satt som **betingelse senest da gaven ble gitt** (viktig endring fra 1972-§ 38, som tillot avkorting ut fra formodning); avkortingsbeløpet = verdien da gaven ble mottatt; forbruk utover egen arv gir ikke tilbakebetalingsplikt. **§§ 104, 113–114** naturalutlegg — en arving kan kreve bestemte eiendeler utlagt; grensen er om andre har «rimelig grunn til å motsette seg»; markedspris-poenget. Sekundærkanon: Rt. 1978 s. 1513, Rt. 2009 s. 1512, Rt. 1981 s. 513.
- **Typetilfeller:** Minipraktikum: forelder ga et barn en stor pengegave uten å nevne avkorting (§ 75 — ingen avkorting etter 2019-loven); to arvinger vil ha samme eiendel utlagt (§§ 113–114 «rimelig grunn»).
- **Metodepoenger:** 2019-loven snudde avkortingsregelen — betingelse må være satt ved gavetidspunktet. Bruk av gammel formodningsregel er en tidsfelle. Naturalutlegg er en fordelingsregel, ikke en verdiregel.
- **Typiske feil:** Å avkorte uten betingelse ved gavetidspunktet (utdatert 1972-tenkning); å behandle naturalutlegg som verdispørsmål.
- **Kvote:** quiz 10 · flashcards 8

---

#### Kapittel 2.8: Typetilfelle — Testamentskjeden
- **id:** `jus1211-2-8` · **number:** 2.8 · **estimatedMinutes:** 45 · **prerequisites:** `jus1211-2-3`, `jus1211-2-4`, `jus1211-2-5`
- **Kapitteltype:** typetilfelle
- **description:** Gjennomgangsmalen i arvepraktikum: gjensidig testament med sekundærbestemmelse, ett inhabilt vitne, en forutdød arving og et ønske om tilbakekall — alt i én kjede.
- **Eksamensbelegg:** Testamentskjeden speiler H2013, V2014, V2017, V2018, H2024 (gjensidig testament samboere §§ 44, 57/58, 61, 66). Prioritetsklasse: **perfekt**.
- **Regelkontrakt (tvistepunkt-kartet):** (1) formkrav § 42 (gyldig testament?); (2) habilitet § 44 (ett vitne nær en begunstiget — bare den disposisjonen faller); (3) overlevelse § 66 (en arving forutdød — inntreden/bortfall via §§ 57/58); (4) gjensidig testament og tilbakekall § 61; (5) pliktdel §§ 50/51 som ramme. Rekkefølge og virkningsforskjell (§ 42 vs. § 44) er kjernen.
- **Typetilfeller:** Gjennomdrøftet variant (NYSKREVET — et par oppretter gjensidig testament med en sekundærbestemmelse til en felles venn; ett vitne er samboer med sekundærarvingen; en av de begunstigede dør før testator; lengstlevende vil senere endre testamentet). Varianter (3–5) flytter tvilen mellom habilitet, § 66 og § 61.
- **Metodepoenger:** Hold virkningen av § 42 (hele testamentet) og § 44 (én disposisjon) fra hverandre. Behandle hvert element for seg. Pliktdel er ramme, ikke hovedspørsmål med mindre anført.
- **Typiske feil:** Hele testamentet ugyldig ved habilitetsfeil; å overse § 66; å behandle gjensidig testament som fritt tilbakekallelig.
- **Kvote:** quiz 12 · flashcards 8

---

#### Kapittel 2.9: Typetilfelle — Uskiftedisposisjonen
- **id:** `jus1211-2-9` · **number:** 2.9 · **estimatedMinutes:** 40 · **prerequisites:** `jus1211-2-6`
- **Kapitteltype:** typetilfelle
- **description:** Lengstlevende i uskifte gir bort betydelige verdier: gaveomstøtelse etter «misforhold» (§ 23) eller skifte pga. vanstyre (§ 28) — prosent + konkret vurdering.
- **Eksamensbelegg:** Uskiftegave-mønsteret (H2020, V2021, V2023 (D)). Prioritetsklasse: **perfekt** (uskifte er må-perfekt).
- **Regelkontrakt (tvistepunkt-kartet):** (1) forelå gyldig uskifte (samtykke §§ 14–15)? (2) er gaven i «misforhold til formuen» (§ 23 — prosent + konkret)? (3) subsidiært skifteplikt ved klanderverdig vanstyre (§ 28); (4) omstøtelsens virkning og frist. Krysslenk til domsanalysen (HR-2022-2157-A, kap. 4.6).
- **Typetilfeller:** Gjennomdrøftet variant (NYSKREVET — lengstlevende i uskifte overfører en betydelig andel av boet til én av flere arvinger / til en ny partner). Varianter: (i) gaven er ~20 % av boet (grensetilfelle); (ii) gjentatte gaver (§ 28-spor); (iii) mottaker er en av arvingene selv.
- **Metodepoenger:** «Misforhold» vurderes som andel AV boet OG konkret — ikke ren prosentgrense. Se rettskildesituasjonen (kobling til domsanalyse). Frist og omstøtelsesvirkning må med.
- **Typiske feil:** Ren prosentterskel uten konkret vurdering; å bruke dekningsloven; å overse fristen for omstøtelse.
- **Kvote:** quiz 10 · flashcards 8

**Prøve-kvote Del 2:** 4 prøver (ett testamentskjede-praktikum med delspørsmål og «uskifte skal ikke behandles»-avgrensning; ett uskifte-/gaveoppgjør; én livs-/dødsdisposisjons-domsanalyse (HR-2017-716-A-mønster); én komparativ teoriprøve «ektefellers vs. samboeres arverett»).

---

### DEL 3 — Fast eiendoms rettsforhold (score ~15/24)

---

#### Kapittel 3.1: Eiendomsretten og dens utstrekning
- **id:** `jus1211-3-1` · **number:** 3.1 · **estimatedMinutes:** 45 · **prerequisites:** `jus1211-0-2`
- **Kapitteltype:** regel
- **description:** Hva eiendomsretten omfatter, og hvor langt den strekker seg opp i luftrommet og ned i grunnen — den ulovfestede interesselæren.
- **Eksamensbelegg:** Eiendomsrettens utstrekning testet 3/24 (V2013 undergrunn, H2018 droner, H2024 (D) gondolbane). Prioritetsklasse: **kunne**. Domsanalyse-objekt H2024. *(interesselæren er ulovfestet — ingen paragraf; verifiser domsreferansene)*
- **Regelkontrakt:** Ulovfestet **interesselære** — grunneieren rår så langt oppover og nedover som han har en beskyttelsesverdig interesse i å rå; utenfor det er luftrom/undergrunn fritt. Rt. 2011 s. 780 (Høg-Jæren, vindpark); HR-2022-993-A (gondolbane — interesselæren, underrettspraksis + teori som kildegrunnlag, domsanalyse-objekt); NOU 1988:16 Rådsegn 14 (luftrommet — MERK: ikke lovforarbeid i klassisk forstand, poeng i domsanalysen). Grl. § 105/ekspropriasjon berøres kort (V2013).
- **Typetilfeller:** Minipraktikum: en installasjon i luftrommet over naboens tomt (interesseavveining); bruk av undergrunnen (tunnel/kabel). Domsutdrag (HR-2022-993-A-mønster): kildens art (NOU som ikke er «forarbeid»).
- **Metodepoenger:** Interesselæren er en avveiningsnorm, ikke en fast grense. I domsanalysen: at NOU-en ikke er «forarbeid» er et navngitt skjult skillepunkt.
- **Typiske feil:** Å oppgi en fast høyde-/dybdegrense; å behandle NOU-en som ordinært forarbeid; å blande eiendomsrettsspørsmålet med naborett.
- **Kvote:** quiz 12 · flashcards 12

---

#### Kapittel 3.2: Servitutter — stiftelsesgrunnlag og servituttlova § 2
- **id:** `jus1211-3-2` · **number:** 3.2 · **estimatedMinutes:** 60 · **prerequisites:** `jus1211-3-1`
- **Kapitteltype:** regel
- **description:** Særrettigheter over annens eiendom: tolk stiftelsesgrunnlaget FØRST, og bruk servituttlova § 2 som tolknings- og tålegrenseregel («tida og tilhøva») bare der grunnlaget ikke gir svar.
- **Eksamensbelegg:** Servituttlova § 2 / servituttomfang testet ~8/24 (V2016, V2017 (T), H2017, H2021, V2023, H2025, + HR-2020-2186-A som fast referanse). Prioritetsklasse: **perfekt** (kjernen i tingsretten).
- **Forkunnskaper (kryssbok):** Tolkningslæren — lenk til [Avtaletolkning, § 36 og ugyldighet — kortversjonen](/bok/jus1111/jus1111-1-5). Stiftelsesgrunnlaget (avtale/testament) tolkes med samme verktøy.
- **Regelkontrakt (servituttlova 1968):** Prinsippet **stiftelsesgrunnlaget FØRST** — avtalen/festekontrakten/hevdsgrunnlaget tolkes; **§ 1 (2)** deklaratorisk (viker for grunnlaget); **§ 2** tolknings- og tålegrenseregel: rettighetshaver kan ikke bruke servitutten så det er **«urimeleg eller uturvande»** til skade/ulempe for den tjenende eiendom; formålet og **«tida og tilhøva»** (dynamisk standard — endret bruk over tid); naturmangfald-hensyn. **HR-2020-2186-A (Stryken)** er rammeverket (§ 2 som tolkningsregel, «tida og tilhøva», retting av positive servitutter). Endret bruksmåte (hest→bil-linjen): Rt. 1968 s. 695 Deinboll, Rt. 1924 s. 583, Rt. 1937 s. 355; Rt. 2015 s. 120 (veirett følger fradelte parseller). §§ 9 (fradeling), 10 (forkjøpsrett-unntak), 17 (2) (skadebot uten pengeskade, Rt. 2011 s. 228) sekundært.
- **Typetilfeller:** Minipraktikum (nyskrevet): veirett stiftet for privat kjøring, rettighetshaver vil bruke den til næringstransport (tolk grunnlaget → § 2 «tida og tilhøva»); jaktrett stiftet for én viltart, ny bruk (grensedragning). Domsutdrag (HR-2020-2186-A-mønster).
- **Metodepoenger:** Tolk grunnlaget FØRST — § 2 supplerer bare der grunnlaget ikke gir klart svar. Å «konstruere tolkningstvil» for å vise frem § 2/bakgrunnsretten viser IKKE god forståelse (H2025, uttrykkelig).
- **Typiske feil:** Å gå rett på § 2 uten å tolke stiftelsesgrunnlaget; å konstruere tolkningstvil (H2025); å behandle § 2 som ren rimelighetsnorm uten «tida og tilhøva»-forankring.
- **Kvote:** quiz 20 · flashcards 22 (flashcards: § 2-vilkårene; stiftelsesgrunnlag-rekkefølgen; hest→bil-dommene)

---

#### Kapittel 3.3: Hevd — hevdslova §§ 2–10
- **id:** `jus1211-3-3` · **number:** 3.3 · **estimatedMinutes:** 60 · **prerequisites:** `jus1211-3-2`
- **Kapitteltype:** regel
- **description:** Å vinne rett ved bruk over tid: eiendomshevd (20 år), brukshevd, det avgjørende 20-/50-årsskillet, god tro, tålt bruk, og mothevd/frihevd.
- **Eksamensbelegg:** Hevd testet ~6/24 (H2015, V2019 (T), H2021, V2022, H2025). Prioritetsklasse: **perfekt**. Flere navngitte feller (se under). 20-/50-årsskillet er et sikkert A-skille.
- **Regelkontrakt (hevdslova 1966):** **§ 2** eiendomshevd — 20 år sammenhengende som sin egen (10 år for løsøre); **§ 3 (2)** sammenlegging av besittelsestid; **§ 4** aktsom god tro (bortfaller hvis man visste eller burde visst); **§ 5** tålt bruk — bruk «etter løyve eller av godvilje» gir ikke hevd; **§ 7** brukshevd (rett over annens eiendom); **§ 8** hevdstiden er **50 år** for bruksrett som **ikke viser seg av en fast/synlig innretning** (kortere «naudsynt veg»-tilfeller kan være 20 år); **§§ 9–10** mothevd (krever aktiv motbruk mot en rett) og frihevd (krever total ikke-bruk av retten). **20 vs. 50 år**: synlige bruksretter (fast innretning) hevdes på 20 år, usynlige på 50 (§ 8 jf. § 7). Sekundærkanon: Rt. 1970 s. 1398 Nipetjernet, Rt. 1972 s. 643 Bottenvollen, Rt. 2004 s. 604 Kjelsberg, HR-2021-1773-A.
- **Typetilfeller:** Minipraktikum: bruk av en sti/vei uten synlig innretning i 30 år (§ 8 — 50-årskravet ikke nådd); bruk «av godvilje» fra grunneieren (§ 5 — ingen hevd); en rett som ikke er brukt på lenge (frihevd § 10).
- **Metodepoenger:** Fastlegg først hva slags rett som hevdes (eiendom vs. bruk; synlig vs. usynlig) — det avgjør hevdstiden. 50-årsregelen for usynlige bruksretter er navngitt A-skille. Skille mothevd (aktiv motbruk) fra frihevd (ikke-bruk).
- **Typiske feil:** 20 års hevdstid for usynlig bruksrett (skal være 50 — H2025, H2015); eiendomshevd-regler på bruksrett («vanlig misforståelse» — H2021); å blande mothevd og frihevd; å overse tålt bruk (§ 5).
- **Kvote:** quiz 20 · flashcards 24 (flashcards: §§ 2/4/5/7/8/9/10 hver for seg; 20-/50-årsskillet)

---

#### Kapittel 3.4: Tinglysing og ekstinksjon — tinglysingslova §§ 20–21
- **id:** `jus1211-3-4` · **number:** 3.4 · **estimatedMinutes:** 50 · **prerequisites:** `jus1211-3-2`, `jus1211-3-3`
- **Kapitteltype:** regel
- **description:** Rettsvern og godtroerverv: prioritet ved tinglysing (§ 20), ekstinksjon av eldre utinglyst rett mot godtroende erverver (§ 21) — og at hevdet rett har rettsvern UTEN tinglysing (§ 21 annet ledd).
- **Eksamensbelegg:** Tinglysing/ekstinksjon testet ~5/24 (H2015, H2021, V2023, H2025). Prioritetsklasse: **perfekt**. Navngitt felle: det er ERVERVERENS gode tro som vurderes. *(godtroerverv-regelen i §§ 20–21 er substansielt uendret; 2014/2017-endringene gjaldt registreringssystemet, ikke ekstinksjonsvilkåret — verifisert mot Lovdata)*
- **Regelkontrakt (tinglysingslova 1935):** **§ 20** et tinglyst rettserverv går i kollisjon foran et ikke (eller senere) tinglyst; prioritetsregelen. **§ 21 (1)** et eldre rettserverv går likevel foran et yngre stiftet ved rettshandel dersom **erververen** da hans rett ble tinglyst **kjente eller burde kjenne** den eldre rett (godtroerverv/ekstinksjon — det er ERVERVERENS gode tro som vurderes; kunnskap i salgsdokumentene redder rettigheten, ren antakelse om «ikke å merke noe» gjør det ikke). **§ 21 annet ledd:** rett vunnet ved **hevd** eller alders tids bruk består uten tinglysing — hevdet rett har rettsvern uten tinglysing. § 27 grunnboksekstinksjon (mindre sentralt).
- **Typetilfeller:** Minipraktikum: muntlig avtalt veirett; eiendommen selges til en kjøper som tinglyser skjøtet (§ 21 — kjøperens gode tro); rettigheten fremgikk av salgsdokumentene (ingen ekstinksjon); en hevdet rett mot ny erverver (§ 21 (2)).
- **Metodepoenger:** Godtro-vurderingen gjelder ERVERVEREN, ikke rettighetshaveren. Kunnskap i salgsdokumentene avskjærer god tro. Hevdet rett trenger ikke tinglyses for å bestå (§ 21 (2)) — kobling til hevd (kap. 3.3).
- **Typiske feil:** Rettighetshaverens kunnskap som tema (det er erververens gode tro — H2025); å tro at hevdet rett må tinglyses; å overse at salgsdokumenter formidler kunnskap.
- **Kvote:** quiz 16 · flashcards 18

---

#### Kapittel 3.5: Naborett — grannelova §§ 2, 9 og 10
- **id:** `jus1211-3-5` · **number:** 3.5 · **estimatedMinutes:** 50 · **prerequisites:** `jus1211-3-1`
- **Kapitteltype:** regel
- **description:** Tålegrensen mellom naboer: § 2-avveiningen (urimeleg/uturvande, ventelighet, «monaleg forverring … avgrensa krins»), objektivt erstatningsansvar (§ 9) og retting (§ 10).
- **Eksamensbelegg:** Naboloven § 2 (+ §§ 9/10) testet ~5/24 (V2013, V2016, H2018, H2020, V2024). Prioritetsklasse: **perfekt**. Navngitt felle: offentlig tillatelse avgjør ikke privatrettslige forhold.
- **Regelkontrakt (grannelova 1961):** **§ 2** — ingen må ha/gjøre noe som er **«urimeleg eller uturvande»** til skade/ulempe for naboeiendom; momenter: teknisk/økonomisk mulighet for å unngå (annet ledd), **ventelighet** (tredje ledd — hva naboen måtte regne med etter forholdene på stedet), og sikkerhetsventilen **«monaleg forverring for ein avgrensa krins»** (fjerde ledd). **§ 9** objektivt erstatningsansvar for tålegrenseoverskridelse (årsaks-/adekvanskrav — HR-2023-2420-A). **§ 10** retting (uttømmende unntak; **offentlig tillatelse hjelper ikke** — pbl. § 21-6: en byggetillatelse avgjør ikke de privatrettslige forholdene). Domskanon: Rt. 2006 s. 486 Gardermoen (flystøy, ventelighet, fjerde ledd), Rt. 1969 s. 757 Sandvika, Rt. 1971 s. 378 (griselukt).
- **Typetilfeller:** Minipraktikum (nyskrevet): en støyende/luktende virksomhet eller innretning (f.eks. et anlegg, en virksomhet, en brygge) rammer én naboeiendom særlig hardt (§ 2-avveining → §§ 9/10). Domsutdrag (Rt. 2006 s. 486-mønster) om ventelighet.
- **Metodepoenger:** § 2-avveiningen er en helhetsvurdering med FORANKREDE momenter — ventelighet (3. ledd) mot «monaleg forverring» (4. ledd). Offentlig tillatelse er ikke vern mot naborettskrav. § 9-ansvaret er objektivt.
- **Typiske feil:** Byggetillatelse som vern mot naborettskrav (pbl. § 21-6 — H2020-felle); å hoppe over ventelighets-/fjerde ledd-momentene; å kreve skyld under § 9 (ansvaret er objektivt).
- **Kvote:** quiz 16 · flashcards 18

---

#### Kapittel 3.6: Sameie — sameigelova §§ 1–15
- **id:** `jus1211-3-6` · **number:** 3.6 · **estimatedMinutes:** 45 · **prerequisites:** `jus1211-3-1`
- **Kapitteltype:** regel
- **description:** Det tingsrettslige sameiet: bruk, vedlikehold vs. påkostning, kostnadsfordeling etter part, og avhending/oppløsning av en sameieandel.
- **Eksamensbelegg:** Sameigelova testet 4/24 (V2013, V2014, H2018, H2019). Prioritetsklasse: **kunne**. Navngitt felle: § 3 løser ikke avhendingsspørsmålet. *(verifiser sameigelova §§ 8/9/10/15)*
- **Regelkontrakt (sameigelova 1965):** **§ 1 (2)** avtale/«særlege rettshøve» går foran; **§ 3** bruk (hver kan bruke tilsvarende sin part, uten urimelig fortrengsel); **§ 8** vedlikehold og berging (nødvendige tiltak kan settes i verk); skillet **vedlikehold vs. påkostning**; **§ 9** kostnadsfordeling etter part; **§§ 10–11** avhending av part og forkjøpsrett; **§ 15** oppløsning/deling. Sekundærkanon: Rt. 2013 s. 1508 (kostnadsfordeling); Ot.prp. nr. 28 (1990–91) s. 120 om at «påkostning» omfatter vedlikehold.
- **Typetilfeller:** Minipraktikum: en sameier utfører store tiltak og krever de andre for kostnadene (vedlikehold vs. påkostning; § 8/§ 9); en sameier vil selge sin part (§§ 10–11 forkjøpsrett); krav om oppløsning (§ 15).
- **Metodepoenger:** Skill vedlikehold (dekkes forholdsmessig) fra påkostning (krever tilslutning). Avhending løses av §§ 10 flg., ikke § 3. Avtale/«særlege rettshøve» går foran de deklaratoriske reglene.
- **Typiske feil:** § 3 (bruk) som løsning på avhendingsspørsmål (skal være § 10 flg. — V2014); å blande vedlikehold og påkostning; å overse avtale-forrangen.
- **Kvote:** quiz 14 · flashcards 14

---

#### Kapittel 3.7: Allemannsrett og strandrett
- **id:** `jus1211-3-7` · **number:** 3.7 · **estimatedMinutes:** 40 · **prerequisites:** `jus1211-3-1`
- **Kapitteltype:** regel
- **description:** Allmennhetens ferdselsrett (friluftslova: innmark/utmark, teltereglene, utilbørlighetsnormen) og grunneierens strandrett/tilflott.
- **Eksamensbelegg:** Friluftsloven testet 1–2/24 (V2023 telting/utilbørlighetsnorm); strandrett 1 (H2020). Prioritetsklasse: **kjenne** (plusspoeng-stoff). *(verifiser friluftslova §§ 1a/2/9)*
- **Regelkontrakt:** **Friluftslova** §§ 1a/2/9 — skillet **innmark/utmark**, ferdsels- og oppholdsretten i utmark, to-døgnsregelen for telting, og **«utilbørlighetsnormen»** (allmennhetens bruk må ikke være til utilbørlig fortrengsel for grunneieren — Rt. 2012 s. 882: lovlig allemannsbruk som målestokk). **Strandrett/tilflott** — ulovfestet; grunneierens særlige rådighet i egen strandsone; strandrettslinjen Rt. 1985 s. 1128 / Rt. 1987 s. 629 / Rt. 1996 s. 1457 / Rt. 2011 s. 556 / HR-2019-280-A (sekundærkanon).
- **Typetilfeller:** Minipraktikum: telting nær en bolig (innmark/utmark + to-døgnsregelen); en innretning i strandsonen (strandrett/tilflott).
- **Metodepoenger:** Innmark/utmark-grensen avgjør ferdselsretten. Utilbørlighetsnormen måles mot lovlig allemannsbruk. Strandrett er ulovfestet — argumentér fra hensyn og praksis.
- **Typiske feil:** Å behandle all mark likt; å overse to-døgnsregelen; å oppgi en fast meter-grense for strandrett.
- **Kvote:** quiz 10 · flashcards 8

---

#### Kapittel 3.8: Typetilfelle — Veirett i endring
- **id:** `jus1211-3-8` · **number:** 3.8 · **estimatedMinutes:** 45 · **prerequisites:** `jus1211-3-2`
- **Kapitteltype:** typetilfelle
- **description:** Servitutten som yndlingsmal: en rett stiftet for én bruk, som rettighetshaver eller ny eier vil bruke annerledes — tolk grunnlaget, så § 2s «tida og tilhøva».
- **Eksamensbelegg:** Veirett/servitutt i endring (V2016, V2017, H2017, H2021, V2023, H2025). Prioritetsklasse: **perfekt**.
- **Regelkontrakt (tvistepunkt-kartet):** (1) tolk stiftelsesgrunnlaget FØRST (hva ble retten stiftet for?); (2) gir grunnlaget svar på den nye bruken? (3) hvis ikke: servituttlova § 2 — «urimeleg eller uturvande», formål, «tida og tilhøva» (dynamisk); (4) ev. retting/skadebot (§ 17). Krysslenk til Stryken-domsanalysen (kap. 4.6).
- **Typetilfeller:** Gjennomdrøftet variant (NYSKREVET — f.eks. en veirett stiftet for gårdsdrift på 1950-tallet som en ny eier vil bruke til turistvirksomhet med tung trafikk). Varianter: (i) grunnlaget nevner uttrykkelig bruken (tolkningen løser det); (ii) bruken er ny men beskjeden («tida og tilhøva» tåler den); (iii) bruken er intensiv og skadelig (tålegrensen overskrides).
- **Metodepoenger:** Grunnlaget FØRST — § 2 bare der grunnlaget tier. Ikke konstruer tolkningstvil (H2025). «Tida og tilhøva» tillater utvikling, men innenfor formålet.
- **Typiske feil:** Rett på § 2 uten grunnlagstolkning; konstruert tolkningstvil; § 2 som ren rimelighet.
- **Kvote:** quiz 12 · flashcards 8

---

#### Kapittel 3.9: Typetilfelle — Den utinglyste retten i kjede
- **id:** `jus1211-3-9` · **number:** 3.9 · **estimatedMinutes:** 50 · **prerequisites:** `jus1211-3-3`, `jus1211-3-4`
- **Kapitteltype:** typetilfelle
- **description:** Kjeden som skiller A fra C: en muntlig avtalt rett → eiendommen selges → godtroerverv → kan retten re-etableres ved hevd? Med de to H2025-fellene.
- **Eksamensbelegg:** Servitutt + ekstinksjon + hevd i kjede (H2015, V2023, H2025). H2025 la inn fellene om ny hevdstid etter ekstinksjon og 50-årskravet for usynlig bruksrett. Prioritetsklasse: **perfekt**.
- **Regelkontrakt (tvistepunkt-kartet):** (1) foreligger en gyldig (utinglyst) rett? (stiftelsesgrunnlag, kap. 3.2); (2) ekstinksjon ved salg — tingl. §§ 20/21, ERVERVERENS gode tro (kap. 3.4); (3) hvis retten ekstingveres: kan den hevdes PÅ NYTT? — hevdstiden **starter på nytt** etter ekstinksjonen, og usynlig bruksrett krever **50 års langhevd** (§ 8 jf. § 7); (4) hevdet rett har rettsvern uten tinglysing (§ 21 (2)).
- **Typetilfeller:** Gjennomdrøftet variant (NYSKREVET — en muntlig avtalt fiske-/veirett; eiendommen selges til en kjøper uten kjennskap som tinglyser; rettighetshaveren fortsetter bruken og vil påberope hevd). Varianter: (i) retten fremgikk av salgsdokumentene (ingen ekstinksjon); (ii) bruken har synlig innretning (20 år) vs. ikke (50 år); (iii) tiden etter ekstinksjonen er kort (ny hevd ikke fullført).
- **Metodepoenger:** Hevdstiden starter på nytt etter ekstinksjon — navngitt A-skille. 50-årskravet for usynlig bruksrett. Godtro gjelder erververen.
- **Typiske feil:** 20 år for usynlig bruksrett; å regne hevdstid fra opprinnelig stiftelse etter ekstinksjon; rettighetshaverens kunnskap som ekstinksjonstema.
- **Kvote:** quiz 12 · flashcards 10

---

#### Kapittel 3.10: Typetilfelle — Naboulempen
- **id:** `jus1211-3-10` · **number:** 3.10 · **estimatedMinutes:** 45 · **prerequisites:** `jus1211-3-5`
- **Kapitteltype:** typetilfelle
- **description:** Den støyende/luktende virksomheten: § 2-avveiningen fullt gjennomført, deretter §§ 9/10 om erstatning og retting — med byggetillatelses-fellen.
- **Eksamensbelegg:** Naboulempen (V2013, V2016, H2018, H2020, V2024). Prioritetsklasse: **perfekt**.
- **Regelkontrakt (tvistepunkt-kartet):** (1) tålegrensen § 2 — «urimeleg eller uturvande», teknisk/økonomisk-leddet, ventelighet (3. ledd), «monaleg forverring … avgrensa krins» (4. ledd); (2) erstatning § 9 (objektivt + adekvans); (3) retting § 10 (uttømmende unntak; offentlig tillatelse hjelper ikke); (4) forholdet til offentligrettslig tillatelse (pbl. § 21-6).
- **Typetilfeller:** Gjennomdrøftet variant (NYSKREVET — f.eks. en ny virksomhet/innretning som gir støy eller lukt som rammer én naboeiendom særlig; virksomheten har offentlig tillatelse). Varianter: (i) ulempen var ventelig etter stedets karakter; (ii) rammer en avgrenset krins særlig hardt (4. ledd); (iii) virksomheten påberoper byggetillatelsen.
- **Metodepoenger:** Kjør § 2-avveiningen med begge sikkerhetsventilene. Offentlig tillatelse er ikke privatrettslig vern. § 9-ansvaret er objektivt.
- **Typiske feil:** Byggetillatelse som forsvar; å hoppe over ventelighet/fjerde ledd; skyldkrav under § 9.
- **Kvote:** quiz 12 · flashcards 8

**Prøve-kvote Del 3:** 4 prøver (ett servitutt-/veirettspraktikum med endret bruk; ett ekstinksjon-/hevd-kjede-praktikum (H2025-fellene); én naborett-prøve (§ 2 + §§ 9/10); én servitutt-domsanalyse (HR-2020-2186-A Stryken-mønster)).

---

### DEL 4 — Domsanalyse og praktikumstrening

> DNA-obligatorisk sluttdel, utvidet for JUS1211s to sjangre. Her destilleres metoden fra
> Del 0 og materien fra Del 1–3 til komplette besvarelser i BEGGE eksamensformater:
> praktikum (Del I) OG domsanalyse/teori (Del II). Bygges av én agent som leser HELE
> skjelettet.

---

#### Kapittel 4.1: Domsanalyse-verkstedet
- **id:** `jus1211-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `jus1211-0-3`
- **Kapitteltype:** metode-drill (Del II)
- **description:** Ren analysetrening: tre domsutdrag fra emnets egne fag, hvert med kontrollspørsmål → rettskildespørsmål → diskusjon, og modellanalyse som viser beskrivelse→diskusjon-løftet.
- **Eksamensbelegg:** Domsanalyse i sju av åtte Del II-gjennomføringer V2022–V2025. Prioritetsklasse: **perfekt** (metodeferdighet). Bygger på analysegrepene fra kap. 0.3.
- **Regelkontrakt:** Ingen nye materielle regler. Tre nyskrevne domsutdrag-oppgaver i eksamensformat (bruker de faste domsanalyse-objektene som MØNSTER, ikke ordrett): (a) livs-/dødsdisposisjon (HR-2017-716-A-mønster: realitet fra bindingstidspunktet); (b) uskiftegave (HR-2022-2157-A-mønster: «misforhold» + rettskildesituasjon når HR-praksis mangler); (c) servituttomfang eller luftrom (HR-2020-2186-A / HR-2022-993-A-mønster: § 2/interesselæren, NOU-som-teori). Hvert utdrag: kontrollspørsmål (rettsregelen) → «redegjør for rettskildebruken» → «vurder/diskuter». Modellanalyse per utdrag med margkommentarer: skille slutning/vekt, kildens art, antitese, lovfesting av ulovfestet rett.
- **Metodepoenger:** Diskusjon slår beskrivelse. Analyser KUN de angitte avsnittene. Bruk de faste analysegrepene som sjekkliste. Skille eget faktum fra domsfaktum.
- **Typiske feil:** Ren gjengivelse uten diskusjon (nedre skala — H2024); å trekke inn avsnitt utenfor de angitte; løsrevne domsreferat.
- **Kvote:** quiz 14 · flashcards 12

---

#### Kapittel 4.2: Teorioppgaven og «se tvistepunktene»
- **id:** `jus1211-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `jus1211-0-2`, `jus1211-0-3`
- **Kapitteltype:** metode-drill (Del I + Del II)
- **description:** To ferdigheter i ett: den komparative teorioppgaven (Del II) og identifikasjonstreningen som gjør et sammensatt faktum om til en tvistepunktliste (Del I).
- **Eksamensbelegg:** Teorioppgaven (komparativ) er levende Del II-sjanger (V2012, V2013, H2015, V2019, V2020, H2025). Identifikasjon er kjernen i praktikum. Prioritetsklasse: **perfekt** (metode).
- **Regelkontrakt:** **Teoridelen:** komparativ metode — «likheter og forskjeller mellom …» (ektefeller vs. samboere; hevdsformene; ekteskap vs. samboerskap; formkrav 1972 vs. 2019). Sammenlikningen ER oppgaven; to deskriptive bolker uten kobling gir «betydelige trekk»; komparativ tabelltenkning (vilkår/rettsvirkning side om side) premieres; respekter avgrensninger. Modellbesvarelse (nyskrevet komparativ oppgave med tabell + drøftende tekst). **Identifikasjonsdelen:** 6–8 korte nyskrevne faktum (0,5–1 side) fra alle tre fag → kravsanalyse + tvistepunktliste + disposisjonsskisse (IKKE fulle drøftelser), fasit merket **må-punkter / pluss-punkter / feller**; øv på å respektere «skal ikke behandles»-instrukser.
- **Metodepoenger:** Komparasjon = strukturert sammenstilling, ikke to monologer. I identifikasjon: hver anførsel/hvert delspørsmål → rettskrav + rettsgrunnlag + subsumsjonsmomenter. Skjult delspørsmål-radar (samboergave → livs/dødsdisp.; salg av eiendom med rett → ekstinksjon; ett vitne nær begunstiget → § 44).
- **Typiske feil:** To deskriptive bolker uten sammenlikning (H2025 «betydelige trekk»); å disponere praktikum etter kronologi; å drøfte det bortavgrensede.
- **Kvote:** quiz 12 · flashcards 10

---

#### Kapittel 4.3: Praktikum 1 — Tre-kravs-skiftet (familierett)
- **id:** `jus1211-4-3` · **number:** 4.3 · **estimatedMinutes:** 80 · **prerequisites:** Del 1 komplett, `jus1211-4-2`
- **Kapitteltype:** praktikum-modellbesvarelse
- **description:** Komplett familierettspraktikum: skjevdeling + vederlag + forlodds/gjeld i ett skifte, med sammensatt-skifte-innslag. A-besvarelse og kommentert C-besvarelse.
- **Eksamensbelegg (kombinasjonen speiler):** Tre-kravs-malen (H2023, V2025) + sammensatt skifte (V2017, V2021). Vekting: praktikum tyngst (4+2 eller 3+3).
- **Innhold:** NYSKREVET faktum, ~1,5–2 sider, navngitte parter, kronologi + nummererte krav ELLER avsluttende anførsler (velg format bevisst, med en avgrensningsinstruks). Skisse: et ektepar skilles etter mange år; den ene brakte inn en delvis lånefinansiert eiendom som har steget kraftig, overførte en sum til eget særkullsbarn før bruddet, krever forlodds uttak av verdigjenstander/sluttpakke, og flere gjeldsposter skal klassifiseres; ett av spørsmålene er avgrenset bort.
- **Tvistepunktliste (fasitstruktur):** (1) formuesordning/eierforhold; (2) skjevdeling § 59 (sporing + verdistigning + forholdsmessig andel); (3) vederlag § 63 (2) (gave til særkullsbarn); (4) forlodds § 61 + gjeldsavleggelse § 58 (3); (5) **skjult delspørsmål:** gjeldsopptak konverterer skjevdelings- til delingsmidler; (6) ev. sammensatt-skifte-rekkefølge hvis dødsfall inntreffer. **Må-punkter:** 1, 2, 3; **pluss:** 5, presis gjeldsklassifisering; **felle:** å hoppe over § 59 (1), blande kravene, drøfte det bortavgrensede.
- **Format (DNA-krav):** `collapsible` A-besvarelse (full modell); `collapsible` kommentert C-besvarelse (finner hovedkravene, men flat subsumsjon, blander § 59/§ 61, glemmer konverteringspoenget — margnotater om hva som mangler til A); `tip` Sensorblikket (må/pluss/felle med vekting).
- **Kvote:** quiz 10 · flashcards 6

---

#### Kapittel 4.4: Praktikum 2 — Testament og uskifte (arverett)
- **id:** `jus1211-4-4` · **number:** 4.4 · **estimatedMinutes:** 80 · **prerequisites:** Del 2 komplett, `jus1211-4-2`
- **Kapitteltype:** praktikum-modellbesvarelse
- **description:** Komplett arverettspraktikum: gjensidig testament med habilitetsproblem og forutdød arving, kombinert med en uskiftegave — A-besvarelse og kommentert C-besvarelse.
- **Eksamensbelegg (kombinasjonen speiler):** Testamentskjeden (H2024) + uskiftedisposisjonen (V2021, V2023). Én sammenhengende tvist ELLER nummererte spørsmål med avgrensning.
- **Innhold:** NYSKREVET faktum, ~1,5–2 sider. Skisse: en gjenlevende ektefelle i uskifte har gitt en betydelig gave til én arving; det finnes et gjensidig testament der ett vitne er nær en begunstiget, og en av de begunstigede døde før testator; arvingene krever omstøtelse og bestrider testamentet.
- **Tvistepunktliste:** (1) gyldig uskifte (samtykke §§ 14–15); (2) gaveomstøtelse § 23 («misforhold» — prosent + konkret); (3) subsidiært skifteplikt § 28; (4) testamentets formgyldighet § 42; (5) **skjult delspørsmål:** habilitet § 44 rammer bare den enkelte disposisjonen (ikke hele testamentet); (6) forutdød arving § 66 → §§ 57/58; (7) pliktdel §§ 50/51 som ramme. **Må-punkter:** 1, 2, 4; **pluss:** 5 (virkningsforskjellen), 6; **felle:** hele testamentet ugyldig ved habilitetsfeil, «misforhold» som ren prosent, dekningsloven.
- **Format:** A-besvarelse + kommentert C-besvarelse (C-en kjenner § 42/§ 23 men gjør hele testamentet ugyldig ved habilitetsfeil og behandler «misforhold» som ren prosentgrense) + Sensorblikket.
- **Kvote:** quiz 10 · flashcards 6

---

#### Kapittel 4.5: Praktikum 3 — Servitutt, hevd og ekstinksjon (fast eiendom)
- **id:** `jus1211-4-5` · **number:** 4.5 · **estimatedMinutes:** 80 · **prerequisites:** Del 3 komplett, `jus1211-4-2`
- **Kapitteltype:** praktikum-modellbesvarelse
- **description:** Komplett tingsrettspraktikum: en servitutt med endret bruk, en utinglyst rett som ekstingveres ved salg, og spørsmålet om ny hevd — A-besvarelse og kommentert C-besvarelse.
- **Eksamensbelegg (kombinasjonen speiler):** Servitutt + ekstinksjon + hevd i kjede (H2015, V2023, H2025) + naborettsinnslag. Praktikum tyngst.
- **Innhold:** NYSKREVET faktum, ~1,5–2 sider. Skisse: en veirett stiftet for én bruk som ny eier vil bruke annerledes; en muntlig avtalt fiske-/beiterett som ikke ble tinglyst da eiendommen ble solgt; kjøperen bestrider begge, og rettighetshaveren påberoper hevd; en naboulempe som tilleggstvist.
- **Tvistepunktliste:** (1) servituttens omfang — stiftelsesgrunnlag FØRST, så § 2 «tida og tilhøva»; (2) den utinglyste rettens ekstinksjon — tingl. §§ 20/21, ERVERVERENS gode tro; (3) **skjult delspørsmål:** ny hevdstid starter etter ekstinksjon + 50-årskrav for usynlig bruksrett; (4) hevdet retts rettsvern § 21 (2); (5) ev. naboulempe § 2/§§ 9/10. **Må-punkter:** 1 (grunnlag først), 2; **pluss:** 3, 4; **felle:** konstruere tolkningstvil, 20 år for usynlig rett, rettighetshaverens kunnskap som ekstinksjonstema, byggetillatelse som naborettsforsvar.
- **Format:** A-besvarelse + kommentert C-besvarelse (C-en går rett på § 2 uten grunnlagstolkning, bruker 20-årshevd på usynlig rett, drøfter rettighetshaverens gode tro) + Sensorblikket.
- **Kvote:** quiz 10 · flashcards 6

---

#### Kapittel 4.6: Del II-modell — Domsanalyse på eksamensnivå
- **id:** `jus1211-4-6` · **number:** 4.6 · **estimatedMinutes:** 70 · **prerequisites:** `jus1211-4-1`, Del 1–3
- **Kapitteltype:** domsanalyse-modellbesvarelse (Del II)
- **description:** Én komplett domsanalyseoppgave på eksamensnivå: nyskrevet domsutdrag fra et av emnets fag, tre-spørsmåls-batteriet, og modellanalyse på A-nivå med kommentert svakere variant.
- **Eksamensbelegg:** Speiler Del II-domsanalysen 2022–2025 (skjevdeling/uskiftegave/servitutt/luftrom). Vekting Del II ~1,5–3 t.
- **Innhold:** NYSKREVET domsutdrag (angitte «avsnitt») som ETTERLIGNER et av de faste objektene i sjanger — f.eks. et utdrag om skjevdelingens verdistigningsspørsmål (Rt. 2008 s. 769-mønster) eller «misforhold» ved uskiftegave (HR-2022-2157-A-mønster). Tre spørsmål: (1) hvilken rettsregel/tolkningsproblem (kontroll); (2) redegjør for rettskildebruken (kilder, slutninger, vekt); (3) vurder domspremissene mot alminnelige rettskildeprinsipper.
- **Format:** `collapsible` A-analyse (diskuterende, bruker analysegrepene: slutning/vekt, kildens art, rettskildesituasjonens virkning, antitese, ev. lovfesting av ulovfestet rett); `collapsible` kommentert svakere analyse (beskrivende gjengivelse uten diskusjon — margnotater viser hvorfor den havner i nedre del av skalaen); `tip` Sensorblikket (hva løfter fra beskrivelse til diskusjon).
- **Kvote:** quiz 10 · flashcards 6

---

#### Kapittel 4.7: Del II-modell — Teorioppgave og eksamenssimulering
- **id:** `jus1211-4-7` · **number:** 4.7 · **estimatedMinutes:** 80 · **prerequisites:** hele boka (Del 0–4)
- **Kapitteltype:** modellbesvarelse + simulering
- **description:** Generalprøven: en komplett komparativ teorioppgave (Del II) OG en full todelt eksamenssimulering (praktikum Del I + Del II) med prioriteringsfasit på 6-timers ramme.
- **Eksamensbelegg:** Speiler gjeldende normalform: 6 t todelt (praktikum 3–4,5 t + Del II 1,5–3 t), A–F, romslige oppgaver («kandidater med mye kunnskap får det travelt»). Teorioppgaven speiler H2025 (ektefellers vs. samboeres arverett).
- **Innhold:** (a) NYSKREVET komparativ teorioppgave med A-besvarelse (tabell + drøftende sammenlikning) og kommentert svakere variant (to bolker uten kobling → «betydelige trekk»). (b) NYSKREVET todelt eksamenssimulering: Del I praktikum (kombinerer to fag etter rotasjonslogikken — f.eks. familie-P) + Del II (domsanalyse eller teori fra «det andre» faget), med **prioriteringsfasit** per punkt merket **må** (bærer karakteren) / **pluss** (skjulte skillepunkter) / **felle**, og et tidsbudsjett (sum 6 t inkl. disposisjon).
- **Format:** A-besvarelse for begge deler + kommentert C-/svakere besvarelse + Sensorblikket med den eksplisitte påminnelsen: konklusjonene er underordnet; ingen forventes å se alt; dybde slår lengde; svakhet i ett spørsmål kan oppveies av god forståelse totalt.
- **Kvote:** quiz 10 · flashcards 6

**Prøve-kvote Del 4:** 4 prøver (én ren domsanalyseprøve med nytt utdrag; én komparativ teoriprøve; én identifikasjonsprøve (nye faktum fra alle tre fag); én tidfestet minisimulering (todelt) med felle-fokus).

---

### Kvotesammendrag (kontrollregning) — AUTORITATIV

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| Del 0 | 3 | 36 | 36 | 4 |
| Del 1 | 9 | 144 | 140 | 4 |
| Del 2 | 9 | 132 | 132 | 4 |
| Del 3 | 10 | 144 | 142 | 4 |
| Del 4 | 7 | 76 | 52 | 4 |
| **Sum** | **38** | **532** | **502** | **20** |

Delsummer-kontroll:
- Quiz: 36 + 144 + 132 + 144 + 76 = **532** (≥500 ✓)
- Flashcards: 36 + 140 + 132 + 142 + 52 = **502** (≥500 ✓)
- Prøver: 4 per del × 5 deler = **20** (≥4 per del ✓)
- Kapitler: 3 + 9 + 9 + 10 + 7 = **38** (25–40 ✓)
- Praktikum med modellbesvarelser: kap. 4.3, 4.4, 4.5 (+ 4.6 domsanalyse, 4.7 teori/simulering) = **≥3 ✓**

---

## 4. Seksjonstitler (sectionNames)

Del-nummer → beskrivende tittel (blir `sectionNames` i `TextbookCourse`; vises som
«Kapittel N: <tittel>» på bokforsiden — obligatorisk):

| Del | sectionName |
|---|---|
| 0 | Eksamenskart og juridisk metode |
| 1 | Familierett: det økonomiske oppgjøret |
| 2 | Arverett |
| 3 | Fast eiendoms rettsforhold |
| 4 | Domsanalyse og praktikumstrening |

---

## 5. Praktikums- og domsanalysetrening — samlekrav

- **Tre komplette praktikum** (kap. 4.3–4.5), ett per materielt fag, hver med: nyskrevet
  faktum (nummerert delspørsmåls- ELLER anførselsformat, med minst én avgrensningsinstruks);
  `collapsible` A-besvarelse; `collapsible` kommentert C-besvarelse med margnotater; `tip`
  Sensorblikket med må/pluss/felle-vekting.
- **To Del II-modellbesvarelser** (kap. 4.6 domsanalyse, 4.7 teori + todelt simulering) — fordi
  emnet har to eksamenssjangre. Domsanalysen har A-analyse + kommentert beskrivende variant;
  teori-/simuleringskapitlet har A + svakere variant for begge deler.
- **Domsutdrag i domsanalyse-format** i hvert materielt hovedemne (kap. 2.2, 2.6, 3.1, 3.2 og
  domsverkstedet 4.1) — jf. analysens råd om at hvert hovedemne bør ha minst én dom presentert
  som analyseobjekt, ikke bare som materiell kilde.
- Kombinasjonene speiler de reelle mønstrene (tre-kravs-skiftet + sammensatt skifte;
  testamentskjede + uskiftegave; servitutt/ekstinksjon/hevd-kjeden + naborett; rotasjonsmiks i
  simuleringen) — men ALLE faktum, parter, tall, eiendommer og hendelser er nye.
- Hvert praktikum baker inn 2–3 navngitte **skjulte delspørsmål** (gjeldskonvertering ved pant i
  skjevdelingseiendel; § 44s virkningsbegrensning; § 51 kontantoppgjør; ny hevdstid etter
  ekstinksjon + 50-årskrav; § 21 (2)-rettsvern) og minst to **hjemmelsfeller** fra empirien
  (husstandsfellesskapsloven; ekteskapslov-analogi på samboere; hele testamentet ugyldig ved
  habilitetsfeil; svoger som inhabilt vitne; 20-årshevd på usynlig rett; rettighetshaverens
  kunnskap som ekstinksjonstema; byggetillatelse som naborettsforsvar; dekningsloven i stedet
  for el. § 51 / al. § 23).
- **20 prøver** fordelt 4 per del, alle i minipraktikum-/domsanalyse-/vilkårsdrill-format med
  fasit strukturert «må-punkter / pluss-punkter / feller».

---

## 6. Avvik fra DNA-jus (dokumentert)

DNA-jus er skrevet med JUS1111s rene praktikum-eksamen som forbilde. JUS1211 avviker på fire
punkter, alle empirisk begrunnet:

1. **To eksamenssjangre, ikke én.** JUS1211 har todelt eksamen: praktikum (Del I) OG
   teori/domsanalyse (Del II) i hele perioden. DNA-ens «praktikumstrening»-sluttdel er derfor
   utvidet til «Domsanalyse og praktikumstrening» (Del 4) med egne Del II-modellbesvarelser, og
   Del 0 har et eget domsanalyse-metodekapittel (0.3). *Begrunnelse:* domsanalyse var Del II i
   sju av åtte gjennomføringer V2022–V2025 (12/24 totalt) — en selvstendig, testet ferdighet.
2. **Domsanalyse vevd inn i de materielle delene**, ikke bare samlet i sluttdelen. Flere
   regelkapitler har et `example`-domsutdrag i analyseformat. *Begrunnelse:* analysens §3.3 —
   «hvert hovedemne bør ha minst én dom presentert i domsanalyse-format»; domsanalyse-objektene
   speiler alltid emnets egne fag.
3. **Tre likeverdige materielle deler** (hver ~15/24), i motsetning til JUS1111 der ett område
   (erstatning 20/30) dominerte. Derfor omtrent lik kapittelvekt på familie-, arve- og tingsrett.
   *Begrunnelse:* gjenganger-scoren er jevn, og rotasjonsmønsteret dekker alle tre fag i løpet av
   et studieår.
4. **Delspørsmål og avgrensningsinstrukser trenes eksplisitt.** JUS1211-praktikum har ofte
   nummererte spørsmål og bindende «skal ikke behandles»-instrukser (i motsetning til JUS1111s
   rene «drøft og avgjør»). Oppgavene i boka trener begge formater og lærer studenten å respektere
   avgrensninger. *Begrunnelse:* analysens §1 pkt. 6 og §5 (å drøfte det bortavgrensede trekker).

Ingen andre avvik: kapittel-DNA (regelkapittel/typetilfellekapittel/praktikum-modell),
blokktyper, «Eksamensvinkel»/«Typiske feil»/«Paragraf- og domsregister» og kvotekravene følger
DNA-jus uendret.

---

## 7. Rettstilstands-sjekk (utført mot Lovdata, juli 2026)

Verifisert FØR regelkontraktene ble skrevet, jf. produksjonsløypen fase 2 og v3-lærdommen om
foreldet doktrine.

**Bekreftet gjeldende rett:**
- **Arveloven 2019** er i kraft (1. januar 2021, jf. § 180) og opphevet arveloven 1972 +
  skifteloven 1930. Hele Del 2 er skrevet mot 2019-loven. Bekreftede kjerneendringer fra 1972:
  (a) **pliktdel** nå 2/3 med tak **15G** per barn (§ 50), ikke 1972-lovens kronebeløp;
  (b) **avkorting** (§ 75) krever nå at avkorting ble satt som betingelse SENEST ved gaven —
  1972-§ 38s formodningsregel er borte; (c) **vitnehabilitet** (§ 44) er innsnevret — svoger/
  svigerinne (ektefelle til søsken) er IKKE omfattet; (d) **samtidighetskravet** for testaments-
  vitner (1972-§ 49) er opphevet i § 42; (e) minstearv **4G** (§ 8) / **6G** (§ 9);
  (f) gaveomstøtelse fra uskiftebo «misforhold til formuen» (§ 23, tidl. 1972-§ 19). 1972-
  paragrafer beholdes bare som eksplisitte paralleller til domsanalyse-dommene.
- **Tinglysingslova §§ 20–21** — godtroerverv-/ekstinksjonsregelen er substansielt UENDRET;
  2014/2017-endringene gjaldt registreringssystemets modernisering, ikke ekstinksjonsvilkåret.
  § 21 annet ledd: hevdet/lovbestemt rett består uten tinglysing. Bekreftet.
- **Hevdslova §§ 2/4/5/7/8/9/10** — 20-årsregelen (§ 2 eiendomshevd; brukshevd § 7) mot
  **50-årsregelen for bruksrett uten fast/synlig innretning (§ 8)** er bekreftet gjeldende.
- **Ekteskapsloven** — ingen strukturelle omveltninger i skjevdelings-/vederlags-/forlodds-
  reglene; §§ 59, 61, 63, 73, 54, 51 gjelder.

**Merket `(verifiser)` — sluttkontrolleres i fase 6 (obligatorisk Lovdata-verifikatør):**
- **el. § 59 (2) og (3)** — eksakt leddstruktur og ordlyd for «åpenbart urimelig»-ventilen og
  «sterke grunner»-leddet (WebFetch-oppslaget ga upålitelig gjengivelse av § 59 (2)/(3);
  regelkontrakten bygger på EKSAMENSANALYSENs rendering, som må sjekkes mot lovteksten).
- **el. § 61 a–d** — eksakt bokstavinndeling (a personlig bruk, c personlig karakter, d
  erstatning/sluttpakke) og § 58 (3)s leddstruktur for gjeldsavleggelse.
- **el. § 63 (2) vs. § 73** — bekreft at § 63 (2) er hjemmelen for vederlag ved utilbørlig
  svekkelse av delingsgrunnlaget og § 73 for medvirkning til den andres særeie.
- **el. § 51** som kreditorhjemmel («utvilsomt solvent») og **§ 54** ektepaktformkravene.
- **al. 2019 §§ 44** (eksakt personkrets), **50/51** (15G-taket og kontantoppgjørsadgangen),
  **57/58/61/66** (tolkning/gjensidig/overlevelse), **14/15/23/28/75** (uskifte/avkorting),
  **8–13** (legalarv/samboerdefinisjon/minstearv), **104/113–114** (naturalutlegg).
- **servituttlova § 2** (ordlyd «urimeleg eller uturvande», «tida og tilhøva», naturmangfald),
  **§§ 9/10/17**; **grannelova § 2 (1)–(4), §§ 9/10** (leddstruktur); **sameigelova §§ 8/9/10/15**;
  **friluftslova §§ 1a/2/9**. (Disse stabile 1960-talls-lovene ble ikke hentet enkeltvis under
  fase 2; verifiseres mot Lovdata i fase 6.)
- **Domsreferanser** — hele kjernekanonen (Rt.-/HR-numre) stikkprøves; særlig at domsanalyse-
  objektene (HR-2017-716-A, HR-2020-2186-A Stryken, HR-2022-2157-A, HR-2022-993-A, Rt. 2003
  s. 198, Rt. 2008 s. 769, Rt. 2015 s. 710/1157) og HR-2024-814-A (§ 61 c) er korrekt
  attribuert. **Stikkprøv også UMARKEDE referanser** (jf. JUS1111-lærdommen om feilattribuert
  HR-dom).

---

## 8. Studieguide-disposisjon

Studieguiden bygges som ett sammenhengende dokument med disse seksjonene:

1. **Slik består du JUS1211 (og løfter til A)** — eksamensformen (6 t todelt Inspera, Lovdata
   Pro eksamensmodus, A–F), de to sjangrene, rotasjonslogikken og prioriteringskartet
   (frekvenstabellene fra kap. 0.1). Eksplisitt C→A-liste: de navngitte skjulte skillepunktene +
   diskusjonsnivå i domsanalysen.
2. **Praktikumsmetoden på én side** — kravsanalyse, firetrinnskravet (ordlyd først), krav/
   grunnlag/vilkår, hold parallelle hjemler fra hverandre, respekter avgrensninger; de åtte
   metodefeilene som negativ sjekkliste.
3. **Domsanalyse på én side** — kilde/slutning/vekt-skjemaet, beskrivelse vs. diskusjon, de faste
   analysegrepene (kildens art, rettskildesituasjonens virkning på vekt, antitese, lovfesting av
   ulovfestet rett, maktfordeling, teori som rettskilde).
4. **Rettsområdesammendrag** (tre seksjoner: familierett, arverett, fast eiendom) — hver med
   vilkårsstiger i punktform, tvistepunkt-kart per typetilfelle, paragrafregister og domskanon-
   tabell (dom → kallenavn → hva den brukes til). Arverett merket «arveloven 2019».
5. **Fellekatalogen** — samtlige hjemmelsfeller fra empirien i tabellform (felle → riktig spor),
   til drilling siste uke.
6. **Skjult delspørsmål-radaren** — signalliste: faktumtrekk → delspørsmålet det varsler
   (gjeldsopptak med pant i skjevdelingseiendel → konvertering; ett vitne nær begunstiget → § 44;
   gave rett før død → livs-/dødsdisp.; salg av eiendom med utinglyst rett → ekstinksjon + ny
   hevd; lengstlevende gir stor gave → § 23 «misforhold»; endret bruk av servitutt → § 2 «tida og
   tilhøva»).
7. **De tre skiftene** — familieskifte, dødsboskifte og sammensatt skifte satt opp side om side
   med riktig rekkefølge (felleseieskifte før dødsboskifte).
8. **Leseplaner** — 14-dagers og 4-ukers plan mot eksamen med kapittelrekkefølge, prøvetidspunkter
   og simuleringsdag (kap. 4.7 på nest siste dag).
9. **Siste-døgnet-arket** — én side: vilkårslistene for «må beherskes perfekt»-punktene (skjevdeling,
   servitutt § 2, hevd 20/50, livs-/dødsdisp., testament formkrav/habilitet, uskiftegave, naborett § 2).

---

## 9. Byggerekkefølge og verifikasjon

### Byggerekkefølge for Opus

1. **Metadata først**: `TextbookCourse`-oppføring for `jus1211` (mønster: `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`) med alle 38 kapitler (id/number/title/description/
   estimatedMinutes/topics/prerequisites fra dette skjelettet) og `sectionNames` (§4).
2. **Del 0** (kap. 0.1–0.3) — metodespråket («må/pluss/felle», firetrinnskravet, kilde/slutning/
   vekt) etableres her og gjenbrukes ordrett i alle senere kapitler.
3. **Del 1 → Del 2 → Del 3** — regelkapitler før typetilfellekapitler innen hver del; kap. 1.1
   (formuesordning) før 1.2; kap. 2.1 (legalarv) før resten av arv; kap. 3.1 (eiendomsrett) →
   3.2 (servitutt) → 3.3 (hevd) → 3.4 (tinglysing) i denne rekkefølgen (avhengighet).
4. **Del 4** (kap. 4.1–4.7) — domsverksted og identifikasjonsdrill først, deretter de tre
   praktikumene, så Del II-modellene; kap. 4.7 forutsetter hele boka.
5. **Batching (fase 4):** én agent per hel del; gi agenten HELE delens kontrakter. Del 4 bygges
   av én agent som leser hele skjelettet.
6. **Narrativ-versjoner** (`<id>-narrativ.json` per kapittel) og quiz/flashcards per kvotene —
   quiz skrives samtidig med hvert kapittel, ikke som etterarbeid.
7. **Prøvene** (4 per del) etter at delens kapitler er ferdige.
8. **Studieguiden** til slutt (destillerer ferdige kapitler).

### Verifikasjonssjekkliste (kjøres FØR ferdigmelding)

- [ ] **JSON-validering**: samtlige nye `chapters/*.json` parses med `json.load` (én uescapet
      anførselstegn kan blokkere hele prebuild).
- [ ] **Obligatorisk Lovdata-verifikatør (fase 6)**: ALLE paragrafhenvisninger sjekkes mot
      GJELDENDE lov, med særskilt kontroll av postene merket `(verifiser)` i §7 — og grep
      `-i verifiser` (ikke bare `(verifiser)`) for sammensatte varianter. **Arverett sjekkes mot
      arveloven 2019** (ikke eldre sensorveiledningers 1972-paragrafer). el. § 59 (2)/(3) og
      § 61 a–d: bekreft eksakt ledd-/bokstavstruktur mot lovteksten før publisering.
- [ ] **Domsreferanser mot Lovdata**: hele kjernekanonen sjekkes for riktig Rt./HR-nummer; SÆRLIG
      domsanalyse-objektene og fersk praksis (HR-2024-814-A). Stikkprøv også UMARKEDE
      doms-/paragrafreferanser.
- [ ] **Rettstilstand, ikke bare referanser**: kontroller at ingen kapittel gjengir foreldet
      1972-arverett, utdatert pliktdel-kronebeløp eller 1972-avkortingsformodning som gjeldende rett.
- [ ] **Quiz-/flashcard-sum**: ≥500/≥500 totalt og samsvar med kvotetabellen (§3, ±10 % per
      kapittel OK; totalen 532/502 skal holde).
- [ ] **Prøver**: 4 per del, 20 totalt, alle med må/pluss/felle-fasit.
- [ ] **Opphavsrett**: ALLE faktum, parter, tall, eiendommer og hendelser er nyskrevne — ingen
      gjenkjennbare eksamensfakta; aktivt varierte bransjer/relasjoner/gjenstander i forhold til
      mal-skissene i dette skjelettet.
- [ ] **Pensumavgrensning**: null forekomster av avtalerett/kjøpsrett/erstatningsrett (JUS1111) og
      EMK/menneskerettigheter som fagstoff; kryssbok-lenker til jus1111 peker på EKSISTERENDE
      kapitler ([jus1111-0-1](/bok/jus1111/jus1111-0-1), -0-2, -0-3, -1-5).
- [ ] **DNA-blokkene på plass**: hvert kapittel har «Eksamensvinkel» (`tip`), «Typiske feil»
      (`warning`), «Paragraf- og begrepsliste» (`collapsible`, per delkapittel), og regel-/
      typetilfellekapitlene har «Paragraf- og domsregister» (`collapsible`); praktikumskapitlene
      har A + kommentert C + Sensorblikket; domsanalyse-/teorikapitlene har A + svakere variant.
- [ ] **`npm run build`** grønn før ferdigmelding (arbeidsregel i CLAUDE.md).

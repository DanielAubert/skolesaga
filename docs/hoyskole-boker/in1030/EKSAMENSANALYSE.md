# Eksamensanalyse: IN1030 Systemer, krav og konsekvenser (UiO)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på UiOs eksamensarkiv
> for IN1030 (tidligere emnekode **INF1055**): oppgavesett for **V2017, V2018,
> V2019, V2020, V2021** og oppgaveteksten i sensorveiledningen for **V2022** —
> seks sett. Løsningsstøtte finnes for fire av dem: student-gjennomganger av
> modelleringsdelen (V2017, V2018), et fullstendig løsningsforslag basert på en
> beståtts-besvarelse (V2020) og den **eneste offisielle sensorveiledningen**
> (V2022). Alle seks settene og alle fire løsningsdokumentene er lest grundig;
> arkivet er lite (9 filer), så hele arkivet er dekket.
>
> **Alt innhold er omskrevet med egne ord.** Ingen oppgavetekster, fasiter eller
> sensorkommentarer er gjengitt ordrett. Fagbegreper, UML-notasjon,
> rammeverksnavn (WCAG, GDPR, Scrum, DevOps) og lovreferanser er allmenn faglig
> kunnskap og ikke opphavsrettslig beskyttet. Analysen er kvantitativ der
> arkivet tillater det, men **evidensgrunnlaget er moderat** (6 sett, kun 1
> offisiell sensorveiledning) — der en påstand hviler tungt på ett sett, er den
> merket `(svakt belagt)`.
>
> **Emnet er aktivt** (verifisert mot UiOs emneside juli 2026): IN1030 er et
> bredt førsteårs-innføringsemne på 10 studiepoeng, med ordinær våreksamen.
> Vurdering: **4 timers skriftlig digital skoleeksamen, ingen hjelpemidler,
> karakter bestått/ikke bestått**, forutsetter fem godkjente obligatoriske
> oppgaver og IN1000 (eller tilsvarende) som forkunnskap.
>
> **Faget er konseptuelt og modelleringsorientert — ikke et kodefag.** Selv om
> IN1030 handler om systemutvikling, testes ingen programmering. «Det tekniske»
> er **UML-modellering med papir/digital håndtegning** (tegn aktivitets-,
> sekvens- og klassediagram fra et case) og **strukturert kravarbeid**. Resten
> er **forklarende kortsvar og drøfting** om brukskvalitet, personvern,
> universell utforming, smidige metoder og samfunnskonsekvenser. Balansen er
> anslagsvis **~40 % modellering/prosedyre og ~60 % konseptuell forklaring/
> drøfting**. Se del 1.

---

## 1. Eksamensform og utvikling

### Grunnform (gjeldende)

**Skriftlig digital skoleeksamen, 4 timer, ingen hjelpemidler, karakterskala
bestått/ikke bestått.** Fem obligatoriske oppgaver må være godkjent samme
semester for adgang til eksamen. Hele karakteren avgjøres på slutteksamen.
Eksamen speiler obligkjeden tett — sensorveiledningen V2022 peker eksplisitt til
oblig 1 (interessenter), oblig 2 (bruk/brukerundersøkelser), oblig 4 (krav/
foranalyse) og oblig 5 (modellering).

### To epoker — pass på hvilket sett du øver på

Arkivet spenner over et **tydelig formskifte rundt korona (2020–2021)**, men
**pensumet og oppgavetypene er svært stabile** gjennom hele perioden. Det er
*innpakningen* og *vektingen* som skifter, ikke hva som testes.

| År | Kode | Format | Struktur | Karakter |
|---|---|---|---|---|
| **2017** | INF1055 | Skoleeksamen, Inspera, 4 t | 6 deler: diskusjon (4 p) + flervalg (2 p) + «eget spørsmål» (5 p) + modellering (30 p) + kommunikasjon (10 p) + teamarbeid (10 p) | (bokstav/bestått)* |
| **2018** | IN1030 | Skoleeksamen, 4 t | Case-basert: rikt bilde + UU + etikk + use case + sekvens/klasse (24 p) + **15 flervalg** + kortsvar | * |
| **2019** | IN1030 | Skoleeksamen, 4 t | Del 1: **12 flervalg (36 p, 3 p/riktig, 0 for galt)**; Del 2: case-modellering (43 p) + 7 pensum-kortsvar (21 p) = 100 p | * |
| **2020** | IN1030 | **Hjemmeeksamen (korona), åpen 8 dager** | Essay/case: UU (25 %) + personvern (25 %) + DevOps (15 %) + stort case «Leie av klær» (35 %). Kildekrav + lengdekrav (1–2 sider) | bestått/ikke bestått |
| **2021** | IN1030 | **Hjemmeeksamen (korona)** | Case «E-valg.no»: rikt bilde (15 %) + UU (20 %) + personvern (10 %) + sikkerhet (10 %) + DevOps (15 %) + modellering (30 %) | bestått/ikke bestått |
| **2022** | IN1030 | Skoleeksamen (tilbake til normal) | Case «Klimalogg»: interessenter (15 %) + bruk (20 %) + UU/inkludering (15 %) + brukerhistorie/metode (20 %) + modellering (30 %) | bestått/ikke bestått |

*Karakterskalaen for de eldste settene fremgår ikke sikkert av arkivet;
gjeldende ordning er bestått/ikke bestått. `(verifiser mot emnebeskrivelsen for
det aktuelle året.)`

### Tre ting følger av formskiftet

- **2020–2021 er ikke representative for eksamensFORMEN.** De var
  korona-hjemmeeksamener med essay-svar, kildekrav og lengdekrav (V2020-
  løsningen er en «to dagers arbeid»-besvarelse — langt mer detaljert enn en
  4-timers skoleeksamen forventer). De er likevel **ypperlig innholdstrening**:
  temaene og casene er identiske med skoleeksamenene.
- **Flervalg har kommet og gått, men innholdet er stabilt.** V2017–V2019 hadde
  tunge flervalgsbolker (2019: 12 spørsmål à 3 p = 36 % av eksamen); V2020–V2022
  droppet flervalg til fordel for kortsvar/essay. Flervalgene dekket nøyaktig de
  samme temaene som kortsvarene, bare i gjenkjenningsformat (WCAG-fakta,
  personvern, kohesjon/kobling, prosessmodeller, testfaser). **Behandle flervalg
  som en mulig, men ikke garantert, innpakning.**
- **Modelleringsoppgaven er den ene faste bjelken.** I *alle seks settene* er
  det en stor modelleringsoppgave (30–43 % av poengene) knyttet til et case.
  Den er make-or-break: se sensorkravene i del 4.

### Vektfordeling i et typisk sett (basert på V2019–V2022)

| Komponent | Andel |
|---|---|
| **UML-modellering fra case** (aktivitet + sekvens + klasse, ofte + use case) | **30–43 %** |
| Universell utforming / WCAG | 15–25 % |
| Personvern / GDPR / samtykke | 10–25 % |
| Interessenter / rikt bilde / aktører | 15 % |
| Brukerundersøkelser, krav, smidig/DevOps, sikkerhet | resten, roterende |

---

## 2. Temafrekvens

Måling over de seks settene (2017, 2018, 2019, 2020, 2021, 2022). Celleverdi =
antall sett der temaet dukker opp som **minst ett eget spørsmål, delspørsmål
eller obligatorisk case-komponent**.

| # | Tema | Score | Typisk form |
|---|---|---|---|
| 1 | **UML-modellering fra case** (aktivitetsdiagram, sekvensdiagram, klassediagram, use case-diagram + tekstlig beskrivelse) | **6/6 = 100 %** | Alltid ett stort case-problem, 30–43 %. Kjernen i hele faget |
| 2 | **Universell utforming / WCAG** (definisjon vs tilgjengelighet, 4 prinsipper, lovverk, digitalt utenforskap, tilsyn) | **6/6 = 100 %** | Egen oppgave 15–25 % + flervalg |
| 3 | **Personvern / GDPR / samtykke** (personopplysninger, samtykkets fire krav, databehandler vs behandlingsansvarlig, Datatilsynet, samtykkeskjema) | **6/6 = 100 %** | Egen oppgave 10–25 % + flervalg |
| 4 | **Smidig systemutvikling** (Scrum, Kanban, 12 prinsipper, smidige møter, roller PO/Scrum master) | **6/6 = 100 %** | Kortsvar/drøfting + flervalg |
| 5 | **Interessenter / aktører / rikt bilde** (Rich Picture: concerns, relasjoner, konflikter; primær- vs sekundæraktør) | **5/6 = 83 %** | Egen oppgave 15 % + del av caset |
| 6 | **Kravspesifikasjon** (brukerhistorier «som X ønsker jeg Y fordi Z», funksjonelle vs ikke-funksjonelle krav, produkt-/organisatorisk-/eksternkrav, testing av krav) | **4/6 = 67 %** | Del av caset + flervalg |
| 7 | **Brukerundersøkelser / datainnsamling** (deltakende observasjon, intervju, spørreskjema, pilot, Suchman-tabell, Hawthorne-effekt) | **4/6 = 67 %** | Egen oppgave + drøfting |
| 8 | **Sikkerhet / trusselmodellering / risikoanalyse** (trusselscenario, trusselpoker, usikkerhetsmatrise, SQL-injeksjon/XSS/DDoS/spoofing) | **4/6 = 67 %** | Flervalg + risikotabell i caset |
| 9 | **Prosessmodeller** (fossefall, inkrementell/iterativ, valg av modell, prosess-samsvar, PS2000) | **4/6 = 67 %** | Kortsvar/drøfting + flervalg |
| 10 | **DevOps / CI-CD / kodeforvaltning** (continuous integration/delivery/deployment, versjonskontroll, branching/merging, «alle ansvarlig for alt») | **3/6 = 50 %** | Egen oppgave (2020, 2021) + flervalg |
| 11 | **Etikk og samfunnskonsekvenser** (etiske dilemmaer, lovkjennskap, digitalt utenforskap, tvang/hemmelig valg) | **~3/6 eksplisitt** | Egen deloppgave; ellers vevd inn i UU/personvern |
| 12 | **Objektorientert design / arkitektur** (kohesjon, kobling, MVC, domenemodell, generalisering/arv, assosiasjon) | **3/6 = 50 %** | Flervalg + UML-begreper i pensum-kortsvar |
| 13 | **Teamarbeid / kommunikasjon** (daglige stand-up, retrospektiv, teamdynamikk) | **2/6 = 33 %** | Egen drøftingsoppgave (2017), smidige møter (2018) |
| 14 | **Testing** (verifisering vs validering, enhets-/integrasjons-/system-/akseptansetest) | **2/6 = 33 %** | Flervalg + «hvordan teste kravet» i caset |

### Viktigste funn

1. **Modelleringsoppgaven ER faget.** Ett stort case-basert UML-problem er
   garantert hvert år og utgjør 30–43 % av poengene. Den følger nesten alltid
   samme kjede: *case → interessenter/aktører → (evt. use case-diagram + tekstlig
   use case-beskrivelse) → aktivitetsdiagram → sekvensdiagram → klassediagram*.
   Den som mestrer **denne kjeden som håndverk** har sikret grunnpotten — og
   unngår automatisk stryk (se del 4). Alt annet i faget er byggeklosser som
   mates inn i, eller drøftes rundt, caset.
2. **Fire temaer er praktisk talt garantert som egne oppgaver:** UU/WCAG,
   personvern/GDPR, smidig systemutvikling og interessenter/rikt bilde (100 %,
   100 %, 100 %, 83 %). Til sammen med modellering dekker disse fem temaene
   brorparten av hvert sett.
3. **Personvern og UU er de to tyngste rene drøftingsoppgavene** — ofte 20–25 %
   hver i essay-settene, med krav om lovforankring (personopplysningsloven/GDPR;
   likestillings- og diskrimineringsloven / forskrift om UU av IKT).
4. **Ingen tallregning.** Faget har ingen kvantitative oppgaver. «Det tekniske»
   er diagram-tegning og strukturert kravformulering — kvalitativt håndverk.
5. **Caset binder alt sammen.** Hvert sett bruker ett gjennomgående case
   (Unter/drosje 2017, samretting 2018, bibliotek 2019, klesutleie 2020,
   E-valg 2021, klimalogg 2022) som interessenter, krav, modellering og
   drøfting alle henger på. Boka bør trene på nettopp denne case-drevne formen.

---

## 3. Oppgavetype-katalog (med sensors foretrukne metode)

De sjangrene som faktisk går igjen, med fasitens krav destillert fra de fire
løsningsdokumentene.

### A. UML-modelleringskjeden fra case (garantert, tyngst — 30–43 %)

Fast oppgavekjede, ofte alle ledd, alltid minst diagrammene:

1. **Interessenter/aktører**: list interessenter (ofte «minst tre/seks») med
   navn + interesse; skill **primæraktør** (har eget mål, initierer use case) fra
   **sekundæraktør** (nødvendig for å realisere målet, jobber «på bestilling»).
2. **Use case-diagram** (V2018, V2020): aktører + use cases, med `include`/
   `extend`-relasjoner der det er naturlig.
3. **Tekstlig use case-beskrivelse**: navn, aktør(er), **prebetingelse**,
   **postbetingelse**, **hovedflyt** (nummererte steg) og **minst én/to
   alternativ flyt**.
4. **Aktivitetsdiagram**: fra **START til SLUTT**, med aktiviteter og
   **beslutningsrombe/diamant** (if-then-else) for forgreninger.
5. **Sekvensdiagram**: **objekter** (instanser av klasser), **metodekall** som
   er definert i klassene, **hovedflyt + alternativ flyt** (alt-blokk). Sensor
   krever eksplisitt at *rekkefølgen av kall følger den tekstlige beskrivelsen*.
   Bruk gjerne de oppgitte metodene (f.eks. `finnBok(tittel):bok`).
6. **Klassediagram**: **minst klassene fra sekvensdiagrammet**, med
   **attributter, metoder, assosiasjoner og multiplisitet** (én-til-mange,
   mange-til-mange). Skal *reflektere* sekvensdiagrammet.

`⚠️ Sensor V2022: å utelate modelleringsoppgaven gir automatisk «ikke bestått» —
den kan ikke kompenseres av gode svar ellers.`

`⚠️ V2020-løsningen advarer: diagrammene bør holdes ENKLE. Overkompliserte
sekvens-/aktivitetsdiagram er en typisk feil.`

### B. Universell utforming / WCAG (garantert kortsvar/drøfting)

Sensor belønner:
- **Definisjon** av universell utforming, og **skillet mot «tilgjengelighet»**
  (UU = én løsning alle kan bruke uavhengig av funksjonsevne; tilgjengelighet =
  særtilpasning for enkeltgrupper). V2020-løsningen bruker buss-eksempelet
  (rampe = tilgjengelighet; lavgulv uten rampe = UU).
- **Hvorfor UU er viktig**: like muligheter/demokrati, økonomi (én løsning),
  større brukerbase, digitalt utenforskap.
- **WCAG 2.0**: de **fire prinsippene** (mulig å oppfatte, mulig å betjene,
  forståelig, robust), 12 retningslinjer, suksesskriterier.
- **Lovverk**: forskrift om UU av IKT-løsninger, likestillings- og
  diskrimineringsloven, WAD (Web Accessibility Directive); **tilsyn** (tidligere
  Difi, nå Digdir/uu.tilsynet). `(verifiser gjeldende tilsynsnavn.)`
- **Hva informatikere konkret kan gjøre**: brukertesting med ulike grupper,
  følge standarder, UU-tankegang gjennom hele prosessen.

### C. Personvern / GDPR / samtykke (garantert kortsvar/drøfting)

Sensor belønner:
- **Samtykkets fire krav** forklart med egne ord: **frivillig** (uten press/
  maktforhold), **spesifikt** (eget samtykke per formål), **informert** (vet hva
  man samtykker til, lagring, tilbaketrekking), **utvetydig** (aktiv handling —
  «den som tier samtykker» gjelder ikke).
- **Databehandler vs behandlingsansvarlig**: behandlingsansvarlig bestemmer over
  og har hovedansvar for opplysningene; databehandler behandler på vegne av /
  etter instruks; **databehandleravtale** regulerer forholdet.
- **Personopplysninger** (direkte vs indirekte identifiserende), **Datatilsynet**
  som tilsyn, **den registrertes rettigheter** (innsyn, retting, sletting,
  klage), **prinsipper** (formålsbegrensning, dataminimering, lagringsbegrensning).
- **Samtykkeskjema** (V2020): formål, hva som samles inn, frivillighet/
  tilbaketrekking, lagring/sletting, kontaktperson, aktiv avkrysning.

### D. Foranalyse: rikt bilde og brukerundersøkelser

- **Rikt bilde (Rich Picture)**: teknikk for å få frem ulike interessenter,
  **concerns**, relasjoner og **konflikter/motstridende interesser**; tegnes +
  forklares med tekst/symboler; brukes tidlig for å forstå situasjonen.
- **Brukerundersøkelser**: hvorfor (forstå bruk/behov), metoder (deltakende
  observasjon, intervju, spørreskjema), **pilotundersøkelse** (avdekke
  misforståelser), **Hawthorne-effekten** (observasjon endrer atferd),
  personvernhensyn ved datainnsamling, **Suchman-tabellen** (fra oblig 2).

### E. Kravspesifikasjon

- **Brukerhistorier**: formatet «Som [aktør] ønsker jeg [funksjon] for/fordi
  [mål]», prioritert liste.
- **Funksjonelle vs ikke-funksjonelle krav**; ikke-funksjonelle inndelt i
  **produktkrav** (f.eks. 100 samtidige brukere, brukervennlighet),
  **organisatoriske krav** (dokumentasjon/rutiner) og **eksterne krav**
  (UU/lovkrav). Sensor krever ofte **minst ett av hver type**.
- **Testing av krav**: koble hvert ikke-funksjonelt krav til en konkret testmåte
  (lasttest, brukertest, UU-revisjon).

### F. Prosessmodeller, smidig og DevOps (drøfting/kortsvar)

- **Valg av prosessmodell**: avvei kvalitet vs kostnad/tid, endringstakt,
  størrelse/kompleksitet, teamstørrelse, kundeinvolvering.
- **Fossefall** (sekvensielle faser, mye forhåndsplanlegging) vs **smidig**
  (Scrum: sprint, backlog, PO, Scrum master, stand-up, review, retrospektiv;
  Kanban: WIP-grense, visualisering, just-in-time). Argumenter for smidig:
  fleksibilitet, hyppige leveranser, kundeverdi.
- **DevOps**: hovedprinsipper («alle ansvarlig for alt», «automatiser alt», «mål
  først, test senere»), **kodeforvaltning/versjonskontroll**, kobling til
  **continuous integration/delivery/deployment** og til de 12 smidige
  prinsippene.

### G. Sikkerhet og risikoanalyse

- **Trusselscenario/trusselmodellering**, **trusselpoker** (identifisere +
  vurdere trusler), **risiko separat for personvern og sikkerhet per scenario**.
- **Risikoanalyse / usikkerhetsmatrise**: risiko, sannsynlighet, konsekvens,
  tiltak, ansvarlig (V2020: «minst seks risikomomenter»).
- Kjente sårbarheter som distraktorer i flervalg: SQL-injeksjon, XSS, DDoS,
  spoofing/svake passord.

### H. Flervalg (V2017–V2019, kan komme igjen)

Ett kryss per spørsmål (2–3 p). Feier hele pensum: WCAG-fakta, personvern,
prosess-samsvar, testfaser, Scrum/Kanban, kohesjon/kobling, MVC, domenemodell,
inkrementell utvikling, funksjonelle/ikke-funksjonelle krav. **Billige,
drillbare poeng når formatet brukes.** `(V2019: 3 p for riktig, 0 for galt —
ingen minuspoeng.)`

---

## 4. Sensorens krav

Destillert fra den offisielle sensorveiledningen V2022 og de tre
løsningsdokumentene (V2017, V2018, V2020).

### Faste metaregler

1. **Bestått/ikke bestått krever BREDDE over hele emnet.** Sensor V2022 er
   eksplisitt: det kan «ikke være store kunnskapshull innen pensum», og et svakt
   svar på én oppgave «kan ikke kompenseres ved svært god besvarelse av andre».
   Å dekke hele bredden er viktigere enn å skinne på ett tema.
2. **Modelleringsoppgaven er obligatorisk for å bestå.** Utelates den, er det
   «ikke bestått» — sagt to ganger i V2022-veiledningen. Dette er fagets
   viktigste enkeltregel.
3. **Oppgavene kan vektes ulikt** avhengig av hvor sentrale de er.
4. **Sekvensdiagrammet skal følge den tekstlige beskrivelsen** — rekkefølgen av
   metodekall skal speile hovedflyten i use case-beskrivelsen (gjentatt i flere
   løsninger).
5. **Klassediagrammet skal reflektere sekvensdiagrammet** — samme klasser,
   pluss attributter, metoder, assosiasjoner og multiplisitet.
6. **Treff antallskravet.** Ber oppgaven om «minst tre interessenter» / «minst
   seks brukerhistorier» / «minst fire ikke-funksjonelle krav (ett av hver
   type)» — lever nøyaktig det som kreves.
7. **Dokumentér egne antakelser** når oppgaven er tvetydig — oppfordret i hvert
   eneste sett («Gjør i så fall rede for disse»).
8. **Faglig forankring i essay-settene.** V2020/V2021 krevde kilder til UU- og
   personvernpåstander (lover, standarder, Datatilsynet/Difi). På skoleeksamen
   holder korrekt begrepsbruk uten formell sitering, men presise lov-/
   standardnavn belønnes.

### Hva som skiller sterk fra svak besvarelse

- **Presise begrepsskiller.** UU vs tilgjengelighet; databehandler vs
  behandlingsansvarlig; primær- vs sekundæraktør; funksjonelle vs
  ikke-funksjonelle krav; høy kohesjon vs lav kobling; verifisering vs validering.
  Sensor straffer sammenblanding.
- **Enkle, korrekte diagrammer** slår kompliserte. V2020-løsningen fremhever at
  diagrammene «kunne vært enklere» — hold flyten ren, vis at du forstår
  notasjonen fremfor å tegne alt.
- **Koble til det konkrete caset**, ikke generiske lister. Interessenter, krav og
  risikoer skal springe ut av casebeskrivelsen.
- **Alternativ flyt med.** Både tekstlig use case og sekvensdiagram skal ha
  hovedflyt *og* minst én alternativ flyt.

---

## 5. Typiske feil

1. **Å hoppe over modelleringsoppgaven** (eller levere den halvferdig) — den
   dyreste feilen: automatisk «ikke bestått».
2. **Sekvensdiagram som ikke følger den tekstlige beskrivelsen** — kallenes
   rekkefølge stemmer ikke med hovedflyten.
3. **Klassediagram uten multiplisitet, attributter eller metoder**, eller som
   ikke reflekterer sekvensdiagrammet.
4. **Overkompliserte diagrammer** i stedet for rene, lesbare (advart i V2020).
5. **Manglende alternativ flyt** i tekstlig use case / sekvensdiagram.
6. **Blande UU og tilgjengelighet** — å beskrive særtilpasning som om det var UU.
7. **Blande databehandler og behandlingsansvarlig**, eller å ikke forklare alle
   fire samtykkekravene (frivillig/spesifikk/informert/utvetydig).
8. **Blande primær- og sekundæraktør** (glemme at sekundæraktør ikke initierer
   eget use case).
9. **Ikke kategorisere ikke-funksjonelle krav** (produkt/organisatorisk/ekstern),
   eller forveksle funksjonelle og ikke-funksjonelle krav.
10. **Bytte om kohesjon og kobling** (høy kohesjon = ett funksjonelt område; lav
    kobling = få avhengigheter til andre objekter).
11. **Bomme på antallskravet** («minst seks interessenter» → lever tre).
12. **Glemme å dokumentere antakelser** i tvetydige case.
13. **Synsing uten begrepsforankring** i UU-/personvern-/etikkdrøftinger —
    manglende lov-/standardreferanser der oppgaven ber om faglig forankring.
14. **Kunnskapshull i ett tema** som drar hele besvarelsen under bestått-grensen
    (breddekravet).

---

## 6. Begreps- og rammeverkapparat

Læreboken bør bruke nøyaktig disse termene, siden oppgavene og løsningene gjør
det. Norsk fagterminologi (faget undervises og eksamineres på norsk).

### Systemutvikling og prosess
- **Prosessmodeller:** fossefall (sekvensielle faser), inkrementell/iterativ
  utvikling (inkrement = tillegg i programvaren), valg av modell (kvalitet vs
  kost/tid, endringstakt, kompleksitet). **Prosess-samsvar** (samsvar mellom
  prosessmodell og reell prosess). **PS2000** (smidig kontraktsmodell,
  målprismodell, delt risiko).
- **Smidig:** Scrum (sprint/iterasjon 2–4 uker, produktkø/backlog, produkteier,
  Scrum master, daglig stand-up, sprint review, retrospektiv), Kanban
  (WIP-grense, visualisering av arbeidsflyt, just-in-time), de 12 smidige
  prinsippene, «smidige møter».
- **DevOps:** utvikling + drift, prinsipper («alle ansvarlig for alt»,
  «automatiser det som kan automatiseres», «mål først, test senere»),
  **kodeforvaltning/versjonskontroll** (branching, merging, codeline, baseline,
  release), **continuous integration / delivery / deployment**.
- **Systemutvikling vs programmering** (programmering er én del av
  systemutvikling).

### Foranalyse og krav
- **Interessenter/aktører:** interessent (person/gruppe/organisasjon med
  interesse), **primæraktør** (eget mål, initierer use case) vs **sekundæraktør**
  (realiserer andres mål). **Rikt bilde / Rich Picture** (concerns, relasjoner,
  konflikter).
- **Brukerundersøkelser:** deltakende observasjon, intervju, spørreskjema,
  **pilotundersøkelse**, **Hawthorne-effekt**, Suchman-tabell, samtykke ved
  datainnsamling.
- **Krav:** funksjonelle vs **ikke-funksjonelle** krav (produktkrav /
  organisatoriske krav / eksterne krav), **brukerhistorie** («som X ønsker jeg Y
  fordi Z»), kravspesifikasjon, testing av krav.

### UML og design
- **Diagrammer:** use case-diagram (`include`/`extend`), tekstlig use
  case-beskrivelse (aktør, pre-/postbetingelse, hovedflyt, alternativ flyt),
  **aktivitetsdiagram** (start/slutt, aktivitet, beslutningsrombe),
  **sekvensdiagram** (objekt/livslinje, melding/metodekall, alt-blokk),
  **klassediagram** (klasse, attributt, metode, **assosiasjon**, **multiplisitet**,
  **generalisering/arv**). **Domenemodell** (klassediagram uten metoder).
- **Objektorientert design:** **høy kohesjon** (ett funksjonelt område),
  **lav kobling** (få avhengigheter), **MVC** (Model-View-Controller:
  Controller håndterer brukerinteraksjon og instruerer View og Model).

### Testing
- **Verifisering** (bygger vi produktet riktig?) vs **validering** (bygger vi
  riktig produkt / gjør systemet det brukeren ønsker?). Testfaser: enhets-,
  integrasjons-, system-, akseptansetest.

### Universell utforming
- UU (én løsning for alle uavhengig av funksjonsevne) vs **tilgjengelighet**
  (særtilpasning). **WCAG 2.0**: fire prinsipper (mulig å oppfatte, mulig å
  betjene, forståelig, robust), 12 retningslinjer, suksesskriterier. **Digitalt
  utenforskap**, funksjonsgap. Lovverk: forskrift om UU av IKT, likestillings-
  og diskrimineringsloven, WAD; tilsyn (Digdir/Difi). `(verifiser gjeldende
  forskrift/tilsyn.)`

### Personvern
- **GDPR/personvernforordningen**, **personopplysningsloven**, **Datatilsynet**
  (tilsyn), **personopplysninger** (direkte/indirekte), **samtykke** (frivillig,
  spesifikk, informert, utvetydig), **behandlingsansvarlig** vs **databehandler**,
  **databehandleravtale**, den registrertes rettigheter (innsyn/retting/sletting/
  klage), prinsipper (formålsbegrensning, dataminimering, lagringsbegrensning).

### Sikkerhet, etikk og samfunn
- **Trusselscenario**, **trusselmodellering**, **trusselpoker**, **risikoanalyse
  / usikkerhetsmatrise** (sannsynlighet × konsekvens → tiltak/ansvarlig),
  sårbarheter (SQL-injeksjon, XSS, DDoS, spoofing). Etiske dilemmaer,
  samfunnskonsekvenser av digitale systemer, lovkjennskap (åndsverkloven m.fl.),
  motstridende krav (e-valg: anonymitet vs visshet vs revisjon; tvang; hemmelig
  valg).

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes feilfritt (garantert, tunge poeng, strykkritisk)
1. **UML-modelleringskjeden som håndverk** (100 %, 30–43 %, strykkritisk):
   interessenter/aktører → (use case-diagram + tekstlig beskrivelse) →
   aktivitetsdiagram → sekvensdiagram → klassediagram, alt koblet til ett case,
   med hovedflyt + alternativ flyt, multiplisitet og riktig notasjon. Drill
   **sjangeren**, ikke bare notasjonen. Å beherske denne = å bestå.
2. **Universell utforming / WCAG** (100 %): definisjon + skille mot
   tilgjengelighet, fire prinsipper, lovverk, informatikerens rolle.
3. **Personvern / GDPR / samtykke** (100 %): fire samtykkekrav, databehandler vs
   behandlingsansvarlig, personopplysninger, Datatilsynet, samtykkeskjema.
4. **Smidig systemutvikling** (100 %): Scrum/Kanban med roller og møter, de 12
   prinsippene, fossefall vs smidig.

### Nivå 2 — må kunne (avgjør de mellomstore oppgavene)
5. **Interessenter / aktører / rikt bilde** (83 %): Rich Picture med concerns og
   konflikter; primær vs sekundær.
6. **Kravspesifikasjon** (67 %): brukerhistorier, funksjonelle/ikke-funksjonelle
   krav med de tre underkategoriene, testing av krav.
7. **Brukerundersøkelser** (67 %): metoder, pilot, Hawthorne, personvern ved
   datainnsamling.
8. **Prosessmodeller** (67 %): valg av modell, fossefall/inkrementell,
   prosess-samsvar.
9. **Sikkerhet / risikoanalyse** (67 %): trusselmodellering, usikkerhetsmatrise.

### Nivå 3 — bør kjenne til (lavfrekvent, men fyller settet / breddekravet)
10. **DevOps / CI-CD / kodeforvaltning** (50 %): prinsipper, versjonskontroll,
    CI/CD, kobling til smidig.
11. **Objektorientert design** (50 %): kohesjon/kobling, MVC, domenemodell,
    UML-begreper (generalisering, assosiasjon).
12. **Testing** (33 %): verifisering vs validering, testfaser.
13. **Teamarbeid / kommunikasjon** (33 %): stand-up, retrospektiv, teamdynamikk.
14. **Etikk/samfunn** som eksplisitt drøfting (vevd inn i UU/personvern ellers).

### Prognose for neste ordinære eksamen
Forvent **case-basert skoleeksamen (4 t, ingen hjelpemidler, bestått/ikke
bestått)** bygget rundt ett gjennomgående case: **én stor UML-modelleringsoppgave
(~30 %, obligatorisk for å bestå)** + egne oppgaver i **UU/WCAG**,
**personvern/GDPR** og **interessenter/rikt bilde**, pluss roterende kortsvar/
drøfting om **smidig/DevOps, krav, brukerundersøkelser og sikkerhet/risiko**.
Flervalg kan gjenoppstå som billig breddesjekk, men er ikke garantert. Ingen
tallregning. Fordi karakteren er bestått/ikke bestått og krever **bredde uten
kunnskapshull**, må boka dekke *alle* Nivå 1–2-temaene forsvarlig — ikke bare de
tyngste.

**Studenten som kan kjøre modelleringskjeden som en oppskrift (aktivitet →
sekvens → klasse fra et case, med alternativ flyt og multiplisitet), forklare
UU vs tilgjengelighet og de fire WCAG-prinsippene, redegjøre presist for de fire
samtykkekravene og databehandler vs behandlingsansvarlig, og drøfte Scrum/Kanban
mot fossefall — dekker de garanterte oppgavene og består trygt.**

---

## 8. Anbefalt bokarketype

**Base: DNA-drøftingsfag, forsterket med prosedyre-/sjangerkapitler i
regnefag-stil for modelleringen.** IN1030 er et hybrid konseptuelt fag — samme
grunnform som TDT4237-arketypen (se `docs/hoyskole-boker/tdt4237/`): kjernen er
**forklarende kortsvar og drøfting** (drøftingsfag-natur — begrepspresisjon,
ingen tallfasit), men fagets flaggskip-sjanger (**UML-modelleringskjeden**) er en
**prosedyrisk oppskrift** som må drilles som håndverk (regnefag-natur: samme
diagram-kjede gjentas nesten identisk hvert år, og er strykkritisk).

Konkret bør boka ha:
- **Del 0 — Eksamenskart + modelleringshåndverk:** (1) eksamensform,
  bestått/ikke bestått-logikken og breddekravet; (2) «Slik kjører du
  modelleringsoppgaven» — den fulle kjeden interessenter → use case → aktivitet
  → sekvens → klasse som trinn-for-trinn-oppskrift med gjennomskrevet modell-case
  og margkommentarer om vanlige trekk (for komplekst diagram, manglende
  alternativ flyt, manglende multiplisitet).
- **Temadeler** etter §2-frekvensen, med drøftingsfag-kapittel-DNA
  (kjernebegreper presist definert med skiller, posisjoner/avveininger,
  anvendelse på case, typiske feil): UU/WCAG, personvern/GDPR, interessenter/
  rikt bilde, brukerundersøkelser, krav, prosessmodeller/smidig/DevOps,
  sikkerhet/risiko, OOD/testing, teamarbeid, etikk/samfunn.
- **Sjangerkapitler** (regnefag-stil, ett per prosedyre-sjanger fra §3): UML-
  modellering (delt i aktivitet/sekvens/klasse), tekstlig use case-beskrivelse,
  rikt bilde, kravspesifikasjon, samtykkeskjema, risikoanalyse/usikkerhetsmatrise
  — hver med gjennomskrevet modellbesvarelse.
- **Flervalgsdrill** som eget innslag (2017–2019-formen) — billige, drillbare
  poeng som feier over breddepensumet, og som direkte støtter breddekravet.

Dette skiller seg fra en ren drøftings-arketype ved den tunge, obligatoriske
**prosedyriske modelleringsdelen**, og fra TDT4237 ved at det ikke er kode-/
sikkerhetstungt men **prosess-, bruker- og konsekvensorientert** — med UU og
personvern som de to store rene drøftingsblokkene.

---

## 9. Kildeliste

Alle filer ligger i `~/Desktop/Eksamner/UiO/IN1030/`.

**Offisiell sensorveiledning lest grundig (1):**
`losningsforslag/IN1030-V2022-sensorveiledning.pdf` (case «Klimalogg»,
bestått/ikke bestått-kriterier + oppgavetekst).

**Løsningsforslag lest grundig (3):**
`losningsforslag/IN1030-V2020-losningsforslag.pdf` (fullstendig, basert på
beståtts-besvarelse), `losningsforslag/IN1030-V2017-modellering-losningsforslag.pdf`
og `losningsforslag/IN1030-V2018-modellering-losningsforslag.pdf`
(student-gjennomganger av modelleringsdelen).

**Oppgavesett lest grundig (6):** `eksamen/IN1030-V2017.pdf` (kode INF1055),
`eksamen/IN1030-V2018.pdf`, `eksamen/IN1030-V2019.pdf`, `eksamen/IN1030-V2020.pdf`
(hjemmeeksamen), `eksamen/IN1030-V2021.pdf` (hjemmeeksamen), samt V2022-
oppgaveteksten i sensorveiledningen.

**Fagbeskrivelse:** omskrevet sammendrag av UiOs emnebeskrivelse for IN1030
(scratchpad: `fagbeskrivelse-in1030.md`; kilde:
<https://www.uio.no/studier/emner/matnat/ifi/IN1030/>).

**Forbilder:** `docs/hoyskole-boker/in1020/EKSAMENSANALYSE.md` (UiO datateknologi-
innføring, struktur) og `docs/hoyskole-boker/tdt4237/EKSAMENSANALYSE.md`
(hybrid konseptuelt systemutviklings-/sikkerhetsfag; arketype-forbilde).

### Merknader om evidensstyrke
- **Moderat arkiv (6 sett, kun 1 offisiell sensorveiledning).** Frekvensene i §2
  er robuste for de høyfrekvente temaene (modellering, UU, personvern, smidig —
  alle 100 %), men mer usikre for de lavfrekvente (testing, teamarbeid, OOD) og
  for antallskrav/poengregler. Sensorkravene i §4 hviler tungt på V2022-
  veiledningen; verifiser mot flere veiledninger hvis de blir tilgjengelige.
- **Formen har skiftet** (skoleeksamen med flervalg 2017–2019 → korona-
  hjemmeeksamen 2020–2021 → skoleeksamen 2022). Ingen sett etter V2022 i arkivet
  — **verifiser gjeldende eksamensform, flervalgsandel og karakterskala mot
  emnebeskrivelsen** før boka låser antakelser.
- **Lov-/standardnavn eldes:** forskrift om UU av IKT, WAD og tilsynsorganets
  navn (Difi → Digdir) kan ha endret seg siden de eldste settene. Marker slike
  detaljer `(verifiser)` i boka.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og
  sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen
  oppgavetekster, fasiter eller løsningsforslag er gjengitt ordrett. Fagbegreper,
  UML-notasjon, rammeverks- og lovreferanser (WCAG, GDPR, Scrum, DevOps) er
  allmenn faglig kunnskap.
```

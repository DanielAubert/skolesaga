# Bokskjelett: IN1020 Introduksjon til datateknologi — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alle frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er derfor angitt her, destillert fra
> `EKSAMENSANALYSE.md` (UiOs eksamensarkiv for IN1020 H2017–H2023: oppgavesett på
> bokmål og engelsk, fasiter, faglærernes «Kommentarer til eksamen» H2019 og
> tredelt sensorveiledning H2023, samt UiOs emnebeskrivelse). Arketype:
> **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori / drill /
> øvingseksamen) er obligatoriske og gjentas ikke i sin helhet her, men er
> tilpasset et rent **flervalgsfag med negativ poenggiving** (se §1). **All
> notasjon følger emnets konvensjoner** (basesubskript, LMC-instruksjonssett,
> boolske portsymboler, CIDR), fordi oppgavene og fasitene gjør det. Alle
> oppgaver, tall, kretser, programmer og innpakninger i den ferdige boka skal
> være **nyskrevne** (opphavsrett): instruksjonssett, tallverdier og
> standardnotasjon er allmenn faglig kunnskap, men ingen oppgavetekster,
> fasiter eller sensorformuleringer fra reelle sett gjengis.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `in1020` |
| Tittel | **IN1020 Introduksjon til datateknologi (UiO)** |
| Institusjon | **UiO** (Universitetet i Oslo — finnes fra før, jf. ECON1310/JUS1111) |
| Level | `'Høyskole'` |
| Arketype | Regnefag (kvantitativt/teknisk fag med faste, gjentakende oppgavemønstre) — hybrid: 3 regneteknikker + tung begreps-/faktakontroll |
| Antall kapitler | **32** (1 eksamenskart + 27 tema/drill + 4 eksamenstrening) |
| Estimert totaltid | **≈ 2 290 min ≈ 38 timer** (inkl. 3 firetimers øvingseksamener) |
| Quiz totalt | **697** (krav ≥500; siktemål 600–750 — quiz **er** eksamenstrening) |
| Flashcards totalt | **556** (krav ≥500 — begrepsrikt fag, siktet høyt) |
| Prøver | **16** (4 per temadel 1–4) + **3 øvingseksamener** (kap. 5.2–5.4) |

**Pitch (én avsnitt):** IN1020 er UiOs brede innføring i hvordan en datamaskin er
bygd — fra bit og logisk port opp til operativsystem, nettverk og datasikkerhet.
Det er **ikke** et programmeringsfag; «koden» som testes er maskinnær assembler
(Little Man Computer). Vurderingen er én **firetimers digital skoleeksamen** i
Inspera, karakter **bestått/ikke bestått**, som teller 100 %. Formen er det som
gjør faget spesielt: **utelukkende flervalg** (velg ett/flere, sant/usant-matriser,
dra-og-slipp, nedtrekk) **med negativ poenggiving** — gale avkrysninger trekker
poeng (men aldri under 0 på en enkeltoppgave). Fra H2022 er settet bygd av **fire
faste seksjoner à 25 poeng**, og **hver seksjon må bestås for seg**: (1) digital
representasjon, (2) maskinvare og arkitektur, (3) datasikkerhet, (4) datanettverk.
Faget har derfor **ingen enkelt kjerneoppgave** — det har fire kjerneseksjoner som
alle kommer hvert år, og **bredden er selve eksamensformen**. Du kan ikke droppe
nettverk og satse på de tre andre. Boka speiler dette 1:1: én del per seksjon, alle
fire like solide. Den driller de tre garanterte regneteknikkene til feilfrihet
(tallkonvertering, subnetting/overføringstid, cache), de mekaniske ferdighetene
(LMC-sporing, kretsanalyse) og de faste begrepsskillene (mål vs. tiltak,
nøkkelretning i asymmetrisk krypto, TCP vs. UDP) — og bruker quizbanken som **direkte
eksamenstrening**.

**Kritisk stilregel (gjelder HELE boka) — «flervalg med negativ poenggiving»:**
1. **Begrunn hvorfor hvert gale alternativ er galt.** Dette er den viktigste
   føringen i hele boka. Formatet straffer gale avkrysninger, så *å vite hva som
   er galt er halve ferdigheten*. Hvert løsningsforslag og hver quiz-forklaring skal
   — slik sensorveiledningene selv gjør — begrunne **både** hvorfor det riktige er
   riktig **og** hvorfor hver distraktor er gal. Bekreft aldri bare fasiten.
2. **Presisjon slår gjetting.** Fordi minustrekket rammer gjetting, lærer boka
   eksplisitt: kryss bare av det du kan begrunne. Ett sikkert riktig svar slår tre
   halvsikre. «Aldri under 0 på én oppgave» betyr at man kan la stå åpent når man er
   i tvil — men bare når man er *reelt* i tvil.
3. **Flere svar kan være riktige samtidig.** Mange oppgaver er «velg ett *eller
   flere*», sant/usant-matriser eller dra-og-slipp der flere celler er riktige (f.eks.
   begge tolkninger av en byte; både «forfalsket nettside → autentisitet» og
   «→ integritet»). Løsningsforslagene markerer *alle* riktige og begrunner hver.
4. **Ingen hjelpemidler (verifiser).** De arkiverte settene (2017–2023) oppgir «alle
   trykte/skrevne hjelpemidler + enkel kalkulator», men UiOs **gjeldende
   emnebeskrivelse** oppgir **«ingen hjelpemidler»**. Dette er et reelt avvik —
   trolig en formendring. Boka bygges for **ingen hjelpemidler**: alle teknikker
   (tallkonvertering, cache-sykler, subnetting, LMC-sporing) skal sitte i hodet, og
   flashcards/quiz kalibreres som ren gjenkalling. Del 0 sier eksplisitt at studenten
   **må sjekke gjeldende semester** — marker `(verifiser)`.
5. **Emnets notasjon er fasit.** Bruk basesubskript (`1101₂`, `774₈`, `0x33`, `42₁₀`),
   LMC-instruksjonssettet med navngitte mnemonics (INP/OUT/OTC/LDA/STA/ADD/SUB/
   BRA/BRZ/BRP/HLT/DAT) og 3-sifrede opkoder, boolsk notasjon (`A′`/`Ā`, `A·B`, `A+B`,
   `⊕`) og CIDR/punktnotasjon — nøyaktig som oppgavene forventer gjenkjenning.
   Engelsk fagterm i parentes ved første forekomst der det er innarbeidet (f.eks.
   «restnett (*residual network*)» finnes ikke her, men «lastfaktor», «forøkende»
   osv. gis norsk).

**Fire-seksjoner-regelen (skal stå i Del 0 og styre hele boka):** Fra H2022 er
eksamen fire faste seksjoner à 25 poeng, og **hver må bestås for seg**. Konsekvens
for læreboka: de fire delene (1–4) er **like viktige** og skal alle ha solid
dekning — man kan ikke la én del være tynn «fordi de tre andre bærer». Innenfor hver
del styrer frekvensen *omfanget* (perfekt-temaer får teori + drill; kjenne-temaer får
kompakte kapitler), men ingen del kuttes under fullverdig seksjonsdekning.

**Pensum-avgrensning (skal stå tydelig i Del 0 — «feller fra gamle sett»):**
Følgende er **tatt ut av / nedtonet i** gjeldende pensum og skal **IKKE drilles**:
**Karnaugh-diagram (K-map), multiplekser og dekoder** (eksplisitt plassert i
«Ikke del av pensum» i H2022), samt flip-flop/låsekretsdetaljer, Moores lov,
OSI-7-lagsmodellen, detaljert ARP-tabellteori og private IP-adresseklasser. De nevnes
**kun kort for kontekst** i sine kapitler (2.2 for K-map/mux/dekoder, 4.1 for OSI) og
markeres uttrykkelig som ikke-pensum. En student som øver på H2017/H2018 vil ellers
kaste bort tid på K-map — Del 0 advarer eksplisitt mot dette.

**Korona-caveat (skal stå i Del 0):** H2020 var en **korona-hjemmeeksamen (2 timer,
bestått/ikke bestått)**, brukt som Inspera-prøveeksamen — kortere og løsere enn
ordinær form og **ikke representativ**. Den er med i frekvenstellingen, men boka
bygges mot den **gjeldende 4-timers formen** (H2022/H2023 er de to ferskeste
representative settene, med fast rekkefølge digital→maskinvare→sikkerhet→nettverk og
25 poeng per seksjon).

**Avvik fra DNA/README-malen (dokumentert):**
- **Quiz ER eksamenstrening — ikke bare faktakontroll.** I regnefag med *frisvarseksamen*
  (f.eks. TDT4120) er plattformens MC-quiz bare kunnskapskontroll ved siden av selve
  treningen. Her er den reelle eksamen **selv flervalg**, så quizbanken er **direkte
  eksamenstrening** og er kalibrert høyt (697). Tre konsekvenser: (i) `options[0]` =
  riktig svar (runtime stokker); (ii) reelle «velg ett *eller flere*»- og
  sant/usant-matrise-oppgaver **splittes til enkeltstående ett-riktig-svar-spørsmål**
  (ett per utsagn/celle), fordi plattformen har ett riktig svar per quiz-item; (iii)
  **hver quiz-forklaring begrunner hvorfor distraktorene er gale**, ikke bare hvorfor
  fasiten stemmer — det speiler den negative poenggivingen og er selve
  ferdigheten faget tester. Selve mengdetrening i sant/usant- og dra-og-slipp-form
  gjøres i `exercise`-blokkene (som har `solution` + `hints`).
- **«Symbol- og formelliste» → «Notasjons- og konstruksjonsliste».** README krever en
  `collapsible` «Symbol- og formelliste» per delkapittel. For et datateknologifag er
  det presise apparatet ikke bare formler, men **konstruksjonsnotasjon**: binær-/
  base-notasjon, **LMC-instruksjonssettet** (mnemonic ↔ opkode ↔ virkning),
  **portsymboler** (AND/OR/XOR/NAND/NOR/XNOR/NOT + boolsk skrivemåte) og
  **nettverksbegreper** (CIDR, nettmaske, `2^n − 2`, TCP/IP-lagene). Blokken heter
  derfor **«Notasjons- og konstruksjonsliste»** og lister ALT delkapitlet bruker, med
  kort forklaring/virkning per element. Regelen «per delkapittel, ikke arv» beholdes.
  Unntak kun for kapitler helt uten notasjon/symboler (finnes knapt).
- **`theorem`-blokker brukes for regler, instruksjonskontrakter og identiteter.** Der
  DNA-en bruker `theorem` for matematiske resultater, brukes den her for (a) de faste
  **regneprosedyrene** som må sitte (direkte binær↔oktal/hex, `2^n − 2`,
  overføringstid, cache-vektsnitt, subnett/broadcast via AND/OR), (b) **LMC-
  instruksjonskontrakter** (hver instruksjon: mnemonic, opkode, virkning på
  akkumulator/PC/minne), og (c) **boolske/nettverks-identiteter** (XNOR = `(A⊕B)′`,
  funksjonell kompletthet av {NAND}/{NOR}, protokoll→transportlag). Disse er bokas
  «teoremer».
- **Flashcards kalibreres som begrep ↔ definisjon ↔ fast distraktor.** Flashcards
  genereres KUN fra toppnivå `definition`-blokker med `title`. Faget er begrepsrikt
  (arkitektur-fakta, skadevaretyper, sikkerhetsmål, LMC-instruksjoner,
  nettverkstjenester, kryptobegreper), så flashcards siktes høyt (558) og kalibreres
  som ren gjenkalling: **begrep → presis definisjon + den faste feilslutningen**
  (f.eks. «Digital signatur → gir uavviselighet/autentisitet, **ikke**
  konfidensialitet»; «Register → raskt CPU-internt minne, **ikke** bygd av RAM»;
  «`OTC` → skriv ut akkumulator som ASCII-tegn»). Fordi eksamen (verifiser) er
  hjelpemiddelfri, ER dette puggematerialet.
- **Drillkapitler ligger i sine temadeler** (ikke samlet i siste del), fordi hver
  høyfrekvent regne-/mekanikksjanger må drilles umiddelbart etter teorien. Del 5
  beholder kun flervalgs-sjangerguiden og de komplette øvingseksamenene.
- **Kapittelantall (32) ligger midt i DNA-veiledningen (20–35)** og er
  frekvensdrevet: fire seksjoner som alle må bestås gir fire like tunge deler à
  6–7 kapitler.

---

## 2. Makrostruktur

Delene følger **eksamens fire seksjoner** (ikke ren faglig avhengighet — men innad i
hver del ordnes kapitlene etter forkunnskaper). Alle fire delene er like viktige
(hver seksjon må bestås); frekvensen styrer *omfanget* innad i delen. `sectionNames`
(bokforsiden) settes fra kolonne 2.

| Del | `sectionName` (bokforsiden) | Kap. | Eksamensseksjon (25 p, må bestås) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. |
| 1 | Digital representasjon og assemblerkode | 7 | **Seksjon 1.** Tallsystemer, 2-er komplement, LMC-assembly/maskinkode, tegn/filformater/farger/komprimering. |
| 2 | Maskinvare og arkitektur | 7 | **Seksjon 2.** Logiske porter, kretsanalyse, arkitektur-fakta, cache-beregning, minnehierarki, abstraksjonsnivå. |
| 3 | Datasikkerhet | 7 | **Seksjon 3.** Mål vs. tiltak, trusselmodellering, symmetrisk/asymmetrisk krypto, signatur/hash/PKI, autentisering, personvern, skadevare. |
| 4 | Datanettverk | 6 | **Seksjon 4.** TCP/IP-lag/protokoller, subnetting/IP, overføringstid, nettjenester (NAT/CDN/DNS/IPv6/DHCP/streaming), aksessmodeller/svitsjing, OS. |
| 5 | Eksamenstrening | 4 | Flervalgssjangeren + 3 komplette øvingseksamener (4 seksjoner à 25 p). |

**Avvik fra DNA-makrostrukturen (dokumentert):** DNA-en ordner temadelene etter faglig
avhengighet og lar frekvens styre omfang. Her styrer **eksamens seksjonsstruktur**
delinndelingen (fire like tunge deler), fordi hver seksjon må bestås for seg og boka
skal speile det. Faglig avhengighet respekteres *innad* i hver del (porter før
kretsanalyse; lag/adressering før tjenester). Drillkapitlene (1.2, 1.6, 2.3, 2.7,
3.5, 4.4) ligger i sine deler. Del 5 beholder sjangerguiden og øvingseksamenene.

---

## 3. Sjangerkatalog

Faget har to ortogonale akser: **svarformen** (F1–F4, det som gjør formatet spesielt)
og **innholdssjangeren** (A–K, temaene fra EKSAMENSANALYSE §3). Hvert kapittel
refererer begge. Del 0 presenterer dem for studenten.

### Svarformer (F) — alle er flervalg med negativ poenggiving

| Kode | Svarform | Mekanikk | Fallgruve |
|---|---|---|---|
| **F1** | Velg ett *eller flere* alternativer | Ett eller flere riktige; minst ett alltid riktig | Gjetting straffes; man må vite hvilke *ikke* er riktige |
| **F2** | Sant/usant-matrise | Rad = utsagn; kryss sant/usant (noen celler gir 0/nøytralt) | De faste «alltid usanne» distraktorene (§ typiske feil #11) |
| **F3** | Dra-og-slipp / plasser på rett plass | Koble element → kategori (protokoll→lag, tema→pensum, trussel→mål) | Feil kobling koster; «ikke-pensum»-ruta er en felle |
| **F4** | Nedtrekksmeny | Velg ett alternativ per delspørsmål | Delvis uttelling per rad |

> **Bonus/minus:** noen maskinvareoppgaver gir **bonuspoeng** for full pott og
> **minus** per feil (H2023). Delvis uttelling er vanlig. Robust sensur: tvilsoppgaver
> justeres til kandidatens fordel.

### Innholdssjangre (A–K) — destillert fra EKSAMENSANALYSE §3

| Kode | Innholdssjanger | Seksjon | Frekvens |
|---|---|---|---|
| **A** | Tallsystem-konvertering (bin/okt/hex/des; sortering på ulik base) | 1 | **100 %** |
| **B** | 2-er komplement & byte-tolkning (fortegnsbit, byte-addisjon, overflyt) | 1 | **100 %** |
| **C** | LMC-assembly & maskinkode (sporing, fyll-inn, selvmodifiserende, reverse) | 1 | **100 %** |
| **D** | Logiske porter & kretsanalyse (port-ID, skriv F, ekvivalente uttrykk) | 2 | porter **100 %** / krets 83 % |
| **E** | Cache-beregning (vektet snitt treff/bom) | 2 | 67 % ↑ *voksende* |
| **F** | Arkitektur-fakta & abstraksjonsnivå (sant/usant + rangering) | 2 | fakta **100 %** / abstr. 33 % ↑ |
| **G** | Sikkerhetsmål/-tiltak & trusselmodellering | 3 | **100 %** |
| **H** | Kryptering & digital signatur (symm/asymm, nøkkelretning, PKI/hash) | 3 | **100 %** |
| **I** | Personvern/GDPR & skadevare | 3 | GDPR 67 % / skadevare 50 % |
| **J** | Nettverk (subnetting, protokoll/lag, tjenester, overføringstid) | 4 | subnetting/lag/tjenester **100 %**, overføring 83 % |
| **K** | Operativsystemer (ressursstyring, maskinvareabstraksjon, kjerne/bruker) | 4 | ny fast gjenganger (H2023) |

---

## 4. Kapitler

Feltene følger DNA-ens «Skjelett-krav». **Innholdskontrakt** = definisjoner/regler/
prosedyrer/instruksjonskontrakter kapitlet SKAL lære (i emnets notasjon). **Notasjons-
og konstruksjonsliste** = det `collapsible`-apparatet delkapitlet krever
(binærnotasjon, LMC-instruksjoner, portsymboler, nettverksbegreper). Prioritetsklasser:
**perfekt** / **kunne** / **kjenne**. Hvert teorikapittel har standard-DNA-en:
Eksamensvinkel-`tip` → Forkunnskaper-`text` + Notasjons-og-konstruksjonsliste-`collapsible`
→ Motivasjon → `definition`/`theorem` (i emnets notasjon) → utledning/prosedyre m/intuisjon
→ 2–4 `example` (siste på eksamensnivå, i flervalgsform med *hvorfor hvert alternativ
er galt*) → Typiske-feil-`warning` → 6–12 `exercise` (stigende, ender på eksamensnivå,
flervalgsformer F1–F4, alle med `solution` som begrunner alle alternativer + `hints`)
→ Repetisjons-`collapsible`. Drillkapitler: Eksamensvinkel → løsningsoppskrift →
sensor-kommentert case → 10–16 oppgaver på eksamensnivå.

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet — slik testes IN1020

- **id:** `in1020-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen · **kapitteltype:** eksamenskart
- **description:** Eksamensformen (én firetimers digital flervalgseksamen med negativ poenggiving), de fire seksjonene som hver må bestås, temafrekvensene, svarformene F1–F4 og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet 2017–2023. Skal gjengi: (i) **formen** — digital skoleeksamen i Inspera, **4 timer**, bestått/ikke bestått, teller 100 %; **utelukkende flervalg** (F1–F4) med **negativ poenggiving** (gale kryss trekker, men aldri under 0 på én oppgave); (ii) **fire faste seksjoner à 25 p (fra H2022), hver må bestås** — digital representasjon, maskinvare, sikkerhet, nettverk; (iii) **hjelpemiddel-avviket** (`verifiser`): arkivet tillater alle hjelpemidler, gjeldende emnebeskrivelse ingen → boka trener for **ingen**, sjekk gjeldende semester; (iv) **korona-caveaten** (H2020 = 2-timers hjemme-prøveeksamen, ikke representativ); (v) at **bredden er eksamensformen** — 11 temaer scorer 100 %, ingen seksjon kan droppes; (vi) **temafrekvens-tabellen** (A tall 100 %, B 2-komplement 100 %, C LMC 100 %, D porter 100 %/krets 83 %, F arkitektur-fakta 100 %, G mål/tiltak 100 %, H krypto/signatur 100 %, J subnetting/lag/tjenester 100 %/overføring 83 %, autentisering 83 %, E cache 67 %↑, I GDPR 67 %/skadevare 50 %, aksess/svitsjing 67 %, filformat/ASCII 50 %↑, F abstraksjonsnivå 33 %↑, K OS ny↑); (vii) **pensum-avgrensningen** — K-map/multiplekser/dekoder + flip-flop/Moores lov/OSI-7-lag/ARP-detaljer/private IP-klasser er **ikke pensum**; ikke drill dem.
- **Innholdskontrakt:** Svarform-katalogen F1–F4 (§3) + innholdssjangrene A–K som studentens sjekkliste med typisk seksjon og vekt. **Den gjennomgående regelen**: *begrunn hvorfor hvert gale alternativ er galt* — presisjon slår gjetting under negativ poenggiving. **Prognosen for neste ordinære eksamen**: seksjon 1 = tallkonvertering + 2-er komplement + 3–4 LMC/maskinkode + mulig fargekode/ASCII; seksjon 2 = port-ID + kretsanalyse + cache + arkitektur-fakta + abstraksjonsnivå; seksjon 3 = mål vs. tiltak + krypto/signatur + trusselmodellering + personvern; seksjon 4 = subnetting (2–3) + overføringstid + protokoll/lag-matrise + NAT/CDN/IPv6/streaming + OS-fakta. Avslutt med **leseplanen**: de fem regne-/mekanikkryggradene (tallkonvertering+2-komplement, LMC-sporing, porter/kretsanalyse, mål/tiltak+trusselmodellering, subnetting/IP+protokoller/tjenester) skal sitte perfekt; nivå 2 (overføringstid, cache, autentisering, GDPR) avgjør ofte om en seksjon bestås; nivå 3 (filformater, aksessmodeller, skadevare, OS) fyller ut.
- **Oppgavesjangre:** Ingen fagoppgaver; 3–4 refleksjonsoppgaver, f.eks.: «Med negativ poenggiving og fire seksjoner som hver må bestås — er det lurt å krysse av et alternativ du er 50 % sikker på? Begrunn.» og «Rangér de fire seksjonene etter hvor mange garanterte regnepoeng de rommer.»
- **Typiske feil:** Metafeilene — gjette under negativ poenggiving; satse på at én seksjon ikke kommer (umulig, hver må bestås); drille K-map/multiplekser/dekoder fra gamle sett (ikke-pensum); tro korona-settet (H2020) speiler dagens form; anta at hjelpemidler er tillatt uten å sjekke gjeldende semester.
- **Quiz: 16 · Flashcards: 14** (form, svarformer F1–F4, frekvenser, pensum-avgrensning, de fire seksjonene)

---

### Del 1 — Digital representasjon og assemblerkode *(SEKSJON 1 — må bestås)*

> Seksjon 1 rommer de tre billigste garanterte poengene i faget: tallkonvertering,
> 2-er komplement og LMC-sporing — alle 100 %, alle med én entydig fasit, alle med en
> klassisk felle. Kapitlene 1.2 og 1.6 er de store drillkapitlene.

#### Kapittel 1.1: Tallsystemer og direkte konvertering

- **id:** `in1020-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Binær, oktal, heksadesimal og desimal — og den raske **direkte** konverteringen via 3-bits (oktal) og 4-bits (hex) grupper, uten omveien via desimal.
- **Eksamensbelegg:** Sjanger A, 100 %. Sensor anbefaler **eksplisitt** (H2023) direkte binær↔oktal/hex fremfor omveien via titallssystemet. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` plassverdisystem og base. `theorem` **direkte konvertering**: binær↔oktal = grupper bitene i **3-er blokker** (`774₈ = 111 111 100₂`); binær↔hex = grupper i **4-er blokker / nibbler** (`0x49 = 0100 1001₂ = 73₁₀`); des→base = gjentatt divisjon med rest. Basesubskript-notasjon (`1101₂`, `774₈`, `0x33`/`33₁₆`, `42₁₀`). Egendefinerte tallsystemer (base 6 med symboler 0,1,2,A,B,C — H2020) som variant. **Notasjons- og konstruksjonsliste:** basesubskript, 3-/4-bits gruppering, sifferverdier for hex (A–F = 10–15).
- **Oppgavesjangre:** A (F1/F4). Mønstereksempel (nyskrevet, F1): «Hvilke av disse er lik `10110₂`? (a) `26₈` (b) `0x16` (c) `22₁₀` (d) `0x1A`» — løsning konverterer direkte (3-er → `26₈`, 4-er → `0x16`, verdi 22) og begrunner hvorfor `0x1A` (=26) og andre er gale.
- **Typiske feil:** Regne «via desimal» når direkte er raskere og sikrere (§ typiske feil #6); feil gruppestørrelse (3 for oktal, 4 for hex — ikke omvendt); glemme ledende nuller ved gruppering; blande hex-sifferverdiene A–F.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 1.2: DRILL — Tallkonvertering og sortering på ulik base

- **id:** `in1020-1-2` · **number:** 1.2 · **estimatedMinutes:** 80 · **prerequisites:** `in1020-1-1` · **kapitteltype:** drill
- **description:** Systematisk drill i sjanger A: direkte konvertering begge veier, «hvilke er lik X?», og sortering av tall gitt på ulik base.
- **Eksamensbelegg:** Sjanger A i hvert sett (100 %). Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) for konvertering: velg direkte gruppering (3-er oktal, 4-er hex), ellers gjentatt divisjon; 2) for **sortering/sammenligning** på ulik base: gjør **alle** om til samme base (typisk desimal) først, deretter sorter (mønster H2019: `2013₈=1035`, `40E₁₆=1038`, `1031₁₀=1031`, `10000001001₂=1033`); 3) for «hvilke er lik X?»: konverter hver kandidat, kryss av alle like, begrunn hver gal. Sensor-kommentert case med margnotat om hvorfor omveien via desimal er tregere. 12–16 oppgaver (F1/F3/F4) som roterer alle variantene, inkl. ett egendefinert tallsystem.
- **Oppgavesjangre:** A. Mønstereksempel (F3, dra-og-slipp): «Sorter disse fem tallene (gitt på ulik base) fra minst til størst.»
- **Typiske feil:** Sammenligne tall uten å bringe til felles base; feil gruppering; regnefeil i divisjonsmetoden; krysse av et tall som «likt» uten å konvertere.
- **Quiz: 26 · Flashcards: 12**

#### Kapittel 1.3: To-er komplement og byte-tolkning

- **id:** `in1020-1-3` · **number:** 1.3 · **estimatedMinutes:** 45 · **prerequisites:** `in1020-1-1` · **kapitteltype:** teori
- **description:** Samme 8-bits mønster har to tolkninger — uten fortegn og med fortegn (2-er komplement) — pluss byte-addisjon med overflyt.
- **Eksamensbelegg:** Sjanger B, 100 %. Oppgaver krever ofte **begge** tolkninger. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **2-er komplement (8 bit)**: med fortegn = `−2⁷·b₇ + Σ 2ⁱ·bᵢ`; mest signifikante bit = fortegnsbit. Vis begge tolkninger når oppgaven spør (`10101100₂ = 172` uten fortegn **eller** `−84` med fortegn: `−128 + 44`). Negasjon i 2-er komplement (inverter + 1). **Byte-addisjon** `C = A + B`: regn binært, hold 8 bit, oppgi **begge** tolkninger av resultatet; **overflyt** når mente ut av bit 7 ≠ mente inn i bit 7. **Notasjons- og konstruksjonsliste:** fortegnsbit, `2⁷=128`-vekten, byte = 8 bit, overflyt.
- **Oppgavesjangre:** B (F1/F2). Mønstereksempel (F1): «`11110000₂` tolkes som … (kryss av alle som stemmer): (a) `240` uten fortegn (b) `−16` med fortegn (c) `−112` med fortegn (d) `16` uten fortegn.» Løsning: a og b riktige, begrunner c/d gale.
- **Typiske feil:** Bare oppgi den positive tolkningen når begge kreves (§#8); glemme `−2⁷`-vekten for fortegnsbiten; regne mer enn 8 bit ved addisjon; forveksle mente og overflyt.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 1.4: LMC-assembly — instruksjonssett og sporing

- **id:** `in1020-1-4` · **number:** 1.4 · **estimatedMinutes:** 50 · **prerequisites:** `in1020-1-1` · **kapitteltype:** teori
- **description:** Little Man Computer: instruksjonssettet (INP/OUT/OTC/LDA/STA/ADD/SUB/BRA/BRZ/BRP/HLT/DAT) og den mekaniske sporemetoden med akkumulator/minne-tabell.
- **Eksamensbelegg:** Sjanger C, 100 %, ofte 3–4 deloppgaver. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem`-blokker som **instruksjonskontrakter** (én per instruksjon: mnemonic, virkning på akkumulator/PC/minne): `LDA xx` (last minne[xx]), `STA xx` (lagre), `ADD xx`/`SUB xx`, `BRA xx` (hopp), `BRZ xx` (hopp hvis 0), `BRP xx` (hopp hvis ≥0), `INP`, `OUT` (skriv ut som tall), **`OTC`** (skriv ut som **ASCII-tegn** — krever ASCII-tabellen), `HLT`, `DAT` (datacelle). **Sporingsmetoden** (`theorem`/prosedyre): tabell med kolonner for **programteller, akkumulator og hver navngitt minnecelle**, én rad per utført instruksjon; følg PC-en. **Notasjons- og konstruksjonsliste:** hele mnemonic-tabellen, akkumulator, programteller, ASCII (utdrag for OTC).
- **Oppgavesjangre:** C (F1/F4). Mønstereksempel (F4): «Etter at dette programmet har kjørt med input 3, hva skriver `OUT` ut?» — spor med tabell.
- **Typiske feil:** Ikke føre sporetabell (gjettespor); glemme at `OTC` skriver ASCII-**tegn**, ikke tall; blande `BRZ` (=0) og `BRP` (≥0); forveksle `LDA`/`STA`-retning.
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 1.5: LMC-maskinkode og selvmodifiserende kode

- **id:** `in1020-1-5` · **number:** 1.5 · **estimatedMinutes:** 50 · **prerequisites:** `in1020-1-4` · **kapitteltype:** teori
- **description:** Maskinkode (3-sifrede opkoder), dekoding til assembly, selvmodifiserende kode og reverse tracing («hvilken input gir utskrift X?»).
- **Eksamensbelegg:** Sjanger C, 100 %. De to faste vriene: selvmodifiserende kode og reverse tracing. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **maskinkode-dekoding**: 3-sifret tall → opkode + adresse (`1xx`=ADD, `2xx`=SUB, `3xx`=STA, `5xx`=LDA, `6xx`=BRA, `7xx`=BRZ, `8xx`=BRP, `901`=INP, `902`=OUT, `922`=OTC, `000`=HLT). **Selvmodifiserende kode**: instruksjoner *er* tall i minnet → et program kan addere til en instruksjon og flytte et hopp (mønster: `DAT 600` er `BRA 00`; ved å legge til brukerinput hopper koden til ulike rutiner). **Reverse tracing**: «hvilken input gir utskrift X?» — resonner baklengs (mønster: absoluttverdi-program der både `−2` og `2` gir `2`). **Notasjons- og konstruksjonsliste:** opkode-tabellen (3-sifret → mnemonic), instruksjon-som-tall-prinsippet.
- **Oppgavesjangre:** C (F1/F4). Mønstereksempel (F1): «Maskinkoden `508 305 000` tilsvarer … (kryss av): (a) `LDA 08` (b) `STA 05` (c) `HLT` (d) `ADD 08`» — a,b,c riktige; d begrunnes gal.
- **Typiske feil:** Overse selvmodifiserende kode (spor blir feil, §#7); dekode opkoden feil; regne reverse tracing bare for én input når flere gir samme utskrift; blande opkodene (5xx=LDA vs. 3xx=STA).
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 1.6: DRILL — LMC-sporing, fyll-inn og reverse tracing

- **id:** `in1020-1-6` · **number:** 1.6 · **estimatedMinutes:** 80 · **prerequisites:** `in1020-1-5` · **kapitteltype:** drill
- **description:** Full drill på sjanger C: spor programmer mekanisk, fyll inn riktig instruksjon, dekod maskinkode og løs reverse tracing.
- **Eksamensbelegg:** Sjanger C, 100 %. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) sett opp sporetabell (PC, akkumulator, hver minnecelle); 2) utfør én instruksjon per rad, følg PC; 3) for **fyll-inn**: velg av BRZ/BRA/BRP eller LDA/STA så programmet gjør det beskrevet (mønster: gange-program H2022); 4) for **selvmodifiserende**: oppdater minnecellen som endres; 5) for **reverse**: finn *alle* input som gir utskriften. Sensor-kommentert case med margnotat. 12–16 oppgaver (F1/F4) som roterer sporing, fyll-inn, maskinkode-dekoding, selvmodifiserende og reverse.
- **Oppgavesjangre:** C. Mønstereksempel (F4, fyll-inn): «Hvilken instruksjon må stå i celle 07 for at løkka skal gjenta til akkumulator = 0?»
- **Typiske feil:** Slurve med sporetabellen; velge feil hoppinstruksjon (BRZ vs. BRP); glemme selvmodifisering; oppgi bare én reverse-input.
- **Quiz: 26 · Flashcards: 10**

#### Kapittel 1.7: Tegn, filformater, farger og komprimering

- **id:** `in1020-1-7` · **number:** 1.7 · **estimatedMinutes:** 45 · **prerequisites:** `in1020-1-1` · **kapitteltype:** teori
- **description:** ASCII/UTF-8, RGB-fargekoder i hex, og skillet tapsfri vs. tapskomprimert — og hva ASCII/UTF-8/vektorgrafikk egner seg til.
- **Eksamensbelegg:** Sjanger A-slekt + filformater, 50 % **voksende** (H2020/22/23). Prioritet: **kjenne** (men prioritér gitt trenden). Ligger sist i delen (nivå 3).
- **Innholdskontrakt:** `definition` ASCII (7-bit tegnkoding) og UTF-8 (variabel lengde, bakoverkompatibel med ASCII). `theorem` **RGB-hex**: del strengen i tre byte (R, G, B), konverter hver til desimal (`0xA07CD1` → R=160, G=124, B=209). `definition` **tapsfri** (f.eks. ZIP, PNG — rekonstruerer eksakt) vs. **tapskomprimert** (f.eks. JPEG, MP3 — forkaster informasjon); rastergrafikk vs. **vektorgrafikk** (skalerbar, beskriver former). **Notasjons- og konstruksjonsliste:** RGB-byte-inndeling, hex→desimal per byte, ASCII-utdrag.
- **Oppgavesjangre:** F1/F2/F3. Mønstereksempel (F3): «Plasser hvert format i riktig kolonne: tapsfri / tapskomprimert.»
- **Typiske feil:** Feil byte-inndeling av RGB-strengen; tro JPEG er tapsfritt; blande ASCII (7-bit) og UTF-8 (variabel); tro vektorgrafikk egner seg til fotografier.
- **Quiz: 20 · Flashcards: 24**

**Prøve-kvote Del 1:** 4 prøver (Digital representasjon og assemblerkode)
1. Prøve 1.A (25 min): Tallkonvertering direkte + sortering på ulik base (sjanger A, F1/F3).
2. Prøve 1.B (25 min): 2-er komplement — begge tolkninger + byte-addisjon (sjanger B, F1/F2).
3. Prøve 1.C (35 min): LMC-sporing + fyll-inn + maskinkode-dekoding (sjanger C, F1/F4).
4. Prøve 1.D (30 min): Blandet seksjon 1 — reverse tracing + selvmodifiserende + filformater (C/A, F1–F4).

---

### Del 2 — Maskinvare og arkitektur *(SEKSJON 2 — må bestås)*

> Seksjon 2 blander en garantert mekanikk (logiske porter/kretsanalyse, 100 %/83 %),
> et fast faktasett (arkitektur, 100 %) og to voksende regne-/rangeringstemaer (cache
> 67 %↑, abstraksjonsnivå 33 %↑). **K-map, multiplekser og dekoder er ikke pensum** og
> nevnes kun kort i 2.2.

#### Kapittel 2.1: Logiske porter — identifikasjon og identiteter

- **id:** `in1020-2-1` · **number:** 2.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** De sju portene (AND/OR/XOR/NAND/NOR/XNOR/NOT), å identifisere dem fra symbol og sannhetstabell, og de faste identitetene.
- **Eksamensbelegg:** Sjanger D, 100 %. Port-ID fra symbol er en fast oppgave. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition`-blokker: hver port med **symbol, sannhetstabell og boolsk uttrykk**. `theorem` **identiteter (sant/usant)**: XNOR = invertert XOR = `(A⊕B)′`; enhver funksjon kan lages med kun {INV, OR}, kun {NAND} eller kun {NOR} (**funksjonell kompletthet**); en portutgang kan være inngang på flere porter; en port har **bare én** utgang. Notasjon: `A′`/`Ā` (NOT), `A·B`/`AB` (AND), `A+B` (OR), `⊕` (XOR). **Notasjons- og konstruksjonsliste:** portsymboler, boolsk skrivemåte, sannhetstabell-oppsett.
- **Oppgavesjangre:** D (F1/F2/F3). Mønstereksempel (F3): «Koble hvert portsymbol til riktig navn.»
- **Typiske feil:** Forveksle XOR og XNOR (§ identiteter); forveksle NAND og NOR; tro en port kan ha flere utganger; blande AND-symbolet med OR-symbolet.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 2.2: Kretsanalyse og boolsk algebra

- **id:** `in1020-2-2` · **number:** 2.2 · **estimatedMinutes:** 50 · **prerequisites:** `in1020-2-1` · **kapitteltype:** teori
- **description:** Skriv det boolske uttrykket F for en krets ved å propagere port for port, og kjenn igjen algebraisk **ekvivalente** uttrykk. (K-map/multiplekser/dekoder nevnes her kun som **ikke-pensum**.)
- **Eksamensbelegg:** Sjanger D (kretsanalyse), 83 %. Flere ekvivalente former er ofte alternativer samtidig. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **kretsanalyse-prosedyre**: propagér uttrykket **gate for gate fra inngangene** til F. `theorem` **boolske identiteter** for forenkling: `A+A=A`, `A·A=A`, `A+A′=1`, `A·A′=0`, kommutativitet (`A+C=C+A`), De Morgan (`(A·B)′=A′+B′`). Fordi flere **ekvivalente** uttrykk kan være alternativer samtidig (`A+C`=`C+A`; `(A+A)′`=`A′`): forenkl og **kryss av alle** ekvivalente former (F1). **Ikke-pensum (kort merknad, ikke drill):** Karnaugh-diagram, multiplekser, dekoder — nevnt for kontekst, eksplisitt utenfor pensum. **Notasjons- og konstruksjonsliste:** boolsk notasjon, identitetsliste, «propagér fra inngang»-metoden.
- **Oppgavesjangre:** D (F1). Mønstereksempel (F1): «Hvilke av disse uttrykkene er lik utgangen F for kretsen? (kryss av alle ekvivalente).»
- **Typiske feil:** Bare krysse av én av flere ekvivalente former; propagere feil vei (fra utgang mot inngang); glemme De Morgan ved forenkling; drille K-map/mux/dekoder (ikke-pensum, §#10).
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 2.3: DRILL — Port-ID og kretsanalyse

- **id:** `in1020-2-3` · **number:** 2.3 · **estimatedMinutes:** 80 · **prerequisites:** `in1020-2-2` · **kapitteltype:** drill
- **description:** Full drill på sjanger D: identifiser porter, skriv F for kretser, og kryss av alle ekvivalente uttrykk.
- **Eksamensbelegg:** Sjanger D, porter 100 % / kretsanalyse 83 %. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) for **port-ID**: match symbol/sannhetstabell mot de sju portene; 2) for **kretsanalyse**: propagér gate for gate fra inngangene til F; 3) forenkl med boolske identiteter; 4) kryss av **alle** ekvivalente former; 5) for identitets-utsagn: bruk identitetslista. Sensor-kommentert case. 12–16 oppgaver (F1/F2/F3): port-ID, skriv F, ekvivalente uttrykk, sant/usant om identiteter.
- **Oppgavesjangre:** D. Mønstereksempel (F2): «Sant/usant: enhver logisk funksjon kan realiseres med kun NAND-porter.» (Sant.)
- **Typiske feil:** Feil port-ID (XOR/XNOR, NAND/NOR); ufullstendig propagering; overse en ekvivalent form; drille ikke-pensum.
- **Quiz: 26 · Flashcards: 10**

#### Kapittel 2.4: Datamaskinens arkitektur — von Neumann, CPU, ALU, buss, pipeline

- **id:** `in1020-2-4` · **number:** 2.4 · **estimatedMinutes:** 55 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Von Neumann-arkitekturen og maskinvarefaktaene som testes som sant/usant — inkludert de faste «alltid usanne» distraktorene.
- **Eksamensbelegg:** Sjanger F (arkitektur-fakta), 100 %. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition`/`theorem`: **von Neumann** (kode og data i samme minne); **register** = raskt CPU-internt minne (**ikke** RAM, **ikke** bygd av «mange RAM»); **ALU** ligger **inne i** CPU-en og gjør aritmetikk *og* logikk; **databuss** frakter data mellom prosessor og enheter; **fulladder** kan brukes som subtraktor med mente-inn = 1; **pipeline** (overlappende instruksjonstrinn). De faste **«alltid usanne» distraktorene** (`warning`/`theorem`): teknologiutvikling gir *færre* transistorer (usant — det blir flere/mindre); klokkesignalet er lagret i RAM (usant); register er bygd av RAM (usant); ALU ligger utenfor CPU (usant); en 64-bits ALU krever 65 stk. 1-bits ALU (usant — det er 64). **Notasjons- og konstruksjonsliste:** CPU/ALU/register/buss/pipeline-begreper, fulladder/subtraktor.
- **Oppgavesjangre:** F (F2). Mønstereksempel (F2): «Sant/usant-matrise om von Neumann, register, ALU, transistorutvikling.»
- **Typiske feil:** De faste distraktorene (§#11): færre transistorer, klokke i RAM, register av RAM, ALU utenfor CPU, 65 ALU-er; tro RAM er raskere enn register.
- **Quiz: 24 · Flashcards: 28**

#### Kapittel 2.5: Minnehierarki og cache-beregning

- **id:** `in1020-2-5` · **number:** 2.5 · **estimatedMinutes:** 50 · **prerequisites:** `in1020-2-4` · **kapitteltype:** teori
- **description:** Minnehierarkiet (register → cache → RAM → disk) og cache-beregningen som vektet snitt av treff og bom — et voksende, fast tema.
- **Eksamensbelegg:** Sjanger E (cache), 67 % **voksende** (fast fra H2019). Prioritet: **kunne** (prioritér gitt trenden).
- **Innholdskontrakt:** `text` minnehierarkiet (raskt/dyrt/lite øverst → tregt/billig/stort nederst); lokalitetsprinsippet (kort). `theorem` **cache-beregning**: total tid = `(#treff)·1 + (#bom)·(bom-kostnad)` klokkesykler; med bom-rate: del instruksjonene i treff (1 sykel) og bom (angitt kostnad), vekt og summer (mønster H2022: 3000 instruksjoner, 50 % bom à 4 sykler → `1500·1 + 1500·4 = 7500` sykler). **Notasjons- og konstruksjonsliste:** treff/bom, bom-kostnad, klokkesykel, bom-rate. *(Moores lov/flip-flop nevnes kun kort som nedtonet — ikke drill.)*
- **Oppgavesjangre:** E (F1/F4). Mønstereksempel (F4): «3000 instruksjoner, 40 % bom, bom-kostnad 10 sykler. Totalt antall sykler?» (`1800·1 + 1200·10 = 13 800`.)
- **Typiske feil:** Bruke antall treff der bom skal telles (eller motsatt); glemme at treff koster 1 sykel; regne prosent feil; ta med Moores lov/flip-flop som eksamensstoff (nedtonet).
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 2.6: Abstraksjonsnivåer

- **id:** `in1020-2-6` · **number:** 2.6 · **estimatedMinutes:** 40 · **prerequisites:** `in1020-2-4` · **kapitteltype:** teori
- **description:** Rangeringen fra høyt til lavt abstraksjonsnivå — fra instruksjon ned til volt — en ny, voksende dra-og-slipp-oppgave.
- **Eksamensbelegg:** Sjanger F (abstraksjonsnivå), 33 % **ny/voksende** (H2022/23). Prioritet: **kunne** (prioritér gitt at den er ny fast). Kompakt kapittel.
- **Innholdskontrakt:** `theorem` **abstraksjonsordningen (høyt → lavt):** instruksjon (f.eks. `STA 04`) → pipeline → register → logiske porter/invertere → transistor → logiske verdier → volt. Intuisjon per nivå (kort). **Notasjons- og konstruksjonsliste:** de sju nivåene i rekkefølge, «høyt = fjernt fra fysikken».
- **Oppgavesjangre:** F (F3, dra-og-slipp). Mønstereksempel (F3): «Sorter disse elementene fra høyest til lavest abstraksjonsnivå.»
- **Typiske feil:** Snu rangeringen; plassere register over instruksjon; blande logiske verdier og volt (verdier er høyere/mer abstrakt enn volt).
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 2.7: DRILL — Arkitektur-fakta, cache og abstraksjonsnivå

- **id:** `in1020-2-7` · **number:** 2.7 · **estimatedMinutes:** 80 · **prerequisites:** `in1020-2-6` · **kapitteltype:** drill
- **description:** Full drill på sjanger E + F: sant/usant om arkitektur (med de faste distraktorene), cache-beregning og abstraksjonsrangering.
- **Eksamensbelegg:** Sjanger F 100 % + E 67 %↑. Prioritet: **perfekt** (fakta) / **kunne** (cache).
- **Innholdskontrakt (løsningsoppskrift):** 1) for **fakta** (F2): sjekk mot de faste sanne/usanne påstandene, vær særlig obs på de fem «alltid usanne» distraktorene; 2) for **cache** (F4): vektet snitt treff/bom, vis mellomregning med enheter; 3) for **abstraksjon** (F3): sorter etter fastordningen. Sensor-kommentert case med bonus/minus-notat (maskinvaredelen gir bonus for full pott). 12–16 oppgaver.
- **Oppgavesjangre:** E, F. Mønstereksempel (F2 + F4 blandet).
- **Typiske feil:** De faste distraktorene (§#11); cache-regnefeil (treff/bom-forveksling); snudd abstraksjonsrangering.
- **Quiz: 24 · Flashcards: 10**

**Prøve-kvote Del 2:** 4 prøver (Maskinvare og arkitektur)
1. Prøve 2.A (25 min): Port-ID + identiteter (sjanger D, F1/F2/F3).
2. Prøve 2.B (30 min): Kretsanalyse — skriv F + ekvivalente uttrykk (sjanger D, F1).
3. Prøve 2.C (30 min): Arkitektur-fakta med de faste distraktorene (sjanger F, F2).
4. Prøve 2.D (30 min): Cache-beregning + abstraksjonsrangering (sjanger E/F, F3/F4).

---

### Del 3 — Datasikkerhet *(SEKSJON 3 — må bestås)*

> Seksjon 3 er den mest begrepstunge, og skillene sensor oftest presiserer sitter her:
> **mål vs. tiltak** (den hyppigst påpekte feilen) og **nøkkelretning** i asymmetrisk
> krypto. Digital signatur gir **ikke** konfidensialitet — den enkeltinnsikten som
> testes hvert år.

#### Kapittel 3.1: Sikkerhetsmål vs. sikkerhetstiltak

- **id:** `in1020-3-1` · **number:** 3.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Skillet mellom sikkerhets*mål* (hva vi vil oppnå) og sikkerhets*tiltak* (hvordan) — det hyppigst påpekte skillet i hele faget.
- **Eksamensbelegg:** Sjanger G, 100 %. Å krysse et tiltak som «mål» gir minuspoeng. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **sikkerhetsmål**: Konfidensialitet, Integritet, Tilgjengelighet (CIA) + Sporbarhet, Uavviselighet, Autentisitet, Personvern. `definition` **sikkerhetstiltak**: brannmur, kryptering, sikkerhetskopiering, tofaktor, tilgangskontroll, antivirus, sikkerhetsøvelser. `theorem` **kobling tiltak → mål**: diskkryptering/HTTPS/tofaktor → **konfidensialitet**; sjekksum/hash → **integritet** (*ikke* konfidensialitet); redundans/backup → **tilgjengelighet**. **Notasjons- og konstruksjonsliste:** de sju målene, de vanlige tiltakene, tiltak→mål-tabellen.
- **Oppgavesjangre:** G (F1/F3). Mønstereksempel (F3): «Dra hvert element til riktig kolonne: mål / tiltak.»
- **Typiske feil:** Blande mål og tiltak (§#1 — den hyppigste feilen); krysse hash/sjekksum for konfidensialitet (§#9 — det er integritet); tro brannmur/backup/tofaktor er «mål».
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 3.2: Trusselmodellering og risiko

- **id:** `in1020-3-2` · **number:** 3.2 · **estimatedMinutes:** 45 · **prerequisites:** `in1020-3-1` · **kapitteltype:** teori
- **description:** Koble en trussel til det målet den bryter, og regne risiko = sannsynlighet × konsekvens.
- **Eksamensbelegg:** Sjanger G, 100 %. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **trussel → brutt mål**: DDoS/løsepengevirus/manglende oppdatering → **tilgjengelighet**; tastelogger/spionvare/USB-tyveri → **konfidensialitet**; DNS-modifisering/forfalsket nettside/rootkit/man-in-the-middle → **integritet** (evt. autentisitet); identitetstyveri/forfalsket nettside → **autentisitet**. `theorem` **risiko = sannsynlighet × konsekvens**. `text` at fysisk tilgang/innsidetrussel kan omgå «så og si alle» andre tiltak, og at et lukket/internt system **ikke** er «uten risiko». **Notasjons- og konstruksjonsliste:** trussel→mål-tabellen, risikoformelen.
- **Oppgavesjangre:** G (F3/F1). Mønstereksempel (F3): «Koble hver trussel til målet den primært bryter.»
- **Typiske feil:** Feil trussel→mål-kobling; tro et lukket system er uten risiko (§#12); glemme at én trussel kan bryte flere mål; regne risiko uten både sannsynlighet og konsekvens.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 3.3: Symmetrisk og asymmetrisk kryptering

- **id:** `in1020-3-3` · **number:** 3.3 · **estimatedMinutes:** 50 · **prerequisites:** `in1020-3-1` · **kapitteltype:** teori
- **description:** Symmetrisk (én delt nøkkel) vs. asymmetrisk (privat/offentlig nøkkelpar), og hvilken nøkkel som brukes til hva.
- **Eksamensbelegg:** Sjanger H, 100 %. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **symmetrisk kryptering**: én delt hemmelig nøkkel; rask, egnet for store datamengder; utfordringen er trygg nøkkelutveksling; gir konfidensialitet, **ikke** uavviselighet. `definition` **asymmetrisk kryptering**: privat/offentlig nøkkelpar; offentlig nøkkel kan distribueres over åpen kanal. `theorem` **hemmelig melding (retning)**: sender krypterer med **mottakerens offentlige** nøkkel; mottaker dekrypterer med **sin private**. **Notasjons- og konstruksjonsliste:** delt nøkkel, privat/offentlig nøkkelpar, krypter/dekrypter-retning.
- **Oppgavesjangre:** H (F1/F4). Mønstereksempel (F4): «For å sende en hemmelig melding til Bob, krypterer Alice med … (Bobs offentlige nøkkel).»
- **Typiske feil:** Snu nøkkelretningen for hemmelig melding (§#5); tro symmetrisk gir uavviselighet; tro asymmetrisk er raskt for store datamengder; blande hvem som deler hvilken nøkkel.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 3.4: Digital signatur, hash og PKI

- **id:** `in1020-3-4` · **number:** 3.4 · **estimatedMinutes:** 50 · **prerequisites:** `in1020-3-3` · **kapitteltype:** teori
- **description:** Digital signatur (senderens private nøkkel signerer), hash for integritet, og PKI/sertifikater — inkludert at signatur **ikke** gir konfidensialitet.
- **Eksamensbelegg:** Sjanger H, 100 %. «Riktig nøkkelretning» er det sikkerhetspoenget sensor oftest presiserer. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **digital signatur (retning)**: sender signerer med **sin private** nøkkel; mottaker validerer med **senderens offentlige** nøkkel. `warning`/`theorem` **signatur gir uavviselighet/autentisitet, IKKE konfidensialitet** (alle med den offentlige nøkkelen kan lese innholdet). `definition` **hash-algoritme**: sikrer **integritet** (ikke konfidensialitet). `definition` **PKI / digitale sertifikater**: binder en offentlig nøkkel til en identitet, hindrer falske nøkler/tjenester. `definition` **nulldagssårbarhet** (ukjent for leverandøren), **trojaner** (skadelig funksjon skjult i nyttig program). **Notasjons- og konstruksjonsliste:** signer/valider-retning, hash, PKI/sertifikat.
- **Oppgavesjangre:** H (F1/F2). Mønstereksempel (F2): «Sant/usant: en digital signatur skjuler innholdet i meldingen.» (Usant — gir ikke konfidensialitet.)
- **Typiske feil:** Tro signatur gir konfidensialitet (§#4); snu signer/valider-nøklene (§#5); krysse hash for konfidensialitet (§#9); blande signatur og kryptering av selve meldingen.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 3.5: DRILL — Mål/tiltak, nøkkelretning og trusselkobling

- **id:** `in1020-3-5` · **number:** 3.5 · **estimatedMinutes:** 80 · **prerequisites:** `in1020-3-4` · **kapitteltype:** drill
- **description:** Full drill på sjanger G + H: skill mål fra tiltak, koble tiltak/trussel til mål, og velg riktig nøkkelretning for signatur vs. hemmelig melding.
- **Eksamensbelegg:** Sjanger G + H, begge 100 %. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) **mål/tiltak** (F3): plasser hvert element (mål = ønsket egenskap; tiltak = mekanisme); 2) **tiltak→mål** og **trussel→mål**: bruk koblingstabellene; 3) **nøkkelretning** (F4): signering = senders **private** → validering = senders **offentlige**; hemmelig melding = mottakers **offentlige** → dekryptering = mottakers **private**; 4) **hash = integritet, ikke konfidensialitet**; 5) **signatur ≠ konfidensialitet**. Sensor-kommentert case med margnotat om hvorfor hver distraktor er gal (negativ poenggiving). 12–16 oppgaver (F1/F2/F3/F4).
- **Oppgavesjangre:** G, H. Mønstereksempel (F1): «Kryss av alle som gir konfidensialitet: (a) HTTPS (b) hash (c) diskkryptering (d) digital signatur.» (a,c riktige; b,d begrunnes gale.)
- **Typiske feil:** §#1 (mål/tiltak), §#4 (signatur=konfidensialitet), §#5 (snudde nøkler), §#9 (hash=konfidensialitet).
- **Quiz: 26 · Flashcards: 10**

#### Kapittel 3.6: Autentisering, tilgangskontroll og passord

- **id:** `in1020-3-6` · **number:** 3.6 · **estimatedMinutes:** 45 · **prerequisites:** `in1020-3-1` · **kapitteltype:** teori
- **description:** Tofaktor-autentisering, tilgangskontroll, og hvorfor salting + hashing av passord virker mot phishing og brute-force.
- **Eksamensbelegg:** Sjanger G-slekt, 83 %. Prioritet: **kunne**.
- **Innholdskontrakt:** `definition` **autentisering** (bekrefte identitet) vs. **autorisasjon/tilgangskontroll** (hva du får lov til). `definition` **tofaktor** (noe du vet + noe du har/er). `theorem` **passordlagring**: aldri i klartekst; **hash** + **salt** (unik per bruker → hindrer oppslagstabeller/rainbow-tables og at like passord ser like ut). Hvorfor tofaktor demper phishing/brute-force. **Notasjons- og konstruksjonsliste:** autentisering vs. autorisasjon, hash, salt, faktortyper.
- **Oppgavesjangre:** F1/F2. Mønstereksempel (F2): «Sant/usant: salting gjør at to like passord får ulik lagret verdi.» (Sant.)
- **Typiske feil:** Blande autentisering og autorisasjon; tro hashing uten salt hindrer rainbow-tables; tro tofaktor er «to passord»; lagre/sammenligne passord i klartekst.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 3.7: Personvern, GDPR og skadevare

- **id:** `in1020-3-7` · **number:** 3.7 · **estimatedMinutes:** 50 · **prerequisites:** `in1020-3-2` · **kapitteltype:** teori
- **description:** GDPR-kjernen (behandlingsansvar ved skybruk, innsynsrett, dataminimering) og skadevare-typologien (orm, virus, trojaner, rootkit, tastelogger, logisk bombe, bakdør).
- **Eksamensbelegg:** Sjanger I, GDPR 67 % / skadevare 50 %. Prioritet: **kunne** (GDPR) / **kjenne** (skadevare). Ligger sist i delen.
- **Innholdskontrakt:** `theorem` **GDPR-kjernen**: den **behandlingsansvarlige** virksomheten er juridisk ansvarlig **selv om** drift settes bort til en tredjepart (skyleverandør); den registrerte har **innsynsrett**; prinsipper = lovlig/rettferdig/åpen behandling, riktighet, **dataminimering**, formålsbegrensning + egnede tekniske/organisatoriske tiltak. **Feil** å hevde at samtykke *alltid* kreves for *all* behandling, eller at man kan «se bort fra» loven fordi behandlingen er nødvendig; loven rammer først og fremst **virksomheter** (gebyrer). `definition`-blokker **skadevare**: orm (sprer seg selv over nett), virus (fester seg til vertsfil), trojaner (skjult i nyttig program), rootkit (skjuler seg dypt i systemet), tastelogger, logisk bombe (utløses av betingelse), bakdør. **Notasjons- og konstruksjonsliste:** behandlingsansvarlig/databehandler, innsynsrett, dataminimering, skadevaretypene.
- **Oppgavesjangre:** I (F1/F2/F3). Mønstereksempler: (F3) «Koble hver skadevaretype til beskrivelsen.»; (F2) «Sant/usant: en virksomhet slipper GDPR-ansvar ved å bruke en skyleverandør.» (Usant.)
- **Typiske feil:** Tro skyleverandøren overtar behandlingsansvaret; tro samtykke alltid kreves; blande orm og virus (selv-spredning vs. vertsfil); blande trojaner og rootkit.
- **Quiz: 20 · Flashcards: 24**

**Prøve-kvote Del 3:** 4 prøver (Datasikkerhet)
1. Prøve 3.A (25 min): Mål vs. tiltak + tiltak→mål (sjanger G, F1/F3).
2. Prøve 3.B (30 min): Kryptering + digital signatur — nøkkelretning + «signatur ≠ konfidensialitet» (sjanger H, F1/F4).
3. Prøve 3.C (30 min): Trusselmodellering + risiko + autentisering/passord (sjanger G, F1/F3).
4. Prøve 3.D (30 min): Personvern/GDPR + skadevare (sjanger I, F2/F3).

---

### Del 4 — Datanettverk *(SEKSJON 4 — må bestås)*

> Seksjon 4 er der flest stryker: subnetting og byte→bit-fellen feller mange. Delen
> rommer to garanterte regneteknikker (subnetting 100 %, overføringstid 83 %), et fast
> protokoll/lag-sett (100 %) og et tjenestesett (100 %). **OSI-7-lag og private
> IP-klasser er ikke pensum** — bruk TCP/IP-modellens fire lag.

#### Kapittel 4.1: TCP/IP-modellen — lag og protokoller

- **id:** `in1020-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** TCP/IP-modellens fire lag, hva hvert lag har ansvar for, TCP vs. UDP, og hvilket transportlag hver protokoll bruker.
- **Eksamensbelegg:** Sjanger J (protokoller/lag), 100 %. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **TCP/IP-modellens fire lag**: applikasjon, transport, nettverk, link (+ fysisk). Lag-ansvar: **ruting skjer i nettverkslaget** (ikke transport). `theorem` **TCP vs. UDP**: TCP = pålitelig/tilkoblingsorientert, rekkefølge, flytkontroll, metningskontroll, sjekksum — men **ikke** kryptering eller ruting; UDP = raskt, tilkoblingsløst. `theorem` **protokoll → transportlag**: HTTP/IMAP/SMTP/FTP/DASH → **TCP**; DHCP → **UDP**; DNS → **TCP og/eller UDP**. **Ikke-pensum (kort merknad):** OSI-7-lagsmodellen — nevnt for kontekst, bruk TCP/IP-modellen. **Notasjons- og konstruksjonsliste:** de fire lagene, TCP/UDP-egenskaper, protokoll→transport-tabellen.
- **Oppgavesjangre:** J (F3/F1). Mønstereksempel (F3): «Plasser hver protokoll på riktig transportlag (TCP / UDP / begge).»
- **Typiske feil:** Tro TCP krypterer eller ruter (§ ruting er nettverkslaget); plassere DHCP på TCP; tro DNS bare bruker det ene; bruke OSI-7-lag (ikke-pensum, §#10).
- **Quiz: 24 · Flashcards: 26**

#### Kapittel 4.2: IP-adressering og subnetting

- **id:** `in1020-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `in1020-1-1` · **kapitteltype:** teori
- **description:** CIDR-notasjon, antall tildelbare verter (`2^n − 2`), og subnett-/broadcast-adresse regnet i binært (AND/OR).
- **Eksamensbelegg:** Sjanger J (subnetting), 100 %. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **CIDR** = antall 1-ere i nettmasken (255 = 8 per oktett; regn på den delvise oktetten: `248 = 11111000` → /29, `224 = 11100000` → /27). `theorem` **tildelbare verter** = `2^(vertsbit) − 2` (nett- og kringkastingsadresse reservert): /16 → 65534; /29 → `2³ − 2 = 6`; /27 → `2⁵ − 2 = 30`. `theorem` **subnettadresse** = `IP AND maske`; **broadcast** = `IP OR (¬maske)` — regn i binært på den relevante oktetten. **Notasjons- og konstruksjonsliste:** CIDR (`/n`), nettmaske, vertsbit, `2^n − 2`, AND/OR på oktett, subnett/broadcast.
- **Oppgavesjangre:** J (F4/F1). Mønstereksempel (F4): «En /27-maske gir hvor mange tildelbare verter?» (`2⁵ − 2 = 30`.)
- **Typiske feil:** Glemme `− 2` i vertstallet (§#3); telle CIDR-bit feil; regne AND/OR på feil oktett; blande subnett- og broadcast-regelen.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 4.3: Overføringstid og ytelse

- **id:** `in1020-4-3` · **number:** 4.3 · **estimatedMinutes:** 45 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Overføringstid = filstørrelse (byte × 8) delt på raten (bit/s) — og byte→bit-fellen som feller flest.
- **Eksamensbelegg:** Sjanger J (overføringstid), 83 %. Den vanligste tallfellen i faget. Prioritet: **kunne** (men avgjør ofte om seksjonen bestås).
- **Innholdskontrakt:** `theorem` **overføringstid** = `filstørrelse[byte] × 8 / rate[bit/s]`. Regneeksempler: `200 MB ÷ 20 Mbit/s = 1600 Mbit ÷ 20 = 80 s`; `150 MB × 8 ÷ 50 Mbit/s = 24 s`; `800 MB × 8 ÷ 50 Mbit/s = 128 s`. Pass på «ned»-hastigheten ved nedlasting. **Notasjons- og konstruksjonsliste:** byte vs. bit (×8), MB/Mbit, rate i bit/s, ned-/opp-hastighet.
- **Oppgavesjangre:** J (F4). Mønstereksempel (F4): «En 250 MB fil over 50 Mbit/s tar hvor lang tid?» (`250 × 8 ÷ 50 = 40 s`.)
- **Typiske feil:** Glemme byte→bit-omregningen (×8) → svar en faktor 8 for lite (§#2); bruke opp- der ned-hastighet gjelder; blande MB og Mbit; dele feil vei.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 4.4: DRILL — Subnetting, adresseregning og overføringstid

- **id:** `in1020-4-4` · **number:** 4.4 · **estimatedMinutes:** 85 · **prerequisites:** `in1020-4-3` · **kapitteltype:** drill
- **description:** Full drill på de to garanterte nettverksregneteknikkene: subnett/broadcast/vertstall og overføringstid — de billigste, mest felle-utsatte poengene i seksjon 4.
- **Eksamensbelegg:** Sjanger J, subnetting 100 % + overføringstid 83 %. Prioritet: **perfekt** (subnetting) / **kunne** (overføring).
- **Innholdskontrakt (løsningsoppskrift):** For **subnetting**: 1) tell 1-ere i masken → CIDR; 2) vertsbit = 32 − CIDR; 3) tildelbare verter = `2^vertsbit − 2`; 4) subnett = `IP AND maske`, broadcast = `IP OR ¬maske` (binært på relevant oktett). For **overføringstid**: 1) byte × 8 → bit; 2) del på rate i bit/s; 3) hold enhetene. Sensor-kommentert case som demonstrerer begge feller (glemt `− 2`, glemt ×8). 14–16 oppgaver (F4/F1).
- **Oppgavesjangre:** J. Mønstereksempel (F4): «For IP 192.168.10.70 med maske /26: oppgi subnettadresse, broadcast og antall tildelbare verter.»
- **Typiske feil:** §#3 (glemt `− 2`); §#2 (glemt ×8); AND/OR på feil oktett; CIDR-telling.
- **Quiz: 26 · Flashcards: 10**

#### Kapittel 4.5: Nettjenester — NAT, CDN, DNS, IPv6, DHCP, streaming

- **id:** `in1020-4-5` · **number:** 4.5 · **estimatedMinutes:** 50 · **prerequisites:** `in1020-4-1` · **kapitteltype:** teori
- **description:** Kjernetjenestene og hva hver løser: NAT, CDN, DNS, IPv6, DHCP og HTTP-streaming (DASH).
- **Eksamensbelegg:** Sjanger J (tjenester), 100 %. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition`-blokker: **NAT** (mange enheter deler én offentlig IP); **CDN** (flytter innhold fysisk nærmere brukeren, avlaster origin, sparer kjernenett); **DNS** (navn → IP; prefetching); **IPv6** (øker antallet globalt adresserbare IP-adresser); **DHCP** (tildeler IP automatisk, over UDP); **HTTP-streaming/DASH** (video i segmenter/kvaliteter, klienten velger kvalitet, bruker TCP). **Notasjons- og konstruksjonsliste:** hver tjeneste med kjerneoppgave; origin/kjernenett, segment/kvalitet.
- **Oppgavesjangre:** J (F1/F3). Mønstereksempel (F3): «Koble hver tjeneste til hva den primært løser.»
- **Typiske feil:** Blande NAT (adressedeling) og DNS (navneoppslag); tro IPv6 «gjør nettet raskere» (den øker adresserommet); tro streaming bruker UDP (DASH bruker TCP); blande CDN med caching i nettleseren.
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 4.6: Aksessmodeller, svitsjing og operativsystemer

- **id:** `in1020-4-6` · **number:** 4.6 · **estimatedMinutes:** 45 · **prerequisites:** `in1020-4-1` · **kapitteltype:** teori
- **description:** Klient-tjener vs. peer-to-peer, linje- vs. pakkesvitsjing, og operativsystemets rolle (ressursstyring, maskinvareabstraksjon, kjerne-/brukermodus).
- **Eksamensbelegg:** Sjanger J (aksess/svitsjing 67 %) + K (OS, ny fast gjenganger H2023). Prioritet: **kjenne** (aksess/svitsjing) / **kunne** (OS, gitt at den er ny fast). Ligger sist i delen.
- **Innholdskontrakt:** `definition` **klient-tjener** vs. **peer-to-peer**; **linjesvitsjing** (dedikert bane) vs. **pakkesvitsjing** (data i pakker, deler linjer). `definition`/`theorem` **operativsystem**: fordeler ressurser, lar flere brukere/programmer dele maskinen, tilbyr API-er for lagring/nettverk, **abstraherer bort maskinvaredetaljer**; **kjernemodus** vs. **brukermodus** (vanlige brukerprogrammer kjører i brukermodus). Vanlige feilpåstander: at mobiler ikke trenger OS; at brukerprogrammer kjører i kjernemodus. **Notasjons- og konstruksjonsliste:** aksessmodeller, svitsjetyper, OS-rolle, kjerne-/brukermodus.
- **Oppgavesjangre:** J/K (F2/F3). Mønstereksempel (F2): «Sant/usant: vanlige brukerprogrammer kjører i kjernemodus.» (Usant.)
- **Typiske feil:** Tro mobiler ikke trenger OS; tro brukerprogrammer kjører i kjernemodus; blande linje- og pakkesvitsjing; blande klient-tjener og peer-to-peer.
- **Quiz: 18 · Flashcards: 18**

**Prøve-kvote Del 4:** 4 prøver (Datanettverk)
1. Prøve 4.A (30 min): TCP/IP-lag + protokoll→transport + TCP vs. UDP (sjanger J, F2/F3).
2. Prøve 4.B (35 min): Subnetting — CIDR, `2^n − 2`, subnett/broadcast (sjanger J, F4).
3. Prøve 4.C (25 min): Overføringstid — byte→bit-fellen (sjanger J, F4).
4. Prøve 4.D (30 min): Nettjenester (NAT/CDN/DNS/IPv6/streaming) + aksess/svitsjing + OS (J/K, F1/F2/F3).

---

### Del 5 — Eksamenstrening

#### Kapittel 5.1: Flervalgssjangeren og negativ poenggiving

- **id:** `in1020-5-1` · **number:** 5.1 · **estimatedMinutes:** 40 · **prerequisites:** `in1020-0-1` · **kapitteltype:** teori (sjangerguide)
- **description:** Selve eksamensdisiplinen: hvordan svare på F1–F4 under negativ poenggiving, når man skal la stå åpent, og hvordan sikre at hver av de fire seksjonene bestås.
- **Eksamensbelegg:** Metakapittel over alle svarformer og seksjoner. Trener den viktigste føringen — *begrunn hvorfor hvert alternativ er (u)riktig* og *presisjon slår gjetting*. Prioritet: **perfekt** (påvirker score i alle fire seksjoner).
- **Innholdskontrakt:** `tip`/`text`: (i) **svarform-strategi** — F1 «velg ett *eller flere*»: kryss bare av det du kan begrunne; F2 sant/usant-matrise: sjekk mot de faste distraktorene, husk at noen celler gir 0/nøytralt; F3 dra-og-slipp: alt-eller-ingenting-risiko, dobbeltsjekk «ikke-pensum»-ruta; F4 nedtrekk: delvis uttelling per rad; (ii) **negativ poenggiving** — når lønner det seg å la stå åpent (reell tvil) vs. krysse av (kan begrunnes); aldri under 0 på én oppgave; (iii) **fire-seksjoner-kravet** — fordel tiden så *alle fire* seksjoner får nok; en tom seksjon = ikke bestått uansett de tre andre; (iv) **tidsbudsjett** — ~60 min per seksjon, ikke bli sittende fast. Sammendrag av sensor-metareglene (begrunn hvert alternativ; regn eksplisitt med enheter; delvis/gradert uttelling; robust sensur; flere svar kan være riktige).
- **Oppgavesjangre:** Alle F1–F4 (metanivå). 6–8 «hva bør du krysse av?»-oppgaver: gitt et sett alternativer og en usikkerhetsgrad, avgjør hva som lønner seg under negativ poenggiving.
- **Typiske feil:** Gjette bredt (minustrekk); la en hel seksjon stå tynn; bruke for lang tid på én oppgave; overse at flere alternativer kan være riktige samtidig.
- **Quiz: 14 · Flashcards: 12**

#### Kapittel 5.2: Øvingseksamen 1 — fire seksjoner à 25 poeng

- **id:** `in1020-5-2` · **number:** 5.2 · **estimatedMinutes:** 240 · **prerequisites:** `in1020-5-1` · **kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers flervalgssett etter gjeldende mal (H2022/23): fire seksjoner à 25 poeng, hver må bestås, negativ poenggiving.
- **Eksamensbelegg/miks:** Speiler prognosen. **Seksjon 1 (25 p):** tallkonvertering + 2-er komplement (begge tolkninger) + 3–4 LMC/maskinkode + fargekode/ASCII. **Seksjon 2 (25 p):** port-ID + kretsanalyse + arkitektur-fakta (faste distraktorer) + cache-beregning + abstraksjonsrangering. **Seksjon 3 (25 p):** mål vs. tiltak + kryptering/digital signatur (nøkkelretning) + trusselmodellering + personvern. **Seksjon 4 (25 p):** subnetting (2–3) + overføringstid + protokoll/lag-matrise + NAT/CDN/IPv6/streaming + OS-fakta. Oppgavene i alle fire svarformer (F1–F4). Alle nyskrevne (egne tall/kretser/programmer/kontekster). **Løsningsforslag i `collapsible` per oppgave som begrunner hvert alternativ** (både riktige og gale — negativ poenggiving), med `tip` om delpoeng/bonus og at hver seksjon må bestås. Innledende `tip` om tidsbudsjett (~60 min/seksjon).
- **Innholdskontrakt:** Dekker sjangrene A–K i alle fire seksjoner.
- **Oppgavesjangre:** A–K, svarformer F1–F4.
- **Quiz: 25 · Flashcards: 0**

#### Kapittel 5.3: Øvingseksamen 2 — regnetungt sett

- **id:** `in1020-5-3` · **number:** 5.3 · **estimatedMinutes:** 240 · **prerequisites:** `in1020-5-2` · **kapitteltype:** øvingseksamen
- **description:** Komplett sett med tyngdepunkt på de garanterte regneteknikkene (tallkonvertering, cache, subnetting, overføringstid) og LMC-sporing — men fortsatt full bredde over fire seksjoner.
- **Eksamensbelegg/miks:** Fire seksjoner à 25 p, ekstra vekt på beregning: seksjon 1 med tyngre LMC (selvmodifiserende + reverse) + 2-er komplement-addisjon; seksjon 2 med cache-varianter + kretsanalyse; seksjon 3 full bredde (mål/tiltak/nøkkelretning); seksjon 4 med 3 subnetting-deloppgaver + overføringstid + protokoll-matrise. Alle svarformer, alle nyskrevne. **Løsningsforslag som begrunner hvert alternativ**, med margnotat om de faste fellene (byte→bit, `2^n − 2`, mål/tiltak, nøkkelretning).
- **Innholdskontrakt:** Dekker A–K; supplerer 5.2 med tyngre regning og LMC.
- **Oppgavesjangre:** A–K, F1–F4.
- **Quiz: 25 · Flashcards: 0**

#### Kapittel 5.4: Øvingseksamen 3 — begreps- og faktatungt sett

- **id:** `in1020-5-4` · **number:** 5.4 · **estimatedMinutes:** 240 · **prerequisites:** `in1020-5-3` · **kapitteltype:** øvingseksamen
- **description:** Komplett sett med tyngdepunkt på de begrepstunge seksjonene (arkitektur-fakta, sikkerhet, nettverkstjenester, OS) og de faste distraktorene — der de fleste strykene skjer på feil avkrysning.
- **Eksamensbelegg/miks:** Fire seksjoner à 25 p, ekstra vekt på sant/usant og dra-og-slipp: seksjon 1 med ASCII/OTC + filformater; seksjon 2 med arkitektur-distraktorer + abstraksjonsrangering + port-identiteter; seksjon 3 med trusselkobling + PKI/hash + GDPR + skadevare; seksjon 4 med protokoll/lag-matrise + tjenestekobling + aksess/svitsjing + OS-fakta. Alle svarformer, alle nyskrevne. **Løsningsforslag som eksplisitt begrunner hvorfor hver distraktor er gal** (de faste «alltid usanne» påstandene), med `tip` om at det å vite hva som er galt er halve ferdigheten under negativ poenggiving. De tre settene sammen dekker alle sjangre A–K og alle fire seksjoner flere ganger.
- **Innholdskontrakt:** Dekker A–K; supplerer med begreps-/faktatyngde og distraktortrening.
- **Oppgavesjangre:** A–K, F1–F4.
- **Quiz: 25 · Flashcards: 0**

---

## 5. Summeringskontroll (quiz/flashcards) — AUTORITATIV

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 16 | 14 |
| 1 | 1.1–1.7 | 22+26+22+22+20+26+20 = **158** | 24+12+22+26+20+10+24 = **138** |
| 2 | 2.1–2.7 | 22+22+26+24+20+16+24 = **154** | 24+20+10+28+20+16+10 = **128** |
| 3 | 3.1–3.7 | 22+20+22+22+26+18+20 = **150** | 26+20+22+24+10+20+24 = **146** |
| 4 | 4.1–4.6 | 24+22+18+26+22+18 = **130** | 26+22+16+10+26+18 = **118** |
| 5 | 5.1–5.4 | 14+25+25+25 = **89** | 12+0+0+0 = **12** |
| **Sum** | **32 kap.** | **697 ≥ 500 ✓** (siktemål 600–750) | **556 ≥ 500 ✓** |

Kvotene er **minimum** per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler eksamensformen: **quiz er direkte eksamenstrening** (flervalg med
negativ poenggiving) og er derfor kalibrert høyt — hver quiz-forklaring begrunner
*hvorfor hvert gale alternativ er galt*. De fire delene (én per seksjon som må bestås)
bærer nesten like mye (Del 1–4: 158/154/150/130 quiz), med Del 4 noe lavere fordi den
har 6 kapitler mot de andres 7 — men alle fire er fullverdig dekket. Drillkapitlene
(1.2, 1.6, 2.3, 2.7, 3.5, 4.4) har høyest quiz (26/24) fordi de **er** treningsbanken
for de garanterte regne-/mekanikksjangrene. Flashcards vektes mot **begrep → definisjon
→ fast distraktor** og siktes høyt (556) fordi faget er begrepsrikt (arkitektur-fakta,
skadevaretyper, sikkerhetsmål, LMC-instruksjoner, nettverkstjenester, kryptobegreper)
og eksamen (verifiser) er hjelpemiddelfri. Øvingseksamenene (5.2–5.4) gir 0 flashcards
(rene oppgavesett) men bidrar med 25 quiz hver.

---

## 6. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–4 → 16 prøver)

Hver prøve er nyskrevne flervalgsoppgaver i eksamens svarformer (F1–F4), med
løsningsforslag som begrunner hvert alternativ og oppgir poeng-/minusfordeling.
Prøvekapitler bygges som `in1020-<del>-prove` (chapterNumber `<del>.P`) etter
plattformmønsteret, eller som egne exercise-seksjoner i delens siste kapittel.
Prøvekvotene per del står i sluttblokken til hver del over (Del 1–4). Del 0 og Del 5
får ikke egne prøver (Del 5 **er** øvingseksamenene).

### Øvingseksamener (3 komplette sett — se kap. 5.2–5.4)

| Sett | Profil | Miks |
|---|---|---|
| Øvingseksamen 1 (5.2) | Typisk gjeldende sett (H2022/23-mal) | 4 seksjoner à 25 p, full bredde, alle F1–F4 |
| Øvingseksamen 2 (5.3) | Regnetungt sett | 4 seksjoner à 25 p, vekt på tall/LMC/cache/subnetting/overføringstid |
| Øvingseksamen 3 (5.4) | Begreps-/faktatungt sett | 4 seksjoner à 25 p, vekt på sant/usant + dra-og-slipp + faste distraktorer |

Hvert sett er bygd som **fire seksjoner à 25 poeng der hver må bestås**, med negativ
poenggiving, og løsningsforslag som begrunner hvert alternativ. Til sammen dekker de
tre settene alle sjangre A–K og alle fire seksjoner flere ganger.

---

## 7. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — én firetimers digital flervalgseksamen (Inspera),
   bestått/ikke bestått, **negativ poenggiving**, **fire seksjoner à 25 p som hver må
   bestås**, hjelpemiddel-avviket (`verifiser` — tren for ingen hjelpemidler),
   korona-caveaten (H2020 ikke representativ), og at **bredden er eksamensformen** (fra
   kap. 0.1).
2. **Prioriteringskartet** — temafrekvens-tabellen omgjort til tre lesenivåer:
   **perfekt** (tallkonvertering + 2-er komplement, LMC-sporing, porter/kretsanalyse,
   mål/tiltak + trusselmodellering, subnetting/IP + protokoller/tjenester), **kunne**
   (overføringstid, cache, autentisering, GDPR, abstraksjonsnivå, OS), **kjenne**
   (filformater/ASCII, aksessmodeller/svitsjing, skadevare).
3. **Svarform- og sjangerguiden** — F1–F4 (velg ett/flere, sant/usant-matrise,
   dra-og-slipp, nedtrekk) med strategien fra kap. 5.1, og innholdssjangrene A–K med
   løsningsoppskriftene fra drillkapitlene (1.2, 1.6, 2.3, 2.7, 3.5, 4.4) i kortform.
4. **Sensorreglene** — begrunn hvert alternativ (negativ poenggiving); regn eksplisitt
   med enheter; delvis/gradert uttelling og bonus for full pott; robust sensur; flere
   svar kan være riktige samtidig.
5. **Feilkatalogen** — de faste fellene (§5 i analysen) samlet, hver med henvisning til
   kapitlet som forebygger den: blande mål/tiltak (3.1), glemme byte→bit ×8 (4.3),
   glemme `2^n − 2` i vertstall (4.2), snu sender-/mottakernøkler (3.3/3.4), digital
   signatur ≠ konfidensialitet (3.4), regne tallkonvertering via desimal (1.1), overse
   selvmodifiserende LMC-kode (1.5), bare én byte-tolkning (1.3), hash for
   konfidensialitet (3.1/3.4), bruke ikke-pensum (K-map/OSI, Del 0), de faste «alltid
   usanne» arkitektur-distraktorene (2.4), tro et lukket system er uten risiko (3.2).
6. **Notasjons- og konstruksjonsark** — samlet: basesubskript + direkte konvertering,
   2-er komplement-formelen, **hele LMC-instruksjonssettet** (mnemonic ↔ opkode ↔
   virkning), portsymboler + boolske identiteter, cache-formelen, abstraksjonsordningen,
   TCP/IP-lagene + protokoll→transport, subnetting-formlene (`2^n − 2`, CIDR, AND/OR),
   overføringstidsformelen, sikkerhetsmålene + nøkkelretningene — puggeark for en
   hjelpemiddelfri eksamen.
7. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant): fordi
   **hver seksjon må bestås**, dekk alle fire delene — men start med de garanterte
   regneteknikkene (Del 1 tall/LMC → Del 4 subnetting/overføringstid → Del 2
   cache/porter), legg deretter de begrepstunge skillene (Del 3 mål/tiltak +
   nøkkelretning), og kjør prøvene underveis + de tre øvingssettene de siste ukene
   under tidspress (240 min, fire seksjoner).

---

## 8. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `in1020` med alle 32 kapitler
   (id/number/title/description/estimatedMinutes/topics/competenceGoals/prerequisites/
   linkedChapterId) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra §2-tabellen
   (obligatorisk). **`number` er del-basert** («3.2», ALDRI lineær «15» — jf.
   JUS1111-lærdommen; prosareferanser i innholdet bruker samme form, «kap. 3.2»).
2. **Del 0** (kap. 0.1) — etablerer svarformene F1–F4, innholdssjangrene A–K,
   frekvenstallene, fire-seksjoner-regelen, pensum-avgrensningen og
   flervalgsdisiplinen resten refererer til.
3. **De fire seksjonsdelene** kan bygges i rekkefølge Del 1 → Del 2 → Del 3 → Del 4
   (innad følger kapitlene forkunnskaper: 1.1 før 1.3/1.4; 2.1 før 2.2/2.3; 4.1/4.2 før
   4.4/4.5). Alle fire delene skal være **like fullverdige** (hver seksjon må bestås).
4. Del 5 (eksamenstreningen) til slutt — den gjenbruker alle svarformer og sjangre;
   øvingseksamenene speiler fire-seksjoner-malen.
5. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles; prøvene (§6) legges i respektive delers prøvekapittel/
   exercise-seksjoner.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
  (escape `"` i norske sitattegn og i LaTeX; `\\` for LaTeX-kommandoer); `npm run
  build` grønn.
- [ ] **Quiz begrunner hvert alternativ**: hver quiz-forklaring og hvert
  løsningsforslag sier **både** hvorfor det riktige er riktig **og** hvorfor hver
  distraktor er gal (negativ poenggiving). `options[0]` = riktig svar (runtime
  stokker); reelle multi-riktig-/matrise-oppgaver er splittet til ett-riktig-svar-quiz.
- [ ] **Fire seksjoner like fullverdige**: Del 1–4 har alle solid dekning; ingen del
  er tynn. Del 0 og øvingseksamenene sier eksplisitt at hver seksjon må bestås.
- [ ] **Notasjons- og konstruksjonsliste per delkapittel**: hvert delkapittel som
  bruker notasjon har `collapsible` «Notasjons- og konstruksjonsliste» rett etter
  Forkunnskaper, som forklarer ALT delkapitlet bruker (binærnotasjon, LMC-instruksjoner,
  portsymboler, nettverksbegreper — per delkapittel, ikke arv).
- [ ] **De faste fellene som warnings**: hvert relevant kapittel har `warning` for sin
  felle — blande mål/tiltak (3.1), byte→bit ×8 (4.3/4.4), `2^n − 2` (4.2/4.4),
  nøkkelretning (3.3/3.4), signatur ≠ konfidensialitet (3.4), selvmodifiserende LMC
  (1.5), begge byte-tolkninger (1.3), faste arkitektur-distraktorer (2.4).
- [ ] **Pensum-avgrensning**: Del 0 + kap. 2.2 (K-map/mux/dekoder) + kap. 4.1 (OSI)
  markerer ikke-pensum eksplisitt; ingen kapittel driller K-map/mux/dekoder/flip-flop/
  Moores lov/OSI-7-lag/private IP-klasser som eksamensstoff.
- [ ] **Hjelpemiddel-avvik**: Del 0 markerer `(verifiser)` — arkivet tillater alle
  hjelpemidler, gjeldende emnebeskrivelse ingen; boka trener for **ingen**, og sier at
  studenten må sjekke gjeldende semester.
- [ ] **Korona-caveat**: Del 0 sier eksplisitt at H2020 (2-timers hjemme-prøveeksamen)
  ikke er representativ; boka bygges mot den gjeldende 4-timers formen (H2022/23).
- [ ] **Regneprosedyrene som `theorem`**: direkte binær↔oktal/hex (3-/4-bits grupper,
  ikke via desimal), `2^n − 2`, overføringstid (byte × 8 / rate), cache-vektsnitt,
  subnett/broadcast (AND/OR) — alle med gjennomregnet eksempel.
- [ ] **LMC-instruksjonskontrakter**: kap. 1.4/1.5 har `theorem`-blokk per instruksjon
  (mnemonic ↔ opkode ↔ virkning på akkumulator/PC/minne) + sporetabell-metoden.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra
  dette skjelettet), Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå i
  flervalgsform), 6–12 øvinger (F1–F4) med `solution` som begrunner alle alternativer +
  `hints`, repetisjons-`collapsible`; drillkapitler har løsningsoppskrift +
  sensor-kommentert case + 12–16 oppgaver.
- [ ] **Quiz-sum ≥ 697 og flashcard-sum ≥ 556** per kvotetabellen (§5); quiz kalibrert
  som direkte flervalgs-eksamenstrening; flashcards kalibrert som begrep ↔ definisjon
  ↔ fast distraktor.
- [ ] **Prøver**: 4 per temadel 1–4 (16 stk) + 3 øvingseksamener (kap. 5.2–5.4) som
  sammen dekker sjangrene A–K, svarformene F1–F4 og alle fire seksjoner flere ganger.
- [ ] **Opphavsrett**: ALLE oppgaver, tall, kretser, programmer og innpakninger
  nyskrevne — egne verdier/kontekster; instruksjonssett, tallverdier og
  standardnotasjon er allmenn faglig kunnskap, men ingen oppgavetekster/fasiter/
  sensorformuleringer fra reelle sett gjengis; pensum refereres (begrep/verk), aldri
  siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
  (200 + innhold), jf. lærdommen om `getChapterMeta`.

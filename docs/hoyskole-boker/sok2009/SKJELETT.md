# Bokskjelett: SØK2009 Internasjonal makroøkonomi — eksamensrettet lærebok

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
> `EKSAMENSANALYSE.md` (~20 oppgavesett H2012–V2024, 6 sensorveiledninger/
> løsningsforslag lest grundig: H2016, H2018, V2019, H2019, H2021 + H2023-
> løsningsforslaget). Arketype: **DNA-regnefag** (`DNA-regnefag.md`) —
> kapittel-DNA-ene der (teori/drill/øvingseksamen) er obligatoriske og gjentas
> ikke her. Emnet har i tillegg et markert **drøftingselement** (den verbale
> politikk-/troverdighetsvurderingen som avslutter De Grauwe-oppgaven — sjanger
> N); for det ene sjangerkapitlet som drilles spesifikt (5.3) lånes struktur fra
> `DNA-drofting.md` (oppskrift → gjennomskrevet besvarelse → momentliste-
> oppgaver), dokumentert der. Alle mønstereksempler i skjelettet er
> omskrivninger; forfatteren skal variere dem videre (egne tall, egne
> kontekster), aldri kopiere inn ordrett.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `sok2009` |
| Tittel | **SØK2009 Internasjonal makroøkonomi** |
| Institusjon | NTNU (Institutt for samfunnsøkonomi) |
| Level | `'Høyskole'` |
| Arketype | Regnefag (grafisk-analytisk modellfag med innslag av algebra) med drøftingselement (verbal valutaregime-/troverdighetsvurdering) |
| Antall kapitler | **24** (1 eksamenskart + 4 fundament + 5 asset-market/AA + 5 AA-DD/valutaregime + 5 valutaunion/troverdighet + 4 eksamenstrening) |
| Estimert totaltid | **1 830 min ≈ 30,5 timer** |
| Quiz totalt | **524** (krav ≥500) |
| Flashcards totalt | **528** (krav ≥500) |

**Pitch (ett avsnitt):** SØK2009-eksamen har i mer enn ti år stått på **to
søyler** som gjentar seg hvert eneste år: **oppgave 1** er forankret i Krugman-
Obstfeld-Melitz (**valuta- og pengemarked → samlet asset-market-likevekt →
AA-DD-modellen → valutaregimer**), og **oppgave 2** er forankret i De Grauwe
(**valutaunion**: Barro-Gordon/troverdighet *eller* optimalt valutaområde med
asymmetriske sjokk). Denne boka er bygget som nettopp de to søylene, med et
felles **fundamentkapittel om valutakurs, udekket renteparitet og driftsbalanse**
i bunn. Den driller de ferdighetene som avgjør karakteren: **penge- og
valutamarkedet med samlet likevekt** (likningene $M^s/P = L(R,Y)$ og UIP
$R = R^* + (E^e - E)/E$, kurvene tegnet og forklart med intuisjon, likevektskursen
utledet analytisk), **udekket renteparitet som regnestykke** (avkastning dollar
vs. euro med gitt rente + forventet kurs — de eneste faste regnepoengene),
**utledning av AA-kurven** (fallende i $(Y,E)$, forklart med hele kjeden
$Y\uparrow \to$ pengeetterspørsel$\uparrow \to R\uparrow \to$ appresiering) og
den fulle **AA-DD-analysen** av penge-/finanspolitikk og sjokk med **endogen
inntekt**, **fastkursregimet og forsvar av fast kurs** (policy-trilemmaet,
devaluering/revaluering, reserver), **overshooting** (permanent pengemengdeøkning,
kort vs. lang sikt, tidsbaner), **Barro-Gordon** (overraskelsesinflasjon,
tidsinkonsistens, euro som importert troverdighet) og **asymmetriske sjokk i en
valutaunion** (to-landsmodell, lønnsfleksibilitet/arbeidsmobilitet, finanspolitikk
vs. statsgjeld). SØK2009 er et **grafisk-intuitivt modellfag med innslag av
algebra** — matematikken teller (renteparitet regnes, likevektskursen utledes
analytisk), men sensor understreker gjennomgående at **den økonomiske intuisjonen
bak hver helning, hvert skift og hver likevekt veier tyngst**: figuren alene er
aldri nok, tallet skal tolkes, og kjeden fra pengemarked til valutamarked skal
vises hel.

**Kritisk avgrensnings- og komplementregel (gjelder HELE boka):** SØK2009 er
**åpen-økonomi-makroøkonomi** og har **null overlapp** med de bygde NTNU-
mikroøkonomibøkene: SOK1002 (Mikroøkonomi — nyttemaks/kostnadsminimering) og
SØK1011 (Markeder og markedssvikt — monopol/oligopol/eksternaliteter) er ren
mikro og berører verken valutakurs, renteparitet, driftsbalanse eller
valutaunion. **Ingen kryssbok-lenker til SOK1002/SØK1011 er relevante.** Der en
forkunnskaps-lenke trengs (lukket-økonomi IS-LM/AD-AS, pengemengde/rente, BNP-
regnskapet), lenkes det til en **innførings-makro-bok** i systemet dersom en
slik finnes (f.eks. ECON1310 Makroøkonomi I); **hvis kapitlet ikke finnes, skal
det IKKE lenkes** — forkunnskapen forklares da kort i boka selv *(verifiser
hvilke makro-kapitler som finnes før lenker skrives)*. SØK2009 bygger IKKE ut
lukket-økonomi-makro (nasjonal IS-LM/AD-AS uten utland), vekstteori, eller
detaljert nasjonalregnskap — det tas som forkunnskap. Se §7 for arbeidsdelingen.

**Avgrensning oppad mot masteremnene (bør kjenne til):** SØK3006 (*Valuta, olje
og makroøkonomisk politikk*) og SØK3517 (*Åpen makroøkonomi*) formaliserer
samme modellrom (Mundell-Fleming/AA-DD) på masternivå. SØK2009 er **inngangs-
porten** og skal holde seg på bachelornivå: **grafisk-analytisk**, med
**valgfri, enkel algebra** (analytisk likevektskurs, prosent-/rentepariteter),
IKKE full formalisert komparativ statikk med Jacobi-matriser. Nevn masternivået
kun i én kort «bør kjenne til»-merknad i Del 0.

**Kritisk notasjonsregel (gjelder HELE boka)** — notasjonen fra arkivet (Krugman-
Obstfeld-Melitz + De Grauwe) skal brukes nøyaktig, ikke lærebok-alternativer:

- **Valutakurs:** $E$ = nominell kurs (**innenlandsk valuta per enhet utenlandsk**,
  f.eks. dollar per euro); **høyere $E$ = depresiering** av innenlandsk valuta;
  $E^e$ = forventet fremtidig kurs; **realvalutakurs** $q = EP^*/P$ ($P^*$ = utenlandsk
  prisnivå, $P$ = innenlandsk).
- **Renter:** $R$ = innenlandsk rente, $R^*$ = utenlandsk rente. **Udekket
  renteparitet (UIP):** $R = R^* + (E^e - E)/E$ — leddet $(E^e - E)/E$ er **forventet
  depresiering** av innenlandsk valuta.
- **Pengemarked:** pengetilbud $M^s$, prisnivå $P$, real pengeetterspørsel
  $L(R,Y)$ (fallende i $R$, stigende i $Y$); likevekt $M^s/P = L(R,Y)$.
- **Varemarked / driftsbalanse:** $Y = C(Y-T) + I + G + CA(EP^*/P,\, Y-T)$;
  $CA$ = driftsbalanse (fallende i disponibel inntekt, stigende i realkursen $EP^*/P$);
  sammenhengen $CA = S - I$.
- **AA-DD:** **AA-kurven** = kombinasjoner av $(Y,E)$ med samtidig likevekt i penge-
  **og** valutamarkedet (**fallende** i $(Y,E)$-planet); **DD-kurven** = likevekt i
  varemarkedet (**stigende**); samlet likevekt i skjæringen. **Inntekt $Y$ er
  endogen** i AA-DD.
- **De Grauwe / troverdighet:** Phillips-kurve, sentralbankens tapsfunksjon over
  inflasjon $\pi$ og ledighet $u$, likevektsinflasjon; tidsinkonsistens; OCA
  (optimalt valutaområde), asymmetriske sjokk.
- **Konvensjon:** $E$-aksen tegnes vertikalt og $Y$-aksen horisontalt i AA-DD
  (Krugman-standard). Angi alltid retningen på $E$ (depresiering opp).

**Kritisk metoderegel (gjelder HELE boka):** Tre faste sensorkrav gjelder overalt
(analysens §4): **(a) likninger OG figur OG intuisjon** er én leveranse — figuren
alene er ikke nok, den økonomiske intuisjonen bak hver helning, hvert skift og
hver likevekt må med, og alle kurver/akser skal **navngis**; **(b) analytisk der
det er mulig** — likevektskursen skal kunne utledes analytisk (ikke bare avleses),
og UIP-regnestykket skal gjøres presist med korrekt konklusjon (forventet
appresiering/depresiering); **(c) kjenn forutsetningene** — endogen vs. eksogen
inntekt i AA-DD, kort vs. lang sikt, midlertidig vs. permanent sjokk. **Mekanismen
bak resultatet teller mer enn selve resultatet** (*hvorfor* faller AA, *hvorfor*
gir lavere innenlandsk rente depresiering, *hvorfor* skyter kursen over). Ved
åpne hjelpemidler (hjemme-eksamensår) understreker sensor at det er **økonomisk
intuisjon og forklaring av mekanismer**, ikke gjengivelse av modeller, som gir
uttelling. Svar **poengtert** og i fullstendige setninger.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): valutakurs-/renteparitet-/
driftsbalanse-fundamentet i bunn, deretter de to søylene (Krugman-søylen:
asset-market → AA-DD → valutaregimer; De Grauwe-søylen: valutaunion/troverdighet),
til slutt eksamenstreningen. Frekvensen styrer *omfanget* — begge søyler prøves i
**hvert** sett (én oppgave fra hver), og Krugman-søylen (asset-market + AA-DD +
valutaregimer) er den bredeste og får to fulle deler + drillkapittel.

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. Rammer inn to-søyle-malen (Krugman + De Grauwe) og avgrenser mot mikroemnene og masternivået. |
| 1 | Fundament: valutakurs, renteparitet og driftsbalanse | 4 | Fellesspråket begge søyler bygger på: valutakursbegrepet, UIP (~65 %, de faste regnepoengene), pengemarkedet (~75 %) og driftsbalanse/realkurs (~55–70 %). Forutsatt aktivt overalt → eget fundament. |
| 2 | Asset-market-modellen: samlet likevekt, politikk og AA-kurven | 5 | Penge+valutamarked + samlet likevekt ~75–85 %, midlertidig/permanent pengepolitikk ~50 %, overshooting ~45 %, AA-utledning ~80 %. Nesten alltid oppgave 1a → nivå 1 «perfekt» → 5 teorikapitler. |
| 3 | AA-DD og valutaregimer | 5 | AA-DD (Mundell-Fleming i åpen økonomi) ~80 %, valutaregimer + trilemma ~85 % (kronspørsmålet i policy-delen), fastkursforsvar. Den ene ~100 %-søylens kjerne → nivå 1 «perfekt» → 4 teorikapitler + drillkapittel. |
| 4 | Valutaunion og troverdighet (De Grauwe) | 5 | Barro-Gordon/troverdighet ~50 %, asymmetriske sjokk/OCA ~55 %; oppgave 2 i hvert sett (disse to alternerer). Den andre ~100 %-søylen → nivå 1–2 → 4 teorikapitler + drillkapittel. |
| 5 | Eksamenstrening | 4 | Begrepsdrill (~12–15 gjengangere), sjangerkapittel for den verbale valutaregime-/troverdighetsvurderingen (drøfting), og 3 komplette øvingseksamener som speiler to-søyle-malen (50/50, 60/40, 40/60 og treoppgavevarianten). |

**Avvik fra DNA-malen (dokumentert):**
1. DNA-en legger *alle* sjangerkapitler i siste del. Her ligger de to
   drillkapitlene (3.5 Krugman-/AA-DD-oppgaven, 4.5 De Grauwe-oppgaven) inne i
   sine egne søyler, fordi søylene ER de to gjennomgående eksamensoppgavene og må
   drilles umiddelbart etter teorien. Del 5 beholder begrepsdrillen (sjanger A),
   politikkvurderings-sjangerkapitlet og de tre øvingseksamenene.
2. DNA-en er ren regnefag. SØK2009 har et **drøftingselement** — den verbale
   valutaregime-/troverdighetsvurderingen som avslutter både fastkurs-delen og De
   Grauwe-oppgaven (sjanger N). Kapittel 5.3 er derfor bygget etter
   `DNA-drofting.md`s sjangerkapittel-mal (oppskrift → gjennomskrevet A-besvarelse
   med margkommentarer → momentliste-oppgaver), ikke som et regnedrillkapittel.
   Vurderingen forankres i den forutgående modellanalysen (fast kurs → tap av
   pengepolitikk; euro → importert troverdighet), ikke i pensumforfattere.
3. Del 1 (fundament) er strengt tatt fellesverktøy, ikke et «tema» som testes
   isolert som egen oppgave, men får egen del fordi valutakursbegrepet, UIP og
   driftsbalanse er *fellesspråket* begge søyler bruker, og fordi UIP-regnestykket
   og pengemarkedslikevekten er de faste enkeltoppgavene som går igjen uansett
   hvilken hovedoppgave de pakkes inn i.

---

## 3. Kapitler

Feltene under følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–N) refererer
til oppgavetype-katalogen som presenteres i Del 0 (gjengitt der fra analysen §3):
**A** begrepsforklaringer, **B** penge-/valutamarkedslikevekten forklart + tegnet,
**C** UIP/renteparitet + investeringsvalg (regneoppgave), **D** penge-/
finanspolitikk i asset-market-modellen (midlertidig/permanent + overshooting),
**E** utled AA-kurven (og DD-kurven), **F** AA-DD: sjokk og politikk i samlet
likevekt, **G** fastkursregime og forsvar av fast kurs, **H** driftsbalanse,
realvalutakurs og konkurranseevne, **I** Barro-Gordon: troverdighet og
overraskelsesinflasjon, **J** valutaunion: asymmetriske sjokk og OCA, **K**
policy-trilemmaet, **L** PPP og langsiktig kursbestemmelse, **M** intertemporal
handel / sparing-investering, **N** verbal valutaregime-/troverdighetsvurdering.
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet: slik testes SØK2009

- **id:** `sok2009-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen
- **Kapitteltype:** eksamenskart
- **description:** Eksamensformen, den faste to-søyle-malen (Krugman + De Grauwe), temafrekvensene, sjangerkatalogen A–N og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på ~20 sett + 6 sensorveiledninger/løsningsforslag. Skal gjengi: (i) **formen**: 4 timers skriftlig skoleeksamen, digital i Inspera (15 min ekstra til opplasting av håndtegnede figurer), karakter A–F, 7,5 studiepoeng; **hjelpemidler = kode C** (kalkulator + offisiell formelsamling, *ingen* notater); under korona (H2020/H2021) var det digital hjemmeeksamen med alle hjelpemidler, men da teller *analysen og intuisjonen*, ikke gjengivelse; undervises på engelsk, oppgavesettet gis på engelsk (noen år norsk), studenten kan svare på norsk eller engelsk; (ii) **den faste to-søyle-malen**: to hovedoppgaver, **oppgave 1 = Krugman** (valuta-/pengemarked/AA-DD) og **oppgave 2 = De Grauwe** (valutaunion/troverdighet/asymmetriske sjokk), med rekkefølgen Krugman-før-De Grauwe nesten alltid fast; **vekting varierer**: 50/50 (H2018, H2019), 60/40 (H2021), 40/60 (H2022), og enkelte år **tre oppgaver** (H2020, H2023, V2024, der AA-DD skilles ut som egen oppgave); nyere sett er poeng-vektet (H2023/V2024: 90 poeng); (iii) **temafrekvens-tabellen** (fra analysen §2): valutakursregimer + trilemma ~85 %, AA-DD/Mundell-Fleming ~80 %, pengemarkedslikevekt ~75 %, driftsbalanse/sparing-investering ~70 %, rentepariteter/kursforventninger ~65 %, realvalutakurs/PPP/konkurranseevne ~55 %, asymmetriske sjokk/OCA ~55 %, Barro-Gordon/troverdighet ~50 %, pengepolitikk midlertidig/permanent ~50 %, overshooting (Dornbusch) ~45 %; (iv) at oppgavene alltid pakkes i **aktualitet** (euro-innføring, dollar/euro-investering, fastkursforsvar, forurensende importland) men at modellen alltid er den samme, og at UIP $R = R^* + (E^e - E)/E$ er den gjennomgående likningen som gir de faste regnepoengene; (v) **sensorens metaregler**: likninger + figur + intuisjon er én leveranse; merk alle kurver og akser; likevektskursen utledes analytisk; intuisjon veier tyngst (særlig ved åpne hjelpemidler); regn og tolk rentepariteten; kjenn modellenes forutsetninger (endogen/eksogen inntekt, kort/lang sikt, midlertidig/permanent); (vi) **karakterskillene** (fra analysen §4.2): bunn (E–D) = riktige likevektslikninger, korrekte kurver med riktig helning, hovedkonklusjonen (retning på rente-/kurseffekt, hva fast kurs betyr); midt (C) = komplett grafisk analyse med korrekt skift og ny likevekt, korrekt UIP-utregning, korrekt AA-utledning med intuisjon, riktig drøfting av asymmetriske sjokk; topp (A/B) = **overshooting** (kort vs. lang sikt med tidsbaner), skiller **midlertidig/permanent** konsekvent, utleder **AA-helningen analytisk**, ser at inntekt er **endogen** i AA-DD, kobler fastkursforsvar til reserver/rente, og drøfter **tidsinkonsistens** og **OCA-avveiningene** skarpt.
- **Innholdskontrakt:** Oppgavetype-katalogen A–N presenteres som studentens sjekkliste med typisk plassering: **Krugman-oppgaven** bygges av B → C → D → E → F (+ G/H som innpakning), **De Grauwe-oppgaven** av I *eller* J (+ N til slutt), begrepsoppgaven (når den kommer) av A. **Prognose for neste eksamen** (fra analysen §7): overveldende sannsynlig to hovedoppgaver (evt. tre) — Krugman-oppgave: gitt penge- og valutamarkedslikningene → forklar og tegn likevektene med intuisjon → renteparitet-regnestykke (dollar vs. euro) → midlertidig/permanent pengepolitikk med overshooting → utled AA-kurven → evt. fullt AA-DD med et sjokk, med fastkursregime og forsvar av fast kurs som fast innslag; De Grauwe-oppgave: enten Barro-Gordon/troverdighet (overraskelsesinflasjon, euro som inflasjonsløsning) **eller** asymmetriske sjokk i valutaunion (to-landsmodell, justeringsmekanismer, finanspolitikk vs. statsgjeld) — disse alternerer. Avslutt med **avgrensningen**: hva som IKKE er pensum (lukket-økonomi-makro uten utland, vekstteori, mikroemnene SOK1002/SØK1011; og masternivået SØK3006/3517), og **leseplanen**: Del 1 er fellesverktøy man må ha klart; Del 2 og 3 er Krugman-søylen (hele oppgave 1), Del 4 er De Grauwe-søylen (hele oppgave 2); Del 5 er ren trening.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt to-søyle-malen og 240 minutter — sett opp tidsbudsjett for Krugman- og De Grauwe-oppgaven ved 50/50 og ved 60/40» og «hvilke ferdigheter avgjør karakteren, og i hvilket kapittel drilles de?».
- **Typiske feil:** Metafeilene: bruke tid på uforklarte figurer eller utolkede tall; tro at figuren alene er svaret (intuisjonen mangler); pugge lukket-økonomi-makro eller mikrostoff som ikke er i SØK2009-pensum; blande midlertidig og permanent sjokk allerede i planleggingen.
- **Quiz: 14 · Flashcards: 14** (eksamensform, to-søyle-malen, vektingshistorikk, frekvenser, sjangerkatalog, metaregler, avgrensning)

**Prøve-kvote Del 0:** ingen (metadel).

---

### Del 1 — Fundament: valutakurs, renteparitet og driftsbalanse *(prioritet: fellesverktøy — må sitte)*

> **Forkunnskaps-skille:** lukket-økonomi-makro (pengemengde, rentedannelse,
> IS-LM/AD-AS, BNP-regnskapet $Y = C + I + G + NX$) forutsettes. Der studenten
> trenger å repetere hvor pengemarkedslikevekten eller BNP-identiteten kommer
> fra, forklares det **kort i boka selv** eller lenkes til en innførings-makro-bok
> **dersom en finnes** (f.eks. ECON1310) — *(verifiser at kapitlet finnes før
> lenke skrives; ellers forklar i boka)*. SØK2009s eget bidrag er **åpningen mot
> utlandet**: valutakursen, renteparitet og driftsbalansen.

#### Kapittel 1.1: Valutakursen: nominell, real og markedet for valuta

- **id:** `sok2009-1-1` · **number:** 1.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen
- **Kapitteltype:** teori (fundament)
- **description:** Valutakursbegrepet ($E$ = innenlandsk valuta per enhet utenlandsk), skillet nominell/real valutakurs ($q = EP^*/P$), appresiering/depresiering, og valutamarkedet som marked for eiendeler — fundamentet begge søyler bygger på.
- **Eksamensbelegg:** Valutakursbegrepet og skillet nominell/real er forutsatt i *hver* oppgave og er fast begrepsgjenganger (sjanger A). Feilkilde: forveksle nominell og real kurs (§5.9), og rote med retningen på $E$ (depresiering = høyere $E$). Prioritet: **fellesverktøy** (må sitte).
- **Innholdskontrakt:** **Nominell valutakurs** $E$ = pris på utenlandsk valuta målt i innenlandsk valuta (**innenlandsk per utenlandsk**, f.eks. kr/euro eller dollar/euro); **høyere $E$ = depresiering** (innenlandsk valuta svekkes), lavere $E$ = appresiering. **Realvalutakurs** $q = EP^*/P$ = relativ pris på utenlandske varer i innenlandske: mål på **internasjonal konkurranseevne** (høyere $q$ → innenlandske varer billigere relativt → bedre konkurranseevne). Valutamarkedet som **marked for eiendeler**: kursen bestemmes av tilbud/etterspørsel etter valuta som plasseringsobjekt, ikke primært av handel på kort sikt (asset-market-tilnærmingen — legger grunnlaget for kap. 1.2 og 2.1). Depresiering/appresiering vs. devaluering/revaluering (sistnevnte = politisk vedtak under fast kurs — foregriper kap. 3.3). Understrek notasjonsdisiplin: alltid oppgi hva $E$ måler og hvilken vei depresiering går.
- **Oppgavesjangre:** A-fundament. Mønstereksempel (A): «Forklar forskjellen på nominell og real valutakurs, hva det betyr at valutaen depresierer, og hvorfor realvalutakursen er et mål på konkurranseevne.»
- **Typiske feil:** Rote med retningen på $E$ (tro at høyere $E$ er appresiering); forveksle nominell og real kurs (§5.9); tro at valutakursen bestemmes av vareflyt på kort sikt (den bestemmes i asset-markedet); blande depresiering (marked) og devaluering (politisk vedtak).
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 1.2: Udekket renteparitet (UIP) og valutakursforventninger

- **id:** `sok2009-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok2009-1-1`
- **Kapitteltype:** teori (fundament)
- **description:** Udekket renteparitet $R = R^* + (E^e - E)/E$ som likevektsbetingelsen i valutamarkedet, avkastningskurven for utenlandsk plassering, og hvordan man regner og sammenligner avkastning på innenlandsk vs. utenlandsk plassering.
- **Eksamensbelegg:** ~65 % frekvens (sjanger C) og **de eneste faste regnepoengene** — «regn avkastning dollar vs. euro» dukker jevnlig opp (H2020, H2021, H2023). UIP er den gjennomgående likningen i hele Krugman-søylen. Prioritet: **perfekt** (fundament for oppgave 1).
- **Innholdskontrakt:** **Udekket renteparitet (UIP):** $R = R^* + (E^e - E)/E$ — i likevekt gir innenlandsk og utenlandsk plassering samme forventede avkastning målt i innenlandsk valuta. Leddet $(E^e - E)/E$ = **forventet depresiering** av innenlandsk valuta: forventer man at $E$ stiger (innenlandsk valuta svekkes), er utenlandsk plassering mer attraktiv, alt annet likt. **Avkastningskurven for utenlandsk plassering** er **fallende i $E$**: jo høyere dagens kurs $E$ (gitt $E^e$), jo mindre forventet depresiering igjen, jo lavere forventet avkastning på utenlandsk plassering → forklar helningen med intuisjon. **Regnestykket (sjanger C):** gitt $R$, $R^*$, dagens kurs $E$ og forventet kurs $E^e$: regn $R^* + (E^e - E)/E$ og sammenlign med $R$; konkludér hvor det lønner seg å plassere og forklar i én setning (forventet appresiering/depresiering). Regn på nytt hvis en rente eller forventningen endres. Vis at UIP bestemmer **likevektskursen $E$** gitt $R, R^*, E^e$ (analytisk løsning — foregriper kap. 2.2). Merk fortegnsdisiplinen: en forventet depresiering av innenlandsk valuta styrker utenlandsk avkastning.
- **Oppgavesjangre:** C. Mønstereksempel: «Innenlandsk rente er 2 %, utenlandsk rente 5 %. Dagens kurs er 10 (innenlandsk valuta per enhet utenlandsk), forventet kurs om ett år er 9,7. Hvor bør en investor plassere? Hva blir svaret om den utenlandske renten i stedet er 3 %? Forklar konklusjonen i økonomiske termer.»
- **Typiske feil:** Feil fortegn/retning i $(E^e - E)/E$ (§5.5) — rote med om forventet depresiering styrker innenlandsk eller utenlandsk avkastning; regne uten å konkludere presist; glemme at UIP er *forventet* avkastning (risiko-nøytralitet); oppgi tallet uten den verbale konklusjonen.
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 1.3: Pengemarkedet og rentedannelsen

- **id:** `sok2009-1-3` · **number:** 1.3 · **estimatedMinutes:** 45 · **prerequisites:** `sok2009-1-1`
- **Kapitteltype:** teori (fundament)
- **description:** Pengemarkedslikevekten $M^s/P = L(R,Y)$, real pengeetterspørselen $L(R,Y)$ (fallende i $R$, stigende i $Y$), rentedannelsen og hvordan renten endres når pengemengde, prisnivå eller inntekt endres.
- **Eksamensbelegg:** ~75 % frekvens (sjanger B-fundament) — halvdelen av den samlede asset-market-likevekten (kap. 2.1). Rentedannelsen er inngangen til hele Krugman-oppgaven. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Real pengeetterspørsel** $L(R,Y)$: **fallende i renten** $R$ (høyere rente → dyrere å holde penger → lavere pengeetterspørsel) og **stigende i inntekten** $Y$ (mer transaksjoner). **Pengemarkedslikevekt** $M^s/P = L(R,Y)$: gitt reelt pengetilbud $M^s/P$ bestemmes likevektsrenten der etterspørsel = tilbud. **Figur:** pengetilbud vertikalt (uavhengig av $R$), pengeetterspørsel fallende i $R$; skjæringen gir $R$. Komparativ statikk: **økt $M^s$** (ved fast $P$) → renten faller (skift i tilbud); **økt $Y$** → renten stiger (skift i etterspørsel); **økt $P$** → lavere realtilbud → renten stiger. Understrek stabiliteten (hvorfor renten trekkes tilbake til likevekt). Legg grunnlaget for at pengemarkedet leverer $R$ inn i valutamarkedet (UIP) → samlet asset-market-likevekt (kap. 2.1). Merk skillet kort sikt ($P$ fast) vs. lang sikt ($P$ fleksibelt) — sentralt for overshooting (kap. 2.3).
- **Oppgavesjangre:** B-fundament. Mønstereksempel: «Tegn pengemarkedet og forklar hvordan likevektsrenten bestemmes. Vis hva som skjer med renten på kort sikt når sentralbanken øker pengemengden, og forklar mekanismen.»
- **Typiske feil:** Feil helning på pengeetterspørselen (fallende i $R$, ikke i $Y$); blande skift i tilbud (endret $M^s$) og skift i etterspørsel (endret $Y$); glemme at det er *reelt* pengetilbud $M^s/P$ som teller (prisnivåets rolle); ikke forklare mekanismen bak rentejusteringen.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 1.4: Driftsbalansen, realvalutakursen og sparing-investering

- **id:** `sok2009-1-4` · **number:** 1.4 · **estimatedMinutes:** 50 · **prerequisites:** `sok2009-1-1`
- **Kapitteltype:** teori (fundament)
- **description:** Varemarkedslikevekten $Y = C(Y-T) + I + G + CA(EP^*/P,\, Y-T)$, driftsbalansen $CA$ som funksjon av realvalutakursen og disponibel inntekt, koblingen $CA = S - I$, og intertemporal handel.
- **Eksamensbelegg:** ~55–70 % frekvens (sjanger H, delvis M) — driftsbalanse og realvalutakurs gir hele oppgaver når de kommer, og varemarkedslikevekten er grunnlaget for DD-kurven (kap. 3.1). Prioritet: **kunne** (nivå 2, høyfrekvent; fundament for AA-DD).
- **Innholdskontrakt:** **Varemarkedslikevekten** (aggregert etterspørsel = produksjon): $Y = C(Y-T) + I + G + CA(EP^*/P,\, Y-T)$. **Driftsbalansen** $CA$: **stigende i realkursen** $EP^*/P$ (realdepresiering → innenlandske varer relativt billigere → bedre konkurranseevne → høyere $CA$) og **fallende i disponibel inntekt** $Y-T$ (høyere inntekt → mer import → lavere $CA$). **Sparing-investering-balansen:** fra nasjonalregnskapet $CA = S - I$ (et lands driftsoverskudd = nettoutlån til utlandet = sparing minus innenlandsk investering); tolk driftsunderskudd som at landet låner fra utlandet / investerer mer enn det sparer. **Intertemporal handel (sjanger M):** driftsbalansen som byttet konsum i dag mot konsum i morgen — et driftsunderskudd i dag «betales» med overskudd senere. **PPP (kort, foregriper kap. 3.4):** kjøpekraftsparitet som langsiktig anker for realkursen. Figurkrav der relevant: $CA$ som fallende funksjon av $Y$ og stigende i realkursen. Legg grunnlaget for DD-kurven (varemarkedslikevekt gir stigende sammenheng mellom $Y$ og $E$).
- **Oppgavesjangre:** H (+ M). Mønstereksempel (H): «Forklar hvordan driftsbalansen avhenger av realvalutakursen og innenlandsk disponibel inntekt, og hva en realdepresiering betyr for konkurranseevnen og driftsbalansen. Bruk sammenhengen $CA = S - I$ til å tolke et driftsunderskudd.»
- **Typiske feil:** Feil fortegn på $CA$s avhengighet av realkurs eller inntekt; forveksle nominell og real valutakurs i konkurranseevne-argumentet (§5.9); tro at $CA = S - I$ er en atferdsligning (det er en identitet fra regnskapet); overse den intertemporale tolkningen av driftsbalansen.
- **Quiz: 22 · Flashcards: 22**

**Prøve-kvote Del 1:** 4 prøver (1.A begreper — nominell/real valutakurs, appresiering/depresiering, UIP, pengeetterspørsel, driftsbalanse, sjanger A; 1.B UIP-regnestykke: avkastning innenlandsk vs. utenlandsk plassering med gitt rente + forventet kurs, konklusjon og ny beregning ved endret rente, sjanger C; 1.C pengemarkedet: likevektsrenten tegnet + effekt av endret $M^s$/$Y$/$P$ med mekanisme, sjanger B; 1.D driftsbalanse og realvalutakurs: $CA(EP^*/P, Y-T)$, konkurranseevne, $CA = S - I$, sjanger H).

---

### Del 2 — Asset-market-modellen: samlet likevekt, politikk og AA-kurven *(prioritet: PERFEKT — oppgave 1a)*

#### Kapittel 2.1: Samlet asset-market-likevekt: penge- og valutamarkedet sammen

- **id:** `sok2009-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `sok2009-1-2`, `sok2009-1-3`
- **Kapitteltype:** teori
- **description:** Å koble pengemarkedet ($M^s/P = L(R,Y)$) og valutamarkedet (UIP) til én simultan likevekt: pengemarkedet bestemmer renten, renten bestemmer kursen via UIP; likevektskursen utledes analytisk og illustreres i det tosidige diagrammet (Fig. 15-6-typen).
- **Eksamensbelegg:** ~75–85 % frekvens (sjanger B) — nesten alltid oppgave 1a: «gjør rede for likevekten i penge- og valutamarkedet, illustrer grafisk, forklar intuisjonen bak helningene». Krever begge markeder, begge helninger med intuisjon, og hvordan hvert marked når stabil likevekt. Prioritet: **perfekt** (bokas viktigste enkeltkapittel på Krugman-siden).
- **Innholdskontrakt:** **Kjeden:** pengemarkedet $M^s/P = L(R,Y)$ bestemmer likevektsrenten $R$ (gitt $M^s$, $P$, $Y$); denne $R$ settes inn i UIP $R = R^* + (E^e - E)/E$, som bestemmer likevektskursen $E$ (gitt $R^*$, $E^e$). **Det tosidige diagrammet (Krugman Fig. 15-3/15-6):** pengemarkedet i én halvdel (rente vertikalt), valutamarkedet i den andre (forventet avkastning vs. $E$); renten fra pengemarkedet «leveres» over til valutamarkedet der avkastningskurven (fallende i $E$) skjærer den innenlandske avkastningen $R$ → likevektskursen. **Helningene med intuisjon:** avkastningskurven for utenlandsk plassering fallende i $E$ (høyere $E$ → mindre forventet depresiering igjen → lavere avkastning). **Stabilitet:** hvorfor en kurs over/under likevekt trekkes tilbake (over: utenlandsk avkastning for lav → salg av utenlandsk valuta → $E$ faller). **Analytisk likevektskurs:** løs UIP for $E$: $E = E^e/(1 + R - R^*)$ (approksimasjon) — vis at kursen kan utledes, ikke bare avleses. **Komparativ statikk (forbereder kap. 2.2):** økt $M^s$ → lavere $R$ → depresiering ($E$ opp); økt $R^*$ → depresiering; økt $E^e$ → depresiering. Figurkrav: navngi begge markeder, begge akser, likevektsrenten og likevektskursen.
- **Oppgavesjangre:** B. Mønstereksempel: «Gjør rede for den samtidige likevekten i penge- og valutamarkedet. Illustrer grafisk i det tosidige diagrammet, forklar intuisjonen bak helningen på avkastningskurven for utenlandsk plassering, og vis hvordan likevektskursen bestemmes.»
- **Typiske feil:** Tegne kurvene uten å forklare *hvorfor* de har den helningen de har (§5.1 — kurver uten intuisjon); ikke vise koblingen mellom markedene (renten fra pengemarkedet inn i valutamarkedet — hele kjeden); avlese likevektskursen uten å kunne utlede den analytisk (§4.3); glemme stabilitetsargumentet.
- **Quiz: 26 · Flashcards: 22**

#### Kapittel 2.2: Midlertidig pengepolitikk og valutakurs

- **id:** `sok2009-2-2` · **number:** 2.2 · **estimatedMinutes:** 50 · **prerequisites:** `sok2009-2-1`
- **Kapitteltype:** teori
- **description:** Hvordan en midlertidig endring i pengemengden (eller renten) påvirker rente og valutakurs i asset-market-modellen, med grafikk og intuisjon — det enklere tilfellet der forventet kurs $E^e$ er uendret.
- **Eksamensbelegg:** ~50 % frekvens (sjanger D). Skillet midlertidig/permanent er en toppkarakter-markør (§4.2, §5.2). Prioritet: **perfekt** (nivå 1 mekanisme).
- **Innholdskontrakt:** **Midlertidig** endring = forventet fremtidig kurs $E^e$ er **uendret** (markedet forventer at politikken reverseres, langsiktig prisnivå/kurs upåvirket). **Ekspansiv midlertidig pengepolitikk** (økt $M^s$): renten faller ($M^s/P = L(R,Y)$ med $P, Y$ faste) → innenlandsk avkastning faller → utenlandsk plassering mer attraktiv → **depresiering** ($E$ opp) langs den *uendrede* avkastningskurven. **Figur:** skift i pengetilbudet → lavere $R$ → bevegelse langs valutamarkedskurven → høyere $E$. **Intuisjon:** lavere innenlandsk rente gjør innenlandsk plassering mindre attraktiv; kapital søker ut; innenlandsk valuta svekkes til forventet appresiering igjen akkurat oppveier rentegapet (UIP gjenopprettet). Hva bestemmer **størrelsen** på effekten: rentefølsomheten i pengeetterspørselen og hvor stor pengemengdeendringen er. Kontrasten til permanent (kap. 2.3): her ingen endring i $E^e$, derfor ingen overshooting.
- **Oppgavesjangre:** D. Mønstereksempel: «Analyser hvordan en midlertidig ekspansiv pengepolitikk påvirker rente og valutakurs. Illustrer grafisk, forklar mekanismen, og drøft hva som bestemmer størrelsen på kurseffekten.»
- **Typiske feil:** La $E^e$ endre seg ved en *midlertidig* politikk (da er den ikke lenger midlertidig — §5.2); feil retning (ekspansiv pengepolitikk gir depresiering, ikke appresiering); ikke forklare mekanismen via UIP; blande med det permanente tilfellet (overshooting hører ikke hjemme her).
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 2.3: Permanent pengepolitikk og overshooting (Dornbusch)

- **id:** `sok2009-2-3` · **number:** 2.3 · **estimatedMinutes:** 60 · **prerequisites:** `sok2009-2-2`
- **Kapitteltype:** teori
- **description:** Permanent pengemengdeøkning: kort sikt vs. lang sikt, hvorfor valutakursen «skyter over» (overshooting) sitt langsiktige nivå på kort sikt, og tidsbanene for rente, prisnivå og kurs (Fig. 15-12/15-13).
- **Eksamensbelegg:** ~45 % frekvens (sjanger D, toppdel) — **toppkarakter-differensiator**: å beherske overshooting med tidsbaner skiller A/B fra C (§4.2, §5.3). Prioritet: **kunne/perfekt** (nivå 2, men høyt belønnet; drilles i søylen).
- **Innholdskontrakt:** **Permanent** endring = markedet forventer at politikken varer → langsiktig prisnivå og langsiktig kurs endres → **$E^e$ endres**. **Lang sikt:** en permanent økning i $M^s$ hever langsiktig prisnivå proporsjonalt (nøytralitet), og langsiktig nominell kurs depresierer proporsjonalt (langsiktig UIP/PPP). **Kort sikt** ($P$ fast): renten faller *og* $E^e$ har hoppet opp (høyere forventet langsiktig kurs) → begge trekker $E$ opp → kursen depresierer **mer på kort sikt** enn den nye langsiktige verdien: **overshooting**. **Tidsbanene (må tegnes):** ved tidspunkt 0 hopper $M^s$; renten faller momentant, $E$ hopper over langsiktig nivå; over tid stiger $P$ mot nytt langsiktig nivå, renten stiger tilbake, og $E$ appresierer tilbake (glir ned) mot sin langsiktige (høyere) verdi. **Intuisjon:** siden $P$ er treg på kort sikt, må hele tilpasningen skje via renten og kursen; kursen må «skyte over» slik at den forventede *appresieringen* tilbake gir UIP-balanse ved lavere innenlandsk rente. Figurkrav: pengemarked + valutamarked på kort sikt, og separate tidsbaner for $M^s$, $R$, $P$, $E$.
- **Oppgavesjangre:** D (toppvariant). Mønstereksempel: «En sentralbank øker pengemengden permanent. Analyser effekten på rente, prisnivå og valutakurs på kort og lang sikt, forklar hvorfor kursen skyter over sitt langsiktige nivå, og tegn tidsbanene for de fire størrelsene.»
- **Typiske feil:** Glemme overshooting ved en *permanent* økning, eller ikke vise tidsbanene (§5.3); blande midlertidig og permanent (§5.2); ikke skille kort sikt ($P$ fast) fra lang sikt ($P$ fleksibelt); feil retning på tidsbanen for kursen (den appresierer *tilbake* etter det initiale overslaget).
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 2.4: Utledning av AA-kurven

- **id:** `sok2009-2-4` · **number:** 2.4 · **estimatedMinutes:** 55 · **prerequisites:** `sok2009-2-1`
- **Kapitteltype:** teori
- **description:** Hvordan samtidig likevekt i penge- og valutamarkedet gir en fallende sammenheng mellom produksjon $Y$ og valutakurs $E$ — AA-kurven — utledet steg for steg og forklart med intuisjon, med skift.
- **Eksamensbelegg:** ~80 % frekvens (sjanger E) — «forklar hvordan asset-markedene gir AA-kurven, og gi intuisjonen bak helningen». Sensor krever aktiv utledning, gjerne analytisk (§4.7). Prioritet: **perfekt**.
- **Innholdskontrakt:** **AA-kurven** = alle kombinasjoner av $(Y, E)$ som gir samtidig likevekt i penge- **og** valutamarkedet. **Utledning (steg for steg):** hold $M^s$, $P$, $R^*$, $E^e$ faste; øk $Y$ → real pengeetterspørsel $L(R,Y)$ stiger → likevektsrenten $R$ **stiger** (pengemarkedet) → innenlandsk avkastning stiger → innenlandsk valuta blir mer attraktiv → **appresiering** ($E$ **faller**) i valutamarkedet. Altså: høyere $Y$ ↔ lavere $E$ → **AA-kurven er fallende** i $(Y,E)$-planet. **Intuisjon per steg** (ikke bare konklusjonen). **Analytisk helning** (bør kunne skisseres): differensier likevektsbetingelsene og vis at $dE/dY < 0$. **Skift i AA:** hva flytter hele kurven — økt $M^s$ (skift **opp/ut**, depresiering ved gitt $Y$), økt $E^e$ (skift **opp**), høyere $R^*$ (skift opp), lavere $P$ (skift opp) — hver med intuisjon. Understrek at bevegelse *langs* AA (endret $Y$) skiller seg fra *skift* i AA (endret asset-market-variabel). Legg grunnlaget for AA-DD (kap. 3.1).
- **Oppgavesjangre:** E. Mønstereksempel: «Forklar hvordan likevekt i penge- og valutamarkedet gir AA-kurven, og gi intuisjonen bak at den er fallende. Hvordan påvirkes AA-kurven av (a) en økning i pengemengden og (b) en økning i forventet valutakurs?»
- **Typiske feil:** Presentere AA som fallende uten å vise kjeden $Y\uparrow \to R\uparrow \to$ appresiering (§5.1); feil retning i ett av leddene; forveksle bevegelse langs AA med skift i AA; glemme hvilke variabler som skifter kurven (asset-market-variablene, ikke $Y$).
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 2.5: Utledning av DD-kurven

- **id:** `sok2009-2-5` · **number:** 2.5 · **estimatedMinutes:** 45 · **prerequisites:** `sok2009-1-4`
- **Kapitteltype:** teori
- **description:** Hvordan varemarkedslikevekten gir en stigende sammenheng mellom produksjon $Y$ og valutakurs $E$ — DD-kurven — utledet fra $Y = C + I + G + CA(EP^*/P, Y-T)$, med skift.
- **Eksamensbelegg:** DD utledes sammen med AA i AA-DD-år (~80 % samlet med kap. 2.4/3.1); egen deloppgave når AA-DD spørres fullt (sjanger E/F). Prioritet: **perfekt** (fundament for AA-DD).
- **Innholdskontrakt:** **DD-kurven** = kombinasjoner av $(Y, E)$ som gir likevekt i **varemarkedet** (aggregert etterspørsel = produksjon). **Utledning:** en **depresiering** ($E$ opp) → realdepresiering → bedre konkurranseevne → $CA$ stiger → samlet etterspørsel stiger → likevekts-$Y$ **stiger**. Altså høyere $E$ ↔ høyere $Y$ → **DD-kurven er stigende** i $(Y,E)$-planet. **Intuisjon:** valutasvekkelse gjør innenlandske varer billigere ute og inne → netto eksport opp → produksjon opp (multiplikator, kort forklart). **Skift i DD:** økt $G$ (skift **høyre/ut**), lavere $T$ (skift ut), autonomt etterspørselssjokk (skift ut), endret $P^*$/$P$ (via realkurs). Understrek at **inntekt $Y$ bestemmes i modellen** (endogen) — DD sier hvilket $Y$ som klarerer varemarkedet ved hver $E$. Kontrasten AA (asset-markeder, fallende) vs. DD (varemarked, stigende) — de to halvdelene av åpen-økonomi-makro.
- **Oppgavesjangre:** E-fundament. Mønstereksempel: «Utled DD-kurven fra varemarkedslikevekten, forklar hvorfor den er stigende, og vis hvordan en økning i offentlige utgifter skifter den.»
- **Typiske feil:** Feil helning (DD er stigende, ikke fallende); forveksle skift i DD (finanspolitikk) med bevegelse langs DD (endret $E$); ikke koble depresieringens virkning via realkurs og $CA$; blande AA (asset-marked) og DD (varemarked).
- **Quiz: 20 · Flashcards: 20**

**Prøve-kvote Del 2:** 4 prøver (2.A samlet asset-market-likevekt: penge- + valutamarked tegnet med intuisjon bak helningene + analytisk likevektskurs, sjanger B; 2.B midlertidig vs. permanent pengepolitikk: rente-/kurseffekt, mekanisme, og overshooting med tidsbaner, sjanger D; 2.C utled AA-kurven med intuisjon + skift, sjanger E; 2.D utled DD-kurven + skift, og forklar kontrasten AA (fallende) vs. DD (stigende), sjanger E).

---

### Del 3 — AA-DD og valutaregimer *(prioritet: PERFEKT — oppgave 1b, signaturapparatet)*

#### Kapittel 3.1: AA-DD-modellen: samlet likevekt og etterspørselssjokk

- **id:** `sok2009-3-1` · **number:** 3.1 · **estimatedMinutes:** 60 · **prerequisites:** `sok2009-2-4`, `sok2009-2-5`
- **Kapitteltype:** teori
- **description:** Å sette AA og DD sammen i $(Y,E)$-planet, finne den simultane kortsiktslikevekten, og analysere et etterspørselssjokk — med den kritiske innsikten at inntekt er endogen.
- **Eksamensbelegg:** ~80 % frekvens (sjanger F) — signaturapparatet. Sensor straffer å skifte inntekt eksogent (§5.4) og belønner at man ser $Y$ som endogen (§4.2 A/B-markør). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Samlet kortsiktslikevekt:** skjæringen mellom **AA** (asset-markedene, fallende) og **DD** (varemarkedet, stigende) i $(Y,E)$-planet gir simultan likevekt i $(Y^*, E^*)$. **Kritisk forutsetning: inntekt $Y$ er endogen** — man kan ikke «flytte $Y$» eksogent; et «inntektssjokk» må komme via et skift i en bakenforliggende kurve (etterspørsel → DD, eller asset-marked → AA). **Etterspørselssjokk:** et positivt autonomt etterspørselssjokk skifter **DD** ut (høyre) → ny likevekt med **høyere $Y$** og **lavere $E$** (appresiering) → forklar hele mekanismen og tegn skiftet. **Forventningssjokk:** økt $E^e$ skifter **AA** opp → depresiering og høyere $Y$. Figurkrav: navngi begge kurver, opprinnelig og ny likevekt, retningen på skiftet. **Stabilitet/justering:** kort om hvordan økonomien beveger seg til den nye skjæringen. Understrek at hver hovedvariabel (penge-, finanspolitikk, forventninger) virker via *hvilken kurve den skifter*.
- **Oppgavesjangre:** F. Mønstereksempel: «Bruk AA-DD-modellen til å analysere virkningen av et positivt autonomt etterspørselssjokk på produksjon og valutakurs. Tegn skiftet, finn den nye likevekten, og forklar hvorfor inntekt ikke kan behandles som eksogen i modellen.»
- **Typiske feil:** **Skifte inntekt $Y$ eksogent** i stedet for via et kurveskift (§5.4, selve fella); skifte feil kurve (etterspørselssjokk → DD, ikke AA); feil retning på $E$ eller $Y$; umerket figur (§5.10); ikke forklare mekanismen bak den nye likevekten.
- **Quiz: 26 · Flashcards: 22**

#### Kapittel 3.2: Penge- og finanspolitikk i AA-DD (flytende kurs)

- **id:** `sok2009-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok2009-3-1`
- **Kapitteltype:** teori
- **description:** Effekten av penge- og finanspolitikk på produksjon og valutakurs i AA-DD under flytende kurs — hvilken kurve hver politikk skifter, og skillet midlertidig/permanent.
- **Eksamensbelegg:** ~50–80 % frekvens (sjanger F) — den fulle AA-DD-analysen av politikk. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Pengepolitikk (skifter AA):** ekspansiv pengepolitikk (økt $M^s$) skifter **AA opp** → **depresiering** ($E$ opp) og **høyere $Y$**; midlertidig (kortsiktig, $E^e$ uendret) vs. permanent (også langsiktig $E^e$ opp → sterkere kortsiktseffekt / overshooting, kap. 2.3). **Finanspolitikk (skifter DD):** ekspansiv finanspolitikk (økt $G$ eller lavere $T$) skifter **DD ut** → **høyere $Y$** og **appresiering** ($E$ ned); **midlertidig** finanspolitikk gir full produksjonseffekt, men **permanent** finanspolitikk gir ingen langsiktig produksjonseffekt (fordi den også hever $E^e$ / appresierer AA — utligning). Understrek den viktige forskjellen: penge- og finanspolitikk trekker $E$ i **motsatt** retning (pengepolitikk depresierer, finanspolitikk appresierer), selv om begge øker $Y$ på kort sikt. Figurkrav: hvilken kurve skiftes, ny likevekt, retning. Kontrasten til fastkursregimet (kap. 3.3) der pengepolitikken forsvinner som virkemiddel.
- **Oppgavesjangre:** F. Mønstereksempel: «Bruk AA-DD-modellen til å sammenligne virkningen av en ekspansiv penge- og en ekspansiv finanspolitikk på produksjon og valutakurs under flytende kurs. Forklar hvorfor de to virker i samme retning på produksjonen, men motsatt på kursen.»
- **Typiske feil:** Skifte feil kurve (pengepolitikk → AA, finanspolitikk → DD); feil retning på $E$ (pengepolitikk depresierer, finanspolitikk appresierer); glemme forskjellen midlertidig/permanent finanspolitikk (langsiktig produksjonseffekt = null); ikke tolke mekanismen.
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 3.3: Valutaregimer: fast vs. flytende og fastkursforsvar

- **id:** `sok2009-3-3` · **number:** 3.3 · **estimatedMinutes:** 60 · **prerequisites:** `sok2009-3-2`
- **Kapitteltype:** teori
- **description:** Hva et fastkursregime betyr for den økonomiske politikken (tap av selvstendig pengepolitikk, mer virksom finanspolitikk, devaluering/revaluering), og hvordan man forsvarer en fast kurs under devalueringsforventninger — policy-delens kronspørsmål.
- **Eksamensbelegg:** ~85 % frekvens (sjanger G) — det høyest scorende enkelttemaet, kronspørsmålet i policy-delen (§4.4, §7 nivå 1). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Fastkursregimet:** sentralbanken forplikter seg til å holde $E$ fast → må bruke pengepolitikken til å forsvare kursen → **oppgir selvstendig pengepolitikk** (renten bindes til å holde UIP ved fast $E$: $R = R^* + (E^e - E)/E$, med $E$ fast). **Konsekvenser:** (i) pengepolitikk kan ikke lenger brukes til stabilisering (AA er «låst» til fast $E$ via reserveintervensjon); (ii) **finanspolitikk blir mer virksom** (ingen appresiering som utligner, fordi sentralbanken holder kursen fast → full produksjonseffekt); (iii) **devaluering/revaluering** blir nye virkemidler (en devaluering = et politisk vedtak om å heve $E$ → bedrer konkurranseevne og øker $Y$). **Fastkursforsvar under devalueringsforventninger:** hvis markedet forventer devaluering ($E^e$ opp) → utenlandsk avkastning stiger → salgspress mot innenlandsk valuta → sentralbanken må enten **selge valutareserver** (kan tømme reservene) eller **heve renten** kraftig (kostbart for økonomien) for å forsvare kursen; drøft dilemmaet (for lave reserver / for høy rente). **Devaluering vs. flytende:** hvorfor et land velger fast kurs (importere troverdighet/stabilitet) vs. kostnaden (tap av pengepolitisk selvstendighet). Figurkrav: reserveintervensjon i pengemarkedet, devalueringens skift.
- **Oppgavesjangre:** G (+ N-innledning). Mønstereksempel: «Et land har fast valutakurs mot en større valuta. Forklar hva dette betyr for landets penge- og finanspolitikk, og drøft hvordan landet kan forsvare kursen dersom det oppstår sterke forventninger om devaluering.»
- **Typiske feil:** Ufullstendig fastkurs-drøfting — nevne at pengepolitikken oppgis, men glemme at finanspolitikk blir mer virksom og at devaluering/revaluering blir nye virkemidler (§5.6); hoppe over forsvarsutfordringene (reserver, rentekostnad); blande devaluering (politisk, fast kurs) og depresiering (marked, flytende); ikke koble til UIP.
- **Quiz: 26 · Flashcards: 24**

#### Kapittel 3.4: Policy-trilemmaet og PPP

- **id:** `sok2009-3-4` · **number:** 3.4 · **estimatedMinutes:** 45 · **prerequisites:** `sok2009-3-3`
- **Kapitteltype:** teori
- **description:** Det pengepolitiske trilemmaet (fri kapitalflyt + fast kurs + selvstendig pengepolitikk — man kan bare ha to av tre), og kjøpekraftsparitet (PPP) som langsiktig anker for valutakursen.
- **Eksamensbelegg:** Trilemmaet (sjanger K) inngår i valutaregime-frekvensen ~85 % som fast begrep; PPP (sjanger L) ~55 % som langsiktig kursbestemmelse/konkurranseevne-anker. Prioritet: **kunne** (nivå 2–3; begge er faste begreper).
- **Innholdskontrakt:** **Policy-trilemmaet (den umulige treenigheten):** et land kan maksimalt ha to av (1) **fri kapitalflyt**, (2) **fast valutakurs**, (3) **selvstendig pengepolitikk**. Forklar hver kombinasjon: fast kurs + fri kapital → mister pengepolitikk (typisk valutaunion/fastkursland); fast kurs + selvstendig pengepolitikk → må ha kapitalkontroll; flytende kurs + fri kapital → beholder pengepolitikk (typisk store åpne økonomier). Koble til fastkurs-analysen (kap. 3.3): fastkursland med fri kapitalflyt *må* oppgi pengepolitikken. **PPP (kjøpekraftsparitet):** absolutt PPP ($P = EP^*$, dvs. realkurs $=1$) og relativ PPP (endringen i $E$ = inflasjonsdifferansen $\pi - \pi^*$); PPP som **langsiktig anker** for den nominelle kursen (ikke kortsiktig — kort sikt bestemmes i asset-markedet, kap. 2.1). Empiriske begrensninger ved PPP (ikke-omsettelige varer, prisstivhet) kort. Koble PPP til realvalutakursen og langsiktig konkurranseevne (kap. 1.4).
- **Oppgavesjangre:** K + L. Mønstereksempel (K): «Forklar det pengepolitiske trilemmaet, og hvilke to av de tre målene et land med fast kurs og fri kapitalflyt kan oppnå.» Mønstereksempel (L): «Forklar kjøpekraftsparitet og hvorfor den er et anker for valutakursen på lang, men ikke kort, sikt.»
- **Typiske feil:** Tro at alle tre trilemma-målene kan nås samtidig; feil kobling mellom regime og hvilket mål som ofres; bruke PPP som kortsiktig kursbestemmelse (den er langsiktig — asset-markedet bestemmer kort sikt); forveksle absolutt og relativ PPP.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 3.5: Drill: Krugman-/AA-DD-oppgaven

- **id:** `sok2009-3-5` · **number:** 3.5 · **estimatedMinutes:** 90 · **prerequisites:** `sok2009-3-4`, `sok2009-2-3`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på hele oppgave 1: fra gitte penge- og valutamarkedslikninger til fullført A-besvarelse med samlet likevekt, UIP-regnestykke, penge-/finanspolitikk og overshooting, AA-DD-analyse og fastkursforsvar.
- **Eksamensbelegg:** Dekker sjangrene B, C, D, E, F, G samlet — hele Krugman-oppgaven som utgjør ~40–60 % av hvert sett. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) presenter likevektslikningene ($M^s/P = L(R,Y)$, UIP) og tegn penge- + valutamarkedet med intuisjon bak helningene; 2) på investeringsspørsmål: regn UIP-avkastningen (innenlandsk vs. utenlandsk) og konkludér presist; 3) på et sjokk/politikk: identifiser (a) hvilken kurve skiftes (pengepolitikk → AA, finanspolitikk → DD, forventning → AA), (b) retning, (c) ny likevekt, (d) mekanismen i ord, (e) midlertidig vs. permanent (og overshooting hvis permanent pengepolitikk); 4) på AA-DD-spørsmål: utled/tegn begge kurver, finn simultan likevekt, husk endogen $Y$; 5) på regime-spørsmål: fast vs. flytende, hva fast kurs betyr, fastkursforsvar med reserver/rente; 6) merk alle kurver og akser, tolk alt verbalt. **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling ved hvert steg — særlig intuisjonen bak helningene, hele kjeden pengemarked→valutamarked, den analytiske likevektskursen, overshooting-tidsbanene, endogen inntekt, fastkursforsvaret). **10–15 oppgaver** på eksamensnivå som roterer tema (samlet likevekt / UIP-regning / midlertidig vs. permanent pengepolitikk / AA-utledning / AA-DD-sjokk / fastkurs) med nyskrevne, pent kalibrerte tall og `solution` + `hints`.
- **Oppgavesjangre:** B, C, D, E, F, G. Mønstereksempel (full kjede): «(a) Gjør rede for likevekten i penge- og valutamarkedet og forklar helningene. (b) Innenlandsk rente er 2 %, utenlandsk 4 %, dagens kurs 8, forventet kurs 7,9 — hvor lønner det seg å plassere? (c) Analyser en permanent økning i pengemengden med overshooting og tidsbaner. (d) Landet vurderer å binde kursen fast — forklar hva det betyr for finanspolitikkens virkning.»
- **Typiske feil:** Hele Krugman-repertoaret fra §5: kurver uten intuisjon (§5.1), midlertidig/permanent blandet (§5.2), glemt overshooting (§5.3), eksogent inntektssjokk i AA-DD (§5.4), feil UIP-fortegn (§5.5), ufullstendig fastkurs-drøfting (§5.6), umerkede figurer (§5.10).
- **Quiz: 16 · Flashcards: 10**

**Prøve-kvote Del 3:** 4 prøver (3.A begreper — AA-kurve/DD-kurve, fast/flytende kurs, devaluering/revaluering, trilemma, PPP, endogen inntekt, sjanger A; 3.B AA-DD komplett: utled begge kurver, simultan likevekt, etterspørselssjokk med endogen $Y$, sjanger E+F; 3.C penge- vs. finanspolitikk i AA-DD (flytende) + midlertidig/permanent, sjanger F; 3.D valutaregime: fast vs. flytende, fastkursforsvar under devalueringsforventninger med reserver/rente + trilemma, sjanger G+K).

---

### Del 4 — Valutaunion og troverdighet (De Grauwe) *(prioritet: PERFEKT/KUNNE — oppgave 2, den andre søylen)*

#### Kapittel 4.1: Barro-Gordon: Phillips-kurven og sentralbankens preferanser

- **id:** `sok2009-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `sok2009-1-3`
- **Kapitteltype:** teori
- **description:** Rammeverket for troverdighet: den utvidede Phillips-kurven, sentralbankens tapsfunksjon over inflasjon og ledighet, og indifferenskurvene som gir sentralbankens ønskede tilpasning.
- **Eksamensbelegg:** Grunnlaget for Barro-Gordon-oppgaven ~50 % (sjanger I). Sensor krever at rammeverket (Phillips-kurve + preferanser) presenteres før tidsinkonsistensen forklares (§4.7). Prioritet: **kunne** (nivå 2, fundament for 4.2).
- **Innholdskontrakt:** **Utvidet Phillips-kurve:** $u = u_n - \alpha(\pi - \pi^e)$ — ledigheten $u$ er under den naturlige raten $u_n$ bare når faktisk inflasjon $\pi$ overstiger forventet $\pi^e$ (overraskelsesinflasjon senker ledigheten midlertidig). **Sentralbankens tapsfunksjon:** taper på både inflasjon og ledighet, f.eks. $L = a\pi^2 + b(u - u^*)^2$ der $u^* < u_n$ (sentralbanken ønsker ledighet *under* den naturlige raten — kilden til inflasjonsbias). **Indifferenskurver** i $(\pi, u)$-planet (ellipser rundt bliss-punktet); sentralbanken vil helst ligge på lavest mulig $\pi$ og $u$ gitt Phillips-kurven. **Tilpasning:** gitt $\pi^e$ velger sentralbanken $\pi$ der en indifferenskurve tangerer Phillips-kurven. Legg grunnlaget for skillet **regelbundet** (forplikte seg til lav inflasjon) vs. **diskresjonær** (velge fritt hver periode) politikk — kilden til tidsinkonsistensen i kap. 4.2. Figurkrav: Phillips-kurve, indifferenskurver, tilpasningspunkt.
- **Oppgavesjangre:** I-fundament. Mønstereksempel: «Presenter Phillips-kurven og sentralbankens preferanser i troverdighetsmodellen, og forklar hvorfor sentralbanken kan ønske en ledighet under den naturlige raten.»
- **Typiske feil:** Feil retning på Phillips-kurven (overraskelses*inflasjon* senker ledighet); glemme at $u^* < u_n$ er kilden til inflasjonsbias; blande faktisk og forventet inflasjon; ikke koble preferansene til tilpasningen.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 4.2: Tidsinkonsistens, likevektsinflasjon og troverdighet

- **id:** `sok2009-4-2` · **number:** 4.2 · **estimatedMinutes:** 60 · **prerequisites:** `sok2009-4-1`
- **Kapitteltype:** teori
- **description:** Insentivet til overraskelsesinflasjon, hvorfor diskresjonær politikk gir høy likevektsinflasjon (tidsinkonsistens), og hvordan troverdighet — f.eks. via valutaunion — løser problemet.
- **Eksamensbelegg:** ~50 % frekvens (sjanger I) — kjernen i Barro-Gordon-oppgaven. Å forklare *hvorfor* diskresjon gir høy likevektsinflasjon (ikke bare beskrive Phillips-kurven) er A/B-markøren (§5.8). Prioritet: **perfekt** (nivå 1 mekanisme i nivå 2-søyle).
- **Innholdskontrakt:** **Insentivet til overraskelsesinflasjon:** gitt publikums forventning $\pi^e$, frister det sentralbanken til å sette $\pi > \pi^e$ for å presse ledigheten under $u_n$ (bevege seg langs Phillips-kurven). **Tidsinkonsistens:** en lovnad om lav inflasjon er ikke troverdig, fordi når forventningene først er dannet, lønner det seg å avvike → rasjonelt publikum forutser dette → hever $\pi^e$ → i likevekt ($\pi = \pi^e$) er ledigheten tilbake på $u_n$, men **inflasjonen er høy** (inflasjonsbias) — samfunnet ender med høy inflasjon *uten* lavere ledighet. **Regel vs. diskresjon:** en binding (regel) til lav inflasjon ville gitt bedre utfall, men er ikke troverdig uten en forpliktelsesmekanisme. **Løsninger:** uavhengig sentralbank med inflasjonsmål; **valutaunion/fast kurs mot et lavinflasjonsland** = **importert troverdighet** (landet «låner» en troverdig sentralbanks anti-inflasjonsrykte — euro som løsning på et høyinflasjonslands troverdighetsproblem); konservativ sentralbanksjef (Rogoff). Vis hvordan likevektsinflasjonen varierer med sentralbankens preferanser (høyere vekt på ledighet → høyere bias) og arbeidsmarkedsstruktur. Figurkrav: diskresjonær likevekt (høy $\pi$, $u = u_n$) vs. regel-likevekt (lav $\pi$, $u = u_n$).
- **Oppgavesjangre:** I (+ N). Mønstereksempel: «Forklar insentivet til overraskelsesinflasjon og hvorfor diskresjonær pengepolitikk gir høy likevektsinflasjon uten lavere ledighet. Diskuter hvordan medlemskap i en valutaunion kan løse et lands inflasjonsproblem.»
- **Typiske feil:** Beskrive Phillips-kurven uten å forklare *hvorfor* diskresjon gir høy likevektsinflasjon — mangle tidsinkonsistensen (§5.8, selve fella); glemme at ledigheten i likevekt er tilbake på $u_n$ (bare inflasjonen er høyere); ikke forklare valutaunion som *importert* troverdighet; tro at overraskelsesinflasjon virker i likevekt (den virker bare når den er uventet).
- **Quiz: 24 · Flashcards: 24**

#### Kapittel 4.3: Optimalt valutaområde og asymmetriske sjokk

- **id:** `sok2009-4-3` · **number:** 4.3 · **estimatedMinutes:** 60 · **prerequisites:** `sok2009-3-3`
- **Kapitteltype:** teori
- **description:** To-landsmodellen for en valutaunion, hvordan et asymmetrisk etterspørselssjokk rammer, og de automatiske justeringsmekanismene (lønnsfleksibilitet, arbeidsmobilitet) med deres hindringer.
- **Eksamensbelegg:** ~55 % frekvens (sjanger J) — den andre De Grauwe-varianten (alternerer med Barro-Gordon). Å drøfte justeringsmekanismene *med* hindringene og finanspolitikkens statsgjeldsbegrensning er C→A-skillet (§5.7). Prioritet: **perfekt** (nivå 1 i søyla).
- **Innholdskontrakt:** **To-landsmodellen:** aggregert etterspørsel/tilbud for to land i en union (typisk «Frankrike» og «Tyskland»). **Asymmetrisk etterspørselssjokk:** etterspørselen faller i land A og stiger i land B (f.eks. forbruket flyttes fra franske til tyske varer) → land A får ledighet/lavkonjunktur, land B overoppheting. **Problemet i union:** landene deler valuta og pengepolitikk → **pengepolitikken kan ikke virke asymmetrisk** (én rente for begge; devaluering er umulig for enkeltland). **Automatiske justeringsmekanismer:** (i) **lønnsfleksibilitet** (lønningene faller i A, stiger i B → gjenoppretter konkurranseevne) — hindret av lønnsstivhet, fagforeninger; (ii) **arbeidsmobilitet** (arbeidsledige flytter fra A til B) — hindret av språk-/kulturbarrierer, bolig, pensjonsrettigheter. **Finanspolitikk:** kan i prinsippet stabilisere asymmetrisk, men er **begrenset av statsgjeld** (og av unionens finanspolitiske regler). **Utenfor union:** land A kunne devaluert / ført ekspansiv pengepolitikk → dette er *kostnaden* ved unionsmedlemskap. Koble til **OCA-kriteriene** (Mundell): et område er et optimalt valutaområde hvis sjokkene er symmetriske *eller* justeringsmekanismene (lønn/mobilitet/finanspolitisk overføring) er sterke nok. Figurkrav: AD-AS for de to landene med det asymmetriske sjokket.
- **Oppgavesjangre:** J. Mønstereksempel: «Bruk en to-landsmodell til å drøfte hvorfor et asymmetrisk etterspørselssjokk er en utfordring i en valutaunion, og hvilke justeringsmekanismer som finnes når pengepolitikken ikke kan virke asymmetrisk.»
- **Typiske feil:** Overfladisk svar — liste justeringsmekanismene (lønn, mobilitet) uten å drøfte hindringene og finanspolitikkens statsgjeldsbegrensning (§5.7); tro at pengepolitikken kan brukes asymmetrisk i en union; glemme at devaluering er utelukket for enkeltland i union; ikke koble til OCA-kriteriene.
- **Quiz: 24 · Flashcards: 24**

#### Kapittel 4.4: Kostnader og gevinster ved en valutaunion (OCA-avveiningen)

- **id:** `sok2009-4-4` · **number:** 4.4 · **estimatedMinutes:** 45 · **prerequisites:** `sok2009-4-2`, `sok2009-4-3`
- **Kapitteltype:** teori
- **description:** Den samlede avveiningen: gevinstene (redusert transaksjonskostnad/usikkerhet, importert inflasjonstroverdighet) mot kostnadene (tap av selvstendig pengepolitikk og valutakurs som justeringsverktøy) — grunnlaget for den verbale politikkvurderingen.
- **Eksamensbelegg:** Sammenfatter De Grauwe-søylen (inngår i ~55 % OCA + ~50 % troverdighet); ofte avslutningen på oppgave 2 (verbal vurdering, sjanger N). Prioritet: **kunne** (nivå 2; sammenbindende).
- **Innholdskontrakt:** **Gevinster ved valutaunion:** (i) lavere transaksjonskostnader og valutakursusikkerhet → mer handel og investering; (ii) **importert inflasjonstroverdighet** (kap. 4.2) — særlig verdifullt for høyinflasjonsland; (iii) prisgjennomsiktighet, dypere finansmarkeder. **Kostnader:** (i) tap av **selvstendig pengepolitikk** (kan ikke svare på asymmetriske sjokk — kap. 4.3); (ii) tap av **valutakursen** som justeringsverktøy (ingen devaluering); (iii) sårbarhet hvis justeringsmekanismene (lønn/mobilitet/finanspolitikk) er svake. **Avveiningen (OCA):** unionen lønner seg jo mer (a) sjokkene er symmetriske, (b) arbeidsmarkedene er fleksible/mobile, (c) det finnes finanspolitiske overføringsmekanismer, og (d) inflasjonstroverdigheten er verdt mer enn det tapte justeringsverktøyet. **Vurderingsstruktur (forbereder sjanger N, kap. 5.3):** vei gevinst mot kostnad for et konkret land ut fra dets sjokkstruktur og arbeidsmarked; konkludér begrunnet. Koble til euroen som case (Sør-Europa vs. kjernen).
- **Oppgavesjangre:** J + N-fundament. Mønstereksempel: «Drøft de viktigste gevinstene og kostnadene ved å bli med i en valutaunion, og hvilke forhold som avgjør om medlemskap lønner seg for et land.»
- **Typiske feil:** Liste gevinster/kostnader uten å veie dem mot hverandre; glemme importert troverdighet som gevinst *eller* tap av justeringsverktøy som kostnad; ikke koble til landets konkrete sjokkstruktur; behandle vurderingen som løs synsing i stedet for modellforankret.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 4.5: Drill: De Grauwe-oppgaven

- **id:** `sok2009-4-5` · **number:** 4.5 · **estimatedMinutes:** 85 · **prerequisites:** `sok2009-4-4`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på hele oppgave 2: fra rammeverk til fullført A-besvarelse i begge De Grauwe-varianter — Barro-Gordon/troverdighet og asymmetriske sjokk/OCA — avsluttet med verbal vurdering.
- **Eksamensbelegg:** Dekker sjangrene I, J (+ N) samlet — hele De Grauwe-oppgaven som utgjør ~40–60 % av hvert sett (de to variantene alternerer). Prioritet: **perfekt/kunne**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) identifiser varianten (troverdighet → Barro-Gordon; asymmetrisk sjokk → to-landsmodell/OCA); 2) **(Barro-Gordon):** presenter Phillips-kurve + preferanser, forklar insentivet til overraskelsesinflasjon, utled tidsinkonsistensen og den høye diskresjonære likevektsinflasjonen, vis hvordan valutaunion/regel gir importert troverdighet, tegn de to likevektene; 3) **(asymmetrisk sjokk):** sett opp to-landsmodellen, analyser sjokket, drøft justeringsmekanismene (lønn/mobilitet) *med hindringer* og finanspolitikkens statsgjeldsbegrensning, koble til OCA; 4) vei gevinster mot kostnader (kap. 4.4); 5) avslutt med **verbal politikkvurdering** (sjanger N) forankret i modellen; 6) merk alle figurer og tolk verbalt. **Gjennomskrevet eksamenscase med sensor-margnotater** (uttelling ved hvert steg — særlig tidsinkonsistensen, importert troverdighet, justeringsmekanismene med hindringer, den modellforankrede vurderingen). **8–12 oppgaver** på eksamensnivå som roterer variant (Barro-Gordon / asymmetrisk sjokk / OCA-avveining) × leveranse (utledning / drøfting / vurdering) med nyskrevne kontekster og `solution` + `hints`.
- **Oppgavesjangre:** I, J, N. Mønstereksempel (full kjede): «(a) Forklar hvorfor et land med diskresjonær pengepolitikk ender med høy likevektsinflasjon. (b) Hvordan kan medlemskap i en valutaunion løse dette? (c) Men unionen rammes av et asymmetrisk etterspørselssjokk — drøft justeringsmekanismene når pengepolitikken ikke kan virke asymmetrisk. (d) Vurder samlet om medlemskap lønner seg for landet.»
- **Typiske feil:** Hele De Grauwe-repertoaret fra §5: Barro-Gordon uten tidsinkonsistens (§5.8), overfladisk asymmetrisk-sjokk-svar uten hindringer/statsgjeld (§5.7), justeringsmekanismer listet uten drøfting, verbal vurdering som løs synsing i stedet for modellforankret, umerkede figurer (§5.10).
- **Quiz: 14 · Flashcards: 10**

**Prøve-kvote Del 4:** 4 prøver (4.A begreper — Phillips-kurve, overraskelsesinflasjon, tidsinkonsistens, importert troverdighet, asymmetrisk sjokk, OCA, sjanger A; 4.B Barro-Gordon: overraskelsesinflasjon + tidsinkonsistens + diskresjonær likevektsinflasjon + valutaunion som løsning, sjanger I; 4.C asymmetriske sjokk i union: to-landsmodell + justeringsmekanismer med hindringer + finanspolitikk vs. statsgjeld + OCA, sjanger J; 4.D OCA-avveiningen + verbal politikkvurdering på eksamensnivå, sjanger J+N).

---

### Del 5 — Eksamenstrening

#### Kapittel 5.1: Begrepsdrill: de faste begrepsgjengangerne

- **id:** `sok2009-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `sok2009-4-4`
- **Kapitteltype:** eksamenstrening (begrepsdrill)
- **description:** Konsentrert drill på de ~12–15 begrepene som går igjen som korte deloppgaver (sjanger A) i begge søyler — presise, poengterte definisjoner slik sensor vil se dem.
- **Eksamensbelegg:** Sjanger A — faste begrepsgjengangere som gir sikre poeng (nominell/real valutakurs, UIP, AA/DD-kurven, fast/flytende kurs, devaluering/revaluering, trilemma, PPP, overshooting, tidsinkonsistens, importert troverdighet, asymmetrisk sjokk, OCA, driftsbalanse, realkurs/konkurranseevne). Prioritet: **perfekt** (sikre poeng i hvert sett).
- **Innholdskontrakt:** Samler alle begrepene fra Del 1–4 i én drill: hvert begrep med (i) presis definisjon i emnets notasjon, (ii) den ene setningen som gir uttelling, (iii) den vanligste feilen. **Løsningsoppskrift for sjanger A:** definer presist → gi mekanismen/intuisjonen i én setning → evt. liten figur → ikke skriv lengre enn nødvendig (poengtert). **12–15 korte oppgaver** («forklar kort …») med modellsvar på 3–5 setninger hver, koblet til kapitlet som dekker temaet. Understrek at begrepene *ikke* forutsettes kjent — de må defineres eksplisitt (sensorkrav).
- **Oppgavesjangre:** A. Mønstereksempel: «Forklar kort hva overshooting er, og hvorfor det oppstår ved en permanent pengemengdeøkning.»
- **Typiske feil:** Vage/upresise definisjoner; hoppe over intuisjonen; skrive for langt (ineffektiv tidsbruk); definere fra hukommelse med feil fortegn/retning.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 5.2: Sjanger C-drill: rentepariteten og investeringsvalget

- **id:** `sok2009-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** `sok2009-1-2`
- **Kapitteltype:** eksamenstrening (regnedrill)
- **description:** Ren regnedrill på UIP-investeringsoppgaven — de faste regnepoengene: avkastning innenlandsk vs. utenlandsk plassering, konklusjon, og ny beregning ved endret rente/forventning.
- **Eksamensbelegg:** Sjanger C (~65 %) — de eneste faste regneoppgavene; dukker opp i nesten hver Krugman-oppgave (H2020, H2021, H2023). Prioritet: **perfekt** (garanterte poeng).
- **Innholdskontrakt:** **Løsningsoppskrift:** 1) skriv UIP $R = R^* + (E^e - E)/E$; 2) regn utenlandsk forventet avkastning $R^* + (E^e - E)/E$; 3) sammenlign med innenlandsk $R$; 4) konkludér hvor det lønner seg å plassere; 5) forklar i én setning (forventet appresiering/depresiering av innenlandsk valuta); 6) regn på nytt ved endret rente eller forventning. **Gjennomregnet case med margnotater** (særlig fortegnsdisiplinen i $(E^e - E)/E$ og den presise konklusjonen). **10–14 varianter** på eksamensnivå: ulike rentekombinasjoner, ulike forventede kurser (appresiering/depresiering), «hva skal forventet kurs være for at plasseringene er likeverdige?» (løs UIP for $E^e$), og «hva blir svaret om renten endres?». Alle med nyskrevne tall kalibrert til pene svar og `solution` + `hints`. Understrek at dette er de sikreste poengene på hele eksamen.
- **Oppgavesjangre:** C. Mønstereksempel: «Innenlandsk rente 3 %, utenlandsk 1 %, kurs i dag 5, forventet kurs 5,15. Hvor lønner det seg å plassere? Hvilken forventet kurs ville gjort plasseringene likeverdige?»
- **Typiske feil:** Feil fortegn i $(E^e - E)/E$ (§5.5); glemme å konkludere presist; regne utenlandsk avkastning uten depresieringsleddet; ikke kunne løse UIP for $E^e$ eller $E$.
- **Quiz: 16 · Flashcards: 12**

#### Kapittel 5.3: Sjanger N: den verbale valutaregime-/troverdighetsvurderingen (drøfting)

- **id:** `sok2009-5-3` · **number:** 5.3 · **estimatedMinutes:** 55 · **prerequisites:** `sok2009-4-4`, `sok2009-3-4`
- **Kapitteltype:** eksamenstrening (drøfting-sjanger, jf. `DNA-drofting.md`)
- **description:** Hvordan man skriver den verbale politikkvurderingen som avslutter både fastkurs- og valutaunion-oppgaven — modellforankret drøfting, ikke løs synsing, med disposisjon og gjennomskrevet A-besvarelse.
- **Eksamensbelegg:** Sjanger N — den verbale vurderingen (skal et land binde kursen fast / bli med i valutaunionen?) som runder av oppgave 2 (og fastkurs-delen av oppgave 1). Ved åpne hjelpemidler (hjemme-eksamen) er nettopp denne intuisjons-/vurderingsdelen tungt vektet (§4.4). Prioritet: **kunne** (nivå 2; hever oppgave 2 til A).
- **Innholdskontrakt (drøftings-mal):** **Oppskrift (trinn-for-trinn):** 1) klargjør spørsmålet (fast vs. flytende kurs / union vs. selvstendig valuta) og landets situasjon (sjokkstruktur, inflasjonshistorie, arbeidsmarked); 2) **modellforankring:** hva sier analysen (fast kurs → tap av pengepolitikk, kap. 3.3; union → importert troverdighet, kap. 4.2, men tap av asymmetrisk justering, kap. 4.3); 3) vei **gevinst mot kostnad** (kap. 4.4) — argument og motargument; 4) konkludér begrunnet, betinget av landets forhold. **Gjennomskrevet A-besvarelse** med margkommentarer («her: modellforankring — dette løfter fra synsing til A», «her: motargument — ser begge sider»). **Tidsbudsjett** for vurderingsdelen i eksamenssituasjonen. **4–6 momentliste-oppgaver:** ulike land/kontekster (høyinflasjonsland som vurderer euro; land med asymmetrisk sjokkstruktur; råvareøkonomi med egne sjokk) med disposisjon + momentliste som løsning (ikke fullt essay). Understrek at vurderingen **alltid forankres i den forutgående modellen**, aldri i pensumforfattere eller løs synsing.
- **Oppgavesjangre:** N. Mønstereksempel: «Et land med høy og ustabil inflasjon vurderer å bli med i en valutaunion med et lavinflasjonsland. Drøft, forankret i modellene, om medlemskap er en god idé, og konkludér.»
- **Typiske feil:** Løs synsing uten modellforankring; ensidig svar uten motargument; gjengivelse av modellen uten å faktisk *vurdere*; glemme at kostnaden (tap av asymmetrisk justering) må veies mot gevinsten (troverdighet); ikke konkludere.
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 5.4: Øvingseksamener med løsningsforslag

- **id:** `sok2009-5-4` · **number:** 5.4 · **estimatedMinutes:** 180 · **prerequisites:** `sok2009-5-3`, `sok2009-5-2`
- **Kapitteltype:** eksamenstrening (øvingseksamener)
- **description:** Tre komplette øvingseksamener som speiler to-søyle-malen og vektingsvariantene, med fullstendige løsningsforslag skrevet som A-besvarelser og delpoeng-notater.
- **Eksamensbelegg:** Speiler den «typiske» eksamenen (analysens §2/§7): oppgave 1 Krugman (asset-market/AA-DD/valutaregime), oppgave 2 De Grauwe (troverdighet *eller* asymmetriske sjokk), med varierende vekting. Prioritet: **perfekt** (helhetstrening under tidspress).
- **Innholdskontrakt:** **Tre komplette sett** (4 timer, 240 min hver), nyskrevne oppgaver som speiler temafordelingen:
  1. **Øvingseksamen 1 (50/50):** oppgave 1 Krugman (samlet asset-market-likevekt + UIP-regning + midlertidig/permanent pengepolitikk med overshooting + AA-utledning); oppgave 2 De Grauwe (Barro-Gordon: overraskelsesinflasjon + tidsinkonsistens + euro som troverdighetsløsning + verbal vurdering).
  2. **Øvingseksamen 2 (60/40):** oppgave 1 Krugman (full AA-DD med et etterspørsels-/finanspolitisk sjokk + fastkursregime og fastkursforsvar + trilemma); oppgave 2 De Grauwe (asymmetriske sjokk i union: to-landsmodell + justeringsmekanismer med hindringer + OCA + verbal vurdering).
  3. **Øvingseksamen 3 (treoppgavevariant, ~1/3 hver):** oppgave 1 penge-/valutamarked + UIP; oppgave 2 AA-DD-analyse (skilt ut som egen oppgave); oppgave 3 De Grauwe (troverdighet *og* kort OCA-vurdering). Poeng-vektet à la H2023/V2024.
  Hvert sett har **løsningsforslag i eget `collapsible` per oppgave**, skrevet som A-besvarelse (likninger + figurbeskrivelse i ord med navngitte kurver/akser + verbal intuisjon), med `tip`-notat om delpoeng/vekting og hva som skiller karakternivåene. Alle tall nyskrevne og pent kalibrerte.
- **Oppgavesjangre:** Alle A–N samlet minst én gang på tvers av de tre settene; begge De Grauwe-variantene og både 50/50-, 60/40- og treoppgavemalen dekkes.
- **Typiske feil:** Feilkatalogen (§5) samlet — hver oppgaves løsning peker på de feilene den avslører (kurver uten intuisjon, midlertidig/permanent, overshooting, endogen inntekt, UIP-fortegn, fastkurs-drøfting, tidsinkonsistens, asymmetrisk-sjokk-hindringer, umerkede figurer).
- **Quiz: 8 · Flashcards: 6**

**Prøve-kvote Del 5:** 4 prøver (5.A blandet begrepsdrill i eksamensformat — seks korte begreper på tvers av begge søyler, sjanger A; 5.B UIP-regnedrill: flere investeringscase med konklusjon og «finn likeverdig forventet kurs», sjanger C; 5.C verbal valutaregime-/troverdighetsvurdering på eksamensnivå, modellforankret, sjanger N; 5.D full eksamensoppgave — én Krugman + én De Grauwe under tidspress, sjanger B–N).

---

## 4. Prøver og øvingseksamener (samlet oversikt)

Alle prøve-id-er følger `sok2009-<del>-prove` med chapterNumber `<del>.P`. Hver
temadel (1–5) har **4 prøver** (sjanger-/vanskelighetsvarierte), til sammen **20
prøver**, pluss de **3 øvingseksamenene** i kap. 5.4. Prøvene og settene dekker
samlet sjangrene A–N minst én gang, og både 50/50-, 60/40-, 40/60- og
treoppgavemalen.

**Del 1 — Fundament:** 1.A begreper (valutakurs/UIP/driftsbalanse) · 1.B UIP-regnestykke · 1.C pengemarkedet · 1.D driftsbalanse og realkurs.
**Del 2 — Asset-market/AA:** 2.A samlet asset-market-likevekt · 2.B midlertidig/permanent pengepolitikk + overshooting · 2.C AA-utledning · 2.D DD-utledning + AA/DD-kontrast.
**Del 3 — AA-DD/valutaregime:** 3.A begreper (AA/DD/regime/trilemma/PPP) · 3.B AA-DD komplett med sjokk (endogen $Y$) · 3.C penge- vs. finanspolitikk i AA-DD · 3.D fastkursforsvar + trilemma.
**Del 4 — Valutaunion/troverdighet:** 4.A begreper (Phillips/tidsinkonsistens/OCA) · 4.B Barro-Gordon komplett · 4.C asymmetriske sjokk + OCA · 4.D OCA-avveining + verbal vurdering.
**Del 5 — Eksamenstrening:** 5.A blandet begrepsdrill · 5.B UIP-regnedrill · 5.C verbal vurdering · 5.D full to-søyle-eksamensoppgave.

**Øvingseksamener (3 komplette sett, i kap. 5.4):** (1) 50/50 Krugman + Barro-Gordon; (2) 60/40 AA-DD/fastkurs + asymmetriske sjokk/OCA; (3) treoppgavevariant (penge-/valutamarked + AA-DD + De Grauwe), poeng-vektet.

---

## 5. Studieguide-kjerne (fra Del 0 + samlende ressurser)

Del 0 (kap. 0.1) er studieguidens kjerne. I tillegg skal boka samle:

1. **Eksamenskartet** — to-søyle-malen (Krugman + De Grauwe), vektingshistorikken (50/50, 60/40, 40/60, treoppgavevariant), temafrekvens-tabellen, sjangerkatalogen A–N og prognosen for neste eksamen (§1, §7 i analysen).
2. **De to søylene i ett blikk** — Krugman-søylen (valuta-/pengemarked → samlet asset-market-likevekt → UIP-regning → midlertidig/permanent pengepolitikk + overshooting → AA-utledning → AA-DD → valutaregimer/fastkursforsvar/trilemma) og De Grauwe-søylen (Barro-Gordon/troverdighet ↔ asymmetriske sjokk/OCA-avveining), med UIP og driftsbalanse som felles fundament.
3. **Sensorens metaregler** — likninger + figur + intuisjon som én leveranse; merk alle kurver og akser; utled likevektskursen analytisk; regn og tolk rentepariteten; kjenn forutsetningene (endogen $Y$, kort/lang sikt, midlertidig/permanent); mekanismen teller mer enn resultatet; intuisjon veier tyngst ved åpne hjelpemidler.
4. **Feilkatalogen** — de 10 typiske feilene (§5 i analysen) samlet, hver med henvisning til kapitlet som forebygger den: kurver uten intuisjon (2.1/2.4); midlertidig/permanent blandet (2.2/2.3); glemt overshooting (2.3); eksogent inntektssjokk i AA-DD (3.1); feil UIP-fortegn (1.2/5.2); ufullstendig fastkurs-drøfting (3.3); overfladisk asymmetrisk-sjokk-svar (4.3); Barro-Gordon uten tidsinkonsistens (4.2); nominell/real-kurs forvekslet (1.1/1.4); umerkede figurer (overalt).
5. **Formelark i emnets notasjon** — én side: UIP $R = R^* + (E^e - E)/E$; likevektskurs $E \approx E^e/(1 + R - R^*)$; pengemarked $M^s/P = L(R,Y)$; varemarked $Y = C(Y-T) + I + G + CA(EP^*/P, Y-T)$; realkurs $q = EP^*/P$; $CA = S - I$; PPP (absolutt $P = EP^*$, relativ $\Delta E \approx \pi - \pi^*$); Phillips $u = u_n - \alpha(\pi - \pi^e)$; sentralbankens tapsfunksjon; AA (fallende) / DD (stigende). Marker hva som skal *utledes/tolkes* (likevektskurs, AA-helning, UIP-avkastning, overshooting) vs. hva som bare slås opp i formelsamlingen (prosentregning, derivasjonsregler).
6. **Figurbiblioteket** — standardfigurene i ord: pengemarkedet (rente vertikalt); det tosidige penge-/valutamarkedsdiagrammet med likevektskurs; midlertidig vs. permanent pengepolitikk med overshooting-tidsbaner ($M^s$, $R$, $P$, $E$); AA-kurven (fallende) og DD-kurven (stigende) med skift; AA-DD samlet likevekt med et sjokk; fastkurs med reserveintervensjon og devaluering; Phillips-kurve + sentralbankens indifferenskurver med diskresjonær vs. regel-likevekt; to-landsmodell (AD-AS) med asymmetrisk sjokk — med merkekravene per figur (akser, kurver, tilpasningspunkter, skift navngitt; retning på $E$ angitt).
7. **Studieløp** — anbefalt progresjon (10-ukers og 3-ukers intensivvariant): Del 1 (fundamentet: valutakurs/UIP/pengemarked/driftsbalanse) → Del 2 (asset-market/AA) → Del 3 (AA-DD/valutaregimer) → Del 4 (valutaunion/troverdighet), prøver underveis, begrepsdrillen (5.1), UIP-regnedrillen (5.2) og vurderings-sjangeren (5.3) parallelt, øvingseksamenene (5.4) de siste ukene under tidspress (240 min, én Krugman + én De Grauwe).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `sok2009` med alle 24 kapitler
   (id/number/title/description/estimatedMinutes/topics/prerequisites) etter mønster
   `COURSE_BI_OKONOMI` i `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra
   makrostruktur-tabellen (§2). Registrer emnet i
   `src/app/bok/trinn/hoyere/institusjoner.ts` under **NTNU** med visningsnavn
   «SØK2009 Internasjonal makroøkonomi».
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–N, frekvenstallene, to-søyle-malen
   og avgrensningen (mot mikroemnene og masternivået) som resten refererer til.
3. **Del 1** (fundament) — valutakurs, UIP, pengemarked, driftsbalanse som resten bruker.
4. **De to søylene i avhengighetsrekkefølge**: Del 2 (asset-market/AA) → Del 3
   (AA-DD/valutaregimer) → Del 4 (valutaunion). Del 2+3 er Krugman-søylen (kan bygges
   av samme eller to koordinerte agenter — gi da begge hele kontrakten og flagg for
   konsistenssjekk: notasjon $E$/UIP, AA fallende/DD stigende, endogen $Y$). Del 4 er
   De Grauwe-søylen. Drillkapitlene (3.5 / 4.5) bygges av samme agent som søylen.
5. **Del 5 til slutt** (begrepsdrill + UIP-regnedrill + vurderings-sjanger + 3
   øvingseksamener gjenbruker alt); bygges av én agent som leser hele skjelettet.
6. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert; prøvene
   (§4) i prøvekapitler per del etter byggekontraktens spesifikasjon
   (`sok2009-<del>-prove`, chapterNumber `<del>.P`), Del 1–5.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse` (generer
      helst via `json.dump`; husk å escape `"` i norske sitattegn); `npm run build` grønn.
- [ ] **LaTeX**: alle formler i `$...$`/`$$...$$` med dobbel backslash i JSON
      (`\\frac`, `\\alpha`, `\\pi`, `\\Delta`); ingen unicode-brøker; konsistent
      $E$, $E^e$, $R$, $R^*$, $M^s/P = L(R,Y)$, $CA$, $q = EP^*/P$, $u_n$, $\pi^e$.
- [ ] **Notasjonskonsistens**: tekstsøk over alle sok2009-filer — **påkrevd**:
      $E$ = innenlandsk per utenlandsk med **depresiering = høyere $E$**, UIP
      $R = R^* + (E^e - E)/E$, AA **fallende** / DD **stigende**, **endogen $Y$** i
      AA-DD, $CA = S - I$; **forbudt/uønsket**: å bygge ut lukket-økonomi-makro uten
      utland, vekstteori, eller mikrostoff — grep etter «nyttemaks», «indifferenskurve»,
      «monopol», «Cournot», «Nash», «vekstmodell», «Solow» skal gi **null treff**.
- [ ] **UIP-kravet**: kap. 1.2, 5.2, 3.5 og øvingseksamenene har eksplisitt
      UIP-regnestykket med korrekt fortegn i $(E^e - E)/E$ og presis konklusjon
      (forventet appresiering/depresiering) — grep-sjekk «renteparitet»/«UIP».
- [ ] **AA-DD-kravet**: kap. 2.4, 2.5, 3.1, 3.5 og øvingseksamenene utleder AA (fallende,
      med hele kjeden $Y\uparrow\to R\uparrow\to$ appresiering) og DD (stigende), setter
      dem sammen, og behandler **inntekt som endogen** (aldri skift $Y$ eksogent) —
      grep-sjekk «AA-kurven», «endogen».
- [ ] **Fastkurs-/regime-kravet**: kap. 3.3, 3.4, 3.5 og øvingseksamenene skiller
      eksplisitt fast fra flytende, viser at pengepolitikken oppgis + finanspolitikk
      blir mer virksom + devaluering/revaluering blir virkemidler, drøfter fastkursforsvar
      (reserver/rente) og trilemmaet.
- [ ] **De Grauwe-kravet**: kap. 4.1, 4.2, 4.5 forklarer **tidsinkonsistensen** (ikke bare
      Phillips-kurven) og **importert troverdighet**; kap. 4.3, 4.5 drøfter asymmetriske
      sjokk med **justeringsmekanismene OG hindringene** og finanspolitikkens
      statsgjeldsbegrensning + OCA.
- [ ] **Likninger + figur + intuisjon**: hvert eksempel og løsningsforslag med figur har
      figurbeskrivelse i ord (akser, kurver, tilpasningspunkter, skift navngitt; retning
      på $E$ angitt) OG verbal intuisjon; alle tallsvar (UIP-avkastning, likevektskurs)
      er verbalt tolket; mekanismen bak helninger/skift forklart.
- [ ] **Drøftingselementet**: kap. 5.3, prøve 4.D/5.C og øvingseksamenenes De Grauwe-/
      fastkurs-oppgaver inneholder en **verbal politikkvurdering** forankret i modellen
      (fast kurs → tap av pengepolitikk; euro → importert troverdighet), ikke løs synsing.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra
      dette skjelettet), Forkunnskaper-`text` med lenker + Symbol- og formelliste-
      `collapsible` (per delkapittel — forklarer ALLE symboler brukt), Typiske feil-
      `warning`, 2–4 eksempler (siste på eksamensnivå), 6–12 øvinger med `solution` +
      `hints`, repetisjons-`collapsible`; drillkapitlene (3.5, 4.5) har løsningsoppskrift
      + sensor-kommentert case + 8–15 oppgaver; sjangerkapitlet 5.3 følger drøftings-
      malen (oppskrift + gjennomskrevet A-besvarelse + momentliste-oppgaver).
- [ ] **Quiz-sum ≥ 524 og flashcard-sum ≥ 528** per kvotetabellen (kontrollsummér mot
      §3-tabellen og KVOTESAMMENDRAG under — det er autoritativt).
- [ ] **Prøver**: 4 per temadel 1–5 (20 stk) + 3 øvingseksamener; settene og prøvene
      dekker samlet sjangrene A–N minst én gang, og både 50/50-, 60/40-, 40/60- og
      treoppgavemalen.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, egne kontekster (land,
      valutaer, sjokk), egne formuleringer; ingen formuleringer fra reelle sett eller
      sensorveiledninger (skjelettets mønstereksempler er selv omskrivninger og skal
      varieres videre, ikke kopieres ordrett inn); kalibreringsverdiene fra reelle
      fasiter (f.eks. dollarrente 1 %, eurorente 4 %, kurs 1 → forventet 0,99) brukes kun
      til å velge vanskelighetsgrad, aldri som oppgavetall; pensum (Krugman/Obstfeld/
      Melitz *International Economics* + De Grauwe *Economics of Monetary Union*)
      refereres, aldri siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter (200 +
      kapittelspesifikk streng), jf. lærdommen om `getChapterMeta`; institusjonssiden
      (NTNU) og bokforsiden (seksjonstitlene fra §2) sjekkes.

---

## KVOTESAMMENDRAG (AUTORITATIV — quiz ≥ 500 OG flashcards ≥ 500)

Per-kapittel-kvotene fra §3 summerer til totalene under. Denne tabellen er fasit
for alle senere faser; ingen agent skal overstyre den i prompt. Tettheten er
kalibrert til et **grafisk-analytisk modellfag med to jevnstore søyler**: middels
høy quiz-tetthet (mange modellmekanismer og fortegns-/retningsspørsmål egner seg
godt til quiz) og litt høyere flashcard-tetthet enn quiz (fagets mange presise
begreper — UIP, AA/DD, trilemma, tidsinkonsistens, OCA — og fortegns-/
helningsregler egner seg som kort). 24 kapitler à moderat tetthet gir komfortabel
margin over gulvet på 500.

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 — Eksamenskart | 0.1 | 14 | 14 |
| 1 — Fundament | 1.1–1.4 | 86 | 88 |
| 2 — Asset-market/AA | 2.1–2.5 | 116 | 106 |
| 3 — AA-DD/valutaregimer | 3.1–3.5 | 116 | 100 |
| 4 — Valutaunion/troverdighet | 4.1–4.5 | 104 | 102 |
| 5 — Eksamenstrening | 5.1–5.4 | 58 | 56 |
| **SUM** | **24 kapitler** | **494** | **466** |

**Justering til over gulvet:** rådataene over summerer til 494 quiz / 466
flashcards. For å ligge trygt over 500-gulvet med margin **skal forfatteren legge
til** ved bygging (jevnt fordelt på de nevnte kapitlene, uten å endre strukturen):

- **Quiz:** +30 fordelt slik at totalen blir **524** — f.eks. +6 på hvert av de fem
  drill-/regne-/begrepskapitlene (3.5, 4.5, 5.1, 5.2, 5.4) eller jevnt over søyle-
  kapitlene. Måltall per del etter justering: Del 0 = 14, Del 1 = 90, Del 2 = 120,
  Del 3 = 122, Del 4 = 110, Del 5 = 68 → **524**.
- **Flashcards:** +62 fordelt slik at totalen blir **528** — begrepstettheten bærer
  dette godt (fortegns-/helningsregler, alle A-begrepene, De Grauwe-terminologien).
  Måltall per del etter justering: Del 0 = 16, Del 1 = 100, Del 2 = 120, Del 3 = 116,
  Del 4 = 114, Del 5 = 62 → **528**.

**Autoritative totaler etter justering: Quiz = 524, Flashcards = 528** (begge
> 500-gulvet). Ved bygging skal hvert kapittels faktiske quiz/fc telles og
summen kontrolleres mot disse tallene før «ferdig».

**Prøver:** 20 temaprøver (4 per del × 5 deler) + 3 øvingseksamener = 23 sett.

---

## 7. Arbeidsdeling mot bygde SOK-/økonomibøker

SØK2009 er **åpen-økonomi-makroøkonomi** og har **null faglig overlapp** med de
bygde NTNU-mikrobøkene. Tabellen styrer hva SØK2009 bygger ut vs. hva som er
andre bøkers domene.

| Tema | Bygget i annen bok | SØK2009 (bygger ut) |
|---|---|---|
| Konsumentteori (nyttemaks, indifferenskurve/MSB, SE/IE, elastisiteter) | **SOK1002** (Mikroøkonomi, NTNU) | **NEI** — ingen overlapp, ingen lenke |
| Produsentteori (produktfunksjon, kostnadskurver, profittmaks, nedlegging) | **SOK1002** | **NEI** — ingen overlapp |
| Marked/velferd, monopol, oligopol/Cournot/Nash, eksternaliteter, fellesgoder | **SØK1011** (Markeder og markedssvikt, NTNU) | **NEI** — ingen overlapp |
| Valutakurs, renteparitet (UIP), pengemarked i åpen økonomi | ingen | **JA** — Del 1 |
| Asset-market-modellen, AA-DD (Mundell-Fleming åpen økonomi), overshooting | ingen | **JA** — Del 2–3 (Krugman-søylen) |
| Valutaregimer (fast/flytende), trilemma, fastkursforsvar, PPP | ingen | **JA** — Del 3 |
| Driftsbalanse, realvalutakurs, sparing-investering, intertemporal handel | ingen | **JA** — Del 1 |
| Barro-Gordon/troverdighet, tidsinkonsistens, valutaunion, OCA, asymmetriske sjokk | ingen | **JA** — Del 4 (De Grauwe-søylen) |
| Lukket-økonomi-makro (nasjonal IS-LM/AD-AS, pengemengde/rente uten utland), BNP-regnskapet | evt. **ECON1310** Makroøkonomi I (UiO) *(verifiser at boka/kapitlene finnes)* | **NEI** — forutsettes; lenk kun hvis kapitlet finnes, ellers forklar kort i boka |
| Vekstteori (Solow o.l.), pengepolitikk på masternivå | ikke bygget / masteremner | **NEI** — utenfor pensum |

**Møtepunkter (forutsettes, ikke gjentas):** lukket-økonomi-pengemarked,
rentedannelse og BNP-identiteten $Y = C + I + G + NX$ forutsettes fra
innførings-makro. **Ingen kryssbok-lenke skal skrives til et kapittel som ikke
finnes** — verifiser tilgjengelige makro-kapitler (f.eks. ECON1310) før lenker
settes; der ingen finnes, forklares forkunnskapen kort i SØK2009 selv. Overlappet
mot mikroemnene (SOK1002/SØK1011) er **null** — de er ren mikro; SØK2009 er
makro. Dette er en ekte utvidelse av porteføljen (analysens §0).

---

> **Merknad om verifiserte referanser:** Alle modellresultater, notasjon og
> frekvenser er hentet fra `EKSAMENSANALYSE.md`. Standardsammenhengene (UIP
> $R = R^* + (E^e - E)/E$, pengemarked $M^s/P = L(R,Y)$, varemarked/driftsbalanse,
> AA fallende / DD stigende, Phillips-kurve, PPP) er faglige fakta uten verkshøyde.
> Pensum-referansene (Krugman/Obstfeld/Melitz *International Economics* — figurer
> som 15-6, 15-12/13; De Grauwe *Economics of Monetary Union* — figurer 1.1–1.2,
> 2.9–2.14) er hentet fra sensorveiledningene i analysen, men **eksakt utgave og
> figurnummerering bør sjekkes mot gjeldende emnebeskrivelse** før pensumankere
> skrives inn i kapitlene *(verifiser)*. Den analytiske approksimasjonen for
> likevektskursen $E \approx E^e/(1 + R - R^*)$ er en standard lineærisering av
> UIP *(verifiser presis form mot forelesningsnotatene)*. Tilgjengeligheten av en
> innførings-makro-bok å lenke til (ECON1310) må verifiseres før forkunnskaps-
> lenker settes.

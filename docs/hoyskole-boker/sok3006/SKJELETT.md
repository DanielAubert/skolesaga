# Bokskjelett: SØK3006 Valuta, olje og makroøkonomisk politikk — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er derfor angitt her, destillert fra
> `EKSAMENSANALYSE.md` (15 lesbare oppgavesett V2016–V2025, 7 sensortekster/
> løsningsveiledninger lest fullstendig: H2016, H2018, V2021, H2021, H2023 +
> V2025-veiledningen med full steg-for-steg-utledning av MP-kurven, samt
> eksamensvedlegget med de **ni pensummodellene**). Arketype: **DNA-regnefag**
> (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori/drill/øvingseksamen) er
> obligatoriske og gjentas ikke her. Emnet har i tillegg et markert
> **drøftings-/intuisjonselement** (sensor krever gjennomgående at teknikken
> ledsages av økonomisk intuisjon, og at modellvarianter sammenlignes); for det
> ene sjangerkapitlet som drilles spesifikt (5.2 «intuisjons- og
> sammenligningssvaret») lånes struktur fra `DNA-drofting.md` (oppskrift →
> gjennomskrevet besvarelse → momentliste-oppgaver), dokumentert der. Alle
> mønstereksempler i skjelettet er omskrivninger; forfatteren skal variere dem
> videre (egne tall, egne kontekster), aldri kopiere inn ordrett.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `sok3006` |
| Tittel | **SØK3006 Valuta, olje og makroøkonomisk politikk** |
| Institusjon | NTNU (Institutt for samfunnsøkonomi) |
| Level | `'Høyskole'` |
| Arketype | Regnefag (modelldrevet makro på masternivå: modelloppsett → utledning av nøkkeluttrykk → sjokk-/politikkanalyse med figur) med sterkt drøftings-/intuisjonselement |
| Antall kapitler | **28** (1 eksamenskart + 4 fundament + 6 pengepolitikk + 5 valuta/kapitalmobilitet + 6 olje/to-sektor + 6 eksamenstrening) |
| Estimert totaltid | **2 210 min ≈ 37 timer** |
| Quiz totalt | **542** (krav ≥500) |
| Flashcards totalt | **516** (krav ≥500) |

**Pitch (ett avsnitt):** SØK3006-eksamen står på **tre søyler** som gjentar seg
år etter år, og fra og med H2023 legges det ved et **notat med ni ferdig
oppsatte pensummodeller** som oppgavene refererer til ved nummer. Søylene er:
(1) **pengepolitikk under fleksibel inflasjonsstyring** — tapsfunksjon, IS,
Phillips og real-UIP for åpen økonomi, med **utledning av MP-kurven** fra
minimering av tapet og optimal respons på de tre sjokkene (etterspørsel $v$,
inflasjon $u$, risikopremie/valuta $z$); (2) **valutamarked og kapitalmobilitet**
— porteføljemodellen (Rødseth kap. 1), valutatilbud til sentralbanken ved
depresiering (porteføljesammensetnings- vs. forventningseffekt), grad av
kapitalmobilitet $|f'_r|$, og Mundell–Fleming–Tobin (ISFX-LM, fast vs. flytende
kurs); (3) **olje/naturressurser og to-sektor-økonomi** — skjermet vs.
konkurranseutsatt sektor (Rødseth kap. 7), hollandsk syke statisk (Torvik,
modell 8) og dynamisk med endogen produktivitet / learning-by-doing (modell 9),
med det kontraintuitive resultatet at langsiktig sektorstørrelse kan være
uavhengig av ressursinntekten. Denne boka er bygget som nettopp de tre søylene,
med et felles **fundamentkapittel om notasjon, renteparitet, realvalutakurs og
tapsfunksjonstenkning** i bunn. SØK3006 er **modelldrevet makro på masternivå**
der studenten skal *sette opp den oppgitte modellen, forklare hver relasjon
økonomisk, utlede nøkkeluttrykkene (MP-kurve, ISFX/Phillips for åpen økonomi,
uttrykk for valutatilbud, langtidslikevekt $\lambda$) og analysere sjokk og
politikk grafisk med intuisjon* — **aldri ren regning**. Matematikken er lett
nok (formelsamlingen er sjelden avgjørende); det som skiller karakterene er
modellforståelse, korrekt utledning, fortegnsdrøfting og evnen til å
**sammenligne modellvarianter** (åpen/lukket, statisk/dynamisk, fast/flytende,
eksogen/endogen lønn, høy/lav kapitalmobilitet).

**Kritisk avgrensnings- og arbeidsdelingsregel (gjelder HELE boka):** SØK3006 er
**masternivået** av det samme modellrommet (Mundell–Fleming / åpen-økonomi-makro)
som NTNUs bachelor-emne **SØK2009 Internasjonal makroøkonomi** dekker på
grafisk-intuitivt nivå. Der SØK2009 tegner AA-DD og valutaregimer med verbal
intuisjon, tar SØK3006 apparatet til masternivå: **eksplisitt tapsfunksjon og
optimering av renta** (MP-kurven *utledes*, oppgis ikke), **samspill penge- og
finanspolitikk**, **full porteføljefundering av valutamarkedet** (Rødseth kap. 1
med formuesbeskrankninger og risikopremie), og **olje/two-sector-blokken** (Rødseth
kap. 7 + Torvik) som SØK2009 ikke har. Boka skal derfor **ikke gjenta**
SØK2009s bachelor-oppbygging av AA-DD-mekanikken fra bunnen (Krugman-Obstfeld-
AA-kurve-utledning steg for steg, valutaregime-innføring uten optimering); der en
student trenger den grafiske intuisjonen bak Mundell–Fleming eller renteparitet
som *forkunnskap*, **kryssrefererer** boka til SØK2009 med markdown-lenker
(`[tittel](/bok/sok2009/<chapterId>)`) i Forkunnskaper-blokkene — SØK2009 bygger
grunnintuisjonen, SØK3006 hever den til master-utledning og -analyse. Se §7 for
den fullstendige arbeidsdelingstabellen. **Videre avgrensning:** SØK3006 skal
IKKE bygge ut ren matematikk-drill (integrasjon/matriser/diff.likninger for egen
del — det er SØK3004; her er matematikken et middel), økonometri/estimering
(SØK3001), mikrofundert dynamisk vekstteori à la Ramsey/OLG/RBC/Euler (feil
tradisjon; null forekomst), eller bachelor-stoff som nasjonalregnskap og
elementær Keynes-kryss (forutsettes kjent).

**Kritisk notasjonsregel (gjelder HELE boka)** — notasjonen fra eksamensvedlegget
skal brukes nøyaktig, ikke lærebok-alternativer:

- **Pengepolitikk/inflasjonsstyring:** produksjonsgap $y$, realrente (avvik fra
  langsiktig $\rho$) $r$, real valutakurs $e$, inflasjon $\pi$, forventet
  inflasjon $\pi^e$, inflasjonsmål $\pi^*$, utenlandsk realrente $r^*$, forventet
  real valutakurs $e^e$, offentlig etterspørsel (avvik fra nøytral) $g$; sjokk:
  etterspørsel $v$, inflasjon $u$, risikopremie/valuta $z$; sentralbankens tap
  $L$, vekt på produksjonsstabilitet $\lambda$, vekt på finansielt gap $q$
  betegnes $\delta$; parametere $\alpha_1,\alpha_2,\alpha_3$ (IS), $\gamma_1,
  \gamma_2$ (Phillips). Kjernerelasjonene: IS $y = -\alpha_1(r-\rho) + \alpha_2 e
  + v$, Phillips $\pi = \pi^e + \gamma_1 y + \gamma_2 e + u$, real-UIP $e = e^e -
  (r - r^*) + z$, tap $L = \tfrac12[(\pi-\pi^*)^2 + \lambda y^2]$.
- **Valutamarked/portefølje:** realfinansformue $W_p, W_g, W^*$ (privat/
  sentralbank/utland); beholdninger $M, B, F$ (penger, innenlandske obligasjoner,
  utenlandske obligasjoner), valutareserver $F_g$; nominell valutakurs $E$;
  prisnivå $P, P^*$; nominelle renter $i, i^*$; **risikopremie $r = i - i^* -
  e^e$** (merk: samme bokstav $r$ som realrenta over — kontekst skiller;
  presiser dette per delkapittel); porteføljeetterspørsel $f(r, W_p)$; grad av
  kapitalmobilitet $|f'_r|$ (evt. $|dE/d(i-i^*)|$).
- **To-sektor/olje:** produksjon/output $Y_i$ eller $X_i$ ($i=n/N$ skjermet,
  $t/T$ konkurranseutsatt); sysselsetting $N_i$; realkapital $K_i$; priser $P_i$
  med $P_t = EP^*$ (konkurranseutsatt pris satt på verdensmarkedet); lønn $W$;
  offentlig kjøp $G_i$; skatterate $\tau$; handelsoverskudd $X$;
  sysselsettingsandel skjermet sektor $\eta$; ressursinntekt $R$; produktivitet
  $H_i$; relativ produktivitet $\lambda = H_T/H_N$ (merk: samme bokstav
  $\lambda$ som tapsvekten over — kontekst skiller; presiser per delkapittel);
  produktivitetsvekst $\dot H_i / H_i$.

**Kritisk metoderegel (gjelder HELE boka):** Sensortekstene er påfallende
samstemte om fire faste krav som gjelder overalt: **(a) modellen skal settes opp
OG relasjonene forklares økonomisk** — presenter forutsetningene, determiner
modellen (tell endogene/eksogene), forklar hver ligning; å bruke modellen uten å
sette den opp er den dyreste feilen. **(b) Nøkkeluttrykk skal UTLEDES, ikke
postuleres** — MP-kurven (fra minimering av $L$), ISFX-/IS-/Phillips-kurven for
åpen økonomi, uttrykket for valutatilbud og langtidslikevekten $\lambda$ skal
komme fram gjennom regning. **(c) Teknikk MÅ ledsages av intuisjon** — helning på
kurver, retning på skift, mekanismen bak hver effekt; figur uten forklaring, og
regning uten tolkning, er halvt svar. **(d) Fortegn og retning skal begrunnes**,
og **modellvarianter sammenlignes** når oppgaven inviterer til det (åpen/lukket,
statisk/dynamisk, fast/flytende, eksogen/endogen lønn, høy/lav mobilitet). To
faste presisjonskrav går igjen: **skill tilstrekkelige fra nødvendige
betingelser** (valutatilbud ved depresiering — eksplisitt trekk i V2021 for å
forveksle dem), og **oppgi/presiser egne forutsetninger** (den faste
instruksjonen «gjør dine egne antagelser»). Svar **poengtert** på det det spørres
om.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): notasjons-/renteparitets-/
tapsfunksjonsfundamentet i bunn, deretter de tre søylene i den rekkefølgen de
bygger på hverandre (pengepolitikk → valutamarked/kapitalmobilitet → olje/to-
sektor), til slutt eksamenstreningen. Frekvensen styrer *omfanget* — søyle 1
(inflasjonsstyring, ~60 %) og søyle 3 (olje/to-sektor, ~47 %) er de to tyngste og
får hver sin fulle del med drillkapittel; søyle 2 (valuta/kapitalmobilitet,
~33 %) er den faste tredje og får en noe smalere del med eget drillkapittel.

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. Rammer inn tre-søyle-strukturen, de ni vedleggsmodellene og formatskiftet (essay → strukturert modelloppgave), og avgrenser mot SØK2009/SØK3004/SØK3001. |
| 1 | Fundament: notasjon, renteparitet, realvalutakurs og tapsfunksjon | 4 | Fellesspråket alle tre søyler bygger på: valutakurs-/renteparitetsbegrepet, real-UIP (inngår i alle inflasjonsstyrings- og MFT-sett), realvalutakurs/konkurranseevne, og sentralbankens tapsfunksjon som optimeringsverktøy. Forutsatt aktivt overalt → eget fundament. |
| 2 | Pengepolitikk og fleksibel inflasjonsstyring | 6 | Den tyngste søylen. Modell for åpen økonomi ~60 % (hyppigst), MP-utledning ~33 %, optimal sjokkrespons ~53 %, Phillips/IS-utledning ~27 % hver, samspill penge/finanspolitikk ~13 % (nyere, gjennomstrukturert), finansiell stabilitet ~13 %. Nivå 1 «perfekt» → 5 teorikapitler + drillkapittel. |
| 3 | Valutamarked, portefølje og kapitalmobilitet | 5 | Den faste tredje søylen. Porteføljemodell ~33 %, kapitalmobilitet ~33 %, MFT ~20 %, valutatilbud ved depresiering ~13 %, middelverdi–varians ~13 %, Marshall–Lerner ~7 %. Nivå 2 «kunne» (avgjør C→A) → 4 teorikapitler + drillkapittel. |
| 4 | Olje, naturressurser og to-sektor-økonomi | 6 | Den nest tyngste søylen. Skjermet/konkurranseutsatt sektor ~47 %, naturressurs→sektorstørrelse statisk ~40 %, dynamisk endogen produktivitet ~27 %, finanspolitikk mot hver sektor ~13 %, eksogen/endogen lønn ~13 %. Nivå 1 «perfekt» → 5 teorikapitler + drillkapittel. |
| 5 | Eksamenstrening | 6 | Begrepsdrill (~15 gjengangere på tvers av søylene), sjangerkapittel for intuisjons-/sammenligningssvaret (drøfting), og 4 komplette øvingseksamener som speiler formatene (essay-stil 2016–2018, strukturert a–f-stil fra 2019, og modell-vedleggs-stil fra H2023). |

**Avvik fra DNA-malen (dokumentert):**
1. DNA-en legger *alle* sjangerkapitler i siste del. Her ligger de tre
   drillkapitlene (2.6 pengepolitikk, 3.5 valuta/kapitalmobilitet, 4.6 olje/to-
   sektor) inne i sine egne søyler, fordi søylene ER de tre gjennomgående
   eksamensoppgavene og må drilles umiddelbart etter teorien. Del 5 beholder
   begrepsdrillen (sjanger A), intuisjons-/sammenligningssjangerkapitlet og de
   fire øvingseksamenene.
2. DNA-en er ren regnefag. SØK3006 har et markert **drøftings-/intuisjonselement**
   — sensor krever gjennomgående at teknikken ledsages av intuisjon og at
   modellvarianter sammenlignes. Kapittel 5.2 er derfor bygget etter
   `DNA-drofting.md`s sjangerkapittel-mal (oppskrift → gjennomskrevet A-besvarelse
   med margkommentarer → momentliste-oppgaver), ikke som et rent regnedrillkapittel.
   Intuisjonssvaret forankres i den forutgående modellanalysen (mekanismen bak
   helningen/skiftet), ikke i pensumforfattere.
3. Del 1 (fundamentet) er strengt tatt fellesverktøy, ikke et «tema» som testes
   isolert som egen oppgave, men får egen del fordi real-UIP, realvalutakurs og
   tapsfunksjonen er *fellesspråket* for alle tre søyler og forutsettes aktivt
   overalt. Prøvene her er verktøy-/fundamentprøver.

---

## 3. Kapitler

Feltene under følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–L) refererer
til oppgavetype-katalogen som presenteres i Del 0 (gjengitt der fra analysen §3):
**A** sett opp/forklar inflasjonsstyringsmodellen (åpen økonomi), **B** utled
MP-kurven og drøft helningen, **C** optimal pengepolitisk respons på et sjokk,
**D** samspill penge- og finanspolitikk, **E** porteføljemodell for
valutamarkedet (valutatilbud ved depresiering), **F** kapitalmobilitet og dens
virkning, **G** Mundell–Fleming–Tobin (fast/flytende kurs), **H** skjermet vs.
konkurranseutsatt sektor: finanspolitikk, **I** naturressursinntekt og
sektorstørrelse (hollandsk syke, statisk), **J** naturressursinntekt med endogen
produktivitet (dynamisk), **K** inflasjonsstyring med finansiell stabilitet,
**L** Marshall–Lerner / realdepresiering og handelsbalansen. Prioritetsklasser:
**perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet: slik testes SØK3006

- **id:** `sok3006-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen
- **Kapitteltype:** eksamenskart
- **description:** Eksamensformen, tre-søyle-strukturen (pengepolitikk + valuta/kapitalmobilitet + olje/to-sektor), de ni vedleggsmodellene, sjangerkatalogen A–L, formatskiftet og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på 15 lesbare sett + 7 sensortekster + vedlegget med de ni modellene. Skal gjengi: (i) **formen**: 4 timers skriftlig skoleeksamen, digital i Inspera (09:00–13:00 + tid til opplasting av håndtegninger), karakter A–F, 7,5 studiepoeng; **hjelpemidler = kode C** (godkjent kalkulator + Sydsæter/Strøm/Berck matematisk formelsamling) — men matematikken er lett nok til at formelsamlingen sjelden er avgjørende: **modellforståelse, ikke regnekraft, testes**; under korona (V2021, H2021, kode A) var alle hjelpemidler tillatt / hjemmeeksamen, men da premieres forståelse enda sterkere; håndtegnede figurer forventes; målform bokmål (av og til bokmål+nynorsk parallelt); oppgavestillere roterer (Torvik, Rattsø, Bonesrønning, Dyrstad, Johansen; emneansvar Stokke) → stilvariasjon. (ii) **Formatskiftet** (viktig strukturfunn): 2016–2018 var typisk *ett* åpent essayspørsmål (Torvik-stil «Diskuter …»); fra H2019 kom **strukturerte modelloppgaver med oppgitt ligningssett og nummererte delspørsmål a–f**; fra **H2023** legges **vedlegget med ni modeller** ved, og oppgavene refererer til modellnummer. Boka trener begge stiler, men vekter den nyere modellbaserte tyngst. (iii) **Tre-søyle-jernloven**: hvert sett trekker fra {pengepolitikk/inflasjonsstyring, valutamarked/kapitalmobilitet, olje/to-sektor}; nyere flerdelte sett dekker to eller alle tre. Vekting varierer, ofte lik (50/50, 1/3+2/3, 2/3+1/3); pengepolitikk-oppgaven er som regel tyngst. (iv) **Temafrekvens-tabellene** (tre spor, fra analysen §2): pengepolitikk — modell for åpen økonomi ~60 %, optimal sjokkrespons ~53 %, MP-utledning ~33 %, Phillips/IS-utledning ~27 % hver, åpen vs. lukket ~27 %, samspill penge/finanspolitikk ~13 %, finansiell stabilitet ~13 %; valuta — porteføljemodell ~33 %, kapitalmobilitet ~33 %, MFT ~20 %, valutatilbud ved depresiering ~13 %, middelverdi–varians ~13 %, UIP inngår i alle relevante sett, Marshall–Lerner ~7 %; olje — skjermet/konkurranseutsatt ~47 %, naturressurs→sektorstørrelse statisk ~40 %, dynamisk endogen produktivitet ~27 %, finanspolitikk mot sektor ~13 %, eksogen/endogen lønn ~13 %. (v) **De ni pensummodellene** (bokens innholdsryggrad, presentert som tabell): (1) inflasjonsstyring m/finansiell stabilitet lukket, (2) inflasjonsstyring åpen — kjernemodellen, (3) samspill penge/finanspolitikk, (4) enkel porteføljemodell, (5) porteføljemodell med penger, (6) Mundell–Fleming–Tobin, (7) skjermede/konkurranseutsatte varer, (8) naturressurser statisk, (9) naturressurser dynamisk. (vi) **Sensorens metaregler**: modellen settes opp OG relasjonene forklares; nøkkeluttrykk utledes (ikke postuleres); teknikk + intuisjon er én leveranse; fortegn begrunnes; skill tilstrekkelige/nødvendige betingelser; sammenlign modellvarianter; oppgi egne forutsetninger; svar poengtert. (vii) **Karakterskillene** (fra analysen §4): E = setter opp modellen, gjengir relasjonene noenlunde, hovedeffekten i riktig retning uten full utledning/intuisjon; C = korrekt modelloppsett med forklaring av alle relasjoner, utleder MP-/ISFX-/Phillips-kurven riktig, sjokk-/politikkanalyse grafisk med riktige skift og korrekt konklusjon + intuisjon; A = alt i C + skiller og sammenligner modellvarianter trygt (statisk/dynamisk, åpen/lukket, høy/lav mobilitet, eksogen/endogen lønn), drøfter hva som bestemmer styrken på responsen ($\gamma_2$, $\alpha_1+\alpha_2$, $\alpha_3$), håndterer fortegnstvetydigheter (ISFX-valutakursleddet), behandler tilstrekkelig/nødvendig og Marshall–Lerner presist, og ser kontraintuitive resultater (langsiktig sektorstørrelse uavhengig av ressursinntekt).
- **Innholdskontrakt:** Oppgavetype-katalogen A–L presenteres som studentens sjekkliste med typisk plassering: pengepolitikk-oppgaven bygges av A → B → C (evt. D eller K); valuta-oppgaven av E/F (+ G); olje-oppgaven av H/I (+ J, evt. L). **Prognose for neste ordinære eksamen (høst)** (fra analysen §7): gjeldende format er 2 oppgaver med lik/ulik vekt og vedlagt modellnotat — **oppgave 1 (50 % / 2/3):** strukturert pengepolitikk-oppgave (a–e/f) på modell 2 eller 3 (forklar modellen + utled MP-/Phillips-/IS-kurven + analyser sjokk, ELLER samspill penge–finanspolitikk); søyle 1 er nesten alltid representert. **Oppgave 2 (50 % / 1/3):** olje/to-sektor-oppgave (modell 7–9) — realappresiering/sektorstørrelse, ofte med krav om å utvide fra statisk til dynamisk, eller eksogen vs. endogen lønn; nesten like sannsynlig. **Beredskap:** portefølje/kapitalmobilitet (modell 4–6) er mest sannsynlig tredje-oppgave/integrert deloppgave, og MFT (modell 6) er en klassisk tung returkandidat. Avslutt med **avgrensningen** (hva som IKKE er pensum: SØK2009s bachelor-AA-DD-oppbygging — bruk kryssbok-lenker til SØK2009 der grunnintuisjonen trengs; SØK3004-matematikk; SØK3001-økonometri; mikrofundert vekstteori) og **leseplanen**: Del 1 er fellesverktøy man må ha klart; Del 2 (pengepolitikk) og Del 4 (olje) er de to tyngste «må perfekt»-søylene; Del 3 (valuta) er «kunne»; Del 5 er ren trening.
- **Oppgavesjangre:** Ingen modelloppgaver; 3–4 refleksjonsoppgaver av typen «gitt 50/50-malen med vedlagt modellnotat og 240 minutter — sett opp tidsbudsjett for pengepolitikk- og olje-oppgaven» og «hvilke fem ferdigheter avgjør karakteren, og i hvilket kapittel drilles de?».
- **Typiske feil:** Metafeilene: bruke tid på uforklarte figurer eller utolkede uttrykk; bygge AA-DD fra bunnen à la SØK2009 der masternivået krever eksplisitt tapsfunksjons-utledning; postulere kurver i stedet for å utlede dem; ikke oppgi egne forutsetninger; behandle et inflasjonssjokk som fullt nøytraliserbart med renta alene.
- **Quiz: 16 · Flashcards: 16** (eksamensform, formatskiftet, tre-søyle-strukturen, de ni modellene, sjangerkatalog, metaregler, avgrensning)

**Prøve-kvote Del 0:** ingen (metadel).

---

### Del 1 — Fundament: notasjon, renteparitet, realvalutakurs og tapsfunksjon *(prioritet: fellesverktøy — må sitte)*

> **Forkunnskaps-skille mot SØK2009:** valutakursbegrepet, udekket renteparitet
> og den grafiske AA-DD-intuisjonen er byggeklosser SØK3006 forutsetter. Der
> studenten trenger å repetere grunnintuisjonen bak renteparitet eller
> Mundell–Fleming, lenker boka til SØK2009 — det emnet bygger dem grafisk,
> SØK3006 hever dem til master-utledning. SØK3006s eget bidrag i Del 1 er
> **real-UIP i inflasjonsstyringsnotasjon**, **realvalutakursen som
> konkurranseevnemål** og **sentralbankens tapsfunksjon som optimeringsverktøy** —
> det som gjør resten av boka til masternivå.

#### Kapittel 1.1: Notasjon, endogene/eksogene variabler og modelloppsett-disiplinen

- **id:** `sok3006-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen
- **Kapitteltype:** teori (fundament)
- **description:** Emnets notasjon på tvers av de tre søylene, hva det vil si å «determinere» en modell (telle endogene vs. eksogene variabler), og disiplinen sensor krever: sett opp modellen, oppgi forutsetningene, forklar hver relasjon.
- **Eksamensbelegg:** Ikke et eget tema, men **kjernen i vurderingen i hvert sett**: den dyreste feilen (§5.1) er å bruke modellen uten å sette den opp/forklare relasjonene. Standardinstruksjonen «gjør dine egne antagelser og presiser forutsetningene» går igjen. Prioritet: **fellesverktøy** (må sitte).
- **Innholdskontrakt:** Gjennomgå den fulle notasjonslista (fra §1) gruppert i tre søyler, med eksplisitt advarsel om de to **symbolkollisjonene** ($r$ = realrente i søyle 1, risikopremie i søyle 2; $\lambda$ = tapsvekt i søyle 1, relativ produktivitet i søyle 3 — kontekst skiller, presiser alltid). **Å determinere en modell:** tell likninger og endogene variabler; en modell er determinert når antall uavhengige likninger = antall endogene; eksogene variabler og sjokk er «gitt utenfra». Vis det på en enkel to-likningsmodell. **Modelloppsett-disiplinen (sensorkrav):** (1) list forutsetningene, (2) presenter relasjonene med økonomisk motivasjon, (3) angi hva som er endogent/eksogent, (4) *deretter* analyser. Understrek at dette er «gratispoengene» som mange kaster fra seg ved å hoppe rett til svaret.
- **Oppgavesjangre:** Byggekloss for A/E/H (modelloppsett-delen). Mønstereksempel: «Gitt en modell med tre relasjoner og variablene $y, r, e, \pi$: hvilke er rimeligvis endogene, hvilke eksogene, og er modellen determinert? Begrunn.»
- **Typiske feil:** Hoppe til svaret uten å sette opp modellen (§5.1); ikke skille endogent fra eksogent; forveksle de to $r$-ene eller de to $\lambda$-ene; ikke oppgi egne forutsetninger (§5.12).
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 1.2: Valutakurs og udekket renteparitet (nominell og real)

- **id:** `sok3006-1-2` · **number:** 1.2 · **estimatedMinutes:** 50 · **prerequisites:** `sok3006-1-1`
- **Kapitteltype:** teori (fundament)
- **description:** Nominell og real valutakurs, udekket renteparitet (UIP) på nominell og real form, og real-UIP $e = e^e - (r - r^*) + z$ som den gjennomgående relasjonen i søyle 1 og 2.
- **Eksamensbelegg:** UIP inngår i **alle** inflasjonsstyrings- og MFT-sett; real-UIP er en av de fire kjernerelasjonene i modell 2. Rentedifferanse → appresiering er fast intuisjonspoeng. Prioritet: **fellesverktøy** (må sitte). Kryssrefererer til SØK2009 for grunnintuisjonen bak renteparitet.
- **Innholdskontrakt:** **Nominell UIP:** forventet avkastning likt på innenlandsk og utenlandsk plassering når kapitalen er mobil → $i = i^* + (E^e - E)/E$; en risikopremie $z$ (evt. $r$ i porteføljenotasjon) legges til når aktivaene ikke er perfekte substitutter. **Real valutakurs** $e$ (og $q = EP^*/P$): forholdet mellom utenlandsk og innenlandsk prisnivå målt i felles valuta — konkurranseevnemål (bygges ut i 1.3). **Real-UIP** $e = e^e - (r - r^*) + z$: høyere innenlandsk realrente ($r$ opp) gir *appresiering* (lavere $e$) alt annet likt; forventet fremtidig kurs $e^e$ og risikopremie/valutasjokk $z$ flytter kursen. Forklar hvert ledd økonomisk og understrek retningen (den er en gjenganger å rote med). Vis at real-UIP er koblingen som gjør valutakursen til en kanal for pengepolitikken i modell 2 (renta virker på $y$ *både* via IS-leddet $-\alpha_1(r-\rho)$ og via valutakursleddet $\alpha_2 e$).
- **Oppgavesjangre:** Byggekloss for A/C/G. Mønstereksempel: «Forklar real-UIP-relasjonen $e = e^e - (r-r^*) + z$ ledd for ledd, og vis hvilken vei valutakursen beveger seg når sentralbanken hever realrenta.»
- **Typiske feil:** Feil retning på $E$/$e$ (rentedifferanse → appresiering, ikke depresiering); forveksle nominell og real UIP; glemme risikopremien når aktivaene ikke er perfekte substitutter; ikke koble valutakurskanalen til rentens virkning på $y$.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 1.3: Realvalutakurs, konkurranseevne og driftsbalanse

- **id:** `sok3006-1-3` · **number:** 1.3 · **estimatedMinutes:** 45 · **prerequisites:** `sok3006-1-2`
- **Kapitteltype:** teori (fundament)
- **description:** Realvalutakursen som konkurranseevnemål, realdepresiering/-appresiering, og koblingen til handelsbalanse/driftsbalanse — fellesspråket for valutakursleddet i alle tre søyler.
- **Eksamensbelegg:** Realvalutakurs og konkurranseevne inngår i de fleste olje-/to-sektor-sett (~5/15) og i valutakursleddet i modell 2/6. Grunnlaget for Marshall–Lerner (sjanger L) og for realappresiering ved hollandsk syke (sjanger I). Prioritet: **fellesverktøy** (må sitte).
- **Innholdskontrakt:** **Realvalutakurs** $q = EP^*/P$ (eller $e$ i modellnotasjon): høyere $q$/$e$ = realdepresiering = bedret konkurranseevne (innenlandske varer relativt billigere). **Konkurranseutsatt pris** $P_t = EP^*$ (satt på verdensmarkedet) mot **skjermet pris** $P_n$ (bestemt innenlands) — relativprisen $P_n/P_t$ er den sentrale to-sektor-variabelen (foregriper Del 4). **Handels-/driftsbalanse:** en realdepresiering gjør eksport billigere og import dyrere → handelsbalansen bedres *hvis* volumeffektene er sterke nok (Marshall–Lerner, kap. 3.4). Kort om at realvalutakursen er både utfall (bestemt i modellen) og drivkraft (påvirker sektorstørrelse og handelsbalanse). Understrek de tre bruksområdene: kanal i pengepolitikken (søyle 1), utfall i MFT (søyle 2), og relativpris i to-sektor (søyle 3).
- **Oppgavesjangre:** Byggekloss for H/I/L. Mønstereksempel: «Forklar hva en realappresiering betyr for konkurranseevnen, og hvorfor relativprisen mellom skjermede og konkurranseutsatte varer er den sentrale størrelsen i en to-sektor-modell.»
- **Typiske feil:** Feil retning (realdepresiering *bedrer* konkurranseevnen); forveksle nominell og real appresiering; tro at konkurranseutsatt pris settes innenlands (den settes på verdensmarkedet, $P_t = EP^*$); glemme volumbetingelsen (Marshall–Lerner) for at handelsbalansen faktisk bedres.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 1.4: Sentralbankens tapsfunksjon og optimal rentesetting

- **id:** `sok3006-1-4` · **number:** 1.4 · **estimatedMinutes:** 50 · **prerequisites:** `sok3006-1-1`
- **Kapitteltype:** teori (fundament)
- **description:** Tapsfunksjonen $L = \tfrac12[(\pi-\pi^*)^2 + \lambda y^2]$ som verktøy for optimal pengepolitikk, hva vekten $\lambda$ betyr, og prinsippet for minimering mhp. instrumentet — motoren i hele søyle 1.
- **Eksamensbelegg:** Tapsfunksjonen er utgangspunktet for MP-kurve-utledningen (~33 %) og for optimal sjokkrespons (~53 %). Vekten $\lambda$ og førsteordensbetingelsen er faste elementer. Prioritet: **fellesverktøy** (må sitte — fundamentet for Del 2).
- **Innholdskontrakt:** **Tapsfunksjonen** $L = \tfrac12[(\pi-\pi^*)^2 + \lambda y^2]$: sentralbanken misliker avvik fra inflasjonsmålet *og* produksjonsgap; **$\lambda$** = relativ vekt på produksjonsstabilitet (høyere $\lambda$ = mer opptatt av $y$). Kvadratisk form → symmetrisk straff for over- og underskyting, og marginaltapet vokser med avviket. **Optimeringsprinsippet:** sentralbanken velger instrumentet (realrenta $r$) for å minimere $L$ gitt hvordan $r$ virker på $\pi$ og $y$ gjennom modellen — dette er kilden til MP-kurven (kap. 2.2). **Førsteordensbetingelsen** generelt: $\partial L/\partial r = (\pi-\pi^*)\cdot d\pi/dr + \lambda y\cdot dy/dr = 0$ — «vei marginalgevinsten i inflasjonsstabilisering mot marginalkostnaden i produksjonsstabilisering». Vis at et etterspørselssjokk (som flytter både $\pi$ og $y$ i samme retning) kan nøytraliseres fullt ut, mens et inflasjonssjokk (som setter målene i konflikt) ikke kan (foregriper kap. 2.3). Tredje ledd (finansielt gap $q$, vekt $\delta$) nevnes som utvidelse (kap. 2.5).
- **Oppgavesjangre:** Byggekloss for B/C/K. Mønstereksempel: «Forklar leddene i tapsfunksjonen $L = \tfrac12[(\pi-\pi^*)^2 + \lambda y^2]$ og hva parameteren $\lambda$ måler, og skriv opp førsteordensbetingelsen for optimal rentesetting.»
- **Typiske feil:** Tro at et hvilket som helst sjokk kan nøytraliseres fullt ut (bare etterspørsels-/valutasjokk kan, ikke inflasjonssjokk — §5.4); glemme $\lambda$ som vekt / feiltolke den; ikke koble førsteordensbetingelsen til hvordan renta virker gjennom modellen; behandle tapet som lineært i stedet for kvadratisk.
- **Quiz: 20 · Flashcards: 22**

**Prøve-kvote Del 1:** 4 prøver (1.A notasjon + determinere modell + modelloppsett-disiplin, byggekloss for A; 1.B nominell og real UIP med korrekt retning på valutakurseffekten, byggekloss for C/G; 1.C realvalutakurs/konkurranseevne/driftsbalanse og relativprisen skjermet/konkurranseutsatt; 1.D tapsfunksjonen + førsteordensbetingelsen + hvorfor bare noen sjokk kan nøytraliseres fullt — fundamentprøver som ender på anvendelse).

---

### Del 2 — Pengepolitikk og fleksibel inflasjonsstyring *(prioritet: PERFEKT — den tyngste søylen, oppgave 1)*

#### Kapittel 2.1: Modellen for fleksibel inflasjonsstyring i åpen økonomi (modell 2)

- **id:** `sok3006-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `sok3006-1-4`, `sok3006-1-2`
- **Kapitteltype:** teori
- **description:** Kjernemodellen (modell 2): IS, Phillips og real-UIP for åpen økonomi pluss tapsfunksjonen — modelloppsett, determinering og økonomisk forklaring av hver av de fire relasjonene.
- **Eksamensbelegg:** ~60 % frekvens — den hyppigste enkeltmodellen i faget (V16, V18, V19, H19, V20, V21, H22, V25). Sjanger A: «determiner modellen og forklar relasjonene». Sensor: modellen skal settes opp OG relasjonene forklares grundig. Prioritet: **perfekt**.
- **Innholdskontrakt:** De fire relasjonene i modell 2 med full økonomisk forklaring: **IS** $y = -\alpha_1(r-\rho) + \alpha_2 e + v$ (etterspørselen faller når realrenta er over den nøytrale $\rho$; stiger ved realdepresiering $e$ via nettoeksport; $v$ = etterspørselssjokk); **Phillips** $\pi = \pi^e + \gamma_1 y + \gamma_2 e + u$ (inflasjonen drives av forventet inflasjon, produksjonsgap $\gamma_1 y$, importert inflasjon via valutakurs $\gamma_2 e$, og inflasjonssjokk $u$); **real-UIP** $e = e^e - (r-r^*) + z$ (fra kap. 1.2); **tapsfunksjonen** $L = \tfrac12[(\pi-\pi^*)^2 + \lambda y^2]$ (fra kap. 1.4). **Determiner modellen:** endogene $y, \pi, e, r$ (renta er instrument, bestemt av optimering); eksogene/gitte $\pi^e, e^e, r^*, \rho, \pi^*$ og sjokkene $v, u, z$. Understrek de **to kanalene** renta virker gjennom (direkte via IS, og indirekte via valutakurs → IS *og* Phillips) — dette er hele forskjellen fra en lukket økonomi og grunnlaget for MP-utledningen. Forklar hvorfor $\alpha_2$ og $\gamma_2$ (valutakursleddene) er null i lukket økonomi.
- **Oppgavesjangre:** A. Mønstereksempel: «Ta utgangspunkt i den gitte modellen for inflasjonsstyring i en åpen økonomi. Gjør rede for hvilke variabler som er endogene, og forklar den økonomiske tolkningen av hver av de fire relasjonene.»
- **Typiske feil:** Bruke modellen uten å sette den opp/forklare relasjonene (§5.1); glemme valutakurskanalen (at renta virker på $y$ og $\pi$ *også* via $e$); feil fortegn i IS-/Phillips-relasjonen; ikke determinere modellen (telle endogene/eksogene); ikke oppgi forutsetninger (§5.12).
- **Quiz: 24 · Flashcards: 24**

#### Kapittel 2.2: Utledning av MP-kurven og dens helning

- **id:** `sok3006-2-2` · **number:** 2.2 · **estimatedMinutes:** 65 · **prerequisites:** `sok3006-2-1`
- **Kapitteltype:** teori
- **description:** Å utlede MP-kurven (pengepolitikk-kurven) fra minimering av tapsfunksjonen mhp. realrenta, og drøfte hva som bestemmer hvor bratt den er — inkludert sammenligningen åpen vs. lukket økonomi.
- **Eksamensbelegg:** ~33 % (H19, H22, V25 O1), og den **mekaniske A-differensiatoren** — MP-kurven skal utledes, ikke postuleres (V2025-veiledningen viser hele utledningen steg for steg). Prioritet: **perfekt**.
- **Innholdskontrakt:** Substituér real-UIP inn i IS og Phillips slik at $y$ og $\pi$ uttrykkes ved renta: $dy/dr = -(\alpha_1+\alpha_2)$ (renta virker på $y$ både direkte og via valutakurs) og $d\pi/dr = -\gamma_1(\alpha_1+\alpha_2) - \gamma_2$. **Førsteordensbetingelsen** $(\pi-\pi^*)\cdot d\pi/dr + \lambda y\cdot dy/dr = 0$ (fra kap. 1.4) gir, etter innsetting, **MP-kurven** $\pi - \pi^* = -\left[\dfrac{\lambda}{\gamma_1 + \gamma_2/(\alpha_1+\alpha_2)}\right] y$ — en fallende sammenheng mellom inflasjonsgap og produksjonsgap som følger av optimal rentesetting. **Tolkning av helningen:** telleren $\lambda$ (mer vekt på produksjonsstabilitet → brattere kurve, mindre villig til å la $y$ svinge); nevneren $\gamma_1 + \gamma_2/(\alpha_1+\alpha_2)$ = hvor mye inflasjonen endres når produksjonen stabiliseres via renta (kostnaden ved produksjonsstabilisering). **Åpen vs. lukket:** i lukket økonomi ($\alpha_2=\gamma_2=0$) forsvinner valutakurskanalen; vis hvordan helningen endres (MP-kurven er brattest i lukket økonomi fordi renta da bare virker på inflasjonen via $y$). Vis hele utledningen med intuisjon per steg (sensorkrav) og la resultatet stå som utgangspunkt for sjokkanalysen i 2.3.
- **Oppgavesjangre:** B. Mønstereksempel: «Utled sammenhengen mellom inflasjonsgapet og produksjonsgapet som følger av optimal rentesetting, og forklar hva som bestemmer hvor bratt denne kurven er. Sammenlign med en lukket økonomi.»
- **Typiske feil:** Postulere MP-kurven i stedet for å utlede den fra minimeringen (§5.2); glemme at renta virker via *både* $\alpha_1$ og $\alpha_2$ ($dy/dr = -(\alpha_1+\alpha_2)$); feil i førsteordensbetingelsen; ikke tolke teller og nevner økonomisk; ikke gjøre åpen/lukket-sammenligningen.
- **Quiz: 26 · Flashcards: 24**

#### Kapittel 2.3: Optimal respons på de tre sjokkene (etterspørsel, inflasjon, risikopremie)

- **id:** `sok3006-2-3` · **number:** 2.3 · **estimatedMinutes:** 65 · **prerequisites:** `sok3006-2-2`
- **Kapitteltype:** teori
- **description:** Grafisk analyse i (y, π)-diagrammet av hvordan renta bør settes ved henholdsvis et etterspørsels-, inflasjons- og risikopremie-/valutasjokk — og hvorfor bare noen av dem kan nøytraliseres fullt ut.
- **Eksamensbelegg:** ~53 % frekvens (V16, V18, V19, H19, V20, H22, V25) — svært hyppig, ofte selve pengepolitikk-oppgaven. Krever figur + intuisjon. Prioritet: **perfekt**.
- **Innholdskontrakt:** Kombiner MP-kurven (kap. 2.2) med **Phillips-kurven for åpen økonomi der renta er substituert ut**: $\pi = (\gamma_1 + \gamma_2/(\alpha_1+\alpha_2))\,y + u + \text{konst}$ (stigende i $(y,\pi)$). **Etterspørselssjokk $v$:** flytter ikke Phillips-kurven direkte; renta kan settes slik at *begge* gap nulles (både $\pi=\pi^*$ og $y=0$) — full nøytralisering. **Inflasjonssjokk $u>0$:** skifter Phillips-kurven opp → optimal tilpasning der MP og den skiftede Phillips krysser → renta heves → **negativt produksjonsgap ($y<0$) og positivt inflasjonsgap** samtidig: de to gapene får **ulikt fortegn** og kan ikke nulles samtidig med kun renta (målkonflikt). **Risikopremie-/valutasjokk $z$:** virker via valutakursen som et etterspørselssjokk (påvirker $e$ → $y$ og $\pi$) og kan i hovedsak nøytraliseres med renta. Tegn hvert tilfelle i (y,π)-diagrammet med navngitte kurver, skiftretning og ny likevekt, og forklar mekanismen i ord. Understrek skillet mellom de tre sjokkene som selve poenget.
- **Oppgavesjangre:** C. Mønstereksempel: «Anta et positivt inflasjonssjokk. Vis grafisk hvordan renta bør settes, og forklar hvorfor produksjons- og inflasjonsgapet ikke kan bli null samtidig.»
- **Typiske feil:** Ikke skille de tre sjokkene (§5.4) — særlig tro at et inflasjonssjokk kan nøytraliseres fullt ut med renta (det kan det ikke; gapene får ulikt fortegn); feil retning på kurveskift i (y,π)-diagrammet (§5.11); manglende figur der grafisk analyse forventes; ingen intuisjon bak skiftet.
- **Quiz: 26 · Flashcards: 24**

#### Kapittel 2.4: Samspill mellom penge- og finanspolitikk (modell 3)

- **id:** `sok3006-2-4` · **number:** 2.4 · **estimatedMinutes:** 60 · **prerequisites:** `sok3006-2-3`
- **Kapitteltype:** teori
- **description:** Modell 3 med to instrumenter (rente r og offentlig etterspørsel g): hvorfor begge mål kan nås samtidig, den divergente responsen ved et inflasjonssjokk, og «komparativt fortrinn» mellom instrumentene.
- **Eksamensbelegg:** ~13 % (H23 O1, H24 O1) — nyere, men gjennomstrukturert (a–f) og en sannsynlig retur ifølge prognosen. Prioritet: **kunne** (nivå 2, høyt belønnet og trolig på neste sett).
- **Innholdskontrakt:** Utvid IS med et finanspolitikkledd: $y = -\alpha_1(r-\rho) + \alpha_2 e + \alpha_3 g + v$. **Med to instrumenter** (rente $r$ og offentlig etterspørsel $g$) kan **begge** mål ($\pi=\pi^*$ og $y=0$) nås samtidig — vis dette. **Divergent respons ved inflasjonssjokk ($u>0$):** optimalt å **stramme inn pengepolitikken (heve renta) OG føre ekspansiv finanspolitikk** — instrumentene trekker i hver sin retning. Intuisjon: renta demper inflasjonen (via $y$ og $e$), men det gir et negativt produksjonsgap som finanspolitikken kan fylle igjen. **Komparativt fortrinn:** pengepolitikk har fortrinn i å stabilisere inflasjonen, finanspolitikk i å stabilisere produksjonen. **Styrken** på responsen avhenger av $\gamma_2$ (importert inflasjon), $\alpha_1+\alpha_2$ (rentens produksjonsvirkning) og $\alpha_3$ (finanspolitikkens virkning) — drøft dette (A-poeng). Sammenlign eksplisitt med ett-instrument-tilfellet (kap. 2.3) der inflasjonssjokket gav målkonflikt.
- **Oppgavesjangre:** D. Mønstereksempel: «Med både rente og finanspolitikk tilgjengelig: begrunn at både inflasjonsmålet og null produksjonsgap alltid kan oppnås, og drøft optimal instrumentkombinasjon ved henholdsvis et etterspørsels- og et inflasjonssjokk.»
- **Typiske feil:** Tro at instrumentene skal trekke samme vei ved et inflasjonssjokk (de divergerer); ikke vise at to instrumenter løser målkonflikten fra 2.3; glemme parameterdrøftingen av styrken ($\gamma_2, \alpha_1+\alpha_2, \alpha_3$); ikke sammenligne med ett-instrument-tilfellet.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 2.5: Inflasjonsstyring med finansiell stabilitet (modell 1)

- **id:** `sok3006-2-5` · **number:** 2.5 · **estimatedMinutes:** 50 · **prerequisites:** `sok3006-2-3`
- **Kapitteltype:** teori
- **description:** Modell 1 med et tredje ledd i tapsfunksjonen (finansielt gap q, vekt δ) og en finansiell relasjon — hvordan hensynet til finansiell stabilitet trekker renta bort fra den «nøytrale» innstillingen.
- **Eksamensbelegg:** ~13 % (V20 O2, V21 O1) — lavfrekvent men dekkes for bredde; V21-veiledningen gir bonus for å utlede betingelsene. Prioritet: **kjenne** (nivå 3, men med A-bonus).
- **Innholdskontrakt:** **Utvidet tapsfunksjon** $L = \tfrac12[(\pi-\pi^*)^2 + \lambda y^2 + \delta q^2]$ med **finansielt gap** $q$ (vekt $\delta$) og en **finansiell relasjon** $q = \tau y - \phi(r-\rho) + w$ (finansielt gap stiger med aktivitet, faller med renta). **Kjernepoeng:** hvis renta settes slik at både produksjons- og inflasjonsgapet er null, er det finansielle gapet typisk positivt — et **mindre ekspansivt rentekutt** (høyere rente enn «nøytralt») gir da lavere samlet tap fordi det demper $q$. Drøft hvor mye renta bør avvike fra den nøytrale innstillingen: veiingen mellom $\lambda$-tapet (produksjon) og $\delta$-tapet (finansiell stabilitet). **A-bonus (V21):** utled betingelsen for optimal renteavvik eksplisitt fra førsteordensbetingelsen med tre ledd. Sensor-eksempel: ved et negativt etterspørselssjokk bør renta *ikke* nødvendigvis settes så lavt at inflasjonen holdes helt på målet, hvis det bygger opp finansielle ubalanser.
- **Oppgavesjangre:** K. Mønstereksempel: «Med hensyn til finansiell stabilitet i tapsfunksjonen: drøft påstanden om at renta ved et negativt etterspørselssjokk bør settes ned tilstrekkelig til å holde inflasjonen på målet.»
- **Typiske feil:** Behandle modellen som to-ledds tapsfunksjon (glemme $\delta q^2$); tro at inflasjonen alltid skal holdes eksakt på målet; ikke koble den finansielle relasjonen til hvordan renta påvirker $q$; ikke drøfte avveiningen mellom de tre hensynene.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 2.6: Drill: pengepolitikk-oppgaven

- **id:** `sok3006-2-6` · **number:** 2.6 · **estimatedMinutes:** 90 · **prerequisites:** `sok3006-2-5`, `sok3006-2-3`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på hele pengepolitikk-oppgaven: fra oppgitt modell til fullført A-besvarelse med modelloppsett, MP-utledning, sjokkanalyse i (y,π)-diagram og evt. samspill/finansiell stabilitet.
- **Eksamensbelegg:** Dekker sjangrene A, B, C, D, K samlet — pengepolitikk-oppgaven som er den tyngste (~50 % eller 2/3) og nesten alltid med. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) sett opp den oppgitte modellen, list forutsetninger, determiner (endogene/eksogene), forklar hver relasjon; 2) substituer real-UIP inn i IS og Phillips → $dy/dr$, $d\pi/dr$; 3) minimer tapsfunksjonen → **utled MP-kurven** og tolk helningen (teller $\lambda$, nevner $\gamma_1+\gamma_2/(\alpha_1+\alpha_2)$), sammenlign åpen/lukket; 4) på et gitt sjokk: identifiser type ($v$/$u$/$z$), skift riktig kurve i (y,π)-diagram, finn ny optimal tilpasning, angi fortegn på begge gap, forklar mekanismen; 5) ved to instrumenter (modell 3): vis divergent respons og komparativt fortrinn; 6) ved finansiell stabilitet (modell 1): drøft renteavviket. **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling ved hvert steg — særlig modelloppsettet, MP-utledningen, det ulike fortegnet på gapene ved inflasjonssjokk, intuisjonen). **10–15 oppgaver** på eksamensnivå som roterer modell (2/3/1) × leveranse (forklar modell / utled MP / analyser sjokk / samspill / finansiell stabilitet), med nyskrevne parametere/kontekster og `solution` + `hints`.
- **Oppgavesjangre:** A, B, C, D, K. Mønstereksempel (full kjede): «(a) Ta utgangspunkt i den gitte modellen for inflasjonsstyring i åpen økonomi; determiner den og forklar relasjonene. (b) Utled MP-kurven og drøft helningen, sammenlignet med lukket økonomi. (c) Anta et positivt inflasjonssjokk — vis grafisk optimal rentesetting og forklar hvorfor gapene får ulikt fortegn. (d) Hvordan endres svaret hvis finanspolitikken også er tilgjengelig?»
- **Typiske feil:** Hele pengepolitikk-repertoaret fra §5: bruke modellen uforklart (§5.1), postulere MP-kurven (§5.2), ikke skille sjokkene (§5.4), feil kurveskift (§5.11), ingen intuisjon (§5.3).
- **Quiz: 18 · Flashcards: 10**

**Prøve-kvote Del 2:** 4 prøver (2.A sett opp/forklar modell 2 + determinering, sjanger A; 2.B utled MP-kurven + helningsdrøfting + åpen/lukket-sammenligning, sjanger B; 2.C optimal respons på de tre sjokkene grafisk med korrekt fortegn på gapene, sjanger C; 2.D full pengepolitikk-oppgave inkl. samspill penge/finanspolitikk (modell 3) og/eller finansiell stabilitet (modell 1), sjanger A+B+C+D+K).

---

### Del 3 — Valutamarked, portefølje og kapitalmobilitet *(prioritet: KUNNE — den faste tredje søylen, avgjør C→A)*

#### Kapittel 3.1: Porteføljemodellen for valutamarkedet (modell 4/5)

- **id:** `sok3006-3-1` · **number:** 3.1 · **estimatedMinutes:** 60 · **prerequisites:** `sok3006-1-2`
- **Kapitteltype:** teori
- **description:** Porteføljemodellen (Rødseth kap. 1): formuesbeskrankninger for private, sentralbank og utlendinger, risikopremien r = i − i* − eᵉ, og porteføljeetterspørselen f(r, Wₚ).
- **Eksamensbelegg:** ~33 % frekvens (V17, V21 O2, H21 O2, H22 O2) — den faste inngangen til valuta-oppgaven. Sjanger E-fundament. Prioritet: **kunne** (nivå 2, avgjør C→A).
- **Innholdskontrakt:** **Formuesbeskrankninger:** privat realfinansformue $W_p$ fordelt på innenlandske og utenlandske aktiva; sentralbankens $W_g$ (inkl. valutareserver $F_g$); utlendingenes $W^*$. **Risikopremie** $r = i - i^* - e^e$: meravkastningen på innenlandske aktiva utover det renteparitet tilsier, som kompenserer for risiko når aktivaene ikke er perfekte substitutter. **Porteføljeetterspørsel** $f(r, W_p)$: ønsket andel innenlandske aktiva stiger med risikopremien $r$ ($f'_r > 0$) og med formuen. **Modellvarianter:** modell 4 (enkel, to verdipapirer) og modell 5 (med penger $M$, innenlandske obligasjoner $B$, utenlandske $F$). Sett opp likevektsbetingelsen i valutamarkedet (tilbud = etterspørsel etter innenlandske aktiva). Understrek at $f'_r$ er nøkkelparameteren som senere tolkes som grad av kapitalmobilitet (kap. 3.3). Forklar hvorfor perfekte substitutter ($r=0$, ren UIP) er grensetilfellet.
- **Oppgavesjangre:** E-fundament. Mønstereksempel: «Sett opp porteføljemodellen med ett innenlandsk og ett utenlandsk verdipapir. Definer risikopremien og forklar hvordan porteføljeetterspørselen avhenger av den.»
- **Typiske feil:** Feil definisjon/fortegn på risikopremien $r = i - i^* - e^e$; glemme formuesbeskrankningene; behandle aktivaene som perfekte substitutter når modellen forutsetter imperfekte; forveksle risikopremie-$r$ med realrente-$r$ fra søyle 1 (§5.7-slektning).
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 3.2: Valutatilbud til sentralbanken ved depresiering

- **id:** `sok3006-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok3006-3-1`
- **Kapitteltype:** teori
- **description:** Hvordan tilbudet av valuta til sentralbanken påvirkes av en depresiering, skillet mellom porteføljesammensetnings- og forventningseffekten, og de tilstrekkelige (ikke nødvendige) betingelsene for at tilbudet øker.
- **Eksamensbelegg:** ~13 % (V21 O2, V25 O2(b)) — men V2021-veiledningen er eksplisitt på skillet tilstrekkelig/nødvendig, som gir **trekk** hvis forvekslet. Toppsjikt-differensiator. Prioritet: **kunne** (nivå 2, høyt belønnet).
- **Innholdskontrakt:** Ved en **depresiering** (høyere $E$/$e$): utled hvordan **tilbudet av valuta til sentralbanken** endres. To effekter: **porteføljesammensetningseffekten** (depresieringen endrer ønsket sammensetning av porteføljen — private vil holde en annen andel utenlandske aktiva) og **forventningseffekten** (depresieringen endrer forventet videre kursbane $e^e$, som via risikopremien $r$ påvirker ønsket beholdning). Knytt hver effekt til riktig del av det utledede uttrykket. **Tilstrekkelige vs. nødvendige betingelser (sensor-kritisk):** angi hvilke antakelser som er *tilstrekkelige* for at valutatilbudet øker ved depresiering — og understrek eksplisitt at de er tilstrekkelige, **ikke nødvendige** (å hevde at de er nødvendige gir trekk, jf. V2021). Vis mekanismen og drøft under hvilke forventningsantakelser tilbudet kan falle i stedet.
- **Oppgavesjangre:** E. Mønstereksempel: «I porteføljemodellen: vis hvordan en depresiering påvirker tilbudet av valuta til sentralbanken, skill porteføljesammensetnings- fra forventningseffekten, og angi tilstrekkelige betingelser for at tilbudet øker.»
- **Typiske feil:** Forveksle nødvendige og tilstrekkelige betingelser (§5.5, eksplisitt trekk i V2021); blande sammen porteføljesammensetnings- og forventningseffekten eller ikke knytte dem til uttrykket (§5.7); anta at tilbudet alltid øker ved depresiering (avhenger av forventningseffekten); ikke oppgi forutsetningene.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 3.3: Kapitalmobilitet og dens virkning

- **id:** `sok3006-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** `sok3006-3-1`
- **Kapitteltype:** teori
- **description:** Grad av kapitalmobilitet målt ved følsomheten |f′ᵣ|, hvordan høyere mobilitet gjør ISFX-kurven flatere og forsterker valutakursreaksjonen, og momentene som taler mot perfekt mobilitet.
- **Eksamensbelegg:** ~33 % frekvens (H16, H21 O2, H22 O2(b), V25 O2(a,e)) — fast tilbakevendende, ofte koblet til MFT og rentesetting. Prioritet: **kunne** (nivå 2).
- **Innholdskontrakt:** **Grad av kapitalmobilitet** = følsomheten $|f'_r|$ (eller $|dE/d(i-i^*)|$): hvor sterkt ønsket beholdning av innenlandske aktiva reagerer på risikopremien. Høyere $|f'_r|$ → **flatere ISFX-kurve** (kap. 3.4) → valutakursen reagerer sterkere på rentedifferanser og rentens produksjonsvirkning endres. Ved **perfekt kapitalmobilitet** ($|f'_r| \to \infty$) bæres valutakursen av renteparitet alene ($r \to 0$, ren UIP). **Momenter mot perfekt mobilitet** (Rødseth s. 16–17): risiko/risikoaversjon, ulike forventninger, likviditetsbehov, reguleringer/kapitalkontroll — forklar hvert. Vis hvordan graden av mobilitet påvirker rentens effekt på produksjonen (høy mobilitet → sterk valutakurskanal). Koble til at $f'_r$ er porteføljeetterspørselens rentefølsomhet fra kap. 3.1.
- **Oppgavesjangre:** F. Mønstereksempel: «Hvorfor kan følsomheten i etterspørselen etter innenlandske aktiva overfor risikopremien tolkes som et mål på kapitalmobilitet? Vis hvordan graden av kapitalmobilitet påvirker rentens effekt på produksjonen.»
- **Typiske feil:** Ikke koble $|f'_r|$ til ISFX-helningen; tro at perfekt mobilitet alltid gjelder (drøft momentene mot); feil retning (høyere mobilitet → flatere ISFX, sterkere kurskanal); ikke tolke mobilitetsgraden økonomisk.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 3.4: Mundell–Fleming–Tobin: fast vs. flytende kurs (modell 6)

- **id:** `sok3006-3-4` · **number:** 3.4 · **estimatedMinutes:** 65 · **prerequisites:** `sok3006-3-3`, `sok3006-1-3`
- **Kapitteltype:** teori
- **description:** Modell 6 (Rødseth kap. 6): utledning av ISFX- og LM-kurven, fortegnsdrøftingen av valutakursleddet i ISFX, og politikkeffektivitet under fast vs. flytende kurs som funksjon av kapitalmobilitet.
- **Eksamensbelegg:** ~20 % frekvens (H16, V25 O2) — en klassisk «tung» returkandidat, ofte den mest krevende oppgaven. Prioritet: **kunne** (nivå 2, tungt tema).
- **Innholdskontrakt:** Sett opp vare-, penge- og valutamarkedslikevekt. **Utled ISFX-kurven** = IS med valutakursen substituert ut via renteparitet/porteføljelikevekten; merk at **valutakursleddet inneholder flere motstridende ledd** hvis samlede fortegn må drøftes eksplisitt (sensorkrav — påstå aldri et bestemt fortegn uten å oppgi antakelsene bak). **Utled LM-kurven** (pengemarkedslikevekt). **Politikkanalyse grafisk** i ISFX-LM: hvordan finans- og pengepolitikk virker på produksjonen under **fast** vs. **flytende** kurs, og hvordan effekten avhenger av **kapitalmobilitet**. Klassiske resultater: pengepolitikk er virkningsløs på produksjon under fast kurs, virksom under flytende; finanspolitikk mister kraft under flytende kurs ved høy mobilitet (utkonkurrering via valutakurs). Vis hvert regime med figur, skift og ny likevekt, og forklar mekanismen. Kryssrefererer til SØK2009 for den grafiske Mundell–Fleming-grunnintuisjonen (masternivået her er den eksplisitte porteføljefunderingen og fortegnsdrøftingen).
- **Oppgavesjangre:** G. Mønstereksempel: «Bruk Mundell–Fleming–Tobin-modellen til å sammenligne hvor effektiv finans- og pengepolitikken er til å påvirke produksjonen under fast og flytende valutakurs, og drøft hvordan kapitalmobiliteten påvirker konklusjonen.»
- **Typiske feil:** Ignorere fortegnstvetydigheten i valutakursleddet i ISFX (§5.6) — påstå et fortegn uten antakelser; ikke sammenligne fast og flytende kurs (§5.10) — nøye seg med ett regime; feil retning på kurveskift (§5.11); glemme kapitalmobilitetens rolle for konklusjonen; bygge modellen fra bunnen à la SØK2009 i stedet for masternivå-utledningen.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 3.5: Drill: valuta- og kapitalmobilitetsoppgaven

- **id:** `sok3006-3-5` · **number:** 3.5 · **estimatedMinutes:** 80 · **prerequisites:** `sok3006-3-4`, `sok3006-3-2`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på hele valuta-oppgaven: fra oppgitt porteføljemodell til fullført A-besvarelse med risikopremie, valutatilbud ved depresiering, kapitalmobilitet og MFT-politikkanalyse.
- **Eksamensbelegg:** Dekker sjangrene E, F, G samlet — valuta-/kapitalmobilitetsoppgaven, den faste tredje søylen (~33 %). Prioritet: **kunne** (avgjør C→A).
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) sett opp porteføljemodellen (formuesbeskrankninger, risikopremie $r = i-i^*-e^e$, $f(r,W_p)$), forklar relasjonene; 2) ved depresiering: utled valutatilbudet, skill porteføljesammensetnings- fra forventningseffekten, angi tilstrekkelige (ikke nødvendige) betingelser; 3) ved kapitalmobilitet: tolk $|f'_r|$, vis virkningen på ISFX-helning og rentesetting, drøft momentene mot perfekt mobilitet; 4) ved MFT: utled ISFX (drøft fortegnet på valutakursleddet) og LM, analyser politikk under fast vs. flytende kurs som funksjon av mobilitet; 5) tolk alt verbalt. **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling ved hvert steg — særlig tilstrekkelig/nødvendig-skillet, effekt-atskillelsen, fortegnsdrøftingen i ISFX, fast/flytende-sammenligningen). **8–12 oppgaver** på eksamensnivå som roterer modell (4/5/6) × leveranse (risikopremie / valutatilbud / kapitalmobilitet / MFT-regime), med nyskrevne kontekster og `solution` + `hints`.
- **Oppgavesjangre:** E, F, G. Mønstereksempel (full kjede): «(a) Sett opp porteføljemodellen og definer risikopremien. (b) Vis hvordan en depresiering påvirker valutatilbudet til sentralbanken, og skill de to effektene. (c) Tolk følsomheten $|f'_r|$ som kapitalmobilitet. (d) Bruk MFT til å sammenligne pengepolitikkens virkning under fast og flytende kurs.»
- **Typiske feil:** Hele valuta-repertoaret fra §5: forveksle tilstrekkelig/nødvendig (§5.5), blande de to depresieringseffektene (§5.7), ignorere ISFX-fortegnstvetydigheten (§5.6), bare ett kursregime (§5.10).
- **Quiz: 18 · Flashcards: 10**

**Prøve-kvote Del 3:** 4 prøver (3.A porteføljemodell + risikopremie + porteføljeetterspørsel, sjanger E-fundament; 3.B valutatilbud ved depresiering med skillet porteføljesammensetning/forventning og tilstrekkelig/nødvendig-betingelser, sjanger E; 3.C kapitalmobilitet $|f'_r|$ + virkning på ISFX/rentesetting + momenter mot perfekt mobilitet, sjanger F; 3.D Mundell–Fleming–Tobin fast vs. flytende kurs med fortegnsdrøfting av valutakursleddet, sjanger G).

---

### Del 4 — Olje, naturressurser og to-sektor-økonomi *(prioritet: PERFEKT — den nest tyngste søylen, oppgave 2)*

#### Kapittel 4.1: Skjermet og konkurranseutsatt sektor (modell 7)

- **id:** `sok3006-4-1` · **number:** 4.1 · **estimatedMinutes:** 60 · **prerequisites:** `sok3006-1-3`
- **Kapitteltype:** teori
- **description:** To-sektor-modellen (Rødseth kap. 7): skjermet sektor med endogen pris Pₙ, konkurranseutsatt sektor med Pₜ = EP*, lønn W og handelsbalansen — modelloppsett og forklaring av relasjonene.
- **Eksamensbelegg:** ~47 % frekvens (H17, H18, V20 O1, V21 O4, H22 O3, H23 O2, H24 O2) — den nest hyppigste modellen i faget og kjernen i søyle 3. Prioritet: **perfekt**.
- **Innholdskontrakt:** To sektorer: **skjermet** ($n$, varer som ikke handles — pris $P_n$ bestemt innenlands av tilbud og etterspørsel) og **konkurranseutsatt** ($t$, varer handlet på verdensmarkedet — pris $P_t = EP^*$ gitt utenfra). Faktorer: arbeidskraft $N_i$, evt. realkapital $K_i$; lønn $W$ (felles). **Relativprisen** $P_n/P_t$ = realvalutakursen internt (høyere = realappresiering, skjermet sektor relativt dyrere). **Handelsoverskudd** $X$ for konkurranseutsatte varer = produksjon minus innenlandsk etterspørsel. Determiner modellen; forklar hvordan etterspørselen fordeler seg mellom sektorene og hvordan likevekten bestemmer $P_n$, sysselsettingsfordelingen $\eta$ (andel i skjermet) og $X$. Skill de **to lukkingene** som styrer resten av delen: **eksogen lønn** (ledig kapasitet, arbeidsmarkedet klareres ikke) vs. **endogen lønn / full sysselsetting** (arbeidsmarkedet klareres, arbeidskraft flyttes mellom sektorer). Understrek at valget av lukking endrer alle komparativ-statikk-svarene (foregriper 4.3–4.5).
- **Oppgavesjangre:** H-fundament. Mønstereksempel: «Sett opp to-sektor-modellen med en skjermet og en konkurranseutsatt sektor. Forklar hvordan prisene bestemmes i hver sektor, og hva relativprisen $P_n/P_t$ måler.»
- **Typiske feil:** Tro at konkurranseutsatt pris bestemmes innenlands (den er $P_t = EP^*$); forveksle de to sektorene / rollen til $P_n$; ikke skille eksogen fra endogen lønn (§5.9); glemme handelsbalansen $X$; ikke determinere modellen.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 4.2: Naturressursinntekt og sektorstørrelse: hollandsk syke, statisk (modell 8)

- **id:** `sok3006-4-2` · **number:** 4.2 · **estimatedMinutes:** 60 · **prerequisites:** `sok3006-4-1`
- **Kapitteltype:** teori
- **description:** Modell 8 (Torvik): hvordan økt naturressursinntekt R gir realappresiering og en større skjermet sektor — den klassiske hollandsk-syke-mekanismen i den statiske to-sektor-modellen.
- **Eksamensbelegg:** ~40 % frekvens (V20 O1, V21 O4, H22 O3, H23 O2, H21 O3) — den statiske hollandsk-syke-effekten, hyppig og sentral. Prioritet: **perfekt**.
- **Innholdskontrakt:** Legg til **ressursinntekt $R$** (oljeinntekt) i modellen fra 4.1: den øker innenlandsk disponibel inntekt og dermed etterspørselen. **Mekanismen (hollandsk syke, statisk):** ressursinntekten øker etterspørselen etter både skjermede og konkurranseutsatte varer; konkurranseutsatte varer kan importeres (pris låst til $P_t = EP^*$), men skjermede kan ikke → **etterspørselen etter skjermede varer presser $P_n$ opp** → **realappresiering** ($P_n/P_t$ stiger) → arbeidskraft trekkes fra konkurranseutsatt til skjermet sektor → **økt sysselsettingsandel $\eta$ i skjermet sektor** og redusert konkurranseutsatt sektor. Vis effekten på $P_n$, $\eta$, $X$ (handelsbalanse) med figur. **Alternativ tolkning:** i en modell med ledig kapasitet kan lavere oljeinntekter tolkes som redusert etterspørsel (motsatt vei). Understrek at dette er den *statiske* konklusjonen — kontrasten til den dynamiske (kap. 4.4) er en A-differensiator.
- **Oppgavesjangre:** I. Mønstereksempel: «Drøft påstanden: økte naturressursinntekter gir en større skjermet sektor. Vis mekanismen i den statiske to-sektor-modellen.»
- **Typiske feil:** Feil retning på realvalutakursen (ressursinntekt → realappresiering, $P_n/P_t$ *opp*); glemme at konkurranseutsatt pris er låst til verdensmarkedet; ikke vise arbeidskraftflyttingen mellom sektorer; behandle det som den dynamiske modellen (§5.8) — forveksle statisk og dynamisk resultat.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 4.3: Finanspolitikk mot skjermet vs. konkurranseutsatt sektor

- **id:** `sok3006-4-3` · **number:** 4.3 · **estimatedMinutes:** 55 · **prerequisites:** `sok3006-4-2`
- **Kapitteltype:** teori
- **description:** Hvordan økt offentlig kjøp rettet mot henholdsvis skjermet og konkurranseutsatt sektor virker forskjellig på de to sektorenes produksjon, handelsbalansen og prisen Pₙ — og hvordan eksogen vs. endogen lønn endrer analysen.
- **Eksamensbelegg:** ~13 % (H18, H24 O2) — men gjennomstrukturert og et sannsynlig retur-tema. Eksogen/endogen lønn-skillet er A-differensiator. Prioritet: **kunne** (nivå 2, høyt belønnet).
- **Innholdskontrakt:** Analyser **økt offentlig kjøp $G_i$** rettet mot hver sektor. **Mot skjermet sektor:** øker etterspørselen etter skjermede varer → $P_n$ opp → realappresiering → arbeidskraft til skjermet sektor, konkurranseutsatt sektor krymper, handelsbalansen $X$ svekkes. **Mot konkurranseutsatt sektor:** varer kan importeres (pris låst), så effekten på $P_n$ og sektorstørrelse er svakere/annerledes → mest import/handelsbalanse-effekt. **Eksogen lønn (ledig kapasitet):** produksjonen kan øke i den sektoren etterspørselen rettes mot uten å trekke ressurser fra den andre. **Endogen lønn / full sysselsetting:** arbeidsmarkedet klareres → økt kjøp i én sektor *må* trekke arbeidskraft fra den andre (tilbudssiden binder), lønna $W$ justeres → helt andre komparativ-statikk-svar. Vis begge lukkinger side om side og sammenlign (sensor belønner sammenligningen). Figurkrav: navngi sektorene, $P_n$, sysselsettingsfordelingen og $X$.
- **Oppgavesjangre:** H. Mønstereksempel: «Sammenlign virkningen på de to sektorenes produksjon, handelsbalansen og prisen på skjermede varer av at det offentlige øker sitt kjøp av henholdsvis skjermede og konkurranseutsatte varer. Hvordan endres analysen hvis lønna bestemmes endogent ved full sysselsetting?»
- **Typiske feil:** Overse skillet eksogen/endogen lønn (§5.9) — bruke ledig-kapasitet-mekanismen når arbeidsmarkedet klareres; ikke skille virkningen av kjøp mot skjermet vs. konkurranseutsatt sektor; feil retning på $P_n$/handelsbalanse; ikke sammenligne de to lukkingene.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 4.4: Naturressursinntekt med endogen produktivitet: dynamisk (modell 9)

- **id:** `sok3006-4-4` · **number:** 4.4 · **estimatedMinutes:** 65 · **prerequisites:** `sok3006-4-2`
- **Kapitteltype:** teori
- **description:** Modell 9 (Torvik): produktivitetsvekst med learning-by-doing og spillover mellom sektorene, langtidslikevekten for relativ produktivitet λ = H_T/H_N, og det kontraintuitive resultatet at langsiktig sektorstørrelse kan være uavhengig av ressursinntekten.
- **Eksamensbelegg:** ~27 % frekvens (H17, H21 O3, H23 O2 del 2) — den dynamiske utvidelsen, en tydelig A-differensiator (kontrasten statisk/dynamisk). Prioritet: **perfekt** (nivå 1-tema, teknisk krevende).
- **Innholdskontrakt:** **Endogen produktivitet:** produktivitetsveksten i hver sektor $\dot H_i / H_i$ avhenger av egen sysselsetting (learning-by-doing) og av spillover fra den andre sektoren. **Langtidslikevekt for relativ produktivitet** $\lambda = H_T/H_N$: etabler betingelsen der relativ produktivitet er konstant (produktivitetsvekstene like) og løs for likevekts-$\lambda$. **Dynamikk:** vis tidsforløpet mot likevekten (faseanalyse i relativ produktivitet). **Kontraintuitivt kjerneresultat:** i langsiktig likevekt kan **størrelsen på skjermet sektor være uavhengig av ressursinntekten** $R$ — den statiske hollandsk-syke-effekten (4.2) og den dynamiske gir *ulike* svar. Mekanismen: learning-by-doing i konkurranseutsatt sektor kan motvirke den statiske arbeidskraftflyttingen på lang sikt. **Kort vs. lang sikt:** ressursinntekt gir statisk realappresiering på kort sikt, men langsiktslikevekten kan bringe sektorstørrelsen tilbake. Gode besvarelser **sammenligner statisk og dynamisk** eksplisitt (sensor belønner dette).
- **Oppgavesjangre:** J. Mønstereksempel: «Med endogen produktivitet (learning-by-doing med spillover mellom sektorene): etabler langtidslikevekten for relativ produktivitet, og vis hvordan økte oljeinntekter påvirker sysselsettingen i de to sektorene på kort og lang sikt.»
- **Typiske feil:** Behandle den dynamiske modellen som den statiske (§5.8) — glemme at endogen produktivitet gir et annet (kontraintuitivt) langsiktsresultat; ikke etablere langtidslikevekten for $\lambda$; forveksle de to $\lambda$-ene (tapsvekt vs. relativ produktivitet); ikke sammenligne kort og lang sikt; ikke kontrastere statisk og dynamisk.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 4.5: Marshall–Lerner, realdepresiering og handelsbalansen

- **id:** `sok3006-4-5` · **number:** 4.5 · **estimatedMinutes:** 45 · **prerequisites:** `sok3006-1-3`, `sok3006-4-1`
- **Kapitteltype:** teori
- **description:** Marshall–Lerner-betingelsen og de tre effektene av en realdepresiering på handelsbalansen (eksportvolum opp, importvolum ned, importpris opp), koblet til to-sektor-modellen.
- **Eksamensbelegg:** ~7 % frekvens (V21 O3) — lavfrekvent, dekkes for bredde. Prioritet: **kjenne** (nivå 3).
- **Innholdskontrakt:** En **realdepresiering** (høyere $e$/$q$) påvirker handelsbalansen via tre kanaler: **eksportvolum opp** (innenlandske varer relativt billigere), **importvolum ned** (utenlandske varer relativt dyrere), men **importpris opp** (verdi-effekt som trekker handelsbalansen feil vei). **Marshall–Lerner-betingelsen:** handelsbalansen bedres av en realdepresiering *hvis* summen av tallverdiene til eksport- og importelastisitetene overstiger 1 (volumeffektene dominerer verdi-effekten). Gi den intuitive tolkningen av hver effekt og betingelsen. Koble til to-sektor-modellen: realdepresiering styrker konkurranseutsatt sektor og handelsbalansen når betingelsen holder. Nevn J-kurve-intuisjonen kort (volumene reagerer tregt → handelsbalansen kan svekkes først).
- **Oppgavesjangre:** L. Mønstereksempel: «Drøft hvordan en realdepresiering påvirker handelsbalansen, og gi en intuitiv tolkning av effektene som inngår i Marshall–Lerner-betingelsen.»
- **Typiske feil:** Glemme verdi-effekten (importpris opp) og bare telle volumeffektene; feil retning på realdepresieringen; oppgi betingelsen uten intuitiv tolkning av de tre effektene; ikke koble til to-sektor-modellen.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 4.6: Drill: olje- og to-sektor-oppgaven

- **id:** `sok3006-4-6` · **number:** 4.6 · **estimatedMinutes:** 90 · **prerequisites:** `sok3006-4-4`, `sok3006-4-3`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på hele olje-oppgaven: fra oppgitt to-sektor-modell til fullført A-besvarelse med sektorstørrelse, hollandsk syke statisk og dynamisk, finanspolitikk og eksogen/endogen lønn.
- **Eksamensbelegg:** Dekker sjangrene H, I, J, L samlet — olje/to-sektor-oppgaven, nesten like sannsynlig som pengepolitikk-oppgaven (~1/3 eller 50 %). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) sett opp to-sektor-modellen (skjermet $P_n$ endogen, konkurranseutsatt $P_t = EP^*$), forklar relasjonene, angi lukking (eksogen/endogen lønn); 2) ved ressursinntekt $R$: vis den statiske hollandsk-syke-mekanismen (realappresiering, $\eta$ opp, $X$ ned) med figur; 3) ved finanspolitikk: sammenlign kjøp mot skjermet vs. konkurranseutsatt sektor, og eksogen vs. endogen lønn; 4) ved dynamisk utvidelse: etabler langtidslikevekten for $\lambda = H_T/H_N$, vis kort/lang-sikt og det kontraintuitive resultatet, kontrasten til statisk; 5) evt. Marshall–Lerner ved realdepresiering; 6) tolk alt verbalt og sammenlign modellvariantene. **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling ved hvert steg — særlig realappresierings-mekanismen, eksogen/endogen lønn-skillet, statisk/dynamisk-kontrasten). **10–15 oppgaver** på eksamensnivå som roterer modell (7/8/9) × leveranse (sektorstørrelse / finanspolitikk / dynamisk langtidslikevekt / Marshall–Lerner), med nyskrevne kontekster og `solution` + `hints`.
- **Oppgavesjangre:** H, I, J, L. Mønstereksempel (full kjede): «(a) Sett opp to-sektor-modellen og forklar hvordan prisene bestemmes. (b) Vis hvordan økt oljeinntekt gir realappresiering og en større skjermet sektor (statisk). (c) Hvordan endres finanspolitikkens virkning under full sysselsetting? (d) Utvid til endogen produktivitet — hva blir langsiktsresultatet, og hvorfor er det kontraintuitivt?»
- **Typiske feil:** Hele olje-repertoaret fra §5: forveksle statisk og dynamisk (§5.8), overse eksogen/endogen lønn (§5.9), feil retning på realvalutakursen, feil kurveskift (§5.11), ingen sammenligning av modellvarianter.
- **Quiz: 18 · Flashcards: 10**

**Prøve-kvote Del 4:** 4 prøver (4.A sett opp to-sektor-modellen + relativpris + eksogen/endogen lønn, sjanger H-fundament; 4.B naturressursinntekt → sektorstørrelse, hollandsk syke statisk med realappresiering, sjanger I; 4.C finanspolitikk mot skjermet vs. konkurranseutsatt sektor under begge lønnslukkinger, sjanger H; 4.D dynamisk to-sektor med endogen produktivitet, langtidslikevekt $\lambda$ og statisk/dynamisk-kontrast + Marshall–Lerner, sjanger J+L).

---

### Del 5 — Eksamenstrening

#### Kapittel 5.1: Begrepsdrill: de faste gjengangerne på tvers av søylene

- **id:** `sok3006-5-1` · **number:** 5.1 · **estimatedMinutes:** 60 · **prerequisites:** `sok3006-4-6`, `sok3006-3-5`, `sok3006-2-6`
- **Kapitteltype:** teori (begrepsdrill)
- **description:** De ~15 faste begrepsgjengangerne fra alle tre søyler, definert presist og koblet til rett modell — sikre poeng uansett hvilke oppgaver som kommer.
- **Eksamensbelegg:** Begreper inngår i modelloppsettet i hvert sett (sjanger A gjennom alle søyler). Prioritet: **kunne** (sikre poeng).
- **Innholdskontrakt:** Presise definisjoner + rett modell for: MP-kurve, tapsfunksjon og $\lambda$, produksjons-/inflasjonsgap, real-UIP, de tre sjokkene ($v$/$u$/$z$), komparativt fortrinn (penge/finanspolitikk), finansielt gap; risikopremie $r = i-i^*-e^e$, porteføljesammensetnings- vs. forventningseffekt, kapitalmobilitet $|f'_r|$, tilstrekkelig vs. nødvendig betingelse, ISFX-/LM-kurve, fast vs. flytende kurs; skjermet/konkurranseutsatt sektor, relativpris $P_n/P_t$, realappresiering, hollandsk syke (statisk vs. dynamisk), sysselsettingsandel $\eta$, learning-by-doing, langtidslikevekt $\lambda = H_T/H_N$, Marshall–Lerner. Hvert begrep med presis definisjon, notasjon, og hvilken modell/sjanger det hører til. Understrek de to symbolkollisjonene ($r$, $\lambda$) og skillet tilstrekkelig/nødvendig.
- **Oppgavesjangre:** A. Mønstereksempel: «Forklar kort hva a) MP-kurven, b) risikopremien i porteføljemodellen, og c) den statiske hollandsk-syke-effekten er, med riktig notasjon.»
- **Typiske feil:** Upresise definisjoner uten notasjon/modelltilknytning; forveksle de to $r$-ene / $\lambda$-ene; blande statisk og dynamisk hollandsk syke; forveksle tilstrekkelig og nødvendig.
- **Quiz: 22 · Flashcards: 30**

#### Kapittel 5.2: Sjangerkapittel: intuisjons- og sammenligningssvaret (drøfting)

- **id:** `sok3006-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok3006-5-1`
- **Kapitteltype:** sjangerkapittel (drøfting; lånt struktur fra `DNA-drofting.md`)
- **description:** Håndverket i det sensor belønner mest: å ledsage teknikken med økonomisk intuisjon og å sammenligne modellvarianter (åpen/lukket, statisk/dynamisk, fast/flytende, eksogen/endogen lønn, høy/lav mobilitet).
- **Eksamensbelegg:** Sensortekstene krever gjennomgående at teknikken suppleres med intuisjon og at modellvarianter sammenlignes (eksplisitt belønnet i H23, V20 O1, H24, V25) — den viktigste A-differensiatoren på tvers av søylene. Prioritet: **kunne** (avgjør C→A).
- **Innholdskontrakt:** **Oppskrift (trinn-for-trinn):** (1) etter enhver utledning/figur: forklar helningen (hvorfor er kurven bratt/flat?), skiftretningen (hvorfor beveger den seg dit?) og mekanismen (hvilken økonomisk kanal?); (2) når oppgaven inviterer til det, sett opp sammenligningen som et eksplisitt par — presenter *begge* varianter, vis hvor mekanismene skiller lag, og konkluder; (3) håndter fortegn og betingelser presist (tilstrekkelig/nødvendig, ISFX-leddet); (4) tidsbudsjett i eksamenssituasjonen. **Gjennomskrevet A-besvarelse med margkommentarer** på et sammenligningsspørsmål (f.eks. statisk vs. dynamisk hollandsk syke, eller åpen vs. lukket MP-kurve): marker hvor intuisjonen løfter svaret fra C til A. De fem sammenligningsaksene med sjekkliste: åpen/lukket ($\alpha_2,\gamma_2$-kanalen), statisk/dynamisk (kort/lang sikt, endogen produktivitet), fast/flytende kurs (politikkeffektivitet), eksogen/endogen lønn (tilbudssidebinding), høy/lav kapitalmobilitet ($|f'_r|$, ISFX-helning). **3–6 momentliste-oppgaver** (løsning = momentliste + disposisjon, ikke fullt utregnet svar).
- **Oppgavesjangre:** A/B/C/G/H/I/J-sammenligningsvarianter. Mønstereksempel: «Skisser hvordan du ville sammenlignet den statiske og den dynamiske hollandsk-syke-analysen i et A-svar: hvilke mekanismer skiller dem, og hvilken intuisjon løfter svaret?»
- **Typiske feil:** Bare det tekniske uten intuisjon, eller bare prat uten modell (§5.3 — begge kreves); nøye seg med én variant der oppgaven ber om sammenligning (§5.10); ikke forankre intuisjonen i den forutgående modellanalysen; upresis fortegns-/betingelseshåndtering.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 5.3: Øvingseksamen 1 — pengepolitikk + olje (strukturert a–f, modell-vedleggs-stil)

- **id:** `sok3006-5-3` · **number:** 5.3 · **estimatedMinutes:** 100 · **prerequisites:** `sok3006-5-2`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett 50/50-sett i H2023–V2025-stilen med vedlagt modellnotat: oppgave 1 pengepolitikk (modell 2/3, a–f), oppgave 2 olje/to-sektor (modell 7–9), med A-løsningsforslag.
- **Eksamensbelegg:** Speiler den mest sannsynlige neste-eksamen-malen (2 oppgaver, lik vekt, vedlagt modellnotat). Prioritet: **perfekt** (helhetstrening).
- **Innholdskontrakt:** Nyskrevet 50/50-sett: **oppgave 1** (pengepolitikk, modell 2 eller 3) med delspørsmål a–f (determiner modell → forklar relasjoner → utled MP-kurven → analyser sjokk → evt. samspill penge/finanspolitikk); **oppgave 2** (olje/to-sektor, modell 7–9) med delspørsmål (sett opp modell → statisk hollandsk syke → finanspolitikk/lønnslukking → dynamisk utvidelse). **Løsningsforslag i eget `collapsible` per oppgave**, skrevet som A-besvarelse med figurbeskrivelser og intuisjon, og `tip`-notat om vekting/delpoeng per delspørsmål. Alle tall/kontekster nyskrevne.
- **Oppgavesjangre:** A, B, C, D, H, I, J. Mønstereksempel: se innholdskontrakt (fullt sett).
- **Typiske feil:** Tidsstyring (bruke for lenge på én søyle); hoppe over modelloppsett/utledning under tidspress; glemme intuisjon/figur i løsningen.
- **Quiz: 12 · Flashcards: 6**

#### Kapittel 5.4: Øvingseksamen 2 — pengepolitikk + valuta/MFT (strukturert)

- **id:** `sok3006-5-4` · **number:** 5.4 · **estimatedMinutes:** 100 · **prerequisites:** `sok3006-5-2`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett sett som kombinerer pengepolitikk (søyle 1) med valuta/kapitalmobilitet/MFT (søyle 2), i den klassiske returkandidat-kombinasjonen (jf. H2016, V2025), med A-løsningsforslag.
- **Eksamensbelegg:** Speiler beredskaps-malen der valuta/MFT er tredje-oppgave eller tung deloppgave. Prioritet: **kunne/perfekt** (helhetstrening).
- **Innholdskontrakt:** Nyskrevet sett: **oppgave 1** pengepolitikk (modell 2, MP-utledning + sjokk), **oppgave 2** valuta/kapitalmobilitet/MFT (modell 4–6: porteføljemodell + valutatilbud ved depresiering + kapitalmobilitet + Mundell–Fleming–Tobin fast vs. flytende kurs, a–e). **Løsningsforslag i `collapsible`** per oppgave som A-besvarelse, med fortegnsdrøfting av ISFX-leddet og tilstrekkelig/nødvendig-presiseringen fremhevet, og `tip`-notat om vekting. Alle tall/kontekster nyskrevne.
- **Oppgavesjangre:** A, B, C, E, F, G. Mønstereksempel: se innholdskontrakt.
- **Typiske feil:** Ignorere ISFX-fortegnstvetydigheten; forveksle tilstrekkelig/nødvendig; bare ett kursregime; tidsstyring.
- **Quiz: 12 · Flashcards: 6**

#### Kapittel 5.5: Øvingseksamen 3 — essay-stil (2016–2018-formatet)

- **id:** `sok3006-5-5` · **number:** 5.5 · **estimatedMinutes:** 100 · **prerequisites:** `sok3006-5-2`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett sett i den eldre essay-/Torvik-stilen (ett bredt «diskuter»-spørsmål per oppgave uten vedlagt ligningssett), som trener studenten i selv å hente fram og sette opp riktig modell.
- **Eksamensbelegg:** Speiler 2016–2018-formatet (åpne essayoppgaver), som fortsatt kan forekomme og trener modellvalg/-oppsett uten hjelp. Prioritet: **kunne** (helhetstrening, motsatt ferdighet).
- **Innholdskontrakt:** Nyskrevet essay-sett: to brede «diskuter»-oppgaver der studenten *selv* må velge og sette opp riktig modell (f.eks. «diskuter optimal pengepolitisk respons på et risikopremiesjokk» og «diskuter oljeinntektenes virkning på næringsstrukturen på kort og lang sikt»). **Løsningsforslag i `collapsible`** som A-besvarelse, med eksplisitt vekt på modellvalg, forutsetninger og intuisjon (siden ingen ligninger er oppgitt), og `tip`-notat om hva sensor vektlegger i essay-formatet (bredde + presisjon + intuisjon). Alle kontekster nyskrevne.
- **Oppgavesjangre:** C, I, J (essay-innpakning). Mønstereksempel: se innholdskontrakt.
- **Typiske feil:** Ikke sette opp modellen (essay frister til ren prat — §5.1); velge feil/for enkel modell; glemme forutsetningene; bredde uten presisjon eller omvendt.
- **Quiz: 12 · Flashcards: 6**

#### Kapittel 5.6: Øvingseksamen 4 — treoppgavesett (alle tre søyler)

- **id:** `sok3006-5-6` · **number:** 5.6 · **estimatedMinutes:** 110 · **prerequisites:** `sok3006-5-2`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett treoppgavesett som dekker alle tre søyler i ett sett (jf. V2021/H2021), med lik vekt og A-løsningsforslag — den bredeste helhetstreningen.
- **Eksamensbelegg:** Speiler de flerdelte settene (V2021 fire oppgaver, H2021 tre) der to eller alle tre søyler er representert. Prioritet: **perfekt** (bredest helhetstrening).
- **Innholdskontrakt:** Nyskrevet treoppgavesett med tilnærmet lik vekt: **oppgave 1** pengepolitikk (finansiell stabilitet ELLER samspill penge/finanspolitikk), **oppgave 2** valuta/portefølje (valutatilbud + kapitalmobilitet), **oppgave 3** olje (statisk + dynamisk hollandsk syke). **Løsningsforslag i `collapsible`** per oppgave som A-besvarelse med figurer og intuisjon, og `tip`-notat om vekting og tidsbudsjett over tre oppgaver. Dekker samlet sjangrene A–L minst én gang over de fire øvingseksamenene. Alle tall/kontekster nyskrevne.
- **Oppgavesjangre:** D/K, E/F, I/J (+ dekning av resten på tvers av øvingssettene). Mønstereksempel: se innholdskontrakt.
- **Typiske feil:** Tidsstyring over tre oppgaver; ujevn dybde; glemme intuisjon/sammenligning der oppgaven ber om det; ikke dekke alle søyler.
- **Quiz: 12 · Flashcards: 6**

**Prøve-kvote Del 5:** 4 prøver (5.A begrepsdrill på tvers av alle tre søyler, sjanger A; 5.B intuisjons- og sammenligningssvaret på et modellvariant-par, drøftingssjanger; 5.C blandet strukturert delsett (pengepolitikk + valuta) under tidspress; 5.D blandet strukturert delsett (olje + finansiell stabilitet/samspill) under tidspress — helhets- og tidsstyringsprøver).

---

## 4. Kvotesammendrag (AUTORITATIV)

Denne tabellen er **fasit** for alle senere faser. Per-kapittel-kvotene fra §3
summerer til totalene under. Flashcard-tettheten er hevet over 500-gulvet fordi
faget er **begreps- og modellrikt på tvers av tre søyler** med mange
notasjons-/definisjonsgjengangere (ni pensummodeller, ~15 faste begreper, to
symbolkollisjoner, flere skille-par sensor trekker for) — jf. README-lærdommen
om at ≥500 er et gulv, ikke et mål.

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 — Eksamenskart | 1 | 16 | 16 | 0 |
| 1 — Fundament | 4 | 76 | 86 | 4 |
| 2 — Pengepolitikk | 6 | 136 | 124 | 4 |
| 3 — Valuta/kapitalmobilitet | 5 | 104 | 98 | 4 |
| 4 — Olje/to-sektor | 6 | 122 | 120 | 4 |
| 5 — Eksamenstrening | 6 | 88 | 72 | 4 |
| **Sum** | **28** | **542** | **516** | **20** |

> **Merk:** kontrollsummering av per-kapittel-tallene i §3 gir **quiz 542** og
> **flashcards 516**. Begge ligger komfortabelt over ≥500-gulvet (buffer for at
> enkelte kapitler kan justeres ±2 under bygging uten å bryte gulvet). Skulle et
> kapittel underlevere, hentes differansen inn i det tilhørende drillkapitlet
> eller begrepsdrillen (5.1). **Autoritativt gulv: quiz ≥ 500 OG flashcards ≥ 500.**

**Prøvekvote totalt:** 4 prøver per temadel for Del 1–5 = **20 prøver**
(`sok3006-<del>-prove`, chapterNumber `<del>.P`). Del 0 er metadel uten prøve.
Prøvene dekker samlet sjangrene A–L minst én gang, og både essay-formatet
(2016–2018), det strukturerte a–f-formatet (fra 2019) og modell-vedleggs-formatet
(fra H2023).

---

## 5. Studieguide-elementer (Del 0 + tvers-av-bok-ressurser)

Del 0 (kap. 0.1) er studieguidens kjerne. I tillegg skal boka som helhet levere
(plassert i Del 0 og/eller i eksamenstrenings-delen):

1. **De ni pensummodellene som ett oppslagsnotat** — hver modell med relasjonene,
   notasjonen, kilden (Rødseth kap. 1/6/7, Røisland/Sveen, Torvik) og hvilken
   sjanger/oppgave den hører til. Speiler eksamensvedlegget (bokens innholdsryggrad).
2. **Formelark i emnets notasjon** — én side: IS/Phillips/real-UIP/tapsfunksjon
   (modell 2); MP-kurven $\pi-\pi^* = -[\lambda/(\gamma_1+\gamma_2/(\alpha_1+\alpha_2))]y$;
   risikopremie $r = i-i^*-e^e$, porteføljeetterspørsel $f(r,W_p)$; $P_t = EP^*$,
   relativpris $P_n/P_t$, langtidslikevekt $\lambda = H_T/H_N$. Marker hva som skal
   *utledes* (MP-kurven, valutatilbud, langtidslikevekten) vs. hva som bare slås opp.
3. **Sjangerkatalogen A–L** som studentens sjekkliste (fra kap. 0.1).
4. **Karakterskillene E/C/A** samlet (fra kap. 0.1 / analysens §4).
5. **Feilkatalogen** — de tolv typiske feilene (§5) samlet, hver med henvisning til
   kapitlet som forebygger den.
6. **De to symbolkollisjonene og skille-parene** ($r$/$r$, $\lambda$/$\lambda$;
   tilstrekkelig/nødvendig; statisk/dynamisk; eksogen/endogen lønn; åpen/lukket;
   fast/flytende) som egen advarselsboks.
7. **Studieløp** — anbefalt progresjon (10-ukers og 3-ukers intensivvariant): Del 1
   (fundamentet) → Del 2 (pengepolitikk) → Del 4 (olje) → Del 3 (valuta), prøver
   underveis, øvingseksamenene de siste ukene under tidspress.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `sok3006` med alle 28
   kapitler (id/number/title/description/estimatedMinutes/topics/prerequisites)
   etter mønster `COURSE_BI_OKONOMI` i `src/lib/data/textbook-courses-matte.ts`;
   `sectionNames` fra makrostruktur-tabellen (§2). Registrer emnet i
   `src/app/bok/trinn/hoyere/institusjoner.ts` under **NTNU** med visningsnavn
   «SØK3006 Valuta, olje og makroøkonomisk politikk».
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–L, frekvenstallene, de ni
   modellene, formatskiftet og avgrensningen (arbeidsdelingen mot SØK2009) som
   resten refererer til.
3. **Del 1** (fundamentet) — notasjon, UIP, realvalutakurs, tapsfunksjon som
   resten bruker.
4. **De tre søylene i avhengighetsrekkefølge**: Del 2 (pengepolitikk) → Del 3
   (valuta) → Del 4 (olje). Én byggeagent per hel del (jf. fase 4-batching);
   Del 2 og Del 4 er 6 kapitler og kan splittes, men gi da hele delens kontrakter
   til begge agenter og flagg for konsistenssjekk (notasjon, MP-utledningen,
   symbolkollisjonene). Drillkapitlet (2.6 / 3.5 / 4.6) bygges av samme agent som
   delen.
5. **Del 5 til slutt** (begrepsdrill + intuisjons-sjanger + 4 øvingseksamener
   gjenbruker alt); bygges av én agent som leser hele skjelettet.
6. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert;
   prøvene (§4) i prøvekapitler per del etter byggekontraktens spesifikasjon
   (`sok3006-<del>-prove`, chapterNumber `<del>.P`), Del 1–5.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
      (generer helst via `json.dump`; husk å escape `"` i norske sitattegn);
      `npm run build` grønn.
- [ ] **LaTeX**: alle formler i `$...$`/`$$...$$` med dobbel backslash i JSON
      (`\\alpha`, `\\gamma`, `\\lambda`, `\\pi`, `\\rho`, `\\eta`, `\\dot H`); ingen
      unicode-brøker; konsistent $y, r, e, \pi, \pi^*, \lambda$, $\alpha_i,
      \gamma_i$, $f(r,W_p)$, $P_t=EP^*$, $P_n/P_t$, $\lambda=H_T/H_N$.
- [ ] **Notasjonskonsistens**: tekstsøk over alle sok3006-filer — **påkrevd**:
      IS/Phillips/real-UIP/tapsfunksjon i modell 2-form, MP-kurven utledet,
      risikopremie $r = i-i^*-e^e$, $|f'_r|$, $P_t=EP^*$, $\lambda=H_T/H_N$;
      **de to symbolkollisjonene** ($r$ realrente/risikopremie; $\lambda$
      tapsvekt/relativ produktivitet) skal være **eksplisitt presisert** i hvert
      delkapittel der de forekommer; **forbudt/uønsket**: å bygge AA-DD fra bunnen
      à la SØK2009 (grep «AA-kurve», «DD-kurve», «Krugman» skal kun forekomme i
      kryssbok-lenker/forkunnskaps-merknader), ren matematikk-drill, økonometri,
      Ramsey/OLG/RBC/Euler.
- [ ] **Utledningskravet**: kap. 2.2, 2.6, 3.4, 4.4 og øvingseksamenene inneholder
      eksplisitt **utledningene** (MP-kurven fra minimering av $L$; ISFX/LM;
      langtidslikevekten for $\lambda$) — ikke postulerte resultater — grep «utled»
      og sjekk at MP-kurve-uttrykket og $dy/dr=-(\alpha_1+\alpha_2)$ forekommer.
- [ ] **Sjokk-kravet**: kap. 2.3, 2.6 og øvingseksamenene skiller eksplisitt de
      tre sjokkene ($v$/$u$/$z$) og viser at inflasjonssjokket gir **ulikt fortegn**
      på gapene (ikke fullt nøytraliserbart med renta alene).
- [ ] **Tilstrekkelig/nødvendig + fortegn**: kap. 3.2 presiserer tilstrekkelig vs.
      nødvendig for valutatilbud ved depresiering; kap. 3.4 drøfter fortegnet på
      ISFX-valutakursleddet eksplisitt (ingen udrøftet fortegnspåstand).
- [ ] **Statisk/dynamisk + eksogen/endogen lønn**: kap. 4.2 vs. 4.4 kontrasterer
      statisk og dynamisk hollandsk syke; kap. 4.1/4.3 skiller eksogen fra endogen
      lønn (full sysselsetting).
- [ ] **Teknikk + intuisjon + figur**: hvert eksempel/løsningsforslag med figur har
      figurbeskrivelse i ord (akser, kurver, skift, likevekt navngitt) OG verbal
      intuisjon; alle uttrykk tolkes økonomisk; modellvarianter sammenlignes der
      oppgaven ber om det.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene
      fra dette skjelettet), Forkunnskaper-`text` med lenker + Symbol- og
      formelliste-`collapsible` (per delkapittel — forklarer ALLE symboler brukt,
      med de to $r$/$\lambda$-kollisjonene presisert), Typiske feil-`warning`, 2–4
      eksempler (siste på eksamensnivå), 6–12 øvinger med `solution` + `hints`,
      repetisjons-`collapsible`; drillkapitlene (2.6, 3.5, 4.6) har løsningsoppskrift
      + sensor-kommentert case + 8–15 oppgaver; sjangerkapitlet 5.2 følger drøftings-
      malen (oppskrift + gjennomskrevet A-besvarelse + momentliste-oppgaver).
- [ ] **Quiz-sum ≥ 500 og flashcard-sum ≥ 500** per kvotetabellen (§4; per-kapittel-
      tallene summerer til 582/518 — kontrollsummér mot §3).
- [ ] **Prøver**: 4 per temadel 1–5 (20 stk) + 4 øvingseksamener; settene og prøvene
      dekker samlet sjangrene A–L minst én gang, og essay-/a–f-/modell-vedleggs-
      formatene.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, egne kontekster (land,
      næringer, sjokk), egne formuleringer; ingen formuleringer fra reelle sett eller
      sensorveiledninger (skjelettets mønstereksempler er selv omskrivninger og skal
      varieres videre, ikke kopieres ordrett inn); modelligninger, notasjon og faglige
      fakta er standard fagapparat (Rødseth / Røisland–Sveen–Torvik) uten verkshøyde og
      gjengis direkte; pensum refereres (forfatter/verk/begrep), aldri siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
      (200 + kapittelspesifikk streng), jf. lærdommen om `getChapterMeta`;
      institusjonssiden (NTNU) og bokforsiden (seksjonstitlene fra §2) sjekkes.

---

## 7. Arbeidsdeling mot SØK2009 og de andre SOK-bøkene

SØK3006 er **masternivået** av åpen-økonomi-makroen som NTNUs bachelor-emne
SØK2009 dekker grafisk-intuitivt; sammen dekker de progresjonen fra grunnintuisjon
til master-utledning. Overlappet er reelt (samme modellrom: Mundell–Fleming /
åpen økonomi) men på **ulikt nivå**, og SØK3006 har to hele søyler (portefølje-
fundert valutamarked og olje/to-sektor) som SØK2009 ikke har. Denne tabellen
styrer hva SØK3006 bygger ut vs. hva den forutsetter/kryssrefererer.

| Tema | SØK2009 (bachelor, bygger ut grafisk) | SØK3006 (master, bygger ut med utledning) |
|---|---|---|
| Valutakurs, UIP, renteparitet-grunnintuisjon | **JA** — grafisk AA-DD, valutamarked som asset-market | **Forutsettes/kryssrefereres**; SØK3006 bygger real-UIP i inflasjonsstyringsnotasjon og bruker den i modell 2/6 |
| Mundell–Fleming / AA-DD grafisk, valutaregimer | **JA** — AA-DD, trilemma, fastkursforsvar (Krugman) | **Hever til MFT (Rødseth kap. 6)** — ISFX/LM utledet, porteføljefundert, fortegnsdrøfting; lenk til SØK2009 for grunnintuisjonen |
| Fleksibel inflasjonsstyring, tapsfunksjon, MP-kurve-utledning | **NEI** (bachelor-nivå har ikke eksplisitt tapsfunksjon/optimering) | **JA** — Del 2, hele søyle 1 (modell 1–3), MP-kurven *utledet* |
| Samspill penge- og finanspolitikk (to instrumenter) | **NEI** | **JA** — Del 2 (modell 3) |
| Porteføljemodell for valutamarkedet (Rødseth kap. 1), risikopremie, valutatilbud, kapitalmobilitet $\lvert f'_r\rvert$ | **NEI** (SØK2009 bruker asset-market/UIP, ikke full porteføljefundering) | **JA** — Del 3, hele søyle 2 |
| Olje/naturressurser, skjermet/konkurranseutsatt sektor, hollandsk syke (statisk + dynamisk) | **NEI** | **JA** — Del 4, hele søyle 3 (Rødseth kap. 7 + Torvik) |
| Barro-Gordon/troverdighet, valutaunion/OCA (De Grauwe) | **JA** — Del 4 (De Grauwe-søylen) | **NEI** — ikke i SØK3006-arkivet; utelates |
| Ren matematikk-drill / økonometri / mikrofundert vekstteori | **NEI** | **NEI** — SØK3004 / SØK3001 / feil tradisjon; bevisst utelatt |

**Møtepunkter (kryssrefereres, ikke gjentas):** valutakursbegrepet, udekket
renteparitet og den grafiske Mundell–Fleming-grunnintuisjonen forutsettes fra
SØK2009 og lenkes dit med markdown-lenker (`[tittel](/bok/sok2009/<chapterId>)`) i
Forkunnskaper-blokkene — SØK2009 bygger dem grafisk, SØK3006 hever dem til
master-utledning (eksplisitt tapsfunksjon/optimering, porteføljefundering,
olje/to-sektor). **Andre SOK-bøker:** SOK1002 (mikro) og SØK1011 (marked/
markedssvikt) er mikroemner uten overlapp — ingen kryssbok-lenker relevante.
SØK3004 (matematikk for masterøkonomer) leverer verktøyet (derivasjon/optimering)
men ikke innholdet; SØK3001 (økonometri) er et annet fag. Dette speiler NTNUs
masterstamme i analysens §0.

---

> **Merknad om verifiserte referanser:** Alle modellresultater, notasjon og
> frekvenser er hentet fra `EKSAMENSANALYSE.md` (som selv er destillert av 15 sett
> + 7 sensortekster + vedlegget med de ni modellene). MP-kurve-uttrykket, ISFX/LM,
> risikopremien $r=i-i^*-e^e$, Marshall–Lerner-betingelsen og langtidslikevekten
> $\lambda=H_T/H_N$ er standard fagapparat (Rødseth / Røisland–Sveen–Torvik) uten
> verkshøyde. Pensumankere: **Asbjørn Rødseth, *Open Economy Macroeconomics*
> (Cambridge UP), kap. 1/6/7**; **Røisland & Sveen / Røisland, Sveen & Torvik**
> (fleksibel inflasjonsstyring, finansiell stabilitet, samspill penge–finanspolitikk);
> **Ragnar Torvik** (naturressurser og to-sektor med endogen produktivitet). De
> eksakte artikkeltitlene/utgavene for Røisland–Sveen–Torvik og Torvik-artiklene er
> *(verifiser)* mot gjeldende emnebeskrivelse før pensumankere skrives inn i
> kapitlene; forfatternavnene og modellinnholdet er sikre. At MP-kurve-utledningen
> vises steg for steg i V2025-veiledningen, og at eksamensvedlegget med ni modeller
> legges ved fra ca. H2023, er dokumentert i analysens §7/§8.

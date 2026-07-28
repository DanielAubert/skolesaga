# Bokskjelett: FAF311 Perspektiver på funksjonshemminger og samhandling (NIH) — eksamensrettet lærebok

> **LÆRINGSLØKKE-KONTRAKT (ufravikelig, produkteier 9. juli 2026):** Ved bygging
> struktureres HVERT kapittels `content[]` som gjentatte små løkker
> **Teori → Eksempel → Oppgave** — `exercise`-blokker INLINE rett etter
> teorien/eksempelet de trener, aldri all teori øverst med oppgavene samlet
> nederst. Ingen oppgave får kreve stoff som ikke er dekket tidligere i
> kapitlet eller i eksplisitt refererte forkunnskaper (flytt teoribiten
> tidligere ved behov). Autoritativ kilde: README «Leserkrav» + arketypens
> DNA-fil (`DNA-drofting.md`). Unntak: prøve-/modellbesvarelseskapitler følger
> sin egen arketype (komplett oppgave først, løsninger i collapsibles). Kvotene
> og innholdskontraktene i dette skjelettet er uendret — løkka styrer REKKEFØLGEN.


> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE eksamensarkivet —
> alt eksamensbelegg som trengs står i dette skjelettet, destillert fra
> `EKSAMENSANALYSE.md` (5 oppgavesett + 5 sensorveiledninger: hjemmeeksamen H2022,
> skoleeksamen H2024 ordinær + utsatt V2025, skoleeksamen H2025 ordinær + utsatt
> V2026; Institutt for lærerutdanning og friluftslivsstudier, NIH; studiet i praksis
> knyttet til Beitostølen Helsesportsenter, BHSS). Alle oppgaver, case, «modellsvar»
> og eksempler i boka skal være NYSKREVNE (se §6). Pensumlitteratur refereres
> (forfatter/verk/begrep), aldri siteres i lengde.
>
> **Emnestatus (verifisert mot NIHs emneside 2026-07-11 — men `(verifiser)`
> beholdes fordi status kan endres):** FAF311 «Perspektiver på funksjonshemminger og
> samhandling» er **AKTIVT** — listet som ordinært **høst**-emne (sist H2025, med
> utsatt/kontinuasjon påfølgende vinter), **10 studiepoeng**, **4-timers individuell
> skriftlig skoleeksamen med bokstavkarakter A–F**, undervisningsspråk norsk, ingen
> nedleggelse eller etterfølger oppgitt. Emneansvarlig er per emnesiden H2025 oppgitt
> som **Niels Boysen Feddersen** *(verifiser)*; eksamensarkivet analysen bygger på ble
> forvaltet av **Kristin Vindhol Evensen** *(verifiser)*. Boka bygges IKKE rundt en
> navngitt emneansvarlig; navn nevnes ikke i bokinnholdet.
>
> **Helsenært fag — nøkternhetsregel (gjelder HELE boka):** Faget handler om
> teoretiske PERSPEKTIVER på funksjonshemming, ikke om diagnostikk eller
> treningsforskrivning. Faglige påstander om **diagnoser, funksjonsnedsettelser og
> treningsanbefalinger** skrives forsiktig, som allmenn faglig orientering, og merkes
> `(verifiser)` der `EKSAMENSANALYSE.md` ikke belegger dem. Boka skal ALDRI fremstå
> som helseråd eller behandlingsveiledning — plattform-deklarasjonen
> (`hoyskole-disclaimer.tsx`, helse-heuristikken) håndterer dette i UI, men INNHOLDET
> skal også være nøkternt: bruk «kan», «ofte», «i mange tilfeller», aldri kategoriske
> anbefalinger om hva en person med en gitt diagnose «bør» gjøre fysisk. Diagnose-/
> gruppeeksempler er ILLUSTRASJONER av perspektivbruk, ikke kliniske råd.

---

## 1. Bokens identitet

- **Kurs-id:** `nih-faf311`
- **Tittel:** *FAF311 Perspektiver på funksjonshemminger og samhandling — eksamensrettet lærebok (NIH)*
- **Level:** `'Høyskole'`
- **Institusjon (navigasjon):** Norges idrettshøgskole (NIH). Visningsnavn i
  `institusjoner.ts`: «FAF311 Perspektiver på funksjonshemminger og samhandling».
- **Arketype:** **drøfting** (`DNA-drofting.md`) — samfunnsfaglig/humanistisk
  teoriemne der eksamen er drøftingsessay uten fasit; sensor vurderer begrepspresisjon,
  navngitt pensumforankring, selvstendig drøfting og struktur. **Én dokumentert
  utvidelse** (§2 «Arketypetilpasning»): fordi dagens sett har en **vektet
  formidlingssjanger** (forklar et begrep for en 12-åring, 30 %) med *omvendte*
  vurderingskrav, får formidling et eget sjangerkapittel i eksamenstreningen. Et lite
  aktivitets-/anvendelsesinnslag (planlegging av tilpasset fysisk aktivitet) håndteres
  med **prosa-kryssreferanse** til FAF310-stoff (aktivitetsemnet) — se
  «Kryssreferanser».
- **Kapittelantall:** **18** (Del 0: 2 · temadeler 1–4: 11 · eksamenstrening Del 5: 5)
- **Estimert totaltid:** **~995 minutter (~16,6 timer)** fordelt per kapittel under
- **Quiz totalt:** **538** (krav ≥500) · **Flashcards totalt:** **514** (krav ≥500)

**Pitch:** FAF311-eksamen er blant de mest forutsigbare i hele arkivet: **4-timers
skriftlig skoleeksamen uten hjelpemidler**, med A–F-karakter. Til tross for et
formatskifte (fra film-hjemmeeksamen i 2022 til case-skoleeksamen fra 2024) er det
faglige innholdet **påfallende stabilt**, fordi emneansvaret har vært konsistent. Hvert
eneste sett kretser om **tre teoretiske perspektiver på funksjonshemming — det
medisinske, det sosiale (sosiokulturelle) og det fenomenologiske** — og om hvordan
denne forståelsen kobles til **tilpasset/tilrettelagt fysisk aktivitet (TPA)**. To
ferdigheter avgjør karakteren, og boka er bygget baklengs fra dem: **(1) å behandle de
tre perspektivene BALANSERT** (å favorisere ett trekker ned, uansett hvor godt det er
beskrevet — dette er FAF311-signaturen), og **(2) overgangen fra å REDEGJØRE for et
perspektiv (C-nivå) til å DRØFTE det selvstendig** (styrker MOT begrunnede svakheter,
kontrastert mot de andre perspektivene — det som løfter til A/B). Ryggraden er de tre
perspektivene (5/5 sett), **normalitet i lys av dem** (Grue — den mest resirkulerte
enkeltoppgaven, 4 sett), **anvendelse mot TPA** (5/5) og **tverrfaglighet/balanse** (3
sett). Fem navn skal sitte i hukommelsen uten hjelpemidler: **Grue, Tøssebro,
Shakespeare, Oliver, Toombs**. Eksamenstreningen driller drøftingssjangeren, den nye
formidlingssjangeren, feilvaksinen mot de tolv sensordokumenterte feilene, og
modellbesvarelser på de faste gjengangerne — der forskjellen ligger nøyaktig i
overgangen fra oppramsing til kontrasterende drøfting.

**Kalibreringsregler (ufravikelige):**
1. **Balansekravet styrer alt.** De tre perspektivene skal behandles som **likeverdige
   linser** — å fremstille ett som «riktigere» er den mest karakterskillende feilen.
   Bygges inn i hver drøftingsakse og hvert modellsvar.
2. **Redegjør vs. drøft er karakterskillet.** Å gjengi et perspektiv presist = C. Å
   drøfte det (styrker OG velbegrunnede svakheter, kontrastert mot minst ett annet
   perspektiv) = A/B. Modellbesvarelser MÅ markere *hvor* redegjørelse blir til drøfting.
3. **Anvendelse mot fysisk aktivitet er obligatorisk.** En ren teoridrøfting uten
   kobling til planlegging/tilpasning av aktivitet misser oppgavens kjerne. Hvert
   temakapittel har minst ett TPA-anvendt eksempel.
4. **Pensumforankring med navn selv uten hjelpemidler.** Definisjon uten avsender er
   C-stoff. Sensor godtar upresise referanser (ingen hjelpemidler), men **navn +
   omtrentlig årstall** forventes. Stabile ankere: **Grue** (normalitet;
   funksjonshemming som begrep), **Tøssebro** (hva er funksjonshemming), **Shakespeare
   (2014)**, **Oliver (1993)**, **Toombs (2001)**. Se «Utgave-sensitivitet».
5. **Formidlingssjangeren snur kravene.** I formidlingsoppgaven trekker akademisk språk
   og kildehenvisninger NED — poenget er å forklare enkelt og forståelig. Boka må lære
   leseren å kode om mellom sjangrene i samme sett.

**Utgave-sensitivitet (pensumforankring):** Begrepene (de tre perspektivene,
normalitet, impairment/disability, den levde kroppen, interseksjonalitet) er stabile;
enkelte **forfatterkoblinger og utgaveårstall** er utgave-sensitive og merkes
`(verifiser)` i pensumkart-blokkene: **Tøssebro *Hva er funksjonshemming?*** (2010/2021 —
utgaveår), **Shakespeare *Disability Rights and Wrongs (Revisited)*** (2006/2014),
**Grue *Normalitet*** (2016), **Grue** (2004, funksjonshemming som ord), **Oliver**
(1993), **Toombs** (2001), **Evensen** (2017). Suppleringskilder (Lagerkvist &
Lindgren 2012; Bergkvist et al. 2020) omtales som «bør kjenne til», ikke som primære
ankere i modellsvar. FAF310-kildene (Helle 2017, Gjessing 2018, Nyquist/Moser/Jahnsen
2016, Morisbak & Standal 2006, Baksøbjerget et al. 2017) brukes KUN i anvendelses-/
aktivitetsdelen (Del 4) og merkes «FAF310-pensum `(verifiser)`».

### Kryssreferanser (prosa, IKKE lenker — søskenbøker ikke bygget ennå)

FAF311 (forståelse) og **FAF310** (aktivitet/gjennomføring) er to sider av samme
ettårige påbygningsstudium; case-/planleggingsoppgaver forutsetter FAF310-pensum.
FAF310 har **ingen bygget bok/skjelett** ennå — derfor omtales stoffet i **prosa**
(«aktivitetsemnet FAF310», «planleggingslitteraturen (Helle, Gjessing m.fl.)»), ALDRI
med markdown-lenke (ingen døde lenker). Ved faglig overlapp mot **NIH-fysiologiklyngen**
(kroppslig/aktivitetsfaglig grunnlag: humanfysiologi, treningsfysiologi, treningslære,
funksjonell anatomi) nevnes disse på **prosanivå** som forkunnskapsbro der en case
krever kroppslig forståelse — men FAF311 er et **teori-/forståelsesemne**, så
fysiologisk dybde LÅNES ikke inn; kryssreferansen er en pekepinn, ikke en
dybdegjentakelse. Når søskenbøkene bygges, kan lenker legges til i en senere revisjon.

---

## 2. Makrostruktur

Følger DNA-drøfting-malen: **Del 0** (eksamenskart + drøftings- OG formidlingshåndverk)
→ **temadeler etter analysens temafrekvens, tyngst først** → **eksamenstrening**
(sjangerkapitler + feilvaksine + modellbesvarelser). Omfang per del følger
gjenganger-score fra analysens §2/§7: de tre perspektivene og anvendelsen mot TPA er de
tyngste (5/5), normalitet er nest tyngst (4), tverrfaglighet/kritikk (3).

| Del | Tittel | Kap. | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart, drøftings- og formidlingshåndverk | 2 | perfekt (meta) | Formen (4 t skoleeksamen uten hjelpemidler, A–F, vektet formidling+case fra 2025), sjangerkatalogen, temafrekvensene, sensorkravene, kildeforbeholdet og de fem navnene som må sitte, må etableres FØR fagstoffet. Drøftingshåndverket (redegjør→drøft + balansekravet + formidling) er unikt kritisk fordi «balanse» og «drøft, ikke rams opp» er sensors gjennomgående skiller. |
| 1 | De tre perspektivene på funksjonshemming | 4 | perfekt (5/5) | Emnets fundament — kreves i praksis i hvert eneste sett. Ett landskaps-/begrepskapittel + ett kapittel per perspektiv (medisinsk/sosialt/fenomenologisk). Flest kapitler = «må beherskes perfekt» nr. 1. |
| 2 | Normalitet og annerledeshet | 2 | perfekt (4/5) | Den mest resirkulerte ENKELToppgaven (Grue; ordrett gjenganger i 3 sett). Ett normalitetskapittel (norm vs. oppløsning av norm) + ett om annerledeshet/stigma/**interseksjonalitet** (nytt 2025). |
| 3 | Tverrfaglighet, balanse og perspektivkritikk | 2 | perfekt→kunne (3) | Balansekravet formalisert + kritikken av det medisinske perspektivet (Oliver, Shakespeare) og den sosiale modellens fallgruve (underkjenner smerte/sorg — Shakespeare). Direkte karakterskillende. |
| 4 | Anvendelse mot tilpasset fysisk aktivitet (TPA) | 3 | perfekt (5/5) | Emnets eksistensberettigelse og dagens tunge 70 %-oppgave. Fra teori til TPA + case-/diagnosegruppe-verktøykasse + aktivitetsplanlegging (FAF310-kryssreferanse i prosa). |
| 5 | Eksamenstrening | 5 | perfekt (meta) | Sjangeroversikt + feilvaksine, formidlingssjangeren (ny 2025, omvendte krav), og tre modellbesvarelser (A + kommentert C + midtnivå) på de faste gjengangerne: normalitet, case/diagnosegruppe, posisjonering+kontrastteoretiker. |

Rasjonale: de tre perspektivene (Del 1) og TPA-anvendelsen (Del 4) får flest kapitler
fordi de er 5/5-temaene som avgjør karakteren; normalitet (Del 2) får to fordi den er
den mest resirkulerte enkeltoppgaven; tverrfaglighet/kritikk (Del 3) får to;
eksamenstreningen speiler dagens todelte sett (vektet formidling + case) med egne
sjanger- og modellkapitler.

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart, drøftings- og formidlingshåndverk |
| 1 | De tre perspektivene på funksjonshemming |
| 2 | Normalitet og annerledeshet |
| 3 | Tverrfaglighet, balanse og perspektivkritikk |
| 4 | Anvendelse mot tilpasset fysisk aktivitet |
| 5 | Eksamenstrening |

### Sjangerkoder (fra analysen §3 — brukes i «Eksamensbelegg» under)

Alle koder skrives FULLT UT ved første bruk i boka (README-leserkrav):

- **PDR** = **perspektivredegjørelse + drøfting** (emnets arketype): beskriv ett (eller
  alle tre) perspektiv → drøft styrker/svakheter → anvend på fysisk aktivitet. Finnes i
  alle sett.
- **NORM** = **normalitetsoppgaven**: hvordan forstås *normalitet* i lys av de tre
  perspektivene? Ta utgangspunkt i Grue. Den mest resirkulerte enkeltoppgaven (3 sett,
  nesten ordrett).
- **CASE** = **case-/diagnosegruppeoppgaven** (dagens tunge langsvar, 70 %): velg en
  diagnosegruppe fra praksis → analyser gjennom de tre perspektivene → planlegg/tilpass
  fysisk aktivitet (FAF310-pensum).
- **FORM** = **formidlingsoppgaven** (ny 2025, 30 %): forklar «hva er en
  funksjonshemming?» / «interseksjonalitet» for en 12-åring, maks 250 ord, ingen
  kildekrav. OMVENDTE vurderingskrav (akademisk språk trekker ned).
- **POS** = **egen faglig posisjonering**: plasser deg innenfor ett perspektiv, begrunn
  valget som fagperson i TPA-feltet. Tøssebro skal alltid inngå.
- **KONTR** = **kontrasterende teoretikeroppgave**: ta utgangspunkt i Shakespeare (2014)
  og Oliver (1993), diskuter fordeler/ulemper ved å gjøre funksjonshemming til et
  individuelt medisinsk problem; avslutt med tverrfaglighet.

### Sensorkrav (fra analysen §4 — etableres i Del 0, refereres i hvert kapittel)

1. **Drøfter selvstendig og analytisk** — «klart resonnerende og argumenterende» er
   terskelen for bedre enn C. Å ramse opp/beskrive gir maks C.
2. **Behandler alle tre perspektivene BALANSERT** og setter dem OPP MOT hverandre —
   ingen fremstilles som «riktigere». FAF311-signaturen.
3. **Forankrer i kjernelitteratur løpende** (forfatter + omtrentlig årstall). Sidetall
   kreves ikke; på skoleeksamen godtas upresise referanser, men navnene forventes.
4. **Anvender teorien sikkert mot TPA** — knytter forståelsen til konkret planlegging/
   tilpasning av aktivitet, gjerne via FAF310-pensum.
5. **Identifiserer svakheter, ikke bare styrker** ved hvert perspektiv (f.eks. at det
   sosiale perspektivet kan underkjenne kroppslig smerte — Shakespeares nyanse).
6. **Riktig obligatorisk anker per oppgave:** Grue på NORM; Tøssebro på POS; Shakespeare
   + Oliver på KONTR.
7. **I CASE: hovedvekt på diskusjon/drøfting**, ikke beskrivelse — disponer ordbudsjettet
   slik at analysen dominerer; anonymiser praksis-case.
8. **I FORM: enkelt, forståelig språk** («et språk alle kan forstå» = topp) — akademisk
   sjargong og kilder trekker NED. Vurderes langs to akser: hvor uttømmende emnet dekkes
   + hvor forståelig språket er.

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under; glosses ved FØRSTE bruk i HVERT kapittel)

- **#1** Ramser opp de tre perspektivene uten å se dem opp mot hverandre (vanligste
  E-feil på NORM). Perspektivene skal *kontrasteres*, ikke listes.
- **#2** Lar ett perspektiv dominere / fremstille det som «riktigst» (bryter
  balansekravet — kritisk i tverrfaglighet og CASE).
- **#3** Glemmer det obligatoriske ankeret sensor forventer (Grue på NORM; Tøssebro på
  POS; Shakespeare+Oliver på KONTR).
- **#4** Stopper på beskrivelse — mangler drøfting (grundig gjengivelse, tynn analyse →
  maks C).
- **#5** Behandler det sosiale perspektivet ukritisk — overser at det kan underkjenne
  smerte, sorg og kroppslig erfaring (Shakespeares nyanse).
- **#6** Kobler ikke teorien til fysisk aktivitet (misser emnets kjerne).
- **#7** Upresis begrepsbruk — særlig **funksjonsnedsettelse vs. funksjonshemming**,
  **impairment vs. disability**, normalitet vs. annerledeshet.
- **#8** I FORM: bruker akademisk språk og kilder (trekker ned — motsatt krav).
- **#9** Dårlig ordbudsjett i CASE — for mye beskrivelse, for lite drøfting av de tunge
  leddene.
- **#10** Trekker ikke inn FAF310-pensum i planleggingsdelen når det er relevant.
- **#11** Glemmer Tøssebro i POS (sensor krever ham eksplisitt).
- **#12** Anonymiserer ikke case fra praksis (eksplisitt krav).

### Arketypetilpasning (dokumenterte hybridvalg og avvik)

1. **Ren drøftingsarketype med to lånte elementer.** Grunnstammen er `DNA-drofting.md`
   (begrep↔forfatter-lager, drøftingsakser, modellbesvarelser på karakternivåer). To
   fagspesifikke utvidelser: **(a)** den nye **formidlingssjangeren (FORM)** med
   *omvendte* vurderingskrav får et eget sjangerkapittel (5.2) og eksplisitt
   omkodings-trening — dette avviker fra normal drøftingslogikk og krever egen
   behandling; **(b)** den obligatoriske **anvendelsen mot fysisk aktivitet** gir en egen
   temadel (Del 4) med case-verktøykasse og FAF310-**prosakryssreferanse** (ikke
   lenker).
2. **Balansekravet som gjennomgående drøftingsakse.** Der DNA-drøfting trener «styrker
   mot svakheter», legger FAF311 til en ekstra akse: **balanse mellom tre likeverdige
   perspektiver**. Hvert temakapittel og hvert modellsvar bygger denne inn — å favorisere
   ett perspektiv er den mest karakterskillende feilen (#2).
3. **Flashcards for begrep↔forfatter og perspektiv↔synsmåte.** Fordi eksamen er uten
   hjelpemidler og premierer navngitt forankring, er faget flashcard-egnet:
   **begrep↔forfatter**-kort (normalitet↔Grue; levd kropp↔Toombs; impairment/disability↔
   Oliver; funksjonshemming↔Tøssebro), **perspektiv↔hva det ser/overser**-kort, og
   **begrepsskille**-kort (funksjonsnedsettelse vs. funksjonshemming; enantiomer... nei —
   normalitet vs. annerledeshet). **Quiz-profilen** driller nabobegrep-distraktorer
   (medisinsk/sosialt/fenomenologisk; impairment/disability; norm vs. oppløsning av norm;
   redegjøre vs. drøfte).
4. **Nøkternhet i det helsenære.** Diagnose-/gruppeeksempler er ILLUSTRASJONER av
   perspektivbruk, aldri kliniske råd (se identitetsseksjonens nøkternhetsregel).
   Treningsanbefalinger skrives som «kan/ofte», merkes `(verifiser)` der analysen ikke
   belegger dem, og rammes alltid som perspektiv-anvendelse.
5. **Erfarings-bro (DNA-drøfting, studentpanel bølge 5).** Mange lesere har egen
   yrkes-/livserfaring fra helse/omsorg/idrett. Boka viser (i 4.2 og sjangerkapitlet)
   hvordan erfaringen KONVERTERES til pensumforankret argument: start i tenkerens begrep
   → bruk erfaringen som ILLUSTRASJON → koble tilbake til drøftingsaksen. Å bare advare
   mot pensum-løs synsing (#4-nær) uten å vise konverteringen skyver bort nettopp de
   leserne som har mest materiale.
6. **Ingen oppdiktede referanser.** Kun forfattere/verk fra begrepskontraktene under
   (analysens §6). Utgave-sensitive årstall/koblinger beholder `(verifiser)`.

### Kapittel-DNA (temakapittel) — obligatorisk blokk-rekkefølge

Per DNA-drøfting, i læringsløkker (definition→example→exercise per begrep):

1. `tip` **Eksamensvinkel** — frekvens/vekt, hvilke sjangre (PDR/NORM/CASE/FORM/POS/
   KONTR) temaet inngår i, hva sensor ser etter. Fylles fra Eksamensbelegg — forfatteren
   finner IKKE på frekvenstall.
2. `text` **Forkunnskaper** — kapitler i boka det bygger på (markdown-lenker til
   EKSISTERENDE FAF311-kapitler); FAF310/fysiologi-broer nevnes i PROSA uten lenke.
3. `text` **Temaet i fagets landskap** — hvilket problem perspektivet/begrepet svarer på;
   åpne med et **hverdagsanker** (en konkret situasjon: en rullestolbruker møter en
   trapp; en svaksynt vil sykle) FØR begrepsapparatet.
4. `definition` **Kjernebegreper** — hvert begrep presist definert OG forankret (hvem
   bruker det slik). Toppnivå med `title` — flashcard-kilden. (Begrepsbank-notis der stor.)
5. `text` **Posisjoner og spenninger** — der pensum rommer uenighet (f.eks. sosial modell
   vs. Shakespeares kritikk): fremstill posisjonene ærlig — råstoffet for drøftingen.
6. `example` **Anvendelse** ×1–3 — perspektivet brukt på en konkret (anonymisert) case,
   koblet til fysisk aktivitet, skrevet slik en god besvarelse ville gjort det, med
   eksplisitte pensumreferanser.
7. `warning` **Typiske feil** — feilkodene (#1–#12) som gjelder temaet, glosset ved
   første bruk i kapitlet.
8. `exercise` ×4–8 — 2–3 begreps-/kontrollspørsmål (med selvdiagnose), 1–2 kortdrøftinger
   (disposisjonsforslag som løsning), 1–2 eksamenslike essayoppgaver (løsning =
   momentliste + disposisjon + binær selvrettingsrubrikk). Alle med `hints`; INLINE etter
   teoribiten de trener.
9. `collapsible` **Pensumkart for kapitlet** — forfatter → verk → begreper/poenger de
   «eier» (flashcard-råstoff; åpner med begrepsbank-notis).

### Kapittel-DNA (sjanger-/modellbesvarelseskapittel) — Del 5

Sjangerkapittel: `tip` Eksamensvinkel → `text` Oppskrift (trinn + tidsbudsjett) →
`example` gjennomskrevet besvarelse med margkommentarer → `exercise` ×3–6 med
momentliste + binær selvrettingsrubrikk. Modellbesvarelse: nyskrevet oppgave →
`collapsible` **A-besvarelse** (margnotater «her: begrep+forankring», «her: motargument
— løfter til A»; pausepunkt-markører) → `collapsible` **kommentert C-besvarelse** (ÆRLIG
en C: korrekt men flat, gap-notater) → `collapsible` **autentisk B-/midtnivå** (ekte
studentspråk, litt rotete men god) → `tip` Sensorblikket (momentliste + vekting).

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = frekvens (av 5 sett) + sjangerkoder + prioritet
> (perfekt/kunne/kjenne/meta). **Begrepskontrakt** = begreper som SKAL defineres, med
> pensumforankring (flashcard-kilden). **Drøftingsakser** = spenningene kapitlet ruster
> studenten til å drøfte. **Case-forslag** = anvendelses-illustrasjoner (anonymiserte,
> nøkterne). **Kvote** = quiz/flashcards. Frekvenstall stemmer med belegg-listen.

### Del 0 — Eksamenskart, drøftings- og formidlingshåndverk *(prioritet: PERFEKT (meta))*

#### Kapittel 0.1: Eksamenskartet — slik testes FAF311
**id:** `nih-faf311-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart (meta).
- **Description:** Eksamensformen (4-timers skriftlig skoleeksamen uten hjelpemidler,
  A–F; formatskiftet fra film-hjemmeeksamen 2022 til case-skoleeksamen fra 2024;
  vekting + formidlingsoppgave fra 2025), de tre perspektivene som ryggrad, sjanger-
  katalogen (PDR/NORM/CASE/FORM/POS/KONTR), temafrekvensene, sensorkravene, de fem
  navnene som må sitte, og kildeforbeholdet — verktøyet som styrer hele boka. Inneholder
  Del 0-pakken: «Slik leser du denne boka»-boks (karakterskala A–F, sjangerkodene
  skrevet ut, feilregisteret), «Lite tid?»-boks (hurtigrute 3–5 dager + LESEtid-forbehold
  ×1,5 for håndskrift), deltidsrute (10–12 uker ~8 t/uke), «lese mye, skrive lite»-boks,
  og kildenote for frekvens-empirien.
- **Eksamensbelegg:** Metakapittel (hele arkivet, 5 sett). Formidler: (a) **formen** — 4 t
  skoleeksamen uten hjelpemidler, A–F, norsk; hjemmeeksamen med film + fri hjelpemiddel-
  bruk (2022) er FASET UT; vekting (Oppg. 1 = 30 % formidling, Oppg. 2 = 70 % case) og
  formidlingssjanger innført 2025; (b) **ryggraden** — de tre perspektivene (5/5),
  anvendelse mot TPA (5/5), normalitet (4), tverrfaglighet (3), CASE (3); (c)
  **temafrekvenstabellen** (§2/analysen §2); (d) **sensorkravene** (§2); (e) **de fem
  navnene** — Grue, Tøssebro, Shakespeare, Oliver, Toombs; (f) **kildeforbeholdet** — 5
  sett + 5 sensorveiledninger, konsistent emneansvar forklarer stabiliteten, oppgaver
  resirkuleres nesten ordrett (gamle sett er direkte øvingsrelevante); (g) at
  emneansvarlig kan ha endret seg `(verifiser)` men innholdet er stabilt. Prioritet:
  perfekt (meta).
- **Innholdskontrakt:** Sjangerkatalogen PDR/NORM/CASE/FORM/POS/KONTR som studentens
  sjekkliste med frekvens per sjanger; prognosen for neste sett (nesten sikkert: en
  perspektiv-/normalitetsoppgave og en CASE med aktivitetsplanlegging, ofte en FORM som
  Oppg. 1). Gjengangeroppgavene nevnes som drillmål: NORM (Grue) er ordrett gjenganger i
  3 sett; «to av tre»-settet (2024 ordinær) går igjen nesten uendret i 2026 utsatt. Ingen
  forkunnskapsblokk (metakapittel).
- **Oppgavesjangre:** Ingen fagoppgaver; 3–4 refleksjonsoppgaver av typen «gitt en 4-timers
  eksamen med vektet formidling (30 %) + case (70 %) — sett opp tidsbudsjett og
  rekkefølge» og «avgjør av en oppgavetekst hvilken sjanger (PDR/NORM/CASE/FORM/POS/KONTR)
  den er».
- **Typiske feil:** Metafeilene: tro at man kan slå opp (ingen hjelpemidler — navnene må
  sitte, #3); tro at 2022-filmformatet fortsatt gjelder; bruke akademisk språk i FORM
  (#8); ramse opp i stedet for å drøfte (#1/#4).
- **Kvote:** 18 quiz / 16 flashcards (formfakta, de tre perspektivene, sjangerkodene,
  temafrekvens, sensorkravene, de fem navnene, kildeforbeholdet).

#### Kapittel 0.2: Drøftingshåndverket — redegjør, drøft, balansér og formidle
**id:** `nih-faf311-0-2` · **number:** 0.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-faf311-0-1`

- **Kapitteltype:** håndverkskapittel (meta — drøftingsstruktur + formidling).
- **Description:** De tre ferdighetene som gir uttelling på hver eneste oppgave: å
  **redegjøre presist** (definisjon + forankring), å **drøfte selvstendig** (styrker MOT
  begrunnede svakheter, kontrastert), og å **balansere** de tre perspektivene som
  likeverdige — pluss den motsatte ferdigheten i **formidling** (forklar enkelt, uten
  sjargong). Etablerer drøftingsstrukturen resten av boka bruker.
- **Eksamensbelegg:** Gjennomgående (sensorkrav 1, 2, 4, 5, 8 på tvers av alle sjangre).
  Prioritet: perfekt (meta).
- **Forkunnskaper:** kap. [0.1](/nih-faf311/nih-faf311-0-1).
- **Begrepskontrakt (flashcard-kilde):** **redegjørelse** (presis, pensumforankret
  gjengivelse — C-nivået) vs. **drøfting** (å veie styrker MOT svakheter, sette posisjoner
  opp mot hverandre, konkludere begrunnet — A/B-nivået); **balansekravet** (tre
  likeverdige linser); **kontrastering** (bruke ett perspektiv til å belyse et annets
  blindsone); **anvendelse** (koble teori til konkret TPA); **formidling** (omsette
  fagstoff til klarspråk uten kilder — omvendte krav). Drøftingsstrukturen S: standpunkt →
  begrepsavklaring med forankring → strukturert drøfting med motargument fra navngitt
  tenker → svar på motargumentet → konklusjon som svarer på spørsmålet.
- **Drøftingsakser (håndverk):** hvor går grensen redegjørelse↔drøfting (vis samme avsnitt
  i C- og A-form); når er et forbehold et verktøy og når er det garnityr
  (konklusjonsvariasjon — minst én skarp, veid konklusjon vises som toppnivå).
- **Case-forslag:** en «vippe-case» der to perspektivvalg begge er forsvarlige — begge
  lesninger skrives ut, merket «(omstridt — begge forsvarlige)».
- **Typiske feil:** #1 oppramsing uten kontrastering; #4 stopper på redegjørelse; #8
  akademisk språk i formidling.
- **Innholdskontrakt (verktøy):** **binær selvrettingsrubrikk for drøfting** (0/1, uten
  skjønn): ☐ standpunkt i første avsnitt? ☐ minst én eksplisitt kobling («som vist over»)?
  ☐ innvending fra navngitt pensumtenker? ☐ svart på innvendingen? ☐ alle tre perspektiver
  balansert? ☐ koblet til fysisk aktivitet? ☐ forbehold/konklusjon som svarer? — refereres
  i alle prøvefasiter. **«Hvem eier hva»-kort** (collapsible): tenker → begrep → poeng
  over bokas gjennomgående ankere (Grue/Tøssebro/Shakespeare/Oliver/Toombs).
- **Kvote:** 18 quiz / 18 flashcards (redegjør vs. drøft, balansekravet, drøftingsstruktur,
  formidlingens omvendte krav, selvrettingsrubrikken).

**Prøve-kvote Del 0:** ingen egen prøve (håndverket testes i eksamenstreningen, Del 5).

### Del 1 — De tre perspektivene på funksjonshemming *(prioritet: PERFEKT (5/5))*

#### Kapittel 1.1: Funksjonshemming som fenomen — begrepsapparatet og de tre linsene
**id:** `nih-faf311-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-faf311-0-2`

- **Kapitteltype:** tema (fundament/perfekt).
- **Description:** Landskapet: hva de tre perspektivene er, det avgjørende begrepsskillet
  **funksjonsnedsettelse vs. funksjonshemming** (impairment vs. disability), og hvorfor
  emnet bygger på tre linser framfor én — kartet resten av Del 1 fyller ut.
- **Eksamensbelegg:** De tre perspektivene i 5/5 sett (2022, 2024 ord., 2025 utsatt, 2025
  ord., 2026 utsatt); begrepsskillet testes implisitt i hver oppgave (#7). Sjangre: PDR,
  byggekloss i NORM/CASE/POS/KONTR. Prioritet: **perfekt** (§7 pkt. 1).
- **Forkunnskaper:** kap. [0.2](/nih-faf311/nih-faf311-0-2). (Kroppslig grunnlag for
  case senere nevnes i prosa — ingen lenke, søskenbøker ikke bygget.)
- **Begrepskontrakt (flashcard-kilde):** **Tøssebro** *Hva er funksjonshemming?*
  (2010/2021 `(verifiser)`): **funksjonsnedsettelse/impairment** (tap/skade i kroppslig
  eller mental funksjon — egenskap ved kroppen) vs. **funksjonshemming/disability**
  (gapet mellom individets forutsetninger og omgivelsenes krav — relasjonelt); **gap-/
  relasjonsmodellen** (norsk politikkforståelse); **de tre perspektivene** som analytiske
  linser (ikke fasiter): **medisinsk** (i individet), **sosialt** (i barrierer/samfunn),
  **fenomenologisk** (i den levde erfaringen); at perspektivene **ser og overser** ulikt.
- **Drøftingsakser:** hvorfor tre linser og ikke én (ingen fanger hele bildet alene) —
  premisset for hele emnet og for balansekravet; er gap-modellen et fjerde perspektiv
  eller en syntese? (bør kjenne til).
- **Case-forslag:** samme person (en ung voksen med en synsnedsettelse som vil være
  fysisk aktiv) sett gjennom alle tre linser i miniatyr — viser hva hver linse fanger.
  Nøktern, anonymisert.
- **Typiske feil:** #7 blander funksjonsnedsettelse og funksjonshemming (begrepene brukes
  om hverandre); #1 lister linsene uten å vise at de ser ulikt.
- **Kvote:** 32 quiz / 32 flashcards (impairment/disability, gap-modellen, de tre linsene,
  begrep↔Tøssebro, hva hver linse ser/overser).

#### Kapittel 1.2: Det medisinske perspektivet
**id:** `nih-faf311-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-faf311-1-1`

- **Kapitteltype:** tema (perfekt).
- **Description:** Funksjonshemming som en egenskap ved individet — diagnose, avvik fra en
  biologisk/medisinsk norm, behandling/rehabilitering — perspektivets styrker (presisjon,
  behandling) og svakheter (individualisering, blir «nesten enerådende»), og hva det
  betyr for tilpasset fysisk aktivitet.
- **Eksamensbelegg:** Ett av de tre perspektivene (5/5, PDR); «det medisinske som (nesten)
  enerådende — kritikk av» i 2025 utsatt + implisitt i alle drøftinger (2 eksplisitt).
  Sjangre: PDR, NORM (opererer med norm), KONTR, POS (medisinsk valg). Prioritet: **perfekt**.
- **Forkunnskaper:** kap. [1.1](/nih-faf311/nih-faf311-1-1).
- **Begrepskontrakt (flashcard-kilde):** **Tøssebro**; **Grue** (2004 `(verifiser)`):
  funksjonshemming som **egenskap ved individet**; **diagnose** og **funksjonsnedsettelse**
  som utgangspunkt; **avvik fra en biologisk/medisinsk norm**; **behandling, habilitering/
  rehabilitering**; **individualisering av problemet** (løsningen legges hos individet).
  Suppl.: Lagerkvist & Lindgren (2012), Bergkvist et al. (2020) `(verifiser)` — barn/unge/
  diagnosegrupper, «bør kjenne til».
- **Drøftingsakser:** styrke (presis kunnskap, behandling, tilrettelegging på individnivå)
  MOT svakhet (gjør funksjonshemming til et individuelt problem, overser barrierer og
  levd erfaring — springbrett til det sosiale og fenomenologiske); er kritikken av det
  «enerådende» medisinske perspektivet rettferdig, eller trengs medisinsk kunnskap i TPA?
- **Case-forslag:** hvordan et rent medisinsk blikk planlegger aktivitet ut fra diagnose/
  kontraindikasjoner — og hva det MISSER (motivasjon, mestring, omgivelser). Nøktern:
  treningspoeng skrives «kan/ofte», merkes `(verifiser)` der ubelagt.
- **Typiske feil:** #2 fremstille medisinsk som «riktigst» fordi det er presist; #5-nær:
  glemme at perspektivet også kan overse den levde kroppen; #4 beskrive uten å drøfte.
- **Kvote:** 32 quiz / 32 flashcards (kjennetegn, individualisering, norm, styrker/
  svakheter-par, begrep↔Tøssebro/Grue, TPA-konsekvens).

#### Kapittel 1.3: Det sosiale (sosiokulturelle) perspektivet
**id:** `nih-faf311-1-3` · **number:** 1.3 · **estimatedMinutes:** 60 · **prerequisites:** `nih-faf311-1-2`

- **Kapitteltype:** tema (perfekt).
- **Description:** Funksjonshemming som **skapt av barrierer og samfunnets organisering**,
  ikke av kroppen — skillet impairment/disability, den «medisinske modellen» som kritisk
  motpol, og perspektivets egen fallgruve (kan underkjenne kropp, smerte og sorg —
  Shakespeares nyanse). Det mest siterte perspektivet i drøftinger.
- **Eksamensbelegg:** Ett av de tre (5/5, PDR); kjernen i KONTR (Oliver+Shakespeare, 2025
  utsatt); fallgruven («underkjenner smerte/sorg») eksplisitt i 2025 utsatt (1) men en
  viktig nyanse. Sjangre: PDR, NORM (opererer med norm), KONTR, POS. Prioritet: **perfekt**.
- **Forkunnskaper:** kap. [1.2](/nih-faf311/nih-faf311-1-2).
- **Begrepskontrakt (flashcard-kilde):** **Oliver** (1993 `(verifiser)`, *What's so
  wonderful about walking?*): skillet **impairment (funksjonsnedsettelse) vs. disability
  (funksjonshemming)**; funksjonshemming som **skapt av barrierer** (fysiske, holdnings-
  messige, organisatoriske), ikke av kroppen; den **sosiale modellen** vs. den medisinske.
  **Shakespeare** (2006/2014 `(verifiser)`, *Disability Rights and Wrongs (Revisited)*):
  kritikk av den **«sterke» sosiale modellen** — den risikerer å **underkjenne kropp,
  smerte, sorg og kroppslig erfaring**; behov for en mer nyansert posisjon. Grue (2004).
- **Drøftingsakser:** styrke (flytter ansvaret fra individet til samfunnet; frigjørende,
  politisk kraftfullt) MOT svakhet (den sterke modellen kan gjøre kroppen «usynlig» og
  underkjenne smerte — Shakespeare); sosial vs. medisinsk modell (kontrasten som bærer
  KONTR); hvor mye kan/skal barrierefjerning gjøre for et fysisk aktivt liv?
- **Case-forslag:** samme aktive person som i 1.1/1.2, nå sett sosialt — hva som må endres
  i OMGIVELSENE (anlegg, holdninger, tilbud) for at hun skal kunne være aktiv; og hva et
  rent sosialt blikk kan overse (den kroppslige erfaringen av å streve).
- **Typiske feil:** #5 behandle det sosiale perspektivet ukritisk (glemme Shakespeares
  nyanse); #7 blande impairment/disability; #2 la det sosiale «vinne» over de andre.
- **Kvote:** 36 quiz / 36 flashcards (impairment/disability, barrierer, sosial vs.
  medisinsk modell, Shakespeares fallgruve, begrep↔Oliver/Shakespeare, TPA-konsekvens).

#### Kapittel 1.4: Det fenomenologiske perspektivet
**id:** `nih-faf311-1-4` · **number:** 1.4 · **estimatedMinutes:** 55 · **prerequisites:** `nih-faf311-1-3`

- **Kapitteltype:** tema (perfekt).
- **Description:** Funksjonshemming som **erfaring innenfra** — den levde kroppen (den
  erfarte, ikke den objektiverte), kroppslig endring og tap, og hvordan dette perspektivet
  **utfordrer selve normalitetsbegrepet** (det tar utgangspunkt i den enkeltes livsverden,
  ikke i en ytre standard). Kreves når kandidaten velger det fenomenologiske perspektivet.
- **Eksamensbelegg:** Ett av de tre (5/5, PDR); fenomenologisk kroppserfaring i 2022,
  2024 ord., 2025 ord. + alle sett med fenomenologisk innslag (4 nedslag). Sjangre: PDR,
  NORM (oppløser normen — nøkkelinnsikten), POS. Prioritet: **perfekt**.
- **Forkunnskaper:** kap. [1.3](/nih-faf311/nih-faf311-1-3).
- **Begrepskontrakt (flashcard-kilde):** **Toombs** (2001 `(verifiser)`, *Reflections on
  bodily change*): **den levde kroppen** (den erfarte kroppen, ikke den medisinsk
  objektiverte); **kroppslig endring og tap** som erfaring; **funksjonshemming innenfra**
  (førstepersonsperspektivet); **livsverden**; at perspektivet **oppløser
  normalitetsbegrepet** (ingen ytre standard — bare den enkeltes erfaring). Evensen (2017)
  `(verifiser)`.
- **Drøftingsakser:** styrke (fanger den subjektive, kroppslige erfaringen de to andre
  perspektivene overser; setter personen i sentrum) MOT svakhet (vanskeligere å omsette
  til politikk/systemtiltak enn det sosiale; kan bli individ-nært på en annen måte enn det
  medisinske); hvorfor «oppløser normen» er nøkkelen i NORM-oppgaven.
- **Case-forslag:** hvordan aktiviteten oppleves innenfra for personen (mestring, tap,
  kroppslig glede/motstand) — det TPA-planleggeren må ta på alvor ved siden av diagnose og
  barrierer. Nøktern, anonymisert.
- **Typiske feil:** #1 nevne fenomenologisk uten å vise at det oppløser normen (mister
  NORM-poenget); #7 forveksle den levde kroppen med «psykologisk opplevelse» løsrevet fra
  kropp; #4 beskrive Toombs uten å drøfte.
- **Kvote:** 34 quiz / 34 flashcards (levd kropp, livsverden, oppløser normen, kroppslig
  endring, begrep↔Toombs, TPA-konsekvens).

**Prøve-kvote Del 1:** 4 prøver à ~25 min (kan trygt deles over flere kvelder — én prøve
per økt): **1.A** begrepsskillet funksjonsnedsettelse/funksjonshemming + de tre linsene ·
**1.B** medisinsk perspektiv (kjennetegn + styrker/svakheter + TPA) · **1.C** sosialt +
fenomenologisk (kontrast, impairment/disability, levd kropp, Shakespeares fallgruve) ·
**1.D** samlet PDR-prøve på eksamensnivå (velg ett perspektiv → redegjør → drøft → anvend).
Flervalg med stokkede fasit-bokstaver; hver prøve har selvdiagnose-sjekkliste.

### Del 2 — Normalitet og annerledeshet *(prioritet: PERFEKT (4/5) — mest resirkulerte enkeltoppgave)*

#### Kapittel 2.1: Normalitet i lys av de tre perspektivene (Grue)
**id:** `nih-faf311-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-faf311-1-4`

- **Kapitteltype:** tema (perfekt — den mest resirkulerte enkeltoppgaven).
- **Description:** Normalitetsbegrepet forstått ulikt i de tre perspektivene, forankret i
  Grue: **det medisinske og det sosiale perspektivet opererer med en NORM**, mens **det
  fenomenologiske UTFORDRER/OPPLØSER normalitetsbegrepet**. Den obligatoriske innsikten
  sensor ser etter, med modellsvarslogikk (A setter perspektivene opp mot hverandre; E
  ramser opp og glemmer Grue).
- **Eksamensbelegg:** NORM-oppgaven i 4 sett (2024 ord. oppg.1, 2025 utsatt oppg.1, 2025
  ord. oppg.1b-relatert, 2026 utsatt oppg.1); ordrett gjenganger i 3 av dem. Sensorkrav 6
  (Grue obligatorisk). Sjangre: NORM (kjernen), byggekloss i PDR/CASE. Prioritet:
  **perfekt** (§7 pkt. 2 — mest resirkulerte enkeltoppgave).
- **Forkunnskaper:** kap. [1.1](/nih-faf311/nih-faf311-1-1)–[1.4](/nih-faf311/nih-faf311-1-4)
  (de tre perspektivene må sitte før normalitet kan settes i lys av dem).
- **Begrepskontrakt (flashcard-kilde):** **Grue** *Normalitet* (2016 `(verifiser)`):
  **normalitet som konstruksjon** (kulturelt/historisk satt, ikke naturgitt); det
  **medisinske perspektivet opererer med en biologisk/statistisk norm** (avvik =
  funksjonsnedsettelse); det **sosiale perspektivet opererer med en samfunnsnorm**
  (samfunnet er bygd for «det normale»); det **fenomenologiske oppløser normen** (ingen
  ytre standard — den enkeltes erfaring); **annerledeshet** som relasjonelt begrep. Grue
  er obligatorisk anker (#3). Tøssebro som støtte.
- **Drøftingsakser:** hovedaksen — «norm vs. oppløsning av norm»: sett de tre perspektivene
  OPP MOT hverandre langs normalitetsdimensjonen (A-svaret); hva forskjellene betyr for
  TPA (skal aktiviteten «normalisere» eller møte den enkelte der hun er?).
- **Case-forslag:** samme spørsmål stilt til de tre perspektivene: «er denne personens
  kropp/aktivitet normal?» — medisinsk (avvik fra norm), sosialt (samfunnet definerer
  normen), fenomenologisk (spørsmålet gir ikke mening — bare hennes erfaring finnes).
- **Typiske feil:** #1 ramse opp perspektivene uten å relatere dem (vanligste E-feil på
  NORM); #3 glemme Grue; #7 upresis bruk av normalitet/annerledeshet.
- **Kvote:** 36 quiz / 34 flashcards (normalitet som konstruksjon, norm i medisinsk/
  sosialt, oppløsning i fenomenologisk, begrep↔Grue, NORM-strukturen, TPA-konsekvens).

#### Kapittel 2.2: Annerledeshet, stigma og interseksjonalitet
**id:** `nih-faf311-2-2` · **number:** 2.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-faf311-2-1`

- **Kapitteltype:** tema (kunne→perfekt for interseksjonalitet-nyansen).
- **Description:** Annerledeshet og stigma som følgebegreper til normalitet, og
  **interseksjonalitet** — sammensatte identitetsmarkører og **komplekse, overlappende
  former for undertrykkelse** (man kan stå høyt i ett hierarki og lavt i et annet, og
  posisjonene påvirker hverandre). Nytt i 2025; signaliserer at emnet utvider seg mot
  kritisk funksjonshemmingsteori.
- **Eksamensbelegg:** Interseksjonalitet i 2025 ord. (oppg. 1b, som FORM-tema for
  12-åring) — nytt, 1 nedslag men signalgivende; annerledeshet/stigma gjennomgående i
  normalitetsoppgavene. Sjangre: FORM (interseksjonalitet forklart enkelt), byggekloss i
  NORM/CASE. Prioritet: **kunne→kjenne** (§7 pkt. 10 — «bør kjenne til, nytt/nyansert»),
  men interseksjonalitet får solid dekning fordi den kan komme igjen.
- **Forkunnskaper:** kap. [2.1](/nih-faf311/nih-faf311-2-1).
- **Begrepskontrakt (flashcard-kilde):** **annerledeshet** (relasjonell — man er
  annerledes i forhold til en norm); **stigma** (sosialt nedvurderende merkelapp);
  **interseksjonalitet** (Grue m.fl. / kritisk funksjonshemmingsteori `(verifiser)`):
  **sammensatte identitetsmarkører** (kjønn, klasse, etnisitet, funksjonsevne) og
  **overlappende former for undertrykkelse** — IKKE bare en liste av markører, men at de
  **påvirker hverandre** (posisjon i hierarki avhengig av vinkel); **ignoranse** som
  motstykke til forståelse av sammensatt undertrykkelse.
- **Drøftingsakser:** interseksjonalitet som mer enn «flere merkelapper» (den sammensatte,
  gjensidig påvirkende undertrykkelsen — nøkkelen sensor ser etter); annerledeshet/stigma
  som hinder for deltakelse i fysisk aktivitet; hva dette betyr for inkludering i TPA.
- **Case-forslag:** en person hvis posisjon i idrettsfellesskapet formes av flere markører
  samtidig (f.eks. funksjonsevne + kjønn + minoritetsbakgrunn) — vis hvordan en enkelt
  linse blir for smal. Nøktern, anonymisert.
- **Typiske feil:** #7 redusere interseksjonalitet til «summen av kategorier» (mister den
  sammensatte undertrykkelsen); #8 (når temaet møter FORM) forklare interseksjonalitet med
  akademisk sjargong til en 12-åring.
- **Kvote:** 30 quiz / 30 flashcards (annerledeshet, stigma, interseksjonalitet som
  sammensatt undertrykkelse, posisjon avhengig av vinkel, kobling til FORM).

**Prøve-kvote Del 2:** 4 prøver à ~25 min (kan trygt deles — én prøve per økt): **2.A**
normalitet i de tre perspektivene (norm vs. oppløsning; Grue obligatorisk) · **2.B** full
NORM-oppgave på eksamensnivå (A/C/E-momentliste) · **2.C** annerledeshet/stigma + kobling
til deltakelse · **2.D** interseksjonalitet (sammensatt undertrykkelse + forklar-enkelt-
variant). Stokkede fasit-bokstaver; selvdiagnose-sjekkliste per prøve.

### Del 3 — Tverrfaglighet, balanse og perspektivkritikk *(prioritet: PERFEKT→KUNNE (3))*

#### Kapittel 3.1: Tverrfaglighet og balanse mellom perspektivene
**id:** `nih-faf311-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-faf311-2-2`

- **Kapitteltype:** tema (perfekt — karakterskillende ferdighet).
- **Description:** At tilpasset fysisk aktivitet **ikke kan forstås i ett perspektiv
  alene** — de tre perspektivene som komplementære, likeverdige linser, og samhandling
  mellom faggrupper. Formaliserer balansekravet fra 0.2 som eget drøftingstema.
- **Eksamensbelegg:** Tverrfaglighet i 3 sett (2024 ord. oppg.3, 2025 utsatt oppg.2, 2026
  utsatt oppg.3). Sensorkrav 2 (balanse) — direkte karakterskillende. Sjangre: PDR
  (drøftingsledd), CASE (balansert analyse), KONTR (avslutningsrefleksjon). Prioritet:
  **perfekt** (§7 pkt. 4).
- **Forkunnskaper:** kap. [1.1](/nih-faf311/nih-faf311-1-1)–[1.4](/nih-faf311/nih-faf311-1-4)
  (alle tre perspektiver), [2.1](/nih-faf311/nih-faf311-2-1).
- **Begrepskontrakt (flashcard-kilde):** **tverrfaglighet** (at TPA krever flere linser og
  faggrupper i samhandling); **komplementaritet** (perspektivene utfyller hverandre, ingen
  er komplett alene); **balanse** (behandle de tre som likeverdige — å favorisere ett
  trekker ned); **samhandling** (faggrupper rundt personen). Shakespeare (2014), Evensen
  `(verifiser)`.
- **Drøftingsakser:** hovedaksen — hvorfor ett perspektiv aldri er nok (hver linse ser noe
  de andre overser); når kan ett perspektiv likevel veie tyngre i en konkret situasjon
  (skarp, veid konklusjon som toppnivå — konklusjonsvariasjon); tverrfaglighet som ideal
  vs. praktisk utfordring.
- **Case-forslag:** samme case fra Del 1 nå analysert BALANSERT gjennom alle tre samtidig
  — vis hvordan et tverrfaglig blikk gir en rikere aktivitetsplan enn én linse alene.
- **Typiske feil:** #2 la ett perspektiv dominere / fremstille det som «riktigst»
  (kjernebruddet); #4 liste de tre uten å vise hvordan de utfyller hverandre.
- **Kvote:** 34 quiz / 34 flashcards (tverrfaglighet, komplementaritet, balansekravet,
  samhandling, når ett perspektiv veier tyngre, begrep↔Shakespeare/Evensen).

#### Kapittel 3.2: Kritikken av det medisinske perspektivet og den sosiale modellens fallgruve
**id:** `nih-faf311-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-faf311-3-1`

- **Kapitteltype:** tema (kunne — viktig nyanse).
- **Description:** KONTR-oppgavens kjerne: Oliver og Shakespeare er begge kritiske til at
  det medisinske perspektivet gjøres **(nesten) enerådende** (funksjonshemming redusert til
  et individuelt medisinsk problem), MEN et **rent sosialt perspektiv risikerer å
  underkjenne smerte og sorg** (Shakespeares poeng). A-svaret diskuterer perspektivene opp
  mot hverandre; C-svaret nevner smerte/sorg uten å knytte det til spennet medisinsk↔sosialt.
- **Eksamensbelegg:** KONTR i 2025 utsatt (oppg. 2, Shakespeare 2014 + Oliver 1993); det
  medisinske «enerådende» + den sosiale fallgruven implisitt i flere sett (2 eksplisitt).
  Sensorkrav 5. Sjangre: KONTR (kjernen), byggekloss i PDR/CASE. Prioritet: **kunne**
  (§7 pkt. 8).
- **Forkunnskaper:** kap. [1.2](/nih-faf311/nih-faf311-1-2),
  [1.3](/nih-faf311/nih-faf311-1-3), [3.1](/nih-faf311/nih-faf311-3-1).
- **Begrepskontrakt (flashcard-kilde):** **Oliver** (1993), **Shakespeare** (2014):
  funksjonshemming som **individuelt medisinsk problem** (det de kritiserer); den
  medisinske modellens **nesten enerådende posisjon**; den **sosiale modellens fallgruve**
  (underkjenner kropp, smerte, sorg — Shakespeare); behovet for en **nyansert
  mellomposisjon** og tverrfaglighet. Obligatoriske ankere Oliver+Shakespeare (#3).
- **Drøftingsakser:** hovedaksen — begge kritiske til medisinsk enerådighet, men Shakespeare
  advarer mot å gå for langt sosialt (kroppen forsvinner); hvordan lande en balansert
  posisjon (verktøy, ikke garnityr); knytt smerte/sorg eksplisitt til spennet medisinsk↔
  sosialt (det som skiller A fra C her).
- **Case-forslag:** en person med en smertefull, progredierende tilstand — vis hvordan et
  rent sosialt blikk (bare barrierefjerning) kan overse den kroppslige smerten, og hvordan
  et tverrfaglig blikk fanger begge. Nøktern; smerte-/prognosepåstander merkes `(verifiser)`.
- **Typiske feil:** #5 behandle det sosiale perspektivet ukritisk; #2 la enten medisinsk
  eller sosialt «vinne»; #3 glemme Oliver eller Shakespeare i KONTR.
- **Kvote:** 36 quiz / 36 flashcards (medisinsk enerådighet, sosial fallgruve, smerte/sorg-
  nyansen, begrep↔Oliver/Shakespeare, KONTR-strukturen).

**Prøve-kvote Del 3:** 4 prøver à ~25 min (kan trygt deles — én prøve per økt): **3.A**
tverrfaglighet + balansekravet (hvorfor ett perspektiv ikke er nok) · **3.B** balansert
analyse av en case gjennom tre likeverdige linser · **3.C** kritikken av det medisinske
(Oliver+Shakespeare) · **3.D** full KONTR-oppgave på eksamensnivå (medisinsk enerådighet +
sosial fallgruve + tverrfaglighet). Stokkede fasit-bokstaver; selvdiagnose-sjekkliste.

### Del 4 — Anvendelse mot tilpasset fysisk aktivitet (TPA) *(prioritet: PERFEKT (5/5))*

#### Kapittel 4.1: Fra teori til tilpasset fysisk aktivitet
**id:** `nih-faf311-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-faf311-3-2`

- **Kapitteltype:** tema (perfekt — emnets eksistensberettigelse).
- **Description:** Hvordan hvert av de tre perspektivene får ulike konsekvenser for
  **planlegging og tilpasning av fysisk aktivitet**: medisinsk (forutsetninger/
  kontraindikasjoner), sosialt (barrierefjerning, inkludering i fellesskap),
  fenomenologisk (mestring, kroppslig erfaring, personens egne mål). Broen mellom
  forståelse (FAF311) og gjennomføring (FAF310 — prosakryssreferanse).
- **Eksamensbelegg:** Anvendelse mot TPA i 5/5 sett (2022, 2024 ord. oppg.2–3, 2025 ord.
  oppg.2, 2026 utsatt). Sensorkrav 4. Sjangre: PDR (anvendelsesledd), CASE. Prioritet:
  **perfekt** (§7 pkt. 3).
- **Forkunnskaper:** kap. [1.1](/nih-faf311/nih-faf311-1-1)–[1.4](/nih-faf311/nih-faf311-1-4),
  [3.1](/nih-faf311/nih-faf311-3-1). (Aktivitetsemnet FAF310 og kroppslig grunnlag
  nevnes i PROSA — ingen lenke, søskenbøker ikke bygget.)
- **Begrepskontrakt (flashcard-kilde):** **tilpasset/tilrettelagt fysisk aktivitet (TPA)**
  (aktivitet tilpasset personens forutsetninger); **tilrettelegging** vs. **tilpasning**;
  **deltakelse og inkludering** i fellesskap (sosialt); **mestring** og **kroppslig
  erfaring** som mål (fenomenologisk); **aktivitetsanalyse** (bryte ned en aktivitet i
  krav for å tilpasse den) — FAF310-pensum (Helle 2017, Gjessing 2018, Nyquist/Moser/
  Jahnsen 2016, Morisbak & Standal 2006 `(verifiser)`), omtales i prosa.
- **Drøftingsakser:** hva hvert perspektiv bidrar med i en aktivitetsplan (og hva det
  overser); hvorfor TPA trenger alle tre (medisinsk sikkerhet + sosial inkludering +
  fenomenologisk mening); teori uten anvendelse = misset kjerne (#6).
- **Case-forslag:** samme aktive person — vis en aktivitetsplan der alle tre perspektiver
  bidrar. Nøktern: konkrete øvelser/intensiteter skrives «kan/ofte», merkes `(verifiser)`;
  ingen kategoriske «bør trene X».
- **Typiske feil:** #6 koble ikke teorien til fysisk aktivitet; #10 trekk ikke inn
  FAF310-pensum der relevant; #2 la ett perspektiv styre hele planen.
- **Kvote:** 34 quiz / 34 flashcards (TPA, tilrettelegging/tilpasning, deltakelse,
  mestring, aktivitetsanalyse, hva hvert perspektiv bidrar med).

#### Kapittel 4.2: Case- og diagnosegruppe-verktøykassen
**id:** `nih-faf311-4-2` · **number:** 4.2 · **estimatedMinutes:** 60 · **prerequisites:** `nih-faf311-4-1`

- **Kapitteltype:** tema/verktøy (perfekt — dagens tunge 70 %-oppgave).
- **Description:** Malen for CASE-oppgaven: velg en diagnosegruppe fra praksis → begrunn
  valget → analyser gruppen **balansert** gjennom de tre perspektivene → drøft hvordan
  forståelsen brukes til å planlegge/tilpasse aktivitet. Med erfarings-bro
  (yrkeserfaring → pensumforankret argument) og anonymiseringskrav.
- **Eksamensbelegg:** CASE i 3 sett (2024 ord. oppg.3, 2025 ord. oppg.2 [70 %], 2026 utsatt
  oppg.3) — dagens tunge langsvar. Sensorkrav 7 (drøfting > beskrivelse; anonymiser).
  Sjangre: CASE (kjernen). Prioritet: **perfekt** (§7 pkt. 6).
- **Forkunnskaper:** kap. [4.1](/nih-faf311/nih-faf311-4-1), [3.1](/nih-faf311/nih-faf311-3-1),
  [1.1](/nih-faf311/nih-faf311-1-1)–[1.4](/nih-faf311/nih-faf311-1-4).
- **Begrepskontrakt (flashcard-kilde):** **CASE-malen** (begrunn valg → tre-perspektiv-
  analyse balansert → aktivitetsplanlegging → drøft); **diagnosegruppe** som analyseenhet
  (nøktern: en gruppe med felles trekk, ikke en klinisk kategori man forskriver for);
  **anonymisering** (obligatorisk ved praksis-case); **ordbudsjett** (analyse/drøfting skal
  dominere over beskrivelse); **erfarings-bro** (start i tenkerens begrep → erfaring som
  illustrasjon → koble tilbake). Pensum for forståelsen (Tøssebro, Grue, Shakespeare,
  Toombs) + FAF310 for planleggingen `(verifiser)` (prosa).
- **Drøftingsakser:** hvordan holde de tre perspektivene likeverdige gjennom hele casen
  (#2); hvordan disponere ordbudsjettet så drøfting dominerer (#9); en «vippe-case» der to
  perspektivvektinger begge er forsvarlige (begge skrives ut, «(omstridt)»).
- **Case-forslag:** en generisk, anonymisert diagnosegruppe-mal (uten reell person) — vis
  hele verktøykassen anvendt. All klinisk detalj holdes generell og merkes `(verifiser)`;
  ingen behandlings-/treningsforskrivning.
- **Typiske feil:** #9 for mye beskrivelse, for lite drøfting; #2 ett perspektiv dominerer;
  #12 anonymiserer ikke; #10 glemmer aktivitetsplanleggings-pensumet.
- **Kvote:** 36 quiz / 36 flashcards (CASE-malen, diagnosegruppe som enhet, anonymisering,
  ordbudsjett, erfarings-bro, balansert tre-perspektiv-analyse).

#### Kapittel 4.3: Aktivitetsplanlegging — å tilpasse en økt
**id:** `nih-faf311-4-3` · **number:** 4.3 · **estimatedMinutes:** 50 · **prerequisites:** `nih-faf311-4-2`

- **Kapitteltype:** tema/anvendelse (kunne — FAF310-kryssfeltet).
- **Description:** Fra perspektivanalyse til en konkret **tilpasset aktivitetsøkt** — å
  omsette forståelsen til deltakelse og inkludering i praksis, med aktivitetsanalyse som
  redskap. FAF310-pensum omtales i prosa (planleggingslitteraturen); FAF311s bidrag er å
  begrunne tilpasningene teoretisk.
- **Eksamensbelegg:** Aktivitetsplanleggingsleddet i CASE og PDR (2025 ord. oppg.2, 2026
  utsatt); der FAF310-pensum etterspørres (#10). Sjangre: CASE (planleggingsledd), PDR.
  Prioritet: **kunne** (§7 pkt. 6 — planleggingsdelen).
- **Forkunnskaper:** kap. [4.2](/nih-faf311/nih-faf311-4-2), [4.1](/nih-faf311/nih-faf311-4-1).
  (FAF310-planleggingslitteratur nevnes i PROSA — ingen lenke.)
- **Begrepskontrakt (flashcard-kilde):** **aktivitetsanalyse** (bryte ned aktivitetens krav
  for å tilpasse den); **tilpasningsgrep** (regler, utstyr, miljø, rolle); **deltakelse på
  egne premisser**; hvordan de tre perspektivene BEGRUNNER tilpasningene (medisinsk:
  sikkerhet/forutsetninger; sosialt: fjerne barrierer, inkludere; fenomenologisk: mening/
  mestring). FAF310-koblingen omtales i prosa, merkes `(verifiser)`.
- **Drøftingsakser:** hvordan begrunne tilpasningsvalg teoretisk (ikke bare «gjøre det
  enklere»); balanse mellom sikkerhet (medisinsk) og myndiggjøring (fenomenologisk/sosialt);
  når «tilpasning» risikerer å stigmatisere (kobling til 2.2).
- **Case-forslag:** en generisk aktivitetsøkt tilpasset en (anonymisert) gruppe, der hvert
  tilpasningsgrep begrunnes med et perspektiv. Nøktern: øvelser/doser «kan/ofte»,
  `(verifiser)`; ingen forskrivning.
- **Typiske feil:** #6 planlegge uten teoretisk begrunnelse; #10 hoppe over FAF310-koblingen;
  tilpasning uten å tenke på stigma (#7-nær).
- **Kvote:** 28 quiz / 28 flashcards (aktivitetsanalyse, tilpasningsgrep, deltakelse på egne
  premisser, perspektivbegrunnede tilpasninger, FAF310-koblingen).

**Prøve-kvote Del 4:** 4 prøver à ~30 min (kan trygt deles — én prøve per økt): **4.A** fra
teori til TPA (hva hvert perspektiv bidrar med) · **4.B** CASE-verktøykassen (velg gruppe →
balansert analyse → planlegg; anonymisér) · **4.C** aktivitetsplanlegging (perspektiv-
begrunnede tilpasningsgrep) · **4.D** full CASE-oppgave på eksamensnivå (70 %-format,
drøfting dominerer). Stokkede fasit-bokstaver; selvdiagnose-sjekkliste per prøve.

### Del 5 — Eksamenstrening *(prioritet: PERFEKT (meta))*

#### Kapittel 5.1: Sjangeroversikt og feilvaksine
**id:** `nih-faf311-5-1` · **number:** 5.1 · **estimatedMinutes:** 50 · **prerequisites:** `nih-faf311-4-3`

- **Kapitteltype:** sjanger-/feilvaksinekapittel (meta).
- **Description:** Ett samlet oppslag over alle sjangrene (PDR/NORM/CASE/FORM/POS/KONTR) med
  én-linjes oppskrift + tidsbudsjett + vanligste feil, og en feilvaksine som driller de
  tolv sensordokumenterte feilene (#1–#12) — særlig «rams opp vs. kontraster» (#1) og
  «favoriser ett perspektiv vs. balanse» (#2).
- **Eksamensbelegg:** Metakapittel (alle sjangre, alle 5 sett). Prioritet: perfekt (meta).
- **Forkunnskaper:** kap. [0.2](/nih-faf311/nih-faf311-0-2) og alle temadeler
  ([Del 1](/nih-faf311/nih-faf311-1-1)–[Del 4](/nih-faf311/nih-faf311-4-3)).
- **Innholdskontrakt:** **Samlet oppslagskort per bok** (collapsible, ren tabell): sjanger
  → én-linjes oppskrift → tidsbudsjett → vanligste feil (det printbare «hvem eier hva»-/
  sjangerkortet). **Feilvaksinen:** 12 korte «finn fellen»-øvelser (én per feilkode) med
  VARIERT fasit (aldri «alle felle»); hver viser et svakt svar → hva som mangler → det
  rettede grepet. Binær selvrettingsrubrikk gjentatt.
- **Oppgavesjangre:** 6 «diagnostiser sjangeren»-oppgaver (gitt en oppgavetekst → hvilken
  sjanger + oppskrift) + 12 feilvaksine-øvelser.
- **Typiske feil:** hele registeret #1–#12 (glosset ved bruk).
- **Kvote:** 30 quiz / 26 flashcards (sjangeroppskriftene, tidsbudsjett, alle feilkodene,
  finn-fellen-mønstre).

#### Kapittel 5.2: Formidlingssjangeren — forklar for en 12-åring
**id:** `nih-faf311-5-2` · **number:** 5.2 · **estimatedMinutes:** 45 · **prerequisites:** `nih-faf311-5-1`

- **Kapitteltype:** sjangerkapittel (perfekt for FORM — ny 2025, omvendte krav).
- **Description:** FORM-sjangeren: forklar «hva er en funksjonshemming?» eller
  «interseksjonalitet» for barn på ca. 12 år, maks 250 ord, ingen kildekrav. Den
  OMVENDTE vurderingslogikken (akademisk språk og kilder trekker NED) med 250-ords maler,
  og trening i å KODE OM mellom drøftings- og formidlingsspråk i samme sett.
- **Eksamensbelegg:** FORM i 2025 ord. (oppg. 1, 30 %). Sensorkrav 8 (enkelt/forståelig
  språk; to akser: uttømmende + forståelig). Sjangre: FORM. Prioritet: **perfekt** for
  sjangeren (ny, vektet 30 %; §7 pkt. 9).
- **Forkunnskaper:** kap. [1.1](/nih-faf311/nih-faf311-1-1) (funksjonshemming),
  [2.2](/nih-faf311/nih-faf311-2-2) (interseksjonalitet), [5.1](/nih-faf311/nih-faf311-5-1).
- **Innholdskontrakt:** **Oppskrift** — velg få, klare begreper; gjør tydelig hvilket
  perspektiv du legger til grunn (uten å si «perspektiv»); bruk hverdagsbilder; hold deg
  under 250 ord; INGEN kilder. **To gjennomskrevne 250-ords maler** (én for «hva er en
  funksjonshemming?», én for «interseksjonalitet» som sammensatt undertrykkelse forklart
  enkelt), med margnotat om hvorfor det virker. **Omkodings-øvelse:** ta et akademisk
  avsnitt → skriv det om for en 12-åring (og motsatt).
- **Oppgavesjangre:** 4–6 FORM-oppgaver (forklar et begrep enkelt, maks 250 ord) med fasit
  = momentliste (uttømmende + forståelig) + eksempeltekst; ingen kildekrav.
- **Typiske feil:** #8 akademisk språk/kilder (trekker ned); for lite dekkende (mister
  kjernen); forklarer interseksjonalitet som «flere merkelapper» (#7).
- **Kvote:** 26 quiz / 22 flashcards (FORM-oppskriften, omvendte krav, de to aksene,
  omkoding, hva som trekker ned).

#### Kapittel 5.3: Modellbesvarelse — normalitetsoppgaven (NORM)
**id:** `nih-faf311-5-3` · **number:** 5.3 · **estimatedMinutes:** 50 · **prerequisites:** `nih-faf311-5-2`

- **Kapitteltype:** modellbesvarelse (perfekt — den mest resirkulerte oppgaven).
- **Description:** En nyskrevet NORM-oppgave med **A-besvarelse** (setter de tre
  perspektivene opp mot hverandre langs norm-aksen, Grue-forankret, kobler til TPA),
  **kommentert C-besvarelse** (ramser opp, glemmer å relatere, tynn Grue) og **autentisk
  midtnivå-/B-besvarelse** (god men litt rotete). Viser nøyaktig hvor oppramsing blir til
  kontrasterende drøfting.
- **Eksamensbelegg:** NORM (4 sett, ordrett gjenganger i 3). Sensorkrav 1, 2, 6.
  Prioritet: perfekt (meta).
- **Forkunnskaper:** kap. [2.1](/nih-faf311/nih-faf311-2-1),
  [5.1](/nih-faf311/nih-faf311-5-1).
- **Innholdskontrakt:** Nyskrevet oppgave (endre formulering fra arkivet); A-besvarelse med
  margnotater («her: Grue-forankring», «her: setter medisinsk MOT fenomenologisk — løfter
  til A», «her: TPA-kobling») og pausepunkt-markører; C-besvarelse ÆRLIG merket (korrekt,
  men oppramsende, glemmer Grue-poenget); midtnivå-besvarelse med notat om de 2–3 grepene
  opp til A; `tip` Sensorblikket (momentliste + vekting) + binær selvrettingsrubrikk.
- **Oppgavesjangre:** 2–3 varianter av NORM med momentliste-fasit + rubrikk.
- **Typiske feil:** #1 oppramsing; #3 glemme Grue; #4 stoppe på beskrivelse.
- **Kvote:** 26 quiz / 22 flashcards (NORM-strukturen, A vs. C-skillet, Grue-forankring,
  norm-aksen, momentliste).

#### Kapittel 5.4: Modellbesvarelse — case/diagnosegruppe (CASE)
**id:** `nih-faf311-5-4` · **number:** 5.4 · **estimatedMinutes:** 55 · **prerequisites:** `nih-faf311-5-3`

- **Kapitteltype:** modellbesvarelse (perfekt — dagens tunge 70 %).
- **Description:** En nyskrevet CASE-oppgave (velg diagnosegruppe → balansert
  tre-perspektiv-analyse → planlegg aktivitet) med **A-besvarelse** (balansert, drøfting
  dominerer, FAF310-koblet i prosa, anonymisert), **kommentert C-besvarelse** (for mye
  beskrivelse, ett perspektiv dominerer) og **midtnivå-besvarelse**. Med SKARP, veid
  konklusjon i minst én modell (konklusjonsvariasjon).
- **Eksamensbelegg:** CASE (3 sett; 70 % i 2025 ord.). Sensorkrav 2, 4, 7. Prioritet:
  perfekt (meta).
- **Forkunnskaper:** kap. [4.2](/nih-faf311/nih-faf311-4-2),
  [4.3](/nih-faf311/nih-faf311-4-3), [3.1](/nih-faf311/nih-faf311-3-1).
- **Innholdskontrakt:** Nyskrevet, anonymisert CASE-oppgave; A-besvarelse med margnotater
  («her: balanse mellom tre linser», «her: drøfting > beskrivelse», «her: FAF310-forankret
  tilpasning», «her: skarp veid konklusjon») + pausepunkt-markører; C-besvarelse ÆRLIG
  merket (beskrivende, ubalansert); midtnivå-besvarelse med grepene opp til A; `tip`
  Sensorblikket + binær selvrettingsrubrikk. Nøktern: kliniske/trenings-detaljer generelle,
  `(verifiser)`.
- **Oppgavesjangre:** 2–3 CASE-varianter med momentliste-fasit + rubrikk; én «kald»
  variant uten hint (momentliste-only) for topplesere.
- **Typiske feil:** #9 beskrivelse > drøfting; #2 ubalanse; #12 anonymisering; #10 glemme
  FAF310-koblingen.
- **Kvote:** 26 quiz / 22 flashcards (CASE-strukturen, balanse, ordbudsjett, FAF310-
  kobling, skarp konklusjon, momentliste).

#### Kapittel 5.5: Modellbesvarelse — posisjonering (POS) og kontrastteoretiker (KONTR)
**id:** `nih-faf311-5-5` · **number:** 5.5 · **estimatedMinutes:** 50 · **prerequisites:** `nih-faf311-5-4`

- **Kapitteltype:** modellbesvarelse (kunne — to sjangre samlet).
- **Description:** To nyskrevne oppgaver: en **POS** (plasser deg i ett perspektiv, begrunn
  som fagperson, Tøssebro obligatorisk) og en **KONTR** (Oliver+Shakespeare, medisinsk
  enerådighet vs. sosial fallgruve, avslutt med tverrfaglighet), hver med A-besvarelse
  (dybde framfor bredde, fagbegreper fra valgt perspektiv) + kommentert C + Sensorblikket.
  Viser at POS belønner dybde og at KONTR belønner å diskutere perspektivene opp mot
  hverandre.
- **Eksamensbelegg:** POS i 3 sett (2022 refleksjon, 2024 ord. oppg.2, 2026 utsatt oppg.2);
  KONTR i 2025 utsatt. Sensorkrav 3, 5, 6 (Tøssebro i POS; Oliver+Shakespeare i KONTR).
  Prioritet: kunne (meta).
- **Forkunnskaper:** kap. [1.2](/nih-faf311/nih-faf311-1-2)–[1.4](/nih-faf311/nih-faf311-1-4),
  [3.2](/nih-faf311/nih-faf311-3-2), [5.1](/nih-faf311/nih-faf311-5-1).
- **Innholdskontrakt:** To nyskrevne oppgaver med A + kommentert C + Sensorblikket +
  rubrikk. POS-modellen viser Tøssebro-forankring og dybde (#11); KONTR-modellen viser at
  begge tenkere er kritiske til medisinsk enerådighet + Shakespeares smerte/sorg-nyanse
  (#5), med en skarp, veid avslutning om tverrfaglighet.
- **Oppgavesjangre:** 2 POS-varianter + 2 KONTR-varianter med momentliste-fasit + rubrikk.
- **Typiske feil:** #11 glemme Tøssebro i POS; #3 glemme Oliver/Shakespeare i KONTR; #5
  ukritisk sosialt; #2 favorisere ett perspektiv.
- **Kvote:** 26 quiz / 22 flashcards (POS-krav Tøssebro/dybde, KONTR-strukturen, medisinsk
  enerådighet, sosial fallgruve, tverrfaglig avslutning).

**Prøve-kvote Del 5:** 4 øvingssett/generalprøver à ~30 min (kan trygt deles — fordel over
flere økter, f.eks. tre søndager; aldri stablet i siste uke): **5.A** blandet sjanger-
diagnose + feilvaksine · **5.B** FORM (to 250-ords formidlinger) · **5.C** NORM + POS på
tid · **5.D** full generalprøve i dagens format (vektet FORM 30 % + CASE 70 %). Stokkede
fasit-bokstaver; hver med binær selvrettingsrubrikk + selvdiagnose-sjekkliste.

---

## 4. Kvotesammendrag og summeringskontroll

Per-kapittel-kvotene summeres og kontrollregnes FØR totalene (kravene: ≥500 quiz, ≥500
flashcards — begge gulv oppfylt med margin).

| Kap. | Quiz | Flashcards |
|---|---|---|
| 0.1 | 18 | 16 |
| 0.2 | 18 | 18 |
| 1.1 | 32 | 32 |
| 1.2 | 32 | 32 |
| 1.3 | 36 | 36 |
| 1.4 | 34 | 34 |
| 2.1 | 36 | 34 |
| 2.2 | 30 | 30 |
| 3.1 | 34 | 34 |
| 3.2 | 36 | 36 |
| 4.1 | 34 | 34 |
| 4.2 | 36 | 36 |
| 4.3 | 28 | 28 |
| 5.1 | 30 | 26 |
| 5.2 | 26 | 22 |
| 5.3 | 26 | 22 |
| 5.4 | 26 | 22 |
| 5.5 | 26 | 22 |

**Delsummer (kontrollregnet):**
- Del 0 (0.1–0.2): quiz 18+18 = **36** · flashcards 16+18 = **34**
- Del 1 (1.1–1.4): quiz 32+32+36+34 = **134** · flashcards 32+32+36+34 = **134**
- Del 2 (2.1–2.2): quiz 36+30 = **66** · flashcards 34+30 = **64**
- Del 3 (3.1–3.2): quiz 34+36 = **70** · flashcards 34+36 = **70**
- Del 4 (4.1–4.3): quiz 34+36+28 = **98** · flashcards 34+36+28 = **98**
- Del 5 (5.1–5.5): quiz 30+26+26+26+26 = **134** · flashcards 26+22+22+22+22 = **114**

**Totalsum (kontrollregnet fra delsummene):**
- Quiz: 36+134+66+70+98+134 = **538** (krav ≥500 ✔, margin +38)
- Flashcards: 34+134+64+70+98+114 = **514** (krav ≥500 ✔, margin +14)

**Prøver:** 4 per temadel × 4 temadeler (Del 1–4) = **16 temaprøver** + 4 generalprøver
(Del 5) = **20 prøver totalt**. Del 0 har ingen egen prøve (håndverket testes i Del 5).
Kravet «≥4 prøver per tema» er oppfylt for hver av de fire temadelene.

**Estimert totaltid (kontrollregnet):** 40+55 + 55+55+60+55 + 55+50 + 55+55 + 55+60+50 +
50+45+50+55+50 = **995 min ≈ 16,6 timer** (kjernestoff; lesetid, jf. Del 0-notis ×1,5 for
håndskrift ved øvingseksamen).

---

## 5. Studieguide-disposisjon

Boka ER studieguiden (drøftingsarketypen): Del 0 gir eksamenskart + håndverk, Del 1–4
dekker alle sentrale temaer med forklaringer/eksempler/sammenhenger og drøftingsakser,
Del 5 gir sjanger-, formidlings- og modellbesvarelsestrening. Kravet «utfyllende og
dekkende studieguide» oppfylles av de gjennomgående forklaringene, hverdagsankrene,
case-eksemplene, pensumkartene per kapittel og det samlede oppslagskortet (5.1). Del 0s
«Lite tid?»-, deltidsrute-, «lese mye, skrive lite»- og kildenote-bokser gir lese-/
øvingsplaner (hurtigrute 3–5 dager, fulltidsplan, 10–12-ukers deltidsrute ~8 t/uke).

---

## 6. Byggerekkefølge og verifikasjon

Bygg Del 0 → 1 → 2 → 3 → 4 → 5 (faglig avhengighet: de tre perspektivene i Del 1 er
forutsetning for normalitet, tverrfaglighet, TPA og all eksamenstrening). Per kapittel
gjelder DNA-drøfting-blokkstrukturen i læringsløkker (tip Eksamensvinkel → text
Forkunnskaper → text landskap m/hverdagsanker → definition kjernebegreper → text
posisjoner/spenninger → example anvendelse ×1–3 → warning typiske feil → exercise ×4–8
INLINE → collapsible pensumkart; sjanger-/modellkapitler etter sine DNA-oppsett).
Eksamensvinkel- og Typiske feil-blokkene fylles med belegget og feilkodene fra dette
skjelettet — forfatteren skal IKKE finne på frekvenstall.

### Verifikasjonssjekkliste (kjøres FØR ferdigmelding)

- [ ] **JSON-validering:** alle nye `src/lib/data/chapters/nih-faf311-*.json` parser med
      `json.load`/`JSON.parse` (én uescapet anførsel har tidligere blokkert prebuild).
      `npm run build` grønn — vis output.
- [ ] **Metadata-konsistens:** alle 18 kapittel-id-er i course-oppføringen har eksisterende
      content-fil; `number` er del-basert; prerequisites peker på eksisterende id-er;
      `sectionNames` satt for alle 6 deler; narrativ-id-er registrert slik at toggle rendrer
      (verifiser med prod-server + curl at narrativ-ruter gir 200).
- [ ] **Pensumreferanser EKTE:** kun forfattere/verk fra dette skjelettets begrepskontrakter
      (Tøssebro, Grue, Oliver, Shakespeare, Toombs, Evensen; suppl. Lagerkvist & Lindgren,
      Bergkvist et al.; FAF310: Helle, Gjessing, Nyquist/Moser/Jahnsen, Morisbak & Standal,
      Baksøbjerget et al.). ALDRI oppdiktede referanser eller påfunnede sidetall.
      Utgave-sensitive årstall/koblinger beholder `(verifiser)`.
- [ ] **Balanse + drøfting:** hvert temakapittel og modellsvar behandler de tre perspektivene
      likeverdig (#2); modellbesvarelsene markerer HVOR redegjørelse blir til drøfting og har
      A + ærlig kommentert C + midtnivå; minst én modell konkluderer skarpt (konklusjonsvar.).
- [ ] **FORM-sjangeren:** 5.2 trener de omvendte kravene eksplisitt (akademisk språk trekker
      ned); ingen kryssreferanse til FAF310/fysiologi er en LENKE (kun prosa — søskenbøker
      ikke bygget).
- [ ] **Nøkternhet (helsenært):** ingen kategoriske trenings-/behandlingsråd; diagnose-/
      gruppeeksempler er perspektiv-illustrasjoner, «kan/ofte», merket `(verifiser)` der
      ubelagt; case anonymisert. Plattformens helse-heuristikk i `hoyskole-disclaimer.tsx`
      treffer emnet (utvid ved behov).
- [ ] **Kvotesum:** quiz ≥538 og flashcards ≥514 fordelt per kapittel som angitt (hardt gulv
      ≥500/≥500 oppfylt); ≥4 prøver per temadel (16) + 4 generalprøver; fasit-svaralternativer
      rebalansert (jevn a/b/c/d, options[0] = riktig i staging; statisk prøvetekst stokket).
- [ ] **Sjargong/nybegynner:** sjangerkodene (PDR/NORM/CASE/FORM/POS/KONTR) og feilkodene
      (#1–#12) skrevet ut ved første bruk i HVERT kapittel; Del 0 har «Slik leser du»-boks +
      karakter-realisme (C er god/vanlig; ingen «Prioritet: perfekt»).
- [ ] **Opphavsrett:** alle oppgaver, case, «modellsvar» og eksempler NYSKREVNE — ingen
      formuleringer fra NIH-oppgavesett/sensorveiledninger, ingen direktesitater fra
      pensumlitteratur (referer/parafraser forfatter/verk/begrep).

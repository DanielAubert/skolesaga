# Bokskjelett: TI100 Idrettspsykologi 1 (NIH) — eksamensrettet lærebok

> **LÆRINGSLØKKE-KONTRAKT (ufravikelig, produkteier 9. juli 2026):** Ved bygging
> struktureres HVERT kapittels `content[]` som gjentatte små løkker
> **Teori → Eksempel → Oppgave** — `exercise`-blokker INLINE rett etter
> teorien/eksempelet de trener, aldri all teori øverst med oppgavene samlet
> nederst. Ingen oppgave får kreve stoff som ikke er dekket tidligere i
> kapitlet eller i eksplisitt refererte forkunnskaper (flytt teoribiten
> tidligere ved behov). Autoritativ kilde: README «Leserkrav» + arketypens
> DNA-fil (DNA-drofting.md). Unntak: øvingseksamen-/prøve-/modellbesvarelses-
> kapitler følger sin egen arketype (komplett oppgave først, besvarelser i
> collapsibles). Kvotene og innholdskontraktene i dette skjelettet er uendret
> — løkka styrer REKKEFØLGEN.


> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE eksamensarkivet —
> alt eksamensbelegg som trengs står i dette skjelettet, destillert fra
> `EKSAMENSANALYSE.md` (NIHs TI100-arkiv 2023/24–2025/26: **seks komplette oppgavesett
> med tilhørende sensorveiledning** — tre ordinære H2023/H2024/H2025 + tre utsatte
> V2024/V2025/V2026; alle sensorveiledninger lest oppgave for oppgave). Alle case,
> oppgaveformuleringer, tiltakslister og modellbesvarelser i boka skal være NYSKREVNE
> (se §6). Teorinavn, modeller, forskernavn (Deci & Ryan, Nicholls, Martens, Nideffer,
> Paivio, Triplett, Griffith) og standard fagbegreper er alminnelig fagstoff og fritt å
> bruke; sensorveiledningenes tekst gjengis ALDRI ordrett.
>
> **Anvendt teori-til-praksis-fag — IKKE ren psykologiteori.** Sensor understreker
> gjennomgående at **integrasjon mellom teori og praksis er selve A-markøren**: teori
> uten kobling til casen, eller fornuftige råd uten teoriforankring, stopper på C.
> Hvert kjernetema bygges derfor som en **anvendt eksamensmodul i tre lag** (README/DNA):
> (1) presis teorigjennomgang med korrekte begreper og forskernavn, (2) «slik brukes den
> på en case», (3) et tiltaks-/drøftings- og fallgruvelag. **To vekslende sett-arketyper**
> (case-format à la Abrahamsen 60/20/20 og kortsvarformat à la Pensgaard 4×25) betyr at
> boka må ruste studenten for BEGGE — dyp case-anvendelse OG presis, avgrenset modell-
> gjengivelse med «må ha»-sjekklister. Faktapåstander om utgave-/sidetall og
> modelldetaljer forfatteren er usikker på merkes `(verifiser)` for fagfellesjekk i
> fase 6 — mange stammer fra sensorveiledninger som speiler pensum sitt år og skal
> samkjøres med gjeldende Weinberg & Gould-utgave. INGEN oppdiktede referanser.
>
> **Status:** Emnet er **AKTIVT** ved NIH (verifisert mot NIHs emneside 2026-07-11:
> TI100 Idrettspsykologi 1, 10 studiepoeng, tilbudt H2025; del av programplan Bachelor i
> trenerrollen og idrettspsykologi 2026–2029). **Eksamensform:** skriftlig skoleeksamen,
> **4 timer, uten hjelpemidler**, gradert karakter **A–F**, i WISEflow; tre godkjente
> arbeidskrav kreves for å gå opp. Oppgavesettet gis på bokmål og nynorsk.
>
> **Krysslenke:** `nih-ti300` (Coaching) deler pensum (Weinberg & Gould; *Den coachende
> treneren*) og teoriapparat på kommunikasjon/coaching. Skjelett for nih-ti300 finnes
> ENNÅ ikke (kun EKSAMENSANALYSE), så boka refererer nih-ti300 som **søsteremne i tekst**,
> uten døde kapittellenker (README: lenk kun til kapitler som finnes). Fysiologi-/anatomi-
> klyngen (thp100/thp202 m.fl.) overlapper IKKE faglig med idrettspsykologi og krysslenkes
> ikke.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `nih-ti100` |
| Tittel | **TI100 Idrettspsykologi 1 (NIH) — eksamensrettet** |
| Level | `'Høyskole'` |
| Institusjon (navigasjon) | Norges idrettshøgskole (NIH). Visningsnavn i `institusjoner.ts`: «TI100 Idrettspsykologi 1». |
| Arketype | **Drøfting / anvendt teori-til-praksis** (`DNA-drofting.md`). Se §2 «Arketypetilpasning»: makrostrukturen (Del 0 eksamenskart+essayhåndverk → temadeler → eksamenstrening m/modellbesvarelser) og drøftingshåndverket beholdes; det unike er at boka driller TO parallelle sjangerlinjer (case-essay OG kortsvar med «må ha»-sjekkliste), og at «pensumforankring» primært betyr **korrekt navngitt teori/modell koblet til en case**, ikke sitattolkning. Ingen fasit — sensor vurderer teori-praksis-integrasjon, drøfting og selvstendighet. |
| Antall kapitler | **24** (Del 0: 2 · Del 1 Motivasjon: 6 · Del 2 Stress/angst/aktivering: 3 · Del 3 Mentale ferdigheter: 3 · Del 4 Konkurranse/grupper/kommunikasjon: 4 · Del 5 FA, mental helse, historie/metode: 2 · Del 6 Eksamenstrening: 4) |
| Estimert totaltid | **~1 440 min ≈ 24 timer** (per kapittel under) |
| Quiz totalt | **560** (krav ≥500) |
| Flashcards totalt | **560** (krav ≥500) |

**Pitch (ett avsnitt):** TI100 er *Idrettspsykologi 1* ved NIH — et **anvendt** fag rettet mot
trener- og utøverrollen i barne- og ungdomsidrett, med sunn/bærekraftig idrett som gjennom-
gangstema. Kandidaten får enten en trener-/utøvercase (frafall, nervøs spiller, umotivert
ungdomsutøver som flytter utenlands) eller et avgrenset modellspørsmål, og skal (1) gjengi en
navngitt teori korrekt og detaljert, og (2) koble den til praksis med begrunnede tiltak.
**Motivasjonsteoriene SDT og AGT er ryggraden** (bærer fire case-sett alene); **stress/angst er
den faste nr. 2-komponenten**; **mentale ferdigheter** (visualisering, målsetting, spennings-
regulering) roterer som anvendelsesoppgaver. Det avgjørende strukturvalget: fordi emneansvaret
veksler mellom to eksamenskulturer (Abrahamsens case-format 60/20/20 og Pensgaards kortsvar
4×25), må hvert kjernetema kunne besvares på begge nivåer — som dyp case-anvendelse OG som
presis, avgrenset modellgjengivelse med sjekkliste. Boka er bygd baklengs fra det sensor
premierer: **teori-praksis-integrasjon** (A-markøren), **flere teorier koblet sammen**,
**dybde i grunnbehovene (CAR/BPNT)**, **forskernavn/kilder**, **fallgruve-refleksjon** og
**balanserte tiltak** (utøver/trener/foreldre/miljø).

**Kritisk hjelpemiddel-/formramme (gjelder HELE boka):** 4 timers skoleeksamen **uten
hjelpemidler** — teorier, modeller og forskernavn må sitte i hodet. Det finnes **ingen fasit**:
karakteren er en helhetsvurdering (A–F) mot UHR-beskrivelsene, der «vurderingsevne og
selvstendighet» er nøkkelen. På kortsvarformatet gjelder **konjunktivt krav** — stryk på ett av
fire delspørsmål gir stryk på hele eksamen — så bredde er obligatorisk; man kan ikke velge bort
et tema. På case-formatet er case-oppgaven tyngdepunktet (60 %), de to småoppgavene avgrensede
anvendelsestemaer (20 % hver; V2024 unntaksvis 60/40).

**Kildeforbehold (ufravikelig — settes i Del 0 og gjentas i eksamenstreningen):** Analysen
bygger på **6 sett + 6 sensorveiledninger over 3 studieår (2023–2026)** — ferskt og fullstendig
for dagens praksis, men et lite antall sett. Enkelttemaer med frekvensscore 1 kan være mer
sentrale enn tallet antyder (de er hentet fra det avgrensede pensumutvalget hvert semester). Den
viktigste usikkerheten er **hvilket format neste eksamen får** — boka dekker begge. Sidetall/
utgave-referanser (W&G 7. vs. 8. utg.; s. 131–136, s. 555, kapittelnumre) er `(verifiser)` mot
gjeldende utgave. Pensumbøkene selv er ikke i arkivet; modelldetaljer er rekonstruert fra
veiledningenes momentlister og skal kvalitetssikres mot primærkilden i fase 6.

---

## 2. Makrostruktur

Rekkefølgen følger analysens §7-prioritering og faglig avhengighet: motivasjon (ryggraden) først
og bredest, deretter stress/angst (nr. 2), så mentale ferdigheter (bygger på motivasjon +
stress), deretter konkurranse/grupper/kommunikasjon, så FA/mental helse + fagets historie/metode
(lavfrekvent, men bestått-kritisk bredde), og til slutt eksamenstrening med begge sjangerlinjer
og modellbesvarelser på flere karakternivåer. Frekvensen styrer OMFANGET: SDT/AGT får en hel del
med flere kapitler og høyest kvote; lavfrekvent stoff (social loafing, mangfold, historie) får
kompakte kapitler.

| Del | Tittel | Kap. | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart og essayhåndverk | 2 | perfekt (meta) | Formen (4 t, uten hjelpemidler, TO vekslende sett-arketyper, A–F, konjunktivt kortsvarkrav), tre-lags-modulen (teori→case→tiltak), sjangerkodene, teori-praksis-integrasjon som A-akse, og kildeforbeholdet må etableres FØR fagstoffet. Essayhåndverket (kap. 0.2) er kritisk fordi «integrasjon» og «drøfting fremfor oppramsing» er sensors gjennomgående krav. |
| 1 | Motivasjon: SDT, AGT og frafall | 6 | perfekt (5/4 sett) | **Fagets tyngste bolk og ryggraden i case-formatet.** SDT i full dybde (indre/ytre, CAR/BPNT, OIT, CET, kontrollerende vs. autonomistøttende), AGT (oppgave/ego, mestrings-/prestasjonsklima, normativ/selvreferert kompetanse), self-efficacy (SET), forsterkning/straff, og deltakelses-/frafallsmotiver. Får flest kapitler + høyest kvote. |
| 2 | Stress, angst og aktivering | 3 | perfekt (3+ sett) | Den faste nr. 2-komponenten i motivasjonscasene og eget kortsvartema. Stressprosessen (McGrath), somatisk/kognitiv angst, tilstands-/trekkangst, aktiveringsteorier (omvendt-U, IZOF, katastrofemodell), spenningsregulering, og stress→burnout/overtrening hos unge. |
| 3 | Mentale ferdigheter | 3 | perfekt (3 sett, roterer) | Anvendelsesoppgavens (20 %) kjerne: visualisering (Paivio/PETTLEP), målsettingsarbeid (måltyper/SMART/prestasjonsprofil), oppmerksomhet (Nideffer). Hver med korrekt modell + praktisk opplegg + fallgruver. |
| 4 | Konkurranse, grupper og kommunikasjon | 4 | kunne (kortsvar-differensierende) | Martens' konkurransemodell + SOQ (det klassiske kortsvarspørsmålet), social loafing/gruppesamhold, mangfold/inkludering, og effektiv kommunikasjon (omvendt kommunikasjonshjul — **krysslenke nih-ti300**). |
| 5 | Fysisk aktivitet, mental helse og fagets historie/metode | 2 | kjenne (breddespørsmål) | Lavfrekvent, men bestått-kritisk bredde i kortsvarformat: FA på angst/depresjon (med metodebevissthet — korrelasjon vs. RCT, drop-out), og idrettspsykologiens historie (Triplett, Griffith, Coubertin, årstall) + forskningsmetoder. |
| 6 | Eksamenstrening | 4 | perfekt (meta) | Sjangerkapittel case-essay + sjangerkapittel kortsvar med «må ha»-sjekklister + 3 modellbesvarelses-kapitler (A/B/C på begge formater, ærlig merket) + case-verktøykasse. |

Rasjonale: SDT + AGT bærer hele case-linjen (fire sett), så Del 1 er størst med drill mot både
case-anvendelse og CET-kortsvar; stress/angst får egen del som nr. 2-komponent; mentale
ferdigheter samles fordi de roterer som 20 %-anvendelsesoppgaver; konkurranse/grupper/
kommunikasjon er hovedsakelig kortsvar-differensierende; FA/historie er lavfrekvent bredde som
likevel kan felle et helt kortsvarsett (konjunktivt krav). **Boka må dekke bredden** — prioriteten
styrer dybde og drillmengde, ikke *om* et tema er med.

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart og essayhåndverk |
| 1 | Motivasjon: SDT, AGT og frafall |
| 2 | Stress, angst og aktivering |
| 3 | Mentale ferdigheter |
| 4 | Konkurranse, grupper og kommunikasjon |
| 5 | Fysisk aktivitet, mental helse og fagets historie |
| 6 | Eksamenstrening |

### Sjangerkoder (fra analysen §3 — skrives ALLTID fullt ut ved første bruk, jf. README nybegynner-inngang)

**CASE** = den store trener-/utøvercasen (60 %): rammesett situasjon (velg selv idrett/alder/nivå)
→ forklar med minst én, helst to navngitte teorier → begrunn tiltak på flere nivåer + drøft
fallgruver. **ANV** = anvendelsesoppgaven (20 %): «beskriv X og lag/foreslå et opplegg» — teori/
modell korrekt → praktisk produkt (skript/plan) → begrunnelse + fallgruver. **MOD** = det
avgrensede modellspørsmålet (kortsvar 25 %): presis, dekkende gjengivelse av én navngitt modell
med anvendelse/eksempel; sensorveiledningen er en «må ha»-sjekkliste. **FAK** = fakta-/
oversiktsspørsmålet (kortsvar 25 %): bredde og korrekt gjengivelse av et empirisk/beskrivende
tema (fullstendige lister + metodebevissthet). **KOM** = trener-/kommunikasjonsspørsmålet
(kortsvar 20–25 %): refleksjon over trenerrollen forankret i en modell (deler pensum med
nih-ti300).

### Sensorkrav (fra analysen §4 — etableres i Del 0, refereres i hvert kapittel)

1. **Teori-praksis-integrasjon er A-markøren.** Teori må kobles til casen/situasjonen; teori uten
   anvendelse eller råd uten teori er de to klassiske C-fellene. Gjennomgangsformuleringen:
   «integrasjon mellom teori og praksis viser forståelse, sammenheng og selvstendighet».
2. **Teorien må gjengis korrekt og i tilstrekkelig detalj.** For MOD-spørsmål er dette en
   sjekkliste: Martens = alle fire faser; Nideffer = alle fire oppmerksomhetstyper; CET = både
   kontrollerende og informerende belønning. Å utelate en komponent senker under bestått-terskel.
3. **Drøfting fremfor oppramsing.** A/B krever at kandidaten veier, nyanserer og ser sammenhenger
   — ikke bare lister faktorer/tiltak.
4. **Flere teorier koblet sammen.** For toppkarakter «trekk veksler på andre teorier» (f.eks. AGT
   *sammen med* SDT/stress). Én teori alene holder på C.
5. **Dybde i grunnbehovene.** For A/B i motivasjonscasene: eksplisitt underminering av
   autonomi/kompetanse/tilhørighet (CAR/BPNT) og gjerne motivasjonsregulering (OIT).
6. **Forskernavn og kilder.** Deci & Ryan (SDT), Nicholls (AGT), Martens, Nideffer, Paivio,
   Bandura; på historiespørsmålet Coubertin/Triplett/Griffith med årstall (uten navn/tall → maks C).
7. **Fallgruver og balanse.** For mentale ferdigheter: refleksjon om feil timing/feil bilde/over-
   underaktivering. For tiltak: balanserte råd som også tar hensyn til treneren og til foreldre-vs-
   utøver-interesser.
8. **Måleinstrumenter og modellkobling** (A/B-bonus): SOQ til Martens; prestasjonsprofil til
   målsetting; det omvendte kommunikasjonshjulet til kommunikasjon.
9. **Alt må bestås (kortsvar).** Ett strøket delspørsmål = strøket eksamen. Bredden er ikke valgfri.
10. **Metodebevissthet** på empiriske spørsmål: korrelasjon vs. RCT, få RCT-er, hyppig drop-out.

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under; glosses ved første bruk i HVERT kapittel)

**#1** teori uten anvendelse (gjengir modell korrekt, kobler den aldri til casen). **#2** råd uten
teori (gode tiltak som «flyter fritt» uten modellforankring; spekulasjon → ikke godkjent). **#3**
oppramsing i stedet for drøfting (lister faktorer/tiltak uten å veie). **#4** ufullstendig modell
(utelater en komponent i en navngitt modell — kan felle hele kortsvareksamen). **#5** bare én
teori der flere kreves. **#6** overflatisk grunnbehovsbehandling (SDT uten CAR/BPNT/OIT). **#7**
manglende forskernavn/kilder (fatalt på historiespørsmålet). **#8** ubalanserte tiltak (henger ut
treneren; ensidig utøver-vs-foreldre). **#9** å ignorere fallgruver ved mentale ferdigheter.
**#10** «velg selv»-friheten misbrukt (case ikke skreddersydd til teorien). **#11** metodeblindhet
på empiriske spørsmål (effekter uten korrelasjon-vs-RCT/drop-out).

### Arketypetilpasning (dokumenterte hybridvalg og avvik)

1. **Drøfting i anvendt teori-til-praksis-variant.** DNA-drofting forutsetter drøftingsessay der
   pensumforankring primært er navngitte forfattere/verk koblet i drøfting. TI100 beholder dette,
   men «forankring» betyr her først og fremst **korrekt navngitt teori/modell koblet til en case**
   (Deci & Ryan → denne utøverens undergravde autonomi), ikke sitattolkning. Fra DNA-drofting
   beholdes: makrostrukturen (Del 0 essayhåndverk → temadeler etter frekvens → eksamenstrening med
   modellbesvarelser A/C/B ærlig merket), den binære selvrettingsrubrikken for drøfting, «hvem eier
   hva»-kortet, konklusjonsvariasjon og vippe-caser. **Sitatlager-broen er IKKE relevant** (TI100
   tester ikke sitattolkning) og droppes bevisst.
2. **To parallelle sjangerlinjer — det viktigste unike valget.** Fordi emneansvaret veksler mellom
   case-format (Abrahamsen) og kortsvarformat (Pensgaard), har boka to komplette treningsspor:
   (a) CASE/ANV-drill i 60/20/20 med modellbesvarelser der C og A skiller på integrasjon og
   drøfting; (b) MOD/FAK/KOM-drill i 4×25 bygd på «må ha»-sjekklister per modell. Hvert temakapittel
   markerer eksplisitt hvilke(n) sjanger(e) temaet opptrer i, og eksamenstreningsdelen har ETT
   sjangerkapittel per linje.
3. **Modell-sjekklister som speiler sensors bestått-krav.** For hver navngitt modell (Martens 4
   faser, Nideffer 4 typer, CET 2 belønningstyper, SDT 3 grunnbehov, McGrath 4 ledd) leveres en
   eksplisitt «må ha for bestått / dette løfter til A»-boks — den mest direkte eksamenstreningen
   som finnes.
4. **Case-verktøykasse (eget kapittel i Del 6).** En mal for «bygg en teoritilpasset case»
   (velg idrett/alder/nivå slik at teorien får spille) + et tiltaksbibliotek per problem (frafall,
   nervøsitet, umotivert ungdomsutøver, utenlandsflytting) med balansehensyn (utøver/trener/
   foreldre/miljø).
5. **Flashcards tungt vektet på begrep↔forsker↔modell.** Fordi eksamen er uten hjelpemidler og
   premierer korrekte navn og fullstendige modeller, er faget flashcard-egnet: teori↔forsker-kort
   (SDT↔Deci & Ryan, AGT↔Nicholls, konkurransemodell↔Martens 1975, oppmerksomhet↔Nideffer),
   modellkomponent-kort (SDTs tre behov; Martens' fire faser; PETTLEPs sju bokstaver; McGraths
   fire ledd), begrepspar-kort (indre/ytre motivasjon; oppgave-/ego-orientering; somatisk/kognitiv
   angst; tilstands-/trekkangst; kontrollerende/informerende belønning; resultat-/prestasjons-/
   prosessmål), og metode-/historie-kort (Triplett 1898; Griffith; korrelasjon vs. RCT; SOQ).
   **Quiz-profilen** driller nabobegrep-distraktorer (SDT/AGT, oppgave-/ego, somatisk/kognitiv,
   tilstands-/trekkangst, kontrollerende/informerende, mestrings-/prestasjonsklima, resultat-/
   prosessmål) + «hvilken teori biter på denne casen?»-lesetrening + «hva mangler i dette svaret?».
6. **Krysslenke nih-ti300 uten døde lenker.** Kommunikasjonskapitlet (4.4) og coaching-relasjonen
   deler pensum med nih-ti300. Fordi nih-ti300 ennå ikke har skjelett/bok, omtales det som
   søsteremne i prosa (ikke markdown-lenke til ikke-eksisterende kapittel). Ved bygging: hvis
   nih-ti300-boka finnes, legg til lenke; ellers behold prosaomtalen.
7. **Ingen oppdiktede referanser eller modelldetaljer.** Usikre utgave-/sidetall og
   modellkomponenter merkes `(verifiser)` for fase 6. Forskernavn og modeller som er godt etablert
   fagstoff brukes fritt; sensorveiledningenes tekst gjengis aldri ordrett.

**Avvik fra prompt-ordningen (dokumentert):** Analysen (§7) anbefaler å strukturere boka etter
Weinberg & Goulds kapittelbolker. Denne boka følger den anbefalingen (motivasjon → stress/
aktivering → mentale ferdigheter → grupper/kommunikasjon → FA & helse → historie/metode), men
plasserer **fagets historie/metode SIST** (Del 5) framfor først, fordi det er lavfrekvent bredde
og fordi motivasjon må etableres først som fagets ryggrad — nybegynneren skal møte SDT/AGT før
faghistorie. Self-efficacy (SET, Bandura) er lagt som eget delkapittel i Del 1 (støtteteori i
casene), ikke egen del.

### Kapittel-DNA A — temakapittel (flertallet av kapitlene)

Obligatorisk blokk-rekkefølge (plattformens blokktyper), bygd i læringsløkker (jf. DNA-drofting):

1. `tip` **Eksamensvinkel** — frekvens/vekt, hvilke sjangre (CASE/ANV/MOD/FAK/KOM) temaet inngår
   i, og hva sensor ser etter. Fylles fra skjelettets Eksamensbelegg — forfatteren finner IKKE på
   frekvenstall.
2. `text` **Forkunnskaper** — kapitler i boka det bygger på + kryssbok-lenker (README-leserkrav);
   i sene/tunge kapitler VIS de 2–3 kjernebegrepene ferdig oppfrisket («Sist du var her»).
3. `text` **Temaet i fagets landskap** — kort: hvilket praksisproblem det svarer på, når det
   opptrer i casene. Åpne gjerne med et hverdagsanker (en konkret utøver-/trenersituasjon) FØR
   begrepsapparatet.
4. **Læringsløkke per teoribit** (gjentas gjennom kapitlet, jf. DNA-drofting):
   `definition` **Kjernebegrep/modell** (toppnivå med `title` — flashcard-kilden), presist definert
   OG forankret i forsker (Deci & Ryan / Nicholls / Martens …) → `example` **anvendelse** (teorien
   brukt på en konkret trener-/utøvercase, skrevet slik en god besvarelse ville gjort det) →
   `exercise` **anvendelses-/drøftingsoppgave** på samme teoribit, INLINE rett etter eksempelet.
   Deretter neste teoribit, til alt stoffet er dekket.
5. `collapsible` **Modell-sjekkliste** (der temaet inngår i et MOD-spørsmål): «må ha for bestått /
   dette løfter til A» — Martens 4 faser, Nideffer 4 typer, CET 2 belønninger, SDT 3 behov, osv.
6. `warning` **Typiske feil** — feilkodene (#1–#11) som gjelder temaet, glosset ved første bruk;
   inkl. eksplisitt «teori uten anvendelse / råd uten teori stopper på C».
7. `exercise` (samlet mot slutten, i tillegg til de inline) × noen eksamensklone på nivå —
   1–2 CASE/ANV (løsning = disposisjon + momentliste, ikke fullt essay) og/eller 1–2 MOD/FAK med
   sjekkliste-fasit. Hint på alle (første hint = teorivalget/hjemmelen, aldri konklusjonen).
8. `collapsible` **Pensumkart for kapitlet** — teori → forsker/verk → hvilke poeng de «eier»
   (flashcard-råstoff). Åpner med begrepsbank-notisen fra README.

### Kapittel-DNA B — sjanger-/modellbesvarelseskapittel (Del 6)

Følger DNA-drofting sjanger- og modellbesvarelses-DNA: nyskrevet oppgave i reell sjanger →
`collapsible` **A-besvarelse** (full tekst med margnotater om hva som løfter) → `collapsible`
**Kommentert C-besvarelse** (korrekt men flat, ærlig merket) → `collapsible` **autentisk B-/
midtnivå-besvarelse** (ekte studentspråk, litt rotete men god) → `tip` **Sensorblikket**
(momentliste + vektlegging). Lange besvarelser får «— naturlig pausepunkt —»-markører.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = frekvens/vekt + sjangerkoder (CASE/ANV/MOD/FAK/KOM) +
> prioritetsklasse (perfekt/kunne/kjenne/grunnlag/meta), alt «per 2023–2026-arkivet» (6 sett).
> **Begrepskontrakt** = begreper/modeller som SKAL defineres og forankres i forsker (flashcard-
> kilden). **Drøftingsakser** = spenningene kapitlet ruster studenten til å drøfte. **Kvote** =
> quiz/flashcards. Kryssbok-lenkene peker på eksisterende kapitler (`(verifiser lenke)` der usikker).

### Del 0 — Eksamenskart og essayhåndverk *(prioritet: PERFEKT (meta))*

#### Kapittel 0.1: Eksamenskartet — slik testes TI100
**id:** `nih-ti100-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Eksamensformen (4 t skoleeksamen uten hjelpemidler, A–F, WISEflow, bokmål/
  nynorsk, tre arbeidskrav), de TO vekslende sett-arketypene (case 60/20/20 vs. kortsvar 4×25 med
  konjunktivt krav), tre-lags-modulen (teori→case→tiltak), sjangerkodene, temafrekvensene,
  sensorkravene og kildeforbeholdet — verktøyet som styrer hele boka.
- **Eksamensbelegg:** Metakapittel (hele arkivet 2023–2026, 6 sett). Skal formidle: (a) **formen**
  — 4 t skriftlig skoleeksamen uten hjelpemidler, A–F, tre godkjente arbeidskrav for å gå opp;
  (b) **de to arketypene** — Abrahamsens case 60/20/20 (V2024 unntaksvis 60/40) og Pensgaards
  kortsvar 4×25 der **alle fire må bestås**; (c) **temafrekvenstabellen** (§2/analysen §2) — SDT
  5 sett, AGT 4 sett, stress/angst 3+ sett, mentale ferdigheter 3 sett, resten 1 sett; (d)
  **sensorkravene** (§2, teori-praksis-integrasjon som A-akse); (e) **kildeforbeholdet** — 6 sett
  over 3 år, lite antall, score-1-temaer kan være mer sentrale enn tallet antyder, format-
  usikkerhet. Prioritet: perfekt (meta).
- **Innholdskontrakt:** Sjangerkatalogen (CASE/ANV/MOD/FAK/KOM) som studentens sjekkliste med
  frekvens per sjanger; **Del 0-pakken** (README): «Slik leser du denne boka»-boks (`text`/`tip`),
  «Lite tid?»-boks (3–5-dagers hurtigrute + ukeplaner av summerte estimatedMinutes; LESEtider,
  ×1,5 for håndskrift), deltidsrute (10–12 uker à ~8 t/uke), kildenote for frekvens-/sensor-
  empirien (6 sett 2023–2026 + forbehold), prosedyre-/sjangeroversiktskort på ÉN side (sjanger →
  én linjes oppskrift → tidsbudsjett → vanligste feil), «lese mye, skrive lite»-boks, og
  **karakter-realisme** (C er en god og vanlig karakter; «Gapet til A» som oppgraderingsmeny;
  ordet «perfekt» unngås i prioritering). Ingen forkunnskapsblokk (metakapittel).
- **Oppgavesjangre:** Ingen fagoppgaver; 3–4 refleksjonsoppgaver av typen «gitt en 4-timers
  case-eksamen 60/20/20 — sett opp tidsbudsjett og rekkefølge» og «avgjør av en oppgavetekst om
  den ber om ren modellgjengivelse (MOD) eller case-anvendelse (CASE)».
- **Typiske feil:** Metafeilene: å gamble på ett format (må dekke begge); å tro at «velg selv»-
  friheten er en unnskyldning for løs prat (#10); å vente en fasit (helhetsvurdering, ingen fasit).
- **Kvote:** 10 quiz / 10 flashcards (formfakta, de to arketypene, temafrekvens, sensorkravene,
  sjangerkodene, kildeforbeholdet).

#### Kapittel 0.2: Essayhåndverket — teori-praksis-integrasjon som A-markør
**id:** `nih-ti100-0-2` · **number:** 0.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-ti100-0-1`

- **Kapitteltype:** håndverkskapittel (meta — drøftings-/anvendelsesspråk).
- **Description:** De to ferdighetene som gir uttelling på hver eneste oppgave: å *koble* teori til
  en konkret situasjon (integrasjonen som løfter C→A) og å *drøfte* framfor å ramse opp. Kapitlet
  etablerer tre-lags-malen (teori→anvendelse→tiltak+fallgruve) og den binære selvrettingsrubrikken
  som resten av boka bruker.
- **Eksamensbelegg:** Gjennomgående (sensorkrav 1, 3, 4 på tvers av alle sjangre). Prioritet:
  perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 0.1. `collapsible` **Håndverksliste:** tre-lags-malen; C→A-
  aksen (integrasjon); drøftingsverbene (veie, nyansere, se sammenheng).
- **Begrepskontrakt (flashcard-kilde):** **tre-lags-modulen** (1 teorigjennomgang m/forskernavn →
  2 anvendelse på casen → 3 tiltak + fallgruver/balanse); **teori-praksis-integrasjon** (A-markør)
  vs. de to C-fellene (**#1** teori uten anvendelse, **#2** råd uten teori); **drøfting vs.
  oppramsing** (**#3**); **«flere teorier koblet»** (**#5**); **«velg selv»-disiplin** (case
  skreddersys til teorien, **#10**); den **binære selvrettingsrubrikken** for CASE/ANV (☐ valgt
  navngitt teori? ☐ teori gjengitt korrekt? ☐ eksplisitt koblet til casen? ☐ tiltak begrunnet i
  teorien? ☐ minst to teorier/perspektiver? ☐ fallgruver/balanse drøftet? ☐ alle delspørsmål
  besvart?).
- **Tegne-/løsningsprosedyre:** (1) les casen, marker problemet; (2) velg 1–2 navngitte teorier som
  casen muliggjør; (3) gjengi teorien korrekt med forsker; (4) koble hver teoridel eksplisitt til
  casen; (5) foreslå tiltak på flere nivåer (utøver/trener/foreldre/miljø) begrunnet i teorien;
  (6) drøft fallgruver og balanse; (7) sjekk mot rubrikken.
- **Drøftingsakser:** integrasjon vs. isolert teori; skarp konklusjon vs. balansert forbehold
  (jf. README A-konklusjonsvariasjon — forbehold er verktøy, ikke obligatorisk garnityr).
- **Typiske feil:** #1, #2, #3, #10; i tillegg: telegramstil framfor flytende norsk (README).
- **Case-forslag:** en umotivert 15-åring i lagidrett brukt til å demonstrere de tre lagene med
  SDT som eksempelteori (peker fram mot Del 1).
- **Kvote:** 12 quiz / 14 flashcards.

**Prøve-kvote Del 0:** 0 prøver (dekkes av modellbesvarelsene og øvingscasene i Del 6).

### Del 1 — Motivasjon: SDT, AGT og frafall *(prioritet: PERFEKT — 5/4 sett, ryggraden)*

#### Kapittel 1.1: Motivasjonens grunnbegreper — indre, ytre og amotivasjon
**id:** `nih-ti100-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-ti100-0-2`

- **Kapitteltype:** temakapittel (grunnlag → perfekt).
- **Description:** Fundamentet for hele Del 1: indre vs. ytre motivasjon, amotivasjon, og hvorfor
  skillet er avgjørende i barne-/ungdomsidrett (indre motivasjon henger sammen med varig deltakelse
  og trivsel). Forbereder SDT (1.2–1.3) og AGT (1.4).
- **Eksamensbelegg:** Forutsetning for alle motivasjonscasene (5 sett). Inngår som byggekloss i
  CASE og i MOD (CET). Prioritet: grunnlag for topptemaet.
- **Forkunnskaper/kryssbok:** kap. 0.2. `collapsible` **Begrepsliste:** indre/ytre motivasjon,
  amotivasjon, motivasjonskontinuum (peker mot OIT i 1.3).
- **Begrepskontrakt (flashcard-kilde):** **indre motivasjon** (gjøre aktiviteten for dens egen
  skyld — glede, mestring), **ytre motivasjon** (for en ytre konsekvens — belønning, unngå straff),
  **amotivasjon** (fravær av intensjon/opplevd sammenheng), motivasjonens rolle for læring,
  prestasjon og deltakelse (Weinberg & Gould).
- **Drøftingsakser:** når er ytre motivasjon nyttig vs. skadelig i ungdomsidrett; forholdet mellom
  «ha det gøy» og prestasjonskrav.
- **Typiske feil:** #1 (definere motivasjon uten å koble til en case), #6 (overflatisk — nevne
  «indre motivasjon» uten mekanismen bak).
- **Case-forslag:** en 12-åring som slutter å synes fotball er gøy etter innføring av resultattabell
  (peker mot CET/SDT).
- **Kvote:** 22 quiz / 22 flashcards.

#### Kapittel 1.2: Selvbestemmelsesteori (SDT) — de tre grunnbehovene (CAR/BPNT)
**id:** `nih-ti100-1-2` · **number:** 1.2 · **estimatedMinutes:** 65 · **prerequisites:** `nih-ti100-1-1`

- **Kapitteltype:** temakapittel (perfekt — fagets viktigste enkeltteori).
- **Description:** SDTs kjerne (Deci & Ryan): de tre psykologiske grunnbehovene — **autonomi,
  kompetanse, tilhørighet (CAR = competence/autonomy/relatedness; BPNT = basic psychological needs
  theory)** — og hvordan tilfredsstillelse gir indre motivasjon mens underminering gir frafall.
  Dette dybdelaget er A/B-markøren i motivasjonscasene.
- **Eksamensbelegg:** **SDT i 5 sett** (H2023, V2024, H2025, V2026 + CET-varianten H2024) — fagets
  tyngste enkeltteori, bæres av CASE og testes direkte i MOD. For A/B forventes eksplisitt
  underminering av alle tre behov (V2026-casen premierer analyse av hvordan utenlandsflytting
  undergraver kompetanse, autonomi OG tilhørighet). Sjangre: CASE, MOD. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.1. `collapsible` **Begrepsliste:** SDT, BPNT, CAR, autonomi/
  kompetanse/tilhørighet, autonomistøttende vs. kontrollerende miljø.
- **Begrepskontrakt (flashcard-kilde):** **SDT (Deci & Ryan)**; **autonomi** (opplevd valgfrihet/
  eierskap), **kompetanse** (opplevd mestring/effektivitet), **tilhørighet** (opplevd tilknytning);
  **BPNT/CAR**; **autonomistøttende** vs. **kontrollerende** trenermiljø; underminering av behov →
  redusert indre motivasjon/frafall.
- **Drøftingsakser:** hvordan konkrete trenergrep (valg, tilbakemelding, relasjon) treffer hvert
  behov; balansen mellom struktur og autonomi.
- **Typiske feil:** #6 (SDT uten CAR/BPNT-dybde), #1 (teori uten kobling til utøveren), #4 (nevne
  bare ett av tre behov i et MOD-svar).
- **Case-forslag:** en tenåringsutøver som mister motivasjon etter bytte til en svært kontrollerende
  trener — analysér behov for behov.
- **Kvote:** 26 quiz / 28 flashcards.

#### Kapittel 1.3: Motivasjonsregulering (OIT) og Cognitive Evaluation Theory (CET)
**id:** `nih-ti100-1-3` · **number:** 1.3 · **estimatedMinutes:** 60 · **prerequisites:** `nih-ti100-1-2`

- **Kapitteltype:** temakapittel (perfekt — CET er et direkte MOD-tema).
- **Description:** SDTs to undermini-teorier: **OIT (organismic integration theory)** —
  motivasjonskontinuumet fra ytre → introjisert → identifisert → integrert → indre regulering —
  og **CET (cognitive evaluation theory)** — hvordan **kontrollerende** vs. **informerende**
  belønning påvirker indre motivasjon. CET er et klassisk kortsvarspørsmål med sjekkliste.
- **Eksamensbelegg:** **CET testet direkte i MOD (H2024)** — sensorveiledningen krever **både**
  kontrollerende og informerende belønning for A/B; bare én gir maks C; kun spekulasjon →
  ikke godkjent. OIT er A/B-dybde i CASE. Sjangre: MOD, CASE. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.2. `collapsible` **Begrepsliste:** OIT-kontinuumet, CET,
  kontrollerende/informerende belønning, Deci et al. 1999 `(verifiser)`.
- **Begrepskontrakt (flashcard-kilde):** **OIT** med de fem reguleringstypene; **CET**;
  **kontrollerende belønning** (oppleves som styring → svekker autonomi/indre motivasjon),
  **informerende belønning** (gir positiv kompetanseinformasjon → kan styrke indre motivasjon);
  belønningens effekt avhenger av hvordan den *oppleves*.
- **Modell-sjekkliste (CET, MOD):** **må ha for bestått** — begge belønningstyper (kontrollerende
  OG informerende) + hvordan de ulikt påvirker indre motivasjon + idrettseksempel; **løfter til A**
  — kobling til grunnbehovene (autonomi/kompetanse), Deci et al.-forankring `(verifiser)`, nyansert
  «det avhenger av opplevelsen».
- **Drøftingsakser:** når blir en pokal/premie kontrollerende vs. informerende; hvordan formulere
  ros så den informerer om kompetanse.
- **Typiske feil:** #4 (bare én belønningstype → maks C), #2 (spekulasjon uten teori → ikke
  godkjent), #6 (CET uten kobling til autonomi/kompetanse).
- **Case-forslag:** et lag der treneren innfører «månedens spiller»-pokal — drøft via CET.
- **Kvote:** 26 quiz / 28 flashcards.

#### Kapittel 1.4: Prestasjonsmål-/målorienteringsteori (AGT)
**id:** `nih-ti100-1-4` · **number:** 1.4 · **estimatedMinutes:** 65 · **prerequisites:** `nih-ti100-1-2`

- **Kapitteltype:** temakapittel (perfekt — SDTs parhest i casene).
- **Description:** AGT (achievement goal theory, Nicholls): **oppgave-/mestringsorientering** vs.
  **ego-/prestasjonsorientering**, **mestringsklima** vs. **prestasjonsklima**, og **normativ** vs.
  **selvreferert** kompetanse. Nesten alltid koblet til SDT i casene; å koble AGT til stress-casen
  (trygg på juniornivå = selvreferert, redd for inkompetanse på seniornivå = normativt) er en
  eksplisitt A/B-markør.
- **Eksamensbelegg:** **AGT i 4 sett** (H2023, V2024, H2025, V2026). Sjangre: CASE, MOD.
  Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.2. `collapsible` **Begrepsliste:** AGT, oppgave-/ego-
  orientering, mestrings-/prestasjonsklima, normativ/selvreferert kompetanse.
- **Begrepskontrakt (flashcard-kilde):** **AGT (Nicholls)**; **oppgaveorientering** (mestring målt
  mot seg selv/oppgaven), **egoorientering** (målt mot andre); **mestringsklima** (trener belønner
  innsats/framgang) vs. **prestasjonsklima** (belønner å slå andre); **normativ** vs. **selvreferert**
  kompetanse; kobling til frafall og trivsel.
- **Modell-sjekkliste (AGT, MOD):** **må ha** — de to orienteringene + de to klimaene + eksempel;
  **løfter til A** — kobling til SDT (autonomistøtte ↔ mestringsklima) og til stress (normativ
  kompetanse ↔ prestasjonsangst).
- **Drøftingsakser:** hvordan skape mestringsklima uten å fjerne konkurranse; når egoorientering
  kan være funksjonell.
- **Typiske feil:** #5 (AGT alene der SDT + AGT kreves), #1 (klima-begrep uten kobling til
  treneren i casen), #3 (ramse opp begreper uten å drøfte konsekvens).
- **Case-forslag:** to lag med samme resultater men ulikt frafall — forklar via klima.
- **Kvote:** 26 quiz / 28 flashcards.

#### Kapittel 1.5: Self-efficacy (SET, Bandura), forsterkning og straff
**id:** `nih-ti100-1-5` · **number:** 1.5 · **estimatedMinutes:** 60 · **prerequisites:** `nih-ti100-1-2`

- **Kapitteltype:** temakapittel (kunne — støtteteori + eget MOD-/ANV-tema).
- **Description:** To praksisnære motivasjonsverktøy: **self-efficacy/mestringsforventning (SET,
  Bandura)** med de fire kildene (mestringserfaring, vikarierende erfaring, verbal overtalelse,
  fysiologisk tilstand) — ofte støtteteori i casene («SET nevnes = pluss») — og **positiv
  forsterkning og straff** (retningslinjer: timing, omfang, type; kritikk av straff; når straff
  kan forsvares).
- **Eksamensbelegg:** SET som støtteteori i flere case-sett (SET nevnt = A/B-pluss). Forsterkning/
  straff eget tema i **H2025** (W&G 2024 s. 131–136 `(verifiser)`). Sjangre: CASE (SET), ANV/MOD
  (forsterkning). Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 1.2. `collapsible` **Begrepsliste:** self-efficacy, de fire
  kildene, positiv/negativ forsterkning, straff-retningslinjer.
- **Begrepskontrakt (flashcard-kilde):** **self-efficacy (Bandura, SET)** + de **fire kildene**;
  **positiv forsterkning** (legge til noe ønsket), **negativ forsterkning** (fjerne noe uønsket),
  **straff** og dens retningslinjer (**timing, omfang, type**) + kritikk (frykt, unngåelse,
  relasjonsslitasje) + når straff kan forsvares.
- **Drøftingsakser:** hvordan bygge mestringsforventning hos en usikker utøver; forsterkning vs.
  straff i barneidrett (verdiramme: sunn idrett).
- **Typiske feil:** #8 (straff som «henger ut» utøveren foran laget), #2 (råd om ros uten
  forsterkningsteori), #7 (nevne self-efficacy uten Bandura).
- **Case-forslag:** en utøver med lav mestringsforventning etter en skade — bygg SET via de fire
  kildene; en trener som vurderer kollektiv straff — drøft retningslinjer.
- **Kvote:** 24 quiz / 24 flashcards.

#### Kapittel 1.6: Deltakelse og frafall i barne-/ungdomsidrett
**id:** `nih-ti100-1-6` · **number:** 1.6 · **estimatedMinutes:** 55 · **prerequisites:** `nih-ti100-1-4`

- **Kapitteltype:** temakapittel (kunne/kjenne — fast case-bakteppe + eget FAK-tema).
- **Description:** Hvorfor barn deltar (ha det gøy, mestring, venner, spenning) og hvorfor de
  slutter (kjedsomhet, for stort press, konkurranse-/resultatfokus, skade, andre interesser), koblet
  til SDT/AGT. Den faste rammen rundt nesten alle casene; eget breddespørsmål i kortsvar.
- **Eksamensbelegg:** Eget FAK-tema i **V2025** (deltakelses-/frafallsmotiver + kobling til AGT/SDT);
  bakteppe i alle case-settene. Sjangre: FAK, CASE-bakteppe. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 1.4 (AGT), kap. 1.2 (SDT). `collapsible` **Begrepsliste:**
  deltakelsesmotiver, frafallsmotiver, sunn/bærekraftig idrett.
- **Begrepskontrakt (flashcard-kilde):** deltakelsesmotivenes **lister** (glede, mestring, venner,
  spenning, form), frafallsmotivenes **lister** (kjedsomhet, press, for stort konkurransefokus,
  skade, konkurrerende interesser); kobling til underminerte grunnbehov (SDT) og prestasjonsklima
  (AGT); verdirammen (sunn/bærekraftig idrett, frafallsforebygging).
- **Drøftingsakser:** hvor mye konkurranse tåler barneidretten; trener-/foreldrerollen i frafall.
- **Typiske feil:** #3 (ramse opp motivlister uten å koble til teori), #1 (frafall beskrevet uten
  SDT/AGT-forklaring).
- **Case-forslag:** en klubb med stort frafall i overgangen 13→15 år — forklar via SDT/AGT + tiltak.
- **Kvote:** 22 quiz / 22 flashcards.

**Prøve-kvote Del 1:** 4 prøver (id `nih-ti100-1-prove`, chapterNumber `1.P`): (1) *SDT-dybde* —
MOD-drill på de tre grunnbehovene + CET-sjekkliste; (2) *AGT* — MOD-drill orientering/klima +
kobling til SDT; (3) *Motivasjonscase* — CASE i 60 %-format (frafall/umotivert utøver) med
disposisjon + momentliste; (4) *Samlet motivasjonsprøve* på eksamensnivå (case + kortsvar blandet).
Deklareres «4 prøver à ~35–45 min — kan trygt deles, én prøve per økt».

### Del 2 — Stress, angst og aktivering *(prioritet: PERFEKT — 3+ sett, fast nr. 2-komponent)*

#### Kapittel 2.1: Stressprosessen og prestasjonsangst
**id:** `nih-ti100-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `nih-ti100-1-2`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** **Stressprosessen (McGrath: krav → oppfatning → respons → konsekvenser)**,
  **somatisk vs. kognitiv angst**, **tilstands- vs. trekkangst**, og prestasjonsangst — det faste
  nr. 2-elementet i motivasjonscasene og eget stress-case-tema.
- **Eksamensbelegg:** Stress/prestasjonsangst-**case i V2024** (minst én modell + drøfting, kobling
  til AGT/normativ kompetanse) og komponent i **H2025**; bakteppe i H2023. Sensor: «drøfting av
  disse elementene, ikke bare oppramsing». Sjangre: CASE, MOD. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.4 (AGT — normativ kompetanse ↔ prestasjonsangst).
  `collapsible` **Begrepsliste:** McGrath-modellen, somatisk/kognitiv angst, tilstands-/trekkangst.
- **Begrepskontrakt (flashcard-kilde):** **stress** (ubalanse mellom opplevd krav og opplevd
  kapasitet), **McGraths fire ledd**, **somatisk angst** (kroppslige symptomer) vs. **kognitiv
  angst** (bekymring/negative tanker), **tilstandsangst** (situasjonsbestemt) vs. **trekkangst**
  (disposisjon), prestasjonsangst.
- **Modell-sjekkliste (McGrath, MOD/CASE):** **må ha** — de fire leddene + skillet somatisk/kognitiv
  og tilstand/trekk; **løfter til A** — kobling til AGT (normativ kompetanse) og drøfting av hvorfor
  akkurat denne utøveren opplever krav som truende.
- **Drøftingsakser:** hvorfor to utøvere med samme «objektive» krav reagerer ulikt; angstens
  funksjonelle vs. dysfunksjonelle side.
- **Typiske feil:** #3 (ramse opp stressfaktorer uten drøfting — eksplisitt straffet), #5 (stress
  uten kobling til AGT/SDT), #4 (blande somatisk/kognitiv eller tilstand/trekk).
- **Case-forslag:** en junior som var trygg, blir nervøs etter opprykk til senior — analysér via
  McGrath + AGT.
- **Kvote:** 26 quiz / 26 flashcards.

#### Kapittel 2.2: Aktivering (arousal) og aktiveringsteorier
**id:** `nih-ti100-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-ti100-2-1`

- **Kapitteltype:** temakapittel (kunne).
- **Description:** Aktivering (arousal) og forholdet aktivering–prestasjon: **drive-teori**,
  **omvendt-U-hypotesen (Yerkes–Dodson)**, **individuelle soner for optimal funksjon (IZOF, Hanin)**
  og **katastrofemodellen** — grunnlaget for spenningsregulering (2.3).
- **Eksamensbelegg:** Grunnlag for spenningsregulering (H2023) og A/B-nyanse i stress-casene.
  Sjangre: CASE-støtte, MOD. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 2.1. `collapsible` **Begrepsliste:** aktivering, drive-teori,
  omvendt-U, IZOF, katastrofemodell.
- **Begrepskontrakt (flashcard-kilde):** **aktivering (arousal)**; **drive-teori** (lineær:
  aktivering ↑ → prestasjon ↑); **omvendt-U (Yerkes–Dodson)** (optimum i midten); **IZOF (Hanin)**
  (individuell optimal sone, ikke én felles topp); **katastrofemodellen** (samspill kognitiv angst
  × fysiologisk aktivering, brå fall).
- **Drøftingsakser:** hvorfor «bare ro deg ned» er for enkelt; individuelle forskjeller i optimal
  aktivering.
- **Typiske feil:** #4 (forveksle omvendt-U og IZOF), #7 (nevne modeller uten navn), #1 (teori uten
  kobling til en utøvers oppvarmingsrutine).
- **Case-forslag:** to lagkamerater der den ene trenger å «gire opp», den andre «roe ned» før kamp —
  forklar via IZOF.
- **Kvote:** 24 quiz / 24 flashcards.

#### Kapittel 2.3: Stress→burnout, overtrening og forebygging hos unge
**id:** `nih-ti100-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** `nih-ti100-2-1`

- **Kapitteltype:** temakapittel (kunne — eget MOD-tema).
- **Description:** **Kronisk stress → utbrenthet (burnout)** hos unge utøvere, og skillet
  **overtrening vs. utbrenthet** (likheter/forskjeller, forebygging). Verdirammen sunn idrett gjør
  dette til et gjennomgangstema.
- **Eksamensbelegg:** Stress↔burnout eget MOD-tema i **H2024**; overtrening vs. utbrenthet eget tema
  i **H2025** (W&G kap. 22, s. 555 `(verifiser)`). Sjangre: MOD, FAK. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 2.1. `collapsible` **Begrepsliste:** kronisk stress, burnout,
  overtrening, forebygging.
- **Begrepskontrakt (flashcard-kilde):** **utbrenthet (burnout)** (utmattelse, redusert prestasjons-
  følelse, devaluering), **overtrening** (ubalanse belastning/restitusjon), likheter/forskjeller,
  forebygging (restitusjon, variasjon, autonomistøtte, realistiske mål).
- **Modell-sjekkliste (overtrening vs. utbrenthet, MOD):** **må ha** — definisjon av begge +
  minst én likhet og én forskjell; **løfter til A** — forebyggingstiltak koblet til SDT/AGT.
- **Drøftingsakser:** når er «mer trening» kontraproduktivt; trenerens rolle i tidlig oppdagelse.
- **Typiske feil:** #4 (definere bare det ene begrepet), #3 (liste symptomer uten å drøfte
  forebygging), #6 (glemme stress-koblingen).
- **Case-forslag:** en talentfull 16-åring med økende utmattelse og synkende glede — er det
  overtrening eller utbrenthet, og hva gjør treneren?
- **Kvote:** 24 quiz / 24 flashcards.

**Prøve-kvote Del 2:** 4 prøver (id `nih-ti100-2-prove`, chapterNumber `2.P`): (1) *Stressprosessen*
— MOD/CASE McGrath + somatisk/kognitiv + tilstand/trekk; (2) *Aktivering* — MOD omvendt-U/IZOF/
katastrofe; (3) *Burnout/overtrening* — MOD skille + forebygging; (4) *Stress-case* på eksamensnivå
(nervøs utøver) med kobling til AGT. «4 prøver à ~30–40 min — én per økt».

### Del 3 — Mentale ferdigheter *(prioritet: PERFEKT — 3 sett, roterer som ANV)*

#### Kapittel 3.1: Visualisering / mental trening (imagery)
**id:** `nih-ti100-3-1` · **number:** 3.1 · **estimatedMinutes:** 60 · **prerequisites:** `nih-ti100-1-5`

- **Kapitteltype:** temakapittel (perfekt — ANV-signatur «beskriv + lag skript»).
- **Description:** Visualisering: **Paivios funksjonsmodell** (kognitiv/motiverende × spesifikk/
  generell), **PETTLEP** (physical, environment, task, timing, learning, emotion, perspective),
  indre vs. ytre perspektiv, livlighet og kontroll, og hvordan skrive et **visualiseringsskript** —
  pluss fallgruver (feil bilde, feil timing).
- **Eksamensbelegg:** Visualiserings-**ANV i H2023** (Paivio, PETTLEP, SET, fallgruver — «beskriv
  og skriv et skript»). Sjangre: ANV, MOD. Prioritet: perfekt (for denne sjangeren).
- **Forkunnskaper/kryssbok:** kap. 1.5 (SET — vikarierende erfaring). `collapsible`
  **Begrepsliste:** imagery, Paivio-modellen, PETTLEP, indre/ytre perspektiv, livlighet/kontroll.
- **Begrepskontrakt (flashcard-kilde):** **imagery/visualisering**; **Paivios funksjonsmodell**
  (de fire funksjonene); **PETTLEP** (de sju elementene); **indre** (førsteperson) vs. **ytre**
  (tredjeperson) perspektiv; **livlighet** og **kontroll**; kobling til self-efficacy (vikarierende
  erfaring).
- **Modell-sjekkliste (visualisering, ANV):** **må ha** — modell (Paivio/PETTLEP) korrekt + et
  konkret skript; **løfter til A** — fallgruver (feil bilde, feil timing i sesong), kobling til SET,
  perspektivvalg begrunnet.
- **Drøftingsakser:** når visualisering hjelper vs. skader; realistiske vs. urealistiske bilder.
- **Typiske feil:** #9 (droppe fallgruver — gratis A/B-poeng), #2 (skript uten modellforankring),
  #1 (beskrive imagery uten å lage produktet).
- **Case-forslag:** en skihopper som skal bygge et før-hopp-skript — konstruer via PETTLEP.
- **Kvote:** 26 quiz / 26 flashcards.

#### Kapittel 3.2: Målsettingsarbeid
**id:** `nih-ti100-3-2` · **number:** 3.2 · **estimatedMinutes:** 60 · **prerequisites:** `nih-ti100-1-4`

- **Kapitteltype:** temakapittel (perfekt — ANV «beskriv + sett opp opplegg»).
- **Description:** **Resultat-, prestasjons- og prosessmål**, kort-/langsiktige mål og delmål,
  **SMART**-kriterier, prinsipper for effektiv målsetting, **prestasjonsprofil**, og kobling til
  SDT/AGT/SET — omsatt til et konkret målsettingsopplegg treneren kan bruke.
- **Eksamensbelegg:** Målsettings-**ANV i V2024** (måltyper, SMART, kobling AGT/SDT/SET,
  prestasjonsprofil). Sjangre: ANV, MOD. Prioritet: perfekt (for denne sjangeren).
- **Forkunnskaper/kryssbok:** kap. 1.4 (AGT), kap. 1.5 (SET). `collapsible` **Begrepsliste:**
  resultat-/prestasjons-/prosessmål, SMART, prestasjonsprofil.
- **Begrepskontrakt (flashcard-kilde):** **resultatmål** (utfall vs. andre), **prestasjonsmål**
  (eget nivå/standard), **prosessmål** (utførelse/teknikk); **kort-/langsiktige** mål og **delmål**;
  **SMART** (spesifikk, målbar, akseptert, realistisk, tidfestet); **prestasjonsprofil**; kobling
  til oppgaveorientering (AGT) og mestringsforventning (SET).
- **Modell-sjekkliste (målsetting, ANV):** **må ha** — måltypologi + SMART + et konkret opplegg;
  **løfter til A** — kobling til AGT/SDT, prestasjonsprofil, fallgruver (bare resultatmål → press).
- **Drøftingsakser:** hvorfor prosessmål ofte er sunnere enn resultatmål i ungdomsidrett;
  målsetting som autonomistøtte.
- **Typiske feil:** #9 (droppe fallgruver ved rene resultatmål), #5 (SMART alene uten AGT/SDT-
  kobling), #2 (mål-liste uten teori).
- **Case-forslag:** en utøver som bare tenker på å vinne og blir stresset — bygg et prosess-/
  prestasjonsmål-opplegg.
- **Kvote:** 26 quiz / 26 flashcards.

#### Kapittel 3.3: Spenningsregulering og oppmerksomhet (Nideffer)
**id:** `nih-ti100-3-3` · **number:** 3.3 · **estimatedMinutes:** 60 · **prerequisites:** `nih-ti100-2-2`

- **Kapitteltype:** temakapittel (perfekt for ANV/MOD — to roterende tema samlet).
- **Description:** To roterende ferdigheter: **spenningsregulering** (somatiske teknikker: pust,
  progressiv avspenning; kognitive teknikker: selvsnakk, tankestopp; oppregulering) med opplegg og
  fallgruver, og **oppmerksomhet/konsentrasjon (Nideffers modell)** — de **fire oppmerksomhets-
  typene** (indre/ytre × smal/bred), fokusskifte og distraksjonshåndtering.
- **Eksamensbelegg:** Spenningsregulering **ANV i H2023** (somatisk/kognitiv + opplegg + fallgruver);
  Nideffer eget **MOD i V2025** (alle fire typer + godt eksempel kreves). Sjangre: ANV, MOD.
  Prioritet: perfekt (for disse sjangrene).
- **Forkunnskaper/kryssbok:** kap. 2.2 (aktivering). `collapsible` **Begrepsliste:**
  spenningsregulering (somatisk/kognitiv), Nideffers fire oppmerksomhetstyper.
- **Begrepskontrakt (flashcard-kilde):** **somatiske** (pust, progressiv avspenning) vs.
  **kognitive** (selvsnakk, tankestopp) reguleringsteknikker; **oppregulering**; **Nideffers fire
  typer** (indre-smal, indre-bred, ytre-smal, ytre-bred); fokusskifte; distraksjonshåndtering.
- **Modell-sjekkliste (Nideffer, MOD):** **må ha** — **alle fire** oppmerksomhetstyper + ett godt
  idrettseksempel per type (utelate en type senker under bestått); **løfter til A** — fokusskifte
  under prestasjon, distraksjonsrutiner.
- **Drøftingsakser:** riktig teknikk til riktig utøver (over- vs. underaktivert); når fokusskifte
  svikter.
- **Typiske feil:** #4 (bare tre av Nideffers fire typer → under bestått), #9 (spenningsregulering
  uten fallgruver som feil timing), #1 (teknikk uten kobling til utøverens aktiveringsnivå).
- **Case-forslag:** en skytter som mister fokus på avgjørende skudd — analysér via Nideffer; en
  overaktivert utøver — foreslå et spenningsreguleringsopplegg.
- **Kvote:** 26 quiz / 26 flashcards.

**Prøve-kvote Del 3:** 4 prøver (id `nih-ti100-3-prove`, chapterNumber `3.P`): (1) *Visualisering* —
ANV Paivio/PETTLEP + skript + fallgruver; (2) *Målsetting* — ANV måltyper/SMART + opplegg; (3)
*Nideffer* — MOD fire typer + eksempel; (4) *Spenningsregulering* — ANV somatisk/kognitiv + opplegg.
«4 prøver à ~30–40 min — én per økt».

### Del 4 — Konkurranse, grupper og kommunikasjon *(prioritet: KUNNE — kortsvar-differensierende)*

#### Kapittel 4.1: Martens' konkurransemodell og competitiveness (SOQ)
**id:** `nih-ti100-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-ti100-2-1`

- **Kapitteltype:** temakapittel (kunne — det klassiske MOD-spørsmålet).
- **Description:** **Martens' konkurransemodell (1975)** — konkurranse som **sosial prosess**:
  objektiv konkurransesituasjon → subjektiv konkurransesituasjon → respons → konsekvenser — og
  **competitiveness** (win-, goal- og competitiveness-orientering) målt med **SOQ (Sport
  Orientation Questionnaire)**.
- **Eksamensbelegg:** Martens eget **MOD i H2024** — de fire fasene *må* med for bestått; SOQ gir
  A/B-bonus. Sjangre: MOD. Prioritet: kunne (høyfrekvent i kortsvarformat).
- **Forkunnskaper/kryssbok:** kap. 2.1 (subjektiv oppfatning av situasjon). `collapsible`
  **Begrepsliste:** Martens' fire faser, competitiveness, SOQ.
- **Begrepskontrakt (flashcard-kilde):** **Martens 1975**; **de fire fasene** (objektiv → subjektiv
  → respons → konsekvenser); konkurranse som **lært sosial prosess**; **competitiveness** (SOQ:
  win/goal/competitiveness-orientering).
- **Modell-sjekkliste (Martens, MOD):** **må ha** — **alle fire faser** i den sosiale prosessen +
  idrettseksempel (utelate en fase → under bestått); **løfter til A** — SOQ/competitiveness,
  drøfting av hvorfor «objektiv» og «subjektiv» situasjon kan avvike.
- **Drøftingsakser:** hvorfor to utøvere opplever samme konkurranse ulikt (subjektiv fase); er
  konkurranselyst medfødt eller lært.
- **Typiske feil:** #4 (utelate en av de fire fasene), #7 (glemme Martens/1975 og SOQ), #1 (modell
  uten eksempel).
- **Case-forslag:** en spiller som blir passiv i «viktige» kamper — forklar via subjektiv fase.
- **Kvote:** 24 quiz / 24 flashcards.

#### Kapittel 4.2: Grupper, lagsamhold og social loafing
**id:** `nih-ti100-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-ti100-1-2`

- **Kapitteltype:** temakapittel (kjenne — MOD-breddetema).
- **Description:** Gruppeutvikling og **lagsamhold (task vs. social cohesion)** og **social loafing
  (Ringelmann-effekten)** — redusert individuell innsats når bidraget ikke kan identifiseres, og
  under hvilke forhold det oppstår/motvirkes.
- **Eksamensbelegg:** Social loafing eget **MOD i V2025**. Sjangre: MOD. Prioritet: kjenne.
- **Forkunnskaper/kryssbok:** kap. 1.2 (tilhørighet). `collapsible` **Begrepsliste:** task/social
  cohesion, social loafing, Ringelmann.
- **Begrepskontrakt (flashcard-kilde):** **oppgavesamhold** vs. **sosialt samhold**; **social
  loafing (Ringelmann)**; når det oppstår (individuelt bidrag skjules) og motvirkes (synliggjøring,
  ansvar, mål).
- **Modell-sjekkliste (social loafing, MOD):** **må ha** — definisjon + betingelser + eksempel;
  **løfter til A** — tiltak koblet til motivasjon (SDT: ansvar ↔ autonomi) og til samhold.
- **Drøftingsakser:** samhold vs. prestasjon (er samhold alltid bra); individuelt ansvar i lag.
- **Typiske feil:** #3 (definere loafing uten betingelsene), #1 (fenomen uten idrettseksempel).
- **Case-forslag:** et lag der noen «gjemmer seg» i fellesøvelser — forklar og motvirk.
- **Kvote:** 22 quiz / 22 flashcards.

#### Kapittel 4.3: Mangfold og inkludering i idrett
**id:** `nih-ti100-4-3` · **number:** 4.3 · **estimatedMinutes:** 45 · **prerequisites:** `nih-ti100-1-2`

- **Kapitteltype:** temakapittel (kjenne — FAK/MOD-breddetema).
- **Description:** **Mangfold og inkludering** og sammenhengen med prestasjon, samt strategier for
  et inkluderende miljø (bevissthet om egne fordommer, kulturell kunnskap, tilrettelegging).
- **Eksamensbelegg:** Mangfold/inkludering eget tema i **V2025** (sammenheng med prestasjon +
  strategier). Sjangre: FAK, MOD. Prioritet: kjenne.
- **Forkunnskaper/kryssbok:** kap. 1.2 (tilhørighet). `collapsible` **Begrepsliste:** mangfold,
  inkludering, inkluderingsstrategier.
- **Begrepskontrakt (flashcard-kilde):** **mangfold** og **inkludering**; sammenheng med prestasjon
  og trivsel; **strategier** (egen bevissthet, kulturell kunnskap, tilrettelegging, tilhørighet).
- **Drøftingsakser:** mangfold som prestasjonsfaktor vs. verdispørsmål; treners konkrete grep.
- **Typiske feil:** #3 (ramse opp strategier uten å begrunne effekten), #1 (verdier uten kobling
  til prestasjon/tilhørighet).
- **Case-forslag:** et lag med stor kulturell bredde og lav trivsel hos noen — inkluderingstiltak.
- **Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 4.4: Effektiv kommunikasjon og trenerrollen
**id:** `nih-ti100-4-4` · **number:** 4.4 · **estimatedMinutes:** 55 · **prerequisites:** `nih-ti100-1-2`

- **Kapitteltype:** temakapittel (kunne — KOM-tema, **krysslenke nih-ti300**).
- **Description:** **Effektiv kommunikasjon** i trenerrollen: sende–motta-budskap, verbal/nonverbal
  kommunikasjon, aktiv lytting, **det omvendte kommunikasjonshjulet**, konstruktiv tilbakemelding og
  samarbeid utøver–trener. **Deler pensum og teoriapparat med nih-ti300 (Coaching).**
- **Eksamensbelegg:** Kommunikasjon eget **KOM i V2026** (W&G kap. 11 + *Den coachende treneren*,
  omvendt kommunikasjonshjul). Generelle praksisråd → C; for A/B **må** en modell brukes. Sjangre:
  KOM, ANV. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 1.2 (relasjon/tilhørighet). **Søsteremne:** nih-ti300 (Coaching)
  deler denne teorien — omtales i prosa (ikke lenke; nih-ti300-bok finnes ikke ennå). `collapsible`
  **Begrepsliste:** sende/motta-modellen, omvendt kommunikasjonshjul, aktiv lytting.
- **Begrepskontrakt (flashcard-kilde):** **sende–motta-modellen**; **verbal/nonverbal**
  kommunikasjon; **aktiv lytting**; **det omvendte kommunikasjonshjulet**; **konstruktiv
  tilbakemelding**; coaching-kommunikasjon (*Den coachende treneren*).
- **Modell-sjekkliste (kommunikasjon, KOM):** **må ha** — en modell (sende/motta eller omvendt
  kommunikasjonshjul) + anvendelse; **løfter til A** — kobling til motiverende klima (AGT/SDT),
  konkret tilbakemeldingseksempel.
- **Drøftingsakser:** når svikter kommunikasjonen (sender vs. mottaker); tilbakemelding som
  autonomistøtte vs. kontroll.
- **Typiske feil:** #2 (generelle kommunikasjonsråd uten modell → maks C), #1 (modell uten
  anvendelse), #7 (glemme det omvendte kommunikasjonshjulet).
- **Case-forslag:** en trener hvis beskjeder stadig misforstås — analysér via sende/motta-modellen.
- **Kvote:** 24 quiz / 24 flashcards.

**Prøve-kvote Del 4:** 4 prøver (id `nih-ti100-4-prove`, chapterNumber `4.P`): (1) *Martens* — MOD
fire faser + SOQ; (2) *Social loafing/samhold* — MOD; (3) *Mangfold/inkludering* — FAK/MOD; (4)
*Kommunikasjon* — KOM med modellkrav. «4 prøver à ~25–35 min — én per økt».

### Del 5 — Fysisk aktivitet, mental helse og fagets historie/metode *(prioritet: KJENNE — bestått-kritisk bredde)*

#### Kapittel 5.1: Fysisk aktivitet, angst og depresjon — med metodebevissthet
**id:** `nih-ti100-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-ti100-2-1`

- **Kapitteltype:** temakapittel (kjenne — FAK-tema med metodekrav).
- **Description:** **Effekt av fysisk aktivitet på angst og depresjon**: effektstørrelser (moderat),
  **korrelasjon vs. RCT**, langtidseffekt, drop-out, nevrobiologiske mekanismer, dose–respons, og
  FA sammenlignet med annen behandling — med eksplisitt **metodebevissthet** (del av læringsutbyttet).
- **Eksamensbelegg:** FA på angst/depresjon eget **FAK i H2024** (effektstørrelser, korrelasjon/RCT,
  drop-out). Metodebevissthet premieres. Sjangre: FAK. Prioritet: kjenne.
- **Forkunnskaper/kryssbok:** kap. 2.1 (stress/angst). `collapsible` **Begrepsliste:**
  effektstørrelse, korrelasjon vs. RCT, drop-out, dose–respons.
- **Begrepskontrakt (flashcard-kilde):** dokumentert **effekt av FA** på angst/depresjon
  (moderat/medium effektstørrelse); **korrelasjon** (samvariasjon, ikke årsak) vs. **RCT**
  (randomisert kontrollert, kan vise årsak); **drop-out**-problematikk; **dose–respons**
  (intensitet/varighet); FA vs. antidepressiva/psykologisk behandling; sentrale metaanalyser
  (Cooney, Josefsson, Kvam, Schuch, Stubbs m.fl.) `(verifiser)`.
- **Drøftingsakser:** hvor sikkert er «trening virker mot depresjon» (metodegrunnlaget);
  hvorfor drop-out svekker konklusjonene.
- **Typiske feil:** #11 (presentere effekter uten korrelasjon-vs-RCT/drop-out — metodeblindhet),
  #3 (liste effekter uten å vurdere styrken), #7 (ingen kilder/metaanalyser).
- **Case-forslag:** en påstand om at «trening kurerer depresjon» — vurder metodisk holdbarhet.
- **Kvote:** 24 quiz / 24 flashcards.

#### Kapittel 5.2: Idrettspsykologiens historie og forskningsmetoder
**id:** `nih-ti100-5-2` · **number:** 5.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-ti100-5-1`

- **Kapitteltype:** temakapittel (kjenne — FAK-tema, navn/årstall kritisk).
- **Description:** Idrettspsykologiens **fag- og forskningshistorie** fra sent 1800-tall til i dag
  (**Coubertin; Norman Triplett 1898** — sosial fasilitering, regnet som første idrettspsykologiske
  eksperiment; **Coleman Griffith** — «den amerikanske idrettspsykologiens far», første laboratorium),
  skiftet fra forskning til anvendt praksis, norsk kontekst (Chroni & Abrahamsen 2017), og
  **forskningsmetoder** i faget (korrelasjon vs. eksperiment/RCT, spørreskjema som SOQ,
  metaanalyser, reliabilitet, drop-out).
- **Eksamensbelegg:** Fagets historie eget **FAK i V2026** (Coubertin, Triplett, Griffith, Chroni &
  Abrahamsen 2017). Uten navn/årstall → maks C. Sjangre: FAK. Prioritet: kjenne.
- **Forkunnskaper/kryssbok:** kap. 5.1 (metode). `collapsible` **Begrepsliste:** Triplett 1898,
  Griffith, Coubertin, Chroni & Abrahamsen 2017, forskningsmetoder.
- **Begrepskontrakt (flashcard-kilde):** **Triplett (1898, sosial fasilitering)**; **Coleman
  Griffith** (første laboratorium, «fars»-tittel); **Coubertin**; skiftet forskning → anvendt
  praksis; **Chroni & Abrahamsen (2017)** norsk kontekst `(verifiser)`; forskningsmetoder
  (korrelasjon/eksperiment/RCT, spørreskjema/SOQ, metaanalyse, reliabilitet, drop-out).
- **Drøftingsakser:** hvordan faget beveget seg fra laboratorium til feltpraksis; metodens rolle i
  fagets modning.
- **Typiske feil:** #7 (generell historie uten navn/årstall → maks C — eksplisitt), #11
  (metodebegreper upresist brukt).
- **Case-forslag:** ingen case; en tidslinje-/koblingsoppgave (navn ↔ bidrag ↔ årstall).
- **Kvote:** 22 quiz / 22 flashcards.

**Prøve-kvote Del 5:** 4 prøver (id `nih-ti100-5-prove`, chapterNumber `5.P`): (1) *FA og mental
helse* — FAK med metodekrav; (2) *Metodebevissthet* — korrelasjon vs. RCT / drop-out drill; (3)
*Fagets historie* — FAK navn/årstall; (4) *Samlet bredde/kortsvar-prøve* (blandet FAK fra Del 4–5,
konjunktivt-krav-trening). «4 prøver à ~20–30 min — én per økt».

### Del 6 — Eksamenstrening *(prioritet: PERFEKT (meta))*

#### Kapittel 6.1: Sjangeren CASE/ANV — case-essay i 60/20/20-format
**id:** `nih-ti100-6-1` · **number:** 6.1 · **estimatedMinutes:** 65 · **prerequisites:** `nih-ti100-1-2`

- **Kapitteltype:** sjangerkapittel (DNA-drofting sjanger-DNA).
- **Description:** Oppskriften på Abrahamsen-linjen: hvordan disponere den store casen (60 %) og de
  to anvendelsesoppgavene (20 %) på 4 timer, med tre-lags-malen og case-verktøykassen.
- **Eksamensbelegg:** Case-formatet i 4 av 6 sett (H2023, H2025, V2026 + V2024). Sjangre: CASE, ANV.
  Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** hele Del 1–3. `collapsible` **Sjangerliste:** CASE/ANV-oppskriften +
  tidsbudsjett.
- **Innholdskontrakt:** `text` oppskrift (velg teori casen muliggjør → gjengi korrekt → koble →
  tiltak flere nivåer → drøft fallgruver) med **tidsbudsjett** (case ~2 t, hver ANV ~1 t; skrivetid
  vs. kladd/lesing forklart); `example` gjennomskrevet case med margkommentarer; **case-verktøykasse**
  (mal for «bygg en teoritilpasset case» + tiltaksbibliotek per problem: frafall, nervøsitet,
  umotivert ungdomsutøver, utenlandsflytting, med balansehensyn utøver/trener/foreldre/miljø);
  binær selvrettingsrubrikk (fra 0.2).
- **Oppgavesjangre:** `exercise` × 4–6 nyskrevne CASE/ANV med disposisjons-/momentliste-løsninger +
  hint (aldri konklusjonen). Én merket **kald bank**-oppgave (uvant vinkling, momentliste-fasit).
- **Typiske feil:** #1, #2, #3, #10 samlet; ubalansert tidsbruk (all tid på casen, tom for ANV).
- **Kvote:** 14 quiz / 12 flashcards.

#### Kapittel 6.2: Sjangeren MOD/FAK/KOM — kortsvar i 4×25-format med «må ha»-sjekklister
**id:** `nih-ti100-6-2` · **number:** 6.2 · **estimatedMinutes:** 60 · **prerequisites:** `nih-ti100-4-1`

- **Kapitteltype:** sjangerkapittel (DNA-drofting sjanger-DNA).
- **Description:** Oppskriften på Pensgaard-linjen: fire likevektede kortsvar (25 % hver), **alle
  må bestås**. Samler modell-sjekklistene (Martens 4 faser, Nideffer 4 typer, CET 2 belønninger,
  McGrath 4 ledd, SDT 3 behov) på ett sted som studentens «bestått-garanti».
- **Eksamensbelegg:** Kortsvarformatet i 2 av 6 sett (H2024, V2025). Konjunktivt krav. Sjangre:
  MOD, FAK, KOM. Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** hele Del 1–5. `collapsible` **Samlet oppslagskort** (README): «hvem
  eier hva» — modell → forsker → må-ha-komponenter → kapittellenke (til kapitler som finnes).
- **Innholdskontrakt:** `text` oppskrift (avgrens → definer → alle komponenter → eksempel → nyanse)
  med tidsbudsjett (~1 t per spørsmål, hold bredde framfor dybde på ett); `example` gjennomskrevet
  kortsvar (Martens) med margkommentar; den samlede modell-sjekklisten; broen: «i kortsvar er
  utelatelse av én komponent fatal — sjekklisten er bestått-garantien».
- **Oppgavesjangre:** `exercise` × 5–8 nyskrevne MOD/FAK/KOM med sjekkliste-fasit + hint. Varierte
  fasit-mønstre (aldri samme «alle a» i statiske flervalg — README stokking).
- **Typiske feil:** #4 (ufullstendig modell — feller hele eksamen), #7 (manglende navn/tall), #3
  (oppramsing uten drøfting der A kreves).
- **Kvote:** 14 quiz / 12 flashcards.

#### Kapittel 6.3: Modellbesvarelser — motivasjonscase (A / B / C, ærlig merket)
**id:** `nih-ti100-6-3` · **number:** 6.3 · **estimatedMinutes:** 70 · **prerequisites:** `nih-ti100-6-1`

- **Kapitteltype:** modellbesvarelseskapittel (DNA-drofting).
- **Description:** Én nyskrevet motivasjonscase (frafall/umotivert ungdomsutøver) besvart på tre
  nivåer, slik at leseren ser eksakt hva integrasjon og drøfting gjør. Lange besvarelser med
  «— naturlig pausepunkt —»-markører.
- **Eksamensbelegg:** Motivasjonscase i H2023/H2025/V2026. Sjangre: CASE. Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** Del 1 + kap. 6.1. `collapsible`-strukturen under.
- **Innholdskontrakt:** nyskrevet case → `collapsible` **A-besvarelse** (SDT full dybde CAR/BPNT +
  AGT-klima + tiltak flere nivåer + fallgruver + forskernavn; margnotater «her: integrasjon», «her:
  flere teorier koblet»); `collapsible` **kommentert C-besvarelse** (korrekt SDT men flat, ingen
  kobling til casen, én teori — ærlig merket C, gap-notater); `collapsible` **autentisk B-besvarelse**
  (ekte studentspråk, god men litt rotete, med notater om hva som er bra nok og de 2–3 grepene opp
  til A); `tip` **Sensorblikket** (momentliste + vektlegging). Minst én besvarelse i boka lander
  **skarpt** (README A-konklusjonsvariasjon).
- **Typiske feil:** meta-fasit forbudt (skriv drøftelsen UT, ikke «en A ville drøftet …»).
- **Kvote:** 12 quiz / 12 flashcards.

#### Kapittel 6.4: Modellbesvarelser — kortsvar + anvendelse (Martens/Nideffer/visualisering)
**id:** `nih-ti100-6-4` · **number:** 6.4 · **estimatedMinutes:** 65 · **prerequisites:** `nih-ti100-6-2`

- **Kapitteltype:** modellbesvarelseskapittel (DNA-drofting).
- **Description:** Modellbesvarelser på den andre linjen: et MOD-kortsvar (Martens eller Nideffer)
  og en ANV-anvendelse (visualiseringsskript), hver på bestått / C / A-nivå, med bestått-på-marginen-
  eksempel (viser terskelen nedenfra). Case-bibliotek («hvilken teori biter på denne situasjonen?»)
  til slutt.
- **Eksamensbelegg:** MOD/ANV i H2024/V2025/H2023. Sjangre: MOD, ANV. Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** Del 3–4 + kap. 6.2. `collapsible`-struktur.
- **Innholdskontrakt:** nyskrevet MOD (f.eks. Nideffer) → `collapsible` **A/bestått/C-besvarelser**
  med sjekkliste-margnotater; nyskrevet ANV (visualiseringsskript) → tilsvarende; **bestått-på-
  marginen**-besvarelse (README karakter-realisme); `collapsible` **case-bibliotek** (situasjon →
  teori/tenker → poeng); `tip` **Sensorblikket**. Selvdiagnose-sjekkliste (☐) etter hver fasit.
- **Typiske feil:** #4, #9, meta-fasit forbudt.
- **Kvote:** 12 quiz / 12 flashcards.

**Prøve-kvote Del 6:** 4 prøver (id `nih-ti100-6-prove`, chapterNumber `6.P`): (1) *Full case-
øvingseksamen* (60/20/20, momentliste-fasit); (2) *Full kortsvar-øvingseksamen* (4×25, sjekkliste-
fasit); (3) *Blandet generalprøve* (case + kortsvar); (4) *Kald bank* (8–10 uvante oppgaver uten
hint, momentliste-fasit — README). «4 prøver à ~45–60 min — fordel på flere kvelder, aldri stablet
i siste uke».

---

## Kvotesammendrag (AUTORITATIV for alle senere faser)

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 2 | 22 | 24 | 0 (dekkes av modellbesvarelser/øvingscaser i Del 6) |
| 1 | 6 | 146 | 152 | 4 |
| 2 | 3 | 74 | 74 | 4 |
| 3 | 3 | 78 | 78 | 4 |
| 4 | 4 | 90 | 90 | 4 |
| 5 | 2 | 46 | 46 | 4 |
| 6 | 4 | 52 | 48 | 4 |
| **Sum** | **24** | **508 ✓ (≥500)** | **512 ✓ (≥500)** | **24** |

Summeringskontroll per del (quiz / flashcards):
- Del 0: 10+12 = **22** / 10+14 = **24**
- Del 1: 22+26+26+26+24+22 = **146** / 22+28+28+28+24+22 = **152**
- Del 2: 26+24+24 = **74** / 26+24+24 = **74**
- Del 3: 26+26+26 = **78** / 26+26+26 = **78**
- Del 4: 24+22+20+24 = **90** / 24+22+20+24 = **90**
- Del 5: 24+22 = **46** / 24+22 = **46**
- Del 6: 14+14+12+12 = **52** / 12+12+12+12 = **48**
- **Totalt: 508 quiz / 512 flashcards.** (begge ≥500-gulvet)

**Kvotebegrunnelse (jf. audit-lærdommen: ≥500 er GULV, ikke mål).** TI100 er et teoririkt anvendt
fag der eksamen er uten hjelpemidler, så både quiz og flashcards trekkes opp av at korrekte
modeller, forskernavn og fullstendige komponentlister MÅ sitte utenat. (1) **Quiz** — nabobegrep-
distraktorer over hele apparatet (SDT/AGT, oppgave-/ego, somatisk/kognitiv, tilstands-/trekkangst,
kontrollerende/informerende, mestrings-/prestasjonsklima, resultat-/prosessmål, Nideffers fire
typer, Martens' fire faser) + «hvilken teori biter på casen?»- og «hva mangler i dette svaret?»-
lesetrening, ~22–26/temakapittel. (2) **Flashcards** — teori↔forsker-kort, modellkomponent-kort
(SDTs tre behov, Martens' fire faser, PETTLEPs sju bokstaver, McGraths fire ledd) og begrepspar-
kort til pugg utenat, med marginalt høyere tetthet enn quiz i de teoritunge motivasjons-/stress-
kapitlene. De 18 fagkapitlene (Del 1–5) bærer tettheten, så summene ligger over gulvet (508/512)
uten kunstig oppfylling; meta-, sjanger- og modellbesvarelseskapitlene (Del 0 + Del 6) har bevisst
lavere kvote (de trener sjanger og integrasjon, ikke fakta). Prøvene ligger på fire per temadel
(Del 1–5 = 20 prøver) + fire eksamenstreningsprøver i Del 6 (**24 prøver totalt**); Del 0 dekkes av
Del 6s modellbesvarelser/øvingscaser.

**Flashcard-profil:** definisjons-, forsker- og modellkomponent-kort til pugg utenat — SDT↔Deci &
Ryan + CAR/BPNT + OIT-kontinuum, CET (kontrollerende/informerende), AGT↔Nicholls + oppgave/ego +
mestrings-/prestasjonsklima + normativ/selvreferert, self-efficacy↔Bandura + fire kilder,
forsterkning/straff-retningslinjer, McGraths fire ledd + somatisk/kognitiv + tilstand/trekk,
aktiveringsteoriene (omvendt-U/IZOF/katastrofe), burnout vs. overtrening, Paivio + PETTLEP + indre/
ytre perspektiv, måltyper + SMART + prestasjonsprofil, Nideffers fire typer, Martens' fire faser +
SOQ, social loafing/samhold, mangfold/inkludering-strategier, sende/motta + omvendt
kommunikasjonshjul, FA-effekt + korrelasjon-vs-RCT + drop-out, Triplett 1898/Griffith/Coubertin, og
«feil-vaksine»-kort (teori uten anvendelse = C; utelatt modellkomponent = ikke bestått; spekulasjon
uten teori = ikke godkjent). **Quiz-profil:** MC med nabobegrep-distraktorer + «hvilken teori/modell
biter på denne casen?» + «hva mangler i dette kortsvaret for bestått?»-lesetrening; distraktorer
straffer aldri grundig lesing (README) — nær-sanne distraktorer får forklart fasit-kommentar.

---

## 4. Prøver

Prøvene ligger som egne prøve-kapitler per temadel (chapterNumber `N.P`), fire per temadel (Del 1–5)
+ fire eksamenstreningsprøver (Del 6) = **24 prøver**. Hver prøve deklareres «kan trygt deles — én
prøve per økt», med tidsanslag. Flervalg i statiske prøve-collapsibles har **stokkede fasit-
bokstaver** (README — aldri «alle a»); riktig/galt- og «finn fellen»-lister varierer fasiten.
Fasitene er momentlister/sjekklister (ikke fritekst-modellbesvarelse — de bor i Del 6), med binær
selvrettingsrubrikk der drøfting trenes.

**Prøve-kvote Del 1:** 4 prøver (id `nih-ti100-1-prove`): (1) *SDT-dybde* — MOD grunnbehov + CET-
sjekkliste; (2) *AGT* — MOD orientering/klima + SDT-kobling; (3) *Motivasjonscase* — CASE 60 %; (4)
*Samlet motivasjon* — blandet case/kortsvar på eksamensnivå.

**Prøve-kvote Del 2:** 4 prøver (id `nih-ti100-2-prove`): (1) *Stressprosessen* — McGrath + somatisk/
kognitiv + tilstand/trekk; (2) *Aktivering* — omvendt-U/IZOF/katastrofe; (3) *Burnout/overtrening* —
skille + forebygging; (4) *Stress-case* på nivå med AGT-kobling.

**Prøve-kvote Del 3:** 4 prøver (id `nih-ti100-3-prove`): (1) *Visualisering* — ANV Paivio/PETTLEP +
skript; (2) *Målsetting* — ANV måltyper/SMART; (3) *Nideffer* — MOD fire typer; (4)
*Spenningsregulering* — ANV somatisk/kognitiv.

**Prøve-kvote Del 4:** 4 prøver (id `nih-ti100-4-prove`): (1) *Martens* — MOD fire faser + SOQ; (2)
*Social loafing/samhold* — MOD; (3) *Mangfold/inkludering* — FAK/MOD; (4) *Kommunikasjon* — KOM med
modellkrav.

**Prøve-kvote Del 5:** 4 prøver (id `nih-ti100-5-prove`): (1) *FA og mental helse* — FAK med
metodekrav; (2) *Metodebevissthet* — korrelasjon/RCT/drop-out; (3) *Fagets historie* — FAK navn/
årstall; (4) *Samlet bredde-kortsvar* (konjunktivt-krav-trening).

**Prøve-kvote Del 6:** 4 prøver (id `nih-ti100-6-prove`): (1) *Case-øvingseksamen* 60/20/20; (2)
*Kortsvar-øvingseksamen* 4×25; (3) *Blandet generalprøve*; (4) *Kald bank* (uten hint).

**Sum prøver: 24** (4 per temadel Del 1–5 = 20, + 4 i Del 6).

---

## 5. Kildeforbehold og verifiseringsliste (fase 6)

- **Utgave-/sidetall** i sensorveiledningene veksler mellom Weinberg & Gould 7. utg. (2019) og 8.
  utg. (2023/24); konkrete sidetall (s. 131–136 forsterkning/straff; s. 555 overtrening/utbrenthet)
  og kapittelnumre (kap. 6, 7, 18, 22, 23; kap. 8, 9, 10, 17, 23; kap. 11) er `(verifiser)` mot
  gjeldende utgave.
- **Deci et al. 1999** (CET-metaanalyse) og **Chroni & Abrahamsen 2017** (norsk fags historie) er
  `(verifiser)`-merket der de brukes som eksplisitt kilde.
- **Metaanalyse-navn** for FA/mental helse (Cooney, Josefsson, Kvam, Schuch, Stubbs) er `(verifiser)`.
- **Pensumbøkene selv** er ikke i arkivet — alle modelldetaljer (PETTLEP-bokstavene, Martens' fire
  faser, Nideffers fire typer, OIT-kontinuumet) skal kvalitetssikres mot primærkilden.
- **Emnestatus AKTIV** verifisert mot NIHs emneside 2026-07-11, men status kan endres — behold
  `(verifiser)` ved bygging hvis lang tid har gått.
- **nih-ti300-krysslenke:** legg til markdown-lenke til kommunikasjons-/coaching-kapitlene KUN hvis
  nih-ti300-boka finnes ved bygging; ellers behold prosaomtale.

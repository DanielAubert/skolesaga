# Bokskjelett: EXPHIL03 Examen philosophicum — eksamensrettet lærebok

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


> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE eksamensarkivet —
> alt eksamensbelegg som trengs står i dette skjelettet, destillert fra
> `EKSAMENSANALYSE.md` (40 oppgavesett V2017–H2025, 8 sensorveiledninger H2021 og
> 2024–2025). Alle oppgaver, case, sitatlignende passasjer og formuleringer i boka
> skal være NYSKREVNE (se del 6).

---

## 1. Bokens identitet

- **Kurs-id:** `exphil03`
- **Tittel:** *Examen philosophicum — eksamensrettet lærebok (EXPHIL03, UiO)*
- **Level:** `'Høyskole'`
- **Arketype:** drøfting (DNA-drofting.md) — ren, ingen lånte elementer fra andre
  arketyper
- **Kapittelantall:** 30 (Del 0: 2 · temadeler Vite/Være/Gjøre: 19 · eksamenstrening: 9)
- **Estimert totaltid:** ~1 605 minutter (~27 timer) fordelt per kapittel under
- **Quiz totalt:** 582 (krav ≥500) · **Flashcards totalt:** 551 (krav ≥500)

**Pitch:** EXPHIL03-eksamen har siden 2023 hatt én fast logikk: du velger én av to
oppgaver, der delspørsmål (a) og (b) tester presis pensumkunnskap fra navngitte
kapitler i «Vite, være, gjøre» (VVG), og siste del tester selvstendig drøfting —
med eksplisitt sensorbonus for å gjenbruke egne redegjørelser i drøftingen. Sensor
skiller karakterene på to akser: **vurderingsevne** og **selvstendighet**, og
C-porten er **jevnhet** — én sterk og én blank del holder ikke. Denne boka er
bygget baklengs fra de kravene: hver tenker leveres som trinnvis
argumentrekonstruksjon med tekstens egne eksempler, standardinnvendinger med svar,
sammenligningskart mot de faste kontrastfigurene, og sitattrening (den dominerende
oppgavetypen 2021→). Eksamenstreningsdelen driller alle sjangrene og viser A- og
C-besvarelser av samme oppgave — der forskjellen ligger nøyaktig i drøftingskvalitet
og (a)/(b)→(c)-kobling.

**Kalibreringsregel (ufravikelig):** Boka kalibreres 100 % mot pensumregimet fra
V2021 — «Vite, være, gjøre»-galleriet. Hume, Beauvoir, Singer, Smart, Fried,
Hursthouse, Feldman og Heisenberg er UTE av pensum og gir null uttelling (dokumentert
fellekilde, feil #14). De skal ikke brukes som pensumankere noe sted i boka; maks én
kort historisk fotnote i kap. 0.1 som eksplisitt advarsel.

---

## 2. Makrostruktur

Følger DNA-drøfting-malen: Del 0 (eksamenskart + drøftingshåndverk) → temadeler
etter VVG-tredelingen Vite/Være/Gjøre (som også er eksamens A/B/C-struktur fra
H2025), med filosof-klynger sortert etter frekvens innenfor hver del →
eksamenstrening (sjangerkapitler + modellbesvarelser).

| Del | Tittel | Kap. | Begrunnelse for omfang (fra analysen §2/§7) |
|---|---|---|---|
| 0 | Eksamenskart og drøftingshåndverk | 2 | DNA-obligatorisk. Delspørsmålslogikken, femkravsaksen og jevnhetsregelen må etableres FØR fagstoffet. |
| 1 | Vite — kunnskap og vitenskap | 5 | Wikforss 8/24, Descartes (Vite-siden) 7/24, Sokrates 7/24 (Platon-score), Kant-opplysning inngår i Kant 9/24; Lakatos 4–5/24. «Kunnskap og demokrati»-drøftingen (6+ sett) går på tvers av hele delen. |
| 2 | Være — virkelighet, sinn og kjønn | 6 | Aristoteles' metafysikk (del av 10/24), Haslanger 6/24, Elisabeth av Böhmen stigende (2 av 3 siste sett), evolusjon-vs.-teleologi tre sett på rad 2023–2024, Kant/Einstein fast Være-alternativ. |
| 3 | Gjøre — etikk | 8 | Tyngdepunktet: minst én av de tre normative teoriene står i 19 av 24 sett; Mill 10/24, Kant-etikk (del av 9/24), Aristoteles-etikk (del av 10/24), Locke 6/24, Held 5/24, Foot 4/24 stigende, Sylvan 4/24, Velleman 2/24 ny gjenganger. |
| 4 | Eksamenstrening | 9 | 6 sjangerkapitler (dekker alle gjeldende oppgavetyper + semesteroppgaven + feilvaksine) + 3 modellbesvarelser (DNA-krav ≥3). |

Rasjonale for fordelingen: ⭐⭐⭐-temaene (Mill, Aristoteles, Kant, Wikforss,
Descartes, Platon/Sokrates, Locke, Haslanger) får egne kapitler med høyest kvote;
⭐⭐-temaer (Held, Lakatos, Foot, Velleman, Sylvan, Dawkins/Street, Benatar,
Elisabeth) får eget eller delt kapittel; ⭐-temaer (Jaggar, Appiah, Einstein,
Galileo, Frankfurt/bullshit) dekkes kompakt inne i beslektede kapitler og merkes
«bør kjenne til». Gammelt pensum (2017–2020) får INGEN kapitler.

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart og drøftingshåndverk |
| 1 | Vite — kunnskap og vitenskap |
| 2 | Være — virkelighet, sinn og kjønn |
| 3 | Gjøre — etikk |
| 4 | Eksamenstrening |

### Sjangerkoder (brukes i eksamensbelegg under)

Fra analysen §3: **S1** redegjør for X (kunnskapsdel a/b) · **S2** sitat-tolkning
(a/b med utdrag — dominerende 2021→) · **S3** sammenlign to tenkere · **S4**
drøftingsdelen (c/d) · **S5** anvend teori på case/tankeeksperiment · **S6**
kortsvar (utgått format H2017–V2018 — brukes som quiz-/flashcardmal) · **S7**
semesteroppgaven (seminarvarianten, 800–1000 ord).

### Feilkoder (brukes i «Typiske feil» under — fra analysen §5)

#1 gjenfortelling uten drøfting · #2 mening uten grunner · #3 leksikonsvar
(utenompensum-generalia — eksplisitt nullet) · #4 hoppe over delspørsmål (bryter
jevnhetsregelen) · #5 ikke koble drøftingen til (a)/(b) · #6 upresise begreper
(kategorisk/hypotetisk imperativ, handling/regel, sex/gender, skeptisisme/
fallibilisme, Aristoteles-årsak ≠ moderne kausalitet) · #7 tolke sitatet løsrevet
fra tekstens overordnede argument · #8 ensidig drøfting uten innvendinger ·
#9 ubalanse kunnskap/analyse (begge må være «god» for C) · #10 formalfeil i
semesteroppgaven (ordgrense, litteraturliste, stedfestet henvisning → F) ·
#11 klipp-og-lim/sitatslurv (behandles som fusk) · #12 svare på begge valgfrie
oppgaver i stedet for én grundig · #13 ignorere tankeeksperimentets premisser ·
#14 gammelt pensum-spøkelse (Hume, Singer, Smart, Fried m.fl. etter 2021).

### Utgave-sensitivitet

Alle koblinger til VVG-kapittelnumre og sidetall er attestert i eksamenssett/
sensorveiledninger 2021–2025 og merkes ⚠ i pensumkart-blokkene: begrepene er
stabile, men kapittel-/sidetall kan flytte seg ved ny VVG-utgave. Forfatteren skal
ALDRI oppgi sidetall utover dem dette skjelettet attesterer.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = sett-forekomster 2021→ (V/H + s=selvstudium,
> sem=seminar, u=utsatt) + sjangerkoder + prioritetsklasse (perfekt / kunne /
> kjenne, fra analysen §7). **Kvote** = quiz/flashcards.

### Del 0 — Eksamenskart og drøftingshåndverk

#### Kapittel 0.1: Slik testes EXPHIL03
**id:** `exphil03-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Eksamensformene (begge varianter), delspørsmålslogikken,
  temafrekvensen og gjenbruksmønstrene — og hvordan boka brukes mot eksamen.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet (40 sett 2017–2025).
  Skal formidle: (a) **Selvstudiumsvarianten:** 4 t digital skoleeksamen (Inspera),
  ingen hjelpemidler; V2023–V2025: én av to store oppgaver med tre–fire
  obligatoriske deler (a–c/a–d) der de første delene er kunnskapsspørsmål forankret
  i navngitte VVG-kapitler og siste del er selvstendig drøfting; H2025: tre deler
  A (Vite), B (Være), C (Gjøre) som speiler lærebokas tredeling, én av to oppgaver
  per del. (b) **Seminarvarianten:** semesteroppgave 800–1000 ord (argumenterende
  tekst om etikk-tema, krav til referanser og litteraturliste) + digital
  hjemmeeksamen 2–2,5 t med alle hjelpemidler, samme a–c-struktur som skoleeksamen
  fra V2023; begge komponenter må bestås hver for seg; semesteroppgaven tillegges
  mest vekt (H2021: ca. 60/40). (c) **Strukturelle konstanter:** tredelingen
  Vite/Være/Gjøre styrer alle sett; (a)/(b) tester kunnskap, siste del drøfting,
  med sensorbonus for gjenbruk; sitat fra VVG med sidetall som springbrett er
  dominerende oppgavetype 2021→; oppgavegjenbruk på tvers av semestre er normen
  (Foot-oppgaven H2023→V2024 nesten ordrett; Dawkins/teleologi tre sett på rad;
  Locke-triaden fire sett; Sokrates-kritikken V2025→H2025 identisk delspørsmål;
  Wikforss-vilkårene minst 6 varianter 2022–2025). (d) **Temafrekvens-tabellen**
  (24 sett 2021→): Mill 10 · Aristoteles 10 · Kant 9 · Wikforss 8 · Descartes 7 ·
  Platon/Sokrates 7 · Locke 6 · Haslanger 6 · Held 5 · Lakatos 4–5 · Foot 4
  (stigende) · Sylvan 4 · Dawkins/Street 3 (stigende) · Benatar 3 · Jaggar 2–3 ·
  Velleman 2 (ny gjenganger) · Elisabeth 2 (ny gjenganger) · Appiah 2 · Einstein
  1–2. (e) **Pensumskiftet V2021:** VVG er eneste pensum; gammelt galleri (Hume,
  Beauvoir, Singer, Smart, Fried, Hursthouse, Feldman, Heisenberg) gir null
  uttelling — bokas eneste omtale av dem er denne advarselen. Prioritet: perfekt
  (metanivå).
- **Begrepskontrakt:** ingen fagbegreper — men presise beskrivelser av sjangrene
  S1–S7 med typisk plassering (a/b vs. c/d) og tidsbudsjett (a/b: 15–25 min per
  del; drøftingsdel: 30–45 min).
- **Drøftingsakser:** ingen (kartkapittel).
- **Case-forslag:** «Slik leser du et oppgavesett»-gjennomgang av ett nyskrevet
  eksempelsett i H2025-format (tre deler, én av to per del) + ett i a–d-format.
- **Typiske feil:** #12 svare på begge valgfrie oppgaver; #4 hoppe over
  delspørsmål; #14 gammelt pensum-spøkelse.
- **Kvote:** 10 quiz / 10 flashcards (eksamensform-fakta, sjangergjenkjenning,
  hvem-er-ute-av-pensum).

#### Kapittel 0.2: Drøftingshåndverket og sensorens fem krav
**id:** `exphil03-0-2` · **number:** 0.2 · **estimatedMinutes:** 60 · **prerequisites:** `exphil03-0-1`

- **Kapitteltype:** essayhåndverk.
- **Description:** Hvordan en filosofisk drøftingsbesvarelse bygges, og hva som
  faktisk skiller A, C og E ifølge sensorveiledningene 2021–2025.
- **Eksamensbelegg:** Destillat av sensorkravene (analysen §4) — standardiserte og
  konsistente 2024–2025, forankret bakover i H2021. Prioritet: perfekt. Skal
  operasjonalisere: (a) **IFIKKs fem karakterkrav:** Kunnskap, Forståelse og
  analyse, Relevans, Etterrettelighet, Struktur og språkføring — de to første veier
  mest, og sensor minnes på at kandidatene er førsteårsstudenter. (b) **Terskler:**
  E/D = minimum på Kunnskap og Forståelse/analyse, noe riktig på minst ett
  kunnskapsdelspørsmål; **C-porten = jevnhet** — «god» på Kunnskap OG
  Forståelse/analyse i ALLE delspørsmål, jevnt god argumentasjon og kritisk
  refleksjon (én sterk og én blank del holder ikke); A/B = svært god vurderingsevne
  og stor selvstendighet — utmerker seg i å *behandle* stoffet (drøfte), ikke bare
  gjengi det, yter posisjonene rettferdighet i sammenhengende diskusjon.
  (c) **Firepunktslisten for drøftingsdelen** (fast 2024–2025): argumenter for
  og/eller mot påstanden; kritisk vurdering av disse; kobling til relevante
  pensumtekster; selvstendig refleksjon som understøtter egen tolkning.
  (d) **Gjenbruksbonusen:** poenger fra (a)/(b) inn i drøftingen nevnes som fordel
  i samtlige veiledninger 2024–2025. (e) **Det som nulles:** generisk
  oppslagsverk-kunnskap med lav relevans (står i hver eneste veiledning 2024–2025);
  kunnskap uten drøfting eller drøfting uten kunnskap stopper på D/E. (f) Gyldig
  forankring er BÅDE VVG-innledningskapitlene og originaltekstene.
- **Begrepskontrakt:** besvarelsesarkitektur for a–c/a–d-formatet: plasser tenker
  og tekst → rekonstruer argument trinnvis (premisser → konklusjon) → illustrer med
  tekstens eget eksempel → i drøftingsdelen: ta stilling tidlig, beste argument
  for (pensumforankret + koblet til egen (a)/(b)), beste innvending mot (gjerne fra
  annen pensumtenker), veiing (ikke bare listing), konklusjon med forbehold.
  Tidsbudsjett-modeller for 4-timerseksamen (a–d) og for H2025-formatet (tre deler
  à ~75 min). «Forankring uten avsender er C-stoff» og «gjengivelse uten drøfting
  er D-stoff» innføres som bokas mantraer.
- **Drøftingsakser:** redegjørelse vs. drøfting som ulike ferdigheter; «vise alt du
  kan» vs. «svare på spørsmålet» (relevanskravet).
- **Case-forslag:** Samme korte drøftingsspørsmål («Er kunnskap alltid verdifullt?
  Drøft med utgangspunkt i én pensumtenker») besvart tre ganger — E-versjon (ren
  mening uten grunner), C-versjon (korrekt gjengivelse, tynn drøfting), A-versjon
  (stillingtagen, innvending, veiing, pensumforankring) — med margkommentarer.
- **Typiske feil:** #1 gjenfortelling uten drøfting; #2 mening uten grunner;
  #9 ubalanse kunnskap/analyse; #5 drøfting som starter «på nytt» uten kobling.
- **Kvote:** 15 quiz / 10 flashcards (nivåkjennetegn, femkravene, firepunktslisten,
  tersklene).

### Del 1 — Vite: kunnskap og vitenskap

#### Kapittel 1.1: Descartes — metodisk tvil, skeptisk argument og cogito
**id:** `exphil03-1-1` · **number:** 1.1 · **estimatedMinutes:** 70 · **prerequisites:** `exphil03-0-2`

- **Kapitteltype:** tema.
- **Description:** Tvilens metode fra sansebedrag til ond ånd, og hvorfor cogito
  overlever alt — emnets hyppigste enkelttekst i sitatoppgaver.
- **Eksamensbelegg:** 7/24: H21s, H22sem, V23s, V25s, V25u, H25s (×2 alternativer)
  + ressurstekst i H22s. Descartes' åpning av Første meditasjon er blant de
  typiske sitatkildene (S2). Sjangre: S1, S2, S3 (mot Wikforss' fallibilisme,
  mot Elisabeth i Del 2), S4. Prioritet: **perfekt** (§7 pkt. 2 —
  Descartes-komplekset dekker både Vite- og Være-oppgaver).
- **Begrepskontrakt:** VVG kap. 1 ⚠, **Descartes, *Meditasjoner over filosofiens
  grunnlag* (1.–2. meditasjon)**: metodisk tvil (riv grunnmuren, ikke hvert enkelt
  hus); sansebedrag; drømmeargumentet; den onde ånd som maksimal tvilshypotese;
  det skeptiske argumentet trinnvis rekonstruert; cogito («jeg er, jeg
  eksisterer») som arkimedisk punkt; sikker kunnskap som mål; res cogitans
  (tenkende ting — full dualisme-behandling utsettes til kap. 2.4 med eksplisitt
  fremoverpeker). Rekkefølgen sansebedrag → drøm → ond ånd → cogito skal drilles
  som trinnstruktur (S1-toppsvarets skjelett).
- **Drøftingsakser:** er den metodiske tvilen selvunderminerende (tviler tvileren
  på fornuften den tviler med)?; hvor mye kan cogito faktisk bære — er det
  arkimediske punktet et fundament eller en blindvei?; må kunnskap være sikker
  (springbrett til Wikforss' fallibilisme i kap. 1.3 — den faste
  kontrastdrøftingen)?
- **Case-forslag:** (1) Nyskrevet sitatlignende passasje i Descartes' stil om
  tvilens omfang → tolkningsøvelse etter S2-oppskriften; (2) «kan du vite at du
  ikke er i en simulering?» — moderne drakt på drømmeargumentet, med drøfting av
  hva som skiller det fra ond ånd-hypotesen.
- **Typiske feil:** #6 blande skeptisisme (kunnskap er umulig) med Descartes'
  prosjekt (tvil som metode FOR sikker kunnskap); #7 tolke cogito-sitatet løsrevet
  fra tvilstrappen; #3 biografi- og epokestoff om Descartes (nulles).
- **Kvote:** 30 quiz / 30 flashcards (tvilstrinnene i rekkefølge,
  begrep↔Meditasjonene, hva ond ånd-hypotesen gjør som drømmen ikke gjør).

#### Kapittel 1.2: Sokrates i Forsvarstalen — visdom, kritikk og bullshit
**id:** `exphil03-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `exphil03-0-2`

- **Kapitteltype:** tema.
- **Description:** Sokrates' undersøkelse av politikere, diktere og håndverkere,
  den sokratiske visdommen — og innledningskapitlets bullshit-begrep.
- **Eksamensbelegg:** Forsvarstalen-spesifikt: H21sem (metoden + bullshit), H22u
  (sokratisk visdom), H24sem (Platon-triaden), V25sem, H25s — merk dokumentert
  gjenbruk: kritikken av de tre gruppene var identisk delspørsmål V2025 seminar →
  H2025 selvstudium. Sjangre: S1, S2, S4 (særlig
  kunnskap-og-demokrati-drøftinger på tvers med Wikforss og Kant — 6+ sett).
  Prioritet: **perfekt** (§7 pkt. 4).
- **Begrepskontrakt:** VVG kap. 5 ⚠, **Platon, *Forsvarstalen***: orakelet i Delfi
  og Sokrates' test av det; kritikken av politikerne (tror de vet, vet ikke),
  dikterne (skaper i inspirasjon, ikke innsikt) og håndverkerne (ekte fagkunnskap,
  men overvurderer dens rekkevidde); sokratisk visdom («vet at jeg ikke vet»);
  epistemisk kritikk som filosofisk virksomhet. Fra innledningskapitlet «Bullshit,
  politikk og uvitenhet» ⚠ (Frankfurt-tema, 1/24 — «bør kjenne til»): skillet
  bullshit vs. løgn (løgneren bryr seg om sannheten, bullshitteren er likegyldig
  til den) og koblingen til Sokrates' diagnose av skinnkunnskap.
- **Drøftingsakser:** er sokratisk visdom en reell innsikt eller retorisk
  posering?; hvem truer kunnskapssamfunnet mest — de som tror de vet (politikerne),
  de som ikke bryr seg om sannhet (bullshitteren) eller de som vet men overskrider
  sitt felt (håndverkerne/ekspertene)?; Sokrates' metode som modell for kritisk
  offentlighet (kobling fremover til Kant kap. 1.4 og Wikforss kap. 1.3).
- **Case-forslag:** «Influenser-eksperten»: en treningsprofil som uttaler seg om
  ernæring, medisin og økonomi — hvilken av Sokrates' tre grupper ligner det mest,
  og er det løgn eller bullshit i Frankfurts forstand?
- **Typiske feil:** #3 rettsaken-mot-Sokrates-historie uten kobling til det
  epistemiske poenget; #6 fremstille sokratisk visdom som generell skeptisisme;
  #7 tolke visdoms-passasjen uten orakel-konteksten.
- **Kvote:** 25 quiz / 25 flashcards (de tre gruppene og deres feil, visdom-
  formelen, bullshit vs. løgn).

#### Kapittel 1.3: Wikforss — kunnskapens vilkår og kunnskapsresistens
**id:** `exphil03-1-3` · **number:** 1.3 · **estimatedMinutes:** 65 · **prerequisites:** `exphil03-1-1`

- **Kapitteltype:** tema.
- **Description:** Hva kunnskap er (tre vilkår), hvorfor feilbarlighet ikke er
  skeptisisme, og hvorfor kunnskap er motstandsdyktig mot fakta — emnets hyppigste
  samtidsfilosof.
- **Eksamensbelegg:** 8/24: H22s, V22sem, V23s (×2 delspørsmål), H23sem, V25s,
  V25sem, H25s — minst 6 varianter av samme vilkår/resistens-spørsmål 2022–2025
  (dokumentert gjenbruk: treningsgull). Sjangre: S1, S2, S3 (fallibilisme vs.
  Descartes' krav om sikkerhet — fast par), S4 (kunnskap og demokrati). Prioritet:
  **perfekt** (§7 pkt. 3).
- **Begrepskontrakt:** VVG kap. 4 ⚠, **Åsa Wikforss, *Kunnskapsresistens***:
  kunnskapens tre vilkår — overbevisning, sannhet, gode grunner/evidens (hvert
  vilkår med motiverende moteksempel: hvorfor sann gjetning ikke er kunnskap);
  fallibilisme (vi kan ta feil, men vet likevel) vs. skeptisisme (vi vet ingenting)
  — det eksamenskritiske skillet; to typer evidensresistens; kunnskapens
  instrumentelle verdi (for individ og demokrati).
- **Drøftingsakser:** er «gode grunner» nok, eller kreves sikkerhet (Wikforss mot
  Descartes)?; kunnskapsresistens som samfunnsproblem — hva truer demokratiet
  mest, og hjelper mer informasjon (kobling til Sokrates kap. 1.2 og Kant kap.
  1.4)?; kan resistens ramme også «vår side» (symmetri-drøftingen som løfter til A)?
- **Case-forslag:** Vaksineskepsis-lignende, nyskrevet case («foreldregruppe
  avviser målinger av mobilstråling»): analyser med de tre vilkårene og de to
  resistens-typene; drøft hvilke mottiltak Wikforss' analyse peker mot.
- **Typiske feil:** #6 blande fallibilisme og skeptisisme (den hyppigste
  presisjonsfeilen i Vite-oppgaver); #6-variant: gjøre «gode grunner» til
  «bevis»; #1 gjengi de tre vilkårene uten å bruke dem i drøftingen.
- **Kvote:** 30 quiz / 30 flashcards (vilkårene med moteksempler,
  fallibilisme/skeptisisme-skillet, resistens-typene, begrep↔Wikforss).

#### Kapittel 1.4: Kant — Hva er opplysning?
**id:** `exphil03-1-4` · **number:** 1.4 · **estimatedMinutes:** 45 · **prerequisites:** `exphil03-1-3`

- **Kapitteltype:** tema.
- **Description:** Selvforskyldt umyndighet, motet til å tenke selv, og skillet
  offentlig/privat fornuftsbruk — Vite-delens Kant.
- **Eksamensbelegg:** Del av Kant 9/24; opplysningstekst-spesifikt: V22sem (med
  Wikforss), H23sem (Kant-opplysning/Wikforss/kunnskapens verdi). Kant om
  selvforskyldt umyndighet er typisk sitatkilde (S2). Sjangre: S1, S2, S4
  (kobles til Wikforss i «tenke selv»-drøftinger). Prioritet: kunne
  (§7 pkt. 10 — høy sannsynlighet, differensierer).
- **Begrepskontrakt:** VVG kap. 1 ⚠, **Kant, *Hva er opplysning?***: opplysning som
  utgang fra selvforskyldt umyndighet; latskap og feighet som årsaker; sapere aude
  («våg å vite») som opplysningens valgspråk; formyndere; offentlig fornuftsbruk
  (som lærd overfor publikum — skal være fri) vs. privat fornuftsbruk (i embete/
  rolle — kan begrenses); ytringsfrihetens rolle for opplysningsprosessen.
- **Drøftingsakser:** er umyndigheten virkelig *selvforskyldt* — hva med
  strukturell informasjonsulikhet?; holder skillet offentlig/privat fornuftsbruk i
  sosiale mediers tid (er en lærers Facebook-post offentlig eller privat
  fornuftsbruk)?; Kant-opplysning + Wikforss-resistens som samlet diagnose av
  kunnskapssamfunnet (den faste tverrdrøftingen).
- **Case-forslag:** En kommunalt ansatt sykepleier som offentlig kritiserer
  helsepolitikken hun selv må sette ut i livet — sorter med Kants skille, og drøft
  om skillet beskytter eller kveler kritikk.
- **Typiske feil:** #6 snu offentlig/privat-skillet på hodet (vanlig intuisjon:
  «privat = hjemme» — Kants bruk er rollebasert); #3 opplysningstiden som epoke
  i stedet for Kants argument; #14 trekke inn Hume om fornuft (ute av pensum).
- **Kvote:** 20 quiz / 20 flashcards (umyndighet-definisjonen, skillet
  offentlig/privat med eksempler, sapere aude).

#### Kapittel 1.5: Vitenskap og pseudovitenskap — Lakatos, Galileo og Jaggar
**id:** `exphil03-1-5` · **number:** 1.5 · **estimatedMinutes:** 55 · **prerequisites:** `exphil03-1-3`

- **Kapitteltype:** tema.
- **Description:** Lakatos' demarkasjonskriterium og forskningsprogrammer, med to
  «bør kjenne til»-satellitter: teoriavhengig observasjon (Galileo) og emosjoner i
  epistemologien (Jaggar).
- **Eksamensbelegg:** Lakatos 4–5/24: V21s, H21sem, V22sem (med strengteori-case),
  V23sem (+ ressurstekst H22sem); Lakatos om progressive programmer er typisk
  sitatkilde (S2). Galileo 1/24: H22sem (solflekk-tolkning). Jaggar 2–3/24:
  H22sem, V23sem (+ V21sem KI/følelser-oppgaven); Jaggar-tekst attestert s. 141 ⚠.
  Lakatos attestert s. 69–70 ⚠. Sjangre: S1, S2, S5 (anvend demarkasjonskriteriet
  på ny case — strengteori-typen). Prioritet: Lakatos kunne (§7 pkt. 11);
  Galileo/Jaggar kjenne (§7 pkt. 15) — dekkes ETTER Lakatos-stoffet og merkes
  «bør kjenne til».
- **Begrepskontrakt:** **Imre Lakatos, *Vitenskap og pseudovitenskap*** (VVG,
  vitenskapsfilosofi-delen ⚠): forskningsprogrammer som vurderingsenhet (ikke
  enkelthypoteser); hard kjerne og beskyttelsesbelte; progressive vs. degenererte
  programmer; nye, dristige forutsigelser som demarkasjonskriterium; hvorfor
  «bekreftelser» alene ikke skiller vitenskap fra pseudovitenskap.
  **Galileo**-stoffet ⚠ (via H2022): observasjon som teoriavhengig — tolkning av
  solflekk-observasjoner. **Alison Jaggar, *Kjærlighet og kunnskap: Emosjoner i
  feministisk epistemologi*** ⚠: emosjoner virker på dypt nivå i all observasjon;
  myten om den lidenskapsløse forskeren; emosjoner som både fremmer og hindrer
  kunnskap.
- **Drøftingsakser:** kan et degenerert program friskmeldes — når skal man gi opp
  en teori?; er demarkasjonsproblemet løsbart, eller flytter Lakatos bare grensen?;
  Jaggar mot idealet om verdifri vitenskap — styrker eller truer emosjoner
  objektiviteten (kobling til KI-casen: kan noe uten følelser vite)?
- **Case-forslag:** (1) Nyskrevet «horoskop-app med maskinlæring» vurdert med
  Lakatos' kriterium (redder ad hoc-justeringer programmet?); (2) strengteori-
  lignende case: matematisk elegant teori uten nye testbare forutsigelser —
  progressiv eller degenerert?
- **Typiske feil:** #6 gjøre Lakatos til enkel falsifikasjonisme (poenget er
  programmer over tid, ikke enkeltmotbevis); #3 vitenskapshistorie-generalia;
  #1 gjengi kjernebegrepene uten å anvende dem på casen (S5 krever anvendelse).
- **Kvote:** 25 quiz / 25 flashcards (kjerne/belte, progressiv/degenerert,
  demarkasjonskriteriet, Jaggar-tesen, teoriavhengig observasjon).

### Del 2 — Være: virkelighet, sinn og kjønn

#### Kapittel 2.1: Platon — Menon, Faidon og idélæren
**id:** `exphil03-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `exphil03-1-2`

- **Kapitteltype:** tema.
- **Description:** Menons paradoks og gjenerindringslæren, slavegutt-eksemplet, og
  idélæren i Faidon — Platons svar på hva virkeligheten og kunnskapen er.
- **Eksamensbelegg:** Del av Platon 7/24; Menon/Faidon-spesifikt: V22s (Faidon),
  H21u (Menon/Faidon), H24sem (Platon-triaden: Forsvarstalen + Menon + Faidon).
  Sjangre: S1, S2, S3 (Platon vs. Aristoteles om virkelighet og kunnskap — fast
  par, dekkes i kap. 2.2). Prioritet: **perfekt** (§7 pkt. 4 — «Platon/Sokrates i
  tre tekster»).
- **Begrepskontrakt:** **Platon, *Menon*** ⚠: Menons paradoks (hvordan kan man søke
  det man ikke kjenner — man vet ikke hva man leter etter; kjenner man det, trenger
  man ikke lete); gjenerindringslæren (anamnesis) som svar; slavegutt-eksemplet
  (geometri: gutten «henter frem» innsikt han aldri er lært — tekstens eget
  eksempel, obligatorisk i S1-toppsvar). **Platon, *Faidon*** ⚠: idélæren («det
  skjønne selv» — ideene som evige, uforanderlige forbilder); delaktighet
  (sansetingene er skjønne ved å ha del i det skjønne selv); «det like» og
  forhåndsviten (vi bedømmer pinner som like ved en målestokk sansene aldri ga
  oss); kunnskap som sjelens gjenerindring av ideene.
- **Drøftingsakser:** løser gjenerindringslæren faktisk Menons paradoks, eller
  flytter den bare problemet (hvordan fikk sjelen kunnskapen først)?; trenger vi
  ideene — kan erfaring og abstraksjon forklare «det like» (empiristisk
  innvending)?; hva slags eksistens har ideene (springbrett til kontrasten mot
  Aristoteles' former-i-tingene i kap. 2.2)?
- **Case-forslag:** Matematikk-læringscase: en elev «ser» plutselig hvorfor
  Pytagoras' setning må stemme — oppdagelse eller gjenerindring? Brukes til å
  rekonstruere slavegutt-poenget uten å gjengi Platons dialog.
- **Typiske feil:** #7 gjengi slavegutt-scenen uten funksjonen (den er *belegg*
  for gjenerindring som svar på paradokset); #6 fremstille ideene som tanker i
  hodet (de er selvstendig eksisterende); #3 hulelignelsen og Staten-stoff som
  ikke er pensumtekstene det spørres fra.
- **Kvote:** 25 quiz / 25 flashcards (paradoksets to horn, anamnesis,
  delaktighet, tekst↔poeng-koblinger Menon/Faidon).

#### Kapittel 2.2: Aristoteles — substans, de fire årsakene og teleologien
**id:** `exphil03-2-2` · **number:** 2.2 · **estimatedMinutes:** 70 · **prerequisites:** `exphil03-2-1`

- **Kapitteltype:** tema.
- **Description:** Form og stoff, de fire årsakene og det teleologiske
  verdenssynet — pluss det faste sammenligningskartet mot Platon.
- **Eksamensbelegg:** Metafysikk-siden av Aristoteles 10/24: V21s (årsakene),
  V21sem (årsakene + kritikk), H22s (teleologi), H23s og H24s (teleologi mot
  Dawkins — se kap. 2.3), H23sem. Sjangre: S1, S2, S3 (mot Platon: virkelighetssyn
  og kunnskapssyn), S5 (anvend firårsaks-skjemaet på hverdagsting). Prioritet:
  **perfekt** (§7 pkt. 5).
- **Begrepskontrakt:** VVG Aristoteles-kapitlene (Være) ⚠: substans (det
  selvstendig eksisterende enkeltværende); form og stoff (hylemorfisme — formen er
  i tingen, ikke i en idéverden); de fire årsakene med bil-eksemplet (tekstens
  eget): stoffårsak (metallet), formårsak (konstruksjonen), virkeårsak
  (produsenten), formålsårsak (transport); teleologisk verdenssyn (naturting har
  iboende formål — eikenøtten er rettet mot eiketreet); klassifisering av levende
  vesener. Eksplisitt presisering (attestert i oppgavetekst): Aristoteles' «årsak»
  (aitia) er svar på «hvorfor»-spørsmål i bred forstand — IKKE moderne
  årsak–virkning-kausalitet.
- **Drøftingsakser:** Platon vs. Aristoteles — hvor er formene (idéverden vs. i
  tingene), og hva er kunnskapens kilde (gjenerindring vs. erfaring/undersøkelse
  av naturen)?; er formålsforklaringer legitime i naturvitenskap, eller kun for
  artefakter?; hvilke «hvorfor»-spørsmål besvarer moderne fysikk IKKE (formåls-
  årsakens eventuelle restverdi) — ruster studenten for evolusjonsdrøftingen i 2.3.
- **Case-forslag:** Firårsaks-analyse av (1) en kaffekopp og (2) et hjerte — vis
  at skjemaet er intuitivt for artefakter og omstridt for naturting; det er
  nøyaktig den kontrasten eksamensdrøftingene utnytter.
- **Typiske feil:** #6 lese «årsak» som moderne kausalitet (eksplisitt advart mot
  i oppgavetekst); #6-variant: plassere Aristoteles' former i en idéverden
  (platonisering); #4 hoppe over ett av de fire årsaks-leddene i redegjørelsen.
- **Kvote:** 30 quiz / 30 flashcards (de fire årsakene med eksempler, form/stoff,
  substans, Platon↔Aristoteles-kontrastkart).

#### Kapittel 2.3: Evolusjon mot teleologi og moral — Dawkins og Street
**id:** `exphil03-2-3` · **number:** 2.3 · **estimatedMinutes:** 45 · **prerequisites:** `exphil03-2-2`

- **Kapitteltype:** tema.
- **Description:** Tilbakeviser naturlig utvalg Aristoteles' teleologi? Og
  undergraver evolusjonsopphavet moralens objektivitet? Den nyeste faste
  drøftingskombinasjonen.
- **Eksamensbelegg:** 3/24, ALLE 2023→: H23s, V24sem, H24s — dokumentert gjenbruk
  tre sett på rad («Dawkins + evolusjon tilbakeviser Aristoteles' teleologi» +
  Street-drøfting). Street attestert s. 445 ⚠; Street om evolusjonsformede verdier
  er typisk sitatkilde (S2). Sjangre: S1, S2, S4 (moralens objektivitet gitt
  evolusjon — relativisme-drøftingen). Prioritet: kunne, stigende (§7 pkt. 13) —
  behandles som sannsynlig eksamenstema.
- **Begrepskontrakt:** **Richard Dawkins** (VVG evolusjonstekst ⚠): genenes rolle i
  naturlig utvalg; tilsynelatende design forklart uten formål (variasjon +
  seleksjon); hvorfor evolusjonsforklaringen utfordrer formålsårsaken i naturen.
  **Sharon Street** (VVG, s. 445 attestert ⚠): evolusjonær «debunking» av
  moralske verdioppfatninger — evolusjonen har formet hvilke verdier vi har, og
  seleksjon sporer overlevelse, ikke moralsk sannhet; dilemmaet for moralsk
  realisme; hva dette betyr for moralens objektivitet (relativisme-spørsmålet).
- **Drøftingsakser:** eliminerer naturlig utvalg formålsforklaringen, eller
  *forklarer* den bare formålsrettetheten på et dypere nivå (kan aristotelikeren
  svare)?; hvis verdiene våre er evolusjonsprodukter — følger det at de er
  usanne, eller bare at opphavet er upålitelig (skillet genese/gyldighet er
  A-differensiator)?; fører Street-argumentet til relativisme, skeptisisme eller
  bare ydmykhet?
- **Case-forslag:** Omsorg for eget avkom som testverdi: evolusjonsforklaringen
  er åpenbar — gjør det omsorgsnormen mindre gyldig? Drilles etter S4-strukturen
  med eksplisitt (a)/(b)-gjenbruk (Dawkins-redegjørelsen inn i Street-drøftingen).
- **Typiske feil:** #6 blande «evolusjonen forklarer verdien» med «evolusjonen
  rettferdiggjør verdien» (er/bør-glidning — uten å påkalle Hume, som er ute av
  pensum); #1 gjengi Dawkins uten å ta stilling til teleologi-spørsmålet;
  #5 ikke bruke Dawkins-delen i Street-drøftingen (bonusen ligger der).
- **Kvote:** 20 quiz / 20 flashcards (naturlig utvalg-mekanismen,
  debunking-argumentets premisser, genese/gyldighet-skillet).

#### Kapittel 2.4: Sinn og kropp — Descartes' dualisme og Elisabeths innvending
**id:** `exphil03-2-4` · **number:** 2.4 · **estimatedMinutes:** 55 · **prerequisites:** `exphil03-1-1`

- **Kapitteltype:** tema.
- **Description:** Substansdualismen, interaksjonsproblemet fra Elisabeth av
  Böhmen, og KI-bevissthet som moderne anvendelse.
- **Eksamensbelegg:** Descartes' Være-side (del av 7/24): H22sem (sinn–hjerne +
  KI), V25u og H25s (Descartes/Elisabeth — Elisabeth 2/24, begge i de tre siste
  settene: ny fast innvendingsmakker); V21sem (KI uten følelser). Sjangre: S1, S2,
  S3 (Descartes vs. Elisabeth — klassisk par i arkivet), S4/S5 (KI-casen).
  Prioritet: **perfekt** (§7 pkt. 2 — Descartes-komplekset; Elisabeth eksplisitt
  utpekt som stigende).
- **Begrepskontrakt:** **Descartes** (VVG kap. 1/Meditasjonene ⚠): res cogitans
  (tenkende, uutstrakt substans) vs. res extensa (utstrakt, ikke-tenkende);
  substansdualisme; argumentet fra tvilbarhet (kroppen kan betviles, tanken ikke);
  sinn–hjerne-forholdet. VVG kap. 9 ⚠, **Elisabeth av Böhmen** (brevvekslingen med
  Descartes): interaksjonsproblemet — hvordan kan en uutstrakt substans sette en
  utstrakt kropp i bevegelse, når påvirkning ser ut til å kreve kontakt og
  utstrekning?; Elisabeths insistering på at Descartes' svar (foreningen av sjel
  og legeme) ikke forklarer mekanismen.
- **Drøftingsakser:** kan dualisten svare Elisabeth uten å oppgi en av
  substansenes definisjon?; er interaksjonsproblemet et argument FOR fysikalisme,
  eller bare mot Descartes' variant?; KI-anvendelsen: hvis tenkning er uutstrakt —
  kan en maskin tenke, og hva ville Descartes/Elisabeth sagt om bevissthet i en
  språkmodell (V21sem/H22sem-mønsteret)?
- **Case-forslag:** Nyskrevet dialog-case: en samtalerobot hevder å føle smerte —
  sorter spørsmålene med dualismens begreper (utstrekning, tenkning, interaksjon)
  og vis hvor Elisabeths utfordring rammer også moderne «sjel i maskinen»-intuisjoner.
- **Typiske feil:** #6 fremstille dualisme som «hjerne vs. sinn er forskjellige
  ord» (kategorifeil — det er substanser, ikke beskrivelser); #7 tolke
  Elisabeth-utdrag som generell Descartes-kritikk uten det presise
  interaksjonspoenget; #4 redegjøre for dualismen og «glemme» innvendingsdelen.
- **Kvote:** 25 quiz / 25 flashcards (res cogitans/res extensa,
  interaksjonsproblemets trinn, Descartes↔Elisabeth-utveksling).

#### Kapittel 2.5: Kant og Einstein — syntetisk a priori og geometriens status
**id:** `exphil03-2-5` · **number:** 2.5 · **estimatedMinutes:** 40 · **prerequisites:** `exphil03-1-4`

- **Kapitteltype:** tema.
- **Description:** Kants syntetisk a priori-kunnskap og Einsteins innvending om
  ren og anvendt geometri — det faste vitenskapsteoretiske Være-alternativet.
- **Eksamensbelegg:** 1–2/24: H21s (Kant/Einstein 7+5-oppgaven) + ressurstekst i
  H22s. Sjangre: S1, S2, S3 (Kant vs. Einstein). Prioritet: kunne (§7 pkt. 14 —
  fast alternativ, differensierer).
- **Begrepskontrakt:** **Kant, *Kritikk av den rene fornuft*** (VVG fysikk-tekster,
  s. 245–246 attestert ⚠): analytisk vs. syntetisk; a priori vs. a posteriori;
  syntetisk a priori-kunnskap med tekstens egne eksempler (7+5=12;
  årsakssetningen); hvorfor matematikk ifølge Kant er informativ OG nødvendig.
  **Einstein** (VVG, s. 250 attestert ⚠): skillet ren (aksiomatisk) geometri
  (sikker, men sier ikke noe om virkeligheten) vs. anvendt geometri (sier noe om
  virkeligheten, men er empirisk og usikker); avvisningen av a priori-kunnskap om
  naturen.
- **Drøftingsakser:** treffer Einsteins skille Kants posisjon, eller snakker de
  forbi hverandre (hva Kant mente med at geometrien gjelder erfaringsverdenen)?;
  overlever noe av det syntetisk a priori etter ikke-euklidsk geometri?; hva står
  på spill — kan fornuften alene vite noe om verden?
- **Case-forslag:** «Er 7+5=12 en oppdagelse eller en definisjon?» — klasseroms-
  disputt som rekonstruerer analytisk/syntetisk-skillet før Einstein-innvendingen
  settes inn.
- **Typiske feil:** #6 blande analytisk/syntetisk med a priori/a posteriori (to
  ulike distinksjoner — krysningen er poenget); #7 sitere Einstein-passasjen uten
  å vise hvilken Kant-tese den rammer; #3 relativitetsteori-populærstoff.
- **Kvote:** 15 quiz / 15 flashcards (begrepskrysset med eksempler, ren/anvendt
  geometri, hva innvendingen rammer).

#### Kapittel 2.6: Haslanger — sosial konstruksjon av kjønn
**id:** `exphil03-2-6` · **number:** 2.6 · **estimatedMinutes:** 60 · **prerequisites:** `exphil03-2-2`

- **Kapitteltype:** tema.
- **Description:** Skillet biologisk/sosialt kjønn, konstruksjon av begreper vs.
  objekter, og genealogi — det mest utholdende anvendte temaet i emnet.
- **Eksamensbelegg:** 6/24: V21u, H21u, V22s, H22u (øde øy-tankeeksperimentet),
  H24s, H25sem. Kjønn som anvendt tema: 6 sett 2021→ (12 totalt 2017–2025 — mest
  utholdende gjennom begge pensumregimer). H2025-veiledningen premierte eksplisitt
  forståelse av den *teoretiske mekanismen* (begrepers funksjon i sosial
  konstruksjon), ikke bare konklusjonen. Haslanger om mat/slag som sosialt
  konstruert er typisk sitatkilde (S2). Sjangre: S1, S2, S4 (er biologisk kjønn
  sosialt konstruert? — H2025-vrien med biologenes definisjon), S5 (øde øy).
  Prioritet: kunne, høy (§7 pkt. 8).
- **Begrepskontrakt:** VVG kap. 12 ⚠, **Sally Haslanger, *Sosial konstruksjon:
  Kjønn og andre sosiale kategorier* (s. 289–295 attestert ⚠)**: biologisk kjønn
  (sex) vs. sosialt kjønn (gender); sosial konstruksjon av *begreper* (våre
  kategorier er formet av sosiale praksiser) vs. av *objekter* (tingene selv
  formes av at kategoriene brukes på dem) — mekanismen sensor premierer;
  mat/slag-eksemplene (tekstens egne: hva som telles som mat/slag er sosialt
  bestemt); genealogisk undersøkelse (avdekke kategorienes historiske funksjon);
  eliminativistisk vs. ikke-eliminativistisk konstruksjonisme (skal kategorien
  avskaffes eller reformeres?).
- **Drøftingsakser:** kan også *biologisk* kjønn være begrepskonstruert (hvem
  definerer, og for hvilke formål — H2025-drøftingen)?; hvis en kategori er
  konstruert, er den da uvirkelig (nei — konstruert ≠ vilkårlig/uviktig: det
  presise A-poenget)?; øde øy-testen: har den ensomme øyboeren et sosialt kjønn
  (hva krever kategorien av sosial kontekst — H22u)?
- **Case-forslag:** «Ungdom»-kategorien som treningseksempel på hele apparatet
  (begrepskonstruksjon: aldersgrensene varierer historisk; objektkonstruksjon:
  institusjoner former faktiske ungdommer) — samme mekanikk som kjønnsanalysen,
  uten å låne Haslangers egne eksempler.
- **Typiske feil:** #6 blande biologisk/sosialt kjønn (eksplisitt målt
  presisjonsskille); #6-variant: blande begreps- og objektkonstruksjon (mekanismen
  er selve vurderingspunktet H2025); #13 normalisere bort øde øy-premisset
  (øyboeren er *alene* — poenget er hva kategorien krever); #2 identitetspolitisk
  mening uten filosofisk argument.
- **Kvote:** 25 quiz / 25 flashcards (sex/gender, begrep/objekt-konstruksjon,
  genealogi, eliminativisme, eksempel↔poeng-koblinger).

### Del 3 — Gjøre: etikk

#### Kapittel 3.1: Aristoteles — eudaimonia og dydsetikken
**id:** `exphil03-3-1` · **number:** 3.1 · **estimatedMinutes:** 65 · **prerequisites:** `exphil03-2-2`

- **Kapitteltype:** tema.
- **Description:** Lykken som endelig mål, funksjonsargumentet og dyden som
  midten — første hjørne i teoritrekanten.
- **Eksamensbelegg:** Etikk-siden av Aristoteles 10/24: H21s (lykke), H22s
  (lykkelig liv, mot Mill/Benatar), H23s + H23sem (dydsetikk + Foot), V24s
  (gjenbruk av H23-oppgaven), V24sem, V25s (mot Mill/Kant om lykkens rolle).
  Aristoteles om dyden som midten er typisk sitatkilde (S2). Dydsetikk som teori:
  4/24 (H23s, H23sem, V24s, V24sem). Sjangre: S1, S2, S3 (mot Mill/Kant om
  lykkens rolle i moralen), S5. Prioritet: **perfekt** (§7 pkt. 1 —
  teoritrekanten bærer 19 av 24 sett).
- **Begrepskontrakt:** VVG kap. 13 ⚠, **Aristoteles, *Den nikomakiske etikk*
  (s. 316 og 327 attestert ⚠)**: eudaimonia/lykke som det endelige målet;
  skillet etterstrebelsesverdig i seg selv vs. for noe annet (lykken er det eneste
  som alltid velges for sin egen skyld); funksjonsargumentet (menneskets
  særegne funksjon er fornuftsvirksomhet → det gode liv er virksomhet i samsvar
  med dyd); dyd som midten mellom ytterpunkter (mot som midten mellom feighet og
  dumdristighet — relativ til person og situasjon, ikke aritmetisk); karakter og
  handling (dyd erverves gjennom øvelse); det rett-gjørende i dydsetikken: hva
  den dydige personen ville gjort.
- **Drøftingsakser:** er lykke (eudaimonia) moralens mål — mot Kant (moralsk verdi
  uavhengig av lykke) og Mill (lykke som nytelse/fravær av smerte — annet
  lykkebegrep!)?; funksjonsargumentets holdbarhet (har mennesket én funksjon —
  og hopper argumentet fra «er» til «bør»?); gir «den dydige personen» reell
  handlingsveiledning, eller er det sirkulært?
- **Case-forslag:** «Den vellykkede kynikeren»: rik, beundret, nytelsesfull —
  men uten dyd. Har han eudaimonia? Brukes til å skille Aristoteles' lykkebegrep
  fra det subjektive velværebegrepet (og peker frem mot Benatar i kap. 3.8).
- **Typiske feil:** #6 lese eudaimonia som subjektiv lykkefølelse (da kollapser
  kontrasten mot Mill); #6-variant: gjøre midten aritmetisk («litt av alt»);
  #1 gjengi dydskatalog uten det rett-gjørende prinsippet; #14 Hursthouse-stoff
  (ute av pensum — dydsetikk forankres i Aristoteles og Foot).
- **Kvote:** 30 quiz / 30 flashcards (eudaimonia, funksjonsargumentets trinn,
  midten med eksempler, i-seg-selv/for-noe-annet).

#### Kapittel 3.2: Kant — den gode vilje, plikt og det kategoriske imperativ
**id:** `exphil03-3-2` · **number:** 3.2 · **estimatedMinutes:** 65 · **prerequisites:** `exphil03-3-1`

- **Kapitteltype:** tema.
- **Description:** Pliktetikkens kjerne: god vilje, plikt mot tilbøyelighet,
  universaliseringstesten og menneskets verdighet — andre hjørne i trekanten.
- **Eksamensbelegg:** Etikk-siden av Kant 9/24: H21u (plikt), V22sem, H22s
  (Kant/Mill om imperativ-utledningen), H24sem, V25s (×2 delspørsmål), V25u
  (maksime-testen på nyskrevne eksempler). Kant vs. Mill er den vanligste
  enkeltsammenligningen i arkivet. Sjangre: S1, S2, S3 (mot Mill — fast par; mot
  Aristoteles om lykkens rolle), S5 (løftebrudd/lygning-caser). Prioritet:
  **perfekt** (§7 pkt. 1).
- **Begrepskontrakt:** VVG kap. 14 ⚠, **Kant, *Grunnlegging av moralens
  metafysikk***: den gode vilje som det eneste ubetinget gode; plikt vs.
  tilbøyelighet (kremmeren som er ærlig av egeninteresse vs. av plikt — moralsk
  verdi kun i det siste); maksime; det kategoriske imperativ
  (universaliseringstesten: kan maksimen villes som allmenn lov?) vs. hypotetiske
  imperativer (påbud betinget av mål); aktelse for moralloven; verdighet
  (mennesket som formål i seg selv — prisløst, uerstattelig; broen til Velleman i
  kap. 3.5).
- **Drøftingsakser:** skiller universaliseringstesten faktisk rett fra galt
  (falske positive/negative — nyskrevne maksime-eksempler i V25u-stil)?; er en
  etikk uten følelser og konsekvenser umenneskelig kald (Held-kritikkens
  forlengelse; Mills innvending) — og hva er Kants svar (pålitelighet uavhengig
  av humør og utfall)?; plikt vs. lykke: hvem har rett om moralens forhold til
  det gode liv (trekantdrøftingen)?
- **Case-forslag:** Maksime-verksted: fire nyskrevne maksimer (bryte kølappen når
  man har det travelt; gi villedende komplimenter for å glede; melde fra om
  juks; låne uten å spørre) kjørt gjennom universaliseringstesten trinn for
  trinn — med ett eksempel der testen gir kontraintuitivt resultat, som råstoff
  for drøftingsdelen.
- **Typiske feil:** #6 blande kategorisk/hypotetisk imperativ (eksplisitt målt
  presisjonsskille); #6-variant: «Kant = regler fra samfunnet» (moralloven er
  fornuftens egen); #1 gjengi kremmereksemplet uten plikt/tilbøyelighet-poenget;
  #14 Fried-stoff (ute av pensum).
- **Kvote:** 30 quiz / 30 flashcards (god vilje, plikt/tilbøyelighet, maksime,
  kategorisk/hypotetisk, verdighet/pris).

#### Kapittel 3.3: Mill — utilitarismen og dens forsvar
**id:** `exphil03-3-3` · **number:** 3.3 · **estimatedMinutes:** 70 · **prerequisites:** `exphil03-3-2`

- **Kapitteltype:** tema.
- **Description:** Nytteprinsippet, høyere og lavere gleder, standardinnvendingene
  med Mills egne svar — emnets hyppigste enkelttema.
- **Eksamensbelegg:** 10/24 — emnets toppscore: H22s (×2 alternativer), H22sem,
  V23sem (Mill/innvendinger/Benatar), H23s, V24s, H24sem (Mill/Velleman/slaveri),
  V25s, V25u, H25s, H25sem (Mill-innvendinger). Mill om nytteprinsippet og om
  «fornøyd gris»-innvendingen er de hyppigste sitatkildene i arkivet (S2); s. 399
  og 402–403 attestert ⚠. Sjangre: S1, S2, S3 (mot Kant — vanligste par; mot
  Aristoteles om lykke), S4 («er utilitarismen holdbar?» — arkivets vanligste
  drøftingsspørsmål), S5 (slaveri-testen). Prioritet: **perfekt** (§7 pkt. 1).
- **Begrepskontrakt:** VVG kap. 15 ⚠, **J.S. Mill, *Utilitarisme* (s. 399,
  402–403 attestert ⚠)**: nytteprinsippet/største lykke-prinsippet (handlinger er
  rette i den grad de fremmer lykke — lykke som nytelse og fravær av smerte);
  upartiskhet (hver enkelts lykke teller likt); høyere vs. lavere gleder og
  det kompetente flertalls dom («dyriske begjær»-innvendingen og Mills svar:
  bedre å være et utilfreds menneske enn en tilfreds gris); den praktiske
  beregnings-innvendingen (ingen tid til kalkyle før handling) og Mills svar
  (menneskehetens akkumulerte erfaring som tommelfingerregler); Mills kritikk av
  Kants imperativ-utledning (Kant viser ifølge Mill bare uheldige *konsekvenser*
  av umoralske maksimer — smugler inn nytte); handlings-/regelnivå i
  utilitarismen (presisjonsskille sensor måler).
- **Drøftingsakser:** er utilitarismen holdbar — rettferdighets-/
  rettighetsinnvendingen (kan den tillate å ofre én for de mange? slaveri-testen
  i kap. 3.4 som skarpeste form)?; redder høyere/lavere gleder-skillet Mill, eller
  forlater han hedonismen (er «kvalitet» et smuglet ikke-nytelsesgode)?; Kant vs.
  Mill om hva som gjør en handling rett (sinnelag/maksime vs. konsekvenser) — den
  vanligste sammenligningen, drilles med 2–4 eksplisitte dimensjoner.
- **Case-forslag:** Prioriteringscase i helsevesen (én dyr behandling til ett barn
  vs. forebygging for tusen): utilitaristisk analyse trinn for trinn, deretter
  innvendingene — brukes som gjennomgående eksempel også i 3.4.
- **Typiske feil:** #6 blande handlings- og regelnivå; #6-variant: fremstille
  Mill som ren kvantitativ hedonist (overser kvalitetsskillet); #1 liste
  innvendinger uten Mills svar (S1-toppsvar krever innvending + svar);
  #14 Smart-stoff (ute av pensum).
- **Kvote:** 30 quiz / 30 flashcards (nytteprinsippet presist, høyere/lavere,
  innvending↔Mills svar-par, Mill↔Kant-kontrastkart).

#### Kapittel 3.4: Teoritrekanten i praksis — sammenligning og case-anvendelse
**id:** `exphil03-3-4` · **number:** 3.4 · **estimatedMinutes:** 60 · **prerequisites:** `exphil03-3-1`, `exphil03-3-2`, `exphil03-3-3`

- **Kapitteltype:** tema (metodisk driller — binder trekanten sammen).
- **Description:** Dydsetikk, pliktetikk og utilitarisme stilt mot hverandre og
  anvendt på arkivets test-caser: slaveri, kjøttspising, rasisme, løftebrudd.
- **Eksamensbelegg:** Minst én av de tre teoriene står i 19 av 24 sett; parvise
  sammenligninger er fast sjanger (S3): Kant vs. Mill (vanligst), Mill/Kant vs.
  Aristoteles (lykkens rolle), utilitarisme vs. dydsetikk. Case-anvendelser (S5)
  i arkivet: slaveri-tankeeksperimentet «den omsorgsfulle godseieren» (V22s,
  H24sem — også V2020), rasistiske ytringer (H22u: anvend to teorier),
  kjøttspising/dyrs status (V24sem — hovedbehandling i kap. 3.7), løftebrudd/
  lygning, miljøvern som plikt. Prioritet: **perfekt** (§7 pkt. 1 og 16 —
  metoden «teori → case → divergens → vurdering» skal drilles).
- **Begrepskontrakt:** Ingen nye pensumbegreper — kapitlet SYSTEMATISERER kap.
  3.1–3.3: sammenligningskart med de faste dimensjonene (hva gjør en handling
  rett; hvilken rolle spiller konsekvenser, sinnelag, karakter; hvilken rolle
  spiller følelser; forholdet moral–lykke); anvendelsesmetoden i fire trinn:
  identifiser teoriens rett-gjørende egenskap → anvend mekanisk på casen (hva
  ville teorien konkludere og hvorfor) → få frem divergensen mellom teoriene →
  vurder hvilken analyse som er mest overbevisende, med grunner (arkivets egen
  formulering, omskrevet: det holder ikke å si hva du mener — vis grunnene).
- **Drøftingsakser:** slaveri-testen som teoritest: den «snille slaveeieren»
  maksimerer kanskje velferd — hvilken teori forklarer BEST hvorfor det likevel
  er galt (verdighet? dydig karakter? regelnytte?), og hva røper det om
  teoriene?; konvergens-spørsmålet: når alle tre teorier gir samme svar — betyr
  det at valget av teori er likegyldig?
- **Case-forslag:** (1) Nyskrevet slaveri-analogt tankeeksperiment («den
  omtenksomme arbeidsgiveren» med totalkontroll over gjestearbeidere som
  behandles godt) — trener premissdisiplin uten å gjenbruke arkivets tekst;
  (2) rasistisk ytring i lukket gruppe uten identifiserbare ofre — tre-teoris
  analyse; (3) å bryte et dødsleie-løfte når bruddet gagner alle.
- **Typiske feil:** #13 ignorere tankeeksperimentets premisser (slavene
  *behandles godt* — poenget er om teorien fanger noe utover velferd); #2 mening
  uten grunner; #8 anvende bare den teorien man liker (oppgavene krever ofte to);
  #1 tre parallelle referater uten divergens-analyse.
- **Kvote:** 20 quiz / 15 flashcards («hva sier teorien om casen»-matriser,
  dimensjonskartet).

#### Kapittel 3.5: Eutanasi — Foot og Velleman
**id:** `exphil03-3-5` · **number:** 3.5 · **estimatedMinutes:** 55 · **prerequisites:** `exphil03-3-1`, `exphil03-3-2`

- **Kapitteltype:** tema.
- **Description:** Dagens bioetikk-case: Foots dydsetiske analyse av eutanasi og
  Vellemans kantianske argument mot en rett til å dø.
- **Eksamensbelegg:** Foot 4/24, alle 2023→, stigende: H23s, H23sem, V24s
  (dokumentert gjenbruk: samme sitat H2023 selvstudium → V2024 selvstudium nesten
  ordrett), H24s. Velleman 2/24: H24s + H24sem (ny, gjenbrukt to ganger samme
  semester). Eutanasi/selvbestemt død: 5 sett, alle 2023→ — har erstattet abort
  som bioetikk-casen. Foot attestert s. 327 ⚠; Velleman om verdighet er typisk
  sitatkilde (S2). Sjangre: S1, S2, S3 (Foot vs. Velleman — klassisk par), S4.
  Prioritet: kunne, høy og stigende (§7 pkt. 9).
- **Begrepskontrakt:** **Philippa Foot, *Eutanasi*** (VVG Gjøre-tekst, s. 327
  attestert ⚠): eutanasi definert som død *til personens eget beste* (definisjonen
  gjør mye arbeid — drap som ikke er til personens beste faller utenfor); dydene
  rettferdighet (hva vi skylder personen, mot personens rett til liv) og
  barmhjertighet (personens gode) som DOBLE skranker — begge må tilfredsstilles;
  når eutanasi likevel kan tillates (ikke krenker rettferdighet: samtykke; og
  tjener personens gode). VVG kap. 14 ⚠, **J. David Velleman, *En rett til å
  avslutte sitt eget liv?***: de to prinsippene i debatten (retten til å forkorte
  livet for å forbedre det; presumpsjonen for personens egen dom om hva som er
  best); skillet personens *verdi* (verdighet, kantiansk — ubetinget) vs.
  personens *gode* (velferd — betinget); argumentet for at verdigheten ikke kan
  veies mot velferd — å tilby retten kan dessuten endre situasjonen for alle
  (byrden av å måtte begrunne fortsatt liv).
- **Drøftingsakser:** Foot vs. Velleman: kan samtykke + personens beste
  rettferdiggjøre eutanasi (Foot: mulig; Velleman: verdigheten er ikke vår å
  disponere)?; dydsetisk vs. kantiansk metode i bioetikk (to skranker vs. ett
  ubetinget prinsipp); institusjonsargumentet: kan en rett være gal å innføre
  selv om enkelthandlingen kan være riktig?
- **Case-forslag:** Nyskrevet klinisk vignett (uhelbredelig syk pasient med
  vedvarende, informert ønske; familie delt) — analysert først med Foots to
  dyder, så med Vellemans verdighets-argument; divergensen blir drøftingsråstoff.
- **Typiske feil:** #6 overse Foots definisjonsavgrensning («til personens
  beste» — uten den kollapser analysen); #6-variant: gjøre Velleman til generell
  eutanasimotstander uten verdighets-mekanismen; #14 Hursthouse/abort-stoff (ute);
  #2 privatmoralsk mening uten teoriforankring.
- **Kvote:** 25 quiz / 25 flashcards (Foots definisjon + to dyder, Vellemans to
  prinsipper + verdi/gode-skillet, Foot↔Velleman-kontrast).

#### Kapittel 3.6: Kontrakt og omsorg — Locke og Held
**id:** `exphil03-3-6` · **number:** 3.6 · **estimatedMinutes:** 60 · **prerequisites:** `exphil03-3-2`

- **Kapitteltype:** tema.
- **Description:** Lockes naturtilstand, rettigheter og eiendomsrett — og Helds
  omsorgsetiske angrep på hele kontraktsmodellen. Arkivets mest gjenbrukte triade.
- **Eksamensbelegg:** Locke 6/24: V21s, H22u (øde øy-eiendom), V23s, V24s,
  V25sem, H25s (eiendomsrett alene). Held 5/24: H21s (mor–barn), V21s, V23s,
  V24s, V25sem. **Locke-triaden (kontrakt → eiendomsrett → Held) er gjenbrukt
  nesten uendret i fire sett:** V2023 selvstudium → V2024 selvstudium → V2025
  seminar (+ eiendomsrett alene H2025) — treningsgull. Held attestert s. 514 ⚠;
  Held om mor–barn-modellen er typisk sitatkilde (S2). Sjangre: S1, S2, S3
  (Locke vs. Held — klassisk par), S4 (kontraktsteoriens menneskesyn).
  Prioritet: **perfekt** (§7 pkt. 6).
- **Begrepskontrakt:** VVG kap. 17 ⚠, **John Locke, *Om borgerstyret***:
  naturtilstanden (frihet og likhet under naturens lov — ikke lovløs krig);
  naturlige rettigheter (liv, frihet, eiendom); samfunnskontrakten (styre ved
  samtykke for å sikre rettighetene); eiendomsrett gjennom arbeid (man blander
  sitt arbeid med tingen — med forbeholdene: nok og like godt igjen til andre,
  ikke la råtne). VVG kap. 18 ⚠, **Virginia Held, *Det kontraktsløse samfunn: Et
  feministisk ståsted* (s. 514 attestert ⚠)**: kritikken av kontraktsmodellen —
  bildet av samfunnet som avtale mellom frie, like, uavhengige egeninteresserte
  voksne er en fiksjon som usynliggjør avhengighet og omsorgsarbeid; mor–barn-
  relasjonen som alternativ modell (ikke valgt, ikke mellom likeverdige, ikke
  egeninteressert — og likevel samfunnets mest grunnleggende relasjon);
  omsorgsetikk.
- **Drøftingsakser:** kontraktsteoriens menneskesyn: beskriver «frie og
  uavhengige kontraktsparter» mennesker i det hele tatt (Helds hovedangrep)?; er
  arbeid-blanding et holdbart grunnlag for eiendom (øde øy-testen: eier du
  avlingen din alene? og hva med forbeholdene i knapphetens verden)?; kan
  kontrakt og omsorg kombineres (kontrakt for det offentlige, omsorg for det
  nære?) — eller rammer Helds kritikk selve grunnmodellen?
- **Case-forslag:** (1) Øde øy-variant (nyskrevet): to skipbrudne på hver sin
  halvdel av øya — når oppstår eiendom, og hva endres når den tredje driver i
  land?; (2) plattformøkonomi-case: er avtalen mellom app-selskap og bud en
  «fri kontrakt» i Lockes forstand — Helds kritikk anvendt på moderne
  arbeidsliv.
- **Typiske feil:** #6 gjøre Lockes naturtilstand til hobbesiansk krigstilstand;
  #6-variant: glemme eiendomsforbeholdene; #1 gjengi Held som «kvinneperspektiv»
  uten det filosofiske argumentet (fiksjonskritikken + alternativmodellen);
  #13 normalisere bort øy-premisset.
- **Kvote:** 25 quiz / 25 flashcards (naturtilstand/rettigheter/kontrakt/
  eiendomsrett-kjeden, Helds kritikkpunkter, mor–barn-modellens trekk,
  Locke↔Held-kontrast).

#### Kapittel 3.7: Miljø- og dyreetikk — Sylvan og teorienes grenser
**id:** `exphil03-3-7` · **number:** 3.7 · **estimatedMinutes:** 40 · **prerequisites:** `exphil03-3-4`

- **Kapitteltype:** tema.
- **Description:** Sylvans argument for at vestlig etikk er menneskesjåvinistisk,
  og de normative teoriene anvendt på kjøttspising og dyrs moralske status.
- **Eksamensbelegg:** Sylvan 4/24: V21sem, H21sem, V22s, V24sem. Miljø/dyr som
  anvendt tema: 5 sett — fast «Gjøre»-alternativ; V24sem koblet Sylvan til dyrs
  moralske status og kjøttspising. Sylvan om det liberale prinsipp er typisk
  sitatkilde (S2); s. 522–523 attestert ⚠. Sjangre: S1, S2, S4 (trenger vi en ny
  etikk?), S5 (kjøttspising × teoriene). Prioritet: kunne (§7 pkt. 12).
- **Begrepskontrakt:** VVG kap. 19 ⚠, **Richard Sylvan, *Er det behov for en ny
  etikk, en ny miljøetikk?* (s. 522–523 attestert ⚠)**: «vestens liberale
  filosofi»/frihetsprinsippet (enhver kan gjøre som han vil så lenge ingen
  *andre* skades) som grunnleggende menneskesjåvinisme (bare mennesker teller som
  «andre»); det siste menneske-tankeeksperimentets logikk (Sylvans berømte grep —
  omskrevet: hvis den siste gjenlevende ødelegger alt liv uten å skade noe
  menneske, gjør han da noe galt?); hvorfor menneskeinteresser (også fremtidige
  generasjoners) ifølge Sylvan ikke kan bære en full miljøetikk; egenverdi i
  naturen som det nye etikk-kravet. Dyrs moralske status behandles teorinøytralt
  via teoritrekanten (hva sier nytteprinsippet, verdighetsbegrepet og dydene om
  dyr?) — IKKE via Singer (ute av pensum, feil #14).
- **Drøftingsakser:** trenger vi en NY etikk, eller strekker de gamle til
  (utvidet utilitarisme som svar på Sylvan)?; kan noe ha verdi uten at noen
  verdsetter det?; kjøttspising: hvor divergerer teoriene, og bærer
  menneskesjåvinisme-diagnosen også vår dyrevelferdslovgivning?
- **Case-forslag:** Nyskrevet «siste menneske»-variant (automatisert system vil
  utslette en urskog etter menneskehetens undergang — galt å la være å stanse
  det?) + kjøttspisings-analyse med alle tre teoriene etter 3.4-metoden.
- **Typiske feil:** #13 omgå tankeeksperimentets premiss (ingen mennesker
  skades — det er selve testen); #14 Singer/spesiesisme som pensumanker;
  #1 referere Sylvan uten å ta stilling til ny-etikk-spørsmålet.
- **Kvote:** 15 quiz / 15 flashcards (frihetsprinsippet, sjåvinisme-diagnosen,
  egenverdi, teorienes dyre-svar).

#### Kapittel 3.8: Randsonen i Gjøre — Benatar om livskvalitet og Appiah om kultur
**id:** `exphil03-3-8` · **number:** 3.8 · **estimatedMinutes:** 40 · **prerequisites:** `exphil03-3-1`, `exphil03-3-3`

- **Kapitteltype:** tema (kompakt «bør kjenne til»-dekning).
- **Description:** To lavfrekvente men gjenkommende tekster: Benatars påstand om
  at livene våre er dårligere enn vi tror, og Appiahs genealogi av «vestlig
  kultur».
- **Eksamensbelegg:** Benatar 3/24: H22s (mot Aristoteles/Mill om lykkelig liv),
  H22sem, V23sem (Mill-koblingen); Benatar om feilvurdert livskvalitet er typisk
  sitatkilde (S2); s. 430 attestert ⚠. Appiah 2/24: V22s (genealogi, med
  Haslanger), V22sem (gullklump-oppgaven); s. 542–543 attestert ⚠. Sjangre: S1,
  S2, S4. Prioritet: kjenne (§7 pkt. 15) — dekkes kompakt, sortert ETTER
  kjernestoffet i delen, eksplisitt merket «bør kjenne til».
- **Begrepskontrakt:** **David Benatar, *Hvor ille er det å bli til?*** (VVG
  Gjøre-tekst, s. 430 attestert ⚠): tesen om systematisk feilvurdering av egen
  livskvalitet; de psykologiske mekanismene (optimisme-bias, tilpasning,
  sammenligning med andre snarere enn med det mulige); implikasjoner for
  lykketeorier (rammer både hedonistiske og objektive mål på livskvalitet) og
  anti-natalisme-argumentets logikk. VVG kap. 20 ⚠, **Kwame Anthony Appiah,
  *Kultur* (s. 542–543 attestert ⚠)**: gullklump-fortellingen om «vestlig
  kultur» (forestillingen om en arv fra antikken overlevert som en skatt);
  Appiahs genealogiske avvisning (fortellingen er historisk konstruert og
  utelater/omfordeler); kulturell identitet som praksis, ikke essens (kultur er
  noe man gjør, ikke noe man arver ubrutt); slektskapet med Haslangers
  genealogi-metode (kap. 2.6 — tverrkobling som gir S3-uttelling).
- **Drøftingsakser:** hvis vi systematisk feilvurderer egen livskvalitet — hva
  gjenstår av Mills nytelseskalkyle og Aristoteles' eudaimonia-vurdering (den
  attesterte H22s-drøftingen)?; følger anti-natalisme, eller stopper argumentet
  før konklusjonen?; finnes «vestlig kultur» — og hva står på spill politisk i
  gullklump-fortellingen?
- **Case-forslag:** (1) Lykkeforsknings-case: selvrapportert livskvalitet 8/10 i
  en gruppe med objektivt harde liv — Benatar-mekanismene som forklaringsapparat;
  (2) skoledebatt om «vestlige verdier» i læreplanen analysert med Appiahs
  genealogi og praksis-begrep.
- **Typiske feil:** #1 gjengi Benatar som kuriositet uten koblingen til
  lykketeoriene (koblingen ER eksamensbruken); #6 gjøre Appiah til ren
  relativist (poenget er genealogi + praksis, ikke «alt er likegyldig»);
  #3 kulturhistorie-generalia.
- **Kvote:** 15 quiz / 20 flashcards (Benatar-mekanismene, anti-natalisme-
  logikken, gullklumpen, essens/praksis, tekst↔poeng-koblinger).

### Del 4 — Eksamenstrening

#### Kapittel 4.1: Kunnskapsdelene — redegjørelse og sitattolkning (a/b)
**id:** `exphil03-4-1` · **number:** 4.1 · **estimatedMinutes:** 50 · **prerequisites:** Del 1–3 (les spesielt `exphil03-1-1`, `exphil03-3-3`)

- **Kapitteltype:** sjanger (S1 + S2).
- **Description:** De to kunnskapssjangrene som åpner enhver oppgave: presis
  redegjørelse og sitattolkning — med oppskrifter og tidsbudsjett.
- **Eksamensbelegg:** S1/S2 utgjør (a)/(b) i samtlige sett 2023→; sitat med
  VVG-sidetall som springbrett er dominerende 2021→. Sensorveiledningene lister
  konsekvent tre evner: kjennskap til tenkerens filosofi, forståelse av
  pensumteksten, identifisere/beskrive akkurat det argumentet det spørres om.
  H2025 (Haslanger): bonus for å vise den teoretiske mekanismen. Prioritet:
  perfekt (porten til alt annet — og jevnhetsregelen gjør hver (a)/(b) til
  C-kritisk).
- **Innhold (DNA sjangerkapittel):** **S1-oppskriften (15–25 min):** (1) plasser
  tenker og tekst i én setning (hvilket spørsmål besvares?); (2) gjengi
  posisjonen med tekstens kjernebegreper; (3) rekonstruer argumentet trinnvis —
  premisser og konklusjon, ikke bare konklusjonen; (4) illustrer med tekstens
  eget eksempel (slavegutten, bilen, kremmeren, 7+5, mat/slag).
  **S2-oppskriften:** (1) parafraser utdraget med egne ord; (2) identifiser
  funksjonen (premiss? innvending? eksempel? svar på innvending?); (3) plasser
  det i tekstens overordnede argument; (4) bruk begrepene presist. Liste over de
  typiske sitatkildene (fra kapitlenes belegg — Mill ×2, Kant-umyndighet,
  Aristoteles-midten, Haslanger, Street, Sylvan, Lakatos, Benatar, Velleman,
  Held, Descartes-åpningen) slik at studenten vet hvilke passasjer som skal
  finleses. Gjennomskrevet eksempel med margkommentarer: én S1 (Descartes'
  tvilstrapp) og én S2 (nyskrevet sitatlignende passasje i Mills stil om
  gledenes kvalitet). 4 nyskrevne øvingsoppgaver (2 S1 + 2 S2) med
  momentliste-løsninger.
- **Typiske feil:** #7 tolke sitatet løsrevet (gir «delvis rett» = D/E-nivå);
  #3 leksikonsvar; #6 begrepsglidning under gjengivelse.
- **Kvote:** 15 quiz / 10 flashcards (funksjonskategoriene, oppskriftstrinnene,
  sitatkilde↔tenker-koblinger).

#### Kapittel 4.2: Sjanger — sammenlign to tenkere
**id:** `exphil03-4-2` · **number:** 4.2 · **estimatedMinutes:** 45 · **prerequisites:** `exphil03-4-1`

- **Kapitteltype:** sjanger (S3).
- **Description:** Sammenligningsoppgaven: dimensjonsvalg, struktur og
  selvstendighetsbonusen.
- **Eksamensbelegg:** Fast sjanger gjennom hele arkivet; H2024-veiledningen
  honorerer eksplisitt evnen til å trekke paralleller mellom tenkere og
  selvstendighet i sammenligningen. Klassiske par 2021→: Kant vs. Mill
  (vanligst), Platon vs. Aristoteles, Descartes vs. Elisabeth, Mill/Kant vs.
  Aristoteles (lykke), Locke vs. Held, utilitarisme vs. dydsetikk, Foot vs.
  Velleman, Wikforss vs. Descartes. Prioritet: perfekt.
- **Innhold:** Oppskrift: posisjon A → posisjon B → eksplisitte
  sammenligningspunkter langs 2–4 dimensjoner («hva gjør en handling rett»,
  «hva er kunnskapens kilde», «hvilken rolle spiller følelser», «hva er
  virkelig») → kort vurdering av hvem som står sterkest på hvert punkt
  (selvstendighetsbonusen). Strukturgrep: sammenlign langs AKSER, ikke to
  parallelle referater. Sammenligningskart-tabeller for de åtte faste parene
  (gjenbruker kontrastkartene fra temakapitlene). Gjennomskrevet eksempel med
  margkommentarer: Kant vs. Mill på tre dimensjoner. 4 nyskrevne øvingsoppgaver
  med momentlister (dekk minst: ett etikk-par, ett Vite-par, ett Være-par).
- **Typiske feil:** #1 to referater uten sammenligningspunkter; #8 yte bare den
  ene posisjonen rettferdighet; #4 svare på halve oppgaven («gjør rede for
  begge og sammenlign» har tre ledd).
- **Kvote:** 12 quiz / 10 flashcards (par↔dimensjoner, «hvem hevder hva»-drill).

#### Kapittel 4.3: Sjanger — drøftingsdelen (c/d)
**id:** `exphil03-4-3` · **number:** 4.3 · **estimatedMinutes:** 55 · **prerequisites:** `exphil03-4-1`

- **Kapitteltype:** sjanger (S4).
- **Description:** Selvstendighets-delen som avgjør karakteren: firepunktslisten,
  femtrinnsstrukturen og gjenbruksbonusen.
- **Eksamensbelegg:** Siste del i samtlige oppgaver 2023→ («diskuter med
  utgangspunkt i svarene dine»); firepunktslisten står fast i veiledningene
  2024–2025; gjenbruksbonusen ((a)/(b) inn i drøftingen) nevnes i samtlige.
  Arkivets faktiske drøftingsspørsmål (omskrevet) brukes som treningsbank:
  utilitarismens holdbarhet, kontraktsteoriens menneskesyn, kunnskapsresistens
  som demokratiproblem, eutanasiens moralske status, moralens objektivitet gitt
  evolusjon, om biologisk kjønn er konstruert. Prioritet: perfekt (§7 pkt. 7 —
  ferdigheten sensor kaller vurderingsevne og selvstendighet).
- **Innhold:** Femtrinnsstrukturen (30–45 min): (1) ta stilling tidlig — klar,
  avgrenset påstand; (2) beste argument FOR, forankret i pensumtekst OG i egen
  (a)/(b); (3) beste innvending MOT — tatt på alvor, gjerne fra en annen
  pensumtenker; (4) vei argumentene (ikke bare liste dem) — vis hvorfor det ene
  veier tyngst; (5) konkluder med forbehold (hva ville endret vurderingen).
  Koblingsteknikker for gjenbruksbonusen («som vist i (a) hviler Mills prinsipp
  på …»). Motargument-generatoren: hent innvendingen fra en annen pensumtenker
  (trekantens naboer, Elisabeth mot Descartes, Held mot Locke, Wikforss mot
  Descartes). Gjennomskrevet eksempel med margkommentarer: full (c)-del om
  utilitarismens holdbarhet som eksplisitt bygger på en gitt (a)/(b).
  5 nyskrevne drøftingsoppgaver med momentliste + disposisjonsforslag (ikke
  fulle essays), én per treningsbank-tema.
- **Typiske feil:** #1 mer redegjørelse i (c) (referatforlengelse = D/E-profil);
  #5 starte drøftingen «på nytt» uten kobling; #8 ensidig bygging uten
  innvendinger; #2 stillingtagen uten grunner.
- **Kvote:** 15 quiz / 10 flashcards (firepunktslisten, femtrinnene,
  innvendingskilde-par).

#### Kapittel 4.4: Sjanger — anvend teori på case og tankeeksperiment
**id:** `exphil03-4-4` · **number:** 4.4 · **estimatedMinutes:** 50 · **prerequisites:** `exphil03-3-4`

- **Kapitteltype:** sjanger (S5).
- **Description:** Case-anvendelsen: metoden teori → case → divergens →
  vurdering, og premissdisiplinen tankeeksperimenter krever.
- **Eksamensbelegg:** Arkivets caser 2021→: slaveri-tankeeksperimentet (×3),
  kjøttspising/dyrs status, eutanasi, rasistiske ytringer, løftebrudd, miljøvern
  som plikt, øde øy (kjønn alene? avlingen din?), KI uten følelser, strengteori
  for Lakatos. Casene er konstruert med feller (premissene er poenget).
  Prioritet: perfekt (§7 pkt. 16 — metoden skal drilles på alle casetypene).
- **Innhold:** Firetrinnmetoden fra kap. 3.4 generalisert til også epistemiske
  caser (Lakatos-anvendelse, Wikforss-analyse): identifiser hva teorien sier er
  rett-gjørende/kunnskapsgivende → anvend mekanisk → divergens → begrunnet
  vurdering. Premissdisiplin-seksjonen: les premissene som stipulasjoner, ikke
  empiri (godsherren ER snill; øyboeren ER alene; ingen mennesker skades) — å
  omgå dem viser manglende forståelse av hva casen tester. Tidsbudsjett og
  format for «vurder med to teorier»-varianten (H22u-mønsteret). Gjennomskrevet
  eksempel med margkommentarer: nyskrevet tankeeksperiment analysert med to
  teorier. 4 nyskrevne øvingsoppgaver med momentlister (én normativ med tre
  teorier, én med to, én epistemisk Lakatos-case, én Haslanger-case).
- **Typiske feil:** #13 normalisere bort premissene (hovedhjem); #2 konklusjon
  uten synlige grunner; #1 teorireferat uten anvendelse på casen.
- **Kvote:** 12 quiz / 10 flashcards (metodetrinnene, case↔teori↔fell-koblinger).

#### Kapittel 4.5: Sjanger — semesteroppgaven (seminarvarianten)
**id:** `exphil03-4-5` · **number:** 4.5 · **estimatedMinutes:** 40 · **prerequisites:** `exphil03-4-3`

- **Kapitteltype:** sjanger (S7).
- **Description:** Den argumenterende 800–1000-ordsteksten: struktur,
  referanseteknikk og de tre formalfellene som gir F uansett innhold.
- **Eksamensbelegg:** Fast komponent i seminarvarianten alle år; tillegges mest
  vekt i helhetsvurderingen (H2021: ca. 60/40). H2021-veiledningen: tre
  formalfeil gir F uansett faglig innhold — (1) manglende henvisning til
  bestemte steder i primærteksten med korrekt sitat/parafrase-bruk, (2) manglende
  litteraturliste, (3) brudd på ordgrensen. Kunnskap (gjengi og kommentere
  relevante pensumdeler) og argumentasjon (vurdere argumenter, argumentere for
  eget syn) vektes likt. Tema gis i seminargruppen og er alltid fra etikken.
  Prioritet: kunne (gjelder seminarstudentene — men formalfellene gjør kapitlet
  obligatorisk lesning for dem).
- **Innhold:** Disposisjonsmal for 800–1000 ord (innledning med presis påstand ~100
  · redegjørelse med stedfestede henvisninger ~350 · drøfting med innvending og
  veiing ~400 · konklusjon ~100); ordgrense-økonomi (hva kuttes først);
  referanseteknikk: stedfestet henvisning, sitat vs. parafrase, litteraturliste-
  minimum; forskjellen semesteroppgave vs. eksamensdrøfting (tid til revisjon →
  høyere krav til akademisk form); klipp-og-lim-advarselen (behandles som fusk).
  Gjennomskrevet eksempel med margkommentarer: nyskrevet semesteroppgave om et
  etikk-tema i arkivets sjanger (f.eks. «bør aktiv dødshjelp tillates?» med
  Foot/Velleman). 3 nyskrevne oppgavetemaer med momentlister + én
  «formalfeil-jakt»-øvelse (finn de tre F-fellene i en preparert tekst).
- **Typiske feil:** #10 formalfeilene (alle tre drilles); #11 sitatslurv;
  #9 ubalanse (ren gjengivelse uten egen argumentasjon — vektes likt).
- **Kvote:** 10 quiz / 8 flashcards (formalfellene, vektingsregler,
  disposisjonsmalen).

#### Kapittel 4.6: Feilvaksinen — de 14 feilene som senker karakteren
**id:** `exphil03-4-6` · **number:** 4.6 · **estimatedMinutes:** 50 · **prerequisites:** Del 0–3

- **Kapitteltype:** sjanger (tverrgående drillkapittel — utvidelse av DNA-malen,
  presedens SVMET1010 kap. 9.6; begrunnet i analysens §5-katalog).
- **Description:** Alle 14 sensordokumenterte feil drillet med
  før/etter-omskrivinger og gjenkjenningsoppgaver.
- **Eksamensbelegg:** Analysen §5 komplett; #1/#2 definerer D/E-profilen,
  #4/#9 er C-portens vaktposter (jevnhetsregelen), #3 nulles eksplisitt i hver
  veiledning 2024–2025, #10 gir F, #14 er dokumentert fellekilde etter
  pensumskiftet. Prioritet: perfekt (feilunngåelse er karakterforsikring).
- **Innhold:** Én seksjon per feil: (a) feilen formulert som sensor ser den,
  (b) nyskrevet «slik ser den ut i en besvarelse»-utdrag, (c) omskrevet
  A-versjon av samme passasje, (d) varsellampe-heuristikk. Feilenes hjemkapitler:
  #1→0.2/4.3, #2→0.2/4.4, #3→0.2 + alle temakapitler, #4→0.1, #5→4.3,
  #6→1.1/1.3/2.2/2.6/3.2/3.3, #7→4.1, #8→4.3, #9→0.2, #10→4.5, #11→4.5,
  #12→0.1, #13→3.4/4.4, #14→0.1. Dette kapitlet samler dem og driller
  gjenkjenning («hvilken feil begår denne kandidaten?» — utmerket
  flervalgsformat).
- **Typiske feil:** kapitlet ER feilene.
- **Kvote:** 15 quiz / 8 flashcards (feil↔riktig-omskriving-par,
  feilgjenkjenning).

#### Kapittel 4.7: Modellbesvarelse — Gjøre (a–d: Mill, Kant og utilitarismens holdbarhet)
**id:** `exphil03-4-7` · **number:** 4.7 · **estimatedMinutes:** 50 · **prerequisites:** `exphil03-4-3`, `exphil03-3-3`

- **Kapitteltype:** modellbesvarelse.
- **Oppgavesjanger:** a–d-formatet (V2023–V2025 selvstudium) — kunnskapsdeler +
  drøfting i etikken, arkivets vanligste kombinasjon (Mill 10/24, Kant vs. Mill
  vanligste par).
- **Tema/oppgave (nyskrevet):** (a) gjør rede for nytteprinsippet slik Mill
  formulerer det; (b) forklar en sentral innvending mot utilitarismen og Mills
  svar (høyere/lavere gleder-vrien, med nyskrevet sitatlignende passasje som
  springbrett); (c) sammenlign Mills og Kants syn på hva som gjør en handling
  rett; (d) er utilitarismen en holdbar moralteori? Drøft med utgangspunkt i
  svarene dine.
- **Karakternivåer:** A-besvarelse i full tekst med margnotater («her: begrep +
  VVG-forankring», «her: (b)-poenget gjenbrukt i (d) — gjenbruksbonusen», «her:
  innvendingen veies, ikke bare listes — dette løfter til A») + kommentert
  C-besvarelse (alle deler besvart og korrekte — men (d) er referatforlengelse
  med tynn stillingtagen; notater om gapet: firepunktslisten oppfylt halvveis).
  Avsluttes med `tip` **Sensorblikket**: momentliste bygget på femkravene og
  firepunktslisten, med jevnhetsregelen demonstrert (hvorfor en blank (c) hadde
  senket helheten under C).
- **Typiske feil demonstrert i C-versjonen:** #1, #5, #8.
- **Kvote:** 6 quiz / 5 flashcards.

#### Kapittel 4.8: Modellbesvarelse — Vite (a–c: Descartes, Wikforss og skeptisismen)
**id:** `exphil03-4-8` · **number:** 4.8 · **estimatedMinutes:** 45 · **prerequisites:** `exphil03-4-3`, `exphil03-1-3`

- **Kapitteltype:** modellbesvarelse.
- **Oppgavesjanger:** a–c-formatet (V2023→ begge varianter) i erkjennelsesteori —
  V23s/V25s-mønsteret (skeptisisme/Descartes/Wikforss).
- **Tema/oppgave (nyskrevet):** (a) gjør rede for Descartes' skeptiske argument og
  veien til cogito (S1); (b) forklar med utgangspunkt i en nyskrevet
  sitatlignende passasje hva Wikforss legger i fallibilisme, og hvordan den
  skiller seg fra skeptisisme (S2); (c) trenger vi sikkerhet for å ha kunnskap?
  Drøft med utgangspunkt i svarene dine (S4).
- **Karakternivåer:** A-besvarelse i full tekst med margnotater (trinnvis
  argumentrekonstruksjon i (a); presist fallibilisme/skeptisisme-skille i (b);
  (c) som setter Descartes' sikkerhetskrav opp mot Wikforss' tre vilkår og VEIER
  dem, med KI-/dagliglivs-eksempel som selvstendig bidrag) + kommentert
  C-besvarelse (korrekt (a), men (b) glir mellom fallibilisme og skeptisisme —
  presisjonsfeil #6 demonstrert; (c) gjentar (a) uten stillingtagen). Sensorblikket
  med momentliste.
- **Typiske feil demonstrert i C-versjonen:** #6, #1, #7.
- **Kvote:** 6 quiz / 5 flashcards.

#### Kapittel 4.9: Modellbesvarelse — H2025-formatet (tre deler: Vite, Være, Gjøre)
**id:** `exphil03-4-9` · **number:** 4.9 · **estimatedMinutes:** 50 · **prerequisites:** `exphil03-4-7`, `exphil03-4-8`

- **Kapitteltype:** modellbesvarelse.
- **Oppgavesjanger:** H2025-strukturen — tre deler A (Vite), B (Være), C (Gjøre),
  én av to oppgaver per del, tre kortere besvarelser på 4 timer. Trener
  tidsdisiplin og jevnhet på tvers av feltene (C-porten).
- **Tema/oppgave (nyskrevet, tre valgte oppgaver):** Del A: Sokrates' kritikk av
  de tre gruppene i Forsvarstalen + drøft hvem som truer kunnskapssamfunnet mest
  i dag (V25sem/H25s-gjenbruksmønsteret, omskrevet). Del B: Haslangers skille
  mellom konstruksjon av begreper og objekter (med nyskrevet sitatlignende
  passasje) + drøft om også biologisk kjønn kan være konstruert (H2025-vrien).
  Del C: Lockes eiendomsrettsargument + drøft Helds innvending mot
  kontraktsmodellen (Locke-triaden, omskrevet).
- **Karakternivåer:** A-besvarelse i full tekst med margnotater (inkl.
  tidsbudsjett-noter: ~75 min per del, jevn kvalitet som eksplisitt strategi) +
  kommentert C-besvarelse der del A er sterk, del B middels og del C tynn —
  brukes til å demonstrere JEVNHETSREGELEN (én blank/svak del trekker helheten
  under C, uansett hvor god del A er). Sensorblikket: femkravene anvendt per del
  + helhetsvurderingen.
- **Typiske feil demonstrert i C-versjonen:** #4, #9, #6 (sex/gender-glidning i
  del B).
- **Kvote:** 6 quiz / 5 flashcards.

---

## Kvotesammendrag (AUTORITATIV for alle senere faser)

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 2 | 25 | 20 | 0 (dekkes av øvingseksamenene) |
| 1 | 5 | 130 | 130 | 4 |
| 2 | 6 | 140 | 140 | 4 |
| 3 | 8 | 190 | 190 | 4 |
| 4 | 9 | 97 | 71 | 4 |
| **Sum** | **30** | **582 ✓ (≥500)** | **551 ✓ (≥500)** | **16 + 3 øvingseksamener** |

Summeringskontroll per del: Del 0: 10+15=25 q / 10+10=20 f. Del 1:
30+25+30+20+25=130 q / 30+25+30+20+25=130 f. Del 2: 25+30+20+25+15+25=140 q /
25+30+20+25+15+25=140 f. Del 3: 30+30+30+20+25+25+15+15=190 q /
30+30+30+15+25+25+15+20=190 f. Del 4: 15+12+15+12+10+15+6+6+6=97 q /
10+10+10+10+8+8+5+5+5=71 f. Totalt 582/551.

**Flashcard-profil:** hovedvekt på filosof↔begrep↔verk-koblinger (Descartes↔
metodisk tvil↔Meditasjonene; Wikforss↔tre vilkår↔Kunnskapsresistens; Mill↔
høyere/lavere gleder↔Utilitarisme; Haslanger↔begreps-/objektkonstruksjon↔Sosial
konstruksjon; Held↔mor–barn-modellen↔Det kontraktsløse samfunn osv.) — modellert
på 2017–2018-kortsvarene (S6): presise éndefinisjoner av typen «hva er X hos Y».
Det er nøyaktig presisjonen kunnskapskriteriet måler. **Quiz-profil:** flervalg
med nabobegrep-distraktorer (fallibilisme/skeptisisme, kategorisk/hypotetisk,
sex/gender, begrep/objekt-konstruksjon, handlings-/regelnivå, plikt/tilbøyelighet,
aitia/moderne kausalitet) + trinnrekkefølge-spørsmål (tvilstrappen, firårsaks-
skjemaet, femtrinnsdrøftingen) + «hvem hevder hva»-koblinger.

---

## 4. Prøver

### Temadelprøver (4 per temadel + treningsdel, del 1–4 = 16 prøver)

Hver prøve speiler eksamensformatet i miniatyr (kunnskapsdel + drøftingsdel
og/eller flervalg). Omfang 20–45 min der ikke annet er angitt. Alle oppgaver
nyskrevne.

**Prøve-kvote Del 1:** 4 prøver:
1. *Descartes og Wikforss — begrepspresisjon:* 10 flervalg (fallibilisme/
   skeptisisme-distraktorer) + 1 kortredegjørelse (tvilstrappen i rekkefølge).
2. *Sitattolkning Vite:* 3 nyskrevne sitatlignende passasjer (Descartes-stil,
   Wikforss-stil, Kant-opplysning-stil) tolkes etter S2-oppskriften (30 min).
3. *Kunnskap og demokrati:* kortdrøfting (45 min) — «hvem truer det opplyste
   samfunnet mest?» med krav om minst to av Sokrates/Kant/Wikforss + momentliste.
4. *Blandet Vite-prøve i a–c-miniformat:* (a) Lakatos' demarkasjonskriterium,
   (b) anvend på nyskrevet pseudovitenskap-case, (c) kort drøfting av kriteriets
   holdbarhet.

**Prøve-kvote Del 2:** 4 prøver:
1. *Aristoteles' metafysikk:* 10 flervalg (årsakstyper, form/stoff, aitia-fellen)
   + firårsaks-analyse av ny hverdagsting.
2. *Sinn og kropp:* kortdrøfting (30 min) — rekonstruer interaksjonsproblemet og
   vurder ett mulig Descartes-svar; momentliste.
3. *Haslanger-mekanikken:* 8 flervalg (begrep/objekt, sex/gender,
   eliminativisme) + kort S2-tolkning av nyskrevet konstruksjons-passasje.
4. *Blandet Være-prøve i a–c-miniformat:* (a) teleologien hos Aristoteles,
   (b) evolusjonsinnvendingen (Dawkins), (c) drøft om innvendingen er
   avgjørende — med (a)/(b)-gjenbrukskrav.

**Prøve-kvote Del 3:** 4 prøver:
1. *Teoritrekanten:* 12 flervalg (rett-gjørende egenskap per teori,
   kategorisk/hypotetisk, høyere/lavere, midten) + 2 kortredegjørelser.
2. *Case-anvendelse:* nytt tankeeksperiment («den velvillige overvåkeren») ×
   alle tre teorier etter firetrinnmetoden (45 min, momentliste — trener
   premissdisiplin #13).
3. *Locke–Held i a–c-miniformat:* (a) eiendomsrett gjennom arbeid,
   (b) Helds kontraktkritikk, (c) drøft kontraktsteoriens menneskesyn.
4. *Eutanasi-drøfting:* (45 min) Foot mot Velleman på nyskrevet klinisk
   vignett; momentliste med begge tenkeres mekanismer som obligatoriske momenter.

**Prøve-kvote Del 4:** 4 prøver:
1. *Sitattolknings-drill på tvers:* 4 nyskrevne passasjer fra ulike deler
   (Mill, Street, Sylvan, Velleman-stil) — funksjonsidentifikasjon +
   plassering i argument.
2. *Drøftingsdel-drill:* 2 rene (c)-deler skrives på gitte (a)/(b)-sammendrag
   (gjenbruksbonusen trenes isolert); vurderes mot firepunktslisten.
3. *Sammenligningsprøve:* ett par trekkes (av de åtte faste) — full S3-besvarelse
   (40 min) + selvvurdering mot dimensjonskravet.
4. *Feilgjenkjenningsprøve:* 12 nyskrevne besvarelsesutdrag — identifiser
   hvilken av de 14 feilene hver begår, og reparer to av dem.

### Komplette øvingseksamener (3)

Alle med full momentliste-fasit og nivåbeskrivelse per del (A/C-kjennetegn fra
femkravene). Alle oppgaver, sitatlignende passasjer og case nyskrevne.

1. **Øvingseksamen A (H2025-formatet, 4 t skoleeksamen):** Del A (Vite): velg én —
   (i) Descartes' skeptiske argument + drøft om cogito kan bære gjenoppbyggingen,
   (ii) Wikforss' tre vilkår + drøft kunnskapsresistens som demokratiproblem.
   Del B (Være): velg én — (i) de fire årsakene + drøft teleologiens stilling
   etter evolusjonsteorien, (ii) Haslangers konstruksjonsskiller + øde
   øy-drøfting. Del C (Gjøre): velg én — (i) Kants kategoriske imperativ med
   maksime-test + drøft «kald pliktetikk»-innvendingen, (ii) Foots
   eutanasi-analyse + drøft mot Vellemans verdighetsargument.
2. **Øvingseksamen B (a–d-formatet V2023–V2025, 4 t skoleeksamen):** velg én av
   to store oppgaver — Oppgave 1 (Gjøre/Vite-miks): (a) nytteprinsippet,
   (b) sitatlignende passasje om gledenes kvalitet (S2), (c) Kant-kontrasten,
   (d) drøft utilitarismens holdbarhet med utgangspunkt i svarene. Oppgave 2
   (Være/Gjøre-miks): (a) Lockes naturtilstand og kontrakt, (b) eiendomsretts-
   passasje (S2), (c) Helds innvending, (d) drøft om samfunnet bør forstås som
   en kontrakt.
3. **Øvingseksamen C (seminarvarianten, 2,5 t hjemmeeksamen + semesteroppgave-
   simulering):** Hjemmeeksamen: én av to a–c-oppgaver (i) Sokrates/Wikforss om
   kunnskap og offentlighet, (ii) Aristoteles-dyd/Foot om det gode liv og døden.
   + Semesteroppgave-simulering: nyskrevet etikk-tema (800–1000 ord) med
   sjekkliste for de tre F-formalfellene og vektingsreglene fra kap. 4.5.
   Begrunnelse: seminarvarianten er halvparten av kandidatmassen og har egne
   F-feller — øvingseksamen C er deres formatspeil.

---

## 5. Studieguide-disposisjon

1. **Slik er eksamen** — begge varianter (selvstudium 4 t / seminar
   semesteroppgave + 2–2,5 t), formatene H2025 (A/B/C) og a–c/a–d,
   delspørsmålslogikken, gjenbruksbonusen, tidsbudsjetter (fra kap. 0.1).
2. **Tenkergalleriet** — én side per kjernetenker (Mill, Aristoteles ×2 roller,
   Kant ×3 tekster, Wikforss, Descartes ×2 roller, Platon/Sokrates ×3 tekster,
   Locke, Haslanger, Held, Foot, Velleman, Lakatos, Sylvan, Elisabeth,
   Dawkins/Street): kjerneargument trinnvis + tekstens eget eksempel + frekvens +
   typisk oppgaveformulering + farligste presisjonsfeil.
3. **Begrepsbank med avsender** — alle kjernebegreper alfabetisk, hver med
   én-setnings definisjon + tenker + verk (flashcard-speilet i prosaform,
   S6-formatets logikk).
4. **Sammenligningskartene** — de åtte faste parene med 2–4 dimensjoner hver
   (Kant/Mill, Platon/Aristoteles, Descartes/Elisabeth, Mill+Kant/Aristoteles,
   Locke/Held, utilitarisme/dydsetikk, Foot/Velleman, Wikforss/Descartes).
5. **Sitattreningslisten** — de typiske sitatkildene per tenker og hva
   S2-oppskriften krever gjort med dem.
6. **Drøftingsformelen** — firepunktslisten + femtrinnsstrukturen +
   gjenbruksbonusen som huskeliste med eksempelfraser («som vist i (a) …»).
7. **Feilvaksine-kortversjonen** — de 14 feilene som énlinjers varsellamper,
   inkl. gammelt pensum-spøkelset (#14) med navneliste over tenkerne som gir
   null uttelling.
8. **Karakterkalibrering** — femkravene, tersklene (E/D, C-porten = jevnhet,
   A/B = vurderingsevne + selvstendighet) og det som nulles (leksikonsvar) i
   tabellform.
9. **Ukeplan** — 6-ukers og 2-ukers lesningsløp mot eksamen med
   prøve-innplassering (temadelprøver underveis; øvingseksamen A/B/C — velg
   etter egen variant — de siste to ukene).

---

## 6. Byggerekkefølge og verifikasjon

### Rekkefølge for forfatter-agenten (Opus)

1. **Metadata først:** `TextbookCourse`-oppføring (mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`, skrives til
   `textbook-courses-hoyskole.ts`): id `exphil03`, title, `level: 'Høyskole'`,
   alle 30 kapitler med id/number/title/description/estimatedMinutes/topics/
   prerequisites fra dette skjelettet, `sectionNames` fra del 2-tabellen.
2. **Del 0** (etablerer mantraene alle senere kapitler refererer: «forankring
   uten avsender er C-stoff», «gjengivelse uten drøfting er D-stoff»,
   jevnhetsregelen, gjenbruksbonusen).
3. **Del 1 → 2 → 3** i rekkefølge (prerequisites peker bakover; 2.1 bygger på
   1.2, 2.4 på 1.1, 3.1 på 2.2 — rekkefølgen respekterer dette).
4. **Del 4** til slutt (sjangerkapitlene og modellbesvarelsene gjenbruker
   begreper, kontrastkart og case fra temadelene — 4.7 bygger på 3.3, 4.9 på
   Locke-triaden i 3.6).
5. **Prøver og øvingseksamener** etter at alle kapitler finnes.
6. **Narrativ-versjoner** (`<id>-narrativ.json` per kapittel, jf. `/narrativ`) og
   quiz-registrering til slutt.

Per kapittel gjelder DNA-blokkstrukturen (temakapittel: `tip` Eksamensvinkel →
`text` temaet i fagets landskap → `definition` kjernebegreper (flashcard-kilden —
toppnivå med title!) → `text` posisjoner og spenninger → `example` anvendelse
×1–3 → `warning` typiske feil → `exercise` ×4–8 (2–3 begreps-/kontrollspørsmål,
1–2 kortdrøftinger med disposisjonsforslag, 1–2 eksamenslike oppgaver med
momentliste) → `collapsible` pensumkart for kapitlet; sjanger- og
modellbesvarelseskapitler etter sine respektive DNA-oppsett). Eksamensvinkel- og
Typiske feil-blokkene fylles med belegget og feilkodene fra dette skjelettet —
forfatteren skal IKKE finne på frekvenstall.

### Verifikasjonssjekkliste (kjøres FØR ferdigmelding)

- [ ] **JSON-validering:** alle nye `src/lib/data/chapters/exphil03-*.json`
      parser med `json.load` (lærdom: én uescapet anførsel har tidligere blokkert
      hele prebuild — generer via `json.dump`). `npm run build` grønn — vis output.
- [ ] **Metadata-konsistens:** alle 30 kapittel-id-er i course-oppføringen har
      eksisterende content-fil; `number` er del-basert («3.4», ALDRI lineær);
      prosareferanser bruker samme form («kap. 3.4»); prerequisites peker på
      eksisterende id-er; `sectionNames` satt; narrativ-id-er registrert slik at
      toggle rendrer (verifiser med prod-server + curl at narrativ-ruter gir 200).
- [ ] **Pensumreferanser EKTE:** kun tenkere/verk fra dette skjelettets
      begrepskontrakter (Descartes, Kant, Platon/Sokrates, Aristoteles, Mill,
      Locke, Wikforss, Haslanger, Held, Foot, Velleman, Lakatos, Jaggar, Benatar,
      Sylvan, Appiah, Elisabeth av Böhmen, Dawkins, Street, Einstein, Galileo-
      stoffet, Frankfurt-temaet — alle via VVG). ALDRI oppdiktede referanser,
      ALDRI sidetall utover de attesterte (s. 69–70, 141, 245–246, 250, 289–295,
      316, 327, 399, 402–403, 430, 445, 514, 522–523, 542–543). Alle
      VVG-kapittel-/sidetallskoblinger beholder ⚠-forbehold i pensumkart-blokkene
      («utgaveavhengig — attestert i eksamenssett 2021–2025»).
- [ ] **Kalibreringssjekk (pensumregimet):** grep etter forbudt-termene som
      pensumankere: Hume, Beauvoir, Singer, Smart, Fried, Hursthouse, Feldman,
      Heisenberg — de skal KUN forekomme i kap. 0.1-advarselen og
      studieguidens feilvaksine (#14), aldri som forankring i tema-, sjanger-
      eller modellkapitler. Dyreetikk uten Singer; eutanasi via Foot/Velleman,
      ikke abort-stoff; er/bør-poenger uten Hume-attribusjon.
- [ ] **Kvotesum:** quiz ≥582 og flashcards ≥551 fordelt per kapittel som angitt
      (hardt minimum: ≥500/≥500); 4 prøver per del for del 1–4 (16) + 3
      øvingseksamener; fasit-svaralternativer rebalansert (jevn a/b/c/d —
      options[0] er alltid riktig i staging, runtime stokker).
- [ ] **Opphavsrett:** alle oppgaver, case, tankeeksperiment-varianter,
      sitatlignende passasjer og modellbesvarelser er NYSKREVNE — ingen
      formuleringer fra UiO-oppgavesett eller sensorveiledninger, ingen ordrette
      VVG-sitater (referer og parafraser; «sitatlignende passasjer» skrives i
      tenkerens stil av forfatteren, aldri kopiert). Arkivets caser (den snille
      slaveeieren, øde øy osv.) gjenskapes med endrede fakta og formuleringer.
- [ ] **Leserkrav:** forkunnskaper-blokk med lenker først i hvert kapittel
      (lenk kun til eksisterende kapitler); Eksamensvinkel-`tip` og Typiske
      feil-`warning` i hvert kapittel; hver oppgave sjangerforankret (S1–S7);
      «bør kjenne til»-stoff (Jaggar, Galileo, bullshit, Benatar, Appiah,
      Einstein) plassert ETTER kjernestoffet og eksplisitt merket;
      symbol-/formelliste-kravet er ikke-relevant (kapitler uten
      symboler/formler — unntaket i README gjelder).

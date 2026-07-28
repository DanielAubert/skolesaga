# Produksjonsløype for høyskolebøker (v3)

Den optimaliserte algoritmen for å bygge en eksamensrettet høyskolebok, basert
på ECON1310- og JUS1111-løpene (6. juli 2026). Følg fasene i rekkefølge.

## Fase 1 — Eksamensanalyse (1 agent)
Leser hele eksamensarkivet (`~/Desktop/Eksamner/<inst>/<kode>/`): ALLE
sensorveiledninger grundig, siste ~8 år oppgaver grundig, eldre skummet.
Skriver `<emne>/EKSAMENSANALYSE.md` (temafrekvens, oppgavesjangre, sensorkrav,
typiske feil, prioritering). Kvantitativ. Alt omskrevet (opphavsrett).

## Fase 2 — Skjelett (1 agent)
Leser README + DNA-arketype + analyse + fagbeskrivelse. Skriver
`<emne>/SKJELETT.md`. **Standardformat per kapittel**:
`#### Kapittel <del>.<nr>: Tittel` etterfulgt av bullet
`**id:** \`<emne>-<del>-<nr>\` · **number:** <del>.<nr> · **estimatedMinutes:** M ·
**prerequisites:** \`<id>\``, deretter kapitteltype/description/eksamensbelegg/
innholds-/regel-/begrepskontrakt/typiske feil/kvote.

**LÆRDOM JUS1111: `number` SKAL være del-basert («2.3»), ALDRI lineær
(«12»)** — bokforsiden grupperer på `number.split('.')[0]`, og lineær
nummerering ga 42 rotete grupper som krevde full renummerering av 359
prosareferanser i etterkant. Prosareferanser i innholdet bruker samme
del-baserte form («kap. 2.3»).

Skjelettet skal også angi: **seksjonstitler per del** (blir `sectionNames` i
metadata — vises som «Kapittel N: <beskrivende tittel>» på bokforsiden),
**kvotesammendrag-tabell** (quiz/flashcards/prøver per del — AUTORITATIV for
alle senere faser) og prøvekvoter per del (`**Prøve-kvote Del N:** 4 prøver (…)`).

**LÆRDOM (audit 7. juli): ≥500 er et GULV, ikke et mål.** 23 av 32 skjeletter
i første runder hugget 500–515-taket, verst på flashcards — faktatunge og store
fag underleverte relativt (NOKUT-AFB, det reneste puggefaget, hadde LAVEST
flashcards/kapittel). Skjelettagenten skal skalere kvoten til fagets omfang og
natur: fakta/pugg-fag og begrepsrike drøftingsfag → høy flashcard-tetthet
(gjerne 650–800); bøker med >32 kapitler → tilsvarende høyere sum; rene
regnefag med få begreper kan ligge nær 500. Ikke fyll opp til akkurat 500 hvis
faget bærer mer — la kapittelinnholdet bestemme, og forklar tettheten i
kvotesammendraget.

**For jus-/lovtunge fag:** skjelettagenten skal sjekke sentrale lover mot
GJELDENDE lovtekst (WebFetch mot lovdata.no) FØR regelkontraktene skrives —
sensorveiledninger speiler rettstilstanden i sitt år, ikke dagens (JUS1111:
fkjl. ble lagt om 1.1.2024; § 17-læren fra eldre sensorveiledninger var
foreldet og krevde doktrinær omskriving i etterkant). Marker likevel usikre
detaljer med `(verifiser)`.

## Fase 3 — Byggekontrakt (orkestrator, manuelt)
Skriv `<emne>/BYGGEKONTRAKT.md` fra econ1310/jus1111-malen: blokk-skjema,
filplassering, quiz-staging-format (options[0] = riktig), begrepsbank/flashcard-
mekanikken (flashcards genereres KUN fra definition-blokker på toppnivå med
title), prøvekapittel-spesifikasjon (`<emne>-<del>-prove`, chapterNumber
`<del>.P`), **Leserkrav-seksjonen ordrett** (forkunnskaper-blokk med
kryssbok-lenker, kun eksamensrelevant, engasjerende språk, meningsfulle
oppgaver) og fagspesifikk stilseksjon (notasjon/rettskildekrav/pensumankere).

**LÆRDOM ECON1310:** Leserkravene kom som retrofit-bølge (5 ekstra agenter).
De skal inn i byggekontrakten FØR byggebølgen — førsteutkastet skal oppfylle
alt, så blir fase 6 en billig verifisering i stedet for en dyr omskriving.

## Fase 4 — Byggebølge (7–9 agenter, parallelt, bakgrunn)
- **Batching: én agent per hel del.** Splitt aldri en del på tvers av agenter
  uten grunn (ECON1310 Del 5 ble delt på to → stilavvik + én faktafeil som
  konsistenssjekken måtte ta). Er delen > ~7 kapitler, del den, men gi begge
  agentene HELE delens kontrakter å lese, og flagg delen for konsistenssjekk
  i fase 6.
- Prøvekapitlet til en del bygges av samme agent som delen.
- Øvingseksamen-/praktikumsdelen bygges av én agent som leser HELE skjelettet.
- Hver agent: les BYGGEKONTRAKT + sine skjelettavsnitt (+ nabodelers
  kontrakter ved avhengighet) + referansekapittel-JSON. Skriv kapittelfiler +
  quiz-staging. **Kvotene fra skjelettets kvotesammendrag er fasit** — ikke
  overstyr i prompt (ECON1310 mistet 15 quiz på en prompt-forenkling).
- **Læringsløkke-struktur (UFRAVIKELIG, jf. README «Leserkrav» + DNA-malene):**
  hvert delkapittel bygges som gjentatte små løkker teori → eksempel → oppgave,
  IKKE all teori øverst og alle oppgaver nederst. `exercise`-blokkene ligger
  INLINE i `content[]` rett etter eksempelet/teorien de hører til (plattformen
  renderer inline). Ingen oppgave får kreve en regel/formel/metode/begrep leseren
  ikke har møtt ennå — bare stoff introdusert t.o.m. eksempelet foran eller i et
  eksplisitt refererte forkunnskapskapittel. Agenten verifiserer forkunnskaps-
  dekningen eksplisitt før ferdigmelding.
- **Nybegynner-inngang (UFRAVIKELIG, jf. README «Leserkrav» + DNA-malene):**
  boka skal forstås av en student som ALDRI har hatt faget — det er META-språket
  rundt eksamen (sjanger-/oppgavekoder, karaktersjargong som «C-stoff»/«A-markør»,
  feilkoder #N, insider-termer) som må ryddes. HVER kode/term forklares i
  klarspråk ved FØRSTE bruk; ingen kald kode i `competenceGoals`/læringsmål eller
  i aller første tekstboks. Del 0 skal ha en **«Slik leser du denne boka»-
  orienteringsboks (type `text`/`tip`, ALDRI `definition` — ville endret
  flashcard-kvoten)** med karakter-/vurderingsskala + kompakt kodeliste + at feil
  har et samlet register. Karaktersjargong som motsier eksamensformen (f.eks.
  «A-kandidat» der eksamen er bestått/ikke-bestått) unngås eller rammes inn.
- **Studentpanel-krav (jf. README «Leserkrav» + byggeprompten i
  BYGGEPLAN-MAL):** inn i FØRSTEUTKASTET (retrofit er dyrt) — stokkede
  prøve-flervalg (aldri «alle a»), Del 0-pakke («Lite tid?»-boks, kildenote
  for frekvens-empiri, prosedyrekort), klikkbare kap-lenker i fasiter/
  forkunnskaper, begrepsbank-notiser, karakter-realisme (aldri «Prioritet:
  perfekt»; ærlig merkede modellbesvarelser + B-/marginal-besvarelse),
  selvdiagnose-sjekklister etter prøvefasiter, lette innstegsoppgaver,
  hverdagsanker + verdens-caser for abstrakte kjernetemaer, tidsbudsjett-
  konsistens — pluss arketypens studentpanel-seksjon (regnefag: figurkrav/
  symbolliste sist/formel-minimum/matematisk sannhetskontroll; jus:
  lovhenvisningsboks/Lovdata-driller/lovprefiks/faglig presisjon-seksjonen;
  drøfting: selvrettingsrubrikk/sitatlager-bro/relevans-ramme/erfarings-bro).
- **Studentpanel bølge 4+5 (jf. README «Leserkrav» + byggeprompten i
  BYGGEPLAN-MAL):** også inn i FØRSTEUTKASTET — varierte fasitmønstre i ALLE
  ensartede lister (aldri «alle a»/«alle felle»); distraktorer gjengir aldri
  bokas egne nyanser; hints på alle oppgaver (aldri konklusjonen) + merket
  kald bank uten hint og noen «(krevende)»-oppgaver; minst én skarp
  A-konklusjon (ikke alle på kompromissform); meta-fasit forbudt (skriv
  drøftelsen ut); signalbokser ETTER oppgaven; frekvenstall = telte belegg;
  faglige påstander verifisert FØR skriving (regnefag: numerisk
  parametersjekk; jus: terskelretning mot Lovdata + dommer med faktum);
  øktmerking per løkke (> 45 min) + pausepunkter i lange modellbesvarelser;
  prøver som «N à ~X min» + deling; lesetid-setningen i «Lite tid?»-boksen;
  feilkode-gloss per kapittel; «Sist du var her»-blokker; deltidsrute +
  «lese mye, skrive lite»-boks; samlet oppslagskort per bok.
- Egenvalidering per agent: json.load, kvotetelling, fagets forbudt-termer-grep.
- Maks ~8 samtidige agenter; ved degradert API, vent (jf. 16. juni-lærdommen).
- **Agenter kan dø på sesjonsgrenser midt i bølgen** (JUS1111: 2 av 9 traff
  grensen etter at nesten alt var skrevet). Etter bølgen: MÅL DISK (hvilke
  filer finnes + parser) og gap-fill kun det som mangler — aldri bygg på nytt.

## Fase 5 — Sentral wiring (orkestrator, skript)
Parameterisert skript (mønster: `wire-econ1310.py`, tilpasset skjelettformatet):
1. Parse skjelettet → kapitteliste + prøvekapitler (etter hver del).
2. Verifiser at alle filer finnes og parser; tell oppgaver (exerciseCount).
3. Generer `TextbookCourse` i `src/lib/data/textbook-courses-hoyskole.ts`
   (append), wire import/array i `textbook-courses.ts` (første gang).
4. `_registry.json`: append alle nye id-er.
5. Slå sammen quiz-staging → `quiz-data-<emne>.ts`, wire i `quiz-data.ts`.
   Slett quiz-staging etter merge (mellomprodukt, skal ikke committes).
6. **Navigasjon**: legg emnet inn i `src/app/trinn/hoyere/institusjoner.ts`
   under riktig institusjon, navn = «FAGKODE Fagnavn».
7. **Seksjonstitler**: `sectionNames` i TextbookCourse-oppføringen
   (del-nummer → beskrivende tittel fra skjelettet) — obligatorisk; uten den
   viser bokforsiden «Seksjon N».

## Fase 6 — Verifiseringsbølge (3–5 agenter, parallelt)
Redaktører per del-gruppe. IKKE omskriving — verifisering med kirurgiske fiks:
- Leserkrav oppfylt (forkunnskaper-blokk finnes, lenker peker på eksisterende
  kapitler, sjangerforankring per oppgave)?
- **Læringsløkke + forkunnskapsdekning** (jf. README «Leserkrav»): `content[]`
  veksler teori→eksempel→oppgave i løkker (ikke all teori topp / alle oppgaver
  bunn), oppgaver ligger inline, og INGEN oppgave krever et begrep/regel/formel
  som ikke er introdusert tidligere i kapitlet eller i en refererte forkunnskap.
- **Nybegynner-lesning av kap. 0** (jf. README «Leserkrav»): les Del 0 som en
  student som aldri har hatt faget — er alle koder (sjanger-/oppgavekoder,
  feilkoder #N), karaktersjargong («C-stoff»/«A-markør») og insider-termer
  forklart ved FØRSTE bruk? Finnes «Slik leser du denne boka»-orienteringsboksen
  (type `text`/`tip`, ALDRI `definition`) med skala + kodeliste + feilregister?
  Ingen kald kode i `competenceGoals`/læringsmål eller i første tekstboks?
- **Studentpanel-sjekker** (jf. README «Leserkrav» + verifikatorprompten i
  BYGGEPLAN-MAL): «alle a»-mønster i prøve-flervalg; «les Del 0 med lite
  tid»-test (hurtigrute/kildenote/prosedyrekort finnbare); tomme collapsibles
  (`content`-nøkkel med blokker, aldri `text`/tom array); korrektur-grep
  (brukne ord, danske former, «kapittel 0.»-rester); grep «Prioritet:
  perfekt» = 0; tidsbudsjett-konsistens; døde kap-referanser i fasiter;
  feilmerkede modellbesvarelser (tittel vs. margnotat); regnefag: ingen
  «grafisk drill» uten figur.
- **Bølge 4+5-sjekker** (jf. README «Leserkrav» + verifikatorprompten i
  BYGGEPLAN-MAL): ensartede fasitmønstre i ALLE lister (også «alle felle»);
  distraktorer som gjengir bokas egne nyanser; tomme hint-felt (unntatt
  merket kald bank — sjekk at den finnes); meta-fasit-grep («en A-besvarelse
  ville», «ville ha drøftet») = 0; alle A-konklusjoner på samme
  kompromissform; signalbokser plassert FORAN oppgaven de varsler; TELL
  frekvenspåstander mot belegg-listene; øktmerking/pausepunkter i kapitler
  > 45 min og prøvedeklarasjon «N à ~X min»; feilkode-gloss per kapittel;
  «Sist du var her»-blokker i tunge kapitler; samlet oppslagskort finnes;
  regnefag: etterregn fortegns-/entydighetspåstander numerisk i fullt
  parameterrom (usanne «Vis at …»-oppgaver kan ikke løses); jus: dommer har
  faktum, spesialregel-utløsende faktum har regelen undervist og i registrene.
- Faktasjekk mot skjelettkontraktene; etterregn alle talleksempler.
- Konsistens på tvers av agentgrenser (notasjon, ingen motstridende påstander).
- Fagspesifikk kildeverifisering: jus → paragrafer/domsreferanser sjekkes mot
  Lovdata/nett (WebFetch); drøftingsfag → pensumreferanser er reelle.
  **LÆRDOM JUS1111:** (1) grep `-i verifiser`, ikke bare `(verifiser)` —
  sammensatte varianter som `(verifiser ledd)` utgjorde 2/3 av markeringene;
  (2) stikkprøv også UMARKEDE doms-/paragrafreferanser (en umarkert HR-dom
  viste seg å være feilattribuert); (3) sjekk lovtunge kapitler mot GJELDENDE
  rett, ikke bare referansene — foreldet doktrine (fkjl. § 17 før/etter 2024)
  er verre enn feil årstall og kan kreve egen doktrinær omskrivingsagent.
- Kvoter må IKKE endres (definition-telling før/etter).

## Fase 7 — Sluttvalidering + deploy (orkestrator)
1. Sentral sveip: json.load alle filer, kvotesum mot skjelettet, døde
   kryssbok-lenker, forbudt-termer.
2. `npx tsc --noEmit` + `npm run build` (kjører combine-chapters — fanger
   ugyldig JSON i registry).
3. Prod-server + curl: institusjonssider, bokforside, minst 3 kapitler
   (teori/drill/prøve), quiz- og flashcard-rute — 200 + innholdssjekk
   (grep etter kapittelspesifikk streng). ALDRI meld ferdig uten dette.
4. Commit + push (når bruker har bedt om det); oppdater minne.

## Kjente feller
- Flashcards kommer KUN fra toppnivå `definition`-blokker med `title` —
  collapsible-innhold telles ikke.
- `options[0]` er alltid riktig svar i quiz (runtime stokker).
- LaTeX i JSON: `\\` — én agent-generasjon med råskrevet JSON ga aldri feil
  når agentene genererte via `json.dump`; anbefal det i kontrakten.
- `_all.json` er gitignored (genereres i prebuild); `_registry.json` committes.
- Statisk rute vinner over `[grade]` — nye statiske sider under
  `/trinn/hoyere` krasjer ikke med dynamikken, men fjern duplikat fra
  `GRADE_CONFIG`/`generateStaticParams`.

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
6. **Navigasjon**: legg emnet inn i `src/app/bok/trinn/hoyere/institusjoner.ts`
   under riktig institusjon, navn = «FAGKODE Fagnavn».
7. **Seksjonstitler**: `sectionNames` i TextbookCourse-oppføringen
   (del-nummer → beskrivende tittel fra skjelettet) — obligatorisk; uten den
   viser bokforsiden «Seksjon N».

## Fase 6 — Verifiseringsbølge (3–5 agenter, parallelt)
Redaktører per del-gruppe. IKKE omskriving — verifisering med kirurgiske fiks:
- Leserkrav oppfylt (forkunnskaper-blokk finnes, lenker peker på eksisterende
  kapitler, sjangerforankring per oppgave)?
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
  `/bok/trinn/hoyere` krasjer ikke med dynamikken, men fjern duplikat fra
  `GRADE_CONFIG`/`generateStaticParams`.

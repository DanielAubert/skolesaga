# Byggekontrakt: MED1100 Medisinstudiet modul 1 (UiO) — teknisk kontrakt for kapittelforfattere

Denne kontrakten gjelder ALLE forfatter-agenter som bygger kapitler til
`med1100`. Den definerer eksakt filformat, obligatorisk struktur, terminologi,
kildepåstander, helsefaglige forbehold og kvalitetsporter. **Faglig innhold
styres av `SKJELETT.md`** (per-kapittel-kontrakt) — les ditt kapittels avsnitt
der ordrett, pluss `EKSAMENSANALYSE.md` når du trenger mer kontekst.

Instansiert fra `../BYGGEKONTRAKT-MAL.md` 28. juli 2026. Mønstre for dybde og
form: `../fys1100/BYGGEKONTRAKT.md` og `../sosant1000/BYGGEKONTRAKT.md`.

MED1100 er en **fakta/pugg-hybrid**: et svært faktatungt puggefag (nærmeste
forbilde `../DNA-nokut-afb`-linja) **med en betydelig regnedel** — medisinsk
statistikk er 40 % av blokk 1 og følger **DNA-regnefag** (regneprosedyrer som
`theorem`-blokker, gjennomregnede eksamenscase, drill med stigende vanskegrad).
Blokk 2s essaydel låner momentliste-logikken fra DNA-drøfting (fritekst rettet
mot punktlister). **Ingen ren DNA-mal passer** — strukturen er skreddersydd og
dokumentert i skjelettets §2 «Arketypetilpasning», som du skal lese før du
skriver en linje.

Og over alt annet står **det avgjørende strukturvalget**: modulen avsluttes
IKKE med én samlet eksamen, men med **TRE separate blokkeksamener** med helt
forskjellig format, fagområde og svarlogikk. Alle tre må bestås, og en svak
blokk kan ikke kompenseres med en sterk. Boka er derfor tre parallelle delbøker.

Kontrakten har åtte fagspesifikke bindende deler:

| Del | Hva den styrer |
|---|---|
| **§B Blokk-kontrakten** | tre eksamener, tre formater, tre svarlogikker — og minuspoeng-asymmetrien |
| **§H Helsefaglig forbehold** | boka er eksamensforberedelse, ALDRI helseråd eller klinisk veiledning |
| **§M Medisinsk presisjon** | ingen oppdiktede tall/navn; usikre verdier merkes og holdes ute av fasiter |
| **§T Terminologi- og notasjonskontrakten** | latin, enheter, kjemi- og statistikknotasjon, sjanger- og feilkoder |
| **§S Sensorkontrakten** | de seks kredittreglene per blokk, momentlister, bestått/ikke bestått |
| **§R Regnekontrakten** | statistikk og blokk 2-regning: vist utregning, enheter, etterregning |
| **§G Figurkontrakten** | skjematiske SVG-er, aldri utgitt for å være ekte mikroskopibilder |
| **§K Kvotekontrakten** | quiz 706 · flashcards 734 (GULV), per kapittel |

---

## §0 PLATTFORMSTØTTE — hva du kan stole på

1. **Markdown + LaTeX rendres** av `LatexRenderer`: `$…$` inline, `$$…$$`
   display, tabeller, fete/kursiverte former, lister, markdown-lenker.
2. **Kodeblokker rendres.** Trippel-backtick med språktagg settes som
   `<pre><code>` med bevart innrykk, og inline-kode i `` `backticks` `` er
   beskyttet mot både matte- og markdown-transformene (fikset på main 25. juli
   2026). MED1100 er ikke et kodefag — bruk ```` ```text ````-blokker kun der en
   ren tabellstruktur (2×2-tabell, levetidstabell, vekttall-oversikt) blir
   tydeligere enn en markdown-tabell.
3. **`$`-fella (ufravikelig).** Et dollartegn som IKKE er matte MÅ escapes som
   `\$` i JSON-strengen. To uescapede `$` på samme linje er partall, og
   rendreren parrer dem og setter alt imellom som formel. `$` inne i backticks
   eller i en ```` ``` ````-blokk er trygt.
4. **Bilder:** `alt` rendres rått som HTML-attributt — **ingen LaTeX, ingen
   markdown, ingen backticks der**. `caption` rendres i inline-modus: `$…$`
   virker, men ikke markdown og ikke backticks.
5. **Unicode rendres fint i vanlig prosa** (`→`, `≈`, `≤`, `≥`, `·`, `α`, `β`,
   `χ`, `μ`, `CO₂`, `H⁺`, `HCO₃⁻`, `Na⁺`, `K⁺`, `IgG`). Statistiske størrelser
   og alle regneutregninger skal likevel i LaTeX (§T4).
6. **Flashcards genereres KUN fra toppnivå `definition`-blokker med `title`** —
   ikke fra definisjoner inne i en `collapsible`.
7. **Quiz stokkes ved kjøretid**, derfor er `options[0]` alltid fasit i
   staging-filene — og derfor kan en `explanation` ALDRI vise til et alternativ
   ved posisjon eller bokstav (§K3).
8. **Interne kapittellenker skrives `[kap. X.Y](/med1100/med1100-X-Y)`.**
   `/bok`-prefikset ble fjernet 27. juli 2026 og finnes ikke lenger — skriver du
   `/bok/med1100/…` blir lenken død, og lenkeporten i `sjekk-bok.py` fanger det.
   Prøvekapitler lenkes `[Prøver til del 4](/med1100/med1100-4-prove)`.
9. **Juridiske deklarasjoner vises automatisk.** `HoyskoleDisclaimer`
   (`src/components/textbook/hoyskole-disclaimer.tsx`) har en helse-heuristikk
   som treffer på «medisin» i emnekode/tittel — MED1100 får derfor automatisk
   linja «Ikke helseråd: innholdet er læringsstoff og erstatter ikke
   helsefaglig veiledning eller medisinske råd». Den automatikken **erstatter
   ikke** §H: forbeholdet skal også stå i teksten der det trengs.

---

## LÆRINGSLØKKE-KONTRAKT (ufravikelig byggekrav — produkteier 9. juli 2026)

Fra skjelettets topp, tatt inn her som bindende byggekrav:

- HVERT kapittels `content[]` struktureres som gjentatte små løkker
  **Teori → Eksempel → Oppgave**. `exercise`-blokker plasseres INLINE i
  `content[]` rett etter teorien/eksempelet de trener — ALDRI all teori øverst
  med oppgavene samlet nederst.
- I dette faget har løkka to konkrete former:
  - **Regnekapitler** (Del 4 i sin helhet, 3.1, 6.3, 6.4, 7.1, 7.3, 9.1, 14.1):
    `definition` som innfører ÉN størrelse eller ÉN forutsetning → `theorem`
    **Regneprosedyre** (nummerert algoritme) → `example` gjennomregnet case med
    eksplisitte hypoteser, vist utregning, enheter og klartekst-tolkning →
    `exercise` som krever nøyaktig den prosedyren. Deretter neste bit.
  - **Faktakapitler** (histologi, metabolisme-mekanismer, immunologi,
    mikrobiologi, anatomi): `definition` **Kjernefakta** (flashcard-kilden) →
    `text` **Mekanismekjede** nummerert trinnvis → `example` full-pott-
    momentliste eller begrunnet bildetolkning → `exercise` i kapitlets
    blokk-sjanger. Deretter neste bit.
- **Ingen usett forkunnskap.** Ingen oppgave får kreve et begrep, en formel, et
  latinsk navn eller en mekanisme som ikke er innført tidligere i kapitlet
  (t.o.m. eksempelet rett foran) eller i et kapittel som står i Forkunnskaper-
  blokken. Konkrete feller i MED1100:
  - be om PPV-regning i kap. 3.1 før 2×2-oppsettet er vist;
  - bruke $t$-verdi fra tabell i kap. 4.1 før 4.2 har innført når $t$ erstatter
    1,96;
  - be om Hardy-Weinberg-bærerfrekvens i kap. 7.2 (den innføres i 7.3);
  - be om hemmertype fra en Lineweaver-Burk-tabell før 6.3 har vist
    dobbeltresiprok-plottet;
  - bruke «MHC klasse II» i en oppgave i kap. 10.1 uten at antigenpresentasjon
    er innført i samme kapittel eller i en referert forkunnskap;
  - be om latinsk bøyning (sinistra/dextra) i kap. 13.1 uten at 13.1 selv har
    innført bøyningsregelen;
  - bruke «negativ retting» som premiss i en blokk 2-oppgave uten at
    [kap. 0.2](/med1100/med1100-0-2) er referert i Forkunnskaper.
- **Unntak:** prøvekapitlene (`med1100-<del>-prove`) og de tre øvingseksamenene
  (14.4–14.6) følger sin egen arketype — komplett sett først, løsninger i
  collapsibles.
- Kvotene og innholdskontraktene i skjelettet er UENDRET — løkka styrer kun
  REKKEFØLGEN.

---

## Filplassering og filantall

Ett JSON-dokument per kapittel: `src/lib/data/chapters/<kapittel-id>.json`
(f.eks. `med1100-6-3.json`). Quiz til
`src/lib/data/quiz-staging/<kapittel-id>.quiz.json`.

IKKE rør `_registry.json`, `_all.json`, `textbook-courses*.ts`, `quiz-data*.ts`,
`institusjoner.ts` eller `kildegrunnlag.ts` — wiring gjøres sentralt av
byggeleder med `scripts/hoyskolebok/wire-bok.py`.

**Generer JSON via python `json.dump`** (garantert gyldig escaping av `\` og
`"`). Skriv aldri JSON for hånd i denne boka — statistikk- og biokjemikapitlene
er fulle av LaTeX.

Boka består av **63 kapittelfiler**:

- **50 innholdskapitler**: 2 eksamenskart-/strategikapitler (0.1–0.2) +
  42 temakapitler (1.1–13.3) + 6 eksamenstreningskapitler (14.1–14.6).
- **13 prøvekapitler**: `med1100-1-prove` … `med1100-13-prove`. **Del 0 og
  Del 14 har INGEN egen prøve** — Del 14s tre øvingseksamener dekker helheten i
  hver form.

Pluss **50 quiz-staging-filer** (én per innholdskapittel; prøvekapitler har
ingen quiz).

Delene er 0–14. Fordelingen på de tre blokkene:

| Blokk | Deler | Kapitler |
|---|---|---|
| meta | 0 | 0.1–0.2 |
| **Blokk 1** | 1–4 | 1.1–1.4, 2.1–2.2, 3.1–3.3, 4.1–4.5 (14 kap.) |
| **Blokk 2** | 5–9 | 5.1–5.2, 6.1–6.4, 7.1–7.4, 8.1–8.3, 9.1–9.3 (16 kap.) |
| **Blokk 3** | 10–13 | 10.1–10.4, 11.1–11.3, 12.1–12.2, 13.1–13.3 (12 kap.) |
| meta | 14 | 14.1–14.6 |

---

## Kapittel-JSON (toppnivå)

```json
{
  "id": "med1100-6-3",
  "courseId": "med1100",
  "chapterNumber": "6.3",
  "title": "…(fra skjelettet, ordrett)…",
  "description": "…(setningen fra skjelettet)…",
  "estimatedMinutes": 65,
  "competenceGoals": ["kunne avgjøre hemmertype fra endringer i Km og Vmax", "…"],
  "content": [ "…blokker…" ],
  "exercises": []
}
```

`chapterNumber` = skjelettets `number` (`<del>.<nr>`; prøvekapitler `<del>.P`).
**ALDRI lineær nummerering** («23») — alltid del-basert («6.3»). `id`, `title`,
`description` og `estimatedMinutes` tas ORDRETT fra skjelettets kapittelavsnitt.

`competenceGoals`: 2–4 «kunne …»-formuleringer avledet av kapitlets
Faktakontrakt/Regneprosedyre. **Ingen kald kode her** — ingen bar «B2-MEK»,
«E17», «sjanger A». Skriv «kunne begrunne en histologisk vevstype ut fra farge
og morfologi», ikke «kunne B2-HIST». Målene er Skolesagas egne formuleringer,
aldri kopi av UiOs offisielle læringsutbytte.

`exercises` er ALLTID tom liste — oppgaver ligger som `exercise`-blokker inline
i `content`.

---

## Blokktyper (eksakte felt — strukturreferanse: `src/lib/data/chapters/econ1310-2-1.json`)

- `text`: `{ "id", "type": "text", "content": "markdown + LaTeX" }`
- `definition`: `{ "id", "type": "definition", "title": "Begrepet", "content": "…" }`
  — **title er OBLIGATORISK** (flashcard-kilden). I dette faget kalibreres
  `definition` som **term i ORD → presis avgrensning → det som skiller den fra
  naboterminen**. Aldri en formel eller et latinsk navn alene som første linje.
  Riktig form: «Spesifisitet: andelen av de FRISKE som testen klassifiserer som
  friske, altså $\text{TN}/(\text{TN}+\text{FP})$. Spesifisitet er en egenskap
  ved testen og endrer seg ikke med prevalensen — det er PPV og NPV som gjør
  det. Nettopp den forskjellen er selve gjengangeren.»
- `theorem`: `{ "id", "type": "theorem", "title": "…", "content": "…" }`
  — brukes for (a) **regneprosedyrene** (KI, hypotesetest, kji-kvadrat,
  OR/RR/PR, t-test, utvalgsstørrelse, Kaplan-Meier, PPV/NPV, Hardy-Weinberg,
  Michaelis-Menten/Lineweaver-Burk, Nernst, dose/osmolaritet, genstruktur), og
  (b) **de faste mekanismekjedene** der rekkefølgen selv er resultatet
  (T-celleutvikling DN→DP→SP, apoptosekjeden, insulinveien, blodets vei gjennom
  hjertet).
- `example`: `{ "id", "type": "example", "title": "Eksempel N: …", "problem": "…", "solution": "…" }`
  — `solution` skrives som en **full-pott-besvarelse** etter §S: for regnecase
  eksplisitte hypoteser → vist utregning → enheter → klartekst-tolkning; for
  blokk 2-essay en nummerert momentliste med delpoeng synlig; for bildetolkning
  navn PLUSS morfologisk/fargemessig begrunnelse.
- `tip` / `warning`: `{ "id", "type", "title", "content" }`
- `exercise`: `{ "id", "type": "exercise", "exercise": { "id", "number", "type": "classic", "difficulty": "lett"|"middels"|"vanskelig", "task", "solution", "hints": [] } }`
  — ALDRI `solutionVideo` / `allowsUpload` / `allowsCanvasDrawing` / `answer`.
  Ikke bruk `subTasks`-feltet (deloppgaver skrives inline, se Leserkrav).
- `image`: `{ "id", "type": "image", "src": "/images/textbook/med1100/<navn>.svg", "alt": "…", "caption": "…" }`
  — se §G. Figuren MÅ finnes på disk OG være lastet opp til Storage.
- `collapsible`: `{ "id", "type": "collapsible", "title", "buttonText": "Vis …", "content": [ "…blokker…" ] }`
  — nøkkelfakta-/formelliste, prøver, repetisjon, kald bank. ALDRI tom:
  feltnavnet er `content` og skal ha blokker (en `text`-nøkkel eller tom array
  rendrer som tom boks).

Blokk-id-er: `<kapittel-id>-<løpenavn>`, f.eks. `med1100-6-3-def-4`,
`med1100-6-3-oppg-7`, `med1100-13-1-fig-1`. Unike innen kapitlet (porten
sjekker).

---

## Obligatorisk kapittelstruktur

### Temakapitler (1.1–13.3) og drillkapitlene 14.1–14.3

Alltid, i denne rekkefølgen først i kapitlet:

1. `tip` **Eksamensvinkel** — som sier **hvilken BLOKK** kapitlet trener, i
   hvilken form (sjangerkodene under), med hvilken frekvens/vekt, hvordan det
   rettes, og hva sensor ser etter i akkurat den blokken. Tallene tas fra
   skjelettets Eksamensbelegg-felt for NETTOPP dette kapitlet — og ingen andre
   tall. **Forfatteren finner ALDRI på frekvenstall.** Sjangerkoden skrives ut i
   klarspråk ved første bruk i kapitlet: «B2-HIST — histologioppgaven, der du
   skal navngi vevet OG begrunne ut fra farge og morfologi».
   Kapitler i blokk 2 med rutenett skal her si «husk: rutenett i blokk 2 har
   negativ retting — blankt slår gjetting»; kapitler i blokk 1 og 3 skal si
   «ingen minuspoeng her — svar alltid».
2. `text` **Forkunnskaper — sist du var her** (overskriften skal stå ordrett
   slik, som `## Forkunnskaper — sist du var her` først i blokken). Blokken skal
   (i) lenke kapitlene i boka dette bygger på — markdown-lenker
   `[kap. X.Y](/med1100/med1100-X-Y)`, (ii) **VISE de 2–3 nøkkelfaktaene eller
   -formlene ferdig oppfrisket** (selve formelen med symbolforklaring, selve
   mekanismekjeden, selve normalverdien — ikke bare navnet), og (iii) lenke
   kryssbok der forkunnskapen ikke dekkes i boka (tabellen i «Kryssbok-lenker» —
   KUN filer som finnes). Har kapitlet ingen forkunnskaper, sier blokken det og
   viser likevel begrepene leseren møter først. **Porten krever ordet
   «Forkunnskaper» i alle kapitler utenom Del 0.**
3. `collapsible` **Nøkkelfakta- og formelliste** — se §T5. Rett etter
   Forkunnskaper, ikke sist i kapitlet (skjelettets §2.3 omtolker README-kravet;
   i et puggefag er listen leserens arbeidsbord, ikke et etterord).

Deretter DNA-løpet i læringsløkker: `text` **Oversikt** (maks 2–3 avsnitt: hva
temaet er og hvorfor det testes) → `definition` **Kjernefakta** (flashcard-
kilden — toppnivå med `title`!) → `theorem` **Regneprosedyre** / `text`
**Mekanismekjede** → `example` → `exercise` inline → neste bit.

- 2–4 `example` per kapittel, det siste på EKSAMENSNIVÅ modellert på kapitlets
  reelle sjanger.
- 6–12 `exercise` i kapitlet, stigende (lett → middels → vanskelig), de
  vanskeligste = eksamenskloner. Hver oppgave merket med sjangerkode + blokk i
  en LEDENDE parentes i `task`: `(Eksamensnivå, B1-STAT — statistikkoppgaven i
  blokk 1.)`
- **Minst én lett innstegsoppgave** (`difficulty: "lett"`, ren gjengivelse med
  egne ord) tidlig i hvert teorikapittel der første oppgave ellers ville vært
  full eksamenssjanger.
- **Regnekapitler:** 2–3 innøvingsoppgaver, 2–4 standard, 2–4 eksamenskloner.

`warning` **Typiske feil** (feilkodene E1–E26 som gjelder temaet, hver glosset
ved første bruk i kapitlet) plasseres der den er mest relevant — ofte rett etter
mekanismen eller prosedyren som utløser feilen. **Minst én per kapittel** (porten
krever en `warning`-blokk).

Til slutt i kapitlet, i denne rekkefølgen:

- begrepsbank-`definition`-blokker opp til flashcard-kvoten. Hver stor
  begrepsbank åpner med standard-notisen: «Begrepsbanken er flashcard- og
  repetisjonsstoff — den gjentar det du nettopp har lest. Hopp trygt over ved
  førstegangslesing; tidsanslaget for kapitlet gjelder kjernestoffet.»
- `collapsible` **Repetisjon** — 4–6 korte kontrollpunkter fra kapitlet og de
  forutgående kapitlene det bygger på.

### Del 0 (0.1–0.2)

Del 0 er unntatt Forkunnskaper-kravet (porten hopper over `med1100-0-*`), men
skal ha `warning` Typiske feil og Nøkkelfakta- og formellisten. Innholdet i
Del 0-pakken er spesifisert under «Leserkrav → Del 0-pakken».

### Drillkapitlene 14.1–14.3 (ett per blokks svarlogikk)

`tip` Eksamensvinkel → `text` Forkunnskaper — sist du var her → `collapsible`
Nøkkelfakta- og formelliste → `text`/`theorem` **Løsningsoppskrift** (nummerert
algoritme, ordrett fra skjelettets innholdskontrakt for kapitlet) → `example`
**gjennomgått eksamenscase med sensor-margnotater** (hvor poengene sitter ved
hvert steg) → 8–12 `exercise` på eksamensnivå som roterer sjangerens varianter,
alle med `solution` + `hints`.

Drillkapitlene har lav flashcard-kvote (8–10) — de er treningsbanker, ikke
begrepsbanker. Signalbokser som varsler hva en drilloppgave tester, står ETTER
oppgaven (som fasit-oppfølging eller collapsible hint), aldri foran.

**Kald bank:** boka skal ha ÉN merket kald bank (8–10 oppgaver med uvante
kombinasjoner, UTEN hint, fasit = momentliste). Den legges i **kap. 14.2** som en
egen `collapsible` «Kald bank — uten hint», fordi blokk 2s momentliste-sjanger er
den formen der hint forstyrrer mest.

### Prøvekapitler (`med1100-1-prove` … `med1100-13-prove`)

Id `med1100-<del>-prove`, `chapterNumber` `<del>.P`, tittel «Prøver til del
`<del>`: `<deltittel>`» (deltittelen fra `BOKCONFIG.json`s `sectionNames`, se
merknaden under):

- `tip`: dekning + tidsbruk, deklarerer «4 prøver à ~25–35 min» (skjelettets §4
  sier 20–40 min per prøve — velg innenfor spennet og vær konsistent i tip og
  description), pluss «kan trygt deles over flere kvelder — én prøve per økt», og
  sier hvor flervalget bor (inline i prøven eller i den interaktive quizen).
  Tipen sier også **hvilken blokk delen tilhører og hvilken form prøven speiler**.
- `text` **Forkunnskaper — sist du var her** (porten krever «Forkunnskaper» i
  alle kapitler utenom Del 0).
- Fire `collapsible` («Prøve 1»–«Prøve 4», buttonText «Vis prøve N») med
  nyskrevne oppgaver etter skjelettets prøve-kvote for delen, og **full fasit**:
  - blokk 1-deler (1–4): blandet flervalg + statistikkregning/essay. Regnefasit
    med eksplisitte hypoteser, vist utregning, enheter og klartekst-tolkning;
    essayfasit som momentliste.
  - blokk 2-deler (5–9): essay/regning/bildetolkning med **momentliste-fasit**
    (må-punkter / pluss-punkter / feller) + vist utregning; minst én prøve per
    del med et rutenett der **negativ retting** er i spill, og fasiten viser
    beslutningsregelen (svar bare det du er sikker på).
  - blokk 3-deler (10–13): rent flervalg (velg ett / velg to) med
    **per-alternativ-begrunnelse** — hvorfor fasiten er riktig OG hvorfor hver
    nære distraktor er gal.
- **Statiske flervalg har STOKKEDE fasit-bokstaver** — aldri «alle a»; porten
  flagger mønsteret «1a · 2a · 3a», og `sjekk-fasitfordeling.py` feiler hvis en
  bokstav ligger over 45 %.
- Etter hver prøvefasit: avkryssbar selvdiagnose-sjekkliste (☐), formulert
  fagkonkret per blokk. Blokk 1: «☐ skrev du H₀ og Hₐ med parametrene definert?
  ☐ står utregningen der, ikke bare svaret? ☐ konkluderte du i ord?». Blokk 2:
  «☐ er mekanismeleddene i riktig rekkefølge? ☐ begrunnet du vevstypen ut fra
  farge/morfologi, ikke bare navnga den? ☐ lot du rutenettfeltene du var usikker
  på stå blanke?». Blokk 3: «☐ valgte du det mest presise, ikke bare det som er
  delvis sant? ☐ krysset du nøyaktig to der oppgaven ba om to? ☐ er bøyningen
  riktig (sinistra/dextra, ventral/dorsal)?».
- Kap-referanser i fasitene som markdown-lenker.
- Ingen begrepsbank og ingen quizkvote for prøvekapitler.

Prøvekapitler regnes som vurderingskapitler i `sjekk-bok.py` og er derfor
unntatt kravene om «Typiske feil»-warning og symbol-/formelliste.

> **Deltittel-avvik som må håndteres bevisst:** `BOKCONFIG.json` og skjelettets
> §2-tabell er uenige to steder — Del 4 heter «Medisinsk statistikk med regning»
> i BOKCONFIG og «Medisinsk statistikk (med regning)» i skjelettet, Del 13 heter
> «Thoraksanatomi» i BOKCONFIG og «Thoraksanatomi (latinsk nomenklatur)» i
> skjelettet. **BOKCONFIG.json er kilden for `sectionNames` og for
> prøvekapitlenes titler**; skjelettets lengre form kan brukes i prosa.

### Øvingseksamenene (14.4–14.6 — én per eksamensform)

Alle tre: `tip` med format og tidsbudsjett → `text` Forkunnskaper →
oppgavene som `text`-blokker i eksamensrekkefølge → `collapsible`
løsningsforslag → `tip` **Sensorblikket**. Lange fasitdeler har
«— naturlig pausepunkt —»-markører.

- **14.4 Øvingseksamen blokk 1** (`estimatedMinutes` 90): digital form, ~5 t på
  ekte eksamen, fire seksjoner i FAST rekkefølge (Humanbiologi 20 % →
  Atferdsfag 20 % → Samfunnsmedisin 20 % → Statistikk 40 %), ~37–48 oppgaver
  fordelt etter seksjonsvekt: hovedsakelig B1-MC i de tre første, 2–3 B1-ESS i
  samfunnsmedisin, ~10 B1-STAT i statistikkdelen. Fasit per oppgave;
  statistikkfasit med eksplisitte hypoteser, vist utregning og tolkning.
  Sensorblikket: bestått/ikke bestått, hva som gir uttelling, «ikke trekk for
  følgefeil», **svar alltid — ingen minuspoeng her**, og at kalkulator +
  statistiske tabeller + formelsamling er tillatt.
- **14.5 Øvingseksamen blokk 2** (`estimatedMinutes` 95): skriftlig 6 t
  (09–15), **9 hovedoppgaver merket A–I med oppgitte vekttall som summerer
  EKSAKT til 100** (nyere sett — 2024h og 2025h — bruker 9 oppgaver A–I; eldre
  sett hadde 10–12 og gikk til A–J/A–L, og det skal sies i tipen). Rekkefølgen
  er den stabile malen: A histologi/EM · B celledød/kreft · C signalering/
  endokrin · D molekylærbiologi · E genetikk · F enzymkinetikk · G metabolisme ·
  H proteinsortering/cytoskjelett · I membran/nevron/embryologi. Settet skal ha
  minst én B2-REGN (dose, Nernst eller enzymkinetikk) og minst ett B2-RUTE med
  **negativ retting**. Fasit = momentliste med delpoeng + vist utregning +
  enheter. Sensorblikket: moment-for-moment-retting, negativ-retting-strategien,
  hva som IKKE forventes, «feil system, men rett forklaring gir 50 %».
  **Vekttall-summen skal etterregnes og vises i settet.**
- **14.6 Øvingseksamen blokk 3** (`estimatedMinutes` 90): digitalt rent
  flervalg, ~50–60 spørsmål som delsett av banken (den fulle banken er
  ~90–110 spm), fire seksjoner (Anatomi thorax ~30 %, Immunologi ~30 %,
  Mikrobiologi ~25 %, Fysiologi/blod ~15 %). Hovedsakelig B3-1 (velg ett), fast
  innslag B3-2 (velg to — **nøyaktig to**), pluss B3-NOM/B3-BILDE. Fasit med
  per-alternativ-begrunnelse. Sensorblikket: velg-to = nøyaktig to; **ingen
  minuspoeng — svar alltid**; latinsk presisjon avgjør.

---

## §B BLOKK-KONTRAKTEN (det avgjørende strukturvalget)

**MED1100 avsluttes ikke med én eksamen.** Modulen har **tre separate
blokkeksamener** med helt forskjellig format, fagområde og svarlogikk. Alle
vurderes **bestått / ikke bestått**, alle tre må bestås, og en svak blokk kan
ikke kompenseres med en sterk. Denne tabellen skal gjengis korrekt overalt i
boka, og står i sin helhet i kap. 0.1:

| Felt | **Blokk 1** | **Blokk 2** | **Blokk 3** |
|---|---|---|---|
| Tema | Statistikk, helse, biologi og samfunn | Cellebiologi (histologi, biokjemi, genetikk, fysiologi) | Blod, immunologi, mikrobiologi, thoraksanatomi |
| Deler i boka | Del 1–4 | Del 5–9 | Del 10–13 |
| Form | Digital (Inspera), **~5 t** | Skriftlig, **6 t (09–15)** | Digital (Inspera) |
| Svartype | Blandet: flervalg + kortsvar/essay + statistikkregning | **Rent essay/kortsvar/regning/bildetolkning** | **Rent flervalg** (velg ett / velg to) |
| Struktur | 4 seksjoner i fast rekkefølge: Humanbiologi 20 % → Atferdsfag 20 % → Samfunnsmedisin 20 % → **Statistikk 40 %**; ~37–48 oppgaver | **9–12 hovedoppgaver merket A–I** (evt. A–J/A–L) med oppgitte **vekttall, sum eksakt 100** | Flervalgsbank, ~90–110 spm (numrene hopper); Anatomi thorax ~30 %, Immunologi ~30 %, Mikrobiologi ~25 %, Fysiologi/blod ~15 % |
| Hjelpemidler | **Enkel kalkulator** (Citizen SR-270X / Casio FX-82EX) **+ statistiske tabeller + utdelt formelsamling** | Enkel kalkulator | Ingen (digital) |
| Retting | Manuell (essay) + automatisk (flervalg). **Ingen dokumentert minuspoeng** | Manuell moment-for-moment. **Negativ retting — kun på rutenett/flervalgsinnslag** | Automatisk. **Ingen minuspoeng** |
| Vurdering | Bestått / ikke bestått | Bestått / ikke bestått | Bestått / ikke bestått |

**B1. Hjelpemiddel-kontrasten er en fagspesifikk stilregel, ikke en detalj.**
Blokk 1 deler ut **statistiske tabeller og en formelsamling**. Statistikkdelen
tester derfor **bruk** av formlene — valg av test, forutsetninger, innsetting,
tolkning — ikke memorering av dem. Boka skal si dette eksplisitt i kap. 0.1, i
Del 4s kapitler og i 14.1, og skal **aldri** skrive «denne formelen må du kunne
utenat» om en statistisk formel. Blokk 2 og blokk 3 har derimot ingen
oppslagsverk: der er faktaene, mekanismekjedene og de latinske navnene ren
memorering, og flashcard-tettheten er skrudd opp deretter (§K).

**B2. Minuspoeng-asymmetrien er bokas viktigste enkeltstrategi.**

- Blokk 2s rutenett/flervalgsinnslag rettes **+0,5/−0,5/0** (varianter
  +0,4/−0,4/0 og +0,25/−0,25/0 forekommer). **Laveste sum på en oppgave er
  alltid 0** (aldri negativ totalsum), og **blankt = 0**. Derfor: **på rutenett
  i blokk 2 lønner det seg IKKE å gjette — blankt slår feil.**
- I blokk 1 og blokk 3 er det **ingen minuspoeng**, så der skal man **alltid**
  svare.
- Denne asymmetrien etableres som egen, uthevet strateginote i
  [kap. 0.2](/med1100/med1100-0-2), gjentas i Eksamensvinkel-tipen i hvert
  kapittel som trener et rutenett, og drilles som egen oppgavetype i
  [kap. 14.2](/med1100/med1100-14-2) («skal du svare her?»).
- Feilkode **E20** (gjette på negativt rettet rutenett) er bokas dyreste
  enkeltfeil og skal glosses ved første bruk i hvert kapittel den nevnes.

**B3. Eksamensvinkel PER BLOKK.** Fordi det samme temaet kan opptre i flere
blokker med ulik form (immunforsvar på oversiktsnivå i blokk 1s flervalg vs.
T-celleutvikling i blokk 3s flervalg; signalering som blokk 2-essay), sier hver
`tip` **Eksamensvinkel** eksplisitt hvilken blokk kapitlet trener, med hvilken
form og vekt, og hva sensor ser etter i akkurat den blokken. Et kapittel som
trener to blokker sier begge deler, med hver sin svarlogikk.

**B4. De tre svarlogikkene** (drilles hver for seg, aldri blandet sammen):

1. **Blokk 1 — vist statistikkregning:** definer parameteren → skriv H₀ og Hₐ →
   velg test og sjekk forutsetningene → sett inn med tall → sammenlign med
   kritisk verdi → **konkluder i klartekst**.
2. **Blokk 2 — nummerert mekanisme-essay + regning med enheter + rutenett-
   disiplin:** momentliste i riktig rekkefølge, riktig fagterm, vist utregning,
   enhetskonvertering, og blankt der du er usikker på rutenettet.
3. **Blokk 3 — latinsk flervalgspresisjon:** eliminer, velg det MEST presise
   (ikke bare det som er delvis sant), nøyaktig så mange alternativer som
   oppgaven ber om, og svar alltid.

**B5. Nevnerne er ulike per blokk — regn dem aldri om.** Frekvenstallene i
skjelettet er telt i tre ulike materialer: **blokk 1 har nevner 16**
(~16 lesbare sittinger V21–V26), **blokk 2 har nevner 14** (14 sittinger
2022h–2025h), og **blokk 3 har varierende nevner** (4/4, 3/3, 2/2 — fordi flere
blokk 3-filer er *delvise seksjonsuttrekk*, slik at ikke alle temaer er
observerbare i alle sju sittingene). Skriv tallet slik skjelettet gir det
(«T-celleutvikling: 4 av 4 leste sittinger»), og **regn ALDRI om blokk 3s tall
til prosent av 7 eller til en samlet nevner**. Der skjelettet gir et anslag med
tilde («~14/16»), skriv «rundt 14 av 16 sittinger» — aldri en oppdiktet eksakt
prosent.

---

## §H HELSEFAGLIG FORBEHOLD (ufravikelig — dette er et medisinfag)

**H1. Boka er eksamensforberedelse. Den er ALDRI helseråd, ALDRI klinisk
veiledning og ALDRI en behandlingsanbefaling.** Ingen setning i noen kapittelfil
skal kunne leses som en anbefaling om hva en virkelig person bør gjøre med sin
egen eller andres helse.

**H2. Den stående forbeholdsnotisen** skal stå ORDRETT (eller trofast omskrevet)
i **kap. 0.1**, og gjentas i de kapitlene der teksten kommer nærmest klinikk —
minst **6.4** (dose- og konsentrasjonsregning), **11.2** (antibiotika og
resistens), **1.2** (sirkulasjon/syre-base) og **12.2** (oksygentransport):

> Denne boka forbereder deg til eksamen i MED1100. Den handler om **det friske
> mennesket** og om mekanismer — ikke om å stille diagnoser, velge behandling
> eller gi råd. Ingen av regnestykkene, verdiene eller mekanismene her skal
> brukes på en virkelig pasient eller på deg selv. Klinisk vurdering læres
> senere i studiet, under veiledning.

**H3. Kalibrering (fra skjelettets kalibreringsregel).** Nivået er det friske
mennesket: celle- og molekylærbiologi, histologi, anatomi, fysiologi, biokjemi/
metabolisme, genetikk, immunologi-grunnlag og medisinsk statistikk. **Ingen
klinikk, patofysiologi, farmakoterapi eller behandlingsvalg som kjernestoff.**
Den nasjonale «felles avsluttende deleksamen» (kliniske case-MCQ sent i studiet)
er en ANNEN eksamen og holdes helt utenfor — den skal ikke nevnes som kilde,
ikke styre temavekting og ikke levere oppgaveformer.

**H4. Kliniske vignetter er tillatt som INNPAKNING, aldri som fasit om
behandling.** Blokk 1s flervalg bruker korte pasientvignetter, og blokk 3 har
case-klynger — den formen skal boka trene. Men det spørsmålet vignetten stiller,
skal alltid handle om **mekanisme, tolkning, struktur eller regning**, aldri om
«hvilken behandling skal pasienten ha». Et dosregnestykke er en
**enhetskonverteringsoppgave i eksamensformat**, og skal rammes inn som det
(«regn ut hvor mange mL som svarer til den oppgitte dosen» — ikke «hvor mye skal
du gi pasienten»).

**H5. Farmakologi og mikrobiologi undervises som MEKANISME.** «Penicillin hemmer
transpeptidase og dermed peptidoglykan-kryssbinding» er mekanisme og skal med.
«Denne infeksjonen behandles med …» er en behandlingsanbefaling og skal ut, med
mindre setningen eksplisitt rammer seg selv inn som mekanismeeksempel eller
eksamensfakta. Kontrollen kjøres med `sjekk-prosaregel.py` (se
«Kvalitetskrav», punkt 20) — hvert treff på behandlingsspråk skal stå i en
setning som også rammer det inn som mekanisme/eksamensstoff.

**H6. Alle pasienter og case er fiktive.** Ingen ekte personer, ingen
gjenkjennelige sykehistorier, ingen bilder eller data fra virkelige pasienter.
Navn brukes sparsomt og nøytralt; alder/kjønn oppgis bare når det er faglig
nødvendig for oppgaven.

**H7. Sensitivt stoff behandles saklig.** Genetisk sykdom, kreft, arvegang og
smittsom sykdom skal omtales presist og uten dramatiserende språk. Slektstre-
oppgaver er sannsynlighetsregning, ikke fortellinger om skyld eller skjebne.

**H8. Ingen løfter om eksamensutfall.** Boka skal aldri skrive at den sikrer
bestått, og aldri fremstille seg som offisielt UiO-materiell (se
«Kildegrunnlag» og plattformens automatiske deklarasjon, §0.9).

---

## §M MEDISINSK PRESISJON — usikre tall og oppdiktingsforbud

**M1. INGEN oppdiktede tall, navn eller mekanismer.** Normalverdier, doser,
latinske navn og molekylnavn forankres i standard pensumlitteratur. Er du i tvil
om en verdi, skal du enten (a) belegge den, eller (b) merke den etter M3 — aldri
(c) gjette. Et oppdiktet normaltall i en flashcard er verre enn ingen flashcard:
det pugges.

**M2. Anatomiske navn, fysiologiske sammenhenger og statistiske
standardformler er standard fagstoff** og fritt å bruke. Det er *oppgavene,
casene, tallverdiene og formuleringene* som skal være nyskrevne (se
«Opphavsrett»).

**M3. Usikre tall: aldri den literale markøren, alltid klartekst.**
`EKSAMENSANALYSE.md` merker en rekke verdier med `*(verifiser)*` — særlig tall
fra eldre sett (2021–2022). Disse **skal beholdes merket som usikre for
leseren**, men:

- **Skriv ALDRI den literale strengen `(verifiser)` i en kapittelfil.**
  `sjekk-bok.py` feiler på den (linje 96), og porten er der fordi uavklarte
  markører har nådd produksjon før.
- Skriv i stedet usikkerheten ut i klartekst, med denne standardformuleringen
  (ORDRETT, slik at den kan telles og hentes ut i fase 6):
  > *Tallet er hentet fra eldre eksamenssett og er ikke kontrollert mot
  > gjeldende pensum — sjekk pensumboka før du pugger det.*
- **Loggfør hvert slikt tall** i `docs/hoyskole-boker/med1100/USIKRE-TALL.md`
  (kapittel-id · verdien · hvor den kommer fra · status). Den fila er
  dokumentasjon, ikke kapittelinnhold, og kan gjerne bruke `(verifiser)`.
- **Et usikkert tall skal ALDRI være fasit.** Det får ikke være svaret i en
  quiz, ikke forsiden eller baksiden av en flashcard, og ikke det som avgjør en
  prøveoppgave. Det kan stå i prosa og i Nøkkelfakta-listen, med forbeholdet.
- Kan du belegge tallet i standard pensumlitteratur (blod-pH 7,35–7,45 er et
  typisk eksempel), skriver du det **uten** forbehold og noterer belegget i
  USIKRE-TALL.md i stedet. Forbeholdet er for det du faktisk ikke kan belegge.

**M4. Listen over verdier som må håndteres etter M3** (fra skjelettets
verifikasjonssjekkliste og analysens §6): CO₂-transportens fordeling
(~10 % oppløst / ~20 % Hb-bundet / ~70 % bikarbonat), ~99 % reabsorpsjon av
filtrert vann, ~85 % offentlig andel av helsefinansieringen i Norge, ~74 %
ikke-smittsomme sykdommers andel av global død, nøytrofil halveringstid
< 1 døgn, hyperkalemi-depolarisering ~18 mV, blod-pH 7,35–7,45, meiosens
detaljerte fasetall, hemostase-dekningen i blokk 3, samt poenggivingen for
velg-to i blokk 3 (plattformoppsett, ikke dokumentert i settene).

**M5. «Ikke forventet»-stoffet er ikke kjernestoff.** Sensorveiledningene i
blokk 2 markerer eksplisitt hva som IKKE forventes — ribosomets subenheter
(60S+40S), mtDNAs lengde og genantall, enzymnavn i parentes, detaljbiokjemi.
Slikt stoff omtales maks som «bør kjenne til», plasseres ETTER kjernestoffet, og
skal aldri være fasit i en quiz eller en prøveoppgave. Skriv det som en
kjenne-til-notis, ikke som et krav.

**M6. Ordet «bevist» og absolutter.** Epidemiologi og statistikk skal formuleres
med fagets egen varsomhet: assosiasjon er ikke årsak, «ikke signifikant» er ikke
«ingen effekt» (E4), og statistisk signifikans er ikke klinisk relevans (E3).
Boka skal modellere denne varsomheten i hver eneste tolkningssetning — det er
nettopp det sensor premierer.

---

## §T TERMINOLOGI- OG NOTASJONSKONTRAKTEN

Eksamenssettenes språkbruk er fasit. I blokk 3 er upresis latin (E25) en av de
sikreste måtene å miste poeng på, og en bok som er inkonsekvent lærer bort feil
vane.

### §T1 Latinsk nomenklatur (blokk 3, Del 13 særlig)

- **Første gang en latinsk term brukes i et kapittel: latin + norsk i parentes**
  — «n. phrenicus (mellomgulvsnerven)», «valva mitralis (mitralklaffen)». Etter
  det kan latin stå alene i det kapitlet. Norsk og/eller latin godtas på eksamen
  der pensum bruker begge, men **bøyning og relasjon må være presis**.
- **Forkortelser med punktum og korrekt tall:** n./nn. (nervus/nervi), a./aa.,
  v./vv., m./mm., r./rr., lig./ligg. Skriv «mm. intercostales externi», ikke
  «m. intercostales externi».
- **Bøyning er innhold, ikke pynt:** longus/-a/-um, sinister/sinistra/sinistrum,
  dexter/dextra/dextrum. Retningsord (ventral/dorsal, superior/inferior,
  anterior/posterior) skal være riktige — n. phrenicus løper **ventralt** for
  radix pulmonis, n. vagus **dorsalt**, og den relasjonen er en 4/4-gjenganger.
- **Anatomiske termer settes IKKE i kursiv** (norsk anatomilitteraturs
  konvensjon). **Artsnavn settes i kursiv**: *Streptococcus pneumoniae*, og
  forkortes *S. pneumoniae* etter første fulle bruk i kapitlet. Slektsnavn alene
  også kursiv: *Candida*, *Mycoplasma*.
- **Fantasinavn finnes bare som merkede distraktorer.** «Ductus botalli» og
  «ductus cardiacus» er distraktortyper fra settene — de kan brukes i en
  flervalgsoppgave eller en `warning`, men da med korrekt navn (ductus
  thoracicus) skrevet ut i samme åndedrag. **Finn aldri opp et latinsk navn.**
- **Latin↔norsk-parene er flashcard-stoff begge veier** (§K4).

### §T2 Enheter og tallformat

- **Hvert tallsvar har enhet.** Bruk medisinsk konvensjon: mmol/L, mmHg, mV,
  g/L, mg/mL, mg/kg, osmol/L, personår, %. Enheter settes i LaTeX med `\text{}`
  og tynt mellomrom foran: `$0{,}30\,\text{osmol/L}$`, `$-61\,\text{mV}$`,
  `$470\,\text{personår}$`. Aldri kursiv enhet.
- **Desimalkomma** skrives `7{,}35` inne i matte (klammene gir riktig avstand i
  KaTeX). I prosa utenfor matte: vanlig komma.
- **`%` inne i matte MÅ escapes som `\%`** — et bart prosenttegn starter en
  LaTeX-kommentar og spiser resten av formelen. Dette har ødelagt en live bok
  (stk1110), og `sjekk-latex.py` sjekker det.
- **2–3 gjeldende siffer** i tallsvar; mellomregning kan ha ett siffer mer.
  Unntak: **utvalgsstørrelse rundes ALLTID opp til nærmeste hele person**, og
  frafall legges på etter opprundingen.
- **Enhetskonvertering er poenggivende i blokk 2** og skal vises som eget steg i
  hvert dose-/konsentrasjonseksempel — aldri gjøres «i hodet» mellom to linjer.

### §T3 Kjemi, molekyler og gener

- Kjemiske formler i prosa kan bruke unicode: CO₂, H₂O, HCO₃⁻, H⁺, Na⁺, K⁺,
  O₂, NADH, FADH₂. I formler og regneutregninger brukes LaTeX:
  `$\text{CO}_2 + \text{H}_2\text{O} \rightleftharpoons \text{H}^+ + \text{HCO}_3^-$`.
- **Proteiner settes rett, humane gensymboler i kursiv med store bokstaver:**
  proteinet p53, genet *TP53*; proteinet pRB, genet *RB1*. Bruk konvensjonen
  konsekvent, og forklar den én gang i kap. 7.1.
- Molekylnavn skrives med den formen pensum bruker: Bcl-2, Bax, cytokrom c,
  APAF-1, caspase-9, GLUT4, PI3K, Akt, fruktose-2,6-bisfosfat, IL-2, IFN-γ,
  TLR4, MHC klasse I/II, CD4⁺/CD8⁺. Greske bokstaver i unicode i prosa
  (IFN-γ, β-oksidasjon, χ²-test), i LaTeX i formler.

### §T4 Statistisk notasjon (Del 3–4, 14.1)

| Størrelse | Notasjon | Merknad |
|---|---|---|
| Andel i utvalget / i populasjonen | $\hat p$ / $p$ | hatt = estimat, alltid |
| Gjennomsnitt / forventning | $\bar x$ / $\mu$ | |
| Standardavvik utvalg / populasjon | $s$ / $\sigma$ | |
| Utvalgsstørrelse | $n$ | per gruppe der det gjelder per gruppe |
| Hypoteser | $H_0$, $H_a$ | **parametrene defineres i ord ved siden av** |
| Signifikansnivå / styrke | $\alpha$ / $1-\beta$ | |
| Kji-kvadrat | $\chi^2$ | kritisk verdi 3,84 ved 1 frihetsgrad, 5 % |
| Standardnormal | $z$, kritisk verdi 1,96 | faktor 2 godtas som tilnærming — si det |
| t-fordeling | $t$ med df oppgitt | 1,96 kun ved stor df (E6) |
| Effektmål | OR, RR, PR, RD | skrives med store bokstaver i prosa, ikke kursiv |
| Prediktiv verdi | PPV, NPV | avhenger av prevalens — sensitivitet/spesifisitet gjør ikke |
| Reproduksjonstall | $R_0$, $R_{\text{eff}}$ | kritisk vaksinasjonsdekning $=1-1/R_0$ |

- **Hypotesene skrives ALLTID eksplisitt** i eksempler, fasiter og
  modellbesvarelser — både symbolsk og med parameteren definert i ord. Dette er
  sensorkrav nr. 1 i blokk 1.
- **Tolkningssetningen er obligatorisk** etter hver test og hvert
  konfidensintervall: «oddsen er 1,4 ganger så høy i eksponert gruppe», «siden
  intervallet dekker 0, kan vi ikke utelukke at det ikke er noen forskjell».
  Uten den er svaret ikke ferdig (E12).

### §T5 Nøkkelfakta- og formellisten (obligatorisk, per kapittel)

Skjelettets §2.3 omtolker README-kravet «Symbol- og formelliste» til
**«Nøkkelfakta- og formelliste»**, fordi to tredeler av boka er fakta og latin,
ikke symboler. Kravet er derfor:

`collapsible` rett etter Forkunnskaper-blokken, med:

- `title`: `"Nøkkelfakta- og formelliste"`
- `buttonText`: `"Vis nøkkelfakta og formler"`
- første linje i første `text`-blokk inne i collapsiblen, **ORDRETT**:
  > Oppslagsverk — alt her forklares underveis i kapitlet. Dette er kapitlets
  > Symbol- og formelliste, utvidet med normalverdier, latinske navn og
  > mekanismekjeder.

  Den andre setningen er ikke pynt: `sjekk-bok.py` (linje 81) krever den
  literale strengen «Symbol- og formelliste» i alle kapitler som bruker
  LaTeX-symboler. Skriver du bare «Nøkkelfakta- og formelliste», feiler porten.
- deretter, avhengig av kapitteltype:
  - **regnekapitler:** markdown-tabell `| Symbol | Betydning | Enhet |` med ALLE
    symboler kapitlet bruker, så «**Formler i dette kapitlet:**» med
    display-LaTeX, én linjes tolkning og **bruksbetingelsen** per formel (når
    gjelder den, når gjelder den ikke) — og en merknad om hva som står i den
    utdelte formelsamlingen i blokk 1 (§B1).
  - **faktakapitler:** markdown-tabell `| Latin | Norsk | Hva det er |` for
    kapitlets kjernenavn, en liste med normalverdier og tallfakta, og
    mekanismekjedene skrevet ut som nummererte rekkefølger.
- **Per kapittel, ikke arv.** Alt kapitlet bruker skal stå der, også om det sto
  i et tidligere kapittel.

---

## §S SENSORKONTRAKTEN (bindende — fra analysens §4)

### S1 De seks kredittreglene (etableres i kap. 0.2, refereres i hvert kapittel)

1. **Blokk 1, statistikk:** vist utregning kreves; hypotesene skrives eksplisitt
   (H₀ og Hₐ med parametrene definert); klartekst-tolkning etter test og KI.
   **Riktig tankegang premieres over eksakt tallsvar** — veiledningene sier
   eksplisitt «ikke trekk for følgefeil». **Alternative korrekte metoder
   godtas:** kji-kvadrat *eller* Y-test på en 2×2; faktor 2 *eller* 1,96 i et
   KI; normal- *eller* t-tilnærming ved stor df. Der sensor godtar to veier,
   skal boka vise begge og si hvilken som er raskest under tidspress.
2. **Blokk 2, negativ retting (strateginote):** rutenett og flervalgsinnslag
   rettes +0,5/−0,5/0 (evt. +0,4/−0,4/0 eller +0,25/−0,25/0); **laveste
   oppgavesum er 0**, **blankt = 0** → **blankt slår gjetting**. Motsatt av
   blokk 1 og 3, der man alltid skal svare.
3. **Blokk 2, bildetolkning krever begrunnelse:** «begrunn svaret» går igjen —
   det holder ikke å navngi vevet, man må vise til farge- og morfologikjennetegn
   (E21). Hver eneste bildetolkning i boka modellerer dette: **navn + minst to
   kjennetegn**.
4. **Blokk 2, regning:** utregning må vises, og **enhetskonvertering er
   poenggivende**. Delpoeng gis for fornuftig resonnement selv ved feil
   sluttsvar («feil system, men rett forklaring gir 50 %»). Sensor markerer
   konsekvent hva som **ikke forventes** — og det gjør boka også (§M5).
5. **Blokk 3:** velg-to betyr **nøyaktig to**, velg-tre nøyaktig tre; antallet
   oppgis alltid. Det er **ingen minuspoeng** → svar alltid. Hvorvidt begge må
   være riktige for uttelling ligger i plattformoppsettet og er ikke dokumentert
   i settene — omtal det som antatt konvensjon, aldri som fastslått (§M3).
6. **Latinsk nomenklatur (blokk 3):** norsk og/eller latin godtas der pensum
   bruker det, men bøyning og relasjon må være presis (§T1).

### S2 Spørreordtrappen (blokk 2-essay, feilkode E12)

Boka skal etablere trappen i kap. 0.2 og bruke den konsekvent i alle
oppgavetekster og momentlister:

| Spørreord | Hva sensor venter | Typisk lengde |
|---|---|---|
| **Nevn / angi** | ren oppramsing, ingen forklaring | stikkord |
| **Beskriv** | hva som skjer, i riktig rekkefølge | 3–6 ledd |
| **Forklar** | hvorfor det skjer — mekanismen bak | mekanismekjede + årsak |
| **Gjør rede for** | beskriv + forklar + sett i sammenheng | full momentliste |
| **Begrunn** | knytt påstanden til observerbare kjennetegn | navn + kjennetegn |

Å svare på et lavere nivå enn spørreordet ber om er E12 og koster poeng selv når
alt som står er riktig.

### S3 Modellbesvarelser i et bestått/ikke bestått-fag

Faget har **ingen karakterskala**. Derfor:

- Malens «A-besvarelse» heter i denne boka **«full-pott-besvarelse»**.
  Karakterbokstaver skal ikke forekomme: «A-besvarelse», «C-besvarelse»,
  «A-kandidat» og «gapet til A» er grep-forbudte termer.
- **Nivåene boka bruker:** *bestått på marginen* (høster de sikre gjengangerne:
  standard statistikkregning med vist metode, de mest kjente mekanismene og
  bildemotivene, de trygge flervalgene) · *trygt bestått* · *toppsjikt*
  (fullstendige og korrekt sekvenserte mekanismekjeder, trygg latin, gjør ingen
  av fellene i E1–E26).
- **Hver av de tre eksamensformene skal ha minst én «bestått på marginen»-
  besvarelse** som er ærlig merket — den SKAL være akkurat det: litt rotete,
  ufullstendig på pluss-punktene, men over streken, med margnotat om hva som var
  BRA NOK og hvorfor.
- **Meta-fasit er forbudt.** «En god besvarelse ville her ha forklart …»
  erstattes av den faktisk utskrevne forklaringen. Minst én modellbesvarelse
  skal lande SKARPT — ikke alle på samme forbeholdne kompromissform.
- **Ingen løfter om utfall** (§H8), og formuleringen «Prioritet: perfekt» er
  forbudt: skjelettets prioritetsklasser skrives i boka som «høyeste prioritet —
  dette må sitte» (perfekt), «bør sitte» (kunne) og «kjenne til» (kjenne).

### S4 Momentliste-formen (blokk 2)

Hver `example` og hver prøvefasit i Del 5–9 og 14.2/14.5 skrives som:

1. **Må-punkter** — momentene som kreves for uttelling, nummerert i den
   rekkefølgen mekanismen faktisk går.
2. **Pluss-punkter** — det som løfter besvarelsen (presis fagterm, riktig
   navngitt mellomledd, koblingen til funksjon).
3. **Feller** — hva sensor ser at kandidater gjør galt her (feilkode oppgitt).
4. **Delpoeng synlig** — hvilke ledd som gir hva, når oppgaven har vekttall.

---

## §R REGNEKONTRAKTEN — etterregn før du skriver

**R1. Etterregn HVERT talleksempel med `python3` før du skriver det.** Gjelder
KI-grenser, χ²-verdier, OR/RR/PR, t-verdier, PPV/NPV, persontid og
insidensrater, utvalgsstørrelser, Kaplan-Meier-produkter, R₀/flokkimmunitet,
Hardy-Weinberg-frekvenser, Michaelis-Menten/Lineweaver-Burk-verdier,
Nernst-potensialer, ATP-regnskap i glykolyse og β-oksidasjon, genstruktur-
regning og alle dose-/molaritet-/osmolaritetsoppgaver. Regn aldri i hodet, og
gjenbruk aldri et tall fra skjelettet uten å sjekke det.

**R2. Parametersjekk fortegns- og «alltid»-påstander numerisk** (DNA-regnefag,
«Matematisk sannhetskontroll»). De konkrete i dette faget:

- «OR ≈ RR ved sjelden sykdom» og «OR ≈ PR ved lav prevalens» (E2) — sett inn
  tall og vis hvor godt tilnærmingen holder ved 1 %, 5 % og 20 % prevalens, og
  skriv betingelsen ut i stedet for å påstå den generelt.
- «PPV stiger med prevalensen» — regn to 2×2-tabeller med samme test og ulik
  prevalens og vis det.
- «Kompetitiv hemmer øker Km, uendret Vmax; ikke-kompetitiv senker Vmax,
  uendret Km» (E17) — vis det i en M-M-tabell med tall, og si eksplisitt at en
  hemmer som endrer BEGGE ikke kan klassifiseres i M-M-modellen.
- «Letale recessive alleler er ikke i Hardy-Weinberg-likevekt» (E14) — vis at
  seleksjon mot homozygote bryter forutsetningen.
- «Netto glykolyse til laktat gir 2 ATP og 0 NADH» (E19) — sett opp regnskapet.

**R3. En «vis at …»-oppgave der påstanden ikke holder ubetinget, KAN IKKE
LØSES.** Skriv heller «vis at det gjelder når …, og finn betingelsen».

**R4. Tall som skal gå opp, går opp.** Velg utvalgsstørrelser, prevalenser,
konsentrasjoner og molmasser som gir ryddige svar. Går det ikke opp, skriv «≈»
og oppgi antall gjeldende siffer. Utvalgsstørrelse rundes alltid opp (§T2).

**R5. Varier kalibreringene.** Samme tallsett gjenbrukt i tre kapitler gir
autopilot. Bytt prevalenser, gruppestørrelser, doser, molmasser og
ionekonsentrasjoner mellom kapitlene — og mellom prøvene innen samme del.

**R6. Vist utregning er en del av fasiten, ikke en forberedelse til den.** Hver
`solution` på en regneoppgave viser: hypotese/oppsett → innsetting med tall →
mellomregning → sluttsvar med enhet → tolkning i klartekst. En fasit som bare
oppgir sluttsvaret modellerer E22 og skal ikke finnes i boka.

**R7. Statistikkformlene skal FORSTÅS, ikke pugges** (§B1). Skriv aldri at en
statistisk formel må kunne utenat. Skriv i stedet hva du må kunne *velge*, hvilke
*forutsetninger* du må sjekke, og hvilken *tolkning* du må levere — det er der
poengene faktisk ligger når formelsamlingen ligger på pulten.

---

## §G FIGURKONTRAKTEN

Eksamen bruker ekte mikroskopibilder, blodutstryk, EM-bilder, røntgen/CT og
hjertetegninger. **Boka kan ikke gjengi noen av dem** — de er opphavsrettslig
vernet, og bildemateriale fra virkelige pasienter hører ikke hjemme her (§H6).
Løsningen er skjematiske figurer, tegnet av Skolesaga.

**G1. Alle figurer er skjematiske SVG-er, og de skal si det selv.** Hver
`caption` på en histologi-, blodutstryks-, EM- eller radiologifigur skal
inneholde formuleringen «skjematisk tegning — ikke et mikroskopibilde» (evt.
«ikke et røntgenbilde»). **En tegning skal ALDRI presenteres, eller kunne
misforstås, som et autentisk preparat- eller pasientbilde.**

**G2. Figur-i-ord er et komplement, aldri en erstatning der figuren er lovet.**
Sier teksten «se figuren», «som vist under» eller «tegn», SKAL det finnes en
`image`-blokk. Ber en oppgave leseren tegne noe (slektstre, Lineweaver-Burk-
plott, 2×2-oppsett som figur), SKAL løsningen vise den faktiske SVG-en — også
når løsningen ligger inne i en `collapsible` (nøstede image-blokker rendres, men
MÅ ha `id` og `src`).

**G3. Bildetolkningstrening uten bilde er mulig — og skal gjøres bevisst.** Der
oppgaven på ekte eksamen er «hva ser du på dette bildet», bygger boka i stedet
**beskrivelses-til-diagnose**-oppgaver: teksten beskriver morfologien
(«kondensert, mørkt kromatin langs kjernemembranen; rikelig med ruER; stor
nukleolus»), og leseren skal navngi OG begrunne. Skjematiske figurer brukes til
å vise *hva kjennetegnene ser ut som*, ikke til å simulere et preparat.

**G4. Minimumslisten — disse figurene SKAL finnes** (14 stk.):

| Kapittel | Figur |
|---|---|
| 4.1 | Konfidensintervall på en fordelingsakse (punktestimat, margin, dekning av 0) |
| 4.2 | Hypotesetest: fordeling med kritisk område og teststørrelse markert |
| 4.5 | Kaplan-Meier-trappekurve med sensurering markert |
| 5.1 | Epiteltypeplansje (enlaget plate/kubisk/sylinder, flerlaget plate, overgangsepitel) |
| 5.2 | Skjematisk EM-celle med organeller merket (eukromatin/heterokromatin, ruER, nukleolus, mitokondrie) |
| 6.1 | Glykolyse/glukoneogenese med F-2,6-BP-reguleringen inntegnet |
| 6.3 | Michaelis-Menten-kurve + Lineweaver-Burk-plott med hemmertypene |
| 7.2 | Slektstre-mal med symbolforklaring (arvegangsanalyse) |
| 8.1 | Insulinveien RTK → IRS → PI3K → PIP₃ → Akt → GLUT4 |
| 8.3 | Apoptosekjeden Bax → cytokrom c → APAF-1 → caspase-9 |
| 9.1 | Membranpotensial og Nernst-likevekt (ionegradienter, Na⁺/K⁺-ATPase) |
| 10.1 | T-celleutvikling i thymus: cortex (DN → DP) → medulla (SP) |
| 13.1 | Hjertet forfra med koronararteriene og forsyningsområdene |
| 13.2 | Mediastinum-oversikt med n. phrenicus ventralt og n. vagus dorsalt for radix pulmonis |

Anbefalt i tillegg (ikke bindende): kimsenter/lymfeknute (10.2), Gram+/Gram−
cellevegg (11.1), hematopoiese-treet (12.1), respirasjonsmuskler og recessus
costodiaphragmaticus (13.3), meiose med non-disjunction (7.4).

**G5. Filer og stil:** `public/images/textbook/med1100/<navn>.svg`. Norsk tekst
(latin der figuren merker anatomi), akser og hjelpelinjer i `#6b7280`, kurver og
strukturer i mid-tone farger, **transparent bakgrunn** (må være lesbar i både
lys og mørk modus), viewBox ca. 480×360, tydelige etiketter. Valider XML før
wiring.

**G6. Etter at nye figurer er skrevet:** kjør
`npx tsx scripts/upload-media-storage.ts` — bilder serveres fra Supabase
Storage, og uten opplasting blir det 404 i prod (figurene ligger ikke lenger i
git som sikkerhetsnett). Kjør deretter
`python3 scripts/hoyskolebok/sjekk-figurer.py med1100`.

**G7. `alt` og `caption`.** `alt` beskriver figuren bokstavelig for skjermleser
— ren tekst, ingen LaTeX, ingen markdown, ingen backticks (§0.4). `caption`
skrives for nettopp den plasseringen, knyttes til kapitlets eget eksempel og
termbruk, og bærer skjematikk-merkingen fra G1. En figur skal bare vise det
kapitlet har lært bort: ikke tegn inn MHC klasse II i en figur i kap. 10.1 hvis
antigenpresentasjon først forklares i 10.2 — lag to figurer.

---

## §K KVOTEKONTRAKTEN (AUTORITATIV — fra skjelettets kvotesammendrag)

**Bindende total: quiz 706 · flashcards 734.** Begge tall er **GULV**, ikke tak
— overskyting er lov, underskyting er kontraktsbrudd. (Plattformens harde
minimum er 600 quiz / 700 flashcards; MED1100 ligger over fordi faget er
ekstremt puggetungt og dekker tre eksamener som alle må bestås.)

| Del | Blokk | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|---|
| 0 | meta | 2 | 22 | 16 | — |
| 1 | 1 | 4 | 56 | 64 | 4 |
| 2 | 1 | 2 | 26 | 30 | 4 |
| 3 | 1 | 3 | 44 | 48 | 4 |
| 4 | 1 | 5 | 78 | 78 | 4 |
| 5 | 2 | 2 | 28 | 36 | 4 |
| 6 | 2 | 4 | 60 | 64 | 4 |
| 7 | 2 | 4 | 56 | 62 | 4 |
| 8 | 2 | 3 | 44 | 50 | 4 |
| 9 | 2 | 3 | 42 | 50 | 4 |
| 10 | 3 | 4 | 60 | 68 | 4 |
| 11 | 3 | 3 | 42 | 48 | 4 |
| 12 | 3 | 2 | 26 | 30 | 4 |
| 13 | 3 | 3 | 46 | 58 | 4 |
| 14 | meta | 6 | 76 | 32 | — (3 øvingseksamener) |
| **Sum** | | **50 kap. + 13 prøvekap.** | **706 ✓** | **734 ✓** | **52 prøver** |

Per kapittel (quiz · flashcards) — **minimum**:

| Kap. | Q · F | Kap. | Q · F | Kap. | Q · F |
|---|---|---|---|---|---|
| 0.1 | 10 · 8 | 6.1 | 16 · 18 | 10.1 | 16 · 18 |
| 0.2 | 12 · 8 | 6.2 | 16 · 18 | 10.2 | 16 · 18 |
| 1.1 | 14 · 16 | 6.3 | 16 · 16 | 10.3 | 16 · 18 |
| 1.2 | 14 · 16 | 6.4 | 12 · 12 | 10.4 | 12 · 14 |
| 1.3 | 14 · 16 | 7.1 | 14 · 16 | 11.1 | 14 · 16 |
| 1.4 | 14 · 16 | 7.2 | 14 · 16 | 11.2 | 14 · 16 |
| 2.1 | 14 · 16 | 7.3 | 14 · 14 | 11.3 | 14 · 16 |
| 2.2 | 12 · 14 | 7.4 | 14 · 16 | 12.1 | 14 · 16 |
| 3.1 | 16 · 16 | 8.1 | 16 · 18 | 12.2 | 12 · 14 |
| 3.2 | 14 · 16 | 8.2 | 14 · 16 | 13.1 | 16 · 20 |
| 3.3 | 14 · 16 | 8.3 | 14 · 16 | 13.2 | 16 · 20 |
| 4.1 | 16 · 16 | 9.1 | 14 · 16 | 13.3 | 14 · 18 |
| 4.2 | 16 · 16 | 9.2 | 14 · 18 | 14.1 | 18 · 8 |
| 4.3 | 16 · 16 | 9.3 | 14 · 16 | 14.2 | 16 · 8 |
| 4.4 | 14 · 14 | 5.1 | 14 · 18 | 14.3 | 18 · 10 |
| 4.5 | 16 · 16 | 5.2 | 14 · 18 | 14.4–14.6 | 8 · 2 hver |

**K1. Flashcards telles som toppnivå `definition`-blokker med `title`.** Ligger
en definisjon inne i en `collapsible`, teller den ikke.

**K2. Tidsbudsjettet.** Summen av `estimatedMinutes` over de 50
innholdskapitlene er **2 970 min**. De 52 prøvene (4 per prøvekapittel, 20–40
min hver) legger til rundt **1 560 min**. **Bokas samlede tidsbudsjett er
ca. 4 530 min ≈ 75 timer** — dette tallet brukes i «Lite tid?»-boksen i kap. 0.1,
med presiseringen at anslagene er LESEtid, og at den som regner statistikk for
hånd bør legge på ca. ×1,5.

### K3 Quiz-filene

`src/lib/data/quiz-staging/<kapittel-id>.quiz.json`:

```json
[{ "question": "…", "options": ["riktig", "distraktor", "distraktor", "distraktor"], "explanation": "…" }]
```

Nøyaktig **4 alternativer**, `options[0]` **ALLTID** riktig (runtime stokker
rekkefølgen). Ingen duplikate alternativer.

**Kalibrering:** flervalg dominerer TO av tre blokker. Quizbanken i Del 1–4
(226 spørsmål) er derfor reell blokk 1-trening, og banken i Del 10–13
(174 spørsmål) er reell blokk 3-trening — skriv dem som eksamensspørsmål, ikke
som kunnskapskontroll. Del 5–9s quiz driller i tillegg blokk 2s rutenett-
format (riktig/galt-utsagn og «klasse 1 / klasse 2 / begge»-vurderinger som
enkeltspørsmål).

**Distraktorer = reelle feller fra analysen**, aldri tullesvar: MHC klasse I vs.
II, cortex vs. medulla i thymus, afferente vs. efferente lymfekar, C3a/C4a/C5a,
V- vs. C-region, OR vs. RR, korrelasjon vs. regresjon, sensitivitet vs. PPV,
ramus marginalis dexter vs. ramus circumflexus, n. phrenicus vs. n. vagus,
kapsel vs. betalaktamase hos pneumokokk, RNA-virus i cytoplasma vs. DNA-virus i
kjerne, kompetitiv vs. ikke-kompetitiv hemming, tumorsuppressor vs.
proto-onkogen. En distraktor gjengir ALDRI bokas egne presiseringer som «galt»
svar; ligger en distraktor nær sannheten, forklarer `explanation` eksplisitt
hvorfor den ikke holder.

**Hver `explanation`** (2–4 setninger) begrunner både hvorfor fasiten stemmer og
hvorfor den nærmeste distraktoren er gal.

**Aldri posisjonsreferanser i `explanation`.** Alternativene stokkes ved
kjøretid, så «alternativ to» og «det siste alternativet» peker på noe tilfeldig
for leseren. Vis til alternativet ved INNHOLD: «alternativet som sier at
spesifisiteten synker når prevalensen synker, forveksler …». Porten
`sjekk-alternativref.py` fanger brudd.

**LENGDE-TELL:** alle fire alternativer skal ha jevn lengde og samme
presisjonsgrad. `options[0]` skal være unikt lengst i **under 30 %** av
spørsmålene — og unikt kortest i under 30 %. Er alternativene tall, skal alle
fire ha samme format og samme størrelsesorden, og hver av dem svare til en
konkret regnefeil. Kontroll: `node scripts/hoyskolebok/quiz-lengdesjekk.mjs`
(etter wiring) og manuell telling underveis.

### K4 Flashcard-profilen (fra skjelettets kvotesammendrag)

Kortene er fakta-, normalverdi-, formel-, latin- og mekanismekort til pugg:

- **struktur ↔ navn, begge veier:** n. phrenicus ↔ mellomgulvsnerven; valva
  mitralis ↔ mitralklaffen; recessus costodiaphragmaticus ↔ pleurahulens
  nedre lomme.
- **normalverdier og kritiske verdier:** 1,96 (tosidig 5 %), 3,84 (χ², 1 fg),
  styrkekonstant k ≈ 10,5 (90 %) / ≈ 7,9 (80 %).
- **formel ↔ bruksbetingelse:** «OR ≈ RR — når?»; «kompetitiv hemming — hva
  skjer med Km og Vmax?»; «normaltilnærming til binomisk — når?».
- **signal ↔ kjede:** insulin → RTK → IRS → PI3K → PIP₃ → Akt → GLUT4.
- **mekanismeledd ↔ rekkefølge:** apoptose Bax → cytokrom c → APAF-1 →
  caspase-9; T-celle DN → DP (cortex) → SP (medulla).
- **klassifikasjon:** pRB/p53/p16/p21 = tumorsuppressorer; cyklin/CDK/E2F =
  proto-onkogener.
- **blokk ↔ form ↔ minuspoeng:** «blokk 2-rutenett — skal du gjette?» → «nei,
  blankt = 0 slår −0,5».

Regnetunge kapitler har flashcards ≈ quiz; rene faktakapitler (histologi,
anatomi, immunologi) har flashcards ≥ quiz.

---

## Sjangerkoder og feilkoder (fra skjelettets §2 — gjengis i kap. 0.1 og 0.2)

**Sjangerkodene skrives ut i klarspråk ved FØRSTE bruk i HVERT kapittel.**

| Kode | Blokk | Sjanger |
|---|---|---|
| `B1-MC` | 1 | flervalg konseptspørsmål (velg ett / velg TO/TRE), ofte klinisk vignett, automatisk rettet |
| `B1-KORT` | 1 | kortsvar/innfylling |
| `B1-STAT` | 1 | statistikk-regne-/resonnementoppgave i fritekst — **vist utregning + eksplisitte hypoteser + klartekst-tolkning** |
| `B1-ESS` | 1 | samfunnsmedisin-essay: definisjon + konkret eksempel + oppramsing, ofte maks ½ side |
| `B2-HIST` | 2 | histologi-/EM-bildetolkning: navngi **og begrunn** ut fra farge/morfologi |
| `B2-MEK` | 2 | mekanisme-essay: nummerert molekylkjede i riktig rekkefølge |
| `B2-REGN` | 2 | regneoppgave: **vist utregning + riktige enheter**, enhetskonvertering poenggivende |
| `B2-RUTE` | 2 | riktig/galt- eller «klasse 1/2/begge»-rutenett **med NEGATIV RETTING** |
| `B2-NED` | 2 | nedtrekk/utfylling |
| `B3-1` | 3 | velg ett (dominerer, ~75–85 %) |
| `B3-2` | 3 | velg to / «angi de 2 mest riktige» (**nøyaktig to**) |
| `B3-NOM` | 3 | latinsk navnegjenkjenning / struktur-ID |
| `B3-BILDE` | 3 | morfologigjenkjenning (blodutstryk, histologi, CT/røntgen thorax, hjertetegning) |

**Feilkodene glosses ved FØRSTE bruk PER KAPITTEL** — «(felle E17 — hemmertype
forvekslet)». Kap. 0.2 lister dem alle og sier at de har et samlet register.

**Blokk 1:** `E1` OR/RR forvekslet (eller risikospråk i tverrsnitt) · `E2`
glemme at OR ≈ RR/PR bare ved sjelden sykdom / lav prevalens · `E3` statistisk
signifikans ≠ klinisk relevans · `E4` tolke ikke-signifikant funn som «ingen
effekt» · `E5` behandle avhengige observasjoner som uavhengige · `E6` bruke 1,96
der t-verdi kreves · `E7` korrelasjon vs. regresjon · `E8` overse selvseleksjon ·
`E9` glemme multippel testing-korreksjon · `E10` overdiagnostikk vs. falske
positive · `E11` glemme faktor 2 i tosidig p-verdi · `E12` svare på lavere nivå
enn spørreordet / mangle klartekst-tolkning.

**Blokk 2:** `E13` kreftgen-forveksling (pRB/p53/CKI = tumorsuppressorer;
cyklin/CDK/E2F = proto-onkogener) · `E14` Hardy-Weinberg: glemme bærerne / at
letale recessive alleler ikke er i likevekt · `E15` pentosefosfatshunten gir
NADPH, ikke ATP · `E16` glukose-6-fosfatase kun i lever/nyrebark · `E17`
hemmertype-feil · `E18` serøst/mukøst eller enlaget/flerlaget forvekslet ·
`E19` netto glykolyse → laktat gir 2 ATP og 0 NADH · `E20` **gjette på negativt
rettet rutenett** · `E21` identifisere histologisk struktur uten begrunnelse ·
`E22` sluttsvar uten vist utregning / glemt enhetskonvertering.

**Blokk 3:** `E23` nære immunologi-distraktorer · `E24` «mest korrekt»-fellen ·
`E25` latinsk upresisjon (bøyning, sinistra/dextra, ventral/dorsal,
fantasinavn) · `E26` mikrobiologifeller (Mycoplasma uten cellevegg;
pneumokokk-kapsel, ikke betalaktamase; RNA-virus i cytoplasma / DNA-virus i
kjerne).

---

## Kildegrunnlag og sannferdig kildenote (UFRAVIKELIG — produkteier)

Arkivet `~/Desktop/Eksamner/UiO/MED1100/eksamen/` inneholder **~42 oppgavesett
fra 2021–2026**, fordelt på de tre blokkeksamenene:

- **Blokk 1: 16 lesbare sittinger** (V21–V26). H25 ORD/KONT og V26 ORD er lest
  oppgave for oppgave inkludert sensorveiledning; 2024–2025 og 2021–2023 er
  systematisk gjennomgått. **Fire filer var billedskannede uten tekst** (blokk 1
  H22 ORD/KONT og V23 ORD) og kunne ikke tekstanalyseres.
- **Blokk 2: 14 sittinger** (2022h–2025h, ordinær + kont), alle lest oppgave for
  oppgave **inkludert de innebygde sensorveiledningene**.
- **Blokk 3: 7 sittinger** (2021v–2025h). 2023v/h, 2024v og 2025h er lest
  oppgave for oppgave; 2021–2022 for format og tema. **Flere blokk 3-filer er
  delvise seksjonsuttrekk** (f.eks. 2022v = kun mikrobiologi, 2022h = kun
  anatomi), så spørsmålstall per full sitting er estimert.

**Bindende språkregler:**

1. **Sensorveiledningene er blokk-scopet.** Skriv «sensorveiledningene som
   ligger i blokk 2-settene (2022h–2025h)» og «sensorveiledningen i blokk
   1-settene H25 og V26». Ubestemt flertall uten scope («sensorveiledningene»,
   «alle sensorveiledningene») er FORBUDT og grep-sjekkes.
2. **Det finnes IKKE sensorveiledning for blokk 3.** Blokk 3-filene er
   «med fasit»-versjoner der fasiten er en **visuell utheving** som ikke fanges
   av tekstuttrekk. Boka skal derfor **aldri påstå å vite hvilket alternativ som
   var riktig på en virkelig blokk 3-oppgave**, og aldri omtale en
   sensorveiledning for blokk 3. Blokk 3-analysen bygger på spørsmålstema og
   -type. Alle riktige svar i bokas egne blokk 3-oppgaver er Skolesagas egne,
   faglig begrunnede svar på Skolesagas egne, nyskrevne spørsmål.
3. **Nevnerne er blokk-spesifikke** (§B5): 16 for blokk 1, 14 for blokk 2,
   varierende (4/4, 3/3, 2/2) for blokk 3. Regn dem aldri om til én felles
   nevner og aldri til prosent av 7.
4. **Modellbesvarelsene i boka er NYSKREVNE av Skolesaga.** De omtales aldri som
   ekte studentbesvarelser og aldri som hentet fra en fasit.
5. **Den nasjonale «felles avsluttende deleksamen» er IKKE en kilde** og skal
   ikke nevnes som grunnlag (§H3).
6. **Ingen andre kildetyper nevnes** — ingen «karakterstatistikk», ingen
   «strykprosent», ingen «eksamensrapport», ingen «sensorpanel».
7. **Vurderingsordningen** (tre blokkeksamener, alle bestått/ikke bestått)
   presenteres med henvisning til at studenten skal sjekke UiOs emneside for sitt
   eget semester, siden vurderingsordninger kan endres.

**Kildenoten i kap. 0.1** — bruk denne formuleringen eller en trofast
omskrivning:

> Frekvenstallene i denne boka er telt i UiOs eksamensarkiv for MED1100,
> 2021–2026. Fordi modulen har tre separate eksamener, er nevneren ulik for hver
> blokk: **blokk 1 er telt i 16 lesbare sittinger** (fire eldre filer var
> billedskannet og kunne ikke leses), **blokk 2 i 14 sittinger** fra høsten 2022
> til høsten 2025, og **blokk 3 i 7 sittinger** — der flere av filene bare
> inneholder deler av settet, slik at tallene der oppgis som «4 av 4 leste
> sittinger» og ikke som prosent. Blokk 2-settene har innebygde
> sensorveiledninger, og det er de som er kilden til reglene om moment-for-
> moment-retting, negativ retting på rutenett og hva som ikke forventes. Blokk
> 3-filene viser fasiten som en visuell utheving som ikke lar seg lese ut av
> teksten — derfor bygger blokk 3-delen på hvilke temaer og spørsmålstyper som
> går igjen, ikke på hvilke alternativer som var riktige. Tidsserien er kort, så
> ±1 sitting per tema er realistisk usikkerhet. Alle oppgaver, case, tall og
> modellbesvarelser i boka er nyskrevet av Skolesaga.

**Bruk ALDRI den literale markøren `(verifiser)` i kapittelfilene** —
`sjekk-bok.py` feiler på den. Er noe genuint usikkert, skriv usikkerheten ut i
klartekst etter §M3.

---

## Leserkrav (ufravikelig — full ordlyd i README «Leserkrav»; SKAL i førsteutkastet)

- **Kun eksamensrelevant stoff**; «bør kjenne til» sist og merket (gjelder særlig
  det sensor markerer som «ikke forventet», §M5).
- **Korte avsnitt** (2–4 setninger), aktiv «du»-form, konkret norsk knagg før
  formalismen og før latinen. Godt, flytende norsk; ALDRI telegramstil.
  Presisjon vinner ved tvil — i et medisinfag er upresis prosa en faglig feil,
  ikke en stilfeil.
- **Meningsfulle oppgaver:** hver oppgave er synlig eksamensforankret.
  Sjanger-/nivåmetadata skrives som en LEDENDE parentes i `task`, f.eks.
  `(Eksamensnivå, B2-MEK — mekanisme-essayet i blokk 2.)`, ALDRI midt i
  brødteksten. Ikke gjenta `difficulty` i teksten («(krevende)» skrives ikke i
  `task` — feltet vises i oppgavehodet).
- **Læringsløkke Teori → Eksempel → Oppgave** med `exercise`-blokker INLINE (se
  løkke-kontrakten øverst).
- **Ingen usett forkunnskap** (samme sted).
- **Deloppgaver på egen linje, fet merking:** a), b), c) i `task`/`solution`
  HVER på egen linje — `…\n\n**a)** …\n**b)** …`. ALDRI bak hverandre i løpende
  tekst; ikke bruk `subTasks`.
- **Nybegynner-inngang / ingen uforklart sjargong (UFRAVIKELIG).** Boka skal
  forstås av en fersk medisinstudent i første semester:
  - **Sjangerkodene B1-/B2-/B3-** skrives ut i klarspråk ved FØRSTE bruk i HVERT
    kapittel.
  - **Feilkodene E1–E26** glosses ved FØRSTE bruk PER KAPITTEL.
  - **Eksamens-metaspråk** forklares før bruk: «blokkeksamen», «Inspera» (UiOs
    digitale eksamenssystem), «sensorveiledning», «vekttall», «rutenett»,
    «negativ retting», «kont/utsatt eksamen», «bestått / ikke bestått»,
    «momentliste», «følgefeil», «formelsamling», «statistiske tabeller».
  - **Fagtermer forklares ved første bruk, ALDRI kaldt:** «eukromatin»,
    «heterokromatin», «ruER», «nukleolus», «epitel», «serøst/mukøst endestykke»,
    «konfunder», «prevalens», «insidens», «persontid», «odds», «styrke»,
    «sensurering», «allel», «non-disjunction», «imprinting», «kompetitiv
    hemmer», «likevektspotensial», «opsonisering», «somatisk hypermutasjon»,
    «isotypeskift», «PAMP», «virulensfaktor», «radix pulmonis», «mediastinum»,
    «recessus».
  - Ingen kald kode i `competenceGoals` eller i aller første tekstboks.
  - **Kap. 0.1 har en «Slik leser du denne boka»-orienteringsboks** (type `text`
    eller `tip`, **ALDRI `definition`** — det ville endret flashcard-kvoten) med:
    at vurderingen er tre separate bestått/ikke bestått-eksamener uten
    kompensasjon, hva det betyr for lesestrategien, kompakt liste over
    sjangerkodene per blokk, kompakt liste over feilkodene E1–E26 med at de har
    et samlet register i kap. 0.2, hjelpemiddel-oversikten, og en eksplisitt
    innramming av de tunge symbolene og latinske navnene leseren vil møte
    senere: «du trenger ikke forstå $\chi^2$ eller *recessus
    costodiaphragmaticus* ennå — de forklares der de brukes».
- **Del 0-pakken (kap. 0.1 der ikke annet er sagt):**
  - **Blokk-oversiktstabellen** fra §B, komplett.
  - **«Lite tid?»-boks** (`tip`) med hurtigrute **per blokk** (3–5 dager foran
    hver av de tre eksamensdagene — ikke én felles rute) og ukeplan bygget av
    summerte `estimatedMinutes`. **Bokas sum er ca. 4 530 min ≈ 75 timer**
    (2 970 min på de 50 kapitlene + ~1 560 min på de 52 prøvene, §K2). Boksen
    sier at anslagene er LESEtid, og at den som regner statistikk for hånd bør
    legge på ca. ×1,5.
  - **Kildenote** for frekvens-empirien — ordrett eller trofast omskrevet fra
    «Sannferdig kildenote» over.
  - **Sjanger-/prosedyrekort på ÉN side** — kortet SELV (sjanger → én linjes
    oppskrift → hvilken blokk og oppgaveplass den pleier å ha → vanligste
    felle), ikke en lenkeliste.
  - **Deltidsrute** 10–12 uker (~5–6 t/uke) organisert mot **tre eksamensdager i
    den rekkefølgen blokkene avlegges**, med temadelprøvene underveis og
    øvingseksamenen i hver form lagt inn foran sin egen blokk — aldri alle tre
    stablet i siste uke.
  - **«lese mye, skrive lite»-boks** — legitim rute for lese-øveren (les
    oppgaven → formuler momentlisten i én setning → les fasiten som sensor) +
    minimumsrådet: **skriv minst én blokk 2-oppgave og én statistikkoppgave for
    hånd på tid.** Blokk 2 er seks timer håndskrift, og det er en fysisk
    ferdighet.
  - **`collapsible` «Hjelpemiddelkartet»** — hva som er tillatt i hvilken blokk
    (kalkulator i blokk 1 og 2; statistiske tabeller og formelsamling KUN i
    blokk 1; ingenting i blokk 3), og treningsrådet: **løs statistikkoppgaver
    med tabellene og formelsamlingen ved siden av, slik eksamen faktisk er — og
    løs blokk 3-drill uten noe som helst.**
  - **`collapsible` «Formel-, normalverdi- og latinminimum»** — bokas samlede
    oppslagskort: en ren, printbar oversikt med kjerneverktøyene per blokk
    (kritiske verdier og formler med bruksbetingelse · de faste
    mekanismekjedene · latin↔norsk-kjernelisten).
  - **Helseforbeholdsnotisen** fra §H2.
  - **I kap. 0.2:** minuspoeng-strateginoten (uthevet), spørreordtrappen (§S2),
    de seks kredittreglene (§S1) og det samlede feilkoderegisteret E1–E26.
- **Klikkbare kap-referanser:** «kap. X.Y» i forkunnskaper og fasiter =
  markdown-lenke `[kap. X.Y](/med1100/med1100-X-Y)`; død «se kapittel»-tekst er
  FORBUDT (aldri lenker i `title`-felt). Lenk kun til filer som finnes på disk
  når du skriver — byggeleder legger inn resten ved wiring.
- **Selvdiagnose:** avkryssbar sjekkliste (☐) etter hver prøvefasit og etter hver
  øvingseksamen-fasit, fagkonkret per blokk (se «Prøvekapitler»).
- **Lett innstegsoppgave** (difficulty `lett`, ren gjengivelse med egne ord)
  tidlig i teorikapitler der første oppgave ellers er full eksamenssjanger.
- **Hverdagsanker + verdens-caser:** abstrakte kjernetemaer åpner med et konkret
  anker før apparatet — hvorfor en test som er «99 % sikker» likevel gir mange
  falske alarmer i en frisk befolkning, hvorfor du puster fortere i høyden,
  hvorfor et kutt gror. Innpakningene er virkelige situasjoner, aldri «en
  medstudent skriver …»-metaeksempler. Kliniske vignetter rammes inn etter §H4.
- **Øktmerking:** alle kapitler med `estimatedMinutes` > 45 — det vil si
  1.1–1.4, 3.1–3.3, 4.1–4.5, 5.1–5.2, 6.1–6.4, 7.1–7.4, 8.1–8.3, 9.1–9.3,
  10.1–10.3, 11.1–11.3, 12.1–12.2, 13.1–13.3 og 14.1–14.6 — har tidsanslag per
  løkke («## Løkke 2 — hemmertypene (~15 min)») eller
  «— naturlig pausepunkt —»-markører. Lange momentlister og fasiter har
  pausepunkt mellom hovedseksjonene.
- **Hint + difficulty-spredning:** alle `exercise` har utfylte `hints` (første
  hint = formelen, forutsetningen, mekanismens første ledd eller «hvilken blokk
  er dette, og har den minuspoeng?» — ALDRI konklusjonen). Unntak: den merkede
  kalde banken i kap. 14.2. Boka har flere genuint krevende oppgaver merket
  `vanskelig`.
- **Fasitmønster-variasjon:** ALLE ensartede fasitlister varierer. Statiske
  flervalg i prøve- og øvingseksamen-collapsibles har STOKKEDE fasit-bokstaver
  (aldri «alle a»); riktig/galt- og rutenettlister blander reelle og feller
  (aldri «alle galt»). Quizfilene beholder `options[0]`-invarianten fordi
  runtime stokker.
- **Meta-fasit forbudt:** ingen «en god besvarelse ville her ha …». Skriv
  begrunnelsen ut (§S3).
- **Signalbokser ETTER oppgaven:** en boks som varsler hva en drilloppgave
  tester, plasseres etter oppgaven eller som collapsible hint, aldri foran.
- **Tidsbudsjett-konsistens:** der en oppgaves deklarerte tid avviker fra summen
  av deltidene, forklares differansen (anbefalingene er regne-/skrivetid; resten
  er lesing av oppgaveteksten og gjennomlesing).
- **Juridisk:** innholdet fremstiller seg ALDRI som offisielt eller
  UiO-tilknyttet, og lover aldri eksamensutfall. Uavhengighets- og
  helseforbeholdsdeklarasjonene vises automatisk av plattformen (§0.9) — i
  tillegg til §H2s egen notis.

---

## Kryssbok-lenker (verifisert mot disk 28. juli 2026 — alle filene finnes)

Lenkeform `[tittel](/<courseId>/<id>)`. **Titlene under er de faktiske
kapitteltitlene og skal brukes ordrett.** Lenk ALDRI til en fil som ikke finnes
(`sjekk-bok.py` fanger døde lenker).

| Brukes i | courseId | id | Tittel |
|---|---|---|---|
| 1.1, 5.2 | `biologi-1` | `biologi-1-1-2` | Prokaryote og eukaryote celler |
| 1.1, 5.2, 9.2 | `biologi-1` | `biologi-1-1-3` | Cellens organeller |
| 9.1 | `biologi-1` | `biologi-1-1-4` | Cellemembranen |
| 9.1 | `biologi-1` | `biologi-1-1-5` | Transport over cellemembranen |
| 1.4, 8.1 | `biologi-1` | `biologi-1-1-6` | Cellekommunikasjon og signaloverføring |
| 1.4, 6.1 | `biologi-1` | `biologi-1-2-1` | Energi og metabolisme |
| 6.1 | `biologi-1` | `biologi-1-2-2` | Glykolyse |
| 6.1, 6.2 | `biologi-1` | `biologi-1-2-3` | Sitronsyresyklus og elektrontransportkjeden |
| 6.1 | `biologi-1` | `biologi-1-2-4` | Anaerob energiomsetning |
| 8.2 | `biologi-1` | `biologi-1-4-1` | Cellesyklus |
| 1.1, 7.4 | `biologi-1` | `biologi-1-4-3` | Meiose |
| 8.2, 8.3 | `biologi-1` | `biologi-1-4-4` | Feil i celledeling og kreft |
| 1.4 | `biologi-1` | `biologi-1-3-2` | Fordøyelse og ernæring |
| 1.2 | `biologi-1` | `biologi-1-3-3` | Sirkulasjon og gassutveksling |
| 1.3, 9.1 | `biologi-1` | `biologi-1-5-2` | Nervesystemet og signaloverføring |
| 1.4, 8.1 | `biologi-1` | `biologi-1-5-3` | Hormonsystemet |
| 1.3 | `biologi-1` | `biologi-1-5-5` | Nyrene, væskebalanse og osmoregulering |
| 11.1 | `biologi-1` | `biologi-1-6-2` | Bakterier – oppbygning, formering og betydning |
| 11.3 | `biologi-1` | `biologi-1-6-3` | Virus – struktur, livssyklus og sykdom |
| 10.1, 10.3 | `biologi-1` | `biologi-1-10-1` | Immunforsvarets oppbygning |
| 10.2 | `biologi-1` | `biologi-1-10-2` | Antistoffer og immunitet |
| 7.1 | `biologi-2` | `biologi-2-1-1` | DNA-struktur og replikasjon |
| 7.1 | `biologi-2` | `biologi-2-1-2` | Transkripsjon |
| 7.1, 9.2 | `biologi-2` | `biologi-2-1-3` | Translasjon |
| 7.4, 8.2 | `biologi-2` | `biologi-2-1-5` | Mutasjoner og DNA-reparasjon |
| 7.2 | `biologi-2` | `biologi-2-1-6` | Mendels genetikk |
| 7.2, 7.3 | `biologi-2` | `biologi-2-1-7` | Avanserte arvemønstre |
| 13.1 | `biologi-2` | `biologi-2-2-3` | Hjertets oppbygning og funksjon |
| 12.1, 12.2 | `biologi-2` | `biologi-2-2-4` | Blodet og blodkretsløpet |
| 12.2, 13.3 | `biologi-2` | `biologi-2-2-5` | Gassutveksling i lungene |
| 10.1, 10.2 | `biologi-2` | `biologi-2-2-7` | Immunsystemet |
| 1.3, 9.1 | `biologi-2` | `biologi-2-3-1` | Nerveceller og signaloverføring |
| 1.1, 9.3 | `biologi-2` | `biologi-2-4-1` | Kjønnsceller og befruktning |
| 7.1 | `biologi-2` | `biologi-2-6-3` | PCR og gensekvensering |
| 3.1, 4.3 | `s1` | `s1-5-2` | Betinget sannsynlighet |
| 4.4 | `s1` | `s1-6-2` | Binomisk fordeling |
| 4.1, 4.2 | `s1` | `s1-6-3` | Normalfordelingen |
| 4.5 | `s1` | `s1-7-1` | Lineær regresjon |
| 4.5 | `s1` | `s1-7-2` | Korrelasjon og kausalitet |
| 4.1 | `s2` | `s2-4-3` | Normalfordeling og sentralgrensesetningen |
| 4.1 | `s2` | `s2-5-1` | Estimering |
| 4.2 | `s2` | `s2-5-2` | Hypotesetesting |
| 4.4 | `s2` | `s2-5-3` | Feiltyper og teststyrke |
| 4.4 | `s2` | `s2-5-4` | Feilmargin og utvalgsstørrelse |

**Refereres i KLARTEKST, aldri som lenke** (ikke bygget i systemet):
pensumlitteraturen i modul 1 (histologi-, anatomi-, fysiologi- og
biokjemibøkene) og eventuelle emnesider. Skriv «slå opp i pensumboka i
histologi» — aldri en markdown-lenke til noe som ikke finnes.

Interne lenker: `[kap. X.Y](/med1100/med1100-X-Y)`, prøvekapitler
`[Prøver til del N](/med1100/med1100-N-prove)`. Lenker til kapitler som ennå
ikke er skrevet, legges inn først når fila finnes på disk — koordineres av
byggeleder ved wiring.

---

## Opphavsrett (ufravikelig)

ALLE oppgaver, case, pasientvignetter, tallverdier, figurtekster,
modellbesvarelser og øvingseksamener er **NYSKREVNE** — egne tall, egne
kontekster, egne formuleringer. Eksamenssjangrene og oppgavemalene fra
skjelettet er malen, aldri originaloppgavene. Ingen oppgavetekst, intet
fasitmoment og ingen sensorformulering fra MED1100-settene gjengis ordrett eller
nær parafrasert.

**Anatomiske navn (norsk og latin), fysiologiske sammenhenger, molekylnavn,
mekanismekjeder og statistiske standardformler er standard fagstoff** og fritt å
bruke — det er de opphavsrettsfrie byggeklossene faget består av.
Pensumlitteratur refereres (verk/begrep), aldri siteres i lengde. **Ingen
bilder, mikroskopipreparater, radiologibilder eller figurer fra pensum eller fra
eksamenssettene** — boka bruker kun egne skjematiske SVG-er (§G).

---

## Forbudt-termer (grep-sjekkes — skal gi 0 treff)

Kjør ved ferdigmelding (`sjekk-bok.py` tar regexen som argument 2; den hopper
over `med1100-0-1`, som er avgrensnings-/metakapitlet):

```bash
python3 scripts/hoyskolebok/sjekk-bok.py med1100 \
  "Prioritet: perfekt|A-besvarelse|C-besvarelse|A-kandidat|[Gg]apet til A|ville ha drøftet|en god besvarelse ville|alle sensorveiledningene|sensorveiledningene fra alle|sensorveiledning(en|er)? for blokk 3|felles avsluttende|nasjonal deleksamen|Output:"
```

- **`Prioritet: perfekt`** — skjelettets prioritetsklasse skrives i boka som
  «høyeste prioritet — dette må sitte».
- **karakterbokstaver** — faget er bestått/ikke bestått. Bruk
  «full-pott-besvarelse», «bestått på marginen», «trygt bestått», «toppsjikt».
- **meta-fasit** — «ville ha drøftet», «en god besvarelse ville»: skriv
  begrunnelsen ut.
- **uscopet sensorveiledning-flertall** og **sensorveiledning for blokk 3**
  (finnes ikke — se «Kildegrunnlag» punkt 2).
- **«felles avsluttende» / «nasjonal deleksamen»** — en annen eksamen, holdes
  utenfor (§H3).
- **`Output:`** — utskrift merkes «**Utskrift:**» (gjelder de få stedene boka
  viser tabellutdrag).

`sjekk-bok.py` feiler dessuten automatisk på den literale strengen
`(verifiser)` — bruk klartekst-formuleringen fra §M3 i stedet.

I tillegg skal disse kontrollene gi 0 avvik:

```bash
# 1) Behandlingsspråk må stå i en mekanisme-/eksamensramme (§H5)
python3 scripts/hoyskolebok/sjekk-prosaregel.py med1100 \
  "behandles med|behandlingen er|anbefalt dose|gi pasienten|du bør ta" \
  "mekanisme|virkningsmekanisme|angrepspunkt|eksamen|eksamensoppgave|ikke helseråd|ikke behandlingsråd|regneoppgave"

# 2) Interne lenker med det gamle /bok-prefikset (skal være 0)
grep -l "](/bok/" src/lib/data/chapters/med1100-*.json | wc -l
```

> **⚠️ ALDRI `grep -o` med `.{0,N}`-kontekst mot kapittelfilene.** JSON-filene er
> kompakt tekst på få, svært lange linjer; kombinasjonen gir kvadratisk arbeid og
> sprengte buffere (17 GB RAM på byggemaskinen 25. juli 2026, som har 8 GB
> fysisk minne). `grep -c` og `grep -l` UTEN `-o` og uten `.{0,N}` er trygt.
> Trenger du kontekst, bruk `sjekk-prosaregel.py`, som leser JSON-strukturen.

---

## Tekniske feller (de som faktisk har ødelagt bøker)

**T1. LaTeX i JSON = dobbel backslash.** `\chi^2` må stå som `\\chi^2` i
JSON-fila. Generer derfor ALLTID med `json.dump` og skriv kildeteksten som
Python-strenger (rå strenger `r"$\chi^2$"` eller doble backslasher). En enkelt
`\t` blir et TAB-kontrolltegn, og KaTeX rendrer det bare *galt* uten å klage —
`sjekk-latex.py` er porten som fanger det.

**T2. `$`-fella.** Ethvert dollartegn som ikke er matte MÅ escapes som `\$`. To
uescapede `$` på samme linje pares av rendreren og setter alt imellom som
formel. `$` inne i backticks eller en ```` ``` ````-blokk er trygt.

**T3. Bart `%` inne i matte.** `%` starter en LaTeX-kommentar og spiser resten av
formelen — «95 %-KI» forsvant helt i en live bok. Skriv `\\%` inne i `$…$`.

**T4. `chapterNumber` alltid del-basert.** «7.3», aldri «26». Prøvekapitler:
«7.P». Lineær nummerering ødelegger bokforsidens seksjonsinndeling.

**T5. Ingen tom `collapsible`.** Feltet heter `content` og skal inneholde
blokker. En `text`-nøkkel eller tom array rendrer som en tom boks.

**T6. Ingen dupliserte blokk-id-er** innen et kapittel (porten sjekker), og
ingen dupliserte quiz-spørsmål på tvers av kapitler i samme del.

**T7. Unicode-brøker og rå LaTeX i prosa** er forbudt: skriv `$\tfrac12$`, ikke
«½», og aldri `\frac{1}{2}` utenfor `$…$` (det rendres som rå tekst til
leseren — dette har skjedd i live bøker).

**T8. Nøkkelfakta-listen må inneholde den literale strengen «Symbol- og
formelliste»** (§T5) — ellers feiler `sjekk-bok.py` på alle kapitler med
LaTeX-symboler.

**T9. Gåseøyne inne i matte.** « og » har ingen glyffer i KaTeX-fontene. Hold
dem utenfor `$…$`.

---

## Kvalitetskrav før ferdigmelding (per agent)

1. `python3 -c "import json;json.load(open('fil'))"` på HVER fil du har skrevet
   (kapittel + quiz-staging).
2. **Kvotetelling** mot §K: toppnivå `definition`-blokker med `title` =
   flashcard-kvoten; antall quiz-spørsmål = quiz-kvoten. Aldri under.
3. **Blokk-kontrakten §B:** hvert kapittels Eksamensvinkel sier hvilken BLOKK og
   form det trener; blokk 2-kapitler med rutenett har negativ-retting-noten
   (blankt = 0 slår −0,5); blokk 1- og 3-kapitler har «svar alltid — ingen
   minuspoeng»; frekvenstall bruker riktig nevner per blokk og er ikke regnet om.
4. **Helsekontrakten §H:** forbeholdsnotisen står i kap. 0.1 og i 1.2, 6.4, 11.2
   og 12.2; ingen setning kan leses som behandlingsanbefaling; alle case er
   fiktive; `sjekk-prosaregel.py`-kjøringen over gir 0 avvik.
5. **Medisinsk presisjon §M:** ingen oppdiktede tall eller navn; hvert usikkert
   tall har klartekst-forbeholdet, er loggført i `USIKRE-TALL.md`, og er IKKE
   fasit i quiz, flashcard eller prøve; «ikke forventet»-stoff står som
   kjenne-til, etter kjernestoffet.
6. **Regnekontrakten §R:** hvert talleksempel etterregnet med `python3`; hver
   tilnærmings- og «alltid»-påstand parametersjekket numerisk;
   utvalgsstørrelser rundet opp; hver regnefasit viser oppsett → innsetting →
   mellomregning → svar med enhet → tolkning.
7. **Terminologikontrakten §T:** latin med norsk i parentes ved første bruk per
   kapittel, riktige forkortelser (n./nn., m./mm.) og riktig bøyning; artsnavn i
   kursiv, anatomiske termer ikke; enheter på alle tallsvar; `\%` inne i matte;
   hypoteser eksplisitte og tolkningssetning på plass.
8. **Sensorkontrakten §S:** hver blokk 2-fasit er en momentliste (må-punkter /
   pluss-punkter / feller / delpoeng); hver bildetolkning gir navn + minst to
   kjennetegn; spørreordtrappen respektert; minst én «bestått på marginen»-
   besvarelse per eksamensform, ærlig merket.
9. **Figurkontrakten §G:** alle 14 minimumsfigurene finnes som ekte SVG; hver
   histologi-/EM-/radiologifigur er merket som skjematisk tegning; ingen figur
   utgir seg for å være et ekte preparat- eller pasientbilde; hvert figurløfte i
   teksten er innfridd; `python3 scripts/hoyskolebok/sjekk-figurer.py med1100`
   grønn; `npx tsx scripts/upload-media-storage.ts` kjørt etter nye figurer.
10. **Læringsløkke:** `content[]` veksler teori→eksempel→oppgave med `exercise`
    inline — ikke all teori topp / alle oppgaver bunn.
11. **Forkunnskapsdekning:** gå gjennom hver `exercise` og bekreft at den bare
    hviler på stoff introdusert tidligere i kapitlet eller i en referert
    forkunnskap.
12. **Nybegynner-inngang:** alle sjangerkoder (B1-/B2-/B3-) og feilkoder
    (E1–E26) forklart ved første bruk per kapittel; alle fagtermer glosset ved
    første bruk; ingen kald kode i `competenceGoals` eller første tekstboks;
    kap. 0.1 har «Slik leser du denne boka»-boksen (type `text`/`tip`, ALDRI
    `definition`).
13. **Nøkkelfakta- og formelliste** finnes i hvert av de 50 innholdskapitlene,
    med tittelen «Nøkkelfakta- og formelliste» og åpningsnotisen som inneholder
    den literale strengen «Symbol- og formelliste».
14. **Forkunnskaper-blokk** med overskriften `## Forkunnskaper — sist du var her`
    i hvert kapittel utenom Del 0 (også i prøvekapitlene).
15. **Ingen tom collapsible**; ingen dupliserte blokk-id-er; ingen `/bok/`-lenker.
16. **Fasitmønster** sjekket i alle ensartede fasitlister — riktig svar varierer
    posisjon (aldri «alle a», aldri «alle galt»);
    `python3 scripts/hoyskolebok/sjekk-fasitfordeling.py med1100` grønn.
17. **Quiz-kvalitet:** `options[0]` alltid riktig; ingen posisjons- eller
    bokstavreferanser i `explanation`
    (`python3 scripts/hoyskolebok/sjekk-alternativref.py med1100`);
    LENGDE-TELL under 30 % (`node scripts/hoyskolebok/quiz-lengdesjekk.mjs`);
    distraktorene er reelle feller fra analysen.
18. **Hints** utfylt på alle exercises (unntatt den merkede kalde banken i 14.2);
    første hint røper aldri konklusjonen.
19. **Kildepåstander** følger «Sannferdig kildenote»: blokk-scopede
    sensorveiledninger, ingen sensorveiledning for blokk 3, riktige nevnere,
    ingen omtale av felles avsluttende deleksamen, modellbesvarelser omtalt som
    nyskrevne.
20. **Øktmerking** i kapitler > 45 min; prøvekapitler deklarerer «4 prøver à ~X
    min» + deling over flere kvelder; øvingseksamenene deklarerer sin form,
    varighet og hjelpemidler korrekt (14.5s vekttall summerer eksakt til 100).
21. Porter, alle grønne:
    `python3 scripts/hoyskolebok/status-bok.py med1100` ·
    `python3 scripts/hoyskolebok/sjekk-bok.py med1100 "<forbudt-regex>"` ·
    `python3 scripts/hoyskolebok/sjekk-latex.py med1100` ·
    `python3 scripts/hoyskolebok/sjekk-skjelett.py med1100` ·
    `python3 scripts/hoyskolebok/sjekk-figurer.py med1100` ·
    `python3 scripts/hoyskolebok/sjekk-fasitfordeling.py med1100` ·
    `python3 scripts/hoyskolebok/sjekk-alternativref.py med1100`.
22. **Ferdigmelding krever rendringsbevis:** `npx tsc --noEmit` + `npm run build`
    grønn + prod-server (`PORT=3057 npm run start`) og `curl` mot kapittel- og
    narrativ-ruter (200 + kapittelspesifikk streng). ALDRI meld ferdig uten dette.

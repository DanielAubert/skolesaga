# Byggekontrakt: IN1020 Introduksjon til datateknologi (UiO) — teknisk kontrakt for kapittelforfattere

Denne kontrakten gjelder ALLE forfatter-agenter som bygger kapitler til
`in1020`. Den definerer eksakt filformat, obligatorisk struktur, notasjon og
kvalitetsporter. **Faglig innhold styres av `SKJELETT.md`** (per-kapittel-DNA) —
les ditt kapittels avsnitt der nøye, pluss `EKSAMENSANALYSE.md` ved behov for
mer kontekst, og `../DNA-regnefag.md` for arketypen.

Instansiert fra `../BYGGEKONTRAKT-MAL.md` 25. juli 2026. Mønstre:
`../in1900/BYGGEKONTRAKT.md` (kodefag) og `../econ1310/BYGGEKONTRAKT.md`
(regnefag). IN1020 er en **hybrid**: tre garanterte regneteknikker
(tallkonvertering, cache, subnetting/overføringstid) og to mekanikker
(LMC-sporing, kretsanalyse) på den ene siden, og et stort, presist begrepsapparat
(sikkerhet, arkitektur, nettverkstjenester, operativsystem) på den andre.
Kontrakten dekker begge sider: **Regnekontrakten** (§R) for tallsiden og
**Notasjonskontrakten** (§N) for apparatet.

---

## §0 PLATTFORMSTØTTE — hva du kan stole på

1. **Markdown + LaTeX rendres** av `LatexRenderer`: `$…$` inline, `$$…$$`
   display, tabeller, fete/kursiverte former, lister, lenker.
2. **Kodeblokker rendres.** Trippel-backtick med språktagg
   (```` ```text ````, ```` ```asm ````) settes som `<pre><code>` med bevart
   innrykk, og inline-kode i `` `backticks` `` er beskyttet mot både matte- og
   markdown-transformene (fikset på main 25. juli 2026). **Bruk kodeblokker til
   LMC-programmer, sporetabeller i fast bredde og binære mellomregninger** — da
   forsvinner ikke innrykket, og `*` blir ikke kursiv.
3. **`$`-fella (ufravikelig).** Et dollartegn som IKKE er matte MÅ escapes
   `\$` i JSON-strengen. To uescapede `$` på samme linje er partall, og
   rendreren parrer dem og setter teksten mellom som formel. I dette faget er
   risikoen lav (ingen valuta), men den finnes i prosa om priser/lisenser —
   escape alltid. `$` inne i backticks eller en ```-blokk er trygt.
4. **Bilder:** `alt` rendres rått som HTML-attributt — **ingen LaTeX, ingen
   markdown, ingen backticks der**. `caption` rendres i inline-modus: `$…$`
   virker, men ikke markdown og ikke backticks.
5. **Unicode-subskript og -tegn rendres fint** i vanlig tekst: `1101₂`, `774₈`,
   `2⁵`, `⊕`, `¬`, `′`, `→`, `≥`. Bruk dem i prosa; bruk LaTeX når det er en
   ekte formel som skal stå på egen linje.
6. **Flashcards genereres KUN fra toppnivå `definition`-blokker med `title`** —
   ikke fra definisjoner inne i en `collapsible`.
7. **Quiz stokkes ved kjøretid**, derfor er `options[0]` alltid fasit i
   staging-filene.

---

## LÆRINGSLØKKE-KONTRAKT (ufravikelig byggekrav — produkteier 9. juli 2026)

Fra skjelettets topp, tatt inn her som bindende byggekrav:

- HVERT kapittels `content[]` struktureres som gjentatte små løkker
  **Teori → Eksempel → Oppgave**. `exercise`-blokker plasseres INLINE i
  `content[]` rett etter teorien/eksempelet de trener — ALDRI all teori øverst
  med oppgavene samlet nederst.
- I dette faget er løkka konkret: `definition`/`theorem` som innfører ÉN
  teknikk eller ÉN begrepsdistinksjon → `example` som gjennomfører den med tall
  eller med et flervalg der hvert alternativ vurderes → `exercise` som krever
  nøyaktig den teknikken/distinksjonen. Deretter neste bit.
- **Ingen usett forkunnskap.** Ingen oppgave får kreve et begrep, en formel,
  en instruksjon eller en prosedyre som ikke er innført tidligere i kapitlet
  (t.o.m. eksempelet rett foran) eller i et kapittel som står i
  Forkunnskaper-blokken. Dette var funnet med flest treff i verifiseringen av
  bøkene som ble bygget 25. juli 2026 — les hver oppgave med spørsmålet «hva
  må leseren ha sett for å kunne svare?» og flytt teoribiten fram ved behov.
  Konkrete feller i IN1020: bruke `OTC`/ASCII før ASCII er innført; be om
  broadcast-adresse før AND/OR på oktett er vist; be om «begge tolkninger» av
  en byte før to-er komplement er innført; bruke ordet «uavviselighet» i en
  oppgave i kap. 3.1 når begrepet først defineres i kap. 3.4.
- **Unntak:** prøvekapitlene (`in1020-<del>-prove`) og øvingseksamenene
  (kap. 5.2–5.4) følger sin egen arketype — komplett sett først, løsninger i
  collapsibles.
- Kvotene og innholdskontraktene i skjelettet er UENDRET — løkka styrer kun
  REKKEFØLGEN.

---

## Filplassering

Ett JSON-dokument per kapittel: `src/lib/data/chapters/<kapittel-id>.json`
(f.eks. `in1020-4-2.json`). IKKE rør `_registry.json`, `_all.json`,
`textbook-courses*.ts` eller `quiz-data*.ts` — wiring gjøres sentralt med
`scripts/hoyskolebok/wire-bok.py` (steg 2). Generer JSON via python
`json.dump` (garantert gyldig escaping). Quiz til
`src/lib/data/quiz-staging/<kapittel-id>.quiz.json`.

Boka består av **36 filer**: 32 kapitler (1 eksamenskart + 27 tema/drill + 4
eksamenstrening) + 4 prøvekapitler (`in1020-1-prove` … `in1020-4-prove`).

---

## Kapittel-JSON (toppnivå)

```json
{
  "id": "in1020-4-2",
  "courseId": "in1020",
  "chapterNumber": "4.2",
  "title": "…(fra skjelettet, ordrett)…",
  "description": "…(setningen fra skjelettet)…",
  "estimatedMinutes": 55,
  "competenceGoals": ["kunne lese en nettmaske som CIDR-prefiks", "…"],
  "content": [ …blokker… ],
  "exercises": []
}
```

`chapterNumber` = skjelettets `number` (`<del>.<nr>`; prøvekapitler `<del>.P`).
**ALDRI lineær nummerering** («15») — alltid del-basert («2.4»).
`competenceGoals`: 2–4 «kunne …»-formuleringer avledet av kapitlets
innholdskontrakt — **ingen kald kode her** (ingen bar «sjanger C», «F2», «#7»,
ingen karakterbokstav). `exercises` er alltid tom liste (oppgaver ligger som
`exercise`-blokker inline i `content`).

---

## Blokktyper (eksakte felt — strukturreferanse: `src/lib/data/chapters/econ1310-2-1.json`)

- `text`: `{ "id", "type": "text", "content": "markdown + LaTeX + kodeblokker" }`
- `definition`: `{ "id", "type": "definition", "title": "Begrepet", "content": "…" }`
  — **title er OBLIGATORISK** (flashcard-kilden). I dette faget kalibreres
  `definition` som **begrep → presis definisjon → den faste feilslutningen**:
  «Digital signatur» → hva den er, hva den gir (uavviselighet/autentisitet) og
  hva den **ikke** gir (konfidensialitet). Den siste setningen er det som gjør
  kortet eksamensnyttig under negativ poenggiving.
- `theorem`: `{ "id", "type": "theorem", "title": "…", "content": "…" }`
  — brukes for (a) **regneprosedyrene** (direkte binær↔oktal/hex, to-er
  komplement, `2^n − 2`, subnett/broadcast via AND/OR, overføringstid,
  cache-vektsnitt), (b) **LMC-instruksjonskontraktene** (mnemonic ↔ opkode ↔
  virkning på akkumulator/programteller/minne), og (c) **identitetene**
  (boolske identiteter, funksjonell kompletthet, protokoll→transportlag,
  tiltak→mål, trussel→mål). Disse er bokas «teoremer».
- `example`: `{ "id", "type": "example", "title": "Eksempel N: …", "problem": "…", "solution": "…" }`
  — `solution` viser mellomregningen med enheter, og for flervalgseksempler
  **begrunnes hvert alternativ**, ikke bare fasiten (§F).
- `tip` / `warning`: `{ "id", "type", "title", "content" }`
- `exercise`: `{ "id", "type": "exercise", "exercise": { "id", "number", "type": "classic", "difficulty": "lett"|"middels"|"vanskelig", "task", "solution", "hints": [] } }`
  — ALDRI `solutionVideo` / `allowsUpload` / `allowsCanvasDrawing` / `answer`.
  Ikke bruk `subTasks`-feltet (deloppgaver skrives inline, se Leserkrav).
- `image`: `{ "id", "type": "image", "src": "/images/textbook/in1020/<navn>.svg", "alt": "…", "caption": "…" }`
  — se `FIGUR-BESTILLINGER.md`. **Lover en oppgave en figur, SKAL løsningen
  vise en faktisk SVG** — ikke «figur i ord» alene.
- `collapsible`: `{ "id", "type": "collapsible", "title", "buttonText": "Vis …", "content": [blokker] }`
  — notasjonsliste, prøver, repetisjon. ALDRI tom: feltnavnet er `content` og
  skal ha blokker (en `text`-nøkkel eller tom array rendrer som tom boks).

Blokk-id-er: `<kapittel-id>-<løpenavn>`, f.eks. `in1020-4-2-def-3`,
`in1020-4-2-oppg-5`. Unike innen kapitlet (porten sjekker).

---

## Obligatorisk kapittelstruktur

### Teorikapitler

Alltid, i denne rekkefølgen først i kapitlet:

1. `tip` **Eksamensvinkel** — frekvens, vekt og sjangre med tallene fra
   skjelettets Eksamensbelegg-felt for NETTOPP dette kapitlet (og ingen andre
   tall). Skriv koder ut i klarspråk ved første bruk i kapitlet: «sjanger A —
   tallsystem-konvertering», «svarform F2 — sant/usant-matrise, der du krysser
   sant eller usant for hver rad».
2. `text` **Forkunnskaper — sist du var her** (overskriften skal stå ordrett
   slik, som `## Forkunnskaper — sist du var her` først i blokken). Blokken
   skal (i) lenke kapitlene i boka som dette bygger på — markdown-lenker
   `[kap. X.Y](/bok/in1020/in1020-X-Y)`, (ii) **VISE de 2–3 nøkkelreglene
   ferdig oppfrisket** (selve formelen/instruksjonen/tabellraden, ikke bare
   navnet), og (iii) lenke kryssbok der forkunnskapen ikke dekkes i boka
   (tabellen under — KUN filer som finnes). Har kapitlet ingen forkunnskaper,
   sier blokken det («Dette kapitlet kan leses uten forkunnskaper») og viser
   likevel de begrepene leseren møter først.
3. `collapsible` **Notasjons- og konstruksjonsliste** — se §N under.

Deretter DNA-løpet i læringsløkker: `text` hverdagsanker/motivasjon →
`definition`/`theorem` (flashcard-kilden — toppnivå med title!) → `example`
med gjennomregnet/gjennomvurdert case → `exercise` inline som trener nøyaktig
den biten → neste bit. 2–4 eksempler per delkapittel, det siste på
eksamensnivå i flervalgsform; 6–12 `exercise` i kapitlet, stigende (lett →
middels → vanskelig), de vanskeligste = eksamenskloner av kapitlets sjangre.
`warning` **Typiske feil** (fra feilkatalogen §5) plasseres der den er mest
relevant — ofte rett etter teknikken som utløser feilen — og det skal være
minst én i kapitlet (porten krever en `warning`).

Til slutt i kapitlet: begrepsbank-`definition`-blokker opp til
flashcard-kvoten, og `collapsible` repetisjon. Hver stor begrepsbank åpner med
standard-notisen: «Begrepsbanken er flashcard- og repetisjonsstoff — den
gjentar det du nettopp har lest. Hopp trygt over ved førstegangslesing;
tidsanslaget for kapitlet gjelder kjernestoffet.»

### §N Notasjons- og konstruksjonslisten (skjelettets dokumenterte avvik)

README krever en `collapsible` «Symbol- og formelliste» per delkapittel. For et
datateknologifag er apparatet ikke greske bokstaver, men **konstruksjons-
notasjon**: basesubskript, LMC-instruksjoner, portsymboler, CIDR. Blokken heter
derfor **«Notasjons- og konstruksjonsliste»**. `sjekk-bok.py` krever den
literale strengen «Symbol- og formelliste» i hvert teorikapittel som bruker
LaTeX-symboler, så blokken SKAL ha:

- `title`: `"Notasjons- og konstruksjonsliste"`
- `buttonText`: `"Vis notasjon og konstruksjoner"`
- første linje i første `text`-blokk inne i collapsiblen, ORDRETT:
  «Oppslagsverk — alt her forklares underveis i kapitlet. Dette er kapitlets
  Symbol- og formelliste, tilpasset et datateknologifag: den lister notasjonen
  og konstruksjonene i stedet for greske bokstaver.»

Da er både README-notisen og porten oppfylt uten å endre skript.

Innholdet er en markdown-tabell `| Notasjon | Betydning / virkning |` med ALT
delkapitlet bruker — **per delkapittel, ikke arv fra tidligere kapitler**.
Under tabellen: «**Formler i dette delkapitlet:**» med display-LaTeX og
ett-linjes tolkning per formel. Unntak kun for kapitler helt uten notasjon
(finnes knapt i denne boka).

### Drillkapitler (1.2, 1.6, 2.3, 2.7, 3.5, 4.4)

`tip` Eksamensvinkel → `text` Forkunnskaper — sist du var her → `collapsible`
Notasjons- og konstruksjonsliste → `text`/`theorem` **Løsningsoppskrift**
(nummerert, steg for steg, fra skjelettets innholdskontrakt) → `example`
gjennomarbeidet case med margnotater om hva som gir uttelling og hvorfor hvert
gale alternativ er galt → 12–16 `exercise` som roterer sjangerens varianter,
alle på eksamensnivå med nyskrevne tall/kretser/programmer, alle med `solution`
som begrunner ALLE alternativer + `hints`. Signal-/hintbokser som varsler hva
en drilloppgave tester, står ETTER oppgaven. Drillkapitler har lav
flashcard-kvote (10–12) — de er treningsbanker, ikke begrepsbanker.

### Prøvekapitler (`in1020-1-prove` … `in1020-4-prove`)

Id `in1020-<del>-prove`, `chapterNumber` `<del>.P`, tittel «Prøver til del
`<del>`: `<deltittel>`»:

- `tip`: dekning + tidsbruk, deklarerer «4 prøver à ~X min» med minuttene fra
  skjelettets prøve-kvote-linje for delen + «kan trygt deles over flere
  kvelder — én prøve per økt», og sier hvor flervalget bor (inline i prøven
  eller i den interaktive quizen).
- `text` **Forkunnskaper — sist du var her** (porten krever «Forkunnskaper» i
  alle kapitler utenom Del 0).
- Fire `collapsible` («Prøve 1»–«Prøve 4», buttonText «Vis prøve N») med
  nyskrevne oppgaver i eksamens svarformer og full fasit som begrunner hvert
  alternativ. **Statiske flervalg har STOKKEDE fasit-bokstaver** — aldri «alle
  a»; porten flagger mønsteret «1a · 2a · 3a».
- Etter hver prøvefasit: avkryssbar selvdiagnose-sjekkliste (☐), formulert
  konkret: «☐ konverterte du direkte, uten omveien via desimal? ☐ oppga du
  BEGGE tolkningene av byten? ☐ trakk du fra 2 i vertstallet?».
- Kap-referanser i fasitene som markdown-lenker.
- Ingen begrepsbank og ingen quizkvote for prøvekapitler.

Prøvekapitler regnes som vurderingskapitler i `sjekk-bok.py` og er derfor
unntatt kravene om «Typiske feil»-warning og symbolliste.

### Øvingseksamener (5.2–5.4)

Komplette sett etter skjelettets miks: **fire seksjoner à 25 poeng, hver må
bestås**, negativ poenggiving, `estimatedMinutes` 240. Struktur: `tip` med
format, poeng, tidsbudsjett (~60 min per seksjon) og at settet trygt kan deles
over flere kvelder → `text` Forkunnskaper — sist du var her → fire
seksjons-`text`-blokker med nyskrevne oppgaver i svarformene F1–F4 →
`collapsible` løsningsforslag per seksjon som begrunner **hvert** alternativ,
med `tip` om delpoeng/bonus. Lange løsningsdeler har
«— naturlig pausepunkt —»-markører.

**Kald bank:** boka skal ha ÉN merket kald bank (8–10 oppgaver med uvante
kombinasjoner, UTEN hint, fasit = momentliste) — den legges i kap. 5.1 som en
egen `collapsible` «Kald bank — uten hint».

---

## §R REGNEKONTRAKTEN (bindende — lærdom fra verifiseringen 25. juli 2026)

Verifiseringen av bøkene som ble bygget samme dag fant «fire riktige desimaler»
der det var tre, og en feilstørrelse oppgitt tre størrelsesordener feil. IN1020
er full av tall. Derfor:

**R1. Etterregn HVERT talleksempel med `python3` før du skriver det.** Ikke
regn i hodet, ikke gjenbruk et tall fra skjelettet uten å sjekke det. Dette
gjelder tallkonvertering, to-er komplement, byte-addisjon med overflyt,
cache-sykler, CIDR/vertstall, subnett-/broadcast-adresser, overføringstid og
RGB-hex. Eksempel på arbeidsmåte:

```python
# Kap. 4.3: 250 MB over 50 Mbit/s
bit = 250 * 8            # 2000 Mbit
print(bit / 50)          # 40.0 s
# Kap. 4.2: /26 -> vertsbit 6
print(2**6 - 2)          # 62
```

**R2. Oppgi enhetene i hvert steg.** «byte × 8 = bit», «bit ÷ (bit/s) = s»,
«klokkesykler». Sensorkravet er eksplisitt: regn med enheter. Et svar uten
enhet er halvferdig.

**R3. MB/Mbit-konvensjonen skal deklareres én gang og holdes.** Boka regner
**1 MB = 8 Mbit** (desimalt: 1 MB = 10⁶ byte, 1 Mbit/s = 10⁶ bit/s), slik
eksamensoppgavene gjør. Bruk ALDRI 2²⁰-varianten uten å si det — og ikke bland
de to i samme kapittel. Sier en oppgave «MiB», forklar forskjellen på stedet.

**R4. Alle tall i en oppgave skal gå opp.** Velg tall som gir hele sekunder,
hele sykler og hele adresser. Går det ikke opp, oppgi antall desimaler
eksplisitt og skriv «≈». Skriv aldri «fire desimaler» om et tall med tre.

**R5. Adresseregning skrives binært på den relevante oktetten.** Vis oktetten
som 8 bit i en kodeblokk, med maskebiten under, slik at leseren ser AND-en/
OR-en. Ikke bare oppgi svaret.

**R6. Sporetabeller for LMC settes som markdown-tabell** med kolonnene
programteller · instruksjon · akkumulator · endrede minneceller · utskrift, én
rad per utført instruksjon. **Spor programmet manuelt, rad for rad, før du
skriver fasiten** — og kontroller sporet med en liten Python-simulator i
scratchpad når programmet er lengre enn ti instruksjoner. Simulatoren er et
kontrollverktøy, ikke bokinnhold.

**R7. Boolske påstander sjekkes over hele sannhetstabellen.** Påstår du at to
uttrykk er ekvivalente, gå gjennom alle 2ⁿ kombinasjoner (`itertools.product`)
før du skriver det. En «ekvivalent form» som ikke er ekvivalent i én rad, er en
feil i en bok der leseren straffes for gale avkrysninger.

**R8. Ingen kode i denne boka skal utgi seg for å være kjørt** med mindre den
er kjørt. LMC-programmer er ikke Python og kjøres ikke — de spores (R6). Skriver
du likevel et Python-snutt (f.eks. for å illustrere hex-konvertering), skal
utskriften være FAKTISK kjørt output limt inn, merket «**Utskrift:**».

---

## §F FLERVALGSKONTRAKTEN (fagets viktigste stilregel)

Eksamen er utelukkende flervalg **med negativ poenggiving**: gale avkrysninger
trekker poeng (men aldri under 0 på én enkelt oppgave). Det gir tre bindende
føringer for alt du skriver:

**F1. Begrunn hvorfor hvert gale alternativ er galt.** Dette er den viktigste
føringen i hele boka. Hvert `example` med flervalg, hver `exercise`-`solution`
og hver quiz-`explanation` sier **både** hvorfor det riktige er riktig **og**
hvorfor hver distraktor er gal. Å bekrefte fasiten alene er kontraktsbrudd.

**F2. Presisjon slår gjetting — men ikke lær bort passivitet.** Boka sier
eksplisitt: kryss av det du kan begrunne; la stå åpent ved reell tvil. «Aldri
under 0 på én oppgave» betyr at et feilkryss ikke kan spise poeng fra en annen
oppgave. Ikke skriv at man «alltid skal gjette» eller «aldri skal gjette» —
skriv regelen som den er.

**F3. Flere svar kan være riktige samtidig.** Mange oppgaver er «velg ett
*eller flere*». Løsningsforslagene markerer *alle* riktige og begrunner hver.
Skriver du en oppgave i F1-form, la minst noen av dem ha to riktige svar — det
er den reelle formen.

**F4. Distraktorer skal være ekte feller, aldri tullesvar**, og en distraktor
gjengir ALDRI bokas egne presiseringer som «galt» svar. Nære distraktorer
forklares eksplisitt i fasiten.

**Svarformene** (fra skjelettets §3) skrives ut i klarspråk ved første bruk per
kapittel:

| Kode | Svarform | Klarspråk ved første bruk |
|---|---|---|
| **F1** | Velg ett eller flere | «velg ett *eller flere* alternativer — flere kan være riktige samtidig» |
| **F2** | Sant/usant-matrise | «sant/usant-matrise: én rad per påstand, du krysser sant eller usant for hver» |
| **F3** | Dra-og-slipp | «dra-og-slipp: koble hvert element til riktig kategori» |
| **F4** | Nedtrekksmeny | «nedtrekksmeny: velg ett alternativ per delspørsmål» |

I en bok kan ikke leseren dra noe. **Skriv F3-oppgaver som koblingsoppgaver:**
nummerert liste med elementer + bokstavmerket liste med kategorier, og fasiten
som «1→B, 2→A, 3→C». **Skriv F2-oppgaver som en markdown-tabell** med kolonnen
«sant/usant» tom, og fasiten som utfylt tabell med begrunnelse per rad.

---

## Leserkrav (ufravikelig — full ordlyd i README «Leserkrav»; SKAL i førsteutkastet)

- **Kun eksamensrelevant stoff**; «bør kjenne til» sist og merket (gjelder
  særlig filformater i kap. 1.7, aksessmodeller/svitsjing i kap. 4.6 og
  skadevare i kap. 3.7).
- **Korte avsnitt** (2–4 setninger), aktiv «du»-form, konkret norsk knagg før
  formalismen. Godt, flytende norsk; ALDRI telegramstil.
- **Meningsfulle oppgaver:** hver oppgave er synlig eksamensforankret.
  Sjanger- og formmetadata skrives som en LEDENDE parentes i `task` som
  `extractGenreTag` kan trekke ut til en chip, f.eks.
  `(Eksamensnivå, sjanger J — subnetting, svarform F4.)`, ALDRI midt i
  brødteksten. Ikke gjenta `difficulty` i teksten («(krevende)» skrives ikke i
  `task` — feltet vises i oppgavehodet).
- **Læringsløkke Teori → Eksempel → Oppgave** med `exercise`-blokker INLINE.
- **Ingen usett forkunnskap** (se løkke-kontrakten øverst).
- **Deloppgaver på egen linje, fet merking:** a), b), c) i `task`/`solution`
  HVER på egen linje — `…\n\n**a)** …\n**b)** …`. ALDRI bak hverandre i løpende
  tekst; ikke bruk `subTasks`.
- **Nybegynner-inngang / ingen uforklart sjargong (UFRAVIKELIG).** Boka skal
  forstås av en som aldri har hatt faget:
  - **Sjangerkodene A–K** skrives ut i klarspråk ved FØRSTE bruk i HVERT
    kapittel: «sjanger C — LMC-assembly, altså å spore hva et lite
    maskinnært program gjør».
  - **Svarformkodene F1–F4** glosses ved FØRSTE bruk PER KAPITTEL (tabellen i
    §F).
  - **Feilkodene #1–#12** glosses ved FØRSTE bruk PER KAPITTEL: «(felle #2 —
    glemt byte→bit-omregning)».
  - **Eksamens-metaspråk** forklares før bruk: «Inspera» (UiOs digitale
    eksamenssystem), «negativ poenggiving», «seksjon», «delpoeng»,
    «bonuspoeng», «sensorveiledning», «hjelpemiddelfri».
  - **Fagtermer** forklares ved første bruk, ALDRI kaldt: «akkumulator»,
    «programteller», «opkode», «mnemonic», «nibble», «oktett», «vertsbit»,
    «broadcast», «hash», «salt», «uavviselighet», «kjernemodus»,
    «behandlingsansvarlig».
  - Ingen kald kode i `competenceGoals` eller i aller første tekstboks.
  - Kap. 0.1 har en **«Slik leser du denne boka»-orienteringsboks** (type
    `text` eller `tip`, ALDRI `definition` — det ville endret
    flashcard-kvoten) med: vurderingsformen (bestått/ikke bestått, fire
    seksjoner à 25 poeng som hver må bestås), kompakt liste over svarformene
    F1–F4, kompakt liste over sjangrene A–K, kompakt liste over feilkodene
    #1–#12 med at de har et samlet register, og setningen om at hvert begrep
    forklares der det brukes.
- **Del 0-pakken (kap. 0.1):**
  - **«Lite tid?»-boks** (`tip`) med hurtigrute 3–5 dager + ukeplan summert fra
    `estimatedMinutes`. **Bokas sum er 2 755 min ≈ 46 timer** (2 290 min på de
    32 kapitlene + 465 min på de fire prøvekapitlene — etterregnet 25. juli
    2026). Boksen sier at anslagene er LESEtid, og at den som skriver
    mellomregninger for hånd bør regne ca. ×1,5.
  - **Kildenote** for frekvens-empirien (§ «Sannferdig kildenote» — ordrett
    eller trofast omskrevet).
  - **Prosedyre-/sjangerkort på ÉN side** — kortet SELV (sjanger → én linjes
    oppskrift → typisk seksjon → vanligste felle), ikke en lenkeliste.
  - **Deltidsrute** 10–12 uker (~4–5 t/uke) med de tre øvingseksamenene fordelt
    på tre kvelder, aldri stablet til slutt.
  - **«lese mye, skrive lite»-boks** — og for dette faget den motsatte
    advarselen i tillegg: **du må regne teknikkene for hånd, uten kalkulator**,
    fordi eksamensformen etter gjeldende emnebeskrivelse er hjelpemiddelfri.
  - **Formel- og notasjonsminimum** (`collapsible` «Det du må kunne uten
    oppslag»): direkte binær↔oktal/hex, to-er komplement-vekten, LMC-tabellen,
    portsymbolene, cache-formelen, `2^n − 2`, AND/OR-regelen, overføringstid,
    sikkerhetsmålene, de to nøkkelretningene.
- **Klikkbare kap-referanser:** «kap. X.Y» i forkunnskaper og fasiter =
  markdown-lenke `[kap. X.Y](/bok/in1020/in1020-X-Y)`; død «se kapittel»-tekst
  er FORBUDT (aldri lenker i `title`-felt). Lenk kun til filer som finnes på
  disk når du skriver — byggeleder legger inn resten ved wiring.
- **Karakter-realisme, tilpasset et bestått/ikke bestått-fag:** faget har
  ingen bokstavkarakter, så karaktersjargong («A-besvarelse», «C-stoff») skal
  IKKE brukes. Del 0 sier eksplisitt at målet er å bestå alle fire seksjoner,
  ikke å ha alt riktig, og at det er normalt å la enkelte alternativer stå
  åpne. Grep «Prioritet: perfekt» skal gi 0 treff — skjelettets
  «Prioritet: perfekt» er en *prioritetsklasse* (perfekt/kunne/kjenne = nivå
  1/2/3) og skrives i boka som «høyeste prioritet — dette må sitte».
  Modellbesvarelser merkes ærlig, og boka skal ha minst én **«bestått på
  marginen»**-besvarelse: en kandidat som treffer de garanterte regnepoengene,
  bommer på to distraktorer og likevel er innenfor i alle fire seksjoner — med
  margnotat om hva som var godt nok og hva som var én bom fra å velte
  seksjonen.
- **Selvdiagnose:** avkryssbar sjekkliste (☐) etter hver prøvefasit.
- **Lett innstegsoppgave** (difficulty `lett`, ren gjengivelse) tidlig i
  teorikapitler der første oppgave ellers er full eksamenssjanger.
- **Hverdagsanker + verdens-caser:** abstrakte kjernetemaer åpner med et
  konkret anker før apparatet (en filnedlasting, et hjemmenett, et
  bank-ID-innlogg, en strømmetjeneste). Innpakningene er virkelige situasjoner,
  aldri «en medstudent skriver …»-metaeksempler.
- **Øktmerking:** kapitler med `estimatedMinutes` > 45 (1.2, 1.4, 1.5, 1.6,
  2.2, 2.3, 2.4, 2.5, 2.7, 3.3, 3.4, 3.5, 3.7, 4.1, 4.2, 4.4, 4.5, 5.2–5.4)
  har tidsanslag per løkke («## Løkke 2 — … (~20 min)») eller
  «— naturlig pausepunkt —»-markører.
- **Hint + difficulty-spredning:** alle `exercise` har utfylte `hints` (første
  hint = formelen/prosedyrens første grep, ALDRI konklusjonen). Unntak: den
  merkede kalde banken i kap. 5.1. Boka har flere `vanskelig`-oppgaver.
- **Fasitmønster-variasjon:** ALLE ensartede fasitlister varierer. Statiske
  flervalg i prøve-collapsibles har STOKKEDE fasit-bokstaver (aldri «alle a»);
  quizfilene beholder `options[0]`-invarianten fordi runtime stokker. I
  sant/usant-matriser skal svarene blande sant og usant (aldri «alle usant»);
  i koblingsoppgaver skal koblingen ikke være 1→A, 2→B, 3→C.
- **Meta-fasit forbudt:** ingen «en A-besvarelse ville her ha …». Skriv
  drøftelsen/begrunnelsen ut.
- **Frekvenstall = telte belegg:** hver «N av M»-påstand skal stemme EKSAKT med
  belegget. **Nevneren i denne boka er 6** (H2017, H2018, H2019, H2020, H2022,
  H2023 — arkivet har ingen dokumenter fra 2021). «100 %» = «6 av 6 årganger».
  Tell før du skriver; ikke oppfinn nye prosenter.
- **Juridisk:** innholdet fremstiller seg ALDRI som offisielt eller
  UiO-tilknyttet, og lover aldri eksamensutfall.

### Sannferdig kildenote (UFRAVIKELIG — produkteier)

Kildenoten i Del 0 og all omtale av grunnlaget nevner KUN kildetyper som
faktisk finnes i fagets arkiv, jf. `EKSAMENSANALYSE.md` §8. Bruk denne
formuleringen (eller en trofast omskrivning):

> Frekvenstallene i denne boka er telt i UiO-arkivet for IN1020, som dekker
> **seks årganger: H2017, H2018, H2019, H2020, H2022 og H2023**. Nevneren er
> derfor 6 — «100 %» betyr «temaet har minst én egen oppgave i alle seks
> årgangene». For H2017, H2018, H2019, H2020 og H2022 finnes oppgavesettet
> (bokmål og engelsk) med offisiell fasit. For **H2023 finnes en publisert
> sensorveiledning** i tre deler, med poenggiving og begrunnelse per oppgave;
> selve oppgavesettet fra det året ligger ikke i arkivet, så H2023 er talt fra
> sensorveiledningen. H2019 har i tillegg faglærernes «Kommentarer til
> eksamen», som oppgir strykgrensen 44 av 100 poeng og strykprosenten 7,1 % for
> det året. Arkivet har ingen dokumenter fra 2021. H2020 var
> korona-hjemmeeksamen (2 timer, bestått/ikke bestått) — den er talt med, men
> er ikke representativ for dagens firetimers form. Alle oppgaver og
> modellbesvarelser i boka er nyskrevet av Skolesaga. Et nytt sett kan endre
> bildet.

Presist språkbruk, fire ting:

1. **Sensorveiledning finnes for H2023 — og bare der.** Skriv derfor
   «sensorveiledningen (H2023)» i ENTALL, eller «fasitene og
   sensorveiledningen». **Aldri «sensorveiledningene» i flertall**, og aldri
   «sensorveiledningene fra alle årene». Grep-sjekkes.
2. For de øvrige årene heter dokumentene **oppgavesett og offisiell fasit**
   (H2019 dessuten «Kommentarer til eksamen» fra faglærerne).
3. **Modellbesvarelser i boka er NYSKREVNE** av Skolesaga. De omtales aldri som
   ekte studentbesvarelser og aldri som hentet fra fasit.
4. Ingen andre kildetyper nevnes (ingen «eksamensstatistikk» utover
   strykprosenten H2019, ingen «sensorpanel», ingen «karakterfordeling») med
   mindre de står i §8.

---

## Fagspesifikk stil (ufravikelig for IN1020 — fra skjelettets §1)

### Eksamensform (gjengis korrekt overalt)

| Felt | Verdi |
|---|---|
| Form | Digital skoleeksamen i Inspera, **4 timer**, teller 100 % |
| Karakter | **Bestått / ikke bestått** (ingen bokstavkarakter) |
| Struktur | **Fire faste seksjoner à 25 poeng** (fra H2022): digital representasjon → maskinvare → sikkerhet → nettverk |
| Bestått-krav | **Hver seksjon må bestås for seg** — en tom seksjon velter hele eksamen |
| Oppgaveform | **Utelukkende flervalg** (F1–F4) med **negativ poenggiving**; aldri under 0 poeng på én enkelt oppgave |
| Delpoeng | Delvis uttelling er vanlig; maskinvaredelen kan gi **bonuspoeng** for full pott og **minus** per feil |
| Adgang | Obligatoriske øvinger må være godkjent samme semester |
| Hjelpemidler | **Uavklart — se under.** Boka trener for INGEN hjelpemidler |

**Hjelpemiddel-avviket skal gjengis presist, og bare i kap. 0.1:** de arkiverte
settene 2017–2023 oppgir «alle trykte og skrevne hjelpemidler + en enkel
kalkulator», mens UiOs gjeldende emnebeskrivelse oppgir «ingen hjelpemidler».
Boka bygges for **ingen hjelpemidler** — alle teknikker skal sitte i hodet — og
kap. 0.1 sier eksplisitt at studenten må sjekke hva som gjelder for sitt eget
semester. **NB: bruk ALDRI den literale markøren `(verifiser)` i kapittelfilene**
— `sjekk-bok.py` feiler på den. Skriv usikkerheten ut i klartekst i stedet.

**Korona-caveaten skal stå i kap. 0.1:** H2020 var en totimers
hjemme-/prøveeksamen og er ikke representativ. Boka bygges mot den gjeldende
firetimers formen (H2022/H2023 er de to ferskeste representative årgangene).

**Fire-seksjoner-regelen styrer hele boka:** Del 1–4 er like viktige og skal
alle ha solid dekning. Innenfor hver del styrer frekvensen omfanget, men ingen
del kuttes under fullverdig seksjonsdekning. Skriv aldri at en seksjon kan
nedprioriteres.

### Pensum-avgrensning (skal håndteres likt i hele boka)

Følgende er tatt ut av eller nedtonet i gjeldende pensum og skal **IKKE
drilles**: **Karnaugh-diagram (K-map), multiplekser og dekoder** (eksplisitt
plassert i «Ikke del av pensum» i H2022), samt flip-flop-/låsekretsdetaljer,
Moores lov, **OSI-7-lagsmodellen**, detaljert ARP-tabellteori og private
IP-adresseklasser.

Regel: hvert treff på `Karnaugh`, `K-map`, `multiplekser`, `dekoder`,
`flip-flop`, `Moores lov`, `OSI` skal stå i **samme setning** som «ikke
pensum», «utenfor pensum» eller «nedtonet». Kontroll:

```bash
grep -o -i ".\{0,120\}\(karnaugh\|k-map\|multiplekser\|dekoder\|flip-flop\|moores lov\|OSI\).\{0,120\}" \
  src/lib/data/chapters/in1020-*.json \
  | grep -v -i "ikke pensum\|utenfor pensum\|nedtonet\|ikke del av pensum"
```

→ skal gi 0 linjer. Nevn dem kun i kap. 0.1 (avgrensningen), kap. 2.2
(K-map/multiplekser/dekoder) og kap. 4.1 (OSI).

### §N2 Notasjonsstandard (emnets konvensjoner er fasit)

| Område | Notasjon som SKAL brukes |
|---|---|
| Tallsystemer | Basesubskript: `1101₂`, `774₈`, `0x33` (evt. `33₁₆`), `42₁₀` |
| Gruppering | 3 bit per oktalsiffer, 4 bit per heksadesimalsiffer (nibble) |
| To-er komplement | 8 bit; fortegnsbit = bit 7; med fortegn = −2⁷·b₇ + Σ 2ⁱ·bᵢ |
| LMC | Mnemonics INP · OUT · OTC · LDA · STA · ADD · SUB · BRA · BRZ · BRP · HLT · DAT, og 3-sifrede opkoder (1xx ADD, 2xx SUB, 3xx STA, 5xx LDA, 6xx BRA, 7xx BRZ, 8xx BRP, 901 INP, 902 OUT, 922 OTC, 000 HLT) |
| Boolsk | `A′` (evt. `Ā`) for NOT, `A·B`/`AB` for AND, `A+B` for OR, `⊕` for XOR |
| Nettverk | CIDR `/26`, punktnotasjon `192.168.10.70`, nettmaske `255.255.255.192`, `2^n − 2` |
| Sikkerhet | Målene skrives ut (konfidensialitet, integritet, tilgjengelighet, sporbarhet, uavviselighet, autentisitet, personvern); «CIA» glosses ved første bruk |

Engelsk fagterm i parentes ved første forekomst der den er innarbeidet
(«nibble», «broadcast», «hash»). Norsk bokmål ellers.

---

## Sjangerkatalog A–K (fra skjelettets §3 — gjengis i kap. 0.1)

| Kode | Innholdssjanger | Seksjon | Frekvens (av 6 årganger) |
|---|---|---|---|
| **A** | Tallsystem-konvertering | 1 | 6/6 = 100 % |
| **B** | To-er komplement og byte-tolkning | 1 | 6/6 = 100 % |
| **C** | LMC-assembly og maskinkode | 1 | 6/6 = 100 % |
| **D** | Logiske porter og kretsanalyse | 2 | porter 6/6 = 100 %, kretsanalyse 5/6 = 83 % |
| **E** | Cache-beregning | 2 | 4/6 = 67 %, voksende |
| **F** | Arkitektur-fakta og abstraksjonsnivå | 2 | fakta 6/6 = 100 %, abstraksjonsnivå 2/6 = 33 %, ny |
| **G** | Sikkerhetsmål/-tiltak og trusselmodellering | 3 | 6/6 = 100 % |
| **H** | Kryptering og digital signatur | 3 | 6/6 = 100 % |
| **I** | Personvern/GDPR og skadevare | 3 | GDPR 4/6 = 67 %, skadevare 3/6 = 50 % |
| **J** | Nettverk (subnetting, lag/protokoller, tjenester, overføringstid) | 4 | subnetting/lag/tjenester 6/6 = 100 %, overføringstid 5/6 = 83 % |
| **K** | Operativsystemer | 4 | 1/6, ny gjenganger |

Tilleggstall som også er telt: autentisering/tilgangskontroll 5/6 = 83 %,
aksessmodeller og svitsjing 4/6 = 67 %, filformater/ASCII 3/6 = 50 % (voksende).

**Bruk kun disse tallene.** Skriv dem som «6 av 6 årganger (100 %)» første gang
i et kapittel, deretter gjerne bare prosenten.

---

## Feilkatalogen #1–#12 (fra EKSAMENSANALYSE §5)

Kodene glosses ved første bruk PER KAPITTEL. Kap. 0.1 lister dem alle og sier
at de har et samlet register.

| # | Fellen | Forebygges i |
|---|---|---|
| **#1** | Blande sikkerhets*mål* og sikkerhets*tiltak* | kap. 3.1 |
| **#2** | Glemme byte→bit-omregningen (×8) i overføringstid | kap. 4.3, 4.4 |
| **#3** | Glemme `− 2` i vertstellingen (`2^n − 2`, ikke `2^n`) | kap. 4.2, 4.4 |
| **#4** | Tro at digital signatur gir konfidensialitet | kap. 3.4 |
| **#5** | Snu sender-/mottakernøklene i asymmetrisk krypto | kap. 3.3, 3.4 |
| **#6** | Regne tallkonvertering «via desimal» når direkte er raskere | kap. 1.1, 1.2 |
| **#7** | Overse selvmodifiserende LMC-kode | kap. 1.5, 1.6 |
| **#8** | Bare oppgi den positive tolkningen av en byte | kap. 1.3 |
| **#9** | Krysse av hash/sjekksum for konfidensialitet | kap. 3.1, 3.4 |
| **#10** | Bruke gammelt pensum (K-map, OSI, flip-flop, Moores lov) | kap. 0.1, 2.2, 4.1 |
| **#11** | De faste «alltid usanne» arkitektur-distraktorene | kap. 2.4, 2.7 |
| **#12** | Tro at et lukket/internt system er «uten risiko» | kap. 3.2 |

De fem «alltid usanne» arkitektur-distraktorene under #11, ordrett som de skal
gjengis: teknologiutviklingen gir *færre* transistorer (usant — de blir flere og
mindre); klokkesignalet er lagret i RAM (usant); et register er bygd av RAM
(usant); ALU-en ligger utenfor CPU-en (usant); en 64-bits ALU krever 65 stk.
1-bits ALU-er (usant — det er 64).

---

## Forbudt-termer (grep-sjekkes — skal gi 0 treff)

Kjør ved ferdigmelding (`sjekk-bok.py` tar regexen som argument 2; den hopper
over `in1020-0-1`, som er avgrensnings-/metakapitlet):

```bash
python3 scripts/hoyskolebok/sjekk-bok.py in1020 \
  "Prioritet: perfekt|en A-besvarelse ville|ville ha drøftet|sensorveiledningene|A-besvarelse|C-besvarelse|Output:"
```

- **`Prioritet: perfekt`** — skjelettets prioritetsklasse skrives i boka som
  «høyeste prioritet — dette må sitte».
- **`A-besvarelse` / `C-besvarelse`** — faget har bestått/ikke bestått, ikke
  bokstavkarakter. Bruk «bestått på marginen» / «trygt bestått».
- **`sensorveiledningene`** (flertall) — det finnes ÉN, fra H2023.
- **meta-fasit** — «en A-besvarelse ville», «ville ha drøftet».
- **`Output:`** — utskrift merkes «**Utskrift:**».

Utover regexen: pensum-avgrensnings-grepen i §N2 skal gi 0 linjer, og den
literale markøren `(verifiser)` skal ikke forekomme (porten feiler på den).

---

## Kryssbok-lenker (verifisert 25. juli 2026 — alle filene finnes i `src/lib/data/chapters/`)

Lenkeform `[tittel](/bok/<courseId>/<id>)`. Titlene under er de faktiske
kapitteltitlene og skal brukes ordrett. Lenk ALDRI til en fil som ikke finnes
(`sjekk-bok.py` fanger døde lenker).

| Brukes i | courseId | id | Tittel | Rolle |
|---|---|---|---|---|
| 0.1, 1.1, 1.3 | `im-vg1` | `im-vg1-1-6` | Tallsystemer og datarepresentasjon | Mykeste inngang til binær/hex for den som aldri har sett det |
| 0.1, 2.4 | `im-vg1` | `im-vg1-1-1` | Datamaskinen og dens komponenter | Maskinvarekomponentene i oversikt |
| 2.1 | `elektro-data-vg1` | `elektro-data-vg1-15` | Digitalteknikk - logiske porter og sannhetstabeller | Portene og sannhetstabellene på VGS-nivå |
| 2.2 | `elektro-data-vg1` | `elektro-data-vg1-2-3` | Boolsk algebra | De boolske identitetene i rolig tempo |
| 2.2 | `elektro-data-vg1` | `elektro-data-vg1-2-4` | Kombinatorisk logikk | Kretser satt sammen av porter |
| 4.1 | `im-vg1` | `im-vg1-6-2` | Internettprotokoller og kommunikasjon | Protokollene før lagmodellen |
| 4.1, 4.5 | `im-vg1` | `im-vg1-3-1` | Hvordan fungerer nettet? | Hverdagsanker for nettverk |
| 4.2 | `elektro-data-vg1` | `elektro-data-vg1-4-3` | IP-adressering og subnetting | Subnetting med flere gjennomregnede eksempler |
| 3.3, 3.4 | `it-1` | `it-1-7-5` | Kryptering og autentisering | Symmetrisk/asymmetrisk krypto på VGS-nivå |
| 3.1, 3.6 | `im-vg1` | `im-vg1-6-4` | Informasjonssikkerhet og tiltak | Sikkerhetstiltakene i oversikt |
| 4.6 | `it-2` | `it-2-4-5` | Nettverkskommunikasjon | Klient-tjener og kommunikasjonsmodeller |

**Ikke lenk** til `elektro-data-vg1-16` (flip-flops og tellere) eller
`elektro-data-vg1-4-2` (OSI-modellen og TCP/IP) — begge underviser stoff som er
utenfor eller nedtonet i IN1020s pensum, og en lenke dit motvirker
avgrensningen.

Interne lenker: `[kap. X.Y](/bok/in1020/in1020-X-Y)`. Lenker til kapitler som
ennå ikke er skrevet, legges inn først når fila finnes på disk — koordineres av
byggeleder ved wiring.

---

## Quiz-kvoten

`src/lib/data/quiz-staging/<kapittel-id>.quiz.json`:

```json
[{ "question": "…", "options": ["riktig", "distraktor", "distraktor", "distraktor"], "explanation": "…" }]
```

Nøyaktig **4 alternativer**, `options[0]` **ALLTID** riktig (runtime stokker
rekkefølgen). Ingen duplikate alternativer.

**Kalibrering (skjelettets dokumenterte avvik):** eksamen ER flervalg, så
quizbanken er **direkte eksamenstrening**, ikke bare kunnskapskontroll. To
konsekvenser:

1. Reelle «velg ett *eller flere*»- og sant/usant-matrise-oppgaver **splittes
   til enkeltstående ett-riktig-svar-spørsmål** (ett per utsagn/celle), fordi
   plattformen har ett riktig svar per quiz-item. Mengdetreningen i de ekte
   flervalgsformene skjer i `exercise`-blokkene.
2. **Hver `explanation` begrunner hvorfor distraktorene er gale**, ikke bare
   hvorfor fasiten stemmer (§F1). 2–4 setninger.

**LENGDE-TELL (skjerpet 15. juli 2026, produkteier).** Fasiten skal IKKE kunne
gjettes på form:

- Alle fire alternativer skal ha **jevn lengde og samme presisjonsgrad**.
  `options[0]` skal være unikt lengst i **under 30 %** av spørsmålene — og
  unikt kortest i under 30 %. En student som velger «det lengste» skal treffe
  ~25 %, ikke 77 %.
- Skriv distraktorene like fyldige og plausible som fasiten (ikke korte
  avfeininger); trim heller fasiten.
- Er alternativene tall (konverteringer, sykler, vertstall, sekunder), skal
  alle fire ha samme format og omtrent samme størrelsesorden — og hver av dem
  skal svare til en konkret regnefeil (glemt `− 2`, glemt ×8, feil
  gruppestørrelse, byttet treff/bom).
- Kontroll før ferdigmelding:
  `node scripts/hoyskolebok/quiz-lengdesjekk.mjs` (etter wiring) og manuell
  telling underveis.

### Kvotetabell (AUTORITATIV — fra skjelettets §5 summeringskontroll)

Verifisert 25. juli 2026: alle deltotaler og totalene summerer.

| Del | Kapitler | Quiz | Flashcards | Prøver | Minutter |
|---|---|---|---|---|---|
| 0 | 0.1 | 16 | 14 | 0 (metadel) | 35 |
| 1 | 1.1–1.7 | 158 | 138 | 4 (115 min) | 395 |
| 2 | 2.1–2.7 | 154 | 128 | 4 (115 min) | 400 |
| 3 | 3.1–3.7 | 150 | 146 | 4 (115 min) | 365 |
| 4 | 4.1–4.6 | 130 | 118 | 4 (120 min) | 335 |
| 5 | 5.1–5.4 | 89 | 12 | 0 (3 øvingseksamener) | 760 |
| **Sum** | **32 kap. + 4 prøvekap.** | **697 ✓ (≥500)** | **556 ✓ (≥500)** | **16 + 3 ØE** | **2 755 min ≈ 46 t** |

Per kapittel (quiz · flashcards) — **minimum, aldri under; overskyting er lov**:

| Kap. | Q · F | Kap. | Q · F | Kap. | Q · F |
|---|---|---|---|---|---|
| 0.1 | 16 · 14 | 2.3 | 26 · 10 | 3.6 | 18 · 20 |
| 1.1 | 22 · 24 | 2.4 | 24 · 28 | 3.7 | 20 · 24 |
| 1.2 | 26 · 12 | 2.5 | 20 · 20 | 4.1 | 24 · 26 |
| 1.3 | 22 · 22 | 2.6 | 16 · 16 | 4.2 | 22 · 22 |
| 1.4 | 22 · 26 | 2.7 | 24 · 10 | 4.3 | 18 · 16 |
| 1.5 | 20 · 20 | 3.1 | 22 · 26 | 4.4 | 26 · 10 |
| 1.6 | 26 · 10 | 3.2 | 20 · 20 | 4.5 | 22 · 26 |
| 1.7 | 20 · 24 | 3.3 | 22 · 22 | 4.6 | 18 · 18 |
| 2.1 | 22 · 24 | 3.4 | 22 · 24 | 5.1 | 14 · 12 |
| 2.2 | 22 · 20 | 3.5 | 26 · 10 | 5.2–5.4 | 25 · 0 hver |

**Bindende total: quiz 697 · flashcards 556.** Flashcards telles som toppnivå
`definition`-blokker med `title`.

---

## Opphavsrett (ufravikelig)

ALLE oppgaver, tall, kretser, programmer, adresser og innpakninger er
**NYSKREVNE** — egne verdier og egne kontekster. Instruksjonssettet,
tallverdiene, standardnotasjonen og fagbegrepene er allmenn faglig kunnskap og
fritt tilgjengelige, men **ingen oppgavetekster, fasiter eller
sensorformuleringer fra reelle sett gjengis**, verken ordrett eller nær
parafrasert. Pensum refereres (begrep/verk), aldri siteres i lengde. Sjangrene
fra skjelettet er malen, aldri originaloppgavene.

---

## Kvalitetskrav før ferdigmelding (per agent)

1. `python3 -c "import json;json.load(open('fil'))"` på HVER fil du har skrevet
   (kapittel + quiz-staging).
2. **Kvotetelling** mot kvotetabellen: toppnivå `definition`-blokker med title
   = flashcard-kvoten; antall quiz-spørsmål = quiz-kvoten. Aldri under.
3. **Regnekontrakten §R:** hvert talleksempel etterregnet med `python3`, hver
   sporetabell sport rad for rad, hver ekvivalenspåstand sjekket over hele
   sannhetstabellen.
4. **Flervalgskontrakten §F:** hvert løsningsforslag og hver quiz-explanation
   begrunner ALLE alternativer, ikke bare fasiten.
5. **Læringsløkke:** `content[]` veksler teori→eksempel→oppgave med `exercise`
   inline — ikke all teori topp / alle oppgaver bunn.
6. **Forkunnskapsdekning:** gå gjennom hver `exercise` og bekreft at den bare
   hviler på stoff introdusert tidligere i kapitlet eller i en referert
   forkunnskap.
7. **Nybegynner-inngang:** alle koder (A–K, F1–F4, #1–#12) og alle fagtermer
   forklart ved første bruk per kapittel; ingen kald kode i `competenceGoals`
   eller første tekstboks.
8. **Notasjons- og konstruksjonsliste** finnes i hvert teori-/drillkapittel,
   med den literale strengen «Symbol- og formelliste» i åpningslinjen (§N).
9. **Forkunnskaper-blokk** med overskriften `## Forkunnskaper — sist du var her`
   i hvert kapittel utenom Del 0.
10. **Ingen tom collapsible** (feltet heter `content` og skal ha blokker).
11. **Kap-referanser** i fasiter/forkunnskaper er markdown-lenker til
    eksisterende filer.
12. **Fasitmønster** sjekket i alle ensartede fasitlister — riktig svar
    varierer posisjon (aldri «alle a», aldri «alle usant»).
13. **Hints** utfylt på alle exercises (unntatt merket kald bank); første hint
    røper aldri konklusjonen.
14. **Frekvenstall** = telte belegg, nevner 6.
15. Grep: forbudt-term-regexen = 0 treff; pensum-avgrensnings-grepen = 0
    linjer; `(verifiser)` = 0 treff.
16. **Øktmerking** i kapitler > 45 min; prøvekapitler deklarerer «4 prøver à
    ~X min» + deling over flere kvelder.
17. **Figurløfter innfridd:** lover en oppgave en figur, finnes SVG-en (eller
    er bestilt i `FIGUR-BESTILLINGER.md` og løftet omformulert til noe kapitlet
    faktisk leverer).
18. Porter: `python3 scripts/hoyskolebok/status-bok.py in1020` ·
    `python3 scripts/hoyskolebok/sjekk-latex.py in1020` ·
    `python3 scripts/hoyskolebok/sjekk-skjelett.py in1020`.

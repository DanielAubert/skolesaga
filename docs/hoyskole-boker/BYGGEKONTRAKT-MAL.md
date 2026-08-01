# Byggekontrakt-mal (generisk) — instansieres per fag i fase 3

Når et fag skal bygges: kopier denne til `<emne>/BYGGEKONTRAKT.md`, erstatt
`<emne>`/`<EMNEKODE>` og fyll inn fagspesifikk stil-seksjon fra SKJELETTETS
identitetsseksjon (notasjonsregler, forbudt-termer, arketypesærtrekk).
Referanse-instansieringer: `econ1310/BYGGEKONTRAKT.md` (regnefag),
`jus1111/BYGGEKONTRAKT.md` (jus).

## Underoverskrifter — ALDRI byggespråk (nytt 1. august 2026)

Læringsløkke er **byggeplanens** ord for hvordan et kapittel settes sammen.
Det er ikke et ord leseren skal se. Likevel endte 3 048 overskrifter i 780
filer som «## Løkke 3 — Varians og standardavvik», og en student som blar
gjennom boka møtte en nummerert struktur ingen har forklart henne.

**Overskriften skal si hva avsnittet handler om, og ingenting annet:**

```
✗ ## Løkke 1 — Reformbølgen og hva den faktisk besto av (~14 min)
✓ ## Reformbølgen og hva den faktisk besto av (~14 min)

✗ ## Løkke 3: Eulers teorem
✓ ## Eulers teorem
```

Tidsanslaget `(~14 min)` skal stå — det er nyttig for leseren.

Samme regel gjelder alt annet internt stillas: **Bolk N**, **Blokk N**,
**Runde N**, **Sekvens N**, **Modul N**, **Iterasjon N**. Trenger du å vise
til et tidligere avsnitt, vis til det ved **navn**, ikke ved nummer — «da vi
så på arbeid–energi-setningen», ikke «i Løkke 2». Nummeret forsvinner i det
øyeblikket noen setter inn et avsnitt til.

⚠ **Fagord som ligner byggespråk skal stå.** I programmeringsfagene er
«løkke» et sentralt fagbegrep: `for-løkke`, `while-løkke`, «løkka kjører
til betingelsen er usann». `in1900` alene har 770 slike. Rydding i
overskrifter må derfor forankres på syntaks — `## Løkke <tall> — ` og
`## Løkke <tall>: ` — aldri på ordet alene. Jf. minnet «Forankret
erstatning»: søk-og-erstatt over kapitteldata har ødelagt innhold tre
ganger.

### Fire former forankringen må dekke — alle fire har sluppet gjennom

Ryddingen 1.–2. august gikk i fire runder fordi hver runde bare fant sin
egen form. Sjekk **alle fire** før du erklærer en bok ren:

| form | eksempel | hvorfor den slapp unna |
|---|---|---|
| tall i overskrift | `## Løkke 3 — Varians` | — (fanget først) |
| **liten forbokstav i prosa** | «Repeter løkke 2 og 3» | søket krevde stor L; 820 treff i 297 filer |
| **bokstav i stedet for tall** | `## Løkke B — Subsumsjonen` | mønsteret krevde siffer; 109 i jus1111 + econ1310 |
| **tabellkolonne uten tall** | `\| Løkke \| Innhold \| Tid \|` | ordet står alene, uten nummer etter |

Den siste er farligst i programmeringsbøkene: `in2010` hadde
kapitteloversikter med kolonnehodet `| Løkke |` rett over prosa om ytre
løkker i DFS — byggespråk og fagord på samme skjerm.

Kjør denne før ferdigmelding, og forvent **null** treff utenfor ekte
fagbruk:

```bash
grep -rnE '#{2,4}[[:space:]]*Løkke|[Ll]økke[[:space:]]+[0-9A-ZÆØÅ]|\| Løkke \|' \
  src/lib/data/chapters/
```

**Overskrift og kryssreferanse må ryddes i SAMME operasjon.** Stripper du
overskriftene først, blir «se løkke D» hengende og peker i tomme lufta —
og en referanse som peker på ingenting er verre enn byggespråket den
erstattet. Bygg et oppslagskart bokstav/tall → navn *før* du rører
overskriftene.

⚠ Ryddingen avdekket to referanser som pekte feil **allerede før** vi rørte
dem: `jus1111-1-3` viste til «løkke B» i et kapittel som hopper fra A til
C, og `fil1001-2-1` viste til et avsnitt om det Machianske svaret der
innholdet gjaldt Leibniz. Nummererte kryssreferanser råtner stille — det
er selve grunnen til at de skal være navn.

## Tiltale og deiksis — si aldri hvor leseren har vært (nytt 2. august 2026)

Forkunnskapsblokka oppsummerer **et annet kapittel**. Da kan den ikke si
«her». Husmalen gjorde det likevel, i 526 blokker over 524 filer:

```
✗ **Sist du var her, sto dette:** en eksamensoppgave har to ledd …
✓ **Dette sto der:** en eksamensoppgave har to ledd …
```

Verst i `inter1000-1-1`, som er det **første** kapitlet i sin fagsøyle og
tre linjer lenger nede skriver «Det bygger ikke på noen av de andre
søylene, og du kan lese det uten å ha vært innom historie, økonomi eller
folkerett». Leseren blir altså først fortalt at hun har vært her før, og
straks etter at hun ikke trenger å ha vært noe sted.

**Regelen:** en lærebok vet ikke hva leseren har gjort. Den vet hva som
står i sine egne kapitler. Skriv om innholdet, ikke om lesehistorikken:

| ✗ | ✓ |
|---|---|
| Sist du var her … | Dette sto der … / Kort oppfrisket … |
| Sist du var her (fra kap. 3.2): | Fra kap. 3.2: |
| Sist du var her lærte du at … | I det kapitlet lærte du at … |
| Som du husker fra … | I kap. X står … |
| Da vi gikk gjennom dette sist … | I gjennomgangen i kap. X … |

Samme regel rammer «som du sikkert husker», «du har jo allerede sett»,
«dette kan du fra før» — alt som gjør en påstand om leseren i stedet for
om stoffet. En student som hopper rett til kapittel 5.3 fordi det er det
hun skal ha eksamen i, skal ikke møte en bok som later som de har møttes.

`sjekk-bok.py` flagger dette rådgivende.

## BOKCONFIG `description` — HARDT FORMATKRAV (nytt 1. august 2026)

Kursforsiden parser dette feltet og splitter det i tre visuelle elementer:
en kort ingress, en «Bygget på …»-boks med lenke til kildegrunnlaget, og
emne-chips. Parseren i `src/app/[courseId]/page.tsx` krever nøyaktig dette
mønsteret:

```
<ingress> — kalibrert mot <kalibrering>: <tema>, <tema>, <tema> og <tema>
```

**Matcher ikke teksten, faller HELE beskrivelsen ut som én grå tekstblokk.**
Det skjedde med 25 av 26 høyskolebøker: STV1400 endte med en 1 734 tegns
setning som fylte halve skjermen og var praktisk talt uleselig.

| ledd | krav | eksempel |
|---|---|---|
| ingress | **maks ~90 tegn**, én setning, ingen temaliste | `Eksamensrettet lærebok for ECON1310 ved UiO` |
| kalibrering | hva boka er bygget på, uten «bygget på»-ord | `eksamenssettene 2015–2025` |
| temaer | **3–6 stykker**, komma- eller «og»-separert, hver 2–5 ord | `Keynes-modellen på tilvekstform, Phillips-kurven, IS-RR-PK og finanspolitikk` |

**Samlet lengde skal være under 250 tegn.** Er den over, har du skrevet
innholdsfortegnelse i stedet for beskrivelse.

Regler som følger av dette:

- **Ikke ramse opp pensum.** Beskrivelsen er en salgslinje, ikke et sammendrag.
  Velg de tre til seks temaene en student kjenner igjen emnet på.
- **Ikke legg eksamensform, vekting, karakterskala eller kildetall i temalista.**
  Kildetallene hører i `kildegrunnlag.ts`, som har sin egen side og lenkes
  automatisk fra boksen. Eksamensformen hører i kapittel 0.1.
- **Ingen semikolon, tankestrek eller kolon inne i leddene** — de bryter
  parseren. Bare det ene ` — ` og det ene `: ` som skiller leddene.
- Sannferdighetskravet gjelder fortsatt: kalibreringsleddet må stemme med
  `EKSAMENSANALYSE.md`. Men det skal stå kort («34 eksamenssett fra 2003 til
  2025»), ikke som en oppramsing av filtyper og forbehold.

## Filplassering
Ett JSON-dokument per kapittel: `src/lib/data/chapters/<kapittel-id>.json`.
IKKE rør `_registry.json`, `_all.json`, `textbook-courses*.ts`, `quiz-data*.ts`
— wiring gjøres sentralt (fase 5). Generer JSON via python `json.dump`.

## Kapittel-JSON (toppnivå)
`{ id, courseId: '<emne>', chapterNumber: '<del>.<nr>' (fra skjelettet),
title, description, estimatedMinutes, competenceGoals: [2–4 «kunne …»],
content: [blokker], exercises: [] }`

## Blokktyper (eksakte felt — referanse: econ1310-2-1.json)
- `text`: `{id, type, content}` (markdown + LaTeX `$...$`/`$$...$$`, `\\` i JSON)
- `definition`: `{id, type, title, content}` — **title OBLIGATORISK**
  (flashcards genereres KUN fra toppnivå definition-blokker med title)
- `theorem`: `{id, type, title, content}`
- `example`: `{id, type, title, problem, solution}` (solution = A-besvarelse)
- `tip` / `warning`: `{id, type, title, content}`
- `exercise`: `{id, type, exercise: {id, number, type: 'classic', difficulty:
  'lett'|'middels'|'vanskelig', task, solution, hints: []}}` (+subTasks ved
  behov). ALDRI solutionVideo/allowsUpload/allowsCanvasDrawing/answer.
- `collapsible`: `{id, type, title, buttonText, content: [blokker]}`
Blokk-id-er: `<kapittel-id>-<løpenavn>`, unike i kapitlet.

## Obligatorisk kapittelstruktur
Per arketypens kapittel-DNA (DNA-regnefag/DNA-jus/DNA-drofting) og skjelettets
per-kapittel-kontrakt. Alltid, i denne rekkefølgen først i kapitlet:
1. `tip` **Eksamensvinkel** (frekvens, vekt, sjangre — fra skjelettet)
2. `text` **Forkunnskaper** (kapitler i boka + kryssbok-lenker
   `[tittel](/<courseId>/<chapterId>)` — KUN til kapitler som finnes i
   `src/lib/data/chapters/`; «kan leses uten forkunnskaper» hvis ingen)
Og SIST i kapitlet: `collapsible` **Symbol- og formelliste** (title «Symbol-
og formelliste», buttonText «Vis symboler og formler»): første linje
«Oppslagsverk — alt her forklares underveis i kapitlet.», deretter
markdown-tabell `| Symbol | Betydning |` + «**Formler i dette
delkapitlet:**» med display-LaTeX + tolkning. ALLE symboler/formler brukt i
delkapitlet — per delkapittel, ikke arv. Unntak kun for helt symbolfrie
kapitler. (Studentpanel: symbolvegg i døråpningen skremmer — listen er
oppslag, ikke inngang.) Collapsibles skal ALDRI være tomme — `content` er
feltnavnet og skal ha blokker (ikke `text`).
Og alltid: `warning` **Typiske feil** (fra skjelettet) + begrepsbank-
definisjoner til flashcard-kvoten (hver stor begrepsbank åpner med
standard-notisen «flashcard-/repetisjonsstoff — hopp trygt over ved
førstegangslesing; tidsanslaget gjelder kjernestoffet») + `collapsible`
repetisjon (teorikapitler).

## Leserkrav (ufravikelig — full ordlyd i README «Leserkrav»)
- Kun eksamensrelevant stoff; «kjenne til» sist og merket.
- Korte avsnitt (2–4 setninger), «du»-form, konkret norsk knagg før
  formalisme — presisjon vinner ved tvil.
- Hver oppgave synlig eksamensforankret («(Eksamenssjanger X — …)») eller
  åpenbart relevant.
- **Læringsløkke Teori → Eksempel → Oppgave:** `content[]` veksler teori
  (`text`/`definition`/`theorem`) → `example` → `exercise` i gjentatte små
  løkker gjennom delkapitlet, IKKE all teori øverst og alle oppgaver samlet
  nederst. `exercise`-blokkene plasseres INLINE i `content[]` rett etter
  eksempelet/teorien de hører til (plattformen renderer inline oppgaver).
- **Ingen usett forkunnskap:** ingen oppgave får kreve et begrep, en regel, en
  formel eller en metode som ikke er introdusert tidligere i kapitlet (t.o.m.
  eksempelet rett foran) eller i et tidligere kapittel referert i Forkunnskaper-
  blokken. Bygg oppgaveprogresjonen bit for bit.
- **Deloppgaver på egen linje, fet merking:** deloppgaver a), b), c) i `task`/
  `solution` skal HVER starte på egen linje med merket i fet — format
  `…\n\n**a)** …\n**b)** …`. ALDRI a) b) c) bak hverandre i løpende tekst.
  (Bruk ikke `subTasks`-feltet — det kobler inn egen fremdriftslogikk.)
- **Nybegynner-inngang / ingen uforklart sjargong:** HVER kode (sjanger-/
  oppgavekode, feilkode #N, karakterbokstav) og all karaktersjargong («C-stoff»/
  «A-markør») + insider-term forklares i klarspråk ved FØRSTE bruk; ingen kald
  kode i `competenceGoals`/læringsmål eller i aller første tekstboks. Del 0 skal
  ha en **«Slik leser du denne boka»-orienteringsboks (type `text`/`tip`, ALDRI
  `definition` — ville endret flashcard-kvoten)** med karakter-/vurderingsskala +
  kompakt kodeliste + at feil har et samlet register. Karaktersjargong som
  motsier eksamensformen (f.eks. «A-kandidat» ved bestått/ikke-bestått) unngås
  eller rammes inn.
- **Stokket flervalg i prøvetekster:** statiske flervalg i prøve-collapsibles
  har stokkede fasit-bokstaver (ALDRI «alle a»); prøve-tipen sier hvor
  flervalget bor (inline/quiz). Quiz-filene beholder options[0]-invarianten.
- **Del 0-pakken:** «Lite tid?»-boks (hurtigrute 3–5 dager + ukeplan fra
  summerte `estimatedMinutes`) + kildenote for frekvens-empirien (hvilke
  sett/veiledninger, årstall, forbehold — fra EKSAMENSANALYSE.md, aldri
  oppdiktet) + prosedyre-/sjangerkort på ÉN side (kortet selv, ikke lenkeliste).
- **Klikkbare kap-referanser:** «kap. X.Y» i forkunnskaper og fasiter =
  markdown-lenke `[kap. X.Y](/<emne>/<emne>-X-Y)`; død «se kapittel»-tekst
  er FORBUDT (aldri lenker i title-felt).
- **Karakter-realisme:** «C er en god og vanlig karakter» eksplisitt i Del 0;
  «Prioritet: perfekt» FORBUDT (skriv «høyeste prioritet»); «Gapet til A» =
  oppgraderingsmeny; modellbesvarelser ærlig merket (en «C-besvarelse» ER C) +
  minst én autentisk B-/midtnivå-besvarelse; bestått/ikke-bestått-fag: én
  «bestått-på-marginen»-besvarelse.
- **Selvdiagnose:** avkryssbar sjekkliste (☐) etter hver prøvefasit; lett
  innstegsoppgave (difficulty lett, ren gjengivelse) tidlig i teorikapitler
  der første oppgave ellers er full eksamenssjanger.
- **Hverdagsanker + verdens-caser:** abstrakte kjernetemaer åpner med
  hverdagsanker før apparatet; eksempler er verdens-caser, ikke «en medstudent
  skriver …»-metaeksempler.
- **Tidsbudsjett-konsistens:** avvik mellom deklarert oppgavetid og sum
  deltider forklares (skrivetid vs. total). «Lite tid?»-boksen sier at
  anslagene er LESEtid (×1,5 ved håndskriving).
- **Hint + difficulty-spredning (bølge 4+5):** alle exercises har utfylte
  `hints` (første = hjemmel/formel/første grep, ALDRI konklusjonen); boka har
  noen «(krevende)»-merkede oppgaver + én merket kald bank UTEN hint (fasit =
  momentliste) i eksamenstreningsdelen.
- **Fasitmønster-variasjon (bølge 4):** gjelder ALLE ensartede fasitlister —
  aldri «alle a», aldri «alle felle»/«alle riktig». Distraktorer gjengir ALDRI
  bokas egne nyanser som «galt» svar (ev. nær-sanne distraktorer forklares
  eksplisitt i fasit-kommentaren).
- **Meta-fasit forbudt (bølge 4):** «en A-besvarelse ville ha drøftet …»
  erstattes av faktisk utskrevet drøftelse. Minst én modellbesvarelse lander
  SKARPT (ikke alle på samme kompromissform).
- **Signalbokser ETTER oppgaven (bølge 4):** varsel om hva en drilloppgave
  tester står etter oppgaven/som collapsible hint, aldri foran.
- **Frekvenstall = telte belegg (bølge 4):** «N av M sett» skal stemme eksakt
  med belegg-listen som følger. **Sannferdige kildepåstander (UFRAVIKELIG, fra
  produkteier):** kildenoten, beskrivelsen og all omtale av grunnlaget nevner
  KUN kildetyper som faktisk finnes i fagets arkiv — skriv aldri
  «sensorveiledninger» hvis arkivet bare har oppgavesett/løsningsforslag;
  modellbesvarelser omtales som nyskrevne, aldri som ekte studentbesvarelser. Faglige påstander verifiseres FØR skriving
  (arketype-DNA: regnefag → numerisk parametersjekk av fortegnspåstander;
  jus → Lovdata + dommer med 1–2 setninger faktum).
- **Øktmerking + prøvedeling + feilkode-gloss (bølge 5):** kapitler > 45 min
  har tidsanslag per løkke/pausepunkt-markører; lange modellbesvarelser har
  «— naturlig pausepunkt —»; feilkoder glosses ved første bruk PER KAPITTEL;
  tunge kapitler har «Sist du var her»-forkunnskapsblokk som VISER
  nøkkelformler/kjerneregler; Del 0 har deltidsrute (10–12 uker) og «lese mye,
  skrive lite»-boks; boka har sitt samlede oppslagskort (jus: hjemmelskart;
  drøfting: «hvem eier hva»-kort; regnefag: formel-minimum).

## Prøvekapitler
Id `<emne>-<del>-prove`, chapterNumber `<del>.P`, tittel «Prøver til del
<del>: <deltittel>»: `tip` (dekning + tidsbruk) + `text` Forkunnskaper + fire
`collapsible` («Prøve 1»–«Prøve 4», buttonText «Vis prøve N») med oppgaver og
full fasit (jus/drøfting: «må-punkter / pluss-punkter / feller»-struktur).
Tip/description deklarerer «N prøver à ~X min» + «kan trygt deles over flere
kvelder — én prøve per økt» (aldri bare totalsum). Flervalg i prøve-
collapsibles: stokkede fasit-bokstaver (aldri «alle a») og prøve-tipen sier
hvor flervalget bor; riktig/galt-/felleprøver blander reelle og feller (aldri
«alle felle»). Etter hver prøvefasit: avkryssbar selvdiagnose-sjekkliste (☐).
Kap-referanser i fasitene som markdown-lenker. Ingen quiz/begrepsbank.

## Quiz
`src/lib/data/quiz-staging/<kapittel-id>.quiz.json`:
`[{question, options: [4 stk — options[0] ALLTID riktig], explanation}]`.
Kvote per kapittel = skjelettets kvotesammendrag (AUTORITATIVT — aldri
overstyr). Distraktorer = reelle feller fra analysen.

## Opphavsrett (ufravikelig)
Alle oppgaver/case/faktum NYSKREVNE (egne tall, parter, kontekster) —
eksamenssjangrene er malen, aldri originaloppgavene. Pensum refereres,
aldri siteres i lengde. Referanser fag-agenten er usikker på merkes
`(verifiser)` og løses i fase 6 (jus: mot Lovdata).

## Fagspesifikk stil (FYLLES INN per fag fra skjelettets identitetsseksjon)
- Notasjonsstandard: …
- Forbudt-termer (grep-sjekkes): …
- Arketypesærtrekk (modellbesvarelser/figur-i-ord/R-kode/…): …

## Kvalitetskrav før ferdigmelding (per agent)
1. `python3 json.load` på hver fil; 2. kvotetelling mot skjelettet
(definitions + quiz); 3. fagets forbudt-termer-grep = 0; 4. kryssbok-lenker
peker på eksisterende filer; 5. **læringsløkke**: `content[]` veksler
teori→eksempel→oppgave i løkker med `exercise`-blokker inline (ikke all teori
topp / alle oppgaver bunn); 6. **forkunnskapsdekning**: gå gjennom hver
`exercise` og bekreft at den bare hviler på stoff introdusert tidligere i
kapitlet eller i en refererte forkunnskap — ingen usett begrep/regel/formel;
7. **nybegynner-inngang**: alle koder/karaktersjargong/insider-termer forklart ved
første bruk, ingen kald kode i competenceGoals/første tekstboks, og Del 0 har
«Slik leser du denne boka»-orienteringsboksen (type `text`/`tip`, ALDRI
`definition`) med skala + kodeliste + feilregister; 8. **prøve-flervalg**:
fasitmønsteret sjekket — riktig svar varierer posisjon (aldri «alle a»);
9. grep «Prioritet: perfekt» = 0; 10. **ingen tom collapsible** (feltet heter
`content` og skal ha blokker — aldri `text`-nøkkel eller tom array);
11. kap-referanser i fasiter/forkunnskaper er markdown-lenker til
eksisterende filer; 12. **Del 0-pakken** på plass («Lite tid?»-boks m/
lesetid-setningen, kildenote for frekvens-empiri, prosedyrekort, deltidsrute,
«lese mye, skrive lite»-boks) og begrepsbank-notisene står
først i hver stor bank; 13. **tidsbudsjett**: deklarert oppgavetid vs. sum
deltider forklart der de avviker; 14. **juridiske deklarasjoner**: innholdet
fremstiller seg ALDRI som offisielt/institusjons-tilknyttet og lover aldri
eksamensutfall (uavhengighets-/rådgivningsdeklarasjonene vises automatisk av
plattformen — se README «Juridiske deklarasjoner»; ved wiring: registrer i
institusjoner.ts og sjekk jus-/helse-heuristikken i hoyskole-disclaimer.tsx);
15. **fasitmønster** sjekket i ALLE ensartede fasitlister (flervalg,
riktig/galt, feller) — riktig svar varierer, aldri «alle a»/«alle felle»;
16. **hints** utfylt på alle exercises (unntatt merket kald bank), første hint
røper aldri konklusjonen; 17. **frekvenstall** = antall listede belegg (tell
hver «N av M»-påstand); 18. grep for meta-fasit («en A-besvarelse ville»,
«ville ha drøftet») = 0 — drøftelsene er utskrevet; 19. **øktmerking**:
kapitler > 45 min har løkke-tidsanslag/pausepunkter og prøvekapitler
deklarerer «N prøver à ~X min» + deling; 20. **feilkode-gloss** ved første
bruk per kapittel; 21. regnefag: alle fortegns-/entydighetspåstander
parametersjekket numerisk (jf. DNA-regnefag «Matematisk sannhetskontroll»);
jus: dommer har kort faktum ved første omtale.

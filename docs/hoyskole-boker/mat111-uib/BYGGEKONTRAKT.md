# Byggekontrakt — MAT111 Grunnkurs i matematikk I (UiB)

Instansiert fra `../BYGGEKONTRAKT-MAL.md` (regnefag) 22. juli 2026. Arketype:
**DNA-regnefag**. Autoritativ kilde for eksamensbelegg, kvoter og innhold er
`SKJELETT.md` (denne mappa) — les den NØYE for dine kapitler. Denne kontrakten
gjentar de ufravikelige plattform-/leserkravene og fyller den **fagspesifikke
stilseksjonen** for MAT111.

## Filplassering
Ett JSON-dokument per kapittel: `src/lib/data/chapters/mat111-uib-<del>-<nr>.json`.
IKKE rør `_registry.json`, `_all.json`, `textbook-courses*.ts`, `quiz-data*.ts`
— wiring gjøres sentralt (steg 2, `wire-bok.py`). Generer JSON via python
`json.dump` (LaTeX krever `\\` i JSON-strenger). Quiz til
`src/lib/data/quiz-staging/mat111-uib-<del>-<nr>.quiz.json`.

## Kapittel-JSON (toppnivå)
`{ id, courseId: 'mat111-uib', chapterNumber: '<del>.<nr>' (fra skjelettet),
title, description, estimatedMinutes, competenceGoals: [2–4 «kunne …» i klarspråk,
INGEN kald sjanger-/feilkode], content: [blokker], exercises: [] }`

## Blokktyper (eksakte felt — referanse: `src/lib/data/chapters/econ1310-2-1.json`)
- `text`: `{id, type, content}` (markdown + LaTeX `$...$`/`$$...$$`)
- `definition`: `{id, type, title, content}` — **title OBLIGATORISK** (flashcards
  genereres KUN fra toppnivå definition-blokker med title). Åpne med forklaringen
  i ORD; formelen kommer etter — aldri en ligning som første linje.
- `theorem`: `{id, type, title, content}`
- `example`: `{id, type, title, problem, solution}` (solution = A-besvarelse med full føring)
- `tip` / `warning`: `{id, type, title, content}`
- `exercise`: `{id, type, exercise: {id, number, type: 'classic', difficulty:
  'lett'|'middels'|'vanskelig', task, solution, hints: []}}`. ALDRI
  solutionVideo/allowsUpload/allowsCanvasDrawing/answer.
- `collapsible`: `{id, type, title, buttonText, content: [blokker]}` — ALDRI tom,
  feltnavnet er `content` med blokker (ikke `text`).
- `image` (kun ved SVG-figur): `{id, type, src:'/images/textbook/mat111-uib/<fil>.svg', alt, caption}`
Blokk-id-er: `<kapittel-id>-<løpenavn>`, unike i kapitlet.

## Obligatorisk kapittelstruktur (teorikapittel, i rekkefølge)
1. `tip` **Eksamensvinkel** (frekvens/vekt/sjangre — tallene fra SKJELETT, inkl.
   ærlighetsnotatene for Del 7).
2. `text` **Forkunnskaper** (kapitler i boka + kryssbok-lenker
   `[tittel](/<emne>/<id>)` — de eksakte lenkene står i skjelettets
   per-kapittel-DNA og peker på EKSISTERENDE r1/r2/s2/1t-kapitler; ikke dikt opp
   nye). Tunge kapitler med stor avstand til forkunnskapen: VIS de 2–3
   nøkkelformlene («Sist du var her»).
3. `text` **Motivasjon** (kort, 2–3 avsnitt).
4. `definition`/`theorem` i EMNETS notasjon → `text` utledning med «Intuisjon:»-linjer
   der eksamen krever aktiv utledning → `example` → `exercise` INLINE — i
   **læringsløkker** (teori → eksempel → oppgave, gjentatt per metode). IKKE all
   teori øverst og alle oppgaver nederst.
5. `warning` **Typiske feil** (fra skjelettet).
6. Stor stigende `exercise`-pulje kan samles til slutt som drill (2–3 lett, 2–4
   middels, 2–4 vanskelig). Alle med `solution` + utfylte `hints`.
7. `collapsible` **Repetisjonsoppgaver** (4–6 korte fra forkunnskapskapitlene).
8. SIST: `collapsible` **Symbol- og formelliste** (title «Symbol- og formelliste»,
   buttonText «Vis symboler og formler»): første linje «Oppslagsverk — alt her
   forklares underveis i kapitlet.», så `| Symbol | Betydning |`-tabell +
   «**Formler i dette delkapitlet:**» med display-LaTeX + tolkning. ALLE symboler/
   formler brukt i delkapitlet — ikke arv.

Drillkapitler: `tip` Eksamensvinkel → `text` Løsningsoppskrift (algoritme) →
`example` gjennomregnet eksamenscase med sensor-margnotater → 8–15 `exercise` på
eksamensnivå. Øvingseksamener: komplett sett, løsning i `collapsible` per
deloppgave som A-besvarelse + `tip` om tidsbudsjett/vekting.

## Prøvekapitler (`mat111-uib-<del>-prove`, chapterNumber `<del>.P`)
Tittel «Prøver til del <del>: <deltittel>»: `tip` (dekning + «4 prøver à ~X min,
kan trygt deles over flere kvelder — én prøve per økt») + `text` Forkunnskaper +
fire `collapsible` («Prøve 1»–«Prøve 4», buttonText «Vis prøve N») med oppgaver +
full fasit etter føringsstandarden. Etter hver prøvefasit: avkryssbar
selvdiagnose-sjekkliste (☐). Ber en prøveoppgave om figur → fasiten viser faktisk
`image`-SVG. Ingen quiz/begrepsbank. Prøvetidene står i skjelettets §4.

## Leserkrav (ufravikelig — full ordlyd i README «Leserkrav» og MAL §Leserkrav)
Læringsløkke teori→eksempel→oppgave inline; ingen usett forkunnskap; deloppgaver
`\n\n**a)** …` på egen linje (aldri `subTasks`); nybegynner-inngang (hver kode/
sjanger/karakterbokstav forklart ved første bruk, ingen kald kode i
competenceGoals/første boks); Del 0 «Slik leser du denne boka»-orienteringsboks
(`text`/`tip`, ALDRI `definition`) + «Lite tid?»-boks (hurtigrute + ukeplan fra
summerte estimatedMinutes) + kildenote for frekvens-empirien + prosedyre-/
sjangerkort på én side + deltidsrute + «lese mye, skrive lite»-boks + formel-
minimum-collapsible (regnefagets samlede oppslagskort); stokket flervalg i
prøver (aldri «alle a»); klikkbare `[kap. X.Y](/mat111-uib/mat111-uib-X-Y)`;
karakter-realisme («C er en god og vanlig karakter», ALDRI «Prioritet: perfekt» →
«høyeste prioritet»); modellbesvarelser ærlig merket + minst én autentisk
B-/midtnivå-besvarelse; avkryssbar selvdiagnose (☐); lett innstegsoppgave tidlig;
hverdagsanker + verdens-caser; tidsbudsjett-konsistens forklart; **INGEN
LENGDE-TELL** (fasit skal IKKE være lengste/mest detaljerte alternativ — jevn
lengde på alle fire; verifiser med `scripts/hoyskolebok/quiz-lengdesjekk.mjs`);
distraktorer gjengir aldri bokas egne nyanser som «galt»; alle exercises har
utfylte hints (første = formel/første grep, ALDRI konklusjonen); minst én kald
bank uten hint (fasit = momentliste) + noen «(krevende)»-merkede i
eksamenstreningsdelen; meta-fasit forbudt («en A-besvarelse ville …» → skriv
drøftelsen UT); signalbokser ETTER oppgaven; frekvenstall = telte belegg;
kapitler > 45 min har løkke-tidsanslag/pausepunkter; feilkoder glosses per
kapittel.

## Fagspesifikk stil — MAT111 (fra SKJELETT §1)
**Notasjonsstandard (grep-konsistent over ALLE mat111-uib-filer):**
- Polarform `$z = re^{i\theta} = r(\cos\theta + i\sin\theta)$` — ALDRI
  `\mathrm{cis}\,\theta`. Konjugat `$\bar z$`. Modulus `$|z|$`, med `$z\bar z=|z|^2$`.
- ε-δ-mal: `$\delta = \min\{1,\ \varepsilon/K\}$`; kvantorform full;
  R-ε-varianten `$R=R(\varepsilon)$` mot uendelig.
- Integrerende faktor `$\mu(x) = e^{\int p\,dx}$`; substitusjonsboks med `$u$`,
  `$du$` og NYE grenser; dokumentert `$u/v'$`-valg (LIATE) i delvis integrasjon.
- L'Hôpital: ubestemt form markeres `$[0/0]$` / `$[\infty/\infty]$` FØR hver bruk.
- Taylor `$P_n$` + Lagrange-restledd `$R_n(x)=\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$`;
  restledd brukt KVANTITATIVT (skranke → intervall → fortegn på feilen).
- Uegentlige integraler: eksplisitt `$\lim$`-notasjon («sett inn $\infty$»
  underkjennes).
- Differansekvotient `$f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}$` er ENESTE gyldige
  deriverbarhetsbevis i punkt-spørsmål.
- Teoremer navngis likt: skjæringssetningen (mellomverdisetningen),
  sekantsetningen (MVT), Rolles teorem, skviseteoremet (begrensetheten
  `$|\cos|\le1$` uttales), ekstremalverdisetningen (Max-Min), analysens
  fundamentalteorem, de Moivre, algebraens fundamentalteorem, kompletthetsprinsippet.
- All matematikk i `$...$`/`$$...$$`; ingen unicode-brøker.

**Åpen bok-føringsstandard i ALLE løsningsforslag (MAT111s viktigste regel):**
Der fasitsvaret står i permen, vises utledningen uansett — «slå opp»-snarveier
eller ubegrunnede fasitsvar er BYGGEFEIL. Hvert løsningsforslag = A-besvarelse:
mellomregning ledd for ledd, kort verbal begrunnelse, teoremnavn der argumentet
bæres, konstante løsninger nevnt og avvist i separable likninger, konklusjonssetning
med enhet i anvendte oppgaver, markert sluttsvar. Eksistens og entydighet føres
som TO atskilte steg. Alternative løsninger honoreres («Alternativt:»).

**Forbudt-termer (grep = 0):**
- `Prioritet: perfekt` (skriv «høyeste prioritet»).
- `sensorveiledning`/`sensorveiledninger` — arkivet har KUN oppgavesett +
  **løsningsforslag**. Kildeomtale nevner aldri sensorveiledninger. (Sensor-krav/
  -praksis kan omtales som «fasitpraksis»/«løsningsforslagenes krav».)
- meta-fasit: `en A-besvarelse ville`, `ville ha drøftet`.
- `\mathrm{cis}` / `\operatorname{cis}` (bruk `$re^{i\theta}$`).
- danske former (`æ` utenom navn/sitat), `kapittel 0\.`-rester, brukne ord.
- Flervariabelt stoff: `tangentplan`, `kritiske punkter i to variable`,
  `gradient`, `partiellderivert` — UTE av pensum siden ~2007, skal IKKE inn.

**Matematisk sannhetskontroll (UFRAVIKELIG):** hver fortegns-/entydighets-/
«alltid større/mindre enn»-påstand og hvert talleksempel/fasitsvar
ETTERREGNES numerisk (python3) FØR skriving. Newton over-/underestimat-påstander
krever fast krumningsfortegn på HELE intervallet mellom startpunkt og rot.
Restledds-/feilintervaller sjekkes numerisk. δ-valg verifiseres mot ε.

**Ærlighet om arkivet:** kalibrering = 2003–2020 (34 sett + fasit; H2020-fasit
bildebasert/mangler). Del 7 (uendelige rekker): 0 arkivforekomster etter 2005,
pensumpliktig i 2026 — Eksamensvinkel-blokkene SIER dette rett ut.

## Kvalitetskrav før ferdigmelding (per agent)
1. `json.load` på hver fil (gyldig JSON, LaTeX `\\`-escaped).
2. Kvotetelling mot SKJELETT §3 (definition-blokker + quiz) — minimum, aldri under.
3. Forbudt-termer-grep = 0 (lista over).
4. Kryssbok-lenker peker på eksisterende filer; kap-referanser er markdown-lenker.
5. Læringsløkke: content[] veksler teori→eksempel→oppgave inline.
6. Forkunnskapsdekning: ingen oppgave krever usett begrep/regel/formel/metode.
7. Nybegynner-inngang komplett; Del 0-pakken på plass.
8. Prøve-flervalg stokket (aldri «alle a»); ingen tom collapsible.
9. Hints utfylt (ingen konklusjonsrøping); fasitmønster varierer; ingen lengde-tell.
10. Matematisk sannhetskontroll utført på alle tall/fortegn/skranker.
11. `grep 'Prioritet: perfekt'` = 0; meta-fasit = 0.

## Opphavsrett (ufravikelig)
ALLE oppgaver/case NYSKREVNE (egne tall, funksjoner, kontekster) — skjelettets
mønstereksempler er selv omskrivninger og VARIERES videre, aldri kopieres ordrett.
Adams & Essex refereres, aldri siteres i lengde. Usikre referanser merkes
`(verifiser)` og løses i verifiseringsbølgen (steg 3).

# Byggekontrakt: FYS1100 Mekanikk og modellering (UiO) — teknisk kontrakt for kapittelforfattere

Denne kontrakten gjelder ALLE forfatter-agenter som bygger kapitler til
`fys1100`. Den definerer eksakt filformat, obligatorisk struktur, notasjon,
kildepåstander og kvalitetsporter. **Faglig innhold styres av `SKJELETT.md`**
(per-kapittel-DNA) — les ditt kapittels avsnitt der ordrett, pluss
`EKSAMENSANALYSE.md` når du trenger mer kontekst, og `../DNA-regnefag.md` for
arketypen.

Instansiert fra `../BYGGEKONTRAKT-MAL.md` 26. juli 2026. Mønstre for dybde og
form: `../in1020/BYGGEKONTRAKT.md` og `../econ1310/BYGGEKONTRAKT.md`.

FYS1100 er et **regnefag med et eget kodespor**. Fire søyler bærer hvert eneste
eksamenssett (7 av 7 sett, 100 %): numerisk Python med Euler–Cromer,
Newton + frilegemediagram + kraftmodeller, arbeid/energi/bevegelsesmengde med
bevaringsargumenter, og rotasjon/stive legemer. Kontrakten har derfor fem
fagspesifikke bindende deler:

| Del | Hva den styrer |
|---|---|
| **§N Notasjonskontrakten** | vektor vs. skalar, symbolvalg, enheter, siffer, typografi for kode |
| **§A Formelark-kontrakten** | hva som må kunne *brukes/utledes* vs. *slås opp* — boka lærer aldri bort pugg |
| **§S Sensorkontrakten** | alt begrunnes, 0–5 p per deloppgave, følgefeil, flere metoder |
| **§P Python-kontrakten** | Euler–Cromer, `abs(v)*v`, indeksdisiplin, metodebegrunnelse, kodetypografi |
| **§G Figurkontrakten** | frilegemediagram er selvstendig poenggivende ⇒ ekte SVG, aldri «figur i ord» alene |

---

## §0 PLATTFORMSTØTTE — hva du kan stole på

1. **Markdown + LaTeX rendres** av `LatexRenderer`: `$…$` inline, `$$…$$`
   display, tabeller, fete/kursiverte former, lister, markdown-lenker.
2. **Kodeblokker rendres.** Trippel-backtick med språktagg (```` ```python ````,
   ```` ```text ````) settes som `<pre><code>` med bevart innrykk, og inline-kode
   i `` `backticks` `` er beskyttet mot både matte- og markdown-transformene
   (fikset på main 25. juli 2026). **All Python i denne boka SKAL stå i
   ```` ```python ````-blokker** — da forsvinner ikke innrykket i løkkene, og
   `v[i]*dt` blir ikke kursivert av markdown-stjerner.
3. **`$`-fella (ufravikelig).** Et dollartegn som IKKE er matte MÅ escapes som
   `\$` i JSON-strengen. To uescapede `$` på samme linje er partall, og
   rendreren parrer dem og setter alt imellom som formel. Risikoen i dette faget
   er reell: valuta i Fermi-oppgaver («\$20 per lass»), `$`-tegn i prosa om
   priser, og Python-strenger. `$` inne i backticks eller i en ```` ``` ````-blokk
   er trygt.
4. **Bilder:** `alt` rendres rått som HTML-attributt — **ingen LaTeX, ingen
   markdown, ingen backticks der**. `caption` rendres i inline-modus: `$…$`
   virker, men ikke markdown og ikke backticks.
5. **Unicode-tegn rendres fint i vanlig prosa** (`→`, `≈`, `≤`, `≥`, `·`, `Δ`,
   `θ`, `ω`), men **fysikkstørrelser skal alltid i LaTeX** (§N). Bruk unicode kun
   i overskrifter, tabellceller og korte prosanevn der en full formel er
   overkill.
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
  fysisk størrelse, ÉN kraftmodell eller ÉN metode → `text`-utledning med
  «Intuisjon:»-linje etter hvert steg → `example` som gjennomfører metoden med
  tall, enheter og (der sensor forventer det) figur → `exercise` som krever
  nøyaktig den metoden. Deretter neste bit.
- **Ingen usett forkunnskap.** Ingen oppgave får kreve en formel, en kraftmodell,
  en bevaringslov, en kodekonstruksjon eller en matematisk teknikk som ikke er
  innført tidligere i kapitlet (t.o.m. eksempelet rett foran) eller i et kapittel
  som står i Forkunnskaper-blokken. Konkrete feller i FYS1100:
  - be om rotasjonsenergi $\tfrac12 I\omega^2$ i et energiregnskap før kap. 6.1
    har innført $I$;
  - be om `abs(v)*v` i kode før kap. 7.3 har forklart hvorfor absoluttverdien
    trengs;
  - bruke rullebetingelsen $v=\omega R$ i kap. 5 (den innføres i 6.2);
  - be om linearisering av $\sin\theta$ før kap. 1.2 (Taylor);
  - bruke ordet «egentid» i en oppgave i kap. 10.2 uten at 10.1 er referert;
  - be om et grensetilfelle-argument før kap. 3.3 har innført metoden.
- **Unntak:** prøvekapitlene (`fys1100-<del>-prove`) og øvingseksamenene
  (kap. 11.2–11.4) følger sin egen arketype — komplett sett først, løsninger i
  collapsibles.
- Kvotene og innholdskontraktene i skjelettet er UENDRET — løkka styrer kun
  REKKEFØLGEN.

---

## Filplassering

Ett JSON-dokument per kapittel: `src/lib/data/chapters/<kapittel-id>.json`
(f.eks. `fys1100-6-2.json`). Quiz til
`src/lib/data/quiz-staging/<kapittel-id>.quiz.json`.

IKKE rør `_registry.json`, `_all.json`, `textbook-courses*.ts`, `quiz-data*.ts`,
`institusjoner.ts` eller `kildegrunnlag.ts` — wiring gjøres sentralt av
byggeleder med `scripts/hoyskolebok/wire-bok.py`.

**Generer JSON via python `json.dump`** (garantert gyldig escaping av `\` og `"`).
Skriv aldri JSON for hånd i denne boka — den er full av LaTeX.

Boka består av **43 kapittelfiler**:

- **33 innholdskapitler**: 1 eksamenskart (0.1) + 28 tema-/drillkapitler
  (1.1–10.2) + 4 eksamenstreningskapitler (11.1–11.4).
- **10 prøvekapitler**: `fys1100-1-prove` … `fys1100-10-prove` (Del 11 har ingen
  eget prøvekapittel — der er 11.2–11.4 vurderingskapitlene).

Pluss **33 quiz-staging-filer** (én per innholdskapittel; prøvekapitler har
ingen quiz).

---

## Kapittel-JSON (toppnivå)

```json
{
  "id": "fys1100-6-2",
  "courseId": "fys1100",
  "chapterNumber": "6.2",
  "title": "…(fra skjelettet, ordrett)…",
  "description": "…(setningen fra skjelettet)…",
  "estimatedMinutes": 70,
  "competenceGoals": ["kunne bruke rullebetingelsen til å koble fart og vinkelfart", "…"],
  "content": [ "…blokker…" ],
  "exercises": []
}
```

`chapterNumber` = skjelettets `number` (`<del>.<nr>`; prøvekapitler `<del>.P`).
**ALDRI lineær nummerering** («18») — alltid del-basert («6.2»). `id`, `title`,
`description` og `estimatedMinutes` tas ORDRETT fra skjelettets kapittelavsnitt.

`competenceGoals`: 2–4 «kunne …»-formuleringer avledet av kapitlets
innholdskontrakt. **Ingen kald kode her** — ingen bar «sjanger F», «#15»,
ingen karakterbokstav, ingen «O3». Skriv «kunne sette opp og løse
bevegelseslikningen for en harmonisk oscillator», ikke «kunne sjanger G».
Målene er Skolesagas egne formuleringer, aldri kopi av UiOs offisielle
læringsutbytte.

`exercises` er ALLTID tom liste — oppgaver ligger som `exercise`-blokker inline
i `content`.

---

## Blokktyper (eksakte felt — strukturreferanse: `src/lib/data/chapters/econ1310-2-1.json`)

- `text`: `{ "id", "type": "text", "content": "markdown + LaTeX + kodeblokker" }`
- `definition`: `{ "id", "type": "definition", "title": "Begrepet", "content": "…" }`
  — **title er OBLIGATORISK** (flashcard-kilden). I dette faget kalibreres
  `definition` som **begrep i ORD → symbol/formel → gyldighetsbetingelsen**.
  Aldri en formel som første linje (vegrere hopper over blokken, og dermed
  flashcard-stoffet). Eksempel på riktig form: «Impulsbevaring: når summen av de
  ytre kreftene på et system er null i en retning, er systemets samlede
  bevegelsesmengde i den retningen den samme før og etter. Formelt:
  $\sum \mathbf{p}_{\text{før}} = \sum \mathbf{p}_{\text{etter}}$. Betingelsen er
  det som gir poeng — den skal skrives ut hver gang loven brukes.»
- `theorem`: `{ "id", "type": "theorem", "title": "…", "content": "…" }`
  — brukes for (a) **lovene** (N1–N3, spinnsatsen, arbeids–energi-teoremet,
  parallellakseteoremet), (b) **de utledbare standardresultatene**
  (flytid/rekkevidde for skrått kast, $v_{\text{topp}}=\sqrt{Rg}$,
  $v=\sqrt{GM/r}$, $v_u=\sqrt{2GM/R}$, $v(t)=v_T(1-e^{-gt/v_T})$), og
  (c) **metodene** (grensetilfelle-verifisering, linearisering om likevekt,
  karakteristisk likning).
- `example`: `{ "id", "type": "example", "title": "Eksempel N: …", "problem": "…", "solution": "…" }`
  — `solution` skrives som en A-besvarelse etter §S: begrunnelse først, deretter
  regning med enheter i hvert steg, retning på alle vektorstørrelser, og der
  sensor forventer figur: en faktisk `image`-blokk (§G).
- `tip` / `warning`: `{ "id", "type", "title", "content" }`
- `exercise`: `{ "id", "type": "exercise", "exercise": { "id", "number", "type": "classic", "difficulty": "lett"|"middels"|"vanskelig", "task", "solution", "hints": [] } }`
  — ALDRI `solutionVideo` / `allowsUpload` / `allowsCanvasDrawing` / `answer`.
  Ikke bruk `subTasks`-feltet (deloppgaver skrives inline, se Leserkrav).
- `image`: `{ "id", "type": "image", "src": "/images/textbook/fys1100/<navn>.svg", "alt": "…", "caption": "…" }`
  — se §G. Figuren MÅ finnes på disk og være lastet opp til Storage.
- `collapsible`: `{ "id", "type": "collapsible", "title", "buttonText": "Vis …", "content": [ "…blokker…" ] }`
  — symbol- og formelliste, prøver, repetisjon, kodevarianter. ALDRI tom:
  feltnavnet er `content` og skal ha blokker (en `text`-nøkkel eller tom array
  rendrer som tom boks).

Blokk-id-er: `<kapittel-id>-<løpenavn>`, f.eks. `fys1100-6-2-def-3`,
`fys1100-6-2-oppg-5`, `fys1100-6-2-fig-1`. Unike innen kapitlet (porten sjekker).

---

## Obligatorisk kapittelstruktur

### Teorikapitler

Alltid, i denne rekkefølgen først i kapitlet:

1. `tip` **Eksamensvinkel** — frekvens, vekt og sjangre med tallene fra
   skjelettets Eksamensbelegg-felt for NETTOPP dette kapitlet (og ingen andre
   tall). Skriv sjangerkoden ut i klarspråk ved første bruk i kapitlet:
   «sjanger F — rotasjonsoppgaven, altså et stivt legeme som roterer, ruller
   eller får et støt». Skriv frekvensen som telt belegg: «7 av 7 sett (100 %)».
2. `text` **Forkunnskaper — sist du var her** (overskriften skal stå ordrett slik,
   som `## Forkunnskaper — sist du var her` først i blokken). Blokken skal
   (i) lenke kapitlene i boka som dette bygger på — markdown-lenker
   `[kap. X.Y](/fys1100/fys1100-X-Y)`, (ii) **VISE de 2–3 nøkkelformlene
   ferdig oppfrisket** (selve formelen med symbolforklaring, ikke bare navnet) —
   dette er ufravikelig i Del 6–11, der tidsavstanden til forkunnskapen er stor,
   og (iii) lenke kryssbok der forkunnskapen ikke dekkes i boka (tabellen under
   — KUN filer som finnes). Har kapitlet ingen forkunnskaper, sier blokken det
   og viser likevel begrepene leseren møter først.

Deretter DNA-løpet i læringsløkker: `text` hverdagsanker/motivasjon →
`definition`/`theorem` (flashcard-kilden — toppnivå med title!) →
`text` utledning med «Intuisjon:»-linje etter hvert steg → `example` med
gjennomregnet case → `exercise` inline som trener nøyaktig den biten → neste
bit. 2–4 eksempler per kapittel, det siste på eksamensnivå; 6–12 `exercise` i
kapitlet, stigende (lett → middels → vanskelig), de vanskeligste =
eksamenskloner av kapitlets sjangre. **Minst én kvalitativ J-oppgave per
teorikapittel** («forklar/begrunn/kritiser», modellsvar i 2–4 setninger) —
på tvers av boka skal 25–40 % av øvingene i teorikapitlene være kvalitative.

`warning` **Typiske feil** (fra feilkatalogen §5, med feilkoden glosset ved
første bruk i kapitlet) plasseres der den er mest relevant — ofte rett etter
metoden som utløser feilen. Minst én per kapittel (porten krever en `warning`).

Til slutt i kapitlet, i denne rekkefølgen:

- begrepsbank-`definition`-blokker opp til flashcard-kvoten. Hver stor
  begrepsbank åpner med standard-notisen: «Begrepsbanken er flashcard- og
  repetisjonsstoff — den gjentar det du nettopp har lest. Hopp trygt over ved
  førstegangslesing; tidsanslaget for kapitlet gjelder kjernestoffet.»
- `collapsible` **Symbol- og formelliste** (§N5).
- `collapsible` **Repetisjonsoppgaver** — 4–6 korte oppgaver fra kapitlene dette
  bygger på.

### Drillkapitler (3.4, 5.3, 6.4, 7.4 — og drilldelen av 2.2, 4.2, 11.1)

`tip` Eksamensvinkel → `text` Forkunnskaper — sist du var her →
`text`/`theorem` **Løsningsoppskrift** (nummerert algoritme, ordrett fra
skjelettets innholdskontrakt for kapitlet) → `example` **gjennomregnet
eksamenscase med sensor-margnotater** (hvor poengene sitter ved hvert steg:
FBD-symbolene, dekomponeringen, bevaringsbegrunnelsen, grensetilfellet,
retningen, enheten) → 10–15 `exercise` på eksamensnivå som roterer sjangerens
varianter, alle med `solution` + `hints`.

Drillkapitler har lav flashcard-kvote (8 i 3.4/5.3/6.4/7.4) — de er
treningsbanker, ikke begrepsbanker. Signalbokser som varsler hva en drilloppgave
tester, står ETTER oppgaven (som fasit-oppfølging eller collapsible hint), aldri
foran.

### Prøvekapitler (`fys1100-1-prove` … `fys1100-10-prove`)

Id `fys1100-<del>-prove`, `chapterNumber` `<del>.P`, tittel «Prøver til del
`<del>`: `<deltittel>`» (deltittelen fra skjelettets §2-tabell):

- `tip`: dekning + tidsbruk, deklarerer «4 prøver à ~X min» med minuttene fra
  skjelettets prøve-kvote-linje for delen, pluss «kan trygt deles over flere
  kvelder — én prøve per økt», og sier hvor flervalget bor (inline i prøven
  eller i den interaktive quizen). For delene med en **D-prøve i midtveisformat**
  (1.D–7.D, 9.D) sier tipen at prøven er midtveistrening.
- `text` **Forkunnskaper — sist du var her** (porten krever «Forkunnskaper» i
  alle kapitler utenom Del 0).
- Fire `collapsible` («Prøve 1»–«Prøve 4», buttonText «Vis prøve N») med
  nyskrevne oppgaver og **full fasit skrevet som A-besvarelse**: FBD der
  oppgaven ber om det (ekte SVG, §G), bevaringsbegrunnelse, retning og enhet på
  hvert tallsvar, grensetilfelle-verifisering der uttrykket inviterer til det,
  og kjørbar Euler–Cromer-kode der prøven har et kodeledd. Poengfordeling
  0–5 p per deloppgave angis i fasiten.
- **Statiske flervalg har STOKKEDE fasit-bokstaver** — aldri «alle a»; porten
  flagger mønsteret «1a · 2a · 3a».
- Etter hver prøvefasit: avkryssbar selvdiagnose-sjekkliste (☐), formulert
  fagkonkret: «☐ navnga du alle kreftene i frilegemediagrammet? ☐ skrev du ut
  HVORFOR bevaringsloven gjelder? ☐ har hvert tallsvar enhet og retning?
  ☐ sjekket du uttrykket i minst ett grensetilfelle?».
- Kap-referanser i fasitene som markdown-lenker.
- Ingen begrepsbank og ingen quizkvote for prøvekapitler.

Prøvekapitler regnes som vurderingskapitler i `sjekk-bok.py` og er derfor
unntatt kravene om «Typiske feil»-warning og symbolliste.

### Vurderingskapitlene i Del 11 (11.2 midtveissimulering, 11.3–11.4 øvingseksamener)

- **11.2 Midtveis-MCQ-simulering** (`estimatedMinutes` 180): `tip` med format
  (~20 rene flervalgsspørsmål, 3 timer, kalkulator + Rottmann), tidsbudsjett
  (~9 min per spørsmål), at midtveiseksamen teller **20 %** av karakteren
  (avsluttende 80 %) og hva midtveis dekker (Del 1–7 + 9 — aldri tunge
  analytiske ODE-løsninger, håndskrevet Python eller spesiell relativitet) →
  `text` Forkunnskaper → spørsmålene som `text`-blokker → `collapsible`
  løsningsforslag per spørsmål som begrunner både hvorfor riktig alternativ er
  riktig OG hvorfor hver av de vanligste distraktorene er gal.
- **11.3–11.4 Øvingseksamener** (`estimatedMinutes` 240): `tip` med format
  (fem flertrinnsoppgaver O1–O5, hver med 4–5 deloppgaver à 0–5 poeng, alle likt
  tellende, 4 timer, ~48 min per oppgave) og at settet trygt kan deles over
  flere kvelder → `text` Forkunnskaper → fem oppgave-`text`-blokker →
  `collapsible` løsningsforslag per oppgave, skrevet som A-besvarelse med
  FBD-figur, bevaringsbegrunnelse, retning/enhet, grensetilfelle-verifisering og
  **kjørbar Euler–Cromer-kode i O3** (11.3) / **O3 og O5** (11.4). Lange
  løsningsdeler har «— naturlig pausepunkt —»-markører.
- Begge øvingseksamener skal ha en ODE-oppgave som ender i en håndskrevet
  Euler–Cromer-deloppgave. 11.4 har i tillegg en «kritiser den feilaktige
  løsningen»-deloppgave og ≥30 % kvalitative deloppgaver.

**Kald bank:** boka skal ha ÉN merket kald bank (8–10 oppgaver med uvante
kombinasjoner, UTEN hint, fasit = momentliste) — den legges i **kap. 11.1** som
en egen `collapsible` «Kald bank — uten hint».

---

## §N NOTASJONSKONTRAKTEN (bindende — fra skjelettets «Kritisk notasjonsregel»)

Eksamenssettenes notasjon er fasit. Avvik koster poeng på ekte eksamen, og en
bok som er inkonsekvent lærer bort feil vane.

### §N1 Vektor vs. skalar (−2p-regelen)

**Vektorstørrelser skrives ALLTID med fet vektormarkering i LaTeX** når
størrelsen opptrer som vektor:

$$\mathbf{F},\ \mathbf{v},\ \mathbf{a},\ \mathbf{r},\ \mathbf{p},\ \mathbf{J},\ \boldsymbol{\tau},\ \mathbf{L},\ \boldsymbol{\omega},\ \boldsymbol{\alpha},\ \mathbf{g}$$

**Skalarer skrives kursivt uten markering:** $m$, $M$, $t$, $W$, $K$, $U$, $E$,
$P$, $I$, $k$, $D$, $\mu$, $\gamma$, $\theta$, $R$, $L$ (lengde), $N$
(normalkraftens tallverdi).

Regler som følger av dette:

- **Manglende retning på en vektorstørrelse koster −2p** på eksamen og skal
  ALDRI forekomme i et løsningsforslag i denne boka. Hvert tallsvar for fart,
  akselerasjon, kraft, bevegelsesmengde, kraftmoment og spinn oppgis med retning
  («$4{,}2\,\text{m/s}$ rettet nedover», «$0{,}85\,\text{N}\cdot\text{m}$ mot
  klokka, altså ut av papirplanet»).
- Skriver du tallverdien (lengden) av en vektor, bruk enten $|\mathbf{v}|$ eller
  det kursive symbolet $v$ — og si hvilken konvensjon du bruker første gang i
  kapitlet.
- **Skalarer får ALDRI vektormarkering.** Masse, energi, arbeid og
  treghetsmoment med vektorpil er en faglig feil porten skal fange.
- Komponenter skrives $v_x$, $v_y$, $F_{D,x}$, $\tau_z$, $L_z$ — alltid med
  akse i subskript, aldri fete.

### §N2 Bindende symbolvalg (kollisjoner løst)

| Størrelse | Symbol | Merknad |
|---|---|---|
| Kraft (generell) | $\mathbf{F}$, sum $\sum\mathbf{F}$ | |
| Tyngdekraft | $m\mathbf{g}$ eller $\mathbf{F}_g$ | **ALDRI $\mathbf{G}$** — $G$ er gravitasjonskonstanten (skjelettet bruker $\mathbf{G}=m\mathbf{g}$ ett sted; den formen er forbudt her, fordi Del 9 trenger $G$) |
| Gravitasjonskonstanten | $G$ | skalar, kursiv |
| Normalkraft | $\mathbf{N}$ / tallverdi $N$ | |
| Friksjonskraft | $\mathbf{f}_s$ (statisk), $\mathbf{f}_d$ (dynamisk) | friksjonstall alltid med subskript: $\mu_s$, $\mu_d$ — aldri bart $\mu$ |
| Snordrag | $T$ | i SR-kapitlene brukes $T$ ikke om annet enn snordrag; egentid skrives $\Delta t_0$ eller $\tau$ (si hvilken i kapitlet) |
| Fjærkonstant | $k$ | fjærkraft $\mathbf{F} = -k(x-x_0)$ |
| Dragkoeffisienter | $k_v$ (lineær), $D$ (kvadratisk) | lineær $F_D=-k_v v$, kvadratisk $F_D = -D\lvert v\rvert v$ |
| Posisjon | $\mathbf{r}$, komponenter $x$, $y$ | avstand fra sentrum: $r$ |
| Baneradius | $R$ | loop, sirkelbane, rullende legeme; krumningsradius $\rho$ |
| Treghetsmoment | $I$ | akse alltid oppgitt: $I_{cm}$, $I_{\text{hengsel}}$ |
| Vinkler | $\theta$ (helning/utslag), $\alpha$ (dosert sving) | **$\boldsymbol{\alpha}$ er vinkelakselerasjon** — bruker du $\alpha$ om en vinkel, si det eksplisitt i kapitlet og bruk ikke vinkelakselerasjon i samme delkapittel uten å skille dem |
| Egenfrekvens | $\omega_0$ | $\omega$ alene = vinkelfart |
| Terminalfart | $v_T$ | |
| Lorentz-faktor | $\gamma$, $\beta = v/c$ | |
| Egentid / egenlengde | $\Delta t_0$ / $l_0$ | den observerte: $\Delta t$ / $l$ |

Kollisjoner du MÅ håndtere eksplisitt der de oppstår: $G$ (gravitasjonskonstant)
vs. tyngde, $L$ (spinn, vektor) vs. $L$ (lengde, skalar — bruk $\ell$ for
pendellengde i kapitler der spinn også opptrer), $T$ (snordrag) vs. $T$
(periode — skriv perioden som $T_p$ der begge finnes), $r$ (avstand) vs.
$\mathbf{r}$ (posisjonsvektor). Nevn kollisjonen i kapitlets Symbol- og
formelliste.

### §N3 Enheter og gjeldende siffer

- **Hvert tallsvar har SI-enhet.** Enheter settes i LaTeX med `\text{}` og en
  tynn mellomrom foran: `$9{,}81\,\text{m/s}^2$`, `$0{,}45\,\text{kg}$`,
  `$12\,\text{N}\cdot\text{m}$`. Aldri kursiv enhet (`$m/s$` er «meter ganger
  sekund i andre potens invers» for en fysiker — det er feil).
- **Desimalkomma** skrives `9{,}81` inne i matte (klammene gir riktig avstand i
  KaTeX). I prosa utenfor matte: vanlig komma.
- **2–3 gjeldende siffer** i alle tallsvar. Ikke skriv `4.166666666`. Mellomregning
  kan ha ett siffer mer.
- **Benevningskontroll som sluttsjekk** modelleres i minst ett eksempel per
  regnetungt kapittel: «venstre side har enhet $\text{m/s}^2$, høyre side
  $\text{N/kg} = \text{m/s}^2$ — det stemmer».
- Boka bruker $g = 9{,}81\,\text{m/s}^2$ gjennomgående, og sier det én gang i
  kap. 0.1. Bruker en oppgave $9{,}8$ eller $10$ for å få pene tall, står det i
  oppgaveteksten.

### §N4 Kodetypografi

- All Python i ```` ```python ````-blokker. Pseudokode/fragmenter som ikke skal
  kunne kjøres, i ```` ```text ````-blokker (da kontrolleres de ikke av
  kodeporten, men da er de heller ikke eksempelkode).
- Kodeelementer i løpende prosa i backticks: `` `v[i]` ``, `` `abs(v)*v` ``,
  `` `numpy` ``, `` `for i in range(N-1)` ``.
- Variabelnavn i koden **skal speile fysikksymbolet**: `v`, `x`, `y`, `vx`,
  `vy`, `omega`, `theta`, `dt`, `N`, `D`, `m`, `g`. Ikke `hastighet_liste`.
- Utskrift fra en kodeblokk med `print(` i et fasit-/teorifelt merkes
  «**Utskrift:**» og skal være FAKTISK kjørt output. Skriv aldri «Output:».

### §N5 Symbol- og formelliste (obligatorisk, per delkapittel)

`collapsible` SIST i kapitlet, med:

- `title`: `"Symbol- og formelliste"` (literalt — porten krever strengen)
- `buttonText`: `"Vis symboler og formler"`
- første linje i første `text`-blokk inne i collapsiblen, ORDRETT:
  «Oppslagsverk — alt her forklares underveis i kapitlet.»
- deretter markdown-tabell med **tre kolonner**:
  `| Symbol | Betydning | Enhet |` — ALLE symboler delkapitlet bruker, **per
  delkapittel, ikke arv fra tidligere kapitler**.
- deretter «**Formler i dette delkapitlet:**» med display-LaTeX og én linjes
  tolkning per formel, og — dette er fagets særkrav — **hver formel merket
  `[formelarket]`, `[Rottmann]` eller `[må kunne utledes]`** (§A).

Unntak kun for helt symbolfrie kapitler (finnes ikke i denne boka; kap. 1.1 har
$[L]$, $[M]$, $[T]$ og skal ha listen).

---

## §A FORMELARK-KONTRAKTEN (fagets viktigste stilregel)

Eksamen deler ut et **fagspesifikt formelark** (bakerst i settet, identisk
2023–2025) og tillater **Rottmann «Matematisk formelsamling»** + godkjent
kalkulator. **Boka skal derfor ALDRI fremstille formler eller konstanter som
puggestoff.** Den trener *valg, kombinasjon, utledning og bruk*.

**A1. Hver formel merkes med sin status** i Symbol- og formellisten:

| Merke | Betyr | Eksempler |
|---|---|---|
| `[formelarket]` | står på det utdelte arket — skal gjenkjennes og brukes, aldri pugges | $\sum\mathbf{F}=m\mathbf{a}=d\mathbf{p}/dt$; konstant-$a$-formlene; baneakselerasjonen $\mathbf{a}=\dot v\,\hat{\mathbf{u}}_T+(v^2/\rho)\hat{\mathbf{u}}_N$; Galilei-transformasjonen; fjærkraft og de to dragmodellene; $|\mathbf{f}_s|\le\mu_s N$; $W=\int\mathbf{F}\cdot d\mathbf{r}$, $K=\tfrac12 mv^2$, $U=mgy$, $U=\tfrac12k(x-x_0)^2$, $P=\mathbf{F}\cdot\mathbf{v}$, $\mathbf{F}=-dU/dx$; $\mathbf{J}=\int\mathbf{F}\,dt=\Delta\mathbf{p}$, $\mathbf{R}_{cm}$; $\boldsymbol{\tau}=\mathbf{r}\times\mathbf{F}$, $\mathbf{L}=\mathbf{r}\times\mathbf{p}$, $\boldsymbol{\tau}=d\mathbf{L}/dt$, $L_z=I_z\omega_z$, $\tau_z=I_z\alpha_z$, $K_{rot}=\tfrac12 I\omega^2$, $I=\int\rho^2dm$, parallellakse $I=I_{cm}+Md^2$, rulling $V=\omega R$; $\mathbf{F}=-GMm/r^2\,\hat{\mathbf{r}}$, $U=-GMm/r$; hele SR-blokka (Lorentz-transformasjon, hastighetstransformasjon, $\Delta t=\gamma\Delta t_0$, $l=l_0/\gamma$, $\gamma$) |
| `[Rottmann]` | matematisk oppslag | Taylor-rekke med restledd, separabel 1. ordens ODE, oppskrift for 2. ordens homogen lineær ODE (karakteristisk likning, alle tre rot-tilfeller), treghetsmoment-tabeller, trigonometriske identiteter |
| `[må kunne utledes]` | kreves aktivt under tidspress | det skjelettets «Utledning som kreves aktivt» sier for nettopp ditt kapittel |

**A2. Boka sier hvorfor.** Minst én gang per del (og samlet i kap. 0.1) står
setningen ut i klartekst: du får arket utdelt, så poengene ligger i å *velge*
riktig formel, *begrunne* hvorfor den gjelder her, og *utlede* det arket ikke
gir. Skriv aldri «denne formelen må du kunne utenat» om noe som står på arket.

**A3. Kap. 0.1 har en `collapsible` «Formelarket i praksis»** — regnefagets
formel-minimum-side og bokas samlede oppslagskort (jf. README «Samlet
oppslagskort per bok»): en ren, printbar tabell med kjerneverktøyene per tema,
hver merket `[formelarket]` / `[Rottmann]` / `[må kunne utledes]`, pluss
treningsrådet: **løs alltid oppgaver med formelarket og Rottmann ved siden av,
slik eksamen faktisk er.**

**A4. Det som IKKE er på arket, og som derfor må sitte i fingrene:** hele
Python-/Euler–Cromer-håndverket (§P). Si det eksplisitt der det hører hjemme —
det er den ene ferdigheten arket ikke redder deg på.

---

## §S SENSORKONTRAKTEN (bindende — sensorveiledningene H2023, V2024 og V2025)

### Eksamensformen (gjengis korrekt overalt i boka)

| Felt | Verdi |
|---|---|
| Vurdering | **Todelt:** midtveiseksamen **20 %** + avsluttende skoleeksamen **80 %** (verifisert mot UiOs emneside 26. juli 2026) |
| Midtveis | Digital flervalg (Inspera), **3 timer**, ~20 spørsmål, dekker Del 1–7 + 9 |
| Avsluttende | Skriftlig skoleeksamen, **4 timer**, penn og papir — **Python skrives for hånd** |
| Oppgavemal | **4–7 flertrinnsoppgaver (a–e)**; moderne sett følger grunnmalen O1–O5 |
| Poeng | **Inntil 5 poeng per deloppgave, alle deloppgaver teller likt** |
| Karakter | **A–F** |
| Hjelpemidler | **Rottmann + fagspesifikt formelark (utdeles) + godkjent kalkulator** |
| Gjennomgangskrav | **«Husk at alle svar må begrunnes!»** — står i hodet på hvert sett |

Alle løsningsforslag, eksempler, fasiter og modellbesvarelser i boka skal
*modellere* disse reglene, ikke bare omtale dem.

**S1. Alt skal begrunnes.** Bare riktig svar uten begrunnelse gir liten eller
ingen uttelling. Å skrive opp relevante formler uten å bruke dem gir **null**.
Dette er den hyppigst påpekte enkeltfeilen. Praktisk konsekvens for deg som
skriver: **hver `solution` åpner med ÉN setning som sier hvilket prinsipp du
bruker og hvorfor det gjelder her**, før første likning. Eksempel: «Mekanisk
energi er bevart fra utløsning til toppunkt fordi bare tyngden gjør arbeid på
kula i denne fasen — snordraget står vinkelrett på bevegelsen.»

**S2. Inntil 5 poeng per deloppgave, alle deloppgaver teller likt.** Det gis
poeng for en god løsningsidé selv om den ikke fullføres — **bredde lønner seg**.
Boka sier dette i kap. 0.1 og i hver øvingseksamen, og strategirådene i Del 0
bygger på det: ta a-deloppgavene i alle oppgavene før du graver deg ned i én.
Poengfordelingen (0–5 p) angis i fasitene til prøver og øvingseksamener.

**S3. Følgefeil straffes ikke** når mellomregningen er vist så feilen er
sporbar. Boka lærer derfor bort å **vise mellomregning og skrive symbolsk så
lenge som mulig**, og minst én modellbesvarelse i eksamenstreningsdelen viser en
kandidat som gjør en tidlig feil, fører den ryddig videre og likevel høster
mesteparten av poengene — med margnotat om nettopp det.

**S4. Flere gyldige metoder godtas** og vises ofte side om side i fasiten.
Der sensor forventer det, skal boka gjøre det samme:

- fart nedover et skråplan via $v=gt\sin\theta$ *eller* via
  $s=\tfrac12 g\sin\theta\,t^2$;
- «kommer lengst opp med/uten friksjon» begrunnet *både* med energi *og* med
  N2L;
- akselerasjonen til en rullende sylinder via energimetoden *og* via
  kraft/moment-koblingen (kap. 6.2).

Blir det to metoder, si i én linje hvilken som er raskest under tidspress og
hvorfor du likevel viser begge.

**S5. Riktig metode teller, ikke bare riktig tall.** Tre nullpunkter som skal
drilles eksplisitt som metodefeller:

- energibevaring i et **uelastisk** støt → 0p (kap. 5.2, 5.3);
- «integrere» en differensiallikning som om $y$ er konstant → 0p (kap. 7.1);
- skrive opp SR-formler i et paradoks uten å drøfte **samtidighet** → 0p
  (kap. 10.2).

**S6. Enheter og gjeldende siffer** (§N3). Boka modellerer kravet i hvert eneste
tallsvar.

**S7. Karakternivåene** (destillert fra fasitkommentarene, gjengis i kap. 0.1 og
brukes til å merke modellbesvarelser ærlig):

- **Bestått-nivå:** setter opp riktig standardformel, får riktige enheter, tar
  de «billige» a-deloppgavene.
- **Midtsjiktet (C/B):** gjennomfører flertrinnsoppgavene med vist
  mellomregning og fungerende frilegemediagram.
- **Toppsjiktet (A):** begrunner bevaringslover og gyldighetsbetingelser
  uoppfordret, verifiserer uttrykk med grensetilfeller, treffer presist på de
  kvalitative spørsmålene, skriver korrekt Euler–Cromer-løkke med `abs(v)*v` og
  **begrunner metodevalget**, og drøfter samtidighet i SR-paradoksene.

**S8. Karakter-realisme.** Faget har karakterskala A–F. Del 0 sier eksplisitt at
**C er en god og vanlig karakter**, særlig i første studieår. «Gapet til A»
rammes inn som en oppgraderingsmeny, ikke en mangelliste. Modellbesvarelser
merkes ÆRLIG: en boks som heter «C-besvarelse» skal VÆRE en C, og boka skal ha
minst én autentisk B-/midtnivå-besvarelse (ekte studentspråk, litt rotete, men
god, med margnotat om hva som er BRA NOK). Formuleringen «Prioritet: perfekt» er
FORBUDT — skjelettets prioritetsklasser skrives i boka som «høyeste prioritet —
dette må sitte» (perfekt), «bør sitte» (kunne) og «kjenne til» (kjenne).

---

## §P PYTHON- OG EULER–CROMER-KONTRAKTEN (Del 8 + O3/O5 i øvingseksamenene + kodeleddene i 7.2–7.4 og 9.1)

Numerisk Python er testet i **7 av 7 sett (100 %)**, nesten alltid som siste
deloppgave i en ODE-oppgave. Dette er ferdigheten som tydeligst skiller FYS1100
fra et klassisk mekanikkløp, og den eneste kjerneferdigheten formelarket ikke
hjelper på.

**P1. Eksamensrealismen.** Kandidaten skriver **pseudokode/Python for hånd** —
ikke et helt program, bare **initialbetingelser + integrasjonsløkke**. Alle
programmeringsspråk godtas, og **syntaksfeil straffes ikke**. Poeng gis for
riktige initialbetingelser (1p), riktig akselerasjonsuttrykk (3p) og riktig
løkke (1p). Boka skal si dette der kode introduseres, og aldri gi inntrykk av at
studenten må memorere `import`-linjer.

**P2. Hver kodeblokk vises i to versjoner.** I Del 8 og i øvingseksamenenes
kodeledd: en **kjørbar referanseversjon** (fullstendig, med `import numpy as np`,
arrays, konstanter) og — i en `collapsible` «Slik ser den håndskrevne
eksamensversjonen ut» — den **komprimerte håndskrevne versjonen** (bare
initialbetingelser + løkke). Kontrasten er selve poenget.

**P3. Kodekontrakten — seks krav som SKAL være oppfylt i hver kodeblokk:**

1. **Forhåndsallokerte `numpy`-arrays** med lengde $N$:
   `t = np.zeros(N)`, `v = np.zeros(N)`, `x = np.zeros(N)`.
2. **Indeksdisiplin:** alltid `v[i]`, aldri `v` (−2p på eksamen).
3. **Euler–Cromer:** oppdater **fart FØRST**, og bruk den **OPPDATERTE** farten i
   posisjonsoppdateringen.
4. **Drag skrives `-D*abs(v[i])*v[i]`** — aldri `-D*v[i]**2` (−1p). Begrunnelsen
   (riktig fortegn også når legemet snur) skrives ut i teksten, ikke bare i
   koden.
5. **I 2D tas BEGGE komponenter med** (maks 2p ellers): egne arrays `x`, `y`,
   `vx`, `vy`; farten `v = np.sqrt(vx[i]**2 + vy[i]**2)`; dragkomponentene
   `-D*v*vx[i]` og `-D*v*vy[i]`.
6. **Metodevalget begrunnes i tekst** — hver eneste gang: Euler–Cromer er
   (tilnærmet) energibevarende, «tar av og til for mye og av og til for lite», så
   feilen akkumuleres langt saktere enn i Forward Euler, som bruker gammel fart i
   posisjonsoppdateringen og derfor lekker energi (oscillatoramplituden vokser,
   planetbanen spiraler utover).

**P4. Referansemønsteret** (1D — utvid komponentvis i 2D):

```python
import numpy as np

N = 10000
dt = 0.001
t = np.zeros(N)
x = np.zeros(N)
v = np.zeros(N)

x[0] = 0.0          # initialbetingelser
v[0] = 0.0

for i in range(N - 1):
    a = g - (D / m) * abs(v[i]) * v[i]   # akselerasjonen fra ODE-en
    v[i + 1] = v[i] + a * dt             # fart FØRST
    x[i + 1] = x[i] + v[i + 1] * dt      # OPPDATERT fart
    t[i + 1] = t[i] + dt
```

Denne malen er bokas gjennomgående kodemal. Varier fysikken (fjær, pendel,
kast med drag, komet, satellitt), aldri strukturen — studenten skal ha ÉN
automatisert mal som modifiseres.

**P5. Modifikasjonsferdigheten drilles eksplisitt** (kap. 8.3 og minst én
oppgave i hver øvingseksamen): legg til et nytt kraftledd i akselerasjonslinja
(f.eks. en radiell solvind $F_s = s/r^2$) — og **husk massen** når den nye
kraften ikke er masseuavhengig ($a = F/m$). En oppgave som kan besvares med
uendret eksempelkode gir 0p og skal ikke finnes i boka.

**P6. Trapesmetoden på måledata** med ujevne intervaller (kap. 8.3, prøve 8.D):
`W += (F[i+1] + F[i]) * (x[i+1] - x[i]) / 2`. Ikke bruk konstant $\Delta x$ når
dataene er ujevne.

**P7. All kode i boka skal være FAKTISK kjørt** før den skrives inn. Utskrift
merkes «**Utskrift:**» og limes inn slik den faktisk ble. Ingen kode i denne boka
skal utgi seg for å være kjørt uten å være det.

**P8. Runge–Kutta** omtales kun som beredskap (kap. 8.3): pensum nevner høyere
ordens metoder, men Euler–Cromer er metoden sensor forventer og premierer.
Ingen drill, ingen oppgaver.

---

## §G FIGURKONTRAKTEN — frilegemediagrammet er en selvstendig poenggivende ferdighet

FBD er eksplisitt etterspurt i 6 av 7 sett og har egen poenggiving. En bok som
«beskriver figuren i ord» underviser ikke ferdigheten.

**G1. Figur-i-ord er et KOMPLEMENT, ALDRI en erstatning.** Kapitler der
skjelettets **Figurkrav**-felt lover en figur, SKAL ha en faktisk `image`-blokk
med SVG. Prosabeskrivelsen beholdes som forklaring TIL figuren.

**G2. Ber en oppgave om figur, SKAL løsningen vise figuren.** Sier
oppgaveteksten «tegn frilegemediagram», «skisser», «vis i figur», er et
løsningsforslag som bare skriver «*Figur i ord:* …» UFULLSTENDIG. Gjelder også
prøver og øvingseksamener skrevet som tekstblokker inne i `collapsible`-er
(nøstede image-blokker rendres, men MÅ ha `id` og `src`).

**G3. FBD-standarden boka modellerer** (og som eksemplene skal vise):

1. isolér ETT legeme;
2. tegn **alle** krefter som virker PÅ det, med **navngitte symboler** (−2p for
   udefinerte symboler eller uforklarte krefter);
3. riktig retning og riktig angrepspunkt (−1p ved klart feil);
4. rimelig lengde på vektorene ($N$ vs. tyngdekomponenten);
5. koordinatsystemet inntegnet;
6. **ingen fiktiv «sentripetalkraft»** (−1p) — sentripetalkraften er
   *resultanten* av de virkelige kreftene, ikke en egen kraft. Den ene tillatte
   forekomsten er som eksplisitt motekssempel i en «Typiske feil»-warning, der
   det står at figuren er GAL.

**G4. Figurer som minimum skal finnes** (fra skjelettets Figurkrav-felt):
graf av $\sin\theta$ mot $\theta$ (1.2), geometrisk Fermi-modell (1.3), koblet
$x(t)$/$v(t)$/$a(t)$ (2.1), banekurve med dekomponert hastighet (2.2), to
fullstendige FBD-er for kloss på underlag (3.1), skråplan-FBD med
$mg\sin\theta$/$mg\cos\theta$ (3.2), to FBD-er side om side med snordrag (3.3),
loop-FBD i topp og bunn (4.1), tverrsnitt av dosert sving (4.2), energibalanse
start/slutt (5.1), før/etter-skisse av støt (5.2), momentarm og rotasjonsakse +
parallellakse (6.1), FBD for rullende legeme (6.2), før/etter kule-i-stav med
spinnretning (6.3), $y(t)$ for SHM + potensialkurve $U(x)$ (7.2), $v(t)$ mot
$v_T$-asymptoten (7.3), oppdateringsrekkefølge + Euler–Cromer vs. Forward Euler
(8.1), 2D-kodeskjema + banekurve med/uten drag (8.2), spiralbane vs. lukket
ellipse + trapes-skjema (8.3), ellipsebane med aphel/perihel (9.1),
romtidsdiagram med to verdenslinjer og en samtidighetslinje (10.1),
romtidsdiagram for stige-i-låve (10.2).

**G5. Filer og stil:** `public/images/textbook/fys1100/<navn>.svg`. Akser i
`#6b7280`, kurver og kraftvektorer i mid-tone farger, norsk tekst, **transparent
bakgrunn** (må være lesbar i både lys og mørk modus), viewBox ca. 480×360,
tydelige etiketter. Valider XML før wiring.

**G6. Etter at nye figurer er skrevet:** kjør
`npx tsx scripts/upload-media-storage.ts` — bilder serveres fra Supabase
Storage, og uten opplasting blir det 404 i prod. Kjør deretter
`python3 scripts/hoyskolebok/sjekk-figurer.py fys1100`.

**G7. Skreddersydd caption per plassering.** Hver `caption` skrives for nettopp
den plasseringen og knyttes til kapitlets eget eksempel og termbruk — ikke en
generisk gjentakelse. `alt` beskriver figuren bokstavelig for skjermleser (ren
tekst, §0.4). En figur skal bare vise det kapitlet har lært bort: ikke tegn inn
friksjon i et FBD i kap. 3.1 hvis friksjonsmodellen først kommer i 3.2 — lag to
figurer.

---

## §R REGNEKONTRAKTEN — etterregn før du skriver

**R1. Etterregn HVERT talleksempel med `python3` før du skriver det.** Ikke regn
i hodet, ikke gjenbruk et tall fra skjelettet uten å sjekke. Dette gjelder
akselerasjoner, snordrag, sluttfarter, energitap, vinkelfarter,
treghetsmomenter, terminalfarter, $\gamma$-verdier og alle Fermi-anslag.

**R2. Sjekk uttrykkene numerisk i grensetilfellene du påstår.** Skriver du at
$T \to 0$ når $\mu_1 = \mu_2$, eller at $a \to g\sin\theta$ når $\mu \to 0$, sett
inn tall og se at det stemmer. **Fortegns- og «alltid større/mindre enn»-påstander
parametersjekkes numerisk i hele det fysisk rimelige parameterrommet FØR de
skrives** (DNA-regnefag «Matematisk sannhetskontroll»). Er påstanden bare
betinget sann, skriv betingelsen ut.

**R3. En «Vis at …»-oppgave der påstanden ikke holder ubetinget, KAN IKKE
LØSES** — det er verre enn en manglende oppgave. Skriv heller «vis at det
gjelder når …, og finn betingelsen».

**R4. All kode kjøres** (§P7). Numeriske resultater som siteres i teksten
(«Euler–Cromer holder amplituden konstant til 4 desimaler over 1000 perioder»)
skal komme fra en faktisk kjøring, ikke fra magefølelsen.

**R5. Tall som skal gå opp, går opp.** Velg masser, vinkler og lengder som gir
ryddige svar. Går det ikke opp, skriv «≈» og oppgi antall gjeldende siffer.

**R6. Varier kalibreringene.** Samme tallsett gjenbrukt i tre kapitler gir
autopilot. Bytt masser, vinkler, radier og friksjonstall mellom kapitlene.

---

## §K KVOTEKONTRAKTEN (AUTORITATIV — fra skjelettets §4)

**Bindende total: quiz 559 · flashcards 578.** Verifisert 26. juli 2026: alle
deltotaler summerer. Kvotene er **minimum per kapittel** — overskyting er lov,
underskyting er kontraktsbrudd.

| Del | Kapitler | Quiz | Flashcards | Prøver (min) | Kapittelminutter |
|---|---|---|---|---|---|
| 0 | 0.1 | 12 | 12 | — (metadel) | 35 |
| 1 | 1.1–1.3 | 46 | 48 | 4 (105) | 155 |
| 2 | 2.1–2.2 | 40 | 44 | 4 (135) | 130 |
| 3 | 3.1–3.4 | 76 | 80 | 4 (135) | 285 |
| 4 | 4.1–4.2 | 38 | 42 | 4 (135) | 135 |
| 5 | 5.1–5.3 | 56 | 56 | 4 (140) | 220 |
| 6 | 6.1–6.4 | 72 | 76 | 4 (145) | 290 |
| 7 | 7.1–7.4 | 72 | 74 | 4 (135) | 290 |
| 8 | 8.1–8.3 | 52 | 60 | 4 (130) | 205 |
| 9 | 9.1 | 16 | 18 | 4 (100) | 60 |
| 10 | 10.1–10.2 | 36 | 40 | 4 (125) | 130 |
| 11 | 11.1–11.4 | 43 | 28 | — (11.2–11.4) | 730 |
| **Sum** | **33 kap. + 10 prøvekap.** | **559 ✓ (≥500)** | **578 ✓ (≥500)** | **40 prøver (1 285 min)** | **2 665 min** |

**Bokas samlede tidsbudsjett: 2 665 + 1 285 = 3 950 min ≈ 66 timer** (etterregnet
26. juli 2026). Dette tallet brukes i «Lite tid?»-boksen i kap. 0.1.

Per kapittel (quiz · flashcards) — **minimum**:

| Kap. | Q · F | Kap. | Q · F | Kap. | Q · F |
|---|---|---|---|---|---|
| 0.1 | 12 · 12 | 4.2 | 18 · 20 | 7.4 | 12 · 8 |
| 1.1 | 16 · 16 | 5.1 | 22 · 24 | 8.1 | 18 · 22 |
| 1.2 | 16 · 18 | 5.2 | 22 · 24 | 8.2 | 18 · 20 |
| 1.3 | 14 · 14 | 5.3 | 12 · 8 | 8.3 | 16 · 18 |
| 2.1 | 20 · 22 | 6.1 | 22 · 26 | 9.1 | 16 · 18 |
| 2.2 | 20 · 22 | 6.2 | 20 · 22 | 10.1 | 20 · 22 |
| 3.1 | 22 · 26 | 6.3 | 18 · 20 | 10.2 | 16 · 18 |
| 3.2 | 22 · 24 | 6.4 | 12 · 8 | 11.1 | 18 · 28 |
| 3.3 | 20 · 22 | 7.1 | 18 · 20 | 11.2 | 15 · 0 |
| 3.4 | 12 · 8 | 7.2 | 22 · 24 | 11.3 | 5 · 0 |
| 4.1 | 20 · 22 | 7.3 | 20 · 22 | 11.4 | 5 · 0 |

**Flashcards telles som toppnivå `definition`-blokker med `title`.** Ligger en
definisjon inne i en `collapsible`, teller den ikke.

### Quiz-filene

`src/lib/data/quiz-staging/<kapittel-id>.quiz.json`:

```json
[{ "question": "…", "options": ["riktig", "distraktor", "distraktor", "distraktor"], "explanation": "…" }]
```

Nøyaktig **4 alternativer**, `options[0]` **ALLTID** riktig (runtime stokker
rekkefølgen). Ingen duplikate alternativer.

**Kalibrering:** midtveiseksamen er ren flervalg, så **quizbanken i Del 1–7 + 9
(400 spørsmål) ER midtveistreningen** — ikke bare kunnskapskontroll. Skriv den
deretter: konseptrangeringer, graftolkning, «hvilken situasjon er umulig»,
korte utregninger, treghetsmoment-rangering, ODE-gjenkjenning, Taylor-ledd,
dimensjonsanalyse. Kap. 11.2 er generalprøven, og teksten der peker eksplisitt
til quizbanken.

**Distraktorer = reelle feller fra analysen**, aldri tullesvar: fiktiv
sentripetalkraft, energibevaring i uelastisk støt, $\sin$/$\cos$-bytte, $N=mg$
på skråplan, glemt $\cos\theta$, glemt rotasjonsenergi, byttet $l$/$l_0$,
`v**2` i stedet for `abs(v)*v`, Forward Euler i stedet for Euler–Cromer. En
distraktor gjengir ALDRI bokas egne presiseringer som «galt» svar; ligger en
distraktor nær sannheten, forklarer `explanation` eksplisitt hvorfor den ikke
holder.

**Hver `explanation`** (2–4 setninger) begrunner både hvorfor fasiten stemmer og
hvorfor den nærmeste distraktoren er gal.

**LENGDE-TELL:** alle fire alternativer skal ha jevn lengde og samme
presisjonsgrad. `options[0]` skal være unikt lengst i **under 30 %** av
spørsmålene — og unikt kortest i under 30 %. Er alternativene tall, skal alle
fire ha samme format og samme størrelsesorden, og hver av dem svare til en
konkret regnefeil. Kontroll: `node scripts/hoyskolebok/quiz-lengdesjekk.mjs`
(etter wiring) og manuell telling underveis.

---

## Sjangerkatalog A–K og frekvenstall (fra skjelettets §3 — gjengis i kap. 0.1)

Sjangerbokstavene skrives ut i klarspråk ved FØRSTE bruk i HVERT kapittel.

| Kode | Sjanger | Frekvens (av 7 avsluttende sett) |
|---|---|---|
| **A** | Skrått kast / 2D-kinematikk | 3–4 av 7 (~50 %) |
| **B** | Fermi-/estimeringsproblem | 4 av 7 (57 %) |
| **C** | Newton på skråplan / koblede klosser med friksjon (FBD) | N2L 7 av 7 (100 %); FBD eksplisitt etterspurt i 6 av 7 |
| **D** | Bevaringslover (bevegelsesmengde + mekanisk energi + støt) | energi 7 av 7 (100 %); driv/støt 5 av 7 (71 %) |
| **E** | Sirkelbevegelse og sentripetalkraft | 5 av 7 (71 %) |
| **F** | Rotasjon av stivt legeme | 7 av 7 (100 %) |
| **G** | Svingninger / harmonisk oscillator / differensiallikninger | ODE 6 av 7 (86 %); SHM 5 av 7 (71 %) |
| **H** | Numerisk integrasjon og Python-kode | 7 av 7 (100 %) |
| **I** | Spesiell relativitet | 6 av 7 (86 %) |
| **J** | Kvalitative «forklar/begrunn/kritiser»-oppgaver | minst én deloppgave i hvert sett |
| **K** | Gravitasjon og sentralkraftbevegelse | 2–3 av 7 (~35 %, økende) |

Verktøysjangrene opptrer både frittstående og som ledd i A–K:
**dimensjonsanalyse** (nyere, både midtveis og avsluttende), **Taylor-utvikling**
4 av 7 (57 %). I tillegg: **luftmotstand/drag** 6 av 7 (86 %),
**referansesystemer/Galilei** 1–2 av 7 (~20 %), **Lagrange-formalisme** 0 av 7
(0 %).

**Bruk kun disse tallene.** Skriv dem som «7 av 7 sett (100 %)» første gang i et
kapittel, deretter gjerne bare prosenten. **Nevneren i denne boka er 7.**
Der beleggene er usikre (A og K), skriv spennet ærlig — «3–4 av 7 sett (~50 %)»
— og aldri en oppdiktet eksakt prosent.

**Grunnmalen O1–O5** (moderne sett, gjengis i kap. 0.1 og styrer 11.3–11.4):
O1 Newton/energi/bevaring med FBD og grensetilfeller · O2 rotasjon/stivt legeme ·
O3 ODE som utledes, løses analytisk og avsluttes med Euler–Cromer · O4 spesiell
relativitet (oftest siste) · O5 én av {skrått kast, sirkelbevegelse, Fermi,
gravitasjon}.

**Bevisst utelatt, med begrunnelse i kap. 0.1:** Lagrange-formalismen (nevnt i
emnebeskrivelsen, aldri testet — kun én kort kjenne-omtale i kap. 0.1, aldri
egne oppgaver eller drill), Runge–Kutta som satsingsområde (kun beredskap i
kap. 8.3), samt kvantefysikk, termodynamikk og bølgelære (utenfor FYS1100s
mekanikk-kjerne). Hvert treff på «Lagrange» eller «Runge–Kutta» i bokas filer
skal stå i samme avsnitt som avgrensningen.

---

## Feilkatalogen #1–#15 (fra EKSAMENSANALYSE §5)

Kodene glosses ved FØRSTE bruk PER KAPITTEL — «(felle #4 — glemt absoluttverdi i
drag-leddet)». Kap. 0.1 lister dem alle og sier at de har et samlet register.

| # | Fellen | Forebygges i |
|---|---|---|
| **#1** | Tallsvar uten resonnement (den dyreste enkeltfeilen) | 0.1 og alle |
| **#2** | Energibevaring i et uelastisk støt — 0p | 5.2, 5.3 |
| **#3** | «Integrere» en ODE som om $y$ er konstant — 0p | 7.1, 7.4 |
| **#4** | Glemt absoluttverdi i drag (`v**2` i stedet for `abs(v)*v`) — −1p | 7.3, 8.2 |
| **#5** | `v` uten indeks i integrasjonsløkka — −2p | 8.1 |
| **#6** | Bare én romlig komponent i en 2D-kode — maks 2p | 8.2 |
| **#7** | Bevaringslov brukt uten begrunnelse — −1p | 5.1, 5.2, 6.3, 9.1 |
| **#8** | Udefinerte symboler / uforklarte krefter i FBD — −2p; fiktiv sentripetalkraft — −1p | 3.1, 4.1 |
| **#9** | Manglende retning på en vektorstørrelse — −2p | 2.2, 3.1, 6.1 |
| **#10** | Byttet egentid/egenlengde eller $l$/$l_0$ — −2p; bevegelsesligninger uten $\gamma$ — 0p | 10.1 |
| **#11** | SR-formler i et paradoks uten samtidighetsdrøfting — ingen poeng | 10.2 |
| **#12** | Likhetstegn i en ulikhetsbetingelse ($v=\sqrt{gR}$ uten å forklare $N=0$-grensen) — −1p | 4.1 |
| **#13** | Følgefeil som gir $v_x \neq 0$ i et kast uten at det kommenteres — −1p | 2.2 |
| **#14** | Glemme at et delsystem også får fart — maks 2p | 5.2, 5.3 |
| **#15** | Kraftmoment om massesenteret med tyngden som bidrag — −2p | 6.1, 6.4 |

---

## Leserkrav (ufravikelig — full ordlyd i README «Leserkrav»; SKAL i førsteutkastet)

- **Kun eksamensrelevant stoff**; «bør kjenne til» sist og merket (gjelder særlig
  Lagrange-omtalen i 0.1, Runge–Kutta i 8.3, referansesystemer/Galilei og hele
  Del 9, som er kjenne-stoff).
- **Korte avsnitt** (2–4 setninger), aktiv «du»-form, konkret norsk knagg før
  formalismen. Godt, flytende norsk; ALDRI telegramstil. Presisjon vinner ved
  tvil.
- **Meningsfulle oppgaver:** hver oppgave er synlig eksamensforankret.
  Sjanger-/nivåmetadata skrives som en LEDENDE parentes i `task`, f.eks.
  `(Eksamensnivå, sjanger F — rotasjonsoppgaven.)`, ALDRI midt i brødteksten.
  Ikke gjenta `difficulty` i teksten («(krevende)» skrives ikke i `task` —
  feltet vises i oppgavehodet).
- **Læringsløkke Teori → Eksempel → Oppgave** med `exercise`-blokker INLINE (se
  løkke-kontrakten øverst).
- **Ingen usett forkunnskap** (samme sted).
- **Deloppgaver på egen linje, fet merking:** a), b), c) i `task`/`solution`
  HVER på egen linje — `…\n\n**a)** …\n**b)** …`. ALDRI bak hverandre i løpende
  tekst; ikke bruk `subTasks`. Listemerking alltid med små bokstaver.
- **Nybegynner-inngang / ingen uforklart sjargong (UFRAVIKELIG).** Boka skal
  forstås av en som aldri har hatt faget:
  - **Sjangerkodene A–K** skrives ut i klarspråk ved FØRSTE bruk i HVERT
    kapittel.
  - **Feilkodene #1–#15** glosses ved FØRSTE bruk PER KAPITTEL.
  - **Oppgavekodene O1–O5** forklares som «oppgave 1 i grunnmalen» ved første
    bruk per kapittel.
  - **Eksamens-metaspråk** forklares før bruk: «midtveiseksamen», «avsluttende
    skoleeksamen», «Inspera» (UiOs digitale eksamenssystem), «sensorveiledning»,
    «formelark», «Rottmann» (den matematiske formelsamlingen som er tillatt
    hjelpemiddel), «deloppgave», «følgefeil».
  - **Fysikktermer** forklares ved første bruk, ALDRI kaldt: «frilegemediagram»,
    «konservativ kraft», «egentid», «egenlengde», «treghetsmoment»,
    «parallellakseteorem», «rullebetingelse», «spinn», «karakteristisk likning»,
    «separabel», «diskretisering», «terminalfart», «Euler–Cromer», «Forward
    Euler», «linearisering», «størrelsesorden».
  - Ingen kald kode i `competenceGoals` eller i aller første tekstboks.
  - **Kap. 0.1 har en «Slik leser du denne boka»-orienteringsboks** (type `text`
    eller `tip`, ALDRI `definition` — det ville endret flashcard-kvoten) med:
    karakterskalaen A–F og at C er en god og vanlig karakter, den todelte
    vurderingen, kompakt liste over sjangrene A–K, kompakt liste over
    grunnmalen O1–O5, kompakt liste over feilkodene #1–#15 med at de har et
    samlet register, og en eksplisitt innramming av de tunge symbolene leseren
    vil møte senere: «du trenger ikke forstå $\boldsymbol{\tau}=\mathbf{r}\times\mathbf{F}$
    eller $\gamma$ ennå — de forklares der de brukes».
- **Del 0-pakken (kap. 0.1):**
  - **«Lite tid?»-boks** (`tip`) med hurtigrute 3–5 dager og ukeplan bygget av
    summerte `estimatedMinutes`. **Bokas sum er 3 950 min ≈ 66 timer** (2 665 min
    på de 33 kapitlene + 1 285 min på de ti prøvekapitlene — etterregnet
    26. juli 2026). Boksen sier at anslagene er LESEtid, og at den som regner
    for hånd bør legge på ca. ×1,5.
  - **Kildenote** for frekvens-empirien — ordrett eller trofast omskrevet fra
    «Sannferdig kildenote» under.
  - **Sjanger-/prosedyrekort på ÉN side** — kortet SELV (sjanger → én linjes
    oppskrift → hvilken oppgave i grunnmalen den pleier å være → vanligste
    felle), ikke en lenkeliste.
  - **Deltidsrute** 10–12 uker (~5–6 t/uke) der midtveis-generalprøven (11.2 +
    prøvene 1.D–7.D og 9.D) ligger før midtveis, og de to øvingseksamenene er
    fordelt på to ulike helger — aldri stablet i siste uke.
  - **«lese mye, skrive lite»-boks** — legitim rute for lese-øveren (les
    oppgaven → formuler framgangsmåten i én setning → les fasiten som sensor) +
    minimumsrådet: **skriv minst én øvingseksamen for hånd på tid.** Fire timer
    håndskrift med figurer er en fysisk ferdighet, og Python skrives for hånd.
  - **`collapsible` «Formelarket i praksis»** (§A3) — bokas samlede oppslagskort.
  - **`collapsible` «Python-beredskapen»** — kodemalen fra §P4 i kortform med
    sjekklisten: arrays, initialbetingelser, akselerasjonslinje, fart før
    posisjon, `abs(v)*v`, begge komponenter, metodebegrunnelse.
- **Klikkbare kap-referanser:** «kap. X.Y» i forkunnskaper og fasiter =
  markdown-lenke `[kap. X.Y](/fys1100/fys1100-X-Y)`; død «se kapittel»-tekst
  er FORBUDT (aldri lenker i `title`-felt). Lenk kun til filer som finnes på disk
  når du skriver — byggeleder legger inn resten ved wiring.
- **Selvdiagnose:** avkryssbar sjekkliste (☐) etter hver prøvefasit og etter hver
  øvingseksamen-fasit.
- **Lett innstegsoppgave** (difficulty `lett`, ren gjengivelse med egne ord)
  tidlig i teorikapitler der første oppgave ellers er full eksamenssjanger.
- **Hverdagsanker + verdens-caser:** abstrakte kjernetemaer åpner med et konkret
  anker før apparatet — en heis som setter i gang, en sykkel som ruller nedover,
  en ball som mister fart i lufta, GPS-satellitter som må korrigere for
  tidsdilatasjon. Innpakningene er virkelige situasjoner, aldri «en medstudent
  skriver …»-metaeksempler.
- **Øktmerking:** alle kapitler med `estimatedMinutes` > 45 — det vil si 1.1
  (45 er grensen, men merk uansett), 1.2, 1.3, 2.1, 2.2, 3.1–3.4, 4.1, 4.2,
  5.1–5.3, 6.1–6.4, 7.1–7.4, 8.1–8.3, 9.1, 10.1, 10.2, 11.1–11.4 — har
  tidsanslag per løkke («## Løkke 2 — kraftmodellene (~20 min)») eller
  «— naturlig pausepunkt —»-markører. Lange modellbesvarelser har pausepunkt
  mellom hovedseksjonene.
- **Hint + difficulty-spredning:** alle `exercise` har utfylte `hints` (første
  hint = formelen, prinsippet eller første grep — ALDRI konklusjonen). Unntak:
  den merkede kalde banken i kap. 11.1. Boka har flere genuint krevende
  oppgaver merket `vanskelig`.
- **Fasitmønster-variasjon:** ALLE ensartede fasitlister varierer. Statiske
  flervalg i prøve- og øvingseksamen-collapsibles har STOKKEDE fasit-bokstaver
  (aldri «alle a»); riktig/galt- og «finn fellen»-lister blander reelle og
  feller (aldri «alle felle»). Quizfilene beholder `options[0]`-invarianten
  fordi runtime stokker.
- **Meta-fasit forbudt:** ingen «en A-besvarelse ville her ha …». Skriv
  begrunnelsen ut. Minst én modellbesvarelse skal lande SKARPT — ikke alle på
  samme forbeholdne kompromissform.
- **Signalbokser ETTER oppgaven:** en boks som varsler hva en drilloppgave
  tester, plasseres etter oppgaven eller som collapsible hint, aldri foran.
- **Tidsbudsjett-konsistens:** der en oppgaves deklarerte tid avviker fra summen
  av deltidene, forklares differansen (anbefalingene er regne-/skrivetid; resten
  er lesing av oppgaveteksten, kladd og gjennomlesing).
- **Juridisk:** innholdet fremstiller seg ALDRI som offisielt eller
  UiO-tilknyttet, og lover aldri eksamensutfall. Uavhengighetsdeklarasjonen
  vises automatisk av plattformen.

---

## Kildegrunnlag og sannferdig kildenote (UFRAVIKELIG — produkteier)

Arkivet `~/Desktop/Eksamner/UiO/FYS1100/` er verifisert 26. juli 2026 og
inneholder **38 filer**:

- **8 avsluttende oppgavesett med løsningsforslag:** H2022, V2023, H2023, V2024,
  H2024, V2025, H2025 (7 ordinære) + prøveeksamen H2022.
- **10 midtveiseksamener med fasit**, pluss **1 FYS-MEK1110-midtveis fra V2021**
  (forgjengeremnet, tatt med for kontekst).
- **Sensorveiledning: nøyaktig TRE** av løsningsforslagene har en innebygd
  sensorveiledning — **H2023 (rettet versjon), V2024 og V2025**. De er ikke egne
  dokumenter, men egne seksjoner inne i løsningsforslags-PDF-ene. I tillegg
  finnes **én frittstående sensorveiledning**, men den gjelder
  **FYS-MEK1110-midtveis 2021**, altså forgjengeremnet.

**Bindende språkregler:**

1. **Boka skal ALDRI påstå at det finnes sensorveiledning for alle årganger.**
   Skriv «sensorveiledningene i H2023, V2024 og V2025» — alltid scopet.
   Ubestemt flertall («sensorveiledningene», «sensorveiledningene 2022–2025»)
   uten årstall er FORBUDT og grep-sjekkes. Merk at SKJELETT.md og
   EKSAMENSANALYSE.md enkelte steder skriver «sensorveiledningene 2022–2025» —
   **den formuleringen skal ikke inn i boka**; bruk de tre årstallene.
2. **Frittstående sensorveiledning finnes bare for forgjengeremnet
   FYS-MEK1110 (midtveis 2021)** og omtales bare med den presiseringen, hvis den
   omtales i det hele tatt.
3. **Nevneren for alle frekvenstall er 7** (de avsluttende ordinære settene
   H2022–H2025). Prøveeksamen H2022 og midtveiseksamenene er registrert som
   støtte, men **teller ikke** i frekvensene.
4. **Modellbesvarelsene i boka er NYSKREVNE av Skolesaga.** De omtales aldri som
   ekte studentbesvarelser og aldri som hentet fra en fasit.
5. **Ingen andre kildetyper nevnes** (ingen «karakterstatistikk», ingen
   «sensorpanel», ingen «eksamensrapport») — kun det som står over.

**Opphavsrett på løsningsforslagene (INTERNT-LF).** Løsningsforslagene er
klassifisert INTERNT-LF i arkivets manifest: de er opphavsrettslig vernet og kan
brukes som **fasitkilde** — altså til å kontrollere at fysikken, metodevalget og
poengvurderingen i boka er riktig — men **aldri gjengis ordrett eller nær
parafrasert**. Oppgavesettene selv er PUB-OPPGAVE (fritt tilgjengelige etter
åndsverkloven § 14), men også de er kun mønster, aldri kopikilde. **Alle
løsninger, fasiter, modellbesvarelser og sensorkommentarer i boka er
nyskrevne** — du skriver fysikken selv, med egne tall, egne kontekster og egne
formuleringer. Formlene er standard fysikknotasjon og ikke opphavsrettslig
beskyttet.

**Kildenoten i kap. 0.1** — bruk denne formuleringen eller en trofast
omskrivning:

> Frekvenstallene i denne boka er telt i UiO-arkivet for FYS1100. Nevneren er
> **7**: de ordinære avsluttende skoleeksamenene høsten 2022 til høsten 2025
> (H2022, V2023, H2023, V2024, H2024, V2025, H2025), alle med løsningsforslag.
> «100 %» betyr at temaet har minst én deloppgave i alle sju settene. I tillegg
> er en prøveeksamen fra 2022 og ti midtveiseksamener med fasit lest for form-
> og temaregistrering; de er ikke telt med i frekvensene. **Tre av
> løsningsforslagene — H2023, V2024 og V2025 — har en innebygd sensorveiledning
> med poenggiving og begrunnelse per deloppgave.** Det er disse tre som er
> kilden til metareglene om begrunnelse, poeng per deloppgave og følgefeil; for
> de øvrige årene bygger vurderingen på løsningsforslagene selv. Tidsserien er
> kort, så ±1 sett per tema er realistisk usikkerhet, og et nytt sett kan endre
> bildet. Alle oppgaver og modellbesvarelser i boka er nyskrevet av Skolesaga.

**Vurderingsvektingen** står ikke i eksamensarkivet, men er **verifisert mot
UiOs emneside 26. juli 2026: midtveiseksamen teller 20 %, avsluttende
skoleeksamen 80 %.** Bruk de tallene overalt i boka — aldri det gamle spennet
«~20–25 %», og aldri en påstand om at andelen er ukjent. Kilden er emnesiden,
ikke arkivet, og det skal sies der vektingen først presenteres (kap. 0.1):
«tallene er hentet fra UiOs emneside — sjekk den for ditt eget semester, siden
vurderingsordninger kan endres».

**Bruk ALDRI den literale markøren `(verifiser)` i kapittelfilene** —
`sjekk-bok.py` feiler på den. Er noe genuint usikkert, skriv usikkerheten ut i
klartekst.

---

## Opphavsrett (ufravikelig)

ALLE oppgaver, tall, masser, vinkler, innpakninger, figurer og kodeeksempler er
**NYSKREVNE** — egne verdier og egne kontekster. Sjangrene og oppgavemalene fra
skjelettet er malen, aldri originaloppgavene. **Skjelettets mønstereksempler er
selv omskrivninger og skal varieres videre, ikke kopieres ordrett inn som
oppgaver.** De lekende innpakningene fra eksamensarkivet (Münchhausen, Dagobah,
Daytona, jojo, ChatGPT-oppgaven, stige-i-låve) er *sjangertrekk* — bygg dine
egne innpakninger i samme ånd, ikke gjenbruk de konkrete oppsettene med samme
tall. Pensumlitteratur refereres (forfatter/verk/begrep), aldri siteres i lengde.

---

## Forbudt-termer (grep-sjekkes — skal gi 0 treff)

Kjør ved ferdigmelding (`sjekk-bok.py` tar regexen som argument 2; den hopper
over `fys1100-0-1`, som er avgrensnings-/metakapitlet):

```bash
python3 scripts/hoyskolebok/sjekk-bok.py fys1100 \
  "Prioritet: perfekt|en A-besvarelse ville|ville ha drøftet|sensorveiledningene fra alle|alle sensorveiledningene|Output:|sentrifugalkraft"
```

- **`Prioritet: perfekt`** — skjelettets prioritetsklasse skrives i boka som
  «høyeste prioritet — dette må sitte».
- **meta-fasit** — «en A-besvarelse ville», «ville ha drøftet»: skriv
  drøftelsen ut.
- **uscopet sensorveiledning-flertall** — «sensorveiledningene fra alle …»,
  «alle sensorveiledningene». Det finnes tre, og de skal navngis (H2023, V2024,
  V2025).
- **`Output:`** — utskrift merkes «**Utskrift:**».
- **`sentrifugalkraft`** — fiktiv kraft i det roterende systemet; boka arbeider i
  inertialsystemer og bruker «sentripetalakselerasjon»/«resultanten inn mot
  sentrum». Eneste tillatte forekomst er en eksplisitt merket motekssempel-
  forklaring i en `warning`.

I tillegg skal disse kontrollene gi 0 avvik:

```bash
python3 - <<'PY'
import json, glob, re, sys
# 1) avgrensede emner må stå sammen med avgrensningen
mistenkt = re.compile(r"lagrange|runge[–\-]?kutta", re.I)
unntak   = re.compile(r"ikke testet|aldri testet|utenfor|beredskap|prioriteres ikke|nedprioritert|kjenne til", re.I)
# 2) (verifiser)-markøren feller porten
forbudt  = re.compile(r"\(verifiser\)", re.I)

def flat(n):
    if isinstance(n, str): yield n
    elif isinstance(n, dict):
        for v in n.values(): yield from flat(v)
    elif isinstance(n, list):
        for v in n: yield from flat(v)

def objekter(n, sti=""):
    if isinstance(n, dict):
        yield sti, " ".join(flat(n))
        for k, v in n.items():
            if isinstance(v, (dict, list)): yield from objekter(v, f"{sti}.{k}")
    elif isinstance(n, list):
        for i, v in enumerate(n): yield from objekter(v, f"{sti}[{i}]")

avvik = 0
for f in sorted(glob.glob("src/lib/data/chapters/fys1100-*.json")
                + glob.glob("src/lib/data/quiz-staging/fys1100-*.json")):
    for sti, t in objekter(json.load(open(f, encoding="utf-8"))):
        for m in forbudt.finditer(t):
            print("FORBUDT", f, sti, m.group(0)); avvik += 1
        if mistenkt.search(t) and not unntak.search(t):
            print("AVGRENSNING", f, sti, repr(t[:160])); avvik += 1
print("avvik:", avvik)
sys.exit(1 if avvik else 0)
PY
```

> **⚠️ ALDRI `grep -o` med `.{0,N}`-kontekst mot kapittelfilene.** JSON-filene er
> kompakt tekst på få, svært lange linjer; kombinasjonen gir kvadratisk arbeid og
> sprengte buffere (17 GB RAM på byggemaskinen 25. juli 2026, som har 8 GB
> fysisk minne). `grep -c` og `grep -l` UTEN `-o` og uten `.{0,N}` er trygt.
> Trenger du kontekst, bruk python-sjekkeren over.

---

## Kryssbok-lenker (verifisert mot disk 26. juli 2026 — alle filene finnes)

Lenkeform `[tittel](/<courseId>/<id>)`. **Titlene under er de faktiske
kapitteltitlene og skal brukes ordrett.** Lenk ALDRI til en fil som ikke finnes
(`sjekk-bok.py` fanger døde lenker).

| Brukes i | courseId | id | Tittel |
|---|---|---|---|
| 1.1 | `r1` | `r1-1-2` | Potenser og logaritmer |
| 1.2, 7.2 | `r1` | `r1-3-3` | Derivasjonens definisjon |
| 1.2 | `r1` | `r1-4-1` | Derivasjonsregler |
| 1.2 | `r1` | `r1-4-3` | Kjerneregelen |
| 1.2, 7.2 | `r1` | `r1-7-5` | Derivasjon av trigonometriske funksjoner |
| 1.2 | `r2` | `r2-1-4` | Rekker og summasjon |
| 1.2 | `r2` | `r2-1-5` | Uendelige rekker og konvergens |
| 2.1, 7.1 | `r2` | `r2-6-2` | Derivasjon av vektorfunksjoner |
| 2.1 | `r2` | `r2-6-3` | Hastighet og akselerasjon |
| 2.2 | `r2` | `r2-6-1` | Parameterframstilling av kurver |
| 2.1, 5.1 | `r2` | `r2-2-4` | Bestemt integral som grenseverdi |
| 2.1, 5.1 | `r2` | `r2-2-5` | Analysens fundamentalsetning |
| 7.1, 7.3 | `r2` | `r2-3-1` | Variabelskifte (substitusjon) |
| 7.3 | `r2` | `r2-2-3` | Integrasjon av 1/x og eksponentialfunksjoner |
| 8.1, 8.3 | `r2` | `r2-3-4` | Numerisk integrasjon |
| 8.1 | `r2` | `r2-3-5` | Programmering av integrasjon |
| 2.2, 3.2 | `r1` | `r1-7-1` | Trigonometriske funksjoner og enhetssirkelen |
| 4.2 | `r1` | `r1-7-4` | Trigonometriske identiteter |
| 3.1 | `r1` | `r1-6-1` | Vektorer i planet |
| 3.1 | `r1` | `r1-6-2` | Vektorregning |
| 6.1 | `r2` | `r2-5-1` | Vektorer i tre dimensjoner |
| 6.1 | `r2` | `r2-5-2` | Vektorkoordinater og regning |
| 5.1 | `r2` | `r2-5-3` | Skalarproduktet |
| 6.1 | `r2` | `r2-5-4` | Kryssproduktet |
| 2.1, 3.1 | `fysikk2` | `fysikk2-1-1` | Vektorer og komponenter |
| 2.2 | `fysikk2` | `fysikk2-1-2` | Bevegelse i to dimensjoner |
| 2.2 | `fysikk2` | `fysikk2-1-3` | Kastering - horisontal og skrå |
| 4.1 | `fysikk2` | `fysikk2-1-4` | Sirkelbevegelse og sentripetalkraft |
| 8.1 | `fysikk2` | `fysikk2-1-5` | Numerisk modellering av bevegelse |
| 9.1 | `fysikk2` | `fysikk2-2-1` | Newtons gravitasjonslov |
| 9.1 | `fysikk2` | `fysikk2-2-3` | Satellittbevegelse og romfart |
| 9.1 | `fysikk2` | `fysikk2-2-5` | Gravitasjon og energi |
| 10.1 | `fysikk2` | `fysikk2-6-1` | Spesiell relativitetsteori – postulater |
| 10.1 | `fysikk2` | `fysikk2-6-2` | Tidsdilatasjon |
| 10.1 | `fysikk2` | `fysikk2-6-3` | Lengdekontraksjon |
| 10.1, 1.2 | `fysikk2` | `fysikk2-6-4` | Relativistisk energi og masse |

**To korreksjoner mot skjelettet (verifisert 26. juli 2026 — skjelettet er feil
her):**

1. Skjelettet lenker «Unnslippningsfart og satellittbaner» til
   `fysikk2-2-4`. Den fila heter i virkeligheten **«Keplers lover»**. Bruk i
   stedet **`fysikk2-2-3` «Satellittbevegelse og romfart»** (fluktfart og
   satellittbaner) og **`fysikk2-2-5` «Gravitasjon og energi»** (unnslipningsfart
   fra energibetraktning). `fysikk2-2-4` kan lenkes, men da med tittelen
   «Keplers lover».
2. `fysikk2-1-3` har **bindestrek**, ikke tankestrek, i tittelen: «Kastering -
   horisontal og skrå». Bruk tittelen ordrett.

**Refereres i KLARTEKST, aldri som lenke** (ikke bygget i systemet):
**IN1900** (Python-grunnlag: lister, `for`-løkker, NumPy) og **Fysikk 1** (VGS).
Skriv «du kan ha møtt dette i Fysikk 1 på videregående» — aldri en markdown-lenke.

Interne lenker: `[kap. X.Y](/fys1100/fys1100-X-Y)`. Lenker til kapitler som
ennå ikke er skrevet, legges inn først når fila finnes på disk — koordineres av
byggeleder ved wiring.

---

## Tekniske feller (de fire som faktisk har ødelagt bøker)

**T1. LaTeX i JSON = dobbel backslash.** `\mathbf{F}` må stå som `\\mathbf{F}` i
JSON-fila. Generer derfor ALLTID med `json.dump` og skriv kildeteksten som
Python-strenger (rå strenger `r"$\mathbf{F}$"` eller doble backslasher). Skriv
aldri JSON-fila for hånd. En enkelt `\m` gjør hele fila ugyldig eller — verre —
gyldig med feil innhold.

**T2. `$`-fella.** Ethvert dollartegn som ikke er matte MÅ escapes som `\$`:
valuta i Fermi- og estimeringsoppgaver, priser i prosa, `$`-tegn i tekst om
Excel-referanser eller Python-strenger. To uescapede `$` på samme linje pares av
rendreren og setter alt imellom som formel. `$` inne i backticks eller en
```` ``` ````-blokk er trygt.

**T3. `chapterNumber` alltid del-basert.** «7.2», aldri «22». Prøvekapitler:
«7.P». Lineær nummerering ødelegger bokforsidens seksjonsinndeling.

**T4. Ingen tom `collapsible`.** Feltet heter `content` og skal inneholde
blokker. En `text`-nøkkel eller tom array rendrer som en tom boks.

**T5. Ingen dupliserte blokk-id-er** innen et kapittel (porten sjekker), og
ingen dupliserte quiz-spørsmål på tvers av kapitler i samme del.

**T6. Unicode-brøker og rå LaTeX i prosa** er forbudt: skriv `$\tfrac12$`, ikke
«½», og aldri `\frac{1}{2}` utenfor `$…$` (det rendres som rå tekst til
leseren — dette har skjedd i live bøker).

---

## Kvalitetskrav før ferdigmelding (per agent)

1. `python3 -c "import json;json.load(open('fil'))"` på HVER fil du har skrevet
   (kapittel + quiz-staging).
2. **Kvotetelling** mot §K: toppnivå `definition`-blokker med `title` =
   flashcard-kvoten; antall quiz-spørsmål = quiz-kvoten. Aldri under.
3. **Regnekontrakten §R:** hvert talleksempel etterregnet med `python3`, hvert
   grensetilfelle sjekket numerisk, hver fortegns-/entydighetspåstand
   parametersjekket.
4. **Python-kontrakten §P:** all kode faktisk kjørt; arrays forhåndsallokert;
   `v[i]`-indeksdisiplin; Euler–Cromer (fart før posisjon, oppdatert fart);
   `abs(v)*v` i drag; begge komponenter i 2D; metodevalget begrunnet i tekst;
   håndskrevet eksamensversjon vist ved siden av referanseversjonen.
5. **Notasjonskontrakten §N:** vektorer fete, skalarer ikke; retning oppgitt på
   hver vektorstørrelse; enhet og 2–3 gjeldende siffer på hvert tallsvar;
   symbolkollisjonene ($G$, $L$, $T$, $r$) håndtert og nevnt i symbollisten.
6. **Formelark-kontrakten §A:** hver formel i Symbol- og formellisten merket
   `[formelarket]` / `[Rottmann]` / `[må kunne utledes]`; ingen formel
   presentert som puggestoff.
7. **Sensorkontrakten §S:** hver `solution` åpner med begrunnelsen for
   metodevalget; hver bruk av en bevaringslov skriver ut HVORFOR den gjelder;
   flere gyldige metoder vist side om side der sensor forventer det.
8. **Figurkontrakten §G:** hvert figurløfte innfridd med ekte SVG; ingen fiktiv
   sentripetalkraft utenfor merkede moteksempler;
   `python3 scripts/hoyskolebok/sjekk-figurer.py fys1100` grønn;
   `npx tsx scripts/upload-media-storage.ts` kjørt etter nye figurer.
9. **Læringsløkke:** `content[]` veksler teori→eksempel→oppgave med `exercise`
   inline — ikke all teori topp / alle oppgaver bunn.
10. **Forkunnskapsdekning:** gå gjennom hver `exercise` og bekreft at den bare
    hviler på stoff introdusert tidligere i kapitlet eller i en referert
    forkunnskap.
11. **Nybegynner-inngang:** alle koder (A–K, #1–#15, O1–O5) og alle fysikktermer
    forklart ved første bruk per kapittel; ingen kald kode i `competenceGoals`
    eller første tekstboks.
12. **Symbol- og formelliste** finnes i hvert teori-/drillkapittel, med den
    literale tittelen «Symbol- og formelliste» og åpningsnotisen.
13. **Forkunnskaper-blokk** med overskriften `## Forkunnskaper — sist du var her`
    i hvert kapittel utenom Del 0.
14. **Ingen tom collapsible**; ingen dupliserte blokk-id-er.
15. **Kap-referanser** i fasiter/forkunnskaper er markdown-lenker til
    eksisterende filer.
16. **Fasitmønster** sjekket i alle ensartede fasitlister — riktig svar varierer
    posisjon (aldri «alle a», aldri «alle felle»).
17. **Hints** utfylt på alle exercises (unntatt den merkede kalde banken i 11.1);
    første hint røper aldri konklusjonen.
18. **Frekvenstall** = telte belegg, **nevner 7**; usikre tall skrevet som spenn.
19. **Kildepåstander** følger «Sannferdig kildenote»: tre navngitte
    sensorveiledninger (H2023, V2024, V2025), aldri flere; ingen ordrett
    gjengivelse fra løsningsforslag.
20. **Øktmerking** i kapitler > 45 min; prøvekapitler deklarerer «4 prøver à ~X
    min» + deling over flere kvelder.
21. Porter, alle grønne:
    `python3 scripts/hoyskolebok/status-bok.py fys1100` ·
    `python3 scripts/hoyskolebok/sjekk-bok.py fys1100 "<forbudt-regex>"` ·
    `python3 scripts/hoyskolebok/sjekk-latex.py fys1100` ·
    `python3 scripts/hoyskolebok/sjekk-skjelett.py fys1100` ·
    `python3 scripts/hoyskolebok/sjekk-kode.py fys1100` (kodeporten — Del 8 og
    alle kodeledd) · `python3 scripts/hoyskolebok/sjekk-figurer.py fys1100`.
22. **Ferdigmelding krever rendringsbevis:** `npm run build` grønn + prod-server
    (`PORT=3057 npm run start`) og `curl` mot kapittel- og narrativ-ruter (200 +
    kapittelspesifikk streng). ALDRI meld ferdig uten dette.

# Byggekontrakt: ECON1210 Mikroøkonomi 1 — teknisk kontrakt for kapittelforfattere

Gjelder ALLE forfatter-agenter som bygger kapitler til `econ1210`. Faglig innhold
styres av `SKJELETT.md` (per-kapittel-DNA + identitetsseksjon) — les ditt kapittels
avsnitt der nøye, pluss `EKSAMENSANALYSE.md` ved behov. Denne kontrakten definerer
format og krav. Arketype: **DNA-regnefag** (`DNA-regnefag.md`), undertype
**grafisk-kvantitativt modellfag med fast oppgavemal** (figur-i-ord + firetrinns-
metoden er kjernehåndverket).

## LÆRINGSLØKKE-KONTRAKT (ufravikelig byggekrav — produkteier 9. juli 2026)

Fra skjelettets topp, tas inn her som bindende byggekrav:

- HVERT kapittels `content[]` struktureres som gjentatte små løkker
  **Teori → Eksempel → Oppgave**. `exercise`-blokker plasseres INLINE i
  `content[]` rett etter teorien/eksempelet de trener — ALDRI all teori øverst
  med oppgavene samlet nederst.
- **Ingen usett forkunnskap:** ingen oppgave får kreve et begrep, en regel, en
  formel eller en metode som ikke er introdusert tidligere i kapitlet (t.o.m.
  eksempelet rett foran) eller i et tidligere kapittel referert i
  Forkunnskaper-blokken. Flytt teoribiten tidligere ved behov; bygg
  oppgaveprogresjonen bit for bit.
- **Unntak:** øvingseksamen-/prøve-/modellbesvarelseskapitler (kap. 8.3–8.5 og
  prøvekapitlene) følger sin egen arketype (komplett oppgavesett først,
  løsninger i collapsibles).
- Kvotene og innholdskontraktene i skjelettet er UENDRET — løkka styrer kun
  REKKEFØLGEN.

## Filplassering

Ett JSON-dokument per kapittel: `src/lib/data/chapters/<kapittel-id>.json`
(f.eks. `econ1210-2-1.json`). IKKE rør `_registry.json`, `_all.json`,
`textbook-courses*.ts` eller `quiz-data*.ts` — wiring gjøres sentralt (fase 5).
Generer JSON via python `json.dump` (garantert gyldig escaping; husk å escape
`"` i norske sitattegn og doble backslash i LaTeX).

## Kapittel-JSON (toppnivå)

```json
{
  "id": "econ1210-3-1",
  "courseId": "econ1210",
  "chapterNumber": "3.1",
  "title": "…(fra skjelettet)…",
  "description": "…(én setning fra skjelettet)…",
  "estimatedMinutes": 60,
  "competenceGoals": ["utlede delingsformelen c/(b+c) og tolke den verbalt", "…"],
  "content": [ …blokker… ],
  "exercises": []
}
```

`chapterNumber` = skjelettets `number` (`<del>.<nr>`, f.eks. `0.1`, `3.1`;
prøvekapitler `<del>.P`). `competenceGoals`: 2–4 «kunne …»-formuleringer avledet
av kapittelets innholdskontrakt. `exercises` er alltid tom liste (oppgaver ligger
som `exercise`-blokker inline i `content`).

## Blokktyper (eksakte felt — referanse: `src/lib/data/chapters/econ1310-2-1.json`)

- `text`: `{ "id", "type": "text", "content": "markdown + LaTeX" }`
- `definition`: `{ "id", "type": "definition", "title": "Begrepet", "content": "forklaring" }`
  — **title er OBLIGATORISK** (flashcards genereres KUN fra toppnivå
  definition-blokker med title).
- `theorem`: `{ "id", "type": "theorem", "title": "Navn på resultat", "content": "…" }`
- `example`: `{ "id", "type": "example", "title": "Eksempel N: …", "problem": "…", "solution": "…" }`
  (solution = A-besvarelse med figur i ord).
- `tip` / `warning`: `{ "id", "type", "title", "content" }`
- `exercise`: `{ "id", "type": "exercise", "exercise": { "id", "number", "type": "classic", "difficulty": "lett"|"middels"|"vanskelig", "task", "solution", "hints": [] } }`
  — ALDRI `solutionVideo`/`allowsUpload`/`allowsCanvasDrawing`/`answer`. Ikke bruk
  `subTasks`-feltet (skriv deloppgaver a)/b)/c) inline, se Leserkrav).
- `image`: `{ "id", "type": "image", "src": "/images/textbook/econ1210/<navn>.svg", "alt": "…", "caption": "…" }`
  — kun til de få standard-SVG-ene (se «Figurspråket» under). Selve
  figur-i-ord-beskrivelsen ligger uansett i prosaen/`example`-solution.
- `collapsible`: `{ "id", "type": "collapsible", "title", "buttonText": "Vis …", "content": [blokker] }`
  — brukes til **Symbol- og formelliste**, sekundærstoff-bokser, prøve-
  collapsibles og repetisjon.

Blokk-id-er: `<kapittel-id>-<løpenavn>`, f.eks. `econ1210-3-1-def-1`,
`econ1210-3-1-ex-3`. Unike innen kapitlet.

## Obligatorisk kapittelstruktur (teorikapitler — per DNA-regnefag + skjelettet)

Alltid, i denne rekkefølgen først i kapitlet:
1. `tip` **Eksamensvinkel** (frekvens, vekt, sjangre — tallene fra skjelettet).
2. `text` **Forkunnskaper** (kapitler i boka med kryssbok-lenker
   `[tittel](/bok/econ1210/<chapterId>)` — KUN til kapitler som finnes i
   `src/lib/data/chapters/`; «kan leses uten forkunnskaper» hvis ingen).

Deretter DNA-regnefag-løpet, i læringsløkker: `text` motivasjon/hverdagsanker →
`definition`/`theorem` kjernebegreper (flashcard-kilden, toppnivå med title!) →
`text` utledning med intuisjon (kun det skjelettet merker «utledes aktivt», f.eks.
delingsbrøken og MI-dekomponeringen) → `example` ×2–4 med stigende nivå (siste på
eksamensnivå, hver med figur i ord) → `warning` **Typiske feil** (fra
feilkatalogen) → 6–12 `exercise` inline stigende (lett→middels→vanskelig; de
vanskelige = eksamenskloner av skjelettets sjangre).

Og SIST i kapitlet: `collapsible` **Symbol- og formelliste** (title «Symbol- og
formelliste», buttonText «Vis symboler og formler»): første linje «Oppslagsverk —
alt her forklares underveis i kapitlet.», deretter markdown-tabell
`| Symbol | Betydning |` + «**Formler i dette delkapitlet:**» med display-LaTeX +
tolkning. ALLE symboler/formler brukt i delkapitlet — per delkapittel, ikke arv.
Unntak kun for helt symbolfrie kapitler.

Og alltid til slutt: begrepsbank-`definition`-blokker til flashcard-kvoten (hver
stor begrepsbank åpner med standard-notisen «flashcard-/repetisjonsstoff — hopp
trygt over ved førstegangslesing; tidsanslaget gjelder kjernestoffet») +
`collapsible` repetisjon (teorikapitler). Collapsibles skal ALDRI være tomme —
`content` er feltnavnet og skal ha blokker.

Drill-/eksamenskapitler (1.6, 3.4, 4.4, 5.5, 8.1, 8.3–8.5) følger DNA-varianten:
løsningsoppskrift (algoritme) → gjennomregnet eksamenscase med sensor-margnotater
→ 8–15 oppgaver som roterer sjangrene.

## Leserkrav (ufravikelig — full ordlyd i README «Leserkrav»; SKAL i førsteutkastet)

- **Kun eksamensrelevant stoff**; «kjenne til» sist og merket.
- **Korte avsnitt** (2–4 setninger), «du»-form, konkret norsk knagg (strømprisen,
  ferjesambandet, avgiften) før formalismen — presisjon vinner ved tvil.
- **Meningsfulle oppgaver**: hver oppgave synlig eksamensforankret
  («(Eksamenssjanger E — stykkskatt, 94 % av settene.)») eller åpenbart relevant.
- **Læringsløkke Teori → Eksempel → Oppgave** med `exercise`-blokker INLINE.
- **Ingen usett forkunnskap** (se løkke-kontrakten øverst).
- **Deloppgaver på egen linje, fet merking:** a), b), c) i `task`/`solution` HVER
  på egen linje — `…\n\n**a)** …\n**b)** …`. ALDRI bak hverandre i løpende tekst;
  ikke bruk `subTasks`-feltet.
- **Nybegynner-inngang / ingen uforklart sjargong:** HVER kode (sjangerkode A–M,
  feilkode #N, karakterbokstav) og all karaktersjargong («C-stoff»/«A-markør») +
  insider-term forklares i klarspråk ved FØRSTE bruk; ingen kald kode i
  `competenceGoals`/læringsmål eller i aller første tekstboks. Del 0 (kap. 0.1) har
  en **«Slik leser du denne boka»-orienteringsboks (type `text`/`tip`, ALDRI
  `definition`)** med karakterskalaen (A–F, se under), kompakt kodeliste (A–M +
  feilkodene) og at feil har et samlet register (feilkatalogen #1–#12).
- **Stokket flervalg i prøvetekster:** statiske flervalg i prøve-collapsibles har
  stokkede fasit-bokstaver (ALDRI «alle a»); prøve-tipen sier hvor flervalget bor.
  Quiz-filene beholder options[0]-invarianten.
- **Del 0-pakken:** «Lite tid?»-boks (hurtigrute 3–5 dager + ukeplan fra summerte
  `estimatedMinutes` + at anslag er LESEtid, ×1,5 ved håndskriving) + kildenote for
  frekvens-empirien (16 ordinære sett V2018–H2025 + 16 sensorveiledninger + 10
  utsatt-sett + 6 utsatt-veiledninger — fra EKSAMENSANALYSE.md, ALDRI oppdiktet) +
  prosedyre-/sjangerkort på ÉN side (kortet selv, ikke lenkeliste) + deltidsrute
  (10–12 uker) + «lese mye, skrive lite»-boks.
- **Klikkbare kap-referanser:** «kap. X.Y» i forkunnskaper og fasiter =
  markdown-lenke `[kap. X.Y](/bok/econ1210/econ1210-X-Y)`; død «se kapittel»-tekst
  er FORBUDT (aldri lenker i title-felt).
- **Karakter-realisme:** «C er en god og vanlig karakter» eksplisitt i Del 0;
  «Prioritet: perfekt» FORBUDT (skriv «høyeste prioritet»). Modellbesvarelser
  ærlig merket (en «C-besvarelse» ER C) + minst én autentisk B-/midtnivå-
  besvarelse. NB: «PERFEKT» i skjelettets deltitler er en *prioritetsklasse*
  (perfekt/kunne/kjenne = nivå 1/2/3), IKKE en oppfordring om plettfri besvarelse
  — ramm den inn som «må sitte / høyeste prioritet» i prosaen.
- **Selvdiagnose:** avkryssbar sjekkliste (☐) etter hver prøvefasit; lett
  innstegsoppgave (difficulty lett, ren gjengivelse) tidlig i teorikapitler der
  første oppgave ellers er full eksamenssjanger.
- **Hverdagsanker + verdens-caser:** abstrakte kjernetemaer åpner med hverdagsanker
  før apparatet; eksempler er verdens-caser (strøm, ferje, avgift, oppdrett), aldri
  «en medstudent skriver …»-metaeksempler.
- **Tidsbudsjett-konsistens:** avvik mellom deklarert oppgavetid og sum deltider
  forklares. Øvingseksamenene deklarerer tidsbudsjettet per oppgave (jf. 8.3–8.5).
- **Hint + difficulty-spredning:** alle exercises har utfylte `hints` (første =
  formel/første grep, ALDRI konklusjonen); boka har noen «(krevende)»-merkede
  oppgaver + én merket kald bank UTEN hint (fasit = momentliste) i
  eksamenstreningsdelen (kap. 8).
- **Fasitmønster-variasjon:** ALLE ensartede fasitlister varierer — aldri «alle a»,
  aldri «alle riktig»/«alle felle». Distraktorer gjengir ALDRI bokas egne nyanser
  som «galt» svar (nær-sanne distraktorer forklares i fasit-kommentaren).
- **Meta-fasit forbudt:** «en A-besvarelse ville ha drøftet …» erstattes av
  faktisk utskrevet drøftelse. Minst én modellbesvarelse lander SKARPT.
- **Signalbokser ETTER oppgaven** (varsel om hva en drilloppgave tester).
- **Frekvenstall = telte belegg:** «N av M sett» stemmer eksakt med belegg-listen.
  **Sannferdige kildepåstander (UFRAVIKELIG):** kildenoten og all omtale nevner KUN
  kildetyper som faktisk finnes i arkivet (dette faget HAR sensorveiledninger — 16
  ordinære + 6 utsatt — så de kan nevnes); modellbesvarelser omtales som nyskrevne,
  aldri som ekte studentbesvarelser.
- **Faglige påstander verifiseres FØR skriving** (regnefag: numerisk parametersjekk
  av fortegns-/entydighetspåstander — se «Matematisk sannhetskontroll» under).
- **Øktmerking + prøvedeling + feilkode-gloss:** kapitler > 45 min har tidsanslag
  per løkke/pausepunkt-markører; lange modellbesvarelser (øvingseksamenene à 240
  min) har «— naturlig pausepunkt —»; feilkoder glosses ved første bruk PER
  KAPITTEL; tunge kapitler har «Sist du var her»-forkunnskapsblokk som VISER
  nøkkelformlene; boka har sitt samlede oppslagskort (regnefag: **formel-minimum**
  — se studieguidens §6 formelark).

## Fagspesifikk stil (ufravikelig for ECON1210 — fra skjelettets identitetsseksjon)

### Modellstandard (KRITISK KONTRAKTSLINJE — ufravikelig)

- **CORE-anleggsmodellen er bokstandard for tilbudssiden, IKKE standard
  produsentteori.** Tilbudskurven bygges på anlegg med *konstante enhetskostnader*
  (= marginalkostnader) og gitt kapasitet; markedets T-kurve fremkommer ved å
  rangere anleggene etter enhetskostnad (høyere pris → flere anlegg lønnsomme).
  Alle T-skift forklares som endrede enhetskostnader (parallellskift) eller endret
  antall anlegg — dette er *mekanismen bak skiftet* som sensor honorerer mer enn
  selve pilen. Pensum fra H2024 (*The Economy — Microeconomics* kap. 8.4).
- **ALDRI** bygg fremstillingen på Krugman & Wells' produsentteori
  (gjennomsnittsproduktivitet, U-formede gjennomsnittskostnader). Klassisk
  produsentteori omtales KUN som markert sekundærstoff («bør kjenne», i en
  `collapsible`) i kap. 1.2. Grep etter «gjennomsnittskostnad» utenfor
  kap. 1.2/3.3/5.3/5.4 skal gi null treff.

### Notasjonsstandard

- Mengde $x$, pris $p$ (arbeidsmarked: $N$ og $w$; konsumentteori: $x_1, x_2$ med
  $p_1, p_2$). Kurvene heter **E-kurven** (etterspørsel) og **T-kurven** (tilbud) —
  ALDRI D/S.
- Overskudd: **KO** (konsument), **PO** (produsent), **SO** (samfunnsøkonomisk).
  Marginalinntekt **MI**, marginalkostnad **MK** (MR/MC kun i parentes ved første
  forekomst).
- Lineære funksjoner alltid med mengde som funksjon av pris: etterspørsel
  $x = a - bp$, tilbud $x = cp - d$ — ALDRI invers form (`p = … − …x` som
  oppgaveform er forbudt).
- Skatt $t$, subsidie $s$, fast kostnad $B$, konstant enhetskostnad $c$.
- Likevekt $p^* = \frac{a+d}{b+c}$; kjøpers andel av skatt/subsidie
  $\frac{c}{b+c}$, selgers andel $\frac{b}{b+c}$.
- Elastisitet $\varepsilon = \frac{\Delta x}{\Delta p}\cdot\frac{p}{x}$.
  Monopol: $\text{MI} = p + \frac{\Delta p}{\Delta x}\,x$; MI-kurven dobbelt så
  bratt som lineær E. Naturlig monopol: $c(x) = cx + B$, vilkår KO $> B$.
  Nåverdi: $\text{NV} = \frac{y}{(1+r)^t}$ og evigvarende $\frac{y}{r}$.
- **Ingen derivasjon noe sted** — alt løses med lineær algebra og geometri
  (fasitene sier eksplisitt at derivering av MI ikke forventes). LaTeX i `$...$`/
  `$$...$$`, dobbel backslash i JSON (`\\frac`); ingen unicode-brøker.

### Figurspråket (KRITISK SJANGERREGEL — samme løsning som econ1310)

«Forklar ved hjelp av en figur» er hovedinstruksen i nesten alle deloppgaver, og
sensorveiledningene understreker at **figur uten forklaring eller forklaring uten
figur er halvt svar**. DNA-regnefagets figurkrav («ingen grafisk drill uten figur;
lovede figurer finnes») innfris slik — nøyaktig som den bygde søsterboka econ1310
gjør det i praksis:

1. **Figur-i-ord er standarden (obligatorisk i HVERT figursvar).** Hvert `example`
   og hvert løsningsforslag som nevner en figur inneholder (i) en presis
   **figurbeskrivelse i ord** — akse-konvensjon ($p$ vertikalt, $x$ horisontalt),
   kurvene navngitt (E fallende, T stigende), gamle og nye likevekter markert med
   bokstav og stiplede hjelpelinjer til aksene, avstander/arealer/trekanter
   navngitt — OG (ii) den **verbale mekanismen** (hva som driver skiftet/utfallet).
   Aldri figur uten forklaring, aldri forklaring uten figur.
2. **Faktiske SVG-er kun for de få mest gjentatte standarddiagrammene.** econ1310
   løser dette med `image`-blokker som peker på håndtegnede `.svg`-filer under
   `/images/textbook/econ1310/` (6 stk: markedskryss/likevekt, skift, m.fl.), hver
   med detaljert `alt` OG `caption` som *selv* er en fullstendig figur-i-ord.
   Format identisk her: `{ "type": "image", "src":
   "/images/textbook/econ1210/<navn>.svg", "alt": "<full figur-i-ord>", "caption":
   "<full figur-i-ord + mekanisme>" }`. SVG-ene lages sentralt; nye SVG-er lastes
   opp med `npx tsx scripts/upload-media-storage.ts` FØR deploy (jf. byggeplanen).
   Standardfigurene å vurdere SVG for (studieguidens figurbibliotek, §7):
   markedskryss; kurveskift; skatt/subsidie med deling og dødvektstrekant; makspris
   med kortside; Pigou; monopol med MI (E, MI dobbelt så bratt, MK, $x_M$, $p_M$
   avlest på E); naturlig monopol; handelsåpning; budsjettlinje/indifferenskurver;
   spillmatrise.
3. **Regelen for forfatteren:** en figur *kan* mangle SVG (da bærer figur-i-ord
   hele leveransen), men en figur får ALDRI mangle figur-i-ord-beskrivelsen. Der
   du refererer til en SVG (`image`-blokk), skal den SVG-en faktisk finnes eller
   være bestilt sentralt — «lovede figurer finnes». Verifikator sjekker at ingen
   «grafisk drill» står uten figur (SVG eller figur-i-ord).

### Matematisk sannhetskontroll (DNA-regnefag)

Alle fortegns-/entydighetspåstander parametersjekkes numerisk (python3) i fullt
parameterrom FØR de skrives: at kjøpers andel $\frac{c}{b+c}$ øker når T er
brattere; at delingsandelene summerer til hele $t$/$s$; at subsidie-paradokset
(SO faller) holder for alle positive $b,c,s$; at MI $< p$ for monopol; at
lekkasjen gjør mengdefallet mindre enn anleggsbortfallet. Talleksemplenes
likevekter etterregnes i BEGGE funksjoner. Kalibreringsverdiene fra reelle
fasiter (skjelettet §3) brukes KUN til å velge vanskelighetsgrad — aldri som
oppgavetall.

### Sjangerkoder (bruk i oppgavemerking og eksamensbelegg — fra skjelettet §3)

**A** begrepsforklaringer · **B** markedslikevekt grafisk/algebraisk · **C**
elastisitet med tolkning · **D** kurveskift-batteri · **E** stykkskatt/-subsidie
med deling · **F** velferdsvurdering · **G** prisregulering · **H** klimapolitikk ·
**I** monopol/markedsmakt · **J** arbeidsmarked · **K** markedssvikt-katalogen
(«begrunn inngrepet») · **L** «som samfunnsøkonom»-drøfting · **M** dvale-sjangre
(spillteori, nåverdi, konsumentteori, handel). Prioritetsklasser: **perfekt**
(nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

### Feilkatalogen (bruk i «Typiske feil»-blokker — glosses ved første bruk per kapittel)

#1 skift forvekslet med bevegelse langs kurven · #2 feil kurve/feil skiftretning ·
#3 «hvem betaler formelt»-fellen (deling avhenger IKKE av hvem avgiften legges på) ·
#4 subsidie-paradokset (påstå SO øker fordi KO+PO øker) · #5 lese monopolprisen av
MI-kurven i stedet for E-kurven · #6 tall/brøk uten verbal tolkning · #7 glemme
kortside-regelen / gjennomsnittskostnads-argumentet · #8 glemme lekkasjen · #9
SO-definisjonen («KO+PO i likevekt» uten mer) · #10 miljøoppgave som moralessay
uten kjerneargumentet (lik pris → like marginale rensekostnader → billigst kutt) ·
#11 glemte tredjeparter / glemt statsutlegg · #12 umerkede figurer.

### Forbudt-termer (grep-sjekkes — skal gi 0 treff)

`D-kurven`, `S-kurven`, `q =` (som mengdesymbol), `MR =` (som primærterm — MI er
standard), invers etterspørsel på formen `p = … − …x` (som oppgaveform),
`Cournot`, `Bertrand` (unntatt ÉN kvalitativ setning i kap. 5.4), nyttefunksjons-
algebra i kap. 7.1, og `gjennomsnittskostnad` utenfor kap. 1.2/3.3/5.3/5.4.
Påkrevd i stedet: $x$, $p$, E-kurven, T-kurven, KO/PO/SO, MI, MK, $t$, $s$, $B$,
$c$, $x = a - bp$, $x = cp - d$, $\frac{c}{b+c}$.

## Prøvekapitler

Sju prøvedeler: **[1, 2, 3, 4, 5, 6, 7]** — én prøvekvote (4 prøver) per temadel
1–7, jf. skjelettets prøve-kvote-linjer og §4. **Del 0 er metadel (ingen prøve).**
**Del 8 har ingen egne prøver** — den består av begrepsdrill, aktualitetstrening og
3 komplette øvingseksamener (kap. 8.3–8.5), som til sammen med prøvene dekker
sjangrene A–M minst én gang.

Prøvekapittel: id `econ1210-<del>-prove`, chapterNumber `<del>.P`, tittel «Prøver
til del <del>: <deltittel>»: `tip` (dekning + tidsbruk; deklarerer «4 prøver à ~X
min» + «kan trygt deles over flere kvelder — én prøve per økt») + `text`
Forkunnskaper + fire `collapsible` («Prøve 1»–«Prøve 4», buttonText «Vis prøve N»)
med nyskrevne oppgaver i eksamens sjangre og full fasit (A-besvarelse med
figurbeskrivelser i ord + poengfordeling). Flervalg i prøve-collapsibles: stokkede
fasit-bokstaver (aldri «alle a») og prøve-tipen sier hvor flervalget bor. Etter
hver prøvefasit: avkryssbar selvdiagnose-sjekkliste (☐). Kap-referanser i fasitene
som markdown-lenker. Ingen begrepsbank/quiz-kvote for prøvekapitler.

## Øvingseksamener (kap. 8.3–8.5)

Tre komplette 4-timers sett (240 min) etter de tre malene (klassisk 20/50/30,
post-H2024 10/50/40, H2025 10/60/30 — se skjelettet §4). Struktur: nyskrevet
komplett oppgavesett i eksamensform → `collapsible` A-besvarelse per oppgave (med
figurbeskrivelser i ord og «— naturlig pausepunkt —» i lange løsninger) + `tip`
med vekting og tidsbudsjett per oppgave (f.eks. 48/120/72 min). Alle tall pene og
nyskrevne.

## Quiz-kvoten

`src/lib/data/quiz-staging/<kapittel-id>.quiz.json`:
`[{ "question", "options": [4 stk, options[0] ALLTID riktig], "explanation" }]`.
Kvote per kapittel = skjelettets kvotesammendrag (AUTORITATIVT — aldri overstyr).
Nøyaktig 4 options. Distraktorer = reelle feller fra feilkatalogen (fortegnsfeil,
skift/bevegelse, «hvem betaler formelt», pris fra MI-kurven, glemt lekkasje) —
ikke tullesvar. Runtime stokker.

### Kvotetabell (AUTORITATIV — bindende total, aldri overstyr)

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1 | 10 | 10 | 0 (metadel) |
| 1 | 1.1–1.6 | 125 | 105 | 4 |
| 2 | 2.1–2.2 | 40 | 40 | 4 |
| 3 | 3.1–3.5 | 100 | 75 | 4 |
| 4 | 4.1–4.4 | 80 | 80 | 4 |
| 5 | 5.1–5.5 | 80 | 70 | 4 |
| 6 | 6.1–6.3 | 35 | 30 | 4 |
| 7 | 7.1–7.3 | 35 | 40 | 4 |
| 8 | 8.1–8.5 | 40 | 55 | 0 (3 øvingseksamener) |
| **Sum** | **34 kap.** | **545 ✓ (≥500)** | **505 ✓ (≥500)** | **28 + 3 ØE** |

**Bindende total: quiz 545 · flashcards 505.** Kvotene er minimum per kapittel;
forfatteren kan overskyte, aldri underskride. Fordelingen speiler frekvens: Del 1 +
Del 3 (FK-kjernen som bærer 50–60 % av eksamenspoengene) står for 225 av 545 quiz.
options[0] = riktig i staging; runtime stokker.

## Opphavsrett (ufravikelig)

Alle oppgaver, case og faktum er NYSKREVNE (egne tall, egne bransjer, egne
kontekster) — eksamenssjangrene er malen, ALDRI originaloppgavene. Pensum
(Krugman & Wells, CORE / *The Economy*, NOU 2015:15) refereres, aldri siteres i
lengde. Skjelettets mønstereksempler er selv omskrivninger og skal varieres videre,
ikke kopieres ordrett inn. Kalibreringsverdiene fra reelle fasiter brukes kun til å
velge vanskelighetsgrad, aldri som oppgavetall. Referanser forfatteren er usikker
på merkes `(verifiser)` og løses i fase 6.

## Kvalitetskrav før ferdigmelding (per agent)

1. `python3 -c "import json; json.load(open('…'))"` på hver fil; ingen trailing
   commas, ingen uescapede `"` eller `\` i strenger (LaTeX-backslash = `\\`).
2. Kvotetelling mot skjelettet (toppnivå definition-blokker med title + quiz) —
   mot kvotetabellen over (autoritativ, total 545/505).
3. Forbudt-termer-grep = 0 (listen over); anleggsmodellen brukt overalt
   (`gjennomsnittskostnad` kun i 1.2/3.3/5.3/5.4).
4. Alle kryssbok-lenker peker på eksisterende kapittelfiler i
   `src/lib/data/chapters/`.
5. **Læringsløkke:** `content[]` veksler teori → eksempel → oppgave i løkker med
   `exercise`-blokker INLINE (ikke all teori topp / alle oppgaver bunn). Unntak:
   prøve-/øvingseksamenkapitler.
6. **Forkunnskapsdekning:** hver `exercise` hviler kun på stoff introdusert
   tidligere i kapitlet eller i en referert forkunnskap — ingen usett begrep/
   regel/formel/metode.
7. **Nybegynner-inngang:** alle koder (A–M, #1–#12, A–F) og karaktersjargong
   forklart ved første bruk; ingen kald kode i `competenceGoals`/første tekstboks;
   Del 0 har «Slik leser du denne boka»-orienteringsboksen (type `text`/`tip`,
   ALDRI `definition`).
8. **Figur + mekanisme:** hvert eksempel/løsningsforslag med figur har både
   figurbeskrivelse i ord (akser, kurver, punkter, arealer navngitt) og verbal
   mekanisme; alle elastisiteter og delingsbrøker er verbalt tolket; refererte
   SVG-er finnes/er bestilt.
9. **Prøve-flervalg:** fasitmønster sjekket — riktig svar varierer posisjon (aldri
   «alle a»/«alle felle»).
10. grep «Prioritet: perfekt» = 0 (skriv «høyeste prioritet»); ingen tom
    collapsible (`content` med blokker).
11. kap-referanser i fasiter/forkunnskaper er markdown-lenker til eksisterende
    filer; Del 0-pakken på plass.
12. **hints** utfylt på alle exercises (unntatt merket kald bank), første hint
    røper aldri konklusjonen; **frekvenstall** = antall listede belegg; meta-fasit-
    grep («en A-besvarelse ville», «ville ha drøftet») = 0.
13. **Matematisk sannhetskontroll:** alle fortegns-/entydighetspåstander
    parametersjekket numerisk (python3); talleksemplenes likevekter etterregnet i
    begge funksjoner.
14. **Juridiske deklarasjoner:** innholdet fremstiller seg ALDRI som offisielt/
    institusjons-tilknyttet og lover aldri eksamensutfall (deklarasjonene vises
    automatisk av plattformen; ved wiring: registrer i institusjoner.ts).
15. **Verifiser rendering:** prod-server + curl mot kapittel- og narrativ-ruter
    (200 + kapittelspesifikk streng), jf. `getChapterMeta`-lærdommen.

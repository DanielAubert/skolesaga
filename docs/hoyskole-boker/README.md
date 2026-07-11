# Høyskolebøker — eksamensrettede lærebøker

Pipeline for å bygge eksamensrettede lærebøker for høyskole-/universitetsemner.
**Formålet er eksamen** — ikke å dekke all fagkunnskap i emnet. Alt innholdsvalg
styres av hva som faktisk testes, med hvilken vekt, og hva sensor belønner.

## Filstruktur

```
docs/hoyskole-boker/
├── README.md              ← denne fila (prosess + byggeinstruks)
├── DNA-regnefag.md        ← arketype: kvantitative fag (økonomi, matte, statistikk, fysikk, informatikk)
├── DNA-jus.md             ← arketype: rettsdogmatiske fag med praktikum
├── DNA-drofting.md        ← arketype: essay-/metodefag (metode, sosiologi, filosofi, statsvitenskap)
└── <emnekode>/
    ├── EKSAMENSANALYSE.md ← empirisk analyse av emnets eksamensarkiv (temafrekvens,
    │                        oppgavetyper, sensorkrav, typiske feil, prioritering)
    └── SKJELETT.md        ← komplett bokskjelett: kapittelliste med per-kapittel-DNA,
                             klar til utbygging av forfatter-agent (Opus)
```

## Prosessen (per emne)

1. **Eksamensanalyse**: En agent leser emnets eksamensarkiv
   (`~/Desktop/Eksamner/<institusjon>/<emnekode>/`) — alle sensorveiledninger grundig,
   siste ~8 år med oppgaver grundig, eldre skummet — og skriver `EKSAMENSANALYSE.md`.
2. **Arketype-valg**: Emnet tilordnes én DNA-mal (regnefag / jus / drøfting).
   Hybridemner (f.eks. statistikk med drøftingsdel) bruker primær-arketype + lånte
   elementer, dokumentert i skjelettet.
3. **Skjelett**: Med analyse + fagbeskrivelse + DNA-mal skrives `SKJELETT.md` —
   komplett kapittelliste der hvert kapittel har alt en forfatter trenger for å
   skrive kapitlet UTEN å lese eksamensarkivet selv.
4. **Utbygging (Opus)**: Forfatter-agenter bygger kapitlene som JSON i plattformformatet
   (se under), pluss metadata-oppføring, narrativ-versjoner og quiz.

## Byggeinstruks for forfatter-agenten (Opus)

### Plattformformat
- **Metadata**: `TextbookCourse`-oppføring, mønster: `COURSE_BI_OKONOMI` i
  `src/lib/data/textbook-courses-matte.ts` (id, title, `level: 'Høyskole'`,
  chapters[] med id/number/title/description/estimatedMinutes/topics/
  competenceGoals/prerequisites/linkedChapterId).
- **Kapittelinnhold**: én JSON-fil per kapittel i `src/lib/data/chapters/<id>.json`
  med `content[]`-blokker. Referanseeksempler på blokktypene:
  `bi-okonomi-1-1.json` (text, definition, theorem, example, exercise, tip,
  warning, collapsible) og `r2-1-1.json` (exercise-struktur med subTasks/hints/
  difficulty).
- **Narrativ**: hvert kapittel får `<id>-narrativ.json` (lesevennlig versjon med
  quizer) — se `/narrativ`-skillen og eksisterende `*-narrativ.json`.
- **Navigasjon**: høyskolebøker ligger under hierarkiet Høyskole/universitet →
  institusjon → fagkode + fagnavn. Nye emner registreres i
  `src/app/bok/trinn/hoyere/institusjoner.ts` under riktig institusjon, med
  visningsnavn «FAGKODE Fagnavn» (f.eks. «ECON1310 Makroøkonomi I»).
- **Juridiske deklarasjoner (plattformnivå — automatisk)**: komponenten
  `hoyskole-disclaimer.tsx` viser uavhengighets-deklarasjon (Skolesaga ≠
  institusjonen; emnekode kun for identifikasjon; ikke offisielt
  studiemateriell) på kurs- og kapittelsider for `level: 'Høyskole'`, pluss
  fagspesifikke linjer (jus → «ikke juridisk rådgivning, sjekk Lovdata»;
  helse/psykologi → «ikke helseråd»). Full tekst i `/vilkar#uavhengighet`.
  KRAV ved nytt emne: (0) legg til kildegrunnlag-oppføring i
  `src/lib/data/kildegrunnlag.ts` (destillert fra EKSAMENSANALYSE §8 —
  eksamenssett, sensorveiledninger kun der de finnes, andre kilder, ærlige
  forbehold; vises på `/bok/<emne>/kildegrunnlag`); (a) registrer emnet i `institusjoner.ts` (driver
  institusjonsnavnet i deklarasjonen); (b) sjekk at jus-/helse-heuristikken i
  `hoyskole-disclaimer.tsx` treffer emnet — utvid den om ikke; (c) bokINNHOLD
  skal aldri fremstille seg som offisielt, godkjent eller institusjons-
  tilknyttet, og aldri love eksamensutfall (frekvensanalyse formidles alltid
  med kildenote + forbehold, jf. leserkravet under).
- Matematikk i LaTeX (`$...$` / `$$...$$`). Norsk bokmål.

### Leserkrav (gjelder alle arketyper — fra produkteier)
- **Kun eksamensrelevant**: hvert avsnitt er eksamensrelevant eller bygger opp
  mot noe eksamensrelevant; mindre viktig stoff kommer ETTER det viktige,
  sortert etter viktighet, og merkes («bør kjenne til»).
- **Forkunnskaper eksplisitt**: hvert kapittel sier tidlig hvilke kapitler det
  bygger på og hvilke forkunnskaper som kreves — med markdown-lenker
  (`[tittel](/bok/<courseId>/<chapterId>)`) til kapitler i ANDRE bøker i
  systemet når forkunnskapen ikke dekkes i boka selv. Lenk kun til kapitler
  som finnes. **«Sist du var her» (fra studentpanel bølge 5):** i tunge
  kapitler med stor tidsavstand til forkunnskapen (typisk sene deler) skal
  blokken VISE de 2–3 nøkkelformlene/kjernereglene ferdig oppfrisket, ikke
  bare lenke — deltidsleseren skal slippe å bla tilbake for å komme i gang
  (særlig viktig i regnefag).
- **Lett å lese og engasjerende**: korte avsnitt, aktiv «du»-form, konkrete
  eksempler før formalisme — uten faglige feil; presisjon vinner ved tvil.
- **Ingen uforklart sjargong / nybegynner-inngang (UFRAVIKELIG, fra produkteier):**
  Boka skal være forståelig for en student som ALDRI har hatt faget. (a) HVERT
  fagbegrep, hver kode og all karaktersjargong forklares ved FØRSTE bruk, i
  klarspråk — skriv «redegjørelse (forkortes RED)», «vår 2024 (V2024)»,
  «kumulative vilkår (alle må være oppfylt samtidig)», aldri koden/forkortelsen
  kald. (b) Kodenavn (sjangerkoder, feilkoder #N, karakterbokstaver) skal ALDRI
  stå i competenceGoals/læringsmål eller i aller første tekstboks uten at de er
  forklart. (c) Del 0 / første kapittel skal ha en kort «Slik leser du denne
  boka»-boks (type text/tip, IKKE definition — påvirker ikke flashcard-kvoten)
  som forklarer: karakter-/vurderingsskalaen (og hva «C-stoff»/«A-markør» betyr),
  en kompakt liste over sjanger-/oppgavekodene, og at feil har et samlet register.
  (d) Karaktersjargong som motsier eksamensformen (f.eks. «A-kandidat» der
  eksamen er bestått/ikke-bestått) skal enten unngås eller eksplisitt rammes inn
  som bilde. Fagstoffet er allerede nybegynner-vennlig — det er META-språket rundt
  eksamen som må ryddes.
- **Godt, flytende norsk (UFRAVIKELIG, fra produkteier)**: hele setninger, ikke
  telegramstil («Funksjon: premiss. Plass: startpunktet.» er FORBUDT — skriv
  «Utdraget fungerer som premiss og er startpunktet i argumentet»). Naturlig
  norsk ordstilling, ingen anglisismer eller stivt kansellispråk.
- **Listemerking med små bokstaver (UFRAVIKELIG, fra produkteier)**: utdrag,
  alternativer og deloppgaver merkes a), b), c) — ALDRI A), B), [A], [B].
  (Unntak: karakteruttrykk som «en A-besvarelse» er ikke listemerking.)
- **Deloppgaver på egen linje med fet merking (UFRAVIKELIG, fra produkteier)**:
  når en oppgave-/fasittekst lister deloppgaver a), b), c) …, skal HVER deloppgave
  starte på egen linje (`\n` i JSON-strengen) og merket stå i fet: `**a)**`,
  `**b)**`, `**c)**`. ALDRI bak hverandre i løpende tekst («… begrunn kort.
  a) … b) … c) …» er FORBUDT). LatexRenderer gjør `**x)**` → fet skrift og `\n`
  → linjeskift, så formatet er `…begrunn kort.\n\n**a)** «…»\n**b)** «…»`.
  Gjelder `task` og `solution` i exercise-blokker samt tilsvarende opplistinger
  i prøve-fasiter. (IKKE bruk `subTasks`-feltet til dette uten eksplisitt
  beslutning — det kobler inn egen fremdriftslogikk per deloppgave.)
- **Meningsfulle oppgaver**: hver oppgave er eksplisitt eksamensforankret
  (si hvilken sjanger den trener) eller åpenbart relevant på annen måte.
- **Læringsløkke per delkapittel — Teori → Eksempel → Oppgave (UFRAVIKELIG, fra produkteier):**
  Lærestoffet i hvert delkapittel bygges som gjentatte SMÅ sykluser: en liten bit
  teori → ett eksempel som direkte illustrerer nettopp den teoribiten → én (eller
  få) oppgave(r) som lar leseren anvende akkurat den biten — deretter neste teoribit,
  osv., til ALT stoffet i delkapitlet er dekket. Poenget er at leseren skal kunne
  jobbe seg gjennom stoffet bit for bit og forstå det underveis.
  - IKKE all teori øverst og alle oppgaver samlet nederst. Det betyr heller IKKE at
    hver enkelt teorisetning skal ha egen oppgave — grupper til meningsfulle biter.
  - Plassér `exercise`-blokker INLINE i `content[]`, rett etter eksempelet/teorien de
    hører til (plattformen renderer inline oppgaver — bekreftet). `content[]`-rekkefølgen
    veksler altså text/definition → example → exercise i løkker gjennom delkapitlet.
  - Eksamensvinkel- (`tip`) og Typiske feil- (`warning`) blokkene kan stå der de er
    mest relevante (ofte tidlig og sent); selve lærestoffet følger løkka.
- **Full oppgavedekning — ingen usett forkunnskap (UFRAVIKELIG, fra produkteier):**
  En oppgave får bare kreve stoff som allerede er dekket — tidligere i SAMME
  delkapittel/kapittel, eller i et tidligere kapittel som er eksplisitt referert i
  Forkunnskaper-blokken øverst. Ingen oppgave skal forutsette et begrep, en regel,
  en formel eller en metode leseren ikke har møtt ennå. Bygg oppgaveprogresjonen slik
  at hver nye oppgave kun hviler på det som er introdusert t.o.m. eksempelet rett foran
  (pluss eksplisitt refererte forkunnskaper). Sjekk dette eksplisitt ved bygging.
- **Symbol- og formelliste per delkapittel**: hvert delkapittel som bruker
  symboler/formler skal ha en egen blokk (collapsible «Symbol- og formelliste»)
  som forklarer ALLE variabler og formler brukt i delkapitlet — f.eks. at
  $Y$ = BNP, $C$ = privat konsum osv. Unntak kun når det er smertefritt
  åpenbart (kapitler helt uten symboler/formler). Et symbol regnes ikke som
  «forklart» fordi et tidligere kapittel forklarte det — listen er per
  delkapittel. Listen plasseres SIST i delkapitlet og åpner med notisen
  «Oppslagsverk — alt her forklares underveis i kapitlet.» (studentpanel: en
  symbolvegg i døråpningen skremmer nybegynnere; listen er oppslag, ikke
  inngangsport).
- **Stokket flervalg og varierte fasit-mønstre (UFRAVIKELIG, fra studentpanel):**
  flervalg skrevet statisk i prøve-collapsibles SKAL ha stokkede fasit-bokstaver —
  posisjonen til riktig svar varierer, ALDRI «alle a». (Quiz-SYSTEMET stokker
  selv ved kjøretid — der gjelder options[0]-invarianten; statisk prøvetekst
  stokker IKKE.) Prøve-tipen sier eksplisitt hvor flervalget bor (inline i
  prøven eller i den interaktive quizen), så formatskifter er varslet.
  **Gjelder ALLE ensartede fasitlister (bølge 4):** også riktig/galt-lister og
  «finn fellen»-øvelser skal variere fasiten — aldri «alle felle», aldri «alle
  riktig». Ethvert mønster leseren kan lære seg i stedet for stoffet dreper
  selvtesten.
- **Distraktorer straffer aldri grundig lesing (fra studentpanel bølge 4):**
  flervalgsdistraktorer skal ikke gjengi bokas egne nyanser/presiseringer som
  «galt» svar — den som har lest grundigst skal aldri lokkes av en distraktor
  fordi den ligner bokas eget presisjonspoeng. Ligger en distraktor nær sannheten,
  skal fasit-kommentaren eksplisitt forklare hvorfor den ikke holder.
- **Difficulty-spredning + kald bank (fra studentpanel bølge 4):** boka skal ha
  noen genuint krevende oppgaver, tydelig merket («(krevende)» / difficulty
  vanskelig) — ikke alt på middels med strukturrøpende hint. I tillegg: én
  «kald bank» (8–10 oppgaver med uvante vinklinger/kombinasjoner) UTEN hint,
  der fasiten kun er momentliste — tydelig merket som kald, plassert i
  eksamenstreningsdelen. Toppleseren skal strekkes, ikke bare bekreftes.
- **Hint på alle oppgaver (fra studentpanel bølge 5):** hvert exercise har
  utfylte `hints` (første hint = hjemmelen/formelen/første grep; ALDRI
  konklusjonen) — leseren skal ha noe mellom å stå fast og å få hele fasiten.
  Eneste unntak er den merkede kalde banken (over).
- **A-konklusjonsvariasjon (fra studentpanel bølge 4):** modellbesvarelsene i en
  bok skal ikke alle lande på samme kompromissform («X er et hensyn, ikke hele
  svaret») — minst én skal vise at en SKARP, men veid konklusjon også når
  toppnivå. Forbehold er et verktøy, ikke obligatorisk garnityr; sensor merker
  malen etter femti like.
- **Meta-fasit forbudt (fra studentpanel bølge 4):** «en A-besvarelse ville her
  ha drøftet …» er en regibemerkning, ikke en fasit — skriv drøftelsen faktisk
  UT (kort, skarp, lander begrunnet). Gjelder modellbesvarelser og prøvefasiter.
- **Signal-/hintbokser ETTER oppgaven (fra studentpanel bølge 4):** en boks som
  varsler hva en drilloppgave tester («her lurer et skjult delspørsmål om X»),
  plasseres ETTER oppgaven — som del av fasit-oppfølgingen eller som collapsible
  hint — aldri rett foran. Drillen skal teste radaren, ikke oppslaget.
- **Frekvenstall = telte belegg (fra studentpanel bølge 4):** en frekvenspåstand
  («5 av 8 sett») skal stemme EKSAKT med belegg-listen som følger den — tell
  beleggene før tallet skrives, og synk ved endringer.
- **Faglige påstander verifiseres FØR de skrives (UFRAVIKELIG, fra studentpanel
  bølge 4):** regnefag — fortegns-/entydighets-/«alltid mindre enn»-påstander
  parametersjekkes numerisk i modellens FULLE parameterrom før de påstås
  ubetinget; er påstanden betinget, skrives betingelsen ut (detaljer i
  DNA-regnefag). Jus — hjemmels- og domspåstander (særlig tersklers RETNING:
  skjerpet/senket) verifiseres mot Lovdata/kilde, og dommer refereres MED 1–2
  setninger faktum ved første omtale (detaljer i DNA-jus).
- **Øktmerking og prøvedeling (fra studentpanel bølge 5):** kapitler med
  estimatedMinutes > 45 har tidsanslag per løkke («Løkke 2 — … (~20 min)»)
  eller eksplisitte «— naturlig pausepunkt —»-markører; lange modellbesvarelser
  har pausepunkt-markører mellom hovedseksjonene. Prøvekapitler deklareres som
  «N prøver à ~X min» med eksplisitt «kan trygt deles over flere kvelder — én
  prøve per økt» — aldri bare en skremmende totalsum.
- **Feilkode-gloss per kapittel (fra studentpanel bølge 5):** feilkoder («#7»)
  glosses ved FØRSTE bruk i HVERT kapittel — «(#7 — upresise nabobegreper)» —
  ikke bare i registeret/per bok. Deltidslesere glemmer kodene mellom økter.
- **Samlet oppslagskort per bok (fra studentpanel bølge 5):** hver bok har ETT
  printbart oversiktsoppslag samlet på ett sted (collapsible med ren tabell):
  jus → hjemmelskart (lov → § → én linjes innhold → kapittellenke); drøfting →
  «hvem eier hva»-kort (eksempel → tenker → poeng); regnefag → formel-minimum-
  siden i Del 0 dekker kravet. Detaljer i arketypens DNA.
- **Del 0-pakken (fra studentpanel):** Del 0 skal i tillegg til
  orienteringsboksen ha (a) en **«Lite tid?»-boks** (type `tip`): eksplisitt
  hurtigrute for 3–5 dager (kapittelrekkefølge + timeanslag) og ukeplan(er)
  bygget av summerte `estimatedMinutes`; (b) en **kildenote for frekvens-/
  sensor-empirien**: hvilke eksamenssett/sensorveiledninger analysen bygger på
  (semestre/årstall) og forbehold om at nye sett kan endre bildet — hentet fra
  EKSAMENSANALYSE.md, ALDRI oppdiktet; (c) et **prosedyre-/sjangeroversikts-
  kort på ÉN side** som ER kortet (sjanger → én linjes oppskrift →
  tidsbudsjett → vanligste feil), ikke en lenkeliste; (d) en **deltidsrute
  (fra studentpanel bølge 5)**: 10–12-ukers plan (~8 t/uke) i tillegg til
  hurtigruta og fulltidsplanen, med generalprøver/øvingseksamener fordelt på
  flere økter (f.eks. tre søndager) — aldri stablet i siste uke; (e) en
  **«lese mye, skrive lite»-boks (bølge 5)**: legitim rute for lese-øveren
  (les oppgaven → formuler svaret mentalt i én setning → les fasiten som
  sensor) + minimumsråd om skrivekondis: skriv minst ÉN øvingseksamen for
  hånd på tid — fire timer håndskrift er en fysisk ferdighet.
- **Klikkbare kapittelreferanser (fra studentpanel):** «kap. X.Y»-referanser i
  forkunnskaps-blokker og prøve-/oppgavefasiter skrives som markdown-lenker
  `[kap. X.Y](/bok/<emne>/<emne>-X-Y)` til kapitler som finnes — «se kapittel
  2.5» som død tekst er FORBUDT. (Kun i prosa-/fasittekst, aldri i
  title-felt.)
- **Begrepsbank = oppslagsverk (fra studentpanel):** hver stor begrepsbank/
  pensumkart åpner med en kort standard-notis: «Begrepsbanken er flashcard-/
  repetisjonsstoff — den gjentar det du nettopp har lest. Hopp trygt over ved
  førstegangslesing; tidsanslaget for kapitlet gjelder kjernestoffet.»
  Definition-blokkene er flashcard-KILDEN og skal aldri slettes, slås sammen
  eller flyttes inn i collapsibles for å «rydde» — fiksen er merking.
- **Karakter-realisme (UFRAVIKELIG, fra studentpanel):** Del 0 sier eksplisitt
  at C er en god og vanlig karakter (særlig tidlig i studiet); «Gapet til A»-
  lister rammes inn som oppgraderingsmeny, ikke mangelliste; formuleringen
  «Prioritet: perfekt» er FORBUDT (skriv «høyeste prioritet» — behold
  prioriteringen, fjern trusselen). Modellbesvarelser merkes ÆRLIG: en boks
  som heter «C-besvarelse» skal VÆRE en C (tittel og margnotat skal stemme),
  og boka skal ha minst én autentisk B-/midtnivå-besvarelse (ekte
  studentspråk, litt rotete men god, med notater om hva som er BRA NOK) —
  ikke bare polert A + karikatur-C. Er eksamen bestått/ikke-bestått: minst én
  «bestått-på-marginen»-besvarelse som viser terskelen nedenfra.
- **Selvdiagnose (fra studentpanel):** etter HVER prøvefasit: en kompakt
  avkryssbar sjekkliste (☐) leseren kan rette seg selv med («står X i svaret
  ditt? konkluderte du per delspørsmål?»). I teorikapitler der første oppgave
  ellers er full eksamenssjanger: én lett innstegsoppgave tidlig (difficulty
  lett, ren gjengivelse med egne ord, vennlig fasit).
- **Hverdagsanker før apparatet (fra studentpanel):** bokas mest testede
  ABSTRAKTE kjernetemaer åpner med et konkret hverdagsanker FØR formalisme/
  begrepsapparat, og apparatets deler kobles tilbake til ankeret. Eksempler
  skal være verdens-caser (arv, forsikring, NAV, priser …), ikke eksamens-
  metaeksempler («en medstudent skriver …») — særlig der teorien er tåkete.
  Vurder et case-bibliotek («hvilken teori/tenker biter på denne
  situasjonen?») i repetisjonsdelen.
- **Tidsbudsjett-konsistens (fra studentpanel):** der en oppgaves deklarerte
  tid avviker fra summen av deltidene, forklares differansen eksplisitt
  (anbefalingene er skrivetid; resten er lesing av oppgavesettet, kladd,
  disponering og gjennomlesing). Kapitlenes tidsanslag gjelder kjernestoffet
  (jf. begrepsbank-notisen). **Gjøre- vs. lese-tider (bølge 5):** «Lite
  tid?»-boksen i Del 0 sier eksplisitt at tidsanslagene er LESEtid — den som
  skriver oppgavene for hånd, bør regne ca. ×1,5.

### Læringsmål-deklarasjon (fra produkteier)
`competenceGoals` i høyskolebøker er Skolesagas EGNE formuleringer (destillert fra
eksamensanalysen/emnebeskrivelsen) — aldri kopier av institusjonens offisielle
læringsutbyttebeskrivelser. UI-et deklarerer dette automatisk med kildelinje
(«utformet av Skolesaga …, ikke institusjonens offisielle»); skriv målene deretter:
konkrete, eksamensforankrede kunnskaps-/ferdighetsmål.

### Eksamensrettede krav (gjelder alle arketyper)
- Hvert kapittel skal ha en **«Eksamensvinkel»**-blokk (type `tip`): hvordan og hvor
  ofte temaet testes, med hvilken vekt, og hva sensor ser etter — hentet fra
  skjelettets per-kapittel-DNA.
- Hvert kapittel skal ha en **«Typiske feil»**-blokk (type `warning`): feilene
  sensorveiledningene faktisk trekker for.
- Oppgavene skal være **modellert på reelle eksamensmønstre** (sjangrene i
  EKSAMENSANALYSE §3), med stigende vanskelighetsgrad som ENDER på eksamensnivå.
- Prioritering følger analysens §7: «må beherskes perfekt»-temaer får flest
  kapitler/oppgaver; «bør kjenne til» får minst.

### Opphavsrett (ufravikelig)
- Eksamensoppgaver og sensorveiledninger brukes som **grunnlag** (mønstre,
  temavekting, vurderingskriterier), **aldri ordrett**. Alle oppgaver i boka er
  nyskrevne i samme sjanger — endre tall, parter, fakta og formuleringer.
- Pensumlitteratur refereres (forfatter/verk/begrep), aldri siteres i lengde.

### Minimumskrav (fra CLAUDE.md)
Per emne: ≥500 quizspørsmål, ≥500 flashcards, ≥4 prøver per tema, utfyllende
studieguide. Skjelettet fordeler disse per kapittel.

## Statustavle

Status: **analyse** = EKSAMENSANALYSE.md ferdig · **skjelett** = SKJELETT.md
ferdig (= rammeverk komplett, klart for Opus-bygging via BYGGEKONTRAKT-MAL) ·
**bok** = bygget og wiret i plattformen.

| Emne | Arketype | Status |
|---|---|---|
| ECON1310 Makroøkonomi I (UiO) | regnefag | **bok** (live) |
| JUS1111 Privatrett I (UiO) | jus | **bok** (live) |
| JUS4213 Strafferett og straffeprosess (UiO) | jus | skjelett |
| TGB4100 Geologi, innføring (NTNU) | fakta/pugg | skjelett |
| TTT4120 Digital signalbehandling (NTNU) | regnefag | skjelett |
| TFE4171 Design av digitale systemer 2 (NTNU) | regnefag/verifikasjonsfag | skjelett |
| JUR 3420 Forretningsjus (BI) | jus | skjelett |
| ORG 3620 Arbeids- og personaljus (BI) | jus | skjelett |
| STR 3605 Strategi (BI) | drøfting/case-analyse | skjelett |
| BØK 3423 Finans (BI) | regnefag | skjelett |
| FIN 3521 Finansiering av bedrifter (BI) | regnefag | skjelett |
| BØK 3532 Finansregnskap og regnskapsanalyse (BI) | regnefag | skjelett |
| BØK 3632 Finansiell styring (BI) | regnefag/corporate finance II | skjelett |
| SØK 3500 Samfunnsøkonomi II (BI) | regnefag | skjelett |
| MET 2910 Matematikk for økonomer (BI) | regnefag | skjelett |
| MET 2920 Statistikk for økonomer (BI) | regnefag | skjelett |
| MET 1190 Statistikk (BI) | regnefag | skjelett |
| ECON1100 Matematikk I for økonomer (UiO) | regnefag | skjelett |
| ECON1210 Mikroøkonomi 1 (UiO) | regnefag | skjelett |
| ECON1220 Velferd og økonomisk politikk (UiO) | drøfting/hybrid | skjelett |
| ECON1410 Internasjonal økonomi (UiO) | regnefag | skjelett |
| ECON2610 Ressursallokering, fordeling og strategisk atferd (UiO) | regnefag/figur-i-ord-hybrid | skjelett |
| ECON1910 Poverty and Distribution (UiO) | drøfting/hybrid | skjelett |
| ECON4915 Development Economics (UiO) | drøfting | skjelett |
| ECON2130 Statistikk 1 (UiO) | regnefag | skjelett |
| ECON2220 Mikroøkonomi 2 (UiO) | regnefag | skjelett |
| ECON4220 Microeconomics 3 (UiO) | regnefag | skjelett |
| ECON2310 Makroøkonomi 2 (UiO) | regnefag | skjelett |
| ECON2500 Investering og finansiering (UiO) | regnefag | skjelett |
| ECON3150 Introductory Econometrics (UiO) | regnefag | skjelett |
| ECON4310 Macroeconomic Theory (UiO) | regnefag/essay-hybrid | skjelett |
| EXPHIL03 Examen philosophicum (UiO) | drøfting | **bok** (live) |
| FIL1001 Metafysikk og bevissthetsfilosofi (UiO) | drøfting | skjelett |
| LING1100 Innføring i semantikk og pragmatikk (UiO) | formell-hybrid | skjelett |
| FIL1003 Innføring i etikk (UiO) | drøfting | skjelett |
| FYS1001 Innføring i fysikk (UiO) | regnefag | skjelett |
| FYS1100 Mekanikk og modellering (UiO) | regnefag | skjelett |
| FYS1120 Elektromagnetisme (UiO) | regnefag | skjelett |
| FYS2140 Kvantefysikk (UiO) | regnefag | skjelett |
| IN1000 Intro. objektorientert programmering (UiO) | regnefag/kodefag | skjelett |
| IN1010 Objektorientert programmering (UiO) | regnefag/kodefag | skjelett |
| IN1020 Introduksjon til datateknologi (UiO) | regnefag | skjelett |
| IN1030 Systemer, krav og konsekvenser (UiO) | drøfting/prosedyre-hybrid | skjelett |
| IN1140 Introduksjon til språkteknologi (UiO) | regnefag/formell-hybrid | skjelett |
| IN1900 Python-programmering (UiO) | regnefag/kodefag | skjelett |
| IN2010 Algoritmer og datastrukturer (UiO) | regnefag | skjelett |
| IN2040 Funksjonell programmering (UiO) | regnefag/kodefag | skjelett |
| IN2060 Digitalteknikk og datamaskinarkitektur (UiO) | regnefag | skjelett |
| JUS1211 Privatrett II (UiO) | jus | skjelett |
| JUS2111 Statsforfatningsrett og folkerett (UiO) | jus | skjelett |
| JUS4111 Metode og etikk (UiO) | jus/drøfting-hybrid | skjelett |
| JUS4212 Sivilprosess (UiO) | jus | skjelett |
| KJ1020 / TKJ4103 Organisk kjemi grunnkurs (NTNU) | regnefag/mønster-drill | skjelett |
| KJ2050 Analytisk kjemi, grunnkurs (NTNU) | regnefag/prosedyre-hybrid | skjelett |
| KJM1110 / KJM1111 Organisk kjemi I (UiO) | regnefag/kjemi-konstruksjon-hybrid | skjelett |
| MA0301 Elementær diskret matematikk (NTNU) | regnefag | skjelett |
| MAT111 Grunnkurs matematikk I (UiB) | regnefag | skjelett |
| MAT112 Grunnkurs matematikk II (UiB) | regnefag | skjelett |
| MAT121 Lineær algebra (UiB) | regnefag | skjelett |
| MAT1100 Kalkulus (UiO) | regnefag | skjelett |
| MAT1110 Kalkulus og lineær algebra (UiO) | regnefag | skjelett |
| MAT1120 Lineær algebra (UiO) | regnefag | skjelett |
| MAT2200 Grupper, ringer og kropper (UiO) | regnefag | skjelett |
| MAT2400 Reell analyse (UiO) | regnefag | skjelett |
| MAT2500 Geometri (UiO) | regnefag | skjelett |
| MEK1100 Feltteori og vektoranalyse (UiO) | regnefag | skjelett |
| MET4 Empiriske metoder (NHH) | regnefag/hybrid | skjelett |
| Matematikk 1000 / DAFE1000 (OsloMet) | regnefag | skjelett |
| AFB Anatomi, fysiologi og biokjemi (NOKUT, sykepleie) | fakta/pugg | skjelett |
| GLU-matte Nasjonal deleksamen i matematikk (GLU) (NOKUT) | regnefag/didaktikk-hybrid | skjelett |
| NB Nasjonal deleksamen i barnevern (rettsanvendelse) (NOKUT) | jus | skjelett |
| MED1100 Medisinstudiet modul 1 (UiO) | fakta/pugg-hybrid | skjelett |
| Felles avsluttende deleksamen i medisin (nasjonal, UiO) | fakta/klinisk beslutning | skjelett |
| MFFAGPR Fagprøven for leger utdannet utenfor EU/EØS (UiO) | fakta/klinisk beslutning | skjelett |
| PSY1000 Innføring i generell psykologi (UiO) | drøfting/fakta-hybrid | skjelett |
| PSY1010 Innføring i metode (UiO) | drøfting/hybrid | **bok** (live) |
| PSYC1201 Sosialpsykologi (UiO) | fakta-forklaring-hybrid | skjelett |
| MRK 3481 Forbrukerpsykologi (BI) | drøfting/fakta-hybrid | skjelett |
| SOK1002 Mikroøkonomi (NTNU) | regnefag | skjelett |
| SOS1120 / SOSGEO1120 Kvantitativ metode (UiO) | hybrid (statistikk-tyngdepunkt) | skjelett |
| SOS2200 Organisasjon, ledelse og arbeid (UiO) | drøfting | skjelett |
| SOSANT1000 Innføring i sosialantropologi (UiO) | drøfting | skjelett |
| STK1100 Sannsynlighet og statistisk modellering (UiO) | regnefag | skjelett |
| STK1110 Statistiske metoder og dataanalyse (UiO) | regnefag | skjelett |
| STV1020 Politisk analyse 2 (UiO) | drøfting/hybrid | skjelett |
| SVMET1010 Kvalitative metoder (UiO) | drøfting | skjelett |
| TDT4100 Objektorientert programmering (NTNU) | regnefag/kodefag | skjelett |
| TDT4102 Prosedyre- og objektorientert programmering (C++) (NTNU) | regnefag/kodefag | skjelett |
| TDT4110 Informasjonsteknologi grunnkurs (NTNU) | regnefag/kodefag | skjelett |
| TDT4120 Algoritmer og datastrukturer (NTNU) | regnefag | skjelett |
| TDT4136 Introduksjon til kunstig intelligens (NTNU) | regnefag | skjelett |
| TDT4137 Kognitive systemer (NTNU) | drøfting/regne-hybrid | skjelett |
| TDT4145 Datamodellering og databasesystemer (NTNU) | regnefag | skjelett |
| TDT4225 Store, distribuerte datamengder (NTNU) | drøfting/regne-hybrid | skjelett |
| TDT4160 Datamaskiner (NTNU) | regnefag | skjelett |
| TDT4260 Datamaskinarkitektur (NTNU) | regnefag/begrepsdrevet hybrid | skjelett |
| TDT4300 Datavarehus og datagruvedrift (NTNU) | regnefag | skjelett |
| TDT4171 Metoder i kunstig intelligens (NTNU) | regnefag | skjelett |
| TDT4237 Programvaresikkerhet og personvern (NTNU) | drøfting/prosedyre-hybrid | skjelett |
| TFY4104 Fysikk (NTNU) | regnefag | skjelett |
| TFY4115 Fysikk (NTNU) | regnefag | skjelett |
| TFY4125 Fysikk (NTNU) | regnefag | skjelett |
| TMA4101 Flervariabel kalkulus og vektoranalyse (NTNU) | regnefag | skjelett |
| TMA4110 Lineær algebra, komplekse tall og differensiallikninger (NTNU) | regnefag | skjelett |
| TMA4121 Matematikk 4 (NTNU) | regnefag | skjelett |
| TMA4135 Matematikk 4D (NTNU) | regnefag | skjelett |
| TMA4245 Statistikk (NTNU) | regnefag | skjelett |
| TDT4186 Operativsystemer (NTNU) | regnefag/hybrid | skjelett |
| TTM4100 Kommunikasjon — Tjenester og nett (NTNU) | regnefag/hybrid | skjelett |
| SOS1004 Innføring i sosiologi (UiO; arkiv SOS1000/1001/1003) | drøfting | skjelett |
| SOSANT1090 Antropologiens historie (UiO) | drøfting | skjelett |
| SOSANT1400 Antropologi og religion (UiO) | drøfting | skjelett |
| JUS2211 Forvaltningsrett og EØS-rett (UiO) | jus | skjelett |
| JUS3213 Formuerett II (UiO) | jus | skjelett |
| JUS3112 Formuerett I (UiO) | jus | skjelett |
| JUS5511 Individuell arbeidsrett (UiO) | jus | skjelett |
| ECON3010 Anvendt økonomisk analyse (UiO) | drøfting | skjelett |
| ECON4260 Behavioral Economics (UiO) | regnefag/drøfting-hybrid | skjelett |
| ECON3120/4120 Mathematics 2 (UiO) | regnefag | skjelett |
| TTM4135 Anvendt kryptografi og nettverkssikkerhet (NTNU) | regnefag/hybrid | skjelett |
| TTK4240 Industriell elektroteknikk (NTNU) | regnefag | skjelett |
| IT2805 Webteknologi (NTNU) | kodefag-hybrid | skjelett |
| TIØ4215 Kontraktsrett og kontraktsforhandlinger (NTNU) | jus/forhandling-hybrid | skjelett |
| ECON2200 Matematikk 1/mikro (UiO) | — | analyse (NEDLAGT; dekkes av ECON1100+ECON2220) |
| MA1301 Tallteori (NTNU) | regnefag/bevis | skjelett (K2) |
| SØK1011 Markeder og markedssvikt (NTNU) | regnefag/drøfting | skjelett (K2; komplement SOK1002) |
| OD2200 Odontologi 4. sem – patologi/kraniofacial (UiO) | fakta/pugg-klinisk | skjelett (K2) |
| MAS116 Hydrodynamikk (HVL) | regnefag | skjelett (K2) |
| STK2100 Maskinlæring og statistiske metoder (UiO) | regnefag/drøfting | skjelett (K2) |
| MAT2410 Innføring i kompleks analyse (UiO) | regnefag/bevis | skjelett (K2) |
| THP100 Humanfysiologi (NIH) | fakta/pugg-mekanisme | skjelett (K2) |
| THP101 Funksjonell anatomi (NIH) | fakta/pugg + moment | skjelett (K2) |
| THP202 Treningsfysiologi (NIH) | mekanisme/pugg | skjelett (K2) |
| THP203 Basal biomekanikk (NIH) | regnefag | skjelett (K2) |
| THP204 Metabolisme (NIH) | fakta/pugg-biokjemi | skjelett (K2) |
| LKI235 Treningsfysiologi for idrettsfag (NIH) | mekanisme/pugg | skjelett (K2; THP202-tvilling) |
| IDR109 Treningslære (NIH) | anvendt/case | skjelett (K2) |
| MA460 Exercise Biology and Sport Performance Analysis I (NIH master) | drøfting/masternivå | skjelett (K2) |

**Slik settes Opus på et fag senere:** følg PRODUKSJONSLOYPE fase 3–7 —
instansier `BYGGEKONTRAKT-MAL.md` til `<emne>/BYGGEKONTRAKT.md` (fyll
fagspesifikk stil fra skjelettets identitetsseksjon), kjør byggebølge
(én Opus-agent per del, maks 2 samtidige), wiring, verifiseringsbølge, build.

Skalering videre: 156 aktive emner kartlagt i `fagbeskrivelser-samlet`
(Desktop); 137 har eksamensarkiv, 67 har sensorveiledningsinnsikt.

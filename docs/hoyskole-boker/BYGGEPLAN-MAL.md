# Byggeplan-mal — mekanisk gjennomføring med Opus (ingen skjønn nødvendig)

Denne planen er designet for at en Opus-økt skal kunne bygge en bok med høy
kvalitet UTEN kvalitetssikring i etterkant: alle kvalitetsdommer er flyttet
inn i (a) skjelettets kontrakter, (b) ferdigskrevne prompter under, og
(c) deterministiske porter (skript som svarer OK/AVVIK). Følg stegene i
rekkefølge; gå ALDRI videre forbi en rød port.

Verktøy (i repo): `scripts/hoyskolebok/sjekk-skjelett.py`, `wire-bok.py`,
`sjekk-bok.py`. Regler: **Opus på alle agenter, maks 2 samtidige**; etter hver
bølge: mål disk (`ls`) og gap-fill kun det som mangler.

## Steg 0 — Forutsetninger
- [ ] `docs/hoyskole-boker/<emne>/EKSAMENSANALYSE.md` + `SKJELETT.md` finnes
- [ ] `python3 scripts/hoyskolebok/sjekk-skjelett.py <emne>` → OK
- [ ] `<emne>/BYGGEKONTRAKT.md` finnes (ellers: instansier fra
      `BYGGEKONTRAKT-MAL.md`, fyll fagspesifikk stil fra skjelettets
      identitetsseksjon — 15 min jobb, én agent eller manuelt)
- [ ] `<emne>/BOKCONFIG.json` finnes (title/description/icon/institusjon/
      prøvedeler/sectionNames — kopier mønster fra et bygget fag)

## Steg 1 — Byggebølge (kapittelforfattere, 2 om gangen)
Del kapitlene i batcher på 3–5 etter skjelettets deler (én batch = én del;
del > 7 kapitler splittes, begge agentene leser da HELE delens kontrakter).
Prøvekapitlet bygges av delens agent. Øvingseksamen-/praktikumsdelen bygges
av én agent som leser hele skjelettet.

**PROMPT-MAL byggeagent** (fyll <…>-feltene; alt annet ordrett):

> Du er kapittelforfatter for den eksamensrettede læreboka <EMNEKODE TITTEL>.
> Repo: /Users/danielandreasaubert/eksamenssett/Skolesaga
> LES FØRST: (1) docs/hoyskole-boker/<emne>/BYGGEKONTRAKT.md — HELE;
> (2) docs/hoyskole-boker/<emne>/SKJELETT.md — «Bokens identitet»,
> «Makrostruktur» og NØYE per-kapittel-DNA for DINE kapitler <+ evt. hele
> delens kontrakter ved splittet del / hele skjelettet for eksamenstrening>;
> (3) src/lib/data/chapters/econ1310-2-1.json — kun strukturreferanse.
> DINE FILER (<n>): <id-liste med kapittelnavn>.
> Følg per-kapittel-DNA-en slavisk. Leserkravene (Forkunnskaper-blokk,
> Symbol- og formelliste, sjangerforankring per oppgave) SKAL inn i
> førsteutkastet. STRUKTURER `content[]` som læringsløkker (jf. README
> «Leserkrav»): teori (text/definition/theorem) → example → exercise i
> gjentatte små løkker gjennom delkapitlet — IKKE all teori øverst og alle
> oppgaver nederst — med `exercise`-blokkene INLINE rett etter eksempelet de
> hører til (plattformen renderer inline). INGEN oppgave får kreve et begrep/
> regel/formel/metode som ikke er introdusert tidligere (t.o.m. eksempelet foran
> eller en refererte forkunnskap). NYBEGYNNER-INNGANG (jf. README «Leserkrav»):
> boka skal forstås av en som ALDRI har hatt faget — skriv HVER kode (sjanger-/
> oppgavekode, feilkode #N, karakterbokstav) og all karaktersjargong («C-stoff»/
> «A-markør») + insider-term FULLT UT i klarspråk ved FØRSTE bruk; ingen kald
> kode i competenceGoals/læringsmål eller i aller første tekstboks. Bygger du
> Del 0: legg inn en «Slik leser du denne boka»-orienteringsboks (type `text`
> eller `tip`, ALDRI `definition` — ville endret flashcard-kvoten) med karakter-/
> vurderingsskala + kompakt kodeliste + at feil har et samlet register; ramm inn
> karaktersjargong som motsier eksamensformen. DELOPPGAVER a), b), c) i task/
> solution: HVER på egen linje med fet merking — `…\n\n**a)** …\n**b)** …`,
> ALDRI bak hverandre i løpende tekst (ikke bruk subTasks-feltet).
> STUDENTPANEL-KRAV (jf. README «Leserkrav» — SKAL inn i førsteutkastet):
> statiske flervalg i prøve-collapsibles har STOKKEDE fasit-bokstaver (aldri
> «alle a»; quiz-filene beholder options[0]-invarianten) og prøve-tipen sier
> hvor flervalget bor; Del 0 har «Lite tid?»-boks (hurtigrute + ukeplan fra
> summerte estimatedMinutes), kildenote for frekvens-empirien (fra
> EKSAMENSANALYSE.md, aldri oppdiktet) og prosedyre-/sjangerkort på ÉN side;
> «kap. X.Y» i forkunnskaper/fasiter skrives som markdown-lenker
> [kap. X.Y](/bok/<emne>/<emne>-X-Y); hver stor begrepsbank åpner med
> «flashcard-stoff — hopp trygt over ved førstegangslesing»-notisen (og
> definition-blokker slettes ALDRI for å «rydde»); karakter-realisme: «C er
> en god og vanlig karakter» i Del 0, ALDRI «Prioritet: perfekt» (skriv
> «høyeste prioritet»), modellbesvarelser ærlig merket + minst én autentisk
> B-/midtnivå- (ved bestått/ikke-bestått: «bestått-på-marginen»-)besvarelse;
> avkryssbar selvdiagnose-sjekkliste (☐) etter hver prøvefasit; én lett
> innstegsoppgave tidlig i teorikapitler der første oppgave ellers er full
> eksamenssjanger; abstrakte kjernetemaer åpner med hverdagsanker og bruker
> verdens-caser (ikke «en medstudent skriver …»); avvik mellom deklarert
> oppgavetid og sum deltider forklares; collapsibles har `content`-nøkkel
> med blokker (aldri tom, aldri `text`). Følg også DNA-ens studentpanel-
> seksjoner (regnefag: figurkrav + symbolliste SIST + formel-minimum +
> enhetsdeklarasjon + matematisk sannhetskontroll; jus: lovhenvisningsboks +
> Lovdata-driller + lovprefiks + faglig presisjon/toppnivå;
> drøfting: binær selvrettingsrubrikk + sitatlager-bro + relevans-ramme +
> erfarings-bro/vippe-caser). STUDENTPANEL BØLGE 4+5 (jf. README «Leserkrav»
> — SKAL inn i førsteutkastet): ALLE ensartede fasitlister varierer (aldri
> «alle a», aldri «alle felle»); distraktorer gjengir ALDRI bokas egne
> nyanser som «galt» svar; alle exercises har utfylte hints (første hint =
> hjemmel/formel/første grep, ALDRI konklusjonen) — unntak kun merket kald
> bank; boka har noen «(krevende)»-merkede oppgaver + én kald bank uten hint
> (fasit = momentliste); modellbesvarelser lander IKKE alle på samme
> kompromissform — minst én skarp-men-veid konklusjon; meta-fasit forbudt
> («en A-besvarelse ville ha drøftet …» → skriv drøftelsen UT); signal-/
> hintbokser står ETTER oppgaven de varsler; frekvenspåstander («N av M
> sett») stemmer eksakt med belegg-listene (tell!); faglige påstander
> verifiseres FØR skriving (regnefag: parametersjekk fortegnspåstander
> numerisk; jus: hjemmels-/terskelretning mot Lovdata + dommer med 1–2
> setninger faktum); kapitler > 45 min har tidsanslag per løkke eller
> pausepunkt-markører, lange modellbesvarelser har «— naturlig pausepunkt —»;
> prøvekapitler deklarerer «N prøver à ~X min» + «kan deles over flere
> kvelder»; «Lite tid?»-boksen sier at anslag er lesetid (×1,5 ved
> håndskriving); feilkoder glosses ved første bruk PER KAPITTEL; tunge
> kapitler har «Sist du var her»-forkunnskapsblokk som VISER nøkkelformlene;
> Del 0 har deltidsrute (10–12 uker, generalprøver fordelt) + «lese mye,
> skrive lite»-boks; boka har sitt samlede oppslagskort (jus: hjemmelskart;
> drøfting: «hvem eier hva»-kort; regnefag: formel-minimum).
> Skriv quiz til src/lib/data/quiz-staging/<id>.quiz.json
> (kvoter = skjelettets kvotesammendrag, AUTORITATIVT; options[0] alltid
> riktig). Referanser du er usikker på merkes (verifiser).
> VALIDER: python3 json.load per fil; kvotetelling mot skjelettet;
> grep "<forbudt-termer>" = 0; sjekk at content[] veksler teori→eksempel→oppgave
> i løkker (oppgaver inline) og at ingen oppgave krever usett forkunnskap.
> Rapporter kort: filer, kvotestatus, validering.

Etter HVER batch: `python3 -c "import json,glob; [json.load(open(f)) for f in
glob.glob('src/lib/data/chapters/<emne>-*.json')]"` — feil ⇒ fiks før neste.
Etter hele bølgen: sjekk at ALLE id-er fra skjelettet + prøvekapitler finnes
på disk; gap-fill manglende med samme prompt-mal (én fil per agent).

## Steg 2 — Wiring
- [ ] `python3 scripts/hoyskolebok/wire-bok.py <emne>` → «WIRING OK»
- [ ] Slett `src/lib/data/quiz-staging/` (mellomprodukt)
- [ ] Ny institusjon? Legg den i `src/app/bok/trinn/hoyere/institusjoner.ts` først.
- [ ] Juridiske deklarasjoner: emnet registrert i institusjoner.ts (driver
      uavhengighets-deklarasjonen) OG jus-/helse-heuristikken i
      `src/components/textbook/hoyskole-disclaimer.tsx` treffer emnet der den
      skal (jus-emner → Lovdata-linje; helse-/psykologi-emner → ikke-helseråd-
      linje) — utvid heuristikken om nødvendig. Jf. README «Juridiske
      deklarasjoner».
- [ ] **Kildegrunnlag-oppføring (produkteier-krav, sannferdighet):** legg til
      emnet i `src/lib/data/kildegrunnlag.ts` — destillert fra
      EKSAMENSANALYSE.md §8 «Kildeliste», ALDRI diktet. Skal stemme eksakt
      med arkivet: eksamenssett (grundig vs. skumlest), sensorveiledninger
      KUN der de finnes, andre kilder (emnebeskrivelse, pensumreferanser,
      Lovdata for jus), og ærlige forbehold/hull (årganger uten veiledning,
      manglende sett, regimeskifter). Siden rendres på
      `/bok/<emne>/kildegrunnlag` og lenkes automatisk fra kurssiden.

## Steg 3 — Verifiseringsbølge (2 om gangen; IKKE hopp over)
Redaktør per del-gruppe (3–4 agenter à 7–10 kapitler) + for JUS-fag ALLTID
én Lovdata-agent i tillegg.

**PROMPT-MAL verifikator** (ordrett, fyll <…>):

> Du er verifiseringsredaktør (fase 6 i docs/hoyskole-boker/PRODUKSJONSLOYPE.md)
> for læreboka <emne>. VERIFISERING med kirurgiske fiks — ikke omskriving.
> LES: <emne>/BYGGEKONTRAKT.md og <emne>/SKJELETT.md (dine deler).
> DINE FILER: <id-liste>.
> SJEKK OG FIKS: (1) konsistens over agentgrensene (notasjon/terminologi,
> ingen motstridende påstander — særlig i splittede deler); (2) alle
> «kap. X.Y»-referanser i prosa peker riktig; (3) leserkrav komplette
> (Forkunnskaper, Symbol- og formelliste der kapitlet bruker symboler,
> sjangerforankring per oppgave — prøvekapitler skal også ha Forkunnskaper;
> content[] veksler teori→eksempel→oppgave i løkker med `exercise` inline, ikke
> all teori topp / alle oppgaver bunn; INGEN oppgave krever usett forkunnskap —
> bare stoff introdusert tidligere i kapitlet eller i en refererte forkunnskap);
> (3b) nybegynner-lesning av Del 0 (jf. README «Leserkrav»): les kap. 0 som en
> student som ALDRI har hatt faget — er alle koder (sjanger-/oppgavekoder,
> feilkoder #N), karaktersjargong («C-stoff»/«A-markør») og insider-termer
> forklart ved FØRSTE bruk? Finnes «Slik leser du denne boka»-orienteringsboksen
> (type `text`/`tip`, ALDRI `definition`) med skala + kodeliste + feilregister?
> Ingen kald kode i competenceGoals/første tekstboks?;
> (3c) deloppgave-format: a), b), c) i task/solution står HVER på egen linje
> med fet merking (`**a)**`), aldri bak hverandre i løpende tekst;
> (3d) studentpanel-sjekker (jf. README «Leserkrav»): les fasitlinjene i alle
> prøve-flervalg — riktig svar SKAL variere posisjon (aldri «alle a»); «les
> Del 0 med lite tid»-test: finner en stresset student hurtigrute/ukeplan,
> kildenoten for frekvens-empirien og prosedyrekortet uten å lese resten?;
> tomme collapsibles: feltet skal hete `content` og ha blokker (en `text`-
> nøkkel eller tom array rendrer som tom boks); korrektur-grep: brukne ord
> (« vilk », «adekv »), ødelagte setninger, danske former («æ» utenom navn/
> sitat), «kapittel 0\.»-rester; grep «Prioritet: perfekt» = 0; tidsbudsjett-
> konsistens (deklarert oppgavetid vs. sum deltider forklart); «kap. X.Y» i
> fasiter er markdown-lenker til eksisterende kapitler; modellbesvarelse-
> merking konsistent (tittel vs. margnotat — en «C-besvarelse» skal VÆRE C);
> begrepsbank-notiser står først i hver stor bank; regnefag: ingen «grafisk
> drill» uten figur, og lovede figurer finnes der de loves;
> (3e) bølge 4+5-sjekker (jf. README «Leserkrav»): ALLE ensartede
> fasitlister varierer (også riktig/galt og feller — aldri «alle felle»);
> ingen flervalgsdistraktor gjengir bokas egne nyanser som «galt» svar (nær-
> sanne distraktorer forklares i fasit-kommentaren); alle exercises har
> utfylte hints uten konklusjonsrøping (unntak: merket kald bank — sjekk at
> den finnes og er merket); minst én modellbesvarelse lander skarpt (ikke
> alle på samme kompromissform); grep etter meta-fasit («en A-besvarelse
> ville», «ville ha drøftet») = 0; signal-/hintbokser står ETTER oppgaven de
> varsler; TELL hver frekvenspåstand («N av M sett») mot belegg-listen som
> følger den; kapitler > 45 min har løkke-tidsanslag/pausepunkter og
> prøvekapitler deklarerer «N prøver à ~X min» + deling over flere kvelder;
> feilkoder har gloss ved første bruk PER KAPITTEL; tunge kapitler har
> «Sist du var her»-blokk som VISER nøkkelformlene; bokas samlede
> oppslagskort finnes (jus: hjemmelskart; drøfting: «hvem eier hva»-kort;
> regnefag: formel-minimum); regnefag: ETTERREGN fortegns-/entydighets-
> påstander numerisk i fullt parameterrom (python3 — jf. DNA-regnefag
> «Matematisk sannhetskontroll»); jus: dommer har kort faktum ved første
> omtale, og faktum som utløser spesialregler har regelen undervist;
> (4) faktasjekk mot skjelettkontraktene: ETTERREGN alle talleksempler /
> kontroller vilkårslister og kausalkjeder ordrett; (5) kvoter må IKKE
> endres (tell definition-blokker før/etter).
> VALIDER: json.load; definisjonstelling uendret; grep forbudt-termer = 0.
> Rapporter: funn/fiks per kapittel, konsistensavvik, valideringsstatus.

**PROMPT-MAL Lovdata-agent (jus)** — som jus1111-kjøringen:

> Du er juridisk kildeverifikatør for <emne>. Finn alle forekomster:
> grep -in "verifiser" src/lib/data/chapters/<emne>-*.json (også sammensatte
> varianter). Verifiser HVER referanse mot lovdata.no/nettet (WebFetch/
> WebSearch): bekreft → fjern markering; feil → rett + fjern; ikke
> verifiserbar → omskriv så setningen ikke hviler på detaljen. Stikkprøv i
> tillegg 10 UMARKEDE doms-/paragrafreferanser. Sjekk lovtunge kapitler mot
> GJELDENDE rett (lovendringer etter sensorveiledningenes år!) — foreldet
> doktrine rapporteres eksplisitt og fikses (egen omskrivingsagent ved
> behov). Slutt: grep -i verifiser = 0. Rapporter tabell referanse → utfall.

## Steg 4 — Sluttport + deploy (deterministisk)
- [ ] `python3 scripts/hoyskolebok/sjekk-bok.py <emne> "<forbudt-termer>"` → BOKPORT OK.
      Sjekk også den RÅDGIVENDE «MERKNADER — nybegynner-sjargong»-seksjonen i
      utskriften (feiler ALDRI porten): karaktersjargong i første blokk uten
      forklart skala, eller uforklart kode i læringsmål. Rydd merknadene før
      deploy (jf. README «Leserkrav» — orienteringsboks type `text`/`tip`, ALDRI
      `definition`).
- [ ] Studentpanel-port (jf. README «Leserkrav»): grep «Prioritet: perfekt»
      = 0; skann prøve-fasitlinjene for «alle a»-mønster; python-sjekk at
      ingen collapsible har tom/manglende `content`-array; stikkprøv at Del 0
      har «Lite tid?»-boks + kildenote + prosedyrekort, og at «kap. X.Y» i
      fasiter er markdown-lenker. Regnefag med nye SVG-er: kjør
      `npx tsx scripts/upload-media-storage.ts` FØR deploy.
- [ ] Bølge 4+5-port (jf. README «Leserkrav»): grep «en A-besvarelse ville» /
      «ville ha drøftet» = 0 (meta-fasit); skann riktig/galt-/felle-fasiter
      for ensartet mønster (aldri «alle felle»); python-sjekk at exercises
      har ikke-tomme `hints` (unntatt merket kald bank) og at minst noen
      oppgaver er merket krevende/vanskelig; stikkprøv 3 frekvenspåstander
      mot belegg-listene; stikkprøv at prøvekapitler deklarerer «N prøver à
      ~X min» og at et kapittel > 45 min har løkke-tidsanslag/pausepunkt.
- [ ] `npm run build` → «✓ Compiled successfully» + «Kombinerte NNNN kapitler»
- [ ] Prod-curl: `PORT=3111 npm run start` i bakgrunn, deretter 200 +
      innholds-grep på: `/bok/trinn/hoyere/<inst>`, `/bok/<emne>`,
      3 kapittelruter (teori/drill/prøve), `/quiz/<et-kapittel>`,
      `/bok/<emne>/flashcards`. Sjekk at «Forkunnskaper» og «Symbol- og
      formelliste» finnes i servert HTML, og at minst ett teorikapittel viser
      en `exercise` INLINE mellom teoriblokker (læringsløkke — ikke alle
      oppgaver samlet nederst). Stopp serveren.
- [ ] Oppdater statustavlen i docs/hoyskole-boker/README.md og kryss av i
      TODO-OPUS.md
- [ ] Commit + push (melding: «<EMNEKODE>-bok (<inst>): eksamensrettet
      høyskolebok» + hovedtall). ALDRI commit quiz-staging.

## Kjente feller (fra econ1310/jus1111-løpene — les før start)
- Flashcards genereres KUN fra toppnivå `definition`-blokker med `title`.
- `options[0]` alltid riktig i quiz; skjelettets kvotetabell er fasit.
- `chapterNumber` alltid del-basert («2.3») — aldri lineær.
- LaTeX i JSON = `\\`; generer via python json.dump.
- Agenter dør på sesjonsgrenser: innholdet ligger som regel på disk — mål
  disk og gap-fill, aldri bygg på nytt.
- combine-chapters (prebuild) leser alle registry-id-er — én ugyldig JSON
  knekker build; sjekk-bok.py fanger det først.

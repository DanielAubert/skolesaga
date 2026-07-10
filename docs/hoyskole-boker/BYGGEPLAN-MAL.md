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
- [ ] `npx tsc --noEmit` → stille
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

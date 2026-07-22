# Byggekontrakt — TMA4110 Lineær algebra, komplekse tall og differensiallikninger (NTNU)

Instansiert fra BYGGEKONTRAKT-MAL for `tma4110`. Emne-slug: `tma4110`,
EMNEKODE: `TMA4110` (arkivkode TMA4110/TMA4115). Arketype: **regnefag**
(`DNA-regnefag.md`). Les også `tma4110/SKJELETT.md` (identitet §1.5–1.6,
makrostruktur, per-kapittel-DNA) og `tma4110/EKSAMENSANALYSE.md`.

> Alle steder malen sier `<emne>` = `tma4110`, `<EMNEKODE>` = `TMA4110`,
> `<courseId>` = `tma4110`. Kryssbok-lenker: kun VGS-bøker som finnes
> (R1, R2, 1T, S2) lenkes; ubygde NTNU-forkunnskapsemner (TMA4101/TMA4106)
> skrives som klartekst med aktiveringsmarkør (SKJELETT §1.5 pkt. 9).

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
   `[tittel](/bok/<courseId>/<chapterId>)` — KUN til kapitler som finnes i
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
  markdown-lenke `[kap. X.Y](/bok/<emne>/<emne>-X-Y)`; død «se kapittel»-tekst
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

## Fagspesifikk stil (TMA4110 — fra SKJELETT §1.5–1.6)

### Notasjonsstandard (UFRAVIKELIG — hold konsekvent over alle agentgrenser)
- **Lineær algebra (Lays notasjon):** $\operatorname{Nul}A$, $\operatorname{Col}A$,
  $\operatorname{Row}A$, $\operatorname{rang}A$; $\operatorname{Span}\{\mathbf v_1,\dots\}$;
  koordinatvektor $[\mathbf x]_{\mathcal B}$; basisskiftematrise
  $P_{\mathcal C\leftarrow\mathcal B}$; standardmatrise $A=[T]$; egenverdier via
  $\det(A-\lambda I)=0$; diagonalisering $A=PDP^{-1}$; ortogonal diagonalisering
  $A=PDP^{T}$ ($P$ ortogonal — hold $P$-konvensjonen konsekvent); indreprodukt
  $\langle\mathbf u,\mathbf v\rangle$; ortogonal projeksjon $\operatorname{proj}_W\mathbf y$;
  ortogonalkomplement $W^{\perp}$; normallikningene $A^{T}A\hat{\mathbf x}=A^{T}\mathbf b$.
- **Komplekse tall:** $z=x+iy$, $\bar z=x-iy$, $|z|=\sqrt{x^2+y^2}$,
  $z=r(\cos\theta+i\sin\theta)=re^{i\theta}$, $\arg z=\theta$; Eulers formel
  $e^{i\theta}=\cos\theta+i\sin\theta$; de Moivre
  $(\cos\theta+i\sin\theta)^n=\cos n\theta+i\sin n\theta$; $n$-te røtter jevnt på
  sirkel med radius $|c|^{1/n}$. **Boka stopper ved det elementære.**
- **ODE:** 1. orden separabel $y'=f(x)g(y)$; 1. orden lineær $y'+p(x)y=q(x)$ med
  integrerende faktor $\mu=e^{\int p\,dx}$; 2. orden homogen $y''+py'+qy=0$ med
  karakteristisk likning $r^2+pr+q=0$ (tre tilfeller); inhomogen via ubestemte
  koeffisienter med resonansmultiplikasjon $x^s$; system $\mathbf x'=A\mathbf x$ via
  egenverdier. Løsning ALLTID $y_h+y_p$; integrasjonskonstanter navngis.
- **Eksakte svar** (heltall, brøk, $\sqrt2$, $e^{i\pi/3}$, $C_1e^{2x}+C_2e^{-x}$) —
  ALDRI desimaltilnærming. All matematikk i `$...$`/`$$...$$`; ingen unicode-brøker;
  LaTeX-backslash er `\\` i JSON (generer via python `json.dump`).

### Forbudt-termer (grep-sjekkes = 0 i sjekk-bok.py)
`Prioritet: perfekt` · `en A-besvarelse ville` · `ville ha drøftet` ·
**pensum utenfor boka:** `Cauchy-Riemann` / `Cauchy–Riemann` · `residy` ·
`Laurent` · `divergensteorem` · `Stokes` · `Greens teorem` · `Green's` ·
`fluks` · `linjeintegral` · `dobbeltintegral` · `flateintegral` · `Jacobi` ·
`separasjon av variable` · `Fourier` · `partiell differensial` / `PDE` ·
`vektorkalkulus` · `konform`. (Dette er TMA4111/tma4135-stoff; boka skal IKKE
nevne det som eget pensum — kun kodeforbeholdet i kap. 0.1/11.1 kan si at det
IKKE er dekket her.)

### Arketypesærtrekk (regnefag — DNA-regnefag)
- **Modellbesvarelser = A-besvarelser:** mellomregning ledd for ledd, navngitt
  teorem der argumentet bæres, verbal konklusjonssetning, sluttsvar markert. Del 0
  og øvingseksamener skal også ha minst én autentisk B-/midtnivå-besvarelse
  (ærlig merket) — ikke alle på samme kompromissform.
- **Matematisk sannhetskontroll (UFRAVIKELIG):** ALLE fortegns-, entydighets- og
  «alltid»-påstander PARAMETERSJEKKES NUMERISK (python3) i fullt parameterrom FØR
  de skrives. Etterregn ALLE talleksempler/fasiter numerisk. En «vis at …» der
  påstanden ikke holder ubetinget, kan ikke løses — skriv betingelsen eksplisitt.
- **Kode E-kalibrering:** hvert kapittel trener formlene **utenat** (ingen «slå opp
  i formelsamling»); kap. 0.1 og 11.1 gjengir kodeforbeholdet og utenat-banken.
- **Diagonaliserbarhet begrunnes ALLTID** (distinkte egenverdier / symmetri /
  triangulær / geometrisk = algebraisk multiplisitet); ikke-diagonaliserbar vises
  ved eksplisitt for lav egenrom-dimensjon.
- **Bevis-sjanger (siste oppgave ~42 %):** komplette «vis at …» med
  forutsetningssjekk, navngitt teorem, «⇒»/«⇔»-skille (vis begge veier).
  Bevistemaer forankres i sine kapitler (nilpotens/potenser 5.3, $A^2=A$ i 5.1,
  inverterbarhet 2.2/2.3, underrom 3.1, $A^{T}A$ i 6.4) + egen bevis-drill 11.2.
- **Figurkrav:** komplekse tall (skisse i planet — $z^n=c$-røtter på sirkel),
  faseportrett for ODE-system (10.2/10.3), og evt. geometrisk projeksjon (6.3)
  bør ha SVG der oppgaven ber om skisse. Ber en oppgave/prøve om figur («skisser»,
  «tegn i det komplekse planet», «skisser faseportrettet»), SKAL løsningen vise en
  faktisk SVG-blokk (ikke bare «Figur i ord»). SVG-er → `public/images/textbook/tma4110/`,
  wires som `image`-blokker, lastes opp til Storage før deploy.
- **Kryssbok-lenker:** R1/R2/1T/S2 lenkes der de finnes (vektorer R2-5-1,
  polynomer R1-1-1, areal/volum-determinant R2-5-5); ubygde NTNU-forkunnskapsemner
  som klartekst med *(NTNU-forkunnskapsemne, ikke bygget ennå; aktiver lenke når den
  finnes)*. Emne-slug i lenker: `/bok/tma4110/tma4110-X-Y`.

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

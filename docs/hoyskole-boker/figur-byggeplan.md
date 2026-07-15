# Figur-byggeplan — økonomifag (econ1210 + econ1310)

**Dato:** 15. juli 2026. Bygger på `figur-kartlegging.md` (119 hull). Her: konfidensvurdering + hvilken gjenbrukbar SVG-mal hvert hull løses med, + konkret spec.

## Ærlig selvsikkerhet

- **109 av 118 (92 %) kan jeg lage med HØY selvsikkerhet** 🟢 — de er de samme standard 2D-linjediagrammene som allerede finnes som 23 ferdige SVGer i `public/images/textbook/econ1210/` (samme stil: viewBox 440×360, Georgia-serif, akser med piler, E-kurve rød/T-kurve blå, stiplede hjelpelinjer, arealer som fylte polygoner).
- **9 er MIDDELS** 🟡 — krever mer omtanke: Slutsky-dekomponering (substitusjons-/inntektseffekt på indifferenskurver), badekarsdiagram, og IS-RR-PK trepanel-makro. Gjørbare, men jeg vil bygge dem varsomt og verifisere ekstra.
- Nye SVGer er gitignorert → må lastes opp til Supabase Storage med `scripts/upload-media-storage.ts`, ellers 404 i prod.

## Gjenbrukbare maler (bygg malen én gang, parametriser per oppgave)

| Mal | Antall hull | Konfidens |
|---|---|---|
| MAL-2: overskudd/velferd-arealer (E,T + fylte trekanter KO/PO/dødvekt) | 27 | 🟢 |
| MAL-1: tilbud-etterspørsel-kryss (E fallende, T stigende, likevekt A, skift/bevegelse) | 26 | 🟢 |
| MAL-13: IS-RR-PK trepanel (MIDDELS) | 17 | 🟡 |
| MAL-6: skatt/subsidie-kile (E,T + vertikal kile + prov.rektangel) | 16 | 🟢 |
| MAL-9: arbeidsmarked (E_arbeid fallende, T_arbeid stigende i lønn-sysselsetting) | 13 | 🟢 |
| MAL-5: monopol (E, MR, MC + p_m>MC, dødvekt) | 5 | 🟢 |
| MAL-7: priskontroll (E,T + horisontal takst-/gulvlinje + over-/underskuddspil) | 4 | 🟢 |
| MAL-16: tidslinje/flyt/søyle | 3 | 🟢 |
| MAL-8: budsjett+indifferens (rett budsjettlinje + konvekse I-kurver) | 2 | 🟢 |
| MAL-8b: budsjettlinje alene | 2 | 🟢 |
| MAL-X: spesial (gjennomgås enkeltvis) | 2 | 🟡 |
| MAL-12: Phillips-kurve | 1 | 🟢 |

> Mange oppgaver trenger FLERE figurer (f.eks. «bevegelse langs kurven» vs «skift av kurven» = 2 paneler; skatt = før/etter + provenyrektangel). Der bygger jeg delfigurer.

## econ1210 (87 hull)


### econ1210-1-1.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | econ1210-1-1-ex-2 (Eksempel 2: Horisontal summering av to kjøpere) | MAL-1 | Figur i ord: to individuelle fallende E-kurver + markedets E-kurve som horisontal sum, med punktene (55,5) og (40,10) og en knekk der kjøper A slutter (p=20). p loddrett, x vannrett. |
| 🟢 HØY | econ1210-1-1-ex-3 (Eksempel 3: Tolke a og b) | MAL-1 | Figur i ord: rett fallende E-kurve x=600-3p som treffer mengdeaksen ved x=600 (p=0) og prisaksen ved p=200 (x=0). |
| 🟢 HØY | econ1210-1-1-ex-4 (Eksempel 4: Skift eller bevegelse?) | MAL-1 | Tre figurer i ord: (a) bevegelse langs E-kurven fra punkt A til B (opp/venstre); (b) og (c) parallelt skift av hele E-kurven utover med pil. |

### econ1210-1-2.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | Eksempel 2: Lese en lineær T-kurve (econ1210-1-2-ex-2) | MAL-1 | «Figur i ord»: en stigende, rett T-kurve (p loddrett, x vannrett) som treffer prisaksen ved p=50, med stiplet vannrett linje fra p=120 til kurven og loddrett ned til x=140. |
| 🟢 HØY | Eksempel 3: Sabotasje mot anlegg (econ1210-1-2-ex-3) | MAL-16 | «Figur i ord»: opprinnelig stigende T-kurve som flytter innover til ny T-kurve (T0→T1) med pil, E-kurven ligger fast; mindre mengde tilbys ved enhver pris. |
| 🟢 HØY | Oppgave 5b (econ1210-1-2-oppg-5 / e5) | MAL-1 | Løsning ber om «figur i ord»: opprinnelig T-kurve T0 og ny T1 forskjøvet oppover (parallellskift ved nye sikkerhetskrav) med pil, p loddrett/x vannrett. |

### econ1210-1-3.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | Eksempel 1: Likevekten grafisk med prismekanismen | MAL-2 | Fallende E-kurve og stigende T-kurve som krysser i likevektspunktet A med stiplede hjelpelinjer til p* og x*; tilbudsoverskudd ved pris over p* |
| 🟢 HØY | Eksempel 2: Regn ut likevekten og kontroller (x=900-3p, x=p-100) | MAL-1 | E/T-kryss i A, likevekt p*=250, x*=150, med prismekanismen begge veier |
| 🟢 HØY | Eksempel 3: Full figurleveranse på eksamensnivå (x=1200-4p, x=2p-300) | MAL-1 | E-kurve (aksekutt x=1200, p=300), T-kurve (start p=150), kryss A, likevekt p*=250, x*=200 |
| 🟢 HØY | Oppgave 6 (krevende, x=600-2p, x=3p-400) | MAL-2 | Likevekt A=(200,200) og tilbudsoverskudd ved p=250; figur med prismekanismen begge veier |

### econ1210-1-4.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | Eksempel 2: Samme kurve, to punkter | MAL-1 | Fallende rett E-kurve x=600-2p (treffer p=300 og x=600) med to punkter A(250,100) elastisk og B(50,500) uelastisk, stiplede hjelpelinjer |
| 🟢 HØY | Eksempel 3: Verbal resonnering uten regning (naturgass) | MAL-1 | Bratt (uelastisk) E-kurve + stigende T; T skifter innover; ny likevekt B høyere på E; kontrast mot slakere E-kurve på lang sikt (mindre prishopp) |

### econ1210-1-5.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | econ1210-1-5-ex1 (Eksempel 1: Økt etterspørsel, E ut) | MAL-1 | Figur i ord: E og T krysser i A; E skifter parallelt utover til nytt kryss B høyere/til høyre. Stiplede hjelpelinjer. Tall A=(200,200), B=(212,236). |
| 🟢 HØY | econ1210-1-5-ex2 (Eksempel 2: Kostnadsøkning, T inn) | MAL-1 | Figur i ord: T skifter parallelt oppover/innover, nytt kryss B høyere/til venstre. A=(200,200), B=(206,188). Denne er delvis dekket av det generiske kurveskift.svg-bildet lenger opp, men ikke med disse tallene. |
| 🟢 HØY | econ1210-1-5-ex3 (Eksempel 3: Bratt vs. slak E, samme tilbudsskift) | MAL-1 | Figur i ord: to diagrammer side om side med samme startkryss A=(200,200) og samme T; marked I bratt E, marked II slak E; samme T-innskift gir ulik pris/mengde-fordeling (+15/-15 vs +10/-30). |
| 🟢 HØY | econ1210-1-5-oppg-helning (oppg. 3, e2) | MAL-1 | Løsning ber om figurbeskrivelse: bratt E (uelastisk) vs. slak E (elastisk), samme T-innskift, B glir oppover E-kurven. |
| 🟢 HØY | econ1210-1-5-ex4 (Eksempel 4: To samtidige innskift, ubestemt pris) | MAL-1 | Figur i ord: E og T skifter begge innover samtidig; B trekkes til venstre (mengde ned, bestemt), men vertikalt drar E ned og T opp (pris ubestemt). To talltilfeller (pris uendret / pris opp). |
| 🟢 HØY | econ1210-1-5-ex5 (Eksempel 5: Lekkasje ved anleggsbortfall) | MAL-1 | Figur i ord: T skifter innover; ved gammel pris p=200 er horisontal avstand = anleggsbortfall (100); nytt kryss B=(160,220) høyere på E. Stiplet loddrett ved gammel og ny pris — gapet er lekkasjen (60). |
| 🟢 HØY | econ1210-1-5-oppg-lekkasje (oppg. 5, e4) | MAL-1 | Løsning beregner lekkasje (bortfall 150, faktisk fall 90, lekkasje 60) men uten figur; lekkasje-poenget er sterkt figuravhengig. |

### econ1210-1-6.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | Gjennomregnet eksamenscase, del b og d (econ1210-1-6-case) | MAL-1 | «Figur i ord»: markedskryss for ferjesamband (E x=900-3p, T x=2p-100) med likevekt A; del d viser T-skift innover (x=2p-250) til ny likevekt B høyere på E — konkret case-figur. |
| 🟢 HØY | Oppgave 9d (econ1210-1-6-o9 / e9) | MAL-1 | «Figur i ord»: sabotasje skifter T-kurven innover (parallelt) til nytt kryss B; generisk markedskryss-SVG er lenket øverst, men skiftet/B for dette konkrete caset (x=1000-2p, x=3p-500→3p-650) er ikke tegnet. |
| 🟢 HØY | Oppgave 10b (econ1210-1-6-o10 / e10) | MAL-1 | «Figur i ord»: samtidige skift — E inn og T inn samtidig fra startkryss A=(200,200), begge trekker mengden ned mens prisretningen er ubestemt. |

### econ1210-1-prove.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | Prøve 3a — enkeltskift (reklame skifter E ut) | MAL-1 | Startlikevekt A=(250,300), E-kurven skifter parallelt utover til B=(280,360); akser p/x, begge kurver, A og B markert |
| 🟢 HØY | Prøve 3b — samtidige skift (E inn og T inn) | MAL-1 | Startkryss A=(250,300); E skifter innover og T skifter innover samtidig, mengden bestemt ned, prisretning ubestemt; ny likevekt (250,180) |
| 🟢 HØY | Prøve 4d — sabotasje/lekkasje (T inn) | MAL-1 | T-kurven skifter parallelt innover fra sabotasje; nytt kryss B høyere på E; illustrerer lekkasje (mengdefall 120 < bortfall 200); den generiske markedskryss.svg i p4 viser kun startlikevekten, ikke skiftet/lekkasjen |

### econ1210-2-1.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | Eksempel 1: SO som areal mellom kurvene | MAL-2 | E-kurve x=300-p fra A=(0,300), T-kurve x=2p fra origo, kryss L=(200,100); SO = trekant A-L-O mellom E og T fram til likevekt |
| 🟢 HØY | Eksempel 2: KO, PO og SO regnet ut og navngitt | MAL-2 | Prislinje p*=100; KO=trekant A-P-L (mellom E og pris), PO=trekant P-O-L (mellom pris og T); tallfestet 20000/10000/30000 |

### econ1210-2-2.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | econ1210-2-2-ex-1 (Eksempel 1: De tre kriteriene i likevekten) | MAL-2 | Figur i ord: E og T krysser i L; SO-trekanten mellom E og T fram til x*; hjelpelinjer til p* og x*. Kapitlet har INGEN bilder overhodet. |
| 🟢 HØY | econ1210-2-2-ex-2 (Eksempel 2: Dødvektstap ved for lite omsatt) | MAL-2 | Figur i ord: E (p=400-x) og T (p=x) krysser i L=(200,200); faktisk mengde x=140 markert; dødvekttrekant mellom E og T fra 140 til 200 (areal 3600). |
| 🟢 HØY | econ1210-2-2-ex-3 (Eksempel 3: Kriteriene brutt av et pristak) | MAL-2 | Figur i ord: E, T, likevekt L=(200,100); vannrett makspris-linje p=80 under p*; tilbudt 160 vs etterspurt 220; dødvekttrekant fra x=160 til x*=200 (areal 1200). |
| 🟢 HØY | econ1210-2-2-oppg-5 (oppg. 5, v1, b) | MAL-2 | Figur i ord i løsningen: E, T, likevekt L=(200,200); makspris-linje p=150; kortside x=150; dødvekttrekant fra 150 til 200 (areal 2500). |

### econ1210-2-prove.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | Prøve 3 (2.C) fasit — velferdsregnskap etter T-skift | MAL-2 | To likevekter L0=(240,120) og L1=(200,160) etter parallellskift av T opp med 60; KO/PO/SO-arealer før og etter, reelt ressurstap vs. dødvektstap |

### econ1210-3-1.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | Eksempel 1: Skiftet i figur (Trinn 1) | MAL-6 | Parallellskift av T-kurven opp med t=25 til T'; ny likevekt B oppe til venstre for A, med stiplede hjelpelinjer |
| 🟢 HØY | Eksempel 2: Ny likevekt (Trinn 2) | MAL-6 | Ny likevekt B (opp/venstre for A): markedspris 210→220, mengde 270→240, selgers nettopris 195 avlest på gammel T |
| 🟢 HØY | Eksempel 5: Full firetrinnsmetode (Trinn 1–4, x=1200-5p, x=3p-200, t=32) | MAL-6 | T'-skift 32 over T, ny likevekt B=(265,187), nettopris 155, og dødvektstrekant mellom E og gammel T fra x1=265 til x0=325 |

### econ1210-3-2.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | Eksempel 1: Subsidie gjennom firetrinnsmetoden | MAL-1 | Opprinnelig likevekt A=(200,200), ny tilbudskurve T' parallelt 30 under T, ny likevekt B=(230,185); selgers nettopris 215 lest på gamle T over B |
| 🟢 HØY | Eksempel 2: Paradokset med tall (velferdsregnskapet) | MAL-6 | A=(300,125), B=(380,105); dødvektstrekant til høyre for x0=300 mellom T (øverst) og E (nederst) fram til x1=380 — overproduksjonens verditap |

### econ1210-3-3.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | econ1210-3-3-ex-1 (Eksempel 1: Maksimalpris på strøm) | MAL-7 | Figur i ord: E, T, likevekt A=(600,400); makspris-linje p=300; tilbudt 400 (venstre), etterspurt 800 (høyre), mangel 400; dødvektstap fra 400 til 600. Den generiske maksimalpris.svg finnes, men ikke med disse tallene. |
| 🟢 HØY | econ1210-3-3-ex-2 (Eksempel 2: Minstelønn og arbeidsledighet) | MAL-7 | Figur i ord: w loddrett, N vannrett; arbeidsetterspørsel E fallende, arbeidstilbud T stigende, likevekt A=(260,120); minstelønn w=140 over A; sysselsetting 220, arbeidstilbud 320, ledighet 100. NB: det finnes et generisk minstelonn.svg-bilde, så denne er delvis dekket. |
| 🟢 HØY | econ1210-3-3-ex-l2b (oppg. 4, e-l2b, b) | MAL-7 | Løsning (gassmarked, makspris p_maks=240) regner kortside 120, mangel 360 uten egen figur; generisk maksimalpris.svg dekker prinsippet men ikke tallene. |

### econ1210-3-4.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | Gjennomregnet eksamenscase b og d (econ1210-3-4-case) | MAL-6 | «Figur i ord»: skattekile ved konkret marked (x=800-4p, x=2p-100, t=30) med T' 30 over T, likevekt A→B (200,150)→(160,160), dødvektstrekant. Generisk stykkskatt-kile-SVG er lenket øverst i kapitlet, men caset har kun figur i ord. |
| 🟢 HØY | Oppgave 5 (econ1210-3-4-ex-d5 / e-d5) subsidie-paradokset | MAL-6 | Subsidie s=30 med dødvektstap til høyre for x0; hint sier «Dødvektstap ligger til høyre for x0». Ingen subsidie-figur rendret (kun skatt-kile-SVG finnes i kapitlet). |

### econ1210-3-prove.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | Prøve 2 fasit d (econ1210-3-prove-p2-fasit-txt) | MAL-6 | «Figur i ord»: subsidie skifter T ned med s=30 (T'), ny likevekt B=(330,185); dødvektstrekant til HØYRE for x0. Prøve 1 har en faktisk stykkskatt-SVG, men subsidiefiguren mangler. |
| 🟢 HØY | Prøve 3 fasit b/c (econ1210-3-prove-p3-fasit-txt) | MAL-7 | Maksimalpris under likevekt: kortside-regelen (tilbud 120 = kortside, etterspørsel 480), mangel 360, tilleggstap ved rasjonering — forutsetter et diagram men ingen figur rendret. |
| 🟢 HØY | Prøve 4 fasit a (econ1210-3-prove-p4-fasit-txt) | MAL-1 | Brann setter anlegg ut → T skifter inn (T'), ny likevekt oppe til venstre, lekkasje (bortfall horisontalt > mengdefall). Beskrevet uten egen figur. |
| 🟢 HØY | Prøve 4 fasit c (econ1210-3-prove-p4-fasit-txt) | MAL-6 | Subsidie s=25: dødvektstrekant til høyre for x0=300 (mengde presset til 330), statens utlegg som rektangel — forutsatt figur uten rendring. |

### econ1210-4-1.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | econ1210-4-1-ex1 (Eksempel 1: Uregulert eksternalitet) | MAL-2 | Figur i ord: E, T (privat MK), SMK parallelt 25 over T; markedslikevekt A=(400,300), optimum B=(370,315); dødvekttrekant mellom SMK og E fra 370 til 400. Generisk eksternalitet-pigou.svg finnes, men ikke med disse tallene. |
| 🟢 HØY | econ1210-4-1-ex2 (Eksempel 2: Pigou-avgiften gir riktig mengde) | MAL-6 | Figur i ord: E, T, uregulert A=(100,200); SMK 30 over T krysser E i B=(60,210); Pigou-avgift løfter T til SMK; dødvekttrekant (60 til 100) elimineres. |
| 🟢 HØY | econ1210-4-1-ex-vansk (oppg. 3, e-vansk, a-b) | MAL-2 | Figur i ord: E, T, A=(300,200); SMK 30 over T, optimum B=(260,210); dødvekttrekant fra 260 til 300 (areal 600). |

### econ1210-4-2.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟡 MIDDELS | Begrepsbank: Badekarsdiagrammet (econ1210-4-2-bb-badekar) | MAL-X | Beskriver eksplisitt et badekarsdiagram: to bedrifters marginale rensekostnader tegnet mot hverandre, kostnadseffektivt kutt der de møtes (like MRK). Kalt «valgfri illustrasjon» men ingen figur finnes. |

### econ1210-4-prove.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | Prøve 4a — Pigou-figur (klimaoppgave) | MAL-2 | E fallende, T stigende, uregulert likevekt A=(200,200); SMK parallelt 30 over T krysser E i B=(160,210); dødvektstrekant mellom SMK og E fra 160 til 200 |

### econ1210-5-1.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | Eksempel 2: Tilpasningen med figur i ord (econ1210-5-1-ex-2) | MAL-5 | «Figur i ord»: E faller fra 60, MI dobbelt så bratt krysser mengdeaksen ved 60, MK vannrett ved 20, x_M=40 der MI=MK, p_M=40 lest opp på E. Kapitlet har én generell monopol-tilpasning-SVG, men dette konkrete talleksemplet er kun figur i ord. |
| 🟢 HØY | Eksempel 3: Full monopoltilpasning (econ1210-5-1-ex-3) | MAL-5 | «Figur i ord»: E fra 100, MI dobbelt bratt (krysser x ved 150), MK=60, x_M=60, p_M=80 lest av E — konkret eksamensnivå-case uten egen figur. |

### econ1210-5-2.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | Eksempel 2: En ny kabel svekker markedsmakten | MAL-5 | To E-kurver gjennom samme område — en bratt (før kabel) og en flatere (etter) — med vannrett MK; flat E gir lavere monopolpris, høyere mengde og mindre pris–MK-gap |

### econ1210-5-3.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | Eksempel 1: Nettavis med MK=0 — lønnsom eller ikke? | MAL-2 | E-kurve x=1000-5p fra p=200 til x=1000, MK-linja på mengdeaksen (p=0), KO-trekant under E over pris 0 (100000) mot fast kostnad B; underskudd = hele B |
| 🟢 HØY | Eksempel 2: Full naturlig monopol-drøfting (betalingsmur) | MAL-2 | E fallende, MK nær mengdeaksen, MI-kurve dobbelt så bratt krysser MK ved x_M langt til venstre for x_opt; betalingsmur-pris lest på E; dødvektstrekant mellom E og MK fra x_M til x_opt |

### econ1210-5-4.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | econ1210-5-4-ex-1 (Eksempel 1: Kafémarkedet) | MAL-5 | Figur i ord: kort sikt — egen fallende E-kurve, MI=MK, pris over GK, profitt-rektangel; lang sikt — E-kurven tangerer GK-kurven ved p=GK (nullprofitt), men p>MK. Kapitlet har INGEN bilder. |
| 🟢 HØY | econ1210-5-4-ex-2 (Eksempel 2: Frisørene / kartell) | MAL-2 | Figur i ord: markedets E faller; uten avtale pris ned mot MK; med samordning opptrer de som monopol (MI=MK, pris opp p_M, mengde ned x_M); dødvekttrekant mellom E og MK fra kartellmengde til effektiv mengde. |

### econ1210-5-5.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | Gjennomregnet case b og c (econ1210-5-5-case) | MAL-2 | «Figur i ord»: monopol x=140-2p, MK=20; E, MI (fra 70, krysser x ved 70), MK=20, x_M=50, p_M=45; dødvekttrekant x_M=50→x_opt=100. Kapitlet har generell monopol-velferd-SVG øverst, men caset selv kun figur i ord. |
| 🟢 HØY | Oppgave 9 (econ1210-5-5-ex-9 / e-9) full eksamensoppgave | MAL-2 | «Figur i ord» for naturlig monopol x=120-p, MK=20, B=1600: E, MI, MK, x_M=50, p_M=70, dødvekttrekant 50→100. Generisk monopol-velferd-SVG er lenket, men det spesifikke caset (inkl. KO ved p=MK og B) er kun figur i ord. |
| 🟢 HØY | Oppgave 10 (econ1210-5-5-ex-10 / e-10) kartellvariant | MAL-2 | «Figur»: dødvekttrekant mellom E og MK fra x_M=60 til x_opt=120 for kartell x=240-3p, MK=40. Ingen figur (verken SVG eller figur i ord med akser) — kun trekant nevnt i løsningen. |

### econ1210-5-prove.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | econ1210-5-prove-p2-fasit (Prøve 2 fasit, oppg. b) | MAL-2 | Figur i ord: E fra 90, MK vannrett ved 30, MI dobbelt så bratt krysser MK ved x_M=60, opp til E gir p_M=60; frikonkurransepunkt (120,30); dødvekttrekant mellom E og MK fra 60 til 120 (areal 900). Prøven har IKKE eget bilde (til forskjell fra Prøve 1 og 4). |
| 🟢 HØY | econ1210-5-prove-p3-fasit (Prøve 3 fasit, naturlig monopol) | MAL-2 | Beskriver KO-trekant ved p=MK=0 (grunnlinje 250, bredde 1000, areal 125000) og lønnsomhetsvilkåret KO>B, uten figur. Naturlig monopol med fallende GK er sterkt figuravhengig, men ingen figur/omtale av 'figur i ord' — likevel ville en figur gitt stor nytte. |

### econ1210-6-1.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | Eksempel 1: Likevekt i arbeidsmarkedet | MAL-9 | E-kurve (arbeidsetterspørsel) fallende, T-kurve (arbeidstilbud) stigende, kryss A ved w*=200, N*=1000, stiplede hjelpelinjer til aksene |
| 🟢 HØY | Eksempel 2: Lønnssubsidie med deling | MAL-6 | A=(1000,200), ny arbeidstilbudskurve T' parallelt 30 under T, ny likevekt B=(1100,180); effektiv lønn 210 lest på gamle T over B |
| 🟢 HØY | Eksempel 3: Lønnsskatt på bedriftene | MAL-6 | A=(600,250), ny etterspørselskurve E' parallelt 40 under E, ny likevekt B=(520,230); arbeidsgivers kostnad 270 lest på gamle E over B |

### econ1210-6-3.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | Eksempel 1: Full velferdsanalyse av import (econ1210-6-3-ex1) | MAL-2 | «Figur i ord»: autarkilikevekt A=(400,300), verdensprislinje p_v=200 under A, produksjon 100 (T), forbruk 600 (E), import 500 = vannrett avstand; KO vokser, PO krymper. Kapitlet har generell import-SVG, men dette talleksemplet kun figur i ord. |
| 🟢 HØY | Eksempel 2: Velferdsanalyse av eksport (econ1210-6-3-ex2) | MAL-2 | «Figur i ord»: A=(300,200), verdensprislinje p_v=250 over A, forbruk 150 (E), produksjon 400 (T), eksport 250; PO vokser, KO krymper, gevinsttrekant 6250. Generell eksport-SVG finnes, men talleksemplet kun figur i ord. |
| 🟢 HØY | Eksempel 3: Eksportrestriksjon på gass (econ1210-6-3-ex3) | MAL-2 | «Figur i ord»: verdensprislinje 250 gir fri-handel; innenlandspris presset til 220 flytter forbruk 150→240 langs E og produksjon 400→340 langs T; tapstrekant mellom verdensprislinja og E over de omdirigerte enhetene. Ingen figur (kun import/eksport-SVG finnes, ikke restriksjon). |

### econ1210-6-prove.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | Prøve 4 fasit b) — arbeidsgiveravgift t=45 | MAL-6 | Arbeidsmarkedsdiagram (w loddrett, N vannrett): E' parallelt 45 under E, ny likevekt B=(680,235) ned/venstre for A=(800,250), arbeidsgivers kostnad 280 avlest på gammel E |

### econ1210-7-1.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | Eksempel 1: Budsjettlinja tegnet og tolket | MAL-8b | Budsjettlinje fra (0,120) til (40,0), mat x1 vannrett, alt annet x2 loddrett, helning -3; område innenfor/utenfor råd |
| 🟢 HØY | Eksempel 2: Prisøkning roterer linja | MAL-8b | Budsjettlinja roterer innover om loddrett endepunkt (0,120): vannrett skjæring fra (40,0) til (26,7,0), brattere linje, ny helning -4,5 |
| 🟡 MIDDELS | Eksempel 3: Prisøkning på mat — tilpasning og de to effektene | MAL-8 | Gammel budsjettlinje (0,80)-(40,0) med tilpasning E0, ny brattere linje (0,80)-(32,0) med tilpasning E1 på lavere indifferenskurve; hjelpelinje for substitusjons- vs. inntektseffekt |
| 🟢 HØY | Eksempel 4: Støtteordning med knekk i budsjettlinja | MAL-6 | Budsjettlinje med knekk i (100,80): slak del (0,100)-(100,80) med relativ pris -0,2, bratt del (100,80)-(260,0) med helning -0,5 |

### econ1210-7-prove.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟡 MIDDELS | Prøve 1 fasit b/c) — matprisøkning, budsjettlinje-rotasjon og effektdekomponering | MAL-8 | Budsjettlinje som roterer innover om det loddrette endepunktet (mat-endepunkt 40→32), ny tangering E1 på lavere indifferenskurve, og hjelpelinje som dekomponerer substitusjons- og inntektseffekt |

### econ1210-8-1.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | Drilloppgave 5 (d5) — monopolets marginalinntekt | MAL-1 | Fallende E-kurve med MI-kurve under, dobbelt så bratt, som starter i samme punkt på p-aksen og treffer x-aksen på halve mengden |

### econ1210-8-2.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | Eksempel: fra nyhetsbilde til grep (korn-eksport) | MAL-2 | E fallende, T stigende, verdenspris pV som vannrett linje over autarkiprisen; eksportrestriksjon presser innenlandsk pris ned; gevinst-rektangel/trapes og netto tapstrekant |

### econ1210-8-3.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | econ1210-8-3-fasit1-txt oppg. 1a (T-kurven) | MAL-X | Figur i ord: stigende T-kurve i anleggsmodellen; høyden = enhetskostnad i dyreste anlegg i drift. Hele øvingseksamenen har INGEN bilder. |
| 🟢 HØY | econ1210-8-3-fasit1-txt oppg. 1b (SO) og 1c (ekstern virkning) | MAL-2 | 1b: figur i ord med E, T og SO-areal mellom kurvene. 1c: figur i ord med markedets T og høyere samfunnsøkonomisk T, markedsmengde til høyre for optimum, effektivitetstap-trekant. |
| 🟢 HØY | econ1210-8-3-fasit2-abc oppg. 2a og 2c | MAL-16 | 2a figur i ord: E (skjærer prisaksen p=300), T (skjærer p=50), kryss A, likevekt (300,200). 2c figur i ord: T flyttet 40 opp til T', ny likevekt B=(252,216) med helningsdrøfting. |
| 🟢 HØY | econ1210-8-3-fasit2-def oppg. 2d (stykkskatt) | MAL-6 | Figur i ord: E, opprinnelig T, T' parallelt 25 over T; A=(300,200)→B=(270,210); markedspris 210 leses av B, nettopris 185 på gamle T; loddrett avstand = avgift 25. |
| 🟢 HØY | econ1210-8-3-fasit2-ef oppg. 2e (dødvektstap) | MAL-6 | Figur i ord: dødvekttrekant mellom E (øverst), gamle T (nederst) og loddrett linje ved x1=270, spiss i A ved x0=300 (areal 375); skilt fra avgiftsinntekt 6750. |
| 🟢 HØY | econ1210-8-3-fasit3-ab oppg. 3b (monopoltilpasning) | MAL-5 | Figur i ord: E fra (0,120) til (240,0); MI fra (0,120) dobbelt så bratt til (120,0); MK vannrett ved 40; MI=MK ved x_M=80; opp til E gir p_M=80. |
| 🟢 HØY | econ1210-8-3-fasit3-cd oppg. 3c (dødvektstap monopol) | MAL-2 | Figur i ord: dødvekttrekant med hjørner (80,80) på E, (80,40) på MK og (160,40) frikonkurransepunkt; mellom E og MK fra x_M=80 til x_opt=160 (areal 1600); fordeling KO/PO. |

### econ1210-8-4.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | Oppgave 2b likevekt (econ1210-8-4-los2-abc) | MAL-1 | «Figur i ord»: markedslikevekt for jordartsmetaller (E x=800-4p treffer prisaksen p=200, T x=2p-100 treffer p=50), likevekt A=(200,150) med stiplede hjelpelinjer. En generisk markedskryss-SVG er plassert lenger ned (o2b) med caption for (200,150), så delvis dekket, men b) selv har kun figur i ord. |
| 🟢 HØY | Oppgave 2f subsidie-paradokset velferd (econ1210-8-4-los2-f) | MAL-6 | «Figur i ord»: dødvektstrekant til høyre for x0=200 (x0=200→x1=240), KO-gevinst, PO-gevinst og statens utlegg (rektangel s×x1) markert. Kapitlets figurer er skatt-kile/markedskryss-SVG; subsidie-velferdsfiguren mangler. |
| 🟢 HØY | Oppgave 3a negativ ekstern virkning (econ1210-8-4-los3-ab) | MAL-2 | «Figur i ord»: E fallende, privat T og samfunnsøkonomisk T (parallelt over med marginal skadekostnad), markedslikevekt E×T for stor mengde, optimum E× samf.T mindre mengde, dødvektstrekant mellom x* og x_marked. Ingen slik figur rendret i kapitlet. |

## econ1310 (31 hull)


### econ1310-1-3.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟡 MIDDELS | econ1310-1-3-text-rente / econ1310-1-3-ex-7 (styringsrente → markedsrenter) | MAL-16 | Bankenes rentedifferanse (utlånsrente over innskuddsrente) og hvordan styringsrenten smitter til markedsrentene. Ren tekstbeskrivelse av en flyt/sammenheng som kunne visualiseres, men ingen figur. |

### econ1310-4-1.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | econ1310-4-1-ex2 (Eksempel 2: Økt forhandlingsmakt z^W↑) | MAL-9 | Skift opp i lønnskurven mot uendret vannrett priskurve; ny skjæring lenger til høyre gir høyere u^n og uendret reallønn. Beskrevet i ord («lønnskurven er skjøvet opp, den nye skjæringen ligger lenger til høyre»), men ingen figur som viser skiftet. |
| 🟢 HØY | econ1310-4-1-ex3 (Eksempel 3: Lavere påslag μ↓) | MAL-9 | Priskurven flyttes opp (μ↓), ny skjæring lenger til venstre gir høyere reallønn og lavere u^n. Beskrevet i ord, ingen figur. |
| 🟢 HØY | econ1310-4-1-ex4 (Eksempel 4: Full sjanger N-oppgave, «Tegn diagrammet») | MAL-9 | Eksplisitt «Diagram (beskrevet)»: to kurver i (u,W/P), pil som viser lønnskurven skiftet opp, punkt A og B begge på priskurven med B til høyre, u^n_0<u^n_1. Oppgaven ber uttrykkelig om diagram; kun ordbeskrivelse finnes. |
| 🟢 HØY | econ1310-4-1-ex-e6 (oppg. 6: koordinert lønnsdannelse, «diagram i ord») | MAL-9 | Løsningen ber om «diagram i ord»: lønnskurven skiftet ned (z^W↓), B på priskurven til venstre for A, u^n_1<u^n_0. Ingen faktisk figur. |

### econ1310-4-2.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | econ1310-4-2-exb-e6 (oppgave 6) | MAL-12 | «Vis hvordan Phillips-kurven skifter ved (a) et positivt kostnadssjokk og (b) høyere inflasjonsforventninger, og forklar hvorfor begge skifter kurven mens et etterspørselssjokk flytter økonomien langs kurven.» Løsningen beskriver i ord en parallellforskyvning oppover av PK og bevegelse langs kurven, men viser ingen skift-figur (kun grunn-PK finnes ellers i kapitlet). |

### econ1310-4-3.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | econ1310-4-3-modellforankring (Hvorfor koordinering senker u^n) | MAL-9 | Kjernemekanismen i frontfagsmodellen forklart i (u, W/P)-diagrammet: uten koordinering ligger lønnskurven høyt (høy u^n), med koordinering skyves lønnskurven ned og skjæringen flyttes til venstre (lavere u^n), uendret priskurve. Teksten refererer eksplisitt til «(u, W/P)-diagrammet, tillatt som figur fra 2021» men viser ingen figur. |
| 🟢 HØY | econ1310-4-3-ex2 (Full drøftingsoppgave, sjanger L) | MAL-9 | A-besvarelsen forankrer drøftingen i lønns- og priskurvemodellen: lavere z^W → lønnskurven ned → skjæring til venstre → lavere u^n, uendret reallønn. Nevner «ev. med figur fra kap. 4.1» men ingen figur er vist. |

### econ1310-4-prove.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | Prøve 1.A (econ1310-4-prove-ex-p1-1), deloppgave b | MAL-9 | Lønns- og priskurvemodellen: vannrett priskurve i høyden 0,833, fallende lønnskurve fra 1 ved u=0, skjæring i u^n≈0,42. Løsningen sier eksplisitt «Tegn diagrammet (beskriv det i ord)» og gir kun en verbal beskrivelse av (u, W/P)-diagrammet. |
| 🟢 HØY | Prøve 1.A (econ1310-4-prove-ex-p1-1), deloppgave c | MAL-9 | Skift i lønnskurven når z^W stiger til 0,08: lønnskurven skjøvet opp, ny skjæring lenger til høyre ved u^n≈0,62, uendret priskurve. Beskrives kun i ord. |
| 🟢 HØY | Prøve 4.A (econ1310-4-prove-ex-p4-1), deloppgave a | MAL-9 | Full arbeidsmarkedsoppgave: økt forhandlingsmakt skyver lønnskurven opp, ny likevekt B lenger til høyre på uendret priskurve. Løsningen sier «Tegn diagrammet i ord» og «Diagram: (u, W/P); vannrett priskurve; fallende lønnskurve skiftet opp; punktene A og B på priskurven med B til høyre». |

### econ1310-5-3.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | econ1310-5-3-text-grafisk (Grafisk analyse av positivt kostnadssjokk) | MAL-13 | Fullstendig ordbeskrivelse av positivt kostnadssjokk: PK opp med Δz^π og RR opp med d1Δz^π mot fast IS, ny likevekt B oppe til venstre (i↑, Y↓), netto π↑ = stagflasjon. Kapitlets figur viser bare det NEGATIVE sjokket; det positive (hovedcaset) mangler figur. |
| 🟡 MIDDELS | econ1310-5-3-example-1 (Eksempel 1: Energiprishopp) | MAL-13 | Gjennomregnet positivt kostnadssjokk med øvre og nedre panel beskrevet i ord (B oppe til venstre, π opp dempet). Ingen figur (samme scenario som text-grafisk). |
| 🟡 MIDDELS | econ1310-5-3-example-2 (Eksempel 2: Strømprisfall, eksamensnivå) | MAL-13 | Negativt kostnadssjokk med begge paneler beskrevet (B nede til høyre, π ned). Det finnes en generell negativ-sjokk-figur i kapitlet, men den er ikke plassert ved dette eksamensnivå-eksempelet — leseren ser bare tekst her. |

### econ1310-5-4.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | econ1310-5-4-rep-3 (R3) | MAL-13 | «Angi fortegnene på ΔY, Δi og Δπ etter et positivt kostnadssjokk, og hvilke kurver som skifter.» Løsningen sier «PK skifter opp (med Δz^π) og RR skifter opp (med d₁Δz^π); IS ligger fast … Δi>0, ΔY<0, Δπ>0 (stagflasjon)» — hele IS-RR-PK-tilpasningen beskrives i ord uten figur. Kapitlet har ingen figurer overhodet. |

### econ1310-5-prove.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | Prøve 2 oppg. 1 (econ1310-5-prove-p2-1: ΔG>0 grafisk) | MAL-13 | «Analyser grafisk i IS-RR-PK»: IS høyre, RR fast, øvre panel B til høyre (Y↑,i↑), nedre panel π↑. Løsningen beskriver panelene i ord; ingen figur (kapitlet oppgir at diagrammer beskrives i ord). |
| 🟢 HØY | Prøve 2 oppg. 2 (econ1310-5-prove-p2-2: Δz^C<0 grafisk) | MAL-13 | Negativt etterspørselssjokk grafisk: IS venstre, RR fast, B til venstre (Y↓,i↓), π↓. Kun ordbeskrivelse. |
| 🟡 MIDDELS | Prøve 2 oppg. 3 (econ1310-5-prove-p2-3: ΔG>0 med fast rente) | MAL-13 | Fast rente / nullgrense: RR vannrett, IS høyre gir større Y-utslag og høyere π enn med aktiv rente. Sammenligning beskrevet i ord uten figur. |
| 🟡 MIDDELS | Prøve 3 oppg. 1 (econ1310-5-prove-p3-1: Δz^π>0 energikrise grafisk) | MAL-13 | Positivt kostnadssjokk: PK og RR opp, IS fast, B oppe til venstre (Y↓,i↑), π↑ = stagflasjon. Beskrevet i ord, ingen figur. |
| 🟡 MIDDELS | Prøve 3 oppg. 2 (econ1310-5-prove-p3-2: Δz^π<0 strømprisfall grafisk) | MAL-13 | Negativt kostnadssjokk: PK og RR ned, IS fast, B nede til høyre (Y↑,i↓), π↓; med eksplisitt proporsjonskontroll. Kun ord. |
| 🟢 HØY | Prøve 4 oppg. b (econ1310-5-prove-p4-2: Δz^I<0 grafisk) | MAL-13 | Investeringsfall grafisk: IS venstre, RR fast, B til venstre (Y↓,i↓), π↓. Ordbeskrivelse uten figur. |

### econ1310-6-1.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | econ1310-6-1-tema4 / econ1310-6-1-ex-4 / econ1310-6-1-oppg-5 | MAL-9 | Lønnsdannelse/frontfag-momentbanken: koordinering senker z^W → lønnskurven ned → lavere u^n; varig økt forhandlingsmakt skifter lønnskurven opp → høyere u^n, uendret reallønn (låst av priskurven). Teksten sier «du kan tegne dem — figurer er tillatt» men viser ingen figur. |

### econ1310-6-3.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | econ1310-6-3-ex-1 (Eksempel 1 — forbrukertilliten stuper) | MAL-13 | «Skifter IS mot venstre (lavere etterspørsel ved gitt rente). RR skifter ikke. PK ligger fast. … Y↓, i↓, π↓.» Hele IS-RR-PK-responsen på et negativt etterspørselssjokk beskrives i ord uten figur. |
| 🟢 HØY | econ1310-6-3-ex-2 (Eksempel 2 — strømprisene faller) | MAL-13 | «Skifter PK ned (med Δz^π) og RR ned (med d₁Δz^π) samtidig. IS ligger fast. … π↓, Y↑, i↓.» Eksplisitt advarsel «tegn proporsjonene slik at inflasjonen ender lavere enn utgangspunktet» — forutsetter en figur som ikke finnes. |
| 🟢 HØY | econ1310-6-3-ex-3 (Eksempel 3 — handelskonflikt, to sjokk) | MAL-13 | To sjokk samtidig: ΔX<0 skifter IS mot venstre, og Δz^π>0 skifter PK og RR opp. «Samlet bilde … stagflasjonsaktig». Kombinasjonen av IS-venstre + PK/RR-opp beskrives i ord uten figur. |
| 🟢 HØY | econ1310-6-3-oppg-6 (oppgave 6 — pandemi, to sjokk) | MAL-13 | Δz^C<0 → IS mot venstre; Δz^π>0 → PK og RR opp. Y trekkes ned, mens inflasjonen er «ubestemt» (etterspørselsfall drar π ned, kostnadssjokk drar π opp). Kurveskiftene og den ubestemte nettoeffekten på π beskrives kun verbalt. |

### econ1310-6-prove.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | econ1310-6-prove-p3-1 (Prøve 3, sentralbanksjef-case a) | MAL-13 | Situasjonsdiagnose i modellens språk: negativt etterspørselssjokk (negativt produksjonsgap) kombinert med positivt kostnadssjokk Δz^π>0 (importert inflasjon over målet) — «stagflasjonsaktig». To sjokk som trekker rentebeslutningen hver sin vei, beskrevet uten diagram (kapitlet nevner eksplisitt at figurer er tillatt fra 2021). |
| 🟢 HØY | econ1310-6-prove-p4-1 (Prøve 4, rådgiver-case a) | MAL-13 | «Eksportfallet er et negativt etterspørselssjokk, ΔX<0, som skifter IS mot venstre og gir et negativt produksjonsgap … RR skifter ikke.» Kurveskiftet er beskrevet i ord i løsningen; ingen figur, selv om oppgaven eksplisitt tillater figurer. |

### econ1310-7-3.json

| Konf | Ref | Mal | Hva figuren skal vise |
|---|---|---|---|
| 🟢 HØY | econ1310-7-3-los3 / oppgave 3a («Tegn de to kurvene i et (u, W/P)-diagram») | MAL-9 | Oppgaven ber eksplisitt om å TEGNE lønns- og priskurven i (u, W/P)-diagram og forklare skjæringspunktet som gir u^n. Løsningen gir «A-besvarelse med figurbeskrivelse» i ren tekst (flat priskurve, fallende lønnskurve, skjæring = u^n) uten faktisk figur. |
| 🟢 HØY | econ1310-7-3-los3 / oppgave 3b («Vis i diagrammet» z^W-skift) | MAL-9 | «Lønnskurven skifter opp/utover (til høyre) … nytt skjæringspunkt ved høyere ledighet: u^n øker. Reallønnen på lang sikt er uendret (låst av flat priskurve).» Skiftet og den uendrede reallønnen beskrives i ord; ingen figur som viser lønnskurve-skiftet. |
| 🟢 HØY | econ1310-7-3-los4 / oppgave 4c («Bruk IS-RR-PK-diagrammet til å vise» kostnadssjokk) | MAL-13 | Oppgaven ber eksplisitt om å bruke IS-RR-PK-diagrammet til å vise virkningen av Δz^π>0. Løsningen beskriver i ord: «Øvre panel (Y,i): IS uendret, RR skifter opp … høyere i, lavere Y. Nedre panel (Y,π): PK skifter opp … høyere π. … stagflasjon.» Ingen faktisk topanels-figur. |


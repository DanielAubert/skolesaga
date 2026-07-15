# Figur-kartlegging — høyskolefag (Skolesaga)

**Dato:** 15. juli 2026. **Metode:** 11 parallelle lese-agenter gikk gjennom kapittel-JSON for alle live høyskolebøker og fant oppgaver/eksempler/løsninger som beskriver eller forutsetter en figur (ofte markert «Figur i ord») uten at en faktisk figur er rendret.

## Sammendrag

| Bok | Figur-hull | 🔴 høy | 🟠 middels | 🟡 lav |
|---|---|---|---|---|
| econ1210 | 88 | 25 | 42 | 21 |
| econ1310 | 31 | 15 | 12 | 4 |
| **SUM** | **119** | **40** | **54** | **25** |

**Status øvrige høyskolebøker:** exphil03, jus1111, psy1010, stv1100 (tekstfag) — kartlegging utsatt (agentene ble avbrutt av forbigående server-rate-limit; tas i egen runde). Filliste + agent-oppsett ligger klart i `scratchpad/figmap/`.

## Gjentakende figurtyper (batch-bar bygging)
De fleste hullene løses med noen få gjenbrukbare SVG-maler:

| Figurtype | Antall |
|---|---|
| Tilbud/etterspørsel & likevekt | 44 |
| Overskudd/velferd (arealer) | 25 |
| Annet | 17 |
| Produsent/kostnadskurver | 12 |
| Arbeidsmarked | 12 |
| Konsumentteori | 5 |
| Markedsformer/elastisitet | 3 |
| Keynes-kryss | 1 |

> NB: samme SVG-mal (f.eks. tilbud-etterspørsel med skift/areal) dekker mange hull — bygg malen én gang, parametriser per oppgave. Husk: nye SVG-er MÅ lastes opp med `scripts/upload-media-storage.ts` ellers 404 i prod (se minne [[losning-figurkrav]]).

## econ1210 — full liste (88 hull)


### econ1210-1-1.json — 1.1

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🔴 | eksempel | econ1210-1-1-ex-4 (Eksempel 4: Skift eller bevegelse?) | Tre figurer i ord: (a) bevegelse langs E-kurven fra punkt A til B (opp/venstre); (b) og (c) parallelt skift av hele E-kurven utover med pil. | SVG med tre paneler: (a) ett punkt A→B langs samme E-kurve; (b)/(c) E-kurve forskjøvet utover med retningspil — kontrasten bevegelse vs. skift. |
| 🟠 | eksempel | econ1210-1-1-ex-2 (Eksempel 2: Horisontal summering av to kjøpere) | Figur i ord: to individuelle fallende E-kurver + markedets E-kurve som horisontal sum, med punktene (55,5) og (40,10) og en knekk der kjøper A slutter (p=20). p loddrett, x vannrett. | SVG: to individuelle E-kurver (x_A=40-2p, x_B=30-p) og markedskurven som horisontal sum, med markerte punkter (55,5),(40,10) og knekk ved p=20. |
| 🟡 | eksempel | econ1210-1-1-ex-3 (Eksempel 3: Tolke a og b) | Figur i ord: rett fallende E-kurve x=600-3p som treffer mengdeaksen ved x=600 (p=0) og prisaksen ved p=200 (x=0). | SVG: lineær E-kurve med aksekryssingene x=600 og p=200 markert; a=metningsmengde, a/b=choke-pris illustrert. |

### econ1210-1-2.json — 1.2

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🟠 | eksempel | Eksempel 2: Lese en lineær T-kurve (econ1210-1-2-ex-2) | «Figur i ord»: en stigende, rett T-kurve (p loddrett, x vannrett) som treffer prisaksen ved p=50, med stiplet vannrett linje fra p=120 til kurven og loddrett ned til x=140. | Lineær tilbudskurve x=2p-100 med tilbudsstart p=50 på prisaksen og avlesningspunkt (140,120) markert med stiplede hjelpelinjer. |
| 🟠 | eksempel | Eksempel 3: Sabotasje mot anlegg (econ1210-1-2-ex-3) | «Figur i ord»: opprinnelig stigende T-kurve som flytter innover til ny T-kurve (T0→T1) med pil, E-kurven ligger fast; mindre mengde tilbys ved enhver pris. | T-kurveskift innover (T0→T1) med pil, p loddrett/x vannrett, fast E-kurve — illustrerer redusert antall anlegg. |
| 🟡 | oppgave | Oppgave 5b (econ1210-1-2-oppg-5 / e5) | Løsning ber om «figur i ord»: opprinnelig T-kurve T0 og ny T1 forskjøvet oppover (parallellskift ved nye sikkerhetskrav) med pil, p loddrett/x vannrett. | Parallelt oppoverskift av T-kurven (T0→T1) med pil ved kostnadsøkning i alle anlegg. |

### econ1210-1-3.json — Markedslikevekt: figur, algebra og figurspråket

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🟠 | eksempel | Eksempel 1: Likevekten grafisk med prismekanismen | Fallende E-kurve og stigende T-kurve som krysser i likevektspunktet A med stiplede hjelpelinjer til p* og x*; tilbudsoverskudd ved pris over p* | tilbud-etterspørsel-diagram |
| 🟠 | eksempel | Eksempel 2: Regn ut likevekten og kontroller (x=900-3p, x=p-100) | E/T-kryss i A, likevekt p*=250, x*=150, med prismekanismen begge veier | tilbud-etterspørsel-diagram |
| 🟠 | eksempel | Eksempel 3: Full figurleveranse på eksamensnivå (x=1200-4p, x=2p-300) | E-kurve (aksekutt x=1200, p=300), T-kurve (start p=150), kryss A, likevekt p*=250, x*=200 | tilbud-etterspørsel-diagram |
| 🟡 | oppgave | Oppgave 6 (krevende, x=600-2p, x=3p-400) | Likevekt A=(200,200) og tilbudsoverskudd ved p=250; figur med prismekanismen begge veier | tilbud-etterspørsel-diagram |

### econ1210-1-4.json — Elastisitet: beregning og verbal tolkning

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🟠 | eksempel | Eksempel 2: Samme kurve, to punkter | Fallende rett E-kurve x=600-2p (treffer p=300 og x=600) med to punkter A(250,100) elastisk og B(50,500) uelastisk, stiplede hjelpelinjer | E-kurve med to avmerkede punkter (elastisk øverst / uelastisk nederst) |
| 🟠 | eksempel | Eksempel 3: Verbal resonnering uten regning (naturgass) | Bratt (uelastisk) E-kurve + stigende T; T skifter innover; ny likevekt B høyere på E; kontrast mot slakere E-kurve på lang sikt (mindre prishopp) | tilbud-etterspørsel-diagram med bratt vs. slak E-kurve og T-innskift |

### econ1210-1-5.json — 1.5

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🔴 | eksempel | econ1210-1-5-ex3 (Eksempel 3: Bratt vs. slak E, samme tilbudsskift) | Figur i ord: to diagrammer side om side med samme startkryss A=(200,200) og samme T; marked I bratt E, marked II slak E; samme T-innskift gir ulik pris/mengde-fordeling (+15/-15 vs +10/-30). | SVG med to paneler: bratt E vs. slak E, identisk T-innskift, som viser at bratt E → stort prisutslag, slak E → stort mengdeutslag. |
| 🔴 | eksempel | econ1210-1-5-ex4 (Eksempel 4: To samtidige innskift, ubestemt pris) | Figur i ord: E og T skifter begge innover samtidig; B trekkes til venstre (mengde ned, bestemt), men vertikalt drar E ned og T opp (pris ubestemt). To talltilfeller (pris uendret / pris opp). | SVG: samtidig E-inn + T-inn med to scenarioer som viser at mengden er bestemt (ned) mens prisretningen er ubestemt. |
| 🔴 | eksempel | econ1210-1-5-ex5 (Eksempel 5: Lekkasje ved anleggsbortfall) | Figur i ord: T skifter innover; ved gammel pris p=200 er horisontal avstand = anleggsbortfall (100); nytt kryss B=(160,220) høyere på E. Stiplet loddrett ved gammel og ny pris — gapet er lekkasjen (60). | SVG: T-innskift med to loddrette hjelpelinjer (bortfall=100 ved gammel pris vs. faktisk fall=40 ved ny pris), som visualiserer lekkasjen=60. |
| 🟠 | eksempel | econ1210-1-5-ex1 (Eksempel 1: Økt etterspørsel, E ut) | Figur i ord: E og T krysser i A; E skifter parallelt utover til nytt kryss B høyere/til høyre. Stiplede hjelpelinjer. Tall A=(200,200), B=(212,236). | SVG: E ut-skift med gammel/ny likevekt A(200,200)→B(212,236), T fast, hjelpelinjer til aksene. |
| 🟠 | oppgave | econ1210-1-5-oppg-helning (oppg. 3, e2) | Løsning ber om figurbeskrivelse: bratt E (uelastisk) vs. slak E (elastisk), samme T-innskift, B glir oppover E-kurven. | SVG (kan gjenbruke Eksempel 3-figuren): uelastisk vs. elastisk marked med samme tilbudsbortfall. |
| 🟠 | oppgave | econ1210-1-5-oppg-lekkasje (oppg. 5, e4) | Løsning beregner lekkasje (bortfall 150, faktisk fall 90, lekkasje 60) men uten figur; lekkasje-poenget er sterkt figuravhengig. | SVG: T-innskift for $x=900-3p$/$x=2p-100$ med bortfall vs. faktisk mengdefall markert. |
| 🟡 | eksempel | econ1210-1-5-ex2 (Eksempel 2: Kostnadsøkning, T inn) | Figur i ord: T skifter parallelt oppover/innover, nytt kryss B høyere/til venstre. A=(200,200), B=(206,188). Denne er delvis dekket av det generiske kurveskift.svg-bildet lenger opp, men ikke med disse tallene. | SVG: T inn-skift (parallellt +30 i konstantledd) med A(200,200)→B(206,188). |

### econ1210-1-6.json — 1.6

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🟠 | eksempel | Gjennomregnet eksamenscase, del b og d (econ1210-1-6-case) | «Figur i ord»: markedskryss for ferjesamband (E x=900-3p, T x=2p-100) med likevekt A; del d viser T-skift innover (x=2p-250) til ny likevekt B høyere på E — konkret case-figur. | Markedsdiagram med konkrete kurver E og T, likevekt A, og innoverskift av T til B som viser lekkasjen (bortfall 150 vs. faktisk fall 90). |
| 🟠 | oppgave | Oppgave 10b (econ1210-1-6-o10 / e10) | «Figur i ord»: samtidige skift — E inn og T inn samtidig fra startkryss A=(200,200), begge trekker mengden ned mens prisretningen er ubestemt. | Diagram med to samtidige innoverskift (E og T), start A og ny B=(200,80), som viser at mengde er bestemt (ned) og pris ubestemt. |
| 🟡 | oppgave | Oppgave 9d (econ1210-1-6-o9 / e9) | «Figur i ord»: sabotasje skifter T-kurven innover (parallelt) til nytt kryss B; generisk markedskryss-SVG er lenket øverst, men skiftet/B for dette konkrete caset (x=1000-2p, x=3p-500→3p-650) er ikke tegnet. | T-innoverskift fra x=3p-500 til x=3p-650 med gammel likevekt A (400,300) og ny B (340,330), lekkasje markert. |

### econ1210-1-prove.json — Prøver til del 1: Markedet — etterspørsel, tilbud og likevekt

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🔴 | løsning | Prøve 3a — enkeltskift (reklame skifter E ut) | Startlikevekt A=(250,300), E-kurven skifter parallelt utover til B=(280,360); akser p/x, begge kurver, A og B markert | tilbud-etterspørsel-diagram med E-skift (markedskryss med skiftet E-kurve) |
| 🔴 | løsning | Prøve 3b — samtidige skift (E inn og T inn) | Startkryss A=(250,300); E skifter innover og T skifter innover samtidig, mengden bestemt ned, prisretning ubestemt; ny likevekt (250,180) | tilbud-etterspørsel-diagram med to samtidige innskift |
| 🔴 | løsning | Prøve 4d — sabotasje/lekkasje (T inn) | T-kurven skifter parallelt innover fra sabotasje; nytt kryss B høyere på E; illustrerer lekkasje (mengdefall 120 < bortfall 200); den generiske markedskryss.svg i p4 viser kun startlikevekten, ikke skiftet/lekkasjen | tilbud-etterspørsel-diagram med T-innskift og lekkasje-markering |

### econ1210-2-1.json — KO, PO og SO: velferdsgeometrien

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🔴 | eksempel | Eksempel 1: SO som areal mellom kurvene | E-kurve x=300-p fra A=(0,300), T-kurve x=2p fra origo, kryss L=(200,100); SO = trekant A-L-O mellom E og T fram til likevekt | velferdsdiagram med SO-trekant mellom E og T |
| 🟠 | eksempel | Eksempel 2: KO, PO og SO regnet ut og navngitt | Prislinje p*=100; KO=trekant A-P-L (mellom E og pris), PO=trekant P-O-L (mellom pris og T); tallfestet 20000/10000/30000 | velferdsdiagram med KO- og PO-trekant delt av prislinje (spesifikke tall x=300-p, x=2p) |

### econ1210-2-2.json — 2.2

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🔴 | eksempel | econ1210-2-2-ex-2 (Eksempel 2: Dødvektstap ved for lite omsatt) | Figur i ord: E (p=400-x) og T (p=x) krysser i L=(200,200); faktisk mengde x=140 markert; dødvekttrekant mellom E og T fra 140 til 200 (areal 3600). | SVG: dødvekttrekant til VENSTRE for x* ved for lite omsatt (x=140), gap 120, bredde 60. |
| 🔴 | eksempel | econ1210-2-2-ex-3 (Eksempel 3: Kriteriene brutt av et pristak) | Figur i ord: E, T, likevekt L=(200,100); vannrett makspris-linje p=80 under p*; tilbudt 160 vs etterspurt 220; dødvekttrekant fra x=160 til x*=200 (areal 1200). | SVG: makspris under likevekt med kortside (x=160), etterspørselsoverskudd og dødvekttrekant. |
| 🟠 | eksempel | econ1210-2-2-ex-1 (Eksempel 1: De tre kriteriene i likevekten) | Figur i ord: E og T krysser i L; SO-trekanten mellom E og T fram til x*; hjelpelinjer til p* og x*. Kapitlet har INGEN bilder overhodet. | SVG: E×T-likevekt med SO-trekanten skravert og p*, x* markert. |
| 🟠 | oppgave | econ1210-2-2-oppg-5 (oppg. 5, v1, b) | Figur i ord i løsningen: E, T, likevekt L=(200,200); makspris-linje p=150; kortside x=150; dødvekttrekant fra 150 til 200 (areal 2500). | SVG: makspris p=150 med kortside og dødvekttrekant for $x=400-p$/$x=p$. |

### econ1210-2-prove.json — Prøver til del 2: Velferd — overskudd og effektivitet

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🟠 | løsning | Prøve 3 (2.C) fasit — velferdsregnskap etter T-skift | To likevekter L0=(240,120) og L1=(200,160) etter parallellskift av T opp med 60; KO/PO/SO-arealer før og etter, reelt ressurstap vs. dødvektstap | tilbud-etterspørsel-diagram-med-kurveskift-og-overskuddsarealer |

### econ1210-3-1.json — Stykkskatt: firetrinnsmetoden og delingsformelen

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🟠 | eksempel | Eksempel 1: Skiftet i figur (Trinn 1) | Parallellskift av T-kurven opp med t=25 til T'; ny likevekt B oppe til venstre for A, med stiplede hjelpelinjer | tilbud-etterspørsel-diagram-med-avgiftsskift |
| 🟠 | eksempel | Eksempel 5: Full firetrinnsmetode (Trinn 1–4, x=1200-5p, x=3p-200, t=32) | T'-skift 32 over T, ny likevekt B=(265,187), nettopris 155, og dødvektstrekant mellom E og gammel T fra x1=265 til x0=325 | tilbud-etterspørsel-diagram-med-avgiftsskift-og-dødvektstap |
| 🟡 | eksempel | Eksempel 2: Ny likevekt (Trinn 2) | Ny likevekt B (opp/venstre for A): markedspris 210→220, mengde 270→240, selgers nettopris 195 avlest på gammel T | tilbud-etterspørsel-diagram-med-avgiftsskift |

### econ1210-3-2.json — Stykksubsidie og subsidie-paradokset

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🔴 | eksempel | Eksempel 2: Paradokset med tall (velferdsregnskapet) | A=(300,125), B=(380,105); dødvektstrekant til høyre for x0=300 mellom T (øverst) og E (nederst) fram til x1=380 — overproduksjonens verditap | subsidie-kile-diagram med dødvektstrekant til høyre for x0 (tall x=800-4p osv.) |
| 🟠 | eksempel | Eksempel 1: Subsidie gjennom firetrinnsmetoden | Opprinnelig likevekt A=(200,200), ny tilbudskurve T' parallelt 30 under T, ny likevekt B=(230,185); selgers nettopris 215 lest på gamle T over B | tilbud-etterspørsel-diagram med T-nedskift og ny likevekt B |

### econ1210-3-3.json — 3.3

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🟠 | eksempel | econ1210-3-3-ex-1 (Eksempel 1: Maksimalpris på strøm) | Figur i ord: E, T, likevekt A=(600,400); makspris-linje p=300; tilbudt 400 (venstre), etterspurt 800 (høyre), mangel 400; dødvektstap fra 400 til 600. Den generiske maksimalpris.svg finnes, men ikke med disse tallene. | SVG: strømcase med tallene p*=400, x*=600, p_maks=300, omsatt 400, mangel 400 og dødvekttrekant. |
| 🟡 | eksempel | econ1210-3-3-ex-2 (Eksempel 2: Minstelønn og arbeidsledighet) | Figur i ord: w loddrett, N vannrett; arbeidsetterspørsel E fallende, arbeidstilbud T stigende, likevekt A=(260,120); minstelønn w=140 over A; sysselsetting 220, arbeidstilbud 320, ledighet 100. NB: det finnes et generisk minstelonn.svg-bilde, så denne er delvis dekket. | SVG: tallfestet minstelønn-case (A=(260,120), w_min=140, sysselsetting 220, ledighet 100) — eller gjenbruk minstelonn.svg. |
| 🟡 | oppgave | econ1210-3-3-ex-l2b (oppg. 4, e-l2b, b) | Løsning (gassmarked, makspris p_maks=240) regner kortside 120, mangel 360 uten egen figur; generisk maksimalpris.svg dekker prinsippet men ikke tallene. | SVG: gasscase p*=300/x*=300, p_maks=240, omsatt 120, mangel 360, dødvekttrekant. |

### econ1210-3-4.json — 3.4

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🟠 | oppgave | Oppgave 5 (econ1210-3-4-ex-d5 / e-d5) subsidie-paradokset | Subsidie s=30 med dødvektstap til høyre for x0; hint sier «Dødvektstap ligger til høyre for x0». Ingen subsidie-figur rendret (kun skatt-kile-SVG finnes i kapitlet). | Subsidie-diagram som viser overproduksjon (x0=200→x1=230) og dødvektstrekant til høyre for x0. |
| 🟡 | eksempel | Gjennomregnet eksamenscase b og d (econ1210-3-4-case) | «Figur i ord»: skattekile ved konkret marked (x=800-4p, x=2p-100, t=30) med T' 30 over T, likevekt A→B (200,150)→(160,160), dødvektstrekant. Generisk stykkskatt-kile-SVG er lenket øverst i kapitlet, men caset har kun figur i ord. | Konkret skattediagram for caset med T' parallelt 30 over T, B opp/venstre, nettopris 130 avlest, dødvektstrekant x1=160→x0=200. |

### econ1210-3-prove.json — 3.P

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🔴 | løsning | Prøve 2 fasit d (econ1210-3-prove-p2-fasit-txt) | «Figur i ord»: subsidie skifter T ned med s=30 (T'), ny likevekt B=(330,185); dødvektstrekant til HØYRE for x0. Prøve 1 har en faktisk stykkskatt-SVG, men subsidiefiguren mangler. | Stykksubsidie-diagram: T'→T ned med s, likevekt A→B ned/høyre, nettopris avlest, dødvektstrekant til høyre for x0. |
| 🔴 | løsning | Prøve 3 fasit b/c (econ1210-3-prove-p3-fasit-txt) | Maksimalpris under likevekt: kortside-regelen (tilbud 120 = kortside, etterspørsel 480), mangel 360, tilleggstap ved rasjonering — forutsetter et diagram men ingen figur rendret. | Maksprisdiagram: bindende p_max=240 under likevekt (300,300), tilbud og etterspørsel-gap som viser mangelen 360 og omsatt mengde 120. |
| 🟠 | løsning | Prøve 4 fasit a (econ1210-3-prove-p4-fasit-txt) | Brann setter anlegg ut → T skifter inn (T'), ny likevekt oppe til venstre, lekkasje (bortfall horisontalt > mengdefall). Beskrevet uten egen figur. | T-innoverskift med lekkasje-illustrasjon: A=(300,200), T'→venstre, bortfall vs. faktisk mengdefall markert. |
| 🟠 | løsning | Prøve 4 fasit c (econ1210-3-prove-p4-fasit-txt) | Subsidie s=25: dødvektstrekant til høyre for x0=300 (mengde presset til 330), statens utlegg som rektangel — forutsatt figur uten rendring. | Subsidie-velferdsdiagram: T ned med s=25, dødvektstrekant høyre for x0, statens utlegg-rektangel s×x1. |

### econ1210-4-1.json — 4.1

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🔴 | eksempel | econ1210-4-1-ex2 (Eksempel 2: Pigou-avgiften gir riktig mengde) | Figur i ord: E, T, uregulert A=(100,200); SMK 30 over T krysser E i B=(60,210); Pigou-avgift løfter T til SMK; dødvekttrekant (60 til 100) elimineres. | SVG: Pigou-avgift som løfter T opp til SMK, med A→B og eliminert dødvekttrekant. |
| 🟠 | eksempel | econ1210-4-1-ex1 (Eksempel 1: Uregulert eksternalitet) | Figur i ord: E, T (privat MK), SMK parallelt 25 over T; markedslikevekt A=(400,300), optimum B=(370,315); dødvekttrekant mellom SMK og E fra 370 til 400. Generisk eksternalitet-pigou.svg finnes, men ikke med disse tallene. | SVG: tallfestet eksternalitet A=(400,300)/B=(370,315), SMK=T+25 og dødvekttrekant. |
| 🟠 | oppgave | econ1210-4-1-ex-vansk (oppg. 3, e-vansk, a-b) | Figur i ord: E, T, A=(300,200); SMK 30 over T, optimum B=(260,210); dødvekttrekant fra 260 til 300 (areal 600). | SVG: uregulert eksternalitet med A=(300,200), B=(260,210) og dødvekttrekant=600. |

### econ1210-4-2.json — 4.2

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🟡 | definisjon | Begrepsbank: Badekarsdiagrammet (econ1210-4-2-bb-badekar) | Beskriver eksplisitt et badekarsdiagram: to bedrifters marginale rensekostnader tegnet mot hverandre, kostnadseffektivt kutt der de møtes (like MRK). Kalt «valgfri illustrasjon» men ingen figur finnes. | Badekarsdiagram: bedrift A's MRK fra venstre og bedrift B's MRK fra høyre, skjæringspunkt = like marginale rensekostnader = kostnadseffektivt kutt. |

### econ1210-4-prove.json — Prøver til del 4: Eksternaliteter, klima og markedssvikt

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🔴 | løsning | Prøve 4a — Pigou-figur (klimaoppgave) | E fallende, T stigende, uregulert likevekt A=(200,200); SMK parallelt 30 over T krysser E i B=(160,210); dødvektstrekant mellom SMK og E fra 160 til 200 | eksternalitet/Pigou-diagram med E, T, SMK og dødvektstrekant (spesifikke tall) |

### econ1210-5-1.json — 5.1

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🟡 | eksempel | Eksempel 2: Tilpasningen med figur i ord (econ1210-5-1-ex-2) | «Figur i ord»: E faller fra 60, MI dobbelt så bratt krysser mengdeaksen ved 60, MK vannrett ved 20, x_M=40 der MI=MK, p_M=40 lest opp på E. Kapitlet har én generell monopol-tilpasning-SVG, men dette konkrete talleksemplet er kun figur i ord. | Monopoltilpasning for x=120-2p, MK=20: E, MI (=60-x), MK-linje, x_M=40, p_M=45? (her p_M=40) med avlesningslinjer. |
| 🟡 | eksempel | Eksempel 3: Full monopoltilpasning (econ1210-5-1-ex-3) | «Figur i ord»: E fra 100, MI dobbelt bratt (krysser x ved 150), MK=60, x_M=60, p_M=80 lest av E — konkret eksamensnivå-case uten egen figur. | Monopoldiagram for x=300-3p, MK=60: E, MI=100-2/3x, MK, x_M=60, p_M=80 med hjelpelinjer. |

### econ1210-5-2.json — Monopolets velferdsvirkninger og markedsmaktens grenser

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🟠 | eksempel | Eksempel 2: En ny kabel svekker markedsmakten | To E-kurver gjennom samme område — en bratt (før kabel) og en flatere (etter) — med vannrett MK; flat E gir lavere monopolpris, høyere mengde og mindre pris–MK-gap | monopol-diagram-med-to-etterspørselskurver-ulik-elastisitet |

### econ1210-5-3.json — Naturlig monopol og regulering

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🟠 | eksempel | Eksempel 1: Nettavis med MK=0 — lønnsom eller ikke? | E-kurve x=1000-5p fra p=200 til x=1000, MK-linja på mengdeaksen (p=0), KO-trekant under E over pris 0 (100000) mot fast kostnad B; underskudd = hele B | naturlig-monopol-diagram med MK=0, KO-trekant og fast kostnad B |
| 🟠 | eksempel | Eksempel 2: Full naturlig monopol-drøfting (betalingsmur) | E fallende, MK nær mengdeaksen, MI-kurve dobbelt så bratt krysser MK ved x_M langt til venstre for x_opt; betalingsmur-pris lest på E; dødvektstrekant mellom E og MK fra x_M til x_opt | monopol-diagram med MI=MK, betalingsmur og dødvektstap |

### econ1210-5-4.json — 5.4

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🔴 | eksempel | econ1210-5-4-ex-1 (Eksempel 1: Kafémarkedet) | Figur i ord: kort sikt — egen fallende E-kurve, MI=MK, pris over GK, profitt-rektangel; lang sikt — E-kurven tangerer GK-kurven ved p=GK (nullprofitt), men p>MK. Kapitlet har INGEN bilder. | SVG: monopolistisk konkurranse kort sikt (profitt) vs. lang sikt (E tangerer GK, nullprofitt, men p>MK). |
| 🟠 | eksempel | econ1210-5-4-ex-2 (Eksempel 2: Frisørene / kartell) | Figur i ord: markedets E faller; uten avtale pris ned mot MK; med samordning opptrer de som monopol (MI=MK, pris opp p_M, mengde ned x_M); dødvekttrekant mellom E og MK fra kartellmengde til effektiv mengde. | SVG: kartell-som-monopol med E, MK, MI, p_M/x_M og dødvekttrekant vs. konkurranseutfallet. |

### econ1210-5-5.json — 5.5

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🟠 | oppgave | Oppgave 10 (econ1210-5-5-ex-10 / e-10) kartellvariant | «Figur»: dødvekttrekant mellom E og MK fra x_M=60 til x_opt=120 for kartell x=240-3p, MK=40. Ingen figur (verken SVG eller figur i ord med akser) — kun trekant nevnt i løsningen. | Kartell/monopol-velferdsdiagram: E, MI, MK=40, x_M=60, p_M=60, x_opt=120, dødvektstrekant. |
| 🟡 | eksempel | Gjennomregnet case b og c (econ1210-5-5-case) | «Figur i ord»: monopol x=140-2p, MK=20; E, MI (fra 70, krysser x ved 70), MK=20, x_M=50, p_M=45; dødvekttrekant x_M=50→x_opt=100. Kapitlet har generell monopol-velferd-SVG øverst, men caset selv kun figur i ord. | Konkret monopol-velferdsdiagram med tallverdier (x_M=50, p_M=45, x_opt=100) og dødvektstrekant. |
| 🟡 | oppgave | Oppgave 9 (econ1210-5-5-ex-9 / e-9) full eksamensoppgave | «Figur i ord» for naturlig monopol x=120-p, MK=20, B=1600: E, MI, MK, x_M=50, p_M=70, dødvekttrekant 50→100. Generisk monopol-velferd-SVG er lenket, men det spesifikke caset (inkl. KO ved p=MK og B) er kun figur i ord. | Naturlig monopol-diagram: monopoltilpasning + dødvekttrekant + areal KO ved p=MK sammenlignet med fast kostnad B. |

### econ1210-5-prove.json — 5.P

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🟠 | løsning | econ1210-5-prove-p2-fasit (Prøve 2 fasit, oppg. b) | Figur i ord: E fra 90, MK vannrett ved 30, MI dobbelt så bratt krysser MK ved x_M=60, opp til E gir p_M=60; frikonkurransepunkt (120,30); dødvekttrekant mellom E og MK fra 60 til 120 (areal 900). Prøven har IKKE eget bilde (til forskjell fra Prøve 1 og 4). | SVG: monopol-velferd med x_M=60, p_M=60, x_opt=120 og dødvekttrekant=900. |
| 🟠 | løsning | econ1210-5-prove-p3-fasit (Prøve 3 fasit, naturlig monopol) | Beskriver KO-trekant ved p=MK=0 (grunnlinje 250, bredde 1000, areal 125000) og lønnsomhetsvilkåret KO>B, uten figur. Naturlig monopol med fallende GK er sterkt figuravhengig, men ingen figur/omtale av 'figur i ord' — likevel ville en figur gitt stor nytte. | SVG: naturlig monopol med fallende GK, MK=0, E-kurve og KO-trekanten ved p=0 skravert; KO>B-vilkåret. |

### econ1210-6-1.json — Arbeidsmarkedet som FK-marked: lønnsskatt og lønnssubsidie

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🟠 | eksempel | Eksempel 2: Lønnssubsidie med deling | A=(1000,200), ny arbeidstilbudskurve T' parallelt 30 under T, ny likevekt B=(1100,180); effektiv lønn 210 lest på gamle T over B | arbeidsmarked-diagram med T-nedskift (lønnssubsidie) |
| 🟠 | eksempel | Eksempel 3: Lønnsskatt på bedriftene | A=(600,250), ny etterspørselskurve E' parallelt 40 under E, ny likevekt B=(520,230); arbeidsgivers kostnad 270 lest på gamle E over B | arbeidsmarked-diagram med E-nedskift (lønnsskatt/arbeidsgiveravgift) |
| 🟡 | eksempel | Eksempel 1: Likevekt i arbeidsmarkedet | E-kurve (arbeidsetterspørsel) fallende, T-kurve (arbeidstilbud) stigende, kryss A ved w*=200, N*=1000, stiplede hjelpelinjer til aksene | arbeidsmarked-kryss (dekkes delvis av generisk figur senere, men Eksempel 1 selv har ingen) |

### econ1210-6-3.json — 6.3

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🔴 | eksempel | Eksempel 3: Eksportrestriksjon på gass (econ1210-6-3-ex3) | «Figur i ord»: verdensprislinje 250 gir fri-handel; innenlandspris presset til 220 flytter forbruk 150→240 langs E og produksjon 400→340 langs T; tapstrekant mellom verdensprislinja og E over de omdirigerte enhetene. Ingen figur (kun import/eksport-SVG finnes, ikke restriksjon). | Eksportrestriksjonsdiagram: verdenspris 250 vs. innenlandspris 220, omdirigerte enheter, SO-tapstrekant mot alternativverdien. |
| 🟡 | eksempel | Eksempel 1: Full velferdsanalyse av import (econ1210-6-3-ex1) | «Figur i ord»: autarkilikevekt A=(400,300), verdensprislinje p_v=200 under A, produksjon 100 (T), forbruk 600 (E), import 500 = vannrett avstand; KO vokser, PO krymper. Kapitlet har generell import-SVG, men dette talleksemplet kun figur i ord. | Importdiagram med tallverdier: A=(400,300), p_v=200, x_T=100, x_E=600, import=500, gevinsttrekant 25000. |
| 🟡 | eksempel | Eksempel 2: Velferdsanalyse av eksport (econ1210-6-3-ex2) | «Figur i ord»: A=(300,200), verdensprislinje p_v=250 over A, forbruk 150 (E), produksjon 400 (T), eksport 250; PO vokser, KO krymper, gevinsttrekant 6250. Generell eksport-SVG finnes, men talleksemplet kun figur i ord. | Eksportdiagram med tallverdier: A=(300,200), p_v=250, x_E=150, x_T=400, eksport=250, gevinsttrekant 6250. |

### econ1210-6-prove.json — Prøver til del 6: Arbeidsmarked og internasjonal handel

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🟠 | løsning | Prøve 4 fasit b) — arbeidsgiveravgift t=45 | Arbeidsmarkedsdiagram (w loddrett, N vannrett): E' parallelt 45 under E, ny likevekt B=(680,235) ned/venstre for A=(800,250), arbeidsgivers kostnad 280 avlest på gammel E | arbeidsmarked-diagram-med-avgiftsskift-i-etterspørsel |

### econ1210-7-1.json — Konsumentteori: budsjettlinje, indifferenskurver og tilpasning

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🔴 | eksempel | Eksempel 3: Prisøkning på mat — tilpasning og de to effektene | Gammel budsjettlinje (0,80)-(40,0) med tilpasning E0, ny brattere linje (0,80)-(32,0) med tilpasning E1 på lavere indifferenskurve; hjelpelinje for substitusjons- vs. inntektseffekt | budsjett-indifferens-diagram med dekomponering av substitusjons- og inntektseffekt |
| 🔴 | eksempel | Eksempel 4: Støtteordning med knekk i budsjettlinja | Budsjettlinje med knekk i (100,80): slak del (0,100)-(100,80) med relativ pris -0,2, bratt del (100,80)-(260,0) med helning -0,5 | budsjettlinje-diagram med knekk (subsidiert intervall) |
| 🟠 | eksempel | Eksempel 1: Budsjettlinja tegnet og tolket | Budsjettlinje fra (0,120) til (40,0), mat x1 vannrett, alt annet x2 loddrett, helning -3; område innenfor/utenfor råd | budsjettlinje-diagram (to goder) |
| 🟠 | eksempel | Eksempel 2: Prisøkning roterer linja | Budsjettlinja roterer innover om loddrett endepunkt (0,120): vannrett skjæring fra (40,0) til (26,7,0), brattere linje, ny helning -4,5 | budsjettlinje-diagram med rotasjon ved prisøkning |

### econ1210-7-3.json — 7.3

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🟡 | teori | ingen figurhull | Nåverdikapittelet er rent tall/formel-basert (diskontering, betalingsrekker, evigvarende strøm). Bruker diskonteringstabeller (markdown-tabeller), ikke grafer/kurver. Ingen figur som ville gitt stor nytte mangler. | — |

### econ1210-7-prove.json — Prøver til del 7: Beredskap — konsumentteori, spill og nåverdi

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🟠 | løsning | Prøve 1 fasit b/c) — matprisøkning, budsjettlinje-rotasjon og effektdekomponering | Budsjettlinje som roterer innover om det loddrette endepunktet (mat-endepunkt 40→32), ny tangering E1 på lavere indifferenskurve, og hjelpelinje som dekomponerer substitusjons- og inntektseffekt | budsjettlinje-og-indifferenskurver-med-effektdekomponering |

### econ1210-8-1.json — Begrepsdrill: gjengangerne i oppgave 1

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🟡 | oppgave | Drilloppgave 5 (d5) — monopolets marginalinntekt | Fallende E-kurve med MI-kurve under, dobbelt så bratt, som starter i samme punkt på p-aksen og treffer x-aksen på halve mengden | etterspørsel-og-marginalinntekt-kurve |

### econ1210-8-2.json — Fra nyhetsbilde til standardgrep: aktualitetstrening

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🟠 | eksempel | Eksempel: fra nyhetsbilde til grep (korn-eksport) | E fallende, T stigende, verdenspris pV som vannrett linje over autarkiprisen; eksportrestriksjon presser innenlandsk pris ned; gevinst-rektangel/trapes og netto tapstrekant | handelsdiagram med verdensprislinje og eksportrestriksjon (tapstrekant) |

### econ1210-8-3.json — 8.3

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🔴 | løsning | econ1210-8-3-fasit2-def oppg. 2d (stykkskatt) | Figur i ord: E, opprinnelig T, T' parallelt 25 over T; A=(300,200)→B=(270,210); markedspris 210 leses av B, nettopris 185 på gamle T; loddrett avstand = avgift 25. | SVG: stykkskatt-skift t=25 med A→B, markedspris 210, nettopris 185, avgiftskile. |
| 🔴 | løsning | econ1210-8-3-fasit2-ef oppg. 2e (dødvektstap) | Figur i ord: dødvekttrekant mellom E (øverst), gamle T (nederst) og loddrett linje ved x1=270, spiss i A ved x0=300 (areal 375); skilt fra avgiftsinntekt 6750. | SVG: dødvekttrekant ved stykkskatt (375) + avgiftsinntekt-rektangel (6750) tydelig atskilt. |
| 🔴 | løsning | econ1210-8-3-fasit3-ab oppg. 3b (monopoltilpasning) | Figur i ord: E fra (0,120) til (240,0); MI fra (0,120) dobbelt så bratt til (120,0); MK vannrett ved 40; MI=MK ved x_M=80; opp til E gir p_M=80. | SVG: monopoltilpasning E/MI/MK med x_M=80, p_M=80 avlest på E-kurven. |
| 🔴 | løsning | econ1210-8-3-fasit3-cd oppg. 3c (dødvektstap monopol) | Figur i ord: dødvekttrekant med hjørner (80,80) på E, (80,40) på MK og (160,40) frikonkurransepunkt; mellom E og MK fra x_M=80 til x_opt=160 (areal 1600); fordeling KO/PO. | SVG: monopolets dødvekttrekant (1600) mellom E og MK, med monopoloverskudd-rektangel (3200). |
| 🟠 | løsning | econ1210-8-3-fasit1-txt oppg. 1b (SO) og 1c (ekstern virkning) | 1b: figur i ord med E, T og SO-areal mellom kurvene. 1c: figur i ord med markedets T og høyere samfunnsøkonomisk T, markedsmengde til høyre for optimum, effektivitetstap-trekant. | SVG (to små figurer): SO som areal mellom E og T; og negativ eksternalitet med privat vs. samfunnsøkonomisk T + effektivitetstap. |
| 🟠 | løsning | econ1210-8-3-fasit2-abc oppg. 2a og 2c | 2a figur i ord: E (skjærer prisaksen p=300), T (skjærer p=50), kryss A, likevekt (300,200). 2c figur i ord: T flyttet 40 opp til T', ny likevekt B=(252,216) med helningsdrøfting. | SVG: FK-likevekt (300,200) med akseskjæringer; og T-parallellskift +40 → B=(252,216). |
| 🟡 | løsning | econ1210-8-3-fasit1-txt oppg. 1a (T-kurven) | Figur i ord: stigende T-kurve i anleggsmodellen; høyden = enhetskostnad i dyreste anlegg i drift. Hele øvingseksamenen har INGEN bilder. | SVG: stigende trappeformet T-kurve (anleggsmodell) glattet til kurve, høyde = marginalkostnad. |

### econ1210-8-4.json — 8.4

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🔴 | løsning | Oppgave 2f subsidie-paradokset velferd (econ1210-8-4-los2-f) | «Figur i ord»: dødvektstrekant til høyre for x0=200 (x0=200→x1=240), KO-gevinst, PO-gevinst og statens utlegg (rektangel s×x1) markert. Kapitlets figurer er skatt-kile/markedskryss-SVG; subsidie-velferdsfiguren mangler. | Subsidie-velferdsdiagram: T ned med s=30, dødvektstrekant høyre for x0, KO/PO-gevinstarealer og utlegg-rektangel 7200. |
| 🔴 | løsning | Oppgave 3a negativ ekstern virkning (econ1210-8-4-los3-ab) | «Figur i ord»: E fallende, privat T og samfunnsøkonomisk T (parallelt over med marginal skadekostnad), markedslikevekt E×T for stor mengde, optimum E× samf.T mindre mengde, dødvektstrekant mellom x* og x_marked. Ingen slik figur rendret i kapitlet. | Pigou-diagram: E, privat T, samfunnsøkonomisk T over, x_marked vs. x*, dødvektstrekant fra ekstern virkning. |
| 🟡 | løsning | Oppgave 2b likevekt (econ1210-8-4-los2-abc) | «Figur i ord»: markedslikevekt for jordartsmetaller (E x=800-4p treffer prisaksen p=200, T x=2p-100 treffer p=50), likevekt A=(200,150) med stiplede hjelpelinjer. En generisk markedskryss-SVG er plassert lenger ned (o2b) med caption for (200,150), så delvis dekket, men b) selv har kun figur i ord. | Konkret markedskryss E/T for jordartsmetaller med A=(200,150), akseskjæringer 200 og 50 markert. |

## econ1310 — full liste (31 hull)


### econ1310-1-3.json — 1.3

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🟡 | teori | econ1310-1-3-text-rente / econ1310-1-3-ex-7 (styringsrente → markedsrenter) | Bankenes rentedifferanse (utlånsrente over innskuddsrente) og hvordan styringsrenten smitter til markedsrentene. Ren tekstbeskrivelse av en flyt/sammenheng som kunne visualiseres, men ingen figur. | Enkelt flyt-/søylediagram: sentralbankens styringsrente → bankenes finansieringskostnad → innskudds- og utlånsrente, med rentedifferansen (margin) markert. |

### econ1310-4-1.json — 4.1

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🔴 | eksempel | econ1310-4-1-ex2 (Eksempel 2: Økt forhandlingsmakt z^W↑) | Skift opp i lønnskurven mot uendret vannrett priskurve; ny skjæring lenger til høyre gir høyere u^n og uendret reallønn. Beskrevet i ord («lønnskurven er skjøvet opp, den nye skjæringen ligger lenger til høyre»), men ingen figur som viser skiftet. | Lønns- og priskurve-diagram med lønnskurven skjøvet opp (z^W↑), gammel likevekt A og ny B lenger til høyre på uendret priskurve, u^n_0<u^n_1 markert |
| 🔴 | eksempel | econ1310-4-1-ex3 (Eksempel 3: Lavere påslag μ↓) | Priskurven flyttes opp (μ↓), ny skjæring lenger til venstre gir høyere reallønn og lavere u^n. Beskrevet i ord, ingen figur. | Lønns- og priskurve-diagram med priskurven løftet (μ↓), ny skjæring lenger til venstre, høyere W/P og lavere u^n |
| 🔴 | eksempel | econ1310-4-1-ex4 (Eksempel 4: Full sjanger N-oppgave, «Tegn diagrammet») | Eksplisitt «Diagram (beskrevet)»: to kurver i (u,W/P), pil som viser lønnskurven skiftet opp, punkt A og B begge på priskurven med B til høyre, u^n_0<u^n_1. Oppgaven ber uttrykkelig om diagram; kun ordbeskrivelse finnes. | Lønns- og priskurve-diagram med skiftpil opp på lønnskurven, A og B på uendret priskurve, u^n_0<u^n_1 |
| 🟠 | oppgave | econ1310-4-1-ex-e6 (oppg. 6: koordinert lønnsdannelse, «diagram i ord») | Løsningen ber om «diagram i ord»: lønnskurven skiftet ned (z^W↓), B på priskurven til venstre for A, u^n_1<u^n_0. Ingen faktisk figur. | Lønns- og priskurve-diagram med lønnskurven skjøvet ned, ny skjæring til venstre, lavere u^n, uendret reallønn |

### econ1310-4-2.json — 4.2

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🟠 | oppgave | econ1310-4-2-exb-e6 (oppgave 6) | «Vis hvordan Phillips-kurven skifter ved (a) et positivt kostnadssjokk og (b) høyere inflasjonsforventninger, og forklar hvorfor begge skifter kurven mens et etterspørselssjokk flytter økonomien langs kurven.» Løsningen beskriver i ord en parallellforskyvning oppover av PK og bevegelse langs kurven, men viser ingen skift-figur (kun grunn-PK finnes ellers i kapitlet). | Phillips-kurven i (Y,π): opprinnelig PK og en oppskiftet PK' (parallellforskjøvet opp med z^π/π^e), pluss en pil som viser bevegelse LANGS kurven ved et etterspørselssjokk. Illustrerer forskjellen skift vs. bevegelse. |

### econ1310-4-3.json — 4.3

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🔴 | teori | econ1310-4-3-modellforankring (Hvorfor koordinering senker u^n) | Kjernemekanismen i frontfagsmodellen forklart i (u, W/P)-diagrammet: uten koordinering ligger lønnskurven høyt (høy u^n), med koordinering skyves lønnskurven ned og skjæringen flyttes til venstre (lavere u^n), uendret priskurve. Teksten refererer eksplisitt til «(u, W/P)-diagrammet, tillatt som figur fra 2021» men viser ingen figur. | (u, W/P)-diagram med vannrett priskurve W/P=A/(1+µ), to lønnskurver (høy uten koordinering, lav med koordinering) og to skjæringspunkter som viser u^n flytter seg mot venstre. |
| 🟠 | eksempel | econ1310-4-3-ex2 (Full drøftingsoppgave, sjanger L) | A-besvarelsen forankrer drøftingen i lønns- og priskurvemodellen: lavere z^W → lønnskurven ned → skjæring til venstre → lavere u^n, uendret reallønn. Nevner «ev. med figur fra kap. 4.1» men ingen figur er vist. | (u, W/P)-diagram som illustrerer lønnskurven skiftet ned ved koordinering med skjæringspunkt flyttet mot lavere u^n og uendret reallønn på priskurven. |

### econ1310-4-prove.json — 4.P

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🔴 | oppgave | Prøve 1.A (econ1310-4-prove-ex-p1-1), deloppgave b | Lønns- og priskurvemodellen: vannrett priskurve i høyden 0,833, fallende lønnskurve fra 1 ved u=0, skjæring i u^n≈0,42. Løsningen sier eksplisitt «Tegn diagrammet (beskriv det i ord)» og gir kun en verbal beskrivelse av (u, W/P)-diagrammet. | (u, W/P)-diagram med vannrett priskurve W/P=0,833, fallende lønnskurve, og likevektspunkt markert ved u^n≈0,42. |
| 🔴 | oppgave | Prøve 1.A (econ1310-4-prove-ex-p1-1), deloppgave c | Skift i lønnskurven når z^W stiger til 0,08: lønnskurven skjøvet opp, ny skjæring lenger til høyre ved u^n≈0,62, uendret priskurve. Beskrives kun i ord. | (u, W/P)-diagram som viser lønnskurven skiftet opp (z^W: 0→0,08), uendret vannrett priskurve, og to skjæringspunkter A (u^n≈0,42) og B (u^n≈0,62). |
| 🔴 | oppgave | Prøve 4.A (econ1310-4-prove-ex-p4-1), deloppgave a | Full arbeidsmarkedsoppgave: økt forhandlingsmakt skyver lønnskurven opp, ny likevekt B lenger til høyre på uendret priskurve. Løsningen sier «Tegn diagrammet i ord» og «Diagram: (u, W/P); vannrett priskurve; fallende lønnskurve skiftet opp; punktene A og B på priskurven med B til høyre». | (u, W/P)-diagram med vannrett priskurve, fallende lønnskurve skiftet opp av høyere z^W, og likevektspunktene A og B (B til høyre) på priskurven. |

### econ1310-5-3.json — 5.3

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🔴 | teori | econ1310-5-3-text-grafisk (Grafisk analyse av positivt kostnadssjokk) | Fullstendig ordbeskrivelse av positivt kostnadssjokk: PK opp med Δz^π og RR opp med d1Δz^π mot fast IS, ny likevekt B oppe til venstre (i↑, Y↓), netto π↑ = stagflasjon. Kapitlets figur viser bare det NEGATIVE sjokket; det positive (hovedcaset) mangler figur. | IS-RR-PK topanel for positivt kostnadssjokk: PK og RR opp, IS fast, B oppe til venstre — stagflasjon (i↑, Y↓, π↑) |
| 🟠 | eksempel | econ1310-5-3-example-1 (Eksempel 1: Energiprishopp) | Gjennomregnet positivt kostnadssjokk med øvre og nedre panel beskrevet i ord (B oppe til venstre, π opp dempet). Ingen figur (samme scenario som text-grafisk). | IS-RR-PK topanel positivt kostnadssjokk (energiprishopp): PK+RR opp, IS fast, stagflasjon A→B |
| 🟡 | eksempel | econ1310-5-3-example-2 (Eksempel 2: Strømprisfall, eksamensnivå) | Negativt kostnadssjokk med begge paneler beskrevet (B nede til høyre, π ned). Det finnes en generell negativ-sjokk-figur i kapitlet, men den er ikke plassert ved dette eksamensnivå-eksempelet — leseren ser bare tekst her. | IS-RR-PK topanel negativt kostnadssjokk (strømprisfall): PK+RR ned, IS fast, B nede til høyre (i↓, Y↑, π↓) |

### econ1310-5-4.json — 5.4

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🟠 | oppgave | econ1310-5-4-rep-3 (R3) | «Angi fortegnene på ΔY, Δi og Δπ etter et positivt kostnadssjokk, og hvilke kurver som skifter.» Løsningen sier «PK skifter opp (med Δz^π) og RR skifter opp (med d₁Δz^π); IS ligger fast … Δi>0, ΔY<0, Δπ>0 (stagflasjon)» — hele IS-RR-PK-tilpasningen beskrives i ord uten figur. Kapitlet har ingen figurer overhodet. | Topanels IS-RR-PK-diagram som viser kostnadssjokk: øvre panel med fast IS og RR som skifter opp (ny likevekt: i opp, Y ned); nedre panel med PK som skifter opp (π opp). Markerer stagflasjonsutfallet. |

### econ1310-5-prove.json — 5.P

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🔴 | løsning | Prøve 2 oppg. 1 (econ1310-5-prove-p2-1: ΔG>0 grafisk) | «Analyser grafisk i IS-RR-PK»: IS høyre, RR fast, øvre panel B til høyre (Y↑,i↑), nedre panel π↑. Løsningen beskriver panelene i ord; ingen figur (kapitlet oppgir at diagrammer beskrives i ord). | IS-RR-PK topanel positivt etterspørselssjokk (ΔG>0): IS høyre, RR fast, A→B, Y↑ i↑ π↑ |
| 🔴 | løsning | Prøve 2 oppg. 2 (econ1310-5-prove-p2-2: Δz^C<0 grafisk) | Negativt etterspørselssjokk grafisk: IS venstre, RR fast, B til venstre (Y↓,i↓), π↓. Kun ordbeskrivelse. | IS-RR-PK topanel negativt etterspørselssjokk (Δz^C<0): IS venstre, RR fast, A→B, Y↓ i↓ π↓ |
| 🔴 | løsning | Prøve 2 oppg. 3 (econ1310-5-prove-p2-3: ΔG>0 med fast rente) | Fast rente / nullgrense: RR vannrett, IS høyre gir større Y-utslag og høyere π enn med aktiv rente. Sammenligning beskrevet i ord uten figur. | IS-RR-PK topanel med vannrett RR (fast rente): IS høyre gir større Y-utslag enn stigende RR; høyere π |
| 🔴 | løsning | Prøve 3 oppg. 1 (econ1310-5-prove-p3-1: Δz^π>0 energikrise grafisk) | Positivt kostnadssjokk: PK og RR opp, IS fast, B oppe til venstre (Y↓,i↑), π↑ = stagflasjon. Beskrevet i ord, ingen figur. | IS-RR-PK topanel positivt kostnadssjokk: PK+RR opp, IS fast, stagflasjon A→B |
| 🟠 | løsning | Prøve 3 oppg. 2 (econ1310-5-prove-p3-2: Δz^π<0 strømprisfall grafisk) | Negativt kostnadssjokk: PK og RR ned, IS fast, B nede til høyre (Y↑,i↓), π↓; med eksplisitt proporsjonskontroll. Kun ord. | IS-RR-PK topanel negativt kostnadssjokk: PK+RR ned, IS fast, B nede til høyre, π ender lavere enn A |
| 🟠 | løsning | Prøve 4 oppg. b (econ1310-5-prove-p4-2: Δz^I<0 grafisk) | Investeringsfall grafisk: IS venstre, RR fast, B til venstre (Y↓,i↓), π↓. Ordbeskrivelse uten figur. | IS-RR-PK topanel negativt etterspørselssjokk (Δz^I<0): IS venstre, RR fast, A→B, Y↓ i↓ π↓ |

### econ1310-6-1.json — 6.1

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🟠 | teori | econ1310-6-1-tema4 / econ1310-6-1-ex-4 / econ1310-6-1-oppg-5 | Lønnsdannelse/frontfag-momentbanken: koordinering senker z^W → lønnskurven ned → lavere u^n; varig økt forhandlingsmakt skifter lønnskurven opp → høyere u^n, uendret reallønn (låst av priskurven). Teksten sier «du kan tegne dem — figurer er tillatt» men viser ingen figur. | (u, W/P)-diagram med priskurve W/P=A/(1+µ) og lønnskurve, som viser hvordan et z^W-skift (opp/ned) flytter u^n mens reallønnen står fast. |

### econ1310-6-3.json — 6.3

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🟠 | eksempel | econ1310-6-3-ex-1 (Eksempel 1 — forbrukertilliten stuper) | «Skifter IS mot venstre (lavere etterspørsel ved gitt rente). RR skifter ikke. PK ligger fast. … Y↓, i↓, π↓.» Hele IS-RR-PK-responsen på et negativt etterspørselssjokk beskrives i ord uten figur. | IS-RR-PK: IS venstre langs uendret RR (øvre panel, Y og i ned) + PK-panel (π ned). Kontrast: RR og PK står stille. |
| 🟠 | eksempel | econ1310-6-3-ex-2 (Eksempel 2 — strømprisene faller) | «Skifter PK ned (med Δz^π) og RR ned (med d₁Δz^π) samtidig. IS ligger fast. … π↓, Y↑, i↓.» Eksplisitt advarsel «tegn proporsjonene slik at inflasjonen ender lavere enn utgangspunktet» — forutsetter en figur som ikke finnes. | IS-RR-PK for negativt kostnadssjokk: RR og PK skifter ned langs fast IS; øvre panel gir høyere Y og lavere i, nedre panel lavere π. Riktige proporsjoner så π ender under utgangsnivået. |
| 🟠 | eksempel | econ1310-6-3-ex-3 (Eksempel 3 — handelskonflikt, to sjokk) | To sjokk samtidig: ΔX<0 skifter IS mot venstre, og Δz^π>0 skifter PK og RR opp. «Samlet bilde … stagflasjonsaktig». Kombinasjonen av IS-venstre + PK/RR-opp beskrives i ord uten figur. | IS-RR-PK-diagram med to samtidige skift: IS til venstre OG RR/PK opp — viser Y trukket klart ned og π opp (stagflasjon). Egnet til å illustrere «én hendelse, to sjokk». |
| 🟠 | oppgave | econ1310-6-3-oppg-6 (oppgave 6 — pandemi, to sjokk) | Δz^C<0 → IS mot venstre; Δz^π>0 → PK og RR opp. Y trekkes ned, mens inflasjonen er «ubestemt» (etterspørselsfall drar π ned, kostnadssjokk drar π opp). Kurveskiftene og den ubestemte nettoeffekten på π beskrives kun verbalt. | IS-RR-PK: IS venstre + PK/RR opp, med to alternative PK-utfall som markerer at netto π er ubestemt (avhenger av sjokkstyrke). Viser Y entydig ned, π ubestemt. |

### econ1310-6-prove.json — 6.P

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🟡 | løsning | econ1310-6-prove-p3-1 (Prøve 3, sentralbanksjef-case a) | Situasjonsdiagnose i modellens språk: negativt etterspørselssjokk (negativt produksjonsgap) kombinert med positivt kostnadssjokk Δz^π>0 (importert inflasjon over målet) — «stagflasjonsaktig». To sjokk som trekker rentebeslutningen hver sin vei, beskrevet uten diagram (kapitlet nevner eksplisitt at figurer er tillatt fra 2021). | IS-RR-PK-diagram: IS skifter til venstre (negativt etterspørselssjokk) samtidig som PK og RR skifter opp (kostnadssjokk), som viser negativt produksjonsgap og inflasjon over målet samtidig. |
| 🟡 | løsning | econ1310-6-prove-p4-1 (Prøve 4, rådgiver-case a) | «Eksportfallet er et negativt etterspørselssjokk, ΔX<0, som skifter IS mot venstre og gir et negativt produksjonsgap … RR skifter ikke.» Kurveskiftet er beskrevet i ord i løsningen; ingen figur, selv om oppgaven eksplisitt tillater figurer. | IS-RR-PK øvre panel: IS skifter til venstre langs fast RR, ny likevekt med lavere Y og lavere i; nedre PK-panel viser lavere π. Understreker at RR ikke skifter. |

### econ1310-7-3.json — 7.3

| | Type | Ref | Figur trengs | Foreslått figur |
|---|---|---|---|---|
| 🔴 | løsning | econ1310-7-3-los3 / oppgave 3a («Tegn de to kurvene i et (u, W/P)-diagram») | Oppgaven ber eksplisitt om å TEGNE lønns- og priskurven i (u, W/P)-diagram og forklare skjæringspunktet som gir u^n. Løsningen gir «A-besvarelse med figurbeskrivelse» i ren tekst (flat priskurve, fallende lønnskurve, skjæring = u^n) uten faktisk figur. | (u, W/P)-diagram: vannrett priskurve W/P = A/(1+μ) og fallende lønnskurve, med skjæringspunkt som markerer likevektsledigheten u^n. |
| 🔴 | løsning | econ1310-7-3-los3 / oppgave 3b («Vis i diagrammet» z^W-skift) | «Lønnskurven skifter opp/utover (til høyre) … nytt skjæringspunkt ved høyere ledighet: u^n øker. Reallønnen på lang sikt er uendret (låst av flat priskurve).» Skiftet og den uendrede reallønnen beskrives i ord; ingen figur som viser lønnskurve-skiftet. | (u, W/P)-diagram med lønnskurven skiftet opp/utover langs fast flat priskurve: nytt skjæringspunkt lengre til høyre (høyere u^n), samme reallønn W/P = A/(1+μ). |
| 🔴 | løsning | econ1310-7-3-los4 / oppgave 4c («Bruk IS-RR-PK-diagrammet til å vise» kostnadssjokk) | Oppgaven ber eksplisitt om å bruke IS-RR-PK-diagrammet til å vise virkningen av Δz^π>0. Løsningen beskriver i ord: «Øvre panel (Y,i): IS uendret, RR skifter opp … høyere i, lavere Y. Nedre panel (Y,π): PK skifter opp … høyere π. … stagflasjon.» Ingen faktisk topanels-figur. | Topanels IS-RR-PK-diagram for kostnadssjokk: øvre panel med fast IS og oppskiftet RR (i opp, Y ned), nedre panel med oppskiftet PK (π opp). Markerer stagflasjon (i↑, Y↓, π↑). |


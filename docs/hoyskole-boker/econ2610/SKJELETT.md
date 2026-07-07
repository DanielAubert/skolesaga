# Bokskjelett: ECON2610 Ressursallokering, fordeling og strategisk atferd — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er derfor angitt her, destillert fra
> `EKSAMENSANALYSE.md` (7 ordinære sett H2019–H2025; emnet gis kun høst).
> Arketype: **DNA-regnefag** (`DNA-regnefag.md`) med en tung **figur-i-ord-hybrid**
> lånt fra `DNA-drofting.md` og fra søsterboka `econ1410/SKJELETT.md`.
>
> ⚠️ **EVIDENSVARSEL (fra analysen §4–§5):** Arkivet inneholder **kun
> oppgavetekster** — ingen sensorveiledninger, ingen fasit. Alle sensorkrav og
> typiske feil er **utledet**, ikke dokumentert. Der et krav er særlig usikkert er
> det merket **(verifiser)**. En bok bygget på dette skal behandle sensorkravene
> som velbegrunnede hypoteser og oppdateres straks en offisiell sensorveiledning
> skaffes. Alle mønstereksempler i skjelettet er omskrivninger; forfatteren skal
> variere dem videre, aldri kopiere inn ordrett.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `econ2610` |
| Tittel | **ECON2610 Ressursallokering, fordeling og strategisk atferd** |
| Level | `'Høyskole'` |
| Institusjon | Universitetet i Oslo (UiO) |
| Arketype | Regnefag med tung figur-i-ord-hybrid («words and diagrams») |
| Antall kapitler | **31** (2 eksamenskart/håndverk + 24 tema/beredskap/drill + 2 syntese/begrepsdrill + 3 øvingseksamener) |
| Estimert totaltid | **≈ 2 060 min ≈ 34 timer** |
| Quiz totalt | **526** (krav ≥500) |
| Flashcards totalt | **538** (krav ≥500) |

**Pitch (ett avsnitt):** ECON2610 heter «Ressursallokering, fordeling og strategisk
atferd», men er i praksis et **handelsteori- og industriøkonomifag** (fra 2024
offisielt omdøpt *«Strategy, Competition and Trade»*). Eksamen er 3 timers digital
skoleeksamen (Inspera, A–F, ordbok), gitt **på engelsk t.o.m. H2024 og på norsk fra
H2025** — så studenten må mestre fagbegrepene på begge språk. Settet består av 2–4
oppgaver med **eksplisitt prosentvekt**, og de fleste deloppgavene ber om **«words
and diagrams»**: en verbal mekanismeforklaring *og* en figur, med matematikk som
støtte — mens de rene regneoppgavene (monopolistisk konkurranse, Cournot,
vekstregnskap) krever presise tallsvar. Boka bygges rundt **fem modellfamilier**:
(1) standard handelsmodell (PPF/isoverdi/indifferens), (2) Heckscher-Ohlin med
teoremene Stolper-Samuelson, Rybczynski og faktorprisutjevning (**den tyngste
delen**), (3) spesifikke faktorer / faktorallokering kort vs. lang sikt
(**badekardiagrammet**), (4) monopolistisk konkurranse (PP–CC, mark-up), og
(5) spillteori/oligopol (Cournot, Stackelberg, Nash). Hver oppgave avsluttes i
praksis med en **aktualisert drøftingshale** (innvandring, market power, strømpris,
bytteforhold) — sjangeren som skiller A fra C. Vekstregnskap/Solow legges som ett
kompakt **«bør kjenne til»**-parti (0 forekomster siden 2022).

**Kritisk sjangerregel (gjelder HELE boka) — «words and diagrams»-håndverket:**
Flertallet av deloppgavene sier eksplisitt «explain the economic mechanisms and
intuition **with words and diagrams**». Derfor skal alle eksempler og
løsningsforslag inneholde (i) en presis **figurbeskrivelse i ord** (hva står på
aksene, hvilke kurver, gamle og nye punkter, arealer/skift/krysninger navngitt) og
(ii) den **verbale mekanismen** (hvorfor kurven skifter, hvem vinner og taper,
hvorfor retningen blir slik). Et rent tallsvar uten mekanismeforklaring og figur gir
sannsynligvis ikke full uttelling; en figur uten forklaring heller ikke. **Regn *og*
forklar *og* tegn.** I de rene regneoppgavene (PP–CC, Cournot, vekstregnskap):
**regn ferdig med tall** — ikke stopp ved en formel når oppgaven ber om `n`, `P`,
mark-up `µ`, `q`, `w` eller Solow-residualen. (verifiser)

**Kritisk figurregel (gjelder HELE boka).** Tre faste figurer er kjernen — bruk rett
figur til rett sjanger, figuren er en del av svaret, ikke pynt:
1. **PPF + isoverdilinje + indifferenskurve** (standard handelsmodell): konkav PPF,
   isoverdilinje med helning $-p_X/p_Y$, indifferenskurve. Autarki = felles
   tangering (produksjon = konsum). Handel = **separasjon**: produksjon der
   isoverdilinjen tangerer PPF, konsum der samme isoverdilinje tangerer en
   **høyere** indifferenskurve. Vis begge tangeringer i **én** figur.
2. **Badekardiagrammet** (spesifikke faktorer): to $w = p_s\,\text{MPL}_s$-kurver mot
   hverandre, bredden = total arbeidsstyrke $N = N_1 + N_2$, likevekt i **krysningen**
   (felles lønn + arbeidsfordeling). Se badekardiagram-malen i Del 3.
3. **PP–CC** (monopolistisk konkurranse): fallende PP-kurve ($P = c + b/n$),
   stigende CC-kurve ($AC = c + nF/S$), likevekt der $P = AC$.
   For spillteori: **normalform-matrise** + **beste-svar-funksjoner** (Cournot) og
   **spilltre** (Stackelberg).

**Kritisk metoderegel (bokas ryggrad).** To akser avgjør oftest svaret og må sitte
automatisk:
- **Kort sikt vs. lang sikt.** Kort sikt = én faktor er **spesifikk/immobil** →
  **badekardiagrammet**, tvetydige fordelingsvirkninger. Lang sikt = alle faktorer
  **mobile** → **Stolper-Samuelson** (entydig retning). Å bruke Stolper-Samuelson
  (langtidsresultat) på et korttidsspørsmål er en klassisk feil → drilles i kap. 3.3.
- **Riktig retning på teoremene.** Stolper-Samuelson (m/**forstørrelseseffekt**),
  Rybczynski og faktorprisutjevning må ha korrekt fortegn/retning. **Reversert
  konklusjon** (feil faktor/vare vinner) er den mest sannsynlige poengfellen.

**Kritisk notasjonsregel (gjelder HELE boka).** Emnet følger standard internasjonal
handelsteori (Ricardo, Heckscher-Ohlin, spesifikke faktorer, monopolistisk
konkurranse à la Krugman) + industriell organisasjon/spillteori (Cournot,
Stackelberg, Nash) — notasjonen tyder på et Krugman-Obstfeld-Melitz-lignende
handelspensum + standard mikro-/spillteoripensum. **Verifiser gjeldende pensumbøker
før skriving.** Standardnotasjon fra settene:
- **Handel:** to varer $X, Y$ (eller $x_1, x_2$); priser $p_X, p_Y$; relativpris
  $p = p_X/p_Y$; isoverdilinje-helning $-p_X/p_Y$; verdensmarkedspris $q = q_1/q_2$
  (H2025). Faktorer arbeid $L$/$N$ og kapital $K$; marginalprodukt $\text{MPL}$,
  $F'(N)$; land «Home/Foreign» eller konkrete (US/Kina). Likevekt:
  $\text{MU}_1/\text{MU}_2 = \text{MRT} = p_1/p_2$.
- **Monopolistisk konkurranse:** $P$ pris, $c$ marginalkostnad, $n$/$N$ antall
  bedrifter, $F$ faste etableringskostnader, $S$ markedsstørrelse, $AC$
  gjennomsnittskostnad, mark-up $\mu = P/c$; likevekt $n = \sqrt{bS/F}$,
  $P = c + b/n$.
- **Spillteori:** normalform-matrise (strategier $U/M/D \times L/C/R$), utbytte
  $(x, y)$; kvanta $q_1, q_2$, invers etterspørsel $p = a - b(q_1+q_2)$, kostnad $c$.
- **Vekst (bør kjenne):** $Y = A\,K^{\alpha}(hL)^{1-\alpha}$, $\alpha = 1/2$;
  vekstrater $g_x = \Delta x/x$; Solow-residual $g_A = g_y - \alpha g_k - (1-\alpha)g_h$;
  endogen $\hat A = L_A/\mu$, $Y = A\,L_Y$.
- Matematikk i LaTeX (`$...$` / `$$...$$`), dobbel backslash i JSON. Norsk bokmål med
  **engelsk fagterm i parentes ved første forekomst** (tospråklig — se §1 begrepsbank).

**Tospråklig begrepsbank (gjennomgående krav).** Fordi settene veksler mellom engelsk
(t.o.m. H2024) og norsk (H2025), skal hvert kjernebegrep introduseres på **begge
språk** første gang, og flashcards i begrepsdrillen (kap. 7.2) lages **tospråklig**
(norsk term ↔ engelsk term). Sentrale par: komparativt fortrinn / *comparative
advantage*; faktorutrustning / *factor endowment*; faktorintensitet / *factor
intensity*; produksjonsmulighetskurve (PMK) / *production possibility frontier (PPF)*;
isoverdilinje / *isovalue line*; indifferenskurve / *indifference curve*; bytteforhold
/ *terms of trade*; spesifikke faktorer / *specific factors*; Stolper-Samuelson-teoremet
/ *Stolper-Samuelson theorem*; Rybczynski-teoremet / *Rybczynski theorem*;
faktorprisutjevning / *factor price equalization*; monopolistisk konkurranse /
*monopolistic competition*; påslag/mark-up / *mark-up*; beste-svar / *best response*;
Nash-likevekt / *Nash equilibrium*; delspill-perfekt likevekt / *subgame-perfect
equilibrium (SPNE)*; baklengs induksjon / *backward induction*; blandet strategi /
*mixed strategy*; iterert eliminering av strengt dominerte strategier / *iterated
elimination of strictly dominated strategies (IESDS)*; eksternalitet / *externality*;
Pigou-skatt / *Pigouvian tax*; vekstregnskap / *growth accounting*.

**Forbudte termer (grep-liste for fase 6-verifisering — skal gi null treff):**
valutakurs, vekslingskurs, exchange rate, betalingsbalanse, driftsbalanse, current
account, renteparitet, pengepolitikk, sentralbank, IS-LM, Phillips-kurve. Disse hører
til ECON1310/makroløpet og er **0 %** på ECON2610-eksamen. (Vekst/Solow er unntatt —
det er et «bør kjenne til»-parti i denne boka, jf. Del 6.)

**Kryssbok-lenker (leserkrav).** Emnet forutsetter mikroøkonomisk grunnlag og
overlapper tungt med søsterbøkene:
- **ECON1410 Internasjonal økonomi** — den nærmeste slektningen (samme HO-teoremer,
  badekardiagram, PP–CC). ECON2610 er den mer **matematiske og strategiske**
  varianten (dw/dN-derivasjon, PP–CC-algebra, full spillteori). Lenk til
  `[…](/bok/econ1410/<id>)` for grafisk fordypning der 2610 forutsetter figuren kjent.
- **ECON1210 Mikroøkonomi 1** — konsument-/produsentoverskudd og dødvektstap for
  toll-oppgavene (`econ1210-2-1`), markedslikevekt (`econ1210-1-3`), stykkskatt som
  mønster for arealanalysen (`econ1210-3-1`), indifferenskurver (`econ1210-7-1`),
  2×2-spillmatrisen (`econ1210-7-2`).
- **ECON2220 Mikroøkonomi 2** — eier spillteoriens **teori** (NE/SPNE-definisjonene,
  `econ2220-7-1`/`econ2220-7-2`), Lagrange og generell likevekt. **Unngå
  duplisering:** 2610 vektlegger **oligopol/Cournot/Stackelberg i markedskontekst**;
  2220 vektlegger NE/SPNE-teori og atferd. Krysslenk i stedet for å gjenta.
- **NB til fase 6:** disse bøkene er per nå på skjelett-/byggenivå, ikke
  nødvendigvis publisert. **Lenk kun til kapitler som finnes** (README). Er
  målboka ikke live når ECON2610 verifiseres, **nedgraderes** lenken til ren
  tekstomtale («forutsetter overskuddsanalysen fra ECON1210») — aldri en død lenke.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen); frekvensen styrer *omfanget*:

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart og «words and diagrams»-håndverket | 2 | Prioriteringsverktøyet + selve svarhåndverket (figur-i-ord + aktuell-case-hale); kjerne i studieguiden. |
| 1 | Komparative fortrinn og standard handelsmodell | 4 | Standard handelsmodell (PPF/isoverdi/velferd) **57 %** + komparative fortrinn Ricardo/HO (begrep) **29 %** — grunnmuren og handelsgevinstens mekanisme → nivå 1 «perfekt» → 3 teori + drill. |
| 2 | Heckscher-Ohlin-modellen og teoremene | 5 | **Den tyngste delen: HO-teoremene 71 % (5/7 sett)** — Stolper-Samuelson, Rybczynski, faktorprisutjevning med korrekt retning. Bærer 50–80 % av poengene → nivå 1 «perfekt» → 4 teori/teorem-utledning + drill. |
| 3 | Spesifikke faktorer og badekardiagrammet | 4 | Faktorallokering kort vs. lang sikt **57 % (4/7)** — den mest fagtypiske figuren, eneste sted kort/lang sikt-skillet testes; med `dw/dN`-matematikken → nivå 1 «perfekt» → 3 teori + kort/lang-sikt-drill. |
| 4 | Monopolistisk konkurranse og stordriftsfordeler | 3 | PP–CC / mark-up **43 % (3/7)** — fast regneoppgave (`n`, `P`, `µ`); parametriseringen varierer mellom sett → nivå 1 «perfekt» → 2 teori + regnedrill. |
| 5 | Spillteori og oligopol | 4 | Cournot/Stackelberg/Nash **43 % (3/7), men 3 av 4 sett siden 2023** — nytt kjernestoff etter regimeskiftet → nivå 1 «perfekt» → 3 teori + drill. |
| 6 | Handelspolitikk, markedssvikt og vekst | 4 | Toll partiell likevekt/terms of trade **29 %** (nivå 2, tungt vektet der det finnes) + eksternalitet/Pigou **14 %** (kjenne) + **[bør kjenne] vekstregnskap/Solow + endogen vekst** (0 siden 2022) → nivå 2/3. |
| 7 | Eksamenstrening | 5 | Den aktualiserte drøftingshalen (sjanger H, 7/7) + tospråklig begreps-/figurdrill (sjanger A) + 3 komplette øvingseksamener (words+diagrams+regning med prosentvekt). |

**Avvik fra DNA-regnefag-malen (dokumentert):**
1. **Figur-i-ord-hybrid, ikke ren algebra.** DNA-regnefag forutsetter oppgaver med
   entydige fasitsvar. ECON2610 er **blandet form**: de fleste deloppgavene krever
   verbal mekanismeforklaring + figur («words and diagrams»), og bare deler er ren
   regning (PP–CC, Cournot, vekstregnskap). Boka låner derfor **figur-i-ord- og
   verbal-mekanisme-sjangeren** fra `DNA-drofting.md` og `econ1410/SKJELETT.md`
   (§1 der). «Gjennomregnet eksamenscase» i drillkapitlene betyr her «gjennomregnet,
   gjennomtegnet **og** gjennomforklart case».
2. **Aktuell-case-drøftingshale som egen akse i hvert teorikapittel.** Fordi den
   aktualiserte drøftingshalen er **universell (7/7)** og skiller A fra C, får hvert
   teorikapittel et eget felt **«Aktuell case (drøftingshale)»** og avslutter med en
   «oversett nyhetsbildet til modellen»-øvelse. Dette er DNA-drøftings drøftingsakse
   lagt inn i et regnefag.
3. **Drillkapitler ligger inne i temadelene** (kap. 1.4, 2.5, 3.4, 4.3, 5.4), ikke
   samlet i siste del, fordi de tunge sjangrene må drilles umiddelbart etter teorien.
   Del 7 beholder syntesen (drøftingshalen), den tospråklige begrepsdrillen og
   øvingseksamenene.
4. **Del 0 har to kapitler** (ikke ett): ett eksamenskart + ett eget kapittel om
   selve «words and diagrams»-håndverket og den aktualiserte drøftingshalen, fordi
   svarformen er så særegen at den fortjener eksplisitt opplæring.
5. **Sensorkrav er utledet, ikke dokumentert** (ingen sensorveiledning i arkivet) —
   markert **(verifiser)** gjennomgående. Karakterterskler kan ikke tallfestes.
6. **Vekstregnskap/Solow nedprioritert til «bør kjenne til»** (Del 6.3–6.4) tross
   29 % historisk frekvens, fordi det har **0 forekomster siden 2022** (regimeskifte).
   Beholdt som forsikring mot foreleserbytte.

---

## 3. Kapitler

Feltene under følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–H) refererer til
oppgavetype-katalogen i EKSAMENSANALYSE §3, gjengitt i Del 0: **A** komparative
fortrinn Ricardo vs. HO (begrepsforklaring), **B** standard handelsmodell
autarki→handel (figur + velferd), **C** spesifikke faktorer / badekardiagram (kort
vs. lang sikt), **D** HO-teoremene (Stolper-Samuelson/Rybczynski/faktorprisutjevning),
**E** monopolistisk konkurranse (PP–CC, mark-up), **F** spillteori/oligopol
(Cournot/Stackelberg/normalform), **G** regneoppgaver utenfor handel (eksternalitet,
vekstregnskap, endogen vekst), **H** aktualisert åpen drøfting (tverrgående hale).
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

---

### Del 0 — Eksamenskart og «words and diagrams»-håndverket

#### Kapittel 0.1: Eksamenskartet: slik testes ECON2610

- **id:** `econ2610-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen
- **Kapitteltype:** eksamenskart
- **description:** Eksamensformen, regimeskiftet fra vekst til spillteori, temafrekvensene og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på alle 7 ordinære sett (H2019–H2025). Skal gjengi: (i) **formen** — 3 timers digital skoleeksamen (Inspera), karakter A–F, tillatt hjelpemiddel forhåndsgodkjent ordbok; **engelsk t.o.m. H2024, norsk fra H2025** (studenten må kunne begrepene på begge språk); 2–4 oppgaver med **eksplisitt prosentvekt** (H2019 20/25/30/25, H2020 40/30/30, H2021 30/20/30/20, H2022 70/30, H2023 60/40, H2024 20/20/40/20, H2025 10 deloppg. à 10 %); deloppgaver innen en oppgave teller likt om ikke annet står; (ii) **regimeskiftet** — vekstregnskap/Solow bar 2/3 sett 2019–2021 men er **borte fra alle fire sett 2022–2025**; spillteori/oligopol (0 før 2022) er i **3 av 4** sett siden 2023; emnet ble omdøpt *«Strategy, Competition and Trade»* i 2024. Handelsteorikjernen (komparative fortrinn, HO-teoremer, faktorallokering) er uendret hele veien; (iii) **temafrekvens-tabellen** (gjenganger-score av 7 sett): HO-teoremer 71 %, standard handelsmodell 57 %, spesifikke faktorer/badekar 57 %, monopolistisk konkurranse 43 %, spillteori/oligopol 43 %, komparative fortrinn Ricardo/HO (begrep) 29 %, toll partiell likevekt 29 %, vekstregnskap/Solow 29 % (0 siden 2022), eksternalitet/Pigou 14 %, endogen/R&D-vekst 14 %, **aktualisert drøftingshale 100 %**; (iv) **at tittelen villeder** — «Ressursallokering, fordeling og strategisk atferd» høres ut som et generelt velferdsfag, men i praksis er det **handelsteori + industriøkonomi**; (v) **de to metodeaksene** — kort vs. lang sikt og riktig teoremretning — som avgjør de fleste oppgavene; (vi) **sensorens metaregler (verifiser)** — «words and diagrams» tas bokstavelig (regn+forklar+tegn); rett figur til rett sjanger; regn ferdig med tall; skill kort/lang sikt eksplisitt; riktig retning på teoremene; terms of trade for stort land; vis beste-svar før symmetriløsning; anvend modellen på casen.
- **Innholdskontrakt:** Oppgavetype-katalogen A–H presenteres som studentens sjekkliste med typisk vekt. Prognosen for H2026 (**verifiser — kun 7 sett uten fasit**): 3–4 oppgaver som dekker (1) handelsteori (komparative fortrinn / standard modell / HO-teorem med PPF- eller badekarfigur); (2) faktorallokering kort/lang sikt med badekardiagram + fordelings-/innvandringsdrøfting; (3) monopolistisk konkurranse med PP–CC-regning **eller** et spillteori-/Cournot-sett (disse to har alternert som «industri»-oppgaven); hver oppgave med en aktualisert drøftingshale; vekstregnskap lav sannsynlighet. Avslutt med leseplan: Del 1–5 «må perfekt», toll + drøftingshalen «må kunne», Del 6 vekst/eksternalitet «bør kjenne».
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt vektene 20/20/40/20 og 180 minutter — sett opp tidsbudsjett per oppgave», og «her er et nyhetsutdrag — hvilken av de fem modellfamiliene passer, og er det et kort- eller langtidsspørsmål?».
- **Aktuell case (drøftingshale):** Introduser sjanger H som fenomen — vis hvordan hvert av de 7 settene kler modellen i en dagsaktuell case (Trump-toll, korona/PPE, strømpris Sør/Nord, market power, innvandring, «Norge trenger flere barn»).
- **Typiske feil:** Metafeilene — figurløse forklaringer eller uforklarte figurer; stoppe ved en formel der oppgaven ber om et tall; prioritere en 20 %-oppgave før 70 %-oppgaven; pugge vekstregnskap på 2019-nivå på bekostning av spillteori; lese inn valutakurs/åpen makro som ikke er pensum.
- **Quiz: 14 · Flashcards: 12**

#### Kapittel 0.2: «Words and diagrams»-håndverket og den aktualiserte drøftingshalen

- **id:** `econ2610-0-2` · **number:** 0.2 · **estimatedMinutes:** 35 · **prerequisites:** `econ2610-0-1`
- **Kapitteltype:** eksamenskart/håndverk
- **description:** Hvordan du bygger et svar som får full uttelling: figur i ord + verbal mekanisme + tallsvar der det kreves, og hvordan du besvarer den aktualiserte drøftingshalen.
- **Eksamensbelegg:** Metakapittel utledet fra oppgaveinstruksjonene i alle 7 sett («explain … with words and diagrams», «you can also use math, but it is not a requirement», H2020). Skal lære (verifiser): (i) **firetrinnssvaret** — 1) navngi modellen/teoremet, 2) beskriv figuren i ord (akser, kurver, gamle/nye punkter, skift/krysning), 3) forklar mekanismen verbalt (hvorfor, hvem vinner/taper, hvilken retning), 4) regn tallet ferdig hvis oppgaven ber om det; (ii) **hva en figur-i-ord er** — siden boka er tekst uten tegninger, beskrives hver figur presist nok til at leseren kan tegne den selv; dette er også svarformen på en digital eksamen der figuren beskrives/lastes opp; (iii) **den aktualiserte drøftingshalen (sjanger H)** som egen disiplin: oversett utsagnet til modellprediksjon, hold fast ved modellen (ikke moralsk synsing), nevn hva som ligger *utenfor* modellen, konkludér på det konkrete utsagnet.
- **Innholdskontrakt:** **Figur-i-ord-malen** (gjenbrukes i hele boka): «Sett [vare/mengde/pris] på aksene. Tegn [kurve] med [helning/form]. Marker utgangspunktet [P₀]. [Sjokket] skifter [kurven] til [retning]. Nytt punkt [P₁]. Arealet/krysningen [navn] viser [tolkning].» **Drøftingshale-malen:** 1) identifiser modell + horisont + retning; 2) still opp prediksjonen; 3) nyansér (motstridende krefter, forutsetninger, hva modellen ikke fanger); 4) svar på utsagnet. Vis begge maler på ett handelseksempel og ett drøftingseksempel. **Tospråklig begrepsintro** demonstreres (norsk term med engelsk i parentes).
- **Oppgavesjangre:** Håndverksøvelser: «gjør om denne tallutregningen til et fullt words-and-diagrams-svar»; «her er en påstand fra en avis — skriv drøftingshalen i fire trinn».
- **Aktuell case (drøftingshale):** Selve kapitlet ER drøftingshale-opplæringen; bruk et innvandrings- og et market-power-utsagn som gjennomgangseksempler.
- **Typiske feil:** Levere figur uten forklaring eller forklaring uten figur; svare på noe annet enn det utsagnet spør om; erstatte modellbruk med et generelt essay; glemme tallsvaret i regnedelene; blande engelsk og norsk term uten å avklare.
- **Quiz: 14 · Flashcards: 16**

**Prøve-kvote Del 0:** ingen (metadel).

---

### Del 1 — Komparative fortrinn og standard handelsmodell *(prioritet: PERFEKT)*

#### Kapittel 1.1: Komparative fortrinn: Ricardo vs. Heckscher-Ohlin

- **id:** `econ2610-1-1` · **number:** 1.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen
- **Kapitteltype:** teori
- **description:** Grunnbegrepet i faget: hva komparativt fortrinn er, og hvorfor Ricardo (teknologi) og Heckscher-Ohlin (faktorutrustning) forklarer det ulikt — med ulike spesialiseringsutfall.
- **Eksamensbelegg:** Ren verbal begrepsforklaring (sjanger A, «Explain, in words …»), forekom H2019 O1 og H2024 Q1 — **29 %**, men er fundamentet under alle handelsoppgavene. Sensor forventer (verifiser): **Ricardo** — komparativt fortrinn (*comparative advantage*) bestemmes av **teknologiforskjeller** (relativ arbeidsproduktivitet) → **full spesialisering**. **Heckscher-Ohlin** — fortrinn bestemmes av **faktorutrustning** (*factor endowment*) kombinert med varens **faktorintensitet** (*factor intensity*) → **ufullstendig** spesialisering (faktorprisene utjevnes, relative kostnader endres når produksjonen vris). H2024 krevde i tillegg presise definisjoner av **eksterne vs. interne stordriftsfordeler**. Prioritet: **perfekt** (foundational).
- **Innholdskontrakt:** Definér komparativt fortrinn via **alternativkostnad** (lavere enn i det andre landet) og skill det fra absolutt fortrinn. **Ricardo-mekanismen:** én faktor (arbeid), teknologiforskjeller gir komparativt fortrinn → landet spesialiserer seg fullt. **HO-mekanismen:** to faktorer, likt teknologi, men ulik faktorutrustning; et land eksporterer varen som er intensiv i landets rikelige faktor → **ufullstendig** spesialisering. Definér **interne** stordriftsfordeler (AC faller med bedriftens produksjon → store bedrifter/imperfekt konkurranse) og **eksterne** (AC faller med næringens samlede produksjon). Tospråklig introduksjon av alle begreper. Symbol- og formelliste (collapsible): $a_{iL}$ (arbeidskraft per enhet), alternativkostnad, $K/L$, faktorintensitet, faktorutrustning.
- **Oppgavesjangre:** A. Mønstereksempel (omskrevet): «Forklar med ord forskjellen på hvordan Ricardo-modellen og Heckscher-Ohlin-modellen bestemmer et lands komparative fortrinn. Hvorfor gir de ulik grad av spesialisering? Definer også interne og eksterne stordriftsfordeler.»
- **Aktuell case (drøftingshale):** «Et lavkostland er dårligst i alt målt i timer per enhet — kan det likevel tjene på handel?» (svar via komparativt, ikke absolutt, fortrinn).
- **Typiske feil:** Forveksle absolutt og komparativt fortrinn; tro at Ricardo og HO gir samme spesialiseringsgrad (full vs. ufullstendig); blande faktorintensitet (vare) og faktorutrustning (land); forklare interne/eksterne stordrift feil vei.
- **Quiz: 22 · Flashcards: 28**

#### Kapittel 1.2: Standard handelsmodell: PPF, isoverdilinje og indifferenskurve

- **id:** `econ2610-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ2610-1-1`
- **Kapitteltype:** teori
- **description:** Autarkilikevekten tegnet riktig: konkav PPF, isoverdilinje med helning $-p_X/p_Y$, indifferenskurve, og tangeringsbetingelsen $\text{MRT} = p_X/p_Y$.
- **Eksamensbelegg:** Første halvdel av standard handelsmodell (sjanger B, **57 %** — H2019, H2022, H2024, H2025), «Explain and illustrate (using one figure) …». Sensor forventer (verifiser) en **konkav PPF** (økende alternativkostnad) + **indifferenskurve** som tangerer, der tangeringen gir intern relativpris, samt likevektsbetingelsen $\text{MU}_1/\text{MU}_2 = \text{MRT} = p_1/p_2$ (H2025 O1b). Prioritet: **perfekt**.
- **Innholdskontrakt:** **PPF** (produksjonsmulighetskurve / *PPF*) er konkav fordi alternativkostnaden øker når produksjonen vris. **Isoverdilinjen** (*isovalue line*) har helning $-p_X/p_Y$ og viser kombinasjoner med samme verdi. **Indifferenskurven** (konveks, fallende) viser konsumentpreferanser. **Autarki:** produksjon = konsum i punktet der en indifferenskurve tangerer PPF; tangeringshelningen er landets **interne relativpris**. Likevektsbetingelsen: $\text{MRT} = \text{MSB} = p_1/p_2$ (marginal transformasjonsrate = marginal substitusjonsbrøk = prisforhold). Figur-i-ord: akser (vare 1 vs. vare 2), konkav PPF, tangerende indifferenskurve, relativprislinjens helning. Forkunnskaper: indifferenskurver ([ECON1210](/bok/econ1210/econ1210-7-1) hvis publisert). Symbol- og formelliste: PPF, $p_X/p_Y$, isoverdilinje, $\text{MRT}$, $\text{MU}_1/\text{MU}_2$.
- **Oppgavesjangre:** B (autarkidel). Mønstereksempel: «Et land produserer to varer med økende alternativkostnad. Tegn og forklar autarkilikevekten. Hva bestemmer den interne relativprisen, og hvilken betingelse gjelder i tangeringspunktet?»
- **Aktuell case (drøftingshale):** «Kan to regioner (f.eks. Sør- og Nord-Norge) betraktes som to land som handler et gode (strøm)?» (H2022-innramming) — bygg intuisjonen for kap. 1.3.
- **Typiske feil:** Tegne rett PPF (skal være konkav i standardmodellen); glemme at konsum = produksjon i autarki; indifferenskurve som krysser i stedet for å tangere; utelate likevektsbetingelsen $\text{MRT} = p_1/p_2$.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 1.3: Autarki → handel: separasjon og handelsgevinsten

- **id:** `econ2610-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `econ2610-1-2`
- **Kapitteltype:** teori
- **description:** Andre halvdel: hvordan handel skiller produksjon fra konsum, løfter nytten til en høyere indifferenskurve — og hvorfor nettopp separasjonen ER handelsgevinsten.
- **Eksamensbelegg:** Kjernen i sjanger B (**57 %**) og det som skiller topp fra midt: å vise **begge** tangeringer i **én** figur og forklare separasjonen. Sensor forventer (verifiser) at produksjon flyttes langs PPF til tangering med isoverdilinjen (mer eksportvare), konsum settes der isoverdilinjen tangerer en **høyere** indifferenskurve, og at velferdsgevinsten forklares. Prioritet: **perfekt**.
- **Innholdskontrakt:** Ved handel bytter isoverdilinjen helning til **verdensmarkedsprisen** $q = q_1/q_2$. **Produksjon:** flyttes langs PPF til der isoverdilinjen tangerer PPF → landet produserer **mer** av eksportvaren. **Konsum:** der samme isoverdilinje tangerer en **høyere** indifferenskurve → landet konsumerer utenfor sin egen PPF. **Separasjon av produksjon og konsum hever nytten — det ER handelsgevinsten** (*gains from trade*). Vis begge tangeringer i én figur; marker eksport (produksjon − konsum av vare 1) og import. Figur-i-ord: konkav PPF, produksjonspunkt Q på isoverdilinje med verdensprishelning, konsumpunkt C på høyere indifferenskurve, eksport-/importpiler. Symbol- og formelliste: PPF, isoverdilinje, $q = q_1/q_2$, indifferenskurve, handelsgevinst.
- **Oppgavesjangre:** B (handelsdel). Mønstereksempel: «Fortsett fra autarkilikevekten: vis i én figur hva som skjer med produksjon og konsum når landet åpner for handel til en gitt verdensmarkedspris. Forklar hvorfor separasjonen av produksjon og konsum gir en velferdsgevinst.»
- **Aktuell case (drøftingshale):** «Vil økt overføringskapasitet mellom Sør og Nord skade Nord?» (H2022 O1e — terms of trade / fordelingsvirkninger; bygg broen til kap. 6.1).
- **Typiske feil:** Bare autarki-figur når handel etterspørres; ikke vise separasjonen (to ulike punkter for produksjon og konsum); glemme at konsum når en høyere indifferenskurve; tegne isoverdilinjen med samme helning før og etter handel (da forsvinner gevinsten).
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 1.4: Drill: standard handelsmodell

- **id:** `econ2610-1-4` · **number:** 1.4 · **estimatedMinutes:** 85 · **prerequisites:** `econ2610-1-3`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på grunnmodellen: full autarki→handel-figur i ord med separasjon, velferdsgevinst og en aktualisert hale.
- **Eksamensbelegg:** Dekker sjanger B (**57 %**) og komparativt-fortrinn-fundamentet (sjanger A). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) identifiser eksportvaren (komparativt fortrinn); 2) tegn konkav PPF; 3) autarki: indifferenskurve tangerer PPF, les av intern relativpris, sjekk $\text{MRT} = p_1/p_2$; 4) handel: isoverdilinjen bytter til verdenspris, flytt produksjon langs PPF, sett konsum på høyere indifferenskurve; 5) marker eksport/import; 6) forklar velferdsgevinsten som separasjon; 7) drøftingshale. Gjennomtegnet eksamenscase med margnotater (hva som gir uttelling: konkav PPF, begge tangeringer, høyere indifferenskurve). **8–12 oppgaver** på eksamensnivå med nyskrevne varer/land/priser, alle med figurbeskrivelse i ord + verbal mekanisme.
- **Oppgavesjangre:** B (+ A-fundament, H-hale). Mønstereksempel (full kjede): «(a) Forklar hvilken vare landet eksporterer og hvorfor. (b) Tegn og forklar autarkilikevekten. (c) Vis handelslikevekten i samme figur og forklar velferdsgevinsten. (d) Drøft kort et utsagn om at ‘handel bare gagner eksportnæringen’.»
- **Aktuell case (drøftingshale):** Roter case: strøm som handel (Sør/Nord), to naboland, en råvareeksportør — studenten skal oversette hver til standardmodellen.
- **Typiske feil:** Hele repertoaret for grunnmodellen: rett PPF, bare autarki-figur, manglende separasjon, gevinstforklaring uten figur, drøftingshale besvart uten modellen.
- **Quiz: 15 · Flashcards: 10**

**Prøve-kvote Del 1:** 4 prøver (1.A komparative fortrinn Ricardo vs. HO + stordriftsdefinisjoner, sjanger A; 1.B autarkifiguren korrekt med $\text{MRT}=p_1/p_2$, sjanger B-del; 1.C handelsovergangen med separasjon og velferdsgevinst, sjanger B-del; 1.D full autarki→handel-oppgave med drøftingshale, sjanger B+H).

---

### Del 2 — Heckscher-Ohlin-modellen og teoremene *(prioritet: PERFEKT — den tyngste delen)*

#### Kapittel 2.1: HO-modellens byggeklosser og Heckscher-Ohlin-teoremet

- **id:** `econ2610-2-1` · **number:** 2.1 · **estimatedMinutes:** 50 · **prerequisites:** `econ2610-1-1`
- **Kapitteltype:** teori
- **description:** 2×2×2-modellen: to varer, to faktorer, to land; faktorintensitet og faktorutrustning — og Heckscher-Ohlin-teoremet om handelsmønsteret.
- **Eksamensbelegg:** Byggeklossene under HO-teoremdelen (**71 %**, den tyngste delen). Faste begrepsgjengangere. Sensor forventer (verifiser) at studenten skiller **kapitalintensiv** vare (høy $K/L$) fra arbeidsintensiv og **kapitalrikelig** land fra arbeidsrikelig, og kan formulere HO-teoremet. Prioritet: **perfekt**.
- **Innholdskontrakt:** **2×2×2-oppsettet.** **Faktorintensitet** = forholdet $K/L$ i produksjonen av en vare (relativt begrep). **Faktorutrustning** = landets relative faktortilgang. **Faktorsubstitusjon** → økende alternativkostnad → konkav PPF. **Heckscher-Ohlin-teoremet:** et land eksporterer varen som er intensiv i landets **rikelige** faktor. Presiser at teoremet forutsetter samme teknologi og preferanser i begge land. Tospråklig introduksjon. Symbol- og formelliste: $K/L$, $w/r$, faktorintensitet, faktorutrustning, HO-teoremet.
- **Oppgavesjangre:** A + D-fundament. Mønstereksempel: «Forklar hva det betyr at en vare er kapitalintensiv og at et land er kapitalrikelig. Hva sier Heckscher-Ohlin-teoremet om hvilken vare landet eksporterer?»
- **Aktuell case (drøftingshale):** «Et arbeidsrikelig land åpner for handel med et kapitalrikelig — hvilket mønster spår HO-teoremet?»
- **Typiske feil:** Behandle faktorintensitet som absolutt i stedet for relativt; blande faktorintensitet (vare) og faktorutrustning (land); feil eksportvare (mot den rikelige faktoren); glemme forutsetningene om lik teknologi/preferanser.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 2.2: Stolper-Samuelson-teoremet: fordeling på lang sikt

- **id:** `econ2610-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ2610-2-1`
- **Kapitteltype:** teori (teorem-utledning)
- **description:** Når en vares relativpris stiger, vinner faktoren den bruker intensivt realt og den andre taper realt — med forstørrelseseffekten. Kjernen i fordelingsanalysen på lang sikt.
- **Eksamensbelegg:** Stolper-Samuelson er den mest sentrale enkeltmekanismen i HO-delen (del av **71 %**-kjernen) — ren forklaring (H2024 Q1b) eller anvendelse (H2020, H2021 reallønn og fordeling). Sensor krever (verifiser) at teoremet **navngis**, at **vinner/taper** identifiseres **realt** (ikke nominelt), og at **forstørrelseseffekten** nevnes. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Stolper-Samuelson-teoremet** (*Stolper-Samuelson theorem*): når den relative prisen på en vare stiger, øker den **reelle** avlønningen til faktoren som brukes **intensivt** i den varen, og den andre faktorens reelle avlønning faller — **uansett hvilken sektor faktoren jobber i**. **Utledning med intuisjon (aktivt):** høyere relativpris på vare X → produksjonen vris mot X → etterspørselen etter den X-intensive faktoren stiger → dens relative pris stiger, og **mer** enn vareprisen (**forstørrelseseffekten** / *magnification effect*), slik at realavlønningen stiger målt i begge varer. **Kobling:** dette er **langtidsresultatet** (alle faktorer mobile) — kontrasten til badekaret (kap. 3.3). Figur-i-ord (valgfri): relativ varepris $p_X/p_Y$ mot relativ faktorpris $w/r$. Symbol- og formelliste: $p_X/p_Y$, $w/r$, reallønn, forstørrelseseffekt.
- **Oppgavesjangre:** D (lang sikt). Mønstereksempel: «Prisen på den arbeidsintensive eksportvaren stiger. Forklar med Stolper-Samuelson-teoremet hva som skjer med den reelle avlønningen til arbeid og kapital på lang sikt. Vis stegene, inkludert forstørrelseseffekten.»
- **Aktuell case (drøftingshale):** «Hvem vinner og taper i landet når det åpner for handel med et lavkostland?» (fordelingskonflikten bak proteksjonisme).
- **Typiske feil:** Ikke navngi teoremet; konkludere nominelt i stedet for realt; tro at faktoren vinner/taper etter hvilken sektor den jobber i (den følger faktortypen); glemme forstørrelseseffekten; reversert konklusjon (feil faktor vinner).
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 2.3: Rybczynski-teoremet: faktorvekst ved konstante priser

- **id:** `econ2610-2-3` · **number:** 2.3 · **estimatedMinutes:** 50 · **prerequisites:** `econ2610-2-1`
- **Kapitteltype:** teori (teorem-utledning)
- **description:** Økt tilgang på én faktor øker produksjonen av varen som bruker den intensivt og reduserer den andre — ved gitte priser. Sentral for innvandringsdrøftingen.
- **Eksamensbelegg:** Rybczynski forekom eksplisitt H2025 O2d (mer lavutdannet arbeidskraft → mer av den lavutdannings-intensive varen), del av **71 %**-kjernen. Sensor krever (verifiser) **riktig retning** ved **gitte priser**. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Rybczynski-teoremet** (*Rybczynski theorem*): ved **konstante varepriser** fører økt tilgang på én faktor til **økt** produksjon av varen som er intensiv i den faktoren og **redusert** produksjon av den andre (mer enn proporsjonalt). **Utledning med intuisjon (aktivt):** ved gitte priser er faktorprisene og faktorintensitetene låst; den ekstra faktoren må absorberes ved å utvide den intensive sektoren og trekke ressurser fra den andre. **Presiser eksplisitt** konstant-pris-forutsetningen — resultatet modifiseres når prisene endres (bro til drøftingshalen). Figur-i-ord: PPF utvides skjevt (utover langs den ene aksen). Symbol- og formelliste: PPF, faktorutrustning, konstante priser, Rybczynski.
- **Oppgavesjangre:** D. Mønstereksempel: «Et land får økt tilgang på lavutdannet arbeidskraft (f.eks. via innvandring). Bruk Rybczynski-teoremet til å forklare hva som skjer med produksjonssammensetningen ved gitte priser.»
- **Aktuell case (drøftingshale):** «Øker innvandring lønna eller senker den?» (H2025 O2e) — koble Rybczynski (mengdeeffekt ved gitte priser) mot Stolper-Samuelson (prisdrevet fordeling).
- **Typiske feil:** Feil vare øker (reversert retning); glemme konstant-pris-forutsetningen; symmetrisk i stedet for skjev vekst; blande Rybczynski (faktorvekst) med Stolper-Samuelson (prisendring).
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 2.4: Faktorprisutjevning og handelsmønsteret

- **id:** `econ2610-2-4` · **number:** 2.4 · **estimatedMinutes:** 45 · **prerequisites:** `econ2610-2-2`
- **Kapitteltype:** teori
- **description:** Hvorfor frihandel utjevner faktorprisene mellom land, forutsetningene bak, og hvordan det binder HO-teoremene sammen.
- **Eksamensbelegg:** Faktorprisutjevning er det tredje HO-teoremet (del av **71 %**-kjernen), ofte som forklaringsdeloppgave. Sensor forventer (verifiser) riktig **retning** (handel utjevner) og de **forutsetningene** som skal til. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Faktorprisutjevningsteoremet** (*factor price equalization*): under frihandel utjevnes de reelle faktorprisene (lønn og kapitalavkastning) mellom landene — handel i varer er et **substitutt** for handel i faktorer. **Mekanisme:** når det arbeidsrikelige landet eksporterer den arbeidsintensive varen, stiger etterspørselen etter arbeid der og faller i det andre landet → lønningene konvergerer. **Forutsetninger (skal med):** lik teknologi, ingen full spesialisering, ingen handelsbarrierer, samme varepriser. Koble til Stolper-Samuelson (prisendringen driver faktorprisene) og HO-teoremet (mønsteret). Symbol- og formelliste: $w$, $r$, $w/r$, faktorprisutjevning.
- **Oppgavesjangre:** D. Mønstereksempel: «Forklar hvorfor frihandel har en tendens til å utjevne faktorprisene mellom land. Hvilke forutsetninger må være oppfylt, og hvordan henger dette sammen med Stolper-Samuelson-teoremet?»
- **Aktuell case (drøftingshale):** «Presser handel med lavkostland ned lønningene i høykostland?» — utjevningstendens vs. de mange forutsetningene som sjelden holder.
- **Typiske feil:** Påstå fullstendig utjevning uten forbeholdene; glemme forutsetningene; feil retning; ikke koble til Stolper-Samuelson.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 2.5: Drill: HO-teoremene med riktig retning

- **id:** `econ2610-2-5` · **number:** 2.5 · **estimatedMinutes:** 90 · **prerequisites:** `econ2610-2-2`, `econ2610-2-3`, `econ2610-2-4`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på bokas tyngste tema: velg riktig teorem, få retningen riktig, navngi det, og anvend på en innvandrings-/fordelingscase.
- **Eksamensbelegg:** Dekker sjanger D (**71 %**, den tyngste delen — bærer 50–80 % av poengene i mange sett). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) **hvilket sjokk?** — prisendring (→ Stolper-Samuelson), faktorvekst (→ Rybczynski), handelsåpning (→ HO-mønster + faktorprisutjevning); 2) **hvilken faktor/vare er intensiv/rikelig?**; 3) anvend teoremet med **riktig retning** og **navngi** det; 4) for Stolper-Samuelson: nevn forstørrelseseffekten og konkludér realt; 5) for Rybczynski: presiser konstante priser; 6) drøftingshale. Gjennomarbeidet eksamenscase med margnotater (hva som gir uttelling: teoremnavn, riktig retning, real vs. nominell). **8–15 oppgaver** som roterer de tre teoremene med nyskrevne case (høy-/lavutdannet arbeidskraft, kapital, jord), inkludert oppgaver der studenten selv må velge teorem. Legg vekt på **innvandringscasen** (Rybczynski + Stolper-Samuelson sammen).
- **Oppgavesjangre:** D (+ H-hale). Mønstereksempel: «(a) En handelsavtale hever prisen på eksportvaren — hvem vinner realt på lang sikt? Navngi teoremet. (b) Landet opplever i tillegg stor innvandring av lavutdannet arbeidskraft — hva skjer med produksjonssammensetningen ved gitte priser? (c) Drøft utsagnet ‘innvandring senker alltid lønningene’.»
- **Aktuell case (drøftingshale):** Innvandring (Rybczynski/Stolper-Samuelson), globalisering og lønnspress, faktorprisutjevning i praksis.
- **Typiske feil:** Reversert teoremkonklusjon (#4 i analysen); bruke Stolper-Samuelson på et korttidsspørsmål; glemme å navngi teoremet; konkludere nominelt; glemme konstant-pris-forutsetningen i Rybczynski; besvare drøftingshalen uten teoremene.
- **Quiz: 15 · Flashcards: 12**

**Prøve-kvote Del 2:** 4 prøver (2.A byggeklosser + HO-teoremet: faktorintensitet/utrustning, handelsmønster, sjanger A/D; 2.B Stolper-Samuelson med forstørrelseseffekt, real vinner/taper, teorem navngitt, sjanger D; 2.C Rybczynski ved konstante priser + faktorprisutjevning, sjanger D; 2.D full HO-teorem-oppgave der studenten velger teorem, med innvandringshale, sjanger D+H).

---

### Del 3 — Spesifikke faktorer og badekardiagrammet *(prioritet: PERFEKT)*

#### Kapittel 3.1: Spesifikke faktorer og badekardiagrammet: konstruksjon og likevekt

- **id:** `econ2610-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ2610-1-1`
- **Kapitteltype:** teori
- **description:** Fagets mest karakteristiske figur: to $w = p_s\text{MPL}_s$-kurver mot hverandre, bredden = total arbeidsstyrke, og likevekten i krysningen med felles lønn og arbeidsfordeling.
- **Eksamensbelegg:** Spesifikke faktorer / faktorallokering forekommer i **57 % (4/7)** av settene (H2020 O1, H2021 O3, H2024 Q2, H2025 O2) — den mest fagtypiske figuren. «Use a figure to illustrate the optimal allocation of labor …». Sensor krever (verifiser) korrekt konstruert badekardiagram med felles arbeidsstyrke-akse. Prioritet: **perfekt**.
- **Innholdskontrakt — BADEKARDIAGRAM-MALEN (gjenbrukes i hele Del 3):** På **kort sikt** er kapital (eller jord) **spesifikk/immobil** for hver sektor, mens arbeid er **mobilt**. Konstruksjon: (1) horisontal akse = **total arbeidsstyrke** $N = N_1 + N_2$ (bredden på «badekaret»); (2) sektor 1 måles fra venstre, sektor 2 fra høyre; (3) tegn $w = p_1 \text{MPL}_1$ fallende fra venstre og $w = p_2 \text{MPL}_2$ fallende fra høyre (begge avtar pga. avtagende marginalprodukt); (4) **likevekt i krysningen**: felles lønn $w^*$ (vertikal akse) og arbeidsfordeling ($N_1^*$ fra venstre, resten til sektor 2); (5) arealene over hver kurve = avlønning til de spesifikke faktorene. Effektivitet: verdi-grenseproduktivitetene er like i krysningen. Figur-i-ord: bredde $N$, to fallende verdi-MPL-kurver, krysning $w^*$, arbeidsdeling. Symbol- og formelliste: $N = N_1 + N_2$, $\text{MPL}_s$, $w = p_s\text{MPL}_s$, $F'(N)$.
- **Oppgavesjangre:** C. Mønstereksempel: «To sektorer bruker en felles arbeidsstyrke, mens hver har sin egen spesifikke kapital. Tegn og forklar badekardiagrammet, og vis hvordan likevektslønnen og arbeidsfordelingen bestemmes.»
- **Aktuell case (drøftingshale):** «Hvordan fordeler en økonomi arbeidskraft mellom en eksponert og en skjermet sektor på kort sikt?»
- **Typiske feil:** Tegne badekaret uten felles arbeidsstyrke-akse; glemme at begge kurver faller (avtagende MPL); ikke tolke arealene som spesifikk-faktor-avlønning; forveksle lønn (krysningen) med marginalprodukt.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 3.2: Komparativ statikk i badekaret: subsidie, prisøkning og $dw/dN$

- **id:** `econ2610-3-2` · **number:** 3.2 · **estimatedMinutes:** 60 · **prerequisites:** `econ2610-3-1`
- **Kapitteltype:** teori (med aktiv derivasjon)
- **description:** Hvordan et sjokk flytter kurvene: subsidie/prisøkning i én sektor, økt arbeidsstyrke som breder ut badekaret, og den matematiske deloppgaven $dw/dN = q_1 F''(N_1)\cdot dN_1/dN$.
- **Eksamensbelegg:** Komparativ statikk i badekaret forekom H2024 Q2b (subsidie) og H2025 O2b–c (økt arbeidsstyrke + matematikk). Sensor krever (verifiser) både grafisk skift **og** fortegnet på $dw/dN$ regnet ferdig. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Subsidie/prisøkning i sektor 1:** $w = p_1\text{MPL}_1$-kurven skifter **opp** → arbeid flyttes til sektor 1, $w^*$ stiger; allokeringen blir **ineffektiv** (verdi-MPL ikke lenger lik på tvers, dersom subsidien skaper en kile) (H2024 Q2b). **Økt arbeidsstyrke ($N\uparrow$):** badekaret **bres ut** → begge kurver møtes lavere → **lavere** $w^*$ (H2025 O2b). **Matematisk deloppgave (aktiv derivasjon):** fra førsteordensbetingelsen $q_1 F'(N_1) = w$, deriver mht. $N$: $dw/dN = q_1 F''(N_1)\cdot (dN_1/dN)$; fortegnet er **negativt** siden $F'' < 0$ — flere arbeidere presser lønna ned. Figur-i-ord for hvert skift. Symbol- og formelliste: $q_1 F'(N_1) = w$, $F''(N_1) < 0$, $dw/dN$, $dN_1/dN$.
- **Oppgavesjangre:** C (+ regnedeloppgave). Mønstereksempel: «(a) Myndighetene subsidierer sektor 1 — vis grafisk hva som skjer med lønn og arbeidsfordeling, og forklar hvorfor allokeringen blir ineffektiv. (b) Arbeidsstyrken øker — vis effekten på lønna grafisk. (c) Utled $dw/dN$ og forklar fortegnet.»
- **Aktuell case (drøftingshale):** «Norge trenger flere barn / mer innvandring for velferdsstaten» — bruk $N\uparrow$-effekten og $dw/dN < 0$ til å nyansere lønnsvirkningen (H2020/H2025).
- **Typiske feil:** Feil skiftretning; glemme at $N\uparrow$ senker lønna; stoppe ved formelen $dw/dN$ uten å regne fortegnet; glemme fortegnet på $F''$; blande grafisk skift og matematisk fortegn.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 3.3: Kort sikt vs. lang sikt: badekar mot Stolper-Samuelson

- **id:** `econ2610-3-3` · **number:** 3.3 · **estimatedMinutes:** 50 · **prerequisites:** `econ2610-3-1`, `econ2610-2-2`
- **Kapitteltype:** teori (metodeskille)
- **description:** Samme prisendring, to horisonter: tvetydige fordelingsvirkninger på kort sikt (spesifikke faktorer) mot entydig Stolper-Samuelson på lang sikt — og hvorfor svaret skiller seg.
- **Eksamensbelegg:** Kort/lang-sikt-skillet ble eksplisitt testet H2021 O3c («hvorfor skiller svaret seg?»). Dette er den ene aksen sensor tester direkte. Sensor krever (verifiser) at studenten **skiller horisontene eksplisitt** og bruker riktig modell på hver. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Kort sikt** (kapital spesifikk): en prisøkning i sektor 1 hever $w^*$ (men mindre enn prisen), den **spesifikke faktoren i sektor 1 vinner**, den i sektor 2 **taper**, og den **mobile arbeidskraftens reallønn er tvetydig** (stiger målt i vare 2, faller målt i vare 1). **Lang sikt** (alle faktorer mobile): **Stolper-Samuelson** gir **entydig** real vinner/taper etter faktortype (m/forstørrelse). **Hvorfor skiller de seg:** på kort sikt låser den spesifikke faktoren fordelingen til sektor; på lang sikt kan faktorer flytte fritt, så det er faktortypen — ikke sektoren — som avgjør. Figur-i-ord: badekaret (kort sikt) ved siden av $w/r$-logikken (lang sikt). Symbol- og formelliste: $w^*$, reallønn, Stolper-Samuelson, spesifikk vs. mobil faktor.
- **Oppgavesjangre:** C + D. Mønstereksempel: «Prisen på eksportvaren stiger. (a) Analyser fordelingsvirkningen på kort sikt med badekardiagrammet. (b) Analyser lang sikt med Stolper-Samuelson. (c) Forklar hvorfor konklusjonene blir ulike.»
- **Aktuell case (drøftingshale):** «Er en handelsavtale bra eller dårlig for arbeiderne?» — svaret avhenger av horisont; kort sikt tvetydig, lang sikt følger faktortype.
- **Typiske feil:** Bruke Stolper-Samuelson (lang sikt) på et korttidsspørsmål (#3 i analysen); konkludere skråsikkert om den mobile faktorens reallønn på kort sikt (den er tvetydig); ikke sammenligne horisontene eksplisitt.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 3.4: Drill: badekardiagrammet og kort/lang sikt

- **id:** `econ2610-3-4` · **number:** 3.4 · **estimatedMinutes:** 90 · **prerequisites:** `econ2610-3-2`, `econ2610-3-3`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på fagets signaturfigur: konstruer badekaret, gjør komparativ statikk grafisk og med $dw/dN$, og analyser samme sjokk på begge horisonter.
- **Eksamensbelegg:** Dekker sjanger C (**57 %**) inkl. den matematiske deloppgaven og kort/lang-sikt-skillet. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) tegn badekaret (bredde $N$, to fallende verdi-MPL-kurver, krysning $w^*$); 2) identifiser sjokket (subsidie/prisøkning → kurveskift; $N\uparrow$ → utbredning); 3) les av ny lønn og arbeidsfordeling grafisk; 4) hvis matematikk kreves: utled $dw/dN$ og regn fortegnet; 5) kort sikt (badekar, tvetydig) vs. lang sikt (Stolper-Samuelson, entydig) hvis begge etterspørres; 6) drøftingshale. Gjennomarbeidet case med margnotater. **8–15 oppgaver** som roterer subsidie, prisøkning, innvandring/$N\uparrow$, med nyskrevne sektorer og tall — noen rent grafiske, noen med $dw/dN$-regning, noen med kort/lang-sikt-sammenligning.
- **Oppgavesjangre:** C (+ D-, H-kobling). Mønstereksempel (full kjede): «(a) Konstruer badekardiagrammet for to sektorer. (b) En prisøkning i sektor 1 — vis effekten grafisk. (c) Arbeidsstyrken øker med innvandring — utled $dw/dN$ og forklar. (d) Sammenlign kort og lang sikt. (e) Drøft ‘innvandring senker lønna’.»
- **Aktuell case (drøftingshale):** Innvandring/$N\uparrow$, sektorsubsidie (grønn omstilling), «flere barn for velferdsstaten».
- **Typiske feil:** Hele repertoaret for badekaret: manglende felles akse, feil skiftretning, stoppe ved $dw/dN$-formelen, blande kort/lang sikt, drøftingshale uten modell.
- **Quiz: 15 · Flashcards: 10**

**Prøve-kvote Del 3:** 4 prøver (3.A badekaret konstruert og forklart med likevektslønn, sjanger C; 3.B komparativ statikk grafisk + $dw/dN$ regnet ferdig, sjanger C; 3.C kort vs. lang sikt for samme prisendring, sjanger C+D; 3.D full badekaroppgave med innvandringshale, sjanger C+H).

---

### Del 4 — Monopolistisk konkurranse og stordriftsfordeler *(prioritet: PERFEKT)*

#### Kapittel 4.1: Monopolistisk konkurranse: PP–CC-modellen og likevekten

- **id:** `econ2610-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ2610-1-1`
- **Kapitteltype:** teori (regnbar)
- **description:** Fagets faste regnediagram: fallende PP-kurve mot stigende CC-kurve, likevekten $P = AC$ og formelen $n = \sqrt{bS/F}$.
- **Eksamensbelegg:** Monopolistisk konkurranse / PP–CC forekommer i **43 % (3/7)** (H2019 O3, H2022 O2, H2023 O1) — fast regneoppgave. Sensor krever (verifiser) at studenten regner ut $n$, $P$ og mark-up ferdig og illustrerer grafisk. **NB: parametriseringen varierer mellom settene** — les funksjonsformen nøye. Prioritet: **perfekt**.
- **Innholdskontrakt:** **PP-kurven** (pris faller med antall bedrifter): $P = c + b/n$ (hardere konkurranse med flere bedrifter). **CC-kurven** (gjennomsnittskostnad stiger med $n$): $AC = c + nF/S$ (flere bedrifter deler markedet $S$, hver produserer mindre, høyere stykkostnad pga. faste kostnader $F$). **Likevekt** der $P = AC$ (nullprofitt, fri etablering): $c + b/n = c + nF/S \Rightarrow n = \sqrt{bS/F}$, deretter $P = c + b/n$. **Parametriseringene fra arkivet (dekk begge, aldri gjenbruk tall):** (i) H2019-form: $P = C + 970/N$, $AC = C + N\cdot F/S$, $F = 800$ mill., verdensmarked $S = S_{US} + S_{Kina}$; (ii) H2023-form: $AC = c + nF/1000$, $P = c + 1/n$, $c = 1/20$, $F: 16 \to 25$. Figur-i-ord: $n$ horisontalt, pris/kostnad vertikalt, fallende PP, stigende CC, likevekt $P = AC$. Symbol- og formelliste: $n$, $P = c + b/n$, $AC = c + nF/S$, $c$, $F$, $S$, $n = \sqrt{bS/F}$.
- **Oppgavesjangre:** E. Mønstereksempel: «I en næring med monopolistisk konkurranse er priskurven $P = c + b/n$ og kostnadskurven $AC = c + nF/S$. Regn ut likevektsantall bedrifter og pris for de oppgitte tallene, og illustrer grafisk.»
- **Aktuell case (drøftingshale):** «Er markedsmakten på vei opp fordi R&D-kostnadene (dvs. $F$) stiger?» (H2022) — bygg intuisjonen for kap. 4.2.
- **Typiske feil:** Feil parametrisering (bland H2019- og H2023-formene); snu helningen på PP eller CC; stoppe ved formelen uten å sette inn tall; regne autarki per land når oppgaven ber om verdensmarked (eller motsatt).
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 4.2: Mark-up, faste kostnader og handelsgevinsten

- **id:** `econ2610-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `econ2610-4-1`
- **Kapitteltype:** teori (regnbar)
- **description:** Hvordan $F$ og markedsstørrelsen $S$ (handel) styrer antall bedrifter, pris og mark-up $\mu = P/c$ — og hvorfor større marked gir lavere pris og flere varianter.
- **Eksamensbelegg:** Mark-up- og handelsvirkningen forekom H2023 (relativ prisendring + mark-up før/etter) og H2022 (R&D som $F\uparrow$). Sensor krever (verifiser) at studenten regner mark-up $\mu = P/c$ og tolker retningen på $F\uparrow$ og $S\uparrow$. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Mark-up** (påslag / *mark-up*): $\mu = P/c$. **Fast konklusjon:** **høyere $F$ ⇒ færre bedrifter, høyere pris og høyere mark-up**; **større marked/handel ($S\uparrow$) ⇒ flere bedrifter, lavere pris, lavere mark-up**. **Handelsgevinst** i monopolistisk konkurranse = **lavere pris *og* større vareutvalg** (frihandel = summen av markedene = større $S$; men **færre bedrifter enn autarkisummen**). Regneøvelser: gitt $F: 16 \to 25$, regn ny $n$, $P$, relativ prisendring og mark-up før/etter (H2023-form). Figur-i-ord: CC-kurven roterer ved endret $S$ eller $F$. Symbol- og formelliste: $\mu = P/c$, $F$, $S$, $n = \sqrt{bS/F}$.
- **Oppgavesjangre:** E. Mønstereksempel: «De faste kostnadene $F$ øker fra 16 til 25. Regn ut hva som skjer med antall bedrifter, pris og mark-up. Forklar hva et større hjemmemarked (eller frihandel) ville gjort i stedet.»
- **Aktuell case (drøftingshale):** «Skyldes økende market power at innovasjons-/R&D-kostnadene stiger?» (H2022, H2023) — koble $F\uparrow$ til høyere mark-up.
- **Typiske feil:** Feil retning på $F$ eller $S$; tro at frihandel gir flere bedrifter totalt (det gir færre enn summen); glemme variantgevinsten; regne mark-up feil ($P/c$, ikke $P-c$); stoppe ved formel uten tall.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 4.3: Drill: PP–CC-regning

- **id:** `econ2610-4-3` · **number:** 4.3 · **estimatedMinutes:** 85 · **prerequisites:** `econ2610-4-2`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på industri-regneoppgaven: fra oppgitt funksjonsform til $n$, $P$, mark-up og handelsvirkning — med to ulike parametriseringer.
- **Eksamensbelegg:** Dekker sjanger E (**43 %**). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) **les funksjonsformen nøye** (er det $b/n$ eller $1/n$? $nF/S$ eller $nF/1000$?); 2) sett PP = CC, løs for $n$; 3) sett $n$ inn i PP for $P$; 4) regn mark-up $\mu = P/c$; 5) for handel: bruk verdensmarked $S = S_1 + S_2$, regn nytt $n$, $P$, prisendring; 6) illustrer grafisk; 7) drøftingshale. Gjennomregnet eksamenscase med margnotater (sikre poeng: riktig innsetting, ferdig tallsvar, mark-up-tolkning). **8–12 oppgaver** som roterer H2019- og H2023-formene med nyskrevne tall, autarki vs. verdensmarked, $F\uparrow$ og $S\uparrow$.
- **Oppgavesjangre:** E. Mønstereksempel (full kjede): «(a) Regn ut likevekten ($n$, $P$, mark-up) for det oppgitte hjemmemarkedet. (b) Landene åpner for handel så markedet dobles — regn ny likevekt og forklar hvorfor prisen faller men antall bedrifter er lavere enn summen. (c) Drøft en påstand om økende market power.»
- **Aktuell case (drøftingshale):** Market power / R&D-kostnader, globalt vs. nasjonalt marked, konsentrasjon i digitale næringer.
- **Typiske feil:** Feil parametrisering; snudde kurvehelninger; ufullført tallsvar; feil mark-up-formel; glemme «færre bedrifter enn autarkisummen»-poenget.
- **Quiz: 15 · Flashcards: 12**

**Prøve-kvote Del 4:** 4 prøver (4.A PP–CC-likevekt regnet ferdig ($n$, $P$) med figur, sjanger E; 4.B mark-up og $F\uparrow$-virkning, sjanger E; 4.C handelsgevinsten (større $S$, lavere pris, færre bedrifter enn sum), sjanger E; 4.D full PP–CC-oppgave med to parametriseringer og market-power-hale, sjanger E+H).

---

### Del 5 — Spillteori og oligopol *(prioritet: PERFEKT — nytt kjernestoff siden 2023)*

#### Kapittel 5.1: Normalform-spill: dominans, IESDS og Nash (ren og blandet)

- **id:** `econ2610-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ2610-0-2`
- **Kapitteltype:** teori
- **description:** Spillteoriens grunnverktøy: normalform-matrisen, iterert eliminering av dominerte strategier, Nash-likevekt via gjensidig beste svar, og den blandede likevekten via indifferens-betingelsen.
- **Eksamensbelegg:** Normalform-spill forekom H2024 Q4 (IESDS + Nash) og H2025 O3a (dominans/Nash/blandet, stein-saks-papir) — del av spillteorikjernen (**43 %, 3 av 4 sett siden 2023**). Sensor krever (verifiser) at studenten viser **elimineringsrekkefølgen**, finner Nash via gjensidig beste svar, og begrunner den **blandede** likevekten med **indifferens-betingelsen** (ikke bare påstår «1/3»). Prioritet: **perfekt**. **Krysslenk til ECON2220** (`econ2220-7-1`) for NE-teorien — 2610 vektlegger anvendelsen.
- **Innholdskontrakt:** Normalform: spillere, strategier ($U/M/D \times L/C/R$), utbytte $(x, y)$. **Nash-likevekt** (*Nash equilibrium*): et strategipar der ingen angrer gitt den andres valg (gjensidig beste svar). **Beste-svar-metoden:** marker beste svar per rad/kolonne, Nash der markeringene møtes. **Iterert eliminering av strengt dominerte strategier (IESDS)** (*iterated elimination of strictly dominated strategies*): fjern dominerte strategier trinnvis, vis rekkefølgen; det som overlever er **rasjonaliserbart**. **Parameterspill (H2025 O3a):** finn $x$, $y$ slik at en strategi dominerer eller et par er Nash. **Blandet strategi** (*mixed strategy*): når ingen ren Nash finnes (stein-saks-papir), definer blandet strategi som sannsynlighetsfordeling og finn den symmetriske likevekten (1/3 hver) via **indifferens-betingelsen** — hver ren strategi må gi samme forventede utbytte. Symbol- og formelliste: strategier, utbytte $(x,y)$, beste svar, dominans, blandet strategi $\sigma$, indifferens-betingelse.
- **Oppgavesjangre:** F. Mønstereksempel: «(a) Sett opp normalform-matrisen fra teksten. (b) Bruk iterert eliminering og finn Nash-likevekten. (c) Et symmetrisk spill uten ren Nash — finn den blandede likevekten og begrunn sannsynlighetene med indifferens-betingelsen.»
- **Aktuell case (drøftingshale):** «Hvorfor ender to konkurrenter i en priskrig ingen av dem ønsker?» (fangens dilemma som dominans).
- **Typiske feil:** Påstå «1/3 hver» uten indifferens-argumentet; ikke vise elimineringsrekkefølgen; forveksle strengt og svakt dominert; hoppe over beste-svar-markeringen.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 5.2: Cournot-konkurranse: beste-svar og Nash

- **id:** `econ2610-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ2610-5-1`
- **Kapitteltype:** teori (regnbar)
- **description:** To bedrifter velger kvantum samtidig: sett opp profittfunksjonen, deriver til beste-svar-funksjoner, og løs simultant for Cournot-Nash-likevekten.
- **Eksamensbelegg:** Cournot forekom H2023 O2 og H2025 O3b — del av spillteorikjernen. Sensor krever (verifiser) at studenten **viser beste-svar-funksjonene** før symmetriløsningen og regner kvanta/pris ferdig. Prioritet: **perfekt**.
- **Innholdskontrakt:** Invers etterspørsel $p = a - b(q_1 + q_2)$, konstant grensekostnad $c$. Profitt $\pi_i = (a - b(q_1+q_2) - c)q_i$. **Aktiv derivasjon:** $\partial \pi_i/\partial q_i = 0$ → **beste-svar-funksjon** $q_i = \frac{a - c - b q_j}{2b}$; løs de to simultant → symmetrisk Cournot-Nash $q_1 = q_2$. **Kalibrering (til nivå, ikke gjenbruk):** H2023: $p = 16 - (q_1+q_2)$, $c = 4$ → $q_i = 4$, $p = 8$; H2025 O3b: $p = 100 - 2(q_1+q_2)$, $c = 10$. Vis beste-svar-funksjonene som kryssende linjer (figur-i-ord: $q_1$ og $q_2$ på aksene, to reaksjonslinjer, skjæring = Cournot-likevekt). Symbol- og formelliste: $p = a - b(q_1+q_2)$, $\pi_i$, beste-svar $q_i(q_j)$, Cournot-Nash.
- **Oppgavesjangre:** F. Mønstereksempel: «To bedrifter konkurrerer i mengde med invers etterspørsel $p = a - b(q_1+q_2)$ og grensekostnad $c$. Utled beste-svar-funksjonene og finn Cournot-Nash-likevekten. Regn ut kvanta og pris for de oppgitte tallene.»
- **Aktuell case (drøftingshale):** «Gir færre, større bedrifter (mer konsentrasjon) høyere priser?» — Cournot-pris stiger når antall bedrifter faller.
- **Typiske feil:** Hoppe rett til symmetriløsningen uten beste-svar-funksjonene (#7 i analysen); derivere feil; stoppe ved formel uten tall; feil fortegn i reaksjonsfunksjonen.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 5.3: Stackelberg: baklengs induksjon og delspill-perfekt likevekt

- **id:** `econ2610-5-3` · **number:** 5.3 · **estimatedMinutes:** 55 · **prerequisites:** `econ2610-5-2`
- **Kapitteltype:** teori (regnbar)
- **description:** Én bedrift velger først: sett følgerens beste-svar inn i lederens profitt, maksimer lederens valg, og forklar first-mover-fordelen og hvorfor likevekten er delspill-perfekt.
- **Eksamensbelegg:** Stackelberg forekom H2023 O2b. Sensor krever (verifiser) **baklengs induksjon**, at følgerens *strategi* er en funksjon fra observert kvantum til handling, at likevekten er **delspill-perfekt (SPNE)**, og at lederen får høyere profitt. Prioritet: **perfekt**.
- **Innholdskontrakt:** Sekvensielt spill: leder velger $q_1$ først, følger observerer og velger $q_2$. **Baklengs induksjon (aktiv):** 1) finn følgerens beste-svar $q_2(q_1)$ (fra kap. 5.2); 2) sett inn i lederens profitt $\pi_1 = (a - b(q_1 + q_2(q_1)) - c)q_1$; 3) maksimer mht. $q_1$ → lederen produserer **mer** enn i Cournot, følgeren mindre. **First-mover advantage:** lederen får høyere profitt fordi han binder seg troverdig. **Delspill-perfekt likevekt** (*subgame-perfect equilibrium*): NE i alle delspill; følgerens «trussel» om å holde Cournot-kvantum er **ikke troverdig** og overlever ikke baklengs induksjon. Figur-i-ord: spilltre (leder-node → følger-noder) + reaksjonslinjer der lederen velger punktet på følgerens beste-svar-kurve som maksimerer egen profitt. Symbol- og formelliste: $q_1$ (leder), $q_2(q_1)$ (følgers beste svar), SPNE, first-mover.
- **Oppgavesjangre:** F. Mønstereksempel: «En bedrift binder seg til et kvantum før konkurrenten velger. Løs spillet ved baklengs induksjon, finn den delspill-perfekte likevekten, og forklar hvorfor lederen tjener mer enn i Cournot.»
- **Aktuell case (drøftingshale):** «Lønner det seg å være først ute i et marked?» — first-mover-fordelen og dens forutsetninger (troverdig binding).
- **Typiske feil:** Blande Nash og delspill-perfekt Nash (#8 i analysen); ikke sette følgerens beste-svar inn i lederens profitt; overse at ikke-troverdige trusler ikke overlever baklengs induksjon; regne Stackelberg som symmetrisk Cournot.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 5.4: Drill: spillteori og oligopol

- **id:** `econ2610-5-4` · **number:** 5.4 · **estimatedMinutes:** 90 · **prerequisites:** `econ2610-5-1`, `econ2610-5-2`, `econ2610-5-3`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på det nye kjernestoffet: normalform (IESDS + ren/blandet Nash), Cournot (beste-svar → Nash), Stackelberg (baklengs induksjon → SPNE), med en market-power-hale.
- **Eksamensbelegg:** Dekker sjanger F (**43 %, 3 av 4 sett siden 2023**). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): for **normalform** — sett opp matrise, IESDS med rekkefølge, Nash via beste svar, blandet Nash via indifferens-betingelsen; for **Cournot** — profitt → beste-svar-funksjoner → simultan løsning → tall; for **Stackelberg** — følgers beste svar → inn i lederens profitt → maksimer → SPNE + first-mover. Gjennomarbeidet case med margnotater (sikre poeng: elimineringsrekkefølge, beste-svar-funksjoner vist, indifferens-argument, SPNE korrekt navngitt). **8–15 oppgaver** som roterer normalform (inkl. parameterspill og blandet strategi), Cournot og Stackelberg med nyskrevne tall/kontekst, noen der studenten selv velger metode.
- **Oppgavesjangre:** F. Mønstereksempel (blandet kjede): «(a) [matrise] Finn alle Nash-likevekter, også i blandede strategier. (b) To bedrifter i Cournot — utled beste-svar og finn likevekten. (c) La den ene bevege seg først — finn den delspill-perfekte likevekten. (d) Drøft om markedsmakten er ‘for høy’.»
- **Aktuell case (drøftingshale):** Market power, priskonkurranse vs. mengdekonkurranse, first-mover i digitale markeder.
- **Typiske feil:** «1/3»-påstand uten indifferens; symmetriløsning uten beste-svar; NE vs. SPNE blandet; ufullførte tallsvar; drøftingshale uten modell.
- **Quiz: 15 · Flashcards: 12**

**Prøve-kvote Del 5:** 4 prøver (5.A normalform: IESDS + Nash + blandet strategi med indifferens-betingelse, sjanger F; 5.B Cournot beste-svar → Nash regnet ferdig, sjanger F; 5.C Stackelberg baklengs induksjon → SPNE + first-mover, sjanger F; 5.D full spillteorioppgave der studenten velger metode, med market-power-hale, sjanger F+H).

---

### Del 6 — Handelspolitikk, markedssvikt og vekst *(prioritet: KUNNE/KJENNE)*

#### Kapittel 6.1: Toll og handelspolitikk i partiell likevekt

- **id:** `econ2610-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ2610-1-3`
- **Kapitteltype:** teori
- **description:** Toll, eksportskatt og terms of trade i partiell likevekt: import-etterspørsel/eksport-tilbud, arealene, og hvorfor et stort land kan tjene på terms of trade.
- **Eksamensbelegg:** Toll & handelspolitikk forekom **29 % (2/7)** (H2020 Trump-toll, H2021 toll + eksportskatt), men **tungt vektet der det finnes** (H2020 O1 var 40 %). Sensor krever (verifiser) at **terms of trade** (bytteforhold) nevnes for et **stort** land (H2021 O1c eksplisitt), og at produsentgevinsten behandles som **overføring**, ikke netto gevinst. Prioritet: **kunne** (nivå 2 — avgjør toppkarakter).
- **Innholdskontrakt:** Partiell likevekt for importvaren: innenlandsk tilbud/etterspørsel + verdenspris. **Toll** hever innenlandsprisen: konsumentoverskudd ned, produsentoverskudd opp (**overføring**), tollinntekt til staten, **netto effektivitetstap** (overproduksjon + underkonsum). **Stort land:** tollen senker verdensmarkedsprisen → **bytteforholdsgevinst** (*terms of trade*) — tollen kan lønne seg hvis gevinsten > effektivitetstapet. **Lite land:** pristaker, ingen terms-of-trade-gevinst, toll alltid tap. **Eksportskatt (H2021):** speilbilde — påvirker eksport-tilbud og bytteforhold. Import-etterspørsels- og eksport-tilbudskurver på verdensmarkedet. Forkunnskaper: KO/PO/SO og stykkskatt-arealene ([ECON1210](/bok/econ1210/econ1210-2-1), [stykkskatt](/bok/econ1210/econ1210-3-1) hvis publisert). Figur-i-ord: pris/mengde, tilbud/etterspørsel, verdensprislinje før/etter, arealer navngitt. Symbol- og formelliste: verdenspris, tollsats $t$, KO/PO, bytteforhold/terms of trade, effektivitetstap.
- **Oppgavesjangre:** Handelspolitikk (analysens sjanger nær B/G). Mønstereksempel: «Et stort land legger toll på en importvare. Vis og forklar effekten på overskuddene og på landets bytteforhold. Under hvilken betingelse kan tollen lønne seg? Hva blir annerledes for et lite land?»
- **Aktuell case (drøftingshale):** Trump-toll (H2020), «vil økt overføringskapasitet skade Nord?» via terms of trade (H2022 O1e).
- **Typiske feil:** Glemme terms of trade / behandle et stort land som pristaker (#5 i analysen); produsentgevinst som netto gevinst; glemme ett tapsareal; figur uten mekanisme.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 6.2: Eksternaliteter, fusjon og Pigou-skatt

- **id:** `econ2610-6-2` · **number:** 6.2 · **estimatedMinutes:** 45 · **prerequisites:** `econ2610-1-1`
- **Kapitteltype:** teori (regnbar) *(bør kjenne til)*
- **description:** Bør kjenne til: to bedrifter der den ene påfører den andre en kostnad — uavhengig vs. fusjonert profittmaksimering, og Pigou-skatten som gjenoppretter det sosiale optimum.
- **Eksamensbelegg:** Eksternalitet/Pigou forekom kun H2019 O4 (**14 %, 1/7**). Nivå 3, men nyttig bro til ECON1210. Sensor krever (verifiser) at det fusjonerte firmaet setter marginalinntekt = **sosial** marginalkostnad, og at Pigou-avgiften evalueres i det **sosialt optimale** kvantumet. Prioritet: **kjenne**. Markér hele kapitlet «bør kjenne til».
- **Innholdskontrakt:** To bedrifter: A påfører F en ekstern kostnad. **Uavhengig:** hver maksimerer egen profitt ($d\pi_i/dq_i = 0$) → A produserer **for mye** (ignorerer skaden). **Fusjonert:** internaliserer, maksimerer $\pi_A + \pi_F$ → setter marginalinntekt = **sosial** marginalkostnad → lavere, effektivt kvantum. **Pigou-skatt** (*Pigouvian tax*): sett avgiften lik den **marginale eksterne skaden i det sosialt optimale kvantumet** → det uavhengige firmaet velger fusjonsløsningen. Aktiv regning: derivér begge profittproblemene og finn skatten. Symbol- og formelliste: $\pi_A$, $\pi_F$, marginal ekstern kostnad, Pigou-skatt, sosialt optimum.
- **Oppgavesjangre:** G (eldre/sjelden). Mønstereksempel: «Bedrift A forurenser og påfører bedrift F en kostnad. Finn tilpasningen når de opptrer uavhengig og når de fusjonerer. Hvilken Pigou-skatt får det uavhengige firmaet til å velge det sosialt optimale kvantumet?»
- **Aktuell case (drøftingshale):** «Bør forurensning avgiftsbelegges eller løses ved sammenslåing/forhandling?» (Pigou vs. Coase, kort).
- **Typiske feil:** Internalisere feil (marginalinntekt = privat i stedet for sosial marginalkostnad — #9 i analysen); evaluere Pigou-avgiften i det private kvantumet; glemme at uavhengig tilpasning overproduserer.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 6.3: Vekstregnskap og Solow-produktfunksjonen *(bør kjenne til)*

- **id:** `econ2610-6-3` · **number:** 6.3 · **estimatedMinutes:** 45 · **prerequisites:** `econ2610-0-1`
- **Kapitteltype:** teori (regnbar) *(bør kjenne til)*
- **description:** Bør kjenne til (0 forekomster siden 2022): log-differensiering av produktfunksjonen, vekstregnskapet og Solow-residualen — forsikring mot foreleserbytte.
- **Eksamensbelegg:** Vekstregnskap/Solow forekom **29 % (2/7)** (H2020 O2–3, H2021 O4) men er **borte fra alle fire sett siden 2022** (regimeskifte). Beholdt kun som forsikring. Sensor krevde (verifiser) at studenten regner ut Solow-residualen med tall. Prioritet: **kjenne** — kompakt kapittel, markert «bør kjenne til».
- **Innholdskontrakt:** Produktfunksjon $Y = A\,K^{\alpha}(hL)^{1-\alpha}$, $\alpha = 1/2$. Intensiv form $y = A\,k^{\alpha}h^{1-\alpha}$. **Vekstregnskap (log-differensiering):** $g_y = g_A + \alpha g_k + (1-\alpha)g_h$. **Solow-residual:** $g_A = g_y - \alpha g_k - (1-\alpha)g_h$ (produktivitetsvekst som ikke forklares av faktorakkumulering). Poeng: **lavere humankapital-estimat ⇒ høyere beregnet $g_A$**. Vurder faktorakkumulering vs. produktivitet. Aktiv regning med tall. Symbol- og formelliste: $Y = A K^{\alpha}(hL)^{1-\alpha}$, $\alpha$, $g_x = \Delta x/x$, Solow-residual $g_A$.
- **Oppgavesjangre:** G (utdøende). Mønstereksempel: «Gitt produktfunksjonen $Y = A K^{1/2}(hL)^{1/2}$ og oppgitte vekstrater for BNP, kapital og humankapital, regn ut Solow-residualen. Hvordan endres den hvis humankapital-veksten var undervurdert?»
- **Aktuell case (drøftingshale):** «Skyldes veksten mer arbeid/kapital eller reell produktivitetsforbedring?» (kort).
- **Typiske feil:** Feil vekter ($\alpha$ vs. $1-\alpha$); glemme humankapital-leddet; stoppe ved formel uten tall; blande nivå og vekstrate.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 6.4: Endogen og R&D-drevet vekst *(bør kjenne til)*

- **id:** `econ2610-6-4` · **number:** 6.4 · **estimatedMinutes:** 40 · **prerequisites:** `econ2610-6-3`
- **Kapitteltype:** teori *(bør kjenne til)*
- **description:** Bør kjenne til: idémodellen der befolkning driver produktivitetsvekst — effekten av flere mennesker på nivå og vekst i BNP per capita, kort vs. lang sikt.
- **Eksamensbelegg:** Endogen/R&D-vekst forekom kun H2020 O3 (**14 %, 1/7**), borte siden. Nivå 3, kompakt forsikring. Prioritet: **kjenne**.
- **Innholdskontrakt:** Idémodell: $\hat A = L_A/\mu$ (produktivitetsvekst drevet av forskere), $Y = A\,L_Y$, $L = L_Y + L_A$. **Effekt av økt befolkning $L$:** flere forskere → høyere produktivitetsvekst (skalaeffekt), men flere munner å mette; skill **nivå** og **vekst** i BNP per capita, **kort vs. lang sikt**. Kvalitativ hovedvekt (regning lett). Symbol- og formelliste: $\hat A = L_A/\mu$, $Y = A L_Y$, $L = L_Y + L_A$, BNP per capita.
- **Oppgavesjangre:** G (sjelden). Mønstereksempel: «I en idémodell drives produktivitetsveksten av antall forskere. Hva skjer med nivå og vekst i BNP per capita når befolkningen øker? Skill kort og lang sikt.»
- **Aktuell case (drøftingshale):** «Trenger Norge flere barn for velferdsstaten?» (H2020 O3) — skalaeffekt på ideer vs. forsørgerbyrde.
- **Typiske feil:** Blande nivå- og veksteffekt; overse skalaeffekten på ideer; glemme kort/lang-sikt-skillet.
- **Quiz: 12 · Flashcards: 12**

**Prøve-kvote Del 6:** 4 prøver (6.A toll i stort vs. lite land med terms of trade og arealer, sjanger handelspolitikk; 6.B eksternalitet: uavhengig vs. fusjon + Pigou-skatt, sjanger G «kjenne»; 6.C vekstregnskap/Solow-residual regnet ferdig, sjanger G «bør kjenne»; 6.D endogen vekst + «flere barn»-drøfting, sjanger G+H «bør kjenne»).

---

### Del 7 — Eksamenstrening

#### Kapittel 7.1: Fra nyhetsbilde til modell: den aktualiserte drøftingshalen

- **id:** `econ2610-7-1` · **number:** 7.1 · **estimatedMinutes:** 45 · **prerequisites:** Del 1–5
- **Kapitteltype:** teori (syntese/metodetrening)
- **description:** Emnets skillekarakter-ferdighet: oversett et dagsaktuelt utsagn til riktig modellfamilie + horisont + retning, still opp prediksjonen, og skriv drøftingshalen som løfter besvarelsen til A.
- **Eksamensbelegg:** Den aktualiserte drøftingshalen (sjanger H) er **universell — 7/7 sett** og trolig det som skiller A fra C. Settene kler alltid modellen i en case (Trump-toll, korona/PPE, strømpris Sør/Nord, market power, innvandring, «flere barn»). Prioritet: **kunne** (syntese — der toppkarakterene skilles).
- **Innholdskontrakt:** **Oversettelsestabellen** (SKAL med): «tjener et lavkostland på handel?» → komparativt fortrinn (Del 1); «velferdsgevinst av handel» → standard modell separasjon (kap. 1.3); «hvem vinner/taper, kort vs. lang sikt» → badekar + Stolper-Samuelson (Del 2–3); «innvandring/faktorvekst» → Rybczynski + $dw/dN$ (kap. 2.3, 3.2); «market power / R&D» → PP–CC mark-up + Cournot (Del 4–5); «first-mover» → Stackelberg (kap. 5.3); «toll/tollkrig» → partiell likevekt + terms of trade (kap. 6.1); «strømpris Sør/Nord» → standard modell + terms of trade (kap. 1.3, 6.1). For **hvert** case: still de tre diagnosespørsmålene — (1) hvilken modellfamilie? (2) kort eller lang sikt? (3) hvilken retning? Deretter **drøftingshale-malen** fra kap. 0.2: prediksjon → nyansér (motstridende krefter, forutsetninger, hva modellen ikke fanger) → svar på utsagnet. 6–8 korte treningscase der studenten kun skal **diagnostisere**. Symbol- og formelliste: samler notasjonen fra Del 1–6.
- **Oppgavesjangre:** H + diagnose av A–G. Mønstereksempel (diagnose): «En avis melder at stor arbeidsinnvandring presser lønningene. Hvilken modell, kort eller lang sikt, hvilken retning?» Mønstereksempel (H): «Drøft utsagnet: ‘Innvandring senker alltid lønna for arbeiderne.’»
- **Aktuell case (drøftingshale):** Selve kapitlet er drøftingshale-treningen; bruk alle 7 settenes case som bank.
- **Typiske feil:** La innpakningen lede mot moralsk synsing i stedet for modellgrep; feil horisont eller retning; skråsikker konklusjon der teorien gir motstridende krefter; svare på noe annet enn utsagnet (#10 i analysen).
- **Quiz: 14 · Flashcards: 12**

#### Kapittel 7.2: Begrepsdrill: «words and diagrams» og den tospråklige begrepsbanken

- **id:** `econ2610-7-2` · **number:** 7.2 · **estimatedMinutes:** 60 · **prerequisites:** Del 1–6
- **Kapitteltype:** drill
- **description:** Presisjonstrening på hele begrepsrepertoaret på norsk OG engelsk — presis definisjon + kjernepoeng + figur/eksempel — bygd for begrepsforklaringsdeloppgavene.
- **Eksamensbelegg:** Begrepsforklaring (sjanger A) er sikre poeng i flere sett (H2019 O1, H2024 Q1). Fordi settene veksler språk (engelsk t.o.m. H2024, norsk H2025), må begrepene sitte **tospråklig**. Prioritet: **kunne** (sikre poeng). Dette kapitlet bærer den store tospråklige flashcard-banken.
- **Innholdskontrakt:** Malen «presis definisjon + kjernepoenget sensor ser etter + ett konkret eksempel/figur» demonstreres på norsk og engelsk; deretter en drillbank som dekker ALLE gjengangerbegrepene, hvert med tospråklig fasitsvar og henvisning til teorikapitlet: komparativt fortrinn (1.1), Ricardo vs. HO (1.1), interne/eksterne stordriftsfordeler (1.1), faktorintensitet/faktorutrustning (2.1), HO-teoremet (2.1), Stolper-Samuelson (2.2), Rybczynski (2.3), faktorprisutjevning (2.4), spesifikke faktorer/badekar (3.1), monopolistisk konkurranse/mark-up (4.1–4.2), Nash/dominans/blandet strategi (5.1), Cournot/Stackelberg/SPNE (5.2–5.3), bytteforhold/terms of trade (6.1), eksternalitet/Pigou (6.2). **Flashcards lages tospråklig** (norsk term ↔ engelsk term ↔ definisjon). Symbol- og formelliste: samler nøkkelnotasjonen tospråklig.
- **Oppgavesjangre:** A. Mønstereksempel: «Explain briefly, in words: comparative advantage, factor price equalization, mark-up.» / «Forklar kort: komparativt fortrinn, faktorprisutjevning, mark-up.»
- **Aktuell case (drøftingshale):** Ikke egen hale — begrepsforklaring er verbal og direkte.
- **Typiske feil:** Definisjon uten kjernepoeng/eksempel; forveksle nært beslektede begreper (faktorintensitet/faktorutrustning, Rybczynski/Stolper-Samuelson, Nash/SPNE); kunne begrepet på bare ett språk når settet er på det andre.
- **Quiz: 16 · Flashcards: 48**

#### Kapittel 7.3: Øvingseksamen 1: handelsteori-tyngdepunkt (H2024/H2025-mal)

- **id:** `econ2610-7-3` · **number:** 7.3 · **estimatedMinutes:** 180 · **prerequisites:** `econ2610-7-1`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett 3-timers sett med handelsteorikjernen i sentrum: begreper + standard modell + HO-teoremer + badekar, hver med aktualisert hale.
- **Eksamensbelegg/miks:** Speiler H2024 (20/20/40/20) / H2025-standarden. **Oppgave 1 (20 %):** begrepsforklaring — Ricardo vs. HO + interne/eksterne stordrift (sjanger A). **Oppgave 2 (20 %):** spesifikke faktorer / badekar med subsidie eller $N\uparrow$ + $dw/dN$ (sjanger C). **Oppgave 3 (40 %):** stor HO-oppgave — standard modell autarki→handel (sjanger B) + Rybczynski + velferd + innvandringshale (sjanger D+H). **Oppgave 4 (20 %):** normalform-spill (IESDS + Nash, sjanger F). Alle nyskrevne, dagsaktuell innramming. Løsningsforslag som A-besvarelse i `collapsible` per oppgave (figurbeskrivelser i ord + regning + drøftingshale), med `tip`-notat om delpoeng og tidsbudsjett (36/36/72/36 min).
- **Typiske feil:** (kort felt for portkravet) prioritere lette oppgaver før 40 %-oppgaven; hoppe over figur eller mekanisme; glemme drøftingshalen.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 7.4: Øvingseksamen 2: industri (H2023-mal)

- **id:** `econ2610-7-4` · **number:** 7.4 · **estimatedMinutes:** 180 · **prerequisites:** `econ2610-7-3`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett sett etter H2023-malen (60/40) med industriøkonomien i sentrum: monopolistisk konkurranse (regning) + spillteori.
- **Eksamensbelegg/miks:** Speiler H2023. **Oppgave 1 (60 %):** monopolistisk konkurranse — regn $n$, $P$, relativ prisendring og mark-up før/etter $F\uparrow$, illustrer PP–CC, med market-power-hale (sjanger E+H). **Oppgave 2 (40 %):** Cournot (beste-svar → Nash, regnet) + Stackelberg (baklengs induksjon → SPNE, first-mover) (sjanger F). Nyskrevne tall og kontekst. Løsningsforslag som A-besvarelse med vektings-`tip` og tidsbudsjett (108/72 min).
- **Typiske feil:** (kort felt) feil parametrisering i PP–CC; symmetriløsning uten beste-svar; NE vs. SPNE blandet.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 7.5: Øvingseksamen 3: bredt sett (fire oppgaver, blandet)

- **id:** `econ2610-7-5` · **number:** 7.5 · **estimatedMinutes:** 180 · **prerequisites:** `econ2610-7-4`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett fire-oppgavers sett som brer dekningen over alle fem modellfamiliene pluss et «bør kjenne»-innslag.
- **Eksamensbelegg/miks:** Speiler et H2019/H2021-lignende bredt sett (fire oppgaver, ca. 25 % hver). **Oppgave 1 (25 %):** standard handelsmodell autarki→handel med velferd (sjanger B). **Oppgave 2 (25 %):** HO-teoremer — Stolper-Samuelson + faktorprisutjevning med fordelingshale (sjanger D+H). **Oppgave 3 (25 %):** toll i stort vs. lite land med terms of trade (sjanger handelspolitikk), **eller** eksternalitet + Pigou (sjanger G). **Oppgave 4 (25 %):** PP–CC **eller** Cournot/Stackelberg (sjanger E/F). Til sammen dekker de tre øvingseksamenene sjangrene A–H minst én gang. Løsningsforslag som A-besvarelse med vektings-`tip` og tidsbudsjett (45 min × 4).
- **Typiske feil:** (kort felt) glemme terms of trade for stort land; internalisere feil i eksternalitetsoppgaven; drøftingshale uten modell.
- **Quiz: 5 · Flashcards: 0**

**Prøve-kvote Del 7:** ingen egne prøver (delen består av syntese + tospråklig begrepsdrill + 3 øvingseksamener).

---

### Kvotesammendrag (quiz/flashcards/prøver) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1–0.2 | 14+14 = **28** | 12+16 = **28** | 0 |
| 1 | 1.1–1.4 | 22+22+20+15 = **79** | 28+22+20+10 = **80** | 4 |
| 2 | 2.1–2.5 | 22+22+20+18+15 = **97** | 24+24+22+20+12 = **102** | 4 |
| 3 | 3.1–3.4 | 22+22+20+15 = **79** | 22+22+20+10 = **74** | 4 |
| 4 | 4.1–4.3 | 22+20+15 = **57** | 22+20+12 = **54** | 4 |
| 5 | 5.1–5.4 | 22+20+20+15 = **77** | 24+20+20+12 = **76** | 4 |
| 6 | 6.1–6.4 | 20+16+16+12 = **64** | 20+16+16+12 = **64** | 4 |
| 7 | 7.1–7.5 | 14+16+5+5+5 = **45** | 12+48+0+0+0 = **60** | 0 (3 øvingseksamener) |
| **Sum** | **31 kap.** | **526 ≥ 500 ✓** | **538 ≥ 500 ✓** | **24 + 3 ØE** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvens og natur: **Del 2 (HO-teoremene, 71 %) er tyngst med 97
quiz / 102 flashcards**; handelsteorikjernen (Del 1–3) står for 255 av 526 quiz. Fordi
faget er **tospråklig** (engelsk t.o.m. H2024, norsk fra H2025) er flashcard-tettheten
løftet noe over gulvet — begrepene skal sitte på begge språk, og begrepsbanken i
kap. 7.2 (48 flashcards) er derfor den største enkeltposten. Regnedelene (PP–CC,
spillteori) har relativt flere quiz enn flashcards fordi de er prosedyre- og
utregningstunge.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–6, 24 totalt)

Hver prøve består av nyskrevne oppgaver i eksamens sjangre, med løsningsforslag
(A-besvarelse med figurbeskrivelser i ord + regning) og poengfordeling. Omfang i
minutter. Prøvekapitler bygges som `econ2610-<del>-prove`, chapterNumber `<del>.P`.

**Del 1 — Komparative fortrinn og standard handelsmodell**
1. Prøve 1.A (25 min): Ricardo vs. HO + interne/eksterne stordrift (sjanger A).
2. Prøve 1.B (30 min): Autarkifiguren med $\text{MRT}=p_1/p_2$ (sjanger B-del).
3. Prøve 1.C (30 min): Handelsovergangen med separasjon og velferdsgevinst (sjanger B-del).
4. Prøve 1.D (40 min): Full autarki→handel-oppgave med drøftingshale (sjanger B+H).

**Del 2 — Heckscher-Ohlin-modellen og teoremene**
1. Prøve 2.A (25 min): Byggeklosser + HO-teoremet — faktorintensitet/utrustning, mønster (sjanger A/D).
2. Prøve 2.B (35 min): Stolper-Samuelson med forstørrelseseffekt, real vinner/taper (sjanger D).
3. Prøve 2.C (30 min): Rybczynski ved konstante priser + faktorprisutjevning (sjanger D).
4. Prøve 2.D (45 min): Full HO-teorem-oppgave, studenten velger teorem, innvandringshale (sjanger D+H).

**Del 3 — Spesifikke faktorer og badekardiagrammet**
1. Prøve 3.A (30 min): Badekaret konstruert og forklart med likevektslønn (sjanger C).
2. Prøve 3.B (35 min): Komparativ statikk grafisk + $dw/dN$ regnet ferdig (sjanger C).
3. Prøve 3.C (30 min): Kort vs. lang sikt for samme prisendring (sjanger C+D).
4. Prøve 3.D (45 min): Full badekaroppgave med innvandringshale (sjanger C+H).

**Del 4 — Monopolistisk konkurranse og stordriftsfordeler**
1. Prøve 4.A (30 min): PP–CC-likevekt regnet ferdig ($n$, $P$) med figur (sjanger E).
2. Prøve 4.B (30 min): Mark-up og $F\uparrow$-virkning (sjanger E).
3. Prøve 4.C (30 min): Handelsgevinsten — større $S$, lavere pris, færre bedrifter enn sum (sjanger E).
4. Prøve 4.D (45 min): Full PP–CC-oppgave med to parametriseringer + market-power-hale (sjanger E+H).

**Del 5 — Spillteori og oligopol**
1. Prøve 5.A (30 min): Normalform — IESDS + Nash + blandet strategi med indifferens-betingelse (sjanger F).
2. Prøve 5.B (30 min): Cournot beste-svar → Nash regnet ferdig (sjanger F).
3. Prøve 5.C (35 min): Stackelberg baklengs induksjon → SPNE + first-mover (sjanger F).
4. Prøve 5.D (45 min): Full spillteorioppgave, studenten velger metode, market-power-hale (sjanger F+H).

**Del 6 — Handelspolitikk, markedssvikt og vekst**
1. Prøve 6.A (35 min): Toll i stort vs. lite land med terms of trade og arealer (sjanger handelspolitikk).
2. Prøve 6.B (30 min): Eksternalitet — uavhengig vs. fusjon + Pigou-skatt (sjanger G «kjenne»).
3. Prøve 6.C (25 min): Vekstregnskap/Solow-residual regnet ferdig (sjanger G «bør kjenne»).
4. Prøve 6.D (30 min): Endogen vekst + «flere barn»-drøfting (sjanger G+H «bør kjenne»).

### Øvingseksamener (3 komplette sett — se kap. 7.3–7.5)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (kap. 7.3) | H2024/H2025 (20/20/40/20) | Begreper 20 % + badekar/spesifikke faktorer 20 % + stor HO/standard-modell-oppgave 40 % (autarki→handel + Rybczynski + innvandringshale) + normalform-spill 20 % |
| Øvingseksamen 2 (kap. 7.4) | H2023 (60/40) | Monopolistisk konkurranse (PP–CC-regning + mark-up + market power) 60 % + Cournot/Stackelberg 40 % |
| Øvingseksamen 3 (kap. 7.5) | Bredt (25×4, H2019/H2021) | Standard modell 25 % + HO-teoremer 25 % + toll stort/lite land eller eksternalitet 25 % + PP–CC eller spillteori 25 % |

Til sammen dekker de tre settene sjangrene A–H minst én gang; prøvene 1.A–6.D dekker
de samme sjangrene i mindre format med tettere tilbakemelding.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (3 timer, Inspera, A–F, ordbok), **tospråkligheten**
   (engelsk t.o.m. H2024, norsk fra H2025), vektingshistorikken og prognosen for H2026
   (fra kap. 0.1).
2. **Prioriteringskartet** — temafrekvens-tabellen omgjort til tre lesenivåer: perfekt
   (Del 1–5: standard modell, HO-teoremene, badekar, PP–CC, spillteori), kunne (toll +
   terms of trade, den aktualiserte drøftingshalen, begrepsrepertoaret), kjenne (Del 6
   eksternalitet/Pigou, vekstregnskap/Solow, endogen vekst — «bør kjenne til»).
3. **Regimeskiftet forklart** — hvorfor vekstregnskap er nedprioritert (0 siden 2022)
   og spillteori oppgradert til kjernestoff (3 av 4 sett siden 2023).
4. **Sjangerguiden** — oppgavetypene A–H med løsningsoppskriftene fra drillkapitlene
   (1.4, 2.5, 3.4, 4.3, 5.4) i kortform: standard-modell-figuren, HO-teoremdiagnosen,
   badekar-malen, PP–CC-algoritmen, spillteori-oppskriften, begrepsmalen,
   drøftingshale-malen.
5. **De to metodeaksene** — kort vs. lang sikt (badekar ↔ Stolper-Samuelson) og riktig
   teoremretning — som eget oppslag (fra kap. 3.3 og 2.5).
6. **«Words and diagrams»-håndverket** — firetrinnssvaret og drøftingshale-malen fra
   kap. 0.2, med sjekkliste (navngi modell → figur i ord → mekanisme → tallsvar → hale).
7. **Sensorreglene (verifiser)** — metareglene fra §4 i analysen: tekst OG figur; regn
   ferdig med tall; skill kort/lang sikt; riktig teoremretning; terms of trade for stort
   land; beste-svar før symmetriløsning; anvend modellen på casen.
8. **Feilkatalogen** — de 10 typiske feilene samlet (figur uten forklaring; stoppe ved
   formel; Stolper-Samuelson på korttidsspørsmål; reversert teoremretning; glemme terms
   of trade; feil PP–CC-parametrisering; symmetriløsning uten beste-svar; NE vs. SPNE
   blandet; internalisere feil i eksternalitet; svare på feil spørsmål i drøftingshalen),
   hver med henvisning til kapitlet som forebygger den.
9. **Figurbiblioteket** — de fem standardfigurene i ord (standard modell PPF/isoverdi/
   indifferens; badekardiagrammet; PP–CC; Cournot-reaksjonslinjer; Stackelberg-spilltre)
   med merkekravene per figur.
10. **Tospråklig notasjons- og begrepsark** — én side med nøkkelnotasjonen (relativpris
    $p_X/p_Y$, verdenspris $q$, $\text{MRT}=p_1/p_2$, badekar $N=N_1+N_2$ og
    $dw/dN$, PP–CC $n=\sqrt{bS/F}$, Cournot beste-svar, mark-up $\mu=P/c$, Solow-residual)
    og begrepsbanken på norsk ↔ engelsk (fra kap. 7.2).
11. **Studieløp** — anbefalt progresjon (10-ukers og 3-ukers intensivvariant): Del 0 → 1
    → 2 → 3 (handelsteorikjernen først), deretter 4 → 5 (industri), så 6 (bør kjenne),
    prøver underveis, øvingseksamenene de siste ukene under tidspress (180 min med
    vektstyrt tidsbudsjett).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `econ2610` med alle 31 kapitler
   (id/number/title/description/estimatedMinutes/topics/competenceGoals/prerequisites)
   etter mønster `COURSE_BI_OKONOMI` i `src/lib/data/textbook-courses-matte.ts`;
   `sectionNames` fra makrostruktur-tabellen (§2). Wires i
   `textbook-courses-hoyskole.ts` (jf. PRODUKSJONSLOYPE fase 5).
2. **Del 0** (kap. 0.1–0.2) — etablerer sjangernavnene A–H, frekvenstallene,
   metodeaksene og «words and diagrams»-håndverket som resten refererer til.
3. **Kjernen i avhengighetsrekkefølge**: Del 1 → Del 2 → Del 3 (standard modell, den
   tyngste HO-teoremdelen, badekar/kort-lang sikt — bærer 50–80 % av eksamen).
4. Del 4 → Del 5 (industri-rotasjonen: PP–CC og spillteori), deretter Del 6.
5. Del 7 til slutt (drøftingshalen, tospråklig begrepsdrill og øvingseksamenene
   gjenbruker alt). Batching: **én agent per hel del** (jf. fase 4); Del 2 (5 kap.) og
   Del 7 (5 kap.) kan deles, men gi da begge agentene hele delens kontrakter.
6. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles; prøvene (§4) legges i prøvekapitler per del
   (`econ2610-<del>-prove`, chapterNumber `<del>.P`).

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
  (generer helst via `json.dump`; escape `"` i norske sitattegn); `npm run build` grønn.
- [ ] **LaTeX**: alle formler i `$...$`/`$$...$$` med dobbel backslash i JSON
  (`\\sqrt`); ingen unicode-brøker; konsistent $p_X/p_Y$, $q=q_1/q_2$,
  $\text{MRT}=p_1/p_2$, $N=N_1+N_2$, $dw/dN$, $n=\sqrt{bS/F}$, $\mu=P/c$.
- [ ] **Notasjonskonsistens**: tekstsøk over alle econ2610-filer — **forbudte termer**
  (null treff): valutakurs, vekslingskurs, exchange rate, betalingsbalanse,
  driftsbalanse, current account, renteparitet, pengepolitikk, sentralbank, IS-LM,
  Phillips-kurve; **påkrevd**: komparativt fortrinn, Heckscher-Ohlin, Stolper-Samuelson,
  Rybczynski, faktorprisutjevning, badekar/spesifikke faktorer, PP–CC, mark-up, Cournot,
  Stackelberg, Nash-likevekt.
- [ ] **Tospråklighet**: hvert kjernebegrep introdusert på norsk OG engelsk første gang;
  begrepsbanken i kap. 7.2 har tospråklige flashcards.
- [ ] **«Words and diagrams»**: hvert eksempel/løsningsforslag med figur inneholder både
  figurbeskrivelse i ord (akser, kurver, punkter, arealer/skift/krysning navngitt) OG
  verbal mekanisme; regneoppgaver (PP–CC, Cournot, vekstregnskap, $dw/dN$) regnes
  **ferdig med tall**; teoremer navngis (HO/Stolper-Samuelson/Rybczynski/faktorprisutjevning);
  fordelingsoppgaver lister vinnere/tapere.
- [ ] **Kort/lang sikt + teoremretning**: kap. 3.3 og 2.5 driller begge akser; ingen
  kapittel bruker Stolper-Samuelson der badekaret (kort sikt) er riktig; teoremretningene
  er korrekte (grep-stikkprøve).
- [ ] **Aktuell-case-hale**: hvert teorikapittel har et «Aktuell case (drøftingshale)»-innslag
  og ender med en oversett-nyhetsbildet-til-modellen-øvelse.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra dette
  skjelettet), Forkunnskaper-`text` med lenker + Symbol- og formelliste-`collapsible`
  (per delkapittel), Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå med
  figur i ord), 6–12 øvinger med `solution` + `hints`, repetisjons-`collapsible`;
  drillkapitler har løsningsoppskrift + gjennomarbeidet (sensor-kommentert) case +
  8–15 oppgaver.
- [ ] **Quiz-sum ≥ 526 og flashcard-sum ≥ 538** per kvotetabellen (kontrollsummér mot
  §3-tabellen — den er autoritativ).
- [ ] **Prøver**: 4 per temadel 1–6 (24 stk) + 3 øvingseksamener; settene og prøvene
  dekker samlet sjangrene A–H minst én gang.
- [ ] **Kryssbok-lenker**: alle `/bok/econ1410/...`, `/bok/econ1210/...`,
  `/bok/econ2220/...`-lenker peker på eksisterende kapitler; er målboka ikke publisert,
  er lenken nedgradert til ren tekstomtale (ingen døde lenker — jf. §1).
- [ ] **(verifiser)-markeringer beholdt**: sensorkrav er utledet, ikke dokumentert —
  behold `(verifiser)` der skjelettet har det; ikke presenter hypoteser som fasit.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, land, bransjer og
  formuleringer; ingen formuleringer fra reelle sett (mønstereksemplene er selv
  omskrivninger og skal varieres videre, ikke kopieres inn); pensum (Krugman/Obstfeld/
  Melitz o.l.) refereres, aldri siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
  (200 + kapittelspesifikk streng), jf. lærdommen om `getChapterMeta`.

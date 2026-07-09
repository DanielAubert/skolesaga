# Bokskjelett: MAS116 Hydrodynamikk — eksamensrettet lærebok (HVL)

> **LÆRINGSLØKKE-KONTRAKT (ufravikelig, produkteier 9. juli 2026):** Ved bygging
> struktureres HVERT kapittels `content[]` som gjentatte små løkker
> **Teori → Eksempel → Oppgave** — `exercise`-blokker INLINE rett etter
> teorien/eksempelet de trener, aldri all teori øverst med oppgavene samlet
> nederst. Ingen oppgave får kreve stoff som ikke er dekket tidligere i
> kapitlet eller i eksplisitt refererte forkunnskaper (flytt teoribiten
> tidligere ved behov). Autoritativ kilde: README «Leserkrav» + arketypens
> DNA-fil. Unntak: øvingseksamen-/prøve-/modellbesvarelseskapitler følger sin
> egen arketype (komplett sett først, løsninger i collapsibles). Kvotene og
> innholdskontraktene i dette skjelettet er uendret — løkka styrer REKKEFØLGEN.


> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er derfor angitt her, destillert fra
> `EKSAMENSANALYSE.md` (~20 innholdslesbare eksamenssett + ~30 løsningsforslag fra
> MAS116/forgjengerkodene 1988–2024, det utdelte 4-siders formelarket og
> pensum-/undervisningsplanen, alt lest grundig). Arketype: **DNA-regnefag**
> (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori/drill/øvingseksamen) er
> obligatoriske og gjentas ikke her. Dette er **marin hydrodynamikk / anvendt
> fluidmekanikk**, ikke matematikk: full utledning, riktig bølgeregime og korrekt
> enhets-/tetthetsbruk er gjennomgående sensorkrav.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `mas116-hvl` |
| Tittel | **MAS116 Hydrodynamikk — eksamensrettet (HVL)** |
| Level | `'Høyskole'` |
| Institusjon | Høgskulen på Vestlandet (HVL) |
| Arketype | Regnefag (anvendt marinteknisk fysikk med usedvanlig fast oppgavetradisjon) |
| Antall kapitler | **30** nummererte (1 eksamenskart + 2 fluidmekanikk-repetisjon + 21 tema/drill + 6 eksamenstrening) + **7 temaprøve-kapitler** (`-prove`, ett per Del 1–7) |
| Estimert totaltid | **2 490 min ≈ 41,5 timer** |
| Quiz totalt | **556** (krav ≥500) |
| Flashcards totalt | **588** (krav ≥500) |

**Pitch (ett avsnitt):** MAS116 er blant de mest forutsigbare emnene i hele
porteføljen. Eksamen er en **4-timers skriftlig skoleeksamen (09:00–13:00)** med
**enkel kalkulator uten kommunikasjon** + skrive-/tegnesaker og et **4-siders
formelark** som «antas som kjent» og vedlegges hvert sett. Prøven har **to store,
likt vektede oppgaver** som praktisk talt ikke har endret seg fra 1988 til 2024:
**Oppgave 1 = motstand og propulsjon** (modellforsøk → skalering → slepeeffekt →
propellvalg fra BP-diagram → kavitasjon) og **Oppgave 2 = bølgeteori og
bølgekrefter** (dispersjon/bølgelengde → masse/drag-dominans → symbolsk Morison-
oppsett → Simpson-integrasjon → statisk/dynamisk balanse). Hver oppgave har 4–6
delpunkter (A, B, C, …) med *eksplisitt vekttall* på nyere sett, og hvert delpunkt
blander **kortsvar/forklaringsspørsmål** med **regneoppgaver**. Boka er kalibrert
mot nettopp dette: de to søylene er hovedkapitlene, teori-kortsvar og regnemetode
står side om side slik eksamen blander dem, og **irregulær sjø / bølgespektre /
RAO** — som er pensum og øvingsstoff, men **null ganger** på skoleeksamen i hele
arkivet — dekkes kompakt og tydelig merket «ikke skriftlig eksamen» slik at
forberedelsen konsentreres om de to reelle søylene.

**Kritisk kalibrering — «løs symbolsk før du setter inn tall» (gjelder HELE boka):**
Den faste instruksen på nesten hvert sett er *«Beregningsoppgaver skal løses
symbolsk før du setter inn tall. Benytt egendefinerte symbol der disse ikke er
gitt.»* Rene tallsvar uten symbolsk oppsett gir **tap**. Fem sensorregler går igjen
i alle innholdskontrakter under:
1. **Symbolsk først, tall sist** — fasit fører alltid det symbolske uttrykket før
   tallinnsetting; egne symboler innføres der de mangler. Hvert regnekapittel skal
   modellere dette føringsmønsteret eksplisitt.
2. **Metodevalg skal begrunnes** — i motstandsoppgaven belønnes eksplisitt
   begrunnelse av *hvorfor* Froude/ITTC (hurtiggående/halvplanende, endret våt
   overflate) framfor formfaktor/Prohaska (strømlinjeformet skip). Å regne uten å
   begrunne mister poeng.
3. **Forutsetninger og forbehold skal diskuteres** — særlig ved masse/drag-
   dominans: studenten skal *ikke* bare lese av grafen, men kommentere at endelig
   vanndyp, strøm og et delvis neddykket element bryter grafens forutsetninger
   («alle kraftbidrag bør tas med»). Denne kritiske vurderingen er gjennomgående
   poenggivende og er selve toppsjikt-markøren.
4. **Riktig bølgeregime FØRST** — feil valg av dyp-/grunt-/endeligvannsformler for
   $u,w,a,p_d$ forplanter seg gjennom hele oppgave 2. Fasit klassifiserer alltid
   vannet fra $h/\lambda$ før noe annet.
5. **Enheter og standardstørrelser** — slepeeffekt i kW, krefter i kN, riktig
   tetthet (sjøvann 1025 vs. ferskvann 999 kg/m³), konsekvent enhetsbruk,
   knop↔m/s-omregning (1 knop $=1852/3600$ m/s $\approx 0{,}5144$ m/s). Feil tetthet
   eller uomregnet knop er en fast strykfelle.

**Formelark-prinsippet (gjelder HVER delkapittel — bokas viktigste didaktiske
grep):** Fordi et 4-siders formelark vedlegges og «antas som kjent», må hvert
kapittel eksplisitt skille to slags innhold:
- **«Står på formelarket — tren oppslaget»**: hentes fra arket, og ferdigheten er
  å velge riktig formel/regime, sette inn riktige størrelser og bruke den riktig.
  Dette gjelder: ITTC-friksjonslinjen $C_F=0{,}075/(\log R_n-2)^2$; Prohaska
  $C_T/C_{F0}=(1+k)+y\,F_n^4/C_{F0}$; virkningsgradskjeden ($V_A=V(1-w)$,
  $\eta_H=(1-t)/(1-w)$, $J=V_A/(nD)$); BP-parameter $B_P$ og $\delta$; Burrill/
  Auf'm Keller kavitasjonskriterier; $V_{0{,}7}^2=(0{,}7\pi Dn)^2+V_A^2$;
  dispersjonsrelasjonen $\omega^2=gk\tanh(kh)$; partikkel-/trykkuttrykkene $u,w,
  a_x,a_z,p_d$ med $\cosh/\sinh$-dybdefaktorer (grunt/endelig/dypt vann);
  Morison-leddene $dF_D=\tfrac12 C_D\rho D|u|u\,dz$ og $dF_M=C_M\rho\tfrac{\pi
  D^2}{4}a\,dz$; Simpson $\int_a^b f\,dx\approx\tfrac{h}{3}\sum SF_i f(x_i)$ med
  faktorer $(1,4,1)$; hyperbolske funksjoner og deres integraler; konstanttabellen.
- **«Må kunnes/utledes aktivt»**: hele *løsningsalgoritmen* for hver søyle;
  **begrunnet metodevalg** i motstandsoppgaven; **regimeklassifisering** fra
  $h/\lambda$; **iterativ løsning** av dispersjonsrelasjonen (startverdi
  $k_0=\omega^2/g$); **normalkomponenter for skråstilt element**
  $u'=u\sin\beta-w\cos\beta$, $a'=a_x\sin\beta-a_z\cos\beta$, $dz'=dz/\sin\beta$;
  **kritisk diskusjon** av grafenes/kriterienes forutsetninger; **iterativ
  BP-diagramavlesning**; **statisk+dynamisk kraftbalanse** (ballast, oppdrift,
  reserveoppdrift, moment); **faseresonnement** (masse/drag 90° ute av fase).

**Notasjonskonvensjoner boka skal speile slavisk** (fra settene og formelarket):
- $z$ positiv oppover med origo i **stillevannsnivå**; $\zeta=\zeta_a\cos(\omega
  t-kx)$ bølgeprofil, $\zeta_a$ amplitude, $H=2\zeta_a$ bølgehøyde, $T$ periode,
  $\omega=2\pi/T$, bølgetall $k=2\pi/\lambda$, vanndyp $h$; fasevinkel $\omega t$.
- Motstand: $C_T=R_T/(\tfrac12\rho SV^2)$, $R_n=VL/\nu$, $F_n=V/\sqrt{gL}$;
  restmotstand $C_R$, formfaktor $1+k$, korrelasjonskoeffisient $C_A$; slepeeffekt
  $P_E=R_{TS}V_S$; indekser $M$=modell, $S$=skip.
- Propulsjon: virkningsgrader med indeks $\eta_0$ (åpen propell), $\eta_R$
  (relativ rotativ), $\eta_H$ (skrog), $\eta_m$ (mekanisk); levert effekt $P_D$;
  wake $w$, thrust deduction $t$.
- Morison: $C_D$ (drag, typisk ~0,7–1,1), $C_M$ (masse, typisk ~2,0); anvendelighet
  $\lambda/D>5$; massedominans $H/D<4\pi$ (dypt vann); tetthet $\rho$.
- **Enheter oppgis alltid**; effekt i kW, kraft i kN, vinkler i grader ELLER radian
  (angi hvilken). Symbolsk oppsett før tallinnsetting i alle regneeksempler.
- Engelsk fagterminologi i parentes ved første forekomst der den er innarbeidet
  (f.eks. «formfaktor (form factor)», «wake-fraksjon (wake fraction)»).

**Verktøymerknad:** Undervisningen bruker MATLAB i regne-/laboppgaver (MorisonLab,
SkipsLab, partikkelbaner), men **skoleeksamen tester ikke MATLAB** — kun enkel
kalkulator. Boka lærer derfor for-hånds-regning (særlig Simpson n=2 og iterativ
dispersjonsløsning), ikke koding. Løsningsforslagene i arkivet er skrevet i Mathcad
($:=$ er tilordning).

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen); frekvensen styrer *omfanget*:
«må beherskes perfekt»-søyler får full kapittelkjede + drillkapittel, «må kunne»-
temaer kompaktere dekning, «bør kjenne»-stoff kortest og tydelig eksamensmerket.

| Del | Tittel | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart og formelark-strategi | 1 | Prioriteringsverktøyet; kjerne i studieguiden. Presenterer de to søylene, sjanger-katalogen A–K og formelark-prinsippet. |
| 1 | Fluidmekanisk grunnlag (repetisjon) | 2 | Ikke egen eksamensoppgave, men *forutsetning*: motstandsfysikk (grensesjikt, Reynolds, drag/friksjon) og statikk (oppdrift, moment, vektoralgebra). «Bør kjenne» — kompakt bro fra forkunnskap. |
| 2 | Motstand fra modellforsøk | 5 | Oppgave 1s hovedregning, **~100 %** → nivå 1 «perfekt» → 4 teorikapitler + drillkapittel. Modellskalering, ITTC/Froude vs. formfaktor/Prohaska, korrelasjonskoeffisient, slepeeffekt $P_E$, teori-kortsvar. |
| 3 | Propulsjon og propellvalg | 3 | Oppgave 1s avslutning, ~85 % → nivå 2 «kunne». Virkningsgradskjede, iterativ BP-diagramavlesning, kavitasjonskontroll (Burrill/Auf'm Keller). |
| 4 | Lineær bølgeteori | 3 | Fundamentet for oppgave 2. Dispersjon/regimeklassifisering **~100 %** (nivå 1); partikkelbevegelse/dynamisk trykk ~65 % (nivå 2). |
| 5 | Morisons ligning og bølgekrefter | 5 | Oppgave 2s kjerne, **~100 %** → nivå 1 «perfekt» → 4 teorikapitler + drillkapittel. Masse/drag-dominans, symbolsk oppsett, skråstilt element, Simpson-integrasjon (n=2). |
| 6 | Statisk/dynamisk balanse og fasevinkler | 3 | Oppgave 2s kontekstledd, ~40–45 % → nivå 2 «kunne». Ballast/oppdrift/reserveoppdrift, bøyemoment/momentfordeling, fasevinkler for maks kraft. |
| 7 | Irregulær sjø (pensum, IKKE skriftlig eksamen) | 2 | **0 %** på skoleeksamen (1988–2024), men pensum og obligatorisk øvingsstoff → nivå 3 «kjenne». Bølgespektre, Hs, RAO — kompakt, eksplisitt merket. |
| 8 | Eksamenstrening | 6 | 2 sjangerverksted (oppgave 1-kjede + oppgave 2-kjede) + 4 komplette øvingseksamener (2 likt vektede oppgaver, 4 t) med A-løsningsforslag. |

**Seksjonstitler (blir `sectionNames` i metadata — vises som «Kapittel N: …» på bokforsiden):**

| Del | sectionNames-tittel |
|---|---|
| 0 | Eksamenskart og formelark-strategi |
| 1 | Fluidmekanisk grunnlag (repetisjon) |
| 2 | Motstand fra modellforsøk |
| 3 | Propulsjon og propellvalg |
| 4 | Lineær bølgeteori |
| 5 | Morisons ligning og bølgekrefter |
| 6 | Statisk/dynamisk balanse og fasevinkler |
| 7 | Irregulær sjø (pensum, ikke skriftlig eksamen) |
| 8 | Eksamenstrening |

**Avvik fra DNA-malen (dokumentert):**
1. **31 kapitler** — innenfor DNA-rammen (20–35). Emnet har **to garanterte, likt
   vektede søyler** som hver krever full kapittelkjede + drillkapittel, pluss
   nødvendig forkunnskaps- og kontekststoff.
2. **To drillkapitler (2.5 og 5.5)** ligger inne i søyledelene sine i stedet for i
   siste del — motstand-fra-modellforsøk og Morison-med-Simpson er ~100 %-
   gjengangere (selve eksamens oppgave 1 og oppgave 2) som må drilles umiddelbart
   etter teorien. Del 8 beholder to sjangerverksteder (hele oppgave 1-kjeden / hele
   oppgave 2-kjeden) + øvingseksamenene.
3. **Del 1 (fluidmekanisk grunnlag) er en ren repetisjonsdel** på to kapitler og
   får **2 prøver** i stedet for 4 (den er forutsetning, ikke egen
   eksamenssjanger) — dokumentert i §4.
4. **Del 7 (irregulær sjø) er «bør kjenne» og eksplisitt merket ikke-eksamen** og
   får **2 prøver** (obligatorisk øvingsstoff, ikke skriftlig eksamenssjanger) —
   dokumentert i §4. Alle øvrige temadeler (2, 3, 4, 5, 6) får 4 prøver.
5. **Fire øvingseksamener** (over DNA-minimum 2) — fordi eksamensformen er
   ekstremt stabil og prediktiv, gir fire nyskrevne fulle sett høy treffsikkerhet
   for både offshore-vind-, rørutslep-, oppdretts- og hurtigbåt-/ubåt-kontekstene.

---

## 3. Kapitler

Feltene under følger DNA-ens «Skjelett-krav». **Sjangerbokstavene (A–K)**
refererer til oppgavetype-katalogen som presenteres i Del 0 (gjengitt der fra
analysen §3):
**Oppgave 1:** A teori-kortsvar motstand · B motstandsberegning fra modellforsøk
(slepeeffekt) · C propulsjon og propellvalg fra BP-diagram · D kavitasjonskontroll.
**Oppgave 2:** E bølgelengde og regimeklassifisering (dispersjon) · F masse- vs.
dragdominans · G symbolsk oppsett av bølgekrefter (Morison) · H numerisk integrasjon
av kraft (Simpson n=2) · I fasevinkel for maksimal kraft · J statisk kraftbalanse
(ballast/oppdrift/moment) · K partikkelbaner/-hastighet og dynamisk trykk.
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

Hvert teorikapittel skal (jf. DNA + Leserkrav) inneholde: `tip` **Eksamensvinkel**,
`text` **Forkunnskaper** + `collapsible` **Symbol- og formelliste** (alle symboler
og formler i delkapitlet, per delkapittel — ikke arvet), `text` **Motivasjon**,
`definition`/`theorem` i emnets notasjon **med formelark-markering**, `text`
**Utledning med intuisjon** (kun for det som skal kunne *utledes*), 2–4 `example`
(siste på eksamensnivå, løst som A-besvarelse med symbolsk-før-tall-føring),
`warning` **Typiske feil**, 6–12 `exercise` (stigende, `solution` + `hints`),
`collapsible` **Repetisjonsoppgaver**.

---

### Del 0 — Eksamenskart og formelark-strategi

#### Kapittel 0.1: Slik testes MAS116 — de to søylene og formelarket

- **id:** `mas116-hvl-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen · **kapitteltype:** eksamenskart
- **description:** Eksamensformen, de to likt vektede søylene (motstand/propulsjon og bølge/Morison), temafrekvensene, sjanger-katalogen A–K og formelark-strategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på ~20 innholdslesbare sett 1988–2024. Skal gjengi: (i) **formen** (4-timers skriftlig skoleeksamen 09–13, enkel kalkulator uten kommunikasjon + 4-siders formelark, både bokmål og nynorsk i heftet, «alle beregninger løses symbolsk før tall»); (ii) at **adgang** krever godkjente arbeidskrav (4 regneøvinger + 2 labrapporter, MorisonLab og SkipsLab); (iii) den **faste todelte strukturen** (Oppgave 1 = motstand/propulsjon ~50 %, Oppgave 2 = bølge/Morison ~50 %, hver med 4–6 delpunkter med eksplisitt vekttall på nyere sett, som blander teori-kortsvar og regning); (iv) **temafrekvens-tabellen** (motstandsberegning ~100 %, slepeeffekt ~100 %, modellskalering ~100 %, Morison ~100 %, dispersjon/bølgelengde ~100 %, masse/drag-dominans ~95 %, regimeklassifisering ~95 %, propellvalg ~85 %, symbolsk Morison-oppsett ~85 %, Simpson-integrasjon ~80 %, teori-kortsvar motstand ~80 %, skråstilt element ~75 %, motstandskomponent-fysikk ~75 %, kavitasjon ~70 %, partikkelbevegelse ~65 %, Reynolds/grensesjikt ~60 %, dynamisk trykk ~55 %, fasevinkel ~45 %, statisk balanse ~45 %, bøyemoment ~40 %, energitransport ~15 %, irregulær sjø **0 %**); (v) **avgrensningen som styrer boka**: irregulær sjø / bølgespektre / Hs / RAO / kort-/langtidsstatistikk er pensum og øvingsstoff, men **null** ganger på skoleeksamen i hele arkivet — dekkes i Del 7, tydelig merket «ikke skriftlig eksamen»; (vi) **kontekst-utviklingen** (eldre: tankskip/lekter/betonganker; nyere: offshore vindturbin-fagverk, rørledningsutslep, oppdrett, hurtigbåt/ubåt) — samme metode, ny innpakning.
- **Innholdskontrakt:** Presenter **sjanger-katalogen A–K** som studentens sjekkliste med typisk plassering: A/B/C/D i Oppgave 1 (motstand→slepeeffekt→propell→kavitasjon), E/F/G/H/I/J/K i Oppgave 2 (dispersjon→dominans→Morison-oppsett→Simpson→fasevinkel/balanse, med partikkelbevegelse K som fundament). Presenter **formelark-prinsippet** (fra §1) med den konkrete lista over hva som *står på arket* vs. *må kunnes/utledes* — kapitlets kjerne, gjentas som markør i hvert senere kapittel. **Sensorens fem metaregler** (fra §1): symbolsk før tall; begrunn metodevalg; diskuter forutsetninger/forbehold; klassifiser bølgeregimet først; riktige enheter/tetthet. **Karakterskillene** (fra analysen §4): bestått ≈ mekaniske standarder (modellskalering + $C_{TM}$ + slepeeffekt, bølgelengde fra dispersjon, Morison-leddene, faste teori-kortsvar); midtsjikt ≈ propellvalg fra BP-diagram, Simpson på skråstilt element, korrekt regimeklassifisering; toppsjikt ≈ begrunnet metodevalg + kritisk diskusjon av grafenes forutsetninger, korrekt skråstilt-håndtering (normalkomponenter, $dz'$), fullstendig statisk+dynamisk balanse, presist faseresonnement. **Prognose for neste sett** (analysen §7): Oppgave 1 = 1–2 teori-kortsvar + full motstandsberegning m/slepeeffekt + propellvalg + evt. kavitasjon; Oppgave 2 = bølgelengde/dispersjon + masse/drag-vurdering + symbolsk Morison på (ofte skråstilt) element + Simpson-integrasjon, i et offshore-scenario, gjerne med statisk balanse-/ballast-ledd.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt 4 timer og to likt vektede oppgaver — sett opp et tidsbudsjett» og «avgjør for hvert av disse uttrykkene om det står på formelarket eller må utledes/velges (regime)».
- **Typiske feil:** Tidsfella — bruke for lang tid på det tunge Simpson-/balanseleddet i oppgave 2 og miste oppgave 1-poeng (eller omvendt); å bruke forberedelsestid på irregulær sjø som ikke kommer på skriftlig eksamen; å pugge formelarket i stedet for å trene *oppslag + regimevalg*.
- **Quiz: 14 · Flashcards: 16** (form, frekvenser, sjanger-katalog A–K, formelark-innhold, metaregler, eksamen-vs-pensum-skillet)

---

### Del 1 — Fluidmekanisk grunnlag (repetisjon)

#### Kapittel 1.1: Motstandsfysikk — grensesjikt, Reynolds og motstandskomponenter

- **id:** `mas116-hvl-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Fluidmekanisk bakgrunn for motstandssøylen: grensesjikt, Reynolds-tall, laminær/turbulent strømning, og den fysiske oppdelingen av motstand i friksjon, form og bølge.
- **Eksamensbelegg:** Ikke egen oppgave, men **forutsetning** for hele oppgave 1 — og direkte kilde til de faste teori-kortsvarene (§ analysen 2.6): hvorfor $C_F$ er høyere for modell enn skip (lavere $R_n$ → tykkere/mindre turbulent grensesjikt), fysisk oppdeling friksjon/form/bølge (~75 %), Reynolds/grensesjikt (~60 %). Prioritet: **kjenne** (fundament — kompakt, men bærer kortsvar-poeng).
- **Innholdskontrakt:** Alt til *bruk* + de faste kortsvarene. **Reynolds-tall** $R_n=VL/\nu$ og hva det måler (treghets- vs. viskøse krefter); **grensesjikt** (laminært vs. turbulent, hvordan tykkelsen henger sammen med $R_n$); **motstandsoppdeling**: friksjonsmotstand (skjærspenning i grensesjiktet), formmotstand/trykkmotstand (separasjon), bølgemotstand (energi i genererte overflatebølger); hvorfor **modellens $C_F$ > skipets $C_F$** (modell har lavere $R_n$); Froude-tall $F_n=V/\sqrt{gL}$ og hvorfor bølgemotstand skalerer med $F_n$; kort om drag- vs. friksjonsdominerte legemer og hvorfor skarpkantede objekter har $C_D$ mindre $R_n$-avhengig enn avrundede. **Formelark-markering:** $R_n=VL/\nu$ og $F_n=V/\sqrt{gL}$ *står på arket*; den fysiske forklaringen (grensesjikt, separasjon) *må kunnes*.
- **Oppgavesjangre:** Støtte til A. Mønstereksempel: «Forklar kort hvorfor friksjonsmotstandskoeffisienten er høyere for modellen enn for fullskala skip, og hvilke tre komponenter et skips totalmotstand kan deles i.»
- **Typiske feil:** Blande Reynolds- og Froude-tall (og hvilken som styrer skalering); si «modell har høyere fart» i stedet for «lavere Reynolds-tall»; glemme bølgemotstand i oppdelingen.
- **Quiz: 20 · Flashcards: 24** (motstandsfysikk og kortsvar-fakta er flashcard-gull)

#### Kapittel 1.2: Statikk i vann — oppdrift, moment og vektoralgebra

- **id:** `mas116-hvl-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** mas116-hvl-1-1 · **kapitteltype:** teori
- **description:** Statikkgrunnlaget for oppgave 2s balanseledd: Arkimedes/oppdrift, kraftbalanse, moment om en akse og vektoralgebraen (skalar-/trippelskalarprodukt) for vilkårlig orienterte elementer.
- **Eksamensbelegg:** Ikke egen oppgave, men **forutsetning** for sjanger J (statisk kraftbalanse ~45 %) og for momentberegning (~40 %) og skråstilt-element-geometrien i sjanger G/H. Prioritet: **kjenne** (fundament).
- **Innholdskontrakt:** Alt til *bruk*. **Arkimedes' lov / oppdrift** $F_B=\rho g V_{\text{depl}}$ (deplasement); **statisk kraftbalanse** (sum krefter = 0: vekt, oppdrift, linekrefter); **reserveoppdrift** (ekstra oppdrift utover likevekt); **moment** $M=\mathbf r\times\mathbf F$, moment om en akse via **trippelskalarprodukt**; **normalkomponent** av en vektor på et element via skalarprodukt (bro til skråstilt Morison-element i Del 5). Sjøvann 1025 vs. ferskvann 999 kg/m³, stål 7850. **Formelark-markering:** tetthetstabellen og vektoralgebra-identitetene *står på arket/tilleggsark*; oppsettet av en fri-legeme-balanse *må kunnes*.
- **Oppgavesjangre:** Støtte til J. Mønstereksempel: «Et neddykket rørelement har ytre volum $V$ og stålmasse $m$. Sett opp kraftbalansen (vekt, oppdrift, linekraft) og finn nettokraften på linen ved stille vann.»
- **Typiske feil:** Bruke ytre volum for oppdrift men glemme hulromsbidrag; feil tetthet (ferskvann i sjø); rote fortegn i moment ($\mathbf r\times\mathbf F$ vs. $\mathbf F\times\mathbf r$); glemme reserveoppdriftskravet.
- **Quiz: 18 · Flashcards: 20**

---

### Del 2 — Motstand fra modellforsøk  *(prioritet: PERFEKT)*

#### Kapittel 2.1: Modellforsøk og Froudes skaleringslov

- **id:** `mas116-hvl-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** mas116-hvl-1-1 · **kapitteltype:** teori
- **description:** Grunnmekanikken i modellforsøk: geometrisk skala, Froudes lov, korresponderende (modell)hastighet til en ønsket fullskala-fart, og modellvekt fra skala.
- **Eksamensbelegg:** Modellskalering i **~alle sett (~100 %)** — første steg i oppgave 1s hovedregning (sjanger B). Omskrevet mønster: gitt skala $\lambda_s$ og skipsdata, finn korresponderende modellhastighet til ønsket fullskala-fart. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Geometrisk skala** $\lambda_s=L_S/L_M$ og hvordan lengder, flater ($\propto\lambda_s^2$), volum/vekt ($\propto\lambda_s^3$) skalerer; **Froudes lov** — lik $F_n$ for modell og skip gir **korresponderende hastighet** $V_M=V_S/\sqrt{\lambda_s}$; **modellvekt/-deplasement** fra skala og tetthet (obs: modell ofte i ferskvann 999, skip i sjøvann 1025 — tetthetskorreksjon); knop→m/s-omregning. **Formelark-markering:** $F_n=V/\sqrt{gL}$ og tetthet/knop-konstanter *står på arket*; skaleringsresonnementet ($\lambda_s^2$, $\lambda_s^3$, $V_M=V_S/\sqrt{\lambda_s}$) *må kunnes og utledes*.
- **Oppgavesjangre:** B (skalering-delen). Mønstereksempel: «Slepeforsøk i skala 1:30. Skipet skal gå 28 knop. Finn korresponderende modellhastighet og modellens deplasement (ferskvann), gitt skipets deplasement i sjøvann.»
- **Typiske feil:** Skalere fart lineært i stedet for med $\sqrt{\lambda_s}$; glemme tetthetskorreksjon modell (ferskvann) → skip (sjøvann); knop ikke omregnet før innsetting; feil eksponent på flate vs. volum.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 2.2: Motstandskurve og totalmotstandskoeffisient $C_{TM}$

- **id:** `mas116-hvl-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** mas116-hvl-2-1 · **kapitteltype:** teori
- **description:** Fra en tabell modellhastighet vs. modellmotstand $R_{TM}$ til modellens motstandskurve og totalmotstandskoeffisienten $C_{TM}$ ved korresponderende hastighet.
- **Eksamensbelegg:** Fast del av oppgave 1s hovedregning (**~100 %**). Studenten skal plotte/lese modellens motstandskurve, lese av $R_{TM}$ ved korresponderende fart og regne $C_{TM}$. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Motstandskoeffisient** $C_{TM}=R_{TM}/(\tfrac12\rho_M S_M V_M^2)$; hvordan lese/interpolere i en tabell/kurve $V_M$ vs. $R_{TM}$; beskriv figuren (motstandskurven) slik sensor forventer den (akser, kurveform, avlesningspunkt). Modellens våte overflate $S_M$ fra skala. **Formelark-markering:** definisjonen $C_T=R_T/(\tfrac12\rho SV^2)$ *står på arket*; avlesning/interpolasjon i tabell *må kunnes*.
- **Oppgavesjangre:** B ($C_{TM}$-delen). Mønstereksempel: «Fra tabellen over $V_M$ og $R_{TM}$, finn $R_{TM}$ ved korresponderende hastighet (interpoler ved behov) og beregn $C_{TM}$.»
- **Typiske feil:** Bruke skipets $S$ eller $\rho$ i modellens $C_{TM}$; glemme $\tfrac12$-faktoren; feil interpolasjon i tabellen; inkonsistent enhet på $R_{TM}$ (N vs. kN).
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 2.3: Skalering modell→skip — ITTC/Froude vs. formfaktor/Prohaska

- **id:** `mas116-hvl-2-3` · **number:** 2.3 · **estimatedMinutes:** 65 · **prerequisites:** mas116-hvl-2-2 · **kapitteltype:** teori
- **description:** De to metodene for å bringe modellmotstand over til skipet: ITTC/Froude-oppdeling (friksjon + restmotstand) og formfaktormetoden (viskøs + bølge), med Prohaska for formfaktoren — og det poenggivende, begrunnede metodevalget.
- **Eksamensbelegg:** Fast, **~100 %**, og bærer sjanger-A-kortsvaret «forskjell på Froude/formfaktor/Prohaska». Fasit krever **begrunnet metodevalg** (hurtiggående/halvplanende → Froude/ITTC; strømlinjeformet → formfaktor). Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT + tabelloppslag. **ITTC-friksjonslinjen** $C_F=0{,}075/(\log R_n-2)^2$ (arket); **Froude/ITTC-oppdeling**: $C_{TM}=C_{FM}+C_R$, restmotstand $C_R$ **lik for modell og skip** (Froude-hypotesen), skipets $C_{TS}=C_{FS}+C_R+C_A$; **formfaktormetoden**: viskøs motstand $C_V=(1+k)C_{F0}$ + bølgemotstand, med **formfaktor** $1+k$; **Prohaskas metode** for å finne $1+k$: $C_T/C_{F0}=(1+k)+y\,F_n^4/C_{F0}$ (ekstrapolér ved lave $F_n$ der $C_W\propto F_n^4$); **korrelasjonskoeffisient** $C_A$ (legges til skipets $C_F$). **Begrunnet metodevalg** som eget resonnement. **Formelark-markering:** ITTC-linjen og Prohaska-uttrykket *står på arket*; oppdelingsresonnementet, valget mellom metodene og begrunnelsen *må kunnes*.
- **Oppgavesjangre:** A (kortsvar) + B (skaleringssteget). Mønstereksempel: «Forklar kort forskjellen mellom Froudes/ITTC-metoden og formfaktormetoden, når hver egner seg, og hva Prohaskas metode brukes til. Begrunn hvilken du velger for et halvplanende fartøy.»
- **Typiske feil (analysen §5.4–5.5):** Bruke formfaktormetoden på halvplanende/hurtiggående (der strømningsbildet endres), eller velge uten begrunnelse; **glemme korrelasjonskoeffisienten $C_A$**; behandle $C_R$ som ulik for modell og skip; feil $R_n$ (modell vs. skip) i ITTC-linjen.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 2.4: Skipets slepemotstand og slepeeffekt $P_E$

- **id:** `mas116-hvl-2-4` · **number:** 2.4 · **estimatedMinutes:** 55 · **prerequisites:** mas116-hvl-2-3 · **kapitteltype:** teori
- **description:** Siste steg i oppgave 1s hovedregning: bygg skipets $C_{TS}$, regn slepemotstand $R_{TS}$ og slepeeffekt $P_E=R_{TS}V_S$ — i riktig enhet (kN, kW).
- **Eksamensbelegg:** Slepeeffekt fra motstandskurve i **~alle sett (~100 %)** — sluttsvaret i oppgave 1s hovedregning (sjanger B). Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. Bygg skipets $C_{TS}=C_{FS}+C_R+C_A$ (eller $(1+k)C_{F0S}+C_W+C_A$); skipets **slepemotstand** $R_{TS}=C_{TS}\cdot\tfrac12\rho_S S_S V_S^2$; **slepeeffekt** $P_E=R_{TS}\cdot V_S$ (i kW når $R_{TS}$ i kN og $V_S$ i m/s). Enhets- og tetthetskontroll (sjøvann 1025); konsekvent knop→m/s. **Formelark-markering:** $C_T=R_T/(\tfrac12\rho SV^2)$ og $P_E$-relasjonen *står på arket*; sammenbyggingen av $C_{TS}$ og enhetsføringen *må kunnes*.
- **Oppgavesjangre:** B (sluttsvaret). Mønstereksempel: «Bygg skipets totalmotstandskoeffisient med korrelasjonskoeffisient, og beregn slepemotstand og slepeeffekt ved 28 knop. Oppgi $P_E$ i kW.»
- **Typiske feil:** Slepeeffekt i feil enhet (W vs. kW, knop ikke omregnet); ferskvannstetthet på skipet; glemme $C_A$ eller $C_R$ i sammenbyggingen; bruke modellens $S$/$V$.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 2.5: Drill — motstand fra modellforsøk fra ende til annen

- **id:** `mas116-hvl-2-5` · **number:** 2.5 · **estimatedMinutes:** 90 · **prerequisites:** mas116-hvl-2-4 · **kapitteltype:** drill
- **description:** Sjangerdrill på hele oppgave 1s motstandskjede: tabell → modellskalering → $C_{TM}$ → begrunnet metodevalg → skipets $C_{TS}$ → slepeeffekt $P_E$, i A-besvarelsesform med sensor-margnotater.
- **Eksamensbelegg:** Dekker sjanger B (~100 %) fullt ut, med det innbakte A-kortsvaret om metodevalg — selve hovedregningen i hvert eneste sett. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (DNA-drillformat): 1) les/plott modellens motstandskurve; 2) modellvekt fra skala; 3) korresponderende modellhastighet ($V_M=V_S/\sqrt{\lambda_s}$); 4) les $R_{TM}$, regn $C_{TM}$; 5) **velg og begrunn** metode (ITTC/Froude vs. formfaktor/Prohaska); 6) trekk ut friksjon (ITTC-linjen) → $C_R$ *eller* bruk $1+k$; 7) bygg $C_{TS}$ inkl. $C_A$; 8) $R_{TS}$ og $P_E=R_{TS}V_S$. **Gjennomregnet eksamenscase** med margnotater om hva som gir uttelling ved hvert steg («symbolsk først», «begrunn valget her», «$C_A$ må med»). 10–15 varianter som roterer konteksten (tankskip, halvplanende hurtigbåt, neddykket ubåt der bølgemotstand faller bort), alle på eksamensnivå.
- **Oppgavesjangre:** A + B. Mønstereksempel (kjedet à la reelle sett): «(a) Forklar valg av motstandsmetode for dette fartøyet. (b) Fra slepeforsøkstabellen, finn $C_{TM}$ ved korresponderende fart. (c) Beregn skipets slepeeffekt ved 28 knop. (d) Hvordan endres svaret om samme skrog kjøres neddykket som ubåt?»
- **Typiske feil:** Hele §5-repertoaret for oppgave 1 samlet: for tidlig tallinnsetting, ubegrunnet/feil metodevalg, glemt $C_A$, feil skalering ($\sqrt{\lambda_s}$), enhets-/tetthetsfeil.
- **Quiz: 16 · Flashcards: 12**

---

### Del 3 — Propulsjon og propellvalg  *(prioritet: KUNNE)*

#### Kapittel 3.1: Virkningsgradskjeden — fra slepeeffekt til levert effekt

- **id:** `mas116-hvl-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** mas116-hvl-2-4 · **kapitteltype:** teori
- **description:** Broen fra slepeeffekt $P_E$ til levert effekt $P_D$ via wake, thrust deduction og virkningsgradene (skrog, åpen propell, relativ rotativ).
- **Eksamensbelegg:** Fast opptakt til propellvalg (~85 %) — oppgave 1s siste blokk (sjanger C). Prioritet: **kunne**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT + arkoppslag. **Wake-fraksjon** $w$ og **fremgangshastighet** $V_A=V_S(1-w)$; **thrust deduction** $t$ og $R_T=T(1-t)$; **skrogvirkningsgrad** $\eta_H=(1-t)/(1-w)$; **effektkjeden** $P_D=P_E/(\eta_0\eta_R\eta_H)$; hva hver virkningsgrad fysisk representerer. **Formelark-markering:** $V_A=V(1-w)$, $\eta_H=(1-t)/(1-w)$, effektkjeden *står på arket*; sammenkoblingen og fysikken *må kunnes*.
- **Oppgavesjangre:** C (opptakt). Mønstereksempel: «Gitt $w=0{,}25$, $t=0{,}18$, $\eta_0=0{,}62$, $\eta_R=1{,}02$ og slepeeffekten fra oppgave 1: finn fremgangshastighet, skrogvirkningsgrad og nødvendig levert effekt.»
- **Typiske feil:** Bytte om $w$ og $t$; regne $V_A>V_S$; glemme $\eta_R$ eller $\eta_H$ i effektkjeden; bruke $P_E$ som om det var levert effekt.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 3.2: Propellvalg fra BP-/friprøvediagram

- **id:** `mas116-hvl-3-2` · **number:** 3.2 · **estimatedMinutes:** 60 · **prerequisites:** mas116-hvl-3-1 · **kapitteltype:** teori
- **description:** Den iterative avlesningen i BP-diagrammet: fra antatt virkningsgrad til $B_P$, plott, optimalt turtall, diameter og stigningsforhold $P/D$.
- **Eksamensbelegg:** Propellvalg fra BP-diagram ~85 % — oppgave 1s siste delpunkt (sjanger C). Iterativ diagramavlesning. Prioritet: **kunne**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT + diagramavlesning. **BP-parameter** $B_P$ og $\delta$ (definisjoner fra arket); **iterativ prosedyre**: anta $\eta_0$ → regn $B_P$ (fra $P_D$, $n$, $V_A$) → plott i diagrammet → les av **optimalt turtall $n$**, **diameter $D$**, **stigningsforhold $P/D$** og **revidert $\eta_0$** → gjenta til konvergens; advarsproblemet «hvilket turtall gir maksimal virkningsgrad». Beskriv diagramavlesningen slik sensor forventer den (hvilken kurve, hvilket punkt, hvordan optimum finnes). **Formelark-markering:** $B_P$/$\delta$-definisjonene og $J=V_A/(nD)$ *står på arket*; den iterative avlesningsprosedyren *må kunnes*.
- **Oppgavesjangre:** C. Mønstereksempel: «Velg optimal 4-blads propell for fremgangshastigheten fra 3.1 ved bruk av vedlagt BP-diagram. Oppgi $D$, $n$, $P/D$ og virkningsgraden $\eta_0$.»
- **Typiske feil:** Ikke iterere ($\eta_0$-antakelsen låst); lese feil kurve/punkt i diagrammet; blande $B_P$ og $\delta$; inkonsistente enheter i $B_P$ (turtall i o/min vs. o/s).
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 3.3: Kavitasjonskontroll — Burrill og Auf'm Keller

- **id:** `mas116-hvl-3-3` · **number:** 3.3 · **estimatedMinutes:** 50 · **prerequisites:** mas116-hvl-3-2 · **kapitteltype:** teori
- **description:** Kontroller at valgt propell ikke kaviterer: nødvendig bladarealsforhold $A_E/A_0$ mot Burrills eller Auf'm Kellers kriterium, via kavitasjonstall og trykkdifferens.
- **Eksamensbelegg:** Kavitasjonskontroll ~70 % — ofte i fasit merket «ikke etterspurt», men dukker jevnlig opp som eksplisitt delspørsmål (sjanger D). Prioritet: **kunne**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT + arkkriterier. **Kavitasjonstall** $\sigma$ og trykkdifferens ved propellsenterets neddykking; **resulterende hastighet** $V_{0{,}7}^2=(0{,}7\pi Dn)^2+V_A^2$ (arket); **Burrills** og **Auf'm Kellers** kriterier for nødvendig **bladarealsforhold** $A_E/A_0$; konkluder om valgt propell er kavitasjonsfri (og hva som må endres hvis ikke). **Formelark-markering:** $\sigma$, $V_{0{,}7}$, Burrill/Auf'm Keller-kriteriene *står på arket*; oppsettet (neddykking, trykkdifferens) og konklusjonen *må kunnes*.
- **Oppgavesjangre:** D. Mønstereksempel: «Kontroller med Auf'm Kellers kriterium om bladarealsforholdet til den valgte propellen er tilstrekkelig til å unngå kavitasjon ved 28 knop.»
- **Typiske feil (analysen §5.10):** **Hoppe over kavitasjonssjekken** etter propellvalg; feil neddykkingsdybde i trykket; blande Burrill og Auf'm Keller; glemme $V_A$-leddet i $V_{0{,}7}$.
- **Quiz: 14 · Flashcards: 16**

---

### Del 4 — Lineær bølgeteori

#### Kapittel 4.1: Bølgelengde og dispersjonsrelasjonen  *(prioritet: PERFEKT)*

- **id:** `mas116-hvl-4-1` · **number:** 4.1 · **estimatedMinutes:** 60 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Fra periode $T$ til bølgetall $k$ og bølgelengde $\lambda$ ved å løse dispersjonsrelasjonen $\omega^2=gk\tanh(kh)$ numerisk — oppgave 2s obligatoriske åpning.
- **Eksamensbelegg:** Dispersjon/bølgelengde i **~alle sett (~100 %)** — alltid oppgave 2A (sjanger E). Omskrevet mønster: gitt $T$ og $h$, finn $\lambda$ iterativt. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. $\omega=2\pi/T$; **dispersjonsrelasjonen** $\omega^2=gk\tanh(kh)$ og $\lambda=2\pi/k=\tfrac{gT^2}{2\pi}\tanh(kh)$; **iterativ/numerisk løsning** for $k$ med dyptvanns-startverdi $k_0=\omega^2/g$ (fikspunkt-/Newton-iterasjon for hånd, 2–3 iterasjoner); dyptvanns-forenklingen $\tanh(kh)\to1$. Vis føringen symbolsk, deretter tall. **Formelark-markering:** $\omega^2=gk\tanh(kh)$ og hyperbolske funksjoner *står på arket*; iterasjonsprosedyren og startverdien *må kunnes*.
- **Oppgavesjangre:** E. Mønstereksempel: «For $T=15$ s og vanndyp $h=80$ m, beregn bølgetallet $k$ (2–3 iterasjoner fra $k_0=\omega^2/g$) og bølgelengden $\lambda$.»
- **Typiske feil:** Bruke dyptvannsformelen $\lambda=gT^2/(2\pi)$ uten å sjekke $h/\lambda$; stoppe iterasjonen for tidlig; regne i grader i stedet for radianer i $\tanh(kh)$-argumentet ($kh$ er dimensjonsløst — ren tallverdi).
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 4.2: Regimeklassifisering og partikkelbevegelse

- **id:** `mas116-hvl-4-2` · **number:** 4.2 · **estimatedMinutes:** 60 · **prerequisites:** mas116-hvl-4-1 · **kapitteltype:** teori
- **description:** Klassifiser vannet fra $h/\lambda$ (grunt/endelig/dypt) og velg riktige uttrykk for partikkelhastighet $u,w$ og -akselerasjon $a_x,a_z$ — feil regime forplanter seg gjennom hele oppgave 2.
- **Eksamensbelegg:** Regimeklassifisering **~95 %** (sjanger E/K), partikkelbevegelse ~65 % (fundament for oppgave 2). Sensor klassifiserer alltid vannet FØRST. Prioritet: **perfekt** (klassifisering) / **kunne** (partikkelformler).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT + arkuttrykk. **Regimekriterier**: grunt $h/\lambda<0{,}05$, endelig $0{,}05\le h/\lambda\le 0{,}5$, dypt $h/\lambda>0{,}5$; velg riktig variant av $u,w,a_x,a_z$ med $\cosh/\sinh$-dybdefaktorer (grunt/endelig/dypt); **partikkelbaner** (sirkulære på dypt vann, elliptiske på grunt), vertikal bevegelse avtar mot bunnen; sammenhengen $u,w$ ↔ $a_x,a_z$ (90° faseforskyvning, $a=\partial u/\partial t$). **Formelark-markering:** $u,w,a_x,a_z$-uttrykkene (alle tre regimer) *står på arket*; regimevalget og fysisk tolkning (partikkelbaner) *må kunnes*.
- **Oppgavesjangre:** E/K. Mønstereksempel: «Med $\lambda$ fra 4.1 og $h=80$ m: klassifiser vannet, velg riktige uttrykk, og finn horisontal partikkelhastighet $u$ ved overflaten når $\omega t=0$.»
- **Typiske feil (analysen §5.2):** **Feil bølgeregime** — dyptvannsformler på endelig/grunt vann; ikke sjekke $h/\lambda$ først; forveksle $u$ (horisontal) og $w$ (vertikal); feil dybde-argument $z$ (positiv oppover fra stillevann).
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 4.3: Dynamisk trykk og energitransport i bølger

- **id:** `mas116-hvl-4-3` · **number:** 4.3 · **estimatedMinutes:** 50 · **prerequisites:** mas116-hvl-4-2 · **kapitteltype:** teori
- **description:** Dynamisk trykk $p_d$ under en bølge (rett regime), og en kompakt oversikt over energitetthet og energitransport (sjelden på eksamen, men i kapitteleksemplene).
- **Eksamensbelegg:** Dynamisk trykk ~55 % (sjanger K, ofte grunnlag for kraft-/balanseledd); energitransport ~15 % (sjelden på eksamen — «bør kjenne»). Prioritet: **kunne** (trykk) / **kjenne** (energi).
- **Innholdskontrakt:** MÅ KUNNE (trykk) / bruk (energi). **Dynamisk trykk** $p_d=\rho g\zeta_a\dfrac{\cosh k(z+h)}{\cosh kh}\cos(\omega t-kx)$ (endelig vann) med dyptvanns-/gruntvannsgrenser; hvordan $p_d$ avtar med dybden; kort om **energitetthet** $E=\tfrac12\rho g\zeta_a^2$ (per flateenhet) og **gruppehastighet/energitransport** — merk eksplisitt at energitransport nesten aldri er skriftlig eksamensstoff. **Formelark-markering:** $p_d$-uttrykkene og $E$ *står på arket*; dybdeavtakingen (fysisk tolkning) *må kunnes*.
- **Oppgavesjangre:** K. Mønstereksempel: «Finn det dynamiske trykket $p_d$ ved dybde $z=-10$ m under bølgetoppen for bølgen fra 4.1–4.2.»
- **Typiske feil:** Feil regime i $p_d$ (samme felle som 4.2); glemme at trykket er dynamisk (ikke inkludere hydrostatisk $\rho g z$ når kun $p_d$ spørres); feil fortegn på $z$.
- **Quiz: 14 · Flashcards: 14** (energitransport merkes «bør kjenne til» — lav vekt)

---

### Del 5 — Morisons ligning og bølgekrefter  *(prioritet: PERFEKT)*

#### Kapittel 5.1: Masse- vs. dragdominans og Morisons anvendelighet

- **id:** `mas116-hvl-5-1` · **number:** 5.1 · **estimatedMinutes:** 60 · **prerequisites:** mas116-hvl-4-2 · **kapitteltype:** teori
- **description:** Avgjør om Morison gjelder (slankt element, $\lambda/D>5$) og om konstruksjonen er masse- eller dragdominert — med den kritiske diskusjonen av grafens forutsetninger som sensor belønner.
- **Eksamensbelegg:** Masse/drag-dominans **~95 %** — fast delpunkt i oppgave 2 (sjanger F). Toppsjikt-markør: kritisk diskusjon av forutsetningene, ikke bare avlesning. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Morisons anvendelighet**: slankt element $\lambda/D>5$ (diffraksjon neglisjerbar); **massedominans** $H/D<4\pi$ på dypt vann, evt. avlest fra vedlagt $H/D$–$D/\lambda$-graf; **kritisk diskusjon** (sensorkrav): endelig vanndyp forskyver grensen, strøm øker dragkrefter, et element som ikke går fra bunn til overflate bryter grafens forutsetninger → «alle kraftbidrag bør tas med». **Formelark-markering:** kriteriene $\lambda/D>5$, $H/D<4\pi$ og grafen *står på arket*; den kritiske vurderingen av forutsetningene *må kunnes* og er poenggivende.
- **Oppgavesjangre:** F. Mønstereksempel: «Vurder om Morisons ligning gjelder for en søyle med diameter $D$ i bølgen fra Del 4, og om kraften er masse- eller dragdominert. Diskuter hvilke forutsetninger for grafen som er brutt her.»
- **Typiske feil (analysen §5.3):** **Ukritisk avlesning av grafen** — glemme at endelig vanndyp/strøm/delvis neddykket element bryter forutsetningene; konkludere dominans uten forbehold; bruke $H/D<4\pi$ uten å sjekke at det er dypt vann.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 5.2: Morison-leddene — symbolsk oppsett av bølgekrefter

- **id:** `mas116-hvl-5-2` · **number:** 5.2 · **estimatedMinutes:** 65 · **prerequisites:** mas116-hvl-5-1 · **kapitteltype:** teori
- **description:** Skriv opp masse- og dragleddet i Morisons ligning, horisontalt og vertikalt, som funksjon av partikkelbevegelsen — symbolsk oppsett før tallinnsetting.
- **Eksamensbelegg:** Morison-oppsett i **~alle sett (~100 %)**, symbolsk oppsett spesifikt ~85 % (sjanger G). Fagets mest sentrale metode. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Dragleddet** $dF_D=\tfrac12 C_D\rho D\,|u|u\,dz$ og **masseleddet** $dF_M=C_M\rho\tfrac{\pi D^2}{4}\,a\,dz$; total kraft ved integrasjon langs elementet; sett opp **horisontal** (fra $u,a_x$) og **vertikal** (fra $w,a_z$) kraft symbolsk; typiske koeffisienter $C_D\approx0{,}7$–$1{,}1$, $C_M\approx2{,}0$; **integralene skal *ikke* løses analytisk — kun settes opp** (integreres numerisk i 5.4). **Formelark-markering:** $dF_D$, $dF_M$ og partikkeluttrykkene *står på arket*; sammensetningen (horisontal/vertikal, hvilket $u$/$a$ i hvert ledd) *må kunnes*.
- **Oppgavesjangre:** G. Mønstereksempel: «Sett opp det symbolske uttrykket for horisontal og vertikal bølgekraft på en vertikal søyle fra bunn til overflate. Integralet skal ikke løses analytisk.»
- **Typiske feil:** Glemme $|u|u$ (kvadratisk drag med fortegn) og skrive $u^2$; bruke $u$ i masseleddet (skal være akselerasjon $a$); feil arealer ($\tfrac{\pi D^2}{4}$ vs. $D$); løse integralet analytisk når kun oppsett kreves.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 5.3: Skråstilt og vilkårlig orientert element

- **id:** `mas116-hvl-5-3` · **number:** 5.3 · **estimatedMinutes:** 60 · **prerequisites:** mas116-hvl-5-2 · **kapitteltype:** teori
- **description:** Morison på et element som ikke står loddrett: normalkomponenter av partikkelhastighet/-akselerasjon og lengdekorreksjonen $dz'=dz/\sin\beta$.
- **Eksamensbelegg:** Skråstilt/tilfeldig orientert element ~75 %, **stigende i nyere sett** (sjanger G, toppsjikt-markør). Prioritet: **perfekt** (fordi trenden er stigende og det skiller topp fra midt).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. For et element med vinkel $\beta$ mot horisontalplanet (eller $\alpha$ mot bølgeretningen): **normalkomponenter** $u'=u\sin\beta-w\cos\beta$, $a'=a_x\sin\beta-a_z\cos\beta$; **lengdekorreksjon** $dz'=dz/\sin\beta$; sett Morison-leddene opp med de normale komponentene og integrer langs elementets faktiske lengde; vektoralgebra (skalarprodukt for normalkomponent) for helt vilkårlig orientering. **Formelark-markering:** $u'$, $a'$, $dz'$ og vektoridentitetene *står på arket*; anvendelsen (velge riktige komponenter, korrigere lengden) *må kunnes* og er selve toppsjikt-ferdigheten.
- **Oppgavesjangre:** G. Mønstereksempel: «Et fagverksben står med vinkel $\beta=60^\circ$ mot horisontalen. Sett opp normalkraftens masse- og dragledd med korrekt normalkomponent og lengdekorreksjon.»
- **Typiske feil (analysen §5.6):** **Behandle skråstilt element som vertikalt** — glemme $u'=u\sin\beta-w\cos\beta$ og $dz'=dz/\sin\beta$; blande $\beta$ (mot horisontalplan) med $\alpha$ (mot bølgeretning); glemme vertikal partikkelkomponent $w$ i normalprojeksjonen.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 5.4: Numerisk integrasjon av kraft — Simpson (n=2)

- **id:** `mas116-hvl-5-4` · **number:** 5.4 · **estimatedMinutes:** 60 · **prerequisites:** mas116-hvl-5-3 · **kapitteltype:** teori
- **description:** Den faste beregningsteknikken i oppgave 2: integrer masse-/dragkraften langs elementet med Simpsons metode (n=2, tre punkter, faktorer 1-4-1) ved et gitt øyeblikk.
- **Eksamensbelegg:** Simpson-integrasjon av kraft ~80 % — kjerneteknikken i oppgave 2D/E (sjanger H). Fasit viser tre punktverdier, faktorene $(1,4,1)$ og steglengden. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Simpsons metode** $\int_a^b f\,dz\approx\tfrac{\Delta z}{3}\sum SF_i f(z_i)$ med **n=2** (tre punkt: ender + midt), faktorer $(1,4,1)$; velg tidspunkt (typisk der horisontal dragkraft er maksimal), regn $u,w,a$ i hvert Simpson-punkt, sett inn i Morison-leddene, vekt med faktorene, summer; **resulterende krafts størrelse og retning** (vektorsum av horisontal og vertikal); begrunne tillatte forenklinger. **Formelark-markering:** Simpson-formelen og faktorene *står på arket*; det tre-punkts-oppsettet og valg av tidspunkt *må kunnes*.
- **Oppgavesjangre:** H. Mønstereksempel: «Beregn totalkraftens størrelse og retning på elementet numerisk (Simpson, n=2) i det øyeblikk horisontal dragkraft er størst.»
- **Typiske feil (analysen §5.7):** **Feil Simpson-oppsett** — feil faktorer, feil steglengde, eller regne i bare ett punkt; glemme å ta vektorsum av horisontal og vertikal; regne kraften ved feil fasevinkel.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 5.5: Drill — Morison-oppgaven fra ende til annen

- **id:** `mas116-hvl-5-5` · **number:** 5.5 · **estimatedMinutes:** 95 · **prerequisites:** mas116-hvl-5-4 · **kapitteltype:** drill
- **description:** Sjangerdrill på hele oppgave 2s kraftkjede: dispersjon → regime → masse/drag-dominans → symbolsk Morison (evt. skråstilt) → Simpson-integrasjon → resulterende kraft, i A-besvarelsesform med sensor-margnotater.
- **Eksamensbelegg:** Dekker sjangrene E/F/G/H (alle ~80–100 %) — selve oppgave 2 i hvert sett. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (DNA-drillformat): 1) $\omega$, løs dispersjon for $k$/$\lambda$; 2) klassifiser regime fra $h/\lambda$, velg partikkelformler; 3) sjekk Morison-anvendelighet + masse/drag-dominans (med forbehold); 4) sett opp masse-/dragledd symbolsk (normalkomponenter hvis skråstilt); 5) velg tidspunkt (maks dragkraft), regn $u,w,a$ i Simpson-punktene; 6) Simpson (1,4,1) → totalkraft; 7) resulterende størrelse + retning. **Gjennomregnet eksamenscase** med margnotater («regime først», «symbolsk før tall», «diskuter forbeholdene», «Simpson-faktorene»). 10–15 varianter (vertikal søyle, skråstilt fagverksben, rørledning, oppdrettsramme), alle på eksamensnivå.
- **Oppgavesjangre:** E, F, G, H. Mønstereksempel (kjedet à la reelle sett): «(a) Finn bølgelengden ($T$, $h$ gitt) og klassifiser vannet. (b) Vurder masse/drag-dominans med forbehold. (c) Sett opp normalkraften på et element med vinkel $\alpha$. (d) Beregn totalkraften med Simpson (n=2) ved maks dragkraft.»
- **Typiske feil:** Hele §5-repertoaret for oppgave 2 samlet: feil regime (§5.2), ukritisk grafavlesning (§5.3), skråstilt behandlet som vertikalt (§5.6), feil Simpson-oppsett (§5.7), $|u|u$-fella.
- **Quiz: 16 · Flashcards: 12**

---

### Del 6 — Statisk/dynamisk balanse og fasevinkler  *(prioritet: KUNNE)*

#### Kapittel 6.1: Fasevinkler for maksimal kraft

- **id:** `mas116-hvl-6-1` · **number:** 6.1 · **estimatedMinutes:** 50 · **prerequisites:** mas116-hvl-5-4 · **kapitteltype:** teori
- **description:** Bestem fasevinkelen $\omega t$ som gir maksimal masse-, drag- og totalkraft, og forstå hvorfor massekraft og dragkraft er 90° ute av fase.
- **Eksamensbelegg:** Fasevinkel for maks kraft ~45 %, **stigende** (sjanger I). Prioritet: **kunne**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Massekraft** maks der partikkelakselerasjonen er maks ($\omega t$ ved akselerasjonstopp); **dragkraft** maks der partikkelhastigheten er maks — **90° faseforskyvning** mellom dem; **totalkraftens** maks flytter seg med bølgehøyden (dragdominans → topp nær hastighetsmaks; massedominans → topp nær akselerasjonsmaks); skisser masse-, drag- og totalkraft over én periode $(0$–$2\pi)$ (beskriv figuren slik sensor forventer den). **Formelark-markering:** ingen ny formel fra arket her — faseresonnementet *må kunnes*; bygger på $u,a$-uttrykkene (5.2/4.2).
- **Oppgavesjangre:** I. Mønstereksempel: «Vis ved hvilken fasevinkel maksimal totalkraft inntreffer for henholdsvis lav ($H<5$ m) og høy ($H>20$ m) bølgehøyde, og skissér masse-, drag- og totalkraft over en periode.»
- **Typiske feil (analysen §5.8):** **Anta at masse- og dragkraft topper samtidig** — overse 90°-faseforskyvningen; anta fast totalkrafttopp uavhengig av bølgehøyde; feil skisse.
- **Quiz: 14 · Flashcards: 16**

#### Kapittel 6.2: Statisk kraftbalanse — ballast, oppdrift, reserveoppdrift

- **id:** `mas116-hvl-6-2` · **number:** 6.2 · **estimatedMinutes:** 60 · **prerequisites:** mas116-hvl-1-2 · **kapitteltype:** teori
- **description:** For neddykkede konstruksjoner (rør under utslep, anker, pontong): balanser vekt, oppdrift og maksimal dynamisk bølgekraft, og bestem ballast og bøyers oppdriftskapasitet med reserveoppdriftskrav.
- **Eksamensbelegg:** Statisk kraftbalanse ~45 % (sjanger J, kontekstavhengig: rør/anker/pontong). Prioritet: **kunne**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. Balanser vekt, oppdrift (deplasement, kap. 1.2) og **maksimal dynamisk (vertikal) bølgekraft**; bestem **ballastvekt** som hindrer slakke liner (ofte med sikkerhetsmargin, f.eks. 50 %); **bøyers oppdriftskapasitet** med krav til **reserveoppdrift**; koble den dynamiske kraften (fra Del 5) til den statiske balansen. **Formelark-markering:** oppdrift $F_B=\rho g V$ og tetthetstabellen *står på arket*; balanseoppsettet (hvilke krefter, hvilken margin) *må kunnes*.
- **Oppgavesjangre:** J. Mønstereksempel: «Et rør slepes neddykket. Med maksimal dynamisk bølgekraft fra Del 5: bestem ballastvekten som holder linene stramme med 50 % margin, og bøyenes nødvendige oppdriftskapasitet.»
- **Typiske feil (analysen §5.11):** **Ufullstendig balanse** — glemme oppdrift eller reserveoppdriftskrav; glemme sikkerhetsmarginen; bruke feil (statisk i stedet for maksimal dynamisk) kraft i dimensjoneringen.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 6.3: Bøyemoment og momentfordeling

- **id:** `mas116-hvl-6-3` · **number:** 6.3 · **estimatedMinutes:** 55 · **prerequisites:** mas116-hvl-6-2 · **kapitteltype:** teori
- **description:** Momentberegning for neddykkede konstruksjoner: angrepspunkt, moment om en vilkårlig akse (trippelskalarprodukt), og fordeling av ballast for minst mulig bøyemoment.
- **Eksamensbelegg:** Bøyemoment/momentberegning ~40 % (sjanger J, fast sidebein). Prioritet: **kunne**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Angrepspunkt** for den fordelte bølgekraften; **moment** $M=\mathbf r\times\mathbf F$ og moment om en vilkårlig akse via **trippelskalarprodukt** (kap. 1.2); **fordeling av ballast** for minst mulig bøyemoment (jevnt fordelt for nøytralitet vs. konsentrert mot endene); koble til kraftbalansen i 6.2. **Formelark-markering:** vektoralgebra-/trippelprodukt-identitetene *står på arket*; oppsettet (velge akse, finne angrepspunkt, resonnere om fordeling) *må kunnes*.
- **Oppgavesjangre:** J. Mønstereksempel: «Bestem bøyemomentet i midten av det neddykkede røret ved maksimal bølgekraft, og drøft hvordan ballasten bør fordeles for å minimere det.»
- **Typiske feil:** Feil angrepspunkt for den fordelte kraften; fortegnsfeil i kryssprodukt; fordele ballast uten hensyn til bøyemoment; glemme egenvekts-bidraget til momentet.
- **Quiz: 14 · Flashcards: 16**

---

### Del 7 — Irregulær sjø (pensum, IKKE skriftlig eksamen)  *(prioritet: KJENNE)*

> **Eksamensmerknad (gjelder hele Del 7):** Irregulær sjø, bølgespektre, signifikant
> bølgehøyde, RAO/transferfunksjoner og kort-/langtidsstatistikk er **pensum og
> obligatorisk øvingsstoff** (MorisonLab/SkipsLab, Øving 1–4), men forekommer
> **null ganger** på skriftlig skoleeksamen i hele arkivet (1988–2024). Hvert
> kapittel her skal ha en tydelig `warning`-blokk: «Dette er pensum og øvingsstoff,
> men kommer ikke på skriftlig eksamen — prioriter Del 2–6 til eksamensforberedelse.»

#### Kapittel 7.1: Fra regulær til irregulær sjø — superposisjon og bølgespektre

- **id:** `mas116-hvl-7-1` · **number:** 7.1 · **estimatedMinutes:** 45 · **prerequisites:** mas116-hvl-4-1 · **kapitteltype:** teori
- **description:** Hvordan en irregulær sjøtilstand bygges som en superposisjon av regulære komponenter, og hvordan et bølgespekter beskriver energifordelingen over frekvens.
- **Eksamensbelegg:** **0 %** på skriftlig eksamen — pensum/øvingsstoff (obligatoriske arbeidskrav). Prioritet: **kjenne**.
- **Innholdskontrakt:** Konseptuelt, til *bruk* i øvinger. Superposisjonsprinsippet (irregulær sjø = sum av regulære komponenter med tilfeldig fase); **bølgespekter** $S(\omega)$ som energifordeling over frekvens; standardspektre nevnes kort (f.eks. PM/JONSWAP *(verifiser)*); sammenhengen spekter ↔ tidsserie. Kort — bakgrunn for øvingene. **Formelark-markering:** spektralformlene er øvings-/pensumstoff, ikke skriftlig eksamen.
- **Oppgavesjangre:** Øvingsstøtte (ikke eksamenssjanger). Mønstereksempel: «Forklar kvalitativt hvordan et bølgespekter representerer en irregulær sjøtilstand.»
- **Typiske feil (analysen §5.12):** **Bruke eksamenstid på dette** i den tro at det kommer på skriftlig eksamen; forveksle spekter (frekvensdomene) med tidsserie.
- **Quiz: 12 · Flashcards: 14**

#### Kapittel 7.2: Signifikant bølgehøyde, RAO og statistikk

- **id:** `mas116-hvl-7-2` · **number:** 7.2 · **estimatedMinutes:** 45 · **prerequisites:** mas116-hvl-7-1 · **kapitteltype:** teori
- **description:** Nøkkelstørrelsene fra en sjøtilstand: signifikant bølgehøyde $H_s$, spektralmomenter, respons-amplitude-operatoren (RAO), og kort- vs. langtidsstatistikk.
- **Eksamensbelegg:** **0 %** på skriftlig eksamen — pensum/øvingsstoff. Prioritet: **kjenne**.
- **Innholdskontrakt:** Konseptuelt, til *bruk* i øvinger. **Signifikant bølgehøyde** $H_s$ (≈ $4\sqrt{m_0}$ *(verifiser)*, gjennomsnittet av høyeste tredel); **spektralmomenter** $m_0,m_2$; **RAO / transferfunksjon** (respons per enhets bølgeamplitude) og responsspekter $S_R=|RAO|^2 S(\omega)$; forskjellen kort- vs. langtidsstatistikk. Kort — bakgrunn for øvingene. **Formelark-markering:** øvings-/pensumstoff, ikke skriftlig eksamen; alle formler her merkes *(verifiser)* mot pensumkompendiet.
- **Oppgavesjangre:** Øvingsstøtte (ikke eksamenssjanger). Mønstereksempel: «Forklar hva RAO-en uttrykker og hvordan responsspekteret følger av bølgespekteret.»
- **Typiske feil:** Blande $H_s$ med bølgeamplitude/-høyde for en regulær bølge; tro at dette er skriftlig eksamensstoff.
- **Quiz: 12 · Flashcards: 12**

---

### Del 8 — Eksamenstrening

#### Kapittel 8.1: Sjangerverksted — hele oppgave 1 (motstand og propulsjon)

- **id:** `mas116-hvl-8-1` · **number:** 8.1 · **estimatedMinutes:** 90 · **prerequisites:** mas116-hvl-3-3 · **kapitteltype:** drill
- **description:** Full gjennomkjøring av en komplett oppgave 1 fra reell mal: teori-kortsvar + motstandsberegning fra modellforsøk + propellvalg + kavitasjon, som én sammenhengende A-besvarelse.
- **Eksamensbelegg:** Speiler hele oppgave 1 (~50 % av eksamen): sjangrene A/B/C/D i den rekkefølgen de opptrer. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift for hele oppgave 1: kortsvar (metodevalg) → skalering → $C_{TM}$ → skipets $C_{TS}$ → $P_E$ → virkningsgradskjede → BP-diagram → kavitasjon. **Gjennomregnet eksamenscase** med sensor-margnotater om delpoeng og hva som gir uttelling. 6–10 varianter/delpunkt-kjeder over ulike fartøystyper. Fokus på tidsbudsjett (halve eksamen).
- **Oppgavesjangre:** A, B, C, D. Mønstereksempel: en full oppgave 1 med 5 delpunkter (a–e) med eksplisitt vekttall, à la nyere sett.
- **Typiske feil:** Alle oppgave 1-felle fra §5 samlet; tidsstyring (ikke bruke opp all tid her og miste oppgave 2).
- **Quiz: 10 · Flashcards: 6**

#### Kapittel 8.2: Sjangerverksted — hele oppgave 2 (bølgeteori og bølgekrefter)

- **id:** `mas116-hvl-8-2` · **number:** 8.2 · **estimatedMinutes:** 90 · **prerequisites:** mas116-hvl-6-3 · **kapitteltype:** drill
- **description:** Full gjennomkjøring av en komplett oppgave 2 fra reell mal: dispersjon + regime + masse/drag-dominans + symbolsk Morison (skråstilt) + Simpson + statisk/dynamisk balanse, som én sammenhengende A-besvarelse.
- **Eksamensbelegg:** Speiler hele oppgave 2 (~50 % av eksamen): sjangrene E/F/G/H/I/J/K i den rekkefølgen de opptrer. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift for hele oppgave 2: dispersjon/bølgelengde → regime → partikkelbevegelse → masse/drag-dominans (m/forbehold) → symbolsk Morison (evt. skråstilt) → Simpson (n=2) → resulterende kraft → evt. fasevinkel/statisk balanse/moment. **Gjennomregnet eksamenscase** med sensor-margnotater. 6–10 varianter over offshore-kontekster (vindturbin-fagverk, rørutslep, oppdrett).
- **Oppgavesjangre:** E, F, G, H, I, J, K. Mønstereksempel: en full oppgave 2 med 5–6 delpunkter (a–f) med eksplisitt vekttall, à la nyere sett (offshore vindturbin-fagverk).
- **Typiske feil:** Alle oppgave 2-felle fra §5 samlet; regime-feil som forplanter seg; tidsstyring.
- **Quiz: 10 · Flashcards: 6**

#### Kapittel 8.3: Øvingseksamen 1 — klassisk stabil mal

- **id:** `mas116-hvl-8-3` · **number:** 8.3 · **estimatedMinutes:** 240 · **prerequisites:** mas116-hvl-8-2 · **kapitteltype:** øvingseksamen
- **description:** Komplett sett (2 likt vektede oppgaver, 4 timer) etter den klassiske stabile malen: tankskip-motstand + vertikal søyle i bølger.
- **Eksamensbelegg/miks:** **Oppgave 1** (motstand/propulsjon): teori-kortsvar (Froude vs. formfaktor, A) + full motstandsberegning fra modellforsøk med slepeeffekt (B) + propellvalg fra BP-diagram (C) + kavitasjon (D). **Oppgave 2** (bølge/Morison): bølgelengde/dispersjon (E) + regimeklassifisering + masse/drag-dominans (F) + symbolsk Morison på vertikal søyle (G) + Simpson-integrasjon (H). Løsningsforslag som A-besvarelse med vektings-tips.
- **Quiz: 4 · Flashcards: 0**

#### Kapittel 8.4: Øvingseksamen 2 — offshore vindturbin-fagverk (skråstilt)

- **id:** `mas116-hvl-8-4` · **number:** 8.4 · **estimatedMinutes:** 240 · **prerequisites:** mas116-hvl-8-3 · **kapitteltype:** øvingseksamen
- **description:** Komplett sett etter den nyere offshore-malen: halvplanende hurtigbåt-motstand + skråstilt fagverksben med fasevinkel.
- **Eksamensbelegg/miks:** **Oppgave 1**: kortsvar ($C_F$ modell vs. skip, A) + motstandsberegning for halvplanende fartøy (begrunnet ITTC/Froude-valg, B) + virkningsgradskjede og propellvalg (C). **Oppgave 2**: dispersjon på endelig vann (E) + masse/drag-dominans med kritisk forbehold (F) + symbolsk Morison på **skråstilt** fagverksben (G, normalkomponenter) + Simpson (H) + fasevinkel for maks totalkraft (I). Dekker skråstilt-håndteringen og fasevinkler som Øvingseksamen 1 ikke traff. Løsningsforslag som A-besvarelse.
- **Quiz: 4 · Flashcards: 0**

#### Kapittel 8.5: Øvingseksamen 3 — rørledningsutslep (statisk/dynamisk balanse)

- **id:** `mas116-hvl-8-5` · **number:** 8.5 · **estimatedMinutes:** 240 · **prerequisites:** mas116-hvl-8-4 · **kapitteltype:** øvingseksamen
- **description:** Komplett sett med tyngdepunkt i statisk/dynamisk balanse: neddykket ubåt-motstand + rørledning under utslep med ballast og moment.
- **Eksamensbelegg/miks:** **Oppgave 1**: kortsvar (ubåt neddykket — bølgemotstand faller bort, A) + motstandsberegning for neddykket skrog (B) + propellvalg + kavitasjon (C, D). **Oppgave 2**: dispersjon (E) + partikkelbevegelse og dynamisk trykk (K) + symbolsk Morison på neddykket rør (G) + Simpson for maks dynamisk kraft (H) + **statisk kraftbalanse: ballast + reserveoppdrift** (J) + **bøyemoment og ballastfordeling** (J/moment). Dekker balanse-/moment-sjangrene (J) som de to første ikke traff. Løsningsforslag som A-besvarelse.
- **Quiz: 4 · Flashcards: 0**

#### Kapittel 8.6: Øvingseksamen 4 — oppdrettskonstruksjon (blandet, nyeste mal)

- **id:** `mas116-hvl-8-6` · **number:** 8.6 · **estimatedMinutes:** 240 · **prerequisites:** mas116-hvl-8-5 · **kapitteltype:** øvingseksamen
- **description:** Komplett sett etter nyeste mal (jan24-form) med oppdretts-/offshore-kontekst som blander de sjangrene som skiller topp fra midt.
- **Eksamensbelegg/miks:** **Oppgave 1**: kortsvar (Prohaskas metode, A) + full motstandsberegning med begrunnet metodevalg (B) + virkningsgradskjede, propellvalg og kavitasjon (C, D). **Oppgave 2**: dispersjon på endelig vann (E) + masse/drag-dominans med alle forbehold (F) + symbolsk Morison på et vilkårlig orientert element (G, vektoralgebra) + Simpson (H) + fasevinkel + statisk balanse-innslag (I, J). Speiler den nyeste eksamensmalen og samler toppsjikt-markørene. Løsningsforslag som A-besvarelse; markér hvor kontekst-innpakningen er ny (offshore/oppdrett) men metoden uendret.
- **Quiz: 4 · Flashcards: 0**

---

### Summeringskontroll (quiz/flashcards)

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 14 | 16 |
| 1 | 1.1–1.2 | 20+18 = **38** | 24+20 = **44** |
| 2 | 2.1–2.5 | 20+18+20+18+16 = **92** | 22+18+22+18+12 = **92** |
| 3 | 3.1–3.3 | 18+16+14 = **48** | 20+16+16 = **52** |
| 4 | 4.1–4.3 | 20+18+14 = **52** | 22+20+14 = **56** |
| 5 | 5.1–5.5 | 18+18+16+18+16 = **86** | 18+20+18+18+12 = **86** |
| 6 | 6.1–6.3 | 14+16+14 = **44** | 16+16+16 = **48** |
| 7 | 7.1–7.2 | 12+12 = **24** | 14+12 = **26** |
| 8 | 8.1–8.6 | 10+10+4+4+4+4 = **36** | 6+6+0+0+0+0 = **12** |
| **Sum** | **31 kap.** | **434** | **432** |

> **Merk:** Delsummene over teller kun teori-/drill-/eksamenskvotene. For å nå
> gulvet med solid margin legger **hvert teori- og drillkapittel dessuten en
> «hurtigrepetisjon»-quizserie** (se tetthetsbegrunnelsen) som løfter totalen. Den
> autoritative totalen under er fasit for byggefasene.

**AUTORITATIV KVOTESUM (fasit for alle senere faser):**

- **Quiz totalt: 556 ≥ 500 ✓**
- **Flashcards totalt: 588 ≥ 500 ✓**

De 122 quiz og 156 flashcards som ligger mellom delsummene (434/432) og totalen
(556/588) fordeles av byggeagentene som ekstra kort/spørsmål i de tunge søylene
(Del 2, 4, 5) og i det faktatette forkunnskaps-/kortsvarstoffet (Del 1),
proporsjonalt med kapitlenes vekt — aldri i eksamenskapitlene (Del 8s
øvingseksamener holder 0 flashcards). Kvotene er **minimum per kapittel**;
forfatteren kan overskyte, aldri underskride.

**Tetthetsbegrunnelse (jf. audit «≥500 er gulv»):** MAS116 er metode- og
formeltungt, men har også et betydelig lag av **faste teori-kortsvar** (Froude vs.
formfaktor vs. Prohaska; $C_F$ modell vs. skip; ubåt neddykket; masse/drag-fysikk;
regimekriterier) som er billige, høyfrekvente eksamenspoeng og **flashcard-gull**
for rask, presis gjengivelse under tidspress. Derfor ligger flashcards (588) noe
over quiz (556) og godt over gulvet, med tyngdepunkt i de to perfekt-søylene
(Del 2 motstand + Del 5 Morison bærer 178 av basissummens flashcards) og i
forkunnskaps-/kortsvarstoffet (Del 1 + regimefakta). Irregulær sjø (Del 7) holder
lav tetthet fordi det ikke er skriftlig eksamensstoff. Eksamenstreningen (Del 8)
holder lav flashcard-tetthet fordi verdien der er hele-oppgave-gjennomkjøring, ikke
enkeltfakta.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel Del 2–6; 2 for repetisjonsdel Del 1 og for ikke-eksamensdel Del 7 — 24 totalt)

Hver prøve er nyskrevne oppgaver i eksamens sjangre, med løsningsforslag og
poengfordeling. Omfang i minutter. **Avvik dokumentert:** Del 0 (eksamenskart) og
Del 8 (eksamenstrening) har ingen egne prøver; Del 1 er en ren repetisjonsdel
(forutsetning, ikke egen eksamenssjanger) og Del 7 er pensum/øvingsstoff som ikke
kommer på skriftlig eksamen — begge får **2** prøver i stedet for 4. Prøve-id-ene
følger mønsteret `mas116-hvl-<del>-prove` (chapterNumber `<del>.P`).

**Prøve-kvote Del 1 — Fluidmekanisk grunnlag (2 prøver):**
1. Prøve 1.A (25 min): Motstandsfysikk-kortsvar ($C_F$ modell vs. skip, komponentoppdeling, Reynolds/grensesjikt) (støtte-A).
2. Prøve 1.B (25 min): Statikk i vann — oppdrift, kraftbalanse og moment (støtte-J).

**Prøve-kvote Del 2 — Motstand fra modellforsøk (4 prøver):**
1. Prøve 2.A (25 min): Teori-kortsvar Froude/ITTC vs. formfaktor/Prohaska + begrunnet valg (sjanger A).
2. Prøve 2.B (35 min): Modellskalering + $C_{TM}$ fra slepeforsøkstabell (sjanger B).
3. Prøve 2.C (35 min): Skalering modell→skip med korrelasjonskoeffisient + slepeeffekt $P_E$ (sjanger B).
4. Prøve 2.D (45 min): Full motstandskjede tabell→$P_E$ med begrunnet metodevalg, eksamensnivå (sjanger A+B).

**Prøve-kvote Del 3 — Propulsjon og propellvalg (4 prøver):**
1. Prøve 3.A (30 min): Virkningsgradskjede fra $P_E$ til $P_D$ (sjanger C).
2. Prøve 3.B (35 min): Iterativ propellvalg fra BP-diagram ($D$, $n$, $P/D$, $\eta_0$) (sjanger C).
3. Prøve 3.C (30 min): Kavitasjonskontroll Burrill/Auf'm Keller (sjanger D).
4. Prøve 3.D (40 min): Full propulsjonskjede $P_E$→propellvalg→kavitasjon, eksamensnivå (sjanger C+D).

**Prøve-kvote Del 4 — Lineær bølgeteori (4 prøver):**
1. Prøve 4.A (35 min): Dispersjon — iterativ løsning for $k$/$\lambda$ (sjanger E).
2. Prøve 4.B (30 min): Regimeklassifisering + valg av partikkelformler (sjanger E/K).
3. Prøve 4.C (30 min): Partikkelhastighet/-akselerasjon og dynamisk trykk, rett regime (sjanger K).
4. Prøve 4.D (40 min): Full bølgekinematikk — dispersjon → regime → $u,w,a,p_d$, eksamensnivå (sjanger E+K).

**Prøve-kvote Del 5 — Morisons ligning og bølgekrefter (4 prøver):**
1. Prøve 5.A (35 min): Masse/drag-dominans med kritisk diskusjon av forutsetningene (sjanger F).
2. Prøve 5.B (35 min): Symbolsk Morison-oppsett, horisontal + vertikal (sjanger G).
3. Prøve 5.C (40 min): Skråstilt element — normalkomponenter + $dz'$ (sjanger G).
4. Prøve 5.D (45 min): Full Morison-kjede dispersjon→dominans→Morison→Simpson, eksamensnivå (sjanger E+F+G+H).

**Prøve-kvote Del 6 — Statisk/dynamisk balanse og fasevinkler (4 prøver):**
1. Prøve 6.A (35 min): Fasevinkler for maks masse-/drag-/totalkraft + skisse (sjanger I).
2. Prøve 6.B (40 min): Statisk kraftbalanse — ballast + reserveoppdrift (sjanger J).
3. Prøve 6.C (35 min): Bøyemoment og ballastfordeling (sjanger J/moment).
4. Prøve 6.D (45 min): Full balanse-/momentoppgave koblet til dynamisk bølgekraft, eksamensnivå (sjanger I+J).

**Prøve-kvote Del 7 — Irregulær sjø (2 prøver; øvingsstoff, IKKE skriftlig eksamen):**
1. Prøve 7.A (25 min): Superposisjon og bølgespekter — konseptuelt (øvingsstøtte). Merket «ikke skriftlig eksamen».
2. Prøve 7.B (25 min): $H_s$, spektralmomenter og RAO/responsspekter — konseptuelt (øvingsstøtte). Merket «ikke skriftlig eksamen».

### Øvingseksamener (4 komplette sett — se kap. 8.3–8.6)

| Sett | Mal den speiler | Miks (2 likt vektede oppgaver) |
|---|---|---|
| Øvingseksamen 1 (kap. 8.3) | Klassisk stabil mal | O1: A+B+C+D (tankskip). O2: E+F+G+H (vertikal søyle) |
| Øvingseksamen 2 (kap. 8.4) | Nyere offshore-mal, skråstilt | O1: A+B+C (halvplanende hurtigbåt). O2: E+F+G(skråstilt)+H+I (vindturbin-fagverk) |
| Øvingseksamen 3 (kap. 8.5) | Balanse-/momenttung | O1: A+B+C+D (neddykket ubåt). O2: E+K+G+H+J+moment (rørutslep) |
| Øvingseksamen 4 (kap. 8.6) | Nyeste mal (jan24), blandet | O1: A+B+C+D. O2: E+F+G(vilkårlig)+H+I+J (oppdrett) |

Til sammen dekker de fire settene samtlige eksamenssjangre A–K minst én gang
(irregulær sjø, Del 7, er øvingsstoff og dekkes i teori/quiz/prøve, ikke i
øvingseksamen fordi det aldri er skriftlig eksamensstoff).

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (4 t, enkel kalkulator + 4-siders formelark,
   to likt vektede oppgaver, «løs symbolsk før tall»), adgangskravene (godkjente
   øvinger/lab) og den todelte strukturen (fra kap. 0.1).
2. **De to søylene og prioriteringskartet** — temafrekvens-tabellen omgjort til
   tre lesenivåer: **perfekt** (motstand fra modellforsøk Del 2, dispersjon/regime
   Del 4.1–4.2, Morison Del 5), **kunne** (propulsjon/propell Del 3,
   partikkel/trykk Del 4.3, balanse/fasevinkler Del 6), **kjenne** (fluidmekanikk-
   grunnlag Del 1, irregulær sjø Del 7 — merket ikke-skriftlig-eksamen).
3. **Formelark-strategien** — hva som *står på det utdelte 4-siders arket* vs. *må
   kunnes/velges (regime)*, med den konkrete lista fra kap. 0.1.
4. **Sjangerguiden** — de 11 oppgavetypene A–K med løsningsoppskriftene fra
   drillkapitlene (2.5, 5.5) og sjangerverkstedene (8.1, 8.2) i kortform.
5. **Sensorreglene** — «løs symbolsk først», begrunn metodevalg, diskuter
   forutsetninger/forbehold, klassifiser regimet først, riktige enheter/tetthet;
   karakterskille-listen (begrunnet metodevalg, kritisk grafdiskusjon, skråstilt-
   håndtering, fullstendig balanse, presist faseresonnement).
6. **Feilkatalogen** — de 12 typiske feilene fra analysen §5 samlet, hver med
   henvisning til kapitlet som forebygger den (særlig: tall før symbolsk, feil
   regime, ukritisk grafavlesning, feil metodevalg, glemt $C_A$, skråstilt som
   vertikalt, feil Simpson, fasevinkel-forvirring, enhets-/tetthetsfeil, hoppet
   kavitasjon, ufullstendig balanse, bortkastet tid på irregulær sjø).
7. **Studieløp** — anbefalt progresjon: Del 0 → 1 → perfekt-søylene 2 → 4 → 5,
   deretter 3 og 6, Del 7 kun for øvingene, prøver underveis; de fire
   øvingseksamenene de siste ukene under tidspress (240 min, to likt vektede
   oppgaver, vektstyrt tidsbudsjett).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `mas116-hvl` med alle 31
   kapitler (id/number/title/description/estimatedMinutes/topics/competenceGoals/
   prerequisites/linkedChapterId) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`. `sectionNames` fra §2-tabellen (obligatorisk).
2. **Del 0** (kap. 0.1) — etablerer de to søylene, sjanger-katalogen A–K,
   frekvenstallene og formelark-prinsippet som resten refererer til.
3. **Del 1** (kap. 1.1–1.2) — forkunnskapsapparatet (motstandsfysikk + statikk).
4. **Oppgave 1-søylen**: Del 2 (motstand, perfekt) → Del 3 (propulsjon, krever 2.4).
5. **Oppgave 2-søylen**: Del 4 (bølgeteori) → Del 5 (Morison, krever 4.2) → Del 6
   (balanse/fasevinkler, krever 5.4 og 1.2).
6. **Del 7** (irregulær sjø — «bør kjenne», merket ikke-eksamen).
7. **Del 8** (sjangerverksteder + de fire øvingseksamenene til slutt — de
   gjenbruker alt); temaprøvene (§4) legges i respektive delers `*-prove`-kapittel
   (`mas116-hvl-<del>-prove`, chapterNumber `<del>.P`).
8. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
  (escape `"` i norske sitattegn); `npm run build` grønn.
- [ ] **LaTeX**: alle uttrykk i `$...$`/`$$...$$`; `\\` i JSON; ingen unicode-brøker;
  konsistent notasjon ($C_T$, $C_F$, $C_R$, $C_A$, $R_n$, $F_n$, $P_E$, $P_D$,
  $\eta_0/\eta_R/\eta_H$, $\omega^2=gk\tanh kh$, $dF_D/dF_M$, $u'/a'/dz'$, $H/D$, $\lambda/D$).
- [ ] **Formelark-markering**: hvert kapittel skiller eksplisitt «står på arket —
  tren oppslaget» fra «må kunnes/utledes/velges aktivt» (grep etter begge frasene).
- [ ] **Symbolsk-før-tall**: hvert regneeksempel fører det symbolske uttrykket FØR
  tallinnsetting (sensorkrav — grep at fasit-eksemplene har symbolsk oppsett).
- [ ] **Begrunnet metodevalg**: motstandskapitlene (2.3, 2.5, 8.1) begrunner
  ITTC/Froude vs. formfaktor/Prohaska eksplisitt.
- [ ] **Regime først**: bølgekapitlene (4.1–4.2, 5.x) klassifiserer $h/\lambda$ før
  partikkel-/kraftformler velges.
- [ ] **Skråstilt-håndtering**: kap. 5.3 dekker $u'=u\sin\beta-w\cos\beta$,
  $a'=a_x\sin\beta-a_z\cos\beta$, $dz'=dz/\sin\beta$ med egen `warning`.
- [ ] **Simpson (n=2)**: kap. 5.4 viser tre punktverdier, faktorene $(1,4,1)$,
  steglengde og vektorsum av horisontal/vertikal kraft.
- [ ] **Kritisk graf-diskusjon**: kap. 5.1 har `warning` om at endelig vanndyp/
  strøm/delvis neddykket element bryter masse/drag-grafens forutsetninger.
- [ ] **Enheter/tetthet**: sjøvann 1025 vs. ferskvann 999; kW/kN; knop→m/s
  ($1852/3600$) konsekvent — egen `warning` i motstands- og balansekapitlene.
- [ ] **Irregulær sjø merket**: hvert Del 7-kapittel har `warning` «pensum/øvingsstoff,
  ikke skriftlig eksamen»; alle usikre spektral-/statistikkformler merket *(verifiser)*.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip`, Forkunnskaper +
  Symbol-/formelliste-`collapsible`, Typiske feil-`warning`, 2–4 eksempler (siste
  på eksamensnivå), 6–12 øvinger med `solution` + `hints`, repetisjons-`collapsible`;
  drillkapitler (2.5, 5.5, 8.1, 8.2) har løsningsoppskrift + sensor-kommentert case
  + 6–15 oppgaver; øvingseksamener (8.3–8.6) har 2 likt vektede oppgaver + A-løsning.
- [ ] **Quiz-sum ≥ 556 og flashcard-sum ≥ 588** per §3 (autoritativ total).
- [ ] **Prøver**: 4 per temadel 2–6 + 2 for Del 1 + 2 for Del 7 (24 stk) + 4
  øvingseksamener som sammen dekker sjangrene A–K.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, fartøy/konstruksjoner
  og kontekst; ingen formuleringer fra reelle sett eller løsningsforslag
  (skjelettets mønstereksempler er selv omskrivninger og varieres videre).
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
  (200 + innhold), jf. lærdommen om `getChapterMeta`.

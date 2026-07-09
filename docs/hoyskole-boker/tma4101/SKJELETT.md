# Bokskjelett: Flervariabel kalkulus og vektoranalyse (NTNU) — eksamensrettet lærebok

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
> sensorkrav og typiske feil per kapittel er destillert fra `EKSAMENSANALYSE.md`
> (bygget på **TMA4105-arkivet**: ~114 filer, ~52 eksamensavviklinger 2000–2026,
> tilnærmet komplett offisiell fasit fra Institutt for matematiske fag).
> Arketype: **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der
> (teori/drill/øvingseksamen) er obligatoriske og gjentas ikke her.
>
> **⚠️ KODEFORBEHOLD (les før alt annet — gjengis også i kap. 0.1):** Boka dekker
> **flervariabel-kjernen** som TMA4105-arkivet faktisk belegger (partielle
> deriverte, gradient, optimering, multiple integraler, vektoranalyse). Analysen
> dokumenterer at «TMA4105 → TMA4106» er en **ren administrativ kodebytte**:
> TMA4106 tester i praksis ODE/Fourier/lineær algebra/kompleks — et ANNET
> pensum uten arkivbelegg. NTNUs matematikkreform flyttet flervariabelstoffet
> **ned i TMA4101 Matematikk 1**. Derfor bæres boka under slug `tma4101` som en
> **flervariabel kalkulus- og vektoranalysebok**. **(verifiser):** NTNUs
> 2026-emneside var tom og en ny reformrunde (bl.a. TMA4400) pågår — sjekk
> gjeldende kodetilhørighet (TMA4101/TMA4105) mot emnesiden ved ferdigstilling.
> Boka er **faglig solid uansett kode** fordi flervariabel kalkulus er stabilt
> pensum. TMA4106s ODE/Fourier/kompleks-stoff dekkes IKKE her (krever eget arkiv).
>
> **Institusjon: NTNU (Institutt for matematiske fag, IMF).** Nærmeste
> strukturforbilder er `mat112-uib` og `mat1110` (samme fagfamilie, flervariabel
> kalkulus, breddesveipende v3-format) — brukt kun som formmal.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `tma4101` |
| Tittel | **Flervariabel kalkulus og vektoranalyse (NTNU)** *(kodetilhørighet TMA4101/TMA4105 — verifiser mot gjeldende emneside; se kodeforbeholdet)* |
| Institusjon | NTNU — Norges teknisk-naturvitenskapelige universitet (Institutt for matematiske fag) |
| Level | `'Høyskole'` |
| Arketype | Regnefag (matematikk, skriftlig slutteksamen) |
| Antall kapitler | **35** (2 eksamenskart/føringsstandard + 26 tema/drill + 4 vektoranalyse + 3 øvingseksamener) + **32 prøvekapitler** |
| Estimert totaltid | **≈ 1 970 min ≈ 33 timer** for temakapitlene (≈ 2 690 min inkl. øvingseksamenene i Del 9) |
| Quiz totalt | **572** (krav ≥500) |
| Flashcards totalt | **558** (krav ≥500; formel-/teoremrikt fag → over gulvet) |

**Pitch (ett avsnitt):** Emnet vurderes med **én skriftlig skoleeksamen på 4
timer**, bokstavkarakterer A–F, ved NTNUs Institutt for matematiske fag. Fra ca.
2019 la settene om fra 4–7 lange oppgaver til **~10 korte oppgaver (Oppgave
1–10) som til sammen sveiper hele pensum**, hver med et **konkret, eksakt
sluttsvar** (tallverdi, punkt eller funksjon). Boka drilles derfor
**breddesveipende**: mange korte, selvstendige kapitler som hver ender på
eksamensnivå, med rikelig fasit — arkivets store styrke er den nær komplette
fasitmengden fra IMF. Settets ryggrad er **vektoranalyse-trioen Green/Stokes/
divergensteoremet** (minst ett i 51 av 52 sett, **98 %**), tett fulgt av
**multiple integraler** (trippel/volum 88 %, dobbelt/polar 81 %), **flateintegral/
fluks** (83 %), **optimering** (kritiske punkter + annenderiverttest 63 %,
Lagrange 50 %) og **konservative felt/potensial** (62 %). Boka speiler NTNU-IMFs
føringskultur: **eksakt svar, navngitt teorem, konsis utledning, orienterings-/
fortegnskontroll hver gang, og området tegnet før grensene settes.**

**Kritiske stil- og notasjonsregler (gjelder HELE boka):**

1. **Eksakt sluttsvar kreves — aldri desimaltilnærming.** Svar oppgis som
   $\tfrac{64}{3}$, $5\pi$, $\pi ab$ — ikke $21{,}33$. Hver løsning ender i en
   **konkret** tallverdi/punkt/funksjon, ikke bare et oppsett. (Sensornøkkel §4.1;
   feilkatalog §5.8.)
2. **Navngi teoremet eksplisitt** når det bærer argumentet: Greens teorem,
   Stokes' teorem, divergensteoremet (Gauss), fundamentalteoremet for
   kurveintegral, annenderiverttesten, ekstremalverdisetningen. **Valg av
   teorem er ofte selve poenget** — å regne seg fram uten å navngi det bærende
   teoremet gir trekk. (Egen `warning` i alle vektoranalyse-kapitler.)
3. **Orientering/fortegn kontrolleres HVER gang** i Stokes, fluks og
   divergensteoremet: normalvektorens retning og randkurvens orientering
   (høyrehåndsregel). Alle fluks-, Stokes- og Gauss-løsninger fører denne sjekken
   som eget steg; en feil her forplanter seg gjennom hele oppgavekjeden.
   (Egen `warning` i kap. 7.3, 8.2, 8.3, 8.4.)
4. **Tegn området FØR grensene settes.** Integrasjonsgrenser skrives som
   eksplisitte ulikheter for området, med skisse, **før** integralet settes opp;
   ved multiple integraler **løses skjæringen mellom flatene/kurvene først**.
   (Egen prosedyre i kap. 4.1, 4.4, 5.1, 5.4.)
5. **Riktig areal-/volumelement og Jacobi-faktor.** $dA = r\,dr\,d\theta$ (polar);
   $dV = r\,dz\,dr\,d\theta$ (sylinder), $\rho^2\sin\varphi\,d\rho\,d\varphi\,d\theta$
   (kule); generelt variabelskifte med $\left|\dfrac{\partial(x,y)}{\partial(u,v)}\right|$.
   Jacobi-faktoren glemmes aldri.
6. **Retningsvektoren normaliseres** i retningsderivert: $D_{\mathbf u}f =
   \nabla f\cdot\hat{\mathbf u}$ med $|\hat{\mathbf u}|=1$; størst vekst i retning
   $\nabla f/|\nabla f|$ med verdi $|\nabla f|$.
7. **Alternative løsninger honoreres.** Der fasit fører to gyldige veier
   (rand-parametrisering vs. Lagrange; direkte parametrisering vs. potensial;
   geometrisk fluks-snarvei vs. full parametrisering; åpen flate lukket + Gauss
   vs. direkte flateintegral), viser boka begge og markerer «Alternativt:».
8. **Standardnotasjon boka speiler** (fra fasitspråket, analysen §6): $\nabla f$
   gradient; $\nabla F$ som normalvektor til nivåflate; annenderiverttest
   $\Delta = f_{xx}f_{yy} - f_{xy}^2$ med Hesse eksplisitt; Lagrange $\nabla f =
   \lambda\nabla g$; $\operatorname{curl}\mathbf F$, $\operatorname{div}\mathbf F$;
   Green $\oint P\,dx + Q\,dy = \iint(Q_x - P_y)\,dA$; Stokes $\oint \mathbf
   F\cdot d\mathbf r = \iint \operatorname{curl}\mathbf F\cdot\mathbf n\,dS$;
   Gauss $\oiint \mathbf F\cdot\mathbf n\,dS = \iiint \operatorname{div}\mathbf
   F\,dV$; krumning $\kappa = |\mathbf r'\times\mathbf r''|/|\mathbf r'|^3$.
9. **Ærlighet om arkivet og pensum.** Kalibreringen bygger på TMA4105-arkivet
   (2000–2026). Etter reformen kan enkelttemaers vekt ha flyttet seg mellom
   TMA4101 og senere emner — kapittelavgrensninger merkes «(verifiser mot
   gjeldende emneside)». Fordi kode D/E fjernet Rottmann, oppgir nyere sett
   nødvendige spesialformler i oppgaveteksten; **løsninger skrives uten
   forutsetning om formelsamling** (formler memoreres — flashcard-gull).
10. **Målform.** Boka er på **norsk bokmål**; sentrale teoremnavn gis med
    engelsk navn i parentes ved første forekomst (Green's Theorem, Stokes'
    Theorem, Divergence Theorem), slik IMF-settene selv veksler målform.

---

## 2. Makrostruktur

Rekkefølgen følger **faglig avhengighet** (DNA-regelen: temadeler ordnes etter
prerequisites, IKKE etter frekvens); frekvensen styrer i stedet *omfanget*
(nivå 1 «perfekt» → teori + eget drillkapittel; nivå 3 «kjenne» → ett kompakt
kapittel eller en seksjon). Seksjonstitler (blir `sectionNames` i metadata —
vises som «Kapittel N: …» på bokforsiden):

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskartet og føringsstandarden | 2 | Prioriteringsverktøy + kodeforbehold + sensorreglene; kjerne i studieguiden. |
| 1 | Funksjoner av flere variable: partielle deriverte, gradient og retningsderivert | 3 | Fundament for alt; grense/kontinuitet ~33 %, gradient/retningsderivert ~33 % (nivå 2) → 3 teori. |
| 2 | Kjerneregelen, tangentplan og nivåflater | 3 | Tangentplan til nivåflate ~50 % (nivå 2) + kjerneregel som verktøy → 3 teori. |
| 3 | Optimering: kritiske punkter, annenderiverttest og Lagrange | 4 | **Kritiske punkter + annenderiverttest ~63 %** (nivå 1) + rand-optimering + Lagrange ~50 % → 3 teori + drill. |
| 4 | Dobbeltintegral og polarkoordinater | 4 | **Dobbelt/polar ~81 %** (nivå 1) + variabelskifte/Jacobi ~17 % → 3 teori + drill. |
| 5 | Trippelintegral, volum, sylinder- og kulekoordinater | 4 | **Trippel/volum ~88 %** (nivå 1, pensumets mest garanterte integraltema) + sylinder ~44 %, kule ~27 % → 3 teori + drill. |
| 6 | Vektorfelt, kurveintegral og konservative felt | 4 | **Konservative felt/potensial ~62 %** (nivå 1) + kurveintegral (undertelt) + buelengde ~23 %/krumning ~25 % → 3 teori + drill. |
| 7 | Flateintegral og fluks | 4 | **Flateintegral/fluks ~83 %** (nivå 1) — både selvstendig sjanger OG grunnlag for Stokes/Gauss → 3 teori + drill. |
| 8 | Vektoranalyse-teoremene: Green, Stokes og divergensteoremet | 4 | **Det bærende tyngdepunktet: minst ett av Green/Stokes/Gauss i 98 %** (nivå 1) → 3 teori (Green/Gauss/Stokes) + navngi-teoremet-drill. |
| 9 | Eksamenstrening | 3 | 3 komplette øvingseksamener med 10 korte breddesveipende oppgaver hver. |

**Avvik fra DNA-malen og fra oppdragets foreslåtte rekkefølge (dokumentert):**

1. **Flateintegral/fluks (Del 7) er plassert FØR vektoranalyse-teoremene (Del
   8)** — motsatt av rekkefølgen oppdraget skisserte (Green/Stokes/Gauss →
   flateintegral/fluks). Begrunnelse: **Stokes' teorem og divergensteoremet
   KONSUMERER begge et flateintegral/fluksintegral** ($\iint\operatorname{curl}
   \mathbf F\cdot\mathbf n\,dS$ hhv. $\oiint\mathbf F\cdot\mathbf n\,dS$). DNA-ens
   styrende regel er at temadeler ordnes etter faglig avhengighet, ikke frekvens;
   å plassere fluks-maskineriet etter teoremene som bruker det, ville brutt en
   prerequisite. Forbildet `mat1110` gjør samme valg (flateintegral 5.3 før Gauss
   5.4 / Stokes 5.5). Green (2D) trenger ikke fluks og ligger derfor greit først
   i Del 8. Fluks er dessuten en **selvstendig sjanger i 83 %** av settene, ikke
   bare et mellomledd — Del 7 forsvarer plassen på egen frekvens.
2. **Drillkapitlene ligger i temadelene sine** (3.4, 4.4, 5.4, 6.4, 7.4, 8.4) i
   stedet for samlet i siste del: dette er nivå 1-gjengangere som må drilles rett
   etter teorien. Del 9 beholder de tre øvingseksamenene. Tillegg i tråd med
   DNA-ens drillkapittel-mønster.
3. **Føringsstandarden er et eget kapittel i Del 0 (kap. 0.2)**, ikke i siste
   del: eksakt svar, teoremnavning, orienterings-/fortegnskontroll og «tegn
   området først» er bokas viktigste tverrgående regler og settes opp før alt
   annet, slik at hvert temakapittel kan referere til dem.
4. **35 kapitler** ligger midt i DNA-vinduet (20–35). Bredden (ni temadeler fra
   partielle deriverte til Stokes) og det breddesveipende settet forsvarer
   antallet; ingen enkeltdel er oppblåst (maks 4 kapitler per del).
5. **Quizbanken er metode-/teoremvalg-sjekk**, ikke ren repetisjon: hvilket
   teorem bærer argumentet, hvilket koordinatsystem passer, er retningen
   normalisert, er orienteringen riktig, er svaret eksakt. Distraktorene bygges
   på feilkatalogen (§5 i analysen). Tillegg til DNA-en, ikke avvik.
6. **Kodeforbeholdet** (identitet + kap. 0.1) er et tillegg uten motstykke i
   DNA-malen, påkrevd av analysens hovedfunn (arkiv ≠ målemne-kode). Det er
   plassert både i bokidentiteten, i tittelen (`(verifiser)`-note) og som eget
   avsnitt i eksamenskartet.

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–S) refererer til
oppgavetype-katalogen destillert fra analysens §3, gjengitt i bokas Del 0:
**A** grense/kontinuitet i flere variable (fler-sti-test),
**B** partielle deriverte, gradient og retningsderivert (normalisert),
**C** kjerneregelen i flere variable,
**D** tangentplan/linearisering og tangentplan til nivåflate,
**E** kritiske punkter + annenderiverttesten (fri ekstremal),
**F** optimering på lukket, begrenset område (rand),
**G** Lagrange / betinget optimering,
**H** dobbeltintegral (tegn området, polar, bytte rekkefølge),
**I** trippelintegral / volum (sylinder/kule),
**J** variabelskifte / Jacobi-determinant,
**K** buelengde og krumning av romkurve,
**L** kurveintegral (skalarfelt + vektorfelt),
**M** konservativt felt / potensial / fundamentalteorem for kurveintegral,
**N** skalar flateintegral / flateareal,
**O** fluks $\iint\mathbf F\cdot\mathbf n\,dS$,
**P** Greens teorem,
**Q** Gauss' divergensteorem,
**R** Stokes' teorem,
**S** velg og navngi riktig vektoranalyse-teorem (blandet).
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

Prosareferanser i innholdet bruker del-basert form («kap. 4.2», «se kap. 8.3»).

---

### Del 0 — Eksamenskartet og føringsstandarden

#### Kapittel 0.1: Eksamenskartet: fire timer, ti korte oppgaver som sveiper hele pensum

- **id:** `tma4101-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Slik testes flervariabel kalkulus ved NTNU-IMF: én 4-timers skriftlig eksamen med ~10 korte breddesveipende oppgaver, temafrekvensene, kodeforbeholdet, og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele TMA4105-arkivet (~52 sett med fasit, 2000–2026). Skal gjengi: (i) vurderingsformen — én skriftlig skoleeksamen **4 timer**, A–F, målform veksler (nyere sett dels nynorsk); (ii) **strukturskiftet ~2019**: fra 4–7 lange oppgaver til **~10 korte oppgaver (Oppgave 1–10)** som til sammen treffer hele bredden, hver med et **konkret eksakt sluttsvar** — derav bokas breddesveipende drill; kode D/E fjernet Rottmann, så nødvendige spesialformler oppgis i oppgaveteksten (løsninger skrives uten formelsamling); (iii) **temafrekvens-tabellen**: vektoranalyse-teorem (Green/Stokes/Gauss, minst ett) **98 %**, trippelintegral/volum **88 %**, flateintegral/fluks **83 %**, dobbeltintegral/polar **81 %**, divergensteoremet navngitt 73 %, Stokes 71 %, kritiske punkter + annenderiverttest 63 %, konservativt felt/potensial 62 %, Lagrange 50 %, tangentplan til nivåflate 50 %, sylinderkoordinater 44 %, Green i planet 40 %, gradient/retningsderivert 33 %, grense/kontinuitet 33 %, kurveintegral (eksplisitt, undertelt) 29 %, kulekoordinater 27 %, krumning 25 %, buelengde 23 %, Jacobi/variabelskifte 17 %; (iv) at settet **garantert** inneholder minst én vektoranalyse-teorem-oppgave og minst ett multippelt integral; (v) karakterskillene (se §4); (vi) **KODEFORBEHOLDET** som eget avsnitt (se under); (vii) lesestrategi: nivå 1-temaene (vektoranalyse, multiple integraler, optimering, konservative felt, fluks) sikres først.
- **Forkunnskaper (kryssbok):** Ingen i boka. Enkeltvariabel-derivasjon og -integrasjon (kjerneregel, substitusjon, delvis integrasjon), grenseverdier og vektorregning i planet/rommet forutsettes fra Matematikk 1 / VGS: [Grenseverdi](/bok/r1/r1-3-1), [Vektorer i tre dimensjoner](/bok/r2/r2-5-1), [Kryssproduktet](/bok/r2/r2-5-4).
- **Innholdskontrakt:** **Sjangerkatalogen A–S** presenteres som studentens sjekkliste med frekvens per sjanger. **Prognosen for neste sett** (4 timer, ~10 oppgaver): minst én **vektoranalyse-teorem** (Green, Stokes eller Gauss — navngi!), 1–2 **multiple integraler** (dobbelt/polar + trippel/volum med koordinatvalg), ett **flateintegral/fluks**, én **optimering** (kritiske punkter + annenderiverttest, ev. Lagrange/rand), ett **konservativt felt/potensial**, og korte breddeoppgaver (gradient/retningsderivert, tangentplan, buelengde/krumning, grense/kontinuitet). **KODEFORBEHOLDET (eget avsnitt, ordrett tema):** boka dekker flervariabel-kjernen fra TMA4105-arkivet; ved NTNUs reform ligger dette stoffet nå trolig i **TMA4101 Matematikk 1** (verifiser mot gjeldende emneside), mens koden **TMA4106** tar ODE/Fourier/lineær algebra/kompleks — et annet pensum som IKKE dekkes her. NTNUs 2026-emneside var tom og ny reformrunde (TMA4400) pågår → merk kodetilhørighet som `(verifiser)`. Flervariabel kalkulus er stabilt pensum, så boka er faglig solid uansett kodenavn. Karakterskille-listen (fra §4).
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «settet har ~10 likt vektede oppgaver på 4 timer (~24 min/oppgave) — sett opp et tidsbudsjett og avgjør hvilke sjangre du sikrer først (vektoranalyse-teorem + multiple integraler er tryggest og tyngst)» og «hvilke formler MÅ du kunne utenat når det ikke finnes formelsamling (volumelementene, annenderiverttesten, de tre teoremene)?».
- **Typiske feil:** Metafeilene: lese pensum lineært uten frekvensprioritering; tro at et multippelt integral kan settes opp uten å tegne området; feil tidsbudsjett tidlig som stjeler fra de dyre vektoranalyse-sluttoppgavene; anta at boka dekker TMA4106s ODE/Fourier-pensum (det gjør den ikke — kodeforbeholdet).
- **Quiz: 12 · Flashcards: 14** (frekvenser, sjangerkatalog A–S, prognose, kodeforbehold, tidsstrategi)

#### Kapittel 0.2: Føringsstandarden: eksakt svar, navngi teoremet, kontroller orienteringen, tegn området først

- **id:** `tma4101-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** `tma4101-0-1`
- **kapitteltype:** føringsstandard
- **description:** NTNU-IMFs sensorregler samlet ett sted: hvorfor svaret må være eksakt, hvorfor teoremet må navngis, hvordan orientering/fortegn kontrolleres, og prosedyren «tegn området før grensene» — reglene hvert temakapittel viser til.
- **Eksamensbelegg:** Metakapittel destillert fra ~52 fasiter (analysens §4). Fasiten fører konsekvent: eksakt svar, navngitt teorem, konsis utledning, områdebeskrivelse med ulikheter før oppsett, og orienterings-/fortegnssjekk i alt av fluks/Stokes/Gauss. Prioritet: **perfekt** (tverrgående).
- **Forkunnskaper (kryssbok):** Kap. 0.1.
- **Innholdskontrakt:** Fire tverrgående regler med gjennomførte mini-eksempler: **(1) Eksakt svar** — bevar $\pi$, brøk og rot; regnekjeden ender i en konkret verdi (ikke bare oppsett); desimal kun der oppgaven ber om det. **(2) Navngi teoremet** — når Green/Stokes/divergensteoremet/fundamentalteoremet for kurveintegral/annenderiverttesten/ekstremalverdisetningen bærer argumentet, skrives navnet ut; valg av teorem er poenget (`warning`-mal som gjenbrukes i vektoranalyse-kapitlene). **(3) Orientering/fortegn** — høyrehåndsregelen: positiv randorientering mot en flate; normalvektorens retning ($\boldsymbol\phi_u\times\boldsymbol\phi_v$ vs. oppgitt $\mathbf n$); ved feil retning byttes fortegn; sjekken føres som eget steg (`warning`-mal for kap. 7.3, 8.2, 8.3, 8.4). **(4) Tegn området først** — prosedyre: skisse → løs skjæringen mellom flater/kurver → skriv området som eksplisitte ulikheter → velg koordinater → sett opp integralet (prosedyre-mal for kap. 4.1, 5.1). I tillegg: konsis føring (formel framfor lang prosa), riktig areal-/volumelement + Jacobi, normalisert retningsvektor, og at **alternative løsninger honoreres** (to veier markeres «Alternativt:»).
- **Oppgavesjangre:** Tverrgående; 4–5 «rett føringen»-oppgaver der studenten skal (a) gjøre et desimalsvar eksakt, (b) navngi teoremet en gitt regnekjede skjult brukte, (c) avgjøre riktig orientering/fortegn i et fluksoppsett, (d) skrive et gitt område som ulikheter etter skisse.
- **Typiske feil:** Desimaltilnærming der eksakt kreves; regne seg fram uten å navngi teoremet; feil orientering/fortegn på normalvektor (forplanter seg); sette opp integral uten å tegne området/løse skjæringen; glemme Jacobi-/volumelement.
- **Quiz: 12 · Flashcards: 20** (føringsreglene, teoremnavn-bank, orienteringsregelen, «tegn området»-prosedyren — puggeark)

**Prøve-kvote Del 0:** ingen (metakapitler).

---

### Del 1 — Funksjoner av flere variable: partielle deriverte, gradient og retningsderivert *(nivå 2 «kunne»; fundament for hele boka)*

#### Kapittel 1.1: Funksjoner av flere variable: nivåkurver, grenser og kontinuitet

- **id:** `tma4101-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4101-0-2`
- **kapitteltype:** teori
- **description:** Funksjoner $f(x,y)$ og $f(x,y,z)$, nivåkurver og nivåflater, og den flervariable grensen — der fler-sti-testen avgjør (grense/kontinuitet ~33 %, en fast breddeoppgave).
- **Forkunnskaper (kryssbok):** Kap. 0.2; [Grenseverdi](/bok/r1/r1-3-1). Enkeltvariabel-grenser og l'Hôpital forutsettes (Matematikk 1).
- **Eksamensbelegg:** Sjanger A — grense/kontinuitet i flere variable ~33 % (nivå 2). Fasitens grep: nærm deg origo langs $y = kx$ (eller $y=\lambda x^2$) og vis retningsavhengighet → grensen finnes ikke; for eksistens: polar/skvis. Nivåkurver/-flater er dessuten grunnlaget for gradientens geometri (kap. 1.3) og tangentplan (kap. 2.3). Prioritet: **kunne** (fundament: perfekt).
- **Innholdskontrakt:** Funksjon av flere variable, definisjonsmengde, graf; **nivåkurver** $f(x,y)=c$ og **nivåflater** $F(x,y,z)=c$; grense $\lim_{(x,y)\to(a,b)}f(x,y)$ (intuitivt + at ALLE veier må gi samme verdi); **fler-sti-testen** for ikke-eksistens (to stier med ulike grenser); **polarmetoden** ($x=r\cos\theta$, $y=r\sin\theta$, vis grense uavhengig av $\theta$ når $r\to0$) og **skvis** for eksistens; kontinuitet i et punkt. Notasjon: $(x,y)\to(a,b)$; standardfellen $\dfrac{xy}{x^2+y^2}$ (ulik langs $y=x$ vs. akser).
- **Oppgavesjangre:** A. Mønstereksempel: «Avgjør om $\lim_{(x,y)\to(0,0)}\dfrac{x^2y}{x^4+y^2}$ eksisterer.» (Langs $y=x^2$ vs. akser.) Mønstereksempel: «Vis at $\dfrac{x^3}{x^2+y^2}\to0$ med polar.»
- **Typiske feil:** Påstå at grensen eksisterer etter å ha testet bare én sti; velge to stier som tilfeldig gir samme verdi og konkludere eksistens; regnefeil i polaromskrivingen; forveksle nivåkurve og graf.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 1.2: Partielle deriverte og gradienten

- **id:** `tma4101-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4101-1-1`
- **kapitteltype:** teori
- **description:** Partielle deriverte $f_x, f_y, f_z$, høyere ordens deriverte (Clairaut), og gradientvektoren $\nabla f$ — grunnverktøyet som bærer optimering, kjerneregel og alle teoremene.
- **Forkunnskaper (kryssbok):** Kap. 1.1. Enkeltvariabel-derivasjon (produkt-, kvotient-, kjerneregel) forutsettes (Matematikk 1).
- **Eksamensbelegg:** Sjanger B (grunnlag). Partielle deriverte inngår i praktisk talt hvert sett (gradient, kritiske punkter, tangentplan, curl/div). Fasiten regner $f_x, f_y$ rutinemessig og krever korrekt behandling av «den andre variabelen som konstant». Prioritet: **kunne** (grunnlag: perfekt).
- **Innholdskontrakt:** **Partiell derivert** $f_x = \partial f/\partial x$ (deriver mht. $x$, hold øvrige konstant), tilsvarende $f_y, f_z$; geometrisk tolkning (stigning langs akseparallell snitt); **høyere ordens** $f_{xx}, f_{xy}, f_{yx}, f_{yy}$ og **Clairaut/Schwarz-teoremet** ($f_{xy}=f_{yx}$ når begge er kontinuerlige); **gradienten** $\nabla f = (f_x, f_y)$ (2D) / $(f_x, f_y, f_z)$ (3D); notasjonene $\partial/\partial x$, $f_x$, $\nabla f$. Bro: gradienten brukes i kap. 1.3 (retningsderivert), Del 3 (kritiske punkter), kap. 2.3 (normalvektor).
- **Oppgavesjangre:** B. Mønstereksempel: «Finn alle førsteordens partielle deriverte av $f(x,y,z)=x^2y + \sin(yz)$.» Mønstereksempel: «Vis at $f_{xy}=f_{yx}$ for $f=xe^{xy}$.»
- **Typiske feil:** Behandle den andre variabelen som variabel (feil derivasjon); kjerneregelfeil i sammensatte uttrykk; forveksle $f_{xy}$-rekkefølgen (uvesentlig ved Clairaut, men noteres); glemme et ledd i gradienten.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 1.3: Retningsderivert og gradientens geometri

- **id:** `tma4101-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `tma4101-1-2`
- **kapitteltype:** teori
- **description:** Retningsderivert $D_{\mathbf u}f = \nabla f\cdot\hat{\mathbf u}$ med normalisert retning, og gradienten som retning for raskest vekst og normal til nivåkurver — en fast breddeoppgave (~33 %).
- **Forkunnskaper (kryssbok):** Kap. 1.2; [Vektorer i tre dimensjoner](/bok/r2/r2-5-1). Skalarprodukt forutsettes.
- **Eksamensbelegg:** Sjanger B — gradient/retningsderivert ~33 % (nivå 2). Fasitens grep og **emnets hyppigste enkeltfeil**: retningsvektoren MÅ normaliseres før skalarproduktet. Størst vekst i retning $\nabla f/|\nabla f|$ med verdi $|\nabla f|$; $\nabla f\perp$ nivåkurve. Prioritet: **kunne**.
- **Innholdskontrakt:** **Retningsderivert** $D_{\mathbf u}f(\mathbf a) = \nabla f(\mathbf a)\cdot\hat{\mathbf u}$ der $\hat{\mathbf u}=\mathbf u/|\mathbf u|$ (**normalisert** — kjerneregel-warning); tolkning som stigning i retning $\hat{\mathbf u}$; **raskest vekst**: retning $\nabla f/|\nabla f|$, maksimal verdi $|\nabla f|$; raskest fall: motsatt; null endring $\perp\nabla f$ (langs nivåkurven); **gradienten står normalt på nivåkurven/-flaten** (bro til tangentplan kap. 2.3). Notasjon: $\hat{\mathbf u}$ for enhetsvektor, $D_{\mathbf u}f$.
- **Oppgavesjangre:** B. Mønstereksempel: «Finn retningsderiverten til $f=x^2+xy$ i $(1,2)$ i retning $\mathbf v=(3,4)$, og retningen for raskest vekst.» ($\hat{\mathbf u}=(3,4)/5$.) Mønstereksempel: «I hvilken retning avtar $f=e^{x}\cos y$ raskest i $(0,0)$?»
- **Typiske feil:** **Glemt å normalisere** $\mathbf u$ (emnets hyppigste enkeltfeil); oppgi raskest-vekst-verdien som en vektor i stedet for skalaren $|\nabla f|$; forveksle retning for vekst og fall; regne skalarproduktet feil.
- **Quiz: 16 · Flashcards: 18**

**Prøve-kvote Del 1:** 4 prøver (spesifisert i §4).

---

### Del 2 — Kjerneregelen, tangentplan og nivåflater *(nivå 2 «kunne»; tangentplan til nivåflate ~50 %)*

#### Kapittel 2.1: Kjerneregelen i flere variable

- **id:** `tma4101-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4101-1-2`
- **kapitteltype:** teori
- **description:** Kjerneregelen for sammensatte flervariable funksjoner via kjede-diagram — verktøyet bak implisitt derivasjon og senere parametriseringer.
- **Forkunnskaper (kryssbok):** Kap. 1.2. Enkeltvariabel-kjerneregelen forutsettes (Matematikk 1).
- **Eksamensbelegg:** Sjanger C — kjerneregel i flere variable (verktøysjanger, ~20 % eksplisitt men mye brukt). Fasiten bruker den i buelengde/kurve-oppgaver, implisitt derivasjon og for $\frac{d}{dt}f(\mathbf r(t))=\nabla f\cdot\mathbf r'$. Prioritet: **kunne**.
- **Innholdskontrakt:** **Kjerneregelen** for $z=f(x,y)$ med $x=x(t), y=y(t)$: $\dfrac{dz}{dt}=f_x\dfrac{dx}{dt}+f_y\dfrac{dy}{dt}$; generelt via **kjede-diagram** (tegn avhengighetene, summer over hver sti); tilfellet $x=x(s,t), y=y(s,t)$ ($\partial z/\partial s$, $\partial z/\partial t$); **implisitt derivasjon** $F(x,y)=0\Rightarrow dy/dx=-F_x/F_y$; kompaktformen $\frac{d}{dt}f(\mathbf r(t))=\nabla f(\mathbf r(t))\cdot\mathbf r'(t)$ (bro til kurveintegral, Del 6). Notasjon: kjede-diagram, $\partial/\partial s$.
- **Oppgavesjangre:** C. Mønstereksempel: «$z=x^2y$, $x=\cos t$, $y=\sin t$ — finn $dz/dt$.» Mønstereksempel (implisitt): «$x^2+y^2+z^2=1$ definerer $z(x,y)$; finn $z_x$.»
- **Typiske feil:** Glemme et ledd/en sti i kjede-diagrammet; blande $d/dt$ og $\partial/\partial t$; feil fortegn i implisitt derivert; ikke evaluere de indre funksjonene i sluttpunktet.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 2.2: Tangentplan, linearisering og differensial

- **id:** `tma4101-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4101-2-1`
- **kapitteltype:** teori
- **description:** Tangentplanet til en graf $z=f(x,y)$, lineær tilnærming og totaldifferensialen — grafvarianten av tangentplanet, med feilestimat.
- **Forkunnskaper (kryssbok):** Kap. 1.2, 2.1.
- **Eksamensbelegg:** Sjanger D (graf-varianten). Linearisering brukes til tilnærming og feilanslag; tangentplanet til en graf er innfallsporten til nivåflate-varianten (kap. 2.3). Prioritet: **kunne**.
- **Innholdskontrakt:** **Tangentplan til graf** $z=f(x,y)$ i $(a,b)$: $z = f(a,b) + f_x(a,b)(x-a) + f_y(a,b)(y-b)$; **linearisering** $L(x,y)$ som beste lineære tilnærming; **totaldifferensial** $df = f_x\,dx + f_y\,dy$ til feilanslag ($\Delta f\approx df$); deriverbarhet (differensierbarhet) som eksistens av tangentplan (kort, kjennskap). Notasjon: $L(x,y)$, $df$.
- **Oppgavesjangre:** D. Mønstereksempel: «Finn tangentplanet til $z=x^2+y^2$ i $(1,2)$.» Mønstereksempel: «Bruk linearisering til å anslå $\sqrt{(3{,}98)^2+(3{,}01)^2}$.»
- **Typiske feil:** Bruke tangentplan-formelen for graf på en nivåflate (feil variant); evaluere $f_x, f_y$ i feil punkt; fortegnsfeil i $(x-a)$; blande $df$ og $\Delta f$.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 2.3: Tangentplan til nivåflate og gradienten som normalvektor

- **id:** `tma4101-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** `tma4101-2-2`
- **kapitteltype:** teori
- **description:** Gradienten $\nabla F$ som normalvektor til nivåflaten $F(x,y,z)=c$, tangentplanets likning, og parallellitet med et gitt plan — den hyppige (~50 %) nivåflate-oppgaven.
- **Forkunnskaper (kryssbok):** Kap. 1.3, 2.2; [Vektorer i tre dimensjoner](/bok/r2/r2-5-1).
- **Eksamensbelegg:** Sjanger D — tangentplan til nivåflate ~50 % (nivå 2). Fasitens grep: $\nabla F(a,b,c)$ er normalvektor; tangentplan $\nabla F\cdot(x-a,y-b,z-c)=0$; parallellitet med gitt plan $\Leftrightarrow \nabla F = \lambda\mathbf n$. Prioritet: **kunne**.
- **Innholdskontrakt:** For nivåflate $F(x,y,z)=c$: **$\nabla F(a,b,c)$ er normalvektor** til flaten i punktet; **tangentplanets likning** $F_x(a,b,c)(x-a)+F_y(a,b,c)(y-b)+F_z(a,b,c)(z-c)=0$; **normallinje** (parametrisk gjennom punktet i retning $\nabla F$); **parallellitet/vinkler**: tangentplan parallelt med gitt plan $\Leftrightarrow \nabla F\parallel$ planets normal ($\nabla F=\lambda\mathbf n$); vinkel mellom flater via normalene. Koblingen til grafvarianten: $z=f(x,y)\Leftrightarrow F=f(x,y)-z=0$, $\nabla F=(f_x,f_y,-1)$. Notasjon: $\nabla F$ som normal.
- **Oppgavesjangre:** D. Mønstereksempel: «Finn tangentplanet til $x^2+2y^2+3z^2=6$ i $(1,1,1)$.» Mønstereksempel: «I hvilke punkter på $z=x^2+y^2$ er tangentplanet parallelt med $2x+2y-z=0$?»
- **Typiske feil:** Forveksle graf- og nivåflate-formelen; glemme å evaluere $\nabla F$ i punktet før planlikningen; feil håndtering av parallellitetsbetingelsen ($\nabla F=\lambda\mathbf n$); regnefeil i skalarproduktet.
- **Quiz: 16 · Flashcards: 18**

**Prøve-kvote Del 2:** 4 prøver (spesifisert i §4).

---

### Del 3 — Optimering: kritiske punkter, annenderiverttest og Lagrange *(prioritet: PERFEKT — kritiske punkter + annenderiverttest ~63 %)*

#### Kapittel 3.1: Kritiske punkter og annenderiverttesten

- **id:** `tma4101-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4101-1-2`
- **kapitteltype:** teori
- **description:** Fri ekstremal: løs $\nabla f=\mathbf 0$ for kandidater, og klassifiser med annenderiverttesten $\Delta=f_{xx}f_{yy}-f_{xy}^2$ — settets hyppigste optimeringssjanger (~63 %).
- **Forkunnskaper (kryssbok):** Kap. 1.2.
- **Eksamensbelegg:** Sjanger E — kritiske punkter + annenderiverttest ~63 % (nivå 1). Fasiten setter **alltid opp $\Delta$ (Hesse) eksplisitt** før konklusjon, klassifiserer hvert kritisk punkt separat, og bruker den korrekte tolkningen ved $\Delta=0$ (uavgjort). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Kritisk punkt**: $\nabla f=\mathbf 0$ (og punkter der $\nabla f$ ikke finnes); **annenderiverttesten** (Second Derivative Test) med **diskriminanten** $\Delta=f_{xx}f_{yy}-f_{xy}^2$ evaluert i det kritiske punktet: $\Delta>0, f_{xx}>0\Rightarrow$ lokalt minimum; $\Delta>0, f_{xx}<0\Rightarrow$ lokalt maksimum; $\Delta<0\Rightarrow$ **sadelpunkt**; $\Delta=0\Rightarrow$ **uavgjort** (annen metode); **Hesse-matrisen** $H=\begin{pmatrix}f_{xx}&f_{xy}\\f_{xy}&f_{yy}\end{pmatrix}$, $\Delta=\det H$. Løs $\nabla f=\mathbf0$ som likningssystem (flere kandidater). Notasjon: $\Delta$, Hesse eksplisitt.
- **Oppgavesjangre:** E. Mønstereksempel: «Finn og klassifiser alle kritiske punkter til $f=x^3-3xy+y^2$.» (Fire kandidater; $\Delta$ i hver.) Mønstereksempel: «Klassifiser kritiske punkter til $f=x^2y-xy$.»
- **Typiske feil:** Konkludere uten å sette opp $\Delta$; glemme kandidater (ufullstendig løsning av $\nabla f=\mathbf0$); feil konklusjon ved $\Delta=0$ (påstå ekstremum); forveksle max/min via feil fortegn på $f_{xx}$; regnefeil i $f_{xy}$.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 3.2: Global optimering på lukket, begrenset område

- **id:** `tma4101-3-2` · **number:** 3.2 · **estimatedMinutes:** 60 · **prerequisites:** `tma4101-3-1`
- **kapitteltype:** teori
- **description:** Absolutt maks/min på et lukket, begrenset område: indre kritiske punkter + parametrisér hvert randstykke og optimér énvariabelt — med ekstremalverdisetningen som eksistensgaranti.
- **Forkunnskaper (kryssbok):** Kap. 3.1.
- **Eksamensbelegg:** Sjanger F. Nyere sett kombinerer indre kritiske punkter + rand-optimering på lukket område. Fasitens grep: **ekstremalverdisetningen** garanterer eksistens ($f$ kontinuerlig på lukket + begrenset), så alle kandidater (indre + hvert randstykke + hjørner) sammenlignes til slutt. **Alle randstykker sjekkes hver for seg** — ikke bare hjørnene. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Ekstremalverdisetningen** (Extreme Value Theorem): kontinuerlig $f$ på lukket, begrenset $D$ antar globalt maks og min; **prosedyre**: (1) indre kritiske punkter i $D$; (2) **parametrisér hvert randstykke** og reduser til énvariabel optimering (sjekk også randstykkets endepunkter/hjørner); (3) samle alle kandidatverdier og velg største/minste; eksistensen påberopes FØR kandidatjakt. Notasjon: $D$ lukket og begrenset uttales eksplisitt.
- **Oppgavesjangre:** F. Mønstereksempel: «Finn absolutt maks og min av $f=x^2+y^2-xy$ på trekanten med hjørner $(0,0),(2,0),(0,2)$.» (Indre + tre randstykker + hjørner.) Mønstereksempel: «Optimér $f=xy$ på disken $x^2+y^2\le1$.»
- **Typiske feil:** **Kun indre kritiske punkter** — hopper over randen (eller sjekker bare hjørnene — emnets nest hyppigste feil); glemme randstykkenes endepunkter; ikke påberope ekstremalverdisetningen (eksistens); regnefeil i parametriseringen av et randstykke.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 3.3: Lagranges multiplikatorer

- **id:** `tma4101-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** `tma4101-3-1`
- **kapitteltype:** teori
- **description:** Betinget optimering under én bindingslikning: $\nabla f=\lambda\nabla g$ pluss $g=c$ — Lagrange-metoden, ofte som alternativ til rand-parametrisering (~50 %).
- **Forkunnskaper (kryssbok):** Kap. 3.1, 1.2.
- **Eksamensbelegg:** Sjanger G — Lagrange ~50 % (nivå 1/2). Fasiten viser ofte **både** rand-parametrisering og Lagrange for samme oppgave (alternative løsninger honoreres). Prioritet: **perfekt** (grunnleggende), **kunne** (marginalt lavere frekvens enn E).
- **Innholdskontrakt:** **Lagranges multiplikatormetode**: ekstremal av $f$ under bibetingelsen $g(x,y)=c$ oppfyller $\nabla f=\lambda\nabla g$ sammen med $g=c$; oppsett av likningssystemet (3 likninger, ukjente $x,y,\lambda$); løsning ved eliminasjon av $\lambda$; sammenlign $f$-verdiene i alle kandidatpunkter; eksistens via ekstremalverdisetningen på den (lukkede, begrensede) bindingsmengden; kobling til rand-optimering (Lagrange = rand behandlet uten eksplisitt parametrisering). To bindingslikninger nevnes kort (kjennskap). Notasjon: $\lambda$ multiplikator.
- **Oppgavesjangre:** G. Mønstereksempel: «Finn maks og min av $f=xy$ på ellipsen $x^2/4+y^2=1$ med Lagrange.» Mønstereksempel: «Korteste avstand fra origo til linja $x+2y=5$ (Lagrange).»
- **Typiske feil:** Glemme bibetingelsen $g=c$ som egen likning; dele på $\lambda$ eller en variabel som kan være null (tapte løsninger); tolke et Lagrange-punkt som ekstremum uten å sammenligne verdiene/begrunne eksistens; regnefeil i eliminasjonen.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 3.4: Drill: optimering — fri, betinget og på rand

- **id:** `tma4101-3-4` · **number:** 3.4 · **estimatedMinutes:** 90 · **prerequisites:** `tma4101-3-3`
- **kapitteltype:** drill
- **description:** Hele optimeringsrepertoaret i ett beslutningstre: gjenkjenn om oppgaven er fri, på lukket område eller betinget, velg riktig metode, og før eksistens/klassifisering slik sensor krever.
- **Eksamensbelegg:** Sjangrene E (~63 %), F og G (~50 %) — ofte flettet i én oppgave (indre kritiske + rand, eller Lagrange som alternativ). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Beslutningstre**: (1) ingen betingelse, hele planet → fri ekstremal ($\nabla f=\mathbf0$ + $\Delta$); (2) lukket, begrenset område → indre kritiske + hvert randstykke + hjørner + ekstremalverdisetningen; (3) én bindingslikning → Lagrange (eller parametriser bindingen). **Gjennomregnet eksamenscase** (lukket område med indre kritiske punkter + rand behandlet både ved parametrisering og Lagrange) med sensor-margnotater om eksistens som eget steg, at $\Delta$ settes opp eksplisitt, at alle randstykker sjekkes, og eksakt svar. 10–14 oppgaver på eksamensnivå (fri, lukket område, Lagrange, blandet), alle med full begrunnelse.
- **Oppgavesjangre:** E, F, G. Mønstereksempel: «Finn globalt maks/min av $f=x^2+2y^2-x$ på disken $x^2+y^2\le4$ — indre kritiske punkter + rand (både parametrisering og Lagrange).»
- **Typiske feil:** Alle fellene fra 3.1–3.3 blandet; hopper over randen; $\Delta$ ikke satt opp; eksistens ikke begrunnet; Lagrange-punkt tolket som ekstremum uten verdisammenligning; desimalsvar.
- **Quiz: 22 · Flashcards: 10**

**Prøve-kvote Del 3:** 4 prøver (spesifisert i §4).

---

### Del 4 — Dobbeltintegral og polarkoordinater *(prioritet: PERFEKT — dobbelt/polar ~81 %)*

#### Kapittel 4.1: Dobbeltintegral over generelle områder — tegn området først

- **id:** `tma4101-4-1` · **number:** 4.1 · **estimatedMinutes:** 60 · **prerequisites:** `tma4101-1-1`
- **kapitteltype:** teori
- **description:** Dobbeltintegralet over rektangel og generelle områder, itererte integraler, og disiplinen med å tegne området og lese av grensene før oppsett — bytte rekkefølge når det trengs.
- **Forkunnskaper (kryssbok):** Kap. 0.2; [Bestemt integral som grenseverdi](/bok/r2/r2-2-4), [Analysens fundamentalsetning](/bok/r2/r2-2-5). Enkeltvariabel-integrasjonsteknikk forutsettes.
- **Eksamensbelegg:** Sjanger H — dobbeltintegral ~81 % (nivå 1). Fasitens grep (og sensornøkkel §4.4): **tegn området, les av grensene som eksplisitte ulikheter, bytt rekkefølge ved behov**. Prioritet: **perfekt**.
- **Innholdskontrakt:** Dobbeltintegral $\iint_D f\,dA$ som volum/grense av Riemann-summer; **iterert integral** over rektangel (Fubini) og over **type I/II-område** ($a\le x\le b$, $g_1(x)\le y\le g_2(x)$, og omvendt); **«tegn området først»-prosedyren** (skisse → skjæring av grensekurver → ulikheter → integral); **bytte integrasjonsrekkefølge** (tegn om, les nye grenser — nødvendig når det indre integralet ikke lar seg regne, f.eks. $\int\int e^{-y^2}$); areal $= \iint_D 1\,dA$; linearitet og additivitet over deldomener. Notasjon: $\iint_D$, type I/II.
- **Oppgavesjangre:** H. Mønstereksempel: «Regn $\iint_D xy\,dA$ over området avgrenset av $y=x$ og $y=x^2$.» (Løs skjæring $x=0,1$.) Mønstereksempel (bytte rekkefølge): «Regn $\int_0^1\int_x^1 e^{-y^2}\,dy\,dx$ ved å bytte rekkefølge.»
- **Typiske feil:** **Feil grenser fordi området ikke ble tegnet** (emnets hyppigste integralfeil); ikke løse skjæringen mellom grensekurvene; bytte rekkefølge uten å tegne om; konstant grense der den skal være en funksjon; desimalsvar.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 4.2: Polarkoordinater i dobbeltintegral

- **id:** `tma4101-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4101-4-1`
- **kapitteltype:** teori
- **description:** Overgang til polarkoordinater med areaelementet $dA=r\,dr\,d\theta$ — standardgrepet ved sirkelsymmetri, der den ekstra $r$-faktoren aldri glemmes.
- **Forkunnskaper (kryssbok):** Kap. 4.1.
- **Eksamensbelegg:** Sjanger H (polar-varianten) — del av dobbelt/polar ~81 %. Fasiten går til polar ved sirkulær/radiell symmetri; standardintegralet $\iint e^{-(x^2+y^2)}$ over disk/plan. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Polarkoordinater** $x=r\cos\theta, y=r\sin\theta$, $x^2+y^2=r^2$; **areaelementet** $dA=r\,dr\,d\theta$ (den ekstra $r$-faktoren — warning); grenser for sirkel, sektor, ring, kardioide/rose ($r=f(\theta)$); når polar velges (sirkelsymmetri, integrand i $x^2+y^2$); standardcaset $\iint_D e^{-(x^2+y^2)}\,dA$; areal $=\iint r\,dr\,d\theta$. Bro til uegentlig integral (Gauss-integralet, kjennskap) og sylinderkoordinater (kap. 5.2). Notasjon: $r, \theta$, $dA=r\,dr\,d\theta$.
- **Oppgavesjangre:** H. Mønstereksempel: «Regn $\iint_D (x^2+y^2)\,dA$ over disken $x^2+y^2\le9$ i polar.» Mønstereksempel: «Areal innenfor kardioiden $r=1+\cos\theta$.»
- **Typiske feil:** **Glemt $r$-faktoren** i $dA$; feil $\theta$-grenser (halv vs. hel omdreining); feil $r$-grense for $r=f(\theta)$-områder; ikke bytte til polar når integranden roper på det; desimalsvar.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 4.3: Generelt variabelskifte og Jacobi-determinanten

- **id:** `tma4101-4-3` · **number:** 4.3 · **estimatedMinutes:** 55 · **prerequisites:** `tma4101-4-2`
- **kapitteltype:** teori
- **description:** Substitusjon i dobbeltintegral via en generell $(u,v)$-transformasjon med Jacobi-determinanten som areaelement — verktøyet når hverken kartesisk eller polar passer (~17 %).
- **Forkunnskaper (kryssbok):** Kap. 4.1, 2.1; [Variabelskifte (substitusjon)](/bok/r2/r2-3-1).
- **Eksamensbelegg:** Sjanger J — variabelskifte/Jacobi ~17 % (nivå 3, men fast «bredde-poeng»). Fasitens grep: velg $(u,v)$ som forenkler integrand eller område, regn $\frac{\partial(x,y)}{\partial(u,v)}$, transformer integrand + grenser + areaelement. Prioritet: **kjenne**.
- **Innholdskontrakt:** **Jacobi-determinanten** $\dfrac{\partial(x,y)}{\partial(u,v)}=\det\begin{pmatrix}x_u&x_v\\y_u&y_v\end{pmatrix}$; variabelskifteformelen $\iint_D f\,dx\,dy=\iint_{D'} f(x(u,v),y(u,v))\left|\dfrac{\partial(x,y)}{\partial(u,v)}\right|du\,dv$; **absoluttverdi** på Jacobi-faktoren; polar som spesialtilfelle ($J=r$); valg av $(u,v)$ etter parallellogram-/skjeve områder eller integrand ($u=x+y, v=x-y$). Notasjon: $\frac{\partial(x,y)}{\partial(u,v)}$.
- **Oppgavesjangre:** J. Mønstereksempel: «Regn $\iint_D (x+y)\,dA$ over parallellogrammet med sider $x+y=0,2$ og $x-y=0,1$ via $u=x+y, v=x-y$.» Mønstereksempel: «Vis at polar gir $J=r$.»
- **Typiske feil:** **Glemme absoluttverdien** på Jacobi-faktoren; regne $\frac{\partial(u,v)}{\partial(x,y)}$ i stedet (invers); ikke transformere grensene til $(u,v)$-området; regnefeil i determinanten.
- **Quiz: 14 · Flashcards: 16**

#### Kapittel 4.4: Drill: dobbeltintegral — tegn, velg koordinater, regn eksakt

- **id:** `tma4101-4-4` · **number:** 4.4 · **estimatedMinutes:** 85 · **prerequisites:** `tma4101-4-3`
- **kapitteltype:** drill
- **description:** Beslutningstreet for dobbeltintegral: tegn området, avgjør koordinatsystem (kartesisk/polar/generelt skifte), sett opp med riktig areaelement, og regn eksakt.
- **Eksamensbelegg:** Sjanger H (~81 %) + J. 1–2 dobbeltintegral i praktisk talt hvert sett. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Beslutningstre**: (1) tegn området, løs skjæringer; (2) symmetri/integrand → koordinater (kartesisk type I/II, polar ved $x^2+y^2$, generelt skifte ved skjevt område); (3) riktig areaelement ($dA$, $r\,dr\,d\theta$, $|J|\,du\,dv$); (4) integrer innerst først, bytt rekkefølge om nødvendig; (5) eksakt svar. **Gjennomregnet eksamenscase** (område mellom to kurver som krever polar, med skjæring løst) med sensor-margnotater. 10–14 oppgaver: minst én kurveavgrenset kartesisk, én polar, én med bytte av rekkefølge, én generelt variabelskifte.
- **Oppgavesjangre:** H, J. Mønstereksempel: «Regn $\iint_D \dfrac{1}{1+x^2+y^2}\,dA$ over ringen $1\le x^2+y^2\le4$.» (Polar.)
- **Typiske feil:** Fellene fra 4.1–4.3 blandet; feil koordinatvalg (tungt integral); glemt $r$-/Jacobi-faktor; grenser uten skisse; desimalsvar.
- **Quiz: 22 · Flashcards: 10**

**Prøve-kvote Del 4:** 4 prøver (spesifisert i §4).

---

### Del 5 — Trippelintegral, volum, sylinder- og kulekoordinater *(prioritet: PERFEKT — trippel/volum ~88 %)*

#### Kapittel 5.1: Trippelintegral i kartesiske koordinater og volum

- **id:** `tma4101-5-1` · **number:** 5.1 · **estimatedMinutes:** 60 · **prerequisites:** `tma4101-4-1`
- **kapitteltype:** teori
- **description:** Trippelintegralet over romlegemer, volum som $\iiint 1\,dV$, og disiplinen med å løse skjæringen mellom flatene og beskrive legemet med ulikheter før oppsett.
- **Forkunnskaper (kryssbok):** Kap. 4.1.
- **Eksamensbelegg:** Sjanger I — trippelintegral/volum ~88 % (nivå 1, pensumets mest garanterte integraltema). Fasitens grep: **løs skjæringen mellom flatene først**, beskriv legemet med ulikheter, integrer innerst først. Prioritet: **perfekt**.
- **Innholdskontrakt:** Trippelintegral $\iiint_E f\,dV$ over boks og generelt legeme; **volum** $=\iiint_E 1\,dV$; projeksjon ned på et koordinatplan → øvre/nedre flate ($z$ mellom to flater over et 2D-område); **«løs skjæringen først»** (to flater møtes → grensekurve/-flate); iterert integrasjon i riktig rekkefølge; masse/tetthet $\iiint \rho\,dV$ som kontekst (kjennskap). Notasjon: $\iiint_E$, $dV=dz\,dy\,dx$.
- **Oppgavesjangre:** I. Mønstereksempel: «Volumet av legemet avgrenset av $z=x^2+y^2$ og $z=4$.» (Løs skjæring $x^2+y^2=4$.) Mønstereksempel: «Regn $\iiint_E z\,dV$ over tetraederet med hjørner i origo og aksepunktene.»
- **Typiske feil:** Ikke løse skjæringen mellom flatene før oppsett; feil øvre/nedre flate; feil projeksjonsområde; iterasjonsrekkefølge som gjør integralet uløselig; desimalsvar.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 5.2: Sylinderkoordinater

- **id:** `tma4101-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4101-5-1`
- **kapitteltype:** teori
- **description:** Sylinderkoordinater med volumelementet $dV=r\,dz\,dr\,d\theta$ — førstevalget ved sirkulær symmetri om en akse (kjegle, paraboloide, sylinder), ~44 %.
- **Forkunnskaper (kryssbok):** Kap. 5.1, 4.2.
- **Eksamensbelegg:** Sjanger I (sylinder-varianten) — sylinderkoordinater ~44 %. Fasiten velger sylinder ved sirkulær symmetri om $z$-aksen; husker $r$-faktoren i $dV$. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Sylinderkoordinater** $x=r\cos\theta, y=r\sin\theta, z=z$; **volumelement** $dV=r\,dz\,dr\,d\theta$; når det velges (sirkulær symmetri om en akse: kjegle, paraboloide, sylinder); grenser leses fra legemet ($z$ mellom to flater, $r$ og $\theta$ fra projeksjonen); **faktorisering** når integranden separerer i $r$-, $\theta$- og $z$-del. Notasjon: $(r,\theta,z)$, $dV=r\,dz\,dr\,d\theta$.
- **Oppgavesjangre:** I. Mønstereksempel: «Volumet innenfor sylinderen $x^2+y^2=1$, over $z=0$ og under $z=4-x^2-y^2$.» Mønstereksempel: «$\iiint_E z\,dV$ over kjeglen $z=\sqrt{x^2+y^2}$ opp til $z=2$.»
- **Typiske feil:** **Glemt $r$-faktoren** i $dV$; feil $r$-grense (flateskjæring ikke løst); blande sylinder- og kulevolumelement; feil $\theta$-intervall; desimalsvar.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 5.3: Kulekoordinater

- **id:** `tma4101-5-3` · **number:** 5.3 · **estimatedMinutes:** 55 · **prerequisites:** `tma4101-5-1`
- **kapitteltype:** teori
- **description:** Kulekoordinater med volumelementet $dV=\rho^2\sin\varphi\,d\rho\,d\varphi\,d\theta$ — førstevalget ved kulesymmetri (kuler, kuleskall, iskrembøtter), ~27 %.
- **Forkunnskaper (kryssbok):** Kap. 5.1.
- **Eksamensbelegg:** Sjanger I (kule-varianten) — kulekoordinater ~27 %. Fasiten velger kule ved kulesymmetri; husker $\rho^2\sin\varphi$-faktoren. Prioritet: **kunne** (grunnleggende: perfekt).
- **Innholdskontrakt:** **Kulekoordinater** $x=\rho\sin\varphi\cos\theta, y=\rho\sin\varphi\sin\theta, z=\rho\cos\varphi$, $\rho^2=x^2+y^2+z^2$; **volumelement** $dV=\rho^2\sin\varphi\,d\rho\,d\varphi\,d\theta$; grenser ($\rho$ radiell, $\varphi\in[0,\pi]$ polvinkel, $\theta\in[0,2\pi]$ asimut); når det velges (kuler, kuleskall, kjegle-avgrenset «iskrembøtte»); faktorisering ved separabel integrand; volum av kule $=\tfrac43\pi R^3$ som sjekk. Notasjon: $(\rho,\varphi,\theta)$, $dV=\rho^2\sin\varphi\,d\rho\,d\varphi\,d\theta$.
- **Oppgavesjangre:** I. Mønstereksempel: «Regn $\iiint_E (x^2+y^2+z^2)\,dV$ over kulen $\rho\le a$.» Mønstereksempel: «Volumet av iskrembøtta mellom kjeglen $\varphi=\pi/4$ og kulen $\rho=2$.»
- **Typiske feil:** **Glemt $\rho^2\sin\varphi$-faktoren**; forveksle $\varphi$ (polvinkel) og $\theta$ (asimut); feil $\varphi$-grense for kjegle-avgrensning; blande sylinder/kule; desimalsvar.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 5.4: Drill: trippelintegral/volum — velg koordinater etter geometri

- **id:** `tma4101-5-4` · **number:** 5.4 · **estimatedMinutes:** 90 · **prerequisites:** `tma4101-5-3`
- **kapitteltype:** drill
- **description:** Beslutningstreet for trippelintegral: løs skjæringen, avgjør koordinatsystem etter symmetri, sett opp med riktig volumelement, faktoriser og regn eksakt.
- **Eksamensbelegg:** Sjanger I (~88 %). Minst ett trippelintegral/volum i nesten hvert sett. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Beslutningstre**: (1) løs skjæringen mellom flatene; (2) symmetri → koordinater (kartesisk boks/prisme, sylinder ved akse-symmetri, kule ved kulesymmetri); (3) riktig volumelement ($dV$, $r\,dz\,dr\,d\theta$, $\rho^2\sin\varphi\,d\rho\,d\varphi\,d\theta$); (4) beskriv legemet med ulikheter; (5) integrer innerst først, faktoriser; (6) eksakt svar. **Gjennomregnet eksamenscase** (legeme der to flater møtes → sylinder, faktorisert) med sensor-margnotater om skjæring, riktig volumelement og eksakt svar. 10–15 oppgaver: minst én kartesisk, én sylinder, én kule, én der koordinatvalget er poenget.
- **Oppgavesjangre:** I. Mønstereksempel: «Volumet avgrenset over av kulen $x^2+y^2+z^2=4$ og under av kjeglen $z=\sqrt{x^2+y^2}$.» (Kule.)
- **Typiske feil:** Fellene fra 5.1–5.3 blandet; feil koordinatvalg (unødig tungt); glemt volumelement-faktor; skjæring ikke løst; desimalsvar.
- **Quiz: 22 · Flashcards: 10**

**Prøve-kvote Del 5:** 4 prøver (spesifisert i §4).

---

### Del 6 — Vektorfelt, kurveintegral og konservative felt *(prioritet: PERFEKT — konservative felt/potensial ~62 %)*

#### Kapittel 6.1: Parametriserte romkurver: buelengde og krumning

- **id:** `tma4101-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4101-2-1`
- **kapitteltype:** teori
- **description:** Kurver $\mathbf r(t)$ i rommet, buelengde $L=\int|\mathbf r'|\,dt$ og krumning $\kappa=|\mathbf r'\times\mathbf r''|/|\mathbf r'|^3$ — grunnlaget for kurveintegral, med de faste trig-forenklingene.
- **Forkunnskaper (kryssbok):** Kap. 2.1; [Vektorer i tre dimensjoner](/bok/r2/r2-5-1), [Kryssproduktet](/bok/r2/r2-5-4).
- **Eksamensbelegg:** Sjanger K — buelengde ~23 %, krumning ~25 % (nivå 3, faste bredde-oppgaver). Fasitens grep: forenkle $|\mathbf r'|$ med trig-identitet før integrasjon; polar buelengde $L=\int\sqrt{r^2+(dr/d\theta)^2}\,d\theta$ (formel oppgis i nyere sett). Prioritet: **kunne**.
- **Innholdskontrakt:** Parametrisert kurve $\mathbf r(t)=(x(t),y(t),z(t))$; hastighet $\mathbf r'$, fart $|\mathbf r'|$; **buelengde** $L=\int_a^b|\mathbf r'(t)|\,dt$; **polar buelengde** $L=\int\sqrt{r^2+(dr/d\theta)^2}\,d\theta$; **krumning** $\kappa=\dfrac{|\mathbf r'\times\mathbf r''|}{|\mathbf r'|^3}$ (og $\kappa=|y''|/(1+y'^2)^{3/2}$ for graf); ekstremér $\kappa$ for største/minste krumning; enhetstangent $\mathbf T=\mathbf r'/|\mathbf r'|$ (kjennskap). Notasjon: $\mathbf r(t)$, $\kappa$.
- **Oppgavesjangre:** K. Mønstereksempel: «Buelengden av $\mathbf r(t)=(\cos t,\sin t, t)$ for $t\in[0,2\pi]$.» ($|\mathbf r'|=\sqrt2$.) Mønstereksempel: «Finn punktet på $y=x^2$ med størst krumning.»
- **Typiske feil:** Ikke forenkle $|\mathbf r'|$ med trig-identitet før integrasjon (uløselig integral); glemme kvadratrot i farten; feil potens i krumningsformelen ($|\mathbf r'|^3$); regnefeil i kryssproduktet.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 6.2: Vektorfelt og kurveintegral

- **id:** `tma4101-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4101-6-1`
- **kapitteltype:** teori
- **description:** Vektorfelt $\mathbf F$, kurveintegral av skalarfelt $\int_C f\,ds$ og av vektorfelt (arbeid) $\int_C \mathbf F\cdot d\mathbf r$ — den direkte parametriseringsmetoden, grunnlaget for Green og Stokes.
- **Forkunnskaper (kryssbok):** Kap. 6.1.
- **Eksamensbelegg:** Sjanger L — kurveintegral ~29 % eksplisitt (undertelt; inngår i alt av Green/Stokes/konservative felt). Fasiten identifiserer feltet, parametriserer kurven, og reduserer til et énvariabelt integral. Prioritet: **perfekt** (grunnlag for Del 7–8).
- **Innholdskontrakt:** **Vektorfelt** $\mathbf F(x,y)=(P,Q)$ / $\mathbf F(x,y,z)=(P,Q,R)$; **kurveintegral av skalarfelt** $\int_C f\,ds=\int_a^b f(\mathbf r(t))|\mathbf r'(t)|\,dt$ (masse/lengde); **kurveintegral av vektorfelt (arbeid)** $\int_C \mathbf F\cdot d\mathbf r=\int_a^b \mathbf F(\mathbf r(t))\cdot\mathbf r'(t)\,dt$; orientering av kurven (fortegn snur ved motsatt retning); stykkevis glatte kurver (summer over stykkene); $\oint$ for lukket kurve. Bro: konservative felt (kap. 6.3), Green (kap. 8.1), Stokes (kap. 8.3). Notasjon: $\int_C\mathbf F\cdot d\mathbf r$, $ds=|\mathbf r'|\,dt$.
- **Oppgavesjangre:** L. Mønstereksempel: «Regn $\int_C \mathbf F\cdot d\mathbf r$ for $\mathbf F=(y,x^2)$ langs $\mathbf r(t)=(t,t^2)$, $t\in[0,1]$.» Mønstereksempel (skalar): «Masse av tråden $\mathbf r(t)=(\cos t,\sin t)$ med tetthet $f=x^2$.»
- **Typiske feil:** Glemme farten $|\mathbf r'|$ i skalarintegralet; feil orientering (fortegn); ikke evaluere feltet langs kurven ($\mathbf F(\mathbf r(t))$); regnefeil i skalarproduktet $\mathbf F\cdot\mathbf r'$.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 6.3: Konservative felt, potensial og fundamentalteoremet for kurveintegral

- **id:** `tma4101-6-3` · **number:** 6.3 · **estimatedMinutes:** 60 · **prerequisites:** `tma4101-6-2`
- **kapitteltype:** teori
- **description:** Konservative felt: test $\partial Q/\partial x=\partial P/\partial y$ (curl $=\mathbf0$), finn potensialet $\varphi$ med $\nabla\varphi=\mathbf F$, og bruk $\int_C\mathbf F\cdot d\mathbf r=\varphi(\text{slutt})-\varphi(\text{start})$ — fasitens foretrukne snarvei (~62 %).
- **Forkunnskaper (kryssbok):** Kap. 6.2, 1.2.
- **Eksamensbelegg:** Sjanger M — konservativt felt/potensial ~62 % (nivå 1, fast gjenganger). **Sensornøkkel:** fasiten foretrekker å bruke potensialet framfor å parametrisere. Feilkatalog §5.7: å regne linjeintegralet tungt via parametrisering når feltet er konservativt. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Konservativt felt**: $\mathbf F=\nabla\varphi$ for en potensialfunksjon $\varphi$; **testen** $\partial Q/\partial x=\partial P/\partial y$ (2D), generelt $\operatorname{curl}\mathbf F=\mathbf0$ (3D) på enkeltsammenhengende område; **finne potensialet** ved delvis integrasjon ($\varphi=\int P\,dx + g(y)$, bestem $g$ fra $\varphi_y=Q$); **fundamentalteoremet for kurveintegral** $\int_C\mathbf F\cdot d\mathbf r=\varphi(\text{slutt})-\varphi(\text{start})$ (uavhengig av vei); langs **lukket** kurve $\oint=0$ når konservativt; når testen svikter → ikke konservativt (bruk parametrisering/Green). Notasjon: $\varphi$ potensial, $\operatorname{curl}\mathbf F$.
- **Oppgavesjangre:** M. Mønstereksempel: «Vis at $\mathbf F=(2xy+y^3,\, x^2+3xy^2)$ er konservativt, finn $\varphi$, og regn $\int_C\mathbf F\cdot d\mathbf r$ fra $(0,0)$ til $(1,2)$.» ($\varphi=x^2y+xy^3$.) Mønstereksempel: «Er $\mathbf F=(-y,x)/(x^2+y^2)$ konservativt på $\mathbb R^2\setminus\{0\}$?»
- **Typiske feil:** **Parametrisere når feltet er konservativt** (unødig tungt — sensornøkkel); påstå konservativt uten å teste $Q_x=P_y$; feil $g(y)$ i potensialkonstruksjonen; overse at området ikke er enkeltsammenhengende (hullet i $(-y,x)/(x^2+y^2)$); feil fortegn slutt$-$start.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 6.4: Drill: kurveintegral — direkte parametrisering vs. potensial

- **id:** `tma4101-6-4` · **number:** 6.4 · **estimatedMinutes:** 85 · **prerequisites:** `tma4101-6-3`
- **kapitteltype:** drill
- **description:** Beslutningsvalget som avgjør kurveintegral-oppgaver: test om feltet er konservativt (bruk potensialet), ellers parametriser direkte — og velg alltid den letteste veien.
- **Eksamensbelegg:** Sjanger L + M (~62 % konservative). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Beslutningstre**: (1) test $Q_x=P_y$ / $\operatorname{curl}\mathbf F=\mathbf0$; (2) konservativt → finn $\varphi$, bruk fundamentalteoremet ($\oint=0$ hvis lukket); (3) ikke konservativt → direkte parametrisering (eller Green hvis lukket, bro til Del 8); (4) eksakt svar. **Gjennomregnet eksamenscase** (ett konservativt + ett ikke-konservativt felt over samme kurve, begge veier vist) med sensor-margnotater om at potensialet er den foretrukne veien og at teoremet navngis. 10–14 oppgaver: konservative (potensial), ikke-konservative (parametrisering), lukkede ($\oint=0$-sjekk), blandet.
- **Oppgavesjangre:** L, M. Mønstereksempel: «Regn $\oint_C\mathbf F\cdot d\mathbf r$ for $\mathbf F=(e^x\sin y, e^x\cos y)$ langs en lukket kurve.» (Konservativt → $0$.)
- **Typiske feil:** Fellene fra 6.2–6.3 blandet; velge tung parametrisering for et konservativt felt; ikke navngi fundamentalteoremet; feil orientering; desimalsvar.
- **Quiz: 20 · Flashcards: 10**

**Prøve-kvote Del 6:** 4 prøver (spesifisert i §4).

---

### Del 7 — Flateintegral og fluks *(prioritet: PERFEKT — flateintegral/fluks ~83 %; grunnlag for Del 8)*

#### Kapittel 7.1: Parametriserte flater og det fundamentale vektorproduktet

- **id:** `tma4101-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4101-6-1`
- **kapitteltype:** teori
- **description:** Flater $\boldsymbol\phi(u,v)$ i rommet, det fundamentale vektorproduktet $\boldsymbol\phi_u\times\boldsymbol\phi_v$, og normalvektor/flateelement — grunnlaget for alle flate- og fluksintegral (og for Stokes/Gauss).
- **Forkunnskaper (kryssbok):** Kap. 6.1; [Kryssproduktet](/bok/r2/r2-5-4).
- **Eksamensbelegg:** Grunnverktøyet for sjanger N/O (flateareal + fluks ~83 %) og for Stokes/Gauss (Del 8). Fasiten regner $\boldsymbol\phi_u\times\boldsymbol\phi_v$ hver gang og sjekker normalretningen. Prioritet: **perfekt** (grunnlag).
- **Innholdskontrakt:** **Parametrisert flate** $\boldsymbol\phi(u,v)=(x(u,v),y(u,v),z(u,v))$; standardparametriseringer: graf $z=g(x,y)$, sylinder, kule, plan; **det fundamentale vektorproduktet** $\boldsymbol\phi_u\times\boldsymbol\phi_v$ (normalvektor til flaten); **flateelement** $dS=|\boldsymbol\phi_u\times\boldsymbol\phi_v|\,du\,dv$; for graf $z=g(x,y)$: $dS=\sqrt{1+g_x^2+g_y^2}\,dA$ og $\boldsymbol\phi_u\times\boldsymbol\phi_v=(-g_x,-g_y,1)$; **normalvektor** $\mathbf n=\pm(\boldsymbol\phi_u\times\boldsymbol\phi_v)/|\boldsymbol\phi_u\times\boldsymbol\phi_v|$ (fortegn etter orientering). Notasjon: $\boldsymbol\phi(u,v)$, $\boldsymbol\phi_u\times\boldsymbol\phi_v$, $dS$.
- **Oppgavesjangre:** N/O (grunnlag). Mønstereksempel: «Parametriser kulen $x^2+y^2+z^2=a^2$ og finn $\boldsymbol\phi_u\times\boldsymbol\phi_v$.» Mønstereksempel: «Finn $dS$ for grafen $z=x^2+y^2$.»
- **Typiske feil:** Bytte om $\boldsymbol\phi_u\times\boldsymbol\phi_v$ (feil rekkefølge → motsatt normal); glemme absoluttverdi i $dS$; feil parametrisering av kule (blande $\varphi,\theta$); regnefeil i kryssproduktet.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 7.2: Skalar flateintegral og flateareal

- **id:** `tma4101-7-2` · **number:** 7.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4101-7-1`
- **kapitteltype:** teori
- **description:** Flateintegralet av et skalarfelt $\int_S f\,dS$ og flatearealet $\int_S 1\,dS$ — masse/areal av krumme flater, med grafsnarveien.
- **Forkunnskaper (kryssbok):** Kap. 7.1, 4.2.
- **Eksamensbelegg:** Sjanger N — del av flateintegral/fluks ~83 %. Fasiten regner flateareal av graf-flater ($z=9-x^2-y^2$ o.l.) og over sylinderflater. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Skalar flateintegral** $\int_S f\,dS=\iint_D f(\boldsymbol\phi(u,v))|\boldsymbol\phi_u\times\boldsymbol\phi_v|\,du\,dv$; **flateareal** $=\int_S 1\,dS$; graf-snarveien $\int_S f\,dS=\iint_D f\sqrt{1+g_x^2+g_y^2}\,dA$; **absoluttverdi beholdes** i skalarvarianten (masse/areal er alltid $\ge0$); reduksjon til et dobbeltintegral over parameterområdet (ofte polar). Notasjon: $\int_S f\,dS$.
- **Oppgavesjangre:** N. Mønstereksempel: «Finn arealet av flaten $z=x^2+y^2$ over $x^2+y^2\le1$.» Mønstereksempel: «Regn $\int_S z\,dS$ over den delen av kjeglen $z=\sqrt{x^2+y^2}$ under $z=1$.»
- **Typiske feil:** Glemme flateelement-faktoren $|\boldsymbol\phi_u\times\boldsymbol\phi_v|$; bruke fortegns-normal der absoluttverdi trengs (skalar); feil parameterområde $D$; ikke gå til polar når det forenkler; desimalsvar.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 7.3: Fluks gjennom en flate — orientering og fortegnskontroll

- **id:** `tma4101-7-3` · **number:** 7.3 · **estimatedMinutes:** 60 · **prerequisites:** `tma4101-7-2`
- **kapitteltype:** teori
- **description:** Fluksen $\iint_S \mathbf F\cdot\mathbf n\,dS$ av et vektorfelt gjennom en orientert flate — med fortegns-/orienteringskontrollen fasiten gjør hver gang, og den geometriske snarveien for plane flater.
- **Forkunnskaper (kryssbok):** Kap. 7.1, 6.2.
- **Eksamensbelegg:** Sjanger O — fluks ~83 % (nivå 1). **Sensornøkkel §4.5:** orientering/fortegn kontrolleres hver gang ($\boldsymbol\phi_u\times\boldsymbol\phi_v$ vs. oppgitt $\mathbf n$). Fasiten viser ofte to metoder for fluks gjennom plan flate (geometrisk snarvei + full parametrisering). Grunnlag for Gauss (kap. 8.2) og Stokes (kap. 8.3). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Fluks** $\iint_S \mathbf F\cdot\mathbf n\,dS=\iint_D \mathbf F(\boldsymbol\phi)\cdot(\boldsymbol\phi_u\times\boldsymbol\phi_v)\,du\,dv$; **orienterings-/fortegnskontroll** (egen `warning`): sjekk at $\boldsymbol\phi_u\times\boldsymbol\phi_v$ peker samme vei som oppgitt $\mathbf n$ (utover/oppover) — bytt fortegn ellers; **den geometriske snarveien** for plan flate med konstant $\mathbf n$ ($\mathbf F\cdot\mathbf n$ konstant → fluks $=$ konstant $\times$ areal); graf-formel $\iint \mathbf F\cdot(-g_x,-g_y,1)\,dA$; fluks gjennom sammensatt flate → summer delflater (bro til Gauss). Notasjon: $\iint_S\mathbf F\cdot\mathbf n\,dS$.
- **Oppgavesjangre:** O. Mønstereksempel: «Regn fluksen av $\mathbf F=(x,y,z)$ ut gjennom disken $z=2$, $x^2+y^2\le4$, oppadrettet normal — vis både geometrisk snarvei og full parametrisering.» Mønstereksempel: «Fluks av $\mathbf F=(0,0,z)$ gjennom paraboloiden $z=x^2+y^2$, $z\le1$, med utovernormal.»
- **Typiske feil:** **Feil fortegn/orientering** på normalen ($\boldsymbol\phi_u\times\boldsymbol\phi_v$ motsatt av oppgitt $\mathbf n$ — forplanter seg, sensor sjekker hver gang); bruke absoluttverdi i fluks (der fortegnet betyr noe); ikke bruke geometrisk snarvei når den finnes; feil delflate glemt i sammensatt flate; desimalsvar.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 7.4: Drill: flateintegral/fluks — parametrisér, orientér, regn eksakt

- **id:** `tma4101-7-4` · **number:** 7.4 · **estimatedMinutes:** 85 · **prerequisites:** `tma4101-7-3`
- **kapitteltype:** drill
- **description:** Hele flate-repertoaret: parametriser flaten, avgjør skalar (areal) vs. fluks, kontroller orienteringen, og regn eksakt — med snarveien når den finnes.
- **Eksamensbelegg:** Sjanger N + O (~83 %). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Beslutningstre**: (1) parametriser flaten (graf/sylinder/kule/plan); (2) skalar ($f\,dS$, absoluttverdi) eller fluks ($\mathbf F\cdot\mathbf n\,dS$, fortegn/orientering)? (3) sjekk $\boldsymbol\phi_u\times\boldsymbol\phi_v$ mot oppgitt $\mathbf n$; (4) geometrisk snarvei for plan flate; (5) reduser til dobbeltintegral, eksakt svar. **Gjennomregnet eksamenscase** (fluks gjennom sammensatt flate, orientering kontrollert på hver delflate) med sensor-margnotater. 10–14 oppgaver: flateareal, skalar flateintegral, fluks graf/sylinder/kule, sammensatt flate.
- **Oppgavesjangre:** N, O. Mønstereksempel: «Regn fluksen av $\mathbf F=(x,y,z)$ ut av den lukkede sylinderen $x^2+y^2\le1$, $0\le z\le2$ (topp + bunn + mantel).»
- **Typiske feil:** Fellene fra 7.1–7.3 blandet; feil orientering på en delflate; glemt delflate; skalar vs. fluks forvekslet (absoluttverdi); desimalsvar.
- **Quiz: 20 · Flashcards: 10**

**Prøve-kvote Del 7:** 4 prøver (spesifisert i §4).

---

### Del 8 — Vektoranalyse-teoremene: Green, Stokes og divergensteoremet *(prioritet: PERFEKT — det bærende tyngdepunktet, minst ett i 98 %)*

#### Kapittel 8.1: Greens teorem i planet

- **id:** `tma4101-8-1` · **number:** 8.1 · **estimatedMinutes:** 60 · **prerequisites:** `tma4101-6-2`
- **kapitteltype:** teori
- **description:** Greens teorem knytter et kurveintegral langs en lukket plan kurve til et dobbeltintegral over området innenfor — med areal-formelen og den obligatoriske orienteringen (mot klokka).
- **Forkunnskaper (kryssbok):** Kap. 6.2, 4.1.
- **Eksamensbelegg:** Sjanger P — Green i planet ~40 % navngitt (del av vektoranalyse-trioen 98 %). **Sensornøkkel §4.2:** navngi teoremet; §4.5: riktig orientering (positiv rand = mot klokka). Fasiten reduserer ofte til et alt kjent dobbeltintegral. Prioritet: **perfekt**.
- **Innholdskontrakt:** **2D curl** (skalar) $Q_x-P_y$; **Greens teorem** (Green's Theorem) $\oint_C P\,dx+Q\,dy=\iint_D\left(\dfrac{\partial Q}{\partial x}-\dfrac{\partial P}{\partial y}\right)dA$ for **positivt orientert** (mot klokka) rand av $D$; **areal via Green** $A=\oint_C x\,dy=-\oint_C y\,dx=\tfrac12\oint_C(x\,dy-y\,dx)$; **divergensform i planet** (utstrømning) $\oint_C\mathbf F\cdot\mathbf n\,ds=\iint_D\operatorname{div}\mathbf F\,dA$; orienteringen (fortegn snur ved med-klokka); hull i området → orienter indre rand med klokka. Bro: Stokes er 3D-generaliseringen (kap. 8.3). Notasjon: $\oint$, positiv orientering.
- **Oppgavesjangre:** P. Mønstereksempel: «Regn $\oint_C(x^3+2y)\,dx+(4x-y^2)\,dy$ der $C$ er randen (mot klokka) til $D$ mellom $y=x^2$ og $y=x$, med Greens teorem.» Mønstereksempel (areal): «Areal av ellipsen $x^2/a^2+y^2/b^2=1$ via Green.» ($\pi ab$.)
- **Typiske feil:** **Feil orientering** (glemt fortegn ved med-klokka-rand); forveksle $Q_x-P_y$-rekkefølgen; bruke Green på ikke-lukket kurve; **ikke navngi teoremet**; ikke gjenbruke et alt utregnet dobbeltintegral; desimalsvar.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 8.2: Gauss' divergensteorem

- **id:** `tma4101-8-2` · **number:** 8.2 · **estimatedMinutes:** 60 · **prerequisites:** `tma4101-7-3`
- **kapitteltype:** teori
- **description:** Divergensteoremet knytter fluksen ut av en lukket flate til trippelintegralet av divergensen over legemet innenfor — inkludert teknikken med å lukke en åpen flate og trekke fra.
- **Forkunnskaper (kryssbok):** Kap. 7.3, 5.1.
- **Eksamensbelegg:** Sjanger Q — divergensteoremet navngitt ~73 % (del av trioen 98 %). **Sensornøkkel §4.2 + §4.5:** navngi teoremet, kontroller utover-orienteringen. Fasitens grep ved åpen flate: **lukk legemet, bruk teoremet på hele randen, trekk fra de tilføyde flatene**. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Divergens** $\operatorname{div}\mathbf F=P_x+Q_y+R_z=\nabla\cdot\mathbf F$; **divergensteoremet** (Divergence Theorem / Gauss) $\oiint_S\mathbf F\cdot\mathbf n\,dS=\iiint_E\operatorname{div}\mathbf F\,dV$ for lukket flate $S=\partial E$ med **utovernormal**; når teoremet lønner seg (lukket flate, enkel $\operatorname{div}\mathbf F$); **åpen-flate-teknikken**: legg til en lokkflate, bruk teoremet på det lukkede legemet, **trekk fra** fluksen gjennom lokket (regnet direkte); orienteringssjekk (utover). Notasjon: $\oiint$, $\operatorname{div}\mathbf F$.
- **Oppgavesjangre:** Q. Mønstereksempel: «Regn fluksen av $\mathbf F=(x^3,y^3,z^3)$ ut av kulen $x^2+y^2+z^2=a^2$ med divergensteoremet.» (Kule, $\operatorname{div}\mathbf F=3(x^2+y^2+z^2)$.) Mønstereksempel (åpen): «Fluks av $\mathbf F=(x,y,2z)$ oppover gjennom paraboloiden $z=1-x^2-y^2$, $z\ge0$ — lukk med disken og trekk fra.»
- **Typiske feil:** Bruke teoremet på en åpen flate uten å lukke den; glemme å trekke fra lokkflaten; **feil orientering** (innover i stedet for utover); **ikke navngi teoremet**; regnefeil i $\operatorname{div}\mathbf F$; desimalsvar.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 8.3: Stokes' teorem

- **id:** `tma4101-8-3` · **number:** 8.3 · **estimatedMinutes:** 60 · **prerequisites:** `tma4101-7-3`
- **kapitteltype:** teori
- **description:** Stokes' teorem knytter kurveintegralet langs randen av en flate til fluksen av curl gjennom flaten — med høyrehåndsregelen som binder randorientering og normalretning sammen.
- **Forkunnskaper (kryssbok):** Kap. 7.3, 6.2.
- **Eksamensbelegg:** Sjanger R — Stokes ~71 % (del av trioen 98 %). **Sensornøkkel §4.2 + §4.5:** navngi teoremet; høyrehåndsregelen mellom randorientering og normal kontrolleres hver gang. Fasiten velger ofte den enkleste flaten som har den gitte kurven som rand. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Curl** $\operatorname{curl}\mathbf F=\nabla\times\mathbf F=(R_y-Q_z,\,P_z-R_x,\,Q_x-P_y)$; **Stokes' teorem** (Stokes' Theorem) $\oint_C\mathbf F\cdot d\mathbf r=\iint_S\operatorname{curl}\mathbf F\cdot\mathbf n\,dS$ for orientert flate $S$ med rand $C$; **høyrehåndsregelen** (randorientering ↔ normalretning — egen `warning`); **valg av flate**: enhver flate med $C$ som rand duger — velg den enkleste (ofte en plan disk); Green som spesialtilfelle i planet ($\operatorname{curl}\mathbf F\cdot\mathbf k=Q_x-P_y$); konservativt felt ($\operatorname{curl}\mathbf F=\mathbf0$) → $\oint=0$. Notasjon: $\operatorname{curl}\mathbf F$, høyrehåndsregel.
- **Oppgavesjangre:** R. Mønstereksempel: «Regn $\oint_C\mathbf F\cdot d\mathbf r$ for $\mathbf F=(-y,x,z)$ der $C$ er sirkelen $x^2+y^2=1$, $z=1$ (mot klokka sett ovenfra) med Stokes.» Mønstereksempel: «Bruk Stokes til å velge en enklere flate for $\mathbf F=(z,x,y)$ over en skrå kurve.»
- **Typiske feil:** **Feil orientering/høyrehåndsregel** (rand og normal ikke koblet riktig — forplanter seg); regnefeil i $\operatorname{curl}\mathbf F$; velge en unødig komplisert flate; **ikke navngi teoremet**; blande Stokes og divergensteoremet; desimalsvar.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 8.4: Drill: navngi og bruk riktig teorem — Green, Stokes og Gauss

- **id:** `tma4101-8-4` · **number:** 8.4 · **estimatedMinutes:** 90 · **prerequisites:** `tma4101-8-3`
- **kapitteltype:** drill
- **description:** Det avgjørende beslutningstreet: gjenkjenn hvilket av Green/Stokes/divergensteoremet oppgaven ber om, navngi det, kontroller orienteringen, og regn eksakt — ferdigheten som bærer 98 % av settene.
- **Eksamensbelegg:** Sjanger S — vektoranalyse-trioen, minst ett teorem i **98 %** av settene, typisk settets tyngste og dyreste oppgaver. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Beslutningstre for teoremvalg**: (1) lukket plan kurve + dobbeltintegral over område → **Green**; (2) lukket flate + fluks ut → **divergensteoremet** (lukk åpen flate ved behov); (3) kurveintegral langs randen av en flate, eller fluks av curl → **Stokes**; (4) konservativt felt → fundamentalteoremet/$\oint=0$ (ingen tungt teorem). **Sjekkliste hver gang**: navngi teoremet, kontroller orientering/fortegn (høyrehånd/utover/mot klokka), eksakt svar. **Gjennomregnet eksamenscase** (kjede der samme oppgave løses via to teoremer — f.eks. fluks direkte vs. via divergensteoremet) med sensor-margnotater om at teoremvalget og orienteringen er poengbærende. 12–16 oppgaver på eksamensnivå som treffer alle tre teoremene + konservativ-snarveien + åpen-flate-teknikken.
- **Oppgavesjangre:** P, Q, R, S. Mønstereksempel: «Gitt fluksoppgaven under — avgjør hvilket teorem som er raskest, navngi det, og regn eksakt.» (Varianter som peker mot hver av de tre.)
- **Typiske feil:** Velge feil teorem (tungt/uløselig oppsett); **ikke navngi teoremet**; feil orientering (alle tre variantene); ikke lukke åpen flate for Gauss; ikke se konservativ-snarveien; **feil tidsbudsjett** (disse er dyre — feilkatalog §5.9); desimalsvar.
- **Quiz: 24 · Flashcards: 14**

**Prøve-kvote Del 8:** 4 prøver (spesifisert i §4).

---

### Del 9 — Eksamenstrening

#### Kapittel 9.1: Øvingseksamen 1: bred standardprofil (10 korte oppgaver, 4 timer)

- **id:** `tma4101-9-1` · **number:** 9.1 · **estimatedMinutes:** 240 · **prerequisites:** `tma4101-8-4`
- **kapitteltype:** øvingseksamen
- **description:** Et komplett breddesveipende sett i post-2019-malen: 10 korte, likt vektede oppgaver som treffer hele pensum, med A-besvarelse-fasit og tids-/vektingsnotat per oppgave.
- **Eksamensbelegg/miks:** Speiler standard-malen (4 timer, ~10 oppgaver, ~24 min hver): **gradient/retningsderivert** (1, sjanger B) → **tangentplan til nivåflate** (1, sjanger D) → **kritiske punkter + annenderiverttest** (1, sjanger E) → **dobbeltintegral/polar** (1, sjanger H) → **trippelintegral/volum (sylinder eller kule)** (1, sjanger I) → **konservativt felt/potensial** (1, sjanger M) → **flateareal eller fluks** (1, sjanger N/O) → **Greens teorem** (1, sjanger P) → **divergensteoremet** (1, sjanger Q) → **Stokes' teorem** (1, sjanger R). Alle oppgaver nyskrevne; A-besvarelse-fasit i `collapsible` per oppgave med margnotat om vekting, teoremnavning, orientering og eksakt svar.
- **Typiske feil:** Feil tidsbudsjett (vektoranalyse-oppgavene er dyre); hoppe over orienteringssjekk under tidspress; desimalsvar.
- **Quiz: 6 · Flashcards: 0**

#### Kapittel 9.2: Øvingseksamen 2: integral- og vektoranalyse-tung profil (10 korte oppgaver, 4 timer)

- **id:** `tma4101-9-2` · **number:** 9.2 · **estimatedMinutes:** 240 · **prerequisites:** `tma4101-9-1`
- **kapitteltype:** øvingseksamen
- **description:** Et sett som vekter multiple integraler og vektoranalyse tyngre — der teoremvalg, koordinatvalg og orientering avgjør toppkarakteren.
- **Eksamensbelegg/miks:** Speiler et integral-/vektoranalyse-tungt sett (4 timer, ~10 oppgaver): **grense/kontinuitet i flere variable** (1, sjanger A) → **kjerneregel/implisitt derivasjon** (1, sjanger C) → **Lagrange** (1, sjanger G) → **dobbeltintegral med bytte av rekkefølge eller Jacobi** (1, sjanger H/J) → **trippelintegral kule** (1, sjanger I) → **buelengde eller krumning** (1, sjanger K) → **fluks (åpen flate, lukk og trekk fra)** (1, sjanger O/Q) → **Stokes med flatevalg** (1, sjanger R) → **divergensteorem** (1, sjanger Q) → **konservativt vs. ikke-konservativt kurveintegral** (1, sjanger L/M). Alle oppgaver nyskrevne; A-besvarelse-fasit i `collapsible` med margnotat om teoremvalg og orientering. Sammen med 9.1 dekkes A–R.
- **Typiske feil:** Feil koordinat-/teoremvalg (tungt oppsett); glemt Jacobi/volumelement; orientering; desimalsvar.
- **Quiz: 6 · Flashcards: 0**

#### Kapittel 9.3: Øvingseksamen 3: eldre langoppgave-profil + toppkarakter-differensiatorer (4 timer)

- **id:** `tma4101-9-3` · **number:** 9.3 · **estimatedMinutes:** 240 · **prerequisites:** `tma4101-9-2`
- **kapitteltype:** øvingseksamen
- **description:** En variant med noen lengre, kjedede oppgaver (pre-2019-malen) og de differensiatorene som skiller topp fra midt: full randbehandling, åpen-flate-teknikken, alternative løsninger.
- **Eksamensbelegg/miks:** Speiler den eldre malen med færre, lengre og kjedede oppgaver (4 timer): **optimering på lukket område (indre + full rand + hjørner)** (1, sjanger E/F) → **kjedet multippelt integral (dobbelt gjenbrukt i trippel/volum)** (1, sjanger H/I) → **variabelskifte med Jacobi** (1, sjanger J) → **kurveintegral: konservativt via potensial + ikke-konservativt via Green** (1, sjanger M/P) → **fluks-kjede: direkte + via divergensteoremet på samme legeme** (2 delpunkter, sjanger O/Q) → **Stokes ↔ Green-sammenheng** (1, sjanger R/P) → **tangentplan + retningsderivert kombinert** (1, sjanger B/D). Alle oppgaver nyskrevne; A-besvarelse-fasit i `collapsible` med margnotat om hva som skiller topp- fra midtsjikt (orientering, teoremnavning, komplett randbehandling, alternative veier, eksakt svar). Sammen med 9.1–9.2 dekkes alle sjangre A–S.
- **Typiske feil:** Hoppe over randstykker/hjørner; ikke gjenbruke et alt utregnet delintegral (delpunkt-kjeding); glemme å lukke åpen flate; ikke navngi teoremet; desimalsvar.
- **Quiz: 6 · Flashcards: 0**

**Prøve-kvote Del 9:** ingen egne temaprøver — de tre øvingseksamenene (9.1–9.3) er delens prøver.

---

### Summeringskontroll (quiz/flashcards) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1–0.2 | 12+12 = **24** | 14+20 = **34** |
| 1 | 1.1–1.3 | 16+18+16 = **50** | 18+22+18 = **58** |
| 2 | 2.1–2.3 | 16+16+16 = **48** | 18+18+18 = **54** |
| 3 | 3.1–3.4 | 18+16+16+22 = **72** | 22+16+18+10 = **66** |
| 4 | 4.1–4.4 | 18+16+14+22 = **70** | 20+18+16+10 = **64** |
| 5 | 5.1–5.4 | 18+16+16+22 = **72** | 20+18+18+10 = **66** |
| 6 | 6.1–6.4 | 16+16+18+20 = **70** | 20+18+22+10 = **70** |
| 7 | 7.1–7.4 | 16+16+18+20 = **70** | 18+18+20+10 = **66** |
| 8 | 8.1–8.4 | 18+18+18+24 = **78** | 22+22+22+14 = **80** |
| 9 | 9.1–9.3 | 6+6+6 = **18** | 0+0+0 = **0** |
| **Sum** | **35 kap.** | **572 ≥ 500 ✓** | **558 ≥ 500 ✓** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler eksamensvektene: **Del 8 (vektoranalyse-teoremene, 98 %)**
bærer flest både quiz (78) og flashcards (80) fordi de tre teoremene + curl/div
+ orienteringsreglene er både det tyngste og det mest puggeintensive stoffet
(teoremformuleringene må memoreres — ingen formelsamling på nyere sett).
**Del 3 og Del 5 (optimering og trippelintegral, begge nivå 1)** bærer 72 quiz
hver. Drillkapitlene (3.4, 4.4, 5.4, 6.4, 7.4, 8.4) har lave flashcard-kvoter
(få nye definisjoner) men høye quiz-/oppgavekvoter. Øvingseksamenene har 6 quiz /
0 flashcards. **Flashcard-summen (558) ligger bevisst over gulvet på 500**: uten
formelsamling gjør de mange faste formlene (volumelementene $r\,dz\,dr\,d\theta$
og $\rho^2\sin\varphi\,d\rho\,d\varphi\,d\theta$, annenderiverttesten $\Delta$,
Jacobi, buelengde/krumning, de tre teoremene, potensial-testen) til rent
pugge-stoff — men faget er et rent regnefag med moderat begrepsmengde, så
summen holder seg under de teoremtunge lukket-bok-fagene (jf. mat112 på 640).
Quizzene skrives som **metode-/teoremvalg-sjekk** (hvilket teorem, hvilket
koordinatsystem, er retningen normalisert, er orienteringen riktig, er svaret
eksakt) med distraktorer fra feilkatalogen — ikke ren repetisjon.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–8, 32 totalt)

Alle prøver består av nyskrevne oppgaver i arkivets sjangre, med løsningsforslag
etter føringsstandarden (kap. 0.2: eksakt svar, teoremer navngitt, orientering
kontrollert, området tegnet) og poengfordeling. Prøvekapitler legges som
`tma4101-<del>-prove`, chapterNumber `<del>.P`.

**Del 1 — Funksjoner av flere variable**
1. Prøve 1.A (30 min): Grense/kontinuitet — fler-sti-test + polar/skvis (kap. 1.1, sjanger A).
2. Prøve 1.B (30 min): Partielle deriverte og gradient, høyere orden + Clairaut (kap. 1.2, sjanger B).
3. Prøve 1.C (30 min): Retningsderivert (normalisert) + raskest vekst (kap. 1.3, sjanger B).
4. Prøve 1.D (35 min): Blandet — gradient, retningsderivert og grense i én kjede (hele delen).

**Del 2 — Kjerneregelen, tangentplan og nivåflater**
1. Prøve 2.A (30 min): Kjerneregel + implisitt derivasjon (kap. 2.1, sjanger C).
2. Prøve 2.B (30 min): Tangentplan til graf + linearisering/feilanslag (kap. 2.2, sjanger D).
3. Prøve 2.C (30 min): Tangentplan til nivåflate + parallellitet med gitt plan (kap. 2.3, sjanger D).
4. Prøve 2.D (35 min): Blandet — kjerneregel + tangentplan begge varianter (hele delen).

**Del 3 — Optimering**
1. Prøve 3.A (30 min): Kritiske punkter + annenderiverttesten, flere kandidater (kap. 3.1, sjanger E).
2. Prøve 3.B (40 min): Global optimering på lukket område — eksistens + full randbehandling + hjørner (kap. 3.2, sjanger F).
3. Prøve 3.C (35 min): Lagrange med verdisammenligning/eksistens (kap. 3.3, sjanger G).
4. Prøve 3.D (40 min): Blandet — indre kritiske + rand (parametrisering og Lagrange) (kap. 3.4, sjanger E+F+G).

**Del 4 — Dobbeltintegral og polarkoordinater**
1. Prøve 4.A (35 min): Dobbeltintegral over kurveavgrenset område — tegn + skjæring + bytte rekkefølge (kap. 4.1, sjanger H).
2. Prøve 4.B (30 min): Polart dobbeltintegral med $r$-faktor (kap. 4.2, sjanger H).
3. Prøve 4.C (30 min): Generelt variabelskifte + Jacobi (kap. 4.3, sjanger J).
4. Prøve 4.D (40 min): Blandet «velg koordinater» — kartesisk/polar/skifte (kap. 4.4, sjanger H+J).

**Del 5 — Trippelintegral, volum, sylinder og kule**
1. Prøve 5.A (35 min): Kartesisk trippelintegral/volum — løs skjæringen (kap. 5.1, sjanger I).
2. Prøve 5.B (35 min): Sylinderkoordinater med $r$-faktor (kap. 5.2, sjanger I).
3. Prøve 5.C (35 min): Kulekoordinater med $\rho^2\sin\varphi$-faktor (kap. 5.3, sjanger I).
4. Prøve 5.D (40 min): Blandet «velg koordinater etter geometri» (kap. 5.4, sjanger I).

**Del 6 — Vektorfelt, kurveintegral og konservative felt**
1. Prøve 6.A (30 min): Buelengde + krumning av romkurve (kap. 6.1, sjanger K).
2. Prøve 6.B (35 min): Kurveintegral av skalar- og vektorfelt, direkte parametrisering (kap. 6.2, sjanger L).
3. Prøve 6.C (35 min): Konservativt felt — test + potensial + fundamentalteorem (kap. 6.3, sjanger M).
4. Prøve 6.D (40 min): Blandet — konservativt vs. ikke-konservativt kurveintegral (kap. 6.4, sjanger L+M).

**Del 7 — Flateintegral og fluks**
1. Prøve 7.A (30 min): Parametrisering + $\boldsymbol\phi_u\times\boldsymbol\phi_v$ + flateelement (kap. 7.1, sjanger N/O).
2. Prøve 7.B (35 min): Skalar flateintegral + flateareal (kap. 7.2, sjanger N).
3. Prøve 7.C (40 min): Fluks med orienterings-/fortegnskontroll + geometrisk snarvei (kap. 7.3, sjanger O).
4. Prøve 7.D (40 min): Blandet — fluks gjennom sammensatt flate (kap. 7.4, sjanger N+O).

**Del 8 — Vektoranalyse-teoremene**
1. Prøve 8.A (35 min): Greens teorem + areal via Green, riktig orientering (kap. 8.1, sjanger P).
2. Prøve 8.B (40 min): Divergensteoremet inkl. åpen-flate-teknikken (kap. 8.2, sjanger Q).
3. Prøve 8.C (40 min): Stokes' teorem med høyrehåndsregel + flatevalg (kap. 8.3, sjanger R).
4. Prøve 8.D (45 min): «Navngi og bruk riktig teorem» — Green/Stokes/Gauss blandet + konservativ-snarvei (kap. 8.4, sjanger S).

### Øvingseksamener (3 komplette sett — se kap. 9.1–9.3)

| Sett | Form den speiler | Miks (sjangre) |
|---|---|---|
| Øvingseksamen 1 (kap. 9.1) | Bred standardprofil (10 likt vektede) | B + D + E + H + I + M + N/O + P + Q + R |
| Øvingseksamen 2 (kap. 9.2) | Integral-/vektoranalyse-tung | A + C + G + H/J + I + K + O/Q + R + Q + L/M |
| Øvingseksamen 3 (kap. 9.3) | Eldre langoppgave + differensiatorer | E/F + H/I + J + M/P + O/Q(2) + R/P + B/D |

Til sammen dekker de tre settene samtlige sjangre A–S minst én gang (A og C i
9.2; alle tre teoremene P/Q/R i alle tre settene; åpen-flate-teknikken i 9.2/9.3;
konservativ-snarveien i 9.1/9.2/9.3).

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Én skriftlig 4-timers eksamen, breddesveipende** — vurderingsformen (A–F,
   ~10 korte oppgaver etter strukturskiftet ~2019, hver med eksakt sluttsvar),
   temafrekvensene (kap. 0.1) og **KODEFORBEHOLDET** (flervariabel-kjerne under
   `tma4101`; TMA4106 = annet pensum; verifiser kodetilhørighet mot emnesiden).
2. **Prioriteringskartet** — frekvens-tabellen omgjort til tre lesenivåer:
   **perfekt** (vektoranalyse-trioen Green/Stokes/Gauss, multiple integraler
   dobbelt+trippel, flateintegral/fluks, kritiske punkter + annenderiverttest,
   konservative felt/potensial), **kunne** (Lagrange, rand-optimering, tangentplan
   til nivåflate, gradient/retningsderivert, grense/kontinuitet, kjerneregel,
   kulekoordinater), **kjenne** (buelengde, krumning, variabelskifte/Jacobi) — med
   ærlighetsnotatet om reformen (verifiser vekting mot gjeldende emneside).
3. **Sjangerguiden** — A–S med løsningsoppskriftene fra drillkapitlene (3.4, 4.4,
   5.4, 6.4, 7.4, 8.4) i kortform, inkl. beslutningstreet for teoremvalg.
4. **Sensorreglene (fra kap. 0.2)** — eksakt svar; **navngi teoremet**;
   **orientering/fortegn kontrollert hver gang** (høyrehånd/utover/mot klokka);
   **tegn området før grensene**; riktig areal-/volumelement + Jacobi; normalisert
   retningsvektor; eksistens (ekstremalverdisetningen) før kandidatjakt; alternative
   løsninger honoreres. Karakterskille-listen: bestått ≈ mekanikken ($\nabla f=\mathbf0$
   + Hesse, standard multippelt integral med riktige grenser, teorem korrekt anvendt);
   toppsjikt ≈ korrekt orientering/fortegn, riktig teoremvalg *navngitt*, komplett
   randbehandling, åpen-flate-teknikken, konservativ-snarveien, delpunkt-kjeding.
5. **Feilkatalogen** — de typiske feilene fra analysen §5 samlet, hver med
   henvisning til kapitlet som forebygger den (retning ikke normalisert → 1.3;
   kun indre kritiske punkter → 3.2; grenser uten skisse → 4.1/5.1; glemt
   $r$-/$\rho^2\sin\varphi$-/Jacobi-faktor → 4.2/5.2/5.3/4.3; feil orientering i
   fluks/Stokes/Gauss → 7.3/8.2/8.3; grense «vist» langs én sti → 1.1; parametrisert
   konservativt felt → 6.3; teorem ikke navngitt → 8.1–8.4; desimalsvar → 0.2;
   tidsfelle på vektoranalyse → 0.1/8.4).
6. **Teorem-, formel- og apparatbank i kursets notasjon** — det memorerbare
   (ingen formelsamling): gradient/retningsderivert (normalisert); annenderiverttest
   $\Delta=f_{xx}f_{yy}-f_{xy}^2$ + Hesse; ekstremalverdisetning + Lagrange; areal-/
   volumelementer ($dA=r\,dr\,d\theta$, $dV=r\,dz\,dr\,d\theta$, $\rho^2\sin\varphi\,
   d\rho\,d\varphi\,d\theta$, Jacobi $|\partial(x,y)/\partial(u,v)|$); buelengde $L=\int|\mathbf r'|$,
   krumning $\kappa=|\mathbf r'\times\mathbf r''|/|\mathbf r'|^3$; kurveintegral +
   konservativt ($Q_x=P_y$, potensial, fundamentalteorem); flateelement $dS$, fluks
   $\iint\mathbf F\cdot\mathbf n\,dS$; **Green** $\oint P\,dx+Q\,dy=\iint(Q_x-P_y)\,dA$,
   **Stokes** $\oint\mathbf F\cdot d\mathbf r=\iint\operatorname{curl}\mathbf F\cdot\mathbf n\,dS$,
   **Gauss** $\oiint\mathbf F\cdot\mathbf n\,dS=\iiint\operatorname{div}\mathbf F\,dV$
   — med markering *utlede aktivt* vs. *kun bruke* (jf. analysen §6). **Dette er
   studentens puggeark for eksamen uten formelsamling.**
7. **Studieløp** — Del 0 → Del 1–2 → Del 3 → Del 4–5 → Del 6 → Del 7 → Del 8 →
   prøver → øvingseksamenene de siste ukene under tidspress (240 min, ~24 min/
   oppgave). Intensivvariant (3 uker): Del 3 (optimering) + Del 4–5 (multiple
   integraler) + Del 6.3 (konservative felt) + Del 7 (fluks) + Del 8 (de tre
   teoremene) + øvingseksamenene — dvs. nivå 1-temaene.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `tma4101` med alle 35
   kapitler (id/number/title/description/estimatedMinutes/topics/prerequisites)
   etter mønster `COURSE_BI_OKONOMI` i `textbook-courses-matte.ts`, wiret i
   `textbook-courses-hoyskole.ts`; `sectionNames` fra §2-tabellen; institusjon =
   NTNU i `institusjoner.ts`, visningsnavn «Flervariabel kalkulus og
   vektoranalyse» (kodetilhørighet TMA4101/TMA4105 — verifiser).
2. **Del 0** (kap. 0.1–0.2) — etablerer sjangernavnene A–S, frekvenstallene,
   kodeforbeholdet og føringsstandarden resten refererer til.
3. **Temadeler i avhengighetsrekkefølge**: Del 1 → Del 2 → Del 3 → Del 4 → Del 5
   → Del 6 → Del 7 → Del 8. Én Opus-agent per hel del (jf. PRODUKSJONSLOYPE
   fase 4). Drillkapitlene bygges av samme agent som delen. **Del 7 MÅ bygges før
   Del 8** (fluks-maskineriet er forutsetning for Stokes/Gauss).
4. **Del 9** (3 øvingseksamener) til slutt av én agent som leser HELE skjelettet
   — settene gjenbruker alle sjangre A–S.
5. **Prøvekapitler** (§4, 32 stk) legges som `tma4101-<del>-prove`, chapterNumber
   `<del>.P`, bygget av delens agent.
6. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser (`json.load`); generer JSON via
      `json.dump` (LaTeX krever `\\` i JSON-strenger); `npm run build` grønn.
- [ ] **LaTeX**: all matematikk i `$...$`/`$$...$$`; ingen unicode-brøker;
      konsistent notasjon: $\nabla f$, $D_{\mathbf u}f=\nabla f\cdot\hat{\mathbf u}$,
      $\Delta=f_{xx}f_{yy}-f_{xy}^2$, $dA=r\,dr\,d\theta$, $dV=\rho^2\sin\varphi\,
      d\rho\,d\varphi\,d\theta$, $\operatorname{curl}\mathbf F$, $\operatorname{div}\mathbf F$.
- [ ] **Eksakt svar i ALLE løsningsforslag**: $\pi$, brøk og rot bevares; hver
      løsning ender i en konkret verdi; INGEN desimaltilnærming der oppgaven ikke ber om det.
- [ ] **Teoremnavning i ALLE vektoranalyse-løsninger**: Green/Stokes/
      divergensteoremet/fundamentalteoremet/annenderiverttesten/ekstremalverdisetningen
      navngis eksplisitt. En løsning som «regner seg fram» uten teoremnavn er byggefeil.
- [ ] **Orienterings-/fortegnskontroll som eget steg**: hver fluks-/Stokes-/Gauss-
      løsning sjekker $\boldsymbol\phi_u\times\boldsymbol\phi_v$ mot oppgitt $\mathbf n$
      (høyrehånd/utover/mot klokka) — eksplisitt.
- [ ] **«Tegn området først»**: hvert multippelt integral har områdebeskrivelse
      med eksplisitte ulikheter + skjæringen løst FØR oppsett.
- [ ] **Areal-/volumelement + Jacobi**: $r$-faktoren (polar/sylinder),
      $\rho^2\sin\varphi$ (kule) og $|J|$ (variabelskifte) er alltid med.
- [ ] **Retningsvektor normalisert** i alle retningsderivert-løsninger.
- [ ] **Eksistens før kandidatjakt**: hver F/G-løsning påberoper ekstremalverdisetningen
      (lukket + begrenset) FØR kandidatene; alle randstykker + hjørner sjekkes.
- [ ] **Konservativ-snarvei**: hver konservativ M-løsning bruker potensialet, ikke
      tung parametrisering; testen $Q_x=P_y$ / $\operatorname{curl}\mathbf F=\mathbf0$ vises.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene
      fra dette skjelettet), Forkunnskaper-blokk med kryssbok-lenker (kun til
      kapitler som finnes — R1/R2-id-ene i §3 er verifisert; Matematikk-1-
      referanser er klartekst), `collapsible` Symbol- og formelliste per delkapittel,
      Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå), 6–12 øvinger
      med `solution` + `hints`, repetisjons-`collapsible`; drillkapitler har
      løsningsoppskrift/beslutningstre + sensor-kommentert case + 10–15 oppgaver.
- [ ] **Quiz-sum ≥ 572 og flashcard-sum ≥ 558** per kvotetabellen i §3
      (kontrollsummér); quizzene som metode-/teoremvalg-sjekk med distraktorer fra
      feilkatalogen.
- [ ] **Prøver**: 4 per temadel 1–8 (32 stk) + 3 øvingseksamener som sammen dekker A–S.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, funksjoner og
      kontekster; ingen formuleringer fra reelle sett/fasiter (skjelettets
      mønstereksempler er selv omskrivninger og skal varieres videre, ikke kopieres).
- [ ] **Kodeforbehold aktivt**: identitet + kap. 0.1 + studieguiden merker
      kodetilhørighet (TMA4101/TMA4105) som `(verifiser)`; ODE/Fourier/kompleks
      (TMA4106) er IKKE med.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
      (200 + innholdssjekk), jf. `getChapterMeta`-lærdommen.

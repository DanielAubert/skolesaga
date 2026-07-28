# Bokskjelett: TMA4150 Algebra (NTNU) — eksamensrettet lærebok

> **LÆRINGSLØKKE-KONTRAKT (ufravikelig, produkteier 9. juli 2026):** Ved bygging
> struktureres HVERT kapittels `content[]` som gjentatte små løkker
> **Teori → Eksempel → Oppgave** — `exercise`-blokker INLINE rett etter
> teorien/eksempelet de trener, aldri all teori øverst med oppgavene samlet
> nederst. Ingen oppgave får kreve stoff som ikke er dekket tidligere i
> kapitlet eller i eksplisitt refererte forkunnskaper (flytt teoribiten
> tidligere ved behov). Autoritativ kilde: README «Leserkrav» + arketypens
> DNA-fil (`DNA-regnefag.md`). Unntak: øvingseksamen-/prøve-/modellbesvarelses-
> kapitler følger sin egen arketype (komplett sett først, løsninger i
> collapsibles). Kvotene og innholdskontraktene i dette skjelettet er uendret —
> løkka styrer REKKEFØLGEN.

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er destillert fra `EKSAMENSANALYSE.md`
> (NTNUs MA2201/TMA4150-arkiv: ~34 filer; **15 velkarakteriserte sett** V2014-kont
> t.o.m. Kont2025, hvorav de siste ~8 år er kartlagt oppgave-for-oppgave og
> typesatte løsningsforslag lest grundig for V2018, V2019, V2020, V2024, V2025 +
> Kont2023; eldre MA2201-arkiv 2007–2009 skummet). Arketype: **DNA-regnefag** —
> men med et **avgjørende skifte**: TMA4150 er et **bevisemne** (~75–85 % av
> poengene ligger i bevis, begrunnelser og strukturelle argumenter, ikke i
> tallregning), så boka bygges rundt **bevishåndverk**, ikke talljakt.
> Kapittel-DNA-ene fra regnefag-malen gjelder, men «løsningen» i hvert eksempel er
> et **skrevet bevis** i A-besvarelse-form. Format-forbilde: `kj1020/SKJELETT.md`
> (v3, teori-/mønsterfag). Nærmeste faglige nabo: `mat2200/SKJELETT.md` (UiO
> Grupper, ringer og kropper) — se §0 for etterfølger-/naboprofilering og NTNU-
> avgrensningen.

---

## 0. Statusverifisering og NTNU-profilering (les først)

**Emnestatus (verifisert mot NTNUs emneside 2026-07-11):** TMA4150 Algebra er
**AKTIVT**. Undervisningsstart **vår 2027** (undervises hvert vårsemester),
skriftlig skoleeksamen, 7,5 studiepoeng, bokstavkarakter A–F,
**hjelpemiddelkode D** («Ingen trykte eller håndskrevne hjelpemidler tillatt.
Bestemt, enkel kalkulator tillatt»). Studiepoengreduksjon mot **MA2201** (7,5 sp)
og **SIF5021** (7,5 sp) — dette er samme emne under tidligere/parallelle koder,
og bekrefter at MA2201-arkivet (2007–2013) tilhører samme eksamenstradisjon.
Ingen nedleggingsvarsel funnet. Kalibreringen i skjelettet bygger på arkivet
2014–2025 (pluss skummet MA2201 2007–2009); alle frekvenser er merket «per
2014–2025-arkivet».

**Naboprofilering mot mat2200 (UiO) — hvorfor denne boka har egen verdi:**
mat2200 (UiO «Grupper, ringer og kropper») dekker samme faglige *kjerne*
(gruppeteori → ringteori → kroppsteori), men de to emnene skiller seg tydelig, og
TMA4150-boka er derfor ikke dekket av mat2200-boka:

1. **Kroppsteori-avgrensningen (viktigst).** TMA4150 stopper ved **endelige
   kropper** (`Z_p[x]/(f)`, syklisk `F^*`, Frobenius, underkropper). **Galois-teori
   i tradisjonell forstand — kroppsutvidelser over `Q`, minimalpolynom, splittkropp,
   Galois-gruppe, løsbarhet med radikaler — forekommer IKKE** i noe kartlagt sett.
   mat2200 har derimot Galois-teori som **tyngdepunkt og fast siste oppgave**. Å
   bygge TMA4150-boka på mat2200-skjelettet ville gitt et helt feil vektlagt kart.
2. **Burnside/gruppevirkning er en TMA4150-signatur.** Nesten hvert TMA4150-sett
   har en **Burnside-/Cauchy-Frobenius-tellingsoppgave** (fargelegg en figur, tell
   baner; 60 %) — den ene oppgaven med konkret tallsvar. Dette er en egen del med
   drillkapittel her.
3. **Matrisegrupper som gjennomgangsarena** (`GL(2,Z_p)`, `SL(2,R)`, øvre-
   triangulære, Heisenberg-`3×3`) brukes gjentatte ganger som konkrete arenaer for
   undergruppe-/normal-/kvotient-/Sylow-argumenter (47 %).
4. **Formatet er distinkt NTNU:** **10 like-vektede deloppgaver, 4 timer, kode D**
   (ingen hjelpemidler — alt må sitte utenat), norsk oppgavetekst (engelsk
   oversettelse vedlagt). mat2200 har 4 oppgaver a–d, engelsk, ingen hjelpemidler.
   NTNUs helhetlige karaktersetting og «alle svar skal begrunnes»-regime har sin
   egen sensorprofil.

Konklusjon (jf. K2-klyngefunnet om egne NTNU-bevisprofiler ved UiO-overlapp):
emnet er aktivt OG har unik dekning (ingen Galois, Burnside- og matrisegruppe-
tyngde, NTNU-format) → **bygg skjelett**. Der en definisjon/notasjon er delt med
mat2200, gjenbrukes den bevisste stilen, men vektingen, notasjonen (`U(Z_n)`,
`n_p`, `X_g`, `D_n`) og oppgavesjangrene følger TMA4150-arkivet.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `tma4150` |
| Tittel | **TMA4150 Algebra (NTNU) — eksamensrettet** |
| Level | `'Høyskole'` |
| Institusjon (navigasjon) | NTNU. Visningsnavn i `institusjoner.ts`: «TMA4150 Algebra». |
| Arketype | Regnefag (`DNA-regnefag.md`) — men **bevisdrevet** teorifag (abstrakt algebra: grupper, ringer, endelige kropper). «Løsningen» er et skrevet bevis; drill-logikken beholdes. |
| Antall kapitler | **27** (Del 0: 2 · temadeler 1–9: 20 · eksamenstrening Del 10: 5) |
| Estimert totaltid | **~1 615 min ≈ 27 timer** (sum av per-kapittel-estimatene under) |
| Quiz totalt | **512** (krav ≥500) |
| Flashcards totalt | **510** (krav ≥500; se §4 justert tabell) |

**Pitch (ett avsnitt):** TMA4150 er blant de **mest forutsigbare** emnene i hele
høyskolearkivet. 4 timers skriftlig skoleeksamen, **kode D** (ingen trykte eller
håndskrevne hjelpemidler; kun enkel kalkulator som knapt trengs), bokstavkarakter
A–F, **10 like-vektede deloppgaver** med den faste instruksen «Alle svar skal
begrunnes». Faget er **utpreget bevistungt** (~75–85 % av poengene ligger i
begrunnelser og strukturelle argumenter). **Fem søyler bærer hvert eneste sett:**
(1) endelige abelske grupper og gruppestruktur (klassifikasjon opp til isomorfi,
`U(Z_n)`, ordensregning; 80 %), (2) permutasjoner (disjunkte sykler, orden = lcm,
paritet, `A_n`, generatorer; 87 %), (3) undergruppe/normal/kvotient + homomorfi
med **fundamentalteoremet for gruppehomomorfier** (100 %), (4) **Sylow-teori** og
«vis at G ikke er simpel» (73 %), og (5) ring-/kroppsteori — irredusible
polynomer over `Z_p` + **konstruer endelig kropp** `Z_p[x]/(f)` (100 %). En
**Burnside-tellingsoppgave** (fargelegg en figur, tell baner) kommer i tillegg de
fleste år (60 %). **Galois-teori testes IKKE** — kroppsteorien stopper ved
endelige kropper. Boka er bygd baklengs fra det sensor faktisk premierer: **å
navngi teoremet som bærer argumentet** (Sylow III, Lagrange, fundamentalteoremet,
undergruppetesten, Burnsides formel), **fullstendig bevisføring** («for alle `g`»,
ikke eksempler; utelukke ALLE faktoriseringstyper), og **eksakte tellinger** som
stemmer.

### 1.5 Kritiske stil-, notasjons- og bevisregler (gjelder HELE boka)

1. **Alt begrunnes; løsningen ER et bevis.** Ordrett eksamensinstruks på hvert
   sett: «Alle svar skal begrunnes.» Et riktig tall/svar uten føring gir nær null.
   Hvert eksempel og hver oppgaveløsning skrives som **A-besvarelse**: kort,
   fullstendig bevis der (a) forutsetningen navngis, (b) teoremet som bærer
   argumentet navngis, (c) konklusjonen trekkes eksplisitt.
2. **Notasjonsstandard (fra arkivet):** `Z_n` (syklisk gruppe/restklassering);
   `U(Z_n)` = `Z_n^*` (enheter); `S_n`, `A_n`, `D_n` (diedral); syklenotasjon
   $(a_1\,a_2\,\dots\,a_k)$; $\langle a\rangle$ (generert undergruppe **og**
   prinsipalideal); $\operatorname{ord}(g)$; $[G:H]$ (indeks); $H\trianglelefteq G$
   (normal); $G/N$ (kvotient); $H\times K$ (direkte produkt); $\ker\varphi$,
   $\operatorname{im}\varphi$; $Z(G)$ (senter); $n_p$ (antall Sylow-`p`-
   undergrupper); $(f)$ (idealet generert av `f`); $Z_p[x]/(f)$; $\mathrm{GF}(p^n)$;
   $F^*$ (enhetsgruppe i en kropp); Burnside $X_g$ (fikspunktmengde), $G_x$
   (isotropi/stabilisator). Bruk arkivets notasjon, ikke lærebok-alternativer.
3. **Ingen hjelpemidler → alt må sitte (kode D).** Det deles **ingen
   formelsamling** ut (til forskjell fra analysefagene). Studenten må kunne alle
   definisjoner, teoremer og standardargumenter utenat. Boka bygger derfor et
   **aktivt reservoar**: hvert delkapittel har en `collapsible`
   **Symbol-, formel- og teoremliste** (rett etter Forkunnskaper, plassert sist i
   delkapitlet med notisen «Oppslagsverk — alt her forklares underveis i kapitlet»)
   som samler symbolene, definisjonene og teoremene delkapitlet krever utenat.
4. **Eksakte, «pene» tall og små strukturer.** Fordi det ikke er hjelpemidler,
   arbeides det i $Z_n$ for lite $n$ ($Z_2,Z_3,Z_5,Z_6,Z_{12},Z_{16},Z_{34}$), i
   $S_4/A_4/S_5/D_n$, og med grupper av liten faktoriserbar orden (12, 18, 20, 27,
   55, 99, 105). Endelige kropper er $Z_3[x]/(x^2+1)$ (9 elementer),
   $Z_2[x]/(x^3+x+1)$ (8 elementer), $Z_3[x]/(x^3+2x+1)$ (27 elementer). Oppgi
   **alltid tallverdier eksplisitt**: gruppeorden, `|U(Z_n)|`, antall elementer
   $p^n$, Sylow-tallene `n_p`, banetall (Burnside).
5. **Teoremer navngis når de bærer argumentet:** **Lagranges teorem**, **Cauchys
   teorem**, **Sylow-teoremene I–III**, **fundamentalteoremet for endelig-
   genererte abelske grupper**, **fundamentalteoremet for gruppehomomorfier**
   ($G/\ker\varphi\cong\operatorname{im}\varphi$), **2. og 3. isomorfisetning**,
   **undergruppetesten**, **Burnsides formel** (Cauchy–Frobenius), **kvotient-
   kriteriet** (`R/I` integritetsområde ⇔ `I` prim; `R/I` kropp ⇔ `I` maksimal).
   Sensor forventer at studenten peker på teoremet som bærer konklusjonen.
6. **Kvantorer og fullstendighet.** En undergruppe vises ved å sjekke *alle*
   aksiomene; normalitet ved $gHg^{-1}=H$ for **alle** `g` (ikke bare eksempler);
   irredusibilitet av grad 4–5 ved å utelukke **alle** faktoriseringstyper, ikke
   bare røtter; «`α` genererer `F^*`» ved å eliminere **alle** ekte divisor-ordener
   av $p^n-1$. Boka trener disse «for alle»/«det finnes»-skjelettene eksplisitt.
7. **Matematiske påstander verifiseres FØR de skrives (DNA-regnefag).** Ved
   bygging skal alle tallpåstander (banetall, ordener, antall irredusible
   polynomer, Sylow-tellinger) etterregnes; usikre påstander merkes `(verifiser)`.
   Standardeksemplene i skjelettet er sjekket, men forfatteren skal re-verifisere
   hvert konkret tall (særlig antall irredusible polynomer og Burnside-summer).

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regnefag-regelen): gruppegrunnlag →
permutasjoner → abelsk struktur → normalitet/homomorfi → gruppevirkning →
Sylow → ringer → endelige kropper → videregående struktur → eksamenstrening.
Frekvensen styrer *omfanget*, ikke rekkefølgen: de to 100 %-søylene (undergruppe/
normal/homomorfi og ring/endelig kropp) og de nesten-garanterte (permutasjon,
abelsk, Sylow, Burnside) får hver sin del med teori- **og** drillkapittel og
høyest kvote; lavfrekvent stoff (senter/oppløsbar/Frobenius) får ett kompakt
kapittel.

| Del | Tittel | Kap. | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart og bevishåndverk | 2 | perfekt (meta) | Formen (10 like-vektede deloppgaver, 4 t, kode D, «alle svar skal begrunnes»), de fem søylene, temafrekvensene, sensorkravene og kildeforbeholdet må etableres FØR fagstoffet. Bevishåndverket (0.2) er unikt kritisk fordi 75–85 % av poengene ER bevis. |
| 1 | Grupper, undergrupper og Lagrange | 3 | grunnlag/perfekt | Gruppeaksiomer + aksiomverifikasjon (sjanger L, 47 %), undergruppetesten, sykliske grupper og orden, Lagranges teorem — fundamentet for alt annet. |
| 2 | Permutasjonsgrupper | 2 | perfekt (87 %) | Disjunkte sykler, orden = lcm, paritet, `A_n`/`D_n`, generatorer, orden-eksistens; + drillkapittel. En av de mest «mekaniske», trygge poengkildene. |
| 3 | Endelige abelske grupper og `U(Z_n)` | 2 | perfekt (80 %) | Fundamentalteoremet for endelige abelske grupper (klassifikasjon opp til isomorfi), `U(Z_n)`-struktur, høyeste orden/syklisitet; + drillkapittel. Fast åpningsoppgave. |
| 4 | Normalitet, kvotienter, homomorfier | 3 | perfekt (100 %) | Normale undergrupper, kvotientgrupper, **fundamentalteoremet for gruppehomomorfier**, 2./3. isomorfisetning + `HK`/`G/(H∩K)`-argumenter. Den ene 100 %-gruppesøylen; bærer 10–15 % av settet. |
| 5 | Gruppevirkning og Burnside | 2 | kunne (60 %) | Bane/isotropi, bane-stabilisator, klasseligningen, **Burnsides formel** (fargelegg figur, tell baner); + drillkapittel. Den ene oppgaven med konkret tallsvar; NTNU-signatur (kreativt innpakket). |
| 6 | Sylow-teori og enkelhet | 2 | perfekt (73 %) | Sylow I–III, tell `n_p`, «vis at G ikke er simpel»; varianter `p^n` (klasseligning/senter), `pq`, `p^t m`; + drillkapittel. Den klassiske karakterskiller-oppgaven. |
| 7 | Ringer, idealer og integritetsområder | 2 | perfekt/kunne (100 % ring-blokk) | Ring-/idealdefinisjoner, maksimale/primidealer + kvotient-kriteriet, endelig integritetsområde er kropp. Forutsetning for endelig-kropp-konstruksjonen. |
| 8 | Polynomringer og endelige kropper | 3 | perfekt (100 %) | Polynomring `F[x]`, irredusibilitet over `Z_p` (rot-test + faktoriseringsutelukkelse grad ≥4), **konstruer `Z_p[x]/(f)`**, `F^*` syklisk + generator; + drillkapittel. Den andre 100 %-søylen. |
| 9 | Videregående struktur (dybde) | 1 | kjenne (13–20 %) | Senter `Z(G)`, oppløsbare grupper/komposisjonsrekker, Frobenius-endomorfi + underkropper av `GF(p^n)`. Karaktertopp-stoff; ett kompakt kapittel. |
| 10 | Eksamenstrening | 5 | perfekt (meta) | Sjangerspill (løsningsoppskrifter A–O) + **3 komplette øvingseksamener** (10 like-vektede deloppgaver, tegnet bevis-fasit) + bevisverksted (standardargument-katalogen + kald bank). |

Rasjonale: de to 100 %-søylene og de nesten-garanterte (permutasjon 87 %, abelsk
80 %, Sylow 73 %) får hver sin del med drillkapittel og høyest kvote; Burnside
får egen del med drill fordi den er den eneste tall-oppgaven og kreativt
innpakket; videregående struktur får ett kompakt kapittel fordi den er
karaktertopp (13–20 %). **Nesten hele bredden testes hvert sett** — prioriteringen
styrer dybde og drillmengde, ikke *om* et tema er med.

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart og bevishåndverk |
| 1 | Grupper, undergrupper og Lagrange |
| 2 | Permutasjonsgrupper |
| 3 | Endelige abelske grupper og U(Z_n) |
| 4 | Normalitet, kvotienter og homomorfier |
| 5 | Gruppevirkning og Burnside |
| 6 | Sylow-teori og enkelhet |
| 7 | Ringer, idealer og integritetsområder |
| 8 | Polynomringer og endelige kropper |
| 9 | Videregående struktur |
| 10 | Eksamenstrening |

### Sjangerkoder (fra analysen §3 — brukes i «Eksamensbelegg» under)

**A** Klassifiser endelige abelske grupper opp til isomorfi (fundamentalteoremet;
match mot konkret objekt via høyeste orden) · **B** Enhetsgruppen `U(Z_n)` og dens
struktur (ordenstabell, syklisitet) · **C** Permutasjoner (syklform, orden = lcm,
paritet, `⟨σ⟩`/`⟨σ,τ⟩`) · **D** Undergruppetest + normalitet (`gHg^{-1}=H` for alle
`g`; moteksempel for ikke-normal) · **E** Homomorfi + fundamentalteoremet
(`φ`, kjerne, surjektivitet, `G/ker φ ≅ im φ`; `R/Z ≅ U`) · **F** Sylow-teori (tell
`n_p`, «vis at G ikke er simpel») · **G** Gruppevirkning + Burnside (fargelegg
figur, tell baner; isotropi/bane) · **H** Irredusible polynomer over `Z_p`
(rot-test grad 2–3, faktoriseringsutelukkelse grad ≥4) · **I** Konstruer endelig
kropp `Z_p[x]/(f)` (irredusibel ⇒ maksimal ⇒ kropp; `p^n` elementer; generator for
`F^*`) · **J** Ideal-teori (maksimale/primidealer, kvotient-kriteriet) · **K**
Endelig integritetsområde ⇒ kropp · **L** Aksiomverifikasjon: vis at `(G,∗)` er en
gruppe · **M** Isomorfisetningene / `HK`/`G/(H∩K)`-argumenter · **N** Endelige
kropper: Frobenius, underkropper · **O** Oppløsbare grupper/komposisjonsrekker/
senter.

### Sensorkrav (fra analysen §4 — etableres i Del 0, refereres i hvert kapittel)

1. **Alle svar skal begrunnes.** Ordrett instruks på hvert sett; i et bevisfag ER
   begrunnelsen svaret. Et korrekt tall uten gyldig argument gir lite.
2. **Teorem- og definisjonsnavn skal bæres eksplisitt** (fundamentalteoremet for
   gruppehomomorfier, Lagrange, Sylow III, Cauchy, undergruppetesten, Burnsides
   formel, fundamentalteoremet for endelige abelske grupper). De typesatte
   fasitene skriver dem ut hver gang.
3. **Formell bevisføring forventes:** undergruppe ved *alle* aksiomer; normalitet
   ved `gHg^{-1}=H` for **alle** `g`; irredusibilitet grad 4–5 ved å utelukke
   **alle** faktoriseringstyper. Kvantorer håndteres riktig.
4. **Deloppgavegjenbruk er designet inn:** «finn de irredusible polynomene» i a)
   mates rett inn i «konstruer kroppen» i b); en generell egenskap i a) anvendes på
   et konkret objekt i b). Å se koblingen premieres.
5. **Ti like-vektede deloppgaver:** ingen eksplisitt poengvekting utover at hver av
   de ti teller likt; karakteren settes helhetlig (ingen offentlig prosentskala).
   Sikre de mekaniske sjangrene (permutasjon, abelsk, kropp-konstruksjon) først.
6. **Konkrete tellinger skal stemme eksakt:** Burnside-svaret er et heltall; én
   feil `|X_g|` velter endesvaret. Fasiten viser hele oppsettet.

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

**#1** Normalitet vist bare med eksempler (ikke alle `g`), eller «normal»-konklusjon
uten å teste et `g` utenfor `H`. · **#2** Irredusibilitet grad ≥4 stoppet ved
rot-testen (glemmer å utelukke produkt av to andregradsfaktorer). · **#3** Feil i
Sylow-tellingen (bruker feil av de to Sylow III-kravene, eller glemmer at `n_p=1`
⇒ normal ⇒ ikke simpel). · **#4** Orden av permutasjon uten disjunkthet, eller
paritet feil (glemmer at en `k`-sykel er `k−1` transposisjoner). · **#5** Glemt å
vise surjektivitet/kjerne i fundamentalteoremet (`G/N≅H` uten å verifisere). ·
**#6** Feil valg av isomorfiklasse (lister riktig, men velger feil fordi høyeste
orden/syklisitet ikke er sjekket). · **#7** Burnside: feil fikspunkttelling (feil
antall sykler ⇒ feil eksponent i `farger^{sykler}`). · **#8** Ideal-forveksling
(blander maksimalt og prim, glemmer at maksimalt ⇒ prim men ikke omvendt). · **#9**
Aksiomsjekk som hopper over lukkethet/invers-tilhørighet. · **#10** Generator-
argument ufullstendig (viser ikke at `α` mangler ekte divisor-ordener av `p^n−1`).
· **#11** Tidsfelle: bruker for lenge på bevistunge Sylow-/Frobenius-oppgaver før de
mekaniske er sikret.

### Kapittel-DNA A — teori-/beviskapittel (flertallet av kapitlene)

Obligatorisk blokk-rekkefølge (plattformens blokktyper), i læringsløkker
(Teori → Eksempel → Oppgave) gjennom delkapitlet:

1. `tip` **Eksamensvinkel** — frekvens/vekt, hvilke sjangre (A–O) temaet inngår i,
   hva sensor ser etter. Fylles fra skjelettets Eksamensbelegg — forfatteren finner
   IKKE på frekvenstall.
2. `text` **Forkunnskaper** — kapitler i boka det bygger på + kryssbok-lenker,
   etterfulgt av `collapsible` **Symbol-, formel- og teoremliste** (alle symboler,
   definisjoner og teoremer delkapitlet krever utenat — «må sitte», ingen
   vedleggstabell).
3. `text` **Motivasjon** — kort (maks 2–3 avsnitt): hva temaet tester, når det
   opptrer. Gjerne et konkret hverdagsanker (symmetrier, klokkearitmetikk) FØR
   formalismen.
4. `definition`/`theorem` **Begreps- og teoremkontrakt** — kjernebegreper og
   resultater i arkivets notasjon. Definition-blokker åpner med forklaringen i
   ORD; formelen kommer etter. **Toppnivå med `title` — dette er flashcard-kilden.**
5. `text` **Utledning/bevis med intuisjon** — bevis eksamen krever aktivt vises
   steg for steg med en «Intuisjon:»-linje etter hvert steg; resultater som bare
   skal *brukes* presenteres uten fullt bevis (merk skillet).
6. `example` × 2–4 **Modellbevis** — første enkelt, siste på **eksamensnivå**,
   modellert på en reell sjanger (A–O). Løsningen skrives som A-besvarelse:
   forutsetning navngitt, teorem navngitt, konklusjon trukket.
7. `warning` **Typiske feil** — feilkodene (#1–#11) som gjelder temaet; glosses ved
   FØRSTE bruk i kapitlet («#3 — feil av de to Sylow III-kravene»).
8. `exercise` × 6–12 — stigende: 2–3 innøving (lett), 2–4 standard (middels), 2–4
   eksamensklone (vanskelig, samme sjanger/vekt, nyskrevne tall/struktur). Alle med
   `solution` (skrevet bevis) + `hints` (første hint = teoremet/første grep, aldri
   konklusjonen). Hver oppgave merket med sjangerkode.
9. `collapsible` **Repetisjon** — 4–6 korte kontrollpunkter fra kapitlet og
   forutgående kapitler det bygger på.

### Kapittel-DNA B — drillkapittel (2.2/3.2/5.2/6.2/8.3)

1. `tip` **Eksamensvinkel** — hvilke varianter av sjangeren som har forekommet.
2. `text` **Forkunnskaper** + `collapsible` **Symbol-/teoremliste** (sjangerens
   teoremer i kortform).
3. `text` **Løsningsoppskrift** — algoritmisk fremgangsmåte for sjangeren
   (nummererte trinn), avsluttet med bevis-/begrunnelsesmalen.
4. `example` **Gjennomført eksamenscase** med sensor-margnotater om hva som gir
   uttelling ved hvert steg.
5. `warning` **Typiske feil** (feilkodene for sjangeren).
6. `exercise` × 8–15 varianter på eksamensnivå, alle med `solution` + `hints`.

Eksamenstreningskapitlene (Del 10) har egne oppsett — se §3.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = frekvens/vekt + sjangerkoder (A–O) +
> prioritetsklasse (perfekt/kunne/kjenne/grunnlag/meta), alt «per 2014–2025-
> arkivet». **Begrepskontrakt** = definisjoner/teoremer som SKAL med (flashcard-
> kilden). **Oppgavesjangre** = sjangrene kapitlet driller. **Kvote** =
> quiz/flashcards. Kryssbok-lenker peker på eksisterende kapitler
> (`(verifiser lenke)` der usikker).

### Del 0 — Eksamenskart og bevishåndverk *(prioritet: PERFEKT (meta))*

#### Kapittel 0.1: Eksamenskartet — slik testes TMA4150
**id:** `tma4150-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Eksamensformen (10 like-vektede deloppgaver, 4 t, kode D, «alle
  svar skal begrunnes»), de fem søylene + Burnside, temafrekvensene, sensorkravene,
  kildeforbeholdet og NTNU-avgrensningen (ingen Galois) — verktøyet som styrer hele
  boka.
- **Eksamensbelegg:** Metakapittel (hele arkivet 2014–2025). Skal formidle: (a)
  **formen** — 4 t skriftlig, **10 like-vektede deloppgaver**, kode D (ingen
  hjelpemidler, enkel kalkulator), norsk tekst (engelsk vedlagt), ingen flervalg;
  (b) **de fem søylene** + Burnside med frekvens (ring/kropp 100 %, undergruppe/
  normal/homomorfi 100 %, permutasjon 87 %, abelsk 80 %, Sylow 73 %, Burnside
  60 %); (c) **temafrekvens-tabellen** (analysen §2); (d) **sensorkravene** (§2);
  (e) **kildeforbeholdet** — 15 velkarakteriserte sett, typesatte fasiter for
  V2018–V2020/V2024–V2025 + Kont2023, resten skummet; nye sett kan endre bildet;
  (f) **NTNU-avgrensningen** — Galois-teori testes IKKE (kroppsteori stopper ved
  endelige kropper). Prioritet: perfekt (meta).
- **Innholdskontrakt:** Del 0-pakken (README «Leserkrav»): **«Slik leser du denne
  boka»-boks** (type `text`/`tip`, IKKE `definition`) som forklarer karakterskalaen
  (A–F, C er en god og vanlig karakter), sjangerkodene A–O i klarspråk, og at
  typiske feil har et samlet register (#1–#11); **«Lite tid?»-boks** (3–5-dagers
  hurtigrute + timeanslag, med LESE- vs. gjøre-tid ×1,5); **kildenote** for
  frekvens-empirien (hvilke sett/år, forbehold); **prosedyre-/sjangerkort på én
  side** (sjanger → én linjes oppskrift → tidsbudsjett → vanligste feil);
  **deltidsrute** (10–12 uker à ~8 t) med øvingseksamener fordelt; **«lese mye,
  skrive lite»-boks** + råd om å skrive minst én øvingseksamen for hånd på tid.
  Prognosen for neste sett (jf. analysen §7). Ingen forkunnskapsblokk (metakapittel).
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver («gitt en
  4-timers mal med 10 like-vektede deloppgaver — sett opp tidsbudsjett og
  rekkefølge»; «avgjør av en oppgavetekst om den krever fullt bevis eller bare et
  tall»).
- **Typiske feil:** Metafeilene: å svare med tall uten begrunnelse (sensorkrav 1);
  tro at Galois-teori testes (les NTNU-avgrensningen); vente formelsamling/tabeller
  (finnes ikke); tidsfella #11 (bruke for lenge på bevistunge oppgaver først).
- **Kvote:** 12 quiz / 10 flashcards (formfakta, søylene, temafrekvens,
  sensorkravene, sjangerkodene, kildeforbeholdet, NTNU-avgrensningen).

#### Kapittel 0.2: Bevishåndverket — føre bevis og navngi teoremet
**id:** `tma4150-0-2` · **number:** 0.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4150-0-1`

- **Kapitteltype:** håndverkskapittel (meta — bevisspråk).
- **Description:** Ferdigheten som gir poeng på hver eneste oppgave: å føre et
  fullstendig bevis der forutsetningen og teoremet navngis og konklusjonen trekkes
  eksplisitt. Etablerer bevisstrukturene («for alle», «det finnes», moteksempel,
  kontrapositiv, induksjon) og begrunnelsesmalen resten av boka bruker.
- **Eksamensbelegg:** Gjennomgående (sensorkrav 1, 2, 3 på tvers av alle sjangre).
  Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 0.1; grunnleggende mengdelære og logikk
  (repeteres kort her). `collapsible` **Symbol-, formel- og teoremliste:**
  kvantorsymboler ($\forall,\exists$), $\Rightarrow/\Leftrightarrow$, bevisformer.
- **Begrepskontrakt (flashcard-kilde):** **direkte bevis**; **kontrapositiv**
  ($P\Rightarrow Q$ vises som $\neg Q\Rightarrow\neg P$); **moteksempel** (for å
  motbevise «for alle»); **ekvivalensbevis** (begge veier / ekvivalenskjede);
  **induksjon**; **«det finnes»-bevis** (konstruer et vitne); **bevis via
  bijeksjon/homomorfi**. **Begrunnelsesmalen:** «Fordi [forutsetning], gir
  [navngitt teorem] at [konklusjon]». **Standard bevisskjelett for de fem
  gjengangerne** oppsummeres (undergruppetest, normalitet for alle `g`, kjerne+
  surjektivitet i fundamentalteoremet, Sylow-telling, irredusibilitet-utelukkelse).
- **Utledning/bevis med intuisjon:** vis ett fullstendig modellbevis (f.eks.
  «ordenen til et element deler gruppeordenen» via Lagrange) med hvert logisk steg
  navngitt, som normativ mal.
- **Typiske feil:** #1 (eksempler i stedet for «for alle»), #5 (glemt et ledd i en
  ekvivalens); i tillegg: å påstå uten å navngi teoremet, å forveksle
  $P\Rightarrow Q$ med $Q\Rightarrow P$.
- **Modellsvar:** «Vis at et element av orden 6 i en gruppe genererer en syklisk
  undergruppe med nøyaktig 6 elementer, og navngi teoremet du bruker»; «Motbevis
  påstanden ‘enhver gruppe av orden 6 er abelsk’ med ett moteksempel» ($S_3$).
- **Kvote:** 14 quiz / 14 flashcards.

**Prøve-kvote Del 0:** ingen egen prøve (dekkes av øvingseksamenene i Del 10).

### Del 1 — Grupper, undergrupper og Lagrange *(prioritet: GRUNNLAG / PERFEKT for aksiomsjekk)*

#### Kapittel 1.1: Grupper og aksiomverifikasjon
**id:** `tma4150-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4150-0-2`

- **Kapitteltype:** teori-/beviskapittel (grunnlag → perfekt for sjanger L).
- **Description:** Gruppeaksiomene (lukkethet, assosiativitet, identitet, invers) og
  hvordan man **verifiserer at `(G,∗)` er en gruppe** for en eksplisitt operasjon —
  den subtile delen er lukkethet og invers-tilhørighet.
- **Eksamensbelegg:** Sjanger L (7/15, 47 %): «vis at `(G,∗)` er en gruppe» for
  `a∗b=ab/7`, `a∗b=a+b+ab`, matriseprodukt, komponentvis regel på `Q×Q`.
  Prioritet: perfekt (grunnlag). Sjangre: L, D.
- **Forkunnskaper/kryssbok:** kap. 0.2. `collapsible` **Symbol-/teoremliste:**
  gruppeaksiomer, abelsk, identitet/invers entydig.
- **Begrepskontrakt (flashcard-kilde):** **gruppe** (lukket, assosiativ, identitet,
  invers); **abelsk gruppe** (kommutativ); identitet og invers er **entydige**;
  forkortningslov ($ab=ac\Rightarrow b=c$); orden av en gruppe $|G|$. Eksempler:
  $Z_n$, $S_n$, $U(Z_n)$, $GL(2,\mathbb{R})$.
- **Utledning/bevis:** vis at identitet er entydig og invers er entydig
  (standardbevis). **Aksiomverifikasjons-oppskriften:** (1) lukkethet (og at
  operasjonen unngår forbudte verdier), (2) assosiativitet, (3) identitet, (4)
  invers (ligger i `G`), (5) kommutativitet hvis abelsk.
- **Typiske feil:** #9 (hopper over lukkethet/invers-tilhørighet — f.eks. at
  inversen unngår en forbudt verdi som −1); anta assosiativitet uten sjekk.
- **Modellsvar:** «Vis at $\mathbb{R}\setminus\{-1\}$ med $a\ast b=a+b+ab$ er en
  abelsk gruppe, og forklar hvorfor −1 må utelukkes» (invers $a^{-1}=-a/(1+a)$).
- **Kvote:** 22 quiz / 24 flashcards.

#### Kapittel 1.2: Undergrupper, sykliske grupper og orden
**id:** `tma4150-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4150-1-1`

- **Kapitteltype:** teori-/beviskapittel (grunnlag → perfekt).
- **Description:** Undergruppetesten (ett- og totrinns), generert undergruppe
  $\langle a\rangle$, sykliske grupper og elementorden — verktøyene brukt i nesten
  hver oppgave.
- **Eksamensbelegg:** Del av kjerneblokken (undergruppetesten inngår i sjanger D,
  100 %); orden/syklisk-kriterium (7/15, 47 %). Prioritet: perfekt. Sjangre: D, C, A.
- **Forkunnskaper/kryssbok:** kap. 1.1. `collapsible` **Symbol-/teoremliste:**
  undergruppetest, $\langle a\rangle$, $\operatorname{ord}(g)$, syklisk-kriterium.
- **Begrepskontrakt (flashcard-kilde):** **undergruppe**; **undergruppetesten**
  (ikke-tom + lukket under produkt og invers; ettrinns $ab^{-1}\in H$); **generert
  undergruppe** $\langle a\rangle=\{a^k\}$; **orden av element** $\operatorname{ord}(g)$
  = minste $k>0$ med $g^k=e$; **syklisk gruppe** ($G=\langle a\rangle$); undergrupper
  av en syklisk gruppe er sykliske (én per divisor av ordenen); $\operatorname{ord}(g)\mid|G|$.
- **Utledning/bevis:** bevis undergruppetesten (ettrinns) og at
  $\operatorname{ord}(g)=|\langle g\rangle|$.
- **Typiske feil:** glemme ikke-tomhet eller invers i undergruppetesten; regne
  ordenen feil (ikke minste $k$).
- **Modellsvar:** «Vis at $\langle 4\rangle$ i $Z_{12}$ er en undergruppe, og finn
  ordenen til hvert element» (→ orden 3, elementene $\{0,4,8\}$).
- **Kvote:** 22 quiz / 24 flashcards.

#### Kapittel 1.3: Lagranges teorem
**id:** `tma4150-1-3` · **number:** 1.3 · **estimatedMinutes:** 50 · **prerequisites:** `tma4150-1-2`

- **Kapitteltype:** teori-/beviskapittel (perfekt som verktøy).
- **Description:** Sidegrupper (cosets), indeks $[G:H]$ og **Lagranges teorem**
  ($|H|\mid|G|$) med konsekvenser (orden deler gruppeorden; grupper av primtallsorden
  er sykliske) — det mest brukte verktøyet på hele eksamen.
- **Eksamensbelegg:** Lagrange/ordensregning som verktøy (7/15, 47 %), men brukt i
  nesten hver Sylow-, abelsk- og generator-oppgave. Prioritet: perfekt (verktøy).
  Sjangre: gjennomgripende (A, B, C, F, I).
- **Forkunnskaper/kryssbok:** kap. 1.2. `collapsible` **Symbol-/teoremliste:**
  sidegruppe, indeks, Lagrange, konsekvenser.
- **Begrepskontrakt (flashcard-kilde):** **venstre/høyre sidegruppe** $gH$;
  sidegruppene partisjonerer `G` og har lik størrelse; **indeks** $[G:H]=|G|/|H|$;
  **Lagranges teorem** $|H|\mid|G|$; konsekvenser: $\operatorname{ord}(g)\mid|G|$;
  gruppe av primtallsorden er syklisk; $g^{|G|}=e$.
- **Utledning/bevis:** bevis Lagrange (sidegruppene er disjunkte og like store).
- **Typiske feil:** tro at omvendingen holder (en divisor $d\mid|G|$ garanterer
  IKKE en undergruppe av orden $d$ — unntatt via Sylow/Cauchy); blande venstre/høyre
  sidegruppe med normalitet.
- **Modellsvar:** «Vis at enhver gruppe av orden 7 er syklisk», «Bruk Lagrange til å
  vise at $\operatorname{ord}(g)\mid|G|$ for alle $g$».
- **Kvote:** 20 quiz / 22 flashcards.

**Prøve-kvote Del 1:** 4 prøver (1.A gruppeaksiomer + aksiomverifikasjon · 1.B
undergrupper + sykliske + orden · 1.C Lagrange + sidegrupper · 1.D samlet
grunnlagsprøve på eksamensnivå).

### Del 2 — Permutasjonsgrupper *(prioritet: PERFEKT — 87 %)*

#### Kapittel 2.1: Sykler, orden og paritet
**id:** `tma4150-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `tma4150-1-2`

- **Kapitteltype:** teori-/beviskapittel (perfekt).
- **Description:** Å skrive en permutasjon som produkt av **disjunkte** sykler,
  regne orden = lcm av syklengder, bestemme paritet (like/odde) og medlemskap i
  `A_n`, og finne genererte undergrupper $\langle\sigma\rangle$, $\langle\sigma,\tau\rangle$.
- **Eksamensbelegg:** Sjanger C (13/15, 87 %): «skriv $\sigma$ som disjunkte sykler
  og finn ordenen», «finnes et element av orden `m` i $S_n$?». En av de mest
  mekaniske, trygge poengkildene. Prioritet: perfekt. Sjangre: C.
- **Forkunnskaper/kryssbok:** kap. 1.2. `collapsible` **Symbol-/teoremliste:**
  syklenotasjon, disjunkt, orden = lcm, transposisjon, paritet, $A_n$, $D_n$.
- **Begrepskontrakt (flashcard-kilde):** **permutasjon**, $S_n$; **syklenotasjon**
  $(a_1\,a_2\,\dots\,a_k)$; **disjunkte sykler** kommuterer; **orden** =
  $\operatorname{lcm}$ av syklengder (etter at syklene er gjort disjunkte);
  **transposisjon** (2-sykel); en $k$-sykel = $k-1$ transposisjoner; **paritet**
  (like/odde), **$A_n$** = like permutasjoner ($|A_n|=n!/2$); **$D_n$** (diedral,
  orden $2n$); $S_n$ generert av transposisjoner / av $(1\,2)$ og en $n$-sykel.
- **Utledning/bevis:** bevis at orden = lcm; at paritet er veldefinert.
- **Typiske feil:** #4 (regne lcm før syklene er disjunkte; telle paritet feil —
  glemme at en $k$-sykel er $k-1$ transposisjoner).
- **Modellsvar:** «Skriv $(1\,3\,5\,4)(1\,3\,4\,6)(3\,4)$ som disjunkte sykler og
  finn ordenen» `(verifiser — regn ut sammensetningen fra høyre)`; «Finnes et
  element av orden 15 i $S_7$?» (partisjon $3+5$ av $\le7$ med lcm 15 → ja).
- **Kvote:** 28 quiz / 24 flashcards.

#### Kapittel 2.2: Drill — permutasjoner (sjanger C)
**id:** `tma4150-2-2` · **number:** 2.2 · **estimatedMinutes:** 45 · **prerequisites:** `tma4150-2-1`

- **Kapitteltype:** drillkapittel (DNA B).
- **Description:** Ren mengdetrening på syklform + orden + paritet + generert
  undergruppe, på eksamensnivå — den tryggeste poengkilden på settet.
- **Eksamensbelegg:** Sjanger C (87 %). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.1. `collapsible` **Symbol-/teoremliste:**
  syklform, orden = lcm, paritet, generatorer.
- **Løsningsoppskrift:** (1) skriv som disjunkte sykler (komponer fra høyre), (2)
  orden = lcm av syklengdene, (3) paritet = paritet av (sum av $(k_i-1)$), (4) for
  $\langle\sigma\rangle$: list potensene til orden nås, (5) begrunn hvert steg.
- **Typiske feil:** #4 (ikke-disjunkte sykler, paritetsfeil).
- **Kvote:** 12 quiz / 8 flashcards. (Drillkapittel — kvote lavere, oppgavetung.)

**Prøve-kvote Del 2:** 4 prøver (2.A syklform + orden · 2.B paritet + $A_n$ ·
2.C generatorer + $\langle\sigma,\tau\rangle$ · 2.D samlet permutasjonsprøve på
eksamensnivå).

### Del 3 — Endelige abelske grupper og U(Z_n) *(prioritet: PERFEKT — 80 %)*

#### Kapittel 3.1: Klassifikasjon av endelige abelske grupper
**id:** `tma4150-3-1` · **number:** 3.1 · **estimatedMinutes:** 60 · **prerequisites:** `tma4150-1-3`

- **Kapitteltype:** teori-/beviskapittel (perfekt).
- **Description:** **Fundamentalteoremet for endelig-genererte abelske grupper** —
  klassifikasjon opp til isomorfi som produkt av $Z_{p^k}$ — og hvordan man matcher
  et konkret objekt mot riktig isomorfiklasse via høyeste elementorden/syklisitet.
- **Eksamensbelegg:** Sjanger A (12/15, 80 %): «beskriv alle abelske grupper av
  orden $n$ opp til isomorfi, og avgjør hvilken $U(Z_m)$ / kvotienten er isomorf
  med». Fast åpningsoppgave. Prioritet: perfekt. Sjangre: A.
- **Forkunnskaper/kryssbok:** kap. 1.3. `collapsible` **Symbol-/teoremliste:**
  direkte produkt, fundamentalteoremet, partisjon av eksponent, høyeste orden.
- **Begrepskontrakt (flashcard-kilde):** **direkte produkt** $Z_m\times Z_n$;
  $Z_m\times Z_n\cong Z_{mn}$ **hviss** $\gcd(m,n)=1$; **fundamentalteoremet for
  endelige abelske grupper** — én isomorfiklasse per partisjon av hver primeksponent;
  høyeste elementorden = eksponenten til gruppa; syklisk ⇔ eksponent = orden.
- **Utledning/bevis:** vis hvordan man lister klassene fra $n=p_1^{a_1}\cdots$
  (partisjoner av hver $a_i$); vis $Z_m\times Z_n\cong Z_{mn}$ ved $\gcd=1$.
- **Typiske feil:** #6 (feil valg av isomorfiklasse — sjekk høyeste orden/syklisitet
  i det konkrete objektet).
- **Modellsvar:** «Beskriv alle abelske grupper av orden 16 opp til isomorfi (→
  $Z_{16},Z_8\times Z_2,Z_4\times Z_4,Z_4\times Z_2\times Z_2,Z_2^4$), og avgjør
  hvilken $U(Z_{34})$ er isomorf med» `(verifiser: |U(Z_34)|=16)`.
- **Kvote:** 22 quiz / 24 flashcards.

#### Kapittel 3.2: Enhetsgruppen U(Z_n) + drill (sjanger A/B)
**id:** `tma4150-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4150-3-1`

- **Kapitteltype:** teori-/drillkapittel (perfekt).
- **Description:** Enhetsgruppen $U(Z_n)=\{a:\gcd(a,n)=1\}$: struktur, ordenstabell,
  syklisitet, og matching mot abelsk-klassifikasjonslisten — pluss ren
  klassifikasjonsdrill.
- **Eksamensbelegg:** Sjanger B (6/15) + drill på A. Prioritet: perfekt. Sjangre: B, A.
- **Forkunnskaper/kryssbok:** kap. 3.1. `collapsible` **Symbol-/teoremliste:**
  $U(Z_n)$, $\varphi(n)$ (orden), ordenstabell, syklisk-kriterium for $U(Z_n)$.
- **Begrepskontrakt (flashcard-kilde):** **enheter** $U(Z_n)$; $|U(Z_n)|=\varphi(n)$
  (Eulers $\varphi$); $U(Z_n)$ syklisk ⇔ $n\in\{1,2,4,p^k,2p^k\}$ `(verifiser)`;
  ordenstabell: $\operatorname{ord}(a)\mid|U(Z_n)|$ (Lagrange).
- **Løsningsoppskrift (drill):** (1) list enhetene, (2) regn orden til hvert (bruk
  Lagrange for å begrense), (3) avgjør syklisitet, (4) match mot abelsk-listen.
- **Typiske feil:** #6 (velge feil klasse); glemme at $\operatorname{ord}(a)$ deler
  $\varphi(n)$.
- **Modellsvar:** «Vis at $U(Z_{16})\cong Z_4\times Z_2$» (full ordenstabell:
  ingen element av orden 8) `(verifiser)`.
- **Kvote:** 22 quiz / 22 flashcards.

**Prøve-kvote Del 3:** 4 prøver (3.A klassifikasjon opp til isomorfi · 3.B
$U(Z_n)$-struktur + ordenstabell · 3.C match konkret objekt mot klasse · 3.D
samlet abelsk-prøve på eksamensnivå).

### Del 4 — Normalitet, kvotienter og homomorfier *(prioritet: PERFEKT — 100 %)*

#### Kapittel 4.1: Normale undergrupper og kvotientgrupper
**id:** `tma4150-4-1` · **number:** 4.1 · **estimatedMinutes:** 60 · **prerequisites:** `tma4150-1-3`

- **Kapitteltype:** teori-/beviskapittel (perfekt).
- **Description:** Normale undergrupper ($gHg^{-1}=H$ for **alle** `g`),
  kvotientgruppen $G/N$ og hvordan man viser (eller motbeviser) normalitet — ofte
  ved konkret matriseregning eller ved å finne én kjerne til en homomorfi.
- **Eksamensbelegg:** Sjanger D (100 %, del av kjerneblokken): «vis at `H` er/ikke
  er normal», «beskriv $G/N$». Prioritet: perfekt. Sjangre: D.
- **Forkunnskaper/kryssbok:** kap. 1.3. `collapsible` **Symbol-/teoremliste:**
  normal $H\trianglelefteq G$, konjugasjon, kvotient $G/N$, kriterier.
- **Begrepskontrakt (flashcard-kilde):** **normal undergruppe** ($gHg^{-1}=H\;
  \forall g$, ekvivalent $gH=Hg$); kjernen til en homomorfi er alltid normal;
  **kvotientgruppe** $G/N$ (veldefinert nettopp fordi `N` normal); indeks-2-
  undergrupper er normale; $H\trianglelefteq K$ men ikke nødvendigvis $H\trianglelefteq G$.
- **Utledning/bevis:** vis at $G/N$ er veldefinert ⇔ `N` normal; at kjerne er normal.
- **Typiske feil:** #1 (normalitet vist bare med eksempler; eller «normal»-
  konklusjon uten å teste et `g` utenfor `H`). Standard motargument: finn ett
  konkret `g` med $gHg^{-1}\not\subseteq H$.
- **Modellsvar:** «Vis at de øvre-triangulære matrisene i $GL(2,\mathbb{R})$ ikke er
  normale, ved å finne ett konkret konjugat utenfor mengden».
- **Kvote:** 22 quiz / 24 flashcards.

#### Kapittel 4.2: Homomorfier og fundamentalteoremet
**id:** `tma4150-4-2` · **number:** 4.2 · **estimatedMinutes:** 65 · **prerequisites:** `tma4150-4-1`

- **Kapitteltype:** teori-/beviskapittel (perfekt).
- **Description:** **Fundamentalteoremet for gruppehomomorfier**
  ($G/\ker\varphi\cong\operatorname{im}\varphi$) — den kanoniske teknikken for å
  identifisere en kvotientgruppe: definer $\varphi$, vis homomorfiegenskapen, regn
  kjernen, vis surjektivitet, konkluder.
- **Eksamensbelegg:** Sjanger E (100 %): «vis at $G/N\cong H$», klassikeren
  $\mathbb{R}/\mathbb{Z}\cong U$ (enhetssirkelen) via $r\mapsto e^{2\pi ir}$. Bærer
  10–15 % av settet. Prioritet: perfekt. Sjangre: E.
- **Forkunnskaper/kryssbok:** kap. 4.1. `collapsible` **Symbol-/teoremliste:**
  homomorfi, $\ker$, $\operatorname{im}$, fundamentalteoremet.
- **Begrepskontrakt (flashcard-kilde):** **homomorfi** $\varphi(ab)=\varphi(a)\varphi(b)$;
  **kjerne** $\ker\varphi=\{g:\varphi(g)=e\}$ (normal); **bilde**
  $\operatorname{im}\varphi$; **isomorfi** (bijektiv homomorfi); **fundamentalteoremet
  for gruppehomomorfier** $G/\ker\varphi\cong\operatorname{im}\varphi$.
- **Utledning/bevis:** bevis fundamentalteoremet (veldefinert isomorfi
  $gN\mapsto\varphi(g)$).
- **Typiske feil:** #5 (glemt å vise surjektivitet eller at `N` faktisk er kjernen
  — påstår $G/N\cong H$ uten verifikasjon).
- **Modellsvar:** «Vis at $\mathbb{R}/\mathbb{Z}$ er isomorf med enhetssirkelen $U$»
  ($\varphi(r)=e^{2\pi ir}$: homomorfi, surjektiv, kjerne $=\mathbb{Z}$).
- **Kvote:** 28 quiz / 24 flashcards.

#### Kapittel 4.3: Isomorfisetningene og HK-argumenter
**id:** `tma4150-4-3` · **number:** 4.3 · **estimatedMinutes:** 50 · **prerequisites:** `tma4150-4-2`

- **Kapitteltype:** teori-/beviskapittel (kunne — karakterskiller).
- **Description:** 2. og 3. isomorfisetning, $G/(H\cap K)\hookrightarrow (G/H)\times(G/K)$,
  og at $HK$ er en undergruppe når `K` er normal — de rene struktur-argumentene
  toppsjiktet premieres for.
- **Eksamensbelegg:** Sjanger M (6/15, 40 %). Prioritet: kunne (karakterskiller).
  Sjangre: M.
- **Forkunnskaper/kryssbok:** kap. 4.2. `collapsible` **Symbol-/teoremliste:**
  2./3. isomorfisetning, $HK$, kommutatorundergruppe.
- **Begrepskontrakt (flashcard-kilde):** **2. isomorfisetning**
  ($HN/N\cong H/(H\cap N)$); **3. isomorfisetning** ($(G/N)/(M/N)\cong G/M$);
  $HK$ undergruppe når `K` normal; $G/(H\cap K)\hookrightarrow (G/H)\times(G/K)$;
  **kommutatorundergruppe** $C(G)$: $G/N$ abelsk ⇔ $C(G)\subseteq N$.
- **Typiske feil:** anta $HK$ undergruppe uten normalitet; bruke feil
  isomorfisetning; glemme injektivitetskriteriet i $G/(H\cap K)$-innbindingen.
- **Modellsvar:** «Vis at $HK$ er en undergruppe når $K\trianglelefteq G$», «Bruk 2.
  isomorfisetning til å bestemme $HN/N$».
- **Kvote:** 18 quiz / 20 flashcards.

**Prøve-kvote Del 4:** 4 prøver (4.A normalitet (for alle `g` + moteksempel) · 4.B
fundamentalteoremet ($\ker$ + surjektivitet) · 4.C $\mathbb{R}/\mathbb{Z}\cong U$
+ isomorfisetningene · 4.D samlet kvotient-/homomorfiprøve på eksamensnivå).

### Del 5 — Gruppevirkning og Burnside *(prioritet: KUNNE — 60 %)*

#### Kapittel 5.1: Gruppevirkning, bane og isotropi
**id:** `tma4150-5-1` · **number:** 5.1 · **estimatedMinutes:** 60 · **prerequisites:** `tma4150-4-1`

- **Kapitteltype:** teori-/beviskapittel (kunne → perfekt for Burnside-setup).
- **Description:** Gruppevirkning, bane, isotropi (stabilisator), bane-stabilisator-
  teoremet og klasseligningen — apparatet bak Burnside-telling og
  $p$-gruppe-argumenter.
- **Eksamensbelegg:** Setup for Burnside (60 %) + klasseligningen brukt i Sylow-`p^n`
  (Del 6). Prioritet: kunne (setup for perfekt). Sjangre: G, F.
- **Forkunnskaper/kryssbok:** kap. 4.1. `collapsible` **Symbol-/teoremliste:**
  virkning, bane $Gx$, isotropi $G_x$, bane-stabilisator, klasseligning.
- **Begrepskontrakt (flashcard-kilde):** **gruppevirkning** $G\times X\to X$; **bane**
  $Gx$; **isotropi/stabilisator** $G_x=\{g:gx=x\}$ (undergruppe); **bane-
  stabilisator-teoremet** $|Gx|=[G:G_x]$; **klasseligningen** $|X|=|X_G|+\sum[G:G_x]$
  (over ikke-triviale baner), spesialtilfelle $|X|\equiv|X_G|\pmod p$ for
  $p$-grupper.
- **Utledning/bevis:** bevis bane-stabilisator-teoremet; klasseligningen.
- **Typiske feil:** blande bane og isotropi; feil telling av fikspunkter (kobles til #7).
- **Modellsvar:** «Regn ut banen og isotropiundergruppen til et hjørne i en kvadrat
  under $D_4$-virkning».
- **Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 5.2: Drill — Burnside-telling (sjanger G)
**id:** `tma4150-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4150-5-1`

- **Kapitteltype:** drillkapittel (DNA B).
- **Description:** **Burnsides formel** (Cauchy–Frobenius): antall baner
  $=\frac{1}{|G|}\sum_{g\in G}|X_g|$ — identifiser symmetrigruppen, regn $|X_g|=
  (\text{antall farger})^{\text{antall sykler i } g}$ per konjugasjonsklasse, sett
  inn. Kreativt innpakket (VM-baller, glassvinduer, terninger, roser); avmystifiser
  innpakningen.
- **Eksamensbelegg:** Sjanger G (9/15, 60 %). Den ene oppgaven med konkret tallsvar.
  Prioritet: perfekt (den eneste tall-oppgaven — sikre poeng).
- **Forkunnskaper/kryssbok:** kap. 5.1. `collapsible` **Symbol-/teoremliste:**
  Burnsides formel, $X_g$, sykkelstruktur → fikspunkttall.
- **Løsningsoppskrift:** (1) identifiser symmetrigruppen ($D_n$ / rotasjonsgruppe til
  polyeder), (2) del `G` i konjugasjonsklasser, (3) for hver $g$: tell sykler i
  virkningen på fargestedene → $|X_g|=k^{(\text{sykler})}$, (4) sett inn i Burnside,
  (5) heltallssvar. **Sjekk:** svaret er et heltall.
- **Typiske feil:** #7 (feil antall sykler ⇒ feil eksponent ⇒ feil banetall; én feil
  $|X_g|$ velter alt).
- **Modellsvar:** «Hvor mange måter kan hjørnene i en regulær femkant fargelegges med
  4 farger, opp til symmetriene i $D_5$?» `(verifiser: svar 136)`.
- **Kvote:** 14 quiz / 10 flashcards. (Drillkapittel.)

**Prøve-kvote Del 5:** 4 prøver (5.A bane + isotropi + bane-stabilisator · 5.B
Burnside på $D_n$-figur · 5.C Burnside på polyeder/3D · 5.D samlet gruppevirknings-
prøve på eksamensnivå).

### Del 6 — Sylow-teori og enkelhet *(prioritet: PERFEKT — 73 %)*

#### Kapittel 6.1: Sylow-teoremene
**id:** `tma4150-6-1` · **number:** 6.1 · **estimatedMinutes:** 65 · **prerequisites:** `tma4150-5-1`

- **Kapitteltype:** teori-/beviskapittel (perfekt).
- **Description:** **Cauchys teorem** og **Sylow-teoremene I–III** (eksistens,
  konjugasjon, $n_p\equiv1\pmod p$ og $n_p\mid m$) — grunnlaget for den klassiske
  enkelhets-oppgaven.
- **Eksamensbelegg:** Del av sjanger F (73 %); Cauchy (2/15). Prioritet: perfekt.
  Sjangre: F.
- **Forkunnskaper/kryssbok:** kap. 5.1 (klasseligning), 1.3. `collapsible`
  **Symbol-/teoremliste:** Cauchy, Sylow I–III, $n_p$, $p$-Sylow-undergruppe.
- **Begrepskontrakt (flashcard-kilde):** **Cauchys teorem** (element av orden `p`
  når $p\mid|G|$); **Sylow-`p`-undergruppe** (maksimal $p$-undergruppe, orden $p^a$
  for $|G|=p^a m$, $p\nmid m$); **Sylow I** (eksistens), **Sylow II** (alle
  konjugerte), **Sylow III** ($n_p\equiv1\pmod p$ og $n_p\mid m$; $n_p=[G:N(P)]$).
- **Utledning/bevis:** skisser Sylow III via klasseligningen (bruk-nivå: Sylow I/II
  presenteres uten fullt bevis, merk skillet).
- **Typiske feil:** #3 (bruker feil av de to Sylow III-kravene).
- **Modellsvar:** «Finn antall Sylow-5-undergrupper i en gruppe av orden 20» (→
  $n_5\equiv1\pmod5$, $n_5\mid4$ → $n_5=1$).
- **Kvote:** 22 quiz / 24 flashcards.

#### Kapittel 6.2: Drill — «vis at G ikke er simpel» (sjanger F)
**id:** `tma4150-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4150-6-1`

- **Kapitteltype:** drillkapittel (DNA B).
- **Description:** Standardargumentet for enkelhet: tell $n_p$; hvis $n_p=1$ er
  Sylow-`p`-undergruppen **normal** ⇒ `G` ikke simpel. Varianter: $|G|=p^n$
  (klasseligning ⇒ $Z(G)\neq\{e\}$), $|G|=pq$, $|G|=p^t m$ med $m<p$.
- **Eksamensbelegg:** Sjanger F (11/15, 73 %). Den klassiske karakterskiller-
  oppgaven, nesten alltid et bevis. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 6.1, 4.1 (normalitet). `collapsible`
  **Symbol-/teoremliste:** Sylow III-telling, $n_p=1$ ⇒ normal, klasseligning for
  $p$-gruppe.
- **Løsningsoppskrift:** (1) faktoriser $|G|=p^a m$, (2) for hvert relevant `p`:
  kryss av divisorene av `m` som oppfyller $n_p\equiv1\pmod p$, (3) hvis noen `p` gir
  bare $n_p=1$: normal Sylow-undergruppe ⇒ ikke simpel; (4) $p^n$-tilfellet: bruk
  klasseligningen $|G|\equiv|Z(G)|\pmod p$ ⇒ $Z(G)\neq\{e\}$.
- **Typiske feil:** #3 (feil Sylow III-krav); glemme at $n_p=1$ ⇒ normal ⇒ ikke
  simpel.
- **Modellsvar:** «Vis at ingen gruppe av orden 55 er simpel» ($55=5\cdot11$: $n_{11}\equiv1
  \pmod{11}$, $n_{11}\mid5$ → $n_{11}=1$, normal).
- **Kvote:** 16 quiz / 12 flashcards. (Drillkapittel.)

**Prøve-kvote Del 6:** 4 prøver (6.A Sylow III-telling · 6.B «ikke simpel» for $pq$
og $p^t m$ · 6.C $p^n$ via klasseligning/senter · 6.D samlet Sylow-prøve på
eksamensnivå).

### Del 7 — Ringer, idealer og integritetsområder *(prioritet: PERFEKT/KUNNE)*

#### Kapittel 7.1: Ringer, idealer og kvotientringer
**id:** `tma4150-7-1` · **number:** 7.1 · **estimatedMinutes:** 60 · **prerequisites:** `tma4150-1-3`

- **Kapitteltype:** teori-/beviskapittel (perfekt grunnlag for kropp-blokken).
- **Description:** Ringer, idealer, generert ideal $(a)$, kvotientringer $R/I$, og
  **maksimale/primidealer** med kvotient-kriteriet — apparatet bak endelig-kropp-
  konstruksjonen.
- **Eksamensbelegg:** Sjanger J (7/15, 47 %): definer maksimalt ideal; $(f)$
  maksimalt ⇔ `f` irredusibel; $(10)$ ikke maksimalt i $\mathbb{Z}$. Del av
  100 %-ring/kropp-blokken. Prioritet: perfekt. Sjangre: J.
- **Forkunnskaper/kryssbok:** kap. 1.3. `collapsible` **Symbol-/teoremliste:** ring,
  ideal, $(a)$, $R/I$, maksimalt/prim, kvotient-kriteriet.
- **Begrepskontrakt (flashcard-kilde):** **ring** (abelsk under +, assosiativ under
  ·, distributiv); **ideal** ($I$ absorberer: $rI\subseteq I$); **generert ideal**
  $(a)$; **kvotientring** $R/I$; **maksimalt ideal** ($M\subsetneq R$, ingen ideal
  strengt mellom); **primideal** ($ab\in P\Rightarrow a\in P$ eller $b\in P$);
  **kvotient-kriteriet:** $R/I$ integritetsområde ⇔ $I$ prim; $R/I$ kropp ⇔ $I$
  maksimal; maksimal ⇒ prim (ikke omvendt).
- **Utledning/bevis:** bevis $R/I$ kropp ⇔ $I$ maksimal.
- **Typiske feil:** #8 (blander maksimalt og prim; glemmer at maksimalt ⇒ prim men
  ikke omvendt; tror $\{0\}$ er maksimalt i $Z_p[x]$).
- **Modellsvar:** «Vis at $(10)$ ikke er maksimalt i $\mathbb{Z}$» (ligger i $(2)$
  og $(5)$); «Vis at $(x^2+1)$ er maksimalt i $\mathbb{R}[x]$».
- **Kvote:** 22 quiz / 24 flashcards.

#### Kapittel 7.2: Integritetsområder og enheter
**id:** `tma4150-7-2` · **number:** 7.2 · **estimatedMinutes:** 45 · **prerequisites:** `tma4150-7-1`

- **Kapitteltype:** teori-/beviskapittel (kunne).
- **Description:** Integritetsområder (ingen nulldelere), enhetsgruppen $R^*$, og
  standardresultatet **endelig integritetsområde er en kropp** (kortbeviset).
- **Eksamensbelegg:** Sjanger K (5/15, 33 %): «endelig integritetsområde ⇒ kropp»;
  $\alpha^{|F|}=\alpha$ i endelig kropp. Prioritet: kunne. Sjangre: K.
- **Forkunnskaper/kryssbok:** kap. 7.1. `collapsible` **Symbol-/teoremliste:**
  integritetsområde, nulldeler, $R^*$, endelig ⇒ kropp.
- **Begrepskontrakt (flashcard-kilde):** **integritetsområde** (kommutativ ring med
  1, ingen nulldelere); **nulldeler**; **enhet** ($ab=1$), $R^*$; **kropp** (alle
  ikke-null er enheter); **endelig integritetsområde er kropp**;
  $\alpha^{|F|}=\alpha$ for alle $\alpha$ i endelig kropp (Fermat/Lagrange i $F^*$).
- **Utledning/bevis:** kortbeviset: for $a\neq0$ er $x\mapsto ax$ injektiv (ingen
  nulldelere) ⇒ surjektiv (endelig) ⇒ 1 treffes ⇒ `a` enhet.
- **Typiske feil:** glemme kommutativitet/1-krav; tro at kortbeviset gjelder uendelige
  ringer.
- **Modellsvar:** «Vis at et endelig integritetsområde er en kropp».
- **Kvote:** 18 quiz / 20 flashcards.

**Prøve-kvote Del 7:** 4 prøver (7.A ideal + $R/I$ + kvotient-kriteriet · 7.B
maksimal vs. prim (konkret) · 7.C integritetsområde + endelig ⇒ kropp · 7.D samlet
ring-prøve på eksamensnivå).

### Del 8 — Polynomringer og endelige kropper *(prioritet: PERFEKT — 100 %)*

#### Kapittel 8.1: Polynomringer og irredusibilitet over Z_p
**id:** `tma4150-8-1` · **number:** 8.1 · **estimatedMinutes:** 65 · **prerequisites:** `tma4150-7-1`

- **Kapitteltype:** teori-/beviskapittel (perfekt).
- **Description:** Polynomringen $F[x]$ (grad, divisjonsalgoritme, faktorteoremet) og
  **irredusibilitet over $Z_p$**: rot-test (grad 2–3) OG full faktoriserings-
  utelukkelse (grad ≥4). Fast fallgruve.
- **Eksamensbelegg:** Sjanger H (100 %): «finn alle moniske irredusible
  andregradspolynomer i $Z_3[x]$»; grad 4–5 krever mer enn rot-test. Prioritet:
  perfekt. Sjangre: H.
- **Forkunnskaper/kryssbok:** kap. 7.1. `collapsible` **Symbol-/teoremliste:**
  $F[x]$, grad, divisjonsalgoritme, faktorteorem, irredusibilitet, rot-test-gyldighet.
- **Begrepskontrakt (flashcard-kilde):** **polynomring** $F[x]$; **grad**;
  **divisjonsalgoritmen**; **faktorteoremet** ($\alpha$ rot ⇔ $(x-\alpha)\mid f$);
  maks $n$ røtter for grad $n$; **irredusibel** (ingen ekte faktorisering);
  **rot-testen** gyldig KUN for grad 2–3 (grad ≥4 kan være rot-fritt men
  reduserbart); **monisk** (ledende koeffisient 1).
- **Utledning/bevis:** vis at et rot-fritt grad-4-polynom kan faktorisere i to
  irredusible andregradspolynomer (motbevis rot-test-snarveien).
- **Typiske feil:** #2 (irredusibilitet grad ≥4 stoppet ved rot-testen — glemmer å
  utelukke produkt av to andregradsfaktorer).
- **Modellsvar:** «Finn alle moniske irredusible andregradspolynomer i $Z_3[x]$»
  (test alle 3 elementer for rot) `(verifiser: 3 stk)`.
- **Kvote:** 22 quiz / 24 flashcards.

#### Kapittel 8.2: Konstruer en endelig kropp Z_p[x]/(f)
**id:** `tma4150-8-2` · **number:** 8.2 · **estimatedMinutes:** 65 · **prerequisites:** `tma4150-8-1`

- **Kapitteltype:** teori-/beviskapittel (perfekt).
- **Description:** Å velge et irredusibelt `f` av grad `n` (⇒ $(f)$ maksimalt ⇒
  $Z_p[x]/(f)$ er en **kropp** med $p^n$ elementer) og vise at et element genererer
  den sykliske enhetsgruppen $F^*$.
- **Eksamensbelegg:** Sjanger I (100 %): «konstruer en kropp med 9 elementer»; «vis
  at $x+I$ genererer $F^*$». Prioritet: perfekt. Sjangre: I.
- **Forkunnskaper/kryssbok:** kap. 8.1, 7.1. `collapsible` **Symbol-/teoremliste:**
  $Z_p[x]/(f)$, irredusibel ⇒ maksimal ⇒ kropp, $p^n$ elementer, $F^*$ syklisk,
  generator.
- **Begrepskontrakt (flashcard-kilde):** $Z_p[x]/(f)$ med `f` irredusibel av grad
  `n` er en **kropp med $p^n$ elementer**; irredusibel ⇒ $(f)$ maksimal ⇒
  kvotienten kropp; **$F^*$ er syklisk** (multiplikative gruppa til en endelig
  kropp); **generator/primitivt element**; elementene er restene av grad $<n$.
- **Utledning/bevis:** vis at $Z_p[x]/(f)$ har $p^n$ elementer (rester av grad $<n$)
  og er en kropp (kvotient-kriteriet). $F^*$ syklisk presenteres på bruk-nivå.
- **Typiske feil:** #10 (generator-argument ufullstendig — viser ikke at $\alpha$
  mangler alle ekte divisor-ordener av $p^n-1$).
- **Modellsvar:** «Konstruer en kropp med 9 elementer» ($Z_3[x]/(x^2+1)$); «Vis at
  $x+I$ genererer $F^*$ i $Z_3[x]/(x^3+2x+1)$» (elimiér ekte divisorer av 26)
  `(verifiser: |F^*|=26=2·13, sjekk ord ≠ 2, 13)`.
- **Kvote:** 28 quiz / 24 flashcards.

#### Kapittel 8.3: Drill — irredusibilitet + kropp-konstruksjon (sjanger H/I)
**id:** `tma4150-8-3` · **number:** 8.3 · **estimatedMinutes:** 55 · **prerequisites:** `tma4150-8-2`

- **Kapitteltype:** drillkapittel (DNA B).
- **Description:** Ren mengdetrening på den kjedede 100 %-oppgaven: finn irredusible
  polynomer (a) → konstruer kroppen og analyser $F^*$ (b). Den tettest garanterte
  poengkilden.
- **Eksamensbelegg:** Sjanger H + I (begge 100 %). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 8.1, 8.2. `collapsible` **Symbol-/teoremliste:**
  rot-test + faktoriseringsutelukkelse, kropp-konstruksjon, generator-sjekk.
- **Løsningsoppskrift:** (1) irredusibilitet: rot-test (grad 2–3), for grad ≥4 også
  utelukk produkt av lavere irredusible; (2) velg `f` irredusibel av grad `n` ⇒
  kropp $p^n$ elementer; (3) generator: sjekk at ordenen ikke er en ekte divisor av
  $p^n-1$; (4) navngi kvotient-kriteriet eksplisitt.
- **Typiske feil:** #2 (rot-test alene grad ≥4), #10 (ufullstendig generator).
- **Kvote:** 16 quiz / 12 flashcards. (Drillkapittel.)

**Prøve-kvote Del 8:** 4 prøver (8.A irredusibilitet grad 2–3 · 8.B irredusibilitet
grad ≥4 (utelukkelse) · 8.C konstruer kropp + generator for $F^*$ · 8.D samlet
kropp-prøve på eksamensnivå).

### Del 9 — Videregående struktur *(prioritet: KJENNE — 13–20 %, karaktertopp)*

#### Kapittel 9.1: Senter, oppløsbarhet og Frobenius
**id:** `tma4150-9-1` · **number:** 9.1 · **estimatedMinutes:** 60 · **prerequisites:** `tma4150-8-2`

- **Kapitteltype:** teori-/beviskapittel (kjenne — karaktertopp).
- **Description:** De tyngste struktursjangrene: senter $Z(G)$, oppløsbare grupper/
  komposisjonsrekker, og **Frobenius-endomorfien** $a\mapsto a^p$ + underkropper av
  $GF(p^n)$ (én per divisor av `n`). Karaktertopp-stoff samlet i ett kompakt kapittel.
- **Eksamensbelegg:** Sjanger N (Frobenius/underkropper, 2/15, 13 %) + O (senter
  20 %, oppløsbar/komposisjon 20 %). Fast i de tyngste settene. Prioritet: kjenne
  (dekk grundig, men mindre garantert enn kjerneblokken). Sjangre: N, O.
- **Forkunnskaper/kryssbok:** kap. 8.2 (endelige kropper), 6.1 (Sylow), 5.1
  (klasseligning). **«Sist du var her»:** vis ferdig oppfrisket (i) klasseligningen
  $|G|\equiv|Z(G)|\pmod p$, (ii) at $F^*$ er syklisk, (iii) binomialformelen i
  karakteristikk `p`. `collapsible` **Symbol-/teoremliste:** $Z(G)$, oppløsbar,
  komposisjonsrekke, Frobenius $\sigma_p$, underkropper ↔ divisorer.
- **Begrepskontrakt (flashcard-kilde):** **senter** $Z(G)=\{z:zg=gz\;\forall g\}$;
  $Z(S_n)=\{e\}$ for $n\ge3$; **oppløsbar gruppe** (abelsk kvotientkjede);
  **komposisjonsrekke** (Jordan–Hölder); $p$-grupper og $D_n$ er oppløsbare;
  **Frobenius-endomorfi** $\sigma_p(a)=a^p$ (ringhomomorfi via $(a+b)^p=a^p+b^p$ i
  karakteristikk `p`), automorfi av $GF(p^n)$; **underkroppene** = fikspunktmengdene
  $E^{\sigma_p^t}$, én per divisor $t\mid n$.
- **Utledning/bevis:** vis $(a+b)^p=a^p+b^p$ i karakteristikk `p` (binomialformel,
  $p\mid\binom{p}{k}$); at $Z(S_n)=\{e\}$ for $n\ge3$.
- **Typiske feil:** regne amid-N/delokalisert par som «i senteret»; glemme at
  underkropper svarer til divisorer av `n` (ikke alle tall $\le n$); glemme
  induksjonen i Frobenius-argumentet.
- **Modellsvar:** «Vis at $\sigma_p(a)=a^p$ er en ringhomomorfi på $GF(p^n)$ og finn
  underkroppene til $GF(2^6)$» (divisorer 1,2,3,6 → underkropper av orden 2,4,8,64).
- **Kvote:** 20 quiz / 22 flashcards.

**Prøve-kvote Del 9:** 4 prøver (9.A senter $Z(G)$ · 9.B oppløsbar/komposisjonsrekke
· 9.C Frobenius + underkropper · 9.D samlet dybdeprøve på eksamensnivå).

### Del 10 — Eksamenstrening *(prioritet: PERFEKT (meta))*

#### Kapittel 10.1: Sjangerspill — løsningsoppskrifter A–O
**id:** `tma4150-10-1` · **number:** 10.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4150-9-1`

- **Kapitteltype:** sjangeroversikt (meta).
- **Description:** Én kompakt løsningsoppskrift per sjanger (A–O) — «gjenkjenn
  oppgavetypen → oppskrift → tidsbudsjett → vanligste feil» — studentens
  eksamens-oppslagskort.
- **Eksamensbelegg:** Hele arkivet (alle sjangre A–O). Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** alle foregående deler (klikkbare lenker til hvert
  temakapittel). `collapsible` **Samlet oppslagskort** (sjanger → oppskrift →
  feilkode).
- **Innholdskontrakt:** for hver sjanger A–O: én linjes gjenkjenningsregel, den
  algoritmiske oppskriften, tidsanslag (av 24 min/deloppgave), og hyppigste feilkode
  (#1–#11). Rekkefølgen speiler §7-prognosen (sikre de mekaniske først).
- **Oppgavesjangre:** 6–8 «gjenkjenn sjangeren og velg oppskrift»-oppgaver.
- **Typiske feil:** #11 (tidsfelle); velge feil oppskrift fordi innpakningen
  (Burnside-fortellingen) skjuler kjernen.
- **Kvote:** 16 quiz / 12 flashcards.

#### Kapittel 10.2: Øvingseksamen 1 (med løsningsforslag)
**id:** `tma4150-10-2` · **number:** 10.2 · **estimatedMinutes:** 90 · **prerequisites:** `tma4150-10-1`

- **Kapitteltype:** øvingseksamen (DNA-regnefag øvingseksamen-mal).
- **Description:** Komplett nyskrevet sett — **10 like-vektede deloppgaver, 4 timer,
  kode D** — som speiler temafordelingen i analysen §2 (permutasjon, abelsk,
  undergruppe/normal/homomorfi, Sylow, ring/kropp, Burnside). Løsningsforslag per
  deloppgave i `collapsible`, skrevet som A-besvarelse (teorem navngitt).
- **Eksamensbelegg:** Speiler §2-fordelingen (en «typisk» eksamen). Prioritet:
  perfekt (meta).
- **Forkunnskaper/kryssbok:** hele boka. Deklareres «1 sett à ~4 t — kan deles over
  flere økter».
- **Innholdskontrakt:** de 10 deloppgavene fordeler seg (jf. §7-prognose): O1
  permutasjon (C), O2 aksiomverifikasjon/gruppestruktur (L), O3–O4 undergruppe/
  normal + fundamentalteoremet (D, E), O5 Sylow «ikke simpel» (F), O6 abelsk
  klassifikasjon + $U(Z_n)$ (A, B), O7–O8 irredusible polynomer + konstruer kropp
  (H, I), O9 Burnside (G), O10 integritetsområde/isomorfisetning (K, M).
  **Selvdiagnose-sjekkliste (☐)** etter hver fasit.
- **Typiske feil:** hele feilkoderegisteret (#1–#11) speiles i fasit-kommentarene.
- **Kvote:** 14 quiz / 8 flashcards.

#### Kapittel 10.3: Øvingseksamen 2 (med løsningsforslag)
**id:** `tma4150-10-3` · **number:** 10.3 · **estimatedMinutes:** 90 · **prerequisites:** `tma4150-10-1`

- **Kapitteltype:** øvingseksamen.
- **Description:** Andre komplette sett med annen innpakning (matrisegruppe-arena i
  gruppedelen, kreativt innpakket Burnside), samme 10-deloppgavemal og vekting.
- **Eksamensbelegg:** Speiler §2 med vekt på matrisegruppe-varianten (47 %) og
  Frobenius-toppoppgave. Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** hele boka. «1 sett à ~4 t — deles over flere økter».
- **Innholdskontrakt:** varianter: O2 matrisegruppe $GL(2,Z_p)$-struktur, O5
  Sylow i $p^n$-tilfellet (klasseligning), O9 Burnside på polyeder, O10 Frobenius/
  underkropper (N). Selvdiagnose-sjekkliste per fasit. Minst én «bestått-på-
  marginen»-modellbesvarelse (viser terskelen nedenfra, jf. README karakter-realisme).
- **Typiske feil:** #3, #7, #10 (Sylow-telling, Burnside-fikspunkt, generator).
- **Kvote:** 14 quiz / 8 flashcards.

#### Kapittel 10.4: Øvingseksamen 3 + kald bank (med løsningsforslag)
**id:** `tma4150-10-4` · **number:** 10.4 · **estimatedMinutes:** 95 · **prerequisites:** `tma4150-10-1`

- **Kapitteltype:** øvingseksamen + kald bank.
- **Description:** Tredje komplette sett PLUSS en tydelig merket **kald bank** (8–10
  oppgaver med uvante vinklinger/kombinasjoner, UTEN hint, fasit = momentliste) —
  toppleseren skal strekkes.
- **Eksamensbelegg:** Speiler §2 + karaktertopp-sjangrene (N, O, M). Prioritet:
  perfekt (meta).
- **Forkunnskaper/kryssbok:** hele boka. «1 sett à ~4 t + kald bank — deles over
  flere økter».
- **Innholdskontrakt:** tredje 10-deloppgavesett med selvdiagnose; deretter kald
  bank (kombinasjonsoppgaver: Sylow + kvotient, isomorfisetning + $F^*$, oppløsbar +
  komposisjonsrekke), tydelig merket «kald — ingen hint».
- **Typiske feil:** hele registeret; kald bank tester radaren uten stillas.
- **Kvote:** 14 quiz / 8 flashcards.

#### Kapittel 10.5: Bevisverksted — standardargument-katalogen
**id:** `tma4150-10-5` · **number:** 10.5 · **estimatedMinutes:** 55 · **prerequisites:** `tma4150-10-1`

- **Kapitteltype:** bevisverksted (meta).
- **Description:** De gjennomgående standardargumentene samlet som ferdige
  bevisskjeletter: undergruppetest, normalitet «for alle `g`», kjerne+surjektivitet
  i fundamentalteoremet, Sylow-telling → normal, irredusibilitet-utelukkelse,
  generator-eliminering, kvotient-kriteriet. «Alternativt:»-bevissthet (vis
  nabometoden) premieres.
- **Eksamensbelegg:** Gjennomgripende (sensorkrav 1–3). Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** hele boka. `collapsible` **Bevisskjelett-katalog**
  (argument → mal → når brukes → typisk feil).
- **Innholdskontrakt:** for hvert standardargument: bevisskjelettet i punkter, ett
  gjennomført eksempel, «alternativt:»-varianten der den finnes, og feilkoden det
  vanligvis feiler på.
- **Oppgavesjangre:** 6–8 «fyll ut bevisskjelettet»-oppgaver på tvers av temaene.
- **Typiske feil:** #1, #5, #10 (ufullstendig kvantorbehandling).
- **Kvote:** 14 quiz / 10 flashcards.

**Prøve-kvote Del 10:** de 3 øvingseksamenene (10.2–10.4) ER de samlede prøvene på
eksamensnivå; bevisverkstedet (10.5) fungerer som selvrettende generalprøve på
bevisføring. Deklareres «3 øvingseksamener à ~4 t — én per økt, aldri stablet».

---

## 4. Kvotesammendrag (summeringskontroll)

> Kontrollregnet per-kapittel FØR totalen (README-krav: gate-tallet er den REELLE
> summen). Quiz- og flashcard-tallene under er summert fra §3.

### Quiz per kapittel

| Kap | Quiz | Kap | Quiz | Kap | Quiz |
|---|---|---|---|---|---|
| 0.1 | 12 | 3.2 | 22 | 7.1 | 22 |
| 0.2 | 14 | 4.1 | 22 | 7.2 | 18 |
| 1.1 | 22 | 4.2 | 28 | 8.1 | 22 |
| 1.2 | 22 | 4.3 | 18 | 8.2 | 28 |
| 1.3 | 20 | 5.1 | 20 | 8.3 | 16 |
| 2.1 | 28 | 5.2 | 14 | 9.1 | 20 |
| 2.2 | 12 | 6.1 | 22 | 10.1 | 16 |
| 3.1 | 22 | 6.2 | 16 | 10.2 | 14 |
| | | | | 10.3 | 14 |
| | | | | 10.4 | 14 |
| | | | | 10.5 | 14 |

(De tre teoremtunge kjernekapitlene 2.1, 4.2 og 8.2 er hevet fra 24 → 28 quiz for
å gi margin over 500-gulvet.)

**Delsummer:** Del 0: 12+14 = 26 · Del 1: 22+22+20 = 64 · Del 2: 28+12 = 40 ·
Del 3: 22+22 = 44 · Del 4: 22+28+18 = 68 · Del 5: 20+14 = 34 · Del 6: 22+16 = 38 ·
Del 7: 22+18 = 40 · Del 8: 22+28+16 = 66 · Del 9: 20 · Del 10: 16+14+14+14+14 = 72.

**Quiz totalt:** 26+64+40+44+68+34+38+40+66+20+72 = **512** (krav ≥500 ✓).

### Flashcards per kapittel

**Delsummer:** Del 0: 10+14 = 24 · Del 1: 24+24+22 = 70 · Del 2: 24+8 = 32 ·
Del 3: 24+22 = 46 · Del 4: 24+24+20 = 68 · Del 5: 20+10 = 30 · Del 6: 24+12 = 36 ·
Del 7: 24+20 = 44 · Del 8: 24+24+12 = 60 · Del 9: 22 · Del 10: 12+8+8+8+10 = 46.

**Flashcards totalt:** 24+70+32+46+68+30+36+44+60+22+46 = **478**.

> ⚠️ Kontrollregningen gir **478 flashcards — UNDER 500-gulvet.** Rebalansering
> (gjøres i skjelettet før gate): øk flashcard-kvoten i de definisjons-/teoremrike
> kapitlene slik at summen ≥ 500 med margin. Se justert tabell under.

### Justert flashcard-kvote (for å nå ≥500 med margin)

Følgende kapitler økes (definisjons-/teoremtunge, tåler flere kort uten
oppblåsing):

- 1.1 → 26 (+2), 1.2 → 26 (+2), 1.3 → 24 (+2)
- 2.1 → 26 (+2)
- 3.1 → 26 (+2), 3.2 → 24 (+2)
- 4.1 → 26 (+2), 4.2 → 26 (+2), 4.3 → 22 (+2)
- 5.1 → 22 (+2)
- 6.1 → 26 (+2)
- 7.1 → 26 (+2), 7.2 → 22 (+2)
- 8.1 → 26 (+2), 8.2 → 26 (+2)
- 9.1 → 24 (+2)

Sum av økninger: 16 kapitler × 2 = **+32**. Ny total: 478 + 32 = **510**.
Forfatteren SKAL bygge etter de justerte tallene: **Flashcards totalt = 510**
(krav ≥500 ✓). (De øvrige kapitlene beholder §3-kvoten.)

### Prøver (temaprøver)

4 prøver per temadel × 8 temadeler (Del 1–8) = **32 temaprøver**, pluss Del 9
(4 dybdeprøver) = 36, pluss de 3 øvingseksamenene i Del 10 som samlede prøver på
eksamensnivå. Krav «≥4 prøver per tema» ✓ (hver temadel har eksakt 4).

### Totaler (gate-tall)

| Størrelse | Sum | Krav | Status |
|---|---|---|---|
| Kapitler | **27** | 15+ | ✓ |
| **Quiz totalt** | **512** | ≥500 | ✓ |
| **Flashcards totalt** | **510** | ≥500 | ✓ |
| Prøver per temadel | 4 (×8 temadeler + Del 9) | ≥4 | ✓ |
| Estimert totaltid | ~1 615 min ≈ 27 t | — | — |

---

## 5. Byggenotater (for Opus-fasen)

1. **Registrer emnet i `src/app/trinn/hoyere/institusjoner.ts`** under NTNU med
   visningsnavn «TMA4150 Algebra» (driver institusjonsnavnet i
   `hoyskole-disclaimer.tsx`-deklarasjonen). Ikke jus/helse — standard-deklarasjonen
   er tilstrekkelig.
2. **Metadata:** `TextbookCourse`-oppføring i `textbook-courses-matte.ts`-mønster
   (`level: 'Høyskole'`), 27 chapters med id `tma4150-N-M`, `sectionNames` fra §2.
3. **Verifiser hvert konkret tall** merket `(verifiser)` (antall irredusible
   polynomer, Burnside-summer, permutasjonssammensetninger, $|U(Z_n)|$, ordener) —
   etterregn i python3 før påstand (DNA-regnefag §144). LaTeX for all matematikk.
4. **Læringsløkke:** `exercise`-blokker INLINE (Teori → Eksempel → Oppgave), aldri
   all teori øverst. Hint på alle oppgaver (unntatt merket kald bank i 10.4).
5. **Narrativ + quiz** per kapittel (`<id>-narrativ.json`) jf. README-format.
6. **Bygg mot flashcard-total 510** (justert tabell §4), ikke §3-råtallene.

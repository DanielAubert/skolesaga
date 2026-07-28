# Bokskjelett: Matematikk 1000 (DAFE1000) — OsloMet ingeniørutdanning

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
> sensorkrav og typiske feil per kapittel er destillert fra
> `EKSAMENSANALYSE.md` (**23 lesbare eksamenssett 2010–2017** med tilhørende
> løsningsforslag der de foreligger, pluss den offisielle formelsamlingen).
> Arketype: **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der
> (teori/drill/øvingseksamen) er obligatoriske og gjentas ikke her.
>
> **Dette er ANVENDT ingeniørmatematikk — ikke ren kalkulus.** Tyngdepunktet er
> *metode og anvendelse*: differensiallikninger, matriseregning,
> integrasjonsteknikk, numeriske metoder og MATLAB/Octave. Boken skal IKKE
> inneholde bevis (ε-δ, MVT-konstruksjon), uendelige rekker eller flervariabel
> kalkulus — det hører til oppfølgeremnet **Matematikk 2000** og har **0
> forekomster** i M1000-arkivet. Kalibrer utelukkende mot MAT1000-analysen;
> MAT1100/MAT111-skjelettene er kun **formatforbilder**, aldri faglige forbilder.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `oslomet-mat1000` |
| Tittel | **Matematikk 1000 (DAFE1000)** |
| Institusjon | OsloMet — storbyuniversitetet (ingeniørutdanning) |
| Level | `'Høyskole'` |
| Arketype | Regnefag (matematikk, én skriftlig 5-timers slutteksamen) |
| Antall kapitler | **35** (1 eksamenskart + 25 tema + 1 utvidelse + 1 føringsstandard + 3 øvingseksamener, fordelt på 4 drillkapitler) |
| Estimert totaltid | **~2 350 min ≈ 39 timer** |
| Quiz totalt | **547** (krav ≥500) |
| Flashcards totalt | **504** (krav ≥500) |

**Pitch (ett avsnitt):** Matematikk 1000 er ingeniørutdanningens grunnkurs i
matematikk ved OsloMet (kodene DAFE1000/ELFE1000/BYFE1000/EMFE1000/KJFE1000/
MAFE1000/MEK1000 er samme felleseksamen for ulike program). Vurderingen er **én
skriftlig slutteksamen på 5 timer (kl. 09–14)** som teller 100 %; obligatoriske
innleveringer må være godkjent for å gå opp, men gir ingen karakter. Fra 2015
kjøres ett **felles sett** for alle programmene, med **kalkulator + utdelt
formelark** tillatt, og settet består av **8–15 korte, i hovedsak selvstendige
oppgaver der «alle svar skal grunngis» og «alle deloppgaver teller likt».** Den
doble ryggraden er **differensiallikninger** (100 % av settene) og
**matriseregning** (100 %, nesten alltid oppgave 1), fulgt av
**integrasjonsteknikk** (96 %), **komplekse tall** (10/10 i dagens epoke) og
**numeriske metoder + MATLAB/Octave-skripttolking** (epokens signatur). Boken
drilller de 18 dokumenterte sjangrene (A–R) rett mot dette settet, med
løsningsforslag ført slik sensor vil se dem — der billige standardpoeng tas
først og hvert modell-ledd begrunnes.

**Kritiske stil- og notasjonsregler (gjelder HELE boka):**

1. **«Alle svar skal grunngis; alle deloppgaver teller likt.»** Dette står trykt
   på hvert eneste sett. Et riktig tall uten begrunnelse taper poeng. Hvert
   løsningsforslag skrives som en A-besvarelse: mellomregning ledd for ledd, kort
   verbal begrunnelse, markert sluttsvar med enhet i anvendte oppgaver. Fordi
   deloppgavene teller likt, **modellerer boka tidsdisiplin**: ta de mange
   «billige» standardoppgavene (matriseoperasjoner, kompleks lineær likning, én
   Newton-iterasjon, standardintegral) før de tunge modelleringsoppgavene.
2. **Definert-sjekk premieres eksplisitt.** I matriseregning forventer fasit at
   man *forklarer hvorfor* en operasjon ikke er definert (dimensjonskonflikt),
   ikke bare hopper over den — det er innebygd poeng i nesten hvert sett. Boka
   fører alltid dimensjonssjekken som eget steg.
3. **Effektiv metode honoreres — alternative veier godtas.** Løsningsforslagene
   peker gjentatte ganger på snarveier (`det(A⁻¹) = 1/det(A)` framfor å invertere
   først; `det(Aⁿ) = (det A)ⁿ`; lineærkombinasjon framfor å bygge hele
   standardmatrisen; isolér `X` symbolsk i `AX = B` før innsetting). Begge veier
   gir full uttelling med korrekt gjennomføring; boka viser den effektive først
   og markerer den lange «Alternativt:».
4. **Numeriske metoder krever *forståelse*, ikke maskinsvar.** Kalkulator er
   tillatt fra 2015, men skript- og metodeoppgavene tester om studenten *forstår*
   algoritmen — hva den regner ut, hvorfor den konvergerer, hvor feilen ligger.
   MATLAB/Octave-skripttolking er en **egen sjanger (E)** der poenget er å «kjøre
   skriptet i hodet» og gjenkjenne Newton/Euler/Riemann/halvering/trapes — aldri
   å produsere et maskinsvar. Ved manuell Newton/halvering skal iterasjonene
   vises, og eksistens/entydighet føres FØR iterasjonen.
5. **Modelloppgaver: utled, og begrunn hvert ledd.** Ved differensiallikning fra
   tekst forankres hvert ledd (vekst/tap/tilførsel) i premissene. Ved
   likevekts-/langtidsspørsmål er poenget å sette `y′ = 0` og resonnere — ikke
   nødvendigvis å løse hele likningen. Boka fører alltid oppsettet leddvis før
   den løser.
6. **Standardform på svar (fasitkrav).** Komplekse tall oppgis på **både
   kartesisk `a + bi` og polar `reⁱᶿ`** når det bes om det, med argument i riktig
   kvadrant (tegn punktet FØR argumentet fastsettes). Uegentlige integraler føres
   med **eksplisitt grense** (`∫₁^∞ = lim_{b→∞} ∫₁^b`; «sett inn ∞» underkjennes).
   Lineære systemer med uendelig mange løsninger skrives på **parametrisk
   vektorform**. Volum oppgis med riktig aksemetode og enhet (ofte omregnet til
   liter = dm³).
7. **Notasjon boka speiler (fra eksamenssettene, ikke lærebok-alternativer):**
   matriser med `det(A)`, `A⁻¹`, `Aᵀ`, `I` (identitetsmatrisen); komplekse tall
   som `a + bi = r(cos φ + i sin φ) = reⁱᶠ`; differensiallikninger med `y′`, `y″`
   og initialkrav `y(0)`, `y′(0)`; MATLAB/Octave-syntaks i skriptoppgaver
   (`@(x)` for anonyme funksjoner, `for`/`while`-løkker, `exp`, `log` = **ln**,
   `.*`/`./`/`.^` for elementvis regning); parametrisk vektorform for
   løsningsmengder. All matematikk i LaTeX (`$...$` / `$$...$$`); MATLAB/Octave-
   kode i egne kodeblokker (` ```matlab `).
8. **Kalkulator + formelark er premisset (epoke 2).** Formelarket utleveres alltid
   — studenten trenger *ikke* pugge formlene, men må kunne *bruke* dem. Boka
   peker eksplisitt på hvilke formler som står på arket (rot-tilfellene for 2.
   ordens DE, integrerende faktor, rotasjonsvolum om begge akser, Newtons/Eulers/
   trapes-formlene, Taylor-restleddet, kompleks polarform) og trener bruk, ikke
   memorering.

**Ærlighet om arkivet (skal stå eksplisitt i Del 0 og i berørte
Eksamensvinkel-blokker):** Kalibreringen bygger på **2010–2017**; den nyeste
eksamenen i arkivet er 01.08.2017, mens emneplanen for DAFE1000 er verifisert
aktiv i 2026 — et **gap på ~9 år**. Faget hadde et **format- og
hjelpemiddelskifte 2014→2015**: fra ingen hjelpemidler (kun formelark) og 6–9
store kjedede oppgaver, til **kalkulator + formelark og 8–15 korte likt-vektede
oppgaver med MATLAB/Octave og numeriske metoder inne**. Derfor er **2015–2017-
settene (epoke 2) mest representative for dagens form og skal vektes tyngst**;
epoke 1 (2010–2014, FO010A) dekkes som utvidelse. Signaturstoffet
**egenverdier/diagonalisering forsvant etter 2012** (antatt flyttet til
Matematikk 2000) og dekkes kun som kjenne-/utvidelsesstoff (Del 8). **Byggefasen
bør skaffe ferske sett (etter 2017) og sjekke gjeldende DAFE1000-emneplan** før
publisering — særlig om (a) Taylor-/potensrekker er kommet inn, eller (b)
hjelpemiddel-/verktøyregimet (Python, digital eksamen) er endret.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen); frekvensen styrer *omfanget*.
Boka har to spor som møtes til slutt: et **lineær-algebra-spor** (Del 1–2), et
**komplekst-tall-spor** (Del 3), og et **kalkulus-spor** (Del 4–7, der
integrasjon → differensiallikninger → numeriske metoder bygger på hverandre).
Seksjonstitler (blir `sectionNames` i metadata — vises som «Kapittel N: …» på
bokforsiden):

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskartet | 1 | Prioriteringsverktøyet; kjerne i studieguiden. |
| 1 | Matriseregning og lineære likningssystem | 4 | **100 %, alltid oppgave 1** → nivå 1 «perfekt» → 3 teori (operasjoner+definert-sjekk / det+invers+`AX=B` / parametersystem+basis) + drillkapittel. |
| 2 | Lineære transformasjoner | 2 | 65 % → nivå 2 «kunne» → standardmatrise-teori + geometriske transformasjoner/komposisjon. |
| 3 | Komplekse tall | 4 | **10/10 i epoke 2, årviss signatur** → nivå 1 «perfekt» → 3 teori (form / likninger / røtter) + drillkapittel. |
| 4 | Derivasjon, grenser og anvendelser | 5 | Derivasjon 78 %, men mest *fundament* for integrasjon/DE → nivå 2 «kunne» → derivasjon+implisitt / relaterte rater / optimering / grenser+L'Hôpital / lavfrekvent E2-samling. |
| 5 | Integrasjon | 5 | **96 %, 2–4 deloppgaver per sett** → nivå 1 «perfekt» → 2 teknikk-teori + uegentlige + volum + drillkapittel. |
| 6 | Differensiallikninger | 5 | **100 %, ryggraden** → nivå 1 «perfekt» → separabel + lineær 1. orden + 2. orden + anvendt modellering + drillkapittel. |
| 7 | Numeriske metoder og MATLAB/Octave | 4 | **Epoke 2-signaturen** (skript 52 %, ~8/10 E2; manuell Newton 39 %, 7/10 E2; numerisk integrasjon fra tabell 48 %) → nivå 1 «perfekt» → manuell metode + tabellmetode + skripttolking + drillkapittel. |
| 8 | Utvidelse: egenverdier og diagonalisering | 1 | **0 forekomster etter 2012** → nivå 3 «kjenne» → ett kompakt kapittel med ærlig eksamensvinkel. |
| 9 | Eksamenstrening | 4 | Føringsstandard-kapittel + 3 komplette 5-timers øvingseksamener (epoke 2-form). |

**Avvik fra DNA-malen (dokumentert):**

1. **35 kapitler ligger på øvre grense av DNA-vinduet (20–35).** Bredden er
   forsvart av at faget har en **dobbel ryggrad** (differensiallikninger OG
   matriseregning, begge 100 %) i to nesten uavhengige spor, pluss **MATLAB/Octave-
   skripttolking som en helt egen sjanger** uten motstykke i UiO-tradisjonen.
   Ingen del er oppblåst: nivå 1-delene (1, 3, 5, 6, 7) har teorikapitler +
   drill; nivå 2/3-delene (2, 4, 8) er slanke.
2. **Drillkapitlene ligger i temadelene sine** (1.4, 3.4, 5.5, 6.5, 7.4) i stedet
   for i siste del: dette er 96–100 %-gjengangere (matriseoppgaven,
   komplekse-tall-signaturen, integrasjonsteknikk, avslutnings-DE, numerisk
   metode/skript) som må drilles rett etter teorien. Del 9 beholder
   føringsstandarden og øvingseksamenene.
3. **MATLAB/Octave-skripttolking (kap. 7.3) er en egen sjanger med
   kodekontrakter**, ikke et vanlig regnekapittel: analysen (§3E, §4.4) viser at
   oppgaven tester *algoritmeforståelse* — «hva regner dette ukommenterte skriptet
   ut / hvilken feil har det», ikke maskinsvar. Kapitlet spesifiserer derfor
   MATLAB/Octave-kodemaler (Newton/Euler/Riemann/halvering/trapes) som forfatteren
   skal implementere og la studenten tolke. Dette er et tillegg til DNA-en, ikke
   et avvik.
4. **Del 8 er frekvensstyringens unntak**: egenverdier/diagonalisering hadde 0
   forekomster etter 2012 og dekkes bare fordi (a) FO010A-epoken (2010–2012)
   brukte det tungt og (b) bygg-/elektro-parallellene kan møte det. Eksamensvinkel-
   blokken sier rett ut: «ikke eksamensrelevant for DAFE1000; sjekk fersk emneplan».
5. **Del 4 er bevisst «kunne»-vektet til tross for 78 % derivasjonsfrekvens.**
   Derivasjon opptrer sjelden som *egen tung oppgave* i epoke 2 (falt til 6/10);
   den er mest et *verktøy* inn i implisitt derivasjon, relaterte rater,
   optimering, Newton og DE. Delen bygger derfor fundamentet, men bruker plassen
   på de anvendte sjangrene (K relaterte rater, N optimering) og samler de tre
   lavfrekvente E2-sjangrene (P Taylorpolynom, Q stykkevis, R graf/retningsfelt)
   i ett kapittel (4.5).
6. **Quizbanken er metode- og begrunnelsessjekk**, ikke ren faktarepetisjon:
   siden faget ikke har flervalgs-midtveis, skrives quizzene som raske
   metode-/føringskontroller (velg riktig neste steg, er operasjonen definert,
   hvilken DE-type er dette, hva regner skriptet ut, hvilken begrunnelse mangler)
   med distraktorer bygget på feilkatalogen (analysen §5). Tillegg til DNA-en.

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–R) refererer til
oppgavetype-katalogen i analysen §3, gjengitt i bokas Del 0:
**A** matriseregning og matriselikning (oppgave 1),
**B** differensiallikninger — analytisk løsning,
**C** differensiallikning fra tekst (modellering),
**D** integrasjon — teknikk,
**E** MATLAB/Octave-skripttolking,
**F** Newtons metode / halveringsmetoden — manuell,
**G** komplekse tall,
**H** lineær transformasjon,
**I** lineært likningssystem med parameter,
**J** omdreiningsvolum,
**K** relaterte rater,
**L** numerisk integrasjon/derivasjon fra tabell eller graf,
**M** derivasjon, implisitt derivasjon og tangentlinje,
**N** optimering,
**O** grenseverdier / L'Hôpital,
**P** Taylorpolynom (om x = a, ikke rekker),
**Q** deriverbarhet av stykkevis funksjon,
**R** graf- og kurvetolking (retningsfelt).
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

Prosareferanser i innholdet bruker del-basert form («kap. 5.2», «se kap. 6.3»).

**Merknad om forkunnskaps-lenker:** matriseregning finnes på plattformen i
BI-boka (`bi-okonomi-9-1/9-2/9-3`) og brukes som kryssbok-forkunnskap.
**Komplekse tall finnes IKKE i noen R1/R2/S2-bok på plattformen** — Del 3 bygger
derfor komplekse tall fra grunnen av, og forkunnskaps-blokkene lenker kun til
det som faktisk finnes (ABC-formelen, enhetssirkelen/trigonometri), med en
setning som sier at selve komplekstall-teorien introduseres i boka. Alle
lenke-id-er i §3 er verifisert mot `textbook-courses-matte.ts`.

---

### Del 0 — Eksamenskartet

#### Kapittel 0.1: Eksamenskartet: én 5-timers ingeniørmatte-eksamen

- **id:** `oslomet-mat1000-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Slik testes Matematikk 1000: én 5-timers slutteksamen med kalkulator og formelark, temafrekvensene, format-epokene og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet (23 lesbare sett, 2010–2017). Skal gjengi: (i) vurderingsformen — én skriftlig slutteksamen 5 timer (kl. 09–14), 100 % av karakteren, ingen deleksamen/midtveis; obligatoriske innleveringer må være godkjent for oppmelding, men teller ikke; tre sesjonger i året (vår / kontinuasjon august / høst); karakterskala A–F; **fra 2015 kalkulator + formelark, 8–15 korte likt-vektede oppgaver**; stående instruks «Alle svar skal grunngis; alle deloppgaver teller likt»; (ii) **format-epokene**: epoke 1 (FO010A 2010–2014, ingen hjelpemidler, 6–9 store kjedede oppgaver, egenverdier/diagonalisering) vs. epoke 2 (DAFE-fellessett 2015–2017, kalkulator+formelark, korte oppgaver, MATLAB/numerikk inn) — og at boka vekter epoke 2; (iii) temafrekvens-tabellen (differensiallikninger 100 %, matriseregning 100 %, integrasjon 96 %, derivasjon 78 %, parametersystem 74 %, lineær transformasjon 65 %, komplekse tall 57 % totalt / **10/10 i epoke 2**, anvendt DE-modellering 57 %, MATLAB-skript 52 %, omdreiningsvolum 52 %, numerisk integrasjon fra tabell 48 %, grenser/L'Hôpital 43 %, Newton/halvering manuell 39 %, relaterte rater 39 %, egenverdier 35 % — **0 etter 2012**, basis/nullrom 35 %, optimering 30 %, Taylorpolynom 17 %, graf/retningsfelt 17 %, stykkevis 9 %, FTC variabel grense 9 %, **uendelige rekker + flervariabel 0 %**); (iv) at kalkulatoren flytter poengene fra regnetempo til *metode, oppsett og begrunnelse*; (v) karakterskillene (se under); (vi) tidsdisiplin: fordi delpunktene teller likt, lønner det seg å ta de mange billige standardoppgavene før de tunge modelleringsoppgavene.
- **Innholdskontrakt:** Sjangerkatalogen A–R presenteres som studentens sjekkliste med frekvens per sjanger; **prognosen for neste ordinære eksamen** (5 timer, kalkulator + formelark, 8–15 likt-vektede oppgaver): **oppgave 1 = matriseregning** (operasjoner + definert-sjekk + determinant/invers + `AX = B`); **én kompleks lineær likning** → polarform, ofte med `zⁿ`-røtter; **2–3 differensiallikninger** (minst én 1. orden, én 2. orden, ofte én anvendt modelleringsoppgave med likevekts-/langtidsspørsmål); **2–4 integraler** (minst ett med teknikk-kjeding, uegentlig eller absoluttverdi); **ett omdreiningsvolum om y-aksen**; **én manuell Newton/halvering** med «vis ett nullpunkt»-oppsett; **minst én MATLAB/Octave-skripttolking**; **én numerisk integrasjon/derivasjon fra tabell eller graf**; pluss innslag fra {lineær transformasjon, parametersystem, relaterte rater, optimering, Taylorpolynom, graf-tolking}. **Ærlighetsforbeholdet (ordrett i kapitlet):** kalibreringen bygger på 2010–2017 med et ~9-års gap til dagens emneplan; egenverdier er ute etter 2012; om en fersk emneplan har tatt inn rekker eller endret verktøyregime må prognosen justeres — sjekk første sett etter 2017. Karakterskille-listen: **bestått** = matriseoperasjoner + determinant/invers, separabel/lineær 1.-ordens DE, standardintegral med dokumentert substitusjon, kompleks lineær likning, én Newton-iterasjonsrekke, volum med riktig akseformel; **midtsjikt** = 2.-ordens DE med partikulærløsning (inkl. resonans/dempet svingning), delbrøk/uegentlige integraler, parametersystem med full tilfellesanalyse, korrekt MATLAB-skripttolking; **toppsjikt** = utlede modell-DE fra tekst og tolke likevekt uten å løse, presis eksistens-/entydighetsføring (skjæringssetning + monotoni) før numerisk metode, velge effektiv metode og se koblinger mellom deloppgaver, håndtere randtilfeller (resonans, dobbeltrot, uegentlige grenser, riktig kvadrant).
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «settet har 12 likt-vektede oppgaver på 5 timer — sett opp et tidsbudsjett og avgjør hvilke sjangre du sikrer først» og «hvorfor gir et riktig matrisesvar uten dimensjonssjekk likevel poengtap?».
- **Typiske feil:** Metafeilene: lese pensum lineært uten frekvensprioritering; tro at kalkulator betyr mindre trening (det motsatte — metode og føring måles); bruke for lang tid på én tung modelleringsoppgave når alle deloppgaver teller likt; drille egenverdier (ute etter 2012) på bekostning av MATLAB/numerikk (epokens signatur).
- **Quiz: 12 · Flashcards: 12** (frekvenser, epoke-skille, sjangerkatalog, føringsregler, tidsbudsjett)

**Prøve-kvote Del 0:** ingen (metakapittel).

---

### Del 1 — Matriseregning og lineære likningssystem *(prioritet: PERFEKT — alltid oppgave 1)*

#### Kapittel 1.1: Matriseoperasjoner og definert-sjekk

- **id:** `oslomet-mat1000-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Sum, differanse, produkt og transponert av matriser — med dimensjonssjekken som selv er poenggivende, og som åpner nesten hvert eneste sett.
- **Forkunnskaper (kryssbok):** [Matriser og matriseregning](/matte/bi-okonomi-9-1) (grunnleggende matrisebegrep og produkt).
- **Eksamensbelegg:** Sjanger A — matriseregning er oppgave 1 i så godt som alle sett (23/23). Den faste billige åpningen: regn ut oppgitte operasjoner OG **avgjør først om hver operasjon er definert** — fasit belønner at man forklarer *hvorfor* f.eks. `BA` ikke finnes (dimensjonskonflikt). Prioritet: **perfekt**.
- **Innholdskontrakt:** Matrise, dimensjon `m×n`, element `aᵢⱼ`; sum/differanse (krever lik dimensjon); **skalarmultiplikasjon**; **matriseprodukt** `AB` (definert kun når kolonner(A) = rader(B); dimensjonen til `AB`); at `AB ≠ BA` generelt og at én kan være definert mens den andre ikke er; **transponert** `Aᵀ` og reglene `(AB)ᵀ = BᵀAᵀ`, `(Aᵀ)ᵀ = A`; identitetsmatrisen `I` og `AI = IA = A`; **definert-sjekk som eget føringssteg** (skriv dimensjonene, avgjør, begrunn udefinert). Alt til aktiv bruk i tempo.
- **Oppgavesjangre:** A. Mønstereksempel: «Gitt `A` (2×2), `B` (2×3) og `C` (2×2): regn ut `A + C`, `AB`, `BA` og `2A − Cᵀ`, og forklar kort hvis noe ikke er definert.»
- **Typiske feil:** Regne `BA` når kun `AB` er definert; hoppe over den poenggivende begrunnelsen for hvorfor en operasjon ikke finnes; feil dimensjon på produktet; blande elementvis produkt med matriseprodukt; transponere feil.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 1.2: Determinant, invers og matriselikning AX = B

- **id:** `oslomet-mat1000-1-2` · **number:** 1.2 · **estimatedMinutes:** 60 · **prerequisites:** `oslomet-mat1000-1-1`
- **kapitteltype:** teori
- **description:** Determinant (2×2 og 3×3), invers matrise og løsning av matriselikninger — med de effektive snarveiene fasit belønner.
- **Forkunnskaper (kryssbok):** Kap. 1.1; [Determinanter og invers matrise](/matte/bi-okonomi-9-2).
- **Eksamensbelegg:** Sjanger A (fortsettelse) — determinant/invers/matriselikning er faste ledd i oppgave 1 (23/23). Fasit belønner **effektiv metode**: `det(A⁻¹) = 1/det(A)` og `det(Aⁿ) = (det A)ⁿ` framfor å invertere/multiplisere først; isolér `X` symbolsk i `AX = B` før innsetting. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Determinant** 2×2 (`ad − bc`) direkte, 3×3 ved kofaktorutvikling (Sarrus nevnes, kofaktor føres); egenskapene `det(AB) = det(A)det(B)`, `det(Aᵀ) = det(A)`, `det(Aⁿ) = (det A)ⁿ`, `det(A⁻¹) = 1/det(A)`, `det(kA) = kⁿ det(A)`; **invers**: 2×2-formel `A⁻¹ = (1/det A)·[[d,−b],[−c,a]]`, 3×3 ved Gauss-Jordan `[A | I] → [I | A⁻¹]`; invertibilitet ⇔ `det(A) ≠ 0`; **matriselikning**: isolér `X` symbolsk (`AX = B ⇒ X = A⁻¹B`; `AX + 2B = C ⇒ X = A⁻¹(C − 2B)`; `XA = B ⇒ X = BA⁻¹` — **gang fra riktig side**) FØR innsetting. Understrek at høyre-/venstremultiplikasjon ikke er utbyttbar.
- **Oppgavesjangre:** A. Mønstereksempel: «Gitt `A` og `B` (begge 2×2 med `det A ≠ 0`): løs `AX + 2B = C` for `X`, og finn `det(A⁻¹)` uten å regne ut `A⁻¹`.» Mønstereksempel: «Regn ut `A⁻¹` (3×3) med Gauss-Jordan og verifiser `AA⁻¹ = I`.»
- **Typiske feil:** Invertere `A` unødvendig der `det(A⁻¹) = 1/det(A)` gir svaret direkte; gange fra feil side i `XA = B`; fortegnsfeil i kofaktor/inversformel; glemme å sjekke `det(A) ≠ 0` før invers; regnefeil i Gauss-Jordan uten å verifisere `AA⁻¹ = I`.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 1.3: Lineære likningssystem med parameter, uavhengighet og basis

- **id:** `oslomet-mat1000-1-3` · **number:** 1.3 · **estimatedMinutes:** 60 · **prerequisites:** `oslomet-mat1000-1-2`
- **kapitteltype:** teori
- **description:** Full tilfellesanalyse av parametersystem (entydig / uendelig mange / ingen), løsning på parametrisk vektorform, og lineær uavhengighet / redusert trappeform.
- **Forkunnskaper (kryssbok):** Kap. 1.2; [Lineære likningssystem og Gauss-eliminasjon](/matte/bi-okonomi-9-3).
- **Eksamensbelegg:** Sjanger I (parametersystem, 17/23) + basis/uavhengighet/nullrom (8/23). Metode: `det(koeffisientmatrise) = 0` gir kandidatverdiene for parameteren; hvert tilfelle undersøkes med Gauss-eliminasjon på totalmatrisen; **uendelig mange skrives på parametrisk vektorform**. Prioritet: **kunne** (tempo: perfekt, del av oppgave 1-blokken).
- **Innholdskontrakt:** Gauss-eliminasjon til (redusert) trappeform; totalmatrise vs. koeffisientmatrise; **tilfellesanalyse for parameter `a`**: sett `det(A) = 0` → kandidatverdier; for `det(A) ≠ 0` entydig løsning (Cramer nevnes som alternativ); for hver kandidatverdi radreduser totalmatrisen og skill **uendelig mange** (fri variabel, rad `0 = 0`) fra **ingen** (inkonsistent rad `0 = tall`); **parametrisk vektorform** `x = x_p + t·v`; **lineær uavhengighet** (kolonnene uavhengige ⇔ `det ≠ 0` for kvadratisk, ellers pivot i hver kolonne); begrepene **nullrom, rang og pivot** (kort, kjenne-nivå); homogent system `Ax = 0` har alltid triviell løsning, ikke-triviell ⇔ `det = 0`.
- **Oppgavesjangre:** I. Mønstereksempel: «For hvilke verdier av `a` har systemet {`x + az = 3`, `−ay + z = 2`, `ax + ay = 1`} ingen, én eller uendelig mange løsninger? Skriv løsningen på parametrisk vektorform der den ikke er entydig.»
- **Typiske feil:** Konkludere «uendelig mange» der Gauss faktisk gir en inkonsistent rad (`0 = tall`); glemme å undersøke kandidatverdiene enkeltvis; oppgi én partikulær løsning i stedet for full parametrisk vektorform; regnefeil i radoperasjonene; forveksle koeffisient- og totalmatrise.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 1.4: Drill: matriseoppgaven (oppgave 1)

- **id:** `oslomet-mat1000-1-4` · **number:** 1.4 · **estimatedMinutes:** 85 · **prerequisites:** `oslomet-mat1000-1-3`
- **kapitteltype:** drill
- **description:** Hele matriserepertoaret som gjennomført oppgave 1 — operasjoner med definert-sjekk, determinant, invers, matriselikning og parametersystem, med full føring og effektiv metode.
- **Eksamensbelegg:** Sjanger A + I, alle varianter samlet — matriseoppgaven er oppgave 1 i 23/23 sett og gir de sikreste billige poengene. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrifter: (1) operasjoner: skriv dimensjonene → avgjør definert → regn → begrunn udefinert; (2) determinant: velg 2×2-formel eller kofaktor, bruk snarveiene `det(Aⁿ)`, `det(A⁻¹)`; (3) invers: 2×2-formel eller Gauss-Jordan + verifiser `AA⁻¹ = I`; (4) matriselikning: isolér `X` symbolsk fra riktig side → sett inn; (5) parametersystem: `det = 0` → kandidater → Gauss per tilfelle → parametrisk vektorform. **Gjennomregnet eksamens-oppgave 1** (én sammensatt 1a–1e) med sensor-margnotater om hvor de billige poengene ligger og hvor snarveiene sparer tid (`det(A⁻¹) = 1/det(A)` framfor invertering). 12–15 oppgaver på eksamensnivå med full føring, hver med markert «Alternativt:»-vei der den finnes.
- **Oppgavesjangre:** A + I. Mønstereksempel: «(a) Regn `AB` og `BA`, forklar hvis noe ikke er definert. (b) Finn `det(A)` og `det(A⁻¹)`. (c) Løs `AX = 3B − I`. (d) For hvilke `a` er `A(a)` ikke inverterbar?»
- **Typiske feil:** Alle dimensjons-, snarvei- og side-fellene fra 1.1–1.3 i kjedet form; hoppe over definert-sjekkens begrunnelse; invertere der determinant-snarveien holder; tidsfellen (lang utregning der en regel gir svaret på én linje).
- **Quiz: 16 · Flashcards: 6**

**Prøve-kvote Del 1:** 4 prøver (spesifisert i §4).

---

### Del 2 — Lineære transformasjoner *(prioritet: KUNNE — 65 %)*

#### Kapittel 2.1: Standardmatrisen fra bilder av vektorer

- **id:** `oslomet-mat1000-2-1` · **number:** 2.1 · **estimatedMinutes:** 50 · **prerequisites:** `oslomet-mat1000-1-2`
- **kapitteltype:** teori
- **description:** Bygg standardmatrisen til en lineær transformasjon fra kjente bilder — med lineærkombinasjons-snarveien fasit foretrekker.
- **Forkunnskaper (kryssbok):** Kap. 1.1–1.2; [Vektorer i planet](/matte/r1-6-1), [Vektorregning](/matte/r1-6-2).
- **Eksamensbelegg:** Sjanger H (del 1) — lineær transformasjon 15/23, 6/10 i epoke 2. To standardvarianter: bygg standardmatrisen fra bilder av basisvektorer, eller skriv en målvektor som lineærkombinasjon av kjente vektorer og bruk lineariteten (fasit foretrekker den korte veien). Prioritet: **kunne**.
- **Innholdskontrakt:** Definisjon av lineær transformasjon `T(x)`: `T(u+v) = T(u)+T(v)`, `T(cu) = cT(u)`; **standardmatrisen** `A` med kolonner `T(e₁), T(e₂)` (eller `T(e₁), T(e₂), T(e₃)` i R³) slik at `T(x) = Ax`; **lineærkombinasjons-snarveien**: er `w = c₁u + c₂v` med kjente `T(u), T(v)`, så er `T(w) = c₁T(u) + c₂T(v)` — raskere enn å bygge hele `A` når bare ett bilde søkes; bygg `A` fra bilder når det ikke er basisvektorer (løs for kolonnene via et lineært system); finn **alle vektorer som sendes til en gitt vektor** (løs `Ax = b`, koble til Del 1.3).
- **Oppgavesjangre:** H. Mønstereksempel: «`T` er lineær med `T(1,1) = (3,0)` og `T(1,−1) = (1,2)`. Finn `T(2,4)` (lineærkombinasjon) og standardmatrisen til `T`.»
- **Typiske feil:** Bygge hele standardmatrisen når lineærkombinasjon gir bildet direkte (tidstap); feil oppsett når de oppgitte vektorene ikke er basisvektorer; regnefeil i systemet for kolonnene; glemme at `Ax = b` kan ha uendelig mange løsninger (parametrisk form).
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 2.2: Geometriske transformasjoner og komposisjoner

- **id:** `oslomet-mat1000-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `oslomet-mat1000-2-1`
- **kapitteltype:** teori
- **description:** Rotasjon, speiling, projeksjon og forlengelse som standardmatriser — og komposisjoner satt sammen som matriseprodukt i riktig rekkefølge.
- **Forkunnskaper (kryssbok):** Kap. 2.1; [Enhetssirkelen og trigonometriske definisjoner](/matte/r2-4-2), [Trigonometriske formler](/matte/r2-4-6).
- **Eksamensbelegg:** Sjanger H (del 2) — geometriske transformasjoner og komposisjoner. Fasit krever riktig produktrekkefølge (den siste transformasjonen står lengst til venstre). Prioritet: **kunne**.
- **Innholdskontrakt:** Standardmatrisene: **rotasjon** `R(θ) = [[cos θ, −sin θ], [sin θ, cos θ]]`; **speiling** om x-aksen, y-aksen, linja `y = x` og generell linje gjennom origo med vinkel `α`; **ortogonal projeksjon** på en akse/linje; **forlengelse/skalering** `[[k,0],[0,k]]`; **komposisjon**: «gjør `S` etter `T`» = `S∘T` med matrise `A_S · A_T` (**rekkefølge!** siste operasjon lengst til venstre); at rotasjoner kommuterer, men rotasjon og speiling ikke gjør det; determinanten som areal-/orienteringsfaktor (`det = ±1` for rotasjon/speiling).
- **Oppgavesjangre:** H. Mønstereksempel: «`T` roterer først `π/2` mot klokka og speiler så om x-aksen. Finn standardmatrisen til `T` og finn `T(2,1)`.»
- **Typiske feil:** Feil produktrekkefølge (regner `A_T·A_S` i stedet for `A_S·A_T`); fortegnsfeil i rotasjonsmatrisen; forveksle speiling om `y = x` med rotasjon; glemme at speiling ikke kommuterer med rotasjon.
- **Quiz: 16 · Flashcards: 16**

**Prøve-kvote Del 2:** 4 prøver (spesifisert i §4).

---

### Del 3 — Komplekse tall *(prioritet: PERFEKT — 10/10 i epoke 2, årviss signatur)*

> **Merknad (skal reflekteres i Forkunnskaper-blokkene):** Komplekse tall er
> IKKE dekket i noen R1/R2/S2-bok på plattformen. Del 3 bygger derfor teorien fra
> grunnen av; forkunnskaps-lenkene peker kun til reell andregradsformel og
> trigonometri/enhetssirkel, med en setning om at selve komplekstall-apparatet
> introduseres her.

#### Kapittel 3.1: Komplekse tall: kartesisk og polar form

- **id:** `oslomet-mat1000-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Regning på normalform, konjugat og modulus, og polarform begge veier med kvadrantdisiplin — grunnlaget for epokens årvisse signaturoppgave.
- **Forkunnskaper (kryssbok):** [ABC-formelen](/matte/1t-2-3) (andregradslikninger over ℝ), [Enhetssirkelen og trigonometriske definisjoner](/matte/r2-4-2), [Radianer og vinkelmål](/matte/r2-4-1). (Selve komplekstall-teorien introduseres i dette kapitlet.)
- **Eksamensbelegg:** Sjanger G — komplekse tall 13/23 totalt, men **10/10 i epoke 2** (årviss signatur). Polarform begge veier og riktig kvadrant for argumentet er de faste billige poengene. Prioritet: **perfekt**.
- **Innholdskontrakt:** `ℂ` med `i² = −1`; realdel/imaginærdel; addisjon/subtraksjon/multiplikasjon; **divisjon via konjugering** (forleng med konjugert nevner); konjugat `z̄` og reglene `\overline{z+w} = z̄ + w̄`, `\overline{zw} = z̄·w̄`; **modulus** `|z| = √(a²+b²)` og `z·z̄ = |z|²`; **polarform** `z = r(cos φ + i sin φ) = reⁱᶠ` **begge veier** — normalform → polar (**tegn punktet i planet FØR argumentet fastsettes**; `tan φ = b/a` men kvadranten avgjør), og polar → normalform (skriv helt ut når det spørres); argumentkonvensjon og reduksjon mod `2π`; **Eulers formel** (bruk); multiplikasjon/divisjon på polarform (multipliser moduli, adder argumenter). Alt til aktiv bruk i tempo.
- **Oppgavesjangre:** G. Mønstereksempel: «Skriv `z = −√3 + i` på polarform, og regn ut `z/z̄` på normalform.»
- **Typiske feil:** Argument i feil kvadrant (`arctan` brukt blindt uten å tegne punktet); vinkel ikke redusert mod `2π`; dividere uten å konjugere; blande `|z|²` og `z²`; polarsvar ikke skrevet ut til normalform når oppgaven ber om det.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 3.2: Komplekse likninger: lineær og andregrad

- **id:** `oslomet-mat1000-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `oslomet-mat1000-3-1`
- **kapitteltype:** teori
- **description:** Den lineære komplekse likningen (epokens faste billige oppgave) og andregradslikning med negativ diskriminant, med svar på både kartesisk og polar form.
- **Forkunnskaper (kryssbok):** Kap. 3.1; [ABC-formelen](/matte/1t-2-3).
- **Eksamensbelegg:** Sjanger G (kjerne-varianten i epoke 2): løs en **lineær kompleks likning** `az + b = cz + d` og oppgi svaret på både kartesisk og polar form. Kompleks andregradslikning via abc-formel med negativ diskriminant. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Lineær kompleks likning** `az + b = cz + d`: samle `z`-leddene, isolér `z = (d − b)/(a − c)`, forleng med konjugert nevner → normalform → **også polarform** når det bes om (riktig kvadrant); likninger der `z̄` inngår (skriv `z = x + iy`, skill real- og imaginærdel, løs det reelle 2×2-systemet); **kompleks andregradslikning** `az² + bz + c = 0` via abc-formelen med negativ diskriminant → `√(negativt tall)` = `i·√|·|` → konjugerte røtter; **konjugatrotsetningen** for reelle koeffisienter (`z̄₀` er rot når `z₀` er det) og faktorisering `(z − z₀)(z − z̄₀) = z² − 2Re(z₀)z + |z₀|²`.
- **Oppgavesjangre:** G. Mønstereksempel: «Løs `(1 + √3 i)z = √3 z + 2` og oppgi svaret eksakt på både kartesisk og polar form.» Mønstereksempel: «Løs `z² − 4z + 13 = 0` og skriv røttene på polarform.»
- **Typiske feil:** Glemme konjugering ved divisjon; argument i feil kvadrant; behandle `z̄` som `z`; fortegnsfeil på diskriminanten; oppgi bare kartesisk når polar også kreves (eller omvendt).
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 3.3: zⁿ-røtter og de Moivre

- **id:** `oslomet-mat1000-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** `oslomet-mat1000-3-2`
- **kapitteltype:** teori
- **description:** Alle n røtter av zⁿ = w jevnt fordelt på en sirkel, og de Moivres formel for høye potenser med vinkelreduksjon.
- **Forkunnskaper (kryssbok):** Kap. 3.1–3.2; [Trigonometriske formler](/matte/r2-4-6).
- **Eksamensbelegg:** Sjanger G (fortsettelse) — `zⁿ`-røtter følger ofte rett etter den lineære likningen i epoke 2. de Moivre-potens (`zⁿ` med vinkelreduksjon) er beslektet. Prioritet: **perfekt**.
- **Innholdskontrakt:** **de Moivre**: `(reⁱᶿ)ⁿ = rⁿeⁱⁿᶿ` — oppskrift for høye potenser: polarform → multipliser vinkelen → **reduser mod `2π`** → normalform hvis spurt; **n-te røtter**: `zⁿ = w` har nøyaktig `n` løsninger med `|z| = |w|^{1/n}` og `arg z = (arg w + 2kπ)/n`, `k = 0,…,n−1` — **jevnt fordelt på en sirkel** med radius `|w|^{1/n}`, skal kunne tegnes/beskrives; enhetsrøtter som spesialtilfelle; kobling til faktorisering av `zⁿ − w` via røttene.
- **Oppgavesjangre:** G. Mønstereksempel: «Finn alle løsninger av `z³ = −8i`, skriv dem på normalform og marker dem i planet.» Mønstereksempel: «Regn ut `(1 − i)¹⁰` på normalform.»
- **Typiske feil:** Glemme `2kπ`-leddet (finner bare én rot); glemme å redusere vinkelen ved høye potenser; ta `n`-te rot av modulus feil; dele argumentet uten å legge til `2kπ` først.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 3.4: Drill: komplekse tall som signaturoppgave

- **id:** `oslomet-mat1000-3-4` · **number:** 3.4 · **estimatedMinutes:** 80 · **prerequisites:** `oslomet-mat1000-3-3`
- **kapitteltype:** drill
- **description:** Hele komplekstall-repertoaret som epokens signaturoppgave — lineær likning → polarform → zⁿ-røtter, med full føring og standardform.
- **Eksamensbelegg:** Sjanger G, alle varianter samlet (10/10 i epoke 2): lineær kompleks likning → kartesisk+polar, `zⁿ`-røtter, de Moivre-potens, andregradslikning, faktorisering. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrifter: (1) lineær likning: samle `z` → isolér → konjuger nevner → normalform → polarform; (2) potens: polar → multipliser vinkel → reduser mod `2π` → normalform; (3) røtter: `|w|^{1/n}`-modulus + `2kπ`-lista, prinsipalrot først; (4) andregrad: abc med negativ diskriminant → konjugerte røtter; (5) faktorisering: konjugatpar → reell kvadratisk faktor. **Gjennomregnet eksamens-signaturoppgave** (én sammensatt a–d som kjeder lineær likning, polarform og røtter) med sensor-margnotater om standardform (riktig kvadrant, både kartesisk og polar) og hvor de billige poengene ligger. 10–14 oppgaver på eksamensnivå med full føring.
- **Oppgavesjangre:** G, alle varianter. Mønstereksempel: «(a) Løs `(2 − i)z = 3 + i` og oppgi `z` på kartesisk og polar form. (b) Finn alle tredjerøtter av `z`. (c) Marker røttene i planet.»
- **Typiske feil:** Alle kvadrant- og `2kπ`-fellene fra 3.1–3.3; polarsvar ikke skrevet ut til normalform; glemt konjugering; tidsfellen (lang regning der polarform gir svaret på tre linjer).
- **Quiz: 16 · Flashcards: 6**

**Prøve-kvote Del 3:** 4 prøver (spesifisert i §4).

---

### Del 4 — Derivasjon, grenser og anvendelser *(prioritet: KUNNE — fundament for Del 5–7)*

#### Kapittel 4.1: Derivasjonsteknikk, implisitt derivasjon og tangentlinje

- **id:** `oslomet-mat1000-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Alle derivasjonsreglene i tempo, logaritmisk derivasjon, og implisitt derivasjon til tangentlinje — fundamentet for Newton, DE og relaterte rater.
- **Forkunnskaper (kryssbok):** [Derivasjonsregler](/matte/r1-4-1), [Kjerneregelen](/matte/r1-4-3), [Produktregelen og kvotientregelen](/matte/r1-4-4), [Derivasjon av trigonometriske funksjoner](/matte/r2-4-9).
- **Eksamensbelegg:** Sjanger M — derivasjon 18/23 som egen del; implisitt derivasjon/tangent i ~10/23. Verktøy-fundamentet for Newton (Del 7), DE (Del 6) og relaterte rater (kap. 4.2). Prioritet: **kunne** (tempo: perfekt).
- **Innholdskontrakt:** Kjerne-, produkt- og kvotientregel i tempo; standardderiverte (inkl. `eˣ`, `ln x`, `sin/cos/tan`, `arcsin`, `arctan` — på formelarket); **logaritmisk derivasjon** (for `f(x)^{g(x)}` og produkter av mange faktorer); **implisitt derivasjon**: deriver relasjonen mhp. `x` (husk `y′`-faktoren via kjerneregelen), løs for `y′`; **tangentlinje**: vis først at punktet ligger på kurven (sett inn), finn `y′` i punktet, skriv `y − y₀ = y′₀(x − x₀)`; høyere deriverte og andrederiverttest (forberedelse til optimering).
- **Oppgavesjangre:** M. Mønstereksempel: «Vis at `(1,2)` ligger på kurven `x²y³ = y·ln x + x³`, og finn tangentens likning der.» Mønstereksempel: «Deriver `f(x) = x^{sin x}` med logaritmisk derivasjon.»
- **Typiske feil:** Glemme `y′`-faktoren i implisitt derivasjon; sette inn tallverdier før derivasjon; ikke verifisere at punktet ligger på kurven; kjerneregel-feil i sammensatte uttrykk; glemme logaritmisk derivasjon ved variabel eksponent.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 4.2: Relaterte rater

- **id:** `oslomet-mat1000-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `oslomet-mat1000-4-1`
- **kapitteltype:** teori
- **description:** Modeller en geometrisk sammenheng, deriver implisitt mhp. tid, sett inn øyeblikksverdiene og tolk fortegnet — ofte koblet til en beholder som fylles eller tømmes.
- **Forkunnskaper (kryssbok):** Kap. 4.1; [Relaterte rater](/matte/r1-4-7).
- **Eksamensbelegg:** Sjanger K — 9/23. Svært ofte koblet til en beholder (kjegle, vase, kar) som fylles/tømmes, og dermed til volumformel (kap. 5.4) og/eller Torricelli-DE (kap. 6.4). Prioritet: **kunne**.
- **Innholdskontrakt:** **Relaterte rater-oppskrift (aktiv)**: (1) figur + navngi variabler og deres tidsderiverte; (2) modeller sammenhengen (kjeglevolum `V = πr²h/3`, Pytagoras, `tan θ`-synsvinkel, sylinder/vase-profil); (3) **deriver implisitt mhp. `t`** (ikke sett inn tall før derivasjon); (4) sett inn øyeblikksverdiene; (5) **tolk fortegn og enhet** i konklusjonssetningen; likedannethet for å eliminere en variabel (kjegle: `r/h` konstant).
- **Oppgavesjangre:** K. Mønstereksempel: «En ballong blåses opp så volumet vokser med 300 cm³/s. Hvor fort vokser radien når `r = 10 cm`?» Mønstereksempel: «Vann renner ut av en kjegleformet tank; hvor fort synker overflaten når dybden er 2 m?»
- **Typiske feil:** Sette inn tallverdier FØR derivasjonen (låser variablene); ikke derivere implisitt mhp. `t`; svar uten fortegns-/enhetstolkning; glemme likedannethet (for mange variable igjen); feil geometrisk modell fra figuren.
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 4.3: Optimering

- **id:** `oslomet-mat1000-4-3` · **number:** 4.3 · **estimatedMinutes:** 50 · **prerequisites:** `oslomet-mat1000-4-1`
- **kapitteltype:** teori
- **description:** Modeller målfunksjonen, finn og klassifiser stasjonære punkter, og begrunn globalt ekstremum med endepunktssjekk — inkludert nærmeste-punkt og parameteroptimering.
- **Forkunnskaper (kryssbok):** Kap. 4.1; [Funksjonsdrøfting](/matte/r1-4-6), [Globale ekstremalpunkter](/matte/r1-4-8), [Optimering i praksis](/matte/r1-4-9), [Fortegnslinjer](/matte/1t-4-3).
- **Eksamensbelegg:** Sjanger N — 7/23, stigende i epoke 2. Egne varianter: **korteste avstand** fra punkt til graf, og **min-av-maks** (parameteroptimering). Fasit krever begrunnet globalt ekstremum. Prioritet: **kunne**.
- **Innholdskontrakt:** Modeller målfunksjonen fra tekst/geometri med bibetingelse; deriver, finn stasjonære punkter (`f′ = 0`), **klassifiser** (fortegnsskjema for `f′` eller andrederiverttest); **begrunn globalt ekstremum** (endepunktssjekk på lukket intervall, eller grenser mot `±∞`); **nærmeste punkt**: minimér kvadrert avstand `D(x) = (x − x₀)² + (f(x) − y₀)²`; **parameteroptimering (min-av-maks)**. Bruk fortegnslinjer som dokumentasjon.
- **Oppgavesjangre:** N. Mønstereksempel: «Finn punktet på grafen til `y = x²` som ligger nærmest `(0,3)`.» Mønstereksempel: «Finn det innskrevne rektanglet med størst areal under `y = 4 − x²`.»
- **Typiske feil:** Konklusjon uten fortegnsskjema/klassifisering; globalt ekstremum påstått uten endepunkts-/grensesjekk; minimere avstand i stedet for kvadrert avstand (unødig rot); glemme bibetingelsen; randpunkter oversett.
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 4.4: Grenseverdier og L'Hôpital

- **id:** `oslomet-mat1000-4-4` · **number:** 4.4 · **estimatedMinutes:** 50 · **prerequisites:** `oslomet-mat1000-4-1`
- **kapitteltype:** teori
- **description:** Alle ubestemte former løst med L'Hôpital og standardgrenser — med formsjekk-disiplinen som markerer [0/0] eller [∞/∞] før hver bruk.
- **Forkunnskaper (kryssbok):** Kap. 4.1; [Grenseverdi](/matte/r1-3-1), [Kontinuitet](/matte/r1-3-2), [Potenser og logaritmer](/matte/r1-1-2).
- **Eksamensbelegg:** Sjanger O — 10/23, fallende (E1-tungt), men fortsatt pensum og på formelarket. Prioritet: **kunne**.
- **Innholdskontrakt:** Standardgrensene (`sin x/x → 1`, veksthierarkiet `ln x ≪ xᵖ ≪ eˣ`); **L'Hôpital med disiplin**: markér ubestemt form **eksplisitt** (`[0/0]` eller `[∞/∞]`) FØR hver anvendelse, sjekk forutsetningene, gjentatt bruk krever ny markering; de andre ubestemte formene og omskrivingene: `0·∞` (flytt til nevner), `∞−∞` (fellesnevner eller konjugattriks), `1^∞`, `0⁰`, `∞⁰` (via `lim ln` + eksponentiering); når L'Hôpital IKKE hjelper (bruk standardgrense); ensidige grenser i skjøtepunkter.
- **Oppgavesjangre:** O. Mønstereksempel: «Beregn `lim_{x→∞}(√(x²+4x) − x)` med full føring.» Mønstereksempel: «`lim_{x→0⁺}(1 + 3x)^{1/x}`» (logaritmetriks; identifiser `1^∞` først).
- **Typiske feil:** L'Hôpital uten å markere/sjekke ubestemt form; L'Hôpital på ikke-ubestemt uttrykk; angripe `1^∞`/`∞−∞` direkte i stedet for via logaritme/konjugat; glemme å eksponentiere tilbake; regne langt der veksthierarkiet gir svaret.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 4.5: Taylorpolynom, stykkevis funksjon og grafanalyse

- **id:** `oslomet-mat1000-4-5` · **number:** 4.5 · **estimatedMinutes:** 55 · **prerequisites:** `oslomet-mat1000-4-1`, `oslomet-mat1000-4-4`
- **kapitteltype:** teori
- **description:** Tre lavfrekvente, men billige epoke 2-sjangre samlet: Taylorpolynom om x = a (ikke rekker), deriverbarhet av stykkevis funksjon, og graf-/retningsfelt-tolking.
- **Forkunnskaper (kryssbok):** Kap. 4.1, 4.4; [Kontinuitet](/matte/r1-3-2), [Derivasjonens definisjon](/matte/r1-3-3).
- **Eksamensbelegg:** Sjanger P (Taylorpolynom 4/23), Q (stykkevis 2/23, kun epoke 2) og R (graf/retningsfelt 4/23, stigende i epoke 2) — alle lavfrekvente, men billige når de kommer. **NB: kun polynomer — uendelige Taylor-/potensrekker hører til Matematikk 2000 og skal IKKE med.** Prioritet: **kjenne**.
- **Innholdskontrakt:** **Taylorpolynom** `Pₙ(x) = Σ_{k=0}^n f⁽ᵏ⁾(a)/k! · (x−a)ᵏ` om `x = a` til gitt grad (formel på formelarket); bruk til å **estimere** en funksjonsverdi eller et integral, og vurdér **restleddet** `Rₙ` (lineær tilnærming `f(x) ≈ f(a) + f′(a)(x−a)` som spesialtilfelle); **stykkevis funksjon** med ukjente `a, b`: sett opp **kontinuitetsbetingelse** (verdier like i skjøtet) **og derivert-betingelse** (ensidige deriverte like) og løs 2×2-systemet; **grafanalyse**: identifiser hvilken graf som er `f`, `f′` og `F` (antiderivert) ut fra fortegn/monotoni-sammenhenger; **retningsfelt**: avgjør hvilken kurve som er (eller ikke er) løsning av en gitt DE (forbinder til Del 6). Fundamentalteorem med variabel grense nevnes kort: `d/dx ∫_a^{g(x)} f(t) dt = f(g(x))g′(x)`.
- **Oppgavesjangre:** P + Q + R. Mønstereksempel (P): «Finn Taylorpolynomet av grad 2 til `√x` om `x = 4` og bruk det til å tilnærme `√4.2`.» Mønstereksempel (Q): «Bestem `a, b` slik at den delte funksjonen blir deriverbar i skjøtepunktet.»
- **Typiske feil:** Forveksle Taylorpolynom med Taylorrekke (ta med uendelig mange ledd); restledd ikke vurdert; bruke bare kontinuitetsbetingelsen for stykkevis (glemme derivert-betingelsen); forveksle `f`, `f′` og `F` i grafanalysen; glemme kjerneregel-faktoren `g′(x)` i FTC med variabel grense.
- **Quiz: 14 · Flashcards: 18**

**Prøve-kvote Del 4:** 4 prøver (spesifisert i §4).

---

### Del 5 — Integrasjon *(prioritet: PERFEKT — 96 %, 2–4 deloppgaver per sett)*

#### Kapittel 5.1: Integrasjonsteknikk I: substitusjon, delvis integrasjon og fundamentalteoremet

- **id:** `oslomet-mat1000-5-1` · **number:** 5.1 · **estimatedMinutes:** 60 · **prerequisites:** `oslomet-mat1000-4-1`
- **kapitteltype:** teori
- **description:** De to grunnteknikkene med føringsstandard — substitusjonsboks med nye grenser og dokumentert u/v'-valg — og fundamentalteoremet som binder derivasjon og integrasjon sammen.
- **Forkunnskaper (kryssbok):** [Variabelskifte (substitusjon)](/matte/r2-3-1), [Delvis integrasjon](/matte/r2-3-2), [Integrasjon av 1/x og eksponentialfunksjoner](/matte/r2-2-3), [Analysens fundamentalsetning](/matte/r2-2-5), [Bestemt integral som grenseverdi](/matte/r2-2-4).
- **Eksamensbelegg:** Sjanger D — integrasjonsteknikk 22/23 (96 %), typisk 2–4 deloppgaver per sett. Substitusjon og delvis integrasjon er de mest brukte teknikkene. Prioritet: **perfekt**.
- **Innholdskontrakt:** Ubestemt/bestemt integral, fundamentalteoremet (`∫_a^b f = F(b) − F(a)`, og `d/dx ∫_a^x f = f(x)`); **substitusjon**: bokfør `u`, `du` og **nye grenser** i egen boks (ved bestemt integral); den indre deriverte; standardsubstitusjoner (`∫f(ax+b)dx`); **delvis integrasjon** `∫u dv = uv − ∫v du`: **dokumentér `u/v′`-valget** (LIATE-heuristikk); klassikerne `∫x²eˣ`, `∫x ln x`, `∫x sin x`; «ensomme» funksjoner (`∫ln x`, `∫arctan x`) integreres delvis mot 1; sykliske tilfeller (`∫eˣ sin x` — løs for integralet); kombinasjon substitusjon → delvis.
- **Oppgavesjangre:** D. Mønstereksempel: «Beregn `∫₀¹ x·e^{−x²} dx` med substitusjon (grenser bokført).» Mønstereksempel: «Beregn `∫x²·ln x dx` med delvis integrasjon.»
- **Typiske feil:** Glemme å endre grensene ved substitusjon (eller bytte tilbake feil); glemme den indre deriverte; feil `u/v′`-valg (gjør integralet verre); glemme fortegnet i `−∫v du`.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 5.2: Integrasjonsteknikk II: delbrøk, fullføre kvadrat og trig

- **id:** `oslomet-mat1000-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** `oslomet-mat1000-5-1`
- **kapitteltype:** teori
- **description:** Rasjonale integrander med delbrøk (også irreduserbar kvadratisk faktor → ln-del + arctan-del), fullføre kvadrat, og trigonometriske integraler.
- **Forkunnskaper (kryssbok):** Kap. 5.1; [Delbrøkoppspalting](/matte/r2-3-3), [Fullstendig kvadrat](/matte/1t-2-4), [Rasjonale uttrykk](/matte/1t-1-6).
- **Eksamensbelegg:** Sjanger D (fortsettelse) — delbrøk med irreduserbar kvadratisk faktor og fullføre-kvadrat → arctan-form er midtsjikt-markører. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Delbrøkoppspalting**: alle nevnertyper (distinkte lineære, gjentatte lineære, irreduserbar kvadratisk); **polynomdivisjon først** når tellergrad ≥ nevnergrad; **irreduserbar kvadratisk faktor** `(ax+b)/(x²+c)` → splitt i **ln-del** (tellerens deriverte-del) + **arctan-del** (via fullført kvadrat); **trigonometriske integraler** (`sin²`/`cos²` via halvvinkel, `sin·cos`, produkter); kjeding substitusjon → delbrøk (`∫dx/(eˣ+1)` via `u = eˣ`).
- **Oppgavesjangre:** D. Mønstereksempel: «Beregn `∫ (2x+3)/(x²+2x+5) dx` (splitt i ln-del + arctan-del via fullført kvadrat).» Mønstereksempel: «Beregn `∫ dx/(eˣ+1)` (substitusjon `u = eˣ`, deretter delbrøk).»
- **Typiske feil:** Delbrøk uten polynomdivisjon når tellergrad ≥ nevnergrad; glemme arctan-leddet fra irreduserbar faktor; feil oppsett av delbrøk-koeffisientene; feil fullføring av kvadratet.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 5.3: Absoluttverdi og uegentlige integraler

- **id:** `oslomet-mat1000-5-3` · **number:** 5.3 · **estimatedMinutes:** 55 · **prerequisites:** `oslomet-mat1000-5-2`
- **kapitteltype:** teori
- **description:** Integraler med absoluttverdi (del opp intervallet) og uegentlige integraler med eksplisitt grenseføring — inkludert de faste [xⁿe^(−xᵏ)]-typene over [0,∞).
- **Forkunnskaper (kryssbok):** Kap. 5.2; [Analysens fundamentalsetning](/matte/r2-2-5).
- **Eksamensbelegg:** Sjanger D — absoluttverdi og uegentlige integraler er faste teknikk-varianter. Fasit krever **eksplisitt grense**; «sett inn ∞» underkjennes. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Absoluttverdi**: finn nullpunktene til uttrykket inni, **del opp intervallet** der fortegnet skifter, integrer hvert stykke med riktig fortegn; **uegentlige integraler**: identifiser uendelighetsgrense eller singularitet; **før med eksplisitt `lim`** (`∫₁^∞ = lim_{b→∞} ∫₁^b`; `∫₀¹ 1/√x = lim_{a→0⁺} ∫_a^1`); direkte beregning (ofte substitusjon → gammalignende `∫₀^∞ xⁿe^{−xᵏ}`); splitt i alle singulariteter inne i intervallet (`∫_{−1}^1 1/x²` deles i 0); kort om når integralet divergerer.
- **Oppgavesjangre:** D. Mønstereksempel: «Regn ut `∫₀² |x − 1| dx`.» Mønstereksempel: «Regn ut det uegentlige integralet `∫₀^∞ x⁵ e^{−x³} dx` (substitusjon + grenseføring).»
- **Typiske feil:** Ikke dele opp intervallet ved absoluttverdi; «sett inn ∞» uten `lim`-føring; singulariteter inne i intervallet oversett; feil fortegn på et av stykkene; glemme å sjekke konvergens.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 5.4: Omdreiningsvolum og buelengde

- **id:** `oslomet-mat1000-5-4` · **number:** 5.4 · **estimatedMinutes:** 55 · **prerequisites:** `oslomet-mat1000-5-2`
- **kapitteltype:** teori
- **description:** Riktig metodevalg etter rotasjonsakse — skiver om x-aksen, sylinderskall om y-aksen (hovedtilfellet) — med integralet løst ved dokumentert teknikk, pluss buelengde.
- **Forkunnskaper (kryssbok):** Kap. 5.2; [Volum av omdreiningslegemer](/matte/r2-3-6), [Areal mellom kurver](/matte/r2-2-7).
- **Eksamensbelegg:** Sjanger J — omdreiningsvolum 12/23, stigende i epoke 2 der **y-aksen er hovedtilfellet** (vaser, beholdere, dreide trestykker), ofte koblet til et fyll-/tømme-scenario (relaterte rater kap. 4.2, Torricelli kap. 6.4). Buelengde 1/23 (sjelden; formel på arket). Prioritet: **perfekt** (volum) / **kjenne** (buelengde).
- **Innholdskontrakt:** Tegn/forstå området; **velg metode etter akse** (begge formler på formelarket): om **x-aksen** → skiver `V = π∫f² dx`; om **y-aksen** → **sylinderskall** `V = 2π∫x|f| dx` (hovedtilfellet); sett opp integralet og løs med relevant teknikk (ofte delvis: `∫x ln x`, `∫x eˣ`); areal mellom kurver som kontrast (ikke volum); enhet (ofte omregnet til liter = dm³); utled `V(h)` for en beholder med gitt profil (første ledd i Torricelli-kjeden); **buelengde** `L = ∫√(1 + (f′)²) dx` (eget oppsett; formel på arket).
- **Oppgavesjangre:** J. Mønstereksempel: «Grafen til `y = sin x` for `0 ≤ x ≤ π/2` roteres om y-aksen og danner en vase. Finn volumet.» Mønstereksempel: «Området under `y = e^{−x}` over `[0,∞)` dreies om x-aksen — finn volumet.»
- **Typiske feil:** Feil aksemetode (skiver om y-aksen eller skall om x-aksen); levere areal som volum; ikke tegne området før oppsett; glemme `2πx`-faktoren i skall; enhet ikke omregnet til liter.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 5.5: Drill: integrasjonsteknikk-kjeder

- **id:** `oslomet-mat1000-5-5` · **number:** 5.5 · **estimatedMinutes:** 85 · **prerequisites:** `oslomet-mat1000-5-4`
- **kapitteltype:** drill
- **description:** Alle teknikkene kjedet på eksamensnivå med full føring — 96 %-sjangeren der teknikkvalg og oppsett er hele poenget.
- **Eksamensbelegg:** Sjanger D (96 %), 2–4 deloppgaver per sett, ofte kjedet (substitusjon → delvis; substitusjon → delbrøk). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Teknikkvalg-beslutningstre**: (1) rasjonal? → polynomdivisjon (hvis grad tillater) → delbrøk (arctan-ledd ved irreduserbar faktor); (2) produkt polynom × transcendent? → delvis; (3) sammensatt kjerne? → substitusjon; (4) «ensom» transcendent (`ln`, `arctan`)? → delvis mot 1; (5) absoluttverdi? → del opp; (6) uendelig grense/singularitet? → uegentlig med `lim`. **Gjennomregnet eksamens-integralblokk** (3–4 integraler som kjeder teknikker) med sensor-margnotater om føringskravet (boks, grenser, `u/v′`-valg). 12–15 integraler på eksamensnivå, hver med full føring og markert «Alternativt:»-vei der den finnes.
- **Oppgavesjangre:** D, alle varianter. Mønstereksempel: «Beregn `∫ x³/(x²+1) dx` og `∫₀² |x² − 1| dx` — vis all utregning.»
- **Typiske feil:** Alle fellene fra 5.1–5.4 i kjedet form; hoppe over grensebytte; velge tyngste vei der en enklere finnes; glemme oppdeling ved absoluttverdi.
- **Quiz: 18 · Flashcards: 6**

**Prøve-kvote Del 5:** 4 prøver (spesifisert i §4).

---

### Del 6 — Differensiallikninger *(prioritet: PERFEKT — 100 %, ryggraden)*

#### Kapittel 6.1: Separable differensiallikninger

- **id:** `oslomet-mat1000-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `oslomet-mat1000-5-2`
- **kapitteltype:** teori
- **description:** Full føringsmal for separable likninger — skill variablene, integrer begge sider, løs for y og bestem konstanten fra initialkravet, med konstante løsninger notert.
- **Forkunnskaper (kryssbok):** Kap. 5.2; [Introduksjon til differensiallikninger](/matte/s2-2-1), [Separable differensiallikninger](/matte/s2-2-2).
- **Eksamensbelegg:** Sjanger B (separabel variant) — differensiallikninger 23/23 (100 %), typisk 2–3 delpunkter per sett. Prioritet: **perfekt**.
- **Innholdskontrakt:** Separabel form `y′ = g(x)h(y)`; **føringsmal (aktiv)**: (1) noter konstante løsninger `h(y) = 0` (sjekk mot initialbetingelsen før de forkastes); (2) separér `dy/h(y) = g(x)dx`; (3) integrer begge sider (delbrøk for logistisk); (4) løs for `y` og bestem konstanten fra initialkravet `y(0)`; (5) tolk; **initialverdiproblem (IVP)**; logistisk likning `y′ = ky(M − y)` via delbrøk.
- **Oppgavesjangre:** B. Mønstereksempel: «Løs `y′ = x·e^{−y}`, `y(0) = 0`.» Mønstereksempel: «Løs den logistiske likningen `y′ = y(1 − y)`, `y(0) = 1/2` (delbrøk).»
- **Typiske feil:** Konstante løsninger glemt (deler på `y` uten å sjekke `y ≡ 0`); glemme integrasjonskonstanten eller bestemme den feil; delbrøk-feil i logistisk; ikke tolke svaret i kontekst.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 6.2: Lineære førsteordens differensiallikninger

- **id:** `oslomet-mat1000-6-2` · **number:** 6.2 · **estimatedMinutes:** 50 · **prerequisites:** `oslomet-mat1000-6-1`
- **kapitteltype:** teori
- **description:** Integrerende faktor som standardmetode for y' + f(x)y = g(x) — det andre beinet i den analytiske DE-blokken.
- **Forkunnskaper (kryssbok):** Kap. 6.1; [Lineære differensiallikninger](/matte/s2-2-3).
- **Eksamensbelegg:** Sjanger B (lineær variant) — del av 100 %-blokken. Prioritet: **perfekt**.
- **Innholdskontrakt:** Lineær form `y′ + f(x)y = g(x)`; **integrerende faktor** `μ(x) = e^{∫f dx}`: gang gjennom, kjenn igjen `(μy)′ = μg`, integrer, løs for `y`; bestem konstanten fra initialkravet; når en likning kan angripes både separabelt og lineært (vis begge, marker «Alternativt:»); kobling til modellering (kap. 6.4).
- **Oppgavesjangre:** B. Mønstereksempel: «Løs `y′ + 2y = e^{−x}`, `y(0) = 1`, med integrerende faktor.»
- **Typiske feil:** Feil integrerende faktor (glemme fortegn/koeffisient i `∫f dx`); glemme å gange hele likningen med `μ`; ikke kjenne igjen `(μy)′`; konstant bestemt før `y` er isolert.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 6.3: Andreordens differensiallikninger med konstante koeffisienter

- **id:** `oslomet-mat1000-6-3` · **number:** 6.3 · **estimatedMinutes:** 65 · **prerequisites:** `oslomet-mat1000-6-2`, `oslomet-mat1000-3-2`
- **kapitteltype:** teori
- **description:** Karakteristisk likning med alle tre rot-tilfellene, partikulærløsning ved ubestemte koeffisienter, og de kritiske randtilfellene resonans og dempet svingning.
- **Forkunnskaper (kryssbok):** Kap. 6.2, 3.2 (komplekse røtter); [Lineære differensiallikninger](/matte/s2-2-3).
- **Eksamensbelegg:** Sjanger B (2. orden) — fast innslag i 100 %-blokken. **Alle tre rot-tilfellene** og **resonans** er de hyppigste feilkildene (fasit trekker for feil ansatz). Prioritet: **perfekt**.
- **Innholdskontrakt:** Homogen likning `y″ + py′ + qy = 0`: **karakteristisk likning** `r² + pr + q = 0` → **tre tilfeller** (to reelle røtter `Ae^{r₁x} + Be^{r₂x}` / dobbeltrot `(A + Bx)e^{rx}` / komplekst par `e^{ax}(A cos bx + B sin bx)` = dempet svingning); **partikulærløsning** ved ubestemte koeffisienter for polynom-/eksponential-/sinus-høyresider `r(x)`; **resonanstilfellet**: når høyresiden løser den homogene likningen, gang ansatzen med `x` (eller `x²` ved dobbeltrot); generell løsning `y = y_h + y_p`; bestem konstantene fra `y(0)`, `y′(0)` til slutt. Alle rot-tilfeller står på formelarket — trening i bruk, ikke memorering.
- **Oppgavesjangre:** B. Mønstereksempel: «Løs `y″ − 6y′ + 9y = 0`, og finn deretter den generelle løsningen av `y″ − 6y′ + 9y = 13 cos 2x`.» Mønstereksempel (resonans): «Finn partikulærløsningen av `y″ + 4y = sin 2x`.»
- **Typiske feil:** Glemt resonans-/dobbeltrottilfelle (feil ansatz når høyresiden løser den homogene); feil form ved dobbeltrot (`(A + Bx)e^{rx}`) eller komplekst rotpar; bestemme konstantene før `y_p` er lagt til; regnefeil i de ubestemte koeffisientene.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 6.4: Anvendt differensiallikning-modellering

- **id:** `oslomet-mat1000-6-4` · **number:** 6.4 · **estimatedMinutes:** 60 · **prerequisites:** `oslomet-mat1000-6-2`
- **kapitteltype:** teori
- **description:** Oversett en verbal situasjon til en differensiallikning — utled hvert ledd fra premissene — og enten løs, eller finn likevekt/langtidsverdi ved å sette y' = 0 uten å løse.
- **Forkunnskaper (kryssbok):** Kap. 6.1–6.2; [Logistisk vekst](/matte/r1-5-2).
- **Eksamensbelegg:** Sjanger C — anvendt DE-modellering 13/23, **8/10 i epoke 2 (sterkt stigende)** og retningen faget beveger seg. Studenten skal ofte (i) utlede DE-en fra tekst, (ii) løse, eller (iii) tolke likevekt/langtidsoppførsel uten å løse. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Modelleringsoppskrift (aktiv)**: (1) oversett rate-beskrivelsen til en DE — **utled hvert ledd** (vekst-/tap-/tilførsels-ledd) fra premissene og begrunn; (2) klassifiser (separabel/lineær/2. orden); (3) noter konstante/likevektsløsninger; (4) enten løs med full føring, ELLER (5) finn **likevekt/langtidsverdi** ved å sette `y′ = 0` og resonnere (uten å løse), eller matche løsningskurve mot figur; (6) svar på det anvendte spørsmålet med tolkning og enhet. Kontekstfamilier: **Newtons avkjøling**, **logistisk vekst** (bakterier/smitte), **befolkning med migrasjon**, **tank-/blandingsproblem**, **Torricellis lov**, **RLC-krets**, **dempet harmonisk svingning**.
- **Oppgavesjangre:** C. Mønstereksempel: «Et lands folketall taper 6 % i året, men får 300 000 innvandrere årlig, slik at `F′ = 0.3 − 0.06F` (i millioner). Hva stabiliserer folketallet seg på, og hva blir `F(t)` når `F(0) = 12`?» Mønstereksempel: «Sett opp Newtons avkjølingslov for en kaffekopp og finn temperaturen etter 10 minutter.»
- **Typiske feil:** Sette opp likningen «på magefølelse» uten å forankre hvert ledd i premissene (fasit krever leddvis begrunnelse); regne ut hele løsningen der bare likevekt spørres (tidstap); feil fortegn på tap-/tilførselsledd; svar uten tolkning/enhet; feil startbetingelse.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 6.5: Drill: differensiallikninger fra ende til annen

- **id:** `oslomet-mat1000-6-5` · **number:** 6.5 · **estimatedMinutes:** 85 · **prerequisites:** `oslomet-mat1000-6-4`
- **kapitteltype:** drill
- **description:** Hele DE-repertoaret samlet — gjenkjenn typen, velg riktig oppskrift, løs med full føring, og for modelloppgaver: utled, tolk likevekt og svar på det anvendte spørsmålet.
- **Eksamensbelegg:** Sjanger B + C (100 %) — 2–3 DE-delpunkter per sett, ryggraden i faget. Torricelli-oppgaven kjeder volum-ved-skiver (kap. 5.4) → implisitt derivasjon (kap. 4.2) → separabel likning → tømmetid. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Typegjenkjennings-beslutningstre**: (1) separabel? → skill + integrer; (2) lineær 1. orden? → integrerende faktor; (3) 2. orden konstante koeff.? → karakteristisk likning + partikulær (sjekk resonans); (4) fra tekst? → utled leddvis, klassifiser, løs eller tolk likevekt. **Gjennomregnet Torricelli-kjede** (`V(h)` fra beholderprofil → implisitt derivasjon → separabel → tømmetid) med sensor-margnotater om hvor de billige poengene ligger og hvor modell-begrunnelsen kreves. 12–15 oppgaver på tvers av typer og kontekstfamilier, alle med full føring.
- **Oppgavesjangre:** B + C (kjedet med J og K). Mønstereksempel: «En båts fart avtar proporsjonalt med kvadratet av farten; farten faller fra 25 til 5 km/t på en halvtime. Sett opp og løs likningen, og finn når farten passerer 1 km/t.»
- **Typiske feil:** Feil typegjenkjenning (bruker separabel-oppskrift på en 2. orden-likning); glemt resonans; konstante løsninger glemt; feil modell fra rate-beskrivelsen; svar uten tolkning/enhet; glemme kjeden (bruke `V(h)` fra første ledd).
- **Quiz: 18 · Flashcards: 6**

**Prøve-kvote Del 6:** 4 prøver (spesifisert i §4).

---

### Del 7 — Numeriske metoder og MATLAB/Octave *(prioritet: PERFEKT — epoke 2-signaturen)*

> **Merknad:** Denne delen finnes ikke i UiO-kalkulustradisjonen — den er
> ingeniørmatematikkens signatur og speiler emneplanens krav om implementering av
> numeriske algoritmer. Oppgavene tester **algoritmeforståelse**, ikke maskinsvar.
> MATLAB/Octave-kode skrives i egne ` ```matlab `-kodeblokker; `log` betyr `ln`.

#### Kapittel 7.1: Newtons metode og halveringsmetoden — manuell

- **id:** `oslomet-mat1000-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `oslomet-mat1000-4-1`
- **kapitteltype:** teori
- **description:** De to faste stegene: vis at funksjonen har nøyaktig ett nullpunkt i et intervall (skjæringssetning + monotoni), og utfør oppgitt antall iterasjoner for hånd.
- **Forkunnskaper (kryssbok):** Kap. 4.1; [Newtons metode](/matte/r1-3-5), [Kontinuitet](/matte/r1-3-2).
- **Eksamensbelegg:** Sjanger F — Newton/halvering manuell 9/23, **7/10 i epoke 2 (ny signatur)**. Fast to-stegsstruktur: (i) vis nøyaktig ett nullpunkt, (ii) iterér. Sensor krever eksistens/entydighet-argumentet FØR iterasjonen. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Steg 1 — vis nøyaktig ett nullpunkt i `[a,b]`**: eksistens via **skjæringssetningen** (kontinuitet + fortegnsskifte `f(a)·f(b) < 0`, navngi setningen); entydighet via **monotoni** (`f′` har fast fortegn på hele intervallet); **Steg 2 — iterér**: Newtons formel `xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ)` fra gitt `x₀` (utfør oppgitt antall steg, vis hver iterasjon), eller **halveringsmetoden** (fortegnstest på midtpunkt, halvér intervallet, feil `< (b−a)/2ᴺ` etter `N` steg); geometrisk tolkning (tangentens nullpunkt); når iterasjonen konvergerer og når den kan svikte.
- **Oppgavesjangre:** F. Mønstereksempel: «Vis at `g(x) = ln x − 1/x` har nøyaktig ett nullpunkt i `[1,2]`, og utfør to Newton-iterasjoner fra `x₀ = 1`.» Mønstereksempel: «Bruk halveringsmetoden på `[1,2]` til feilen er mindre enn `0.1`.»
- **Typiske feil:** Hoppe rett til iterasjon uten å vise fortegnsskifte (skjæringssetning) og monotoni; utføre flere iterasjoner enn bedt om (tidsfelle); regnefeil i `f′`; forveksle Newton- og halveringssteget; glemme å navngi skjæringssetningen.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 7.2: Numerisk integrasjon og derivasjon fra tabell eller graf

- **id:** `oslomet-mat1000-7-2` · **number:** 7.2 · **estimatedMinutes:** 55 · **prerequisites:** `oslomet-mat1000-5-1`
- **kapitteltype:** teori
- **description:** Estimér total mengde/strekning med trapesmetoden og endringsrate med differansekvotient fra en måletabell — pluss Riemann-, Simpson- og polynominterpolasjons-varianter.
- **Forkunnskaper (kryssbok):** Kap. 5.1; [Numerisk integrasjon](/matte/r2-3-4), [Bestemt integral som grenseverdi](/matte/r2-2-4).
- **Eksamensbelegg:** Sjanger L — numerisk integrasjon fra tabell 11/23 (48 %), numerisk derivasjon 6/23, **0 før 2013 → årviss i epoke 2**. Tabellen er typisk fart mot tid, effekt mot klokkeslett, strømningshastighet. Polynominterpolasjon 1/23 (sjelden). Prioritet: **perfekt** (tabellmetode) / **kjenne** (interpolasjon).
- **Innholdskontrakt:** **Numerisk integrasjon fra tabell/graf**: **trapesmetoden** `T = h/2·(y₀ + 2y₁ + … + 2y_{n−1} + yₙ)`, **Riemann-/rektangelsum** (venstre/høyre/midtpunkt), **Simpsons metode** (ett dobbeltintervall, vektene `1,4,1`); areal under fartskurve = strekning; sammenlign med eksakt verdi og angi feilen når mulig; **numerisk derivasjon**: midtpunkts-/differansekvotient `f′(x) ≈ (f(x+h) − f(x−h))/(2h)`; **polynominterpolasjon** (finn polynom gjennom gitte punkter — lineært system eller Lagrange, kjenne-nivå). Enhet i konklusjonen.
- **Oppgavesjangre:** L. Mønstereksempel: «Farten er logget hvert 2. sekund (tabell gitt). Estimér tilbakelagt strekning på 10 sekunder med trapesmetoden.» Mønstereksempel: «Estimér `f′(4)` fra tabellen med midtpunktsformelen.»
- **Typiske feil:** Feil vekter i trapes-/Simpson-summen; feil `h` (steglengde); midtpunktsformel med feil `h`; glemme enhet; blande trapes og Simpson; oddetalls delintervaller i Simpson.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 7.3: MATLAB/Octave-skripttolking

- **id:** `oslomet-mat1000-7-3` · **number:** 7.3 · **estimatedMinutes:** 60 · **prerequisites:** `oslomet-mat1000-7-1`, `oslomet-mat1000-7-2`
- **kapitteltype:** teori (egen sjanger — algoritmeforståelse)
- **description:** Gitt et ukommentert MATLAB/Octave-skript: avgjør hva det beregner, hvorfor det konvergerer, og hvor en eventuell feil ligger — uten å produsere et maskinsvar.
- **Forkunnskaper (kryssbok):** Kap. 7.1–7.2 (metodene skriptene implementerer).
- **Eksamensbelegg:** Sjanger E — MATLAB/Octave-skripttolking 12/23, **~8/10 i epoke 2, alltid fra 2013**. Tester algoritmeforståelse: «hva kalles/beregner denne summen?», «hvilket IVP estimeres?», «hvilken likning løses?», «finn feilen», «hvordan gjøre svaret mer nøyaktig?». Prioritet: **perfekt**.
- **Innholdskontrakt:** MATLAB/Octave-syntaks som må leses: `@(x)` anonyme funksjoner, `for`/`while`-løkker, `exp`, `log` (= `ln`), `sqrt`, `abs`, `.*`/`./`/`.^` elementvis, `linspace`, `sum`; **de faste malene** (forfatteren skal implementere hver som ukommentert skript + tolkningskontrakt):

  - **Newtons metode** — `while abs(f(x)) > tol; x = x − f(x)/df(x); end` → «hvilken likning løses?» (svar: `f(x) = 0`);
  - **Eulers metode** — `for k = 1:N; y(k+1) = y(k) + h*F(x(k),y(k)); x(k+1)=x(k)+h; end` → «hvilket IVP estimeres?» (svar: `y′ = F(x,y)`, `y(x₀) = y₀`);
  - **Riemann-/rektangelsum** — `S = 0; for k=1:N; S = S + f(x)*dx; x = x + dx; end` → «hva kalles denne summen, og hva nærmer `S` seg når `N` øker?» (svar: Riemann-sum → det bestemte integralet `∫_a^b f`);
  - **Halveringsmetoden** — `while (b−a)/2 > tol; c=(a+b)/2; if f(a)*f(c)<0; b=c; else; a=c; end; end` → «hva finner skriptet, og hva er feilskranken?» (svar: et nullpunkt; feil `≤ (b−a)/2ᴺ`);
  - **Trapesmetoden** — vektet sum `h/2·(...)` → «hvilket integral estimeres, og hvordan blir svaret mer nøyaktig?» (svar: øk `N` / mindre `h`).

  Varianter: **«finn feilen i skriptet»** (f.eks. `+` der det skulle vært `−` i Newton-oppdateringen, feil løkkegrense, `dx` ikke oppdatert), og **«hvordan gjøre svaret mer nøyaktig»** (mindre toleranse / flere steg / mindre `h`). Studenten skal aldri kjøre koden — bare lese den.
- **Oppgavesjangre:** E. Mønstereksempel: «Skriptet oppdaterer `S = S + f(x)*dx` i en løkke over `[a,b]`. Hva kalles denne summen, og hva nærmer `S` seg når `N` øker?» Mønstereksempel: «Skriptet skal implementere Newtons metode, men konvergerer ikke. Finn feilen.»
- **Typiske feil:** Gjenkjenner ikke at en rektangel-/trapes-løkke *er* en Riemann-sum som konvergerer mot det bestemte integralet; forveksler Newton- og Euler-oppdateringen; overser en fortegns-/indeksfeil i løkka; svarer med et tall i stedet for å identifisere algoritmen.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 7.4: Drill: skripttolking og numerisk metode

- **id:** `oslomet-mat1000-7-4` · **number:** 7.4 · **estimatedMinutes:** 80 · **prerequisites:** `oslomet-mat1000-7-3`
- **kapitteltype:** drill
- **description:** Hele numerikk-repertoaret samlet — manuell Newton/halvering med eksistensargument, tabellmetoder, og skripttolking med feilsøk — på eksamensnivå.
- **Eksamensbelegg:** Sjanger E + F + L (epokens signaturblokk) — minst én skripttolking, én manuell Newton/halvering og én tabellmetode i så godt som hvert epoke 2-sett. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrifter: (1) manuell Newton/halvering: eksistens (skjæringssetning) + entydighet (monotoni) → iterér oppgitt antall; (2) tabellmetode: velg trapes/Simpson/differansekvotient, riktig `h` og vekter, enhet; (3) skripttolking: les linje for linje, identifiser oppdateringssteget, klassifiser algoritmen, svar på det som spørres (hva beregnes / finn feilen / gjør mer nøyaktig). **Gjennomregnet skript-case med sensor-margnotater** (ett Riemann-skript og ett Newton-skript med feil) + én manuell Newton-case. 12–15 oppgaver som veksler mellom manuell metode, tabell og skripttolking.
- **Oppgavesjangre:** E + F + L. Mønstereksempel: «Skriptet under implementerer Eulers metode for et IVP. (a) Hvilket IVP? (b) Kjør to steg for hånd med `h = 0.5`. (c) Hvordan får du et mer nøyaktig estimat?»
- **Typiske feil:** Alle fellene fra 7.1–7.3 i kjedet form; hoppe over eksistens/entydighet før manuell Newton; feil vekter i tabellmetode; svare med tall der algoritmen skal identifiseres; overse indeks-/fortegnsfeil i skript.
- **Quiz: 16 · Flashcards: 6**

**Prøve-kvote Del 7:** 4 prøver (spesifisert i §4).

---

### Del 8 — Utvidelse: egenverdier og diagonalisering *(prioritet: KJENNE — 0 forekomster etter 2012)*

> **Ærlighetsnotat (skal stå i Eksamensvinkel-blokken):** Egenverdier og
> diagonalisering dominerte 2010–2012 (8/8 tidlige sett, brukt til å løse lineære
> ODE-system `y′ = Ay`), men har **0 forekomster fra 2013 og utover** — antatt
> flyttet til Matematikk 2000. Kapitlet dekker stoffet fordi FO010A-epoken og
> bygg-/elektro-parallellene kan møte det, men **det skal IKKE eksamenstrenes mot
> for dagens DAFE1000**. Byggefasen bør sjekke gjeldende emneplan: er egenverdier
> reelt ute, kan kapitlet nedprioriteres ytterligere.

#### Kapittel 8.1: Egenverdier, egenvektorer og diagonalisering

- **id:** `oslomet-mat1000-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `oslomet-mat1000-1-3`
- **kapitteltype:** teori (utvidelse)
- **description:** Egenverdier fra den karakteristiske likningen, egenvektorer, diagonalisering og bruk til matrisepotenser — kjenne-stoff uten arkivbelegg etter 2012.
- **Forkunnskaper (kryssbok):** Kap. 1.2–1.3 (determinant, nullrom); [Determinanter og invers matrise](/matte/bi-okonomi-9-2).
- **Eksamensbelegg:** Egenverdier/diagonalisering 8/23 totalt, **0 etter 2012**. Dekkes som utvidelse/kjenne (se ærlighetsnotatet). Prioritet: **kjenne**.
- **Innholdskontrakt:** **Egenverdier** som røtter i den karakteristiske likningen `det(A − λI) = 0`; **egenvektorer** som nullrommet til `A − λI` (løs `(A − λI)v = 0`); **diagonalisering** `A = PDP⁻¹` (kolonner i `P` = egenvektorer, `D` = diagonal av egenverdier), betingelsen (nok lineært uavhengige egenvektorer); bruk til **matrisepotenser** `Aⁿ = PDⁿP⁻¹`; kort om kobling til lineære ODE-system `y′ = Ay` (E1-bruken). Hold kompakt — dette er kjenne-stoff.
- **Oppgavesjangre:** utvidelse. Mønstereksempel: «Finn egenverdiene og egenvektorene til `A = [[2,1],[1,2]]`, og diagonaliser `A`.» Mønstereksempel: «Bruk diagonalisering til å regne ut `A⁵`.»
- **Typiske feil:** Feil karakteristisk likning (fortegn i `A − λI`); egenvektor ikke normalisert/feil nullrom; feil rekkefølge i `PDP⁻¹`; anta diagonaliserbar uten nok uavhengige egenvektorer.
- **Quiz: 12 · Flashcards: 14**

**Prøve-kvote Del 8:** 4 prøver (spesifisert i §4) — merket som kjenne-nivå uten eksamensvekt (se ærlighetsnotatet).

---

### Del 9 — Eksamenstrening

#### Kapittel 9.1: Føringsstandard og eksamensstrategi

- **id:** `oslomet-mat1000-9-1` · **number:** 9.1 · **estimatedMinutes:** 55 · **prerequisites:** `oslomet-mat1000-0-1`
- **kapitteltype:** teori (metaregel)
- **description:** Sensorreglene operasjonalisert: alle svar grunngis, definert-sjekk premieres, effektiv metode belønnes, standardform på svar, og tidsdisiplin når alle deloppgaver teller likt.
- **Eksamensbelegg:** Metaregel-kapittel bygget på fasitpraksis 2010–2017: (i) «Alle svar skal grunngis; alle deloppgaver teller likt» (stående instruks på hvert sett) — ubegrunnet svar taper poeng; (ii) **definert-sjekk premieres eksplisitt** i matriseregning (forklar hvorfor udefinert); (iii) **effektiv metode honoreres, alternative veier godtas** (`det(A⁻¹) = 1/det(A)`, lineærkombinasjon, symbolsk isolering av `X`); (iv) **numeriske metoder krever forståelse, ikke maskinsvar** (skripttolking, iterasjoner vist, eksistens/entydighet før metode); (v) **modelloppgaver: utled og begrunn hvert ledd**, tolk likevekt uten å løse; (vi) **standardform på svar** (komplekse: kartesisk + polar, riktig kvadrant; uegentlig: eksplisitt `lim`; uendelig mange løsninger: parametrisk vektorform; volum: riktig akse + enhet i liter); (vii) tidsdisiplin (ta de billige standardpoengene før de tunge modelleringsoppgavene). Prioritet: **perfekt** (regelen bærer karakteren).
- **Innholdskontrakt:** «Begrunnelsestrappen» per sjanger A–R (hva som er tilstrekkelig føring for hver — én tabell); **føringsboksene** (dimensjonssjekk, substitusjonsboks med nye grenser, `u/v′`-valg, karakteristisk likning + rot-tilfelle, `lim`-føring i uegentlige integraler, konstante løsninger i separable, parametrisk vektorform, konklusjonssetning med enhet, markert sluttsvar); to kontrastpar «samme matematikk, ulik føring» (én lav-uttellings- og én full-scorings-versjon — ett matrise- og ett modell-DE-eksempel, med margnotater); **tidsbudsjett** (12 likt-vektede oppgaver / 300 min ≈ 25 min/oppgave; billige sjangre først); sjekkliste før innlevering (definert-sjekk ført? grenser byttet? rot-tilfelle riktig? konstante løsninger sjekket? standardform på svar? enhet?).
- **Oppgavesjangre:** Meta. Mønstereksempel: «Besvarelsen under gir riktig tall på matriseoppgaven, men ville tapt poeng. Pek på de to føringsmanglene (manglende definert-begrunnelse, unødvendig invertering) og skriv den om til full pott.»
- **Typiske feil:** Hele feilkatalogens føringsdel (analysen §5): dimensjonssjekk uten begrunnelse, grenser ikke byttet ved substitusjon, resonanstilfelle glemt, «sett inn ∞», modell-DE gjettet uten leddbegrunnelse, komplekst svar i feil kvadrant/uten polarform, uendelig-mange vs. ingen forvekslet, tidsfellen.
- **Quiz: 12 · Flashcards: 30** (sensorregel- og standardform-bank — flashcard-gull)

#### Kapittel 9.2: Øvingseksamen 1: DAFE-fellessett-profil (12 oppgaver, 5 timer)

- **id:** `oslomet-mat1000-9-2` · **number:** 9.2 · **estimatedMinutes:** 300 · **prerequisites:** `oslomet-mat1000-9-1`
- **kapitteltype:** øvingseksamen
- **description:** Komplett 5-timers sett etter 2015–2017-malen: 12 likt-vektede oppgaver med kalkulator og formelark, som speiler den «typiske» eksamenens temafordeling, med full A-besvarelse-fasit.
- **Eksamensbelegg/miks:** Speiler epoke 2-hovedmalen (5 timer, kalkulator + formelark, korte likt-vektede oppgaver, «alle svar grunngis»): **1. matriseregning** (operasjoner + definert-sjekk + determinant/invers + `AX = B`, sjanger A) → **2. lineær kompleks likning** → polarform + `zⁿ`-røtter (sjanger G) → **3. integrasjonsteknikk** (substitusjon → delvis, sjanger D) → **4. delbrøk/uegentlig integral** (sjanger D) → **5. separabel DE med IVP** (sjanger B) → **6. andreordens DE med partikulærløsning** (sjanger B) → **7. anvendt DE-modellering** med likevekt/langtid (sjanger C) → **8. omdreiningsvolum om y-aksen** (sjanger J) → **9. manuell Newton** med «vis ett nullpunkt» (sjanger F) → **10. MATLAB/Octave-skripttolking** (sjanger E) → **11. numerisk integrasjon fra tabell** (trapes, sjanger L) → **12. lineær transformasjon / parametersystem** (sjanger H eller I). Alle oppgaver nyskrevne; løsningsforslag i `collapsible` per oppgave som A-besvarelse etter 9.1-standarden, med `tip`-notat om tidsbudsjett (~25 min/oppgave) og hvor føringspoengene sitter.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 9.3: Øvingseksamen 2: kortere variant (10 oppgaver, 5 timer)

- **id:** `oslomet-mat1000-9-3` · **number:** 9.3 · **estimatedMinutes:** 300 · **prerequisites:** `oslomet-mat1000-9-2`
- **kapitteltype:** øvingseksamen
- **description:** Kortere 5-timers sett med restsjangrene fra øvingseksamen 1, inkludert relaterte rater, optimering, grenser og Taylorpolynom.
- **Eksamensbelegg/miks:** Speiler et mildere epoke 2-sett (5 timer, 10 oppgaver): **1. matriseregning + parametersystem** (sjanger A + I) → **2. komplekse tall: form + andregradslikning** (sjanger G) → **3. grenser/L'Hôpital** (sjanger O) → **4. implisitt derivasjon + tangent** (sjanger M) → **5. relaterte rater** (sjanger K) → **6. optimering / nærmeste punkt** (sjanger N) → **7. lineær 1. ordens DE** (integrerende faktor, sjanger B) → **8. omdreiningsvolum + buelengde** (sjanger J) → **9. Taylorpolynom om `x = a`** (sjanger P) → **10. halveringsmetoden manuelt + tabellderivasjon** (sjanger F + L). Sammen med 9.2 dekkes A–R minst én gang (egenverdier/stykkevis/graf i 9.4). Alle oppgaver nyskrevne; A-besvarelse-fasit i `collapsible` per oppgave med tids-/vektingsnotat.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 9.4: Øvingseksamen 3: numerikk-/MATLAB-tung variant (13 oppgaver, 5 timer)

- **id:** `oslomet-mat1000-9-4` · **number:** 9.4 · **estimatedMinutes:** 300 · **prerequisites:** `oslomet-mat1000-9-3`
- **kapitteltype:** øvingseksamen
- **description:** Et epoke 2-sett som vekter numeriske metoder og MATLAB/Octave tyngst, og fanger de sjangrene 9.2–9.3 ikke traff: skripttolking med feilsøk, Simpson, stykkevis funksjon, grafanalyse og egenverdier som kjenne-innslag.
- **Eksamensbelegg/miks:** Speiler et numerikk-tungt epoke 2-sett (5 timer, 13 oppgaver): **1. matriseregning** (sjanger A) → **2. lineær transformasjon + komposisjon** (sjanger H) → **3. komplekse tall: `zⁿ`-røtter + de Moivre** (sjanger G) → **4. integrasjonsteknikk-kjede** (sjanger D) → **5. absoluttverdi-integral** (sjanger D) → **6. andreordens DE med resonans** (sjanger B) → **7. anvendt DE: Torricelli-kjede** (`V(h)` → separabel → tømmetid, sjanger J + K + C) → **8. manuell Newton med eksistens/entydighet** (sjanger F) → **9. MATLAB-skripttolking: Riemann-sum** (sjanger E) → **10. MATLAB-skripttolking: finn feilen i Newton-skript** (sjanger E) → **11. numerisk integrasjon: Simpson fra tabell** (sjanger L) → **12. deriverbarhet av stykkevis funksjon** (finn `a, b`, sjanger Q) → **13. graf-/retningsfelt-tolking + egenverdier som kjenne-innslag** (sjanger R + utvidelse, med ærlighetsforbeholdet i fasiten). Alle oppgaver nyskrevne; A-besvarelse-fasit i `collapsible` med margnotater om hva som skiller topp- fra midtsjikt.
- **Quiz: 5 · Flashcards: 0**

**Prøve-kvote Del 9:** ingen egne temaprøver — øvingseksamenene (9.2–9.4) er delens prøver.

---

### Summeringskontroll (quiz/flashcards) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 12 | 12 |
| 1 | 1.1–1.4 | 18+20+18+16 = **72** | 18+20+18+6 = **62** |
| 2 | 2.1–2.2 | 14+16 = **30** | 14+16 = **30** |
| 3 | 3.1–3.4 | 20+20+18+16 = **74** | 24+18+16+6 = **64** |
| 4 | 4.1–4.5 | 18+14+14+16+14 = **76** | 18+14+14+16+18 = **80** |
| 5 | 5.1–5.5 | 18+18+16+16+18 = **86** | 18+18+16+16+6 = **74** |
| 6 | 6.1–6.5 | 18+16+20+18+18 = **90** | 18+16+22+18+6 = **80** |
| 7 | 7.1–7.4 | 18+16+18+16 = **68** | 18+16+18+6 = **58** |
| 8 | 8.1 | 12 | 14 |
| 9 | 9.1–9.4 | 12+5+5+5 = **27** | 30+0+0+0 = **30** |
| **Sum** | **35 kap.** | **547 ≥ 500 ✓** | **504 ≥ 500 ✓** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler eksamensvektene: nivå 1-delene (1 matrise, 3 komplekse tall,
5 integrasjon, 6 differensiallikninger, 7 numerikk/MATLAB) bærer flest quiz;
drillkapitlene har lave flashcard-kvoter (få nye definisjoner) men høye
oppgavekvoter; kap. 9.1 (føringsstandard) er flashcard-tungt (sensorregel- og
standardform-bank). Quizzene skrives som metode-/føringssjekk (er operasjonen
definert, hvilken DE-type, hva regner skriptet ut, hvilken begrunnelse mangler)
med distraktorer fra feilkatalogen — ikke ren repetisjon.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–8, 32 totalt)

Alle prøver består av nyskrevne oppgaver i arkivets sjangre, med løsningsforslag
etter føringsstandarden (kap. 9.1) og poengfordeling. Full begrunnelse kreves i
alle. Prøvekapitler legges som `oslomet-mat1000-<del>-prove`, chapterNumber
`<del>.P`.

**Del 1 — Matriseregning og lineære likningssystem**
1. Prøve 1.A (35 min): Matriseoperasjoner med definert-sjekk + transponert (kap. 1.1, sjanger A).
2. Prøve 1.B (40 min): Determinant, invers og matriselikning `AX = B` med snarveiene (kap. 1.2, sjanger A).
3. Prøve 1.C (45 min): Parametersystem — full tilfellesanalyse + parametrisk vektorform + uavhengighet (kap. 1.3, sjanger I).
4. Prøve 1.D (45 min): Full oppgave 1 — sammensatt 1a–1e som kjeder operasjoner, determinant, invers, `AX = B` og parametersystem (hele delen).

**Del 2 — Lineære transformasjoner**
1. Prøve 2.A (30 min): Standardmatrise fra bilder + lineærkombinasjons-snarvei (kap. 2.1, sjanger H).
2. Prøve 2.B (35 min): Geometriske transformasjoner — rotasjon/speiling/projeksjon (kap. 2.2, sjanger H).
3. Prøve 2.C (35 min): Komposisjoner med riktig produktrekkefølge (kap. 2.2, sjanger H).
4. Prøve 2.D (35 min): Blandet — bygg matrise + komponer + finn alle vektorer sendt til gitt vektor (hele delen, sjanger H + I).

**Del 3 — Komplekse tall**
1. Prøve 3.A (35 min): Kartesisk og polar form begge veier + regning (kap. 3.1, sjanger G).
2. Prøve 3.B (40 min): Lineær og andregrads kompleks likning — svar på begge former (kap. 3.2, sjanger G).
3. Prøve 3.C (40 min): `zⁿ`-røtter og de Moivre — alle røtter markert i planet (kap. 3.3, sjanger G).
4. Prøve 3.D (45 min): Full signaturoppgave — lineær likning → polarform → `zⁿ`-røtter kjedet (hele delen).

**Del 4 — Derivasjon, grenser og anvendelser**
1. Prøve 4.A (40 min): Implisitt derivasjon + tangentlinje + logaritmisk derivasjon (kap. 4.1, sjanger M).
2. Prøve 4.B (40 min): Relaterte rater + optimering med fortegns-/enhetstolkning og globalt argument (kap. 4.2–4.3, sjanger K + N).
3. Prøve 4.C (35 min): Grenser og L'Hôpital — alle ubestemte former med formsjekk (kap. 4.4, sjanger O).
4. Prøve 4.D (35 min): Taylorpolynom + stykkevis funksjon + grafanalyse (kap. 4.5, sjanger P + Q + R).

**Del 5 — Integrasjon**
1. Prøve 5.A (45 min): Substitusjon og delvis integrasjon med føringsbokser — inkl. «ensom» transcendent og syklisk tilfelle (kap. 5.1, sjanger D).
2. Prøve 5.B (45 min): Delbrøk, fullføre kvadrat og trig — rasjonale integrander med irreduserbar faktor (kap. 5.2, sjanger D).
3. Prøve 5.C (40 min): Absoluttverdi og uegentlige integraler med eksplisitt lim-føring (kap. 5.3, sjanger D).
4. Prøve 5.D (50 min): Omdreiningsvolum med metodevalg (begge honoreres) + buelengde + teknikk-kjede (kap. 5.4–5.5, sjanger J + D).

**Del 6 — Differensiallikninger**
1. Prøve 6.A (40 min): Separable likninger — full føring inkl. konstante løsninger + logistisk via delbrøk (kap. 6.1, sjanger B).
2. Prøve 6.B (40 min): Lineære 1. orden + andreordens med partikulærløsning (sjekk resonans/dobbeltrot) (kap. 6.2–6.3, sjanger B).
3. Prøve 6.C (50 min): Anvendt modellering — utled fra tekst, løs eller tolk likevekt (kontekstfamiliene) (kap. 6.4, sjanger C).
4. Prøve 6.D (55 min): Torricelli-kjeden — `V(h)` → implisitt derivasjon → separabel → tømmetid, som kjedet eksamensoppgave (kap. 5.4 + 6.5, sjanger J + K + C).

**Del 7 — Numeriske metoder og MATLAB/Octave**
1. Prøve 7.A (40 min): Manuell Newton — «vis ett nullpunkt» (skjæringssetning + monotoni) + iterasjoner (kap. 7.1, sjanger F).
2. Prøve 7.B (40 min): Halveringsmetoden + numerisk integrasjon/derivasjon fra tabell (trapes/Simpson/differansekvotient) (kap. 7.1–7.2, sjanger F + L).
3. Prøve 7.C (45 min): MATLAB/Octave-skripttolking — hva beregnes (Riemann/Euler/Newton) + finn feilen (kap. 7.3, sjanger E).
4. Prøve 7.D (45 min): Blandet numerikk — skripttolking + manuell metode + tabell kjedet (kap. 7.4, sjanger E + F + L).

**Del 8 — Egenverdier og diagonalisering** *(kjenne-nivå; ærlighetsforbeholdet gjentas i hver prøve — ikke eksamensvekt for DAFE1000)*
1. Prøve 8.A (35 min): Egenverdier og egenvektorer fra karakteristisk likning (kap. 8.1).
2. Prøve 8.B (35 min): Diagonalisering `A = PDP⁻¹` og betingelsen (kap. 8.1).
3. Prøve 8.C (35 min): Matrisepotenser `Aⁿ = PDⁿP⁻¹` via diagonalisering (kap. 8.1).
4. Prøve 8.D (35 min): Kobling til lineært ODE-system `y′ = Ay` (E1-bruken, historisk) (kap. 8.1).

### Øvingseksamener (3 komplette sett — se kap. 9.2–9.4)

| Sett | Form den speiler | Miks (oppgaver) |
|---|---|---|
| Øvingseksamen 1 (kap. 9.2) | DAFE-fellessett-hovedmal 2015–2017 | 12 oppg. / 5 t: A(1) + G(1) + D(2) + B(2) + C(1) + J(1) + F(1) + E(1) + L(1) + H/I(1) |
| Øvingseksamen 2 (kap. 9.3) | Mildere epoke 2-sett | 10 oppg. / 5 t: A+I(1) + G(1) + O(1) + M(1) + K(1) + N(1) + B(1) + J(1) + P(1) + F+L(1) |
| Øvingseksamen 3 (kap. 9.4) | Numerikk-/MATLAB-tung variant | 13 oppg. / 5 t: A(1) + H(1) + G(1) + D(2) + B(1) + J+K+C(1) + F(1) + E(2) + L(1) + Q(1) + R+utvidelse(1) |

Til sammen dekker de tre settene samtlige sjangre A–R minst én gang (egenverdier,
stykkevis og graf i 9.4; relaterte rater, optimering, grenser og Taylor i 9.3;
matrise, komplekse tall, integrasjon, DE og numerikk i alle).

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Én 5-timers ingeniørmatte-eksamen** — vurderingsformen (5 timer, 100 %, tre
   sesjonger i året, ingen deleksamen), format-epokene (2010–2014 uten
   hjelpemidler vs. 2015–2017 med kalkulator + formelark og MATLAB/numerikk inn),
   prognosen (fra kap. 0.1), med tidsdisiplin-regelen (billige standardpoeng
   først).
2. **Prioriteringskartet** — frekvens-tabellen omgjort til tre lesenivåer:
   **perfekt** (Del 1 matrise, Del 3 komplekse tall, Del 5 integrasjon, Del 6
   differensiallikninger, Del 7 numerikk/MATLAB), **kunne** (Del 2 lineær
   transformasjon, Del 4 derivasjon/grenser/anvendelser), **kjenne** (Del 8
   egenverdier, samt de lavfrekvente E2-sjangrene i kap. 4.5) — med
   ærlighetsnotatet om egenverdienes 0-frekvens etter 2012 og ~9-års arkivgapet.
3. **Sjangerguiden** — A–R med løsningsoppskriftene fra drillkapitlene
   (1.4, 3.4, 5.5, 6.5, 7.4) i kortform.
4. **Sensorreglene** — «alle svar grunngis, alle deloppgaver teller likt»,
   definert-sjekk premieres, effektiv metode belønnes (men alternative veier
   godtas), numeriske metoder krever forståelse ikke maskinsvar, modell-DE utledes
   leddvis, standardform på svar (fra kap. 9.1) + karakterskille-listen (utlede
   modell-DE og tolke likevekt uten å løse, presis eksistens/entydighet før
   numerisk metode, effektiv metode og koblinger mellom deloppgaver, randtilfeller:
   resonans/dobbeltrot/uegentlige grenser/riktig kvadrant).
5. **Feilkatalogen** — de 12 typiske feilene fra analysen §5 samlet, hver med
   henvisning til kapitlet som forebygger den.
6. **Formel- og symbolliste i kursets notasjon** — teorem- og formelapparatet fra
   innholdskontraktene, med markering av hva som står på det utdelte formelarket:
   matriseoperasjoner + determinant/invers (2×2-formel), komplekse tall
   `a + bi = reⁱᶠ` + de Moivre, derivasjonsregler + standardderiverte,
   L'Hôpital, integrasjonsteknikkene + antideriverte-tabell, rotasjonsvolum om
   begge akser + buelengde, Newtons/Eulers/trapes-formlene, Taylorpolynom + restledd,
   separabel + integrerende faktor `μ = e^{∫f dx}`, 2. ordens DE med alle tre
   rot-tilfellene — med skille mellom *utlede/utføre aktivt* (matrise, DE,
   integrasjon, kompleks likning, manuell Newton) og *kun bruke/tolke* (skript,
   likevekt uten å løse; jf. analysen §6).
7. **Studieløp** — semesterplan: Del 0 → Del 1–2 (lineær algebra) → Del 3
   (komplekse tall) → Del 4 → Del 5 (integrasjon) → Del 6 (differensiallikninger)
   → Del 7 (numerikk/MATLAB) → prøver → øvingseksamenene de to siste ukene under
   tidspress (300 min, ~25 min/oppgave). Intensivvariant (2–3 uker): Del 1 + Del 3
   + Del 5 + Del 6 + Del 7 + kap. 9.1 + øvingseksamenene (de fem nivå 1-delene som
   bærer eksamen). Del 8 (egenverdier) hoppes over i intensivløpet for DAFE1000.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `oslomet-mat1000` med alle 35
   kapitler (id/number/title/description/estimatedMinutes/topics/prerequisites)
   etter mønster `COURSE_BI_OKONOMI` i `textbook-courses-matte.ts`, wiret i
   `textbook-courses-hoyskole.ts`; `sectionNames` fra §2-tabellen; institusjon =
   **OsloMet** i `institusjoner.ts`, visningsnavn «DAFE1000 Matematikk 1000».
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–R, epoke-skillet og
   frekvenstallene resten refererer til.
3. **Temadeler i avhengighetsrekkefølge**: Del 1 → Del 2 → Del 3 → Del 4 → Del 5
   → Del 6 → Del 7 → Del 8. Én Opus-agent per hel del (jf. PRODUKSJONSLOYPE fase
   4); ingen del er > 5 kapitler, så ingen deling er nødvendig. Drillkapitlene
   bygges av samme agent som delen sin. **Del 6 bygges etter Del 3** (2. ordens DE
   trenger komplekse røtter) og **etter Del 5** (integrasjon); **Del 7 bygges etter
   Del 4–6** (metodene bygger på derivasjon, integrasjon og DE).
4. **Del 9** (føringsstandard + 3 øvingseksamener) til slutt av én agent som leser
   HELE skjelettet — settene gjenbruker alle sjangre A–R.
5. **Prøvekapitler** (§4, 32 stk) legges som `oslomet-mat1000-<del>-prove`,
   chapterNumber `<del>.P`, bygget av delens agent.
6. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser (`json.load`); generer JSON via
      `json.dump` (LaTeX krever `\\` i JSON-strenger); `npm run build` grønn.
- [ ] **LaTeX + kode**: all matematikk i `$...$`/`$$...$$`; ingen unicode-brøker;
      MATLAB/Octave-kode i ` ```matlab `-kodeblokker (ikke `$...$`); konsistent
      notasjon: `det(A)`, `A⁻¹`, `Aᵀ`, `I`; `a + bi`/`reⁱᶿ`; `y′`, `y″`, `y(0)`;
      `μ(x) = e^{∫f dx}`; `[0/0]`-markering før L'Hôpital; `Pₙ` + `Rₙ`.
- [ ] **Notasjonskonsistens (grep over alle oslomet-mat1000-filer)**: polarform
      `reⁱᶿ` (ikke `r cis θ`); integrerende faktor `μ`; 2. ordens rot-tilfeller
      stavet likt (to reelle / dobbeltrot / komplekst par); MATLAB `log` = `ln`
      forklart der det først brukes; skjæringssetningen navngitt i Newton-kapitlene.
- [ ] **Føringsstandard i ALLE løsningsforslag**: dimensjonssjekk med begrunnelse
      i matriseoppgaver; substitusjonsboks med nye grenser; dokumentert `u/v′`-valg;
      eksplisitt `lim` i uegentlige integraler; karakteristisk likning + riktig
      rot-tilfelle i 2. ordens DE; konstante løsninger sjekket i separable;
      komplekse svar på både kartesisk og polar form med riktig kvadrant;
      parametrisk vektorform ved uendelig mange løsninger; konklusjonssetning med
      enhet; markert sluttsvar. Effektiv metode vist først, «Alternativt:» der den
      finnes. Ubegrunnede fasitsvar er byggefeil.
- [ ] **MATLAB/Octave-skript (kap. 7.3, 7.4, øvingseksamener)**: hvert skript er
      SYNTAKTISK gyldig Octave/MATLAB, ukommentert (tolkningen er oppgaven), og
      tolkningskontrakten (hva beregnes / finn feilen / gjør mer nøyaktig) er
      besvart i fasiten. INGEN «maskinsvar»-løsning — algoritmen skal identifiseres.
- [ ] **Manuell Newton/halvering**: alle løsninger fører eksistens
      (skjæringssetning + fortegnsskifte) OG entydighet (monotoni) FØR iterasjonen,
      og viser hver iterasjon; aldri flere iterasjoner enn oppgaven ber om.
- [ ] **Modell-DE**: hver sjanger C-løsning utleder likningen leddvis fra
      premissene; likevekts-/langtidsspørsmål besvares ved `y′ = 0` uten å løse
      der det er poenget.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene
      fra dette skjelettet — inkl. ærlighetsnotatene i Del 0, 7 og 8),
      Forkunnskaper-blokk med kryssbok-lenker (kun til kapitler som finnes — id-ene
      i §3 er verifisert mot `textbook-courses-matte.ts`; komplekse tall lenkes
      IKKE til noen R1/R2-bok, siden det ikke finnes), `collapsible` Symbol- og
      formelliste per delkapittel, Typiske feil-`warning`, 2–4 eksempler (siste på
      eksamensnivå), 6–12 øvinger med `solution` + `hints`, repetisjons-`collapsible`;
      drillkapitler har løsningsoppskrift + sensor-kommentert case + 12–15 oppgaver.
- [ ] **Quiz-sum ≥ 547 og flashcard-sum ≥ 504** per kvotetabellen i §3
      (kontrollsummér); quizzene som metode-/føringssjekk med distraktorer fra
      feilkatalogen.
- [ ] **Prøver**: 4 per temadel 1–8 (32 stk) + 3 øvingseksamener som sammen dekker
      A–R.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, matriser, funksjoner og
      kontekster; ingen formuleringer fra reelle sett/fasiter (skjelettets
      mønstereksempler er selv omskrivninger og skal varieres videre, ikke kopieres
      ordrett).
- [ ] **Ikke-pensum utelatt**: **uendelige rekker** (Taylor-/potensrekker med
      konvergenstester), **flervariabel kalkulus** (partiellderivert, gradient,
      tangentplan) og **bevis** (ε-δ, MVT-konstruksjon) skal IKKE inn — de hører
      til Matematikk 2000 og har 0 arkivforekomster. Taylor i kap. 4.5 er kun
      *polynom* om `x = a`, aldri rekke.
- [ ] **Ærlighetsforbehold synlig**: Del 0, kap. 7 og kap. 8 sier eksplisitt at
      kalibreringen bygger på 2010–2017 (~9-års gap), at 2015–2017-formen vektes,
      og at byggefasen bør skaffe ferske sett + sjekke gjeldende DAFE1000-emneplan.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
      (200 + innholdssjekk), jf. `getChapterMeta`-lærdommen.

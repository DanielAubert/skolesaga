# Bokskjelett: MAT1100 Kalkulus — eksamensrettet lærebok

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
> `EKSAMENSANALYSE.md` (21 slutteksamener H2003–H2023, 18 fasiter,
> 16 midtveiseksamener H2003–H2018). Arketype: **DNA-regnefag**
> (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori/drill/øvingseksamen) er
> obligatoriske og gjentas ikke her.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `mat1100` |
| Tittel | **Kalkulus — eksamensrettet (MAT1100, UiO)** |
| Level | `'Høyskole'` |
| Arketype | Regnefag (matematikk med to komplementære eksamensformer) |
| Antall kapitler | **36** (1 eksamenskart + 31 tema + 4 eksamenstrening) |
| Estimert totaltid | **2 455 min ≈ 41 timer** |
| Quiz totalt | **570** (krav ≥500) |
| Flashcards totalt | **510** (krav ≥500) |

**Pitch (ett avsnitt):** MAT1100 vurderes med to prøver som nesten ikke deler
temaer: en midtveiseksamen i oktober (1/3 av karakteren, **100 % flervalg**,
~6 min per spørsmål — komplekse tall alene er 30 % av spørsmålene, resten er
grenser, derivasjon, drøfting og følger) og en slutteksamen i desember (2/3,
**100 % begrunnet langsvar** siden 2017, 12–13 kjedede delpunkter à ~18–20 min
— gradient/retningsderivert i 21 av 21 sett, integrasjonsteknikk i 20/21,
uegentlige integraler og lineær algebra i 17/21, omdreiningsvolum i 15/21).
Denne boka trener begge formene målrettet: quizbanken er skrevet som
midtveisflervalg med realistiske distraktorer, teorikapitlenes oppgaver og
prøver trener langsvar med full føringsstandard, og signaturoppgaven om
kontinuitet/deriverbarhet i ett punkt (x^k·sin/cos(1/x^m)-familien, 5 av 6
siste år) får eget drillkapittel. Sensorregelen som preger alt: **«Svar som
ikke er begrunnet, får 0 poeng selv om de er riktige.»**

**Kritiske stil- og notasjonsregler (gjelder HELE boka):**

1. **Begrunn alt.** Hvert løsningsforslag skrives som A-besvarelse: mellomregning
   ledd for ledd, verbal konklusjonssetning til slutt, sluttsvar markert.
2. **Teoremer navngis** når de bærer argumentet: skjæringssetningen, Rolle,
   middelverdisetningen, skviseteoremet (begrensetheten $|\sin| \le 1$ /
   $|\cos| \le 1$ skal uttales), analysens fundamentalteorem + kjerneregelen,
   sammenligningstesten og grensesammenligningstesten («GS-testen»),
   «inverterbar $\Leftrightarrow \det \ne 0$», L'Hôpital — og ubestemt form
   markeres eksplisitt ($[0/0]$, $[\infty/\infty]$) FØR hver L'Hôpital-bruk.
3. **Føringsstandard**: substitusjoner bokføres i egen boks ($u$, $du/dx$, $dx$,
   nye grenser); delvis integrasjon dokumenterer valget av $u$/$v'$;
   fortegnsskjema tegnes (beskrives) for monotoni/konveksitet; uegentlige
   integraler føres med eksplisitt $\lim$-notasjon — aldri «sett inn $\infty$»;
   sammenligningsintegral navngis som konvergent/divergent $p$-integral.
4. **Kursets notasjon**: retningsderivert $f'(\mathbf{a}; \mathbf{r}) =
   \nabla f(\mathbf{a}) \cdot \mathbf{r}$ (gjelder ubetinget, også for
   unormalisert $\mathbf{r}$ — normaliser kun når oppgaven ber om enhetsvektor);
   $\nabla f$ for gradient; $M^k$ for matrisepotens; overgangsmodeller på formen
   $\mathbf{x}_{n+1} = M\mathbf{x}_n$ (rader = mottaker); polarform $re^{i\theta}$.
5. **Deriverbarhet i et punkt vises med grensedefinisjonen**
   $f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}$ — å derivere uttrykket og ta
   grensen er IKKE gyldig bevis (men grense-av-derivert-setningen er et lovlig
   verktøy når forutsetningene er etablert; boka lærer begge og når hver gjelder).
6. **Ærlighet om arkivet**: rekker og differensialligninger har 0 forekomster i
   21 slutteksamener og 16 midtveiseksamener; Taylor kun én gang som teorioppgave
   (2017). De dekkes fordi gjeldende emnebeskrivelse krever dem, men
   Eksamensvinkel-blokkene deres skal si dette rett ut og anbefale prioritering
   deretter (arkivet stopper i 2023 — nyere sett kan ha endret bildet).

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen); frekvensen styrer *omfanget*.
Seksjonstitler (blir `sectionNames` i metadata):

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskartet | 1 | Prioriteringsverktøyet; kjerne i studieguiden. |
| 1 | Komplekse tall | 4 | **30 % av alle midtveisspørsmål** (åpner alltid settet) + 10/21 slutteksamener — pensumets mest testede enkelttema → nivå 1 «perfekt» → 3 teorikapitler + drillkapittel i midtveistempo. |
| 2 | Grenser, følger og kontinuitet | 5 | Grenser/L'Hôpital 16 % av midtveis, følger 9 %, ε-δ/definisjonsteori 7 %; skjæringssetningen del av teoribevis-repertoaret (~13/21 slutt) → 4 teorikapitler + grensetempo-drill. |
| 3 | Derivasjon | 6 | Derivasjonsteknikk 14 % av midtveis, drøfting 12 %; signaturoppgaven kontinuitet/deriverbarhet i punkt **5/6 siste slutteksamener** (nivå 1) → eget drillkapittel; MVT/Rolle-bevis 3/6 siste år (stigende). |
| 4 | Integrasjon | 7 | Slutteksamenens ryggrad: integrasjonsteknikk **20/21**, uegentlige integraler **17/21**, omdreiningsvolum **15/21**, FTC 11/21 → nivå 1 → 6 teorikapitler + kjede-drill. |
| 5 | Lineær algebra og flervariabel | 6 | Gradient/retningsderivert **21/21 = 100 %** (alltid tidlig, billige poeng), lineær algebra 17/21, overgangsmatriser 12/21 (9 av 12 siste år), Jacobi 4/21 → nivå 1 → teori + gradient-drill. |
| 6 | Taylor, rekker og differensialligninger | 3 | Pensumkrav med tynt/null arkivbelegg (Taylor 1/21, rekker 0/21, difflign. 0/21) → nivå 3 «kjenne» → 3 kompakte kapitler med ærlig eksamensvinkel. |
| 7 | Eksamenstrening | 4 | Føringsstandard-kapittel (sensorregelen «ubegrunnet = 0») + 1 midtveissimulering (flervalg) + 2 slutteksamen-simuleringer (langsvar). |

**Avvik fra DNA-malen (dokumentert):**

1. **Drillkapitlene ligger i temadelene sine** (1.4, 2.5, 3.3, 4.5, 5.5) i
   stedet for i siste del: sjangrene er 95–100 %-gjengangere som må drilles rett
   etter teorien. Del 7 beholder føringsstandarden og simuleringene.
2. **36 kapitler — ett over DNA-taket på 35**: to komplementære eksamensformer
   krever to komplette treningsløp (flervalgstempo OG begrunnet langsvar); å
   kutte ville rammet enten midtveis- eller slutteksamensforberedelsen.
3. **Kapittel 7.1 (føringsstandard) finnes ikke i DNA-malen**: begrunnet i at
   «ubegrunnet svar = 0» er emnets viktigste enkeltregel og går på tvers av alle
   sjangre — den fortjener samlet, eksplisitt trening.
4. **Del 6 er frekvensstyringens unntak**: 0-frekvenstemaer dekkes fordi
   gjeldende emnebeskrivelse krever dem — men kompakt, sist blant temadelene, og
   med eksamensvinkler som ærlig sier «ikke arkivbelagt».
5. **Quizbanken er direkte midtveistrening**: quizspørsmålene skrives i
   midtveisformat (flervalg med distraktorer bygget på de dokumenterte fellene —
   byttet kvantorrekkefølge, feil kvadrant, glemt kjerneregel-faktor osv.),
   ikke som ren repetisjon. Dette er et tillegg til DNA-en, ikke et avvik.

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–N) refererer til
oppgavetype-katalogen i analysen §3, gjengitt i bokas Del 0: **A** gradient/
retningsderivert, **B** overgangs-/populasjonsmatriser, **C** determinant/volum/
matriseregning, **D** omdreiningsvolum/buelengde, **E** integrasjonsteknikk-
kjeder, **F** uegentlige integraler, **G** komplekse tall, **H** kontinuitet/
deriverbarhet i ett punkt (signaturoppgaven), **I** eksistens- og teoribevis,
**J** fundamentalteoremet + kjerneregel, **K** funksjonsdrøfting, **L** induksjon
(matrisepotens), **M** relaterte rater/optimering, **N** Jacobimatrise. I tillegg
**MV** = midtveisrepertoaret (flervalg, 6 min/oppgave).
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

---

### Del 0 — Eksamenskartet

#### Kapittel 0.1: Eksamenskartet: to eksamener, to treningsformer

- **id:** `mat1100-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Slik testes MAT1100: midtveis (flervalg) mot slutteksamen (begrunnet langsvar), temafrekvensene og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet. Skal gjengi: (i) vurderingsformen: midtveis i oktober (1/3, 2 timer, 18–20 flervalg à 5 alternativer, ingen gjettestraff, ingen hjelpemidler utover formelsamling) + slutteksamen i desember (2/3, 4 timer, 12–13 kjedede delpunkter som teller likt, kalkulator + formelark, «ubegrunnet svar = 0»); (ii) at de to prøvene **nesten ikke deler temaer**: komplekse tall, grenser, følger og drøfting «brukes opp» på midtveis; slutteksamen henter tyngden fra integrasjon, lineær algebra og flervariabel + signaturoppgaven; (iii) temafrekvens-tabellen for slutteksamen (gradient/retningsderivert 21/21, integrasjonsteknikk 20/21, uegentlige integraler 17/21, lineær algebra 17/21, omdreiningsvolum 15/21, overgangsmatriser 12/21 — 9 av 12 siste år, FTC 11/21, komplekse tall 10/21, kontinuitet/deriverbarhet i punkt 10/21 — 5/6 siste år, drøfting 9/21, teoribevis 9/21, L'Hôpital 6/21, relaterte rater 6/21, MVT/Rolle 4/21 — 3/6 siste år stigende, induksjon 3/21, Taylor 1/21, **rekker 0/21, differensialligninger 0/21**); (iv) midtveisfordelingen (komplekse tall 30 %, grenser 16 %, derivasjon 14 %, drøfting 12 %, følger 9 %, ε-δ 7 %, inverse 4 %, MVT-teori 3 %, øvrig 4 %) med fast dramaturgi (åpner med komplekse tall, slutter med teori + tekstoppgave med figur); (v) delpunkt-kjedingen på slutteksamen (fasit gjenbruker eksplisitt tidligere delsvar; instruksen tillater å bruke resultater fra ubesvarte punkter); (vi) tidsbudsjettene: ~6 min per flervalg, ~18–20 min per delpunkt; (vii) karakterskillene (bestått ≈ mekaniske delpunkter: gradient, matriseoppsett, standard integrasjon, volumformel; midtsjikt ≈ + navngitte konvergensargumenter, teknikk-kjeding, kontinuitetsdelen av signaturoppgaven; toppsjikt ≈ definisjonsbruk + oscillasjonsfellen, fullførte bevis med forutsetningssjekk, delpunkt-koblinger, randtilfeller, verifiserte eksempler i åpne oppgaver).
- **Innholdskontrakt:** Sjangerkatalogen A–N + MV presenteres som studentens sjekkliste med frekvens per sjanger; prognosen for neste slutteksamen (12–13 delpunkter: åpning med gradient; overgangsmatrise-case med $M^k$ + inverterbarhet; 2–3 integrasjonsteknikk-delpunkter; ett uegentlig integral med sammenligning; ett omdreiningsvolum — mest sannsynlig skall om $y$-aksen; signaturoppgaven fra oscillasjonsfamilien; + ett innslag fra {komplekse tall, FTC, Rolle-bevis, drøfting}) og for midtveis (18–20 flervalg med komplekse tall som tyngste blokk). Ærlighetsforbeholdet: arkivet stopper i 2023 — hvis rekker/Taylor/difflign. er kommet inn i nyere sett, må prioriteringen justeres. Leseplan: Del 1 og 3 (+ Del 2) bærer midtveis; Del 4 og 5 bærer slutteksamen; Del 6 er «kjenne»-stoff.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «midtveis har 20 spørsmål på 120 min — sett opp tidsbudsjett og avgjør hvilke oppgavetyper du hopper over først» og «slutteksamen del (c) bruker faktoriseringen fra (a) — hva gjør du hvis du ikke klarte (a)?».
- **Typiske feil:** Metafeilene: lese lineært i pensumrekkefølge uten frekvensprioritering; trene bare langsvar (midtveis er 1/3 av karakteren og krever tempo); bruke lang tid på 2-poengsoppgaver på midtveis.
- **Quiz: 10 · Flashcards: 10** (frekvenser, formregler, tidsbudsjett)

**Prøve-kvote Del 0:** ingen (metakapittel).

---

### Del 1 — Komplekse tall *(prioritet: PERFEKT)*

#### Kapittel 1.1: Komplekse tall: regning, polarform og geometri

- **id:** `mat1100-1-1` · **number:** 1.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Kartesisk og polar form begge veier med kvadrantdisiplin — ferdigheten som åpner hvert eneste midtveissett.
- **Forkunnskaper (kryssbok):** [ABC-formelen](/bok/1t/1t-2-3) og [Fullstendig kvadrat](/bok/1t/1t-2-4) (andregradslikninger), [Enhetssirkelen og trigonometriske definisjoner](/bok/r2/r2-4-2) og [Radianer og vinkelmål](/bok/r2/r2-4-1) (vinkler/eksakte verdier).
- **Eksamensbelegg:** Komplekse tall = 30 % av alle midtveisspørsmål (138 talt opp H2012–H2018); polarform begge veier åpner alltid settet (2 spm). På slutteksamen del av sjanger G (10/21). Prioritet: **perfekt**.
- **Innholdskontrakt:** $\mathbb{C}$ med $i^2 = -1$; realdel/imaginærdel; addisjon/multiplikasjon/divisjon (multipliser med konjugert); konjugat $\bar{z}$ og regnereglene; modulus $|z| = \sqrt{a^2+b^2}$; polarform $z = re^{i\theta} = r(\cos\theta + i\sin\theta)$ **begge veier** med kvadrantbevissthet (tegn punktet i planet før argumentet fastsettes — fasitpraksis); argumentkonvensjoner og reduksjon mod $2\pi$; Eulers formel (bruk); geometriske mengder i planet: $|z - a| = r$ (sirkel), $|z - a| < r$ (åpen skive), $|z-a| = |z-b|$ (midtnormal), halvplan via Re/Im-betingelser, annulus. Alt til aktiv bruk i tempo — dette er ren regneferdighet.
- **Oppgavesjangre:** G + MV. Mønstereksempel (midtveisformat): «Skriv $z = -2 + 2i$ på polarform.» (Riktig: $2\sqrt{2}\,e^{3\pi i/4}$; distraktorene har feil kvadrant, $r$ uten rot eller negativ modulus.) Mønstereksempel (mengde): «Skisser mengden av $z$ med $1 < |z - i| \le 2$ og beskriv den med ord.»
- **Typiske feil:** Argument i feil kvadrant (arctan brukt blindt); negativ modulus godtatt; vinkel ikke redusert mod $2\pi$; blande $|z|^2$ og $z^2$; dividere uten å konjugere.
- **Quiz: 25 · Flashcards: 25**

#### Kapittel 1.2: de Moivre: potenser og n-te røtter

- **id:** `mat1100-1-2` · **number:** 1.2 · **estimatedMinutes:** 45 · **prerequisites:** `mat1100-1-1`
- **kapitteltype:** teori
- **description:** Høye potenser og n-te røtter via polarform — de årvisse midtveisspørsmålene nummer to og tre.
- **Forkunnskaper (kryssbok):** Kap. 1.1; [Trigonometriske formler](/bok/r2/r2-4-6) (eksakte verdier for standardvinkler).
- **Eksamensbelegg:** de Moivre-potens (typen $z^{38}$ med vinkelreduksjon) og n-te røtter er faste midtveisgjengangere (del av 30 %-blokken); på slutteksamen inngår de i sjanger G. Argument-doblingsvarianten («kvadratroten har argument $\pi/3$ ⇒ $z$ har argument $2\pi/3$») forekom som egen oppgave. Prioritet: **perfekt**.
- **Innholdskontrakt:** de Moivre: $(re^{i\theta})^n = r^n e^{in\theta}$ — oppskrift for høye potenser: polarform først, multipliser vinkelen, **reduser mod $2\pi$**, tilbake til kartesisk hvis spurt. n-te røtter: $z^n = w$ har nøyaktig $n$ løsninger $|z| = |w|^{1/n}$, $\arg z = (\arg w + 2k\pi)/n$, $k = 0, \dots, n-1$ — jevnt fordelt på en sirkel (skal kunne tegnes/beskrives); enhetsrøtter som spesialtilfelle. Baklengsvarianten: gitt modulus/argument til en rot, finn $z$ (argumentet multipliseres med rotindeksen). Alt aktiv bruk.
- **Oppgavesjangre:** G + MV. Mønstereksempel: «Regn ut $(1 - i)^{14}$ og skriv svaret på formen $a + ib$.» Mønstereksempel (røtter): «Finn alle tredjerøttene til $-8i$ og marker dem i det komplekse planet.»
- **Typiske feil:** Glemme $2k\pi$-leddet (finner bare én rot); glemme å redusere vinkelen ved høye potenser; ta $n$-te rot av modulus feil; dele argumentet uten å legge til $2k\pi$ først.
- **Quiz: 20 · Flashcards: 25**

#### Kapittel 1.3: Komplekse likninger og polynomfaktorisering

- **id:** `mat1100-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `mat1100-1-2`
- **kapitteltype:** teori
- **description:** abc-formel med negativ diskriminant, konjugatrotsetningen og veien fra kjent rot til full reell og kompleks faktorisering — slutteksamens G-sjanger.
- **Forkunnskaper (kryssbok):** Kap. 1.1–1.2; [Polynomer og polynomdivisjon](/bok/r1/r1-1-1) (divisjonsalgoritmen brukes direkte).
- **Eksamensbelegg:** Sjanger G på slutteksamen (10/21): typisk «vis at $z_0$ er rot, finn begge faktoriseringene»; på midtveis: kompleks likning (også med komplekse koeffisienter) og «rekonstruer reelt polynom fra oppgitte røtter» er gjengangere. Prioritet: **perfekt**.
- **Innholdskontrakt:** abc-formelen med negativ diskriminant → røtter på både $a + ib$- og polarform; abc med **komplekse koeffisienter** (kvadratrot av komplekst tall via polarform); **konjugatrotsetningen**: for polynomer med reelle koeffisienter er $\bar{z_0}$ rot når $z_0$ er det (med bevisidé) — konjugatpar multipliseres til reell kvadratisk faktor $(z - z_0)(z - \bar{z_0}) = z^2 - 2\,\mathrm{Re}(z_0)z + |z_0|^2$; polynomdivisjon for restfaktoren; algebraens fundamentalteorem (kun bruk: gradtall = antall røtter med multiplisitet); **både kompleks og reell faktorisering skrives ut** (fasitkrav); rekonstruksjon av polynom med laveste grad fra oppgitte røtter (husk konjugatene).
- **Oppgavesjangre:** G + MV. Mønstereksempel: «Vis at $2 - i$ er rot i $p(z) = z^3 - 3z^2 + z + 5$, og finn både den komplekse og den reelle faktoriseringen av $p$.» Mønstereksempel (MV): «Et reelt polynom av lavest mulig grad har røttene $1$ og $1 + 2i$. Hva er polynomet?»
- **Typiske feil:** Glemme den konjugerte roten ved rekonstruksjon; oppgi bare den ene faktoriseringen når begge kreves; regnefeil i polynomdivisjonen (verifiser med innsetting); bruke konjugatrotsetningen på polynom med komplekse koeffisienter (gjelder ikke).
- **Quiz: 25 · Flashcards: 20**

#### Kapittel 1.4: Drill: komplekse tall i midtveistempo

- **id:** `mat1100-1-4` · **number:** 1.4 · **estimatedMinutes:** 90 · **prerequisites:** `mat1100-1-3`
- **kapitteltype:** drill
- **description:** Hele komplekstall-repertoaret som flervalg på klokka — 30 % av midtveis skal sitte på under 6 minutter per oppgave.
- **Eksamensbelegg:** Dekker hele 30 %-blokken på midtveis: polarform begge veier (åpner settet), de Moivre-potens, n-te røtter, kompleks likning, polynomrekonstruksjon, geometrisk mengde, teoriutsagn om konjugat/modulus. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrifter i tempoformat: (1) polarform: tegn punktet → kvadrant → $r$ → $\theta$; (2) potens: polar → multipliser vinkel → reduser → kartesisk; (3) røtter: $2k\pi$-lista; (4) likning: abc eller polarform etter form; (5) rekonstruksjon: konjugatpar → reelle faktorer → multipliser ut; (6) mengde: oversett $|z - a|$ til avstand. Gjennomregnet «midtveisblokk» (7 flervalgsspørsmål) med sensor-margnotater om distraktorfellene. 12–15 drilloppgaver i flervalgsformat (5 alternativer, distraktorer bygget på feilene under) + 3–4 langsvarvarianter for slutteksamensformen (full føring).
- **Oppgavesjangre:** G + MV, alle varianter. Mønstereksempel: «Hvilket av følgende tall er en fjerderot av $-16$?» (distraktorer: riktig modulus/feil vinkel, feil modulus/riktig vinkel, konjugatfellen, reell rot).
- **Typiske feil:** Tidsfellen (lange utregninger der polarform gir svaret på tre linjer); alle kvadrant- og $2k\pi$-fellene fra 1.1–1.3 i flervalgsforkledning.
- **Quiz: 20 · Flashcards: 5**

**Prøve-kvote Del 1:** 4 prøver (spesifisert i §4).

---

### Del 2 — Grenser, følger og kontinuitet

#### Kapittel 2.1: Grenseverdier og ε-δ-definisjonen

- **id:** `mat1100-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Den presise grensedefinisjonen med kvantordisiplin, negasjon og det kvantitative δ-valget — midtveisens teorispørsmål og slutteksamens ε-δ-bevis.
- **Forkunnskaper (kryssbok):** [Grenseverdi](/bok/r1/r1-3-1) (intuitiv grenseforståelse), [Rasjonale uttrykk](/bok/1t/1t-1-6) (algebraisk forenkling).
- **Eksamensbelegg:** ε-δ/definisjonsteori = 7 % av midtveisspørsmålene (distraktorene bytter kvantorrekkefølge eller ε/δ-roller); ε-δ-bevis del av teoribevis-sjangeren I på slutteksamen (teoribevis i ~13/21 sett). Prioritet: **kunne**.
- **Innholdskontrakt:** ε-δ-definisjonen av $\lim_{x \to a} f(x) = L$ skrevet i full kvantorform, med ensidige og uendelige varianter ($x \to \infty$, $f(x) \to \infty$); definisjonen av kontinuitet i punkt; **negasjon** av definisjonene (kvantorene snus — trenes eksplisitt fordi midtveis-distraktorer bygger på dette); kvantitativ δ(ε)-bestemmelse for lineære og enkle ikke-lineære funksjoner; ε-δ-bevismalen (aktiv): «faktoriser $|f(x) - L|$, avgrens én faktor på et kontrollert intervall, velg $\delta = \min(\varepsilon/K, 1)$»; entydighet av grenser (kun kjennskap); regneregler for grenser (sum/produkt/kvotient — bruk, med bevisidé for sum).
- **Oppgavesjangre:** I + MV. Mønstereksempel (MV): «Hvilket av følgende utsagn er definisjonen av $\lim_{x \to 2} f(x) = 5$?» (distraktorer: byttet kvantorrekkefølge, ε og δ i bytte roller, «det finnes ε» i stedet for «for alle»). Mønstereksempel (bevis): «Bruk definisjonen til å vise at $\lim_{x \to 1}(3x^2 + 1) = 4$.»
- **Typiske feil:** Kvantorrekkefølgen byttet (δ valgt før ε); glemme $\delta = \min(\cdot, 1)$-grepet når faktoren må avgrenses; forveksle «grensen finnes» med «funksjonsverdien finnes»; tro at «grensene fra begge sider er like» alene gir kontinuitet (glemmer $f(a)$).
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 2.2: Grenseteknikk: standardgrenser, L'Hôpital og alle ubestemte former

- **id:** `mat1100-2-2` · **number:** 2.2 · **estimatedMinutes:** 60 · **prerequisites:** `mat1100-2-1`
- **kapitteltype:** teori
- **description:** Regneverktøyet for 16 % av midtveis: alle sju ubestemte former, konjugattriks, logaritmetriks og veksthierarkiet — med [0/0]-disiplinen sensor krever.
- **Forkunnskaper (kryssbok):** Kap. 2.1; [Derivasjonsregler](/bok/r1/r1-4-1) (L'Hôpital krever derivasjonsteknikk), [Potenser og logaritmer](/bok/r1/r1-1-2) (logaritmeregler for $1^\infty$-triksene).
- **Eksamensbelegg:** Grenser/L'Hôpital = 16 % av midtveisspørsmålene (2–3 per sett, dekker alle ubestemte former); egen (del)oppgave på slutteksamen i 6/21; L'Hôpital dukker dessuten opp som kjedet verktøy i FTC- og signaturoppgaver. Prioritet: **kunne** (tempo: perfekt).
- **Innholdskontrakt:** Standardgrensene (aktiv bruk): $\sin x/x \to 1$, $x/\sin x \to 1$, veksthierarkiet $\ln x \ll x^p \ll e^x$, $e$-grensene via logaritmetriks. **L'Hôpital med disiplin**: ubestemt form markeres eksplisitt ($[0/0]$ eller $[\infty/\infty]$) FØR hver anvendelse — fasitpraksis, og gjentatt bruk krever ny markering. Alle sju ubestemte former og omskrivingene deres: $0/0$, $\infty/\infty$ (direkte), $0 \cdot \infty$ (flytt til nevner), $\infty - \infty$ (fellesnevner eller **konjugattriks**), $1^\infty$, $0^0$, $\infty^0$ (alle via $\lim \ln$ + eksponentiering). Konjugattrikset for rotuttrykk; når L'Hôpital IKKE hjelper (sirkulære tilfeller — bruk standardgrenser/skvis i stedet); skviseteoremet for grenser (fullversjon i 3.3-sammenheng, her for $x \to \infty$-varianter).
- **Oppgavesjangre:** MV + del av H/J-kjeder. Mønstereksempel (MV): «$\lim_{x \to 0^+} (1 + 3x)^{1/x} = ?$» (løses med logaritmetriks; distraktorer $e$, $e^3$ forveksles, $1$, $\infty$). Mønstereksempel (langsvar): «Beregn $\lim_{x \to \infty} \left(\sqrt{x^2 + 4x} - x\right)$ med full føring.»
- **Typiske feil:** L'Hôpital uten å markere/sjekke ubestemt form (trekk); L'Hôpital på ikke-ubestemt uttrykk; glemme å eksponentiere tilbake etter logaritmetrikset; derivere produktet i stedet for å omskrive $0 \cdot \infty$; regne langt der veksthierarkiet gir svaret direkte.
- **Quiz: 25 · Flashcards: 20**

#### Kapittel 2.3: Følger: rekursjon, fikspunkt og monoton + begrenset

- **id:** `mat1100-2-3` · **number:** 2.3 · **estimatedMinutes:** 50 · **prerequisites:** `mat1100-2-2`
- **kapitteltype:** teori
- **description:** Følgekonvergens med kompletthetsaksiomets arbeidsform: rekursive følger analyseres med fikspunkt, monotoni og begrensethet.
- **Forkunnskaper (kryssbok):** Kap. 2.1–2.2; [Følger og tallmønstre](/bok/r2/r2-1-1) og [Rekursive sammenhenger og programmering](/bok/r2/r2-1-7) (rekursjonsnotasjon).
- **Eksamensbelegg:** Følger = 9 % av midtveisspørsmålene (rasjonale følger, konjugattriks, rekursive med fikspunktanalyse — fast innslag fra 2014, monoton+begrenset-teoremet som teoriutsagn); på slutteksamen 3/21 (konstruksjon/rekursjon), inkl. åpne «konstruer en følge som …»-oppgaver. Prioritet: **kunne**.
- **Innholdskontrakt:** Følgegrense (definisjonen speiler ε-δ med $N$); grenseregler for følger; skvis for følger; **kompletthetsaksiomet** i arbeidsformen «monoton + begrenset ⇒ konvergent» (teoriutsagn på midtveis — presis formulering kreves); sup/inf (kjennskap + bruk i begrensethetsargumenter); rekursive følger $a_{n+1} = g(a_n)$: **fikspunktanalyse** (kandidatgrenser fra $L = g(L)$), induksjonsaktig monotonibevis, begrensethetsbevis, konklusjon via teoremet; rasjonale følger og konjugattriks for $\sqrt{n^2 + n} - n$-typen; åpne konstruksjonsoppgaver: eksempel + **verifikasjon av alle kravene** (eksempel uten verifikasjon er ikke fullt svar — sensorregel).
- **Oppgavesjangre:** MV + I. Mønstereksempel: «Følgen er gitt ved $a_1 = 1$, $a_{n+1} = \sqrt{2a_n + 3}$. Vis at følgen er voksende og begrenset, og finn grensen.» Mønstereksempel (åpen): «Angi en følge som er begrenset, men ikke konvergent, og verifiser begge egenskapene.»
- **Typiske feil:** Anta at grensen finnes og løse $L = g(L)$ uten konvergensbevis (gir 0 uten begrunnelse); glemme å verifisere begge egenskaper i åpne oppgaver; fikspunkt utenfor følgens verdiområde godtatt ukritisk; blande følgegrense og funksjonsgrense.
- **Quiz: 20 · Flashcards: 15**

#### Kapittel 2.4: Kontinuitet, skjæringssetningen og ekstremverdisetningen

- **id:** `mat1100-2-4` · **number:** 2.4 · **estimatedMinutes:** 50 · **prerequisites:** `mat1100-2-1`
- **kapitteltype:** teori
- **description:** Kontinuitet på intervaller og de to store eksistenssetningene — skjæringssetnings-malen er et fast bevisdelpunkt på slutteksamen.
- **Forkunnskaper (kryssbok):** Kap. 2.1; [Kontinuitet](/bok/r1/r1-3-2) (intuitivt kontinuitetsbegrep).
- **Eksamensbelegg:** Skjæringssetningen er én av tre arketyper i teoribevis-sjangeren I (teoribevis i ~13/21 sett); ekstremverdisetningen og kontinuitetsteori er midtveis-teoriutsagn. Prioritet: **kunne**.
- **Innholdskontrakt:** Kontinuitet i punkt og på intervall; kontinuitet av sammensetninger/kombinasjoner (bruk); ensidig kontinuitet i skjøtepunkter (regnes hver for seg — forberedelse til 3.3); **skjæringssetningen** med bevismal (aktiv): definer $h = f - g$, finn punkter med motsatt fortegn (grove overslag godtas), pek på kontinuitet, **navngi setningen**, konkluder; varianten «likningen har minst én løsning» og finpuss («nøyaktig én» = skjæring + monotoni); **ekstremverdisetningen** (kontinuerlig på lukket, begrenset intervall ⇒ maks/min antas) — formulering og bruk, ikke bevis; hvorfor forutsetningene trengs (moteksempler på åpne/ubegrensede intervaller — midtveis-distraktormat).
- **Oppgavesjangre:** I + MV. Mønstereksempel: «Vis at likningen $x^5 = 3 - 2x$ har minst én løsning i $[0, 2]$, og forklar hvorfor den ikke kan ha flere.»
- **Typiske feil:** Glemme å nevne kontinuitet før skjæringssetningen brukes (begrunnelse mangler på «opplagt» steg — sensortrekk); ikke navngi setningen; «nøyaktig én» besvart uten monotoniargument; ekstremverdisetningen brukt på åpent intervall.
- **Quiz: 15 · Flashcards: 20**

#### Kapittel 2.5: Drill: grensetempo for midtveis

- **id:** `mat1100-2-5` · **number:** 2.5 · **estimatedMinutes:** 90 · **prerequisites:** `mat1100-2-2`, `mat1100-2-3`
- **kapitteltype:** drill
- **description:** Grenser, følger og definisjonsspørsmål i flervalgstempo — midtblokken på midtveis (25–30 % samlet) på under 6 minutter per oppgave.
- **Eksamensbelegg:** Dekker midtveisblokkene grenser (16 %), følger (9 %) og ε-δ/teori (7 %) — til sammen ~1/3 av midtveissettet. Prioritet: **kunne** (tempo: perfekt).
- **Innholdskontrakt:** Beslutningstre i tempoformat: (1) sett inn — ubestemt? (2) klassifiser formen; (3) velg våpen (standardgrense / konjugat / logaritme / L'Hôpital / veksthierarki / skvis); (4) for følger: rasjonal → del på høyeste potens, rot → konjugat, rekursiv → fikspunkt. Gjennomregnet «midtveisblokk» (6 flervalgsspørsmål: to grenser, én følge, ett kvantorspørsmål, ett teoriutsagn, én rekursjon) med margnotater om distraktordesignet. 12–15 flervalgsoppgaver som dekker alle sju ubestemte former, begge følgetyper og negasjonsspørsmål + 2–3 langsvarvarianter med full føring.
- **Oppgavesjangre:** MV (+ I-forberedelse). Mønstereksempel: «$\lim_{n \to \infty} \left(\sqrt{n^2 + 6n} - n\right) = ?$» med distraktorer 0, 6, $\infty$, «eksisterer ikke» (riktig: 3).
- **Typiske feil:** Tidsfellen; L'Hôpital-refleksen der omskriving er raskere; alle kvantor- og formklassifiseringsfellene fra 2.1–2.3.
- **Quiz: 20 · Flashcards: 5**

**Prøve-kvote Del 2:** 4 prøver (spesifisert i §4).

---

### Del 3 — Derivasjon

#### Kapittel 3.1: Deriverbarhet: grensedefinisjonen

- **id:** `mat1100-3-1` · **number:** 3.1 · **estimatedMinutes:** 45 · **prerequisites:** `mat1100-2-1`
- **kapitteltype:** teori
- **description:** Den deriverte som grense av differansekvotienten — definisjonen sensor krever i alle deriverbarhetsspørsmål, og fundamentet for signaturoppgaven.
- **Forkunnskaper (kryssbok):** Kap. 2.1–2.2; [Derivasjonens definisjon](/bok/r1/r1-3-3) og [Gjennomsnittlig og momentan vekstfart](/bok/r1/r1-2-5).
- **Eksamensbelegg:** Grensedefinisjonen er obligatorisk verktøy i signaturoppgaven H (10/21, 5/6 siste år — drilles i 3.3); definisjonsspørsmål om deriverbarhet er midtveis-teoristoff. Prioritet: **perfekt** (som verktøy).
- **Innholdskontrakt:** $f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}$ (og sekantvarianten $\lim_{x \to a} \frac{f(x) - f(a)}{x - a}$) — begge former, med geometrisk tolkning; deriverbar ⇒ kontinuerlig (med bevis — kort og eksamensaktuelt) og at implikasjonen ikke kan snus ($|x|$-moteksemplet); ensidige deriverte i skjøtepunkter; direkte definisjonsberegninger for $x^2$, $\sqrt{x}$, $1/x$; når definisjonen MÅ brukes (stykkevise funksjoner, punkter der formelverket ikke gjelder) vs. når derivasjonsregler er lov; tangentlikning (bruk).
- **Oppgavesjangre:** H (fundament) + MV. Mønstereksempel: «Bruk definisjonen av den deriverte til å finne $f'(4)$ når $f(x) = \sqrt{x}$.»
- **Typiske feil:** «Bevise» deriverbarhet ved å derivere formelen og sette inn (ugyldig der definisjonen etterspørres — emnets mest dokumenterte felle); glemme å sjekke kontinuitet først i skjøtepunkt; bare regne én ensidig grense.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 3.2: Derivasjonsteknikk: kjerneregel-tårn, logaritmisk derivasjon og invers funksjon

- **id:** `mat1100-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `mat1100-3-1`
- **kapitteltype:** teori
- **description:** Regneferdigheten bak 14 % av midtveis: dype kjerneregel-sammensetninger, logaritmisk derivasjon og den årvisse «derivert av omvendt funksjon i punkt».
- **Forkunnskaper (kryssbok):** Kap. 3.1; [Kjerneregelen](/bok/r1/r1-4-3), [Produktregelen og kvotientregelen](/bok/r1/r1-4-4), [Derivasjon av omvendte funksjoner](/bok/r1/r1-4-5), [Omvendte funksjoner](/bok/r1/r1-2-2), [Derivasjon av trigonometriske funksjoner](/bok/r2/r2-4-9).
- **Eksamensbelegg:** Derivasjonsteknikk = 14 % av midtveisspørsmålene: kjerneregel-tårn, logaritmisk derivasjon og **derivert av omvendt funksjon i punkt (årviss)**; inverse funksjoner/definisjonsmengder ytterligere 4 %. Teknikken bærer dessuten K-, M- og J-sjangrene på slutteksamen. Prioritet: **perfekt** (tempo).
- **Innholdskontrakt:** Full regelbank i bruk (produkt, kvotient, kjerne — også i tre lag: $f(g(h(x)))$ systematisk utenfra og inn); deriverte av $\arcsin$, $\arccos$, $\arctan$ (med utledning via invers-regelen — aktivt for $\arctan$); **logaritmisk derivasjon** for $f(x)^{g(x)}$ og store produkter; **derivert av omvendt funksjon i punkt**: $(f^{-1})'(b) = 1/f'(a)$ der $f(a) = b$ — oppskriften «finn $a$ først» drilles; invers funksjon med riktig definisjonsområde (monotoni sikrer eksistens); implisitt derivasjon (verktøy for relaterte rater i 3.6); andrederiverte.
- **Oppgavesjangre:** MV + verktøy for K/M/J. Mønstereksempel (MV, årviss): «La $f(x) = x^5 + 2x + 1$. Finn $(f^{-1})'(4)$.» (Løsning: $f(1) = 4$, så $(f^{-1})'(4) = 1/f'(1) = 1/7$.) Mønstereksempel: «Deriver $f(x) = x^{\sin x}$ for $x > 0$.»
- **Typiske feil:** Regne $1/f'(b)$ i stedet for $1/f'(a)$ (glemme «finn $a$ først»); miste et lag i kjerneregel-tårn; glemme kjernederiverten i implisitt derivasjon; logaritmisk derivasjon uten å gange tilbake med $f(x)$.
- **Quiz: 25 · Flashcards: 20**

#### Kapittel 3.3: Drill: signaturoppgaven — kontinuitet og deriverbarhet i ett punkt

- **id:** `mat1100-3-3` · **number:** 3.3 · **estimatedMinutes:** 90 · **prerequisites:** `mat1100-3-1`, `mat1100-2-2`, `mat1100-2-4`
- **kapitteltype:** drill
- **description:** Slutteksamenens teoritunge sluttoppgave: x^k·sin/cos(1/x^m)-familien, skviseargumentet, grensedefinisjonen og oscillasjonsfellen — emnets tydeligste karakterskiller.
- **Eksamensbelegg:** Sjanger H: 10/21 totalt, **5 av 6 siste år** — oscillasjonsfamilien fire år på rad (2020–2023); «lim f′ finnes ikke ⇏ ikke deriverbar» var eksplisitt sensoradvarsel 2020 og egen bevisdeloppgave 2021; skjøteparameter-varianten med tre betingelser i 2019; integrerbarhets-påbygget i 2019. Prioritet: **perfekt** — dette skiller toppkarakterene.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) **Kontinuitet i punktet**: vis $\lim_{x \to a} f(x) = f(a)$ — for oscillasjonsfamilien med **skviseargument** der begrensetheten uttales eksplisitt ($|\cos(1/x^m)| \le 1$ ⇒ $-|x|^k \le x^k\cos(1/x^m) \le |x|^k$), for skjøter med ensidige grenser hver for seg; (2) **Deriverbarhet**: sett opp differansekvotienten $\lim_{h \to 0} \frac{f(h) - f(0)}{h}$ og avgjør med skvis/standardgrenser — ALDRI via derivertformelen; (3) **Oscillasjonsfellen** (kjernefellen): $f$ kan være deriverbar i punktet selv om $\lim_{x \to a} f'(x)$ ikke finnes — den deriverte er da diskontinuerlig; standard moteksempel $x^2\sin(1/x)$ regnes helt ut (deriverbar overalt, $f'$ diskontinuerlig i 0); (4) **Grense-av-derivert-setningen** (motsatt retning, lovlig verktøy): er $f$ kontinuerlig i $a$ og $\lim_{x \to a} f'(x) = b$ finnes, er $f'(a) = b$ — med bevisskisse via MVT/L'Hôpital (var eksamensbevis 2021) og eksplisitt regel for når hvert kriterium er gyldig; (5) **Skjøteparameter-varianten**: ukjente $a, b, c$ → kontinuitets- og derivertlikninger i hvert skjøtepunkt, løs systemet; (6) **Integrerbarhets-påbygget** uten regning: «begrenset + endelig mange diskontinuiteter» eller «begrenset + stykkevis monoton» (begge teoremer godtatt i fasit). Eksponent-regnskapet for familien ($k$ mot $m$: når gir skvisen kontinuitet, når deriverbarhet, når kontinuerlig derivert) settes opp som tabell. Gjennomregnet eksamenscase med sensor-margnotater. 8–12 oppgaver på eksamensnivå som varierer $k$, $m$, sin/cos, skjøtetype og spørsmålsstilling.
- **Oppgavesjangre:** H (+ I-kobling). Mønstereksempel: «La $f(x) = x^3\cos(1/x^2)$ for $x \ne 0$ og $f(0) = 0$. (a) Vis at $f$ er kontinuerlig i $0$. (b) Avgjør om $f$ er deriverbar i $0$. (c) Er $f'$ kontinuerlig i $0$? Begrunn alle svar.»
- **Typiske feil:** Konkludere «ikke deriverbar» fordi $\lim f'(x)$ ikke finnes (KJERNEFELLEN — eksplisitt sensoradvarsel); derivere formelen i stedet for differansekvotienten; skviseargument uten å uttale begrensetheten; hoppe over én ensidig grense i skjøtepunkter; blande betingelsene (verdi vs. derivert) i parametervarianten.
- **Quiz: 20 · Flashcards: 15**

#### Kapittel 3.4: Middelverdisetningen, Rolle og bevis med hjelpefunksjon

- **id:** `mat1100-3-4` · **number:** 3.4 · **estimatedMinutes:** 55 · **prerequisites:** `mat1100-3-1`, `mat1100-2-4`
- **kapitteltype:** teori
- **description:** Rolle- og MVT-bevisene med hjelpefunksjon — den stigende bevissjangeren på slutteksamen (3 av 6 siste år).
- **Forkunnskaper (kryssbok):** Kap. 2.4, 3.1; [Funksjonsdrøfting](/bok/r1/r1-4-6) (monotoni og ekstremalpunkter).
- **Eksamensbelegg:** MVT/Rolle-bevis med hjelpefunksjon: 4/21 totalt, men **3/6 siste år — stigende**; korollar-varianten («samme derivert + felles punkt ⇒ samme funksjon») i 2023; MVT/Rolle-teoriutsagn = 3 % av midtveisspørsmålene. Prioritet: **kunne** (grensende til perfekt).
- **Innholdskontrakt:** Rolles teorem og middelverdisetningen — presise formuleringer (midtveis tester formuleringen!), geometrisk tolkning, bevisidé (Rolle via ekstremverdisetningen; MVT via hjelpefunksjon fra Rolle — aktiv bevisskisse); **hjelpefunksjonsmalen** (aktiv): for «vis at det finnes $c$ med [likning i $f$, $f'$, $f''$]» — konstruer $g$ (typisk $f - f'$, $f(x) - x$, $e^{-x}f(x)$ el.l.), vis like verdier i to punkter, **sjekk forutsetningene eksplisitt** (kontinuitet på lukket, deriverbarhet på åpent), navngi Rolle, konkluder; korollarene (aktive): $f' \equiv 0$ ⇒ konstant; samme derivert ⇒ samme funksjon opp til konstant (+ felles punkt ⇒ identiske); $f'$ voksende ⇔ $f$ konveks (brukt i bevis 2023); MVT som ulikhetsmaskin ($|f(b) - f(a)| \le K|b - a|$).
- **Oppgavesjangre:** I. Mønstereksempel: «$f$ er to ganger deriverbar med $f(0) = f'(0)$ og $f(1) = f'(1)$. Vis at det finnes $c \in (0,1)$ med $f'(c) = f''(c)$.» (Hjelpefunksjon $g = f - f'$, Rolle.)
- **Typiske feil:** Forutsetningene ikke sjekket eksplisitt før Rolle (sensortrekk); setningen ikke navngitt; hjelpefunksjon uten verifikasjon av like endepunktverdier; blande Rolle (like verdier) og MVT (sekantstigning).
- **Quiz: 15 · Flashcards: 20**

#### Kapittel 3.5: Funksjonsdrøfting: fortegnsskjema, asymptoter og konveksitet

- **id:** `mat1100-3-5` · **number:** 3.5 · **estimatedMinutes:** 55 · **prerequisites:** `mat1100-3-2`, `mat1100-2-2`
- **kapitteltype:** teori
- **description:** Komplett drøfting med dokumentert fortegnsskjema og fullstendige asymptoteargumenter — inkludert midtveisgjengangeren skråasymptote til x·e^(k/x)-familien.
- **Forkunnskaper (kryssbok):** Kap. 2.2, 3.2; [Funksjonsdrøfting](/bok/r1/r1-4-6), [Rasjonale funksjoner](/bok/1t/1t-3-7), [Fortegnslinjer](/bok/1t/1t-4-3).
- **Eksamensbelegg:** Drøfting = 12 % av midtveisspørsmålene (**skråasymptoten til $x e^{k/x}$-familien nesten årlig**, konveksitet/vendepunkter fast); egen slutteksamensoppgave i 9/21 (sjanger K), teknikken implisitt i mange flere; kvalitativ variant (gitt graf av $f'$, skisser $f$ og $f''$) forekom 2009; «konveks ⇒ $f'$ voksende» i bevis 2023. Prioritet: **kunne**.
- **Innholdskontrakt:** $f'$ og $f''$ med **fortegnsskjema som dokumentasjon** (tegnet/beskrevet fortegnslinje er forventet føring); lokale/globale ekstremalpunkter (randpunkter!); konveksitet/vendepunkter via $f''$; **komplett asymptoteargument**: vertikale (kandidater der nevner → 0 — og «kontinuerlig på hele $\mathbb{R}$ ⇒ ingen vertikale» skal uttales når det gjelder), horisontale via grenser mot $\pm\infty$, **skråasymptoter** via polynomdivisjon eller utviklingen $x e^{k/x} = x + k + k^2/(2x) + \dots$ (midtveisgjengangeren: asymptote $y = x + k$); kvalitativ drøfting fra graf av $f'$; sammenhengen konveksitet–tangentposisjon.
- **Oppgavesjangre:** K + MV. Mønstereksempel (MV): «Grafen til $f(x) = x e^{2/x}$ har en skråasymptote. Hvilken?» (Riktig: $y = x + 2$; distraktorer $y = x$, $y = x + 1$, $y = 2x$, «har ingen».) Mønstereksempel (langsvar): «Finn ekstremalpunkter, vendepunkter og alle asymptoter for $f(x) = \arctan(x^2)$, og angi hvor $f$ er konveks.»
- **Typiske feil:** Konklusjon uten fortegnsskjema (føringstrekk); asymptoteargument uten grenseføring; glemme å begrunne fravær av vertikale asymptoter; forveksle vendepunkt med $f''(x) = 0$ uten fortegnsskifte; globale ekstremalpunkter uten randsjekk.
- **Quiz: 20 · Flashcards: 15**

#### Kapittel 3.6: Relaterte rater og optimering med figur

- **id:** `mat1100-3-6` · **number:** 3.6 · **estimatedMinutes:** 50 · **prerequisites:** `mat1100-3-2`
- **kapitteltype:** teori
- **description:** Midtveisens faste avslutningsoppgaver: modellere fra figur, derivere implisitt mhp. tid, og begrunne globale ekstremum — med fortegnstolkning i konklusjonen.
- **Forkunnskaper (kryssbok):** Kap. 3.2; [Relaterte rater](/bok/r1/r1-4-7), [Optimering i praksis](/bok/r1/r1-4-9), [Trigonometri i rettvinklede trekanter](/bok/1t/1t-5-4) (tan-vinkelmodellene).
- **Eksamensbelegg:** ~2 spørsmål per midtveissett (alltid sist, alltid med figur); slutteksamen i 6/21 (fly 2016, fallskjerm 2017, kinosete-synsvinkel 2021; anvendt optimering 6/21, fallende — nå primært midtveis). Prioritet: **kunne**.
- **Innholdskontrakt:** Relaterte rater-oppskriften (aktiv): (1) figur + navngi variabler; (2) modeller sammenhengen (Pytagoras eller $\tan\theta$ = motstående/hosliggende — de to gjengangermodellene); (3) deriver implisitt mhp. $t$; (4) sett inn øyeblikkstallene; (5) **tolk fortegnet i konklusjonssetningen** («avstanden avtar med …»). Optimeringsoppskriften: målfunksjon fra figur/bibetingelse, deriver, kandidater, **begrunn globalt ekstremum** (fortegnsskjema, ekstremverdisetning på lukket intervall, eller randargument); klassisk tidsminimering (strand/båt-typen) og geometrisk maksimering.
- **Oppgavesjangre:** M + MV. Mønstereksempel: «En observatør står 80 m fra et punkt der en heliumballong stiger rett opp med 4 m/s. Hvor fort øker synsvinkelen idet ballongen er 60 m over bakken?»
- **Typiske feil:** Sette inn tallene FØR derivasjonen (låser variablene); glemme kjernefaktoren $d\theta/dt$ eller $dx/dt$ i implisitt derivasjon; svar uten fortegnstolkning; optimering uten globalt-argument; feil rettvinkel-modell fra figuren.
- **Quiz: 15 · Flashcards: 10**

**Prøve-kvote Del 3:** 4 prøver (spesifisert i §4).

---

### Del 4 — Integrasjon *(prioritet: PERFEKT — slutteksamenens ryggrad)*

#### Kapittel 4.1: Riemann-integralet og integrerbarhet

- **id:** `mat1100-4-1` · **number:** 4.1 · **estimatedMinutes:** 45 · **prerequisites:** `mat1100-2-4`
- **kapitteltype:** teori
- **description:** Integralet bygget fra trappesummer, og de to integrerbarhetsteoremene som gir poeng uten regning.
- **Forkunnskaper (kryssbok):** Kap. 2.4; [Bestemt integral som grenseverdi](/bok/r2/r2-2-4).
- **Eksamensbelegg:** Integrerbarhetsteori er teoribevis-stoff (sjanger I, del av 9/21) og påbygg i signaturoppgaven (2019: to teoremer, begge godtatt); Riemann-sum gjenkjent som integral forekom 2004. Prioritet: **kunne**.
- **Innholdskontrakt:** Øvre/nedre trappesummer og Riemann/Darboux-kriteriet (formuleringsnivå + enkle bevisbrukstilfeller: integrerbarhet av monotone funksjoner som skisse); de to arbeidsteoremene (aktive, uten bevis): **«begrenset + endelig mange diskontinuiteter ⇒ integrerbar»** og **«begrenset + stykkevis monoton ⇒ integrerbar»** — brukt til å avgjøre integrerbarhet uten regning; lineæritet, intervalladditivitet, monotoni av integralet (bruk); eksempel på ikke-integrerbar funksjon (Dirichlet — kjennskap); Riemann-sum → integral-gjenkjenning.
- **Oppgavesjangre:** I + H-påbygg. Mønstereksempel: «$f$ er begrenset på $[0, 3]$ og kontinuerlig unntatt i $x = 1$ og $x = 2$. Forklar hvorfor $f$ er integrerbar på $[0,3]$, med henvisning til et teorem.»
- **Typiske feil:** Tro at integrerbarhet krever kontinuitet; påstå integrerbarhet uten å navngi teoremet; blande «begrenset» og «kontinuerlig» i teorempremissene.
- **Quiz: 10 · Flashcards: 15**

#### Kapittel 4.2: Analysens fundamentalteorem og kjerneregelen

- **id:** `mat1100-4-2` · **number:** 4.2 · **estimatedMinutes:** 45 · **prerequisites:** `mat1100-4-1`, `mat1100-3-2`
- **kapitteltype:** teori
- **description:** Derivasjon av integraler med variable grenser — der kjerneregel-faktoren er hele poenget (52 % av slutteksamenene).
- **Forkunnskaper (kryssbok):** Kap. 3.2, 4.1; [Analysens fundamentalsetning](/bok/r2/r2-2-5).
- **Eksamensbelegg:** Sjanger J i 11/21 sett: $\frac{d}{dx}\int^{g(x)} h(t)\,dt$-typen, ofte etterfulgt av produktregel for andrederivert; varianter: variable grenser i begge ender (2010), $g = \int f$ med kjent grenseoppførsel → eksisterer $g''(0)$? (2016, kjedet til L'Hôpital). Prioritet: **kunne** (grensende til perfekt).
- **Innholdskontrakt:** FTC del 1 og 2 — formuleringer + bevisidé for del 1 (via MVT for integraler — aktiv skisse, eksamensaktuelt teoristoff); hovedoppskriften (aktiv): $\frac{d}{dx}\int_a^{g(x)} h(t)\,dt = h(g(x)) \cdot g'(x)$ — **kjerneregel-faktoren $g'(x)$ er hele poenget**; variable grenser i begge ender (splitt i to integraler); videre derivasjon med produktregel for $F''$; kjeding mot L'Hôpital (grenser av $\frac{1}{x}\int_0^x \dots$-typen); antiderivert-tabellen i aktiv bruk.
- **Oppgavesjangre:** J. Mønstereksempel: «La $F(x) = \int_1^{2x^2} e^{3t}\,dt$. Finn $F''(x)$.»
- **Typiske feil:** Glemme kjerneregel-faktoren $g'(x)$ (den dokumenterte gjengangerfeilen); glemme minustegnet fra nedre variabel grense; sette inn grensen i integranden uten å derivere ytre struktur ved $F''$.
- **Quiz: 15 · Flashcards: 10**

#### Kapittel 4.3: Substitusjon og delvis integrasjon

- **id:** `mat1100-4-3` · **number:** 4.3 · **estimatedMinutes:** 60 · **prerequisites:** `mat1100-4-2`
- **kapitteltype:** teori
- **description:** De to arbeidshestene i 95 %-sjangeren, med føringsstandarden fasit krever: substitusjonsboks med nye grenser, og dokumentert u/v′-valg.
- **Forkunnskaper (kryssbok):** Kap. 4.2; [Variabelskifte (substitusjon)](/bok/r2/r2-3-1), [Delvis integrasjon](/bok/r2/r2-3-2).
- **Eksamensbelegg:** Del av sjanger E (20/21 sett, 2–4 delpunkter per sett). Substitusjonsklassikerne fra arkivet: $u = x^2$ mot $\sqrt{1 - x^4}$-nevner (arcsin-form), $u = \arctan x$, $u = \sin x$, $u = \sqrt{x}$, $u = 1/x$; delvis for produkter og «ensomme» funksjoner ($\ln$, $\arctan$, $\arccos$). Hjemmeeksamensvarianten «konstruer selv et integral som løses med substitusjonen $u = \dots$» (fasit regner baklengs fra $du$). Prioritet: **perfekt**.
- **Innholdskontrakt:** Substitusjon (aktiv): gjenkjenningsregelen «indre funksjon · dens deriverte»; **føringsstandarden**: $u$, $du/dx$, $dx$ og **nye grenser** bokføres i egen boks; tilbakesubstitusjon ved ubestemt integral; klassiker-katalogen over + arcsin-/arctan-formene $\int \frac{dx}{\sqrt{1 - u^2}}$, $\int \frac{du}{1 + u^2}$; delvis integrasjon (aktiv): $\int u v' = uv - \int u' v$ med **dokumentert valg** av $u$/$v'$ (LIATE som tommelregel), gjentatt delvis, «ensom funksjon»-trikset ($v' = 1$ for $\ln x$, $\arctan x$), rundtur-varianten ($e^x \sin x$); konstruksjonsvarianten: regn baklengs fra $du$ og verifiser.
- **Oppgavesjangre:** E. Mønstereksempel: «Beregn $\int_0^{1/2} \frac{x}{\sqrt{1 - x^4}}\,dx$.» (Boks: $u = x^2$, $du = 2x\,dx$, nye grenser $0$ til $1/4$ → arcsin-form.) Mønstereksempel (åpen): «Konstruer et bestemt integral som løses naturlig med substitusjonen $u = \ln x$, og løs det.»
- **Typiske feil:** Glemme å skifte grenser ved substitusjon i bestemt integral (dokumentert gjengangerfeil); substitusjon uten boksføring (føringstrekk); feil fortegn i delvis; velge $u$/$v'$ slik at integralet blir verre og ikke snu; glemme å substituere tilbake i ubestemt integral.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 4.4: Delbrøkoppspalting og fullført kvadrat

- **id:** `mat1100-4-4` · **number:** 4.4 · **estimatedMinutes:** 55 · **prerequisites:** `mat1100-4-3`
- **kapitteltype:** teori
- **description:** Rasjonale integrander: polynomdivisjon, delbrøk med gjentatte og irreduserbare faktorer, og fullført kvadrat mot arctan-formen.
- **Forkunnskaper (kryssbok):** Kap. 4.3, 1.3 (faktorisering); [Delbrøkoppspalting](/bok/r2/r2-3-3), [Fullstendig kvadrat](/bok/1t/1t-2-4).
- **Eksamensbelegg:** Del av sjanger E (20/21): delbrøk også med gjentatt lineær faktor ($1/(x^2(x+1))$-typen) og irreduserbar kvadratisk faktor; fullført kvadrat → arctan for nevnere uten reelle røtter; kombinasjonsformen $(ax+b)/(x^2+px+q)$ splittet i ln-del + arctan-del var eksamensoppgave 2023. Prioritet: **perfekt**.
- **Innholdskontrakt:** Polynomdivisjon FØRST når tellergrad ≥ nevnergrad (aktiv); delbrøkoppspalting: distinkte lineære faktorer, **gjentatt lineær faktor** (ledd for hver potens), **irreduserbar kvadratisk faktor** ($\frac{Bx + C}{x^2 + px + q}$-ledd); koeffisientbestemmelse (innsetting av røtter + sammenligning); **fullført kvadrat** → $\int \frac{dx}{(x + p/2)^2 + q'} \to \arctan$; **splitteteknikken** for $(ax+b)/(x^2+px+q)$: skriv telleren som (multiplum av nevnerens deriverte) + konstant → ln-del + arctan-del; diskriminanttesten for å velge strategi (reelle røtter → delbrøk; ingen → fullført kvadrat).
- **Oppgavesjangre:** E. Mønstereksempel: «Beregn $\int \frac{4x + 5}{x^2 + 4x + 5}\,dx$.» (Splitt: $2 \cdot \frac{2x + 4}{x^2+4x+5} - \frac{3}{(x+2)^2 + 1}$ → $2\ln(\dots) - 3\arctan(x + 2) + C$.)
- **Typiske feil:** Delbrøk uten polynomdivisjon når graden krever det; glemme ledd for hver potens av gjentatt faktor; $A/(x^2 + 1)$-ansats i stedet for $(Bx + C)/(x^2+1)$; fortegnsfeil i fullført kvadrat; glemme $+C$.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 4.5: Drill: integrasjonsteknikk-kjeder

- **id:** `mat1100-4-5` · **number:** 4.5 · **estimatedMinutes:** 90 · **prerequisites:** `mat1100-4-4`
- **kapitteltype:** drill
- **description:** Sjangeren som står i 20 av 21 sett: velge riktig teknikk, kjede to–tre teknikker i samme integral, og føre alt slik fasit gjør.
- **Eksamensbelegg:** Sjanger E samlet (20/21; typisk 2–4 delpunkter per sett); arkivoppgavene kjeder ofte 2–3 teknikker (substitusjon → delvis → ny substitusjon). Prioritet: **perfekt**.
- **Innholdskontrakt:** Beslutningstreet (algoritme): (1) forenkle/splitt; (2) direkte antiderivert? (3) «indre · derivert»-struktur → substitusjon; (4) produkt/ensom funksjon → delvis; (5) rasjonal → divisjon/delbrøk/fullført kvadrat etter diskriminant; (6) rot → substitusjon $u = \sqrt{x}$ el.l.; (7) etter hvert steg: klassifiser resten på nytt (kjeding). Gjennomregnet eksamenscase (kjede med substitusjon → delvis) med sensor-margnotater om føringspoengene (boksen, grensene, u/v′-valget, konklusjonssetningen). 10–15 oppgaver på eksamensnivå: minst tre kjedeoppgaver, alle fire teknikkene representert, både bestemte og ubestemte, + én konstruksjonsoppgave («lag et integral som krever både substitusjon og delvis»).
- **Oppgavesjangre:** E, alle varianter. Mønstereksempel: «Beregn $\int_1^4 e^{\sqrt{x}}\,dx$.» (Kjede: $u = \sqrt{x}$ → $2\int_1^2 u e^u\,du$ → delvis.)
- **Typiske feil:** Hele felleskatalogen fra 4.3–4.4 under tidspress; gi opp etter første teknikk i stedet for å reklassifisere; miste faktor 2 eller grensene i kjedens overganger.
- **Quiz: 20 · Flashcards: 5**

#### Kapittel 4.6: Uegentlige integraler: konvergens med navngitt sammenligning

- **id:** `mat1100-4-6` · **number:** 4.6 · **estimatedMinutes:** 55 · **prerequisites:** `mat1100-4-5`, `mat1100-2-2`
- **kapitteltype:** teori
- **description:** 81 %-sjangeren: avgjøre konvergens med sammenligningstest eller GS-test — alltid med navngitt p-integral og lim-føring.
- **Forkunnskaper (kryssbok):** Kap. 2.2, 4.3–4.5.
- **Eksamensbelegg:** Sjanger F i 17/21 sett. Fasitpraksis: to likestilte metoder (direkte sammenligning, f.eks. $0 < \arctan x/x^2 < (\pi/2)/x^2$, eller GS-testen med $L = \lim f/g$, $0 < L < \infty$); sammenligningsintegralet **navngis eksplisitt** som konvergent/divergent p-integral og regnes i flere fasiter faktisk ut; direkte beregning føres alltid med lim-notasjon; begge endepunkt-singulariteter må identifiseres (2008-flervalg hadde to). Prioritet: **perfekt**.
- **Innholdskontrakt:** Definisjonene: uegentlig av type 1 (ubegrenset intervall) og type 2 (singularitet i endepunkt) — alltid via $\lim_{R \to \infty}$/$\lim_{t \to a^+}$; splitting når begge forekommer (identifiser ALLE singulariteter først); **p-integralene som referansefamilie** (aktive): $\int_1^\infty x^{-p}\,dx$ konvergerer ⇔ $p > 1$; $\int_0^1 x^{-p}\,dx$ konvergerer ⇔ $p < 1$ (speilingen skal kunne begrunnes); **direkte sammenligningstest** (klem integranden, uttalt begrensethet); **grensesammenligningstesten («GS-testen»)**: $L = \lim f/g$ med $0 < L < \infty$ ⇒ samme skjebne — valg av $g$ fra dominant ledd; direkte beregning av konvergente integraler med lim-føring; absolutt konvergens (kjennskap).
- **Oppgavesjangre:** F. Mønstereksempel: «Avgjør om $\int_1^\infty \frac{dx}{x^2 - \sin x}$ konvergerer.» (GS-test mot $1/x^2$, $L = 1$, navngi konvergent p-integral med $p = 2$.)
- **Typiske feil:** «Sette inn $\infty$» i stedet for lim-føring (føringstrekk); konvergenspåstand uten navngitt sammenligningsobjekt («det går mot null» holder ikke); overse den andre singulariteten; sammenligne med feil ulikhetsretning (overvurdere når man vil vise divergens); p-kriteriene speilvendt i 0 og $\infty$.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 4.7: Omdreiningsvolum og buelengde

- **id:** `mat1100-4-7` · **number:** 4.7 · **estimatedMinutes:** 55 · **prerequisites:** `mat1100-4-5`
- **kapitteltype:** teori
- **description:** Metodevalg etter akse — skiver om x, sylinderskall om y — med tegnet område og integralet løst med teknikkene fra 4.3–4.5 (71 % av settene).
- **Forkunnskaper (kryssbok):** Kap. 4.3–4.5; [Volum av omdreiningslegemer](/bok/r2/r2-3-6), [Areal mellom kurver](/bok/r2/r2-2-7).
- **Eksamensbelegg:** Sjanger D i 15/21 sett; **skall om y-aksen er hovedtilfellet i nyere år** (2018, 2021, 2023); omvendt variant «gitt volumkrav, finn parameter» (2020 — fasit valgte fri parameter med begrunnelse); buelengde i eldre sett (2004, 2007, 2011). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Metodevalg etter akse** (aktiv hovedregel): rotasjon om $x$-aksen → skiver $V = \pi\int_a^b f(x)^2\,dx$; om $y$-aksen → sylinderskall $V = 2\pi\int_a^b x f(x)\,dx$ — med intuisjonen bak begge (skivetverrsnitt vs. utrullet skall); arbeidsgangen: **tegn/beskriv området først**, sett opp integralet, løs med relevant teknikk (typisk delvis integrasjon: $2\pi\int x \ln x\,dx$-typen); hulrom (skive-med-hull $\pi\int (f^2 - g^2)$); omvendt variant: volumlikning → parameter (ved uendelig mange løsninger: velg én fritt **med begrunnelse** — fasitpraksis); buelengde $L = \int_a^b \sqrt{1 + f'(x)^2}\,dx$ (oppsett + de integrerbare klassikerne).
- **Oppgavesjangre:** D. Mønstereksempel: «Området under $y = \ln x$ for $1 \le x \le 2$ dreies om $y$-aksen. Finn volumet.» (Skall: $2\pi\int_1^2 x\ln x\,dx$ → delvis.)
- **Typiske feil:** Skiveformel om y-aksen / skall om x-aksen (den dokumenterte hovedfeilen); ikke tegne området → feil grenser eller feil funksjon; glemme $\pi$/$2\pi$; glemme kvadratet i skiveformelen; hulromsvolum som $\pi\int(f - g)^2$.
- **Quiz: 15 · Flashcards: 15**

**Prøve-kvote Del 4:** 4 prøver (spesifisert i §4).

---

### Del 5 — Lineær algebra og flervariabel *(prioritet: PERFEKT — slutteksamenens åpning)*

#### Kapittel 5.1: Vektorer, determinant og volum

- **id:** `mat1100-5-1` · **number:** 5.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Determinant ved kofaktorutvikling, kryss- og trippelprodukt, og volumformlene — med pyramidefaktoren 1/6 som fasit vet at glemmes.
- **Forkunnskaper (kryssbok):** [Vektorer i tre dimensjoner](/bok/r2/r2-5-1), [Skalarproduktet](/bok/r2/r2-5-3), [Kryssproduktet](/bok/r2/r2-5-4), [Areal og volum med vektorer](/bok/r2/r2-5-5).
- **Eksamensbelegg:** Sjanger C i 17/21 sett (2–3 flervalg per sett i flervalgsepoken, egne delpunkter senere): volum av parallellepiped/pyramide fra fire punkter er gjengangeren. Prioritet: **kunne** (grensende til perfekt).
- **Innholdskontrakt:** Vektorer i $\mathbb{R}^2$/$\mathbb{R}^3$, skalarprodukt (vinkel/ortogonalitet — brukes i 5.4); kryssprodukt og egenskapene; determinant 2×2 og 3×3 ved **kofaktorutvikling langs valgfri rad/kolonne** (aktiv); radoperasjoners effekt (kjennskap); **areal = $|\det|$** (parallellogram), **volum av parallellepiped = $|\det[\mathbf{a}\,\mathbf{b}\,\mathbf{c}]|$** — alternativt $|(\mathbf{a} \times \mathbf{b}) \cdot \mathbf{c}|$ (begge godtas i fasit; vis begge); **pyramide/tetraeder = 1/6 av parallellepipedet** (faktoren er dokumentert glemsel); arbeidsgangen fra fire punkter: kantvektorer fra felles hjørne først.
- **Oppgavesjangre:** C. Mønstereksempel: «Finn volumet av pyramiden med hjørner $(1,0,0)$, $(2,1,1)$, $(0,2,1)$ og $(1,1,3)$.»
- **Typiske feil:** Glemme 1/6-faktoren (dokumentert gjenganger); bruke posisjonsvektorene i stedet for kantvektorer; fortegnsslurv i kofaktorutviklingen (sjakkbrettmønsteret); glemme absoluttverdien.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 5.2: Matriser: regning, invers og determinantregler

- **id:** `mat1100-5-2` · **number:** 5.2 · **estimatedMinutes:** 45 · **prerequisites:** `mat1100-5-1`
- **kapitteltype:** teori
- **description:** Matriseproduktet, invers 2×2, «inverterbar ⇔ det ≠ 0» og strukturtriksene for matrisepotenser.
- **Forkunnskaper (kryssbok):** Kap. 5.1. (Matriseregning dekkes ikke i VGS-bøkene — kapitlet bygger alt fra grunnen.)
- **Eksamensbelegg:** Del av sjanger C (17/21): invers 2×2 via standardformel («ved regning» — kalkulatorsnarvei underkjent 2014); verifisering av invers: fasit 2014 sier eksplisitt at det holder å sjekke $AB = I$ (da følger $BA = I$); strukturinnsikt $M(a)M(b) = M(a+b) \Rightarrow M(a)^{-1} = M(-a)$; $\det(A^n) = (\det A)^n$ var deloppgave 2022. Prioritet: **kunne**.
- **Innholdskontrakt:** Matriseprodukt (rekkefølgen betyr noe — ikke-kommutativitet med eksempel); identitetsmatrisen; invers: definisjon, entydighet, **2×2-standardformelen** $\frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$ (aktiv); **«inverterbar ⇔ $\det \ne 0$»** som navngitt kriterium; $\det(AB) = \det A \cdot \det B$ og korollaret $\det(A^n) = (\det A)^n$ (aktiv bruk); verifikasjonsregelen ($AB = I$ holder); matrisepotenser med strukturinnsikt (parametriserte familier $M(a)$, rotasjonstype-strukturer); matrise-vektor-produkt som forberedelse til 5.3.
- **Oppgavesjangre:** C. Mønstereksempel: «$A = \begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix}$. Finn $A^{-1}$ ved regning, og kontroller svaret.»
- **Typiske feil:** Bytte $b$/$c$-fortegnene i 2×2-formelen; glemme $1/\det$-faktoren; anta kommutativitet; konkludere inverterbarhet uten å ha regnet determinanten.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 5.3: Overgangsmatriser: modellering, matrisepotens og induksjon

- **id:** `mat1100-5-3` · **number:** 5.3 · **estimatedMinutes:** 60 · **prerequisites:** `mat1100-5-2`
- **kapitteltype:** teori
- **description:** Den anvendte gjengangeren (9 av 12 siste år): verbal modell → rekursjonslikninger → matrise, M^k fremover, det-kriteriet bakover — og induksjonsbeviset når mønsteret skal fastslås.
- **Forkunnskaper (kryssbok):** Kap. 5.2, 2.3 (rekursjon); [Induksjon](/bok/r1/r1-9-2) eller [Induksjonsbevis](/bok/r2/r2-1-6).
- **Eksamensbelegg:** Sjanger B i 12/21 sett — **9 av 12 siste år**; kontekstene varierer (aldersklasser, filialer, velgere, insekter, fisk, kaniner …), strukturen er identisk. Fasit begrunner **hver rad for seg** ut fra teksten; «finnes en vei tilbake?» = inverterbarhet via kofaktorutviklet determinant; begge det-utfall er testet over år (det = 0 i 2015/2018 → «nei»; det ≠ 0 i 2020 → «ja») — konklusjonen kan ikke pugges; likevekt/egenvektor-varianten 2006/2021 ($M\mathbf{v} = k\mathbf{v}$ for gitt $k$); endrede rater → ny matrise (2020). Sjanger L (induksjon): 3/21 (2010, 2012, 2015), **alltid koblet til matrisepotens**, ofte etterfulgt av grensebetraktning eller partall/oddetall-casedeling; ren tallteori-induksjon forekommer aldri i arkivet. Prioritet: **perfekt** (induksjonsdelen: kjenne).
- **Innholdskontrakt:** Modelleringsoppskriften (aktiv): (1) oversett den verbale modellen til **rekursjonslikninger** ($x_{n+1} = \dots$, $y_{n+1} = \dots$ — skriv ut alle ledd, også $0 \cdot$-leddene); (2) les av koeffisientene **rad for rad med begrunnelse fra teksten** før matrisen skrives ($\mathbf{x}_{n+1} = M\mathbf{x}_n$, rader = mottaker); (3) $k$ steg frem = $M^k$ med full utregning; (4) bakover: «entydig vei tilbake ⇔ $M$ inverterbar ⇔ $\det M \ne 0$» — regn determinanten og konkluder; **eksistens holder** (inversen regnes ikke ut med mindre det spørres); (5) likevekt/egenvektor: løs $M\mathbf{v} = k\mathbf{v}$ som lineært system; (6) endrede rater → sett opp ny matrise fra ny tekst. **Induksjonsmalen for matrisepotenser** (aktiv): regn $M^2$, $M^3$/$M^4$, gjett mønster for $M^n$ (eller $M^{2n}$), bevis med full struktur (basis verifisert mot regningen; trinn $M^{k+1} = M^k \cdot M$ elementvis); påbygg: langtidsgrense og partall/oddetall-casedeling.
- **Oppgavesjangre:** B + L. Mønstereksempel: «En insektbestand består av unge og voksne. Hver voksen får i snitt to avkom per sesong, og en tredel av de unge overlever til voksen alder. (a) Forklar hvorfor utviklingen kan skrives $\mathbf{x}_{n+1} = A\mathbf{x}_n$, og begrunn hver rad i $A$. (b) Finn matrisen som beskriver fire sesonger. (c) Kan man entydig regne seg én sesong bakover? Begrunn.»
- **Typiske feil:** Matrise satt opp etter magefølelse — rader/kolonner byttet (fasit krever begrunnelse rad for rad); regne ut inversen når bare eksistens spørres; pugge det-konklusjonen i stedet for å regne; induksjonsbevis uten eksplisitt basisverifikasjon eller uten elementvis trinn.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 5.4: Gradient og retningsderivert

- **id:** `mat1100-5-4` · **number:** 5.4 · **estimatedMinutes:** 55 · **prerequisites:** `mat1100-3-2`
- **kapitteltype:** teori
- **description:** Sjangeren med 100 % frekvens: partiellderiverte, ∇f, retningsderivert med kursets konvensjon, og «raskest vekst»-formuleringen som skal uttales verbalt.
- **Forkunnskaper (kryssbok):** Kap. 3.2, 5.1 (skalarprodukt); [Skalarproduktet](/bok/r2/r2-5-3).
- **Eksamensbelegg:** Sjanger A i **21/21 sett — nesten alltid åpningsoppgave**, 1–4 delpunkter; billige poeng med kjent oppskrift. Variantene: retningsderivert i gitt retning, raskest vekst-retning, maksimal vekstrate, retning med retningsderivert 0. Prioritet: **perfekt** — dette skal sitte i søvne.
- **Innholdskontrakt:** Partiellderiverte (definisjon via grense + praktisk regning komponentvis); $\nabla f$ satt sammen og evaluert i punktet; **retningsderivert med kursets konvensjon**: $f'(\mathbf{a}; \mathbf{r}) = \nabla f(\mathbf{a}) \cdot \mathbf{r}$ — gjelder ubetinget, **også for unormalisert $\mathbf{r}$**; normaliser KUN når oppgaven eksplisitt ber om enhetsvektor/«retningen til» (sjekk om gitt $\mathbf{r}$ alt er enhetsvektor); de tre verbalfaktaene (skal uttales i besvarelsen): $f$ vokser raskest i retningen til $\nabla f(\mathbf{a})$; maksimal vekstrate = $|\nabla f(\mathbf{a})|$; retningsderivert 0 ⇔ $\mathbf{r} \perp \nabla f(\mathbf{a})$ (finn slike retninger); kjerneregelen for kurver $\frac{d}{dt}f(\mathbf{r}(t)) = \nabla f \cdot \mathbf{r}'(t)$ (bruk); nivåkurver og gradientens ortogonalitet (kjennskap — tyngre topologi ble flyttet ut av pensum etter 2011).
- **Oppgavesjangre:** A. Mønstereksempel: «La $f(x, y, z) = x y^2 z^3$. (a) Finn $\nabla f(1, 1, 1)$. (b) I hvilken retning ut fra $(1,1,1)$ vokser $f$ raskest, og hva er vekstraten? Begrunn. (c) Finn en retning der retningsderiverten er 0.»
- **Typiske feil:** Normalisere når konvensjonen $f'(\mathbf{a};\mathbf{r}) = \nabla f \cdot \mathbf{r}$ gjelder direkte — eller la være når oppgaven ber om enhetsretning (begge dokumentert); oppgi $|\nabla f|$ som «retning»; svar uten den verbale begrunnelsen (ubegrunnet = 0); slurv i partiellderivasjon (behandle feil variabler som konstante).
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 5.5: Drill: gradientpakken som åpningsoppgave

- **id:** `mat1100-5-5` · **number:** 5.5 · **estimatedMinutes:** 90 · **prerequisites:** `mat1100-5-4`
- **kapitteltype:** drill
- **description:** Slutteksamenens faste åpning drillet til automatikk: alle fire variantene av gradient/retningsderivert-oppgaven med A-besvarelsens føring.
- **Eksamensbelegg:** Sjanger A (21/21, alltid tidlig) — analysens nivå 1 punkt 1: «billige poeng med kjent oppskrift». Variantkatalogen fra arkivet: evaluert retningsderivert (normalisert og unormalisert $\mathbf{r}$), raskest vekst + rate, nullretning, kjedet mot Jacobi/kurver. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) regn ALLE partiellderiverte komponentvis; (2) sett sammen $\nabla f$ og evaluer i punktet (vis innsettingen); (3) les oppgaven: står det «enhetsvektor»/«retningen til»? → normaliser; ellers bruk $\mathbf{r}$ direkte; (4) prikkprodukt med føring; (5) verbal konklusjonssetning med teoremfaktaene. Gjennomregnet eksamenscase med sensor-margnotater (hvor de billige poengene hentes og mistes). 8–12 varianter på eksamensnivå: to og tre variabler, alle fire spørsmålstypene, minst én med unormalisert $\mathbf{r}$ og én der gitt vektor alt er enhetsvektor, én kjedet mot nivåkurve/tangentplan-formulering.
- **Oppgavesjangre:** A. Mønstereksempel: «$g(x, y) = x^2 e^{3y} - y$. Finn retningsderiverten av $g$ i punktet $(2, 0)$ i retningen $\mathbf{r} = (3, 4)$, og avgjør om $g$ vokser eller avtar i denne retningen.»
- **Typiske feil:** Normaliseringsfellene i alle varianter under tidspress; manglende verbal begrunnelse; forveksle «retning for raskest vekst» (vektor) med «maksimal vekstrate» (tall).
- **Quiz: 15 · Flashcards: 5**

#### Kapittel 5.6: Jacobimatrisen og deriverbarhet i flere variable

- **id:** `mat1100-5-6` · **number:** 5.6 · **estimatedMinutes:** 40 · **prerequisites:** `mat1100-5-4`, `mat1100-3-1`
- **kapitteltype:** teori
- **description:** Jacobimatrisen av partiellderiverte og de to måtene å begrunne deriverbarhet på — teoremveien og definisjonsveien (2022-nivå).
- **Forkunnskaper (kryssbok):** Kap. 3.1, 5.2, 5.4.
- **Eksamensbelegg:** Sjanger N i 4/21 (2016, 2018, 2022 + flervalg): Jacobimatrise + deriverbarhetsbegrunnelse; skjerpet variant 2022 krevde definisjonen direkte (partiellderiverte via grensedefinisjon + restleddsgrense). Prioritet: **kunne** (definisjonsvarianten: kjenne).
- **Innholdskontrakt:** Vektorfunksjoner $F: \mathbb{R}^n \to \mathbb{R}^m$; **Jacobimatrisen** av partiellderiverte (rad = komponentfunksjon); deriverbarhetsdefinisjonen i flere variable: lineariseringsrestleddet $\frac{|F(\mathbf{x}) - F(\mathbf{a}) - M(\mathbf{x} - \mathbf{a})|}{|\mathbf{x} - \mathbf{a}|} \to 0$ med $M$ = Jacobimatrisen; **teoremveien** (hovedverktøy): «kontinuerlige partiellderiverte ⇒ deriverbar» — navngis/refereres slik fasit gjør; **definisjonsveien** (skjerpet variant): partiellderiverte via grensedefinisjonen + restleddsgrensen vist direkte; lineariseringen som beste lineære tilnærming (kobling til tangentplan-intuisjonen).
- **Oppgavesjangre:** N. Mønstereksempel: «$F(x, y) = (x^2 + y, \; xy, \; e^x - 1)$. Finn Jacobimatrisen til $F$ i origo, og begrunn at $F$ er deriverbar der.»
- **Typiske feil:** Transponert Jacobimatrise (rader/kolonner byttet); «deriverbar fordi partiellderiverte finnes» (kontinuitet av dem kreves for teoremet); restleddsgrense uten normering med $|\mathbf{x} - \mathbf{a}|$.
- **Quiz: 10 · Flashcards: 10**

**Prøve-kvote Del 5:** 4 prøver (spesifisert i §4).

---

### Del 6 — Taylor, rekker og differensialligninger *(prioritet: KJENNE — pensumkrav med tynt/null arkivbelegg)*

#### Kapittel 6.1: Taylorpolynomer med restledd

- **id:** `mat1100-6-1` · **number:** 6.1 · **estimatedMinutes:** 45 · **prerequisites:** `mat1100-3-4`, `mat1100-4-3`
- **kapitteltype:** teori
- **description:** Taylorpolynom rundt et punkt med Lagrange-restledd — pensumkrav som arkivet bare har testet som teorioppgave bygget fra bunnen.
- **Forkunnskaper (kryssbok):** Kap. 3.2, 3.4, 4.3; [Potensrekker og Taylor-rekker](/bok/s2/s2-7-4) (S2-nivå intuisjon).
- **Eksamensbelegg:** **Ærlig eksamensvinkel:** 1/21 — kun 2017, og da som teorioppgave der førsteordens restledd ble bygget fra bunnen via delvis integrasjon og brukt i et motsigelsesbevis med følger ($f \to 0$ og $f''$ begrenset ⇒ $f' \to 0$); implisitt verktøy 2023. Står i gjeldende emnebeskrivelse (arkivet stopper 2023 — kan ha fått større plass i nyere sett; sjekk nye sett når de foreligger). Prioritet: **kjenne**.
- **Innholdskontrakt:** Taylorpolynomet $T_n(x) = \sum_{k=0}^n \frac{f^{(k)}(a)}{k!}(x - a)^k$ (aktiv beregning rundt 0 og generelt $a$ for standardfunksjonene $e^x$, $\sin x$, $\cos x$, $\ln(1+x)$); **Lagrange-restleddet** $R_n(x) = \frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$ — formulering + bruk til feilestimat; **integralformen av restleddet bygget via delvis integrasjon** for $n = 1$ (2017-sjangeren — aktiv skisse); anvendelser: tilnærmingsverdier med feilgaranti, grenser via Taylor (alternativ til L'Hôpital); MVT som Taylor for $n = 0$ (rød tråd fra 3.4).
- **Oppgavesjangre:** I-variant + potensielt MV. Mønstereksempel: «Finn andregrads Taylorpolynom til $f(x) = \ln(1 + x)$ rundt $0$, og bruk restleddet til å avgrense feilen på $[0, 1/2]$.»
- **Typiske feil:** Glemme $k!$ i nevneren; evaluere restleddets deriverte i $a$ i stedet for i det ukjente punktet $c$; feilestimat uten å maksimere $|f^{(n+1)}|$ over intervallet.
- **Quiz: 10 · Flashcards: 15**

#### Kapittel 6.2: Uendelige rekker og konvergenstester

- **id:** `mat1100-6-2` · **number:** 6.2 · **estimatedMinutes:** 45 · **prerequisites:** `mat1100-2-3`, `mat1100-4-6`
- **kapitteltype:** teori
- **description:** Konvergens av rekker med sammenlignings-, forholds- og integraltest — pensumkrav uten én eneste arkivforekomst; lær metodene, ikke jag sjangre som ikke finnes.
- **Forkunnskaper (kryssbok):** Kap. 2.3, 4.6; [Uendelige rekker og konvergens](/bok/r2/r2-1-5), [Geometriske følger](/bok/r2/r2-1-3).
- **Eksamensbelegg:** **Ærlig eksamensvinkel: 0 forekomster i 21 slutteksamener og 16 midtveiseksamener.** Dekkes fordi gjeldende emnebeskrivelse eksplisitt nevner konvergensteori for rekker — og fordi metodene speiler 4.6 (der sammenligningslogikken ER eksamensstoff). Hvis temaet dukker opp i nyere sett, er verktøyene her det naturlige formatet. Prioritet: **kjenne**.
- **Innholdskontrakt:** Rekke som grense av delsummer; geometrisk rekke med sumformel og konvergenskriterium $|k| < 1$ (aktiv); divergenstesten ($a_n \not\to 0$ ⇒ divergens — og at $a_n \to 0$ IKKE er nok: harmonisk rekke); p-rekker (parallellen til p-integralene i 4.6 gjøres eksplisitt); **integraltesten** (broen til 4.6); **sammenlignings- og grensesammenligningstest** (samme disiplin som 4.6: navngi sammenligningsrekken); **forholdstesten** (kvotienttesten); alternerende rekker og Leibniz-kriteriet (kjennskap); absolutt vs. betinget konvergens (kjennskap); kobling til Taylorrekker (når $R_n \to 0$).
- **Oppgavesjangre:** Ingen arkivbelagt sjanger — oppgavene skrives i 4.6-format overført til rekker. Mønstereksempel: «Avgjør om $\sum_{n=1}^\infty \frac{n}{n^3 + 2}$ konvergerer, og navngi testen du bruker.»
- **Typiske feil:** «$a_n \to 0$, altså konvergerer rekken»; forholdstest med $L = 1$ tolket som konvergens (testen er inkonklusiv); sammenligning med feil ulikhetsretning; blande rekkesum og følgegrense.
- **Quiz: 10 · Flashcards: 15**

#### Kapittel 6.3: Differensialligninger: separable og lineære første ordens

- **id:** `mat1100-6-3` · **number:** 6.3 · **estimatedMinutes:** 40 · **prerequisites:** `mat1100-4-3`
- **kapitteltype:** teori
- **description:** Standardmetodene for første ordens differensialligninger — pensumkrav uten arkivforekomster, dekket kompakt med integrasjonsteknikkene fra Del 4.
- **Forkunnskaper (kryssbok):** Kap. 4.3–4.4; [Separable differensiallikninger](/bok/s2/s2-2-2), [Lineære differensiallikninger](/bok/s2/s2-2-3).
- **Eksamensbelegg:** **Ærlig eksamensvinkel: 0 forekomster i hele arkivet.** Dekkes fordi emnebeskrivelsen krever det; behandlingen er kompakt og gjenbruker integrasjonsteknikk-repertoaret (som ER 95 %-stoff). Sjekk nyere sett før eksamen — dukker temaet opp, er metodene her standardformatet. Prioritet: **kjenne**.
- **Innholdskontrakt:** Hva en løsning er (verifikasjon ved innsetting — åpne konstruksjonsoppgavers disiplin gjelder); **separable ligninger**: $y' = f(x)g(y)$ → separer, integrer begge sider, løs for $y$, sjekk konstantløsninger $g(y) = 0$; **lineære første ordens**: $y' + p(x)y = q(x)$ → integrerende faktor $e^{\int p\,dx}$ (aktiv); initialverdiproblemer (bestem konstanten); enkle modeller (eksponentiell vekst/avkjøling) som kontekst; retningsfelt (kjennskap).
- **Oppgavesjangre:** Ingen arkivbelagt sjanger — oppgaver i E-format med diffligning-ramme. Mønstereksempel: «Løs initialverdiproblemet $y' + 2y = e^{-x}$, $y(0) = 3$.»
- **Typiske feil:** Miste konstantløsningene ved separasjon; glemme integrasjonskonstanten før man løser for $y$ (plassere $C$ feil); integrerende faktor med fortegnsfeil i $\int p$; ikke verifisere løsningen.
- **Quiz: 10 · Flashcards: 15**

**Prøve-kvote Del 6:** 4 prøver (spesifisert i §4).

---

### Del 7 — Eksamenstrening

#### Kapittel 7.1: Føringsstandarden: slik skriver du en A-besvarelse

- **id:** `mat1100-7-1` · **number:** 7.1 · **estimatedMinutes:** 50 · **prerequisites:** Del 1–5
- **kapitteltype:** teori (metodekapittel)
- **description:** Sensorregelen «ubegrunnet svar = 0» operasjonalisert: teoremnavning, føringsboksene, lim-disiplinen og konklusjonssetningen — samlet på ett sted.
- **Eksamensbelegg:** Metaregel-kapittel bygget på fasitpraksis 2012–2020: (i) «Svar som ikke er begrunnet, får 0 poeng selv om de er riktige» (ordrett instruks 2012–2016, videreført siden, skjerpet på hjemmeeksamenene der all programbruk måtte forklares); (ii) teoremer navngis når de bærer argumentet (fasit markerer til og med $[0/0]$ før hver L'Hôpital; henvisning til nummererte pensumsetninger aksepteres); (iii) føringsstandarden (substitusjonsboks, u/v′-valg, fortegnsskjema, lim-føring, verbal konklusjonssetning, markert sluttsvar); (iv) delpunkt-kjedingen: fasit gjenbruker eksplisitt tidligere delsvar, og instruksen gir rett til å bruke resultater fra ubesvarte punkter; (v) alternative løsninger honoreres konsekvent (trippelprodukt vs. determinant, direkte vs. GS-test, to integrerbarhetsteoremer); (vi) i åpne oppgaver: eksempel + verifikasjon av ALLE krav; (vii) kalkulatorsnarveier underkjennes der regning etterspørres. Prioritet: **perfekt** (regelen bærer 2/3 av karakteren).
- **Innholdskontrakt:** «Begrunnelsestrappen» per sjanger: hva som er tilstrekkelig begrunnelse for A–N (én tabell); sjekklisten før innlevering (alle teoremnavn på plass? alle bokser ført? konklusjonssetninger? delpunkt-koblinger utnyttet?); to kontrastpar «samme matematikk, ulik føring» (én 0-poengs- og én full-scorings-versjon av samme løsning — ett integrasjons- og ett bevis-eksempel); strategien for kjedede delpunkter: les hele oppgaven først, bruk «anta resultatet fra (a)»-formuleringen når (a) ikke er løst.
- **Oppgavesjangre:** Meta. Mønstereksempel: «Besvarelsen under gir riktig svar, men ville fått 0 poeng. Pek på de tre manglene og skriv den om til full uttelling.»
- **Typiske feil:** Hele feilkatalogens føringsdel: uttalt begrensethet mangler i skvis, kontinuitet unevnt før skjæringssetningen, forutsetninger usjekket før Rolle, $[0/0]$ umarkert, «satt inn $\infty$», svar uten konklusjonssetning.
- **Quiz: 15 · Flashcards: 30** (teoremnavn-bank + føringsregler — flashcard-gull)

#### Kapittel 7.2: Midtveissimulering: komplett flervalgssett

- **id:** `mat1100-7-2` · **number:** 7.2 · **estimatedMinutes:** 120 · **prerequisites:** `mat1100-7-1` (+ Del 1–3)
- **kapitteltype:** øvingseksamen (flervalg)
- **description:** Fullt midtveissett etter arkivmalen: 20 nyskrevne flervalgsspørsmål på 2 timer med fasitens dramaturgi og distraktordesign.
- **Eksamensbelegg/miks:** Speiler H2012–H2018-malen (20 spm, 10×2 p + 10×3 p, 5 alternativer, ingen gjettestraff, 2 timer): **6 komplekse tall** (polarform begge veier som åpning, de Moivre-potens, n-te røtter, likning, polynomrekonstruksjon, geometrisk mengde) + **3 grenser** (dekker $1^\infty$/$\infty - \infty$/veksthierarki) + **3 derivasjon** (kjerneregel-tårn, logaritmisk, derivert av invers i punkt) + **2 drøfting** (skråasymptote $x e^{k/x}$, konveksitetsintervall) + **2 følger** (rasjonal, rekursiv med fikspunkt) + **2 teori/definisjon** (kvantorspørsmål med byttet rekkefølge som distraktor, MVT-formulering) + **2 tekstoppgaver med figur** (relaterte rater, optimering) — 2/3 regnetempo, ~20 % teorigjenkjenning, ~10 % modellering, i arkivets faste dramaturgi (komplekse først, teori + figuroppgaver sist). Alle spørsmål nyskrevne; hver distraktor bygget på en dokumentert felle. Løsningsforslag i `collapsible` per spørsmål: raskeste vei + hvorfor hver distraktor frister + tidsbudsjett-tips (6 min/oppgave; 2-poengs først).
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 7.3: Slutteksamen-simulering 1: klassisk 12-delpunkts sett

- **id:** `mat1100-7-3` · **number:** 7.3 · **estimatedMinutes:** 240 · **prerequisites:** `mat1100-7-2` (+ Del 4–5)
- **kapitteltype:** øvingseksamen (langsvar)
- **description:** Komplett 4-timers slutteksamen etter 2018–2023-malen med prognosens temamiks og kjedede delpunkter.
- **Eksamensbelegg/miks:** Speiler post-2017-malen (12 delpunkter som teller likt, 4 timer, «begrunn alle svar»): **gradient/retningsderivert-åpning** (2 delpunkter: $\nabla f$ + raskest vekst, sjanger A) → **overgangsmatrise-case** (3 delpunkter: modell rad for rad → $M^k$ → inverterbarhet, sjanger B; nyskrevet kontekst, det ≠ 0-utfallet) → **integrasjonsteknikk-kjede** (2 delpunkter: substitusjon → delvis; delbrøk/fullført kvadrat-kombinasjon, sjanger E) → **uegentlig integral** (1 delpunkt, GS-test med navngitt p-integral, sjanger F) → **omdreiningsvolum om y-aksen** (1 delpunkt, skallmetoden, sjanger D) → **signaturoppgave** (2 delpunkter: kontinuitet med skvis + deriverbarhet med definisjonen, oscillasjonsfamilien, sjanger H) → **FTC + kjerneregel** (1 delpunkt, sjanger J). Delpunktene kjedes som i arkivet (faktorisering fra ett punkt gjenbrukes senere; instruksen «resultater fra ubesvarte punkter kan brukes» gjengis). Alle oppgaver nyskrevne. Løsningsforslag i `collapsible` per delpunkt som A-besvarelse etter 7.1-standarden, med `tip`-notat om tidsbudsjett (~18–20 min/delpunkt) og hvor begrunnelsespoengene sitter.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 7.4: Slutteksamen-simulering 2: teoritung variant

- **id:** `mat1100-7-4` · **number:** 7.4 · **estimatedMinutes:** 240 · **prerequisites:** `mat1100-7-3`
- **kapitteltype:** øvingseksamen (langsvar)
- **description:** Komplett sett nummer to med bevis-tung hale: Rolle med hjelpefunksjon, komplekse tall og de sjangrene simulering 1 ikke traff.
- **Eksamensbelegg/miks:** Speiler samme mal, men dekker restsjangrene (sammen dekker 7.3 + 7.4 alle A–N): **gradient-åpning i variant** (retningsderivert med unormalisert $\mathbf{r}$ + nullretning, sjanger A) → **determinant/volum** (pyramide fra fire punkter + invers 2×2 ved regning, sjanger C) → **matrisepotens med induksjon** (2 delpunkter: mønster for $M^{2n}$ + induksjonsbevis + grensebetraktning, sjanger L/B) → **komplekse tall** (2 delpunkter: vis at $z_0$ er rot → begge faktoriseringene, sjanger G) → **integrasjonsteknikk** (1 delpunkt, kjede) → **omvendt volumoppgave** (gitt volumkrav, finn parameter — fri parameter velges med begrunnelse, sjanger D) → **Rolle-bevis med hjelpefunksjon** (1 delpunkt, forutsetningssjekk + navngiving, sjanger I) → **Jacobimatrise + deriverbarhet** (1 delpunkt, teoremveien, sjanger N) → **funksjonsdrøfting** (1 delpunkt: asymptoter + konveksitet, sjanger K). Alle oppgaver nyskrevne; løsningsforslag som A-besvarelse med vektings-/tidstips per delpunkt.
- **Quiz: 5 · Flashcards: 0**

**Prøve-kvote Del 7:** ingen egne temaprøver — simuleringene (7.2–7.4) er delens prøver.

---

### Summeringskontroll (quiz/flashcards) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 10 | 10 |
| 1 | 1.1–1.4 | 25+20+25+20 = **90** | 25+25+20+5 = **75** |
| 2 | 2.1–2.5 | 20+25+20+15+20 = **100** | 20+20+15+20+5 = **80** |
| 3 | 3.1–3.6 | 15+25+20+15+20+15 = **110** | 15+20+15+20+15+10 = **95** |
| 4 | 4.1–4.7 | 10+15+20+15+20+15+15 = **110** | 15+10+20+15+5+15+15 = **95** |
| 5 | 5.1–5.6 | 15+15+15+20+15+10 = **90** | 15+15+15+20+5+10 = **80** |
| 6 | 6.1–6.3 | 10+10+10 = **30** | 15+15+15 = **45** |
| 7 | 7.1–7.4 | 15+5+5+5 = **30** | 30+0+0+0 = **30** |
| **Sum** | **36 kap.** | **570 ≥ 500 ✓** | **510 ≥ 500 ✓** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler eksamensvektene: Del 1–3 (midtveisstoffet) bærer 300 av 570
quiz — quizbanken ER midtveistreningen og skrives i flervalgsformat med
distraktorer fra feilkatalogen. Del 4–5 (slutteksamensryggraden) bærer 200 quiz
+ de tyngste oppgavekvotene i kapitlene.

---

## 4. Prøver og simuleringer

### Kapittel-/temaprøver (4 per temadel 1–6, 24 totalt)

Alle prøver består av nyskrevne oppgaver i arkivets sjangre, med løsningsforslag
etter føringsstandarden (7.1) og poengfordeling. Midtveisformat = flervalg med
5 alternativer; langsvar = full begrunnelse.

**Del 1 — Komplekse tall**
1. Prøve 1.A (30 min, flervalg): Polarform begge veier + geometri i planet — 8 spørsmål i midtveistempo (kap. 1.1).
2. Prøve 1.B (30 min, flervalg): de Moivre — potenser, n-te røtter, argument-dobling — 8 spørsmål (kap. 1.2).
3. Prøve 1.C (40 min, langsvar): Likninger og faktorisering — vis rot → begge faktoriseringer + rekonstruksjon (kap. 1.3, sjanger G i slutteksamensform).
4. Prøve 1.D (45 min, blandet): Full midtveisblokk — 6 flervalg på klokka + 1 langsvar med føringskrav (hele delen).

**Del 2 — Grenser, følger og kontinuitet**
1. Prøve 2.A (30 min, flervalg): Definisjonene — kvantorspørsmål, negasjoner, teoremformuleringer (kap. 2.1, 2.4).
2. Prøve 2.B (35 min, flervalg): Grensetempo — alle sju ubestemte former (kap. 2.2).
3. Prøve 2.C (40 min, langsvar): Følger — rekursiv følge med fikspunkt/monotoni/begrensethet + åpen konstruksjonsoppgave med verifikasjon (kap. 2.3).
4. Prøve 2.D (45 min, langsvar): Eksistensbevis — skjæringssetnings-mal + ε-δ-bevis med δ = min-grepet (kap. 2.1, 2.4, sjanger I).

**Del 3 — Derivasjon**
1. Prøve 3.A (35 min, flervalg): Derivasjonsteknikk i midtveistempo — kjerneregel-tårn, logaritmisk, derivert av invers i punkt (kap. 3.1–3.2).
2. Prøve 3.B (50 min, langsvar): Signaturoppgaven — oscillasjonsfamilien med kontinuitet, deriverbarhet og $f'$-kontinuitet + parametervariant (kap. 3.3, sjanger H på eksamensnivå).
3. Prøve 3.C (40 min, langsvar): MVT/Rolle — hjelpefunksjonsbevis med forutsetningssjekk + korollarbruk (kap. 3.4, sjanger I).
4. Prøve 3.D (45 min, blandet): Drøfting + anvendelser — skråasymptote-familien, fullt fortegnsskjema, én relatert rate med figur (kap. 3.5–3.6, sjanger K + M).

**Del 4 — Integrasjon**
1. Prøve 4.A (40 min, langsvar): Substitusjon og delvis med føringsbokser — inkl. én konstruksjonsoppgave (kap. 4.3).
2. Prøve 4.B (40 min, langsvar): Rasjonale integrander — delbrøk med gjentatt faktor + fullført kvadrat/splitt (kap. 4.4).
3. Prøve 4.C (45 min, langsvar): Uegentlige integraler — én direkte beregning med lim-føring + to konvergensavgjørelser (én per test) med navngitt p-integral (kap. 4.6, sjanger F).
4. Prøve 4.D (60 min, langsvar): Integrasjons-delpunktkjede på eksamensnivå — teknikk-kjede → FTC/kjerneregel → omdreiningsvolum om y-aksen (kap. 4.2–4.7, sjanger E + J + D som kjedet eksamensoppgave).

**Del 5 — Lineær algebra og flervariabel**
1. Prøve 5.A (35 min, langsvar): Determinant og volum — pyramide fra fire punkter (begge metoder honoreres) + invers ved regning (kap. 5.1–5.2, sjanger C).
2. Prøve 5.B (50 min, langsvar): Overgangsmatrise-case — modell rad for rad, $M^k$, inverterbarhet (det = 0-utfallet), endrede rater (kap. 5.3, sjanger B).
3. Prøve 5.C (40 min, langsvar): Gradientpakken — alle fire spørsmålsvariantene inkl. normaliseringsfellene (kap. 5.4–5.5, sjanger A).
4. Prøve 5.D (50 min, langsvar): Kombinert — gradient-åpning + induksjonsbevis for matrisepotens + Jacobimatrise med deriverbarhetsbegrunnelse (kap. 5.3–5.6, sjanger A + L + N).

**Del 6 — Taylor, rekker og differensialligninger**
1. Prøve 6.A (30 min, langsvar): Taylorpolynom med restleddsestimat (kap. 6.1).
2. Prøve 6.B (30 min, langsvar): Rekkekonvergens — tre rekker, tre tester, alle navngitt (kap. 6.2).
3. Prøve 6.C (30 min, langsvar): Differensialligninger — én separabel + én lineær med integrerende faktor, begge med verifikasjon (kap. 6.3).
4. Prøve 6.D (40 min, blandet): Tverrgående — 2017-inspirert teorioppgave (restledd via delvis integrasjon) + GS-test-parallellen rekke/integral (kap. 6.1–6.2 + 4.6).

### Simuleringer (3 komplette sett — se kap. 7.2–7.4)

| Sett | Form den speiler | Miks |
|---|---|---|
| Midtveissimulering (kap. 7.2) | Midtveis H2012–H2018 | 20 flervalg / 2 t: 6 komplekse + 3 grenser + 3 derivasjon + 2 drøfting + 2 følger + 2 teori + 2 figuroppgaver |
| Slutteksamen-simulering 1 (kap. 7.3) | Post-2017-mal, prognosens miks | 12 kjedede delpunkter / 4 t: A(2) + B(3) + E(2) + F(1) + D(1) + H(2) + J(1) |
| Slutteksamen-simulering 2 (kap. 7.4) | Samme mal, teoritung variant | 12 delpunkter / 4 t: A(1) + C(2) + L/B(2) + G(2) + E(1) + D(1) + I(1) + N(1) + K(1) |

Til sammen dekker de tre settene samtlige sjangre A–N + MV minst én gang.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **To eksamener, to treningsformer** — vurderingsformen, den nesten disjunkte
   temadelingen midtveis/slutt, formathistorikken og prognosene (fra kap. 0.1).
2. **Prioriteringskartet** — frekvens-tabellene omgjort til tre lesenivåer:
   perfekt (Del 1, kap. 3.3 + gradient 5.4–5.5, integrasjon 4.3–4.7,
   overgangsmatriser 5.3), kunne (Del 2, resten av Del 3, 4.1–4.2, 5.1–5.2, 5.6),
   kjenne (Del 6, induksjonsdelen av 5.3, definisjonsvarianten i 5.6) — med
   ærlighetsnotatet om 0-frekvenstemaene.
3. **Sjangerguiden** — A–N + MV med løsningsoppskriftene fra drillkapitlene
   (1.4, 2.5, 3.3, 4.5, 5.5) i kortform.
4. **Sensorreglene** — «ubegrunnet = 0», teoremnavning, føringsstandarden,
   delpunkt-gjenbruk, definisjonskravet, alternative løsninger honoreres
   (fra kap. 7.1) + karakterskille-listen (definisjonsbruk, oscillasjonsfellen,
   fullførte bevis, delpunkt-koblinger, randtilfeller, verifiserte eksempler).
5. **Feilkatalogen** — de 12 typiske feilene fra analysen samlet, hver med
   henvisning til kapitlet som forebygger den.
6. **Formelliste i kursets notasjon** — teorem- og formelapparatet fra
   innholdskontraktene (skvis, standardgrenser, L'Hôpital-disiplin,
   skjæringssetning, MVT/Rolle + korollarer, grense-av-derivert, FTC +
   kjerneregel, p-integraler + tester, volumformlene med aksevalg, de Moivre +
   konjugatrot, determinant/volum + 1/6, $\nabla f$ og $f'(\mathbf{a};\mathbf{r})$,
   Jacobimatrise) — med markering *utlede aktivt* vs. *kun bruke*.
7. **Studieløp** — 12-ukers plan synkronisert med semesteret: Del 0 → Del 1–3 +
   midtveissimulering FØR midtveis i oktober (1/3 av karakteren!); deretter
   Del 4–5 → Del 6 → prøver → slutteksamen-simuleringene de to siste ukene
   under tidspress (240 min, ~18 min/delpunkt). 3-ukers intensivvariant for
   bare slutteksamen: Del 4–5 + 3.3 + 7.1 + simuleringene.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `mat1100` med alle 36
   kapitler (id/number/title/description/estimatedMinutes/topics/prerequisites)
   etter mønster `COURSE_BI_OKONOMI`, + `sectionNames` fra §2-tabellen.
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–N/MV og frekvenstallene
   som resten refererer til.
3. **Midtveis-kritiske deler i avhengighetsrekkefølge**: Del 1 → Del 2 → Del 3
   (studenter møter midtveis først — bokas verdi står og faller på at disse er
   komplette tidlig).
4. **Slutteksamens-ryggraden**: Del 4 → Del 5 (5.1–5.3 kan bygges parallelt med
   Del 4; 5.4–5.6 krever 3.2).
5. Del 6 → Del 7 (simuleringene til slutt — de gjenbruker alt).
6. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert
   som kapitlene ferdigstilles; temaprøvene (§4) legges som prøvekapitler
   (`mat1100-<del>-prove`, chapterNumber `<del>.P`) etter plattformens mønster.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser (`json.load`); generer JSON
      via `json.dump`, ikke håndskriving — LaTeX krever `\\` i JSON-strenger;
      `npm run build` grønn.
- [ ] **LaTeX**: all matematikk i `$...$`/`$$...$$`; ingen unicode-brøker;
      konsistent notasjon: $\nabla f$, $f'(\mathbf{a}; \mathbf{r})$, $M^k$,
      $re^{i\theta}$, $\bar{z}$, $[0/0]$-markering i løsninger.
- [ ] **Notasjonskonsistens (grep over alle mat1100-filer)**: retningsderivert
      skrives $f'(\mathbf{a}; \mathbf{r})$ — ALDRI $D_{\mathbf{v}}f$ eller
      $\partial f/\partial \mathbf{v}$; «GS-testen» og «p-integral» brukes som
      fasitspråk; overgangsmodeller som $\mathbf{x}_{n+1} = M\mathbf{x}_n$.
- [ ] **Føringsstandard i ALLE løsningsforslag**: substitusjonsboks med nye
      grenser; dokumentert u/v′-valg; fortegnsskjema; lim-føring for uegentlige
      integraler; teoremnavn; verbal konklusjonssetning. Ubegrunnet fasitsvar
      i et løsningsforslag er en byggefeil.
- [ ] **Deriverbarhet i punkt**: alle løsninger bruker grensedefinisjonen (eller
      eksplisitt begrunnet grense-av-derivert); INGEN løsning konkluderer «ikke
      deriverbar» fra at $\lim f'$ ikke finnes.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med
      tallene fra dette skjelettet — inkl. ærlighetsnotatene i Del 6),
      Forkunnskaper-blokk med kryssbok-lenker (kun til kapitler som finnes —
      verifiser id-ene), `collapsible` Symbol- og formelliste per delkapittel,
      Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå), 6–12
      øvinger med `solution` + `hints`, repetisjons-`collapsible`; drillkapitler
      har løsningsoppskrift + sensor-kommentert case + 8–15 oppgaver.
- [ ] **Quiz-sum ≥ 570 og flashcard-sum ≥ 510** per kvotetabellen
      (kontrollsummér mot §3-tabellen); quiz i Del 1–3 skrives som
      midtveisflervalg (5 alternativer, distraktorer fra feilkatalogen).
- [ ] **Prøver**: 4 per temadel 1–6 (24 stk) + midtveissimulering + 2
      slutteksamen-simuleringer som sammen dekker A–N + MV.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, funksjoner og
      kontekster; ingen formuleringer fra reelle sett eller fasiter
      (skjelettets mønstereksempler er selv omskrivninger og skal varieres
      videre, ikke kopieres ordrett inn); pensumboka refereres, aldri siteres
      i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og
      narrativ-ruter (200 + innholdssjekk), jf. `getChapterMeta`-lærdommen.





# Bokskjelett: MAT2200 Grupper, ringer og kropper (UiO) — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er destillert fra `EKSAMENSANALYSE.md`
> (UiOs MAT2200-arkiv: deleksamener V2004–V2005 + ordinære eksamener V2004–V2023,
> ~43 filer med oppgavesett og offisielle løsningsforslag/sensorveiledninger).
> Arketype: **DNA-regnefag** (`DNA-regnefag.md`) — men med et **avgjørende
> skifte**: MAT2200 er et **bevisemne** (~85–90 % av poengene krever et begrunnet
> argument, ikke et tall), så boka bygges rundt **bevishåndverk**, ikke
> talljakt. Kapittel-DNA-ene fra regnefag-malen gjelder, men «løsningen» i hvert
> eksempel er et **skrevet bevis** i A-besvarelse-form. Format-forbilde:
> `../mat121-uib/SKJELETT.md` (v3, teori-/bevisfag med egen bevis-del).
> Pensumbok: **John B. Fraleigh, *A First Course in Abstract Algebra*** — boka
> speiler Fraleighs struktur (grupper → ringer → kropper → Galois), notasjon
> (`Z_n`, `S_n`, `A_n`, `⟨a⟩`, `[K:k]`, `irr(α,k)`, `G(K/Q)`, `E^H`) og bevisstil.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `mat2200` |
| Tittel | **MAT2200 Grupper, ringer og kropper** |
| Level | `'Høyskole'` |
| Institusjon | Universitetet i Oslo (UiO) |
| Arketype | Regnefag (men **bevisdrevet** teorifag — abstrakt algebra på Fraleighs struktur) |
| Antall kapitler | **39** (2 eksamenskart/bevishåndverk + 32 tema/bevis/drill + 1 spesialsjangre + 3 øvingseksamener + 1 bevisverksted) |
| Estimert totaltid | **~2 830 min ≈ 47 timer** |
| Quiz totalt | **593** (krav ≥500) |
| Flashcards totalt | **690** (krav ≥500; sikt 600–700 for et definisjons-/teoremrikt bevisfag) |

**Pitch (ett avsnitt):** MAT2200 er UiOs dedikerte innføringsemne i abstrakt
algebra — gruppeteori, ringteori og kroppsteori helt fram til Galois-teori — og
det mest **bevistunge** emnet i bachelorløpet. To trekk styrer hele bokdesignet.
**(1) Formatet er ekstremt stabilt:** 4 timer, **ingen hjelpemidler**, karakter
A–F, undervisning og eksamen på **engelsk**, **4 oppgaver med lik vekt** delt i
deloppgaver a–d, og hvert sett treffer nesten **hele pensumbredden** samtidig
(gruppeteori → permutasjons-/ringteori → ringer/endelige kropper →
kroppsutvidelser/Galois). De fleste kjernetemaene har derfor gjenganger-score
70–100 %. **(2) Alt skal bevises:** «Justification must be provided for all
solutions» står på hvert sett; et riktig tall uten argument gir nesten null.
Boka lærer studenten å **føre bevis**, ikke å regne. Fordi hvert sett dekker
bredden, handler prioriteringen ikke om *hvilke temaer*, men om *hvilke
standardargumenter* som må sitte automatisk. **Fire argumentmaskiner bærer
eksamen** og får hvert sitt drillkapittel: (i) **strukturteoremet for endelige
abelske grupper** (kap. 5.2), (ii) **Sylow + telleargument → normal delgruppe**
(kap. 4.4), (iii) **kvotient-kriteriet for prim/maksimal + kjerne-snarveien for
idealer** (kap. 6.4), og (iv) **tårnformelen + Galois-korrespondansen** (delt på
to koblede driller: tårnformel-beregning i kap. 8.3 og full Galois-oppskrift i
kap. 9.4). Ryggraden er kroppsutvidelser/tårnformel/minimalpolynom (~95 %) og
splittkropp/Galois-gruppe/korrespondanse (~90 %, **nesten alltid siste
oppgave**). Sensorregelen som preger alt: **hvert logisk steg står — forutsetning
navngis, teoremet navngis (Sylow, Lagrange, Eisenstein, strukturteoremet,
isomorfiteoremet, hovedsetningen i Galois-teori), konklusjonen trekkes
eksplisitt — og «Alternatively:»-bevissthet (vis nabometoden) premieres.**

### 1.5 Kritiske stil-, notasjons- og bevisregler (gjelder HELE boka)

1. **Alt begrunnes; løsningen ER et bevis.** Ordrett eksamensinstruks: «Justification
   must be provided for all solutions.» Et riktig sluttsvar uten føring gir nær
   null. Hvert eksempel og hver oppgaveløsning skrives som **A-besvarelse**: kort,
   fullstendig bevis der (a) forutsetningen navngis, (b) teoremet som bærer
   argumentet navngis, (c) konklusjonen trekkes eksplisitt. Idealet er Fraleighs
   fasitstil: én til noen få linjer per delpunkt, men hvert logisk steg synlig.
2. **Fraleigh er notasjonsstandard:** `Z_n`, `Z_n*`/`U(Z_n)` (enheter), `S_n`,
   `A_n`, `D_n` (diedral); syklenotasjon $(a_1\,a_2\,\dots\,a_k)$;
   $\langle a\rangle$ (generert undergruppe **og** prinsipalideal); $H\trianglelefteq G$
   (normal); $[G:H]$ (indeks); $G/H$ (kvotient); $H\times K$ (direkte produkt);
   $R/I$ (kvotientring); $k[x]/\langle f\rangle$; $\operatorname{irr}(\alpha,k)$
   (minimalpolynom); $[K:k]$ (utvidelsesgrad); $G(K/Q)$ eller $\operatorname{Gal}(K/Q)$;
   $E^H$ (fikskropp); $\zeta_n$ (primitiv $n$-te enhetsrot); $F_{p^n}$/$\mathrm{GF}(p^n)$;
   Frobenius $\sigma_p$, $\sigma_p(a)=a^p$.
3. **Tospråklig begrepsbank (eksamen er på engelsk).** Hvert fagbegrep introduseres
   med **norsk forklaring + engelsk term i parentes** ved første forekomst:
   normal undergruppe (*normal subgroup*), integritetsområde (*integral domain*),
   maksimalideal (*maximal ideal*), kroppsutvidelse (*field extension*), splittkropp
   (*splitting field*), fikskropp (*fixed field*), enhetsrot (*root of unity*). Hvert
   teorikapittel har en `collapsible` **Symbol-, formel- og begrepsliste (norsk/
   engelsk)** rett etter Forkunnskaper, som forklarer ALLE symboler og gir det
   tospråklige termparet for delkapitlet. **Flashcards koder termparet** (norsk
   forklaring ↔ engelsk + norsk term), slik at studenten kan lese en engelsk
   oppgavetekst og svare på engelsk.
4. **Eksakte, «pene» tall og små strukturer.** Fordi det ikke er hjelpemidler,
   arbeides det i $Z_n$ for lite $n$ ($Z_2,Z_3,Z_5,Z_6,Z_{10},Z_{12}$), i
   $S_4/A_4/S_5$, og med grupper av liten faktoriserbar orden (12, 18, 20, 27, 99,
   105, 200, 1225). Splittkropper er $\mathbb{Q}(\sqrt2,\sqrt5)$,
   $\mathbb{Q}(\sqrt[3]{2},i\sqrt3)$, $\mathbb{Q}(2^{1/p},\zeta_p)$. Alle svar
   eksakte; oppgi **alltid tallverdier eksplisitt**: gruppeorden, $[K:Q]$, antall
   elementer $p^n$, konkret basis $\{1,\alpha,\dots,\alpha^{n-1}\}$, Sylow-tallene
   $N_p$.
5. **Teoremer navngis når de bærer argumentet:** **Lagranges teorem**, **Cauchys
   teorem**, **Sylow-teoremene I–III**, **strukturteoremet for endelig genererte
   abelske grupper**, **isomorfiteoremet** ($G/\ker\varphi\cong\operatorname{im}\varphi$),
   **kvotient-kriteriet** (prim ⇔ $R/I$ int.område; maksimal ⇔ $R/I$ kropp),
   **Eisensteins kriterium**, **tårnformelen** ($[K:k]=[K:E][E:k]$), **hovedsetningen
   i Galois-teori** (korrespondansen). Sensor forventer at studenten peker på
   teoremet som bærer konklusjonen.
6. **«Alternatively:»-bevissthet er designet inn.** Fasiten viser gjennomgående
   **to veier** til samme svar; å se nabometoden signaliserer modenhet og
   premieres. Hvert relevant kapittel viser begge: **undergruppetest vs. fulle
   aksiomer** (1.1), **ideal som kjerne vs. direkte absorpsjonssjekk** (6.2),
   **kvotient-kriterium vs. direkte prim/maksimal-argument** (6.3),
   **coprime-produkt vs. eksplisitt isomorfi** (3.3). Bevisverkstedet (12.1)
   samler «Alternatively»-katalogen.
7. **Ekvivalenskjeder skal stå fullt ut.** F.eks. «$k[x]/\langle f\rangle$ kropp
   ⇔ $\langle f\rangle$ maksimal ⇔ $f$ irredusibel ⇔ (grad ≤ 3) ingen rot i $k$» —
   alle ledd forventes, ikke bare konklusjonen. **Irredusibilitet må bevises, ikke
   antas:** for grad ≤ 3 «ingen rot ⇒ irredusibel *fordi* enhver faktorisering ville
   gi en lineær faktor og dermed en rot»; for grad ≥ 4 Eisenstein eller eksplisitt
   faktoriseringsforsøk.
8. **Ærlighet om format og arkiv.** (a) Primærmålet er den **hjelpemiddelfrie,
   fullt beviste** 4-oppgavers skoleeksamenen (2006–2019, 2023) — apparatet må
   kunne reproduseres utenat. (b) Korona-hjemmeeksamenene (V2020 5 oppgaver, V2022
   «all aids» + eksplisitte poeng) endret ikke oppgavetypene; boka trener
   utenat-produksjonen som normalform, men kap. 0.1 og øvingseksamen 3 (12.4)
   dekker 5-oppgavers-varianten. (c) Verifiser format og gjeldende Fraleigh-utgave
   mot første sett etter analysedato. Fasitene er **skrevne, fullstendige bevis**,
   så metode- og stringens-kravene er lest direkte ut av dem (ikke utledet).

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): grupper er grunnspråket;
permutasjonsgrupper er verktøykassen (og byggeklosser i Galois); homomorfier/
kvotienter/isomorfiteoremene er maskineriet; gruppevirkning bærer Sylow;
strukturteoremet klassifiserer abelske grupper; ringer/idealer overfører
gruppemaskineriet til multiplikativ struktur; polynomringer gir irredusibilitet;
kroppsutvidelser + tårnformel er ryggraden; Galois-teori er toppen (og siste
oppgave); endelige kropper er den økende spesialiseringen; spesialsjangre er
«bør kjenne til»; eksamenstreningen er sist. **Frekvensen styrer omfanget**, ikke
rekkefølgen: de fem nivå 1-temaene får teori + eget drillkapittel; nivå 3 får ett
kompakt kapittel. Seksjonstitler (blir `sectionNames` i metadata):

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart og bevishåndverk | 2 | Prioriteringsverktøy + den bærende ferdigheten (~85–90 % bevis). Bevishåndverk-kapitlet er unikt for dette bevisemnet. |
| 1 | Grupper, undergrupper og Lagranges teorem | 5 | «Vis at (mengde) er gruppe/undergruppe» ~70 % (ofte 1a) + Lagrange + sykliske ~40 % → teori + drill. |
| 2 | Permutasjonsgrupper | 2 | Syklenotasjon/paritet/orden=mfm/konjugasjon ~65 %; fast verktøysett + byggekloss i Galois → 2 fokuserte kap. |
| 3 | Homomorfier, kvotientgrupper og isomorfiteoremene | 4 | Homomorfi/isomorfiteorem ~65 %, direkte produkt ~60 %, orden i produkt + kvotient opp til iso ~50 % → maskineriet. |
| 4 | Gruppevirkninger og Sylow-teoremene | 4 | Sylow ~85 % (gjennomgripende) + gruppevirkning ~40 % → **argumentmaskin (ii)** → teori + drill. |
| 5 | Klassifikasjon av endelige abelske grupper | 2 | Strukturteoremet ~80 %, mekanisk men må være feilfri → **argumentmaskin (i)** → teori + drill. |
| 6 | Ringer, idealer og kvotientringer | 4 | Idealer prim/maksimal via kvotient ~75 % (ringteoriens ryggrad) + nulldelere ~40 % → **argumentmaskin (iii)** → teori + drill. |
| 7 | Polynomringer og faktorisering | 2 | Irredusibilitet/Eisenstein ~60 % + polynomdivisjon → ideal ~25 % → 2 kap. |
| 8 | Kroppsutvidelser, tårnformelen og minimalpolynom | 3 | **~95 %** — grunnlaget for halve eksamenen → **argumentmaskin (iv) del 1** → teori + tårnformel-drill. |
| 9 | Galois-teori | 4 | **~90 %, nesten alltid SISTE oppgave** — mest forutsigbar tross vanskeligst → **argumentmaskin (iv) del 2** → teori + full Galois-drill. |
| 10 | Endelige kropper | 2 | **Økende vekt** (V2019–2023): Frobenius, primitive polynomer, $F_{16}$ ~65 % → eget kapittelpar. |
| 11 | Spesialsjangre og passer-linjal | 1 | Nilpotente, automorfigrupper/kommutatorer, uendelige moteksempler, cyklisk-karakterisering, passer-linjal (~5–15 %, «kjenne») → ett kompakt kapittel. |
| 12 | Eksamenstrening | 4 | Bevisverkstedet (8 maskiner + «Alternatively»-katalog) + 3 komplette øvingseksamener (4-opp. skoleeksamen ×2 + 5-opp. korona-variant). |

**Avvik fra DNA-malen (dokumentert):**

1. **39 kapitler — over DNA-taket (20–35).** Begrunnet i PRODUKSJONSLOYPE-lærdommen
   «≥500 er et gulv» og «bøker med >32 kapitler → tilsvarende høyere sum»: MAT2200
   er et **komplett innføringsemne som dekker tre klassiske fagfelt** (gruppe-,
   ring- og kroppsteori) i ett, og hvert sett treffer nesten hele bredden — så
   bredden kan ikke kuttes. Kapitlene holdes fokuserte; de fem drillkapitlene og
   bevisverkstedet bærer mye av tellingen.
2. **«Løsningen» er et bevis, ikke et tall (hele boka).** Regnefag-DNA-ens
   `example`/`exercise` beholdes, men innholdet er **skrevne bevis i
   A-besvarelse-form** med navngitte teoremer og forutsetningssjekk. Dette er
   emnets kjennemerke (analysen §4) og skjelettets viktigste kalibrering.
3. **Eget bevishåndverk-kapittel i Del 0 (kap. 0.2)** i tillegg til eksamenskartet.
   Fordi ~85–90 % av poengene er bevisføring, får den generiske ferdigheten
   («hvordan skrive et algebrabevis: navngi teorem, sjekk forutsetning, skill ⇒/⇔,
   se Alternatively-snarveien») et eget kapittel før det faglige starter — og et
   **bevisverksted** (kap. 12.1) som konsoliderer de åtte standardargumentene.
4. **Fire argumentmaskiner, hver med eget drillkapittel** (4.4, 5.2, 6.4, 8.3+9.4).
   Maskin (iv) tårnformel + Galois-korrespondanse er så tung at den deles på to
   koblede driller (tårnformel-beregning 8.3; full splittkropp→Galois-gruppe→
   korrespondanse 9.4). Dette speiler at halve eksamenen hviler på grad-regning og
   at siste oppgave nesten alltid er en full Galois-analyse.
5. **Tospråklig begrepsbank (norsk/engelsk)** i hvert kapittel og i flashcards,
   fordi eksamensteksten er på engelsk mens boka er på norsk bokmål (regel 1.5.3).
   Dette er et lånt element (utover ren regnefag-DNA) drevet av emnets
   engelskspråklige eksamen.
6. **Passer-og-linjal-konstruksjon nedprioritert til delkapittel** (~5 %): i
   pensum, men nesten fraværende i oppgavesettene → dekkes kort i kap. 11.1 som
   «bør kjenne til», ikke eget kapittel.

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–N) refererer til
oppgavetype-katalogen i analysen §3, gjengitt i bokas Del 0: **A** vis at (mengde)
er gruppe/undergruppe; **B** klassifiser endelige abelske grupper av gitt orden;
**C** orden av element (mfm) + kvotientgruppe opp til isomorfi; **D** permutasjons-/
symmetriske grupper (syklenotasjon, paritet, konjugasjon); **E** gruppevirkning,
baner, stabilisatorer, fikspunkt; **F** Sylow-teoremene + strukturkonklusjon; **G**
nulldelere, integritetsområder, enheter; **H** idealer, prim-/maksimalidealer; **I**
polynomringer, irredusibilitet, faktorisering; **J** endelige kropper og enkle
kroppsutvidelser; **K** kroppsutvidelser, tårnformelen, minimalpolynom; **L**
splittkropper og Galois-teori; **M** homomorfier, isomorfiteoremet, direkte
produkt; **N** spesialsjangre (nilpotente, automorfigrupper, uendelige
moteksempler, cyklisk-karakterisering, passer-linjal).
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

**Aktiveringsmarkør for forkunnskaper:** MAT2200 bygger på et innledende UiO-emne
i «tall og gruppeteori» (grunnleggende gruppeteori + modulær aritmetikk) som
foreløpig ikke er bygget. Referanser dit skrives som klartekst med markøren
*(forgjenger i tall-/gruppeteori — ikke bygget ennå; aktiver lenke når den
finnes)*. Referanser til **bygde** bøker lenkes normalt (kun til kapitler som
finnes — verifiseres i fase 6): **Matematikk for økonomer** (`bi-okonomi`,
Høyskole) dekker matriseregning på innføringsnivå (anker for matrisegrupper);
**R1/R2** dekker bevisføring, vektorer og komplekse tall fra VGS. Modulær
aritmetikk ($Z_n$) og grunnleggende gruppeteori bygges opp fra grunnen i Del 1.

---

### Del 0 — Eksamenskart og bevishåndverk

#### Kapittel 0.1: Eksamenskartet: én bred bevistung eksamen, fire argumentmaskiner

- **id:** `mat2200-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Slik testes MAT2200: den brede eksamenen som treffer nesten hele pensum hvert år, det bevistunge regimet (~85–90 %), de fire argumentmaskinene som bærer settet, sjangerkatalogen A–N med frekvenser, sensorreglene og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet. Skal gjengi: (i) **vurderingsformen**: én avsluttende **4-timers skriftlig skoleeksamen**, karakterskala A–F, **ingen hjelpemidler** (apparatet må sitte utenat), undervisning og eksamenstekst på **engelsk**, to godkjente obligatoriske innleveringer kreves; (ii) **formathistorikken**: papir 2006–2019 (4 oppgaver lik vekt, deloppgaver a–d), korona V2020 (5 oppgaver), V2021 (4), V2022 (4 oppgaver, «all aids», eksplisitte poeng), retur til skoleeksamen V2023 — **temaene og oppgavetypene er bemerkelsesverdig stabile, bare regimet svinger**; (iii) **den brede eksamenen**: ett sett treffer typisk (1) gruppeteori (aksiomer/klassifikasjon/Sylow), (2) permutasjons- eller ringteori, (3) ringer/idealer eller endelige kropper, (4) kroppsutvidelser/Galois — så kjernetemaene har gjenganger-score 70–100 %; (iv) **temafrekvens-tabellen** (kroppsutvidelser+tårnformel ~95 %, splittkropp+Galois ~90 %, Sylow ~85 %, klassifikasjon abelske ~80 %, idealer prim/maksimal ~75 %, vis gruppe/undergruppe ~70 %, permutasjon ~65 %, endelige kropper ~65 %, homomorfi/isomorfiteorem ~65 %, direkte produkt ~60 %, polynomirredusibilitet ~60 %, orden+kvotient ~50 %, nulldelere ~40 %, sykliske ~40 %, normale/kvotient direkte ~40 %, gruppevirkning ~40 %, cyklotomiske ~35 %, polynomdivisjon→ideal ~25 %, nilpotente ~15 %, automorfigrupper ~15 %, passer-linjal ~5 %); (v) **de fire argumentmaskinene** (strukturteoremet, Sylow-eksklusjon, kvotient-kriteriet, tårnformel+Galois-korrespondanse) presentert som eksamenens bæresøyler; (vi) **karakterskillene** (bestått ≈ mekanikken: aksiomsjekk, faktorisering+strukturteorem, orden=mfm, evaluering av $f$ i alle $Z_p$-elementer, oppsett av tårnet, $|G|=[K:Q]$; midtsjikt ≈ + fullt Sylow-argument med eksklusjon, kvotient-kriteriet, minimalpolynom+basis, korrekt splittkropp med grad; toppsjikt ≈ Galois-korrespondansen begge veier, fikskropp-bestemmelse med gradargument, coprime-produkt med full injektivitet/surjektivitet, Frobenius-argumenter, «Alternatively»-snarveiene).
- **Innholdskontrakt:** Sjangerkatalogen A–N presenteres som studentens sjekkliste med frekvens per sjanger; **prognosen for neste ordinære eksamen** (4 oppgaver, lik vekt, deloppgaver a–d, engelsk, ingen hjelpemidler): **O1 (gruppeteori)** vis at (mengde) er gruppe + list abelske grupper av gitt orden + et element-orden-/kvotient- eller Sylow-spørsmål; **O2 (permutasjons-/ringteori)** symmetrisk gruppe (syklenotasjon, paritet, $A_n$) eller ring (nulldelere, integritetsområde, ideal via kjerne); **O3 (ringer/endelige kropper)** prim/maksimalideal via kvotient-kriteriet eller $Z_p[x]/\langle f\rangle$ som endelig kropp (irredusibilitet, antall elementer, basis, Frobenius); **O4 (Galois)** splittkropp til en konkret $f(x)$, $[K:Q]$ via tårnformelen, Galois-gruppe ($S_3/D_4/V/$ syklisk$/S_5$), mellomkropp/fikskropp via korrespondansen. Ærlighetsforbeholdet: antall oppgaver kan bli 5 (V2020) og et hjemmeeksamensregime kan gjeninnføres — tren den hjelpemiddelfrie, fullt beviste produksjonen som primærmål. Leseplan: Del 0 (bevishåndverk) → Del 8 (tårnformel, ryggraden) → Del 9 (Galois, siste oppgave) er tyngdepunktet; Del 4/5/6 bærer gruppe-/ringmaskineriet.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «hvert sett dekker hele bredden — lag en pugge-plan for de teoremene du må kunne navngi og bevise utenat» og «identifiser hvilken av de fire argumentmaskinene hver av fjorårets fire oppgaver hvilte på».
- **Typiske feil:** Metafeilene: lese pensum lineært uten å prioritere de fire argumentmaskinene; tro at et riktig sluttsvar holder (bevisføringen er det som måles); undervurdere at emnet ikke er åpen bok (teoremer må kunne formuleres, bevises OG anvendes utenat); hoppe over Galois fordi den er vanskeligst (den er mest forutsigbar og garantert siste oppgave).
- **Quiz: 10 · Flashcards: 14** (frekvenser, sjangerkatalog A–N, formatregimer, de fire maskinene, sensorregler)

**Prøve-kvote Del 0:** ingen (metadel).

#### Kapittel 0.2: Bevishåndverk: slik skriver du et algebrabevis (med tospråklig begrepsbank)

- **id:** `mat2200-0-2` · **number:** 0.2 · **estimatedMinutes:** 55 · **prerequisites:** ingen
- **kapitteltype:** teori (metode)
- **description:** Den bærende ferdigheten i et emne der ~85–90 % av poengene er bevis: hvordan et algebrabevis føres — navngi teoremet, sjekk forutsetningene, skill ⇒ og ⇔, før ekvivalenskjeder fullt ut, og se «Alternatively»-snarveien — pluss den tospråklige begrepsbanken (norsk forklaring + engelsk term) som lar deg lese en engelsk oppgave og svare på engelsk.
- **Forkunnskaper (kryssbok):** Ingen algebraiske forkunnskaper. [Bevis og matematisk argumentasjon](/bok/r2/r2-6-6) (generell bevisføring, induksjon, kontrapositiv fra VGS). *(forgjenger i tall-/gruppeteori — ikke bygget ennå; aktiver lenke når den finnes)* for modulær aritmetikk.
- **Eksamensbelegg:** Metaregel-kapittel bygget på de stående oppgaveinstruksene og fasitstilen (arkivet V2006–V2023): (i) «Justification must be provided for all solutions» på hvert sett; (ii) V2022 (poengsatt): «most points given for the justification», ikke for svaret; (iii) fasitens idealsvar er korte, fullstendige bevis med **navngitt teorem** per steg; (iv) «Alternatively:»-varianter gjennom hele arkivet. Prioritet: **perfekt** (ferdigheten bærer hele karakteren).
- **Innholdskontrakt:** **Bevisanatomi:** identifiser gitt vs. skal-vises; velg bevisform (direkte, kontrapositiv, motsigelse, dobbel inklusjon $A\subseteq B$ og $B\subseteq A$, ordenstelling); **navngi teoremet** som bærer hvert steg og **sjekk forutsetningene** eksplisitt (Sylow krever endelig gruppe; Eisenstein krever et primtall som deler alle koeffisienter unntatt den ledende og hvis kvadrat ikke deler konstantleddet; tårnformelen krever endelige grader). **Skill ⇒ og ⇔:** i en «hvis og bare hvis» må begge retninger vises. **Ekvivalenskjeder fullt ut** (mønstereksempel: $k[x]/\langle f\rangle$ kropp ⇔ $\langle f\rangle$ maksimal ⇔ $f$ irredusibel ⇔ (grad ≤ 3) ingen rot i $k$). **«Alternatively»-tenkning:** to veier til samme svar (undergruppetest vs. aksiomer; ideal som kjerne vs. absorpsjon; kvotient-kriterium vs. direkte). **Tospråklig begrepsbank:** kjerneterminologien norsk↔engelsk (gruppe/*group*, undergruppe/*subgroup*, normal undergruppe/*normal subgroup*, kvotientgruppe/*quotient group*, homomorfi/*homomorphism*, kjerne/*kernel*, integritetsområde/*integral domain*, ideal/*ideal*, maksimalideal/*maximal ideal*, kroppsutvidelse/*field extension*, minimalpolynom/*minimal polynomial*, splittkropp/*splitting field*, Galois-gruppe/*Galois group*, fikskropp/*fixed field*) med en modell for å lese engelsk oppgavetekst og føre svaret på engelsk. Én fullstendig modellbevis-gjennomgang («vis at $\sqrt2\notin\mathbb{Q}$» eller «vis at $\langle a\rangle$ er en undergruppe») annotert med hva sensor ser etter i hvert steg.
- **Oppgavesjangre:** Meta/bevis. Mønstereksempel: «Nedenfor står to besvarelser av samme påstand; den ene får full uttelling, den andre nær null. Pek på hva som mangler (ingen navngitt teorem, bare én retning av ⇔ vist, forutsetning ikke sjekket) og skriv om til A-nivå.»
- **Typiske feil:** Bevis uten navngitt teorem / forutsetningssjekk; forveksle ⇒ og ⇔ (bare én vei vist); regne på et talleksempel i stedet for å bevise generelt; hoppe over ledd i en ekvivalenskjede; anta det som skal vises.
- **Quiz: 12 · Flashcards: 28** (bevisformer, teoremnavn-bank, forutsetningssjekklister, tospråklige termpar — flashcard-gull for et engelskspråklig bevisemne)

**Prøve-kvote Del 0:** ingen (metadel).

---

### Del 1 — Grupper, undergrupper og Lagranges teorem *(prioritet: PERFEKT/KUNNE — vis gruppe ~70 %, ofte 1a)*

#### Kapittel 1.1: Gruppeaksiomene og undergruppetesten

- **id:** `mat2200-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** `mat2200-0-2`
- **kapitteltype:** teori
- **description:** Gruppeaksiomene sjekket i fast rekkefølge, og den avgjørende snarveien: gjenkjenn en mengde som undergruppe av en kjent gruppe og bruk undergruppetesten i stedet for de fulle aksiomene — sjanger A, nesten alltid oppgave 1a.
- **Forkunnskaper (kryssbok):** Kap. 0.2. *(forgjenger i tall-/gruppeteori — grunnleggende gruppebegrep; aktiver lenke når den finnes)*. Ingen abstrakt algebra forutsettes; alt bygges fra aksiomene.
- **Eksamensbelegg:** Sjanger A (~70 %), **nesten alltid oppgave 1a**. Fasitens grep: sjekk lukkethet → assosiativitet → nøytralt element → invers, kompakt på én linje hver; **foretrukket snarvei:** gjenkjenn mengden som undergruppe av en kjent gruppe (f.eks. $S=\{2^n\}$ som den sykliske undergruppa av $(\mathbb{Q}^*,\cdot)$ generert av 2) — da holder undergruppetesten. For «ikke en gruppe»: pek på aksiomet som svikter ($\mathbb{Z}_{\ge 0}$ mangler additive inverser). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Gruppe** (*group*): mengde $G$ med binær operasjon som er lukket og assosiativ, har nøytralt element $e$ og inverser; **abelsk** (*abelian*); orden $|G|$; orden av element $|a|$ (minste $n>0$ med $a^n=e$). **Undergruppe** (*subgroup*) $H\le G$; **undergruppetesten** (*one-step*/*two-step subgroup test*): $H\ne\varnothing$, lukket under operasjon og invers (ekvivalent: $ab^{-1}\in H$). Standardgrupper: $(\mathbb{Z},+)$, $(\mathbb{Z}_n,+)$, $(\mathbb{Z}_n^*,\cdot)=U(\mathbb{Z}_n)$, $(\mathbb{Q}^*,\cdot)$, $S_n$, $D_n$, $GL_n$/$SL_n$. **«Alternatively»-paret** (regel 1.5.6): full aksiomsjekk vs. undergruppetest på samme mengde. «Ikke gruppe»-diagnostikk: identifiser det sviktende aksiomet.
- **Oppgavesjangre:** A. Mønstereksempel: «Vis at mengden $\{2^n : n\in\mathbb{Z}\}$ er en gruppe under multiplikasjon — først ved aksiomene, deretter kortere ved å gjenkjenne den som en undergruppe av $(\mathbb{Q}^*,\cdot)$. Er $\mathbb{Z}_{\ge 0}$ en gruppe under addisjon? Begrunn.»
- **Typiske feil:** Hevde at en mengde er gruppe uten å sjekke inverser/lukkethet (særlig for delmengder av $\mathbb{Z}$; $\mathbb{Z}_{\ge 0}$ er den klassiske fella); bruke fulle aksiomer der undergruppetesten er nok (tidssløsing); glemme å vise at operasjonen er lukket; forveksle nøytralt element i additiv vs. multiplikativ notasjon.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 1.2: Matrisegrupper og konkrete gruppeeksempler

- **id:** `mat2200-1-2` · **number:** 1.2 · **estimatedMinutes:** 50 · **prerequisites:** `mat2200-1-1`
- **kapitteltype:** teori
- **description:** De konkrete gruppene eksamen elsker: matrisegrupper over endelige kropper (øvre triangulære, Heisenberg, affine ax+b-grupper) vist ved lukkethet + eksplisitt invers, og hvordan orden og abelskhet avgjøres.
- **Forkunnskaper (kryssbok):** Kap. 1.1. [Matriser og matriseregning](/bok/bi-okonomi/bi-okonomi-9-1) og [Determinanter og invers matrise](/bok/bi-okonomi/bi-okonomi-9-2) (matriseprodukt og invers fra økonomi-innføringen).
- **Eksamensbelegg:** Sjanger A (matrisegruppe-varianten), del av de ~70 %. Fasitens grep: for matrisegrupper vises lukkethet + eksplisitt invers; assosiativitet **arves** fra $M_n(R)$ (nevnes, ikke bevises på nytt); orden telles ved å telle frie parametre; abelskhet avgjøres ved et konkret motpar. Prioritet: **kunne**.
- **Innholdskontrakt:** **Matrisegrupper:** $GL_n(k)$, $SL_n(k)$ over en kropp $k$; øvre triangulære $\left(\begin{smallmatrix}a&b\\0&c\end{smallmatrix}\right)$ med $a,c\in k^*$; **affin gruppe** $\left(\begin{smallmatrix}a&b\\0&1\end{smallmatrix}\right)$, $a\in\mathbb{Z}_n^*$, $b\in\mathbb{Z}_n$ («$ax+b$-gruppen»); **Heisenberg-gruppen** $H$ over $\mathbb{Z}_3$. Teknikk: lukkethet (produkt har samme form), eksplisitt invers (skriv den ut), assosiativitet arvet fra $M_n$; **orden** = produkt av antall valg for hver fri parameter ($|GL_2(\mathbb{Z}_p)|=(p^2-1)(p^2-p)$ som kjennskap; affin gruppe over $\mathbb{Z}_n$ har orden $|\mathbb{Z}_n^*|\cdot n$); **abelsk?** — regn et konkret motpar $AB\ne BA$. «Alternatively»: gjenkjenn den affine gruppa som semidirekte struktur (kjennskap).
- **Oppgavesjangre:** A. Mønstereksempel: «Vis at matrisene $\left(\begin{smallmatrix}a&b\\0&1\end{smallmatrix}\right)$ med $a\in\mathbb{Z}_6^*$, $b\in\mathbb{Z}_6$ danner en gruppe under matrisemultiplikasjon. Er den abelsk? Hva er ordenen?»
- **Typiske feil:** Glemme å skrive ut inversen eksplisitt (påstå at den finnes); bevise assosiativitet på nytt i stedet for å arve den fra $M_n$; telle ordenen feil (glemme at $a$ må være enhet); påstå abelsk uten å teste et konkret par; regne matriseprodukt i feil ring (ikke redusere mod $n$).
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 1.3: Lagranges teorem, orden av element og indeks

- **id:** `mat2200-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `mat2200-1-1`
- **kapitteltype:** teori
- **description:** Kosetter, Lagranges teorem og de umiddelbare følgene — element-orden deler gruppeorden, grupper av primtallsorden er sykliske — verktøyet som bærer nesten alle tellingsargumenter i faget.
- **Forkunnskaper (kryssbok):** Kap. 1.1. *(forgjenger i tall-/gruppeteori — kosetter; aktiver lenke når den finnes)*.
- **Eksamensbelegg:** Bærende hjelpeteorem gjennom hele arkivet (brukes i Sylow, i klassifikasjon, i kroppsteori via $|G(K/Q)|$). Fasitens grep: **Lagrange** navngis eksplisitt når $|H|$ deler $|G|$, og indeksen $[G:H]=|G|/|H|$ regnes. Prioritet: **perfekt** (som argumentbærer).
- **Innholdskontrakt:** Venstre-/høyrekosetter $aH$, $Ha$; kosettene partisjonerer $G$ og har lik størrelse; **Lagranges teorem** (*Lagrange's theorem*): $|H|$ deler $|G|$, $[G:H]=|G|/|H|$; **følger**: orden av element deler gruppeorden ($a^{|G|}=e$); enhver gruppe av primtallsorden er syklisk; $[G:H]=2\Rightarrow H\trianglelefteq G$ (kjennskap, bro til Del 3); Eulers/Fermats teorem som gruppeteoretisk følge i $\mathbb{Z}_n^*$. **Merk (regel 1.5.5):** Lagrange navngis når den bæres inn i et telleargument — sensor forventer navnet, ikke bare tallet.
- **Oppgavesjangre:** A + F-forberedelse. Mønstereksempel: «La $|G|=35$. Vis at ethvert element $\ne e$ har orden 5, 7 eller 35, og at $G$ har en undergruppe av orden 5.» (Lagrange + Cauchy-forberedelse).
- **Typiske feil:** Bruke Lagrange «baklengs» (anta at det for hver divisor $d$ av $|G|$ finnes en undergruppe av orden $d$ — gjelder ikke generelt, kun for abelske/sykliske); glemme å navngi Lagrange i telleargumentet; forveksle orden av element og orden av gruppe; regne indeks feil vei.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 1.4: Sykliske grupper: undergrupper, generatorer og φ(d)-telling

- **id:** `mat2200-1-4` · **number:** 1.4 · **estimatedMinutes:** 50 · **prerequisites:** `mat2200-1-3`
- **kapitteltype:** teori
- **description:** Sykliske grupper fullstendig kartlagt: undergrupper svarer bijektivt til divisorer d|n, hver med φ(d) generatorer, og kvotient av syklisk er syklisk — grunnlaget for klassifikasjon og for cyklisk-karakteriseringen i Del 11.
- **Forkunnskaper (kryssbok):** Kap. 1.3. *(forgjenger — modulær aritmetikk i $\mathbb{Z}_n$; aktiver lenke når den finnes)*.
- **Eksamensbelegg:** Sjanger relatert (~40 % som deloppgave), og byggekloss overalt. Fasitens grep: undergrupper av $\langle a\rangle$ av orden $n$ ↔ divisorer $d\mid n$; antall generatorer $=\varphi(d)$; $\sum_{d\mid n}\varphi(d)=n$. Prioritet: **kunne**.
- **Innholdskontrakt:** **Syklisk gruppe** (*cyclic group*) $\langle a\rangle$; endelig ($|a|=n$, isomorf med $\mathbb{Z}_n$) vs. uendelig (isomorf med $\mathbb{Z}$); undergruppene til en endelig syklisk gruppe av orden $n$ er **nøyaktig** $\langle a^{n/d}\rangle$ av orden $d$ for hver $d\mid n$ (én for hver divisor); **generatorer** av $\mathbb{Z}_n$ er $\{k : \gcd(k,n)=1\}$, antall $=\varphi(d)$ for undergruppa av orden $d$; **$\sum_{d\mid n}\varphi(d)=n$** (brukes i cyklisk-karakteriseringen, kap. 11.1); kvotient og undergruppe av syklisk er syklisk. Eulers $\varphi$-funksjon og beregning.
- **Oppgavesjangre:** A/B-forberedelse. Mønstereksempel: «List alle undergruppene til $\mathbb{Z}_{12}$, angi ordenen og antall generatorer for hver, og verifiser $\sum_{d\mid 12}\varphi(d)=12$.»
- **Typiske feil:** Tro at det finnes flere enn én undergruppe per divisor (i syklisk gruppe er den entydig); forveksle antall elementer av orden $d$ med antall undergrupper; regne $\varphi$ feil for primpotenser; anta at alle grupper er sykliske.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 1.5: Drill: vis at (mengde) er gruppe/undergruppe

- **id:** `mat2200-1-5` · **number:** 1.5 · **estimatedMinutes:** 85 · **prerequisites:** `mat2200-1-4`
- **kapitteltype:** drill
- **description:** Hele «vis at det er en gruppe»-repertoaret drillet til automatikk: velg mellom full aksiomsjekk og undergruppetest, håndter matrisegrupper med eksplisitt invers, diagnostiser «ikke en gruppe», og før hvert svar som et kompakt bevis.
- **Eksamensbelegg:** Dekker sjanger A samlet (~70 %, ofte oppgave 1a). Variantkatalogen: tallmengde-undergruppe av $(\mathbb{Q}^*,\cdot)$ eller $(\mathbb{Z}_n,+)$; matrisegruppe (triangulær/affin/Heisenberg) med orden + abelskhet; «ikke en gruppe» (pek på aksiomet); undergruppe-verifikasjon via ettstegs-testen. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** (1) gjenkjenn om mengden ligger i en kjent gruppe → undergruppetest (raskest); ellers full aksiomsjekk. (2) Undergruppetest: ikke-tom (inneholder $e$), lukket under operasjon, lukket under invers — én linje hver. (3) Matrisegruppe: lukkethet (produktform), eksplisitt invers, assosiativitet arvet fra $M_n$; tell orden; test abelskhet med et par. (4) Konkluder med navngitt kriterium. **Gjennomregnet eksamenscase** (affin gruppe over $\mathbb{Z}_6$: gruppe? abelsk? orden?) med sensor-margnotater om hva som gir uttelling (eksplisitt invers, arvet assosiativitet nevnt, orden begrunnet). 10–15 oppgaver på eksamensnivå: minst én undergruppe-av-kjent-gruppe, én matrisegruppe med orden, én «ikke gruppe», én der undergruppetesten er den elegante veien.
- **Oppgavesjangre:** A, alle varianter. Mønstereksempel: «(a) Vis at $\{z\in\mathbb{C}^*:|z|=1\}$ er en undergruppe av $(\mathbb{C}^*,\cdot)$. (b) Vis at de øvre triangulære $2\times2$-matrisene over $\mathbb{Z}_3$ med enheter på diagonalen danner en gruppe; finn ordenen. (c) Er $(\mathbb{Z}_{\ge0},+)$ en gruppe?»
- **Typiske feil:** Hele føringsfellekatalogen fra 1.1–1.2 under tidspress; velge full aksiomsjekk der undergruppetesten er nok; glemme eksplisitt invers i matrisegruppe; ikke navngi kriteriet; telle orden feil.
- **Quiz: 16 · Flashcards: 6**

**Prøve-kvote Del 1:** 4 prøver (spesifisert i §4).

---

### Del 2 — Permutasjonsgrupper *(prioritet: KUNNE — ~65 %, fast verktøysett + byggekloss i Galois)*

#### Kapittel 2.1: Symmetriske grupper, syklenotasjon og paritet

- **id:** `mat2200-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `mat2200-1-1`
- **kapitteltype:** teori
- **description:** Permutasjonenes verktøykasse: skriv sammensetninger i disjunkt syklenotasjon, regn paritet via transposisjoner, og gjenkjenn A_n som de like permutasjonene — grunnlaget for orden, konjugasjon og Galois-gruppa på røttene.
- **Forkunnskaper (kryssbok):** Kap. 1.1. *(forgjenger — funksjonssammensetning; aktiver lenke når den finnes)*.
- **Eksamensbelegg:** Sjanger D (~65 %), som deloppgave og som byggekloss i Galois-oppgaven (Galois-gruppa er en undergruppe av $S_n$ på røttene). Fasitens grep: skriv i **disjunkt syklenotasjon**; paritet via at $(a_1\dots a_k)=(a_1a_k)\cdots(a_1a_2)$ er produkt av $k-1$ transposisjoner. Prioritet: **kunne**.
- **Innholdskontrakt:** **Symmetrisk gruppe** (*symmetric group*) $S_n$, orden $n!$; **syklenotasjon** $(a_1\,a_2\,\dots\,a_k)$; enhver permutasjon som produkt av **disjunkte** sykler (kommuterer); **transposisjon** (2-sykel); paritet/**fortegn** (*sign/parity*) $\varepsilon(\sigma)$: en $k$-sykel er produkt av $k-1$ transposisjoner, så **3-sykel er even (partall), 4-sykel er odd (oddetall)**; **alternerende gruppe** (*alternating group*) $A_n$ = de like permutasjonene, orden $n!/2$, normal i $S_n$ (indeks 2); $A_n$ ikke abelsk for $n\ge3$ (bro til 2.2). Sammensetning leses høyre-til-venstre (Fraleighs konvensjon — presisér).
- **Oppgavesjangre:** D. Mønstereksempel: «La $\sigma=(1\,3\,5)(2\,4)$ og $\tau=(1\,2\,3\,4)$ i $S_5$. Skriv $\sigma\tau$ i disjunkt syklenotasjon og avgjør pariteten til hver av $\sigma$, $\tau$, $\sigma\tau$.»
- **Typiske feil:** Sammensette i feil rekkefølge (venstre/høyre-konvensjon); regne paritet feil (glemme at en $k$-sykel har paritet $(-1)^{k-1}$); tro at $A_n$ ikke er normal; blande fortegn og orden.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 2.2: Orden = mfm, konjugasjon og A_n ikke abelsk

- **id:** `mat2200-2-2` · **number:** 2.2 · **estimatedMinutes:** 50 · **prerequisites:** `mat2200-2-1`
- **kapitteltype:** teori
- **description:** De tre standardgrepene eksamen krever på permutasjoner: orden = minste felles multiplum av syklelengdene, konjugasjonsformelen ρ(a₁…aₖ)ρ⁻¹=(ρa₁…ρaₖ), og et konkret motpar som viser at A_n ikke er abelsk.
- **Forkunnskaper (kryssbok):** Kap. 2.1.
- **Eksamensbelegg:** Sjanger D (~65 %), og konjugasjon er byggekloss i gruppevirkning/Sylow (Del 4) og Galois. Fasitens grep: **orden = mfm av syklelengder**; konjugasjon omdøper elementene i syklene. Prioritet: **kunne**.
- **Innholdskontrakt:** **Orden av en permutasjon = minste felles multiplum (mfm) av lengdene i disjunkt syklenotasjon** (bevises via at disjunkte sykler kommuterer); **konjugasjonsformelen** $\rho(a_1\,a_2\,\dots\,a_k)\rho^{-1}=(\rho(a_1)\,\rho(a_2)\,\dots\,\rho(a_k))$ (konjugerte permutasjoner har samme syklestruktur — bro til baner under konjugasjon, Del 4); **$A_n$ ikke abelsk** for $n\ge3$: regn $\sigma_1\sigma_2\ne\sigma_2\sigma_1$ for to konkrete 3-sykler; en sykel av odde lengde $2m+1$ har $\sigma^2$ igjen en $(2m+1)$-sykel (fast oppgavevariant). Transitiv virkning: konstruer $\sigma=\sigma_j\sigma_i^{-1}$ som sender $i\to j$ (kjennskap).
- **Oppgavesjangre:** D. Mønstereksempel: «Finn ordenen til $(1\,2\,3)(4\,5)\in S_5$. Vis at $A_4$ ikke er abelsk ved et konkret par, og bruk konjugasjonsformelen til å skrive $(1\,4\,2)$ som konjugat av $(1\,2\,3)$.»
- **Typiske feil:** Regne orden som produkt (ikke mfm) av syklelengder; feil i konjugasjonsformelen (bytte retning); påstå $A_n$ ikke abelsk uten et konkret motpar; glemme at ikke-disjunkte sykler først må skrives disjunkt før mfm-regelen brukes.
- **Quiz: 16 · Flashcards: 20**

**Prøve-kvote Del 2:** 4 prøver (spesifisert i §4).

---

### Del 3 — Homomorfier, kvotientgrupper og isomorfiteoremene *(prioritet: KUNNE — homomorfi/isomorfiteorem ~65 %, direkte produkt ~60 %)*

#### Kapittel 3.1: Normale undergrupper og kvotientgrupper

- **id:** `mat2200-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `mat2200-1-3`
- **kapitteltype:** teori
- **description:** Når kosettene selv danner en gruppe: normale undergrupper (gNg⁻¹=N), kvotientgruppa G/N med kosett-multiplikasjon, og hvordan orden og struktur til G/N avgjøres.
- **Forkunnskaper (kryssbok):** Kap. 1.3 (kosetter, Lagrange), 1.4 (syklisk kvotient).
- **Eksamensbelegg:** Sjanger relatert (~40 % direkte), og fundament for isomorfiteoremet og idealer (Del 6). Fasitens grep: verifisér normalitet ($gNg^{-1}=N$ eller kjerne), regn $|G/N|=|G|/|N|$, konstater abelsk der $G$ er abelsk. Prioritet: **kunne**.
- **Innholdskontrakt:** **Normal undergruppe** (*normal subgroup*) $N\trianglelefteq G$: $gNg^{-1}=N$ for alle $g$ (ekvivalent: venstre- = høyrekosetter); alle undergrupper av abelsk gruppe er normale; indeks-2-undergrupper er normale; **kvotientgruppe** (*quotient/factor group*) $G/N$ med veldefinert operasjon $(aN)(bN)=abN$ (veldefinerthet krever normalitet — vis dette); $|G/N|=[G:N]=|G|/|N|$; kvotient av abelsk er abelsk. Standardeksempler: $\mathbb{Z}/n\mathbb{Z}\cong\mathbb{Z}_n$, $S_n/A_n\cong\mathbb{Z}_2$. Bro: normalitet er det som gjør kjernen til en homomorfi til en «snill» undergruppe (3.2) og idealer til «snille» delringer (6.2).
- **Oppgavesjangre:** M-forberedelse. Mønstereksempel: «Vis at $N=\{e,(1\,2)(3\,4),(1\,3)(2\,4),(1\,4)(2\,3)\}$ er normal i $A_4$, og bestem $A_4/N$ opp til isomorfi.»
- **Typiske feil:** Anta at enhver undergruppe er normal (gjelder kun abelske); definere kvotient-operasjonen uten å sjekke veldefinerthet; regne $|G/N|$ feil; forveksle $gNg^{-1}=N$ (mengdelikhet) med $gng^{-1}=n$ (elementvis — for sterkt).
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 3.2: Homomorfier, kjerne og isomorfiteoremet

- **id:** `mat2200-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `mat2200-3-1`
- **kapitteltype:** teori
- **description:** Gruppeteoriens motorvei: en homomorfi bestemmes av kjernen (alltid normal) og bildet, og isomorfiteoremet G/ker φ ≅ im φ gir kvotienters struktur nesten gratis — snarveien fasiten foretrekker overalt.
- **Forkunnskaper (kryssbok):** Kap. 3.1 (normale undergrupper), 1.3 (Lagrange).
- **Eksamensbelegg:** Sjanger M (~65 %), som teknikk innbakt i F/H/L. Fasitens grep: verifisér homomorfi-egenskapen, regn **kjernen** (= normal undergruppe), bruk **isomorfiteoremet** $G/\ker\varphi\cong\operatorname{im}\varphi$ til å identifisere kvotienten. Prioritet: **perfekt** (som argumentbærer), **kunne** (som selvstendig tema).
- **Innholdskontrakt:** **Homomorfi** (*homomorphism*) $\varphi:G\to H$, $\varphi(ab)=\varphi(a)\varphi(b)$; egenskaper ($\varphi(e)=e$, $\varphi(a^{-1})=\varphi(a)^{-1}$); **kjerne** (*kernel*) $\ker\varphi=\{a:\varphi(a)=e\}$ er en **normal** undergruppe; **bilde** (*image*) $\operatorname{im}\varphi$ er undergruppe; $\varphi$ injektiv ⇔ $\ker\varphi=\{e\}$; **isomorfi** (*isomorphism*), **automorfi** (*automorphism*); **første isomorfiteorem** $G/\ker\varphi\cong\operatorname{im}\varphi$ (navngis). «Alternatively»-snarvei: i stedet for å bygge kvotienten for hånd, gjenkjenn den som bildet av en homomorfi. Anvendelse: $\mathbb{Z}\to\mathbb{Z}_n$, determinant $GL_n\to k^*$ med kjerne $SL_n$.
- **Oppgavesjangre:** M. Mønstereksempel: «La $\varphi:\mathbb{Z}_{12}\to\mathbb{Z}_{12}$ være $\varphi(x)=4x$. Finn $\ker\varphi$ og $\operatorname{im}\varphi$, og bruk isomorfiteoremet til å identifisere $\mathbb{Z}_{12}/\ker\varphi$.»
- **Typiske feil:** Konkludere isomorfi uten å vise både homomorfi, injektiv og surjektiv; glemme at kjernen er normal (og dermed at kvotienten gir mening); bruke isomorfiteoremet uten å navngi det; regne bilde/kjerne feil.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 3.3: Direkte produkt: H∩K={e} + normale → G≅H×K

- **id:** `mat2200-3-3` · **number:** 3.3 · **estimatedMinutes:** 50 · **prerequisites:** `mat2200-3-2`
- **kapitteltype:** teori
- **description:** Dekomposisjonsverktøyet Sylow-argumentene ender i: er H og K normale med triviell snitt, er avbildningen (h,k)↦hk en isomorfi H×K→G — ført med full injektivitet (via snittet) og surjektivitet (via ordenstelling).
- **Forkunnskaper (kryssbok):** Kap. 3.2 (isomorfi, kjerne), 3.1 (normalitet), 1.3 (orden/Lagrange).
- **Eksamensbelegg:** Sjanger M/F (~60 %), ofte som konklusjon i et Sylow-argument (Del 4). Fasitens grep: $H,K$ normale, $H\cap K=\{e\}$, $HK=G$ (eller ordenstelling) ⇒ $(h,k)\mapsto hk$ er isomorfi. Prioritet: **kunne** (og bærekloss for argumentmaskin ii).
- **Innholdskontrakt:** **Direkte produkt** (*direct product*) $H\times K$; **indre karakterisering**: hvis $H,K\trianglelefteq G$, $H\cap K=\{e\}$ og $|H||K|=|G|$ (eller $HK=G$), er $G\cong H\times K$; bevismønsteret: (1) $hk=kh$ for $h\in H,k\in K$ (via at kommutatoren ligger i $H\cap K=\{e\}$), (2) avbildningen $f(h,k)=hk$ er homomorfi, (3) **injektiv** fordi $\ker f\subseteq H\cap K=\{e\}$, (4) **surjektiv** ved ordenstelling; **orden av element** i produkt = mfm (bro til 3.4); coprime-orden-tilfellet ($\gcd(|H|,|K|)=1$ gir automatisk $H\cap K=\{e\}$). «Alternatively»: eksplisitt isomorfi vs. tellingsargument for surjektivitet.
- **Oppgavesjangre:** M/F. Mønstereksempel: «La $H,K\trianglelefteq G$ med $H\cap K=\{e\}$ og $|H||K|=|G|$. Vis at det finnes en isomorfi $H\times K\to G$, og før både injektivitet og surjektivitet.»
- **Typiske feil:** Konkludere $G\cong H\times K$ uten å vise begge normale, triviell snitt OG at elementene kommuterer; hoppe over injektivitet eller surjektivitet; anta $\gcd=1$ der det ikke er gitt; regne orden i produktet som produkt i stedet for mfm.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 3.4: Orden av element i produkt (mfm) og kvotientgruppe opp til isomorfi

- **id:** `mat2200-3-4` · **number:** 3.4 · **estimatedMinutes:** 50 · **prerequisites:** `mat2200-3-3`, `mat2200-1-4`
- **kapitteltype:** teori
- **description:** To faste deloppgaver samlet: orden av (a,b) i et produkt = mfm av ordenene, og hvordan man avgjør isomorfitypen til en kvotient G/H ved å lete etter elementordener.
- **Forkunnskaper (kryssbok):** Kap. 3.3 (direkte produkt), 1.4 (sykliske grupper).
- **Eksamensbelegg:** Sjanger C (~50 %). Fasitens grep: orden av $(a,b)=\operatorname{mfm}(|a|,|b|)$; for kvotient regn $|G/H|$, konstater abelsk, avgjør isomorfitype via elementordener (finnes element av orden 4 ⇒ ikke $\mathbb{Z}_2^3$; ingen av orden 8 ⇒ ikke $\mathbb{Z}_8$ ⇒ $\mathbb{Z}_2\times\mathbb{Z}_4$). Prioritet: **kunne**.
- **Innholdskontrakt:** **Orden av $(a,b)\in G\times H$ = $\operatorname{mfm}(|a|,|b|)$** (bevis); anvendelse: når er $G\times H$ syklisk (⇔ $\gcd(|G|,|H|)=1$ for sykliske faktorer, altså $\mathbb{Z}_m\times\mathbb{Z}_n\cong\mathbb{Z}_{mn}$); **kvotient opp til isomorfi**: regn $|G/H|$ ved å skrive ut kosettene når tellingen krever det, konstater abelsk, identifisér type ved elementordener; skille $\mathbb{Z}_8$ / $\mathbb{Z}_2\times\mathbb{Z}_4$ / $\mathbb{Z}_2^3$ via høyeste elementorden. Bro til strukturteoremet (5.1).
- **Oppgavesjangre:** C. Mønstereksempel: «Finn ordenen til $(4,2)\in\mathbb{Z}_{12}\times\mathbb{Z}_8$, og bestem $G/\langle(4,2)\rangle$ opp til isomorfi.»
- **Typiske feil:** Orden som produkt i stedet for mfm (den mest gjentatte fella i faget); avgjøre kvotienttype uten å sjekke elementordener; glemme at kvotient av abelsk er abelsk; feiltelle kosettene.
- **Quiz: 16 · Flashcards: 18**

**Prøve-kvote Del 3:** 4 prøver (spesifisert i §4).

---

### Del 4 — Gruppevirkninger og Sylow-teoremene *(prioritet: PERFEKT — Sylow ~85 %, argumentmaskin (ii))*

#### Kapittel 4.1: Gruppevirkning: bane, stabilisator og orbit–stabilisator

- **id:** `mat2200-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `mat2200-1-3`, `mat2200-2-2`
- **kapitteltype:** teori
- **description:** Rammeverket bak Sylow: en gruppe som virker på en mengde deler den i baner, og orbit–stabilisator-formelen |O_x|=[G:G_x] kobler banestørrelse til gruppestruktur — inkludert klasseligningen.
- **Forkunnskaper (kryssbok):** Kap. 1.3 (indeks/Lagrange), 2.2 (konjugasjon).
- **Eksamensbelegg:** Sjanger E (~40 %), og fundament for Sylow (~85 %). Fasitens grep: tell en bane via **orbit–stabilisator**, f.eks. antall $n$-sykler $=(n-1)!$ som én konjugasjonsbane. Prioritet: **kunne** (selvstendig), **perfekt** (som Sylow-fundament).
- **Innholdskontrakt:** **Gruppevirkning** (*group action*) $G\times X\to X$; **bane** (*orbit*) $O_x=\{g\cdot x\}$, **stabilisator** (*stabilizer*) $G_x=\{g:g\cdot x=x\}$ (undergruppe); **orbit–stabilisator-formelen** $|O_x|=[G:G_x]=|G|/|G_x|$ (bevis via kosetter); banene partisjonerer $X$; **konjugasjonsvirkning** ($g\cdot x=gxg^{-1}$): baner = konjugasjonsklasser, stabilisator = **sentralisator**; virkning på undergrupper ved konjugasjon: stabilisator = **normalisator** $N(H)$ (bro til Sylow); **klasseligningen** $|G|=|Z(G)|+\sum[G:N(x_i)]$. Anvendelser: telle $n$-sykler, symmetrigrupper.
- **Oppgavesjangre:** E. Mønstereksempel: «$S_4$ virker på seg selv ved konjugasjon. Bruk orbit–stabilisator til å finne størrelsen på konjugasjonsklassen til $(1\,2\,3)$, og bekreft ved å telle 3-syklene.»
- **Typiske feil:** Forveksle bane og stabilisator; glemme at stabilisatoren er en undergruppe (så indeksen gir mening); regne banestørrelse uten Lagrange/indeks; blande sentralisator og normalisator.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 4.2: p-gruppe-fikspunkt og Cauchys teorem

- **id:** `mat2200-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `mat2200-4-1`
- **kapitteltype:** teori
- **description:** Det tellingsargumentet som bærer Sylow-eksistens: en p-gruppe som virker på en mengde med p∤|X| har et fikspunkt, og Cauchys teorem gir et element av orden p når p deler |G|.
- **Forkunnskaper (kryssbok):** Kap. 4.1 (baner, klasseligning).
- **Eksamensbelegg:** Sjanger E (~40 %), byggekloss i Sylow-bevis. Fasitens grep: **$p$-gruppe-fikspunkt** — partisjonér $X$ i baner av størrelse $p^k$; hvis alle $>1$ ville $p\mid|X|$, motsigelse. Prioritet: **kunne**.
- **Innholdskontrakt:** **$p$-gruppe** (*$p$-group*): $|G|=p^n$; **fikspunktargumentet**: virker $G$ på $X$ med $p\nmid|X|$, finnes et fikspunkt (banene har størrelse $p^k$; $|X|=\sum|O_i|$; hvis ingen fikspunkt er alle baner delelig med $p$); følge: senteret $Z(G)$ av en $p$-gruppe er ikke-trivielt; **Cauchys teorem** (*Cauchy's theorem*): $p\mid|G|\Rightarrow$ finnes element av orden $p$ (bevis via virkning på $p$-tupler med produkt $e$ — kjennskap til beviset, aktiv bruk av resultatet); (Burnside/klasseligning som kjennskap). Disse er de rene tellingsverktøyene som gjør Sylow mulig.
- **Oppgavesjangre:** E. Mønstereksempel: «La $|G|=p^n$ virke på en mengde $X$ med $p\nmid|X|$. Vis at virkningen har minst ett fikspunkt, og utled at $Z(G)\ne\{e\}$.»
- **Typiske feil:** Glemme at alle ikke-trivielle baner i en $p$-gruppe har $p$-potens-størrelse; feil i motsigelsen (må vise at $p$ deler summen); bruke Cauchy uten at $p$ er primtall; forveksle senter og sentralisator.
- **Quiz: 14 · Flashcards: 18**

#### Kapittel 4.3: Sylow-teoremene I–III

- **id:** `mat2200-4-3` · **number:** 4.3 · **estimatedMinutes:** 60 · **prerequisites:** `mat2200-4-2`, `mat2200-1-3`
- **kapitteltype:** teori
- **description:** Emnets tyngste gruppeteoretiske verktøy: eksistens av Sylow-p-undergrupper, at de er konjugerte, og tellebetingelsene N_p≡1 (mod p) og N_p | indeks som lar deg tvinge fram en normal undergruppe.
- **Forkunnskaper (kryssbok):** Kap. 4.2 (fikspunkt, Cauchy), 1.3 (Lagrange/indeks), 4.1 (normalisator).
- **Eksamensbelegg:** Sjanger F (~85 %), den mest gjennomgripende gruppeteknikken. Fasitens grep: faktoriser $|G|$; Sylow-$p$-undergruppen har orden lik den fulle $p$-potensen; $N_p\equiv1\pmod p$ **og** $N_p\mid$ indeks; entydig Sylow ⇒ normal. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Sylow-$p$-undergruppe** (*Sylow $p$-subgroup*): undergruppe av orden $p^r$ der $p^r\|\,|G|$; **Sylow I** (eksistens for hver $p\mid|G|$); **Sylow II** (alle Sylow-$p$-undergrupper er **konjugerte**, så et konjugat av en Sylow er Sylow); **Sylow III** (antallet $N_p$ (Fraleigh: $n_p$) oppfyller $N_p\equiv1\pmod p$ **og** $N_p\mid[G:P]$ = indeksen); **nøkkelfølge**: $N_p=1$ ⇔ Sylow-$p$-undergruppen er **normal** (konjugater er Sylow, entydig ⇒ invariant). Bevisideene skisseres (virkning ved konjugasjon + fikspunktargument, 4.2); resultatene brukes aktivt. Bro til drillen (4.4): eksklusjonsmønsteret.
- **Oppgavesjangre:** F. Mønstereksempel: «La $|G|=99=3^2\cdot11$. Bruk Sylow III til å vise at både Sylow-3- og Sylow-11-undergruppen er entydige og dermed normale.»
- **Typiske feil:** Bruke bare én av de to Sylow III-betingelsene ($\equiv1\pmod p$ eller $\mid$ indeks); feil $p$-potens for Sylow-ordenen; anta at Sylow-undergruppen alltid er normal; forveksle $N_p$ (antall) med Sylow-undergruppens orden.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 4.4: Drill (argumentmaskin ii): Sylow-eksklusjon + coprime-produkt → normal delgruppe

- **id:** `mat2200-4-4` · **number:** 4.4 · **estimatedMinutes:** 90 · **prerequisites:** `mat2200-4-3`, `mat2200-3-3`
- **kapitteltype:** drill
- **description:** Den gjennomgripende gruppeargumentet drillet til automatikk: faktoriser |G|, sett opp N_p-betingelsene, ekskludér alle muligheter til N_p=1, konkludér normal Sylow, og kombiner med coprime-produkt til G≅H×K (ofte abelsk) — hele veien med navngitte teoremer.
- **Eksamensbelegg:** Dekker sjanger F samlet (~85 %, som hoved- eller delargument). Testede ordener: 21, 63, 99, 105, 200, 999, 1225, 2018, $p^2(p+2)$, $5\cdot7\cdot17$. Variantkatalogen: entydig Sylow ⇒ normal; telleargument (summér elementer av hver orden → motsigelse); coprime-produkt-dekomposisjon; abelsk-konklusjon når faktorene er $p$- eller $p^2$-grupper. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** (1) faktoriser $|G|=\prod p_i^{r_i}$; (2) for hver $p_i$ sett opp $N_{p_i}\equiv1\pmod{p_i}$ og $N_{p_i}\mid$ indeks, list mulighetene; (3) **ekskludér** til $N_{p_i}=1$ (bruk begge betingelsene, evt. telleargument på elementer); (4) entydig Sylow ⇒ **normal** (Sylow II); (5) hvis flere Sylow-undergrupper er normale med triviell snitt og coprime orden ⇒ $G\cong\prod P_i$ (kap. 3.3), abelsk hvis hver $P_i$ er $p$- eller $p^2$-gruppe (senter-argument fra 4.2). **Gjennomregnet eksamenscase** ($|G|=1225=5^2\cdot7^2$: entydige normale Sylow-undergrupper ⇒ $G\cong P_5\times P_7$ ⇒ abelsk) med sensor-margnotater (begge Sylow III-betingelser brukt, coprime-snitt begrunnet, abelskhet via $p^2$-senter). 10–15 oppgaver på eksamensnivå med varierte ordener; minst én ren eksklusjon, én med telleargument, én full $G\cong H\times K$-dekomposisjon, én der en Sylow **ikke** kan tvinges normal (så konklusjonen er svakere).
- **Oppgavesjangre:** F. Mønstereksempel: «La $|G|=200=2^3\cdot5^2$. Vis at Sylow-5-undergruppen er normal. Kan du konkludere at $G$ er abelsk? Begrunn.»
- **Typiske feil:** Ufullstendig eksklusjon (finne $N_p\equiv1\pmod p$ men glemme $N_p\mid$ indeks, eller motsatt); konkludere «normal» før alle muligheter er ekskludert; hoppe over coprime-snitt eller kommutativitet i produktet; påstå abelsk uten senter-argument; telleargument som overser overlapp.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 4:** 4 prøver (spesifisert i §4).

---

### Del 5 — Klassifikasjon av endelige abelske grupper *(prioritet: PERFEKT — ~80 %, argumentmaskin (i))*

#### Kapittel 5.1: Strukturteoremet for endelig genererte abelske grupper

- **id:** `mat2200-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `mat2200-3-3`, `mat2200-1-4`
- **kapitteltype:** teori
- **description:** Setningen som gjør «list alle abelske grupper av orden N» mekanisk: enhver endelig abelsk gruppe er et produkt av sykliske primpotensgrupper, entydig opp til omrokkering — med entydigheten som sensor krever nevnt.
- **Forkunnskaper (kryssbok):** Kap. 3.3 (direkte produkt), 1.4 (sykliske grupper), 3.4 (orden i produkt).
- **Eksamensbelegg:** Sjanger B (~80 %). Fasitens grep: faktoriser ordenen i primpotenser på **alle** måter, skriv hver som $\prod\mathbb{Z}_{p^e}$, list alle ikke-isomorfe muligheter, **nevn entydighet opp til omrokkering**. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Strukturteoremet for endelig genererte abelske grupper** (*fundamental theorem of finitely generated abelian groups*): $G\cong\mathbb{Z}^r\times\mathbb{Z}_{p_1^{e_1}}\times\cdots\times\mathbb{Z}_{p_k^{e_k}}$; for **endelige** abelske grupper ($r=0$): produkt av sykliske primpotensgrupper, **entydig opp til omrokkering av faktorene**; **antall abelske grupper av orden $N$** = produktet over primfaktorer av antall partisjoner av eksponentene; invariantfaktor- vs. primpotens-form (nevn begge, primpotens er arbeidsformen); $\mathbb{Z}_m\times\mathbb{Z}_n\cong\mathbb{Z}_{mn}$ ⇔ $\gcd(m,n)=1$ (fra 3.4). Metoden er mekanisk, men **entydighet må nevnes** og samme gruppe telles aldri to ganger.
- **Oppgavesjangre:** B. Mønstereksempel: «List alle abelske grupper av orden 200 opp til isomorfi, og angi for hver den høyeste elementordenen.»
- **Typiske feil:** Ikke nevne entydighet; telle samme gruppe to ganger (glemme $\mathbb{Z}_4\times\mathbb{Z}_5\cong\mathbb{Z}_{20}$ men $\mathbb{Z}_2\times\mathbb{Z}_2\times\mathbb{Z}_5$ er en annen); blande primpotens- og invariantfaktor-form; feil faktorisering av $N$.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 5.2: Drill (argumentmaskin i): list abelske grupper + identifiser kvotient

- **id:** `mat2200-5-2` · **number:** 5.2 · **estimatedMinutes:** 80 · **prerequisites:** `mat2200-5-1`, `mat2200-3-4`
- **kapitteltype:** drill
- **description:** Klassifikasjonsrutinen drillet feilfritt: faktoriser ordenen på alle måter, list de ikke-isomorfe abelske gruppene med entydighet nevnt, og koble til orden-av-element for å identifisere en kvotientgruppe.
- **Eksamensbelegg:** Dekker sjanger B (~80 %) + C-kobling. Testede ordener: 8, 12, 18, 20, 27, 63, 81, 99, 999. Variantkatalogen: ren opplisting med entydighet; identifiser en spesifikk kvotient via elementorden; finn antall abelske grupper av gitt orden; avgjør om to produkter er isomorfe. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** (1) faktoriser $N=\prod p_i^{a_i}$; (2) for hver $p_i$: list alle partisjoner av $a_i$ → sykliske primpotens-produkter; (3) ta produktet på tvers av primer → alle ikke-isomorfe abelske grupper; (4) **nevn entydighet opp til omrokkering**; (5) for kvotient-identifikasjon: regn $|G/H|$, konstater abelsk, finn høyeste elementorden → matcher én kandidat. **Gjennomregnet eksamenscase** (orden 72: alle abelske grupper listet + identifiser $\mathbb{Z}_{24}\times\mathbb{Z}_3$ som $\mathbb{Z}_{72}$? nei — via elementorden) med sensor-margnotater (entydighet nevnt, ingen dobbelttelling, elementorden brukt til identifikasjon). 10–15 oppgaver på eksamensnivå: minst én ren opplisting, én kvotient-identifikasjon, én «hvor mange abelske grupper av orden $N$», én isomorfi-avgjørelse mellom to produkter.
- **Oppgavesjangre:** B + C. Mønstereksempel: «(a) List alle abelske grupper av orden 36. (b) Til hvilken av dem er $\mathbb{Z}_{12}\times\mathbb{Z}_3$ isomorf? (c) Bestem $(\mathbb{Z}_4\times\mathbb{Z}_9)/\langle(2,3)\rangle$ opp til isomorfi.»
- **Typiske feil:** Hele fellekatalogen fra 5.1 under tidspress; dobbelttelling; entydighet ikke nevnt; kvotienttype avgjort uten elementorden; feil partisjonstelling for høye primpotenser.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 5:** 4 prøver (spesifisert i §4).

---

### Del 6 — Ringer, idealer og kvotientringer *(prioritet: PERFEKT — idealer prim/maksimal ~75 %, argumentmaskin (iii))*

#### Kapittel 6.1: Ringer, integritetsområder, nulldelere og enheter

- **id:** `mat2200-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `mat2200-1-1`
- **kapitteltype:** teori
- **description:** Ringspråket: ringaksiomene, enheter og nulldelere i Z_n via gcd-kriteriet, og skillet integritetsområde vs. kropp — grunnlaget for hele ringteorien og for kvotient-kriteriet.
- **Forkunnskaper (kryssbok):** Kap. 1.1 (gruppestruktur under addisjon). *(forgjenger — modulær aritmetikk i $\mathbb{Z}_n$; aktiver lenke når den finnes)*.
- **Eksamensbelegg:** Sjanger G (~40 %). Fasitens grep: nulldelerne i $\mathbb{Z}_n$ er nettopp $d$ med $\gcd(d,n)\ne1$; «ikke integritetsområde» = pek på ett konkret par ikke-null med produkt 0 ($3\cdot4=0$ i $\mathbb{Z}_{12}$). Prioritet: **kunne**.
- **Innholdskontrakt:** **Ring** (*ring*): abelsk gruppe under $+$, assosiativ $\cdot$ med distributivitet; **kommutativ ring med enhet** (*commutative ring with unity*); **enhet** (*unit*, inverterbart element), enhetsgruppen $U(R)=R^*$; **nulldeler** (*zero divisor*): $a\ne0$ med $ab=0$ for en $b\ne0$; **integritetsområde** (*integral domain*): kommutativ ring med enhet, uten nulldelere; **kropp** (*field*): alle ikke-null-elementer er enheter; **hver kropp er et integritetsområde**, og hvert **endelig** integritetsområde er en kropp; i $\mathbb{Z}_n$: nulldelerne er $\{d:\gcd(d,n)\ne1\}$, enhetene $\{d:\gcd(d,n)=1\}$, så $\mathbb{Z}_n$ kropp ⇔ $\mathbb{Z}_n$ int.område ⇔ $n$ primtall; karakteristikk (*characteristic*).
- **Oppgavesjangre:** G. Mønstereksempel: «Bestem alle nulldelere og alle enheter i $\mathbb{Z}_{10}$. Er $\mathbb{Z}_{10}$ et integritetsområde? Begrunn med et konkret nulldeler-par.»
- **Typiske feil:** Forveksle nulldeler og ikke-enhet (i $\mathbb{Z}_n$ sammenfaller de for $d\ne0$, men ikke generelt); glemme at 0 per konvensjon ikke regnes som nulldeler; påstå «ikke int.område» uten konkret par; blande karakteristikk og orden.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 6.2: Idealer, kvotientringer og kjerne til ringhomomorfi

- **id:** `mat2200-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `mat2200-6-1`, `mat2200-3-2`
- **kapitteltype:** teori
- **description:** Ringanalogien til normale undergrupper: idealer (absorpsjon rI⊆I) gir kvotientringer R/I, og fasitens snarvei — vis at et ideal er kjernen til en ringhomomorfi og få R/I≅im φ gratis.
- **Forkunnskaper (kryssbok):** Kap. 6.1 (ringer), 3.2 (kjerne/isomorfiteorem for grupper — analogien).
- **Eksamensbelegg:** Sjanger H (~75 %). Fasitens grep: vis ideal enten **direkte** (additiv undergruppe + absorpsjon) **eller — snarveien — som kjerne** $I=\ker\pi$, som gir $R/I\cong\pi[R]$ gratis. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Ideal** (*ideal*) $I\subseteq R$: additiv undergruppe med **absorpsjon** $rI\subseteq I$ og $Ir\subseteq I$ for alle $r\in R$; **prinsipalideal** (*principal ideal*) $\langle a\rangle=aR$; **kvotientring** (*quotient ring*) $R/I$ med veldefinert $+,\cdot$ på kosetter; **ringhomomorfi** (*ring homomorphism*), **kjernen er et ideal** (og ethvert ideal er kjerne til projeksjonen $\pi:R\to R/I$); **isomorfiteoremet for ringer** $R/\ker\varphi\cong\operatorname{im}\varphi$ (navngis). **«Alternatively»-paret** (regel 1.5.6): vis $I$ er ideal ved direkte absorpsjon vs. ved å konstruere en ringhomomorfi med $\ker=I$. Standardeksempler: $n\mathbb{Z}\subseteq\mathbb{Z}$; $\pi:\mathbb{Z}\times\mathbb{Z}\to\mathbb{Z}$ projeksjon; evaluering $\operatorname{ev}_a:k[x]\to k$.
- **Oppgavesjangre:** H. Mønstereksempel: «La $I=\{(a,0):a\in\mathbb{Z}\}\subseteq\mathbb{Z}\times\mathbb{Z}$. Vis at $I$ er et ideal — først direkte, deretter ved å skrive $I$ som kjernen til projeksjonen på andre koordinat — og identifisér $(\mathbb{Z}\times\mathbb{Z})/I$.»
- **Typiske feil:** Sjekke absorpsjon bare fra én side i ikke-kommutativ ring; forveksle delring og ideal (delring trenger ikke absorpsjon); glemme at kjernen automatisk er et ideal; ikke bruke isomorfiteoremet der kjerne-snarveien gir kvotienten gratis.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 6.3: Prim- og maksimalidealer via kvotient-kriteriet

- **id:** `mat2200-6-3` · **number:** 6.3 · **estimatedMinutes:** 55 · **prerequisites:** `mat2200-6-2`
- **kapitteltype:** teori
- **description:** Ringteoriens ryggrad: I prim ⇔ R/I integritetsområde, I maksimal ⇔ R/I kropp — og hvordan hele ekvivalenskjeden føres, med det klassiske eksemplet på et prim men ikke maksimalt ideal.
- **Forkunnskaper (kryssbok):** Kap. 6.2 (kvotientring), 6.1 (int.område/kropp).
- **Eksamensbelegg:** Sjanger H (~75 %), ringteoriens mest gjentatte deloppgave. Fasitens grep: **kvotient-kriteriet** — $I$ prim ⇔ $R/I$ int.område; $I$ maksimal ⇔ $R/I$ kropp; klassisk: $I$ i $\mathbb{Z}\times\mathbb{Z}$ prim men ikke maksimal fordi $R/I\cong\mathbb{Z}$ int.område men ikke kropp. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Primideal** (*prime ideal*): $ab\in I\Rightarrow a\in I$ eller $b\in I$; **maksimalideal** (*maximal ideal*): ingen ideal strengt mellom $I$ og $R$; **kvotient-kriteriet** (navngis): $I$ prim ⇔ $R/I$ integritetsområde; $I$ maksimal ⇔ $R/I$ kropp; **maksimal ⇒ prim** (kropp ⇒ int.område); i $\mathbb{Z}$: primidealene er $\{0\}$ og $p\mathbb{Z}$, maksimalidealene er $p\mathbb{Z}$; «$n\mathbb{Z}$ ikke prim når $n$ sammensatt»: $n=ab$, $a,b\notin n\mathbb{Z}$; i $\mathbb{Z}_{p^n}$ er $\langle p\rangle$ det entydige maksimalidealet. **«Alternatively»-par**: direkte prim/maksimal-argument vs. kvotient-kriteriet. Full ekvivalenskjede forventes (regel 1.5.7).
- **Oppgavesjangre:** H. Mønstereksempel: «Vis at $I=\{(a,0):a\in\mathbb{Z}\}\subseteq\mathbb{Z}\times\mathbb{Z}$ er et primideal, men ikke maksimalt, ved å identifisere $(\mathbb{Z}\times\mathbb{Z})/I$.»
- **Typiske feil:** Blande prim og maksimal ($R/I$ int.område vs. kropp); glemme at maksimal medfører prim; ufullstendig ekvivalenskjede; påstå «$n\mathbb{Z}$ prim» for sammensatt $n$; ikke identifisere kvotienten eksplisitt.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 6.4: Drill (argumentmaskin iii): kvotient-kriteriet + kjerne-snarvei

- **id:** `mat2200-6-4` · **number:** 6.4 · **estimatedMinutes:** 85 · **prerequisites:** `mat2200-6-3`
- **kapitteltype:** drill
- **description:** Hele idealpakken drillet til automatikk: vis ideal (direkte eller som kjerne), identifiser kvotientringen, og les av prim/maksimal via kvotient-kriteriet — med begge «Alternatively»-veiene tilgjengelige.
- **Eksamensbelegg:** Dekker sjanger H samlet (~75 %, halvparten av alle ring-deloppgaver). Variantkatalogen: ideal via kjerne + kvotient gratis; prim men ikke maksimal ($R/I\cong\mathbb{Z}$); maksimal ($R/I$ kropp); $\langle p\rangle$ i $\mathbb{Z}_{p^n}$; ideal i polynomring (bro til Del 7). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** (1) er $I$ ideal? — direkte (additiv + absorpsjon) eller **snarvei**: konstruér ringhomomorfi $\varphi$ med $\ker\varphi=I$; (2) identifisér $R/I$ (via isomorfiteoremet $R/I\cong\operatorname{im}\varphi$ hvis kjerne-veien); (3) er $R/I$ integritetsområde? kropp? (kvotient-kriteriet); (4) konkluder prim/maksimal med navngitt kriterium + full ekvivalenskjede. **Gjennomregnet eksamenscase** ($I=\ker(\operatorname{ev}_0:\mathbb{Z}[x]\to\mathbb{Z})$, altså konstantledd-null-polynomene: ideal via kjerne, $R/I\cong\mathbb{Z}$, prim ikke maksimal) med sensor-margnotater (kjerne-snarveien brukt, kvotient identifisert, kriteriet navngitt). 10–15 oppgaver: minst én kjerne-snarvei, én prim-ikke-maksimal, én maksimal, én der begge «Alternatively»-veier vises.
- **Oppgavesjangre:** H. Mønstereksempel: «La $\varphi:\mathbb{R}[x]\to\mathbb{C}$, $\varphi(f)=f(i)$. Vis at $\ker\varphi=\langle x^2+1\rangle$, identifisér $\mathbb{R}[x]/\langle x^2+1\rangle$, og avgjør om idealet er prim/maksimalt.»
- **Typiske feil:** Hele fellekatalogen fra 6.2–6.3 under tidspress; ikke bruke kjerne-snarveien der den sparer alt arbeidet; blande prim/maksimal; ufullstendig ekvivalenskjede; feil identifikasjon av kvotientringen.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 6:** 4 prøver (spesifisert i §4).

---

### Del 7 — Polynomringer og faktorisering *(prioritet: KUNNE — irredusibilitet/Eisenstein ~60 %)*

#### Kapittel 7.1: Polynomringer k[x], divisjonsalgoritmen og PID

- **id:** `mat2200-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `mat2200-6-2`
- **kapitteltype:** teori
- **description:** Polynomringen k[x] over en kropp: grad, divisjonsalgoritme, at k[x] er et prinsipalidealområde, og telleargumentet «et ideal som inneholder polynomer uten felles faktor er hele ringen».
- **Forkunnskaper (kryssbok):** Kap. 6.2 (idealer), 6.1 (kropp). [Polynomdivisjon](/bok/r2/r2-2-3) (polynomdivisjon fra VGS — verifiser id i fase 6).
- **Eksamensbelegg:** Sjanger I-grunnlag + polynomdivisjon → ideal (~25 %). Fasitens grep: hvis et ideal $I\subseteq k[x]$ inneholder $f$ og $g$, produsér rest av lavere grad (euklidsk algoritme) til en enhet (konstant $\ne0$) ⇒ $I=k[x]$. Prioritet: **kunne**.
- **Innholdskontrakt:** **Polynomring** (*polynomial ring*) $k[x]$ over kropp $k$; grad, ledende koeffisient, monisk polynom; **divisjonsalgoritmen** ($f=qg+r$, $\deg r<\deg g$); **$k[x]$ er et prinsipalidealområde (PID)** — hvert ideal er $\langle d\rangle$ for et $d$ av minste grad (bro: dette er hvorfor $\langle f\rangle$ maksimal ⇔ $f$ irredusibel, Del 8/10); **euklidsk algoritme** for $\gcd$ i $k[x]$; **polynomdivisjon → ideal = hele ringen**: to polynomer med $\gcd=1$ genererer $\langle1\rangle=k[x]$ (Bézout i $k[x]$); enheter i $k[x]$ = de ikke-null-konstantene.
- **Oppgavesjangre:** I. Mønstereksempel: «Vis at et ideal $I\subseteq\mathbb{Q}[x]$ som inneholder $x^3-x^2+x$ og $x^2-1$ er hele $\mathbb{Q}[x]$.» (reduser til en konstant via euklidsk algoritme).
- **Typiske feil:** Anta at $R[x]$ er PID for en ring $R$ som ikke er kropp (kun kropp gir PID); regnefeil i polynomdivisjonen; ikke redusere helt til en enhet før man konkluderer $I=k[x]$; blande grad av rest.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 7.2: Irredusibilitet: Eisenstein, grad ≤ 3-argument og faktorisering over Z_p

- **id:** `mat2200-7-2` · **number:** 7.2 · **estimatedMinutes:** 55 · **prerequisites:** `mat2200-7-1`
- **kapitteltype:** teori
- **description:** Verktøyene for å avgjøre irredusibilitet: Eisensteins kriterium over Q, «ingen rot ⇒ irredusibel» for grad ≤ 3, faktoriseringsforsøk for grad 4, og rot-sjekk over Z_p — grunnlaget for at k[x]/⟨f⟩ blir en kropp.
- **Forkunnskaper (kryssbok):** Kap. 7.1 (k[x], divisjon). *(forgjenger — primtall, gcd; aktiver lenke når den finnes)*.
- **Eksamensbelegg:** Sjanger I (~60 %). Fasitens grep: **Eisenstein** (favoritter $x^n-2$, $x^5-2$, $x^3\pm5$); grad ≤ 3 uten rot ⇒ irredusibel (evaluér i **alle** elementer av $\mathbb{Z}_p$); grad 4 uten rot: prøv $(x^2+ax+b)(x^2+cx+d)$ og før til motsigelse. Prioritet: **kunne**.
- **Innholdskontrakt:** **Irredusibelt polynom** (*irreducible polynomial*): ikke produkt av to polynomer av lavere grad; **Eisensteins kriterium** (*Eisenstein's criterion*, navngis): et primtall $p$ deler alle koeffisienter unntatt den ledende, og $p^2$ deler ikke konstantleddet ⇒ irredusibel over $\mathbb{Q}$ (forutsetning-sjekk er obligatorisk, regel 1.5.5); **rot-kriteriet for grad ≤ 3**: ingen rot i $k$ ⇒ irredusibel, **fordi** en faktorisering ville gi en lineær faktor og dermed en rot (argumentet må stå, regel 1.5.7); **grad 4**: fravær av rot er ikke nok — prøv produkt av to andregradsfaktorer; **over $\mathbb{Z}_p$**: evaluér i alle $p$ elementer; kvadratisk irredusibel ⇔ ingen rot ⇔ diskriminant er ikke-kvadrat; Gauss' lemma (kjennskap: irredusibel over $\mathbb{Z}$ ⇔ over $\mathbb{Q}$).
- **Oppgavesjangre:** I. Mønstereksempel: «(a) Vis at $x^5-2$ er irredusibel over $\mathbb{Q}$. (b) Er $x^3+x+1$ irredusibel over $\mathbb{Z}_2$? (c) Faktorisér $x^4+1$ over $\mathbb{Z}_2$.»
- **Typiske feil:** Bruke Eisenstein uten å sjekke forutsetningene; påstå «grad 3 uten rot ⇒ irredusibel» uten begrunnelsen; tro at grad 4 uten rot er irredusibel (kan splitte i to kvadratiske); glemme å evaluere i **alle** $\mathbb{Z}_p$-elementer; regne i feil karakteristikk.
- **Quiz: 18 · Flashcards: 22**

**Prøve-kvote Del 7:** 4 prøver (spesifisert i §4).

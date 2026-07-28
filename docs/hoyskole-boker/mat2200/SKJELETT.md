# Bokskjelett: MAT2200 Grupper, ringer og kropper (UiO) — eksamensrettet lærebok

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
| Estimert totaltid | **~2 855 min ≈ 48 timer** |
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
- **Forkunnskaper (kryssbok):** Ingen algebraiske forkunnskaper. [Bevis og matematisk argumentasjon](/r2/r2-6-6) (generell bevisføring, induksjon, kontrapositiv fra VGS). *(forgjenger i tall-/gruppeteori — ikke bygget ennå; aktiver lenke når den finnes)* for modulær aritmetikk.
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
- **Forkunnskaper (kryssbok):** Kap. 1.1. [Matriser og matriseregning](/bi-okonomi/bi-okonomi-9-1) og [Determinanter og invers matrise](/bi-okonomi/bi-okonomi-9-2) (matriseprodukt og invers fra økonomi-innføringen).
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
- **Forkunnskaper (kryssbok):** Kap. 6.2 (idealer), 6.1 (kropp). [Polynomdivisjon](/r2/r2-2-3) (polynomdivisjon fra VGS — verifiser id i fase 6).
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

---

### Del 8 — Kroppsutvidelser, tårnformelen og minimalpolynom *(prioritet: PERFEKT — ~95 %, argumentmaskin (iv) del 1)*

#### Kapittel 8.1: Enkle kroppsutvidelser, minimalpolynom og basis

- **id:** `mat2200-8-1` · **number:** 8.1 · **estimatedMinutes:** 60 · **prerequisites:** `mat2200-7-2`
- **kapitteltype:** teori
- **description:** Grunnbegrepene bak halve eksamenen: en enkel utvidelse k(α) har grad = grad(irr(α,k)) med basis 1,α,…,α^{n−1}, og potenser av α regnes ved å redusere modulo minimalpolynomet.
- **Forkunnskaper (kryssbok):** Kap. 7.2 (irredusibilitet), 6.3 (maksimalideal → kropp). [Komplekse tall](/r2/r2-3-1) (i, algebraiske tall fra VGS — verifiser id i fase 6).
- **Eksamensbelegg:** Sjanger K (~95 %, grunnlaget). Fasitens grep: $[k(\alpha):k]=\deg(\operatorname{irr}(\alpha,k))$ med **basis $\{1,\alpha,\dots,\alpha^{n-1}\}$**; potenser reduseres via $f(\alpha)=0$ (f.eks. $\alpha^3=-(2\alpha+1)$ i $\mathbb{Z}_3$). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Kroppsutvidelse** (*field extension*) $K/k$; **algebraisk element** (*algebraic element*), **minimalpolynom** $\operatorname{irr}(\alpha,k)$ (*minimal polynomial*): det moniske irredusible polynomet av minste grad med $\alpha$ som rot (entydig); **grad av enkel utvidelse** $[k(\alpha):k]=\deg\operatorname{irr}(\alpha,k)$; **$k(\alpha)\cong k[x]/\langle\operatorname{irr}(\alpha,k)\rangle$** (bro til 6.3: idealet er maksimalt fordi minimalpolynomet er irredusibelt); **basis $\{1,\alpha,\dots,\alpha^{n-1}\}$** som $k$-vektorrom; **potensregning**: reduser $\alpha^n$ og høyere modulo $f(\alpha)=0$; invers av et element via euklidsk algoritme / basis. Endelig vs. algebraisk utvidelse (endelig ⇒ algebraisk). Tallverdier oppgis eksplisitt (grad, basis).
- **Oppgavesjangre:** K/J. Mønstereksempel: «La $\alpha$ være en rot av $x^3-x-1$ over $\mathbb{Q}$. Vis at polynomet er irredusibelt, oppgi $[\mathbb{Q}(\alpha):\mathbb{Q}]$ og en basis, og skriv $\alpha^4$ og $\alpha^{-1}$ i basisen.»
- **Typiske feil:** Bruke et ikke-irredusibelt polynom som «minimalpolynom»; feil grad (ikke ta graden av minimalpolynomet); regnefeil i potensreduksjonen (ikke bruke $f(\alpha)=0$); glemme å redusere koeffisienter i $\mathbb{Z}_p$; feil basis-lengde.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 8.2: Tårnformelen [K:k]=[K:E][E:k]

- **id:** `mat2200-8-2` · **number:** 8.2 · **estimatedMinutes:** 55 · **prerequisites:** `mat2200-8-1`
- **kapitteltype:** teori
- **description:** Formelen som brukes overalt: grader multipliserer gjennom et kropp-tårn, og trikset for å konkludere likhet av kropper når en grad er primtall — verktøyet under alle utvidelsesgrad-oppgaver og hele Galois-delen.
- **Forkunnskaper (kryssbok):** Kap. 8.1 (grad, minimalpolynom).
- **Eksamensbelegg:** Sjanger K (~95 %, som selvstendig krav eller inne i Galois-oppgaven). Fasitens grep: sett opp mellomtrinn $\mathbb{Q}\subset\mathbb{Q}(\sqrt2)\subset\mathbb{Q}(\sqrt2,\sqrt5)$, vis at hvert trinn har grad 2 (neste generator ligger ikke i forrige kropp); $[\mathbb{Q}(2^{1/p},\zeta_p):\mathbb{Q}]=p(p-1)$. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Tårnformelen** (*tower law*) $[K:k]=[K:E]\,[E:k]$ for $k\subseteq E\subseteq K$ (bevis via basis-produkt — skisseres, brukes aktivt); **multiplikativitet av grader**; **primtall-trikset**: hvis $[\mathbb{Q}(\alpha):\mathbb{Q}]=p$ primtall og $\beta\in\mathbb{Q}(\alpha)\setminus\mathbb{Q}$, tvinger tårnet $\mathbb{Q}(\beta)=\mathbb{Q}(\alpha)$; **grad av flertrinns-utvidelse**: $[\mathbb{Q}(\alpha,\beta):\mathbb{Q}]$ regnes trinnvis, med sjekk av at hvert trinn har full grad (neste minimalpolynom forblir irredusibelt over den større kroppen); advarsel mot å anta $[\mathbb{Q}(\alpha,\beta):\mathbb{Q}]=[\mathbb{Q}(\alpha):\mathbb{Q}]\cdot[\mathbb{Q}(\beta):\mathbb{Q}]$ uten begrunnelse; grad deler alltid ordenen til splittkroppens Galois-gruppe (bro til Del 9).
- **Oppgavesjangre:** K. Mønstereksempel: «Regn $[\mathbb{Q}(\sqrt2,\sqrt[3]{5}):\mathbb{Q}]$ ved tårnformelen, og vis at hvert trinn har den graden du oppgir.»
- **Typiske feil:** Hoppe over tårnformelen (multiplisere grader uvørent); anta full grad i et trinn uten å sjekke at minimalpolynomet forblir irredusibelt; feil rekkefølge av utvidelser; glemme primtall-trikset der det gir likhet av kropper gratis.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 8.3: Drill (argumentmaskin iv, del 1): tårnformel-beregning av [K:Q] + basis

- **id:** `mat2200-8-3` · **number:** 8.3 · **estimatedMinutes:** 90 · **prerequisites:** `mat2200-8-2`
- **kapitteltype:** drill
- **description:** Grad-regning drillet til automatikk: bygg tårnet, vis full grad i hvert trinn, oppgi en basis for hele utvidelsen, og bruk primtall-trikset til å avgjøre likhet av kropper — forberedelsen til Galois-oppgaven.
- **Eksamensbelegg:** Dekker sjanger K samlet (~95 %). Testede utvidelser: $\mathbb{Q}(\sqrt2,\sqrt5)$, $\mathbb{Q}(\sqrt[3]{2},i\sqrt3)$, $\mathbb{Q}(2^{1/p},\zeta_p)$, $\mathbb{Q}(\alpha)$ for irredusibel femtegrads $\alpha$. Variantkatalogen: to-generator-grad via tårn; basis for hele utvidelsen (produktbasis); primtall-trikset ($\mathbb{Q}(\beta)=\mathbb{Q}(\alpha)$); grad av $\mathbb{Q}(2^{1/p},\zeta_p)$. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** (1) identifisér generatorene og deres minimalpolynomer over grunnkroppen; (2) bygg tårnet ett trinn av gangen; (3) for hvert trinn: vis at neste generator **ikke** ligger i forrige kropp, så minimalpolynomet forblir irredusibelt → trinngraden; (4) multiplisér gradene (tårnformelen, navngitt); (5) oppgi en **basis** for hele $K$ som produkter av trinnbasene; (6) for likhet av kropper: primtall-trikset. **Gjennomregnet eksamenscase** ($[\mathbb{Q}(\sqrt[3]{2},i\sqrt3):\mathbb{Q}]=6$ med basis, deretter vis $\mathbb{Q}(\sqrt[3]{2}+\sqrt[3]{2}^2)=\mathbb{Q}(\sqrt[3]{2})$ via primtall-trikset) med sensor-margnotater (hvert trinn begrunnet, tårnformelen navngitt, basis eksplisitt). 10–15 oppgaver: minst én to-generator-grad med basis, én primtall-trikk-likhet, én $\mathbb{Q}(2^{1/p},\zeta_p)$-grad, én der et trinn **ikke** har full grad (fella).
- **Oppgavesjangre:** K. Mønstereksempel: «(a) Regn $[\mathbb{Q}(\sqrt2,\sqrt5):\mathbb{Q}]$ og oppgi en basis. (b) La $\alpha$ ha minimalpolynom av grad 5 over $\mathbb{Q}$; vis at $\mathbb{Q}(\alpha^2)=\mathbb{Q}(\alpha)$.»
- **Typiske feil:** Hele fellekatalogen fra 8.1–8.2 under tidspress; anta full grad uten å sjekke; feil produktbasis; ikke bruke primtall-trikset; regnefeil i minimalpolynom over den større kroppen.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 8:** 4 prøver (spesifisert i §4).

---

### Del 9 — Galois-teori *(prioritet: PERFEKT — ~90 %, nesten alltid SISTE oppgave, argumentmaskin (iv) del 2)*

#### Kapittel 9.1: Splittkropp, separabilitet og normal utvidelse

- **id:** `mat2200-9-1` · **number:** 9.1 · **estimatedMinutes:** 55 · **prerequisites:** `mat2200-8-2`, `mat2200-7-2`
- **kapitteltype:** teori
- **description:** Byggesteinen i Galois-oppgaven: splittkroppen der f faktoriserer fullstendig, hvorfor Q er perfekt (alt separabelt), og hva som gjør en utvidelse normal — grunnlaget for at |G(K/Q)|=[K:Q].
- **Forkunnskaper (kryssbok):** Kap. 8.2 (tårnformel), 7.2 (irredusibilitet), 8.1 (minimalpolynom).
- **Eksamensbelegg:** Sjanger L-grunnlag (~90 %). Fasitens grep: finn **splittkroppen** ved å adjungere alle røttene (ofte $\mathbb{Q}(\sqrt[3]{a},\zeta_n)$ eller $\mathbb{Q}(\sqrt a,\sqrt b)$), regn graden via tårnformelen. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Splittkropp** (*splitting field*) $K$ til $f$ over $k$: den minste utvidelsen der $f$ faktoriserer i lineære faktorer (adjunger alle røttene); eksistens og entydighet opp til isomorfi; **separabelt polynom** (*separable*, ingen multiple røtter), **$\mathbb{Q}$ og endelige kropper er perfekte** (alt separabelt); **normal utvidelse** (*normal extension*): splittkropp av en polynomfamilie ⇔ hvert irredusibelt polynom med en rot i $K$ splitter i $K$; **Galois-utvidelse** = endelig, normal, separabel; grad av splittkropp via tårnformelen (Del 8). Standardsplittkropper: $x^2-a\to\mathbb{Q}(\sqrt a)$; $x^3-a\to\mathbb{Q}(\sqrt[3]{a},\zeta_3)$ grad 6; $x^n-1\to\mathbb{Q}(\zeta_n)$.
- **Oppgavesjangre:** L. Mønstereksempel: «Finn splittkroppen $K$ til $x^3-2$ over $\mathbb{Q}$, og regn $[K:\mathbb{Q}]$.» (→ $\mathbb{Q}(\sqrt[3]{2},\zeta_3)$, grad 6).
- **Typiske feil:** Adjungere bare én rot (glemme $\zeta_3$ / komplekse røtter); regne splittkropp-graden uten tårnformelen; forveksle normal og separabel; anta at $\mathbb{Q}(\sqrt[3]{2})$ er splittkroppen til $x^3-2$ (den er ikke normal).
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 9.2: Galois-gruppen, |G(K/Q)|=[K:Q] og korrespondansen

- **id:** `mat2200-9-2` · **number:** 9.2 · **estimatedMinutes:** 60 · **prerequisites:** `mat2200-9-1`, `mat2200-3-1`
- **kapitteltype:** teori
- **description:** Hovedsetningen i Galois-teori: for en Galois-utvidelse er |G(K/Q)|=[K:Q], gruppa er en undergruppe av S_n på røttene, og korrespondansen kobler undergrupper til mellomkropper (normalitet ↔ normal utvidelse) — kjernen i eksamenens siste oppgave.
- **Forkunnskaper (kryssbok):** Kap. 9.1 (splittkropp/normal), 3.1 (normale undergrupper), 2.1 (S_n på røttene), 8.2 (grad).
- **Eksamensbelegg:** Sjanger L (~90 %). Fasitens grep: **$|G(K/\mathbb{Q})|=[K:\mathbb{Q}]$** (Galois), $G$ er isomorf med en undergruppe av $S_n$ (permuterer røttene) — gradtellingen avgjør hvilken; mellomkropper via korrespondansen. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Galois-gruppe** (*Galois group*) $G(K/k)$ = automorfiene av $K$ som fikserer $k$; **$|G(K/k)|=[K:k]$** for Galois-utvidelser (navngis); $G$ virker trofast på røttene ⇒ **isomorf med en undergruppe av $S_n$**; gradtellingen avgjør typen ($S_3$, $D_4$, Klein-firergruppen $V$, syklisk $\mathbb{Z}_n$, «$ax+b$-gruppen», $S_5$); **hovedsetningen i Galois-teori / korrespondansen** (*fundamental theorem of Galois theory*, navngis): **bijektiv, ordensvendende** korrespondanse mellom undergrupper $H\le G$ og mellomkropper $L$ med $k\subseteq L\subseteq K$, gitt ved $H\mapsto E^H$ (fikskropp) og $L\mapsto G(K/L)$; $[K:L]=|H|$, $[L:k]=[G:H]$; **normalitet**: $G(K/L)\trianglelefteq G(K/k)$ ⇔ $L$ er normal utvidelse av $k$, og da $G(L/k)\cong G/H$. Anvendt begge veier (undergruppe → mellomkropp og omvendt).
- **Oppgavesjangre:** L. Mønstereksempel: «For splittkroppen $K$ av $x^3-2$ over $\mathbb{Q}$: vis at $G(K/\mathbb{Q})\cong S_3$, og finn mellomkroppen som svarer til den entydige undergruppa av orden 3.»
- **Typiske feil:** Påstå Galois-gruppa uten å regne graden først ($|G|=[K:\mathbb{Q}]$ må etableres); glemme at $G\le S_n$ på røttene; bruke korrespondansen i feil retning (ordensvendende); forveksle normal undergruppe ↔ normal mellomkropp-utvidelse.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 9.3: Cyklotomiske utvidelser og fikskropp via ζ+ζ⁻¹

- **id:** `mat2200-9-3` · **number:** 9.3 · **estimatedMinutes:** 55 · **prerequisites:** `mat2200-9-2`
- **kapitteltype:** teori
- **description:** Enhetsrot-utvidelsene Q(ζ_n): grad φ(n), Galois-gruppa (Z_n)*, komplekskonjugasjon som σ², og fikskropp-bestemmelse via ζ+ζ⁻¹=2cos(2π/n) — toppsjiktets gradargument.
- **Forkunnskaper (kryssbok):** Kap. 9.2 (Galois-gruppe/korrespondanse), 1.4 (φ-funksjon). [Komplekse tall på polarform](/r2/r2-3-2) (enhetsrøtter — verifiser id i fase 6).
- **Eksamensbelegg:** Sjanger L-variant (~35 %, toppsjikt). Fasitens grep: for $\mathbb{Q}(\zeta_n)$, komplekskonjugasjon svarer til $\sigma^2$ i sykliske tilfeller; identifisér fikskroppen via $\zeta+\zeta^{-1}=2\cos(2\pi/n)$ og et gradargument. Prioritet: **kunne/kjenne** (karakterskiller).
- **Innholdskontrakt:** **Cyklotomisk utvidelse** (*cyclotomic extension*) $\mathbb{Q}(\zeta_n)$, $\zeta_n=e^{2\pi i/n}$; det cyklotomiske polynomet $\Phi_n$, $[\mathbb{Q}(\zeta_n):\mathbb{Q}]=\varphi(n)$; $[\mathbb{Q}(\zeta_p):\mathbb{Q}]=p-1$; Galois-gruppa $G(\mathbb{Q}(\zeta_n)/\mathbb{Q})\cong(\mathbb{Z}_n)^*$ (abelsk); **komplekskonjugasjon** som automorfi ($\zeta\mapsto\zeta^{-1}=\bar\zeta$); **fikskropp**: den reelle delkroppen $\mathbb{Q}(\zeta+\zeta^{-1})=\mathbb{Q}(\cos(2\pi/n))$ er fikskroppen til $\langle$konjugasjon$\rangle$, med $[\mathbb{Q}(\zeta_n):\mathbb{Q}(\zeta_n+\zeta_n^{-1})]=2$; gradargumentet som identifiserer fikskroppen. Kobling til konstruerbarhet (bro til 11.1, kort).
- **Oppgavesjangre:** L. Mønstereksempel: «La $\zeta=\zeta_5$. Vis at $[\mathbb{Q}(\zeta):\mathbb{Q}]=4$, at $G(\mathbb{Q}(\zeta)/\mathbb{Q})$ er syklisk av orden 4, og at fikskroppen til komplekskonjugasjon er $\mathbb{Q}(\zeta+\zeta^{-1})=\mathbb{Q}(\cos72°)$.»
- **Typiske feil:** Feil grad ($\varphi(n)$, ikke $n$); anta $G$ syklisk for alle $n$ (bare når $(\mathbb{Z}_n)^*$ er syklisk); ikke bruke gradargumentet for fikskroppen; regnefeil i $\zeta+\zeta^{-1}$-uttrykket.
- **Quiz: 14 · Flashcards: 18**

#### Kapittel 9.4: Drill (argumentmaskin iv, del 2): splittkropp → Galois-gruppe → mellomkropp/fikskropp

- **id:** `mat2200-9-4` · **number:** 9.4 · **estimatedMinutes:** 90 · **prerequisites:** `mat2200-9-2`, `mat2200-9-3`
- **kapitteltype:** drill
- **description:** Eksamenens nesten garanterte siste oppgave drillet til automatikk: finn splittkroppen til en konkret f, regn [K:Q] via tårnformelen, bestem og identifiser Galois-gruppa, og bruk korrespondansen til mellomkropper og fikskropper — begge veier.
- **Eksamensbelegg:** Dekker sjanger L samlet (~90 %, siste oppgave). Testede: $x^3-2$ ($S_3$), $x^5-2$ («$ax+b$»-gruppe orden 20), $x^4-2$ / $(x^2-2)(x^2-5)$ ($D_4$/Klein $V$), $\mathbb{Q}(\zeta_n)$ (syklisk/abelsk). Variantkatalogen: full splittkropp + grad + gruppetype; mellomkropp fra undergruppe (f.eks. $S_5$ har undergruppe av orden 5 → mellomkropp grad 24); fikskropp via gradargument; normalitet ↔ normal utvidelse. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** (1) finn **splittkroppen** $K$ (adjunger alle røttene, husk enhetsrøtter); (2) regn $[K:\mathbb{Q}]$ via tårnformelen (kap. 8.3); (3) $|G(K/\mathbb{Q})|=[K:\mathbb{Q}]$, $G\le S_n$ på røttene → **identifisér typen** via orden + virkning ($S_3$/$D_4$/$V$/syklisk/orden-20-gruppe/$S_5$); (4) **korrespondanse**: for en undergruppe $H$ av gitt orden, sett $L=E^H$, bruk $[K:L]=|H|$, $[L:\mathbb{Q}]=[G:H]$; for fikskropp bruk gradargument; (5) normalitet ↔ normal utvidelse. **Gjennomregnet eksamenscase** ($x^3-2$: splittkropp $\mathbb{Q}(\sqrt[3]{2},\zeta_3)$ grad 6, $G\cong S_3$, de tre mellomkroppene av grad 2/3 via korrespondansen) med sensor-margnotater (graden regnet FØR gruppa identifiseres, virkning på røttene, korrespondansen begge veier). 10–15 oppgaver: minst én full $S_3$/$D_4$-analyse, én med «$ax+b$»/orden-20-gruppe, én mellomkropp-fra-undergruppe, én fikskropp via gradargument.
- **Oppgavesjangre:** L. Mønstereksempel: «La $K$ være splittkroppen til $x^4-2$ over $\mathbb{Q}$. Finn $[K:\mathbb{Q}]$, vis at $G(K/\mathbb{Q})\cong D_4$, og bestem alle mellomkropper av grad 2 via korrespondansen.»
- **Typiske feil:** Hele fellekatalogen fra 9.1–9.3 under tidspress; identifisere gruppa før graden er regnet; glemme enhetsrøtter i splittkroppen; korrespondansen i feil retning; feil undergruppe-orden ↔ mellomkropp-grad.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 9:** 4 prøver (spesifisert i §4).

---

### Del 10 — Endelige kropper *(prioritet: KUNNE — ~65 %, ØKENDE vekt V2019–2023)*

#### Kapittel 10.1: Endelige kropper F_{p^n}: k[x]/⟨f⟩ og potensregning modulo f

- **id:** `mat2200-10-1` · **number:** 10.1 · **estimatedMinutes:** 55 · **prerequisites:** `mat2200-8-1`, `mat2200-7-2`
- **kapitteltype:** teori
- **description:** Konstruksjonen av endelige kropper: Z_p[x]/⟨f⟩ er en kropp nøyaktig når f er irredusibel, med p^{deg f} elementer og basis 1,θ,…,θ^{n−1} — og hvordan man regner med potenser av θ modulo f.
- **Forkunnskaper (kryssbok):** Kap. 8.1 (enkel utvidelse/basis), 7.2 (irredusibilitet), 6.3 (maksimalideal → kropp).
- **Eksamensbelegg:** Sjanger J (~65 %). Fasitens grep: $k[x]/\langle f\rangle$ kropp ⇔ $f$ irredusibel; antall elementer $=|k|^{\deg f}=p^n$; regn potenser av $\theta=\bar x$ ved å redusere mod $f(\theta)=0$. Prioritet: **kunne**.
- **Innholdskontrakt:** **Endelig kropp** (*finite field*) $F_{p^n}$/$\mathrm{GF}(p^n)$; **$k[x]/\langle f\rangle$ er en kropp ⇔ $f$ irredusibel** (⇔ $\langle f\rangle$ maksimal, kap. 6.3); **antall elementer** $=p^{\deg f}$; hver endelig kropp har orden en primpotens $p^n$ og karakteristikk $p$; **$\theta=\bar x$** er rot av $f$, basis $\{1,\theta,\dots,\theta^{n-1}\}$ over $\mathbb{Z}_p$; **potensregning** modulo $f(\theta)=0$ (f.eks. i $\mathbb{Z}_3[x]/\langle x^2+1\rangle$: $\theta^2=-1=2$); invers via euklidsk algoritme; multiplikativgruppa $F_{p^n}^*$ er **syklisk** av orden $p^n-1$ (primitivt element). Tallverdier eksplisitt (antall elementer, basis).
- **Oppgavesjangre:** J. Mønstereksempel: «Vis at $\mathbb{Z}_3[x]/\langle x^2+1\rangle$ er en kropp, oppgi antall elementer og en basis, og regn $(\theta+1)^{-1}$ i basisen.»
- **Typiske feil:** Bruke et reduktibelt $f$ (da blir det ikke en kropp — nulldelere); feil antall elementer (ikke $p^{\deg f}$); regnefeil i potensreduksjon; glemme å redusere koeffisienter i $\mathbb{Z}_p$ ($2+1=0$ i $\mathbb{Z}_3$); anta $F_{p^n}^*$ ikke syklisk.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 10.2: Frobenius, Fermat, primitive polynomer og F_16

- **id:** `mat2200-10-2` · **number:** 10.2 · **estimatedMinutes:** 55 · **prerequisites:** `mat2200-10-1`
- **kapitteltype:** teori
- **description:** Den økende spesialiseringen (V2019–2023): Frobenius-automorfien σ(a)=a^p med freshman's dream, Fermat α^p=α, primitive polynomer og entydigheten av F_{p^n} — med F_16 som gjennomgangseksempel.
- **Forkunnskaper (kryssbok):** Kap. 10.1 (endelige kropper), 2.2 (konjugerte røtter via automorfi).
- **Eksamensbelegg:** Sjanger J (~65 %, ØKENDE). Fasitens grep: **Frobenius** $\sigma(a)=a^p$ med **freshman's dream** $(a+b)^p=a^p+b^p$; **Fermat** $\alpha^p=\alpha$ for alle $\alpha\in\mathbb{Z}_p$ (nullpunkter for $x^p-x$); irredusibelt $f$ splitter via $\theta,\theta^p,\theta^{p^2},\dots$; $F_{p^n}$ entydig opp til isomorfi. Prioritet: **kunne** (og økende).
- **Innholdskontrakt:** **Frobenius-automorfien** (*Frobenius automorphism*) $\sigma_p(a)=a^p$: en kroppsautomorfi i karakteristikk $p$, med **freshman's dream** $(a+b)^p=a^p+b^p$ (fordi $p\mid\binom{p}{k}$); genererer $G(F_{p^n}/\mathbb{Z}_p)$, syklisk av orden $n$; **Fermats lille teorem** $\alpha^p=\alpha$ for $\alpha\in\mathbb{Z}_p$ (så $\mathbb{Z}_p$ er nullpunktmengden for $x^p-x$); $F_{p^n}$ = nullpunktmengden for $x^{p^n}-x$, **entydig opp til isomorfi**; **konjugerte røtter** til irredusibel $f$: $\theta,\theta^p,\theta^{p^2},\dots,\theta^{p^{n-1}}$ (Frobenius-banen); **primitivt element/polynom** (*primitive element/polynomial*): generator for $F_{p^n}^*$; delkropper $F_{p^m}\subseteq F_{p^n}$ ⇔ $m\mid n$. Gjennomgangseksempel **$F_{16}=F_{2^4}$**. «Alternatively»: to isomorfe konstruksjoner av samme $F_{p^n}$ via ulike irredusible polynomer.
- **Oppgavesjangre:** J. Mønstereksempel: «I $F_{16}=\mathbb{Z}_2[x]/\langle x^4+x+1\rangle$ med rot $\theta$: skriv $\sigma(\theta)$ og $\sigma^2(\theta)$ i basisen $\{1,\theta,\theta^2,\theta^3\}$ og finn de konjugerte røttene til $\theta$.»
- **Typiske feil:** Bruke freshman's dream i karakteristikk 0 ($(a+b)^p\ne a^p+b^p$ i $\mathbb{Q}$); anta at $\alpha\mapsto\beta$ mellom to røtter alltid gir isomorfi (kun ved samme minimalpolynom); feil delkropp-kriterium ($m\mid n$); regnefeil i Frobenius-banen; blande $x^{p^n}-x$ og $x^{p^n-1}-1$.
- **Quiz: 16 · Flashcards: 22**

**Prøve-kvote Del 10:** 4 prøver (spesifisert i §4).

---

### Del 11 — Spesialsjangre og passer-linjal *(prioritet: KJENNE — topp-poeng/lav frekvens)*

#### Kapittel 11.1: Spesialsjangre: nilpotente, automorfigrupper, moteksempler, cyklisk-karakterisering og passer-linjal

- **id:** `mat2200-11-1` · **number:** 11.1 · **estimatedMinutes:** 55 · **prerequisites:** `mat2200-6-1`, `mat2200-3-2`, `mat2200-9-3`
- **kapitteltype:** teori
- **description:** Sekkeposten av lavfrekvente sjangre som skiller på toppen: nilpotente elementer som ideal, automorfi-/kommutatorgrupper, uendelige gruppe-moteksempler, cyklisk-karakteriseringen via Σφ(d), og en kort orientering om passer-og-linjal.
- **Forkunnskaper (kryssbok):** Kap. 6.1 (ringer), 3.2 (homomorfier/automorfier), 1.4 (φ-funksjon), 9.3 (konstruerbarhet-kobling).
- **Eksamensbelegg:** Sjanger N (~5–15 % per undertema, topp-karakterskiller). Dokumenterte: nilpotente danner ideal ($(a+b)^{n+m}=0$ via binomialteorem); nilpotent matrise ⇒ $\det=0$ (V2016); uendelige moteksempler ($G=\cup gHg^{-1}$ krever uendelig $G$, V2006); cyklisk-karakterisering ($\sum_{d\mid n}\varphi(d)=n$-argument, V2021); passer-linjal (i pensum, ~5 % i sett). Prioritet: **kjenne**.
- **Innholdskontrakt:** **Nilpotent element** (*nilpotent*): $a^m=0$; i en kommutativ ring danner nilpotentene et ideal (nilradikalet) — bevis via binomialteoremet $(a+b)^{n+m}=0$; nilpotent matrise ⇒ $\det=0$. **Automorfigruppe** (*automorphism group*) $\operatorname{Aut}(G)$, indre automorfier $\operatorname{Inn}(G)\cong G/Z(G)$; **kommutator** (*commutator*) $[x,y]=xyx^{-1}y^{-1}$, kommutatorundergruppe (kjennskap). **Uendelige gruppe-moteksempler**: en endelig-indeks-undergruppe kan ikke dekke $G$ som union av konjugater med mindre $G$ er uendelig. **Cyklisk-karakterisering**: en endelig gruppe der hver divisor $d\mid|G|$ har høyst én undergruppe av orden $d$, er syklisk ($\sum_{d\mid n}\varphi(d)=n$-telling). **Passer og linjal** (*straightedge and compass*, KORT, «bør kjenne til»): et tall er konstruerbart ⇔ det ligger i en kropp nådd ved en kjede av kvadratiske utvidelser ⇒ konstruerbar grad er en 2-potens (derav umulighet av vinkeltredeling, terningsdobling); kobling til $\mathbb{Q}(\zeta_n)$ (9.3).
- **Oppgavesjangre:** N. Mønstereksempel: «Vis at mengden av nilpotente elementer i en kommutativ ring $R$ er et ideal.» og «Vis at en endelig gruppe med høyst én undergruppe av hver orden $d\mid|G|$ er syklisk.»
- **Typiske feil:** Glemme binomialteorem-graden for nilradikalet (må velge eksponent stor nok); bruke nilradikal-argumentet i ikke-kommutativ ring; feil i $\sum\varphi(d)$-tellingen; overvurdere passer-linjal (lav eksamensvekt — hold kort); forveksle $\operatorname{Aut}$ og $\operatorname{Inn}$.
- **Quiz: 12 · Flashcards: 16**

**Prøve-kvote Del 11:** 4 korte prøver (spesifisert i §4 — dekker de fem undertemaene).

---

### Del 12 — Eksamenstrening

#### Kapittel 12.1: Bevisverkstedet: de åtte standardargumentene og «Alternatively»-katalogen

- **id:** `mat2200-12-1` · **number:** 12.1 · **estimatedMinutes:** 55 · **prerequisites:** Del 1–10
- **kapitteltype:** teori (metode)
- **description:** De åtte argumentmaskinene samlet på ett sted som førbare oppskrifter med navngitte teoremer og forutsetningssjekk, pluss «Alternatively»-katalogen (nabometodene sensor premierer) og teoremnavn-banken du må kunne utenat.
- **Eksamensbelegg:** Metaregel-kapittel bygget på fasitstilen og de fire argumentmaskinene (analysen §4/§6): studenten må kunne **føre**, ikke bare gjengi, de åtte standardargumentene. Prioritet: **perfekt** (bevisføring bærer karakteren).
- **Innholdskontrakt:** **De åtte standardargumentene** som algoritmiske oppskrifter med navngitt teorem + forutsetningssjekk: (1) **Sylow-eksklusjon** → normal Sylow (kap. 4.4); (2) **coprime-produkt-dekomposisjon** $G\cong H\times K$ (3.3); (3) **kvotient-kriteriet** for prim/maksimal (6.3); (4) **irredusibilitet** (Eisenstein + grad ≤ 3-argument, 7.2); (5) **tårnformel-beregning** av $[K:\mathbb{Q}]$ (8.3); (6) **splittkropp + Galois-gruppe-identifikasjon** (9.4); (7) **fikskropp-bestemmelse** med gradargument (9.3); (8) **$p$-gruppe-fikspunkt** via klasseligning (4.2). **«Alternatively»-katalogen**: for hvert relevante mønster de to veiene sensor honorerer (undergruppetest vs. aksiomer; ideal som kjerne vs. absorpsjon; kvotient-kriterium vs. direkte prim/maksimal; coprime-produkt vs. eksplisitt isomorfi; primtall-trikset vs. eksplisitt basisregning). **Teoremnavn-banken** (norsk/engelsk): Lagrange, Cauchy, Sylow I–III, strukturteoremet, isomorfiteoremet, kvotient-kriteriet, Eisenstein, tårnformelen, hovedsetningen i Galois-teori, Frobenius, Fermat — alle må kunne navngis, formuleres og bevis-skisseres utenat (ingen hjelpemidler). Sjekklisten før innlevering: forutsetning sjekket? teorem navngitt? begge retninger av ⇔? tallverdier oppgitt? «Alternatively»-snarvei sett?
- **Oppgavesjangre:** Meta/bevis. Mønstereksempel: «Nedenfor er en Sylow-besvarelse som konkluderer ‘normal’ etter bare å ha vist $N_p\equiv1\pmod p$. Pek på det manglende leddet ($N_p\mid$ indeks + eksklusjon) og skriv om til full uttelling.»
- **Typiske feil:** De åtte argumentenes fellekataloger samlet: ufullstendig Sylow-eksklusjon, manglende forutsetningssjekk (Eisenstein/Sylow/tårnformel), bare én retning av en ⇔, gruppa identifisert før graden, freshman's dream i feil karakteristikk, korrespondansen i feil retning, ubegrunnet irredusibilitet.
- **Quiz: 14 · Flashcards: 32** (de åtte oppskriftene + «Alternatively»-par + teoremnavn-bank — flashcard-gull for et hjelpemiddelfritt bevisemne)

#### Kapittel 12.2: Øvingseksamen 1: klassisk 4-oppgavers skoleeksamen (bred kjerne)

- **id:** `mat2200-12-2` · **number:** 12.2 · **estimatedMinutes:** 240 · **prerequisites:** `mat2200-12-1`
- **kapitteltype:** øvingseksamen (skriftlig)
- **description:** Komplett 4-timers sett etter den klassiske malen 2006–2019/2023: fire likt vektede bevisoppgaver med deloppgaver a–d som treffer hele bredden — gruppeteori, permutasjons-/ringteori, endelige kropper, Galois — fullt bevist.
- **Eksamensbelegg/miks:** Speiler den klassiske skoleeksamenen (**4 oppgaver med lik vekt, deloppgaver a–d, 4 timer, ingen hjelpemidler, engelsk, «Justification must be provided»**), kalibrert på prognosen i analysens §7: **O1 (gruppeteori)** vis at (mengde) er gruppe (sjanger A) + list abelske grupper av gitt orden (B) + Sylow-argument for normal undergruppe (F) → **O2 (permutasjons-/ringteori)** syklenotasjon/paritet/orden=mfm (D) + ideal via kjerne + prim/maksimal via kvotient-kriteriet (H) → **O3 (endelige kropper)** $\mathbb{Z}_p[x]/\langle f\rangle$ som kropp: irredusibilitet + antall elementer + basis + Frobenius (J) → **O4 (Galois)** splittkropp til konkret $f$ + $[K:\mathbb{Q}]$ via tårnformelen + Galois-gruppe + mellomkropp via korrespondansen (K + L). Alle oppgaver nyskrevne med «pene» tall/små strukturer (regnbart uten hjelpemidler). Løsningsforslag i `collapsible` per deloppgave som **A-besvarelse med navngitte teoremer og forutsetningssjekk** (føringsstandarden), med `tip`-notat om tidsbudsjett og hvor bevis-poengene sitter (justification, ikke svaret).
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 12.3: Øvingseksamen 2: klassisk 4-oppgavers skoleeksamen (restsjangre + endelige kropper-tung)

- **id:** `mat2200-12-3` · **number:** 12.3 · **estimatedMinutes:** 240 · **prerequisites:** `mat2200-12-2`
- **kapitteltype:** øvingseksamen (skriftlig)
- **description:** Komplett sett nummer to som treffer sjangrene sett 1 ikke gjorde — matrisegruppe, gruppevirkning/fikspunkt, homomorfi/direkte produkt, nulldelere, polynomirredusibilitet, cyklotomisk Galois — så de to settene sammen dekker A–N.
- **Eksamensbelegg/miks:** Samme mal (4 likt vektede bevisoppgaver a–d, 4 timer, ingen hjelpemidler), med **restsjangrene** (sammen dekker 12.2 + 12.3 alle A–N): **O1 (gruppeteori)** matrisegruppe: gruppe/orden/abelsk (A) + gruppevirkning: orbit–stabilisator eller $p$-gruppe-fikspunkt (E) → **O2 (grupper/homomorfi)** orden av element i produkt = mfm + kvotient opp til isomorfi (C) + homomorfi/kjerne/isomorfiteorem + coprime-produkt $G\cong H\times K$ (M) → **O3 (ringer/polynomer)** nulldelere/integritetsområde i $\mathbb{Z}_n$ (G) + irredusibilitet: Eisenstein + grad ≤ 3 + faktorisering over $\mathbb{Z}_p$ (I) + polynomdivisjon → ideal = hele ringen → **O4 (Galois, cyklotomisk)** $\mathbb{Q}(\zeta_n)$: grad $\varphi(n)$ + Galois-gruppe $(\mathbb{Z}_n)^*$ + fikskropp via $\zeta+\zeta^{-1}$ og gradargument (L). Alle nyskrevne; løsningsforslag som A-besvarelse med teoremnavning + forutsetningssjekk og `tip`-notat om delpoeng.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 12.4: Øvingseksamen 3: 5-oppgavers korona-variant (ekstra Galois, «all aids»)

- **id:** `mat2200-12-4` · **number:** 12.4 · **estimatedMinutes:** 240 · **prerequisites:** `mat2200-12-3`
- **kapitteltype:** øvingseksamen (skriftlig, sekundær variant)
- **description:** Beredskapsformatet: 5 oppgaver med en ekstra Galois-oppgave slik V2020/V2022 var bygget, med eksplisitte poeng og «all aids» — men fortsatt fullt bevist, fordi «most points given for the justification».
- **Eksamensbelegg/miks:** **Sekundær variant** (verifiser mot første sett etter analysedato — normalformen er 4-oppgavers skoleeksamen uten hjelpemidler). Speiler korona-hjemmeeksamenene V2020/V2022: **5 oppgaver med eksplisitte poeng** (à la 5/10/10 per deloppgave), «all aids», men samme oppgavetyper: **O1** gruppe + Sylow (A + F) → **O2** ring/ideal + endelig kropp (H + J) → **O3** kroppsutvidelse + tårnformel (K) → **O4** Galois: splittkropp + gruppe + korrespondanse (L) → **O5 (ekstra Galois/blandet)** cyklotomisk fikskropp eller en andre splittkropp-analyse + et spesialsjanger-bevis fra §11 (L + N). `warning` om at «all aids» **ikke** senker bevis-kravet — «most points for the justification» gjaldt fortsatt. Løsningsforslag som A-besvarelse med eksplisitt poengfordeling per deloppgave og `tip`-notat om at dette er beredskapsformatet.
- **Quiz: 5 · Flashcards: 0**

**Prøve-kvote Del 12:** ingen egne temaprøver — øvingseksamenene (12.2–12.4) er delens prøver.

---

### Summeringskontroll (quiz/flashcards) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1–0.2 | 10+12 = **22** | 14+28 = **42** |
| 1 | 1.1–1.5 | 18+16+18+16+16 = **84** | 22+20+22+22+6 = **92** |
| 2 | 2.1–2.2 | 18+16 = **34** | 20+20 = **40** |
| 3 | 3.1–3.4 | 16+18+16+16 = **66** | 22+22+20+18 = **82** |
| 4 | 4.1–4.4 | 16+14+18+16 = **64** | 22+18+22+8 = **70** |
| 5 | 5.1–5.2 | 18+16 = **34** | 22+8 = **30** |
| 6 | 6.1–6.4 | 18+16+16+16 = **66** | 22+22+22+8 = **74** |
| 7 | 7.1–7.2 | 16+18 = **34** | 22+22 = **44** |
| 8 | 8.1–8.3 | 18+18+16 = **52** | 22+22+8 = **52** |
| 9 | 9.1–9.4 | 16+18+14+16 = **64** | 22+24+18+8 = **72** |
| 10 | 10.1–10.2 | 16+16 = **32** | 22+22 = **44** |
| 11 | 11.1 | **12** | **16** |
| 12 | 12.1–12.4 | 14+5+5+5 = **29** | 32+0+0+0 = **32** |
| **Sum** | **39 kap.** | **593 ≥ 500 ✓** | **690 (mål 600–700) ✓** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
**Flashcard-tettheten er bevisst høy (690, ikke ~510):** MAT2200 er et
**definisjons- og teoremrikt bevisemne uten hjelpemidler** — alt apparatet
(definisjoner, teoremformuleringer, forutsetningssjekklister, standardbevis-
oppskrifter, tospråklige termpar norsk/engelsk) må sitte utenat, så det er selve
puggematerialet. De teoritunge kapitlene og de to metode-/bevisverksted-
kapitlene (0.2 og 12.1) bærer tettheten; drillkapitlene holdes lave (6–8) fordi
deres verdi er oppgaver, ikke kort. Quiz-fordelingen speiler eksamensvektene:
**Del 8+9 (tårnformel + Galois — ryggraden og siste oppgave) bærer 116 quiz**,
Del 1 (grupper) 84, Del 4+6 (Sylow + idealer, argumentmaskiner ii og iii) 130;
øvingseksamenene holdes lave på quiz (5 hver) fordi verdien er hele oppgavesett.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–11, 44 totalt)

Alle prøver består av nyskrevne oppgaver i arkivets sjangre, med løsningsforslag
som **A-besvarelse** (navngitte teoremer, forutsetningssjekk, full bevisføring),
poengfordeling og eksakte tallverdier. Legges som prøvekapitler
(`mat2200-<del>-prove`, chapterNumber `<del>.P`) etter plattformens mønster.

**Del 1 — Grupper, undergrupper og Lagrange**
1. Prøve 1.A (35 min): Gruppeaksiomer + undergruppetest (kap. 1.1, sjanger A).
2. Prøve 1.B (35 min): Matrisegruppe — gruppe/orden/abelsk (kap. 1.2, sjanger A).
3. Prøve 1.C (35 min): Lagrange + sykliske grupper (undergrupper $d\mid n$, $\varphi(d)$) (kap. 1.3–1.4).
4. Prøve 1.D (40 min): Oppgave 1a-simulering — vis gruppe/undergruppe, begge «Alternatively»-veier (kap. 1.1–1.5, sjanger A).

**Del 2 — Permutasjonsgrupper**
1. Prøve 2.A (30 min): Syklenotasjon + paritet + $A_n$ (kap. 2.1, sjanger D).
2. Prøve 2.B (30 min): Orden = mfm + konjugasjonsformel (kap. 2.2, sjanger D).
3. Prøve 2.C (30 min): $A_n$ ikke abelsk + $\sigma^2$-syklestruktur (kap. 2.2, sjanger D).
4. Prøve 2.D (35 min): Permutasjons-tverrsnitt — sammensetning + orden + paritet + konjugasjon (kap. 2.1–2.2, sjanger D).

**Del 3 — Homomorfier, kvotienter og isomorfiteoremene**
1. Prøve 3.A (35 min): Normal undergruppe + kvotientgruppe (kap. 3.1, sjanger M).
2. Prøve 3.B (35 min): Homomorfi + kjerne + isomorfiteoremet (kap. 3.2, sjanger M).
3. Prøve 3.C (35 min): Direkte produkt $G\cong H\times K$ med full injektivitet/surjektivitet (kap. 3.3, sjanger M).
4. Prøve 3.D (40 min): Orden i produkt (mfm) + kvotient opp til isomorfi (kap. 3.4, sjanger C).

**Del 4 — Gruppevirkninger og Sylow**
1. Prøve 4.A (35 min): Orbit–stabilisator + klasseligning (kap. 4.1, sjanger E).
2. Prøve 4.B (30 min): $p$-gruppe-fikspunkt + Cauchy (kap. 4.2, sjanger E).
3. Prøve 4.C (40 min): Sylow I–III + $N_p$-betingelsene (kap. 4.3, sjanger F).
4. Prøve 4.D (45 min): Argumentmaskin ii — full Sylow-eksklusjon + coprime-produkt → normal/abelsk (kap. 4.4, sjanger F).

**Del 5 — Klassifikasjon av endelige abelske grupper**
1. Prøve 5.A (30 min): List abelske grupper av gitt orden + entydighet (kap. 5.1, sjanger B).
2. Prøve 5.B (35 min): Antall abelske grupper + isomorfi mellom produkter (kap. 5.1, sjanger B).
3. Prøve 5.C (35 min): Kvotient-identifikasjon via elementorden (kap. 5.2, sjanger B + C).
4. Prøve 5.D (40 min): Argumentmaskin i — full klassifikasjon + kvotient-kobling (kap. 5.1–5.2, sjanger B).

**Del 6 — Ringer, idealer og kvotientringer**
1. Prøve 6.A (35 min): Nulldelere/enheter/integritetsområde i $\mathbb{Z}_n$ (kap. 6.1, sjanger G).
2. Prøve 6.B (35 min): Ideal via kjerne + kvotientring via isomorfiteoremet (kap. 6.2, sjanger H).
3. Prøve 6.C (40 min): Prim/maksimal via kvotient-kriteriet — full ekvivalenskjede (kap. 6.3, sjanger H).
4. Prøve 6.D (45 min): Argumentmaskin iii — ideal + kvotient + prim/maksimal, begge «Alternatively»-veier (kap. 6.4, sjanger H).

**Del 7 — Polynomringer og faktorisering**
1. Prøve 7.A (35 min): Polynomdivisjon + euklidsk algoritme → ideal = hele ringen (kap. 7.1, sjanger I).
2. Prøve 7.B (35 min): Eisenstein + grad ≤ 3-argument over $\mathbb{Q}$ (kap. 7.2, sjanger I).
3. Prøve 7.C (35 min): Irredusibilitet + faktorisering over $\mathbb{Z}_p$ (kap. 7.2, sjanger I).
4. Prøve 7.D (40 min): Polynom-tverrsnitt — irredusibilitet (grad 3 og 4) + ideal-argument (kap. 7.1–7.2, sjanger I).

**Del 8 — Kroppsutvidelser, tårnformelen og minimalpolynom**
1. Prøve 8.A (35 min): Minimalpolynom + grad + basis + potensregning (kap. 8.1, sjanger K).
2. Prøve 8.B (40 min): Tårnformelen — flertrinns-grad med trinnsjekk (kap. 8.2, sjanger K).
3. Prøve 8.C (35 min): Primtall-trikset — likhet av kropper (kap. 8.2, sjanger K).
4. Prøve 8.D (45 min): Argumentmaskin iv/1 — full $[K:\mathbb{Q}]$-beregning + basis (kap. 8.3, sjanger K).

**Del 9 — Galois-teori**
1. Prøve 9.A (40 min): Splittkropp + grad via tårnformelen (kap. 9.1, sjanger L).
2. Prøve 9.B (45 min): Galois-gruppe $|G|=[K:\mathbb{Q}]$ + identifikasjon + korrespondanse (kap. 9.2, sjanger L).
3. Prøve 9.C (40 min): Cyklotomisk $\mathbb{Q}(\zeta_n)$ + fikskropp via $\zeta+\zeta^{-1}$ (kap. 9.3, sjanger L).
4. Prøve 9.D (50 min): Argumentmaskin iv/2 — full siste-oppgave-simulering: splittkropp → gruppe → mellomkropp/fikskropp (kap. 9.4, sjanger L).

**Del 10 — Endelige kropper**
1. Prøve 10.A (35 min): $\mathbb{Z}_p[x]/\langle f\rangle$ kropp + antall elementer + basis (kap. 10.1, sjanger J).
2. Prøve 10.B (35 min): Potensregning modulo $f$ + invers (kap. 10.1, sjanger J).
3. Prøve 10.C (40 min): Frobenius + freshman's dream + konjugerte røtter (kap. 10.2, sjanger J).
4. Prøve 10.D (40 min): Endelig-kropp-tverrsnitt — $F_{16}$: kropp + Frobenius-bane + primitivt element (kap. 10.1–10.2, sjanger J).

**Del 11 — Spesialsjangre og passer-linjal**
1. Prøve 11.A (25 min): Nilpotente danner ideal (binomialteorem) (kap. 11.1, sjanger N).
2. Prøve 11.B (25 min): Automorfigrupper/kommutatorer + $\operatorname{Inn}(G)\cong G/Z(G)$ (kap. 11.1, sjanger N).
3. Prøve 11.C (25 min): Cyklisk-karakterisering ($\sum_{d\mid n}\varphi(d)=n$) + uendelig moteksempel (kap. 11.1, sjanger N).
4. Prøve 11.D (25 min): Passer-linjal (konstruerbar grad = 2-potens) — kort (kap. 11.1, sjanger N).

### Øvingseksamener (3 komplette sett — se kap. 12.2–12.4)

| Sett | Form den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (kap. 12.2) | Klassisk 4-oppgavers skoleeksamen 2006–2019/2023 (primær) | Bred kjerne: O1 A+B+F, O2 D+H, O3 J, O4 K+L |
| Øvingseksamen 2 (kap. 12.3) | Samme mal, restsjangre | O1 A+E, O2 C+M, O3 G+I, O4 L (cyklotomisk) |
| Øvingseksamen 3 (kap. 12.4) | 5-oppgavers korona-variant V2020/V2022 (sekundær) | O1 A+F, O2 H+J, O3 K, O4 L, O5 L+N (ekstra Galois) |

Til sammen dekker de tre settene samtlige sjangre A–N minst én gang og trener
den **hjelpemiddelfrie, fullt beviste** produksjonen (primær, 12.2–12.3) samt
5-oppgavers «all aids»-varianten (sekundær, 12.4). Alle løsningsforslag føres som
A-besvarelser med navngitte teoremer og forutsetningssjekk.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen: eksamenskart + bevishåndverk) +
kapitlenes Eksamensvinkel-blokker:

1. **Én bred bevistung eksamen, fire argumentmaskiner** — vurderingsformen (4-timers
   skriftlig skoleeksamen, ingen hjelpemidler, engelsk, 4 likt vektede oppgaver
   a–d), formathistorikken (papir → korona-hjemmeeksamen → retur til skoleeksamen)
   og hovedfunnet: temaene og oppgavetypene er bemerkelsesverdig stabile, hvert
   sett dekker hele bredden, ~85–90 % er bevisføring (fra kap. 0.1).
2. **Bevishåndverket** — hvordan et algebrabevis føres: navngi teoremet, sjekk
   forutsetningene, skill ⇒ og ⇔, før ekvivalenskjeder fullt ut, se
   «Alternatively»-snarveien; den tospråklige begrepsbanken (norsk/engelsk) for å
   lese engelsk oppgavetekst og svare på engelsk (fra kap. 0.2).
3. **Prioriteringskartet** — frekvens-tabellen omgjort til tre lesenivåer: **perfekt**
   (Del 8 kroppsutvidelser/tårnformel ~95 %, Del 9 Galois ~90 %, Del 4 Sylow ~85 %,
   Del 5 klassifikasjon ~80 %, Del 6 idealer ~75 %), **kunne** (Del 1 grupper ~70 %,
   Del 2 permutasjon ~65 %, Del 10 endelige kropper ~65 %, Del 3 homomorfi ~65 %,
   Del 7 polynomirredusibilitet ~60 %), **kjenne** (Del 11 spesialsjangre, passer-
   linjal ~5 %) — med notatet om at hvert sett dekker hele bredden, så
   **beherskelsesdybde i de fire argumentmaskinene** slår tema-utvalg.
4. **Sjangerguiden** — A–N med løsningsoppskriftene fra drillkapitlene (4.4, 5.2,
   6.4, 8.3, 9.4) og bevisverkstedet (12.1) i kortform.
5. **De fire argumentmaskinene** — (i) strukturteoremet, (ii) Sylow-eksklusjon +
   coprime-produkt, (iii) kvotient-kriteriet + kjerne-snarvei, (iv) tårnformel +
   Galois-korrespondanse — hver som en førbar oppskrift med navngitte teoremer.
6. **Sensorreglene** — «Justification must be provided», teoremnavning (må pugges,
   ingen hjelpemidler), forutsetningssjekk, ekvivalenskjeder fullt ut,
   «Alternatively»-bevissthet, eksakte tallverdier — pluss karakterskille-listen
   (bestått/midt/topp fra kap. 0.1).
7. **Feilkatalogen** — de 12 typiske feilene fra analysen §5 samlet (mengde uten
   inverssjekk, orden = produkt i stedet for mfm, ubegrunnet irredusibilitet,
   prim/maksimal-forveksling, Galois-gruppe uten gradregning, hoppe over
   tårnformelen, ufullstendig Sylow-eksklusjon, entydighet ikke nevnt, freshman's
   dream i feil karakteristikk, konjugerte-element-forveksling, ubegrunnet
   isomorfi, regne i feil ring/kropp), hver med henvisning til kapitlet som
   forebygger den.
8. **Teorem- og definisjonsapparatet (norsk/engelsk, Fraleigh-notasjon)** — hele
   apparatet fra innholdskontraktene med markering **formulere/bevise/anvende
   aktivt** vs. **kun bruke**, og påminnelsen om at alt må kunnes utenat (ingen
   hjelpemidler): Lagrange, Sylow I–III, strukturteoremet, isomorfiteoremet,
   kvotient-kriteriet, Eisenstein, tårnformelen, hovedsetningen i Galois-teori,
   Frobenius, Fermat.
9. **Studieløp** — semesterplan: Del 0 (eksamenskart + bevishåndverk) → Del 1–3
   (gruppespråket) → Del 4 (Sylow, argumentmaskin ii) → Del 5 (klassifikasjon,
   maskin i) → Del 6–7 (ringer/polynomer, maskin iii) → **Del 8 (tårnformel — bruk
   mest tid, ryggraden) → Del 9 (Galois — siste oppgave, maskin iv)** → Del 10
   (endelige kropper, økende) → Del 11 (spesialsjangre for toppkarakter) →
   temaprøvene → bevisverkstedet (12.1) → de tre øvingseksamenene under tidspress
   (4 timer, ingen hjelpemidler). Notat: Galois er vanskeligst MEN mest
   forutsigbar (garantert siste oppgave) — prioriter den høyt tross vanskegraden.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `mat2200` med alle 39
   kapitler (id/number/title/description/estimatedMinutes/topics/prerequisites)
   etter mønster `COURSE_BI_OKONOMI` i `textbook-courses-matte.ts`, + `sectionNames`
   fra §2-tabellen (del-nummer → seksjonstittel). **`number` SKAL være del-basert**
   («9.2», ALDRI lineær «34») — bokforsiden grupperer på `number.split('.')[0]`.
   Prosareferanser i innholdet bruker samme del-baserte form («kap. 9.2»).
2. **Del 0** (kap. 0.1–0.2) — etablerer sjangernavnene A–N, frekvenstallene, de
   fire argumentmaskinene og bevishåndverk-standarden som resten refererer til.
3. **Gruppedelene i avhengighetsrekkefølge**: Del 1 (grupper/Lagrange/sykliske) →
   Del 2 (permutasjon; krever 1.1) → Del 3 (homomorfi/kvotient/direkte produkt;
   krever 1.3) → Del 4 (gruppevirkning/Sylow; krever 4.2→4.3, og 4.4 krever 3.3) →
   Del 5 (klassifikasjon; krever 3.3 + 1.4).
4. **Ring-/polynomdelene**: Del 6 (ringer/idealer; 6.2 krever 3.2-analogien) →
   Del 7 (polynomringer; krever 6.2).
5. **Kropps-/Galois-tyngdepunktet**: Del 8 (kroppsutvidelser/tårnformel; krever 7.2)
   → Del 9 (Galois; 9.1 krever 8.2 + 7.2, 9.2 krever 3.1) → Del 10 (endelige
   kropper; krever 8.1 + 7.2).
6. **Spesialsjangre**: Del 11 (krever 6.1, 3.2, 9.3).
7. **Del 12** til slutt (bevisverkstedet + de tre øvingseksamenene gjenbruker alt
   og må dekke A–N + begge produksjonsmåter). Temaprøvene (§4) legges som
   prøvekapitler (`mat2200-<del>-prove`, chapterNumber `<del>.P`), 4 per temadel
   1–11 (44 stk).
8. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles.

**Batching (fase 4):** én agent per hel del. Del 1, 4 og 6 (4–5 kap.) og Del 12
(4 kap., hvorav 3 øvingseksamener) er de største — hold hver del samlet hos én
agent, flagg dem for konsistenssjekk. Del 9 (Galois) bygges av en agent som også
leser 8.2–8.3 (grad-regningen bæres dit) og 3.1 (normale undergrupper).
Øvingseksamenene (12.2–12.4) og bevisverkstedet (12.1) bygges av én agent som
leser HELE skjelettet (de gjenbruker alle sjangre og de åtte argumentene).

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser (`json.load`); generer JSON via
      `json.dump`, ikke håndskriving — LaTeX krever `\\` i JSON-strenger;
      `npm run build` grønn (combine-chapters fanger ugyldig JSON i registry).
- [ ] **LaTeX + Fraleigh-notasjon**: all matematikk i `$...$`/`$$...$$`; ingen
      unicode-brøker; konsistent Fraleigh-notasjon: $Z_n$, $Z_n^*$/$U(Z_n)$, $S_n$,
      $A_n$, $D_n$, $\langle a\rangle$, $H\trianglelefteq G$, $[G:H]$, $G/H$,
      $H\times K$, $R/I$, $k[x]/\langle f\rangle$, $\operatorname{irr}(\alpha,k)$,
      $[K:k]$, $G(K/Q)$, $E^H$, $\zeta_n$, $F_{p^n}$, Frobenius $\sigma_p$.
- [ ] **Bevisstandard i ALLE eksempler og løsningsforslag**: løsningen ER et bevis
      i A-besvarelse-form — forutsetning navngis, **teoremet navngis** (Lagrange,
      Sylow, Eisenstein, strukturteoremet, isomorfiteoremet, tårnformelen,
      hovedsetningen i Galois-teori, Frobenius/Fermat), begge retninger av ⇔ vist,
      ekvivalenskjeder fullt ut, konklusjonen trukket eksplisitt, tallverdier
      oppgitt (orden, $[K:Q]$, $p^n$, basis, $N_p$). Ubegrunnet fasitsvar er en
      byggefeil (dette er et bevisemne — ~85–90 % av poengene).
- [ ] **«Alternatively»-par**: kapitlene 1.1, 3.3, 6.2, 6.3, 8.2 og bevisverkstedet
      (12.1) viser eksplisitt de to veiene sensor premierer (undergruppetest vs.
      aksiomer; ideal som kjerne vs. absorpsjon; kvotient-kriterium vs. direkte;
      coprime-produkt vs. eksplisitt isomorfi; primtall-trikset vs. basisregning).
- [ ] **Tospråklig begrepsbank**: hvert fagbegrep har norsk forklaring + engelsk
      term ved første forekomst; hvert teorikapittel har `collapsible` Symbol-,
      formel- og begrepsliste (norsk/engelsk); flashcards koder termparet.
- [ ] **Format-ærlighet**: kap. 0.1 og øvingseksamen 3 (12.4) sier eksplisitt at
      normalformen er 4-oppgavers skoleeksamen uten hjelpemidler, at 5-oppgavers
      «all aids»-varianten (V2020/V2022) er sekundær, at bevis-kravet gjaldt selv
      med «all aids» («most points for the justification»), og at format/Fraleigh-
      utgave skal verifiseres mot første sett etter analysedato.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene
      fra dette skjelettet), Forkunnskaper-blokk med kryssbok-lenker (kun til
      kapitler som finnes — `bi-okonomi`/R1/R2 lenket og verifisert i fase 6;
      forgjenger i tall-/gruppeteori som klartekst med aktiveringsmarkør),
      `collapsible` Symbol-, formel- og begrepsliste (norsk/engelsk) per delkapittel,
      Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå, ført som bevis),
      6–12 øvinger med `solution` + `hints`, repetisjons-`collapsible`; drillkapitler
      (4.4, 5.2, 6.4, 8.3, 9.4) har løsningsoppskrift + sensor-kommentert case +
      10–15 oppgaver; metode-/bevisverksted-kapitlene (0.2, 12.1) fører komplette
      modellbevis med forutsetningssjekk.
- [ ] **Quiz-sum ≥ 593 og flashcard-sum ≥ 690** per kvotetabellen i §3
      (kontrollsummér). Flashcards KUN fra toppnivå `definition`-blokker med `title`.
- [ ] **Prøver**: 4 per temadel 1–11 (44 stk) + 3 øvingseksamener (12.2–12.4) som
      sammen dekker A–N og begge produksjonsmåter (4-oppgavers + 5-oppgavers).
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, grupper, ringer, kropper
      og polynomer; ingen formuleringer fra reelle sett eller fasiter (skjelettets
      mønstereksempler er selv omskrivninger og skal varieres videre, ikke kopieres
      ordrett inn); Fraleigh refereres (begrep/notasjon/struktur), aldri siteres i
      lengde.
- [ ] **Navigasjon**: `mat2200` inn i `src/app/trinn/hoyere/institusjoner.ts`
      under **Universitetet i Oslo (UiO)**, navn = «MAT2200 Grupper, ringer og kropper».
- [ ] **Verifiser rendering**: prod-server + curl mot institusjonsside, bokforside og
      minst 3 kapittel-/narrativ-ruter (teori/drill/prøve) + quiz- og flashcard-rute
      (200 + innholdssjekk), jf. `getChapterMeta`-lærdommen.

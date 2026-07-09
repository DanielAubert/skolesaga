# Bokskjelett: SØK3004 Videregående matematisk analyse — eksamensrettet lærebok

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
> `EKSAMENSANALYSE.md` (≈20 lesbare oppgavesett 2012–2025 av et arkiv på ca. 48
> filer H2010–H2025, samt 10+ sensorveiledninger/løsningsforslag — de fleste
> håndskrevne skanninger lest via OCR, V2021 lest som ren tekst). Arketype:
> **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori/drill/
> øvingseksamen) er obligatoriske og gjentas ikke her. Alle mønstereksempler i
> skjelettet er omskrivninger; forfatteren skal variere dem videre (egne tall,
> egne kontekster), aldri kopiere inn ordrett.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `sok3004` |
| Tittel | **SØK3004 Videregående matematisk analyse** |
| Institusjon | NTNU (Institutt for samfunnsøkonomi) |
| Level | `'Høyskole'` |
| Arketype | Regnefag (matematisk analyse for økonomer på masternivå; fire likestilte søyler + anvendelser) |
| Antall kapitler | **33** (1 eksamenskart + 5 integrasjon + 6 lineær algebra + 6 differensiallikninger + 6 optimering + 3 anvendelser + 2 nivå-4-tema + 4 eksamenstrening) + 7 prøvekapitler |
| Estimert totaltid | **≈ 2 620 min ≈ 44 timer** (uten prøver) |
| Quiz totalt | **660** (krav ≥500) |
| Flashcards totalt | **562** (krav ≥500) |

**Pitch (ett avsnitt):** SØK3004 er **masterøkonomenes matematikk-kurs** ved NTNU
— et rendyrket matematikkemne som gir samfunnsøkonomer regneapparatet de trenger i
mikro-, makro- og finansfagene. Eksamen står på **fire likestilte søyler** som
har vært til stede i hvert eneste sett i femten år: **(I) integrasjon**,
**(II) lineær algebra**, **(III) differensiallikninger** og **(IV) statisk
optimering**. I nyere sett (2020–2024) er malen nesten låst: fire oppgaver à 25 %,
én per søyle, i akkurat den rekkefølgen. Denne boka er bygget som nettopp de fire
søylene, hver med teorikapitler + eget **drillkapittel**, bundet sammen av et
femte lag med **mikro-/finansanvendelser** (nåverdi, produksjonsteknologi,
konsumentteori). Den driller ferdighetene som avgjør karakteren: **integrasjon**
flytende (potens, delvis integrasjon `∫u dv = uv − ∫v du`, substitusjon, bestemt
integral med arealoppdeling der kurven skifter fortegn), **matriseregning +
likningssystemer** (`A+B`, `AB`, determinant, rang, `Ax=b` med Cramer/Gauss, og
løsbarhet relatert til rang), **differensiallikninger** (1. ordens lineær og
separabel, 2. ordens, systemer, med **eksplisitt stabilitetskonklusjon**),
**fri optimering** (stasjonærpunkt + klassifisering via Hesse-matrisen), og de to
toppkarakter-differensiatorene: **Lagrange med økonomisk tolkning av λ** og
**Kuhn–Tucker med komplementær slakkhet**. SØK3004 er et fag der **regnesikkerhet
er alfa og omega** — men sensor krever gjennomgående at studenten *begrunner*
svarene, *sjekker andreordensbetingelser* og *konkluderer eksplisitt* om stabilitet
og løsbarhet. Boka har derfor rikelig med drilloppgaver med fullstendig fasit.

**Kritisk hjelpemiddelregel (gjelder HELE boka):** Hjelpemidlene **varierer mellom
semestre**, og dette styrer stoffvalget. **Kode C** (typisk, f.eks. V2025):
kalkulator **+ Sydsæters matematiske formelsamling for økonomer**. **Kode H**
(f.eks. H2025): kun kalkulator — da må formlene sitte i hodet. Boka skal derfor
gjøre to ting: (a) trene studenten til å **slå opp effektivt** i formelsamlingen,
og (b) forankre **kjerneresultatene i hukommelsen** (integrasjonsregler,
egenverdiformel for 2×2, løsningsformlene for 1./2. ordens diff.likninger,
Kuhn–Tucker-oppsettet). Flashcardene bærer (b): standardresultatene skal kunne
gjengis uten oppslag. Del 0 forklarer skillet konkret.

**Kritisk avgrensning oppad og forkunnskaper (gjelder HELE boka):** SØK3004
forutsetter **SØK1001** (grunnleggende matematikk for økonomer: derivasjon,
funksjonslære, gradient/Hesse, enkel optimering) som kjent og bruker **ikke** plass
på repetisjon av elementær derivasjon utover en kort verktøyoppfriskning i Del 0.
Faget legger til det SØK1001 utelater: **integrasjon, matrise-/egenverditeori,
differensiallikninger og betinget optimering med Kuhn–Tucker.** Der en forkunnskap
trengs og ikke dekkes i boka (partiell derivasjon, gradient, Hesse-matrise,
kjerneregel, implisitt derivasjon, komplekse tall for karakteristiske røtter),
**kryssrefereres** det med markdown-lenker til beslektede bøker i systemet (se §7),
i stedet for å gjenta utledningen.

**Kritisk metoderegel (gjelder HELE boka) — fem faste sensorkrav:**
1. **Begrunn svarene.** Et bart tallsvar uten mellomregning gir lite uttelling;
   utregningen skal vises og konklusjonene begrunnes («Er dette maks/min/sadel?»,
   «Er likevekten stabil?»).
2. **Andreordensbetingelser er obligatoriske ved optimering.** Klassifiser alltid
   stasjonærpunkt via Hesse-matrisens definitthet; bekreft at et Lagrange-punkt
   *er* et maksimum. Å hoppe over dette gir trekk.
3. **Rang skal relateres til løsbarhet.** Regn ikke bare `r(A)` og `r(Ab)` — trekk
   konklusjonen: entydig / ingen / uendelig mange løsninger, og antall frie
   variabler `n − r(A)`.
4. **Stabilitet skal konkluderes eksplisitt.** Si klart om likevekten er
   (globalt/asymptotisk) stabil, og begrunn via fortegnet på `a`, de karakteristiske
   røttene, eller egenverdiene/sporet+determinanten.
5. **λ skal tolkes økonomisk** (skyggepris/grenseverdi av å slakke bibetingelsen)
   der oppgaven spør, og **presiser egne antakelser** («ta de forutsetninger du
   finner nødvendig»).

**Kritisk notasjonsregel (gjelder HELE boka)** — NTNU-notasjonen fra arkivet skal
brukes nøyaktig, ikke lærebok-alternativer:

- **Integrasjon:** ubestemt $\int f(x)\,dx$, bestemt $\int_a^b f(x)\,dx$; delvis
  integrasjon $\int u\,dv = uv - \int v\,du$; uegentlig $\int_0^\infty e^{-ks}D(s)\,ds$
  (nåverdi/diskontering); Taylor-polynom av oppgitt orden. Areal = integralet av
  **tallverdien** (del opp der kurven skifter fortegn).
- **Lineær algebra:** matriser med store bokstaver $A, B, C, D$; vektorer $x, b$;
  utvidet koeffisientmatrise $Ab$ (eller $[A\,|\,b]$); rang $r(A)$; transponert
  $A'$ (også $A^\top$); determinant $\det A$ / $|A|$; egenverdi $\lambda$, egenvektor;
  identitetsmatrise $I$. Standardregelen $\det(AB) = \det A \cdot \det B$.
- **Differensiallikninger:** Newton-notasjon $\dot x = dx/dt$, $\ddot x = d^2x/dt^2$;
  likevekt/steady state $x_{ss}$. Engelske parenteser forekommer ved første bruk:
  «particular solution», «steady state», «globally asymptotically stable (G.A.S.)».
- **Optimering:** Lagrange-funksjon $\mathcal{L}$ (eller $L$), multiplikator $\lambda$;
  Kuhn–Tucker med komplementær slakkhet skrevet «$\partial\mathcal{L}/\partial x_j \le 0$
  ($=0$ hvis $x_j > 0$), $\lambda \ge 0$ ($=0$ hvis bibetingelsen er slakk)»;
  Hesse-matrise for andreordensbetingelser; «konkav ⇒ maks, konveks ⇒ min».
- **Mikro/finans:** Cobb–Douglas produktfunksjon $y = x_1^a x_2^{1-a}$ / $p x^a$;
  nyttefunksjon $u(x,y)$, ofte $\gamma\ln x + (1-\gamma)\ln y$; priser $p, p_x, p_y, w$;
  inntekt/budsjett $m$; profitt $\pi$; kostnad $C(y)$; diskonteringsrente $k$/$r$;
  OLS $b = (X'X)^{-1}X'y$.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen), IKKE frekvens — de fire søylene
er tilnærmet like hyppige (25 % hver i nyere mal), så frekvensen skiller dem ikke;
avhengigheten gjør det (egenverdier trengs i stabilitet av DE-systemer;
Hesse-/definitthet trengs i optimering). Alle fire søyler er **nivå 1 «perfekt»** og
får hver sin fulle del med **eget drillkapittel**. `sectionNames` = den beskrivende
tittelen per del (vises som «Kapittel N: <tittel>» på bokforsiden).

| Del | Seksjonstittel (`sectionNames`) | Kap. | Prioritet | Begrunnelse (frekvens → omfang) |
|---|---|---|---|---|
| 0 | Eksamenskart og verktøyoppfriskning | 1 | — | Prioriteringsverktøyet: de fire søylene, de tre regimene (A/B/C), hjelpemiddelkode H vs. C, sjangerkatalog A–N, sensorens metaregler, avgrensning mot SØK1001. Kjerne i studieguiden. |
| 1 | Integrasjon | 5 | **PERFEKT** | Oppgave 1, ~100 %. Potens ~100 %, delvis integrasjon ~90 %, substitusjon ~70 %, areal m/oppdeling ~75 %, uegentlig/nåverdi ~30 %, Taylor ~35 %. NTNUs signaturvekt på regnedrill → 4 teori + eget drillkapittel. |
| 2 | Lineær algebra | 6 | **PERFEKT** | Oppgave 2, ~100 %. Matriseprodukt/-sum ~90 %, determinant ~85 %, `Ax=b` ~85 %, rang ~70 %, egenverdier ~40 % (+ implisitt i stabilitet). 5 teori + eget drillkapittel. |
| 3 | Differensiallikninger | 6 | **PERFEKT** | Oppgave 3, ~100 %. 1. ordens lineær ~95 %, separabel ~80 %, 2. ordens ~65 %, system ~55 %, stabilitet/faseanalyse ~55 %. Det tyngste temaet → 5 teori + eget drillkapittel. |
| 4 | Statisk optimering | 6 | **PERFEKT** | Oppgave 4, ~100 %. Stasjonærpunkt+Hesse ~85 %, Lagrange+λ ~75 %, Kuhn–Tucker ~60 % (toppkarakter-differensiator), andreordens/definitthet ~70 %. 5 teori + eget drillkapittel. |
| 5 | Mikro- og finansanvendelser | 3 | **KUNNE** | Nåverdi/finans ~30 %, produsent (profittmaks/kostnad) ~40 %, konsument (nyttemaks/indirekte nytte) ~40 %. Samme matematikk i økonomisk drakt; roterer inn som innpakning → 3 kompakte anvendelseskapitler. |
| 6 | Nivå-4-tema: geometri i Rⁿ og matrisebevis | 2 | **KJENNE** | Geometri i R³ ~10 % (nytt V2025), matrisebevis/abstrakte identiteter ~20 % (H2025, V2014), invers-eksistens, risikoaversjon. Sjeldnere, men gir bredde og A/B-poeng → 2 kompakte kapitler. |
| 7 | Eksamenstrening | 4 | — | Sjangerdrill på tvers (A–N), og 3 komplette øvingseksamener som speiler både 4-oppgavemalen (regime B) og 5-oppgavevarianten (regime C). |

**Avvik fra DNA-malen (dokumentert):**
1. DNA-en legger *alle* sjangerkapitler i siste del. Her ligger de fire drillkapitlene
   (1.5, 2.6, 3.6, 4.6) inne i sine egne søyler, fordi hver søyle ER en fast
   eksamensoppgave og må drilles umiddelbart etter teorien. Del 7 beholder ett
   tverrgående sjangerkapittel (7.1, som binder søylene i én besvarelse) og de tre
   øvingseksamenene.
2. DNA-ens «matematisk verktøykapittel i bunn» er komprimert til Del 0s
   verktøyoppfriskning (SØK1001-stoff: partiell derivasjon, gradient, Hesse,
   komplekse tall) — ikke en egen del, siden forkunnskapen forutsettes og bare skal
   friskes opp, ikke bygges ut (jf. analysens §0/§7).
3. Del 5 (anvendelser) er strengt tatt samme matematikk som søylene i økonomisk
   innpakning; den får egen del fordi nåverdi (uegentlig integral), produsent
   (Cobb–Douglas-optimering) og konsument (Lagrange-nyttemaks) er faste
   innpakninger sensor forventer at studenten kjenner igjen på tvers av søylene.

---

## 3. Kapitler

Feltene under følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–N) refererer til
oppgavetype-katalogen som presenteres i Del 0 (gjengitt der fra analysen §3):
**A** regnetunge integraler, **B** nåverdi/uegentlig integral, **C** Taylor-
approksimasjon, **D** matriseregning (sum/produkt/determinant), **E** likningssystem/
rang/løsbarhet, **F** egenverdier/egenvektorer, **G** 1. ordens diff.likning
(lineær/separabel), **H** 2. ordens diff.likning, **I** system av diff.likninger +
stabilitet/fasediagram, **J** fri optimering (stasjonærpunkt + klassifisering),
**K** Lagrange med likhetsbibetingelse, **L** Kuhn–Tucker/ikke-lineær programmering,
**M** mikro-anvendelse produsent (profittmaks/kostnad/tilbud), **N** mikro-anvendelse
konsument (nyttemaks/indirekte nytte). Prioritetsklasser: **perfekt** (nivå 1) /
**kunne** (nivå 2) / **kjenne** (nivå 3–4).

---

### Del 0 — Eksamenskart og verktøyoppfriskning

#### Kapittel 0.1: Eksamenskartet: slik testes SØK3004

- **id:** `sok3004-0-1` · **number:** 0.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen
- **Kapitteltype:** eksamenskart
- **description:** Eksamensformen, de fire søylene, de tre regimene (A/B/C), hjelpemiddelkode H vs. C, sjangerkatalogen A–N, sensorens fem metaregler, og en kort verktøyoppfriskning fra SØK1001 (partiell derivasjon, gradient, Hesse, komplekse tall) — prioriteringsverktøyet som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på ≈20 lesbare sett + 10+ sensorveiledninger. Skal gjengi: (i) **formen**: 5 timers skriftlig skoleeksamen (09:00–14:00, +15 min til opplasting av håndtegninger), digital i Inspera; deloppgaver dels i Inspera, dels på håndark med sjusifret kode; karakter A–F, 15 studiepoeng; **hjelpemidler VARIERER** — kode C (kalkulator + Sydsæters matematiske formelsamling for økonomer) er typisk, men kode H (kun kalkulator) forekommer (H2025) → formlene må da sitte i hodet; oppgavetekst på bokmål og/eller nynorsk, enkelte engelske fagtermer i parentes. (ii) **De tre regimene**: Regime A (≈2010–2019, 5 av og til 4 oppgaver, anvendelsestunge — prismatriser, indirekte nytte, biologisk vekst, Kuhn–Tucker med økonomisk tolkning, OLS fra lineær algebra); **Regime B (2020–2024, den faste 4-oppgavemalen, 25 % hver** — integrasjon / lineær algebra / differensiallikninger / optimering, mekanisk og regnetung); Regime C (2025, nye faglærere — tilbake mot variasjon: R³-geometri, Black–Scholes-DE, matrisebevis, 4–5 oppgaver). Faglærere roterer (Lindset, Valente, Green m.fl.), noe som forklarer stilvariasjonen. (iii) **Temafrekvens-tabellene** (fire spor, fra analysen §2A–2D): integrasjon — potens ~100 %, delvis integrasjon ~90 %, areal ~75 %, substitusjon ~70 %, Taylor ~35 %, uegentlig/nåverdi ~30 %; lineær algebra — matriseprodukt/-sum ~90 %, determinant ~85 %, `Ax=b` ~85 %, rang ~70 %, egenverdier ~40 %, invers ~30 %, matrisebevis ~20 %; differensiallikninger — 1. ordens lineær ~95 %, separabel ~80 %, 2. ordens ~65 %, system ~55 %, stabilitet ~55 %; optimering — stasjonærpunkt+Hesse ~85 %, Lagrange+λ ~75 %, andreordens/definitthet ~70 %, Kuhn–Tucker ~60 %, profittmaks ~40 %, nyttemaks ~40 %. (iv) At oppgavene pakkes i **økonomisk innpakning** (aksjeverdi/nåverdi, produksjonsteknologi, konsument, OLS, biologisk vekst) men at den matematiske kjernen er stabil. (v) **Sensorens fem metaregler** (§4 i analysen): begrunn svarene; andreordensbetingelser obligatorisk; rang relatert til løsbarhet; stabilitet konkludert eksplisitt; λ tolket økonomisk + presiser antakelser. (vi) **Karakterskillene** (§4): bunn (E–D) = korrekt oppsett + hovedmekanikk (de tre integralene, `Ax=b` løst, generell 1. ordens DE, stasjonærpunkt funnet); midt (C) = komplette korrekte utregninger med riktige mellomsteg (delvis integrasjon/substitusjon, determinant/rang med løsbarhetstolkning, partikulær + generell DE-løsning, Hesse-klassifisering, Lagrange løst); topp (A/B) = **Kuhn–Tucker med komplementær slakkhet + økonomisk λ-tolkning**, trygg **stabilitet/faseanalyse** (egenverdier, spor+determinant, nullisokliner), ser **spesialtilfeller** (uendelig mange løsninger, sadelpunkt, hjørneløsning, konvergensbetingelse `g<k`), kobler matematikk til økonomisk innhold, og fører **bevis/generelle argumenter** presist.
- **Innholdskontrakt:** Oppgavetype-katalogen A–N presenteres som studentens sjekkliste med typisk plassering: Oppgave 1 = integrasjon (A, evt. B/C); Oppgave 2 = lineær algebra (D/E, evt. F); Oppgave 3 = differensiallikninger (G/H/I); Oppgave 4 = optimering (J + K *eller* L, evt. M/N som innpakning); i regime C legges en femte anvendelses-/geometrioppgave til. **Verktøyoppfriskning fra SØK1001** (kort, «bør sitte»): partiell derivasjon og gradient $\nabla f$, Hesse-matrisen $H$, kjerneregel og implisitt derivasjon, potens/eksp/log-regler, komplekse tall (for karakteristiske røtter). Merk eksplisitt: dette repeteres kun, det bygges ikke ut — lenk til SØK1001-nivå der studenten trenger mer (§7). **Prognose for neste eksamen** (§7): overveldende sannsynlig enten (a) den faste 4-oppgavemalen (regime B), eller (b) en 5-oppgavevariant med samme fire søyler pluss en anvendelses-/geometrioppgave (regime C). Uansett: de fire søylene er garantert; optimeringsoppgaven inneholder nesten sikkert Lagrange eller Kuhn–Tucker; DE-oppgaven krever en stabilitets-/likevektskonklusjon. **Leseplanen**: Del 1–4 er de fire garanterte oppgavene (les i rekkefølge — søylene bygger på hverandre via egenverdier/Hesse); Del 5 er de faste økonomiske innpakningene; Del 6 er «bør kjenne»; Del 7 er ren trening.
- **Oppgavesjangre:** Ingen regneoppgaver av vekt; 3–4 refleksjonsoppgaver av typen «gitt 4-oppgavemalen og 300 minutter — sett opp tidsbudsjett», «hvilke fire søyler er garantert, og i hvilken del drilles hver?», «hva må du kunne utenat under kode H som du kan slå opp under kode C?».
- **Typiske feil:** Metafeilene: bruke tid på å pugge stoff formelsamlingen dekker (under kode C) i stedet for kjernemekanikken; ikke skille kode H fra kode C i forberedelsen; hoppe over andreordensbetingelser/stabilitetskonklusjon fordi «tallet er riktig»; ikke oppgi antakelser oppgaven ber om.
- **Quiz: 20 · Flashcards: 16** (eksamensform, de tre regimene, hjelpemiddelkoder, fire-søyle-frekvenser, sjangerkatalog A–N, sensorens metaregler, verktøyoppfriskningen)

**Prøve-kvote Del 0:** ingen (metadel).

---

### Del 1 — Integrasjon *(prioritet: PERFEKT — Oppgave 1, ~100 %)*

> **Forkunnskaps-skille mot SØK1001:** derivasjonsregler (potens, produkt, kjerne),
> eksponensial/logaritme og funksjonslære er byggeklosser SØK3004 forutsetter.
> Integrasjon er den «omvendte» operasjonen — boka bygger den fra bunnen, men
> lenker til SØK1001-nivå der studenten trenger å repetere derivasjonen som ligger
> under (delvis integrasjon og substitusjon er derivasjonsreglene lest baklengs).

#### Kapittel 1.1: Ubestemt integral og potensregelen

- **id:** `sok3004-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen
- **Kapitteltype:** teori
- **description:** Det ubestemte integralet som antiderivert, potensregelen $\int x^n\,dx = \frac{x^{n+1}}{n+1} + C$ ($n \ne -1$), standardintegralene ($e^x$, $1/x$, $\ln$), og linearitet — grunnmuren i Oppgave 1.
- **Eksamensbelegg:** Potensintegraler er alltid første deloppgave (~100 %); ren regnetrening som avgjør ståkarakteren. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Ubestemt integral** = mengden antideriverte; $\int f(x)\,dx = F(x) + C$ der $F' = f$. **Potensregelen** $\int x^n\,dx = \frac{x^{n+1}}{n+1} + C$ for $n \ne -1$; spesialtilfellet $\int x^{-1}\,dx = \ln|x| + C$. Standardintegraler: $\int e^{ax}\,dx = \frac1a e^{ax} + C$, $\int \frac{1}{x}\,dx$, $\int a^x\,dx$. **Linearitet:** $\int (\alpha f + \beta g) = \alpha\int f + \beta\int g$. Understrek at $+C$ aldri skal glemmes i ubestemt integral, og at man kan **kontrollere ved å derivere svaret**. Kort om integralet som areal (bro til bestemt integral, kap. 1.4).
- **Oppgavesjangre:** A-fundament. Mønstereksempel: «Regn ut $\int (3x^2 - 5x + \frac{2}{x})\,dx$ og kontroller ved derivasjon.»
- **Typiske feil:** Glemme $+C$; bruke potensregelen på $n = -1$ (gir $\ln$, ikke $x^0/0$); slurve med fortegn/koeffisienter; ikke kontrollere ved derivasjon.
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 1.2: Delvis integrasjon

- **id:** `sok3004-1-2` · **number:** 1.2 · **estimatedMinutes:** 50 · **prerequisites:** `sok3004-1-1`
- **Kapitteltype:** teori
- **description:** Delvis integrasjon $\int u\,dv = uv - \int v\,du$ — signaturteknikken i Oppgave 1c: valg av $u$ og $dv$, gjentatt bruk ($\int x^2 e^x\,dx$), og «trikset» $\int \ln x\,dx$.
- **Eksamensbelegg:** ~90 % frekvens; signaturteknikken i oppgave 1c nesten hvert år. Utledningen (fra produktregelen) forventes kjent, teknikken kreves aktivt. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Formelen** $\int u\,dv = uv - \int v\,du$, utledet fra produktregelen $(uv)' = u'v + uv'$. **Valgstrategien** (velg $u$ så $du$ blir enklere, $dv$ så $v$ lar seg finne): standardcasene $\int x e^x\,dx$, $\int x^2 e^x\,dx$ (gjentatt bruk), $\int x \ln x\,dx$, og **$\int \ln x\,dx$** ($u = \ln x$, $dv = dx$ → $x\ln x - x + C$). Vis at feil valg av $u/dv$ kan gjøre integralet verre. Nevn LIATE-tommelfingerregelen som huskeregel (ikke lov). Understrek kontroll ved derivasjon.
- **Oppgavesjangre:** A. Mønstereksempel: «Regn ut $\int x^2 e^x\,dx$ ved delvis integrasjon (bruk teknikken to ganger).»
- **Typiske feil:** Velge feil $u$ og $dv$ (integralet blir verre); **glemme leddet $-\int v\,du$**; fortegnsfeil ved gjentatt bruk; ikke se at $\int \ln x\,dx$ løses med $dv = dx$.
- **Quiz: 24 · Flashcards: 20**

#### Kapittel 1.3: Substitusjon

- **id:** `sok3004-1-3` · **number:** 1.3 · **estimatedMinutes:** 50 · **prerequisites:** `sok3004-1-2`
- **Kapitteltype:** teori
- **description:** Integrasjon ved substitusjon (variabelskifte $u = g(x)$, $du = g'(x)\,dx$) — kjerneregelen lest baklengs; standardmønstrene $\int \frac{\ln x}{x}\,dx$, $\int \frac{x}{x^2+2}\,dx$, $\int x\sqrt{x+1}\,dx$.
- **Eksamensbelegg:** ~70 % frekvens; ofte kombinert med delvis integrasjon i samme oppgave. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Substitusjon** = kjerneregelen baklengs: sett $u = g(x)$, $du = g'(x)\,dx$, skriv om integralet i $u$, integrer, substituer tilbake. **Gjenkjenningsmønstre:** $\int f(g(x))g'(x)\,dx$ (klassisk), $\int \frac{g'(x)}{g(x)}\,dx = \ln|g(x)| + C$ (logaritmisk), $\int \frac{x}{x^2+a}\,dx$, $\int \frac{\ln x}{x}\,dx$, $\int x\sqrt{x+1}\,dx$ (substituer $u = x+1$). For **bestemt** integral: bytt grensene til $u$-verdier (eller substituer tilbake før innsetting). Understrek å sjekke at $du$ faktisk står i integranden (evt. juster med konstant).
- **Oppgavesjangre:** A. Mønstereksempel: «Regn ut $\int \frac{x}{x^2+2}\,dx$ og $\int x\sqrt{x+1}\,dx$ ved passende substitusjon.»
- **Typiske feil:** Glemme å bytte $dx$ til $du$ (mangler $g'(x)$-faktor); ikke bytte grensene ved bestemt integral; velge substitusjon som ikke forenkler; slurve med tilbakesubstitusjon.
- **Quiz: 22 · Flashcards: 18**

#### Kapittel 1.4: Bestemt integral, arealberegning og Taylor

- **id:** `sok3004-1-4` · **number:** 1.4 · **estimatedMinutes:** 60 · **prerequisites:** `sok3004-1-3`
- **Kapitteltype:** teori
- **description:** Bestemt integral og analysens hovedsetning, arealberegning med **oppdeling der kurven skifter fortegn** (den klassiske fallgruven), uegentlige integraler/nåverdi, og Taylor-approksimasjon — den «tyngre» halvdelen av Oppgave 1.
- **Eksamensbelegg:** Areal m/oppdeling ~75 % (klassisk fallgruve); uegentlig/nåverdi ~30 % (V2020, H2017); Taylor ~35 % (H2017, V2019, H2024). Areal er den vanligste avanserte deloppgaven; nåverdi og Taylor roterer inn. Prioritet: **perfekt** (areal) / **kunne** (uegentlig, Taylor). *(Nåverdi og profittmaks-innpakningen utdypes i Del 5 — her etableres teknikken.)*
- **Innholdskontrakt:** **Bestemt integral** $\int_a^b f(x)\,dx = F(b) - F(a)$ (analysens hovedsetning); integralet som funksjon av øvre grense og derivasjon av det ($\frac{d}{dx}\int_a^x f = f(x)$). **Arealberegning:** arealet mellom kurve og $x$-akse = $\int_a^b |f(x)|\,dx$ → **del opp intervallet der kurven skifter fortegn** og legg sammen tallverdiene (parabelen $y = (x-2)^2 - 4$ er under aksen på en del av $[0,6]$). Areal mellom to kurver. **Uegentlig integral:** $\int_0^\infty f(x)\,dx = \lim_{T\to\infty}\int_0^T f$; konvergensbetingelse (nåverdi $\int_0^\infty e^{-ks}\delta e^{gs}\,ds$ konvergerer bare for $g < k$). **Taylor-polynom** av oppgitt orden om et passende punkt, brukt til å tilnærme en tallverdi ($e$, $e^{-rt}$, Gauss-integral). Vis både analytisk uttrykk og talleksempel.
- **Oppgavesjangre:** A, B, C. Mønstereksempel (A+areal): «Finn arealet mellom $x$-aksen og parabelen $y = (x-2)^2 - 4$ fra $x=0$ til $x=6$» (krever oppdeling). Mønstereksempel (C): «Bruk et andreordens Taylor-polynom til å estimere $\int_{-1/2}^{1/2} e^{-x^2/2}\,dx$.»
- **Typiske feil:** **Glemme å dele opp arealintegralet** der kurven skifter fortegn (integrere rett gjennom gir feil areal); bytte $a$ og $b$; overse konvergensbetingelsen `g < k` i uegentlig integral (integralet divergerer ellers); feil orden/utviklingspunkt i Taylor.
- **Quiz: 24 · Flashcards: 20**

#### Kapittel 1.5: Drill: integrasjonsoppgaven

- **id:** `sok3004-1-5` · **number:** 1.5 · **estimatedMinutes:** 80 · **prerequisites:** `sok3004-1-4`, `sok3004-1-2`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på hele Oppgave 1: fra tre ubestemte integraler (potens, ln/brøk, delvis integrasjon) til bestemt integral med arealoppdeling, og evt. uegentlig/Taylor — fullført A-besvarelse.
- **Eksamensbelegg:** Dekker sjangrene A, B, C samlet — Oppgave 1 (25 %, ~100 %-gjenganger). Regnesikkerhet er ståkarakteren. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) klassifiser integranden (potens → potensregelen; brøk med teller = deriverte av nevner → log; produkt polynom·eksp/ln → delvis integrasjon; sammensatt indre funksjon → substitusjon); 2) regn og **kontroller ved derivasjon**; 3) ved bestemt integral: sett inn grenser (bytt grenser ved substitusjon); 4) ved areal: finn nullpunkter, **del opp der fortegnet skifter**, legg sammen tallverdiene, tegn figur; 5) ved uegentlig: sjekk konvergens (grense + betingelse). **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling ved hvert steg — særlig riktig valg av $u/dv$, den oppdelte arealregningen, konvergenssjekken). **10–14 oppgaver** på eksamensnivå som roterer teknikk (potens / delvis / substitusjon / areal / uegentlig / Taylor) × form (ubestemt / bestemt / anvendt), alle med nyskrevne pent kalibrerte tall og `solution` + `hints`.
- **Oppgavesjangre:** A, B, C. Mønstereksempel (full kjede): «(a) Regn $\int (2x^3 - \frac1x)\,dx$, $\int \frac{x}{x^2+3}\,dx$ og $\int x e^x\,dx$. (b) Finn arealet mellom $x$-aksen og $y = x^2 - 4$ fra $x=0$ til $x=3$.»
- **Typiske feil:** Hele integrasjonsrepertoaret: glemt $+C$/leddet $-\int v\,du$, manglende arealoppdeling, oversett konvergensbetingelse, feil grensebytte ved substitusjon.
- **Quiz: 16 · Flashcards: 10**

**Prøve-kvote Del 1:** 4 prøver (`sok3004-1-prove`):
1. Prøve 1.A (30 min): Ubestemte integraler — potens, standardintegraler, delvis integrasjon, substitusjon (sjanger A).
2. Prøve 1.B (35 min): Bestemt integral + arealberegning med oppdeling der kurven skifter fortegn, med figur (sjanger A).
3. Prøve 1.C (30 min): Uegentlig integral / nåverdi med konvergensbetingelse, og Taylor-approksimasjon (sjanger B+C).
4. Prøve 1.D (40 min): Full integrasjonsoppgave i regime B-format (tre integraler + areal) på eksamensnivå (sjanger A).

---

### Del 2 — Lineær algebra *(prioritet: PERFEKT — Oppgave 2, ~100 %)*

#### Kapittel 2.1: Matriser: sum, produkt og transponert

- **id:** `sok3004-2-1` · **number:** 2.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen
- **Kapitteltype:** teori
- **description:** Matrisebegrepet, addisjon, skalarmultiplikasjon, matriseprodukt $AB$ med dimensjonskrav, og transponert $A'$ — grunnverktøyet i Oppgave 2.
- **Eksamensbelegg:** Matriseaddisjon/-produkt ~90 %; alltid første del av Oppgave 2. **Dimensjonssjekk og $AB \ne BA$** er sensorpoeng. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Matrise** ($m\times n$), addisjon (elementvis, krever samme dimensjon), skalarmultiplikasjon. **Matriseprodukt** $AB$: definert bare når As kolonnetall = Bs radtall; $(AB)_{ij} = \sum_k a_{ik}b_{kj}$; resultatets dimensjon. **Sentrale regler:** $AB \ne BA$ generelt (ikke-kommutativ); $A(BC) = (AB)C$ (assosiativ); distributivitet; forklar *hvorfor* $BA$ evt. ikke finnes selv om $AB$ gjør. **Transponert** $A'$: $(A')_{ij} = a_{ji}$; regler $(A')' = A$, $(AB)' = B'A'$. Identitetsmatrisen $I$ ($AI = IA = A$). Understrek dimensjonssjekken FØR man regner.
- **Oppgavesjangre:** D-fundament. Mønstereksempel: «For gitte matriser $A$ ($2\times 3$) og $B$ ($3\times 2$), regn ut $AB$ og forklar hvorfor $BA$ har en annen dimensjon.»
- **Typiske feil:** **Regne $AB$ når produktet ikke er definert**, eller anta $AB = BA$; manglende dimensjonssjekk; feil i indeksering av produktet; forveksle elementvis produkt med matriseprodukt.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 2.2: Determinanter

- **id:** `sok3004-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok3004-2-1`
- **Kapitteltype:** teori
- **description:** Determinant for $2\times 2$ og $3\times 3$ (kofaktorutvikling / Sarrus), regneregler, $\det(AB) = \det A \cdot \det B$, og koblingen til inverterbarhet ($\det A \ne 0$).
- **Eksamensbelegg:** ~85 % frekvens; ofte flere matriser i samme oppgave, med $\det(AB) = \det A \cdot \det B$ som kontroll. Prioritet: **perfekt**.
- **Innholdskontrakt:** **$2\times 2$-determinant** $\det\begin{pmatrix} a & b \\ c & d\end{pmatrix} = ad - bc$. **$3\times 3$** ved kofaktorutvikling langs en rad/kolonne (eller Sarrus' regel). **Regneregler:** $\det(AB) = \det A \cdot \det B$; $\det(A') = \det A$; $\det(\alpha A) = \alpha^n \det A$; radbytte skifter fortegn; en null-rad/-kolonne eller to like rader gir $\det = 0$. **Kobling:** $A$ inverterbar $\Leftrightarrow \det A \ne 0 \Leftrightarrow$ full rang. Bruk $\det(AB) = \det A \det B$ som regnekontroll. Nevn at determinanten geometrisk er (fortegns-)volumet utspent av kolonnene (kort, «bør kjenne»).
- **Oppgavesjangre:** D. Mønstereksempel: «Finn $\det A$, $\det B$ og $\det(AB)$ for gitte $2\times 2$-matriser, og kontroller at $\det(AB) = \det A \cdot \det B$.»
- **Typiske feil:** Fortegnsfeil i kofaktorutviklingen; feil Sarrus for $3\times 3$; tro at $\det(A+B) = \det A + \det B$ (galt); glemme koblingen $\det A = 0 \Rightarrow$ ikke inverterbar.
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 2.3: Likningssystemer, Gauss og Cramer

- **id:** `sok3004-2-3` · **number:** 2.3 · **estimatedMinutes:** 60 · **prerequisites:** `sok3004-2-2`
- **Kapitteltype:** teori
- **description:** Løsning av $Ax = b$ ved Gauss-eliminasjon og Cramers regel, med og uten parametere ($m, n$) — kjernen i Oppgave 2.
- **Eksamensbelegg:** ~85 % frekvens; både numerisk og med konstanter; fri variabel / uendelig mange løsninger forekommer. Prioritet: **perfekt**.
- **Innholdskontrakt:** **$Ax = b$** som likningssystem. **Gauss-eliminasjon:** radoperasjoner til trappeform, tilbakesubstitusjon; håndter pivotelementer og frie variabler. **Cramers regel** (for kvadratiske systemer med $\det A \ne 0$): $x_i = \det A_i / \det A$, der $A_i$ har $i$-te kolonne byttet med $b$. **Parametriske systemer:** for hvilke verdier av en parameter $m$ har systemet entydig / ingen / uendelig mange løsninger (avhenger av om $\det A = 0$ og av $b$). Legg grunnlaget for rang-koblingen (kap. 2.4). Understrek at Cramer er tungvint for store systemer — Gauss er hovedmetoden.
- **Oppgavesjangre:** E. Mønstereksempel: «Løs $Ax = b$ med Gauss-eliminasjon, og for hvilke verdier av parameteren $m$ har systemet entydig løsning?»
- **Typiske feil:** Regnefeil i radoperasjonene; bruke Cramer når $\det A = 0$; glemme å behandle parameter-tilfellet $\det A = 0$ separat; ikke identifisere frie variabler.
- **Quiz: 22 · Flashcards: 18**

#### Kapittel 2.4: Rang, løsbarhet og invers

- **id:** `sok3004-2-4` · **number:** 2.4 · **estimatedMinutes:** 55 · **prerequisites:** `sok3004-2-3`
- **Kapitteltype:** teori
- **description:** Rang $r(A)$, koblingen mellom $r(A)$, $r(Ab)$ og løsningsmengden (sensorens jernregel), og den inverse matrisen $A^{-1}$ (når eksisterer den, og hvordan finne den).
- **Eksamensbelegg:** Rang ~70 %, invers ~30 %; sensor honorerer at rang **relateres til løsbarhet** (§4.6), ikke bare regnes ut. Prioritet: **perfekt** (rang) / **kunne** (invers).
- **Innholdskontrakt:** **Rang** $r(A)$ = antall lineært uavhengige rader/kolonner = antall pivoter i trappeform. **Løsbarhetsteoremet (sensorens jernregel):** for $Ax = b$ med $n$ ukjente: $r(A) < r(Ab) \Rightarrow$ **ingen løsning**; $r(A) = r(Ab) = n \Rightarrow$ **entydig løsning**; $r(A) = r(Ab) < n \Rightarrow$ **uendelig mange løsninger** med $n - r(A)$ frie variabler. **Invers matrise:** $A^{-1}$ eksisterer $\Leftrightarrow \det A \ne 0 \Leftrightarrow r(A) = n$; finn ved $A^{-1} = \frac{1}{\det A}\,\text{adj}(A)$ ($2\times 2$: bytt diagonal, skift fortegn på off-diagonal) eller Gauss–Jordan. Regler $(AB)^{-1} = B^{-1}A^{-1}$. Understrek konklusjonskravet: skriv alltid ut hva rangene *betyr* for løsningsmengden.
- **Oppgavesjangre:** E, F-fundament. Mønstereksempel: «Løs systemet, angi $r(A)$ og $r(Ab)$, og forklar løsningsmengden (entydig / ingen / uendelig mange, med antall frie variabler) i lys av rangene.»
- **Typiske feil:** **Ikke relatere rang til løsbarhet** — regne $r(A)$ og $r(Ab)$ men ikke trekke konklusjonen (§5.4); glemme antall frie variabler $n - r(A)$; prøve å invertere en matrise med $\det = 0$; feil i adjungat/fortegn.
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 2.5: Egenverdier og egenvektorer

- **id:** `sok3004-2-5` · **number:** 2.5 · **estimatedMinutes:** 60 · **prerequisites:** `sok3004-2-4`
- **Kapitteltype:** teori
- **description:** Egenverdier fra $\det(A - \lambda I) = 0$ og tilhørende egenvektorer, med den viktige broen til stabilitet av DE-systemer (Del 3) — både «rent» og som verktøy.
- **Eksamensbelegg:** ~40 % eksplisitt (V2024, V2014) + implisitt i **stabilitet av DE-systemer** (~55 %, Del 3). Ett av de temaene som binder søylene sammen. Prioritet: **perfekt** (pga. dobbeltrollen).
- **Innholdskontrakt:** **Egenverdi/egenvektor:** $Av = \lambda v$, $v \ne 0$; egenverdiene løses fra **karakteristisk likning** $\det(A - \lambda I) = 0$; egenvektorene fra $(A - \lambda I)v = 0$ (nullrommet). **$2\times 2$-formel:** egenverdiene er røttene av $\lambda^2 - (\text{spor }A)\lambda + \det A = 0$, der spor $= a_{11} + a_{22}$. **Symmetriske matriser:** reelle egenverdier, ortogonale egenvektorer. **Bro til Del 3:** for et lineært DE-system $\dot{\mathbf{x}} = A\mathbf{x}$ avgjør egenverdiene stabiliteten — alle Re $\lambda < 0 \Rightarrow$ asymptotisk stabilt (utdypes i kap. 3.5). Nevn spor/determinant som snarvei: begge egenverdier har negativ realdel $\Leftrightarrow$ spor $< 0$ og $\det > 0$. Kort om diagonalisering (bør kjenne).
- **Oppgavesjangre:** F. Mønstereksempel: «Finn egenverdiene og egenvektorene til $A = \begin{pmatrix} 1 & -3 \\ -3 & 1 \end{pmatrix}$.»
- **Typiske feil:** Regnefeil i $\det(A - \lambda I) = 0$; glemme at egenvektoren løses av $(A-\lambda I)v = 0$; velge $v = 0$ (ikke tillatt); feil egenvektor til den negative egenverdien (viktig i faseanalysen, §5.11); rote med spor-/determinant-snarveien.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 2.6: Drill: lineær algebra-oppgaven

- **id:** `sok3004-2-6` · **number:** 2.6 · **estimatedMinutes:** 80 · **prerequisites:** `sok3004-2-5`, `sok3004-2-3`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på hele Oppgave 2: fra $A+B$, $AB$, determinanter til $Ax=b$ med rang-/løsbarhetstolkning, og evt. egenverdier — fullført A-besvarelse.
- **Eksamensbelegg:** Dekker sjangrene D, E, F samlet — Oppgave 2 (25 %, ~100 %-gjenganger). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) dimensjonssjekk før produkt; regn $A+B$, $AB$, evt. $CD$; 2) determinanter, kontroller med $\det(AB) = \det A \det B$; 3) løs $Ax = b$ (Gauss primært, Cramer for små); 4) regn $r(A)$ og $r(Ab)$ og **skriv ut løsbarheten** (entydig/ingen/uendelig + frie variabler); 5) evt. egenverdier/egenvektorer fra karakteristisk likning. **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling ved hvert steg — særlig dimensjonssjekken, $\det(AB)$-kontrollen, den utskrevne løsbarhetstolkningen). **10–14 oppgaver** på eksamensnivå som roterer leveranse (produkt+det / system+rang / parameter-system / egenverdier) × form (numerisk / med konstanter), alle med nyskrevne pent kalibrerte tall og `solution` + `hints`.
- **Oppgavesjangre:** D, E, F. Mønstereksempel (full kjede): «(a) Regn $A+B$, $AB$ og $\det(AB)$. (b) Løs $Cx = d$, angi $r(C)$ og $r(Cd)$, og forklar løsningsmengden. (c) Finn egenverdiene til $A$.»
- **Typiske feil:** Hele lineær-algebra-repertoaret: udefinert produkt / antatt $AB=BA$ (§5.3), $\det(A+B) = \det A + \det B$, urelatert rang (§5.4), feil egenvektor.
- **Quiz: 16 · Flashcards: 10**

**Prøve-kvote Del 2:** 4 prøver (`sok3004-2-prove`):
1. Prøve 2.A (30 min): Matriseregning — $A+B$, $AB$, transponert, determinanter, med dimensjonssjekk (sjanger D).
2. Prøve 2.B (40 min): $Ax=b$ med Gauss/Cramer, parametrisk system, rang og løsbarhetstolkning (sjanger E).
3. Prøve 2.C (35 min): Egenverdier og egenvektorer, med spor/determinant-kobling til stabilitet (sjanger F).
4. Prøve 2.D (40 min): Full lineær algebra-oppgave i regime B-format (produkt+det+system+rang) (sjanger D+E).

---

### Del 3 — Differensiallikninger *(prioritet: PERFEKT — Oppgave 3, ~100 %)*

> **Forkunnskaps-skille:** integrasjon (Del 1) brukes aktivt i separable
> diff.likninger; egenverdier (kap. 2.5) brukes i stabilitet av systemer; komplekse
> tall (SØK1001-oppfriskning, kap. 0.1) trengs for komplekse karakteristiske røtter.

#### Kapittel 3.1: Førsteordens lineær diff.likning

- **id:** `sok3004-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `sok3004-1-1`
- **Kapitteltype:** teori
- **description:** $\dot x + a x = b$: generell løsning $x(t) = Ce^{-at} + b/a$, partikulær via startbetingelse, likevekt $x_{ss} = b/a$ og dens stabilitet (stabil hvis $a > 0$) — den hyppigste DE-typen.
- **Eksamensbelegg:** ~95 % frekvens; standardformelen forventes. Likevekt/steady state + stabilitetskonklusjon kreves. Prioritet: **perfekt**.
- **Innholdskontrakt:** **$\dot x + ax = b$** (konstante koeffisienter): generell løsning $x(t) = Ce^{-at} + b/a$ (homogen $Ce^{-at}$ + partikulær/likevekt $b/a$); utled gjerne via integrerende faktor $e^{at}$ (kreves aktivt å kunne). **Startbetingelse** $x(0) = x_0$ bestemmer $C$ → partikulærløsning. **Likevekt/steady state** $x_{ss} = b/a$ (der $\dot x = 0$). **Stabilitet:** likevekten er (globalt asymptotisk) stabil hvis $a > 0$ ($x \to x_{ss}$ når $t \to \infty$), ustabil hvis $a < 0$. Konkluder **eksplisitt**. Generaliser kort til variabel høyreside $\dot x + ax = b(t)$ (integrerende faktor). Nevn Newton-notasjonen $\dot x = dx/dt$.
- **Oppgavesjangre:** G. Mønstereksempel: «Løs $\dot x + 3x = 9$, finn likevekten og avgjør om den er stabil.»
- **Typiske feil:** Glemme partikulærløsningen / stoppe ved homogen; **feil fortegnsregel for stabilitet** (konkludere stabilitet uten å sjekke $a > 0$, §5.6); glemme startbetingelsen ved bestemmelse av $C$; regnefeil i integrerende faktor.
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 3.2: Separable diff.likninger

- **id:** `sok3004-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok3004-3-1`, `sok3004-1-3`
- **Kapitteltype:** teori
- **description:** $\dot x = g(t)h(x)$: skill variablene, integrer begge sider, sett inn startbetingelse → integralkurve; med standardcasene $\dot x = t/x$, $\dot x = -3tx^3$.
- **Eksamensbelegg:** ~80 % frekvens; ofte med startbetingelse → integralkurve. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Separabel form** $\dot x = g(t)h(x)$: skriv $\frac{dx}{h(x)} = g(t)\,dt$, **integrer begge sider** (Del 1-teknikkene), løs for $x(t)$ hvis mulig, sett inn **startbetingelse** for konstanten → **integralkurven** gjennom det gitte punktet. Standardcasene $\dot x = t/x$ (→ $x^2 - t^2 = C$), $\dot x = -3tx^3$. Sjekk **konstantløsninger** $h(x) = 0$ FØRST (de kan gå tapt i separasjonen). Understrek at ikke alle løsninger er eksplisitte (implisitt integralkurve er ok).
- **Oppgavesjangre:** G. Mønstereksempel: «Løs $\dot x = -3tx^3$ og finn integralkurven gjennom $(0, 1)$.»
- **Typiske feil:** Glemme konstantløsninger $h(x) = 0$; integrere bare den ene siden; glemme integrasjonskonstanten / startbetingelsen; algebrafeil ved løsning for $x$.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 3.3: Andreordens lineær diff.likning

- **id:** `sok3004-3-3` · **number:** 3.3 · **estimatedMinutes:** 60 · **prerequisites:** `sok3004-3-1`
- **Kapitteltype:** teori
- **description:** $\ddot x + b\dot x + cx = f(t)$: karakteristisk likning (tre rot-tilfeller), homogen + partikulær løsning ved ubestemte koeffisienter, og global asymptotisk stabilitet.
- **Eksamensbelegg:** ~65 % frekvens; karakteristisk likning + homogen + partikulær; G.A.S.-spørsmål. Prioritet: **perfekt/kunne**.
- **Innholdskontrakt:** **Homogen** $\ddot x + b\dot x + cx = 0$: **karakteristisk likning** $r^2 + br + c = 0$, tre tilfeller — (i) **reelle ulike** røtter $r_1, r_2$: $x_h = C_1 e^{r_1 t} + C_2 e^{r_2 t}$; (ii) **dobbel** rot $r$: $x_h = (C_1 + C_2 t)e^{rt}$; (iii) **komplekse** røtter $\alpha \pm \beta i$: $x_h = e^{\alpha t}(C_1\cos\beta t + C_2\sin\beta t)$. **Partikulærløsning** ved ubestemte koeffisienter for polynom/eksponensiell høyreside $f(t)$ (ansatz av samme form). Full løsning $x = x_h + x_p$. **Global asymptotisk stabilitet:** krever at **begge** røtter har negativ realdel (⇔ $b > 0$ og $c > 0$). Konkluder eksplisitt.
- **Oppgavesjangre:** H. Mønstereksempel: «Finn den generelle løsningen av $\ddot x - \dot x - 6x = 0$ og en partikulærløsning av $\ddot x - \dot x - 6x = t^2 - 3$. Er likevekten globalt asymptotisk stabil?»
- **Typiske feil:** Feil rot-tilfelle (særlig doble/komplekse røtter); feil ansatz for partikulærløsningen; glemme å legge sammen $x_h + x_p$; **feil stabilitetskonklusjon** (ikke sjekke at begge røtter har negativ realdel, §5.6).
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 3.4: System av diff.likninger og likevekt

- **id:** `sok3004-3-4` · **number:** 3.4 · **estimatedMinutes:** 55 · **prerequisites:** `sok3004-3-3`, `sok3004-2-5`
- **Kapitteltype:** teori
- **description:** Lineære systemer $\dot x = \dots, \dot y = \dots$: finn likevekten ($\dot x = \dot y = 0$), og løs via egenverdiene til koeffisientmatrisen; Jacobi-matrisen ved ikke-lineære systemer.
- **Eksamensbelegg:** ~55 % frekvens; finn likevekt + stabilitet via egenverdier/spor+determinant. Bygger direkte på kap. 2.5. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Lineært system** $\dot{\mathbf{x}} = A\mathbf{x} + \mathbf{b}$: **likevekt** $\mathbf{x}_{ss}$ løses av $\dot x = \dot y = 0$ (dvs. $A\mathbf{x} = -\mathbf{b}$). Generell løsning via **egenverdier/egenvektorer** til $A$ (kap. 2.5): $\mathbf{x}(t) = \mathbf{x}_{ss} + C_1 e^{\lambda_1 t}\mathbf{v}_1 + C_2 e^{\lambda_2 t}\mathbf{v}_2$. **Ikke-lineære systemer:** lineariser rundt likevekten med **Jacobi-matrisen** $J$ (partielle deriverte), stabiliteten avgjøres av egenverdiene til $J$. Legg grunnlaget for faseanalysen (kap. 3.5). Kort om biologisk innpakning (populasjons-/symbiosemodell) som roterende drakt.
- **Oppgavesjangre:** I. Mønstereksempel: «For systemet $\dot x = -2x + 2y + 3$, $\dot y = -y + 3$: finn likevekten og den generelle løsningen.»
- **Typiske feil:** Feil likevekt (løser $\dot x = \dot y = 0$ galt); glemme egenvektorene i den generelle løsningen; feil Jacobi-matrise for ikke-lineære systemer; blande koeffisientmatrisen med utvidet matrise.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 3.5: Stabilitet og faseromsdiagram

- **id:** `sok3004-3-5` · **number:** 3.5 · **estimatedMinutes:** 60 · **prerequisites:** `sok3004-3-4`
- **Kapitteltype:** teori
- **description:** Stabilitetsanalyse (asymptotisk/globalt) via egenverdier og spor+determinant, faseromsdiagram med nullisokliner og retningspiler — det tyngste DE-temaet.
- **Eksamensbelegg:** ~55 % frekvens; både grafisk og analytisk. Trygg faseanalyse er A/B-markør; nullisokliner/retningspiler er der studenter roter (§5.11). Prioritet: **perfekt** (A/B-differensiator).
- **Innholdskontrakt:** **Stabilitetskriterier for $\dot{\mathbf{x}} = A\mathbf{x}$:** alle egenverdier med Re $\lambda < 0 \Rightarrow$ **asymptotisk stabil**; via **spor og determinant** ($2\times 2$): stabil $\Leftrightarrow$ spor $A < 0$ og $\det A > 0$; klassifiser knute/sadel/spiral/senter etter fortegn og diskriminant. **Faseromsdiagram:** tegn **nullisoklinene** ($\dot x = 0$ og $\dot y = 0$-kurvene), finn likevekten i skjæringen, marker **retningspilene** i de fire regionene (fortegnet på $\dot x, \dot y$), og skisser banene mot/fra likevekten. **Sadelpunkt:** én positiv og én negativ egenverdi → stabil bare langs egenvektoren til den negative egenverdien. Konkluder alltid **eksplisitt** om stabilitet. Figurkrav: navngi nullisokliner, likevekt, retningspiler.
- **Oppgavesjangre:** I. Mønstereksempel: «For systemet ovenfor: avgjør om likevekten er asymptotisk stabil, og skisser faseromsdiagrammet med nullisoklinene.»
- **Typiske feil:** **Feil retning på retningspilene** i regionene, eller feil egenvektor til den negative egenverdien (§5.11); konkludere stabilitet uten å sjekke at alle egenverdier har negativ realdel (§5.6); blande nullisoklinene; umerket fasediagram.
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 3.6: Drill: differensiallikningsoppgaven

- **id:** `sok3004-3-6` · **number:** 3.6 · **estimatedMinutes:** 85 · **prerequisites:** `sok3004-3-5`, `sok3004-3-2`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på hele Oppgave 3: fra 1. ordens lineær/separabel til 2. ordens og systemer, alltid med eksplisitt likevekts- og stabilitetskonklusjon.
- **Eksamensbelegg:** Dekker sjangrene G, H, I samlet — Oppgave 3 (25 %, ~100 %-gjenganger). Det tyngste temaet → drilles grundig. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) klassifiser (1. ordens lineær → formel $Ce^{-at}+b/a$; separabel → skill+integrer; 2. ordens → karakteristisk likning; system → egenverdier); 2) finn generell løsning; 3) bruk **startbetingelse** → partikulær; 4) finn **likevekten** ($\dot x = 0$); 5) **konkluder stabilitet eksplisitt** (fortegn på $a$ / røtter / egenverdier / spor+det); 6) ved system: faseromsdiagram med nullisokliner. **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling ved hvert steg — særlig partikulærløsningen, den eksplisitte stabilitetskonklusjonen, det merkede fasediagrammet). **10–15 oppgaver** på eksamensnivå som roterer type (1. lineær / separabel / 2. ordens / system) × leveranse (løsning / likevekt / stabilitet / fasediagram), alle med nyskrevne pent kalibrerte tall og `solution` + `hints`.
- **Oppgavesjangre:** G, H, I. Mønstereksempel (full kjede): «(a) Løs $\dot x + 2x = 8$, finn likevekten og avgjør stabiliteten. (b) Løs $\dot x = tx^2$ gjennom $(0,1)$. (c) Finn likevekten til systemet $\dot x = -x + y$, $\dot y = -2y$ og avgjør om den er asymptotisk stabil.»
- **Typiske feil:** Hele DE-repertoaret: stoppet ved homogen løsning, glemt startbetingelse, feil stabilitetsfortegn (§5.6), feil retningspiler (§5.11), glemt konstantløsning i separabel.
- **Quiz: 16 · Flashcards: 10**

**Prøve-kvote Del 3:** 4 prøver (`sok3004-3-prove`):
1. Prøve 3.A (35 min): Førsteordens lineær og separabel med startbetingelse, likevekt og stabilitet (sjanger G).
2. Prøve 3.B (40 min): Andreordens lineær — karakteristisk likning (tre rot-tilfeller), partikulær løsning, G.A.S. (sjanger H).
3. Prøve 3.C (45 min): System av diff.likninger — likevekt, egenverdi-stabilitet, faseromsdiagram med nullisokliner (sjanger I).
4. Prøve 3.D (40 min): Full diff.liknings-oppgave i regime B-format med eksplisitt stabilitetskonklusjon (sjanger G+H+I).

---

### Del 4 — Statisk optimering *(prioritet: PERFEKT — Oppgave 4, ~100 %)*

> **Forkunnskaps-skille:** gradient $\nabla f$ og Hesse-matrisen $H$ (SØK1001-
> oppfriskning, kap. 0.1) forutsettes; determinant/definitthet (kap. 2.2/2.5)
> brukes i andreordensbetingelsene.

#### Kapittel 4.1: Fri optimering: stasjonærpunkt og Hesse-klassifisering

- **id:** `sok3004-4-1` · **number:** 4.1 · **estimatedMinutes:** 60 · **prerequisites:** `sok3004-2-2`
- **Kapitteltype:** teori
- **description:** Stasjonærpunkt ($\nabla f = 0$) og klassifisering (maks/min/sadel) via Hesse-matrisens definitthet — Oppgave 4a nesten alltid.
- **Eksamensbelegg:** ~85 % frekvens; $f(x,y[,z])$ med definitthet/ledende hovedminorer. Andreordensbetingelsen er **obligatorisk** (§4.3). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Stasjonærpunkt:** sett gradienten $\nabla f = 0$ (alle partielle deriverte = 0), løs likningssystemet. **Klassifisering via Hesse-matrisen** $H = \begin{pmatrix} f_{xx} & f_{xy} \\ f_{yx} & f_{yy}\end{pmatrix}$: **positiv definit** ($f_{xx} > 0$ og $\det H > 0$) ⇒ **lokalt minimum**; **negativ definit** ($f_{xx} < 0$ og $\det H > 0$) ⇒ **lokalt maksimum**; **indefinit** ($\det H < 0$) ⇒ **sadelpunkt**; $\det H = 0$ ⇒ ubestemt (høyere test). For tre variabler: ledende hovedminorer. **Global** klassifisering hvis $f$ er konkav (maks) / konveks (min) overalt. Understrek at andreordenssjekken **ikke kan hoppes over**.
- **Oppgavesjangre:** J. Mønstereksempel: «Finn stasjonærpunktet til $f(x,y) = 2x^2 - 4xy + 4y^2 - 4y$ og avgjør om det er maks, min eller sadel.»
- **Typiske feil:** **Hoppe over andreordensbetingelsen** — påstå maksimum uten Hesse-sjekk (§5.7); forveksle maks/min/sadel; fortegnsfeil i $\det H$; glemme kravet $f_{xx}$-fortegn (bare $\det H > 0$ skiller ikke maks fra min).
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 4.2: Konveksitet, konkavitet og definitthet

- **id:** `sok3004-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `sok3004-4-1`
- **Kapitteltype:** teori
- **description:** Konvekse/konkave funksjoner, definitthet av Hesse-matrisen som globalt kriterium, og hvorfor konkavitet ⇒ maks / konveksitet ⇒ min garanterer *global* optimalitet — tilstrekkelighetsbæreren.
- **Eksamensbelegg:** Andreordens/definitthet ~70 %; bærer begrunnelsen for at et stasjonærpunkt *er* maks/min (kreves for full uttelling, §4.3). Prioritet: **perfekt** (bærer tilstrekkelighet).
- **Innholdskontrakt:** **Konkav/konveks funksjon:** konkav ⇔ Hesse negativ semidefinit overalt; konveks ⇔ positiv semidefinit overalt. **Definitthet** avgjøres av ledende hovedminorer / egenverdiene til $H$ (alle $> 0$ ⇒ pos. def.; alle $< 0$ ⇒ neg. def.; blandet fortegn ⇒ indefinit). **Nøkkelresultatet:** for en **konkav** funksjon er ethvert stasjonærpunkt et **globalt maksimum**; for en **konveks** funksjon et globalt minimum — dette gir tilstrekkelighet uten videre test. Koble til Del 2 (egenverdiene til $H$) og til optimering under bibetingelser (rand-Hesse, kap. 4.3). Kort om at Cobb–Douglas/log-nytte er konkav (bro til anvendelser, Del 5).
- **Oppgavesjangre:** J-fundament (tilstrekkelighet). Mønstereksempel: «Vis at $f(x,y) = -x^2 - 2y^2 + xy$ er konkav, og forklar hvorfor stasjonærpunktet dermed er et globalt maksimum.»
- **Typiske feil:** Blande semidefinit og definit; tro at $\det H > 0$ alene gir maks (må ha $f_{xx} < 0$); ikke bruke konkavitet til å konkludere *globalt*; forveksle konkav og konveks.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 4.3: Lagrange med likhetsbibetingelse

- **id:** `sok3004-4-3` · **number:** 4.3 · **estimatedMinutes:** 65 · **prerequisites:** `sok3004-4-1`
- **Kapitteltype:** teori
- **description:** $\mathcal{L} = f - \lambda(g - c)$, førsteordensbetingelser, løsning for $(x^*, y^*, \lambda)$, bekreftelse av maks/min, og **økonomisk tolkning av λ** (skyggepris) — nivå 2-differensiator.
- **Eksamensbelegg:** ~75 % frekvens; nyttemaks (Cobb–Douglas), kostnadsminimering, tidsallokering. **λ-tolkningen** er A/B-markør (§4.5). Prioritet: **perfekt** (høyt belønnet).
- **Innholdskontrakt:** **Lagrange-metoden:** $\mathcal{L}(x,y,\lambda) = f(x,y) - \lambda(g(x,y) - c)$; **førsteordensbetingelser** $\mathcal{L}_x = 0$, $\mathcal{L}_y = 0$, $\mathcal{L}_\lambda = 0$ (= bibetingelsen); løs for $(x^*, y^*, \lambda^*)$. **Bekreft** maks/min via rand-Hesse (bordered Hessian) eller ved at $f$ er konkav/konveks på bibetingelsen. **Tolkning av λ:** endringen i optimal verdi $f^*$ per enhet slakkere bibetingelse ($\lambda = df^*/dc$) — skyggeprisen/grenseverdien. Grafisk løsning (tangering mellom nivåkurve og bibetingelse) godtas som supplement. Standardcasene: maksimer $xy$ gitt $x + 4y = 16$; nyttemaks under budsjett. Understrek at λ-tolkningen kreves der oppgaven spør.
- **Oppgavesjangre:** K. Mønstereksempel: «Maksimer $f(x,y) = xy$ gitt $x + 4y = 16$. Bekreft at løsningen er et maksimum, og tolk lagrangemultiplikatoren.»
- **Typiske feil:** Feil oppsett av $\mathcal{L}$ (fortegn på $\lambda$-leddet); glemme bibetingelsen ($\mathcal{L}_\lambda = 0$); **ikke tolke λ** (§5.9) — la multiplikatoren stå uten mening; hoppe over bekreftelsen av maks/min.
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 4.4: Kuhn–Tucker og ikke-lineær programmering

- **id:** `sok3004-4-4` · **number:** 4.4 · **estimatedMinutes:** 70 · **prerequisites:** `sok3004-4-3`
- **Kapitteltype:** teori
- **description:** Kuhn–Tucker-betingelsene med **komplementær slakkhet** for ulikhetsbibetingelser ($x \le a$, $x \ge 0$), systematisk test av hvilke betingelser som binder, og hjørne- vs. indre løsning — toppkarakter-differensiatoren.
- **Eksamensbelegg:** ~60 % frekvens; fast innslag i optimeringsoppgaven (2012, 2016, 2020, 2021, og som $x\le a, y\le b$-programmer 2022–2024). **K–T ført systematisk + λ-tolket** skiller A/B (§4.4, §4.5). Prioritet: **perfekt** (den viktigste A/B-differensiatoren i optimering).
- **Innholdskontrakt:** **Oppsett:** for $\max f(x,y)$ u.b.b. $g(x,y) \le c$ (og $x,y \ge 0$): Lagrange $\mathcal{L} = f - \lambda(g - c)$. **Kuhn–Tucker-betingelsene med komplementær slakkhet:** $\partial\mathcal{L}/\partial x_j \le 0$ ($= 0$ hvis $x_j > 0$); $\lambda \ge 0$ ($= 0$ hvis bibetingelsen er slakk, dvs. $g < c$). **Systematisk løsning:** test hvilke betingelser som binder (bibetingelse bindende ⇔ $\lambda > 0$); sammenlign kandidatløsninger (indre punkt vs. hjørner); ved $x \le a$-programmer: sjekk om det ubetingede optimum ligger innenfor tillatt område (er det gjør, er bibetingelsen slakk). **Argumenter** for hvilke som binder (V2021-mønsteret: indre løsning gir høyere verdi enn hjørner her ⇒ $\lambda > 0$ ⇒ bibetingelsen bindende med likhet). Tolk λ økonomisk. Standardcase: maksimer $2xy + 2$ gitt $x + 2y \le 2$, $x, y \ge 0$.
- **Oppgavesjangre:** L. Mønstereksempel: «Maksimer $2xy + 2$ gitt $x + 2y \le 2$, $x \ge 0$, $y \ge 0$. Sett opp Kuhn–Tucker-betingelsene og finn løsningen.»
- **Typiske feil:** **Behandle et K–T-problem som et rent Lagrange-problem** — ignorere ikke-negativitetsbetingelsene og komplementær slakkhet, eller bare teste indre løsning uten å vurdere hjørner (§5.8); feil fortegn på $\lambda$ (skal være $\ge 0$ ved maks); ikke tolke λ (§5.9).
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 4.5: Optimering med økonomisk innhold

- **id:** `sok3004-4-5` · **number:** 4.5 · **estimatedMinutes:** 55 · **prerequisites:** `sok3004-4-4`, `sok3004-4-3`
- **Kapitteltype:** teori
- **description:** Optimeringsapparatet brukt på økonomiske problemer: profittmaks ($p x^a - wx$, indre maks krever $0 < \alpha < 1$), kostnadsminimering og nyttemaks (Cobb–Douglas/log) med budsjettbibetingelse — broen til Del 5.
- **Eksamensbelegg:** Profittmaks ~40 %, nyttemaks ~40 %; de faste økonomiske innpakningene av optimering (H2025, V2020, H2017). Prioritet: **kunne** (nivå 2). *(Utdypes videre i Del 5.)*
- **Innholdskontrakt:** **Profittmaksimering** $\max \pi = p x^a - wx$: FOB $\alpha p x^{\alpha-1} = w$ → $x^* = (\alpha p/w)^{1/(1-\alpha)}$; **indre maksimum krever $0 < \alpha < 1$** (konkav profitt — andreordensbetingelsen). **Nyttemaks** $\max u(x,y) = \gamma\ln x + (1-\gamma)\ln y$ u.b.b. $p_x x + p_y y = m$ via Lagrange → $x^* = \gamma m/p_x$, $y^* = (1-\gamma)m/p_y$ (Cobb–Douglas-etterspørsel). **Kostnadsminimering** fra produktfunksjon → kostnadsfunksjon $C(y)$. Understrek at dette er samme Lagrange/K–T-apparat (kap. 4.3/4.4) i økonomisk drakt — gjenkjenn strukturen. Kryssrefererer til Del 5 for nåverdi-innpakningen og indirekte nytte.
- **Oppgavesjangre:** M, N. Mønstereksempel (M): «En bedrift maksimerer $\pi = p x^a - wx$ med $0 < \alpha < 1$. Finn optimal sysselsetting $x^*$ og forklar hvorfor det er et indre maksimum.»
- **Typiske feil:** Glemme kravet $0 < \alpha < 1$ for indre maks; hoppe over andreordensbetingelsen (konkavitet); regnefeil i eksponentmanipulasjonen; ikke tolke løsningen økonomisk.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 4.6: Drill: optimeringsoppgaven

- **id:** `sok3004-4-6` · **number:** 4.6 · **estimatedMinutes:** 90 · **prerequisites:** `sok3004-4-5`, `sok3004-4-4`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på hele Oppgave 4: fra stasjonærpunkt + Hesse-klassifisering til Lagrange (med λ-tolkning) og Kuhn–Tucker (med komplementær slakkhet) — fullført A-besvarelse.
- **Eksamensbelegg:** Dekker sjangrene J, K, L, M, N samlet — Oppgave 4 (25 %, ~100 %-gjenganger). Kuhn–Tucker + λ-tolkning er toppkarakter-differensiatoren. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) **fri optimering** — $\nabla f = 0$ → stasjonærpunkt, klassifiser via Hesse (obligatorisk); 2) **Lagrange** (likhet) — $\mathcal{L} = f - \lambda(g - c)$, FOB, løs, bekreft maks/min, **tolk λ**; 3) **Kuhn–Tucker** (ulikhet) — K–T med komplementær slakkhet, test hvilke binder, sammenlign hjørner vs. indre, tolk λ; 4) ved økonomisk innpakning: gjenkjenn profittmaks/nyttemaks og sjekk $0 < \alpha < 1$. **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling ved hvert steg — særlig Hesse-klassifiseringen, den økonomiske λ-tolkningen, den komplementære slakkheten i K–T). **12–16 oppgaver** på eksamensnivå som roterer type (fri / Lagrange / Kuhn–Tucker / økonomisk innpakning) × variabelantall (2/3), alle med nyskrevne pent kalibrerte tall og `solution` + `hints`. **Cournot-analogen finnes ikke her — men Kuhn–Tucker drilles til overmål** som differensiatoren.
- **Oppgavesjangre:** J, K, L, M, N. Mønstereksempel (full kjede): «(a) Finn og klassifiser stasjonærpunktet til $f(x,y) = x^2 + y^2 - xy - 3x$. (b) Maksimer $\ln x + \ln y$ gitt $2x + y = 12$ og tolk λ. (c) Maksimer $xy$ gitt $x + y \le 6$, $x,y \ge 0$ med Kuhn–Tucker.»
- **Typiske feil:** Hele optimeringsrepertoaret: hoppet andreordensbetingelse (§5.7), utolket λ (§5.9), K–T behandlet som Lagrange (§5.8), glemt $0 < \alpha < 1$.
- **Quiz: 16 · Flashcards: 10**

**Prøve-kvote Del 4:** 4 prøver (`sok3004-4-prove`):
1. Prøve 4.A (35 min): Fri optimering — stasjonærpunkt + Hesse-klassifisering (maks/min/sadel), konkavitet/definitthet (sjanger J).
2. Prøve 4.B (40 min): Lagrange med likhetsbibetingelse, bekreftelse av maks, og økonomisk tolkning av λ (sjanger K).
3. Prøve 4.C (45 min): Kuhn–Tucker med komplementær slakkhet, hjørne- vs. indre løsning, λ-tolkning (sjanger L).
4. Prøve 4.D (45 min): Full optimeringsoppgave i regime B-format (stasjonærpunkt + Lagrange eller K–T) med økonomisk innpakning (sjanger J+K+L / M+N).

---

### Del 5 — Mikro- og finansanvendelser *(prioritet: KUNNE — roterende innpakning)*

> **Forkunnskaps-skille:** uegentlig integral (kap. 1.4) bærer nåverdi;
> Lagrange/K–T (kap. 4.3/4.4) bærer produsent-/konsumentoptimeringen. Del 5
> gjenbruker søylenes matematikk i den økonomiske drakten sensor forventer.

#### Kapittel 5.1: Nåverdi og uegentlige integraler i finans

- **id:** `sok3004-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `sok3004-1-4`
- **Kapitteltype:** teori (anvendelse)
- **description:** Nåverdi av kontinuerlig kontantstrøm $V_0 = \int_0^\infty e^{-ks}D(s)\,ds$ for konstant, eksponentiell og lineær profil, med konvergensbetingelsen $g < k$ — den faste finansinnpakningen.
- **Eksamensbelegg:** Nåverdi/uegentlig ~30 % (V2020, H2017); aksjeverdi/investering er fast økonomisk innpakning. Konvergensbetingelsen er A/B-poeng (§5.10). Prioritet: **kunne** (nivå 2–3).
- **Innholdskontrakt:** **Nåverdi** som uegentlig integral $V_0 = \int_0^\infty e^{-ks}D(s)\,ds$ (kontinuerlig diskontering, rente $k$). **Kontantstrømprofiler:** konstant $D(s) = \delta$ → $V_0 = \delta/k$; eksponentiell vekst $D(s) = \delta e^{gs}$ → $V_0 = \delta/(k - g)$ **med konvergensbetingelsen $g < k$** (ellers divergerer integralet); lineær $D(s) = \delta s$. Kort om diskret nåverdi $\sum_t B_t/(1+r)^t$ og lønnsomhet (positiv nåverdi ⇒ lønnsom). Koble til Taylor (kap. 1.4) for tilnærming av $e^{-rt}$. Understrek at teknikken ER kap. 1.4s uegentlige integral i økonomisk drakt.
- **Oppgavesjangre:** B. Mønstereksempel: «En aksje gir en kontinuerlig dividendestrøm $D(s) = \delta e^{gs}$ med diskonteringsrente $k > 0$. Finn dagens verdi og angi betingelsen for at den er endelig.»
- **Typiske feil:** **Overse konvergensbetingelsen $g < k$** (§5.10); feil grense $s \to \infty$; blande kontinuerlig og diskret diskontering; regnefeil i det uegentlige integralet.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 5.2: Produsentteori: profittmaks, kostnad og tilbud

- **id:** `sok3004-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok3004-4-5`
- **Kapitteltype:** teori (anvendelse)
- **description:** Profittmaksimering fra Cobb–Douglas, kostnadsfunksjon fra produktfunksjon, tilbudsfunksjon, og konveksitet av profittfunksjonen i faktorpriser (Varian kap. 3) — produsentinnpakningen.
- **Eksamensbelegg:** Produsent (profittmaks/kostnad/tilbud) ~40 %; konveksitet av profittfunksjonen ~15 % (V2021, Varian-referanse). Prioritet: **kunne** (nivå 2), konveksitet **kjenne** (nivå 3, A/B-poeng).
- **Innholdskontrakt:** **Profittmaks** $\max \pi = p f(x) - wx$ med Cobb–Douglas $f$: FOB → faktoretterspørsel; indre maks krever avtakende skalautbytte. **Kostnadsfunksjon** $C(y)$ utledet ved kostnadsminimering (Lagrange, kap. 4.3) fra produktfunksjon → korttids/langtids kostnad. **Tilbudsfunksjon** fra $p = MC$. **Konveksitet av profittfunksjonen i faktorpriser** (Varian-resultat): $\pi(w)$ er konveks i $w$ ⇒ faktoretterspørselen faller når egen faktorpris stiger (Hotellings lemma / envelope). Kryssrefererer til kap. 4.5 for selve optimeringen. Merk pensumankeret: **Varian, *Microeconomic Analysis*, kap. 3** *(verifiser eksakt kapittelnummer mot gjeldende utgave)*.
- **Oppgavesjangre:** M. Mønstereksempel: «Utled kostnadsfunksjonen til en bedrift med produktfunksjon $y = x_1^{1/3} x_2^{1/3}$, og finn tilbudsfunksjonen.»
- **Typiske feil:** Glemme andreordensbetingelsen for indre maks; feil kostnadsminimering (ikke sette opp Lagrange riktig); blande korttids og langtids kostnad; feil retning på konveksitetskonklusjonen (faktorbruk *faller* når prisen *stiger*).
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 5.3: Konsumentteori og indirekte nytte; risikoaversjon

- **id:** `sok3004-5-3` · **number:** 5.3 · **estimatedMinutes:** 55 · **prerequisites:** `sok3004-4-5`
- **Kapitteltype:** teori (anvendelse)
- **description:** Nyttemaks (Cobb–Douglas/log) → etterspørsel, indirekte nyttefunksjon ved innsetting, og risikoaversjon ($u' > 0$, $u'' < 0$, relativ risikoaversjon) — konsumentinnpakningen.
- **Eksamensbelegg:** Konsument/nyttemaks ~40 % (H2025, V2017 indirekte nytte); risikoaversjon ~10 % (V2013). Prioritet: **kunne** (nyttemaks) / **kjenne** (indirekte nytte, risikoaversjon).
- **Innholdskontrakt:** **Nyttemaks** $\max u(x,y)$ u.b.b. $p_x x + p_y y = m$ via Lagrange (kap. 4.3) → **etterspørselsfunksjoner** (for log/Cobb–Douglas: $x^* = \gamma m/p_x$). **Indirekte nyttefunksjon** $v(p_x, p_y, m) = u(x^*, y^*)$ ved innsetting; drøft hvordan priser og inntekt påvirker den (fallende i priser, økende i inntekt). **Risikoaversjon:** en risikoavers konsument har $u' > 0$ (mer er bedre) og $u'' < 0$ (avtakende grensenytte, konkav nytte); **relativ risikoaversjon** $-x u''/u'$; sammenlign forventet nytte med nytte av forventning (Jensen). Kort, «bør kjenne». Kryssrefererer til kap. 4.5 for optimeringen.
- **Oppgavesjangre:** N. Mønstereksempel: «Maksimer $u(x,y) = \gamma\ln x + (1-\gamma)\ln y$ gitt $p_x x + p_y y = m$, $0 < \gamma < 1$. Finn de optimale mengdene og den indirekte nyttefunksjonen.»
- **Typiske feil:** Feil budsjettbibetingelse i Lagrange; glemme å sette optimum tilbake for indirekte nytte; forveksle absolutt og relativ risikoaversjon; feil fortegn ($u'' < 0$ for risikoaversjon).
- **Quiz: 20 · Flashcards: 18**

**Prøve-kvote Del 5:** 4 prøver (`sok3004-5-prove`):
1. Prøve 5.A (30 min): Nåverdi — kontinuerlig og diskret diskontering, konvergensbetingelse, lønnsomhet (sjanger B).
2. Prøve 5.B (35 min): Produsent — profittmaks, kostnadsfunksjon fra produktfunksjon, tilbud (sjanger M).
3. Prøve 5.C (35 min): Konsument — nyttemaks, etterspørsel, indirekte nytte (sjanger N).
4. Prøve 5.D (30 min): Blandet anvendelse — nåverdi + optimeringsinnpakning på tvers (sjanger B+M+N).

---

### Del 6 — Nivå-4-tema: geometri i Rⁿ og matrisebevis *(prioritet: KJENNE — bredde og A/B-poeng)*

#### Kapittel 6.1: Geometri i R³: plan, linjer og skjæring

- **id:** `sok3004-6-1` · **number:** 6.1 · **estimatedMinutes:** 45 · **prerequisites:** `sok3004-2-1`
- **Kapitteltype:** teori (nivå 4)
- **description:** Vektorer, plan og linjer i $\mathbb{R}^3$ (normalvektor, parameter-/likningsform), og skjæring mellom dem — et nytt 2025-innslag.
- **Eksamensbelegg:** Geometri i $\mathbb{R}^n$ ~10 % (V2025, nytt innslag). Sjeldent, men forekommer i regime C. Prioritet: **kjenne** (nivå 4).
- **Innholdskontrakt:** **Vektorer i $\mathbb{R}^3$:** skalarprodukt, lengde, ortogonalitet, kryssprodukt (normalvektor). **Plan:** likningsform $ax + by + cz = d$ med normalvektor $(a,b,c)$; punkt-normal-form. **Linje:** parameterform $\mathbf{r}(t) = \mathbf{r}_0 + t\mathbf{v}$. **Skjæring:** linje ∩ plan (sett inn parameterform, løs for $t$); to plan ∩ (skjæringslinje); avstand punkt–plan. Understrek at dette bruker lineær algebra-apparatet (Del 2) i geometrisk drakt. Kompakt kapittel — «bør kjenne til» hvis regime C.
- **Oppgavesjangre:** (nivå-4-variant, ingen egen bokstav). Mønstereksempel: «Finn skjæringspunktet mellom linjen $\mathbf{r}(t) = (1,0,2) + t(1,1,-1)$ og planet $2x - y + z = 5$.»
- **Typiske feil:** Blande parameter- og likningsform; feil normalvektor; regnefeil ved innsetting; glemme å sjekke om linjen ligger i planet (uendelig mange / ingen skjæring).
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 6.2: Matrisebevis og abstrakte identiteter

- **id:** `sok3004-6-2` · **number:** 6.2 · **estimatedMinutes:** 45 · **prerequisites:** `sok3004-2-2`
- **Kapitteltype:** teori (nivå 4)
- **description:** Bevis-orienterte matriseoppgaver: identiteter som $(PQ)^2$, symmetri av $A'A$, invers-eksistens — den mer bevisorienterte vrien (H2025, V2014).
- **Eksamensbelegg:** Matrisebevis/abstrakte identiteter ~20 % (H2025 $(PQ)^2$ og symmetri av $A'A$, V2014). Bevis ført presist er A/B-markør (§4). Prioritet: **kjenne/kunne** (nivå 4, høyt belønnet ved regime C).
- **Innholdskontrakt:** **Generelle matriseidentiteter** ført med regnereglene (ikke tallmatriser): $(PQ)^2 = PQPQ$ (ikke $P^2Q^2$ med mindre $PQ = QP$); $(A')' = A$; $(AB)' = B'A'$; $(AB)^{-1} = B'^{-1}\dots$ **Symmetri:** $A'A$ er alltid symmetrisk (vis $(A'A)' = A'A$) — sentralt for OLS-normalligningene $b = (X'X)^{-1}X'y$. **Invers-eksistens:** $A^{-1}$ finnes ⇔ $\det A \ne 0$ ⇔ full rang ⇔ kolonnene lineært uavhengige. Understrek **bevisdisiplinen:** hver overgang begrunnes med en navngitt regel; ingen «hopp». Koble til OLS-utledningen (lineær algebra brukt i økonometri). Kort kapittel.
- **Oppgavesjangre:** (nivå-4-variant). Mønstereksempel: «Vis at $A'A$ er symmetrisk for enhver matrise $A$, og forklar hvorfor dette er sentralt for OLS-estimatoren $b = (X'X)^{-1}X'y$.»
- **Typiske feil:** Anta $PQ = QP$ (galt generelt); feil rekkefølge i $(AB)' = B'A'$; hoppe over begrunnelser (bevis krever hver regel navngitt); forveksle symmetri med ortogonalitet.
- **Quiz: 18 · Flashcards: 16**

**Prøve-kvote Del 6:** 4 prøver (`sok3004-6-prove`):
1. Prøve 6.A (30 min): Geometri i $\mathbb{R}^3$ — plan, linje, skjæring, normalvektor (nivå-4-variant).
2. Prøve 6.B (30 min): Matrisebevis — $(PQ)^2$, symmetri av $A'A$, invers-eksistens (nivå-4-variant).
3. Prøve 6.C (30 min): OLS via lineær algebra — normalligningene og $b = (X'X)^{-1}X'y$ (nivå-4-variant).
4. Prøve 6.D (30 min): Blandet nivå-4 i regime C-format — geometri eller bevis + risikoaversjon (nivå-4-variant).

---

### Del 7 — Eksamenstrening

#### Kapittel 7.1: Sjangerdrill på tvers: den fullstendige besvarelsen

- **id:** `sok3004-7-1` · **number:** 7.1 · **estimatedMinutes:** 75 · **prerequisites:** `sok3004-4-6`, `sok3004-3-6`, `sok3004-2-6`, `sok3004-1-5`
- **Kapitteltype:** sjangerkapittel (tverrgående)
- **description:** Hvordan en hel eksamensbesvarelse bygges: tidsbudsjett over de fire (fem) oppgavene, hva sensor krever i hver, og de fem metareglene brukt på tvers — en oppsummerende sjangerdrill.
- **Eksamensbelegg:** Metakapittel som binder søylene. Speiler regime B (4×25 %) og regime C (5 oppgaver). Sensorens metaregler (§4) og karakterskillene (§4) brukt konkret. Prioritet: **perfekt** (syntesen).
- **Innholdskontrakt:** **Tidsbudsjett** for 300 min: ~75 min per oppgave i 4-oppgavemalen (evt. 60 min ved 5 oppgaver). **Per-oppgave-sjekkliste** (fra drillkapitlene 1.5/2.6/3.6/4.6, samlet): integrasjon — kontroller ved derivasjon, del opp areal; lineær algebra — dimensjonssjekk, relater rang til løsbarhet; DE — partikulær + likevekt + eksplisitt stabilitet; optimering — andreordensbetingelse + λ-tolkning + K–T komplementær slakkhet. **De fem metareglene** brukt på tvers (begrunn, andreordens, rang↔løsbarhet, stabilitet, λ + antakelser). **8–12 tverrgående oppgaver** som hver kombinerer to søyler (f.eks. integrasjon → nåverdi; egenverdier → DE-stabilitet; Lagrange → økonomisk tolkning), på eksamensnivå med `solution` + `hints`.
- **Oppgavesjangre:** A–N (tverrgående). Mønstereksempel: «(Oppg. 3-type) Løs $\dot x = -x + 4$ og avgjør stabiliteten. (Oppg. 2-type) Finn egenverdiene til koeffisientmatrisen i systemet $\dot{\mathbf{x}} = A\mathbf{x}$ og bruk dem til å konkludere om systemets stabilitet.»
- **Typiske feil:** Feil tidsbudsjett (bruke for lenge på én søyle); glemme metaregelen som gjelder den aktuelle oppgavetypen; ikke gjenkjenne den økonomiske innpakningen som kjent matematikk.
- **Quiz: 16 · Flashcards: 12**

#### Kapittel 7.2: Øvingseksamen 1 (regime B: 4 oppgaver à 25 %)

- **id:** `sok3004-7-2` · **number:** 7.2 · **estimatedMinutes:** 90 · **prerequisites:** `sok3004-7-1`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett 4-oppgavesett i regime B-mal (integrasjon / lineær algebra / differensiallikninger / optimering, 25 % hver), med fullstendig løsningsforslag skrevet som A-besvarelse.
- **Eksamensbelegg:** Speiler den faste 2020–2024-malen (§1, regime B) — den mest sannsynlige eksamensformen. Prioritet: **perfekt** (typisk eksamen).
- **Innholdskontrakt:** **Fire oppgaver, 25 % hver, 300 min** (nyskrevne tall/kontekst): **Oppg. 1 (integrasjon)** — tre ubestemte integraler (potens, log/brøk, delvis integrasjon) + arealberegning med oppdeling; **Oppg. 2 (lineær algebra)** — $A+B$, $AB$, determinanter, $Cx = d$ med rang/løsbarhet; **Oppg. 3 (differensiallikninger)** — 1. ordens lineær med likevekt/stabilitet + separabel + 2. ordens; **Oppg. 4 (optimering)** — stasjonærpunkt + Hesse-klassifisering, deretter Lagrange *eller* Kuhn–Tucker med λ-tolkning. **Løsningsforslag i eget `collapsible` per oppgave**, skrevet som A-besvarelse med `tip`-notat om delpoeng/vekting og de fem metareglene.
- **Oppgavesjangre:** A, D/E, G/H, J/K/L. Mønstereksempel: hele settet, kalibrert til reell vanskelighet men med egne tall.
- **Typiske feil:** Samlefeilene fra alle fire søyler; dårlig tidsstyring; hoppet metaregler.
- **Quiz: 14 · Flashcards: 8**

#### Kapittel 7.3: Øvingseksamen 2 (regime B med anvendelsesinnpakning)

- **id:** `sok3004-7-3` · **number:** 7.3 · **estimatedMinutes:** 90 · **prerequisites:** `sok3004-7-1`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett 4-oppgavesett i regime B-mal, men med økonomisk innpakning (nåverdi, produsent, konsument) på hver søyle, med A-besvarelse.
- **Eksamensbelegg:** Speiler regime B med den anvendelsestunge vrien (nåverdi i integrasjon, OLS-koblet lineær algebra, økonomisk optimering). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Fire oppgaver, 25 % hver, 300 min** (nyskrevne): **Oppg. 1** — integrasjon med **nåverdi/uegentlig integral** (dividendestrøm, konvergensbetingelse) + Taylor; **Oppg. 2** — lineær algebra koblet til **OLS** ($A'A$ symmetrisk, $b = (X'X)^{-1}X'y$) + egenverdier; **Oppg. 3** — DE-system med likevekt, egenverdi-stabilitet og faseromsdiagram (biologisk/økonomisk innpakning); **Oppg. 4** — **profittmaks/nyttemaks** (Cobb–Douglas) med Lagrange og λ-tolkning. **Løsningsforslag i eget `collapsible` per oppgave** som A-besvarelse med vektingsnotat.
- **Oppgavesjangre:** B/C, F, I, K/M/N. Mønstereksempel: hele settet.
- **Typiske feil:** Overse konvergensbetingelse (§5.10); ikke gjenkjenne innpakningen som kjent matematikk; feil egenvektor i faseanalysen (§5.11).
- **Quiz: 14 · Flashcards: 8**

#### Kapittel 7.4: Øvingseksamen 3 (regime C: 5 oppgaver med variasjon)

- **id:** `sok3004-7-4` · **number:** 7.4 · **estimatedMinutes:** 90 · **prerequisites:** `sok3004-7-1`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett 5-oppgavesett i regime C-mal (2025-varianten): de fire søylene pluss en anvendelses-/geometri-/bevisoppgave, med A-besvarelse.
- **Eksamensbelegg:** Speiler regime C (V2025/H2025 — R³-geometri, Black–Scholes-DE, matrisebevis, K–T). Prioritet: **kunne** (den varierte formen).
- **Innholdskontrakt:** **Fem oppgaver, 20 % hver, 300 min** (nyskrevne): **Oppg. 1** — integrasjon (inkl. uegentlig/numerisk); **Oppg. 2** — **geometri i $\mathbb{R}^3$** (plan/linje/skjæring) *eller* **matrisebevis** ($(PQ)^2$, symmetri av $A'A$); **Oppg. 3** — en andreordens DE av finanstype (Black–Scholes-lignende, potensfunksjon-ansatz $F = x^r$) *eller* separabel + lineært DE-system med stabilitet; **Oppg. 4** — **Lagrange-problem med tolkning av λ**; **Oppg. 5** — **Kuhn–Tucker** eller profittmaks/nyttemaks (Cobb–Douglas budsjettmaks). **Løsningsforslag i eget `collapsible` per oppgave** som A-besvarelse med vektingsnotat, og et `tip` om at regime C premierer selvstendig resonnement der «boka slutter».
- **Oppgavesjangre:** A, nivå-4 (geometri/bevis), H/I, K, L/M/N. Mønstereksempel: hele settet.
- **Typiske feil:** Ikke tørre selvstendig resonnement på «uvant» oppgave; feil ansatz i finans-DE; hoppet bevisbegrunnelser.
- **Quiz: 14 · Flashcards: 8**

**Prøve-kvote Del 7:** ingen egne temaprøver (delen ER øvingseksamener + tverrgående drill). De tre komplette settene (7.2–7.4) fungerer som fullskala-prøver og dekker samlet sjangrene A–N og begge regimer.

---

## 4. Kvotesammendrag (AUTORITATIVT)

Denne tabellen er **fasit** for alle senere faser — per-kapittel-kvotene over
summerer hit. Quiz-sum ≥ 500 og flashcard-sum ≥ 500 er GULV; SØK3004 skaleres
høyere (fire notasjonstunge søyler + anvendelser + fem definisjonsklasser per del
gir naturlig høy tetthet). Prøvekapitler teller ikke i quiz/fc-summen (egne
oppgavesett).

| Del | Kapitler | Quiz (sum) | Flashcards (sum) | Prøver |
|---|---|---|---|---|
| 0 | 0.1 | 20 | 16 | 0 |
| 1 | 1.1–1.5 | 24+24+22+24+16 = **110** | 22+20+18+20+10 = **90** | 4 |
| 2 | 2.1–2.6 | 22+22+22+22+22+16 = **126** | 22+20+18+20+22+10 = **112** | 4 |
| 3 | 3.1–3.6 | 22+20+22+20+22+16 = **122** | 20+18+22+18+20+10 = **108** | 4 |
| 4 | 4.1–4.6 | 24+20+24+24+20+16 = **128** | 22+20+22+22+18+10 = **114** | 4 |
| 5 | 5.1–5.3 | 20+20+20 = **60** | 18+18+18 = **54** | 4 |
| 6 | 6.1–6.2 | 18+18 = **36** | 16+16 = **32** | 4 |
| 7 | 7.1–7.4 | 16+14+14+14 = **58** | 12+8+8+8 = **36** | 0 |
| **Sum** | **33 kap** | **660** | **562** | **24 prøver** (6 deler × 4) |

**Quiz totalt: 660 (krav ≥500) ✓**
**Flashcards totalt: 562 (krav ≥500) ✓**
**Prøver: 4 per temadel (Del 1–6) = 24 temaprøver + 3 komplette øvingseksamener (7.2–7.4).**

Prøvekapitler (`sok3004-<del>-prove`, chapterNumber `<del>.P`): `sok3004-1-prove`,
`sok3004-2-prove`, `sok3004-3-prove`, `sok3004-4-prove`, `sok3004-5-prove`,
`sok3004-6-prove`. Del 0 og Del 7 har ingen egen temaprøve (metadel hhv. øvingseksamener).

---

## 5. Studieguide-kjerne

Del 0 (kap. 0.1) er studieguidens kjerne. I tillegg skal boka samle:

1. **Eksamenskartet** — de fire søylene, de tre regimene (A/B/C), hjelpemiddelkode
   H vs. C, temafrekvens-tabellene (fire spor), sjangerkatalogen A–N og prognosen (§1, §7).
2. **De fire søylene i ett blikk** — integrasjon (potens → delvis → substitusjon →
   areal → nåverdi/Taylor); lineær algebra (produkt/det → system/Gauss/Cramer →
   rang/løsbarhet → egenverdier); differensiallikninger (1. lineær → separabel →
   2. ordens → system → stabilitet/fase); optimering (fri/Hesse → konveksitet →
   Lagrange/λ → Kuhn–Tucker → økonomisk innpakning).
3. **Sensorens fem metaregler** — begrunn svarene; andreordensbetingelser
   obligatorisk; rang↔løsbarhet; stabilitet konkludert eksplisitt; λ tolket + antakelser oppgitt.
4. **Feilkatalogen** — de 12 typiske feilene (§5 i analysen) samlet, hver med
   henvisning til kapitlet som forebygger den: manglende arealoppdeling (1.4);
   feil delvis integrasjon (1.2); $AB$ udefinert/antatt $AB=BA$ (2.1); urelatert
   rang (2.4); glemt partikulær/startbetingelse (3.1/3.2); feil stabilitetsfortegn
   (3.1/3.3/3.5); hoppet andreordensbetingelse (4.1); K–T som Lagrange (4.4);
   utolket λ (4.3/4.4); oversett konvergensbetingelse (5.1); feil Jacobi/nullisokliner (3.5);
   ikke oppgitte antakelser (0.1).
5. **Formelark i emnets notasjon** — én side: integrasjonsregler (potens, delvis
   $\int u\,dv = uv - \int v\,du$, log $\int g'/g = \ln|g|$); nåverdi $\int_0^\infty e^{-ks}D\,ds$
   (konvergens $g<k$); determinant $2\times2$/$3\times3$, $\det(AB)=\det A\det B$;
   løsbarhet via $r(A)$ vs. $r(Ab)$; egenverdier $\lambda^2 - (\text{spor})\lambda + \det = 0$;
   1. ordens DE $x = Ce^{-at}+b/a$; 2. ordens karakteristisk likning $r^2+br+c=0$
   (tre tilfeller); system-stabilitet (Re $\lambda < 0$ ⇔ spor $<0$, $\det>0$);
   Hesse-klassifisering (pos.def. min / neg.def. maks / indef. sadel); Lagrange
   $\mathcal{L} = f - \lambda(g-c)$, λ = skyggepris; Kuhn–Tucker komplementær slakkhet;
   profittmaks $x^* = (\alpha p/w)^{1/(1-\alpha)}$, nyttemaks $x^* = \gamma m/p_x$.
   **Marker hva som må sitte utenat (kode H) vs. slås opp (kode C).**
6. **Verktøybiblioteket i ord** — standardfigurene/-oppsettene: arealoppdeling der
   kurven skifter fortegn; faseromsdiagram med nullisokliner og retningspiler;
   Hesse-definitthetstabellen; Kuhn–Tucker-beslutningstreet (hvilke betingelser binder).
7. **Kryssreferansekart** (arbeidsdelingen, §7) — hva SØK3004 forutsetter og lenker
   til (SØK1001-nivå: derivasjon, gradient, Hesse, komplekse tall) vs. hva SØK3004
   selv bygger ut (integrasjon, matrise-/egenverditeori, DE, betinget optimering).
8. **Studieløp** — anbefalt progresjon (10-ukers og 3-ukers intensiv): Del 0
   (kart + verktøyoppfriskning) → Del 1 (integrasjon) → Del 2 (lineær algebra) →
   Del 3 (differensiallikninger, bygger på egenverdier) → Del 4 (optimering) →
   Del 5 (anvendelser) → Del 6 (nivå 4), prøver underveis, øvingseksamenene (7.2–7.4)
   de siste ukene under tidspress (300 min). Kode H-kandidater legger inn ekstra
   pugging av formelarket.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `sok3004` med alle 33 kapitler
   (+ 6 prøvekapitler) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra makrostruktur-tabellen
   (§2). Registrer emnet i `src/app/bok/trinn/hoyere/institusjoner.ts` under **NTNU**
   med visningsnavn «SØK3004 Videregående matematisk analyse».
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–N, frekvenstallene, de tre
   regimene, hjelpemiddelkodene og avgrensningen (mot SØK1001) som resten refererer til.
3. **De fire søylene i avhengighetsrekkefølge**: Del 1 (integrasjon) → Del 2 (lineær
   algebra) → Del 3 (differensiallikninger, bygger på egenverdier fra 2.5) → Del 4
   (optimering, bruker Hesse/definitthet fra 2.2/2.5). Én byggeagent per hel del
   (jf. fase 4-batching); Del 2, 3 og 4 er 6 kapitler — kan splittes, men gi da hele
   delens kontrakter til begge agenter og flagg for konsistenssjekk (notasjon
   $\dot x$/$x_{ss}$, egenverdi-stabilitet, Hesse-klassifisering, λ-tolkning).
   Drillkapitlet (1.5 / 2.6 / 3.6 / 4.6) bygges av samme agent som delen.
4. **Del 5** (anvendelser) — gjenbruker uegentlig integral (1.4) og Lagrange/K–T (4.3/4.4).
5. **Del 6** (nivå 4) — kort, gjenbruker lineær algebra (Del 2).
6. **Del 7 til slutt** (tverrgående drill + 3 øvingseksamener gjenbruker alt);
   bygges av én agent som leser hele skjelettet.
7. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert;
   prøvene (§4) i prøvekapitler per del etter byggekontraktens spesifikasjon
   (`sok3004-<del>-prove`, chapterNumber `<del>.P`), Del 1–6.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
      (generer helst via `json.dump`; husk å escape `"`); `npm run build` grønn.
- [ ] **LaTeX**: alle formler i `$...$`/`$$...$$` med dobbel backslash i JSON
      (`\\int`, `\\lambda`, `\\det`, `\\dot`, `\\nabla`, `\\mathcal{L}`); ingen
      unicode-brøker; konsistent $\int u\,dv = uv - \int v\,du$, $\dot x$, $x_{ss}$,
      $r(A)$, $A'$, $\lambda$, $\mathcal{L}$.
- [ ] **Notasjonskonsistens**: tekstsøk over alle sok3004-filer — **påkrevd**:
      $\int f\,dx$, $\dot x = dx/dt$, $x_{ss}$, $\det A$, $r(A)$, $A'$, $\lambda$,
      Kuhn–Tucker med komplementær slakkhet; standardresultatene $x = Ce^{-at}+b/a$,
      $L$-oppsettet, $\det(A-\lambda I)=0$. **Forbudt/uønsket**: å bygge ut
      SØK1001-stoff (elementær derivasjon, funksjonsdrøfting utover
      verktøyoppfriskningen i Del 0) — grep skal vise at derivasjonsrepetisjon kun
      finnes som kort oppfriskning/kryssreferanse, ikke som egne teorikapitler.
- [ ] **Integrasjonskravet**: kap. 1.4, 1.5 og øvingseksamenene deler eksplisitt
      **arealintegralet der kurven skifter fortegn** og sjekker
      **konvergensbetingelsen $g<k$** i uegentlige integraler — grep «arealet» og «konvergens».
- [ ] **Lineær-algebra-kravet**: kap. 2.4, 2.6 og øvingseksamenene **relaterer rang
      til løsbarhet** (entydig/ingen/uendelig + frie variabler), ikke bare regner ut
      $r(A)$/$r(Ab)$ — grep «entydig», «uendelig mange», «frie variabler».
- [ ] **DE-kravet**: kap. 3.1, 3.3, 3.5, 3.6 og øvingseksamenene **konkluderer
      stabilitet eksplisitt** (fortegn på $a$ / røtter / egenverdier / spor+det) og
      har faseromsdiagram med **navngitte nullisokliner** der system opptrer.
- [ ] **Optimeringskravet**: kap. 4.1, 4.3, 4.4, 4.6 og øvingseksamenene har
      **andreordensbetingelse (Hesse/definitthet)**, **Kuhn–Tucker med komplementær
      slakkhet**, og **økonomisk tolkning av λ** der bibetingelse forekommer — grep
      «komplementær slakkhet», «skyggepris»/«tolk», «Hesse».
- [ ] **Begrunn + figur + tolkning**: hvert eksempel/løsningsforslag viser
      mellomregningen, har figurbeskrivelse i ord der figur forventes (areal,
      fasediagram, Hesse), og tolker konklusjonen (stabil/ustabil, maks/min/sadel,
      λ økonomisk).
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra
      dette skjelettet), Forkunnskaper-`text` med lenker + Symbol- og formelliste-
      `collapsible` (per delkapittel — forklarer ALLE symboler brukt), Typiske feil-
      `warning`, 2–4 eksempler (siste på eksamensnivå), 6–12 øvinger med `solution` +
      `hints`, repetisjons-`collapsible`; drillkapitlene (1.5, 2.6, 3.6, 4.6) har
      løsningsoppskrift + sensor-kommentert case + 10–16 oppgaver; øvingseksamenene
      (7.2–7.4) har komplett sett + løsningsforslag i `collapsible` som A-besvarelse.
- [ ] **Quiz-sum ≥ 648 og flashcard-sum ≥ 612** per kvotetabellen (§4 er autoritativ).
- [ ] **Prøver**: 4 per temadel (Del 1–6) = 24 temaprøver + 3 øvingseksamener; settene
      og prøvene dekker samlet sjangrene A–N minst én gang, og begge regimer (B og C).
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, egne kontekster, egne
      formuleringer; ingen formuleringer fra reelle sett eller sensorveiledninger
      (skjelettets mønstereksempler er selv omskrivninger og skal varieres videre,
      ikke kopieres ordrett); standardresultatene ($(D-c)$-analoger, $x=Ce^{-at}+b/a$,
      $\det(A-\lambda I)=0$, K–T-oppsettet) er faglige fakta uten verkshøyde; pensum
      (Sydsæter-familien for matematikken, Varian for mikro-anvendelsene) refereres,
      aldri siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
      (200 + kapittelspesifikk streng), jf. lærdommen om `getChapterMeta`;
      institusjonssiden (NTNU) og bokforsiden (seksjonstitlene fra §2) sjekkes.

---

## 7. Arbeidsdeling mot bygde/skjelett-bøker

SØK3004 er et **selvstendig regnefag** (fire søyler, bygges fullt ut i egen bok),
men det ligger i et tett nett av matematikk-for-økonomer- og ren-matematikk-bøker.
Denne tabellen styrer hva SØK3004 bygger ut selv vs. hva den forutsetter/lenker til.

| Tema | Bygges ut i | SØK3004 sin rolle |
|---|---|---|
| Elementær derivasjon, funksjonslære, gradient, Hesse, enkel optimering | **SØK1001** (forkunnskap; ikke egen bok her) | **Forutsettes** — kort verktøyoppfriskning i Del 0; lenk til beslektet innføringsmatte (`econ1100` UiO) der forkunnskapen trengs |
| Integrasjon, matrise-/egenverditeori, DE, betinget optimering (Lagrange/Kuhn–Tucker) | **SØK3004** (denne boka) | **BYGGES UT** — de fire søylene + anvendelser |
| Samme matematiske pensum for økonomer (UiO-parallell) | **ECON3120/4120 Mathematics 2** (`econ3120`, skjelett) | **Tvillingemne** — samme fire tema; econ3120 legger mer vekt på implisitt/omvendt funksjonsteorem og **bevis**, SØK3004 mer på **regnedrill + integrasjon + konkrete økonomiske innpakninger**. Ingen gjenbruk av filer; koordiner notasjon og innhold, ikke innfør motstridende konvensjoner. *(verifiser status på econ3120-bygging før evt. kryssbok-lenker)* |
| Innføringsmatte for økonomer (forkunnskapsnivået, SØK1001-siden) | **ECON1100 Matematikk I** (`econ1100`, skjelett) | Nærmeste innføringsnivå; lenk hit for derivasjons-/funksjonsrepetisjon der SØK3004 forutsetter det og boka ikke dekker det |
| Ren kalkulus / lineær algebra (matematikkinstituttene) | **MAT1110 Kalkulus og lineær algebra**, **MAT1120 Lineær algebra** (`mat1110`/`mat1120`, skjelett) | Beslektet ren-matematikk; SØK3004 er økonom-vinklet (regnedrill + anvendelser, ikke bevisteori) og bygger sin egen lineær algebra i Del 2 — lenk kun ved behov for dypere lineær-algebra-teori |
| Mikroøkonomisk modellapparat (marked/spill/markedssvikt; konsument-/produsentteori med Lagrange) | **SOK1011 Markeder og markedssvikt**, **SOK1002 Mikroøkonomi** (NTNU, skjelett) | **Ingen overlapp** — disse er mikro-**modell**fag; SØK3004 er ren matematikk. Møtepunktet er kun at SØK3004s optimering (Del 4–5) leverer det *matematiske* apparatet (Lagrange, K–T, Cobb–Douglas-optimering) som mikrofagene *bruker*. SØK3004 låner mikro-innpakningene (profittmaks, nyttemaks) som **kontekst for matematikken**, ikke som modellteori |

**Konklusjon:** SØK3004 bygges som en **komplett, selvstendig fire-søyle-matematikkbok**
(ingen deler outsources til andre bøker). Den forutsetter SØK1001-nivå (repeteres kun
i Del 0), er **matematisk tvilling** til econ3120/4120 (samme tema, ulik vektlegging
— koordiner, ikke kopier), og leverer det matematiske apparatet SOK1002/SOK1011/andre
mikro-/makrofag *bruker*. Der forkunnskap trengs og ikke dekkes, brukes markdown-
kryssbok-lenker (`[tittel](/bok/<courseId>/<chapterId>)`) **kun til kapitler som
faktisk finnes** ved byggetidspunktet — verifiser før innsetting.

---

> **Merknad om verifiserte referanser:** Alle modellresultater, notasjon og
> frekvenser er hentet fra `EKSAMENSANALYSE.md`. Standardresultatene
> ($\int u\,dv = uv - \int v\,du$, $x = Ce^{-at}+b/a$, $\det(A-\lambda I)=0$,
> Hesse-klassifiseringen, Kuhn–Tucker med komplementær slakkhet, $x^* = \gamma m/p_x$)
> er faglige fakta uten verkshøyde. **Pensum-referansene** (Sydsæter-familien
> *Further/Essential Mathematics for Economic Analysis* + *Matematisk formelsamling
> for økonomer* for matematikken; **Varian, *Microeconomic Analysis*, kap. 3** for
> konveksitet av profittfunksjonen) er *(verifiser)* mot gjeldende emnebeskrivelse
> før eksakte kapittelankere skrives inn — analysen fastslår forfatter/verk sikkert
> (fra V2021-sensorveiledningen), men ikke nødvendigvis eksakt utgave/kapittelnummer.
> Hjelpemiddelkoden (H vs. C) varierer per semester og bør sjekkes mot det
> aktuelle semesterets eksamensoppslag. At regime C (2025) premierer selvstendig
> resonnement der «boka slutter» er dokumentert i analysens §1/§4.

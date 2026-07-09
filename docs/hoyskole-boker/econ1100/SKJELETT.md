# Bokskjelett: ECON1100 Matematikk I (for økonomer) — eksamensrettet lærebok

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
> `EKSAMENSANALYSE.md` (9 ordinære sett V2018 + H2018–H2025 og 7 utsatte sett, til
> sammen **16 eksamenssett med offisielle sensorveiledninger** fra Økonomisk
> institutt, UiO). Arketype: **DNA-regnefag** (`DNA-regnefag.md`) —
> kapittel-DNA-ene der (teori/drill/øvingseksamen) er obligatoriske og gjentas
> ikke her. Alle mønstereksempler i skjelettet er omskrivninger; forfatteren skal
> variere dem videre (nye tall, ny innramming), aldri kopiere inn ordrett.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `econ1100` |
| Tittel | **ECON1100 Matematikk I** |
| Level | `'Høyskole'` |
| Institusjon | Universitetet i Oslo (Økonomisk institutt) |
| Arketype | Regnefag (matematisk verktøyfag med fast oppgavemal) |
| Antall kapitler | **38** (1 eksamenskart + 33 tema/drill + 4 eksamenstrening) + 10 prøvekapitler |
| Estimert totaltid | **≈ 1 890 min ≈ 31,5 timer** (uten prøver) |
| Quiz totalt | **541** (krav ≥500) |
| Flashcards totalt | **504** (krav ≥500) |

**Pitch (ett avsnitt):** ECON1100-eksamen har fulgt samme mal siden 2020: tre timer,
fem oppgaver, 100 poeng likt fordelt per delpunkt — og en dramaturgi så forutsigbar
at boka kan bygges rett mot den. **Oppgave 1 er alltid partiellderivasjon** av tre–fire
funksjoner (100 % av settene). **Oppgave 2 er alltid «Sant eller usant? Begrunn.»** — en
sekkeoppgave der de fleste småtemaene roterer inn, og der *begrunnelsen er hele poenget*
(ubegrunnet ja/nei gir 0 selv med riktig konklusjon). **Oppgave 3–5 er storoppgaver** fra
en fast meny: betinget optimering med Lagrange (81 %), endimensjonal funksjonsdrøfting
(alle seks ordinære sett 2020–2025), nivåkurve/implisitt derivasjon (75 %), fri
tovariabel-optimering med Hesse (63 %), og produsentteori (tungt på utsatt-settene).
Denne boka mekaniserer de to første oppgavene til et solid poenggulv, driller Lagrange og
funksjonsdrøfting til de sitter, og — viktigst — trener studenten på fagets tre strengeste
fallgruver, som er selve karakterskillet: hjørneløsninger via definisjonsområde (ikke
tallsjekk), minimum av $x^4$ via global konveksitet (ikke $f''(0)=0$), og klassifisering
under bibetingelse ved å sammenligne funksjonsverdier (andreordensbetingelse under
bibetingelse er *ikke pensum*). Faget er *matematikk for økonomer* — verktøykassen
ECON1210 og resten av studiet henter fra — så teknikken vises gjennomgående der den brukes:
nyttemaksimering, kostnadsminimering, elastisitet, marginalanalyse.

**Kritisk faglig avgrensning (gjelder HELE boka).** Følgende har **0 forekomster** i alle
16 sett og skal IKKE bygges ut — kun nevnes med én setning i Del 0 slik at studenten vet
at fraværet er trygt: **lineær algebra / matriser / determinanter**, **differensiallikninger**,
**integrasjonsteknikker** (substitusjon, delvis integrasjon, delbrøk), **Taylorpolynom /
rekkeutvikling**, **komplekse tall**. Integrasjon opptrer kun som *elementære antideriverte
og bestemte integraler* (Del 10). Dette skiller ECON1100 skarpt fra MAT1100 Kalkulus —
ikke lån struktur eller notasjon derfra.

**Kritisk notasjonsregel (gjelder HELE boka).** Bruk eksamenssettenes notasjon, ikke
lærebok-alternativer:
- Partiellderiverte: $f'_x$, $f'_y$, $f''_{xx}$, $f''_{yy}$, $f''_{xy}$ (kryssderivert); $\partial/\partial x$-notasjon likestilt og introdusert parallelt.
- Elastisitet: $\mathrm{El}_x f$ (ikke $E_x$ eller $\varepsilon$-varianter uten indeks); definisjon $\mathrm{El}_x f = \frac{x}{f}\,f'(x)$.
- Lagrange: $L$ for Lagrange-funksjonen, $\lambda$ for multiplikatoren; optimale verdier $x^*$, $y^*$; bibetingelse $p_1 x + p_2 y = m$ (budsjett) eller $F(K,L)=\bar Y$ (produksjon).
- Førsteordensbetingelser nummereres «FOB (1), FOB (2), …»; tangeringsbetingelsen tolkes alltid som «MRS = prisforhold».
- Hesse-determinant: $D = f''_{xx}\,f''_{yy} - (f''_{xy})^2$.
- Nivåkurvens helning: $y'(x) = -\,F'_x/F'_y$.

**Kritisk sjangerregel (gjelder HELE boka).** «Begrunnelse er alt.» Der en oppgave ber om
begrunnelse (og det gjør sant/usant-oppgaven alltid), skal ALLE eksempler og
løsningsforslag i boka vise *utregningen/argumentet*, aldri bare konklusjonen — fordi
sensor gir 0 for ubegrunnet ja/nei. Videre: **følgefeil straffes ikke** (bygg videre på
eget mellomresultat), men **åpenbar forenkling kreves for full uttelling**, og **metoden
bærer poengene, ikke svaret**. Alle løsningsforslag skrives som en A-besvarelse med disse
prinsippene synlige.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen: prerequisites, ikke frekvens);
frekvensen styrer *omfanget*. `sectionNames` = den beskrivende tittelen per del.

| Del | Seksjonstittel (`sectionNames`) | Kap. | Prioritet | Begrunnelse (frekvens → omfang) |
|---|---|---|---|---|
| 0 | Eksamenskart | 1 | — | Prioriteringsverktøyet; kjerne i studieguiden. Rammer inn fraværsbildet. |
| 1 | Derivasjon og partiellderivasjon | 6 | **PERFEKT** | Oppg. 1 = partiellderivasjon i **100 %** av settene, alltid åpningsoppgaven (15–25 p, billige poeng). Hele metoderepertoaret + eget drillkapittel. |
| 2 | Elastisitet | 2 | KUNNE | Elastisitet 69 %, ofte innvevd i Lagrange/produsent; kjerneregelen for elastisiteter er toppsjikt-differensiator. |
| 3 | Differensial og lineær approksimasjon | 2 | **PERFEKT** | 89 % av ordinære sett; fast sant/usant-punkt; alle ledd med, korrekt fortegn på feilestimatet. |
| 4 | Endimensjonal funksjonsdrøfting | 5 | **PERFEKT** | Den moderne signaturoppgaven: **6/6 ordinære sett 2020–2025**. Rommer to av de tre store fallgruvene (hjørneløsning, $x^4$/vendepunkt). Teori + drill. |
| 5 | Nivåkurver og implisitt derivasjon | 2 | **PERFEKT** | 75 % (9/9 ordinære); helning $-F'_x/F'_y$, konveksitet via $y''$. Direkte bro til indifferenskurver/isokvanter. |
| 6 | Fri optimering i to variabler | 2 | KUNNE | 63 %; Hesse-determinanten, lokalt vs. globalt. |
| 7 | Homogenitet og skalautbytte | 2 | KUNNE | 56 %; grad $k$, doblingstolkning, Eulers teorem (bevis-lett). |
| 8 | Betinget optimering — Lagrange | 5 | **PERFEKT** | Den tyngste tilbakevendende storoppgaven (81 %, 20–36 p). Full oppskrift + omhyllingsteorem + $n$-variabel/symmetri + klassifisering ved funksjonsverdi. Teori + drill. |
| 9 | Produsentteori | 3 | KUNNE (vektet opp) | 50 % ordinært, men **5/7 utsatte** — utsatt-profilen er produsentorientert. Cobb-Douglas/CES kostnadsmin, substitusjonselastisitet, komparativ statikk. |
| 10 | Beredskap: invers, integrasjon, serier | 3 | KJENNE | Hver 31 %, mest som sant/usant-punkt. Kompakte kjenne-kapitler. |
| 11 | Eksamenstrening | 4 | — | Sant/usant-stordrillen (den viktigste enkeltoppgaven) + 3 komplette øvingseksamener etter 5-oppgavemalen. |

**Avvik fra DNA-malen (dokumentert):**
1. **Drillkapitlene ligger inne i temadelene sine**, ikke samlet i siste del (DNA legger
   sjangerkapitler i eksamenstreningsdelen). Kap. 1.6 (partiellderivasjon), 4.5
   (funksjonsdrøfting) og 8.5 (Lagrange) driller 75–100 %-gjengangersjangre som må
   automatiseres umiddelbart etter teorien. Del 11 beholder den ene *kryssgående* drillen —
   sant/usant — fordi den trekker på ALLE temaene og derfor må komme sist, pluss
   øvingseksamenene.
2. **Boka er i øvre ende av DNA-ens omfangsintervall (38 kapitler mot «20–35»).** Grunnen
   er strukturell: den faste dramaturgien kobler mange *distinkte* nivå-1-verktøy til hver
   sin oppgave (partiellderivasjon, funksjonsdrøfting, nivåkurve, Lagrange er alle
   «perfekt»), og de tre strenge fallgruvene fortjener eget behandlingsrom. Frekvensvekting
   er ivaretatt: de fire PERFEKT-delene (1, 4, 8 + 3/5) rommer 20 av 33 temakapitler.
3. **Utsatt-vekting:** produsentteori (Del 9) og CES/substitusjonselastisitet er vektet
   tyngre enn den ordinære frekvensen (50 %) alene skulle tilsi, fordi 5/7 utsatte sett er
   produsentorienterte og en kandidat forbereder seg mot begge settyper. Øvingseksamen 3
   (kap. 11.4) er derfor en ren utsatt-profil.

**Sjangerkoder** (brukt i «Oppgavesjangre» under; introduseres i Del 0 som studentens
sjekkliste):
`P1` partiellderivasjon (Oppg. 1) · `SU` sant/usant med begrunnelse (Oppg. 2) ·
`LG` Lagrange/betinget optimering · `FD` endimensjonal funksjonsdrøfting ·
`NK` nivåkurve/implisitt derivasjon · `HD` fri tovariabel-optimering + Hesse ·
`PR` produsentteori (profittmaks/kostnadsmin) · `DA` differensial/lineær approksimasjon ·
`EL` elastisitet · `HG` homogenitet/skalautbytte/Euler · `OM` omhyllingsteoremet ·
`HR` hjørne-/randløsninger · `IN` inverse funksjoner · `IT` elementær integrasjon ·
`SR` serier/geometriske summer.

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Prioritetsklasser: **PERFEKT** (nivå 1) /
**KUNNE** (nivå 2) / **KJENNE** (nivå 3). Kryssbok-lenker peker på R1/R2/S2-matte som
finnes i systemet (verifisert). Symbol- og formelliste-blokk (per delkapittel) og de
øvrige obligatoriske kapittel-DNA-blokkene spesifiseres i BYGGEKONTRAKT — her angis
innholdet de skal dekke.

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet: slik testes ECON1100

- **id:** `econ1100-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen
- **Kapitteltype:** eksamenskart
- **description:** Eksamensformen, den faste 5-oppgavers dramaturgien, temafrekvensene, fraværsbildet og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på alle 16 sett. Skal gjengi: (i) **formen**: én skriftlig skoleeksamen, 3 timer, 100 poeng, 4–6 oppgaver (typisk 5), poeng likt fordelt mellom deloppgavene; karakter A–F; to av tre obliger må være godkjent for adgang; ingen midtveiseksamen. (ii) **Den faste dramaturgien (H2020–H2025)**: Oppg. 1 partiellderivasjon (15–25 p), Oppg. 2 «sant/usant? begrunn» (15–30 p, sekkeoppgave), Oppg. 3–5 to–tre storoppgaver fra en fast meny (Lagrange, funksjonsdrøfting, nivåkurve, fri optimering, produsentteori). Nevn kort formatbruddet: V2018 var integrasjonstungt og ba om andrederiverte i Oppg. 1 — de eldste settene er minst representative; boka er kalibrert mot H2021–H2025. (iii) **Temafrekvens-tabellen** (andel av 16 sett): partiellderivasjon 100 %, sant/usant 100 %, Lagrange 81 %, nivåkurve/implisitt 75 %, elastisitet 69 %, differensial/lineær approksimasjon 69 % (89 % av ordinære), fri tovariabel + Hesse 63 %, homogenitet 56 %, endimensjonal drøfting 50 % (men 6/6 ordinære 2020–25), produsentteori 50 % (5/7 utsatte), inverse funksjoner / integrasjon / serier / omhyllingsteorem / hjørneløsning hver 31 %. (iv) **Fraværsbildet** — én setning: lineær algebra/matriser, differensiallikninger, integrasjonsteknikker, Taylor og komplekse tall forekommer *aldri* (0/16); studenten kan trygt la dem ligge. (v) **Sensorens seks metaregler** (gjentas nesten ordrett i alle 16 sett): forståelse/fremgangsmåte foran svar; små regnefeil gir lite trekk; ingen trekk for følgefeil (bygg videre på eget mellomresultat, unntak: feil som gjør resten vesentlig lettere); **ber oppgaven om begrunnelse må utregning vises — ren ja/nei gir 0**; åpenbar forenkling for full uttelling (flere ekvivalente former godtas); poeng likt fordelt. (vi) **Karakterskillene**: bestått henter poeng på de mekaniske delpunktene (partiellderivasjon, Lagrange-oppsett med FOB, differensial korrekt satt inn, enkel drøfting); midtsjiktet fullfører Lagrange (eliminér $\lambda$, løs for etterspørsel), Hesse-klassifisering, nivåkurve med konveksitet, homogenitetsgrad; toppsjiktet mestrer de tre strenge fallgruvene (hjørneløsningsargument, $x^4$/$f''=0$-fellen, stasjonær vs. ekstrempunkt), definisjonsområde-håndtering, omhyllingsteoremet, symmetri og de bevis-lette oppgavene.
- **Innholdskontrakt:** Sjangerkatalogen `P1, SU, LG, FD, NK, HD, PR, DA, EL, HG, OM, HR, IN, IT, SR` presenteres som studentens sjekkliste med typisk plassering og vekt (P1 = Oppg. 1; SU = Oppg. 2; LG/FD/NK/HD/PR = storoppgavene; DA/EL/HG/OM/IN/IT/SR roterer inn i SU eller innvevd i storoppgaver). Prognosen for neste ordinære eksamen (fra H2021–H2025-malen): Oppg. 1 tre–fire partiellderiverte (minst én med kjerneregel/logaritmisk derivasjon, minst én med generell funksjon); Oppg. 2 fire–fem sant/usant (svært sannsynlig én lineær approksimasjon, én homogenitet eller invers, ett integral eller vendepunkt/$x^4$-felle); Oppg. 3–5 én Lagrange (nyttemaks eller kostnadsmin, evt. med omhyllingsteorem), én endimensjonal drøfting, og én av {fri tovariabel Hesse, nivåkurve/implisitt, produsentteori}. Merk utsatt-profilen: tyngre på produsentteori, CES, substitusjonselastisitet og komparativ statikk. Avslutt med **leseplan**: Del 1, 3, 4, 5, 8 er «må perfekt»; Del 2, 6, 7, 9 «må kunne»; Del 10 «bør kjenne»; Del 11 er tidsstyrt sluttrening.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt 5 oppgaver, 100 poeng likt fordelt per delpunkt og 180 minutter — sett opp et tidsbudsjett når Oppg. 2 har 5 delpunkter og Oppg. 3 har 3».
- **Typiske feil:** Metafeilene: svare ubegrunnet på sant/usant (fagets dyreste enkeltfeil); bruke tid på temaer som ikke testes (matriser, Taylor); nedprioritere Oppg. 1 og 2 (som til sammen bærer ~35–45 % av poengene) til fordel for én tung storoppgave.
- **Quiz: 12 · Flashcards: 12** (form, dramaturgi, frekvenser, metaregler, fraværsbilde)

**Prøve-kvote Del 0:** ingen (metadel).

---

### Del 1 — Derivasjon og partiellderivasjon *(prioritet: PERFEKT — bærer Oppgave 1)*

#### Kapittel 1.1: Derivasjonsverktøyet på nytt: potens, produkt, kvotient, kjerne

- **id:** `econ1100-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen
- **Kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Bygger på [Derivasjonsregler](/bok/r1/r1-4-1), [Produktregelen og kvotientregelen](/bok/r1/r1-4-4), [Kjerneregelen](/bok/r1/r1-4-3) og [Derivasjon av eksponential- og logaritmefunksjoner](/bok/r1/r1-4-2) fra R1. Dette kapitlet er en rask, eksamensrettet oppfriskning — ingen R1-forkunnskap forutsettes uforklart.
- **description:** Hele det endimensjonale derivasjonsapparatet eksamen forutsetter, samlet og drillet på fart og fortegnssikkerhet.
- **Eksamensbelegg:** Fundamentet under Oppg. 1 (100 %). Sensor gir lite trekk for små regnefeil, men de algebra-tunge oppgavene (kvotienter, CES-uttrykk) er der flest poeng tapes på fortegn (typisk feil #12). Prioritet: **PERFEKT**.
- **Innholdskontrakt:** Potens-, sum-, produkt-, kvotient- og kjerneregel med emnets typiske funksjoner: rot ($\sqrt{x}\to \frac{1}{2\sqrt{x}}$), negative eksponenter ($x^{-2}\to -2x^{-3}$), reelle eksponenter; derivasjon av $\ln x$, $e^x$, $a^x = a^x\ln a$; kjerneregelen på $e^{g(x)}$, $\ln(g(x))$, $(g(x))^n$. Kvotientregelen på økonomitypiske brøker som $x^2/(x+y)$ (som forberedelse til partiellderivasjon). Fokus på **fart og fortegnssikkerhet**, ikke bevis. Merk skillet: dette er ren regneteknikk som bare skal *brukes* raskt.
- **Oppgavesjangre:** P1-fundament. Mønstereksempel: «Deriver $f(x)=\dfrac{3x^2-1}{\sqrt{x}}$ og $g(x)=e^{2x}\ln(x^2+1)$.»
- **Typiske feil:** Fortegnsfeil i kvotientregelen (feil rekkefølge i telleren); glemme kjerneregelen på $e^{g(x)}$/$\ln(g(x))$; regne $\sqrt{x}$-derivert feil; slurve med reelle eksponenter.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 1.2: Partiellderiverte: første og andre orden

- **id:** `econ1100-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ1100-1-1`
- **Kapitteltype:** teori
- **description:** Å derivere med hensyn på én variabel om gangen — kjernehandlingen i Oppgave 1 — samt andreordens og kryssderiverte.
- **Eksamensbelegg:** Selve kjernen i Oppg. 1 (100 %): «deriver mht. alle argumenter». Andrederiverte eksplisitt bedt om kun i gammelt format (V2018, H2018 — 3/16), men $f''_{xx}$, $f''_{yy}$, $f''_{xy}$ er nødvendige i Hesse (Del 6) og krumningsanalyse — derfor pensum her. Kryssderiverte likhet ($f''_{xy}=f''_{yx}$) er et fast sant/usant-relevant faktum. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** Definisjonen av partiellderivert: behandl de andre variablene som konstanter. Notasjon $f'_x$, $f'_y$ **og** $\partial f/\partial x$ likestilt (sensor bruker begge). Systematisk gjennomgang på emnets funksjonsformer: polynomer i to variabler ($x^2y+x^2+2y^2$), kvotienter ($x^2/(x+y)$ mht. både $x$ og $y$), $\ln$- og $e$-uttrykk, Cobb-Douglas $x^\alpha y^\beta$. Andreordens partiellderiverte $f''_{xx}$, $f''_{yy}$ og **kryssderivert** $f''_{xy}$; Youngs teorem ($f''_{xy}=f''_{yx}$ for pene funksjoner) som fast faktum. Tolkning: $f'_x$ = grenseendring i $f$ når $x$ øker litt (grensenytte/grenseprodukt — broen til økonomi).
- **Oppgavesjangre:** P1. Mønstereksempel: «Gitt $f(x,y)=\dfrac{x^2}{x+y}+y\ln x$. Finn $f'_x$, $f'_y$ og $f''_{xy}$.»
- **Typiske feil:** Behandle den andre variabelen som variabel (ikke konstant); glemme kjerneregelen inne i $\ln$/$e$-ledd; fortegnsfeil i kryssderiverte; anta $f''_{xy}\ne f''_{yx}$.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 1.3: Kjerneregelen for flere variabler (totalderivert)

- **id:** `econ1100-1-3` · **number:** 1.3 · **estimatedMinutes:** 45 · **prerequisites:** `econ1100-1-2`
- **Kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Bygger på [Sammensatte funksjoner](/bok/r1/r1-2-3) og [Kjerneregelen](/bok/r1/r1-4-3) fra R1.
- **description:** Når de indre variablene selv er funksjoner: kjerneregelen som sum av bidrag, og totalderiverten.
- **Eksamensbelegg:** Fast innslag i Oppg. 1 (f.eks. $G(s,t)=2xy$ med $x=t-s$, $y=t+s$; H2020 O1f). **Sensor-signal:** man må **sette tilbake for de indre variablene** i sluttsvaret — ellers lite trekk (typisk feil #5). Prioritet: **PERFEKT**.
- **Innholdskontrakt:** Kjerneregelen for flere kjerner: for $G(x,y)$ med $x=x(s,t)$, $y=y(s,t)$ er $\partial G/\partial s = (\partial G/\partial x)(\partial x/\partial s)+(\partial G/\partial y)(\partial y/\partial s)$. Totalderiverten $df/dx = f'_x + f'_y\,y'(x)$ når $y=y(x)$ (broen til implisitt derivasjon, Del 5). Vis steg for steg med intuisjon: hver vei fra ytre til indre variabel gir ett bidrag; summer bidragene. **Alltid substituere tilbake** til de opprinnelige variablene i sluttsvaret.
- **Oppgavesjangre:** P1. Mønstereksempel: «$G(s,t)=x^2-y^2$ der $x=s+2t$ og $y=2s-t$. Finn $\partial G/\partial s$ og $\partial G/\partial t$, uttrykt i $s$ og $t$.»
- **Typiske feil:** Glemme ett av bidragene i summen; **ikke substituere tilbake** for indre variabler (#5); blande hvilken indre variabel som deriveres mot hvilken ytre.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 1.4: Logaritmisk derivasjon

- **id:** `econ1100-1-4` · **number:** 1.4 · **estimatedMinutes:** 40 · **prerequisites:** `econ1100-1-2`
- **Kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Bygger på [Potenser og logaritmer](/bok/r1/r1-1-2) og [Eksponential- og logaritmeligninger](/bok/r1/r1-1-3) fra R1.
- **description:** Sensors forventede metode for $x^x$-typer: ta $\ln$, deriver, gang opp igjen.
- **Eksamensbelegg:** Tilbakevendende «signal» i Oppg. 1 (H2019, H2021 O4, H2022 O4b): $x^x$, $(xy)^{xy}$, $x^{a(x)}$. Logaritmisk derivasjon er **sensors forventede vei** — andre metoder gir mindre uttelling. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** Oppskriften: for $y=f(x)^{g(x)}$, ta $\ln$ på begge sider ($\ln y = g(x)\ln f(x)$), deriver implisitt ($y'/y = \dots$), gang opp med $y=f(x)^{g(x)}$. Gjennomgått på $x^x$ ($y'=x^x(\ln x + 1)$), $x^{a(x)}$ (med generell $a(x)$), og todimensjonal variant $(xy)^{xy}$ (partiell). Vis hvorfor vanlig potensregel *ikke* virker (eksponenten er ikke konstant) og hvorfor eksponentialregelen alene heller ikke (grunntallet er ikke konstant).
- **Oppgavesjangre:** P1. Mønstereksempel: «Bruk logaritmisk derivasjon til å finne $\frac{d}{dx}\,x^{\sqrt{x}}$.»
- **Typiske feil:** Bruke ren potensregel eller ren eksponentialregel; glemme å gange opp med funksjonen til slutt; regnefeil i den implisitte derivasjonen av $\ln y$.
- **Quiz: 18 · Flashcards: 14**

#### Kapittel 1.5: Derivasjon av generelle og ukjente funksjoner

- **id:** `econ1100-1-5` · **number:** 1.5 · **estimatedMinutes:** 35 · **prerequisites:** `econ1100-1-3`
- **Kapitteltype:** teori
- **description:** Å derivere symbolsk når funksjonsformen ikke er oppgitt — $k(p)$, $b(x,y)$, $g(u)$ beholdes som $k'(p)$ osv.
- **Eksamensbelegg:** Nesten årvisst punkt i Oppg. 1 (generelle funksjoner $k(p)$, $b(x,y)$, $g(u)$, $m(y)$). Tester *forståelse* av derivasjonsreglene løsrevet fra konkret regning. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** Behandle en ukjent funksjon som en hvilken som helst deriverbar funksjon: produkt-, kvotient- og kjerneregel med symbolske deriverte. Eksempler: $\frac{d}{dx}[x\,k(x)]=k(x)+x\,k'(x)$; $\frac{d}{dx}\,g(u(x))=g'(u)\,u'(x)$; partiellderivert av $b(x,y)\cdot h(y)$ mht. $y$. Poeng: svaret *skal* inneholde $k'$, $g'$ osv. — det er ikke «uferdig». Broen til komparativ statikk (Del 9) og til de bevis-lette oppgavene.
- **Oppgavesjangre:** P1. Mønstereksempel: «$H(x)=x^2 g(x) - \dfrac{k(x)}{x}$ der $g$ og $k$ er deriverbare. Finn $H'(x)$.»
- **Typiske feil:** «Sette inn tall» eller anta en konkret form; glemme kjerneregelen på sammensetning av generelle funksjoner; behandle $k'(x)$ som en konstant i videre derivasjon.
- **Quiz: 15 · Flashcards: 12**

#### Kapittel 1.6: Drill: Oppgave 1 — partiellderivasjonspakken

- **id:** `econ1100-1-6` · **number:** 1.6 · **estimatedMinutes:** 80 · **prerequisites:** `econ1100-1-4`, `econ1100-1-5`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på hele Oppgave 1: tre–fire funksjoner blandet fra alle metodene, mot fart og fortegnssikkerhet.
- **Eksamensbelegg:** Dekker P1 (100 %) i full bredde: potens/produkt/kvotient/kjerne, logaritmisk derivasjon, multivariabel kjerneregel, generelle funksjoner. Dette er de billigste og sikreste poengene i hele eksamen — de skal mekaniseres. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** **Løsningsoppskrift** for Oppg. 1: 1) identifiser hvilken regel hver funksjon krever (er eksponenten variabel → log.derivasjon; er de indre variablene funksjoner → multivariabel kjerneregel; er formen ukjent → symbolsk); 2) deriver mht. hvert argument; 3) substituer tilbake for indre variabler; 4) **forenkle åpenbart** (sensorkrav). **Gjennomregnet eksamenscase** med sensor-margnotater (hva gir uttelling: rett metode valgt, tilbakesubstitusjon gjort, forenklet). **10–15 oppgaver** som roterer alle fem funksjonstypene med nyskrevne uttrykk og pene svar; minst to med logaritmisk derivasjon, to med multivariabel kjerneregel, to med generelle funksjoner.
- **Oppgavesjangre:** P1. Mønstereksempel (full Oppg. 1): «Deriver mht. angitte variabler: (a) $f(x,y)=\dfrac{xy}{x^2+1}$; (b) $g(x)=(2x)^{2x}$; (c) $G(s,t)=x-y^2$ med $x=st$, $y=s-t$; (d) $h(p)=p\,k(p)+\ln k(p)$, $k$ deriverbar.»
- **Typiske feil:** Hele §5-repertoaret for åpningen: fortegn i kvotient (#12), glemt tilbakesubstitusjon (#5), feil metode på $x^x$-typer, uforenklet svar (koster full uttelling), behandle $k'$ som konstant.
- **Quiz: 12 · Flashcards: 8**

**Prøve-kvote Del 1:** 4 prøver (1.A blandet potens/produkt/kvotient/kjerne, sjanger P1; 1.B partiellderiverte inkl. andreordens og kryssderivert, P1; 1.C logaritmisk + multivariabel kjerneregel, P1; 1.D full Oppgave 1 på eksamensnivå med generell funksjon, P1).

---

### Del 2 — Elastisitet *(prioritet: KUNNE)*

#### Kapittel 2.1: Elastisitet: definisjon, potensregel og regneregler

- **id:** `econ1100-2-1` · **number:** 2.1 · **estimatedMinutes:** 50 · **prerequisites:** `econ1100-1-1`
- **Kapitteltype:** teori
- **description:** Elastisitet som relativ følsomhet — definisjonen, potensregelen og de multiplikative regnereglene.
- **Eksamensbelegg:** Elastisitet i 11/16 sett (69 %), ofte innvevd i Lagrange/produsent-oppgaver eller som sant/usant-punkt (H2020 O2a; H2023-utsatt O2b bruker $\mathrm{El}(f/g)=\mathrm{El}\,f-\mathrm{El}\,g$). Prioritet: **KUNNE**.
- **Innholdskontrakt:** Definisjon $\mathrm{El}_x f = \frac{x}{f}\,f'(x)$ med tolkning: prosentvis endring i $f$ per prosents endring i $x$. **Potensregelen**: for $f=Cx^a$ er $\mathrm{El}_x f = a$ (les av eksponenten; multiplikative konstanter forsvinner). Regneregler: $\mathrm{El}(f\cdot g)=\mathrm{El}\,f+\mathrm{El}\,g$, $\mathrm{El}(f/g)=\mathrm{El}\,f-\mathrm{El}\,g$. Standardresultater fra økonomi (broen til Del 8/9): Cobb-Douglas-etterspørsel gir priselastisitet $\mathrm{El}_{p_1}x=-1$ og inntektselastisitet $\mathrm{El}_m x=1$; partiell produksjonselastisitet av Cobb-Douglas $\mathrm{El}_K Q=\alpha$.
- **Oppgavesjangre:** EL (ofte som SU-punkt). Mønstereksempel: «La $f(x)=5x^3(x+2)$. Finn $\mathrm{El}_x f$ ved hjelp av regnereglene, uten å derivere hele produktet.»
- **Typiske feil:** Glemme faktoren $x/f$ (regne bare $f'$); ta med multiplikative konstanter i potensregelen; feil fortegn i kvotientregelen for elastisiteter.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 2.2: Kjerneregelen for elastisiteter (bevis-lett)

- **id:** `econ1100-2-2` · **number:** 2.2 · **estimatedMinutes:** 40 · **prerequisites:** `econ1100-2-1`
- **Kapitteltype:** teori
- **description:** $\mathrm{El}_x f = \mathrm{El}_u g \cdot \mathrm{El}_x u$ — en av de få bevis-lette oppgavene, og en toppsjikt-differensiator.
- **Eksamensbelegg:** Kjerneregelen for elastisiteter bevises/brukes (H2022 O4c). Sensor omtaler slike bevis-lette oppgaver som «forholdsvis vanskelige» fordi studentene har lite bevistrening — de skiller toppsjiktet. Prioritet: **KUNNE** (toppsjikt-markør).
- **Innholdskontrakt:** Kjerneregelen $\mathrm{El}_x f = \mathrm{El}_u g\cdot \mathrm{El}_x u$ for $f(x)=g(u(x))$, **utledet** fra definisjonen (vis steg for steg: sett inn definisjonen, bruk vanlig kjerneregel $f'=g'u'$, rydd). Dette er en av utledningene eksamen krever *aktivt*. Anvendelse på sammensatte økonomiske uttrykk. Kort kobling til Euler-relasjonen (Del 7) som en annen bevis-lett klassiker.
- **Oppgavesjangre:** EL + bevis-lett. Mønstereksempel: «Vis at $\mathrm{El}_x f = \mathrm{El}_u g\cdot \mathrm{El}_x u$ når $f(x)=g(u(x))$, og bruk resultatet på $f(x)=\ln(x^3)$.»
- **Typiske feil:** Hoppe over utledningen (oppgaven ber om bevis — ubegrunnet svar gir lite); blande $\mathrm{El}_u g$ og $\mathrm{El}_x g$; regnefeil når $u$ substitueres tilbake.
- **Quiz: 14 · Flashcards: 12**

**Prøve-kvote Del 2:** 4 prøver (2.A definisjon + potensregel, sjanger EL; 2.B regnereglene på produkter/kvotienter, EL; 2.C kjerneregel for elastisiteter med bevis, EL/bevis-lett; 2.D elastisitet innvevd i et lite optimeringsproblem på eksamensnivå, EL).

---

### Del 3 — Differensial og lineær approksimasjon *(prioritet: PERFEKT)*

#### Kapittel 3.1: Differensialet

- **id:** `econ1100-3-1` · **number:** 3.1 · **estimatedMinutes:** 40 · **prerequisites:** `econ1100-1-2`
- **Kapitteltype:** teori
- **description:** $df = f'_x\,dx + f'_y\,dy$ — den lille tilnærmede endringen, med begge ledd med.
- **Eksamensbelegg:** Fast sant/usant-punkt (H2019 O4a; H2025-utsatt O2a): påstander som **utelater ett ledd** er usanne. En billig, mekanisk poengfangst når begge ledd er med. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** Differensialet $df = f'_x\,dx + f'_y\,dy$ som lineær tilnærming til endringen $\Delta f$ ved små endringer i $x$ og $y$. Endimensjonal variant $df=f'(x)\,dx$ som spesialtilfelle. Intuisjon: hvert ledd er bidraget fra én variabel; **begge må med** i to variabler. Kobling til grenseendringer i økonomi (samlet effekt av små endringer i to størrelser). Skille differensial ($df$, symbolsk) fra faktisk tilvekst ($\Delta f$).
- **Oppgavesjangre:** DA (som SU-punkt). Mønstereksempel: «La $f(x,y)=x^2y$. Sett opp differensialet $df$, og avgjør om påstanden «$df=2xy\,dx$» er sann eller usann. Begrunn.» (usann — mangler $x^2\,dy$-leddet).
- **Typiske feil:** Utelate ett ledd (#4 — kjernen i sant/usant-fellen); forveksle $df$ og $\Delta f$; feil fortegn.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 3.2: Lineær approksimasjon og approksimasjonsfeil

- **id:** `econ1100-3-2` · **number:** 3.2 · **estimatedMinutes:** 45 · **prerequisites:** `econ1100-3-1`
- **Kapitteltype:** teori
- **description:** Å tilnærme funksjonsverdier rundt et punkt — og å vurdere om tilnærmingen over- eller underestimerer.
- **Eksamensbelegg:** Nesten årvisst sant/usant-punkt (H2021 O2b, H2023 O2a, H2024 O2a, H2025 O2a): sett inn i formelen, forenkle, sammenlign med oppgitt uttrykk. H2018 O4c ba om approksimasjonsfeilen **med korrekt fortegn**. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** Lineær approksimasjon i to variabler: $f(x,y)\approx f(x_0,y_0)+f'_x(x_0,y_0)(x-x_0)+f'_y(x_0,y_0)(y-y_0)$; endimensjonal variant. **Alle ledd med** (samme felle som differensialet). Approksimasjonsfeilen $\Delta f - df$ og dens fortegn: knytt til krumning (konveks funksjon → tangenten ligger under → approksimasjonen underestimerer). Fremgangsmåte for sant/usant-varianten: regn ut $f(x_0,y_0)$, $f'_x$, $f'_y$ i punktet, sett inn, forenkle, og sammenlign ledd for ledd med det oppgitte uttrykket.
- **Oppgavesjangre:** DA (som SU-punkt). Mønstereksempel: «La $f(x,y)=\sqrt{x}\,y$. Finn den lineære approksimasjonen rundt $(4,3)$, og avgjør om påstanden «$f(4{,}2\,;\,3)\approx 6{,}15$» er sann. Begrunn.»
- **Typiske feil:** Utelate ett ledd (#4); bruke feil basispunkt; sette inn i $f$ i stedet for i approksimasjonen; feil fortegn på approksimasjonsfeilen (#7-slektning).
- **Quiz: 16 · Flashcards: 16**

**Prøve-kvote Del 3:** 4 prøver (3.A differensialet med «mangler ledd»-feller, sjanger DA; 3.B lineær approksimasjon satt inn og sammenlignet, DA; 3.C approksimasjonsfeil med fortegn koblet til krumning, DA; 3.D blandet differensial/approksimasjon i sant/usant-format med begrunnelseskrav, DA/SU).

---

### Del 4 — Endimensjonal funksjonsdrøfting *(prioritet: PERFEKT — den moderne signaturoppgaven)*

#### Kapittel 4.1: Vekst og krumning: fortegnsanalyse av $f'$ og $f''$

- **id:** `econ1100-4-1` · **number:** 4.1 · **estimatedMinutes:** 50 · **prerequisites:** `econ1100-1-1`
- **Kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Bygger på [Funksjonsdrøfting](/bok/r1/r1-4-6) fra R1; sammenlign gjerne med [Fullstendig funksjonsdrøfting](/bok/s2/s2-3-1) fra S2.
- **description:** Voksende/avtakende via fortegnet på $f'$ og konveks/konkav via fortegnet på $f''$ — med ABC-formelen som faktoriseringsverktøy.
- **Eksamensbelegg:** Kjernen i FD-oppgaven (6/6 ordinære sett 2020–2025). Sensor er streng på at fortegnsintervaller **begrunnes** med fortegnsanalyse, ikke bare oppgis (typisk feil #10). Prioritet: **PERFEKT**.
- **Innholdskontrakt:** Voksende ($f'>0$) / avtakende ($f'<0$); konveks ($f''>0$) / konkav ($f''<0$). **Fortegnsanalyse**: finn nullpunktene til $f'$ (og $f''$), sett opp fortegnslinje, les av intervallene. **ABC-formelen** brukes til å faktorisere $f'$ når den er kvadratisk (sensor gir hint om dette). Kobling: en voksende funksjon kan godt være konkav ($f'\ge 0$ og $f''\le 0$ samtidig) — forbered sant/usant-fellen i kap. 4.2. Presiser at «voksende for $x>2$» må *begrunnes* med fortegnet på $f'$, ikke påstås.
- **Oppgavesjangre:** FD. Mønstereksempel: «La $f(x)=x^3-6x^2+9x$. Bruk fortegnsanalyse av $f'$ og $f''$ til å bestemme hvor $f$ vokser/avtar og er konveks/konkav.»
- **Typiske feil:** Oppgi intervaller uten fortegnsanalyse (#10); regnefeil i ABC; blande $f'$- og $f''$-konklusjoner (vekst vs. krumning).
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 4.2: Stasjonærpunkter, ekstrempunkter og vendepunkter — og fellene

- **id:** `econ1100-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ1100-4-1`
- **Kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Bygger på [Andrederiverte og vendepunkter](/bok/s2/s2-3-2) og [Optimering](/bok/s2/s2-3-3) fra S2.
- **description:** Klassifisering av stasjonærpunkter — og de to fellene sensor gir null for: $x^4$-minimum via $f''(0)=0$, og vendepunkt uten fortegnsskifte.
- **Eksamensbelegg:** Klassifisering i FD-oppgaven (6/6 ordinære) og som sant/usant-punkt. **To strenge fallgruver med eget behandlingsrom:** (a) «et stasjonærpunkt er ikke automatisk et ekstrempunkt» (H2023 O2d); (b) **minimum av $x^4$ kan IKKE vises ved $f''(0)=0$** — sensor gir eksplisitt *null uttelling* for innsetting i andrederiverte når den er null; man må bruke global konveksitet ($f''\ge0$ overalt) eller førstederiverttesten (H2021 O2c). Et vendepunkt krever at $f''$ **skifter fortegn**, ikke bare at $f''=0$ (H2025-utsatt O2b). Prioritet: **PERFEKT**.
- **Innholdskontrakt:** Stasjonærpunkt ($f'=0$) vs. ekstrempunkt (maks/min) vs. vendepunkt ($f''$ skifter fortegn). Andrederiverttest: $f''>0$ → lokalt min, $f''<0$ → lokalt maks. **Fallgruve-warning 1 ($x^4$-fellen):** når $f''=0$ i det stasjonære punktet er testen *inkonklusiv* — man må argumentere via global krumning eller fortegnsskifte i $f'$. Gjennomgå $f(x)=x^4$ eksplisitt: $f'(0)=0$, $f''(0)=0$, men $f''(x)=12x^2\ge0$ overalt → global konveksitet → $x=0$ er globalt minimum. **Fallgruve-warning 2 (stasjonær ≠ ekstrem):** $f(x)=x^3$ har $f'(0)=0$ men ingen ekstremverdi (vendepunkt). Vendepunkt: krev fortegnsskifte i $f''$.
- **Oppgavesjangre:** FD + SU. Mønstereksempler: «Klassifiser de stasjonære punktene til $f(x)=x^4-2x^2$.» og (SU) «Påstand: «$f''(a)=0$ betyr at $a$ er et vendepunkt.» Sant eller usant? Begrunn.» (usann — krever fortegnsskifte).
- **Typiske feil:** Konkludere om ekstremum fra $f''=0$ i punktet (#2 — null uttelling); blande stasjonær- og ekstrempunkt (#8); kalle $f''=0$ et vendepunkt uten fortegnsskifte (#7).
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 4.3: Hjørne- og randløsninger: definisjonsområde-argumentet

- **id:** `econ1100-4-3` · **number:** 4.3 · **estimatedMinutes:** 50 · **prerequisites:** `econ1100-4-1`
- **Kapitteltype:** teori
- **description:** Fagets tyngste fallgruve: globale ekstrempunkter på randen av definisjonsområdet må argumenteres, ikke tallsjekkes.
- **Forkunnskaper/kryssbok:** Bygger på [Globale ekstremalpunkter](/bok/r1/r1-4-8) fra R1 — men her er poenget nettopp det R1 ikke vektlegger: randen og definisjonsområdet.
- **Eksamensbelegg:** Hjørne-/randløsning i 5/16 sett (31 %), men **høyt vektlagt som feilkilde** (typisk feil #1, eksplisitt H2021 O2d, H2023 O2f, H2025 O5c). **Sensor er streng:** det er *ikke tilstrekkelig å sette inn ulike $x$-verdier* for å «vise» et globalt ekstrempunkt — man må argumentere via definisjonsområdets endepunkt + fortegn på den deriverte. Prioritet: **PERFEKT** (karakterskille).
- **Innholdskontrakt:** **Sjekk definisjonsområdet først** — særlig når $\ln$ eller $\sqrt{}$ inngår. Det korrekte argumentet, vist på $f(x)=\sqrt{x}$: $x=0$ er første punkt i definisjonsmengden $[0,\infty)$, og $f'(x)>0$ for $x>0$ → $f$ vokser fra $x=0$ → $x=0$ er et **randminimum** (hjørneløsning). Generell oppskrift: (1) finn definisjonsområdet; (2) sjekk endepunktene; (3) bruk fortegnet på $f'$ til å argumentere for retningen inn i området; (4) sammenlign med eventuelle indre stasjonærpunkter. **Warning:** innsetting av tallverdier «beviser» ingenting — det gir bare delvis uttelling. Kobling fremover: samme tenkning brukes når Lagrange-røtter kastes utenfor definisjonsområdet (Del 8) og ved klassifisering under bibetingelse.
- **Oppgavesjangre:** HR (ofte som SU- eller storoppgave-punkt). Mønstereksempel: «Har $f(x)=x-\ln x$ et globalt minimum på $(0,\infty)$? Argumenter via definisjonsområdet og fortegnet på $f'$ — ikke ved å prøve tallverdier.»
- **Typiske feil:** «Bevise» globalt ekstremum ved innsetting av tall (#1 — bare delvis uttelling); ikke sjekke definisjonsområdet (#6); overse randen når man bare leter etter $f'=0$.
- **Quiz: 16 · Flashcards: 12**

#### Kapittel 4.4: Skisse, nullpunkter og tangentlinje

- **id:** `econ1100-4-4` · **number:** 4.4 · **estimatedMinutes:** 45 · **prerequisites:** `econ1100-4-2`
- **Kapitteltype:** teori
- **description:** Å sette funnene sammen til en konsistent skisse, finne nullpunkter med ABC og legge tangentlinjen.
- **Eksamensbelegg:** FD-oppgaven ber ofte om skisse (H2021 O3 gir egenskapene og ber om grafen; H2020 O4 gir grafen til $f$/$f'$ og ber om avlesning). Ved skisse vektlegges **konsistens med egne funn og tolkning**, ikke presisjon — hvert avlest/tegnet element gir lik uttelling. Tangentlinje er fast delpunkt. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** Skisse som syntese: vekst-/krumningsintervaller + stasjonærpunkter + eventuelle nullpunkter + asymptotisk oppførsel → en graf som er *konsistent med* fortegnsanalysen (viktigere enn nøyaktighet). **Nullpunkter** med ABC-formelen. **Tangentlinjen** $y-y_1=f'(x_1)(x-x_1)$ i et gitt punkt. Omvendt oppgave: gitt grafen til $f$ eller $f'$, les av hvor $f$ vokser/avtar/har ekstrempunkter (grafen til $f'$ over/under $x$-aksen). Beskriv figurer i ord (siden plattformen er tekstbasert): akser, kurveform, markerte punkter.
- **Oppgavesjangre:** FD. Mønstereksempel: «Skisser $f(x)=x^3-3x$ konsistent med fortegnsanalysen fra en tidligere deloppgave, marker nullpunkter og ekstrempunkter, og finn tangentlinjen i $x=2$.»
- **Typiske feil:** Skisse som strider mot egen fortegnsanalyse; regnefeil i ABC for nullpunkter; feil stigningstall i tangentlinjen (bruke $f$ i stedet for $f'$); lese grafen til $f'$ som om den var $f$.
- **Quiz: 14 · Flashcards: 12**

#### Kapittel 4.5: Drill: funksjonsdrøfting fra ende til annen

- **id:** `econ1100-4-5` · **number:** 4.5 · **estimatedMinutes:** 80 · **prerequisites:** `econ1100-4-3`, `econ1100-4-4`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på den moderne signaturoppgaven: $f'$/$f''$-analyse → klassifisering → definisjonsområde → skisse → tangent, med fellene innebygd.
- **Eksamensbelegg:** Dekker FD (6/6 ordinære) i full bredde, inkludert de to fallgruvene (kap. 4.2) og randargumentet (kap. 4.3). Prioritet: **PERFEKT**.
- **Innholdskontrakt:** **Løsningsoppskrift** (algoritme): 1) definisjonsområde; 2) $f'$: nullpunkter + fortegn → vekst; 3) $f''$: nullpunkter + fortegn → krumning + vendepunkter (fortegnsskifte!); 4) klassifiser stasjonærpunkter (andrederiverttest, men bruk global krumning/førstederiverttest når $f''=0$); 5) sjekk randen for hjørneløsninger; 6) nullpunkter (ABC); 7) skisse konsistent med 2–6; 8) tangentlinje ved behov. **Gjennomregnet eksamenscase** med sensor-margnotater (begrunn intervaller; ikke tallsjekk randen; ikke bruk $f''=0$ som ekstremtest). **8–12 oppgaver** på eksamensnivå som roterer: polynomer, funksjoner med $\ln$/$\sqrt{}$ (randløsning), en $x^4$-type (fellen), en gitt-graf-avlesningsoppgave.
- **Oppgavesjangre:** FD. Mønstereksempel: «Gitt $f(x)=x^4-4x^3$: (a) bestem vekst og krumning; (b) klassifiser de stasjonære punktene — vær særlig nøye der andrederiverttesten svikter; (c) finn vendepunkter; (d) skisser grafen.»
- **Typiske feil:** $x^4$/$f''=0$-fellen (#2), stasjonær ≠ ekstrem (#8), vendepunkt uten fortegnsskifte (#7), randløsning ved tallsjekk (#1), ubegrunnete intervaller (#10).
- **Quiz: 12 · Flashcards: 8**

**Prøve-kvote Del 4:** 4 prøver (4.A vekst/krumning med fortegnsanalyse og ABC, sjanger FD; 4.B klassifisering med $x^4$- og stasjonær≠ekstrem-fellene, FD/SU; 4.C hjørne-/randløsning med definisjonsområde-argument, HR; 4.D full drøfting på eksamensnivå med skisse og tangent, FD).

---

### Del 5 — Nivåkurver og implisitt derivasjon *(prioritet: PERFEKT)*

#### Kapittel 5.1: Nivåkurver og deres helning

- **id:** `econ1100-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ1100-1-2`
- **Kapitteltype:** teori
- **description:** Helningen $y'(x)=-F'_x/F'_y$ langs en nivåkurve $F(x,y)=c$ — verktøyet bak indifferenskurver og isokvanter.
- **Eksamensbelegg:** NK i 12/16 sett (75 %, 9/9 ordinære) — egen storoppgave eller sant/usant-punkt (H2022 O2d, H2024 O2d med sirkelen $x^2+y^2=4$). Sensors foretrukne vei er formelen $y'=-F'_x/F'_y$ «fra forelesning»; implisitt derivasjon gjennom likningen godtas likeverdig. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** Nivåkurve $F(x,y)=c$ (konstant funksjonsverdi). **Helningen** $y'(x)=-F'_x/F'_y$, **utledet** fra totalderiverten ($dF=F'_x\,dx+F'_y\,dy=0$ langs kurven → løs for $dy/dx$) — dette er en utledning eksamen krever aktivt. Alternativ vei: implisitt derivasjon rett på $F(x,y)=c$. Avgjør voksende/avtakende av fortegnet på $y'$. Økonomisk tolkning (broen til Del 8): nivåkurven er en indifferenskurve/isokvant; $-F'_x/F'_y$ er den marginale substitusjonsraten (MRS). Vis på både eksplisitte ($F=xy$) og implisitte ($x^2+y^2=4$) former.
- **Oppgavesjangre:** NK. Mønstereksempel: «For nivåkurven $x^2y=8$, finn $y'(x)$ ved formelen $-F'_x/F'_y$ og ved implisitt derivasjon, og vis at de gir samme svar.»
- **Typiske feil:** Feil fortegn (glemme minustegnet i formelen); bytte om $F'_x$ og $F'_y$; regnefeil i implisitt derivasjon.
- **Quiz: 18 · Flashcards: 17**

#### Kapittel 5.2: Krumning på nivåkurven: $y''$ og «husk at $y=y(x)$»

- **id:** `econ1100-5-2` · **number:** 5.2 · **estimatedMinutes:** 50 · **prerequisites:** `econ1100-5-1`
- **Kapitteltype:** teori
- **description:** Andrederiverten $y''(x)$ på nivåkurven — og den kritiske feilen sensor advarer mot: å glemme at $y$ er en funksjon av $x$.
- **Eksamensbelegg:** Konveksitet via $y''$ er fast del av NK-oppgaven. **Kritisk feil sensor advarer eksplisitt mot (fotnote H2019):** når man deriverer $y'$ én gang til, må man huske at $y=y(x)$ — glemmer man det, får man tilfeldigvis riktig fortegn, men feil fremgangsmåte (og lite uttelling). Prioritet: **PERFEKT**.
- **Innholdskontrakt:** Deriver $y'(x)=-F'_x/F'_y$ én gang til for å få $y''(x)$. **Warning som eget avsnitt:** $F'_x$ og $F'_y$ avhenger av både $x$ og $y$, og $y=y(x)$ — så kjerneregelen må brukes på $y$-leddene (sett inn $y'=-F'_x/F'_y$ underveis). Vis full utledning på et konkret eksempel. Konveks nivåkurve ($y''>0$) vs. konkav ($y''<0$); tolkning som avtakende/økende MRS. Skisse konsistent med fortegn og krumning.
- **Oppgavesjangre:** NK. Mønstereksempel: «For $x^2y=8$, finn $y''(x)$. Vis hvert steg der du bruker at $y=y(x)$, og avgjør om nivåkurven er konveks.»
- **Typiske feil:** Glemme at $y=y(x)$ ved andregangsderivasjon (#3 — riktig fortegn, feil metode, lite uttelling); ikke sette inn $y'$ underveis; regnefeil i kvotientderivasjonen.
- **Quiz: 15 · Flashcards: 12**

**Prøve-kvote Del 5:** 4 prøver (5.A helning via formel og implisitt derivasjon, sjanger NK; 5.B konveksitet via $y''$ med «husk $y=y(x)$», NK; 5.C nivåkurve som sant/usant-påstand (helningsformelen), NK/SU; 5.D full nivåkurve-oppgave på eksamensnivå med helning, krumning og skisse, NK).

---

### Del 6 — Fri optimering i to variabler *(prioritet: KUNNE)*

#### Kapittel 6.1: Førsteordensbetingelser og Hesse-klassifisering

- **id:** `econ1100-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ1100-1-2`, `econ1100-4-2`
- **Kapitteltype:** teori
- **description:** Kandidatpunkter fra $f'_x=f'_y=0$, klassifisert med Hesse-determinanten $D$.
- **Eksamensbelegg:** HD i 10/16 sett (63 %). Standardfunksjoner: $x^2y+x^2+2y^2$, $x^3-3xy^2+x$, $y^3-3xy+4x^2$. Prioritet: **KUNNE**.
- **Innholdskontrakt:** FOB $f'_x=0$, $f'_y=0$ → kandidatpunkter (løs likningssystemet). **Hesse-determinanten** $D=f''_{xx}\,f''_{yy}-(f''_{xy})^2$: $D<0$ → sadelpunkt; $D>0$ med $f''_{xx}>0$ → (lokalt) minimum; $D>0$ med $f''_{xx}<0$ → (lokalt) maksimum; $D=0$ → inkonklusiv. Vis hele kjeden på en standardfunksjon med flere kandidatpunkter (klassifiser hvert). Tolkning av $D$: samspillet mellom krumning i begge retninger og kryssleddet.
- **Oppgavesjangre:** HD. Mønstereksempel: «Finn og klassifiser alle stasjonærpunkter til $f(x,y)=x^3-3xy^2+x$.»
- **Typiske feil:** Regnefeil i $D$ (særlig fortegn på $(f''_{xy})^2$); glemme å sjekke $f''_{xx}$ når $D>0$; miste kandidatpunkter i likningssystemet; kalle $D=0$ konklusivt.
- **Quiz: 16 · Flashcards: 14**

#### Kapittel 6.2: Lokalt vs. globalt — og drill

- **id:** `econ1100-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ1100-6-1`
- **Kapitteltype:** drill
- **description:** Når et lokalt resultat er globalt — og drill på hele Hesse-kjeden.
- **Eksamensbelegg:** Sensor understreker at et lokalt resultat er **globalt bare hvis betingelsene holder i *hele* definisjonsområdet** (H2021-utsatt O3c, H2025-utsatt O5); ellers konkluderes kun lokalt. Dette er en toppsjikt-nyanse. Prioritet: **KUNNE**.
- **Innholdskontrakt:** Lokalt vs. globalt: $D>0$ og $f''_{xx}>0$ i ett punkt gir *lokalt* minimum; for globalt kreves at $f$ er konveks i hele området (f.eks. $f''_{xx}>0$, $f''_{yy}>0$ og $D>0$ overalt). **Løsningsoppskrift** for HD-oppgaven: 1) FOB → alle kandidatpunkter; 2) andreordens partiellderiverte; 3) $D$ og $f''_{xx}$ i hvert punkt → klassifiser; 4) vurder om resultatet er globalt. **Gjennomregnet case** med sensor-margnotater (skille lokalt/globalt eksplisitt). **8–12 oppgaver** som roterer standardfunksjonene med nyskrevne koeffisienter og pene kandidatpunkter.
- **Oppgavesjangre:** HD. Mønstereksempel: «For $f(x,y)=x^2y+x^2+2y^2$: finn kandidatpunktene, klassifiser dem med Hesse, og avgjør om et eventuelt minimum er lokalt eller globalt.»
- **Typiske feil:** Hevde globalt uten å sjekke hele området; #-repertoaret fra 6.1 (fortegn i $D$, glemt $f''_{xx}$).
- **Quiz: 14 · Flashcards: 10**

**Prøve-kvote Del 6:** 4 prøver (6.A FOB og kandidatpunkter, sjanger HD; 6.B Hesse-klassifisering på standardfunksjoner, HD; 6.C lokalt vs. globalt med begrunnelse, HD; 6.D full fri-optimeringsoppgave på eksamensnivå, HD).

---

### Del 7 — Homogenitet og skalautbytte *(prioritet: KUNNE)*

#### Kapittel 7.1: Homogene funksjoner og skalautbytte

- **id:** `econ1100-7-1` · **number:** 7.1 · **estimatedMinutes:** 45 · **prerequisites:** `econ1100-1-1`
- **Kapitteltype:** teori
- **description:** $f(tx,ty)=t^k f(x,y)$ — homogenitetsgrad $k$ og hva den sier om skalautbytte når innsatsfaktorene dobles.
- **Eksamensbelegg:** HG i 9/16 sett (56 %, tungt på utsatt), som sant/usant-punkt (H2018, H2020 O2c, H2025 O2c) og innvevd i produsentteori. Ofte koblet til «hvor mye produseres når innsatsfaktorene dobles». Prioritet: **KUNNE**.
- **Innholdskontrakt:** Test for homogenitet: erstatt $x\to tx$, $y\to ty$, faktoriser ut $t^k$; grad $k$ leses av. Tolkning: grad 1 = konstant skalautbytte; $k>1$ = tiltakende, $k<1$ = avtakende. **Doblingstolkning:** dobles alle innsatsfaktorer, ganges produksjonen med $2^k$. Vis på Cobb-Douglas ($x^\alpha y^\beta$ er homogen av grad $\alpha+\beta$) og på et ikke-homogent moteksempel (så studenten kan avgjøre *begge* utfall). Fremgangsmåte for sant/usant: sett inn, sammenlign med $t^k f$.
- **Oppgavesjangre:** HG (som SU-punkt). Mønstereksempel: «Er $f(x,y)=x^{1/3}y^{1/2}$ homogen? Finn i så fall graden, og forklar hva som skjer med $f$ når $x$ og $y$ dobles.»
- **Typiske feil:** Feil grad (regnefeil i eksponenter); påstå homogenitet for en ikke-homogen funksjon (glemme å sjekke at $t^k$ faktoriseres *rent* ut); feil doblingsfaktor ($2^k$ vs. $2k$).
- **Quiz: 14 · Flashcards: 12**

#### Kapittel 7.2: Eulers teorem og homogenitet av deriverte (bevis-lett)

- **id:** `econ1100-7-2` · **number:** 7.2 · **estimatedMinutes:** 40 · **prerequisites:** `econ1100-7-1`
- **Kapitteltype:** teori
- **description:** Eulers relasjon $x f'_x + y f'_y = k f$ — og at partiellderivertene til en grad-$k$-homogen funksjon selv er homogene av grad $k-1$.
- **Eksamensbelegg:** Euler/homogenitet av deriverte som teoriutsagn (H2022-utsatt O2d). En bevis-lett oppgave som skiller toppsjiktet (sensor: «forholdsvis vanskelige» fordi studentene har lite bevistrening). Prioritet: **KUNNE** (toppsjikt-markør).
- **Innholdskontrakt:** **Eulers teorem:** for en grad-$k$-homogen $f$ gjelder $x f'_x + y f'_y = k f(x,y)$; oppgi og vis bruken (verifiser på Cobb-Douglas). **Homogenitet av deriverte:** partiellderivertene til en grad-$k$-homogen funksjon er homogene av grad $k-1$ — vis argumentet (deriver identiteten $f(tx,ty)=t^k f$ mht. $x$). Økonomisk kobling: Euler ligger bak at faktorenes grenseprodukt-inntekter summerer til totalproduktet ved konstant skalautbytte.
- **Oppgavesjangre:** HG + bevis-lett (som SU-punkt). Mønstereksempel: «Vis at hvis $f$ er homogen av grad $k$, så er $f'_x$ homogen av grad $k-1$. Illustrer på $f(x,y)=x^2y$.»
- **Typiske feil:** Hoppe over argumentet (bevis-oppgave); feil grad ($k-1$); blande Euler-relasjonen og selve homogenitetsdefinisjonen.
- **Quiz: 12 · Flashcards: 10**

**Prøve-kvote Del 7:** 4 prøver (7.A homogenitetstest og grad, sjanger HG; 7.B doblingstolkning og skalautbytte, HG; 7.C Eulers teorem med bevis, HG/bevis-lett; 7.D homogenitet innvevd i en produksjonskontekst på eksamensnivå, HG/PR).

---

### Del 8 — Betinget optimering: Lagrange *(prioritet: PERFEKT — den tyngste storoppgaven)*

#### Kapittel 8.1: Lagrange-metoden: oppsett og førsteordensbetingelser

- **id:** `econ1100-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ1100-1-2`, `econ1100-5-1`
- **Kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Bygger på partiellderivasjon (kap. 1.2), nivåkurver/MRS (kap. 5.1) og [Optimering med bibetingelser](/bok/s2/s2-8-5) fra S2.
- **description:** Å optimere en funksjon under en bibetingelse: sett opp $L$, skriv FOB.
- **Eksamensbelegg:** LG i 13/16 sett (81 %) — den tyngste tilbakevendende storoppgaven (20–36 p). Nesten alltid nyttemaksimering (`max U(x,y)` under budsjett) eller kostnadsminimering. Sensor godtar at man dropper $\partial L/\partial\lambda$ så lenge bibetingelsen brukes. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** Problemet: maksimer/minimer $F(x,y)$ under $g(x,y)=m$. **Lagrange-funksjonen** $L=F(x,y)-\lambda(g(x,y)-m)$ (fortegn på $\lambda$-leddet valgfritt så lenge bibetingelsen er med). **FOB:** $L'_x=0$, $L'_y=0$, samt bibetingelsen $g(x,y)=m$ — nummerert. Økonomisk innramming (klima, energimiks, konsum) varierer, men matematikken er identisk. $\lambda$ tolkes som skyggepris (utdypes i 8.3). Vis oppsettet på nyttemaks $\max \ln x+\ln y$ under $p_1x+p_2y=m$.
- **Oppgavesjangre:** LG. Mønstereksempel: «Sett opp Lagrange-funksjonen og førsteordensbetingelsene for $\max\; x^{1/2}y^{1/2}$ under $2x+3y=60$.»
- **Typiske feil:** Glemme bibetingelsen i FOB; feil fortegn som gjør resten uhåndterbar; blande hvilken funksjon som maksimeres og hvilken som er bibetingelse.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 8.2: Eliminér $\lambda$: tangeringsbetingelsen og optimal etterspørsel

- **id:** `econ1100-8-2` · **number:** 8.2 · **estimatedMinutes:** 60 · **prerequisites:** `econ1100-8-1`
- **Kapitteltype:** teori
- **description:** Fra FOB til løsning: del den ene betingelsen på den andre så $\lambda$ faller ut, få MRS = prisforhold, sett inn i bibetingelsen.
- **Eksamensbelegg:** Kjernen i LG-oppgaven — det midtsjiktet må mestre for å komme forbi oppsettet. Sensors foretrukne vei: eliminér $\lambda$ ved å dele FOB på hverandre. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** **Eliminér $\lambda$:** løs hver FOB for $\lambda$ og sett dem lik, eller **del den ene FOB på den andre** → $F'_x/F'_y=g'_x/g'_y$ (**tangeringsbetingelsen, MRS = prisforhold**). Sett inn i bibetingelsen, løs for $x^*$, $y^*$ som funksjoner av priser og $m$. **Kast røtter utenfor definisjonsområdet** (negativ verdi når $\ln$ inngår — kobling til kap. 4.3). Standardresultat: Cobb-Douglas-logaritmisk nytte gir betinget etterspørsel $x^*(p_1,p_2,m)$; vis den fullt ut. Broen til ECON1210: dette *er* etterspørselsfunksjonen, og tangeringsbetingelsen er «indifferenskurven tangerer budsjettlinjen».
- **Oppgavesjangre:** LG. Mønstereksempel: «Løs $\max\; \ln x+\ln y$ under $p_1x+p_2y=m$: eliminér $\lambda$, finn tangeringsbetingelsen, og utled $x^*$ og $y^*$.»
- **Typiske feil:** Regnefeil ved eliminering av $\lambda$; ta med rot utenfor definisjonsområdet (#11); stoppe ved tangeringsbetingelsen uten å sette inn i bibetingelsen; ikke forenkle sluttuttrykket.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 8.3: Omhyllingsteoremet og skyggeprisen

- **id:** `econ1100-8-3` · **number:** 8.3 · **estimatedMinutes:** 45 · **prerequisites:** `econ1100-8-2`
- **Kapitteltype:** teori
- **description:** Hvordan den optimale verdien endres med en parameter — uten å løse på nytt: $dU^*/dm=\lambda$, $dU^*/dp_i=-\lambda x_i^*$.
- **Eksamensbelegg:** OM i 5/16 sett (31 %, **stigende**), både som storoppgave-punkt og teoriutsagn i sant/usant (H2021-utsatt O2d: $df^*/da=\partial L^*/\partial a=\lambda$). **Sensor forventer at teoremet brukes direkte, ikke reutledes.** Prioritet: **PERFEKT** (innvevd i LG, karakterdifferensierende).
- **Innholdskontrakt:** **Omhyllingsteoremet:** for verdifunksjonen $V(a)=F(x^*(a),y^*(a))$ gjelder $dV/da=\partial L^*/\partial a$ (deriver Lagrange-funksjonen partielt mht. parameteren, evaluert i optimum). Spesialtilfeller: $dU^*/dm=\lambda$ (grensenytten av inntekt) og $dU^*/dp_i=-\lambda x_i^*$. **$\lambda$ som skyggepris:** verdien av å slakke bibetingelsen med én enhet. Vis bruken direkte (ikke reutled) på et løst nyttemaksimeringsproblem. Broen til ECON1210/velferdsanalyse.
- **Oppgavesjangre:** OM (innvevd i LG, eller SU-punkt). Mønstereksempel: «I nyttemaksimeringsproblemet fra forrige deloppgave, bruk omhyllingsteoremet til å finne hvor mye den maksimale nytten øker når inntekten $m$ øker marginalt.»
- **Typiske feil:** Reutlede i stedet for å bruke teoremet direkte; feil fortegn på $-\lambda x_i^*$; forveksle $dU^*/dm$ og $\partial U/\partial m$; ikke evaluere i optimum.
- **Quiz: 15 · Flashcards: 14**

#### Kapittel 8.4: Flere variabler, symmetri og klassifisering ved funksjonsverdi

- **id:** `econ1100-8-4` · **number:** 8.4 · **estimatedMinutes:** 50 · **prerequisites:** `econ1100-8-2`
- **Kapitteltype:** teori
- **description:** Generalisering til $n$ variabler, symmetriargumentet — og den tredje fallgruven: klassifisering under bibetingelse gjøres ved å sammenligne funksjonsverdier, IKKE med andreordensbetingelse.
- **Eksamensbelegg:** $n$-variabel Lagrange med symmetri (H2021 O6: én generell FOB for $x_i$ + symmetri → $x_i^*=m/(np)$). **Fallgruve-warning (tredje strenge felle):** ECON1100 lærer **ikke** andreordensbetingelse under bibetingelse (rand-Hessian) — «studentene har ikke lært andreordensbetingelsen for maksimering under bibetingelser» (H2023 O3c). Trengs klassifisering, **sammenlign funksjonsverdier** i kandidatpunktene. Sensor godtar upresis generell notasjon i $n$-variabel-oppgaver — forståelsen måles, ikke elegant summenotasjon. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** $n$-variabel Lagrange: én generell FOB for $x_i$; ved **symmetri** (identiske priser/roller) er $x_1^*=\dots=x_n^*$ — men symmetrien må **begrunnes eksplisitt**, ikke bare påstås (sensorkrav). Generelt resultat $x_i^*=m/(np)$ ved symmetrisk Cobb-Douglas/CES. **Fallgruve-warning:** man kan *anta* at stasjonærpunktet er et maksimum i standardoppgaver; skal det faktisk avgjøres, **sammenlign funksjonsverdiene** $F(x^*,y^*)$ i kandidatpunktene (ingen rand-Hessian — den er ikke pensum). Notasjonstoleranse: upresis generell notasjon godtas.
- **Oppgavesjangre:** LG. Mønstereksempel: «Maksimer $\sum_{i=1}^{n}\ln x_i$ under $p\sum x_i=m$. Utled den generelle FOB, bruk symmetri (begrunn hvorfor den gjelder) til å finne $x_i^*$, og forklar hvorfor du kan konkludere uten en andreordensbetingelse.»
- **Typiske feil:** Bruke (ikke-eksisterende) andreordensbetingelse under bibetingelse; påstå symmetri uten begrunnelse; sette inn tallverdier for å «klassifisere» i stedet for å sammenligne funksjonsverdier.
- **Quiz: 15 · Flashcards: 12**

#### Kapittel 8.5: Drill: Lagrange fra ende til annen

- **id:** `econ1100-8-5` · **number:** 8.5 · **estimatedMinutes:** 85 · **prerequisites:** `econ1100-8-3`, `econ1100-8-4`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på den tyngste storoppgaven: oppsett → FOB → eliminér $\lambda$ → optimal etterspørsel → omhyllingsteorem, i både nyttemaks- og kostnadsmin-innramming.
- **Eksamensbelegg:** Dekker LG (81 %) i full bredde inkludert OM og $n$-variabel/symmetri. Utsatt-settene bruker oftere kostnadsminimering — begge innramminger drilles. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** **Løsningsoppskrift** (algoritme): 1) sett opp $L$ og nummererte FOB (inkludert bibetingelsen); 2) eliminér $\lambda$ (del FOB på hverandre) → MRS = prisforhold; 3) sett inn i bibetingelsen, løs for $x^*$, $y^*$; 4) kast røtter utenfor definisjonsområdet; 5) tolk $\lambda$ og bruk omhyllingsteoremet ved behov; 6) ved $n$ variabler: generell FOB + begrunnet symmetri; 7) klassifiser ved funksjonsverdisammenligning hvis oppgaven krever det (aldri rand-Hessian). **Gjennomregnet eksamenscase** (nyttemaks med klimainnramming) med sensor-margnotater. **10–15 oppgaver** som roterer: logaritmisk Cobb-Douglas-nytte, CES-nytte, kostnadsminimering ($\min c_1x_1+c_2x_2$ under produksjonskrav), $n$-variabel symmetrisk, én med omhyllingsteorem-halepunkt.
- **Oppgavesjangre:** LG. Mønstereksempel: «En bedrift minimerer kostnaden $c_1x_1+c_2x_2$ under produksjonskravet $x_1^{1/2}x_2^{1/2}=\bar Q$. Sett opp Lagrange, finn betinget faktoretterspørsel $x_1^*$, $x_2^*$, og tolk multiplikatoren.»
- **Typiske feil:** Rot utenfor definisjonsområdet (#11); andreordensbetingelse under bibetingelse (finnes ikke); reutlede omhyllingsteoremet; upresis symmetri uten begrunnelse; uforenklet sluttsvar.
- **Quiz: 14 · Flashcards: 8**

**Prøve-kvote Del 8:** 4 prøver (8.A oppsett + FOB for nyttemaks, sjanger LG; 8.B eliminér $\lambda$ og utled optimal etterspørsel, LG; 8.C omhyllingsteoremet og skyggepris, OM/LG; 8.D full Lagrange-oppgave på eksamensnivå — nyttemaks eller kostnadsmin med $n$-variabel/symmetri, LG).

---

### Del 9 — Produsentteori *(prioritet: KUNNE — vektet opp mot utsatt-profilen)*

#### Kapittel 9.1: Profittmaksimering og faktoretterspørsel

- **id:** `econ1100-9-1` · **number:** 9.1 · **estimatedMinutes:** 50 · **prerequisites:** `econ1100-4-2`, `econ1100-8-2`
- **Kapitteltype:** teori
- **description:** `max p·F(N) − wN`: førsteordensbetingelse $pF'=w$, andreordensbetingelse $F''\le0$, og implisitt faktoretterspørsel.
- **Eksamensbelegg:** PR i 8/16 sett (3/9 ordinære, **5/7 utsatte** — utsatt-profilen). Profittmaks med produktfunksjon. Prioritet: **KUNNE (vektet opp)**.
- **Innholdskontrakt:** Profittmaksimering $\max_N\; pF(N)-wN$: FOB $pF'(N)=w$ (grenseinntektsprodukt = lønn); AOB $F''(N)\le0$ (avtakende grenseprodukt). Løs for faktoretterspørsel $N^*(w)$ med Cobb-Douglas-teknologi ($F(N)=AN^a$). Implisitt faktoretterspørsel $n'(w)$ via implisitt derivasjon av FOB (broen til kap. 9.3). Økonomisk tolkning: bedriften ansetter til grenseinntektsproduktet møter lønna. Marginalanalyse-broen til ECON1210.
- **Oppgavesjangre:** PR. Mønstereksempel: «En bedrift har produktfunksjon $F(N)=10\sqrt{N}$ og selger til pris $p$, lønn $w$. Finn den profittmaksimerende sysselsettingen $N^*(w)$ og vis at andreordensbetingelsen er oppfylt.»
- **Typiske feil:** Glemme AOB ($F''\le0$); feil FOB ($F'=w$ uten prisen $p$); regnefeil på Cobb-Douglas-eksponenter.
- **Quiz: 16 · Flashcards: 12**

#### Kapittel 9.2: Kostnadsminimering: Cobb-Douglas, CES og substitusjonselastisitet

- **id:** `econ1100-9-2` · **number:** 9.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ1100-8-2`, `econ1100-7-1`
- **Kapitteltype:** teori
- **description:** `min rK + wL` under `F(K,L)=Ȳ`: tangeringsbetingelsen $MP_K/MP_L=r/w$, betinget faktoretterspørsel, og substitusjonselastisiteten for CES.
- **Eksamensbelegg:** Kostnadsminimering er utsatt-settenes favoritt (CES/Cobb-Douglas). CES-teknologi og substitusjonselastisitet $\sigma=1/(\gamma-1)$ trekkes tyngre på utsatt enn den ordinære frekvensen tilsier — derfor vektet opp. Prioritet: **KUNNE (vektet opp)**.
- **Innholdskontrakt:** Kostnadsminimering $\min_{K,L}\; rK+wL$ under $F(K,L)=\bar Y$ (Lagrange fra Del 8): **tangeringsbetingelsen** $MP_K/MP_L=r/w$ (isokvantens helning = faktorprisforholdet); betinget faktoretterspørsel $K^*(r,w,\bar Y)$, $L^*(r,w,\bar Y)$. **CES-teknologi** $(K^\gamma+L^\gamma)^{\alpha/\gamma}$ med **substitusjonselastisitet** $\sigma=1/(\gamma-1)$ (oppgi og bruk; utledning bør kjennes, men brukes mest direkte). Cobb-Douglas som spesialtilfelle. Isokvant = nivåkurve (bro til Del 5); homogenitetsgrad = skalautbytte (bro til Del 7). De algebra-tunge CES-uttrykkene er der flest fortegnsfeil oppstår (#12) — vis omhyggelig.
- **Oppgavesjangre:** PR. Mønstereksempel: «En bedrift minimerer $rK+wL$ under $K^{1/3}L^{1/3}=\bar Y$. Finn betinget faktoretterspørsel $K^*$ og $L^*$, og forklar tangeringsbetingelsen økonomisk.»
- **Typiske feil:** Fortegns-/eksponentfeil i CES-derivasjon (#12); feil substitusjonselastisitet ($1/(\gamma-1)$); blande $r/w$ og $w/r$ i tangeringsbetingelsen; glemme produksjonskravet.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 9.3: Komparativ statikk via implisitt derivasjon — og drill

- **id:** `econ1100-9-3` · **number:** 9.3 · **estimatedMinutes:** 50 · **prerequisites:** `econ1100-9-1`, `econ1100-5-1`
- **Kapitteltype:** drill
- **description:** Hvordan optimale valg endres med en parameter (lønn, pris): implisitt derivasjon av FOB — pluss drill på hele produsentpakken.
- **Eksamensbelegg:** Komparativ statikk via implisitt derivasjon av FOB (V2018-utsatt, H2023-utsatt O5-tolkning) — grunnlaget for anvendt økonomisk analyse. Vektet opp med utsatt-profilen. Prioritet: **KUNNE (vektet opp)**.
- **Innholdskontrakt:** Komparativ statikk: deriver FOB (f.eks. $pF'(N^*)=w$) implisitt mht. en parameter for å finne $dN^*/dw$ — bruk implisitt derivasjon (Del 5) på likevektsbetingelsen. Fortegnet tolkes økonomisk (høyere lønn → lavere sysselsetting). **Løsningsoppskrift** for produsentoppgaven: 1) sett opp mål og betingelse (profittmaks eller kostnadsmin); 2) FOB/tangeringsbetingelse; 3) løs for faktoretterspørsel; 4) komparativ statikk ved implisitt derivasjon; 5) tolk fortegn/elastisitet. **Gjennomregnet case** med sensor-margnotater. **8–12 oppgaver** som roterer profittmaks, kostnadsmin (Cobb-Douglas/CES), og komparativ statikk.
- **Oppgavesjangre:** PR. Mønstereksempel: «I profittmaksimeringen $pF'(N)=w$ med $F(N)=AN^a$, bruk implisitt derivasjon til å finne fortegnet på $dN^*/dw$, og tolk resultatet.»
- **Typiske feil:** Glemme kjerneregelen ($N^*=N^*(w)$) i implisitt derivasjon (slektning av #3); feil fortegn; behandle $N^*$ som konstant.
- **Quiz: 12 · Flashcards: 10**

**Prøve-kvote Del 9:** 4 prøver (9.A profittmaks med FOB og AOB, sjanger PR; 9.B kostnadsminimering Cobb-Douglas med tangeringsbetingelse, PR; 9.C CES og substitusjonselastisitet, PR; 9.D full produsentoppgave på utsatt-nivå med komparativ statikk, PR).

---

### Del 10 — Beredskap: inverse funksjoner, integrasjon og serier *(prioritet: KJENNE)*

#### Kapittel 10.1: Inverse funksjoner

- **id:** `econ1100-10-1` · **number:** 10.1 · **estimatedMinutes:** 40 · **prerequisites:** `econ1100-4-1`
- **Kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Bygger på [Omvendte funksjoner](/bok/r1/r1-2-2) og [Derivasjon av omvendte funksjoner](/bok/r1/r1-4-5) fra R1.
- **description:** Eksistens via streng monotoni, og den deriverte $g'(y)=1/f'(x)$.
- **Eksamensbelegg:** IN i 5/16 sett (31 %), typisk sant/usant-punkt (H2018 O2d, H2023 O2b, H2025 O2d): vis at funksjonen er strengt monoton → invers finnes; deriver. Prioritet: **KJENNE**.
- **Innholdskontrakt:** Eksistens av invers: **streng monotoni** (fortegn på $f'$ i hele definisjonsområdet — konstant fortegn → strengt voksende/avtakende → invers finnes). Den deriverte: $g'(y)=1/f'(x)$ der $y=f(x)$, **og** eksplisitt løsning (løs $y=f(x)$ for $x$) som likeverdige veier. Fremgangsmåte for sant/usant: sjekk fortegn på $f'$, konkluder om invers, deriver ved valgfri metode.
- **Oppgavesjangre:** IN (som SU-punkt). Mønstereksempel: «Har $f(x)=x^3+x$ en invers på hele $\mathbb{R}$? Begrunn med fortegnet på $f'$, og finn $g'(2)$ der $g$ er inversen og $f(1)=2$.»
- **Typiske feil:** Konkludere om invers uten å sjekke monotoni på *hele* området; snu brøken feil ($g'=f'$ i stedet for $1/f'$); evaluere $f'$ i feil punkt.
- **Quiz: 12 · Flashcards: 12**

#### Kapittel 10.2: Elementær integrasjon

- **id:** `econ1100-10-2` · **number:** 10.2 · **estimatedMinutes:** 45 · **prerequisites:** `econ1100-1-1`
- **Kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Bygger på [Ubestemt integral](/bok/r2/r2-2-2), [Bestemt integral som grenseverdi](/bok/r2/r2-2-4) og [Areal mellom kurver](/bok/r2/r2-2-7) fra R2. **Merk:** integrasjonsteknikker (substitusjon, delvis integrasjon) er IKKE pensum i ECON1100 — kun elementære antideriverte.
- **description:** Antideriverte av potenser, $1/x$ og $e^{kx}$; bestemte integraler og areal mellom kurver.
- **Eksamensbelegg:** IT i 5/16 sett (31 %). Storoppgave kun i gammelt format (V2018); i moderne sett som sant/usant-punkt ($\int_1^4 \frac{1}{\sqrt{x}}\,dx$, H2025 O2b; $\int_0^2(3x^2-\tfrac12 x+1)\,dx$, H2025-utsatt O2c). Prioritet: **KJENNE** (grunnleggende — dekk, men ikke bygg tungt).
- **Innholdskontrakt:** Antideriverte av potenser ($\int x^n\,dx=\frac{x^{n+1}}{n+1}$, $n\ne-1$), $\int \frac{1}{x}\,dx=\ln|x|$, $\int e^{kx}\,dx=\frac{1}{k}e^{kx}$. Bestemt integral og arealtolkning; areal mellom kurver; **verifikasjon ved derivasjon** (deriver antiderivert → få tilbake integranden — sensors kontroll). Enkel polynomdivisjon før integrasjon (kun gammelt format — nevn kort). **Ingen** substitusjon/delvis integrasjon (ikke pensum). Fremgangsmåte for sant/usant: regn ut det bestemte integralet, sammenlign med påstått verdi.
- **Oppgavesjangre:** IT (som SU-punkt). Mønstereksempel: «Avgjør om $\int_1^4 \frac{1}{\sqrt{x}}\,dx = 2$. Begrunn ved å regne ut integralet.»
- **Typiske feil:** Feil på $\int x^{-1}$ (potensregelen gjelder ikke → $\ln|x|$); regnefeil i grenseinnsetting; glemme fortegn ved areal under $x$-aksen.
- **Quiz: 12 · Flashcards: 12**

#### Kapittel 10.3: Serier: endelige og geometriske summer

- **id:** `econ1100-10-3` · **number:** 10.3 · **estimatedMinutes:** 40 · **prerequisites:** ingen
- **Kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Bygger på [Geometriske følger](/bok/r2/r2-1-3), [Rekker og summasjon](/bok/r2/r2-1-4) og [Uendelige rekker og konvergens](/bok/r2/r2-1-5) fra R2.
- **description:** Endelige summer skrevet ut, og geometriske rekker med konvergens/divergens.
- **Eksamensbelegg:** SR i 5/16 sett (31 %), nesten alltid som sant/usant-punkt: endelige summer ($\sum(n^2-2n)$, H2018 O2a) og geometriske rekker ($\sum z\beta^t$, H2021-utsatt O2e; divergerende $\sum 2^i$, H2024-utsatt O2c). Prioritet: **KJENNE**.
- **Innholdskontrakt:** Endelige summer: skriv ut leddene, bruk kjente formler ($\sum_{k=1}^{n}k=\frac{n(n+1)}{2}$). **Geometrisk rekke:** endelig sum $\sum_{t=0}^{n}a r^t=a\frac{1-r^{n+1}}{1-r}$; uendelig sum $\sum_{t=0}^{\infty}ar^t=\frac{a}{1-r}$ **konvergerer bare når $|r|<1$**, ellers divergerer. Fremgangsmåte for sant/usant: identifiser om rekken er geometrisk, sjekk $|r|$, regn ut eller konkluder divergens.
- **Oppgavesjangre:** SR (som SU-punkt). Mønstereksempel: «Avgjør om $\sum_{t=0}^{\infty} 3\cdot(1{,}5)^t$ konvergerer, og begrunn.» (divergerer, $|r|=1{,}5>1$).
- **Typiske feil:** Bruke uendelig-sum-formelen når $|r|\ge1$ (divergens overses); feil på $\frac{a}{1-r}$ (snu nevneren); regnefeil i endelige summer.
- **Quiz: 12 · Flashcards: 12**

**Prøve-kvote Del 10:** 4 prøver (10.A inverse funksjoner — eksistens og derivert, sjanger IN; 10.B elementær integrasjon med verifikasjon, IT; 10.C geometriske og endelige serier med konvergens, SR; 10.D blandet beredskaps-prøve i sant/usant-format, IN/IT/SR).

---

### Del 11 — Eksamenstrening

#### Kapittel 11.1: Sant/usant-stordrillen: de tolv påstandstypene med begrunnelse

- **id:** `econ1100-11-1` · **number:** 11.1 · **estimatedMinutes:** 90 · **prerequisites:** Del 1–10
- **Kapitteltype:** drill
- **description:** Den viktigste enkeltoppgaven å drille: Oppgave 2s tolv roterende påstandstyper, hver løst med full begrunnelse — for begrunnelsen er alt.
- **Eksamensbelegg:** SU i **alle 16 sett** (Oppg. 2, 15–30 p) — den bredeste enkeltoppgaven, som samler flest deltemaer. **Fagets viktigste enkeltregel:** ubegrunnet ja/nei gir **0** selv med riktig konklusjon. Dette er en egen drillsjanger der *begrunnelsen er hele leveransen*. Prioritet: **PERFEKT** (kryssgående; derfor plassert etter at alle temaer er lært).
- **Innholdskontrakt:** Malen «konklusjon + fullstendig begrunnelse (utregning/argument)» demonstreres, deretter drillbank som dekker ALLE tolv påstandstyper fra analysen, hver med henvisning til teorikapitlet: 1) **lineær approksimasjon** (→ 3.2), 2) **differensial** med alle ledd (→ 3.1), 3) **homogenitet** og grad (→ 7.1), 4) **invers funksjon** via monotoni (→ 10.1), 5) **stasjonær vs. ekstrem/vendepunkt** (→ 4.2), 6) **konveksitet + monotoni** — en voksende funksjon kan være konkav ($f'\ge0$, $f''\le0$); påstanden om at den deriverte til en voksende funksjon selv er voksende er usann (H2021 O2a) (→ 4.1), 7) **elastisitet** med regnereglene (→ 2.1), 8) **integral** — bestemt integral regnet ut (→ 10.2), 9) **serier** — endelige/geometriske, konvergens (→ 10.3), 10) **nivåkurvens helning** $y'=-F'_x/F'_y$ (→ 5.1), 11) **omhyllingsteoremet** som teoriutsagn (→ 8.3), 12) **Euler/homogenitet av deriverte** (→ 7.2). For hver type: hvordan gjenkjenne den, hvordan begrunne (sett inn, forenkle, sammenlign), og den vanligste fellen. **20+ drilloppgaver** (blandet sanne og usanne påstander), alle med full begrunnelse i fasit.
- **Oppgavesjangre:** SU. Mønstereksempel: «Sant eller usant? Begrunn hver: (a) «$f(x,y)=x^2y^3$ er homogen av grad 5.» (b) «Hvis $f''(a)=0$ er $a$ et vendepunkt.» (c) «$\sum_{t=0}^{\infty}(0{,}8)^t=5$.» (d) «For $f(x)=Cx^a$ er $\mathrm{El}_x f=a$.»»
- **Typiske feil:** **Ubegrunnet ja/nei (#9 — gir 0)**; utelate ledd i differensial/approksimasjon (#4); $f''=0$-fellene (#2, #7); glemme $|r|<1$-kravet for geometriske rekker; feil fortegn i nivåkurvens helning.
- **Quiz: 20 · Flashcards: 55** (én flashcard per påstandstype-variant + gjenkjenningsmønstre og feller — den store repetisjonsbanken)

#### Kapittel 11.2: Øvingseksamen 1: moderne mal (nyttemaks + drøfting + nivåkurve)

- **id:** `econ1100-11-2` · **number:** 11.2 · **estimatedMinutes:** 180 · **prerequisites:** `econ1100-11-1`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett 3-timers, 5-oppgavers sett etter H2021–H2025-malen med Lagrange-nyttemaks, endimensjonal drøfting og nivåkurve.
- **Eksamensbelegg/miks:** Speiler et typisk moderne ordinært sett (100 p likt fordelt per delpunkt). **Oppgave 1 (P1, ~20 p):** fire partiellderiverte — én kvotient, én med logaritmisk derivasjon, én multivariabel kjerneregel, én med generell funksjon. **Oppgave 2 (SU, ~25 p):** fem påstander — lineær approksimasjon, homogenitet, invers, vendepunkt/$x^4$-felle, geometrisk rekke — alle med begrunnelseskrav. **Oppgave 3 (LG, ~22 p):** nyttemaksimering med klimainnramming: oppsett → FOB → eliminér $\lambda$ → optimal etterspørsel → omhyllingsteorem for grensenytten av inntekt. **Oppgave 4 (FD, ~18 p):** endimensjonal drøfting med et randløsnings-/hjørnepunkt (definisjonsområde-argument) og en skisse. **Oppgave 5 (NK, ~15 p):** nivåkurve — helning $-F'_x/F'_y$, konveksitet via $y''$ (husk $y=y(x)$). Alle oppgaver nyskrevne med pene tall. Løsningsforslag som A-besvarelse i `collapsible` per oppgave (figurbeskrivelser i ord), med `tip`-notat om vekting og tidsbudsjett (~36/45/40/32/27 min).
- **Oppgavesjangre:** P1, SU, LG, FD, NK.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 11.3: Øvingseksamen 2: moderne mal (kostnadsmin + fri optimering + differensial)

- **id:** `econ1100-11-3` · **number:** 11.3 · **estimatedMinutes:** 180 · **prerequisites:** `econ1100-11-2`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett sett etter moderne mal med en annen storoppgave-miks: Lagrange-kostnadsmin, fri tovariabel-optimering med Hesse, og differensial.
- **Eksamensbelegg/miks:** **Oppgave 1 (P1, ~20 p):** fire partiellderiverte (annen blanding enn ØE1). **Oppgave 2 (SU, ~25 p):** fem påstander — differensial (mangler ledd), elastisitet med kjerneregel, nivåkurvens helning, omhyllingsteoremet som teoriutsagn, bestemt integral. **Oppgave 3 (LG, ~20 p):** kostnadsminimering med Cobb-Douglas — tangeringsbetingelse → betinget faktoretterspørsel → tolkning av $\lambda$. **Oppgave 4 (HD, ~18 p):** fri optimering i to variabler — FOB, Hesse-klassifisering av flere kandidatpunkter, lokalt vs. globalt. **Oppgave 5 (DA + EL, ~17 p):** lineær approksimasjon rundt et punkt + en elastisitetsberegning med tolkning. Løsningsforslag som A-besvarelse med vektings-`tip` og tidsbudsjett (~36/45/36/32/31 min).
- **Oppgavesjangre:** P1, SU, LG, HD, DA, EL.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 11.4: Øvingseksamen 3: utsatt-profil (produsentteori + CES)

- **id:** `econ1100-11-4` · **number:** 11.4 · **estimatedMinutes:** 180 · **prerequisites:** `econ1100-11-3`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett sett kalibrert mot utsatt-settenes tyngre produsent-/CES-profil, med kostnadsminimering, substitusjonselastisitet og komparativ statikk.
- **Eksamensbelegg/miks:** Speiler utsatt-profilen (mer produsentorientert). **Oppgave 1 (P1, ~20 p):** fire partiellderiverte, minst én CES-/produkt-tung. **Oppgave 2 (SU, ~25 p):** fem påstander — homogenitet/skalautbytte (dobling), Euler-relasjonen, differensial, hjørneløsning-argument, geometrisk rekke. **Oppgave 3 (PR, ~22 p):** kostnadsminimering med CES-teknologi — tangeringsbetingelse, betinget faktoretterspørsel, substitusjonselastisitet $\sigma=1/(\gamma-1)$. **Oppgave 4 (PR + komparativ statikk, ~18 p):** profittmaksimering og fortegnet på $dN^*/dw$ via implisitt derivasjon. **Oppgave 5 (LG, ~15 p):** $n$-variabel nyttemaksimering med symmetri (begrunnet) og klassifisering ved funksjonsverdisammenligning. Sammen dekker de tre øvingseksamenene sjangrene P1, SU, LG, FD, NK, HD, DA, EL, PR, HG, OM; IN/IT/SR dekkes av sant/usant-drillen (11.1) og prøvene i Del 10. Løsningsforslag som A-besvarelse med vektings-`tip` og tidsbudsjett (~36/45/40/32/27 min).
- **Oppgavesjangre:** P1, SU, PR, LG, HG, OM.
- **Quiz: 5 · Flashcards: 0**

**Prøve-kvote Del 11:** ingen egne prøver (delen består av stordrill + 3 øvingseksamener).

---

### Kvotesammendrag (quiz/flashcards/prøver) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1 | 12 | 12 | 0 |
| 1 | 1.1–1.6 | 18+22+18+18+15+12 = **103** | 18+22+16+14+12+8 = **90** | 4 |
| 2 | 2.1–2.2 | 18+14 = **32** | 18+12 = **30** | 4 |
| 3 | 3.1–3.2 | 16+16 = **32** | 16+16 = **32** | 4 |
| 4 | 4.1–4.5 | 18+18+16+14+12 = **78** | 18+18+12+12+8 = **68** | 4 |
| 5 | 5.1–5.2 | 18+15 = **33** | 17+12 = **29** | 4 |
| 6 | 6.1–6.2 | 16+14 = **30** | 14+10 = **24** | 4 |
| 7 | 7.1–7.2 | 14+12 = **26** | 12+10 = **22** | 4 |
| 8 | 8.1–8.5 | 18+18+15+15+14 = **80** | 18+16+14+12+8 = **68** | 4 |
| 9 | 9.1–9.3 | 16+16+12 = **44** | 12+16+10 = **38** | 4 |
| 10 | 10.1–10.3 | 12+12+12 = **36** | 12+12+12 = **36** | 4 |
| 11 | 11.1–11.4 | 20+5+5+5 = **35** | 55+0+0+0 = **55** | 0 (3 øvingseksamener) |
| **Sum** | **38 kap.** | **541 ≥ 500 ✓** | **504 ≥ 500 ✓** | **40 + 3 ØE** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvens: de fire PERFEKT-tunge delene (1 partiellderivasjon,
4 funksjonsdrøfting, 8 Lagrange, samt 3+5) står for 326 av 541 quiz — de temaene
som faktisk bærer eksamenspoengene.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–10, 40 totalt)

Hver del 1–10 får ett prøvekapittel (`econ1100-<del>-prove`, chapterNumber `<del>.P`)
med fire prøver. Hver prøve består av nyskrevne oppgaver i eksamens sjangre, med
løsningsforslag (A-besvarelse med utregning/begrunnelse synlig — begrunnelse er alt) og
poengfordeling. Prøvene per del er spesifisert i «Prøve-kvote Del N»-linjene over.
Oppsummert dekker de:

- **Del 1** (P1): blandet derivasjon → partiellderiverte → log./multivariabel → full Oppg. 1.
- **Del 2** (EL): definisjon/potensregel → regneregler → kjerneregel med bevis → innvevd.
- **Del 3** (DA): differensial → approksimasjon → feilfortegn → sant/usant-format.
- **Del 4** (FD/HR): vekst/krumning → klassifisering med feller → hjørneløsning → full drøfting.
- **Del 5** (NK): helning → krumning ($y=y(x)$) → sant/usant → full nivåkurve.
- **Del 6** (HD): FOB → Hesse → lokalt/globalt → full fri optimering.
- **Del 7** (HG): homogenitetstest → dobling → Euler-bevis → produksjonskontekst.
- **Del 8** (LG/OM): oppsett+FOB → eliminér $\lambda$ → omhyllingsteorem → full Lagrange.
- **Del 9** (PR): profittmaks → kostnadsmin Cobb-Douglas → CES/$\sigma$ → komparativ statikk.
- **Del 10** (IN/IT/SR): inverse → integrasjon → serier → blandet beredskap.

### Øvingseksamener (3 komplette sett — kap. 11.2–11.4)

| Sett | Mal den speiler | Storoppgave-miks (Oppg. 3–5) |
|---|---|---|
| Øvingseksamen 1 (11.2) | Moderne ordinær (H2021–H2025) | Lagrange-nyttemaks m/omhyllingsteorem + endimensjonal drøfting m/hjørneløsning + nivåkurve |
| Øvingseksamen 2 (11.3) | Moderne ordinær, annen miks | Lagrange-kostnadsmin + fri tovariabel-optimering (Hesse) + differensial/elastisitet |
| Øvingseksamen 3 (11.4) | Utsatt-profil (produsentorientert) | CES-kostnadsmin m/$\sigma$ + profittmaks m/komparativ statikk + $n$-variabel Lagrange m/symmetri |

Alle tre har fast dramaturgi: Oppg. 1 = P1, Oppg. 2 = SU (fem påstander med
begrunnelse), Oppg. 3–5 = storoppgaver. Til sammen dekker øvingseksamenene P1, SU, LG,
FD, NK, HD, DA, EL, PR, HG, OM; de tre lavfrekvente beredskapssjangrene IN, IT, SR dekkes
av sant/usant-stordrillen (11.1) og Del 10-prøvene.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (3 timer, 5 oppgaver, 100 p likt fordelt per delpunkt), den faste dramaturgien (P1 → SU → tre storoppgaver), formathistorikken (V2018 gammelt, H2020–H2025 stabil mal) og prognosen (fra kap. 0.1).
2. **Prioriteringskartet** — temafrekvens-tabellen omgjort til tre lesenivåer: **perfekt** (partiellderivasjon, sant/usant, Lagrange, endimensjonal drøfting, nivåkurve, differensial/approksimasjon), **kunne** (fri optimering + Hesse, elastisitet, homogenitet/Euler, produsentteori), **kjenne** (inverse, integrasjon, serier). Med fraværsbildet uttrykt (matriser, diff-likninger, integrasjonsteknikk, Taylor, komplekse tall = 0/16, la ligge).
3. **Sjangerguiden** — oppgavetypene P1, SU, LG, FD, NK, HD, PR med løsningsoppskriftene fra drillkapitlene (1.6, 4.5, 8.5, 9.3, 11.1) i kortform: metodevalg-treet for Oppg. 1, sant/usant-malen (konklusjon + begrunnelse), Lagrange-algoritmen (oppsett → eliminér $\lambda$ → etterspørsel → omhyllingsteorem), drøftingsalgoritmen ($f'$/$f''$ → klassifiser → rand → skisse), Hesse-algoritmen, nivåkurve-algoritmen.
4. **De tre strenge fallgruvene** — egen seksjon (karakterskillet): (a) hjørne-/randløsning via definisjonsområde + fortegn på $f'$, ALDRI tallsjekk; (b) minimum av $x^4$ via global konveksitet, ALDRI $f''(0)=0$; (c) klassifisering under bibetingelse ved funksjonsverdisammenligning, ALDRI rand-Hessian (ikke pensum). Hver med det korrekte argumentet og henvisning til kapitlet (4.3, 4.2, 8.4).
5. **Sensorreglene** — de seks metareglene (begrunnelse kreves der oppgaven ber om det — ubegrunnet ja/nei = 0; forståelse/fremgangsmåte foran svar; ingen trekk for følgefeil; åpenbar forenkling for full uttelling; flere ekvivalente former godtas; poeng likt fordelt) + de fagspesifikke strenge punktene (tilbakesubstitusjon i multivariabel kjerneregel; logaritmisk derivasjon som forventet metode; omhyllingsteoremet brukes direkte; symmetri begrunnes; husk $y=y(x)$).
6. **Feilkatalogen** — de tolv typiske feilene fra sensorveiledningene samlet (tallsjekk av randløsning; $f''=0$-fellen; glemt $y=y(x)$; utelatt ledd i differensial; ikke tilbakesubstituert; ikke sjekket definisjonsområde; vendepunkt uten fortegnsskifte; stasjonær vs. ekstrem; ubegrunnet ja/nei; ubegrunnete fortegnsintervaller; rot utenfor definisjonsområdet i Lagrange; fortegnsfeil i CES/kvotient), hver med henvisning til kapitlet som forebygger den.
7. **Formelark i emnets notasjon** — én side: partiellderivasjon og logaritmisk derivasjon; $df=f'_x\,dx+f'_y\,dy$ og lineær approksimasjon; $\mathrm{El}_x f=\frac{x}{f}f'$ med regnereglene; $f(tx,ty)=t^k f$ og Euler $xf'_x+yf'_y=kf$; nivåkurvehelning $y'=-F'_x/F'_y$; Hesse $D=f''_{xx}f''_{yy}-(f''_{xy})^2$; Lagrange $L=F-\lambda(g-m)$, FOB, MRS = prisforhold, omhyllingsteoremet $dV/da=\partial L^*/\partial a$; $g'(y)=1/f'(x)$; $\int x^n\,dx$, $\frac{a}{1-r}$ ($|r|<1$) — med markering av hva som skal *utledes/begrunnes* (helningsformelen, kjerneregel for elastisiteter, Euler) vs. kun *brukes* (omhyllingsteoremet, $\sigma=1/(\gamma-1)$).
8. **Studieløp** — anbefalt progresjon (10-ukers og 3-ukers intensivvariant): Del 0 → 1 (mekaniser Oppg. 1) → 3 → 4 → 5 → 8 (perfekt-kjernen), deretter 2 → 6 → 7 → 9 (kunne), så 10 (kjenne), til slutt sant/usant-stordrillen (11.1) og de tre øvingseksamenene under tidspress (180 min med jevnt tidsbudsjett per delpunkt). Terp prøvene og drillkapitlene — det er sjangergjenkjenning som gir poenggulvet.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `econ1100` med alle 38 kapitler + 10 prøvekapitler (id/number/title/description/estimatedMinutes/topics/competenceGoals/prerequisites/linkedChapterId) etter mønster `COURSE_BI_OKONOMI` i `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra makrostruktur-tabellen (§2). **`number` er del-basert** («8.2», aldri lineær) — bokforsiden grupperer på `number.split('.')[0]`.
2. **Del 0** (kap. 0.1) — etablerer sjangerkodene P1–SR, frekvenstallene og de tre fallgruvene som resten refererer til.
3. **Perfekt-kjernen i avhengighetsrekkefølge**: Del 1 (partiellderivasjon — Oppg. 1) → Del 3 (differensial) → Del 4 (funksjonsdrøfting) → Del 5 (nivåkurve) → Del 8 (Lagrange). Bygg gjerne én agent per hel del; Del 1, 4 og 8 (6/5/5 kapitler) kan splittes, men gi begge agentene HELE delens kontrakter.
4. Del 2 (elastisitet) → Del 6 (fri optimering) → Del 7 (homogenitet) → Del 9 (produsentteori) → Del 10 (beredskap).
5. Del 11 til slutt (sant/usant-stordrillen og øvingseksamenene gjenbruker alle temaene; øvingseksamen-agenten leser HELE skjelettet).
6. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som kapitlene ferdigstilles; prøvene (§4) legges i prøvekapitler per del etter byggekontraktens spesifikasjon.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse` (generer helst via `json.dump`; escape `"` i norske sitattegn); `npm run build` grønn.
- [ ] **LaTeX**: alle formler i `$...$`/`$$...$$` med dobbel backslash i JSON (`\\frac`, `\\lambda`, `\\partial`); ingen unicode-brøker; konsistent $f'_x$, $f''_{xy}$, $\mathrm{El}_x f$, $\lambda$, $x^*$, $D$, $y'=-F'_x/F'_y$.
- [ ] **Notasjonskonsistens**: tekstsøk over alle econ1100-filer. Forbudte termer: matrise-/vektor-notasjon i optimering (rand-Hessian, «bordered Hessian»), «andreordensbetingelse under bibetingelse» som noe *studenten skal bruke* (den er IKKE pensum — skal kun omtales som ikke-pensum i 8.4), Taylor-/rekkeutvikling utenfor Del 10-serier, differensiallikninger, komplekse tall. Påkrevd/standard: $f'_x$/$\partial$, $\mathrm{El}_x f$, $L$, $\lambda$, $x^*$, FOB, «MRS = prisforhold», $D=f''_{xx}f''_{yy}-(f''_{xy})^2$.
- [ ] **De tre fallgruvene med warning**: kap. 4.3 (hjørneløsning via definisjonsområde, ALDRI tallsjekk), kap. 4.2 ($x^4$-minimum via global konveksitet, ALDRI $f''(0)=0$), kap. 8.4 (klassifisering under bibetingelse ved funksjonsverdisammenligning, ALDRI rand-Hessian) har hver en eksplisitt `warning`-blokk med det korrekte argumentet.
- [ ] **Begrunnelse er alt**: hvert løsningsforslag på en sant/usant- eller «begrunn»-oppgave viser utregning/argument, aldri bare konklusjon; kap. 11.1 driller alle tolv påstandstyper med begrunnelse.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra dette skjelettet), Forkunnskaper-blokk med kryssbok-lenker (R1/R2/S2 der angitt) + Symbol- og formelliste-`collapsible` (per delkapittel), Motivasjon-`text`, definisjoner/teoremer i emnets notasjon, Utledning-med-intuisjon der eksamen krever aktiv utledning (helningsformelen 5.1, kjerneregel for elastisiteter 2.2, Euler 7.2), Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå), 6–12 øvinger med `solution` + `hints`, repetisjons-`collapsible`; drillkapitler har løsningsoppskrift + sensor-kommentert case + 8–15 oppgaver.
- [ ] **Quiz-sum ≥ 541 og flashcard-sum ≥ 504** per kvotetabellen (kontrollsummér mot §3-tabellen — den er autoritativ).
- [ ] **Prøver**: 4 per temadel 1–10 (40 stk) + 3 øvingseksamener; settene og prøvene dekker samlet sjangrene P1, SU, LG, FD, NK, HD, PR, DA, EL, HG, OM, HR, IN, IT, SR minst én gang.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, egen innramming (klima/energi/konsum/produksjon), egne formuleringer; ingen oppgavetekster eller sensorformuleringer gjengitt ordrett (skjelettets mønstereksempler er selv omskrivninger og skal varieres videre); kalibreringsverdiene fra reelle fasiter brukes kun til å velge vanskelighetsgrad, aldri som oppgavetall; standardteoremer og matematiske uttrykk er faglig allemannseie.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter (200 + kapittelspesifikk streng), jf. lærdommen om `getChapterMeta`.

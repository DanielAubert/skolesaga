# Bokskjelett: TMA4195 Matematisk modellering (NTNU) — eksamensrettet lærebok

> **LÆRINGSLØKKE-KONTRAKT (ufravikelig, produkteier 9. juli 2026):** Ved bygging
> struktureres HVERT kapittels `content[]` som gjentatte små løkker
> **Teori → Eksempel → Oppgave** — `exercise`-blokker INLINE rett etter
> teorien/eksempelet de trener, aldri all teori øverst med oppgavene samlet
> nederst. Ingen oppgave får kreve en metode, formel eller et begrep som ikke er
> dekket tidligere i kapitlet eller i eksplisitt refererte forkunnskaper (flytt
> teoribiten tidligere ved behov). Autoritativ kilde: README «Leserkrav» +
> `DNA-regnefag.md`. Unntak: øvingseksamen-/prøvekapitler følger sin egen
> arketype (komplett sett først, løsninger i collapsibles). Kvotene og
> innholdskontraktene i dette skjelettet er uendret — løkka styrer REKKEFØLGEN.

> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE eksamensarkivet —
> alt eksamensbelegg som trengs står i dette skjelettet, destillert fra
> `EKSAMENSANALYSE.md` (NTNU-arkivet **H2005–H2023**: 34 filer / **20 velkarakteriserte
> sett**; sju nyeste sett — 2017–2023 — lest oppgave for oppgave med offisielle
> løsningsforslag, resten skummet). Alle oppgaver, modeller og talleksempler i boka
> skal være NYSKREVNE (se §6). Metodenavn (Buckingham pi, Rankine–Hugoniot, Darcys
> lov, Jacobi-matrise osv.), teoremer og standard fagnotasjon er ikke opphavsrettslig
> beskyttet og brukes fritt.
>
> **Matematisk presisjon er kritisk.** Fortegns-, entydighets- og «alltid stabil/
> ustabil»-påstander parametersjekkes numerisk (python3) i modellens fulle
> parameterrom FØR de påstås ubetinget (DNA-regnefag «Matematisk sannhetskontroll»);
> er påstanden betinget, skrives betingelsen ut. Alt forfatteren er usikker på merkes
> `(verifiser)` for fagfellesjekk i fase 6. All matematikk i LaTeX (`$...$` / `$$...$$`).
>
> **Statusverifisering (utført 2026-07-11 mot ntnu.no/studier/emner/TMA4195):**
> TMA4195 «Matematisk modellering» (**7,5 studiepoeng**) er **AKTIVT** — undervises
> høst 2026 med skoleeksamen 23. november 2026, emneansvarlig Jacob Goodman, Institutt
> for matematiske fag. Ingen etterfølger-/nedleggelsesmerknad; eneste registrerte
> forgjenger med faglig overlapp er det gamle **SIF5036** (7,5 sp). Emnet bygges derfor
> som ordinært skjelett mot gjeldende TMA4195. (TMA-serien er ellers hardt rammet av
> NTNUs matematikkreform — dette emnet er blant de overlevende.) `(verifiser)` beholdes
> på statuslinja fordi status kan endres mellom studieår.
>
> **Kildeforbehold (settes i Del 0, gjentas i øvingseksamenene):** Prosjektdelen
> (25 % av karakteren) er IKKE representert i arkivet — ingen prosjektoppgavetekster,
> rapporter eller sensorveiledninger. Alt om prosjektet i boka er utledet indirekte
> fra skoleeksamenens ferdighetsprofil og emnets kjente struktur, og merkes
> `(verifiser)`. Frekvenstallene gjelder «per H2005–H2023-arkivet».

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `tma4195` |
| Tittel | **TMA4195 Matematisk modellering (NTNU) — eksamensrettet** |
| Level | `'Høyskole'` |
| Institusjon (navigasjon) | NTNU. Visningsnavn i `institusjoner.ts`: «TMA4195 Matematisk modellering». |
| Arketype | **Regnefag** (`DNA-regnefag.md`) — utlednings- og modelloppgaver med (nesten) entydige metodesvar; sterkt gjentatte oppgavemønstre → målrettet drill. Nærmeste forbilder i systemet: `tma4135` / `tma4121` (NTNU-anvendt matematikk-mal) for makrostruktur og øvingseksamen-oppsett. |
| Antall kapitler | **34** (Del 0: 2 · temadeler 1–7: 26 · eksamenstrening Del 8: 6) |
| Estimert totaltid | **~2 010 min ≈ 33,5 timer** (per kapittel under) |
| Quiz totalt | **538** (krav ≥500) |
| Flashcards totalt | **560** (krav ≥500) |

**Pitch (ett avsnitt):** TMA4195-eksamen er blant de mest forutsigbare settene i hele
høyskolearkivet — i Wessel-Berg-årene (2019–2023) er selve oppgaverekkefølgen nesten
liturgisk. 4 timers skriftlig skoleeksamen, **på engelsk** (kandidaten kan svare på
norsk eller engelsk), hjelpemiddelkode **C** (godkjent enkel kalkulator; Rottmann var
tillatt t.o.m. 2019, deretter ingen formelsamling). **Ingen flervalgsdel.** Nesten alle
svar skal begrunnes med mellomregning — bar fasit gir ikke full uttelling. **Seks søyler
dekker ≈ 90 % av poengene på et typisk sett:** (1) **dimensjonsanalyse / Buckingham pi**
(≈100 %, nesten alltid O1), (2) **skalering til dimensjonsløs form** (≈100 %, den usynlige
limveven i praktisk talt hver oppgave), (3) **likevektspunkter + stabilitet for et 2×2
autonomt system** via Jacobi, spor og determinant (≈95 %, nesten alltid O2 — «gratis»
poeng), (4) **singulær perturbasjon / grenselag** med ytre–indre–matching–uniform
(≈89 %, nesten alltid O3), (5) **bevaringslov → karakteristikker → sjokk/fortynningsvifte**
med Rankine–Hugoniot (≈84 %), og (6) **utledning av en PDE-modell fra bevaringslov +
Darcy/Fick** for porøst medium/CO₂-lagring (≈79 %, den tunge sluttoppgaven). Boka er bygd
baklengs fra det sensor faktisk premierer: **eksplisitt dimensjonsmatrise med rang-argument**,
**klassifisering via spor og determinant**, **komplett grenselags-koreografi inkl.
begrunnet valg av $\delta$ og matching**, **bevaringslov utledet fra integralform**, og
**skalaer begrunnet ved balansering av ledd**. **VIKTIG:** til tross for at
variasjonsregning/Fourier/numerikk ofte listes i modelleringsemner, forekommer de
**ALDRI** (0/19) i arkivet — dette er et rent kontinuerlig-modellerings-emne, ikke
TMA4135-typen.

**Kritisk plattformbetingelse (gjelder HELE boka) — figur-/tekstnotasjon:** Faget er
gjennomgående grafisk (karakteristikkdiagrammer, faseplan, bifurkasjonsdiagrammer,
grenselagsprofiler). Plattformen kan rendre **statiske SVG-figurer** (jf. DNA-regnefag
«Figurkrav») — og eksamen KREVER grafisk analyse (tegn karakteristikker, tegn
bifurkasjonsgrener, skisser grenselagsprofil). **Derfor er SVG-figurer OBLIGATORISK** i
de grafiske kapitlene: minst (a) et **karakteristikkdiagram** med kolliderende linjer →
sjokk og et med spredende linjer → fortynningsvifte (Del 5), (b) et **bifurkasjonsdiagram**
med heltrukne (stabile) og stiplede (ustabile) grener (kap. 3.4), (c) en **grenselagsprofil**
(ytre + indre + uniform løsning på samme akse, kap. 4.2/4.3), og (d) et **faseplan/
klassifikasjonskart** i $(\operatorname{tr}J,\det J)$-planet (kap. 3.2). Filer:
`public/images/textbook/tma4195/<navn>.svg`, wiret som image-blokker der analysen står;
etter skriving kjøres `npx tsx scripts/upload-media-storage.ts`. Prosabeskrivelse beholdes
som forklaring TIL figuren, aldri i stedet for den.

**Kritisk hjelpemiddel-regel (gjelder HELE boka):** Hjelpemiddelkode **C** = **godkjent
enkel kalkulator og ingenting annet** fra 2020 (Rottmann matematisk formelsamling var
tillatt t.o.m. 2019, men er ikke lenger nevnt). Kandidaten får **ingen formelsamling**:
Buckingham-apparatet, Jacobi-klassifikasjonen, grenselags-koreografien, Rankine–Hugoniot
og Darcy/Fick må sitte i hodet. Dette styrer boka mot **automatiserte hoderutiner** framfor
oppslag — flashcard-profilen (560) speiler dette.

**Kritisk notasjonsregel (emnets faste apparat):** **Dimensjonsanalyse:** grunnenheter
$[m],[s],[kg],[K]$; dimensjonsmatrise (rader = grunnenheter, kolonner = variabler); rang
$r$; $n-r$ uavhengige $\pi$-grupper. **Dynamiske systemer:** Jacobi $J=\partial(f,g)/\partial(u,v)$,
$\det J=\lambda_1\lambda_2$, $\operatorname{tr}J=\lambda_1+\lambda_2$. **Perturbasjon:**
liten parameter $\varepsilon\ll 1$; grenselagsvariabel $\xi=x/\delta$; ytre/indre/uniform.
**Bevaringslover:** $u_t+J(u)_x=0$; karakteristikk $\dot x=J'(u_0)$; Rankine–Hugoniot
$U=[J]/[u]$. **Konstitutive lover:** Darcy $q=-(k/\mu)(\nabla p-\rho g)$, Fick
$j=-\varphi D\nabla C$, ideell gass $p=\rho RT$. All matematikk i LaTeX.

**Bevisst nedprioritert (begrunnes i Del 0):** **variasjonsregning / Euler–Lagrange /
funksjonaler** (0/19 — kun kort orientering om at det IKKE testes), **Fourier-metoder /
separasjon av variable** (0/19), **numeriske metoder** (0/19). Disse skal IKKE bygges tungt
på; ett kort orienteringsavsnitt i Del 0 rammer inn at de ikke er en del av dette emnet.
Lavfrekvent, men forekommet: Lyapunov-funksjon (kun 2015), lineært transportsystem via
diagonalisering (kun 2022), «intermediate asymptotics» (kun 2017), skalamodell-testing /
Froude–Reynolds (eldre sett) — samlet i ett beredskapskapittel (Del 8).

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regnefag-regelen), IKKE frekvens: **dimensjons-
analyse og skalering** (grunnverktøyene i praktisk talt hver oppgave) først; deretter
**dynamiske systemer** (likevekt/stabilitet/bifurkasjon/populasjon); så **perturbasjon**
(regulær før singulær); så **bevaringslover** (karakteristikker → sjokk/vifte); deretter den
tunge **PDE-modelloppsett-delen** (Darcy/Fick, porøst medium) som forutsetter alt over; så
**modelloppsett fra bunn + prosjektkompetanse**; til slutt **beredskap** og
**eksamenstrening**. Frekvensen styrer *omfanget*: de seks søylene får hver sin del med
teori- **og** drillkapittel og høyest kvote; lavfrekvent stoff får ett kompakt kapittel.

| Del | Tittel | Kap. | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart og modelleringshåndverk | 2 | perfekt (meta) | Formen (4 t, engelsk, kode C, ingen flervalg, prosjekt 25 %), de seks søylene, temafrekvensene, sensorkravene, kildeforbeholdet og «hva som IKKE testes» (variasjonsregning/Fourier/numerikk) må etableres FØR fagstoffet. Skaleringshåndverket (kap. 0.2) er unikt kritisk fordi «skaler dette til dimensjonsløs form» går igjen i hver eneste oppgave. |
| 1 | Dimensjonsanalyse og Buckingham pi | 4 | perfekt (≈100 %, O1) | Dimensjonsmatrise, rang, kjernevariabler, $\pi$-grupper, isolér ønsket variabel; kjente dimensjonsløse tall (Re, Froude, Péclet); + drillkapittel. Den nesten sikre O1. |
| 2 | Skalering til dimensjonsløs form | 3 | perfekt (≈100 %, gjennomgripende) | Balanser ledd → tids-/lengdeskala; flere tidsskalaer + fysisk tolkning; dimensjonsløse konstanter som forhold mellom tidsskalaer ($\varepsilon\ll1$ motiverer perturbasjon); + drillkapittel. Den ferdigheten flest undervurderer. |
| 3 | Dynamiske systemer: likevekt, stabilitet, bifurkasjon, populasjon | 5 | perfekt (≈95 %, O2) | Likevektspunkter + Jacobi + spor/determinant-klassifikasjon (den «gratis» O2); faseplan; bifurkasjonsdiagram (58 %); populasjonsdynamikk logistisk/Lotka–Volterra (58 %); + drillkapittel. |
| 4 | Perturbasjonsmetoder | 4 | perfekt (≈89 %, O3) | Regulær perturbasjon (47 %) FØR singulær; singulær/grenselag full koreografi ytre→indre→matching→uniform (89 %, O3); + drillkapittel. Den faste O3-koreografien. |
| 5 | Bevaringslover, karakteristikker og sjokk | 4 | perfekt (≈84 %) | Utled $u_t+J(u)_x=0$ fra integralform; karakteristikkmetoden; sjokk (Rankine–Hugoniot) vs. fortynningsvifte; sjokkbane-ODE med integrerende faktor; trafikk-/tofase-modeller; + drillkapittel. |
| 6 | PDE-modelloppsett: bevaringslov + Darcy/Fick | 3 | kunne→perfekt (≈79 %, sluttoppgaven) | Massebevaring over $[a,b]$/$B_r$ → differensialform; Darcys lov + Ficks lov + ideell gass; porøst medium / CO₂-lagring / gass-injeksjon; skalering + $\varepsilon$-perturbasjon av PDE-en. Den store poengbanken OG den store fellen. |
| 7 | Modelloppsett fra bunn og prosjektkompetanse | 2 | kunne (prosjekt 25 % + økende på eksamen) | Hele modelleringssyklusen: fenomen → antakelser → ODE/PDE → skalér → analyser → tolk → skriv. Speiler prosjektdelen «i byggeretning». Reservoar-/porøsmedium-mal. |
| 8 | Beredskap og eksamenstrening | 6 | perfekt (meta) + kjenne (lavfrekvent) | Ett beredskapskapittel (Lyapunov 2015, lineært transportsystem 2022, intermediate asymptotics 2017, skalamodell/Froude–Reynolds) + sjangerspill (løsningsoppskrifter A–I) + **3 komplette øvingseksamener** i Wessel-Berg-malen med full modellsvar-fasit. |

Rasjonale: de seks søylene (dimensjonsanalyse, skalering, likevekt/stabilitet, singulær
perturbasjon, bevaringslov/karakteristikker, PDE-modelloppsett) får hver sin del med
drillkapittel og høyest kvote fordi de bærer ≈90 % av poengene; lavfrekvent stoff får ett
beredskapskapittel. Det tunge PDE-modelloppsettet (Del 6) og modelloppsett fra bunn (Del 7)
er der sterke og svake kandidater skiller lag — og der prosjektkompetansen bygges.

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart og modelleringshåndverk |
| 1 | Dimensjonsanalyse og Buckingham pi |
| 2 | Skalering til dimensjonsløs form |
| 3 | Dynamiske systemer: likevekt, stabilitet, bifurkasjon |
| 4 | Perturbasjonsmetoder |
| 5 | Bevaringslover, karakteristikker og sjokk |
| 6 | PDE-modelloppsett: bevaringslov og Darcy/Fick |
| 7 | Modelloppsett fra bunn og prosjektkompetanse |
| 8 | Beredskap og eksamenstrening |

### Sjangerkoder (fra analysen §3 — brukes i «Eksamensbelegg» under)

**A** Dimensjonsanalyse med Buckingham pi (sett opp dimensjonsmatrise, finn rang via
undermatrise, velg kjernevariabler, uttrykk $\pi$-grupper, isolér ønsket variabel; ≈100 %,
nesten alltid O1) · **B** Likevekt og stabilitet for 2×2 autonomt system (finn likevektspunkter,
Jacobi, klassifiser via $\det J$ og $\operatorname{tr}J$; ≈95 %, nesten alltid O2) · **C**
Singulær perturbasjon / grenselag (ytre → indre med begrunnet $\delta$ → matching → uniform;
≈89 %, nesten alltid O3) · **D** Skalering til dimensjonsløs form (sett $x\mapsto Lx$ osv.,
balanser ledd, finn alle tidsskalaer, tolk; ≈100 %, gjennomgripende) · **E** Bevaringslov →
karakteristikker → sjokk/vifte (utled PDE fra integralform, løs med karakteristikker,
Rankine–Hugoniot vs. fortynningsvifte, sjokkbane-ODE; ≈84 %) · **F** Utledning + skalering +
perturbasjon av PDE-modell (massebevaring → Darcy/Fick → skalering → $\varepsilon$-utvikling;
≈79 %, sluttoppgaven) · **G** Bifurkasjonsdiagram (grener $f(\mu,u)=0$, stabilitet fra fortegn
$\partial f/\partial u$, fysisk tolkning; ≈58 %) · **H** Populasjonsdynamikk (logistisk vekst,
Lotka–Volterra: forklar konstanter, skalér, lineariser; ≈58 %) · **I** Regulær perturbasjon
(potensrekke i $\varepsilon$, orden-for-orden, ingen grenselag; ≈47 %). *(Beredskap: Lyapunov-
funksjon, lineært transportsystem via diagonalisering, intermediate asymptotics, skalamodell-
testing — lavt vektet, ett kapittel.)*

### Sensorkrav (fra analysen §4 — etableres i Del 0, refereres i hvert kapittel)

1. **Begrunn alt; vis nok mellomregning.** Bar fasit gir ikke full uttelling; fasitene er
   detaljerte og forventer samme nivå.
2. **Dimensjonsmatrisen skal vises eksplisitt** i Buckingham-oppgaver, med et rang-argument
   (konkret undermatrise med determinant $\neq 0$). Å «gjette» $\pi$-gruppene uten å begrunne
   dimensjonsløsheten holder ikke.
3. **Klassifiser stabilitet via spor og determinant** — fasiten bruker konsekvent fortegnet
   til $\det J$ og $\operatorname{tr}J$, ikke full egenverdiutregning med mindre nødvendig.
4. **Grenselags-koreografien skal være komplett:** ytre + indre + eksplisitt **valg og
   begrunnelse av $\delta$** (hvilke ledd balanserer) + **matching-betingelse** + uniform
   løsning. Å hoppe over matching er en klassisk poengtapper.
5. **Skalaer skal begrunnes ved balansering av ledd**, ikke postuleres. Der det finnes flere
   tidsskalaer, skal alle nevnes og tolkes fysisk.
6. **Bevaringsloven skal utledes fra integralform** (masse over $[a,b]$ eller $B_r$), ikke bare
   skrives på differensialform; divergensteorem / grensen $b\to a$ skal vises.
7. **Rankine–Hugoniot og skillet sjokk vs. vifte** begrunnes ut fra karakteristikkenes
   oppførsel (kolliderer ⇒ sjokk; sprer seg ⇒ vifte), ikke gjettes.
8. **Alternative gyldige metoder premieres** (reell vs. kompleks delbrøk; «trial and error»
   vs. lineært system for $\pi$-eksponenter).
9. **Fysisk tolkning teller** — forklar hva parametere, tidsskalaer eller en bifurkasjon
   *betyr* i modellen. Direkte overlapp med prosjektkompetansen.

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

**#1** **Feil kjernevariabel** i Buckingham — særlig å velge den variabelen man vil isolere
(fasiten advarer «do not choose U!»). · **#2** **Falske likevektspunkter** ved å multiplisere
bort en nevner $(1+x)$ og glemme å sjekke at «løsningen» faktisk er gyldig. · **#3** **Feil
$\delta$ i grenselaget** — velge et som balanserer feil ledd, eller ikke begrunne valget (de tre
kandidatene $\delta=\varepsilon$, $\delta=\sqrt\varepsilon$, $\delta=1$ skal vurderes; nesten
alltid $\delta=\varepsilon$). · **#4** **Hoppe over matching** eller bruke feil grenser
($\xi\to\infty$ mot $x\to0$), og glemme å trekke fra den felles grenseverdien i den uniforme
løsningen. · **#5** **Postulere skalaer uten balansering** — eller overse at det finnes flere
tidsskalaer og at $\varepsilon\ll1$ er det som gjør perturbasjonen gyldig. · **#6** **Skrive
bevaringsloven direkte på differensialform** uten å utlede den fra integralform. · **#7**
**Feil fortegn i Rankine–Hugoniot** eller å bruke den når man egentlig har en fortynningsvifte
(og omvendt). · **#8** **Glemme å behandle to tilfeller hver for seg** (f.eks. $a>0$ og $a<0$,
eller tidlige vs. sene tider) i sjokk/vifte-oppgaver — løsningen bytter ofte struktur ved en
kritisk tid. · **#9** **Stoppe perturbasjonen for tidlig** — flere oppgaver krever både $O(1)$-
og $O(\varepsilon)$-leddet, og at man ser at ikke-lineære opprinnelige likninger gir lineære
delproblemer. · **#10** **Glemme fysisk tolkning** når oppgaven ber om det (hva betyr $\mu=1$?
hva representerer $T_F=V/q$?).

### Arketypetilpasning (dokumenterte hybridvalg og avvik)

1. **Rent regnefag, men metode-drevet mer enn tallutledet.** Fasiten er en *utledning* med
   entydig metodevalg (dimensjonsmatrise, Jacobi-klassifikasjon, grenselags-koreografi), ikke
   alltid ett entydig sluttall. Fra DNA-regnefag beholdes makrostrukturen (Del 0 →
   avhengighetsordnede temadeler → eksamenstrening), øvingseksamenene, **drillkapittel for hver
   bærebjelke-sjanger** (1.4, 2.3, 3.5, 4.4, 5.4) og frekvensstyrt vekting. Matematisk
   sannhetskontroll (DNA-regnefag) gjelder fullt: stabilitetsklassifikasjoner og «alltid
   stabil»-påstander parametersjekkes numerisk før de påstås.
2. **Figurkrav aktivt (ikke tekstnotasjon-fag).** I motsetning til KJ1020 KAN og SKAL dette
   faget ha SVG-figurer — karakteristikkdiagram, bifurkasjonsdiagram, grenselagsprofil og
   faseplan-klassifikasjon (§1). Grafisk analyse er en eksplisitt eksamenssjanger.
3. **Prosjektkompetanse som egen del (Del 7).** Fordi prosjektet teller 25 % men ikke finnes i
   arkivet, får modelloppsett fra bunn en egen del — utledet indirekte, merket `(verifiser)`,
   og eksplisitt koblet til de samme seks søylene «i byggeretning».
4. **Flashcards metode-/formel-rike (560).** Fordi eksamen er uten formelsamling, er faget
   flashcard-egnet: **formel↔bruk**-kort (Rankine–Hugoniot; Darcy; Jacobi-klassifikasjonen),
   **prosedyresteg**-kort (grenselags-koreografien i fire steg; Buckingham-algoritmen),
   **begrep**-kort ($\pi$-gruppe, sadelpunkt, transkritisk bifurkasjon, fortynningsvifte),
   **dimensjonsløse tall**-kort (Re, Froude, Péclet). Quiz-profilen driller nabobegrep-
   distraktorer (sjokk/vifte, sadel/stabil node, regulær/singulær perturbasjon, ytre/indre
   løsning, Darcy/Fick, kolliderende/spredende karakteristikker).
5. **Ingen oppdiktede modeller/resultater.** Usikre parametersammenhenger, fortegn og
   sensorpremisser (særlig alt om prosjektdelen) merkes `(verifiser)`.

**Avvik fra prompt-ordningen (dokumentert):** Analysen lister ikke en egen del for «modell-
oppsett fra bunn», men prosjektdelen (25 %) krever nettopp denne kompetansen, så Del 7 er lagt
inn eksplisitt (`(verifiser)`, utledet indirekte). Regulær perturbasjon (47 %) er plassert FØR
singulær (89 %) i Del 4 fordi den er faglig enklere og bygger intuisjonen for orden-for-orden-
utvikling; singulær perturbasjon forutsetter den. Alt annet følger avhengighetsordningen.

### Kapittel-DNA — teori-/mekanismekapittel (flertallet av kapitlene)

Obligatorisk blokk-rekkefølge (plattformens blokktyper), med læringsløkke (§ kontrakt øverst):

1. `tip` **Eksamensvinkel** — frekvens/vekt, hvilke sjangre (A–I) temaet inngår i, hva sensor
   ser etter. Fylles fra skjelettets Eksamensbelegg — forfatteren finner IKKE på frekvenstall.
2. `text` **Forkunnskaper** — kapitler i boka det bygger på + kryssbok-lenker (README-leserkrav).
   I tunge sene kapitler VISES de 2–3 nøkkelformlene ferdig oppfrisket («Sist du var her»), ikke
   bare lenke. `collapsible` **Symbol- og formelliste** (SIST i delkapitlet, åpningsnotis
   «Oppslagsverk — alt her forklares underveis i kapitlet») forklarer ALLE symboler/formler i
   delkapitlet.
3. `text` **Motivasjon** — kort (maks 2–3 avsnitt): hvilket modelleringsspørsmål verktøyet
   besvarer, gjerne med et hverdagsanker (trafikkø, tank som fylles, kule i væske).
4. `definition` / `theorem` — begreper og resultater i EMNETS notasjon (fra eksamenssettene).
   Definition-blokker åpner med forklaringen i ORD; formelen kommer etter. **Toppnivå med
   `title` — flashcard-kilden.**
5. `text` **Utledning med intuisjon** — utledninger eksamen krever aktivt (bevaringslov fra
   integralform, grenselags-matching) vises steg for steg med «Intuisjon:»-linje etter hvert
   steg; resultater som bare skal *brukes* presenteres uten utledning (merk skillet).
6. `example` × 2–4 — første enkelt, siste på EKSAMENSNIVÅ og modellert på en reell sjanger (A–I).
   Løsningen skrives som en toppbesvarelse, med figurbeskrivelse der sensor forventer figur
   (karakteristikkdiagram, bifurkasjonsdiagram).
7. `warning` **Typiske feil** — feilkodene (#1–#10) som gjelder temaet.
8. `exercise` × 6–12 — stigende: 2–3 innøving (lett), 2–4 standard (middels), 2–4 eksamensklone
   (vanskelig, samme sjanger/vekt, nyskrevne tall/kontekst). Alle med `solution` + `hints`
   (første hint = formelen/første grep, aldri konklusjonen). Hver oppgave sjangermerket (A–I).
9. `collapsible` **Repetisjonsoppgaver** — 4–6 korte oppgaver fra kapitler dette bygger på.

**Læringsløkke per metode (UFRAVIKELIG):** Blokkene 4–8 veksler i løkker — metode/formel →
gjennomregnet eksempel → øvingsoppgave(r) INLINE rett etter — til alt stoffet i delkapitlet er
dekket. Ikke all teori øverst med oppgaver samlet nederst.

### Kapittel-DNA — drillkapittel (1.4, 2.3, 3.5, 4.4, 5.4)

1. `tip` **Eksamensvinkel** — hvilke varianter av sjangeren som har forekommet (gjenganger-
   oppgavene: Stokes–Einstein-Buckingham, logistisk/Lotka–Volterra-Jacobi, $\varepsilon y''+...$-
   grenselag, trafikkfluks-sjokk).
2. `text` **Forkunnskaper** + `collapsible` **Symbol- og formelliste**.
3. `text` **Løsningsoppskrift** — algoritmisk fremgangsmåte for sjangeren (nummererte trinn).
4. `example` **Gjennomregnet eksamenscase** med sensor-margnotater om hva som gir uttelling.
5. `warning` **Typiske feil** (feilkodene for sjangeren).
6. `exercise` × 8–15 varianter på eksamensnivå, alle med `solution` + `hints`.

Eksamenstreningskapitlene (Del 8) har egne oppsett — se §3 og §4.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = frekvens/vekt + sjangerkoder (A–I) + prioritetsklasse
> (perfekt/kunne/kjenne/grunnlag/meta), alt «per H2005–H2023-arkivet». **Innholdskontrakt** =
> definisjoner/teoremer/utledninger som SKAL med (utledes aktivt vs. kun brukes). **Kvote** =
> quiz/flashcards. Kryssbok-lenker peker på eksisterende matematikk-kapitler `(verifiser lenke)`.

### Del 0 — Eksamenskart og modelleringshåndverk *(prioritet: PERFEKT (meta))*

#### Kapittel 0.1: Eksamenskartet — slik testes TMA4195
**id:** `tma4195-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Eksamensformen (4 t skriftlig, engelsk, kode C, ingen flervalg, prosjekt 25 %),
  de seks søylene, temafrekvenstabellen, sensorkravene, kildeforbeholdet og «hva som IKKE testes»
  (variasjonsregning/Fourier/numerikk) — verktøyet som styrer hele boka.
- **Eksamensbelegg:** Metakapittel (hele arkivet H2005–H2023). Skal formidle: (a) **formen** —
  4 t skriftlig skoleeksamen, engelsk (svar på norsk/engelsk), kode C (kalkulator; Rottmann
  t.o.m. 2019), 5–7 oppgaver, ingen flervalg, samlet karakter = skoleeksamen 75 % + gruppeprosjekt
  25 %; (b) **de seks søylene** med frekvens: dimensjonsanalyse ≈100 % (O1), skalering ≈100 %,
  likevekt/stabilitet ≈95 % (O2), singulær perturbasjon ≈89 % (O3), bevaringslov/karakteristikker
  ≈84 %, PDE-modelloppsett ≈79 %; (c) **temafrekvenstabellen** (analysen §2); (d) **sensorkravene**
  (§2, de ni); (e) **kildeforbeholdet** — prosjektdelen ikke i arkivet, alt om prosjekt utledet
  `(verifiser)`; (f) **den liturgiske oppgaverekkefølgen** i Wessel-Berg-årene (O1 dim.analyse,
  O2 likevekt/stabilitet, O3 singulær pert., O4 skalering/bifurkasjon, O5 bevaringslov, O6–O7 PDE);
  (g) **hva som IKKE testes** — variasjonsregning/Euler–Lagrange, Fourier/separasjon av variable,
  numerikk (alle 0/19). Prioritet: perfekt (meta).
- **Innholdskontrakt:** Sjangerkatalogen A–I som studentens sjekkliste med frekvens per sjanger;
  prognosen for neste sett (nesten sikkert: én Buckingham-O1, én likevekt/stabilitet-O2, én
  grenselags-O3, minst én skalering, én bevaringslov/karakteristikk, og en tung PDE-sluttoppgave
  om porøst medium). **Slik leser du denne boka**-boks (type `tip`, IKKE definition): forklarer
  karakterskala A–F, at C er en god og vanlig karakter, at oppgavekodene A–I glosses ved første
  bruk, og rammer tunge symboler ($\pi$-grupper, $\operatorname{tr}J$, $\xi=x/\delta$, $[J]/[u]$)
  med «du trenger ikke forstå disse ennå». **«Lite tid?»-boks** (type `tip`): 3–5-dagers hurtigrute
  (Del 0 → 1 → 2 → 3 → 4 → 5, hopp Del 6/7 sist) med timeanslag fra `estimatedMinutes`, og eksplisitt
  at anslagene er LESEtid (×1,5 ved håndregning). **Kildenote** for frekvensempirien (H2005–H2023,
  20 sett; sju nyeste lest oppgave for oppgave; prosjektdelen mangler). **Deltidsrute** (10–12 uker,
  ~8 t/uke) med de tre øvingseksamenene fordelt på tre søndager. **«Lese mye, skrive lite»-boks**.
  Ingen forkunnskapsblokk (metakapittel).
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt en 4-timers mal
  med 5–7 oppgaver — sett opp tidsbudsjett og rekkefølge» og «avgjør av en oppgavetekst hvilken av
  de seks søylene den tester».
- **Typiske feil:** Metafeilene: droppe begrunnelsen (sensorkrav 1); tro at variasjonsregning/
  Fourier testes (gjør det ikke); undervurdere skalering (den usynlige limveven); glemme at
  prosjektet teller 25 % og krever modelloppsett fra bunn.
- **Kvote:** 12 quiz / 12 flashcards (formfakta, de seks søylene, temafrekvens, sensorkravene,
  sjangerkodene, «hva som ikke testes», kildeforbeholdet).

#### Kapittel 0.2: Modelleringshåndverket — skalering og dimensjoner som gjennomgående verktøy
**id:** `tma4195-0-2` · **number:** 0.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4195-0-1`

- **Kapitteltype:** håndverkskapittel (meta — gjennomgående verktøy).
- **Description:** De to ferdighetene som gir poeng på nesten hver oppgave: **dimensjonskontroll**
  (hver ligning må være dimensjonelt konsistent) og **skalering** (bytt til dimensjonsløse
  variabler ved å balansere ledd). Kapitlet etablerer notasjonen og «hoderutinen» resten av boka
  bruker, med **formel-minimum-siden** (samlet oppslagskort).
- **Eksamensbelegg:** Gjennomgående (sjanger A og D på tvers av alle oppgaver; sensorkrav 2 og 5).
  Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 0.1; [Derivasjon](/bok/r2/r2-1-1) `(verifiser lenke)`,
  [Separable differensiallikninger](/bok/r2/r2-6-1) `(verifiser lenke)`. `collapsible`
  **Symbol- og formelliste:** grunnenheter $[m],[s],[kg],[K]$; dimensjonsparentes $[\cdot]$;
  skalasubstitusjon $x=Lx^*$, $t=Tt^*$.
- **Faktakontrakt (flashcard-kilde):** **dimensjonell homogenitet** (hvert ledd samme dimensjon);
  **grunnenheter og avledede enheter** (hastighet $[m\,s^{-1}]$, kraft $[kg\,m\,s^{-2}]$ osv.);
  **dimensjonsløst tall** (forhold uten enhet); **skalering** = skriv fysisk variabel = skala ×
  dimensjonsløs variabel; **balanser ledd** = velg skalaen slik at to (eller flere) ledd får samme
  størrelsesorden; **dimensjonsløs parameter som forhold mellom skalaer** (f.eks. $\varepsilon =
  T_\text{indre}/T_\text{ytre}$); **formel-minimum-siden** (collapsible, printbart oppslagskort):
  Buckingham ($n-r$ $\pi$-grupper), Jacobi-klassifikasjonen ($\det J,\operatorname{tr}J$),
  grenselags-koreografien (4 steg), Rankine–Hugoniot $U=[J]/[u]$, Darcy $q=-(k/\mu)\nabla p$,
  Fick $j=-\varphi D\nabla C$ — hver med én ordlinje + «resten kan du utlede».
- **Utledning med intuisjon:** vis skalering på ett enkelt eksempel (radioaktivt henfall
  $\dot N=-\lambda N$ → dimensjonsløs $n_\tau=-n$ med $\tau=t/(1/\lambda)$): «Intuisjon:
  $1/\lambda$ er den naturlige tidsskalaen — tiden det tar før mengden faller merkbart.»
- **Typiske feil:** #5 (postulere skalaer uten balansering); dimensjonelt inkonsistente ligninger;
  glemme at det ofte finnes FLERE tidsskalaer.
- **Modellsvar:** «En tank med volum $V$ fylles med rate $q$ og lekker proporsjonalt med
  fyllnivået; finn tidsskalaen $T_F=V/q$ ved å balansere ledd og skalér likningen»; «Vis at
  $\rho v L/\mu$ (Reynolds) er dimensjonsløst».
- **Kvote:** 14 quiz / 16 flashcards.

**Prøve-kvote Del 0:** ingen egen prøve (dekkes av øvingseksamenene i Del 8).

### Del 1 — Dimensjonsanalyse og Buckingham pi *(prioritet: PERFEKT — ≈100 %, nesten alltid O1)*

#### Kapittel 1.1: Dimensjoner, enheter og dimensjonell homogenitet
**id:** `tma4195-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** `tma4195-0-2`

- **Kapitteltype:** teorikapittel (grunnlag → perfekt).
- **Description:** Grunnenheter, dimensjonen til avledede størrelser, og prinsippet om dimensjonell
  homogenitet — fundamentet for dimensjonsmatrisen og for all skalering.
- **Eksamensbelegg:** Forutsetning for sjanger A (Buckingham, ≈100 %) og D (skalering). Inngår i
  hver O1. Prioritet: grunnlag/perfekt.
- **Forkunnskaper/kryssbok:** kap. 0.2. `collapsible` **Symbol- og formelliste:** dimensjonsparentes
  $[Q]=M^aL^bT^c\Theta^d$; grunnenheter masse $M$, lengde $L$, tid $T$, temperatur $\Theta$.
- **Faktakontrakt (flashcard-kilde):** **grunndimensjoner** $M,L,T,\Theta$; dimensjonen til
  hastighet $LT^{-1}$, akselerasjon $LT^{-2}$, kraft $MLT^{-2}$, energi $ML^2T^{-2}$, trykk
  $ML^{-1}T^{-2}$, viskositet $ML^{-1}T^{-1}$, Boltzmanns konstant $ML^2T^{-2}\Theta^{-1}$;
  **dimensjonell homogenitet** (alle ledd i en fysisk ligning har samme dimensjon); **argument til
  $\exp,\sin,\ln$ må være dimensjonsløst**.
- **Typiske feil:** blande enhet og dimensjon; feil dimensjon på sammensatte størrelser (viskositet,
  Boltzmann); glemme at eksponent-/logaritme-argument må være dimensjonsløst.
- **Modellsvar:** «Finn dimensjonen til viskositet $\mu$ ut fra Newtons friksjonslov
  $\tau=\mu\,\partial u/\partial y$»; «Avgjør om $E=\tfrac12 mv^2+mgh$ er dimensjonelt homogen».
- **Kvote:** 14 quiz / 16 flashcards.

#### Kapittel 1.2: Dimensjonsmatrisen, rang og antall pi-grupper
**id:** `tma4195-1-2` · **number:** 1.2 · **estimatedMinutes:** 60 · **prerequisites:** `tma4195-1-1`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Å sette opp dimensjonsmatrisen (rader = grunnenheter, kolonner = variabler),
  finne rangen $r$ via en undermatrise med determinant $\neq0$, og fastslå at det finnes $n-r$
  uavhengige dimensjonsløse $\pi$-grupper (Buckinghams $\pi$-teorem).
- **Eksamensbelegg:** Kjernen i sjanger A (≈100 %, O1). Sensorkrav 2: matrisen og rang-argumentet
  skal vises eksplisitt. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.1; [Matriser og determinanter](/bok/tma4110/tma4110-2-1)
  `(verifiser lenke)`, [Rang og lineære likningssystemer](/bok/tma4110/tma4110-2-2)
  `(verifiser lenke)`. `collapsible` **Symbol- og formelliste:** dimensjonsmatrise $D$; rang $r$;
  antall variabler $n$; antall $\pi$-grupper $n-r$.
- **Faktakontrakt (flashcard-kilde):** **dimensjonsmatrise** (kolonne $j$ = eksponentvektoren til
  variabel $j$); **rang** = antall lineært uavhengige rader/kolonner = størrelsen på største
  undermatrise med determinant $\neq0$; **Buckinghams $\pi$-teorem** — $n$ variabler, dimensjonsmatrise
  av rang $r$ ⇒ $n-r$ uavhengige dimensjonsløse $\pi$-grupper, og enhver dimensjonelt konsistent
  relasjon $f(x_1,\dots,x_n)=0$ er ekvivalent med $g(\pi_1,\dots,\pi_{n-r})=0$.
- **Utledning med intuisjon:** vis hvorfor $n-r$ (dimensjonskravet gir $r$ lineære betingelser på
  eksponentene, så $n-r$ frie parametere): «Intuisjon: hver grunnenhet som må kanselleres spiser
  én frihetsgrad.»
- **Typiske feil:** feil rang (glemme å sjekke at undermatrisen faktisk er invertibel); telle
  variabler feil; blande antall grunnenheter med rang (de er ikke alltid like).
- **Modellsvar:** «For variablene $\{D,a,T,\mu,k_B\}$ (diffusjon av kule i væske), sett opp
  dimensjonsmatrisen, vis at rangen er 4 og at det finnes nøyaktig én $\pi$-gruppe».
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 1.3: Kjernevariabler og pi-grupper — isoler den ønskede størrelsen
**id:** `tma4195-1-3` · **number:** 1.3 · **estimatedMinutes:** 60 · **prerequisites:** `tma4195-1-2`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Velge $r$ dimensjonelt uavhengige kjernevariabler, uttrykke de øvrige som
  $\pi$-grupper (ved trial-and-error eller ved å løse et lineært likningssystem for eksponentene),
  og isolere den ønskede størrelsen — inkl. spesialtilfellet med bare én $\pi$-gruppe ($\pi=C$).
- **Eksamensbelegg:** Sluttsteget i sjanger A (≈100 %, O1). Sensorkrav 8: alternative gyldige
  $\pi$-valg premieres. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.2. `collapsible` **Symbol- og formelliste:** kjernevariabel;
  $\pi$-gruppe $\pi_i=x_i\prod_j x_{\text{kjerne},j}^{a_{ij}}$; Reynolds $Re=\rho vL/\mu$.
- **Faktakontrakt (flashcard-kilde):** **kjernevariabler** ($r$ stk., dimensjonelt uavhengige —
  ingen $\pi$-gruppe av dem alene er dimensjonsløs); regel: **velg IKKE variabelen du vil isolere**
  som kjernevariabel (#1); **kjente dimensjonsløse tall** Reynolds $\rho vL/\mu$, Froude
  $v/\sqrt{gL}$, Péclet $vL/D$; **én $\pi$-gruppe** ⇒ $\pi=$ konstant ⇒ eksplisitt formel med én
  ukjent konstant; **$\pi$-valget er ikke unikt** (produkter/potenser av $\pi$-grupper er også
  $\pi$-grupper).
- **Utledning med intuisjon:** vis hvordan eksponentligningssystemet for én $\pi$-gruppe løses:
  «Intuisjon: vi krever at hver grunnenhet får eksponent null i produktet.»
- **Typiske feil:** #1 (velge feil kjernevariabel — særlig den man vil isolere); velge lineært
  avhengige kjernevariabler; glemme at én $\pi$-gruppe gir $\pi=C$ (ikke $\pi=0$).
- **Modellsvar:** «Fortsett fra 1.2-eksemplet: velg $\{a,T,\mu,k_B\}$ som kjerne, uttrykk $D$ som
  $\pi$-gruppe og utled $D=C\,k_BT/(a\mu)$ (Stokes–Einstein-form)»; «Vis at Reynolds er den eneste
  $\pi$-gruppen for kraft på en kule i strømning».
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 1.4: Buckingham-drill
**id:** `tma4195-1-4` · **number:** 1.4 · **estimatedMinutes:** 55 · **prerequisites:** `tma4195-1-3`

- **Kapitteltype:** drillkapittel (perfekt).
- **Description:** Ren mengdetrening på sjanger A i eksamensmalen: fra variabelliste til isolert
  formel, med eksplisitt matrise, rang-argument og kjernevariabelvalg.
- **Eksamensbelegg:** Sjanger A (≈100 %, O1). Gjengangere: Stokes–Einstein (diffusjon av kule),
  pendel-periode, bølgehastighet, kraft på kule (Reynolds), skalamodell (Froude). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.1–1.3. `collapsible` **Symbol- og formelliste:**
  Buckingham-algoritmen i kortform.
- **Løsningsoppskrift:** (1) list variablene og deres dimensjoner; (2) sett opp dimensjonsmatrisen;
  (3) finn rang $r$ via en $r\times r$-undermatrise med determinant $\neq0$; (4) $n-r$ $\pi$-grupper;
  (5) velg $r$ kjernevariabler (IKKE målet); (6) løs eksponentsystemet for hver $\pi$-gruppe;
  (7) isolér ønsket størrelse; (8) gjenkjenn kjente dimensjonsløse tall.
- **Modellsvar:** «Perioden $\tau$ til en pendel antas å avhenge av lengde $\ell$, masse $m$ og
  $g$; vis at $\tau=C\sqrt{\ell/g}$ og at massen ikke inngår» — med sensor-margnotater om at
  matrisen og rang-argumentet må vises.
- **Typiske feil:** #1; hoppe over matrisen (sensorkrav 2 → poengtrekk); glemme kjente tall.
- **Kvote:** 18 quiz / 12 flashcards.

**Prøve-kvote Del 1:** 4 prøver (1.A dimensjoner + homogenitet · 1.B dimensjonsmatrise + rang +
antall $\pi$-grupper · 1.C kjernevariabler + isolér størrelse · 1.D samlet Buckingham-prøve på
eksamensnivå (full O1)).

### Del 2 — Skalering til dimensjonsløs form *(prioritet: PERFEKT — ≈100 %, gjennomgripende)*

#### Kapittel 2.1: Skaleringsprinsippet — velg skalaer ved å balansere ledd
**id:** `tma4195-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `tma4195-1-3`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Systematisk skalering av en ODE/PDE: sett $x\mapsto Lx$, $t\mapsto Tt$,
  $u\mapsto Uu$ osv., sett inn, og velg skalaene ved å balansere ledd slik at ligningen får ønsket
  dimensjonsløs form.
- **Eksamensbelegg:** Sjanger D (≈100 %, gjennomgripende). Sensorkrav 5: skalaer skal begrunnes ved
  balansering, ikke postuleres. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 0.2, 1.3; [Kjerneregelen](/bok/r2/r2-1-2) `(verifiser lenke)`.
  `collapsible` **Symbol- og formelliste:** skalaer $L,T,U$; dimensjonsløse variabler $x^*,t^*,u^*$;
  kjerneregel $\frac{d}{dt}=\frac{1}{T}\frac{d}{dt^*}$.
- **Faktakontrakt (flashcard-kilde):** **skalasubstitusjon** fysisk = skala × dimensjonsløs;
  **kjerneregel ved skalering** $d/dt=(1/T)\,d/dt^*$; **balansering** = velg skala slik at to ledd
  blir like store; **dimensjonsløs parameter** som blir stående er et forhold mellom skalaer og
  bærer den fysiske informasjonen.
- **Utledning med intuisjon:** skalér den logistiske likningen $\dot N=rN(1-N/K)$ → $\dot n=n(1-n)$
  med $N=Kn$, $t=\tau/r$: «Intuisjon: $K$ er den naturlige størrelsesskalaen og $1/r$ den naturlige
  tidsskalaen — etter skalering står ingen parametere igjen, alt er universelt.»
- **Typiske feil:** #5 (postulere uten balansering); velge skala som gjør feil ledd dominerende;
  regnefeil i kjerneregelen ved skalering.
- **Modellsvar:** «Skalér $m\ddot x=-kx-c\dot x$ til dimensjonsløs form og finn dempingsparameteren»;
  «Skalér en tank som fylles og tømmes, og finn den dimensjonsløse fyllingsraten».
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 2.2: Flere tidsskalaer og fysisk tolkning
**id:** `tma4195-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4195-2-1`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Å identifisere ALLE mulige tids-/lengdeskalaer i en modell, tolke hva hver
  representerer fysisk, og se hvordan en liten dimensjonsløs parameter ($\varepsilon\ll1$ som forhold
  mellom to tidsskalaer) motiverer en påfølgende perturbasjon.
- **Eksamensbelegg:** Sjanger D (≈100 %); direkte forløper til perturbasjon (Del 4) og til PDE-
  skaleringen (Del 6). Sensorkrav 5 + 9 (flere tidsskalaer skal nevnes og tolkes). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.1. `collapsible` **Symbol- og formelliste:** tidsskalaer
  $T_1,T_2$; $\varepsilon=T_\text{rask}/T_\text{treg}$; fyllingstid $T_F=V/q$.
- **Faktakontrakt (flashcard-kilde):** en modell med flere prosesser har **flere kandidat-skalaer**
  (én per prosess); **valget avhenger av hvilken del av oppførselen du studerer** (kort tid vs. lang
  tid); **$\varepsilon\ll1$** = to prosesser med svært ulik hastighet ⇒ singulær perturbasjon
  (Del 4); fysisk tolkning: hver skala er «tiden/lengden det tar før prosess X gjør seg gjeldende».
- **Typiske feil:** #5; oppgi bare én tidsskala når oppgaven ber om alle; ikke tolke $\varepsilon$
  fysisk (#10).
- **Modellsvar:** «Modellen $\dot u=\frac{\beta}{1+v^\gamma}u-\kappa u$, $\dot v=\eta u-\lambda v$
  har to tidsskalaer; skalér med $1/\kappa$, identifiser $\alpha$ og $\varepsilon$, og tolk dem»
  (2019-typen).
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 2.3: Skalerings-drill
**id:** `tma4195-2-3` · **number:** 2.3 · **estimatedMinutes:** 50 · **prerequisites:** `tma4195-2-2`

- **Kapitteltype:** drillkapittel (perfekt).
- **Description:** Mengdetrening på sjanger D: fra dimensjonell modell til dimensjonsløs form med
  begrunnede skalaer og identifiserte/tolkede parametere.
- **Eksamensbelegg:** Sjanger D (≈100 %). Gjengangere: biologisk/kjemisk reaksjonsmodell,
  tank-modell, fjærpendel, enzymkinetikk. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.1–2.2. `collapsible` **Symbol- og formelliste:**
  skaleringsalgoritmen i kortform.
- **Løsningsoppskrift:** (1) list prosessene og deres karakteristiske skalaer; (2) sett inn
  skalasubstitusjoner; (3) balanser de leddene du vil ha $O(1)$; (4) les av de dimensjonsløse
  parameterne; (5) tolk hver fysisk; (6) marker $\varepsilon\ll1$ hvis det motiverer perturbasjon.
- **Modellsvar:** «Skalér Michaelis–Menten-enzymkinetikken og vis at kvasistasjonær-antakelsen
  svarer til en liten $\varepsilon$» — med sensor-margnotater.
- **Typiske feil:** #5; #10; glemme å tolke $\varepsilon$.
- **Kvote:** 16 quiz / 12 flashcards.

**Prøve-kvote Del 2:** 4 prøver (2.A skalering av ODE (balanser ledd) · 2.B flere tidsskalaer +
fysisk tolkning · 2.C skalering av koblet 2×2-system · 2.D samlet skaleringsprøve på eksamensnivå).

### Del 3 — Dynamiske systemer: likevekt, stabilitet, bifurkasjon *(prioritet: PERFEKT — ≈95 %, O2)*

#### Kapittel 3.1: Autonome systemer og likevektspunkter
**id:** `tma4195-3-1` · **number:** 3.1 · **estimatedMinutes:** 50 · **prerequisites:** `tma4195-2-1`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Autonome 2×2-systemer $\dot u=f(u,v)$, $\dot v=g(u,v)$; å finne alle likevektspunkter
  ved $f=g=0$, ofte ved eliminasjon/innsetting — og å unngå falske likevektspunkter.
- **Eksamensbelegg:** Første steg i sjanger B (≈95 %, O2). Feilkode #2 (falske likevektspunkter).
  Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.1; [Likningssystemer](/bok/r2/r2-3-1) `(verifiser lenke)`.
  `collapsible` **Symbol- og formelliste:** autonomt system; likevektspunkt $(u^*,v^*)$; høyreside
  $f,g$.
- **Faktakontrakt (flashcard-kilde):** **autonomt system** (høyresiden avhenger ikke eksplisitt av
  $t$); **likevektspunkt** = punkt der $f=g=0$ (systemet står stille); metode: løs $f=0$ og $g=0$
  simultant, ofte ved å uttrykke én variabel og sette inn; **advarsel:** ikke multipliser bort en
  nevner $(1+u)$ og få falske løsninger — sjekk at hver kandidat faktisk oppfyller begge ligninger.
- **Typiske feil:** #2 (falske likevektspunkter); glemme løsninger; regnefeil i eliminasjonen.
- **Modellsvar:** «Finn alle likevektspunkter for $\dot u=u(1-u)-uv$, $\dot v=v(u-a)$ og sjekk hver
  kandidat».
- **Kvote:** 14 quiz / 14 flashcards.

#### Kapittel 3.2: Linearisering, Jacobi, spor og determinant
**id:** `tma4195-3-2` · **number:** 3.2 · **estimatedMinutes:** 65 · **prerequisites:** `tma4195-3-1`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Jacobi-matrisen i et likevektspunkt, og klassifisering av stabilitet via
  fortegnet til $\det J$ (= produkt av egenverdier) og $\operatorname{tr}J$ (= sum av egenverdier) —
  den «gratis» O2-oppskriften. Inkluderer et $(\operatorname{tr}J,\det J)$-klassifikasjonskart (SVG).
- **Eksamensbelegg:** Kjernen i sjanger B (≈95 %, O2). Sensorkrav 3: klassifiser via spor og
  determinant, ikke full egenverdiutregning. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 3.1; [Partiellderivasjon](/bok/tma4101/tma4101-3-1)
  `(verifiser lenke)`, [Egenverdier](/bok/tma4110/tma4110-5-1) `(verifiser lenke)`. `collapsible`
  **Symbol- og formelliste:** Jacobi $J=\begin{pmatrix}f_u&f_v\\ g_u&g_v\end{pmatrix}$;
  $\det J=\lambda_1\lambda_2$; $\operatorname{tr}J=\lambda_1+\lambda_2$.
- **Faktakontrakt (flashcard-kilde):** **Jacobi-matrise** = matrisen av partiellderiverte av $(f,g)$
  evaluert i likevektspunktet; **$\det J=\lambda_1\lambda_2$**, **$\operatorname{tr}J=\lambda_1+
  \lambda_2$**; **klassifikasjon:** $\det J<0$ ⇒ reelle egenverdier med motsatt fortegn ⇒
  **sadelpunkt (ustabilt)**; $\det J>0$ og $\operatorname{tr}J<0$ ⇒ **asymptotisk stabil**;
  $\det J>0$ og $\operatorname{tr}J>0$ ⇒ **ustabil**; **grensetilfellet** $\operatorname{tr}J=0,
  \det J>0$ ⇒ rent imaginære egenverdier (senter i lineær analyse — konklusjonen kan svikte for det
  ikke-lineære systemet, #2-slektning).
- **Utledning med intuisjon:** utled klassifikasjonen fra egenverdiligningen $\lambda^2-
  \operatorname{tr}J\,\lambda+\det J=0$: «Intuisjon: produktet av røttene er $\det J$, summen er
  $\operatorname{tr}J$ — så fortegnene alene avgjør stabilitet uten å regne røttene.»
  **Matematisk sannhetskontroll:** parametersjekk klassifikasjonsreglene numerisk (python3) før de
  påstås — særlig grensetilfellet der lineær analyse ikke konkluderer.
- **Figur (SVG, obligatorisk):** $(\operatorname{tr}J,\det J)$-klassifikasjonskart —
  parabelen $\operatorname{tr}^2=4\det$, sonene sadel/stabil node/stabil fokus/ustabil/senter.
- **Typiske feil:** #2; regne $\det J$/$\operatorname{tr}J$ i feil punkt; konkludere for senter-
  tilfellet uten forbehold; unødvendig full egenverdiutregning (sensorkrav 3).
- **Modellsvar:** «Klassifiser likevektspunktene for $\dot u=u^3+4u^2+v^3+v-3$, $\dot v=u+v+1$ via
  spor og determinant» (2022-typen).
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 3.3: Populasjonsdynamikk — logistisk vekst og Lotka–Volterra
**id:** `tma4195-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** `tma4195-3-2`

- **Kapitteltype:** teorikapittel (kunne — 58 %).
- **Description:** De faste modelleringsbyggeklossene: logistisk vekstledd $rN(1-N/K)$ og Lotka–
  Volterra-koblingsledd $\pm\beta xy$ — forklar hver konstant fysisk, skalér, finn likevekt,
  lineariser (bruk 3.2), og finn perioden til små svingninger.
- **Eksamensbelegg:** Sjanger H (≈58 %). Ofte kombinert med et lite perturbasjonsledd (høsting,
  sterilt insekt). Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 3.2, 2.1. `collapsible` **Symbol- og formelliste:** logistisk
  $rN(1-N/K)$; Lotka–Volterra $\dot x=\alpha x-\beta xy$, $\dot y=\delta xy-\gamma y$.
- **Faktakontrakt (flashcard-kilde):** **logistisk vekst** $\dot N=rN(1-N/K)$ ($r$ = vekstrate, $K$
  = bæreevne); **Lotka–Volterra** predator–byttedyr ($\alpha$ byttedyrs vekst, $\beta$ predasjon,
  $\delta$ predatorvekst av bytte, $\gamma$ predatordød); indre likevektspunkt; små svingninger med
  periode fra imaginærdelen av egenverdiene ($\operatorname{tr}J=0$ ⇒ senter i den klassiske
  modellen). **Matematisk sannhetskontroll:** «senter»-konklusjonen gjelder den udempede modellen —
  et dempingsledd endrer den (parametersjekk).
- **Typiske feil:** feil fortegn på koblingsledd; blande $r$/$K$; hevde asymptotisk stabilitet der
  det er et senter (#2-slektning); glemme fysisk tolkning (#10).
- **Modellsvar:** «For $\dot x=\alpha x-\beta xy$, $\dot y=\delta xy-\gamma y$: forklar konstantene,
  skalér, lineariser rundt det indre likevektspunktet og finn perioden til de små svingningene»
  (2023-typen).
- **Kvote:** 14 quiz / 14 flashcards.

#### Kapittel 3.4: Bifurkasjonsdiagrammer
**id:** `tma4195-3-4` · **number:** 3.4 · **estimatedMinutes:** 55 · **prerequisites:** `tma4195-3-2`

- **Kapitteltype:** teorikapittel (kunne — 58 %).
- **Description:** Å løse $f(\mu,u)=0$ for likevektsgrenene som funksjon av en parameter $\mu$,
  avgjøre stabilitet på hver gren via fortegnet til $\partial f/\partial u$, og tegne diagrammet
  (heltrukket = stabil, stiplet = ustabil) med fysisk tolkning (transkritisk/sadel-node).
- **Eksamensbelegg:** Sjanger G (≈58 %). Inkluderer SVG-figur (bifurkasjonsdiagram). Prioritet:
  kunne. Sensorkrav 9: fysisk tolkning av bifurkasjonen.
- **Forkunnskaper/kryssbok:** kap. 3.2. `collapsible` **Symbol- og formelliste:** parameter $\mu$;
  likevektsgren $u^*(\mu)$; stabilitet fra $\partial f/\partial u$.
- **Faktakontrakt (flashcard-kilde):** for et **1D-system** $\dot u=f(\mu,u)$: likevektsgrenene er
  $f(\mu,u)=0$; **stabilitet** = fortegnet til $\partial f/\partial u$ på grenen ($<0$ stabil,
  $>0$ ustabil); **transkritisk bifurkasjon** (to grener krysser og bytter stabilitet); **sadel-node**
  (to grener møtes og forsvinner); heltrukket linje = stabil, stiplet = ustabil.
- **Figur (SVG, obligatorisk):** bifurkasjonsdiagram i $(\mu,u)$-planet med heltrukne (stabile) og
  stiplede (ustabile) grener, bifurkasjonspunktet markert.
- **Typiske feil:** feil fortegn på $\partial f/\partial u$; tegne stabil der den er ustabil; glemme
  fysisk tolkning (#10); ufullstendige grener.
- **Modellsvar:** «Tegn bifurkasjonsdiagrammet for $\dot u=(u-\mu)(u^2-\mu)$; heltrukket for stabile,
  stiplet for ustabile grener, og tolk hva som skjer ved $\mu=0$» (2019-typen).
- **Kvote:** 14 quiz / 12 flashcards.

#### Kapittel 3.5: Likevekt- og stabilitets-drill
**id:** `tma4195-3-5` · **number:** 3.5 · **estimatedMinutes:** 55 · **prerequisites:** `tma4195-3-4`

- **Kapitteltype:** drillkapittel (perfekt).
- **Description:** Mengdetrening på sjanger B (og G/H): finn likevektspunkter, sett opp Jacobi,
  klassifiser via spor/determinant — den mest mekaniske og «gratis» O2-poengsummen.
- **Eksamensbelegg:** Sjanger B (≈95 %, O2), G, H. Sensorkrav 3. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 3.1–3.4. `collapsible` **Symbol- og formelliste:**
  likevekt+Jacobi-algoritmen i kortform.
- **Løsningsoppskrift:** (1) løs $f=g=0$ for alle likevektspunkter (sjekk mot falske); (2) regn
  $J$ generelt; (3) evaluer $J$ i hvert punkt; (4) regn $\det J$ og $\operatorname{tr}J$;
  (5) klassifiser (sadel/stabil/ustabil); (6) tolk fysisk.
- **Modellsvar:** «Finn og klassifiser alle likevektspunkter for en gitt 2×2-modell» — med
  sensor-margnotater om at fortegnene til $\det J,\operatorname{tr}J$ er nok (sensorkrav 3).
- **Typiske feil:** #2; feil punkt; senter-forbeholdet; unødvendig egenverdiutregning.
- **Kvote:** 18 quiz / 12 flashcards.

**Prøve-kvote Del 3:** 4 prøver (3.A likevektspunkter (unngå falske) · 3.B Jacobi + spor/determinant-
klassifikasjon · 3.C populasjonsdynamikk (skalér + lineariser + periode) · 3.D bifurkasjonsdiagram +
fysisk tolkning).

### Del 4 — Perturbasjonsmetoder *(prioritet: PERFEKT — ≈89 %, O3)*

#### Kapittel 4.1: Regulær perturbasjon
**id:** `tma4195-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4195-2-2`

- **Kapitteltype:** teorikapittel (kunne — 47 %; forløper for singulær).
- **Description:** Å skrive $y=y_0+\varepsilon y_1+O(\varepsilon^2)$, Taylor-utvikle ikke-lineære
  ledd, sette inn og samle orden-for-orden — brukt når det IKKE er grenselag (ingen høyeste-derivert
  ganget med $\varepsilon$).
- **Eksamensbelegg:** Sjanger I (≈47 %). Bygger intuisjonen for orden-for-orden-utvikling som
  singulær perturbasjon (4.2) forutsetter. Prioritet: kunne. Feilkode #9 (stoppe for tidlig).
- **Forkunnskaper/kryssbok:** kap. 2.2; [Taylor-rekker](/bok/tma4100/tma4100-8-1) `(verifiser lenke)`.
  `collapsible` **Symbol- og formelliste:** liten parameter $\varepsilon$; potensrekke
  $y=\sum_n\varepsilon^n y_n$.
- **Faktakontrakt (flashcard-kilde):** **regulær perturbasjon** = løsningen er en glatt potensrekke i
  $\varepsilon$; sett inn $y=y_0+\varepsilon y_1+\dots$, samle **orden-for-orden** ($O(1)$-problemet
  gir $y_0$, som mater inn i $O(\varepsilon)$-problemet for $y_1$); ikke-lineære ledd Taylor-utvikles;
  **en ikke-lineær opprinnelig ligning gir lineære delproblemer**.
- **Utledning med intuisjon:** vis $O(1)$- og $O(\varepsilon)$-problemet for et enkelt eksempel:
  «Intuisjon: $y_0$ er 'null-tilnærmingen', $y_1$ er den lille korreksjonen den lille parameteren gir.»
- **Typiske feil:** #9 (bare $y_0$ når $y_1$ kreves); glemme å Taylor-utvikle; blande ordner.
- **Modellsvar:** «Satellitt i sirkelbane forstyrres litt; sett $r=a+\varepsilon r_1$, lineariser og
  vis at banen forblir begrenset» (2018-typen).
- **Kvote:** 14 quiz / 14 flashcards.

#### Kapittel 4.2: Singulær perturbasjon og grenselag — koreografien
**id:** `tma4195-4-2` · **number:** 4.2 · **estimatedMinutes:** 70 · **prerequisites:** `tma4195-4-1`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Den faste fire-stegs-koreografien: ytre løsning ($\varepsilon=0$), indre løsning
  ($\xi=x/\delta$ med begrunnet valg av $\delta$), matching, og uniform løsning. Inkluderer SVG-
  grenselagsprofil (ytre + indre + uniform).
- **Eksamensbelegg:** Kjernen i sjanger C (≈89 %, O3). Sensorkrav 4: full koreografi, eksplisitt
  $\delta$-valg og matching. Prioritet: perfekt. Feilkodene #3, #4.
- **Forkunnskaper/kryssbok:** kap. 4.1, 2.2; [Andreordens lineære ODE](/bok/tma4110/tma4110-6-1)
  `(verifiser lenke)`. `collapsible` **Symbol- og formelliste:** ytre $y_\text{ytre}$; indre
  $Y(\xi)$; grenselagsvariabel $\xi=x/\delta$; uniform $y_u$.
- **Faktakontrakt (flashcard-kilde) — koreografien i fire steg:** (1) **ytre løsning:** sett
  $\varepsilon=0$, løs den reduserte (ofte separable) ligningen, bruk randbetingelsen UTENFOR
  grenselaget; (2) **indre løsning:** innfør $\xi=x/\delta$, velg $\delta$ slik at det høyeste-ordens-
  leddet balanserer nøyaktig ett annet ledd (nesten alltid $\delta=\varepsilon$), løs den ledende
  indre ligningen (typisk $Y''+Y'=0\Rightarrow Y=C_1+C_2e^{-\xi}$), bruk randbetingelsen I grenselaget;
  (3) **matching:** $\lim_{\xi\to\infty}Y(\xi)=\lim_{x\to0}y_\text{ytre}(x)$ bestemmer gjenstående
  konstant; (4) **uniform løsning:** $y_u=y_\text{ytre}+Y(x/\delta)-(\text{felles grenseverdi})$.
- **Utledning med intuisjon (aktiv utledning):** vis balanseringsargumentet for $\delta$ — hvorfor
  $\delta=\varepsilon$ balanserer $\varepsilon y''$ mot $y'$: «Intuisjon: inne i grenselaget varierer
  løsningen så raskt at det lille $\varepsilon$-leddet blir like viktig som resten.»
- **Figur (SVG, obligatorisk):** grenselagsprofil — ytre løsning, indre løsning og uniform løsning på
  samme akse, med det tynne grenselaget ved $x=0$ markert.
- **Typiske feil:** #3 (feil $\delta$); #4 (hoppe over matching / feil grenser / glemme å trekke fra
  felles grenseverdi).
- **Modellsvar:** «$\varepsilon y''+4y'+(\sin x)y^2=0$, $y(0)=0$, $y(\pi)=1$, grenselag ved $x=0$;
  finn ytre, indre og uniform 0.-ordens løsning» (2022-typen).
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 4.3: Matching og uniform løsning i praksis
**id:** `tma4195-4-3` · **number:** 4.3 · **estimatedMinutes:** 55 · **prerequisites:** `tma4195-4-2`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Fordypning i de to stegene som oftest taper poeng: matching-betingelsen (riktige
  grenser $\xi\to\infty$ vs. $x\to0$) og konstruksjon av den uniforme løsningen (trekk fra den felles
  grenseverdien) — inkl. grenselag på indre rand og valg mellom $\delta$-kandidater.
- **Eksamensbelegg:** Sjanger C (≈89 %, O3). Feilkodene #3, #4. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 4.2. `collapsible` **Symbol- og formelliste:** matching-grenser;
  felles grenseverdi $y_\text{felles}$; $\delta$-kandidater $\varepsilon,\sqrt\varepsilon,1$.
- **Faktakontrakt (flashcard-kilde):** matching-betingelsen $\lim_{\xi\to\infty}Y=\lim_{x\to0}
  y_\text{ytre}$; **de tre $\delta$-kandidatene** $\varepsilon$, $\sqrt\varepsilon$, $1$ skal vurderes;
  den uniforme løsningen trekker FRA den felles grenseverdien (ellers telles overlappet dobbelt);
  hvor grenselaget ligger avgjøres av fortegnet på koeffisienten til $y'$.
- **Typiske feil:** #4 (feil grenser, glemme å trekke fra); #3 (feil $\delta$-kandidat); plassere
  grenselaget i feil ende.
- **Modellsvar:** «Gitt ytre og indre løsning fra en $\varepsilon y''+a(x)y'+\dots$-oppgave, utfør
  matching og skriv den uniforme løsningen; avgjør hvilken rand grenselaget ligger ved».
- **Kvote:** 16 quiz / 14 flashcards.

#### Kapittel 4.4: Perturbasjons-drill
**id:** `tma4195-4-4` · **number:** 4.4 · **estimatedMinutes:** 55 · **prerequisites:** `tma4195-4-3`

- **Kapitteltype:** drillkapittel (perfekt).
- **Description:** Mengdetrening på sjanger C (og I): full grenselags-koreografi og regulær
  perturbasjon i eksamensmalen.
- **Eksamensbelegg:** Sjanger C (≈89 %, O3), I. Gjengangere: $\varepsilon y''+ay'+by=0$-grenselag,
  $\varepsilon y''+y'+y=0$, satellitt-/pendel-perturbasjon. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 4.1–4.3. `collapsible` **Symbol- og formelliste:** koreografien +
  regulær-oppskriften i kortform.
- **Løsningsoppskrift (singulær):** (1) ytre ($\varepsilon=0$, ytre rand); (2) indre ($\xi=x/\delta$,
  begrunn $\delta$, ledende ligning, indre rand); (3) matching; (4) uniform. **(regulær):** sett inn
  potensrekke, samle $O(1)$ og $O(\varepsilon)$, løs sekvensielt.
- **Modellsvar:** «$\varepsilon y''+(1+x)y'+y=0$, $y(0)=0$, $y(1)=1$: full ytre/indre/matching/uniform
  0.-ordens løsning» — med sensor-margnotater om $\delta$-begrunnelsen og matching-steget.
- **Typiske feil:** #3, #4, #9.
- **Kvote:** 18 quiz / 12 flashcards.

**Prøve-kvote Del 4:** 4 prøver (4.A regulær perturbasjon (orden-for-orden) · 4.B ytre + indre
løsning + begrunnet $\delta$ · 4.C matching + uniform løsning · 4.D samlet grenselags-prøve på
eksamensnivå (full O3)).

### Del 5 — Bevaringslover, karakteristikker og sjokk *(prioritet: PERFEKT — ≈84 %)*

#### Kapittel 5.1: Bevaringslover fra integralform
**id:** `tma4195-5-1` · **number:** 5.1 · **estimatedMinutes:** 60 · **prerequisites:** `tma4195-2-1`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Å utlede den skalare bevaringsloven $u_t+J(u)_x=0$ fra en integral bevaringslov
  over $[a,b]$ (tidsendring av mengde = netto inn-fluks), ved divisjon med $(b-a)$ og grensen — sensor
  krever integralformen, ikke bare differensialformen.
- **Eksamensbelegg:** Første steg i sjanger E (≈84 %) og F (≈79 %). Sensorkrav 6: utled fra
  integralform. Prioritet: perfekt. Feilkode #6.
- **Forkunnskaper/kryssbok:** kap. 2.1; [Bestemt integral](/bok/tma4100/tma4100-6-1) `(verifiser lenke)`.
  `collapsible` **Symbol- og formelliste:** tetthet $u$; fluks $J(u)$; kontrollvolum $[a,b]$.
- **Faktakontrakt (flashcard-kilde):** **integral bevaringslov** $\frac{d}{dt}\int_a^b u\,dx=
  J(u(a,t))-J(u(b,t))$ (+ evt. kilder); **fluks** $J(u)$ = mengde per tid gjennom et punkt; **overgang
  til differensialform** ved $(b-a)\to0$ gir $u_t+J(u)_x=0$; **trafikkfluks** $J(u)=u\,v(u)$ med
  $v(u)=v_m(1-u/u_m)$.
- **Utledning med intuisjon (aktiv utledning):** vis integral → differensial steg for steg:
  «Intuisjon: det som samler seg opp inni intervallet er nøyaktig det som strømmer inn minus det
  som strømmer ut.»
- **Typiske feil:** #6 (skrive differensialformen direkte); feil fortegn på fluksdifferansen; glemme
  kildeledd.
- **Modellsvar:** «Utled trafikkmodellen $u_t+(uv(u))_x=0$ fra bevaring av antall biler på $[a,b]$».
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 5.2: Karakteristikkmetoden
**id:** `tma4195-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** `tma4195-5-1`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Å løse $u_t+J(u)_x=0$ med karakteristikker: $u$ er konstant langs rette linjer
  $\dot x=J'(u_0(x_0))$; tegne karakteristikkdiagrammet og se når linjer kolliderer (sjokk) eller
  sprer seg (fortynningsvifte). Inkluderer SVG-karakteristikkdiagrammer.
- **Eksamensbelegg:** Kjernen i sjanger E (≈84 %). Sensorkrav 7. Prioritet: perfekt. Feilkode #8.
- **Forkunnskaper/kryssbok:** kap. 5.1. `collapsible` **Symbol- og formelliste:** karakteristikk
  $x=J'(u_0)t+x_0$; karakteristisk hastighet $J'(u)$.
- **Faktakontrakt (flashcard-kilde):** langs en **karakteristikk** er $u$ konstant, og karakteristikken
  er en rett linje $x=J'(u_0(x_0))t+x_0$ med hastighet $J'(u_0)$; karakteristikker som **kolliderer**
  (raskere bak treffer tregere foran) ⇒ **sjokk**; som **sprer seg** (dødsektor) ⇒ **fortynningsvifte**;
  løsningen kan bytte struktur ved en kritisk tid.
- **Utledning med intuisjon:** vis at $du/dt=0$ langs $\dot x=J'(u)$: «Intuisjon: hvert 'nivå' av $u$
  transporteres med sin egen konstante hastighet — derav de rette linjene.»
- **Figur (SVG, obligatorisk):** to karakteristikkdiagrammer — ett med kolliderende linjer (sjokk-
  dannelse) og ett med spredende linjer (fortynningsvifte / dødsektor).
- **Typiske feil:** #8 (glemme å skille tilfeller / kritisk tid); tegne karakteristikkene feil;
  forveksle kollisjon og spredning.
- **Modellsvar:** «For $u_t+u u_x=0$ med gitt trappedata, tegn karakteristikkene og avgjør om det
  oppstår sjokk eller vifte».
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 5.3: Sjokk (Rankine–Hugoniot) og fortynningsvifte
**id:** `tma4195-5-3` · **number:** 5.3 · **estimatedMinutes:** 65 · **prerequisites:** `tma4195-5-2`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Sjokkfarten fra Rankine–Hugoniot $U=[J]/[u]$, fortynningsviften
  $u(x,t)=(J')^{-1}(x/t)$, og den lineære 1.-ordens ODE-en for sjokkbanen $s(t)$ (løses med
  integrerende faktor) — inkl. å behandle tidlige vs. sene tider hver for seg.
- **Eksamensbelegg:** Sluttsteget i sjanger E (≈84 %). Sensorkrav 7. Prioritet: perfekt. Feilkodene
  #7, #8.
- **Forkunnskaper/kryssbok:** kap. 5.2; [Førsteordens lineær ODE / integrerende faktor](/bok/r2/r2-6-2)
  `(verifiser lenke)`. `collapsible` **Symbol- og formelliste:** Rankine–Hugoniot $U=[J]/[u]$;
  sjokkbane $s(t)$; fortynningsvifte $(J')^{-1}(x/t)$.
- **Faktakontrakt (flashcard-kilde):** **Rankine–Hugoniot** sjokkfart $U=\dfrac{J(u_+)-J(u_-)}
  {u_+-u_-}$; **fortynningsvifte** $u(x,t)=(J')^{-1}(x/t)$ i dødsektoren; **sjokkbane** følger en ODE
  $\dot s=U(u_-,u_+)$ som ofte er lineær 1. ordens (integrerende faktor); løsningsstrukturen kan bytte
  ved en kritisk tid (behandle før/etter hver for seg).
- **Utledning med intuisjon (aktiv utledning):** utled Rankine–Hugoniot fra integral bevaringslov over
  et intervall som følger sjokket: «Intuisjon: massen som forsvinner på den ene siden må dukke opp på
  den andre — det fastsetter farten.»
- **Typiske feil:** #7 (feil fortegn / bruke sjokk der det er vifte); #8 (glemme kritisk tid / to
  tilfeller); feil i integrerende faktor.
- **Modellsvar:** «Trafikk med $J(u)=v_m(u-u^2/u_m)$ og kilekø-initialdata: skalér, finn
  karakteristikkene, avgjør sjokk vs. vifte, finn $u(x,t)$ og posisjonen $y(t)$ til bilen som starter
  i $x=-1$» (2023-typen).
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 5.4: Bevaringslov- og sjokk-drill
**id:** `tma4195-5-4` · **number:** 5.4 · **estimatedMinutes:** 55 · **prerequisites:** `tma4195-5-3`

- **Kapitteltype:** drillkapittel (perfekt).
- **Description:** Mengdetrening på sjanger E: fra bevaringslov via karakteristikker til sjokk/vifte og
  sjokkbane, i eksamensmalen.
- **Eksamensbelegg:** Sjanger E (≈84 %). Gjengangere: trafikkfluks, tofase-strømning, elvestrøm.
  Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 5.1–5.3. `collapsible` **Symbol- og formelliste:** hele
  bevaringslov→sjokk-kjeden i kortform.
- **Løsningsoppskrift:** (1) utled/oppgi $u_t+J(u)_x=0$ fra integralform; (2) skalér; (3) karakteristikker
  $x=J'(u_0)t+x_0$, tegn; (4) kolliderer ⇒ sjokk (Rankine–Hugoniot), sprer seg ⇒ vifte; (5) sjokkbane-
  ODE med integrerende faktor; (6) skill før/etter kritisk tid.
- **Modellsvar:** «Tofase-strømning med gitt fluksfunksjon: bygg hele løsningen fra bevaringslov til
  sjokkbane» — med sensor-margnotater.
- **Typiske feil:** #6, #7, #8.
- **Kvote:** 18 quiz / 12 flashcards.

**Prøve-kvote Del 5:** 4 prøver (5.A bevaringslov fra integralform · 5.B karakteristikkmetoden + tegn
diagram · 5.C sjokk (Rankine–Hugoniot) vs. fortynningsvifte + sjokkbane · 5.D samlet bevaringslov-prøve
på eksamensnivå).

### Del 6 — PDE-modelloppsett: bevaringslov og Darcy/Fick *(prioritet: KUNNE→PERFEKT — ≈79 %, sluttoppgaven)*

#### Kapittel 6.1: Massebevaring i 2D/3D og konstitutive lover (Darcy, Fick)
**id:** `tma4195-6-1` · **number:** 6.1 · **estimatedMinutes:** 65 · **prerequisites:** `tma4195-5-1`

- **Kapitteltype:** teorikapittel (kunne→perfekt).
- **Description:** Massebevaring over en ball $B_r$ / divergensform, og de konstitutive lovene som
  lukker modellen: Darcys lov (porøs strømning), Ficks lov (diffusjon) og ideell gasslov — byggeklossene
  i den tunge PDE-sluttoppgaven.
- **Eksamensbelegg:** Fundamentet i sjanger F (≈79 %, sluttoppgaven). Sensorkrav 6. Prioritet:
  kunne→perfekt.
- **Forkunnskaper/kryssbok:** kap. 5.1; [Divergens og divergensteoremet](/bok/tma4105/tma4105-4-1)
  `(verifiser lenke)`, [Gradient](/bok/tma4105/tma4105-2-1) `(verifiser lenke)`. `collapsible`
  **Symbol- og formelliste:** tetthet $\rho$; fluks $q$; Darcy $q=-(k/\mu)\nabla p$; Fick
  $j=-\varphi D\nabla C$. **«Sist du var her»:** vis bevaringslov-integralformen og
  divergensteoremet ferdig oppfrisket (stor tidsavstand fra Del 5).
- **Faktakontrakt (flashcard-kilde):** **massebevaring** $\partial_t\!\int_{B_r}\rho\,dV=
  -\oint_{\partial B_r}\rho q\cdot n\,dS$ → (divergensteoremet) → $\rho_t+\nabla\cdot(\rho q)=0$;
  **Darcys lov** $q=-(k/\mu)(\nabla p-\rho g)$ ($k$ permeabilitet, $\mu$ viskositet); **Ficks lov**
  $j=-\varphi D\nabla C$ ($\varphi$ porøsitet, $D$ diffusjonskoeffisient); **ideell gasslov** $p=\rho RT$.
- **Utledning med intuisjon (aktiv utledning):** vis integral → divergensform via divergensteoremet:
  «Intuisjon: netto utstrømning gjennom overflaten er integralet av divergensen inni.»
- **Typiske feil:** #6 (hoppe over integralformen); feil fortegn i Darcy/Fick (minustegnet: strømning
  fra høyt til lavt trykk/konsentrasjon); glemme produkt-/kjerneregel i $\nabla\cdot(\rho q)$.
- **Modellsvar:** «Utled trykklikningen for enfase-strømning i et porøst medium ved å kombinere
  massebevaring, Darcy og en kompressibilitetsrelasjon».
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 6.2: Utledning, skalering og perturbasjon av en PDE-modell
**id:** `tma4195-6-2` · **number:** 6.2 · **estimatedMinutes:** 70 · **prerequisites:** `tma4195-6-1`

- **Kapitteltype:** teorikapittel (perfekt for sluttoppgaven).
- **Description:** Den fulle sluttoppgave-kjeden: fra fysiske antakelser → massebevaring → sett inn
  Darcy/Fick → skalér til dimensjonsløs form → (ved liten $\varepsilon$) perturbasjonsutvikling
  $p=p_0+\varepsilon p_1+O(\varepsilon^2)$, der en ikke-lineær opprinnelig ligning gir lineære
  delproblemer.
- **Eksamensbelegg:** Kjernen i sjanger F (≈79 %, sluttoppgaven — porøst medium, CO₂-lagring,
  gass-injeksjon). Sensorkravene 5, 6, 9. Prioritet: perfekt. Feilkodene #5, #9.
- **Forkunnskaper/kryssbok:** kap. 6.1, 2.2, 4.1. `collapsible` **Symbol- og formelliste:** trykk $p$;
  metning $S$; dimensjonsløse variabler; $\varepsilon$-utvikling. **«Sist du var her»:** vis skalerings-
  oppskriften (kap. 2.1) og regulær-perturbasjon-oppskriften (kap. 4.1) ferdig oppfrisket.
- **Faktakontrakt (flashcard-kilde):** kjeden **antakelser → massebevaring → konstitutiv lov → skalering
  → $\varepsilon$-utvikling**; ved perturbasjon samles ledd orden-for-orden; **ikke-lineær opprinnelig
  ligning ⇒ lineære $p_0$- og $p_1$-problemer**; front-/metningsligninger kan kreve kontinuitetssjekk.
- **Utledning med intuisjon (aktiv utledning):** vis $O(1)$- og $O(\varepsilon)$-problemet for en enkel
  trykklikning: «Intuisjon: $p_0$ er grunntrykket; $p_1$ er den lille korreksjonen den svake
  kompressibiliteten/injeksjonen gir.»
- **Typiske feil:** #5 (postulere skalaer); #9 (stoppe før $p_1$); glemme at delproblemene blir lineære.
- **Modellsvar:** «Gass injiseres i et vannfylt porøst sylinderrør ved konstant trykkfall: sett opp
  massebevaring for gass og vann, vis at total-fluksen $q(t)$ er uavhengig av $x$, skalér
  metningsligningen for $S$ og vis at en gitt front-løsning er kontinuerlig» (2022-typen).
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 6.3: PDE-modelloppsett-drill
**id:** `tma4195-6-3` · **number:** 6.3 · **estimatedMinutes:** 60 · **prerequisites:** `tma4195-6-2`

- **Kapitteltype:** drillkapittel (perfekt for sluttoppgaven).
- **Description:** Mengdetrening på sjanger F: hele sluttoppgave-kjeden på ulike porøsmedium-/geofysikk-
  caser i eksamensmalen.
- **Eksamensbelegg:** Sjanger F (≈79 %). Gjengangere: gass i bergformasjon (2017), tofase
  gravitasjonssegregering (2019), CO₂-oppløsning i saltvann (2021), gass-injeksjon i sylinder (2022),
  permeabilitet/kompressibilitet (2023). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 6.1–6.2. `collapsible` **Symbol- og formelliste:** sluttoppgave-
  kjeden i kortform.
- **Løsningsoppskrift:** (1) integral massebevaring over $[a,b]$/$B_r$; (2) differensial-/divergensform;
  (3) sett inn Darcy/Fick/gasslov; (4) skalér (balanser ledd); (5) identifiser $\varepsilon\ll1$;
  (6) $\varepsilon$-utvikling orden-for-orden; (7) tolk fysisk.
- **Modellsvar:** «CO₂ injiseres i et akvifer: bygg trykk-/metningsmodellen fra bunn, skalér, og
  finn ledende-ordens løsning» — med sensor-margnotater om at integralformen og skaleringen må vises.
- **Typiske feil:** #5, #6, #9.
- **Kvote:** 16 quiz / 12 flashcards.

**Prøve-kvote Del 6:** 4 prøver (6.A massebevaring + Darcy/Fick (utled trykk-/diffusjonslikning) ·
6.B skalering av en PDE-modell · 6.C $\varepsilon$-perturbasjon av PDE (orden-for-orden) · 6.D full
PDE-sluttoppgave på eksamensnivå (porøst medium)).

### Del 7 — Modelloppsett fra bunn og prosjektkompetanse *(prioritet: KUNNE — prosjekt 25 %)*

#### Kapittel 7.1: Modelleringssyklusen — fra fenomen til analysert modell
**id:** `tma4195-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4195-6-2`

- **Kapitteltype:** teorikapittel (prosjekt + økende på eksamen).
- **Description:** Hele modelleringssyklusen «i byggeretning»: identifiser fenomen → gjør antakelser →
  sett opp ODE/PDE → skalér → analyser (likevekt/stabilitet/perturbasjon) → tolk → skriv. De samme seks
  søylene, men nå skal DU sette opp modellen (ikke få den oppgitt).
- **Eksamensbelegg:** Kjernen i prosjektdelen (25 % — `(verifiser)`, utledet indirekte); modelloppsett
  er også økende på skoleeksamen (sjanger F). Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 6.2 (og hele boka). `collapsible` **Symbol- og formelliste:**
  modelleringssyklusens steg (ingen ny notasjon — samler bokas apparat).
- **Faktakontrakt (flashcard-kilde):** **modelleringssyklusen** (fenomen → antakelser → likninger →
  skalering → analyse → tolkning → validering/skriving); **antakelser gjør en modell traktabel** (og
  må gjøres eksplisitte); **konserveringsprinsippet** (masse/energi/momentum bevares) er startpunktet
  for de fleste modeller; **de samme seks søylene** brukes i byggeretning.
- **Utledning med intuisjon:** bygg én modell fra bunn (f.eks. spredning av et stoff i en elv): fra
  antakelser til dimensjonsløs analysert modell, med intuisjonslinjer.
- **Typiske feil:** implisitte/urealistiske antakelser; hoppe over skalering; ikke tolke resultatet
  fysisk (#10); modell som ikke er dimensjonelt konsistent.
- **Modellsvar:** «Sett opp en modell for oppvarming av en kaffekopp (Newtons avkjølingslov), skalér,
  finn tidsskalaen og tolk»; «Bygg en enkel epidemimodell (SIR-lignende) fra antakelser om smitte- og
  friskningsrater».
- **Kvote:** 14 quiz / 14 flashcards.

#### Kapittel 7.2: Å skrive prosjektrapporten og tolke modellen
**id:** `tma4195-7-2` · **number:** 7.2 · **estimatedMinutes:** 50 · **prerequisites:** `tma4195-7-1`

- **Kapitteltype:** teorikapittel (prosjekt — `(verifiser)`).
- **Description:** Fra analysert modell til skriftlig faglig framstilling: hvordan begrunne antakelser,
  presentere skalering og analyse, tolke parametere/tidsskalaer og diskutere gyldighetsområde — kjernen
  i prosjektets 25 %.
- **Eksamensbelegg:** Prosjektdelen (25 % — `(verifiser)`, utledet indirekte; ingen prosjektarkiv).
  Sensorkrav 9 (fysisk tolkning). Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 7.1. `collapsible` **Symbol- og formelliste:** ingen ny notasjon
  (metode-/skrivekapittel).
- **Faktakontrakt (flashcard-kilde):** en god modellrapport gjør **antakelsene eksplisitte og begrunnet**,
  viser **skalering og dimensjonsløs form**, presenterer **analysen** (likevekt/stabilitet/perturbasjon)
  og **tolker resultatene fysisk**, og diskuterer **modellens gyldighetsområde og begrensninger**;
  parametere og tidsskalaer skal ha en fysisk betydning.
- **Typiske feil (`(verifiser)`):** rapportere tall uten tolkning; skjule antakelser; ingen validering/
  begrensningsdiskusjon; manglende dimensjonssjekk.
- **Modellsvar:** «Gitt en analysert reservoarmodell, skriv resultat-/tolkningsavsnittet: hva betyr
  $\varepsilon$, hvilke tidsskalaer dominerer, når bryter modellen sammen».
- **Kvote:** 12 quiz / 12 flashcards.

**Prøve-kvote Del 7:** 4 prøver (7.A modelloppsett fra antakelser (ODE) · 7.B modelloppsett fra
antakelser (PDE/bevaringslov) · 7.C skalering + tolkning av egen modell · 7.D full modelleringssyklus
(fenomen → analysert dimensjonsløs modell + tolkning)). *(Prosjektnær — kildeforbehold `(verifiser)`.)*

### Del 8 — Beredskap og eksamenstrening *(prioritet: PERFEKT (meta) + KJENNE (lavfrekvent))*

#### Kapittel 8.1: Beredskap — lavfrekvente sjangre
**id:** `tma4195-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4195-3-2`

- **Kapitteltype:** teorikapittel (kjenne — lavfrekvent, men forekommet).
- **Description:** De sjangrene som har forekommet, men sjelden: Lyapunov-funksjon for stabilitet
  (2015), lineært transportsystem via diagonalisering + karakteristikker (2022), «intermediate
  asymptotics» / fundamentalløsning (2017), og skalamodell-testing med Froude/Reynolds (eldre sett).
- **Eksamensbelegg:** Hver ≈5 % (Lyapunov 2015, lineært transportsystem 2022, intermediate asymptotics
  2017), skalamodell 26 % (eldre). Prioritet: kjenne (beredskap). Merket «bør kjenne til».
- **Forkunnskaper/kryssbok:** kap. 3.2, 5.2, 2.1. `collapsible` **Symbol- og formelliste:** Lyapunov
  $L(y)$; diagonalisering $P^{-1}AP$; Froude $v/\sqrt{gL}$.
- **Faktakontrakt (flashcard-kilde):** **Lyapunov-funksjon** $L(y_e)=0$, $L>0$ ellers, $\dot L\le0$ ⇒
  stabil (brukes når linearisering ikke konkluderer); **lineært transportsystem** diagonaliseres
  ($P^{-1}AP$) og løses komponentvis med karakteristikker; **intermediate asymptotics** = selvlignende
  fundamentalløsning; **skalamodell-testing** = lik dimensjonsløse tall (Froude/Reynolds) gir fysisk
  likhet mellom modell og fullskala.
- **Typiske feil:** velge feil Lyapunov-kandidat; feil ved diagonalisering; glemme selvlikhets-ansatsen.
- **Modellsvar:** «Bruk en Lyapunov-funksjon til å vise stabilitet der lineær analyse gir et senter»;
  «Diagonaliser et 2×2 lineært bølgesystem og løs med karakteristikker».
- **Kvote:** 14 quiz / 14 flashcards.

#### Kapittel 8.2: Sjangerspillet — løsningsoppskriftene A–I
**id:** `tma4195-8-2` · **number:** 8.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4195-8-1`

- **Kapitteltype:** drill-/oversiktskapittel (perfekt meta).
- **Description:** Alle ni oppgavesjangre samlet som ettlinjes løsningsoppskrifter med tidsbudsjett og
  vanligste feil — det printbare sjanger-/prosedyrekortet for eksamensdagen (en «kald bank» av 8–10
  oppgaver uten hint, tydelig merket, ligger her).
- **Eksamensbelegg:** Hele arkivet (sjangrene A–I). Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** hele boka. `collapsible` **Symbol- og formelliste:** sjanger→oppskrift-
  kortet (A Buckingham, B Jacobi, C grenselag, D skalering, E bevaringslov/sjokk, F PDE-oppsett,
  G bifurkasjon, H populasjon, I regulær pert.).
- **Faktakontrakt (flashcard-kilde):** hver sjanger A–I med ettlinjes oppskrift + tidsbudsjett +
  vanligste feil (#-kode). Prognosen for neste sett (O1 Buckingham, O2 likevekt/stabilitet, O3
  grenselag, skalering + bifurkasjon, bevaringslov/sjokk, tung PDE-sluttoppgave).
- **Kald bank:** 8–10 oppgaver med uvante vinklinger/kombinasjoner UTEN hint, fasit = momentliste,
  tydelig merket som kald.
- **Typiske feil:** feil tidsbudsjett (bruke for lenge på O1); hoppe over den «gratis» O2; droppe
  begrunnelser under tidspress (sensorkrav 1).
- **Kvote:** 18 quiz / 12 flashcards.

#### Kapittel 8.3: Øvingseksamen 1 (med full modellsvar-fasit)
**id:** `tma4195-8-3` · **number:** 8.3 · **estimatedMinutes:** 90 · **prerequisites:** `tma4195-8-2`

- **Kapitteltype:** øvingseksamen.
- **Description:** Komplett nyskrevet sett i Wessel-Berg-malen (5–7 oppgaver, 4 t, kode C, ingen
  flervalg): O1 Buckingham, O2 likevekt/stabilitet, O3 grenselag, O4 skalering + bifurkasjon, O5
  bevaringslov/sjokk, O6 PDE-modelloppsett. Full modellsvar-fasit i egne collapsibles + Sensorblikk +
  selvdiagnose-sjekkliste per oppgave.
- **Eksamensbelegg:** Speiler temafordelingen i analysen §2 (en «typisk» eksamen). **Kildeforbehold +
  statusnote:** prosjektdelen ikke i arkivet; malen bygger på H2005–H2023. Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** hele boka.
- **Kvote:** 6 quiz / 8 flashcards.

#### Kapittel 8.4: Øvingseksamen 2 (med full modellsvar-fasit)
**id:** `tma4195-8-4` · **number:** 8.4 · **estimatedMinutes:** 90 · **prerequisites:** `tma4195-8-2`

- **Kapitteltype:** øvingseksamen.
- **Description:** Komplett nyskrevet sett med en annen, men typisk profil (mer Grasmair-preget: en
  regulær-perturbasjonsoppgave og en populasjonsdynamikk-oppgave i tillegg til søylene). Full fasit +
  Sensorblikk + selvdiagnose.
- **Eksamensbelegg:** Speiler §2, med sjanger I og H sterkere representert. Kildeforbehold + statusnote.
  Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** hele boka.
- **Kvote:** 6 quiz / 8 flashcards.

#### Kapittel 8.5: Øvingseksamen 3 (med full modellsvar-fasit)
**id:** `tma4195-8-5` · **number:** 8.5 · **estimatedMinutes:** 90 · **prerequisites:** `tma4195-8-2`

- **Kapitteltype:** øvingseksamen.
- **Description:** Komplett nyskrevet sett med tung PDE-sluttoppgave-profil (Wessel-Berg 2021–2023:
  CO₂-lagring / gass-injeksjon), pluss de faste O1–O3. Full fasit + Sensorblikk + selvdiagnose.
- **Eksamensbelegg:** Speiler §2 med sjanger F ekstra tungt. Kildeforbehold + statusnote. Prioritet:
  perfekt (meta).
- **Forkunnskaper/kryssbok:** hele boka.
- **Kvote:** 6 quiz / 8 flashcards.

#### Kapittel 8.6: Eksamensstrategi og tidsbudsjett
**id:** `tma4195-8-6` · **number:** 8.6 · **estimatedMinutes:** 40 · **prerequisites:** `tma4195-8-2`

- **Kapitteltype:** meta-/strategikapittel.
- **Description:** Hvordan disponere de 4 timene: rekkefølge (ta de «gratis» O1/O2 først), tidsbudsjett
  per sjanger, hva som gir delpoeng, og en avkryssbar sluttsjekkliste (dimensjonsmatrise vist?
  matching gjort? integralform utledet? fysisk tolkning skrevet?).
- **Eksamensbelegg:** Hele arkivet (meta). Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** hele boka. `collapsible` **Symbol- og formelliste:** ingen ny notasjon.
- **Faktakontrakt (flashcard-kilde):** tidsbudsjett per sjanger (O1 Buckingham ~30 min, O2 likevekt
  ~25 min, O3 grenselag ~40 min, PDE-sluttoppgave ~60 min); ta de mekaniske «gratis»-oppgavene først;
  alltid vis matrise/integralform/matching/tolkning (sensorkravene); tidsanslagene er skrivetid.
- **Typiske feil:** bruke for lenge på O1; hoppe over den «gratis» O2; droppe begrunnelser under
  tidspress; glemme fysisk tolkning (#10).
- **Kvote:** 12 quiz / 12 flashcards.

**Prøve-kvote Del 8:** ingen egen prøve (Del 8 ER de tre øvingseksamenene 8.3–8.5 + sjangerspillet).

---

## 4. Kvotesammendrag (AUTORITATIV for alle senere faser)

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 2 | 26 | 28 | 0 (dekkes av øvingseksamenene) |
| 1 | 4 | 64 | 60 | 4 |
| 2 | 3 | 48 | 44 | 4 |
| 3 | 5 | 78 | 70 | 4 |
| 4 | 4 | 66 | 58 | 4 |
| 5 | 4 | 66 | 60 | 4 |
| 6 | 3 | 50 | 46 | 4 |
| 7 | 2 | 26 | 26 | 4 |
| 8 | 6 | 68 | 62 | 0 (= 3 øvingseksamener + sjangerspill) |
| **Sum** | **33** | **538 ✓ (≥500)** | **454** | **32 + 3 øvingseksamener** |

Summeringskontroll per del (quiz / flashcards):
- Del 0: 12+14 = **26** / 12+16 = **28**
- Del 1: 14+16+16+18 = **64** / 16+16+16+12 = **60**
- Del 2: 16+16+16 = **48** / 16+16+12 = **44**
- Del 3: 14+18+14+14+18 = **78** / 14+18+14+12+12 = **70**
- Del 4: 14+18+16+18 = **66** / 14+18+14+12 = **58**
- Del 5: 16+16+16+18 = **66** / 16+16+16+12 = **60**
- Del 6: 16+18+16 = **50** / 16+18+12 = **46**
- Del 7: 14+12 = **26** / 14+12 = **26**
- Del 8: 14+18+6+6+6+12 = **62** … *(se korreksjon under)*

> **Summeringskorreksjon Del 8:** 14+18+6+6+6+12 = **62** quiz, ikke 68. Flashcards Del 8:
> 14+12+8+8+8+12 = **62**. Rettede deltall for Del 8: **62 quiz / 62 flashcards**. Kapitteltallet
> er **33** (2+4+3+5+4+4+3+2+6), ikke 34.

**Rettet kvotesammendrag (autoritativt):**

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 2 | 26 | 28 | 0 |
| 1 | 4 | 64 | 60 | 4 |
| 2 | 3 | 48 | 44 | 4 |
| 3 | 5 | 78 | 70 | 4 |
| 4 | 4 | 66 | 58 | 4 |
| 5 | 4 | 66 | 60 | 4 |
| 6 | 3 | 50 | 46 | 4 |
| 7 | 2 | 26 | 26 | 4 |
| 8 | 6 | 62 | 62 | 0 |
| **Sum** | **33** | **486** | **454** | **32 + 3 øvingseksamener** |

> **KVOTEGULV-KORREKSJON:** rettet sum (486 quiz / 454 flashcards) ligger UNDER gulvet på
> ≥500/≥500. Kvotene er hevet før gate (se «Kvotejustering» under) slik at den REELLE summen
> passerer gulvet.

### Kvotejustering (for å nå ≥500/≥500 — dette er de GJELDENDE kvotene)

Følgende kapittelkvoter er hevet fra tallene i §3 (forfatteren følger disse hevede tallene):

- **1.1:** 14→16 quiz, 16→18 fc · **1.2:** 16→18 quiz, 16→18 fc · **2.1:** 16→18 quiz, 16→18 fc
- **3.3:** 14→16 quiz, 14→16 fc · **3.4:** 14→16 quiz, 12→16 fc · **4.1:** 14→16 quiz, 14→16 fc
- **5.1:** 16→18 quiz, 16→18 fc · **6.1:** 16→18 quiz, 16→18 fc · **7.1:** 14→16 quiz, 14→16 fc
- **7.2:** 12→14 quiz, 12→14 fc · **8.1:** 14→16 quiz, 14→16 fc · **8.6:** 12→14 quiz, 12→16 fc
- **0.1:** 12→14 quiz, 12→16 fc · **0.2:** 14→16 quiz, 16→18 fc · **2.2:** 16→18 quiz, 16→18 fc

**Gjeldende deltall etter justering (quiz / flashcards):**
- Del 0: 14+16 = **30** / 16+18 = **34**
- Del 1: 16+18+16+18 = **68** / 18+18+16+12 = **64**
- Del 2: 18+18+16 = **52** / 18+18+12 = **48**
- Del 3: 14+18+16+16+18 = **82** / 14+18+16+16+12 = **76**
- Del 4: 16+18+16+18 = **68** / 16+18+14+12 = **60**
- Del 5: 18+16+16+18 = **68** / 18+16+16+12 = **62**
- Del 6: 18+18+16 = **52** / 18+18+12 = **48**
- Del 7: 16+14 = **30** / 16+14 = **30**
- Del 8: 16+18+6+6+6+14 = **66** / 16+12+8+8+8+16 = **68**
- **Totalt: 30+68+52+82+68+68+52+30+66 = 516 quiz / 34+64+48+76+60+62+48+30+68 = 490 flashcards.**

> Flashcards (490) ligger fortsatt under 500. **Ytterligere flashcard-heving** (gjeldende):
> 1.3 16→20, 1.4 12→16, 3.5 12→16, 4.4 12→16, 5.4 12→16 (+ 5×4 = **+20 fc**) → **510 flashcards**.

**ENDELIG GJELDENDE TOTAL (autoritativ — fasit for byggefasen):**

| | Quiz | Flashcards |
|---|---|---|
| **Sum** | **516 ✓ (≥500)** | **510 ✓ (≥500)** |

Endelige flashcard-deltall: Del 1 64+4=**68**, Del 3 76+4=**80**, Del 4 60+4=**64**, Del 5 62+4=**66**;
øvrige uendret. Kontroll: 34+68+48+80+64+66+48+30+68 = **506**. *(Avvik fra 510 skyldes at 1.3-hevingen
+4 og 1.4-hevingen +4 begge ligger i Del 1: Del 1 = 64+4+4 = 72; korrekt Del 1 = **72**.)* Endelig
kontroll: 34+72+48+80+64+66+48+30+68 = **510 ✓**.

Endelige quiz-deltall er som «Gjeldende deltall etter justering» over: 30+68+52+82+68+68+52+30+66 =
**516 ✓**.

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride. Fordelingen speiler
frekvens og natur: de seks søylene (Del 1 dimensjonsanalyse, Del 2 skalering, Del 3 likevekt/stabilitet,
Del 4 perturbasjon, Del 5 bevaringslov, Del 6 PDE-oppsett) bærer hoveddelen av kvoten.

**Flashcard-profilen** speiler at eksamen er uten formelsamling — alt må sitte. Korttyper:
**formel↔bruk** (Rankine–Hugoniot $U=[J]/[u]$; Darcy $q=-(k/\mu)\nabla p$; Jacobi-klassifikasjonen),
**prosedyresteg** (grenselags-koreografien i fire steg; Buckingham-algoritmen i åtte trinn),
**begrep** ($\pi$-gruppe, sadelpunkt, transkritisk bifurkasjon, fortynningsvifte, kjernevariabel),
**dimensjonsløse tall** (Reynolds, Froude, Péclet). **Quiz-profilen** driller nabobegrep-distraktorer
(sjokk/vifte, sadel/stabil node/senter, regulær/singulær perturbasjon, ytre/indre løsning, Darcy/Fick,
kolliderende/spredende karakteristikker, $\det J<0$ vs. $>0$).

### Prøver (4 per temadel, 32 totalt)

Fire prøver per temadel (Del 1–7). Hver prøve speiler eksamensmalen i miniatyr: en blanding av
utlednings- og modelloppgaver (dimensjonsmatrise, Jacobi-klassifikasjon, grenselags-koreografi,
bevaringslov, PDE-oppsett — med fullt begrunnet fasit + eksplisitt mellomregning). Omfang 25–45 min,
kan trygt deles én prøve per økt. Alle oppgaver NYSKREVNE. Prøvekapittel-id `tma4195-<del>-prove`,
chapterNumber `<del>.P` (jf. BYGGEKONTRAKT). Del 0 og Del 8 har ingen egen prøve (Del 8s tre
øvingseksamener dekker helheten). Prøvetitlene er spesifisert per del i §3 (Prøve-kvote-linjene).
Flervalg i prøve-collapsibles har **stokkede fasit-bokstaver** (aldri «alle a»); riktig/galt- og
«finn fellen»-lister varierer fasiten.

### Komplette øvingseksamener (3 — kapitlene 8.3–8.5)

Tre nyskrevne 5–7-oppgaver-sett i Wessel-Berg-malen (4 t, kode C, ingen flervalg, alle svar begrunnet),
med ulik men typisk profil (8.3 balansert, 8.4 Grasmair-preget med regulær pert. + populasjon, 8.5 tung
PDE-sluttoppgave), full modellsvar-fasit (dimensjonsmatrise, Jacobi, grenselag, bevaringslov, PDE-
utledning), Sensorblikk per oppgave og en avkryssbar selvdiagnose-sjekkliste. **Kildeforbehold +
statusnote i alle tre:** prosjektdelen ikke i arkivet `(verifiser)`, malen bygger på H2005–H2023, TMA4195
verifisert aktivt 2026-07-11 (status kan endres). Til sammen dekker de tre settene sjangrene A–I minst
én gang.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (4 t skriftlig, engelsk, kode C, ingen flervalg, samlet karakter =
   skoleeksamen 75 % + gruppeprosjekt 25 %), fraværet av formelsamling fra 2020, kildeforbeholdet
   (prosjektdelen ikke i arkivet) og statusnoten (TMA4195 aktivt 2026-07-11) (fra kap. 0.1).
2. **Håndverket** — skalering og dimensjonskontroll som gjennomgående verktøy; «skaler dette til
   dimensjonsløs form» går igjen i hver oppgave (fra kap. 0.2), med formel-minimum-siden.
3. **Prioriteringskartet** — temafrekvenstabellen som tre lesenivåer: *perfekt* (dimensjonsanalyse
   ≈100 %, skalering ≈100 %, likevekt/stabilitet ≈95 %, singulær perturbasjon ≈89 %, bevaringslov/
   karakteristikker ≈84 %, PDE-modelloppsett ≈79 %), *kunne* (bifurkasjon, populasjonsdynamikk,
   regulær perturbasjon, modelloppsett fra bunn/prosjekt), *kjenne* (Lyapunov, lineært transportsystem,
   intermediate asymptotics, skalamodell). Eksplisitt: variasjonsregning/Fourier/numerikk testes IKKE.
4. **Sjangerguiden** — oppgavetypene A–I med løsningsoppskriftene i kortform (Buckingham-algoritmen;
   likevekt+Jacobi-klassifikasjonen; grenselags-koreografien i fire steg; skaleringsoppskriften;
   bevaringslov→karakteristikker→sjokk/vifte; PDE-sluttoppgave-kjeden; bifurkasjons-fortegnsanalysen)
   (fra kap. 8.2).
5. **Formelarket** — formel-minimum-siden (fra 0.2) siden ingen formelsamling deles ut fra 2020: de
   uunngåelige formlene (Buckingham $n-r$, Jacobi-klassifikasjon, grenselags-koreografi, Rankine–
   Hugoniot, Darcy, Fick), hver med én ordlinje.
6. **Sensorreglene** — de ni sensorkravene (§2) + karakterskillet (bestått: riktig metodevalg og
   hovedstrukturen; midtsjikt: korrekt utledning med mellomregning + begrunnede skalaer; topp:
   fullstendig grenselags-matching, integralform vist, fysisk tolkning, alternative metoder).
7. **Feilkatalogen** — de ti typiske feilene (#1–#10) samlet, hver med henvisning til kapitlet som
   forebygger den (#1 kjernevariabel → 1.3/1.4; #2 falske likevektspunkter → 3.1/3.5; #3 feil $\delta$
   → 4.2/4.3; #4 matching → 4.2/4.3; #5 skalaer uten balansering → 2.1/2.3; #6 integralform → 5.1/6.1;
   #7 Rankine–Hugoniot-fortegn → 5.3; #8 to tilfeller/kritisk tid → 5.2/5.3; #9 stoppe perturbasjon
   for tidlig → 4.1/6.2; #10 fysisk tolkning → 2.2/3.4/7.1).
8. **Studieløp** — anbefalt progresjon (10–12-ukers deltidsvariant og 3–5-dagers intensivvariant):
   Del 0 → 1 (Buckingham, O1) → 2 (skalering, gjennomgripende) → 3 (likevekt/stabilitet, O2) → 4
   (perturbasjon, O3) → 5 (bevaringslov/sjokk) → 6 (PDE-sluttoppgave) → 7 (prosjekt) → 8; sjangerspillet
   (8.2) spres utover; øvingseksamenene de tre siste ukene under tidspress (240 min, kalkulator).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først:** `TextbookCourse`-oppføring for `tma4195` (mønster `COURSE_BI_OKONOMI`, skrives
   til `textbook-courses-hoyskole.ts`): id `tma4195`, title «TMA4195 Matematisk modellering (NTNU) —
   eksamensrettet», `level: 'Høyskole'`, alle 33 kapitler med id/number/title/description/
   estimatedMinutes/topics/competenceGoals/prerequisites fra dette skjelettet, `sectionNames` fra
   §2-tabellen (obligatorisk — ellers viser bokforsiden «Seksjon N»). Registrer emnet i
   `institusjoner.ts` under NTNU med visningsnavn «TMA4195 Matematisk modellering».
2. **Del 0** (kap. 0.1–0.2) — etablerer sjangernavnene A–I, skalerings-/dimensjonshåndverket,
   frekvenstallene, sensorkravene, kildeforbeholdet, «hva som ikke testes» og formel-minimum-siden som
   resten av boka refererer til. **Bygg 0.2 grundig — skalering brukes i hver oppgave.**
3. **Del 1 → Del 2 → Del 3** (avhengighetskjeden: dimensjonsanalyse → skalering → dynamiske systemer).
4. **Del 4** (perturbasjon — bygger på flere tidsskalaer fra 2.2) → **Del 5** (bevaringslover — bygger
   på skalering 2.1) → **Del 6** (PDE-oppsett — bygger på bevaringslov 5.1 + skalering + perturbasjon)
   → **Del 7** (modelloppsett fra bunn — bruker hele boka).
5. **Del 8 til slutt** — beredskap + sjangerspill + tre øvingseksamener + strategi; øvingseksamenene
   gjenbruker HELE boka; bygges av én agent som leser hele skjelettet.
6. **Prøver** (`tma4195-<del>-prove`, chapterNumber `<del>.P`) etter at delens kapitler finnes;
   prøvetitlene er gitt per del i §3 (Del 1–7; Del 0 og Del 8 har ingen egen prøve).
7. **SVG-figurer** (§1 figurkrav): karakteristikkdiagrammer (5.2), bifurkasjonsdiagram (3.4),
   grenselagsprofil (4.2), $(\operatorname{tr}J,\det J)$-klassifikasjonskart (3.2). Skriv til
   `public/images/textbook/tma4195/`, wire som image-blokker, kjør `npx tsx
   scripts/upload-media-storage.ts`. Valider XML før wiring.
8. **Narrativ-versjoner** (`<id>-narrativ.json` per kapittel, jf. `/narrativ`) og quiz-staging
   registreres etter hvert; endelig blokk-/staging-skjema fastsettes i BYGGEKONTRAKT.md (fase 3).
   Kvotene fra §4 (endelig gjeldende total: 516 quiz / 510 flashcards) er fasit.

Per teorikapittel gjelder **kapittel-DNA** (§2): tip Eksamensvinkel → text Forkunnskaper + collapsible
Symbol- og formelliste → text Motivasjon → definition/theorem (flashcard-kilden — toppnivå med title!)
→ text Utledning med intuisjon → warning Typiske feil → example ×2–4 → exercise ×6–12 → collapsible
Repetisjon, alt vevd i Teori→Eksempel→Oppgave-løkker. Drillkapitlene (1.4/2.3/3.5/4.4/5.4/6.3) følger
drill-DNA. Eksamensvinkel- og Typiske feil-blokkene fylles med belegget og feilkodene fra dette
skjelettet — forfatteren skal IKKE finne på frekvenstall.

### Verifikasjonssjekkliste (kjøres FØR ferdigmelding)

- [ ] **JSON-validering:** alle nye `src/lib/data/chapters/tma4195-*.json` parser med `json.load`
      (generer via `json.dump` — LaTeX-`\\`-fellen). `npm run build` grønn — vis output.
- [ ] **Metadata-konsistens:** alle 33 kapittel-id-er har eksisterende content-fil; `number` er
      del-basert («5.2», ALDRI lineær); prosareferanser bruker samme form («kap. 5.2»); prerequisites
      peker på eksisterende id-er (og bakover); `sectionNames` satt; narrativ-id-er registrert slik at
      toggle rendrer (verifiser med prod-server + curl at narrativ-ruter gir 200).
- [ ] **Matematisk sannhetskontroll (DNA-regnefag):** stabilitetsklassifikasjoner, «alltid stabil/
      ustabil»-påstander og senter-forbeholdet parametersjekket numerisk (python3) FØR de påstås;
      betingede påstander skrevet med betingelse. Fasiter etterregnet.
- [ ] **Figurer:** karakteristikkdiagram (sjokk + vifte, 5.2), bifurkasjonsdiagram (3.4),
      grenselagsprofil (4.2), $(\operatorname{tr}J,\det J)$-kart (3.2) skrevet som gyldig SVG, wiret som
      image-blokker, lastet opp med `upload-media-storage.ts`; caption som lover figur har figur.
- [ ] **Kapittel-DNA:** hvert teorikapittel har Eksamensvinkel-`tip`, Forkunnskaper + `collapsible`
      Symbol- og formelliste, Motivasjon, `definition`/`theorem` (flashcard-kilde, toppnivå med title),
      Utledning med intuisjon, Typiske feil-`warning`, ≥2 `example`, 6–12 `exercise` med `solution` +
      `hints`, Repetisjons-`collapsible`; drillkapitlene har løsningsoppskrift + gjennomregnet case +
      8–15 varianter; læringsløkke (Teori→Eksempel→Oppgave inline) fulgt.
- [ ] **Kvotesum:** quiz ≥516 og flashcards ≥510 (endelig gjeldende total, §4) fordelt per kapittel;
      hardt minimum ≥500/≥500; 4 prøver per del for Del 1–7 (28) + 3 øvingseksamener; fasit-
      svaralternativer rebalansert (jevn a/b/c/d — options[0] alltid riktig i staging, runtime stokker;
      statisk prøvetekst stokker selv).
- [ ] **Sjangerdekning:** hver oppgave sjangermerket (A–I); de seks søylene (A,B,C,D,E,F) har flest
      oppgaver; lavfrekvent stoff (G,H,I + beredskap) merket «bør kjenne til».
- [ ] **Sensorkrav synlig:** dimensjonsmatrise + rang-argument vist (A); klassifikasjon via
      $\det J,\operatorname{tr}J$ (B); full grenselags-koreografi inkl. $\delta$-begrunnelse + matching
      (C); skalaer begrunnet ved balansering (D); bevaringslov utledet fra integralform (E,F); fysisk
      tolkning der oppgaven ber om det.
- [ ] **Leserkrav:** Forkunnskaper-blokk med kryssbok-lenker (kun til eksisterende kapitler — matematikk-
      lenkene i §3 er merket `(verifiser lenke)`, sjekk mot faktiske kapittel-id-er) + `collapsible`
      Symbol- og formelliste sist i hvert delkapittel; «bør kjenne til»-stoff plassert ETTER kjernestoffet
      og merket; Del 0 har «Slik leser du»-, «Lite tid?»-, deltidsrute- og «lese mye, skrive lite»-bokser
      + kildenote.
- [ ] **Kildeforbehold + statusnote synlig:** Del 0 (kap. 0.1) og alle tre øvingseksamener sier eksplisitt
      at prosjektdelen (25 %) ikke er i arkivet (alt om prosjekt utledet `(verifiser)`), at malen bygger på
      H2005–H2023, og at TMA4195 ble verifisert aktivt 2026-07-11 (status kan endres).
- [ ] **«Hva som ikke testes» synlig:** Del 0 rammer eksplisitt inn at variasjonsregning/Euler–Lagrange,
      Fourier/separasjon av variable og numeriske metoder IKKE er en del av dette emnet (0/19).
- [ ] **Opphavsrett:** alle oppgaver, modeller, talleksempler og øvingseksamener er NYSKREVNE — ingen
      formuleringer fra NTNU-oppgavesett eller løsningsforslag. Metodenavn, teoremer og standard
      fagnotasjon (Buckingham, Rankine–Hugoniot, Darcy, Fick, Jacobi) er fritt fagstoff.
- [ ] **`(verifiser)`-gjennomgang:** grep `-i verifiser` — alle markerte detaljer (prosjektpremisser,
      kryssbok-lenker, TMA4195-status, betingede matematiske påstander) fagfellesjekkes i fase 6.
- [ ] **Verifiser rendering:** prod-server + curl mot kapittel- og narrativ-ruter (200 + kapittelspesifikk
      streng), jf. `getChapterMeta`-lærdommen. ALDRI meld ferdig uten dette.

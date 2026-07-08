# Eksamensanalyse: MAS116 Hydrodynamikk — Høgskulen på Vestlandet (HVL)

> Grunnlagsdokument for eksamensrettet lærebok i marin hydrodynamikk. Bygger på **~20 maskinlesbare eksamenssett og ~30 lesbare løsningsforslag fra MAS116 (og forgjengerkodene) i perioden ca. 1988–2024**, sammen med det utleverte formelarket og den offisielle pensum-/undervisningsplanen. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller fasitformuleringer. Analysen er kvantitativ der kildene tillater det.
>
> Dette er **marin hydrodynamikk / fluidmekanikk for maritim ingeniørutdanning**, ikke matematikk. Tyngdepunktet ligger på *anvendt fysikk og ingeniørmetode*: lineær bølgeteori, Morisons ligning for bølgekrefter på slanke marine konstruksjoner, og skipsmotstand/propulsjon fra modellforsøk. Faget har en usedvanlig **stabil eksamensform**: to store, likt vektede oppgaver — én om motstand/propulsjon, én om bølgekrefter — praktisk talt uendret i over 20 år. Boken skal speile dette.

---

## 0. Emnekode, avgrensning og kildekritikk

**Emnet.** Faget heter *Hydrodynamikk*, emnekode **MAS116**, og tilhører maskin-/marinteknisk ingeniørutdanning ved Høgskulen på Vestlandet (HVL, campus Bergen). Det gir **10 studiepoeng** og er **aktivt** i studieåret 2026/2027. Emneansvarlig på de nyere settene er Thore C. Thuestad. Arkivet strekker seg langt tilbake til forgjengerinstitusjonene (Bergen ingeniørhøgskole / Høgskolen i Bergen), og eldre sett bærer datostempler helt tilbake til 1988. Emnekoden MAS116 dukker opp på de nyeste settene; eldre sett er kun datomerket. Til tross for det lange tidsspennet er **oppgavemønsteret bemerkelsesverdig konstant** (se del 1), slik at hele arkivet er relevant.

**Arkivets omfang.** Mappen `~/Desktop/Eksamner/HVL/MAS116-Hydrodynamikk/` inneholder **188 filer**, hvorav **54 er løsningsforslag**. Filene fordeler seg på:

- **Eksamensoppgaver (PDF):** `Eks_jan_XX.pdf` (kontinuasjon/utsatt prøve i januar) og `Eks_mai_XX.pdf` (ordinær vårprøve), ~2017–2024.
- **Løsningsforslag (PDF):** `..._løsning.pdf` — mange fra 2003–2016, skrevet i Mathcad.
- **Eldre eksamener (DOC/DOCX):** `EKSaugXX.doc`, `EKSdesXX.doc`, `EksJunXX.doc`, `EKSmai-XX.doc`, `EKS94*.DOC` osv. — dekker ~1988–2019, ofte med både bokmål- og nynorskvariant (`...N.doc`).
- **Kapitteleksempler:** `Eksempel 1–11 …pdf` (regnede eksempler på bølge, Morison, trykk, motstand, propulsjon), `ch0Xny_eksempler.pdf`.
- **Irregulær sjø-eksempler:** `Eksempel_irregulær_sjø_miljøstatistikk_1–3.pdf` (kun bildeskann).
- **Hjelpemidler/støtte:** `Bølgeformler_cos.pdf` (formelark), `Formelsamling_trigometri.pdf`, `Hyperbel funksjoner.pdf`, `Integral of hyperbolic functions.pdf`, `PENSUM_spesifisert_rev0.pdf`, `Undervisningsplan V24.pdf`, `Oppg_vehefte_i_MATLAB…pdf`, øvingsark `Øv1–Øv4`, forelesningsnotater `ING125Forelesning*`.

**Lesbart innhold vs. skann.** Tekstuttrekk (`pdftotext` / `textutil`) viser at kildene deler seg tydelig:

| Kategori | Status | Merknad |
|---|---|---|
| PDF-løsningsforslag 2003–2016 | **Lesbare** (Mathcad-tekstlag) | ~15 sett: mai03, mar04, mai05, jun06, nov06, jun07, jun08, jun09 (+B/C), mai10 (+B/ITTC), mars11, mai12, mai13, jun14, vår15, jan16 — kjerne­grunnlaget |
| PDF-løsninger jan19, jan20 | **Lesbare** | Solid metodisk innsikt |
| PDF-eksamen jan24, mai20, mai23 (+løsning) | **Lesbare** | Nyeste settene med tekstlag; jan24 og mai23 er de mest komplette |
| PDF-eksamen jan19, jan21–23, mai17, mai18, mai21, mai22 | **Skann** (tomt tekstlag) | Registrert på metadata, ikke innhold |
| DOC/DOCX-eksamener 1988–2019 | **Lesbare** via `textutil` | ~89 filer; mai17/18/19-docx og eldre bekrefter mønsteret |
| `Bølgeformler_cos.pdf`, `Formelsamling_trigometri.pdf` | **Skann** (bildefil) | MEN: hele formelarket er gjengitt som tekstlag inne i `Eks_mai23.pdf` — derfra er del 6 rekonstruert |
| Irregulær sjø-eksempler | **Skann** | Kun bilde; innhold ikke tekstuttrukket |

Til sammen er **~20 eksamenssett og ~30 løsningsforslag lest i innhold**; skannede sett er registrert på metadata. Løsningsforslagene (i Mathcad) er den viktigste kilden til *sensorkrav og metode*, fordi de viser nøyaktig hvilke steg og begrunnelser som forventes.

**Arkivet er ferskt.** I motsetning til mange andre fagarkiv går dette helt frem til **januar 2024**, og MAS116 er verifisert aktivt for 2026/2027. Gapet mellom nyeste dokumenterte sett og dagens emneplan er dermed lite (~2–3 år), og prognosene i del 7 kan kalibreres direkte mot 2020–2024-formen med høy sikkerhet.

**Ett avgrensende funn (viktig for boken).** Emneplanens *undervisning* dekker fire deler: (I) lineær bølgeteori, (II) Morison/bølgekrefter, (III) irregulær sjø og miljøstatistikk, og (IV) motstand og propulsjon. Men **skoleeksamen dekker konsekvent bare to av disse**: motstand/propulsjon (oppgave 1) og bølgeteori/Morison (oppgave 2). Et systematisk søk gjennom samtlige lesbare eksamener (PDF + DOC/DOCX, ~1988–2024) fant **null** eksamensspørsmål om irregulær sjø, bølgespektre, signifikant bølgehøyde, RAO/transferfunksjoner eller kort-/langtidsstatistikk. Del III eksamineres i stedet gjennom obligatoriske lab- og regneøvinger (MorisonLab, SkipsLab, Øving 1–4). Dette er avgjørende for lærebokprioriteringen (se del 7 og 8).

---

## 1. Eksamensform og utvikling

MAS116 vurderes med **én skriftlig skoleeksamen, 4 timer (kl. 09:00–13:00)**. Forsidene er konsekvente over hele det nyere arkivet:

- **Antall oppgaver: 2.** «Oppgave 1 og 2 teller likt» (eller «tilnærma likt»).
- **Hjelpemidler:** *Enkel kalkulator uten kommunikasjonsmulighet* + skrive-/tegnesaker. Enkelte eldre sett tillater i tillegg «tekniske tabeller». Et **formelark på 4 sider vedlegges alltid** og «antas som kjent» (se del 6).
- **Vedlegg:** typisk 4 (av og til 6) sider med formelark + friprøve-/BP-diagram for propell.
- **Målform:** både bokmål og nynorsk i samme hefte (studenten velger).
- **Adgang:** obligatoriske arbeidskrav (4 regneøvinger + 2 labrapporter, MorisonLab og SkipsLab) må være godkjent for å gå opp til eksamen.

**Fast todelt struktur — fagets signatur.** Praktisk talt hvert eneste sett fra 1988 til 2024 har samme skjelett:

| Oppgave | Tema | Typisk vekt |
|---|---|---|
| **Oppgave 1** | **Motstand og propulsjon** — modellforsøk, motstandsberegning (Froude/ITTC eller formfaktor/Prohaska), slepeeffekt, valg og dimensjonering av propell fra BP-/friprøvediagram, kavitasjonskontroll | ~50 % |
| **Oppgave 2** | **Bølgeteori og bølgekrefter** — bølgelengde/dispersjon, masse-/dragdominans, Morisons ligning på (ofte skråstilt) slankt element, symbolsk oppsett + numerisk integrasjon (Simpson), statisk/dynamisk kraftbalanse (ballast, oppdrift, moment) | ~50 % |

Innenfor hver oppgave er det 4–6 delpunkter (A, B, C, …), ofte med *eksplisitt vekttall per delpunkt* på de nyere settene (f.eks. A=1,0; E=2,5). Delpunktene blander alltid **kortsvar/forklaringsspørsmål** (teori: «forklar forskjellen på Froudes metode og formfaktormetoden») med **regneoppgaver**.

**Gjennomgående instruks:** *«Beregningsoppgaver skal løses symbolsk før du setter inn tall. Benytt egendefinerte symbol der disse ikke er gitt.»* Dette er trykt på nesten hvert sett og er et poenggivende krav (se del 4).

**Utvikling over tid — påfallende liten.** Faget har ikke gjennomgått noe epokeskifte à la mange matematikk­emner. De samme to oppgavetypene, den samme metodikken (Froude/ITTC/Prohaska; Morison med Simpson-integrasjon) og det samme formelapparatet går igjen fra de eldste DOC-filene til jan24. Mindre variasjoner:
- **Kontekst-innpakning** moderniseres: eldre sett bruker tankskip/lekter/betonganker; nyere sett bruker offshore vindturbin-fagverk (mai23), rørledningsutslep (jan20), og halvplanende hurtigbåter/ubåter.
- **Hjelpemiddelnyanse:** noen eldre sett nevner «tekniske tabeller»; de nyeste presiserer «enkel kalkulator uten kommunikasjon».
- **mai20** er merket «hjemmeeksamen» (covid-tilpasning) — ellers identisk form.

**Konsekvens for boken.** Fordi formen er så stabil, er *hele* arkivet prediktivt. Boken bør bygges rundt de to søylene motstand/propulsjon og bølgekrefter/Morison, med teori-kortsvar og regnemetode side om side — nøyaktig slik eksamen blander dem.

---

## 2. Temafrekvens-tabell

Celleverdi = antall lesbare sett/løsningsforslag der temaet forekommer, av ~20 innholdslesbare eksamenssett + løsninger. Fordi strukturen er så fast, er mange kjernetemaer nær 100 %. «Score» er anslått gjenganger-andel.

| Tema | Oppgave | Forekomst | **Score** | Trend |
|---|---|---|---|---|
| **Motstandsberegning fra modellforsøk** (Froude / ITTC / formfaktor) | 1 | ~alle | **~100 %** | Ryggrad, helt stabil |
| **Slepeeffekt (PE) fra motstandskurve** | 1 | ~alle | **~100 %** | Stabil |
| **Modellskalering** (Froudes lov, korresponderende fart, modellvekt) | 1 | ~alle | **~100 %** | Stabil |
| **Morisons ligning — masse- + dragledd** på slankt element | 2 | ~alle | **~100 %** | Ryggrad, stabil |
| **Bølgelengde / dispersjonsrelasjon** (\(\omega^2=gk\tanh kh\)) | 2 | ~alle | **~100 %** | Stabil; alltid oppgave 2A |
| **Masse- vs. dragdominans** (vurdering mot \(H/D\)- og \(D/\lambda\)-kriterier + graf) | 2 | ~alle | **~95 %** | Stabil; fast delpunkt |
| **Dyp/grunt/endelig vann-klassifisering** (\(h/\lambda\)) | 2 | ~alle | **~95 %** | Stabil |
| **Propellvalg fra BP-/friprøvediagram** (P/D, virkningsgrad, turtall) | 1 | ~mange | **~85 %** | Stabil |
| **Symbolsk oppsett av bølgekrefter** (horisontal + vertikal, masse + drag) | 2 | ~mange | **~85 %** | Stabil |
| **Numerisk integrasjon av kraft (Simpson, n=2)** langs element | 2 | ~mange | **~80 %** | Stabil; kjerneteknikk |
| **Skråstilt/tilfeldig orientert element** (vinkel β/α, normalkomponent) | 2 | ~mange | **~75 %** | Stigende i nyere sett |
| **Kavitasjonskontroll** (Burrill / Auf'm Keller / trykkdifferens) | 1 | ~mange | **~70 %** | Stabil (ofte «ikke etterspurt», men i fasit) |
| **Teori-kortsvar motstand** (Froude vs. formfaktor vs. Prohaska; ubåt neddykket) | 1 | ~mange | **~80 %** | Stabil; fast A/B-punkt |
| **Friksjons-/form-/bølgemotstand — oppdeling og fysikk** | 1 | ~mange | **~75 %** | Stabil |
| **Reynolds-tall og grensesjikt** (hvorfor \(C_F\) modell > skip) | 1 | ~mange | **~60 %** | Stabil teoripunkt |
| **Partikkelbaner / partikkelhastighet / -akselerasjon i bølge** | 2 | ~mange | **~65 %** | Stabil |
| **Dynamisk trykk under bølge** | 2 | ~flere | **~55 %** | Stabil |
| **Statisk kraftbalanse: ballast, oppdrift, reserveoppdrift** | 2 | ~flere | **~45 %** | Kontekstavhengig (rør/anker) |
| **Bøyemoment / momentberegning** (angrepspunkt, trippelskalarprodukt) | 2 | ~flere | **~40 %** | Stabil sidebein |
| **Fasevinkel for maks. total-/drag-/massekraft** | 2 | ~flere | **~45 %** | Stigende |
| **Energitransport i bølger** | 2 | ~få | **~15 %** | Sjelden på eksamen (mer i eksempler) |
| **Irregulær sjø / spektre / Hs / RAO / stat.** | — | **0** | **0 %** | Kun obligatorisk øving — aldri på skoleeksamen |
| **Ren fluidmekanikk-repetisjon** (Bernoulli, kontinuitet) som egen oppgave | — | 0 | **0 %** | Kun forkunnskap/repetisjon |

### Viktigste funn

1. **To likt vektede søyler bærer hele faget.** Oppgave 1 (motstand + propulsjon) og oppgave 2 (bølgeteori + Morison) forekommer i praksis på *hvert* sett og teller likt. En bok som ikke gjør disse to blokkene til hovedkapitler, bommer på eksamen.

2. **Morisons ligning er den mest sentrale enkeltmetoden.** Nesten hvert oppgave-2 dreier seg om å (a) klassifisere bølgeregimet (dyp/grunt vann via \(h/\lambda\)), (b) avgjøre masse- vs. dragdominans, (c) sette opp masse- og dragledd symbolsk for et (ofte skråstilt) slankt element, og (d) integrere kraften numerisk med **Simpson (n=2)**. Denne firetrinns-sekvensen er selve motoren i oppgave 2.

3. **Motstand fra modellforsøk følger en fast oppskrift.** Studenten skal alltid kunne: plotte/lese modellens motstandskurve → skalere til korresponderende fullskala-fart (Froudes lov) → dele opp i friksjons- og restmotstand (ITTC/Froude) *eller* viskøs + bølgemotstand (formfaktor/Prohaska) → legge til korrelasjonskoeffisient \(C_A\) → regne skipets slepemotstand og **slepeeffekt \(P_E\)**. Valg av metode (og *begrunnelse* av valget) er et fast poeng: strømlinjeformede skip → formfaktor; halvplanende/hurtiggående → Froude/ITTC.

4. **Propulsjon avslutter oppgave 1.** Fra slepeeffekt via skrogvirkningsgrad til nødvendig levert effekt, deretter **valg av propell fra BP-diagram** (finn P/D, virkningsgrad \(\eta_0\), turtall) og **kavitasjonssjekk** (Burrill / Auf'm Keller). Kavitasjonskontrollen står ofte i fasit merket «ikke etterspurt i oppgaven», men dukker jevnlig opp som eksplisitt delspørsmål.

5. **Irregulær sjø er pensum, men IKKE eksamensstoff.** Til tross for at del III (irregulær sjø, miljøstatistikk, RAO, spektre, kort-/langtidsstatistikk) er tungt vektet i undervisningsplanen, finnes det **null** slike spørsmål på noen skoleeksamen i arkivet. Temaet vurderes utelukkende gjennom obligatoriske øvinger. Dette må styre lærebokens *eksamensretting* (del 7).

6. **Teori-kortsvar er billige, høyfrekvente poeng.** Faste forklaringsspørsmål: hvorfor er \(C_F\) høyere for modell enn skip (Reynolds/grensesjikt); forskjellen på Froudes metode, formfaktormetoden og Prohaskas metode; hva som karakteriserer friksjons- vs. dragdominerte objekter; hvordan en ubåts motstand endres ved dykking. Disse gjentas nesten ordrett fra sett til sett.

---

## 3. Oppgavetype-katalog

Sjangrene som faktisk går igjen, med krav og et omskrevet eksempel. Rekkefølgen følger de to faste oppgavene.

### OPPGAVE 1 — MOTSTAND OG PROPULSJON

### A. Teori-kortsvar om motstand
- **Krav:** Kort, presist skriftlig svar. Faste varianter: (i) forklar hvorfor friksjonsmotstands­koeffisienten er høyere for modell enn for skip (lavere Reynolds-tall → tykkere/mindre turbulent grensesjikt); (ii) redegjør for forskjellen mellom **Froudes/ITTC-metoden** (oppdeling i friksjon + restmotstand) og **formfaktormetoden** (viskøs motstand \(C_V = (1+k)C_{F0}\) + bølgemotstand), inkl. når hver brukes; (iii) forklar **Prohaskas metode** for å finne formfaktoren (\(C_W \propto F_n^4\) ved lave fart) og dens antakelser; (iv) hvordan en ubåts motstands­komponenter endres ved dykking (bølgemotstand elimineres, friksjon/form øker litt → netto reduksjon → høyere fart ved samme effekt); (v) hva som karakteriserer friksjons- vs. dragdominerte legemer og hvorfor skarpkantede objekter har \(C_D\) mindre Reynolds-avhengig enn avrundede.
- **Frekvens:** Nesten hvert sett (A- og/eller B-punkt).
- **Omskrevet eksempel:** «Forklar kort forskjellen mellom Froudes metode og formfaktormetoden for motstandsberegning. Når egner hver metode seg?»

### B. Motstandsberegning fra modellforsøk (slepeeffekt)
- **Krav:** Gitt en tabell modellhastighet vs. modellmotstand \(R_{TM}\) og skipsdata (\(L_S, S_S, \nabla_S\), skala): (1) plott/etabler modellens motstandskurve; (2) beregn modellvekt fra skala; (3) finn **korresponderende modellhastighet** til ønsket fullskala-fart via Froudes lov (\(F_n\) lik); (4) les av \(R_{TM}\), regn \(C_{TM}\); (5) trekk fra friksjon (ITTC-linjen \(C_F = 0{,}075/(\log R_n - 2)^2\)) → restmotstand \(C_R\) (lik for modell og skip) *eller* bruk formfaktor \(1+k\); (6) bygg skipets \(C_{TS}\) inkl. korrelasjonskoeffisient \(C_A\); (7) regn skipets slepemotstand \(R_{TS}\) og **slepeeffekt \(P_E = R_{TS}\cdot V_S\)**. **Begrunn metodevalget.**
- **Frekvens:** ~alle sett (oppgave 1s hovedregning).
- **Omskrevet eksempel:** «Slepeforsøk i skala 1:30 gir tabellen … Beregn modellvekt og skipets slepeeffekt ved 28 knop. Begrunn valg av motstandsmetode.»

### C. Propulsjon og propellvalg
- **Krav:** Fra slepeeffekt til installert effekt: skrogvirkningsgrad \(\eta_H=(1-t)/(1-w)\), fremgangshastighet \(V_A=V_S(1-w)\), levert effekt \(P_D=P_E/(\eta_0\eta_R\eta_H)\). Iterativ **avlesning i BP-diagram** (eller friprøvediagram): anta \(\eta_0\), regn \(B_P\), plott, finn optimalt turtall \(n\), diameter \(D\), stigningsforhold \(P/D\) og revidert \(\eta_0\); gjenta. Ofte todelt spørsmål: «hvilket turtall gir maksimal virkningsgrad?».
- **Frekvens:** ~mange sett (oppgave 1s siste delpunkt).
- **Omskrevet eksempel:** «Velg optimal 4-blads propell for 28 knop fra vedlagt BP-diagram; oppgi \(D\), \(n\), \(P/D\) og \(\eta_0\).»

### D. Kavitasjonskontroll
- **Krav:** Kontroller nødvendig bladarealsforhold \(A_E/A_0\) mot **Burrills** eller **Auf'm Kellers** kriterium, evt. via kavitasjonstall \(\sigma\) og trykkdifferens ved propellsenterets neddykking. Konkluder om valgt propell er kavitasjonsfri.
- **Frekvens:** ~mange sett (av og til «ikke etterspurt», men i fasit).
- **Omskrevet eksempel:** «Kontroller med Auf'm Kellers kriterium om bladarealsforholdet er tilstrekkelig til å unngå kavitasjon.»

### OPPGAVE 2 — BØLGETEORI OG BØLGEKREFTER

### E. Bølgelengde og regimeklassifisering (dispersjon)
- **Krav:** Fra periode \(T\) → sirkelfrekvens \(\omega=2\pi/T\); løs **dispersjonsrelasjonen** \(\omega^2 = gk\tanh(kh)\) for bølgetallet \(k\) (iterativt/numerisk, ofte med dyptvanns-startverdi \(k_0=\omega^2/g\)); bølgelengde \(\lambda=2\pi/k\). Klassifiser vannet: grunt \((h/\lambda<0{,}05)\), endelig \((0{,}05\le h/\lambda\le 0{,}5)\), dypt \((h/\lambda>0{,}5)\). Ved flere vanndyp gjøres dette for hvert.
- **Frekvens:** ~alle sett (fast oppgave 2A).
- **Omskrevet eksempel:** «For \(T=15\) s og \(h=80\) m, beregn bølgelengden og avgjør om det er dypt vann.»

### F. Masse- vs. dragdominans
- **Krav:** Vurder **Morisons anvendelighet** (slankt element: \(\lambda/D>5\)) og om konstruksjonen er **masse-** eller **dragdominert** (kriterium \(H/D\) mot \(4\pi\) på dypt vann, evt. avlest fra vedlagt graf). Diskuter forbeholdene: endelig vanndyp forskyver grensen, strøm øker dragkrefter, element som ikke går fra bunn til overflate bryter grafens forutsetninger → «alle bidrag bør tas med».
- **Frekvens:** ~alle sett (fast delpunkt).
- **Omskrevet eksempel:** «Vurder anvendelse av Morisons ligning og masse/dragdominans mot vedlagt graf. Hvilke forutsetninger ligger til grunn for grafen?»

### G. Symbolsk oppsett av bølgekrefter (Morison)
- **Krav:** Skriv opp **horisontal og vertikal masse- og dragkraft** for elementet som funksjon av oppgitte parametere, med partikkelhastighet \(u,w\) og -akselerasjon \(a_x,a_z\) fra formelarket. For **skråstilt element** (vinkel β med horisontalplanet): bruk normalkomponent \(u' = u\sin\beta - w\cos\beta\), \(a' = a_x\sin\beta - a_z\cos\beta\) og \(dz' = dz/\sin\beta\). Integralene skal *ikke* løses analytisk — kun settes opp.
- **Frekvens:** ~mange sett (oppgave 2C).
- **Omskrevet eksempel:** «Sett opp de symbolske uttrykkene for resulterende totalkraft normalt på et element med vinkel α mot bølgeretningen. Integralene skal ikke løses analytisk.»

### H. Numerisk integrasjon av kraft (Simpson)
- **Krav:** Beregn total masse-/dragkraft (eller totalkraftens størrelse og retning) langs elementet ved **Simpsons metode med n=2** (tre punkter: endene + midt), i et gitt øyeblikk (typisk når horisontal dragkraft er maksimal). Regn ut partikkelbevegelse i hvert Simpson-punkt, sett inn i Morison, vekt med Simpson-faktorene \((1,4,1)\). Oppgi resulterende krafts størrelse og retning (vektorsum av horisontal og vertikal). Tillatte forenklinger skal begrunnes.
- **Frekvens:** ~mange sett (oppgave 2D/E).
- **Omskrevet eksempel:** «Beregn totalkraftens størrelse og retning numerisk (Simpson, n=2) for α=60°, i det øyeblikk horisontal dragkraft er størst.»

### I. Fasevinkel for maksimal kraft
- **Krav:** Bestem fasevinkelen \(\omega t\) som gir maksimal massekraft (der partikkel­akselerasjonen er maks), maksimal dragkraft (der partikkelhastigheten er maks), og maksimal *total* kraft. Skisser masse-, drag- og totalkraft over en bølgeperiode \((0-2\pi)\). Poeng: massekraft og dragkraft er 90° ute av fase; totalkraftens topp flytter seg med bølgehøyden (dragdominans → topp nær hastighetsmaks; massedominans → topp nær akselerasjonsmaks).
- **Frekvens:** ~flere sett, stigende.
- **Omskrevet eksempel:** «Vis ved hvilken fasevinkel maksimal totalkraft inntreffer for henholdsvis lav (\(H<5\) m) og høy (\(H>20\) m) bølgehøyde.»

### J. Statisk kraftbalanse: ballast, oppdrift, moment
- **Krav:** For neddykkede konstruksjoner (rør under utslep, anker, pontong): balanser vekt, oppdrift (deplasement) og maksimal dynamisk (vertikal) bølgekraft. Bestem **ballastvekt** som hindrer slakke liner (ofte med sikkerhetsmargin, f.eks. 50 %), **fordel ballasten** for minst mulig bøyemoment (jevnt fordelt for nøytralitet + konsentrert mot endene), og bestem **bøyers oppdriftskapasitet** med krav til reserveoppdrift. Momentberegning bruker angrepspunkt og evt. trippelskalarprodukt for moment om vilkårlig akse.
- **Frekvens:** ~flere sett (kontekstavhengig: rør/anker/pontong).
- **Omskrevet eksempel:** «Bestem ballastvekten slik at linene aldri blir slakke (50 % margin), og hvordan ballasten bør fordeles for minst mulig bøyemoment.»

### K. Partikkelbaner, -hastighet og dynamisk trykk
- **Krav:** Bruk lineær bølgeteori-uttrykkene (formelark) for \(u, w, a_x, a_z\) og dynamisk trykk \(p_d\) — riktig variant for grunt/endelig/dypt vann. Skisser partikkelbaner (sirkulære på dypt vann, elliptiske på grunt), og vis hvordan vertikal partikkelbevegelse avtar mot bunnen. Ofte grunnlag for de øvrige delpunktene.
- **Frekvens:** ~mange sett (fundament for oppgave 2).
- **Omskrevet eksempel:** «Skisser bølgeprofil, horisontal/vertikal partikkelhastighet og dynamisk trykk over én bølgeperiode.»

---

## 4. Sensorens krav

Utledet fra oppgaveinstrukser og (særlig) løsningsforslagene, som er detaljerte Mathcad-utregninger:

1. **«Løs symbolsk før du setter inn tall.»** — trykt på nesten hvert sett. Fasit fører alltid det symbolske uttrykket først, deretter tallinnsetting. Rene tallsvar uten symbolsk oppsett gir tap. Egendefinerte symboler skal innføres der de mangler.

2. **Metodevalg skal begrunnes.** I motstandsoppgaven belønnes eksplisitt begrunnelse av *hvorfor* man velger Froude/ITTC (hurtiggående/halvplanende fartøy, endret våt overflate) framfor formfaktor/Prohaska (strømlinjeformet skip med stabilt strømningsbilde). Å bare regne uten å begrunne valget mister poeng.

3. **Forutsetninger og forbehold skal diskuteres.** Ved masse/dragdominans forventer fasit at studenten *ikke* bare leser av grafen, men kommenterer at endelig vanndyp, strøm og et element som ikke går bunn-til-overflate bryter grafens forutsetninger — og at «alle kraftbidrag bør tas med». Denne kritiske vurderingen er gjennomgående poenggivende.

4. **Riktig bølgeregime.** Feil valg av dyp-/grunt-/endeligvanns-formler for \(u, w, a, p_d\) forplanter seg gjennom hele oppgave 2. Fasit begynner alltid med å klassifisere vannet fra \(h/\lambda\).

5. **Simpson-integrasjon korrekt oppsatt.** Numerisk kraftberegning skal vise de tre punktverdiene, Simpson-faktorene \((1,4,1)\) og steglengden. Fasit sammenligner ofte med eksakt løsning og oppgir avvik (men eksakt løsning kreves normalt ikke).

6. **Fysikkforståelse i kortsvar.** Teorispørsmålene krever *forklaring*, ikke stikkord: grensesjikt/Reynolds for \(C_F\)-forskjellen, fysisk oppdeling av motstandskomponentene, faseforholdet mellom masse- og dragkraft. Fasit gir fyldige, resonnerende svar.

7. **Standardstørrelser og enheter.** Slepeeffekt i kW, krefter i kN, riktig tetthet (sjøvann 1025 kg/m³ vs. ferskvann 999), konsekvent enhetsbruk. Knop↔m/s-omregning (1 knop = 1852/3600 m/s) forventes.

### Karakterskiller (utledet)
- **Bestått-sjiktet** mestrer de mekaniske standardene: modellskalering + \(C_{TM}\) + slepeeffekt, bølgelengde fra dispersjonsrelasjonen, oppsett av Morison-leddene, og de faste teori-kortsvarene.
- **Midtsjiktet** behersker i tillegg propellvalg fra BP-diagram, Simpson-integrasjon av kraft på skråstilt element, og korrekt regimeklassifisering med riktige partikkelformler.
- **Toppsjiktet** kjennetegnes av: (i) begrunnet metodevalg og kritisk diskusjon av grafenes/kriterienes forutsetninger; (ii) korrekt håndtering av skråstilt/tilfeldig orientert element (normalkomponenter, \(dz'\)); (iii) fullstendig statisk+dynamisk kraftbalanse (ballast, oppdrift, moment, fordeling); (iv) presis fysisk resonnering rundt fasevinkler og masse/dragdominans.

---

## 5. Typiske feil

Dokumentert i/utledet fra løsningsforslagene og oppgavekonstruksjonen:

1. **Tallinnsetting for tidlig** — hopper over det symbolske oppsettet som instruksen krever; taper både poeng og oversikt.
2. **Feil bølgeregime** — bruker dyptvannsformler på endelig/grunt vann (eller omvendt), uten å sjekke \(h/\lambda\) først. Forplanter feil gjennom hele oppgave 2.
3. **Ukritisk avlesning av masse/drag-grafen** — glemmer at endelig vanndyp, strøm og et delvis neddykket element bryter grafens forutsetninger; konkluderer dominans uten forbehold.
4. **Feil motstandsmetode / ubegrunnet valg** — bruker formfaktormetoden på halvplanende/hurtiggående fartøy (der strømningsbildet endrer seg), eller velger uten å begrunne.
5. **Glemt korrelasjonskoeffisient \(C_A\)** eller feil håndtering av rest-/viskøs motstand ved skalering modell→skip.
6. **Skråstilt element behandlet som vertikalt** — glemmer normalkomponenten \(u'=u\sin\beta-w\cos\beta\) og lengdekorreksjonen \(dz'=dz/\sin\beta\).
7. **Simpson feil oppsatt** — feil faktorer \((1,4,1)\), feil steglengde, eller regner bare i ett punkt.
8. **Fasevinkel-forvirring** — antar at masse- og dragkraft topper samtidig; overser 90°-faseforskyvningen og at totalkraftens topp flytter seg med bølgehøyden.
9. **Enhets-/tetthetsfeil** — ferskvanns- i stedet for sjøvannstetthet, knop ikke omregnet, effekt i feil enhet.
10. **Kavitasjonssjekk hoppet over** — glemmer bladarealskontroll (Burrill/Auf'm Keller) når propellen er valgt.
11. **Statisk balanse ufullstendig** — glemmer oppdrift eller reserveoppdriftskrav i ballast-/bøyeberegning, eller fordeler ballasten uten hensyn til bøyemoment.
12. **Bruker tid på irregulær sjø / spektre** — som *ikke* kommer på skoleeksamen; bortkastet forberedelse hvis man ikke skiller eksamensstoff fra obligatorisk øvingsstoff.

---

## 6. Formel- og notasjonsapparat

**Formelark på 4 sider utleveres alltid** og «antas som kjent». Selve formelarkfilen (`Bølgeformler_cos.pdf`) er en bildeskann, men hele innholdet er gjengitt som tekstlag inne i `Eks_mai23.pdf`. Innholdet (studenten trenger *ikke* pugge, men må kunne *bruke* det):

**Motstand og propulsjon:**
- **ITTC-friksjonslinje:** \(C_F = 0{,}075/(\log R_n - 2)^2\); todimensjonal \(C_{F0}\) (Hughes).
- **Motstandskoeffisient:** \(C_T = R_T/(\tfrac12\rho S V^2)\); Reynolds \(R_n = VL/\nu\); Froude \(F_n = V/\sqrt{gL}\).
- **Prohaska:** \(C_T/C_{F0} = (1+k) + y\,F_n^4/C_{F0}\) (formfaktor \(1+k\)).
- **Slepeeffekt** \(P_E\), **levert effekt** \(P_D\), virkningsgrader: fremgang \(V_A=V(1-w)\), skrog \(\eta_H=(1-t)/(1-w)\), thrust \(R_T=T(1-t)\); \(J=V_A/(nD)\).
- **BP-parameter** \(B_P\) og \(\delta\) for propelldiagram; **Burrill** og **Auf'm Keller** kavitasjonskriterier for bladarealsforhold \(A_E/A_0\); kavitasjonstall \(\sigma\); \(V_{0{,}7}^2=(0{,}7\pi Dn)^2+V_A^2\).

**Lineær bølgeteori (alle tre regimer — grunt/endelig/dypt vann):**
- **Hastighetspotensial** \(\phi\), **dispersjonsrelasjon** \(\omega^2 = gk\tanh(kh)\), \(\lambda = \tfrac{gT^2}{2\pi}\tanh(kh)\).
- **Bølgeprofil** \(\zeta = \zeta_a\cos(\omega t - kx)\).
- **Partikkelhastighet** \(u, w\) og **-akselerasjon** \(a_x, a_z\) med \(\cosh/\sinh\)-dybdefaktorer (egne uttrykk for grunt, endelig og dypt vann).
- **Dynamisk trykk** \(p_d\).

**Morisons ligning:**
- \(dF_D = \tfrac12 C_D \rho D\,|u|u\,dz\) (dragledd), \(dF_M = C_M \rho \tfrac{\pi D^2}{4} a\,dz\) (masseledd).
- **Skråstilt element** (vinkel β): \(u' = u\sin\beta - w\cos\beta\), \(a' = a_x\sin\beta - a_z\cos\beta\), \(dz' = dz/\sin\beta\).
- **Anvendelighet:** \(\lambda/D > 5\). **Massedominans:** \(H/D < 4\pi\) (dypt vann).
- **Vektoralgebra** for vilkårlig orienterte elementer: normalkomponent \(V_N\) via skalarprodukt; **moment om vilkårlig akse** via trippelskalarprodukt.

**Numerikk og konstanter:**
- **Simpsons metode:** \(\int_a^b f\,dx \approx \tfrac{h}{3}\sum SF_i f(x_i)\), faktorer \((1,4,1)\) for n=2.
- Tetthet: ferskvann 999, sjøvann 1025, luft 1,23, stål 7850 kg/m³; kinematisk viskositet ferskvann \(1{,}14\cdot10^{-6}\), sjøvann \(1{,}22\cdot10^{-6}\) m²/s; \(g=9{,}806\) m/s²; 1 knop = 1852/3600 m/s.
- Tilleggsark: trigonometri, hyperbolske funksjoner og deres integraler (til dispersjons- og partikkelformlene).

**Notasjonskonvensjoner boken bør speile:** \(z\) positiv oppover med origo i stillevannsnivå; \(\zeta_a\) bølgeamplitude, \(H=2\zeta_a\) bølgehøyde; fasevinkel \(\omega t\); koeffisienter \(C_D\) (drag, typisk ~0,7–1,1), \(C_M\) (masse, typisk 2,0); virkningsgrader med indeks (\(\eta_0, \eta_R, \eta_H, \eta_m\)).

**Verktøy:** Undervisningen bruker **MATLAB** i regne- og laboppgaver (partikkelbaner, MorisonLab, SkipsLab), men *skoleeksamen* tillater kun enkel kalkulator — MATLAB testes ikke på selve eksamen. Løsningsforslagene er skrevet i Mathcad (forklarer notasjon som `:=`).

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (bærer eksamen, ~100 % frekvens)
1. **Morisons ligning på slankt element** — masse- + dragledd, symbolsk oppsett, horisontal + vertikal, inkl. **skråstilt/tilfeldig orientert** element (normalkomponenter). Fagets mest sentrale metode.
2. **Bølgelengde og regimeklassifisering** — løs dispersjonsrelasjonen \(\omega^2=gk\tanh kh\) numerisk; klassifiser dyp/grunt/endelig vann; velg riktige partikkel-/trykkformler deretter.
3. **Masse- vs. dragdominans** — kriterier + graf, *med* kritisk diskusjon av forutsetningene (vanndyp, strøm, delvis neddykket element).
4. **Motstandsberegning fra modellforsøk** — modellskalering (Froude), \(C_{TM}\), ITTC/Froude vs. formfaktor/Prohaska (med begrunnet valg), korrelasjonskoeffisient, **slepeeffekt \(P_E\)**.
5. **Numerisk integrasjon av kraft (Simpson, n=2)** — den faste beregningsteknikken i oppgave 2.
6. **Teori-kortsvar motstand** — Froude vs. formfaktor vs. Prohaska; \(C_F\) modell vs. skip; ubåt neddykket; friksjons/drag-dominans.

### Nivå 2 — må kunne (gir bredden)
7. **Propulsjon og propellvalg fra BP-diagram** — virkningsgradskjede, iterativ diagramavlesning (P/D, \(\eta_0\), n).
8. **Kavitasjonskontroll** — Burrill / Auf'm Keller / trykkdifferens.
9. **Partikkelbaner, -hastighet/-akselerasjon og dynamisk trykk** — grunnlaget for oppgave 2, inkl. dybdeavhengighet.
10. **Statisk kraftbalanse** — ballast, oppdrift, reserveoppdrift, bøyemoment og momentfordeling (rør/anker/pontong-kontekster).
11. **Fasevinkler for maksimal kraft** — faseforhold masse/drag, hvordan totalkrafttoppen flytter seg med bølgehøyde.
12. **Oppdeling og fysikk av motstandskomponenter** — friksjon/form/bølge, grensesjikt, Reynolds.

### Nivå 3 — bør dekkes (lavere/kontekstavhengig frekvens)
13. **Energitransport i bølger** — sjelden på eksamen, men i kapitteleksemplene; ta med som bakgrunn.
14. **Sammensatte konstruksjoner** (flere sylindre + bjelke, fagverk) — utvidelse av Morison til flere elementer.
15. **Fluidmekanikk-repetisjon** (Bernoulli, kontinuitet, grensesjikt) — nødvendig *forkunnskap*, men ikke egen eksamensoppgave; dekk kompakt som innledningskapittel.

### Bevisst nedprioritert for *eksamensretting* (men pensum)
16. **Irregulær sjø, miljøstatistikk, bølgespektre, RAO/transferfunksjoner, kort-/langtidsstatistikk** — sentralt i undervisningsplanen (del III) og i de obligatoriske øvingene, men **aldri på skoleeksamen** i hele arkivet (1988–2024). Boken bør dekke temaet for *fagets skyld og for de obligatoriske arbeidskravene*, men tydelig merke at det ikke kommer på skriftlig eksamen — slik at eksamensforberedelsen konsentreres om de to reelle eksamenssøylene.

### Prognose for neste eksamen (basert på 2017–2024-malen)
**To likt vektede oppgaver over 4 timer, enkel kalkulator + 4-siders formelark.** Forvent:
- **Oppgave 1 = motstand + propulsjon:** 1–2 teori-kortsvar (Froude/formfaktor/Prohaska, \(C_F\)-forskjell eller ubåt) + en full **motstandsberegning fra modellforsøk med slepeeffekt** (tabell → skalering → \(C_{TM}\) → metodevalg → \(P_E\)) + **propellvalg fra BP-diagram** og evt. **kavitasjonssjekk**.
- **Oppgave 2 = bølgeteori + Morison:** **bølgelengde/dispersjon** + **masse/dragdominans-vurdering** + **symbolsk oppsett av bølgekrefter** på et (sannsynligvis skråstilt) slankt element + **Simpson-integrasjon (n=2)** av totalkraft ved gitt fasevinkel, ofte innpakket i et aktuelt offshore-scenario (vindturbinfundament, rørledning, oppdrettskonstruksjon), gjerne med et **statisk balanse-/ballast-/momentledd**.

**Usikkerhet:** Formen er svært stabil, så prognosen har høy sikkerhet. Restrisiko: (a) en fremtidig emneansvarlig kan tenkes å introdusere et enkelt irregulær sjø-/spektrumspørsmål på skriftlig eksamen — arkivet gir ingen presedens, men undervisningsplanen vektlegger temaet, så et innslag kan ikke helt utelukkes; (b) kontekst-innpakningen moderniseres jevnlig (offshore vind, oppdrett), men metoden er den samme. Verifiser mot første tilgjengelige sett etter jan24 før endelig kalibrering.

---

## 8. Overlapp med eksisterende fag

**Dette er marin hydrodynamikk / anvendt fluidmekanikk — ikke matematikk.** Faget ligger i skjæringspunktet fysikk/marinteknikk og har lite til felles med de rene matematikk- og kalkulusfagene i porteføljen.

- **Mot OsloMet Matematikk 1000 (DAFE1000/FO010A):** Overlappet er **minimalt** og kun på verktøynivå. MAS116 forutsetter grunnleggende **derivasjon og integrasjon** (partikkelhastighet/-akselerasjon fra bølgeprofil; kraftintegraler langs et element) og **numerisk integrasjon (Simpson)** — som MAT1000 dekker. Men MAS116 løser sjelden integraler analytisk («integralene skal ikke løses analytisk»); vekten ligger på *fysisk modellering og numerisk evaluering*, ikke på integrasjonsteknikk. Ingen matriseregning, komplekse tall, differensiallikninger eller lineær algebra av MAT1000-typen. En student trenger MAT1000-nivå matematikk som *forkunnskap*, men de to bøkene deler ikke innhold.

- **Mot fysikk-/mekanikkfag:** Her er det reelt slektskap. MAS116 bygger på **fluidmekanikk** (Bernoulli, kontinuitet, grensesjikt, Reynolds-tall, drag/løft) og **klassisk mekanikk/statikk** (kraftbalanse, moment, oppdrift/Arkimedes, vektoralgebra). Et fysikk- eller mekanikkemne i porteføljen (grensesjikt, viskositet, kraft/moment) vil være det nærmeste naboemnet og et naturlig forkunnskapsgrunnlag. Boken bør ha et kompakt fluidmekanikk-repetisjonskapittel som bro fra slik forkunnskap.

- **Mot andre marintekniske emner:** Innholdet svarer til NTNUs «Marin Teknikk 3» (Pettersen/Steen) og deler av Journée & Massie *Offshore Hydromechanics* — som er kildekompendiene i pensum. Om porteføljen senere får flere maritime/offshore-emner (marin konstruksjonsteknikk, offshore-installasjoner, skipsdesign), vil MAS116 være grunnfaget de bygger på, særlig Morison-delen (bølgekrefter på marine konstruksjoner) og motstands-/propulsjonsdelen (skipsdesign).

**Konklusjon:** MAS116 er et **frittstående marinteknisk fysikkfag** med egen metodikk (Morison, Froude/ITTC-skalering, BP-diagram) som ikke dekkes av noe eksisterende matematikk- eller generisk fag i porteføljen. Boken må skrives fra bunnen som et anvendt hydrodynamikkverk, med matematikk/fysikk kun som forutsatt bakgrunn — ikke som et tillegg til en matematikkbok.

---

## Kildeliste (utvalg)

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/HVL/MAS116-Hydrodynamikk/` (188 filer, ~54 løsningsforslag).

**Eksamenssett lest i innhold (tekstlag):** `Eks_jan24.pdf`, `Eks_mai23.pdf`, `Eks_mai_20.pdf`, `Eks_jan_20.pdf` (PDF); `EKSmai17.docx`, `EKSmai18.doc`, `Eksmai19.docx`, samt eldre DOC/DOCX-sett (`EKSjun06–09`, `EKSmai-12/13`, `EKSmar-11`, `EKS94*`, m.fl. via `textutil`).

**Løsningsforslag lest for metode-/sensorinnsikt:** `Eks_Jan_19_løsning.pdf`, `Eks_jan_20_løsning.pdf`, `Eks_mai23_løsning.pdf`, `Eksjan16_løsning.pdf`, `EksJun06/07/08/09_løsning.pdf` (+B/C), `Eksjun14_løsning.pdf`, `Eksmai03_løsning.pdf`, `EksMai05/10/12/13_løsning.pdf` (+ITTC/B), `Eksmar04_løsning.pdf`, `EksMars11_løsning.pdf`, `EksNov06_løsning.pdf`, `EksVår15_løsning.pdf`, `Eksmar95_løsning.pdf`, `EKSNOV88_løsning.pdf`, samt docx-løsninger `EKSmai17/18_løsning.docx`, `Eksmai19_løsning.docx`.

**Skann (kun metadata, tomt tekstlag):** `Eks_Jan_19.pdf`, `Eks_jan_21/22/23.pdf`, `Eks_mai_17/18/21/22.pdf`, samt formelarkfilene `Bølgeformler_cos.pdf` og `Formelsamling_trigometri.pdf` (formelarkets innhold rekonstruert fra tekstlaget i `Eks_mai23.pdf`) og `Eksempel_irregulær_sjø_miljøstatistikk_1–3.pdf`.

**Formelark:** rekonstruert i sin helhet fra `Eks_mai23.pdf` (grunnlaget for del 6).

**Pensum/emnestruktur:** `PENSUM_spesifisert_rev0.pdf` og `Undervisningsplan V24.pdf` (kilde for del 0/1/8 og bekreftelsen av at irregulær sjø er øvings-, ikke eksamensstoff).

**Kapitteleksempler (metode-referanse):** `Eksempel 1–11 …pdf` (bølge, Morison, trykk, motstand, propulsjon).

**Merknader om kildene:**
- **Stabil form:** oppgavemønsteret (2 likt vektede oppgaver: motstand/propulsjon + bølge/Morison) er konstant fra 1988 til 2024; hele arkivet er derfor prediktivt.
- **Ferskt arkiv:** nyeste sett er jan24, og MAS116 er verifisert aktivt 2026/2027 — lite gap, høy prognosesikkerhet.
- **Eksamen vs. pensum:** del III (irregulær sjø/statistikk) er pensum og øvingsstoff, men opptrer *aldri* på skriftlig eksamen i arkivet — sentralt for eksamensrettingen.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkrav er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasitformuleringer er gjengitt ordrett. Formler og fysiske konstanter (formelarket) er allmenn fagnotasjon og ikke opphavsrettslig beskyttet tekst.

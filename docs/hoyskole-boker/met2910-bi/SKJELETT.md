# Bokskjelett: MET 2910 Matematikk for økonomer — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er destillert fra `EKSAMENSANALYSE.md`
> (**15 sett hovedeksamen/Del 2** 2015V–2023H + samlet eksamen H2025, **6 sett
> grunnleggende del/kontrollprøve/fagoppgave** med fem offisielle
> sensorveiledninger, samt det utdelte **formelarket**, alle fra Handelshøyskolen
> BIs eget arkiv). Arketype: **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene
> der (teori/drill/øvingseksamen) er obligatoriske og gjentas ikke her. Alle
> mønstereksempler i skjelettet er omskrivninger med **nyskrevne tallverdier**;
> forfatteren skal variere dem videre (nye tall, ny bedriftskontekst), aldri
> kopiere inn ordrett.
>
> **Dette er DET FØRSTE BI-faget i fabrikken — mønsteret etableres her.** Nærmeste
> forbilder er `econ1100` og `oslomet-mat1000` («regnetung anvendt
> verktøymatematikk», v3-format), men MET 2910 er **bredere** enn ECON1100 (har
> finansmatematikk, lineær algebra og integrasjonsteknikk som ECON1100 mangler) og
> **grunnere teoretisk** (mangler Lagrange-multiplikator, omhyllingsteorem,
> homogenitet, nivåkurver, implisitt derivasjon). Kalibrer utelukkende mot
> MET 2910-analysen; econ1100/oslomet-mat1000 er **formatforbilder**, ikke faglige
> forbilder.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `met2910-bi` |
| Tittel | **MET 2910 Matematikk for økonomer** |
| Level | `'Høyskole'` |
| Institusjon | **Handelshøyskolen BI** (bachelor i økonomi og administrasjon; 7,5 ECTS, obligatorisk grunnleggende matematikkfag) |
| Arketype | Regnefag (anvendt verktøymatematikk med fast oppgavemal og gjennomført bedriftsøkonomisk innramming) |
| Antall kapitler | **40** (2 eksamenskart/håndverk + 34 tema/drill + 4 eksamenstrening) + 7 prøvekapitler |
| Estimert totaltid | **≈ 2 210 min ≈ 37 timer** (uten prøver) |
| Quiz totalt | **601** (krav ≥500) |
| Flashcards totalt | **534** (krav ≥500) |

**Pitch (ett avsnitt):** MET 2910 er verktøyfaget under hele BI-bacheloren i
økonomi og administrasjon — det leverer regneteknikken som mikro-, makro- og
finansfagene bygger videre på. Eksamen er nå **én samlet 5-timers skoleeksamen
(MET 29107, fra H2025): 6 oppgaver fordelt på 28 likt vektede delpunkter, karakter
A–F**, med **BI-godkjent finanskalkulator (TI BA II Plus) og utdelt formelark**
som eneste hjelpemidler. Faget er så mekanisk og forutsigbart at boka kan bygges
rett mot settet. **Seks temaer forekommer i praksis i hvert sett** (100 %):
derivasjon, løse likninger, løse ulikheter, én-variabel funksjonsdrøfting,
finansmatematikk/annuitet og — fagets **signaturoppgave** — bedriftsøkonomisk
to-variabel-optimering (vis profittfunksjon → partielle deriverte →
stasjonærpunkt → **AC−B²-klassifisering** → maksimalt overskudd → **bibetingelse
løst ved innsetting**). Deretter integrasjon (substitusjon/delvis, 100 %), lineær
algebra (80 %, Cramer→Gauss) og graflesning (67 %). Boka mekaniserer teknikksekken
(Oppgave 1) til et bredt poenggulv, driller signaturoppgaven og finansoppgaven til
de sitter, og — viktigst — dresserer studenten i fagets ene ufravikelige
sensorregel: **all utregning skal vises; kalkulatortastetrykk gir INGEN uttelling,
selv med riktig svar.**

**Kritisk sensorregel #1 — «Vis all utregning» (gjelder HELE boka).** På hvert
eneste sett står setningen: *«Alle utregninger skal vises. Det er ikke nok å kun
oppgi svaret, eller å vise til tastetrykk på kalkulator.»* Dette er fagets sterkeste
enkeltsignal. Konsekvens for boka: (i) hvert løsningsforslag skrives som en
A-besvarelse der **hvert algebrasteg vises på egen linje** i den knappe,
utregningsdrevne stilen sensorveiledningene bruker; (ii) formlene skrives **eksplisitt
ut før innsetting** (abc med diskriminanten skrevet ut, annuitetsformelen satt opp
med tall før den regnes); (iii) boka lærer **de manuelle mellomstegene og
formlene**, ALDRI kalkulatorprosedyrer/tastesekvenser — kalkulatorens TVM-funksjoner
nevnes bare som kontroll, aldri som løsning. **Metoden og korrekt formelvalg bærer
poengene, ikke sluttsvaret** (følgefeil straffes lite; et riktig tall uten utregning
gir 0).

**Kritisk regel #2 — Formelarket utdeles (gjelder HELE boka).** De to siste sidene
i settet inneholder potens-/kvadrat-/logaritmeregler, abc-formelen, derivasjons- og
integrasjonsregler (inkl. **substitusjon** og **delvis integrasjon**),
lineær-funksjon-formler, **geometriske rekker**, **annuitets-/nåverdiformlene** og
**AC−B²-klassifiseringen** av stasjonære punkter i to variabler. Studenten trenger
altså IKKE pugge formlene, men må kunne **velge riktig formel og bruke den raskt**.
Boka peker eksplisitt på hva som står på arket (og trener formelvalg + bruk), og
markerer det få som IKKE står der og må kunne utenat (f.eks.
klassifiserings­tolkningen, at renter i én termin = restgjeld · r). Hvert delkapittels
Symbol- og formelliste-blokk merker «(på formelarket)» der det gjelder.

**Kritisk regel #3 — Fortegnsskjema er obligatorisk (gjelder HELE boka).** Alle
ulikheter og all fortegnsanalyse av $f$, $f'$ og $f''$ løses med **fortegnsskjema
(fortegnslinje)**, aldri ved intuitiv gjetting. Boka har én fast **fortegnsskjema-mal**
(etablert i kap. 0.2, gjenbrukt overalt): (1) alt over på én side og faktoriser
teller og nevner; (2) marker nullpunkter og bruddpunkter på tallinja; (3) tegn
fortegnslinje for hver faktor; (4) multipliser fortegnene kolonnevis; (5) les av
løsningsmengden. Nevner-faktorer som $x^2$ merkes «alltid positiv / udefinert i
null» og null havner **aldri** i løsningsmengden. Ulikhetstegnet **snus eksplisitt**
ved multiplikasjon/divisjon med negativt tall.

**Kritisk regel #4 — Klassifisering skal ALLTID med (gjelder drøfting og
optimering).** Etter å ha funnet et stasjonærpunkt må man **vise klassifiseringen**:
i to variabler `AC − B²` med `A = f_xx`, `B = f_xy`, `C = f_yy` (`AC − B² > 0,
A < 0 ⇒ maks`; `> 0, A > 0 ⇒ min`; `< 0 ⇒ sadel`); i én variabel fortegnet på
`f″` eller fortegnsskifte i `f′`. Å hoppe over klassifiseringen trekker. Og ved
begrenset definisjonsmengde (`Df = [0, k]`) må **endepunktene sammenlignes** for å
avgjøre om et ekstremum er globalt (lokal vs. global).

**Kritisk faglig avgrensning (gjelder HELE boka).** Følgende har **0 forekomster** i
hele MET 2910-arkivet (2015–2025) og skal IKKE bygges ut — kun nevnes med én setning
i Del 0 slik at studenten vet at fraværet er trygt: **ekte Lagrange-metode med
multiplikator (λ)** (bibetingelser løses ved **innsetting**, ikke Lagrange — egen
kontrast-note i kap. 4.5), **omhyllingsteoremet, Eulers teorem, homogenitet,
substitusjonselastisitet, CES/Cobb-Douglas-produktteori**, **implisitt derivasjon /
nivåkurver**, **differensiallikninger**, **Taylor-/rekkeutvikling** (utover
geometriske rekker), **komplekse tall**. Dette skiller MET 2910 skarpt fra ECON1100
(som har Lagrange/omhylling/homogenitet/nivåkurver) — ikke lån struktur eller
notasjon derfra.

**Kritisk notasjonsregel (gjelder HELE boka).** Bruk emnets norske skolenotasjon,
ikke universitets-alternativer:
- Deriverte: $f'(x)$, $f''(x)$; **partielle deriverte** skrives $f_x$, $f_y$ og
  andreordens $f_{xx}$, $f_{yy}$, $f_{xy}$ (ikke $\partial$-tung notasjon).
- Klassifisering i to variabler: $A = f_{xx}$, $B = f_{xy}$, $C = f_{yy}$, og
  størrelsen $AC - B^2$ (formelarkets skrivemåte) — ikke «Hesse-determinant $D$».
- Økonomisk innramming gjennomført: $K(x)$ kostnad, $I(x)$ inntekt, $O(x)$ eller
  $f(x,y)$ overskudd/profitt, $p$/$q$ priser, $g(x) = K(x)/x$ gjennomsnittskostnad.
- Løsning på lineært system som ordnet tuppel $(x, y)$ eller $(x, y, z)$.
- Finans: terminbeløp $K$, startlån/nåverdi $K_0$, sluttverdi $A_n$, rente $r$
  (per termin), antall terminer $n$; kontinuerlig rente $A = P e^{rt}$.
- Elastisitet: $\mathrm{El}_p\, x = \frac{p}{x}\, x'(p)$.
- **Vekttall** per oppgave (ikke 100-poeng); alle utregninger og formler eksplisitt.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen: prerequisites, ikke frekvens);
frekvensen styrer *omfanget*. `sectionNames` = den beskrivende tittelen per del
(vises som «Kapittel N: …» på bokforsiden).

| Del | Seksjonstittel (`sectionNames`) | Kap. | Prioritet | Begrunnelse (frekvens → omfang) |
|---|---|---|---|---|
| 0 | Eksamenskart og «vis utregning»-håndverket | 2 | — | Prioriteringsverktøyet + føringshåndverket (fagets sterkeste sensorsignal) + fortegnsskjema-malen som resten refererer til. Kjerne i studieguiden. |
| 1 | Grunnleggende algebra og likningsverktøyet | 5 | **PERFEKT** (fundament) | Grunnleggende del: faktorisering/brøk/potens/likninger/ulikheter/rette linjer = **100 %** i hvert grunnsett og åpner hver hovedeksamen (teknikksekken). Fundament for alt videre. |
| 2 | Derivasjon og teknikksekken | 3 | **PERFEKT** | Derivasjon = Oppgave 1 i **100 %** av settene, alltid åpningen og høyest vektet. Metoderepertoar + eget teknikksekk-drillkapittel. |
| 3 | Funksjonsdrøfting og anvendt én-variabel-analyse | 6 | **PERFEKT** | Én-variabel drøfting **100 %**; graflesning 67 %; marginalanalyse 33 % + elastisitet 20 % (stigende). Fortegnsskjema-tungt. Teori + drill. |
| 4 | Bedriftsøkonomisk to-variabel-optimering | 6 | **PERFEKT** | **Signaturoppgaven (100 %)**: profittfunksjon → stasjonærpunkt → AC−B² → bibetingelse ved innsetting → tolkning. Der flest poeng tapes. Teori + drill. |
| 5 | Integrasjon | 5 | **PERFEKT** | Integrasjon **100 %** (substitusjon/delvis nå ordinært pensum); areal 60 %. Teknikk + areal + drill. |
| 6 | Finansmatematikk og annuitet | 5 | **PERFEKT** | Finans **100 %** — det klareste skillet mot ECON1100. Annuitetslån, sparing, månedlig omregning, kontinuerlig rente/doblingstid (27 %, stigende). Teori + drill. |
| 7 | Lineær algebra | 4 | KUNNE (tempo: perfekt) | Lineær algebra 80 %; Gauss dominerer fra 2022, Cramer/determinant beholdes, konseptuell linearitet-vri (H2025). Teori + drill. |
| 8 | Eksamenstrening | 4 | — | Teknikksekk-stordrillen (kryssgående Oppgave 1: derivering + likninger + ulikheter + integraler) + 3 komplette øvingseksamener etter MET 29107-malen. |

**Sjangerkoder** (brukt i «Oppgavesjangre» under; introduseres i Del 0 som studentens
sjekkliste):
`AL` grunnleggende algebra (faktorisering/brøk/potens/rette linjer/lineære systemer) ·
`TS` teknikksekken (Oppgave 1: derivering + likninger + ulikheter + integraler) ·
`FD` én-variabel funksjonsdrøfting (fortegnsskjema) ·
`GR` graflesning (fortegn til $f'$/$f''$ fra graf) ·
`ME` marginalanalyse og elastisitet ·
`TO` bedriftsøkonomisk to-variabel-optimering (profitt → stasjonærpunkt → AC−B²) ·
`BB` optimering under bibetingelse ved innsetting + tolkning ·
`IN` integrasjon (substitusjon/delvis/areal) ·
`FI` finansmatematikk/annuitet ·
`KR` kontinuerlig rente/doblingstid ·
`LA` lineær algebra (determinant/Cramer/Gauss).

**Avvik fra DNA-malen (dokumentert):**
1. **Del 0 har to kapitler, ikke ett.** DNA legger opp til ett eksamenskart. MET 2910
   får i tillegg kap. 0.2 — et rent **føringshåndverk-/formelark-/fortegnsskjema-kapittel**
   — fordi «vis all utregning» er fagets sterkeste enkeltsignal (0 uttelling for bare
   svar/tastetrykk) og fortegnsskjema-malen brukes i hvert eneste drøftings- og
   ulikhetskapittel. Å etablere føringsstandarden og malen tidlig gjør resten billigere.
2. **Boka har 40 temakapitler — øvre ende av DNA-vinduet (20–35 overskrides bevisst).**
   Grunnen er strukturell: MET 2910 er **det bredeste regnefaget** i fabrikken — det
   samler grunnleggende algebra, derivasjon, én-variabel drøfting, to-variabel-optimering,
   integrasjon, **finansmatematikk** OG **lineær algebra** i ett 7,5-ECTS-fag, og fra
   H2025 kan alt opptre i ett sett. Fem av åtte innholdsdeler er «perfekt» (100 %-temaer)
   og har teori + eget drillkapittel. Ingen del er oppblåst: KUNNE-delen (7) er slank
   (4 kap.), og de tre lavfrekvente sjangrene (graflesning, marginalanalyse, elastisitet)
   er komprimert til to kapitler i Del 3 i stedet for egne deler.
3. **Drillkapitlene ligger inne i temadelene sine** (2.3, 3.6, 4.6, 5.5, 6.5, 7.4), ikke
   samlet i siste del — dette er 80–100 %-gjengangersjangre som må automatiseres rett
   etter teorien. Del 8 beholder den **ene kryssgående** drillen (teknikksekk-stordrillen,
   kap. 8.1), som trekker på både Del 2 (derivering/likninger/ulikheter) og Del 5
   (integraler) og derfor må komme sist, pluss de tre øvingseksamenene.
4. **Grunnleggende algebra (Del 1) er en egen hoveddel foran hoveddelen** — et avvik fra
   ECON1100, som forutsetter algebra som kjent. MET 2910 hadde historisk en egen
   forkunnskaps-kontrollprøve (grunnleggende del), og disse temaene åpner fortsatt hvert
   sett (teknikksekken). Delen bygger derfor fundamentet eksplisitt, tett lenket til
   R1/1T-matte som finnes på plattformen.

Prosareferanser i innholdet bruker del-basert form («kap. 4.3», «se kap. 6.2»).
Kryssbok-lenker peker på 1T/R1/R2/S1/S2/BI-matte som finnes i systemet (id-ene i §3 er
verifisert mot `textbook-courses-matte.ts`).

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Prioritetsklasser: **PERFEKT** (nivå 1) /
**KUNNE** (nivå 2) / **KJENNE** (nivå 3). Symbol- og formelliste-blokk (per delkapittel,
med «(på formelarket)»-merking) og de øvrige obligatoriske kapittel-DNA-blokkene
spesifiseres i BYGGEKONTRAKT — her angis innholdet de skal dekke.

---

### Del 0 — Eksamenskart og «vis utregning»-håndverket

#### Kapittel 0.1: Eksamenskartet: slik testes MET 2910

- **id:** `met2910-bi-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Eksamensformen (samlet 5-timers eksamen, 6 oppgaver / 28 likt vektede delpunkter, vekttall, A–F, kalkulator + formelark), den faste dramaturgien, temafrekvensene, fraværsbildet og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet (15 hovedeksamenssett + 6 grunnsett + formelark). Skal gjengi: (i) **formen**: én skriftlig skoleeksamen, **5 timer (MET 29107, fra H2025)**, **6 oppgaver fordelt på 28 likt vektede delpunkter**, karakter **A–F**, ingen midtveiseksamen; historikk kort (t.o.m. H2023 to-delt: grunnleggende del ~20 % + 4-timers hovedeksamen 80 %; slått sammen fra H2025). (ii) **Hjelpemidler**: BI-godkjent finanskalkulator (TI BA II Plus) og **utdelt formelark**; men **utregning må vises** — kalkulatortastetrykk gir 0 uttelling (fagets viktigste regel, se kap. 0.2). (iii) **Den faste dramaturgien** (prognose fra H2025-malen): Oppg. 1 teknikksekk (derivering + likninger + ulikheter + integraler), Oppg. 2 én-variabel funksjonsdrøfting + areal/skjæring, Oppg. 3 finansmatematikk (annuitet/sparing + kontinuerlig rente/doblingstid), Oppg. 4 graflesning (fortegn til $f'$/$f''$), Oppg. 5 bedriftsøkonomisk to-variabel-optimering med bibetingelse, Oppg. 6 lineært system (Gauss) + konseptuelt spørsmål om linearitet. (iv) **Temafrekvens-tabellen** (andel av 15 hovedsett): derivasjon 100 %, likninger 100 %, ulikheter 100 %, én-variabel drøfting 100 %, finans/annuitet 100 %, to-variabel-optimering + AC−B² 100 %, integrasjon 100 %, bibetingelse 93 %, lineær algebra 80 %, graflesning 67 %, areal 60 %, marginalanalyse 33 %, rasjonale/asymptoter 27 %, kontinuerlig rente 27 % (stigende), elastisitet 20 % (stigende). (v) **Fraværsbildet** — én setning: Lagrange-multiplikator, omhyllingsteorem, homogenitet, nivåkurver/implisitt derivasjon, differensiallikninger, Taylor og komplekse tall forekommer *aldri* (0/15); studenten kan trygt la dem ligge (bibetingelser løses ved innsetting, ikke Lagrange). (vi) **Sensorens fem metaregler** (gjentas nesten ordrett i alle sett): utregning må vises med formlene (bare svar/tastetrykk = 0); riktig formelvalg og fremgangsmåte bærer poengene; eksakt, forenklet svar med enhet/tolkning der oppgaven er anvendt; fortegnsskjema er standardverktøyet; klassifisering (AC−B² / f″) skal alltid med. (vii) **Karakterskillene** (se under).
- **Innholdskontrakt:** Sjangerkatalogen `AL, TS, FD, GR, ME, TO, BB, IN, FI, KR, LA` presenteres som studentens sjekkliste med typisk plassering og vekt. Karakterskille-listen: **bestått** henter poeng på teknikksekken (derivering, likninger, ulikheter, enkle integraler) og oppsett av annuitet- og profittfunksjon; **midtsjiktet** fullfører funksjonsdrøftingen (f″, vendepunkt, skisse), løser hele annuitetsoppgaven inkl. restgjeld/månedlig, finner og klassifiserer stasjonærpunktet, løser lineære systemer; **toppsjiktet** behersker optimering under bibetingelse og tolkningsspørsmålene (betalingsvillighet/kompensasjon), lokal-vs-global på begrenset $Df$, kontinuerlig rente/doblingstid, og de konseptuelle H2025-vriene (er systemet lineært; kvalitativ integralsammenligning; fortegn til $f'$/$f''$ lest fra grafen til $f$). Avslutt med **leseplan**: Del 1–6 er «må perfekt», Del 7 «må kunne», og Del 8 er tidsstyrt sluttrening.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «settet har 28 likt vektede delpunkter på 300 minutter — sett opp et tidsbudsjett og avgjør hvilke sjangre du sikrer først» og «hvorfor gir et riktig annuitetssvar uten oppsatt formel likevel 0 poeng?».
- **Typiske feil:** Metafeilene: bruke tid på temaer som ikke testes (Lagrange, nivåkurver, differensiallikninger); nedprioritere teknikksekken (Oppg. 1) og finansoppgaven, som til sammen bærer et bredt poenggulv; tro at kalkulatoren erstatter utregning (det motsatte — føringen måles).
- **Quiz: 12 · Flashcards: 12** (form, dramaturgi, frekvenser, metaregler, fraværsbilde)

#### Kapittel 0.2: «Vis all utregning»: føringshåndverk, formelarkbruk og fortegnsskjema-malen

- **id:** `met2910-bi-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** `met2910-bi-0-1`
- **kapitteltype:** teori (metaregel)
- **description:** Fagets ene ufravikelige regel operasjonalisert: hvordan skrive ut utregningen slik sensor krever, hvordan bruke det utdelte formelarket effektivt, og den faste fortegnsskjema-malen som gjenbrukes i hele boka.
- **Eksamensbelegg:** Metaregel-kapittel bygget på setningen som står øverst på HVERT sett: *«Alle utregninger skal vises. Det er ikke nok å kun oppgi svaret, eller å vise til tastetrykk på kalkulator.»* Dette er fagets sterkeste enkeltsignal (typisk feil #1: svar uten utregning gir 0 selv med riktig tall). Prioritet: **PERFEKT** (regelen bærer karakteren i alle sjangre).
- **Innholdskontrakt:** **(A) Føringsstandarden**: hvert løsningsforslag skrives som en A-besvarelse — skriv formelen eksplisitt ut FØR innsetting, ett algebrasteg per linje, i den knappe, utregningsdrevne sensorstilen; marker sluttsvaret eksakt og forenklet, med enhet/økonomisk tolkning der oppgaven er anvendt. Kalkulatorens finansfunksjoner (TVM) og løsere nevnes KUN som kontroll — aldri som løsning; en løsning som bare peker på tastetrykk er en byggefeil. To kontrastpar «samme matematikk, ulik føring» (én lav-uttellings- og én full-scorings-versjon: ett annuitet- og ett andregradslikning-eksempel, med margnotater om hvor føringspoengene sitter). **(B) Formelarkbruk**: gjennomgang av hva som står på arket (potens-/kvadrat-/logaritmeregler, abc, derivasjon inkl. produkt/kvotient/kjerne, integrasjon inkl. substitusjon/delvis, lineære funksjoner, geometriske rekker, annuitets-/nåverdiformlene, AC−B²-klassifiseringen) og hva som IKKE står der (klassifiseringstolkningen maks/min/sadel, renter = restgjeld·r, avdrag = terminbeløp − renter, doblingstid $t = \ln 2 / r$) — det siste må kunne utenat. Poenget: velg riktig formel raskt, sett inn med tall, vis stegene. **(C) Fortegnsskjema-malen** (theorem-blokk, gjenbrukes i kap. 1.4, 3.1–3.4, 3.5, 3.6): (1) alt over på én side, felles brøkstrek, faktoriser teller og nevner; (2) marker nullpunkter og bruddpunkter på tallinja (nevner-null = udefinert, aldri i løsningsmengden); (3) tegn fortegnslinje for hver faktor; (4) multipliser fortegnene kolonnevis; (5) les av. Nevner-faktorer som $x^2$ merkes «alltid positiv / udefinert i null»; snu ulikhetstegnet ved multiplikasjon/divisjon med negativt tall. **(D) Klassifiseringskravet**: at klassifisering (AC−B² i to variabler, $f''$-tegn i én) alltid skal med etter et stasjonærpunkt, og at lokal vs. global krever endepunktsammenligning på begrenset $Df$.
- **Oppgavesjangre:** Meta. Mønstereksempel: «Besvarelsen under gir riktig terminbeløp, men ville tapt alle poengene. Pek på de to føringsmanglene (formel ikke satt opp, kun kalkulatorsvar oppgitt) og skriv den om til full uttelling.»
- **Typiske feil:** Oppgi svar uten utregning (#1 — gir 0); vise til kalkulatortastetrykk i stedet for formel; hoppe over klassifiseringen; glemme å snu ulikhetstegnet; la null (nevner-null) havne i løsningsmengden.
- **Quiz: 12 · Flashcards: 24** (føringsregler, formelark-innhold, fortegnsskjema-mal, klassifiseringskrav — flashcard-gull)

**Prøve-kvote Del 0:** ingen (metadel).

---

### Del 1 — Grunnleggende algebra og likningsverktøyet *(prioritet: PERFEKT — fundament, åpner hvert sett)*

#### Kapittel 1.1: Potens-, rot- og logaritmeregler

- **id:** `met2910-bi-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** `met2910-bi-0-2`
- **kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Bygger på [Potenser med heltallseksponenter](/bok/1t/1t-1-2) og [Algebra](/bok/1t/1t-1-3) fra 1T og [Potenser og logaritmer](/bok/r1/r1-1-2) fra R1.
- **description:** Potens-, rot- og logaritmereglene fra formelarket, drillet til å forenkle uttrykk til én potens og trekke ut felles rot i tempo.
- **Eksamensbelegg:** Grunnleggende del: potens-/rotforenkling ~83 %, brukes dessuten i hver derivasjon og hvert finansuttrykk. Reglene står på formelarket — poenget er rask, korrekt bruk. Prioritet: **PERFEKT** (fundament).
- **Innholdskontrakt:** Potensregler ($a^m a^n = a^{m+n}$, $(a^m)^n = a^{mn}$, $a^{-n} = 1/a^n$, $a^{1/n} = \sqrt[n]{a}$) — alle på formelarket; forenkle sammensatte uttrykk til **én potens**; rasjonalisere og trekke ut felles rot; **logaritmeregler** ($\ln(ab) = \ln a + \ln b$, $\ln(a/b) = \ln a - \ln b$, $\ln a^n = n \ln a$, $\ln e = 1$) til bruk i eksponentiallikninger og kontinuerlig rente. Ren regneteknikk til aktiv bruk i fart.
- **Oppgavesjangre:** AL. Mønstereksempel: «Skriv $\dfrac{6 a^3 b^{-2} \sqrt{a}}{2 a^{-1} b}$ som én potens av $a$ og $b$.»
- **Typiske feil:** Feil fortegn på negativ eksponent; blande potens- og faktorregler; regne $\sqrt{a+b} = \sqrt a + \sqrt b$; feil ved $\ln$ av produkt/kvotient.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 1.2: Faktorisering, brøk og forenkling

- **id:** `met2910-bi-1-2` · **number:** 1.2 · **estimatedMinutes:** 50 · **prerequisites:** `met2910-bi-1-1`
- **kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Bygger på [Faktorisering og kvadratsetningene](/bok/1t/1t-1-5), [Brøkregning](/bok/1t/1t-1-4) og [Rasjonale uttrykk](/bok/1t/1t-1-6) fra 1T.
- **description:** Fellesfaktor, konjugat, kvadratsetningene og brøksammentrekning med minste felles nevner — fundamentet under likninger, ulikheter og forenkling av svar.
- **Eksamensbelegg:** Grunnleggende del: faktorisering & forenkling **100 %** (6/6). Kreves også for å «forenkle svaret» (sensorkrav) i hele hovedeksamen. Prioritet: **PERFEKT** (fundament).
- **Innholdskontrakt:** Fellesfaktor; **konjugatsetningen** $a^2 - b^2 = (a-b)(a+b)$; **kvadratsetningene**; faktorisering av andregradsuttrykk via abc til $a(x - x_1)(x - x_2)$; **brøksammentrekning** med minste felles nevner (MFN); forkorting av rasjonale uttrykk (faktoriser først, forkort felles faktorer); polynomdivisjon nevnes kort som faktoriseringsverktøy for 3.-gradspolynom (~33 % i grunndel). Betydningen av «forenklet svar» som sensorkrav.
- **Oppgavesjangre:** AL. Mønstereksempel: «Trekk sammen til én brøk og forkort: $\dfrac{2}{x-3} - \dfrac{x+1}{x^2-9}$.»
- **Typiske feil:** Forkorte ledd i stedet for faktorer; glemme å faktorisere før forkorting; feil MFN; fortegnsfeil i konjugat/kvadratsetning.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 1.3: Likninger: andregrad, brøk, eksponential og logaritmisk

- **id:** `met2910-bi-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `met2910-bi-1-2`
- **kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Bygger på [ABC-formelen](/bok/1t/1t-2-3) og [Rasjonale likninger](/bok/1t/1t-2-5) fra 1T og [Eksponential- og logaritmeligninger](/bok/r1/r1-1-3) fra R1.
- **description:** Andregradslikninger med abc og utskrevet diskriminant, brøklikninger med røttesjekk, og eksponential-/logaritmelikninger via ln — del av teknikksekken (Oppgave 1).
- **Eksamensbelegg:** «Løs likninger» **100 %** i både grunn- og hovedeksamen (fast del av Oppg. 1). Sensor er streng: **abc skal skrives ut med diskriminanten**, ikke bare sluttsvaret; brøkrøtter som nuller nevner **forkastes**. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** **Andregrad** med abc-formelen (skriv diskriminanten $b^2 - 4ac$ eksplisitt ut — theorem-/prosedyre-blokk); **brøklikning** (noter multiplikatoren, f.eks. $|\cdot x^2(x-1)$, multipliser opp, løs, **forkast røtter som nuller nevner**); **eksponentiallikning** ($a^x = b \Rightarrow x = \ln b / \ln a$; $e^{kx} = c$); **logaritmisk likning** ($\ln(\ldots) = 0 \Rightarrow \ldots = 1$). Alle med utskrevet mellomregning etter føringsstandarden i kap. 0.2.
- **Oppgavesjangre:** TS/AL. Mønstereksempel: «Løs likningene: (a) $2x^2 - 7x + 3 = 0$ (skriv ut diskriminanten); (b) $\dfrac{4}{x} - \dfrac{3}{x-2} = 1$; (c) $5 \cdot 3^{x} = 45$.»
- **Typiske feil:** Ikke skrive ut diskriminanten (#8); ta med røtter som nuller nevner (#3); regne feil fortegn i diskriminanten; glemme $\ln$ på begge sider i eksponentiallikning.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 1.4: Ulikheter og fortegnsskjema

- **id:** `met2910-bi-1-4` · **number:** 1.4 · **estimatedMinutes:** 50 · **prerequisites:** `met2910-bi-1-3`
- **kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Bygger på [Fortegnslinjer](/bok/1t/1t-4-3), [Andregradsulikheter](/bok/1t/1t-4-4) og [Rasjonale ulikheter](/bok/1t/1t-4-5) fra 1T; bruker fortegnsskjema-malen fra kap. 0.2.
- **description:** Polynom- og brøkulikheter løst med den faste fortegnsskjema-malen — alt over på én side, faktoriser, fortegnslinje, les av.
- **Eksamensbelegg:** «Løs ulikheter» **100 %** (fast del av Oppg. 1). **Fortegnsskjema er obligatorisk**; nevner behandles korrekt (aldri null i løsningsmengden); ulikhetstegnet snus ved multiplikasjon med negativt tall. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** Fortegnsskjema-malen (fra kap. 0.2) anvendt på **polynomulikheter** (faktoriser via abc) og **brøkulikheter** (alt over på én side → felles brøkstrek → faktoriser teller og nevner → fortegnslinje per faktor → les av). Nevner-faktorer som $x^2$: «alltid positiv / udefinert i null». Løsning oppgis på intervallform. Understrek at fortegnsgjetting uten skjema ikke gir uttelling.
- **Oppgavesjangre:** TS/AL. Mønstereksempel: «Løs ulikheten $\dfrac{x^2 - x - 6}{x - 1} \le 0$ med fortegnsskjema.»
- **Typiske feil:** Glemme å snu ulikhetstegnet (#2); ta null (nevner-null) med i løsningsmengden (#3, #4); behandle $x^2$ i nevner som om det kan skifte fortegn; hoppe over fortegnsskjemaet.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 1.5: Rette linjer, lineære likningssystem og lineær kostnad/overskudd

- **id:** `met2910-bi-1-5` · **number:** 1.5 · **estimatedMinutes:** 50 · **prerequisites:** `met2910-bi-1-3`
- **kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Bygger på [Lineære funksjoner](/bok/1t/1t-3-2) og [Likningssett](/bok/1t/1t-4-1) fra 1T og [Kostnad, inntekt og overskudd](/bok/s1/s1-4-1) fra S1.
- **description:** Rette linjer via topunktsformel og skjæring, lineære likningssystem (2×2/3×3) med innsettings- og addisjonsmetode, og lineær kostnad/overskudd som bedriftsøkonomisk innramming.
- **Eksamensbelegg:** Grunnleggende del: rette linjer ~67 %, lineære systemer ~50 %, én-variabel kostnad/overskudd ~67 %. Broen til lineær algebra (Del 7) og to-variabel-optimering (Del 4). Prioritet: **PERFEKT** (fundament).
- **Innholdskontrakt:** Rett linje $y - y_1 = a(x - x_1)$ og **topunktsformelen** $y - y_1 = \frac{y_2 - y_1}{x_2 - x_1}(x - x_1)$; «skjærer x-aksen» $\Rightarrow y = 0$; skjæring mellom to linjer ved å sette like. **Lineære likningssystem** (2×2 og 3×3) med innsettings- OG addisjonsmetode (begge godtas; addisjon gir mindre regnearbeid i 3×3). **Lineær kostnad** $K(x) = ax + b$ fra to punkter; **overskudd** $O = I - K$; grunnleggende marginalbetraktning som forberedelse til kap. 3.5. Alt på formelarket der det gjelder.
- **Oppgavesjangre:** AL. Mønstereksempel: «En bedrift har faste kostnader 8 000 kr og total kostnad 20 000 kr ved 300 enheter. Finn den lineære kostnadsfunksjonen $K(x)$, og løs samtidig systemet {$2x + y = 7$, $x - 3y = -14$} med addisjonsmetoden.»
- **Typiske feil:** Feil stigningstall i topunktsformelen; regnefeil ved eliminering i 3×3; blande koeffisient- og konstantledd; glemme at «skjærer x-aksen» betyr $y = 0$.
- **Quiz: 16 · Flashcards: 16**

**Prøve-kvote Del 1:** 4 prøver (1.A potens/rot/logaritme-forenkling, sjanger AL; 1.B faktorisering, brøk og forenkling, AL; 1.C likninger — andregrad/brøk/eksp./log. med utskrevet diskriminant, TS/AL; 1.D ulikheter med fortegnsskjema + rette linjer/lineære systemer, TS/AL).

---

### Del 2 — Derivasjon og teknikksekken *(prioritet: PERFEKT — bærer Oppgave 1)*

#### Kapittel 2.1: Derivasjonsreglene i tempo

- **id:** `met2910-bi-2-1` · **number:** 2.1 · **estimatedMinutes:** 50 · **prerequisites:** `met2910-bi-1-1`
- **kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Bygger på [Derivasjonsregler](/bok/r1/r1-4-1) og [Produktregelen og kvotientregelen](/bok/r1/r1-4-4) fra R1.
- **description:** Potens-, sum-, produkt- og kvotientregelen med emnets typiske funksjoner, drillet på fart og fortegnssikkerhet — fundamentet under Oppgave 1.
- **Eksamensbelegg:** Derivasjon = Oppg. 1 i **100 %** av settene, alltid åpningen og høyest vektet (billige poeng). Alle reglene står på formelarket. Der flest poeng tapes: fortegn i kvotienter. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** Potensregelen (inkl. negative og reelle eksponenter, $\sqrt{x} \to \frac{1}{2\sqrt{x}}$); sum-, **produkt-** ($(uv)' = u'v + uv'$) og **kvotientregelen** ($(u/v)' = (u'v - uv')/v^2$) — theorem-blokker, alle på formelarket; anvendt på økonomitypiske polynomer og brøker. Fokus på rask, fortegnssikker regning (ren teknikk som bare skal *brukes*), med hvert steg vist.
- **Oppgavesjangre:** TS. Mønstereksempel: «Deriver $f(x) = \dfrac{3x^2 - 5}{x + 2}$ og $g(x) = (2x^3 - x)\sqrt{x}$.»
- **Typiske feil:** Fortegnsfeil/feil rekkefølge i telleren i kvotientregelen; regne $\sqrt{x}$-derivert feil; slurve med reelle/negative eksponenter; glemme produktregelen.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 2.2: Kjerneregelen og derivasjon av eksponential-, logaritme- og rotfunksjoner

- **id:** `met2910-bi-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `met2910-bi-2-1`
- **kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Bygger på [Kjerneregelen](/bok/r1/r1-4-3) og [Derivasjon av eksponential- og logaritmefunksjoner](/bok/r1/r1-4-2) fra R1.
- **description:** Kjerneregelen på sammensatte uttrykk og de spesielle derivertene $(\ln u)' = u'/u$, $(e^u)' = u' e^u$, $(a^x)' = a^x \ln a$ — resten av teknikkrepertoaret i Oppgave 1.
- **Eksamensbelegg:** Fast del av Oppg. 1 (100 %): $\ln$, $e^x$, $a^x$, sammensatte funksjoner som $x e^x$, $(2x-1)e^{-2x}$. Alle reglene på formelarket. Forberedelse til funksjonsdrøfting (Del 3) og integrasjon (Del 5). Prioritet: **PERFEKT**.
- **Innholdskontrakt:** **Kjerneregelen** $\frac{d}{dx} f(g(x)) = f'(g(x)) g'(x)$ (theorem-blokk, på formelarket); de spesielle derivertene $(\ln u)' = u'/u$, $(e^u)' = u' e^u$, $(a^x)' = a^x \ln a$; kombinasjon av produkt-/kvotient- og kjerneregel på emnets funksjonstyper ($x e^{-x}$, $\ln(x^2 + 1)$, $(3x - 2)^4$). Skille: dette er teknikk som skal *brukes* raskt — utledning kreves ikke.
- **Oppgavesjangre:** TS. Mønstereksempel: «Deriver $f(x) = (3x - 1)e^{-2x}$ og $h(x) = \ln(x^2 + 4)$.»
- **Typiske feil:** Glemme kjerneregelen inne i $e^u$/$\ln u$; feil $u'$ i $(\ln u)' = u'/u$; blande $(a^x)'$ og $(x^a)'$; kjerneregel-feil i sammensatte uttrykk.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 2.3: Drill: teknikksekken (Oppgave 1) — derivering, likninger og ulikheter

- **id:** `met2910-bi-2-3` · **number:** 2.3 · **estimatedMinutes:** 80 · **prerequisites:** `met2910-bi-2-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill på teknikksekkens tre første deler — 2–4 deriverte + 2–3 likninger + 2 ulikheter blandet, mot fart, fortegnssikkerhet og full føring.
- **Eksamensbelegg:** Dekker TS (100 %) i full bredde utenom integraler (som kjedes på i kap. 8.1): potens/produkt/kvotient/kjerne + $\ln$/$e^x$/$a^x$, andregrads-/brøk-/eksponentiallikninger, polynom-/brøkulikheter med fortegnsskjema. De billigste og sikreste poengene i hele eksamen — de skal mekaniseres. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** **Løsningsoppskrift** for Oppg. 1: 1) deriver hver funksjon (identifiser regel: produkt/kvotient/kjerne/$\ln$/$e^u$); 2) løs likningene (abc med utskrevet diskriminant, brøk med røttesjekk, eksp. med $\ln$); 3) løs ulikhetene med fortegnsskjema; 4) forenkle alle svar. **Gjennomregnet eksamens-Oppgave 1** (sammensatt a–e) med sensor-margnotater om hvor de billige poengene ligger og hva som gir 0 (svar uten utregning). 12–15 oppgaver på eksamensnivå med full føring, blandet fra alle tre teknikkene.
- **Oppgavesjangre:** TS. Mønstereksempel (full Oppg. 1): «(a) Deriver $f(x) = x^2 e^{-x}$; (b) deriver $g(x) = \dfrac{\ln x}{x}$; (c) løs $3x^2 - 12 = 0$; (d) løs $2^{x} = 32$; (e) løs $\dfrac{x - 4}{x + 1} \ge 0$.»
- **Typiske feil:** Hele §2/§1.3–1.4-repertoaret i kjedet form: kvotient-fortegn, glemt kjerneregel, uskreven diskriminant, glemt å snu ulikhetstegn, nevner-null i løsningsmengden, uforenklet svar, svar uten utregning.
- **Quiz: 14 · Flashcards: 6**

**Prøve-kvote Del 2:** 4 prøver (2.A potens/produkt/kvotient-derivasjon, sjanger TS; 2.B kjerneregel + $\ln$/$e^x$/$a^x$-derivasjon, TS; 2.C blandet derivering + likninger, TS; 2.D full teknikksekk-Oppgave 1 på eksamensnivå med ulikheter, TS).

---

### Del 3 — Funksjonsdrøfting og anvendt én-variabel-analyse *(prioritet: PERFEKT — 100 %)*

#### Kapittel 3.1: Nullpunkt, fortegnsskjema og fortegnsanalyse av $f$

- **id:** `met2910-bi-3-1` · **number:** 3.1 · **estimatedMinutes:** 50 · **prerequisites:** `met2910-bi-2-2`
- **kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Bygger på [Nullpunkter og fortegn](/bok/1t/1t-3-5) fra 1T og [Funksjonsdrøfting](/bok/r1/r1-4-6) fra R1; bruker fortegnsskjema-malen fra kap. 0.2.
- **description:** Finn nullpunkter og bestem hvor $f$ er positiv/negativ med fortegnsskjema — første steg i drøftingsoppskriften.
- **Eksamensbelegg:** Kjernen i den 100 %-tilbakevendende drøftingsoppgaven (Oppg. 2). Fortegnsintervaller **skal begrunnes** med fortegnsskjema, ikke bare oppgis. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** Nullpunkt $f(x) = 0$ (via faktorisering/abc); **fortegnsanalyse av $f$** med fortegnsskjema-malen (fra kap. 0.2); definisjonsmengde (særlig når $\ln$/$\sqrt{}$/nevner inngår). Funksjonstyper: 3.-/4.-gradspolynom, $x e^x$, $(2x - 1)e^{-2x}$, rasjonale. Understrek at «positiv for $x > 2$» må *begrunnes* med fortegnsskjema, ikke påstås.
- **Oppgavesjangre:** FD. Mønstereksempel: «La $f(x) = x^3 - 4x$. Finn nullpunktene og bestem med fortegnsskjema hvor $f$ er positiv og negativ.»
- **Typiske feil:** Oppgi fortegnsintervaller uten fortegnsskjema; glemme definisjonsmengden; regnefeil i faktorisering/abc; nevner-null i intervallene.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 3.2: Monotoni, ekstremalpunkter og tangent via $f'$

- **id:** `met2910-bi-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `met2910-bi-3-1`
- **kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Bygger på [Globale ekstremalpunkter](/bok/r1/r1-4-8) fra R1 og [Optimering](/bok/s2/s2-3-3) fra S2.
- **description:** Voksende/avtakende via fortegnet på $f'$, klassifisering av maks/min, skillet lokal vs. global på begrenset $Df$, og tangentlinjen.
- **Eksamensbelegg:** Fast i drøftingsoppgaven (100 %). Sensor krever at man **skiller lokale og globale ekstremal** når $Df$ er begrenset (f.eks. $[0, 4]$) ved å sammenligne endepunktsverdier. Tangent $y - f(a) = f'(a)(x - a)$ er fast delpunkt. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** $f' > 0$ voksende / $f' < 0$ avtakende (fortegnsskjema på $f'$); ekstremalpunkt der $f'$ skifter fortegn (maks $+\to-$, min $-\to+$); **lokal vs. global**: på begrenset $Df = [a, b]$ må endepunktsverdiene $f(a)$, $f(b)$ sammenlignes med indre stasjonærverdier for å avgjøre globalt maks/min (warning-blokk); **tangentlinjen** $y - f(a) = f'(a)(x - a)$. Alt begrunnet med fortegn, ikke påstått.
- **Oppgavesjangre:** FD. Mønstereksempel: «La $f(x) = x^3 - 6x^2 + 9x$ på $Df = [0, 4]$. Finn stasjonærpunktene, klassifiser dem, og avgjør hvor det globale maksimum ligger. Finn tangenten i $x = 1$.»
- **Typiske feil:** Blande lokal og global på begrenset $Df$ (#7); glemme å sammenligne endepunktene; feil stigningstall i tangenten (bruke $f$ i stedet for $f'$); ubegrunnede vekstintervaller.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 3.3: Krumning, vendepunkt og skisse via $f''$

- **id:** `met2910-bi-3-3` · **number:** 3.3 · **estimatedMinutes:** 50 · **prerequisites:** `met2910-bi-3-2`
- **kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Bygger på [Andrederiverte og vendepunkter](/bok/s2/s2-3-2) og [Fullstendig funksjonsdrøfting](/bok/s2/s2-3-1) fra S2.
- **description:** Konkav/konveks via fortegnet på $f''$, vendepunkt med fortegnsskifte, og en skisse konsistent med alle funnene.
- **Eksamensbelegg:** Fullfører drøftingsoppgaven (midtsjikt-skille). **Vendepunkt krever at $f''$ skifter fortegn**, ikke bare at $f'' = 0$. Skissen vektlegger konsistens med egne funn, ikke presisjon. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** $f'' > 0$ konveks / $f'' < 0$ konkav (fortegnsskjema på $f''$); **vendepunkt** der $f''$ skifter fortegn; **skisse** som syntese av nullpunkter + vekst-/krumningsintervaller + ekstremal-/vendepunkter (figur beskrives i ord: akser, kurveform, markerte punkter — plattformen er tekstbasert). Presiser at en voksende funksjon godt kan være konkav ($f' > 0$, $f'' < 0$ samtidig).
- **Oppgavesjangre:** FD. Mønstereksempel: «La $f(x) = x^4 - 6x^2$. Bestem konkav/konveks-intervaller og vendepunktene med fortegnsskjema på $f''$, og skisser $f$ konsistent med funnene.»
- **Typiske feil:** Kalle $f'' = 0$ et vendepunkt uten fortegnsskifte; blande vekst ($f'$) og krumning ($f''$); skisse som strider mot egen fortegnsanalyse.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 3.4: Rasjonale funksjoner, asymptoter og graflesning av $f'$/$f''$

- **id:** `met2910-bi-3-4` · **number:** 3.4 · **estimatedMinutes:** 50 · **prerequisites:** `met2910-bi-3-3`
- **kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Bygger på [Rasjonale funksjoner](/bok/1t/1t-3-7) fra 1T og [Drøfting av rasjonale funksjoner](/bok/s2/s2-3-4) og [Asymptotisk analyse](/bok/s2/s2-3-6) fra S2.
- **description:** Vertikale og horisontale asymptoter for rasjonale funksjoner, og graflesning — å lese fortegn til $f'$ og $f''$ fra grafen til $f'$ (og fra grafen til $f$ selv, ny H2025-variant).
- **Eksamensbelegg:** Rasjonale/asymptoter ~27 %; **graflesning 67 %** (fast Oppg. 4). Klassisk: gitt grafen til $f'$, finn ekstrem-/vendepunkt/konveksitet. **Ny H2025-variant:** gitt grafen til $f$ selv, avgjør fortegn til $f'$ og $f''$. Vektlegger tolkning, ikke presisjon — men **skal begrunnes** med fortegnsskifte. Prioritet: **PERFEKT** (graflesning) / KUNNE (asymptoter).
- **Innholdskontrakt:** **Rasjonale funksjoner**: vertikal asymptote der nevner = 0 (og teller ≠ 0); horisontal asymptote fra gradforhold; skisse. **Graflesning**: fra grafen til $f'$ — ekstrempunkt til $f$ der $f'$ skifter fortegn (maks $+\to-$, min $-\to+$), $f$ konveks der $f'$ er voksende, vendepunkt der $f'$ har ekstremalpunkt; fra grafen til $f$ — les av hvor $f'$ er positiv/negativ (stigning) og hvor $f''$ er positiv/negativ (krumning). Alltid begrunn med fortegnsskifte, ikke bare oppgi punktet.
- **Oppgavesjangre:** GR/FD. Mønstereksempel: «Grafen til $f'$ er en oppadvendt parabel med nullpunkter i $x = -1$ og $x = 3$. Bestem hvor $f$ vokser/avtar, dens ekstrempunkter, og hvor $f$ er konveks — begrunn med fortegnsskifte i $f'$.»
- **Typiske feil:** Forveksle grafen til $f$ med grafen til $f'$ (#9); ikke begrunne med fortegnsskifte; feil asymptote (glemme teller-null-sjekk); blande stigning og krumning.
- **Quiz: 16 · Flashcards: 14**

#### Kapittel 3.5: Marginalanalyse og elastisitet

- **id:** `met2910-bi-3-5` · **number:** 3.5 · **estimatedMinutes:** 50 · **prerequisites:** `met2910-bi-3-2`
- **kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Bygger på [Derivasjon i økonomiske modeller](/bok/s1/s1-4-2) og [Etterspørsel og elastisitet](/bok/s1/s1-4-3) fra S1.
- **description:** Grensekostnad $K'(x)$, gjennomsnittskostnad $g(x) = K(x)/x$ minimert ved $g'(x) = 0$, og priselastisitet med inntektsmaksimering ved $\mathrm{El} = -1$ — anvendt derivasjon i bedriftsøkonomisk innramming.
- **Eksamensbelegg:** Marginalanalyse ~33 % (ofte innvevd i produsentoppgaver; H2025 brukte marginal kostnadssammenligning for å motivere hvorfor begge varer produseres); elastisitet 20 % (stigende, fast Oppg. 4 fra 2023). Prioritet: KUNNE / KJENNE (karakterdifferensiator).
- **Innholdskontrakt:** **Marginalanalyse**: grensekostnad $K'(x)$, grenseinntekt $I'(x)$; profittmaks $O'(x) = 0$ ($\Leftrightarrow$ grenseinntekt = grensekostnad); **gjennomsnittskostnad** $g(x) = K(x)/x$ minimeres ved $g'(x) = 0$ (og der er $g = K'$). **Elastisitet**: $\mathrm{El}_p\, x = \frac{p}{x} x'(p)$; tolk tallet (elastisk $|\mathrm{El}| > 1$ / uelastisk $< 1$); prisstrategi for å øke salgsinntekt; prisen der $\mathrm{El} = -1$ maksimerer inntekt. Alt med økonomisk tolkning av svaret.
- **Oppgavesjangre:** ME. Mønstereksempel: «Kostnaden er $K(x) = 0{,}5x^2 + 40x + 800$. Finn produksjonsmengden som minimerer gjennomsnittskostnaden, og vis at $g'(x) = 0$ gir $g = K'$ der.»
- **Typiske feil:** Glemme faktoren $p/x$ i elastisiteten (regne bare $x'$); forveksle grense- og gjennomsnittskostnad; feil fortegn i elastisiteten; ikke tolke tallet økonomisk.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 3.6: Drill: full funksjonsdrøfting (Oppgave 2)

- **id:** `met2910-bi-3-6` · **number:** 3.6 · **estimatedMinutes:** 80 · **prerequisites:** `met2910-bi-3-4`
- **kapitteltype:** drill
- **description:** Hele drøftingsoppskriften som gjennomført Oppgave 2 — nullpunkt → $f'$ → $f''$ → vendepunkt → lokal/global → asymptoter → skisse → tangent, med full føring.
- **Eksamensbelegg:** FD (100 %), alle varianter samlet. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** **Løsningsoppskrift** (algoritmisk): (i) $f(x) = 0$ + fortegnsskjema; (ii) $f'(x) = 0$ → voksende/avtakende → klassifiser maks/min (lokal/global på begrenset $Df$); (iii) $f''(x) = 0$ → konkav/konveks → vendepunkt (fortegnsskifte); (iv) asymptoter (rasjonale); (v) skisse konsistent med funnene; (vi) tangent. **Gjennomregnet eksamens-Oppgave 2** med sensor-margnotater om hva som gir uttelling ved hvert steg (fortegnsskjema ført, klassifisering med, endepunkter sammenlignet). 10–14 oppgaver på eksamensnivå (polynom, $x e^x$-type, rasjonal) med full føring.
- **Oppgavesjangre:** FD. Mønstereksempel: «Gitt $f(x) = (x - 1)e^{-x}$ på $[0, 4]$: full drøfting med nullpunkt, $f'$, $f''$, vendepunkt, globalt maks/min og skisse.»
- **Typiske feil:** Alle FD-fellene fra 3.1–3.4 i kjedet form: ubegrunnede intervaller, glemt klassifisering, vendepunkt uten fortegnsskifte, lokal/global-forveksling, inkonsistent skisse.
- **Quiz: 14 · Flashcards: 6**

**Prøve-kvote Del 3:** 4 prøver (3.A nullpunkt/fortegnsskjema + $f'$-monotoni/ekstremal, sjanger FD; 3.B $f''$-krumning/vendepunkt/skisse + tangent, FD; 3.C rasjonale/asymptoter + graflesning av $f'$/$f''$, GR/FD; 3.D marginalanalyse/elastisitet + full drøfting på eksamensnivå, ME/FD).

---

### Del 4 — Bedriftsøkonomisk to-variabel-optimering *(prioritet: PERFEKT — signaturoppgaven, 100 %)*

> **Kontrast-note (skal reflekteres i Eksamensvinkel- og Innholdskontrakt-blokkene):**
> Bibetingelser løses i MET 2910 **ved innsetting** (sett bibetingelsen inn i
> profittfunksjonen, reduser til én variabel, deriver, sett lik null), **ALDRI med
> Lagrange-multiplikator (λ)**. Lagrange har 0 forekomster i hele arkivet og skal
> ikke bygges ut — dette er den skarpeste faglige forskjellen fra ECON1100.

#### Kapittel 4.1: Partielle deriverte av første og andre orden

- **id:** `met2910-bi-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `met2910-bi-2-2`
- **kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Bygger på [Derivasjonsregler](/bok/r1/r1-4-1) og [Kjerneregelen](/bok/r1/r1-4-3) fra R1. (Selve partiellderivasjon-begrepet introduseres her — det finnes ikke i R1/R2/S1/S2.)
- **description:** Å derivere med hensyn på én variabel om gangen (behandle de andre som konstanter), pluss andreordens $f_{xx}$, $f_{yy}$ og krysspartiell $f_{xy}$ — verktøyet under signaturoppgaven.
- **Eksamensbelegg:** Selve inngangen til den 100 %-tilbakevendende to-variabel-optimeringen. Andreordens $f_{xx}$, $f_{yy}$, $f_{xy}$ trengs i AC−B²-klassifiseringen (kap. 4.3). Prioritet: **PERFEKT**.
- **Innholdskontrakt:** **Partiell derivert** $f_x$, $f_y$: behandl de andre variablene som konstanter (definisjon + prosedyre-blokk). Systematisk på emnets funksjonsformer: polynomer i to variabler ($x^2 y + 2x^2 + 3y^2$), krysspris-uttrykk ($x(a - bx - cy)$), enkle $\ln$-/$e$-uttrykk. **Andreordens** $f_{xx}$, $f_{yy}$ og **krysspartiell** $f_{xy}$; at $f_{xy} = f_{yx}$ for pene funksjoner (kort). Tolkning: $f_x$ = grenseendring i $f$ når $x$ øker litt.
- **Oppgavesjangre:** TO. Mønstereksempel: «La $f(x, y) = 60x + 80y - 2x^2 - 3y^2 - xy$. Finn $f_x$, $f_y$, $f_{xx}$, $f_{yy}$ og $f_{xy}$.»
- **Typiske feil:** Behandle den andre variabelen som variabel (ikke konstant); glemme krysspris-leddet ($-xy$) i $f_x$ og $f_y$; fortegnsfeil i partielle deriverte av krysspris-uttrykk (#10).
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 4.2: Stasjonærpunkt: løs $f_x = 0$, $f_y = 0$

- **id:** `met2910-bi-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `met2910-bi-4-1`
- **kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Kap. 4.1; bygger på [Likningssett](/bok/1t/1t-4-1) fra 1T.
- **description:** Å finne stasjonærpunktet ved å sette begge partielle deriverte lik null og løse 2×2-systemet — steget før klassifiseringen.
- **Eksamensbelegg:** Fast steg i signaturoppgaven (100 %). 2×2-systemet løses med innsetting eller addisjon (fra kap. 1.5). Prioritet: **PERFEKT**.
- **Innholdskontrakt:** **Stasjonærpunkt**: løs systemet $f_x = 0$, $f_y = 0$ (som regel lineært i $x$ og $y$ for profittfunksjoner) med innsettings-/addisjonsmetode; oppgi punktet som tuppel $(x_0, y_0)$. Vis alle stegene. Kobling: dette gir *kandidaten*, klassifiseringen (kap. 4.3) avgjør typen.
- **Oppgavesjangre:** TO. Mønstereksempel: «For $f(x, y) = 60x + 80y - 2x^2 - 3y^2 - xy$: sett opp og løs $f_x = 0$, $f_y = 0$, og finn stasjonærpunktet.»
- **Typiske feil:** Regnefeil ved eliminering; fortegnsfeil overført fra de partielle derivertene; oppgi bare én koordinat; stoppe ved stasjonærpunkt uten å gå videre til klassifisering.
- **Quiz: 16 · Flashcards: 12**

#### Kapittel 4.3: Klassifisering med annenderiverttesten (AC−B²)

- **id:** `met2910-bi-4-3` · **number:** 4.3 · **estimatedMinutes:** 55 · **prerequisites:** `met2910-bi-4-2`
- **kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Kap. 4.1–4.2.
- **description:** Annenderiverttesten fra formelarket: med $A = f_{xx}$, $B = f_{xy}$, $C = f_{yy}$ avgjør $AC - B^2$ og $A$ om stasjonærpunktet er maks, min eller sadel.
- **Eksamensbelegg:** **Obligatorisk steg (100 %)** — å hoppe over klassifiseringen trekker. Testen står på formelarket, men tolkningen (hvilket fortegn gir hva) må kunne. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** **Annenderiverttesten** (theorem-blokk, på formelarket): $A = f_{xx}$, $B = f_{xy}$, $C = f_{yy}$; regn $AC - B^2$: **$AC - B^2 > 0$ og $A < 0 \Rightarrow$ maks; $AC - B^2 > 0$ og $A > 0 \Rightarrow$ min; $AC - B^2 < 0 \Rightarrow$ sadelpunkt; $AC - B^2 = 0 \Rightarrow$ inkonklusivt**. Vis regnestykket eksplisitt i hvert eksempel. Understrek at klassifiseringen ALLTID skal med etter et stasjonærpunkt (warning-blokk).
- **Oppgavesjangre:** TO. Mønstereksempel: «Stasjonærpunktet til $f(x, y) = 60x + 80y - 2x^2 - 3y^2 - xy$ er funnet. Klassifiser det med annenderiverttesten (vis $A$, $B$, $C$ og $AC - B^2$).»
- **Typiske feil:** Hoppe over klassifiseringen (#5); forveksle $A$ og $C$; feil fortegn i $B = f_{xy}$; feilkonkludere ved $AC - B^2 < 0$ (det er sadel, ikke maks/min).
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 4.4: Profittfunksjonen og maksimalt overskudd

- **id:** `met2910-bi-4-4` · **number:** 4.4 · **estimatedMinutes:** 60 · **prerequisites:** `met2910-bi-4-3`
- **kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Kap. 4.1–4.3; bygger på [Kostnad, inntekt og overskudd](/bok/s1/s1-4-1) fra S1.
- **description:** Å bygge profittfunksjonen $f(x, y) = I(x, y) - C(x, y)$ fra prisfunksjoner og kostnad, finne stasjonærpunktet, klassifisere og regne ut maksimalt overskudd — den store bedriftsøkonomiske oppgaven fra ende til annen.
- **Eksamensbelegg:** **Signaturoppgaven (100 %)** — «en bedrift produserer/selger to varer / i to fabrikker». Alltid: vis profittfunksjonen → partielle → stasjonærpunkt → AC−B² → maks overskudd. Der flest poeng tapes (fortegn i krysspris-deriverte). Prioritet: **PERFEKT**.
- **Innholdskontrakt:** Bygg **inntekt** fra prisfunksjoner $p = a - bx - cy$, $q = d - ex - gy$ (ofte krysspriseffekt): $I(x, y) = p x + q y$; trekk fra **kostnad** $C(x, y)$; få **profittfunksjonen** $f(x, y) = I - C$. Deretter hele kjeden: $f_x = f_y = 0$ → stasjonærpunkt → AC−B²-klassifisering → sett inn for å finne **maksimalt overskudd** $f(x_0, y_0)$ med enhet. **Marginal kostnadssammenligning** (H2025-vri) som motivasjon for hvorfor begge varer produseres. Gjennomregnet bedriftsøkonomisk eksempel med full føring.
- **Oppgavesjangre:** TO. Mønstereksempel: «En bedrift selger to varer med prisfunksjoner $p = 100 - 2x - y$ og $q = 120 - x - 3y$, og kostnad $C(x, y) = 10x + 20y + 300$. Vis profittfunksjonen, finn stasjonærpunktet, klassifiser det, og regn ut maksimalt overskudd.»
- **Typiske feil:** Fortegnsfeil i partielle deriverte av krysspris-profitt (#10); glemme krysspris-leddet i inntekten; hoppe over klassifiseringen; glemme enhet/tolkning på maksoverskuddet.
- **Quiz: 16 · Flashcards: 14**

#### Kapittel 4.5: Optimering under bibetingelse ved innsetting — og tolkningsspørsmålene

- **id:** `met2910-bi-4-5` · **number:** 4.5 · **estimatedMinutes:** 60 · **prerequisites:** `met2910-bi-4-4`
- **kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Kap. 4.4; [Optimering](/bok/s2/s2-3-3) fra S2 (én-variabel-optimeringen bibetingelsen reduseres til).
- **description:** Kapasitets- eller eksportbibetingelse ($x + y = k$, $y = 2x$, $x = y$) løst ved innsetting i profittfunksjonen, og tolkningsspørsmålene om betalingsvillighet og kompensasjon — toppsjikt-differensiatoren. IKKE Lagrange.
- **Eksamensbelegg:** Bibetingelse ~93 %; **metoden er innsetting, ikke Lagrange** (som har 0 forekomster). Tolkningsspørsmålene (betalingsvillighet/kompensasjon) skiller toppsjiktet. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** **Innsettingsmetoden** (prosedyre-blokk): sett bibetingelsen ($x + y = k$ / $y = 2x$ / $x = y$) inn i $f(x, y)$, reduser til én variabel, deriver, sett lik null, løs — deretter klassifiser med $f''$ (én variabel nå). **Kontrast-note**: dette er IKKE Lagrange; Lagrange-multiplikator er ikke pensum. **Tolkningsspørsmål**: «hvor mye er bedriften villig til å betale for å slippe kapasitetsbegrensningen?» = differansen mellom fri og bunden maksimalprofitt; «minste kompensasjon» ved eksportkrav på samme vis. Gjennomregnet eksempel med økonomisk tolkning.
- **Oppgavesjangre:** BB. Mønstereksempel: «Bedriften i kap. 4.4 må oppfylle kapasitetskravet $x + y = 30$. Løs optimeringen ved innsetting, og finn hvor mye bedriften maksimalt er villig til å betale for å slippe begrensningen.»
- **Typiske feil:** Prøve Lagrange (ikke pensum, og bortkastet tid); regnefeil ved innsetting; glemme å klassifisere den reduserte én-variabel-funksjonen; feil tolkning av betalingsvillighet (må være differansen fri − bunden profitt).
- **Quiz: 16 · Flashcards: 14**

#### Kapittel 4.6: Drill: signaturoppgaven fra ende til annen

- **id:** `met2910-bi-4-6` · **number:** 4.6 · **estimatedMinutes:** 85 · **prerequisites:** `met2910-bi-4-5`
- **kapitteltype:** drill
- **description:** Hele to-variabel-optimeringen som gjennomført signaturoppgave — profittfunksjon → partielle → stasjonærpunkt → AC−B² → maks overskudd → bibetingelse ved innsetting → tolkning, med full føring.
- **Eksamensbelegg:** TO + BB (100 %/93 %), alle varianter samlet — fagets tyngste og mest poenggivende storoppgave. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** **Løsningsoppskrift** (algoritmisk): 1) bygg $f = I - C$ fra prisfunksjoner og kostnad; 2) $f_x = f_y = 0$ → stasjonærpunkt; 3) $A$, $B$, $C$, $AC - B^2$ → klassifiser; 4) maks overskudd med enhet; 5) bibetingelse ved innsetting → reduser → deriver → klassifiser; 6) tolkning (betalingsvillighet/kompensasjon). **Gjennomregnet eksamens-signaturoppgave** (sammensatt a–f) med sensor-margnotater om hvor fortegnsfeilene lurer og hvor toppsjikt-poengene sitter (bibetingelse + tolkning). 10–14 oppgaver på eksamensnivå (to varer / to fabrikker / med og uten krysspris) med full føring.
- **Oppgavesjangre:** TO + BB. Mønstereksempel: «(a) Vis profittfunksjonen; (b) finn og (c) klassifiser stasjonærpunktet; (d) regn ut maks overskudd; (e) løs under $y = 2x$ ved innsetting; (f) finn minste kompensasjon for eksportkravet.»
- **Typiske feil:** Alle TO/BB-fellene fra 4.1–4.5 i kjedet form: krysspris-fortegn, glemt klassifisering, Lagrange-forsøk, feil tolkning, glemt enhet.
- **Quiz: 14 · Flashcards: 6**

**Prøve-kvote Del 4:** 4 prøver (4.A partielle deriverte 1./2. orden, sjanger TO; 4.B stasjonærpunkt + AC−B²-klassifisering, TO; 4.C profittfunksjon → maks overskudd, TO; 4.D bibetingelse ved innsetting + tolkning på eksamensnivå, BB).

---

### Del 5 — Integrasjon *(prioritet: PERFEKT — 100 %)*

#### Kapittel 5.1: Antiderivert og ubestemt integral

- **id:** `met2910-bi-5-1` · **number:** 5.1 · **estimatedMinutes:** 45 · **prerequisites:** `met2910-bi-2-2`
- **kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Bygger på [Ubestemt integral](/bok/r2/r2-2-2) og [Integrasjon av 1/x og eksponentialfunksjoner](/bok/r2/r2-2-3) fra R2.
- **description:** Antideriverte av potenser, $e^x$ og $1/x$ — potensregelen baklengs, med derivasjon som kontroll.
- **Eksamensbelegg:** Grunnlaget under integralene i Oppg. 1 (100 %). Reglene står på formelarket. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** $\int x^n\, dx = \frac{x^{n+1}}{n+1} + C$ ($n \ne -1$); $\int \frac{1}{x}\, dx = \ln|x| + C$; $\int e^{kx}\, dx = \frac{1}{k}e^{kx} + C$ (theorem-blokker, på formelarket); linearitet; **verifikasjon ved derivasjon** (deriver antiderivert → få tilbake integranden). Ubestemt vs. bestemt.
- **Oppgavesjangre:** IN. Mønstereksempel: «Finn $\int \left(3x^2 - \frac{2}{x} + e^{-x}\right) dx$ og verifiser ved derivasjon.»
- **Typiske feil:** Glemme $+C$; feil ved $n = -1$ (skal gi $\ln|x|$); feil konstant i $\int e^{kx}$; ikke verifisere.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 5.2: Substitusjon

- **id:** `met2910-bi-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `met2910-bi-5-1`
- **kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Kap. 5.1; bygger på [Variabelskifte (substitusjon)](/bok/r2/r2-3-1) fra R2 og [Integrasjon ved substitusjon](/bok/s2/s2-1-5) fra S2.
- **description:** Integrasjon ved substitusjon $\int f(g(x)) g'(x)\, dx = \int f(u)\, du$ — velg $u$, bytt $du$, integrer, bytt tilbake (eller bytt grensene).
- **Eksamensbelegg:** Substitusjon er nå ordinært pensum (var bonus i eldre sett); fast del av integralene. Formelarket har regelen. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** **Substitusjon** (prosedyre-blokk): velg $u = g(x)$, regn $du = g'(x)\, dx$, bytt om, integrer i $u$, **bytt tilbake til $x$** (ubestemt) eller **bytt grensene** (bestemt). Typiske former: $\int x e^{x^2} dx$, $\int \frac{g'(x)}{g(x)} dx = \ln|g(x)|$, $\int (2x - 1)^5 dx$. Vis substitusjonsboksen ($u$, $du$, evt. nye grenser) som eget føringssteg.
- **Oppgavesjangre:** IN. Mønstereksempel: «Beregn $\int 3x^2 (x^3 + 1)^4\, dx$ ved substitusjon.»
- **Typiske feil:** Glemme å bytte tilbake variabel (#11); ikke bytte grensene i bestemt integral; feil valg av $u$; regnefeil i $du$.
- **Quiz: 16 · Flashcards: 14**

#### Kapittel 5.3: Delvis integrasjon

- **id:** `met2910-bi-5-3` · **number:** 5.3 · **estimatedMinutes:** 50 · **prerequisites:** `met2910-bi-5-1`
- **kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Kap. 5.1; bygger på [Delvis integrasjon](/bok/r2/r2-3-2) og [Delvis integrasjon](/bok/s2/s2-1-6) fra R2/S2.
- **description:** Delvis integrasjon $\int u' v = uv - \int u v'$ på produkter som $x e^x$ og $x \ln x$ — med riktig valg av $u$ og $v'$.
- **Eksamensbelegg:** Delvis integrasjon er nå ordinært pensum; typiske $\int x e^x\, dx$, $\int x \ln x\, dx$. Formelarket har regelen. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** **Delvis integrasjon** (theorem-blokk, på formelarket): $\int u' v\, dx = uv - \int u v'\, dx$; **valgregel** (velg $v$ som blir enklere ved derivasjon — for $x \ln x$ er $v = \ln x$; for $x e^x$ er $v = x$); vis $u$/$v$/$u'$/$v'$-boksen som føringssteg. Anvendt på $\int x e^{-x} dx$, $\int x \ln x\, dx$, $\int \ln x\, dx$ (med $v' = 1$).
- **Oppgavesjangre:** IN. Mønstereksempel: «Beregn $\int (2x + 1)e^{-x}\, dx$ med delvis integrasjon.»
- **Typiske feil:** Feil valg av $u$/$v'$ (#11); fortegnsfeil i $-\int u v'$; velge $v = x$ når $\ln x$ skulle vært valgt; glemme det gjenstående integralet.
- **Quiz: 16 · Flashcards: 14**

#### Kapittel 5.4: Bestemt integral og areal under/mellom kurver

- **id:** `met2910-bi-5-4` · **number:** 5.4 · **estimatedMinutes:** 55 · **prerequisites:** `met2910-bi-5-2`
- **kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Kap. 5.1–5.3; bygger på [Areal under grafer](/bok/r2/r2-2-6) og [Areal mellom kurver](/bok/r2/r2-2-7) fra R2.
- **description:** Bestemt integral, arealtolkning og areal mellom kurver mellom nullpunkter/skjæringspunkter — pluss kvalitativ integral-sammenligning (H2025-vri).
- **Eksamensbelegg:** Areal 60 % (bestemt integral mellom nullpunkter/skjæringspunkter). **Ny H2025-vri**: kvalitativ sammenligning av to bestemte integraler ut fra at integranden er voksende, uten å regne dem ut. Prioritet: **PERFEKT** (areal) / KUNNE (kvalitativ).
- **Innholdskontrakt:** Bestemt integral $\int_a^b f\, dx = F(b) - F(a)$; arealtolkning; **areal mellom to kurver** $\int_a^b (f - g)\, dx$ (øverste minus nederste) mellom skjæringspunkter (finn dem først ved $f = g$); areal under kurve mellom nullpunkter. **Kvalitativ integral-sammenligning**: at et bestemt integral er større når integranden er større på hele intervallet (H2025), argumentert uten utregning. Vis grensebytte etter substitusjon der det brukes.
- **Oppgavesjangre:** IN. Mønstereksempel: «Finn arealet mellom kurvene $f(x) = 6 - x^2$ og $g(x) = 2$ mellom skjæringspunktene.»
- **Typiske feil:** Feil rekkefølge (nederste minus øverste); glemme å finne skjæringspunktene først; ikke bytte grensene etter substitusjon; regne negativt areal uten å håndtere fortegn.
- **Quiz: 16 · Flashcards: 14**

#### Kapittel 5.5: Drill: integraler (teknikksekk-del d og areal)

- **id:** `met2910-bi-5-5` · **number:** 5.5 · **estimatedMinutes:** 80 · **prerequisites:** `met2910-bi-5-4`
- **kapitteltype:** drill
- **description:** Hele integrasjonsrepertoaret som gjennomført oppgave — direkte antideriverte, substitusjon, delvis integrasjon og areal, med metodevalg og full føring.
- **Eksamensbelegg:** IN (100 %), alle varianter samlet — integraldelen av teknikksekken (Oppg. 1d) + arealoppgaven. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** **Metodevalg-tre**: er integranden $g'/g$ eller $f(g)g'$ → substitusjon; er den et produkt $x \cdot$(transcendent) → delvis; ellers direkte. **Gjennomregnet eksamens-integraloppgave** (blandet a–e) med sensor-margnotater om metodevalg og grensebytte. 10–14 oppgaver på eksamensnivå (direkte, substitusjon, delvis, bestemt, areal) med full føring og markert metode.
- **Oppgavesjangre:** IN. Mønstereksempel: «Beregn: (a) $\int (4x^3 - e^{2x})\, dx$; (b) $\int x e^{-x^2} dx$; (c) $\int x \ln x\, dx$; (d) $\int_0^2 (x^2 - x)\, dx$.»
- **Typiske feil:** Feil metodevalg; glemt tilbakebytte/grensebytte ved substitusjon; feil $u$/$v'$ i delvis; glemt $+C$; areal-fortegn.
- **Quiz: 14 · Flashcards: 6**

**Prøve-kvote Del 5:** 4 prøver (5.A antiderivert/ubestemt integral med verifikasjon, sjanger IN; 5.B substitusjon med grensebytte, IN; 5.C delvis integrasjon med riktig $u$/$v'$-valg, IN; 5.D bestemt integral + areal mellom kurver på eksamensnivå, IN).

---

### Del 6 — Finansmatematikk og annuitet *(prioritet: PERFEKT — 100 %, det klareste skillet mot ECON1100)*

#### Kapittel 6.1: Renter, vekstfaktor, geometriske rekker og sparing

- **id:** `met2910-bi-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `met2910-bi-1-1`
- **kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Bygger på [Geometriske følger](/bok/r2/r2-1-3) og [Rekker og summasjon](/bok/r2/r2-1-4) fra R2 og [Eksponentialfunksjoner](/bok/1t/1t-3-8) fra 1T.
- **description:** Vekstfaktor, geometriske rekker (formelarket) og sluttverdi av sparing $A_n = K \cdot \frac{(1+r)^n - 1}{r}$ — grunnlaget for all finansregning.
- **Eksamensbelegg:** Del av det 100 %-tilbakevendende finanstemaet. Geometriske rekker står på formelarket. Skill **sluttverdi (sparing)** fra nåverdi (lån). Prioritet: **PERFEKT**.
- **Innholdskontrakt:** Vekstfaktor $1 + r$; **geometrisk rekke** $\sum_{k=0}^{n-1} a r^k = a\frac{r^n - 1}{r - 1}$ (på formelarket); **sluttverdi av sparing** $A_n = K \cdot \frac{(1+r)^n - 1}{r}$ (theorem-blokk, på formelarket) — og $\cdot(1+r)$ for verdi ett år etter siste innskudd; kombinert spare-/uttaksplan. Sett opp formelen med tall før den regnes (føringsstandard). Enhet (kr) og eksakt/avrundet svar etter oppgavens krav.
- **Oppgavesjangre:** FI. Mønstereksempel: «Du sparer 12 000 kr i begynnelsen av hvert år i 8 år til 4 % årlig rente. Finn sparesaldoen rett etter siste innskudd og ett år senere.»
- **Typiske feil:** Bruke nåverdi- i stedet for sluttverdiformel (#6); feil antall terminer $n$; glemme $\cdot(1+r)$ for verdi ett år etter; sette inn uten å skrive opp formelen.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 6.2: Annuitetslån: terminbeløp, renter/avdrag og restgjeld

- **id:** `met2910-bi-6-2` · **number:** 6.2 · **estimatedMinutes:** 60 · **prerequisites:** `met2910-bi-6-1`
- **kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Kap. 6.1.
- **description:** Fast terminbeløp på annuitetslån, oppdelingen i renter og avdrag per termin, og restgjeld som nåverdi av gjenstående terminer.
- **Eksamensbelegg:** Kjernen i finansoppgaven (100 %). Sensor krever **riktig finansformel** og korrekt oppdeling: renter i én termin = restgjeld · r; avdrag = terminbeløp − renter. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** **Terminbeløp** på annuitetslån $K = K_0 \cdot \frac{(1+r)^n\, r}{(1+r)^n - 1}$ (theorem-blokk, på formelarket); **renter i én termin** = restgjeld $\cdot\, r$ (IKKE på formelarket — må kunnes); **avdrag** = terminbeløp − renter; **restgjeld** = nåverdi av gjenstående terminer (eller startlån minus sum avdrag). Sett opp formelen med tall før innsetting. Betalingsplan-tankegangen (én linje per termin).
- **Oppgavesjangre:** FI. Mønstereksempel: «Et annuitetslån på 600 000 kr nedbetales over 10 år med 5 % årlig rente. Finn terminbeløpet, og finn renter og avdrag i første termin.»
- **Typiske feil:** Feil finansformel (sluttverdi vs. nåverdi, #6); glemme at renter = restgjeld·r (ikke startlån·r etter første termin); feil restgjeld; ikke sette opp formelen.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 6.3: Endringer: renteendring, månedlig omregning og kombinerte planer

- **id:** `met2910-bi-6-3` · **number:** 6.3 · **estimatedMinutes:** 55 · **prerequisites:** `met2910-bi-6-2`
- **kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Kap. 6.2.
- **description:** Å regne videre etter en renteendring midtveis, gå fra årlig til månedlig ($r/12$, $n \cdot 12$), og håndtere økt lån eller kombinerte spare-/lånplaner.
- **Eksamensbelegg:** Fast toppsjikt-del av finansoppgaven. Sensor krever **korrekt antall terminer** ved renteendring og månedlig omregning. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** **Renteendring midtveis**: finn restgjeld ved endringstidspunktet, sett opp nytt terminbeløp for gjenstående terminer med ny rente. **Månedlig omregning**: bruk $r/12$ per måned og $n \cdot 12$ måneder (theorem-/prosedyre-blokk). **Økt lån / kombinerte planer**: oppdater restgjelden og sett opp formelen på nytt. Alltid vis den oppdaterte restgjelden som mellomsteg.
- **Oppgavesjangre:** FI. Mønstereksempel: «Lånet i kap. 6.2 får renten satt opp til 6 % etter 4 år. Finn restgjelden etter 4 år og det nye terminbeløpet for de resterende 6 årene.»
- **Typiske feil:** Feil antall terminer ved renteendring/månedlig (#6); bruke opprinnelig restgjeld etter endring; glemme $r/12$ eller $n \cdot 12$; regne fra startlån i stedet for restgjeld.
- **Quiz: 16 · Flashcards: 14**

#### Kapittel 6.4: Kontinuerlig rente og doblingstid

- **id:** `met2910-bi-6-4` · **number:** 6.4 · **estimatedMinutes:** 45 · **prerequisites:** `met2910-bi-6-1`
- **kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Kap. 6.1; bygger på [Eksponential- og logaritmeligninger](/bok/r1/r1-1-3) fra R1.
- **description:** Kontinuerlig forrentning $A = P e^{rt}$ og doblingstid ved å løse $e^{rt} = 2$ — den konseptuelle finansvrien som er stigende i frekvens.
- **Eksamensbelegg:** Kontinuerlig rente/doblingstid ~27 % (stigende: 2019V, 2022H, 2023H, H2025). Toppsjikt-differensiator; kobler finans og eksponentiallikninger. Prioritet: KUNNE (stigende mot PERFEKT).
- **Innholdskontrakt:** **Kontinuerlig rente** $A = P e^{rt}$ (theorem-blokk); **doblingstid** ved å løse $e^{rt} = 2 \Rightarrow t = \frac{\ln 2}{r}$ (også for forbrukslån-dobling); sammenligning årlig rentesrente vs. kontinuerlig vs. uten rentesrente. Vis $\ln$-steget eksplisitt.
- **Oppgavesjangre:** KR. Mønstereksempel: «Et beløp forrentes kontinuerlig med 3 % per år. Hvor lang tid tar det å doble beløpet? Sammenlign med årlig rentesrente på 3 %.»
- **Typiske feil:** Bruke årlig-formel der kontinuerlig kreves; feil $\ln$-håndtering ($e^{rt} = 2 \Rightarrow rt = \ln 2$); blande $r$ og $r/100$; ikke vise $\ln$-steget.
- **Quiz: 14 · Flashcards: 12**

#### Kapittel 6.5: Drill: finansoppgaven fra ende til annen

- **id:** `met2910-bi-6-5` · **number:** 6.5 · **estimatedMinutes:** 80 · **prerequisites:** `met2910-bi-6-4`
- **kapitteltype:** drill
- **description:** Hele finansrepertoaret som gjennomført oppgave — sparing, annuitetslån med renter/avdrag/restgjeld, renteendring/månedlig og kontinuerlig rente, med formelvalg og full føring.
- **Eksamensbelegg:** FI + KR (100 %/27 %), alle varianter samlet — en av de sikreste storoppgavene når formlene sitter. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** **Formelvalg-tre**: sparing → sluttverdi; lån → terminbeløp; renter i termin → restgjeld·r; endring → oppdater restgjeld; kontinuerlig → $Pe^{rt}$; dobling → $\ln 2 / r$. **Gjennomregnet eksamens-finansoppgave** (sammensatt a–e: terminbeløp → renter/avdrag → renteendring → månedlig) med sensor-margnotater om formelvalg (sluttverdi vs. nåverdi) og hvor terminantallet lurer. 10–14 oppgaver på eksamensnivå med full føring.
- **Oppgavesjangre:** FI + KR. Mønstereksempel: «(a) Terminbeløp på et lån; (b) renter og avdrag i termin 1 og 2; (c) restgjeld etter 3 år; (d) nytt terminbeløp ved renteendring; (e) doblingstid ved kontinuerlig rente.»
- **Typiske feil:** Alle FI/KR-fellene fra 6.1–6.4 i kjedet form: feil formel (sluttverdi/nåverdi), feil terminantall, glemt restgjeld·r, uskrevet formel.
- **Quiz: 14 · Flashcards: 6**

**Prøve-kvote Del 6:** 4 prøver (6.A sparing/sluttverdi + geometriske rekker, sjanger FI; 6.B annuitetslån — terminbeløp/renter/avdrag/restgjeld, FI; 6.C renteendring + månedlig omregning, FI; 6.D kontinuerlig rente/doblingstid + full finansoppgave på eksamensnivå, KR/FI).

---

### Del 7 — Lineær algebra *(prioritet: KUNNE — 80 %, tempo: perfekt)*

#### Kapittel 7.1: Determinant og Cramers regel

- **id:** `met2910-bi-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `met2910-bi-1-5`
- **kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Bygger på [Determinanter og invers matrise](/bok/matte/bi-okonomi-9-2) og [Cramers regel og økonomiske anvendelser](/bok/matte/bi-okonomi-9-4) fra BI-matte.
- **description:** Determinant 2×2 ($ad - bc$) og 3×3 (Sarrus/kofaktor), og Cramers regel for å løse lineære systemer ved å bytte kolonne med konstantvektoren.
- **Eksamensbelegg:** Determinant + Cramer dominerte t.o.m. 2019 og beholdes (kan komme igjen). Prioritet: KUNNE (tempo: perfekt — del av lineær-algebra-oppgaven).
- **Innholdskontrakt:** **Determinant** 2×2 $\det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$; 3×3 ved Sarrus og kofaktorutvikling (theorem-blokker). **Cramers regel**: for $A\mathbf{x} = \mathbf{b}$ er $x_i = \det(A_i)/\det(A)$, der $A_i$ er $A$ med $i$-te kolonne byttet med $\mathbf{b}$. Vis utregningen av hver determinant. $\det(A) = 0 \Rightarrow$ ingen entydig løsning (bro til kap. 7.3).
- **Oppgavesjangre:** LA. Mønstereksempel: «Løs systemet {$3x + 2y = 12$, $x - y = 1$} med Cramers regel (vis alle determinantene).»
- **Typiske feil:** Fortegnsfeil i kofaktorutvikling; bytte feil kolonne i Cramer; regnefeil i 3×3-determinant; dele på $\det(A) = 0$ uten å merke det.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 7.2: Gauss-eliminasjon

- **id:** `met2910-bi-7-2` · **number:** 7.2 · **estimatedMinutes:** 55 · **prerequisites:** `met2910-bi-7-1`
- **kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Kap. 7.1; bygger på [Lineære likningssystem og Gauss-eliminasjon](/bok/matte/bi-okonomi-9-3) fra BI-matte.
- **description:** Gauss-eliminasjon på den utvidede matrisen til trappeform, med tilbakesubstitusjon — teknikken som dominerer fra 2022 og bør vektes høyest.
- **Eksamensbelegg:** **Gauss dominerer fra 2022** og bør vektes høyest for fremtidige sett. Både innsettings- og addisjonsmetode godtas; addisjon gir mindre regnearbeid i 3×3. Prioritet: KUNNE (tempo: perfekt — mest sannsynlige lineær-algebra-variant).
- **Innholdskontrakt:** **Gauss-eliminasjon** (prosedyre-blokk): sett opp utvidet matrise $[A \mid \mathbf{b}]$, radreduser til trappeform med radoperasjoner (bytt rader, gang rad med skalar, legg til multiplum av rad), **tilbakesubstituer**. Oppgi løsningen som tuppel. Vis hver radoperasjon. For 3×3: systematisk eliminering nedover.
- **Oppgavesjangre:** LA. Mønstereksempel: «Løs med Gauss-eliminasjon: {$x + 2y + z = 6$, $2x - y + 3z = 9$, $x + y - z = 0$}.»
- **Typiske feil:** Regnefeil i radoperasjonene; glemme å tilbakesubstituere; blande utvidet matrise og koeffisientmatrise; ikke vise radoperasjonene.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 7.3: Parameter, entydighet og «er systemet lineært?»

- **id:** `met2910-bi-7-3` · **number:** 7.3 · **estimatedMinutes:** 50 · **prerequisites:** `met2910-bi-7-2`
- **kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Kap. 7.1–7.2.
- **description:** Parameteroppgaver (ingen entydig løsning $\Leftrightarrow \det(A) = 0$) og den konseptuelle H2025-vrien: avgjøre om et likningssystem er lineært og dermed har reell løsning.
- **Eksamensbelegg:** Parameteroppgaver klassisk; **konseptuell H2025-vri**: avgjør om et system er lineært (et kvadrert ledd gjør det ikke-lineært → ingen reell løsning på lineær-algebra-vis) og om det har løsning. Ny og toppsjikt-differensierende. Prioritet: KUNNE.
- **Innholdskontrakt:** **Parameteroppgave**: «ingen entydig løsning» $\Leftrightarrow \det(A) = 0$ → løs for parameteren. **Linearitet (H2025-vri)**: et likningssystem er lineært hvis hver likning er lineær i de ukjente (ingen kvadrerte/produkt-/rot-ledd); et kvadrert ledd gjør systemet ikke-lineært, og determinant/Cramer/Gauss gjelder ikke. Begrunn konklusjonen. Kort om homogent system $A\mathbf{x} = \mathbf{0}$ (triviell løsning alltid; ikke-triviell $\Leftrightarrow \det = 0$).
- **Oppgavesjangre:** LA. Mønstereksempel: «For hvilken verdi av $a$ har systemet {$2x + ay = 4$, $ax + 8y = 6$} ingen entydig løsning? Avgjør også om systemet {$x^2 + y = 3$, $x - y = 1$} er lineært.»
- **Typiske feil:** Glemme at $\det(A) = 0$ gir parameterkravet; kalle et system med kvadrert ledd lineært; ikke begrunne linearitetskonklusjonen; blande entydig/ingen/uendelig.
- **Quiz: 14 · Flashcards: 12**

#### Kapittel 7.4: Drill: lineær algebra-oppgaven

- **id:** `met2910-bi-7-4` · **number:** 7.4 · **estimatedMinutes:** 75 · **prerequisites:** `met2910-bi-7-3`
- **kapitteltype:** drill
- **description:** Hele lineær-algebra-repertoaret som gjennomført oppgave — determinant, Cramer, Gauss og parameter-/linearitetsanalyse, med metodevalg og full føring.
- **Eksamensbelegg:** LA (80 %), alle varianter samlet. Prioritet: KUNNE (tempo: perfekt).
- **Innholdskontrakt:** **Metodevalg**: 2×2/3×3 med tall → Gauss (primært) eller Cramer; parameter → $\det(A) = 0$; konseptuelt → sjekk linearitet. **Gjennomregnet eksamens-oppgave** (sammensatt a–d: løs et system to måter + parameter + linearitet) med sensor-margnotater om at begge metoder godtas og at addisjon sparer regnearbeid i 3×3. 10–14 oppgaver på eksamensnivå med full føring.
- **Oppgavesjangre:** LA. Mønstereksempel: «(a) Løs et 3×3-system med Gauss; (b) løs et 2×2-system med Cramer; (c) finn parameteren som gir ingen entydig løsning; (d) avgjør om et gitt system er lineært.»
- **Typiske feil:** Alle LA-fellene fra 7.1–7.3 i kjedet form: kofaktor-fortegn, radoperasjonsfeil, glemt tilbakesubstitusjon, parameter-/linearitetsfeil.
- **Quiz: 14 · Flashcards: 6**

**Prøve-kvote Del 7:** 4 prøver (7.A determinant + Cramers regel, sjanger LA; 7.B Gauss-eliminasjon 2×2/3×3, LA; 7.C parameter-/entydighet + linearitet, LA; 7.D full lineær-algebra-oppgave på eksamensnivå med metodevalg, LA).

---

### Del 8 — Eksamenstrening

#### Kapittel 8.1: Teknikksekk-stordrillen: full Oppgave 1 med integraler

- **id:** `met2910-bi-8-1` · **number:** 8.1 · **estimatedMinutes:** 90 · **prerequisites:** Del 1–7
- **kapitteltype:** drill
- **description:** Den kryssgående drillen på hele teknikksekken (Oppgave 1) — derivering + likninger + ulikheter + integraler kjedet, slik den faktisk står på settet, med full føring.
- **Eksamensbelegg:** TS + IN samlet — Oppgave 1 er åpningen og høyest vektet i 100 % av settene. Denne drillen kobler Del 2 (derivering/likninger/ulikheter) og Del 5 (integraler) og må derfor komme etter begge. Prioritet: **PERFEKT** (kryssgående; plassert sist).
- **Innholdskontrakt:** Malen «identifiser regel/metode per delpunkt → regn med full føring → forenkle» demonstrert på en komplett Oppgave 1 (2–4 deriverte + 2–3 likninger + 2 ulikheter + 2 integraler, evt. ett konseptuelt integralspørsmål). 20+ blandede delpunkter som roterer alle teknikkene, hver med full føring i fasit (ingen svar uten utregning). Sensor-margnotater om at Oppg. 1 er de billigste poengene og at bare svar/tastetrykk gir 0.
- **Oppgavesjangre:** TS + IN. Mønstereksempel (full Oppg. 1): «(a) Deriver $x^2 e^{-x}$; (b) deriver $\frac{\ln x}{x}$; (c) løs $2x^2 - 5x - 3 = 0$; (d) løs $\frac{x-2}{x+3} \le 0$; (e) beregn $\int x e^{x^2} dx$; (f) beregn $\int_1^e \frac{1}{x} dx$.»
- **Typiske feil:** Hele teknikksekk-feilkatalogen samlet: kvotient-fortegn, glemt kjerneregel, uskreven diskriminant, glemt å snu ulikhetstegn, nevner-null, glemt tilbakebytte/grensebytte i integral, svar uten utregning.
- **Quiz: 18 · Flashcards: 30** (teknikk-/metodevalg-bank + sensorregel-bank — flashcard-gull)

#### Kapittel 8.2: Øvingseksamen 1: MET 29107-malen (6 oppgaver, 28 delpunkter)

- **id:** `met2910-bi-8-2` · **number:** 8.2 · **estimatedMinutes:** 300 · **prerequisites:** `met2910-bi-8-1`
- **kapitteltype:** øvingseksamen
- **description:** Komplett 5-timers sett etter H2025-malen: 6 oppgaver / 28 likt vektede delpunkter, kalkulator + formelark, som speiler den «typiske» eksamenens temafordeling, med full A-besvarelse-fasit.
- **Eksamensbelegg/miks:** Speiler MET 29107-hovedmalen (5 timer, 6 oppgaver, 28 likt vektede delpunkter, «vis all utregning»): **Oppg. 1 (TS + IN):** teknikksekk — 2 deriverte, 2 likninger, 2 ulikheter, 2 integraler. **Oppg. 2 (FD):** én-variabel funksjonsdrøfting + areal/skjæring. **Oppg. 3 (FI + KR):** annuitet/sparing + kontinuerlig rente eller doblingstid. **Oppg. 4 (GR):** graflesning — fortegn til $f'$/$f''$. **Oppg. 5 (TO + BB):** bedriftsøkonomisk to-variabel-optimering med bibetingelse. **Oppg. 6 (LA):** lineært system (Gauss) + konseptuelt spørsmål om linearitet. Alle oppgaver nyskrevne med pene tall. Løsningsforslag som A-besvarelse i `collapsible` per oppgave (figurbeskrivelser i ord, all utregning vist), med `tip`-notat om vekting (28 likt vektede delpunkter) og tidsbudsjett (~50 min/oppgave).
- **Oppgavesjangre:** TS, IN, FD, GR, FI, KR, TO, BB, LA.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 8.3: Øvingseksamen 2: annen miks (marginalanalyse + to fabrikker)

- **id:** `met2910-bi-8-3` · **number:** 8.3 · **estimatedMinutes:** 300 · **prerequisites:** `met2910-bi-8-2`
- **kapitteltype:** øvingseksamen
- **description:** Komplett 5-timers sett etter samme mal med en annen tema-miks: marginalanalyse/elastisitet, to-fabrikker-optimering og en rasjonal drøfting.
- **Eksamensbelegg/miks:** **Oppg. 1 (TS + IN):** teknikksekk (annen blanding — inkl. delvis integrasjon). **Oppg. 2 (FD + ME):** drøfting av en rasjonal funksjon med asymptoter + marginalanalyse (gjennomsnittskostnad minimert). **Oppg. 3 (FI):** annuitetslån med renteendring + månedlig omregning. **Oppg. 4 (GR):** graflesning fra grafen til $f$ (H2025-variant). **Oppg. 5 (TO + BB):** to-fabrikker-optimering med kapasitetsbibetingelse + betalingsvillighet. **Oppg. 6 (LA + ME):** Cramer/Gauss + priselastisitet med $\mathrm{El} = -1$. Alle nyskrevne. A-besvarelse-fasit i `collapsible` per oppgave med vektings-/tidsnotat.
- **Oppgavesjangre:** TS, IN, FD, ME, FI, GR, TO, BB, LA.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 8.4: Øvingseksamen 3: bredde-/konseptuell H2025-profil

- **id:** `met2910-bi-8-4` · **number:** 8.4 · **estimatedMinutes:** 300 · **prerequisites:** `met2910-bi-8-3`
- **kapitteltype:** øvingseksamen
- **description:** Et sett som vekter de konseptuelle H2025-vriene tyngst — kvalitativ integralsammenligning, linearitet, kontinuerlig rente/doblingstid og graflesning fra grafen til $f$ — for å fange bredden i det ferske formatet.
- **Eksamensbelegg/miks:** Speiler H2025-bredden med konseptuelle vrier: **Oppg. 1 (TS + IN):** teknikksekk + **kvalitativ integral-sammenligning** (hvilket integral er størst, uten å regne). **Oppg. 2 (FD):** full drøfting av en $x e^x$-type på begrenset $Df$ (lokal vs. global) + tangent. **Oppg. 3 (KR + FI):** kontinuerlig rente/doblingstid + sparing. **Oppg. 4 (GR):** fortegn til $f'$/$f''$ lest fra grafen til $f$. **Oppg. 5 (TO + BB):** to-vare-optimering med eksportkrav $y = 2x$ ved innsetting + minste kompensasjon. **Oppg. 6 (LA):** avgjør om et system er lineært og har løsning + Gauss på et lineært system. Alle nyskrevne. A-besvarelse-fasit i `collapsible` med margnotater om hva som skiller topp- fra midtsjikt. Sammen dekker de tre øvingseksamenene alle sjangre AL, TS, FD, GR, ME, TO, BB, IN, FI, KR, LA minst én gang.
- **Oppgavesjangre:** TS, IN, FD, KR, FI, GR, TO, BB, LA.
- **Quiz: 5 · Flashcards: 0**

**Prøve-kvote Del 8:** ingen egne temaprøver — teknikksekk-stordrillen (8.1) + de tre øvingseksamenene (8.2–8.4) er delens trening.

---

### Kvotesammendrag (quiz/flashcards/prøver) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1–0.2 | 12+12 = **24** | 12+24 = **36** | 0 |
| 1 | 1.1–1.5 | 16+16+18+18+16 = **84** | 16+16+16+16+16 = **80** | 4 |
| 2 | 2.1–2.3 | 18+18+14 = **50** | 18+16+6 = **40** | 4 |
| 3 | 3.1–3.6 | 16+18+16+16+16+14 = **96** | 16+18+16+14+16+6 = **86** | 4 |
| 4 | 4.1–4.6 | 18+16+16+16+16+14 = **96** | 18+12+16+14+14+6 = **80** | 4 |
| 5 | 5.1–5.5 | 16+16+16+16+14 = **78** | 16+14+14+14+6 = **64** | 4 |
| 6 | 6.1–6.5 | 18+18+16+14+14 = **80** | 18+18+14+12+6 = **68** | 4 |
| 7 | 7.1–7.4 | 16+16+14+14 = **60** | 16+16+12+6 = **50** | 4 |
| 8 | 8.1–8.4 | 18+5+5+5 = **33** | 30+0+0+0 = **30** | 0 (drill + 3 øvingseksamener) |
| **Sum** | **40 kap.** | **601 ≥ 500 ✓** | **534 ≥ 500 ✓** | **28 + 3 ØE** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvens og bredde: de fem PERFEKT-tunge innholdsdelene
(2 derivasjon, 3 drøfting, 4 to-variabel, 5 integrasjon, 6 finans) står for 400 av
601 quiz — de temaene som faktisk bærer eksamenspoengene. Tettheten ligger bevisst
litt over 500-gulvet fordi faget er **det bredeste regnefaget** i fabrikken (sju
distinkte verktøymoduler i ett 7,5-ECTS-fag); drillkapitlene har lave
flashcard-kvoter (få nye definisjoner, mye oppgaveregning), mens de metatunge
kapitlene (0.2 føringshåndverk, 8.1 teknikksekk-stordrill) er flashcard-rike
(sensorregel-, formelark- og fortegnsskjema-bank). Quizzene skrives som
metode-/føringssjekk (hvilken regel/formel, er klassifiseringen med, hvilket steg
mangler, hvorfor gir dette 0) med distraktorer bygget på feilkatalogen (§5 i
analysen) — ikke ren repetisjon.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–7, 28 totalt)

Hver del 1–7 får ett prøvekapittel (`met2910-bi-<del>-prove`, chapterNumber `<del>.P`)
med fire prøver. Hver prøve består av nyskrevne oppgaver i eksamens sjangre, med
løsningsforslag (A-besvarelse med all utregning vist — bare svar/tastetrykk gir 0)
og vektfordeling. Prøvene per del er spesifisert i «Prøve-kvote Del N»-linjene over.
Oppsummert dekker de:

- **Del 1** (AL/TS): potens/rot/log → faktorisering/brøk → likninger m/diskriminant → ulikheter m/fortegnsskjema + rette linjer/systemer.
- **Del 2** (TS): produkt/kvotient-derivasjon → kjerne/$\ln$/$e^x$ → derivering+likninger → full teknikksekk-Oppgave 1.
- **Del 3** (FD/GR/ME): nullpunkt+$f'$ → $f''$+skisse+tangent → asymptoter+graflesning → marginal/elastisitet + full drøfting.
- **Del 4** (TO/BB): partielle → stasjonærpunkt+AC−B² → profittfunksjon+maks → bibetingelse ved innsetting+tolkning.
- **Del 5** (IN): antiderivert → substitusjon → delvis → bestemt integral+areal.
- **Del 6** (FI/KR): sparing → annuitetslån+renter/avdrag → renteendring/månedlig → kontinuerlig rente+full finansoppgave.
- **Del 7** (LA): determinant+Cramer → Gauss → parameter+linearitet → full lineær-algebra-oppgave.

### Øvingseksamener (3 komplette sett — kap. 8.2–8.4)

| Sett | Mal den speiler | Tema-miks (Oppg. 1–6) |
|---|---|---|
| Øvingseksamen 1 (8.2) | MET 29107-hovedmal (H2025) | TS+IN + FD + FI/KR + GR + TO/BB + LA |
| Øvingseksamen 2 (8.3) | Samme mal, annen miks | TS+IN + FD/ME(rasjonal+marginal) + FI(renteendring) + GR(fra $f$) + TO/BB(to fabrikker) + LA/ME(elastisitet) |
| Øvingseksamen 3 (8.4) | Bredde-/konseptuell H2025-profil | TS+IN(kvalitativt integral) + FD(lokal/global) + KR/FI + GR(fra $f$) + TO/BB(eksportkrav) + LA(linearitet) |

Alle tre har fast dramaturgi (6 oppgaver / 28 likt vektede delpunkter, 5 timer,
kalkulator + formelark). Til sammen dekker de sjangrene AL, TS, FD, GR, ME, TO, BB,
IN, FI, KR, LA minst én gang; grunnleggende algebra (AL) inngår også vevd inn i
teknikksekken og som forutsetning i alle sett.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (5 timer, 6 oppgaver, 28 likt vektede delpunkter,
   vekttall, A–F, kalkulator + formelark), den faste dramaturgien (teknikksekk →
   drøfting → finans → graflesning → to-variabel → lineær algebra), formathistorikken
   (to-delt t.o.m. H2023, samlet MET 29107 fra H2025) og prognosen (fra kap. 0.1).
2. **Prioriteringskartet** — temafrekvens-tabellen omgjort til tre lesenivåer:
   **perfekt** (derivasjon/teknikksekk, én-variabel drøfting, to-variabel-optimering,
   integrasjon, finansmatematikk, grunnleggende algebra), **kunne** (lineær algebra,
   graflesning, kontinuerlig rente), **kjenne** (marginalanalyse, elastisitet,
   rasjonale/asymptoter). Med fraværsbildet uttrykt (Lagrange-multiplikator,
   omhyllingsteorem, homogenitet, nivåkurver/implisitt derivasjon, differensiallikninger,
   Taylor, komplekse tall = 0/15, la ligge).
3. **Sjangerguiden** — sjangrene AL, TS, FD, GR, ME, TO, BB, IN, FI, KR, LA med
   løsningsoppskriftene fra drillkapitlene (2.3, 3.6, 4.6, 5.5, 6.5, 7.4, 8.1) i
   kortform: teknikksekk-metodevalg, drøftingsoppskriften (nullpunkt → $f'$ → $f''$ →
   klassifiser → skisse), signaturoppskriften (profitt → stasjonærpunkt → AC−B² →
   bibetingelse ved innsetting → tolkning), integrasjons-metodevalg-treet,
   finans-formelvalg-treet, lineær-algebra-metodevalg.
4. **«Vis all utregning»-håndverket** — egen seksjon (fagets viktigste enkeltregel,
   fra kap. 0.2): føringsstandarden (formel skrevet ut før innsetting, ett steg per
   linje, kalkulatortastetrykk gir 0), formelarkbruk (hva som står der / hva som må
   kunnes utenat), fortegnsskjema-malen, og klassifiseringskravet (AC−B² / $f''$
   alltid med; lokal vs. global på begrenset $Df$).
5. **Sensorreglene** — de fem metareglene (utregning må vises med formlene; riktig
   formelvalg/fremgangsmåte bærer poengene; eksakt/forenklet svar med enhet/tolkning;
   fortegnsskjema er standardverktøyet; klassifisering alltid med) + de fagspesifikke
   strenge punktene (abc med utskrevet diskriminant; forkast røtter som nuller nevner;
   snu ulikhetstegnet; skill sluttverdi/nåverdi og riktig terminantall; bibetingelse
   ved innsetting, ALDRI Lagrange; begge lineær-system-metoder godtas).
6. **Feilkatalogen** — de typiske feilene fra sensorveiledningene samlet (svar uten
   utregning; glemt å snu ulikhetstegn; rot som nuller nevner; $x^2$-nevner behandlet
   som fortegnsskiftende; hoppet over klassifisering; feil finansformel/terminantall;
   lokal/global-forveksling; uskreven diskriminant; graf $f$ vs. $f'$ forvekslet;
   fortegnsfeil i krysspris-partielle; glemt tilbakebytte/valg i substitusjon/delvis),
   hver med henvisning til kapitlet som forebygger den.
7. **Formelark i emnets notasjon** — én side som gjengir det utdelte formelarket
   (potens-/kvadrat-/logaritmeregler, abc, derivasjonsregler inkl. produkt/kvotient/
   kjerne, integrasjonsregler inkl. substitusjon/delvis, lineær-funksjon-formler,
   geometriske rekker, annuitets-/nåverdiformlene, AC−B²-klassifiseringen) — med
   markering av hva som IKKE står der og må kunnes utenat (renter = restgjeld·r,
   avdrag = terminbeløp − renter, doblingstid $t = \ln 2/r$, klassifiseringstolkningen
   maks/min/sadel).
8. **Studieløp** — anbefalt progresjon (10-ukers og 3-ukers intensivvariant): Del 0 →
   1 (grunnalgebra) → 2 (mekaniser teknikksekken) → 3 (drøfting) → 5 (integrasjon) →
   4 (to-variabel-optimering) → 6 (finans) → 7 (lineær algebra), til slutt
   teknikksekk-stordrillen (8.1) og de tre øvingseksamenene under tidspress (300 min,
   ~50 min/oppgave). Intensivvariant: Del 1 + 2 + 3 + 4 + 6 + kap. 0.2 + øvingseksamenene
   (kjernen som bærer eksamen). Terp prøvene og drillkapitlene — sjangergjenkjenning +
   føring gir poenggulvet.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `met2910-bi` med alle 40 kapitler
   + 7 prøvekapitler (id/number/title/description/estimatedMinutes/topics/
   competenceGoals/prerequisites/linkedChapterId) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`, wiret i `textbook-courses-hoyskole.ts`;
   `sectionNames` fra makrostruktur-tabellen (§2). **`number` er del-basert** («4.3»,
   aldri lineær) — bokforsiden grupperer på `number.split('.')[0]`. Institusjon =
   **Handelshøyskolen BI** i `institusjoner.ts` (ny institusjon — første BI-fag),
   visningsnavn «MET 2910 Matematikk for økonomer».
2. **Del 0** (kap. 0.1–0.2) — etablerer sjangerkodene AL–LA, frekvenstallene, «vis all
   utregning»-håndverket, formelarkbruken og fortegnsskjema-malen som resten refererer
   til.
3. **Perfekt-kjernen i avhengighetsrekkefølge**: Del 1 (grunnalgebra) → Del 2
   (derivasjon/teknikksekk) → Del 3 (drøfting) → Del 5 (integrasjon) → Del 4
   (to-variabel-optimering) → Del 6 (finans). Bygg gjerne én agent per hel del;
   Del 3 og 4 (6 kapitler hver) kan splittes, men gi begge agentene HELE delens
   kontrakter. Drillkapitlene bygges av samme agent som delen sin.
4. Del 7 (lineær algebra) etter Del 1.5.
5. Del 8 til slutt (teknikksekk-stordrillen og øvingseksamenene gjenbruker alle
   temaene; øvingseksamen-agenten leser HELE skjelettet — kap. 8.1 krever både Del 2
   og Del 5).
6. **Prøvekapitler** (§4, 28 stk) legges som `met2910-bi-<del>-prove`, chapterNumber
   `<del>.P`, bygget av delens agent.
7. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse` (generer
      helst via `json.dump`; escape `"` i norske sitattegn); `npm run build` grønn.
- [ ] **LaTeX**: alle formler i `$...$`/`$$...$$` med dobbel backslash i JSON (`\\frac`,
      `\\ln`, `\\int`); ingen unicode-brøker; konsistent notasjon: $f'(x)$, $f''(x)$,
      $f_x$, $f_{xy}$, $AC - B^2$, $A_n$, $K_0$, $P e^{rt}$, $\mathrm{El}_p x$, tuppel
      $(x, y)$.
- [ ] **«Vis all utregning» i ALLE løsningsforslag**: formelen skrevet eksplisitt ut
      FØR innsetting; ett algebrasteg per linje; markert, forenklet sluttsvar med enhet
      der oppgaven er anvendt; kalkulatortastetrykk aldri brukt som løsning (kun som
      kontroll). Ubegrunnede/tastetrykk-baserte fasitsvar er byggefeil.
- [ ] **Fortegnsskjema obligatorisk**: hver ulikhet og hver fortegnsanalyse av $f$/$f'$/
      $f''$ (kap. 1.4, 3.1–3.4, 3.6) fører fortegnsskjema-malen fra kap. 0.2; null
      (nevner-null) aldri i løsningsmengden; ulikhetstegn snudd eksplisitt ved negativ
      multiplikasjon.
- [ ] **Klassifisering med warning**: kap. 4.3 (AC−B²-testen) og kap. 3.2/3.3
      ($f''$-tegn / fortegnsskifte) har eksplisitt `warning`-blokk om at klassifiseringen
      ALLTID skal med etter et stasjonærpunkt, og at lokal vs. global krever
      endepunktsammenligning på begrenset $Df$.
- [ ] **Bibetingelse ved innsetting, IKKE Lagrange**: kap. 4.5 har eksplisitt
      kontrast-note om at Lagrange-multiplikator ikke er pensum (0 forekomster) og at
      bibetingelser løses ved innsetting.
- [ ] **Notasjonskonsistens (grep over alle met2910-bi-filer)**. Forbudte termer:
      Lagrange-multiplikator/$\lambda$ som *metode studenten skal bruke* (kun omtalt
      som ikke-pensum i kap. 4.5), omhyllingsteorem, homogenitet/Euler, nivåkurve/
      implisitt derivasjon, differensiallikning, Taylor-/rekkeutvikling (utover
      geometriske rekker), komplekse tall, «Hesse-determinant» (bruk $AC - B^2$).
      Påkrevd/standard: $f_x$/$f_{xy}$, $AC - B^2$, fortegnsskjema, «vis utregningen»,
      annuitet/restgjeld·r, Gauss/Cramer.
- [ ] **Regneprosedyrer som theorem-blokker**: abc m/diskriminant (1.3), produkt/kvotient/
      kjerne (2.1–2.2), fortegnsskjema-mal (0.2), AC−B²-test (4.3), substitusjon/delvis
      (5.2–5.3), annuitets-/sluttverdiformlene (6.1–6.2), Gauss-prosedyren (7.2) er hver
      en `theorem`-/prosedyre-blokk i emnets notasjon, med «(på formelarket)»-merking der
      det gjelder.
- [ ] **Gjennomregnede bedriftsøkonomiske eksempler**: hvert PERFEKT-kapittel har minst
      ett eksempel på eksamensnivå i bedriftsøkonomisk innramming (bedrift/fabrikk/lån/
      sparing), løst som A-besvarelse med all utregning.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra dette
      skjelettet), Forkunnskaper-blokk med kryssbok-lenker (kun til kapitler som finnes —
      id-ene i §3 er verifisert mot `textbook-courses-matte.ts`; partiellderivasjon lenkes
      IKKE til noen R1/R2-bok, siden begrepet ikke finnes der) + `collapsible` Symbol- og
      formelliste per delkapittel (med «(på formelarket)»-merking), Motivasjon-`text`,
      definisjoner/regneprosedyrer i emnets notasjon, Typiske feil-`warning`, 2–4
      eksempler (siste på eksamensnivå), 6–12 øvinger med `solution` + `hints`,
      repetisjons-`collapsible`; drillkapitler har løsningsoppskrift + sensor-kommentert
      case + 10–15 oppgaver.
- [ ] **Quiz-sum ≥ 601 og flashcard-sum ≥ 534** per kvotetabellen i §3 (kontrollsummér —
      den er autoritativ); quizzene som metode-/føringssjekk med distraktorer fra
      feilkatalogen.
- [ ] **Prøver**: 4 per temadel 1–7 (28 stk) + teknikksekk-stordrill (8.1) + 3
      øvingseksamener (8.2–8.4); settene og prøvene dekker samlet sjangrene AL, TS, FD,
      GR, ME, TO, BB, IN, FI, KR, LA minst én gang.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, egen bedriftskontekst
      (varer/fabrikker/lån/sparing), egne formuleringer; ingen oppgavetekster eller
      sensorformuleringer gjengitt ordrett (skjelettets mønstereksempler er selv
      omskrivninger med nyskrevne tall og skal varieres videre); standardteoremer,
      standardformler og formelarkinnhold er faglig allemannseie.
- [ ] **BI-særtrekk synlig**: Del 0 sier eksplisitt vekttall (ikke poeng), A–F,
      finanskalkulator + formelark, samlet 5-timers eksamen (MET 29107 fra H2025, 6
      oppgaver / 28 likt vektede delpunkter), og «vis all utregning»-regelen.
- [ ] **Verifiser rendering**: prod-server + curl mot institusjonsside (Handelshøyskolen
      BI), bokforside, kapittel- og narrativ-ruter (200 + kapittelspesifikk streng),
      jf. `getChapterMeta`-lærdommen.

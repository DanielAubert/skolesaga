# Bokskjelett: KJ1020 / TKJ4103 Organisk kjemi grunnkurs (NTNU) — eksamensrettet lærebok

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


> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE eksamensarkivet —
> alt eksamensbelegg som trengs står i dette skjelettet, destillert fra
> `EKSAMENSANALYSE.md` (NTNU-arkivet 2001–2012: 17 avholdelser; **ni sett lest oppgave
> for oppgave**, åtte rene skann bekreftet samme mal). Alle oppgaver, strukturcase og
> molekyleksempler i boka skal være NYSKREVNE (se §6). Reaksjonsligninger, mekanismer,
> IUPAC-regler, Hückels regel og standard fagbegreper er ikke opphavsrettslig beskyttet
> og brukes fritt.
>
> **Kjemisk presisjon er kritisk.** Mekanismer, reagenser og produktprediksjoner
> forfatteren er usikker på merkes `(verifiser)` for fagfellesjekk i fase 6. Strukturer
> og mekanismer må kunne konstrueres aktivt uten oppslagsverk — dette er en eksamen der
> **alt tegnes fra hukommelsen**, med **kun molekylbyggesett** (ingen kalkulator, ingen
> pensumbok, ingen formelsamling, ingen reaksjonsoversikt).
>
> **Kildeforbehold (ufravikelig — settes i Del 0 og gjentas i øvingseksamenene):** I
> dette arkivet finnes i praksis **bare ett løsningsforslag** (mai 2003, håndskrevet
> skann), og 8 av 17 sett er rene skann uten tekstlag. **Sensorlogikken (§ sensorkrav)
> er derfor utledet** av oppgaveformuleringene («begrunn», «vis mekanismen»), av
> poengmarkeringene i margen og av det ene løsningsforslaget — ikke av en rekke
> sensorveiledninger. Der noe er sluttet indirekte, er det merket `(verifiser)`.
>
> **Emnehistorikk / etterfølger-profilering (verifisert mot NTNUs emnesider 2026-07-08
> — men `(verifiser)` beholdes fordi status kan endres):** KJ1020 (15 studiepoeng) er
> **avviklet fra og med høst 2025** og **erstattet av TKJ4103 «Organisk kjemi grunnkurs»
> (7,5 studiepoeng)**. TKJ4103s emneside lister KJ1020 (og KJ1021) som avviklede
> forgjengere med full studiepoengreduksjon. Faglig kjerne, eksamensform (4 t skriftlig,
> bokstavkarakter) og hjelpemiddelregime (**kun molekylbyggesett**) videreføres nesten
> uendret; hovedforskjellen er at studiepoengtallet er halvert (det tunge
> laboratoriekurset er skilt ut). **Boka bygges mot TKJ4103 som gjeldende etterfølger**,
> og KJ1020-eksamenstradisjonen som kartlegges er direkte overførbar. Kurs-id beholdes
> teknisk som `kj1020`, men tittelen profilerer begge koder. **Byggefasen bør skaffe og
> verifisere mot TKJ4103-sett (H2025→)** før boka meldes helt ferdig; alle frekvenser er
> merket «per 2001–2012-arkivet».

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `kj1020` (beholdes teknisk; emnet er avviklet, etterfølger TKJ4103) |
| Tittel | **KJ1020 / TKJ4103 Organisk kjemi grunnkurs (NTNU) — eksamensrettet** |
| Level | `'Høyskole'` |
| Institusjon (navigasjon) | NTNU. Visningsnavn i `institusjoner.ts`: «KJ1020 / TKJ4103 Organisk kjemi grunnkurs». |
| Arketype | **Regnefag — mønster-drill-variant** (`DNA-regnefag.md`). Se §2 «Arketypetilpasning»: makrostruktur + drill + øvingseksamener beholdes, men fasiten er **tegnet** (strukturer, krumme piler, stereokjemi) med **kvalitativ stabilitetsbegrunnelse**, ikke tallutledning med entydig sluttsvar. Nærmeste forbilde: `kjm1110` (UiO Organisk kjemi I) — mekanisme-/stereokjemi-apparatet gjenbrukes, men rebalanseres (se §2 «NTNU/UiO-arbeidsdeling»). |
| Antall kapitler | **36** (Del 0: 2 · temadeler 1–11: 30 · eksamenstrening Del 12: 4) |
| Estimert totaltid | **~1 985 min ≈ 33 timer** (per kapittel under) |
| Quiz totalt | **548** (krav ≥500) |
| Flashcards totalt | **712** (reaksjons-/mekanismerikt fag → høy tetthet; krav ≥500) |

**Pitch (ett avsnitt):** KJ1020/TKJ4103-eksamen er blant de mest forutsigbare og mest
*ferdighetsdrevne* settene i hele høyskolearkivet. 4 timers skriftlig skoleeksamen,
**kun molekylbyggesett** — ingen pensumbok, formelsamling, reaksjonsoversikt eller
kalkulator. **Alle oppgaver er konstruksjonssvar:** kandidaten *tegner* strukturformler,
*tegner* mekanismer med krumme piler (elektronparforskyvning), *navngir* forbindelser,
*tegner* stol- og Newman-konformasjoner og *begrunner* med ord. Det er **ikke** en
flervalgseksamen. Settet har en fast mal med **fem likt strukturerte oppgaver** (~100 p,
poeng per deloppgave), og **fem mekanisme-søyler pluss stereokjemi bærer nesten hvert
sett**: (1) **SN1/SN2/E1/E2** (100 %), (2) **elektrofil aromatisk substitusjon +
dirigering** (89 %), (3) **karbonylkondensasjon — aldol/Claisen–Schmidt** (89 %), (4)
**Grignard-syntese** (89 %), (5) **Diels–Alder / dien-kjemi** (89 %, norbornadien fast),
og (6) **stereokjemi** (kiralitet, R/S, meso, I/K/E/D — 89 %, den hyppigste feilkilden).
En felles **«pilegrammatikk»** for mekanismer og en felles **begrunnelsesmal**
(stabilitetsresonnement) går igjen på tvers av temaene. Boka er bygd baklengs fra det
sensor faktisk premierer: **korrekte strukturformler og krumme piler** (tegn, ikke
beskriv), **stabilitetsresonnement** som obligatorisk standardbegrunnelse, og
**fullstendighet i stereokjemi**. Spektroskopi er en fotnote her, ikke en bærebjelke —
og det finnes ingen fast regne-/utbyttedel.

**Kritisk plattformbetingelse (gjelder HELE boka) — tekstnotasjonsregelen:** Plattformen
kan **ikke tegne grafiske strukturformler eller mekanismepiler**. Faget er samtidig
gjennomgående visuelt. Boka løser dette med en **konsekvent tekstnotasjon** (etablert i
kap. 0.2 og brukt overalt):

- **Strukturer** angis med **SMILES** som maskinlesbar kanon, ALLTID ledsaget av
  **IUPAC-navn + kondensert formel + kort ordbeskrivelse** av skjelettet, slik at leseren
  kan rekonstruere tegningen. Eksempel: «2-brombutan, kondensert
  $\text{CH}_3\text{CHBrCH}_2\text{CH}_3$, SMILES `CC(Br)CC` — en firekarbons rettkjede
  med brom på C2».
- **Krumme piler** i mekanismer beskrives med et fast, nummerert tekstformat: hver pil
  angis som **«[opphav: elektronpar/binding] → [mål: atom/binding]»** med hva den *gjør*.
  Eksempel: «**Pil 1:** ensomt elektronpar på nukleofilen O → karbonylkarbonet C (ny
  C–O-binding). **Pil 2:** C=O-π-bindingen → oksygenet (blir ensomt par, negativ ladning)».
  Retning går ALLTID fra elektronrikt (nukleofil/binding) mot elektronfattig (elektrofil).
  Fiskekrok (ett elektron, radikaler — NBS/allylisk bromering) markeres eksplisitt.
- **Stereokjemi**: R/S, E/Z og cis/trans skrives inline; kile/strek (fram/bak) beskrives i
  ord («Br på kile mot betrakter, H på strek bort fra betrakter»). Newman- og
  stolkonformasjon beskrives systematisk (aksial/ekvatorial, gauche/anti, opp/ned). Der
  stereokjemi krever 3D-resonnement, henvises det eksplisitt til **molekylbyggesettet**.

Denne notasjonen er selve broen mellom en tegneeksamen og en tekstplattform, og skal
brukes uendret i alle 36 kapitler.

**Kritisk hjelpemiddel-regel (gjelder HELE boka):** Hjelpemidler = **molekylbyggesett og
INGENTING annet** (ikke engang kalkulator; 2003-settet tillot ikke engang byggesett).
Kandidaten får **ikke** pensumbok, reaksjonsoversikt eller formelsamling. Alle reaksjoner,
reagenser, mekanismer, navnsettingsregler og de få spektroskopiske tolkningsprinsippene
må sitte i hodet. Molekylbyggesettet er tillatt fordi stereokjemi (stolkonformasjon, R/S,
meso, cis/trans, I/K/E/D) vanskelig lar seg vurdere uten en fysisk 3D-modell — boka skal
derfor eksplisitt trene **modell-resonnement** i stereokapitlene. **Det finnes INGEN faste
vedleggstabeller** (ingen NMR-/IR-tabell, intet periodesystem oppgis rutinemessig). Dette
er den styrende rammen: boka må bygge **automatiserte hoderutiner**, ikke oppslagskunnskap.

**Kritisk notasjonsregel (emnets faste apparat):** Krumme piler = dobbelthodet pil (to
elektroner); fiskekrok = ett elektron (radikaler). **Stereodeskriptorer:** R/S (CIP), E/Z,
cis/trans, meso, racemat, enantiomer vs. diastereomer, Newman (gauche/anti), stol
(aksial/ekvatorial, A-verdi-tenkning). **Prediksjonsregler:** Markovnikov (H til mest
hydrogenrike C → mest stabilt kation), Zaitsev (mest substituerte alken ved E1/E2),
anti-addisjon ($\text{Br}_2$ via bromoniumion), Hückels **4n+2** for aromatisitet,
**o,p-/meta-dirigering** (aktiverende vs. deaktiverende substituenter), **kinetisk vs.
termodynamisk kontroll** (1,2- vs. 1,4-addisjon til dien). **Syre-base-verktøy:**
pKa-tenkning, resonans-/induktiv stabilisering av konjugert base, aromatisering av anion
(syklopentadien pKa ≈ 16). All matematikk/formler i LaTeX (`$...$`). **Ingen fast
tallregning** — faget er rendyrket kvalitativt (struktur, mekanisme, begrunnelse).

**Bevisst nedprioritert (begrunnes i Del 0):** **spektroskopi** kraftig nedtonet — **ingen
IR** (aldri testet i arkivet), **ingen strukturoppklaring** av UiO-typen, **MS bare én
gang** (m/z → identifikasjon), **¹H NMR** kun som splittingsmønster (n+1) og gjenkjenning
av tre trivielle bromalkan-spektre. **Ingen fast utbytte-/regnedel** (til forskjell fra
UiO). Disse skal IKKE bygges tungt på (ett kort kapittel, Del 10).

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regnefag-regelen): struktur/binding og
funksjonelle grupper før navnsetting; resonans/stabilitet og stereokjemi før de tunge
mekanismedelene; enkle mekanismer (SN/E, addisjon) før de sammensatte (Grignard,
kondensasjon, Diels–Alder); syntese binder alt sammen til slutt. Frekvensen styrer
*omfanget*, ikke rekkefølgen: de fem 89–100 %-mekanismesøylene og det tunge
stereokjemi-temaet får hver sin del med teori- **og** drillkapittel og høyest kvote;
lavfrekvent stoff (spektroskopi) får ett kompakt kapittel.

| Del | Tittel | Kap. | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart og håndverk | 2 | perfekt (meta) | Formen (tegneeksamen, **kun molekylbyggesett**, fem oppgaver, poeng per deloppgave), tekstnotasjonen, temafrekvensene, sensorkravene og kildeforbeholdet må etableres FØR fagstoffet. **Tegne-/begrunnelseshåndverket (kap. 0.2) er unikt kritisk** fordi plattformen ikke tegner og fordi «tegn + begrunn med stabilitet» er sensors gjennomgående krav. |
| 1 | Struktur, binding, funksjonelle grupper og nomenklatur | 3 | grunnlag/perfekt (IUPAC) | Hybridisering, strukturrepresentasjon (SMILES/skjelett) + funksjonell-gruppe-repertoar og **IUPAC-navnsetting** (67 %, sjanger C) er fundamentet for stereokjemi, mekanismer og syntese. |
| 2 | Resonans, stabilitet og syre-base | 2 | kunne (67 %) | Resonans (tegn alle strukturer) og syre-base (pKa, stabilitet av konjugert base, syklopentadien-anionet) — bærebjelkene i *begrunnelsesspråket* resten av boka bruker, og forutsetning for aromatisitet (Del 5) og enolatkjemi (Del 8). **Plassert tidlig som dokumentert avvik** (se §2 «Avvik»). |
| 3 | Stereokjemi | 4 | perfekt (89 %) | Det **konseptuelle tyngdepunktet** og den hyppigste feilkilden. Kiralitet/R-S, diastereomer/meso/E-Z/optisk aktivitet + **I/K/E/D-klassifisering** (NTNU-signatur), konformasjon↔E2, + drillkapittel. Molekylmodell-resonnement eksplisitt. |
| 4 | Nukleofil substitusjon og eliminasjon | 4 | perfekt (100 %) | **SN1/SN2/E1/E2 i 9/9 sett.** Karbokation+omleiring, SN1/SN2, E1/E2+Zaitsev+antiperiplanar, + drillkapittel (mekanisme + produkt + reaktivitetsrangering + allyl/benzyl-anomalien). Den ene 100 %-søylen. |
| 5 | Aromatisitet og elektrofil aromatisk substitusjon | 3 | perfekt (89 %) | EAS + dirigering i 8/9 sett. Aromatisitet/Hückel (grunnlag + syklopentadien-anion), EAS-mekanisme + dirigering, + dirigeringsdrill (to-substituent-samspill, halogenets særstilling). |
| 6 | Addisjon til alken og karbonyl-grunnkjemi | 3 | kunne (67 %) | Addisjon til alken (Markovnikov, anti-Br₂, hydratisering) + **karbokation-omleiring**; alkohol/eter (Williamson, hemiacetal/acetal), oksidasjon/reduksjon; karbonylgruppen + **enol/keto-tautomeri** (etylacetoacetat/FeCl₃). Forutsetning for Grignard og kondensasjon. |
| 7 | Grignard og organometallisk syntese | 2 | perfekt (89 %) | Grignard i 8/9 sett. Retrosyntese karbonyl + Grignard → alkohol, mekanisme, tørr eter/sur opparbeiding, **racemat-innsikt**, + drillkapittel. |
| 8 | Karbonylkondensasjon: aldol og Claisen–Schmidt | 3 | perfekt (89 %) | Kondensasjon i 8/9 sett. Enolat-danning + aldol, Claisen–Schmidt + intramolekylær, + drillkapittel. **Full mekanisme premieres** (enolat → angrep → dehydrering). |
| 9 | Dien-kjemi og Diels–Alder | 3 | perfekt (89 %) | Diels–Alder/dien i 8/9 sett; norbornadien fast. Konjugert dien + 1,2-/1,4-addisjon (kinetisk/termodynamisk), Diels–Alder + norbornadien + benzyn, + drillkapittel. |
| 10 | Spektroskopi (nedtonet) | 1 | kjenne (78 %/11 %) | **Bevisst kort.** ¹H NMR-splittingsmønster (n+1) + gjenkjenning av tre trivielle bromalkan-spektre (78 %), og enkel MS (m/z → identifikasjon, 11 %). Ingen IR, ingen strukturoppklaring. |
| 11 | Flertrinns-syntese og retrosyntese | 2 | kunne (67 %) | «Angi reagenser og mellomprodukter A–D» (67 %, sjanger K). Reaksjonsrepertoar (verktøykasse) + retrosyntese → synteseoppgave-drill. Delvis uttelling per trinn. |
| 12 | Eksamenstrening | 4 | perfekt (meta) | Sjangerspill (løsningsoppskrifter A–K) + **3 komplette øvingseksamener** (fem konstruksjonsoppgaver, kun molekylbyggesett, tegnet fasit + stabilitetsbegrunnelse). |

Rasjonale: de fem 89–100 %-mekanismesøylene (SN/E, EAS, kondensasjon, Grignard,
Diels–Alder) og det tunge stereokjemi-temaet får hver sin del med drillkapittel og høyest
kvote; mekanismehåndverket får gjennomgående «pilegrammatikk» fordi den premieres i seg
selv på tvers av temaene; spektroskopi får ett kompakt kapittel fordi den er marginal ved
NTNU. **Nesten hele bredden testes hvert sett** — prioriteringen styrer dybde og
drillmengde, ikke *om* et tema er med.

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart og håndverk |
| 1 | Struktur, binding, funksjonelle grupper og nomenklatur |
| 2 | Resonans, stabilitet og syre-base |
| 3 | Stereokjemi |
| 4 | Nukleofil substitusjon og eliminasjon |
| 5 | Aromatisitet og elektrofil aromatisk substitusjon |
| 6 | Addisjon til alken og karbonyl-grunnkjemi |
| 7 | Grignard og organometallisk syntese |
| 8 | Karbonylkondensasjon: aldol og Claisen–Schmidt |
| 9 | Dien-kjemi og Diels–Alder |
| 10 | Spektroskopi |
| 11 | Flertrinns-syntese og retrosyntese |
| 12 | Eksamenstrening |

### Sjangerkoder (fra analysen §3 — brukes i «Eksamensbelegg» under)

**A** Isomer-klassifisering I/K/E/D (identisk/konstitusjons-/enantiomer/diastereomer for
molekylpar; NTNU-signatur) · **B** Kiralitet og R/S (marker stereosentre, kiral/akiral/meso,
absolutt konfigurasjon; ofte i navngitt legemiddel) · **C** IUPAC-navnsetting (entydig navn
m/ stereodeskriptor; eller tegn fra navn) · **D** Stolkonformasjon (tegn to stolformer, mest
stabil, koble til E2-hastighet) · **E** SN/E-prediksjon med mekanisme (produkt + mekanisme
SN1/SN2/E1/E2; reaktivitetsrangering; allyl/benzyl-anomalien) · **F** Addisjon til alken/dien
(Markovnikov, anti-Br₂, hydratisering; 1,2-/1,4-addisjon med kinetisk/termodynamisk kontroll)
· **G** Diels–Alder/dien-syntese (tegn produkt / velg dien + dienofil; norbornadien; benzyn) ·
**H** Karbonylkondensasjon (full mekanisme aldol/Claisen–Schmidt: enolat → angrep →
dehydrering) · **I** Grignard-syntese (velg karbonyl + reagens → alkohol; mekanisme; tørr
eter/opparbeiding; racemat) · **J** Syre-base i organiske molekyler (marker sureste H, tegn
resonans for anionet, ranger surhet/basisitet; begrunn via stabilitet) · **K** Flertrinns-
syntese (angi reagenser + strukturer for mellomprodukter A–D). *(Peripher: **NMR** —
splittingsmønster / koble tre spektre til brometan/1-brompropan/2-brompropan; lavt vektet.)*

### Sensorkrav (fra analysen §4 — etableres i Del 0, refereres i hvert kapittel)

> **Kildeforbehold:** utledet av oppgaveformuleringene, marginpoengene og det ene
> løsningsforslaget (2003), ikke av en rekke sensorveiledninger. Sentrale sensorpremisser
> er derfor merket `(verifiser)` der de er sluttet indirekte.

1. **Tegn, ikke beskriv.** Poeng ligger i korrekte strukturformler, korrekte krumme piler
   og korrekte intermediater — ikke i en ordforklaring alene. Det håndskrevne 2003-fasitet
   består av tegnede strukturer + kortfattet begrunnelse. (I boka: alltid SMILES +
   struktur + mekanisme i tekstnotasjonen fra kap. 0.2.)
2. **Begrunnelse er obligatorisk.** «Forklar hvorfor / begrunn / grunngi» går igjen i nesten
   hver deloppgave. Riktig valg **uten begrunnelse gir sterkt redusert uttelling** (egen
   warning i hvert kapittel). **Standardbegrunnelsen er stabilitetsresonnement:** «X
   foretrekkes fordi det korresponderende karbokationet / anionet / alkenet er mest
   substituert / resonansstabilisert / minst sterisk hindret».
3. **Poeng per deloppgave, jevnt fordelt `(verifiser)`.** Marginmarkeringene viser at intet
   enkeltpunkt bærer mye alene — helheten teller. Det lønner seg å svare på alt framfor å
   perfeksjonere ett punkt.
4. **«Entydig» IUPAC-navn:** stereodeskriptorer (R/S, E/Z, cis/trans) og lokanter må være
   med og korrekte.
5. **Krumme piler med korrekt retning og opphav.** Pilen starter ved et elektronpar/en
   binding og peker mot det elektrofile senteret. I syrekatalyserte mekanismer skal
   katalysatoren **gjendannes**; i kondensasjoner skal hele forløpet (enolat → angrep →
   dehydrering) være med.
6. **Fullstendighet i stereokjemi:** ved «tegn alle stereoisomerer» eller «tegn begge
   alkener» trekkes det for hver manglende eller feilaktig duplisert isomer; **meso-former
   må ikke glemmes**. Riktig I/K/E/D krever presis skjelning mellom enantiomer og
   diastereomer.
7. **Delvis uttelling i synteser `(verifiser)`.** Korrekte enkelttrinn premieres selv om hele
   ruten ikke er komplett; men reagensene må være reelle pensumreaksjoner.
8. **Konformasjon–reaktivitet skal kobles.** Å tegne riktig stolform teller lite hvis
   konklusjonen om stabilitet/E2-hastighet mangler.

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

**F1** **Enantiomer vs. diastereomer forvekslet** og ufullstendig stereoisomer-telling
(glemmer meso, teller enantiomerpar dobbelt, ser ikke at to tegninger er samme molekyl).
**Den vanligste poengtapskilden.** · **F2** **Feil pileretning** — piler tegnet fra
elektrofil mot nukleofil (motsatt), eller «flytting av atomer» i stedet for elektronpar. ·
**F3** **Feil EAS-dirigering** — forveksler aktiverende/deaktiverende med o,p-/meta-dirigering
(**halogener er deaktiverende MEN o,p-dirigerende**); håndterer to-substituent-samspill feil.
· **F4** **Svar uten begrunnelse** på «mest sur/stabil/reaktiv» — riktig valg, halv eller null
uttelling. · **F5** **Glemmer karbokation-omleiring** ved HX-addisjon/dehydrering der et
hydrid-/metylskift gir et mer stabilt kation → feil hovedprodukt. · **F6** **Blander kinetisk
og termodynamisk produkt** i 1,2-/1,4-addisjonen til dien, eller får ikke fram hvorfor
1,4-produktet er mest stabilt (mest substituert alken). · **F7** **Ufullstendig
kondensasjonsmekanisme** — hopper over enolat-dannelsen eller dehydreringen til det
α,β-umettede produktet. · **F8** **Konformasjon–E2-koblingen** — overser at E2 krever
**antiperiplanar** (aksial) utgående gruppe → feil konklusjon om hastighet/produkt. · **F9**
**Ikke-basisk/ikke-surt delokalisert elektronpar** — regner amid-N eller aromatbundet
elektronpar som basisk/reaktivt selv om det er delokalisert. · **F10** **Manglende
stereodeskriptor** i IUPAC-navn (svaret er ikke «entydig»), og **feil karbonyl/Grignard-
kombinasjon** (glemmer at et nytt stereosenter dannet ved angrep på et plant karbonyl gir
racemat).

### Arketypetilpasning (dokumenterte hybridvalg og avvik)

1. **Regnefag i mønster-drill-variant — ikke tallregnende.** DNA-regnefag forutsetter
   regne-/utledningsoppgaver med entydige tallsvar. KJ1020 har **null fast tallregning**;
   alle fem oppgaver er **konstruksjonssvar** (tegn struktur/mekanisme/stereokjemi +
   begrunn). Fra DNA-regnefag beholdes likevel: makrostrukturen (Del 0 eksamenskart →
   temadeler etter avhengighet → eksamenstrening), øvingseksamenene, **drillkapittel for
   hver bærebjelke-sjanger**, og frekvensstyrt kapittelvekting. Den viktigste tilpasningen
   er at fasiten er *tegnet* (strukturer, krumme piler, stolkonformasjoner) med **kvalitativ
   stabilitetsbegrunnelse** framfor et tallutledet sluttsvar — men drill-logikken er
   identisk («oppgavemønstre gjentas år etter år → boka drilles mot nettopp disse»). Boka
   bruker **to kapittel-DNA-varianter** (under): **konstruksjons-/mekanismekapittel-DNA (A)**
   for teorikapitlene, og **drill-DNA (B)** for drillkapitlene.
2. **«Symbol- og formelliste» → «Reaksjons- og mekanismeliste».** README-kravet om en
   `collapsible` rett etter Forkunnskaper omtolkes for et konstruksjonsfag: hvert delkapittel
   får en `collapsible` **«Reaksjons- og mekanismeliste»** som samler **reaksjonstypene/
   reagensene** (reaksjon ↔ betingelse ↔ produkt), **mekanismestegene** og
   **prediksjons-/stereoreglene** kapitlet krever utenat — pluss de få reelle relasjonene
   (Hückel 4n+2, n+1-regel). Fordi det finnes **ingen vedleggstabeller**, markeres alt som
   «må sitte».
3. **Flashcards tungt vektet og reaksjonsrike (712).** Fordi eksamen er uten oppslagsverk og
   premierer reaksjoner, reagenser, mekanismer og stereoregler, er faget svært
   flashcard-egnet: **reaksjon↔betingelse↔produkt**-kort (alken + $\text{Br}_2$ →
   trans-vicinalt dibromid, anti; keton + RMgX → 3° alkohol), **mekanismesteg**-kort (SN2 →
   ryggangrep/inversjon; aldol → enolat/angrep/dehydrering), **stereobegrep**-kort (meso =
   internt speilplan, akiral; I/K/E/D-kriteriene), **dirigerings**-kort (aktiverende o,p vs.
   deaktiverende meta; halogen deaktiverende men o,p), **dien/dienofil**-kort (norbornadien
   fra syklopentadien + vinylklorid), og **prediksjonsregel**-kort (Markovnikov/Zaitsev/
   kinetisk-termodynamisk). **Quiz-profilen** driller nabobegrep-distraktorer (SN1/SN2, E1/E2,
   enantiomer/diastereomer, aromatisk/antiaromatisk, aktiverende/deaktiverende vs. o,p/meta,
   Markovnikov/anti, 1,2-/1,4, kinetisk/termodynamisk).
4. **Drillkapitler for bærebjelke-sjangrene (i tråd med DNA-regnefag).** Stereokjemi (3.4),
   SN/E (4.4), EAS-dirigering (5.3), Grignard (7.2), kondensasjon (8.3), dien (9.3) og
   syntese (11.2) får hvert sitt **drillkapittel** rett etter teorien, fordi disse er de mest
   resirkulerte og mekaniserbare sjangrene.
5. **Autentiske legemiddelmolekyler som gjennomgående innramming (NTNU-signatur).** Boka
   rammer eksempler inn i virkelige legemidler/naturstoffer (Naproxen, Ibuprofen,
   Paracetamol, Tamoxifen, atenolol, tyroksin, muskarin) slik NTNU selv gjør — men **selve
   oppgavene er nyskrevne** (endre substituenter/posisjoner). Kjemien er standard grunnkurs;
   innpakningen er farmasøytisk/biokjemisk.
6. **NTNU/UiO-arbeidsdeling (rebalansering mot kjm1110).** Mekanisme- og stereokjemi-
   apparatet gjenbrukes fra kjm1110-linjen, men rebalanseres: **(i)** spektroskopi nedtones
   kraftig — **dropp IR og strukturoppklaring helt**, behold bare ett kort NMR-/MS-kapittel
   (splittingsmønster + spektergjenkjenning + m/z); **(ii)** **sløyf utbytte-/regnekapitlet**
   (ingen fast regnesjanger ved NTNU); **(iii)** **styrk Diels–Alder/dien, aldol/Claisen–
   Schmidt og EAS-dirigering** til fulle deler med drillkapittel; **(iv)** bygg **eget stoff
   om I/K/E/D-klassifisering** (NTNU-signatur) i 3.2/3.4; **(v)** bruk autentiske
   legemiddelmolekyler. Der kjm1110-boka driller «tolk spektret», driller KJ1020-boka «tegn
   mekanismen og begrunn med stabilitet».
7. **Ingen oppdiktede reaksjoner eller mekanismer.** Usikre reagenser, produktprediksjoner
   og mekanismedetaljer merkes `(verifiser)`. Sensorpremisser sluttet indirekte fra det ene
   løsningsforslaget merkes `(verifiser)` (kildeforbeholdet).

**Avvik fra prompt-ordningen (dokumentert):** Prompt-makrostrukturen nevner ikke en egen
resonans/syre-base-del. Den er lagt inn som **Del 2** (mellom nomenklatur og stereokjemi)
fordi (a) **stabilitetsresonnement er sensors kjernekriterium** (sensorkrav 2) og bør
formaliseres tidlig, (b) resonans er en forutsetning for aromatisitet (Del 5), enolatkjemi
(Del 8) og allylkation-stabilitet (Del 9), og (c) syre-base er en genuin 67 %-sjanger (J).
Alt annet følger prompt-ordningen. Addisjon til alken (Priority 2, 67 %) er lagt i Del 6
sammen med karbonyl-grunnkjemi (prompt: «alkohol/eter/karbonyl-grunnkjemi»), mens
1,2-/1,4-addisjon til **dien** ligger i Del 9 der den hører faglig hjemme (allylkation).

### Kapittel-DNA A — konstruksjons-/mekanismekapittel (flertallet av kapitlene)

Obligatorisk blokk-rekkefølge (plattformens blokktyper):

1. `tip` **Eksamensvinkel** — frekvens/vekt, hvilke sjangre (A–K) temaet inngår i, og hva
   sensor ser etter. Fylles fra skjelettets Eksamensbelegg — forfatteren finner IKKE på
   frekvenstall.
2. `text` **Forkunnskaper** — kapitler i boka det bygger på + kryssbok-lenker (README-
   leserkrav), etterfulgt av `collapsible` **Reaksjons- og mekanismeliste** (reaksjon ↔
   betingelse ↔ produkt, mekanismesteg, prediksjons-/stereoregler — alt «må sitte», ingen
   vedleggstabell).
3. `text` **Oversikt/motivasjon** — kort (maks 2–3 avsnitt): hva temaet tester, når det
   opptrer. Gjerne rammet i et autentisk legemiddelmolekyl. Ikke et dannelsesfag.
4. `definition` **Faktakontrakt** — kjernebegreper, reagensroller, regler i emnets
   terminologi. **Toppnivå med `title` — dette er flashcard-kilden.**
5. `theorem`/`text` **Reaksjons-/mekanismekontrakt** — de sentrale mekanismene i tekstnotasjon
   (nummererte krumme piler; intermediater; regenerert katalysator), eller
   **konstruksjonskontrakt** (strukturer/isomerer/resonansstrukturer som skal kunne tegnes).
6. `text` **Tegne-/løsningsprosedyre** — algoritmisk «slik tegner/løser du» som nummererte
   trinn (ett trinn = ett sensor-moment), avsluttet med **begrunnelsesmalen**.
7. `warning` **Typiske feil** — feilkodene (F1–F10) som gjelder temaet; inkl. eksplisitt
   «riktig svar uten begrunnelse = sterkt redusert uttelling» (sensorkrav 2, F4).
8. `example` × 2–4 **Modellsvar** — første enkelt, siste på **eksamensnivå** og modellert på
   en reell sjanger (A–K). Løsningen skrives slik en toppbesvarelse ser ut: SMILES + struktur
   + nummererte piler + eksplisitt stabilitetsbegrunnelse. Bruk gjerne
   legemiddel-innramming.
9. `exercise` × 6–12 — stigende: 2–3 innøving (lett), 2–4 standard (middels), 2–4
   eksamensklone (vanskelig, samme sjanger/vekt, nyskrevne molekyler). Alle med `solution`
   (tegnet i tekstnotasjon) + `hints`. Hver oppgave merket med sjangerkode og hva sensor
   premierer.
10. `collapsible` **Repetisjon** — 4–6 korte kontrollpunkter (reaksjoner, regler, begreper)
    fra kapitlet og forutgående kapitler det bygger på.

### Kapittel-DNA B — drillkapittel (3.4/4.4/5.3/7.2/8.3/9.3/11.2/12.1)

1. `tip` **Eksamensvinkel** — hvilke varianter av sjangeren som har forekommet (gjenganger-
   molekylene).
2. `text` **Forkunnskaper** + `collapsible` **Reaksjons- og mekanismeliste** (sjangerens
   reaksjoner/mekanismesteg i kortform).
3. `text` **Løsningsoppskrift** — algoritmisk fremgangsmåte for sjangeren (nummererte trinn),
   avsluttet med begrunnelsesmalen.
4. `example` **Gjennomtegnet eksamenscase** med sensor-margnotater om hva som gir uttelling
   ved hvert steg (tegnet i tekstnotasjon; racemat-/meso-/dirigerings-kommentar der relevant).
5. `warning` **Typiske feil** (feilkodene for sjangeren).
6. `exercise` × 8–15 varianter på eksamensnivå, alle med `solution` + `hints`.

Eksamenstreningskapitlene (Del 12) har egne oppsett — se §3 og §4.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = frekvens/vekt + sjangerkoder (A–K) + prioritetsklasse
> (perfekt/kunne/kjenne/grunnlag/meta), alt «per 2001–2012-arkivet». **Faktakontrakt** =
> begreper/regler som SKAL med (flashcard-kilden). **Reaksjons-/mekanismekontrakt** =
> mekanismene kapitlet krever aktivt, i tekstnotasjon. **Konstruksjonskontrakt** =
> strukturer/isomerer som skal kunne tegnes. **Kvote** = quiz/flashcards. Kryssbok-lenkene
> peker på eksisterende kjemi1-/kjemi2-kapitler (`(verifiser lenke)` der usikker).

### Del 0 — Eksamenskart og håndverk *(prioritet: PERFEKT (meta))*

#### Kapittel 0.1: Eksamenskartet — slik testes KJ1020 / TKJ4103
**id:** `kj1020-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Eksamensformen (tegneeksamen, **kun molekylbyggesett**, fem likt
  strukturerte oppgaver, poeng per deloppgave), de fem mekanisme-søylene + stereokjemi,
  temafrekvensene, sensorkravene, kildeforbeholdet og etterfølger-profileringen (KJ1020 →
  TKJ4103) — verktøyet som styrer hele boka.
- **Eksamensbelegg:** Metakapittel (hele arkivet 2001–2012). Skal formidle: (a) **formen** —
  4 t skriftlig skoleeksamen (6 t i 2003, 5 t 2009–2010), **fem likt vektede
  konstruksjonsoppgaver** (~100 p, poeng per deloppgave), ALT tegnes/forklares (ingen
  flervalg), hjelpemidler = **kun molekylbyggesett**; (b) **de fem 89–100 %-søylene** +
  stereokjemi: SN/E (100 %), EAS+dirigering (89 %), aldol/Claisen–Schmidt (89 %), Grignard
  (89 %), Diels–Alder/dien (89 %), stereokjemi kiralitet/R-S/I-K-E-D (89 %); (c) **temafrekvens-
  tabellen** (av 9 nærleste sett) — se §2/analysen §2; (d) **sensorkravene** (§2); (e)
  **kildeforbeholdet** — bare ett løsningsforslag (2003), 8/17 rene skann → sensorlogikken
  utledet `(verifiser)`; (f) **tekstnotasjonen** — SMILES + struktur + nummererte krumme piler
  (henvis til 0.2); (g) **etterfølger-profileringen** — KJ1020 avviklet H2025, erstattet av
  TKJ4103 (7,5 sp) `(verifiser)`, kalibreringen bygger på 2001–2012-arkivet, byggefasen bør
  verifisere mot TKJ4103-sett. Prioritet: perfekt (meta).
- **Innholdskontrakt:** Sjangerkatalogen A–K som studentens sjekkliste med frekvens per
  sjanger; prognosen for neste sett (nesten sikkert: én SN/E-oppgave med mekanisme, én EAS+
  dirigering, én kondensasjon (full mekanisme), én Grignard, én Diels–Alder/dien, og minst én
  stereokjemi-/I-K-E-D-oppgave). **Gjengangermolekylene** nevnes eksplisitt som drillmål:
  3-bromsykloheksen + benzylbromid (allyl/benzyl-SN1), norbornadien fra syklopentadien +
  vinylklorid (Diels–Alder), etylacetoacetat + FeCl₃ (enol), pseudoionon via Claisen–Schmidt,
  tetrahydrofuran fra 4-klor-1-butanol (intramolekylær Williamson), 1-fenyl-1-propanol
  (Grignard), (R)-3-bromsykloheksen + Br₂ (optisk aktiv/inaktiv). Ingen forkunnskapsblokk
  (metakapittel).
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt en 4-timers
  mal med fem oppgaver — sett opp tidsbudsjett og rekkefølge» og «avgjør av en oppgavetekst
  om den krever mekanisme (krumme piler) eller bare produkt».
- **Typiske feil:** Metafeilene: beskrive i stedet for å tegne (sensorkrav 1); droppe
  begrunnelsen (sensorkrav 2, F4); tro at arkivfrekvensene er ferske (les etterfølger-
  forbeholdet — bygg mot TKJ4103); vente kalkulator/tabeller (finnes ikke).
- **Kvote:** 10 quiz / 10 flashcards (formfakta, søylene, temafrekvens, sensorkravene,
  sjangerkodene, kildeforbeholdet, KJ1020→TKJ4103).

#### Kapittel 0.2: Tegne- og begrunnelseshåndverket
**id:** `kj1020-0-2` · **number:** 0.2 · **estimatedMinutes:** 55 · **prerequisites:** `kj1020-0-1`

- **Kapitteltype:** håndverkskapittel (meta — plattformnotasjon + begrunnelsesspråk).
- **Description:** De to ferdighetene som gir poeng på hver eneste oppgave: å *tegne* (her:
  skrive strukturer og krumme piler i bokas faste tekstnotasjon) og å *begrunne* med
  **stabilitetsresonnement**. Kapitlet etablerer notasjonen resten av boka bruker.
- **Eksamensbelegg:** Gjennomgående (sensorkrav 1, 2, 5 på tvers av alle sjangre A–K).
  Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 0.1; [Kovalent binding](/bok/kjemi1/kjemi1-3-2)
  `(verifiser lenke)`, [Introduksjon til organisk kjemi](/bok/kjemi1/kjemi1-10-1)
  `(verifiser lenke)`. `collapsible` **Reaksjons- og mekanismeliste:** notasjonssymbolene
  (krum pil = 2 e⁻, fiskekrok = 1 e⁻; δ+/δ−; formelle ladninger; kile/strek).
- **Faktakontrakt (flashcard-kilde):** **SMILES-grunnregler** (kjeder, forgrening med
  parentes, ringlukking med tall, dobbel/trippel `=`/`#`); **kondensert vs. skjelett vs.
  Lewis**; **krum pil** (dobbelthodet, fra elektronpar/binding mot elektrofilt senter) vs.
  **fiskekrok** (radikal); **formell ladning** $= \text{gruppeelektroner} - \text{ensomme} -
  \tfrac{1}{2}\text{bindingselektroner}$; **stabilitetsresonnementets tre standardgrunner:**
  (i) resonansstabilisering (delokalisert ladning), (ii) mest substituert / hyperkonjugasjon
  (karbokation-/alken-stabilitet), (iii) minst sterisk hindret / induktiv effekt.
  **Begrunnelsesmalen:** «X foretrekkes fordi [korresponderende base/kation/anion/alken] er
  mer stabil, fordi [resonans/substitusjon/sterikk/induksjon]».
- **Reaksjons-/mekanismekontrakt (bokas tekstnotasjon — normativ):** vis det faste
  pileformatet på ett enkelt eksempel (protonering av en alkohol): **Pil 1:** ensomt par på O
  → H⁺ (ny O–H-binding). Etabler at hver mekanisme i boka skrives som en nummerert
  pilesekvens med intermediater og til slutt regenerert katalysator.
- **Tegne-/løsningsprosedyre:** (1) skriv struktur i SMILES + kondensert + ordbeskrivelse;
  (2) marker funksjonelle grupper og ladninger; (3) for mekanisme: nummerer pilene fra
  elektronrikt mot elektronfattig, med intermediater; (4) skriv stabilitetsbegrunnelsen med
  malen.
- **Typiske feil:** F2 (pileretning), F4 (svar uten begrunnelse); i tillegg: skrive en
  struktur uten å sjekke valens (fire bindinger på C), utelate ensomme par som deltar.
- **Modellsvar:** «Skriv 2-metylpropan-2-ol i SMILES og kondensert form, og forklar hvorfor
  det tertiære karbokationet fra denne alkoholen er mer stabilt enn et primært»; «Tegn (i
  tekstnotasjon) de to pilene i protonering av vann og angi opphav/mål».
- **Kvote:** 12 quiz / 16 flashcards.

**Prøve-kvote Del 0:** ingen egen prøve (dekkes av øvingseksamenene i Del 12).

### Del 1 — Struktur, binding, funksjonelle grupper og nomenklatur *(prioritet: GRUNNLAG / PERFEKT for IUPAC)*

#### Kapittel 1.1: Hybridisering, binding og molekylgeometri
**id:** `kj1020-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** `kj1020-0-2`

- **Kapitteltype:** konstruksjonskapittel (grunnlag).
- **Description:** sp³/sp²/sp-hybridisering, σ-/π-binding, bindingsvinkler og -lengder, og
  hvordan hybridiseringen styrer geometri, planaritet (aromatisitet) og surhet (sp-CH mer
  sur) — fundamentet for stereokjemi og aromatisitet.
- **Eksamensbelegg:** Ikke egen oppgave, men forutsetning for aromatisitet (planaritet,
  sp²-p-system), stereokjemi (sp³ = tetraedrisk stereosenter) og syre-base (s-karakter).
  Inngår i A, B, J. Prioritet: grunnlag.
- **Forkunnskaper/kryssbok:** kap. 0.2; [Atomets oppbygging](/bok/kjemi1/kjemi1-1-1)
  `(verifiser lenke)`, [Kovalent binding](/bok/kjemi1/kjemi1-3-2) `(verifiser lenke)`.
  `collapsible` **Reaksjons- og mekanismeliste:** hybridiseringsapparatet (sp³ 109,5°, sp²
  120°, sp 180°; σ vs. π; s-karakter ↔ surhet).
- **Faktakontrakt (flashcard-kilde):** **sp³** (4 σ, tetraedrisk, 109,5°), **sp²** (3 σ + 1 π,
  trigonal plan, 120°), **sp** (2 σ + 2 π, lineær, 180°); σ- vs. π-binding (fri rotasjon om σ,
  låst om π → grunnlag for E/Z); bindingslengde-trend (C≡C < C=C < C–C); **s-karakter** øker →
  sterkere elektrontiltrekning (sp-C–H mest sur); p-orbital vinkelrett på sp²-planet (grunnlag
  for konjugasjon/aromatisitet).
- **Konstruksjonskontrakt:** angi hybridisering til hvert C/N/O i en gitt struktur; forutsi
  geometri og bindingsvinkler; identifiser plane vs. ikke-plane deler.
- **Typiske feil:** blande hybridisering med geometri; glemme π-bindingens rotasjonssperre
  (kobles til E/Z i 3.2); regne ensomme par feil ved geometri.
- **Modellsvar:** «Angi hybridisering og geometri rundt hvert karbon i propenal (akrolein), og
  forklar hvorfor molekylet er plant» (kobler til konjugasjon).
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 1.2: Strukturrepresentasjon og funksjonelle grupper
**id:** `kj1020-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `kj1020-1-1`

- **Kapitteltype:** konstruksjonskapittel (grunnlag → perfekt for gruppegjenkjenning).
- **Description:** Å oversette mellom Lewis-, kondensert-, skjelett- og SMILES-form, og hele
  repertoaret av funksjonelle grupper (struktur, SMILES-mønster, prioritet for suffiks) —
  verktøyet bak navnsetting, mekanismer og syntese.
- **Eksamensbelegg:** Forutsetning for IUPAC (C), syre-base (J) og syntese (K) — man må
  kjenne gruppene for å navngi og planlegge. Prioritet: perfekt (grunnlag for topptemaene).
  Sjangre: C, J, K.
- **Forkunnskaper/kryssbok:** kap. 1.1; [Funksjonelle grupper](/bok/kjemi1/kjemi1-10-2)
  `(verifiser lenke)`, [Organiske forbindelser og nomenklatur](/bok/kjemi2/kjemi2-8-1)
  `(verifiser lenke)`. `collapsible` **Reaksjons- og mekanismeliste:** gruppe → SMILES-mønster
  → prioritet; representasjonskonverteringen.
- **Faktakontrakt (flashcard-kilde — stor):** alle sentrale grupper med struktur og SMILES:
  **alkan/alken/alkyn**, **aromat**, **halogenid**, **alkohol** (–OH), **eter** (–O–),
  **aldehyd** (–CHO), **keton** (C=O), **karboksylsyre** (–COOH), **ester** (–COO–), **amid**
  (–CONH–), **amin** (–NH₂), **nitril** (–C≡N); **prioritetsrekkefølge for hovedgruppe**
  (karboksylsyre > ester > amid > nitril > aldehyd > keton > alkohol > amin > alken/alkyn) —
  bestemmer suffiks; regler for kondensert ↔ skjelett ↔ SMILES; underforståtte H på karbon i
  skjelettformel. **Grad av umettethet (DoU)** nevnes kort som hjelpemiddel
  $= \dfrac{2C+2+N-H-X}{2}$ (bør kjenne til — ikke fast eksamenstema ved NTNU).
- **Konstruksjonskontrakt:** identifiser alle funksjonelle grupper i en kompleks struktur
  (gjerne et legemiddel); ranger dem etter IUPAC-prioritet; konverter struktur fram og tilbake
  mellom formene.
- **Typiske feil:** blande aldehyd/keton; glemme at karboksylsyre slår ester i prioritet;
  forveksle amid- og amin-N (kobles til F9).
- **Modellsvar:** «Identifiser alle funksjonelle grupper i et paracetamol-lignende molekyl og
  angi hvilken som ville bestemt suffikset i IUPAC-navnet».
- **Kvote:** 16 quiz / 24 flashcards.

#### Kapittel 1.3: IUPAC-navnsetting
**id:** `kj1020-1-3` · **number:** 1.3 · **estimatedMinutes:** 60 · **prerequisites:** `kj1020-1-2`

- **Kapitteltype:** konstruksjonskapittel (perfekt).
- **Description:** Kjernealgoritmen for IUPAC-navn (hovedkjede, lokanter, substituenter,
  suffiks) og omvendt (tegn fra navn), med markering av at **stereodeskriptorer** (R/S, E/Z,
  cis/trans) legges til etter Del 3 for et **entydig** navn.
- **Eksamensbelegg:** Sjanger C (6/9, 67 %): «gi entydig navn» eller «tegn fra navn (f.eks.
  (E)-2-penten)». Manglende stereodeskriptor/feil lokant trekker (F10). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.2; [Organiske forbindelser og nomenklatur](/bok/kjemi2/kjemi2-8-1)
  `(verifiser lenke)`. `collapsible` **Reaksjons- og mekanismeliste:** navnsettingsalgoritmen
  som nummererte regler + stamnavn C1–C10 + vanlige substituentnavn.
- **Faktakontrakt (flashcard-kilde):** stamnavn met/et/prop/but/pent/heks/hept/okt/non/dek;
  **regel 1** lengste kjede med høyest-prioritets gruppe = hovedkjede; **regel 2** nummerer
  for lavest lokantsett (hovedgruppen først); **regel 3** substituenter alfabetiseres (di/tri
  teller ikke); **regel 4** suffiks fra høyest-prioritets gruppe (–syre, –oat, –amid, –nitril,
  –al, –on, –ol, –amin), resten som prefiks (okso-, hydroksy-, amino-, alkoksy-);
  sykloalkan-prefiks; benzenavledede navn (fenyl, benzyl); en/yn-endelser med lokant;
  stereodeskriptor-plassering (legges til i Del 3).
- **Tegne-/løsningsprosedyre (algoritmen):** (1) finn høyest-prioritets funksjonell gruppe;
  (2) velg lengste kjede som inneholder den; (3) nummerer for lavest lokantsett; (4) navngi og
  lokant-merk substituenter, alfabetiser; (5) sett suffiks; (6) legg til stereodeskriptor
  (etter Del 3); (7) sett sammen.
- **Typiske feil:** velge feil hovedkjede; nummerere fra feil ende; alfabetisere feil; glemme
  lokant på suffiks; **F10** (manglende stereodeskriptor → ikke «entydig»).
- **Modellsvar:** «Navngi $\text{CH}_3\text{CH(CH}_3\text{)CH}_2\text{CH}_2\text{OH}$ (SMILES
  `CC(C)CCO`) trinn for trinn» (→ 4-metylpentan-1-ol); «Tegn (Z)-1-syklopropyl-1-penten fra
  navnet».
- **Kvote:** 16 quiz / 24 flashcards.

**Prøve-kvote Del 1:** 4 prøver (1.A hybridisering/geometri · 1.B strukturrepresentasjon +
funksjonelle grupper + prioritet · 1.C IUPAC-navnsetting (begge veier) · 1.D samlet
grunnlagsprøve på eksamensnivå).

### Del 2 — Resonans, stabilitet og syre-base *(prioritet: KUNNE — 67 %, kjernebegrunnelse)*

#### Kapittel 2.1: Resonans og stabilitetsresonnement
**id:** `kj1020-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `kj1020-1-2`

- **Kapitteltype:** konstruksjonskapittel (kunne → konseptuelt perfekt; bærer begrunnelses-
  språket, aromatisitet og enolatkjemi).
- **Description:** Å tegne alle gyldige resonansstrukturer, tildele formelle ladninger og
  rangere bidrag — grunnlaget for stabilitetsresonnement (sensors standardbegrunnelse),
  aromatisitet og syre-base.
- **Eksamensbelegg:** Underbygger de fleste begrunnelser (sensorkrav 2); resonans/aromatisitet
  4/9. «Tegn resonansstrukturer for anionet» er fast delkrav i J. Prioritet: kunne →
  konseptuelt perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.2, kap. 0.2 (krum pil, formell ladning);
  [Kovalent binding](/bok/kjemi1/kjemi1-3-2) `(verifiser lenke)`. `collapsible` **Reaksjons-
  og mekanismeliste:** resonanspil (dobbelthodet ↔), regler for gyldige strukturer,
  bidragsrangering.
- **Faktakontrakt (flashcard-kilde):** **resonans** (én forbindelse, flere Lewis-bilder;
  ikke likevekt); regler: kun elektroner flyttes (π/ensomme par), aldri atomer; bevar totalt
  antall elektroner; oktett respekteres på 2.-periode-atomer; **bidragsrangering** (flere
  bindinger + full oktett + minst ladningsseparasjon + negativ ladning på mest elektronegativt
  atom = større bidrag); **delokalisering stabiliserer**; allyl-/benzyl-kation og -anion
  resonansstabilisert (grunnlag for SN1-anomalien, Del 4).
- **Reaksjons-/mekanismekontrakt (tekstnotasjon):** vis resonansflytting med nummererte piler
  (karboksylat: **Pil:** C=O-π → O; **Pil:** C–O⁻ ensomt par → C=O — de to O blir ekvivalente).
  Etabler at «resonansstabilisert» = spredt ladning.
- **Tegne-/løsningsprosedyre:** (1) finn flyttbare elektroner (π, ensomme par nær π/ladning);
  (2) flytt med piler mot elektronfattig senter; (3) tegn ny struktur, sett formelle ladninger;
  (4) ranger bidrag; (5) konkluder om (av)stabilisering.
- **Typiske feil:** flytte atomer (F2-slektning); bryte oktett; kalle resonans en likevekt;
  glemme bidragsrangering; **F4** (bruke resonans uten å konkludere om stabilitet).
- **Modellsvar:** «Tegn resonansstrukturene til allylkationet og forklar hvorfor det er mer
  stabilt enn et vanlig primært karbokation» (kobler til SN1-anomalien 4.2).
- **Kvote:** 16 quiz / 24 flashcards.

#### Kapittel 2.2: Syre-base i organiske molekyler
**id:** `kj1020-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `kj1020-2-1`

- **Kapitteltype:** konstruksjonskapittel (kunne).
- **Description:** Å markere de sureste/mest basiske H, rangere surhet/basisitet og **alltid
  begrunne via stabiliteten til den korresponderende basen/syren** (resonans, induksjon,
  aromatisering, hybridisering) — sensors standardbegrunnelse i praksis.
- **Eksamensbelegg:** Sjanger J (6/9, 67 %): «marker sureste H, tegn resonans for anionet,
  ranger surhet, begrunn». Svar uten begrunnelse er F4. Syklopentadien (aromatisk anion,
  pKa ≈ 16) og substituenteffekter (fenol vs. sykloheksanol; anilin vs. sykloheksylamin) er
  faste. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 2.1 (resonans), kap. 1.1 (s-karakter);
  [Syrer og baser - definisjoner](/bok/kjemi1/kjemi1-9-1) `(verifiser lenke)`,
  [Svake syrer og baser](/bok/kjemi1/kjemi1-9-3) `(verifiser lenke)`. `collapsible`
  **Reaksjons- og mekanismeliste:** pKa-begrepet, de fire stabiliseringsfaktorene, konjugert
  syre/base.
- **Faktakontrakt (flashcard-kilde):** **surhet ↔ stabilitet av konjugert base** (mer stabil
  base = sterkere syre = lavere pKa); fire faktorer: (1) **resonans** (karboksylat >>
  alkoksid); (2) **induktiv** (elektrontiltrekkende Cl/NO₂ stabiliserer anion → mer sur; avtar
  med avstand); (3) **aromatisering** (syklopentadien uvanlig sur fordi anionet blir aromatisk,
  6 π, pKa ≈ 16); (4) **hybridisering** (sp-C–H mer sur); **basisitet ↔ tilgjengelighet av
  elektronparet** (amid-N og aromatbundet N lite basisk → F9); pKa-holdepunkter (karboksylsyre
  ~4–5, fenol ~10, alkohol ~16, alkan ~50) `(verifiser eksakte pKa)`.
- **Reaksjons-/mekanismekontrakt:** for hvert par, tegn den konjugerte basen og dens
  resonans-/induktiv-stabilisering; ranger og begrunn med malen fra 0.2.
- **Tegne-/løsningsprosedyre:** (1) fjern H⁺ → tegn konjugert base; (2) vurder resonans-/
  induktiv-/aromatiserings-/hybridiseringsstabilisering; (3) mer stabil base = mer sur;
  (4) skriv begrunnelsen eksplisitt.
- **Typiske feil:** **F4** (svar uten begrunnelse); rangere på selve syren i stedet for
  konjugert base; glemme aromatiserings-effekten (syklopentadien); **F9** (regne amid-/aromat-N
  basisk).
- **Modellsvar:** «Ranger surheten til etanol, fenol og syklopentadien, og begrunn hver via den
  korresponderende basen» (resonans vs. aromatisering).
- **Kvote:** 16 quiz / 22 flashcards.

**Prøve-kvote Del 2:** 4 prøver (2.A resonansstrukturer + formelle ladninger + bidrag · 2.B
syre-base-rangering med stabilitetsbegrunnelse · 2.C substituenteffekter (induktiv/resonans/
aromatisering) · 2.D samlet «stabilitet som begrunnelse»-prøve på eksamensnivå).

### Del 3 — Stereokjemi *(prioritet: PERFEKT — 89 %, hyppigste feilkilde)*

#### Kapittel 3.1: Kiralitet, stereosentre og R/S (CIP)
**id:** `kj1020-3-1` · **number:** 3.1 · **estimatedMinutes:** 60 · **prerequisites:** `kj1020-1-3`

- **Kapitteltype:** konstruksjonskapittel (perfekt).
- **Description:** Kiralitet, stereosenter, enantiomerer og speilbilder, og CIP-algoritmen for
  R/S — grunnferdigheten i stereokjemi og i entydige navn, ofte satt i et navngitt legemiddel.
- **Eksamensbelegg:** Sjanger B (8/9, 89 %): «marker alle stereosentre, kiral/akiral/meso,
  tildel R/S, hvor mange stereoisomerer finnes». Molekylbyggesett brukes til å se speilbilder.
  Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.1 (sp³ tetraeder), kap. 1.3 (navn);
  [Isomeri](/bok/kjemi1/kjemi1-10-3) `(verifiser lenke)`. `collapsible` **Reaksjons- og
  mekanismeliste:** CIP-prioritetsreglene + stereobegrepene.
- **Faktakontrakt (flashcard-kilde):** **kiral** (ikke-superponerbar på speilbildet) vs.
  **akiral**; **stereosenter** (sp³-C med fire ulike grupper); **enantiomerer** (speilbilder;
  identiske fysiske egenskaper unntatt optisk rotasjon og reaksjon med andre kirale);
  **CIP-prioritet** (høyest atomnummer først; ved likhet gå utover til første forskjell;
  dobbeltbinding = duplisert atom); **R/S** (laveste prioritet bakover, 1→2→3 med klokka = R,
  mot = S); antall stereoisomerer $\le 2^n$ (n = stereosentre).
- **Tegne-/løsningsprosedyre (R/S):** (1) identifiser de fire gruppene; (2) CIP-prioriter
  (1 høyest, 4 lavest); (3) orienter med 4 bakover (kile/strek eller byggesett); (4) roter
  1→2→3; (5) med klokka = R, mot = S.
- **Typiske feil:** feil CIP-prioritet (glemme å gå utover ved likhet); glemme å snu svaret når
  laveste gruppe peker mot betrakteren; kalle et molekyl kiralt uten fire ulike grupper.
- **Modellsvar:** «Marker stereosenteret i et naproxen-lignende molekyl og tildel R/S, med
  eksplisitt CIP-rangering» (byggesett-resonnement beskrevet).
- **Kvote:** 18 quiz / 26 flashcards.

#### Kapittel 3.2: Diastereomerer, meso, E/Z, optisk aktivitet og I/K/E/D
**id:** `kj1020-3-2` · **number:** 3.2 · **estimatedMinutes:** 65 · **prerequisites:** `kj1020-3-1`

- **Kapitteltype:** konstruksjonskapittel (perfekt — NTNU-signaturferdighet).
- **Description:** Flere stereosentre (diastereomerer, meso med internt speilplan), E/Z om
  dobbeltbindinger, optisk aktivitet av en blanding (racemat vs. rent), og den faste
  **I/K/E/D-klassifiseringen** av molekylpar — nettopp der studenter oftest bommer.
- **Eksamensbelegg:** Sjanger A (I/K/E/D 6/9, 67 %) + E-del av B (8/9): «for hvert molekylpar,
  er de identiske / konstitusjons- / enantiomerer / diastereomerer?». Meso-glemsel og
  E/D-forveksling er F1 (den vanligste). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 3.1; kap. 1.1 (π-bindingens rotasjonssperre → E/Z).
  `collapsible` **Reaksjons- og mekanismeliste:** E/Z-CIP-regelen, meso-kriteriet,
  I/K/E/D-beslutningstre.
- **Faktakontrakt (flashcard-kilde):** **diastereomerer** (stereoisomerer som ikke er
  speilbilder; ulike fysiske egenskaper); **meso** (har stereosentre, men **akiral** pga.
  internt speilplan → optisk inaktiv); **E/Z** (CIP på hver dobbeltbindings-C: høyest på samme
  side = Z, motsatt = E); **cis/trans** (ringer/enkle alkener); **racemat** (50:50 → optisk
  inaktiv); optisk aktivitet krever **overskudd av ett enantiomer**; **I/K/E/D-beslutningstre**:
  samme konnektivitet? nei → K (konstitusjonsisomer); ja, speilbilder og ikke-superponerbare?
  → E; ja, superponerbare? → I; stereoisomerer men ikke speilbilder? → D.
- **Tegne-/løsningsprosedyre (I/K/E/D):** (1) sammenlign konnektivitet — ulik → K; (2) lik →
  bygg begge på byggesettet / sammenlign R/S ved hvert senter; (3) alle senter motsatt +
  ikke-superponerbar → E; (4) alle identiske / superponerbar → I; (5) noen like, noen motsatt
  → D; (6) sjekk meso (internt speilplan → akiral).
- **Typiske feil:** **F1** (E vs. D forvekslet; glemme meso; telle enantiomerpar dobbelt; se
  ikke at to tegninger er samme molekyl); kalle racemat optisk aktivt; feil E/Z ved CIP.
- **Modellsvar:** «Klassifiser tre molekylpar som I/K/E/D (ett meso-par, ett enantiomerpar, ett
  konstitusjonspar) og begrunn hvert»; «Avgjør om en 1:1-blanding av de to kirale
  2,3-diklorbutanene er optisk aktiv».
- **Kvote:** 18 quiz / 26 flashcards.

#### Kapittel 3.3: Konformasjon — Newman, stol og koblingen til E2
**id:** `kj1020-3-3` · **number:** 3.3 · **estimatedMinutes:** 60 · **prerequisites:** `kj1020-3-2`

- **Kapitteltype:** konstruksjonskapittel (perfekt — signaturcase).
- **Description:** Newman-projeksjoner (gauche/anti) og de to stolkonformasjonene til
  substituert sykloheksan (aksial/ekvatorial), hvilken som er mest stabil, og den premierte
  koblingen til **E2-hastighet** (antiperiplanar → aksial utgående gruppe).
- **Eksamensbelegg:** Sjanger D (stolkonformasjon 7/9, 78 %) + F/konformasjon↔E2 (4/9, 44 %):
  «tegn begge stolformer, mest stabil, koble til reaktivitet / ingen eliminasjon».
  Konformasjon–E2 er F8. Prioritet: perfekt. (E2-mekanismen selv i 4.3.)
- **Forkunnskaper/kryssbok:** kap. 3.2; kap. 1.1 (tetraeder). `collapsible` **Reaksjons- og
  mekanismeliste:** Newman gauche/anti, stol/vippe, aksial/ekvatorial, ringflipp,
  antiperiplanar-kravet for E2.
- **Faktakontrakt (flashcard-kilde):** **Newman-projeksjon** (anti mest stabil, gauche mindre,
  eclipsed minst); **stolkonformasjon** (mest stabil for sykloheksan); **aksial vs.
  ekvatorial**; **ringflipp** bytter aksial↔ekvatorial; **store grupper foretrekker ekvatorial**
  (mindre 1,3-diaksial hindring) → styrer mest stabil konformasjon; **E2 krever antiperiplanar**
  → utgående gruppe og β-H må begge være **aksiale**; en isomer der Cl kun blir aksial ved
  ugunstig ringflipp eliminerer langsommere / gir «ingen eliminasjon».
- **Tegne-/løsningsprosedyre:** (1) tegn begge stolkonformasjoner (hvilke substituenter aksiale/
  ekvatoriale i hver); (2) avgjør mest stabil (flest store grupper ekvatorialt); (3) for E2:
  sjekk om utgående gruppe kan bli aksial med antiperiplanar β-H; (4) konkluder om
  hastighet/produkt.
- **Typiske feil:** **F8** (overser antiperiplanar/aksial-kravet); tro at mest stabil
  konformasjon alltid gir raskest E2 (ofte motsatt); glemme ringflipp; **F4** (ingen konklusjon
  om stabilitet).
- **Modellsvar:** «Forklar med stolkonformasjoner hvorfor en cis-4-tert-butylsykloheksyl-klorid
  gjennomgår E2, men trans-isomeren ikke, og hvilket alken som dannes» (byggesett-resonnement).
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 3.4: Stereokjemi-drill — tegn alle isomerer, I/K/E/D og entydige stereonavn
**id:** `kj1020-3-4` · **number:** 3.4 · **estimatedMinutes:** 55 · **prerequisites:** `kj1020-3-3`

- **Kapitteltype:** drillkapittel (DNA B).
- **Description:** Overtrening av «tegn alle stereoisomerer + klassifiser», **I/K/E/D**-drill,
  og **entydige IUPAC-navn med R/S og E/Z** — her fullføres navnsettings-avhengigheten fra
  Del 1.
- **Eksamensbelegg:** Sjanger A + B + C (stereodel). Fullstendighet premieres; F1 og F10 er
  hovedfeilene. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 3.1–3.3, kap. 1.3 (navnsettingsalgoritmen). `collapsible`
  **Reaksjons- og mekanismeliste:** meso-/E/D-kriteriene + stereodeskriptor-innsetting i navn.
- **Løsningsoppskrift:** isomer-telling ($2^n$ minus meso) → klassifisering → I/K/E/D →
  optisk aktivitet → sett R/S og E/Z inn i det konstitusjonelle navnet for et **entydig** navn.
- **Gjennomtegnet case:** flere klassiske systemer (2,3-diklorbutan/meso, syklopentan-1,2-diol,
  et navngitt legemiddel med to stereosentre) med full isomer-oversikt, I/K/E/D-klassifisering
  og entydige navn, med sensor-margnotater.
- **Typiske feil:** **F1** (ufullstendig telling, E/D-forveksling), **F10** (manglende
  stereodeskriptor i navn).
- **Kvote:** 16 quiz / 16 flashcards.

**Prøve-kvote Del 3:** 4 prøver (3.A kiralitet + R/S · 3.B diastereomer/meso/E-Z/optisk
aktivitet + I/K/E/D · 3.C konformasjon + E2-kobling · 3.D «tegn alle isomerer + I/K/E/D +
entydige stereonavn» på eksamensnivå).

### Del 4 — Nukleofil substitusjon og eliminasjon *(prioritet: PERFEKT — 100 %)*

#### Kapittel 4.1: Karbokationer — stabilitet, dannelse og omleiring
**id:** `kj1020-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `kj1020-2-1`

- **Kapitteltype:** mekanismekapittel (perfekt — signaturmekanisme).
- **Description:** Karbokation-stabilitet (3° > 2° > 1°; allyl/benzyl resonansstabilisert),
  dannelse, og **omleiring** (hydrid-/alkylskift, ringutvidelse) med krumme piler — grunnlaget
  for SN1/E1, addisjon og allyl/benzyl-anomalien.
- **Eksamensbelegg:** Underbygger SN1/E1 (100 %); karbokation-omleiring 4/9 (44 %). Den faste
  «hvorfor SN1 like fort som tertiært for allyl/benzyl» hviler her. Sensorkrav 5. Prioritet:
  perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.1 (resonans/hyperkonjugasjon), kap. 0.2 (krumme piler).
  `collapsible` **Reaksjons- og mekanismeliste:** karbokation-stabilitetsrekke, skift-typer,
  ringutvidelse.
- **Faktakontrakt (flashcard-kilde):** **stabilitet** 3° > 2° > 1° > metyl (hyperkonjugasjon +
  induktiv), **allyl/benzyl ekstra stabile** (resonans — like stabile som tertiært);
  **dannelse** (protonering av OH → tap av vann; ionisering av halogenid); **omleiring** =
  1,2-hydridskift eller 1,2-alkylskift som gir et **mer stabilt** kation; **ringutvidelse**
  (5→6-ring når det gir mindre spent/mer stabilt kation); omleiring skjer **bare** når den øker
  stabiliteten.
- **Reaksjons-/mekanismekontrakt (tekstnotasjon):** full mekanisme for en omleiring (f.eks.
  2,2-dimetyl-syklisk substrat + HX): **Pil 1** ensomt par O → H⁺; **Pil 2** C–O-binding → O
  (tap av H₂O, 2°-kation); **Pil 3** nabo-C–C/C–H → kation-C (1,2-skift → 3°-kation); **Pil 4**
  X⁻ → kation-C (produkt). Vis at hvert intermediat er med.
- **Tegne-/løsningsprosedyre:** (1) dann kationet (piler); (2) vurder om 1,2-skift gir mer
  stabilt kation; (3) om ja, tegn skiftet; (4) fang nukleofilen; (5) begrunn med stabilitet.
- **Typiske feil:** **F5** (glemme omleiring); omleire når det ikke øker stabilitet; **F2**
  (pileretning); **F4** (ingen stabilitetsbegrunnelse).
- **Modellsvar:** «Tegn mekanismen for et 3,3-dimetyl-2-butanol-lignende substrat + HBr og
  forklar hvorfor produktet kommer fra et omleiret tertiært karbokation».
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 4.2: Nukleofil substitusjon — SN1 og SN2
**id:** `kj1020-4-2` · **number:** 4.2 · **estimatedMinutes:** 60 · **prerequisites:** `kj1020-4-1`

- **Kapitteltype:** mekanismekapittel (perfekt — 100 %-søyle).
- **Description:** SN1 (to trinn, karbokation, racemisering) vs. SN2 (ett trinn, ryggangrep,
  inversjon), hvordan substrat/nukleofil/utgående gruppe/løsemiddel avgjør hvilken, og den
  faste **allyl/benzyl-anomalien** (SN1 like fort som tertiært).
- **Eksamensbelegg:** Sjanger E (SN/E 9/9, 100 %): mekanisme + produkt + reaktivitetsrangering
  + stereokjemi. 3-bromsykloheksen + benzylbromid er gjengangere. Sensorkrav 5. Prioritet:
  perfekt.
- **Forkunnskaper/kryssbok:** kap. 4.1 (karbokation), kap. 3.1 (R/S — inversjon);
  [Organiske reaksjonstyper](/bok/kjemi2/kjemi2-8-5) `(verifiser lenke)`. `collapsible`
  **Reaksjons- og mekanismeliste:** SN1/SN2-stegene, faktortabellen (substrat/Nu/UG/løsemiddel).
- **Faktakontrakt (flashcard-kilde):** **SN2** (ett trinn, ryggangrep, **inversjon**;
  favoriseres av 1°-substrat + sterk nukleofil + aprotisk løsemiddel); **SN1** (to trinn via
  karbokation, **racemisering**; favoriseres av 3°-substrat + svak nukleofil + protisk
  løsemiddel); **allyl/benzyl-anomalien** (går SN1 like raskt som tertiært fordi kationet er
  resonansstabilisert); god **utgående gruppe** = svak base (I⁻ > Br⁻ > Cl⁻); konkurranse mot
  eliminasjon (4.3).
- **Reaksjons-/mekanismekontrakt (tekstnotasjon):** SN2: **Pil 1** Nu ensomt par → C (baksiden
  av UG); **Pil 2** C–UG-binding → UG. SN1: **Pil 1** C–UG → UG (kation); **Pil 2** Nu →
  kation-C.
- **Tegne-/løsningsprosedyre:** (1) klassifiser substrat (1°/2°/3°/allyl/benzyl); (2) vurder
  nukleofil-styrke og løsemiddel; (3) velg SN1 vs. SN2; (4) tegn mekanismen; (5) angi
  stereokjemi (inversjon/racemisering); (6) begrunn reaktivitet med kationstabilitet.
- **Typiske feil:** **F2**; glemme inversjon (SN2)/racemisering (SN1); rangere reaktivitet feil;
  overse allyl/benzyl-resonans; **F4**.
- **Modellsvar:** «Forklar hvorfor benzylbromid og 3-bromsyklohepten reagerer SN1 like raskt som
  et tertiært substrat, tegn mekanismen og begrunn med resonansstabilisering av kationet».
- **Kvote:** 18 quiz / 26 flashcards.

#### Kapittel 4.3: Eliminasjon — E1, E2, Zaitsev og antiperiplanar
**id:** `kj1020-4-3` · **number:** 4.3 · **estimatedMinutes:** 55 · **prerequisites:** `kj1020-4-2`

- **Kapitteltype:** mekanismekapittel (perfekt — 100 %-søyle).
- **Description:** E1 (via karbokation) og E2 (samtidig, antiperiplanar), Zaitsev-produktet, og
  geometrikravet som kobles til stolkonformasjon (3.3) og «ingen eliminasjon»-oppgavene.
- **Eksamensbelegg:** Sjanger E (SN/E 9/9, 100 %) + konformasjon↔E2 (4/9): mekanisme + Zaitsev
  + antiperiplanar. F8. Sensorkrav 5, 8. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 4.2 (konkurranse SN/E), kap. 3.3 (konformasjon/antiperiplanar).
  `collapsible` **Reaksjons- og mekanismeliste:** E1/E2-steg, Zaitsev, antiperiplanar-krav.
- **Faktakontrakt (flashcard-kilde):** **E2** (ett trinn, base fjerner β-H mens UG går, krever
  **antiperiplanar** β-H og UG; sterk base); **E1** (to trinn via karbokation; svak base/varme;
  Zaitsev); **Zaitsev** (mest substituerte, mest stabile alken dominerer); E2 på sykloheksan
  krever **aksial** UG og aksial β-H (kobler til 3.3); debromering (vicinalt dibromid → alken)
  som fast variant.
- **Reaksjons-/mekanismekontrakt (tekstnotasjon):** E2: **Pil 1** base → β-H; **Pil 2**
  C–H-binding → danner C=C; **Pil 3** C–UG-binding → UG. E1: ioniser først (som SN1), så base
  fjerner β-H.
- **Tegne-/løsningsprosedyre:** (1) sterk base/1°–2° → E2, svak base/3° → E1; (2) for
  sykloheksan: sjekk aksial UG + antiperiplanar β-H; (3) bruk Zaitsev for hovedprodukt; (4)
  tegn mekanismen; (5) begrunn med alken-stabilitet.
- **Typiske feil:** **F8** (glemme antiperiplanar/aksial); feil Zaitsev-produkt; blande
  E1/E2-betingelser; **F2**; **F4**.
- **Modellsvar:** «Tegn E2 av 2-brombutan med etoksid, angi hovedproduktet (Zaitsev) og begrunn
  med alken-stabilitet» + kobling til «ingen eliminasjon»-tilfellet fra 3.3.
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 4.4: SN/E-prediksjonsdrill
**id:** `kj1020-4-4` · **number:** 4.4 · **estimatedMinutes:** 60 · **prerequisites:** `kj1020-4-3`

- **Kapitteltype:** drillkapittel (DNA B).
- **Description:** Den resirkulerte «hvilket produkt og hvilken mekanisme (SN1/SN2/E1/E2)?»-
  oppgaven i mange varianter: substrat/nukleofil/base-analyse, reaktivitetsrangering i par,
  stereokjemi ved produktet, og allyl/benzyl-anomalien.
- **Eksamensbelegg:** Sjanger E, 9/9. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 4.1–4.3. `collapsible` **Reaksjons- og mekanismeliste:**
  SN1/SN2/E1/E2-beslutningstreet + faktortabellen i kortform.
- **Løsningsoppskrift:** (1) klassifiser substrat; (2) sterk base/nukleofil? aprotisk/protisk?
  (3) velg mekanisme(r) og evt. konkurranse; (4) tegn mekanisme + produkt med stereokjemi;
  (5) begrunn med kation-/alken-stabilitet.
- **Gjennomtegnet case:** varierte substrater (1°/2°/3°/allyl/benzyl) med ulike
  nukleofiler/baser og løsemidler, hver løst med mekanisme + produkt + stereokjemi +
  begrunnelse og sensor-margnotater.
- **Typiske feil:** F2, F4, F5, F8; velge feil mekanisme pga. oversett løsemiddel/substrat.
- **Kvote:** 16 quiz / 16 flashcards.

**Prøve-kvote Del 4:** 4 prøver (4.A karbokation-stabilitet + omleiring · 4.B SN1/SN2
(mekanisme + reaktivitet + stereokjemi + allyl/benzyl) · 4.C E1/E2 + Zaitsev + antiperiplanar ·
4.D samlet SN/E-prediksjonsprøve på eksamensnivå).

### Del 5 — Aromatisitet og elektrofil aromatisk substitusjon *(prioritet: PERFEKT — 89 %)*

#### Kapittel 5.1: Aromatisitet, antiaromatisitet og Hückels regel
**id:** `kj1020-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `kj1020-2-1`

- **Kapitteltype:** konstruksjonskapittel (perfekt — grunnlag for EAS).
- **Description:** Kriteriene for aromatisitet (planar, syklisk, sammenhengende p-system,
  Hückel 4n+2), antiaromatisitet (4n), og det faste syklopentadien-anionet (6 π → aromatisk,
  forklarer den lave pKa) — «er den aromatisk? hvorfor?».
- **Eksamensbelegg:** Aromatisitet/resonans 4/9 (44 %); syklopentadien-anionet (pKa ≈ 16)
  gjenganger, koblet til syre-base (J). «Grunngi» kreves. Prioritet: perfekt (bærer EAS).
- **Forkunnskaper/kryssbok:** kap. 2.1 (resonans/delokalisering), kap. 1.1 (sp², plan p-orbital).
  `collapsible` **Reaksjons- og mekanismeliste:** Hückel 4n+2, de fire kriteriene,
  π-elektrontelling.
- **Faktakontrakt (flashcard-kilde):** **fire kriterier**: (1) syklisk, (2) planar, (3)
  sammenhengende p-system, (4) **4n+2 π-elektroner** → **aromatisk** (ekstra stabil); **4n** (og
  planar) → **antiaromatisk**; bryter et kriterium → **ikke-aromatisk**; π-elektrontelling
  (dobbeltbindinger 2 hver; ensomt par i p-orbital kan bidra 2); eksempler: benzen (6, arom),
  syklobutadien (4, antiarom), **syklopentadienyl-anion (6, arom → forklarer pKa ≈ 16)**,
  tropylium-kation (6, arom).
- **Tegne-/løsningsprosedyre:** (1) syklisk og (potensielt) planar? (2) sammenhengende
  p-system? (3) tell π-elektroner; (4) 4n+2 → aromatisk, 4n → antiaromatisk, ellers ikke; (5)
  begrunn.
- **Typiske feil:** telle π-elektroner feil; glemme planaritetskravet; kalle alt med
  alternerende bindinger aromatisk uten Hückel-sjekk; **F4**.
- **Modellsvar:** «Er syklopentadienyl-anionet aromatisk? Tell π-elektroner og begrunn hvorfor
  syklopentadien derfor er uvanlig surt» (kobler til 2.2).
- **Kvote:** 16 quiz / 24 flashcards.

#### Kapittel 5.2: Elektrofil aromatisk substitusjon og dirigering
**id:** `kj1020-5-2` · **number:** 5.2 · **estimatedMinutes:** 65 · **prerequisites:** `kj1020-5-1`

- **Kapitteltype:** mekanismekapittel (perfekt — 89 %-søyle).
- **Description:** EAS-mekanismen (elektrofil → arenium-ion → tap av H⁺, rearomatisering) og
  dirigering: aktiverende o,p- vs. deaktiverende meta-, halogenenes særstilling, og
  hovedprodukt ved nitrering/sulfonering/halogenering/Friedel–Crafts av substituert benzen.
- **Eksamensbelegg:** Sjanger — EAS + dirigering 8/9 (89 %): «hva blir hovedproduktet, grunngi».
  Feil dirigering er F3. Sensorkrav 5. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 5.1 (aromat), kap. 2.1 (resonansstabilisering av arenium),
  kap. 0.2 (krumme piler). `collapsible` **Reaksjons- og mekanismeliste:** EAS-mekanismesteg,
  dirigeringstabell, aktiverende/deaktiverende.
- **Faktakontrakt (flashcard-kilde):** **EAS-mekanisme**: (1) elektrofil dannes; (2) aromatring
  angriper → resonansstabilisert **arenium-ion**; (3) tap av H⁺ → rearomatisering;
  **aktiverende, o,p-dirigerende** (elektrondonerende: –OH, –OR, –NH₂, alkyl); **deaktiverende,
  meta-dirigerende** (elektrontiltrekkende: –NO₂, –C=O, –COOH, –CN, –SO₃H); **halogener:
  deaktiverende MEN o,p-dirigerende** (induktivt trekker, men ensomt par stabiliserer
  o,p-arenium) — F3-kjernen; samspill: sterkeste aktivator dominerer plasseringen; reaksjonene
  nitrering, sulfonering, halogenering, Friedel–Crafts (alkylering/acylering).
- **Reaksjons-/mekanismekontrakt (tekstnotasjon):** tegn arenium-ionets resonansstrukturer for
  o/p vs. meta og vis hvorfor donor stabiliserer o,p (positiv ladning havner ved substituenten).
- **Tegne-/løsningsprosedyre:** (1) klassifiser hver substituent (aktiverende/deaktiverende,
  o,p/meta); (2) ved to: la sterkeste aktivator dirigere; (3) tegn arenium-resonans for å
  begrunne; (4) angi hovedprodukt.
- **Typiske feil:** **F3** (forveksle aktiverende/deaktiverende med o,p/meta; feil på halogen);
  glemme sterisk hindring av orto; feil to-substituent-samspill; **F4**.
- **Modellsvar:** «Hvor nitreres et fenol-derivat, og hvorfor? Bruk arenium-resonans til å
  begrunne o,p-dirigering» (kontrast med nitrobenzen → meta).
- **Kvote:** 18 quiz / 26 flashcards.

#### Kapittel 5.3: Dirigeringsdrill
**id:** `kj1020-5-3` · **number:** 5.3 · **estimatedMinutes:** 50 · **prerequisites:** `kj1020-5-2`

- **Kapitteltype:** drillkapittel (DNA B).
- **Description:** Overtrening av «hvor og hvorfor» ved EAS på substituert og disubstituert
  benzen, med halogenets særstilling og to-substituent-samspill.
- **Eksamensbelegg:** EAS + dirigering 8/9. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 5.1–5.2. `collapsible` **Reaksjons- og mekanismeliste:**
  dirigeringstabellen + arenium-resonans i kortform.
- **Løsningsoppskrift:** (1) klassifiser hver substituent; (2) sterkeste aktivator dirigerer;
  (3) tegn arenium-resonans for begrunnelse; (4) angi hovedprodukt(er); (5) marker sterisk
  hindret orto der relevant.
- **Gjennomtegnet case:** monosubstituert (toluen, nitrobenzen, klorbenzen, anisol) og
  disubstituert benzen (samspill mellom to grupper), hver med hovedprodukt + arenium-begrunnelse
  og sensor-margnotater om halogenets særstilling (F3).
- **Typiske feil:** F3, F4; feil ved motstridende dirigenter.
- **Kvote:** 16 quiz / 16 flashcards.

**Prøve-kvote Del 5:** 4 prøver (5.A aromatisk/antiaromatisk/ikke-aromatisk + Hückel-telling +
syklopentadien-anion · 5.B EAS-mekanisme + arenium-resonans · 5.C dirigering (mono/disubstituert
+ halogen) · 5.D samlet aromatisitets- og EAS-prøve på eksamensnivå).

### Del 6 — Addisjon til alken og karbonyl-grunnkjemi *(prioritet: KUNNE — 67 %)*

#### Kapittel 6.1: Addisjon til alken og karbokation-omleiring
**id:** `kj1020-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `kj1020-4-1`

- **Kapitteltype:** mekanismekapittel (kunne → syntesenyttig).
- **Description:** Elektrofil addisjon (Markovnikov-hydrohalogenering via karbokation,
  anti-addisjon av $\text{Br}_2$ via bromoniumion, syrekatalysert hydratisering, H₂/Pt) og den
  faste karbokation-omleiringen ved addisjon/dehydrering.
- **Eksamensbelegg:** Sjanger F (addisjon til alken 6/9, 67 %) + karbokation-omleiring (4/9).
  Markovnikov, anti-Br₂, hydratisering; NBS allylisk bromering (3/9) nevnes. Sensorkrav 5.
  Prioritet: kunne (høyfrekvent).
- **Forkunnskaper/kryssbok:** kap. 4.1 (karbokation → Markovnikov);
  [Alkoholer, aldehyder og ketoner](/bok/kjemi2/kjemi2-8-2) `(verifiser lenke)`. `collapsible`
  **Reaksjons- og mekanismeliste:** Markovnikov, anti-addisjon, hydratisering, NBS (fiskekrok).
- **Faktakontrakt (flashcard-kilde):** **Markovnikov** (H til det C med flest H → mest stabilt
  karbokation styrer regioselektivitet); **anti-addisjon** av $\text{Br}_2$ (via bromoniumion →
  trans-vicinalt dibromid); **syrekatalysert hydratisering** (Markovnikov-alkohol); **H₂/Pt**
  (syn-hydrogenering); **NBS** (allylisk/benzylisk bromering via radikal, fiskekrok);
  karbokation-omleiring kan gi uventet hovedprodukt (F5).
- **Reaksjons-/mekanismekontrakt (tekstnotasjon):** hydrohalogenering: **Pil 1** C=C-π → H (av
  HBr, danner mest stabilt kation); **Pil 2** Br⁻ → kation. Bromonium: **Pil** C=C-π → Br₂,
  bromoniumion, så anti-angrep av Br⁻.
- **Tegne-/løsningsprosedyre:** finn mest stabilt kation (Markovnikov), sjekk mulig 1,2-skift
  (F5), tegn piler; for Br₂: bromoniumion → anti-produkt; begrunn regio/stereo med stabilitet.
- **Typiske feil:** feil Markovnikov-regioselektivitet; glemme anti-stereokjemi for $\text{Br}_2$;
  **F5** (glemme omleiring); **F2**.
- **Modellsvar:** «Tegn Markovnikov-produktet av 2-metylpropen + HBr med mekanisme, og forklar
  regioselektiviteten med kationstabilitet»; «Hvorfor gir et 3-metyl-1-buten + HCl et omleiret
  produkt?»
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 6.2: Alkohol- og eterkjemi — Williamson, hemiacetal/acetal, oksidasjon/reduksjon
**id:** `kj1020-6-2` · **number:** 6.2 · **estimatedMinutes:** 60 · **prerequisites:** `kj1020-6-1`

- **Kapitteltype:** mekanismekapittel (kunne).
- **Description:** Williamson-etersyntese (inkl. den intramolekylære THF-danningen fra
  4-klor-1-butanol), syklisk hemiacetal/acetal-danning med mekanisme, og oksidasjons-/
  reduksjonsrepertoaret (NaBH₄, LiAlH₄, PCC, H₂CrO₄).
- **Eksamensbelegg:** Hemiacetal/acetal + eterdanning 4/9 (44 %); reduksjon/oksidasjon 5/9
  (56 %); THF fra 4-klor-1-butanol er gjenganger. Sensorkrav 5. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 4.2 (SN2 for Williamson), kap. 6.1;
  [Alkoholer, aldehyder og ketoner](/bok/kjemi2/kjemi2-8-2) `(verifiser lenke)`,
  [Karboksylsyrer og estere](/bok/kjemi2/kjemi2-8-3) `(verifiser lenke)`. `collapsible`
  **Reaksjons- og mekanismeliste:** Williamson (SN2), hemiacetal/acetal-steg, ox/red-reagenser.
- **Faktakontrakt (flashcard-kilde):** **Williamson** (alkoksid + primært halogenid → eter,
  SN2; intramolekylært → syklisk eter, f.eks. THF); **hemiacetal** (aldehyd + 1 alkohol,
  syrekat.) → **acetal** (+ 1 alkohol, − vann); via tetraedrisk/oksokarbenium-intermediat;
  **reduksjon** (NaBH₄ aldehyd/keton → alkohol; LiAlH₄ også ester/syre); **oksidasjon** (1°
  alkohol → aldehyd (PCC) → syre (H₂CrO₄); 2° → keton) `(verifiser reagensdetalj)`.
- **Reaksjons-/mekanismekontrakt (tekstnotasjon):** Williamson: **Pil 1** alkoksid O → C
  (baksiden av UG); **Pil 2** C–X → X. Acetaldanning: protoner karbonyl → alkohol angriper →
  hemiacetal → protoner OH → tap av vann (oksokarbenium) → andre alkohol angriper → acetal +
  regenerert H⁺.
- **Tegne-/løsningsprosedyre:** for Williamson: lag alkoksid, SN2 med primært halogenid; for
  acetal: karbonyl + 2 alkohol i syre via hemiacetal; for ox/red: velg reagens etter ønsket
  nivå.
- **Typiske feil:** bruke sekundært/tertiært halogenid i Williamson (E2 i stedet); glemme
  regenerert H⁺ i acetal (sensorkrav 5); feil oksidasjonsnivå (aldehyd vs. syre); **F2**.
- **Modellsvar:** «Tegn mekanismen for THF-danning fra 4-klor-1-butanol (intramolekylær
  Williamson) og forklar hvorfor en femring dannes lett».
- **Kvote:** 16 quiz / 24 flashcards.

#### Kapittel 6.3: Karbonylgruppen og enol/keto-tautomeri
**id:** `kj1020-6-3` · **number:** 6.3 · **estimatedMinutes:** 50 · **prerequisites:** `kj1020-6-2`

- **Kapitteltype:** mekanismekapittel (kunne — bro til Del 7/8).
- **Description:** Karbonylets elektrofile C og nukleofile addisjon (bro til Grignard og
  kondensasjon), og **enol/keto-tautomeri** (etylacetoacetat + FeCl₃, racemisering ved
  α-karbon).
- **Eksamensbelegg:** Enol/keto-tautomeri 5/9 (56 %): «tegn enolform, forklar FeCl₃-farge,
  racemisering»; etylacetoacetat er gjenganger. Forutsetning for enolatkjemi (Del 8). Prioritet:
  kunne.
- **Forkunnskaper/kryssbok:** kap. 6.2, kap. 2.1 (resonansstabilisert enol/enolat);
  [Alkoholer, aldehyder og ketoner](/bok/kjemi2/kjemi2-8-2) `(verifiser lenke)`. `collapsible`
  **Reaksjons- og mekanismeliste:** karbonyl-polaritet, keto↔enol-tautomeri, FeCl₃-test.
- **Faktakontrakt (flashcard-kilde):** **karbonyl** C=O (C er δ+, elektrofilt; O er δ−);
  nukleofil addisjon på C (bro til Grignard/kondensasjon); **tautomeri** (keto ↔ enol, en
  konstitusjonsisomer-likevekt via H-forskyvning); **enol** stabilisert av konjugasjon
  (1,3-dikarbonyl som etylacetoacetat er uvanlig enolrikt); **FeCl₃** gir farge med enol/fenol
  (indikator); **racemisering** via plan enol/enolat ved α-stereosenter; α-H er surt pga.
  resonansstabilisert enolat.
- **Reaksjons-/mekanismekontrakt (tekstnotasjon):** keto→enol (sur): protoner O → α-C–H flyttes
  → enol; racemisering: α-C blir plant i enol → reprotonering fra begge sider → racemat.
- **Tegne-/løsningsprosedyre:** identifiser α-H; tegn enolformen; for 1,3-dikarbonyl forklar
  ekstra stabilisering; for racemisering vis plan enol.
- **Typiske feil:** tegne enol på feil karbon; glemme at α-stereosenter racemiserer via enol;
  regne tautomerer som resonans (det er ekte isomerer); **F4**.
- **Modellsvar:** «Tegn enolformen av et etylacetoacetat-lignende 1,3-diketon og forklar hvorfor
  det gir sterk FeCl₃-farge og hvorfor et α-stereosenter racemiserer».
- **Kvote:** 14 quiz / 20 flashcards.

**Prøve-kvote Del 6:** 4 prøver (6.A addisjon til alken (Markovnikov/anti-Br₂/hydratisering) +
omleiring · 6.B Williamson + hemiacetal/acetal-mekanisme · 6.C oksidasjon/reduksjon +
enol/keto-tautomeri · 6.D samlet addisjons-/karbonyl-grunnprøve på eksamensnivå).

### Del 7 — Grignard og organometallisk syntese *(prioritet: PERFEKT — 89 %)*

#### Kapittel 7.1: Grignard-syntese — retrosyntese, mekanisme og racemat
**id:** `kj1020-7-1` · **number:** 7.1 · **estimatedMinutes:** 60 · **prerequisites:** `kj1020-6-3`

- **Kapitteltype:** mekanismekapittel (perfekt — 89 %-søyle).
- **Description:** Grignard-reagenset (RMgX i tørr eter), nukleofil addisjon til karbonyl →
  alkohol, retrosyntesevalget «hvilken karbonyl + hvilket reagens gir en gitt alkohol», rollen
  til tørr eter og sur opparbeiding, og hvorfor produktet ofte er **racemisk**.
- **Eksamensbelegg:** Sjanger I (Grignard 8/9, 89 %): «velg karbonyl + Grignard → gitt alkohol;
  skriv mekanismen; forklar tørr eter og opparbeiding». 1-fenyl-1-propanol er gjenganger. F10
  (racemat + kombinasjonsvalg). Sensorkrav 5. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 6.3 (nukleofil addisjon på karbonyl), kap. 3.1 (nytt
  stereosenter → racemat); [Alkoholer, aldehyder og ketoner](/bok/kjemi2/kjemi2-8-2)
  `(verifiser lenke)`. `collapsible` **Reaksjons- og mekanismeliste:** Grignard-stegene, tørr
  eter/opparbeiding, karbonyl → alkoholklasse.
- **Faktakontrakt (flashcard-kilde):** **Grignard-reagens** RMgX (nukleofilt/basisk C, lages i
  **tørr eter** — reagerer voldsomt med vann/protoner); produkt: formaldehyd → 1° alkohol,
  aldehyd → 2°, keton → 3°, ester → 3° (to R); **sur opparbeiding** protonerer alkoksidet til
  alkohol; **racemisk produkt** når et nytt stereosenter dannes ved angrep på et plant karbonyl
  (angrep like sannsynlig fra begge sider → optisk inaktivt); CO₂ → karboksylsyre (bør kjenne
  til).
- **Reaksjons-/mekanismekontrakt (tekstnotasjon):** **Pil 1** R⁻ (fra RMgX) → karbonyl-C;
  **Pil 2** C=O-π → O (alkoksid); opparbeiding: **Pil** ensomt par O → H⁺ (alkohol).
- **Tegne-/løsningsprosedyre (retrosyntese):** (1) finn C–OH-karbonet i mål-alkoholen; (2) bryt
  én av gruppene på dette C → den kommer fra Grignard, resten fra karbonyl; (3) velg riktig
  karbonylklasse (aldehyd/keton/ester); (4) tegn addisjon + opparbeiding; (5) vurder racemat.
- **Typiske feil:** **F10** (glemme racemat; feil karbonyl/Grignard-kombinasjon); bruke Grignard
  i protisk løsemiddel; feil alkoholklasse; **F2**.
- **Modellsvar:** «Foreslå to ulike karbonyl + Grignard-kombinasjoner som gir 1-fenyl-1-propanol,
  tegn den ene mekanismen, og avgjør om produktet er optisk aktivt».
- **Kvote:** 18 quiz / 26 flashcards.

#### Kapittel 7.2: Grignard-drill
**id:** `kj1020-7-2` · **number:** 7.2 · **estimatedMinutes:** 50 · **prerequisites:** `kj1020-7-1`

- **Kapitteltype:** drillkapittel (DNA B).
- **Description:** 8–15 «karbonyl + reagens → alkohol»-oppgaver på eksamensnivå, hver med
  retrosynteseanalyse, mekanisme og racemat-vurdering.
- **Eksamensbelegg:** Sjanger I, 8/9. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 7.1. `collapsible` **Reaksjons- og mekanismeliste:**
  Grignard-retrosynteseoppskriften + karbonyl → alkoholklasse.
- **Løsningsoppskrift:** retrosynteseoppskriften fra 7.1 anvendt mekanisk; sjekkliste for
  karbonylklasse, tørr eter, opparbeiding og racemat.
- **Gjennomtegnet case:** varierte mål-alkoholer (1°/2°/3°, med og uten nytt stereosenter),
  hver med minst én karbonyl + Grignard-rute, mekanisme og optisk-aktivitet-vurdering, med
  sensor-margnotater (F10).
- **Typiske feil:** F10, F2; velge en kombinasjon som ikke gir riktig alkoholklasse.
- **Kvote:** 16 quiz / 16 flashcards.

**Prøve-kvote Del 7:** 4 prøver (7.A Grignard-reagens + karbonyl → alkoholklasse · 7.B
retrosyntese (velg karbonyl + reagens) · 7.C mekanisme + tørr eter/opparbeiding + racemat ·
7.D samlet Grignard-syntese-prøve på eksamensnivå).

### Del 8 — Karbonylkondensasjon: aldol og Claisen–Schmidt *(prioritet: PERFEKT — 89 %)*

#### Kapittel 8.1: Enolat-danning og aldolkondensasjon
**id:** `kj1020-8-1` · **number:** 8.1 · **estimatedMinutes:** 65 · **prerequisites:** `kj1020-6-3`

- **Kapitteltype:** mekanismekapittel (perfekt — 89 %-søyle).
- **Description:** Enolat-danning (basisk fjerning av surt α-H → resonansstabilisert enolat),
  nukleofilt angrep på et andre karbonyl (aldoladdisjon), og **dehydrering** til det α,β-umettede
  aldolkondensasjonsproduktet — full mekanisme.
- **Eksamensbelegg:** Sjanger H (kondensasjon 8/9, 89 %): «tegn den detaljerte mekanismen».
  Ufullstendig mekanisme (glemt enolat/dehydrering) er F7. **Full mekanisme premieres, ikke bare
  produkt** (sensorkrav 5). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 6.3 (enol/enolat), kap. 2.1 (resonansstabilisert enolat),
  kap. 0.2 (piler). `collapsible` **Reaksjons- og mekanismeliste:** enolat-danning,
  aldoladdisjon, dehydrering (E1cb-lignende).
- **Faktakontrakt (flashcard-kilde):** **α-H surt** (pKa ≈ 20 for keton) pga.
  resonansstabilisert **enolat**; **aldoladdisjon** (enolat + karbonyl → β-hydroksykarbonyl);
  **aldolkondensasjon** (β-hydroksykarbonyl → **dehydrering** → α,β-umettet karbonyl);
  intramolekylær aldol (danner ring); **kryssaldol** (to ulike karbonyler — selektiv når ett
  mangler α-H, jf. Claisen–Schmidt 8.2); konjugasjon i produktet → høyere λ_max (UV/Vis-kobling,
  bør kjenne til).
- **Reaksjons-/mekanismekontrakt (tekstnotasjon — full sekvens):** **Pil 1** base → α-H (danner
  enolat); **Pil 2** enolat-C → andre karbonyl-C (ny C–C); **Pil 3** C=O-π → O (alkoksid);
  protonering → β-hydroksykarbonyl; dehydrering: **Pil** fjern α'-H, **Pil** danner C=C, **Pil**
  utstøt OH⁻/OH₂ → α,β-umettet produkt. Alle intermediater med.
- **Tegne-/løsningsprosedyre:** (1) finn surt α-H, dann enolat; (2) angrip andre karbonyl (ny
  C–C); (3) protoner til β-hydroksykarbonyl; (4) dehydrer til α,β-umettet; (5) begrunn selektivitet.
- **Typiske feil:** **F7** (hoppe over enolat eller dehydrering); tegne angrep fra feil karbon;
  **F2**; **F4**.
- **Modellsvar:** «Tegn full mekanisme for aldolkondensasjon av propanal (base), fra enolat til
  det α,β-umettede produktet».
- **Kvote:** 18 quiz / 26 flashcards.

#### Kapittel 8.2: Claisen–Schmidt og intramolekylær kondensasjon
**id:** `kj1020-8-2` · **number:** 8.2 · **estimatedMinutes:** 60 · **prerequisites:** `kj1020-8-1`

- **Kapitteltype:** mekanismekapittel (perfekt — 89 %-søyle).
- **Description:** Kryssaldol der ett karbonyl mangler α-H (Claisen–Schmidt: aromatisk aldehyd +
  keton → α,β-umettet keton, som pseudoionon/mesityloksid), og intramolekylær kondensasjon av
  diketoner til ringer — full mekanisme med selektivitetsbegrunnelse.
- **Eksamensbelegg:** Sjanger H (8/9): pseudoionon fra geranial + aceton; mesityloksid fra
  aceton; benzaldehyd + propanal; intramolekylær diketon-kondensasjon er faste varianter. F7.
  Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 8.1 (aldolmekanisme). `collapsible` **Reaksjons- og
  mekanismeliste:** Claisen–Schmidt-selektivitet, intramolekylær ringstørrelse.
- **Faktakontrakt (flashcard-kilde):** **Claisen–Schmidt** (kryssaldolkondensasjon der ett
  komponent (aromatisk aldehyd) **mangler α-H** → kun ett mulig enolat → høy selektivitet →
  α,β-umettet keton); **intramolekylær kondensasjon** (diketon → mest stabile ring, 5-/6-ring
  favoriseres); dehydrering drives av konjugasjon; produkter er sterkt konjugerte (farge).
- **Reaksjons-/mekanismekontrakt (tekstnotasjon):** som 8.1, men vis at enolatet **må** dannes
  på ketonet (aldehyden mangler α-H) → forklarer produktet; for intramolekylær: enolat på ett
  karbonyl angriper det andre i samme molekyl → ring → dehydrer.
- **Tegne-/løsningsprosedyre:** (1) identifiser hvilken komponent som kan gi enolat (har α-H);
  (2) dann enolatet der; (3) angrip det andre karbonylet; (4) dehydrer; (5) for intramolekylær:
  velg ringstørrelse som gir 5-/6-ring.
- **Typiske feil:** **F7**; danne enolat på feil komponent (aromatisk aldehyd har ikke α-H);
  velge feil ringstørrelse; **F2**.
- **Modellsvar:** «Tegn mekanismen for Claisen–Schmidt mellom benzaldehyd og aceton, og forklar
  hvorfor bare ett enolat er mulig og hvorfor produktet er sterkt konjugert».
- **Kvote:** 16 quiz / 24 flashcards.

#### Kapittel 8.3: Kondensasjons-drill
**id:** `kj1020-8-3` · **number:** 8.3 · **estimatedMinutes:** 55 · **prerequisites:** `kj1020-8-2`

- **Kapitteltype:** drillkapittel (DNA B).
- **Description:** 8–15 «tegn full mekanisme for aldol-/Claisen–Schmidt-/intramolekylær
  kondensasjon»-oppgaver på eksamensnivå, hver med enolat → angrep → dehydrering komplett.
- **Eksamensbelegg:** Sjanger H, 8/9. Full mekanisme premieres. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 8.1–8.2. `collapsible` **Reaksjons- og mekanismeliste:**
  kondensasjonsoppskriften (enolat → angrep → dehydrering) i kortform.
- **Løsningsoppskrift:** identifiser α-H-komponent → enolat → angrip → protoner → dehydrer →
  begrunn selektivitet; sjekkliste for at alle tre faser er tegnet (F7-vaksine).
- **Gjennomtegnet case:** varierte kondensasjoner (selvaldol, kryssaldol/Claisen–Schmidt,
  intramolekylær), hver med full mekanisme og sensor-margnotater om hvor delpoengene faller.
- **Typiske feil:** F7 (ufullstendig), F2, F4.
- **Kvote:** 16 quiz / 16 flashcards.

**Prøve-kvote Del 8:** 4 prøver (8.A enolat-danning + aldoladdisjon · 8.B aldolkondensasjon
(m/ dehydrering) · 8.C Claisen–Schmidt + intramolekylær · 8.D samlet kondensasjons-mekanisme-
prøve på eksamensnivå).

### Del 9 — Dien-kjemi og Diels–Alder *(prioritet: PERFEKT — 89 %)*

#### Kapittel 9.1: Konjugerte diener og 1,2-/1,4-addisjon
**id:** `kj1020-9-1` · **number:** 9.1 · **estimatedMinutes:** 55 · **prerequisites:** `kj1020-6-1`

- **Kapitteltype:** mekanismekapittel (perfekt).
- **Description:** Konjugerte diener, det resonansstabiliserte allylkationet, og **1,2- vs.
  1,4-addisjon** av HX ved lav vs. høy temperatur — med krav om mekanisme **og** forklaring på
  **kinetisk vs. termodynamisk kontroll**.
- **Eksamensbelegg:** Sjanger F (1,2-/1,4-addisjon til dien 7/9, 78 %): «hovedprodukt ved lav vs.
  høy temperatur, mekanisme, begrunn». Blanding kinetisk/termodynamisk er F6. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 6.1 (addisjon/karbokation), kap. 2.1 (allylkation-resonans).
  `collapsible` **Reaksjons- og mekanismeliste:** allylkation-resonans, 1,2-/1,4-produkt,
  kinetisk/termodynamisk kontroll.
- **Faktakontrakt (flashcard-kilde):** **konjugert dien** (vekslende dobbeltbindinger, stabilere
  enn isolert); HX-addisjon gir **resonansstabilisert allylkation** → to angrepspunkter →
  **1,2-produkt** (kinetisk, dannes raskest, dominerer ved lav temperatur) vs. **1,4-produkt**
  (termodynamisk, mest stabilt fordi mest substituert/konjugert alken, dominerer ved høy
  temperatur/likevekt); reversibilitet ved høy temperatur gir det termodynamiske.
- **Reaksjons-/mekanismekontrakt (tekstnotasjon):** **Pil 1** dien-π → H⁺ (danner allylkation);
  tegn allylkationets **to resonansstrukturer**; **Pil 2** X⁻ → C2 (1,2) **eller** C4 (1,4).
- **Tegne-/løsningsprosedyre:** (1) protoner dienet til allylkation; (2) tegn begge
  resonansstrukturer; (3) X⁻ angriper C2 (1,2, kinetisk) eller C4 (1,4, termodynamisk); (4) velg
  hovedprodukt etter temperatur; (5) begrunn med alken-stabilitet.
- **Typiske feil:** **F6** (blander kinetisk/termodynamisk; får ikke fram hvorfor 1,4 er mest
  stabilt); glemme allylkation-resonans; **F2**; **F4**.
- **Modellsvar:** «Tegn 1,2- og 1,4-produktene av HBr + 1,3-butadien via allylkationet, og
  forklar hvilket som dominerer ved lav og ved høy temperatur».
- **Kvote:** 16 quiz / 24 flashcards.

#### Kapittel 9.2: Diels–Alder, norbornadien-syntesen og benzyn
**id:** `kj1020-9-2` · **number:** 9.2 · **estimatedMinutes:** 65 · **prerequisites:** `kj1020-9-1`

- **Kapitteltype:** mekanismekapittel (perfekt — 89 %-søyle, norbornadien fast).
- **Description:** Den konserterte Diels–Alder-cykloaddisjonen (dien + dienofil → sykloheksen),
  s-cis-kravet, den faste **norbornadien-syntesen** (syklopentadien + vinylklorid, deretter
  base), og benzyn som dienofil (fra antranilsyre via diazonium).
- **Eksamensbelegg:** Sjanger G (Diels–Alder/dien 8/9, 89 %): «tegn produktet / velg dien +
  dienofil». Norbornadien-oppgaven i minst fem sett; benzyn fra 2012 (stigende, fast
  pensumpunkt i TKJ4103 `(verifiser)`). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 9.1 (dien-kjemi), kap. 5.1 (syklopentadien-anion). `collapsible`
  **Reaksjons- og mekanismeliste:** Diels–Alder (konsertert), s-cis-krav, norbornadien-ruten,
  benzyn.
- **Faktakontrakt (flashcard-kilde):** **Diels–Alder** = **konsertert** [4+2]-cykloaddisjon
  (dien i **s-cis** + dienofil → sykloheksen; ny 6-ring, to nye σ-bindinger, én ny π); **dien**
  må kunne innta s-cis (syklopentadien er låst s-cis → svært reaktivt); **dienofil** aktiveres
  av elektrontiltrekkende gruppe; stereospesifikk (syn-addisjon, endo-preferanse — bør kjenne
  til); **norbornadien-ruten** (syklopentadien + vinylklorid → Diels–Alder-addukt → base
  eliminerer HCl → norbornadien); **benzyn** (fra antranilsyre via diazotering → svært reaktiv
  dienofil).
- **Reaksjons-/mekanismekontrakt (tekstnotasjon):** tegn de **tre samtidige pilene** i den
  konserterte overgangstilstanden (dien-π og dienofil-π danner de to nye σ-bindingene + ny
  intern π); vis s-cis-geometrien; for norbornadien: Diels–Alder først, så E2-eliminasjon (base).
- **Tegne-/løsningsprosedyre:** (1) sett dienet i s-cis; (2) plasser dienofilen; (3) tegn de tre
  pilene → sykloheksen; (4) for retrosyntese: klipp de to nye σ-bindingene → dien + dienofil;
  (5) for norbornadien: addukt → eliminer HCl.
- **Typiske feil:** tegne trinnvis i stedet for konsertert; glemme s-cis-kravet; feil
  regiokjemi/produkt; feil dien/dienofil ved retrosyntese; **F2**.
- **Modellsvar:** «Tegn Diels–Alder-produktet av syklopentadien + et aktivert alken, og skisser
  hvordan norbornadien lages fra syklopentadien + vinylklorid med base».
- **Kvote:** 18 quiz / 26 flashcards.

#### Kapittel 9.3: Dien-drill
**id:** `kj1020-9-3` · **number:** 9.3 · **estimatedMinutes:** 50 · **prerequisites:** `kj1020-9-2`

- **Kapitteltype:** drillkapittel (DNA B).
- **Description:** 8–15 oppgaver: «tegn Diels–Alder-produktet», «velg dien + dienofil til et gitt
  produkt», «1,2-/1,4-addisjon ved lav/høy temperatur», og norbornadien-varianter.
- **Eksamensbelegg:** Sjanger G + F, 8/9 og 7/9. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 9.1–9.2. `collapsible` **Reaksjons- og mekanismeliste:**
  Diels–Alder- og allylkation-oppskriftene i kortform.
- **Løsningsoppskrift:** for Diels–Alder: s-cis-dien + dienofil → konsertert produkt (eller
  retrosyntese ved å klippe to σ-bindinger); for 1,2/1,4: allylkation → temperaturvalg; begrunn
  med stabilitet.
- **Gjennomtegnet case:** varierte diener/dienofiler (inkl. syklopentadien/norbornadien og
  1,2-/1,4-addisjon), hver med produkt + begrunnelse og sensor-margnotater (F6, konsertert).
- **Typiske feil:** F6, F2; trinnvis Diels–Alder; feil dien/dienofil-valg.
- **Kvote:** 16 quiz / 16 flashcards.

**Prøve-kvote Del 9:** 4 prøver (9.A konjugert dien + 1,2-/1,4-addisjon (kinetisk/termodynamisk) ·
9.B Diels–Alder-produkt + s-cis · 9.C norbornadien-ruten + benzyn · 9.D samlet dien-/Diels–Alder-
prøve på eksamensnivå).

### Del 10 — Spektroskopi *(prioritet: KJENNE — nedtonet; NMR 78 %, MS 11 %)*

#### Kapittel 10.1: ¹H NMR-splitting og enkel massespektrometri
**id:** `kj1020-10-1` · **number:** 10.1 · **estimatedMinutes:** 45 · **prerequisites:** `kj1020-1-2`

- **Kapitteltype:** konstruksjonskapittel (kjenne — bevisst kort).
- **Description:** De to faste, enkle NMR-variantene (forutsi splittingsmønster via n+1;
  koble tre spektre til brometan / 1-brompropan / 2-brompropan) og den ene MS-varianten (m/z →
  identifikasjon). **Ingen IR, ingen strukturoppklaring, ingen vedleggstabeller.**
- **Eksamensbelegg:** ¹H NMR-splitting/spektergjenkjenning 7/9 (78 %, men lavt vektet); MS 1/9
  (11 %, kun 2003). NEDTONET kraftig (NTNU/UiO-forskjell §9). Prioritet: kjenne.
- **Forkunnskaper/kryssbok:** kap. 1.2 (struktur), kap. 3.1 (ekvivalens ↔ symmetri);
  [Spektroskopi](/bok/kjemi1/kjemi1-2-2) `(verifiser lenke)` (generelt prinsipp). `collapsible`
  **Reaksjons- og mekanismeliste:** n+1-regelen, integral ↔ H-forhold, m/z-molekylion.
- **Faktakontrakt (flashcard-kilde):** **antall signaler** = antall kjemisk uekvivalente
  protontyper (symmetri reduserer); **integral** ∝ antall protoner (forhold); **multiplisitet**
  via **n+1-regelen** (n ekvivalente naboprotoner → n+1 topper; etyl = triplett + kvartett;
  isopropyl = dublett + septett); **kjemisk skift** kvalitativt (nær elektronegative atomer →
  høyere δ); **de tre trivielle bromalkanene** (brometan: triplett+kvartett; 1-brompropan:
  triplett+multiplett+triplett; 2-brompropan: dublett+septett); **MS-molekylion M⁺** (m/z =
  molekylmasse; hovedbruk: identifikasjon). **NB: ingen tabell gis** — løses på
  mønstergjenkjenning.
- **Konstruksjonskontrakt:** forutsi splittingsmønster fra en struktur (n+1); koble et gitt
  splittingsmønster til rett bromalkan; bruk M⁺ til identifikasjon.
- **Typiske feil:** telle naboprotoner feil (n+1); lese integral som absolutt antall (det er
  forhold); glemme at symmetriekvivalente H gir ett signal; forveksle M⁺ med fragment.
- **Modellsvar:** «Forutsi ¹H NMR-splittingsmønsteret til 1-brompropan og forklar hvert signal
  med n+1»; «Koble tre gitte splittingsmønstre til brometan, 1-brompropan og 2-brompropan».
- **Kvote:** 14 quiz / 16 flashcards.

**Prøve-kvote Del 10:** 4 prøver (10.A n+1-splittingsmønster fra struktur · 10.B
spektergjenkjenning (tre bromalkaner) · 10.C integral/ekvivalens + enkel MS-identifikasjon ·
10.D samlet NMR-splitting/MS-prøve på eksamensnivå — lavt vektet).

### Del 11 — Flertrinns-syntese og retrosyntese *(prioritet: KUNNE — 67 %)*

#### Kapittel 11.1: Reaksjonsrepertoaret og retrosyntese
**id:** `kj1020-11-1` · **number:** 11.1 · **estimatedMinutes:** 60 · **prerequisites:** `kj1020-9-2`

- **Kapitteltype:** konstruksjonskapittel (kunne — flashcard-tungt reaksjonsregister).
- **Description:** Alle pensumreaksjonene samlet som en verktøykasse (reagens → transformasjon →
  produkt) og retrosyntetisk tenkning — å planlegge en flertrinns-transformasjon baklengs fra
  målmolekylet.
- **Eksamensbelegg:** Sjanger K (flertrinns-syntese 6/9, 67 %): «angi reagenser og strukturer
  for mellomprodukter A–D». Delvis uttelling per trinn (sensorkrav 7). Prioritet: kunne.
- **Forkunnskaper/kryssbok:** Del 4–9 (SN/E, EAS, addisjon, karbonyl, Grignard, kondensasjon,
  dien); [Organiske reaksjonstyper](/bok/kjemi2/kjemi2-8-5) `(verifiser lenke)`,
  [Syntese og utbytte](/bok/kjemi2/kjemi2-8-6) `(verifiser lenke)`. `collapsible` **Reaksjons-
  og mekanismeliste:** hele reaksjonsbanken (transformasjon ↔ reagens) i kortform.
- **Faktakontrakt (flashcard-kilde — stor):** for hver: reagens + betingelser + produkt +
  gruppeendring: **halogenering** (alken + HX/X₂; NBS allylisk), **hydratisering/dehydrering**
  (alken ↔ alkohol), **oksidasjon/reduksjon** (alkohol ↔ karbonyl; NaBH₄/LiAlH₄/PCC/H₂CrO₄),
  **Grignard** (C–C → alkohol), **Williamson** (eter), **acetaldanning**, **EAS** (nitrering,
  halogenering, Friedel–Crafts, sulfonering), **eliminasjon** (→ alken), **substitusjon**
  (SN1/SN2), **aldol/Claisen–Schmidt** (C–C → α,β-umettet karbonyl), **Diels–Alder** (→ ring);
  **retrosyntese** (⇒ «lages fra»; bryt en C–C/C–X-binding til byggeklosser; C–C-dannende
  reaksjoner = Grignard, aldol, Diels–Alder, Friedel–Crafts).
- **Konstruksjonskontrakt:** for en ønsket gruppeendring, oppgi reagenset(ene); og motsatt
  (reagens → forutsi produkt); planlegg 2–4-trinns rute baklengs fra mål.
- **Typiske feil:** feil oksidasjonsnivå (aldehyd vs. syre); bruke en reaksjon utenfor dens
  substrat; feil rekkefølge (EAS-dirigering ignorert, F3); glemme betingelser (tørr eter/base).
- **Modellsvar:** «Planlegg en rute fra benzen til et para-substituert acetofenon-derivat der
  EAS-dirigeringen krever riktig rekkefølge, og oppgi reagens + mellomprodukt for hvert trinn».
- **Kvote:** 16 quiz / 30 flashcards.

#### Kapittel 11.2: Synteseoppgave-drill — reagenser og mellomprodukter
**id:** `kj1020-11-2` · **number:** 11.2 · **estimatedMinutes:** 60 · **prerequisites:** `kj1020-11-1`

- **Kapitteltype:** drillkapittel (DNA B).
- **Description:** 8–15 flertrinns-synteseoppgaver på eksamensnivå: «angi reagenser og strukturer
  for mellomprodukter A–D», hver med full trinnvis fasit.
- **Eksamensbelegg:** Sjanger K, 6/9. Delvis uttelling per trinn. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 11.1, Del 4–9. `collapsible` **Reaksjons- og mekanismeliste:**
  reaksjonsbanken + retrosynteseoppskriften i kortform.
- **Løsningsoppskrift:** retrosyntese fra 11.1 anvendt; sjekkliste for hvert trinns reagens +
  mellomprodukt (SMILES + navn); marker C–C-dannende trinn.
- **Gjennomtegnet case:** varierte mål (aromatiske via EAS-rekkefølge, alkohol via Grignard,
  α,β-umettet via kondensasjon, ring via Diels–Alder), hver med reagens + mellomprodukt per
  trinn, med sensor-margnotater om delpoeng og alternative gyldige ruter (sensorkrav 7).
- **Typiske feil:** manglende mellomprodukt; feil rekkefølge (F3); teknisk feil trinn uten
  pensumdekning.
- **Kvote:** 16 quiz / 16 flashcards.

**Prøve-kvote Del 11:** 4 prøver (11.A reaksjonsrepertoar (reagens ↔ produkt) · 11.B retrosyntese/
planlegging · 11.C flertrinns-syntese (reagens + mellomprodukter A–D) · 11.D samlet synteseprøve
på eksamensnivå med dirigeringsrekkefølge).

### Del 12 — Eksamenstrening *(prioritet: PERFEKT (meta))*

#### Kapittel 12.1: Sjangerspill — løsningsoppskrifter for A–K
**id:** `kj1020-12-1` · **number:** 12.1 · **estimatedMinutes:** 60 · **prerequisites:** `kj1020-11-2`

- **Kapitteltype:** sjangerdrill/konsolidering (DNA B-lignende).
- **Description:** Alle elleve oppgavesjangrene (A–K) med sine løsningsoppskrifter samlet på ett
  sted — studentens hurtigreferanse rett før eksamen.
- **Eksamensbelegg:** Meta (alle sjangre). Sensorkravene 1–8 gjennomgående. Prioritet: perfekt
  (meta).
- **Forkunnskaper/kryssbok:** hele boka. `collapsible` **Reaksjons- og mekanismeliste:**
  sjangeroppskriftene + reaksjonsbanken i kortform.
- **Innhold:** `text` **Sjangerguiden** — for hver sjanger A–K: kjennetegn, løsningsoppskriften
  (fra respektivt kapittel), sensorpremie og vanligste feil (feilkode). `definition`/`collapsible`
  **Hurtigreferanse** (flashcard-kilde): oppskrift-kortene (I/K/E/D-beslutningstre; R/S-CIP;
  IUPAC-algoritmen; Hückel-sjekken; pilegrammatikken; kondensasjonsoppskriften;
  Grignard-retrosyntesen; Diels–Alder/1,2-1,4; dirigering). `example` full gjennomgang av én
  oppgave per hovedsjanger. `exercise` = «identifiser sjanger + skisser angrepsplan» for blandede
  oppgavestammer.
- **Typiske feil:** hele F1–F10-katalogen med kobling til forebyggende kapittel.
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 12.2: Øvingseksamen 1 (komplett fem-oppgaver-sett)
**id:** `kj1020-12-2` · **number:** 12.2 · **estimatedMinutes:** 90 · **prerequisites:** `kj1020-12-1`

- **Kapitteltype:** øvingseksamen.
- **Description:** Et komplett, nyskrevet sett i arkivmalen: **fem likt strukturerte
  konstruksjonsoppgaver** (~100 p, poeng per deloppgave), **kun molekylbyggesett**, alle svar
  tegnet/begrunnet.
- **Eksamensbelegg:** Meta — speiler temafordelingen i analysen §2. Prioritet: perfekt (meta).
- **Innhold:** temafordeling som en «typisk» eksamen: **én SN/E-oppgave** (mekanisme + produkt +
  reaktivitet), **én EAS + dirigering**, **én karbonylkondensasjon** (full mekanisme), **én
  Grignard-syntese** (retrosyntese + racemat), **én Diels–Alder/dien** (norbornadien-type), med
  **stereokjemi/I-K-E-D** og **IUPAC** innbakt som deloppgaver, ofte rammet i et autentisk
  legemiddelmolekyl. `collapsible` full løsning per oppgave (modellsvar slik sensor vil se det:
  strukturer i SMILES + navn, nummererte krumme piler, eksplisitte stabilitetsbegrunnelser);
  `tip` **Sensorblikket** (hvor delpoengene faller, hva som skiller bestått fra topp).
  **Kildeforbehold + etterfølger-merknad:** malen bygger på 2001–2012-arkivet; sensorlogikk
  utledet `(verifiser)`; verifiser mot TKJ4103-sett.
- **Typiske feil:** hele F1–F10 anvendt i sensorblikket (tegn-uten-begrunnelse = F4 osv.).
- **Kvote:** 6 quiz / 2 flashcards.

#### Kapittel 12.3: Øvingseksamen 2 (komplett fem-oppgaver-sett)
**id:** `kj1020-12-3` · **number:** 12.3 · **estimatedMinutes:** 90 · **prerequisites:** `kj1020-12-2`

- **Kapitteltype:** øvingseksamen.
- **Description:** Andre komplette sett med en annen, men fortsatt typisk, profil — speiler at
  settene er strukturelt identiske år etter år (samme sjangre, varierte molekyler).
- **Eksamensbelegg:** Meta. Prioritet: perfekt (meta).
- **Innhold:** som 12.2, men med tyngre vekt på **stolkonformasjon↔E2**, **1,2-/1,4-addisjon til
  dien** (kinetisk/termodynamisk), en **karbokation-omleiring**, og en **I/K/E/D-oppgave** med
  meso; IUPAC med E/Z; syre-base-rangering med resonansbegrunnelse. Full løsning + Sensorblikket.
  Kildeforbehold + etterfølger-merknad.
- **Typiske feil:** F6, F8, F1 fremhevet i sensorblikket.
- **Kvote:** 6 quiz / 2 flashcards.

#### Kapittel 12.4: Øvingseksamen 3 (komplett fem-oppgaver-sett)
**id:** `kj1020-12-4` · **number:** 12.4 · **estimatedMinutes:** 90 · **prerequisites:** `kj1020-12-3`

- **Kapitteltype:** øvingseksamen.
- **Description:** Tredje komplette sett, vektet mot de tyngste konseptuelle temaene (stereokjemi
  + kondensasjonsmekanisme) og med en flertrinns-syntese — for bredest mulig sjangerdekning.
- **Eksamensbelegg:** Meta. Prioritet: perfekt (meta).
- **Innhold:** som 12.2/12.3, med **stereokjemi/I-K-E-D som tyngste oppgave**, en **full
  Claisen–Schmidt-mekanisme**, en **flertrinns-syntese** (reagenser + mellomprodukter A–D med
  dirigeringsrekkefølge), og en **norbornadien-syntese**. Full løsning + Sensorblikket med
  A/B/C-terskelbeskrivelse. Kildeforbehold + etterfølger-merknad + oppfordring til å bygge egne
  varianter av gjengangermolekylene. Til sammen dekker de tre settene sjangrene A–K minst én gang.
- **Typiske feil:** F1, F7, F10 fremhevet i sensorblikket.
- **Kvote:** 6 quiz / 2 flashcards.

**Prøve-kvote Del 12:** ingen egen prøve (Del 12 ER de tre øvingseksamenene 12.2–12.4).

---

## 4. Kvotesammendrag (AUTORITATIV for alle senere faser)

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 2 | 22 | 26 | 0 (dekkes av øvingseksamenene) |
| 1 | 3 | 48 | 70 | 4 |
| 2 | 2 | 32 | 46 | 4 |
| 3 | 4 | 68 | 90 | 4 |
| 4 | 4 | 66 | 86 | 4 |
| 5 | 3 | 50 | 66 | 4 |
| 6 | 3 | 46 | 66 | 4 |
| 7 | 2 | 34 | 42 | 4 |
| 8 | 3 | 50 | 66 | 4 |
| 9 | 3 | 50 | 66 | 4 |
| 10 | 1 | 14 | 16 | 4 |
| 11 | 2 | 32 | 46 | 4 |
| 12 | 4 | 36 | 26 | 0 (= 3 øvingseksamener) |
| **Sum** | **36** | **548 ✓ (≥500)** | **712 ✓ (≥500)** | **44 + 3 øvingseksamener** |

Summeringskontroll per del (quiz / flashcards):
- Del 0: 10+12 = **22** / 10+16 = **26**
- Del 1: 16+16+16 = **48** / 22+24+24 = **70**
- Del 2: 16+16 = **32** / 24+22 = **46**
- Del 3: 18+18+16+16 = **68** / 26+26+22+16 = **90**
- Del 4: 16+18+16+16 = **66** / 22+26+22+16 = **86**
- Del 5: 16+18+16 = **50** / 24+26+16 = **66**
- Del 6: 16+16+14 = **46** / 22+24+20 = **66**
- Del 7: 18+16 = **34** / 26+16 = **42**
- Del 8: 18+16+16 = **50** / 26+24+16 = **66**
- Del 9: 16+18+16 = **50** / 24+26+16 = **66**
- Del 10: 14 = **14** / 16 = **16**
- Del 11: 16+16 = **32** / 30+16 = **46**
- Del 12: 18+6+6+6 = **36** / 20+2+2+2 = **26**
- **Totalt: 548 quiz / 712 flashcards.**

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride. Fordelingen
speiler frekvens og natur: de fem mekanisme-søylene + stereokjemi (Del 3 stereokjemi, Del 4
SN/E, Del 5 aromatisitet/EAS, Del 7 Grignard, Del 8 kondensasjon, Del 9 dien/Diels–Alder)
bærer 318 av 548 quiz og 416 av 712 flashcards.

**Flashcard-profilen (712) ligger godt over gulvet (500)** fordi faget er reaksjons- og
mekanismerikt og eksamen er **helt uten oppslagsverk** (ingen tabeller, ingen kalkulator) —
alt må sitte. Hvert delkapittels **Reaksjons- og mekanismeliste** er en naturlig
flashcard-kilde. Korttyper: **reaksjon↔betingelse↔produkt** (alken + $\text{Br}_2$ →
trans-vicinalt dibromid, anti; keton + RMgX → 3° alkohol; aromatisk aldehyd + keton →
Claisen–Schmidt-produkt), **mekanismesteg** (SN2 → ryggangrep/inversjon; aldol → enolat/angrep/
dehydrering; EAS → arenium/rearomatisering), **stereobegrep** (meso = internt speilplan, akiral;
I/K/E/D-kriteriene; racemat = optisk inaktivt; R/S-CIP), **dirigering** (aktiverende o,p vs.
deaktiverende meta; halogen deaktiverende men o,p), **dien/dienofil** (norbornadien fra
syklopentadien + vinylklorid; s-cis-krav), og **prediksjonsregel** (Markovnikov/Zaitsev/
kinetisk-termodynamisk). **Quiz-profilen** driller nabobegrep-distraktorer (SN1/SN2, E1/E2,
enantiomer/diastereomer, aromatisk/antiaromatisk, aktiverende/deaktiverende vs. o,p/meta,
Markovnikov/anti, 1,2-/1,4, kinetisk/termodynamisk, keto/enol, konsertert/trinnvis).

### Prøver (4 per temadel, 44 totalt)

Fire prøver per temadel (Del 1–11). Hver prøve speiler eksamensmalen i miniatyr: en blanding av
konstruksjonsoppgaver (tegn struktur/mekanisme/stereokjemi, navngi, forklar — med **tegnet
fasit** i tekstnotasjon + eksplisitt stabilitetsbegrunnelse). Omfang 25–45 min. Alle oppgaver
NYSKREVNE. Prøvekapittel-id `kj1020-<del>-prove`, chapterNumber `<del>.P` (jf. BYGGEKONTRAKT).
Del 0 og Del 12 har ingen egen prøve (Del 12s tre øvingseksamener dekker helheten). Prøvetitlene
er spesifisert per del i §3 (Prøve-kvote-linjene).

### Komplette øvingseksamener (3 — kapitlene 12.2–12.4)

Tre nyskrevne fem-oppgaver-sett i arkivmalen (**kun molekylbyggesett**, ~100 p, poeng per
deloppgave, alle svar tegnet/begrunnet), med ulik men typisk profil, full modellsvar-fasit
(strukturer i SMILES + navn, nummererte krumme piler, stabilitetsbegrunnelser) og Sensorblikket
per oppgave. **Kildeforbehold + etterfølger-merknad i alle tre:** sensorlogikken er utledet av
ett løsningsforslag + oppgaveformuleringer `(verifiser)`, malen bygger på 2001–2012-arkivet, og
byggefasen bør skaffe og verifisere mot TKJ4103-sett. Til sammen dekker de tre settene sjangrene
A–K minst én gang.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (4 t skriftlig, **kun molekylbyggesett**, fem likt vektede
   konstruksjonsoppgaver, poeng per deloppgave, ALT tegnes/begrunnes), fraværet av tabeller/
   kalkulator, kildeforbeholdet (ett løsningsforslag, sensorlogikk utledet) og etterfølger-
   profileringen (KJ1020 avviklet H2025, erstattet av TKJ4103; verifiser mot TKJ4103-sett)
   (fra kap. 0.1).
2. **Håndverket** — tegne-/tekstnotasjonen (SMILES + struktur + nummererte krumme piler) og
   begrunnelsesspråket (stabilitetsresonnement: resonansstabilisert / mest substituert / minst
   sterisk hindret / induktivt). **Dette gir poeng på hver oppgave — riktig svar uten
   begrunnelse gir sterkt redusert uttelling** (fra kap. 0.2).
3. **Prioriteringskartet** — temafrekvens-tabellen som tre lesenivåer: *perfekt* (SN/E 100 %,
   EAS+dirigering 89 %, aldol/Claisen–Schmidt 89 %, Grignard 89 %, Diels–Alder/dien 89 %,
   stereokjemi kiralitet/R-S/I-K-E-D 89 %), *kunne* (stolkonformasjon↔E2, IUPAC-stereo,
   addisjon til alken + karbokation-omleiring, syre-base/resonans, alkohol/eter/acetal,
   enol/keto, flertrinns-syntese), *kjenne* (¹H NMR-splitting/spektergjenkjenning, MS,
   NBS/benzyn).
4. **Sjangerguiden** — oppgavetypene A–K med løsningsoppskriftene i kortform
   (I/K/E/D-beslutningstre; R/S-CIP; IUPAC-algoritmen; SN/E-beslutningstre; Hückel-sjekken;
   arenium-dirigering; kondensasjonsoppskriften; Grignard-retrosyntesen; Diels–Alder/1,2-1,4)
   (fra kap. 12.1).
5. **Reaksjonsarket** — hele reaksjonsbanken (fra 11.1), siden alt må sitte og ingenting deles
   ut på eksamen; ordnet som transformasjon ↔ reagens for begge retninger.
6. **Sensorreglene** — de åtte sensorkravene (§2) + karakterskille-listen (bestått: riktige
   strukturer i grove trekk, hovedmekanismene; midtsjikt: korrekte krumme piler + fullstendige
   stereo-/I-K-E-D-lister + begrunnelser; topp: entydige stereonavn, katalysator gjendannet,
   full kondensasjonsmekanisme, presise stabilitetsargumenter). Alle sensorpremisser merket
   `(verifiser)` der de er utledet indirekte (kildeforbeholdet).
7. **Feilkatalogen** — de ti typiske feilene (F1–F10) samlet, hver med henvisning til kapitlet
   som forebygger den (F1 I-K-E-D/meso/telling → 3.2/3.4; F2 pileretning → 0.2 + mekanismekap.;
   F3 EAS-dirigering → 5.2/5.3; F4 begrunnelse → 0.2/2.2; F5 karbokation-omleiring → 4.1/6.1;
   F6 kinetisk/termodynamisk → 9.1; F7 kondensasjonsmekanisme → 8.1/8.3; F8 antiperiplanar →
   3.3/4.3; F9 delokalisert elektronpar → 2.2; F10 stereodeskriptor/Grignard-racemat → 1.3/3.4/7.1).
8. **Studieløp** — anbefalt progresjon (10-ukers og 3-ukers intensivvariant): Del 0 → 1 → 2
   (stabilitetsspråket tidlig) → 3 (stereokjemi tidlig, den tunge feilkilden) → 4 (SN/E, 100 %)
   → 5 → 6 → 7 → 8 → 9 → 10 (kort) → 11 (syntese binder alt) → 12; sjangerspillet (12.1) spres
   utover løpet; øvingseksamenene de tre siste ukene under tidspress (240 min, kun molekyl­
   byggesett ved siden av), gjerne med egne varianter av gjengangermolekylene.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først:** `TextbookCourse`-oppføring for `kj1020` (mønster `COURSE_BI_OKONOMI`,
   skrives til `textbook-courses-hoyskole.ts`): id `kj1020`, title «KJ1020 / TKJ4103 Organisk
   kjemi grunnkurs (NTNU) — eksamensrettet», `level: 'Høyskole'`, alle 36 kapitler med
   id/number/title/description/estimatedMinutes/topics/competenceGoals/prerequisites fra dette
   skjelettet, `sectionNames` fra §2-tabellen (obligatorisk — ellers viser bokforsiden «Seksjon N»).
2. **Del 0** (kap. 0.1–0.2) — etablerer sjangernavnene A–K, tekstnotasjonen (SMILES + krumme
   piler), begrunnelsesspråket (stabilitetsresonnement), frekvenstallene, kildeforbeholdet og
   etterfølger-profileringen (KJ1020→TKJ4103) som resten av boka refererer til. **Bygg 0.2
   grundig — hele boka bruker notasjonen derfra.**
3. **Del 1 → Del 2 → Del 3** (avhengighetskjeden: struktur/funk.grupper/nomenklatur → resonans/
   syre-base → stereokjemi). Del 3 fullfører navnsettings-avhengigheten (3.4 «entydige stereonavn»).
4. **Del 4** (SN/E — bygger på karbokation-resonans fra 2.1 og stereokjemi fra Del 3) → **Del 5**
   (aromatisitet bygger på 2.1; EAS bruker piler fra 0.2) → **Del 6** (addisjon/karbonyl-grunn,
   bygger på karbokation 4.1) → **Del 7** (Grignard, bygger på karbonyl 6.3) → **Del 8**
   (kondensasjon, bygger på enol/enolat 6.3 + 2.1) → **Del 9** (dien/Diels–Alder, bygger på
   allylkation 2.1/6.1) → **Del 10** (spektroskopi, kort, uavhengig) → **Del 11** (syntese bruker
   HELE reaksjonsrepertoaret fra Del 4–9).
5. **Del 12 til slutt** — sjangerspill + tre øvingseksamener gjenbruker HELE boka; bygges av én
   agent som leser hele skjelettet.
6. **Prøver** (`kj1020-<del>-prove`, chapterNumber `<del>.P`) etter at delens kapitler finnes;
   prøvetitlene er gitt per del i §3 (Del 1–11; Del 0 og Del 12 har ingen egen prøve).
7. **Narrativ-versjoner** (`<id>-narrativ.json` per kapittel, jf. `/narrativ`) og quiz-staging
   registreres etter hvert som kapitlene ferdigstilles — endelig blokk-/staging-skjema fastsettes
   i BYGGEKONTRAKT.md (fase 3). Kvotene fra kvotesammendraget (§4) er fasit.

Per konstruksjons-/mekanismekapittel gjelder **kapittel-DNA A** (§2): tip Eksamensvinkel → text
Forkunnskaper + collapsible Reaksjons- og mekanismeliste → text Oversikt → definition
Faktakontrakt (flashcard-kilden — toppnivå med title!) → theorem/text Reaksjons-/mekanisme- eller
konstruksjonskontrakt → text Tegne-/løsningsprosedyre → warning Typiske feil → example ×2–4 →
exercise ×6–12 → collapsible Repetisjon. Drillkapitlene (3.4/4.4/5.3/7.2/8.3/9.3/11.2/12.1) følger
**kapittel-DNA B**. Eksamensvinkel- og Typiske feil-blokkene fylles med belegget og feilkodene fra
dette skjelettet — forfatteren skal IKKE finne på frekvenstall.

### Verifikasjonssjekkliste (kjøres FØR ferdigmelding)

- [ ] **JSON-validering:** alle nye `src/lib/data/chapters/kj1020-*.json` parser med `json.load`
      (generer via `json.dump` — LaTeX-`\\`-fellen). `npm run build` grønn — vis output.
- [ ] **Metadata-konsistens:** alle 36 kapittel-id-er har eksisterende content-fil; `number` er
      del-basert («8.2», ALDRI lineær); prosareferanser bruker samme form («kap. 8.2»);
      prerequisites peker på eksisterende id-er (og bakover); `sectionNames` satt; narrativ-id-er
      registrert slik at toggle rendrer (verifiser med prod-server + curl at narrativ-ruter gir 200).
- [ ] **Tekstnotasjonen konsekvent (kritisk plattformtilpasning):** hvert mekanismekapittel har
      krumme piler i det avtalte nummererte formatet («[opphav] → [mål]»), med intermediater og
      **regenerert katalysator** der relevant (6.2 acetal, 6.1 hydratisering); hver struktur
      oppgis som **SMILES + IUPAC-navn + kondensert formel/ordbeskrivelse**; ingen forsøk på
      grafiske tegninger; fiskekrok markert for radikaler (NBS).
- [ ] **Kjemisk presisjon / `(verifiser)`-markeringer:** grep `-i verifiser` — alle markerte
      detaljer (eksakte pKa-holdepunkter, ox/red-reagensdetaljer, benzyn-/TKJ4103-pensumomfang,
      KJ1020→TKJ4103-status, sensorpremisser utledet fra ett løsningsforslag, kryssbok-lenker)
      fagfellesjekkes i fase 6 mot standard organisk-kjemi-pensum (f.eks. Clayden / McMurry /
      Vollhardt) og mot TKJ4103-emnesiden. **INGEN oppdiktede reaksjoner/mekanismer.**
- [ ] **Mekanismer korrekte:** hver krum pil starter ved elektronpar/binding og peker mot
      elektrofilt senter (F2-kontroll); SN2 = inversjon, SN1 = racemisering; E2 = antiperiplanar;
      acetal via oksokarbenium med gjendannet H⁺; karbokation-omleiring kun når stabiliteten
      øker; kondensasjon = enolat → angrep → **dehydrering** (F7-kontroll); Diels–Alder tegnet
      **konsertert** (tre samtidige piler). Skrevet i LaTeX ($\text{}$ for arter/formler).
- [ ] **Stereokjemi-fullstendighet:** «tegn alle isomerer»-oppgaver har komplett $2^n$-liste med
      meso identifisert (F1-kontroll); I/K/E/D-klassifisering korrekt (enantiomer vs. diastereomer);
      R/S og E/Z korrekt (CIP); Grignard-produkter med nytt stereosenter merket **racemisk/optisk
      inaktivt** (F10). Byggesett-resonnement beskrevet i ord der 3D kreves.
- [ ] **IUPAC-entydighet:** navnsettingsoppgaver har lokant på suffiks, alfabetiserte
      substituenter, og **stereodeskriptorer der relevant** (F10); stereo-navn fullført i 3.4.
- [ ] **Aromatisitet/dirigering:** Hückel 4n+2 anvendt med π-telling og planaritetssjekk;
      syklopentadien-anionet aromatisk (6 π) og koblet til pKa; EAS-dirigering korrekt, inkl.
      **halogen deaktiverende men o,p** (F3).
- [ ] **Kondensasjon/Grignard/dien:** kondensasjonsmekanismene har alle tre faser (enolat →
      angrep → dehydrering, F7); Grignard-retrosyntese velger riktig karbonylklasse + racemat
      (F10); 1,2-/1,4-addisjon skiller kinetisk/termodynamisk med begrunnelse (F6);
      norbornadien-ruten (Diels–Alder → E2) korrekt.
- [ ] **Spektroskopi bevisst kort (NTNU/UiO-forskjell):** kun ett NMR-/MS-kapittel; **ingen IR,
      ingen strukturoppklaring, ingen vedleggstabeller**; n+1 og spektergjenkjenning (tre
      bromalkaner) + m/z-identifikasjon; plassert lavt i prioritet.
- [ ] **Kapittel-DNA:** hvert konstruksjons-/mekanismekapittel har Eksamensvinkel-`tip` (frekvens/
      vekt fra dette skjelettet), Forkunnskaper + `collapsible` Reaksjons- og mekanismeliste,
      Faktakontrakt-`definition` (flashcard-kilde, toppnivå med title), Reaksjons-/mekanisme- eller
      konstruksjonskontrakt, Tegne-/løsningsprosedyre, Typiske feil-`warning` (inkl. «uten
      begrunnelse = redusert uttelling»), ≥2 Modellsvar-`example`, 6–12 `exercise` med `solution`
      (tegnet i tekstnotasjon) + `hints`, Repetisjons-`collapsible`; drillkapitlene har
      løsningsoppskrift + gjennomtegnet case + 8–15 varianter.
- [ ] **Kvotesum:** quiz ≥548 og flashcards ≥712 fordelt per kapittel som i §4 (hardt minimum
      ≥500/≥500); 4 prøver per del for Del 1–11 (44) + 3 øvingseksamener; fasit-svaralternativer
      rebalansert (jevn a/b/c/d — options[0] alltid riktig i staging, runtime stokker).
- [ ] **Leserkrav:** Forkunnskaper-blokk med kryssbok-lenker (kun til eksisterende kapitler —
      kjemi1-/kjemi2-lenkene i §3 er merket `(verifiser lenke)`, sjekk mot faktiske kapittel-id-er)
      + `collapsible` Reaksjons- og mekanismeliste først i hvert kapittel; «bør kjenne til»-stoff
      (DoU, NBS, benzyn, UV/Vis, CO₂-Grignard) plassert ETTER kjernestoffet og merket; hver
      oppgave sjangermerket (A–K).
- [ ] **Kildeforbehold + etterfølger-profilering synlig:** Del 0 (kap. 0.1) og alle tre
      øvingseksamener sier eksplisitt at sensorlogikken er utledet av ett løsningsforslag +
      oppgaveformuleringer `(verifiser)`, at malen bygger på 2001–2012-arkivet, og at KJ1020 er
      avviklet H2025 og erstattet av TKJ4103 (7,5 sp) `(verifiser)` — byggefasen bør verifisere
      mot TKJ4103-sett.
- [ ] **Autentiske legemiddelmolekyler som innramming:** eksempler rammet i virkelige
      legemidler/naturstoffer (Naproxen, Ibuprofen, Paracetamol, Tamoxifen, atenolol, tyroksin,
      muskarin) der naturlig — men **oppgavene er nyskrevne** (endrede substituenter/posisjoner).
- [ ] **Opphavsrett:** alle oppgaver, strukturcase, øvingseksamener og fasitmomenter er
      NYSKREVNE — ingen formuleringer fra NTNU-oppgavesett eller løsningsforslaget. Reaksjoner,
      mekanismer, IUPAC-regler, Hückel og standard fagbegreper er fritt fagstoff.
- [ ] **Verifiser rendering:** prod-server + curl mot kapittel- og narrativ-ruter (200 +
      kapittelspesifikk streng), jf. `getChapterMeta`-lærdommen. ALDRI meld ferdig uten dette.
